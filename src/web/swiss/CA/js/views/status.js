var DEBUG = false;

var _globalUniversityGradeArray = [
    {
        key: "associate",
        text: "전문학사",
    },
    {
        key: "bachelor",
        text: "학사",
    },
    {
        key: "master",
        text: "석사",
    },
    {
        key: "doctor",
        text: "박사",
    },
];

var _globalUniversityGradeMatch = {
    "전문학사" : "associate",
    "학사" : "bachelor",
    "석사" : "master",
    "박사" : "doctor"
};

var _globalAcademicDeptCategories_upper = {
    "인문계열" : "01",
    "사회계열" : "02",
    "교육계열" : "03",
    "공학계열" : "04",
    "자연계열" : "05",
    "의약계열" : "06",
    "예체능계열" : "07"
}

var _globalCompanyPersonnelSizesArray = [
    {
        text: "5명 미만",
        value: "0,5",
    },
    {
        text: "5~29명",
        value: "5,29",
    },
    {
        text: "30~299명",
        value: "30,299",
    },
    {
        text: "300~999명",
        value: "300,999",
    },
    {
        text: "1000명 이상",
        value: "1000,9999999",
    },
];

var _globalCompanyIndustryTypeSummaryObject = {
    A: "농업",
    B: "광업",
    C: "제조",
    D: "전기",
    E: "수도",
    F: "건설",
    G: "도매",
    H: "운수",
    I: "숙박",
    J: "정보",
    K: "금융",
    L: "부동산",
    M: "전문",
    N: "시설",
    O: "행정",
    P: "교육",
    Q: "보건",
    R: "예술",
    S: "협회",
    T: "가구",
    U: "국제",
    Z: "미상",
};

var _globalCompanyAreaArray = [
    {
        text: "서울",
        value: "11",
    },
    {
        text: "강원",
        value: "42",
    },
    {
        text: "부산",
        value: "21",
    },
    {
        text: "충북",
        value: "43",
    },
    {
        text: "대구",
        value: "22",
    },
    {
        text: "충남",
        value: "44",
    },
    {
        text: "인천",
        value: "23",
    },
    {
        text: "전북",
        value: "45",
    },
    {
        text: "광주",
        value: "24",
    },
    {
        text: "전남",
        value: "46",
    },
    {
        text: "대전",
        value: "25",
    },
    {
        text: "경북",
        value: "47",
    },
    {
        text: "울산",
        value: "26",
    },
    {
        text: "경남",
        value: "48",
    },
    {
        text: "세종",
        value: "27",
    },
    {
        text: "제주",
        value: "49",
    },
    {
        text: "경기",
        value: "41",
    },
];

////// 직무 임시 처리
var _globalJobObject = {
	"MAINDIV" : {
		"경영·사무·금융·보험직": 0,
		"연구직 및 공학 기술직": 1,
		"교육·법률·사회복지·경찰·소방직 및 군인": 2,
		"보건·의료직": 3,
		"예술·디자인·방송·스포츠직": 4,
		"미용·여행·숙박·음식·경비·청소직": 5,
		"영업·판매·운전·운송직": 6,
		"건설·채굴직": 7,
		"설치·정비·생산직": 8,
		"농림어업직": 9
	},
	"MIDDIV" : {
		"관리직(임원·부서장)" : "01",
		"경영·행정·사무직" : "02",
		"금융·보험직" : "03",
		"인문·사회과학 연구직" : "11",
		"자연·생명과학 연구직" : "12",
		"정보통신 연구개발직 및 공학 기술직" : "13",
		"건설·채굴 연구개발직 및 공학 기술직" : "14",
		"제조 연구개발직 및 공학 기술직" : "15",
		"교육직" : "21",
		"법률직" : "22",
		"사회복지·종교직" : "23",
		"경찰·소방·교도직" : "24",
		"군인" : "25",
		"보건·의료직" : "30",
		"예술·디자인·방송직" : "41",
		"스포츠·레크리에이션직" : "42",
		"미용·예식 서비스직" : "51",
		"여행·숙박·오락 서비스직" : "52",
		"음식 서비스직" : "53",
		"경호·경비직" : "54",
		"돌봄 서비스직(간병·육아)" : "55",
		"청소 및 기타 개인서비스직" : "56",
		"영업·판매직" : "61",
		"운전·운송직" : "62",
		"건설·채굴직" : "70",
		"기계 설치·정비·생산직" : "81",
		"금속·재료 설치·정비·생산직(판금·단조·주조·용접·도장 등)" : "82",
		"전기·전자 설치·정비·생산직" : "83",
		"정보통신 설치·정비직" : "84",
		"화학·환경 설치·정비·생산직" : "85",
		"섬유·의복 생산직" : "86",
		"식품 가공·생산직" : "87",
		"인쇄·목재·공예 및 기타 설치·정비·생산직" : "88",
		"제조 단순직" : "89",
		"농림어업직" : "90"
	},
	"SUBDIV" : {
		"의회의원·고위공무원 및 기업 고위임원" : "011",
		"행정·경영·금융·보험 관리자　" : "012",
		"전문서비스 관리자" : "013",
		"여행·숙박·음식·경비·청소 관리자" : "014",
		"영업·판매·운송 관리자" : "015",
		"건설·채굴·제조·생산 관리자" : "016",
		"정부·공공행정 전문가" : "021",
		"경영·인사 전문가" : "022",
		"회계·세무·감정 전문가" : "023",
		"광고·조사·상품기획·행사기획 전문가" : "024",
		"정부·공공 행정 사무원" : "025",
		"경영지원 사무원" : "026",
		"회계·경리 사무원" : "027",
		"무역·운송·생산·품질 사무원" : "028",
		"안내·고객상담·통계·비서·사무보조 및 기타 사무원" : "029",
		"금융·보험 전문가" : "031",
		"금융·보험 사무원" : "032",
		"금융·보험 영업원" : "033",
		"인문·사회과학 연구원" : "110",
		"자연과학 연구원 및 시험원" : "121",
		"생명과학 연구원 및 시험원" : "122",
		"컴퓨터하드웨어·통신공학 기술자" : "131",
		"컴퓨터시스템 전문가" : "132",
		"소프트웨어 개발자" : "133",
		"데이터·네트워크 및 시스템 운영 전문가" : "134",
		"정보보안 전문가" : "135",
		"통신·방송송출 장비 기사" : "136",
		"건축·토목공학 기술자 및 시험원" : "140",
		"기계·로봇공학 기술자 및 시험원" : "151",
		"금속·재료공학 기술자 및 시험원" : "152",
		"전기·전자공학 기술자 및 시험원" : "153",
		"화학공학 기술자 및 시험원" : "154",
		"에너지·환경공학 기술자 및 시험원" : "155",
		"섬유공학 기술자 및 시험원" : "156",
		"식품공학 기술자 및 시험원" : "157",
		"소방·방재·산업안전·비파괴 기술자" : "158",
		"제도사 및 기타 인쇄·목재 등 공학 기술자 및 시험원" : "159",
		"대학 교수 및 강사" : "211",
		"학교 교사" : "212",
		"유치원 교사" : "213",
		"문리·기술·예능 강사" : "214",
		"장학관 및 기타 교육 종사자" : "215",
		"법률 전문가" : "221",
		"법률 사무원" : "222",
		"사회복지사 및 상담사" : "231",
		"보육교사 및 기타 사회복지 종사자" : "232",
		"성직자 및 기타 종교 종사자" : "233",
		"경찰관, 소방관 및 교도관" : "240",
		"군인" : "250",
		"의사, 한의사 및 치과의사" : "301",
		"수의사" : "302",
		"약사 및 한약사" : "303",
		"간호사" : "304",
		"영양사" : "305",
		"의료기사·치료사·재활사" : "306",
		"보건·의료 종사자" : "307",
		"작가·통번역가" : "411",
		"기자 및 언론 전문가" : "412",
		"학예사·사서·기록물관리사" : "413",
		"창작·공연 전문가(작가, 연극 제외)" : "414",
		"디자이너" : "415",
		"연극·영화·방송 전문가" : "416",
		"문화·예술 기획자 및 매니저" : "417",
		"스포츠·레크리에이션 종사자" : "420",
		"미용 서비스원" : "511",
		"결혼·장례 등 예식 서비스원" : "512",
		"여행 서비스원" : "521",
		"항공기·선박·열차 객실승무원" : "522",
		"숙박시설 서비스원" : "523",
		"오락시설 서비스원" : "524",
		"주방장 및 조리사" : "531",
		"식당 서비스원" : "532",
		"경호·보안 종사자" : "541",
		"경비원" : "542",
		"돌봄 서비스 종사자" : "550",
		"청소·방역 및 가사 서비스원" : "561",
		"검침·주차관리 및 기타 서비스 단순 종사자" : "562",
		"부동산 컨설턴트 및 중개인" : "611",
		"영업원 및 상품중개인" : "612",
		"텔레마케터" : "613",
		"소규모 상점 경영 및 일선 관리 종사자" : "614",
		"판매 종사자" : "615",
		"매장계산원 및 매표원" : "616",
		"판촉 및 기타 판매 단순 종사자" : "617",
		"항공기·선박·철도 조종사 및 관제사" : "621",
		"자동차 운전원" : "622",
		"물품이동장비 조작원(크레인·호이스트·지게차)" : "623",
		"택배원 및 기타 운송 종사자" : "624",
		"건설구조 기능원" : "701",
		"건축마감 기능원" : "702",
		"배관공" : "703",
		"건설·채굴 기계 운전원" : "704",
		"기타 건설 기능원(채굴포함)" : "705",
		"건설·채굴 단순 종사자" : "706",
		"기계장비 설치·정비원(운송장비 제외)" : "811",
		"운송장비 정비원" : "812",
		"금형원 및 공작기계 조작원" : "813",
		"냉·난방 설비 조작원" : "814",
		"자동조립라인·산업용로봇 조작원" : "815",
		"기계 조립원(운송장비 제외)" : "816",
		"운송장비 조립원" : "817",
		"금속관련 기계·설비 조작원" : "821",
		"판금원 및 제관원" : "822",
		"단조원 및 주조원" : "823",
		"용접원" : "824",
		"도장원 및 도금원" : "825",
		"비금속제품 생산기계 조작원" : "826",
		"전기공" : "831",
		"전기·전자기기 설치·수리원" : "832",
		"발전·배전 장치 조작원" : "833",
		"전기·전자 설비 조작원" : "834",
		"전기·전자 부품·제품 생산기계 조작원" : "835",
		"전기·전자 부품·제품 조립원" : "836",
		"정보 통신기기 설치·수리원" : "841",
		"방송·통신장비 설치·수리원" : "842",
		"석유·화학물 가공장치 조작원" : "851",
		"고무·플라스틱 등 화학제품 생산기계 조작원 및 조립원" : "852",
		"환경관련 장치 조작원" : "853",
		"섬유 제조·가공 기계 조작원" : "861",
		"패턴사, 재단사 및 재봉사" : "862",
		"의복 제조원 및 수선원" : "863",
		"제화원, 기타 섬유·의복 기계 조작원 및 조립원" : "864",
		"제과·제빵원 및 떡제조원" : "871",
		"식품 가공 기능원" : "872",
		"식품 가공 기계 조작원" : "873",
		"인쇄기계·사진현상기 조작원" : "881",
		"목재·펄프·종이 생산기계 조작원" : "882",
		"가구·목제품 제조·수리원" : "883",
		"공예원 및 귀금속 세공원" : "884",
		"악기·간판 및 기타 제조 종사자" : "885",
		"제조 단순 종사자" : "890",
		"작물재배 종사자" : "901",
		"낙농·사육 종사자" : "902",
		"임업 종사자" : "903",
		"어업 종사자" : "904",
		"농림어업 단순 종사자" : "905"
	}
}

//////
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





/**
 * @description 토익 차트 관련 series data 생성.
 * @param {*} toeic
 * @returns
 */
function getToeicSeriesData(toeic, type) {
    var group =
        type == "toeic"
            ? [
                  {
                      name: "0~99",
                      start: 0,
                      end: 99,
                  },
                  {
                      name: "100~199",
                      start: 100,
                      end: 199,
                  },
                  {
                      name: "200~299",
                      start: 200,
                      end: 299,
                  },
                  {
                      name: "300~399",
                      start: 300,
                      end: 399,
                  },
                  {
                      name: "400~499",
                      start: 400,
                      end: 499,
                  },
                  {
                      name: "500~599",
                      start: 500,
                      end: 599,
                  },
                  {
                      name: "600~699",
                      start: 600,
                      end: 699,
                  },
                  {
                      name: "700~799",
                      start: 700,
                      end: 799,
                  },
                  {
                      name: "800~899",
                      start: 800,
                      end: 899,
                  },
                  {
                      name: "900~990",
                      start: 900,
                      end: 990,
                  },
              ]
            : [
                  {
                      name: "0~10",
                      start: 0,
                      end: 10,
                  },
                  {
                      name: "11~20",
                      start: 11,
                      end: 20,
                  },
                  {
                      name: "21~30",
                      start: 21,
                      end: 30,
                  },
                  {
                      name: "31~40",
                      start: 31,
                      end: 40,
                  },
                  {
                      name: "41~50",
                      start: 41,
                      end: 50,
                  },
                  {
                      name: "51~60",
                      start: 51,
                      end: 60,
                  },
                  {
                      name: "61~70",
                      start: 61,
                      end: 70,
                  },
                  {
                      name: "71~80",
                      start: 71,
                      end: 80,
                  },
                  {
                      name: "81~90",
                      start: 81,
                      end: 90,
                  },
                  {
                      name: "91~100",
                      start: 91,
                      end: 100,
                  },
              ];

    var totalCount = toeic.length;

    if (totalCount > 0) {
        var result = _.map(group, function (item) {
            var count = _.filter(toeic, function (x) {
                if (x >= item.start && x <= item.end) {
                    return x;
                }
            }).length;
            item.count = count;
            item.y = round((count / totalCount) * 100);
            return item;
        });
        return result;
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
    var group = [
        {
            name: "3.0 미만",
            start: 0,
            end: 2.9,
        },
        {
            name: "3.0 ~ 3.5 미만",
            start: 3.0,
            end: 3.4,
        },
        {
            name: "3.5 ~ 4.0 미만",
            start: 3.5,
            end: 3.9,
        },
        {
            name: "4.0 ~ 4.5 이상",
            start: 4.0,
            end: 5,
        },
    ];

    var totalCount = data.length;

    var result = _.map(group, function (item) {
        var count = _.filter(data, function (x) {
            if (x >= item.start && x <= item.end) {
                return x;
            }
        }).length;
        item.count = count;
        item.y = round((count / totalCount) * 100);
        return item;
    });
    return result;
}

/**
 * @description 라인 차트 Render
 * @param {*} id
 * @param {*} seriesData
 */
function setRenderLineChart(id, seriesData, min, max, startIndex, endIndex) {
    Highcharts.chart(id, {
        title: {
            text: "",
        },
        tooltip: {
            headerFormat: "",
            pointFormat: '<span style="color:{point.color}"> \u25CF </span><b>{point.name}</b>  ' + "<br /><b>{point.y:.1f}%</b>",
        },
        yAxis: {
            title: {
                text: "",
            },
            min: 0,
            max: 100,
        },
        xAxis: {
            type: "category",
        },
        series: [
            {
                showInLegend: false,
                name: "",
                data: seriesData,
                marker: {
                    symbol: "cross",
                    lineColor: "black",
                    lineWidth: 3,
                    fillColor: "#FFFFFF",
                },
            },
        ],
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    y: -20,
                    style: {
                        fontFamily: "Segoe UI",
                        color: "gray",
                        fontSize: "16px",
                        textOutline: false,
                    },
                    format: "{point.y:.1f}%",
                },
                color: "gray",
                marker: {
                    radius: 7,
                },
            },
        },
        annotations: [
            {
                labels: [
                    {
                        point: {
                            xAxis: 0,
                            yAxis: 0,
                            x: startIndex,
                            y: seriesData[startIndex].y + 20,
                        },
                        text: "최소 " + min,
                    },
                    {
                        point: {
                            xAxis: 0,
                            yAxis: 0,
                            x: endIndex,
                            y: seriesData[endIndex].y + 20,
                        },
                        text: "최대 " + max,
                    },
                ],
            },
        ],
        exporting: {
            enabled: false,
        },
        credits: {
            enabled: false,
        },
    });
}

/**
 * @description 소재지 관련 JSON Array Mapping
 * @param {*} area
 * @param {*} degree
 */
function getUniversityDegreeRemapping(area, degree) {
    //소재지별 최종학력 근황.
    var all = _.map(getSeriesDataAndSort(area), function (item) {
        return {
            text: item.text,
            point: item.point,
            associate: 0,
            bachelor: 0,
            master: 0,
            doctor: 0,
        };
    });

    _.map(_globalUniversityGradeArray, function (grade) {
        var nowData = degree[grade.text];
        _.map(all, function (area, index) {
            if (nowData[area.text]) {
                all[index][grade.key] = round((nowData[area.text] / all[index]["point"]) * 100);
            }
        });
    });
    return all;
}

