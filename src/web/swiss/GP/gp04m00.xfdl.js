(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("gp04m00");
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
            obj._setContents("<ColumnInfo><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"256\"/><Column id=\"UNIGRADECD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVPROSTATUSCD\" type=\"STRING\" size=\"256\"/><Column id=\"STATUSNM\" type=\"STRING\" size=\"256\"/><Column id=\"SCHKINDCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dayNight", this);
            obj._setContents("<ColumnInfo><Column id=\"DNCD\" type=\"STRING\" size=\"256\"/><Column id=\"DNNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_areaSchCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"UNIQUEKEY\" type=\"STRING\" size=\"256\"/><Column id=\"STUDENTSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"256\"/><Column id=\"STUDENTNO\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JUMINNO\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SEXCD\" type=\"STRING\" size=\"256\"/><Column id=\"DNCD\" type=\"STRING\" size=\"256\"/><Column id=\"EXCHANGEYN\" type=\"STRING\" size=\"256\"/><Column id=\"ENTRANCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTRANCEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTRANCEYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREECD\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTERTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTERDATE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSave", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"STUDENTSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"256\"/><Column id=\"COLNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"DNCD\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILDEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREECD\" type=\"STRING\" size=\"256\"/><Column id=\"SUBDEPTCD\" type=\"STRING\" size=\"256\"/><Column id=\"SUBDEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"MULTIDEPTCD\" type=\"STRING\" size=\"256\"/><Column id=\"MULTIDEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"INYM\" type=\"STRING\" size=\"256\"/><Column id=\"OUTYM\" type=\"STRING\" size=\"256\"/><Column id=\"OUTGRACE\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSFERYM\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSCLOSEYN\" type=\"STRING\" size=\"256\"/><Column id=\"EXCHANGEYN\" type=\"STRING\" size=\"256\"/><Column id=\"STUDENTNO\" type=\"STRING\" size=\"256\"/><Column id=\"UNIQUEKEY\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JUMINNO\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"AGE\" type=\"STRING\" size=\"256\"/><Column id=\"SEXCD\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"ZIPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"MOBILENO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAILADDR\" type=\"STRING\" size=\"256\"/><Column id=\"OUTHSCD\" type=\"STRING\" size=\"256\"/><Column id=\"OUTHSNM\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAYN\" type=\"STRING\" size=\"256\"/><Column id=\"TEACHCERTIYN\" type=\"STRING\" size=\"256\"/><Column id=\"INTERNSHIPYN\" type=\"STRING\" size=\"256\"/><Column id=\"DISABLEDYN\" type=\"STRING\" size=\"256\"/><Column id=\"GRADSCORE\" type=\"STRING\" size=\"256\"/><Column id=\"TOEIC\" type=\"STRING\" size=\"256\"/><Column id=\"TRUSTYN\" type=\"STRING\" size=\"256\"/><Column id=\"SPCLINYN\" type=\"STRING\" size=\"256\"/><Column id=\"THESISNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"DNCD\" type=\"STRING\" size=\"32\"/><Column id=\"ALDYEMPLYN\" type=\"STRING\" size=\"256\"/><Column id=\"UNIQUEKEY\" type=\"STRING\" size=\"32\"/><Column id=\"FORGCOMNM\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSETELNO\" type=\"STRING\" size=\"256\"/><Column id=\"HLTHINSSCBYN\" type=\"STRING\" size=\"32\"/><Column id=\"SCHWORKFORM\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"32\"/><Column id=\"SEXCD\" type=\"STRING\" size=\"256\"/><Column id=\"GOORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTGROUPNM\" type=\"STRING\" size=\"256\"/><Column id=\"EXCHANGEYN\" type=\"STRING\" size=\"32\"/><Column id=\"STUDENTNO\" type=\"STRING\" size=\"256\"/><Column id=\"STARTDT\" type=\"STRING\" size=\"256\"/><Column id=\"UNIGRADECD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"GOSCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHSTATCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOBILENO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAILADDR\" type=\"STRING\" size=\"256\"/><Column id=\"NACODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBDEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAWORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SAMEUNIVYN\" type=\"STRING\" size=\"256\"/><Column id=\"GOFORGSCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKHOUR\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISAYN\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD\" type=\"STRING\" size=\"32\"/><Column id=\"ENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISATYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
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


            obj = new Dataset("dsActive", this);
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCopyRows", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fileDownTrans", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","842",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","840",null,null,null,null,null,null,this.Div.form);
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_taborder("0");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","840",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Div("stepArea00_00_00","30","20","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_cssclass("stepArea");
            this.Div.addChild(obj.name, obj);

            obj = new Static("gp01m00","0","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("조사현황");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Static("gp02m00","342","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("환경설정");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Static("gp03m00","171","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("연계결과");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Static("gp04m00","513","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00_00.form);
            obj.set_taborder("3");
            obj.set_text("정보등록");
            obj.set_cssclass("step01 on01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Static("gp05m00","1026","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00_00.form);
            obj.set_taborder("6");
            obj.set_text("결과조회");
            obj.set_cssclass("step01 last");
            obj.set_cursor("pointer");
            this.Div.form.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Static("gp06m00","684","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("결과집계");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Static("gp07m00","855","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00_00.form);
            obj.set_taborder("5");
            obj.set_text("결과제출");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
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
            obj.set_taborder("12");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01","500","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea00_00_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("ico_step on01");
            this.Div.form.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","671","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea00_00_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("ico_step on01");
            this.Div.form.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Div("sub_research01","30","stepArea00_00_00:20","1200","95",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
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
            obj.set_text("oo.2월, oo.08월 신편입");
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
            obj.set_text("ooo 7.13 ~ 2oo.7.23. (oo년 고등교육기관 신편입생수 조사)");
            obj.set_cssclass("reser_obj_result");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\"");
            this.Div.form.sub_research01.addChild(obj.name, obj);

            obj = new Div("sub_state","30","200","1200","40",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static02","490","0","130","30",null,null,null,null,null,null,this.Div.form.sub_state.form);
            obj.set_taborder("2");
            obj.set_text("취업통계진행상태  :");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_state.addChild(obj.name, obj);

            obj = new Static("state_result","630","0","440","30",null,null,null,null,null,null,this.Div.form.sub_state.form);
            obj.set_taborder("3");
            obj.set_text("oo요청");
            obj.set_cssclass("state_result");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_state.addChild(obj.name, obj);

            obj = new Static("Static00","30","0","50","30",null,null,null,null,null,null,this.Div.form.sub_state.form);
            obj.set_taborder("0");
            obj.set_text("학교명 :");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_state.addChild(obj.name, obj);

            obj = new Static("SCHTEXT","90","0","340","30",null,null,null,null,null,null,this.Div.form.sub_state.form);
            obj.set_taborder("1");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_text("oo대학교");
            this.Div.form.sub_state.addChild(obj.name, obj);

            obj = new Div("sub_file","30","sub_state:0","1200","52",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #a5a5a5");
            obj.set_cssclass("divFormR");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","100","44",null,null,null,null,null,null,this.Div.form.sub_file.form);
            obj.set_taborder("0");
            obj.set_border("0px none");
            this.Div.form.sub_file.addChild(obj.name, obj);

            obj = new Static("Static00","30","10","62","30",null,null,null,null,null,null,this.Div.form.sub_file.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("파일등록");
            obj.set_textAlign("left");
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
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_file.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_code","149","10","100","30",null,null,null,null,null,null,this.Div.form.sub_file.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("코드집");
            obj.set_cssclass("btn_sty01");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_file.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_xls_up","490","10","100","30",null,null,null,null,null,null,this.Div.form.sub_file.form);
            obj.set_taborder("2");
            obj.set_text("파일등록");
            obj.set_cssclass("btn_sty01");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_file.addChild(obj.name, obj);

            obj = new Div("sub_fileErr","30","sub_file:20","1200","110",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #a5a5a5");
            obj.set_cssclass("divFormR");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","290","10","80","30",null,null,null,null,null,null,this.Div.form.sub_fileErr.form);
            obj.set_taborder("2");
            obj.set_text("제출인원수 :");
            obj.set_cssclass("fontC59");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_fileErr.addChild(obj.name, obj);

            obj = new Static("sta_01","Static00_00:20","10","120","30",null,null,null,null,null,null,this.Div.form.sub_fileErr.form);
            obj.set_taborder("3");
            obj.set_text("0");
            obj.set_cssclass("fontC59");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_fileErr.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_00_00","550","10","60","30",null,null,null,null,null,null,this.Div.form.sub_fileErr.form);
            obj.set_taborder("4");
            obj.set_text("필수사항 : ");
            obj.set_cssclass("fontC59");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_fileErr.addChild(obj.name, obj);

            obj = new Static("errCnt","Static00_00_01_00_00_00:20","10","120","30",null,null,null,null,null,null,this.Div.form.sub_fileErr.form);
            obj.set_taborder("5");
            obj.set_text("0");
            obj.set_cssclass("fontC59");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_fileErr.addChild(obj.name, obj);

            obj = new Static("Static00_02","360","60","38","30",null,null,null,null,null,null,this.Div.form.sub_fileErr.form);
            obj.set_taborder("10");
            obj.set_text("학번");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_fileErr.addChild(obj.name, obj);

            obj = new Edit("sel_stu_no","Static00_02:20","60","210","30",null,null,null,null,null,null,this.Div.form.sub_fileErr.form);
            obj.set_taborder("11");
            obj.set_accessibilitylabel("학번");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_fileErr.addChild(obj.name, obj);

            obj = new Button("btn_errChk_search","1060","45","100","30",null,null,null,null,null,null,this.Div.form.sub_fileErr.form);
            obj.set_taborder("15");
            obj.set_text("검색");
            obj.set_cssclass("btn_sty01");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_fileErr.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_00_00_00","780","10","120","30",null,null,null,null,null,null,this.Div.form.sub_fileErr.form);
            obj.set_taborder("6");
            obj.set_text("확인사항 : ");
            obj.set_cssclass("fontC59");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_fileErr.addChild(obj.name, obj);

            obj = new Static("err_chkCnt","Static00_00_01_00_00_00_00:20","10","120","30",null,null,null,null,null,null,this.Div.form.sub_fileErr.form);
            obj.set_taborder("7");
            obj.set_text("0");
            obj.set_cssclass("fontC59");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_fileErr.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","30","10","80","30",null,null,null,null,null,null,this.Div.form.sub_fileErr.form);
            obj.set_taborder("0");
            obj.set_text("연계인원수 :");
            obj.set_cssclass("fontC59");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_fileErr.addChild(obj.name, obj);

            obj = new Static("sta_00","Static00_00_00:20","10","120","30",null,null,null,null,null,null,this.Div.form.sub_fileErr.form);
            obj.set_taborder("1");
            obj.set_text("0");
            obj.set_cssclass("fontC59");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_fileErr.addChild(obj.name, obj);

            obj = new Button("btn_search","1060","45","100","30",null,null,null,null,null,null,this.Div.form.sub_fileErr.form);
            obj.set_taborder("14");
            obj.set_text("검색");
            obj.set_cssclass("btn_sty01 btn_styLarge");
            obj.set_visible("false");
            this.Div.form.sub_fileErr.addChild(obj.name, obj);

            obj = new Static("set_dept_label","30","60","38","30",null,null,null,null,null,null,this.Div.form.sub_fileErr.form);
            obj.set_taborder("8");
            obj.set_text("학과");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_visible("true");
            this.Div.form.sub_fileErr.addChild(obj.name, obj);

            obj = new Edit("set_dept","set_dept_label:20","60","210","30",null,null,null,null,null,null,this.Div.form.sub_fileErr.form);
            obj.set_taborder("9");
            obj.set_accessibilitylabel("학과");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_visible("true");
            this.Div.form.sub_fileErr.addChild(obj.name, obj);

            obj = new Static("sel_stu_nm_label","682","60","38","30",null,null,null,null,null,null,this.Div.form.sub_fileErr.form);
            obj.set_taborder("12");
            obj.set_text("이름");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_visible("false");
            this.Div.form.sub_fileErr.addChild(obj.name, obj);

            obj = new Edit("sel_stu_nm","sel_stu_nm_label:20","60","210","30",null,null,null,null,null,null,this.Div.form.sub_fileErr.form);
            obj.set_taborder("13");
            obj.set_accessibilitylabel("이름");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_visible("false");
            this.Div.form.sub_fileErr.addChild(obj.name, obj);

            obj = new Grid("Grid_err","30","490","1200","330",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("16");
            obj.set_binddataset("dsMain");
            obj.set_cssclass("grid_sty02");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_cellcombopopuptype("normal");
            obj.set_scrollbartype("auto auto");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"790\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"순번\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"1\" text=\"학과\"/><Cell col=\"2\" text=\"학번\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"3\" text=\"오류구분\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"4\" text=\"오류내용\" border=\"0px none,0px none,1px solid #e3c89c\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:RN\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"1\" text=\"bind:DEPTNM\"/><Cell col=\"2\" text=\"bind:STUDENTNO\" textAlign=\"left\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"3\" text=\"bind:ERRKINDNM\" textAlign=\"left\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"4\" text=\"bind:ERRDESC\" textAlign=\"left\" border=\"0px none,0px none,1px solid #e3c89c\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\" autosizecol=\"limitmax\" autosizerow=\"default\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Div("pagingWrap","40","1406","1184","64",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("17");
            obj.set_text("");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_pagging","370","11","480","40",null,null,null,null,null,null,this.Div.form.pagingWrap.form);
            obj.set_taborder("0");
            obj.set_text("div_00");
            obj.set_url("CM::CmPagging.xfdl");
            obj.set_visible("false");
            this.Div.form.pagingWrap.addChild(obj.name, obj);

            obj = new Button("btn_err_save","1130","450","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("13");
            obj.set_text("파일저장");
            obj.set_cssclass("btn_sty02");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_con","790","450","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("9");
            obj.set_text("취업승인");
            obj.set_cssclass("btn_sty02");
            obj.set_visible("false");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_re","920","450","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("10");
            obj.set_text("취업반려");
            obj.set_cssclass("btn_sty02");
            obj.set_visible("false");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_sub","940","450","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("11");
            obj.set_text("정보제출");
            obj.set_cssclass("btn_sty02");
            obj.set_visible("false");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Button("grid_rel_btn","150","450","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("8");
            obj.set_text("정보조회");
            obj.set_cssclass("btn_sty01 btn_styLarge");
            obj.set_visible("true");
            this.Div.addChild(obj.name, obj);

            obj = new Button("grid_err_btn","30","450","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_text("오류내역");
            obj.set_cssclass("btn_sty01 btn_styLarge");
            obj.set_visible("true");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("Grid_rel_01","30","490","1200","330",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("14");
            obj.set_binddataset("ds_regResult");
            obj.set_autofittype("none");
            obj.set_cssclass("grid_sty02");
            obj.set_autosizingtype("none");
            obj.set_visible("false");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj.set_scrolltype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"><Cell text=\"학교명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"1\" text=\"본분교명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"2\" text=\"학번\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"3\" text=\"개인식별키\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"4\" text=\"단과대학명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"5\" text=\"학과명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"6\" text=\"주야간구분명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"7\" text=\"성명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"8\" text=\"생년월일\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"9\" text=\"성별\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"10\" text=\"외국인유학생여부\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"11\" text=\"입학연월일\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"12\" text=\"졸업연월일\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"13\" text=\"현장실습여부\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\" background=\"#fef0eb\"/><Cell col=\"14\" text=\"토익점수\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\" background=\"#fef0eb\"/><Cell col=\"15\" text=\"우편번호\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\" background=\"#fef0eb\"/><Cell col=\"16\" text=\"휴대폰번호\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\" background=\"#fef0eb\"/><Cell col=\"17\" text=\"이메일주소\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\" background=\"#fef0eb\"/></Band><Band id=\"body\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"><Cell text=\"bind:SCHNM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"1\" text=\"bind:ORGNM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"2\" text=\"bind:STUDENTNO\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"3\" text=\"bind:UNIQUEKEY\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"4\" text=\"bind:COLNM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"5\" text=\"bind:DEPTNM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"6\" text=\"bind:DNNM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"7\" text=\"bind:NAME\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"8\" text=\"bind:BIRTHYEAR\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"9\" text=\"bind:SEXCD\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"10\" text=\"bind:EXCHANGEYN\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"11\" text=\"bind:INYM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"12\" text=\"bind:OUTYM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"13\" text=\"bind:INTERNSHIPYN_STR\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"14\" text=\"bind:TOEIC\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"15\" text=\"bind:ZIPCODE\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"16\" text=\"bind:MOBILENO_STR\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"17\" text=\"bind:EMAILADDR_STR\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("Grid_rel_02","30","490","1200","330",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("15");
            obj.set_binddataset("ds_regResult");
            obj.set_autofittype("none");
            obj.set_cssclass("grid_sty02");
            obj.set_autosizingtype("none");
            obj.set_visible("false");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"학교명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"1\" text=\"본분교명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"2\" text=\"학번\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"3\" text=\"개인식별키\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"4\" text=\"단과대학명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"5\" text=\"전공명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"6\" text=\"주야간구분명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"7\" text=\"성명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"8\" text=\"생년월일\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"9\" text=\"성별\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"10\" text=\"외국인유학생여부\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"11\" text=\"입학연월일\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"12\" text=\"졸업연월일\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"13\" text=\"우편번호\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\" background=\"#fef0eb\"/><Cell col=\"14\" text=\"휴대폰번호\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\" background=\"#fef0eb\"/><Cell col=\"15\" text=\"이메일주소\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\" background=\"#fef0eb\"/></Band><Band id=\"body\"><Cell text=\"bind:SCHNM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"1\" text=\"bind:ORGNM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"2\" text=\"bind:STUDENTNO\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"3\" text=\"bind:UNIQUEKEY\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"4\" text=\"bind:COLNM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"5\" text=\"bind:DEPTNM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"6\" text=\"bind:DNNM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"7\" text=\"bind:NAME\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"8\" text=\"bind:BIRTHYEAR\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"9\" text=\"bind:SEXCD\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"10\" text=\"bind:EXCHANGEYN\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"11\" text=\"bind:INYM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"12\" text=\"bind:OUTYM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"13\" text=\"bind:ZIPCODE\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"14\" text=\"bind:MOBILENO_STR\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"15\" text=\"bind:EMAILADDR_STR\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("Grid_rel_01_xls","30","490","1200","330",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("14");
            obj.set_binddataset("dsOutExcel");
            obj.set_autofittype("none");
            obj.set_cssclass("grid_sty02");
            obj.set_autosizingtype("none");
            obj.set_visible("false");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj.set_scrolltype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"><Cell text=\"학교\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"1\" text=\"본분교\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"2\" text=\"학번\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"3\" text=\"개인식별키\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"4\" text=\"단과대학명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"5\" text=\"학과명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"6\" text=\"주야간구분\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"7\" text=\"성명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"8\" text=\"생년월일\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"9\" text=\"성별\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"10\" text=\"외국인유학생여부\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"11\" text=\"입학연월일\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"12\" text=\"졸업연월일\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"13\" text=\"현장실습여부\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\" background=\"#fef0eb\"/><Cell col=\"14\" text=\"토익점수\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\" background=\"#fef0eb\"/><Cell col=\"15\" text=\"우편번호\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\" background=\"#fef0eb\"/><Cell col=\"16\" text=\"휴대폰번호\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\" background=\"#fef0eb\"/><Cell col=\"17\" text=\"이메일주소\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\" background=\"#fef0eb\"/></Band><Band id=\"body\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"><Cell text=\"bind:SCHCD\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"1\" text=\"bind:ORGNM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"2\" text=\"bind:STUDENTNO\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"3\" text=\"bind:UNIQUEKEY\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"4\" text=\"bind:COLNM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"5\" text=\"bind:DEPTNM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"6\" text=\"bind:DNNM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"7\" text=\"bind:NAME\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"8\" text=\"bind:BIRTHYEAR\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"9\" text=\"bind:SEXCDCNV\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"10\" text=\"bind:EXCHANGEYNCNV\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"11\" text=\"bind:INYM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"12\" text=\"bind:OUTYM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"13\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"14\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"15\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"16\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"17\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("Grid_rel_02_xls","30","490","1200","330",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("15");
            obj.set_binddataset("dsOutExcel");
            obj.set_autofittype("none");
            obj.set_cssclass("grid_sty02");
            obj.set_autosizingtype("none");
            obj.set_visible("false");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"학교\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"1\" text=\"본분교\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"2\" text=\"학번\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"3\" text=\"개인식별키\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"4\" text=\"단과대학명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"5\" text=\"전공명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"6\" text=\"주야간구분\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"7\" text=\"성명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"8\" text=\"생년월일\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"9\" text=\"성별\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"10\" text=\"외국인유학생여부\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"11\" text=\"입학연월일\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"12\" text=\"졸업연월일\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"13\" text=\"우편번호\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\" background=\"#fef0eb\"/><Cell col=\"14\" text=\"휴대폰번호\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\" background=\"#fef0eb\"/><Cell col=\"15\" text=\"이메일주소\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\" background=\"#fef0eb\"/></Band><Band id=\"body\"><Cell text=\"bind:SCHCD\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"1\" text=\"bind:ORGNM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"2\" text=\"bind:STUDENTNO\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"3\" text=\"bind:UNIQUEKEY\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"4\" text=\"bind:COLNM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"5\" text=\"bind:DEPTNM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"6\" text=\"bind:DNNM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"7\" text=\"bind:NAME\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"8\" text=\"bind:BIRTHYEAR\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"9\" text=\"bind:SEXCDCNV\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"10\" text=\"bind:EXCHANGEYNCNV\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"11\" text=\"bind:INYM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"12\" text=\"bind:OUTYM\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"13\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"14\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"15\" wordWrap=\"char\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_rel_save","1130","450","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("12");
            obj.set_text("파일저장");
            obj.set_cssclass("btn_sty02");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","20",null,null,null,null,null,null,this);
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

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
        this.addIncludeScript("gp04m00.xfdl","CM::common.xjs");
        this.addIncludeScript("gp04m00.xfdl","CM::utl_script.xjs");
        this.addIncludeScript("gp04m00.xfdl","CM::utl_modal.xjs");
        this.registerScript("gp04m00.xfdl", function() {
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

        this.fv_RCEPTCN =  "";
        this.fv_ERRCNT =  "";
        this.fv_MENUNM = "졸업생정보>정보등록";
        this.fv_MENUID = "GP04M00";
        var objApp = nexacro.getApplication();

        this.fnCallback = function(serviceID, errCD, errMSG){

        	if(errCD < 0){
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceID == "getChargeSchoolList"){
        			this.fv_CHGCOMYN = this.ds_chgSchool.getColumn(0,"CHGCOMYN");

        			this.Div.form.sub_state.form.SCHTEXT.set_text(this.ds_chgSchool.getColumn(0,"SCHNM")+" ("+this.ds_chgSchool.getColumn(0,"ORGNM")+")");
        			this.Div.form.sub_state.form.state_result.set_text(this.ds_chgSchool.getColumn(0,"STATUSNM"));
        		}

        		if(serviceID == "insertBatchAgRegist"){

        			var resultVal = objApp.gds_rtn_result.getColumn(0, "RESULTVAL");

        			//alert("resultVal="+resultVal);

        			if(resultVal =="7"){
        				this.Div.form.sub_state.form.state_result.set_text("취업/전산-졸업생정보 등록)");
        				this.ds_chgSchool.setColumn(0, "STATUSNM", "취업/전산-졸업생정보 등록" );
        				this.ds_chgSchool.setColumn(0, "SURVPROSTATUSCD", "7" ); //수정요청
        			}
        			if(resultVal =="8"){
        				this.Div.form.sub_state.form.state_result.set_text("전산-졸업생정보 제출)");
        				this.ds_chgSchool.setColumn(0, "STATUSNM", "전산-졸업생정보 제출" );
        				this.ds_chgSchool.setColumn(0, "SURVPROSTATUSCD", "8" ); //수정요청
        			}

        			// 오류 검색
        			this.utlf_resetDiv(this.Div.form.sub_fileErr);
        			this.lfn_listSaveError(1);
        			this.getErrCnt();

        			// 등록 알림 얼럿 처리
        			//alert( this.Div.form.sub_fileErr.form.sta_02.text ); // 조사등록건수
        			if( this.dsSummary.getColumn(0,"ERRCHKCNT") == "0" &&  this.dsSummary.getColumn(0,"ERRCNT") == "0" ){
        				this.alert("파일이 정상적으로 등록되었습니다.");
        				this.showGpReginfo();
        			}else if( this.dsSummary.getColumn(0,"ERRCNT") != "0"){
        				this.alert("파일등록중 오류가 발생했습니다. 수정 후 다시 업로드해주세요.");
        				this.showErr();
        			}else if( this.dsSummary.getColumn(0,"ERRCHKCNT") != "0" &&  this.dsSummary.getColumn(0,"ERRCNT") == "0"){
        				this.alert("파일이 정상적으로 등록되었습니다. 확인사항을 검토해주세요.");
        				this.showErr();
        			}
        		}

        		if(serviceID == "getErrCnt"){
        			// 등록 오류 개수
        			var resultVal = objApp.gds_rtn_result.getColumn(0, "RESULTVAL");
        			this.fv_ERRCNT  = resultVal;
        			//this.lfn_listSaveError();	//테스트
        		}

        		if(serviceID == "getRows"){
        			//alert("getRows");
        			this.lfn_excelSave();
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
        		}

        		if(serviceID == "insertSurvFinish"){
        			var resultVal = objApp.gds_rtn_result.getColumn(0, "RESULTVAL");

        			if( resultVal !="Y"){
        				this.alert("등록에 실패 했습니다.");
        			}else{
        				this.alert("등록 되었습니다.");
        			}
        		}
        		if(serviceID == "selectGpBFList"){
        			//alert("in selectGpBFList");
        			//alert("return selegpbflist");
        			//trace(this.dsOutExcel.saveXML());
        			this.lfn_excelOutputSave();
        		}

        		if(serviceID == "getDayNight"){
        			this.fv_DNCDstr = "";
        			for (var i = 0; i < this.ds_dayNight.rowcount; i++) {
        				this.fv_DNCDstr += "_" +this.ds_dayNight.getColumn(i, "DNCD"); // 입학년월일
        			}
        			this.fv_DNCDstr += "_";
        		}

        		if(serviceID == "getAreaSchCd"){
        			this.fv_AREACDstr = "";
        			for (var i = 0; i < this.ds_areaSchCd.rowcount; i++) {
        				this.fv_AREACDstr += "_" +this.ds_areaSchCd.getColumn(i, "AREACD"); // 입학년월일
        			}
        			this.fv_AREACDstr += "_";

        			//alert(this.fv_AREACDstr);
        		}

        		if(serviceID == "getTargetCnt"){  // 연계인원수

        			var resultVal = objApp.gds_rtn_result.getColumn(0, "RESULTVAL"); // 연계인원수
        			this.Div.form.sub_fileErr.form.sta_00.set_text(resultVal); // 연계인원수
        		}



        		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        		if(serviceID == "statusSave"){

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
        		if(serviceID == "selectGpReginfo"){

        			// 현재 진행 상태 불러오기
        			this.getFpSchStatus();
        		}
        		if(serviceID == "getFpSchStatus"){
        			// 상태 표시
        			var resultTxt = objApp.gds_rtn_result.getColumn(0, "RESULTTXT");
        			if(this.fv_SURVTERM != "Y") resultTxt = resultTxt + " (조사기간 아님)" ;
        			this.Div.form.sub_state.form.state_result.set_text( resultTxt );

        			/*
        			var UNIGRADECD = this.ds_chgSchool.getColumn(0, "UNIGRADECD");// 학교등급 대학원/ 대학교
        			//alert(UNIGRADECD);
        			this.Div.form.Grid_rel_01.set_visible(true);
        			if( UNIGRADECD == "1"){
        				this.Div.form.Grid_rel_01.set_visible(true);
        				this.Div.form.Grid_rel_02.set_visible(false);
        			}
        			if( UNIGRADECD == "2"){
        				this.Div.form.Grid_rel_01.set_visible(false);
        				this.Div.form.Grid_rel_02.set_visible(true);
        			}
        			*/

        			//alert(CHGCOMYN);
        			//alert("등급 :" + this.fv_USERGRPTYPE );
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

        this.gp04m00_onload = function(obj,e)
        {
        	this.chkActive();

        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='GP'",0);

        	this.fv_USERID     = objApp.gds_login_info.getColumn(idx, "USERID") ;
        	this.fv_SURVKINDCD = objApp.gds_login_info.getColumn(idx, "SURVKINDCD");
        	this.fv_CHANGEYN   = objApp.gds_login_info.getColumn(0, "CHANGEYN");
        	this.fv_USERGRPTYPE = objApp.gds_login_info.getColumn(idx, "USERGRPTYPE");

        	this.fv_SCHCD      = objApp.gds_param.getColumn(0, "SCHCD");
        	this.fv_ORGCD      = objApp.gds_param.getColumn(0, "ORGCD");
        	this.fv_SURVPROSTATUSCD = objApp.gds_param.getColumn(0, "SURVPROSTATUSCD");

        	//alert(this.fv_SURVKINDCD);

        	this.fileDownTrans.setPostData("BASE_DIR", "");
        	this.fileDownTrans.set_url("svcBaseUrl::swiss/hp/com/downloadFileDoc.do");

        	this.lfn_divSurvSet();	// 기본정보 설정

        	this.getChargeSchoolList();

        	this.getDayNight();  // 주야간 구분코드...
        	this.getAreaSchCd(); //출신학교

        	this.getTargetCnt();  // 연계인원수

        	this.lfn_listSaveError(1);

        	if(this.fv_CHANGEYN =="Y"){
        		this.lfn_enableBtn();
        	}

        	if( this.dsSummary.getColumn(0,"ERRCNT") == "0" &&
        	    (this.fv_SURVPROSTATUSCD == 7 || this.fv_SURVPROSTATUSCD == 8 || this.fv_SURVPROSTATUSCD == 9 || this.fv_SURVPROSTATUSCD == 11 || this.fv_SURVPROSTATUSCD == 12)
        	){
        		//alert("showgpinfo");
        		this.showGpReginfo();//정보조회
        	} else {
        		//alert("showerr");
        		this.showErr();
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

        // 주야간코드 가져오기
        this.getDayNight = function(){

        	var strParam = "";
        	strParam += "tmp="				+ "a" 						+ "ª";
        	strParam += "SURVSEQ="			+  this.fv_SURVSEQ 			+ "ª";
        	strParam += "SURVKINDCD="		+  this.fv_SURVKINDCD 		+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.gfnTransaction("getDayNight",
        						"/swiss/fp/baserel/getDayNight.do",
        						"dsSearch=dsSearch",
        						"ds_dayNight=dsResult",
        						"",
        						"fnCallback",
        						false);

        }

        // 출시학교코드
        this.getAreaSchCd = function(){

        	var strParam = "";
        	strParam += "tmp="				+ "a" 						+ "ª";
        	strParam += "SURVSEQ="			+  this.fv_SURVSEQ 			+ "ª";
        	strParam += "SURVKINDCD="		+  this.fv_SURVKINDCD 		+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.gfnTransaction("getAreaSchCd",
        						"/swiss/fp/baserel/getAreaSchCd.do",
        						"dsSearch=dsSearch",
        						"ds_areaSchCd=dsResult",
        						"",
        						"fnCallback",
        						false);

        }

        // 연계인원수
        this.getTargetCnt = function(){

        	//var index =  this.Div.form.sub_sel.form.sel_schooNm.index; 학교선택이 공통으로 변경되어 sel_schooNm 객체 삭제
        	var index = 0;
        	var SCHCD = this.ds_chgSchool.getColumn(index, "SCHCD"); // 학교코드
        	var ORGCD = this.ds_chgSchool.getColumn(index, "ORGCD");// 본분교

        	var strParam = "";
        	strParam += "tmp="				+ "a" 						+ "ª";
        	strParam += "SURVSEQ="			+ this.fv_SURVSEQ			+ "ª";
        	strParam += "SURVKINDCD="		+ this.fv_SURVKINDCD		+ "ª";
        	strParam += "SCHCD="			+ SCHCD						+ "ª";
        	strParam += "ORGCD="			+ ORGCD						+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.gfnTransaction("getTargetCnt",
        						"/swiss/gp/baserel/getTargetCnt.do",
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
        	//this.Div.form.sub_file.form.info_finish.set_visible(false);
        	//this.Div.form.sub_file.form.btn_finish.set_visible(false);

        	if(this.fv_USERGRPTYPE =="4" && this.fv_CHGCOMYN =="1"){
        		this.alert("전산담당자가 존재 합니다. 전산담당자에게 요청해 주세요.");
        		return;
        	}
        	if(this.fv_USERGRPTYPE =="5" && this.fv_CHGCOMYN =="2"){
        		this.alert("전산담당자는 등록 권한이 없습니다.");
        		return;
        	}

        	//var index =  this.Div.form.sub_sel.form.sel_schooNm.index; 학교선택이 공통으로 변경되어 sel_schooNm 객체 삭제
        	var index = 0;
        	var SURVPROSTATUSCD = this.ds_chgSchool.getColumn(index, "SURVPROSTATUSCD");  // 상태코드

        	if( SURVPROSTATUSCD == "1"  ||   SURVPROSTATUSCD =="2"  ||   SURVPROSTATUSCD =="3" ){
        		this.alert("등록가능한 상태가 아닙니다. 연계결과에서 졸업자수 제출을 해주세요.");
        		return;
        	}

        	//alert(SURVPROSTATUSCD);
        	if(this.fv_USERGRPTYPE =="5" && ( SURVPROSTATUSCD =="1" ||   SURVPROSTATUSCD =="2"  ||   SURVPROSTATUSCD =="3"  ||   SURVPROSTATUSCD =="4" ) ){
        		this.alert(" 취업담당자가 환경설정 페이지에서 \n [자료등록 요청하기]를 클릭하지 않은 상태 입니다.");
        		return;
        	}


        	//0081	1	졸업자수 미제출
        	//0081	2	취업-졸업자수 수정요청
        	//0081	3	KEDI-졸업자수 수정완료
        	//0081	4	취업-졸업자수 제출완료
        	//0081	5	KEDI-졸업자수 반려
        	//0081	6	취업-졸업생정보 등록요청
        	//0081	7	전산-졸업생정보 등록
        	//0081	8	전산-졸업생정보 제출
        	//0081	9	취업-졸업생정보 승인
        	//0081	10	취업-졸업생정보 반려
        	//0081	11	취업-졸업생정보 제출
        	//0081	12	KEDI-졸업생정보 승인
        	//0081	13	KEDI-졸업생정보 반려

        	// 전산담당 등록
        	if(this.fv_USERGRPTYPE =="5" ){
        		if( SURVPROSTATUSCD =="6" ||  SURVPROSTATUSCD =="7"  ||  SURVPROSTATUSCD =="8"  ||  SURVPROSTATUSCD =="10" ){
        		}else{
        			this.alert("등록가능한 상태가 아닙니다.");
        			return;
        		}
        	}

        	//alert(SURVPROSTATUSCD);
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

        this.getRows = function(){
        	var sel_dept = "";
        	var sel_dayNight = "";

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

        	if(this.fv_SURVTERM !=  "Y"){
        		this.alert("선택된 학교는 조사기간이 아닙니다.");
        		return false;
        	}

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	//this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "검색", strParam);  //해당 학교의 연계결과 조회

        	this.gfnTransaction("getRows",
        						"/swiss/gp/baserel/selectGpBFList.do",
        						"dsSearch=dsSearch",
        						"dsCopyRows=dsResult",
        						"",
        						"fnCallback",
        						false);
        }

        //onsuccess Event
        this.Import00_onsuccess = function(obj,  e)
        {
        	//trace("임포트성공");
        	this.dsExcel.deleteRow(0);

        	this.getRows();

        	//trace(this.dsExcel.saveXML());

        }

        //onerror Event
        this.Import00_onerror = function(obj,  e)
        {
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "임포트실패", "");  //임포트 실패
        	trace("임포트실패");

        }

        this.lfn_excelSave = function()
        {
        //alert("start xlssave");

        	//var index =  this.Div.form.sub_sel.form.sel_schooNm.index; 학교선택이 공통으로 변경되어 sel_schooNm 객체 삭제
        	var index = 0;

        	var SCHCD = this.ds_chgSchool.getColumn(index, "SCHCD"); // 학교코드
        	var SCHCDparam = SCHCD ;

        	var ORGCD = this.ds_chgSchool.getColumn(index, "ORGCD");// 본분교
        	var ORGCDparam = ORGCD ;

        	var UNIGRADECD = this.ds_chgSchool.getColumn(index, "UNIGRADECD");// 학교등급 대학원/ 대학교

        //alert("chk uni="+UNIGRADECD);

        	var strParam = "";
        	strParam += "SURVSEQ="			+ this.fv_SURVSEQ 				+ "ª";
        	strParam += "SURVKINDCD="		+ this.fv_SURVKINDCD			+ "ª";
        	strParam += "SCHCD="			+ SCHCD 						+ "ª";
        	strParam += "ORGCD="			+ ORGCD 						+ "ª";
        	strParam += "WORKERID="			+ this.fv_USERID				+ "ª";
        	strParam += "UNIGRADECD="		+ UNIGRADECD					+ "ª";  //// 대학/대학원   대학원 : 2

        	dsParamSetArrowBlank(this.dsSearch00, strParam);

        	if(this.dsExcel.rowcount == 0){
        		this.alert("입력할 엑셀파일을 선택하세요");
        		return;
        	}

        	//trace(this.dsExcel.saveXML());

        	this.Div.form.sub_fileErr.form.sta_01.set_text(this.dsExcel.rowcount);  // 엑셀 전체 목록

        	this.dsSave.clearData();
        	this.dsErr.clearData();

        	var DEPTCD ="";
        	var STUDENTNOinfo = "";
        //alert("in xlssave 1 uni="+UNIGRADECD);
        	// 해더 항목은 제고 되며 실 데이터만 들어가고 있음.....
        	var fieldMap ="";
        	if( UNIGRADECD == "1"){
        		// --------- 일반대학
        		fieldMap +="SCHCD=Column0";
        		fieldMap +=",ORGCD=Column1";
        		fieldMap +=",STUDENTNO=Column2";
        		fieldMap +=",UNIQUEKEY=Column3";
        		//fieldMap +=",COLNM=Column4";
        		//fieldMap +=",DEPTNM=Column5";
        		//fieldMap +=",DNNM=Column6";
        		//fieldMap +=",NAME=Column7";
        		//fieldMap +=",BIRTHYEAR=Column8";
        		//fieldMap +=",SEXCD=Column9";
        		//fieldMap +=",EXCHANGEYN=Column10";
        		//fieldMap +=",INYM=Column11";
        		//fieldMap +=",OUTYM=Column12";
        		fieldMap +=",INTERNSHIPYN=Column13";
        		fieldMap +=",TOEIC=Column14";
        		fieldMap +=",ZIPCODE=Column15";
        		fieldMap +=",MOBILENO=Column16";
        		fieldMap +=",EMAILADDR=Column17";
        	}

        	if( UNIGRADECD == "2"){ // --------- 대학원
        		fieldMap +="SCHCD=Column0";
        		fieldMap +=",ORGCD=Column1";
        		fieldMap +=",STUDENTNO=Column2";
        		fieldMap +=",UNIQUEKEY=Column3";
        		//fieldMap +=",COLNM=Column4";
        		//fieldMap +=",DEPTNM=Column5";
        		//fieldMap +=",DNNM=Column6";
        		//fieldMap +=",NAME=Column7";
        		//fieldMap +=",BIRTHYEAR=Column8";
        		//fieldMap +=",SEXCD=Column9";
        		//fieldMap +=",EXCHANGEYN=Column10";
        		//fieldMap +=",INYM=Column11";
        		//fieldMap +=",OUTYM=Column12";
        		fieldMap +=",ZIPCODE=Column13";
        		fieldMap +=",MOBILENO=Column14";
        		fieldMap +=",EMAILADDR=Column15";
        		/*
        		fieldMap +="SCHCD=Column0,ORGCD=Column1,STUDENTNO=Column2,COLNM=Column3,DEPTNM=Column4,DNNM=Column5";
        		fieldMap +=",NAME=Column6,NAME=Column7,BIRTHYEAR=Column8,SEXCD=Column9,EXCHANGEYN=Column10";
        		fieldMap +=",INYM=Column11,OUTYM=Column12";

        		fieldMap +=",ZIPCODE=Column13";
        		fieldMap +=",MOBILENO=Column14,EMAILADDR=Column15";
        		*/

        	}

        //alert("in xlssave 2 bef loop CNT="+this.dsExcel.rowcount);
        	for (var i = 0; i < this.dsExcel.rowcount; i++) {
        		var nRow = this.dsSave.addRow();
        		this.dsSave.copyRow(nRow,this.dsExcel,i,fieldMap);

        		this.dsSave.addColumn("SURVSEQ","STRING");
        		this.dsSave.setColumn(i,"SURVSEQ",this.fv_SURVSEQ );

        		this.dsSave.addColumn("SURVKINDCD","STRING");
        		this.dsSave.setColumn(i,"SURVKINDCD",this.fv_SURVKINDCD );

        		this.dsSave.addColumn("WORKERID","STRING");
        		this.dsSave.setColumn(i,"WORKERID",this.fv_USERID );


        		var cline = i + 2;

        //alert("BEF 공통필드");
        		//------------------ 공통필드 -----------------------------------
        		var SCHCD 			= this.dsSave.getColumn(i, "SCHCD"); 		// 학교코드
        		var ORGCD 			= this.dsSave.getColumn(i, "ORGCD"); 		// 본분교코드
        		var STUDENTNO 		= this.dsSave.getColumn(i, "STUDENTNO"); 	// 학번
        		var UNIQUEKEY 		= this.dsSave.getColumn(i, "UNIQUEKEY"); 	// 개인식별키
        			//var COLCD 			= this.dsSave.getColumn(i, "COLCD"); 		// 단과대학코드
        			//var DEPTCD 			= this.dsSave.getColumn(i, "DEPTCD"); 		// 학과코드 : 전공코드
        		//var DNCD 			= this.dsSave.getColumn(i, "DNCD"); 		// 주야간구분
        		//var NAME 			= this.dsSave.getColumn(i, "NAME"); 		// 성명
        		//var BIRTHYEAR		= this.dsSave.getColumn(i, "BIRTHYEAR"); 		// 생년월일
        		//var SEXCD 			= this.dsSave.getColumn(i, "SEXCD"); 		// 성별
        		//var EXCHANGEYN 		= this.dsSave.getColumn(i, "EXCHANGEYN"); 		// 외국인유학생여부
        		//var INYM 			= this.dsSave.getColumn(i, "INYM"); 		// 입학연월
        		//var OUTYM 			= this.dsSave.getColumn(i, "OUTYM"); 		// 졸업연월



        		var SCHCD2 = this.dsCopyRows.getColumn(i,"SCHCD");
        		var ORGCD2 = this.dsCopyRows.getColumn(i,"ORGCD");
        		var STUDENTNO2 = this.dsCopyRows.getColumn(i,"STUDENTNO");
        		var UNIQUEKEY2 = this.dsCopyRows.getColumn(i,"UNIQUEKEY");

        		var COLCD2 = this.dsCopyRows.getColumn(i,"COLCD");
        		var COLNM2 = this.dsCopyRows.getColumn(i,"COLNM");

        		var DEPTCD2 = this.dsCopyRows.getColumn(i,"DEPTCD");
        		var DEPTNM2 = this.dsCopyRows.getColumn(i,"DEPTNM");

        		var DNCD2 = this.dsCopyRows.getColumn(i,"DNCD");
        //alert("AFT DNCD2");
        		var DETAILDEPTNM2 = this.dsCopyRows.getColumn(i,"DETAILDEPTNM");

        		var DEGREECD2 = this.dsCopyRows.getColumn(i,"DEGREECD");

        		var SUBDEPTCD2 = this.dsCopyRows.getColumn(i,"SUBDEPTCD");
        		var SUBDEPTNM2 = this.dsCopyRows.getColumn(i,"SUBDEPTNM");

        		var MULTIDEPTCD2 = this.dsCopyRows.getColumn(i,"MULTIDEPTCD");
        		var MULTIDEPTNM2 = this.dsCopyRows.getColumn(i,"MULTIDEPTNM");

        		var INYM2 = this.dsCopyRows.getColumn(i,"INYM");
        		var OUTYM2 = this.dsCopyRows.getColumn(i,"OUTYM");

        		var OUTGRACE2 = this.dsCopyRows.getColumn(i,"OUTGRACE");
        //alert("AFT OUTGRACE2");
        		var TRANSFERYM2 = this.dsCopyRows.getColumn(i,"TRANSFERYM");
        		var TRANSCLOSEYN2 = this.dsCopyRows.getColumn(i,"TRANSCLOSEYN");

        		var EXCHANGEYN2 = this.dsCopyRows.getColumn(i,"EXCHANGEYN");

        		var NAME2 = this.dsCopyRows.getColumn(i,"NAME");
        		var JUMINNO2 = this.dsCopyRows.getColumn(i,"JUMINNO");
        		var BIRTHYEAR2 = this.dsCopyRows.getColumn(i,"BIRTHYEAR");
        		var AGE2 = this.dsCopyRows.getColumn(i,"AGE");
        		var SEXCD2 = this.dsCopyRows.getColumn(i,"SEXCD");
        		var OUTHSCD2 = this.dsCopyRows.getColumn(i,"OUTHSCD");
        		var OUTHSNM2 = this.dsCopyRows.getColumn(i,"OUTHSNM");
        		var OVERSEAYN2 = this.dsCopyRows.getColumn(i,"OVERSEAYN");
        		var GRADSCORE2 = this.dsCopyRows.getColumn(i,"GRADSCORE");

        		var TEACHCERTIYN2 = this.dsCopyRows.getColumn(i,"TEACHCERTIYN");
        //alert("AFT VAR");

        		if(UNIQUEKEY == UNIQUEKEY2){
        //alert("start asg");
        			this.dsSave.setColumn(i,"SCHCD",SCHCD2 );
        			this.dsSave.setColumn(i,"ORGCD",ORGCD2 );
        			this.dsSave.setColumn(i,"STUDENTNO",STUDENTNO2 );
        			this.dsSave.setColumn(i,"COLCD",COLCD2 );
        			this.dsSave.setColumn(i,"COLNM",COLNM2 );
        			this.dsSave.setColumn(i,"DEPTCD",DEPTCD2 );
        			this.dsSave.setColumn(i,"DEPTNM",DEPTNM2 );
        			this.dsSave.setColumn(i,"DNCD",DNCD2 );
        //alert("start asg2");
        			this.dsSave.setColumn(i,"DETAILDEPTNM",DETAILDEPTNM2 );
        			this.dsSave.setColumn(i,"DEGREECD",DEGREECD2 );
        			this.dsSave.setColumn(i,"SUBDEPTCD",SUBDEPTCD2 );
        			this.dsSave.setColumn(i,"SUBDEPTNM",SUBDEPTNM2 );
        			this.dsSave.setColumn(i,"MULTIDEPTCD",MULTIDEPTCD2 );
        			this.dsSave.setColumn(i,"MULTIDEPTNM",MULTIDEPTNM2 );
        //alert("start asg3");
        			this.dsSave.setColumn(i,"INYM",INYM2 );
        //alert("start asg3-0");
        			this.dsSave.setColumn(i,"OUTYM",OUTYM2 );
        //alert("start asg3-1");
        			this.dsSave.setColumn(i,"OUTGRACE",OUTGRACE2 );
        			this.dsSave.setColumn(i,"TRANSFERYM",TRANSFERYM2 );
        //alert("start asg3-2");
        			this.dsSave.setColumn(i,"TRANSCLOSEYN",TRANSCLOSEYN2 );
        			this.dsSave.setColumn(i,"EXCHANGEYN",EXCHANGEYN2 );
        //alert("start asg4");
        			this.dsSave.setColumn(i,"NAME",NAME2 );
        			this.dsSave.setColumn(i,"JUMINNO",JUMINNO2 );
        			this.dsSave.setColumn(i,"BIRTHYEAR",BIRTHYEAR2 );
        			this.dsSave.setColumn(i,"AGE",AGE2 );
        			this.dsSave.setColumn(i,"SEXCD",SEXCD2 );
        //alert("start asg5");
        			this.dsSave.setColumn(i,"OUTHSCD",OUTHSCD2 );
        			this.dsSave.setColumn(i,"OUTHSNM",OUTHSNM2 );
        			this.dsSave.setColumn(i,"OVERSEAYN",OVERSEAYN2 );
        			this.dsSave.setColumn(i,"GRADSCORE",GRADSCORE2 );
        			this.dsSave.setColumn(i,"TEACHCERTIYN",TEACHCERTIYN2 );
        //alert("start asg6");
        		}else{
        			//alert("ST1="+STUDENTNO+", ST2="+STUDENTNO2);
        			//alert("uk1="+UNIQUEKEY+", UK2="+UNIQUEKEY2);
        			this.lfn_setErr("(학생번호 : " + this.dsSave.getColumn(i, "STUDENTNO") + ") - " + cline +"라인의 순번이 일치하지 않습니다.");
        			//this.lfn_setErr("불일치");
        		}


        		//------------------ 대학교 전용필드 -----------------------------------
        		if( UNIGRADECD == "1"){
        			///var DETAILDEPTNM 	= this.dsSave.getColumn(i, "DETAILDEPTNM");
        			// 학과소분류명(대학)	, 세부전공명 (대학원 )
        			var INTERNSHIPYN = this.dsSave.getColumn(i, "INTERNSHIPYN"); // 현장실습여부
        			var TOEIC 		= this.dsSave.getColumn(i, "TOEIC"); 		// 토익점수
        			var ZIPCODE		= this.dsSave.getColumn(i, "ZIPCODE"); 		// 우편번호

        			var MOBILENO		= this.dsSave.getColumn(i, "MOBILENO"); 		// 휴대폰번호
        			var EMAILADDR		= this.dsSave.getColumn(i, "EMAILADDR"); 		// 이메일주소
        		}

        		//------------------ 대학원 전용필드 -----------------------------------
        		if( UNIGRADECD == "2"){
        			//var DETAILDEPTNM 	= this.dsSave.getColumn(i, "DETAILDEPTNM");
        			// 학과소분류명(대학)	, 세부전공명 (대학원 )
        			var ZIPCODE		= this.dsSave.getColumn(i, "ZIPCODE"); 		// 우편번호

        			var MOBILENO		= this.dsSave.getColumn(i, "MOBILENO"); 		// 휴대폰번호
        			var EMAILADDR		= this.dsSave.getColumn(i, "EMAILADDR"); 		// 이메일주소

        			//alert("chk in uni2 mobile="+MOBILENO);
        			//alert("chk in uni2 emailaddr="+EMAILADDR);
        		}


        		STUDENTNOinfo = "(학생번호 : " + STUDENTNO+ ") - " + cline +"라인";// 학생번호 인로 추가

        		/*
        		if(SCHCDparam != SCHCD ){
        			this.lfn_setErr("조사대상학교의 학교코드("+SCHCDparam+")와 일치하지 않습니다. " + STUDENTNOinfo);
        		}
        		if(ORGCDparam != ORGCD ){
        			this.lfn_setErr("조사대상학교의 본분교교코드("+ORGCDparam+")와 일치하지 않습니다. " + STUDENTNOinfo);
        		}

        		// ----------------------------------- null 체크  공통-----------
         		if(SCHCD == "" || SCHCD == " " || SCHCD ==null ){
        			this.lfn_setErr("학교코드가 누락되어 있습니다. 반드시 입력해주세요. " + STUDENTNOinfo);
        		}else{
        			if(SCHCD.length != 8){
        				this.lfn_setErr("학교코드를 8자리로 입력해주세요.  " + STUDENTNOinfo);
        			}
        		}
        		if(ORGCD == "" || ORGCD == " " || ORGCD  ==null ){
        			this.lfn_setErr("본분교코드가 누락되어 있습니다. 반드시 입력해주세요.   " + STUDENTNOinfo);
        		}else{
        			if(ORGCD.length != 1){
        				this.lfn_setErr("본분교코드를 1자리로 입력해주세요.  " + STUDENTNOinfo);
        			}
        		}
        		*/

        		/*
        		if(COLCD == "" || COLCD == " " || COLCD ==null ){
        			this.lfn_setErr("단과대학코드가 누락되어 있습니다. 반드시 입력해주세요.   " + STUDENTNOinfo);
        		}else{
        			if(COLCD.length > 3){
        				this.lfn_setErr("단과대학코드를 3자 이하로 입력 해 주세요. " + STUDENTNOinfo);
        			}
        		}

        		if(DEPTCD == "" || DEPTCD ==null ){
        			this.lfn_setErr("학과코드 누락되어 있습니다. 반드시 입력해주세요.   " + STUDENTNOinfo);
        		}else{
        			if(DEPTCD.length != 12){
        				this.lfn_setErr("학과코드를 12자리로 입력해주세요. " + STUDENTNOinfo);
        			}
        		}
        		*/

        		//if(DETAILDEPTNM == "" || DETAILDEPTNM ==null ){
        			//this.lfn_setErr(DETAILDEPTNM_str +"을 입력해주세요.  " + STUDENTNOinfo);
        		//}else{
        			//
        		//}

        		/*
        		if(DNCD == "" || DNCD ==null ){
        			this.lfn_setErr("주야간구분이 누락되어 있습니다. 반드시 입력해주세요.   " + STUDENTNOinfo);
        		}else{
        			// 주야코드 -------------------------------
        			if (this.fv_DNCDstr.indexOf("_"+DNCD+"_")<0 ){
        				this.lfn_setErr("올바른 주야간구분을 입력해주세요.  " + STUDENTNOinfo);
        			}
        		}
        		*/

        		/*
        		if(STUDENTNO == "" || STUDENTNO ==null ){
        			this.lfn_setErr("학번이 누락되어 있습니다. 반드시 입력해주세요.   " + STUDENTNOinfo);
        		}

        		if(NAME == "" || NAME ==null ){
        			this.lfn_setErr("성명이 누락되어 있습니다. 반드시 입력해주세요.  " + STUDENTNOinfo);
        		}
        		*/

        		/*
        		if(JUMINNO == "" || JUMINNO ==null ){
        			this.lfn_setErr("주민등록번호가 누락되어 있습니다. 반드시 입력해주세요.  " + STUDENTNOinfo);
        		}
        		*/

        		/*
        		if(ZIPCODE == "" || ZIPCODE ==null ){
        			this.lfn_setErr("우편번호가 누락되어 있습니다. 반드시 입력해주세요.  " + STUDENTNOinfo);
        		}else{
        			if(ZIPCODE.length != 6 && ZIPCODE.length != 5){
        				this.lfn_setErr("우편번호를 5~6자리로 입력해주세요.  " + STUDENTNOinfo);
        			}
        		}
        		*/

        		/*
        		if(ADDR == "" || ADDR ==null ){
        			this.lfn_setErr("집주소가 누락되어 있습니다. 반드시 입력해주세요.   " + STUDENTNOinfo);
        		}
        		*/


        		if(MOBILENO == "" || MOBILENO ==null ){
        			this.lfn_setErr("휴대폰번호가 누락되어 있습니다. 반드시 입력해주세요. " + STUDENTNOinfo);
        		}

        		/*
        		if(EMAILADDR == "" || EMAILADDR ==null ){
        			this.lfn_setErr("이메일주소를 입력해주세요.  " + STUDENTNOinfo);
        		}
        		*/

        		/*
        		if(INYM == "" || INYM ==null ){
        			this.lfn_setErr("입학연월이 누락되어 있습니다. 반드시 입력해주세요.   " + STUDENTNOinfo);
        		}else{
        			var INYMLen = INYM.length;
        			if( INYMLen != 8  ||  INYM.substr(0,4) < "1900"  || INYM.substr(4,2) > "12"){
        				this.lfn_setErr("입학년월을 YYYYMMDD형식으로 입력해주세요.  " + STUDENTNOinfo);
        			}

        		}
        		*/

        		/*
        		if(TRANSFERYM == "" || TRANSFERYM ==null ){
        			this.lfn_setErr("편입여부가 누락되어 있습니다. 반드시 입력해주세요.   " + STUDENTNOinfo);
        		}else{

        			if(isNaN( TRANSFERYM )) {
        				this.lfn_setErr("편입여부를 숫자로 입력해주세요.  " + STUDENTNOinfo);
        			}else{
        				if( TRANSFERYM !="1" &&   TRANSFERYM !="2"){
        					this.lfn_setErr("편입여부를 1 또는 2로 입력해주세요.  " + STUDENTNOinfo);
        				}
        			}

        		}
        		*/

        		/*
        		if(OUTYM == "" || OUTYM ==null ){
        			this.lfn_setErr("졸업연월이 누락되어 있습니다. 반드시 입력해주세요.   " + STUDENTNOinfo);
        		}
        		*/

        		/*
        		if(SUBDEPTCD == "" || SUBDEPTCD ==null ){

        		}else{
        			if(SUBDEPTCD.length != 12){
        				this.lfn_setErr("부전공코드를 12자리로 입력해주세요. " + STUDENTNOinfo);
        			}
        		}
        		if(MULTIDEPTCD == "" || MULTIDEPTCD ==null ){

        		}else{
        			if(MULTIDEPTCD.length != 12){
        				this.lfn_setErr("복수전공 학과코드를 12자리로 입력해주세요. " + STUDENTNOinfo);
        			}
        		}

        		if(GRADSCORE == "" || GRADSCORE ==null ){
        			this.lfn_setErr("졸업평점이 누락되어 있습니다. 반드시 입력해주세요.   " + STUDENTNOinfo);
        		}else{
        			//if(OUTYM.length != 6  ||  OUTYM.substr(0,4) < "1900"  || OUTYM.substr(4,2) > "12"  ){

        			if(Number(GRADSCORE) < 20.2 || Number(GRADSCORE) > 100.0){
        				this.lfn_setErr("졸업평점이 올바르지 않습니다. 백분율로 환산(20.2 ~ 100.0)하여 입력해주세요.. " + STUDENTNOinfo);
        			}
        		}
        		*/

        		// ----------------------------------- null 체크  대학교 -----------
        		if( UNIGRADECD == "1"){
        			/*
        			if(OUTHSCD == "" || OUTHSCD ==null ){
        				this.lfn_setErr("출신고교지역이 누락되어 있습니다. 반드시 입력해주세요.   " + STUDENTNOinfo);
        			}else{

        				// 출신고교 지역코드 -------------------------------
        				if (this.fv_AREACDstr.indexOf("_"+OUTHSCD+"_") < 0 ){
        					this.lfn_setErr("올바른 출신고교 지역코드를 입력해주세요.  " + STUDENTNOinfo);
        				}

        			}
        			if(OUTHSNM == "" || OUTHSNM ==null ){
        				this.lfn_setErr("출신고교가 누락되어 있습니다. 반드시 입력해주세요.  " + STUDENTNOinfo);
        			}
        			*/

        			if(INTERNSHIPYN == "" || INTERNSHIPYN ==null ){
        				this.lfn_setErr("현장실습여부가 누락되어 있습니다. 반드시 입력해주세요.   " + STUDENTNOinfo);
        			}else{
        				if(INTERNSHIPYN !="1" &&  INTERNSHIPYN !="2" ){
        					this.lfn_setErr("현장실습여부를 1 또는 2로 입력해주세요.  " + STUDENTNOinfo);
        				}
        			}

        			/*
        			if(OVERSEAYN == "" || OVERSEAYN ==null ){
        				this.lfn_setErr("해외연수여부가 누락되어 있습니다. 반드시 입력해주세요.   " + STUDENTNOinfo);
        			}else{
        				if(  OVERSEAYN < 1 &&  OVERSEAYN > 5 ){
        					this.lfn_setErr("해외연수여부를 숫자 1~5로 입력 해 주세요. " + STUDENTNOinfo);
        				}
        			}
        			if(TEACHCERTIYN == "" || TEACHCERTIYN ==null ){
        				this.lfn_setErr("교직과정이수여부가 누락되어 있습니다. 반드시 입력해주세요.   " + STUDENTNOinfo);
        			}else{
        				if(TEACHCERTIYN != "1" && TEACHCERTIYN != "2"){
        					this.lfn_setErr("교직과정이수여부를 1 또는 2로 입력해주세요. " + STUDENTNOinfo);
        				}
        				if(this.fv_SCHKINDCD == "D"){
        					if(TEACHCERTIYN != "2") {
        						this.lfn_setErr("교육대학은 교직과정이수여부를 2.아니오로 입력해주세요. " + STUDENTNOinfo);
        					}
        				}
        			}
        			*/

        			if(TOEIC == "" || TOEIC ==null ){
        				this.lfn_setErr("토익점수가 누락되어 있습니다. 반드시 입력해주세요.  " + STUDENTNOinfo);
        			}else{
        				if(isNaN( TOEIC )) {
        					this.lfn_setErr("토익점수를 숫자로 입력 해 주세요.  " + STUDENTNOinfo);
        				}else{
        					if( TOEIC < 0 ||   TOEIC > 990 ){
        						this.lfn_setErr("토익점수를 0~990 사이의 숫자로 입력 해 주세요. " + STUDENTNOinfo);
        					}
        				}
        			}

        			/*
        			if(OUTGRACE == "" || OUTGRACE ==null ){
        				this.lfn_setErr("학사학위취득 유예기간이 누락되어 있습니다. 반드시 입력해주세요. " + STUDENTNOinfo);
        			}else{
        				if(OUTGRACE.length > 1){
        					this.lfn_setErr("학사학위취득 유예기간을 1자 이하로 입력 해 주세요. " + STUDENTNOinfo);
        				}
        			}
        			*/
        		}

        		// ----------------------------------- null 체크  대학원 -----------
        		/*
        		if( UNIGRADECD == "2"){
        			if(DEGREECD == "" || DEGREECD ==null ){
        				this.lfn_setErr("취득학위가 누락되어 있습니다. 반드시 입력해주세요.   " + STUDENTNOinfo);
        			}else{
        				if(DEGREECD.length != 3){
        					this.lfn_setErr("취득학위를 3자리 숫자로 입력해주세요.  " + STUDENTNOinfo);
        				}
        			}
        		}
        		*/

        		var regexp = /^[0-9]*$/ ; // 숫자만
        		var pattern_spc = /[~!@#$%^&*()_\-+|<>?:{}\[\]'".]/; // 특수문자
        		var pattern_spc02 = /[~!@#$%^&*_+|<>?:{}\[\]'"]/; // 특수문자
        		var special_pattern = /^[ㄱ-ㅎ|가-힣|a-z|A-Z| ]+$/; // 한글 영문만 공백허용
        		var regType1 = /^[A-Za-z0-9+]*$/;  //영문숫자

        		// 특수문자 체크  공통 ---------------------------------------------------------------
        		/*
        		if(pattern_spc.test( DEPTCD )) {
        			this.lfn_setErr("학과코드에 특수문자가 존재합니다.  " + STUDENTNOinfo);
        		}
        		*/
        /*
        		if(pattern_spc.test( DETAILDEPTNM )) {
        			//this.lfn_setErr(DETAILDEPTNM_str +"에 특수문자가 존재합니다.  " + STUDENTNOinfo);
        		}
        */

        		/*
        		if(!special_pattern.test( NAME )) {
        			this.lfn_setErr("성명은 한글과 영문만 등록 가능합니다.  " + STUDENTNOinfo);
        		}

        		if( STUDENTNO != ""  &&   STUDENTNO !=null){
        			if(!regType1.test( STUDENTNO )) {
        				this.lfn_setErr("학생번호는 영문과 숫자만 등록 가능합니다.  " + STUDENTNOinfo);
        			}
        		}
        		*/
        /*
        		if(pattern_spc02.test( ADDR )) {
        			this.lfn_setErr("집주소에 특수문자가 존재합니다.  " + STUDENTNOinfo);
        		}
        */
        		// 특수문자 체크  대학교 ------------------------------------------------------
        		if( UNIGRADECD == "1"){
        /*
        			if(pattern_spc02.test( OUTHSNM )) {
        				this.lfn_setErr("출신고교에 특수문자가 존재합니다.  " + STUDENTNOinfo);
        			}
        */
        		}

        		// 숫자 공통 -----------------------------------------------------------------
        		if(!regexp.test( ORGCD )) {
        			//this.lfn_setErr("올바른 본분교코드를 입력해주세요.  " + STUDENTNOinfo);
        		}
        		/*
        		if(!regexp.test( COLCD )) {
        			this.lfn_setErr("올바른 단과대학코드를 입력해주세요.  " + STUDENTNOinfo);
        		}
        		if(!regexp.test( DNCD )) {
        			//this.lfn_setErr("올바른 주야간구분을 입력해주세요.  " + STUDENTNOinfo);
        		}
        		*/
        /*
        		if(!regexp.test( JUMINNO )) {
        			this.lfn_setErr("주민등록번호는 13자리 숫자로 입력해주세요.  " + STUDENTNOinfo);
        		}
        */
        		/*
        		if(!regexp.test( INYM )) {
        			this.lfn_setErr("입학년월일을 YYYYMM형식으로 입력해주세요.  " + STUDENTNOinfo);
        		}
        		if(!regexp.test( OUTYM )) {
        			this.lfn_setErr("졸업연월을 YYYYMM형식으로 입력해주세요.  " + STUDENTNOinfo);
        		}
        		*/
        		if(!regexp.test( ZIPCODE )) {
        			this.lfn_setErr("우편번호를 숫자로 입력해주세요.  " + STUDENTNOinfo);
        		}

        		// 숫자 대학교 -----------------------------------------------------------------
        		if( UNIGRADECD == "1"){
        			/*
        			if(!regexp.test( OUTHSCD )) {
        				this.lfn_setErr("출신고교 지역을 숫자로 입력 해 주세요.  " + STUDENTNOinfo);
        			}
        			*/
        			if(!regexp.test( INTERNSHIPYN )) {
        				this.lfn_setErr("현장실습여부를 숫자로 입력 해 주세요.  " + STUDENTNOinfo);
        			}
        			/*
        			if( OVERSEAYN !="1" && OVERSEAYN !="2" && OVERSEAYN !="3" && OVERSEAYN !="4" && OVERSEAYN !="5") {
        				this.lfn_setErr("해외연수여부를 숫자로 입력 해 주세요.  " + STUDENTNOinfo);
        			}
        			if(   TEACHCERTIYN != "1" && TEACHCERTIYN !="2"  ) {
        				this.lfn_setErr("교직과정이수여부를 숫자로 입력 해 주세요.  " + STUDENTNOinfo);
        			}

        			if(!regexp.test( OUTGRACE )) {
        				this.lfn_setErr("학사학위취득 유예기간을 숫자로 입력 해 주세요.  " + STUDENTNOinfo);
        			}
        			*/
        		}
        		// 숫자 대학원 -----------------------------------------------------------------
        		/*
        		if( UNIGRADECD == "2"){
        			if(!regexp.test( DEGREECD )) {
        				this.lfn_setErr("학위를 숫자로 입력 해 주세요.  " + STUDENTNOinfo);
        			}
        		}
        		*/

        		var emailRule = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;  //이메일 형식이 알파벳+숫자@알파벳+숫자.알파벳+숫자 형식이 아닐 경우
        		var regHpExp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;  // 휴대폰번호

        		// 학생번호 -------------------------------
        		/*
        		if(STUDENTNO != "" && STUDENTNO !=null ){
        			var STUDENTNOLen = STUDENTNO.length;
        			//alert(juminLen);
        			if( STUDENTNOLen < 4 ){
        				this.lfn_setErr("올바른 학생번호를 입력해주세요.  " + STUDENTNOinfo);
        			}
        		}
        		*/

        		// 부전공 학과코드	복수전공 학과코드
        		if( UNIGRADECD == "1"){
        /*
        			if(!regType1.test( SUBDEPTCD )) {
        				this.lfn_setErr("올바른 부전공 학과코드를 입력해주세요.  " + STUDENTNOinfo);
        			}
        			if(!regType1.test( MULTIDEPTCD )) {
        				this.lfn_setErr("올바른 복수전공 학과코드를 입력해주세요.  " + STUDENTNOinfo);
        			}
        */
        		}

        		//주민등록번호 -------------------------------
        /*
        		if( JUMINNO != ""  &&   JUMINNO !=null){
        			var juminLen = JUMINNO.length;
        			//alert(juminLen);
        			if( juminLen != 13 ){
        				this.lfn_setErr("주민등록번호는 13자리 숫자로 입력해주세요.  " + STUDENTNOinfo);
        			}

        			//alert(juminLen);
        			if( juminLen != 13 ){
        				this.lfn_setErr("주민등록번호는 13자리 숫자로 입력해주세요.  " + STUDENTNOinfo);
        			}

        		}
        */

        		if( MOBILENO !="000-0000-0000" &&  MOBILENO !="000-000-0000" ){
        			if(!regHpExp.test( MOBILENO  )) {
        				this.lfn_setErr("휴대폰번호 형식이 올바르지 않습니다.  " + STUDENTNOinfo);
        			}
        		}

        		//졸업연월 -------------------------------
        		/*
        		if(OUTYM != "" && OUTYM !=null ){
        			var OUTYMLen = OUTYM.length;
        			if( OUTYMLen != 8 ){
        				this.lfn_setErr("졸업연월을 YYYYMMDD형식으로 입력해주세요.  " + STUDENTNOinfo);
        			}

        			var eduYear01 = "20"+this.fv_SURVSEQ.substring(0,2);
        			var eduYear02 = "20"+eval(this.fv_SURVSEQ.substring(0,2) ) - 1+"";
        			if ( eduYear01 != OUTYM.substring(0,4)  && eduYear02 != OUTYM.substring(0,4)  ){
        				this.lfn_setErr( eduYear01 + "," + eduYear02 + " 졸업연도만 등록가능합니다.  " + STUDENTNOinfo);
        			}
        		}
        		*/

        		//alert(9999);
        		//if( JUMINNO != ""  &&   JUMINNO !=null){

        			//성별등록  -----------------------------------------------------------
        			var vSEXCD ="";
        			/*
        			if(vJUMINNO && (vJUMINNO.substring(6,7)=='1' || vJUMINNO.substring(6,7)=='3' || vJUMINNO.substring(6,7)=='5')  || vJUMINNO.substring(6,7)=='7')
        				vSEXCD ="1";
        			else if(vJUMINNO && (vJUMINNO.substring(6,7)=='2' || vJUMINNO.substring(6,7)=='4' || vJUMINNO.substring(6,7)=='6') || vJUMINNO.substring(6,7)=='8')
        				vSEXCD ="2";
        			*/

        			/*
        			if(SEXCD=="남자"){
        				SEXCD="1";
        			}
        			if(SEXCD=="여자"){
        				SEXCD="2";
        			}
        			this.dsSave.setColumn(i,"SEXCD",SEXCD );

        			// 외국인 여부 (5~8)  -----------------------------------------------
        			//alert("exch="+EXCHANGEYN);

        			if(EXCHANGEYN=="예"){
        				EXCHANGEYN="1";
        			}
        			if(EXCHANGEYN=="아니요"){
        				EXCHANGEYN="2";
        			}

        			this.dsSave.setColumn(i,"EXCHANGEYN",EXCHANGEYN );
        			*/

        			/*
        			if( vJUMINNO.substring(6,7) >='5' &&  vJUMINNO.substring(6,7) <='8' ){

        				this.dsSave.setColumn(i,"EXCHANGEYN","1" );
        			}else{
        				this.dsSave.setColumn(i,"EXCHANGEYN","2" );
        			}
        			*/
        		//}

        	}  // end for

        //alert("in xlssave 3 aft_loop");

        	//alert(this.dsErr.rowcount);
        	if(this.dsErr.rowcount>0){
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "파일등록 오류", strParam);  //파일등록 오류
        		this.fn_err_pop();  // 클라이언트 오류시 팝업 호출
        		return;
        	}

        	//alert("end proc aft regist");
        	//return false;

        	//alert(strParam);
        	//return false;


        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "파일등록", strParam);  //파일등록
        	this.gfnTransaction("insertBatchAgRegist",
        						"/swiss/gp/baserel/insertBatchGpRegist.do",
        						"dsSearch=dsSave dsSearch00=dsSearch00",
        						"gds_rtn_result=dsResult",
        						"",
        						"fnCallback",
        						false);

        };
        ////////excel end /////////////////////////////////////////////////////////////////

        // 주민번호 검증 (2020년 10월부터 부여된 주민등록번호는 검증 하지 못함)
        this.chkJuminNo = function(ssn,chkNum)
        {
        	//var aa = ssn.substr(1, 1);
        	//var bb = ssn.substr(7, 6);
        	//alert(aa + "-"+ bb);
        	var s1 = Number(ssn.substr(0, 1)) * 2;
        	var s2 = Number(ssn.substr(1, 1)) * 3;
        	var s3 = Number(ssn.substr(2, 1)) * 4;
        	var s4 = Number(ssn.substr(3, 1)) * 5;
        	var s5 = Number(ssn.substr(4, 1)) * 6;
        	var s6 = Number(ssn.substr(5, 1)) * 7;
        	var s7 = Number(ssn.substr(6, 1)) * 8;
        	var s8 = Number(ssn.substr(7, 1)) * 9;
        	var s9 = Number(ssn.substr(8, 1)) * 2;
        	var s10 = Number(ssn.substr(9, 1)) * 3;
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


        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 			+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD		+ "ª";
        	strParam += "SCHCD="		+ this.fv_SCHCD				+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD				+ "ª";

        	strParam += "STUDENTNO="	+ this.Div.form.sub_fileErr.form.sel_stu_no.value	+ "ª";
        	strParam += "DEPTNM="		+ this.Div.form.sub_fileErr.form.set_dept.value		+ "ª";

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

        // 페이지 초기화 함수
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
        	var sel_dept = "";
        	var sel_dayNight = "";

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

        	if(this.fv_SURVTERM !=  "Y"){
        		this.alert("선택된 학교는 조사기간이 아닙니다.");
        		return false;
        	}

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	//this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "검색", strParam);  //해당 학교의 연계결과 조회

        	this.gfnTransaction("selectGpBFList",
        						"/swiss/gp/baserel/selectGpBFList.do",
        						"dsSearch=dsSearch",
        						"dsOutExcel=dsResult",
        						"",
        						"fnCallback",
        						false);
        };
        this.btn_code_onclick = function(obj,e)
        {
        	this.ds_fileDownList.clearData();

        	var nRow = this.ds_fileDownList.addRow();

        	var svcBaseUrl = nexacro.getEnvironment().services["svcBaseUrl"].url;
        	var downUrl ="doc";
        	if (svcBaseUrl.indexOf("localhost") > 0 ){
        			 downUrl = "C:/eGovFrameDev-3.8.0-64bit/server/apache-tomcat-9.0.31/webapps/swiss/docdown/";
        	}

        	this.ds_fileDownList.setColumn(nRow, "SAVE_PATH", downUrl );
         	this.ds_fileDownList.setColumn(nRow, "SAVE_FILE_NAME", "GPsurvCode.hwp");
         	this.ds_fileDownList.setColumn(nRow, "REAL_FILE_NAME", "졸업생정보코드.hwp");
        	////trace(this.ds_fileDownList.saveXML());
        	// 서버로 전송할 파일정보 셋팅
        	this.fileDownTrans.setPostData("fileInfo", this.ds_fileDownList.saveXML());
        	this.fileDownTrans.set_downloadfilename(this.ds_fileDownList.getColumn(0, "REAL_FILE_NAME"));

        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "코드집", "");  //접속기록

        	// 파일 다운로드 실행
        	this.fileDownTrans.download();

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

        	this.exportObj.addEventHandler("onsuccess", this.Export00_onsuccess, this);
        	this.exportObj.set_exporttype(nexacro.ExportTypes.EXCEL2007);
        	this.exportObj.set_exportactivemode( "active" );
        	this.exportObj.set_exporturl("svcBaseUrl::XExportImport.do");
        	this.exportObj.set_exportfilename("오류내역");

        	this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div.form.Grid_err, "Sheet1!A1", "allrecord", "allrecord", "suppress", "allstyle","none","none","both");

        	this.exportObj.set_exporteventtype("itemrecord");
        	this.exportObj.set_exportuitype("exportprogress");
        	this.exportObj.set_exportmessageprocess("%d[%d/%d]");
        	trace("exporturl== "+this.exportObj.exporturl);

        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "오류내역 파일저장", "");//오류내역 파일저장

        	var result = this.exportObj.exportData();
        };

        // 등록 완료처리
        /*
        this.btn_finish_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        {
        	var strParam = "";

        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD		+ "ª";
        	strParam += "SCHCD="		+ this.fv_SCHCD	+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD	+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.gfnTransaction("insertSurvFinish",
        						"/swiss/fp/baserel/insertSurvFinish.do",
        						"dsSearch=dsSearch",
        						"gds_rtn_result=dsResult",
        						"",
        						"fnCallback",
        						false);
        };
        */

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

        	// ---------- 선택 학교 종류
        	this.fv_SCHKINDCD = this.ds_chgSchool.getColumn(0,"SCHKINDCD");
        	//alert("fv_SCHKINDCD:"+this.fv_SCHKINDCD);
        };

        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        //등록결과 조회
        this.selectGpReginfo = function(){

        	var strParam = "";
        	strParam += "tmp="				+ "a" 					+ "ª";
        	strParam += "SURVSEQ="			+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="		+ this.fv_SURVKINDCD	+ "ª";
        	strParam += "SCHCD="			+ this.fv_SCHCD			+ "ª";
        	strParam += "ORGCD="			+ this.fv_ORGCD			+ "ª";
        	//strParam += "COLNM="			+ this.Div.form.sub_search.form.sel_colcd.value		+ "ª";
        	strParam += "DEPTNM="			+ this.Div.form.sub_fileErr.form.set_dept.value		+ "ª";
        	strParam += "STUDENTNO="		+ this.Div.form.sub_fileErr.form.sel_stu_no.value	+ "ª";
        	strParam += "STUDENTNAME="		+ this.Div.form.sub_fileErr.form.sel_stu_nm.value	+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "검색(정보조회)", strParam);  //결과조회
        	this.gfnTransaction("selectGpReginfo",
        						"/swiss/gp/insertrel/selectGpReginfo.do",
        						"dsSearch=dsSearch",
        						"ds_regResult=dsResult",
        						"",
        						"fnCallback",
        						false);

        }

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

        // 상태 처리
        this.statusSave = function()
        {
        	var strParam = "";
        	strParam += "tmp="				+ "a" 					+ "ª";
        	strParam += "SURVSEQ="			+ this.fv_SURVSEQ		+ "ª";
        	strParam += "SURVKINDCD="		+ this.fv_SURVKINDCD	+ "ª";

        	strParam += "SCHCD="			+ this.fv_SCHCD			+ "ª";
        	strParam += "ORGCD="			+ this.fv_ORGCD			+ "ª";
        	strParam += "RCEPTCN="			+ this.fv_RCEPTCN		+ "ª";
        	strParam += "STATUSCD="			+ this.fv_STATUSCD		+ "ª";	// 상태 - 연계결과  수정요청

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
        	strParam += "STATUSparamCD="	+ "0081" 				+ "ª";  // 신편입 상태 파람

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.gfnTransaction("getFpSchStatus",
        						"/swiss/fp/insertrel/getFpSchStatus.do",
        						"dsSearch=dsSearch",
        						"gds_rtn_result=dsResult",
        						"",
        						"fnCallback",
        						false);

        }


        // 결과조회 보기
        this.showGpReginfo = function(){
        	var UNIGRADECD = this.ds_chgSchool.getColumn(0, "UNIGRADECD");// 학교등급 대학원/ 대학교

        	this.Div.form.Grid_err.set_visible(false);                            //오류내역 숨기기
        	this.Div.form.sub_fileErr.form.btn_errChk_search.set_visible(false);  //오류검색 버튼 숨기기
        	this.Div.form.btn_err_save.set_visible(false);

        	if( UNIGRADECD == "1"){
        		this.Div.form.Grid_rel_01.set_visible(true);
        	}
        	if( UNIGRADECD == "2"){
        		this.Div.form.Grid_rel_02.set_visible(true);
        	}
        	//this.Div.form.Grid_rel_01.set_visible(true);                             //결과조회 보이기
        	this.Div.form.sub_fileErr.form.btn_search.set_visible(true);          //결과조회 검색버튼 보이기
        	this.Div.form.sub_fileErr.form.sel_stu_nm.set_visible(true);          //검색창에 이름 인풋박스 보이기
        	this.Div.form.sub_fileErr.form.sel_stu_nm_label.set_visible(true);    //검색창에 이름 인풋라벨 보이기
        	this.Div.form.btn_rel_save.set_visible(true);

        	this.selectGpReginfo();
        };

        // 오류내역 보기
        this.showErr = function(){
        	var UNIGRADECD = this.ds_chgSchool.getColumn(0, "UNIGRADECD");// 학교등급 대학원/ 대학교

        	this.Div.form.Grid_err.set_visible(true);                             //오류내역 보이기
        	this.Div.form.sub_fileErr.form.btn_errChk_search.set_visible(true);   //오류검색 버튼 보이기
        	this.Div.form.btn_err_save.set_visible(true);

        	if( UNIGRADECD == "1"){
        		this.Div.form.Grid_rel_01.set_visible(false);
        	}
        	if( UNIGRADECD == "2"){
        		this.Div.form.Grid_rel_02.set_visible(false);
        	}

        	//this.Div.form.Grid_rel_01.set_visible(false);                            //결과조회 숨기기
        	this.Div.form.sub_fileErr.form.btn_search.set_visible(false);         //결과조회 검색버튼 숨기기
        	this.Div.form.sub_fileErr.form.sel_stu_nm.set_visible(false);         //검색창에 이름 인풋박스 숨기기
        	this.Div.form.sub_fileErr.form.sel_stu_nm_label.set_visible(false);   //검색창에 이름 인풋라벨 숨기기
        	this.Div.form.btn_rel_save.set_visible(false);

        	this.Div.form.btn_con.set_visible(false);
        	this.Div.form.btn_re.set_visible(false);
        	this.Div.form.btn_sub.set_visible(false);

        	this.lfn_listSaveError(1);
        };

        // 상태 전산제출
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

        	var SURVPROSTATUSCD = this.ds_chgSchool.getColumn(0, "SURVPROSTATUSCD");  // 상태코드
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
        		this.alert("졸업생정보 등록 상태에서만 제출이 가능합니다. 파일을 등록해주세요.");
        		return;
        	}

        	this.fv_RCEPTCN = "" ;
        	this.fv_STATUSCD = "8";  //전산-신입생정보 제출
        	this.statusSave();
        };
        // 상태 승인
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

        	var SURVPROSTATUSCD = this.ds_chgSchool.getColumn(0, "SURVPROSTATUSCD");  // 상태코드
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
        // 상태 반려
        this.btn_re_onclick = function(obj,e)
        {
        	if(this.fv_SURVTERM !=  "Y"){
        		this.alert("선택된 학교는 조사기간이 아닙니다.");
        		return;
        	}

        	if(!this.confirm("반려하시겠습니까?")){
        		return;
        	}

        	var SURVPROSTATUSCD = this.ds_chgSchool.getColumn(0, "SURVPROSTATUSCD");  // 상태코드
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

        // 정보조회 엑셀다운로드
        this.btn_rel_save_onclick = function(obj,e)
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
        	this.exportObj.set_exportfilename("결과조회");
        	//trace(this.exportObj.exportfilename);

        	var UNIGRADECD = this.ds_chgSchool.getColumn(0, "UNIGRADECD");// 학교등급 대학원/ 대학교
        	//alert(UNIGRADECD);
        	if( UNIGRADECD == "1"){
        		this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div.form.Grid_rel_01, "Sheet1!A1", "allrecord", "allrecord", "suppress", "allstyle","none","none","both");
        	}
        	if( UNIGRADECD == "2"){
        		this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div.form.Grid_rel_02, "Sheet1!A1", "allrecord", "allrecord", "suppress", "allstyle","none","none","both");
        	}


        	this.exportObj.set_exporteventtype("itemrecord");
        	this.exportObj.set_exportuitype("exportprogress");
        	this.exportObj.set_exportmessageprocess("%d[%d/%d]");
        	trace("exporturl== "+this.exportObj.exporturl);

        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "결과조회 파일저장", "");  //결과조회 파일저장

        	var result = this.exportObj.exportData();
        };

        this.Div_grid_err_btn_onclick = function(obj,e)//오류내역 조회 버튼
        {
        	if( this.dsSummary.getColumn(0,"ERRCHKCNT") == "0" &&  this.dsSummary.getColumn(0,"ERRCNT") == "0" ){
        		this.alert("오류 내역이 없습니다.");
        		//this.showErr();//오류내역
        	}

        	/*else if( this.dsSummary.getColumn(0,"ERRCNT") != "0"){ //오류
        		this.showErr();//오류내역
        	}else if( this.dsSummary.getColumn(0,"ERRCHKCNT") != "0" &&  this.dsSummary.getColumn(0,"ERRCNT") == "0"){ //확인사항
        		this.showErr();//오류내역
        	}*/

        	this.showErr();//오류내역
        };

        this.Div_grid_rel_btn_onclick = function(obj,e)//결과조회 버튼
        {
        	if( this.dsSummary.getColumn(0,"ERRCHKCNT") == "0" &&  this.dsSummary.getColumn(0,"ERRCNT") == "0" ){
        		this.showGpReginfo();//정보조회
        	}else if( this.dsSummary.getColumn(0,"ERRCNT") != "0"){ //오류
        		this.showErr();//오류내역
        		this.alert("파일 등록 중 오류가 발생했습니다. 정보 조회를 할 수 없습니다.");
        	}else if( this.dsSummary.getColumn(0,"ERRCHKCNT") != "0" &&  this.dsSummary.getColumn(0,"ERRCNT") == "0"){ //확인사항
        		this.showGpReginfo();//정보조회
        	}
        };

        this.Div_sub_fileErr_btn_search_onclick = function(obj,e)
        {
        	this.selectGpReginfo();
        	if(this.ds_regResult.getRowCount() < 1){
        		alert("조회된 자료가 없습니다.");
        	}
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

        this.lfn_excelOutputSave = function()
        {
        	var UNIGRADECD = this.ds_chgSchool.getColumn(0, "UNIGRADECD");// 학교등급 대학원/ 대학교
        	//alert("in eos");
        	if(this.dsOutExcel.getRowCount()==0){
        		alert("저장할 데이터가 없습니다.");
        		return;
        	}else{
        		if(UNIGRADECD=='1'){
        			//alert("in 1");
        			this.utlf_excelDownload("학부_졸업생정보조사서식_"+this.getFormatDate(),this.Div.form.Grid_rel_01_xls,this.Export00_onsuccess);
        		}else{
        			//alert("in 2");
        			this.utlf_excelDownload("대학원_졸업생정보조사서식_"+this.getFormatDate(),this.Div.form.Grid_rel_02_xls,this.Export00_onsuccess);
        		}
        	}
        };

        this.Export00_onsuccess = function (obj, e )
        {

        	this.setWaitCursor(false);
        	trace(e.eventid);
        	//alert("on success");
        };

        this.getFormatDate  = function(){
        	var date = new Date();
            var year = date.getFullYear();              //yyyy
            var month = (1 + date.getMonth());          //M
            month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
            var day = date.getDate();                   //d
            day = day >= 10 ? day : '0' + day;          //day 두자리로 저장
            return  year + '_' + month + '_' + day;       //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
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
            this.addEventHandler("onload",this.gp04m00_onload,this);
            this.Div.form.stepArea00_00_00.form.gp01m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_00_00.form.gp02m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_00_00.form.gp03m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_00_00.form.gp04m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_00_00.form.gp05m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_00_00.form.gp06m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_00_00.form.gp07m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.sub_file.form.Div01.form.btn_form.addEventHandler("onclick",this.btn_form_onclick,this);
            this.Div.form.sub_file.form.Div01.form.btn_code.addEventHandler("onclick",this.btn_code_onclick,this);
            this.Div.form.sub_file.form.btn_xls_up.addEventHandler("onclick",this.btn_xls_up_onclick,this);
            this.Div.form.sub_fileErr.form.sel_stu_no.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.sub_fileErr.form.btn_errChk_search.addEventHandler("onclick",this.btn_errChk_onclick,this);
            this.Div.form.sub_fileErr.form.btn_search.addEventHandler("onclick",this.Div_sub_fileErr_btn_search_onclick,this);
            this.Div.form.sub_fileErr.form.set_dept.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.sub_fileErr.form.sel_stu_nm.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.btn_err_save.addEventHandler("onclick",this.btn_xls_onclick,this);
            this.Div.form.btn_con.addEventHandler("onclick",this.btn_con_onclick,this);
            this.Div.form.btn_re.addEventHandler("onclick",this.btn_re_onclick,this);
            this.Div.form.btn_sub.addEventHandler("onclick",this.btn_sub_onclick,this);
            this.Div.form.grid_rel_btn.addEventHandler("onclick",this.Div_grid_rel_btn_onclick,this);
            this.Div.form.grid_err_btn.addEventHandler("onclick",this.Div_grid_err_btn_onclick,this);
            this.Div.form.btn_rel_save.addEventHandler("onclick",this.btn_rel_save_onclick,this);
        };

        this.loadIncludeScript("gp04m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
