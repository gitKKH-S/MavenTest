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

    String selectUcode = "";
    if ("ALL".equals(schcd)) {
        selectUcode = "";
    } else {
        selectUcode = schcd +"_"+orgcd;
    }

    userid = XSSFilter(userid);
    usertype = XSSFilter(usertype);
    schcd = XSSFilter(schcd);
    orgcd = XSSFilter(orgcd);
    selectUcode = XSSFilter(selectUcode);
%>
<jsp:include page="header.jsp" />
<script type="text/javascript">
    var userid = "<%=userid%>";
    var userType = "<%=usertype%>";
    var gSchcd = "<%=schcd%>";
    var gOrgcd = "<%=orgcd%>";
    var selectUcode = "<%=selectUcode%>";
</script>
<script src="js/views/common.js?v=1111"></script>
<script src="js/views/employment.js?v=1111"></script>
<script type="text/javascript" src="js/vue-custom-tooltip.js"></script>
<script type="text/javascript" src="js/vue-single-select2.js"></script>
<script type="text/javascript" src="js/waitMe.min.js"></script>
<script type="text/javascript" src="js/excel-export/xlsx.core.min.js"></script>
<script type="text/javascript" src="js/excel-export/test.js"></script>
<script type="text/javascript" src="js/excel-export/Blob.js"></script>
<script type="text/javascript" src="js/excel-export/FileSaver.js"></script>

<link type="text/css" href="css/waitMe.min.css" rel="stylesheet" />
<link href="css/style.css" rel="stylesheet" />
<link href="css/layout.css" rel="stylesheet" />
<link href="css/result.css" rel="stylesheet" />
<link href="css/search.css" rel="stylesheet" />
<link href="css/university.css" rel="stylesheet" />
<link href="css/modal.css" rel="stylesheet" />
<link href="css/download.css" rel="stylesheet" />

