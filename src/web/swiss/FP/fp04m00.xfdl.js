(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("fp04m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,850);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chgSchool", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"256\"/><Column id=\"UNIGRADECD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVPROSTATUSCD\" type=\"STRING\" size=\"256\"/><Column id=\"STATUSNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dayNight", this);
            obj._setContents("<ColumnInfo><Column id=\"DNCD\" type=\"STRING\" size=\"256\"/><Column id=\"DNNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"UNIQUEKEY\" type=\"STRING\" size=\"256\"/><Column id=\"STUDENTSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"256\"/><Column id=\"STUDENTNO\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JUMINNO\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SEXCD\" type=\"STRING\" size=\"256\"/><Column id=\"DNCD\" type=\"STRING\" size=\"256\"/><Column id=\"EXCHANGEYN\" type=\"STRING\" size=\"256\"/><Column id=\"ENTRANCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTRANCEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTRANCEYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREECD\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTERTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTERDATE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSave", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"UNIQUEKEY\" type=\"STRING\" size=\"256\"/><Column id=\"STUDENTSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"256\"/><Column id=\"STUDENTNO\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JUMINNO\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SEXCD\" type=\"STRING\" size=\"256\"/><Column id=\"DNCD\" type=\"STRING\" size=\"256\"/><Column id=\"EXCHANGEYN\" type=\"STRING\" size=\"256\"/><Column id=\"ENTRANCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTRANCEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTRANCEYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREECD\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTERTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTERDATE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch00", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSummary", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"DNCD\" type=\"STRING\" size=\"32\"/><Column id=\"ALDYEMPLYN\" type=\"STRING\" size=\"256\"/><Column id=\"UNIQUEKEY\" type=\"STRING\" size=\"32\"/><Column id=\"FORGCOMNM\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSETELNO\" type=\"STRING\" size=\"256\"/><Column id=\"HLTHINSSCBYN\" type=\"STRING\" size=\"32\"/><Column id=\"SCHWORKFORM\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"32\"/><Column id=\"SEXCD\" type=\"STRING\" size=\"256\"/><Column id=\"GOORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTGROUPNM\" type=\"STRING\" size=\"256\"/><Column id=\"EXCHANGEYN\" type=\"STRING\" size=\"32\"/><Column id=\"STUDENTNO\" type=\"STRING\" size=\"256\"/><Column id=\"STARTDT\" type=\"STRING\" size=\"256\"/><Column id=\"UNIGRADECD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"GOSCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHSTATCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOBILENO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAILADDR\" type=\"STRING\" size=\"256\"/><Column id=\"NACODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBDEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAWORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SAMEUNIVYN\" type=\"STRING\" size=\"256\"/><Column id=\"GOFORGSCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKHOUR\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISAYN\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD\" type=\"STRING\" size=\"32\"/><Column id=\"ENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISATYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMain", this);
            obj._setContents("<ColumnInfo><Column id=\"STUDENTNO\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"STUDENTSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"WORKDTHM\" type=\"DATETIME\" size=\"17\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"ERRDESC\" type=\"STRING\" size=\"32\"/><Column id=\"UNIQUEKEY\" type=\"STRING\" size=\"32\"/><Column id=\"ERRKINDNM\" type=\"STRING\" size=\"32\"/><Column id=\"ERRCD\" type=\"STRING\" size=\"256\"/><Column id=\"COLNM\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"32\"/><Column id=\"MODIFIERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"MODDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"ERRKIND\" type=\"STRING\" size=\"32\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDncd", this);
            obj._setContents("<ColumnInfo><Column id=\"CDTYPE\" type=\"STRING\" size=\"32\"/><Column id=\"CD\" type=\"STRING\" size=\"32\"/><Column id=\"CDKIND\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"CDENGNM\" type=\"STRING\" size=\"256\"/><Column id=\"ORDERSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"CDNM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fileDownList", this);
            obj._setContents("<ColumnInfo><Column id=\"SAVE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_FILE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsErr", this);
            obj._setContents("<ColumnInfo><Column id=\"ERRDESC\" type=\"STRING\" size=\"256\"/><Column id=\"ERRKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"ERRKINDCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsValid", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"256\"/><Column id=\"STUDENTNO\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JUMINNO\" type=\"STRING\" size=\"256\"/><Column id=\"DNCD\" type=\"STRING\" size=\"256\"/><Column id=\"EXCHANGEYN\" type=\"STRING\" size=\"256\"/><Column id=\"ENTRANCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTRANCEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTRANCEYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREECD\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTERTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTERDATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COLCD\">단과대학코드,required:true,maxlength:3</Col><Col id=\"DEPTCD\">학과코드,required:true,maxlength:12</Col><Col id=\"STUDENTNO\">학번,required:true,maxlengthB:200</Col><Col id=\"NAME\">이름,required:true,maxlengthB:200</Col><Col id=\"JUMINNO\">주민번호,required:true,maxlength:13</Col><Col id=\"DNCD\">주야코드,required:true,maxlength:2</Col><Col id=\"EXCHANGEYN\">외국인유학생여부,required:true,maxlength:1</Col><Col id=\"ENTRANCETYPE\">입학구분,required:true,maxlength:1</Col><Col id=\"ENTRANCEDATE\">입학년월일,required:true,date</Col><Col id=\"ENTRANCEYEAR\">입학학기,required:true,maxlength:5</Col><Col id=\"DEGREECD\">학위,입학년월일,required:true,maxlength:1</Col><Col id=\"REGISTERTYPE\">학적상태,required:true,maxlength:1</Col><Col id=\"REGISTERDATE\">학적변동발생일,required:true,date</Col><Col id=\"SCHCD\">학교코드,required:true,maxlength:8</Col><Col id=\"ORGCD\">본분교코드,required:true,maxlength:1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_regResult", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"ORGNM\" type=\"DATETIME\" size=\"17\"/><Column id=\"DEPTCD\" type=\"DATETIME\" size=\"17\"/><Column id=\"DEPTNM\" type=\"DATETIME\" size=\"17\"/><Column id=\"COLCD\" type=\"STRING\" size=\"32\"/><Column id=\"COLNM\" type=\"STRING\" size=\"32\"/><Column id=\"STUDENTNO\" type=\"STRING\" size=\"32\"/><Column id=\"NAME\" type=\"STRING\" size=\"32\"/><Column id=\"DNCD\" type=\"STRING\" size=\"256\"/><Column id=\"DNNM\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHYEAR\" type=\"STRING\" size=\"32\"/><Column id=\"SEXCD\" type=\"STRING\" size=\"256\"/><Column id=\"EXCHANGEYN\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fileDownTrans", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","842",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","20",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","840",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","840",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Div("stepArea00_00_00","30","20","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_cssclass("stepArea");
            this.Div.addChild(obj.name, obj);

            obj = new Static("fp01m00","0","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("조사현황");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            obj.set_font("normal 20px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Static("fp02m00","342","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("환경설정");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            obj.set_font("normal 20px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Static("fp03m00","171","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("연계결과");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            obj.set_font("normal 20px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Static("fp04m00","513","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00_00.form);
            obj.set_taborder("3");
            obj.set_text("정보등록");
            obj.set_cssclass("step01 on02");
            obj.set_cursor("pointer");
            obj.set_font("normal 20px/normal \"SpoqaHanSans-Bold\"");
            this.Div.form.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Static("fp05m00","1026","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00_00.form);
            obj.set_taborder("6");
            obj.set_text("결과조회");
            obj.set_cssclass("step01 last");
            obj.set_cursor("pointer");
            obj.set_font("normal 20px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Static("fp06m00","684","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("결과집계");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            obj.set_font("normal 20px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Static("fp07m00","855","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00_00.form);
            obj.set_taborder("5");
            obj.set_text("결과제출");
            obj.set_cssclass("step01 last");
            obj.set_cursor("pointer");
            obj.set_font("normal 20px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01","329","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea00_00_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","159","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea00_00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","842","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea00_00_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","1013","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea00_00_00.form);
            obj.set_taborder("13");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01","500","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea00_00_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("ico_step on02");
            this.Div.form.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","671","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea00_00_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("ico_step on02");
            this.Div.form.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Div("sub_research02","30","stepArea00_00_00:20","1200","95",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("8");
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
            obj.set_text("oo.2월, oo.08월 신편입");
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
            obj.set_text("ooo 7.13 ~ 2oo.7.23. (oo년 고등교육기관 신편입생수 조사)");
            obj.set_cssclass("reser_obj_result");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\"");
            this.Div.form.sub_research02.addChild(obj.name, obj);

            obj = new Div("sub_state","30","200","1200","40",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","30","0","50","30",null,null,null,null,null,null,this.Div.form.sub_state.form);
            obj.set_taborder("2");
            obj.set_text("학교명 :");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_state.addChild(obj.name, obj);

            obj = new Static("SCHTEXT","90","0","340","30",null,null,null,null,null,null,this.Div.form.sub_state.form);
            obj.set_taborder("3");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_text("oo대학교");
            this.Div.form.sub_state.addChild(obj.name, obj);

            obj = new Static("Static02","490","0","130","30",null,null,null,null,null,null,this.Div.form.sub_state.form);
            obj.set_taborder("0");
            obj.set_text("취업통계진행상태 :");
            obj.set_font("normal 16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_state.addChild(obj.name, obj);

            obj = new Static("state_result","630","0","440","30",null,null,null,null,null,null,this.Div.form.sub_state.form);
            obj.set_taborder("1");
            obj.set_text("oo요청");
            obj.set_cssclass("state_result");
            obj.set_font("normal 16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_state.addChild(obj.name, obj);

            obj = new Div("sub_file","30","sub_state:0","1200","52",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #a5a5a5");
            obj.set_cssclass("divFormR");
            obj.set_formscrolltype("none");
            this.Div.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","113","73",null,null,null,null,null,null,this.Div.form.sub_file.form);
            obj.set_taborder("0");
            obj.set_border("0px none");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_file.addChild(obj.name, obj);

            obj = new Static("Static00","30","10","62","30",null,null,null,null,null,null,this.Div.form.sub_file.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("파일등록");
            obj.set_textAlign("center");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_file.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","110","0","290","50",null,null,null,null,null,null,this.Div.form.sub_file.form);
            obj.set_taborder("1");
            obj.set_border("0px none");
            this.Div.form.sub_file.addChild(obj.name, obj);

            obj = new Button("btn_form","20","10","100","30",null,null,null,null,null,null,this.Div.form.sub_file.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("조사서식");
            obj.set_cssclass("btn_sty01");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_file.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_code","149","10","100","30",null,null,null,null,null,null,this.Div.form.sub_file.form.Div01.form);
            obj.set_taborder("3");
            obj.set_text("코드집");
            obj.set_cssclass("btn_sty01");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_file.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_xls_up","490","10","100","30",null,null,null,null,null,null,this.Div.form.sub_file.form);
            obj.set_taborder("2");
            obj.set_text("파일등록");
            obj.set_cssclass("btn_sty01");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_file.addChild(obj.name, obj);

            obj = new Button("btn_err_save","1130","450","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("10");
            obj.set_text("파일저장");
            obj.set_cssclass("btn_sty02");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Div("sub_fileErr","30","sub_file:20","1200","110",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #a5a5a5");
            obj.set_cssclass("divFormR");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","290","10","80","26",null,null,null,null,null,null,this.Div.form.sub_fileErr.form);
            obj.set_taborder("0");
            obj.set_text("제출인원수 :");
            obj.set_cssclass("fontC59");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_fileErr.addChild(obj.name, obj);

            obj = new Static("sta_01","Static00_00:20","10","120","30",null,null,null,null,null,null,this.Div.form.sub_fileErr.form);
            obj.set_taborder("1");
            obj.set_text("0");
            obj.set_cssclass("fontC59");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_fileErr.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_00_00","550","10","60","30",null,null,null,null,null,null,this.Div.form.sub_fileErr.form);
            obj.set_taborder("3");
            obj.set_text("오류건수 : ");
            obj.set_cssclass("fontC59");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_fileErr.addChild(obj.name, obj);

            obj = new Static("errCnt","Static00_00_01_00_00_00:20","10","120","30",null,null,null,null,null,null,this.Div.form.sub_fileErr.form);
            obj.set_taborder("4");
            obj.set_text("0");
            obj.set_cssclass("fontC59");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_fileErr.addChild(obj.name, obj);

            obj = new Static("set_dept_label","30","60","38","30",null,null,null,null,null,null,this.Div.form.sub_fileErr.form);
            obj.set_taborder("11");
            obj.set_text("학과");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_visible("true");
            this.Div.form.sub_fileErr.addChild(obj.name, obj);

            obj = new Edit("set_dept","set_dept_label:20","60","210","30",null,null,null,null,null,null,this.Div.form.sub_fileErr.form);
            obj.set_taborder("12");
            obj.set_accessibilitylabel("학과");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_visible("true");
            this.Div.form.sub_fileErr.addChild(obj.name, obj);

            obj = new Button("btn_errChk_search","1060","40","100","30",null,null,null,null,null,null,this.Div.form.sub_fileErr.form);
            obj.set_taborder("2");
            obj.set_text("검색");
            obj.set_cssclass("btn_sty01");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_fileErr.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_00_00_00","780","10","120","30",null,null,null,null,null,null,this.Div.form.sub_fileErr.form);
            obj.set_taborder("5");
            obj.set_text("확인건수(확인사항) : ");
            obj.set_cssclass("fontC59");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_fileErr.addChild(obj.name, obj);

            obj = new Static("err_chkCnt","Static00_00_01_00_00_00_00:20","10","120","30",null,null,null,null,null,null,this.Div.form.sub_fileErr.form);
            obj.set_taborder("6");
            obj.set_text("0");
            obj.set_cssclass("fontC59");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_fileErr.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","30","10","80","30",null,null,null,null,null,null,this.Div.form.sub_fileErr.form);
            obj.set_taborder("7");
            obj.set_text("연계인원수 :");
            obj.set_cssclass("fontC59");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_fileErr.addChild(obj.name, obj);

            obj = new Static("sta_00","Static00_00_00:20","10","120","30",null,null,null,null,null,null,this.Div.form.sub_fileErr.form);
            obj.set_taborder("8");
            obj.set_text("0");
            obj.set_cssclass("fontC59");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_fileErr.addChild(obj.name, obj);

            obj = new Static("sel_stu_nm_label","682","60","38","23",null,null,null,null,null,null,this.Div.form.sub_fileErr.form);
            obj.set_taborder("9");
            obj.set_text("이름");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_visible("false");
            this.Div.form.sub_fileErr.addChild(obj.name, obj);

            obj = new Edit("sel_stu_nm","sel_stu_nm_label:20","60","210","30",null,null,null,null,null,null,this.Div.form.sub_fileErr.form);
            obj.set_taborder("10");
            obj.set_accessibilitylabel("이름");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_visible("false");
            this.Div.form.sub_fileErr.addChild(obj.name, obj);

            obj = new Button("btn_search","1060","40","100","30",null,null,null,null,null,null,this.Div.form.sub_fileErr.form);
            obj.set_taborder("13");
            obj.set_text("검색");
            obj.set_cssclass("btn_sty01 btn_styLarge");
            obj.set_visible("false");
            this.Div.form.sub_fileErr.addChild(obj.name, obj);

            obj = new Static("sel_stu_no_label","356","60","62","30",null,null,null,null,null,null,this.Div.form.sub_fileErr.form);
            obj.set_taborder("15");
            obj.set_text("학번");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_visible("true");
            this.Div.form.sub_fileErr.addChild(obj.name, obj);

            obj = new Edit("sel_stu_no","sel_stu_no_label:20","60","210","30",null,null,null,null,null,null,this.Div.form.sub_fileErr.form);
            obj.set_taborder("14");
            obj.set_accessibilitylabel("학번");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_visible("true");
            this.Div.form.sub_fileErr.addChild(obj.name, obj);

            obj = new Grid("Grid_err","30","490","1200","330",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_binddataset("dsMain");
            obj.set_cssclass("grid_sty03");
            obj.set_autosizingtype("col");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"770\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"학과\"/><Cell col=\"2\" text=\"학번\"/><Cell col=\"3\" text=\"오류구분\"/><Cell col=\"4\" text=\"오류내용\"/></Band><Band id=\"body\"><Cell text=\"bind:RN\" autosizecol=\"limitmin\"/><Cell col=\"1\" text=\"bind:DEPTNM\" textAlign=\"left\" autosizecol=\"limitmin\"/><Cell col=\"2\" text=\"bind:STUDENTNO\" textAlign=\"left\" autosizecol=\"limitmin\"/><Cell col=\"3\" text=\"bind:ERRKINDNM\" textAlign=\"left\" autosizecol=\"limitmin\"/><Cell col=\"4\" text=\"bind:ERRDESC\" textAlign=\"left\" font=\"normal 14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\" autosizecol=\"default\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Div("pagingWrap","40","1406","1184","64",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_pagging","370","11","480","40",null,null,null,null,null,null,this.Div.form.pagingWrap.form);
            obj.set_taborder("0");
            obj.set_text("div_00");
            obj.set_url("CM::CmPagging.xfdl");
            obj.set_visible("false");
            this.Div.form.pagingWrap.addChild(obj.name, obj);

            obj = new Button("btn_con","790","450","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("11");
            obj.set_text("취업승인");
            obj.set_cssclass("btn_sty02");
            obj.set_visible("false");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_re","920","450","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("12");
            obj.set_text("취업반려");
            obj.set_cssclass("btn_sty02");
            obj.set_visible("false");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_sub","940","450","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("13");
            obj.set_text("정보제출");
            obj.set_cssclass("btn_sty02");
            obj.set_visible("false");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("Grid_rel","30","490","1200","330",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("14");
            obj.set_binddataset("ds_regResult");
            obj.set_autofittype("none");
            obj.set_cssclass("grid_sty03");
            obj.set_autosizingtype("none");
            obj.set_visible("false");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"107\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"120\"/><Column size=\"145\"/><Column size=\"132\"/><Column size=\"120\"/><Column size=\"137\"/><Column size=\"180\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"학교명\"/><Cell col=\"1\" text=\"본분교명\"/><Cell col=\"2\" text=\"단과대학명\"/><Cell col=\"3\" text=\"학과명\"/><Cell col=\"4\" text=\"주야간구분\"/><Cell col=\"5\" text=\"학번\"/><Cell col=\"6\" text=\"성명\"/><Cell col=\"7\" text=\"생년월일\"/><Cell col=\"8\" text=\"성별\"/><Cell col=\"9\" text=\"외국인유학생인여부\"/><Cell col=\"10\" text=\"입학구분\"/><Cell col=\"11\" text=\"입학학기\"/><Cell col=\"12\" text=\"입학연월일\"/><Cell col=\"13\" text=\"입학당시학위과정\"/><Cell col=\"14\" text=\"학적상태\"/><Cell col=\"15\" text=\"학적변동발생일\"/></Band><Band id=\"body\"><Cell text=\"bind:SCHNM\" wordWrap=\"char\"/><Cell col=\"1\" text=\"bind:ORGNM\" wordWrap=\"char\"/><Cell col=\"2\" text=\"bind:COLNM\" wordWrap=\"char\"/><Cell col=\"3\" text=\"bind:DEPTNM\" wordWrap=\"char\"/><Cell col=\"4\" text=\"bind:DNNM\" wordWrap=\"char\"/><Cell col=\"5\" text=\"bind:STUDENTNO\" wordWrap=\"char\"/><Cell col=\"6\" text=\"bind:NAME\" wordWrap=\"char\"/><Cell col=\"7\" text=\"bind:BIRTHYEAR\" wordWrap=\"char\"/><Cell col=\"8\" text=\"bind:SEXCD\" wordWrap=\"char\"/><Cell col=\"9\" text=\"bind:EXCHANGEYN\" wordWrap=\"char\"/><Cell col=\"10\" text=\"bind:ENTRANCETYPE_STR\" wordWrap=\"char\"/><Cell col=\"11\" text=\"bind:ENTRANCEYEAR\" wordWrap=\"char\"/><Cell col=\"12\" text=\"bind:ENTRANCEDATE\" wordWrap=\"char\"/><Cell col=\"13\" text=\"bind:DEGREECD_STR\" wordWrap=\"char\"/><Cell col=\"14\" text=\"bind:REGISTERTYPE_STR\" wordWrap=\"char\"/><Cell col=\"15\" text=\"bind:REGISTERDATE\" wordWrap=\"char\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Button("grid_err_btn","30","450","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("16");
            obj.set_text("오류내역");
            obj.set_cssclass("btn_sty01 btn_styLarge");
            obj.set_visible("true");
            this.Div.addChild(obj.name, obj);

            obj = new Button("grid_rel_btn","grid_err_btn:20","450","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("15");
            obj.set_text("정보조회");
            obj.set_cssclass("btn_sty01 btn_styLarge");
            obj.set_visible("true");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_rel_save","1130","450","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("17");
            obj.set_text("파일저장");
            obj.set_cssclass("btn_sty02");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_visible("false");
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
            this._addPreloadList("fdl","CM::CmPagging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("fp04m00.xfdl","CM::common.xjs");
        this.addIncludeScript("fp04m00.xfdl","CM::utl_script.xjs");
        this.registerScript("fp04m00.xfdl", function() {
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

        this.fv_SCHKINDCD = "";
        this.fv_DNCDstr ="";
        this.fv_AREACDstr ="";

        this.fv_COMUSERYN ="";  // 전산담당자 유무 -- 사용안함
        this.fv_CHGCOMYN =""; // 전산담당자 존재 유무(O)

        this.fv_SURVTERM =  "";
        this.fv_CHANGEYN = "";

        //페이징
        this.pageRowCnt = 20;
        this.totalRowCnt = 0;
        this.pageFirst = true;
        this.fv_MENUNM = "신입생정보>정보등록";
        var objApp 		= nexacro.getApplication();

        this.fnCallback = function(serviceID, errCD, errMSG){
        	var index = 0;

        	if(errCD < 0){
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceID == "getChargeSchoolList"){
        			this.Div.form.sub_state.form.SCHTEXT.set_text(this.ds_chgSchool.getColumn(0,"SCHNM")+" ("+this.ds_chgSchool.getColumn(0,"ORGNM")+")");
        			this.Div.form.sub_state.form.state_result.set_text(this.ds_chgSchool.getColumn(0,"STATUSNM"));
        		}

        		if(serviceID == "insertBatchAgRegist"){

        			var resultVal = objApp.gds_rtn_result.getColumn(0, "RESULTVAL");

        			if(resultVal =="7"){
        				this.Div.form.sub_state.form.state_result.set_text("취업/전산-신입생정보 등록");
        				this.ds_chgSchool.setColumn(index, "STATUSNM", "취업/전산-신입생정보 등록" );
        				this.ds_chgSchool.setColumn(index, "SURVPROSTATUSCD", "7" ); //수정요청
        			}
        			if(resultVal =="8"){
        				this.Div.form.sub_state.form.state_result.set_text("전산-신입생정보제출");
        				this.ds_chgSchool.setColumn(index, "STATUSNM", "전산-신입생정보제출" );
        				this.ds_chgSchool.setColumn(index, "SURVPROSTATUSCD", "8" ); //수정요청
        			}

        			// 오류 검색
        			this.Div.form.sub_fileErr.form.sel_stu_no.set_value("");
        			//this.btn_errChk_onclick(this.Div.form.sub_fileErr.form.btn_errChk_search);
        			this.lfn_listSaveError(1);
        			this.getErrCnt();

        			// 등록 알림 얼럿 처리
        			//alert( this.Div.form.sub_fileErr.form.sta_02.text ); // 조사등록건수

        			if( this.dsSummary.getColumn(0,"ERRCHKCNT") == "0" &&  this.dsSummary.getColumn(0,"ERRCNT") == "0" ){
        				this.alert("파일이 정상적으로 등록되었습니다.");
        				this.showFPreginfo();
        			}else if( this.dsSummary.getColumn(0,"ERRCNT") != "0"){ //오류
        				this.alert("파일등록중 오류가 발생했습니다. 수정 후 다시 업로드해주세요.");
        				this.hideFPreginfo();
        			}else if( this.dsSummary.getColumn(0,"ERRCHKCNT") != "0" &&  this.dsSummary.getColumn(0,"ERRCNT") == "0"){ //확인사항
        				this.alert("파일이 정상적으로 등록되었습니다. 확인사항을 검토해주세요.");
        				this.hideFPreginfo();
        			}
        		}
        		if(serviceID == "getErrCnt"){
        			// 등록 오류 개수
        			var resultVal = objApp.gds_rtn_result.getColumn(0, "RESULTVAL");
        			this.fv_ERRCNT  = resultVal;
        		}
        		if(serviceID == "listSaveError"){
        			this.totalRowCnt = this.dsPage.getColumn(0, "TOTALPAGECNT");    //토탈 등록 건수
        			if(this.pageFirst)this.paggingInit();
        			var errallcnt = this.dsSummary.getColumn(0,"ERRALLCNT");		// 전체 오류 + 확인 건수
        			var errchkcnt = this.dsSummary.getColumn(0,"ERRCHKCNT");		//  "1" 확인사항
        			var regcnt = this.dsSummary.getColumn(0,"REGCNT");				// 조사등록건수
        			var errcnt = this.dsSummary.getColumn(0,"ERRCNT");				// "2" 오류사항 건수

        			this.Div.form.sub_fileErr.form.sta_01.set_text(regcnt); // 제출인원수
        			this.Div.form.sub_fileErr.form.err_chkCnt.set_text(errchkcnt);  // 확인 건수
        			this.Div.form.sub_fileErr.form.errCnt.set_text(errcnt); // 오류건수

        			if(this.dsMain.getRowCount() < 1){
        				//alert("조회된 자료가 없습니다.");
        			}

        		}

        		if(serviceID == "insertSurvFinish"){
        			var resultVal = objApp.gds_rtn_result.getColumn(0, "RESULTVAL");

        			if( resultVal !="Y"){
        				this.alert("등록에 실패 했습니다.");
        			}else{
        				this.alert("등록 되었습니다.");
        			}
        		}
        		if(serviceID == "listAGinfo"){
        			trace(this.dsOutExcel.saveXML());
        			this.lfn_excelOutputSave();
        		}

        		if(serviceID == "getDayNight"){
        			this.fv_DNCDstr = "";
        			for (var i = 0; i < this.ds_dayNight.rowcount; i++) {
        				this.fv_DNCDstr += "_" +this.ds_dayNight.getColumn(i, "DNCD"); // 주야간
        			}
        			this.fv_DNCDstr += "_";
        		}

        		if(serviceID == "getComUserYn"){
        			// 전산담당자 유무
        			var resultVal = objApp.gds_rtn_result.getColumn(0, "RESULTVAL");
        			if( resultVal =="Y"){
        				this.fv_COMUSERYN ="Y";
        			}else{
        				this.fv_COMUSERYN ="N";
        			}
        			this.lfn_listSaveError(1);//오류테이블 조회
        		}

        		if(serviceID == "getTargetCnt"){  // 연계인원수
        			var resultVal = objApp.gds_rtn_result.getColumn(0, "RESULTVAL"); // 연계인원수
        			this.Div.form.sub_fileErr.form.sta_00.set_text(resultVal); // 연계인원수
        		}
        		if(serviceID == "statusSave"){//

        			var resultVal = objApp.gds_rtn_result.getColumn(0, "RESULTVAL");

        			if( resultVal !="Y"){
        				this.alert("처리에 실패 했습니다.");
        			}else{
        					 if(this.fv_STATUSCD =="9"){
        						//this.alert("취업담당자에게 파일을 제출했습니다.");
        						this.alert("전산담당자의 제출 정보를 승인하였습니다.");
        					 }
        					 if(this.fv_STATUSCD =="10"){
        						this.alert("반려 처리 되었습니다. 전산담당자는 다시 파일등록 후 제출해야 합니다.");
        					 }
        					 if(this.fv_STATUSCD =="8"){
        						//this.alert("전산담당자의 제출 정보를 승인하였습니다.");
        						this.alert("취업담당자에게 파일을 제출했습니다.");
        					 }
        			}
        			// 상태 변경
        			this.getFpSchStatus();
        		}
        		if(serviceID == "selectFPReginfo"){//진행 테이블 값이 안뜸

        			//this.Div.form.sub_state.form.state_result.set_text( this.ds_chgSchool.getColumn(this.Div.form.sub_search.form.sel_school.index, "SURVPROSTATUSNM")  );
        			// 현재 진행 상태 불러오기
        			this.getFpSchStatus();
        		}
        		if(serviceID == "getFpSchStatus"){//진행

        			var resultTxt = objApp.gds_rtn_result.getColumn(0, "RESULTTXT");
        			if(this.fv_SURVTERM != "Y") resultTxt = resultTxt + " (조사기간 아님)" ;
        			this.Div.form.sub_state.form.state_result.set_text( resultTxt );

        			if(this.fv_USERGRPTYPE =="4"){
        				if(this.fv_CHGCOMYN =="1" ){
        					this.Div.form.btn_con.set_visible(true);
        					this.Div.form.btn_re.set_visible(true);
        				}else{
        					this.Div.form.btn_con.set_visible(false);
        					this.Div.form.btn_re.set_visible(false);
        				}
        			}
        			if(this.fv_USERGRPTYPE =="5"){
        				if(this.fv_CHGCOMYN =="1" ){
        					this.Div.form.btn_sub.set_visible(true);
        				}else{
        					this.Div.form.btn_sub.set_visible(false);
        				}
        			}
        			if(this.fv_CHANGEYN =="Y"){
        				this.lfn_enableBtn();
        			}
        			this.getErrCnt();
        			//this.lfn_listSaveError();
        		}
         	}
        }

        this.fp04m00_onload = function(obj,e)
        {

        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='FP'",0);

        	this.fv_USERID     = objApp.gds_login_info.getColumn(idx, "USERID") ;
        	this.fv_SURVKINDCD = objApp.gds_login_info.getColumn(idx, "SURVKINDCD");
        	this.fv_CHANGEYN   = objApp.gds_login_info.getColumn(0, "CHANGEYN");
        	this.fv_USERGRPTYPE = objApp.gds_login_info.getColumn(idx, "USERGRPTYPE");

        	this.fv_SCHCD      = objApp.gds_param.getColumn(0, "SCHCD");
        	this.fv_ORGCD      = objApp.gds_param.getColumn(0, "ORGCD");
        	this.fv_SURVPROSTATUSCD = objApp.gds_param.getColumn(0, "SURVPROSTATUSCD");

        	this.fileDownTrans.setPostData("BASE_DIR", "");
        	this.fileDownTrans.set_url("svcBaseUrl::swiss/hp/com/downloadFileDoc.do");

        	this.lfn_divSurvSet();
        	this.lfn_listSaveError(1);//오류테이블 조회
        	this.getChargeSchoolList();  // 담당 학교 목록
        	this.fv_CHGCOMYN = this.ds_chgSchool.getColumn(0,"CHGCOMYN");//전산담당자유무
        	this.getDayNight();  // 주야간 구분코드...
        	this.getTargetCnt();  // 연계인원수

        	if( this.dsSummary.getColumn(0,"ERRCNT") == "0" &&
        	    (this.fv_SURVPROSTATUSCD == 7 || this.fv_SURVPROSTATUSCD == 8 || this.fv_SURVPROSTATUSCD == 9 || this.fv_SURVPROSTATUSCD == 11 || this.fv_SURVPROSTATUSCD == 12)
        	){
        		this.showFPreginfo();
        	} else {
        		this.hideFPreginfo();
        	}

        	if(this.fv_CHANGEYN =="Y"){
        		this.lfn_enableBtn();
        	}

        };

        // 결과조회 보이고 오류내역 숨기기
        this.showFPreginfo = function(){
        	this.Div.form.Grid_err.set_visible(false);                            //오류내역 숨기기
        	this.Div.form.sub_fileErr.form.btn_errChk_search.set_visible(false);  //오류검색 버튼 숨기기
        	this.Div.form.btn_err_save.set_visible(false);                        //파일저장(오류)버튼 숨기기

        	this.Div.form.Grid_rel.set_visible(true);                             //결과조회 보이기
        	this.Div.form.sub_fileErr.form.btn_search.set_visible(true);          //결과조회 검색버튼 보이기
        	this.Div.form.btn_rel_save.set_visible(true);                         //파일저장(조회)버튼 보이기
        	this.Div.form.sub_fileErr.form.sel_stu_nm.set_visible(true);          //검색창에 이름 인풋박스 보이기
        	this.Div.form.sub_fileErr.form.sel_stu_nm_label.set_visible(true);    //검색창에 이름 인풋라벨 보이기
        	this.selectFPReginfo();
        };

        // 결과조회 숨기고 오류내역 보이기
        this.hideFPreginfo = function(){
        	this.Div.form.Grid_err.set_visible(true);                             //오류내역 보이기
        	this.Div.form.sub_fileErr.form.btn_errChk_search.set_visible(true);   //오류검색 버튼 보이기
        	this.Div.form.btn_err_save.set_visible(true);                         //파일저장(오류)버튼 보이기

        	this.Div.form.sub_fileErr.form.sel_stu_nm.set_visible(false);         //검색창에 이름 인풋박스 숨기기
        	this.Div.form.sub_fileErr.form.sel_stu_nm_label.set_visible(false);   //검색창에 이름 인풋라벨 숨기기
        	this.Div.form.Grid_rel.set_visible(false);                            //결과조회 숨기기
        	this.Div.form.sub_fileErr.form.btn_search.set_visible(false);         //결과조회 검색버튼 숨기기
        	this.Div.form.btn_rel_save.set_visible(false);                        //파일저장(조회)버튼 숨기기
        	this.Div.form.btn_con.set_visible(false);							  //취업승인 버튼숨기기
            this.Div.form.btn_re.set_visible(false);                              //취업반려 버튼숨기기
        	this.Div.form.btn_sub.set_visible(false);                             //정보제출 버튼숨기기
        	this.lfn_listSaveError(1);
        };


        // 검색용 학교목록 가져 옴
        this.getChargeSchoolList = function(){

        	var strParam = "";
        	strParam += "tmp="	           	    + "a" 		            + "ª";
        	strParam += "STATUSparamCD="		+ "0082" 		        + "ª";  // 신입 상태 파람
        	strParam += "SURVSEQ="		        +  this.fv_SURVSEQ 	    + "ª";
        	strParam += "SURVKINDCD="		    +  this.fv_SURVKINDCD 	+ "ª";
        	strParam += "SCHCD="			    +  this.fv_SCHCD 		+ "ª";
        	strParam += "ORGCD="			    +  this.fv_ORGCD 		+ "ª";
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
        this.selectFPReginfo = function(){
        	var index  =  0;

        	var strParam = "";
        	strParam += "tmp="		        + "a" 		            + "ª";
        	strParam += "SURVSEQ="		    + this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="   	+ this.fv_SURVKINDCD	+ "ª";
        	strParam += "SCHCD="			+ this.fv_SCHCD			+ "ª";
        	strParam += "ORGCD="			+ this.fv_ORGCD			+ "ª";
        	strParam += "DEPTNM="		    + this.Div.form.sub_fileErr.form.set_dept.value		    + "ª";
        	strParam += "STUDENTNO="		+ this.Div.form.sub_fileErr.form.sel_stu_no.value		+ "ª";
        	strParam += "STUDENTNAME="		+ this.Div.form.sub_fileErr.form.sel_stu_nm.value		+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "검색(정보조회)", strParam);  //결과조회
        	this.gfnTransaction("selectFPReginfo",
        						"/swiss/fp/insertrel/selectFPReginfo.do",
        						"dsSearch=dsSearch",
        						"ds_regResult=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        // 상태 처리 결과조회
        this.statusSave = function()
        {
        	var index =  0;
        	var strParam = "";
        	strParam += "tmp="		    + "a" 		            + "ª";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD	+ "ª";

        	strParam += "SCHCD="		+ this.fv_SCHCD			+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD			+ "ª";
        	strParam += "RCEPTCN="		+ this.fv_RCEPTCN		+ "ª";
        	strParam += "STATUSCD="		+ this.fv_STATUSCD		+ "ª";	// 상태 - 연계결과  수정요청
        	//alert(this.ORGCD.value);

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	if(this.fv_STATUSCD == "9"){
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "취업승인", strParam);
        	}else if(this.fv_STATUSCD == "10"){
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "취업반려", strParam);
        	}else if(this.fv_STATUSCD == "8"){
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "정보제출", strParam);
        	}
        	this.gfnTransaction("statusSave",
        						"/swiss/fp/insertrel/saveSurvHist.do",
        						"dsSearch=dsSearch",
        						"gds_rtn_result=dsResult",
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

        //  등록 오류 개수 가져오기 결과조회
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


        // 주야간코드 가져오기
        this.getDayNight = function(){

        	var strParam = "";
        	strParam += "tmp="		        + "a" 		            + "ª";
        	strParam += "SURVSEQ="		    +  this.fv_SURVSEQ   	+ "ª";
        	strParam += "SURVKINDCD="		+  this.fv_SURVKINDCD 	+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.gfnTransaction("getDayNight",
        						"/swiss/fp/baserel/getDayNight.do",
        						"dsSearch=dsSearch",
        						"ds_dayNight=dsResult",
        						"",
        						"fnCallback",
        						false);

        }



        // 연계인원수
        this.getTargetCnt = function(){

        	var index = 0;
        	var SCHCD = this.ds_chgSchool.getColumn(index, "SCHCD"); // 학교코드
        	var ORGCD = this.ds_chgSchool.getColumn(index, "ORGCD");// 본분교

        	var strParam = "";
        	strParam += "tmp="		    + "a" 		            + "ª";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD	+ "ª";
        	strParam += "SCHCD="		+ SCHCD		            + "ª";
        	strParam += "ORGCD="		+ ORGCD		            + "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.gfnTransaction("getTargetCnt",
        						"/swiss/fp/baserel/getTargetCnt.do",
        						"dsSearch=dsSearch",
        						"gds_rtn_result=dsResult",
        						"",
        						"fnCallback",
        						false);

        }

        ////////excel start/////////////////////////////////////////////////////////////////
        //excel upload
        this.url  = "svcBaseUrl::XExportImport.do";
        this.btn_xls_up_onclick = function(obj,e)
        {

        	if(this.fv_SURVTERM !=  "Y"){
        		this.alert("선택된 학교는 조사기간이 아닙니다.");
        		return;
        	}

        	if(this.fv_USERGRPTYPE =="4" && this.fv_CHGCOMYN =="1"){
        		this.alert("전산담당자가 존재 합니다. 전산담당자에게 요청해 주세요.");
        		return;
        	}
        	if(this.fv_USERGRPTYPE =="5" && this.fv_CHGCOMYN =="2"){
        		this.alert("전산담당자는 등록 권한이 없습니다.");
        		return;
        	}

        	var index = 0;
        	var SURVPROSTATUSCD = this.ds_chgSchool.getColumn(index, "SURVPROSTATUSCD");  // 상태코드

        	if( SURVPROSTATUSCD == "1"  ||   SURVPROSTATUSCD =="2"  ||   SURVPROSTATUSCD =="3" ){
        		this.alert("등록가능한 상태가 아닙니다. 연계결과에서 학과정보 제출을 해주세요.");
        		return;
        	}

        	if(this.fv_USERGRPTYPE =="5" && ( SURVPROSTATUSCD =="1" ||   SURVPROSTATUSCD =="2"  ||   SURVPROSTATUSCD =="3"  ||   SURVPROSTATUSCD =="4" ) ){
        		this.alert(" 취업담당자가 환경설정 페이지에서 \n [자료등록 요청하기]를 클릭하지 않은 상태 입니다.");
        		return;
        	}

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

        	// 전산담당 등록
        	if(this.fv_USERGRPTYPE =="5" ){
        		if( SURVPROSTATUSCD =="6" ||  SURVPROSTATUSCD =="7"  ||  SURVPROSTATUSCD =="8"  ||  SURVPROSTATUSCD =="10" ){
        		}else{
        			this.alert("등록가능한 상태가 아닙니다.");
        			return;
        		}
        	}

        	// 취업담당자 등록
        	if(this.fv_USERGRPTYPE =="4" ){
        		if( SURVPROSTATUSCD != "4"  && SURVPROSTATUSCD != "7"    &&  SURVPROSTATUSCD != "11"  ){
        			this.alert("등록가능한 상태가 아닙니다.");
        			return;
        		}
        	}

        	this.importObj = new nexacro.ExcelImportObject("Import00",this);
        	this.importObj.set_importtype(nexacro.ImportTypes.EXCEL);
        	this.importObj.addEventHandler("onsuccess", this.Import00_onsuccess, this);
        	this.importObj.addEventHandler("onerror", this.Import00_onerror, this);
        	this.importObj.set_importurl(this.url);
        	this.importObj.importData("", "[command=getsheetdata;output=outDs;body=Sheet1!A1;]", "[dsExcel=outDs]");

        };
        //onsuccess Event
        this.Import00_onsuccess = function(obj,  e)
        {

        	//trace("임포트성공");
        	this.dsExcel.deleteRow(0);

        	//trace(this.dsExcel.saveXML());
        	this.lfn_excelSave();

        }

        //onerror Event
        this.Import00_onerror = function(obj,  e)
        {
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "임포트실패", "");  //임포트 실패
        	trace("임포트실패");
        }

        this.lfn_excelSave = function()
        {

        	var index =  0;
        	var SCHCD = this.ds_chgSchool.getColumn(index, "SCHCD"); // 학교코드
        	var SCHCDparam = SCHCD ;
        	var ORGCD = this.ds_chgSchool.getColumn(index, "ORGCD");// 본분교
        	var ORGCDparam = ORGCD ;
        	var UNIGRADECD = this.ds_chgSchool.getColumn(index, "UNIGRADECD");// 학교등급 대학원/ 대학교

        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		        + "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD	        + "ª";
        	strParam += "SCHCD="		+ SCHCD                         + "ª";
        	strParam += "ORGCD="		+ ORGCD                         + "ª";
        	strParam += "WORKERID="		+ this.fv_USERID				+ "ª";
        	strParam += "UNIGRADECD="	+ UNIGRADECD			        + "ª";  //// 대학/대학원   대학원 : 2

        	dsParamSetArrowBlank(this.dsSearch00, strParam);

        	if(this.dsExcel.rowcount == 0){
        		this.alert("입력할 엑셀파일을 선택하세요");
        		return;
        	}

        	trace(this.dsExcel.saveXML());
        	this.Div.form.sub_fileErr.form.sta_01.set_text(this.dsExcel.rowcount);  // 엑셀 전체 목록

        	this.dsSave.clearData();
        	this.dsErr.clearData();

        	var DEPTCD           ="";
        	var STUDENTNOinfo    ="";
        	var DETAILDEPTNM_str ="";

        	// 해더 항목은 제고 되며 실 데이터만 들어가고 있음.....

        	for (var i = 0; i < this.dsExcel.rowcount; i++) {
        		var nRow = this.dsSave.addRow();
        		this.dsSave.copyRow(nRow,this.dsExcel,i," SCHCD=Column0 , ORGCD=Column1,COLCD=Column2,DEPTCD=Column3,DNCD=Column4,STUDENTNO=Column5,NAME=Column6,JUMINNO=Column7,ENTRANCETYPE=Column8,ENTRANCEYEAR=Column9,ENTRANCEDATE=Column10,DEGREECD=Column11,REGISTERTYPE=Column12,REGISTERDATE=Column13");
        		this.dsSave.addColumn("SURVSEQ","STRING");
        		this.dsSave.setColumn(i,"SURVSEQ",this.fv_SURVSEQ );
        		this.dsSave.addColumn("SURVKINDCD","STRING");
        		this.dsSave.setColumn(i,"SURVKINDCD",this.fv_SURVKINDCD );
        		this.dsSave.addColumn("WORKERID","STRING");
        		this.dsSave.setColumn(i,"WORKERID",this.fv_USERID );

        		var cline = i + 2;

        		var SCHCD        = this.dsSave.getColumn(i, "SCHCD");        // 학교코드
        		var ORGCD        = this.dsSave.getColumn(i, "ORGCD");        // 본분교코드
        		var COLCD        = this.dsSave.getColumn(i, "COLCD");        // 단과대학코드
        		var DNCD         = this.dsSave.getColumn(i, "DNCD");         // 주야간코드
        		var DEPTCD       = this.dsSave.getColumn(i, "DEPTCD");       // 학과코드
        		var STUDENTNO    = this.dsSave.getColumn(i, "STUDENTNO");    // 학생번호
        		var NAME         = this.dsSave.getColumn(i, "NAME");         // 성명
        		var JUMINNO      = this.dsSave.getColumn(i, "JUMINNO");      // 주민등록번호
        		var vJUMINNO     = this.dsSave.getColumn(i, "JUMINNO");
        		var ENTRANCETYPE = this.dsSave.getColumn(i, "ENTRANCETYPE"); // 입학구분
        		var ENTRANCEYEAR = this.dsSave.getColumn(i, "ENTRANCEYEAR"); // 입학학기
        		var ENTRANCEDATE = this.dsSave.getColumn(i, "ENTRANCEDATE"); // 입학년월일
        		var DEGREECD     = this.dsSave.getColumn(i, "DEGREECD");     // 입학당시학위과정
        		var REGISTERTYPE = this.dsSave.getColumn(i, "REGISTERTYPE"); // 학적상태
        		var REGISTERDATE = this.dsSave.getColumn(i, "REGISTERDATE"); // 학적변동일


        		STUDENTNOinfo = "(학생번호 : " + STUDENTNO+ ") - " + cline +"라인";// 학생번호 인로 추가 -------------------------------------


        		if(SCHCDparam != SCHCD ){
        			this.lfn_setErr("조사대상학교의 학교코드("+SCHCDparam+")와 일치하지 않습니다. " + STUDENTNOinfo);
        		}
        		if(ORGCDparam != ORGCD ){
        			this.lfn_setErr("조사대상학교의 본분교교코드("+ORGCDparam+")와 일치하지 않습니다. " + STUDENTNOinfo);
        		}


        		// ----------------------------------- null 체크 -----------
         		if(SCHCD == "" || SCHCD == " " || SCHCD ==null ){
        			this.lfn_setErr("학교코드가 누락되어 있습니다. 반드시 입력해주세요. " + STUDENTNOinfo);
        		}else{
        			if(SCHCD.length != 8){
        				this.lfn_setErr("학교코드를 8자리로 입력해주세요. " + STUDENTNOinfo);
        			}
        		}
        		if(ORGCD == "" || ORGCD == " " || ORGCD  ==null ){
        			this.lfn_setErr("본분교코드가 누락되어 있습니다. 반드시 입력해주세요.  " + STUDENTNOinfo);
        		}else{
        			if(ORGCD.length != 1){
        				this.lfn_setErr("본분교코드를 1자리로 입력해주세요.  " + STUDENTNOinfo);
        			}
        		}
        		if(COLCD == "" || COLCD == " " || COLCD ==null ){
        			this.lfn_setErr("단과대학코드가 누락되어 있습니다. 반드시 입력해주세요.  " + STUDENTNOinfo);
        		}else{
        			if(COLCD.length > 3){
        				this.lfn_setErr("단과대학코드를 3자 이하로 입력 해 주세요. " + STUDENTNOinfo);
        			}
        		}
        		if(DNCD == "" || DNCD == " " || DNCD ==null ){
        			this.lfn_setErr("주야간구분이 누락되어 있습니다. 반드시 입력해주세요.   " + STUDENTNOinfo);
        		}else{
        			if(DNCD.length > 2){
        				this.lfn_setErr("주야간구분을 2자 이하로 입력 해 주세요. " + STUDENTNOinfo);
        			}
        		}

        		if(DEPTCD  == "" || DEPTCD  == " " || DEPTCD  ==null ){
        			this.lfn_setErr("학과코드 누락되어 있습니다. 반드시 입력해주세요.  " + STUDENTNOinfo);
        		}else{
        			if(DEPTCD.length != 12){
        				this.lfn_setErr("학과코드를 12자리로 입력해주세요.  " + STUDENTNOinfo);
        			}
        		}
        		if(STUDENTNO  == "" || STUDENTNO  == " " || STUDENTNO  ==null ){
        			this.lfn_setErr("학번이 누락되어 있습니다. 반드시 입력해주세요.  " + STUDENTNOinfo);
        		}
        		if(NAME == "" || NAME == " " || NAME  ==null ){
        			this.lfn_setErr("성명이 누락되어 있습니다. 반드시 입력해주세요.  " + STUDENTNOinfo);
        		}
        		if(JUMINNO == "" || JUMINNO == " " || JUMINNO ==null ){
        			this.lfn_setErr("주민등록번호가 누락되어 있습니다. 반드시 입력해주세요.  " + STUDENTNOinfo);
        		}
        		if(ENTRANCETYPE == "" || ENTRANCETYPE == " " || ENTRANCETYPE ==null ){
        			this.lfn_setErr("입학구분이 누락되어 있습니다. 반드시 입력해주세요.  " + STUDENTNOinfo);
        		}else{
        			if(ENTRANCETYPE.length != 1){
        				this.lfn_setErr("입학구분을 1자리로 입력해주세요." + STUDENTNOinfo);
        			}
        		}
        		if(ENTRANCEYEAR == "" || ENTRANCEYEAR == " " || ENTRANCEYEAR ==null ){
        			this.lfn_setErr("입학학기가 누락되어 있습니다. 반드시 입력해주세요.  " + STUDENTNOinfo);
        		}else{
        			if(ENTRANCEYEAR.length != 5){
        				this.lfn_setErr("입학학기를 5자리로 입력해주세요." + STUDENTNOinfo);
        			}
        		}
        		if(ENTRANCEDATE == "" || ENTRANCEDATE == " " || ENTRANCEDATE  ==null ){
        			this.lfn_setErr("입학연월일이 누락되어 있습니다. 반드시 입력해주세요.   " + STUDENTNOinfo);
        		}else{
        			if(ENTRANCEDATE.length != 8){
        				this.lfn_setErr("입학년월일을 8자리로 입력해주세요." + STUDENTNOinfo);
        			}
        		}
        		if(DEGREECD  == "" || DEGREECD  == " " || DEGREECD  ==null ){
        			this.lfn_setErr("입학당시학위과정이 누락되어 있습니다. 반드시 입력해주세요.  " + STUDENTNOinfo);
        		}else{
        			if(DEGREECD.length != 1){
        				this.lfn_setErr("입학당시학위과정을 1자리로 입력해주세요." + STUDENTNOinfo);
        			}
        		}
        		if(REGISTERTYPE  == "" || REGISTERTYPE  == " " || REGISTERTYPE  ==null ){
        			this.lfn_setErr("학적상태가 누락되어 있습니다. 반드시 입력해주세요. " + STUDENTNOinfo);
        		}else{
        			if(REGISTERTYPE.length != 1){
        				this.lfn_setErr("학적상태를 1자리로 입력 해 주세요." + STUDENTNOinfo);
        			}
        		}
        		/*if(REGISTERDATE == "" || REGISTERDATE ==null ){
        			this.alert("학적변동일을 입력해주세요.  \n" + STUDENTNOinfo);
        			return;
        		}*/



        		var regexp = /^[0-9]*$/ ; // 숫자만
        		//var pattern_spc = /[~!@#$%^&*()_+|<>?:{}\[\]'".]/; // 특수문자
        		var pattern_spc = /[~!@#$%^&*()_+|<>?:{}\[\]'".]/; // 특수문자
        		var pattern_spc02 = /[~!@#$%^&*_+|<>?:{}\[\]'"]/; // 특수문자
        		var special_pattern = /^[ㄱ-ㅎ|가-힣|a-z|A-Z| ]+$/; // 한글 영문만 공백허용
        		var regType1 = /^[A-Za-z0-9+]*$/;  //영문숫자


        		// 특수문자 체크 ---------------------------------------------------------------
        		if(pattern_spc.test( DEPTCD )) {
        			//this.alert("학과코드에 특수문자가 존재합니다. \n" + STUDENTNOinfo);
        			//return;
        			this.lfn_setErr("학과코드에 특수문자가 존재합니다.  " + STUDENTNOinfo);
        		}
        		if(!special_pattern.test( NAME )) {
        			this.lfn_setErr("성명은 한글과 영문만 등록 가능합니다.  " + STUDENTNOinfo);
        		}
        		if( STUDENTNO != ""  &&   STUDENTNO !=null){
        			if(!regType1.test( STUDENTNO )) {
        				this.lfn_setErr("학생번호는 영문과 숫자만 등록 가능합니다.  " + STUDENTNOinfo);
        			}
        		}

        		// 숫자 -----------------------------------------------------------------
        		if(!regexp.test( ORGCD )) {
        			//this.alert("올바른 본분교코드를 입력해주세요. \n" + STUDENTNOinfo);
        		}

        		if(!regexp.test( COLCD )) {
        			this.lfn_setErr("올바른 단과대학코드를 입력해주세요.  " + STUDENTNOinfo);
        		}

        		if(!regexp.test( DNCD )) {
        			//this.lfn_setErr("올바른 주야간구분을 입력해주세요.  " + STUDENTNOinfo);
        		}

        		if(!regexp.test( JUMINNO )) {
        			this.lfn_setErr("주민등록번호는 13자리 숫자로 입력해주세요.  " + STUDENTNOinfo);
        		}
        		if(!regexp.test( ENTRANCETYPE )) {
        			this.lfn_setErr("올바른 입학구분 형식이 아닙니다.  " + STUDENTNOinfo);
        		}
        		if(!regexp.test( ENTRANCEYEAR )) {
        			this.lfn_setErr("올바른 입학학기 형식이 아닙니다.  " + STUDENTNOinfo);
        		}
        		if(!regexp.test( ENTRANCEDATE )) {
        			this.lfn_setErr("입학년월일을 YYYYMMDD형식으로 입력해주세요.  " + STUDENTNOinfo);
        		}
        		if(!regexp.test( DEGREECD )) {
        			this.lfn_setErr("입학당시학위과정을 숫자로 입력 해 주세요.  " + STUDENTNOinfo);
        		}
        		if(!regexp.test( REGISTERTYPE )) {
        			this.lfn_setErr("올바른 학적상태 형식이 아닙니다.  " + STUDENTNOinfo);
        		}

        		// 학과코드 -------------------------------

        		if(!regType1.test( DEPTCD )) {
        			this.lfn_setErr("올바른 학과코드를 입력해주세요.   " + STUDENTNOinfo);
        		}

        		// 주야코드 -------------------------------
        		if (this.fv_DNCDstr.indexOf("_"+DNCD+"_")<0 ){
        			this.lfn_setErr("올바른 주야간구분를 입력해주세요.   " + STUDENTNOinfo);
        		}

        		// 학생번호 -------------------------------
        		if( STUDENTNO != ""  &&   STUDENTNO !=null){
        			var STUDENTNOLen = STUDENTNO.length;
        			if( STUDENTNOLen < 5 ){
        				this.lfn_setErr("올바른 학생번호를 입력해주세요.  " + STUDENTNOinfo);
        			}
        		}

        		// 이름 -------------------------------
        		if( NAME != ""  &&   NAME !=null){
        		    var NameTrim = NAME.trim();
        			var NAMELen = NameTrim.length;
        			if( NAMELen < 2 ){
        				this.lfn_setErr("올바른 성명을 입력해주세요.  " + STUDENTNOinfo);
        			}
        		}

        		//주민등록번호 -------------------------------
        		if( JUMINNO != ""  &&   JUMINNO !=null){
        			var juminLen = JUMINNO.length;
        			//alert(juminLen);
        			if( juminLen != 13 ){
        				this.lfn_setErr("주민등록번호는 13자리 숫자로 입력해주세요.  " + STUDENTNOinfo);
        			}


        			// 주민번호 체크
        			/*
        			if( vJUMINNO.substring(6,7) >='1' &&  vJUMINNO.substring(6,7) <='4' ){
        			// 내국인
        				var jChk = this.chkJuminNo(JUMINNO,11);
        				if(jChk == "N"){
        					this.lfn_setErr("올바른 주민등록번호를 입력해주세요. " + STUDENTNOinfo);
        				}
        			}else{
        			// 외국인
        				//2. 외국인번호중 끝에서 2번째 자리가 8인 경우  → 유효성 검증 실시X
        				//3. 외국인번호중 끝 6자리가 모두 0일때  → 유효성 검증 실시X
        				if( vJUMINNO.substr(12, 1) == "8" || vJUMINNO.substr(7, 6) =="000000"){
        				}else{
        					var jChk = this.chkJuminNo(JUMINNO,13);
        					if(jChk == "N"){
        						this.lfn_setErr("올바른 주민등록번호를 입력해주세요.   " + STUDENTNOinfo);
        					}
        				}

        			}
        			*/

        			//alert(juminLen);
        			if( juminLen != 13 ){
        				this.lfn_setErr("주민등록번호는 13자리 숫자로 입력해주세요.  " + STUDENTNOinfo);
        			}

        			// 주민번호 체크
        			if( vJUMINNO.substring(6,7) >='1' &&  vJUMINNO.substring(6,7) <='4' ){
        				if(vJUMINNO.substring(6,7) == '1' || vJUMINNO.substring(6,7) == '2'){
        					// 내국인
        					var jChk = this.chkJuminNo(JUMINNO,11);
        					if(jChk == "N"){
        						this.lfn_setErr("올바른 주민등록번호를 입력해주세요.  " + STUDENTNOinfo);
        					}
        				} // 2000년생 이후(성별'3','4')는 chkJuminNo 검증함수가 오류를 내어 제외함.
        			}else{
        			// 외국인
        				//2. 외국인번호중 끝에서 2번째 자리가 8인 경우  → 유효성 검증 실시X
        				//3. 외국인번호중 끝 6자리가 모두 0일때  → 유효성 검증 실시X



        				/*
        				if( vJUMINNO.substr(1, 1) == "8" || vJUMINNO.substr(7, 6) =="000000" || vJUMINNO.substr(7, 6) =="000080"){

        				}else{
        					var jChk = this.chkJuminNo(JUMINNO,13);
        					if(jChk == "N"){
        						this.lfn_setErr("올바른 주민등록번호를 입력해주세요.  " + STUDENTNOinfo);
        					}
        				}
        				*/

        			}

        			// 주민번호 체크('0','9'(1800년대 성별코드) 제외 2021-02-01 yyz)
        			if( vJUMINNO.substring(6,7) =='0' ||  vJUMINNO.substring(6,7) =='9' ){
        				this.lfn_setErr("올바른 주민등록번호를 입력해주세요.  " + STUDENTNOinfo);
        			}

        			/*
        			//---------var juminRule = /^(?:[0-9]{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[1,2][0-9]|3[0,1]))-[1-4][0-9]{6}$/;  //주민번호
        			var juminRule = /^(?:[0-9]{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[1,2][0-9]|3[0,1]))[1-4][0-9]{6}$/;  //주민번호
        			if(!juminRule.test( JUMINNO)) {
        					juminRule = /^(?:[0-9]{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[1,2][0-9]|3[0,1]))[5-8][0-9]{6}$/;  //외국인 등록번호
        					if(!juminRule.test( JUMINNO)) {
        						this.lfn_setErr("올바른 주민등록번호를 입력해주세요.  " + STUDENTNOinfo);
        					}
        			}*/

        		}

        		// 입학구분 -------------------------------
        		if( ENTRANCETYPE > 5 || ENTRANCETYPE < 1 ){
        			this.lfn_setErr("입학구분를 1~5 사이의 숫자로 입력 해 주세요.  " + STUDENTNOinfo);
        		}


        		//입학학기 -------------------------------
        		if( ENTRANCEYEAR != ""  &&   ENTRANCEYEAR !=null){
        			var ENTRANCEYEARLen = ENTRANCEYEAR.length;
        			//alert(juminLen);
        			if( ENTRANCEYEARLen != 5 ){
        				//this.alert("입학학기는 5자리 숫자로 입력해주세요. \n" + STUDENTNOinfo);
        				//return;
        				this.lfn_setErr("입학학기는 5자리 숫자로 입력해주세요.  " + STUDENTNOinfo);
        			}
        			// 입학학기 전년 2학기 당해년 1,2학기 ex)2021년1월 조사 : 20192,20201,20202 3개학기만 존재 해야 함
        			var ENTRANCEYEARyear3 = "20"+ ( eval(this.fv_SURVSEQ.substring(0,2) ) - 1 ) +"2 , 20"+ ( eval(this.fv_SURVSEQ.substring(0,2) ) - 0 ) +"1 ,20"+ ( eval(this.fv_SURVSEQ.substring(0,2) ) - 0 ) +"2";
        			var ENTRANCEYEARyear3String = "_20"+ ( eval(this.fv_SURVSEQ.substring(0,2) ) - 1 ) +"2_20"+ ( eval(this.fv_SURVSEQ.substring(0,2) ) - 0 ) +"1_20"+ ( eval(this.fv_SURVSEQ.substring(0,2) ) - 0 ) +"2_";

        			if (ENTRANCEYEARyear3String.indexOf("_"+ENTRANCEYEAR+"_")<0 ){
        				//this.alert(ENTRANCEYEARyear3 + "학기만 등록가능합니다. \n" + STUDENTNOinfo)
        				//return;
        				this.lfn_setErr(ENTRANCEYEARyear3 + "학기만 등록가능합니다.  " + STUDENTNOinfo);
        			}

        		}



        		//입학년월일 -------------------------------
        		if( ENTRANCEDATE != ""  &&   ENTRANCEDATE !=null){
        			var ENTRANCEDATELen = ENTRANCEDATE.length;
        			//alert(juminLen);
        			if( ENTRANCEDATELen != 8 ){
        				this.lfn_setErr("입학년월일을 YYYYMMDD형식으로 입력해주세요.  " + STUDENTNOinfo);
        			}
        			// 입학년월일 전년 2학기 당해년 1,2학기 ex)2021년1월 조사 : 20192,20201,20202 3개학기만 존재 해야 함
        			var ENTRANCEDATEstart = "20"+ ( eval(this.fv_SURVSEQ.substring(0,2) ) - 1 ) +"0701";
        			var ENTRANCEDATEemd = "20"+ ( eval(this.fv_SURVSEQ.substring(0,2) ) - 0 ) +"0930";
        			//alert(ENTRANCEDATEstart);
        			//alert(ENTRANCEDATEemd);

        			if (    ENTRANCEDATE >= ENTRANCEDATEstart   &&  ENTRANCEDATE <= ENTRANCEDATEemd   ){
        			}else{
        				this.lfn_setErr("입학년월일은 (" + ENTRANCEDATEstart + "~" + ENTRANCEDATEemd + ") 사이 날짜만 입력가능합니다.    " + STUDENTNOinfo);
        			}
        		}

        		// 학위  대학원 : 전문학사(1), 학사(2)  인경우 ---------------1전문학사,2학사,3학석사통합과정,4석사과정,5박사과정,6석박사통
        		var index =  0;
        		var UNIGRADECD = this.ds_chgSchool.getColumn(index, "UNIGRADECD"); // 대학/대학원   대학원 : 2
        		if( UNIGRADECD == "1"   ){
        			if(  DEGREECD != "1" && DEGREECD != "2" && DEGREECD != "3"   ){
        				this.lfn_setErr("올바른 입학당시학위과정 형식이 아닙니다.  " + STUDENTNOinfo);
        			}
        		}
        		if( UNIGRADECD == "2"   ){
        			if(  DEGREECD != "3" && DEGREECD != "4" && DEGREECD != "5" && DEGREECD != "6"   ){
        				this.lfn_setErr("올바른 입학당시학위과정 형식이 아닙니다.  " + STUDENTNOinfo);
        			}
        		}
        		if( DEGREECD > 6 || DEGREECD < 1 ){
        			this.lfn_setErr("입학당시학위과정을 1~6 사이의 숫자로 입력 해 주세요.  " + STUDENTNOinfo);
        		}


        		//학적상태 -----------------------------------------------------------1재학,2휴학,3제적,4졸업,5학사학위졸업유예
        		if( REGISTERTYPE > 5 || REGISTERTYPE < 1){
        			this.lfn_setErr("올바른 학적상태 형식이 아닙니다.  " + STUDENTNOinfo);
        		}
        		if( REGISTERTYPE >= 2 ){
        			var REGISTERDATE = this.dsSave.getColumn(i, "REGISTERDATE"); // 학적변동발생일

        			if(REGISTERDATE == "" || REGISTERDATE ==null ){
        				this.lfn_setErr("학적상태에 따른 학적변동 발생일을 입력해주세요.   " + STUDENTNOinfo);
        			}else{

        					var ENTRANCEDATEstart = "20"+ ( eval(this.fv_SURVSEQ.substring(0,2) ) - 1 ) +"0701";
        					var ENTRANCEDATEemd = "20"+ ( eval(this.fv_SURVSEQ.substring(0,2) ) - 0 ) +"1231";
        					// 학적변동일 ---------------------------------------------------------
        					if(!regexp.test( REGISTERDATE )) {
        						this.lfn_setErr("올바른 학적변동발생일 형식이 아닙니다.  " + STUDENTNOinfo);
        					}
        					if( REGISTERDATE.length != 8){
        						this.lfn_setErr("올바른 학적변동발생일 형식이 아닙니다. " + STUDENTNOinfo);
        					}
        					if (    REGISTERDATE >= ENTRANCEDATEstart   &&  REGISTERDATE <= ENTRANCEDATEemd   ){
        					}else{
        						this.lfn_setErr("학적변동발생일은 (" + ENTRANCEDATEstart + "~" + ENTRANCEDATEemd + ") 사이 날짜만 입력 가능합니다. " + STUDENTNOinfo);
        					}

        					if( REGISTERDATE < ENTRANCEDATE){
        						this.lfn_setErr("학적변동일을 올바르게 입력해주세요( 입학일 이후일자) " + STUDENTNOinfo);
        					}
        			}

        		}
        		if( REGISTERTYPE == 1 ){
        			// 학적상태가 1이라도 검증
        			if(REGISTERDATE != "" && REGISTERDATE !=null ){
        						this.lfn_setErr("학적상태가 재학중입니다. 학적변동 발생일을 삭제 또는 학적상태를 변경해주세요.  " + STUDENTNOinfo);
        			}
        		}

        		if( JUMINNO != ""  &&   JUMINNO !=null){

        			//성별등록  -----------------------------------------------------------
        			var vSEXCD ="";
        			if(vJUMINNO && (vJUMINNO.substring(6,7)=='1' || vJUMINNO.substring(6,7)=='3' || vJUMINNO.substring(6,7)=='5')  || vJUMINNO.substring(6,7)=='7')
        				vSEXCD ="1";
        			else if(vJUMINNO && (vJUMINNO.substring(6,7)=='2' || vJUMINNO.substring(6,7)=='4' || vJUMINNO.substring(6,7)=='6') || vJUMINNO.substring(6,7)=='8')
        				vSEXCD ="2";
        			this.dsSave.setColumn(i,"SEXCD",vSEXCD );

        			// 외국인 여부 (5~8)  -----------------------------------------------
        			if( vJUMINNO.substring(6,7) >='5' &&  vJUMINNO.substring(6,7) <='8' ){
        				this.dsSave.setColumn(i,"EXCHANGEYN","1" );
        			}else{
        				this.dsSave.setColumn(i,"EXCHANGEYN","2" );
        			}
        		}

        	}  // end for

        	//alert(this.dsErr.rowcount);
        	if(this.dsErr.rowcount>0){
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "파일등록 오류", strParam);  //파일등록 오류
        		this.fn_err_pop();  // 클라이언트 오류시 팝업 호출
        		return;
        	}
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "파일등록", strParam);  //파일등록
        	this.gfnTransaction("insertBatchAgRegist",
        						"/swiss/fp/baserel/insertBatchFgRegist.do",
        						"dsSearch=dsSave dsSearch00=dsSearch00",
        						"gds_rtn_result=dsResult",
        						"",
        						"fnCallback",
        						false);
        };
        ////////excel end /////////////////////////////////////////////////////////////////

        // 주민번호 검증
        this.chkJuminNo = function(ssn,chkNum)
        {
        		//var aa = ssn.substr(1, 1);
        		//var bb = ssn.substr(7, 6);
        		//alert(aa + "-"+ bb);
                var s1  = Number(ssn.substr(0, 1))  * 2;
                var s2  = Number(ssn.substr(1, 1))  * 3;
                var s3  = Number(ssn.substr(2, 1))  * 4;
                var s4  = Number(ssn.substr(3, 1))  * 5;
                var s5  = Number(ssn.substr(4, 1))  * 6;
                var s6  = Number(ssn.substr(5, 1))  * 7;
                var s7  = Number(ssn.substr(6, 1))  * 8;
                var s8  = Number(ssn.substr(7, 1))  * 9;
                var s9  = Number(ssn.substr(8, 1))  * 2;
                var s10 = Number(ssn.substr(9, 1))  * 3;
                var s11 = Number(ssn.substr(10, 1)) * 4;
                var s12 = Number(ssn.substr(11, 1)) * 5;
                var s13 = Number(ssn.substr(12, 1));

                var result = s1 + s2 + s3 + s4 + s5 + s6 + s7 + s8 + s9 + s10 + s11 + s12;

                var result = result % 11;

                var result = chkNum - result;    // 내국인 11 외국인 13 에서 결과를 뺀다

                if(result >= 10) result = result % 10;

        		var val = "N";
                if(s13 == result){
        			val =  "Y"; // 올바른 주민등록번호 입니다.");
                }else{
        			val =  "N"; // 올바른 주민번호 아님
        		}

        		return val;
        }


        //오류 팝업 start ==========================================
        this.fn_err_pop = function(){
        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("error_pop"
        	                  , 0
        					  , 0
        					  , 600
        					  , 520
        					  , null
        					  , null
        					  , "CM::CMErrorView.xfdl");
        	objChildFrame.set_showtitlebar(false);
        	objChildFrame.set_dragmovetype("all");
        	objChildFrame.set_openalign("center middle");
        	objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)")
        	var objParam = {param1:this.dsErr,SURVSEQ:this.fv_SURVSEQ, SURVKINDCD:this.fv_SURVKINDCD, MENUNM:this.fv_MENUNM};
        	objChildFrame.showModal(this.getOwnerFrame()
        	                      , objParam
        						  , this
        						  , null);
        }
        // 오류 데이터셋 담기
        this.lfn_setErr = function(str)
        {
        	var nRow = this.dsErr.addRow();
        	this.dsErr.setColumn(nRow,"ERRDESC",str);
        }


        // 학번 중복체크 검증
        this.gfn_DupCheck = function(kornm, engnm)
        {
        	var ret=true;
        	var dupStr = "";
        	var isKey = true;

        	for(var i=0; i < this.dsExcel.rowcount; i++){
        		if(!this.dsSave.getColumn(i,engnm)){
        			isKey = false;
        		}
        		var nStr = this.dsSave.getColumn(i,engnm);
        		var nRow = this.dsSave.findRowExpr(engnm+"=="+"'"+nStr+"'",i+1);

        		if(nRow != -1){
        			dupStr = dupStr + "["+nStr+"]"
        		}
        	}
        	if(!isKey){
        		alert(kornm+"은(는) 필수 입력사항입니다.");
        		ret=false;
        	}
        	if(dupStr != ""){
        		alert(dupStr + kornm+"에 중복된 값이 존재 합니다.");
        		ret=false;
        	}

        	return ret;
        }

        //오류 체크
        this.btn_errChk_onclick = function(obj,e)
        {
        	this.pageFirst = true;
        	this.lfn_listSaveError(1);
        	this.getErrCnt();
        	if(this.dsMain.getRowCount() < 1){
        		alert("조회된 자료가 없습니다.");
        	}
        };

        this.lfn_listSaveError = function(sPage){
        	//alert(1);
        	var start = (sPage - 1) * this.pageRowCnt + 1;
        	var end = sPage * this.pageRowCnt;

        	var strParam = "";
        	strParam += "START=" + start + "ª";
        	strParam += "END=" + end + "ª";

        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD	+ "ª";
        	strParam += "SCHCD="		+ this.fv_SCHCD	        + "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD      	+ "ª";

        	strParam += "STUDENTNO="	+ this.Div.form.sub_fileErr.form.sel_stu_no.value	    + "ª";
        	strParam += "DEPTNM="		+ this.Div.form.sub_fileErr.form.set_dept.value		    + "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "검색(오류내역)", strParam);  //오류내역 조회
        	this.gfnTransaction("listSaveError",
        						"/swiss/fp/baserel/listSaveFpError.do",
        						"dsSearch=dsSearch",
        						"dsMain=dsResult dsPage=dsPage dsSummary=dsSummary",
        						"",
        						"fnCallback",
        						false);
        }
        // 페이지 초기화 함수!!
        this.paggingInit = function(){

        	this.Div.form.pagingWrap.form.div_pagging.form.initPages(this.totalRowCnt, this.pageRowCnt); // 전체DATA CNT, 페이지출력수
        	this.Div.form.pagingWrap.form.div_pagging.form.setPage(1);
        }


        // 페이징 완료후 처리
        this.setPageAfter = function (nPage){
        	if(!this.pageFirst)this.lfn_listSaveError(nPage);
        	this.pageFirst = false;
        }


        this.btn_form_onclick = function(obj,e)
        {

        	this.ds_fileDownList.clearData();

        	var nRow = this.ds_fileDownList.addRow();

        	//alert( nexacro.getEnvironment().services["svcBaseUrl"].url );

        	var svcBaseUrl = nexacro.getEnvironment().services["svcBaseUrl"].url;
        	var downUrl ="doc";
        	if (svcBaseUrl.indexOf("localhost") > 0 ){
        			 downUrl = "C:/eGovFrameDev-3.8.0-64bit/server/apache-tomcat-9.0.31/webapps/swiss/docdown/";
        	}

        	this.ds_fileDownList.setColumn(nRow, "SAVE_PATH", downUrl );
         	this.ds_fileDownList.setColumn(nRow, "SAVE_FILE_NAME", "FPsurvForm.xlsx");
         	this.ds_fileDownList.setColumn(nRow, "REAL_FILE_NAME", "신입생-조사서식.xlsx");
        	//trace(this.ds_fileDownList.saveXML());
        	// 서버로 전송할 파일정보 셋팅
        	this.fileDownTrans.setPostData("fileInfo", this.ds_fileDownList.saveXML());
        	this.fileDownTrans.set_downloadfilename(this.ds_fileDownList.getColumn(0, "REAL_FILE_NAME"));

        	// 파일 다운로드 실행
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "조사서식", "");  //조사서식 다운로드
        	this.fileDownTrans.download();
        };

        this.btn_code_onclick = function(obj,e)
        {
        	this.ds_fileDownList.clearData();

        	var nRow = this.ds_fileDownList.addRow();

        	//alert( nexacro.getEnvironment().services["svcBaseUrl"].url );

        	var svcBaseUrl = nexacro.getEnvironment().services["svcBaseUrl"].url;
        	var downUrl ="doc";
        	if (svcBaseUrl.indexOf("localhost") > 0 ){
        			 downUrl = "C:/eGovFrameDev-3.8.0-64bit/server/apache-tomcat-9.0.31/webapps/swiss/docdown/";
        	}

        	//trace( nexacro.getEnvironment().services["svcBaseUrl"].url+"docdown/");
        	//this.ds_fileDownList.setColumn(nRow, "SAVE_PATH", nexacro.getEnvironment().services["svcBaseUrl"].url+"docdown/");
        	this.ds_fileDownList.setColumn(nRow, "SAVE_PATH", downUrl );
         	this.ds_fileDownList.setColumn(nRow, "SAVE_FILE_NAME", "FPsurvCode.hwp");
         	this.ds_fileDownList.setColumn(nRow, "REAL_FILE_NAME", "신입생정보-조사코드.hwp");
        	//trace(this.ds_fileDownList.saveXML());
        	// 서버로 전송할 파일정보 셋팅
        	this.fileDownTrans.setPostData("fileInfo", this.ds_fileDownList.saveXML());
        	this.fileDownTrans.set_downloadfilename(this.ds_fileDownList.getColumn(0, "REAL_FILE_NAME"));

        	// 파일 다운로드 실행
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "코드집", "");  //코드집 다운로드
        	this.fileDownTrans.download();

        };

        // 상태 전산제출 결과조회
        this.btn_sub_onclick = function(obj,e)
        {
        	if(this.fv_SURVTERM !=  "Y"){
        		this.alert("선택된 학교는 조사기간이 아닙니다.");
        		return;
        	}
        	//alert(this.fv_ERRCNT);
        	if( this.fv_ERRCNT != "0"){
        		this.alert("등록된 자료에 오류건이 "+this.fv_ERRCNT+"건 존재합니다. 정보재등록 후 진행 해 주세요.");
        		return;
        	}

        	if(!this.confirm("인적정보를 취업담당자에게 제출하시겠습니까?")){
        		return;
        	}


        	var index =  0;
        	var SURVPROSTATUSCD = this.ds_chgSchool.getColumn(index, "SURVPROSTATUSCD");  // 상태코드
        	//alert(SURVPROSTATUSCD);
        	//return;


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
        	// 조건
        	if(  SURVPROSTATUSCD != "7"  ){
        		this.alert("신입생정보 등록 상태에서만 제출이 가능합니다. 파일을 등록해주세요.");
        		return;
        	}



        	this.fv_RCEPTCN = "" ;
        	this.fv_STATUSCD = "8";  //전산-신입생정보 제출
        	this.statusSave();
        };
        // 상태 승인 결과조회
        this.btn_con_onclick = function(obj,e)
        {
        		if(this.fv_SURVTERM !=  "Y"){
        			this.alert("선택된 학교는 조사기간이 아닙니다.");
        			return;
        		}

        	if( this.fv_ERRCNT != "0"){
        		this.alert("등록된 자료에 오류건이 "+this.fv_ERRCNT+"건 존재합니다. 정보재등록 후 진행 해 주세요.");
        		return;
        	}

        	if(!this.confirm("승인하시겠습니까?")){
        		return;
        	}


        	var index =  0;
        	var SURVPROSTATUSCD = this.ds_chgSchool.getColumn(index, "SURVPROSTATUSCD");  // 상태코드
        	//alert(SURVPROSTATUSCD);
        	//return;

        	/*
        	0082	조사상태코드(신편입생정보)	1	미제출
        	0082	조사상태코드(신편입생정보)	2	수정요청
        	0082	조사상태코드(신편입생정보)	3	수정완료
        	0082	조사상태코드(신편입생정보)	4	KEDI검토(신편입생수)  ------
        	0082	조사상태코드(신편입생정보)	5	KEDI반려(신편입생수)
        	0082	조사상태코드(신편입생정보)	6	전산-인적정보요청  ----------
        	0082	조사상태코드(신편입생정보)	7	취업/전산-인적정보등록  ----------
        	0082	조사상태코드(신편입생정보)	8	전산-인적정보제출    -----------
        	0082	조사상태코드(신편입생정보)	9	취업-인적정보승인
        	0082	조사상태코드(신편입생정보)	10	취업-인적정보반려
        	0082	조사상태코드(신편입생정보)	11	취업-인적정보KEDI제출
        	0082	조사상태코드(신편입생정보)	12	KEDI승인(인적정보)
        	0082	조사상태코드(신편입생정보)	13	인적정보KEDI반려
        	0082	조사상태코드(신편입생정보)	14	반려-인적정보재제출    --- 사용안함
        	*/

        	//alert(SURVPROSTATUSCD);
        	// 조건
        	if(  SURVPROSTATUSCD != "8" ){
        		this.alert("전산담당자가 파일을 제출하지 않았습니다.");
        		return;
        	}



        	this.fv_RCEPTCN = "" ;
        	this.fv_STATUSCD = "9";
        	this.statusSave();
        };
        // 상태 반려 결과조회
        this.btn_re_onclick = function(obj,e)
        {
        		if(this.fv_SURVTERM !=  "Y"){
        			this.alert("선택된 학교는 조사기간이 아닙니다.");
        			return;
        		}

        	if(!this.confirm("반려하시겠습니까?")){
        		return;
        	}

        	var index =  0;
        	var SURVPROSTATUSCD = this.ds_chgSchool.getColumn(index, "SURVPROSTATUSCD");  // 상태코드
        	//alert(SURVPROSTATUSCD);
        	//return;

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
        	// 조건  전산-인적정보제출 / 인적정보KEDI반려
        	if(  SURVPROSTATUSCD != "9" &&  SURVPROSTATUSCD != "11" ){
        		this.alert("취업승인 및 인적정보KEDI제출 상태에서만 반려가 가능합니다.");
        		return;
        	}


        	this.fv_RCEPTCN = "" ;
        	this.fv_STATUSCD = "10";
        	this.statusSave();
        };


        // 엑셀다운로드
        this.btn_xls_onclick = function(obj,e)
        {
        	//alert(this.ds_regResult.getRowCount());
        	if(this.dsMain.getRowCount()==0){
        		alert("저장할 데이터가 없습니다.");
        		return;
        	}

        	this.exportObj = new ExcelExportObject();
        	//오류내역 파일저장
        	this.exportObj.addEventHandler("onsuccess", this.Export00_onsuccess, this);
        	this.exportObj.set_exporttype(nexacro.ExportTypes.EXCEL2007);
        	this.exportObj.set_exportactivemode( "active" );
        	this.exportObj.set_exporturl("svcBaseUrl::XExportImport.do");
        	this.exportObj.set_exportfilename("오류내역");
        	//trace(this.exportObj.exportfilename);

        	this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div.form.Grid_err, "Sheet1!A1", "allrecord", "allrecord", "suppress", "allstyle","none","none","both");

        	this.exportObj.set_exporteventtype("itemrecord");
        	this.exportObj.set_exportuitype("exportprogress");
        	this.exportObj.set_exportmessageprocess("%d[%d/%d]");
        	trace("exporturl== "+this.exportObj.exporturl);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "오류내역 파일저장", "");//오류내역 파일저장
        	var result = this.exportObj.exportData();

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

        this.Div_grid_err_btn_onclick = function(obj,e)//오류내역 조회 버튼
        {
        	if( this.dsSummary.getColumn(0,"ERRCHKCNT") == "0" &&  this.dsSummary.getColumn(0,"ERRCNT") == "0" ){
        		//오류 없이 등록 되었을 때
        		this.alert("오류 내역이 없습니다.");
        		this.hideFPreginfo();//오류내역 보이고 결과조회 숨기는
        	}else if( this.dsSummary.getColumn(0,"ERRCNT") != "0"){
        		//오류가 발생 했을 때
        		this.hideFPreginfo();//오류내역 보이고 결과조회 숨기는
        	}else if( this.dsSummary.getColumn(0,"ERRCHKCNT") != "0" &&  this.dsSummary.getColumn(0,"ERRCNT") == "0"){
        		//오류는 없으나 확인사항이 있을 때
        		this.hideFPreginfo();//오류내역 보이고 결과조회 숨기는
        	}else{
        	}
        };

        this.Div_grid_rel_btn_onclick = function(obj,e)//결과조회 버튼
        {
        	if( this.dsSummary.getColumn(0,"ERRCHKCNT") == "0" &&  this.dsSummary.getColumn(0,"ERRCNT") == "0" ){
        		//오류 없이 등록 되었을 때
        		this.showFPreginfo();//결과조회
        	}else if( this.dsSummary.getColumn(0,"ERRCNT") != "0"){
        		//오류가 발생 했을 때
        		this.hideFPreginfo();//오류내역
        		this.alert("파일 등록 중 오류가 발생했습니다. 정보 조회를 할 수 없습니다.");
        	}else if( this.dsSummary.getColumn(0,"ERRCHKCNT") != "0" &&  this.dsSummary.getColumn(0,"ERRCNT") == "0"){
        		//오류는 없으나 확인사항이 있을 때
        		this.showFPreginfo();//결과조회
        	}else{
        	}
        };

        this.Div_sub_fileErr_btn_search_onclick = function(obj,e)
        {
        	this.selectFPReginfo();
        	if(this.ds_regResult.getRowCount() < 1){
        		alert("조회된 자료가 없습니다.");
        	}
        };

        this.btn_rel_save_onclick = function(obj,e)
        {
        	if(this.ds_regResult.getRowCount()==0){
        		alert("저장할 데이터가 없습니다.");
        		return;
        	}
        	this.exportObj = new ExcelExportObject();
        	//결과조회 파일저장
        	this.exportObj.addEventHandler("onsuccess", this.Export00_onsuccess, this);
        	this.exportObj.set_exporttype(nexacro.ExportTypes.EXCEL2007);
        	this.exportObj.set_exportactivemode( "active" );
        	this.exportObj.set_exporturl("svcBaseUrl::XExportImport.do");
        	this.exportObj.set_exportfilename("신편입생 결과조회");
        	//trace(this.exportObj.exportfilename);


        	this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div.form.Grid_rel, "Sheet1!A1", "allrecord", "allrecord", "suppress", "allstyle","none","none","both");

        	this.exportObj.set_exporteventtype("itemrecord");
        	this.exportObj.set_exportuitype("exportprogress");
        	this.exportObj.set_exportmessageprocess("%d[%d/%d]");
        	trace("exporturl== "+this.exportObj.exporturl);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "결과조회 파일저장", "");  //결과조회 파일저장
        	var result = this.exportObj.exportData();
        };

        this.searchEnter = function(obj,e)
        {
        	var isShowingErr = this.Div.form.sub_fileErr.form.btn_errChk_search.visible;

        	if(e.keycode == nexacro.Event.KEY_ENTER){
        		if(isShowingErr){
        			this.btn_errChk_onclick(this.Div.form.sub_fileErr.form.btn_errChk_search);
        		}else{
        			this.Div_sub_fileErr_btn_search_onclick(this.Div.form.sub_fileErr.form.btn_search);
        		}
        	}
        };

        this.lfn_enableBtn = function(){
        	this.utlf_enableBtn(this.Div,false);

        	this.Div.form.sub_fileErr.form.btn_errChk_search.set_enable(true);
        	this.Div.form.grid_err_btn.set_enable(true);
        	this.Div.form.grid_rel_btn.set_enable(true);
        	this.Div.form.btn_rel_save.set_enable(true);
        	this.Div.form.btn_err_save.set_enable(true);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fp04m00_onload,this);
            this.Div.form.stepArea00_00_00.form.fp01m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_00_00.form.fp02m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_00_00.form.fp03m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_00_00.form.fp04m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_00_00.form.fp05m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_00_00.form.fp06m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_00_00.form.fp07m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.sub_state.form.Static00.addEventHandler("onclick",this.Div_Static00_01_onclick,this);
            this.Div.form.sub_file.form.Div01.form.btn_form.addEventHandler("onclick",this.btn_form_onclick,this);
            this.Div.form.sub_file.form.Div01.form.btn_code.addEventHandler("onclick",this.btn_code_onclick,this);
            this.Div.form.sub_file.form.btn_xls_up.addEventHandler("onclick",this.btn_xls_up_onclick,this);
            this.Div.form.btn_err_save.addEventHandler("onclick",this.btn_xls_onclick,this);
            this.Div.form.sub_fileErr.form.Static00_00.addEventHandler("onclick",this.Div_sub_fileErr_Static00_00_onclick,this);
            this.Div.form.sub_fileErr.form.set_dept.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.sub_fileErr.form.btn_errChk_search.addEventHandler("onclick",this.btn_errChk_onclick,this);
            this.Div.form.sub_fileErr.form.Static00_00_01_00_00_00_00.addEventHandler("onclick",this.Div_sub_fileErr_Static00_00_01_00_00_00_00_onclick,this);
            this.Div.form.sub_fileErr.form.Static00_00_00.addEventHandler("onclick",this.Div_sub_fileErr_Static00_00_onclick,this);
            this.Div.form.sub_fileErr.form.sel_stu_nm.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.sub_fileErr.form.btn_search.addEventHandler("onclick",this.Div_sub_fileErr_btn_search_onclick,this);
            this.Div.form.sub_fileErr.form.sel_stu_no.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.btn_con.addEventHandler("onclick",this.btn_con_onclick,this);
            this.Div.form.btn_re.addEventHandler("onclick",this.btn_re_onclick,this);
            this.Div.form.btn_sub.addEventHandler("onclick",this.btn_sub_onclick,this);
            this.Div.form.grid_err_btn.addEventHandler("onclick",this.Div_grid_err_btn_onclick,this);
            this.Div.form.grid_rel_btn.addEventHandler("onclick",this.Div_grid_rel_btn_onclick,this);
            this.Div.form.btn_rel_save.addEventHandler("onclick",this.btn_rel_save_onclick,this);
        };

        this.loadIncludeScript("fp04m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
