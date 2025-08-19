<%-- Created by IntelliJ IDEA. User: coresight2 Date: 2021-10-04 Time: 오후 3:31
To change this template use File | Settings | File Templates. --%>
<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<% 
	String userid = request.getParameter("USERID") == null ? "" : request.getParameter("USERID"); 
	String usertype = request.getParameter("USERGRPTYPE") == null ? "" : request.getParameter("USERGRPTYPE");
	String schcd = request.getParameter("SCHCD") == null ? "ALL" : request.getParameter("SCHCD");
	String orgcd = request.getParameter("ORGCD") == null ? "ALL" : request.getParameter("ORGCD");
	userid = userid + "_" + usertype;
%>
<jsp:include page="header.jsp" />
<script>
var userid = "<%=userid%>";
</script>
<script src="js/views/status.js?v=1111"></script>
<script type="text/javascript" src="js/views/common.js?v=1111"></script>
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
      onClose: function (el) {},
    });
  }
</script>
<!-- Import tooltip component -->
<script type="text/javascript" src="https://unpkg.com/@adamdehaven/vue-custom-tooltip"></script>
<script type="text/javascript" src="js/excel-export/xlsx.core.min.js"></script>
<script type="text/javascript" src="js/excel-export/test.js"></script>
<script type="text/javascript" src="js/excel-export/Blob.js"></script>
<script type="text/javascript" src="js/excel-export/FileSaver.js"></script>
<style>
@page {
	size: A4;
	margin: 10px 10px 10px 10px;
}

@media print {
	html, body {
		width: 210mm;
		height: 297mm;
		background: #fff;
	}
	.paper {
		margin: 20px 0px 0px 0px;;
		border: initial;
		border-radius: initial;
		width: 99%;
		min-height: initial;
		box-shadow: initial;
		background: initial;
		page-break-after: auto;
	}
	.no-print, .no-print * { 
		display: none !important; 
	}
}
/* Add a right margin to each icon */
.fa {
	margin-left: -12px;
	margin-right: 8px;
	vertical-align: baseline;
}
</style>