<div class="totalWrapper" id="app" v-show="isMounted" style="display:none;">
    <div class="headerWrapper">
        <div class="headerDeco1">
            <img src="images/topback.svg" />
        </div>
        <div class="headerDeco2">
            <img src="images/topback2.svg" />
        </div>
        <div class="btnWrapper">
            <a href="status.jsp?SCHCD=<%=schcd%>&ORGCD=<%=orgcd%>&USERID=<%=userid%>&USERGRPTYPE=<%=usertype%>">
                <div class="headerLBtn">
                    <div class="headerCapStyle">
                        <img src="images/exclude.svg" class="headerBtnIcon" />
                    </div>
                    <div>
                        <div class="headerCapTitle1">
                            <span>기업 취업 현황</span>
                            <img src="images/header_arrow2.svg" class="headerArrowIcon" />
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
                        <img src="images/header_cap.svg" class="headerBtnIcon" style="padding-left: 6px;" />
                    </div>
                    <div>
                        <div class="headerCapTitle1">
                            <span>진로 예측</span>
                            <img src="images/header_arrow2.svg" class="headerArrowIcon" />
                        </div>
                        <div class="headerCapTitle2">
                            정보 입력을 통한<br/>진로 예측
                        </div>
                    </div>
                </div>
            </a>
            <a href="employment.jsp?SCHCD=<%=schcd%>&ORGCD=<%=orgcd%>&USERID=<%=userid%>&USERGRPTYPE=<%=usertype%>">
                <div class="haederLBtnActive">
                    <div class="headerCapStyle">
                        <img src="images/header_uni.svg" class="headerBtnIcon" style="padding-left: 1px;padding-bottom: 2px;" />
                    </div>
                    <div>
                        <div class="headerCapTitle1">
                            <span>학교별 분석</span>
                            <img src="images/header_arrow.svg" class="headerArrowIcon" />
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
            <!--<div class="headerRBtn" v-show="!isUserGroup" v-on:click="openNewWindow">
                <img src="images/coffee.svg" alt="survey" style="width: 30px;" />
                <span>설문조사</span>
            </div>-->
            <div class="headerRBtn" v-on:click="isUsageExporter = true" v-show="isUseUserGroup" style="display:none">
                <img src="images/use_download.svg" alt="download" />
                <span>사용현황 통계</span>
            </div>
            <div class="headerRBtn" v-on:click="handleManualShow">
                <img src="images/use.svg" alt="use" />
                <span>사용방법</span>
            </div>
        </div>
        <div style="position: absolute; top: 10px; right: 30px;z-index:5" v-on:click="isAgree = true">
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
            <span>학교별 분석</span>
        </div>
    </div>

    <!--
        선택 탭: "검색 조건"
    -->
    <div class="searchWrapper" id="module0">
        <div class="tagHeader">
            <div class="tabWrapper">
                <!-- 입력 탭: "학교별 검색" -->
                <input id="uniSearch" type="radio" name="searchTabs" v-bind:checked="isSelectedUni" v-on:change="changeConditionTab(`uniSearch`)" checked />
                <label class="tabs" for="uniSearch">
                    학교별 분석
                </label>
                <!-- 입력 탭: "강좌 검색" -->
                <input id="coursSearch" type="radio" name="searchTabs" v-bind:checked="!isSelectedUni" v-on:change="changeConditionTab(`coursSearch`)" />
                <label class="tabs" for="coursSearch">
                    강좌 분석
                    <div class="activeTab iconHover2">
                        <!-- 툴 팁 : 탭 활성화시 -->
                        <div class="tooltip compSearchByCond">
                            <img src="./images/activeQIcon.svg" alt="questionMark" />
                            <div class="tooltiptexttab">
                                우리 대학의 학과를 선택하여 개설강좌정보를 조회합니다.<br/>
                                강좌정보가 없는 학과는 선택할 수 없으며, 비교대학 선택 시 졸업자가 없는 학과는 표기되지 않습니다.
                            </div>
                        </div>
                    </div>
                    <div class="inactiveTab iconHover2">
                        <!-- 툴 팁 : 탭 비활성화시 -->
                        <div class="tooltip compSearchByCond">
                            <img src="./images/inActiveQIcon.svg" alt="questionMark" />
                            <div class="tooltiptexttab">
                                우리 대학의 학과를 선택하여 개설강좌정보를 조회합니다.<br/>
                                강좌정보가 없는 학과는 선택할 수 없으며, 비교대학 선택 시 졸업자가 없는 학과는 표기되지 않습니다.
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
            컨텐츠 묶음: "학교별 검색"
        -->
        <div class="wholeContentWrapper" v-show="isSelectedUni">
            <div class="formWrapper">
                <div class="">
                    <div class="uniTagsWrapper">
                        <div class="basicSecondWrapper">
                            <div>
                                <div class="secondInner">
                                    <div class="twoLineDegreeInput">
                                        <div class="flexBox">
                                            <span>학교</span>
                                        </div>
                                        <div class="degreeSelect8">
                                            <vue-single-select
                                                placeholder="대학 검색"
                                                v-model="selectedUniversity"
                                                :options="universitys"
                                                :required="false"
                                                option-label="name"
                                                :max-results="10000"
                                            >
                                            </vue-single-select>
                                        </div>
                                    </div>
                                    <div class="twoLineDegreeInput">
                                        <div class="flexBox">
                                            <span>학과</span>
                                        </div>
                                        <div class="degreeSelect8">
                                            <vue-single-select placeholder="학과 검색" v-model="selectedDepartmemt4" :options="department4" :required="false" option-label="name" :max-results="10000" style="text-align: center;"></vue-single-select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="secondInner">
                                    <div class="twoLineDegreeInput">
                                        <div class="flexBox">
                                            <span>계열</span>
                                        </div>
                                        <div class="degreeSelect8">
                                            <select class="degreeSelectBox" v-model="selectedLnm" v-on:change="handleDeptSelect('upper')">
                                                <option v-bind:value="null_value">대계열 선택</option>
                                                <option :key="'jobL_'+i" :value="lnm" v-for="(lnm, i) in target_lnm_list">
                                                    {{ lnm.text }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="degreeSelect8">
                                            <select class="degreeSelectBox" v-model="selectedMnm" v-on:change="handleDeptSelect('mid')">
                                                <option v-bind:value="null_value">중계열 선택</option>
                                                <option :key="'jobM_'+i" :value="mnm" v-for="(mnm, i) in target_mnm_list">
                                                    {{ mnm.text }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="degreeSelect8">
                                            <select class="degreeSelectBox" v-model="selectedSnm" v-on:change="handleDeptSelect('lower')">
                                                <option v-bind:value="null_value">소계열 선택</option>
                                                <option :key="'jobS_'+i" :value="snm" v-for="(snm, i) in target_snm_list">
                                                    {{ snm.text }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style="padding-right: 0px;">
                                <div class="secondInner">
                                    <!--<div class="twoLineDegreeInput">
                                        <div class="flexBox">
                                            <span>학점(백분위)</span>
                                        </div>
                                        <div class="degreeSelect8">
                                            <select class="degreeSelectBox" v-model="selectedScore">
                                                <option :value="null_value">선택</option>
                                                <option value="0">0~60</option>
                                                <option value="60">60~70</option>
                                                <option value="70">70~80</option>
                                                <option value="80">80~90</option>
                                                <option value="90">90~100</option>
                                            </select>
                                        </div>
                                    </div>-->
                                    <div class="twoLineDegreeInput">
                                        <div class="flexBox">
                                            <span>성별</span>
                                        </div>
                                        <div class="degreeSelect8">
                                            <select class="degreeSelectBox" v-model="selectedGender">
                                                <option v-bind:value="null_value">성별 선택</option>
                                                <option value="1">남</option>
                                                <option value="2">여</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="contentFooter">
                        <!-- 버튼: 검색 -->
                        <button id="resultSearchBtn" class="searchBtn" v-on:click="handleSearchSubmit" v-show="!isFetching">
                            검색
                        </button>
                        <button class="searchBtn" v-show="isFetching">
                            <i class="fa fa-refresh fa-spin"></i>검색 중
                        </button>

                        <!-- 컨텐츠 묶음 꼬리말: 안내문 -->
                        <span class="footerDes" v-show="isUserGroup">본 자료는 재학 및 졸업생의 취업 진로지도를 위한 자료입니다. 목적
                            외(홍보 등) 활용 시 서비스 제한, 현장 점검 등의 불이익을 받을 수
                            있습니다.</span>
                    </div>
                </div>
            </div>
        </div>
        <!--
            컨턴츠 묶음: "강좌 검색"
        -->
        <div class="searchContentWrapper" style="height: auto;" v-show="!isSelectedUni">
            <div class="formWrapper">
                <div class="">
                    <div class="uniTagsWrapper" style="flex-wrap: wrap;">
                        <div class="formHeader"><div class="formTitle">기준 대학 선택</div></div>
                        <div class="basicSecondWrapper" style="padding-bottom:0px;padding-top: 0px;">
                            <div>
                                <div class="secondInner">
                                    <div class="twoLineDegreeInput">
                                        <div class="flexBox">
                                            <span>조회연도</span>
                                        </div>
                                        <div class="degreeSelect8">
                                            <select class="degreeSelectBox" v-model="selectedYear">
                                                <option v-for="lptm in years.filter(year => year.value >= 2021)" v-bind:key="lptm.value">{{ lptm.text }}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="secondInner">
                                    <div class="twoLineDegreeInput">
                                        <div class="flexBox">
                                            <span>학교</span>
                                        </div>
                                        <div class="degreeSelect8">
                                            <vue-single-select
                                                placeholder="대학 검색"
                                                v-model="selectedUniversity"
                                                :options="universitys"
                                                :required="false"
                                                option-label="name"
                                                :max-results="10000"
                                            >
                                            </vue-single-select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style="padding-right: 0px;">
                                <div class="secondInner">
                                    <div class="twoLineDegreeInput">
                                        <div class="flexBox">
                                            <span>학과</span>
                                        </div>
                                        <div class="degreeSelect8">
                                            <vue-single-select placeholder="학과 검색" v-model="selectedDepartmemt4" :options="department4" :required="false" option-label="name" :max-results="10000" style="text-align: center;"></vue-single-select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="contentHLine"></div>
                    <div class="uniTagsWrapper" style="flex-wrap: wrap;justify-content: flex-start;">
                        <div class="formHeader"><div class="formTitle">비교 대학 선택</div></div>
                        <div class="basicSecondWrapper2">
                            <div>
                                <div class="secondInner">
                                    <div class="twoLineDegreeInput2" style="flex-direction: row;padding-left: 40px;">
                                        <div class="degreeSelect8" style="width:330px;">
                                            <vue-single-select
                                                placeholder="대학 선택"
                                                v-model="selectedUniversityByTarget"
                                                :options="similarSchools"
                                                :required="false"
                                                option-label="name"
                                                :max-results="10000"
                                            >
                                            </vue-single-select>
                                        </div>
                                        <div class="degreeSelect8">
                                            <vue-single-select
                                                placeholder="학과 선택"
                                                v-model="selectedUniversityByTargetDept"
                                                :options="similarSchoolDept"
                                                :required="false"
                                                option-label="name"
                                                :max-results="10000"
                                            >
                                            </vue-single-select>
                                        </div>
                                        <div>
                                            <button class="searchBtn" style="height: 46px;width: 130px;" v-on:click="handleSelectSimilarData">
                                                선택
                                            </button>
                                        </div>
                                        <div style="display: flex;align-items: center;">
                                            비교 대학은 최대 5개까지 선택 할 수 있습니다.
                                        </div>
                                    </div>
                                    <div style="padding-left: 40px;display: flex;flex-wrap: wrap; justify-content: flex-start;">
                                        <div v-for="sch in selectedSchs" :key="sch.id" class="qualBtn qualBtnActive" :style="{ width: computeDivWidth(sch.NAME) }">
                                            <input class="license_input" :title="sch.NAME" :placeholder="sch.NAME" :style="{ width: computeWidth(sch.NAME) }"  disabled/>
                                            <button type="submit" class="license_reset" v-on:click="handleSelectReset(sch)"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="contentFooter">
                        <!-- 버튼: 검색 -->
                        <button id="resultSearchBtn" class="searchBtn" v-on:click="handleSearchSubjectsSubmit" v-show="!isFetching">
                            검색
                        </button>
                        <button class="searchBtn" v-show="isFetching">
                            <i class="fa fa-refresh fa-spin"></i>검색 중
                        </button>

                        <!-- 컨텐츠 묶음 꼬리말: 안내문 -->
                        <span class="footerDes" v-show="isUserGroup">본 자료는 재학 및 졸업생의 취업 진로지도를 위한 자료입니다. 목적
                            외(홍보 등) 활용 시 서비스 제한, 현장 점검 등의 불이익을 받을 수
                            있습니다.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--
        꼬리말; 출력, 저장
    -->
    <div class="footerWrapper no-print" v-show="isSelectedUni & isUserGroup & isResponse">
        <!--<button class="footerBtn" v-on:click="handlePrint">
            <img src="./images/status-print-result.svg" alt="print result" />
            <span>결과 출력</span>
        </button>-->
        <button class="footerBtn" v-on:click="handleExport">
            <img src="./images/status-save-result.svg" alt="save result" />
            <span>검색 결과 저장</span>
        </button>
    </div>

    <!--
        꼬리말; 출력, 저장
    -->
    <div class="footerWrapper2 no-print" v-show="!isSelectedUni & isUserGroup & isResponse">
        <!--<button class="footerBtn" v-on:click="handlePrint">
            <img src="./images/status-print-result.svg" alt="print result" />
            <span>결과 출력</span>
        </button>-->
        <button class="footerBtn" v-on:click="handleExportByLecture">
            <img src="./images/status-save-result.svg" alt="save result" />
            <span>검색 결과 저장</span>
        </button>
    </div>

    <!-- 결과 TAB -->
    <div class="uniResultWrapper" v-show="isSelectedUni & isResponse">
        <div class="resultTabWrapper">
            <!--
                탭 선택
            -->
            <input id="status" type="radio" name="resultTabs" v-model="isStatusContent" :value="true" />
            <label class="resultTab" for="status" v-on:click="selectTab('status')">취업현황</label>
            <input id="companyList" type="radio" name="resultTabs" />
            <label class="resultTab" for="companyList" v-on:click="selectTab('companyList')">기업정보</label>
            <input id="dutyInfo" type="radio" name="resultTabs" />
            <label class="resultTab" for="dutyInfo" v-on:click="selectTab('dutyInfo')">직무정보</label>
            <input id="jobInfo" type="radio" name="resultTabs" />
            <label class="resultTab" for="jobInfo" v-on:click="selectTab('jobInfo')">일자리이동정보</label>
            <input id="character" type="radio" name="resultTabs" />
            <label class="resultTab" for="character" v-on:click="selectTab('character')">자격정보</label>

            <!--
                탭 내용 : 공통 > "취업현황"
            -->
            <div id="status_content" v-show="isStatusContent">
                <div class="colWrapper resultContentWrapper" v-show="!isProtection">
                    <div class="result_content_header">
                        <span class="range-slider__total" id="employment_total" style="display: block;width: 100%;font-weight: 500;">
                            [&nbsp;대상자 수&nbsp;:&nbsp;{{ resultCount.toLocaleString() }}&nbsp;명&nbsp;]
                        </span>
                        <br><br><br>
                    </div>

                    <div id="employment_status_summary_rows">
                        <div class="statusWrapper statusLWrapper">
                            <div class="statusTitle statusUTitle">취업률, 진학률</div>
                            <div class="statusBoxWrapper" style="padding-bottom: 67px;flex-direction: column;gap: 3px;">
                                <div style="display: flex;height: 53px;">
                                    <div class="statusQualRateBox" style="border-radius: 5px 0px 0px 0px;">
                                        <div>
                                            <span>구분</span>
                                        </div>
                                    </div>
                                    <div class="statusQualRateBox" style="margin-left: 3px;">
                                        <div>
                                            <span>3년평균</span>
                                        </div>
                                    </div>
                                    <div class="statusQualRateBox" v-for="(origin, index) in emplrate" v-bind:key="'year_'+index" style="margin-left: 3px;" :style="index === emplrate.length - 1 ? 'border-radius: 0px 5px 0px 0px;' : ''">
                                        <div>
                                            <span>{{ origin.year }}년</span>
                                        </div>
                                    </div>
                                </div>
                                <div style="display: flex;height: 53px;">
                                    <div class="statusQualRateBox">
                                        <div>
                                            <span>취업률</span>
                                        </div>
                                    </div>
                                    <div class="statusQualRateBox" style="margin-left: 3px;">
                                        <div>
                                            <span style="color: #1d45d2;font-weight: 500;">{{ totalRate.emprate }}%</span>
                                        </div>
                                    </div>
                                    <div class="statusQualRateBox" v-for="(origin, index) in emplrate" v-bind:key="'year_'+index" style="margin-left: 3px;">
                                        <div>
                                            <span style="color: #1d45d2;font-weight: 500;">{{ origin.per }}%</span>
                                        </div>
                                    </div>
                                </div>
                                <div style="display: flex;height: 53px;">
                                    <div class="statusQualRateBox" style="border-radius: 0px 0px 0px 5px;">
                                        <div>
                                            <span>진학률</span>
                                        </div>
                                    </div>
                                    <div class="statusQualRateBox" style="margin-left: 3px;">
                                        <div>
                                            <span style="color: #1d45d2;font-weight: 500;">{{ totalRate.admrate }}%</span>
                                        </div>
                                    </div>
                                    <div class="statusQualRateBox" v-for="(origin, index) in admrate" v-bind:key="'year_'+index" style="margin-left: 3px;"  :style="index === emplrate.length - 1 ? 'border-radius: 0px 0px 5px 0px;' : ''">
                                        <div>
                                            <span style="color: #1d45d2;font-weight: 500;">{{ origin.per }}%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="statusTitleWrapper">
                                <div class="statusTitle">
                                    자격
                                    <span>(평균)</span>
                                </div>
                            </div>
                            <div class="statusBoxWrapper">
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
                        </div>
                        <div class="statusWrapper statusRWrapper" style="padding-left:0px;">
                            <div class="statusTitle statusUTitle">
                                학과(계열)
                            </div>
                            <div class="statusMajorWrapper" style="height: 165px;margin-bottom: 69px;">
                                <div class="statusMajorBox">
                                    <div>학과(전공)</div>

                                    <div class="statusMajorBoxInner" v-for="(origin, index) in major_rank" v-bind:key="'major_'+index">
                                        <div>
                                            <span>{{ index + 1 }}</span>
                                            <div class="statusMajorBoxInnerLine"></div>
                                            <span>{{ origin.name }}</span>
                                        </div>
                                        <div>{{ origin.value }}</div>
                                    </div>

                                </div>
                                <div class="statusMajorBox">
                                    <div>소계열</div>

                                    <div class="statusMajorBoxInner" v-for="(origin, index) in major_field_rank" v-bind:key="'majorrank_'+index">
                                        <div>
                                            <span>{{ index + 1 }}</span>
                                            <div class="statusMajorBoxInnerLine"></div>
                                            <span>{{ origin.name }}</span>
                                        </div>
                                        <div>{{ origin.value }}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="statusTitle statusLTitle">
                                특성
                                <span>(비율)</span>
                            </div>
                            <div class="statusBoxWrapper">
                                <div class="statusCharacterBox" style="height: 105px;">
                                    <span>해외연수</span>
                                    <div>
                                        <span>{{ avarageAnalysis.oversea_percent }}</span>
                                        <span>%</span>
                                    </div>
                                </div>
                                <div class="statusCharacterBox" style="height: 105px;">
                                    <span>현장실습</span>
                                    <div>
                                        <span>{{ avarageAnalysis.internship_percent }}</span>
                                        <span>%</span>
                                    </div>
                                </div>
                                <div class="statusCharacterBox" style="height: 105px;">
                                    <span>교직과정이수</span>
                                    <div>
                                        <span>{{ avarageAnalysis.teach_percent }}</span>
                                        <span>%</span>
                                    </div>
                                </div>
                                <div class="statusCharacterBox" style="height: 105px;">
                                    <span>편입</span>
                                    <div>
                                        <span>{{ avarageAnalysis.transfer_percent }}</span>
                                        <span>%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="singleDegree flexBox boxGap">
                        <div class="expectContentWrapper" style="width: 100%;">
                            <div class="expectContentHeader">
                                <div class="lineHeader">
                                    <img src="./images/line55.svg" alt="line" />
                                </div>
                                <div class="headerContent2 headerContent">
                                    <div>급여분포</div>
                                </div>
                            </div>
                            <div class="">
                                <div class="h_chart" id="salary_chart"></div>
                            </div>
                            <!-- <h3 class="footer_DataRef">(※ 출처: ㈜이크레더블)</h3>-->
                        </div>
                    </div>
                </div>
                <div class="colWrapper resultContentWrapper" style="display: flex;align-items: center;justify-content: center;background: #f4f6fb;color: rgb(115, 0, 255);" v-show="isProtection">
                    비공개
                </div>
            </div>

            <!--
                탭 내용 : 공통 > "기업정보"
            -->
            <div id="companyList_content" v-show="isCompanyListContent">
                <div class="colWrapper resultContentWrapper">
                    <div class="singleDegree flexBox boxGap">
                        <div class="expectContentWrapper leftItem">
                            <div class="expectContentHeader">
                                <div class="lineHeader">
                                    <img src="./images/line42.svg" alt="line" />
                                </div>
                                <div class="headerContent">
                                    <div>기업유형</div>
                                </div>
                            </div>
                            <div class="chartBox1">
                                <div class="donutChartResult" id="comtype_pie_chart"></div>
                            </div>
                        </div>
                        <div class="expectContentWrapper rightItem">
                            <div class="expectContentHeader">
                                <div class="lineHeader">
                                    <img src="./images/line42.svg" alt="line" />
                                </div>
                                <div class="headerContent">
                                    <div>산업분류</div>
                                </div>
                            </div>
                            <div class="chartBox1">
                                <div class="donutChartResult" id="comind_pie_chart"></div>
                            </div>
                        </div>
                    </div>

                    <div style="display:flex; flex-wrap: wrap;justify-content: center;">
                        <div class="expectContentHeader" style="width: 100%;">
                            <div class="lineHeader">
                                <img src="./images/line55.svg" alt="line" />
                            </div>
                            <div class="headerContent">
                                <div>근무지역</div>
                            </div>
                        </div>
                        <div style="display: flex;">
                            <div class="conpLWRapper">
                                <div class="doChartBox1" style="width:450px;">
                                    <div class="donutChartResult" id="company_area"></div>
                                </div>
                            </div>
                            <div class="compVLine" style="width: 0px;"></div>
                            <div class="compRWrapper">
                                <span>전체</span>
                                <div class="compListBox">
                                    <div v-for="(lptm, i) in company_area_list" v-bind:key="'comarea_'+i"
                                        v-bind:class="( i < companyPieTopCount ) ? 'activeSingleCompList' : 'singleCompList'"
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
                            </div>
                        </div>
                    </div>

                    <div style="display:flex; flex-wrap: wrap;justify-content: center;" v-show="!isProtection">
                        <div class="expectContentHeader" style="width: 100%;">
                            <div class="lineHeader">
                                <img src="./images/line55.svg" alt="line" />
                            </div>
                            <div class="headerContent">
                                <div>취업기업목록</div>
                            </div>
                        </div>
                        <div style="display: flex;">
                            <div class="conpLWRapper">
                                <div class="doChartBox1" style="width:450px;">
                                    <div class="donutChartResult" id="company"></div>
                                </div>
                            </div>
                            <div class="compVLine" style="width: 0px;"></div>
                            <div class="compRWrapper">
                                <span>전체</span>
                                <div class="compListBox">
                                    <div v-for="(lptm, i) in company_list" v-bind:key="'comlist_'+i"
                                        v-bind:class="( i < companyPieTopCount ) ? 'activeSingleCompList' : 'singleCompList'"
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
                                    기업취업현황에서 선택한 회사명으로 검색
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--
                탭 내용 : 공통 > "직무정보"
            -->
            <div id="dutyInfo_content" v-show="isDutyContent">
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
                                </div>
                                <div class="resultDataListWrapper">
                                    <div class="resultDataContentWrapper">
                                        <div class="resultDataContent" v-show="0 < job_low_list.length"
                                            v-for="(license, index) in job_low_list"
                                            v-bind:key="'joblowlist_'+index"
                                            v-bind:class="(index < 5) ? 'resultDataContentActive' : 'resultDataContent'">
                                            <div>{{ index + 1 }}</div>
                                            <div>{{ license.text }}</div>
                                            <div>{{ license.value }}</div>
                                        </div>
                                        <div class="resultListNoData" v-show="0 === job_low_list.length">
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
                탭 내용 : 공통 > "일자리이동정보"
            -->
            <div id="jobInfo_content" v-show="isJobInfoContent">
                <div class="resultContentWrapper">
                    <!-- 신규추가 -->
                    <div class="" style="width: 100%; margin-top: 45px;">
                        <div class="expectContentWrapper leftItem">
                            <div class="expectContentHeader">
                                <div class="lineHeader">
                                    <img src="./images/line55.svg" alt="line" />
                                </div>
                                <div style="display: flex;justify-content: flex-end;align-items: baseline;">
                                    <select class="selectFlow" style="margin-right: 10px;" v-on:change="changeFlow" v-model="select_jobflow">
                                        <option value="" selected>기업규모</option>
                                        <option :key="'jobflow_'+i" :value="job" v-for="(job, i) in select_jobflow_list">
                                            {{ job }}
                                        </option>
                                    </select>
                                    <select class="selectFlow" style="margin-right: 10px;" v-on:change="changeFlow" v-model="select_flow">
                                        <option value="" selected>산업분류</option>
                                        <option :key="'flow_'+i" :value="flow" v-for="(flow, i) in select_flow_list">
                                            {{ flow }}
                                        </option>
                                    </select>
                                    <div class="tooltip" style="margin-right: 10px;">
                                        <img class="tooltipimg" src="./images/inActiveQIcon.svg" alt="questionMark" />
                                        <div class="tooltiptext academicSubjectType">
                                            기업유형 또는 산업분류를 선택하면 선택한 곳에<br>
                                            취업한 졸업자의 이동정보만을 보여줍니다.<br><br>
                                            선택 시 직장유지비율, 이동 기업규모, 이동 산업분류에 적용됩니다.
                                        </div>
                                    </div>
                                </div>
                                <div class="headerContent" style="margin-bottom: 15px;width: 99%;justify-content: space-between;">
                                    <div>직장유지비율</div>
                                </div>
                            </div>
                            <div style="display:flex;">
                                <div class="chart-3rd">
                                    <span class="chartdesc">1년 후</span>
                                    <div class="" id="job_retention_rate1"></div>
                                </div>
                                <div class="chart-3rd">
                                    <span class="chartdesc">2년 후</span>
                                    <div class="" id="job_retention_rate2"></div>
                                </div>
                                <div class="chart-3rd">
                                    <span class="chartdesc">3년 후</span>
                                    <div class="" id="job_retention_rate3"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="" style="width: 100%; margin-top: 45px;">
                        <div class="expectContentWrapper leftItem">
                            <div class="expectContentHeader">
                                <div class="lineHeader">
                                    <img src="./images/line55.svg" alt="line" />
                                </div>
                                <div class="headerContent" style="margin-bottom: 15px;width: 99%;justify-content: space-between;">
                                    <div>
                                        이동 기업규모
                                        <span style="font-size: 13px;color: red;">* 직장 유지비율에서 이동자가 이직한 기업의 기업규모입니다.</span>
                                    </div>
                                </div>
                            </div>
                            <div style="display:flex;">
                                <div class="chart-3rd">
                                    <span class="chartdesc">1년 후</span>
                                    <div class="" id="move_comtype1"></div>
                                </div>
                                <div class="chart-3rd">
                                    <span class="chartdesc">2년 후</span>
                                    <div class="" id="move_comtype2"></div>
                                </div>
                                <div class="chart-3rd">
                                    <span class="chartdesc">3년 후</span>
                                    <div class="" id="move_comtype3"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="" style="width: 100%; margin-top: 45px;">
                        <div class="expectContentWrapper leftItem">
                            <div class="expectContentHeader">
                                <div class="lineHeader">
                                    <img src="./images/line55.svg" alt="line" />
                                </div>
                                <div class="headerContent" style="margin-bottom: 15px;width: 99%;justify-content: space-between;">
                                    <div>
                                        이동 산업분류
                                        <span style="font-size: 13px;color: red;">* 직장 유지비율에서 이동자가 이직한 기업의 산업분류입니다.</span>
                                    </div>
                                </div>
                            </div>
                            <div style="display:flex;">
                                <div class="chart-3rd">
                                    <span class="chartdesc">1년 후</span>
                                    <div class="" id="move_ind1"></div>
                                </div>
                                <div class="chart-3rd">
                                    <span class="chartdesc">2년 후</span>
                                    <div class="" id="move_ind2"></div>
                                </div>
                                <div class="chart-3rd">
                                    <span class="chartdesc">3년 후</span>
                                    <div class="" id="move_ind3"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="" style="width: 100%; margin-top: 45px;">
                        <div class="expectContentWrapper leftItem">
                            <div class="expectContentHeader">
                                <div class="lineHeader">
                                    <img src="./images/line55.svg" alt="line" />
                                </div>
                                <div class="headerContent" style="margin-bottom: 15px;width: 99%;justify-content: space-between;">
                                    <div>기업규모별 이동</div>
                                </div>
                            </div>
                            <div class="">
                                <div class="" id="jobflow"></div>
                            </div>
                        </div>
                    </div>

                    <div class="" style="width: 100%; margin-top: 45px;">
                        <div class="expectContentWrapper leftItem">
                            <div class="expectContentHeader">
                                <div class="lineHeader">
                                    <img src="./images/line55.svg" alt="line" />
                                </div>
                                <div class="headerContent" style="margin-bottom: 15px;width: 99%;justify-content: space-between;">
                                    <div>산업분류별 이동</div>
                                </div>
                            </div>
                            <div class="">
                                <div class="" id="indflow"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--
                탭 내용 : 공통 > "자격정보"
            -->
            <div id="character_content" v-show="isCharacterContent">
                <div class="colWrapper resultContentWrapper">
                    <div class="singleDegree flexBox boxGap">
                        <div class="shortSingleDegree flexBox boxGap" style="margin-top: 0px;">
                            <div class="expectContentWrapper leftItem">
                                <div class="expectContentHeader">
                                    <div class="lineHeader">
                                        <img src="./images/line42.svg" alt="line" />
                                    </div>
                                    <div class="headerContent scoreContentHeader" style="margin-top: 0px;">
                                        <div>TOEIC</div>
                                        <div style="display: none"></div>
                                        <div class="headerText2" v-show="!isProtection">
                                            평균 <span class="deepBlueSpan">{{ toeic_avarage }}점</span>
                                            <span class="graySpan">( {{ toeic_rate }}% 보유 )</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="chartBox1" v-show="!isProtection">
                                    <!-- Inserting Chart -->
                                    <div id="toeic_chart"></div>
                                </div>
                                <div class="colWrapper resultContentWrapper" style="display: flex;align-items: center;justify-content: center;background: #f4f6fb;color: rgb(115, 0, 255); width: 500px; min-height: 400px;" v-show="isProtection">
                                    비공개
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
                                        <div class="headerText2" v-show="!isProtection">
                                            평균 <span class="deepBlueSpan">{{ avarageAnalysis.txt_gradescore_avg }}</span>점
                                        </div>
                                    </div>
                                </div>
                                <div class="chartBox1" v-show="!isProtection">
                                    <!-- Inserting Chart -->
                                    <div id="grade_chart"></div>
                                </div>
                                <div class="colWrapper resultContentWrapper" style="display: flex;align-items: center;justify-content: center;background: #f4f6fb;color: rgb(115, 0, 255);width: 500px; min-height: 400px;" v-show="isProtection">
                                    비공개
                                </div>
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
                                    <div>자격증 종류</div>
                                    <div></div>
                                    <div class="">(국가기술/국가전문)</div>
                                </div>
                            </div>
                            <div class="flexBox2">
                                <div class="doChartBox2 doChartBox1">
                                    <!-- Inserting Chart -->
                                    <div class="donutChartResult" id="licenseChart"></div>
                                </div>
                                <div class="resultDataListWrapper">
                                    <div class="resultDataContentWrapper">
                                        <div class="resultDataContent" v-show="0 < license_list.length"
                                            v-for="(license, index) in license_list" v-bind:key="'license_'+index"
                                            v-bind:class="(index < 3) ? 'resultDataContentActive' : 'resultDataContent'">
                                            <div>{{ index + 1 }}</div>
                                            <div>{{ license.text }}</div>
                                            <div>{{ license.value }}</div>
                                        </div>
                                        <div class="resultListNoData" v-show="0 === license_list.length">
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
                                <div class="lineHeader">
                                    <img src="./images/line55.svg" alt="line" />
                                </div>
                                <div class="headerContent2 headerContent">
                                    <div>자격증 종류</div>
                                    <div></div>
                                    <div class="">(민간공인/민간등록)</div>
                                </div>
                            </div>
                            <div class="flexBox2">
                                <div class="doChartBox2 doChartBox1">
                                    <!-- Inserting Chart -->
                                    <div class="donutChartResult" id="privatelicenseChart"></div>
                                </div>
                                <div class="resultDataListWrapper">
                                    <div class="resultDataContentWrapper">
                                        <div class="resultDataContent" v-show="0 < privatelicense_list.length"
                                            v-for="(license, index) in privatelicense_list"
                                            v-bind:key="'privatelicense_list_'+index"
                                            v-bind:class="(index < 3) ? 'resultDataContentActive' : 'resultDataContent'">
                                            <div>{{ index + 1 }}</div>
                                            <div>{{ license.text }}</div>
                                            <div>{{ license.value }}</div>
                                        </div>
                                        <div class="resultListNoData" v-show="0 === privatelicense_list.length">
                                            데이터가 존재하지 않습니다.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 결과 TAB -->
    <div class="uniResultWrapper2" v-show="!isSelectedUni & isResponse">
        <div class="resultTabWrapper">
            <!--
                탭 선택
            -->
            <input id="compareanal" type="radio" name="resultTabs" v-model="isCompareAnalContent" :value="true" />
            <label class="resultTab" for="compareanal" v-on:click="selectTab('compareanal')">비교분석</label>
            <input id="allanal" type="radio" name="resultTabs" />
            <label class="resultTab" for="allanal" v-on:click="selectTab('allanal')">전체분석</label>
        </div>
        <div class="resultContentWrapper"  v-show="isCompareAnalContent">
            <div class="singleDegree flexBox boxGap" style="margin-bottom: 0px;">
                <div class="expectContentWrapper" style="width: 100%;">
                    <div style="display:flex; flex-wrap: wrap;">
                        <div class="expectContentHeader" style="width: 100%;">
                            <div class="lineHeader">
                                <img src="./images/line55.svg" alt="line" />
                            </div>
                            <div class="headerContent">
                                <div>취업현황</div>
                            </div>
                        </div>
                        <div style="display: flex;flex-direction: column;width: 49.5%;padding-top: 40px;">
                            <div class="h_chart" id="employee_multi_chart"></div>
                        </div>
                        <div style="display: flex;flex-direction: column;width: 49.5%;padding-top: 40px;">
                            <div class="h_chart" id="employee_multi_chart2"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="singleDegree flexBox boxGap" style="margin-bottom: 0px;">
                <div class="expectContentWrapper">
                    <div style="display:flex; flex-wrap: wrap;">
                        <div class="expectContentHeader" style="width: 100%;">
                            <div class="lineHeader">
                                <img src="./images/line55.svg" alt="line" />
                            </div>
                            <div class="headerContent">
                                <div>비교 {{ subjectScalars.schgrpnm}}(학과)의 유사강좌 현황</div>
                            </div>
                        </div>
                        <div style="display: flex;flex-direction: column;width: 100%;padding-top: 20px;">
                            <table class="gridTable" style="border-collapse: separate;border-spacing: 3px;padding-bottom: 33px;">
                                <thead>
                                    <tr>
                                        <th class="subjectTableHeader" style="font-size: 16px;font-weight: 400;">
                                            대학명
                                        </th>
                                        <th v-for="(subjects, university, index) in subjectList" :key="'university1_'+index" class="subjectTableHeader" :style="{ background: highchartColor[index], width: subjectCnt}">
                                            <p style="font-size: 16px;">{{ university.split('/')[0] }}</p>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th class="subjectTableSubHeader" style="font-size: 16px;font-weight: 400;">
                                            학과명
                                        </th>
                                        <th v-for="(subjects, university, index) in subjectList" :key="'university2_'+index" class="subjectTableSubHeader" :style="{ background: highchartColor[index]}">
                                            <p style="font-size: 15px;line-height: 1.2;" v-html="university.split('/')[1].replaceAll(' ', '<br/>')"></p>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!--<tr style="justify-content: center;text-align: center;">
                                        <td class="gridTalbeFirstCol">
                                            졸업자수
                                        </td>
                                        <td v-for="(emprateCnt, index) in subjectTotalrate.emprateCnt" :key="'emprateCnt_'+index" class="subjectTableStats">
                                            {{ formatNumberWithCommas(emprateCnt) }}명
                                        </td>
                                    </tr>
                                    <tr style="justify-content: center;text-align: center;">
                                        <td class="gridTalbeFirstCol">
                                            취업자수
                                        </td>
                                        <td v-for="(admrateCnt, index) in subjectTotalrate.admrateCnt" :key="'admrateCnt_'+index" class="subjectTableStats">
                                            {{ formatNumberWithCommas(admrateCnt) }}명
                                        </td>
                                    </tr>
                                    <tr style="justify-content: center;text-align: center;">
                                        <td class="gridTalbeFirstCol">
                                            취업률
                                        </td>
                                        <td v-for="(emprate, index) in subjectTotalrate.emprate" :key="'emprate_'+index" class="subjectTableStats">
                                            {{ emprate }}%
                                        </td>
                                    </tr>
                                    <tr style="justify-content: center;text-align: center;">
                                        <td class="gridTalbeFirstCol">
                                            진학률
                                        </td>
                                        <td v-for="(admrate, index) in subjectTotalrate.admrate" :key="'admrate_'+index" class="subjectTableStats">
                                            {{ admrate }}%
                                        </td>
                                    </tr>-->
                                    <tr v-for="rowIndex in (subjectList[Object.keys(subjectList)[0]] ? subjectList[Object.keys(subjectList)[0]].length : 0)">
                                        <td v-if="rowIndex == 1" :rowspan="subjectList[Object.keys(subjectList)[0]].length" style="font-size: 16px;vertical-align: middle;text-align: center;background: #d1dbff;color: rgb(57, 85, 184);">
                                            강좌
                                        </td>
                                        <td v-for="(subjects, university, index) in subjectList" :key="university"
                                            :style="{
                                                width: subjectCnt,
                                                minHeight: '47px',
                                                padding: '12px 12px',
                                                background: convertHexToRGBA(highchartColor[index], 0.2),
                                                lineHeight: '1.2',
                                                verticalAlign: 'middle',
                                            }"
                                            v-html="subjects[rowIndex - 1] ? subjects[rowIndex - 1].replaceAll('/', '<br/>') : ''">
                                        >
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div class="singleDegree flexBox boxGap">
                <div class="expectContentWrapper" style="width: 100%;">
                    <div style="display:flex; flex-wrap: wrap;justify-content: space-between;">
                        <div class="expectContentHeader" style="width: 100%;">
                            <div class="lineHeader">
                                <img src="./images/line55.svg" alt="line" />
                            </div>
                            <div class="headerContent">
                                <div>비교 {{ subjectScalars.schgrpnm}}(학과)의 강좌 현황</div>
                            </div>
                        </div>

                        <div class="itemarea">
                            <!-- 유사강좌 -->
                            <span class="range-slider__total" style="font-weight: 500;font-size: 16px;margin-bottom: 10px;color:rgba(0, 0, 0, 0.8);text-align: left;">
                                유사(공통) 강좌
                            </span>
                            <div v-for="(subject, index) in subjectSimilarList"
                                 :key="'subject_1_' + index"
                                 v-if="subject.trim() !== ''"
                                 class="subjectStats"
                                 style="background: rgb(209, 219, 255); color:rgb(57, 85, 184);">
                                {{ subject }}
                            </div>
                        </div>
                        <div class="itemarea">
                            <!-- 특이강좌 -->
                            <span class="range-slider__total" style="font-weight: 500;font-size: 16px;color:rgba(0, 0, 0, 0.8);text-align: left;">
                                특이강좌
                            </span>
                            <template v-for="(subjects, index) in subjectUniqueList">
                                <div v-if="subjects.length !== 0" style="width: 100%;">
                                    <div style="display: flex;width: 440px;justify-content: flex-start;padding-top: 0px;padding-top: 20px;padding-bottom: 10px;width: 100%;">
                                        <div :style="{ background: highchartColor[index] }" style="width:30px;margin-left: 2px;"></div>
                                        <div style="margin-left: 5px;">{{ Object.keys(subjectList)[index].split('/')[0] }}</div>
                                    </div>
                                    <div style="display: flex;flex-direction: row;flex-wrap: wrap;">
                                        <div v-for="(subject, subIndex) in subjects"
                                             v-if="subject.trim() !== ''"
                                             :key="'subject_' + index + '_' + subIndex"
                                             class="subjectStats"
                                             :style="{ background: highchartColor[index], color:'#fff' }">
                                            {{ subject }}
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="resultContentWrapper"  v-show="isAllAnalContent">
            <div class="singleDegree flexBox boxGap">
                <div class="expectContentWrapper">
                    <div style="display:flex; flex-wrap: wrap;">
                        <div class="expectContentHeader" style="width: 100%;">
                            <div class="lineHeader">
                                <img src="./images/line55.svg" alt="line" />
                            </div>
                            <div class="headerContent">
                                <div>
                                    전체 {{ subjectScalars.schgrpnm}}(학과)의 유사강좌 현황
                                </div>
                            </div>
                        </div>
                        <div style="display: flex;">
                            <div class="conpLWRapper" style="width: 540px;padding-top: 20px;padding-right: 40px;">
                                <div class="doChartBox1">
                                    <div class="donutChartResult" id="lectureChart"></div>
                                </div>
                            </div>
                            <div class="compVLine" style="height: 500px;"></div>
                            <div class="compRWrapper">
                                <span class="range-slider__total" id="lecture_total" style="font-weight: 500;font-size: 16px;color: #677ad4;margin-right: 0px;">
                                    총 대학 수 : {{ formatNumberWithCommas(parseInt(similarSchools.length)) }}개 | 학과 수 : {{ formatNumberWithCommas(parseInt(subjectScalars.cnt_depts)) }}개 | 과목 수 : {{ formatNumberWithCommas(parseInt(subjectStatsCnt)) }}개
                                </span>
                                <div class="compListBox">
                                    <div v-show="0 < (subjectStats ? subjectStats.length : 0)" v-for="(subject, index) in subjectStats" v-bind:key="'subject_'+index"
                                        v-bind:class="( index < 10 ) ? 'activeSingleCompList' : 'singleCompList'"
                                        >
                                        <div>{{ index + 1 }}</div>
                                        <div>
                                            <div>{{ subject.text }}</div>
                                            <div>{{ subject.value }}</div>
                                        </div>
                                    </div>
                                    <div class="resultListNoData" v-show="0 === (subjectStats ? subjectStats.length : 0)">
                                        데이터가 존재하지 않습니다.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="singleDegree flexBox boxGap">
                <div class="expectContentWrapper">
                    <div style="display:flex; flex-wrap: wrap;">
                        <div class="expectContentHeader" style="width: 100%;">
                            <div class="lineHeader">
                                <img src="./images/line55.svg" alt="line" />
                            </div>
                            <div class="headerContent">
                                <div>
                                    전체 {{ subjectScalars.schgrpnm}}(학과)의 강좌 현황
                                    <!--<span style="font-size: 16px;font-weight: 400;">(선택한 학과 기준)</span>
                                    <div class="tooltip" style="margin-right: 10px;">
                                        <img class="tooltipimg" style="top:0;" src="./images/inActiveQIcon.svg" alt="questionMark" />
                                        <div class="tooltiptext2 academicSubjectType">
                                            선택학과와 유사한 모든 학과의 강좌리스트 (전체 {{ subjectScalars.schgrpnm}} 기준)
                                        </div>
                                    </div>-->
                                    <!--<span style="font-size: 16px;font-weight: 400;">(전체 {{ subjectScalars.schgrpnm}} 기준)</span>-->
                                </div>
                            </div>
                        </div>
                        <div style="display: flex;">
                            <div class="conpLWRapper" style="width: 540px;padding-top: 20px;padding-right: 40px;">
                                <div class="doChartBox1">
                                    <div class="donutChartResult" id="lectureAllChart"></div>
                                    <!--<div class="donutChartCenterText" style="left: 235px;">TOP 5</div>-->
                                </div>
                            </div>
                            <div class="compVLine" style="height: 500px;"></div>
                            <div class="compRWrapper">
                                <span class="range-slider__total" id="lecture_total" style="font-weight: 500;font-size: 16px;color: #677ad4;margin-right: 0px;">
                                    총 대학 수 : {{ formatNumberWithCommas(parseInt(similarSchools.length)) }}개 | 학과 수 :  {{ formatNumberWithCommas(parseInt(subjectScalars.cnt_depts)) }}개 | 과목 수 : {{ formatNumberWithCommas(parseInt(subjectStatsAllCnt)) }}개
                                </span>
                                <div class="compListBox">
                                    <div v-show="0 < (subjectStats ? subjectStatsAll.length : 0)" v-for="(subject, index) in subjectStatsAll" v-bind:key="'subject_'+index"
                                        v-bind:class="( index < 10 ) ? 'activeSingleCompList' : 'singleCompList'"
                                        v-bind:id="'subjectSnm_'+index"
                                        v-bind:name="elemName_snmListItems"
                                        v-on:click="selectSnmFromList('subjectSnm_'+index)">
                                        <div>{{ index + 1 }}</div>
                                        <div>
                                            <div>{{ subject.text }}</div>
                                            <div>{{ subject.value }}</div>
                                        </div>
                                    </div>
                                    <div class="resultListNoData" v-show="0 === (subjectStatsAll ? subjectStatsAll.length : 0)">
                                        데이터가 존재하지 않습니다.
                                    </div>
                                </div>
                                <button class="reSearchBtn no-print" v-on:click="handleSearchUniSubmit" v-show="!isUniFetching">
                                    선택한 강좌명으로 강좌 개설 학교 정보 검색
                                </button>
                                <button class="reSearchBtn no-print" v-show="isUniFetching">
                                    <i class="fa fa-refresh fa-spin"></i>검색 중
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 선택한 강좌명으로 강좌 개설 학교 정보 검색 시 -->
            <div class="singleDegree flexBox boxGap" v-show="subjectSearchResult && subjectSearchResult.schnm && subjectSearchResult.schnm.length > 0">
                <div class="expectContentWrapper" style="width: 100%;">
                    <div style="display:flex; flex-wrap: wrap;">
                        <div class="expectContentHeader" style="width: 100%;">
                            <div class="lineHeader">
                                <img src="./images/line55.svg" alt="line" />
                            </div>
                            <div class="headerContent">
                                <div>
                                    강좌 개설 {{ subjectScalars.schgrpnm}} 정보
                                </div>
                            </div>
                        </div>
                        <div style="display: flex;flex-direction: column;width:100%;">
                            <span class="range-slider__total" id="lecture_total" style="font-weight: 500;font-size: 16px;color: #677ad4;margin-right: 0px;padding-bottom: 20px;">
                                총 {{ subjectScalars.schgrpnm}} 학과 수 : {{ subjectSearchResult && subjectSearchResult.schnm ? subjectSearchResult.schnm.length : 0 }}개
                            </span>
                            <div style="overflow-x: auto;height: 960px;">
                                <table class="gridTable2" style="border-collapse: separate;border-spacing: 3px;width: 100%;">
                                    <thead>
                                        <tr>
                                            <th class="subjectTableSearch" style="font-size: 16px;padding: 10px;word-break: auto-phrase;height: 50px;border-radius: 0;">
                                                NO
                                            </th>
                                            <th class="subjectTableSearch" style="font-size: 16px;padding: 10px;word-break: auto-phrase;height: 50px;border-radius: 0;">
                                                {{ subjectScalars.schgrpnm}}명
                                            </th>
                                            <th class="subjectTableSearch" style="font-size: 16px;padding: 10px;word-break: auto-phrase;height: 50px;border-radius: 0;">
                                                본분교구분
                                            </th>
                                            <th class="subjectTableSearch" style="font-size: 16px;padding: 10px;word-break: auto-phrase;height: 50px;border-radius: 0;">
                                                학과명
                                            </th>
                                            <th class="subjectTableSearch" style="font-size: 16px;padding: 10px;word-break: auto-phrase;height: 50px;border-radius: 0;">
                                                졸업자
                                            </th>
                                            <th class="subjectTableSearch" style="font-size: 16px;padding: 10px;word-break: auto-phrase;height: 50px;border-radius: 0;">
                                                취업자
                                            </th>
                                            <th class="subjectTableSearch" style="font-size: 16px;padding: 10px;word-break: auto-phrase;height: 50px;border-radius: 0;">
                                                취업률
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style="justify-content: center;text-align: center;"
                                            v-for="(sch, index) in subjectSearchResult.schnm" :key="'subjectSearchResult_university2_'+index">
                                            <td class="subjectTableStats" style="vertical-align: middle;">
                                                {{ index + 1 }}
                                            </td>
                                            <td class="subjectTableStats" style="vertical-align: middle;">
                                                {{ subjectSearchResult.schnm[index] }}
                                            </td>
                                            <td class="subjectTableStats" style="vertical-align: middle;">
                                                {{ subjectSearchResult.orgnm[index] }}
                                            </td>
                                            <td class="subjectTableStats" style="vertical-align: middle;">
                                                {{ subjectSearchResult.deptnm[index] }}
                                            </td>
                                            <td class="subjectTableStats" style="vertical-align: middle;">
                                                {{ formatNumberWithCommas(subjectSearchResult.graduCnt[index]) }}명
                                            </td>
                                            <td class="subjectTableStats" style="vertical-align: middle;">
                                                {{ formatNumberWithCommas(subjectSearchResult.emprateCnt[index]) }}명
                                            </td>
                                            <td class="subjectTableStats" style="vertical-align: middle;">
                                                {{ formatNumberWithCommas(subjectSearchResult.emprate[index]) }}%
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 사용현황 통계 다운로드 -->
    <div class="downloadBack" v-show="isUsageExporter" style="align-items: baseline;">
        <div class="downloadModal" style="margin-top: 60px;">
            <div class="downloadModalHeader">
                <div class="flexBox3">
                    <div class="searchModalTitle">사용현황 통계 다운로드</div>
                    <div class="downloadModalClose pointer" v-on:click="isUsageExporter = false">
                        <img src="./images/close1.svg" alt="close" />
                    </div>
                </div>
            </div>
            <div class="downloadModalContent">
                <div class="downloadInnerContent" style="justify-content: space-between;">
                    <div class="downloadFlex">
                        <span>구분</span>
                        <select class="usageSelect" style="width: 200px;" title="구분선택" v-model="usageExporterTypeValue">
                            <option :key="i" :value="type.value"
                                v-for="(type, i) in usageExporterType"
                                v-bind:title="type.text">
                                {{ type.text }}</option>
                        </select>
                    </div>
                    <div class="downloadFlex" style="width: 360px;">
                        <span>조회기간</span>
                        <div class="flexBox setCenter" style="align-items: center;">
                            <input class="downloadCalBox1 downloadInputBox" style="width: 100%;"
                                type="date"
                                placeholder="시작일"
                                format="yyyy-MM-dd"
                                name="dateStartup"
                                aria-label="dateStartup"
                                v-model="usageExporterStartDate"/>
                            <div class="downloadHLine" style="width: 40px;"></div>
                            <input type="date"  style="width: 100%;"
                                placeholder="종료일"
                                format="yyyy-MM-dd"
                                name="dateFinish"
                                aria-label="dateFinish"
                                v-model="usageExporterEndDate"/>
                        </div>
                    </div>
                    <div class="downloadFlex">
                        <span>조회간격</span>
                        <select title="조회간격" class="usageSelect" style="width:120px;" v-model="usageExporterDateValue">
                            <option v-bind:value="null_value">선택</option>
                            <option :key="i" :value="date.value"
                                v-for="(date, i) in usageExporterDate"
                                v-bind:title="date.text">
                                {{ date.text }}</option>
                        </select>
                    </div>
                </div>
                <div class="downloadModalFooter setCenter" style="justify-content: center;">
                    <button class="downloadFooterBtn"
                        v-on:click="usageExporterSearchOnSubmit">
                        <img src="./images/downloadIcon1.svg" alt="icon" />
                        다운로드
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- 동의 팝업 -->
    <div class="downloadBack" v-show="isAgree" style="display: none;align-items: baseline;">
        <div class="downloadModal" style="margin-top: 60px;">
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
                    <button class="downloadFooterBtn" v-on:click="handleInformationAgree(userid)">
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

    <!-- 사용방법 -->
    <div v-show="isSelectedManual" class="howModalBack">
        <div class="modalPage1" v-show="isManualStep1" style="padding-top:14px;">
            <div class="flexBox3">
                <div class="leftDes1">
                    <button class="controllers2" v-on:click="manualDownloadFile">사용방법 다운로드</button>
                </div>
                <div class="controllerBox">
                    <button class="controllers prevBtn">
                        <img src="images/lArrow.svg" alt=""/>
                        이전
                    </button>
                    <button class="controllers nextBtn" v-on:click="handleManual(2)">
                        다음
                        <img src="images/rArrow.svg" alt=""/>
                    </button>
                </div>
                <div class="pointer" v-on:click="handleManualInit">
                    <img src="./images/close2.svg" alt="close" />
                </div>
            </div>
            <div class="sampleTabs" style="margin-top: 128px;">
                <div class="tabWrapper">
                    <input id="conditionSearch2" type="radio" name="searchTabs2" checked disabled/>
                    <label class="sampleActiveTab tabs" for="conditionSearch2">학교별 분석
                        <div class="activeTab">
                            <img src="./images/activeQIcon.svg" alt="questionMark" />
                        </div>
                    </label>

                    <input id="companySearch_howto" type="radio" name="searchTabs2" disabled/>
                    <label class="sampleInactiveTab tabs" for="companySearch_howto">강좌 분석
                        <div class="inactiveTab">
                            <img src="./images/inActiveQIcon.svg" alt="questionMark" />
                        </div>
                    </label>
                    <div class="leftDeco1 flexBox">
                        <div style="height: 144px;"></div>
                        <div class="DecoText3 sampleTextBox4">
                            우리대학의 <span class="blueSpan">특정학과</span> 또는 <span class="blueSpan">계열</span>을 선택하여 최근 3년간 취업자의 정보를 검색합니다.
                        </div>
                    </div>
                    <div class="RightDeco2 flexBox">
                        <div></div>
                        <div class="DecoText3 sampleTextBox4" style="line-height: 28px;margin-bottom: -26px;">
                            우리대학의 <span class="blueSpan">특정학과</span>를 선택하여 해당 학과에<br/>개설된 강좌와 타 대학 <span class="blueSpan">유사학과</span>의 강좌정보를 비교분석 합니다.
                        </div>
                    </div>
                    <div class="DecoText2 DecoText1 sampleTextBox4">
                        <span class="blueSpan">학교별 분석</span>과&nbsp;<span class="blueSpan">강좌 분석&nbsp;</span>중 검색할 방법을 선택합니다.
                    </div>
                </div>
            </div>
        </div>

        <div class="modalPage1" v-show="isManualStep2" style="padding-top:14px;">
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
                    <img src="images/close2.svg" alt="close" />
                </div>
            </div>

            <div class="sampleTabs" style="margin-top: 128px;">
                <div class="tabWrapper">
                    <input id="conditionSearch2" type="radio" name="searchTabs2" checked disabled/>
                    <label class="sampleActiveTab tabs" for="conditionSearch2">학교별 분석
                        <div class="activeTab">
                            <img src="./images/activeQIcon.svg" alt="questionMark" />
                        </div>
                    </label>
                </div>
            </div>

            <div class="formWrapper howTo" style="margin-top: 10px;">
                <div class="setWidth">
                    <div style="display:flex;">
                        <div style="width: 300px;">
                            <div class="qualInput toeicInput" style="padding-top: 10px;">
                                <span>학교</span>
                                <input class="degreeInput degreeSelectBox degreeSelect8" placeholder="대학 검색" />
                            </div>
                            <div class="qualInput toeicInput">
                                <span>학과</span>
                                <input class="degreeInput degreeSelectBox degreeSelect8" placeholder="학과 검색" />
                            </div>
                        </div>
                        <div style="padding-top: 40px;padding-left: 10px;">
                            <div class="rightDes1 howTo02" style="text-align: left;">
                                학교는 <span class="blueSpan">본인 대학</span>만 <span class="blueSpan">선택</span>이 가능합니다.
                            </div>
                            <div class="rightDes1 howTo03" style="text-align: left;">
                                조회할 <span class="blueSpan">학과</span> 를 선택합니다.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modalPage1" v-show="isManualStep3" style="padding-top:14px;">
            <div class="flexBox3">
                <div class="leftDes1" style="visibility: hidden;"></div>
                <div class="controllerBox">
                    <button class="controllers activePrev" v-on:click="handleManual(2)">
                        <img src="images/lArrow.svg" alt=""/>
                        이전
                    </button>
                    <button class="controllers nextBtn" v-on:click="handleManual(4)">
                        다음
                        <img src="images/rArrow.svg" alt=""/>
                    </button>
                </div>
                <div class="pointer" v-on:click="handleManualInit">
                    <img src="images/close2.svg" alt="close" />
                </div>
            </div>

            <div class="sampleTabs" style="margin-top: 128px;">
                <div class="tabWrapper">
                    <input id="conditionSearch2" type="radio" name="searchTabs2" checked disabled/>
                    <label class="sampleActiveTab tabs" for="conditionSearch2">학교별 분석
                        <div class="activeTab">
                            <img src="./images/activeQIcon.svg" alt="questionMark" />
                        </div>
                    </label>
                </div>
            </div>

            <div class="formWrapper howTo" style="margin-top:10px;">
                <div class="setWidth" style="display: flex;padding-left:455px;">
                    <div style="display:flex;">
                        <div style="width: 300px;">
                            <div class="qualInput toeicInput" style="padding-top: 10px;">
                                <span>계열</span>
                                <input class="degreeInput degreeSelectBox degreeSelect8" placeholder="대계열 선택" />
                            </div>
                            <div class="rightDes1 howTo02" style="text-align: left;width: 320px;">
                                학과 대신 학과가 속한 <span class="blueSpan">계열별 검색</span>이 가능합니다.
                            </div>
                        </div>
                    </div>
                    <div style="display:flex;padding-left: 105px;">
                        <div style="width: 300px;">
                            <div class="qualInput toeicInput" style="padding-top: 10px;">
                                <span>성별</span>
                                <input class="degreeInput degreeSelectBox degreeSelect8" placeholder="성별 선택" />
                            </div>
                            <div class="rightDes1 howTo02" style="text-align: left;">
                                <span class="blueSpan">성별</span>을 선택할 수 있습니다.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modalPage1"  v-show="isManualStep4"  style="padding-top:14px;">
            <div class="flexBox3">
                <div class="leftDes1" style="visibility: hidden;">
                    자세한 내용은<br />
                    홈페이지 알림소식-자료실의 매뉴얼을 참고해주세요.<br /><span class="grayLeftDesc1">
                (자료실에서 ‘진로탐색’으로 검색)</span>
                </div>
                <div class="controllerBox">
                    <button class="controllers activePrev" v-on:click="handleManual(3)">
                        <img src="images/lArrow.svg" alt=""/>
                        이전
                    </button>
                    <button class="controllers nextBtn" v-on:click="handleManual(5)">
                        다음
                        <img src="images/rArrow.svg" alt=""/>
                    </button>
                </div>
                <div class="pointer" v-on:click="handleManualInit">
                    <img src="./images/close2.svg" alt="close" />
                </div>
            </div>

            <div class="sampleTabs" style="margin-top: 128px;">
                <div class="tabWrapper" style="justify-content: space-between;">
                    <input id="conditionSearch2" type="radio" name="searchTabs2" checked disabled/>
                    <label class="sampleActiveTab tabs" for="conditionSearch2">학교별 분석
                        <div class="activeTab">
                            <img src="./images/activeQIcon.svg" alt="questionMark" />
                        </div>
                    </label>

                    <div class="sampleReset flexBox" style="margin-top: 0px;">
                        <div class="sampleTextBox4">
                            선택한 조건을 <span class="blueSpan">초기화</span> 합니다
                        </div>
                        <button class="resetBtn setCenter" style="display: flex;align-items: center;justify-content: center;">
                            <label class="resetLabel" for="check"></label>
                            <img src="./images/refreshIcon1.svg" alt="questionMark" />
                            <span>초기화</span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="alignModal5 colBox">
                <div class="sampleSearchBtnBox colBox" style="margin-top: 250px;">
                    <div class="sampleTextBox4">
                        조건 선택 후
                        <span class="blueSpan">검색 버튼 클릭 시</span> 조건에 맞는 결과가
                        조회 됩니다
                    </div>
                    <div class="searchBtn setCenter" style="align-items: center;justify-content: center;">검색</div>
                </div>
                <div class="sampleButtonBox flexBox">
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
                            <span>검색 결과 저장</span>
                        </button>
                        <div class="sampleTextBox3 sampleTextBox2" style="margin-left: 0px;">
                            검색 결과 데이터를
                            <span class="blueSpan">엑셀 형식</span>으로<br />
                            다운로드 합니다
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modalPage1" v-show="isManualStep5" style="padding-top:14px;">
            <div class="flexBox3">
                <div class="leftDes1" style="visibility: hidden;">
                    자세한 내용은<br />
                    홈페이지 알림소식-자료실의 매뉴얼을 참고해주세요.<br /><span class="grayLeftDesc1">
                (자료실에서 ‘진로탐색’으로 검색)</span>
                </div>
                <div class="controllerBox">
                    <button class="controllers activePrev" v-on:click="handleManual(4)">
                        <img src="./images/lArrow.svg" alt="lArrow">
                        이전
                    </button>
                    <button class="controllers nextBtn" v-on:click="handleManual(6)">
                        다음
                        <img src="./images/rArrow.svg" alt="rArrow"/>
                    </button>
                </div>
                <div class="pointer" v-on:click="handleManualInit">
                    <img src="images/close2.svg" alt="close" />
                </div>
            </div>

            <div class="sampleTabs" style="margin-top: 128px;">
                <div class="tabWrapper" style="margin-left: 197px;">
                    <input id="companySearch_howto" type="radio" name="searchTabs2" checked disabled/>
                    <label class="sampleInactiveTab tabs" for="companySearch_howto" style="color: #fff;background: #2f5dff;">강좌 분석</label>
                </div>
            </div>

            <div class="formHeader"><div class="formTitle">기준 대학 선택</div></div>

            <div class="formWrapper howTo" style="margin-top: -17px;">
                <div class="setWidth">
                    <div style="display:flex;">
                        <div style="display: flex;flex-direction: row;">
                            <div class="qualInput toeicInput" style="width: 290px;">
                                <span>조회연도</span>
                                <input class="degreeInput degreeSelectBox degreeSelect8" placeholder="연도 선택" readonly />
                            </div>
                            <div class="qualInput toeicInput" style="padding-left: 119px;width: 405px;">
                                <span>학교</span>
                                <input class="degreeInput degreeSelectBox degreeSelect8" placeholder="대학 검색" readonly />
                            </div>
                            <div class="qualInput toeicInput" style="padding-left: 119px;width: 405px;">
                                <span>학과</span>
                                <input class="degreeInput degreeSelectBox degreeSelect8" placeholder="학과 검색" readonly />
                            </div>
                        </div>
                    </div>

                    <div style="display:flex;">
                        <div style="display:flex;">
                            <div class="rightDes1 howTo02" style="text-align: left;">
                                조회할 <span class="blueSpan">연도</span>를 선택합니다.
                            </div>
                            <div class="rightDes1 howTo02" style="text-align: left;padding-left: 177px;">
                                학교는 <span class="blueSpan">본인 대학</span>만 <span class="blueSpan">선택</span>이 가능합니다.
                            </div>
                            <div class="rightDes1 howTo02" style="text-align: left;padding-left: 72px;">
                                조회할 <span class="blueSpan">학과</span> 를 선택합니다.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modalPage1" v-show="isManualStep6" style="padding-top:14px;">
            <div class="flexBox3">
                <div class="leftDes1" style="visibility: hidden;">
                    자세한 내용은<br />
                    홈페이지 알림소식-자료실의 매뉴얼을 참고해주세요.<br /><span class="grayLeftDesc1">
                (자료실에서 ‘진로탐색’으로 검색)</span>
                </div>
                <div class="controllerBox">
                    <button class="controllers activePrev" v-on:click="handleManual(5)">
                        <img src="./images/lArrow.svg" alt="lArrow">
                        이전
                    </button>
                    <button class="controllers inActiveNext">
                        다음
                        <img src="./images/rArrow.svg" alt="rArrow"/>
                    </button>
                </div>
                <div class="pointer" v-on:click="handleManualInit">
                    <img src="images/close2.svg" alt="close" />
                </div>
            </div>

            <div class="sampleTabs" style="margin-top: 128px;">
                <div class="tabWrapper" style="margin-left: 197px;">
                    <input id="companySearch_howto" type="radio" name="searchTabs2" checked disabled/>
                    <label class="sampleInactiveTab tabs" for="companySearch_howto">강좌 분석
                        <div class="inactiveTab">
                            <img src="./images/inActiveQIcon.svg" alt="questionMark" />
                        </div>
                    </label>
                </div>
            </div>

            <div class="formHeader" style="margin-top: 249px;"><div class="formTitle">비교 대학 선택</div></div>

            <div class="formWrapper howTo" style="margin-top: -17px;">
                <div class="setWidth">
                    <div style="display:flex;">
                        <div style="display: flex;flex-direction: row;padding-top: 21px;">
                            <div class="qualInput toeicInput" style="width: 331px;">
                                <input class="degreeInput degreeSelectBox degreeSelect8" placeholder="대학 검색" readonly />
                            </div>
                            <div class="qualInput toeicInput" style="padding-left: 12px;width: 300px;">
                                <input class="degreeInput degreeSelectBox degreeSelect8" placeholder="학과 검색" readonly />
                            </div>
                            <button class="searchBtn" style="height: 46px;width: 130px;margin-top: 34px;margin-left: 12px;">
                                선택
                            </button>
                        </div>
                    </div>

                    <div style="display:flex;">
                        <div style="display:flex;">
                            <div class="rightDes1 howTo02" style="text-align: left;">
                                <span class="blueSpan">비교 대학</span>을 <span class="blueSpan">최대 5개</span> 까지 선택하여 검색 할 수 있습니다.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="alignModal5 colBox">
                <div class="sampleSearchBtnBox colBox" style="margin-top: 35px;">
                    <div class="searchBtn setCenter" style="align-items: center;justify-content: center;">검색</div>
                    <div class="sampleTextBox4">
                        조건 선택 후
                        <span class="blueSpan">검색 버튼 클릭 시</span> 조건에 맞는 결과가
                        조회 됩니다
                    </div>
                </div>
                <div class="sampleButtonBox flexBox">
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
                            <span>검색 결과 저장</span>
                        </button>
                        <div class="sampleTextBox3 sampleTextBox2" style="margin-left: 0px;">
                            검색 결과 데이터를
                            <span class="blueSpan">엑셀 형식</span>으로<br />
                            다운로드 합니다
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>