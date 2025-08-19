
var app = null;
var DEBUG = false;

var _universityTypes = [{
        value: '전문대학',
        text: '전문대학'
    },
    {
        value: '대학',
        text: '대학'
    },
    {
        value: '대학원',
        text: '대학원'
    },
];

var _globalUniversityGradeArray = [{
        key: 'associate',
        text: '전문학사'
    },
    {
        key: 'bachelor',
        text: '학사'
    },
    {
        key: 'master',
        text: '석사'
    },
    {
        key: 'doctor',
        text: '박사'
    },
];

var _globalCompanySizeSummaryObject = {
    'A': '농업',
    'B': '광업',
    'C': '제조',
    'D': '전기',
    'E': '수도',
    'F': '건설',
    'G': '도매',
    'H': '운수',
    'I': '숙박',
    'J': '정보',
    'K': '금융',
    'L': '부동산',
    'M': '전문',
    'N': '시설',
    'O': '행정',
    'P': '교육',
    'Q': '보건',
    'R': '예술',
    'S': '협회',
    'T': '가구',
    'U': '국제',
    'Z': '미상'
};

var _globalCompanyAreaArray = [{
        'text': '서울',
        'value': '서울'
    },
    {
        'text': '강원',
        'value': '강원'
    },
    {
        'text': '부산',
        'value': '부산'
    },
    {
        'text': '충북',
        'value': '충북'
    },
    {
        'text': '대구',
        'value': '대구'
    },
    {
        'text': '충남',
        'value': '충남'
    },
    {
        'text': '인천',
        'value': '인천'
    },
    {
        'text': '전북',
        'value': '전북'
    },
    {
        'text': '광주',
        'value': '광주'
    },
    {
        'text': '전남',
        'value': '전남'
    },
    {
        'text': '대전',
        'value': '대전'
    },
    {
        'text': '경북',
        'value': '경북'
    },
    {
        'text': '울산',
        'value': '울산'
    },
    {
        'text': '경남',
        'value': '경남'
    },
    {
        'text': '세종',
        'value': '세종'
    },
    {
        'text': '제주',
        'value': '제주'
    },
    {
        'text': '경기',
        'value': '경기'
    }
];

const _globalJobHighObject = {
    "0":"경영·사무·금융·보험직",
    "1":"연구직 및 공학 기술직",
    "2":"교육·법률·사회복지·경찰·소방직 및 군인",
    "3":"보건·의료직",
    "4":"예술·디자인·방송·스포츠직",
    "5":"미용·여행·숙박·음식·경비·청소직",
    "6":"영업·판매·운전·운송직",
    "7":"건설·채굴직",
    "8":"설치·정비·생산직",
    "9":"농림어업직"
}

const _globalJobMiddleObject = {
    "01":"관리직(임원·부서장)",
    "02":"경영·행정·사무직",
    "03":"금융·보험직",
    "11":"인문·사회과학 연구직",
    "12":"자연·생명과학 연구직",
    "13":"정보통신 연구개발직 및 공학 기술직",
    "14":"건설·채굴 연구개발직 및 공학 기술직",
    "15":"제조 연구개발직 및 공학 기술직",
    "21":"교육직",
    "22":"법률직",
    "23":"사회복지·종교직",
    "24":"경찰·소방·교도직",
    "25":"군인",
    "30":"보건·의료직",
    "41":"예술·디자인·방송직",
    "42":"스포츠·레크리에이션직",
    "51":"미용·예식 서비스직",
    "52":"여행·숙박·오락 서비스직",
    "53":"음식 서비스직",
    "54":"경호·경비직",
    "55":"돌봄 서비스직(간병·육아)",
    "56":"청소 및 기타 개인서비스직",
    "61":"영업·판매직",
    "62":"운전·운송직",
    "70":"건설·채굴직",
    "81":"기계 설치·정비·생산직",
    "82":"금속·재료 설치·정비·생산직(판금·단조·주조·용접·도장 등)",
    "83":"전기·전자 설치·정비·생산직",
    "84":"정보통신 설치·정비직",
    "85":"화학·환경 설치·정비·생산직",
    "86":"섬유·의복 생산직",
    "87":"식품 가공·생산직",
    "88":"인쇄·목재·공예 및 기타 설치·정비·생산직",
    "89":"제조 단순직",
    "90":"농림어업직"
}

const _globalJobLowObject = {
    "011":"의회의원·고위공무원 및 기업 고위임원",
    "012":"행정·경영·금융·보험 관리자　",
    "013":"전문서비스 관리자",
    "014":"여행․숙박․음식․경비․청소 관리자",
    "015":"영업·판매·운송 관리자",
    "016":"건설·채굴·제조·생산 관리자",
    "021":"정부·공공행정 전문가",
    "022":"경영·인사 전문가",
    "023":"회계·세무·감정 전문가",
    "024":"광고·조사·상품기획·행사기획 전문가",
    "025":"정부·공공 행정 사무원",
    "026":"경영지원 사무원",
    "027":"회계·경리 사무원",
    "028":"무역·운송·생산·품질 사무원",
    "029":"안내·고객상담·통계·비서·사무보조 및 기타 사무원",
    "031":"금융·보험 전문가",
    "032":"금융·보험 사무원",
    "033":"금융·보험 영업원",
    "110":"인문·사회과학 연구원",
    "121":"자연과학 연구원 및 시험원",
    "122":"생명과학 연구원 및 시험원",
    "131":"컴퓨터하드웨어·통신공학 기술자",
    "132":"컴퓨터시스템 전문가",
    "133":"소프트웨어 개발자",
    "134":"데이터·네트워크 및 시스템 운영 전문가",
    "135":"정보보안 전문가",
    "136":"통신·방송송출 장비 기사",
    "140":"건축․토목공학 기술자 및 시험원",
    "151":"기계·로봇공학 기술자 및 시험원",
    "152":"금속·재료공학 기술자 및 시험원",
    "153":"전기·전자공학 기술자 및 시험원",
    "154":"화학공학 기술자 및 시험원",
    "155":"에너지·환경공학 기술자 및 시험원",
    "156":"섬유공학 기술자 및 시험원",
    "157":"식품공학 기술자 및 시험원",
    "158":"소방·방재·산업안전·비파괴 기술자",
    "159":"제도사 및 기타 인쇄·목재 등 공학 기술자 및 시험원",
    "211":"대학 교수 및 강사",
    "212":"학교 교사",
    "213":"유치원 교사",
    "214":"문리·기술·예능 강사",
    "215":"장학관 및 기타 교육 종사자",
    "221":"법률 전문가",
    "222":"법률 사무원",
    "231":"사회복지사 및 상담사",
    "232":"보육교사 및 기타 사회복지 종사자",
    "233":"성직자 및 기타 종교 종사자",
    "240":"경찰관, 소방관 및 교도관",
    "250":"군인",
    "301":"의사, 한의사 및 치과의사",
    "302":"수의사",
    "303":"약사 및 한약사",
    "304":"간호사",
    "305":"영양사",
    "306":"의료기사․치료사․재활사",
    "307":"보건·의료 종사자",
    "411":"작가·통번역가",
    "412":"기자 및 언론 전문가",
    "413":"학예사·사서·기록물관리사",
    "414":"창작·공연 전문가(작가, 연극 제외)",
    "415":"디자이너",
    "416":"연극·영화·방송 전문가",
    "417":"문화·예술 기획자 및 매니저",
    "420":"스포츠·레크리에이션 종사자",
    "511":"미용 서비스원",
    "512":"결혼·장례 등 예식 서비스원",
    "521":"여행 서비스원",
    "522":"항공기·선박·열차 객실승무원",
    "523":"숙박시설 서비스원",
    "524":"오락시설 서비스원",
    "531":"주방장 및 조리사",
    "532":"식당 서비스원",
    "541":"경호·보안 종사자",
    "542":"경비원",
    "550":"돌봄 서비스 종사자",
    "561":"청소․방역 및 가사 서비스원",
    "562":"검침·주차관리 및 기타 서비스 단순 종사자",
    "611":"부동산 컨설턴트 및 중개인",
    "612":"영업원 및 상품중개인",
    "613":"텔레마케터",
    "614":"소규모 상점 경영 및 일선 관리 종사자",
    "615":"판매 종사자",
    "616":"매장계산원 및 매표원",
    "617":"판촉 및 기타 판매 단순 종사자",
    "621":"항공기·선박·철도 조종사 및 관제사",
    "622":"자동차 운전원",
    "623":"물품이동장비 조작원(크레인·호이스트·지게차)",
    "624":"택배원 및 기타 운송 종사자",
    "701":"건설구조 기능원",
    "702":"건축마감 기능원",
    "703":"배관공",
    "704":"건설·채굴 기계 운전원",
    "705":"기타 건설 기능원(채굴포함)",
    "706":"건설·채굴 단순 종사자",
    "811":"기계장비 설치·정비원(운송장비 제외)",
    "812":"운송장비 정비원",
    "813":"금형원 및 공작기계 조작원",
    "814":"냉·난방 설비 조작원",
    "815":"자동조립라인·산업용로봇 조작원",
    "816":"기계 조립원(운송장비 제외)",
    "817":"운송장비 조립원",
    "821":"금속관련 기계·설비 조작원",
    "822":"판금원 및 제관원",
    "823":"단조원 및 주조원",
    "824":"용접원",
    "825":"도장원 및 도금원",
    "826":"비금속제품 생산기계 조작원",
    "831":"전기공",
    "832":"전기·전자기기 설치·수리원",
    "833":"발전·배전 장치 조작원",
    "834":"전기·전자 설비 조작원",
    "835":"전기·전자 부품·제품 생산기계 조작원",
    "836":"전기·전자 부품·제품 조립원",
    "841":"정보 통신기기 설치·수리원",
    "842":"방송·통신장비 설치·수리원",
    "851":"석유·화학물 가공장치 조작원",
    "852":"고무·플라스틱 등 화학제품 생산기계 조작원 및 조립원",
    "853":"환경관련 장치 조작원",
    "861":"섬유 제조·가공 기계 조작원",
    "862":"패턴사, 재단사 및 재봉사",
    "863":"의복 제조원 및 수선원",
    "864":"제화원, 기타 섬유·의복 기계 조작원 및 조립원",
    "871":"제과·제빵원 및 떡제조원",
    "872":"식품 가공 기능원",
    "873":"식품 가공 기계 조작원",
    "881":"인쇄기계·사진현상기 조작원",
    "882":"목재·펄프·종이 생산기계 조작원",
    "883":"가구·목제품 제조·수리원",
    "884":"공예원 및 귀금속 세공원",
    "885":"악기·간판 및 기타 제조 종사자",
    "890":"제조 단순 종사자",
    "901":"작물재배 종사자",
    "902":"낙농·사육 종사자",
    "903":"임업 종사자",
    "904":"어업 종사자",
    "905":"농림어업 단순 종사자"
}