<div class="body_contents_wrp" id="app">
	<div class="visual_wrp"></div>

	<section class="contents_wrp paper">
		<div class="tab_wrp no-print">
			<button type="button" class="on">기업 취업 현황</button>
			<button type="button" onclick="location.href = 'prediction.jsp?SCHCD=<%=schcd%>&ORGCD=<%=orgcd%>&USERID=<%=userid%>'">
				진로 예측</button>
		</div>
		<article class="modules_wrp paper" id="module0">
			<div style="padding:10px 20px 15px 20px"class="modules_bx">
				<div class="company_select_bx">
					<div style="width:10%" class="company_area">
						<h2>연도선택</h2>
						<div class="company_bx">
							<div class="select_sty">
								<select class="selectOpt" v-model="selectedYear" @change="handleYearChange">
									<option :key="i" :value="year.value" v-for="(year, i) in years"
										v-bind:title="year.text">{{
										year.text }}</option>
								</select> <i></i>
							</div>
						</div>
					</div>
					<div style="width:45%; border:1px solid #d5dde8;padding-left: 8px;border-radius: 20px;"  class="company_area">
						<h2>기업조건 선택</h2>
						<div class="company_bx">
							<vue-custom-tooltip :label="selectedCompanyTypeText"
								:active="selectedCompanyTypeText != null">
							<div class="select_sty">
								<select class="selectOpt" v-model="selectedCompanyType"
									@change="handleYearAndCompany">
									<option v-bind:value="null_value">기업 유형</option>
									<option :key="i" :value="companyType.value"
										v-for="(companyType, i) in companyTypes"
										v-bind:title="companyType.text">
										{{ companyType.text }}</option>
								</select> <i></i>
							</div>
							</vue-custom-tooltip>
							<vue-custom-tooltip :label="selectedCompanySizeText"
								:active="selectedCompanySizeText != null">
							<div class="select_sty">
								<select class="selectOpt" v-model="selectedCompanySize"
									@change="handleYearAndCompany">
									<option v-bind:value="null_value">산업 분류</option>
									<option :key="i" :value="companySize.value"
										v-for="(companySize, i) in companySizes"
										v-bind:title="companySize.text">
										{{ companySize.text }}</option>
								</select> <i></i>
							</div>
							</vue-custom-tooltip>
							<div class="monthly">
								<strong style="padding-left: 3px;" class="small">월급여</strong>
								<div class="paycheck_bx">
									<input type="text" v-model="hopeSalary.start"
										@input="hopeSalaryStartChange" @keypress="isNumber($event)" />
									<span>만원</span>
								</div>
								<span class="jum">~</span>
								<div class="paycheck_bx">
									<input type="text" v-model="hopeSalary.end"
										@keypress="isNumber($event)" /> <span>만원</span>
								</div>
							</div>
						</div>
					</div>
					<div style="border:1px solid #d5dde8;padding-left: 11px;border-radius: 20px;" class="company_area">
						<h2>회사명 선택</h2>
						<div class="company_bx">
							<div class="select_sty company_name">
								<div class="company_search_bx" v-if="selectedCompany == null">
									<input type="text" id="search" v-model="companySearch"
										placeholder="회사명" v-on:keyup.enter="companySearchOnSubmit" />
									<button type="submit" class="icon"
										:class="{ reset: selectedCompany != null }"
										v-on:click="companySearchOnSubmit"></button>
								</div>
								<vue-custom-tooltip :label="companySearch"
									:active="selectedCompany != null">
								<div class="company_search_bx" v-show="selectedCompany != null">
									<input type="text" placeholder="회사명" readonly="readonly"
										v-bind:value="companySearch" />
									<button type="submit" class="icon reset"
										v-on:click="companySearchInit"></button>
								</div>
								</vue-custom-tooltip>
								<ul class="company_list_select scrollCustom"
									:class="{ on: isCompanyResultOpen && this.companySearchResults.length > 0 }">
									<li :key="i" :value="companySearchResult.value"
										v-for="(companySearchResult, i) in companySearchResults">
										<input type="radio" v-bind:id="companySearchResult.value"
										v-on:change="handleSelectCompany(companySearchResult)" />
										<label v-bind:for="companySearchResult.value"><span></span>{{
											companySearchResult.text }}</label>
									</li>
								</ul>
								<ul class="company_list_select scrollCustom on"
									v-show="isCompanyResultOpen && this.companySearchResults.length === 0">
									<li v-on:click="isCompanyResultOpen = false"><label><span></span>조회
											되지 않았습니다.</label></li>
								</ul>
							</div>
							<div class="monthly">
									<strong class="small">월급여</strong>
									<div class="paycheck_bx">
										<input type="text" v-model="hopeSalary_comp.start"
											@input="hopeSalaryCompStartChange" @keypress="isNumber($event)" />
										<span>만원</span>
									</div>
									<span class="jum">~</span>
									<div class="paycheck_bx">
										<input type="text" v-model="hopeSalary_comp.end"
											@keypress="isNumber($event)" /> <span>만원</span>
									</div>
							</div>
						 </div>
				    </div>
				</div>
				<div class="info_txt">
					<strong>[대상 연도]</strong>를 선택한 후, <strong>[기업조건]</strong>또는  <strong>[회사명]</strong> 을 입력 후 검색해 주세요.
				</div>
				<div class="btn_submit_wrp">
					<button type="button"  style="width: 150px" class="search"
						v-on:click="handleSearchSubmit" v-show="!isFetching" >
						검색</button>
					<button type="button" class="search buttonload"
						style="width: 150px" v-show="isFetching">
						<i class="fa fa-refresh fa-spin"></i>검색 중
					</button>
					<button type="button" v-on:click="handlePrint" style="width: 150px">결과 출력</button>
					<button type="button" v-on:click="handleExport" style="width: 150px">결과 저장</button>
				</div>
			</div>
		</article>
		<script type="text/javascript">
      		run_waitMe($("#module0"), 1, "bounce");
    	</script>
		<div v-show="isResponse" style="display: none" id="wrap_container">
			<article class="modules_wrp paper" v-show="isCompany_list">
				<h2 v-bind:class="{ view: wrap_tab_toggle.company }">
					<button type="button" v-on:click="handleWrapTabToggle('company')">
						조건에 해당하는 취업 기업 목록 <i class="arrow"></i>
					</button>
				</h2>
				<div class="modules_bx state">
					<div class="result_header_bx">
						<div style="width:50%; float:left; text-align:center;"><span style="color:#677ad4;" class="info_txt">[ TOP5 ]</span></div>
						<div style="width:50%; float:right; text-align:center;"><span style="color:#677ad4;" class="info_txt">[ 전체 ]</span></div>
					</div>
					<div class="result_wrp">
						<div class="result_bx">
							<div class="result_area" id="company"></div>
							<div class="academic_area">
								<div class="hot_list_area">
									<ol style="display: block"
										v-show="company_list.length > 0">
										<li v-for="(com, index) in company_list"
											v-bind:class="{ hot: index < 5 }">
											<span class="num">{{ index + 1 }}</span> <span
											class="tx_wrap"> <span class="loca"></span> <span
												class="tit">{{ com.name }}</span> <span class="per">{{
													com.count }}</span>
										</li>
									</ol>
								</div>
							</div>
						</div>
					</div>
				</div>
			</article>
			<article class="modules_wrp paper" v-show="isCompany_info">
				<h2 v-bind:class="{ view: wrap_tab_toggle.company }">
					<button type="button" v-on:click="handleWrapTabToggle('company')">
						희망 기업현황(※ 출처: ㈜이크레더블) <i class="arrow"></i>
					</button>
				</h2>
				<div class="modules_bx" v-show="wrap_tab_toggle.company">
					<div class="h_company_wrp">
						<h3>
							희망 기업 <strong>[{{ company_info.COMNM }}]</strong>
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
						</dl>
					</div>
					<div class="h_company_chart_wrp">
						<h3>최근 3년간의 기업 변화</h3>
						<div class="h_company_chart_bx">
							<div class="h_company_chart">
								<h3>종업원</h3>
								<div class="h_chart" id="employee_chart" style="height: 260px"></div>
							</div>
							<div class="h_company_chart">
								<h3>입사자/퇴사자</h3>
								<div class="h_chart" id="employee_multi_chart" style="height: 270px"></div>
							</div>
							<div class="h_company_chart">
								<h3>동종업계 급여비교</h3>
								<div class="h_chart" id="salary_compare_chart" style="height: 260px"></div>
							</div>
						</div>
					</div>
				</div>
			</article>
			<article class="modules_wrp paper analysis_average_success">
				<h2 v-bind:class="{ view: wrap_tab_toggle.job }">
					<button type="button" v-on:click="handleWrapTabToggle('job')">
						취업현황 요약 <i class="arrow"></i>
					</button>
				</h2>
				<div class="modules_bx" v-show="wrap_tab_toggle.job">
					<div class="academic_wrp">
						<div style="width: 48.5%;margin-right: 1%;">
							<div style="margin-bottom:10px" class="range-slider no-print">
				    			<div style="width:50%; float: left;">
				    				<span style="color:#677ad4;" class="info_txt"><strong>100%</strong></span>
				    			</div>
				    			<div style="width:50%; text-align: center; float: right;">
				    				<span style="color:#677ad4;" class="info_txt"><strong>0%</strong></span>
				    			</div>
				    		</div>
							<div class="range-slider no-print">
								<input class="range-slider__range" type="range" value="0" min="0"
									max="99" v-model="slider_value" />
									<!-- range 값에 따라 전체텍스트가 0~100 값으로 변경 -->
								<span class="range-slider__value">{{ slider_text }}</span><i class="per"></i>
							</div>
						</div>
						<div style="width: 48.5%;margin-right: 1%;">
							<span class="range-slider__total">[&nbsp;대상자 수&nbsp;:&nbsp;{{ resultCount.toLocaleString() }}&nbsp;명&nbsp;]</span>
						</div>
					</div>
					<div class="average_bx" v-show="isResponse" style="display: none">
						<div class="average_area">
							<ul class="average_list">
								<li>
									<div class="item">
										<strong class="tit"> 학점 <span class="sub"> <!-- {{ avarageAnalysis.gradescore_percent }}% 보유 -->
										</span>
										</strong> <span class="score"><em>{{
												avarageAnalysis.gradescore_avg }}</em>/100</span>
									</div>
								</li>
								<li>
									<div class="item">
										<strong class="tit"> 토익({{
											avarageAnalysis.toeic_percent }}% 보유) </strong> <span class="score"><em>{{
												avarageAnalysis.toeic_avg }}</em>점</span>
									</div>
								</li>

								<li>
									<div class="item">
										<strong class="tit"> 자격증({{
											avarageAnalysis.license_percent }}% 보유) </strong> <span class="score"><em>{{
												avarageAnalysis.license_avg }}</em>개</span>
									</div>
								</li>
							</ul>
						</div>
						<div class="average_area">
							<ul class="average_list etc">
								<li>
									<div class="item">
										<strong class="tit"><span class="sub">편입</span></strong> <span
											class="score"><em>{{
												avarageAnalysis.transfer_percent }} %</em></span>
									</div>
								</li>
								<li>
									<div class="item">
										<strong class="tit"><span
											class="sub">교직과정이수 </span></strong> <span class="score"><em>{{
												avarageAnalysis.teach_percent }} %</em></span>
									</div>
								</li>
								<li>
									<div class="item">
										<strong class="tit"><span
											class="sub">현장실습</span></strong> <span class="score"><em>{{
												avarageAnalysis.internship_percent }} %</em></span>
									</div>
								</li>
								<li>
									<div class="item">
										<strong class="tit"><span
											class="sub">해외연수</span></strong> <span class="score"><em>{{
												avarageAnalysis.oversea_percent }} %</em></span>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</article>
			<article class="modules_wrp paper">
				<div>
					<h2 v-bind:class="{ view: wrap_tab_toggle.university }">
						<button type="button"
							v-on:click="handleWrapTabToggle('university')">
							최종학력 <i class="arrow"></i>
						</button>
						<span style="font-size:12px;color:red">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* 본 자료는 재학 및 졸업생의 취업 진로지도를 위한 자료입니다. 목적 외(홍보 등) 활용 시 서비스 제한, 현장 점검 등의 불이익을 받으실 수 있습니다.</span>
					</h2>
				</div>
				<div class="modules_bx state" v-show="wrap_tab_toggle.university">
					<div class="academic_wrp paper">
						<div class="academic_bx">
							<h3>설립</h3>
							<div class="academic_area" id="fund"></div>
						</div>
						<div class="academic_bx">
							<h3>학제</h3>
							<div class="academic_area" id="kind"></div>
						</div>
					</div>
					<!--출신학교-->
					<div class="result_wrp">
						<h3>출신학교</h3>
						<div class="result_header_bx">
							<div style="width:50%; float:left; text-align:center;"><span style="color:#677ad4;" class="info_txt">[ TOP3 ]</span></div>
							<div style="width:50%; float:right; text-align:center;"><span style="color:#677ad4;" class="info_txt">[ 전체 ]</span></div>
						</div>
						<div class="result_bx">
							<div class="result_area" id="origin"></div>
							<div class="academic_area">
								<div class="hot_list_area">
									<div class="school_list_tab">
										<ul>
											<li v-bind:class="{ on: selectedOriginTabValue == 'all' }">
												<a v-on:click.prevent="selectedOriginTabValue='all'"
												style="cursor: pointer"><span>전체</span></a>
											</li>
											<li
												v-bind:class="{ on: selectedOriginTabValue == 'associate' }">
												<a v-on:click.prevent="selectedOriginTabValue='associate'"
												style="cursor: pointer"><span>전문학사</span></a>
											</li>
											<li
												v-bind:class="{ on: selectedOriginTabValue == 'bachelor' }">
												<a v-on:click.prevent="selectedOriginTabValue='bachelor'"
												style="cursor: pointer"><span>학사</span></a>
											</li>
											<li v-bind:class="{ on: selectedOriginTabValue == 'master' }">
												<a v-on:click.prevent="selectedOriginTabValue='master'"
												style="cursor: pointer"><span>석사</span></a>
											</li>
											<li v-bind:class="{ on: selectedOriginTabValue == 'doctor' }">
												<a v-on:click.prevent="selectedOriginTabValue='doctor'"
												style="cursor: pointer"><span>박사</span></a>
											</li>
										</ul>
									</div>
									<ol style="display: block"
										v-show="university_origin_tab_list.length > 0">
										<li v-for="(origin, index) in university_origin_tab_list"
											v-bind:class="{ hot: index < 3 }">
											<span class="num">{{ index + 1 }}</span> <span
											class="tx_wrap"> <span class="loca"></span> <span
												class="tit">{{ origin.text }}</span> <span class="per">{{
													origin.value }}</span>
										</span>
										</li>
									</ol>
									<ol style="" v-show="university_origin_tab_list.length == 0">
										<li>
											<div
												style="height: 260px; vertical-align: baseline; line-height: 180px; text-align: center;">
												데이터가 존재하지 않습니다.</div>
										</li>
									</ol>
								</div>
							</div>
						</div>
					</div>
					<!--END 출신학교-->
					<!-- 출신학교 소재지 -->
					<div class="result_wrp">
						<h3>출신학교 소재지</h3>
						<div class="result_header_bx">
							<div style="width:50%; float:left; text-align:center;"><span style="color:#677ad4;" class="info_txt">[ TOP3 ]</span></div>
							<div style="width:50%; float:right; text-align:center;"><span style="color:#677ad4;" class="info_txt">[ 전체 ]</span></div>
						</div>
						<div class="result_bx">
							<div class="result_area" id="uniarea"></div>
							<div class="academic_area">
								<div class="hot_list_area">
									<div class="school_list_tab">
										<ul>
											<li v-bind:class="{ on: selectedAreaTabValue == 'all' }">
												<a v-on:click.prevent="selectedAreaTabValue='all'"
												style="cursor: pointer"><span>전체</span></a>
											</li>
											<li
												v-bind:class="{ on: selectedAreaTabValue == 'associate' }">
												<a v-on:click.prevent="selectedAreaTabValue='associate'"
												style="cursor: pointer"><span>전문학사</span></a>
											</li>
											<li
												v-bind:class="{ on: selectedAreaTabValue == 'bachelor' }">
												<a v-on:click.prevent="selectedAreaTabValue='bachelor'"
												style="cursor: pointer"><span>학사</span></a>
											</li>
											<li v-bind:class="{ on: selectedAreaTabValue == 'master' }">
												<a v-on:click.prevent="selectedAreaTabValue='master'"
												style="cursor: pointer"><span>석사</span></a>
											</li>
											<li v-bind:class="{ on: selectedAreaTabValue == 'doctor' }">
												<a v-on:click.prevent="selectedAreaTabValue='doctor'"
												style="cursor: pointer"><span>박사</span></a>
											</li>
										</ul>
									</div>
									<ol style="display: block"
										v-show="university_area_tab_list.length > 0">
										<li v-for="(uniarea, index) in university_area_tab_list"
											v-bind:class="{ hot: index < 3 }">
											<span class="num">{{ index + 1 }}</span> <span
											class="tx_wrap"> <span class="loca"></span> <span
												class="tit">{{ uniarea.text }}</span> <span class="per">{{
													uniarea.value }}</span>
										</span>
										</li>
									</ol>
									<ol style="" v-show="university_area_tab_list.length == 0">
										<li>
											<div
												style="height: 260px; vertical-align: baseline; line-height: 180px; text-align: center;">
												데이터가 존재하지 않습니다.</div>
										</li>
									</ol>
								</div>
							</div>
						</div>
					</div>
					<!-- END 출신학교 소재지 -->
				</div>
			</article>			
			<article class="modules_wrp paper">
				<h2 v-bind:class="{ view: wrap_tab_toggle.major }">
					<button type="button"
						v-on:click="handleWrapTabToggle('major')">
						전공 <i class="arrow"></i>
					</button>
				</h2>
				<div class="modules_bx state">
					<!--전공-->
					<div class="result_wrp">
						<h3>전공</h3>
						<div class="result_header_bx">
							<div style="width:50%; float:left; text-align:center;"><span style="color:#677ad4;" class="info_txt">[ TOP3 ]</span></div>
							<div style="width:50%; float:right; text-align:center;"><span style="color:#677ad4;" class="info_txt">[ 전체 ]</span></div>
						</div>						
						<div class="result_bx">
							<div class="result_area" id="dept"></div>
							<div class="academic_area">
								<div class="hot_list_area">
									<div class="school_list_tab">
										<ul>
											<li v-bind:class="{ on: selectedDeptTabValue == 'all' }">
												<a v-on:click.prevent="selectedDeptTabValue='all'"
												style="cursor: pointer"><span>전체</span></a>
											</li>
											<li
												v-bind:class="{ on: selectedDeptTabValue == 'associate' }">
												<a v-on:click.prevent="selectedDeptTabValue='associate'"
												style="cursor: pointer"><span>전문학사</span></a>
											</li>
											<li v-bind:class="{ on: selectedDeptTabValue == 'bachelor' }">
												<a v-on:click.prevent="selectedDeptTabValue='bachelor'"
												style="cursor: pointer"><span>학사</span></a>
											</li>
											<li v-bind:class="{ on: selectedDeptTabValue == 'master' }">
												<a v-on:click.prevent="selectedDeptTabValue='master'"
												style="cursor: pointer"><span>석사</span></a>
											</li>
											<li v-bind:class="{ on: selectedDeptTabValue == 'doctor' }">
												<a v-on:click.prevent="selectedDeptTabValue='doctor'"
												style="cursor: pointer"><span>박사</span></a>
											</li>
										</ul>
									</div>
									<ol style="" v-show="university_dept_tab_list.length > 0">
										<li v-for="(dept, index) in university_dept_tab_list"
											v-bind:class="{ hot: index < 3 }">
											<span class="num">{{ index + 1 }}</span> <span
											class="tx_wrap"> <span class="loca"></span> <span
												class="tit">{{ dept.text }}</span> <span class="per">{{
													dept.value }}</span>
										</span>
										</li>
									</ol>
									<ol style="" v-show="university_dept_tab_list.length == 0">
										<li>
											<div
												style="height: 260px; vertical-align: baseline; line-height: 180px; text-align: center;">
												데이터가 존재하지 않습니다.</div>
										</li>
									</ol>
								</div>
							</div>
						</div>
					</div>
					<!--END 전공-->
					<!--전공계열-->
					<div class="result_wrp">
						<h3>전공계열</h3>
						<div class="result_header_bx">
							<div style="width:50%; float:left; text-align:center;"><span style="color:#677ad4;" class="info_txt">[ TOP3 ]</span></div>
							<div style="width:50%; float:right; text-align:center;"><span style="color:#677ad4;" class="info_txt">[ 전체 ]</span></div>
						</div>						
						<div class="result_bx">
							<div class="result_area" id="deptcol"></div>
							<div class="academic_area">
								<div class="hot_list_area">
									<div class="school_list_tab">
										<ul>
											<li v-bind:class="{ on: selectedDeptcolTabValue == 'all' }">
												<a v-on:click.prevent="selectedDeptcolTabValue='all'"
												style="cursor: pointer"><span>전체</span></a>
											</li>
											<li
												v-bind:class="{ on: selectedDeptcolTabValue == 'associate' }">
												<a v-on:click.prevent="selectedDeptcolTabValue='associate'"
												style="cursor: pointer"><span>전문학사</span></a>
											</li>
											<li
												v-bind:class="{ on: selectedDeptcolTabValue == 'bachelor' }">
												<a v-on:click.prevent="selectedDeptcolTabValue='bachelor'"
												style="cursor: pointer"><span>학사</span></a>
											</li>
											<li
												v-bind:class="{ on: selectedDeptcolTabValue == 'master' }">
												<a v-on:click.prevent="selectedDeptcolTabValue='master'"
												style="cursor: pointer"><span>석사</span></a>
											</li>
											<li
												v-bind:class="{ on: selectedDeptcolTabValue == 'doctor' }">
												<a v-on:click.prevent="selectedDeptcolTabValue='doctor'"
												style="cursor: pointer"><span>박사</span></a>
											</li>
										</ul>
									</div>
									<ol style="" v-show="university_deptcol_tab_list.length > 0">
										<li v-for="(deptcol, index) in university_deptcol_tab_list"
											v-bind:class="{ hot: index < 3 }">
											<span class="num">{{ index + 1 }}</span> <span
											class="tx_wrap"> <span class="loca"></span> <span
												class="tit">{{ deptcol.text }}</span> <span class="per">{{
													deptcol.value }}</span>
										</span>
										</li>
									</ol>
									<ol style="" v-show="university_deptcol_tab_list.length == 0">
										<li>
											<div
												style="height: 260px; vertical-align: baseline; line-height: 180px; text-align: center;">
												데이터가 존재하지 않습니다.</div>
										</li>
									</ol>
								</div>
							</div>
						</div>
					</div>
				</div>
			</article>
			<article class="modules_wrp paper spec_wrp">
				<!-- h2 에 view 클래스로  modules_bx state 보이고 감추기 제어 view 클래스 toggle 될 수 있도록-->
				<h2 v-bind:class="{ view: wrap_tab_toggle.license }">
					<button type="button" v-on:click="handleWrapTabToggle('license')">
						자격 정보 <i class="arrow"></i>
					</button>
				</h2>
				<div class="modules_bx state">
					<div class="spec_bx">
						<h3 class="average_tit">
							TOEIC <span class="tit_point">평균 <strong
								class="tit_color">{{ toeic_avarage }} 점</strong> {{ toeic_rate
								}}% 보유
							</span>
						</h3>
						<div class="academic_area" id="toeic_chart" style="height: 260px"></div>
					</div>
					<div class="spec_bx">
						<h3 class="average_tit">
							대학 학점 <span class="tit_point">평균 <strong
								class="tit_color">{{
									avarageAnalysis.gradescore_avg }}점</strong></span>
						</h3>
						<div class="academic_area" style="height: 260px" id="grade_chart"></div>
					</div>
					<div class="result_wrp" v-if="isPublicLicense">
						<h3>
							자격증 종류(국가기술/국가전문)</span>
						</h3>
					</div>
					<div class="result_header_bx" v-if="isPublicLicense">
							<div style="width:50%; float:left; text-align:center;"><span style="color:#677ad4;" class="info_txt">[ TOP3 ]</span></div>
							<div style="width:50%; float:right; text-align:center;"><span style="color:#677ad4;" class="info_txt">[ 전체 ]</span></div>
					</div>
					<div class="result_bx" v-if="isPublicLicense">
						<div class="result_area" id="licenseChart"></div>
						<div class="academic_area">
							<div class="hot_list_area">
								<ol class="scrollCustom" v-show="license_list.length > 0">
									<li v-for="(license, index) in license_list"
										v-bind:class="{ hot: index < 3 }"><span
										class="num">{{ index + 1 }}</span> <span class="tx_wrap">
											<span class="loca"></span> <span class="tit">{{
												license.text }}</span> <span class="per">{{ license.value
												}}</span>
									</span></li>
								</ol>
							</div>
						</div>
					</div>
					<div class="result_wrp" v-if="isPrivateLicense">
						<h3>
							자격증 종류(민간공인/민간등록)</span>
						</h3>
					</div>
					<div class="result_header_bx" v-if="isPrivateLicense">
							<div style="width:50%; float:left; text-align:center;"><span style="color:#677ad4;" class="info_txt">[ TOP3 ]</span></div>
							<div style="width:50%; float:right; text-align:center;"><span style="color:#677ad4;" class="info_txt">[ 전체 ]</span></div>
					</div>
					<div class="result_bx" v-if="isPrivateLicense">
						<div class="result_area" id="privatelicenseChart"></div>
						<div class="academic_area">
							<div class="hot_list_area">
								<ol class="scrollCustom" v-show="privatelicense_list.length > 0">
									<li v-for="(license, index) in privatelicense_list"
										v-bind:class="{ hot: index < 3 }"><span
										class="num">{{ index + 1 }}</span> <span class="tx_wrap">
											<span class="loca"></span> <span class="tit">{{
												license.text }}</span> <span class="per">{{ license.value
												}}</span>
									</span></li>
								</ol>
							</div>
						</div>
					</div>					
				</div>
			</article>
			<article class="modules_wrp paper open">
				<!-- h2 에 view 클래스로  modules_bx state 보이고 감추기 제어 view 클래스 toggle 될 수 있도록-->
				<h2 v-bind:class="{ view: wrap_tab_toggle.intern }">
					<button type="button" v-on:click="handleWrapTabToggle('intern')">
						특성 정보 <i class="arrow"></i>
					</button>
				</h2>
				<div class="modules_bx state">
					<div class="ative_wrp">
						<div class="ative_bx">
							<h3 class="average_tit">해외연수여부</h3>
							<div class="academic_area" id="overseaChart"
								style="height: 260px"></div>
						</div>
						<div class="ative_bx">
							<h3 class="average_tit">현장실습여부</h3>
							<div class="academic_area" id="internChart" style="height: 260px"></div>
						</div>
						<div class="ative_bx">
							<h3 class="average_tit">편입여부</h3>
							<div class="academic_area" id="transferChart"
								style="height: 260px"></div>
						</div>
						<div class="ative_bx">
							<h3 class="average_tit">교직과정이수여부</h3>
							<div class="academic_area" id="teachChart" style="height: 260px"></div>
						</div>
					</div>
				</div>
			</article>
		</div>
	</section>
</div>
<jsp:include page="footer.jsp" />

