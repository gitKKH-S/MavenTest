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
<script src="js/views/predictionNew.js?v=1111"></script>
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
<link href="css/prediction.css" rel="stylesheet" />
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
                <div class="haederLBtnActive">
                    <div class="headerCapStyle">
                        <img src="images/header_cap.svg" class="headerBtnIcon" style="padding-left: 6px;" />
                    </div>
                    <div>
                        <div class="headerCapTitle1">
                            <span>진로 예측</span>
                            <img src="images/header_arrow.svg" class="headerArrowIcon" />
                        </div>
                        <div class="headerCapTitle2">
                            정보 입력을 통한<br/>진로 예측
                        </div>
                    </div>
                </div>
            </a>
            <a href="employmentNew.jsp?SCHCD=<%=schcd%>&ORGCD=<%=orgcd%>&USERID=<%=userid%>&USERGRPTYPE=<%=usertype%>">
                <div class="headerLBtn">
                    <div class="headerCapStyle">
                        <img src="images/header_uni.svg" class="headerBtnIcon" style="padding-left: 1px;padding-bottom: 2px;" />
                    </div>
                    <div>
                        <div class="headerCapTitle1">
                            <span>학교별 분석</span>
                            <img src="images/header_arrow2.svg" class="headerArrowIcon" />
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
            <div class="headerRBtn" v-on:click="isUsageExporter = true" v-show="isUserGroup" style="display:none">
                <img src="images/use_download.svg" alt="download" />
                <span>사용현황 통계</span>
            </div>
            <div class="headerRBtn" v-on:click="openBookmark(userid)" v-show="isUserGroup" style="display:none">
                <img src="images/favorite.svg" alt="favorite" />
                <span>즐겨찾기</span>
            </div>
            <div class="headerRBtn" v-on:click="handleManualPrediction">
                <img src="images/use.svg" alt="use" style="width: 27px;" />
                <span>사용방법</span>
            </div>
        </div>
    </div>

    <div class="contentWrapper">
        <div class="contentTitle">
            <span>진로 예측</span>
        </div>
        <div class="formWrapper">
            <div class="setWidth">
                <div class="formHeader">
                    <div class="formTitle">기본 입력 사항</div>
                    <div class="mustInput">
                        <img src="images/mustIcon.svg" alt="star" />
                        <span>필수 입력 사항</span>
                    </div>
                </div>
                <div class="inputHeader">
                    <div class="inputHeaderDeco">1</div>
                    <span class="inputHeaderTitle">학력정보</span>
                    <div class="inputReset">
                        <img src="images/refreshIcon2.svg" alt="reset" />
                        <button type="button" class="paddingZero" v-on:click="handleEducationInit">초기화</button>
                    </div>
                </div>
                <div class="degreeInputWrapper">
                    <div class="degreeInputName">대학</div>
                    <div class="degreeInputContainer degreeInputContainer1">
                        <div class="onelineDegreeInput">
                            <div class="flexBox">
                                <span>학교명</span>
                                <div class="starTip">
                                    <img src="images/mustIcon.svg" alt="star" />
                                </div>
                            </div>
                            <article class="degreeSelect1">
                                <vue-single-select placeholder="대학 검색" v-model="selectedUniversity" :options="universitys" :required="false" option-label="name" :max-results="10000">
                                </vue-single-select>
                            </article>
                        </div>
                        <div class="onelineDegreeInput">
                            <div class="flexBox">
                                <span>전공명</span>
                                <div class="starTip">
                                    <img src="images/mustIcon.svg" alt="star" />
                                </div>
                            </div>
                            <div class="flexBox">
                                <article class="degreeSelect2">
                                    <vue-single-select placeholder="전공 검색" v-model="selectedDepartmemt4" :options="department4" :required="false" option-label="name" :max-results="10000" style="text-align: center;"></vue-single-select>
                                </article>
                                <article class="degreeSelect3">
                                    <select class="degreeSelectBox" v-model="dncode">
                                        <option class="selectOption" v-bind:value="null_value">주간/야간</option>
                                        <option class="selectOption" value="A">주간</option>
                                        <option class="selectOption" value="B">야간</option>
                                    </select>
                                </article>
                            </div>
                        </div>
                        <div class="stretchBox">
                            <div class="twoLineDegreeInput">
                                <span>입학년월</span>
                                <div class="flexBox">
                                    <div class="degreeSelect4">
                                        <select class="degreeSelectBox" v-model="inyear">
                                            <option :key="i" :value="type.value" v-for="(type, i) in indateList">
                                                {{ type.text }}년
                                            </option>
                                        </select>
                                    </div>
                                    <div class="degreeSelect5">
                                        <select class="degreeSelectBox" v-model="inmonth">
                                            <option :key="i" :value="type.value" v-for="(type, i) in monthList">
                                                {{ type.text }}월
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="degreeLineBox">
                                <div class="degreeBLine"></div>
                            </div>

                            <div class="twoLineDegreeInput">
                                <span>졸업년월</span>
                                <div class="flexBox">
                                    <div class="degreeSelect4">
                                        <select class="degreeSelectBox" v-model="outyear">
                                            <option :key="i" :value="type.value" v-for="(type, i) in outdateList">
                                                {{ type.text }}년
                                            </option>
                                        </select>
                                    </div>
                                    <div class="degreeSelect5">
                                        <select class="degreeSelectBox" v-model="outmonth">
                                            <option :key="i" :value="type.value" v-for="(type, i) in monthList">
                                                {{ type.text }}월
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="degreeInputName">고교</div>
                    <div class="degreeInputContainer degreeInputContainer2">
                        <div class="onelineDegreeInput">
                            <div class="flexBox">
                                <span>학교지역</span>
                                <div class="starTip">
                                    <img src="images/mustIcon.svg" alt="star" />
                                </div>
                            </div>
                            <div class="degreeSelect6">
                                <article class="cont-select" style="width: 100%;">
                                    <select class="degreeSelectBox" id="sel_higharea" v-model="selectedHighschoolArea">
                                        <option v-bind:value="null_value">학교지역</option>
                                        <option :key="i" :value="area" v-for="(area, i) in highschoolAreaList">
                                            {{ area.text }}
                                        </option>
                                    </select>
                                </article>
                            </div>
                        </div>
                        <div class="onelineDegreeInput">
                            <div class="flexBox">
                                <span>학교유형</span>
                                <div class="starTip">
                                    <img src="images/mustIcon.svg" alt="star" />
                                </div>
                            </div>
                            <div class="degreeSelect6">
                                <article class="cont-select" style="width: 100%;">
                                    <select class="degreeSelectBox" id="sel_hightype" v-model="selectedHighschoolType">
                                        <option v-bind:value="null_value">학교유형</option>
                                        <option :key="i" :value="type" v-for="(type, i) in highschoolTypeList">
                                            {{ type.text }}
                                        </option>
                                    </select>
                                </article>
                            </div>
                        </div>
                        <div class="stretchBox">
                            <div class="twoLineDegreeInput">
                                <div class="flexBox schoolname">
                                    <span>고등학교명</span>
                                    <div id="nameHover">
                                        <img src="images/nameHoverIcon.svg" alt="nameInfo" />
                                        <img id="nameTooltip" src="images/nameTooltip.svg" alt="nameInfo" />
                                    </div>
                                </div>
                                <div class="searchBox">
                                    <div v-if="selectedHighschool == null">
                                        <input class="degreeInput degreeSelectBox3 degreeSelect7" title="고등학교명" id="search" v-model="highschoolSearch" placeholder="고등학교명" v-on:keyup.enter="highschoolSearchOnSubmit" />
                                        <button type="submit" class="search_icon" :class="{ reset: selectedHighschool != null }" v-on:click="highschoolSearchOnSubmit"></button>
                                    </div>
                                    <vue-custom-tooltip :label="highschoolSearch" :active="selectedHighschool != null">
                                        <div v-show="selectedHighschool != null">
                                            <input class="degreeInput degreeSelectBox3 degreeSelect7" title="고등학교명" placeholder="고등학교명" readonly="readonly" v-bind:value="highschoolSearch" />
                                            <button type="submit" class="search_icon_reset" v-on:click="highschoolSearchInit"></button>
                                        </div>
                                    </vue-custom-tooltip>
                                    <ul class="company_list_select scrollCustom" style="width: 100%;border: solid 1px #aaaaaa;border-top: none;" :class="{ on: isHighschoolResultOpen && this.highschoolSearchResults.length > 0 }">
                                        <li :key="i" :value="highschoolSearchResult.HIGHNM" v-for="(highschoolSearchResult, i) in highschoolSearchResults">
                                            <input type="radio" v-bind:id="i" v-on:change="handleSelectHighschool(highschoolSearchResult)" />
                                            <label v-bind:for="i" style="display: flex;padding: 0;">
                                                <div style="width: 180px;border-right: 1px solid #ededed;height: 30px;display: flex;align-items: center;padding-left: 6px;">{{ highschoolSearchResult.HIGHNM }}</div>
                                                <div style="width: 66px;border-right: 1px solid #ededed;text-align:center;height: 30px;display: flex;align-items: center;justify-content: center;">{{ highschoolSearchResult.HIGHAREA_NM }}</div>
                                                <div style="width: 75px;text-align:center;height: 30px;display: flex;align-items: center;justify-content: center;">{{ highschoolSearchResult.HIGHTYPE_NM }}</div>
                                            </label>
                                        </li>
                                    </ul>
                                    <ul class="company_list_select scrollCustom on" style="width: 100%;border: solid 1px #aaaaaa;border-top: none; display:none;" v-show="isHighschoolResultOpen && this.highschoolSearchResults.length === 0">
                                        <li v-on:click="isHighschoolResultOpen = false">
                                            <label><span></span>조회 되지 않았습니다.</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="basicSecondWrapper">
                    <div>
                        <div class="inputHeader basicHeaderWidth">
                            <div class="inputHeaderDeco">2</div>
                            <span class="inputHeaderTitle">개인신상</span>
                            <div class="inputReset">
                                <img src="images/refreshIcon2.svg" alt="reset" />
                                <button type="button" class="paddingZero" v-on:click="handlePersonalInit">초기화</button>
                            </div>
                        </div>
                        <div class="secondInner">
                            <div class="twoLineDegreeInput">
                                <div class="flexBox">
                                    <span>성별</span>
                                    <div class="starTip">
                                        <img src="images/mustIcon.svg" alt="star" />
                                    </div>
                                </div>
                                <div class="degreeSelect8">
                                    <select class="degreeSelectBox" v-model="gender">
                                        <option v-bind:value="null_value">성별</option>
                                        <option value="1">남</option>
                                        <option value="2">여</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="twoLineDegreeInput">
                            <div class="flexBox">
                                <span>출생년월</span>
                            </div>
                            <div class="flexBox">
                                <div class="degreeSelect9">
                                    <select class="degreeSelectBox" v-model="birthyear">
                                        <option :key="i" :value="type.value" v-for="(type, i) in birthList">
                                            {{ type.text }}년
                                        </option>
                                    </select>
                                </div>
                                <div class="degreeSelect15">
                                    <select class="degreeSelectBox" v-model="birthmonth">
                                        <option :key="i" :value="type.value" v-for="(type, i) in monthList">
                                            {{ type.text }}월
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="inputHeader basicHeaderWidth">
                            <div class="inputHeaderDeco">3</div>
                            <span class="inputHeaderTitle">학업 및 경험</span>
                            <div class="inputReset">
                                <img src="images/refreshIcon2.svg" alt="reset" />
                                <button type="button" class="paddingZero" v-on:click="handleExperienceInit">초기화</button>
                            </div>
                        </div>
                        <div class="secondInner">
                            <div class="twoLineDegreeInput">
                                <div class="flexBox">
                                    <span>졸업학점</span>
                                    <div class="starTip">
                                        <img src="images/mustIcon.svg" alt="star" />
                                    </div>
                                </div>
                                <div class="flexBox">
                                    <vue-custom-tooltip label="졸업학점 만점" :active="gradeScoreStandard != null && gradeScoreStandard != ''">
                                        <input class="degreeInput degreeSelectBox3 degreeSelect10" title="졸업학점 만점" placeholder="학점 만점 입력" :maxlength="3" @keypress="isNumber($event)" @keyup="setScorePercent" v-model="gradeScoreStandard" />
                                    </vue-custom-tooltip>
                                    <vue-custom-tooltip label="졸업학점" :active="gradeScore != null && gradeScore != ''">
                                        <input class="degreeInput degreeSelectBox3 degreeSelect11" title="졸업학점" placeholder="학점 입력" :maxlength="3" v-model="gradeScore" @keypress="isNumber($event)" @keyup="setScorePercent" />
                                    </vue-custom-tooltip>
                                    <vue-custom-tooltip label="졸업학점 백분위" :active="gradeScorePercent != null && gradeScorePercent != ''">
                                        <input class="degreeBtn" title="졸업학점 백분위" placeholder="백분위" :maxlength="3" @keypress="isNumber($event)" v-model="gradeScorePercent" disabled />
                                    </vue-custom-tooltip>
                                </div>
                            </div>
                            <div class="twoLineDegreeInput" style="margin-top: 0px;">
                                <div class="flexBox">
                                    <span>토익점수</span>
                                </div>
                                <vue-custom-tooltip label="토익 점수" :active="toeic != null && toeic != ''">
                                    <input class="degreeInput degreeSelectBox2 degreeSelect8" title="토익 점수" placeholder="입력" :maxlength="3" v-model="toeic" @keypress="isNumber($event)" />
                                </vue-custom-tooltip>
                            </div>
                            <div class="degreeCheckContainer">
                                <div class="checkDes">해당하는 사항에 체크해주세요.</div>
                                <div class="checkContainer">
                                    <div class="singleCheck">
                                        <div class="checkIput">
                                            <input type="checkbox" id="transfer" v-model="transfer" true-value="1" false-value="2" />
                                            <label for="transfer"></label>
                                            <span>편입</span>
                                        </div>
                                    </div>
                                    <div class="singleCheck">
                                        <div class="checkIput">
                                            <input type="checkbox" id="teaching" v-model="teach" true-value="1" false-value="2" />
                                            <label for="teaching"></label>
                                            <span>교직과정이수</span>
                                        </div>
                                    </div>
                                    <div class="singleCheck">
                                        <div class="checkIput">
                                            <input type="checkbox" id="overseas" v-model="oversea" true-value="A" false-value="B" />
                                            <label for="overseas"></label>
                                            <span>해외연수</span>
                                        </div>
                                    </div>
                                    <div class="singleCheck">
                                        <div class="checkIput">
                                            <input type="checkbox" id="field" v-model="internship" true-value="1" false-value="2" />
                                            <label for="field"></label>
                                            <span>현장실습</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="inputHeader basicHeaderWidth">
                            <div class="inputHeaderDeco">4</div>
                            <span class="inputHeaderTitle">자격정보</span>
                            <div class="inputReset">
                                <img src="images/refreshIcon2.svg" alt="reset" />
                                <button type="button" class="paddingZero" v-on:click="handleLicenseInit">초기화</button>
                            </div>
                        </div>
                        <div class="toeicInput">
                            <div class="flexBox">
                                <span class="licenseBox">보유자격증</span>
                                <div class="iconHover">
                                    <img src="images/nameHoverIcon.svg" alt="nameInfo" />
                                    <div class="compHover" style="top: -22px;right: -251px;">
                                        <div class="standard">
                                            <img src="images/compHover.svg" alt="nameInfo" style="width:250px; height: 70px;" />
                                            <div class="iconTooltip" style="width: 227px;">
                                                자격증은 최대 3개까지 입력 가능합니다.<br />
                                                보유자격증이 4개 이상일 경우 <br />
                                                중요 자격증 우선으로 입력해주세요.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <vue-custom-tooltip label="총 자격증 개수" :active="licenseTotalCount != null && licenseTotalCount != ''">
                                <input class="degreeInput degreeSelectBox2 degreeSelect8" title="총 자격증 개수" v-model="licenseTotalCount" value=0 placeholder="자격증 개수 입력" :maxlength="2" @keyup="isNumberByReplace($event)" />
                            </vue-custom-tooltip>
                            <div class="searchBox">
                                <div v-if="selectedLicense == null">
                                    <input class="degreeInput degreeSelectBox3 degreeSelect8" title="자격증명" id="search" v-model="licenseSearch" placeholder="자격증명" v-on:keyup.enter="licenseSearchOnSubmit" />
                                    <button type="submit" class="search_icon" :class="{ reset: selectedLicense != null }" v-on:click="licenseSearchOnSubmit"></button>
                                </div>
                                <vue-custom-tooltip :label="licenseSearch" :active="selectedLicense != null">
                                    <div v-show="selectedLicense != null">
                                        <input class="degreeInput degreeSelectBox3 degreeSelect8" title="자격증명" placeholder="자격증명" readonly="readonly" v-bind:value="licenseSearch" />
                                        <button type="submit" class="search_icon_reset" v-on:click="licenseSearchInit"></button>
                                    </div>
                                </vue-custom-tooltip>
                                <ul class="company_list_select scrollCustom" style="width: 100%;border: solid 1px #aaaaaa;border-top: none;" :class="{ on: isLicenseResultOpen && this.licenseSearchResults.length > 0 }">
                                    <li :key="i" :value="licenseSearchResult" v-for="(licenseSearchResult, i) in licenseSearchResults">
                                        <input type="radio" v-bind:id="licenseSearchResult.name" v-on:change="handleSelectLicense(licenseSearchResult)" />
                                        <label v-bind:for="licenseSearchResult.name">
                                            <span></span>
                                            {{ licenseSearchResult.name }}
                                        </label>
                                    </li>
                                </ul>
                                <ul class="company_list_select scrollCustom on" style="width: 100%;border: solid 1px #aaaaaa;border-top: none;display:none;" v-show="isLicenseResultOpen && this.licenseSearchResults.length === 0">
                                    <li v-on:click="isLicenseResultOpen = false">
                                        <label><span></span>조회 되지 않았습니다.</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="qualBtnBox">
                            <div class="qualBtn" :class="{ qualBtnActive: license[0].selectedLicense3 != null }">
                                <input class="license_input" title="자격증" v-model="license[0].selectedLicense3Text" placeholder="자격증" disabled />
                                <button type="submit" class="license_reset" v-on:click="licenseInit(0)" v-if="license[0].selectedLicense3 != null"></button>
                            </div>
                            <div class="qualBtn" :class="{ qualBtnActive: license[1].selectedLicense3 != null }">
                                <input class="license_input" title="자격증" v-model="license[1].selectedLicense3Text" placeholder="자격증" disabled />
                                <button type="submit" class="license_reset" v-on:click="licenseInit(1)" v-if="license[1].selectedLicense3 != null"></button>
                            </div>
                            <div class="qualBtn" :class="{ qualBtnActive: license[2].selectedLicense3 != null }">
                                <input class="license_input" title="자격증" v-model="license[2].selectedLicense3Text" placeholder="자격증" disabled />
                                <button type="submit" class="license_reset" v-on:click="licenseInit(2)" v-if="license[2].selectedLicense3 != null"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="refreshBox" v-on:click="handleInit">
                <img src="images/refreshIcon3.svg" alt="reset" />
                <span>전체초기화</span>
            </button>
            <div class="contentHLine"></div>
            <div class="setWidth">
                <div class="formHeader">
                    <div class="formTitle">선택 입력 사항</div>
                </div>
                <div class="optionInputWrapper">
                    <div class="flexBox">
                        <div class="optionInputName" style="height: 185px;">희망진로</div>
                        <div class="optionContentBox">
                            <div class="optionTwoLine twoLineDegreeInput">
                                <div class="flexBox5">
                                    <span>기업유형</span>
                                    <div class="degreeSelect12" style="width: 345px;">
                                        <select class="degreeSelectBox" id="sel_wanted_comtype" v-model="selectedCompanyType">
                                            <option v-bind:value="null_value">기업 유형</option>
                                            <option :key="i" :value="companyType" v-for="(companyType, i) in companyTypes" v-bind:title="companyType.text">
                                                {{ companyType.text }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="optionTwoLine twoLineDegreeInput">
                                <div class="flexBox schoolname" style="width: 342px;">
                                    <span>산업분류</span>
                                    <div class="iconHover">
                                        <img src="images/nameHoverIcon.svg" alt="nameInfo" />
                                        <div class="classHover">
                                            <div class="standard">
                                                <img src="images/classHover.svg" alt="nameInfo" style="width: 345px;height: 70px;"/>
                                                <div class="iconTooltip">
                                                    예측에 주요한 영향을 미치는 산업분류만 표기됩니다.<br />
                                                    원하시는 항목이 없다면 기타를 선택해주세요.<br />
                                                    [기타] : 특정 분류에 포함되지 않는 산업
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="degreeSelect12" style="width: 342px;">
                                    <select class="degreeSelectBox" v-model="selectedCompanySize">
                                        <option v-bind:value="null_value">산업 분류</option>
                                        <option :key="i" :value="companySize" v-for="(companySize, i) in companySizes" v-bind:title="companySize.text">
                                            {{ companySize.text }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="optionContentBox2">
                        <div class="optionBox">
                            <div class="optionTwoLine twoLineDegreeInput">
                                <div class="flexBox">
                                    <span>취업소요기간</span>
                                </div>
                                <div class="degreeSelect17">
                                    <select class="degreeSelectBox" v-model="wanted_duration">
                                        <option v-bind:value="null_value">기간 선택</option>
                                        <option value="DU">졸업전</option>
                                        <option value="TH">졸업~3개월</option>
                                        <option value="SI">4개월~6개월</option>
                                        <option value="NI">7개월~9개월</option>
                                        <option value="TW">10개월~12개월</option>
                                        <option value="OY">13개월~24개월</option>
                                    </select>
                                </div>
                            </div>
                            <div class="optionTwoLine twoLineDegreeInput">
                                <div class="flexBox">
                                    <span>급여 (만원)</span>
                                </div>
                                <div class="searchBox">
                                    <input class="degreeInput degreeSelectBox2 degreeSelect17" title="급여(만원)" v-model="wanted_salary" placeholder="급여(만원)" :maxlength="4" @keypress="isNumber($event)" />
                                </div>
                            </div>
                        </div>
                        <div class="optionTwoLine twoLineDegreeInput">
                            <div class="flexBox schoolname" style="width: 418px;">
                                <span>직무유형</span>
                            </div>
                            <div class="degreeSelect12" style="width: 418px;">
                                <vue-single-select placeholder="직무 유형" v-model="selectedBookJoblcd" :options="jobFlow_list" :required="false" option-label="name" :max-results="10000">
                                </vue-single-select>
                            </div>
                        </div>
                        <!--<div class="optionTwoLine twoLineDegreeInput">
                            <div class="flexBox schoolname">
                                <span>희망회사명</span>
                                <div class="iconHover">
                                    <img src="images/nameHoverIcon.svg" alt="nameInfo" />
                                    <div class="compHover" style="top: -26px;right: -302px;">
                                        <div class="standard">
                                            <img src="images/compHover.svg" alt="nameInfo" />
                                            <div class="iconTooltip" style="width:270px;">
                                                회사명 검색은 해당 회사의 기업유형과 산업분류를<br />
                                                알아보기 위한 방법으로 회사명 자체는<br />
                                                예측 결과에 영향을 미치지 않습니다.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="searchBox">
                                <div class="" v-if="selectedCompany == null">
                                    <input class="degreeInput degreeSelectBox3 degreeSelect12" title="회사명" id="search" v-model="companySearch" placeholder="회사명" v-on:keyup.enter="companySearchOnSubmit" />
                                    <button type="submit" class="search_icon" :class="{ reset: selectedCompany != null }" v-on:click="companySearchOnSubmit"></button>
                                </div>
                                <vue-custom-tooltip :label="companySearch" :active="selectedCompany != null">
                                    <div v-show="selectedCompany != null">
                                        <input class="degreeInput degreeSelectBox3 degreeSelect12" title="회사명" placeholder="회사명" readonly="readonly" v-bind:value="companySearch" />
                                        <button type="submit" class="search_icon_reset" v-on:click="companySearchInit"></button>
                                    </div>
                                </vue-custom-tooltip>
                                <ul class="company_list_select scrollCustom" style="width: 100%;border: solid 1px #aaaaaa;border-top: none;" :class="{ on: isCompanyResultOpen && this.companySearchResults.length > 0 }">
                                    <li :key="i" :value="companySearchResult.value" v-for="(companySearchResult, i) in companySearchResults">
                                        <input type="radio" v-bind:id="companySearchResult.value" v-on:change="handleSelectCompany(companySearchResult)" />
                                        <label v-bind:for="companySearchResult.value">
                                            <span></span>{{ companySearchResult.text }}
                                        </label>
                                    </li>
                                </ul>
                                <ul class="company_list_select scrollCustom on" style="width: 100%;border: solid 1px #aaaaaa;border-top: none;" v-show="isCompanyResultOpen && this.companySearchResults.length === 0">
                                    <li v-on:click="isCompanyResultOpen = false">
                                        <label><span></span>조회 되지 않았습니다.</label>
                                    </li>
                                </ul>
                            </div>
                        </div>-->
                    </div>
                </div>
            </div>
            <div class="formFooter">
                <button class="favoriteBox">
                    <div class="favoriteBtn" v-show="isUserGroup" style="display:none">
                        <img :src="imageSource" alt="favorite" v-on:click="toggleCheckBookmark">
                        <input type="checkbox" v-model="checkBookmark" />
                    </div>
                    <!-- 즐겨찾기명 입력 -->
                    <div v-show="isBookmarkTitle" class="addfavorite">
                        <div class="ftext">즐겨찾기 등록</div>
                        <div class="fInputWrapper">
                            <input type="text" placeholder="즐겨찾기명 입력" v-model="bookmarkTitle" />
                        </div>
                        <div class="fBtnWrapper">
                            <div class="fBtnR">
                                <div class="fBtn" v-on:click="isBookmarkTitle = false; bookmarkTitle='';">취소</div>
                                <div class="fBtn" v-on:click="handleSearchSubmitByBookmark(userid)">완료</div>
                            </div>
                        </div>
                    </div>
                </button>
                <div style="display: flex;padding-top: 32px;">
                    <button class="formTotalSearch" v-on:click="handleSearchSubmit" v-show="!isFetching">
                        예측
                    </button>
                    <button class="formTotalSearch" v-show="isFetching">
                        <i class="fa fa-refresh fa-spin"></i>예측 중
                    </button>
                </div>
                <div class="footerText">
                    진로 예측 결과는 과거 취업 현황을 기반으로 제공되는
                    <span>예측 서비스</span>입니다. 실제 취업 결과와는 다를 수 있으니
                    <span>참고용</span>으로만 사용해 주시기 바랍니다
                </div>
            </div>
        </div>

        <div v-show="!predicResult" class="no_data">예측 결과 데이터가 존재하지 않습니다.</div>
        <div v-show="isResponse && predicResult">
            <div class="saveBtnWrapper" v-show="isUserGroup">
                <div class="saveBtn" v-on:click="handleExport">
                    <img src="images//addFolder1.svg" alt="add" style="width: 21px; height: 21px" />
                    <div>예측 결과 저장</div>
                </div>
            </div>
            <div class="expectResultWrapper" style="margin-top: 20px;">
                <div class="expectTabWrapper">
                    <input id="expectResult" type="radio" name="expectTabs"  v-model="isExpect" :value="true" />
                    <label class="expectTab" for="expectResult" v-on:click="selectTab('expectResult')">예측결과</label>
                    <input id="effect" type="radio" name="expectTabs" />
                    <label class="expectTab" for="effect" v-show="wantedResultTitleList1.length > 0" v-on:click="selectTab('effect')">영향도분석</label>

                    <div class="noneBox expectResult_content" v-show="isExpect">
                        <div class="flexBox boxGap">
                            <div class="expectContentWrapper">
                                <div class="expectContentHeader">
                                    <div class="lineHeader">
                                        <img src="images/line42.svg" alt="line" />
                                    </div>
                                    <div class="headerContent">
                                        <div>기업유형</div>
                                        <div></div>
                                        <div v-show="selectedCompanyType != null">
                                            {{ selectedCompanyTypeText }}
                                        </div>
                                    </div>
                                </div>
                                <div class="chartBox1">
                                    <div id="comtype_pie_chart"></div>
                                </div>
                                <div class="predictBox">
                                    <span v-for="(item, index) in chart1" v-if="index === 0">
                                        {{item['name']}}에 취업할 확률이 <span class="deepBlueSpan">{{ item['y'] }}%</span>로 가장 높습니다.
                                    </span>
                                    <br />
                                    <div v-show="selectedCompanyType != null">
                                        <p v-if="chartDesc1 > 0">
                                            희망하는 <span class="boldSpan">{{selectedCompanyTypeText}}</span>에 취업할 확률은 <span class="deepBlueSpan">{{chartDesc1}}%</span>입니다.
                                        </p>
                                        <p v-if="chartDesc1 == 0">
                                            희망하는 <span class="boldSpan">{{selectedCompanyTypeText}}</span>에 취업할 <span class="deepBlueSpan">확률이 낮습니다.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="expectContentWrapper">
                                <div class="expectContentHeader">
                                    <div class="lineHeader">
                                        <img src="images/line42.svg" alt="line" />
                                    </div>
                                    <div class="headerContent">
                                        <div>
                                            산업분류
                                            <div class="tooltip">
                                                <img class="tooltipimg" style="top:0;" src="./images/inActiveQIcon.svg" alt="questionMark" />
                                                <div class="tooltiptext academicSubjectType" style="font-size: 14px !important;">
                                                    통계청 10차 산업분류입니다.<br/>
                                                    (기타: 농업, 광업, 전기, 수도, 건설, 운수, 숙박, 금융, 부동산, 예술, 협회, 가구, 국제)
                                                </div>
                                            </div>
                                        </div>
                                        <div></div>
                                        <div v-show="selectedCompanySize != null">
                                            {{ selectedCompanySizeText }}
                                        </div>
                                    </div>
                                </div>
                                <div class="chartBox1">
                                    <div id="comind_pie_chart"></div>
                                </div>
                                <div class="predictBox">
                                    <span v-for="(item, index) in chart2" v-if="index === 0">
                                        {{item['name']}}에 취업할 확률이 <span class="deepBlueSpan">{{ item['y'] }}%</span>로 가장 높습니다.
                                    </span>
                                    <br />
                                    <div v-show="selectedCompanySize != null">
                                        <p v-if="chartDesc2 > 0">
                                            희망하는 <span class="boldSpan">{{selectedCompanySizeText}}</span>에 취업할 확률은 <span class="deepBlueSpan">{{chartDesc2}}%</span>입니다.
                                        </p>
                                        <p v-if="chartDesc2 == 0">
                                            희망하는 <span class="boldSpan">{{selectedCompanySizeText}}</span>에 취업할 <span class="deepBlueSpan">확률이 낮습니다.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="statusSearchBtn" v-on:click="moveSearchStatus">
                            <img src="images//exclude.svg" alt="icon" />
                            <span>기업 취업 현황 조회</span>
                        </div>

                        <div class="flexBox boxGap">
                            <div class="expectContentWrapper">
                                <div class="expectContentHeader">
                                    <div class="lineHeader">
                                        <img src="images/line42.svg" alt="line" />
                                    </div>
                                    <div class="headerContent">
                                        <div>취업소요기간</div>
                                        <div></div>
                                        <div v-show="wanted_duration != null">
                                            {{ selectedDurationText }}
                                        </div>
                                    </div>
                                </div>
                                <div class="chartBox1">
                                    <div id="duration_pie_chart"></div>
                                </div>
                                <div class="predictBox2 predictBox">
                                    <span v-for="(item, index) in chart3tmp" v-if="index === 0">
                                        졸업 후 [{{item['name']}}]에 취업할 확률이 <span class="deepBlueSpan">{{ item['y'] }}%</span>로 가장 높습니다.
                                    </span>
                                    <br />
                                    <div v-show="wanted_duration != null">
                                        <p v-if="chartDesc3 > 0">
                                            희망하는 졸업 후 <span class="boldSpan">{{selectedDurationText}}</span>에 취업할 확률은 <span class="deepBlueSpan">{{chartDesc3}}%</span>입니다.
                                        </p>
                                        <p v-if="chartDesc3 == 0">
                                            희망하는 졸업 후 <span class="boldSpan">{{selectedDurationText}}</span>에 취업할 <span class="deepBlueSpan">확률이 낮습니다.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="expectContentWrapper">
                                <div class="expectContentHeader">
                                    <div class="lineHeader">
                                        <img src="images/line42.svg" alt="line" />
                                    </div>
                                    <div class="headerContent">
                                        <div>월 급여</div>
                                        <div></div>
                                        <div v-show="wanted_salary != null && wanted_salary != ''">
                                            {{ wanted_salary }} 만원
                                        </div>
                                    </div>
                                </div>
                                <div class="chartBox1">
                                    <div id="salary_pie_chart"></div>
                                </div>
                                <div class="predictBox2 predictBox">
                                    <span v-for="(item, index) in chart4" v-if="index === 0">
                                        월 급여[{{item['name']}}]을 받을 확률이 <span class="deepBlueSpan">{{ item['y'] }}%</span>로 가장 높습니다.
                                    </span>
                                    <br />
                                    <div v-show="wanted_salary != null && wanted_salary != ''">
                                        <p v-if="chartDesc4 > 0">
                                            희망하는 월 급여 <span class="boldSpan">{{wanted_salary}} 만원</span>을 받을 확률은 <span class="deepBlueSpan">{{chartDesc4}}%</span>입니다.
                                        </p>
                                        <p v-if="chartDesc4 == 0">
                                            희망하는 월 급여 <span class="boldSpan">{{wanted_salary}} 만원</span>을 받을 <span class="deepBlueSpan">확률이 낮습니다.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flexBox boxGap">
                            <div class="expectContentWrapper">
                                <div class="expectContentHeader">
                                    <div class="lineHeader">
                                        <img src="images/line42.svg" alt="line" />
                                    </div>
                                    <div class="headerContent">
                                        <div>직무유형</div>
                                        <div></div>
                                        <div v-show="selectedBookJoblcd != null">
                                            {{ selectedBookJoblcdText }}
                                        </div>
                                    </div>
                                </div>
                                <div class="chartBox1">
                                    <div id="job_pie_chart"></div>
                                </div>
                                <div class="predictBox2 predictBox">
                                    <span v-for="(item, index) in chart5" v-if="index === 0">
                                        졸업 후 [{{item['name']}}]에 취업할 확률이 <span class="deepBlueSpan">{{ item['y'] }}%</span>로 가장 높습니다.
                                    </span>
                                    <br />
                                    <div v-show="selectedBookJoblcd != null">
                                        <p v-if="chartDesc5 > 5">
                                            희망하는 졸업 후 <span class="boldSpan">{{selectedBookJoblcdText}}</span>에 취업할 확률은 <span class="deepBlueSpan">{{chartDesc5}}%</span>입니다.
                                        </p>
                                        <p v-if="chartDesc5 == 0">
                                            희망하는 졸업 후 <span class="boldSpan">{{selectedBookJoblcdText}}</span>에 취업할 <span class="deepBlueSpan">확률이 낮습니다.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="noneBox effect_content" v-show="isEffect">
                        <div class="effectArea" v-show="isWantedResultNodata">
                            <div class="expectContentWrapper" v-for="(item, mindex) in wantedResultTitleList1">
                                <div class="expectContentHeader" style="justify-content: center;">
                                    <div class="headerContent" style="height: 150px; width: 61%;">
                                        <div style="text-align: center;">{{ item }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="effectArea" v-show="!isWantedResultNodata & wantedResultTitleList1.length > 0">
                            <div class="expectContentWrapper" v-for="(item, mindex) in wantedResultTitleList1">
                                <div class="expectContentHeader">
                                    <div class="lineHeader">
                                        <img src="images/line42.svg" alt="line" />
                                    </div>
                                    <div class="headerContent">
                                        <div>{{ item }}</div>
                                        <div></div>
                                        <div>
                                            <span v-if="wantedResultList1[mindex]">
                                                {{wantedResultList1[mindex]}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="chartBox">
                                   <div class="effectChart" :id="'shap1'+mindex"></div>
                                </div>
                                <div v-for="(item, index) in wantedResultDescList1">
                                    <div class="toeicExpectBox" v-if="mindex  == index">
                                        <div>
                                            <div v-if="wantedResultTitleList1[index] == '희망 급여'">
                                                <span>⸱ 입력한 학과가 <span class="boldSpan">{{wantedResultList1[index]}}</span> 의 월 급여를 받을 확률은</span><span class="boldSpan">&nbsp;&nbsp;{{ item['avg'] }} %</span><span>입니다.</span>
                                            </div>
                                            <div v-if="wantedResultTitleList1[index] != '희망 급여'">
                                                <span>⸱ 입력한 학과의 <span class="boldSpan">{{wantedResultList1[index]}} 취업 가능성</span>은</span><span class="boldSpan">&nbsp;&nbsp;{{ item['avg'] }} %</span><span>입니다.</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div v-if="wantedResultTitleList1[index] == '희망 급여'">
                                                <span v-if="item['grade'] > 0">
                                                    <span>⸱ 나의 학점은 <span class="boldSpan">{{wantedResultList1[index]}}</span> 의 월 급여를 받을 확률을 </span>
                                                    <span class="redSpan">{{ item['grade'] }} % 증가</span><span>시킵니다. → {{ (item['avg']*1 + item['grade']*1).toFixed(2) }} %</span>
                                                </span>
                                                <span v-else-if="item['grade'] < 0">
                                                    <span>⸱ 나의 학점은 <span class="boldSpan">{{wantedResultList1[index]}}</span> 의 월 급여를 받을 확률을 </span>
                                                    <span class="blueSpan">{{ item['grade'] * -1 }} % 감소</span><span>시킵니다. → {{ (item['avg']*1 + item['grade']*1).toFixed(2) }} %</span>
                                                </span>
                                                <span v-else="item['grade'] == 0">
                                                    <span>⸱ 나의 학점은 <span class="boldSpan">{{wantedResultList1[index]}}</span> 의 월 급여를 받을 확률에 영향이 없습니다.</span>
                                                </span>
                                            </div>
                                            <div v-if="wantedResultTitleList1[index] != '희망 급여'">
                                                <span v-if="item['grade'] > 0">
                                                    <span>⸱ 나의 학점은 <span class="boldSpan">{{wantedResultList1[index]}} 취업 가능성</span>을 </span>
                                                    <span class="redSpan">{{ item['grade'] }} % 증가</span><span>시킵니다. → {{ (item['avg']*1 + item['grade']*1).toFixed(2) }} %</span>
                                                </span>
                                                <span v-else-if="item['grade'] < 0">
                                                    <span>⸱ 나의 학점은 <span class="boldSpan">{{wantedResultList1[index]}} 취업 가능성</span>을 </span>
                                                    <span class="blueSpan">{{ item['grade'] * -1 }} % 감소</span><span>시킵니다. → {{ (item['avg']*1 + item['grade']*1).toFixed(2) }} %</span>
                                                </span>
                                                <span v-else="item['grade'] == 0">
                                                    <span>⸱ 나의 학점은 <span class="boldSpan">{{wantedResultList1[index]}}] 취업 가능성</span>에 영향이 없습니다.</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div v-if="'toeic' in item">
                                            <div v-if="wantedResultTitleList1[index] == '희망 급여'">
                                                <span v-if="item['toeic'] > 0">
                                                    <span>⸱ 나의 토익점수는 <span class="boldSpan">{{wantedResultList1[index]}}</span> 의 월 급여를 받을 확률을 </span>
                                                    <span class="redSpan">{{ item['toeic'] }} % 증가</span><span>시킵니다. → {{ (item['avg']*1 + item['toeic']*1).toFixed(2) }} %</span>
                                                </span>
                                                <span v-else-if="item['toeic'] < 0">
                                                    <span>⸱ 나의 토익점수는 <span class="boldSpan">{{wantedResultList1[index]}}</span> 의 월 급여를 받을 확률을 </span>
                                                    <span class="blueSpan">{{ item['toeic'] * -1 }} % 감소</span><span>시킵니다. → {{ (item['avg']*1 + item['toeic']*1).toFixed(2) }} %</span>
                                                </span>
                                                <span v-else="item['toeic'] == 0">
                                                    <span>⸱ 나의 토익점수는 <span class="boldSpan">{{wantedResultList1[index]}}</span> 의 월 급여를 받을 확률에 영향이 없습니다.</span>
                                                </span>
                                            </div>
                                            <div v-if="wantedResultTitleList1[index] != '희망 급여'">
                                                <span v-if="item['toeic'] > 0">
                                                    <span>⸱ 나의 토익점수는 <span class="boldSpan">{{wantedResultList1[index]}} 취업 가능성</span>을 </span>
                                                    <span class="redSpan">{{ item['toeic'] }} % 증가</span><span>시킵니다. → {{ (item['avg']*1 + item['toeic']*1).toFixed(2) }} %</span>
                                                </span>
                                                <span v-else-if="item['toeic'] < 0">
                                                    <span>⸱ 나의 토익점수는 <span class="boldSpan">{{wantedResultList1[index]}} 취업 가능성</span>을 </span>
                                                    <span class="blueSpan">{{ item['toeic'] * -1 }} % 감소</span><span>시킵니다. → {{ (item['avg']*1 + item['toeic']*1).toFixed(2) }} %</span>
                                                </span>
                                                <span v-else="item['toeic'] == 0">
                                                    <span>⸱ 나의 토익점수는 <span class="boldSpan">{{wantedResultList1[index]}} 취업 가능성</span>에 영향이 없습니다.</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div v-if="'license' in item">
                                            <div v-if="wantedResultTitleList1[index] == '희망 급여'">
                                                <span v-if="item['license'] > 0">
                                                    <span>⸱ 나의 자격증은 <span class="boldSpan">{{wantedResultList1[index]}}</span> 의 월 급여를 받을 확률을 </span>
                                                    <span class="redSpan">{{ item['license'] }} % 증가</span><span>시킵니다. → {{ (item['avg']*1 + item['license']*1).toFixed(2) }} %</span>
                                                </span>
                                                <span v-else-if="item['license'] < 0">
                                                    <span>⸱ 나의 자격증은 <span class="boldSpan">{{wantedResultList1[index]}}</span> 의 월 급여를 받을 확률을 </span>
                                                    <span class="blueSpan">{{ item['license'] * -1}} % 감소</span><span>시킵니다. → {{ (item['avg']*1 + item['license']*1).toFixed(2) }} %</span>
                                                </span>
                                                <span v-else="item['license'] == 0">
                                                    <span>⸱ 나의 자격증은 <span class="boldSpan">{{wantedResultList1[index]}}</span> 의 월 급여를 받을 확률에 영향이 없습니다.</span>
                                                </span>
                                            </div>
                                            <div v-if="wantedResultTitleList1[index] != '희망 급여'">
                                                <span v-if="item['license'] > 0">
                                                    <span>⸱ 나의 자격증은 <span class="boldSpan">{{wantedResultList1[index]}} 취업 가능성</span>을 </span>
                                                    <span class="redSpan">{{ item['license'] }} % 증가</span><span>시킵니다. → {{ (item['avg']*1 + item['license']*1).toFixed(2) }} %</span>
                                                </span>
                                                <span v-else-if="item['license'] < 0">
                                                    <span>⸱ 나의 자격증은 <span class="boldSpan">{{wantedResultList1[index]}} 취업 가능성</span>을 </span>
                                                    <span class="blueSpan">{{ item['license'] * -1}} % 감소</span><span>시킵니다. → {{ (item['avg']*1 + item['license']*1).toFixed(2) }} %</span>
                                                </span>
                                                <span v-else="item['license'] == 0">
                                                    <span>⸱ 나의 자격증은 <span class="boldSpan">{{wantedResultList1[index]}} 취업 가능성</span>에 영향이 없습니다.</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="effectArea" v-show="!isWantedResultNodata & wantedResultTitleList2.length > 0">
                            <div class="expectContentWrapper" v-for="(item, mindex) in wantedResultTitleList2">
                                <div class="expectContentHeader">
                                    <div class="lineHeader">
                                        <img src="images/line42.svg" alt="line" />
                                    </div>
                                    <div class="headerContent">
                                        <div>{{ item }}</div>
                                        <div></div>
                                        <div>
                                            <span v-if="wantedResultList2[mindex]">
                                                {{wantedResultList2[mindex]}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="chartBox">
                                   <div class="effectChart" :id="'shap2'+mindex"></div>
                                </div>
                                <div v-for="(item, index) in wantedResultDescList2">
                                    <div class="toeicExpectBox" v-if="mindex  == index">
                                        <div>
                                            <div v-if="wantedResultTitleList2[index] == '희망 급여'">
                                                <span>⸱ 입력한 학과가 <span class="boldSpan">{{wantedResultList2[index]}}</span> 의 월 급여를 받을 확률은</span><span class="boldSpan">&nbsp;&nbsp;{{ item['avg'] }} %</span><span>입니다.</span>
                                            </div>
                                            <div v-if="wantedResultTitleList2[index] != '희망 급여'">
                                                <span>⸱ 입력한 학과의 <span class="boldSpan">{{wantedResultList2[index]}} 취업 가능성</span>은</span><span class="boldSpan">&nbsp;&nbsp;{{ item['avg'] }} %</span><span>입니다.</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div v-if="wantedResultTitleList2[index] == '희망 급여'">
                                                <span v-if="item['grade'] > 0">
                                                    <span>⸱ 나의 학점은 <span class="boldSpan">{{wantedResultList2[index]}}</span> 의 월 급여를 받을 확률을 </span>
                                                    <span class="redSpan">{{ item['grade'] }} % 증가</span><span>시킵니다. → {{ (item['avg']*1 + item['grade']*1).toFixed(2) }} %</span>
                                                </span>
                                                <span v-else-if="item['grade'] < 0">
                                                    <span>⸱ 나의 학점은 <span class="boldSpan">{{wantedResultList2[index]}}</span> 의 월 급여를 받을 확률을 </span>
                                                    <span class="blueSpan">{{ item['grade'] * -1 }} % 감소</span><span>시킵니다. → {{ (item['avg']*1 + item['grade']*1).toFixed(2) }} %</span>
                                                </span>
                                                <span v-else="item['grade'] == 0">
                                                    <span>⸱ 나의 학점은 <span class="boldSpan">{{wantedResultList2[index]}}</span> 의 월 급여를 받을 확률에 영향이 없습니다.</span>
                                                </span>
                                            </div>
                                            <div v-if="wantedResultTitleList2[index] != '희망 급여'">
                                                <span v-if="item['grade'] > 0">
                                                    <span>⸱ 나의 학점은 <span class="boldSpan">{{wantedResultList2[index]}} 취업 가능성</span>을 </span>
                                                    <span class="redSpan">{{ item['grade'] }} % 증가</span><span>시킵니다. → {{ (item['avg']*1 + item['grade']*1).toFixed(2) }} %</span>
                                                </span>
                                                <span v-else-if="item['grade'] < 0">
                                                    <span>⸱ 나의 학점은 <span class="boldSpan">{{wantedResultList2[index]}} 취업 가능성</span>을 </span>
                                                    <span class="blueSpan">{{ item['grade'] * -1 }} % 감소</span><span>시킵니다. → {{ (item['avg']*1 + item['grade']*1).toFixed(2) }} %</span>
                                                </span>
                                                <span v-else="item['grade'] == 0">
                                                    <span>⸱ 나의 학점은 <span class="boldSpan">{{wantedResultList2[index]}}] 취업 가능성</span>에 영향이 없습니다.</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div v-if="'toeic' in item">
                                            <div v-if="wantedResultTitleList2[index] == '희망 급여'">
                                                <span v-if="item['toeic'] > 0">
                                                    <span>⸱ 나의 토익점수는 <span class="boldSpan">{{wantedResultList2[index]}}</span> 의 월 급여를 받을 확률을 </span>
                                                    <span class="redSpan">{{ item['toeic'] }} % 증가</span><span>시킵니다. → {{ (item['avg']*1 + item['toeic']*1).toFixed(2) }} %</span>
                                                </span>
                                                <span v-else-if="item['toeic'] < 0">
                                                    <span>⸱ 나의 토익점수는 <span class="boldSpan">{{wantedResultList2[index]}}</span> 의 월 급여를 받을 확률을 </span>
                                                    <span class="blueSpan">{{ item['toeic'] * -1 }} % 감소</span><span>시킵니다. → {{ (item['avg']*1 + item['toeic']*1).toFixed(2) }} %</span>
                                                </span>
                                                <span v-else="item['toeic'] == 0">
                                                    <span>⸱ 나의 토익점수는 <span class="boldSpan">{{wantedResultList2[index]}}</span> 의 월 급여를 받을 확률에 영향이 없습니다.</span>
                                                </span>
                                            </div>
                                            <div v-if="wantedResultTitleList2[index] != '희망 급여'">
                                                <span v-if="item['toeic'] > 0">
                                                    <span>⸱ 나의 토익점수는 <span class="boldSpan">{{wantedResultList2[index]}} 취업 가능성</span>을 </span>
                                                    <span class="redSpan">{{ item['toeic'] }} % 증가</span><span>시킵니다. → {{ (item['avg']*1 + item['toeic']*1).toFixed(2) }} %</span>
                                                </span>
                                                <span v-else-if="item['toeic'] < 0">
                                                    <span>⸱ 나의 토익점수는 <span class="boldSpan">{{wantedResultList2[index]}} 취업 가능성</span>을 </span>
                                                    <span class="blueSpan">{{ item['toeic'] * -1 }} % 감소</span><span>시킵니다. → {{ (item['avg']*1 + item['toeic']*1).toFixed(2) }} %</span>
                                                </span>
                                                <span v-else="item['toeic'] == 0">
                                                    <span>⸱ 나의 토익점수는 <span class="boldSpan">{{wantedResultList2[index]}} 취업 가능성</span>에 영향이 없습니다.</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div v-if="'license' in item">
                                            <div v-if="wantedResultTitleList2[index] == '희망 급여'">
                                                <span v-if="item['license'] > 0">
                                                    <span>⸱ 나의 자격증은 <span class="boldSpan">{{wantedResultList2[index]}}</span> 의 월 급여를 받을 확률을 </span>
                                                    <span class="redSpan">{{ item['license'] }} % 증가</span><span>시킵니다. → {{ (item['avg']*1 + item['license']*1).toFixed(2) }} %</span>
                                                </span>
                                                <span v-else-if="item['license'] < 0">
                                                    <span>⸱ 나의 자격증은 <span class="boldSpan">{{wantedResultList2[index]}}</span> 의 월 급여를 받을 확률을 </span>
                                                    <span class="blueSpan">{{ item['license'] * -1}} % 감소</span><span>시킵니다. → {{ (item['avg']*1 + item['license']*1).toFixed(2) }} %</span>
                                                </span>
                                                <span v-else="item['license'] == 0">
                                                    <span>⸱ 나의 자격증은 <span class="boldSpan">{{wantedResultList2[index]}}</span> 의 월 급여를 받을 확률에 영향이 없습니다.</span>
                                                </span>
                                            </div>
                                            <div v-if="wantedResultTitleList2[index] != '희망 급여'">
                                                <span v-if="item['license'] > 0">
                                                    <span>⸱ 나의 자격증은 <span class="boldSpan">{{wantedResultList2[index]}} 취업 가능성</span>을 </span>
                                                    <span class="redSpan">{{ item['license'] }} % 증가</span><span>시킵니다. → {{ (item['avg']*1 + item['license']*1).toFixed(2) }} %</span>
                                                </span>
                                                <span v-else-if="item['license'] < 0">
                                                    <span>⸱ 나의 자격증은 <span class="boldSpan">{{wantedResultList2[index]}} 취업 가능성</span>을 </span>
                                                    <span class="blueSpan">{{ item['license'] * -1}} % 감소</span><span>시킵니다. → {{ (item['avg']*1 + item['license']*1).toFixed(2) }} %</span>
                                                </span>
                                                <span v-else="item['license'] == 0">
                                                    <span>⸱ 나의 자격증은 <span class="boldSpan">{{wantedResultList2[index]}} 취업 가능성</span>에 영향이 없습니다.</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="effectArea" v-show="!isWantedResultNodata & wantedResultTitleList3.length > 0">
                            <div class="expectContentWrapper" v-for="(item, mindex) in wantedResultTitleList3">
                                <div class="expectContentHeader">
                                    <div class="lineHeader">
                                        <img src="images/line42.svg" alt="line" />
                                    </div>
                                    <div class="headerContent">
                                        <div>{{ item }}</div>
                                        <div></div>
                                        <div>
                                            <span v-if="wantedResultList3[mindex]">
                                                {{wantedResultList3[mindex]}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="chartBox">
                                   <div class="effectChart" :id="'shap3'+mindex"></div>
                                </div>
                                <div v-for="(item, index) in wantedResultDescList3">
                                    <div class="toeicExpectBox" v-if="mindex  == index">
                                        <div>
                                            <span>⸱ 입력한 학과의 <span class="boldSpan">{{wantedResultList3[index]}} 취업 가능성</span>은</span><span class="boldSpan">&nbsp;&nbsp;{{ item['avg'] }} %</span><span>입니다.</span>
                                        </div>
                                        <div v-if="'toeic' in item">
                                            <div v-if="wantedResultTitleList3[index] != '희망 급여'">
                                                <span v-if="item['toeic'] > 0">
                                                    <span>⸱ 나의 토익점수는 <span class="boldSpan">{{wantedResultList3[index]}} 취업 가능성</span>을 </span>
                                                    <span class="redSpan">{{ item['toeic'] }} % 증가</span><span>시킵니다. → {{ (item['avg']*1 + item['toeic']*1).toFixed(2) }} %</span>
                                                </span>
                                                <span v-else-if="item['toeic'] < 0">
                                                    <span>⸱ 나의 토익점수는 <span class="boldSpan">{{wantedResultList3[index]}} 취업 가능성</span>을 </span>
                                                    <span class="blueSpan">{{ item['toeic'] * -1 }} % 감소</span><span>시킵니다. → {{ (item['avg']*1 + item['toeic']*1).toFixed(2) }} %</span>
                                                </span>
                                                <span v-else="item['toeic'] == 0">
                                                    <span>⸱ 나의 토익점수는 <span class="boldSpan">{{wantedResultList3[index]}} 취업 가능성</span>에 영향이 없습니다.</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div v-if="'license' in item">
                                            <div v-if="wantedResultTitleList3[index] != '희망 급여'">
                                                <span v-if="item['license'] > 0">
                                                    <span>⸱ 나의 자격증은 <span class="boldSpan">{{wantedResultList3[index]}} 취업 가능성</span>을 </span>
                                                    <span class="redSpan">{{ item['license'] }} % 증가</span><span>시킵니다. → {{ (item['avg']*1 + item['license']*1).toFixed(2) }} %</span>
                                                </span>
                                                <span v-else-if="item['license'] < 0">
                                                    <span>⸱ 나의 자격증은 <span class="boldSpan">{{wantedResultList3[index]}} 취업 가능성</span>을 </span>
                                                    <span class="blueSpan">{{ item['license'] * -1}} % 감소</span><span>시킵니다. → {{ (item['avg']*1 + item['license']*1).toFixed(2) }} %</span>
                                                </span>
                                                <span v-else="item['license'] == 0">
                                                    <span>⸱ 나의 자격증은 <span class="boldSpan">{{wantedResultList3[index]}} 취업 가능성</span>에 영향이 없습니다.</span>
                                                </span>
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
    </div>

    <!-- 사용방법 -->
    <div v-show="isSelectedManual" class="howModalBack">
        <div class="modalPage1" v-show="isManualStep1">
            <div class="flexBox3">
                <div class="leftDes1" style="visibility: hidden;">
                    자세한 내용은<br />
                    홈페이지 알림소식-자료실의 매뉴얼을 참고해주세요.<br />
                    <span class="grayLeftDesc1">(자료실에서 ‘진로탐색’으로 검색)</span>
                </div>
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

            <div class="alignRight">
                <div class="formWrapper howTo" style="margin-top: 119px;">
                    <div class="setWidth" style="padding-right: 40px;">
                        <div class="formHeader">
                            <div class="formTitle">기본 입력 사항</div>
                            <div class="rightDes1">
                                기본 입력 사항은 <span class="blueSpan">학력정보, 개인신상, 학업 및 경험, 자격정보</span>를 예측 조건으로 선택 하실 수 있습니다.
                            </div>
                        </div>

                        <div class="inputHeader">
                            <div class="inputHeaderDeco">1</div>
                            <span class="inputHeaderTitle">학력정보</span>
                            <div class="inputReset">
                                <img src="images/refreshIcon2.svg" alt="reset" />
                                <span>초기화</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="basicSecondWrapper howTo">
                    <div style="border: 0; padding-right: 52px;">
                        <div class="inputHeader basicHeaderWidth">
                            <div class="inputHeaderDeco">2</div>
                            <span class="inputHeaderTitle">개인신상</span>
                            <div class="inputReset">
                                <img src="images/refreshIcon2.svg" alt="reset" />
                                <span>초기화</span>
                            </div>
                        </div>
                    </div>
                    <div style="border: 0; padding: 0px 51px 0px 63px;">
                        <div class="inputHeader basicHeaderWidth">
                            <div class="inputHeaderDeco">3</div>
                            <span class="inputHeaderTitle">학업 및 경험</span>
                            <div class="inputReset">
                                <img src="images/refreshIcon2.svg" alt="reset" />
                                <span>초기화</span>
                            </div>
                        </div>
                    </div>
                    <div style="padding-right: 49px;padding-left: 63px;">
                        <div class="inputHeader basicHeaderWidth">
                            <div class="inputHeaderDeco">4</div>
                            <span class="inputHeaderTitle">자격정보</span>
                            <div class="inputReset">
                                <img src="images/refreshIcon2.svg" alt="reset" />
                                <span>초기화</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="setWidth howTo" style="margin-top: 59px;">
                <div class="formHeader">
                    <div class="formTitle">선택 입력 사항</div>
                    <div class="rightDes1">
                        선택입력사항은 <span class="blueSpan">희망진로</span>를 유형별로 선택하여 나의 토익, 자격증, 학점이 <br/>희망진로 취업에 미치는 영향을 조회할 수 있습니다.
                    </div>
                </div>
                <div class="optionInputWrapper">
                    <div class="flexBox">
                        <div class="optionInputName" style="height: 177px;">희망진로</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modalPage2" v-show="isManualStep2">
            <div class="flexBox3">
                <div class="leftDes1" style="visibility: hidden;">
                    자세한 내용은<br />
                    홈페이지 알림소식-자료실의 매뉴얼을 참고해주세요.<br /><span class="grayLeftDesc1">
                        (자료실에서 ‘진로탐색’으로 검색)</span>
                </div>
                <div class="controllerBox">
                    <button class="controllers activePrev" v-on:click="handleManual(1)">
                        <img src="images/lArrow.svg"/>
                        이전
                    </button>
                    <button class="controllers nextBtn" v-on:click="handleManual(3)">
                        다음
                        <img src="images/rArrow.svg" />
                    </button>
                </div>
                <div class="pointer" v-on:click="handleManualInit">
                    <img src="images/close2.svg" alt="close" />
                </div>
            </div>
            <div class="formWrapper howTo"  style="margin-top: 119px;">
                <div class="setWidth">
                    <div class="formHeader">
                        <div class="formTitle howTo">기본 입력 사항</div>
                        <div class="rightDes1">
                            진로 예측을 위하여 <span class="blueSpan">대학정보, 고교정보, 성별, 학점</span>은 필수 입력 사항 입니다.</div>
                    </div>
                    <div class="degreeInputWrapper howTo">
                        <div class="degreeInputName">대학</div>
                        <div class="degreeInputContainer degreeInputContainer1">
                            <div class="onelineDegreeInput">
                                <div class="flexBox">
                                    <span>학교명</span>
                                    <div class="starTip">
                                        <img src="images/mustIcon.svg" alt="star" />
                                    </div>
                                </div>
                                <article class="degreeSelect1">
                                    <div class="selectArrow2">
                                        <img src="images/dropdownBtn2.svg" alt="arrow" />
                                    </div>
                                    <button class="select1Btn">
                                        <input class="selectInput1" type="search" />
                                        <!-- 검색기능 연동해야해서 일단 이렇게 입력해뒀습니다 -->
                                        <div class="inActiveText selectInput2" type="search">
                                            직접 입력
                                        </div>
                                    </button>
                                    <ul class="activeText selectList">
                                        <li>
                                            <button type="button">가톨릭대학교</button>
                                        </li>
                                        <li><button type="button">강서대학교</button></li>
                                        <li><button type="button">건국대학교</button></li>
                                        <li><button type="button">경기대학교</button></li>
                                        <li><button type="button">경희대학교</button></li>
                                        <li><button type="button">고려대학교</button></li>
                                        <li><button type="button">광운대학교</button></li>
                                        <li><button type="button">국민대학교</button></li>
                                        <li><button type="button">성균관대학교</button></li>
                                        <li><button type="button">대학교</button></li>
                                    </ul>
                                </article>
                            </div>
                            <div class="onelineDegreeInput">
                                <div class="flexBox">
                                    <span>전공명</span>
                                    <div class="starTip">
                                        <img src="images/mustIcon.svg" alt="star" />
                                    </div>
                                </div>
                                <div class="flexBox">
                                    <div class="degreeSelectBox2 degreeSelect2">
                                        <div class="selectArrow2">
                                            <img src="images/dropdownBtn2.svg" alt="arrow" />
                                        </div>
                                        <span class="inActiveText">직접 입력</span>
                                    </div>
                                    <div class="degreeSelectBox2 degreeSelect3">
                                        <div class="selectArrow2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
                                                <path d="M4.22196 7.03783C4.62221 7.533 5.37715 7.533 5.77739 7.03783L9.74546 2.12862C10.274 1.47468 9.80859 0.5 8.96774 0.5H1.03161C0.19076 0.5 -0.274677 1.47468 0.253897 2.12862L4.22196 7.03783Z" fill="#567BFF" />
                                            </svg>
                                        </div>
                                        <span class="inActiveText">주간</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="degreeInputName">고교</div>
                        <div class="degreeInputContainer degreeInputContainer2">
                            <div class="onelineDegreeInput">
                                <div class="flexBox">
                                    <span>학교지역</span>
                                    <div class="starTip">
                                        <img src="images/mustIcon.svg" alt="star" />
                                    </div>
                                </div>
                                <div class="degreeSelectBox2 degreeSelect6">
                                    <div class="selectArrow2">
                                        <img src="images/dropdownBtn2.svg" alt="arrow" />
                                    </div>
                                    <span>서울</span>
                                </div>
                            </div>
                            <div class="onelineDegreeInput">
                                <div class="flexBox">
                                    <span>학교유형</span>
                                    <div class="starTip">
                                        <img src="images/mustIcon.svg" alt="star" />
                                    </div>
                                </div>
                                <div class="degreeSelectBox2 degreeSelect6">
                                    <div class="selectArrow2">
                                        <img src="images/dropdownBtn2.svg" alt="arrow" />
                                    </div>
                                    <span>일반고</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="basicSecondWrapper">
                        <div style="border: 0;">
                            <div class="secondInner howTo">
                                <div class="twoLineDegreeInput">
                                    <div class="flexBox">
                                        <span>성별</span>
                                        <div class="starTip">
                                            <img src="images/mustIcon.svg" alt="star" />
                                        </div>
                                    </div>
                                    <div class="degreeSelectBox2 degreeSelect8">
                                        <div class="selectArrow2">
                                            <img src="images/dropdownBtn2.svg" alt="arrow" />
                                        </div>
                                        <span class="inActiveText">선택</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="secondInner howTo Second">
                                <div class="twoLineDegreeInput">
                                    <div class="flexBox">
                                        <span>졸업학점</span>
                                        <div class="starTip">
                                            <img src="images/mustIcon.svg" alt="star" />
                                        </div>
                                    </div>
                                    <div class="flexBox">
                                        <input class="degreeInput degreeSelectBox2 degreeSelect11" placeholder="학점 입력" />
                                        <input class="degreeInput degreeSelectBox2 degreeSelect10" placeholder="학점 만점 입력" />
                                        <button class="degreeBtn">백분위</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modalPage3" v-show="isManualStep3">
            <div class="flexBox3">
                <div class="leftDes1" style="visibility: hidden;">
                    자세한 내용은<br />
                    홈페이지 알림소식-자료실의 매뉴얼을 참고해주세요.<br /><span class="grayLeftDesc1">
                        (자료실에서 ‘진로탐색’으로 검색)</span>
                </div>
                <div class="controllerBox">
                    <button class="controllers activePrev" v-on:click="handleManual(2)">
                        <img src="images/lArrow.svg" />
                        이전
                    </button>
                    <button class="controllers nextBtn" v-on:click="handleManual(4)">
                        다음
                        <img src="images/rArrow.svg" />
                    </button>
                </div>
                <div class="pointer" v-on:click="handleManualInit">
                    <img src="images/close2.svg" alt="close" />
                </div>
            </div>

            <div class="formWrapper howTo" style="margin-top: 119px;">
                <div class="setWidth">
                    <div class="formHeader">
                        <div class="formTitle howTo">기본 입력 사항</div>
                        <div class="rightDes1">
                            <span class="blueSpan">추가입력사항</span>을 입력 하실 경우 보다 정확한 진로 예측이 가능합니다.
                        </div>
                    </div>
                    <div class="degreeInputWrapper howTo Second" style="width: 518px;">
                        <div class="degreeInputContainer degreeInputContainer1">
                            <div class="stretchBox">
                                <div class="twoLineDegreeInput">
                                    <span>입학년월</span>
                                    <div class="flexBox">
                                        <div class="degreeSelectBox2 degreeSelect4">
                                            <div class="selectArrow2">
                                                <img src="images/dropdownBtn2.svg" alt="arrow" />
                                            </div>
                                            <span class="inActiveText">년</span>
                                        </div>
                                        <div class="degreeSelectBox2 degreeSelect5">
                                            <div class="selectArrow2">
                                                <img src="images/dropdownBtn2.svg" alt="arrow" />
                                            </div>
                                            <span class="inActiveText">월</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="degreeLineBox">
                                    <div class="degreeBLine"></div>
                                </div>

                                <div class="twoLineDegreeInput">
                                    <span>입학년월</span>
                                    <div class="flexBox">
                                        <div class="degreeSelectBox2 degreeSelect4">
                                            <div class="selectArrow2">
                                                <img src="images/dropdownBtn2.svg" alt="arrow" />
                                            </div>
                                            <span class="inActiveText">년</span>
                                        </div>
                                        <div class="degreeSelectBox2 degreeSelect5">
                                            <div class="selectArrow2">
                                                <img src="images/dropdownBtn2.svg" alt="arrow" />
                                            </div>
                                            <span class="inActiveText">월</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="qualHowTo" style="margin-top: -65px;">
                        <div style="width: 292px;">
                            <div class="qualInput toeicInput">
                                <span>보유자격증</span>
                                <input class="degreeInput degreeSelectBox degreeSelect8" placeholder="자격증 개수 입력" />
                                <div class="searchBox">
                                    <input class="degreeInput degreeSelectBox degreeSelect8" placeholder="자격증명 검색" />
                                    <div class="searchIcon">
                                        <img src="images/searchIcon.svg" alt="search" />
                                    </div>
                                </div>
                            </div>
                            <div class="qualBtnBox">
                                <div class="qualBtn">자격증</div>
                                <div class="qualBtn">자격증</div>
                                <div class="qualBtn">자격증</div>
                            </div>
                        </div>
                    </div>
                    <div class="basicSecondWrapper howTo Second" style="margin-top: -206px;">
                        <div style="border: 0;">
                            <div class="twoLineDegreeInput">
                                <div class="flexBox">
                                    <span>생년월일</span>
                                </div>
                                <div class="flexBox">
                                    <div class="degreeSelectBox2 degreeSelect9">
                                        <div class="selectArrow2">
                                            <img src="images/dropdownBtn2.svg" alt="arrow" />
                                        </div>
                                        <span class="inActiveText">년</span>
                                    </div>
                                    <div class="degreeSelectBox2 degreeSelect15">
                                        <div class="selectArrow2">
                                            <img src="images/dropdownBtn2.svg" alt="arrow" />
                                        </div>
                                        <span class="inActiveText">월</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="secondInner">
                                <div class="twoLineDegreeInput howTo">
                                    <div class="flexBox">
                                        <span>토익점수</span>
                                    </div>
                                    <input class="degreeInput degreeSelectBox2 degreeSelect8" placeholder="입력" />
                                </div>
                                <div class="degreeCheckContainer howTo">
                                    <div class="checkDes">해당하는 사항에 체크해주세요.</div>
                                    <div class="checkContainer">
                                        <div class="singleCheck">
                                            <div class="checkIput">
                                                <input type="checkbox" id="transfer" />
                                                <label for="transfer"></label>
                                                <span>편입</span>
                                            </div>
                                        </div>
                                        <div class="singleCheck">
                                            <div class="checkIput">
                                                <input type="checkbox" id="teaching" />
                                                <label for="teaching"></label>
                                                <span>교직과정이수</span>
                                            </div>
                                        </div>
                                        <div class="singleCheck">
                                            <div class="checkIput">
                                                <input type="checkbox" id="overseas" />
                                                <label for="overseas"></label>
                                                <span>해외연수</span>
                                            </div>
                                        </div>
                                        <div class="singleCheck">
                                            <div class="checkIput">
                                                <input type="checkbox" id="field" />
                                                <label for="field"></label>
                                                <span>현장실습</span>
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

        <div class="modalPage4" v-show="isManualStep4">
            <div class="flexBox3">
                <div class="leftDes1" style="visibility: hidden;">
                    자세한 내용은<br />
                    홈페이지 알림소식-자료실의 매뉴얼을 참고해주세요.<br /><span class="grayLeftDesc1">
                        (자료실에서 ‘진로탐색’으로 검색)</span>
                </div>
                <div class="controllerBox">
                    <button class="controllers activePrev" v-on:click="handleManual(3)">
                        <img src="images/lArrow.svg" />
                        이전
                    </button>
                    <button class="controllers nextBtn" v-on:click="handleManual(5)">
                        다음
                        <img src="images/rArrow.svg" />
                    </button>
                </div>
                <div class="pointer" v-on:click="handleManualInit">
                    <img src="images/close2.svg" alt="close" />
                </div>
            </div>

            <div class="formWrapper howTo" style="margin-top: 119px;">
                <div class="setWidth">
                    <div class="formHeader">
                        <div class="formTitle howTo">기본 입력 사항</div>
                    </div>
                    <div class="degreeInputContainer degreeInputContainer2 howTo" style="margin-left: -8px;margin-top: 190px;">
                        <div class="stretchBox">
                            <div>
                                <div class="rightDes1 howTo01" style="width: 700px;margin-top: 54px;">
                                     <span class="blueSpan">출신고교명</span>을 검색하여 선택하면 <span class="blueSpan">고등학교지역</span>과 <span class="blueSpan">고등학교유형</span>이 자동 입력됩니다.
                                </div>
                            </div>
                            <div class="twoLineDegreeInput">
                                <div class="flexBox schoolname">
                                    <span>고등학교명</span>
                                    <div id="nameHover">
                                        <img src="images/nameHoverIcon.svg" alt="nameInfo" />
                                        <img id="nameTooltip" src="images/nameTooltip.svg" alt="nameInfo" />
                                    </div>
                                </div>
                                <div class="searchBox">
                                    <input class="degreeInput degreeSelectBox2 degreeSelect7" placeholder="고등학교 검색" />
                                    <div class="searchIcon">
                                        <img src="images/searchIcon.svg" alt="search" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="qualHowTo" style="margin-top: 46px;">
                        <div>
                            <div class="rightDes1 howTo01">
                                보유한 자격증 <span class="blueSpan">총 개수</span>를 입력 합니다.
                            </div>
                            <div class="rightDes1 howTo02">
                                자격증을 <span class="blueSpan">검색</span>하여 선택하면 아래 자격증 목록에 추가됩니다.
                            </div>
                            <div class="rightDes1 howTo03">
                                자격증은 <span class="blueSpan">최대 3개까지</span> 입력 가능합니다.
                            </div>
                        </div>
                        <div style="width: 292px;">
                            <div class="qualInput toeicInput">
                                <span>보유자격증</span>
                                <input class="degreeInput degreeSelectBox degreeSelect8" placeholder="자격증 개수 입력" />
                                <div class="searchBox">
                                    <input class="degreeInput degreeSelectBox degreeSelect8" placeholder="자격증명 검색" />
                                    <div class="searchIcon">
                                        <img src="images/searchIcon.svg" alt="search" />
                                    </div>
                                </div>
                            </div>
                            <div class="qualBtnBox">
                                <div class="qualBtn">자격증</div>
                                <div class="qualBtn">자격증</div>
                                <div class="qualBtn">자격증</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modalPage5" v-show="isManualStep5">
            <div class="flexBox3">
                <div class="leftDes1" style="visibility: hidden;">
                    자세한 내용은<br />
                    홈페이지 알림소식-자료실의 매뉴얼을 참고해주세요.<br /><span class="grayLeftDesc1">
                        (자료실에서 ‘진로탐색’으로 검색)</span>
                </div>
                <div class="controllerBox">
                    <button class="controllers activePrev" v-on:click="handleManual(4)">
                        <img src="images/lArrow.svg" />
                        이전
                    </button>
                    <button class="controllers inActiveNext">
                        다음
                        <img src="images/rArrow.svg" />
                    </button>
                </div>
                <div class="pointer" v-on:click="handleManualInit">
                    <img src="images//close2.svg" alt="close" />
                </div>
            </div>
            <div class="alignModal5 colBox">
                <div class="sampleSearchBtnBox colBox">

                    <div class="searchBtn setCenter">예측</div>
                    <div class="sampleTextBox4">
                        조건 선택 후
                        <span class="blueSpan">예측 버튼 클릭 시</span> 조건에 맞는 결과가
                        조회 됩니다
                    </div>
                </div>

                <div class="favorite howTo" v-show="isUserGroup">
                    <div class="sampleTextBox2 howTo">
                        검색 결과 데이터를 <span class="blueSpan">엑셀 형식</span>으로 다운로드 합니다.
                    </div>
                    <div class="favoriteBtn">
                        <img src="images//favoriteBtn.svg" alt="favorite" />
                    </div>
                </div>

                <div class="sampleButtonBox flexBox" v-show="isUserGroup">
                    <div class="colBox howTo">

                        <div class="sampleTextBox2 howTo">
                            검색 결과 데이터를 <span class="blueSpan">엑셀 형식</span>으로 다운로드 합니다.
                        </div>

                        <div class="saveBtn">
                            <img src="images//addFolder1.svg" alt="add" style="width: 21px; height: 21px" />
                            <div>예측 결과 저장</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 즐겨찾기 -->
    <div class="commonModalBack favorModalBack" v-show="isBookmark" style="align-items: baseline;">
        <div class="commonModal favorModal" style="margin-top: 60px;">
            <div class="searchModalHeader">
                <div class="flexBox3">
                    <div class="searchModalTitle">즐겨찾기 리스트</div>
                    <div v-on:click="closeBookmark">
                        <img src="images/close1.svg" alt="close" style="cursor: pointer;"/>
                    </div>
                </div>
                <div class="flexBox3 flexBox2">
                    <div class="totalText">
                        Total <span class="deepBlueSpan">{{ (this.bookMark_filter_list.length).toLocaleString() }}건</span>
                    </div>
                    <div class="flexBox">
                        <div class="favorInputBox">
                            <div class="favorInputSelct">
                                <select class="selectOpt" v-model="searchFilterType">
                                    <option v-bind:value="null_value">전체</option>
                                    <option value="B">즐겨찾기명</option>
                                    <option value="U">대학명</option>
                                </select>
                            </div>
                            <div class="favorInputLine"></div>
                            <input class="favorInput" placeholder="검색어를 입력하세요." v-model="searchFilterText" v-on:keyup.enter="handleSearchFilter"/>
                        </div>
                        <div class="searchBtn3" v-on:click="handleSearchFilter" style="cursor:pointer;">검색</div>
                    </div>
                </div>
            </div>
            <div class="favorModalFooter">
                <div>
                    <div class="LineTitle favorFooterLine1">
                        <div class="titleNO">No</div>
                        <div class="LineTimeTitle LineFavName">즐겨찾기명</div>
                        <div class="LineTimeTitle LineUnivName">대학명</div>
                        <div class="LineTimeTitle LineMajorName">전공명</div>
                        <div class="LineTimeTitle LineTime">입력시간</div>
                    </div>

                    <div v-for="(book, index) in bookMark_filter_list" class="favorFooterLine1" v-on:click="handleBookmark" v-on:dblclick="handleDoubleClickSelectedBookmark(index)"  ref="setSelectedBookmark">
                        <div class="titleNO">{{ index + 1 }}</div>
                        <div class="LineFavName">{{ book.TITLE }}</div>
                        <div class="LineUnivName">{{ book.SCHNM }}</div>
                        <div class="LineMajorName">{{ book.DEPTNM }}</div>
                        <div class="LineTime">{{ moment(book.CREATE_TIME).format('YYYY-MM-DD HH:mm') }}</div>
                    </div>
                </div>
                <button class="selectBtn2" v-on:click="handleSelectedBookmark">선택</button>
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
                <div class="downloadInnerContent">
                    <div class="downloadFlex">
                        <span>구분</span>
                        <select class="usageSelect" title="구분선택" v-model="usageExporterTypeValue">
                            <option v-bind:value="null_value">선택</option>
                            <option :key="i" :value="type.value"
                                v-for="(type, i) in usageExporterType"
                                v-bind:title="type.text">
                                {{ type.text }}</option>
                        </select>
                    </div>
                    <div class="downloadFlex">
                        <span>조회기간</span>
                        <div class="flexBox setCenter">
                            <input class="downloadCalBox1 downloadInputBox"
                                type="date"
                                placeholder="시작일"
                                format="yyyy-MM-dd"
                                name="dateStartup"
                                aria-label="dateStartup"
                                v-model="usageExporterStartDate"/>
                            <div class="downloadHLine"></div>
                            <input type="date"
                                placeholder="종료일"
                                format="yyyy-MM-dd"
                                name="dateFinish"
                                aria-label="dateFinish"
                                v-model="usageExporterEndDate"/>
                        </div>
                    </div>
                    <div class="downloadFlex">
                        <span>조회간격</span>
                        <select title="조회간격" class="usageSelect" v-model="usageExporterDateValue">
                            <option v-bind:value="null_value">선택</option>
                            <option :key="i" :value="date.value"
                                v-for="(date, i) in usageExporterDate"
                                v-bind:title="date.text">
                                {{ date.text }}</option>
                        </select>
                    </div>
                </div>
                <div class="downloadModalFooter setCenter">
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
</div>