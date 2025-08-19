<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%!
    public String  XSSFilter(String str){
        str = str.replaceAll("<","&lt;");
        str = str.replaceAll(">","&gt;");

        return str;
    }
%>
<%
    String usertype = request.getParameter("USERGRPTYPE") == null ? "" : request.getParameter("USERGRPTYPE");
    String schcd = request.getParameter("SCHCD") == null ? "ALL" : request.getParameter("SCHCD");
    String orgcd = request.getParameter("ORGCD") == null ? "ALL" : request.getParameter("ORGCD");

    usertype = XSSFilter(usertype);
    schcd = XSSFilter(schcd);
    orgcd = XSSFilter(orgcd);
%>
<jsp:include page="header.jsp" />
<script type="text/javascript">
    var userType = "<%=usertype%>";
    var gSchcd = "<%=schcd%>";
    var gOrgcd = "<%=orgcd%>";
</script>

<script src="js/views/common.js?v=1111"></script>
<script src="js/views/university.js?v=1111"></script>
<script type="text/javascript" src="js/vue-custom-tooltip.js"></script>
<script type="text/javascript" src="js/vue-single-select.js"></script>
<script type="text/javascript" src="js/waitMe.min.js"></script>
<link type="text/css" href="css/waitMe.min.css" rel="stylesheet" />
<script type="text/javascript" src="js/excel-export/xlsx.core.min.js"></script>
<script type="text/javascript" src="js/excel-export/Blob.js"></script>
<script type="text/javascript" src="js/excel-export/FileSaver.js"></script>

<style>
    /* Add a right margin to each icon */
    .fa {
        margin-left: -12px;
        margin-right: 8px;
        vertical-align: baseline;
    }
    .highcharts-data-label span {
      text-align: center
    }
</style>
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
                //text = "";
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

