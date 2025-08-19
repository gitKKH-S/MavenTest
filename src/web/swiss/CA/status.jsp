
<%-- Created by IntelliJ IDEA. User: coresight2 Date: 2021-10-04 Time: 오후 3:31 To change this template use File | Settings | File Templates. --%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%!
    public String  XSSFilter(String str){
        str = str.replaceAll("<","&lt;");
        str = str.replaceAll(">","&gt;");

        return str;
    }
%>
<%
    String userid = request.getParameter("USERID") == null ? "" : request.getParameter("USERID");
    String usertype = request.getParameter("USERGRPTYPE") == null ? "" : request.getParameter("USERGRPTYPE");
    String schcd = request.getParameter("SCHCD") == null ? "ALL" : request.getParameter("SCHCD");
    String orgcd = request.getParameter("ORGCD") == null ? "ALL" : request.getParameter("ORGCD");
    String comtype = request.getParameter("COMTYPE") == null ? "" : request.getParameter("COMTYPE");
    String comind = request.getParameter("COMIND") == null ? "" : request.getParameter("COMIND");
    String comnm = request.getParameter("COMNM") == null ? "" : request.getParameter("COMNM");
    String comvl = request.getParameter("COMVL") == null ? "" : request.getParameter("COMVL");

    /* DEBUG: 테스트용 */
    //userid = "kim487good@kedi.re.kr";
    //usertype = "2";
    //comtype = "";
    //comind = "";

    userid = XSSFilter(userid);
    usertype = XSSFilter(usertype);
    schcd = XSSFilter(schcd);
    orgcd = XSSFilter(orgcd);
    comtype = XSSFilter(comtype);
    comind = XSSFilter(comind);
    comnm = XSSFilter(comnm);
    comvl = XSSFilter(comvl);
%>

<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="keyword" content="한국교육개발원, 취업, 취업현황, 취업현황검색, 검색" style="user-select: auto" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="취업 분석" />

    <title>취업 현황</title>

    <meta name="description" content="취업 분석" />
    <link rel="canonical" href="" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="" />
    <link rel="apple-touch-icon-precomposed" href="" />
    <link rel="shortcut icon" sizes="196x196" href="" />
    <link rel="shortcut icon" href="" />

    <meta name="msapplication-TileImage" content="" />
    <meta name="msapplication-TileColor" content="#222222" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="apple-mobile-web-app-title" content="취업 분석" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="format-detection" content="telephone=no, address=no" />
    <meta property="og:title" content="취업 분석" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="" />
    <meta property="og:url" content="" />

    <link rel="stylesheet" type="text/css" href="./css/font/NotoSansKR/NotoSansKR.css" />
    <link rel="stylesheet" type="text/css" href="./css/font-awesome.min.css" />
    <link rel="stylesheet" type="text/css" href="./css/newfonts/NotoSansKR.css" />
    <link rel="stylesheet" type="text/css" href="./css/newfonts/Inter.css" />

    <link rel="stylesheet" type="text/css" media="screen" href="./css/default.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="./css/job_ui.css?ver=1112" />
    <link rel="stylesheet" type="text/css" media="screen" href="./css/style.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="./css/layout.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="./css/result.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="./css/search.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="./css/download.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="./css/modal.css" />

    <link rel="stylesheet" type="text/css" media="print" href="./css/print/jobui-print.css" />
    <link rel="stylesheet" type="text/css" media="print" href="./css/print/style-print.css" />
    <link rel="stylesheet" type="text/css" media="print" href="./css/print/layout-print.css" />
    <link rel="stylesheet" type="text/css" media="print" href="./css/print/result-print.css" />
    <link rel="stylesheet" type="text/css" media="print" href="./css/print/search-print.css" />
    <link rel="stylesheet" type="text/css" media="print" href="./css/print/download-print.css" />
    <link rel="stylesheet" type="text/css" media="print" href="./css/print/modal-print.css" />
    <link rel="stylesheet" type="text/css" media="print" href="./css/print/status-print.css">

    <script type="text/javascript" src="js/vue.min.js"></script>
    <script type="text/javascript" src="js/vuejs-datepicker/vuejs-datepicker.js"></script>
    <script type="text/javascript" src="js/vuejs-datepicker/ko.js"></script>
    <script type="text/javascript" src="js/vue-single-select.js"></script>
    <script type="text/javascript" src="js/vuejs-virtual-scroll-list/index.js"></script>

    <script type="text/javascript" src="js/moment.js"></script>
    <script type="text/javascript" src="js/common.js?ver=1105"></script>
    <script type="text/javascript" src="js/jquery-3.6.0.min.js"></script>
    <script type="text/javascript" src="js/lodash@4.17.21.min.js"></script>

    <script type="text/javascript" src="highcharts/highcharts.js"></script>
    <script type="text/javascript" src="highcharts/modules/variable-pie.js"></script>
    <script type="text/javascript" src="highcharts/modules/exporting.js"></script>
    <script type="text/javascript" src="highcharts/modules/export-data.js"></script>
    <script type="text/javascript" src="highcharts/modules/accessibility.js"></script>
    <script type="text/javascript" src="highcharts/modules/annotations.js"></script>
    <script type="text/javascript" src="highcharts/modules/histogram-bellcurve.js"></script>
    <script type="text/javascript" src="highcharts/highcharts-more.src.js"></script>
    <script type="text/javascript" src="highcharts/modules/boost.js"></script>

    <script type="text/javascript">
        Highcharts.setOptions({
            colors: [
              "#567BFF",
              "#26DAAF",
              "#FFA620",
              "#FF6B8A",
              "#BCE784",
              "#FF5733",
              "#9A77FF",
              "#00C9A7",
              "#FFC300",
              "#FF6384"
            ],
        });

        var apiURL = 'https://swissml.kedi.re.kr:8403/';
    </script>

    <script type="text/javascript" src="js/views/common.js"></script>

    <script type="text/javascript" src="js/waitMe.min.js"></script>
    <link type="text/css" href="css/waitMe.min.css" rel="stylesheet" />
    <script type="text/javascript">
        function run_waitMe(el, num, effect, opacity = 1) {
            text = "Loading Data...";
            fontSize = "";
            switch (num) {
                case 1:
                    maxSize = "";
                    textPos = "vertical";
                    break;
                case 2:
                    text = "";
                    maxSize = 30;
                    textPos = "vertical";
                    break;
                case 3:
                    maxSize = 30;
                    textPos = "horizontal";
                    fontSize = "18px";
                    break;
            }
            el.waitMe({
                effect: effect,
                text: text,
                bg: "rgba(255,255,255," + opacity + ")",
                color: "#000",
                maxSize: maxSize,
                waitTime: -1,
                source: "img.svg",
                textPos: textPos,
                fontSize: fontSize,
                onClose: function (el) { },
            });
        }
    </script>

    <!-- Import tooltip component -->
    <script type="text/javascript" src="js/excel-export/xlsx.core.min.js"></script>
    <script type="text/javascript" src="js/excel-export/test.js"></script>
    <script type="text/javascript" src="js/excel-export/Blob.js"></script>
    <script type="text/javascript" src="js/excel-export/FileSaver.js"></script>
    <style>
        .modal-body {
            -ms-overflow-style: none;
            /* IE and Edge */
            scrollbar-width: none;
            /* Firefox */
        }

        .modal-body::-webkit-scrollbar {
            display: none;
            /* Chrome, Safari, Opera*/
        }
    </style>

    <!-- HTTP 요청 파라메터 가져오기 -->
    <script type="text/javascript">
        /*
        HTTP 요청 파라메터 가져오기 (JSP ver.)
        */
        var userid = "<%=userid%>";
        var userType = "<%=usertype%>";
        var paramComtype = "<%=comtype%>";
        var paramComind = "<%=comind%>";
        var paramComnm = "<%=comnm%>";
        var paramComvl = "<%=comvl%>";
    </script>

    <!-- status 관련 CSS와 JS -->
    <link rel="stylesheet" type="text/css" media="screen" href="./css/status.css?ver=31">
    <script type="text/javascript" src="js/views/status.js?ver=5"></script>

    <script type="text/javascript" src="js/vue-multiselect.js"></script>
    <link rel="stylesheet" href="./css/vue-multiselect.css">
</head>

