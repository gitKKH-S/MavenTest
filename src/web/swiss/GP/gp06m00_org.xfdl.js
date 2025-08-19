(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("fp06m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("normal 700 36px/normal \"맑은 고딕\"");
            this.set_visible("true");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,790);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chgSchool", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"256\"/><Column id=\"UNIGRADECD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVPROSTATUSCD\" type=\"STRING\" size=\"256\"/><Column id=\"STATUSNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fptotal_01", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTRANCEYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"COLNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"DNNM\" type=\"STRING\" size=\"256\"/><Column id=\"FPCNT\" type=\"STRING\" size=\"256\"/><Column id=\"FPCNT_M\" type=\"STRING\" size=\"256\"/><Column id=\"FPCNT_W\" type=\"STRING\" size=\"256\"/><Column id=\"FPCNT_NEW\" type=\"STRING\" size=\"256\"/><Column id=\"FPCNT_NEW_M\" type=\"STRING\" size=\"256\"/><Column id=\"FPCNT_NEW_W\" type=\"STRING\" size=\"256\"/><Column id=\"FPCNT_MOV\" type=\"STRING\" size=\"256\"/><Column id=\"FPCNT_MOV_M\" type=\"STRING\" size=\"256\"/><Column id=\"FPCNT_MOV_W\" type=\"STRING\" size=\"256\"/><Column id=\"FPCNT_RE\" type=\"STRING\" size=\"256\"/><Column id=\"FPCNT_RE_M\" type=\"STRING\" size=\"256\"/><Column id=\"FPCNT_RE_W\" type=\"STRING\" size=\"256\"/><Column id=\"FPCNT_ST1\" type=\"STRING\" size=\"256\"/><Column id=\"FPCNT_ST1_M\" type=\"STRING\" size=\"256\"/><Column id=\"FPCNT_ST1_W\" type=\"STRING\" size=\"256\"/><Column id=\"FPCNT_ST2\" type=\"STRING\" size=\"256\"/><Column id=\"FPCNT_ST2_M\" type=\"STRING\" size=\"256\"/><Column id=\"FPCNT_ST2_W\" type=\"STRING\" size=\"256\"/><Column id=\"FPCNT_ST3\" type=\"STRING\" size=\"256\"/><Column id=\"FPCNT_ST3_M\" type=\"STRING\" size=\"256\"/><Column id=\"FPCNT_ST3_W\" type=\"STRING\" size=\"256\"/><Column id=\"FPCNT_ST4\" type=\"STRING\" size=\"256\"/><Column id=\"FPCNT_ST4_M\" type=\"STRING\" size=\"256\"/><Column id=\"FPCNT_ST4_W\" type=\"STRING\" size=\"256\"/><Column id=\"FPCNT_ST5\" type=\"STRING\" size=\"256\"/><Column id=\"FPCNT_ST5_M\" type=\"STRING\" size=\"256\"/><Column id=\"FPCNT_ST5_W\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"단과대학\" type=\"STRING\" size=\"256\"/><Column id=\"주야간구분\" type=\"STRING\" size=\"256\"/><Column id=\"계\" type=\"STRING\" size=\"256\"/><Column id=\"남자\" type=\"STRING\" size=\"256\"/><Column id=\"여자\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/><Column id=\"Column20\" type=\"STRING\" size=\"256\"/><Column id=\"Column21\" type=\"STRING\" size=\"256\"/><Column id=\"Column22\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"단과대학\">합계</Col><Col id=\"주야간구분\">주간</Col><Col id=\"계\">0</Col><Col id=\"남자\">0</Col><Col id=\"여자\">0</Col><Col id=\"Column5\">0</Col><Col id=\"Column6\">0</Col><Col id=\"Column7\">0</Col><Col id=\"Column8\">0</Col><Col id=\"Column9\">0</Col><Col id=\"Column10\">0</Col><Col id=\"Column11\">0</Col><Col id=\"Column12\">0</Col><Col id=\"Column13\">0</Col><Col id=\"Column14\">0</Col><Col id=\"Column15\">0</Col><Col id=\"Column16\">0</Col><Col id=\"Column17\">0</Col><Col id=\"Column18\">0</Col><Col id=\"Column19\">0</Col><Col id=\"Column20\">0</Col><Col id=\"Column21\">0</Col><Col id=\"Column22\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLogInSch", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"256\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSTRTDT\" type=\"STRING\" size=\"256\"/><Column id=\"SURVENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVNM\" type=\"STRING\" size=\"256\"/><Column id=\"SURVOBJ\" type=\"STRING\" size=\"256\"/><Column id=\"TODATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","784",null,null,null,null,null,null,this);
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

            obj = new Static("Static00","0","0","30","780",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","780",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_xls","1130","270","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_text("파일저장");
            obj.set_cssclass("btn_sty02");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Div("stepArea00_00_00_00_00","30","20","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_cssclass("stepArea");
            this.Div.addChild(obj.name, obj);

            obj = new Static("gp01m00","0","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("조사현황");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("gp02m00","342","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00_00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("환경설정");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("gp03m00","171","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00_00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("연계결과");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("gp04m00","513","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00_00_00_00.form);
            obj.set_taborder("3");
            obj.set_text("정보등록");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("gp05m00","1026","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00_00_00_00.form);
            obj.set_taborder("6");
            obj.set_text("결과조회");
            obj.set_cssclass("step01 last");
            obj.set_cursor("pointer");
            this.Div.form.stepArea00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("gp06m00","684","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00_00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("결과집계");
            obj.set_cssclass("step01 on01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("gp07m00","855","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00_00_00_00.form);
            obj.set_taborder("5");
            obj.set_text("결과제출");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01","329","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea00_00_00_00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","159","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea00_00_00_00_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","671","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea00_00_00_00_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("ico_step on01");
            this.Div.form.stepArea00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","500","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea00_00_00_00_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01","1013","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea00_00_00_00_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("ico_step");
            obj.set_text("");
            this.Div.form.stepArea00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","842","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea00_00_00_00_00.form);
            obj.set_taborder("12");
            obj.set_cssclass("ico_step on01");
            this.Div.form.stepArea00_00_00_00_00.addChild(obj.name, obj);

            obj = new Div("sub_research01","30","stepArea00_00_00_00_00:20","1200","95",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_cssclass("sub_research01");
            this.Div.addChild(obj.name, obj);

            obj = new Static("reser_st01","30","10","120","30",null,null,null,null,null,null,this.Div.form.sub_research01.form);
            obj.set_taborder("0");
            obj.set_text("조사 기준");
            obj.set_cssclass("reser_st01");
            obj.set_font("16px/normal \"SpoqaHanSans-Bold\"");
            this.Div.form.sub_research01.addChild(obj.name, obj);

            obj = new Static("reser_st_result","reser_st01:10","10","120","30",null,null,null,null,null,null,this.Div.form.sub_research01.form);
            obj.set_taborder("1");
            obj.set_text("oo.12.31");
            obj.set_cssclass("reser_st_result");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\"");
            this.Div.form.sub_research01.addChild(obj.name, obj);

            obj = new Static("reser_obj01","290","10","123","30",null,null,null,null,null,null,this.Div.form.sub_research01.form);
            obj.set_taborder("2");
            obj.set_text("조사 대상");
            obj.set_cssclass("reser_obj01");
            obj.set_visible("true");
            obj.set_font("16px/normal \"SpoqaHanSans-Bold\"");
            this.Div.form.sub_research01.addChild(obj.name, obj);

            obj = new Static("reser_date_result","reser_obj01:10","10","584","30",null,null,null,null,null,null,this.Div.form.sub_research01.form);
            obj.set_taborder("3");
            obj.set_text("oo.2월, 19.08월 졸업자");
            obj.set_cssclass("reser_date_result");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\"");
            obj.set_visible("true");
            this.Div.form.sub_research01.addChild(obj.name, obj);

            obj = new Static("reser_date01","30","45","120","30",null,null,null,null,null,null,this.Div.form.sub_research01.form);
            obj.set_taborder("4");
            obj.set_text("조사 기간");
            obj.set_cssclass("reser_date01");
            this.Div.form.sub_research01.addChild(obj.name, obj);

            obj = new Static("reser_obj_result","reser_date01:10","45","606","30",null,null,null,null,null,null,this.Div.form.sub_research01.form);
            obj.set_taborder("5");
            obj.set_text("oo20 7.13 ~ oo20.7.23. (2021년 고등교육기관 oo생수 조사)");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\"");
            obj.set_cssclass("reser_obj_result");
            this.Div.form.sub_research01.addChild(obj.name, obj);

            obj = new Grid("Grid","30","310","1200","460",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("8");
            obj.set_binddataset("ds_fptotal_01");
            obj.set_cssclass("grid_sty02");
            obj.set_autofittype("none");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"255\"/><Column size=\"220\"/><Column size=\"120\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\" band=\"head\"/><Row size=\"40\"/><Row size=\"40\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"학기\"/><Cell col=\"1\" rowspan=\"2\" text=\"단과대학명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"2\" rowspan=\"2\" text=\"학과명\"/><Cell col=\"3\" rowspan=\"2\" text=\"주야간구분\"/><Cell col=\"4\" colspan=\"3\" text=\"졸업생\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"7\" colspan=\"3\" text=\"외국인유학생여부\"/><Cell col=\"10\" colspan=\"3\" text=\"교직과정이수여부\"/><Cell col=\"13\" colspan=\"3\" text=\"해외연수여부\"/><Cell col=\"16\" colspan=\"3\" text=\"편입여부\"/><Cell row=\"1\" col=\"4\" text=\"계\"/><Cell row=\"1\" col=\"5\" text=\"남\"/><Cell row=\"1\" col=\"6\" text=\"여\"/><Cell row=\"1\" col=\"7\" text=\"계\"/><Cell row=\"1\" col=\"8\" text=\"남\"/><Cell row=\"1\" col=\"9\" text=\"여\"/><Cell row=\"1\" col=\"10\" text=\"계\"/><Cell row=\"1\" col=\"11\" text=\"남\"/><Cell row=\"1\" col=\"12\" text=\"여\"/><Cell row=\"1\" col=\"13\" text=\"계\"/><Cell row=\"1\" col=\"14\" text=\"남\"/><Cell row=\"1\" col=\"15\" text=\"여\"/><Cell row=\"1\" col=\"16\" text=\"계\"/><Cell row=\"1\" col=\"17\" text=\"남\"/><Cell row=\"1\" col=\"18\" text=\"여\"/></Band><Band id=\"body\"><Cell text=\"bind:COLNM\"/><Cell col=\"1\" text=\"bind:COLNM\"/><Cell col=\"2\" text=\"bind:DEPTNM\"/><Cell col=\"3\" text=\"bind:DNNM\"/><Cell col=\"4\" text=\"bind:FPCNT\"/><Cell col=\"5\" text=\"bind:FPCNT_M\"/><Cell col=\"6\" text=\"bind:FPCNT_W\"/><Cell col=\"7\" text=\"bind:FPCNT_FOR\"/><Cell col=\"8\" text=\"bind:FPCNT_FOR_M\"/><Cell col=\"9\" text=\"bind:FPCNT_FOR_W\"/><Cell col=\"10\" text=\"bind:FPCNT_TEC\"/><Cell col=\"11\" text=\"bind:FPCNT_TEC_M\"/><Cell col=\"12\" text=\"bind:FPCNT_TEC_W\"/><Cell col=\"13\" text=\"bind:FPCNT_OVE\"/><Cell col=\"14\" text=\"bind:FPCNT_OVE_M\"/><Cell col=\"15\" text=\"bind:FPCNT_OVE_W\"/><Cell col=\"16\" text=\"bind:FPCNT_TRA\"/><Cell col=\"17\" text=\"bind:FPCNT_TRA_M\"/><Cell col=\"18\" text=\"bind:FPCNT_TRA_W\"/></Band><Band id=\"summary\"><Cell colspan=\"4\" text=\"총계\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&quot;FPCNT&quot;)\"/><Cell col=\"5\" text=\"expr:dataset.getSum(&quot;FPCNT_M&quot;)\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&quot;FPCNT_W&quot;)\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&quot;FPCNT_FOR&quot;)\"/><Cell col=\"8\" text=\"expr:dataset.getSum(&quot;FPCNT_FOR_M&quot;)\"/><Cell col=\"9\" text=\"expr:dataset.getSum(&quot;FPCNT_FOR_W&quot;)\"/><Cell col=\"10\" text=\"expr:dataset.getSum(&quot;FPCNT_TEC&quot;)\"/><Cell col=\"11\" text=\"expr:dataset.getSum(&quot;FPCNT_TEC_M&quot;)\"/><Cell col=\"12\" text=\"expr:dataset.getSum(&quot;FPCNT_TEC_W&quot;)\"/><Cell col=\"13\" text=\"expr:dataset.getSum(&quot;FPCNT_OVE&quot;)\"/><Cell col=\"14\" text=\"expr:dataset.getSum(&quot;FPCNT_OVE_M&quot;)\"/><Cell col=\"15\" text=\"expr:dataset.getSum(&quot;FPCNT_OVE_W&quot;)\"/><Cell col=\"16\" text=\"expr:dataset.getSum(&quot;FPCNT_TRA&quot;)\"/><Cell col=\"17\" text=\"expr:dataset.getSum(&quot;FPCNT_TRA_M&quot;)\"/><Cell col=\"18\" text=\"expr:dataset.getSum(&quot;FPCNT_TRA_W&quot;)\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Div("sub_search","30","sub_research01:20","1200","52",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_search","1060","10","100","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("2");
            obj.set_text("검색");
            obj.set_cssclass("btn_sty01 btn_styLarge");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00_00_00","30","10","50","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("0");
            obj.set_text("학과명");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("sel_dept","Static00_01_01_00_00_00_00:10","10","210","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("1");
            obj.set_accessibilitylabel("학과명");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("errorMsg","40","sub_search:20","550",null,null,"494",null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_text("※ 등록된 자료에 오류건이 0건 존재합니다. 정보재등록 후 진행 해 주세요.");
            obj.set_cssclass("state_result");
            obj.set_font("normal 16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,790,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("gp06m00_copy0.xfdl","CM::common.xjs");
        this.addIncludeScript("gp06m00_copy0.xfdl","CM::utl_script.xjs");
        this.registerScript("gp06m00_copy0.xfdl", function() {
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
        this.fv_CHANGEYN = "";
        this.fv_MENUNM = "졸업생정보>결과집계";
        var objApp = nexacro.getApplication();

        this.fnCallback = function(serviceID, errCD, errMSG){

        	if(errCD < 0){
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceID == "selectGpTotalList"){
        			//this.gridF0.set_size();
        			this.Grid.setFormatColProperty(0,"size",0);
        		}
        		if(serviceID == "getErrCnt"){
        			// 등록 오류 개수
        			var resultVal = objApp.gds_rtn_result.getColumn(0, "RESULTVAL");
        			this.fv_ERRCNT  = resultVal;

        			if( this.fv_ERRCNT != "0"){//오류건수가 존재할시
        				this.Div.form.btn_xls.set_visible(false);
        				this.alert("등록된 자료에 오류건이 "+this.fv_ERRCNT+"건 존재합니다. 정보재등록 후 진행 해 주세요.");
        				this.Div.form.errorMsg.set_text("※ 등록된 자료에 오류건이 "+this.fv_ERRCNT+"건 존재합니다. 정보재등록 후 진행 해 주세요.")
        				this.Div.form.errorMsg.set_visible(true);
        			}
        		}
         	}
        }

        this.fp06m00_onload = function(obj,e)
        {
        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='GP'",0);

        	this.fv_USERID     = objApp.gds_login_info.getColumn(idx, "USERID") ;
        	this.fv_SURVKINDCD = objApp.gds_login_info.getColumn(idx, "SURVKINDCD");
        	this.fv_CHANGEYN   = objApp.gds_login_info.getColumn(0, "CHANGEYN");
        	this.fv_USERGRPTYPE = objApp.gds_login_info.getColumn(idx, "USERGRPTYPE");

        	this.fv_SCHCD      = objApp.gds_param.getColumn(0, "SCHCD");
        	this.fv_ORGCD      = objApp.gds_param.getColumn(0, "ORGCD");

        	this.lfn_divSurvSet();									// 기본정보 설정

        	this.selectGpTotalList();  // 검색
        	this.getErrCnt();

        	if(this.fv_CHANGEYN =="Y"){
        		this.utlf_enableBtn(this.Div,false);
        		this.Div.form.btn_xls.set_enable(true);
        	}


        };

        // 집계결과 목록 가져옴....
        this.selectGpTotalList = function(){

        	var sel_dept = this.Div.form.sub_search.form.sel_dept.value;

        	var strParam = "";
        	strParam += "tmp="				+ "a" 						+ "ª";
        	strParam += "SCHCD="			+ this.fv_SCHCD				+ "ª";
        	strParam += "ORGCD="			+ this.fv_ORGCD				+ "ª";
        	strParam += "SURVSEQ="			+ this.fv_SURVSEQ		+ "ª";
        	strParam += "SURVKINDCD="		+ this.fv_SURVKINDCD	+ "ª";
        	strParam += "sel_dept="			+ sel_dept		+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "검색", strParam);  //결과집계 조회
        	this.gfnTransaction("selectGpTotalList",
        						"/swiss/gp/insertrel/selectGpTotalList.do",
        						"dsSearch=dsSearch",
        						"ds_fptotal_01=dsResult",
        						"",
        						"fnCallback",
        						false
        						);
        };


        //  등록 오류 개수 가져오기
        this.getErrCnt = function(){
        		var strParam = "";
        		strParam += "tmp="			+ "a" 					+ "ª";
        		strParam += "SURVSEQ="		+ this.fv_SURVSEQ		+ "ª";
        		strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD	+ "ª";
        		strParam += "SCHCD="		+ this.fv_SCHCD			+ "ª";
        		strParam += "ORGCD="		+ this.fv_ORGCD			+ "ª";

        		//alert(2);
        		dsParamSetArrowBlank(this.dsSearch, strParam);
        		this.gfnTransaction("getErrCnt",
        							"/swiss/fp/insertrel/getErrCnt.do",
        							"dsSearch=dsSearch",
        							"gds_rtn_result=dsResult",
        							"",
        							"fnCallback",
        							false);
        };

        // 엑셀다운로드
        //this.lfn_excelOutputSave = function()
        this.btn_xls_onclick = function(obj,e){

        	//alert(this.ds_fpList.getRowCount());
        	if(this.ds_fptotal_01.getRowCount()==0){
        		alert("저장할 데이터가 없습니다.");
        		return;
        	}

        	this.exportObj = new ExcelExportObject();

        	this.exportObj.addEventHandler("onsuccess", this.Export00_onsuccess, this);
        	this.exportObj.set_exporttype(nexacro.ExportTypes.EXCEL2007);
        	this.exportObj.set_exportactivemode( "active" );
        	this.exportObj.set_exporturl("svcBaseUrl::XExportImport.do");
        	this.exportObj.set_exportfilename("결과집계");
        	//trace(this.exportObj.exportfilename);

        	this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div.form.Grid, "Sheet1!A1", "allrecord", "allrecord", "suppress", "allstyle","none","none","both");

        	this.exportObj.set_exporteventtype("itemrecord");
        	this.exportObj.set_exportuitype("exportprogress");
        	this.exportObj.set_exportmessageprocess("%d[%d/%d]");

        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "파일저장", "");  //결과집계 파일저장
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
        		this.selectGpTotalList();
        	}
        };


        //메뉴이동
        this.lfn_goMenu = function(obj,e)
        {
        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='GP'",0);
        	this.fv_USERGRPTYPE = objApp.gds_login_info.getColumn(idx, "USERGRPTYPE");
        	var menuid = obj.id ;

        	if("5" == this.fv_USERGRPTYPE){
        		if("gp03m00" !=menuid && "gp04m00" !=menuid
        			&& "gp05m00" !=menuid ){
        			alert("화면에 대한 권한이 없습니다.");
        			return;
        		}
        	}

        	this.fn_goPage("GP::"+menuid +".xfdl");
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
        		var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='GP'",0);

        		this.fv_SURVSEQ = objApp.gds_login_info.getColumn(idx, "SURVSEQ");
        		this.fv_SURVOBJ = objApp.gds_login_info.getColumn(idx, "SURVOBJ");
        		this.fv_SURVSTRTDT = objApp.gds_login_info.getColumn(idx, "SURVSTRTDT");
        		this.fv_SURVENDDT = objApp.gds_login_info.getColumn(idx, "SURVENDDT");
        		this.fv_SURVNM = objApp.gds_login_info.getColumn(idx, "SURVNM");
        	}

        	this.Div.form.sub_research01.form.reser_st_result.set_text(this.fv_SURVSEQ.substr(0,2)+"."+this.fv_SURVSEQ.substr(2,2)+"."+this.fv_SURVSEQ.substr(4,2)) ;
        	this.Div.form.sub_research01.form.reser_date_result.set_text(this.fv_SURVOBJ) ;
        	var survinfo = this.fv_SURVSTRTDT.substr(0,4)+"."+this.fv_SURVSTRTDT.substr(4,2)+"."+this.fv_SURVSTRTDT.substr(6,2)
        					+" ~ "+this.fv_SURVENDDT.substr(0,4)+"."+this.fv_SURVENDDT.substr(4,2)+"."+this.fv_SURVENDDT.substr(6,2)
        					+" ( "+this.fv_SURVNM+" )";
        	this.Div.form.sub_research01.form.reser_obj_result.set_text(survinfo) ;

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
            this.addEventHandler("onload",this.fp06m00_onload,this);
            this.Div.form.btn_xls.addEventHandler("onclick",this.btn_xls_onclick,this);
            this.Div.form.stepArea00_00_00_00_00.form.gp01m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_00_00_00_00.form.gp02m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_00_00_00_00.form.gp03m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_00_00_00_00.form.gp04m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_00_00_00_00.form.gp05m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_00_00_00_00.form.gp06m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_00_00_00_00.form.gp07m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.sub_search.form.btn_search.addEventHandler("onclick",this.selectGpTotalList,this);
            this.Div.form.sub_search.form.sel_dept.addEventHandler("onkeyup",this.searchEnter,this);
        };

        this.loadIncludeScript("gp06m00_copy0.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