<div class="body_contents_wrp" id="app">
    <div class="visual_wrp"></div>
    <section class="contents_wrp">
        <div class="tab_wrp" style="display:flex;">
            <!--<div style="width: 100%;">
                <button v-for="(tab, index) in _uniTabs" v-model="selectedUniType"
                        v-bind:class="{on: currentTab === index}"
                        v-on:click="tabClick(tab, index)"
                        style="width:152px;">{{ tab.name }}
                </button>
            </div>-->
            <div class="btn_select_wrp_item" style="color: #fff;background-color: #1b2b4a;margin-right: 5px;">학교명</div>
            <div class="vue_select_sty big" style="width: 312px;margin-right: 5px;">
                <select class="employment_uni_select" v-model="selectedUniType" :disabled="selectedUni">
                    <option v-bind:value="null_value">대학 선택</option>
                    <option :key="i" :value="uni.value"
                        v-for="(uni, i) in tmpUniTabs"
                        v-bind:title="uni.name">
                        {{ uni.name }}
                    </option>
                </select>
            </div>
        </div>

        <article class="modules_wrp" id="module0">
            <div class="modules_bx" style="padding-top: 30px;padding-left: 20px;">
                <div class="tab-content">
                    <div class="personal_area">
                        <div class="personal_div">
                            <div style="padding-bottom: 20px;">
                                <div class="status_bx" style="display:flex;flex-direction: column;width: 100%;">
                                    <div class="btn_select_wrp" style="text-align: left;padding-bottom: 8px;">
                                        <button class="active" type="button" class="employment_item" style="margin-right: 2px;width:163px;">분석모델</button>
                                            <div class="select_sty" style="width: 362px;">
                                                <select class="selectOpt" id="sel_wanted_comtype" v-model="selectedSearchType">
                                                    <option v-bind:value="null_value">선택</option>
                                                    <option :key="i" :value="searchType.value"
                                                        v-for="(searchType, i) in searchTypes"
                                                        v-bind:title="searchType.name">
                                                        {{ searchType.name }}
                                                    </option>
                                                </select>
                                                <i></i>
                                            </div>
                                            <div class="select_sty" style="width: 193px;" v-show="isSalaryType && isPersonalSearch">
                                                <select class="selectOpt" v-model="classTypeByPersonal" @change="handleClassTypeByPersonal">
                                                    <option :key="i" :value="salaryType.value"
                                                        v-for="(salaryType, i) in salaryTypes"
                                                        v-bind:title="salaryType.name">
                                                        {{ salaryType.name }}
                                                    </option>
                                                </select>
                                                <i></i>
                                            </div>
                                            <div class="select_sty" style="width: 193px;" v-show="isComType && isPersonalSearch">
                                                <select class="selectOpt" v-model="classTypeByPersonal" @change="handleClassTypeByPersonal">
                                                    <option :key="i" :value="comType.value"
                                                        v-for="(comType, i) in comTypes"
                                                        v-bind:title="comType.name">
                                                        {{ comType.name }}
                                                    </option>
                                                </select>
                                                <i></i>
                                            </div>
                                        <button v-show="!isPersonalSearch" type="button" class="bg" v-on:click="searchPerBtn" style="height: 33px;float:right;">개인별 영향도 보기</button>
                                        <button v-show="isPersonalSearch" type="button" class="bg" v-on:click="searchAllBtn" style="height: 33px;float:right;background: #5b9bd5;">전체 영향도 보기</button>
                                    </div>
                                    <div class="employment_select_wrp" style="display: flex;align-items: flex-start;">
                                        <div v-show="isPersonalSearch" style="display: flex;width: 100%;flex-wrap: wrap;">
                                            <div v-show="currentTab==0 || currentTab==1 || currentTab==2">
                                                <button type="button" class="employment_item" style="">학과</button>
                                                <div class="select_sty" style="width: 195px;">
                                                    <select class="selectOpt" @change="handleDeptPersonal" v-model="dept">
                                                        <option v-bind:value="null_value">선택</option>
                                                        <option :key="i" :value="uniDept"
                                                            v-for="(uniDept, i) in uniDeptList"
                                                            v-bind:title="uniDept">
                                                            {{ uniDept }}</option>
                                                    </select> <i></i>
                                                </div>
                                            </div>
                                            <div v-show="currentTab==0">
                                                <button type="button" class="employment_item" style="">전형</button>
                                                <div class="select_sty" style="width: 195px;">
                                                    <select class="selectOpt" v-model="admission">
                                                        <option v-bind:value="null_value">선택</option>
                                                        <option :key="i" :value="admType"
                                                            v-for="(admType, i) in admTypeList"
                                                            v-bind:title="admType">
                                                            {{ admType }}</option>
                                                    </select> <i></i>
                                                </div>
                                            </div>
                                            <div v-show="currentTab==0">
                                                <button type="button" class="employment_item" style="">교류구분</button>
                                                    <div class="select_sty" style="width: 195px;">
                                                        <select class="selectOpt" v-model="exchange">
                                                            <option v-bind:value="null_value">선택</option>
                                                            <option :key="i" :value="excType"
                                                                v-for="(excType, i) in excTypeList"
                                                                v-bind:title="excType">
                                                                {{ excType }}</option>
                                                        </select> <i></i>
                                                    </div>
                                            </div>
                                            <div v-show="currentTab==0 || currentTab==1 || currentTab==2">
                                                <button type="button" class="employment_item" style="">나이</button>
                                                <div class="select_sty" style="width: 195px;">
                                                    <input title="나이" type="text" placeholder="" style="width: 100%" v-model="age" :maxlength="2" @keypress="isOnlyNumber($event)"></input>
                                                </div>
                                            </div>
                                            <div v-show="currentTab==0 || currentTab==1 || currentTab==2" style="display: flex;">
                                                <vue-custom-tooltip style="cursor:arrow;word-break: keep-all;" label="백분위로 환산한 학점을    입력해 주세요." sticky="true" multiline="true" position="is-right" :active="false">
                                                    <div class="btn_select_wrp_item employment_item">
                                                        학점
                                                        <button class="btn_question_org" style="margin-left:51px;" v-on:click="helpInfo($event)" v-on:mouseleave="helpInfo($event)"></button>
                                                    </div>
                                                </vue-custom-tooltip>
                                                <div class="select_sty" style="width: 195px;margin-left: 3px;">
                                                    <input title="학점" type="text" placeholder="" style="width: 100%" v-model="gradescore" :maxlength="6" @keypress="isNumber($event)"></input>
                                                </div>
                                            </div>
                                            <div v-show="currentTab==0 || currentTab==1 || currentTab==2">
                                                <button type="button" class="employment_item" style="">비교과과정 참여횟수</button>
                                                <div class="select_sty" style="width: 195px;">
                                                    <input title="비교과과정 참여횟수"  type="text" placeholder="" style="width: 100%" v-model="nonsubjectcnt" :maxlength="3" @keypress="isOnlyNumber($event)"></input>
                                                </div>
                                            </div>
                                            <div v-show="currentTab==0 || currentTab==1 || currentTab==2">
                                                <button type="button" class="employment_item" style="">수상횟수</button>
                                                    <div class="select_sty" style="width: 195px;">
                                                        <input title="수상횟수" type="text" placeholder="" style="width: 100%" v-model="awardcnt" :maxlength="3" @keypress="isOnlyNumber($event)"></input>
                                                    </div>
                                            </div>
                                            <div v-show="currentTab==0 || currentTab==1 || currentTab==2" style="display: flex;">
                                                <vue-custom-tooltip style="cursor:arrow;word-break: keep-all;" label="총 자격증 개수를 입력해 주세요." sticky="true" multiline="true" position="is-right" :active="false">
                                                    <div class="btn_select_wrp_item employment_item">
                                                        자격증
                                                        <button class="btn_question_org" style="margin-left:45px;" v-on:click="helpInfo($event)" v-on:mouseleave="helpInfo($event)"></button>
                                                    </div>
                                                </vue-custom-tooltip>
                                                <div class="select_sty" style="width: 195px;margin-left: 3px;">
                                                    <input title="자격증" type="text" placeholder="" style="width: 100%" v-model="license" :maxlength="3" @keypress="isOnlyNumber($event)"></input>
                                                </div>
                                            </div>
                                            <div v-show="currentTab==0" style="display: flex;">
                                                <vue-custom-tooltip style="cursor:arrow;word-break: keep-all;" label="아르바이트 경험 횟수를   입력해 주세요." sticky="true" multiline="true" position="is-right" :active="false">
                                                    <div class="btn_select_wrp_item employment_item">
                                                        아르바이트
                                                        <button class="btn_question_org" style="margin-left:33px;" v-on:click="helpInfo($event)" v-on:mouseleave="helpInfo($event)"></button>
                                                    </div>
                                                </vue-custom-tooltip>

                                                <div class="select_sty" style="width: 195px;margin-left: 3px;">
                                                    <input title="아르바이트" type="text" placeholder="" style="width: 100%" v-model="parttime" :maxlength="3" @keypress="isOnlyNumber($event)"></input>
                                                </div>
                                            </div>
                                            <div v-show="currentTab==0">
                                                <button type="button" class="employment_item" style="">창업동아리 참여횟수</button>
                                                <div class="select_sty" style="width: 195px;">
                                                    <input title="창업동아리 참여횟수" type="text" placeholder="" style="width: 100%" v-model="startupclubcnt" :maxlength="3" @keypress="isOnlyNumber($event)"></input>
                                                </div>
                                            </div>
                                            <div v-show="currentTab==0" style="display: flex;">
                                                <vue-custom-tooltip style="cursor:arrow;word-break: keep-all;" label="취업동아리 참여일수를 입력해 주세요." sticky="true" multiline="true" position="is-right" :active="false">
                                                    <div class="btn_select_wrp_item employment_item">
                                                        취업동아리 참여기간
                                                        <button class="btn_question_org" style="margin-left:49px;" v-on:click="helpInfo($event)" v-on:mouseleave="helpInfo($event)"></button>
                                                    </div>
                                                </vue-custom-tooltip>
                                                <div class="select_sty" style="width: 195px;margin-left: 3px;">
                                                    <input title="취업동아리 참여기간" type="text" placeholder="" style="width: 100%" v-model="jobclubdate" :maxlength="3" @keypress="isOnlyNumber($event)"></input>
                                                </div>
                                            </div>
                                            <div v-show="currentTab==0" style="display: flex;">
                                                <vue-custom-tooltip style="cursor:arrow;word-break: keep-all;" label="취업프로그램 참여일수를 입력해 주세요." sticky="true" multiline="true" position="is-right" :active="false">
                                                    <div class="btn_select_wrp_item employment_item">
                                                        취업프로그램 참여일수
                                                        <button class="btn_question_org" style="margin-left:2px;" v-on:click="helpInfo($event)" v-on:mouseleave="helpInfo($event)"></button>
                                                    </div>
                                                </vue-custom-tooltip>
                                                <div class="select_sty" style="width: 195px;margin-left: 3px;">
                                                    <input title="취업프로그램 참여일수" type="text" placeholder="" style="width: 100%" v-model="jobprogramdate" :maxlength="2" @keypress="isOnlyNumber($event)"></input>
                                                </div>
                                            </div>
                                            <div v-show="currentTab==0">
                                                <button type="button" class="employment_item" style="">취업프로그램 참여횟수</button>
                                                <div class="select_sty" style="width: 195px;">
                                                    <input title="취업프로그램 참여횟수" type="text" placeholder="" style="width: 100%" v-model="jobprogramcnt" :maxlength="2" @keypress="isOnlyNumber($event)"></input>
                                                </div>
                                            </div>
                                            <div v-show="currentTab==0" style="display: flex;">
                                                <vue-custom-tooltip style="cursor:arrow;word-break: keep-all;" label="캡스톤디자인 수상 횟수를 입력해 주세요." sticky="true" multiline="true" position="is-right" :active="false">
                                                    <div class="btn_select_wrp_item employment_item">
                                                        캡스톤디자인수상
                                                        <button class="btn_question_org" style="margin-left:49px;" v-on:click="helpInfo($event)" v-on:mouseleave="helpInfo($event)"></button>
                                                    </div>
                                                </vue-custom-tooltip>
                                                <div class="select_sty" style="width: 195px;margin-left: 3px;">
                                                    <input title="캡스톤디자인수상" type="text" placeholder="" style="width: 100%" v-model="capstone" :maxlength="2" @keypress="isOnlyNumber($event)"></input>
                                                </div>
                                            </div>
                                            <div v-show="currentTab==0" style="display: flex;">
                                                <vue-custom-tooltip style="cursor:arrow;word-break: keep-all;" label="100점 만점으로 환산 된 TOEIC 점수를 입력해 주세요." sticky="true" size="is-medium"  multiline="true" position="is-right" :active="false">
                                                    <div class="btn_select_wrp_item employment_item">
                                                        영어
                                                        <button class="btn_question_org" style="margin-left:51px;" v-on:click="helpInfo($event)" v-on:mouseleave="helpInfo($event)"></button>
                                                    </div>
                                                </vue-custom-tooltip>
                                                <div class="select_sty" style="width: 195px;margin-left: 3px;">
                                                    <input title="영어" type="text" placeholder="" style="width: 100%" v-model="langen" :maxlength="2" @keypress="isNumber($event)"></input>
                                                </div>
                                            </div>
                                            <div v-show="currentTab==0" style="display: flex;">
                                                <vue-custom-tooltip style="cursor:arrow;word-break: keep-all;" label="100점 만점으로 환산 된 TOEIC SPEAKING 점수를 입력해 주세요." sticky="true" size="is-medium"  multiline="true" position="is-right" :active="false">
                                                    <div class="btn_select_wrp_item employment_item">
                                                        영어말하기
                                                        <button class="btn_question_org" style="margin-left:33px;" v-on:click="helpInfo($event)" v-on:mouseleave="helpInfo($event)"></button>
                                                    </div>
                                                </vue-custom-tooltip>
                                                <div class="select_sty" style="width: 195px;margin-left: 3px;">
                                                    <input title="영어말하기" type="text" placeholder="" style="width: 100%" v-model="langenspeak" :maxlength="2" @keypress="isNumber($event)"></input>
                                                </div>
                                            </div>
                                            <div v-show="currentTab==0" style="display: flex;">
                                                <vue-custom-tooltip style="cursor:arrow;word-break: keep-all;" label="100점 만점으로 환산 된 중국어 점수를 입력해 주세요." sticky="true" size="is-medium"   multiline="true" position="is-right" :active="false">
                                                    <div class="btn_select_wrp_item employment_item">
                                                        중국어
                                                        <button class="btn_question_org" style="margin-left:44px;" v-on:click="helpInfo($event)" v-on:mouseleave="helpInfo($event)"></button>
                                                    </div>
                                                </vue-custom-tooltip>
                                                <div class="select_sty" style="width: 195px;margin-left: 3px;">
                                                    <input title="중국어" type="text" placeholder="" style="width: 100%" v-model="langcn" :maxlength="2" @keypress="isNumber($event)"></input>
                                                </div>
                                            </div>
                                            <div v-show="currentTab==0" style="display: flex;">
                                                <vue-custom-tooltip style="cursor:arrow;word-break: keep-all;" label="100점 만점으로 환산 된 일본어 점수를 입력해 주세요." sticky="true" size="is-medium"  multiline="true" position="is-right" :active="false">
                                                    <div class="btn_select_wrp_item employment_item">
                                                        일본어
                                                        <button class="btn_question_org" style="margin-left:45px;" v-on:click="helpInfo($event)" v-on:mouseleave="helpInfo($event)"></button>
                                                    </div>
                                                </vue-custom-tooltip>
                                                <div class="select_sty" style="width: 195px;margin-left: 3px;">
                                                    <input title="일본어" type="text" placeholder="" style="width: 100%" v-model="langjp" :maxlength="2" @keypress="isNumber($event)"></input>
                                                </div>
                                            </div>
                                            <div v-show="currentTab==0" style="display: flex;">
                                                <vue-custom-tooltip style="cursor:arrow;word-break: keep-all;" label="100점 만점으로 환산 된 한국어 점수를 입력해 주세요." sticky="true" size="is-medium"  multiline="true" position="is-right" :active="false">
                                                    <div class="btn_select_wrp_item employment_item">
                                                        한국어
                                                        <button class="btn_question_org" style="margin-left:45px;" v-on:click="helpInfo($event)" v-on:mouseleave="helpInfo($event)"></button>
                                                    </div>
                                                </vue-custom-tooltip>
                                                <div class="select_sty" style="width: 195px;margin-left: 3px;">
                                                    <input title="한국어" type="text" placeholder="" style="width: 100%" v-model="langko" :maxlength="2" @keypress="isNumber($event)"></input>
                                                </div>
                                            </div>
                                            <div v-show="currentTab==1" style="display: flex;">
                                                <vue-custom-tooltip style="cursor:arrow;word-break: keep-all;" label="백분위로 환산한 복수전공 점수를 입력해 주세요." sticky="true" size="is-medium"  multiline="true" position="is-right" :active="false">
                                                    <div class="btn_select_wrp_item employment_item">
                                                        복수전공
                                                        <button class="btn_question_org" style="margin-left:39px;" v-on:click="helpInfo($event)" v-on:mouseleave="helpInfo($event)"></button>
                                                    </div>
                                                </vue-custom-tooltip>
                                                <div class="select_sty" style="width: 195px;margin-left: 3px;">
                                                    <input title="복수전공" type="text" placeholder="" style="width: 100%" v-model="doublemajor" :maxlength="2" @keypress="isOnlyNumber($event)"></input>
                                                </div>
                                            </div>
                                            <div v-show="currentTab==1" style="display: flex;">
                                                <vue-custom-tooltip style="cursor:arrow;word-break: keep-all;" label="백분위로 환산한 부전공 점수를 입력해 주세요." sticky="true" size="is-medium"  multiline="true" position="is-right" :active="false">
                                                    <div class="btn_select_wrp_item employment_item">
                                                        부전공
                                                        <button class="btn_question_org" style="margin-left:44px;" v-on:click="helpInfo($event)" v-on:mouseleave="helpInfo($event)"></button>
                                                    </div>
                                                </vue-custom-tooltip>
                                                <div class="select_sty" style="width: 195px;margin-left: 3px;">
                                                    <input title="부전공" type="text" placeholder="" style="width: 100%" v-model="minor" :maxlength="2" @keypress="isOnlyNumber($event)"></input>
                                                </div>
                                            </div>
                                            <div v-show="currentTab==1 || currentTab==2" style="display: flex;">
                                                <vue-custom-tooltip style="cursor:arrow;word-break: keep-all;" label="백분위로 환산한 전공성적 점수를 입력해 주세요." sticky="true" size="is-medium"  multiline="true" position="is-right" :active="false">
                                                    <div class="btn_select_wrp_item employment_item">
                                                        전공성적
                                                        <button class="btn_question_org" style="margin-left:39px;" v-on:click="helpInfo($event)" v-on:mouseleave="helpInfo($event)"></button>
                                                    </div>
                                                </vue-custom-tooltip>
                                                <div class="select_sty" style="width: 195px;margin-left: 3px;">
                                                    <input title="전공성적" type="text" placeholder="" style="width: 100%" v-model="majorscore" :maxlength="6" @keypress="isNumber($event)"></input>
                                                </div>
                                            </div>
                                            <div v-show="currentTab==1 || currentTab==2" style="display: flex;">
                                                <vue-custom-tooltip style="cursor:arrow;word-break: keep-all;" label="백분위로 환산한 교양성적 점수를 입력해 주세요." sticky="true" size="is-medium"  multiline="true" position="is-right" :active="false">
                                                    <div class="btn_select_wrp_item employment_item">
                                                        교양성적
                                                        <button class="btn_question_org" style="margin-left:39px;" v-on:click="helpInfo($event)" v-on:mouseleave="helpInfo($event)"></button>
                                                    </div>
                                                </vue-custom-tooltip>
                                                <div class="select_sty" style="width: 195px;margin-left: 3px;">
                                                    <input title="교양성적" type="text" placeholder="" style="width: 100%" v-model="minorscore" :maxlength="6" @keypress="isNumber($event)"></input>
                                                </div>
                                            </div>
                                            <div v-show="currentTab==1" style="display: flex;">
                                                <vue-custom-tooltip style="cursor:arrow;word-break: keep-all;" label="현장실습 참여 횟수를 입력해 주세요." sticky="true" multiline="true" position="is-right" :active="false">
                                                    <div class="btn_select_wrp_item employment_item">
                                                        현장실습
                                                        <button class="btn_question_org" style="margin-left:39px;" v-on:click="helpInfo($event)" v-on:mouseleave="helpInfo($event)"></button>
                                                    </div>
                                                </vue-custom-tooltip>
                                                <div class="select_sty" style="width: 195px;margin-left: 3px;">
                                                    <input title="현장실습" type="text" placeholder="" style="width: 100%" v-model="field" :maxlength="2" @keypress="isOnlyNumber($event)"></input>
                                                </div>
                                            </div>
                                            <div v-show="currentTab==1" style="display: flex;">
                                                <vue-custom-tooltip style="cursor:arrow;word-break: keep-all;" label="취업동아리 참여횟수를 입력해 주세요." sticky="true" multiline="true" position="is-right" :active="false">
                                                    <div class="btn_select_wrp_item employment_item">
                                                        동아리
                                                        <button class="btn_question_org" style="margin-left:45px;" v-on:click="helpInfo($event)" v-on:mouseleave="helpInfo($event)"></button>
                                                    </div>
                                                </vue-custom-tooltip>
                                                <div class="select_sty" style="width: 195px;margin-left: 3px;">
                                                    <input title="동아리" type="text" placeholder="" style="width: 100%" v-model="club" :maxlength="2" @keypress="isOnlyNumber($event)"></input>
                                                </div>
                                            </div>
                                            <div v-show="currentTab==1 || currentTab==2" style="display: flex;">
                                                <vue-custom-tooltip style="cursor:arrow;word-break: keep-all;" label="백분위로 환산한 1학년 성적 점수를 입력해 주세요." sticky="true" size="is-medium"  multiline="true" position="is-right" :active="false">
                                                    <div class="btn_select_wrp_item employment_item">
                                                        1학년 성적
                                                        <button class="btn_question_org" style="margin-left:34px;" v-on:click="helpInfo($event)" v-on:mouseleave="helpInfo($event)"></button>
                                                    </div>
                                                </vue-custom-tooltip>
                                                <div class="select_sty" style="width: 195px;margin-left: 3px;">
                                                    <input title="1학년 성적" type="text" placeholder="" style="width: 100%" v-model="gradescore1" :maxlength="6" @keypress="isNumber($event)"></input>
                                                </div>
                                            </div>
                                            <div v-show="currentTab==1 || currentTab==2" style="display: flex;">
                                                <vue-custom-tooltip style="cursor:arrow;word-break: keep-all;" label="백분위로 환산한 2학년 성적 점수를 입력해 주세요." sticky="true" size="is-medium"  multiline="true" position="is-right" :active="false">
                                                    <div class="btn_select_wrp_item employment_item">
                                                        2학년 성적
                                                        <button class="btn_question_org" style="margin-left:34px;" v-on:click="helpInfo($event)" v-on:mouseleave="helpInfo($event)"></button>
                                                    </div>
                                                </vue-custom-tooltip>
                                                <div class="select_sty" style="width: 195px;margin-left: 3px;">
                                                    <input title="2학년 성적" type="text" placeholder="" style="width: 100%" v-model="gradescore2" :maxlength="6" @keypress="isNumber($event)"></input>
                                                </div>
                                            </div>
                                            <div v-show="currentTab==1" style="display: flex;">
                                                <vue-custom-tooltip style="cursor:arrow;word-break: keep-all;" label="백분위로 환산한 3학년 성적 점수를 입력해 주세요." sticky="true" size="is-medium"  multiline="true" position="is-right" :active="false">
                                                    <div class="btn_select_wrp_item employment_item">
                                                        3학년 성적
                                                        <button class="btn_question_org" style="margin-left:34px;" v-on:click="helpInfo($event)" v-on:mouseleave="helpInfo($event)"></button>
                                                    </div>
                                                </vue-custom-tooltip>
                                                <div class="select_sty" style="width: 195px;margin-left: 3px;">
                                                    <input title="3학년 성적" type="text" placeholder="" style="width: 100%" v-model="gradescore3" :maxlength="6" @keypress="isNumber($event)"></input>
                                                </div>
                                            </div>
                                            <div v-show="currentTab==1" style="display: flex;">
                                                <vue-custom-tooltip style="cursor:arrow;word-break: keep-all;" label="백분위로 환산한 4학년 성적 점수를 입력해 주세요." sticky="true" size="is-medium"  multiline="true" position="is-right" :active="false">
                                                    <div class="btn_select_wrp_item employment_item">
                                                        4학년 성적
                                                        <button class="btn_question_org" style="margin-left:34px;" v-on:click="helpInfo($event)" v-on:mouseleave="helpInfo($event)"></button>
                                                    </div>
                                                </vue-custom-tooltip>
                                                <div class="select_sty" style="width: 195px;margin-left: 3px;">
                                                    <input title="4학년 성적" type="text" placeholder="" style="width: 100%" v-model="gradescore4" :maxlength="6" @keypress="isNumber($event)"></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="" style="width:100%;">
                    <div class="company_select_submit">
                        <div class="info_txt" style="padding: 30px 0 0;">
                            영향도 보기는 과거 취업 현황을 기반으로 제공되는 <strong>분석 서비스</strong>입니다.
                            실제 취업 결과와는 다를 수 있으니 <strong>참고용</strong>으로만 사용해 주시기 바랍니다
                        </div>
                        <div class="btn_bx">
                            <button type="button" class="btn_analysis" v-on:click="handleSearchSubmit" v-show="!isFetching">영향도 보기</button>
                            <button type="button" class="btn_analysis buttonload" v-show="isFetching">
                                <i class="fa fa-refresh fa-spin"></i>조회 중
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </article>

        <div v-show="isResponse" style="display: none" id="wrap_container">
            <article class="modules_wrp paper">
                <h2 v-bind:class="{ view: wrap_tab_toggle.impact }">
                    <button type="button" v-on:click="handleWrapTabToggle('impact')">
                        변수영향력 <i class="arrow"></i>
                    </button>
                </h2>
                <div class="modules_bx" v-show="wrap_tab_toggle.impact">
                    <div class="result_wrp" style="display: flex;flex-direction: column;">
                        <div>
                            <h3 style="padding-bottom: 0px;">
                                <div style="width: 31%; float: left;">
                                    변수영향력
                                </div>
                                <div class="select_sty" style="width: 195px;" v-show="isSalaryType">
                                    <select class="selectOpt" @change="handleInfClassType" v-model="classTypeByAll">
                                        <option :key="i" :value="salaryType.value"
                                            v-for="(salaryType, i) in salaryTypes"
                                            v-bind:title="salaryType.name">
                                            {{ salaryType.name }}
                                        </option>
                                    </select>
                                    <i></i>
                                </div>
                                <div class="select_sty" style="width: 195px;" v-show="isComType">
                                    <select class="selectOpt" @change="handleInfComType" v-model="classTypeByAll">
                                        <option :key="i" :value="comType.value"
                                            v-for="(comType, i) in comTypes"
                                            v-bind:title="comType.name">
                                            {{ comType.name }}
                                        </option>
                                    </select>
                                    <i></i>
                                </div>
                            </h3>
                        </div>
                        <div class="result_bx">
                            <div class="result_area" id="scatter_chart" style="height: 650px;"></div>
                            <div class="result_area" id="bar_chart" style="height: 650px;"></div>
                        </div>
                    </div>
                </div>
            </article>
            <article class="modules_wrp paper">
                <h2 v-bind:class="{ view: wrap_tab_toggle.importance }">
                    <button type="button" v-on:click="handleWrapTabToggle('importance')">
                        변수중요도 <i class="arrow"></i>
                    </button>
                </h2>
                <div class="modules_bx" v-show="wrap_tab_toggle.importance">
                    <div class="result_wrp">
                        <h3 style="margin-bottom: 10px;">
                            <div style="width: 50%; float: left;">
                                변수중요도
                            </div>
                        </h3>
                        <div class="result_bx">
                            <div class="result_area" id="bar_color_chart" style="height: 550px;"></div>
                            <div class="result_area" id="bar_color_chart2" style="height: 550px;"></div>
                        </div>
                    </div>
                </div>
            </article>
            <article class="modules_wrp paper">
                <h2 v-bind:class="{ view: wrap_tab_toggle.program }">
                    <button type="button" v-show="currentTab==0" v-on:click="handleWrapTabToggle('program')">
                        취업프로그램 <i class="arrow"></i>
                    </button>
                    <button type="button" v-show="currentTab==1 || currentTab==2" v-on:click="handleWrapTabToggle('program')">
                        이수과목 <i class="arrow"></i>
                    </button>
                </h2>
                <div class="modules_bx" v-show="wrap_tab_toggle.program">
                    <div class="result_wrp">
                        <div style="width: 50%; float: left;" v-show="currentTab==0" >
                            <h3 style="margin-bottom: 10px;">참여율</h3>
                        </div>
                        <div style="width: 50%; float: left;" v-show="currentTab==1 || currentTab==2" >
                            <h3 style="margin-bottom: 10px;">학점</h3>
                        </div>
                        <div class="select_sty" style="width: 195px;float: right;">
                            <select v-show="currentTab==0" class="selectOpt" @change="handleDept">
                                <option key="ALL" value="ALL">전체</<option>
                                <option :key="i" :value="uniDept"
                                    v-for="(uniDept, i) in uniDeptList"
                                    v-bind:title="uniDept">
                                    {{ uniDept }}</option>
                            </select> <i></i>
                            <select v-show="currentTab==1 || currentTab==2" class="selectOpt" @change="handleDept">
                                <option :key="i" :value="uniDept"
                                    v-for="(uniDept, i) in uniDeptList"
                                    v-bind:title="uniDept">
                                    {{ uniDept }}</option>
                            </select> <i></i>
                        </div>
                        <div style="width: 100%;display: flex;">
                            <div class="" id="program_chart" style="height: 550px;width: 100%;"></div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
        <div v-show="isPersonal" style="display: none" id="wrap_container">
            <article class="modules_wrp paper">
                <h2 v-bind:class="{ view: wrap_tab_toggle.personal }">
                    <button type="button" v-on:click="handleWrapTabToggle('personal')">
                        개인별 현황 <i class="arrow"></i>
                    </button>
                </h2>
                <div class="modules_bx" v-show="wrap_tab_toggle.personal">
                    <div class="result_wrp">
                        <!--<h3 style="margin-bottom: 10px;">
                            <div style="width: 50%; float: left;">
                                개인별 정보
                            </div>
                        </h3>-->
                        <div class="">
                            <div class="" id="columnrange_chart" style="height: 550px;"></div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    </section>
</div>
<script type="text/javascript">
    run_waitMe($("#module0"), 1, "bounce");
</script>
<jsp:include page="footer.jsp" />
