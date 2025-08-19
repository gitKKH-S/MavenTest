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


            obj = new Dataset("ds_bfList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_match", this);
            obj._setContents("<ColumnInfo><Column id=\"MTC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MTC_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MTC_ID\"/><Col id=\"MTC_NM\">전체</Col></Row><Row><Col id=\"MTC_ID\">Y</Col><Col id=\"MTC_NM\">일치</Col></Row><Row><Col id=\"MTC_ID\">N</Col><Col id=\"MTC_NM\">불일치</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPTCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDncd", this);
            obj._setContents("<ColumnInfo><Column id=\"CDTYPE\" type=\"STRING\" size=\"32\"/><Column id=\"CD\" type=\"STRING\" size=\"32\"/><Column id=\"UPCDNM\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"CDENGNM\" type=\"STRING\" size=\"256\"/><Column id=\"ORDERSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"CDNM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsActive", this);
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","784",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Div("stepArea00_00","30","20","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_cssclass("stepArea");
            this.Div.addChild(obj.name, obj);

            obj = new Static("gp01m00","0","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00.form);
            obj.set_taborder("0");
            obj.set_text("조사현황");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea00_00.addChild(obj.name, obj);

            obj = new Static("gp02m00","342","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00.form);
            obj.set_taborder("2");
            obj.set_text("환경설정");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea00_00.addChild(obj.name, obj);

            obj = new Static("gp03m00","171","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00.form);
            obj.set_taborder("1");
            obj.set_text("연계결과");
            obj.set_cssclass("step01 on01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea00_00.addChild(obj.name, obj);

            obj = new Static("gp04m00","513","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00.form);
            obj.set_taborder("3");
            obj.set_text("정보등록");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea00_00.addChild(obj.name, obj);

            obj = new Static("gp05m00","1024","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00.form);
            obj.set_taborder("6");
            obj.set_text("결과조회");
            obj.set_cssclass("step01 last");
            obj.set_cursor("pointer");
            this.Div.form.stepArea00_00.addChild(obj.name, obj);

            obj = new Static("gp06m00","684","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00.form);
            obj.set_taborder("4");
            obj.set_text("결과집계");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea00_00.addChild(obj.name, obj);

            obj = new Static("gp07m00","855","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00.form);
            obj.set_taborder("5");
            obj.set_text("결과제출");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea00_00.addChild(obj.name, obj);

            obj = new Static("Static01","500","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("ico_step");
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
            obj.set_cssclass("ico_step on01");
            this.Div.form.stepArea00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","159","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea00_00.form);
            obj.set_taborder("12");
            obj.set_cssclass("ico_step on01");
            this.Div.form.stepArea00_00.addChild(obj.name, obj);

            obj = new Div("sub_research01","30","stepArea00_00:20","1200","95",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
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

            obj = new Static("reser_obj01","290","10","120","30",null,null,null,null,null,null,this.Div.form.sub_research01.form);
            obj.set_taborder("2");
            obj.set_text("조사 대상");
            obj.set_cssclass("reser_obj01");
            obj.set_font("16px/normal \"SpoqaHanSans-Bold\"");
            this.Div.form.sub_research01.addChild(obj.name, obj);

            obj = new Static("reser_date_result","reser_obj01:10","10","584","30",null,null,null,null,null,null,this.Div.form.sub_research01.form);
            obj.set_taborder("3");
            obj.set_text("oo.2월, 19.08월 ooo");
            obj.set_cssclass("reser_date_result");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\"");
            this.Div.form.sub_research01.addChild(obj.name, obj);

            obj = new Static("reser_date01","30","45","120","30",null,null,null,null,null,null,this.Div.form.sub_research01.form);
            obj.set_taborder("4");
            obj.set_text("조사 기간");
            obj.set_cssclass("reser_date01");
            obj.set_font("16px/normal \"SpoqaHanSans-Bold\"");
            this.Div.form.sub_research01.addChild(obj.name, obj);

            obj = new Static("reser_obj_result","reser_date01:10","45","606","30",null,null,null,null,null,null,this.Div.form.sub_research01.form);
            obj.set_taborder("5");
            obj.set_text("oooo 7.13 ~ ooo.7.23. (oooo년 고등교육기관 oooo 조사)");
            obj.set_cssclass("reser_obj_result");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\"");
            this.Div.form.sub_research01.addChild(obj.name, obj);

            obj = new Div("sub_search","30","sub_research01:20","1200","52",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00_00_00","30","10","50","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("0");
            obj.set_text("학과명");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00","399","10","62","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("1");
            obj.set_text("주야구분");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Button("btn_search","732","10","100","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("2");
            obj.set_text("검색");
            obj.set_cssclass("btn_sty01 btn_styLarge");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","780",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1231","0","30","780",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Div("sub_state","30","270","600","40",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
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

            obj = new Button("btn_xls",null,null,"100","30","30","474",null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_text("파일저장");
            obj.set_cssclass("btn_sty02");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_submit","566","720","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("8");
            obj.set_text("제출");
            obj.set_cssclass("btn_sty01 btn_styLarge");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","20",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            this.Div.addChild(obj.name, obj);

            obj = new Combo("in_cb_01","108","208","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("dsDept");
            obj.set_datacolumn("DEPTNM");
            obj.set_codecolumn("DEPTCD");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_text("KEDI대학원(본교)");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("sel_dayNight","492","208","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("dsDncd");
            obj.set_datacolumn("CDNM");
            obj.set_codecolumn("CD");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid_rel_01","30","314","1200","396",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_bfList");
            obj.set_autofittype("none");
            obj.set_cssclass("grid_sty02");
            obj.set_autosizingtype("none");
            obj.set_visible("true");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"><Cell text=\"학교명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"1\" text=\"학교코드\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"2\" text=\"본분교명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"3\" text=\"본분교코드\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"4\" text=\"학번\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"5\" text=\"개인식별키\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"6\" text=\"단과대명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"7\" text=\"학과명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"8\" text=\"주야간구분명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"9\" text=\"성명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"10\" text=\"생년월일\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"11\" text=\"성별\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"12\" text=\"외국유학생여부\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"13\" text=\"입학연월일\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"14\" text=\"졸업연월일\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/></Band><Band id=\"body\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"><Cell text=\"bind:SCHNM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"1\" text=\"bind:SCHCD\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"2\" text=\"bind:ORGNM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"3\" text=\"bind:ORGCD\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"4\" text=\"bind:STUDENTNO\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"5\" text=\"bind:UNIQUEKEY\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"6\" text=\"bind:COLNM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"7\" text=\"bind:DEPTNM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"8\" text=\"bind:DNNM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"9\" text=\"bind:NAME\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"10\" text=\"bind:BIRTHYEAR\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"11\" text=\"bind:SEXCD\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"12\" text=\"bind:EXCHANGEYN\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"13\" text=\"bind:INYM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"14\" text=\"bind:OUTYM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid_rel_02","30","314","1200","396",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_bfList");
            obj.set_autofittype("none");
            obj.set_cssclass("grid_sty02");
            obj.set_autosizingtype("none");
            obj.set_visible("true");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"><Cell text=\"학교명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"1\" text=\"학교코드\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"2\" text=\"본분교명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"3\" text=\"본분교코드\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"4\" text=\"학번\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"5\" text=\"개인식별키\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"6\" text=\"단과대명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"7\" text=\"전공명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"8\" text=\"주야간구분명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"9\" text=\"성명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"10\" text=\"생년월일\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"11\" text=\"성별\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"12\" text=\"외국유학생여부\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"13\" text=\"입학연월일\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"14\" text=\"졸업연월일\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/></Band><Band id=\"body\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"><Cell text=\"bind:SCHNM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"1\" text=\"bind:SCHCD\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"2\" text=\"bind:ORGNM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"3\" text=\"bind:ORGCD\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"4\" text=\"bind:STUDENTNO\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"5\" text=\"bind:UNIQUEKEY\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"6\" text=\"bind:COLNM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"7\" text=\"bind:DEPTNM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"8\" text=\"bind:DNNM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"9\" text=\"bind:NAME\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"10\" text=\"bind:BIRTHYEAR\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"11\" text=\"bind:SEXCD\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"12\" text=\"bind:EXCHANGEYN\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"13\" text=\"bind:INYM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"14\" text=\"bind:OUTYM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid_rel_01_xls","40","332","1200","396",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_bfList");
            obj.set_autofittype("none");
            obj.set_cssclass("grid_sty02");
            obj.set_autosizingtype("none");
            obj.set_visible("false");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"><Cell text=\"학교명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"1\" text=\"학교코드\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"2\" text=\"본분교명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"3\" text=\"본분교코드\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"4\" text=\"학번\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"5\" text=\"개인식별키\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"6\" text=\"단과대명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"7\" text=\"학과명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"8\" text=\"주야간구분명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"9\" text=\"성명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"10\" text=\"생년월일\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"11\" text=\"성별\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"12\" text=\"외국유학생여부\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"13\" text=\"입학연월일\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"14\" text=\"졸업연월일\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/></Band><Band id=\"body\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"><Cell text=\"bind:SCHNM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"1\" text=\"bind:SCHCD\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"2\" text=\"bind:ORGNM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"3\" text=\"bind:ORGCD\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"4\" text=\"bind:STUDENTNO\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"5\" text=\"bind:UNIQUEKEY\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"6\" text=\"bind:COLNM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"7\" text=\"bind:DEPTNM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"8\" text=\"bind:DNNM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"9\" text=\"bind:NAME\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"10\" text=\"bind:BIRTHYEAR\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"11\" text=\"bind:SEXCD\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"12\" text=\"bind:EXCHANGEYN\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"13\" text=\"bind:INYM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"14\" text=\"bind:OUTYM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid_rel_02_xls","50","350","1200","396",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_bfList");
            obj.set_autofittype("none");
            obj.set_cssclass("grid_sty02");
            obj.set_autosizingtype("none");
            obj.set_visible("false");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"><Cell text=\"학교명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"1\" text=\"학교코드\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"2\" text=\"본분교명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"3\" text=\"본분교코드\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"4\" text=\"학번\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"5\" text=\"개인식별키\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"6\" text=\"단과대명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"7\" text=\"전공명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"8\" text=\"주야간구분명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"9\" text=\"성명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"10\" text=\"생년월일\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"11\" text=\"성별\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"12\" text=\"외국유학생여부\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"13\" text=\"입학연월일\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"14\" text=\"졸업연월일\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/></Band><Band id=\"body\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"><Cell text=\"bind:SCHNM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"1\" text=\"bind:SCHCD\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"2\" text=\"bind:ORGNM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"3\" text=\"bind:ORGCD\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"4\" text=\"bind:STUDENTNO\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"5\" text=\"bind:UNIQUEKEY\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"6\" text=\"bind:COLNM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"7\" text=\"bind:DEPTNM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"8\" text=\"bind:DNNM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"9\" text=\"bind:NAME\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"10\" text=\"bind:BIRTHYEAR\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"11\" text=\"bind:SEXCD\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"12\" text=\"bind:EXCHANGEYN\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"13\" text=\"bind:INYM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"14\" text=\"bind:OUTYM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

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
        this.addIncludeScript("gp03m00.xfdl","CM::common.xjs");
        this.addIncludeScript("gp03m00.xfdl","CM::utl_script.xjs");
        this.addIncludeScript("gp03m00.xfdl","CM::utl_modal.xjs");
        this.registerScript("gp03m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;
        this.executeIncludeScript("CM::utl_script.xjs"); /*include "CM::utl_script.xjs"*/;
        this.executeIncludeScript("CM::utl_modal.xjs"); /*include "CM::utl_modal.xjs"*/;

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
        this.fv_SURVTERM =  "";
        this.fv_CHANGEYN = "";
        this.fv_USERGRPTYPE =  "";
        this.fv_MENUNM = "졸업생정보>연계결과";
        this.fv_MENUID = "GP03M00";

        //글로벌 데이터셋을 사용하기 위한 objApp
        var objApp 		= nexacro.getApplication();

        this.fnCallback = function(serviceID, errCD, errMSG){

        	if(errCD < 0){
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceID == "getChargeSchoolList"){
        			// 선택된 데이터 불러오기
        			var idx = 0;
        			if(this.ds_chgSchool.findRowExpr("SCHCD == '"+objApp.gds_param.getColumn(0,"SCHCD")+"' && ORGCD == '"+objApp.gds_param.getColumn(0,"ORGCD")+"'",0) > -1) {
        				idx = this.ds_chgSchool.findRowExpr("SCHCD == '"+objApp.gds_param.getColumn(0,"SCHCD")+"' && ORGCD == '"+objApp.gds_param.getColumn(0,"ORGCD")+"'",0);
        			}else{
        				alert("선택한 학교의 정보가 없습니다.");
        				return;
        			}
        			this.setChargeSchoolList();
        			this.selectGpDeptList();  // 신편입 학과대상 목록 가져옴....
        			this.setDayNight(); // 주야구분 세팅

        		}
        		if(serviceID == "selectGpDeptList"){
        			//alert(2);
        		}
        		if(serviceID == "getDayNight"){
        			// 주야간
        			this.dsDncd.insertRow(0);
        			this.dsDncd.setColumn(0,"CD","");
        			this.dsDncd.setColumn(0,"CDNM","전체");
        			//this.Div.form.sub_search.form.sel_dayNight.set_index(0);  // 첫번쩨 인덱스 선택
        		}
        		if(serviceID == "setDayNight"){
        			// 주야간
        			//alert(111);

        			this.dsDncd.insertRow(0);
        			this.dsDncd.setColumn(0,"CD","");
        			this.dsDncd.setColumn(0,"CDNM","전체");

        			//this.sel_dayNight.set_index(0);  // 첫번쩨 인덱스 선택
        		}
        		if(serviceID == "insertSurvHist"){

        			var resultVal = objApp.gds_rtn_result.getColumn(0, "RESULTVAL");

        			if( resultVal !="Y"){
        				this.alert("등록에 실패 했습니다.");
        			}else{
        				this.Div.form.sub_state.form.state_result.set_text("취업-졸업자수 제출완료");
        				if(this.fv_SURVTERM != "Y") this.Div.form.sub_state.form.state_result.set_text("취업-졸업자수 제출완료 (조사기간 아님)");
        				this.ds_chgSchool.setColumn(0, "STATUSNM", "취업-졸업자수 제출완료" );
        				this.ds_chgSchool.setColumn(0, "SURVPROSTATUSCD", "4" ); //제출완료

        				this.utlf_refreshGdsSchoolInfo(this.fv_SURVKINDCD);//학교정보 새로고침
        				this.alert("제출 되었습니다.");
        				this.selectGpDeptList();
        			}
        		}
        		if(serviceID == "listDept"){
        			this.dsDept.set_keystring("S:DEPTNM+");
        			this.dsDept.insertRow(0);
        			this.dsDept.setColumn(0,"DEPTCD","");
        			this.dsDept.setColumn(0,"DEPTNM","전체");
        		}

        		if(serviceID == "close_alert"){
        			this.fn_goPage("GP::gp01m00.xfdl");
        		}

        		if(serviceID == "chkActive"){
        			//alert("rtn chkActive");
        			var chkStatus = this.dsActive.getColumn(0, "PAGESTATUS");
        			var chkMsg = this.dsActive.getColumn(0, "RTNMSG");
        			var chkCnt = this.dsActive.getColumn(0, "CNT");
        			var chkRow = this.dsActive.rowcount;
        			//alert("chkCnt="+chkCnt);
        			/*
        			if(chkRow==0){
        				alert(chkMsg);
        				this.fn_goPage("GP::gp01m00.xfdl");
        			}else{
        				if(chkStatus==0){
        					alert(chkMsg);
        					this.fn_goPage("GP::gp01m00.xfdl");
        				}
        			}
        			*/
        			if(chkStatus!=1){
        				this.callModal(1200,300,"CM::popAlert.xfdl","close_alert",chkMsg);
        			}
        		}
         	}
        }

        this.fp03m00_onload = function(obj,e)
        {
        	this.chkActive();

        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='GP'",0);

        	this.fv_USERID     = objApp.gds_login_info.getColumn(idx, "USERID") ;
        	this.fv_SURVKINDCD = objApp.gds_login_info.getColumn(idx, "SURVKINDCD");
        	this.fv_CHANGEYN   = objApp.gds_login_info.getColumn(idx, "CHANGEYN");
        	this.fv_USERGRPTYPE = objApp.gds_login_info.getColumn(idx, "USERGRPTYPE");

        	this.fv_SCHCD      = objApp.gds_param.getColumn(0, "SCHCD");
        	this.fv_ORGCD      = objApp.gds_param.getColumn(0, "ORGCD");

        	this.lfn_divSurvSet();									// 기본정보 설정

        	this.getChargeSchoolList();								// 담당 학교 목록

        	this.listDept();										// 해당학교 학과목록

        	this.listDncd();										// 해당학교 주야간코드

        	if(this.fv_USERGRPTYPE =="5"){
        	    // 전산담당자 버튼안보이게
        		//this.Div.form.btn_request.set_visible(false);
        		this.Div.form.btn_submit.set_visible(false);
        	}

        	if(this.fv_CHANGEYN =="Y"){
        		this.utlf_enableBtn(this.Div,false);
        		this.Div.form.btn_xls.set_enable(true);
        		//this.Div.form.btn_submit.set_enable(true);
        	}

        };

        // 검색용 학교정보 가져 옴
        this.getChargeSchoolList = function(){

        	var strParam = "";
        	strParam += "tmp="				+ "a" 					+ "ª";
        	strParam += "STATUSparamCD="	+ "0081" 				+ "ª";  // 졸업자
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

        // // 주야구분 세팅
        this.setDayNight = function(){

        	// 전산담당자 유무 체크
        	var strParam = "";
        	strParam += "tmp="				+ "a" 					+ "ª";
        	strParam += "SURVSEQ="			+  this.fv_SURVSEQ		+ "ª";
        	strParam += "SURVKINDCD="		+  this.fv_SURVKINDCD	+ "ª";
        	strParam += "SCHCD="			+  this.fv_SCHCD 		+ "ª";
        	strParam += "ORGCD="			+  this.fv_ORGCD 		+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.gfnTransaction("setDayNight",
        						"/swiss/gp/baserel/setDayNight.do",
        						"dsSearch=dsSearch",
        						"ds_dayNight02=dsResult",
        						"",
        						"fnCallback",
        						false);
        }

        // 검색 졸업자 학과대상 목록 가져옴....
        this.selectGpDeptList = function(){
        	var UNIGRADECD = this.ds_chgSchool.getColumn(0, "UNIGRADECD"); // 대학/대학원   대학원 : 2
        	var SURVPROSTATUSCD = this.ds_chgSchool.getColumn(0, "SURVPROSTATUSCD");  // 상태코드
        	var STATUSNM = this.ds_chgSchool.getColumn(0, "STATUSNM");  // 상태명
        	if(this.fv_SURVTERM != "Y") STATUSNM = STATUSNM + " (조사기간 아님)" ;
        	this.Div.form.sub_state.form.state_result.set_text(STATUSNM);

        	if(this.fv_USERGRPTYPE =="4" ){
        		//this.Div.form.btn_submit.set_visible(true);
        		/* 진행상태에 따라 버튼 visible → 이후 버튼 활상화 여부로 변경
        		if( SURVPROSTATUSCD =="4" ){
        			this.Div.form.btn_submit.set_visible(false);
        		}else{
        			this.Div.form.btn_submit.set_visible(true);
        		}
        		*/
        	}

        	if(this.fv_CHANGEYN =="Y"){
        		this.utlf_enableBtn(this.Div,false);
        		this.Div.form.btn_xls.set_enable(true);
        	}

        	//alert(UNIGRADECD);
        	if(UNIGRADECD=="1"){
        		this.Grid_rel_01.set_visible(true);
        		this.Grid_rel_02.set_visible(false);
        	}
        	if(UNIGRADECD=="2"){
        		this.Grid_rel_01.set_visible(false);
        		this.Grid_rel_02.set_visible(true);
        	}

        	var sel_dept = this.in_cb_01.value; // 학과명
        	var sel_dayNight = this.sel_dayNight.value; // 주야구분
        	//var sel_match = this.Div.form.sub_search.form.sel_match.value; // 일치여부

        	var strParam = "";
        	strParam += "tmp="				+  "a" 					+ "ª";
        	strParam += "SCHCD="			+  this.fv_SCHCD		+ "ª";
        	strParam += "ORGCD="			+  this.fv_ORGCD		+ "ª";
        	//strParam += "UNIGRADECD="		+  UNIGRADECD			+ "ª";
        	//strParam += "SURVPROSTATUSCD="	+  SURVPROSTATUSCD		+ "ª";
        	strParam += "SURVSEQ="			+  this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="		+  this.fv_SURVKINDCD 	+ "ª";
        	strParam += "sel_dept="			+  sel_dept				+ "ª";
        	strParam += "sel_dayNight="		+  sel_dayNight			+ "ª";

        	//alert(strParam);
        	//this.alert("start="+this.fv_SURVSTRTDT+", end="+this.fv_SURVENDDT+", seq="+this.fv_SURVSEQ+",kind="+this.fv_SURVKINDCD);
        	if(this.fv_SURVTERM !=  "Y"){

        		this.alert("선택된 학교는 조사기간이 아닙니다.");
        		return false;
        	}

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "검색", strParam);  //해당 학교의 연계결과 조회

        	this.gfnTransaction("selectGpBFList",
        						"/swiss/gp/baserel/selectGpBFList.do",
        						"dsSearch=dsSearch",
        						"ds_bfList=dsResult",
        						"",
        						"fnCallback",
        						false);

        };

        // 학교정보 info 세팅
        this.setChargeSchoolList = function(){
        	// 전산담당자 유무 체크
        	var strParam = "";
        	strParam += "tmp="			+ "a" 					+ "ª";
        	strParam += "SURVSEQ="		+  this.fv_SURVSEQ		+ "ª";
        	strParam += "SURVKINDCD="	+  this.fv_SURVKINDCD	+ "ª";
        	strParam += "SCHCD="		+  this.fv_SCHCD		+ "ª";
        	strParam += "ORGCD="		+  this.fv_ORGCD		+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.gfnTransaction("getComUserYn",
        						"/swiss/fp/baserel/getComUserYn.do",
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

        	var SCHCD = this.ds_chgSchool.getColumn(0, "SCHCD"); // 학교코드
        	var ORGCD = this.ds_chgSchool.getColumn(0, "ORGCD");// 본분교
        	var UNIGRADECD = this.ds_chgSchool.getColumn(0, "UNIGRADECD"); // 대학/대학원   대학원 : 2
        	var SURVPROSTATUSCD = this.ds_chgSchool.getColumn(0, "SURVPROSTATUSCD");  // 상태코드
        	var STATUSNM = this.ds_chgSchool.getColumn(0, "STATUSNM");  // 상태명


        	/*
        	0081	1	졸업자수 미제출
        	0081	2	취업-졸업자수 수정요청
        	0081	3	KEDI-졸업자수 수정완료
        	0081	4	취업-졸업자수 제출완료
        	0081	5	KEDI-졸업자수 반려
        	0081	6	취업-졸업생정보 등록요청
        	0081	7	전산-졸업생정보 등록
        	0081	8	전산-졸업생정보 제출
        	0081	9	취업-졸업생정보 승인
        	0081	10	취업-졸업생정보 반려
        	0081	11	취업-졸업생정보 제출
        	0081	12	KEDI-졸업생정보 승인
        	0081	13	KEDI-졸업생정보 반려
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
        	if( SURVPROSTATUSCD != "1"  && SURVPROSTATUSCD != "3"){
        		this.alert("수정요청 가능한 상태가 아닙니다.");
        		return;
        	}

        		var objFrame = new ChildFrame();
        		var arr = new Array();
        		arr["SCHCDORGCD"] =[SCHCD, ORGCD];

        		var objChildFrame = new ChildFrame();
        		objChildFrame.init("chf_popup1"
        						  , 0
        						  , 0
        						  , 750
        						  , 550
        						  , null
        						  , null
        						  , "GP::gp03p00.xfdl");
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
        		this.selectGpDeptList();
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

        // 결과처리
        this.fn_saveResult = function(saveStr,saveFl)
        {
        	this.Div.form.sub_state.form.state_result.set_text("취업-졸업자수 수정요청");
        	if(this.fv_SURVTERM != "Y") this.Div.form.sub_state.form.state_result.set_text("취업-졸업자수 수정요청 (조사기간 아님)");

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
        	0081	1	졸업자수 미제출
        	0081	2	취업-졸업자수 수정요청
        	0081	3	KEDI-졸업자수 수정완료
        	0081	4	취업-졸업자수 제출완료
        	0081	5	KEDI-졸업자수 반려
        	0081	6	취업-졸업생정보 등록요청
        	0081	7	전산-졸업생정보 등록
        	0081	8	전산-졸업생정보 제출
        	0081	9	취업-졸업생정보 승인
        	0081	10	취업-졸업생정보 반려
        	0081	11	취업-졸업생정보 제출
        	0081	12	KEDI-졸업생정보 승인
        	0081	13	KEDI-졸업생정보 반려
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
        	strParam += "tmp="		    + "a" 							+ "ª";
        	strParam += "SCHCD="		+  SCHCD						+ "ª";
        	strParam += "ORGCD="		+  ORGCD						+ "ª";
        	strParam += "SURVSEQ="		+  this.fv_SURVSEQ 				+ "ª";
        	strParam += "SURVKINDCD="	+  this.fv_SURVKINDCD 			+ "ª";
        	strParam += "RCEPTCN="		+ "취업-졸업자수 제출완료"	+ "ª";  // 내용
        	strParam += "STATUSCD="		+ "4"		+ "ª";	// 상태 - 연계결과 제출  : KEDI검토(신편입생수)

        	//진행상태에 따라 버튼 visible → 이후 버튼 활상화 여부로 변경
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
        	if(this.ds_bfList.getRowCount()==0){
        		alert("저장할 데이터가 없습니다.");
        		return;
        	}

        	this.exportObj = new ExcelExportObject();

        	this.exportObj.addEventHandler("onsuccess", this.Export00_onsuccess, this);
        	this.exportObj.set_exporttype(nexacro.ExportTypes.EXCEL2007);
        	this.exportObj.set_exportactivemode( "active" );
        	this.exportObj.set_exporturl("svcBaseUrl::XExportImport.do");
        	this.exportObj.set_exportfilename("졸업생정보 연계결과");

        	var UNIGRADECD = this.ds_chgSchool.getColumn(0, "UNIGRADECD"); // 대학/대학원   대학원 : 2
        	//alert(UNIGRADECD);
        	if(UNIGRADECD=="1"){
        		this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Grid_rel_01_xls, "Sheet1!A1", "allrecord", "allrecord", "suppress", "allstyle","none","none","both");
        	}
        	if(UNIGRADECD=="2"){
        		this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Grid_rel_02_xls, "Sheet1!A1", "allrecord", "allrecord", "suppress", "allstyle","none","none","both");
        	}


        	this.exportObj.set_exporteventtype("itemrecord");
        	this.exportObj.set_exportuitype("exportprogress");
        	this.exportObj.set_exportmessageprocess("%d[%d/%d]");
        	trace("exporturl== "+this.exportObj.exporturl);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "파일저장", "");            // 조회된 연계결과를 다운
        	var result = this.exportObj.exportData();
        };
        this.Export00_onsuccess = function (obj, e )
        {

        }


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

        this.listDept = function(){
        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 			+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD		+ "ª";
        	strParam += "SCHCD="		+ this.fv_SCHCD				+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD				+ "ª";

        	//alert(strParam);
        	//return false;

        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	//this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "학과리스트(검색)", "");

        	//trace(this.dsSchool.saveXML());
        	this.gfnTransaction("listDept",
        						"/swiss/gp/baserel/listDept.do",
        						"dsSearch=dsSearch",
        						"dsDept=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        this.listDncd = function(){
        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 			+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD		+ "ª";
        	strParam += "SCHCD="		+ this.fv_SCHCD				+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD				+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.gfnTransaction("getDayNight",
        						"/swiss/gp/baserel/listDncd.do",
        						"dsSearch=dsSearch",
        						"dsDncd=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        this.chkActive = function(){
        	var strParam = "";
        	strParam += "PAGEGROUP=GPª";
        	strParam += "PAGEID=" + this.fv_MENUID + "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	////trace(this.dsSearch.saveXML());
        	//alert(strParam);
        	//return false;

        	//alert("start active");

        	this.gfnTransaction("chkActive",
        						"/swiss/ad/user/chkActive.do",
        						"dsSearch=dsSearch",
        						"dsActive=dsResult",
        						"",
        						"fnCallback",
        						false);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fp03m00_onload,this);
            this.Div.form.stepArea00_00.form.gp01m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_00.form.gp02m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_00.form.gp03m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_00.form.gp04m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_00.form.gp05m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_00.form.gp06m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_00.form.gp07m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.sub_search.form.btn_search.addEventHandler("onclick",this.selectGpDeptList,this);
            this.Div.form.btn_xls.addEventHandler("onclick",this.btn_xls_onclick,this);
            this.Div.form.btn_submit.addEventHandler("onclick",this.btn_sumit_onclick,this);
        };

        this.loadIncludeScript("gp03m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
