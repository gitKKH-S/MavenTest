(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ad20m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("15px/normal \"SpoqaHanSans-Regular\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,920);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/><Column id=\"Column20\" type=\"STRING\" size=\"256\"/><Column id=\"Column21\" type=\"STRING\" size=\"256\"/><Column id=\"Column22\" type=\"STRING\" size=\"256\"/><Column id=\"Column23\" type=\"STRING\" size=\"256\"/><Column id=\"Column24\" type=\"STRING\" size=\"256\"/><Column id=\"Column25\" type=\"STRING\" size=\"256\"/><Column id=\"Column26\" type=\"STRING\" size=\"256\"/><Column id=\"Column27\" type=\"STRING\" size=\"256\"/><Column id=\"Column28\" type=\"STRING\" size=\"256\"/><Column id=\"Column29\" type=\"STRING\" size=\"256\"/><Column id=\"Column30\" type=\"STRING\" size=\"256\"/><Column id=\"Column31\" type=\"STRING\" size=\"256\"/><Column id=\"Column32\" type=\"STRING\" size=\"256\"/><Column id=\"Column33\" type=\"STRING\" size=\"256\"/><Column id=\"Column34\" type=\"STRING\" size=\"256\"/><Column id=\"Column35\" type=\"STRING\" size=\"256\"/><Column id=\"Column36\" type=\"STRING\" size=\"256\"/><Column id=\"Column37\" type=\"STRING\" size=\"256\"/><Column id=\"Column38\" type=\"STRING\" size=\"256\"/><Column id=\"Column39\" type=\"STRING\" size=\"256\"/><Column id=\"Column40\" type=\"STRING\" size=\"256\"/><Column id=\"Column41\" type=\"STRING\" size=\"256\"/><Column id=\"Column42\" type=\"STRING\" size=\"256\"/><Column id=\"Column43\" type=\"STRING\" size=\"256\"/><Column id=\"Column44\" type=\"STRING\" size=\"256\"/><Column id=\"Column45\" type=\"STRING\" size=\"256\"/><Column id=\"Column46\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_webloglist", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSave", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"SUCCNT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SCHKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDNM\" type=\"STRING\" size=\"32\"/><Column id=\"SURVPROSTATUSNM\" type=\"STRING\" size=\"32\"/><Column id=\"RNUM\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SURVPROSTATUSCD\" type=\"STRING\" size=\"32\"/><Column id=\"TOTALSUCCNT\" type=\"STRING\" size=\"32\"/><Column id=\"TOTALCNT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"_chk\" type=\"string\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"TRAININGSEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_survList", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSEQ_TXT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select_gubun", this);
            obj._setContents("<ColumnInfo><Column id=\"select_gubun_id\" type=\"STRING\" size=\"256\"/><Column id=\"select_gubun_nm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"select_gubun_id\">I</Col><Col id=\"select_gubun_nm\">사용자ID</Col></Row><Row><Col id=\"select_gubun_id\">U</Col><Col id=\"select_gubun_nm\">성명</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYmd", this);
            obj._setContents("<ColumnInfo><Column id=\"ymd\" type=\"STRING\" size=\"256\"/><Column id=\"ymdnm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsErr", this);
            obj._setContents("<ColumnInfo><Column id=\"ERRDESC\" type=\"STRING\" size=\"256\"/><Column id=\"ERRKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"ERRKINDCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelBf", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDNM\" type=\"STRING\" size=\"32\"/><Column id=\"TRAININGNM\" type=\"STRING\" size=\"256\"/><Column id=\"TRAININGDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RNUM\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANGNM\" type=\"STRING\" size=\"32\"/><Column id=\"TRAININGYN\" type=\"STRING\" size=\"16\"/><Column id=\"NM1\" type=\"STRING\" size=\"32\"/><Column id=\"NM2\" type=\"STRING\" size=\"32\"/><Column id=\"NM3\" type=\"STRING\" size=\"256\"/><Column id=\"NM4\" type=\"STRING\" size=\"256\"/><Column id=\"NM5\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"_chk\" type=\"string\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSaveExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDNM\" type=\"STRING\" size=\"32\"/><Column id=\"TRAININGNM\" type=\"STRING\" size=\"256\"/><Column id=\"TRAININGDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RNUM\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANGNM\" type=\"STRING\" size=\"32\"/><Column id=\"TRAININGYN\" type=\"STRING\" size=\"16\"/><Column id=\"NM1\" type=\"STRING\" size=\"32\"/><Column id=\"NM2\" type=\"STRING\" size=\"32\"/><Column id=\"NM3\" type=\"STRING\" size=\"256\"/><Column id=\"NM4\" type=\"STRING\" size=\"256\"/><Column id=\"NM5\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"_chk\" type=\"string\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSaveGrdpsninfo", this);
            obj._setContents("<ColumnInfo><Column id=\"RNUM\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"STUDENTNO\" type=\"STRING\" size=\"32\"/><Column id=\"COLCD\" type=\"STRING\" size=\"32\"/><Column id=\"COLNM\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"DNCD\" type=\"STRING\" size=\"32\"/><Column id=\"DETAILDEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"DEGREECD\" type=\"STRING\" size=\"32\"/><Column id=\"SUBDEPTCD\" type=\"STRING\" size=\"32\"/><Column id=\"SUBDEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"MULTIDEPTCD\" type=\"STRING\" size=\"32\"/><Column id=\"MULTIDEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"INYM\" type=\"STRING\" size=\"32\"/><Column id=\"OUTYM\" type=\"STRING\" size=\"32\"/><Column id=\"OUTGRACE\" type=\"STRING\" size=\"32\"/><Column id=\"TRANSFERYM\" type=\"STRING\" size=\"32\"/><Column id=\"TRANSCLOSEYN\" type=\"STRING\" size=\"32\"/><Column id=\"EXCHANGEYN\" type=\"STRING\" size=\"32\"/><Column id=\"UNIQUEKEY\" type=\"STRING\" size=\"32\"/><Column id=\"NAME\" type=\"STRING\" size=\"32\"/><Column id=\"JUMINNO\" type=\"STRING\" size=\"32\"/><Column id=\"BIRTHYEAR\" type=\"STRING\" size=\"32\"/><Column id=\"AGE\" type=\"STRING\" size=\"32\"/><Column id=\"SEXCD\" type=\"STRING\" size=\"32\"/><Column id=\"ADDR\" type=\"STRING\" size=\"32\"/><Column id=\"ZIPCODE\" type=\"STRING\" size=\"32\"/><Column id=\"MOBILENO\" type=\"STRING\" size=\"32\"/><Column id=\"EMAILADDR\" type=\"STRING\" size=\"32\"/><Column id=\"OUTHSCD\" type=\"STRING\" size=\"32\"/><Column id=\"OUTHSNM\" type=\"STRING\" size=\"32\"/><Column id=\"OVERSEAYN\" type=\"STRING\" size=\"32\"/><Column id=\"TEACHERTIYN\" type=\"STRING\" size=\"32\"/><Column id=\"INTERNSHIPYN\" type=\"STRING\" size=\"32\"/><Column id=\"DISABLEDYN\" type=\"STRING\" size=\"32\"/><Column id=\"GRADSCORE\" type=\"STRING\" size=\"32\"/><Column id=\"TOEIC\" type=\"STRING\" size=\"32\"/><Column id=\"TRUSTYN\" type=\"STRING\" size=\"32\"/><Column id=\"SPCLINYN\" type=\"STRING\" size=\"32\"/><Column id=\"THESISNM\" type=\"STRING\" size=\"32\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"32\"/><Column id=\"CHGPCNAME\" type=\"STRING\" size=\"32\"/><Column id=\"CHGPCID\" type=\"STRING\" size=\"32\"/><Column id=\"CHGDTHM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSaveFrspsninfo", this);
            obj._setContents("<ColumnInfo><Column id=\"RNUM\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"STUDENTSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"COLCD\" type=\"STRING\" size=\"32\"/><Column id=\"COLNM\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"DNCD\" type=\"STRING\" size=\"32\"/><Column id=\"STUDENTNO\" type=\"STRING\" size=\"32\"/><Column id=\"UNIQUEKEY\" type=\"STRING\" size=\"32\"/><Column id=\"NAME\" type=\"STRING\" size=\"32\"/><Column id=\"JUMINNO\" type=\"STRING\" size=\"32\"/><Column id=\"BIRTHYEAR\" type=\"STRING\" size=\"32\"/><Column id=\"SEXCD\" type=\"STRING\" size=\"32\"/><Column id=\"AGE\" type=\"STRING\" size=\"32\"/><Column id=\"EXCHANGEYN\" type=\"STRING\" size=\"32\"/><Column id=\"ENTRANCETYPE\" type=\"STRING\" size=\"32\"/><Column id=\"ENTRANCEDATE\" type=\"STRING\" size=\"32\"/><Column id=\"ENTRANCEYEAR\" type=\"STRING\" size=\"32\"/><Column id=\"DEGREECD\" type=\"STRING\" size=\"32\"/><Column id=\"REGISTERTYPE\" type=\"STRING\" size=\"32\"/><Column id=\"REGISTERDATE\" type=\"STRING\" size=\"32\"/><Column id=\"COUNT\" type=\"STRING\" size=\"32\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"32\"/><Column id=\"CHGPCNAME\" type=\"STRING\" size=\"32\"/><Column id=\"CHGPCID\" type=\"STRING\" size=\"32\"/><Column id=\"CHGDTHM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSaveAtrgrdinfo", this);
            obj._setContents("<ColumnInfo><Column id=\"RNUM\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"COLCD\" type=\"STRING\" size=\"32\"/><Column id=\"COLNM\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"DNCD\" type=\"STRING\" size=\"32\"/><Column id=\"MOECLASS\" type=\"STRING\" size=\"32\"/><Column id=\"DETAILDEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"DEGREECD\" type=\"STRING\" size=\"32\"/><Column id=\"INYM\" type=\"STRING\" size=\"32\"/><Column id=\"OUTYM\" type=\"STRING\" size=\"32\"/><Column id=\"EXCHANGEYN\" type=\"STRING\" size=\"32\"/><Column id=\"STUDENTNO\" type=\"STRING\" size=\"32\"/><Column id=\"UNIQUEKEY\" type=\"STRING\" size=\"32\"/><Column id=\"BIRTHYEAR\" type=\"STRING\" size=\"32\"/><Column id=\"SEXCD\" type=\"STRING\" size=\"32\"/><Column id=\"AGE\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPECD\" type=\"STRING\" size=\"32\"/><Column id=\"WELFARECD\" type=\"STRING\" size=\"32\"/><Column id=\"CLERICYN\" type=\"STRING\" size=\"32\"/><Column id=\"STARTDT\" type=\"STRING\" size=\"32\"/><Column id=\"ENDDT\" type=\"STRING\" size=\"32\"/><Column id=\"SCHWORKFORM\" type=\"STRING\" size=\"32\"/><Column id=\"WORKHOUR\" type=\"STRING\" size=\"32\"/><Column id=\"NACODE\" type=\"STRING\" size=\"32\"/><Column id=\"FORGCOMNM\" type=\"STRING\" size=\"32\"/><Column id=\"OVERSEAVISATYPE\" type=\"STRING\" size=\"32\"/><Column id=\"OVERSEAVISAYN\" type=\"STRING\" size=\"32\"/><Column id=\"OVERSEAWORKTYPE\" type=\"STRING\" size=\"32\"/><Column id=\"SAMEUNIVYN\" type=\"STRING\" size=\"32\"/><Column id=\"GOSCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"GOORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"GOFORGSCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"ARTNM\" type=\"STRING\" size=\"32\"/><Column id=\"ARTPL\" type=\"STRING\" size=\"32\"/><Column id=\"ARTPO\" type=\"STRING\" size=\"32\"/><Column id=\"ALDYEMPLYN\" type=\"STRING\" size=\"32\"/><Column id=\"TRANSCLOSEYN\" type=\"STRING\" size=\"32\"/><Column id=\"MNTNEMPLYN1\" type=\"STRING\" size=\"32\"/><Column id=\"MNTNEMPLYN2\" type=\"STRING\" size=\"32\"/><Column id=\"MNTNEMPLYN3\" type=\"STRING\" size=\"32\"/><Column id=\"MNTNEMPLYN4\" type=\"STRING\" size=\"32\"/><Column id=\"TARGETYN\" type=\"STRING\" size=\"32\"/><Column id=\"SALARY\" type=\"STRING\" size=\"32\"/><Column id=\"INDLGROUPCD\" type=\"STRING\" size=\"32\"/><Column id=\"COMTYPE\" type=\"STRING\" size=\"32\"/><Column id=\"COMSIZE\" type=\"STRING\" size=\"32\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"32\"/><Column id=\"CHGPCNAME\" type=\"STRING\" size=\"32\"/><Column id=\"CHGPCID\" type=\"STRING\" size=\"32\"/><Column id=\"CHGDTHM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSaveAtrgrdrst", this);
            obj._setContents("<ColumnInfo><Column id=\"RNUM\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"COLCD\" type=\"STRING\" size=\"32\"/><Column id=\"COLNM\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"DNCD\" type=\"STRING\" size=\"32\"/><Column id=\"MOECLASS\" type=\"STRING\" size=\"32\"/><Column id=\"DETAILDEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"DEGREECD\" type=\"STRING\" size=\"32\"/><Column id=\"INYM\" type=\"STRING\" size=\"32\"/><Column id=\"OUTYM\" type=\"STRING\" size=\"32\"/><Column id=\"EXCHANGEYN\" type=\"STRING\" size=\"32\"/><Column id=\"STUDENTNO\" type=\"STRING\" size=\"32\"/><Column id=\"UNIQUEKEY\" type=\"STRING\" size=\"32\"/><Column id=\"BIRTHYEAR\" type=\"STRING\" size=\"32\"/><Column id=\"SEXCD\" type=\"STRING\" size=\"32\"/><Column id=\"AGE\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPECD\" type=\"STRING\" size=\"32\"/><Column id=\"WELFARECD\" type=\"STRING\" size=\"32\"/><Column id=\"CLERICYN\" type=\"STRING\" size=\"32\"/><Column id=\"STARTDT\" type=\"STRING\" size=\"32\"/><Column id=\"ENDDT\" type=\"STRING\" size=\"32\"/><Column id=\"SCHWORKFORM\" type=\"STRING\" size=\"32\"/><Column id=\"WORKHOUR\" type=\"STRING\" size=\"32\"/><Column id=\"NACODE\" type=\"STRING\" size=\"32\"/><Column id=\"FORGCOMNM\" type=\"STRING\" size=\"32\"/><Column id=\"OVERSEAVISATYPE\" type=\"STRING\" size=\"32\"/><Column id=\"OVERSEAVISAYN\" type=\"STRING\" size=\"32\"/><Column id=\"OVERSEAWORKTYPE\" type=\"STRING\" size=\"32\"/><Column id=\"SAMEUNIVYN\" type=\"STRING\" size=\"32\"/><Column id=\"GOSCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"GOORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"GOFORGSCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"ARTNM\" type=\"STRING\" size=\"32\"/><Column id=\"ARTPL\" type=\"STRING\" size=\"32\"/><Column id=\"ARTPO\" type=\"STRING\" size=\"32\"/><Column id=\"ALDYEMPLYN\" type=\"STRING\" size=\"32\"/><Column id=\"TRANSCLOSEYN\" type=\"STRING\" size=\"32\"/><Column id=\"MNTNEMPLYN1\" type=\"STRING\" size=\"32\"/><Column id=\"MNTNEMPLYN2\" type=\"STRING\" size=\"32\"/><Column id=\"MNTNEMPLYN3\" type=\"STRING\" size=\"32\"/><Column id=\"MNTNEMPLYN4\" type=\"STRING\" size=\"32\"/><Column id=\"TARGETYN\" type=\"STRING\" size=\"32\"/><Column id=\"SALARY\" type=\"STRING\" size=\"32\"/><Column id=\"INDLGROUPCD\" type=\"STRING\" size=\"32\"/><Column id=\"COMTYPE\" type=\"STRING\" size=\"32\"/><Column id=\"COMSIZE\" type=\"STRING\" size=\"32\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"32\"/><Column id=\"ACQUIRE\" type=\"STRING\" size=\"32\"/><Column id=\"MASTER_CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CHGPCNAME\" type=\"STRING\" size=\"32\"/><Column id=\"CHGPCID\" type=\"STRING\" size=\"32\"/><Column id=\"CHGDTHM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSaveAtrgrdrstfnl", this);
            obj._setContents("<ColumnInfo><Column id=\"RNUM\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"COLCD\" type=\"STRING\" size=\"32\"/><Column id=\"COLNM\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"DNCD\" type=\"STRING\" size=\"32\"/><Column id=\"MOECLASS\" type=\"STRING\" size=\"32\"/><Column id=\"DETAILDEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"DEGREECD\" type=\"STRING\" size=\"32\"/><Column id=\"INYM\" type=\"STRING\" size=\"32\"/><Column id=\"OUTYM\" type=\"STRING\" size=\"32\"/><Column id=\"EXCHANGEYN\" type=\"STRING\" size=\"32\"/><Column id=\"STUDENTNO\" type=\"STRING\" size=\"32\"/><Column id=\"UNIQUEKEY\" type=\"STRING\" size=\"32\"/><Column id=\"BIRTHYEAR\" type=\"STRING\" size=\"32\"/><Column id=\"SEXCD\" type=\"STRING\" size=\"32\"/><Column id=\"AGE\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPECD\" type=\"STRING\" size=\"32\"/><Column id=\"WELFARECD\" type=\"STRING\" size=\"32\"/><Column id=\"CLERICYN\" type=\"STRING\" size=\"32\"/><Column id=\"STARTDT\" type=\"STRING\" size=\"32\"/><Column id=\"ENDDT\" type=\"STRING\" size=\"32\"/><Column id=\"SCHWORKFORM\" type=\"STRING\" size=\"32\"/><Column id=\"WORKHOUR\" type=\"STRING\" size=\"32\"/><Column id=\"NACODE\" type=\"STRING\" size=\"32\"/><Column id=\"FORGCOMNM\" type=\"STRING\" size=\"32\"/><Column id=\"OVERSEAVISATYPE\" type=\"STRING\" size=\"32\"/><Column id=\"OVERSEAVISAYN\" type=\"STRING\" size=\"32\"/><Column id=\"OVERSEAWORKTYPE\" type=\"STRING\" size=\"32\"/><Column id=\"SAMEUNIVYN\" type=\"STRING\" size=\"32\"/><Column id=\"GOSCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"GOORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"GOFORGSCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"ARTNM\" type=\"STRING\" size=\"32\"/><Column id=\"ARTPL\" type=\"STRING\" size=\"32\"/><Column id=\"ARTPO\" type=\"STRING\" size=\"32\"/><Column id=\"ALDYEMPLYN\" type=\"STRING\" size=\"32\"/><Column id=\"TRANSCLOSEYN\" type=\"STRING\" size=\"32\"/><Column id=\"MNTNEMPLYN1\" type=\"STRING\" size=\"32\"/><Column id=\"MNTNEMPLYN2\" type=\"STRING\" size=\"32\"/><Column id=\"MNTNEMPLYN3\" type=\"STRING\" size=\"32\"/><Column id=\"MNTNEMPLYN4\" type=\"STRING\" size=\"32\"/><Column id=\"TARGETYN\" type=\"STRING\" size=\"32\"/><Column id=\"SALARY\" type=\"STRING\" size=\"32\"/><Column id=\"INDLGROUPCD\" type=\"STRING\" size=\"32\"/><Column id=\"COMTYPE\" type=\"STRING\" size=\"32\"/><Column id=\"COMSIZE\" type=\"STRING\" size=\"32\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"32\"/><Column id=\"CHGPCNAME\" type=\"STRING\" size=\"32\"/><Column id=\"CHGPCID\" type=\"STRING\" size=\"32\"/><Column id=\"CHGDTHM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","915",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Div("sub_title_wrap","30","20","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            this.Div.addChild(obj.name, obj);

            obj = new Static("sub_title","0","0","370","32",null,null,null,null,null,null,this.Div.form.sub_title_wrap.form);
            obj.set_taborder("0");
            obj.set_text("DB이력관리");
            obj.set_cssclass(" title_t2");
            this.Div.form.sub_title_wrap.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","20",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","910",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Div("sub_search","30","62","1200","80",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"23","100","30","29",null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("5");
            obj.set_text("검색");
            obj.set_cssclass("btn_styLarge");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("label_00_01","30","23","64","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("0");
            obj.set_text("검색일자");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Calendar("in_calr_start","label_00_01:10","23","160","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("label_00_00_00","in_calr_start:10","24","18","24",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("6");
            obj.set_text("~");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Calendar("in_calr_end","in_calr_start:30","23","160","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("2");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_00","61","79","64","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("3");
            obj.set_text("학교");
            obj.set_visible("false");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_schnm","104","79","160","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_visible("false");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","292","79","64","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("7");
            obj.set_text("학번");
            obj.set_visible("false");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_studentno","345","79","160","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_visible("false");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","535","79","79","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("9");
            obj.set_text("개인식별키");
            obj.set_visible("false");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_uniquekey","623","79","160","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_visible("false");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","910",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Static("label_fileCnt","44","227","446","30",null,null,null,null,null,null,this.Div.form);
            obj.set_text("");
            obj.set_textAlign("left");
            obj.set_color("#000000");
            obj.set_visible("true");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_filesave",null,"sub_search:20","100","30","30",null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_text("파일저장");
            obj.set_visible("true");
            obj.set_cssclass("btn_sty05");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("gd_main","35","btn_filesave:17",null,"532","30",null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_webloglist");
            obj.set_cellmovingtype("col");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("none");
            obj.set_cssclass("grid_sty02");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"100\"/><Column size=\"179\"/><Column size=\"129\"/><Column size=\"120\"/><Column size=\"212\"/><Column size=\"48\"/><Column size=\"60\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"일시\"/><Cell col=\"1\" text=\"대상\"/><Cell col=\"2\" text=\"유형\"/><Cell col=\"3\" text=\"PC\"/><Cell col=\"4\" text=\"로그인ID\"/><Cell col=\"5\" colspan=\"2\" text=\"메모\"/><Cell col=\"7\" text=\"이전자료\"/></Band><Band id=\"body\"><Cell text=\"bind:CHGDTHM\"/><Cell col=\"1\" text=\"bind:CHGTABLE\"/><Cell col=\"2\" text=\"bind:CHGTYPE\"/><Cell col=\"3\" text=\"bind:CHGPCNAME\"/><Cell col=\"4\" text=\"bind:CHGPCID\"/><Cell col=\"5\" displaytype=\"editcontrol\" edittype=\"text\" maskedittype=\"string\" editmaxlength=\"1000\" editautoselect=\"true\" editinputtype=\"normal\" text=\"bind:CHGMEMO\"/><Cell col=\"6\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"수정\"/><Cell col=\"7\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"내려받기\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Div("pagingWrap","30","845","1200","60",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_pagging","360","11","480","40",null,null,null,null,null,null,this.Div.form.pagingWrap.form);
            obj.set_taborder("0");
            obj.set_text("div_00");
            obj.set_url("CM::CmPagging.xfdl");
            this.Div.form.pagingWrap.addChild(obj.name, obj);

            obj = new Grid("ge_grdpsninfo","250","gd_main:-185","820","136",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("10");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("dsSaveGrdpsninfo");
            obj.set_cellmovingtype("col");
            obj.set_visible("false");
            obj.set_cssclass("default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"조사기준일\"/><Cell col=\"2\" text=\"조사구분\"/><Cell col=\"3\" text=\"학교코드\"/><Cell col=\"4\" text=\"본분교코드\"/><Cell col=\"5\" text=\"학번\"/><Cell col=\"6\" text=\"단과대학코드\"/><Cell col=\"7\" text=\"단과대학명\"/><Cell col=\"8\" text=\"학과코드\"/><Cell col=\"9\" text=\"학과명\"/><Cell col=\"10\" text=\"주야코드\"/><Cell col=\"11\" text=\"학과소분류명\"/><Cell col=\"12\" text=\"학위\"/><Cell col=\"13\" text=\"부전공코드\"/><Cell col=\"14\" text=\"부전공명\"/><Cell col=\"15\" text=\"복수전공코드\"/><Cell col=\"16\" text=\"복수전공명\"/><Cell col=\"17\" text=\"입학년월\"/><Cell col=\"18\" text=\"졸업년월\"/><Cell col=\"19\" text=\"졸업유예기간\"/><Cell col=\"20\" text=\"편입여부\"/><Cell col=\"21\" text=\"특별편입학생여부\"/><Cell col=\"22\" text=\"외국인유학생여부\"/><Cell col=\"23\" text=\"개인식별키\"/><Cell col=\"24\" text=\"이름\"/><Cell col=\"25\" text=\"주민번호\"/><Cell col=\"26\" text=\"생년월일\"/><Cell col=\"27\" text=\"나이\"/><Cell col=\"28\" text=\"성별코드\"/><Cell col=\"29\" text=\"주소\"/><Cell col=\"30\" text=\"우편번호\"/><Cell col=\"31\" text=\"핸드폰번호\"/><Cell col=\"32\" text=\"이메일주소\"/><Cell col=\"33\" text=\"출신고교지역코드\"/><Cell col=\"34\" text=\"출신고교명\"/><Cell col=\"35\" text=\"해외연수여부\"/><Cell col=\"36\" text=\"교직과정이수여부\"/><Cell col=\"37\" text=\"현장실습여부\"/><Cell col=\"38\" text=\"장애인여부\"/><Cell col=\"39\" text=\"졸업평점\"/><Cell col=\"40\" text=\"토익점수\"/><Cell col=\"41\" text=\"산업체위탁자여부\"/><Cell col=\"42\" text=\"국가기술자격증여부\"/><Cell col=\"43\" text=\"논문명\"/><Cell col=\"44\" text=\"작업자ID\"/><Cell col=\"45\" text=\"작업일시\"/><Cell col=\"46\" text=\"PC명\"/><Cell col=\"47\" text=\"PC로그인ID\"/><Cell col=\"48\" text=\"변경일시\"/></Band><Band id=\"body\"><Cell text=\"bind:SEQ\"/><Cell col=\"1\" text=\"bind:SURVSEQ\"/><Cell col=\"2\" text=\"bind:SURVKINDCD\"/><Cell col=\"3\" text=\"bind:SCHCD\"/><Cell col=\"4\" text=\"bind:ORGCD\"/><Cell col=\"5\" text=\"bind:STUDENTNO\"/><Cell col=\"6\" text=\"bind:COLCD\"/><Cell col=\"7\" text=\"bind:COLNM\"/><Cell col=\"8\" text=\"bind:DEPTCD\"/><Cell col=\"9\" text=\"bind:DEPTNM\"/><Cell col=\"10\" text=\"bind:DNCD\"/><Cell col=\"11\" text=\"bind:DETAILDEPTNM\"/><Cell col=\"12\" text=\"bind:DEGREECD\"/><Cell col=\"13\" text=\"bind:SUBDEPTCD\"/><Cell col=\"14\" text=\"bind:SUBDEPTNM\"/><Cell col=\"15\" text=\"bind:MULTIDEPTCD\"/><Cell col=\"16\" text=\"bind:MULTIDEPTNM\"/><Cell col=\"17\" text=\"bind:INYM\"/><Cell col=\"18\" text=\"bind:OUTYM\"/><Cell col=\"19\" text=\"bind:OUTGRACE\"/><Cell col=\"20\" text=\"bind:TRANSFERYM\"/><Cell col=\"21\" text=\"bind:TRANSCLOSEYN\"/><Cell col=\"22\" text=\"bind:EXCHANGEYN\"/><Cell col=\"23\" text=\"bind:UNIQUEKEY\"/><Cell col=\"24\" text=\"bind:NAME\"/><Cell col=\"25\" text=\"bind:JUMINNO\"/><Cell col=\"26\" text=\"bind:BIRTHYEAR\"/><Cell col=\"27\" text=\"bind:AGE\"/><Cell col=\"28\" text=\"bind:SEXCD\"/><Cell col=\"29\" text=\"bind:ADDR\"/><Cell col=\"30\" text=\"bind:ZIPCODE\"/><Cell col=\"31\" text=\"bind:MOBILENO\"/><Cell col=\"32\" text=\"bind:EMAILADDR\"/><Cell col=\"33\" text=\"bind:OUTHSCD\"/><Cell col=\"34\" text=\"bind:OUTHSNM\"/><Cell col=\"35\" text=\"bind:OVERSEAYN\"/><Cell col=\"36\" text=\"bind:TEACHERTIYN\"/><Cell col=\"37\" text=\"bind:INTERNSHIPYN\"/><Cell col=\"38\" text=\"bind:DISABLEDYN\"/><Cell col=\"39\" text=\"bind:GRADSCORE\"/><Cell col=\"40\" text=\"bind:TOEIC\"/><Cell col=\"41\" text=\"bind:TRUSTYN\"/><Cell col=\"42\" text=\"bind:SPCLINYN\"/><Cell col=\"43\" text=\"bind:THESISNM\"/><Cell col=\"44\" text=\"bind:WORKERID\"/><Cell col=\"45\" text=\"bind:WORKDTHM\"/><Cell col=\"46\" text=\"bind:CHGPCNAME\"/><Cell col=\"47\" text=\"bind:CHGPCID\"/><Cell col=\"48\" text=\"bind:CHGDTHM\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("ge_frspsninfo","250","gd_main:-185","820","136",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("10");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("dsSaveFrspsninfo");
            obj.set_cellmovingtype("col");
            obj.set_visible("false");
            obj.set_cssclass("default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"조사기준일\"/><Cell col=\"2\" text=\"조사구분\"/><Cell col=\"3\" text=\"학교코드\"/><Cell col=\"4\" text=\"본분교코드\"/><Cell col=\"5\" text=\"학생순번\"/><Cell col=\"6\" text=\"단과대학코드\"/><Cell col=\"7\" text=\"단과대학명\"/><Cell col=\"8\" text=\"학과코드\"/><Cell col=\"9\" text=\"학과명\"/><Cell col=\"10\" text=\"주야코드\"/><Cell col=\"11\" text=\"학번\"/><Cell col=\"12\" text=\"개인식별키\"/><Cell col=\"13\" text=\"이름\"/><Cell col=\"14\" text=\"주민번호\"/><Cell col=\"15\" text=\"생년월일\"/><Cell col=\"16\" text=\"성별코드\"/><Cell col=\"17\" text=\"나이\"/><Cell col=\"18\" text=\"외국인유학생여부\"/><Cell col=\"19\" text=\"입학구분\"/><Cell col=\"20\" text=\"입학년월일\"/><Cell col=\"21\" text=\"입학학기\"/><Cell col=\"22\" text=\"학위\"/><Cell col=\"23\" text=\"학적상태\"/><Cell col=\"24\" text=\"학적변동발생일\"/><Cell col=\"25\" text=\"중복 카운트\"/><Cell col=\"26\" text=\"작업자ID\"/><Cell col=\"27\" text=\"작업일시\"/><Cell col=\"28\" text=\"PC명\"/><Cell col=\"29\" text=\"PC로그인ID\"/><Cell col=\"30\" text=\"변경일시\"/></Band><Band id=\"body\"><Cell text=\"bind:SEQ\"/><Cell col=\"1\" text=\"bind:SURVSEQ\"/><Cell col=\"2\" text=\"bind:SURVKINDCD\"/><Cell col=\"3\" text=\"bind:SCHCD\"/><Cell col=\"4\" text=\"bind:ORGCD\"/><Cell col=\"5\" text=\"bind:STUDENTSEQ\"/><Cell col=\"6\" text=\"bind:COLCD\"/><Cell col=\"7\" text=\"bind:COLNM\"/><Cell col=\"8\" text=\"bind:DEPTCD\"/><Cell col=\"9\" text=\"bind:DEPTNM\"/><Cell col=\"10\" text=\"bind:DNCD\"/><Cell col=\"11\" text=\"bind:STUDENTNO\"/><Cell col=\"12\" text=\"bind:UNIQUEKEY\"/><Cell col=\"13\" text=\"bind:NAME\"/><Cell col=\"14\" text=\"bind:JUMINNO\"/><Cell col=\"15\" text=\"bind:BIRTHYEAR\"/><Cell col=\"16\" text=\"bind:SEXCD\"/><Cell col=\"17\" text=\"bind:AGE\"/><Cell col=\"18\" text=\"bind:EXCHANGEYN\"/><Cell col=\"19\" text=\"bind:ENTRANCETYPE\"/><Cell col=\"20\" text=\"bind:ENTRANCEDATE\"/><Cell col=\"21\" text=\"bind:ENTRANCEYEAR\"/><Cell col=\"22\" text=\"bind:DEGREECD\"/><Cell col=\"23\" text=\"bind:REGISTERTYPE\"/><Cell col=\"24\" text=\"bind:REGISTERDATE\"/><Cell col=\"25\" text=\"bind:COUNT\"/><Cell col=\"26\" text=\"bind:WORKERID\"/><Cell col=\"27\" text=\"bind:WORKDTHM\"/><Cell col=\"28\" text=\"bind:CHGPCNAME\"/><Cell col=\"29\" text=\"bind:CHGPCID\"/><Cell col=\"30\" text=\"bind:CHGDTHM\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("ge_atrgrdinfo","250","gd_main:-185","820","136",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("10");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("dsSaveAtrgrdinfo");
            obj.set_cellmovingtype("col");
            obj.set_visible("false");
            obj.set_cssclass("default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"조사기준일\"/><Cell col=\"2\" text=\"조사종류\"/><Cell col=\"3\" text=\"학교종류코드\"/><Cell col=\"4\" text=\"학교코드\"/><Cell col=\"5\" text=\"본분교코드\"/><Cell col=\"6\" text=\"단과대학코드\"/><Cell col=\"7\" text=\"단과대학명\"/><Cell col=\"8\" text=\"학과코드\"/><Cell col=\"9\" text=\"학과명\"/><Cell col=\"10\" text=\"주야코드\"/><Cell col=\"11\" text=\"학부명\"/><Cell col=\"12\" text=\"학위\"/><Cell col=\"13\" text=\"입학년월\"/><Cell col=\"14\" text=\"졸업년월\"/><Cell col=\"15\" text=\"외국인유학생여부\"/><Cell col=\"16\" text=\"학번\"/><Cell col=\"17\" text=\"개인식별키\"/><Cell col=\"18\" text=\"생년월일\"/><Cell col=\"19\" text=\"성별코드\"/><Cell col=\"20\" text=\"나이\"/><Cell col=\"21\" text=\"취업구분코드\"/><Cell col=\"22\" text=\"제외인정자코드\"/><Cell col=\"23\" text=\"종교지도자여부\"/><Cell col=\"24\" text=\"시작일자\"/><Cell col=\"25\" text=\"종료일자\"/><Cell col=\"26\" text=\"교내근무형태\"/><Cell col=\"27\" text=\"근무시간\"/><Cell col=\"28\" text=\"국가코드\"/><Cell col=\"29\" text=\"해외회사명\"/><Cell col=\"30\" text=\"해외비자유형\"/><Cell col=\"31\" text=\"해외비자여부\"/><Cell col=\"32\" text=\"해외근무형태\"/><Cell col=\"33\" text=\"동대학원진학여부\"/><Cell col=\"34\" text=\"진학학교코드\"/><Cell col=\"35\" text=\"진학학교본분교코드\"/><Cell col=\"36\" text=\"해외진학학교명\"/><Cell col=\"37\" text=\"공연명/전시회명/출판작품명/시나리오명/저작권명\"/><Cell col=\"38\" text=\"공연장소/전시장소/출판사\"/><Cell col=\"39\" text=\"역할/전시작품명/출판작품명\"/><Cell col=\"40\" text=\"입학당시취업여부\"/><Cell col=\"41\" text=\"특별편입학생여부\"/><Cell col=\"42\" text=\"건강보험추가연계_1차(유지취업여부)\"/><Cell col=\"43\" text=\"건강보험추가연계_2차(유지취업여부)\"/><Cell col=\"44\" text=\"건강보험추가연계_3차(유지취업여부)\"/><Cell col=\"45\" text=\"건강보험추가연계_4차(유지취업여부)\"/><Cell col=\"46\" text=\"분석대상자여부\"/><Cell col=\"47\" text=\"급여\"/><Cell col=\"48\" text=\"산업분류\"/><Cell col=\"49\" text=\"기업유형\"/><Cell col=\"50\" text=\"기업규모\"/><Cell col=\"51\" text=\"작업자ID\"/><Cell col=\"52\" text=\"작업일시\"/><Cell col=\"53\" text=\"PC명\"/><Cell col=\"54\" text=\"PC로그인ID\"/><Cell col=\"55\" text=\"변경일시\"/></Band><Band id=\"body\"><Cell text=\"bind:SEQ\"/><Cell col=\"1\" text=\"bind:SURVSEQ\"/><Cell col=\"2\" text=\"bind:SURVKINDCD\"/><Cell col=\"2\" text=\"bind:SCHKINDCD\"/><Cell col=\"3\" text=\"bind:SCHCD\"/><Cell col=\"4\" text=\"bind:ORGCD\"/><Cell col=\"5\" text=\"bind:COLCD\"/><Cell col=\"6\" text=\"bind:COLNM\"/><Cell col=\"7\" text=\"bind:DEPTCD\"/><Cell col=\"8\" text=\"bind:DEPTNM\"/><Cell col=\"9\" text=\"bind:DNCD\"/><Cell col=\"10\" text=\"bind:MOECLASS\"/><Cell col=\"11\" text=\"bind:DETAILDEPTNM\"/><Cell col=\"12\" text=\"bind:DEGREECD\"/><Cell col=\"13\" text=\"bind:INYM\"/><Cell col=\"14\" text=\"bind:OUTYM\"/><Cell col=\"15\" text=\"bind:EXCHANGEYN\"/><Cell col=\"16\" text=\"bind:STUDENTNO\"/><Cell col=\"17\" text=\"bind:UNIQUEKEY\"/><Cell col=\"18\" text=\"bind:BIRTHYEAR\"/><Cell col=\"19\" text=\"bind:SEXCD\"/><Cell col=\"20\" text=\"bind:AGE\"/><Cell col=\"21\" text=\"bind:JOBTYPECD\"/><Cell col=\"22\" text=\"bind:WELFARECD\"/><Cell col=\"23\" text=\"bind:CLERICYN\"/><Cell col=\"24\" text=\"bind:STARTDT\"/><Cell col=\"25\" text=\"bind:ENDDT\"/><Cell col=\"26\" text=\"bind:SCHWORKFORM\"/><Cell col=\"27\" text=\"bind:WORKHOUR\"/><Cell col=\"28\" text=\"bind:NACODE\"/><Cell col=\"29\" text=\"bind:FORGCOMNM\"/><Cell col=\"30\" text=\"bind:OVERSEAVISATYPE\"/><Cell col=\"31\" text=\"bind:OVERSEAVISAYN\"/><Cell col=\"32\" text=\"bind:OVERSEAWORKTYPE\"/><Cell col=\"33\" text=\"bind:SAMEUNIVYN\"/><Cell col=\"34\" text=\"bind:GOSCHCD\"/><Cell col=\"35\" text=\"bind:GOORGCD\"/><Cell col=\"36\" text=\"bind:GOFORGSCHNM\"/><Cell col=\"37\" text=\"bind:ARTNM\"/><Cell col=\"38\" text=\"bind:ARTPL\"/><Cell col=\"39\" text=\"bind:ARTPO\"/><Cell col=\"40\" text=\"bind:ALDYEMPLYN\"/><Cell col=\"41\" text=\"bind:TRANSCLOSEYN\"/><Cell col=\"42\" text=\"bind:MNTNEMPLYN1\"/><Cell col=\"43\" text=\"bind:MNTNEMPLYN2\"/><Cell col=\"44\" text=\"bind:MNTNEMPLYN3\"/><Cell col=\"45\" text=\"bind:MNTNEMPLYN4\"/><Cell col=\"46\" text=\"bind:TARGETYN\"/><Cell col=\"47\" text=\"bind:SALARY\"/><Cell col=\"48\" text=\"bind:INDLGROUPCD\"/><Cell col=\"49\" text=\"bind:COMTYPE\"/><Cell col=\"50\" text=\"bind:COMSIZE\"/><Cell col=\"51\" text=\"bind:WORKERID\"/><Cell col=\"52\" text=\"bind:WORKDTHM\"/><Cell col=\"53\" text=\"bind:CHGPCNAME\"/><Cell col=\"54\" text=\"bind:CHGPCID\"/><Cell col=\"55\" text=\"bind:CHGDTHM\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("ge_atrgrdrst","250","gd_main:-185","820","136",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("10");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("dsSaveAtrgrdrst");
            obj.set_cellmovingtype("col");
            obj.set_visible("false");
            obj.set_cssclass("default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"조사기준일\"/><Cell col=\"2\" text=\"조사종류\"/><Cell col=\"3\" text=\"학교종류코드\"/><Cell col=\"4\" text=\"학교코드\"/><Cell col=\"5\" text=\"본분교코드\"/><Cell col=\"6\" text=\"단과대학코드\"/><Cell col=\"7\" text=\"단과대학명\"/><Cell col=\"8\" text=\"학과코드\"/><Cell col=\"9\" text=\"학과명\"/><Cell col=\"10\" text=\"주야코드\"/><Cell col=\"11\" text=\"학부명\"/><Cell col=\"12\" text=\"학위\"/><Cell col=\"13\" text=\"입학년월\"/><Cell col=\"14\" text=\"졸업년월\"/><Cell col=\"15\" text=\"외국인유학생여부\"/><Cell col=\"16\" text=\"학번\"/><Cell col=\"17\" text=\"개인식별키\"/><Cell col=\"18\" text=\"생년월일\"/><Cell col=\"19\" text=\"성별코드\"/><Cell col=\"20\" text=\"나이\"/><Cell col=\"21\" text=\"취업구분코드\"/><Cell col=\"22\" text=\"제외인정자코드\"/><Cell col=\"23\" text=\"종교지도자여부\"/><Cell col=\"24\" text=\"시작일자\"/><Cell col=\"25\" text=\"종료일자\"/><Cell col=\"26\" text=\"교내근무형태\"/><Cell col=\"27\" text=\"근무시간\"/><Cell col=\"28\" text=\"국가코드\"/><Cell col=\"29\" text=\"해외회사명\"/><Cell col=\"30\" text=\"해외비자유형\"/><Cell col=\"31\" text=\"해외비자여부\"/><Cell col=\"32\" text=\"해외근무형태\"/><Cell col=\"33\" text=\"동대학원진학여부\"/><Cell col=\"34\" text=\"진학학교코드\"/><Cell col=\"35\" text=\"진학학교본분교코드\"/><Cell col=\"36\" text=\"해외진학학교명\"/><Cell col=\"37\" text=\"공연명/전시회명/출판작품명/시나리오명/저작권명\"/><Cell col=\"38\" text=\"공연장소/전시장소/출판사\"/><Cell col=\"39\" text=\"역할/전시작품명/출판작품명\"/><Cell col=\"40\" text=\"입학당시취업여부\"/><Cell col=\"41\" text=\"특별편입학생여부\"/><Cell col=\"42\" text=\"건강보험추가연계_1차(유지취업여부)\"/><Cell col=\"43\" text=\"건강보험추가연계_2차(유지취업여부)\"/><Cell col=\"44\" text=\"건강보험추가연계_3차(유지취업여부)\"/><Cell col=\"45\" text=\"건강보험추가연계_4차(유지취업여부)\"/><Cell col=\"46\" text=\"분석대상자여부\"/><Cell col=\"47\" text=\"급여\"/><Cell col=\"48\" text=\"산업분류\"/><Cell col=\"49\" text=\"기업유형\"/><Cell col=\"50\" text=\"기업규모\"/><Cell col=\"51\" text=\"작업자ID\"/><Cell col=\"52\" text=\"작업일시\"/><Cell col=\"53\" text=\"ACQUIRE\"/><Cell col=\"54\" text=\"MASTERCODE\"/><Cell col=\"55\" text=\"PC명\"/><Cell col=\"56\" text=\"PC로그인ID\"/><Cell col=\"57\" text=\"변경일시\"/></Band><Band id=\"body\"><Cell text=\"bind:SEQ\"/><Cell col=\"1\" text=\"bind:SURVSEQ\"/><Cell col=\"2\" text=\"bind:SURVKINDCD\"/><Cell col=\"2\" text=\"bind:SCHKINDCD\"/><Cell col=\"3\" text=\"bind:SCHCD\"/><Cell col=\"4\" text=\"bind:ORGCD\"/><Cell col=\"5\" text=\"bind:COLCD\"/><Cell col=\"6\" text=\"bind:COLNM\"/><Cell col=\"7\" text=\"bind:DEPTCD\"/><Cell col=\"8\" text=\"bind:DEPTNM\"/><Cell col=\"9\" text=\"bind:DNCD\"/><Cell col=\"10\" text=\"bind:MOECLASS\"/><Cell col=\"11\" text=\"bind:DETAILDEPTNM\"/><Cell col=\"12\" text=\"bind:DEGREECD\"/><Cell col=\"13\" text=\"bind:INYM\"/><Cell col=\"14\" text=\"bind:OUTYM\"/><Cell col=\"15\" text=\"bind:EXCHANGEYN\"/><Cell col=\"16\" text=\"bind:STUDENTNO\"/><Cell col=\"17\" text=\"bind:UNIQUEKEY\"/><Cell col=\"18\" text=\"bind:BIRTHYEAR\"/><Cell col=\"19\" text=\"bind:SEXCD\"/><Cell col=\"20\" text=\"bind:AGE\"/><Cell col=\"21\" text=\"bind:JOBTYPECD\"/><Cell col=\"22\" text=\"bind:WELFARECD\"/><Cell col=\"23\" text=\"bind:CLERICYN\"/><Cell col=\"24\" text=\"bind:STARTDT\"/><Cell col=\"25\" text=\"bind:ENDDT\"/><Cell col=\"26\" text=\"bind:SCHWORKFORM\"/><Cell col=\"27\" text=\"bind:WORKHOUR\"/><Cell col=\"28\" text=\"bind:NACODE\"/><Cell col=\"29\" text=\"bind:FORGCOMNM\"/><Cell col=\"30\" text=\"bind:OVERSEAVISATYPE\"/><Cell col=\"31\" text=\"bind:OVERSEAVISAYN\"/><Cell col=\"32\" text=\"bind:OVERSEAWORKTYPE\"/><Cell col=\"33\" text=\"bind:SAMEUNIVYN\"/><Cell col=\"34\" text=\"bind:GOSCHCD\"/><Cell col=\"35\" text=\"bind:GOORGCD\"/><Cell col=\"36\" text=\"bind:GOFORGSCHNM\"/><Cell col=\"37\" text=\"bind:ARTNM\"/><Cell col=\"38\" text=\"bind:ARTPL\"/><Cell col=\"39\" text=\"bind:ARTPO\"/><Cell col=\"40\" text=\"bind:ALDYEMPLYN\"/><Cell col=\"41\" text=\"bind:TRANSCLOSEYN\"/><Cell col=\"42\" text=\"bind:MNTNEMPLYN1\"/><Cell col=\"43\" text=\"bind:MNTNEMPLYN2\"/><Cell col=\"44\" text=\"bind:MNTNEMPLYN3\"/><Cell col=\"45\" text=\"bind:MNTNEMPLYN4\"/><Cell col=\"46\" text=\"bind:TARGETYN\"/><Cell col=\"47\" text=\"bind:SALARY\"/><Cell col=\"48\" text=\"bind:INDLGROUPCD\"/><Cell col=\"49\" text=\"bind:COMTYPE\"/><Cell col=\"50\" text=\"bind:COMSIZE\"/><Cell col=\"51\" text=\"bind:WORKERID\"/><Cell col=\"52\" text=\"bind:WORKDTHM\"/><Cell col=\"53\" text=\"bind:ACQUIRE\"/><Cell col=\"54\" text=\"bind:MASTER_CODE\"/><Cell col=\"55\" text=\"bind:CHGPCNAME\"/><Cell col=\"56\" text=\"bind:CHGPCID\"/><Cell col=\"57\" text=\"bind:CHGDTHM\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("ge_atrgrdrstfnl","250","gd_main:-185","820","136",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("10");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("dsSaveAtrgrdrstfnl");
            obj.set_cellmovingtype("col");
            obj.set_visible("false");
            obj.set_cssclass("default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"조사기준일\"/><Cell col=\"2\" text=\"조사종류\"/><Cell col=\"3\" text=\"학교종류코드\"/><Cell col=\"4\" text=\"학교코드\"/><Cell col=\"5\" text=\"본분교코드\"/><Cell col=\"6\" text=\"단과대학코드\"/><Cell col=\"7\" text=\"단과대학명\"/><Cell col=\"8\" text=\"학과코드\"/><Cell col=\"9\" text=\"학과명\"/><Cell col=\"10\" text=\"주야코드\"/><Cell col=\"11\" text=\"학부명\"/><Cell col=\"12\" text=\"학위\"/><Cell col=\"13\" text=\"입학년월\"/><Cell col=\"14\" text=\"졸업년월\"/><Cell col=\"15\" text=\"외국인유학생여부\"/><Cell col=\"16\" text=\"학번\"/><Cell col=\"17\" text=\"개인식별키\"/><Cell col=\"18\" text=\"생년월일\"/><Cell col=\"19\" text=\"성별코드\"/><Cell col=\"20\" text=\"나이\"/><Cell col=\"21\" text=\"취업구분코드\"/><Cell col=\"22\" text=\"제외인정자코드\"/><Cell col=\"23\" text=\"종교지도자여부\"/><Cell col=\"24\" text=\"시작일자\"/><Cell col=\"25\" text=\"종료일자\"/><Cell col=\"26\" text=\"교내근무형태\"/><Cell col=\"27\" text=\"근무시간\"/><Cell col=\"28\" text=\"국가코드\"/><Cell col=\"29\" text=\"해외회사명\"/><Cell col=\"30\" text=\"해외비자유형\"/><Cell col=\"31\" text=\"해외비자여부\"/><Cell col=\"32\" text=\"해외근무형태\"/><Cell col=\"33\" text=\"동대학원진학여부\"/><Cell col=\"34\" text=\"진학학교코드\"/><Cell col=\"35\" text=\"진학학교본분교코드\"/><Cell col=\"36\" text=\"해외진학학교명\"/><Cell col=\"37\" text=\"공연명/전시회명/출판작품명/시나리오명/저작권명\"/><Cell col=\"38\" text=\"공연장소/전시장소/출판사\"/><Cell col=\"39\" text=\"역할/전시작품명/출판작품명\"/><Cell col=\"40\" text=\"입학당시취업여부\"/><Cell col=\"41\" text=\"특별편입학생여부\"/><Cell col=\"42\" text=\"건강보험추가연계_1차(유지취업여부)\"/><Cell col=\"43\" text=\"건강보험추가연계_2차(유지취업여부)\"/><Cell col=\"44\" text=\"건강보험추가연계_3차(유지취업여부)\"/><Cell col=\"45\" text=\"건강보험추가연계_4차(유지취업여부)\"/><Cell col=\"46\" text=\"분석대상자여부\"/><Cell col=\"47\" text=\"급여\"/><Cell col=\"48\" text=\"산업분류\"/><Cell col=\"49\" text=\"기업유형\"/><Cell col=\"50\" text=\"기업규모\"/><Cell col=\"51\" text=\"작업자ID\"/><Cell col=\"52\" text=\"작업일시\"/><Cell col=\"55\" text=\"PC명\"/><Cell col=\"56\" text=\"PC로그인ID\"/><Cell col=\"57\" text=\"변경일시\"/></Band><Band id=\"body\"><Cell text=\"bind:SEQ\"/><Cell col=\"1\" text=\"bind:SURVSEQ\"/><Cell col=\"2\" text=\"bind:SURVKINDCD\"/><Cell col=\"2\" text=\"bind:SCHKINDCD\"/><Cell col=\"3\" text=\"bind:SCHCD\"/><Cell col=\"4\" text=\"bind:ORGCD\"/><Cell col=\"5\" text=\"bind:COLCD\"/><Cell col=\"6\" text=\"bind:COLNM\"/><Cell col=\"7\" text=\"bind:DEPTCD\"/><Cell col=\"8\" text=\"bind:DEPTNM\"/><Cell col=\"9\" text=\"bind:DNCD\"/><Cell col=\"10\" text=\"bind:MOECLASS\"/><Cell col=\"11\" text=\"bind:DETAILDEPTNM\"/><Cell col=\"12\" text=\"bind:DEGREECD\"/><Cell col=\"13\" text=\"bind:INYM\"/><Cell col=\"14\" text=\"bind:OUTYM\"/><Cell col=\"15\" text=\"bind:EXCHANGEYN\"/><Cell col=\"16\" text=\"bind:STUDENTNO\"/><Cell col=\"17\" text=\"bind:UNIQUEKEY\"/><Cell col=\"18\" text=\"bind:BIRTHYEAR\"/><Cell col=\"19\" text=\"bind:SEXCD\"/><Cell col=\"20\" text=\"bind:AGE\"/><Cell col=\"21\" text=\"bind:JOBTYPECD\"/><Cell col=\"22\" text=\"bind:WELFARECD\"/><Cell col=\"23\" text=\"bind:CLERICYN\"/><Cell col=\"24\" text=\"bind:STARTDT\"/><Cell col=\"25\" text=\"bind:ENDDT\"/><Cell col=\"26\" text=\"bind:SCHWORKFORM\"/><Cell col=\"27\" text=\"bind:WORKHOUR\"/><Cell col=\"28\" text=\"bind:NACODE\"/><Cell col=\"29\" text=\"bind:FORGCOMNM\"/><Cell col=\"30\" text=\"bind:OVERSEAVISATYPE\"/><Cell col=\"31\" text=\"bind:OVERSEAVISAYN\"/><Cell col=\"32\" text=\"bind:OVERSEAWORKTYPE\"/><Cell col=\"33\" text=\"bind:SAMEUNIVYN\"/><Cell col=\"34\" text=\"bind:GOSCHCD\"/><Cell col=\"35\" text=\"bind:GOORGCD\"/><Cell col=\"36\" text=\"bind:GOFORGSCHNM\"/><Cell col=\"37\" text=\"bind:ARTNM\"/><Cell col=\"38\" text=\"bind:ARTPL\"/><Cell col=\"39\" text=\"bind:ARTPO\"/><Cell col=\"40\" text=\"bind:ALDYEMPLYN\"/><Cell col=\"41\" text=\"bind:TRANSCLOSEYN\"/><Cell col=\"42\" text=\"bind:MNTNEMPLYN1\"/><Cell col=\"43\" text=\"bind:MNTNEMPLYN2\"/><Cell col=\"44\" text=\"bind:MNTNEMPLYN3\"/><Cell col=\"45\" text=\"bind:MNTNEMPLYN4\"/><Cell col=\"46\" text=\"bind:TARGETYN\"/><Cell col=\"47\" text=\"bind:SALARY\"/><Cell col=\"48\" text=\"bind:INDLGROUPCD\"/><Cell col=\"49\" text=\"bind:COMTYPE\"/><Cell col=\"50\" text=\"bind:COMSIZE\"/><Cell col=\"51\" text=\"bind:WORKERID\"/><Cell col=\"52\" text=\"bind:WORKDTHM\"/><Cell col=\"55\" text=\"bind:CHGPCNAME\"/><Cell col=\"56\" text=\"bind:CHGPCID\"/><Cell col=\"57\" text=\"bind:CHGDTHM\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Combo("in_survkind","917","140","160","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_visible("false");
            var Div_form_in_survkind_innerdataset = new nexacro.NormalDataset("Div_form_in_survkind_innerdataset", obj);
            Div_form_in_survkind_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">GP</Col><Col id=\"datacolumn\">졸업생정보</Col></Row><Row><Col id=\"codecolumn\">FP</Col><Col id=\"datacolumn\">신입생정보</Col></Row><Row><Col id=\"codecolumn\">AG</Col><Col id=\"datacolumn\">졸업후상황</Col></Row></Rows>");
            obj.set_innerdataset(Div_form_in_survkind_innerdataset);
            obj.set_value("");
            obj.set_index("0");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_01","833","140","74","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("10");
            obj.set_text("조사기준");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","516","82","74","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("16");
            obj.set_text("대상테이블");
            obj.set_visible("true");
            this.Div.addChild(obj.name, obj);

            obj = new Combo("in_chgtable","600","82","160","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("17");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_visible("true");
            var Div_form_in_chgtable_innerdataset = new nexacro.NormalDataset("Div_form_in_chgtable_innerdataset", obj);
            Div_form_in_chgtable_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">GRDPSNINFO</Col><Col id=\"datacolumn\">학교-졸업생정보</Col></Row><Row><Col id=\"codecolumn\">FRSPSNINFO</Col><Col id=\"datacolumn\">학교-신입생정보</Col></Row><Row><Col id=\"codecolumn\">ATRGRDINFO</Col><Col id=\"datacolumn\">학교-졸업후상황</Col></Row><Row><Col id=\"codecolumn\">ATRGRDRST</Col><Col id=\"datacolumn\">졸업후상황-연계</Col></Row><Row><Col id=\"codecolumn\">ATRGRDINFO</Col><Col id=\"datacolumn\">졸업후상황-최종</Col></Row></Rows>");
            obj.set_innerdataset(Div_form_in_chgtable_innerdataset);
            obj.set_value("");
            obj.set_index("0");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","810","82","40","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("18");
            obj.set_text("유형");
            obj.set_visible("true");
            this.Div.addChild(obj.name, obj);

            obj = new Combo("in_chgtype","860","82","160","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_visible("true");
            var Div_form_in_chgtype_innerdataset = new nexacro.NormalDataset("Div_form_in_chgtype_innerdataset", obj);
            Div_form_in_chgtype_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">UPDATE</Col><Col id=\"datacolumn\">수정</Col></Row><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row></Rows>");
            obj.set_innerdataset(Div_form_in_chgtype_innerdataset);
            obj.set_value("");
            obj.set_index("0");
            this.Div.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,920,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","div_00.form.in_calr_00_00","value","dsMain","SURVENDDT");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CM::CmPagging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("ad33m00.xfdl","CM::common.xjs");
        this.addIncludeScript("ad33m00.xfdl","CM::utl_script.xjs");
        this.registerScript("ad33m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;
        this.executeIncludeScript("CM::utl_script.xjs"); /*include "CM::utl_script.xjs"*/;

        //기본변수세팅
        this.fv_USERID = "";
        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "";
        //페이징
        this.pageRowCnt = 30;
        this.totalRowCnt = 0;
        this.pageFirst = true;

        this.fv_MENUNM = "관리자>시스템관리>DB이력관리";

        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		this.setAccessLog("", "AG", this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		//alert(serviceID);

        		if(serviceID == "selectDBHistoryList"){
        			//alert(0);
        			var tcnt = this.ds_webloglist.rowcount;
        			//alert("tcnt="+tcnt);
        			var tMsg = "검색결과 : "+tcnt.toLocaleString()+"건";
        			//alert("tMsg2="+tMsg);

        			this.Div.form.label_fileCnt.set_text(tMsg);
        		}

        		if(serviceID == "GRDPSNINFO"){
        			//alert("start_down grdpsninfo");
        			this.utlf_excelDownload("GRDPSNINFO_",this.Div.form.ge_grdpsninfo ,this.Export00_onsuccess);
        		}
        		if(serviceID == "FRSPSNINFO"){
        			this.utlf_excelDownload("FRSPSNINFO_",this.Div.form.ge_frspsninfo ,this.Export00_onsuccess);
        		}
        		if(serviceID == "ATRGRDINFO"){
        			this.utlf_excelDownload("ATRGRDINFO_",this.Div.form.ge_atrgrdinfo ,this.Export00_onsuccess);
        		}
        		if(serviceID == "ATRGRDRST"){
        			this.utlf_excelDownload("ATRGRDRST_",this.Div.form.ge_atrgrdrst ,this.Export00_onsuccess);
        		}
        		if(serviceID == "ATRGRDRSTFNL"){
        			this.utlf_excelDownload("ATRGRDRSTFNL_",this.Div.form.ge_atrgrdrstfnl ,this.Export00_onsuccess);
        		}
        		if(serviceID == "listTrainFile"){

        		}
        		if(serviceId == "updateDBHMemo"){
        			alert("수정 되었습니다.");
        			//this.fn_goPage("HP::hp05m00.xfdl");
        		}

         	}
        }

        this.btn_search_onclick = function(obj,e)
        {
        	//this.pageFirst = true;
        	//this.lfn_listPage(1);
        	this.selectWebLogList();
        };

        /*
        this.gd_main_body6.addEventHandler("onclick",this.eachBtnClick,this);

        this.eachBtnClick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        {
        	alert("in eachBtnClick="+insKey.value);
        };
        */


        /*
        this.lfn_listPage = function(sPage)
        {
        	var start = (sPage - 1) * this.pageRowCnt + 1;
        	var end = sPage * this.pageRowCnt;
        	var strParam = "";
        	strParam += "IN_START=" + start + "ª";
        	strParam += "IN_END=" + end + "ª";

        	strParam += "IN_TARGET=" 		+ this.Div.form.sub_search.form.in_target.value		+ "ª";
        	strParam += "IN_SCHNM="	+ this.Div.form.sub_search.form.in_schnm.value	+ "ª";
        	strParam += "IN_MENUNM=" 	+ this.Div.form.sub_search.form.in_menunm.value		+ "ª";
        	strParam += "IN_ACTION="	+ this.Div.form.sub_search.form.in_action.value	+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	//trace(this.dsSearch.saveXML());
        	this.gfnTransaction("listTrain",
        						"/swiss/ad/survtrain/listTrainNew.do",
        						"dsSearch=dsSearch",
        						"dsMain=dsResult dsPage=dsPage",
        						"",
        						"fnCallback",
        						false);
        };

        // 페이지 초기화 함수
        this.paggingInit = function(){
        	this.Div.form.pagingWrap.form.div_pagging.form.initPages(this.totalRowCnt, this.pageRowCnt); // 전체DATA CNT, 페이지출력수
        	this.Div.form.pagingWrap.form.div_pagging.form.setPage(1);
        }

        // 페이징 완료후 처리
        this.setPageAfter = function (nPage){
        	if(!this.pageFirst)this.lfn_listPage(nPage);
        	this.pageFirst = false;
        }
        */

        this.ad20m00_onload = function(obj,e)
        {
        	var objApp 		= nexacro.getApplication();
        	this.fv_USERID = objApp.gds_login_info.getColumn(0, "USERID") ;
        	this.fv_SURVSEQ = objApp.gds_login_info.getColumn(0, "SURVSEQ");
        	this.fv_SURVKINDCD = objApp.gds_login_info.getColumn(0, "SURVKINDCD");

        	var d = new Date();
        	var year = d.getYear();
        	var month = (d.getMonth() + 1) ;
        	if(month.length == 1){
        		month = "0" + month;
        	}
        	var day = d.getDate();
        	if(day.length == 1){
        		day = "0" + day;
        	}
        	var toDate =  year +"-" +  month +"-" +  day ;

        	this.Div.form.sub_search.form.in_calr_start.set_value(toDate);
        	this.Div.form.sub_search.form.in_calr_end.set_value(toDate);

        	//this.selectWebLogList();

        };


        // 로그인 리스트
        this.selectWebLogList = function(){

        	if( this.Div.form.sub_search.form.in_calr_start.value  > this.Div.form.sub_search.form.in_calr_end.value ){
        		this.alert("검색일자를 정확히 입력 해 주세요.");
        		return;
        	}

        	var input1=this.Div.form.sub_search.form.in_calr_start.value;
        	var input2=this.Div.form.sub_search.form.in_calr_end.value ;
        	var date1 = new Date(input1.substr(0,4),input1.substr(4,2)-1,input1.substr(6,2));
        	var date2 = new Date(input2.substr(0,4),input2.substr(4,2)-1,input2.substr(6,2));
        	var interval = date2 - date1;
        	var day = 1000*60*60*24;

        	/*
        	if( parseInt(interval/day) > 3 ){
        		this.alert("시작일과 종료일 차이는 3일 이내로 선택 해 주세요.");
        		return;
        	}
        	*/

        	var strParam = "";
        	strParam += "tmp="		+ "a" 		+ "ª";

        	strParam += "IN_CALR_START="	+ this.Div.form.sub_search.form.in_calr_start.value	+ "ª";
        	strParam += "IN_CALR_END="	+ this.Div.form.sub_search.form.in_calr_end.value	+ "ª";

        	strParam += "IN_CHGTABLE=" 		+ this.Div.form.in_chgtable.value		+ "ª";
        	strParam += "IN_CHGTYPE=" 		+ this.Div.form.in_chgtype.value		+ "ª";

        	//strParam += "IN_SURVKINDCD=" 		+ this.Div.form.in_survkind.value		+ "ª";
        	strParam += "IN_SCH="	+ this.Div.form.sub_search.form.in_schnm.value	+ "ª";
        	strParam += "IN_STUDENTNO=" 	+ this.Div.form.sub_search.form.in_studentno.value		+ "ª";
        	strParam += "IN_UNIQUEKEY="	+ this.Div.form.sub_search.form.in_uniquekey.value	+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	//this.setAccessLog(this.Div.form.sub_search.form.in_cb_sruvseq.value, this.Div.form.sub_search.form.in_cb_survkindcd.value, this.fv_MENUNM, "검색", strParam);  //접속기록
        	this.gfnTransaction("selectDBHistoryList",
        						"/swiss/ad/system/selectDBHistoryList.do",
        						"dsSearch=dsSearch",
        						"ds_webloglist=dsResult",
        						"",
        						"fnCallback",
        						false);
        };


        this.Div_btn_filesave_onclick = function(obj,e)
        {
        	this.utlf_excelDownload("DB이력관리", this.Div.form.gd_main, this.Export00_onsuccess);
        };

        this.Export00_onsuccess = function (obj, e )
        {
        	//alert(e);
        }

        this.Div_gd_list_oncellclick = function(obj,e)
        {
        	//var columnId = this.getBindColumnIDByIndex(obj, e.cell);
        	//alert("rowInfo=["+e.row+"], columnInfo=["+e.cell+"]");
        	var nRow = this.Div.form.gd_main.getSelectedDatasetRows();
        	var nPos = this.Div.form.gd_main.getCellPos();

        	if(nPos=='6'){
        		//alert("i="+i);


        		var chgdthm = this.ds_webloglist.getColumn(nRow, "CHGDTHM");
        		var chgip = this.ds_webloglist.getColumn(nRow, "CHGIP");
        		var chgtable = this.ds_webloglist.getColumn(nRow, "CHGTABLE");
        		var chgpcid = this.ds_webloglist.getColumn(nRow, "CHGPCID");

        		var chgmemo = this.Div.form.gd_main.getCellValue(nRow,5);
        		//var chgmemo = t

        		//alert("chgmemo="+chgmemo);

        		var strParam = "";
        		strParam += "chgdthm="	+ chgdthm	+ "ª";
        		strParam += "chgip="	+ chgip	+ "ª";

        		strParam += "chgtable="	+ chgtable	+ "ª";
        		strParam += "chgpcid="	+ chgpcid	+ "ª";
        		strParam += "chgmemo="	+ chgmemo	+ "ª";

        		//alert(strParam);

        		dsParamSetArrowBlank(this.dsSearch, strParam);

        		this.gfnTransaction("updateDBHMemo",
        							"/swiss/ad/system/updateDBHMemo.do",
        							"dsSearch=dsSearch",
        							"",
        							"",
        							"fnCallback",
        							false);
        	}

        	if(nPos == '7'){
        		//alert("in download");
        		var nTABLE = this.Div.form.gd_main.getCellValue(nRow,1);
        		var nTYPE = this.Div.form.gd_main.getCellValue(nRow,2);
        		var nNAME = this.Div.form.gd_main.getCellValue(nRow,3);
        		var nID = this.Div.form.gd_main.getCellValue(nRow,4);
        		var nDTHM = this.Div.form.gd_main.getCellValue(nRow,0);

        		//alert("nRow=["+nRow+"], nPos=["+nPos+"], nType=["+nTYPE+"]");

        		if(nTYPE=="UPDATE"){
        			var strParam = "";
        			strParam += "tmp="		+ "a" 		+ "ª";

        			strParam += "IN_CALR_START="	+ this.Div.form.sub_search.form.in_calr_start.value	+ "ª";
        			strParam += "IN_CALR_END="	+ this.Div.form.sub_search.form.in_calr_end.value	+ "ª";

        			strParam += "IN_CHGTABLE="	+ nTABLE	+ "ª";
        			strParam += "IN_CHGPCNAME="	+ nNAME	+ "ª";
        			strParam += "IN_CHGPCID="	+ nID	+ "ª";
        			strParam += "IN_CHGDTHM="	+ nDTHM	+ "ª";

        			//alert(strParam);

        			dsParamSetArrowBlank(this.dsSearch, strParam);
        			//this.setAccessLog(this.Div.form.sub_search.form.in_cb_sruvseq.value, this.Div.form.sub_search.form.in_cb_survkindcd.value, this.fv_MENUNM, "검색", strParam);  //접속기록

        			switch(nTABLE){
        				case 'GRDPSNINFO':
        					this.gfnTransaction("GRDPSNINFO",
        										"/swiss/ad/system/selectDBHistoryDetail.do",
        										"dsSearch=dsSearch",
        										"dsSaveGrdpsninfo=dsResult",
        										"",
        										"fnCallback",
        										false);
        					break;
        				case 'FRSPSNINFO':
        					this.gfnTransaction("FRSPSNINFO",
        										"/swiss/ad/system/selectDBHistoryDetail.do",
        										"dsSearch=dsSearch",
        										"dsSaveFrspsninfo=dsResult",
        										"",
        										"fnCallback",
        										false);
        					break;
        				case 'ATRGRDINFO':
        					this.gfnTransaction("ATRGRDINFO",
        										"/swiss/ad/system/selectDBHistoryDetail.do",
        										"dsSearch=dsSearch",
        										"dsSaveAtrgrdinfo=dsResult",
        										"",
        										"fnCallback",
        										false);
        					break;
        				case 'ATRGRDRST':
        					this.gfnTransaction("ATRGRDRST",
        										"/swiss/ad/system/selectDBHistoryDetail.do",
        										"dsSearch=dsSearch",
        										"dsSaveAtrgrdrst=dsResult",
        										"",
        										"fnCallback",
        										false);
        					break;
        				case 'ATRGRDRSTFNL':
        					this.gfnTransaction("ATRGRDRSTFNL",
        										"/swiss/ad/system/selectDBHistoryDetail.do",
        										"dsSearch=dsSearch",
        										"dsSaveAtrgrdrstfnl=dsResult",
        										"",
        										"fnCallback",
        										false);
        					break;
        			}
        		}else{
        			//alert("무시");
        		}
        	}


        };




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ad20m00_onload,this);
            this.Div.form.sub_search.form.btn_search.addEventHandler("onclick",this.selectWebLogList,this);
            this.Div.form.sub_search.form.in_schnm.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.sub_search.form.in_studentno.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.sub_search.form.in_uniquekey.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.btn_filesave.addEventHandler("onclick",this.Div_btn_filesave_onclick,this);
            this.Div.form.gd_main.addEventHandler("onheadclick",this.Div_gd_main_onheadclick,this);
            this.Div.form.gd_main.addEventHandler("oncellclick",this.Div_gd_list_oncellclick,this);
        };

        this.loadIncludeScript("ad33m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
