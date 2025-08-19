
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
    "014":"여행·숙박·음식·경비·청소 관리자",
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
    "140":"건축·토목공학 기술자 및 시험원",
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
    "306":"의료기사·치료사·재활사",
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
    "561":"청소·방역 및 가사 서비스원",
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
        } else if (option === 'bigtitle-tw') {
              mergesArray.push({
                  s: {
                      r: index,
                      c: 0
                  },
                  e: {
                      r: index,
                      c: 11
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
          } else if (option === "bigtitle-three-agree") {
             mergesArray.push({ s: { r: index, c: 0 }, e: { r: index, c: 2 } });
             styleObject = {
                 border: {
                     bottom: {
                         style: "thin",
                         color: "gray",
                     },
                     top: {
                         style: "thin",
                         color: "gray",
                     },
                     left: {
                         style: "thin",
                         color: "gray",
                     },
                     right: {
                         style: "thin",
                         color: "gray",
                     },
                 },
                 font: {
                     sz: 12,
                     bold: false,
                     //color: { rgb: '30839f' },
                 },
                 fill: {
                     fgColor: {
                         rgb: "F2F2F2",
                     },
                 },
                 alignment: {
                     wrapText: false,
                     horizontal: "left",
                     vertical: "left",
                 },
             };
         }  else if (option === "bigtitle-tw-agree") {
            mergesArray.push({ s: { r: index, c: 0 }, e: { r: index, c: 11 } });
            styleObject = {
                border: {
                    bottom: {
                        style: "thin",
                        color: "gray",
                    },
                    top: {
                        style: "thin",
                        color: "gray",
                    },
                    left: {
                        style: "thin",
                        color: "gray",
                    },
                    right: {
                        style: "thin",
                        color: "gray",
                    },
                },
                font: {
                    sz: 12,
                    bold: false,
                    //color: { rgb: '30839f' },
                },
                fill: {
                    fgColor: {
                        rgb: "F2F2F2",
                    },
                },
                alignment: {
                    wrapText: false,
                    horizontal: "left",
                    vertical: "left",
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
        } else if (option === 'bigtitle-five') {
              mergesArray.push({
                  s: {
                      r: index,
                      c: 0
                  },
                  e: {
                      r: index,
                      c: 4
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
        } else if (option === 'search-one-four') {
              mergesArray.push({
                  s: {
                      r: index,
                      c: 1
                  },
                  e: {
                      r: index,
                      c: 4
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
            var _search_university = [];
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
                _search_university = _all_university;
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
                    isManualStep3: false,
                    isManualStep4: false,
                    isManualStep5: false,
                    isManualStep6: false,

                    //전문대학/대학/대학원
                    universityTypes: _universityTypes,
                    selectedUniversityType: null,

                    //대학검색
                    universitys: _all_university,
                    selectedUniversity: null,
                    selectedUniversityByTarget: null,
                    selectedUniversityByTargetDept: null,

                    //전공분류
                    department4: [],
                    departmemt4List: [],
                    selectedDepartmemt4: null,
                    selectedDepartmemt4Text: null,
                    uorgcode: null,
                    null_value: null,

                    isUserGroup: false,
                    isUseUserGroup: false,

                    company_list: [],
                    company_area_list: [],
                    elemName_companyListItems: "empCompListItems",
                    elemName_snmListItems: "empSnmListItems",
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
                    job_low_list_excel: [],
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
                    isAgreeNon: false,
                    isAgreeTime: false,
                    isAgreeTimeText: "",
                    emplrate: [],
                    admrate: [],
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
                    job_retention_data2: [],
                    job_retention_data3: [],
                    flow_data1: [],
                    flow_data2: [],
                    flow_data3: [],
                    isUsageExporter: false,
                    usageExporterType: [
                        { value: "A", text: "전체" },
                        { value: "1", text: "취업현황(조건검색)" },
                        { value: "2", text: "취업현황(회사검색)" },
                        { value: "3", text: "진로예측" },
                        { value: "4", text: "학교별분석" },
                    ],
                    usageExporterDate: [{
                        'value': '1m',
                        'text': '1개월'
                    }, {
                        'value': '1w',
                        'text': '1주'
                    }, {
                        'value': '1d',
                        'text': '1일'
                    }, {
                        'value': '1h',
                        'text': '1시간'
                    }],
                    datepicker_lang: vdp_translation_ko.js,
                    usageExporterTypeValue: "4",
                    usageExporterDateValue: "1d",
                    usageExporterStartDate: moment(new Date(new Date().getFullYear(), new Date().getMonth(), 1)).format('YYYY-MM-DD'),
                    usageExporterEndDate: moment(new Date()).format('YYYY-MM-DD'),
                    salaryChartArray: [],
                    comtypeChartDataArray: [],
                    comindChartDataArray: [],
                    isSelectedUni: true,
                    similarData: [],
                    similarSchools: [],
                    similarSchoolDept: [],
                    selectedYear: 2022,
                    subjectCnt: "",
                    subjectList: [],
                    subjectUniqueList: [],
                    subjectUniqueListByExcel: [],
                    subjectSimilarList: [],
                    subjectTotalrate: {},
                    selectedSchs: [],
                    subjectMyList: [],
                    toeic_avarage: 0,
                    toeic_rate: 0,
                    subjectScalars: {},
                    subjectStats: {},
                    subjectStatsAll: {},
                    subjectStatsAllCnt: 0,
                    subjectStatsCnt: 0,
                    highchartColor: ["#567BFF", "#00C9A7", "#FFA620", "#FF6B8A", "#9A77FF", "#808080"],
                    selectedCompany: null,
                    isAllAnalContent: false,
                    isAllAnalContent: false,
                    isCompareAnalContent: false,
                    selectedSubjectSnm: "",
                    isSubjectSearch: false,
                    subjectSearchResult: {},
                    isUniFetching: false,
					years: _.sortBy(arrayToObject(responseData, "YEAR"), "text").reverse(),
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
                    handleSearchSubjectsSubmit: function() {
                        this.isFetching = true;
                        this.isResponse = false;
                        this.select_flow = "";
                        this.select_jobflow = "";

                        if (this.selectedUniversity == null) {
                            alert("학교를 선택해 주세요.");
                            this.isFetching = false;
                            return false;
                        }

                        if (this.selectedDepartmemt4 == null) {
                            alert("학과를 선택해 주세요.");
                            this.isFetching = false;
                            return false;
                        }

                        if (this.selectedSchs.length == 0) {
                            if(confirm("비교 학교를 선택하지 않으셨습니다.\n기준 대학 정보만 검색 하시겠습니까?")) {
                            } else {
                                this.isFetching = false;
                                return false;
                            }
                        }

                        this.requestSubjectsData();
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
                    requestSubjectsData: function() {
                        let data = {};
                        let url = "";

                        /* this 객체를 ajax에서 접근하기 위함 */
                        const vm = this;
                        vm.subjectCnt = "";
                        vm.subjectList = [];
                        vm.subjectUniqueList = [];
                        vm.subjectSimilarList = [];
                        vm.subjectUniqueListByExcel = [];
                        vm.subjectScalars = {};
                        vm.subjectStats = {};
                        vm.subjectStatsAll = {};
                        vm.subjectStatsAllCnt = 0;
                        vm.subjectStatsCnt = 0;
                        vm.subjectTotalrate = {};
                        vm.subjectMyList = [];

                        var unicode = vm.selectedUniversity.id.split('_');
                        data['year'] = vm.selectedYear;
                        data['schcd'] = unicode[0];
                        data['orgcd'] = unicode[1];
                        data['deptcd'] = vm.selectedDepartmemt4.id;

                        let selected_schs = vm.selectedSchs.map(obj => {
                            let newObj = {...obj}; // Create a shallow copy of the object
                            delete newObj.NAME;    // Remove the NAME property
                            return newObj;
                        });

						let tmpSchs = JSON.stringify(selected_schs).replaceAll("\"", "|");
                        data['selected_schs'] = tmpSchs;
                        data['username'] = userid + "_" + userType;

                        $.ajax({
                            type: "GET",
                            url: DEBUG ? "json/getUniversityLecturesStats.json" : "/swiss/cm/getUniversityLecturesStats.do",
                            dataType: "text",
                            data: data,
                            beforeSend: function (xhr) {
                                xhr.setRequestHeader("username", userid + "_" + userType);
                            },
                            success: function (response) {
                                var res = JSON.parse(response);
								if (Object.keys(res).length == undefined || Object.keys(res).length == 0) {
                                    alert("검색 결과가 존재하지 않습니다.");
                                    vm.isResponse = false;
                                    vm.isFetching = false;

                                    vm.isCompareAnalContent = false;
                                    vm.isAllAnalContent = false;
                                } else {
									vm.isResponse = true;
									vm.isFetching = false;

                                    vm.isCompareAnalContent = true;
									vm.isAllAnalContent = false;

									let cnt = Object.keys(res.similars).length;

									let containerWidth = 1100;
									let fixedWidth = 100; // 고정 너비
									let dynamicWidth = containerWidth - fixedWidth; // 동적 너비
									let percentageWidth = (dynamicWidth / containerWidth) * 100;

                                    if (cnt == 1) {
                                        vm.subjectCnt = `1000px`;
                                    } else if (cnt == 2) {
										vm.subjectCnt = `500px`;
									} else if (cnt == 3) {
										vm.subjectCnt = `333px`;
									} else if (cnt == 4) {
										vm.subjectCnt = `250px`;
									} else if (cnt == 5) {
										vm.subjectCnt = `200px`;
									} else if (cnt == 6) {
										vm.subjectCnt = `166px`;
									}

									vm.subjectList = res.similars;
									let allSubjectValues = Object.values(vm.subjectList);
									let tmpMyList = [];
									tmpMyList.push(allSubjectValues[0]);

									allSubjectValues = allSubjectValues.slice(1);
									let flattenedSubjects = [].concat(...allSubjectValues);
									let filteredSubjects = flattenedSubjects.filter(subject => subject !== "");
									filteredSubjects = [...new Set(filteredSubjects)];
									vm.subjectSimilarList = filteredSubjects;

									vm.subjectUniqueListByExcel = res.uniques;
									let uniqueList = res.uniques;

									for (const key in uniqueList) {
									  if (uniqueList.hasOwnProperty(key)) {
										uniqueList[key] = uniqueList[key].filter(subject => subject !== "");
									  }
									}

									uniqueList = Object.values(uniqueList);

									tmpMyList.push(uniqueList[0]);
                                    vm.subjectMyList = [].concat(...tmpMyList);
									vm.subjectUniqueList = uniqueList;

									vm.subjectScalars = res.stat_scalars;
									vm.subjectStats = getLectureDataAndSort(res.stat_tables, vm.similarSchools.length);
									vm.subjectStatsCnt = res.stat_tables.rank.length;

									var subjectStatsTop10Data = vm.subjectStats.slice(0, 10);
									var subjectStatsList = _.map(subjectStatsTop10Data, function (item, index) {
										return [item.text, item.point];
									});

                                    let chartopts = {
                                    	labels : {
                                    		plot: 'TOP ' + subjectStatsTop10Data.length,
                                    		y : '강좌수',
                                    		flag : '강좌수'
                                    	}
                                    };

                                    setRenderCategoricalChartWithOptions("lectureChart", subjectStatsList, Highcharts, chartopts, 480);
									/*setRenderPieChartUni(
										"lectureChart",
										subjectStatsList,
										Highcharts
									);*/

									vm.subjectStatsAll = getLectureDataAndSortAll(res.stat_tables_all, vm.similarSchools.length);
									vm.subjectStatsAllCnt = res.stat_tables_all.rank.length;

                                    var subjectStatsAllTop10Data = vm.subjectStatsAll.slice(0, 10);
                                    var subjectStatsAllList = _.map(subjectStatsAllTop10Data, function (item, index) {
                                        return [item.text, item.point];
                                    });

                                    setRenderCategoricalChartWithOptions("lectureAllChart", subjectStatsAllList, Highcharts, chartopts, 480);
                                    /*setRenderPieChartUni(
                                        "lectureAllChart",
                                        subjectStatsAllList,
                                        Highcharts
                                    );*/

									vm.subjectTotalrate = res.totalrate;

									let unis = [];
									for (const key in res.similars) {
									  unis.push(key);
									}

                                    let seriesData = [];
                                    for (let i = 0; i < unis.length; i++) {
                                        let data = [];
                                        data.push(vm.subjectTotalrate.graduCnt[i]);
                                        data.push(vm.subjectTotalrate.emprateCnt[i]);
                                        data.push(vm.subjectTotalrate.admrateCnt[i]);

                                        seriesData.push({name: unis[i], data: data, color: vm.highchartColor[i]});
                                    };

									setRenderColumnSimpleChartByUnis(
										"employee_multi_chart",
										['졸업자수', '취업자', '진학자'],
										"졸업자수/취업자/진학자",
										"{value:,.0f}명",
										seriesData,
										Highcharts
									);

                                    seriesData = [];
                                    for (let i = 0; i < unis.length; i++) {
                                        let data = [];
                                        data.push(vm.subjectTotalrate.emprate[i]);
                                        data.push(vm.subjectTotalrate.admrate[i]);

                                        seriesData.push({name: unis[i], data: data, color: vm.highchartColor[i]});
                                    };

									setRenderColumnSimpleChartByUnis(
                                        "employee_multi_chart2",
                                        ['취업률', '진학률'],
                                        "취업률/진학률",
                                        "{value}%",
                                        seriesData,
                                        Highcharts
                                    );
								};
                            }
                        });
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
                                    vm.admrate = res.admrate;
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

                                    //토익 line chart
                                    var toeicmin = 0;
                                    var toeic = res.toeic;
                                    if (toeic) {
                                        toeic.sort((a, b) => a - b);
                                        toeicmain = toeic[0] - 10;
                                    }
                                    toeicmain = toeicmin <= 0 ? 0 : toeicmin;

                                    toeic = toeic.map(function(num) {
                                        var value = Math.round(num / 50) * 50;
                                        if (value < 400) {
                                            value = 0;
                                        };
                                        return value;
                                    });

                                    var toeicGroups = {};

                                    // 범위는 0 ~ 100으로 가정
                                    for (var i = 0; i <= 1000; i += 50) {
                                        // 400점 미만은 '0점 ~ 400점'으로 그룹화
                                        if (i < 400) {
                                            toeicGroups['0점 ~ 400점'] = 0;
                                        } else {
                                            // 마지막 범위 설정
                                            var upperLimit = i === 1000 ? 990 : i + 50;
                                            if (i == 1000) {
                                                i = 990;
                                            }

                                            if (upperLimit == 1000) {
                                                upperLimit = 990;
                                            }

                                            toeicGroups[i + '점 ~ ' + upperLimit + '점'] = 0;
                                        }
                                    }

                                    toeic.forEach(function(score) {
                                        // 각 점수에 대해 해당 범위를 찾아 카운트 증가
                                        if (score < 400) {
                                            toeicGroups['0점 ~ 400점']++;
                                        } else if (score == 1000 || score == 950) {
                                            toeicGroups['950점 ~ 990점']++;
                                        } else {
                                            toeicGroups[score + '점 ~ ' + (score + 50) + '점']++;
                                        }
                                    });

                                    // 객체 배열 생성
                                    var toeicRangeObjects = Object.keys(toeicGroups).map(function(key) {
                                        return {
                                            name: key,
                                            y: toeicGroups[key]
                                        };
                                    });

                                    setRenderMultipleAxisChartByToeic("toeic_chart", toeicRangeObjects, Highcharts);


                                    vm.toeic_avarage = res.toeic.length > 0 ? round(_.meanBy(res.toeic)) : 0;
                                    vm.toeic_avarage = vm.toeic_avarage.toFixed(0)

                                    var scoremin = 0;
                                    var gradescore = res.gradescore;
                                    if (gradescore) {
                                        gradescore.sort((a, b) => a - b);
                                        scoremin = gradescore[0] - 10;
                                    }
                                    scoremin = scoremin <= 0 ? 0 : scoremin;

                                    gradescore = gradescore.map(function(num) {
                                        var value = Math.round(num / 5) * 5;
                                        if (value < 60) {
                                            value = 0;
                                        }
                                        return value;
                                    });

                                    var scoreGroups = {};

                                    // 범위는 0 ~ 100으로 가정
                                    for (var i = 0; i <= 100; i += 5) {
                                        // 60점 미만은 '0점 ~ 60점'으로 그룹화
                                        if (i < 60) {
                                            scoreGroups['0점 ~ 60점'] = 0;
                                        } else {
                                            // 마지막 범위 설정
                                            var upperLimit = i === 100 ? i : i + 5;
                                            scoreGroups[i + '점 ~ ' + upperLimit + '점'] = 0;
                                        }
                                    }

                                    _.map(gradescore, function(score) {
                                        // 각 점수에 대해 해당 범위를 찾아 카운트 증가
                                        if (score < 60) {
                                            scoreGroups['0점 ~ 60점']++;
                                        } else if (score == 100) {
                                            scoreGroups['95점 ~ 100점']++;
                                        } else {
                                            scoreGroups[score + '점 ~ ' + (score + 5) + '점']++;
                                        }
                                    });

                                    // 객체 배열 생성
                                    var scoreRangeObjects = Object.keys(scoreGroups).map(function(key) {
                                        return {
                                            name: key,
                                            y: scoreGroups[key]
                                        };
                                    });

                                    setRenderMultipleAxisChartByGrade("grade_chart", scoreRangeObjects, Highcharts);
                                    // 취업현황 END

                                    // 기업정보 START
                                    var chart1 = getColumnChartSeries(getSeriesDataAndSort(res.comtype, true), '');
                                    vm.comtypeChartDataArray = chart1;
                                    setRenderPieChartMultiUni('comtype_pie_chart', chart1, Highcharts);

                                    var chart2 = getColumnChartSeries(getSeriesDataAndSort(res.comind, true), '');
                                    vm.comindChartDataArray = chart2;
                                    setRenderPieChartMultiUni('comind_pie_chart', chart2, Highcharts);

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

                                        if (cnt1 <= 10) {
                                            companyAreaTop.push([key, value]);
                                        }
                                    }

                                   let chartopts = {
                                    	labels : {
                                    		plot: 'TOP ' + companyAreaTop.length,
                                    		y : '취업자수 (명)',
                                    		flag : '취업자수'
                                    	}
                                    };

                                    setRenderCategoricalChartWithOptions("company_area", companyAreaTop, Highcharts, chartopts, 500);
                                    //setRenderPieChartUni("company_area", companyAreaTop, Highcharts);

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

                                        if (cnt1 <= 10) {
                                            companyTop.push([infos[1], value]);
                                        }
                                    }

                                    chartopts = {
                                        labels : {
                                            plot: 'TOP ' + companyTop.length,
                                            y : '취업자수 (명)',
                                            flag : '취업자수'
                                        }
                                    };

                                    setRenderCategoricalChartWithOptions("company", companyTop, Highcharts, chartopts, 500);
                                    //setRenderPieChartUniClick("company", companyTop, Highcharts);
                                    // 기업정보 END

                                    // 직무정보 START
                                    var jobhighArray = getSeriesDataAndSort(res.jobhigh, true);
                                    vm.job_high_list = _.map(jobhighArray, function (item) {
                                       return [_globalJobHighObject[item.text], item.value];
                                    });
                                    setRenderPieChartBySize(
                                        "jobhigh",
                                        vm.job_high_list,
                                        Highcharts
                                    );

                                    var jobmiddleArray = getSeriesDataAndSort(res.jobmiddle, true);
                                    vm.job_middle_list = _.map(jobmiddleArray, function (item) {
                                        return [_globalJobMiddleObject[item.text], item.value];
                                    })
                                    setRenderPieChartBySize(
                                        "jobmiddle",
                                        vm.job_middle_list,
                                        Highcharts
                                    );

                                    var joblowArray = getJobLowDataAndSort(res.joblow, _globalJobLowObject);
                                    vm.job_low_list = joblowArray;
                                    vm.job_low_list_excel = _.map(joblowArray, function (item) {
                                      return [item.text, item.point];
                                    });

                                    var joblowTop10Data = joblowArray;
                                    if (joblowTop10Data.length > 10) {
                                        joblowTop10Data = joblowArray.slice(0, 10);
                                    }

                                    chartopts = {
                                        labels : {
                                            plot: 'TOP ' + joblowTop10Data.length,
                                            y : '취업자수 (명)',
                                            flag : '취업자수'
                                        }
                                    };

                                    joblowTop10Data =  _.map(joblowTop10Data, function (item) {
                                       return [item.text, item.point];
                                   })

                                    setRenderCategoricalChartWithOptions("joblow", joblowTop10Data, Highcharts, chartopts, 460);
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

                                    vm.salaryChartArray = _.map(salary_data, function (item, index) {
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

                                    setRenderColumnSimpleChartBySalary(
                                        "salary_chart",
                                        vm.salaryChartArray,
                                        salary_dept,
                                        Highcharts,
                                        false
                                    );

                                    //자격증 종류 column chart
                                    var licenseArray = getLicenseDataAndSort(res.license_nm);
                                    vm.license_list = licenseArray;
                                    var top10Data = licenseArray;
                                    if (top10Data.length > 10) {
                                        top10Data = licenseArray.slice(0, 10);
                                    }

                                    let license_values = _.map(top10Data, function (item) {
                                         var idx = item.text.lastIndexOf("/") == -1 ? 0 : item.text.lastIndexOf("/") + 2;
                                         var itemtext = item.text.substr(idx);
                                         return [itemtext, item.point];
                                    })

                                    chartopts = {
                                    	labels : {
                                    		plot: 'TOP ' + license_values.length,
                                    		y : '취업자수',
                                    		flag : '취업자수'
                                    	}
                                    };

                                    setRenderCategoricalChartWithOptions("licenseChart", license_values, Highcharts, chartopts, 460);

                                    var privatelicenseArray = getLicenseDataAndSort(res.private_license_nm);
                                    vm.privatelicense_list = privatelicenseArray;
                                    var privateTop10Data = privatelicenseArray;
                                    if (privateTop10Data.length > 3) {
                                        privateTop10Data = privatelicenseArray.slice(0, 10);
                                    }

                                    let private_license_values = _.map(privateTop10Data, function (item) {
                                         return [item.text, item.point];
                                     })

                                    chartopts = {
                                        labels : {
                                            plot: 'TOP ' + private_license_values.length,
                                            y : '취업자수 (명)',
                                            flag : '취업자수'
                                        }
                                    };

                                    setRenderCategoricalChartWithOptions("privatelicenseChart", private_license_values, Highcharts, chartopts, 460);

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

                        this.similarData = [],
                        this.similarSchools = [];
                        this.similarSchoolDept = [];
                        this.selectedSchs = [];
                        this.selectedYear = 2022;
                        this.subjectCnt = "";
                        this.subjectList = [];
                        this.subjectUniqueList = [];
                        this.subjectUniqueListByExcel = [];
                        this.subjectSimilarList = [];
                        this.subjectScalars = {};
                        this.subjectStats = {};
                        this.subjectTotalrate = {};
                        this.selectedUniversityByTarget = null;
                        this.selectedUniversityByTargetDept = null;

                        this.selectedSubjectSnm = "";
                        this.isSubjectSearch = false;
                        this.subjectSearchResult = {};
                        this.isUniFetching = false;
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
                        this.isManualStep3 = false;
                        this.isManualStep4 = false;
                        this.isManualStep5 = false;
                        this.isManualStep6 = false;

                        switch (step) {
                            case 1:
                                this.isManualStep1 = true;
                                break;
                            case 2:
                                this.isManualStep2 = true;
                                break;
                            case 3:
                                this.isManualStep3 = true;
                                break;
                            case 4:
                                this.isManualStep4 = true;
                                break;
                            case 5:
                                this.isManualStep5 = true;
                                break;
                            case 6:
                                this.isManualStep6 = true;
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
                        this.isCompareAnalContent = false;
                        this.isAllAnalContent = false;

                        /* 나머지 초기화 */
                        let elems = document.getElementsByName(this.elemName_snmListItems);
                        let sz_elems = elems.length;
                        for (let i = 0; i < sz_elems; i++) {
                            elems[i].classList.remove("selected");
                            this.selectedSubjectSnm = "";
                        }

                        this.subjectSearchResult = {};

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
                            case 'compareanal':
                                this.isCompareAnalContent = true;
                                break;
                            case 'allanal':
                                this.isAllAnalContent = true;
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
                                } else {
									let formattedDate = _this.formatDate(new Date());
									_this.isAgree = false;
									_this.isAgreeTime = true;
									_this.isAgreeTimeText = "["+formattedDate+" 위 내용에 동의하셨습니다.]";
								}
                            }
                        });
                    },
                    handleInformationNonAgree: function() {
                        this.isAgree = false;
                        this.isAgreeTime = false;
                        this.isAgreeNon = true;
                    },
					formatDate: function(dateString) {
						const date = new Date(dateString);

						const year = String(date.getFullYear()).slice(-2);
						const month = String(date.getMonth() + 1).padStart(2, '0');
						const day = String(date.getDate()).padStart(2, '0');
						const hour = String(date.getHours()).padStart(2, '0');
						const minute = String(date.getMinutes()).padStart(2, '0');

						return `${year}.${month}.${day} ${hour}:${minute}`;
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
                                    _this.isAgreeTime = false;
                                    _this.isAgreeTimeText = "";
                                } else {
									let formattedDate = _this.formatDate(res.CREATE_TIME[0]);

                                    _this.isAgree = false;
                                    _this.isAgreeTime = true;
                                    _this.isAgreeTimeText = "["+formattedDate+" 위 내용에 동의하셨습니다.]";
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
                    groupByArrayExcel(wsData, arr1, arr2, arr3, obj) {
                        let totalCnt = 0;
                        for (var i = 0; i < arr1.length; i++) {
                            var value = arr1[i][1];
                            totalCnt += value;
                        }

                        for (const [key, value] of Object.entries(obj)) {
                            let target1 = 0;
                            let target2 = 0;
                            let target3 = 0;

                            for (let i = 0; i < arr1.length; i++) {
                                if (arr1[i][0] === value) {
                                    target1 = arr1[i][1];
                                    break;
                                }
                            }

                            for (let i = 0; i < arr2.length; i++) {
                                if (arr2[i][0] === value) {
                                    target2 = arr2[i][1];
                                    break;
                                }
                            }

                            for (let i = 0; i < arr3.length; i++) {
                                if (arr3[i][0] === value) {
                                    target3 = arr3[i][1];
                                    break;
                                }
                            }

                            wsData.push(["data-first", 7, value, target1, parseFloat(((target1 / totalCnt) * 100).toFixed(2)) || 0, target2, parseFloat(((target2 / totalCnt) * 100).toFixed(2)) || 0, target3, parseFloat(((target3 / totalCnt) * 100).toFixed(2)) || 0]);
                        }

                        return wsData
                    },
                    groupByArrayExcel2(wsData, arr1, arr2, arr3, obj) {
                        let totalCnt1 = 0;
                        let totalCnt2 = 0;
                        let totalCnt3 = 0;
                        for (var i = 0; i < arr1.length; i++) {
                            var value = arr1[i][1];
                            totalCnt1 += value;
                        }
                        for (var i = 0; i < arr2.length; i++) {
                            var value = arr2[i][1];
                            totalCnt2 += value;
                        }
                        for (var i = 0; i < arr3.length; i++) {
                            var value = arr3[i][1];
                            totalCnt3 += value;
                        }

                        for (const [key, value] of Object.entries(obj)) {
                            let target1 = 0;
                            let target2 = 0;
                            let target3 = 0;
                            let target1Rate = 0;
                            let target2Rate = 0;
                            let target3Rate = 0;

                            for (let i = 0; i < arr1.length; i++) {
                                if (arr1[i][0] === value) {
                                    target1 = arr1[i][1];
                                    target1Rate = parseFloat(((target1 / totalCnt1) * 100).toFixed(2))
                                    break;
                                }
                            }

                            for (let i = 0; i < arr2.length; i++) {
                                if (arr2[i][0] === value) {
                                    target2 = arr2[i][1];
                                    target2Rate = parseFloat(((target2 / totalCnt2) * 100).toFixed(2))
                                    break;
                                }
                            }

                            for (let i = 0; i < arr3.length; i++) {
                                if (arr3[i][0] === value) {
                                    target3 = arr3[i][1];
                                    target3Rate = parseFloat(((target3 / totalCnt3) * 100).toFixed(2))
                                    break;
                                }
                            }

                            wsData.push(["data-first", 7, value, target1, target1Rate, target2, target2Rate, target3, target3Rate]);
                        }

                        return wsData
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
                    },

                    usageExporterSearchOnSubmit() {
                        // validation
                        if (this.usageExporterTypeValue == null) {
                            alert("구분을 선택해 주세요.");
                            return false;
                        }
                        if (this.usageExporterStartDate == null || this.usageExporterEndDate == null) {
                            alert("조회기간을 선택해 주세요.");
                            return false;
                        }
                        if (moment(this.usageExporterStartDate).isAfter(this.usageExporterEndDate)) {
                            alert("검색 종료일은 검색 시작일보다 빨라야 합니다.");
                            return false;
                        }
                        if (this.usageExporterDateValue == null) {
                            alert("조회간격을 선택해 주세요.");
                            return false;
                        }

                        // 데이터 조회
                        var _this = this;
                        var _data = {};
                        _data['what'] = this.usageExporterTypeValue;
                        _data['start'] = moment(this.usageExporterStartDate).format('YYYY-MM-DD');
                        _data['end'] = moment(this.usageExporterEndDate).format('YYYY-MM-DD');
                        _data['agg'] = this.usageExporterDateValue;

                        $.ajax({
                            type: "GET",
                            url: DEBUG ? "json/getUsageExporterData.json" : "/swiss/cm/getUsageExport.do",
                            dataType: "text",
                            data: _data,
                            success: function(response) {
                                var res = JSON.parse(response);
                                if (res.length == 0) {
                                    alert('검색 결과가 존재하지 않습니다.');
                                } else {
                                    // 엑셀 다운로드
                                    _this.usageExcelExport(res);
                                }
                            }
                        });
                    },
                    /**
                     * @description 사용현황 엑셀 출력
                     */
                    usageExcelExport: function(data) {
                        var _this = this;
                        var nowData = data;
                        var ws_name = '사용현황 통계';
                        var wb = new Workbook();

                        var getSubtitle = (title) => {
                            return ['subtitle', 3, title, '', ''];
                        }

                        var dateObj = _.find(this.usageExporterDate, {
                            value: this.usageExporterDateValue
                        });
                        var searchText = '';
                        searchText += _.find(this.usageExporterType, {
                            value: this.usageExporterTypeValue
                        }).text + ' / ';
                        searchText += moment(this.usageExporterStartDate).format('YYYY-MM-DD') + ' / ';
                        searchText += moment(this.usageExporterEndDate).format('YYYY-MM-DD') + ' / ';
                        searchText += dateObj.text;

                        var getTitle = (num) => {
                            var wsData = [];
                            var empty = Array.from(''.repeat(num))
                            var rowEmpty = ['empty', num];
                            rowEmpty.concat(empty);
                            wsData.push(rowEmpty);
                            empty = Array.from(''.repeat(num - 1))
                            var titleRow = ['bigtitle-five', num, '사용현황 통계', '', '', '', ''];
                            wsData.push(titleRow);
                            var searchRow1 = ['search-one-four', num, '검색 조건', `${searchText}`, '', '', ''];
                            wsData.push(searchRow1);
                            wsData.push(rowEmpty);
                            return [wsData, rowEmpty];
                        }

                        var addSheet = (wsData, ws_name) => {
                            var _sheet = json_to_sheet(wsData);
                            var ws = _sheet.data;
                            var wscols = [{
                                    wch: 20
                                },
                                {
                                    wch: 20
                                },
                                {
                                    wch: 20
                                },
                                {
                                    wch: 20
                                }
                            ];

                            ws['!cols'] = wscols;
                            ws['!merges'] = _sheet.mergesArray;
                            wb.SheetNames.push(ws_name);
                            wb.Sheets[ws_name] = ws;
                        }

                        var wsData = [];
                        var rowEmpty = [];

                        ret = getTitle(5);
                        wsData = ret[0];
                        rowEmpty = ret[1];

                        var dataHeaderRow1 = ["header", 5, "날짜", "조회메뉴명", "ID", "유저구분", "접속"];
                        wsData.push(dataHeaderRow1);

                        for (let item of nowData) {
                            wsData.push(["data-first", 5, item["date"], item["gubun"], item["user"], item["usergroup"], item["count"]]);
                        }
                        addSheet(wsData, ws_name);

                        var wbout = XLSX.write(wb, {
                            bookType: 'xlsx',
                            bookSST: true,
                            type: 'binary'
                        });
                        var _date = moment().format('YYYYMMDDHHmm');
                        saveAs(new Blob([s2ab(wbout)], {
                            type: 'application/octet-stream'
                        }), ws_name + '_' + _date + '.xlsx');
                    },
                    handleExport: function() {
                        if (this.isResponse) {
                            this.excelExport();
                        } else {
                            alert('검색 후 검색 결과 저장을 진행 해주시기 바랍니다.');
                        }
                    },
                    handleExportByLecture: function() {
                        if (this.isResponse) {
                            this.excelExportByLecture();
                        } else {
                            alert('검색 후 검색 결과 저장을 진행 해주시기 바랍니다.');
                        }
                    },
                    excelExport: function () {
                        const vm = this;
                        var nowData = vm.searchResult;
                        var ws_name = "학교별분석";
                        var wb = new Workbook();

                        var getSubtitle = (title) => {
                            return ["subtitle", 3, title, "", ""];
                        };

                        var companyTypeListText = "";
                        var companySizeListText = "";
                        var companyPersonnelSizeListText = "";
                        var companyAreaListText = "";
                        var companyText = "";

                        var getTitle = (num) => {
                            var wsData = [];
                            var empty = Array.from("".repeat(num));
                            var rowEmpty = ["empty", num];
                            rowEmpty.concat(empty);
                            wsData.push(rowEmpty);
                            empty = Array.from("".repeat(num - 1));
                            var titleRow = ["bigtitle-three", num, "학교별 분석", "", ""];
                            titleRow.concat(empty);
                            wsData.push(titleRow);

                            var searchRow1 = ["search3", num, `검색 조건: `, "", ""];
                            searchRow1.concat(empty);
                            wsData.push(searchRow1);

                            var selectedUniversityText = "";
                            if (vm.selectedUniversity != null) {
                                selectedUniversityText = vm.selectedUniversity.name;
                            }
                            var searchRow2 = ["search3", num, `  - 학교: ${selectedUniversityText}`, "", ""];
                            searchRow2.concat(empty);
                            wsData.push(searchRow2);

                            var selectedDepartmemt4Text = "";
                            if (vm.selectedDepartmemt4 != null) {
                                selectedDepartmemt4Text = vm.selectedDepartmemt4.name;
                            }
                            var searchRow3 = ["search3", num, `  - 학과: ${selectedDepartmemt4Text}`, "", ""];
                            searchRow3.concat(empty);
                            wsData.push(searchRow3);

                            var selectedLnmText = "";
                            if (vm.selectedLnm != null) {
                                selectedLnmText = vm.selectedLnm.text;
                            }
                            var searchRow4 = ["search3", num, `  - 대계열: ${selectedLnmText}`, "", ""];
                            searchRow4.concat(empty);
                            wsData.push(searchRow4);

                            var selectedMnmText = "";
                            if (vm.selectedMnm != null) {
                                selectedMnmText = vm.selectedMnm.text;
                            }
                            var searchRow5 = ["search3", num, `  - 중계열: ${selectedMnmText}`, "", ""];
                            searchRow5.concat(empty);
                            wsData.push(searchRow5);

                            var selectedSnmText = "";
                            if (vm.selectedSnm != null) {
                                selectedSnmText = vm.selectedSnm.text;
                            }
                            var searchRow6 = ["search3", num, `  - 소계열: ${selectedSnmText}`, "", ""];
                            searchRow6.concat(empty);
                            wsData.push(searchRow6);

                            var selectedGenderText = "";
                            if (vm.selectedGender != null) {
                                if (vm.selectedGender == "1") {
                                    selectedGenderText = "남";
                                } else {
                                    selectedGenderText = "여";
                                }
                            }
                            var searchRow7 = ["search3", num, `  - 성별: ${selectedGenderText}`, "", ""];
                            searchRow7.concat(empty);
                            wsData.push(searchRow7);

                            wsData.push(rowEmpty);
                            return [wsData, rowEmpty];
                        };

                        var addSheet = (wsData, ws_name) => {
                            let objectMaxLength = [];
                            let startRow = 0;
                            if (vm.isSelectedCorp) {
                                startRow = 9;
                            } else {
                                startRow = 5;
                            }
							
							wsData = wsData.filter(row => {
                                let values = Object.values(row);
                                return values.every(value => value !== undefined && value !== null);
                            });

                            for (let i = startRow; i < wsData.length; i++) {
                                let value = Object.values(wsData[i]);
                                if (value.length > 2) {
                                    for (let j = 2; j < value.length; j++) {
                                        tmpLength = value[j].length ? value[j].length * 1.7 : 20;
                                        objectMaxLength[j] = objectMaxLength[j] >= tmpLength ? objectMaxLength[j] : tmpLength;
                                    }
                                }
                            }

                            var _sheet = json_to_sheet(wsData);
                            var ws = _sheet.data;
                            var cols = [];
                            for (var i = 2; i < objectMaxLength.length; i++) {
                                cols.push({ wch: objectMaxLength[i] });
                            }

                            ws["!cols"] = cols;
                            ws["!merges"] = _sheet.mergesArray;
                            wb.SheetNames.push(ws_name);
                            wb.Sheets[ws_name] = ws;
                        };

                        var wsData = [];
                        var rowEmpty = [];
                        wsData.push(rowEmpty);

                        let tmpEmpty = Array.from("".repeat(12));
                        var titleRow = ["bigtitle-tw", 12, "목적 외 활용 금지 서약", "", "", "", "", "", "", "", "", "", "", ""];
                        titleRow.concat(tmpEmpty);
                        wsData.push(titleRow);

                        let desc = "본 시스템은 재학생의 진로지도 및 대학별 진로지도 관련 정책 수립에 도움을 드리기 위한 목적으로 제공되고 있습니다."
                        titleRow = ["bigtitle-tw-agree", 12, desc, "", "", "", "", "", "", "", "", "", "", ""];
                        titleRow.concat(tmpEmpty);
                        wsData.push(titleRow);

                        desc = "해당 목적 외(학교 홍보 등) 사용 시 불이익을 받으실 수 있습니다. 또한 「데이터 산업진흥 및 이용촉진에 관한 기본법」"
                        titleRow = ["bigtitle-tw-agree", 12, desc, "", "", "", "", "", "", "", "", "", "", ""];
                        titleRow.concat(tmpEmpty);
                        wsData.push(titleRow);

                        desc = "제 12조에 의하여 외부 유출을 금지 하고 있습니다."
                        titleRow = ["bigtitle-tw-agree", 12, desc, "", "", "", "", "", "", "", "", "", "", ""];
                        titleRow.concat(tmpEmpty);
                        wsData.push(titleRow);

                        addSheet(wsData, "목적 외 활용 금지 서약");

                        if (!vm.isProtection) {
                            //취업현황요약
                            ret = getTitle(7);
                            wsData = ret[0];
                            rowEmpty = ret[1];

                            wsData.push(getSubtitle("▶대상자수"));
                            wsData.push(["header", 1, vm.resultCount.toLocaleString() + '명']);
                            wsData.push(rowEmpty);

                            wsData.push(getSubtitle("▶취업률, 진학률"));
                            wsData.push(["header", 5, "구분", "3년평균", vm.emplrate[0].year, vm.emplrate[1].year, vm.emplrate[2].year]);
                            wsData.push([
                                "data",
                                5,
                                "취업률",
                                vm.totalRate.emprate+"%",
                                vm.emplrate[0].per+"%",
                                vm.emplrate[1].per+"%",
                                vm.emplrate[2].per+"%"
                            ]);
                            wsData.push([
                                "data",
                                5,
                                "진학률",
                                vm.totalRate.admrate+"%",
                                vm.admrate[0].per+"%",
                                vm.admrate[1].per+"%",
                                vm.admrate[2].per+"%"
                            ]);

                            wsData.push(rowEmpty);
                            wsData.push(getSubtitle("▶학과(계열) - (1~3순위)"));
                            wsData.push(["header", 3, "순위", "학과(전공)", "소계열"]);
                            for (var i = 0; i < vm.major_rank.length; i++) {
                                tmpMajorRank = vm.major_rank[i] ? vm.major_rank[i].name + " (" + vm.major_rank[i].value + ")" : "";
                                tmpMajorFieldRank = vm.major_field_rank[i] ? vm.major_field_rank[i].name + " (" + vm.major_field_rank[i].value + ")" : "";
                                wsData.push(["data", 3, i + 1, tmpMajorRank, tmpMajorFieldRank]);
                            }
                            wsData.push(rowEmpty);
                            wsData.push(getSubtitle("▶자격(평균)"));
                            wsData.push(["header", 3, "학점(백분율)", "토익점수", "자격증 수"]);
                            var tt = vm.avarageAnalysis;
                            wsData.push([
                                "data",
                                3,
                                tt.gradescore_avg,
                                tt.toeic_avg + " (" + tt.toeic_percent + "% 보유)",
                                tt.license_avg + " (" + tt.license_percent + "% 보유)",
                            ]);
                            wsData.push(rowEmpty);
                            wsData.push(getSubtitle("▶특성(비율)"));
                            wsData.push(["header", 4, "해외연수여부(%)", "현장실습여부(%)", "교직과정이수여부(%)", "편입여부(%)"]);
                            var tt = vm.avarageAnalysis;
                            wsData.push(["data", 4, tt.oversea_percent, tt.internship_percent, tt.teach_percent, tt.transfer_percent]);
                            wsData.push(rowEmpty);

                            wsData.push(getSubtitle("▶급여분포"));

                            var salaryHeader = ["header", vm.salaryChartArray.length];
                            var salaryData = ["data", vm.salaryChartArray.length];
                            for (var i = 0; i < vm.salaryChartArray.length; i++) {
                                salaryHeader.push(vm.salaryChartArray[i].name);
                                salaryData.push(vm.salaryChartArray[i].y);
                            }

                            wsData.push(salaryHeader);
                            wsData.push(salaryData);
                            wsData.push(rowEmpty);

                            addSheet(wsData, "취업현황요약");
                        }

                        // 기업정보
                        ret = getTitle(3);
                        wsData = ret[0];
                        rowEmpty = ret[1];

                        //comtypeChartDataArray: [],
                        //comindChartDataArray: [],
                        wsData.push(["subtitle", 3, "▶기업유형", "", ""]);
                        wsData.push(["header", 3, "기업유형명", "인원", "비율(%)"]);
                        var totalComtypeCnt = 0;
                        for (var i = 0; i < vm.comtypeChartDataArray.length; i++) {
                            totalComtypeCnt += vm.comtypeChartDataArray[i].y;
                        }
                        for (var i = 0; i < vm.comtypeChartDataArray.length; i++) {
                            var name = vm.comtypeChartDataArray[i].name
                            var value = vm.comtypeChartDataArray[i].y;
                            wsData.push(["data-first", 3, name, value, parseFloat(((value / totalComtypeCnt) * 100).toFixed(2))]);
                        }
                        wsData.push(rowEmpty);

                        wsData.push(["subtitle", 3, "▶산업분류", "", ""]);
                        wsData.push(["header", 3, "산업분류명", "인원", "비율(%)"]);
                        var totalComindCnt = 0;
                        for (var i = 0; i < vm.comindChartDataArray.length; i++) {
                            totalComindCnt += vm.comindChartDataArray[i].y;
                        }
                        for (var i = 0; i < vm.comindChartDataArray.length; i++) {
                            var name = vm.comindChartDataArray[i].name
                            var value = vm.comindChartDataArray[i].y;
                            wsData.push(["data-first", 3, name, value, parseFloat(((value / totalComindCnt) * 100).toFixed(2))]);
                        }
                        wsData.push(rowEmpty);

                        wsData.push(["subtitle", 3, "▶근무지역", "", ""]);
                        wsData.push(["header", 3, "근무지역명", "인원", "비율(%)"]);

                        for (var i = 0; i < vm.company_area_list.length; i++) {
                            var name = vm.company_area_list[i].name
                            var count = vm.company_area_list[i].count;
                            count = count.substring(0, count.indexOf('%'));
                            var value = vm.company_area_list[i].value;
                            wsData.push(["data-first", 3, name, value, count]);
                        }
                        wsData.push(rowEmpty);

                        if (!vm.isProtection) {
                            wsData.push(["subtitle", 3, "▶취업기업목록", "", ""]);
                            wsData.push(["header", 3, "기업명", "인원", "비율(%)"]);
                            var companyList = nowData.company_list;
                            for (const [key, value] of Object.entries(companyList)) {
                                var infos = key.split("_");
                                wsData.push(["data-first", 6, infos[1], value, parseFloat(((value / nowData.count) * 100).toFixed(2))]);
                            }
                            wsData.push(rowEmpty);
                        }
                        addSheet(wsData, "기업정보");

                        // 직무정보
                        ret = getTitle(3);
                        wsData = ret[0];
                        rowEmpty = ret[1];

                        wsData.push(["subtitle", 3, "▶대분류", "", ""]);
                        wsData.push(["header", 3, "분류명", "인원", "비율(%)"]);
                        var totalJobHighCnt = 0;
                        for (var i = 0; i < vm.job_high_list.length; i++) {
                            totalJobHighCnt += vm.job_high_list[i][1];
                        }
                        for (var i = 0; i < vm.job_high_list.length; i++) {
                            var name = vm.job_high_list[i][0];
                            var value = vm.job_high_list[i][1];
                            wsData.push(["data-first", 3, name, value, parseFloat(((value / totalJobHighCnt) * 100).toFixed(2))]);
                        }
                        wsData.push(rowEmpty);

                        wsData.push(["subtitle", 3, "▶중분류", "", ""]);
                        wsData.push(["header", 3, "분류명", "인원", "비율(%)"]);
                        var totalJobMidCnt = 0;
                        for (var i = 0; i < vm.job_middle_list.length; i++) {
                            totalJobMidCnt += vm.job_middle_list[i][1];
                        }
                        for (var i = 0; i < vm.job_middle_list.length; i++) {
                            var name = vm.job_middle_list[i][0];
                            var value = vm.job_middle_list[i][1];
                            wsData.push(["data-first", 3, name, value, parseFloat(((value / totalJobMidCnt) * 100).toFixed(2))]);
                        }
                        wsData.push(rowEmpty);

                        wsData.push(["subtitle", 3, "▶소분류", "", ""]);
                        wsData.push(["header", 3, "분류명", "인원", "비율(%)"]);
                        var totalJobLowCnt = 0;
                        for (var i = 0; i < vm.job_low_list_excel.length; i++) {
                            totalJobLowCnt += vm.job_low_list_excel[i][1];
                        }
                        for (var i = 0; i < vm.job_low_list_excel.length; i++) {
                            var name = vm.job_low_list_excel[i][0];
                            var value = vm.job_low_list_excel[i][1];
                            wsData.push(["data-first", 3, name, value, parseFloat(((value / totalJobLowCnt) * 100).toFixed(2))]);
                        }
                        wsData.push(rowEmpty);
                        addSheet(wsData, "직무정보");

                        // 일자리이동정보
                        ret = getTitle(3);
                        wsData = ret[0];
                        rowEmpty = ret[1];

                        wsData.push(["subtitle", 3, "▶직장유지비율", "", ""]);
                        wsData.push(["header-two-three", 7, "", "1년후", "", "2년후", "", "3년후", ""]);
                        wsData.push(["header", 7, "구분", "인원", "비율(%)", "인원", "비율(%)", "인원", "비율(%)"]);

                        let job_retention_1year = vm.groupByArray(5, vm.job_retention_data1, _globalJobFlow);
                        let job_retention_2year = vm.groupByArray(5, vm.job_retention_data2, _globalJobFlow);
                        let job_retention_3year = vm.groupByArray(5, vm.job_retention_data3, _globalJobFlow);
                        wsData = vm.groupByArrayExcel(wsData, job_retention_1year, job_retention_2year, job_retention_3year, _globalJobFlow)
                        wsData.push(rowEmpty);

                        wsData.push(["subtitle", 3, "▶이동 기업규모", "", ""]);
                        wsData.push(["header-two-three", 7, "", "1년후", "", "2년후", "", "3년후", ""]);
                        wsData.push(["header", 7, "구분", "인원", "비율(%)", "인원", "비율(%)", "인원", "비율(%)"]);

                        let flow_data_1year = vm.groupByArray(2, vm.flow_data1, _globalComtype);
                        let flow_data_2year = vm.groupByArray(2, vm.flow_data2, _globalComtype);
                        let flow_data_3year = vm.groupByArray(2, vm.flow_data3, _globalComtype);
                        wsData = vm.groupByArrayExcel2(wsData, flow_data_1year, flow_data_2year, flow_data_3year, _globalComtype)
                        wsData.push(rowEmpty);

                        wsData.push(["subtitle", 3, "▶이동 산업분류", "", ""]);
                        wsData.push(["header-two-three", 7, "", "1년후", "", "2년후", "", "3년후", ""]);
                        wsData.push(["header", 7, "구분", "인원", "비율(%)", "인원", "비율(%)", "인원", "비율(%)"]);

                        flow_data_1year = vm.groupByArray(3, vm.flow_data1, _globalCompanySizeSummaryObject);
                        flow_data_2year = vm.groupByArray(3, vm.flow_data2, _globalCompanySizeSummaryObject);
                        flow_data_3year = vm.groupByArray(3, vm.flow_data3, _globalCompanySizeSummaryObject);
                        wsData = vm.groupByArrayExcel2(wsData, flow_data_1year, flow_data_2year, flow_data_3year, _globalCompanySizeSummaryObject)
                        wsData.push(rowEmpty);

                        wsData.push(["subtitle", 4, "▶기업규모별 이동 (단위: 명)", "", "", ""]);
                        wsData.push(["header", 4, "구분", "1년후", "2년후", "3년후"]);

                        // 일자리 이동 정보 START
                        let indResult = {};
                        vm.job_flow_list.forEach(item => {
                            const key = item[1];
                            const value = item[2];

                            if (indResult[key]) {
                                indResult[key] += value;
                            } else {
                                indResult[key] = value;
                            }
                        });

                        wsData.push(["data-first", 4, "대기업", indResult['1년차 대기업'] || 0, indResult['2년차 대기업'] || 0, indResult['3년차 대기업'] || 0]);
                        wsData.push(["data-first", 4, "중소기업", indResult['1년차 중소기업'] || 0, indResult['2년차 중소기업'] || 0, indResult['3년차 중소기업'] || 0]);
                        wsData.push(["data-first", 4, "비영리기업", indResult['1년차 비영리기업'] || 0, indResult['2년차 비영리기업'] || 0, indResult['3년차 비영리기업'] || 0]);
                        wsData.push(["data-first", 4, "미취업", indResult['1년차 미취업'] || 0, indResult['2년차 미취업'] || 0, indResult['3년차 미취업'] || 0]);
                        wsData.push(rowEmpty);

                        wsData.push(["subtitle", 4, "▶산업분류별 이동 (단위: 명)", "", "", ""]);
                        wsData.push(["header", 4, "구분", "1년후", "2년후", "3년후"]);

                        indResult = {};
                        vm.ind_flow_list.forEach(item => {
                            const key = item[1];
                            const value = item[2];

                            if (indResult[key]) {
                                indResult[key] += value;
                            } else {
                                indResult[key] = value;
                            }
                        });

                        for (var key in _globalCompanySizeSummaryObject) {
                            let value = _globalCompanySizeSummaryObject[key];
                            if (value == '미상') {
                                wsData.push(["data-first", 4, "미취업", indResult['1년차 미취업'] || 0, indResult['2년차 미취업'] || 0, indResult['3년차 미취업'] || 0]);
                            } else {
                                wsData.push(["data-first", 4, value, indResult['1년차 '+value] || 0, indResult['2년차 '+value] || 0, indResult['3년차 '+value] || 0]);
                            }
                        }

                        wsData.push(rowEmpty);

                        addSheet(wsData, "일자리이동정보");

                        // 자격정보
                        ret = getTitle(4);
                        wsData = ret[0];
                        rowEmpty = ret[1];

                        var getDevValue = (array) => {
                            var sum = function (x, y) {
                                return x + y;
                            };
                            var square = function (x) {
                                return x * x;
                            };
                            var mean = array.reduce(sum) / array.length; // 평균 3
                            var deviations = array.map(function (x) {
                                return x - mean;
                            });
                            var stddev = Math.sqrt(deviations.map(square).reduce(sum) / (array.length - 1)); // 표준편차 2
                            return stddev;
                        };

                        var getQuantile = (arr, type) => {
                            const asc = (arr) => arr.sort((a, b) => a - b);
                            const sum = (arr) => arr.reduce((a, b) => a + b, 0);
                            const mean = (arr) => sum(arr) / arr.length;
                            // sample standard deviation
                            const std = (arr) => {
                                const mu = mean(arr);
                                const diffArr = arr.map((a) => (a - mu) * (a - mu));
                                return Math.sqrt(sum(diffArr) / (arr.length - 1));
                            };
                            const quantile = (arr, q) => {
                                const sorted = asc(arr);
                                const pos = (sorted.length - 1) * q;
                                const base = Math.floor(pos);
                                const rest = pos - base;
                                if (sorted[base + 1] !== undefined) {
                                    return sorted[base] + rest * (sorted[base + 1] - sorted[base]);
                                } else {
                                    return sorted[base];
                                }
                            };
                            const q25 = (arr) => quantile(arr, 0.25);
                            const q50 = (arr) => quantile(arr, 0.5);
                            const q75 = (arr) => quantile(arr, 0.75);
                            //const median = arr => q50(arr);
                            if (type == 25) {
                                return q25(arr);
                            } else if (type == 50) {
                                return q50(arr);
                            } else {
                                return q75(arr);
                            }
                        };

                        //▶ 학점 및 토익점수
                        if (!vm.isProtection) {
                            wsData.push(getSubtitle("▶ 학점 및 토익점수"));
                            wsData.push(["header", 3, "구분", "TOEIC", "학점"]);
                            var toeic_percent = nowData.toeic_percent;
                            var gradescore_percent = nowData.gradescore_percent;
                            var toeic_v = 0;
                            var toeic_dev = 0;
                            var toeic_min = 0; //getDevValue(nowData.toeic);
                            var toeic_max = 0;
                            var toeic_25 = 0;
                            var toeic_50 = 0;
                            var toeic_75 = 0;
                            if (nowData.toeic.length > 0) {
                                toeic_v = round(_.sum(nowData.toeic) / nowData.toeic.length);
                                toeic_dev = getDevValue(nowData.toeic);
                                toeic_min = _.min(nowData.toeic); //getDevValue(nowData.toeic);
                                toeic_max = _.max(nowData.toeic);
                                toeic_25 = getQuantile(nowData.toeic, 25);
                                toeic_50 = getQuantile(nowData.toeic, 50);
                                toeic_75 = getQuantile(nowData.toeic, 75);
                            }
                            var gradescore_v = 0;
                            var gradescore_dev = 0;
                            var gradescore_min = 0; //getDevValue(nowData.toeic);
                            var gradescore_max = 0;
                            var gradescore_25 = 0;
                            var gradescore_50 = 0;
                            var gradescore_75 = 0;

                            if (nowData.gradescore.length > 0) {
                                gradescore_v = round(_.sum(nowData.gradescore) / nowData.gradescore.length);
                                gradescore_dev = getDevValue(nowData.gradescore);
                                gradescore_min = _.min(nowData.gradescore); //getDevValue(nowData.gradescore);
                                gradescore_max = _.max(nowData.gradescore);
                                gradescore_25 = getQuantile(nowData.gradescore, 25);
                                gradescore_50 = getQuantile(nowData.gradescore, 50);
                                gradescore_75 = getQuantile(nowData.gradescore, 75);
                            }

                            wsData.push(["data-first", 3, "보유(%)", round(toeic_percent), round(gradescore_percent)]);
                            wsData.push(["data-first", 3, "평균", round(toeic_v), round(gradescore_v)]);
                            wsData.push(["data-first", 3, "표준편차", round(toeic_dev), round(gradescore_dev)]);
                            wsData.push(["data-first", 3, "최소값", toeic_min, gradescore_min]);
                            wsData.push(["data-first", 3, "1분위값", toeic_25, gradescore_25]);
                            wsData.push(["data-first", 3, "중앙값", toeic_50, gradescore_50]);
                            wsData.push(["data-first", 3, "3분위값", toeic_75, gradescore_75]);
                            wsData.push(["data-first", 3, "최대값", toeic_max, gradescore_max]);
                            wsData.push(rowEmpty);
                        }

                        wsData.push(getSubtitle("▶자격증 종류(국가기술/국가전문)"));
                        wsData.push(["header", 4, "순위", "명칭", "인원", "비율(%)"]);

                        //▶ 자격증
                        var license_nm = nowData.license_nm;
                        var licsum = _.sum(_.values(license_nm));
                        _.keys(license_nm)
                            .map((item, index) => {
                                return {
                                    name: item,
                                    value: license_nm[item],
                                };
                            })
                            .map((item, index) => {
                                var idx = item.name.lastIndexOf("/") == -1 ? 0 : item.name.lastIndexOf("/") + 2;
                                var itemtext = item.name.substr(idx);
                                wsData.push(["data-first", 4, index + 1, itemtext, item.value, parseFloat(((item.value / licsum) * 100).toFixed(2))]);
                            });
                        wsData.push(rowEmpty);

                        wsData.push(getSubtitle("▶자격증 종류(민간공인/민간등록)"));
                        wsData.push(["header", 4, "순위", "명칭", "인원", "비율(%)"]);

                        //▶ 자격증
                        var private_license_nm = nowData.private_license_nm;
                        var private_licsum = _.sum(_.values(private_license_nm));
                        _.keys(private_license_nm)
                            .map((item, index) => {
                                return {
                                    name: item,
                                    value: private_license_nm[item],
                                };
                            })
                            .map((item, index) => {
                                //var idx =item.name.lastIndexOf('/') == -1 ? 0 : item.name.lastIndexOf('/') + 2;
                                //var itemtext = item.name.substr(idx);
                                wsData.push(["data-first", 4, index + 1, item.name, item.value, parseFloat(((item.value / private_licsum) * 100).toFixed(2))]);
                            });
                        wsData.push(rowEmpty);
                        addSheet(wsData, "자격정보");

                        var wbout = XLSX.write(wb, {
                            bookType: "xlsx",
                            bookSST: true,
                            type: "binary",
                        });

                        ws_name = "학교별분석";

                        var _date = moment().format("YYYYMMDD"); //moment().format('YYYYMMDDHHmm');
                        saveAs(
                            new Blob([s2ab(wbout)], {
                                type: "application/octet-stream",
                            }),
                            ws_name + "_" + _date + ".xlsx"
                        );
                    },
                    excelExportByLecture: function () {
                        const vm = this;
                        var nowData = vm.searchResult;
                        var ws_name = "학교별(강좌)분석";
                        var wb = new Workbook();

                        var getSubtitle = (title) => {
                            return ["subtitle", 3, title, "", ""];
                        };

                        var companyTypeListText = "";
                        var companySizeListText = "";
                        var companyPersonnelSizeListText = "";
                        var companyAreaListText = "";
                        var companyText = "";

                        var getTitle = (num) => {
                            var wsData = [];
                            var empty = Array.from("".repeat(num));
                            var rowEmpty = ["empty", num];
                            rowEmpty.concat(empty);
                            wsData.push(rowEmpty);
                            empty = Array.from("".repeat(num - 1));
                            var titleRow = ["bigtitle-three", num, "학교별 강좌분석", "", ""];
                            titleRow.concat(empty);
                            wsData.push(titleRow);

                            var searchRow1 = ["search3", num, `기준 대학 조건: `, "", ""];
                            searchRow1.concat(empty);
                            wsData.push(searchRow1);

                            var selectedUniversityText = "";
                            if (vm.selectedUniversity != null) {
                                selectedUniversityText = vm.selectedUniversity.name;
                            }
                            var searchRow2 = ["search3", num, `  - 학교: ${selectedUniversityText}`, "", ""];
                            searchRow2.concat(empty);
                            wsData.push(searchRow2);

                            var selectedDepartmemt4Text = "";
                            if (vm.selectedDepartmemt4 != null) {
                                selectedDepartmemt4Text = vm.selectedDepartmemt4.name;
                            }
                            var searchRow3 = ["search3", num, `  - 학과: ${selectedDepartmemt4Text}`, "", ""];
                            searchRow3.concat(empty);
                            wsData.push(searchRow3);

                            wsData.push(rowEmpty);
                            return [wsData, rowEmpty];
                        };

                        var addSheet = (wsData, ws_name) => {
                            let objectMaxLength = [];
                            let startRow = 0;
                            if (vm.isSelectedCorp) {
                                startRow = 9;
                            } else {
                                startRow = 5;
                            }

                            for (let i = startRow; i < wsData.length; i++) {
                                let value = Object.values(wsData[i]);
                                if (value.length > 2) {
                                    for (let j = 2; j < value.length; j++) {
                                        tmpLength = value[j].length ? value[j].length * 1.7 : 20;
                                        objectMaxLength[j] = objectMaxLength[j] >= tmpLength ? objectMaxLength[j] : tmpLength;
                                    }
                                }
                            }

                            var _sheet = json_to_sheet(wsData);
                            var ws = _sheet.data;
                            var cols = [];
                            for (var i = 2; i < objectMaxLength.length; i++) {
                                cols.push({ wch: objectMaxLength[i] });
                            }

                            ws["!cols"] = cols;
                            ws["!merges"] = _sheet.mergesArray;
                            wb.SheetNames.push(ws_name);
                            wb.Sheets[ws_name] = ws;
                        };

                        var wsData = [];
                        var rowEmpty = [];
                        wsData.push(rowEmpty);

                        let tmpEmpty = Array.from("".repeat(12));
                        var titleRow = ["bigtitle-tw", 12, "목적 외 활용 금지 서약", "", "", "", "", "", "", "", "", "", "", ""];
                        titleRow.concat(tmpEmpty);
                        wsData.push(titleRow);

                        let desc = "본 시스템은 재학생의 진로지도 및 대학별 진로지도 관련 정책 수립에 도움을 드리기 위한 목적으로 제공되고 있습니다."
                        titleRow = ["bigtitle-tw-agree", 12, desc, "", "", "", "", "", "", "", "", "", "", ""];
                        titleRow.concat(tmpEmpty);
                        wsData.push(titleRow);

                        desc = "해당 목적 외(학교 홍보 등) 사용 시 불이익을 받으실 수 있습니다. 또한 「데이터 산업진흥 및 이용촉진에 관한 기본법」"
                        titleRow = ["bigtitle-tw-agree", 12, desc, "", "", "", "", "", "", "", "", "", "", ""];
                        titleRow.concat(tmpEmpty);
                        wsData.push(titleRow);

                        desc = "제 12조에 의하여 외부 유출을 금지 하고 있습니다."
                        titleRow = ["bigtitle-tw-agree", 12, desc, "", "", "", "", "", "", "", "", "", "", ""];
                        titleRow.concat(tmpEmpty);
                        wsData.push(titleRow);

                        addSheet(wsData, "목적 외 활용 금지 서약");

                        //강좌분석
                        ret = getTitle(7);
                        wsData = ret[0];
                        rowEmpty = ret[1];
                        wsData.push(getSubtitle("▶취업현황"));

                        let headerCnt = 0;
                        let headerArr = [];
                        let headerDataArr = [];

                        headerCnt = Object.keys(vm.subjectList).length;
                        headerArr = ["header", headerCnt+1, "구분"];

                        var keys = Object.keys(vm.subjectList);
                        for (var j = 0; j < keys.length; j++) {
                            var modifiedKey = keys[j].replace(/\//g, '\n'); // replace all occurrences of '/' with newline
                            headerArr.push(modifiedKey);
                        }
                        wsData.push(headerArr);

                        headerDataArr = ["data", headerCnt+1, "졸업자수"];
                        for (var j = 0; j < Object.keys(vm.subjectList).length; j++) {
                            headerDataArr.push(vm.subjectTotalrate.graduCnt[j]);
                        }
                        wsData.push(headerDataArr);
                        headerDataArr = ["data", headerCnt+1, "취업자수"];
                        for (var j = 0; j < Object.keys(vm.subjectList).length; j++) {
                            headerDataArr.push(vm.subjectTotalrate.emprateCnt[j]);
                        }
                        wsData.push(headerDataArr);
                        headerDataArr = ["data", headerCnt+1, "진학자수"];
                        for (var j = 0; j < Object.keys(vm.subjectList).length; j++) {
                            headerDataArr.push(vm.subjectTotalrate.admrateCnt[j]);
                        }
                        wsData.push(headerDataArr);
                        headerDataArr = ["data", headerCnt+1, "취업률(%)"];
                        for (var j = 0; j < Object.keys(vm.subjectList).length; j++) {
                            headerDataArr.push(vm.subjectTotalrate.emprate[j]);
                        }
                        wsData.push(headerDataArr);
                        headerDataArr = ["data", headerCnt+1, "진학률(%)"];
                        for (var j = 0; j < Object.keys(vm.subjectList).length; j++) {
                            headerDataArr.push(vm.subjectTotalrate.admrate[j]);
                        }
                        wsData.push(headerDataArr);
                        wsData.push(rowEmpty);

                        wsData.push(getSubtitle("▶비교 "+vm.subjectScalars.schgrpnm+"(학과)의 유사강좌 현황"));
                        headerCnt = Object.keys(vm.subjectList).length;
                        headerArr = ["header", headerCnt];

                        var keys = Object.keys(vm.subjectList);
                        for (var j = 0; j < keys.length; j++) {
                            var modifiedKey = keys[j].replace(/\//g, '\n'); // replace all occurrences of '/' with newline
                            headerArr.push(modifiedKey);
                        }
                        wsData.push(headerArr);

                        for (var i = 0; i < vm.subjectList[Object.keys(vm.subjectList)[0]].length; i++) {
                            headerDataArr = ["data", headerCnt];
                            for (var j = 0; j < Object.keys(vm.subjectList).length; j++) {
                                var subkey = Object.keys(vm.subjectList)[j];
                                var data = vm.subjectList[subkey][i].replace(/\//g, '\n'); // replace all occurrences of '/' with newline
                                headerDataArr.push(data);
                            }
                            wsData.push(headerDataArr);
                        }
                        wsData.push(rowEmpty);

                        wsData.push(getSubtitle("▶비교 "+vm.subjectScalars.schgrpnm+"(학과)의 강좌 현황(유사강좌)"));
                        headerCnt = Object.keys(vm.subjectList).length;
                        headerArr = ["header", 2, "번호", "강좌"];
                        wsData.push(headerArr);

                        let emptyFilter = vm.subjectSimilarList.filter(item => item.trim() !== "");
                        for (var i = 0; i < emptyFilter.length; i++) {
                            var item = emptyFilter[i];
                            wsData.push(["data", 2, i+1, item]);
                        }
                        wsData.push(rowEmpty);

                        wsData.push(getSubtitle("▶비교 "+vm.subjectScalars.schgrpnm+"(학과)의 강좌 현황(특이강좌)"));
                        headerCnt = Object.keys(vm.subjectList).length;
                        headerArr = ["header", headerCnt];

                        var keys = Object.keys(vm.subjectList);
                        for (var j = 0; j < keys.length; j++) {
                            var modifiedKey = keys[j].replace(/\//g, '\n'); // replace all occurrences of '/' with newline
                            headerArr.push(modifiedKey);
                        }
                        wsData.push(headerArr);

                        // "uniques" 객체의 값을 배열로 추출
                        var values = Object.values(vm.subjectUniqueListByExcel);

                        // 배열 중 가장 큰 길이 찾기
                        var maxLength = Math.max(...values.map(arr => arr.length));
                        let flag = false;
                        for (var i = 0; i < maxLength; i++) {
                            flag = false;
                            headerDataArr = ["data", headerCnt];
                            for (var j = 0; j < Object.keys(vm.subjectUniqueListByExcel).length; j++) {
                                var subkey = Object.keys(vm.subjectUniqueListByExcel)[j];
                                var data = vm.subjectUniqueListByExcel[subkey] && vm.subjectUniqueListByExcel[subkey][i] !== undefined ? vm.subjectUniqueListByExcel[subkey][i] : "";

                                if (data != "") {
                                    flag = true;
                                }
                                headerDataArr.push(data);
                            }

                            if (flag) {
                                wsData.push(headerDataArr);
                            }
                        }
                        wsData.push(rowEmpty);
                        addSheet(wsData, "비교분석");

                        ret = getTitle(7);
                        wsData = ret[0];
                        rowEmpty = ret[1];
                        wsData.push(getSubtitle("▶전체 "+vm.subjectScalars.schgrpnm+"(학과)의 유사강좌 현황"));
                        headerCnt = Object.keys(vm.subjectList).length;
                        headerArr = ["header", 4, "순위", "강좌", "개수", "비율(%)"];
                        wsData.push(headerArr);

                        for (var i = 0; i < vm.subjectStats.length; i++) {
                            var item = vm.subjectStats[i];
                            wsData.push(["data", 4, i+1, item.text, item.point, item.value.split('%')[0].trim()]);
                        }
                        wsData.push(rowEmpty);

                        wsData.push(getSubtitle("▶전체 "+vm.subjectScalars.schgrpnm+"(학과)의 강좌 현황"));
                        headerCnt = Object.keys(vm.subjectList).length;
                        headerArr = ["header", 4, "순위", "강좌", "개수", "비율(%)"];
                        wsData.push(headerArr);

                        for (var i = 0; i < vm.subjectStatsAll.length; i++) {
                            var item = vm.subjectStatsAll[i];
                            wsData.push(["data", 4, i+1, item.text, item.point, item.value.split('%')[0].trim()]);
                        }
                        wsData.push(rowEmpty);

                        addSheet(wsData, "전체분석");

                        if (vm.subjectSearchResult && vm.subjectSearchResult.schnm && vm.subjectSearchResult.schnm.length > 0) {
                            ret = getTitle(7);
                            wsData = ret[0];
                            rowEmpty = ret[1];
                            wsData.push(getSubtitle("▶"+vm.selectedSubjectSnm));
                            headerCnt = Object.keys(vm.subjectList).length;
                            headerArr = ["header", 7, "NO", "대학명", "본분교구분", "학과명", "졸업자(명)", "취업자(명)", "취업률(%)"];
                            wsData.push(headerArr);

                            for (var i = 0; i < vm.subjectSearchResult.schnm.length; i++) {
                                let schnm = vm.subjectSearchResult.schnm[i];
                                let orgnm = vm.subjectSearchResult.orgnm[i];
                                let deptnm = vm.subjectSearchResult.deptnm[i];
                                let graduCnt = vm.subjectSearchResult.graduCnt[i];
                                let emprateCnt = vm.subjectSearchResult.emprateCnt[i];
                                let emprate = vm.subjectSearchResult.emprate[i];
                                wsData.push(["data", 7, i+1, schnm, orgnm, deptnm, graduCnt, emprateCnt, emprate]);
                            }
                            wsData.push(rowEmpty);
                            addSheet(wsData, "강좌개설대학정보");
                        }

                        var wbout = XLSX.write(wb, {
                            bookType: "xlsx",
                            bookSST: true,
                            type: "binary",
                        });

                        var _date = moment().format("YYYYMMDD"); //moment().format('YYYYMMDDHHmm');
                        saveAs(
                            new Blob([s2ab(wbout)], {
                                type: "application/octet-stream",
                            }),
                            ws_name + "_" + _date + ".xlsx"
                        );
                    },
                    manualDownloadFile() {
                        var a = document.createElement("a");

                        var url = window.location.href;
                        var lastSlashIndex = url.lastIndexOf('/');
                        var modifiedUrl = url.substring(0, lastSlashIndex+1);

                        a.href = modifiedUrl+"manual/202401.pdf";
                        a.download = "청년 진로정보 시스템 사용 매뉴얼(2024.1).pdf";
                        a.click();
                    },
                    /**
                     * "학교별분석" 검색 조건 탭 선택.
                     *
                     * @param {string} id ID
                     */
                    changeConditionTab: function (id) {
                        this.isSelectedUni = ("uniSearch" === id);
                        this.handleInit();
                    },
                    getSimilarSchools() {
                        var _this = this;
                        let data = {};

                        var unicode = _this.selectedUniversity.id.split('_');
                        data['year'] = _this.selectedYear;
                        data['schcd'] = unicode[0];
                        data['orgcd'] = unicode[1];
                        data['deptcd'] = _this.selectedDepartmemt4.id;

                        $.ajax({
                            type: "GET",
                            url: DEBUG ? "json/getUniversityLecturesSame.json" : "/swiss/cm/getUniversityLecturesSame.do",
                            dataType: "text",
                            data: data,
                            beforeSend: function (xhr) {
                                xhr.setRequestHeader("username", userid + "_" + userType);
                            },
                            success: function (response) {
                                var data = JSON.parse(response);
                                if (data.status == 0) {
                                    if (data.value == undefined || data.value.length == 0) {
                                        alert("유사학과를 갖고 있는 대학이 없습니다.");
                                        _this.similarData = [];
                                        _this.similarSchools = [];
                                    } else {
                                        _this.similarData = data.value;
                                        let grouped = _this.similarData.reduce((acc, obj) => {
                                          let key = `${obj.SCHCD}_${obj.ORGCD}`;
                                          if (!acc[key]) {
                                            acc[key] = [];
                                          }
                                          acc[key].push(obj);
                                          return acc;
                                        }, {});

                                        for (let key in grouped) {
                                          let find = _.find(_search_university, {
                                               id: key
                                          })

                                          if (find != undefined) {
                                            let selectedUni = find.id.split('_');
                                            let schcd = selectedUni[0];
                                            let orgcd = selectedUni[1];
                                            var unidept = responseData['UNI_DEPT'][find.id];
                                            let tmp_dept = _.map(unidept, function(item, index) {
                                                var splitCode = item.split('_');

                                                return {
                                                    id: splitCode[0],
                                                    name: splitCode[1],
                                                }
                                            });

                                            let filteredData = _this.similarData.filter(item => item.SCHCD === schcd && item.ORGCD === orgcd);
                                            const filteredDepartments = tmp_dept.filter(department =>
                                                filteredData.some(code => department.id === code.DEPTCD)
                                            );

                                            if (filteredDepartments.length != 0) {
                                                _this.similarSchools.push(find);
                                            }
                                          }
                                        }

                                        _this.similarSchools.sort(function(a, b) {
                                            return (a.name).localeCompare(b.name);
                                        });
                                    }
                                } else {
                                    alert("해당 학교/학과의 강좌 데이터가 존재하지 않습니다.")
                                    return false;
                                }
                            }
                        });
                    },
                    handleSelectSimilarData() {

                        this.isResponse = false;
                        if (this.selectedUniversityByTarget == null || this.selectedUniversityByTargetDept == null) {
                            alert("선택 된 항목이 없습니다.");
                            return false;
                        }

                        if (this.selectedSchs.length < 5) {
                            let selectedUni = this.selectedUniversityByTarget.id.split('_');
                            let schcd = selectedUni[0];
                            let orgcd = selectedUni[1];
                            let deptcd = this.selectedUniversityByTargetDept.id;
                            let name = this.selectedUniversityByTarget.name+"/"+this.selectedUniversityByTargetDept.name;

                            // 중복 체크
                            // Check for duplicates
                            let isDuplicate = this.selectedSchs.some(sch =>
                                sch.SCHCD === schcd && sch.ORGCD === orgcd && sch.DEPTCD === deptcd
                            );

                            if (!isDuplicate) {
                                this.selectedSchs.push({'SCHCD': schcd, 'ORGCD': orgcd, 'DEPTCD': deptcd, 'NAME':name})
                                this.selectedUniversityByTarget = null;
                                this.selectedUniversityByTargetDept = null;
                            } else {
                                alert("이미 선택 된 항목 입니다.");
                            }
                        } else {
                            alert("비교 대학은 최대 5개까지 선택 할 수 있습니다.");
                        }
                    },
                    computeWidth: function(name) {
                        const baseWidth = 70;
                        const widthPerChar = 10;
                        return (baseWidth + (name.length * widthPerChar)) + 'px';
                    },
                    computeDivWidth: function(name) {
                        const baseWidth = 130;
                        const widthPerChar = 10;
                        return (baseWidth + (name.length * widthPerChar)) + 'px';
                    },
                    handleSelectReset: function(obj) {
                        let tmpList = this.selectedSchs.filter(item => item.DEPTCD !== obj.DEPTCD);
                        this.selectedSchs = tmpList;
                    },
                    formatNumberWithCommas(number) {
                        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    },
                    convertHexToRGBA(hex, opacity) {
                        hex = hex.replace('#', '');
                        const r = parseInt(hex.substring(0, 2), 16);
                        const g = parseInt(hex.substring(2, 4), 16);
                        const b = parseInt(hex.substring(4, 6), 16);

                        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
                    },
                    /**
                     * "선택한 회사명으로 재검색" 버튼.
                     */
                    handleSearchCompanySubmit: function () {
                       var confirmMsg = "";
                       var selectComtype = "";
                       var selectComind = "";
                       var etcFlag = false;

                       if (this.selectedCompany == null || this.selectedCompany.length == 0) {
                           alert("선택한 기업이 없습니다.\n기업 선택 후 검색해주세요.");
                           return false;
                       }

                       confirmMsg += "선택한 기업으로 취업한 졸업자 정보를 최신 연도로 검색합니다.\n기업취업현황으로 이동하시겠습니까?";

                       if (confirm(confirmMsg)) {
                           window.location.href = 'status.jsp?SCHCD=' + gSchcd + '&ORGCD=' + gOrgcd + '&USERID=' + userid + '&USERGRPTYPE='+ userType +'&COMNM=' + this.selectedCompany.text +'&COMVL=' + this.selectedCompany.value;
                       }
                   },
                   /**
                    * "선택한 강좌명으로 강좌 개설 학교 정보 검색" 버튼.
                    */
                   handleSearchUniSubmit: function () {
                      var confirmMsg = "";
                      var selectComtype = "";
                      var selectComind = "";
                      var etcFlag = false;

                      if (this.selectedSubjectSnm == "") {
                          alert("선택한 강좌가 없습니다.\n강좌 선택 후 검색해주세요.");
                          return false;
                      }

                      this.getUniversityLecturesEmplRcrds();
                      /*confirmMsg += "선택한 기업으로 취업한 졸업자 정보를 최신 연도로 검색합니다.\n기업취업현황으로 이동하시겠습니까?";

                      if (confirm(confirmMsg)) {
                          this.getUniversityLecturesEmplRcrds();
                      }*/
                  },
                  /**
                   * @description 대학, 전공, 졸업자, 취업률 정보 조회
                   */
                  getUniversityLecturesEmplRcrds: function(userid) {
                      var _this = this;

                      var _data = {};
                      var unicode = _this.selectedUniversity.id.split('_');

                      _data['year'] = _this.selectedYear;
                      _data['schcd'] = unicode[0];
                      _data['orgcd'] = unicode[1];
                      _data['deptcd'] = _this.selectedDepartmemt4.id;
                      _data['subnm'] = _this.selectedSubjectSnm;

                      _this.subjectSearchResult = {};
                      _this.isUniFetching = true;

                      $.ajax({
                          type: "GET",
                          url: DEBUG ? "json/getUniversityLecturesEmplRcrds.json" : "/swiss/cm/getUniversityLecturesEmplRcrds.do",
                          dataType: "text",
                          data: _data,
                          success: function(response) {
                              var res = JSON.parse(response);
                              _this.isSubjectSearch = true;
                              _this.isUniFetching = false;
                              _this.subjectSearchResult = res;
                          }
                      });

                  },
                    setSelectedCompany: function (point, selectedPoint) {
                        /* 선택한 그래프 영역 효과 초기화 */
                        for (const selpt of selectedPoint) {
                            this.selectCompanyChart(selpt.index, false);
                        }

                        /* 그래프에서 선택한 부분을 회사 목록에서 찾아서 해당 항목 토글 */
                        let selidx = this.company_list.findIndex(({ name }) => name === point.name);
                        this.selectCompanyFromList(selidx);
                    },
                    /**
                     * 회사 파이 차트 선택 여부 표현
                     *
                     * @param {int} index
                     * @param {boolean} is_selected
                     */
                    selectCompanyChart: function (index, is_selected) {
                        if (index < this.companyPieTopCount) {
                            if (is_selected) {
                                /* 선택 효과 */
                                clickUniChart.series[0].data[index].update({
                                    borderColor: "#FF0000",
                                    selected: true,
                                    sliced: true,
                                });
                                clickUniChart.series[1].data[index].update({
                                    borderColor: "#FF0000",
                                    selected: true,
                                    sliced: true,
                                });
                            } else {
                                /* 해제 효과 */
                                clickUniChart.series[0].data[index].update({
                                    borderColor: "#FFFFFF",
                                    selected: false,
                                    sliced: false,
                                });
                                clickUniChart.series[1].data[index].update({
                                    borderColor: "#FFFFFF",
                                    selected: false,
                                    sliced: false,
                                });
                            }
                        }
                    },
                    selectCompanyFromList: function (index) {
                        let elemname = this.elemName_companyListItems;
                        let cls = this.className_companyListItemSelected;

                        let sel = this.company_list[index];
                        let elid = this.createId_companyListItems(sel.name);
                        let target = document.getElementById(elid);

                        if (target.classList.contains(cls)) {
                            target.classList.remove(cls);
                            //this.selectCompanyChart(index, false);
                            this.selectedCompany = null;
                        } else {
                            target.classList.add(cls);
                            //this.selectCompanyChart(index, true);
                            this.selectedCompany = { text: sel.name, value: sel.value };
                        }

                        /* 나머지 초기화 */
                        let elems = document.getElementsByName(elemname);
                        let sz_elems = elems.length;

                        for (let i = 0; i < sz_elems; i++) {
                            if (elems[i].id !== target.id) {
                                elems[i].classList.remove(cls);
                            }

                            if (i !== index) {
                                //this.selectCompanyChart(i, false);
                            }
                        }
                    },
                    selectSnmFromList: function (id) {
                        let target = document.getElementById(id);
                        let allDivs = target.getElementsByTagName('div'); // target 요소의 모든 div 자식들을 가져옵니다.
                        let divText = allDivs[allDivs.length -2].textContent; // 마지막 div의 텍스트 콘텐츠를 가져옵니다.

                        let cls = "selected";

                        if (target.classList.contains(cls)) {
                            target.classList.remove(cls);
                            this.selectedSubjectSnm = "";
                        } else {
                            target.classList.add(cls);
                            this.selectedSubjectSnm = divText;
                        }

                        /* 나머지 초기화 */
                        let elems = document.getElementsByName(this.elemName_snmListItems);
                        let sz_elems = elems.length;

                        for (let i = 0; i < sz_elems; i++) {
                            if (elems[i].id !== target.id) {
                                elems[i].classList.remove(cls);
                            }
                        }
                    },
                },
                mounted() {
                    this.isMounted = true;
                    this.checkVariable();
                },
                created() {
                    if (userType == "1" || userType == "2") {
                        this.isUseUserGroup = true;
                    }

                    if (userType == "1" || userType == "2" || userType == "7" || userType == "8" || userType == "4") {
                        this.isUserGroup = true;
                    } else if (userType == "9") {
                        this.isUserGroup = true;

                        let uniCode = gSchcd +"_"+ gOrgcd;
                        this.tmpUniTabs = this.universitys.filter(item => uniCode.includes(item.id));
                        this.universitys = this.tmpUniTabs;
                    }

                    this.getInformationAgree(userid);
                },
                watch: {
                    selectedUniversity: function(val) {
                        this.isResponse = false;
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

                            this.similarSchoolDept = [];
                            this.selectedUniversityByTarget = null;
                            this.selectedUniversityByTargetDept = null;
                            this.similarData = [];
                            this.similarSchools = [];
                            this.similarSchoolDept = [];
                            this.selectedSchs = [];
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

                            this.similarSchoolDept = [];
                            this.selectedUniversityByTarget = null;
                            this.selectedUniversityByTargetDept = null;
                            this.similarData = [];
                            this.similarSchools = [];
                            this.similarSchoolDept = [];
                            this.selectedSchs = [];
                        }
                    },
                    selectedDepartmemt4: function(val) {
                        this.selectedDepartmemt4Text = null;

                        this.isResponse = false;
                        this.similarSchoolDept = [];
                        this.selectedUniversityByTarget = null;
                        this.selectedUniversityByTargetDept = null;
                        this.similarData = [];
                        this.similarSchools = [];
                        this.similarSchoolDept = [];
                        this.selectedSchs = [];

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

                            if (!this.isSelectedUni) {
                                this.getSimilarSchools();
                            }
                        }
                    },
                    selectedUniversityByTarget: function(val) {
                        if (val) {
                            let selectedUni = val.id.split('_');
                            let schcd = selectedUni[0];
                            let orgcd = selectedUni[1];
                            var unidept = responseData['UNI_DEPT'][val.id];
                            let tmp_dept = _.map(unidept, function(item, index) {
                                var splitCode = item.split('_');

                                return {
                                    id: splitCode[0],
                                    name: splitCode[1],
                                }
                            });

                            let filteredData = this.similarData.filter(item => item.SCHCD === schcd && item.ORGCD === orgcd);
                            const filteredDepartments = tmp_dept.filter(department =>
                                filteredData.some(code => department.id === code.DEPTCD)
                            );
                            this.similarSchoolDept = filteredDepartments;
                            this.similarSchoolDept.sort(function(a, b) {
                                return (a.name).localeCompare(b.name);
                            });

                            if (this.similarSchoolDept.length == 1) {
                                this.selectedUniversityByTargetDept = this.similarSchoolDept[0];
                            }
                        } else {
                            this.similarSchoolDept = [];
                            this.selectedUniversityByTargetDept = null;
                        }
                    },
                }
            });
        },
    });
});