const _globalAcademicDeptCategories_upper = {
    "인문계열" : "인문계열",
    "사회계열" : "사회계열",
    "교육계열" : "교육계열",
    "공학계열" : "공학계열",
    "자연계열" : "자연계열",
    "의약계열" : "의약계열",
    "예체능계열" : "예체능계열"
}

const _globalJobFlow = {
    "2" : "유지",
    "3" : "이동",
    "4" : "미취업",
}

const _globalComtype = {
    "1" : "대기업",
    "2" : "중소기업",
    "3" : "비영리기업",
}

/**
 * @description 토익 차트 관련 series data 생성.
 * @param {*} toeic
 * @returns
 */
function getToeicSeriesData(toeic, type) {
    var group = type == 'toeic' ? [{
            name: '0~99',
            start: 0,
            end: 99
        },
        {
            name: '100~199',
            start: 100,
            end: 199,
        },
        {
            name: '200~299',
            start: 200,
            end: 299,
        },
        {
            name: '300~399',
            start: 300,
            end: 399,
        },
        {
            name: '400~499',
            start: 400,
            end: 499,
        },
        {
            name: '500~599',
            start: 500,
            end: 599,
        },
        {
            name: '600~699',
            start: 600,
            end: 699,
        },
        {
            name: '700~799',
            start: 700,
            end: 799,
        },
        {
            name: '800~899',
            start: 800,
            end: 899,
        },
        {
            name: '900~990',
            start: 900,
            end: 990,
        },
    ] : [{
            name: '0~10',
            start: 0,
            end: 10
        },
        {
            name: '11~20',
            start: 11,
            end: 20
        },
        {
            name: '21~30',
            start: 21,
            end: 30
        },
        {
            name: '31~40',
            start: 31,
            end: 40
        },
        {
            name: '41~50',
            start: 41,
            end: 50
        },
        {
            name: '51~60',
            start: 51,
            end: 60
        },
        {
            name: '61~70',
            start: 61,
            end: 70
        },
        {
            name: '71~80',
            start: 71,
            end: 80
        },
        {
            name: '81~90',
            start: 81,
            end: 90
        },
        {
            name: '91~100',
            start: 91,
            end: 100
        },
    ];

    var totalCount = toeic.length;

    if (totalCount > 0) {
        var result = _.map(group, function(item) {
            var count = _.filter(toeic, function(x) {
                if (x >= item.start && x <= item.end) {
                    return x;
                }
            }).length;
            item.count = count;
            item.y = round((count / totalCount) * 100);
            return item;
        });
        return result
    } else {
        return [];
    }
}


/**
 * @description 학점 차트 관련 series data 생성.
 * @param {*} toeic
 * @returns
 */
function getGradeSeriesData(data) {
    var group = [{
            name: '3.0 미만',
            start: 0,
            end: 2.9
        },
        {
            name: '3.0 ~ 3.5 미만',
            start: 3.0,
            end: 3.4
        },
        {
            name: '3.5 ~ 4.0 미만',
            start: 3.5,
            end: 3.9
        },
        {
            name: '4.0 ~ 4.5 이상',
            start: 4.0,
            end: 5
        },
    ];

    var totalCount = data.length;


    var result = _.map(group, function(item) {
        var count = _.filter(data, function(x) {
            if (x >= item.start && x <= item.end) {
                return x;
            }
        }).length;
        item.count = count;
        item.y = round((count / totalCount) * 100);
        return item;
    });
    return result
}


/**
 * @description 라인 차트 Render
 * @param {*} id
 * @param {*} seriesData
 */
function setRenderLineChart(id, seriesData, min, max, startIndex, endIndex) {
    Highcharts.chart(id, {
        title: {
            text: ''
        },
        tooltip: {
            headerFormat: '',
            pointFormat: '<span style="color:{point.color}"> \u25CF </span><b>{point.name}</b>  ' + '<br /><b>{point.y:.1f}%</b>',
        },
        yAxis: {
            title: {
                text: ''
            },
            min: 0,
            max: 100
        },
        xAxis: {
            type: 'category'
        },
        series: [{
            showInLegend: false,
            name: '',
            data: seriesData,
            marker: {
                symbol: 'cross',
                lineColor: 'black',
                lineWidth: 3,
                fillColor: '#FFFFFF',
            }
        }],
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    y: -20,
                    style: {
                        fontFamily: 'Segoe UI',
                        color: 'gray',
                        fontSize: '16px',
                        textOutline: false,
                    },
                    format: '{point.y:.1f}%',
                },
                color: 'gray',
                marker: {
                    radius: 7
                }
            }
        },
        annotations: [{
            labels: [{
                point: {
                    xAxis: 0,
                    yAxis: 0,
                    x: startIndex,
                    y: seriesData[startIndex].y + 20,
                },
                text: '최소 ' + min,
            }, {
                point: {
                    xAxis: 0,
                    yAxis: 0,
                    x: endIndex,
                    y: seriesData[endIndex].y + 20
                },
                text: '최대 ' + max,
            }]
        }],
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        }
    });
}



/**
 * @description 소재지 관련 JSON Array Mapping
 * @param {*} area
 * @param {*} degree
 */
function getUniversityDegreeRemapping(area, degree) {
    //소재지별 최종학력 근황.
    var all = _.map(getSeriesDataAndSort(area), function(item) {
        return {
            text: item.text,
            point: item.point,
            associate: 0,
            bachelor: 0,
            master: 0,
            doctor: 0
        };
    });


    _.map(_globalUniversityGradeArray, function(grade) {
        var nowData = degree[grade.text];
        _.map(all, function(area, index) {
            if (nowData[area.text]) {
                all[index][grade.key] = round((nowData[area.text] / all[index]['point']) * 100);
            }
        });
    });
    return all;
}



/**
 * @description 출신학교 / 전공 관련 JSON Array Mapping
 * @param {*} area
 * @param {*} degree
 */
function getOriginUniversityRemapping(all, degree) {
    var universityKey = _.keys(all);


    var result = {
        all: [],
        associate: [],
        bachelor: [],
        master: [],
        doctor: []
    };
    var allPoint = _.sum(_.map(universityKey, function(item, index) {
        return all[item];
    }));

    var _all = _.map(universityKey, function(item, index) {
        return {
            text: item,
            value: round((all[item] / allPoint) * 100) + '%(' + all[item] + '명)',
            point: all[item],
        };
    });

    result.all = _.sortBy(_all, 'point').reverse();


    _.map(_globalUniversityGradeArray, function(grade, index) {
        var nowObject = degree[grade.text];
        var nowKey = _.keys(nowObject);
        if (nowObject) {
            var nowPoint = _.sum(_.map(nowKey, function(_key, index) {
                return nowObject[_key];
            }));
            var _now = _.map(nowKey, function(item, index) {
                return {
                    text: item,
                    value: round((nowObject[item] / nowPoint) * 100) + '%(' + nowObject[item] + '명)',
                    point: nowObject[item],
                };
            });

            result[grade.key] = _.sortBy(_now, 'point').reverse();
        }
    });

    return result;
}


