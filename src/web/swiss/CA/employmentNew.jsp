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
<script src="js/views/employmentNew.js?v=1111"></script>
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
            <a href="statusNew.jsp?SCHCD=<%=schcd%>&ORGCD=<%=orgcd%>&USERID=<%=userid%>&USERGRPTYPE=<%=usertype%>">
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
            <a href="predictionNew.jsp?SCHCD=<%=schcd%>&ORGCD=<%=orgcd%>&USERID=<%=userid%>&USERGRPTYPE=<%=usertype%>">
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
            <a href="employmentNew.jsp?SCHCD=<%=schcd%>&ORGCD=<%=orgcd%>&USERID=<%=userid%>&USERGRPTYPE=<%=usertype%>">
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
            <div class="headerRBtn" v-show="!isUserGroup" v-on:click="openNewWindow">
                <img src="images/coffee.svg" alt="survey" style="width: 30px;" />
                <span>설문조사</span>
            </div>
            <div class="headerRBtn" v-on:click="handleManualShow">
                <img src="images/use.svg" alt="use" style="width: 27px;" />
                <span>사용방법</span>
            </div>
        </div>
    </div>

    <div class="contentWrapper">
        <div class="contentTitle">
            <span>학교별 분석</span>
        </div>
        <div class="uniTagHeader">
            <!-- 버튼: "초기화" -->
            <input id="check" type="checkbox" />
            <button class="resetBtn setCenter" v-on:click="handleInit">
                <label class="resetLabel" for="check" aria-label="check"></label>
                <img src="./images/refreshIcon1.svg" alt="refreshIcon1" for="check" />
                <span>초기화</span>
            </button>
        </div>
        <div class="formWrapper">
            <div class="uniContentWrapper">
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

    <!-- 결과 TAB -->
    <div class="uniResultWrapper" v-show="isResponse">
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
                            <div class="statusTitle statusUTitle">취업률</div>
                            <div class="statusBoxWrapper" style="padding-bottom: 10px;">
                                <div class="statusQualBox" style="color: #626a86;font-size: 22px;font-weight: 700;justify-content: flex-start;">
                                    <span>3년간</span>
                                </div>
                                <div class="statusQualBox">
                                    <div>
                                        <span>취업률</span>
                                    </div>
                                    <div>
                                        <span>{{ totalRate.emprate }}</span>
                                        <span>%</span>
                                    </div>
                                </div>
                                <div class="statusQualBox">
                                    <div>
                                        <span>진학률</span>
                                    </div>
                                    <div>
                                        <span>{{ totalRate.admrate }}</span>
                                        <span>%</span>
                                    </div>
                                </div>
                            </div>
                            <div class="statusBoxWrapper" style="padding-bottom: 55px;">
                                <div class="statusQualBox" v-for="(origin, index) in emplrate" v-bind:key="'year_'+index">
                                    <div>
                                        <span>{{ origin.year }}년</span>
                                    </div>
                                    <div>
                                        <span>{{ origin.per }}</span>
                                        <span>%</span>
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
                        <div class="statusVLineWrapper">
                            <div class="statusVLine1" style="height: 500px;"></div>
                        </div>
                        <div class="statusWrapper statusRWrapper">
                            <div class="statusTitle statusUTitle">
                                학과(계열)
                            </div>
                            <div class="statusMajorWrapper">
                                <div class="statusMajorBox">
                                    <div>학과(계열)</div>

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
                <div class="colWrapper resultContentWrapper" style="justify-content: center;background: #f4f6fb;color: rgb(115, 0, 255);" v-show="isProtection">
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

                    <div style="display:flex; flex-wrap: wrap;">
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
                                <div class="doChartBox1">
                                    <div class="donutChartResult" id="company_area"></div>
                                    <div class="donutChartCenterText">TOP 5</div>
                                </div>
                            </div>
                            <div class="compVLine"></div>
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

                    <div style="display:flex; flex-wrap: wrap;" v-show="!isProtection">
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
                                <div class="doChartBox1">
                                    <div class="donutChartResult" id="company"></div>
                                    <div class="donutChartCenterText">TOP 5</div>
                                </div>
                            </div>
                            <div class="compVLine"></div>
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
                                    <div class="donutChartCenterText2">TOP 5</div>
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
                    <div class="" style="width: 100%; margin-top: 50px;">
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

                    <div class="" style="width: 100%; margin-top: 50px;">
                        <div class="expectContentWrapper leftItem">
                            <div class="expectContentHeader">
                                <div class="lineHeader">
                                    <img src="./images/line55.svg" alt="line" />
                                </div>
                                <div class="headerContent" style="margin-bottom: 15px;width: 99%;justify-content: space-between;">
                                    <div>
                                        이동 기업규모
                                        <div class="tooltip" style="margin-right: 10px;">
                                            <img class="tooltipimg" style="top:0;" src="./images/inActiveQIcon.svg" alt="questionMark" />
                                            <div class="tooltiptext2 academicSubjectType">
                                                직장유지비율에서 이동자가 이직한 기업의 기업규모입니다.
                                            </div>
                                        </div>
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

                    <div class="" style="width: 100%; margin-top: 50px;">
                        <div class="expectContentWrapper leftItem">
                            <div class="expectContentHeader">
                                <div class="lineHeader">
                                    <img src="./images/line55.svg" alt="line" />
                                </div>
                                <div class="headerContent" style="margin-bottom: 15px;width: 99%;justify-content: space-between;">
                                    <div>
                                        이동 산업분류
                                        <div class="tooltip" style="margin-right: 10px;">
                                            <img class="tooltipimg" style="top:0;" src="./images/inActiveQIcon.svg" alt="questionMark" />
                                            <div class="tooltiptext2 academicSubjectType">
                                                직장유지비율에서 이동자가 이직한 기업의 산업분류입니다.
                                            </div>
                                        </div>
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

                    <div class="" style="width: 100%; margin-top: 50px;">
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

                    <div class="" style="width: 100%; margin-top: 50px;">
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
                                    <div v-show="0 < license_list.length" class="donutChartCenterText2">TOP 3</div>
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
                                    <div v-show="0 < privatelicense_list.length" class="donutChartCenterText2">TOP 3</div>
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

    <!-- 동의 팝업 -->
    <div class="downloadBack" v-show="isAgree" style="display: none;align-items: baseline;">
        <div class="downloadModal" style="margin-top: 60px;">
            <div class="downloadModalHeader">
                <div class="flexBox3">
                    <div class="searchModalTitle">정보유출방지서약</div>
                    <div class="downloadModalClose pointer" v-on:click="redirectToUrl">
                        <img src="./images/close1.svg" alt="close" />
                    </div>
                </div>
            </div>
            <div class="downloadModalContent">
                <div class="downloadInnerContent" style="font-size: 16px;line-height: 30px;">
                    본 시스템은 시범 서비스 중으로 시스템에서 열람한 모든 정보는<br/>
                    「데이터 산업진흥 및 이용촉진에 관한 기본법」제 12조에 의하여 외부 유출을 금지 하고 있습니다.<br/>
                    시스템에 있는 정보를 외부 유출하지 않을 것을 서약하며, 동의할 경우에만 본 시스템을 사용할 수 있습니다.
                </div>
                <div class="downloadModalFooter setCenter">
                    <button class="downloadFooterBtn" v-on:click="handleInformationAgree(userid)">
                        동의
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- 사용방법 -->
    <div v-show="isSelectedManual" class="howModalBack">
        <div class="modalPage1" v-show="isManualStep1">
            <div class="flexBox3">
                <div class="leftDes1" style="visibility: hidden;"></div>
                <div class="controllerBox">
                    <button class="controllers prevBtn">
                        <img src="images/lArrow.svg" />
                        이전
                    </button>
                    <button class="controllers nextBtn" v-on:click="handleManual(2)">
                        다음
                        <img src="images/rArrow.svg" />
                    </button>
                </div>
                <div class="pointer" v-on:click="handleManualInit">
                    <img src="images/close2.svg" alt="close" />
                </div>
            </div>

            <div class="formWrapper howTo">
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

        <div class="modalPage1" v-show="isManualStep2">
            <div class="flexBox3">
                <div class="leftDes1" style="visibility: hidden;"></div>
                <div class="controllerBox">
                    <button class="controllers activePrev" v-on:click="handleManual(1)">
                        <img src="images/lArrow.svg" />
                        이전
                    </button>
                    <button class="controllers inActiveNext">
                        다음
                        <img src="images/rArrow.svg" />
                    </button>
                </div>
                <div class="pointer" v-on:click="handleManualInit">
                    <img src="images/close2.svg" alt="close" />
                </div>
            </div>

            <div class="formWrapper howTo">
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
    </div>
</div>