/**
 * @description 출신학교 / 학과(계열) 관련 JSON Array Mapping
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
        doctor: [],
    };
    var allPoint = _.sum(
        _.map(universityKey, function (item, index) {
            return all[item];
        })
    );

    var _all = _.map(universityKey, function (item, index) {
        return {
            text: item,
            value: `${round((all[item] / allPoint) * 100)}%(${all[item]}명)`,
            point: all[item],
        };
    });

    result.all = _.sortBy(_all, "point").reverse();

    _.map(_globalUniversityGradeArray, function (grade, index) {
        var nowObject = degree[grade.text];
        var nowKey = _.keys(nowObject);
        if (nowObject) {
            var nowPoint = _.sum(
                _.map(nowKey, function (_key, index) {
                    return nowObject[_key];
                })
            );
            var _now = _.map(nowKey, function (item, index) {
                return {
                    text: item,
                    value: `${round((nowObject[item] / nowPoint) * 100)}%(${nowObject[item]}명)`,
                    point: nowObject[item],
                };
            });

            result[grade.key] = _.sortBy(_now, "point").reverse();
        }
    });

    return result;
}

function json_to_sheet(remappingData) {
    var _workSheet = {};
    var _range = {
        s: {
            c: 0,
            r: 0,
        },
        e: {
            c: 21,
            r: remappingData.length,
        },
    };
    var mergesArray = [];
    remappingData.map((item, index) => {
        var option = item[0];
        var existsCount = item[1];
        var data = item.slice(2, 21);

        var styleObject = {};

        if (option === "bigtitle") {
            //mergesArray.push({s:{r:index,c:0},e:{r:index,c:9}});
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
                    sz: 13,
                    bold: true,
                    //color: { rgb: '30839f' },
                },
                fill: {
                    fgColor: {
                        rgb: "F2F2F2",
                    },
                },
                alignment: {
                    wrapText: true,
                    horizontal: "center",
                    vertical: "center",
                },
            };
        } else if (option === "bigtitle-three") {
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
                    sz: 13,
                    bold: true,
                    //color: { rgb: '30839f' },
                },
                fill: {
                    fgColor: {
                        rgb: "F2F2F2",
                    },
                },
                alignment: {
                    wrapText: true,
                    horizontal: "center",
                    vertical: "center",
                },
              };
          } else if (option === "bigtitle-tw") {
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
                      sz: 13,
                      bold: true,
                      //color: { rgb: '30839f' },
                  },
                  fill: {
                      fgColor: {
                          rgb: "F2F2F2",
                      },
                  },
                  alignment: {
                      wrapText: true,
                      horizontal: "center",
                      vertical: "center",
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
       } else if (option === "bigtitle-tw-agree") {
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
        } else if (option === "bigtitle-four") {
            mergesArray.push({ s: { r: index, c: 0 }, e: { r: index, c: 3 } });
            styleObject = {
                font: {
                    sz: 20,
                    bold: true,
                },
                fill: {
                    fgColor: {
                        rgb: "F2F2F2",
                    },
                },
                alignment: {
                    horizontal: "center",
                    vertical: "center",
                },
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
            };
        } else if (option === "bigtitle-five") {
            mergesArray.push({ s: { r: index, c: 0 }, e: { r: index, c: 4 } });
            styleObject = {
                font: {
                    sz: 20,
                    bold: true,
                },
                fill: {
                    fgColor: {
                        rgb: "F2F2F2",
                    },
                },
                alignment: {
                    horizontal: "center",
                    vertical: "center",
                },
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
            };
        } else if (option === "search1") {
            //mergesArray.push({s:{r:index,c:0},e:{r:index,c:9}});
            styleObject = {
                border: {
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
            };
        } else if (option === "search2") {
            //mergesArray.push({s:{r:index,c:0},e:{r:index,c:9}});
            styleObject = {
                border: {
                    bottom: {
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
            };
        } else if (option === "search3") {
            mergesArray.push({ s: { r: index, c: 0 }, e: { r: index, c: 2 } });
            styleObject = {
                border: {
                    bottom: {
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
            };
        } else if (option === "search-one-three") {
            mergesArray.push({ s: { r: index, c: 1 }, e: { r: index, c: 3 } });
            styleObject = {
                font: {
                    sz: 13,
                    bold: true,
                },
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
                alignment: {
                    wrapText: true,
                    horizontal: "center",
                    vertical: "center",
                },
            };
        } else if (option === "search-one-four") {
          mergesArray.push({ s: { r: index, c: 1 }, e: { r: index, c: 4 } });
          styleObject = {
              font: {
                  sz: 13,
                  bold: true,
              },
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
              alignment: {
                  wrapText: true,
                  horizontal: "center",
                  vertical: "center",
              },
          };
      }
        if (
            option === "header" ||
            option === "header-two-three" ||
            option === "header-two" ||
            option === "header-three-three" ||
            option === "header-three-five" ||
            option === "header-three" ||
            option === "header-two-multi" ||
            option === "header-five-three" ||
            option === "header-six-three"
        ) {
            if (option === "header-two-three") {
                mergesArray.push({
                    s: {
                        r: index,
                        c: 1,
                    },
                    e: {
                        r: index,
                        c: 2,
                    },
                });
                mergesArray.push({
                    s: {
                        r: index,
                        c: 3,
                    },
                    e: {
                        r: index,
                        c: 4,
                    },
                });
                mergesArray.push({
                    s: {
                        r: index,
                        c: 5,
                    },
                    e: {
                        r: index,
                        c: 6,
                    },
                });
            } else if (option === "header-three-three") {
                mergesArray.push({
                    s: {
                        r: index,
                        c: 1,
                    },
                    e: {
                        r: index,
                        c: 3,
                    },
                });
                mergesArray.push({
                    s: {
                        r: index,
                        c: 4,
                    },
                    e: {
                        r: index,
                        c: 6,
                    },
                });
                mergesArray.push({
                    s: {
                        r: index,
                        c: 7,
                    },
                    e: {
                        r: index,
                        c: 9,
                    },
                });
            } else if (option === "header-three-five") {
                mergesArray.push({
                    s: {
                        r: index,
                        c: 1,
                    },
                    e: {
                        r: index,
                        c: 3,
                    },
                });
                mergesArray.push({
                    s: {
                        r: index,
                        c: 4,
                    },
                    e: {
                        r: index,
                        c: 6,
                    },
                });
                mergesArray.push({
                    s: {
                        r: index,
                        c: 7,
                    },
                    e: {
                        r: index,
                        c: 9,
                    },
                });
                mergesArray.push({
                    s: {
                        r: index,
                        c: 10,
                    },
                    e: {
                        r: index,
                        c: 12,
                    },
                });
                mergesArray.push({
                    s: {
                        r: index,
                        c: 13,
                    },
                    e: {
                        r: index,
                        c: 15,
                    },
                });
            } else if (option === "header-two") {
                mergesArray.push({
                    s: {
                        r: index,
                        c: 1,
                    },
                    e: {
                        r: index,
                        c: 2,
                    },
                });
            } else if (option === "header-three") {
                mergesArray.push({
                    s: {
                        r: index,
                        c: 1,
                    },
                    e: {
                        r: index,
                        c: 3,
                    },
                });
            } else if (option === "header-two-multi") {
                var colCnt = data.length - 1 / 2;
                for (var i = 0; i < colCnt; i++) {
                    mergesArray.push({
                        s: {
                            r: index,
                            c: i * 2 + 1,
                        },
                        e: {
                            r: index,
                            c: (i + 1) * 2,
                        },
                    });
                }
            } else if (option === "header-five-three") {
                mergesArray.push({
                    s: {
                        r: index,
                        c: 1,
                    },
                    e: {
                        r: index,
                        c: 5,
                    },
                });
                mergesArray.push({
                    s: {
                        r: index,
                        c: 6,
                    },
                    e: {
                        r: index,
                        c: 8,
                    },
                });
                mergesArray.push({
                    s: {
                        r: index,
                        c: 9,
                    },
                    e: {
                        r: index,
                        c: 11,
                    },
                });
                mergesArray.push({
                    s: {
                        r: index,
                        c: 12,
                    },
                    e: {
                        r: index,
                        c: 14,
                    },
                });
                mergesArray.push({
                    s: {
                        r: index,
                        c: 15,
                    },
                    e: {
                        r: index,
                        c: 17,
                    },
                });
            } else if (option === "header-six-three") {
                mergesArray.push({
                    s: {
                        r: index,
                        c: 1,
                    },
                    e: {
                        r: index,
                        c: 6,
                    },
                });
                mergesArray.push({
                    s: {
                        r: index,
                        c: 7,
                    },
                    e: {
                        r: index,
                        c: 9,
                    },
                });
                mergesArray.push({
                    s: {
                        r: index,
                        c: 10,
                    },
                    e: {
                        r: index,
                        c: 12,
                    },
                });
                mergesArray.push({
                    s: {
                        r: index,
                        c: 13,
                    },
                    e: {
                        r: index,
                        c: 15,
                    },
                });
                mergesArray.push({
                    s: {
                        r: index,
                        c: 16,
                    },
                    e: {
                        r: index,
                        c: 18,
                    },
                });
            }
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
                fill: {
                    fgColor: {
                        rgb: "FFFFDE7",
                    },
                },
                alignment: {
                    wrapText: true,
                    horizontal: "center",
                    vertical: "center",
                },
            };
        }
        if (option === "data" || option === "data-first" || option === "data-three") {
            if (option === "data-three") {
                mergesArray.push({
                    s: {
                        r: index,
                        c: 0,
                    },
                    e: {
                        r: index,
                        c: 2,
                    },
                });
            }
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
                alignment: {
                    wrapText: true,
                    horizontal: "center",
                    vertical: "center",
                },
            };
        }

        data.map((subitem, subindex) => {
            var type = typeof subitem == "number" ? "n" : typeof subitem == "boolean" ? "b" : "z";
            if (existsCount > subindex)
                if (option === "data-first") {
                    if (subindex === 0) {
                        styleObject.fill = {
                            fgColor: {
                                rgb: "FFFFDE7",
                            },
                        };
                    } else {
                        styleObject.fill = {
                            fgColor: {
                                rgb: "FFFFFF",
                            },
                        };
                    }
                }
            _workSheet[
                XLSX.utils.encode_cell({
                    r: index,
                    c: subindex,
                })
            ] = {
                t: type,
                v: subitem,
                s: styleObject,
            };
        });
    });
    _workSheet["!ref"] = XLSX.utils.encode_range(_range);
    return {
        data: _workSheet,
        mergesArray,
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
        text: "선택",
        value: "",
    };
    switch (_type) {
        case "YEAR":
            result["text"] = "대상 년도 선택";
            break;

        case "COMTYPE":
            result["text"] = "기업 규모 선택";
            break;

        case "COMIND":
            result["text"] = "기업 분류 선택";
            break;
        case "COMNM":
            result["text"] = "기업 분류 선택";
            break;
    }
    return result;
}

var app = null;

/**
 * jQuery; document ready
 */