function json_to_sheet(remappingData) {
    var _workSheet = {};
    var _range = {
        s: {
            c: 0,
            r: 0
        },
        e: {
            c: 21,
            r: remappingData.length
        }
    };
    var mergesArray = [];
    remappingData.map((item, index) => {
        var option = item[0];
        var existsCount = item[1];
        var data = item.slice(2, 21);

        var styleObject = {};

        if (option === 'bigtitle') {
            //mergesArray.push({s:{r:index,c:0},e:{r:index,c:9}});
            styleObject = {
                border: {
                    bottom: {
                        style: 'thin',
                        color: 'gray'
                    },
                    top: {
                        style: 'thin',
                        color: 'gray'
                    },
                    left: {
                        style: 'thin',
                        color: 'gray'
                    },
                    right: {
                        style: 'thin',
                        color: 'gray'
                    },
                },
                font: {
                    sz: 13,
                    bold: true,
                    //color: { rgb: '30839f' },
                },
                fill: {
                    fgColor: {
                        rgb: 'F2F2F2'
                    },
                },
                alignment: {
                    wrapText: true,
                    horizontal: 'center',
                    vertical: 'center'
                },
            };
        } else if (option === 'bigtitle-three') {
            mergesArray.push({
                s: {
                    r: index,
                    c: 0
                },
                e: {
                    r: index,
                    c: 2
                }
            });
            styleObject = {
                border: {
                    bottom: {
                        style: 'thin',
                        color: 'gray'
                    },
                    top: {
                        style: 'thin',
                        color: 'gray'
                    },
                    left: {
                        style: 'thin',
                        color: 'gray'
                    },
                    right: {
                        style: 'thin',
                        color: 'gray'
                    },
                },
                font: {
                    sz: 13,
                    bold: true,
                    //color: { rgb: '30839f' },
                },
                fill: {
                    fgColor: {
                        rgb: 'F2F2F2'
                    },
                },
                alignment: {
                    wrapText: true,
                    horizontal: 'center',
                    vertical: 'center'
                },
            };
        } else if (option === 'bigtitle-four') {
            mergesArray.push({
                s: {
                    r: index,
                    c: 0
                },
                e: {
                    r: index,
                    c: 3
                }
            });
            styleObject = {
                font: {
                    sz: 20,
                    bold: true,
                },
                fill: {
                    fgColor: {
                        rgb: 'F2F2F2'
                    },
                },
                alignment: {
                    horizontal: 'center',
                    vertical: 'center'
                },
                border: {
                    bottom: {
                        style: 'thin',
                        color: 'gray'
                    },
                    top: {
                        style: 'thin',
                        color: 'gray'
                    },
                    left: {
                        style: 'thin',
                        color: 'gray'
                    },
                    right: {
                        style: 'thin',
                        color: 'gray'
                    },
                }
            };
        } else if (option === 'search1') {
            //mergesArray.push({s:{r:index,c:0},e:{r:index,c:9}});
            styleObject = {
                border: {
                    top: {
                        style: 'thin',
                        color: 'gray'
                    },
                    left: {
                        style: 'thin',
                        color: 'gray'
                    },
                    right: {
                        style: 'thin',
                        color: 'gray'
                    },
                },
            };
        } else if (option === 'search2') {
            //mergesArray.push({s:{r:index,c:0},e:{r:index,c:9}});
            styleObject = {
                border: {
                    bottom: {
                        style: 'thin',
                        color: 'gray'
                    },
                    left: {
                        style: 'thin',
                        color: 'gray'
                    },
                    right: {
                        style: 'thin',
                        color: 'gray'
                    },
                },
            };
        } else if (option === 'search3') {
            mergesArray.push({
                s: {
                    r: index,
                    c: 0
                },
                e: {
                    r: index,
                    c: 2
                }
            });
            styleObject = {
                border: {
                    bottom: {
                        style: 'thin',
                        color: 'gray'
                    },
                    left: {
                        style: 'thin',
                        color: 'gray'
                    },
                    right: {
                        style: 'thin',
                        color: 'gray'
                    },
                },
            };
        } else if (option === 'search-one-three') {
            mergesArray.push({
                s: {
                    r: index,
                    c: 1
                },
                e: {
                    r: index,
                    c: 3
                }
            });
            styleObject = {
                font: {
                    sz: 13,
                    bold: true,
                },
                border: {
                    bottom: {
                        style: 'thin',
                        color: 'gray'
                    },
                    top: {
                        style: 'thin',
                        color: 'gray'
                    },
                    left: {
                        style: 'thin',
                        color: 'gray'
                    },
                    right: {
                        style: 'thin',
                        color: 'gray'
                    },
                },
                alignment: {
                    wrapText: true,
                    horizontal: 'center',
                    vertical: 'center'
                }
            };
        }
        if (option === 'header' || option === 'header-two-three' || option === 'header-two' || option === 'header-three-three' ||
            option === 'header-three-five' || option === 'header-three' || option === 'header-two-multi' || option === 'header-five-three' || option === 'header-six-three') {
            if (option === 'header-two-three') {
                mergesArray.push({
                    s: {
                        r: index,
                        c: 1
                    },
                    e: {
                        r: index,
                        c: 2
                    }
                });
                mergesArray.push({
                    s: {
                        r: index,
                        c: 3
                    },
                    e: {
                        r: index,
                        c: 4
                    }
                });
                mergesArray.push({
                    s: {
                        r: index,
                        c: 5
                    },
                    e: {
                        r: index,
                        c: 6
                    }
                });
            } else if (option === 'header-three-three') {
                mergesArray.push({
                    s: {
                        r: index,
                        c: 1
                    },
                    e: {
                        r: index,
                        c: 3
                    }
                });
                mergesArray.push({
                    s: {
                        r: index,
                        c: 4
                    },
                    e: {
                        r: index,
                        c: 6
                    }
                });
                mergesArray.push({
                    s: {
                        r: index,
                        c: 7
                    },
                    e: {
                        r: index,
                        c: 9
                    }
                });
            } else if (option === 'header-three-five') {
                mergesArray.push({
                    s: {
                        r: index,
                        c: 1
                    },
                    e: {
                        r: index,
                        c: 3
                    }
                });
                mergesArray.push({
                    s: {
                        r: index,
                        c: 4
                    },
                    e: {
                        r: index,
                        c: 6
                    }
                });
                mergesArray.push({
                    s: {
                        r: index,
                        c: 7
                    },
                    e: {
                        r: index,
                        c: 9
                    }
                });
                mergesArray.push({
                    s: {
                        r: index,
                        c: 10
                    },
                    e: {
                        r: index,
                        c: 12
                    }
                });
                mergesArray.push({
                    s: {
                        r: index,
                        c: 13
                    },
                    e: {
                        r: index,
                        c: 15
                    }
                });
            } else if (option === 'header-two') {
                mergesArray.push({
                    s: {
                        r: index,
                        c: 1
                    },
                    e: {
                        r: index,
                        c: 2
                    }
                });
            } else if (option === 'header-three') {
                mergesArray.push({
                    s: {
                        r: index,
                        c: 1
                    },
                    e: {
                        r: index,
                        c: 3
                    }
                });
            } else if (option === 'header-two-multi') {
                var colCnt = data.length - 1 / 2;
                for (var i = 0; i < colCnt; i++) {
                    mergesArray.push({
                        s: {
                            r: index,
                            c: (i * 2) + 1
                        },
                        e: {
                            r: index,
                            c: (i + 1) * 2
                        }
                    });
                }
            } else if (option === 'header-five-three') {
                mergesArray.push({
                    s: {
                        r: index,
                        c: 1
                    },
                    e: {
                        r: index,
                        c: 5
                    }
                });
                mergesArray.push({
                    s: {
                        r: index,
                        c: 6
                    },
                    e: {
                        r: index,
                        c: 8
                    }
                });
                mergesArray.push({
                    s: {
                        r: index,
                        c: 9
                    },
                    e: {
                        r: index,
                        c: 11
                    }
                });
                mergesArray.push({
                    s: {
                        r: index,
                        c: 12
                    },
                    e: {
                        r: index,
                        c: 14
                    }
                });
                mergesArray.push({
                    s: {
                        r: index,
                        c: 15
                    },
                    e: {
                        r: index,
                        c: 17
                    }
                });
            } else if (option === 'header-six-three') {
                mergesArray.push({
                    s: {
                        r: index,
                        c: 1
                    },
                    e: {
                        r: index,
                        c: 6
                    }
                });
                mergesArray.push({
                    s: {
                        r: index,
                        c: 7
                    },
                    e: {
                        r: index,
                        c: 9
                    }
                });
                mergesArray.push({
                    s: {
                        r: index,
                        c: 10
                    },
                    e: {
                        r: index,
                        c: 12
                    }
                });
                mergesArray.push({
                    s: {
                        r: index,
                        c: 13
                    },
                    e: {
                        r: index,
                        c: 15
                    }
                });
                mergesArray.push({
                    s: {
                        r: index,
                        c: 16
                    },
                    e: {
                        r: index,
                        c: 18
                    }
                });
            }
            styleObject = {
                border: {
                    bottom: {
                        style: 'thin',
                        color: 'gray'
                    },
                    top: {
                        style: 'thin',
                        color: 'gray'
                    },
                    left: {
                        style: 'thin',
                        color: 'gray'
                    },
                    right: {
                        style: 'thin',
                        color: 'gray'
                    },
                },
                fill: {
                    fgColor: {
                        rgb: 'FFFFDE7'
                    },
                },
                alignment: {
                    wrapText: true,
                    horizontal: 'center',
                    vertical: 'center'
                },
            };
        }
        if (option === 'data' || option === 'data-first' || option === 'data-three') {
            if (option === 'data-three') {
                mergesArray.push({
                    s: {
                        r: index,
                        c: 0
                    },
                    e: {
                        r: index,
                        c: 2
                    }
                });
            }
            styleObject = {
                border: {
                    bottom: {
                        style: 'thin',
                        color: 'gray'
                    },
                    top: {
                        style: 'thin',
                        color: 'gray'
                    },
                    left: {
                        style: 'thin',
                        color: 'gray'
                    },
                    right: {
                        style: 'thin',
                        color: 'gray'
                    },
                },
                alignment: {
                    wrapText: true,
                    horizontal: 'center',
                    vertical: 'center'
                },
            };
        }

        data.map((subitem, subindex) => {
            var type = typeof subitem == 'number' ? 'n' : typeof subitem == 'boolean' ? 'b' : 'z';
            if (existsCount > subindex)
                if (option === 'data-first') {
                    if (subindex === 0) {
                        styleObject.fill = {
                            fgColor: {
                                rgb: 'FFFFDE7'
                            }
                        };
                    } else {
                        styleObject.fill = {
                            fgColor: {
                                rgb: 'FFFFFF'
                            }
                        };
                    }

                }
            _workSheet[XLSX.utils.encode_cell({
                r: index,
                c: subindex
            })] = {
                t: type,
                v: subitem,
                s: styleObject
            };
        });




    });
    _workSheet['!ref'] = XLSX.utils.encode_range(_range);
    return {
        data: _workSheet,
        mergesArray
    };

}