<body>
    <!--
        UI 시작
    -->
    <div class="totalWrapper paper" id="app" v-show="isMounted" style="display:none;">
        <!--
            머리말; 페이지 이동 링크;
                - "기업 취업 현황", "진로 예측", "사용현황 통계 다운로드", "사용방법"
         -->
        <div class="headerWrapper no-print">
            <div class="headerDeco1">
                <img src="images/topback.svg" alt="topback" />
            </div>
            <div class="headerDeco2">
                <img src="images/topback2.svg" alt="topback" />
            </div>
            <div class="btnWrapper">
                <a href="status.jsp?SCHCD=<%=schcd%>&ORGCD=<%=orgcd%>&USERID=<%=userid%>&USERGRPTYPE=<%=usertype%>">
                    <div class="haederLBtnActive">
                        <div class="headerCapStyle">
                            <img src="images/exclude.svg" class="headerBtnIcon" alt=""/>
                        </div>
                        <div>
                            <div class="headerCapTitle1">
                                <span>기업 취업 현황</span>
                                <img src="images/header_arrow.svg" class="headerArrowIcon" alt=""/>
                            </div>
                            <div class="headerCapTitle2">
                                기업조건 및 회사명으로<br/>취업 현황 조회
                            </div>
                        </div>
                    </div>
                </a>
                <a href="prediction.jsp?SCHCD=<%=schcd%>&ORGCD=<%=orgcd%>&USERID=<%=userid%>&USERGRPTYPE=<%=usertype%>">
                    <div class="headerLBtn">
                        <div class="headerCapStyle">
                            <img src="images/header_cap.svg" class="headerBtnIcon" style="padding-left: 6px;" alt=""/>
                        </div>
                        <div>
                            <div class="headerCapTitle1">
                                <span>진로 예측</span>
                                <img src="images/header_arrow2.svg" class="headerArrowIcon" alt=""/>
                            </div>
                            <div class="headerCapTitle2">
                                정보 입력을 통한<br/>진로 예측
                            </div>
                        </div>
                    </div>
                </a>
                <a href="employment.jsp?SCHCD=<%=schcd%>&ORGCD=<%=orgcd%>&USERID=<%=userid%>&USERGRPTYPE=<%=usertype%>">
                    <div class="headerLBtn">
                        <div class="headerCapStyle">
                            <img src="images/header_uni.svg" class="headerBtnIcon" style="padding-left: 1px;padding-bottom: 2px;" alt=""/>
                        </div>
                        <div>
                            <div class="headerCapTitle1">
                                <span>학교별 분석</span>
                                <img src="images/header_arrow2.svg" class="headerArrowIcon" alt=""/>
                            </div>
                            <div class="headerCapTitle2">
                                최근 3년간 학교·학과별<br/>
                                취업 현황 조회
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="rBtnWrapper">
                <!--<div class="headerRBtn" v-show="!isUserGroup" v-on:click="openNewWindow" >
                    <img src="images/coffee.svg" alt="survey" style="width: 30px;" alt=""/>
                    <span>설문조사</span>
                </div>-->
                <a v-on:click.prevent="showModal_usingStatisticsDownloads('false')" v-show="isUseUserGroup">
                    <div class="headerRBtn">
                        <img src="images/use_download.svg" alt="download" />
                        <span>사용현황 통계</span>
                    </div>
                </a>
                <div class="headerRBtn" v-on:click="handleManualStatus">
                    <img src="images/use.svg" alt="use" />
                    <span>사용방법</span>
                </div>
            </div>
            <div style="position: absolute; top: 10px; right: 30px;z-index:1" v-on:click="isAgree = true">
                <div class="headerRBtn2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                    >
                        <g clip-path="url(#clip0_85_1545)">
                            <path
                                d="M7 0C5.61553 0 4.26216 0.410543 3.11101 1.17971C1.95987 1.94888 1.06266 3.04213 0.532846 4.32122C0.003033 5.6003 -0.13559 7.00777 0.134506 8.36563C0.404603 9.7235 1.07129 10.9708 2.05026 11.9497C3.02922 12.9287 4.2765 13.5954 5.63437 13.8655C6.99224 14.1356 8.3997 13.997 9.67879 13.4672C10.9579 12.9373 12.0511 12.0401 12.8203 10.889C13.5895 9.73785 14 8.38447 14 7C13.998 5.1441 13.2599 3.36479 11.9475 2.05247C10.6352 0.74015 8.8559 0.0020073 7 0ZM7 12.8333C5.84628 12.8333 4.71846 12.4912 3.75918 11.8502C2.79989 11.2093 2.05222 10.2982 1.61071 9.23232C1.16919 8.16642 1.05368 6.99353 1.27876 5.86197C1.50384 4.73042 2.05941 3.69102 2.87521 2.87521C3.69102 2.0594 4.73042 1.50383 5.86198 1.27875C6.99353 1.05367 8.16642 1.16919 9.23232 1.6107C10.2982 2.05221 11.2093 2.79989 11.8502 3.75917C12.4912 4.71846 12.8333 5.84628 12.8333 7C12.8316 8.54658 12.2165 10.0293 11.1229 11.1229C10.0293 12.2165 8.54658 12.8316 7 12.8333Z"
                                fill="white"
                            />
                            <path
                                d="M7 3.5C7.18423 3.5 7.3664 3.5781 7.5 3.71196C7.6336 3.84582 7.7117 4.02797 7.7117 4.2122V7.2878C7.7117 7.47203 7.6336 7.65418 7.5 7.78804C7.3664 7.9219 7.18423 8 7 8C6.81577 8 6.63362 7.9219 6.5 7.78804C6.36638 7.65418 6.28827 7.47203 6.28827 7.2878V4.2122C6.28827 4.02797 6.36638 3.84582 6.5 3.71196C6.63362 3.5781 6.81577 3.5 7 3.5Z"
                                fill="white"
                            />
                            <path
                                d="M7 9.5C7.18423 9.5 7.3664 9.5781 7.5 9.71196C7.6336 9.84582 7.7117 10.028 7.7117 10.2122C7.7117 10.3964 7.6336 10.5786 7.5 10.7124C7.3664 10.8463 7.18423 10.9244 7 10.9244C6.81577 10.9244 6.63362 10.8463 6.5 10.7124C6.36638 10.5786 6.28827 10.3964 6.28827 10.2122C6.28827 10.028 6.36638 9.84582 6.5 9.71196C6.63362 9.5781 6.81577 9.5 7 9.5Z"
                                fill="white"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_85_1545">
                                <rect width="14" height="14" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <span>목적 외 활용 금지</span>
                </div>
            </div>
        </div>
        <!--
            페이지 제목; 공통 선택
                - "조회연도 선택"
        -->
        <div class="contentWrapper">
            <div class="contentTitle">
                <span>기업 취업 현황</span>
                <!-- 선택 버튼 목록: "조회연도 선택" -->
                <div class="yearWrapper">
                    <img src="./images/status-year-lookup.svg" alt="lookup" />
                    <span>조회연도</span>
                    <div style="min-width: 130px;">
                        <!-- <select class="btn-select" v-model="selectedYear" v-on:change="changeYear">
                            <option v-for="lptm in years" v-bind:key="lptm.value">{{ lptm.text }}</option>
                        </select> -->

                        <!-- DEV. 다중선택보류 -->
                        <vue-multiselect
                            v-model="selectedYear"
                            :options="years"
                            :multiple="true"
                            :close-on-select="true"
                            :searchable="false"
                            :show-labels="false"
                            placeholder="선택"
                            label="text"
                            track-by="text"
                            :preselect-first="true"
                            class="custom-multiselect"
                            @input="handleInput"
                        >
                        </vue-multiselect>
                    </div>
                </div>
            </div>
        </div>
        <!--
            선택 탭: "검색 조건"
        -->
        <div class="searchWrapper" id="module0">
            <div class="tagHeader">
                <div class="tabWrapper">
                    <!-- 입력 탭: "기업조건별 검색" -->
                    <input id="conditionSearch" type="radio" name="searchTabs" v-bind:checked="isSelectedCorp"
                        v-on:change="changeConditionTab(`conditionSearch`)" checked />
                    <label class="tabs" for="conditionSearch">
                        기업조건별 검색
                        <div class="activeTab iconHover2">
                            <!-- 툴 팁 : 탭 활성화시 -->
                            <div class="tooltip compSearchByCond">
                                <img src="./images/activeQIcon.svg" alt="questionMark" />
                                <div class="tooltiptext">
                                    기업 특성을 선택하여 조건에 맞는 기업에 취업한 졸업생의 정보를 검색합니다.
                                </div>
                            </div>
                        </div>
                        <div class="inactiveTab iconHover2">
                            <!-- 툴 팁 : 탭 비활성화시 -->
                            <div class="tooltip compSearchByCond">
                                <img src="./images/inActiveQIcon.svg" alt="questionMark" />
                                <div class="tooltiptext">
                                    기업 특성을 선택하여 조건에 맞는 기업에 취업한 졸업생의 정보를 검색합니다.
                                </div>
                            </div>
                        </div>
                    </label>
                    <!-- 입력 탭: "회사 검색" -->
                    <input id="companySearch" type="radio" name="searchTabs" v-bind:checked="!isSelectedCorp"
                        v-on:change="changeConditionTab(`companySearch`)" />
                    <label class="tabs" for="companySearch">
                        회사명 검색
                        <div class="iconHover2 activeTab">
                            <!-- 툴 팁 : 탭 활성화시 -->
                            <div class="tooltip compSearchByName">
                                <img src="./images/activeQIcon.svg" alt="questionMark" />
                                <div class="tooltiptext">
                                    회사명을 선택하여 해당 회사에 취업한 졸업생의 정보를 검색합니다.
                                </div>
                            </div>
                        </div>
                        <div class="iconHover2 inactiveTab ">
                            <!-- 툴 팁 : 탭 비활성화시 -->
                            <div class="tooltip compSearchByName">
                                <img src="./images/inActiveQIcon.svg" alt="questionMark" />
                                <div class="tooltiptext">
                                    회사명을 선택하여 해당 회사에 취업한 졸업생의 정보를 검색합니다.
                                </div>
                            </div>
                        </div>
                    </label>
                </div>
                <!-- 버튼: "초기화" -->
                <input id="check" type="checkbox" />
                <button class="resetBtn setCenter no-print" style="justify-content: center;" v-on:click="handleInit">
                    <label class="resetLabel" for="check" aria-label="check"></label>
                    <img src="./images/refreshIcon1.svg" alt="refreshIcon1" for="check" />
                    <span>초기화</span>
                </button>
            </div>
            <!--
                컨텐츠 묶음: "기업조건별 검색"
            -->
            <div class="wholeContentWrapper" v-show="isSelectedCorp">
                <div class="tagsWrapper">
                    <!-- 선택 인터페이스: "기업유형" -->
                    <div class="singleTags">
                        <div class="tagTitle">기업유형</div>
                        <!-- 체크박스: 전체 선택 -->
                        <div class="selectAll">
                            <input type="checkbox" id="check1" v-model="checked_compTypeAll"
                                v-on:change="selectCompanyTypeAll" />
                            <label for="check1" aria-label="check1"></label>
                            <span>전체선택</span>
                        </div>
                        <!-- 버튼 목록: 개별 선택 -->
                        <div class="tagBox">
                            <button class="tag cateTag" v-for="(lptm, i) in companyTypes" v-bind:key="lptm.value"
                                v-bind:name="'comtype_' + lptm.value"
                                v-bind:value="lptm.value" v-on:click="selectCompanyType(lptm)">
                                {{ lptm.text }}
                            </button>
                        </div>
                    </div>
                    <div class="verLine"></div>
                    <!-- 선택 인터페이스: "산업분류" -->
                    <div class="singleTags">
                        <div class="tagTitle">산업분류</div>
                        <!-- 체크박스: 전체 선택 -->
                        <div class="selectAll">
                            <input type="checkbox" id="check2" v-model="checked_compIndustTypeAll"
                                v-on:change="selectCompanyIndustryTypeAll" />
                            <label for="check2" aria-label="check2"></label>
                            <span>전체선택</span>
                        </div>
                        <!-- 버튼 목록: 개별 선택 -->
                        <div class="tagBox divWrapper">
                            <button class="tag divTag" v-for="(lptm, i) in companyIndustryTypes" v-bind:key="lptm.value"
                                v-if="i < (companyIndustryTypes_length - 1)"
                                v-bind:name="'comind_' + lptm.value"
                                v-bind:value="lptm.value" v-on:click="selectCompanyIndustryType(lptm)">
                                {{ lptm.text }}
                            </button>
                            <button class="tag divTag" style="width: 100% !important;margin-right: 0px;" v-else v-bind:key="lptm.value"
                                v-bind:name="'comind_' + lptm.value"
                                v-bind:value="lptm.value" v-on:click="selectCompanyIndustryType(lptm)">
                                {{ lptm.text }}
                            </button>
                        </div>
                    </div>
                    <div class="verLine"></div>
                    <!-- 선택 인터페이스: "기업규모" -->
                    <div class="singleTags">
                        <div class="tagTitle">기업규모</div>
                        <div class="selectAll">
                            <input type="checkbox" id="check3" v-model="checked_compPersonnelSizeAll"
                                v-on:change="selectCompanyPersonnelSizeAll" />
                            <label for="check3" aria-label="check3"></label>
                            <span>전체선택</span>
                        </div>
                        <div class="tagBox">
                            <button class="tag compPerSizeBtn" ref="companyPersonnelSizes"
                                v-for="lptm in companyPersonnelSizes" v-bind:key="lptm.value" v-bind:name="lptm.text"
                                v-bind:value="lptm.value" v-on:click="selectCompanyPersonnelSize(lptm)">
                                {{ lptm.text }}
                            </button>
                        </div>
                    </div>
                    <div class="verLine"></div>
                    <!-- 선택 인터페이스: "기업지역" -->
                    <div class="singleTags">
                        <div class="tagTitle">기업지역</div>
                        <div class="selectAll">
                            <input type="checkbox" id="check4" v-model="checked_compAreasAll"
                                v-on:change="selectCompanyAreaAll" />
                            <label for="check4" aria-label="check4"></label>
                            <span>전체선택</span>
                        </div>
                        <div class="tagBox locaWrapper">
                            <button class="tag locaTag" ref="companyAreas" v-for="(lptm, i) in companyAreas"
                                v-bind:key="lptm.value" v-if="i < (companyAreas_length - 1)" v-bind:name="lptm.text"
                                v-bind:value="lptm.value" v-on:click="selectCompanyArea(lptm)">
                                {{ lptm.text }}
                            </button>
                            <button class="tag locaTag longTag" ref="companyAreas" v-else v-bind:key="lptm.value"
                                v-bind:name="lptm.text" v-bind:value="lptm.value" v-on:click="selectCompanyArea(lptm)">
                                {{ lptm.text }}
                            </button>
                        </div>
                    </div>
                    <div class="verLine"></div>
                    <!-- 선택 인터페이스: "직무유형" -->
                    <div class="singleTags" style="width: 265px;">
                        <div class="tagTitle">직무유형
                            <dt class="tooltip">
                                <img class="tooltipimg" src="./images/inActiveQIcon.svg" alt="questionMark" style="top: 2px;" />
                                <div class="tooltiptext2" style="font-size: 16px;font-weight: 700;width: 340px;top: 165%;left: 230px;">
                                    직무정보는 2021년부터 데이터가 존재합니다.<br/>
                                    조건 선택 시 2021년부터 영향을 미칩니다.
                                </div>
                            </dt>
                        </div>
                        <div class="selectAll">
                            <input type="checkbox" id="checkJobType" v-model="checked_jobTypeAll"
                                   v-on:change="selectJobtypeAll" :class="{'red-background': !selectJobFlag}" :disabled="!selectJobFlag">
                            <label for="checkJobType" area-label="checkJobType"></label>
                            <span :class="{'red-color': !selectJobFlag}">전체선택</span>
                        </div>
                        <div class="tagBox jobtypeSelectionBox" style="width:100%;">
                            <button class="tag jobTypeTag"
                                    v-for="(lptm, i) in jobtype_list" v-bind:key="lptm.value"
                                    v-bind:name="lptm.text" v-bind:value="lptm.value"
                                    v-on:click="selectJobtype(lptm)" :class="{'red-color': !selectJobFlag}" :disabled="!selectJobFlag">
                                {{ lptm.text }}
                            </button>
                        </div>
                    </div>
                </div>
                <div class="contentFooter">
                    <!-- 버튼: 검색 -->
                    <button id="resultSearchBtn" class="searchBtn no-print" v-on:click="handleSearchSubmit" v-show="!isFetching">
                        검색
                    </button>
                    <button class="searchBtn" v-show="isFetching">
                        <i class="fa fa-refresh fa-spin"></i>검색 중
                    </button>
                    <!-- 컨텐츠 묶음 꼬리말: 안내문 -->
                    <span class="footerDes" v-bind:style="style_visible_to_usergroup">본 자료는 재학 및 졸업생의 취업 진로지도를 위한 자료입니다. 목적
                        외(홍보 등) 활용 시 서비스 제한, 현장 점검 등의 불이익을 받을 수
                        있습니다.</span>
                </div>
            </div>
            <!--
                컨턴츠 묶음: "회사명 검색"
            -->
            <div class="searchContentWrapper" v-show="!isSelectedCorp">
                <div class="searchUpper">
                    <!-- 텍스트 입력: 회사명 -->
                    <div class="searchTitle">회사명
                        <dt class="tooltip">
                            <img class="tooltipimg" src="./images/inActiveQIcon.svg" alt="questionMark" />
                            <div class="tooltiptext companyTextSearching">
                                회사명을 일부 입력 후 돋보기 버튼을 눌러 나오는 리스트에서 선택해주세요.<br>
                                명칭은 사업자번호에 따른 회사명으로 실제 통용되는 회사명과 차이가 있을 수 있습니다.
                            </div>
                        </dt>
                    </div>
                    <div class="flexBox">
                        <div class="searchBoxWrapper">
                            <div class="compNameSearchBar">
                                <input style="cursor: pointer;" placeholder="회사명을 입력해주세요." v-model="companySearch"
                                    v-on:keyup.enter="companySearchOnSubmit" />
                                <div v-on:click="companySearchOnSubmit">
                                    <img src="./images/searchIcon.svg" alt="search" class="searchingIcon" />
                                </div>
                            </div>

                            <!-- 텍스트 매칭 회사 목록 결과 표시 -->
                            <div class="CompanySearchTextDropDown" v-show="isCompanyResultOpen">
                                <virtual-list v-bind:size="12" v-bind:remain="25" style="height: auto; max-height: 300px;">
                                    <ul>
                                        <li class="CompanySearchTextItems" style="flex-direction: row;justify-content: space-between;cursor: pointer;" v-for="(cmpname, i) in companySearchResults" v-on:click="selectCompanyFromTextSearchingList(cmpname.text, cmpname.value)">
                                            <div class="CompanySearchTextDropDownItem">{{ cmpname.text }}</div>
                                            <div class="CompanySearchTextDropDownItem" style="padding-right: 2%;border-left: 1px solid #000;">{{ cmpname.businessno }}</div>
                                        </li>
                                    </ul>
                                </virtual-list>
                            </div>
                        </div>
                        <button class="compSearchBtn" v-on:click="showModal_companySearchingCond(true);">
                            <img src="./images/settings1.svg" alt="settings1" />
                            <span>회사 조건 검색하기</span>
                        </button>
                        <button class="compSearchBtn"
                            v-show="isRelativeCompanyExsist"
                            v-on:click="showModal_companyRelatedList(true);">
                            <img src="./images/settings1.svg" alt="settings1" />
                            <span>연관 회사 목록 보기</span>
                        </button>
                    </div>
                </div>
                <div class="searchLower">
                    <button class="searchBtn" v-on:click="handleSearchSubmit" v-show="!isFetching">
                        검색
                    </button>
                    <button class="searchBtn" v-show="isFetching">
                        <i class="fa fa-refresh fa-spin"></i>검색 중
                    </button>
                    <div v-bind:style="style_visible_to_usergroup">
                        본 자료는 재학 및 졸업생의 취업 진로지도를 위한 자료입니다. 목적 외(홍보 등) 활용 시 서비스 제한, 현장 점검 등의 불이익을 받을 수 있습니다.
                    </div>
                </div>
            </div>
        </div>
        <!--
            Modal 속성 팝업 : "사용현황 통계 다운로드"
        -->
        <div class="downloadModalBackStatus" v-bind:style="style_searchModalDownloads">
            <div class="downloadModalStatus">
                <div class="downloadModalHeader">
                    <div class="flexBox3">
                        <div class="searchModalTitle">사용현황 통계 다운로드</div>
                        <div class="downloadModalClose" style="cursor: pointer;" v-on:click="showModal_usingStatisticsDownloads(false);">
                            <img src="./images/close1.svg" alt="close" />
                        </div>
                    </div>
                </div>
                <div class="downloadModalContent">
                    <div class="downloadInnerContent">
                        <div class="downloadFlex">
                            <span>구분</span>
                            <select title="구분선택" class="statisticsDownloadType"
                                v-model="usageExporterTypeValue">
                                <option v-bind:key="i+Date.now()" v-bind:value="type.value" v-for="(type, i) in usageExporterType"
                                    v-bind:title="type.text">
                                    {{ type.text }}</option>
                            </select>
                        </div>
                        <div class="downloadFlex">
                            <span>조회기간</span>
                            <div class="flexBox setCenter" style="align-items: center;">
                                <input type="date" placeholder="시작일" format="yyyy-MM-dd" name="dateStartup"
                                    aria-label="dateStartup" v-model="beginDate" />
                                <div class="downloadHLine"></div>
                                <input type="date" placeholder="종료일" format="yyyy-MM-dd" name="dateFinish"
                                    aria-label="dateFinish" v-model="endDate" />
                            </div>
                        </div>
                        <div class="downloadFlex">
                            <span>조회간격</span>
                            <select title="조회간격" class="statisticsDownloadInterval" v-model="usageExporterDateValue">
                                <option v-bind:value="null_value">선택</option>
                                <option v-bind:key="i+Date.now()" v-bind:value="date.value" v-for="(date, i) in usageExporterDate"
                                    v-bind:title="date.text">
                                    {{ date.text }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="downloadModalFooter setCenter" style="justify-content: center;">
                        <button class="downloadFooterBtn" v-on:click="usageExporterSearchOnSubmit">
                            <img src="./images/downloadIcon1.svg" alt="downloadIcon1" />
                            다운로드
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--
            Modal 속성 팝업: "회사 조건 검색하기"
        -->
        <div class="searchModalBack compSearchModalBack" v-bind:style="style_searchModalBack">
            <div class="searchModal compSearchByCondModal">
                <div class="searchModalHeader">
                    <!-- 팝업 제목: "회사 조건 검색하기" -->
                    <div class="flexBox3">
                        <div class="searchModalTitle">회사 조건 검색하기</div>
                        <div v-on:click="showModal_companySearchingCond(false)">
                            <img src="./images/close1.svg" alt="close" />
                        </div>
                    </div>
                    <div class="flexBox3">
                        <!-- 조건 선택: "기업유형" -->
                        <select title="회사검색조건선택:기업유형"
                            class="compCondSelectCompType"
                            v-model="selectedCompanyType"
                            v-on:change="handleYearAndCompany">
                            <option v-bind:value="null_value">기업유형</option>
                            <option v-for="(type, i) in companyTypes"
                                    v-bind:key="type.value+Date.now()"
                                    v-bind:value="type.value"
                                    v-bind:title="type.text">
                                    {{ type.text }}
                            </option>
                        </select>
                        <!-- 조건 선택: "산업분류" -->
                        <select title="회사검색조건선택:산업분류"
                            class="compCondSelectIndType"
                            v-model="selectedCompanyIndustryType"
                            v-on:change="handleYearAndCompany">
                            <option v-bind:value="null_value">산업분류</option>
                            <option v-for="(type, i) in companyIndustryTypes"
                                    v-bind:key="type.value+Date.now()"
                                    v-bind:value="type.value"
                                    v-bind:title="type.text">
                                    {{ type.text }}
                            </option>
                        </select>
                        <!-- 조건 선택: "기업규모" -->
                        <select title="회사검색조건선택:기업규모"
                            class="compCondSelectCompPersonSize"
                            v-model="selectedCompanyPersonnelSize"
                            v-on:change="handleYearAndCompany">
                            <option v-bind:value="null_value">기업규모</option>
                            <option v-for="(type, i) in companyPersonnelSizes"
                                    v-bind:key="type.value+Date.now()"
                                    v-bind:value="type.value"
                                    v-bind:title="type.text">
                                    {{ type.text }}
                            </option>
                        </select>
                        <!-- 조건 선택: "기업지역" -->
                        <select title="회사검색조건선택:기업지역"
                            class="compCondSelectCompArea"
                            v-model="selectedCompanyArea"
                            v-on:change="handleYearAndCompany">
                            <option class="compCondSelectCompArea"
                                v-bind:value="null_value">기업지역</option>
                            <option v-for="(type, i) in companyAreas"
                                    v-bind:key="type.value+Date.now()"
                                    v-bind:value="type.value"
                                    v-bind:title="type.text">
                                    {{ type.text }}
                            </option>
                        </select>
                        <!-- 조건 선택: "직무유형"
                            20231114 수정. 보이지 않도록 수정 -->
                        <select v-show="false" title="회사검색조건선택:직무유형"
                            class="compCondSelectJobtype"
                            v-model="selectedJobtype"
                            v-on:change="handleYearAndCompany">
                            <option v-bind:value="null_value">직무유형</option>
                            <option v-for="(type, i) in jobtype_list"
                                    v-bind:key="type.value+Date.now()"
                                    v-bind:value="type.value"
                                    v-bind:title="type.text">
                                    {{ type.text }}
                            </option>
                        </select>
                        <!-- 버튼: "검색" -->
                        <button class="searchBtn2" v-on:click="handleSearchCompanyListSubmit" style="height: 46px;margin-left: 2px;">
                            검색
                        </button>
                    </div>
                </div>
                <!--
                    검색 팝업 꼬리말: "검색결과"
                -->
                <div class="searchModalFooter" v-bind:class="'scrollEnabled'" v-show="isCompanySearched">
                    <div class="searchFooterLine1">
                        <div class="flexBox">
                            <img src="./images/searchIcon.svg" alt="search" width="16" height="16" />
                            <div>검색결과</div>
                        </div>
                        <div>{{ companyListSearchResults_text }}</div>
                    </div>
                    <virtual-list v-bind:size="30" v-bind:remain="10" v-if="0 < companyListSearchResults_length">
                        <div v-for="(lptm, i) in companyListSearchResults" v-bind:key="lptm.value+Date.now()">
                            <div class="companyList">
                                <label class="container">
                                    <input type="radio" name="radio" v-on:click="selectCompanyFromList(i)">
                                    <div class="companyNo">{{ i + 1 }}</div>
                                    <div class="companyName">{{ lptm.text }}</div>
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                        </div>
                    </virtual-list>
                    <button class="selectBtn2" v-on:click="selectSearchedCompany">
                        선택
                    </button>
                </div>
            </div>
        </div>
        <!--
            Modal 속성 팝업: "연관 회사 목록"
                20231113 수정. 안내문구 수정,
        -->
        <div class="searchModalBack compRelListModalBack" v-bind:style="style_compRelListModal">
            <div class="searchModal compSearchByCondModal">
                <div class="searchModalHeader">
                    <!-- 팝업 제목: "연관 회사 목록" -->
                    <div class="flexBox3">
                        <div class="searchModalTitle">연관 회사 목록</div>
                        <div v-on:click="showModal_companyRelatedList(false)">
                            <img src="./images/close1.svg" alt="close" />
                        </div>
                    </div>
                    <div><h2>{{ companySearch }} [{{ companySearchComtype }}] [{{ companySearchInd }}]</h2></div>
                    <div>다음은 "기업유형", "산업분류"가 같은 회사로 종업원수가 비슷한 순서대로 나열한 목록입니다.</div>

                </div>
                <!--
                    검색 팝업 꼬리말: "연관 회사 목록"
                -->
                <div class="searchModalFooter" v-bind:class="'scrollEnabled_related'" v-show="isRelativeCompanyExsist">
                    <div class="searchFooterLine1">
                        <div class="flexBox">
                            <img src="./images/searchIcon.svg" alt="search" width="16" height="16" />
                            <div>연관 회사 검색결과</div>
                        </div>
                        <div>{{ companyListRelation_text }}</div>
                    </div>
                    <div v-for="(lptm, i) in companyListRelation" v-bind:key="lptm.value+Date.now()">
                        <div class="companyList">
                            <label class="container">
                                <input type="radio" name="radio" v-on:click="selectCompanyFromRelationList(i)">
                                <div class="companyNo">{{ i + 1 }}</div>
                                <div class="companyName">{{ lptm.text[0] }}
                                    <div class="companyType" style="width: 160px;text-align: right;padding-right: 20px;">{{ lptm.text[1] }}</div>
                                    <div class="companySize">{{ lptm.text[2] }}</div>
                                </div>
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <button class="selectBtn2" v-on:click="selectRelatedCompany">
                    선택
                </button>
            </div>
        </div>
        <!--
            꼬리말; 출력, 저장
        -->
        <div class="footerWrapper no-print" v-show="isUserGroup & isResponse">
            <!--<button class="footerBtn" v-on:click="handlePrint">
                <img src="./images/status-print-result.svg" alt="print result" />
                <span>결과 출력</span>
            </button>-->
            <button class="footerBtn" v-on:click="handleExport">
                <img src="./images/status-save-result.svg" alt="save result" />
                <span>검색 결과 저장</span>
            </button>
        </div>
        <div v-else class="footerWrapper normal">
            <div><br></div>
        </div>

        <!--
            결과; 탭
        -->
        <div class="resultWrapper" id="wrap_container"
            v-bind:style="style_resultWrapper" style="margin-top: 45px;">
            <!--<span class="discText" v-bind:style="style_visible_to_usergroup">
                &#x2605 화면에서는 기업이 1000개까지 출력되며, 결과 저장을 하시면 모든 리스트를 볼 수 있습니다.
            </span>-->
            <div class="resultTabWrapper">
                <!--
                    탭 버튼(라디오) 메뉴

                    "기업 취업 현황" 검색 조건 탭에 따라 첫 탭이 다름
                        "기업 조건별 검색" > "기업 목록"
                        "회사명 검색" > "희망 기업현황"
                -->
                <input id="status" type="radio" name="resultTabs" v-model="isStatusContent" :value="true" />
                <label class="resultTab no-print" for="status" v-on:click="selectTab('status')">취업현황 요약</label>

                <input id="companyList" type="radio" name="resultTabs" v-show="isSelectedCorp"/>
                <label class="resultTab no-print" for="companyList" v-show="isSelectedCorp" v-on:click="selectTab('companyList')">기업 목록</label>

                <input id="companyStatus" type="radio" name="resultTabs" v-show="!isSelectedCorp"/>
                <label class="resultTab no-print" for="companyStatus" v-show="!isSelectedCorp" v-on:click="selectTab('companyStatus')">기업 현황</label>

                <input id="degree" type="radio" name="resultTabs" v-show="!isProtection"/>
                <label class="resultTab no-print" for="degree" v-on:click="selectTab('degree')" v-show="!isProtection">최종학력</label>

                <input id="major" type="radio" name="resultTabs"/>
                <label class="resultTab no-print" for="major" v-on:click="selectTab('major')">학과(계열)</label>

                <input id="qualification" type="radio" name="resultTabs"/>
                <label class="resultTab no-print" for="qualification" v-on:click="selectTab('qualification')">자격 정보</label>

                <input id="dutyInfo" type="radio" name="resultTabs" v-show="selectJobFlag"/>
                <label class="resultTab no-print" for="dutyInfo" v-on:click="selectTab('dutyInfo')" v-show="selectJobFlag">직무 정보</label>

                <input id="character" type="radio" name="resultTabs" v-show="isUserGroup"/>
                <label class="resultTab no-print" for="character" v-show="isUserGroup" v-on:click="selectTab('character')">특성 정보</label>

                <!--
                    탭 내용 : 공통 > "취업현황 요약"
                -->
                <div id="status_content" v-show="isStatusContent" style="width:100%;">
                    <label class="printLabel" style="display:none; margin-top: 25px; margin-bottom: 13px; margin-left: 30px;">취업현황 요약</label>
                    <div class="colWrapper resultContentWrapper">

                        <div class="result_content_header">
                            <span class="range-slider__total" id="employment_total">
                                [&nbsp;대상자 수&nbsp;:&nbsp;{{ resultCount.toLocaleString() }}&nbsp;명&nbsp;]
                            </span>
                            <br><br><br>
                        </div>

                        <div id="employment_status_summary_rows">
                            <div class="statusWrapper statusLWrapper" style="padding-right: 38px;">
                                <div class="statusTitle statusUTitle">학력</div>
                                <div class="statusDegreeBoxWrapper" style="margin-bottom: 35px;" v-if="!isProtection">
                                    <div class="statusMajorWrapper" style="margin-bottom: 25px;">
                                        <div class="statusMajorBox">
                                            <div>출신학교</div>
                                            <div class="statusMajorBoxInner" v-for="(origin, index) in origin_rank"
                                                v-bind:key="origin.name+Date.now()">
                                                <div>
                                                    <span>{{ index + 1 }}</span>
                                                    <div class="statusMajorBoxInnerLine"></div>
                                                    <span>{{ origin.name }}</span>
                                                </div>
                                                <div>{{ origin.value }}</div>
                                            </div>

                                        </div>
                                        <div class="statusMajorBox">
                                            <div>출신학교 소재지</div>

                                            <div class="statusMajorBoxInner" v-for="(origin, index) in uniarea_rank"
                                                v-bind:key="origin.name+Date.now()">
                                                <div>
                                                    <span>{{ index + 1 }}</span>
                                                    <div class="statusMajorBoxInnerLine"></div>
                                                    <span>{{ origin.name }}</span>
                                                </div>
                                                <div>{{ origin.value }}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="statusMajorWrapper" style="margin-bottom: 25px;">
                                        <div class="statusMajorBox">
                                            <div>학제</div>
                                            <div class="statusMajorBoxInner" v-for="(origin, index) in unikind_rank"
                                                v-bind:key="origin.name+Date.now()">
                                                <div>
                                                    <span>{{ index + 1 }}</span>
                                                    <div class="statusMajorBoxInnerLine"></div>
                                                    <span>{{ origin.name }}</span>
                                                </div>
                                                <div>{{ origin.value }}</div>
                                            </div>

                                        </div>
                                        <div class="statusMajorBox">
                                            <div>설립</div>

                                            <div class="statusMajorBoxInner" v-for="(origin, index) in unifund_rank"
                                                v-bind:key="origin.name+Date.now()">
                                                <div>
                                                    <span>{{ index + 1 }}</span>
                                                    <div class="statusMajorBoxInnerLine"></div>
                                                    <span>{{ origin.name }}</span>
                                                </div>
                                                <div>{{ origin.value }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="statusDegreeBoxWrapperProtection" v-if="isProtection">
                                    비공개
                                </div>
                            </div>
                            <!--<div class="statusVLineWrapper">
                                <div class="statusVLine1" style="height: 428px;"></div>
                            </div>-->
                            <div class="statusWrapper statusRWrapper" style="padding-left: 39px;">
                                <div class="statusTitleWrapper">
                                    <div class="statusTitle">
                                        자격
                                        <span>(평균)</span>
                                    </div>
                                    <div class="statusGaugeWrapper no-print statusGauageGroup">
                                        <span class="statusGaugeText">하위</span>
                                        <div class="statusGaugeBar">
                                            <input class="range-slider__range" id="rangeSlider_certified" type="range"
                                                value="0" min="1" max="99" v-model="slider_value" aria-label="rangeSlider_certified" />

                                            <div class="range-slider_pointer" v-bind:style="style_sliderPointer">
                                                <div class="rangeSliderBubble">
                                                    <img src="./images/status-speech-bubble-shape.svg"
                                                    alt="speech bubble" />
                                                    <span>{{ slider_text }}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <span class="statusGaugeText">상위</span>
                                    </div>
                                </div>
                                <div class="statusBoxWrapper" style="margin-bottom: 31px;">
                                    <div class="statusQualBox">
                                        <div>
                                            <span>학점</span>
                                        </div>
                                        <div>
                                            <span>{{ avarageAnalysis.gradescore_avg }}</span>
                                            <span class="statusQualBoxScore">/100</span>
                                            <span>점</span>
                                        </div>
                                    </div>
                                    <div class="statusQualBox">
                                        <div>
                                            <span>토익</span>
                                            <span>{{ avarageAnalysis.toeic_percent }}% 보유</span>
                                        </div>
                                        <div>
                                            <span>{{ avarageAnalysis.toeic_avg }}</span>
                                            <span>점</span>
                                        </div>
                                    </div>
                                    <div class="statusQualBox">
                                        <div>
                                            <span>자격증</span>
                                            <span>{{ avarageAnalysis.license_percent }}% 보유</span>
                                        </div>
                                        <div>
                                            <span>{{ avarageAnalysis.license_avg }}</span>
                                            <span>개</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="statusTitle statusUTitle">
                                    학과(계열)
                                </div>
                                <div class="statusMajorWrapper" style="margin-bottom: 60px;">
                                    <div class="statusMajorBox" v-if="!isProtection">
                                        <div>학과</div>

                                        <div class="statusMajorBoxInner" v-for="(origin, index) in major_rank" v-bind:key="origin.name+Date.now()">
                                            <div>
                                                <span>{{ index + 1 }}</span>
                                                <div class="statusMajorBoxInnerLine"></div>
                                                <span>{{ origin.name }}</span>
                                            </div>
                                            <div>{{ origin.value }}</div>
                                        </div>
                                    </div>
                                    <div class="statusMajorBoxProtection" v-if="isProtection">
                                        비공개
                                    </div>

                                    <div class="statusMajorBox">
                                        <div>소계열</div>

                                        <div class="statusMajorBoxInner" v-for="(origin, index) in major_field_rank"
                                            v-bind:key="origin.name+Date.now()">
                                            <div>
                                                <span>{{ index + 1 }}</span>
                                                <div class="statusMajorBoxInnerLine"></div>
                                                <span>{{ origin.name }}</span>
                                            </div>
                                            <div>{{ origin.value }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="display: flex;flex-direction: row;width: 100%;height: 270px;" v-if="isUserGroup & selectJobFlag">
                            <div style="width: 847px;padding-left: 10px;">
                                <div class="statusTitle statusUTitle">
                                    직무
                                </div>
                                <div class="statusMajorWrapper" style="gap: 20px;">
                                    <div class="statusMajorBox">
                                        <div style="width: 256px;">대분류</div>
                                        <div class="statusMajorBoxInner" style="width: 256px;" v-for="(origin, index) in job_high_rank" v-bind:key="'job_high_'+index+origin.text+Date.now()">
                                            <div>
                                                <span>{{ index + 1 }}</span>
                                                <div class="statusMajorBoxInnerLine"></div>
                                                <span>{{ origin.name }}</span>
                                            </div>
                                            <div>{{ origin.value }}</div>
                                        </div>
                                    </div>

                                    <div class="statusMajorBox">
                                        <div style="width: 256px;">중분류</div>
                                        <div class="statusMajorBoxInner" style="width: 256px;" v-for="(origin, index) in job_mid_rank" v-bind:key="'job_mid_'+index+origin.text+Date.now()">
                                            <div>
                                                <span>{{ index + 1 }}</span>
                                                <div class="statusMajorBoxInnerLine"></div>
                                                <span>{{ origin.name }}</span>
                                            </div>
                                            <div>{{ origin.value }}</div>
                                        </div>
                                    </div>

                                    <div class="statusMajorBox">
                                        <div style="width: 256px;">소분류</div>
                                        <div class="statusMajorBoxInner" style="width: 256px;" v-for="(origin, index) in job_low_rank" v-bind:key="'job_low_'+index+origin.text+Date.now()">
                                            <div>
                                                <span>{{ index + 1 }}</span>
                                                <div class="statusMajorBoxInnerLine"></div>
                                                <span>{{ origin.name }}</span>
                                            </div>
                                            <div>{{ origin.value }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style="width: 250px;">
                                <div class="statusTitle statusLTitle" v-show="isUserGroup" style="margin-bottom: 33px;">
                                    특성
                                    <span>(비율)</span>
                                </div>
                                <div class="statusBoxWrapper" v-show="isUserGroup" style="display: flex;flex-flow: wrap;width: 100%;">
                                    <div class="statusCharacterBox">
                                        <span>해외연수</span>
                                        <div>
                                            <span>{{ avarageAnalysis.oversea_percent }}</span>
                                            <span>%</span>
                                        </div>
                                    </div>
                                    <div class="statusCharacterBox">
                                        <span>현장실습</span>
                                        <div>
                                            <span>{{ avarageAnalysis.internship_percent }}</span>
                                            <span>%</span>
                                        </div>
                                    </div>
                                    <div class="statusCharacterBox">
                                        <span>교직과정이수</span>
                                        <div>
                                            <span>{{ avarageAnalysis.teach_percent }}</span>
                                            <span>%</span>
                                        </div>
                                    </div>
                                    <div class="statusCharacterBox">
                                        <span>편입</span>
                                        <div>
                                            <span>{{ avarageAnalysis.transfer_percent }}</span>
                                            <span>%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="display: flex;flex-direction: column;width: 100%;padding-left: 10px;padding-right: 6px;" v-if="!isUserGroup & selectJobFlag">
                            <div class="statusTitle statusUTitle">
                                직무
                            </div>
                            <div class="statusMajorWrapper" style="gap: 20px;justify-content: space-between;">
                                <div class="statusMajorBox">
                                    <div style="width: 347px;">대분류</div>
                                    <div class="statusMajorBoxInner" style="width: 347px;" v-for="(origin, index) in job_high_rank" v-bind:key="'job_high_'+origin.text+Date.now()">
                                        <div style="width: 236px;">
                                            <span>{{ index + 1 }}</span>
                                            <div class="statusMajorBoxInnerLine"></div>
                                            <span>{{ origin.name }}</span>
                                        </div>
                                        <div>{{ origin.value }}</div>
                                    </div>
                                </div>

                                <div class="statusMajorBox">
                                    <div style="width: 347px;">중분류</div>
                                    <div class="statusMajorBoxInner" style="width: 347px;" v-for="(origin, index) in job_mid_rank" v-bind:key="'job_mid_'+origin.text+Date.now()">
                                        <div style="width: 236px;">
                                            <span>{{ index + 1 }}</span>
                                            <div class="statusMajorBoxInnerLine"></div>
                                            <span>{{ origin.name }}</span>
                                        </div>
                                        <div>{{ origin.value }}</div>
                                    </div>
                                </div>

                                <div class="statusMajorBox">
                                    <div style="width: 347px;">소분류</div>
                                    <div class="statusMajorBoxInner" style="width: 347px;" v-for="(origin, index) in job_low_rank" v-bind:key="'job_low_'+origin.text+Date.now()">
                                        <div style="width: 236px;">
                                            <span>{{ index + 1 }}</span>
                                            <div class="statusMajorBoxInnerLine"></div>
                                            <span>{{ origin.name }}</span>
                                        </div>
                                        <div>{{ origin.value }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="display: flex;flex-direction: row;width: 100%;height: 170px;" v-if="isUserGroup & !selectJobFlag">
                            <div>
                                <div class="statusTitle statusLTitle" v-show="isUserGroup" style="margin-bottom: 33px;">
                                    특성
                                    <span>(비율)</span>
                                </div>
                                <div class="statusBoxWrapper" v-show="isUserGroup" style="display: flex;flex-flow: wrap;width: 100%;">
                                    <div class="statusCharacterBox">
                                        <span>해외연수</span>
                                        <div>
                                            <span>{{ avarageAnalysis.oversea_percent }}</span>
                                            <span>%</span>
                                        </div>
                                    </div>
                                    <div class="statusCharacterBox">
                                        <span>현장실습</span>
                                        <div>
                                            <span>{{ avarageAnalysis.internship_percent }}</span>
                                            <span>%</span>
                                        </div>
                                    </div>
                                    <div class="statusCharacterBox">
                                        <span>교직과정이수</span>
                                        <div>
                                            <span>{{ avarageAnalysis.teach_percent }}</span>
                                            <span>%</span>
                                        </div>
                                    </div>
                                    <div class="statusCharacterBox">
                                        <span>편입</span>
                                        <div>
                                            <span>{{ avarageAnalysis.transfer_percent }}</span>
                                            <span>%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!--
                    탭 내용 : "기업조건별 검색" > "기업 목록"
                -->
                <div id="companyList_content" v-show="isCompanyListContent">
                    <label class="printLabel" style="display:none; margin-top: 25px; margin-bottom: 13px; margin-left: 30px;">기업 목록</label>
                    <div class="resultContentWrapper resultCompanyPieAndList" style="width:100%;">
                        <span class="discText" v-bind:style="style_visible_to_usergroup" style="margin-top: 16px;margin-bottom: -35px;">
                            ※ 기업은 최대 1,000개까지 출력되며, 1,000개 이상인 경우 검색결과저장을 통해 모든 리스트를 볼 수 있습니다.
                        </span>
                        <div class="expectContentHeader" style="margin-top: 50px;">
                            <div class="lineHeader">
                                <img src="./images/line55.svg" alt="line" />
                            </div>
                            <div class="headerContent">
                                <div>기업 목록</div>
                            </div>
                        </div>
                        <div class="conpLWRapper" style="width:550px;">
                            <div class="doChartBox1">
                                <div class="donutChartResult" id="company"></div>
                                <!--<div v-show="0 < company_list.length" class="donutChartCenterText3">TOP 5</div>-->
                            </div>
                        </div>
                        <div class="compVLine" style="width: 0px;"></div>
                        <div class="compRWrapper">
                            <span>전체</span>
                                <div class="compListBox">
                                    <div v-for="(lptm, i) in company_list" v-bind:key="'company_list_'+i+lptm.value+Date.now()"  v-show="0 < company_list.length"
                                        v-bind:class="[(i < companyPieTopCount) ? 'activeSingleCompList' : 'singleCompList', (selectedCompany && selectedCompany.text === lptm.name) ? className_companyListItemSelected : '']"
                                        v-bind:id="createId_companyListItems(lptm.name)"
                                        v-bind:name="elemName_companyListItems" v-bind:value="lptm.count"
                                        v-on:click="selectCompanyFromList(i)">
                                        <div>{{ i + 1 }}</div>
                                        <div>
                                            <div>{{ lptm.name }}</div>
                                            <div>{{ lptm.count }}</div>
                                        </div>
                                    </div>
                                </div>
                            <button class="reSearchBtn no-print" v-on:click="handleSearchCompanySubmit">
                                선택한 회사명으로 재검색
                            </button>
                        </div>
                    </div>
                </div>

                <!--
                    탭 내용 : "회사명 검색" > "기업 현황"
                -->
                <div id="companyStatus_content" v-show="isCompanyStatusContent">
                    <label class="printLabel" style="display:none; margin-top: 25px; margin-bottom: 13px; margin-left: 30px;">기업 현황</label>
                    <div class="resultContentWrapper">
                        <div class="lineHeaderCompStatus">
                            <img src="./images/line55.svg" alt="line" />
                        </div>

                        <div class="status_summary">
                            <div style="display: flex;flex-direction: row;align-items: flex-end;">
                                <h2 style="position: relative;margin: 20px 20px 20px 20px;color: rgba(0, 0, 0, 1);font-size: 22px;font-weight: 600;margin-left:0px;">기업현황</h2>
                                <h3 style="color: red;font-size: 0.8em;">( * 출처: ㈜이크레더블 )</h3>
                            </div>
                            <div v-if="isCompany_info">
                                <h3 style="font-weight: 600;">기업개요<span class=redtext>*</span></h3>
                                <h3 style="margin-bottom: 5px;">
                                    <strong>[ {{ company_info.COMNM }} ]</strong>
                                </h3>
                                <dl class="h_company">
                                    <dt>기업규모</dt>
                                    <dd>{{ company_info.COMTYPE }}</dd>
                                </dl>
                                <dl class="h_company">
                                    <dt>업종</dt>
                                    <dd>{{ company_info.SECTOR }}</dd>
                                </dl>
                                <dl class="h_company">
                                    <dt>표준산업분류</dt>
                                    <dd>{{ company_info.INDNAME }}</dd>
                                </dl>
                                <dl class="h_company">
                                    <dt>평균연봉</dt>
                                    <dd>{{ company_info.SALARY.toLocaleString() }}만원</dd>
                                </dl>
                                <dl class="h_company">
                                    <dt>기업상태</dt>
                                    <dd>{{ company_info.LIVEGRADE }}({{ company_info.LIVEDATE }}) </dd>
                                    <dt class="tooltip">
                                        <img class="tooltipimg" src="./images/inActiveQIcon.svg" alt="questionMark" />
                                        <div class="tooltiptext">
                                            기업상태는 (주)이크레더블의 기업 신용평가결과 입니다.<br>( 정상>관찰>주의1>주의2>주의3>경고>부도>휴업>폐업>해제 )
                                        </div>
                                    </dt>
                                </dl>
                            </div>
                            <div v-else>
                                <h3><strong>[ {{ companySearch }} ]</strong></h3>
                                <h2 class="no_companyinfo">데이터가 존재하지 않습니다.</h2>
                            </div>
                            <div class="status_summary_chart_wrap">
                                <h3 style="font-weight: 600;">기업정보 ( 최근 3년 )</h3>
                                <div class="h_company_chart_bx">
                                    <div class="h_company_chart">
                                        <h3>종업원<span class=redtext>*</span></h3>
                                        <div class="h_chart" id="employee_chart"></div>
                                    </div>
                                    <div class="h_company_chart">
                                        <h3>입사자/퇴사자<span class=redtext>*</span></h3>
                                        <div class="h_chart" id="employee_multi_chart"></div>
                                    </div>
                                </div>
                                <div class="h_company_chart_bx">
                                    <div class="h_company_chart">
                                        <h3>동종업계 급여비교 {{ company_info.BASEYEAR }}<span class=redtext>*</span></h3>
                                        <div class="h_chart" id="salary_compare_chart"></div>
                                    </div>
                                    <div class="h_company_chart">
                                        <h3>학과(계열) TOP3</h3>
                                        <div class="h_chart" id="employee_multi_chart_dept" v-show="!isProtection"></div>
                                        <div class="compProtection" v-show="isProtection">
                                            비공개
                                        </div>
                                    </div>
                                </div>
                                <div class="h_company_chart_bx">
                                    <div class="h_company_chart">
                                        <h3>동일지역 출신 비율</h3>
                                        <div class="h_chart" id="employee_multi_chart_com_area" v-show="!isProtection"></div>
                                        <div class="compProtection" v-show="isProtection">
                                            비공개
                                        </div>
                                    </div>
                                    <div class="h_company_chart">
                                        <h3>대학 소재지 TOP 3</h3>
                                        <div class="h_chart" id="employee_multi_chart_dept_area" v-show="!isProtection"></div>
                                        <div class="compProtection" v-show="isProtection">
                                            비공개
                                        </div>
                                    </div>
                                </div>
                                <div class="h_company_chart_bx">
                                    <div class="h_company_chart bottom_alone">
                                        <h3>급여분포 {{ company_info.BASEYEAR }}</h3>
                                        <div class="h_chart" id="salary_chart"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!--
                    탭 내용 : 공통 > "최종학력"
                -->
                <div id="degree_content" v-show="isDegreeContent & !isProtection">
                    <label class="printLabel" style="display:none; margin-top: 25px; margin-bottom: 13px; margin-left: 30px;">최종학력</label>
                    <div class="colWrapper resultContentWrapper">
                        <div class="singleDegree flexBox boxGap">
                            <div class="expectContentWrapper leftItem">
                                <div class="expectContentHeader">
                                    <div class="lineHeader">
                                        <img src="./images/line42.svg" alt="line" />
                                    </div>
                                    <div class="headerContent">
                                        <div>설립</div>
                                    </div>
                                </div>
                                <div class="chartBox1">
                                    <div class="donutChartResult" id="fund"></div>
                                </div>
                            </div>
                            <div class="expectContentWrapper rightItem">
                                <div class="expectContentHeader">
                                    <div class="lineHeader">
                                        <img src="./images/line42.svg" alt="line" />
                                    </div>
                                    <div class="headerContent">
                                        <div>학제</div>
                                    </div>
                                </div>
                                <div class="chartBox1">
                                    <div class="donutChartResult" id="kind"></div>
                                </div>
                            </div>
                        </div>
                        <div class="singleDegree flexBox boxGap">
                            <div class="expectContentWrapper">
                                <div class="expectContentHeader">
                                    <div class="lineHeader2" style="position: unset;">
                                        <img src="./images/line55.svg" alt="line" />
                                    </div>
                                    <div class="headerContent2 headerContent">
                                        <div>출신학교</div>
                                    </div>
                                </div>
                                <div class="flexBox2">
                                    <div class="doChartBox2 doChartBox1">
                                        <!-- Inserting Chart -->
                                        <div class="donutChartResult" id="origin"></div>
                                        <!-- 20231113 수정. 차트 종류 변경
                                            <div class="donutChartCenterText"
                                            v-show="0 !== university_origin_tab_list_length">TOP 3</div> -->
                                    </div>
                                    <div class="resultDataListWrapper">
                                        <div class="resultDataTabWrapper">
                                            <div class="resultDataTab"
                                                v-bind:class="{ on: selectedOriginTabValue == 'all' }">
                                                <a v-on:click.prevent="selectedOriginTabValue='all'">
                                                    <span>전체</span>
                                                </a>
                                            </div>
                                            <div class="resultDataTab"
                                                v-bind:class="{ on: selectedOriginTabValue == 'associate' }">
                                                <a v-on:click.prevent="selectedOriginTabValue='associate'">
                                                    <span>전문학사</span>
                                                </a>
                                            </div>
                                            <div class="resultDataTab"
                                                v-bind:class="{ on: selectedOriginTabValue == 'bachelor' }">
                                                <a v-on:click.prevent="selectedOriginTabValue='bachelor'">
                                                    <span>학사</span>
                                                </a>
                                            </div>
                                            <div class="resultDataTab"
                                                v-bind:class="{ on: selectedOriginTabValue == 'master' }">
                                                <a v-on:click.prevent="selectedOriginTabValue='master'">
                                                    <span>석사</span>
                                                </a>
                                            </div>
                                            <div class="resultDataTab"
                                                v-bind:class="{ on: selectedOriginTabValue == 'doctor' }">
                                                <a v-on:click.prevent="selectedOriginTabValue='doctor'">
                                                    <span>박사</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="resultDataContentWrapper">
                                            <div class="resultDataContent"
                                                v-show="0 < university_origin_tab_list_length"
                                                v-for="(origin, index) in university_origin_tab_list"
                                                v-bind:key="origin.name+Date.now()"
                                                v-bind:class="(index < 10) ? 'resultDataContentActive' : 'resultDataContent'">
                                                <div>{{ index + 1 }}</div>
                                                <div>{{ origin.text }}</div>
                                                <div>{{ origin.value }}</div>
                                            </div>
                                            <div class="resultListNoData"
                                                v-show="0 === university_origin_tab_list_length">
                                                데이터가 존재하지 않습니다.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="singleDegree flexBox boxGap">
                            <div class="expectContentWrapper">
                                <div class="expectContentHeader">
                                    <div class="lineHeader2" style="position: unset;">
                                        <img src="./images/line55.svg" alt="line" />
                                    </div>
                                    <div class="headerContent2 headerContent">
                                        <div>출신학교 소재지</div>
                                    </div>
                                </div>
                                <div class="flexBox2">
                                    <div class="doChartBox2 doChartBox1">
                                        <!-- Inserting Chart -->
                                        <div class="donutChartResult" id="uniarea"></div>
                                        <!-- <div class="donutChartCenterText"
                                            v-show="0 !== university_area_tab_list_length">TOP 3</div> -->
                                    </div>
                                    <div class="resultDataListWrapper">
                                        <div class="resultDataTabWrapper">
                                            <div class="resultDataTab"
                                                v-bind:class="{ on: selectedAreaTabValue == 'all' }">
                                                <a v-on:click.prevent="selectedAreaTabValue='all'">
                                                    <span>전체</span>
                                                </a>
                                            </div>
                                            <div class="resultDataTab"
                                                v-bind:class="{ on: selectedAreaTabValue == 'associate' }">
                                                <a v-on:click.prevent="selectedAreaTabValue='associate'">
                                                    <span>전문학사</span>
                                                </a>
                                            </div>
                                            <div class="resultDataTab"
                                                v-bind:class="{ on: selectedAreaTabValue == 'bachelor' }">
                                                <a v-on:click.prevent="selectedAreaTabValue='bachelor'">
                                                    <span>학사</span>
                                                </a>
                                            </div>
                                            <div class="resultDataTab"
                                                v-bind:class="{ on: selectedAreaTabValue == 'master' }">
                                                <a v-on:click.prevent="selectedAreaTabValue='master'">
                                                    <span>석사</span>
                                                </a>
                                            </div>
                                            <div class="resultDataTab"
                                                v-bind:class="{ on: selectedAreaTabValue == 'doctor' }">
                                                <a v-on:click.prevent="selectedAreaTabValue='doctor'">
                                                    <span>박사</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="resultDataContentWrapper">
                                            <div class="resultDataContent"
                                                v-show="0 < university_area_tab_list_length"
                                                v-for="(uniarea, index) in university_area_tab_list"
                                                v-bind:key="uniarea.value+Date.now()"
                                                v-bind:class="(index < 10) ? 'resultDataContentActive' : 'resultDataContent'">
                                                <div>{{ index + 1 }}</div>
                                                <div>{{ uniarea.text }}</div>
                                                <div>{{ uniarea.value }}</div>
                                            </div>
                                            <div class="resultListNoData"
                                                v-show="0 === university_area_tab_list_length">
                                                데이터가 존재하지 않습니다.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!--
                    탭 내용 : 공통 > "학과(계열)"
                -->
                <div id="major_content" v-show="isMajorContent">
                    <label class="printLabel" style="display:none; margin-top: 25px; margin-bottom: 13px; margin-left: 30px;">학과(계열)</label>
                    <div class="colWrapper resultContentWrapper">
                        <div class="singleDegree flexBox boxGap">
                            <div class="expectContentWrapper">
                                <div class="expectContentHeader">
                                    <div class="lineHeader3">
                                        <img src="./images/line55.svg" alt="line" />
                                    </div>
                                    <div class="headerContent2 headerContent">
                                        <div class="deptHeader">
                                            <h2>학과 (계열별 조회)</h2>
                                            <div class="tooltip" style="margin-top: -2px;left: 5px;">
                                                <img class="tooltipimg" src="./images/inActiveQIcon.svg" alt="questionMark" />
                                                <div class="tooltiptext academicSubjectType">
                                                    계열은 한국교육개발원에서 학과명에 따라 분류한 7대 계열을 사용하고 있습니다.<br>
                                                    자세한 계열 및 학과정보는 교육통계서비스 홈페이지 자료실의 학과 전공분류 자료집을 참고해주세요.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="deptCategoryButtonWrapper">
                                            <input id="deptCateUpper" type="radio" name="deptCategorySelection"/>
                                            <label class="deptCategoryBtn" for="deptCateUpper" v-on:click="selectDeptCategory('upper')">대계열</label>

                                            <input id="deptCateMid" type="radio" name="deptCategorySelection"/>
                                            <label class="deptCategoryBtn" for="deptCateMid" v-on:click="selectDeptCategory('mid')">중계열</label>

                                            <input id="deptCateLower" type="radio" name="deptCategorySelection"/>
                                            <label class="deptCategoryBtn" for="deptCateLower" v-on:click="selectDeptCategory('lower')">소계열</label>

                                            <input id="deptCateSubject" type="radio" name="deptCategorySelection" checked v-show="!isProtection"/>
                                            <label class="deptCategoryBtn" for="deptCateSubject" v-on:click="selectDeptCategory('subject')" v-show="!isProtection">학과(전공)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="flexBox2">
                                    <div class="doChartBox2 doChartBox1">
                                        <!-- Inserting Chart -->
                                        <div class="donutChartResult" id="deptcol"></div>
                                        <!-- 20231113 수정. 그래프 종류 변경, Top10 으로 변경 <div class="donutChartCenterText"
                                            v-show="0 !== university_deptcol_tab_list_length">TOP 3</div> -->
                                    </div>
                                    <div class="resultDataListWrapper">
                                        <div class="resultDataTabWrapper">
                                            <div class="resultDataTab"
                                                v-bind:class="{ on: selectedDeptcolTabValue == 'all' }">
                                                <a v-on:click.prevent="selectedDeptcolTabValue='all'">
                                                    <span>전체</span>
                                                </a>
                                            </div>
                                            <div class="resultDataTab"
                                                v-bind:class="{ on: selectedDeptcolTabValue == 'associate' }">
                                                <a v-on:click.prevent="selectedDeptcolTabValue='associate'">
                                                    <span>전문학사</span>
                                                </a>
                                            </div>
                                            <div class="resultDataTab"
                                                v-bind:class="{ on: selectedDeptcolTabValue == 'bachelor' }">
                                                <a v-on:click.prevent="selectedDeptcolTabValue='bachelor'">
                                                    <span>학사</span>
                                                </a>
                                            </div>
                                            <div class="resultDataTab"
                                                v-bind:class="{ on: selectedDeptcolTabValue == 'master' }">
                                                <a v-on:click.prevent="selectedDeptcolTabValue='master'">
                                                    <span>석사</span>
                                                </a>
                                            </div>
                                            <div class="resultDataTab"
                                                v-bind:class="{ on: selectedDeptcolTabValue == 'doctor' }">
                                                <a v-on:click.prevent="selectedDeptcolTabValue='doctor'">
                                                    <span>박사</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="resultDataContentWrapper">
                                            <virtual-list :size="32" :remain="10" v-if="0 < university_deptcol_tab_list_length">
                                                <div class="resultDataContent"
                                                    v-show="0 < university_deptcol_tab_list_length"
                                                    v-for="(deptcol, index) in university_deptcol_tab_list"
                                                    v-bind:key="dept.name+Date.now()"
                                                    v-bind:class="(index < 10) ? 'resultDataContentActive' : 'resultDataContent'">
                                                    <div>{{ index + 1 }}</div>
                                                    <div>{{ deptcol.text }}</div>
                                                    <div>{{ deptcol.value }}</div>
                                                </div>
                                            </virtual-list>
                                            <div class="resultListNoData"
                                                v-show="0 === university_deptcol_tab_list_length">
                                                데이터가 존재하지 않습니다.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="singleDegree flexBox boxGap">
                            <div class="expectContentWrapper">
                                <div class="expectContentHeader">
                                    <div class="lineHeader3">
                                        <img src="./images/line55.svg" alt="line" />
                                    </div>
                                    <div class="headerContent">
                                        <div class="deptHeader">
                                            <h2>학과 (계열 선택)</h2>
                                        </div>
                                        <div class="deptCategoryButtonWrapper">
                                            <select title="학과대분류" class="univDepts" v-model="selected_dept_upper" v-on:change="handleDeptSelect('upper')">
                                                <option value="" selected>대계열</option>
                                                <option v-for="(lptm, index) in category_dept_upper" v-bind:key="lptm+Date.now()">{{ lptm }}</option>
                                            </select>
                                            <select title="학과중분류" class="univDepts" v-model="selected_dept_mid" v-on:change="handleDeptSelect('mid')">
                                                <option value="" selected>중계열</option>
                                                <option v-for="(lptm, index) in tmp_category_dept_mid" v-bind:key="lptm+Date.now()">{{ lptm }}</option>
                                            </select>
                                            <select title="학과소분류" class="univDepts" v-model="selected_dept_lower" v-on:change="handleDeptSelect('lower')">
                                                <option value="" selected>소계열</option>
                                                <option v-for="(lptm, index) in tmp_category_dept_lower" v-bind:key="lptm+Date.now()">{{ lptm }}</option>
                                            </select>
                                            <div v-show="!isProtection">
                                                <select title="학과분류" class="univDepts" style="height:100%;" v-model="selected_dept_subject" v-on:change="handleDeptSelect('subject')">
                                                    <option value="" selected>학과(전공)</option>
                                                    <option v-for="(lptm, index) in tmp_category_dept_subject" v-bind:key="lptm+Date.now()">{{ lptm }}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flexBox2">
                                    <div class="doChartBox2 doChartBox1">
                                        <!-- Inserting Chart -->
                                        <div class="donutChartResult" id="dept"></div>
                                        <!-- 20231113 수정. 그래프 종류 변경, Top10으로 변경 <div class="donutChartCenterText"
                                            v-show="0 !== university_dept_tab_list_length">TOP 3</div> -->
                                    </div>
                                    <div class="resultDataListWrapper">
                                        <div class="resultDataTabWrapper">
                                            <div class="resultDataTab"
                                                v-bind:class="{ on: selectedDeptTabValue == 'all' }">
                                                <a v-on:click.prevent="selectedDeptTabValue='all'">
                                                    <span>전체</span>
                                                </a>
                                            </div>
                                            <div class="resultDataTab"
                                                v-bind:class="{ on: selectedDeptTabValue == 'associate' }">
                                                <a v-on:click.prevent="selectedDeptTabValue='associate'">
                                                    <span>전문학사</span>
                                                </a>
                                            </div>
                                            <div class="resultDataTab"
                                                v-bind:class="{ on: selectedDeptTabValue == 'bachelor' }">
                                                <a v-on:click.prevent="selectedDeptTabValue='bachelor'">
                                                    <span>학사</span>
                                                </a>
                                            </div>
                                            <div class="resultDataTab"
                                                v-bind:class="{ on: selectedDeptTabValue == 'master' }">
                                                <a v-on:click.prevent="selectedDeptTabValue='master'">
                                                    <span>석사</span>
                                                </a>
                                            </div>
                                            <div class="resultDataTab"
                                                v-bind:class="{ on: selectedDeptTabValue == 'doctor' }">
                                                <a v-on:click.prevent="selectedDeptTabValue='doctor'">
                                                    <span>박사</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="resultDataContentWrapper">
                                            <virtual-list :size="32" :remain="10" :itemcount="university_dept_tab_list_length" v-show="0 < university_dept_tab_list_length">
                                                <div class="resultDataContent"
                                                    v-show="0 < university_dept_tab_list_length"
                                                    v-for="(dept, index) in university_dept_tab_list" v-bind:key="'tab_list_'+dept.text+Date.now()"
                                                    v-bind:class="(index < 10) ? 'resultDataContentActive' : 'resultDataContent'">
                                                    <div>{{ index + 1 }}</div>
                                                    <div>{{ dept.text }}</div>
                                                    <div>{{ dept.value }}</div>
                                                </div>
                                            </virtual-list>
                                            <div class="resultListNoData"
                                                v-show="0 === university_dept_tab_list_length">
                                                데이터가 존재하지 않습니다.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!--
                    탭 내용 : 공통 > "자격 정보"
                -->
                <div id="qualification_content" v-show="isQualificationContent">
                    <label class="printLabel" style="display:none; margin-top: 25px; margin-bottom: 13px; margin-left: 30px;">자격 정보</label>
                    <div class="colWrapper resultContentWrapper">
                        <div class="shortSingleDegree flexBox boxGap">
                            <div class="expectContentWrapper leftItem">
                                <div class="expectContentHeader">
                                    <div class="lineHeader">
                                        <img src="./images/line42.svg" alt="line" />
                                    </div>
                                    <div class="headerContent scoreContentHeader" style="margin-top: 0px;">
                                        <div>TOEIC</div>
                                        <div style="display: none"></div>
                                        <div class="headerText2">
                                            평균 <span class="deepBlueSpan">{{ toeic_avarage }}점</span>
                                            <span class="graySpan">( {{ toeic_rate }}% 보유 )</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="chartBox1">
                                    <!-- Inserting Chart -->
                                    <div id="toeic_chart"></div>
                                </div>
                            </div>
                            <div class="expectContentWrapper rightItem">
                                <div class="expectContentHeader">
                                    <div class="lineHeader">
                                        <img src="./images/line42.svg" alt="line" />
                                    </div>
                                    <div class="headerContent scoreContentHeader" style="margin-top: 0px;">
                                        <div>대학 학점</div>
                                        <div style="display: none"></div>
                                        <div class="headerText2">
                                            평균 <span class="deepBlueSpan">{{ avarageAnalysis.txt_gradescore_avg }}</span>점
                                        </div>
                                    </div>
                                </div>
                                <div class="chartBox1">
                                    <!-- Inserting Chart -->
                                    <div id="grade_chart"></div>
                                </div>
                            </div>
                        </div>

                        <div class="singleDegree flexBox boxGap">
                            <div class="expectContentWrapper">
                                <div class="expectContentHeader">
                                    <div class="lineHeader2">
                                        <img src="./images/line55.svg" alt="line" />
                                    </div>
                                    <div class="headerContent2 headerContent scoreContentHeader">
                                        <div>자격증 종류</div>
                                        <div></div>
                                        <div class="headerText1">( 국가기술/국가전문 )</div>
                                    </div>
                                </div>
                                <div class="flexBox2">
                                    <div class="doChartBox2 doChartBox1">
                                        <!-- Inserting Chart -->
                                        <div class="donutChartResult" id="licenseChart"></div>
                                        <!-- 20231113 수정. 차트 종류 변경, Top10으로 변경 <div class="donutChartCenterText2"
                                            v-show="0 !== license_list_length">TOP 3</div> -->
                                    </div>
                                    <div class="resultDataListWrapper">
                                        <div class="resultDataContentWrapper">
                                            <div class="resultDataContent"
                                                v-show="0 < license_list_length"
                                                v-for="(license, index) in license_list" v-bind:key="license.name+Date.now()"
                                                v-bind:class="(index < 10) ? 'resultDataContentActive' : 'resultDataContent'">
                                                <div>{{ index + 1 }}</div>
                                                <div>{{ license.text }}</div>
                                                <div>{{ license.value }}</div>
                                            </div>
                                            <div class="resultListNoData"
                                                v-show="0 === license_list_length">
                                                데이터가 존재하지 않습니다.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="singleDegree flexBox boxGap">
                            <div class="expectContentWrapper">
                                <div class="expectContentHeader">
                                    <div class="lineHeader2">
                                        <img src="./images/line55.svg" alt="line" />
                                    </div>
                                    <div class="headerContent2 headerContent scoreContentHeader">
                                        <div>자격증 종류</div>
                                        <div></div>
                                        <div class="headerText1">( 민간공인/민간등록 )</div>
                                    </div>
                                </div>
                                <div class="flexBox2">
                                    <div class="doChartBox2 doChartBox1">
                                        <!-- Inserting Chart -->
                                        <div class="donutChartResult" id="privatelicenseChart"></div>
                                        <!-- 20231113 수정. 차트 종류 변경, Top10으로 변경 <div class="donutChartCenterText2"
                                            v-show="0 !== privatelicense_list_length">TOP 3</div> -->
                                    </div>
                                    <div class="resultDataListWrapper">
                                        <div class="resultDataContentWrapper">
                                            <div class="resultDataContent"
                                                v-show="0 < privatelicense_list_length"
                                                v-for="(license, index) in privatelicense_list"
                                                v-bind:key="license.name+Date.now()"
                                                v-bind:class="(index < 10) ? 'resultDataContentActive' : 'resultDataContent'">
                                                <div>{{ index + 1 }}</div>
                                                <div>{{ license.text }}</div>
                                                <div>{{ license.value }}</div>
                                            </div>
                                            <div class="resultListNoData"
                                                v-show="0 === privatelicense_list_length">
                                                데이터가 존재하지 않습니다.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!--
                    탭 내용 : 공통 > "직무 정보"
                -->
                <div id="dutyInfo_content" v-show="isDutyContent & selectJobFlag">
                    <label class="printLabel" style="display:none; margin-top: 25px; margin-bottom: 13px; margin-left: 30px;">직무 정보</label>
                    <div class="colWrapper resultContentWrapper">
                        <div class="singleDegree flexBox boxGap">
                            <div class="expectContentWrapper leftItem">
                                <div class="expectContentHeader">
                                    <div class="lineHeader">
                                        <img src="./images/line42.svg" alt="line" />
                                    </div>
                                    <div class="headerContent">
                                        <div>대분류</div>
                                    </div>
                                </div>
                                <div class="chartBox1">
                                    <div class="donutChartResult" id="jobhigh"></div>
                                </div>
                            </div>
                            <div class="expectContentWrapper rightItem">
                                <div class="expectContentHeader">
                                    <div class="lineHeader">
                                        <img src="./images/line42.svg" alt="line" />
                                    </div>
                                    <div class="headerContent">
                                        <div>중분류</div>
                                    </div>
                                </div>
                                <div class="chartBox1">
                                    <div class="donutChartResult" id="jobmiddle"></div>
                                </div>
                            </div>
                        </div>

                        <div class="singleDegree flexBox boxGap">
                            <div class="expectContentWrapper">
                                <div class="expectContentHeader">
                                    <div class="lineHeader">
                                        <img src="./images/line55.svg" alt="line" />
                                    </div>
                                    <div class="headerContent2 headerContent">
                                        <div>소분류</div>
                                    </div>
                                </div>
                                <div class="flexBox2">
                                    <div class="doChartBox2 doChartBox1">
                                        <!-- Inserting Chart -->
                                        <div class="donutChartResult" id="joblow"></div>
                                        <!-- 20231113 수정. 차트 종류 변경, Top10으로 변경 <div v-show="0 < job_low_list.length" class="donutChartCenterText2">TOP 5</div> -->
                                    </div>
                                    <div class="resultDataListWrapper">
                                        <div class="resultDataContentWrapper">
                                            <div class="resultDataContent" v-show="0 < job_low_list.length"
                                                v-for="(license, index) in job_low_list"
                                                v-bind:key="'job_low_list' +index+'_'+license.name+Date.now()"
                                                v-bind:class="(index < 10) ? 'resultDataContentActive' : 'resultDataContent'">
                                                <div>{{ index + 1 }}</div>
                                                <div>{{ license.text }}</div>
                                                <div>{{ license.value }}</div>
                                            </div>
                                            <div class="resultListNoData"
                                                v-show="0 === job_low_list.length">
                                                데이터가 존재하지 않습니다.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!--
                    탭 내용 : 공통 > "특성 정보"
                -->
                <div id="character_content" v-show="isCharacterContent && isUserGroup" class="characterInfoContent">
                    <label class="printLabel" style="display:none; margin-top: 25px; margin-bottom: 13px; margin-left: 30px;">특성 정보</label>
                    <div class="colWrapper resultContentWrapper">
                        <div class="shortSingleDegree flexBox boxGap">
                            <div class="expectContentWrapper leftItem">
                                <div class="expectContentHeader">
                                    <div class="lineHeader">
                                        <img src="./images/line42.svg" alt="line" />
                                    </div>
                                    <div class="headerContent">
                                        <div>해외연수여부</div>
                                    </div>
                                </div>
                                <div class="chartBox1 setCenter">
                                    <!-- Inserting Chart -->
                                    <div id="overseaChart"></div>
                                </div>
                            </div>
                            <div class="expectContentWrapper rightItem">
                                <div class="expectContentHeader">
                                    <div class="lineHeader">
                                        <img src="./images/line42.svg" alt="line" />
                                    </div>
                                    <div class="headerContent">
                                        <div>해외연수비율</div>
                                    </div>
                                </div>
                                <div class="chartBox1 setCenter">
                                    <!-- Inserting Chart -->
                                    <div class="overseaPieChart" id="overseaTypeRatioChart"
                                        v-show="!(avarageAnalysis.oversea_avg == 0)">
                                    </div>
                                    <div class="resultListNoData" style="width: 100%;height: 400px;line-height: 365px;color: red;"
                                        v-show="(avarageAnalysis.oversea_avg == 0)">
                                        데이터가 존재하지 않습니다.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="shortSingleDegree flexBox boxGap">
                            <div class="expectContentWrapper leftItem">
                                <div class="expectContentHeader">
                                    <div class="lineHeader">
                                        <img src="./images/line42.svg" alt="line" />
                                    </div>
                                    <div class="headerContent">
                                        <div>교직과정이수여부</div>
                                    </div>
                                </div>
                                <div class="chartBox1 setCenter">
                                    <!-- Inserting Chart -->
                                    <div id="teachChart"></div>
                                </div>
                            </div>
                            <!-- 20231114 수정. 편입여부 그래프 삭제,
                                현장실습여부 그래프를 이 위치로 이동 -->
                            <div class="expectContentWrapper rightItem">
                                <div class="expectContentHeader">
                                    <div class="lineHeader">
                                        <img src="./images/line42.svg" alt="line" />
                                    </div>
                                    <div class="headerContent">
                                        <div>현장 실습 여부</div>
                                    </div>
                                </div>
                                <div class="chartBox1 setCenter">
                                    <!-- Inserting Chart -->
                                    <div id="internChart"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--
            사용방법
        -->
        <div class="howModalBack" v-show="isSelectedManual">
            <div class="modalPage1" v-show="isManualStep1" style="padding-top: 14px;">
                <div class="flexBox3">
                    <div class="leftDes1">
                        <button class="controllers2" v-on:click="manualDownloadFile">사용방법 다운로드</button>
                        <!--자세한 내용은<br />
                        홈페이지 알림소식-자료실의 매뉴얼을 참고해주세요.<br />
                        <span class="grayLeftDesc1">(자료실에서 ‘진로탐색’으로 검색)</span>-->
                    </div>
                    <div class="controllerBox">
                        <button class="controllers prevBtn">
                            <img src="./images/lArrow.svg" alt="lArrow"/>
                            이전
                        </button>
                        <button class="controllers nextBtn" v-on:click="handleManual(2)">
                            다음
                            <img src="./images/rArrow.svg" alt="rArrow"/>
                        </button>
                    </div>
                    <div class="pointer" v-on:click="handleManualInit">
                        <img src="./images/close2.svg" alt="close" />
                    </div>
                </div>
                <div class="alignRight" style="padding-top: -5px;">
                    <div class="sampleSelectBox useDegreeSelectBox setCenter" style="margin-top: 50px;">
                        <div class="selectArrow2">
                            <img src="./images/dropdownBtn2.svg" alt="arrow" />
                        </div>
                        <span>2021</span>
                    </div>
                    <div class="rightDes1">
                        조회하고자 하는 연도를 선택하세요.<br />
                        <span class="blueSpan">2021</span>은
                        <span class="blueSpan">2021년 2월(2020년 8월)</span> 졸업자의
                        <span class="blueSpan">2021.12.31.기준</span> 취업통계조사
                        결과입니다.
                    </div>
                </div>
            </div>
            <div class="modalPage2" v-show="isManualStep2" style="padding-top: 14px;">
                <div class="flexBox3">
                    <div class="leftDes1" style="visibility: hidden;">
                        자세한 내용은<br />
                        홈페이지 알림소식-자료실의 매뉴얼을 참고해주세요.<br /><span class="grayLeftDesc1">
                    (자료실에서 ‘진로탐색’으로 검색)</span>
                    </div>
                    <div class="controllerBox">
                        <button class="controllers activePrev" v-on:click="handleManual(1)">
                            <img src="./images/lArrow.svg" alt="lArrow">
                            이전
                        </button>
                        <button class="controllers nextBtn" v-on:click="handleManual(3)">
                            다음
                            <img src="./images/rArrow.svg" alt="rArrow"/>
                        </button>
                    </div>
                    <div class="pointer" v-on:click="handleManualInit">
                        <img src="./images/close2.svg" alt="close" />
                    </div>
                </div>
                <div class="sampleTabs" style="margin-top: 128px;">
                    <div class="tabWrapper">
                        <input id="conditionSearch2" type="radio" name="searchTabs2" checked disabled/>
                        <label class="sampleActiveTab tabs" for="conditionSearch2">기업조건별 검색
                            <div class="activeTab">
                                <img src="./images/activeQIcon.svg" alt="questionMark" />
                            </div>
                        </label>

                        <input id="companySearch_howto" type="radio" name="searchTabs2" disabled/>
                        <label class="sampleInactiveTab tabs" for="companySearch_howto">회사명 검색
                            <div class="inactiveTab">
                                <img src="./images/inActiveQIcon.svg" alt="questionMark" />
                            </div>
                        </label>
                        <div class="leftDeco1 flexBox">
                            <div></div>
                            <div class="DecoText3 sampleTextBox4">
                                <span class="blueSpan">기업 특성</span>을 선택하여 조건에 맞는
                                기업에 취업한 졸업생의 정보를 검색합니다.
                            </div>
                        </div>
                        <div class="RightDeco2 flexBox">
                            <div></div>
                            <div class="DecoText3 sampleTextBox4">
                                <span class="blueSpan">회사명</span>을 선택하여 해당 회사에
                                취업한 졸업생의 정보를 검색합니다.
                            </div>
                        </div>
                        <div class="DecoText2 DecoText1 sampleTextBox4">
                            <span class="blueSpan">기업조건별</span>과&nbsp;<span class="blueSpan">
                        회사명&nbsp;</span>
                            중 검색할 방법을 선택합니다.
                        </div>
                    </div>
                </div>
            </div>
            <div class="modalPage3" v-show="isManualStep3" style="padding-top: 14px;">
                <div class="flexBox3">
                    <div class="leftDes1" style="visibility: hidden;">
                        자세한 내용은<br />
                        홈페이지 알림소식-자료실의 매뉴얼을 참고해주세요.<br /><span class="grayLeftDesc1">
                    (자료실에서 ‘진로탐색’으로 검색)</span>
                    </div>
                    <div class="controllerBox">
                        <button class="controllers activePrev" v-on:click="handleManual(2)">
                            <img src="./images/lArrow.svg" alt="lArrow"/>
                            이전
                        </button>
                        <button class="controllers nextBtn" v-on:click="handleManual(4)">
                            다음
                            <img src="./images/rArrow.svg" alt="rArrow"/>
                        </button>
                    </div>
                    <div class="pointer" v-on:click="handleManualInit">
                        <img src="./images/close2.svg" alt="close" />
                    </div>
                </div>
                <div class="sampleTabs" style="margin-top: 128px;">
                    <div class="flexBox">
                        <input id="conditionSearch3_howto" type="radio" name="searchTabs3" checked />
                        <label class="sampleActiveTab tabs" for="conditionSearch3_howto">기업조건별 검색
                            <div class="sampleActiveTab">
                                <img src="./images/activeQIcon.svg" alt="questionMark" />
                            </div>
                        </label>
                        <div class="tabText1">
                            <span class="blueSpan">기업유형, 산업분류, 기업규모, 기업지역, 직무유형</span>을 특성으로 선택 하실 수 있습니다
                        </div>
                    </div>
                    <div class="sampleSearchTags">
                        <div class="flexBox">
                            <div class="titleMargin1">기업유형</div>
                            <div class="titleMargin2">산업분류</div>
                            <div class="titleMargin3">기업규모</div>
                            <div class="titleMargin4">기업지역</div>
                            <div>직무유형</div>
                        </div>
                        <div class="flexBox2 tagsText">
                            <div class="tagsBox">
                                <img src="./images/select-box1.svg" width="170" height="54" alt=""/>
                                <img src="./images/select-box2.svg" width="170" height="54" alt=""/>
                                <img src="./images/select-box3.svg" width="170" height="54" alt=""/>
                                <img src="./images/select-box4.svg" width="170" height="54" alt=""/>
                                <img src="./images/select-box5.svg" width="170" height="54" alt=""/>
                                <img src="./images/select-box6.svg" width="170" height="54" alt=""/>
                                <img src="./images/select-box7.svg" width="170" height="54" alt=""/>
                            </div>
                            각 항목에서 <span class="blueSpan">다중선택</span>이 가능합니다.
                        </div>
                    </div>
                </div>
            </div>
            <div class="modalPage4" v-show="isManualStep4" style="padding-top: 14px;">
                <div class="flexBox3">
                    <div class="leftDes1" style="visibility: hidden;">
                        자세한 내용은<br />
                        홈페이지 알림소식-자료실의 매뉴얼을 참고해주세요.<br /><span class="grayLeftDesc1">
                    (자료실에서 ‘진로탐색’으로 검색)</span>
                    </div>
                    <div class="controllerBox">
                        <button class="controllers activePrev" v-on:click="handleManual(3)">
                            <img src="./images/lArrow.svg" alt=""/>
                            이전
                        </button>
                        <button class="controllers nextBtn" v-on:click="handleManual(5)">
                            다음
                            <img src="./images/rArrow.svg" alt=""/>
                        </button>
                    </div>
                    <div class="pointer" v-on:click="handleManualInit">
                        <img src="./images/close2.svg" alt="close" />
                    </div>
                </div>
                <div class="sampleTabs colBox" style="margin-top: 128px;">
                    <div class="sampleTabs2 flexBox">
                        <input id="companySearch3" type="radio" name="searchTabs3" />
                        <label class="sampleActiveTab tabs" for="companySearch3">회사명 검색
                            <div class="sampleActiveTab">
                                <img src="./images/activeQIcon.svg" alt="questionMark" />
                            </div>
                        </label>
                        <label>
                            <input id="conditionSearch3" type="radio" name="searchTabs3" checked />
                        </label>
                    </div>
                    <div class="compSearchAlign1">
                        <div class="compSearchText1">
                            회사명을 직접 입력 하거나,
                            <span class="blueSpan">회사 조건 검색하기</span>를 눌러서 회사조건을 선택 후
                            <span class="blueSpan">검색</span>하면, 조회하려는 회사를 직접 선택 할 수 있습니다.
                        </div>
                        <div class="compSearchBar flexBox">
                            <div class="searchBox longSearchBar">
                                <input class="longSearchBarInner" placeholder="회사명을 입력해주세요." />
                                <div class="searchIcon2">
                                    <img src="./images/searchIcon.svg" alt="search" />
                                </div>
                            </div>
                            <button class="compSearchBtn" onclick="handleSearchModal();">
                                <img src="./images/settings1.svg" alt="icon" />
                                <span>회사 조건 검색하기</span>
                            </button>
                            <img class="compSearchArrow" src="./images/share1.svg" alt=""/>
                        </div>
                    </div>
                    <div class="compSearchAlign1 compImg">
                        <div class="searchModal">
                            <div class="searchModalHeader">
                                <div class="flexBox3">
                                    <div class="searchModalTitle">회사 조건 검색하기</div>
                                    <div v-on:click="showModal_companySearchingCond(false)">
                                        <img src="./images/close1.svg" alt="close" />
                                    </div>
                                </div>
                                <div class="flexBox3">
                                    <article class="cont-select">
                                        <div class="selectArrow3">
                                            <img src="./images/dropdownBtn2.svg" alt="arrow" />
                                        </div>
                                        <button class="degreeSelectBox degreeSelect16 compSearchModalSelectBtn1">
                                            기업유형
                                        </button>
                                    </article>
                                    <article class="cont-select">
                                        <div class="selectArrow3">
                                            <img src="./images/dropdownBtn2.svg" alt="arrow" />
                                        </div>
                                        <button class="degreeSelectBox degreeSelect16 compSearchModalSelectBtn2">
                                            산업분류
                                        </button>
                                    </article>
                                    <article class="cont-select">
                                        <div class="selectArrow3">
                                            <img src="./images/dropdownBtn2.svg" alt="arrow" />
                                        </div>
                                        <button class="degreeSelectBox degreeSelect16 compSearchModalSelectBtn3">
                                            기업규모
                                        </button>
                                    </article>
                                    <article class="cont-select">
                                        <div class="selectArrow3">
                                            <img src="./images/dropdownBtn2.svg" alt="arrow" />
                                        </div>
                                        <button class="degreeSelectBox degreeSelect16 compSearchModalSelectBtn4">
                                            기업지역
                                        </button>
                                    </article>
                                    <button class="searchBtn2" style="height: 100%;">
                                        검색
                                    </button>
                                </div>
                            </div>
                            <!--
                                검색 팝업 꼬리말: "검색결과"
                            -->
                            <div class="searchModalFooter" v-bind:class="'scrollEnabled'" v-show="isCompanySearched">
                                <div class="searchFooterLine1">
                                    <div class="flexBox">
                                        <img src="./images/searchIcon.svg" alt="search" width="16" height="16" />
                                        <div>검색결과</div>
                                    </div>
                                    <div>{{ companyListSearchResults_text }}</div>
                                </div>
                                <div v-for="(lptm, i) in companyListSearchResults" v-bind:key="lptm.value+Date.now()">
                                    <div class="companyList">
                                        <label class="container">
                                            <input type="radio" name="radio" v-on:click="selectCompanyFromList(i)">
                                            <div class="companyNo">{{ i + 1 }}</div>
                                            <div class="companyName">{{ lptm.text }}</div>
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <button class="selectBtn2" v-show="false">
                                선택
                            </button>
                        </div>
                    </div>
                    <div class="colBox compSearchAlign1 compSearchText2">
                        <span>
                            회사 조건 선택 후 <span class="blueSpan">검색 버튼 클릭</span>하면 선택한 조건에 맞는 회사를 조회하여 표시합니다.
                            표시된, <span class="blueSpan">회사 목록</span>에서 조회하려는 회사를 선택 할 수  있습니다.
                        </span>
                    </div>
                </div>
            </div>
            <div class="modalPage5"  v-show="isManualStep5" style="padding-top: 14px;">
                <div class="flexBox3">
                    <div class="leftDes1" style="visibility: hidden;">
                        자세한 내용은<br />
                        홈페이지 알림소식-자료실의 매뉴얼을 참고해주세요.<br /><span class="grayLeftDesc1">
                    (자료실에서 ‘진로탐색’으로 검색)</span>
                    </div>
                    <div class="controllerBox">
                        <button class="controllers activePrev" v-on:click="handleManual(4)">
                            <img src="./images/lArrow.svg" alt=""/>
                            이전
                        </button>
                        <button class="controllers inActiveNext">
                            다음
                            <img src="./images/rArrow.svg" alt=""/>
                        </button>
                    </div>
                    <div class="pointer" v-on:click="handleManualInit">
                        <img src="./images/close2.svg" alt="close" />
                    </div>
                </div>
                <div class="alignModal5 colBox">
                    <div class="sampleReset flexBox">
                        <div class="sampleTextBox4">
                            선택한 조건을 <span class="blueSpan">초기화</span> 합니다
                        </div>
                        <button class="resetBtn setCenter" style="justify-content: center;">
                            <label class="resetLabel" for="check"></label>
                            <img src="./images/refreshIcon1.svg" alt="questionMark" />
                            <span>초기화</span>
                        </button>
                    </div>
                    <div class="sampleSearchBtnBox colBox">
                        <div class="sampleTextBox4">
                            조건 선택 후
                            <span class="blueSpan">검색 버튼 클릭 시</span> 조건에 맞는 결과가
                            조회 됩니다
                        </div>
                        <div class="searchBtn setCenter" style="align-items: center;justify-content: center;">검색</div>
                    </div>
                    <div class="sampleButtonBox flexBox" v-bind:style="style_visible_to_usergroup">
                        <!--<div class="colBox">
                            <button class="footerBtn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                    <g clip-path="url(#clip0_61_1652)">
                                        <path d="M16.625 0H4.375V4.375H16.625V0Z" fill="#F1F3F9" />
                                        <path d="M15.75 13.125H5.25V21H15.75V13.125Z" fill="#F1F3F9" />
                                        <path d="M18.375 6.125H2.625C1.92881 6.125 1.26113 6.40156 0.768845 6.89384C0.276562 7.38613 0 8.05381 0 8.75L0 17.5H3.5V11.375H17.5V17.5H21V8.75C21 8.05381 20.7234 7.38613 20.2312 6.89384C19.7389 6.40156 19.0712 6.125 18.375 6.125ZM16.625 9.625H13.125V7.875H16.625V9.625Z" fill="#F1F3F9" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_61_1652">
                                            <rect width="21" height="21" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span>결과 출력</span>
                            </button>
                            <div class="sampleTextBox2">
                                검색 결과를

                                <span class="blueSpan">프린트</span>로<br />
                                출력 합니다
                            </div>
                        </div>-->
                        <div class="colBox">
                            <button class="footerBtn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                    <g clip-path="url(#clip0_61_1656)">
                                        <path d="M0 6.125V3.5C0 2.80381 0.276562 2.13613 0.768845 1.64384C1.26113 1.15156 1.92881 0.875 2.625 0.875H7.2065L10.7065 2.625H18.375C19.0712 2.625 19.7389 2.90156 20.2312 3.39384C20.7234 3.88613 21 4.55381 21 5.25V6.125H0ZM21 7.875V20.125H0V7.875H21ZM14 13.125H11.375V10.5H9.625V13.125H7V14.875H9.625V17.5H11.375V14.875H14V13.125Z" fill="#F1F3F9" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_61_1656">
                                            <rect width="21" height="21" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span>결과 저장</span>
                            </button>
                            <div class="sampleTextBox3 sampleTextBox2">
                                검색 결과 데이터를
                                <span class="blueSpan">엑셀 형식</span>으로<br />
                                다운로드 합니다
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 동의 팝업 -->
        <div class="downloadBack2" v-show="isAgree" style="display: none;align-items: baseline;">
            <div class="downloadModal2" style="margin-top: 60px;">
                <div class="downloadModalHeader">
                    <div class="flexBox3">
                        <div class="searchModalTitle">목적 외 활용 금지 서약</div>
                        <!--<div class="downloadModalClose pointer" v-on:click="redirectToUrl" v-show="!isAgreeTime">
                            <img src="./images/close1.svg" alt="close" />
                        </div>-->
                        <div class="downloadModalClose pointer" v-on:click="isAgree = false" v-show="isAgreeTime">
                            <img src="./images/close1.svg" alt="close" />
                        </div>
                    </div>
                </div>
                <div class="downloadModalContent">
                    <div class="downloadInnerContent" style="font-size: 16px;line-height: 30px;">
                        [시스템 사용 서약]<br/>
                        본 시스템은 재학생의 진로지도 및 대학별 진로지도 관련 정책 수립에 도움을 드리기 위한 목적으로 제공되고 있습니다.<br/>해당 목적 외(학교 홍보 등) 사용 시 불이익을 받으실 수 있습니다. 또한 「데이터 산업진흥 및 이용촉진에 관한 기본법」<br/>
                        제 12조에 의하여 외부 유출을 금지 하고 있습니다.<br/><br/>
                        시스템에 있는 정보의 올바른 사용 및 외부 유출하지 않을 것을 서약하며, 동의할 경우에만 본 시스템을 사용할 수 있습니다.
                    </div>
                    <div class="downloadModalFooter setCenter" v-show="!isAgreeTime" style="justify-content: center;">
                        <button class="downloadFooterBtn" v-on:click="handleInformationAgree(userid)" style="width:175px;">
                            동의
                        </button>
                        <button class="downloadFooterBtn" v-on:click="handleInformationNonAgree" style="width:175px;margin-left: 10px;">
                            동의하지 않음
                        </button>
                    </div>
                    <div class="downloadModalFooter setCenter" v-show="isAgreeTime" style="justify-content: center;">
                        <p style="color: red;">{{isAgreeTimeText}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="downloadBack2" v-show="isAgreeNon" style="display: none;color: #fff;font-size: 20px;font-weight: 700;">
            시스템 사용 서약을 하지 않아 사용할 수 없습니다. 재접속 후 동의하셔야 사용 가능합니다.
        </div>
    </div>
</body>

</html>