$(function () {
    /*
    API endpoints
    */
    let url_getStatUICode = function (year) {
        return DEBUG ? `json/ui2.json` : `/swiss/cm/getStatUICode2.do?year=${year}`;
    };

    let url_findCompany = function (year, text) {
        return DEBUG ? `json/company.json` : `/swiss/cm/findCompany.do?year=${year}&comnm=${text}`;
    };

    let url_findCompanyByCond = function () {
        return DEBUG ? `json/findCompany.json` : `/swiss/cm/findCompanyByCond.do`;
    };

    let url_findCompanyByRelation = function () {
        return DEBUG ? `json/findCompanyByRelation.json` : `/swiss/cm/findCompanyByRelation.do`;
    };

    let url_getStatByCond = function () {
        return DEBUG ? `json/getStatByCond3.json` : `/swiss/cm/getStatByCond3.do`;
    };

    let url_getStatByComp = function () {
        return DEBUG ? `json/getStatByComp3.json` : `/swiss/cm/getStatByComp3.do`;
    };

    let url_getUsageExport = function () {
        return DEBUG ? `json/getUsageExporterData.json` : `/swiss/cm/getUsageExport.do`;
    };

    let url = url_getStatUICode("");

    /*
    Run on background.
    */
    $.ajax({
        type: "GET",
        url: url,
        dataType: "text",
        complete: function () {
        },
        success: function (data) {
            let responseData = JSON.parse(data);

            let companyIndustryTypeSummary = function (data) {
                let comind = arrayToObject(data, "COMIND");

                comind.map((item, index) => {
                    item.text = _globalCompanyIndustryTypeSummaryObject[item.value];
                    return item;
                });

                return comind;
            };

            let extract_jobtype_list = function (joblcd) {
                let maindiv = joblcd["MAINDIV"];
                let jobtype_list = Object.keys(maindiv).map(function(keystr) {
                    return { text : keystr, value : maindiv[keystr] };
                })

                return jobtype_list;
            };

            app = new Vue({
                el: "#app",
                components: {
                    vuejsDatepicker,
                    'vue-multiselect': window.VueMultiselect.default,
                },
                data: {
                    isMounted: false,
                    elemName_companyListItems: "empCompListItems",
                    className_companyListItemSelected: "selected",
                    companyPieTopCount: 5,
                    responseData: responseData,

                    academic_categories: {
                        dept : {},
                        deptcol : {}
                    },

                    category_deptcol_stats: {},
                    category_deptcol_selected: "subject",
                    category_dept_selected: "subject",

                    category_dept_upper: [],
                    category_dept_mid: [],
                    category_dept_lower: [],
                    category_dept_subject: [],

                    tmp_category_dept_mid: [],
                    tmp_category_dept_lower: [],
                    tmp_category_dept_subject: [],

                    category_dept_upper_length: 0,
                    category_dept_mid_length: 0,
                    category_dept_lower_length: 0,
                    category_dept_subject_length: 0,

                    jobtype_list: extract_jobtype_list(_globalJobObject),
                    selectedJobtypeList: [],
                    selectedJobtype: null,
                    selectedJobtypeText: null,

                    job_high_list: [],
                    job_middle_list: [],
                    job_low_list: [],
                    job_high_list_excel: [],
                    job_middle_list_excel: [],
                    job_low_list_excel: [],

                    selected_dept_upper: "",
                    selected_dept_mid: "",
                    selected_dept_lower: "",
                    selected_dept_subject: "",

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
                    checked_compAreasAll: false,
                    checked_compIndustTypeAll: false,
                    checked_compPersonnelSizeAll: false,
                    checked_compTypeAll: false,
                    checked_jobTypeAll: false,
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
                    company_list: [],
                    companyAreas: _globalCompanyAreaArray,
                    companyAreas_length: _globalCompanyAreaArray.length,
                    companyFindResult: null,
                    companyIndustryTypes: companyIndustryTypeSummary(responseData),
                    companyIndustryTypes_length: companyIndustryTypeSummary(responseData).length,
                    companyListFindResult: null,
                    companyListSearchResults: [], // 조건 다이어그램 검색 결과
                    companyListSearchResults_length: 0,
                    companyListSearchResults_text: "",
                    companyListRelation: [], // 연관 업체 검색 결과
                    companyListRelation_length: 0,
                    companyListRelation_text: "",
                    companyPersonnelSizes: _globalCompanyPersonnelSizesArray,
                    companySearch: "",
                    companySearchComtype: "",
                    companySearchInd: "",
                    companySearchResults: [], // 문자열 검색 결과
                    companyTypes: arrayToObject(responseData, "COMTYPE"),
                    datepicker_lang: vdp_translation_ko.js,
                    dpstyle_companySearchingCond: "none",
                    dpstyle_companyRelatedList: "none",
                    dpstyle_usingStatisticsDownloads: "none",
                    dpstyle_result: "none",
                    isCompany_info_data: false,
                    isCompany_info: false,
                    isCompany_list: false,
                    isCompanyResultOpen: false,
                    isFetching: false,
                    isLicense: true,
                    isManualStep1: true,
                    isManualStep2: false,
                    isManualStep3: false,
                    isManualStep4: false,
                    isManualStep5: false,
                    isOpenCorpSize: false,
                    isOpenCorpType: false,
                    isPrivateLicense: true,
                    isPublicLicense: true,
                    isResponse: false,
                    isSelectAllCorpArea: false,
                    isSelectAllCorpPerSize: false,
                    isSelectAllCorpSize: false,
                    isSelectAllCorpType: false,
                    isSelectedCorp: true,
                    isSelectedManual: false,
                    isSelectedSearchComp: false,
                    isSelectedSearchCorp: false,
                    isUIResponse: false,
                    isUsageExporter: false,
                    isUserGroup: false,
                    isUseUserGroup: false,
                    license_list: [],
                    license_list_length : 0,
                    major_field_rank: [],
                    major_rank: [],
                    origin_rank: [],
                    uniarea_rank: [],
                    unikind_rank: [],
                    unifund_rank: [],
                    null_value: null,
                    privatelicense_list : [],
                    privatelicense_list_length : 0,
                    resultCount: 0,
                    searchResult: null,
                    selectedAreaTabValue: "",
                    selectedChartColor: "",
                    selectedChartIndex: 0,
                    selectedCompany: null,
                    selectedRelatedCompany: null,
                    selectedCompanyFromList: null,
                    selectedCompanyArea: null,
                    selectedCompanyAreaList: [],
                    selectedCompanyAreaText: null,
                    selectedCompanyIndustryType: null,
                    selectedCompanyIndustryTypeList: [],
                    selectedCompanyIndustryTypeText: null,
                    selectedCompanyPersonnelSize: null,
                    selectedCompanyPersonnelSizeList: [],
                    selectedCompanyPersonnelSizeText: null,
                    selectedCompanySizeList: [],
                    selectedCompanyText: "",
                    selectedCompanyType: null,
                    selectedCompanyTypeList: [],
                    selectedCompanyTypeText: null,
                    selectedCompanyValue: "",
                    selectedDeptcolTabValue: "",
                    selectedDeptTabValue: "",
                    selectedOriginTabValue: "",
                    selectedYear: null, //_.sortBy(arrayToObject(responseData, "YEAR"), "text").reverse()[0].text,
                    selectJobFlag: true,
                    slider_text: "전체",
                    slider_value: 50,
                    toeic_avarage: 0,
                    toeic_rate: 0,
                    university_area_tab_list: [],
                    university_area_tab_list_length: 0,
                    university_area: [],
                    university_dept_tab_list: [],
                    university_dept_tab_list_length: 0,
                    university_dept: [],
                    university_deptcol_tab_list: [],
                    university_deptcol_tab_list_length : 0,
                    university_deptcol: [],
                    university_origin_tab_list: [],
                    university_origin_tab_list_length : 0,
                    university_origin: [],
                    usageExporterDate: [
                        { value: "1m", text: "1개월" },
                        { value: "1w", text: "1주" },
                        { value: "1d", text: "1일" },
                        { value: "1h", text: "1시간" },
                    ],
                    usageExporterDateValue: "1d",
                    usageExporterEndDate: new Date(),
                    usageExporterStartDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
                    usageExporterType: [
                        { value: "A", text: "전체" },
                        { value: "1", text: "취업현황(조건검색)" },
                        { value: "2", text: "취업현황(회사검색)" },
                        { value: "3", text: "진로예측" },
                        { value: "4", text: "학교별분석" },
                    ],
                    usageExporterTypeValue: "1",
                    wrap_tab_toggle: { company: true, job: true, university: true, major: true, license: true, intern: true },
                    years: _.sortBy(arrayToObject(responseData, "YEAR"), "text").reverse(),

                    isStatusContent: true,
                    isCompanyListContent: false,
                    isCompanyStatusContent: false,
                    isDegreeContent: false,
                    isMajorContent: false,
                    isQualificationContent: false,
                    isDutyContent: false,
                    isCharacterContent: false,
                    isAgree: false,
                    isAgreeNon: false,
                    isAgreeTime: false,
                    isAgreeTimeText: "",
					isCharacterContent: false,
					reloadFlag: false,
					isProtection: false,
					job_high_rank: [],
                    job_mid_rank: [],
                    job_low_rank: [],
                },
                computed: {
                    /**
                     * "회사 검색하기" 팝업 표시 여부.
                     *
                     * `v-bind:style`로 요소에 `display` 스타일 값 제공.
                     */
                    style_searchModalBack: {
                        get: function () {
                            return {
                                display: this.dpstyle_companySearchingCond,
                            };
                        },
                    },

                    /**
                     * "연관 회사 목록 보기" 팝업 표시 여부.
                     *
                     * `v-bind:style`로 요소에 `display` 스타일 값 제공.
                     */
                    style_compRelListModal: {
                        get: function () {
                            return {
                                display: this.dpstyle_companyRelatedList,
                            };
                        },
                    },

                    /**
                     * "사용현황 통계 다운로드" 팝업 표시 여부.
                     *
                     * `v-bind:style`로 요소에 `display` 스타일 값 제공.
                     */
                    style_searchModalDownloads: {
                        get: function () {
                            return {
                                display: this.dpstyle_usingStatisticsDownloads,
                            };
                        },
                    },

                    /**
                     * 결과(resultWrapper) 영역 표시 여부.
                     *
                     * `v-bind:style`로 div 요소의 `display` 스타일 값 제공.
                     */
                    style_resultWrapper: {
                        get: function () {
                            this.dpstyle_result = (this.isResponse) ? "flex" : "none";
                            return { display: this.dpstyle_result };
                        },
                    },

                    /**
                     * UserGroup에게만 Visiblility 속성을 보임
                     */
                    style_visible_to_usergroup: {
                        get: function() {
                            return { visibility : (this.isUserGroup) ? "visible" : "hidden" };
                        }
                    },

                    /**
                     * 자격(평균) 슬라이더 꼬리표 스타일
                     *
                     * `v-bind:style`로 꼬리표 위치 지정
                     */
                    style_sliderPointer: {
                        get: function () {
                            let width = 250;
                            let pos = ((width * this.slider_value) / 100) * 0.975;
                            return { left: `${pos}px` };
                        },
                    },

                    /**
                     * "사용현황 통계 다운로드" 조회 시작일
                     */
                    beginDate: {
                        get: function () {
                            return moment(this.usageExporterStartDate).format("YYYY-MM-DD");
                        },
                        set: function (date) {
                            this.usageExporterStartDate = Date.parse(date);
                        },
                    },

                    /**
                     * "사용현황 통계 다운로드" 조회 종료일
                     */
                    endDate: {
                        get: function () {
                            return moment(this.usageExporterEndDate).format("YYYY-MM-DD");
                        },
                        set: function (date) {
                            this.usageExporterEndDate = Date.parse(date);
                        },
                    },

                    /**
                     * 기업 목록 검색 결과 여부
                     */
                    isCompanySearched: {
                        get: function () {
                            return (0 < this.companyListSearchResults_length);
                        },
                    },

                    /**
                     * 기업 목록 검색 결과의 아이템 선택 여부
                     */
                    isCompanySelected: {
                        get: function () {
                            return (null !== this.selectedCompanyFromList);
                        }
                    },

                    /**
                     * 연관 기업 목록 존재 여부
                     */
                    isRelativeCompanyExsist: {
                        get: function () {
                            return (0 < this.companyListRelation_length);
                        }
                    },

                    /**
                     * 연관 기업 목록의 아이템 선택 여부
                     */
                    isRelativeCompanySelected: {
                        get: function () {
                            return (null !== this.selectedRelatedCompany);
                        }
                    },

                    /**
                     * 학과(학제)의 학과 분류 선택
                     */
                    dept_selections: {
                        get: function() {
                            let retval = "";
                            let delimiter = " / ";

                            if (0 < this.selected_dept_upper.length) {
                                retval = `${this.selected_dept_upper}${delimiter}`;
                            }

                            if (0 < this.selected_dept_mid.length) {
                                retval = `${retval}${this.selected_dept_mid}${delimiter}`;
                            }

                            if (0 < this.selected_dept_lower.length) {
                                retval = `${retval}${this.selected_dept_lower}${delimiter}`;
                            }

                            if (0 < this.selected_dept_subject.length) {
                                retval = `${retval}${this.selected_dept_subject}`;
                            }

                            retval = retval.replace(/ \/ $/, '');

                            return retval;
                        }
                    },
                },
                methods: {
                    /**
                     * 계열 선택
                     */
                    selectDeptCategory: function (depttype) {
                        let selected_degree = this.selectedDeptcolTabValue;
                        this.category_deptcol_selected = depttype;
                        this.renderGridAndChart(selected_degree, "deptcol");
                    },

                    /**
                     * @description 엑셀 출력
                     */
                    excelExport: function () {
                        const vm = this;
                        var nowData = vm.searchResult;
                        var ws_name = "취업기업목록";

                        var wb = new Workbook();

                        var getSubtitle = (title) => {
                            return ["subtitle", 3, title, "", ""];
                        };

                        var companyTypeListText = "";
                        var companySizeListText = "";
                        var companyPersonnelSizeListText = "";
                        var companyAreaListText = "";
                        var companyText = "";
                        var jobtypeText = "";
                        if (vm.isSelectedCorp) {
                            if (vm.selectedCompanyTypeList.length > 0) {
                                vm.selectedCompanyTypeList.forEach((item) => {
                                    var dateObj = _.find(vm.companyTypes, { value: item });
                                    companyTypeListText += dateObj.text + ", ";
                                });
                                companyTypeListText = companyTypeListText.slice(0, -2);
                            }

                            if (vm.selectedCompanyIndustryTypeList.length > 0) {
                                vm.selectedCompanyIndustryTypeList.forEach((item) => {
                                    var dateObj = _.find(vm.companyIndustryTypes, { value: item });
                                    companySizeListText += dateObj.text + ", ";
                                });
                                companySizeListText = companySizeListText.slice(0, -2);
                            }

                            if (vm.selectedCompanyPersonnelSizeList.length > 0) {
                                vm.selectedCompanyPersonnelSizeList.forEach((item) => {
                                    var dateObj = _.find(vm.companyPersonnelSizes, { value: item });
                                    companyPersonnelSizeListText += dateObj.text + ", ";
                                });
                                companyPersonnelSizeListText = companyPersonnelSizeListText.slice(0, -2);
                            }

                            if (vm.selectedCompanyAreaList.length > 0) {
                                vm.selectedCompanyAreaList.forEach((item) => {
                                    var dateObj = _.find(vm.companyAreas, { value: item });
                                    companyAreaListText += dateObj.text + ", ";
                                });
                                companyAreaListText = companyAreaListText.slice(0, -2);
                            }

                            if (vm.selectedJobtypeList.length > 0) {
                                vm.selectedJobtypeList.forEach((item) => {
                                    var dateObj = _.find(vm.jobtype_list, { value: item });
                                    jobtypeText += dateObj.text + ", ";
                                });
                                jobtypeText = jobtypeText.slice(0, -2);
                            }
                        } else {
                            companyText = vm.selectedCompany.text;
                        }

                        var getTitle = (num) => {
                            var wsData = [];
                            var empty = Array.from("".repeat(num));
                            var rowEmpty = ["empty", num];
                            rowEmpty.concat(empty);
                            wsData.push(rowEmpty);
                            empty = Array.from("".repeat(num - 1));
                            var titleRow = ["bigtitle-three", num, "기업 취업 현황", "", ""];
                            titleRow.concat(empty);
                            wsData.push(titleRow);

                            if (vm.isSelectedCorp) {
                                let multiYear = vm.selectedYear.map(item => item.value).join('년,');
                                multiYear = multiYear + "년";
                                var searchRow1 = ["search3", num, `1. 통계 기준: ${multiYear}`, "", ""];
                                searchRow1.concat(empty);
                                wsData.push(searchRow1);
                                var searchRow2 = ["search3", num, `2. 검색 조건`, "", ""];
                                searchRow2.concat(empty);
                                wsData.push(searchRow2);
                                var searchRow3 = ["search3", num, `  - 기업유형: ${companyTypeListText}`, "", ""];
                                searchRow3.concat(empty);
                                wsData.push(searchRow3);
                                var searchRow4 = ["search3", num, `  - 산업분류: ${companySizeListText}`, "", ""];
                                searchRow4.concat(empty);
                                wsData.push(searchRow4);
                                var searchRow5 = ["search3", num, `  - 기업규모: ${companyPersonnelSizeListText}`, "", ""];
                                searchRow5.concat(empty);
                                wsData.push(searchRow5);
                                var searchRow6 = ["search3", num, `  - 기업지역: ${companyAreaListText}`, "", ""];
                                searchRow6.concat(empty);
                                wsData.push(searchRow6);
                                var searchRow7 = ["search3", num, `  - 직무유형: ${jobtypeText}`, "", ""];
                                searchRow7.concat(empty);
                                wsData.push(searchRow7);
                            } else {
                                let multiYear = vm.selectedYear.map(item => item.value).join('년,');
                                multiYear = multiYear + "년";
                                var searchRow1 = ["search3", num, `1. 통계 기준: ${multiYear}`, "", ""];
                                searchRow1.concat(empty);
                                wsData.push(searchRow1);
                                var searchRow2 = ["search3", num, `2. 검색 조건: ${companyText}`, "", ""];
                                searchRow2.concat(empty);
                                wsData.push(searchRow2);
                            }
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
                                        tmpLength = value[j] ? String(value[j]).length * 1.7 : 20;
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

                        //취업현황요약
                        ret = getTitle(7);
                        wsData = ret[0];
                        rowEmpty = ret[1];

                        wsData.push(getSubtitle("▶대상자수"));
                        wsData.push(["header", 1, vm.resultCount.toLocaleString() + '명']);
                        wsData.push(rowEmpty);

                        if (!vm.isProtection) {
                            wsData.push(getSubtitle("▶학력 - (1~3순위)"));
                            wsData.push(["header", 5, "순위", "출신학교", "출신학교 소재지", "학제", "설립"]);
                            let maxLength = Math.max(vm.origin_rank.length, vm.uniarea_rank.length, vm.unikind_rank.length, vm.unifund_rank.length);
                            for (var i = 0; i < maxLength; i++) {
                                originRank = vm.origin_rank[i] ? vm.origin_rank[i].name + " (" + vm.origin_rank[i].value + ")" : "";
                                uniareaRank = vm.uniarea_rank[i] ? vm.uniarea_rank[i].name + " (" + vm.uniarea_rank[i].value + ")" : "";
                                unikindRank = vm.unikind_rank[i] ? vm.unikind_rank[i].name + " (" + vm.unikind_rank[i].value + ")" : "";
                                unifundRank = vm.unifund_rank[i] ? vm.unifund_rank[i].name + " (" + vm.unifund_rank[i].value + ")" : "";
                                wsData.push(["data", 5, i + 1, originRank, uniareaRank, unikindRank, unifundRank]);
                            }
                            wsData.push(rowEmpty);
                        }

                        if (!vm.isProtection) {
                            wsData.push(getSubtitle("▶학과(계열) - (1~3순위)"));
                            wsData.push(["header", 3, "순위", "학과(계열)", "소계열"]);
                            for (var i = 0; i < vm.major_rank.length; i++) {
                                tmpMajorRank = vm.major_rank[i] ? vm.major_rank[i].name + " (" + vm.major_rank[i].value + ")" : "";
                                tmpMajorFieldRank = vm.major_field_rank[i] ? vm.major_field_rank[i].name + " (" + vm.major_field_rank[i].value + ")" : "";
                                wsData.push(["data", 3, i + 1, tmpMajorRank, tmpMajorFieldRank]);
                            }
                            wsData.push(rowEmpty);
                        } else {
                            wsData.push(getSubtitle("▶학과(계열) - (1~3순위)"));
                            wsData.push(["header", 2, "순위", "소계열"]);
                            for (var i = 0; i < vm.major_rank.length; i++) {
                                tmpMajorRank = vm.major_rank[i] ? vm.major_rank[i].name + " (" + vm.major_rank[i].value + ")" : "";
                                tmpMajorFieldRank = vm.major_field_rank[i] ? vm.major_field_rank[i].name + " (" + vm.major_field_rank[i].value + ")" : "";
                                wsData.push(["data", 2, i + 1, tmpMajorFieldRank]);
                            }
                            wsData.push(rowEmpty);
                        }

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

                        wsData.push(getSubtitle("▶직무"));
                        wsData.push(["header", 4, "순위", "대분류", "중분류", "소분류"]);
                        for (var i = 0; i < 3; i++) {
                            let highRank = "";
                            let midRank = "";
                            let lowRank = "";
                            if (vm.job_high_rank[i] != undefined) {
                                highRank = vm.job_high_rank[i].name ? vm.job_high_rank[i].name + " (" + vm.job_high_rank[i].value + ")" : "";
                            }

                            if (vm.job_mid_rank[i] != undefined) {
                                midRank = vm.job_mid_rank[i].name ? vm.job_mid_rank[i].name + " (" + vm.job_mid_rank[i].value + ")" : "";
                            }

                            if (vm.job_low_rank[i] != undefined) {
                                lowRank = vm.job_low_rank[i].name ? vm.job_low_rank[i].name + " (" + vm.job_low_rank[i].value + ")" : "";
                            }

                            wsData.push(["data", 4, i + 1, highRank, midRank, lowRank]);
                        }
                        wsData.push(rowEmpty);
                        addSheet(wsData, "취업현황요약");

                        if (vm.selectedCompany && vm.isCompany_info) {
                            ret = getTitle(7);
                            wsData = ret[0];
                            rowEmpty = ret[1];
                            var title1 = ["subtitle", 7, "▶기업 개요", "(※ 출처: ㈜이크레더블)", "", "", "", "", ""];
                            wsData.push(title1);
                            var dataHeaderRow1 = ["header", 7, "이름", "기업규모", "업종", "표준산업분류", "평균연봉", "기업상태", "기업상태 평가일"];
                            wsData.push(dataHeaderRow1);
                            var _data1 = nowData.COMPANYINFO;
                            var dataRow1 = [
                                "data",
                                7,
                                _data1.COMNM,
                                _data1.COMTYPE,
                                _data1.SECTOR,
                                _data1.INDNAME,
                                `${_data1.SALARY} 만원`,
                                _data1.LIVEGRADE,
                                _data1.LIVEDATE,
                            ];
                            wsData.push(dataRow1);
                            wsData.push(rowEmpty);
                            var title1 = ["subtitle", 7, "▶최근 3년간의 기업변화", "", "", "", "", "", ""];
                            wsData.push(title1);
                            wsData.push(["header", 7, "", "종업원수", "입사자수", "퇴사자수", "입사율(%)", "퇴사율(%)", "순입사율(%)"]);
                            var yeardata = _data1.YEAR;
                            yeardata.forEach((year, index) => {
                                var empratio = parseFloat(((_data1.ENTRANTCNT[index] / _data1.EMPLOYEECNT[index]) * 100).toFixed(2));
                                var retratio = parseFloat(((_data1.RETIREECNT[index] / _data1.EMPLOYEECNT[index]) * 100).toFixed(2));
                                wsData.push([
                                    "data-first",
                                    7,
                                    year,
                                    _data1.EMPLOYEECNT[index],
                                    _data1.ENTRANTCNT[index],
                                    _data1.RETIREECNT[index],
                                    empratio,
                                    retratio,
                                    _data1.EMPLOYEERATIO[index],
                                ]);
                            });
                            wsData.push(rowEmpty);

                            if (!vm.isProtection) {
                                var _data2 = [...nowData.depttop3].reverse();
                                var title1 = ["subtitle", 7, "▶전공 TOP3", "", "", "", "", "", ""];
                                wsData.push(title1);
                                wsData.push(["header-two-three", 7, "", "1순위(인원수)", "", "2순위(인원수)", "", "3순위(인원수)", ""]);
                                _data2.forEach((item, index) => {
                                    if (item.name[0] == undefined) {
                                        item.name[0] = "";
                                        item.data[0] = "";
                                    }
                                    if (item.name[1] == undefined) {
                                        item.name[1] = "";
                                        item.data[1] = "";
                                    }
                                    if (item.name[2] == undefined) {
                                        item.name[2] = "";
                                        item.data[2] = "";
                                    }
                                    wsData.push(["data-first", 7, item.year, item.name[0], item.data[0], item.name[1], item.data[1], item.name[2], item.data[2]]);
                                });
                                wsData.push(rowEmpty);

                                _data2 = [...nowData.areatop3].reverse();
                                title1 = ["subtitle", 7, "▶대학 소재지 TOP 3", "", "", "", "", "", ""];
                                wsData.push(title1);
                                wsData.push(["header-two-three", 7, "", "1순위(인원수)", "", "2순위(인원수)", "", "3순위(인원수)", ""]);
                                _data2.forEach((item, index) => {
                                    if (item.name[0] == undefined) {
                                        item.name[0] = "";
                                        item.data[0] = "";
                                    }
                                    if (item.name[1] == undefined) {
                                        item.name[1] = "";
                                        item.data[1] = "";
                                    }
                                    if (item.name[2] == undefined) {
                                        item.name[2] = "";
                                        item.data[2] = "";
                                    }
                                    wsData.push(["data-first", 7, item.year, item.name[0], item.data[0], item.name[1], item.data[1], item.name[2], item.data[2]]);
                                });
                                wsData.push(rowEmpty);

                                _data2 = [...nowData.fromarea].reverse();
                                title1 = ["subtitle", 3, "▶동일지역 출신 비율", "", ""];
                                wsData.push(title1);
                                var titleData = _data2[0];
                                wsData.push(["header", 3, "", titleData.name[0] + "(%)", titleData.name[1] + "(%)"]);
                                _data2.forEach((item, index) => {
                                    if (item.name[0] == undefined) {
                                        item.data[0] = "";
                                    }
                                    if (item.name[1] == undefined) {
                                        item.data[1] = "";
                                    }
                                    wsData.push(["data-first", 3, item.year, item.data[0], item.data[1]]);
                                });
                                wsData.push(rowEmpty);
                            }

                            title1 = ["subtitle", 3, "▶동종업계 급여비교", "", ""];
                            wsData.push(title1);
                            wsData.push(["header", 3, "이름", "급여", "비교"]);
                            var salkeys = Object.keys(_data1.SALARYCOMPARE);
                            wsData.push([
                                "data",
                                3,
                                salkeys[0],
                                _data1.SALARYCOMPARE[salkeys[0]],
                                parseFloat((_data1.SALARYCOMPARE[salkeys[0]] / _data1.SALARYCOMPARE[salkeys[1]]).toFixed(2)) + " 배",
                            ]);
                            wsData.push(["header", 3, salkeys[1], _data1.SALARYCOMPARE[salkeys[1]], ""]);
                            wsData.push(["subtitle", 1, "※동종업계: 기업개요에서 기업규모, 업종, 표준산업분류가 동일한 기업"]);
                            wsData.push(rowEmpty);

                            _data2 = nowData.salary;
                            title1 = ["subtitle", 2, "▶급여분포", ""];
                            wsData.push(title1);
                            wsData.push(["header", 2, "급여", "인원"]);
                            var salary_dept = 100;
                            if (_data2.length > 2) {
                                salary_dept = _data2[1][0] - _data2[0][0];
                            }

                            var tmpIndex = _data2.length - 1;
                            _data2.forEach((item, index) => {
                                if (index != tmpIndex) {
                                    wsData.push(["data-first", 2, item[0] + "만원 ~ " + (item[0] + salary_dept) + "만원", item[1]]);
                                } else {
                                    wsData.push(["data-first", 2, item[0] + "만원 이상", item[1]]);
                                }
                            });

                            ws_name = "기업현황";
                        } else if (vm.selectedCompany && vm.isCompany_info_data) {
                            ret = getTitle(7);
                            wsData = ret[0];
                            rowEmpty = ret[1];

                            var title1 = ["subtitle", 3, "▶취업기업목록", "", ""];
                            wsData.push(title1);
                            var dataHeaderRow1 = ["header", 3, "기업명", "비율(%)", "인원수"];
                            wsData.push(dataHeaderRow1);
                            var companyList = nowData.company_list;
                            for (const [key, value] of Object.entries(companyList)) {
                                var infos = key.split("_");
                                wsData.push(["data-first", 6, infos[1], parseFloat(((value / nowData.count) * 100).toFixed(2)), value]);
                            }
                            wsData.push(rowEmpty);

                            var _data2 = [];
                            if (!vm.isProtection) {
                                _data2 = [...nowData.depttop3].reverse();
                                title1 = ["subtitle", 7, "▶전공 TOP3", "", "", "", "", "", ""];
                                wsData.push(title1);
                                wsData.push(["header-two-three", 7, "", "1순위(인원수)", "", "2순위(인원수)", "", "3순위(인원수)", ""]);
                                _data2.forEach((item, index) => {
                                    if (item.name[0] == undefined) {
                                        item.name[0] = "";
                                        item.data[0] = "";
                                    }
                                    if (item.name[1] == undefined) {
                                        item.name[1] = "";
                                        item.data[1] = "";
                                    }
                                    if (item.name[2] == undefined) {
                                        item.name[2] = "";
                                        item.data[2] = "";
                                    }
                                    wsData.push(["data-first", 7, item.year, item.name[0], item.data[0], item.name[1], item.data[1], item.name[2], item.data[2]]);
                                });
                                wsData.push(rowEmpty);

                                _data2 = [...nowData.areatop3].reverse();
                                title1 = ["subtitle", 7, "▶대학 소재지 TOP 3", "", "", "", "", "", ""];
                                wsData.push(title1);
                                wsData.push(["header-two-three", 7, "", "1순위(인원수)", "", "2순위(인원수)", "", "3순위(인원수)", ""]);
                                _data2.forEach((item, index) => {
                                    if (item.name[0] == undefined) {
                                        item.name[0] = "";
                                        item.data[0] = "";
                                    }
                                    if (item.name[1] == undefined) {
                                        item.name[1] = "";
                                        item.data[1] = "";
                                    }
                                    if (item.name[2] == undefined) {
                                        item.name[2] = "";
                                        item.data[2] = "";
                                    }
                                    wsData.push(["data-first", 7, item.year, item.name[0], item.data[0], item.name[1], item.data[1], item.name[2], item.data[2]]);
                                });
                                wsData.push(rowEmpty);

                                _data2 = [...nowData.fromarea].reverse();
                                title1 = ["subtitle", 3, "▶동일지역 출신 비율", "", ""];
                                wsData.push(title1);
                                var titleData = _data2[0];
                                wsData.push(["header", 3, "", titleData.name[0] + "(%)", titleData.name[1] + "(%)"]);
                                _data2.forEach((item, index) => {
                                    if (item.name[0] == undefined) {
                                        item.data[0] = "";
                                    }
                                    if (item.name[1] == undefined) {
                                        item.data[1] = "";
                                    }
                                    wsData.push(["data-first", 3, item.year, item.data[0], item.data[1]]);
                                });
                                wsData.push(rowEmpty);
                            }

                            _data2 = nowData.salary;
                            title1 = ["subtitle", 2, "▶급여분포", ""];
                            wsData.push(title1);
                            wsData.push(["header", 2, "급여", "인원"]);
                            var salary_dept = 100;
                            if (_data2.length > 2) {
                                salary_dept = _data2[1][0] - _data2[0][0];
                            }

                            var tmpIndex = _data2.length - 1;
                            _data2.forEach((item, index) => {
                                if (index == tmpIndex) {
                                    wsData.push(["data-first", 2, item[0] + "만원 이상", item[1]]);
                                } else {
                                    wsData.push(["data-first", 2, item[0] + "만원 ~ " + (item[0] + salary_dept) + "만원", item[1]]);
                                }
                            });

                            ws_name = "기업현황";
                        } else {
                            ret = getTitle(3);
                            wsData = ret[0];
                            rowEmpty = ret[1];

                            var title1 = ["subtitle", 3, "▶취업기업목록", "", ""];
                            wsData.push(title1);
                            var dataHeaderRow1 = ["header", 3, "기업명", "비율(%)", "인원수"];
                            wsData.push(dataHeaderRow1);
                            var companyList = nowData.company_list;
                            for (const [key, value] of Object.entries(companyList)) {
                                var infos = key.split("_");
                                wsData.push(["data-first", 6, infos[1], parseFloat(((value / nowData.count) * 100).toFixed(2)), value]);
                            }
                            wsData.push(rowEmpty);
                        }

                        addSheet(wsData, ws_name);

                        if (!vm.isProtection) {
                            ret = getTitle(16);
                            wsData = ret[0];
                            rowEmpty = ret[1];

                            //설립
                            wsData.push(getSubtitle("▶설립"));

                            // 치환 규칙 정의
                            let substitutionRules = {
                              "특별법국립": "국립",
                              "특별법법인": "국립",
                              "국립대법인": "국립"
                            };

                            // 치환 수행
                            let university_fund_trans = {};
                            Object.entries(nowData.university_fund).forEach(([key, value]) => {
                              let substitutedKey = substitutionRules[key] || key;
                              if (!university_fund_trans[substitutedKey]) {
                                university_fund_trans[substitutedKey] = 0;
                              }
                              university_fund_trans[substitutedKey] += value;
                            });

                            university_fund_trans = Object.fromEntries(
                              Object.entries(university_fund_trans).sort((a, b) => b[1] - a[1])
                            );

                            var tt3 = university_fund_trans;
                            const tt3keys = Object.keys(tt3);
                            var tt3cnt = tt3keys.length + 1;
                            var tt3sum = _.sum(_.values(tt3));
                            var tt3header = ["header", tt3cnt, "구분"];
                            tt3header = tt3header.concat(tt3keys);
                            wsData.push(tt3header);
                            var tt3num = ["data", tt3cnt, "인원"];
                            var tt3ratio = ["data", tt3cnt, "비율(%)"];
                            tt3keys.forEach((ele) => {
                                tt3num.push(tt3[ele]);
                                tt3ratio.push(parseFloat(((tt3[ele] / tt3sum) * 100).toFixed(3)));
                            });
                            wsData.push(tt3num);
                            wsData.push(tt3ratio);
                            wsData.push(rowEmpty);

                            // 치환 규칙 정의
                            substitutionRules = {
                              "전문대학(4년제)": "전문대학",
                              "전문대학(3년제)": "전문대학",
                              "전문대학(2년제)": "전문대학",
                              "대학교": "대학"
                            };

                            // 치환 수행
                            let university_kind_trans = {};
                            Object.entries(nowData.university_kind).forEach(([key, value]) => {
                              let substitutedKey = substitutionRules[key] || key;
                              if (!university_kind_trans[substitutedKey]) {
                                university_kind_trans[substitutedKey] = 0;
                              }
                              university_kind_trans[substitutedKey] += value;
                            });

                            university_kind_trans = Object.fromEntries(
                              Object.entries(university_kind_trans).sort((a, b) => b[1] - a[1])
                            );

                            // 학제
                            wsData.push(getSubtitle("▶학제"));
                            var tt2 = university_kind_trans;
                            const tt2keys = Object.keys(tt2);
                            var tt2cnt = tt2keys.length + 1;
                            var tt2sum = _.sum(_.values(tt2));
                            var tt2header = ["header", tt2cnt, "구분"];
                            tt2header = tt2header.concat(tt2keys);
                            wsData.push(tt2header);
                            var tt2num = ["data", tt2cnt, "인원"];
                            var tt2ratio = ["data", tt2cnt, "비율(%)"];
                            tt2keys.forEach((ele) => {
                                tt2num.push(tt2[ele]);
                                tt2ratio.push(parseFloat(((tt2[ele] / tt2sum) * 100).toFixed(3)));
                            });
                            wsData.push(tt2num);
                            wsData.push(tt2ratio);
                            wsData.push(rowEmpty);

                            //최종 학력 소재지
                            wsData.push(getSubtitle("▶학력"));
                            var tt4 = nowData.degreeCnt;
                            const tt4keys = Object.keys(tt4).reverse();
                            var tt4cnt = tt4keys.length + 1;
                            var tt4header = ["header", tt4cnt, "구분"];
                            tt4header = tt4header.concat(tt4keys);
                            wsData.push(tt4header);
                            var tt4num = ["data", tt4cnt, "인원"];
                            var tt4ratio = ["data", tt4cnt, "비율(%)"];
                            tt4keys.forEach((ele) => {
                                tt4num.push(tt4[ele][0]);
                                tt4ratio.push(tt4[ele][1]);
                            });
                            wsData.push(tt4num);
                            wsData.push(tt4ratio);
                            wsData.push(rowEmpty);

                            // 출신학교
                            wsData.push(getSubtitle("▶ 출신학교"));
                            var uni = nowData.university;
                            const unikeys = Object.keys(uni);
                            var unisum = _.sum(_.values(uni));
                            var university_degree = nowData.university_degree;
                            var unidcnt = 0;
                            var unimcnt = 0;
                            var unibcnt = 0;
                            var unipcnt = 0;

                            if ("박사" in university_degree) {
                                var university_d = nowData.university_degree["박사"];
                                var unidkeys = Object.keys(university_d);
                                unidcnt = unidkeys.length;
                                var udsum = _.sum(_.values(university_d));
                            }
                            if ("석사" in university_degree) {
                                var university_m = nowData.university_degree["석사"];
                                var unimkeys = Object.keys(university_m);
                                unimcnt = unimkeys.length;
                                var umsum = _.sum(_.values(university_m));
                            }
                            if ("학사" in university_degree) {
                                var university_b = nowData.university_degree["학사"];
                                var unibkeys = Object.keys(university_b);
                                unibcnt = unibkeys.length;
                                var ubsum = _.sum(_.values(university_b));
                            }
                            if ("전문학사" in university_degree) {
                                var university_p = nowData.university_degree["전문학사"];
                                var unipkeys = Object.keys(university_p);
                                unipcnt = unipkeys.length;
                                var upsum = _.sum(_.values(university_p));
                            }

                            var tt6cnt = 16;
                            var tt6header1 = [
                                "header-three-five",
                                tt6cnt,
                                "구분",
                                "전체",
                                "",
                                "",
                                "전문학사",
                                "",
                                "",
                                "학사",
                                "",
                                "",
                                "석사",
                                "",
                                "",
                                "박사",
                                "",
                                "",
                            ];
                            var tt6header2 = [
                                "header",
                                tt6cnt,
                                "순위",
                                "명칭",
                                "인원",
                                "비율(%)",
                                "명칭",
                                "인원",
                                "비율(%)",
                                "명칭",
                                "인원",
                                "비율(%)",
                                "명칭",
                                "인원",
                                "비율(%)",
                                "명칭",
                                "인원",
                                "비율(%)",
                            ];
                            wsData.push(tt6header1);
                            wsData.push(tt6header2);

                            var i;
                            for (i = 0; i < unikeys.length; i++) {
                                var tt6data = ["data", tt6cnt, i + 1];
                                tt6data = tt6data.concat([unikeys[i], uni[unikeys[i]], parseFloat(((uni[unikeys[i]] / unisum) * 100).toFixed(3))]);

                                if (unipcnt > 0 && unipcnt > i) {
                                    tt6data = tt6data.concat([
                                        unipkeys[i],
                                        university_p[unipkeys[i]],
                                        parseFloat(((university_p[unipkeys[i]] / upsum) * 100).toFixed(3)),
                                    ]);
                                } else {
                                    tt6data = tt6data.concat(["", "", ""]);
                                }

                                if (unibcnt > 0 && unibcnt > i) {
                                    tt6data = tt6data.concat([
                                        unibkeys[i],
                                        university_b[unibkeys[i]],
                                        parseFloat(((university_b[unibkeys[i]] / ubsum) * 100).toFixed(3)),
                                    ]);
                                } else {
                                    tt6data = tt6data.concat(["", "", ""]);
                                }

                                if (unimcnt > 0 && unimcnt > i) {
                                    tt6data = tt6data.concat([
                                        unimkeys[i],
                                        university_m[unimkeys[i]],
                                        parseFloat(((university_m[unimkeys[i]] / umsum) * 100).toFixed(3)),
                                    ]);
                                } else {
                                    tt6data = tt6data.concat(["", "", ""]);
                                }

                                if (unidcnt > 0 && unidcnt > i) {
                                    tt6data = tt6data.concat([
                                        unidkeys[i],
                                        university_d[unidkeys[i]],
                                        parseFloat(((university_d[unidkeys[i]] / udsum) * 100).toFixed(3)),
                                    ]);
                                } else {
                                    tt6data = tt6data.concat(["", "", ""]);
                                }
                                wsData.push(tt6data);
                            }
                            wsData.push(rowEmpty);

                            //▶ 최종학력 소재지
                            wsData.push(getSubtitle("▶출신학교 소재지"));
                            var tt5 = nowData.uniAreaCnt;
                            const tt5keys = Object.keys(tt5).reverse();
                            var tt5cnt = tt5keys.length * 2 + 3;
                            var tt5header1 = ["header-two-multi", tt5cnt, "구분"];
                            var tt5header2 = ["header", tt5cnt, "시도"];
                            tt5header1.push("전체");
                            tt5header1.push("");
                            tt5header2.push("인원");
                            tt5header2.push("비율(%)");
                            tt5keys.forEach((ele) => {
                                tt5header1.push(ele);
                                tt5header1.push("");
                                tt5header2.push("인원");
                                tt5header2.push("비율(%)");
                            });
                            wsData.push(tt5header1);
                            wsData.push(tt5header2);
                            var tt5subkeys = Object.keys(tt5[tt5keys[0]]);
                            var totalSum = 0;
                            tt5subkeys.forEach((ele) => {
                                if (ele != "해외" && ele != "미상") {
                                    tt5keys.forEach((mele) => {
                                        totalSum += tt5[mele][ele][0];
                                    });
                                }
                            });
                            tt5subkeys.forEach((ele) => {
                                if (ele != "해외" && ele != "미상") {
                                    var tt5data = ["data", tt5cnt, ele];
                                    var subSum = 0;
                                    tt5keys.forEach((mele) => {
                                        subSum += tt5[mele][ele][0];
                                    });
                                    tt5data.push(subSum);
                                    tt5data.push(parseFloat(((subSum / totalSum) * 100).toFixed(3)));
                                    tt5keys.forEach((mele) => {
                                        tt5data.push(tt5[mele][ele][0]);
                                        tt5data.push(tt5[mele][ele][1]);
                                    });
                                    wsData.push(tt5data);
                                }
                            });
                            wsData.push(rowEmpty);
                            addSheet(wsData, "최종학력");
                        }

                        //▶ 졸업학교 및 학과(계열)
                        ret = getTitle(3);
                        wsData = ret[0];
                        rowEmpty = ret[1];

                        if (!vm.isProtection) {
                            wsData.push(getSubtitle("▶ 학과(계열)"));
                            var dpet = nowData.dept;
                            var deptcol = nowData.deptColCnt;
                            const dpetkeys = Object.keys(dpet);
                            const deptcolkeys = Object.keys(deptcol);
                            var deptsum = _.sum(_.values(dpet));
                            var deptcolsum = _.sum(_.values(deptcol));
                            var tt6header1 = [
                                "header-six-three",
                                19,
                                "구분",
                                "전체",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "전문학사",
                                "",
                                "",
                                "학사",
                                "",
                                "",
                                "석사",
                                "",
                                "",
                                "박사",
                                "",
                                "",
                            ];
                            var tt6header2 = [
                                "header",
                                19,
                                "순위",
                                "대계열",
                                "중계열",
                                "소계열",
                                "전공명(학과명)",
                                "인원",
                                "비율(%)",
                                "전공명(학과명)",
                                "인원",
                                "비율(%)",
                                "전공명(학과명)",
                                "인원",
                                "비율(%)",
                                "전공명(학과명)",
                                "인원",
                                "비율(%)",
                                "전공명(학과명)",
                                "인원",
                                "비율(%)",
                            ];
                            wsData.push(tt6header1);
                            wsData.push(tt6header2);

                            var dept_a_sum = 0;
                            if ("associate" in vm.university_dept) {
                                vm.university_dept["associate"].forEach((item, index) => {
                                    dept_a_sum += item.point;
                                });
                            }
                            var dept_b_sum = 0;
                            if ("bachelor" in vm.university_dept) {
                                vm.university_dept["bachelor"].forEach((item, index) => {
                                    dept_b_sum += item.point;
                                });
                            }
                            var dept_m_sum = 0;
                            if ("master" in vm.university_dept) {
                                vm.university_dept["master"].forEach((item, index) => {
                                    dept_m_sum += item.point;
                                });
                            }
                            var dept_d_sum = 0;
                            if ("doctor" in vm.university_dept) {
                                vm.university_dept["doctor"].forEach((item, index) => {
                                    dept_d_sum += item.point;
                                });
                            }

                            var i;
                            for (i = 0; i < dpetkeys.length; i++) {
                                var tt6data = ["data", 19, i + 1];

                                // 전체
                                // 전공명
                                var arrDpet = dpetkeys[i].split("/");
                                var largeText = arrDpet[0] == undefined ? "" : arrDpet[0];
                                var middleText = arrDpet[1] == undefined ? "" : arrDpet[1];
                                var smallText = arrDpet[2] == undefined ? "" : arrDpet[2];
                                var itemtext = arrDpet[3] == undefined ? "" : arrDpet[3];

                                // 인원, 비율
                                tt6data = tt6data.concat([
                                    largeText,
                                    middleText,
                                    smallText,
                                    itemtext,
                                    dpet[dpetkeys[i]],
                                    parseFloat(((dpet[dpetkeys[i]] / deptsum) * 100).toFixed(3)),
                                ]);

                                var tmpObj = vm.university_dept["associate"][i] == undefined ? "" : vm.university_dept["associate"][i];
                                if (tmpObj != "") {
                                    var idx = tmpObj.text.lastIndexOf("/") == -1 ? 0 : tmpObj.text.lastIndexOf("/") + 2;
                                    itemtext = tmpObj.text.substr(idx);
                                    tt6data = tt6data.concat([itemtext, tmpObj.point, parseFloat(((tmpObj.point / dept_a_sum) * 100).toFixed(3))]);
                                } else {
                                    tt6data = tt6data.concat(["", "", ""]);
                                }

                                var tmpObj = vm.university_dept["bachelor"][i] == undefined ? "" : vm.university_dept["bachelor"][i];
                                if (tmpObj != "") {
                                    var idx = tmpObj.text.lastIndexOf("/") == -1 ? 0 : tmpObj.text.lastIndexOf("/") + 2;
                                    itemtext = tmpObj.text.substr(idx);
                                    tt6data = tt6data.concat([itemtext, tmpObj.point, parseFloat(((tmpObj.point / dept_b_sum) * 100).toFixed(3))]);
                                } else {
                                    tt6data = tt6data.concat(["", "", ""]);
                                }

                                var tmpObj = vm.university_dept["master"][i] == undefined ? "" : vm.university_dept["master"][i];
                                if (tmpObj != "") {
                                    var idx = tmpObj.text.lastIndexOf("/") == -1 ? 0 : tmpObj.text.lastIndexOf("/") + 2;
                                    itemtext = tmpObj.text.substr(idx);
                                    tt6data = tt6data.concat([itemtext, tmpObj.point, parseFloat(((tmpObj.point / dept_m_sum) * 100).toFixed(3))]);
                                } else {
                                    tt6data = tt6data.concat(["", "", ""]);
                                }

                                var tmpObj = vm.university_dept["doctor"][i] == undefined ? "" : vm.university_dept["doctor"][i];
                                if (tmpObj != "") {
                                    var idx = tmpObj.text.lastIndexOf("/") == -1 ? 0 : tmpObj.text.lastIndexOf("/") + 2;
                                    itemtext = tmpObj.text.substr(idx);
                                    tt6data = tt6data.concat([itemtext, tmpObj.point, parseFloat(((tmpObj.point / dept_d_sum) * 100).toFixed(3))]);
                                } else {
                                    tt6data = tt6data.concat(["", "", ""]);
                                }

                                wsData.push(tt6data);
                            }
                            wsData.push(rowEmpty);
                        }

                        wsData.push(getSubtitle("▶ 전공계열(소계열)"));
                        tt6header1 = [
                            "header-five-three",
                            18,
                            "구분",
                            "전체",
                            "",
                            "",
                            "",
                            "",
                            "전문학사",
                            "",
                            "",
                            "학사",
                            "",
                            "",
                            "석사",
                            "",
                            "",
                            "박사",
                            "",
                            "",
                        ];
                        tt6header2 = [
                            "header",
                            18,
                            "순위",
                            "대계열",
                            "중계열",
                            "소계열",
                            "인원",
                            "비율(%)",
                            "소계열",
                            "인원",
                            "비율(%)",
                            "소계열",
                            "인원",
                            "비율(%)",
                            "소계열",
                            "인원",
                            "비율(%)",
                            "소계열",
                            "인원",
                            "비율(%)",
                        ];
                        wsData.push(tt6header1);
                        wsData.push(tt6header2);

                        var deptcol_a_sum = 0;
                        if ("associate" in vm.university_deptcol) {
                            vm.university_deptcol["associate"].forEach((item, index) => {
                                deptcol_a_sum += item.point;
                            });
                        }
                        var deptcol_b_sum = 0;
                        if ("bachelor" in vm.university_deptcol) {
                            vm.university_deptcol["bachelor"].forEach((item, index) => {
                                deptcol_b_sum += item.point;
                            });
                        }
                        var deptcol_m_sum = 0;
                        if ("master" in vm.university_deptcol) {
                            vm.university_deptcol["master"].forEach((item, index) => {
                                deptcol_m_sum += item.point;
                            });
                        }
                        var deptcol_d_sum = 0;
                        if ("doctor" in vm.university_deptcol) {
                            vm.university_deptcol["doctor"].forEach((item, index) => {
                                deptcol_d_sum += item.point;
                            });
                        }

                        var deptcol_all_sum = 0;
                        if ("all" in vm.university_deptcol) {
                            vm.university_deptcol["all"].forEach((item, index) => {
                                deptcol_all_sum += item.point;
                            });
                        }

                        vm.university_deptcol["all"].forEach((item, i) => {
                            var tt6data = ["data", 18, i + 1];

                            var arrDpet = item.text.split("/");
                            var largeText = arrDpet[0] == undefined ? "" : arrDpet[0];
                            var middleText = arrDpet[1] == undefined ? "" : arrDpet[1];
                            var smallText = arrDpet[2] == undefined ? "" : arrDpet[2];

                            tt6data = tt6data.concat([
                                largeText,
                                middleText,
                                smallText,
                                item.point,
                                parseFloat((item.point / deptcol_all_sum) * 100).toFixed(3),
                            ]);

                            var tmpObj = vm.university_deptcol["associate"][i] == undefined ? "" : vm.university_deptcol["associate"][i];
                            if (tmpObj != "") {
                                var idx = tmpObj.text.lastIndexOf("/") == -1 ? 0 : tmpObj.text.lastIndexOf("/") + 2;
                                itemtext = tmpObj.text.substr(idx);
                                tt6data = tt6data.concat([itemtext, tmpObj.point, parseFloat(((tmpObj.point / deptcol_a_sum) * 100).toFixed(3))]);
                            } else {
                                tt6data = tt6data.concat(["", "", ""]);
                            }

                            var tmpObj = vm.university_deptcol["bachelor"][i] == undefined ? "" : vm.university_deptcol["bachelor"][i];
                            if (tmpObj != "") {
                                var idx = tmpObj.text.lastIndexOf("/") == -1 ? 0 : tmpObj.text.lastIndexOf("/") + 2;
                                itemtext = tmpObj.text.substr(idx);
                                tt6data = tt6data.concat([itemtext, tmpObj.point, parseFloat(((tmpObj.point / deptcol_b_sum) * 100).toFixed(3))]);
                            } else {
                                tt6data = tt6data.concat(["", "", ""]);
                            }

                            var tmpObj = vm.university_deptcol["master"][i] == undefined ? "" : vm.university_deptcol["master"][i];
                            if (tmpObj != "") {
                                var idx = tmpObj.text.lastIndexOf("/") == -1 ? 0 : tmpObj.text.lastIndexOf("/") + 2;
                                itemtext = tmpObj.text.substr(idx);
                                tt6data = tt6data.concat([itemtext, tmpObj.point, parseFloat(((tmpObj.point / deptcol_m_sum) * 100).toFixed(3))]);
                            } else {
                                tt6data = tt6data.concat(["", "", ""]);
                            }

                            var tmpObj = vm.university_deptcol["doctor"][i] == undefined ? "" : vm.university_deptcol["doctor"][i];
                            if (tmpObj != "") {
                                var idx = tmpObj.text.lastIndexOf("/") == -1 ? 0 : tmpObj.text.lastIndexOf("/") + 2;
                                itemtext = tmpObj.text.substr(idx);
                                tt6data = tt6data.concat([itemtext, tmpObj.point, parseFloat(((tmpObj.point / deptcol_d_sum) * 100).toFixed(3))]);
                            } else {
                                tt6data = tt6data.concat(["", "", ""]);
                            }

                            wsData.push(tt6data);
                        });

                        wsData.push(rowEmpty);
                        addSheet(wsData, "학과(계열)");

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

                        function round_custom(value) {
                          return isNaN(value) ? 0 : Math.round(value);
                        }

                        wsData.push(["data-first", 3, "보유(%)", round_custom(toeic_percent), round_custom(gradescore_percent)]);
                        wsData.push(["data-first", 3, "평균", round_custom(toeic_v), round_custom(gradescore_v)]);
                        wsData.push(["data-first", 3, "표준편차", round_custom(toeic_dev), round_custom(gradescore_dev)]);
                        wsData.push(["data-first", 3, "최소값", toeic_min, gradescore_min]);
                        wsData.push(["data-first", 3, "1분위값", toeic_25, gradescore_25]);
                        wsData.push(["data-first", 3, "중앙값", toeic_50, gradescore_50]);
                        wsData.push(["data-first", 3, "3분위값", toeic_75, gradescore_75]);
                        wsData.push(["data-first", 3, "최대값", toeic_max, gradescore_max]);
                        wsData.push(rowEmpty);

                        wsData.push(getSubtitle("▶자격증 종류(국가기술/국가전문)"));
                        //wsData.push(['header-three', 4, '구분', '자격증', '', '']);
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
                                wsData.push(["data-first", 4, index + 1, itemtext, item.value, parseFloat(((item.value / licsum) * 100).toFixed(3))]);
                            });
                        wsData.push(rowEmpty);

                        wsData.push(getSubtitle("▶자격증 종류(민간공인/민간등록)"));
                        //wsData.push(['header-three', 4, '구분', '자격증', '', '']);
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
                                wsData.push(["data-first", 4, index + 1, item.name, item.value, parseFloat(((item.value / private_licsum) * 100).toFixed(3))]);
                            });
                        wsData.push(rowEmpty);
                        addSheet(wsData, "자격정보");

                        // 직무정보
                        ret = getTitle(3);
                        wsData = ret[0];
                        rowEmpty = ret[1];

                        wsData.push(["subtitle", 3, "▶대분류", "", ""]);
                        wsData.push(["header", 3, "분류명", "인원", "비율(%)"]);
                        var totalJobHighCnt = 0;
                        for (var i = 0; i < vm.job_high_list_excel.length; i++) {
                            totalJobHighCnt += vm.job_high_list_excel[i][1];
                        }
                        for (var i = 0; i < vm.job_high_list_excel.length; i++) {
                            var name = vm.job_high_list_excel[i][0];
                            var value = vm.job_high_list_excel[i][1];
                            wsData.push(["data-first", 3, name, value, parseFloat(((value / totalJobHighCnt) * 100).toFixed(2))]);
                        }
                        wsData.push(rowEmpty);

                        wsData.push(["subtitle", 3, "▶중분류", "", ""]);
                        wsData.push(["header", 3, "분류명", "인원", "비율(%)"]);
                        var totalJobMidCnt = 0;
                        for (var i = 0; i < vm.job_middle_list_excel.length; i++) {
                            totalJobMidCnt += vm.job_middle_list_excel[i][1];
                        }
                        for (var i = 0; i < vm.job_middle_list_excel.length; i++) {
                            var name = vm.job_middle_list_excel[i][0];
                            var value = vm.job_middle_list_excel[i][1];
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


                        ret = getTitle(6);
                        wsData = ret[0];
                        rowEmpty = ret[1];
                        wsData.push(getSubtitle("▶해외연수 여부"));
                        var oversea = nowData.oversea;
                        var overseakeys = _.keys(oversea);
                        var overseavalues = _.values(oversea);
                        var oversea_sum = _.sum(overseavalues);
                        wsData.push(["header", overseakeys.length + 1, "구분"].concat(overseakeys));
                        wsData.push(["data-first", overseakeys.length + 1, "인원"].concat(overseavalues));
                        var oversearatio = overseavalues.map((item, index) => {
                            return parseFloat(((item / oversea_sum) * 100).toFixed(3));
                        });
                        wsData.push(["data-first", overseakeys.length + 1, "비율(%)"].concat(oversearatio));
                        wsData.push(rowEmpty);

                        wsData.push(getSubtitle("▶현장실습, 교직과정이수, 편입 여부"));
                        wsData.push(["header-two-multi", 5, "구분", "예", "", "아니오", ""]);
                        wsData.push(["header", 5, "", "인원", "비율(%)", "인원", "비율(%)"]);
                        var internship = nowData.internship;
                        var internship_yes = internship["현장실습"] ? internship["현장실습"] : 0;
                        var internship_sum = _.sum(_.values(internship));
                        var internship_yes_ratio = internship["현장실습"] ? parseFloat(((internship["현장실습"] / internship_sum) * 100).toFixed(3)) : 0;
                        var internship_no = internship["해당없음"] ? internship["해당없음"] : 0;
                        var internship_no_ratio = internship["해당없음"] ? parseFloat(((internship["해당없음"] / internship_sum) * 100).toFixed(3)) : 0;
                        wsData.push(["data-first", 5, "현장실습여부", internship_yes, internship_yes_ratio, internship_no, internship_no_ratio]);
                        var teach = nowData.teach;
                        var teach_sum = _.sum(_.values(teach));
                        var teach_yes = teach["교직이수"] ? teach["교직이수"] : 0;
                        var teach_yes_ratio = teach["교직이수"] ? parseFloat(((teach["교직이수"] / teach_sum) * 100).toFixed(3)) : 0;
                        var teach_no = teach["해당없음"] ? teach["해당없음"] : 0;
                        var teach_no_ratio = teach["해당없음"] ? parseFloat(((teach["해당없음"] / teach_sum) * 100).toFixed(3)) : 0;
                        wsData.push(["data-first", 5, "교직이수여부", teach_yes, teach_yes_ratio, teach_no, teach_no_ratio]);
                        var transfer = nowData.transfer;
                        var transfer_yes = transfer["편입"] ? transfer["편입"] : 0;
                        var transfer_sum = _.sum(_.values(transfer));
                        var transfer_yes_ratio = transfer["편입"] ? parseFloat(((transfer["편입"] / transfer_sum) * 100).toFixed(3)) : 0;
                        var transfer_no = transfer["해당없음"] ? transfer["해당없음"] : 0;
                        var transfer_no_ratio = transfer["해당없음"] ? parseFloat(((transfer["해당없음"] / transfer_sum) * 100).toFixed(3)) : 0;
                        wsData.push(["data-first", 5, "편입여부", transfer_yes, transfer_yes_ratio, transfer_no, transfer_no_ratio]);
                        wsData.push(rowEmpty);
                        addSheet(wsData, "특성정보");

                        var wbout = XLSX.write(wb, {
                            bookType: "xlsx",
                            bookSST: true,
                            type: "binary",
                        });

                        if (this.isSelectedCorp) {
                            ws_name = "기업취업현황(기업조건)";
                        } else {
                            ws_name = "기업취업현황(회사명)";
                        }

                        var _date = moment().format("YYYYMMDD"); //moment().format('YYYYMMDDHHmm');
                        saveAs(
                            new Blob([s2ab(wbout)], {
                                type: "application/octet-stream",
                            }),
                            ws_name + "_" + _date + ".xlsx"
                        );
                    },

                    /**
                     * 기업 유형 선택 항목 초기화
                     */
                    clearCompanySelections: function (dataList) {
                        for (const lptm of dataList) {
                            let elem = document.getElementsByName(lptm.text)[0];
                            if (!elem) {
                                elem = document.getElementsByName(`comind_${lptm.value}`)[0];
                            }
                            if (!elem) {
                                elem = document.getElementsByName(`comtype_${lptm.value}`)[0];
                            }
							elem.classList.remove("on");
                        }
                    },
                    /**
                     * "기업 취업 현황" 검색 조건 탭 선택.
                     *
                     * @param {string} id ID
                     */
                    changeConditionTab: function (id) {
                        this.isSelectedCorp = ("conditionSearch" === id);
                        this.handleInit();
                    },

                    /**
                     * "기업유형" 아이템 선택.
                     *
                     * "기업조건별 검색"과 "회사명 검색"를 구분해서 동작.
                     *
                     * TODO. 선택 변수를 통일할 수도 있을 것 같다.
                     *
                     * @param {object} selected { text: 기업유형이름, value: 분류번호 }
                     */
                    selectCompanyType: function (selected) {
                        if (this.isSelectedCorp) {
                            this.checked_compTypeAll = false;

                            let index = this.selectedCompanyTypeList.indexOf(selected.value);
                            const elem = document.getElementsByName(`comtype_${selected.value}`)[0];

                            if (-1 < index) {
                                this.selectedCompanyTypeList.splice(index, 1);
                                if (elem.classList.contains("on")) {
                                    elem.classList.remove("on");
                                }
                            } else {
                                this.selectedCompanyTypeList.push(selected.value);
                                if (!elem.classList.contains("on")) {
                                    elem.classList.add("on");
                                }
                            }
                        }
                    },

                    /**
                     * "기업유형" 전부 선택
                     *
                     * @param {object} event `change` event
                     */
                    selectCompanyTypeAll: function (event) {
                        let checked = event.target.checked;
                        this.selectedCompanyTypeList = [];

                        for (const lptm of this.companyTypes) {
                            const elem = document.getElementsByName(`comtype_${lptm.value}`)[0];

                            if (checked) {
                                this.selectedCompanyTypeList.push(lptm.value);
                                elem.classList.add("on");
                            } else {
                                elem.classList.remove("on");
                            }
                        }
                    },

                    /**
                     * "산업분류" 목록 아이템 선택.
                     *
                     * "기업조건별 검색"과 "회사명 검색"를 구분해서 동작.
                     *
                     * TODO. 선택 변수를 통일할 수도 있을 것 같다.
                     *
                     * @param {object} selected { text : 산업분류이름, value : 산업분류코드 }
                     */
                    selectCompanyIndustryType: function (selected) {
                        if (this.isSelectedCorp) {
                            this.checked_compIndustTypeAll = false;

                            let index = this.selectedCompanyIndustryTypeList.indexOf(selected.value);
                            const elem = document.getElementsByName(`comind_${selected.value}`)[0];

                            if (-1 < index) {
                                this.selectedCompanyIndustryTypeList.splice(index, 1);
                                elem.classList.remove("on");
                            } else {
                                this.selectedCompanyIndustryTypeList.push(selected.value);
                                elem.classList.add("on");
                            }
                        }
                    },

                    /**
                     * "산업분류" 전부 선택
                     *
                     * @param {object} event `change` event
                     */
                    selectCompanyIndustryTypeAll: function (event) {
                        let checked = event.target.checked;
                        this.selectedCompanyIndustryTypeList = [];

                        for (const lptm of this.companyIndustryTypes) {
                            const elem = document.getElementsByName(`comind_${lptm.value}`)[0];

                            if (checked) {
                                this.selectedCompanyIndustryTypeList.push(lptm.value);
                                elem.classList.add("on");
                            } else {
                                elem.classList.remove("on");
                            }
                        }
                    },

                    /**
                     * "기업규모" 아이템 선택.
                     *
                     * "기업조건별 검색"과 "회사명 검색"를 구분해서 동작.
                     *
                     * TODO. 선택 변수를 통일할 수도 있을 것 같다.
                     *
                     * @param {object} selected { text: 기업규모이름, value: 분류번호 }
                     */
                    selectCompanyPersonnelSize: function (selected) {
                        if (this.isSelectedCorp) {
                            this.checked_compPersonnelSizeAll = false;

                            let index = this.selectedCompanyPersonnelSizeList.indexOf(selected.value);
                            const elem = document.getElementsByName(selected.text)[0];

                            if (-1 < index) {
                                this.selectedCompanyPersonnelSizeList.splice(index, 1);
                                elem.classList.remove("on");
                            } else {
                                this.selectedCompanyPersonnelSizeList.push(selected.value);
                                elem.classList.add("on");
                            }
                        }
                    },

                    /**
                     * "기업규모" 전부 선택
                     *
                     * @param {object} event `change` event
                     */
                    selectCompanyPersonnelSizeAll: function (event) {
                        let checked = event.target.checked;
                        this.selectedCompanyPersonnelSizeList = [];

                        for (const lptm of this.companyPersonnelSizes) {
                            const elem = document.getElementsByName(lptm.text)[0];

                            if (checked) {
                                this.selectedCompanyPersonnelSizeList.push(lptm.value);
                                elem.classList.add("on");
                            } else {
                                elem.classList.remove("on");
                            }
                        }
                    },

                    /**
                     * "기업지역" 목록 아이템 선택.
                     *
                     * "기업조건별 검색"과 "회사명 검색"를 구분해서 동작.
                     *
                     * TODO. 선택 변수를 통일할 수도 있을 것 같다.
                     *
                     * @param {object} selected { text: 기업지역이름, value: 분류번호 }
                     */
                    selectCompanyArea: function (selected) {
                        if (this.isSelectedCorp) {
                            this.checked_compAreasAll = false;

                            let index = this.selectedCompanyAreaList.indexOf(selected.value);
                            const elem = document.getElementsByName(selected.text)[0];

                            if (-1 < index) {
                                this.selectedCompanyAreaList.splice(index, 1);
                                elem.classList.remove("on");
                            } else {
                                this.selectedCompanyAreaList.push(selected.value);
                                elem.classList.add("on");
                            }
                        }
                    },

                    /**
                     * "기업지역" 전부 선택
                     *
                     * @param {object} event `change` event
                     */
                    selectCompanyAreaAll: function (event) {
                        let checked = event.target.checked;
                        this.selectedCompanyAreaList = [];

                        for (const lptm of this.companyAreas) {
                            const elem = document.getElementsByName(lptm.text)[0];

                            if (checked) {
                                this.selectedCompanyAreaList.push(lptm.value);
                                elem.classList.add("on");
                            } else {
                                elem.classList.remove("on");
                            }
                        }
                    },

                    /**
                     * "직무유형" 목록 아이템 선택.
                     *
                     * "기업조건별 검색"과 "회사명 검색"를 구분해서 동작.
                     *
                     * TODO. 선택 변수를 통일할 수도 있을 것 같다.
                     *
                     * @param {object} selected { text: 직무 대분류, value: 분류번호 }
                     */
                    selectJobtype: function (selected) {
                        if (this.isSelectedCorp) {
                            this.checked_jobTypeAll = false;

                            let index = this.selectedJobtypeList.indexOf(selected.value);
                            const elem = document.getElementsByName(selected.text)[0];

                            if (-1 < index) {
                                this.selectedJobtypeList.splice(index, 1);
                                elem.classList.remove("on");
                            } else {
                                this.selectedJobtypeList.push(selected.value);
                                elem.classList.add("on");
                            }
                        }
                    },

                    /**
                     * "직무유형" 전부 선택
                     *
                     * @param {object} event `change` event
                     */
                    selectJobtypeAll: function (event) {
                        let checked = event.target.checked;
                        this.selectedJobtypeList = [];

                        for (const lptm of this.jobtype_list) {
                            const elem = document.getElementsByName(lptm.text)[0];

                            if (checked) {
                                this.selectedJobtypeList.push(lptm.value);
                                elem.classList.add("on");
                            } else {
                                elem.classList.remove("on");
                            }
                        }
                    },

                    /**
                     * "회사 검색하기" 속성 팝업 보이기.
                     *
                     * @param {boolean} visible
                     */
                    showModal_companySearchingCond: function (visible) {
                        this.companyListSearchResults = [];

                        if (visible) {
                            this.dpstyle_companySearchingCond = "flex";
                        } else {
                            this.dpstyle_companySearchingCond = "none";
                        }

                    },

                    /**
                     * "연관 회사 목록 팝업 보이기"
                     *
                     * @param {boolean} visible
                     */
                    showModal_companyRelatedList: function (visible) {
                        if (visible) {
                            this.dpstyle_companyRelatedList = "flex";
                        } else {
                            this.dpstyle_companyRelatedList = "none";
                        }
                    },

                    /**
                     * "회사 검색하기" 팝업의 검색 결과 목록 보이기.
                     *
                     * @param {boolean} visible
                     */
                    showModal_companySearchingRes: function (visible) {
                        this.dpstyle_companySearchingRes = visible ? "flex" : "none";
                    },

                    /**
                     * "사용현황 통계 다운로드" 팝업 보이기
                     *
                     * @param {boolean} visible
                     */
                    showModal_usingStatisticsDownloads: function (visible) {
                        this.dpstyle_usingStatisticsDownloads = visible ? "flex" : "none";
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

                    /**
                     * 회사 목록 아이탬 선택시 호출.
                     *
                     * "기업조건별 검색"과 "회사명 검색"를 구분해서 동작.
                     * "기업조건별 검색"은 결과의 "취업 기업 목록"의 회사 목록 선택 기능.
                     *
                     * @param {number} index 선택한 회사의 인덱스
                     */
                    selectCompanyFromList: function (index) {
                        if (this.isSelectedCorp) {
                            let sel = this.company_list[index];
                            let cls = this.className_companyListItemSelected;

                            if (this.selectedCompany && this.selectedCompany.text === sel.name) {
                                // 이미 선택된 회사면 선택 해제
                                this.selectedCompany = null;
                            } else {
                                // 선택된 회사를 변경
                                this.selectedCompany = { text: sel.name, value: sel.value };
                            }

                            // 나머지 회사를 선택 해제 (자동으로 클래스가 업데이트됨)
                        } else {
                            this.selectedCompanyFromList = this.companyListSearchResults[index];
                        }
                    },

                    /**
                     * "회사 검색하기"의 회사 목록의 "선택" 버튼 클릭
                     */
                    selectSearchedCompany: function() {
                        this.handleInit();

                        this.selectedCompany = this.selectedCompanyFromList
                        this.companySearch = this.selectedCompany.text;

                        this.selectedCompanyFromList = null;
                        this.showModal_companySearchingCond(false);
                    },

                    /**
                     * 연관 기업 목록 아이템 선택시 호출
                     *
                     * @param {number} index
                     */
                    selectCompanyFromRelationList: function (index) {
                        this.selectedRelatedCompany = this.companyListRelation[index];
                    },

                    /**
                     * "연관 기업 목록 보기"의 "선택" 버튼 클릭
                     */
                    selectRelatedCompany: function() {
                        this.companySearch = this.selectedRelatedCompany.text[0]
                        this.selectedCompany = {
                            value : this.selectedRelatedCompany.value,
                            text : this.selectedRelatedCompany.text[0]
                        };
                        this.selectedRelatedCompany = null;
                        this.companyListRelation = [];

                        this.showModal_companyRelatedList(false);
                        this.handleSearchSubmit();
                    },

                    /**
                     * 문자열로 검색한 회사 목록에서 선택한 경우 표시
                     *
                     * @param string name
                     */
                    selectCompanyFromTextSearchingList: function(name, value) {
                        this.companySearch = name;
                        this.selectedCompany = {
                            text: name,
                            value: value,
                        };

                        this.isCompanyResultOpen = false;
                    },

                    /**
                     * "회사명 검색"의 "회사 검색하기" 버튼의 "검색" 클릭
                     *
                     * 선택한 조건에 맞는 회사 목록을 보입니다.
                     */
                    handleSearchCompanyListSubmit: function () {
                        /* 조건 선택 여부 확인 */
                        if (this.selectedCompanyArea == null &&
                            this.selectedCompanyIndustryType == null &&
                            this.selectedCompanyType == null &&
                            this.selectedCompanyPersonnelSize == null &&
                            this.selectedJobtype == null) {
                            alert("회사리스트 검색 조건을 선택해 주세요.");
                        } else {
                            let data = {};
                            if (this.selectedYear) {
                                let maxValueObject = this.selectedYear.reduce((max, item) => {
                                    if (!max || parseInt(item.value) > parseInt(max.value)) {
                                        return item;
                                    }
                                    return max;
                                }, null);

                                data["year"] = maxValueObject.value;
                            }
                            if (this.selectedCompanyArea) {
                                data["area"] = this.selectedCompanyAreaText;
                            }
                            if (this.selectedCompanyIndustryType) {
                                data["bookind"] = this.selectedCompanyIndustryType;
                            }
                            if (this.selectedCompanyType) {
                                data["comtype"] = this.selectedCompanyType;
                            }
                            if (this.selectedCompanyPersonnelSize) {
                                data["size"] = this.selectedCompanyPersonnelSize;
                            }
                            if (this.selectedJobtype) {
                                data["jobtype"] = this.selectedJobtype;
                            }

                            let url = url_findCompanyByCond();

                            /* this 객체를 ajax에서 접근하기 위함 */
                            const vm = this;

                            $.ajax({
                                type: "GET",
                                url: url,
                                dataType: "text",
                                async: true,
                                data: data,
                                success: function (data) {
                                    let comres = JSON.parse(data);
                                    let length = Object.keys(comres).length;
                                    if (length === undefined || length === 0) {
                                        alert("조건에 해당하는 회사가 없습니다.");
                                    } else {
                                        comres = getSeriesDataByValue(comres);
                                        comres = comres.filter((item) => item.text != null);
                                        comres = comres.filter((item) => item.text != ".");
                                        comres = charSortByArray(comres);

                                        vm.companyListSearchResults = comres;

                                        // 팝업 오픈
                                        vm.showModal_companySearchingRes(true);
                                    }
                                },
                            });
                        }
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
                                clickChart.series[0].data[index].update({
                                    borderColor: "#FF0000",
                                    selected: true,
                                    sliced: true,
                                });
                                clickChart.series[1].data[index].update({
                                    borderColor: "#FF0000",
                                    selected: true,
                                    sliced: true,
                                });
                            } else {
                                /* 해제 효과 */
                                clickChart.series[0].data[index].update({
                                    borderColor: "#FFFFFF",
                                    selected: false,
                                    sliced: false,
                                });
                                clickChart.series[1].data[index].update({
                                    borderColor: "#FFFFFF",
                                    selected: false,
                                    sliced: false,
                                });
                            }
                        }
                    },

                    /**
                     * 그래프의 회사 선택 효과 토글
                     *
                     * 그래프에서 클릭한 회사를 목록에서 토글하고, 해당 그래프 항목 효과 토글.
                     *
                     * @param {object} point 마우스가 가리키는 그래프 요소
                     * @param {object} selectedPoint 선택한 점의 목록
                     */
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
                     * 초기화.
                     *
                     * 모든 UI 및 내부 변수를 초기화 합니다.
                     */
                    handleInit: function () {
                        /* 선택 목록 초기화 */
                        this.companyTypes = arrayToObject(this.responseData, "COMTYPE");
                        this.companyIndustryTypes = companyIndustryTypeSummary(this.responseData);
                        this.companyIndustryTypes_length = this.companyIndustryTypes.length;
                        this.companyPersonnelSizes = _globalCompanyPersonnelSizesArray;
                        this.companyAreas = _globalCompanyAreaArray;
                        this.companyAreas_length = this.companyAreas.length;

                        /* "기업조건별 검색" 선택 버튼 초기화 */
                        this.checked_compTypeAll = false;
                        this.checked_compIndustTypeAll = false;
                        this.checked_compPersonnelSizeAll = false;
                        this.checked_compAreasAll = false;
                        this.checked_jobTypeAll = false;

                        this.clearCompanySelections(this.companyTypes);
                        this.clearCompanySelections(this.companyIndustryTypes);
                        this.clearCompanySelections(this.companyPersonnelSizes);
                        this.clearCompanySelections(this.companyAreas);
                        this.clearCompanySelections(this.jobtype_list);

                        /* 선택 항목 초기화 */
                        this.companySearch = "";
                        this.companySearchComtype = "";
                        this.companySearchInd = "";
                        this.selectedCompany = null;

                        this.selectedCompanyType = null;
                        this.selectedCompanyTypeList = [];
                        this.selectedCompanyTypeText = null;

                        this.selectedCompanyIndustryType = null;
                        this.selectedCompanyIndustryTypeList = [];
                        this.selectedCompanyIndustryTypeText = null;

                        this.selectedCompanyPersonnelSize = null;
                        this.selectedCompanyPersonnelSizeList = [];
                        this.selectedCompanyPersonnelSizeText = null;

                        this.selectedCompanyArea = null;
                        this.selectedCompanyAreaList = [];
                        this.selectedCompanyAreaText = null;

                        this.selectedJobtype = null;
                        this.selectedJobtypeList = [];
                        this.selectedJobtypeText = null;

                        /* 결과 표시 초기화 */
                        this.isResponse = false;
                    },

                    /**
                     * 기업 취업 현황 데이터 조회.
                     *
                     * "기업취업현황"의 "기업조건별 검색" 및 "회사명 검색"의 "검색" 클릭시 호출.
                     */
                    handleSearchSubmit: function () {
                        var validation = true;
                        var message = "";

                        if (this.isSelectedCorp) {
                            if (
                                this.selectedCompanyTypeList.length == 0 &&
                                this.selectedCompanyIndustryTypeList.length == 0 &&
                                this.selectedCompanyPersonnelSizeList.length == 0 &&
                                this.selectedCompanyAreaList.length == 0 &&
                                this.selectedJobtypeList.length == 0
                            ) {
                                validation = false;
                                message = "원하는 조건을 선택 한 뒤 검색해 주세요.";
                            }
                        } else {
                            if (!this.selectedCompany) {
                                validation = false;
                                message = "회사명 입력 후 돋보기 버튼을 눌러 회사명을 선택해주세요.";
                            }
                        }

                        if (this.selectedYear.length == 0) {
                            validation = false;
                            message = "조회 연도는 필수 선택 입니다.";
                        }

                        if (validation) {
                            this.isFetching = true;
                            this.requestData(this.isSelectedCorp);
                        } else {
                            alert(message);
                        }
                    },

                    filterBySelectedCategory: function(targetdata) {
                        let filtered_data = [];
                        let key_string = "";
                        let cats = [];

                        let selectcnt = 0;
                        if (this.selected_dept_subject !== "") {
                            selectcnt++;
                        }
                        if (this.selected_dept_lower !== "") {
                            selectcnt++;
                        }
                        if (this.selected_dept_mid !== "") {
                            selectcnt++;
                        }
                        if (this.selected_dept_upper !== "") {
                            selectcnt++;
                        }

                        let truecnt = 0;

                        if (this.selected_dept_upper != "" || this.selected_dept_mid != "" || this.selected_dept_lower != "" || this.selected_dept_subject != "") {
                            for (const itm in targetdata) {
                                if (targetdata.hasOwnProperty(itm)) {
                                    key_string = targetdata[itm].text;
                                    cats = key_string.split(" / ");

                                    let conditions = [
                                        this.selected_dept_subject !== "" ? this.selected_dept_subject === cats[3] : false,
                                        this.selected_dept_lower !== "" ? this.selected_dept_lower === cats[2] : false,
                                        this.selected_dept_mid !== "" ? this.selected_dept_mid === cats[1] : false,
                                        this.selected_dept_upper !== "" ? this.selected_dept_upper === cats[0] : false,
                                    ];

                                    // Check if any two conditions are true
                                    truecnt = conditions.filter(Boolean).length;

                                    if (truecnt == selectcnt) {
                                        filtered_data.push(targetdata[itm]);
                                    }
                                }
                            }

                            filtered_data = [...new Set(filtered_data)];
                        } else {
                            filtered_data = targetdata;
                        }

                        return filtered_data;
                    },

                    /**
                     * REST API Request.
                     *
                     * @param {boolean} condFlag 검색 조건 [ true 기업조건 검색, false 회사명 검색 ]
                     */
                    requestData: function (condFlag) {
                        let data = {};
                        let url = "";

                        if (condFlag) {
                            url = url_getStatByCond();

                            if (this.selectedYear.length != 0) {
                                let multiYear = this.selectedYear.map(item => item.value).join('|');
                                data["year"] = multiYear;
                            }
                            if (this.selectedCompanyTypeList.length != 0) {
                                data["comtype"] = this.selectedCompanyTypeList.join(",");
                            }
                            if (this.selectedCompanyIndustryTypeList.length != 0) {
                                data["comind"] = this.selectedCompanyIndustryTypeList.join(",");
                            }
                            if (this.selectedCompanyPersonnelSizeList.length != 0) {
                                data["size"] = this.selectedCompanyPersonnelSizeList.join("|");
                            }
                            if (this.selectedCompanyAreaList.length != 0) {
                                data["area"] = this.selectedCompanyAreaList.join(",");
                            }
                            if (this.selectedJobtypeList.length != 0) {
                                data["jobtypes"] = this.selectedJobtypeList.join(",");
                            }
                        } else {
                            url = url_getStatByComp();

                            if (this.selectedYear.length != 0) {
                                let multiYear = this.selectedYear.map(item => item.value).join('|');
                                data["year"] = multiYear;
                            }
                            if (this.selectedCompany) {
                                data["comnm"] = this.selectedCompany.value;
                            }
                        }

                        /* this 객체를 ajax에서 접근하기 위함 */
                        const vm = this;

                        vm.isResponse = false;
						vm.isFetching = true;

                        $.ajax({
                            type: "GET",
                            url: url,
                            dataType: "text",
                            data: data,
                            beforeSend: function (xhr) {
                                xhr.setRequestHeader("username", userid + "_" + userType);
                            },
                            success: function (response) {
                                const res = JSON.parse(response);
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

                                    vm.category_dept_mid = [];
                                    vm.category_dept_lower = [];
                                    vm.category_dept_subject = [];

                                    /* 학과(계열) 결과 목록에서 분류 생성하기 */
                                    if (res.dept != undefined && res.deptcol != undefined) {
                                        vm.academic_categories = (function(resdata) {
                                            function to_category(list) {
                                                const retval = {};

                                                for (const itm of list) {
                                                    const cats = itm.split(" / ");
                                                    let last_idx = cats.length - 1;

                                                    let current_lvl = retval;

                                                    if (last_idx == 3) {
                                                        vm.category_dept_mid.push(cats[1]);
                                                        vm.category_dept_lower.push(cats[2]);
                                                        vm.category_dept_subject.push(cats[3]);
                                                    } else if (last_idx == 2) {
                                                        vm.category_dept_mid.push(cats[1]);
                                                        vm.category_dept_lower.push(cats[2]);
                                                    }

                                                    for (let i = 0; i < last_idx; i++) {
                                                        current_lvl[cats[i]] = current_lvl[cats[i]] || {};
                                                        current_lvl = current_lvl[cats[i]];
                                                    }

                                                    current_lvl[cats[last_idx]] = cats[last_idx];
                                                }
                                                return retval;
                                            }

                                            return {
                                                dept : to_category(Object.keys(resdata.dept)),
                                                deptcol : to_category(Object.keys(resdata.deptcol))
                                            };
                                        })(res);
                                    } else {
                                        vm.academic_categories = {
                                            dept : {},
                                            deptcol : {}
                                        }
                                    }

                                    /* 학과 대계열 목록을 분류코드를 기준으로 정렬 합니다. */
                                    let unsorted = [];
                                    let keys = Object.keys(vm.academic_categories.dept);
                                    for (const text of keys) {
                                        unsorted.push({ text : text, value : _globalAcademicDeptCategories_upper[text] })
                                    }
                                    vm.category_dept_upper = (unsorted.slice().sort((a, b) => a.value.localeCompare(b.value))).map(item => item.text);
                                    vm.category_dept_mid = [...new Set(vm.category_dept_mid)];
                                    vm.category_dept_mid = vm.category_dept_mid.sort((a, b) => a.localeCompare(b, 'ko-KR'));
                                    vm.category_dept_lower = [...new Set(vm.category_dept_lower)];
                                    vm.category_dept_lower = vm.category_dept_lower.sort((a, b) => a.localeCompare(b, 'ko-KR'));
                                    vm.category_dept_subject = [...new Set(vm.category_dept_subject)];
                                    vm.category_dept_subject = vm.category_dept_subject.sort((a, b) => a.localeCompare(b, 'ko-KR'));


                                    vm.tmp_category_dept_mid = vm.category_dept_mid;
                                    vm.tmp_category_dept_lower = vm.category_dept_lower;
                                    vm.tmp_category_dept_subject = vm.category_dept_subject;

                                    /* 학과(계열별 조회) 목록 및 데이터 정리 */
                                    vm.category_deptcol_stats = (function(response) {
                                        function obj_to_list(obj) {
                                            let result = [];
                                            for (const item in obj) {
                                                result.push([item, obj[item]]);
                                            }
                                            return result;
                                        }

                                        function sort_objects(obj) {
                                            const sortedKeys = Object.entries(obj)
                                                .sort((a, b) => b[1] - a[1]) // 정렬 기준: value 값

                                            return sortedKeys;
                                        }

                                        function remap(obj, total_points) {
                                            let retval = [];

                                            /* points 값으로 내림차순 정렬 */
                                            const sorted_list = sort_objects(obj);

                                            for (const [key, points] of sorted_list) {
                                                let rate = (Math.round(points / total_points * 10000.0) / 100.0);
                                                retval.push({ text : key, point : points, value : `${rate}% (${points}명)` });
                                            }
                                            return retval;
                                        }

                                            function get_dept_type_stat(dept, total_points) {
                                                let [ upper, mid, lower, subject ] = [ {}, {}, {}, {} ];

                                                for (const [text, point] of dept) {
                                                    let items = text.split(" / ");

                                                    let uel = `${items[0]}`;
                                                    let mel = `${uel} / ${items[1]}`;
                                                    let lel = `${mel} / ${items[2]}`;
                                                    let sel = `${lel} / ${items[3]}`;

                                                    upper[uel] = (upper[uel] + point) || point;
                                                    mid[mel] = (mid[mel] + point) || point;
                                                    lower[lel] = (lower[lel] + point) || point;
                                                    subject[sel] = (subject[sel] + point) || point;
                                                }

                                                return {
                                                    upper : remap(upper, total_points),
                                                    mid : remap(mid, total_points),
                                                    lower : remap(lower, total_points),
                                                    subject : remap(subject, total_points),
                                                };
                                            }

                                            function calcTotal(obj) {
                                                return Object.values(obj).reduce((acc, cur) => acc + cur, 0);
                                            }

                                            let retval = {
                                                "all" : get_dept_type_stat(obj_to_list(response.dept), calcTotal(response.dept)),
                                                "associate" : { upper: [], mid: [], lower: [], subject: [] },
                                                "bachelor" : { upper: [], mid: [], lower: [], subject: [] },
                                                "master" : { upper: [], mid: [], lower: [], subject: [] },
                                                "doctor" : { upper: [], mid: [], lower: [], subject: [] }
                                            };

                                            let degree_key = Object.keys(response.dept_degree);

                                            for (const key of degree_key) {
                                                let obj = response.dept_degree[key];
                                                retval[_globalUniversityGradeMatch[key]] = get_dept_type_stat(obj_to_list(obj), calcTotal(obj));
                                            }

                                        return retval;
                                    })(res);

                                    /* 취업현황 요약에서 사용하기 위한 데이터 구성 */
                                    let get_top3_dept = function(allitems) {
                                        let top3items = (3 < allitems.length) ? allitems.slice(0, 3) : allitems;
                                        return top3items.map(function(item) {
                                            let idx = item.text.lastIndexOf("/") == -1 ? 0 : item.text.lastIndexOf("/") + 2;
                                            let itemtext = item.text.substr(idx);
                                            let itemvalue = item.value.substr(0, item.value.lastIndexOf("("));

                                            return { name: itemtext, value: itemvalue };
                                        });
                                    };

                                    vm.major_rank = get_top3_dept(vm.category_deptcol_stats.all.subject);
                                    vm.major_field_rank = get_top3_dept(vm.category_deptcol_stats.all.lower);

                                    // 슬라이더 초기화
                                    vm.slider_value = 50;
                                    vm.slider_text = "전체";

                                    vm.isCompany_list = vm.selectedCompany != null ? false : true;
                                    var cnt1 = 0;
                                    vm.company_list = [];

                                    var companyTop = [];
                                    for (var key in res.company_list) {
                                        var infos = key.split("_");
                                        var value = res.company_list[key];
                                        cnt1 += 1;

                                        if (cnt1 <= 1000) {
                                            vm.company_list.push({
                                                name: infos[1],
                                                count: `${round((value / res.count) * 100, 2)}%(${value}명)`,
                                                value: infos[0],
                                            });
                                        } else {
                                            break;
                                        }

                                        if (cnt1 <= 10) {
                                            companyTop.push([infos[1], value]);
                                        }
                                    }

                                    //setRenderPieChartClick("company", companyTop, Highcharts);
                                    let compaynChartopts = {
                                        labels : {
                                            plot: 'TOP ' + companyTop.length,
                                            y : '취업자수',
                                            flag : '취업자수'
                                        }
                                    };
                                    setRenderCategoricalChartWithOptions("company", companyTop, Highcharts, compaynChartopts, 500);

                                    if (vm.selectedYear == "2018") vm.isLicense = false;
                                    else vm.isLicense = true;

                                    if ($.isEmptyObject(res.license_nm)) vm.isPublicLicense = false;
                                    else vm.isPublicLicense = true;

                                    if ($.isEmptyObject(res.private_license_nm)) vm.isPrivateLicense = false;
                                    else vm.isPrivateLicense = true;

                                    vm.searchResult = res;
                                    if (vm.selectedCompany) {
                                        if (_.has(res, "COMPANYINFO")) {
                                            vm.company_info = res.COMPANYINFO;
                                            vm.isCompany_info = true;
                                            vm.isCompany_info_data = false;
                                            var empData = vm.company_info;
                                            var employeeModel = empData.YEAR;

                                            setRenderLineSimpleChart("employee_chart",
                                                _.map(employeeModel, function (item, index) {
                                                    return item+"년"
                                                }),
                                                empData.EMPLOYEECNT,
                                                Highcharts
                                            );
                                            setRenderColumnSimpleChart(
                                                "employee_multi_chart",
                                                _.map(employeeModel, function (item, index) {
                                                    return {
                                                        name: item+"년",
                                                        y: empData.ENTRANTCNT[index],
                                                    };
                                                }),
                                                _.map(employeeModel, function (item, index) {
                                                    return {
                                                        name: item+"년",
                                                        y: empData.RETIREECNT[index],
                                                    };
                                                }),
                                                _.map(employeeModel, function (item, index) {
                                                    return {
                                                        name: item+"년",
                                                        y: empData.EMPLOYEERATIO[index],
                                                    };
                                                }),
                                                Highcharts
                                            );

                                            var baseYear = `(${empData.YEAR.slice(-1)[0]} 기준)`;
                                            vm.company_info["BASEYEAR"] = baseYear;

                                            var _salcomp = getColumnChartSeries(getSeriesDataAndSort(empData.SALARYCOMPARE, (isSimple = true), (sort = false)));
                                            setSalaryColumnChart(
                                                "salary_compare_chart",
                                                _salcomp,
                                                Highcharts,
                                                empData.COMTYPE,
                                                empData.SECTOR,
                                                empData.INDNAME,
                                                260
                                            );

                                            var dataObj = _.sortBy(res.depttop3, "year");
                                            setRenderColumnSimpleChartByDept("employee_multi_chart_dept", dataObj, Highcharts);

                                            dataObj = _.sortBy(res.areatop3, "year");
                                            setRenderColumnSimpleChartByDept("employee_multi_chart_dept_area", dataObj, Highcharts);

                                            dataObj = res.fromarea;
                                            setRenderColumnSimpleChartByArea(
                                                "employee_multi_chart_com_area",
                                                _.map(dataObj, function (item, index) {
                                                    return {
                                                        name: item.year,
                                                        y: item.data[0],
                                                        z: item.name[0],
                                                    };
                                                }),
                                                _.map(dataObj, function (item, index) {
                                                    return {
                                                        name: item.year,
                                                        y: item.data[1],
                                                        z: item.name[1],
                                                    };
                                                }),
                                                Highcharts
                                            );

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
                                        } else {
                                            vm.isCompany_info = false;
                                            vm.isCompany_info_data = true;

                                            /* COMPANYINFO 데이터 없을 경우, 다음 차트에 데이터 없음을 표시 */
                                            setRenderLineSimpleChart("employee_chart", [], [], Highcharts);
                                            setRenderColumnSimpleChart("employee_multi_chart", [], [], [], Highcharts);
                                            setSalaryColumnChart("salary_compare_chart", [], Highcharts, null, null, null, 400);

                                            // COMPANYINFO 가 없는 경우에도 전공TOP3, 대학소재지 TOP3, 동일지역 출신 비율, 급여분포는 나와야 한다.
                                            var dataObj = _.sortBy(res.depttop3, "year");
                                            setRenderColumnSimpleChartByDept("employee_multi_chart_dept", dataObj, Highcharts);

                                            dataObj = _.sortBy(res.areatop3, "year");
                                            setRenderColumnSimpleChartByDept("employee_multi_chart_dept_area", dataObj, Highcharts);

                                            dataObj = res.fromarea;
                                            setRenderColumnSimpleChartByArea(
                                                "employee_multi_chart_com_area",
                                                _.map(dataObj, function (item, index) {
                                                    return {
                                                        name: item.year,
                                                        y: item.data[0],
                                                        z: item.name[0],
                                                    };
                                                }),
                                                _.map(dataObj, function (item, index) {
                                                    return {
                                                        name: item.year,
                                                        y: item.data[1],
                                                        z: item.name[1],
                                                    };
                                                }),
                                                Highcharts
                                            );

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
                                                true
                                            );
                                        }
                                    } else {
                                        vm.isCompany_info = false;
                                        vm.isCompany_info_data = false;
                                    }

                                    var getOverSeaPercent = function (total, data) {
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
                                    };
                                    vm.toeic_rate = round(res.toeic_percent);
                                    vm.avarageAnalysis = {
                                        gradescore_avg: res.gradescore.length > 0 ? round(_.sum(res.gradescore) / res.gradescore.length) : 0,
                                        txt_gradescore_avg: res.gradescore.length > 0 ? round(_.sum(res.gradescore) / res.gradescore.length) : 0,
                                        gradescore_percent: round(res.gradescore_percent),
                                        toeic_avg: res.toeic.length > 0 ? round(_.sum(res.toeic) / res.toeic.length) : 0,
                                        toeic_percent: round(res.toeic_percent),
                                        license_avg: round(_.sum(getObjectConvertArray(res.license_nm)) / res.count),
                                        license_percent: round(res.license_percent),
                                        oversea_avg: getOverSeaPercent(res.count, res.oversea).avg,
                                        oversea_percent: getOverSeaPercent(res.count, res.oversea).percentage,
                                        internship_avg: getOverSeaPercent(res.count, res.internship).avg,
                                        internship_percent: getOverSeaPercent(res.count, res.internship).percentage,
                                        transfer_avg: getOverSeaPercent(res.count, res.transfer).avg,
                                        transfer_percent: getOverSeaPercent(res.count, res.transfer).percentage,
                                        teach_avg: getOverSeaPercent(res.count, res.teach).avg,
                                        teach_percent: getOverSeaPercent(res.count, res.teach).percentage,
                                    };

                                    var total_fund = 0;
                                    var total_kind = 0;

                                    // 취업현황 요약에서 사용하기 위한 데이터 초기화
                                    if (vm.unifund_rank.length != 0) {
                                        vm.unifund_rank.length = [];
                                    }

                                    var uniFundtop3Data = [];

                                    // 치환 규칙 정의
                                    let substitutionRules = {
                                      "특별법국립": "국립",
                                      "특별법법인": "국립",
                                      "국립대법인": "국립"
                                    };

                                    // 치환 수행
                                    let university_fund_trans = {};
                                    Object.entries(res.university_fund).forEach(([key, value]) => {
                                      let substitutedKey = substitutionRules[key] || key;
                                      if (!university_fund_trans[substitutedKey]) {
                                        university_fund_trans[substitutedKey] = 0;
                                      }
                                      university_fund_trans[substitutedKey] += value;
                                    });

                                    university_fund_trans = Object.fromEntries(
                                      Object.entries(university_fund_trans).sort((a, b) => b[1] - a[1])
                                    );

                                    /*
                                    최종학력 - 설립
                                     */
                                    let fundvalues = _.map(_.keys(university_fund_trans), function (key, index) {
                                        if (index == 0) {
                                            vm.analysis_university_fund["name"] = key;
                                            vm.analysis_university_fund["value"] = university_fund_trans[key];
                                        }

                                        if (index < 3) {
                                            // 취업현황 요약에서 사용하기 위한 데이터
                                            uniFundtop3Data.push({
                                                name: key,
                                                value: university_fund_trans[key],
                                            });
                                        }

                                        total_fund += university_fund_trans[key];
                                        return [key, university_fund_trans[key]];
                                    });

                                    setRenderPieChartBySize("fund", fundvalues, Highcharts);

                                    vm.analysis_university_fund["value"] = ((vm.analysis_university_fund["value"] / total_fund) * 100).toFixed(1);

                                    if (uniFundtop3Data.length > 3) {
                                        uniFundtop3Data = uniFundtop3Data.slice(0, 3);
                                    }

                                    for (let i = 0; i < uniFundtop3Data.length; i++) {
                                        vm.unifund_rank.push({
                                            name: uniFundtop3Data[i].name,
                                            value: ((uniFundtop3Data[i].value / total_fund) * 100).toFixed(1) + "%",
                                        });
                                    }

                                    // 취업현황 요약에서 사용하기 위한 데이터 초기화
                                    if (vm.unikind_rank.length != 0) {
                                        vm.unikind_rank.length = [];
                                    }

                                    var uniKindtop3Data = [];

                                    // 치환 규칙 정의
                                    substitutionRules = {
                                      "전문대학(4년제)": "전문대학",
                                      "전문대학(3년제)": "전문대학",
                                      "전문대학(2년제)": "전문대학",
                                      "대학교": "대학"
                                    };

                                    // 치환 수행
                                    let university_kind_trans = {};
                                    Object.entries(res.university_kind).forEach(([key, value]) => {
                                      let substitutedKey = substitutionRules[key] || key;
                                      if (!university_kind_trans[substitutedKey]) {
                                        university_kind_trans[substitutedKey] = 0;
                                      }
                                      university_kind_trans[substitutedKey] += value;
                                    });

                                    university_kind_trans = Object.fromEntries(
                                      Object.entries(university_kind_trans).sort((a, b) => b[1] - a[1])
                                    );

                                    /*
                                    최종학력 - 학제
                                     */
                                    let kindvalues = _.map(_.keys(university_kind_trans), function (key, index) {
                                        if (index == 0) {
                                            vm.analysis_university_kind["name"] = key;
                                            vm.analysis_university_kind["value"] = university_kind_trans[key];
                                        }
                                        total_kind += university_kind_trans[key];

                                        if (index < 3) {
                                            // 취업현황 요약에서 사용하기 위한 데이터
                                            uniKindtop3Data.push({
                                                name: key,
                                                value: university_kind_trans[key],
                                            });
                                        }

                                        return [key, university_kind_trans[key]];
                                    });

                                    setRenderPieChartBySize("kind", kindvalues, Highcharts);

                                    vm.analysis_university_kind["value"] = ((vm.analysis_university_kind["value"] / total_kind) * 100).toFixed(1);

                                    if (uniKindtop3Data.length > 3) {
                                        uniKindtop3Data = uniKindtop3Data.slice(0, 3);
                                    }

                                    for (let i = 0; i < uniKindtop3Data.length; i++) {
                                        vm.unikind_rank.push({
                                            name: uniKindtop3Data[i].name,
                                            value: ((uniKindtop3Data[i].value / total_kind) * 100).toFixed(1) + "%",
                                        });
                                    }

                                    //출신학교 list
                                    vm.university_origin = getOriginUniversityRemapping(res.university, res.university_degree);
                                    vm.selectedOriginTabValue = "all";
                                    vm.renderGridAndChart("all", "origin");

                                    //출신학교 소재지 list
                                    vm.university_area = getOriginUniversityRemapping(res.university_area, res.university_area_degree);
                                    vm.selectedAreaTabValue = "all";
                                    vm.renderGridAndChart("all", "uniarea");

                                    if (vm.isProtection) {
                                        let doc = document.getElementById("deptCateLower");
                                        doc.checked = true;
                                        vm.selectDeptCategory("lower");
                                        vm.category_dept_selected = "lower";
                                    } else {
                                        let doc = document.getElementById("deptCateSubject");
                                        doc.checked = true;
                                        vm.selectDeptCategory("subject");
                                        vm.category_dept_selected = "subject";
                                    }

                                    /* 계열 선택 초기화 */
                                    vm.selected_dept_upper = "";
                                    vm.selected_dept_mid = "";
                                    vm.selected_dept_lower = "";
                                    vm.selected_dept_subject = "";

                                    //학과(계열) 학과 list
                                    vm.university_dept = getOriginUniversityRemapping(res.dept, res.dept_degree);
                                    vm.selectedDeptTabValue = "all";
                                    vm.renderGridAndChart("all", "dept");

                                    //학과(계열) 계열 list
                                    vm.university_deptcol = getOriginUniversityRemapping(res.deptcol, res.deptcol_degree);
                                    vm.selectedDeptcolTabValue = "all";
                                    vm.renderGridAndChart("all", "deptcol");

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

                                    //학점 line chart
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

                                    /*
                                    검색결과-특성정보
                                        20231114 수정. 편입여부 삭제, 해외 연수 종률별 비율 추가
                                     */
                                    /*
                                    해외 연수 여부
                                        20231114 수정.
                                            - "해당없음"은 색을 회색으로 처리, 나머지는 기본 색상
                                            - 항목 순서 항상 고정
                                     */
                                    const _item_na = "해당없음";
                                    const _item_overseaTypes = ["어학연수", "인턴십", "교환학생", "문화학술교류", _item_na];

                                    let _oversea = (function(oversea) {
                                        let retval = _.map(_item_overseaTypes, function(typ) {
											return { name : typ, y : 0, value : 0, color : undefined };
										});

                                        for (const item of oversea) {
                                            let idx = _item_overseaTypes.indexOf(item.text);
											if (-1 != idx) {
                                                retval[idx].y = item.value;
                                                retval[idx].value = item.point;
                                                retval[idx].color = item.text === _item_na ? "#808080" : undefined;
                                            }
                                        }
                                        return retval;
                                    })(getSeriesDataAndSort(res.oversea));
                                    setRenderColumnChartForColorful("overseaChart", _oversea, Highcharts, 260);

                                    /*
                                    해외 연수 종류별 비율
                                        20231114 추가.
                                            - "해당없음" 항목을 제외한 내용에 대해서만 비율 표시
                                     */
                                    let _overseaTypeValues = _.map(_oversea, function(item) {
                                        if (_item_na === item.name) {
                                            item = "";
                                        } else {
                                            if (0 === item.value) {
                                                item = "";
                                            }
                                        }
                                        return item;
                                    });

                                    setRenderPieChartByRate("overseaTypeRatioChart", _overseaTypeValues, Highcharts, 260);

                                    /*
                                    현장 실습 여부
                                        20231114 수정.
                                            - 표시 순서 고정. (예, 아니오)
                                            - "예"의 비율을 표시.
                                     */
                                    let _internship = [
                                        ["예", res.internship["현장실습"] ?? 0],
                                        ["아니오", res.internship[_item_na] ?? 0]
                                    ];
                                    setRenderHalfDounutChartNew("internChart", _internship, Highcharts, 260);

                                    /*
                                    교직 과정 이수 여부
                                        20231114 수정.
                                            - 표시 순서 고정. (예, 아니오)
                                            - "예"의 비율을 표시.
                                     */
                                    let _teachexp = [
                                        ["예", res.teach["교직이수"] ?? 0],
                                        ["아니오", res.teach[_item_na] ?? 0]
                                    ];
                                    setRenderHalfDounutChartNew("teachChart",_teachexp, Highcharts, 260);

                                    /*
                                    자격 정보 - 자격증 종류 (국가)
                                        20231113 수정. 차트 종류 변경, Top10으로 변경.
                                     */
                                    let top_n = 10;

                                    var licenseArray = getLicenseDataAndSort(res.license_nm);
                                    vm.license_list = licenseArray;

                                    var topNData = licenseArray;
                                    if (topNData.length > top_n) {
                                        topNData = licenseArray.slice(0, top_n);
                                    }

                                    let license_values = _.map(topNData, function (item) {
                                        var idx = item.text.lastIndexOf("/") == -1 ? 0 : item.text.lastIndexOf("/") + 2;
                                        var itemtext = item.text.substr(idx);
                                        return [itemtext, item.point];
                                    });

                                    // setRenderPieChart("licenseChart", license_values, Highcharts);

                                    let chartopts = {
                                        labels : {
                                            plot: 'TOP ' + license_values.length,
                                            y : '취업자수',
                                            flag : '취업자수'
                                        }
                                    };

                                    setRenderCategoricalChartWithOptions("licenseChart", license_values, Highcharts, chartopts, 500);

                                    /*
                                    자격 정보 - 자격증 종류 (민간)
                                        20231113 수정. 차트 종류 변경, Top10으로 변경.
                                     */
                                    var privatelicenseArray = getLicenseDataAndSort(res.private_license_nm);
                                    vm.privatelicense_list = privatelicenseArray;

                                    var privateTop3Data = privatelicenseArray;
                                    if (privateTop3Data.length > top_n) {
                                        privateTop3Data = privatelicenseArray.slice(0, top_n);
                                    }

                                    let private_license_values = _.map(privateTop3Data, function (item) {
                                        return [item.text, item.point];
                                    })

                                    // setRenderPieChart("privatelicenseChart", private_license_values, Highcharts);

                                    chartopts = {
                                        labels : {
                                            plot: 'TOP ' + private_license_values.length,
                                            y : '취업자수',
                                            flag : '취업자수'
                                        }
                                    };

                                    setRenderCategoricalChartWithOptions("privatelicenseChart", private_license_values, Highcharts, chartopts, 500);

                                    /*
                                    직무 정보 - 대분류, 중분류, 소분류
                                     */
                                    var total_job_high = 0;
                                    var total_job_mid = 0;
                                    var total_job_low = 0;
                                    var jobhightop3Data = [];
                                    var jobmidtop3Data = [];
                                    var joblowtop3Data = [];
                                    vm.job_high_rank = [];
                                    vm.job_mid_rank = [];
                                    vm.job_low_rank = [];

                                    var jobhighArray = getSeriesDataAndSort(res.jobhigh, true);
                                    vm.job_high_list = jobhighArray;
                                    vm.job_high_list_excel = _.map(jobhighArray, function (item) {
                                        if (_globalJobHighObject[item.text] !== undefined) {
                                            return [_globalJobHighObject[item.text], item.value];
                                        }
                                    }).filter(item => item !== undefined); // undefined인 항목을 필터링

                                    if (vm.job_high_list.length > 3) {
                                        jobhightop3Data = vm.job_high_list.slice(0, 3);
                                    } else {
                                        jobhightop3Data = vm.job_high_list;
                                    }

                                    setRenderPieChartBySize(
                                        "jobhigh",
                                        _.map(jobhighArray, function (item) {
                                            total_job_high += item.value;
                                            return [_globalJobHighObject[item.text], item.value];
                                        }),
                                        Highcharts
                                    );

                                    for (let i = 0; i < jobhightop3Data.length; i++) {
                                    	vm.job_high_rank.push({
                                    		name: _globalJobHighObject[jobhightop3Data[i].text],
                                    		value: ((jobhightop3Data[i].value / total_job_high) * 100).toFixed(1) + "%",
                                    	});
                                    }

                                    var jobmiddleArray = getSeriesDataAndSort(res.jobmiddle, true);
                                    vm.job_middle_list = jobmiddleArray;
                                    vm.job_middle_list_excel = _.map(jobmiddleArray, function (item) {
                                        if (_globalJobMiddleObject[item.text] !== undefined) {
                                            return [_globalJobMiddleObject[item.text], item.value];
                                        }
                                    }).filter(item => item !== undefined); // undefined인 항목을 필터링

                                    if (vm.job_middle_list.length > 3) {
                                        jobmidtop3Data = vm.job_middle_list.slice(0, 3);
                                    } else {
                                        jobmidtop3Data = vm.job_middle_list;
                                    }

                                    setRenderPieChartBySize(
                                        "jobmiddle",
                                        _.map(jobmiddleArray, function (item) {
                                            total_job_mid += item.value;
                                            return [_globalJobMiddleObject[item.text], item.value];
                                        }),
                                        Highcharts
                                    );

                                    for (let i = 0; i < jobmidtop3Data.length; i++) {
                                        vm.job_mid_rank.push({
                                            name: _globalJobMiddleObject[jobmidtop3Data[i].text],
                                            value: ((jobmidtop3Data[i].value / total_job_mid) * 100).toFixed(1) + "%",
                                        });
                                    }

                                    var tmpjoblowArray = getSeriesDataAndSort(res.joblow, true);
                                    if (tmpjoblowArray.length > 3) {
                                        joblowtop3Data = tmpjoblowArray.slice(0, 3);
                                    } else {
                                        joblowtop3Data = tmpjoblowArray;
                                    }

                                    _.map(tmpjoblowArray, function (item) {
                                        total_job_low += item.value;
                                    });

                                    for (let i = 0; i < joblowtop3Data.length; i++) {
                                        vm.job_low_rank.push({
                                            name: _globalJobLowObject[joblowtop3Data[i].text],
                                            value: ((joblowtop3Data[i].value / total_job_low) * 100).toFixed(1) + "%",
                                        });
                                    };

                                    var joblowArray = getJobLowDataAndSort(res.joblow, _globalJobLowObject).filter(item => item.text !== undefined);
                                    vm.job_low_list = joblowArray;
                                    vm.job_low_list_excel = _.map(joblowArray, function (item) {
                                      return [item.text, item.point];
                                    });

                                    /*
                                    직무 정보 - 소분류
                                        20231113 수정. 차트 종류 변경, Top10으로 변경
                                    */
                                    let joblowTopNData = joblowArray;
                                    if (joblowTopNData.length > top_n) {
                                        joblowTopNData = joblowArray.slice(0, top_n);
                                    }

                                    let joblow_values = _.map(joblowTopNData, function (item) {
                                        return [item.text, item.point];
                                    });

                                    // setRenderPieChart("joblow", joblow_values, Highcharts);
                                    chartopts = {
                                        labels : {
                                            plot: 'TOP ' + joblow_values.length,
                                            y : '취업자수',
                                            flag : '취업자수'
                                        }
                                    };

                                    setRenderCategoricalChartWithOptionsJobLow("joblow", joblow_values, Highcharts, chartopts, 500);

                                    // 직무정보 END

                                    // 검색 시 첫 탭 선택 되어지도록 처리
                                    vm.selectTab();
                                }
                            },
                            error: function (xhr) {},
                        });
                    },

                    /**
                     * 조회연도 및 회사 규모 등을 변경 시 회사명 선택 정보 초기화.
                     */
                    handleYearAndCompany: function () {
                        if (this.selectedCompany) {
                            this.selectedCompany = null;
                            this.companySearch = "";
                            this.companySearchComtype = "";
                            this.companySearchInd = "";
                            this.isCompanyResultOpen = false;
                            this.companySearchResults = [];
                            this.companyListSearchResults = [];
                            this.companyListSearchResults_length = 0;
                            this.companyListRelation = [];
                        }
                    },

                    /**
                     * "선택한 회사명으로 재검색" 버튼.
                     */
                    handleSearchCompanySubmit: function () {
                        if (this.selectedCompany === null) {
                            alert("선택 된 회사가 없습니다.");
                        } else {
                            /* 회사정보 보존 */
                            let selectedCompany = this.selectedCompany;

                            /* 회사명 검색 화면 활성화(함수에서 전체 초기화 함) */
                            this.changeConditionTab(`companySearch`);

                            /* 회사정보 복구 */
                            this.selectedCompany = selectedCompany;
                            this.companySearch = this.selectedCompany.text;

                            /* 화면 최상단으로 스크롤 이동 */
							this.checkVariable();

							this.handleSearchSubmit();
                        }
                    },

                    /**
                     * 문자열 기반, 단순 회사 조회
                     */
                    companySearchOnSubmit: function () {
                        const vm = this;
                        let searchText = vm.companySearch.replace(/\s+/g, '');
                        let selectedYear = "year";

                        let url = url_findCompany(selectedYear, searchText);

                        if (searchText.length > 0) {
                            $.ajax({
                                type: "GET",
                                url: url,
                                dataType: "text",
                                async: false,
                                success: function (data) {
                                    vm.companyFindResult = JSON.parse(data);
                                },
                            });
                            var comres = arrayToObject(vm.companyFindResult, "COMNM");
                            if (comres.length == 0) {
                                alert("일치하는 이름의 회사가 없습니다.");
                                this.selectedCompany = null;
                                this.isCompanyResultOpen = false;
                                this.companySearchResults = [];
                            } else {
                                var selectedYears = vm.selectedYear.map(year => year.value);
                                var tmpYearRes = comres.filter(item => selectedYears.includes(item.value));

                                if (tmpYearRes.length == 0) {
                                    var msg = "(";
                                    for (var key in comres) {
                                        msg += comres[key].value + "년, ";
                                    }
                                    msg = msg.slice(0, -2);
                                    alert("일치하는 이름의 회사가 없습니다. " + msg + " 검색가능)");
                                } else {
                                    var result = [];
                                    var tmpObject = tmpYearRes[0].text;

                                    for (var item in tmpObject) {
                                        result.push({
                                            businessno: item,
                                            text: tmpObject[item],
                                            value: item,
                                        });
                                    }

                                    result = charSortByArray(result);
                                    this.isCompanyResultOpen = true;
                                    this.companySearchResults = result;
                                }
                            }
                        } else {
                            alert("검색할 회사명을 작성 하셔야 합니다.");
                            this.selectedCompany = null;
                            this.isCompanyResultOpen = false;
                            this.companySearchResults = [];
                        }
                    },

                    handlePrint: function () {
                        if (this.isResponse) {
                            window.print();
                        } else {
                            alert("검색 후 결과 출력을 진행 해주시기 바랍니다.");
                        }
                    },

                    handleExport: function () {
                        if (this.isResponse) {
                            this.excelExport();
                        } else {
                            alert("검색 후 결과 저장을 진행 해주시기 바랍니다.");
                        }
                    },

                    renderGridAndChart: function (val, id) {
                        const vm = this;
                        if (id == "origin") {
                            if (val) {
                                /*
                                최종 학력 - 출신학교
                                    20231113 수정. 차트 종류 변경, Top10으로 변경
                                 */
                                let top_n = 10;
                                let top_n_brief = 3; // 취업 요약에서는 Top3 표시

                                this.university_origin_tab_list = this.university_origin[val];

                                let topNdata = this.university_origin_tab_list;
                                if (topNdata.length > top_n) {
                                    topNdata = this.university_origin_tab_list.slice(0, top_n);
                                }

                                // 취업현황 요약에서 사용하기 위한 데이터 초기화
                                if (vm.origin_rank.length != 0) {
                                    vm.origin_rank.length = [];
                                }

                                let seriesData = _.map(topNdata, function (item, index) {
                                    var idx = item.text.lastIndexOf("/") == -1 ? 0 : item.text.lastIndexOf("/") + 2;
                                    var itemtext = item.text.substr(idx);
                                    var itemvalue = item.value.substr(0, item.value.lastIndexOf("("));

                                    if (index == 0) {
                                        vm.analysis_university_origin["name"] = itemtext;
                                        vm.analysis_university_origin["value"] = itemvalue;
                                    }

                                    // 취업현황 요약에서 사용하기 위한 데이터
                                    if (vm.origin_rank.length < top_n_brief) {
                                        vm.origin_rank.push({
                                            name: itemtext,
                                            value: itemvalue,
                                        });
                                    }

                                    return [item.text, item.point];
                                });

                                // setRenderPieChart("origin", seriesData, Highcharts);
                                let chartopts = {
                                    labels : {
                                        plot: 'TOP ' + seriesData.length,
                                        y : '취업자수',
                                        flag : '취업자수'
                                    }
                                };

                                setRenderCategoricalChartWithOptions(id, seriesData, Highcharts, chartopts, 500);
                            }
                        } else if (id == "dept") {
                            if (val) {
                                /*
                                학과(계열) - 학과(계열 선택)
                                    20231113 수정. 차트 종류 변경, Top10으로 변경
                                 */
                                let top_n = 10;

                                let selected = vm.category_deptcol_stats[val];
                                vm.university_dept_tab_list = vm.filterBySelectedCategory(selected[vm.category_dept_selected]);
                                vm.university_dept_tab_list_length = vm.university_dept_tab_list.length;

                                let topNdata = vm.university_dept_tab_list;
                                if (topNdata.length > top_n) {
                                    topNdata = this.university_dept_tab_list.slice(0, top_n);
                                }

                                let seriesData = _.map(topNdata, function (item, index) {
                                    var idx = item.text.lastIndexOf("/") == -1 ? 0 : item.text.lastIndexOf("/") + 2;
                                    var itemtext = item.text.substr(idx);
                                    return [itemtext, item.point];
                                });

                                //학력 pie chart render
                                // setRenderPieChart(id, seriesData, Highcharts);
                                let chartopts = {
                                    labels : {
                                        plot: 'TOP ' + seriesData.length,
                                        y : '취업자수',
                                        flag : '취업자수'
                                    },
									type: 'column'
                                };

                                setRenderCategoricalChartWithOptions(id, seriesData, Highcharts, chartopts, 500);
                            }
                        } else if (id == "deptcol") {
                            if (val) {
                                /*
                                학과(계열) - 학과(계열별 조회)
                                    20231113 수정. 차트 종류 변경, Top10으로 변경
                                 */
                                let top_n = 10;

                                let selected = vm.category_deptcol_stats[val];
                                this.university_deptcol_tab_list = selected[this.category_deptcol_selected];

                                let topNdata = this.university_deptcol_tab_list;
                                if (topNdata.length > top_n) {
                                    topNdata = this.university_deptcol_tab_list.slice(0, top_n);
                                }

                                let seriesData = _.map(topNdata, function (item, index) {
                                    var idx = item.text.lastIndexOf("/") == -1 ? 0 : item.text.lastIndexOf("/") + 2;
                                    var itemtext = item.text.substr(idx);
                                    return [itemtext, item.point];
                                });

                                //학력 pie chart render
                                // setRenderPieChart("deptcol", seriesData, Highcharts);
                                let chartopts = {
                                    labels : {
                                        plot: 'TOP ' + seriesData.length,
                                        y : '취업자수',
                                        flag : '취업자수'
                                    },
									type: 'column'
                                };

                                setRenderCategoricalChartWithOptions(id, seriesData, Highcharts, chartopts, 500);
                            }
                        } else if (id == "uniarea") {
                            if (val) {
                                /*
                                최종학력 - 출신학교 소재지
                                    20231113 수정. 차트 종류 변경, Top10으로 변경
                                 */
                                let top_n = 10;
                                let top_n_brief = 3; // 취업 요약에서는 Top3 표시

                                this.university_area_tab_list = this.university_area[val];

                                let topNdata = this.university_area_tab_list;
                                if (topNdata.length > top_n) {
                                    topNdata = this.university_area_tab_list.slice(0, top_n);
                                }

                                // 취업현황 요약에서 사용하기 위한 데이터 초기화
                                if (vm.uniarea_rank.length != 0) {
                                    vm.uniarea_rank.length = [];
                                }

                                let seriesData = _.map(topNdata, function (item, index) {
                                    var idx = item.text.lastIndexOf("/") == -1 ? 0 : item.text.lastIndexOf("/") + 2;
                                    var itemtext = item.text.substr(idx);
                                    var itemvalue = item.value.substr(0, item.value.lastIndexOf("("));

                                    if (index == 0) {
                                        vm.analysis_university_area["name"] = itemtext;
                                        vm.analysis_university_area["value"] = itemvalue;
                                    }

                                    // 취업현황 요약에서 사용하기 위한 데이터
                                    if (vm.uniarea_rank.length < top_n_brief) {
                                        vm.uniarea_rank.push({
                                            name: itemtext,
                                            value: itemvalue,
                                        });
                                    }

                                    return [itemtext, item.point];
                                });

                                //학력 pie chart render
                                // setRenderPieChart("uniarea", seriesData, Highcharts);

                                let chartopts = {
                                    labels : {
                                        plot: 'TOP ' + seriesData.length,
                                        y : '취업자수',
                                        flag : '취업자수'
                                    },
									type: 'column'
                                };

                                setRenderCategoricalChartWithOptions(id, seriesData, Highcharts, chartopts, 500);
                            }
                        }
                    },

                    openCorpType(type) {
                        if (type == "I") {
                            this.isOpenCorpType = true;
                        } else {
                            this.isOpenCorpType = false;
                        }
                    },
                    openCorpSize(type) {
                        if (type == "I") {
                            this.isOpenCorpSize = true;
                        } else {
                            this.isOpenCorpSize = false;
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
                        var data = {};
                        data["what"] = this.usageExporterTypeValue;
                        data["start"] = moment(this.usageExporterStartDate).format("YYYY-MM-DD");
                        data["end"] = moment(this.usageExporterEndDate).format("YYYY-MM-DD");
                        data["agg"] = this.usageExporterDateValue;

                        /* this 객체를 ajax에서 접근하기 위함 */
                        const vm = this;

                        let url = url_getUsageExport();

                        $.ajax({
                            type: "GET",
                            url: url,
                            dataType: "text",
                            data: data,
                            success: function (response) {
                                var res = JSON.parse(response);
                                if (res.length == 0) {
                                    alert("검색 결과가 존재하지 않습니다.");
                                } else {
                                    // 엑셀 다운로드
                                    vm.usageExcelExport(res);
                                }
                            },
                        });
                    },

                    /**
                     * @description 사용현황 엑셀 출력
                     */
                    usageExcelExport: function (data) {
                        var nowData = data;
                        var ws_name = "사용현황 통계";
                        var wb = new Workbook();

                        var getSubtitle = (title) => {
                            return ["subtitle", 3, title, "", ""];
                        };

                        var dateObj = _.find(this.usageExporterDate, {
                            value: this.usageExporterDateValue,
                        });
                        var searchText = "";
                        searchText +=
                            _.find(this.usageExporterType, {
                                value: this.usageExporterTypeValue,
                            }).text + " / ";
                        searchText += moment(this.usageExporterStartDate).format("YYYY-MM-DD") + " / ";
                        searchText += moment(this.usageExporterEndDate).format("YYYY-MM-DD") + " / ";
                        searchText += dateObj.text;

                        var getTitle = (num) => {
                            var wsData = [];
                            var empty = Array.from("".repeat(num));
                            var rowEmpty = ["empty", num];
                            rowEmpty.concat(empty);
                            wsData.push(rowEmpty);
                            empty = Array.from("".repeat(num - 1));
                            var titleRow = ["bigtitle-five", num, "사용현황 통계", "", "", "", ""];
                            wsData.push(titleRow);
                            var searchRow1 = ["search-one-four", num, "검색 조건", `${searchText}`, "", "", ""];
                            wsData.push(searchRow1);
                            wsData.push(rowEmpty);
                            return [wsData, rowEmpty];
                        };

                        var addSheet = (wsData, ws_name) => {
                            var _sheet = json_to_sheet(wsData);
                            var ws = _sheet.data;
                            var wscols = [{ wch: 20 }, { wch: 20 }, { wch: 20 }, { wch: 20 }];

                            ws["!cols"] = wscols;
                            ws["!merges"] = _sheet.mergesArray;
                            wb.SheetNames.push(ws_name);
                            wb.Sheets[ws_name] = ws;
                        };

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
                            bookType: "xlsx",
                            bookSST: true,
                            type: "binary",
                        });
                        var _date = moment().format("YYYYMMDDHHmm");
                        saveAs(
                            new Blob([s2ab(wbout)], {
                                type: "application/octet-stream",
                            }),
                            ws_name + "_" + _date + ".xlsx"
                        );
                    },
                    /**
                     * @description 사용방법
                     */
                    handleManualStatus: function() {
                        this.isSelectedManual = true;
                        this.handleManual();
                    },
                    handleManual: function(step) {
                        this.isManualStep1 = false;
                        this.isManualStep2 = false;
                        this.isManualStep3 = false;
                        this.isManualStep4 = false;
                        this.isManualStep5 = false;

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
                            default:
                                this.isManualStep1 = true;
                        }
                    },
                    handleManualInit: function() {
                        this.isSelectedManual = false;
                    },
                    selectMajorTab: function() {
                        this.renderGridAndChart("all", "deptcol");
                    },
                    selectTab: function(target) {
                        this.isStatusContent = false;
                        this.isCompanyListContent = false;
                        this.isCompanyStatusContent = false;
                        this.isDegreeContent = false;
                        this.isMajorContent = false;
                        this.isQualificationContent = false;
                        this.isDutyContent = false;
						this.isCharacterContent = false;

                        switch (target) {
                            case 'status':
                                this.isStatusContent = true;
                                break;
                            case 'companyList':
                                this.isCompanyListContent = true;
                                break;
                            case 'companyStatus':
                                this.isCompanyStatusContent = true;
                                break;
                            case 'degree':
                                this.isDegreeContent = true;
                                break;
                            case 'major':
                                this.isMajorContent = true;
                                break;
                            case 'qualification':
                                this.isQualificationContent = true;
                                break;
                            case 'dutyInfo':
                                this.isDutyContent = true;
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
					// 페이지 진입 시 스크롤 TOP 고정
					checkVariable() {
					  if (window.NEXACROWEBBROWSER !== undefined) {
						window.NEXACROWEBBROWSER.parent.parent.parent.parent.parent.parent.parent.parent.parent.vscrollbar.set_pos(0);
					  } else {
						setTimeout(this.checkVariable, 100);
					  }
					},
					handleDeptSelect(dept) {
                        if (dept == "upper") {
                            this.selected_dept_mid = "";
                            this.selected_dept_lower = "";
                            this.selected_dept_subject = "";
                            this.tmp_category_dept_mid = [];
                            this.tmp_category_dept_lower = [];
                            this.tmp_category_dept_subject = [];

                            if (this.selected_dept_upper != "") {
                                let cate = this.academic_categories.dept[this.selected_dept_upper];

                                let depts1 = [];
                                let depts2 = [];
                                let depts3 = [];

                                Object.keys(cate).forEach(dept1 => {
                                    depts1.push(dept1);

                                    Object.keys(cate[dept1]).forEach(dept2 => {
                                        depts2.push(dept2);

                                        Object.keys(cate[dept1][dept2]).forEach(dept3 => {
                                            depts3.push(dept3);
                                        });
                                    });
                                });

                                this.tmp_category_dept_mid = [...new Set(depts1)];
                                this.tmp_category_dept_mid = this.tmp_category_dept_mid.sort((a, b) => a.localeCompare(b, 'ko-KR'));
                                this.tmp_category_dept_lower = [...new Set(depts2)];
                                this.tmp_category_dept_lower = this.tmp_category_dept_lower.sort((a, b) => a.localeCompare(b, 'ko-KR'));
                                this.tmp_category_dept_subject = [...new Set(depts3)];
                                this.tmp_category_dept_subject = this.tmp_category_dept_subject.sort((a, b) => a.localeCompare(b, 'ko-KR'));
                            } else {
                                this.tmp_category_dept_mid = this.category_dept_mid;
                                this.tmp_category_dept_lower = this.category_dept_lower;
                                this.tmp_category_dept_subject = this.category_dept_subject;
                            }
                        } else if (dept == "mid") {
                            this.selected_dept_lower = "";
                            this.selected_dept_subject = "";
                            this.tmp_category_dept_lower = [];
                            this.tmp_category_dept_subject = [];

                            if (this.selected_dept_mid != "") {
                                let cate = this.academic_categories.dept;

                                let depts3 = [];
                                let depts4 = [];

                                Object.keys(cate).forEach(dept1 => {
                                    Object.keys(cate[dept1]).forEach(dept2 => {
                                        if (dept2 == this.selected_dept_mid) {
                                            Object.keys(cate[dept1][dept2]).forEach(dept3 => {
                                                depts3.push(dept3);

                                                Object.keys(cate[dept1][dept2][dept3]).forEach(dept4 => {
                                                    depts4.push(dept4);
                                                });
                                            });
                                        }
                                    });
                                });

                                this.tmp_category_dept_lower = [...new Set(depts3)];
                                this.tmp_category_dept_lower = this.tmp_category_dept_lower.sort((a, b) => a.localeCompare(b, 'ko-KR'));
                                this.tmp_category_dept_subject = [...new Set(depts4)];
                                this.tmp_category_dept_subject = this.tmp_category_dept_subject.sort((a, b) => a.localeCompare(b, 'ko-KR'));
                            } else {
                                if (this.selected_dept_upper != "") {
                                    let cate = this.academic_categories.dept[this.selected_dept_upper];

                                    let depts1 = [];
                                    let depts2 = [];
                                    let depts3 = [];

                                    Object.keys(cate).forEach(dept1 => {
                                        depts1.push(dept1);

                                        Object.keys(cate[dept1]).forEach(dept2 => {
                                            depts2.push(dept2);

                                            Object.keys(cate[dept1][dept2]).forEach(dept3 => {
                                                depts3.push(dept3);
                                            });
                                        });
                                    });

                                    this.tmp_category_dept_mid = [...new Set(depts1)];
                                    this.tmp_category_dept_mid = this.tmp_category_dept_mid.sort((a, b) => a.localeCompare(b, 'ko-KR'));
                                    this.tmp_category_dept_lower = [...new Set(depts2)];
                                    this.tmp_category_dept_lower = this.tmp_category_dept_lower.sort((a, b) => a.localeCompare(b, 'ko-KR'));
                                    this.tmp_category_dept_subject = [...new Set(depts3)];
                                    this.tmp_category_dept_subject = this.tmp_category_dept_subject.sort((a, b) => a.localeCompare(b, 'ko-KR'));
                                } else {
                                    this.tmp_category_dept_mid = this.category_dept_mid;
                                    this.tmp_category_dept_lower = this.category_dept_lower;
                                    this.tmp_category_dept_subject = this.category_dept_subject;
                                }
                            }
                        } else if (dept == "lower") {
                            this.selected_dept_subject = "";
                            this.tmp_category_dept_subject = [];

                            if (this.selected_dept_lower != "") {
                                let cate = this.academic_categories.dept;

                                let depts4 = [];

                                Object.keys(cate).forEach(dept1 => {
                                    Object.keys(cate[dept1]).forEach(dept2 => {
                                        Object.keys(cate[dept1][dept2]).forEach(dept3 => {
                                            if (dept3 == this.selected_dept_lower) {
                                                Object.keys(cate[dept1][dept2][dept3]).forEach(dept4 => {
                                                    depts4.push(dept4);
                                                });
                                            }
                                        });
                                    });
                                });

                                this.tmp_category_dept_subject = [...new Set(depts4)];
                                this.tmp_category_dept_subject = this.tmp_category_dept_subject.sort((a, b) => a.localeCompare(b, 'ko-KR'));
                            } else {
                                if (this.selected_dept_mid != "") {
                                    let cate = this.academic_categories.dept;

                                    let depts3 = [];
                                    let depts4 = [];

                                    Object.keys(cate).forEach(dept1 => {
                                        Object.keys(cate[dept1]).forEach(dept2 => {
                                            if (dept2 == this.selected_dept_mid) {
                                                Object.keys(cate[dept1][dept2]).forEach(dept3 => {
                                                    depts3.push(dept3);

                                                    Object.keys(cate[dept1][dept2][dept3]).forEach(dept4 => {
                                                        depts4.push(dept4);
                                                    });
                                                });
                                            }
                                        });
                                    });

                                    this.tmp_category_dept_lower = [...new Set(depts3)];
                                    this.tmp_category_dept_lower = this.tmp_category_dept_lower.sort((a, b) => a.localeCompare(b, 'ko-KR'));
                                    this.tmp_category_dept_subject = [...new Set(depts4)];
                                    this.tmp_category_dept_subject = this.tmp_category_dept_subject.sort((a, b) => a.localeCompare(b, 'ko-KR'));
                                } else {
                                    if (this.selected_dept_upper != "") {
                                        let cate = this.academic_categories.dept[this.selected_dept_upper];

                                        let depts1 = [];
                                        let depts2 = [];
                                        let depts3 = [];

                                        Object.keys(cate).forEach(dept1 => {
                                            depts1.push(dept1);

                                            Object.keys(cate[dept1]).forEach(dept2 => {
                                                depts2.push(dept2);

                                                Object.keys(cate[dept1][dept2]).forEach(dept3 => {
                                                    depts3.push(dept3);
                                                });
                                            });
                                        });

                                        this.tmp_category_dept_mid = [...new Set(depts1)];
                                        this.tmp_category_dept_mid = this.tmp_category_dept_mid.sort((a, b) => a.localeCompare(b, 'ko-KR'));
                                        this.tmp_category_dept_lower = [...new Set(depts2)];
                                        this.tmp_category_dept_lower = this.tmp_category_dept_lower.sort((a, b) => a.localeCompare(b, 'ko-KR'));
                                        this.tmp_category_dept_subject = [...new Set(depts3)];
                                        this.tmp_category_dept_subject = this.tmp_category_dept_subject.sort((a, b) => a.localeCompare(b, 'ko-KR'));
                                    } else {
                                        this.tmp_category_dept_mid = this.category_dept_mid;
                                        this.tmp_category_dept_lower = this.category_dept_lower;
                                        this.tmp_category_dept_subject = this.category_dept_subject;
                                    }
                                }
                            }
                        }

                        let selected_tab = this.selectedDeptTabValue;
                        this.renderGridAndChart(selected_tab, "dept");
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
                    handleInput(newValues) {
                        this.isResponse = false;
                        if (newValues.length != 0) {
                            let flag = true;
                            for (let i = 0; i < this.selectedYear.length; i++) {
                                let year = this.selectedYear[i];
                                if (parseInt(year.value) >= 2021) {
                                    flag = false;
                                    break;
                                }
                            }

                            if (flag) {
                                if (this.isSelectedCorp) {
                                    if (this.selectJobFlag) {
                                        /*alert("2018~2020년은 직무정보가 없어 선택할 수 없습니다.");*/
                                        this.selectJobFlag = false;
                                    }
                                } else {
                                    this.selectJobFlag = false;
                                }
                            } else {
                                this.selectJobFlag = true;
                            }
                        } else {
                            this.selectJobFlag = true;
                        }

                        this.selectedYear.sort((a, b) => {
                          if (a.value < b.value) return 1;
                          if (a.value > b.value) return -1;
                          return 0;
                        });
                    }
                },
                created: function () {
                    this.isUIResponse = true;
                    if (userType === "1" || userType === "2") {
                        this.isUseUserGroup = true;
                    }

                    if (userType === "1" || userType === "2" || userType === "4" || userType === "7" || userType === "8" || userType === "9") {
                        this.isUserGroup = true;
                    } else {
                        this.isUserGroup = false;
                    }

                    this.getInformationAgree(userid);
                },
                mounted: function () {
                    this.isMounted = true;
                    if (paramComtype != "" || paramComind != "") {
                        // 기업조건 검색 화면으로 세팅
                        this.isSelectedSearchCorp = false;
                        this.isSelectedSearchComp = false;
                        this.isSelectedCorp = true;

                        this.checked_compTypeAll = false;

                        if (paramComtype != "") {
                            let comtypeArray = paramComtype.split(',');
                            for (let i = 0; i < comtypeArray.length; i++) {
                                let comtypeValue = comtypeArray[i];
                                let elem = document.getElementsByName("comtype_"+comtypeValue)[0];

                                this.selectedCompanyTypeList.push(comtypeValue);
                                if (!elem.classList.contains("on")) {
                                    elem.classList.add("on");
                                }
                            }
                        }


                        if (paramComind != "") {
                            let comindArray = paramComind.split(',');
                            for (let i = 0; i < comindArray.length; i++) {
                                let comindValue = comindArray[i];

                                if (comindValue == "기타") {
                                    continue;
                                }

                                let elem = document.getElementsByName("comind_"+comindValue)[0];

                                this.selectedCompanyIndustryTypeList.push(comindValue);
                                if (!elem.classList.contains("on")) {
                                    elem.classList.add("on");
                                }
                            }
                        }

                        this.checkVariable();

                        // 검색버튼 클릭
                        this.handleSearchSubmit();
                    } else if (paramComnm != "" && paramComvl != "") {
                        // 기업조건 검색 화면으로 세팅
                        this.isSelectedCorp = false;
                        this.selectedCompany = { text: paramComnm, value: paramComvl };
                        this.companySearch = paramComnm;

                        /* 화면 최상단으로 스크롤 이동 */
                        this.checkVariable();

                        setTimeout(this.handleSearchSubmit(), 2000);
                    } else {
						this.checkVariable();
					}
                },
                watch: {
                    /**
                     * watch : 큰 list 변수 처리
                     *
                     * list 자료형이 큰 경우, HTML 요소에서 vue를 length 접근시 속도가 저하됨
                     * 이를 예방하기 위해, 많은 내용을 담는 list의 경우,
                     * 변수를 갱신할 때, 해당 크기를 변수에 저장함
                     */
                    companyListSearchResults: function(val) {
                        this.companyListSearchResults_length = val.length;
                        this.companyListSearchResults_text = `총 ${val.length} 개`;
                    },

                    companyListRelation: function(val) {
                        this.companyListRelation_length = val.length;
                        this.companyListRelation_text = `총 ${val.length} 개`;
                    },

                    university_area_tab_list: function(val) {
                        this.university_area_tab_list_length = val.length;
                    },

                    //university_dept_tab_list: function(val) {
                    //    this.university_dept_tab_list_length = val.length;
                    //},

                    university_deptcol_tab_list: function(val) {
                        this.university_deptcol_tab_list_length = val.length;
                    },

                    university_origin_tab_list: function(val) {
                        this.university_origin_tab_list_length = val.length;
                    },

                    license_list: function(val) {
                        this.license_list_length = val.length;
                    },

                    privatelicense_list: function(val) {
                        this.privatelicense_list_length = val.length;
                    },

                    category_dept_upper: function(val) {
                        this.category_dept_upper_length = val.length;
                    },

                    /*category_dept_mid: function(val) {
                        this.category_dept_mid_length = val.length;
                    },
                    category_dept_lower: function(val) {
                        this.category_dept_lower_length = val.length;
                    },
                    category_dept_subject: function(val) {
                        this.category_dept_subject_length = val.length;
                    },*/

                    /**
                     *
                     */
                    isUIResponse: function (val) {
                        if (val) {
                            $("#module0").waitMe("hide");
                        } else {
                            run_waitMe($("#module0"), 1, "bounce");
                        }
                    },
                    isFetching: function (val) {
                        var loading = "bounce";
                        if (val) {
                            run_waitMe($("#wrap_container"), 1, loading, "1");
                        } else {
                            $("#wrap_container").waitMe("hide");
                        }
                    },
                    selectedOriginTabValue: function (val) {
                        this.renderGridAndChart(val, "origin");
                    },
                    selectedAreaTabValue: function (val) {
                        this.renderGridAndChart(val, "uniarea");
                    },
                    selectedDeptTabValue: function (val) {
                        this.renderGridAndChart(val, "dept");
                    },
                    selectedDeptcolTabValue: function (val) {
                        this.renderGridAndChart(val, "deptcol");
                    },
                    slider_value: function (val) {
                        var res = this.searchResult;
                        var _grade = getRateArray(res.count, res.gradescore, val);
                        var _toeic = getRateArray(res.count, res.toeic, val);
                        var _license = getRateArray(res.count, res.license_cnt, val);

                        this.avarageAnalysis.gradescore_avg = _grade.avg;
                        this.avarageAnalysis.toeic_avg = _toeic.avg;
                        this.avarageAnalysis.license_avg = _license.avg;

                        if (val < 50) {
                            this.slider_text = "하위 " + val + " %";
                        } else if (val == 50) {
                            this.slider_text = "전체";
                        } else {
                            this.slider_text = "상위 " + (100 - val) + " %";
                        }
                    },
                    /**
                     * watch: 기업유형
                     * @param {number} val 기업유형 구분값
                     */
                    selectedCompanyType: function (val) {
                        this.selectedCompanyTypeText = null;
                        if (val) {
                            var _find = _.find(this.companyTypes, {
                                value: val,
                            });
                            if (_find) {
                                setTimeout(() => {
                                    this.selectedCompanyTypeText = _find.text;
                                }, 100);
                            }
                        }
                    },
                    /**
                     * watch: 산업분류
                     * @param {number} val 산업분류 구분값
                     */
                    selectedCompanyIndustryType: function (val) {
                        this.selectedCompanyIndustryTypeText = null;
                        if (val) {
                            var _find = _.find(this.companyIndustryTypes, {
                                value: val,
                            });
                            if (_find) {
                                setTimeout(() => {
                                    this.selectedCompanyIndustryTypeText = _find.text;
                                }, 100);
                            }
                        }
                    },
                    /**
                     * watch: 기업규모
                     * @param {number} val 기업규모 구분값
                     */
                    selectedCompanyPersonnelSize: function (val) {
                        this.selectedCompanyPersonnelSizeText = null;
                        if (val) {
                            var _find = _.find(this.companyPersonnelSizes, {
                                text: val,
                            });
                            if (_find) {
                                setTimeout(() => {
                                    this.selectedCompanyPersonnelSizeText = _find.text;
                                }, 100);
                            }
                        }
                    },
                    /**
                     * watch: 기업지역
                     * @param {text} val 기업지역 구분문자열
                     */
                    selectedCompanyArea: function (val) {
                        this.selectedCompanyAreaText = null;
                        if (val) {
                            var _find = _.find(this.companyAreas, {
                                value: val,
                            });
                            if (_find) {
                                setTimeout(() => {
                                    this.selectedCompanyAreaText = _find.text;
                                }, 100);
                            }
                        }
                    },
                    /**
                     * watch: 직무유형대분류
                     * @param {number} val 직무유형대분류 구분값
                     */
                    selectedJobtype: function (val) {
                        this.selectedJobtypeText = null;

                        if (val) {
                            var _find = _.find(this.jobtype_list, {
                                text: val,
                            });
                            if (_find) {
                                setTimeout(() => {
                                    this.selectedJobtypeText = _find.text;
                                }, 100);
                            }
                        }
                    },

                    /**
                     * watch: "회사명 검색"의 검색 회사명 변수값 변경시 호출
                     */
                    companySearch: function (val) {
                        this.isCompanyResultOpen = false;
                        this.companyListRelation = [];

                        if (null == val) {
                            this.isCompanyResultOpen = false;
                        }
                    },

                    /**
                     * watch: "회사명 검색"의 회사 검색 결과 변수값 변경시 호출
                     */
                    selectedCompany: function(val) {
                        if (null !== val) {
                            let data = {};

                            let maxValueObject = this.selectedYear.reduce((max, item) => {
                                if (!max || parseInt(item.value) > parseInt(max.value)) {
                                    return item;
                                }
                                return max;
                            }, null);
                            data['year'] = maxValueObject.value;
                            data['conm'] = val.value;

                            let url = url_findCompanyByRelation();

                            const vm = this;

                            $.ajax({
                                type: "GET",
                                url: url,
                                dataType: "text",
                                async: true,
                                data: data,
                                success: function (response) {
                                    let compobjs = JSON.parse(response);

                                    if (0 < Object.keys(compobjs.related).length) {
                                        vm.companyListRelation = getSeriesDataByValue(compobjs.related);
                                    }

                                    vm.companySearchComtype = compobjs.target['COMTYPE'];
                                    vm.companySearchInd = _globalCompanyIndustryTypeSummaryObject[compobjs.target['BOOK_INDLCD']];
                                }
                            });
                        }
                    },
                },
            });
        },
    });
});