function s2ab(s) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
    return buf;
}

function Workbook() {
    if (!(this instanceof Workbook)) return new Workbook();
    this.SheetNames = [];
    this.Sheets = {};
}


/**
 * @description Select List 기본 선택 추가.
 * @param {*} _type
 * @returns
 */
function getDefaultSelect(_type) {
    var result = {
        text: '선택',
        value: ''
    };
    switch (_type) {
        case "YEAR":
            result['text'] = '대상 년도 선택';
            break;

        case "COMTYPE":
            result['text'] = '기업 규모 선택';
            break;

        case "COMIND":
            result['text'] = '기업 분류 선택'
            break;
        case "COMNM":
            result['text'] = '기업 분류 선택'
            break;
    }
    return result;
}


$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: DEBUG ? "json/universityui.json" : "/swiss/cm/getUniversityUICode.do",
        dataType: "text",
        success: function(data) {
            //if(result.code === 'SUCCESS') {
            var responseData = JSON.parse(data);
            uiCodeRawData = responseData;
            var _license1 = _.map(arrayToObject(responseData, 'LICENSE_L'), function(item) {
                var splitItem = item.value.split('_');
                return {
                    value: splitItem[1],
                    text: {
                        code: item.value,
                        data: item.text
                    }
                }
            });

            var _all_university = [];
            var _uni_dept = [];
            // var _all_subCode = [];
            _.map(_.keys(responseData.UNIVERSITY), function(key) {
                var nowTypeData = _.map(getJSONArray(responseData.UNIVERSITY[key]), function(item, index) {
                    var splitCode = item.text.split('_');
                    var unicode = splitCode[0] + '_' + splitCode[1];
                    var uniname = item.value[1] == '본교' ? item.value[0] : item.value[0] + '(' + item.value[1] + ')';
                    return {
                        id: unicode,
                        name: uniname,
                    }
                });

                _all_university = _.concat(_all_university, nowTypeData);
                _all_university.sort(function(a, b) {
                    return (a.name).localeCompare(b.name);
                });
            });

            if (selectUcode != "" && selectUcode != "undefined_undefined") {
                new_all_university = []
                _all_university.forEach(function(item, index) {
                    if (selectUcode == item.id)
                        new_all_university.push(item)
                });
                _all_university = new_all_university
            }


            var _all_license = [];

            _.map(_.keys(responseData.LICENSE_M), function(key) {
                var nowLicenseData = _.map(responseData.LICENSE_M[key], function(item, index) {
                    var values = item.split('_');
                    return {
                        id: values[0],
                        name: values[1],
                    }
                });
                _all_license = _.concat(_all_license, nowLicenseData);
            });

            //      _selectUcode = selectUcode;

            app = new Vue({
                el: "#app",
                components: {
                    vuejsDatepicker
                },
                data: {
                    isMounted: false,
                    isResponse: false,
                    isFetching: false,

                    totalRate: {},

                    //메뉴얼
                    isSelectedManual: false,
                    isManualStep1: true,
                    isManualStep2: false,

                    //전문대학/대학/대학원
                    universityTypes: _universityTypes,
                    selectedUniversityType: null,

                    //대학검색
                    universitys: _all_university,
                    selectedUniversity: null,

                    //전공분류
                    department4: [],
                    departmemt4List: [],
                    selectedDepartmemt4: null,
                    selectedDepartmemt4Text: null,
                    uorgcode: null,
                    null_value: null,

                    isUserGroup: false,

                    company_list: [],
                    company_area_list: [],
                    elemName_companyListItems: "empCompListItems",
                    className_companyListItemSelected: "selected",
                    companyPieTopCount: 5,
                    resultCount: 0,
                    analysis_university_area: {},
                    analysis_university_fund: {},
                    analysis_university_kind: {},
                    analysis_university_origin: {},
                    avarageAnalysis: {
                        gradescore_avg: 0,
                        txt_gradescore_avg: 0,
                        gradescore_percent: 0.0,
                        toeic_avg: 0,
                        toeic_percent: 0,
                        license_avg: 0,
                        license_percent: 0,
                        oversea_avg: 0,
                        oversea_percent: 0,
                        internship_avg: 0,
                        internship_percent: 0,
                    },
                    major_rank: [],
                    major_field_rank: [],
                    company_info: {
                        COMNM: "",
                        COMTYPE: "",
                        SECTOR: "",
                        INDNAME: "",
                        SALARY: 0,
                        LIVEGRADE: "",
                        LIVEDATE: "",
                        YEAR: [],
                        EMPLOYEECNT: [],
                        ENTRANTCNT: [],
                        RETIREECNT: [],
                        SALARYCOMPARE: [],
                        BASEYEAR: "",
                    },
                    license_list: [],
                    privatelicense_list: [],
                    job_high_list: [],
                    job_middle_list: [],
                    job_low_list: [],
                    lnm_list: arrayToObject(responseData, 'LNM'),
                    mnm_list: arrayToObject(responseData, 'MNM'),
                    snm_list: arrayToObject(responseData, 'SNM'),
                    tmp_dept: [],
                    target_lnm_list: [],
                    target_mnm_list: [],
                    target_snm_list: [],
                    tmp_lnm_list: [],
                    tmp_mnm_list: [],
                    tmp_snm_list: [],
                    isStatusContent: true,
                    isCompanyListContent: false,
                    isDutyContent: false,
                    isJobInfoContent : false,
                    isCharacterContent: false,
                    isAgree: false,
                    emplrate: [],
                    selectedLnm: null,
                    selectedMnm: null,
                    selectedSnm: null,
                    selectedScore: null,
                    selectedGender: null,
                    select_jobflow_list: [],
                    select_flow_list: [],
                    ind_flow_list: [],
                    job_flow_list: [],
                    select_flow: "",
                    select_jobflow: "",
                    isProtection: false,
                    flowmaster: [],
                    job_retention_data1: [],
					nosearch1_cnt: 0,
                    nosearch2_cnt: 0,
                    nosearch3_cnt: 0,
                    job_retention_data2: [],
                    job_retention_data3: [],
                    flow_data1: [],
                    flow_data2: [],
                    flow_data3: [],
                },
                methods: {
                    handleSearchSubmit: function() {
                        this.isFetching = true;
                        this.isResponse = false;
                        this.select_flow = "";
                        this.select_jobflow = "";

						if (this.selectedUniversity == null) {
                            alert("학교를 선택해 주세요.");
							this.isFetching = false;
                            return false;
                        }

                        this.requestData();
                    },
                    getOverSeaPercent: function (total, data) {
                        if (_.keys(data).length > 0) {
                            var empty = 0;
                            if ("해당없음" in data) empty = data["해당없음"];
                            var value = total - empty;
                            var avg = round(value / total);
                            var percentage = round((value / total) * 100);
                            return {
                                avg: avg,
                                percentage: percentage,
                            };
                        } else {
                            return {
                                avg: 0.0,
                                percentage: 0.0,
                            };
                        }
                    },

                    /**
                     * REST API Request.
                     *
                     * @param {boolean} condFlag 검색 조건 [ true 기업조건 검색, false 회사명 검색 ]
                     */
                    requestData: function () {
                        let data = {};
                        let url = "";

                        /* this 객체를 ajax에서 접근하기 위함 */
                        const vm = this;
						var unicode = this.selectedUniversity.id.split('_');
						data['schcd'] = unicode[0];
						data['orgcd'] = unicode[1];

						if (this.selectedDepartmemt4 != null) {
						    data['deptcd'] = this.selectedDepartmemt4.id;
						} else {
						    data['deptcd'] = this.selectedDepartmemt4
						}

						if (this.selectedLnm != null) {
						    data['lnm'] = this.selectedLnm.text;
						} else {
						    data['lnm'] = null;
						}

                        if (this.selectedMnm != null) {
                            data['mnm'] = this.selectedMnm.text;
						} else {
						    data['mnm'] = null;
						}

						if (this.selectedSnm != null) {
						    data['snm'] = this.selectedSnm.text;
                        } else {
                            data['snm'] = null;
                        }

                        if (this.selectedScore != null) {
                            data['score'] = this.selectedScore;
                        } else {
                            data['score'] = null;
                        }

                        if (this.selectedGender != null) {
                            data['gender'] = this.selectedGender;
                        } else {
                            data['gender'] = null;
                        }

                        $.ajax({
                            type: "GET",
                            url: DEBUG ? "json/university.json" : "/swiss/cm/getUniversity.do",
                            dataType: "text",
                            data: data,
                            beforeSend: function (xhr) {
                                xhr.setRequestHeader("username", userid + "_" + userType);
                            },
                            success: function (response) {
                                var res = JSON.parse(response);
                                if (res.count == undefined || res.count == 0) {
                                    alert("검색 결과가 존재하지 않습니다.");
                                    vm.isResponse = false;
                                    vm.isFetching = false;
                                } else {
                                    if (res.protection == 1) {
                                        vm.isProtection = true;
                                        alert("분석대상자가 5명 미만인 경우 \n개인정보보호를 위해 일부항목이 제공되지 않습니다.");
                                    } else {
                                        vm.isProtection = false;
                                    }

                                    vm.resultCount = res.count;
                                    vm.isResponse = true;
                                    vm.isFetching = false;

                                    vm.totalRate = res.totalrate;

                                    // 취업현황 START
                                    //학과(계열) list
                                    vm.emplrate = res.emplrate;
                                    vm.university_dept = getOriginUniversityRemapping(res.dept, res.dept_degree);
                                    vm.selectedDeptTabValue = "all";
                                    vm.renderGridAndChart("all", "dept");

                                    //전공계열 list
                                    vm.university_deptcol = getOriginUniversityRemapping(res.deptcol, res.deptcol_degree);
                                    vm.selectedDeptcolTabValue = "all";
                                    vm.renderGridAndChart("all", "deptcol");

                                    vm.toeic_rate = round(res.toeic_percent);
                                    vm.avarageAnalysis = {
                                        gradescore_avg: res.gradescore.length > 0 ? round(_.sum(res.gradescore) / res.gradescore.length) : 0,
                                        txt_gradescore_avg: res.gradescore.length > 0 ? round(_.sum(res.gradescore) / res.gradescore.length) : 0,
                                        gradescore_percent: round(res.gradescore_percent),
                                        toeic_avg: res.toeic.length > 0 ? round(_.sum(res.toeic) / res.toeic.length) : 0,
                                        toeic_percent: round(res.toeic_percent),
                                        license_avg: round(_.sum(getObjectConvertArray(res.license_nm)) / res.count),
                                        license_percent: round(res.license_percent),
                                        oversea_avg: vm.getOverSeaPercent(res.count, res.oversea).avg,
                                        oversea_percent: vm.getOverSeaPercent(res.count, res.oversea).percentage,
                                        internship_avg: vm.getOverSeaPercent(res.count, res.internship).avg,
                                        internship_percent: vm.getOverSeaPercent(res.count, res.internship).percentage,
                                        transfer_avg: vm.getOverSeaPercent(res.count, res.transfer).avg,
                                        transfer_percent: vm.getOverSeaPercent(res.count, res.transfer).percentage,
                                        teach_avg: vm.getOverSeaPercent(res.count, res.teach).avg,
                                        teach_percent: vm.getOverSeaPercent(res.count, res.teach).percentage,
                                    };
                                    // 취업현황 END

                                    // 기업정보 START
                                    var chart1 = getColumnChartSeries(getSeriesDataAndSort(res.comtype, true), '');
                                    setRenderPieChartMultiClick('comtype_pie_chart', chart1, Highcharts);

                                    var chart2 = getColumnChartSeries(getSeriesDataAndSort(res.comind, true), '');
                                    setRenderPieChartMultiClick('comind_pie_chart', chart2, Highcharts);

                                    var cnt1 = 0;
                                    vm.company_area_list = [];
                                    var companyAreaTop = [];

                                    var totalAreaCnt = 0;
                                    for (var key in res.company_area) {
                                        totalAreaCnt += res.company_area[key];
                                    }

                                    for (var key in res.company_area) {
                                        var value = res.company_area[key];
                                        cnt1 += 1;

                                        if (cnt1 <= 1000) {
                                            vm.company_area_list.push({
                                                name: key,
                                                count: `${round((value / totalAreaCnt) * 100, 2)}%(${value}명)`,
                                                value: value,
                                            });
                                        } else {
                                            break;
                                        }

                                        if (cnt1 <= vm.companyPieTopCount) {
                                            companyAreaTop.push({
                                                value: value,
                                                y: value,
                                                name: key,
                                            });
                                        }
                                    }
                                    setRenderPieChartClick("company_area", companyAreaTop, Highcharts);

                                    cnt1 = 0;
                                    vm.company_list = [];
                                    var companyTop = [];

                                    var totalComlistCnt = 0;
                                    for (var key in res.company_list) {
                                        totalComlistCnt += res.company_list[key];
                                    }

                                    for (var key in res.company_list) {
                                        var infos = key.split("_");
                                        var value = res.company_list[key];
                                        cnt1 += 1;

                                        if (cnt1 <= 1000) {
                                            vm.company_list.push({
                                                name: infos[1],
                                                count: `${round((value / totalComlistCnt) * 100, 2)}%(${value}명)`,
                                                value: infos[0],
                                            });
                                        } else {
                                            break;
                                        }

                                        if (cnt1 <= vm.companyPieTopCount) {
                                            companyTop.push({
                                                value: infos[0],
                                                y: value,
                                                name: infos[1],
                                            });
                                        }
                                    }
                                    setRenderPieChartClick("company", companyTop, Highcharts);
                                    // 기업정보 END

                                    // 직무정보 START
                                    var jobhighArray = getSeriesDataAndSort(res.jobhigh, true);
                                    vm.job_high_list = jobhighArray;

                                    setRenderPieChartBySize(
                                        "jobhigh",
                                        _.map(jobhighArray, function (item) {
                                            return [_globalJobHighObject[item.text], item.value];
                                        }),
                                        Highcharts
                                    );

                                    var jobmiddleArray = getSeriesDataAndSort(res.jobmiddle, true);
                                    vm.job_middle_list = jobmiddleArray;

                                    setRenderPieChartBySize(
                                        "jobmiddle",
                                        _.map(jobmiddleArray, function (item) {
                                            return [_globalJobMiddleObject[item.text], item.value];
                                        }),
                                        Highcharts
                                    );

                                    var joblowArray = getJobLowDataAndSort(res.joblow, _globalJobLowObject);
                                    vm.job_low_list = joblowArray;

                                    var joblowTop5Data = joblowArray;
                                    if (joblowTop5Data.length > 5) {
                                        joblowTop5Data = joblowArray.slice(0, 5);
                                    }

                                    setRenderPieChart(
                                        "joblow",
                                        _.map(joblowTop5Data, function (item) {
                                            return [item.text, item.point];
                                        }),
                                        Highcharts
                                    );
                                    // 직무정보 END

                                    if (vm.selectedYear == "2018") vm.isLicense = false;
                                    else vm.isLicense = true;

                                    if ($.isEmptyObject(res.license_nm)) vm.isPublicLicense = false;
                                    else vm.isPublicLicense = true;

                                    if ($.isEmptyObject(res.private_license_nm)) vm.isPrivateLicense = false;
                                    else vm.isPrivateLicense = true;

                                    vm.searchResult = res;
                                    vm.company_info = res.COMPANYINFO;
                                    vm.isCompany_info = true;
                                    vm.isCompany_info_data = false;
                                    var empData = vm.company_info;

                                    var salary_data = res.salary;
                                    var salary_dept = 100;
                                    if (salary_data.length > 2) {
                                        salary_dept = salary_data[1][0] - salary_data[0][0];
                                    }
                                    var tmpIndex = salary_data.length - 1;
                                    setRenderColumnSimpleChartBySalary(
                                        "salary_chart",
                                        _.map(salary_data, function (item, index) {
                                            var obj = {};
                                            if (index == tmpIndex) {
                                                obj = {
                                                    name: item[0].toLocaleString() + "만원 이상",
                                                    y: item[1],
                                                };
                                            } else {
                                                obj = {
                                                    name: item[0].toLocaleString() + "만원 ~ " + (item[0] + salary_dept).toLocaleString() + "만원",
                                                    y: item[1],
                                                };
                                            }
                                            return obj;
                                        }),
                                        salary_dept,
                                        Highcharts,
                                        false
                                    );

                                    //자격증 종류 column chart
                                    var licenseArray = getLicenseDataAndSort(res.license_nm);
                                    vm.license_list = licenseArray;
                                    var top3Data = licenseArray;
                                    if (top3Data.length > 3) {
                                        top3Data = licenseArray.slice(0, 3);
                                    }

                                    setRenderPieChart(
                                        "licenseChart",
                                        _.map(top3Data, function (item) {
                                            var idx = item.text.lastIndexOf("/") == -1 ? 0 : item.text.lastIndexOf("/") + 2;
                                            var itemtext = item.text.substr(idx);
                                            return [itemtext, item.point];
                                        }),
                                        Highcharts
                                    );

                                    var privatelicenseArray = getLicenseDataAndSort(res.private_license_nm);
                                    vm.privatelicense_list = privatelicenseArray;
                                    var privateTop3Data = privatelicenseArray;
                                    if (privateTop3Data.length > 3) {
                                        privateTop3Data = privatelicenseArray.slice(0, 3);
                                    }

                                    setRenderPieChart(
                                        "privatelicenseChart",
                                        _.map(privateTop3Data, function (item) {
                                            return [item.text, item.point];
                                        }),
                                        Highcharts
                                    );

                                    // 일자리 이동 정보 START
                                    vm.job_flow_list = res.jobflow;
                                    let tmpJobArray = vm.job_flow_list.map(item => item[0]);
                                    tmpJobArray = tmpJobArray.filter(item => item.startsWith('시작')).map(item => item.replace('시작 ', ''));
                                    vm.select_jobflow_list = Array.from(new Set(tmpJobArray));

                                    let firstData = vm.job_flow_list.filter(item => item[0].startsWith('시작')).map(item => item[1]);
                                    let secondData = vm.job_flow_list.filter(item => firstData.includes(item[0])).map(item => item[1]);
                                    let thridData = vm.job_flow_list.filter(item => secondData.includes(item[0])).map(item => item[1]);

                                    // Filter the indflow array based on the first element
                                    let filteredIndflow = vm.job_flow_list.filter(item => firstData.includes(item[0]) || !item[0].startsWith('1년차'));
                                    filteredIndflow = filteredIndflow.filter(item => secondData.includes(item[0]) || !item[0].startsWith('2년차'));

                                    setRenderSankeyChart(
                                        "jobflow",
                                        filteredIndflow,
                                        Highcharts
                                    );

                                    vm.ind_flow_list = res.indflow;
                                    let tmpArray = vm.ind_flow_list.map(item => item[0]);
                                    tmpArray = tmpArray.filter(item => item.startsWith('시작')).map(item => item.replace('시작 ', ''));
                                    vm.select_flow_list = Array.from(new Set(tmpArray));

                                    firstData = vm.ind_flow_list.filter(item => item[0].startsWith('시작')).map(item => item[1]);
                                    secondData = vm.ind_flow_list.filter(item => firstData.includes(item[0])).map(item => item[1]);
                                    thridData = vm.ind_flow_list.filter(item => secondData.includes(item[0])).map(item => item[1]);

                                    // Filter the indflow array based on the first element
                                    filteredIndflow = vm.ind_flow_list.filter(item => firstData.includes(item[0]) || !item[0].startsWith('1년차'));
                                    filteredIndflow = filteredIndflow.filter(item => secondData.includes(item[0]) || !item[0].startsWith('2년차'));

                                    setRenderSankeyChart(
                                        "indflow",
                                        filteredIndflow,
                                        Highcharts
                                    );

                                    // 0. FISRT_COMSCALE
                                    // 1. FISRT_INDLCD_1
                                    // 2. COMSCALE
                                    // 3. INDLCD_1
                                    // 4. JOBFLOWS_SEQ
                                    // 5. JOBFLOWS
                                    vm.flowmaster = res.flowmaster;
                                    vm.job_retention_data1 = vm.flowmaster.filter(item => item[4] === "1" && ["2", "3", "4"].includes(item[5]));
                                    vm.job_retention_data2 = vm.flowmaster.filter(item => item[4] === "2" && ["2", "3", "4"].includes(item[5]));
                                    vm.job_retention_data3 = vm.flowmaster.filter(item => item[4] === "3" && ["2", "3", "4"].includes(item[5]));

                                    let resultJobFlows = vm.groupByArray(5, vm.job_retention_data1, _globalJobFlow);

                                    var chartHeight = 400;
                                    setRenderPieChartByColor(
                                        "job_retention_rate1",
                                        resultJobFlows,
                                        Highcharts,
                                        chartHeight
                                    );

                                    resultJobFlows = vm.groupByArray(5, vm.job_retention_data2, _globalJobFlow);

                                    setRenderPieChartByColor(
                                        "job_retention_rate2",
                                        resultJobFlows,
                                        Highcharts,
                                        chartHeight
                                    );

                                    resultJobFlows = vm.groupByArray(5, vm.job_retention_data3, _globalJobFlow);

                                    setRenderPieChartByColor(
                                        "job_retention_rate3",
                                        resultJobFlows,
                                        Highcharts,
                                        chartHeight
                                    );

                                    let flow_target = vm.flowmaster.filter(item => item[5] === "3");
                                    vm.flow_data1 = flow_target.filter(item => item[4] === "1");
                                    vm.flow_data2 = flow_target.filter(item => item[4] === "2");
                                    vm.flow_data3 = flow_target.filter(item => item[4] === "3");

                                    resultJobFlows = vm.groupByArray(2, vm.flow_data1, _globalComtype);
                                    setRenderPieChartByColor(
                                        "move_comtype1",
                                        resultJobFlows,
                                        Highcharts,
                                        chartHeight
                                    );

                                    resultJobFlows = vm.groupByArray(2, vm.flow_data2, _globalComtype);
                                    setRenderPieChartByColor(
                                        "move_comtype2",
                                        resultJobFlows,
                                        Highcharts,
                                        chartHeight
                                    );

                                    resultJobFlows = vm.groupByArray(2, vm.flow_data3, _globalComtype);
                                    setRenderPieChartByColor(
                                        "move_comtype3",
                                        resultJobFlows,
                                        Highcharts,
                                        chartHeight
                                    );

                                    resultJobFlows = vm.groupByArray(3, vm.flow_data1, _globalCompanySizeSummaryObject);
                                    setRenderPieChart(
                                        "move_ind1",
                                        resultJobFlows,
                                        Highcharts,
                                        chartHeight
                                    );

                                    resultJobFlows = vm.groupByArray(3, vm.flow_data2, _globalCompanySizeSummaryObject);
                                    setRenderPieChart(
                                        "move_ind2",
                                        resultJobFlows,
                                        Highcharts,
                                        chartHeight
                                    );

                                    resultJobFlows = vm.groupByArray(3, vm.flow_data3, _globalCompanySizeSummaryObject);
                                    setRenderPieChart(
                                        "move_ind3",
                                        resultJobFlows,
                                        Highcharts,
                                        chartHeight
                                    );
                                    // 일자리 이동 정보 END

                                    // 검색 시 첫 탭 선택 되어지도록 처리
                                    vm.selectTab();
                                }
                            },
                            error: function (xhr) {},
                        });
                    },
                    /**
                     * 회사 목록 아이탬 ID 생성
                     *
                     * @param {string} text 회사이름
                     * @returns string 접두어 추가한 회사 목록 아이탬의 ID
                     */
                    createId_companyListItems: function (text) {
                        return `${this.elemName_companyListItems}-${text}`;
                    },

                    handleInit: function() {
                        this.handleResultInit();
                        //전문대학/대학/대학원
                        this.universityTypes = _universityTypes;
                        this.selectedUniversityType = null;

                        //대학검색
                        this.universitys = _all_university;
                        this.selectedUniversity = null;

                        //전공분류
                        this.departmemt4List = [];
                        this.selectedDepartmemt4 = null;
                        this.selectedDepartmemt4Text = null;
                        this.uorgcode = null;
                        this.null_value = null;

                        //성별
                        this.selectedGender = null;
                    },
                    handleResultInit: function() {
                        this.isResponse = false;
                        this.isFetching = false;
                    },

                    handleManualShow: function() {
                        this.isSelectedManual = true;
                        this.handleManual();
                    },

                    handleManual: function(step) {
                        this.isManualStep1 = false;
                        this.isManualStep2 = false;

                        switch (step) {
                            case 1:
                                this.isManualStep1 = true;
                                break;
                            case 2:
                                this.isManualStep2 = true;
                                break;
                            default:
                                this.isManualStep1 = true;
                        }
                    },
                    handleManualInit: function() {
                        this.isSelectedManual = false;
                    },
                    renderGridAndChart: function (val, id) {
                        const vm = this;
                        if (id == "origin") {
                            if (val) {
                                this.university_origin_tab_list = this.university_origin[val];
                                var top3Data = this.university_origin[val];
                                if (top3Data.length > 3) {
                                    top3Data = this.university_origin[val].slice(0, 3);
                                }

                                let seriesData = _.map(top3Data, function (item, index) {
                                    if (index == 0) {
                                        var idx = item.text.lastIndexOf("/") == -1 ? 0 : item.text.lastIndexOf("/") + 2;
                                        var itemtext = item.text.substr(idx);
                                        var itemvalue = item.value.substr(0, item.value.lastIndexOf("("));
                                        vm.analysis_university_origin["name"] = itemtext;
                                        vm.analysis_university_origin["value"] = itemvalue;
                                    }
                                    return [item.text, item.point];
                                });
                            }
                        } else if (id == "dept") {
                            if (val) {
                                this.university_dept_tab_list = this.university_dept[val];
                                var top3Data = this.university_dept[val];
                                if (top3Data.length > 3) {
                                    top3Data = this.university_dept[val].slice(0, 3);
                                }

                                // 취업현황 요약에서 사용하기 위한 데이터 초기화
                                if (this.major_rank.length != 0) {
                                    this.major_rank.length = [];
                                }

                                let seriesData = _.map(top3Data, function (item, index) {
                                    var idx = item.text.lastIndexOf("/") == -1 ? 0 : item.text.lastIndexOf("/") + 2;
                                    var itemtext = item.text.substr(idx);
                                    var itemvalue = item.value.substr(0, item.value.lastIndexOf("("));

                                    var num = "";
                                    if (index == 0) {
                                        num = "①";
                                    } else if (index == 1) {
                                        num = "②";
                                    } else if (index == 2) {
                                        num = "③";
                                    }

                                    // 취업현황 요약에서 사용하기 위한 데이터
                                    vm.major_rank.push({
                                        name: itemtext,
                                        value: itemvalue,
                                        num: num,
                                    });

                                    return [itemtext, item.point];
                                });
                            }
                        } else if (id == "deptcol") {
                            if (val) {
                                this.university_deptcol_tab_list = this.university_deptcol[val];
                                var top3Data = this.university_deptcol[val];
                                if (top3Data.length > 3) {
                                    top3Data = this.university_deptcol[val].slice(0, 3);
                                }

                                // 취업현황 요약에서 사용하기 위한 데이터 초기화
                                if (this.major_field_rank.length != 0) {
                                    this.major_field_rank.length = [];
                                }

                                let seriesData = _.map(top3Data, function (item, index) {
                                    var idx = item.text.lastIndexOf("/") == -1 ? 0 : item.text.lastIndexOf("/") + 2;
                                    var itemtext = item.text.substr(idx);
                                    var itemvalue = item.value.substr(0, item.value.lastIndexOf("("));

                                    var num = "";
                                    if (index == 0) {
                                        num = "①";
                                    } else if (index == 1) {
                                        num = "②";
                                    } else if (index == 2) {
                                        num = "③";
                                    }

                                    // 취업현황 요약에서 사용하기 위한 데이터
                                    vm.major_field_rank.push({
                                        name: itemtext,
                                        value: itemvalue,
                                        num: num,
                                    });

                                    return [itemtext, item.point];
                                });
                            }
                        } else if (id == "uniarea") {
                            if (val) {
                                this.university_area_tab_list = this.university_area[val];
                                var top3Data = this.university_area[val];
                                if (top3Data.length > 3) {
                                    top3Data = this.university_area[val].slice(0, 3);
                                }

                                let seriesData = _.map(top3Data, function (item, index) {
                                    var idx = item.text.lastIndexOf("/") == -1 ? 0 : item.text.lastIndexOf("/") + 2;
                                    var itemtext = item.text.substr(idx);

                                    if (index == 0) {
                                        var itemvalue = item.value.substr(0, item.value.lastIndexOf("("));
                                        vm.analysis_university_area["name"] = itemtext;
                                        vm.analysis_university_area["value"] = itemvalue;
                                    }

                                    return [itemtext, item.point];
                                });
                            }
                        }
                    },
                    selectTab: function(target) {
                        this.isStatusContent = false;
                        this.isCompanyListContent = false;
                        this.isDutyContent = false;
                        this.isJobInfoContent = false;
                        this.isCharacterContent = false;

                        switch (target) {
                            case 'status':
                                this.isStatusContent = true;
                                break;
                            case 'companyList':
                                this.isCompanyListContent = true;
                                break;
                            case 'dutyInfo':
                                this.isDutyContent = true;
                                break;
                            case 'jobInfo':
                                this.isJobInfoContent = true;
                                break;
                            case 'character':
                                this.isCharacterContent = true;
                                break;
                            default:
                                target = 'status';
                                this.isStatusContent = true;
                        }
                        document.getElementById(target).checked = true;
                    },
                    /**
                     * @description 정보동의서약저장
                     */
                    handleInformationAgree: function(userid) {
                        var _this = this;
                        var _data = {};
                        _data['userid'] = userid;

                        $.ajax({
                            type: "GET",
                            url: "/swiss/cm/insertInformationAgree.do",
                            dataType: "text",
                            data: _data,
                            success: function(data) {
                                var res = JSON.parse(data);
                                if (res.code == 'FAIL') {
                                    alert(res.message)
                                }

                                _this.isAgree = false;
                            }
                        });
                    },

                    /**
                     * @description 정보동의서약저장 조회
                     */
                    getInformationAgree: function(userid) {
                        var _this = this;

                        var _data = {};
                        _data['userid'] = userid;

                        $.ajax({
                            type: "GET",
                            url: DEBUG ? "json/getInformationAgree.json" : "/swiss/cm/getInformationAgree.do",
                            dataType: "text",
                            data: _data,
                            success: function(response) {
                                var res = JSON.parse(response);
                                if (res.CNT[0] == 0) {
                                    _this.isAgree = true;
                                } else {
                                    _this.isAgree = false;
                                }
                            }
                        });

                    },
                    redirectToUrl() {
                      window.history.back();
                    },
                    openNewWindow() {
                      // 새 창 또는 새 탭에서 열고자 하는 URL을 지정합니다.
                      const url = 'https://bit.ly/3Z0RNig';

                      // 새 창 또는 새 탭으로 URL을 엽니다.
                      window.open(url, '_blank');
                    },
                    findRelatedItems(currentItem, visitedItems = new Set()) {
                      visitedItems.add(currentItem);

                      const relatedItems = this.ind_flow_list.filter(item => item[0] === currentItem);

                      const allRelatedItems = [];

                      for (const relatedItem of relatedItems) {
                        if (!visitedItems.has(relatedItem[1])) {
                          const nestedRelatedItems = this.findRelatedItems(relatedItem[1], visitedItems);
                          allRelatedItems.push(...nestedRelatedItems);
                        }
                      }

                      return [...relatedItems, ...allRelatedItems];
                    },
                    findRelatedJobItems(currentItem, visitedItems = new Set()) {
                      visitedItems.add(currentItem);

                      const relatedItems = this.job_flow_list.filter(item => item[0] === currentItem);

                      const allRelatedItems = [];

                      for (const relatedItem of relatedItems) {
                        if (!visitedItems.has(relatedItem[1])) {
                          const nestedRelatedItems = this.findRelatedJobItems(relatedItem[1], visitedItems);
                          allRelatedItems.push(...nestedRelatedItems);
                        }
                      }

                      return [...relatedItems, ...allRelatedItems];
                    },
                    // 산업분류 변경
                    changeFlow() {
                        const vm = this;
                        // 0. FIRST_COMSCALE
                        // 1. FIRST_INDLCD_1
                        // 2. COMSCALE
                        // 3. INDLCD_1
                        // 4. JOBFLOWS_SEQ
                        // 5. JOBFLOWS
                        let job_retention_data1 = vm.job_retention_data1;
                        let job_retention_data2 = vm.job_retention_data2;
                        let job_retention_data3 = vm.job_retention_data3;
                        let flow_data1 = vm.flow_data1;
                        let flow_data2 = vm.flow_data2;
                        let flow_data3 = vm.flow_data3;

                        if (this.select_jobflow != "") {
                            var matchingKey = null;
                            for (var key in _globalComtype) {
                              if (_globalComtype[key] === this.select_jobflow) {
                                matchingKey = key;
                                break; // 값이 일치하는 경우, 루프를 종료합니다.
                              }
                            }

                            job_retention_data1 = job_retention_data1.filter(item => item[0] === matchingKey);
                            job_retention_data2 = job_retention_data2.filter(item => item[0] === matchingKey);
                            job_retention_data3 = job_retention_data3.filter(item => item[0] === matchingKey);
                            flow_data1 = flow_data1.filter(item => item[0] === matchingKey);
                            flow_data2 = flow_data2.filter(item => item[0] === matchingKey);
                            flow_data3 = flow_data3.filter(item => item[0] === matchingKey);
                        }

                        if (this.select_flow != "") {
                            var matchingKey = null;
                            for (var key in _globalCompanySizeSummaryObject) {
                              if (_globalCompanySizeSummaryObject[key] === this.select_flow) {
                                matchingKey = key;
                                break; // 값이 일치하는 경우, 루프를 종료합니다.
                              }
                            }

                            job_retention_data1 = job_retention_data1.filter(item => item[1] === matchingKey);
                            job_retention_data2 = job_retention_data2.filter(item => item[1] === matchingKey);
                            job_retention_data3 = job_retention_data3.filter(item => item[1] === matchingKey);
                            flow_data1 = flow_data1.filter(item => item[1] === matchingKey);
                            flow_data2 = flow_data2.filter(item => item[1] === matchingKey);
                            flow_data3 = flow_data3.filter(item => item[1] === matchingKey);
                        }

                        let resultJobFlows = vm.groupByArray(5, job_retention_data1, _globalJobFlow);
                        setRenderPieChartByColor(
                            "job_retention_rate1",
                            resultJobFlows,
                            Highcharts
                        );

                        resultJobFlows = vm.groupByArray(5, job_retention_data2, _globalJobFlow);

                        setRenderPieChartByColor(
                            "job_retention_rate2",
                            resultJobFlows,
                            Highcharts
                        );

                        resultJobFlows = vm.groupByArray(5, job_retention_data3, _globalJobFlow);

                        setRenderPieChartByColor(
                            "job_retention_rate3",
                            resultJobFlows,
                            Highcharts
                        );


                        resultJobFlows = vm.groupByArray(2, flow_data1, _globalComtype);
                        setRenderPieChartByColor(
                            "move_comtype1",
                            resultJobFlows,
                            Highcharts
                        );

                        resultJobFlows = vm.groupByArray(2, flow_data2, _globalComtype);
                        setRenderPieChartByColor(
                            "move_comtype2",
                            resultJobFlows,
                            Highcharts
                        );

                        resultJobFlows = vm.groupByArray(2, flow_data3, _globalComtype);
                        setRenderPieChartByColor(
                            "move_comtype3",
                            resultJobFlows,
                            Highcharts
                        );

                        resultJobFlows = vm.groupByArray(3, flow_data1, _globalCompanySizeSummaryObject);
                        setRenderPieChart(
                            "move_ind1",
                            resultJobFlows,
                            Highcharts
                        );

                        resultJobFlows = vm.groupByArray(3, flow_data2, _globalCompanySizeSummaryObject);
                        setRenderPieChart(
                            "move_ind2",
                            resultJobFlows,
                            Highcharts
                        );

                        resultJobFlows = vm.groupByArray(3, flow_data3, _globalCompanySizeSummaryObject);
                        setRenderPieChart(
                            "move_ind3",
                            resultJobFlows,
                            Highcharts
                        );
                    },
                    // 페이지 진입 시 스크롤 TOP 고정
                    checkVariable() {
                      if (window.NEXACROWEBBROWSER !== undefined) {
                        window.NEXACROWEBBROWSER.parent.parent.parent.parent.parent.parent.parent.parent.parent.vscrollbar.set_pos(0);
                      } else {
                        setTimeout(this.checkVariable, 100);
                      }
                    },
                    groupByArray(target, arr, obj) {
                        var groupedData = [];

                        // 배열을 순회하면서 그룹화를 수행합니다.
                        for (var i = 0; i < arr.length; i++) {
                          var item = arr[i];
                          var key = item[target];

                          if (!groupedData[key]) {
                            groupedData[key] = 0;
                          }

                          groupedData[key] += 1;
                        }

                        // 배열 요소를 치환합니다.
                        var result = Object.entries(groupedData).map(function (item) {
                          return [obj[item[0]], item[1]];
                        });

                        result.sort(function(a, b) {
                          return b[1] - a[1];
                        });

                        return result
                    },
                    handleDeptSelect(dept) {
                        this.selectedDepartmemt4 = null;
                        if (dept == "upper") {
                            this.selectedMnm = null;
                            this.selectedSnm = null;
                            this.target_mnm_list = [];
                            this.target_snm_list = [];

                            if (this.selectedLnm != null) {
                                let tmpmnm = [];
                                let tmpsnm = [];
                                let selectedLnmId = this.selectedLnm.value;
                                this.tmp_dept.forEach(function(item) {
                                    let truncatedId = item.id.substring(0, 5);
                                    let truncatedId2 = item.id.substring(0, 7);
                                    if (truncatedId.indexOf(selectedLnmId) !== -1) {
                                        tmpmnm.push(truncatedId)
                                        tmpsnm.push(truncatedId2)
                                    }
                                });
                                let uniqueTmpmnm = [...new Set(tmpmnm)].sort();
                                let uniqueTmpsnm = [...new Set(tmpsnm)].sort();
                                this.target_mnm_list = uniqueTmpmnm.map(value => this.mnm_list.find(obj => obj.value === value));
                                this.target_mnm_list = this.target_mnm_list.sort((a, b) => a.text.localeCompare(b.text, 'ko'));
                                this.target_snm_list = uniqueTmpsnm.map(value => this.snm_list.find(obj => obj.value === value));
                                this.target_snm_list = this.target_snm_list.sort((a, b) => a.text.localeCompare(b.text, 'ko'));
                            } else {
                                this.target_lnm_list = this.tmp_lnm_list;
                                this.target_mnm_list = this.tmp_mnm_list;
                                this.target_snm_list = this.tmp_snm_list;
                            }
                        } else if (dept == "mid") {
                            this.selectedSnm = null;
                            this.target_snm_list = [];

                            if (this.selectedMnm != null) {
                                let tmpsnm = [];
                                let selectedMnmId = this.selectedMnm.value;
                                this.tmp_dept.forEach(function(item) {
                                    let truncatedId = item.id.substring(0, 7);
                                    if (truncatedId.indexOf(selectedMnmId) !== -1) {
                                        tmpsnm.push(truncatedId);
                                    }
                                });
                                let uniqueTmpsnm = [...new Set(tmpsnm)].sort();
                                this.target_snm_list = uniqueTmpsnm.map(value => this.snm_list.find(obj => obj.value === value));
                                this.target_snm_list = this.target_snm_list.sort((a, b) => a.text.localeCompare(b.text, 'ko'));
                            } else {
                                if (this.selectedLnm != null) {
                                    let tmpmnm = [];
                                    let tmpsnm = [];
                                    this.tmp_dept.forEach(function(item) {
                                        let truncatedId = item.id.substring(0, 5);
                                        tmpmnm.push(truncatedId)
                                        truncatedId = item.id.substring(0, 7);
                                        tmpsnm.push(truncatedId)
                                    });
                                    let uniqueTmpmnm = [...new Set(tmpmnm)].sort();
                                    let uniqueTmpsnm = [...new Set(tmpsnm)].sort();
                                    this.target_mnm_list = uniqueTmpmnm.map(value => this.mnm_list.find(obj => obj.value === value));
                                    this.target_mnm_list = this.target_mnm_list.sort((a, b) => a.text.localeCompare(b.text, 'ko'));
                                    this.target_snm_list = uniqueTmpsnm.map(value => this.snm_list.find(obj => obj.value === value));
                                    this.target_snm_list = this.target_snm_list.sort((a, b) => a.text.localeCompare(b.text, 'ko'));
                                } else {
                                    this.target_lnm_list = this.tmp_lnm_list;
                                    this.target_mnm_list = this.tmp_mnm_list;
                                    this.target_snm_list = this.tmp_snm_list;
                                }
                            }
                        }
                    }
                },
                mounted() {
                    this.isMounted = true;
                    this.checkVariable();
                },
                created() {
                    if (userType == "1" || userType == "2" || userType == "7") {
                        this.isUserGroup = false;
                    } else if (userType == "6") {
                        let uniCode = gSchcd +"_"+ gOrgcd;
                        this.tmpUniTabs = this.universitys.filter(item => uniCode.includes(item.id));
                        this.universitys = this.tmpUniTabs;
                    }

                    this.getInformationAgree(userid);
                },
                watch: {
                    selectedUniversity: function(val) {
                        if (val) {
                            var unidept = responseData['UNI_DEPT'][this.selectedUniversity.id];
                            this.tmp_dept = _.map(unidept, function(item, index) {
                                var splitCode = item.split('_');

                                return {
                                    id: splitCode[0],
                                    name: splitCode[1],
                                }
                            });
                            this.department4 = this.tmp_dept;
                            this.department4.sort(function(a, b) {
                                return (a.name).localeCompare(b.name);
                            });

                            let tmplnm = [];
                            let tmpmnm = [];
                            let tmpsnm = [];
                            this.tmp_dept.forEach(function(item) {
                                let truncatedId = item.id.substring(0, 3);
                                tmplnm.push(truncatedId)
                                truncatedId = item.id.substring(0, 5);
                                tmpmnm.push(truncatedId)
                                truncatedId = item.id.substring(0, 7);
                                tmpsnm.push(truncatedId)
                            });
                            let uniqueTmplnm = [...new Set(tmplnm)].sort();
                            let uniqueTmpmnm = [...new Set(tmpmnm)].sort();
                            let uniqueTmpsnm = [...new Set(tmpsnm)].sort();
                            this.tmp_lnm_list = uniqueTmplnm.map(value => this.lnm_list.find(obj => obj.value === value));
                            this.tmp_mnm_list = uniqueTmpmnm.map(value => this.mnm_list.find(obj => obj.value === value));
                            this.tmp_mnm_list = this.tmp_mnm_list.sort((a, b) => a.text.localeCompare(b.text, 'ko'));
                            this.tmp_snm_list = uniqueTmpsnm.map(value => this.snm_list.find(obj => obj.value === value));
                            this.tmp_snm_list = this.tmp_snm_list.sort((a, b) => a.text.localeCompare(b.text, 'ko'));

                            this.target_lnm_list = this.tmp_lnm_list;
                            this.target_mnm_list = this.tmp_mnm_list;
                            this.target_snm_list = this.tmp_snm_list;
                        } else {
                            this.department4 = [];
                            this.selectedDepartmemt4 = null;

                            this.selectedLnm = null;
                            this.selectedMnm = null;
                            this.selectedSnm = null;
                            this.target_lnm_list = [];
                            this.target_mnm_list = [];
                            this.target_snm_list = [];
                            this.tmp_lnm_list = [];
                            this.tmp_mnm_list = [];
                            this.tmp_snm_list = [];
                        }
                    },
                    selectedDepartmemt4: function(val) {
                        this.selectedDepartmemt4Text = null;

                        if (val) {
                            this.selectedLnm = null;
                            this.selectedMnm = null;
                            this.selectedSnm = null;
                            var _find = _.find(this.departmemt4List, {
                                text: val
                            });
                            if (_find) {
                                setTimeout(() => {
                                    this.selectedDepartmemt4Text = _find.value;
                                }, 100);
                            }
                        }
                    },
                }
            });
        },
    });
});