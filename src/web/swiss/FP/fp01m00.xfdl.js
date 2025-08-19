(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("fp01m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_school_list", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"256\"/><Column id=\"SURVPROSTATUSNM\" type=\"STRING\" size=\"256\"/><Column id=\"NUMCANCEL\" type=\"STRING\" size=\"256\"/><Column id=\"NUMEXAMDT\" type=\"STRING\" size=\"256\"/><Column id=\"INFOREGDT\" type=\"STRING\" size=\"256\"/><Column id=\"INFOSENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"INFOSENDDT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_status_list", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"256\"/><Column id=\"SURVPROSTATUSNM\" type=\"STRING\" size=\"256\"/><Column id=\"NUMSENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"NUMEXAMDT\" type=\"STRING\" size=\"256\"/><Column id=\"INFOREGDT\" type=\"STRING\" size=\"256\"/><Column id=\"INFOSENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"INFOSENDDT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","712",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","20",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","710",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","1200",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Div("stepArea01","30","20","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_cssclass("stepArea");
            this.Div.addChild(obj.name, obj);

            obj = new Static("fp01m00","0","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea01.form);
            obj.set_taborder("0");
            obj.set_text("조사현황");
            obj.set_cssclass("step01 on02");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01.addChild(obj.name, obj);

            obj = new Static("fp02m00","342","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea01.form);
            obj.set_taborder("2");
            obj.set_text("환경설정");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01.addChild(obj.name, obj);

            obj = new Static("fp03m00","171","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea01.form);
            obj.set_taborder("1");
            obj.set_text("연계결과");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01.addChild(obj.name, obj);

            obj = new Static("fp04m00","513","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea01.form);
            obj.set_taborder("3");
            obj.set_text("정보등록");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01.addChild(obj.name, obj);

            obj = new Static("fp05m00","1026","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea01.form);
            obj.set_taborder("6");
            obj.set_text("결과조회");
            obj.set_cssclass("step01 last");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01.addChild(obj.name, obj);

            obj = new Static("fp06m00","684","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea01.form);
            obj.set_taborder("4");
            obj.set_text("결과집계");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01.addChild(obj.name, obj);

            obj = new Static("fp07m00","855","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea01.form);
            obj.set_taborder("5");
            obj.set_text("결과제출");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01.addChild(obj.name, obj);

            obj = new Static("Static01","329","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01.form);
            obj.set_taborder("7");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01.addChild(obj.name, obj);

            obj = new Static("Static01_00","500","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01.form);
            obj.set_taborder("8");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","671","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01.form);
            obj.set_taborder("9");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","842","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01.form);
            obj.set_taborder("10");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","1013","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01.form);
            obj.set_taborder("11");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01.addChild(obj.name, obj);

            obj = new Static("Static01_01","159","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01.form);
            obj.set_taborder("12");
            obj.set_cssclass("ico_step on02");
            this.Div.form.stepArea01.addChild(obj.name, obj);

            obj = new Div("sub_research02","30","stepArea01:20","1200","95",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_cssclass("sub_research02");
            this.Div.addChild(obj.name, obj);

            obj = new Static("reser_st02","30","10","120","30",null,null,null,null,null,null,this.Div.form.sub_research02.form);
            obj.set_taborder("0");
            obj.set_text("조사 기준");
            obj.set_cssclass("reser_st02");
            obj.set_font("16px/normal \"SpoqaHanSans-Bold\"");
            this.Div.form.sub_research02.addChild(obj.name, obj);

            obj = new Static("reser_st_result","reser_st02:10","10","120","30",null,null,null,null,null,null,this.Div.form.sub_research02.form);
            obj.set_taborder("1");
            obj.set_text("xx.12.31");
            obj.set_cssclass("reser_st_result");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\"");
            this.Div.form.sub_research02.addChild(obj.name, obj);

            obj = new Static("reser_obj02","290","10","120","30",null,null,null,null,null,null,this.Div.form.sub_research02.form);
            obj.set_taborder("2");
            obj.set_text("조사 대상");
            obj.set_cssclass("reser_obj02");
            obj.set_visible("true");
            obj.set_font("16px/normal \"SpoqaHanSans-Bold\"");
            this.Div.form.sub_research02.addChild(obj.name, obj);

            obj = new Static("reser_date_result","reser_obj02:10","10","584","29",null,null,null,null,null,null,this.Div.form.sub_research02.form);
            obj.set_taborder("3");
            obj.set_text("oo.2월, 19.08월 졸업자");
            obj.set_cssclass("reser_date_result");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\"");
            obj.set_visible("true");
            this.Div.form.sub_research02.addChild(obj.name, obj);

            obj = new Static("reser_date02","30","45","120","30",null,null,null,null,null,null,this.Div.form.sub_research02.form);
            obj.set_taborder("4");
            obj.set_text("조사 기간");
            obj.set_cssclass("reser_date02");
            this.Div.form.sub_research02.addChild(obj.name, obj);

            obj = new Static("reser_obj_result","reser_date02:10","45","606","30",null,null,null,null,null,null,this.Div.form.sub_research02.form);
            obj.set_taborder("5");
            obj.set_text("oo20 7.13 ~ oo20.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("reser_obj_result");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\"");
            this.Div.form.sub_research02.addChild(obj.name, obj);

            obj = new Grid("gird_wrap02","30","200","1200","123",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_school_list");
            obj.set_cssclass("grid_sty03_01");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"190\"/><Column size=\"125\"/><Column size=\"210\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"학교명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"1\" rowspan=\"2\" text=\"본분교명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"2\" rowspan=\"2\" text=\"처리상태\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"3\" colspan=\"2\" text=\"연계결과 확인\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"5\" colspan=\"3\" text=\"정보등록 및 제출\" border=\"0px none,0px none,1px solid #d0e39c\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell row=\"1\" col=\"3\" text=\"제출일\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell row=\"1\" col=\"4\" text=\"KEDI반려\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell row=\"1\" col=\"5\" text=\"정보등록일\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell row=\"1\" col=\"6\" text=\"제출일\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell row=\"1\" col=\"7\" text=\"KEDI승인일\" border=\"0px none,0px none,1px solid #d0e39c\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:SCHNM\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:ORGNM\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:SURVPROSTATUSNM\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:NUMEXAMDT\" calendardateformat=\"yyyy-MM-dd HH:mm\" calendareditformat=\"yyyy-MM-dd HH:mm\"/><Cell col=\"4\" text=\"bind:NUMCANCEL\" calendardateformat=\"yyyy-MM-dd HH:mm\" calendareditformat=\"yyyy-MM-dd HH:mm\"/><Cell col=\"5\" text=\"bind:INFOREGDT\" calendardateformat=\"yyyy-MM-dd HH:mm\" calendareditformat=\"yyyy-MM-dd HH:mm\"/><Cell col=\"6\" text=\"bind:INFOSENDDT\" calendardateformat=\"yyyy-MM-dd HH:mm\" calendareditformat=\"yyyy-MM-dd HH:mm\"/><Cell col=\"7\" text=\"bind:INFOAPPRODT\" calendardateformat=\"yyyy-MM-dd HH:mm\" calendareditformat=\"yyyy-MM-dd HH:mm\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("gird_wrap","30","gird_wrap02:20","1200","340",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_status_list");
            obj.set_cssclass("grid_sty03");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"130\"/><Column size=\"220\"/><Column size=\"120\"/><Column size=\"448\"/><Column size=\"200\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"NO\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"1\" text=\"학교코드\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"2\" text=\"접수상태\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"3\" text=\"작업자\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"4\" text=\"접수내용\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"5\" text=\"작업시간\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:ROWNUM\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"1\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\" text=\"bind:SCHCD\"/><Cell col=\"2\" text=\"bind:STATUSNM\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"3\" text=\"bind:USERNM\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"4\" text=\"bind:RCEPTCN\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"5\" text=\"bind:STATUSWKDTHM\" calendardateformat=\"yyyy-MM-dd HH:mm\" calendareditformat=\"yyyy-MM-dd HH:mm\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div.form.gird_wrap","accessibilityaction","Dataset00","학교명");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div.form.gird_wrap02","accessibilityaction","Dataset00","학교명");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("fp01m00.xfdl","CM::common.xjs");
        this.addIncludeScript("fp01m00.xfdl","CM::utl_script.xjs");
        this.registerScript("fp01m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;
        this.executeIncludeScript("CM::utl_script.xjs"); /*include "CM::utl_script.xjs"*/;

        //기본변수세팅
        this.fv_USERID = "";
        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "";

        this.fv_SURVOBJ =  "";
        this.fv_SURVSTRTDT =  "";
        this.fv_SURVENDDT =  "";
        this.fv_SURVNM =  "";

        this.fv_SCHCD =  "";
        this.fv_ORGCD =  "";
        this.fv_CHANGEYN = "";

        this.fv_SURVPROSTATUSCD = "";

        this.fv_USERGRPTYPE =  "";

        this.fv_MENUNM = "신입생정보>조사현황";

        //글로벌 데이터셋을 사용하기 위한 objApp
        var objApp = nexacro.getApplication();

        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceID == "selectSchoolInfo"){
        			this.gird_wrap02_oncellclick(this.Div.form.gird_wrap02);
        		}
        		if(serviceID == "updateSchoolStatus"){

        		}
         	}
        }

        this.fp01m00_onload = function(obj,e)
        {
        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='FP'",0);

        	this.fv_USERID = objApp.gds_login_info.getColumn(idx, "USERID") ;
        	this.fv_SURVKINDCD = objApp.gds_login_info.getColumn(idx, "SURVKINDCD");
        	this.fv_SCHCD = objApp.gds_param.getColumn(0, "SCHCD");
        	this.fv_ORGCD = objApp.gds_param.getColumn(0, "ORGCD");

        	this.fv_USERGRPTYPE = objApp.gds_login_info.getColumn(idx, "USERGRPTYPE");
        	this.fv_CHANGEYN = objApp.gds_login_info.getColumn(0, "CHANGEYN");
        	//this.fv_USERSEQ = objApp.gds_login_info.getColumn(idx, "USERSEQ"); // 사용x?

        	this.lfn_divSurvSet(); //기본정보 설정

        	this.selectSchoolInfo();  //담당 학교 목록

        	if(this.fv_CHANGEYN =="Y"){
        		this.utlf_enableBtn(this.Div,false);
        	}
        };

        this.selectSchoolInfo = function(){

        	var strParam = "";
        	strParam += "tmp="				+ "a" 					+ "ª";
        	strParam += "STATUSparamCD="	+ "0082" 				+ "ª";  // 신편입
        	strParam += "SURVSEQ="			+  this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="		+  this.fv_SURVKINDCD 	+ "ª";
        	strParam += "SCHCD="			+  this.fv_SCHCD 		+ "ª";
        	strParam += "ORGCD="			+  this.fv_ORGCD 		+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "학교정보조회", strParam);  //접속기록
        	this.gfnTransaction("selectSchoolInfo",
        						"/swiss/fp/baserel/selectSchoolInfo.do",
        						"dsSearch=dsSearch",
        						"ds_school_list=dsResult",
        						"",
        						"fnCallback",
        						false);

        };


        // 그리드 셀  클릭시 이벤트
        this.gird_wrap02_oncellclick = function(obj, e)
        {

        	var strParam = "";
        	strParam += "SCHCD="		    + this.fv_SCHCD 		+ "ª";
        	strParam += "ORGCD="		    + this.fv_ORGCD 		+ "ª";
        	strParam += "SURVSEQ="		    +  this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	    +  this.fv_SURVKINDCD 	+ "ª";
        	strParam += "STATUSparamCD="	+ "0082" 			    + "ª";  // 신편입

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "학교접수정보", strParam);  //접속기록
        	this.gfnTransaction("selectFpProssStat",
        						"/swiss/fp/baserel/selectFpProssStat.do",
        						"dsSearch=dsSearch",
        						"ds_status_list=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        //메뉴이동
        this.lfn_goMenu = function(obj,e)
        {
        	var objApp 		= nexacro.getApplication();
        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='FP'",0);
        	this.fv_USERGRPTYPE = objApp.gds_login_info.getColumn(idx, "USERGRPTYPE");
        	var menuid = obj.id ;

        	if("5" == this.fv_USERGRPTYPE){
        		if("fp03m00" !=menuid && "fp04m00" !=menuid
        			&& "fp05m00" !=menuid ){
        			alert("화면에 대한 권한이 없습니다.");
        			return;
        		}
        	}

        	this.fn_goPage("FP::"+menuid +".xfdl");
        };

        this.lfn_divSurvSet = function(){
        	/*조사기준, 조사기간 설정 : 현재시간에 해당하는 설정 확인*/
        	var toDate     = objApp.gds_param.getColumn(0, "TODATE");
        	var survStrtdt = objApp.gds_param.getColumn(0, "SURVSTRTDT"); //조사시작일
        	var survEnddt  = objApp.gds_param.getColumn(0, "SURVENDDT"); //조사종료일
        	if(toDate >= survStrtdt && toDate <= survEnddt){ //  조사시작일 <= 오늘 && 오늘 <= 조사종료일
        		this.fv_SURVSEQ = objApp.gds_param.getColumn(0, "SURVSEQ");
        		this.fv_SURVOBJ = objApp.gds_param.getColumn(0, "SURVOBJ");
        		this.fv_SURVSTRTDT = objApp.gds_param.getColumn(0, "SURVSTRTDT");
        		this.fv_SURVENDDT = objApp.gds_param.getColumn(0, "SURVENDDT");
        		this.fv_SURVNM = objApp.gds_param.getColumn(0, "SURVNM");
        	}else{
        		var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='FP'",0);

        		this.fv_SURVSEQ = objApp.gds_login_info.getColumn(idx, "SURVSEQ");
        		this.fv_SURVOBJ = objApp.gds_login_info.getColumn(idx, "SURVOBJ");
        		this.fv_SURVSTRTDT = objApp.gds_login_info.getColumn(idx, "SURVSTRTDT");
        		this.fv_SURVENDDT = objApp.gds_login_info.getColumn(idx, "SURVENDDT");
        		this.fv_SURVNM = objApp.gds_login_info.getColumn(idx, "SURVNM");
        	}

        	this.Div.form.sub_research02.form.reser_st_result.set_text(this.fv_SURVSEQ.substr(0,2)+"."+this.fv_SURVSEQ.substr(2,2)+"."+this.fv_SURVSEQ.substr(4,2)) ;
        	this.Div.form.sub_research02.form.reser_date_result.set_text(this.fv_SURVOBJ) ;
        	var survinfo = this.fv_SURVSTRTDT.substr(0,4)+"."+this.fv_SURVSTRTDT.substr(4,2)+"."+this.fv_SURVSTRTDT.substr(6,2)
        					+" ~ "+this.fv_SURVENDDT.substr(0,4)+"."+this.fv_SURVENDDT.substr(4,2)+"."+this.fv_SURVENDDT.substr(6,2)
        					+" ( "+this.fv_SURVNM+" )";
        	this.Div.form.sub_research02.form.reser_obj_result.set_text(survinfo) ;
        };





        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fp01m00_onload,this);
            this.Div.form.stepArea01.form.fp01m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01.form.fp02m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01.form.fp03m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01.form.fp04m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01.form.fp05m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01.form.fp06m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01.form.fp07m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.gird_wrap02.addEventHandler("oncellclick",this.gird_wrap02_oncellclick,this);
        };

        this.loadIncludeScript("fp01m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
