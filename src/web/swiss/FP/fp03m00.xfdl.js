(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("fp03m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("15px/normal \"SpoqaHanSans-Regular\"");
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


            obj = new Dataset("ds_dayNight02", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dayNight", this);
            obj._setContents("<ColumnInfo><Column id=\"DNCD\" type=\"STRING\" size=\"256\"/><Column id=\"DNNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fpList", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"COLCDNM\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTDNNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTDNCD\" type=\"STRING\" size=\"256\"/><Column id=\"FRESHCNT\" type=\"STRING\" size=\"256\"/><Column id=\"FRESHCNTF\" type=\"STRING\" size=\"256\"/><Column id=\"FRESHCNTM\" type=\"STRING\" size=\"256\"/><Column id=\"MSTFRESHCNT\" type=\"STRING\" size=\"256\"/><Column id=\"MSTFRESHCNTF\" type=\"STRING\" size=\"256\"/><Column id=\"MSTFRESHCNTM\" type=\"STRING\" size=\"256\"/><Column id=\"DRFRESHCNT\" type=\"STRING\" size=\"256\"/><Column id=\"DRFRESHCNTF\" type=\"STRING\" size=\"256\"/><Column id=\"DRFRESHCNTM\" type=\"STRING\" size=\"256\"/><Column id=\"MDFRESHCNT\" type=\"STRING\" size=\"256\"/><Column id=\"MDFRESHCNTF\" type=\"STRING\" size=\"256\"/><Column id=\"MDFRESHCNTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_match", this);
            obj._setContents("<ColumnInfo><Column id=\"MTC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MTC_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MTC_ID\"/><Col id=\"MTC_NM\">전체</Col></Row><Row><Col id=\"MTC_ID\">Y</Col><Col id=\"MTC_NM\">일치</Col></Row><Row><Col id=\"MTC_ID\">N</Col><Col id=\"MTC_NM\">불일치</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","784",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Div("stepArea00_00","30","20","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_cssclass("stepArea");
            this.Div.addChild(obj.name, obj);

            obj = new Static("fp01m00","0","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00.form);
            obj.set_taborder("0");
            obj.set_text("조사현황");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea00_00.addChild(obj.name, obj);

            obj = new Static("fp02m00","342","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00.form);
            obj.set_taborder("2");
            obj.set_text("환경설정");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea00_00.addChild(obj.name, obj);

            obj = new Static("fp03m00","171","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00.form);
            obj.set_taborder("1");
            obj.set_text("연계결과");
            obj.set_cssclass("step01 on02");
            obj.set_cursor("pointer");
            this.Div.form.stepArea00_00.addChild(obj.name, obj);

            obj = new Static("fp04m00","513","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00.form);
            obj.set_taborder("3");
            obj.set_text("정보등록");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea00_00.addChild(obj.name, obj);

            obj = new Static("fp05m00","1026","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00.form);
            obj.set_taborder("6");
            obj.set_text("결과조회");
            obj.set_cssclass("step01 last");
            obj.set_cursor("pointer");
            this.Div.form.stepArea00_00.addChild(obj.name, obj);

            obj = new Static("fp06m00","684","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00.form);
            obj.set_taborder("4");
            obj.set_text("결과집계");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea00_00.addChild(obj.name, obj);

            obj = new Static("fp07m00","855","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00.form);
            obj.set_taborder("5");
            obj.set_text("결과제출");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea00_00.addChild(obj.name, obj);

            obj = new Static("Static01","159","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("ico_step on02");
            this.Div.form.stepArea00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","671","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea00_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","842","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea00_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","1013","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea00_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01","329","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea00_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("ico_step on02");
            this.Div.form.stepArea00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","500","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea00_00.form);
            obj.set_taborder("12");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea00_00.addChild(obj.name, obj);

            obj = new Div("sub_research02","30","stepArea00_00:20","1200","95",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_cssclass("sub_research02");
            this.Div.addChild(obj.name, obj);

            obj = new Static("reser_st01","30","10","120","30",null,null,null,null,null,null,this.Div.form.sub_research02.form);
            obj.set_taborder("0");
            obj.set_text("조사 기준");
            obj.set_cssclass("reser_st02");
            obj.set_font("16px/normal \"SpoqaHanSans-Bold\"");
            this.Div.form.sub_research02.addChild(obj.name, obj);

            obj = new Static("reser_st_result","reser_st01:10","10","120","30",null,null,null,null,null,null,this.Div.form.sub_research02.form);
            obj.set_taborder("1");
            obj.set_text("oo.12.31");
            obj.set_cssclass("reser_st_result");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\"");
            this.Div.form.sub_research02.addChild(obj.name, obj);

            obj = new Static("reser_obj01","290","10","120","30",null,null,null,null,null,null,this.Div.form.sub_research02.form);
            obj.set_taborder("2");
            obj.set_text("조사 대상");
            obj.set_cssclass("reser_obj02");
            obj.set_visible("true");
            obj.set_font("16px/normal \"SpoqaHanSans-Bold\"");
            this.Div.form.sub_research02.addChild(obj.name, obj);

            obj = new Static("reser_date_result","reser_obj01:10","10","584","30",null,null,null,null,null,null,this.Div.form.sub_research02.form);
            obj.set_taborder("3");
            obj.set_text("oo.2월, 19.08월 ooo");
            obj.set_cssclass("reser_date_result");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\"");
            obj.set_visible("true");
            this.Div.form.sub_research02.addChild(obj.name, obj);

            obj = new Static("reser_date01","30","45","120","30",null,null,null,null,null,null,this.Div.form.sub_research02.form);
            obj.set_taborder("4");
            obj.set_text("조사 기간");
            obj.set_cssclass("reser_date02");
            obj.set_font("16px/normal \"SpoqaHanSans-Bold\"");
            this.Div.form.sub_research02.addChild(obj.name, obj);

            obj = new Static("reser_obj_result","reser_date01:10","45","606","30",null,null,null,null,null,null,this.Div.form.sub_research02.form);
            obj.set_taborder("5");
            obj.set_text("oooo 7.13 ~ ooo.7.23. (oooo년 고등교육기관 oooo 조사)");
            obj.set_cssclass("reser_obj_result");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\"");
            this.Div.form.sub_research02.addChild(obj.name, obj);

            obj = new Div("sub_search","30","sub_research02:20","1200","52",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00_00_00","30","10","50","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("4");
            obj.set_text("학과명");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("sel_dept","Static00_01_01_00_00_00_00:20","10","210","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("0");
            obj.set_accessibilitylabel("학과명");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00","380","10","62","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("3");
            obj.set_text("주야구분");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("sel_dayNight","Static00_01_01_00:20","10","210","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("1");
            obj.set_codecolumn("DEPTDNCD");
            obj.set_datacolumn("DEPTDNNM");
            obj.set_innerdataset("ds_dayNight02");
            obj.set_accessibilitylabel("주야구분");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Button("btn_search","1060","10","100","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("2");
            obj.set_text("검색");
            obj.set_cssclass("btn_sty01 btn_styLarge");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","20",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("13");
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

            obj = new Div("sub_state","30","270","600","40",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static02","0","10","128","30",null,null,null,null,null,null,this.Div.form.sub_state.form);
            obj.set_taborder("0");
            obj.set_text("취업통계진행상태 :");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_state.addChild(obj.name, obj);

            obj = new Static("state_result","144","10","436","30",null,null,null,null,null,null,this.Div.form.sub_state.form);
            obj.set_taborder("1");
            obj.set_text("-");
            obj.set_cssclass("state_result");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_state.addChild(obj.name, obj);

            obj = new Grid("gird02","30","sub_state:10","1200","380",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("8");
            obj.set_binddataset("ds_fpList");
            obj.set_autofittype("col");
            obj.set_scrollbartype("auto auto");
            obj.set_cssclass("grid_sty03");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"80\"/><Column size=\"230\"/><Column size=\"0\"/><Column size=\"230\"/><Column size=\"0\"/><Column size=\"150\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"178\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\" band=\"head\"/><Row size=\"40\"/><Row size=\"40\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"no\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"1\" rowspan=\"2\" text=\"학기\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"2\" rowspan=\"2\" text=\"단과대학명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"3\" rowspan=\"2\" text=\"단과대학코드\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"4\" rowspan=\"2\" text=\"학과명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"5\" rowspan=\"2\" text=\"학과코드\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"6\" rowspan=\"2\" text=\"주야구분\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"7\" rowspan=\"2\" text=\"주야코드\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"8\" colspan=\"3\" text=\"총계\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"11\" colspan=\"3\" text=\"석사\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"14\" colspan=\"3\" text=\"박사\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"17\" colspan=\"3\" text=\"석/박사 통합\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"20\" rowspan=\"2\" text=\"제출일\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell row=\"1\" col=\"8\" text=\"계\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell row=\"1\" col=\"9\" text=\"남\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell row=\"1\" col=\"10\" text=\"여\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell row=\"1\" col=\"11\" text=\"계\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell row=\"1\" col=\"12\" text=\"남\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell row=\"1\" col=\"13\" text=\"여\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell row=\"1\" col=\"14\" text=\"계\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell row=\"1\" col=\"15\" text=\"남\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell row=\"1\" col=\"16\" text=\"여\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell row=\"1\" col=\"17\" text=\"계\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell row=\"1\" col=\"18\" text=\"남\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell row=\"1\" col=\"19\" text=\"여\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:ROWNUM\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"1\" text=\"bind:ENTERSEQ\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"2\" text=\"bind:COLCDNM\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"3\" text=\"bind:COLCD\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"4\" text=\"bind:DEPTNM\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"5\" text=\"bind:DEPTCD\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"6\" text=\"bind:DEPTDNNM\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"7\" text=\"bind:DEPTDNCD\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"8\" text=\"bind:FRESHCNT\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"9\" text=\"bind:FRESHCNTM\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"10\" text=\"bind:FRESHCNTF\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"11\" text=\"bind:MSTFRESHCNT\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"12\" text=\"bind:MSTFRESHCNTM\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"13\" text=\"bind:MSTFRESHCNTF\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"14\" text=\"bind:DRFRESHCNT\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"15\" text=\"bind:DRFRESHCNTM\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"16\" text=\"bind:DRFRESHCNTF\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"17\" text=\"bind:MDFRESHCNT\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"18\" text=\"bind:MDFRESHCNTM\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"19\" text=\"bind:MDFRESHCNTF\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"20\" text=\"bind:STATUSWKDTHM\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/></Band><Band id=\"summary\"><Cell colspan=\"7\" text=\"총계\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"7\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"8\" text=\"expr:dataset.getSum(&quot;FRESHCNT&quot;)\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"9\" text=\"expr:dataset.getSum(&quot;FRESHCNTM&quot;)\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"10\" text=\"expr:dataset.getSum(&quot;FRESHCNTF&quot;)\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"11\" text=\"expr:dataset.getSum(&quot;MSTFRESHCNT&quot;)\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"12\" text=\"expr:dataset.getSum(&quot;MSTFRESHCNTM&quot;)\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"13\" text=\"expr:dataset.getSum(&quot;MSTFRESHCNTF&quot;)\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"14\" text=\"expr:dataset.getSum(&quot;DRFRESHCNT&quot;)\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"15\" text=\"expr:dataset.getSum(&quot;DRFRESHCNTM&quot;)\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"16\" text=\"expr:dataset.getSum(&quot;DRFRESHCNTF&quot;)\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"17\" text=\"expr:dataset.getSum(&quot;MDFRESHCNT&quot;)\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"18\" text=\"expr:dataset.getSum(&quot;MDFRESHCNTM&quot;)\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"19\" text=\"expr:dataset.getSum(&quot;MDFRESHCNTF&quot;)\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"20\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("gird","30","320","1200","380",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_fpList");
            obj.set_autofittype("col");
            obj.set_scrollbartype("auto auto");
            obj.set_cssclass("grid_sty03");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"80\"/><Column size=\"230\"/><Column size=\"0\"/><Column size=\"230\"/><Column size=\"0\"/><Column size=\"230\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"178\"/></Columns><Rows><Row size=\"45\" band=\"head\"/><Row size=\"40\"/><Row size=\"40\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"no\"/><Cell col=\"1\" text=\"학기\"/><Cell col=\"2\" text=\"단과대학명\"/><Cell col=\"3\" text=\"단과대학코드\"/><Cell col=\"4\" text=\"학과명\"/><Cell col=\"5\" text=\"학과코드\"/><Cell col=\"6\" text=\"주야구분\"/><Cell col=\"7\" text=\"주야코드\"/><Cell col=\"8\" text=\"계\"/><Cell col=\"9\" text=\"남자\"/><Cell col=\"10\" text=\"여자\"/><Cell col=\"11\" text=\"제출일\"/></Band><Band id=\"body\"><Cell text=\"bind:ROWNUM\"/><Cell col=\"1\" text=\"bind:ENTERSEQ\"/><Cell col=\"2\" text=\"bind:COLCDNM\"/><Cell col=\"3\"/><Cell col=\"4\" text=\"bind:DEPTNM\"/><Cell col=\"5\"/><Cell col=\"6\" text=\"bind:DEPTDNNM\"/><Cell col=\"7\"/><Cell col=\"8\" text=\"bind:FRESHCNT\"/><Cell col=\"9\" text=\"bind:FRESHCNTM\"/><Cell col=\"10\" text=\"bind:FRESHCNTF\"/><Cell col=\"11\" text=\"bind:STATUSWKDTHM\"/></Band><Band id=\"summary\"><Cell colspan=\"7\" text=\"총계\"/><Cell col=\"7\"/><Cell col=\"8\" text=\"expr:dataset.getSum(&quot;FRESHCNT&quot;)\"/><Cell col=\"9\" text=\"expr:dataset.getSum(&quot;FRESHCNTM&quot;)\"/><Cell col=\"10\" text=\"expr:dataset.getSum(&quot;FRESHCNTF&quot;)\"/><Cell col=\"11\" border=\"0px none\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_xls",null,"280","100",null,"30","474",null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_text("파일저장(코드)");
            obj.set_cssclass("btn_sty02");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_request","480","gird:30","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_text("수정요청");
            obj.set_cssclass("btn_sty01 btn_styLarge");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("gird02_xls","70","420","1200","160",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("9");
            obj.set_binddataset("ds_fpList");
            obj.set_autofittype("none");
            obj.set_scrollbartype("auto auto");
            obj.set_cssclass("grid_sty03");
            obj.set_enable("true");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"100\"/><Column size=\"210\"/><Column size=\"123\"/><Column size=\"100\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"178\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\" band=\"head\"/><Row size=\"40\"/><Row size=\"40\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"no\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"1\" rowspan=\"2\" text=\"학기\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"2\" rowspan=\"2\" text=\"학교코드\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"3\" rowspan=\"2\" text=\"본분교코드\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"4\" rowspan=\"2\" text=\"단과대학코드\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"5\" rowspan=\"2\" text=\"학과코드\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"6\" rowspan=\"2\" text=\"주야코드\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"7\" rowspan=\"2\" text=\"단과대학명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"8\" rowspan=\"2\" text=\"학과명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"9\" rowspan=\"2\" text=\"주야구분\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"10\" colspan=\"3\" text=\"총계\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"13\" colspan=\"3\" text=\"석사\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"16\" colspan=\"3\" text=\"박사\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"19\" colspan=\"3\" text=\"석/박사 통합\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"22\" rowspan=\"2\" text=\"제출일\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell row=\"1\" col=\"10\" text=\"계\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell row=\"1\" col=\"11\" text=\"남\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell row=\"1\" col=\"12\" text=\"여\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell row=\"1\" col=\"13\" text=\"계\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell row=\"1\" col=\"14\" text=\"남\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell row=\"1\" col=\"15\" text=\"여\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell row=\"1\" col=\"16\" text=\"계\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell row=\"1\" col=\"17\" text=\"남\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell row=\"1\" col=\"18\" text=\"여\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell row=\"1\" col=\"19\" text=\"계\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell row=\"1\" col=\"20\" text=\"남\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell row=\"1\" col=\"21\" text=\"여\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:ROWNUM\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"1\" text=\"bind:ENTERSEQ\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"2\" text=\"bind:SCHCD\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"3\" text=\"bind:ORGCD\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"4\" text=\"bind:COLCD\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"5\" text=\"bind:DEPTCD\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"6\" text=\"bind:DEPTDNCD\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"7\" text=\"bind:COLCDNM\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"8\" text=\"bind:DEPTNM\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"9\" text=\"bind:DEPTDNNM\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"10\" text=\"bind:FRESHCNT\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"11\" text=\"bind:FRESHCNTM\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"12\" text=\"bind:FRESHCNTF\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"13\" text=\"bind:MSTFRESHCNT\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"14\" text=\"bind:MSTFRESHCNTM\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"15\" text=\"bind:MSTFRESHCNTF\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"16\" text=\"bind:DRFRESHCNT\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"17\" text=\"bind:DRFRESHCNTM\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"18\" text=\"bind:DRFRESHCNTF\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"19\" text=\"bind:MDFRESHCNT\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"20\" text=\"bind:MDFRESHCNTM\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"21\" text=\"bind:MDFRESHCNTF\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"22\" text=\"bind:STATUSWKDTHM\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/></Band><Band id=\"summary\"><Cell colspan=\"9\" text=\"총계\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"9\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"10\" text=\"expr:dataset.getSum(&quot;FRESHCNT&quot;)\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"11\" text=\"expr:dataset.getSum(&quot;FRESHCNTM&quot;)\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"12\" text=\"expr:dataset.getSum(&quot;FRESHCNTF&quot;)\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"13\" text=\"expr:dataset.getSum(&quot;MSTFRESHCNT&quot;)\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"14\" text=\"expr:dataset.getSum(&quot;MSTFRESHCNTM&quot;)\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"15\" text=\"expr:dataset.getSum(&quot;MSTFRESHCNTF&quot;)\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"16\" text=\"expr:dataset.getSum(&quot;DRFRESHCNT&quot;)\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"17\" text=\"expr:dataset.getSum(&quot;DRFRESHCNTM&quot;)\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"18\" text=\"expr:dataset.getSum(&quot;DRFRESHCNTF&quot;)\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"19\" text=\"expr:dataset.getSum(&quot;MDFRESHCNT&quot;)\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"20\" text=\"expr:dataset.getSum(&quot;MDFRESHCNTM&quot;)\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"21\" text=\"expr:dataset.getSum(&quot;MDFRESHCNTF&quot;)\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"22\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("gird00_xls","64","585","1200","130",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("10");
            obj.set_binddataset("ds_fpList");
            obj.set_autofittype("none");
            obj.set_scrollbartype("auto auto");
            obj.set_cssclass("grid_sty03");
            obj.set_enable("true");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"100\"/><Column size=\"210\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"230\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"178\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/><Row size=\"40\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"no\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"1\" text=\"학기\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"2\" text=\"학교코드\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"3\" text=\"본분교코드\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"4\" text=\"단과대학코드\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"5\" text=\"학과코드\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"6\" text=\"주야코드\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"7\" text=\"단과대학명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"8\" text=\"학과명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"9\" text=\"주야구분\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"10\" text=\"계\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"11\" text=\"남자\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"12\" text=\"여자\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"13\" text=\"제출일\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:ROWNUM\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"1\" text=\"bind:ENTERSEQ\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"2\" text=\"bind:SCHCD\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"3\" text=\"bind:ORGCD\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"4\" text=\"bind:COLCD\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"5\" text=\"bind:DEPTCD\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"6\" text=\"bind:DEPTDNCD\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"7\" text=\"bind:COLCDNM\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"8\" text=\"bind:DEPTNM\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"9\" text=\"bind:DEPTDNNM\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"10\" text=\"bind:FRESHCNT\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"11\" text=\"bind:FRESHCNTM\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"12\" text=\"bind:FRESHCNTF\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"13\" text=\"bind:STATUSWKDTHM\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/></Band><Band id=\"summary\"><Cell colspan=\"9\" text=\"총계\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"9\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"10\" text=\"expr:dataset.getSum(&quot;FRESHCNT&quot;)\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"11\" text=\"expr:dataset.getSum(&quot;FRESHCNTM&quot;)\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"12\" text=\"expr:dataset.getSum(&quot;FRESHCNTF&quot;)\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"13\" border=\"0px none\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_submit","650","gird:30","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("11");
            obj.set_text("제출");
            obj.set_cssclass("btn_sty01 btn_styLarge");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Static("label_00","30","694","1213","31",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("12");
            obj.set_text("※ 학생수는 신입생 규모확인을 위한 참고자료이며 학과가 누락된 경우에만 학과수정신청을 진행하시기 바랍니다.(전과, 학과명변경 등은 수정사항이 아님)");
            obj.set_color("#d31c00");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
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
        this.addIncludeScript("fp03m00.xfdl","CM::common.xjs");
        this.addIncludeScript("fp03m00.xfdl","CM::utl_script.xjs");
        this.registerScript("fp03m00.xfdl", function() {
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
        this.fv_USERGRPTYPE =  "";

        this.fv_USERID = "";
        this.fv_SURVTERM =  "";
        this.fv_CHANGEYN = "";
        this.fv_MENUNM = "신입생정보>연계결과";
        //글로벌 데이터셋을 사용하기 위한 objApp
        var objApp 		= nexacro.getApplication();

        this.fnCallback = function(serviceID, errCD, errMSG){

        	if(errCD < 0){
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceID == "getChargeSchoolList"){
        			// 선택된 데이터 불러오기
        			//this.Div.form.sub_search.form.sel_schooNm.set_index(0);  // 첫번쩨 인덱스 선택
        			var idx = 0;
        			if(this.ds_chgSchool.findRowExpr("SCHCD == '"+objApp.gds_param.getColumn(0,"SCHCD")+"' && ORGCD == '"+objApp.gds_param.getColumn(0,"ORGCD")+"'",0) > -1) {
        				idx = this.ds_chgSchool.findRowExpr("SCHCD == '"+objApp.gds_param.getColumn(0,"SCHCD")+"' && ORGCD == '"+objApp.gds_param.getColumn(0,"ORGCD")+"'",0);
        			}else{
        				alert("선택한 학교의 정보가 없습니다.");
        				return;
        			}

        			this.setChargeSchoolList();

        			this.selectFpDeptList();  // 신편입 학과대상 목록 가져옴....
        			this.setDayNight(); // 주야구분 세팅
        			//alert("id :" + objApp.gds_login_info.getColumn(idx, "USERID") );

        		}
        		if(serviceID == "selectFpDeptList"){
        			//alert( this.ds_fpList.getColumn(0,"FRESHCNT") );
        		}
        		if(serviceID == "getDayNight"){
        			// 주야간

        			this.ds_dayNight.insertRow(0);
        			this.ds_dayNight.setColumn(0,"DNCD","");
        			this.ds_dayNight.setColumn(0,"DNNM","전체");
        			//this.Div.form.sub_search00.form.sel_scKind.set_index(0);  // 첫번쩨 인덱스 선택

        			this.Div.form.sub_search.form.sel_dayNight.set_index(0);  // 첫번쩨 인덱스 선택
        		}
        		if(serviceID == "setDayNight"){
        			// 주야간
        			//alert(111);

        			this.ds_dayNight02.insertRow(0);
        			this.ds_dayNight02.setColumn(0,"DEPTDNCD","");
        			this.ds_dayNight02.setColumn(0,"DEPTDNNM","전체");
        			//this.Div.form.sub_search00.form.sel_scKind.set_index(0);  // 첫번쩨 인덱스 선택

        			this.Div.form.sub_search.form.sel_dayNight.set_index(0);  // 첫번쩨 인덱스 선택
        		}
        		if(serviceID == "insertSurvHist"){

        			var resultVal = objApp.gds_rtn_result.getColumn(0, "RESULTVAL");

        			if( resultVal !="Y"){
        				this.alert("등록에 실패 했습니다.");
        			}else{
        				//var index =  this.Div.form.sub_search.form.sel_schooNm.index;
        				//alert(index);
        				this.Div.form.sub_state.form.state_result.set_text("취업-학과정보 제출완료");
        				this.ds_chgSchool.setColumn(0, "STATUSNM", "취업-학과정보 제출완료" );
        				this.ds_chgSchool.setColumn(0, "SURVPROSTATUSCD", "4" ); //제출완료

        				this.utlf_refreshGdsSchoolInfo(this.fv_SURVKINDCD);//학교정보 새로고침
        				this.alert("제출 되었습니다.");
        				this.selectFpDeptList();
        			}
        		}

         	}
        }

        this.fp03m00_onload = function(obj,e)
        {
        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='FP'",0);

        	this.fv_USERID = objApp.gds_login_info.getColumn(idx, "USERID") ;
        	this.fv_SURVKINDCD = objApp.gds_login_info.getColumn(idx, "SURVKINDCD");
        	this.fv_USERGRPTYPE = objApp.gds_login_info.getColumn(idx, "USERGRPTYPE");

        	this.fv_CHANGEYN = objApp.gds_login_info.getColumn(0, "CHANGEYN");

        	this.fv_SCHCD      = objApp.gds_param.getColumn(0, "SCHCD");
        	this.fv_ORGCD      = objApp.gds_param.getColumn(0, "ORGCD");

        	this.lfn_divSurvSet();	// 기본정보 설정
        	this.getChargeSchoolList();  // 담당 학교 목록

        	//this.getDayNight();  // 주야간 목록
        	//this.Div.form.sub_search.form.sel_match.set_index(0);  // 첫번쩨 인덱스 선택

        	if(this.fv_USERGRPTYPE =="5"){
        	    // 전산담당자 버튼안보이게
        		this.Div.form.btn_request.set_visible(false);
        		this.Div.form.btn_submit.set_visible(false);
        	}

        	if(this.fv_CHANGEYN =="Y"){
        		this.utlf_enableBtn(this.Div,false);
        		this.Div.form.btn_xls.set_enable(true);
        	}

        };

        // 검색용 학교목록 가져 옴
        this.getChargeSchoolList = function(){

        	var strParam = "";
        	strParam += "tmp="				+ "a" 		            + "ª";
        	strParam += "STATUSparamCD="	+ "0082" 		        + "ª";  // 신편입 상태 파람
        	strParam += "SURVSEQ="			+  this.fv_SURVSEQ 	    + "ª";
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

        // 주야간 목록
        this.getDayNight = function(){
        	//alert(1);
        	var strParam = "";
        	strParam += "tmp="			+ "a" 		+ "ª";
        	strParam += "SURVSEQ="		+  this.fv_SURVSEQ 	+ "ª";
        	strParam += "SURVKINDCD="	+  this.fv_SURVKINDCD 	+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.gfnTransaction("getDayNight",
        						"/swiss/fp/baserel/getDayNight.do",
        						"dsSearch=dsSearch",
        						"ds_dayNight=dsResult",
        						"",
        						"fnCallback",
        						false);
        };
        // // 주야구분 세팅
        this.setDayNight = function(){
        	//alert(111);

        	// 전산담당자 유무 체크
        	var strParam = "";
        	strParam += "tmp="			+ "a" 				+ "ª";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ	+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD	+ "ª";
        	strParam += "SCHCD="		+ this.fv_SCHCD		+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD		+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.gfnTransaction("setDayNight",
        						"/swiss/fp/baserel/setDayNight.do",
        						"dsSearch=dsSearch",
        						"ds_dayNight02=dsResult",
        						"",
        						"fnCallback",
        						false);
        }

        // 검색 신편입 학과대상 목록 가져옴....
        this.selectFpDeptList = function(){

        	//var SCHNM =  this.Div.form.sub_search.form.sel_schooNm.text ;        //getSelectedText();
        	//alert(SCHNM);
        	//this.Div.form.sub_state.form.school_nm.set_text(SCHNM);
        	//var index =  this.Div.form.sub_search.form.sel_schooNm.index;
        	//alert(index);

        	//var SCHCD = this.ds_chgSchool.getColumn(index, "SCHCD"); // 학교코드
        	//var ORGCD = this.ds_chgSchool.getColumn(index, "ORGCD");// 본분교
        	var UNIGRADECD = this.ds_chgSchool.getColumn(0, "UNIGRADECD"); // 대학/대학원   대학원 : 2
        	var SURVPROSTATUSCD = this.ds_chgSchool.getColumn(0, "SURVPROSTATUSCD");  // 상태코드
        	var STATUSNM = this.ds_chgSchool.getColumn(0, "STATUSNM");  // 상태명

        	if(this.fv_SURVTERM != "Y") STATUSNM = STATUSNM + " (조사기간 아님)" ;
        	this.Div.form.sub_state.form.state_result.set_text(STATUSNM);

        	/*if(this.fv_USERGRPTYPE =="4" ){
        		if( SURVPROSTATUSCD =="4" ){
        			this.Div.form.btn_submit.set_visible(false);
        		}else{
        			this.Div.form.btn_submit.set_visible(true);
        		}
        	}*/
        	if(this.fv_CHANGEYN =="Y"){
        		this.utlf_enableBtn(this.Div,false);
        		this.Div.form.btn_xls.set_enable(true);
        	}

        	//alert(UNIGRADECD);
        	if(UNIGRADECD=="1"){
        		this.Div.form.gird.set_visible(true);
        		this.Div.form.gird02.set_visible(false);
        	}
        	if(UNIGRADECD=="2"){
        		this.Div.form.gird.set_visible(false);
        		this.Div.form.gird02.set_visible(true);
        	}


        	var sel_dept = this.Div.form.sub_search.form.sel_dept.value; // 학과명
        	var sel_dayNight = this.Div.form.sub_search.form.sel_dayNight.value; // 주야구분
        	//var sel_match = this.Div.form.sub_search.form.sel_match.value; // 일치여부

        	var strParam = "";
        	strParam += "tmp="				+ "a" 				+ "ª";
        	strParam += "SCHCD="			+ this.fv_SCHCD		+ "ª";
        	strParam += "ORGCD="			+ this.fv_ORGCD		+ "ª";
        	strParam += "UNIGRADECD="		+ UNIGRADECD		+ "ª";
        	strParam += "SURVPROSTATUSCD="	+ SURVPROSTATUSCD	+ "ª";
        	strParam += "SURVSEQ="			+ this.fv_SURVSEQ 	+ "ª";
        	strParam += "SURVKINDCD="		+ this.fv_SURVKINDCD + "ª";

        	strParam += "sel_dept="			+ sel_dept			+ "ª";
        	strParam += "sel_dayNight="		+ sel_dayNight		+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "검색", strParam);  //해당 학교의 연계결과 조회
        	this.gfnTransaction("selectFpDeptList",
        						"/swiss/fp/baserel/selectFpDeptList.do",
        						"dsSearch=dsSearch",
        						"ds_fpList=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        // 학교정보 info 세팅
        this.setChargeSchoolList = function(){

        	// 전산담당자 유무 체크
        	var strParam = "";
        	strParam += "tmp="			+ "a" 					+ "ª";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD	+ "ª";
        	strParam += "SCHCD="		+ this.fv_SCHCD			+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD			+ "ª";


        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.gfnTransaction("getComUserYn",
        						"/swiss/fp/baserel/getComUserYn.do", // 전산담당자 유무 체크
        						"dsSearch=dsSearch",
        						"gds_rtn_result=dsResult",
        						"",
        						"fnCallback",
        						false);
        }

        // 수정요청 팝업
        this.btn_request_onclick = function(obj,e)
        {
        	if(this.fv_SURVTERM !=  "Y"){
        		this.alert("선택된 학교는 조사기간이 아닙니다.");
        		return;
        	}

        	if(this.fv_USERGRPTYPE !="4"){
        		this.alert("수정요청 권한이 없습니다.");
        		return;
        	}

        	//var index =  this.Div.form.sub_search.form.sel_schooNm.index;
        	//alert(index);

        	var SCHCD = this.ds_chgSchool.getColumn(0, "SCHCD"); // 학교코드
        	var ORGCD = this.ds_chgSchool.getColumn(0, "ORGCD");// 본분교
        	var UNIGRADECD = this.ds_chgSchool.getColumn(0, "UNIGRADECD"); // 대학/대학원   대학원 : 2
        	var SURVPROSTATUSCD = this.ds_chgSchool.getColumn(0, "SURVPROSTATUSCD");  // 상태코드
        	var STATUSNM = this.ds_chgSchool.getColumn(0, "STATUSNM");  // 상태명

        	/*
        	0082	1	학과정보미제출
        	0082	2	취업-학과정보 수정요청
        	0082	3	KEDI-학과정보 수정완료
        	0082	4	취업-학과정보 제출완료
        	0082	5	KEDI-학과정보 반려
        	0082	6	취업-신입생정보 등록요청
        	0082	7	전산-신입생정보 등록
        	0082	8	전산-신입생정보 제출
        	0082	9	취업-신입생정보 승인
        	0082	10	취업-신입생정보 반려
        	0082	11	취업-신입생정보 제출
        	0082	12	KEDI-신입생정보 승인
        	0082	13	KEDI-신입생정보 반려
        	*/

        	//alert(SURVPROSTATUSCD);
        	// 수정요청조건
        	if( SURVPROSTATUSCD == "2"  ){
        		this.alert("수정요청 상태입니다. KEDI에서 수정완료후 제출 가능합니다. ");
        		return;
        	}
        	if( Number( SURVPROSTATUSCD)  >= 4  ){
        		this.alert("이미 제출 하셨습니다. 수정요청을 원하시면 KEDI로 연락 후 반려처리 하셔야 합니다.");
        		return;
        	}
        	if( SURVPROSTATUSCD != "1"  ){
        		this.alert("수정요청 가능한 상태가 아닙니다.");
        		return;
        	}

        	var objFrame = new ChildFrame();
        	var arr = new Array();
        	//arr["SCHCDORGCD"] = this.Div.form.sub_search.form.sel_schooNm.value;
        	arr["SCHCDORGCD"] =[SCHCD, ORGCD];

        	/*
        	objFrame.init( "fp03p00", null, null, 990, 550);
        	objFrame.set_openalign("center middle");
        	objFrame.set_formurl( "FP::fp03p00.xfdl" );
        	objFrame.showModal("fp03p00" ,this.getOwnerFrame() ,arr );
        	*/

        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("chf_popup1"
        					  , 0
        					  , 0
        					  , 750
        					  , 550
        					  , null
        					  , null
        					  , "FP::fp03p00.xfdl");
        	objChildFrame.set_showtitlebar(false);
        	objChildFrame.set_dragmovetype("all");
        	objChildFrame.set_openalign("center middle");
        	objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)")

        	var objParam = {param1:SCHCD, param2:ORGCD,SURVSEQ:this.fv_SURVSEQ, SURVKINDCD:this.fv_SURVKINDCD, MENUNM:this.fv_MENUNM};
        	objChildFrame.showModal(this.getOwnerFrame()
        						  , objParam
        						  , this
        						  , "fn_popupCallback");
        };

        this.searchEnter = function(obj,e)
        {
        	if(e.keycode == nexacro.Event.KEY_ENTER){
        		this.selectFpDeptList();
        	}
        };

        // 결과 콜백
        this.fn_popupCallback = function(strPopupID, strReturn)
        {
        	if(strReturn == undefined){
        		return;
        	}

        	if(strPopupID == "chf_popup1"){
        		this.alert("Return Value: " + strReturn);
        	}
        };

        // 결과처리	//사용여부 확인
        this.fn_saveResult = function(saveStr,saveFl)
        {

        	this.Div.form.sub_state.form.state_result.set_text("취업-학과정보 수정요청");
        	//var index =  this.Div.form.sub_search.form.sel_schooNm.index;
        	this.ds_chgSchool.setColumn(0, "STATUSNM", saveStr );
        	this.ds_chgSchool.setColumn(0, "SURVPROSTATUSCD", saveFl ); //수정요청

        };


        // 제출
        this.btn_sumit_onclick = function(obj,e)
        {
        	if(this.fv_SURVTERM !=  "Y"){
        		this.alert("선택된 학교는 조사기간이 아닙니다.");
        		return;
        	}

        	if(this.fv_USERGRPTYPE !="4"){
        		this.alert("제출 권한이 없습니다.");
        		return;
        	}

        	var strParam = "";

        	var SCHCD = this.ds_chgSchool.getColumn(0, "SCHCD"); // 학교코드
        	var ORGCD = this.ds_chgSchool.getColumn(0, "ORGCD");// 본분교
        	var UNIGRADECD = this.ds_chgSchool.getColumn(0, "UNIGRADECD"); // 대학/대학원   대학원 : 2
        	var SURVPROSTATUSCD = this.ds_chgSchool.getColumn(0, "SURVPROSTATUSCD");  // 상태코드
        	var STATUSNM = this.ds_chgSchool.getColumn(0, "STATUSNM");  // 상태명

        	/*
        	0082	1	학과정보미제출
        	0082	2	취업-학과정보 수정요청
        	0082	3	KEDI-학과정보 수정완료
        	0082	4	취업-학과정보 제출완료
        	0082	5	KEDI-학과정보 반려
        	0082	6	취업-신입생정보 등록요청
        	0082	7	전산-신입생정보 등록
        	0082	8	전산-신입생정보 제출
        	0082	9	취업-신입생정보 승인
        	0082	10	취업-신입생정보 반려
        	0082	11	취업-신입생정보 제출
        	0082	12	KEDI-신입생정보 승인
        	0082	13	KEDI-신입생정보 반려
        	*/

        	// 제출조건
        	if( SURVPROSTATUSCD == "2"  ){
        		this.alert("수정요청 상태입니다. KEDI에서 수정완료후 제출 가능합니다. ");
        		return;
        	}

        	if( Number( SURVPROSTATUSCD)  >= 4  ){
        		this.alert("이미 제출 하셨습니다. 수정요청을 원하시면 KEDI로 연락 후 반려처리 하셔야 합니다. ");
        		return;
        	}

        	if( SURVPROSTATUSCD != "1" && SURVPROSTATUSCD != "3" ){
        		this.alert("제출 가능한 상태가 아닙니다.");
        		return;
        	}

        	if(!this.confirm("제출하시겠습니까?")){
        		return;
        	}

        	var strParam = "";
        	strParam += "tmp="			+ "a" 					+ "ª";
        	strParam += "SCHCD="		+ SCHCD					+ "ª";
        	strParam += "ORGCD="		+ ORGCD					+ "ª";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";

        	strParam += "RCEPTCN="		+ "취업-학과정보 제출완료"		+ "ª";  // 내용
        	strParam += "STATUSCD="		+ "4"					+ "ª";	// 상태 - 연계결과 제출  : KEDI검토(신편입생수)
        	//alert(this.ORGCD.value);

        	//this.Div.form.btn_submit.set_visible(false); // 제출버튼 안보이게

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "제출", strParam);            // 연계결과 제출
        	this.gfnTransaction("insertSurvHist",
        						"/swiss/fp/baserel/insertSurvHist.do",
        						"dsSearch=dsSearch",
        						"gds_rtn_result=dsResult",
        						"",
        						"fnCallback",
        						false);

        };


        // 엑셀다운로드
        this.btn_xls_onclick = function(obj,e)
        {
        	//alert(this.ds_fpList.getRowCount());
        	if(this.ds_fpList.getRowCount()==0){
        		alert("저장할 데이터가 없습니다.");
        		return;
        	}

        	this.exportObj = new ExcelExportObject();


        	this.exportObj.addEventHandler("onsuccess", this.Export00_onsuccess, this);
        	this.exportObj.set_exporttype(nexacro.ExportTypes.EXCEL2007);
        	this.exportObj.set_exportactivemode( "active" );
        	this.exportObj.set_exporturl("svcBaseUrl::XExportImport.do");
        	this.exportObj.set_exportfilename("신입생 연계결과");
        	//trace(this.exportObj.exportfilename);

        	//var index =  this.Div.form.sub_search.form.sel_schooNm.index;
        	var UNIGRADECD = this.ds_chgSchool.getColumn(0, "UNIGRADECD"); // 대학/대학원   대학원 : 2
        	//alert(UNIGRADECD);
        	if(UNIGRADECD=="1"){
        		this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div.form.gird00_xls, "Sheet1!A1", "allrecord", "allrecord", "suppress", "allstyle","none","none","both");
        	}
        	if(UNIGRADECD=="2"){
        		this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div.form.gird02_xls, "Sheet1!A1", "allrecord", "allrecord", "suppress", "allstyle","none","none","both");
        	}


        	this.exportObj.set_exporteventtype("itemrecord");
        	this.exportObj.set_exportuitype("exportprogress");
        	this.exportObj.set_exportmessageprocess("%d[%d/%d]");
        	trace("exporturl== "+this.exportObj.exporturl);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "파일저장(코드)", "");            // 조회된 연계결과를 다운
        	var result = this.exportObj.exportData();
        };
        this.Export00_onsuccess = function (obj, e )
        {
        	//this.setWaitCursor(false);
        	trace(e.eventid);
        }




        this.btn_move_onclick = function(obj,e)
        {
        	this.go("HP::hp08m00_test.xfdl");
        };

        //메뉴이동
        this.lfn_goMenu = function(obj,e)
        {
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
            this.addEventHandler("onload",this.fp03m00_onload,this);
            this.Div.form.stepArea00_00.form.fp01m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_00.form.fp02m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_00.form.fp03m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_00.form.fp04m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_00.form.fp05m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_00.form.fp06m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_00.form.fp07m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.sub_search.form.sel_dept.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.sub_search.form.sel_dayNight.addEventHandler("onitemchanged",this.Div_sub_search_sel_dayNight_onitemchanged,this);
            this.Div.form.sub_search.form.btn_search.addEventHandler("onclick",this.selectFpDeptList,this);
            this.Div.form.btn_xls.addEventHandler("onclick",this.btn_xls_onclick,this);
            this.Div.form.btn_request.addEventHandler("onclick",this.btn_request_onclick,this);
            this.Div.form.btn_submit.addEventHandler("onclick",this.btn_sumit_onclick,this);
            this.Div.form.label_00.addEventHandler("onclick",this.Div_label_00_onclick,this);
        };

        this.loadIncludeScript("fp03m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
