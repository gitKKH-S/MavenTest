(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("fp05m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("16px/normal \"SpoqaHanSans-Regular\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,850);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_survInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_survList", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSEQ_TXT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chgSchool", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"256\"/><Column id=\"SURVPROSTATUSNM\" type=\"STRING\" size=\"256\"/><Column id=\"SURVPROSTATUSCD\" type=\"STRING\" size=\"256\"/><Column id=\"CHGCOMYN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_regResult", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"ORGNM\" type=\"DATETIME\" size=\"17\"/><Column id=\"DEPTCD\" type=\"DATETIME\" size=\"17\"/><Column id=\"DEPTNM\" type=\"DATETIME\" size=\"17\"/><Column id=\"COLCD\" type=\"STRING\" size=\"32\"/><Column id=\"COLNM\" type=\"STRING\" size=\"32\"/><Column id=\"STUDENTNO\" type=\"STRING\" size=\"32\"/><Column id=\"NAME\" type=\"STRING\" size=\"32\"/><Column id=\"DNCD\" type=\"STRING\" size=\"256\"/><Column id=\"DNNM\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHYEAR\" type=\"STRING\" size=\"32\"/><Column id=\"SEXCD\" type=\"STRING\" size=\"256\"/><Column id=\"EXCHANGEYN\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMain", this);
            obj._setContents("<ColumnInfo><Column id=\"STUDENTNO\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"STUDENTSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"WORKDTHM\" type=\"DATETIME\" size=\"17\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"ERRDESC\" type=\"STRING\" size=\"32\"/><Column id=\"UNIQUEKEY\" type=\"STRING\" size=\"32\"/><Column id=\"ERRKINDNM\" type=\"STRING\" size=\"32\"/><Column id=\"ERRCD\" type=\"STRING\" size=\"256\"/><Column id=\"COLNM\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"32\"/><Column id=\"MODIFIERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"MODDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"ERRKIND\" type=\"STRING\" size=\"32\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSummary", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","842",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","20",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","820",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","820",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Div("stepArea00_00_00_00","30","20","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_cssclass("stepArea");
            this.Div.addChild(obj.name, obj);

            obj = new Static("fp01m00","0","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("조사현황");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            obj.set_font("normal 20px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.stepArea00_00_00_00.addChild(obj.name, obj);

            obj = new Static("fp02m00","342","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("환경설정");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            obj.set_font("normal 20px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.stepArea00_00_00_00.addChild(obj.name, obj);

            obj = new Static("fp03m00","171","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("연계결과");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            obj.set_font("normal 20px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.stepArea00_00_00_00.addChild(obj.name, obj);

            obj = new Static("fp04m00","513","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00_00_00.form);
            obj.set_taborder("3");
            obj.set_text("정보등록");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            obj.set_font("normal 20px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.stepArea00_00_00_00.addChild(obj.name, obj);

            obj = new Static("fp05m00","1026","0","172","40",null,null,null,null,null,null,this.Div.form.stepArea00_00_00_00.form);
            obj.set_taborder("6");
            obj.set_text("결과조회");
            obj.set_cssclass("step01 on02 last");
            obj.set_cursor("pointer");
            obj.set_font("normal 20px/normal \"SpoqaHanSans-Bold\"");
            this.Div.form.stepArea00_00_00_00.addChild(obj.name, obj);

            obj = new Static("fp06m00","684","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("결과집계");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            obj.set_font("normal 20px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.stepArea00_00_00_00.addChild(obj.name, obj);

            obj = new Static("fp07m00","855","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00_00_00.form);
            obj.set_taborder("5");
            obj.set_text("결과제출");
            obj.set_cssclass("step01 last");
            obj.set_cursor("pointer");
            obj.set_font("normal 20px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.stepArea00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01","329","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea00_00_00_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","159","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea00_00_00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","500","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea00_00_00_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","1013","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea00_00_00_00.form);
            obj.set_taborder("13");
            obj.set_cssclass("ico_step on02");
            this.Div.form.stepArea00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01","842","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea00_00_00_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","671","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea00_00_00_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea00_00_00_00.addChild(obj.name, obj);

            obj = new Div("sub_research02","30","stepArea00_00_00_00:20","1200","95",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_cssclass("sub_research02");
            this.Div.addChild(obj.name, obj);

            obj = new Static("reser_st02","30","10","120","30",null,null,null,null,null,null,this.Div.form.sub_research02.form);
            obj.set_taborder("0");
            obj.set_text("조사 기준");
            obj.set_cssclass("reser_st02");
            obj.set_font("16px/normal \"SpoqaHanSans-Bold\"");
            this.Div.form.sub_research02.addChild(obj.name, obj);

            obj = new Static("reser_obj01","290","10","120","30",null,null,null,null,null,null,this.Div.form.sub_research02.form);
            obj.set_taborder("1");
            obj.set_text("조사 대상");
            obj.set_cssclass("reser_obj02");
            obj.set_visible("true");
            obj.set_font("16px/normal \"SpoqaHanSans-Bold\"");
            this.Div.form.sub_research02.addChild(obj.name, obj);

            obj = new Static("reser_date_result","reser_obj01:10","10","584","30",null,null,null,null,null,null,this.Div.form.sub_research02.form);
            obj.set_taborder("2");
            obj.set_text("oo.2월, oo.08월 신편입");
            obj.set_cssclass("reser_date_result");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\"");
            obj.set_visible("true");
            this.Div.form.sub_research02.addChild(obj.name, obj);

            obj = new Static("reser_date02","30","45","120","30",null,null,null,null,null,null,this.Div.form.sub_research02.form);
            obj.set_taborder("3");
            obj.set_text("조사 기간");
            obj.set_cssclass("reser_date02");
            obj.set_font("16px/normal \"SpoqaHanSans-Bold\"");
            this.Div.form.sub_research02.addChild(obj.name, obj);

            obj = new Static("reser_obj_result","reser_date02:10","45","606","30",null,null,null,null,null,null,this.Div.form.sub_research02.form);
            obj.set_taborder("4");
            obj.set_text("ooo 7.13 ~ 2oo.7.23. (oo년 고등교육기관 신편입생수 조사)");
            obj.set_cssclass("reser_obj_result");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\"");
            this.Div.form.sub_research02.addChild(obj.name, obj);

            obj = new Static("reser_st_result","reser_st02:10","10","120","30",null,null,null,null,null,null,this.Div.form.sub_research02.form);
            obj.set_taborder("5");
            obj.set_text("oo.12.31");
            obj.set_cssclass("reser_st_result");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\"");
            this.Div.form.sub_research02.addChild(obj.name, obj);

            obj = new Div("sub_search","30","sub_research02:20","1200","110",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_search","1060","40","100","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.set_cssclass("btn_sty01 btn_styLarge");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00","30","10","62","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("5");
            obj.set_text("단과대학");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("sel_colcd","Static00_01_01_00_00:10","10","210","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("0");
            obj.set_accessibilitylabel("단과대학");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00_00","370","10","38","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("6");
            obj.set_text("학과");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("set_dept","Static00_01_01_00_00_00:10","10","210","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("1");
            obj.set_accessibilitylabel("학과");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00_00_00","30","60","62","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("7");
            obj.set_text("학번");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("sel_stu_no","Static00_01_01_00_00_00_00:10","60","210","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("2");
            obj.set_accessibilitylabel("학번");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00_00_00_00","370","60","38","23",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("8");
            obj.set_text("이름");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("sel_stu_nm","Static00_01_01_00_00_00_00_00:10","60","210","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("3");
            obj.set_accessibilitylabel("이름");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Div("sub_state","30","330","1200","72",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static02","0","16","140","38",null,null,null,null,null,null,this.Div.form.sub_state.form);
            obj.set_taborder("0");
            obj.set_text("취업통계진행상태 :");
            this.Div.form.sub_state.addChild(obj.name, obj);

            obj = new Static("state_result","145","18","456","32",null,null,null,null,null,null,this.Div.form.sub_state.form);
            obj.set_taborder("1");
            obj.set_text("상태");
            obj.set_cssclass("state_result");
            this.Div.form.sub_state.addChild(obj.name, obj);

            obj = new Button("btn_save","1099","20","100","30",null,null,null,null,null,null,this.Div.form.sub_state.form);
            obj.set_taborder("2");
            obj.set_text("파일저장");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_cssclass("btn_sty02");
            this.Div.form.sub_state.addChild(obj.name, obj);

            obj = new Grid("Grid_rel","30","390","1200","421",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_binddataset("ds_regResult");
            obj.set_autofittype("none");
            obj.set_cssclass("grid_sty03");
            obj.set_autosizingtype("none");
            obj.set_visible("true");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"107\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"120\"/><Column size=\"145\"/><Column size=\"132\"/><Column size=\"120\"/><Column size=\"137\"/><Column size=\"180\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"학교명\"/><Cell col=\"1\" text=\"본분교명\"/><Cell col=\"2\" text=\"단과대학명\"/><Cell col=\"3\" text=\"학과명\"/><Cell col=\"4\" text=\"주야간구분\"/><Cell col=\"5\" text=\"학번\"/><Cell col=\"6\" text=\"성명\"/><Cell col=\"7\" text=\"생년월일\"/><Cell col=\"8\" text=\"성별\"/><Cell col=\"9\" text=\"외국인유학생인여부\"/><Cell col=\"10\" text=\"입학구분\"/><Cell col=\"11\" text=\"입학학기\"/><Cell col=\"12\" text=\"입학연월일\"/><Cell col=\"13\" text=\"입학당시학위과정\"/><Cell col=\"14\" text=\"학적상태\"/><Cell col=\"15\" text=\"학적변동발생일\"/></Band><Band id=\"body\"><Cell text=\"bind:SCHNM\" wordWrap=\"char\"/><Cell col=\"1\" text=\"bind:ORGNM\" wordWrap=\"char\"/><Cell col=\"2\" text=\"bind:COLNM\" wordWrap=\"char\"/><Cell col=\"3\" text=\"bind:DEPTNM\" wordWrap=\"char\"/><Cell col=\"4\" text=\"bind:DNNM\" wordWrap=\"char\"/><Cell col=\"5\" text=\"bind:STUDENTNO\" wordWrap=\"char\"/><Cell col=\"6\" text=\"bind:NAME\" wordWrap=\"char\"/><Cell col=\"7\" text=\"bind:BIRTHYEAR\" wordWrap=\"char\"/><Cell col=\"8\" text=\"bind:SEXCD\" wordWrap=\"char\"/><Cell col=\"9\" text=\"bind:EXCHANGEYN\" wordWrap=\"char\"/><Cell col=\"10\" text=\"bind:ENTRANCETYPE_STR\" wordWrap=\"char\"/><Cell col=\"11\" text=\"bind:ENTRANCEYEAR\" wordWrap=\"char\"/><Cell col=\"12\" text=\"bind:ENTRANCEDATE\" wordWrap=\"char\"/><Cell col=\"13\" text=\"bind:DEGREECD_STR\" wordWrap=\"char\"/><Cell col=\"14\" text=\"bind:REGISTERTYPE_STR\" wordWrap=\"char\"/><Cell col=\"15\" text=\"bind:REGISTERDATE\" wordWrap=\"char\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,850,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("fp05m00.xfdl","CM::common.xjs");
        this.addIncludeScript("fp05m00.xfdl","CM::utl_script.xjs");
        this.registerScript("fp05m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;
        this.executeIncludeScript("CM::utl_script.xjs"); /*include "CM::utl_script.xjs"*/;

        //기본변수세팅
        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "";
        this.fv_SCHCD =  "";
        this.fv_ORGCD =  "";
        this.fv_SURVOBJ =  "";
        this.fv_SURVSTRTDT =  "";
        this.fv_SURVENDDT =  "";
        this.fv_SURVNM =  "";
        this.fv_SURVPROSTATUSCD = "";

        this.fv_USERID = "";
        this.fv_USERGRPTYPE =  "";
        this.fv_STATUSCD =  "";
        this.fv_SURVTERM =  "";
        this.fv_CHANGEYN = "";
        this.fv_RCEPTCN =  "";
        this.fv_ERRCNT =  "";
        this.fv_MENUNM = "신입생정보>결과조회";
        var objApp 		= nexacro.getApplication();

        this.fnCallback = function(serviceID, errCD, errMSG){


        	if(errCD < 0){
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{

        		if(serviceID == "getChargeSchoolList"){
        			this.Div.form.sub_state.form.state_result.set_text(this.ds_chgSchool.getColumn(0,"STATUSNM"));

        			// 결과조회
        			this.selectFpRegResult();
        		}
        		if(serviceID == "selectFpRegResult"){

        			//this.Div.form.sub_state.form.state_result.set_text( this.ds_chgSchool.getColumn(this.Div.form.sub_search.form.sel_school.index, "SURVPROSTATUSNM")  );
        			// 현재 진행 상태 불러오기
        			if(this.ds_regResult.getRowCount() < 1){
        				alert("조회된 자료가 없습니다.");
        			}
        			this.getFpSchStatus();
        		}
        		if(serviceID == "getFpSchStatus"){
        			// 상태 표시
        			var resultTxt = objApp.gds_rtn_result.getColumn(0, "RESULTTXT");

        			if(this.fv_SURVTERM != "Y") resultTxt = resultTxt + " (조사기간 아님)" ;
        			this.Div.form.sub_state.form.state_result.set_text( resultTxt );
        		}

         	}
        }

        this.fp05m00_onload = function(obj,e)
        {

        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='FP'",0);

        	this.fv_USERID     = objApp.gds_login_info.getColumn(idx, "USERID") ;
        	this.fv_SURVKINDCD = objApp.gds_login_info.getColumn(idx, "SURVKINDCD");
        	this.fv_CHANGEYN   = objApp.gds_login_info.getColumn(0, "CHANGEYN");
        	this.fv_USERGRPTYPE = objApp.gds_login_info.getColumn(idx, "USERGRPTYPE");

        	this.fv_SCHCD      = objApp.gds_param.getColumn(0, "SCHCD");
        	this.fv_ORGCD      = objApp.gds_param.getColumn(0, "ORGCD");

        	this.lfn_divSurvSet();									// 기본정보 설정
        	// 학교정보 가져오기
        	this.getChargeSchoolList();
        	if(this.fv_CHANGEYN =="Y"){
        		this.utlf_enableBtn(this.Div,false);
        		this.Div.form.sub_state.form.btn_save.set_enable(true);
        	}
        };

        // 검색용 학교정보 가져 옴
        this.getChargeSchoolList = function(){

        	var strParam = "";
        	strParam += "tmp="				+ "a" 					+ "ª";
        	strParam += "STATUSparamCD="	+ "0082" 				+ "ª";  // 신입생
        	strParam += "SURVSEQ="			+  this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="		+  this.fv_SURVKINDCD 	+ "ª";
        	strParam += "SCHCD="			+  this.fv_SCHCD 		+ "ª";
        	strParam += "ORGCD="			+  this.fv_ORGCD 		+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.gfnTransaction("getChargeSchoolList",
        						"/swiss/fp/baserel/getChargeSchoolList.do",
        						"dsSearch=dsSearch",
        						"ds_chgSchool=dsResult",
        						"",
        						"fnCallback",
        						false);
        };


        // 결과조회
        this.selectFpRegResult = function(){
        	var index  =  0;

        	var strParam = "";
        	strParam += "tmp="		        + "a" 		            + "ª";
        	strParam += "SURVSEQ="		    + this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="   	+ this.fv_SURVKINDCD	+ "ª";
        	strParam += "SCHCD="			+ this.fv_SCHCD			+ "ª";
        	strParam += "ORGCD="			+ this.fv_ORGCD			+ "ª";
        	strParam += "COLNM="		    + this.Div.form.sub_search.form.sel_colcd.value		    + "ª";
        	strParam += "DEPTNM="		    + this.Div.form.sub_search.form.set_dept.value		    + "ª";
        	strParam += "STUDENTNO="		+ this.Div.form.sub_search.form.sel_stu_no.value		+ "ª";
        	strParam += "STUDENTNAME="		+ this.Div.form.sub_search.form.sel_stu_nm.value		+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "검색", strParam);  //결과조회
        	this.gfnTransaction("selectFpRegResult",
        						"/swiss/fp/insertrel/selectFpRegResult.do",
        						"dsSearch=dsSearch",
        						"ds_regResult=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        // 학교별 상태 가져오기
        this.getFpSchStatus= function()
        {
        	var strParam = "";
        	strParam += "tmp="				+ "a" 					+ "ª";
        	strParam += "SURVSEQ="			+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="		+ this.fv_SURVKINDCD	+ "ª";

        	strParam += "SCHCD="			+ this.fv_SCHCD			+ "ª";
        	strParam += "ORGCD="			+ this.fv_ORGCD			+ "ª";
        	strParam += "STATUSparamCD="	+ "0082" 				+ "ª";  // 신편입 상태 파람

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.gfnTransaction("getFpSchStatus",
        						"/swiss/fp/insertrel/getFpSchStatus.do",
        						"dsSearch=dsSearch",
        						"gds_rtn_result=dsResult",
        						"",
        						"fnCallback",
        						false);

        }

        // 엑셀다운로드
        this.btn_xls_onclick = function(obj,e)
        {
        		if(this.fv_SURVTERM !=  "Y"){
        			this.alert("선택된 학교는 조사기간이 아닙니다.");
        			return;
        		}
        	//alert(this.ds_regResult.getRowCount());
        	if(this.ds_regResult.getRowCount()==0){
        		alert("저장할 데이터가 없습니다.");
        		return;
        	}

        	this.exportObj = new ExcelExportObject();


        	this.exportObj.addEventHandler("onsuccess", this.Export00_onsuccess, this);
        	this.exportObj.set_exporttype(nexacro.ExportTypes.EXCEL2007);
        	this.exportObj.set_exportactivemode( "active" );
        	this.exportObj.set_exporturl("svcBaseUrl::XExportImport.do");
        	this.exportObj.set_exportfilename("신입생 결과조회");
        	//trace(this.exportObj.exportfilename);


        	this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div.form.Grid_rel, "Sheet1!A1", "allrecord", "allrecord", "suppress", "allstyle","none","none","both");

        	this.exportObj.set_exporteventtype("itemrecord");
        	this.exportObj.set_exportuitype("exportprogress");
        	this.exportObj.set_exportmessageprocess("%d[%d/%d]");
        	trace("exporturl== "+this.exportObj.exporturl);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "파일저장", "");  //결과조회 파일저장
        	var result = this.exportObj.exportData();
        };
        this.Export00_onsuccess = function (obj, e )
        {
        	//this.setWaitCursor(false);
        	trace(e.eventid);
        }

        this.searchEnter = function(obj,e)
        {
        	if(e.keycode == nexacro.Event.KEY_ENTER){
        		this.selectFpRegResult();
        	}
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
        	var survStrtdt = objApp.gds_param.getColumn(0, "SURVSTRTDT");
        	var survEnddt  = objApp.gds_param.getColumn(0, "SURVENDDT");
        	if(toDate >= survStrtdt && toDate <= survEnddt){
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

        	// ----------- 선택 학교 조사기간 확인
        	if(this.fv_SURVSTRTDT > toDate || this.fv_SURVENDDT < toDate){
        		this.fv_SURVTERM =  "N";
        	}else{
        		this.fv_SURVTERM =  "Y";
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fp05m00_onload,this);
            this.Div.form.stepArea00_00_00_00.form.fp01m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_00_00_00.form.fp02m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_00_00_00.form.fp03m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_00_00_00.form.fp04m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_00_00_00.form.fp05m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_00_00_00.form.fp06m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_00_00_00.form.fp07m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.sub_search.form.btn_search.addEventHandler("onclick",this.selectFpRegResult,this);
            this.Div.form.sub_search.form.sel_colcd.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.sub_search.form.set_dept.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.sub_search.form.sel_stu_no.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.sub_search.form.sel_stu_nm.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.sub_state.form.btn_save.addEventHandler("onclick",this.btn_xls_onclick,this);
        };

        this.loadIncludeScript("fp05m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
