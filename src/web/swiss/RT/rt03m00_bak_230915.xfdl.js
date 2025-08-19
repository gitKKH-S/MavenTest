(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("rt03m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,1305);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchool", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"CHGPSNYN\" type=\"STRING\" size=\"256\"/><Column id=\"EVDDOCKIND\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHORGNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJobcode", this);
            obj._setContents("<ColumnInfo><Column id=\"JOBTYPEGROUPNM\" type=\"STRING\" size=\"32\"/><Column id=\"CHGROUPID\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPENM\" type=\"STRING\" size=\"32\"/><Column id=\"USEYN\" type=\"STRING\" size=\"32\"/><Column id=\"MODIFYYN\" type=\"STRING\" size=\"32\"/><Column id=\"ORDERSEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOBTYPECD\" type=\"STRING\" size=\"32\"/><Column id=\"FILEFORMNM\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPEGROUPCD\" type=\"STRING\" size=\"32\"/><Column id=\"DIVISION\" type=\"STRING\" size=\"32\"/><Column id=\"EVDDOCYN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPTCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDncd", this);
            obj._setContents("<ColumnInfo><Column id=\"DNCD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">1</Col><Col id=\"CDNM\">예</Col></Row><Row><Col id=\"CD\">2</Col><Col id=\"CDNM\">아니요</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJobGroupCd", this);
            obj._setContents("<ColumnInfo><Column id=\"JOBTYPEGROUPCD\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPEGROUPNM\" type=\"STRING\" size=\"256\"/><Column id=\"CHGROUPID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSave", this);
            obj._setContents("<ColumnInfo><Column id=\"NACODENM\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"FORGCOMNM\" type=\"STRING\" size=\"256\"/><Column id=\"HLTHINSSCBYN\" type=\"STRING\" size=\"32\"/><Column id=\"SCHWORKFORM\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"32\"/><Column id=\"SEXCD\" type=\"STRING\" size=\"256\"/><Column id=\"GOSCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"GOORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"32\"/><Column id=\"EXCHANGEYN\" type=\"STRING\" size=\"32\"/><Column id=\"SCHWORKFORMNM\" type=\"STRING\" size=\"256\"/><Column id=\"GOSCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"DETAILDEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAWORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"GOORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"GOFORGSCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"SEXNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKHOUR\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISAYN\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISATYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"COLNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHSTATNM\" type=\"STRING\" size=\"256\"/><Column id=\"DNCD\" type=\"STRING\" size=\"32\"/><Column id=\"ALDYEMPLYN\" type=\"STRING\" size=\"256\"/><Column id=\"UNIQUEKEY\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSETELNO\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"STUDENTNO\" type=\"STRING\" size=\"256\"/><Column id=\"STARTDT\" type=\"STRING\" size=\"256\"/><Column id=\"UNIGRADECD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"DNNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHSTATCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOBILENO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAILADDR\" type=\"STRING\" size=\"256\"/><Column id=\"NACODE\" type=\"STRING\" size=\"32\"/><Column id=\"SAMEUNIVYN\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD_BF\" type=\"STRING\" size=\"32\"/><Column id=\"OVERSEAWORKTYPENM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD\" type=\"STRING\" size=\"32\"/><Column id=\"ENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPEGROUPCD\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPEGROUPNM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPL\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPO\" type=\"STRING\" size=\"256\"/><Column id=\"_chk\" type=\"STRING\" size=\"256\"/><Column id=\"ISEVDDOCYN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJobFileNm", this);
            obj._setContents("<ColumnInfo><Column id=\"FILEFORMNM\" type=\"STRING\" size=\"256\"/><Column id=\"FILENM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFileId", this);
            obj._setContents("<ColumnInfo><Column id=\"EVDDOCSEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMain", this);
            obj._setContents("<ColumnInfo><Column id=\"NACODENM\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"DEGREECD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"MOECLASS\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILDEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"FORGCOMNM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPEGROUPCD\" type=\"STRING\" size=\"32\"/><Column id=\"EVDDOCETC\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_FILE_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"SCHWORKFORM\" type=\"STRING\" size=\"256\"/><Column id=\"ISEVDDOCYN\" type=\"STRING\" size=\"32\"/><Column id=\"SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"32\"/><Column id=\"INDLGROUPCD\" type=\"STRING\" size=\"256\"/><Column id=\"SEXCD\" type=\"STRING\" size=\"32\"/><Column id=\"GOSCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"GOORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"COMSIZE\" type=\"STRING\" size=\"256\"/><Column id=\"ATT_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"TRANSCLOSEYN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"32\"/><Column id=\"IMPROPTYN\" type=\"STRING\" size=\"256\"/><Column id=\"EXCHANGEYN\" type=\"STRING\" size=\"256\"/><Column id=\"RTNRN\" type=\"STRING\" size=\"256\"/><Column id=\"TARGETYN\" type=\"STRING\" size=\"256\"/><Column id=\"PAGENO\" type=\"STRING\" size=\"256\"/><Column id=\"CLERICYN\" type=\"STRING\" size=\"256\"/><Column id=\"SCHWORKFORMNM\" type=\"STRING\" size=\"256\"/><Column id=\"GOSCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"32\"/><Column id=\"OVERSEAWORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"GOORGNM\" type=\"STRING\" size=\"256\"/><Column id=\"GOFORGSCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"WELFARECD\" type=\"STRING\" size=\"256\"/><Column id=\"SEXNM\" type=\"STRING\" size=\"32\"/><Column id=\"WORKHOUR\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISAYN\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPO\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISATYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ATT_IDT_NO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"OUTYM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPL\" type=\"STRING\" size=\"256\"/><Column id=\"COLNM\" type=\"STRING\" size=\"256\"/><Column id=\"DNCD\" type=\"STRING\" size=\"32\"/><Column id=\"ALDYEMPLYN\" type=\"STRING\" size=\"256\"/><Column id=\"UNIQUEKEY\" type=\"STRING\" size=\"32\"/><Column id=\"BIRTHYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SCHKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"MNTNEMPLYN4\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"INYM\" type=\"STRING\" size=\"256\"/><Column id=\"EVDDOCSEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AGE\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPEGROUPNM\" type=\"STRING\" size=\"32\"/><Column id=\"STUDENTNO\" type=\"STRING\" size=\"32\"/><Column id=\"STARTDT\" type=\"STRING\" size=\"256\"/><Column id=\"MNTNEMPLYN1\" type=\"STRING\" size=\"256\"/><Column id=\"MNTNEMPLYN2\" type=\"STRING\" size=\"256\"/><Column id=\"MNTNEMPLYN3\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"DNNM\" type=\"STRING\" size=\"32\"/><Column id=\"NACODE\" type=\"STRING\" size=\"256\"/><Column id=\"COMTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SAMEUNIVYN\" type=\"STRING\" size=\"256\"/><Column id=\"RNUM\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"REAL_FILE_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"SAVE_PATH\" type=\"STRING\" size=\"32\"/><Column id=\"OVERSEAWORKTYPENM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTNM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD\" type=\"STRING\" size=\"32\"/><Column id=\"ENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"_chk\" type=\"string\" size=\"1\"/><Column id=\"JOBTYPENM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvdocfile", this);
            obj._setContents("<ColumnInfo><Column id=\"ATT_IDT_NO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"RTNRN\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SAVE_PATH_FILE\" type=\"STRING\" size=\"32\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"PAGENO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"UNIQUEKEY\" type=\"STRING\" size=\"32\"/><Column id=\"EVDDOCETC\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_FILE_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"ISEVDDOCYN\" type=\"STRING\" size=\"32\"/><Column id=\"REAL_FILE_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"SAVE_PATH\" type=\"STRING\" size=\"32\"/><Column id=\"EVDDOCTYPENM\" type=\"STRING\" size=\"32\"/><Column id=\"ATT_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"EVDDOCTYPE\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"EVDDOCSEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"IMPROPTYN\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_MAP_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_MAP_TOT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_NULL_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"NACODENM\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"DEGREECD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"MOECLASS\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILDEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"FORGCOMNM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPEGROUPCD\" type=\"STRING\" size=\"32\"/><Column id=\"EVDDOCETC\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_FILE_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"SCHWORKFORM\" type=\"STRING\" size=\"256\"/><Column id=\"ISEVDDOCYN\" type=\"STRING\" size=\"32\"/><Column id=\"SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"32\"/><Column id=\"INDLGROUPCD\" type=\"STRING\" size=\"256\"/><Column id=\"SEXCD\" type=\"STRING\" size=\"32\"/><Column id=\"GOSCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"GOORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"COMSIZE\" type=\"STRING\" size=\"256\"/><Column id=\"ATT_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"TRANSCLOSEYN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"32\"/><Column id=\"IMPROPTYN\" type=\"STRING\" size=\"256\"/><Column id=\"EXCHANGEYN\" type=\"STRING\" size=\"256\"/><Column id=\"RTNRN\" type=\"STRING\" size=\"256\"/><Column id=\"TARGETYN\" type=\"STRING\" size=\"256\"/><Column id=\"PAGENO\" type=\"STRING\" size=\"256\"/><Column id=\"CLERICYN\" type=\"STRING\" size=\"256\"/><Column id=\"SCHWORKFORMNM\" type=\"STRING\" size=\"256\"/><Column id=\"GOSCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"32\"/><Column id=\"OVERSEAWORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"GOORGNM\" type=\"STRING\" size=\"256\"/><Column id=\"GOFORGSCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"WELFARECD\" type=\"STRING\" size=\"256\"/><Column id=\"SEXNM\" type=\"STRING\" size=\"32\"/><Column id=\"WORKHOUR\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISAYN\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPO\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISATYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ATT_IDT_NO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"OUTYM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPL\" type=\"STRING\" size=\"256\"/><Column id=\"COLNM\" type=\"STRING\" size=\"256\"/><Column id=\"DNCD\" type=\"STRING\" size=\"32\"/><Column id=\"ALDYEMPLYN\" type=\"STRING\" size=\"256\"/><Column id=\"UNIQUEKEY\" type=\"STRING\" size=\"32\"/><Column id=\"BIRTHYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SCHKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"MNTNEMPLYN4\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"INYM\" type=\"STRING\" size=\"256\"/><Column id=\"EVDDOCSEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AGE\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPEGROUPNM\" type=\"STRING\" size=\"32\"/><Column id=\"STUDENTNO\" type=\"STRING\" size=\"32\"/><Column id=\"STARTDT\" type=\"STRING\" size=\"256\"/><Column id=\"MNTNEMPLYN1\" type=\"STRING\" size=\"256\"/><Column id=\"MNTNEMPLYN2\" type=\"STRING\" size=\"256\"/><Column id=\"MNTNEMPLYN3\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"DNNM\" type=\"STRING\" size=\"32\"/><Column id=\"NACODE\" type=\"STRING\" size=\"256\"/><Column id=\"COMTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SAMEUNIVYN\" type=\"STRING\" size=\"256\"/><Column id=\"RNUM\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"REAL_FILE_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"SAVE_PATH\" type=\"STRING\" size=\"32\"/><Column id=\"OVERSEAWORKTYPENM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTNM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD\" type=\"STRING\" size=\"32\"/><Column id=\"ENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"_chk\" type=\"string\" size=\"1\"/><Column id=\"JOBTYPENM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLogInSch", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"256\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSTRTDT\" type=\"STRING\" size=\"256\"/><Column id=\"SURVENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsActive", this);
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search_step", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_ID\">2</Col><Col id=\"CODE_NM\">1차 검증결과</Col></Row><Row><Col id=\"CODE_ID\">3</Col><Col id=\"CODE_NM\">2차 검증결과</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","1300",null,null,null,null,null,null,this);
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

            obj = new Static("Static00","0","0","30","1200",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","1200",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Div("sub_title_wrap","30","20","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            this.Div.addChild(obj.name, obj);

            obj = new Static("sub_title","0","0","120","32",null,null,null,null,null,null,this.Div.form.sub_title_wrap.form);
            obj.set_taborder("0");
            obj.set_text("검증결과");
            obj.set_cssclass(" title_t2");
            this.Div.form.sub_title_wrap.addChild(obj.name, obj);

            obj = new Div("sub_research03","30","stepArea01_00:60","1200","95",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_cssclass("sub_research03");
            this.Div.addChild(obj.name, obj);

            obj = new Static("reser_st03","30","10","120","30",null,null,null,null,null,null,this.Div.form.sub_research03.form);
            obj.set_taborder("0");
            obj.set_text("조사 기준");
            obj.set_cssclass("reser_st03");
            this.Div.form.sub_research03.addChild(obj.name, obj);

            obj = new Static("reser_st_result","reser_st03:10","10","120","30",null,null,null,null,null,null,this.Div.form.sub_research03.form);
            obj.set_taborder("1");
            obj.set_text("20.12.31");
            obj.set_cssclass("reser_st_result");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\"");
            this.Div.form.sub_research03.addChild(obj.name, obj);

            obj = new Static("reser_obj03","290","10","113","30",null,null,null,null,null,null,this.Div.form.sub_research03.form);
            obj.set_taborder("2");
            obj.set_text("조사 대상");
            obj.set_cssclass("reser_obj03");
            this.Div.form.sub_research03.addChild(obj.name, obj);

            obj = new Static("reser_date_result","reser_obj03:10","10","584","29",null,null,null,null,null,null,this.Div.form.sub_research03.form);
            obj.set_taborder("3");
            obj.set_text("20.2월, 19.08월 졸업자");
            obj.set_cssclass("reser_date_result");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\"");
            this.Div.form.sub_research03.addChild(obj.name, obj);

            obj = new Static("reser_date03","30","45","120","30",null,null,null,null,null,null,this.Div.form.sub_research03.form);
            obj.set_taborder("4");
            obj.set_text("조사 기간");
            obj.set_cssclass("reser_date03");
            this.Div.form.sub_research03.addChild(obj.name, obj);

            obj = new Static("reser_obj_result","reser_date03:10","45","606","30",null,null,null,null,null,null,this.Div.form.sub_research03.form);
            obj.set_taborder("5");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("reser_obj_result");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\"");
            this.Div.form.sub_research03.addChild(obj.name, obj);

            obj = new Div("Div00","30","sub_research03:20","1200","72",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("17");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_01","30","20","64","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("학교명");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Edit("in_edit_sch","Static00_01:20","20","280","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("1");
            obj.set_enable("false");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_001","430","20","64","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("구분");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Combo("in_search_step","Static00_001:16","20","150","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_search_step");
            obj.set_codecolumn("CODE_ID");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("1차");
            obj.set_value("2");
            obj.set_index("0");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Div("sub_search","30","Div00:20","1200","155",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","810","10","64","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("5");
            obj.set_text("학과");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Button("btn_search","949","110","160","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","30","10","64","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("11");
            obj.set_text("취업구분");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_02","Static00_02_00:16","10","280","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("12");
            obj.set_innerdataset("dsJobGroupCd");
            obj.set_codecolumn("JOBTYPEGROUPCD");
            obj.set_datacolumn("JOBTYPEGROUPNM");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_text("2021");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_02","430","10","64","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("6");
            obj.set_text("입력현황");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_05","Static00_01_01:16","10","280","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsDept");
            obj.set_datacolumn("DEPTNM");
            obj.set_codecolumn("DEPTCD");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_text("본교");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","30","110","70","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("7");
            obj.set_text("개인식별키");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_edit_00","Static00_01_00:10","110","280","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("1");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","810","60","64","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("8");
            obj.set_text("성명");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_edit_01","Static00_01_00_00:16","60","280","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("2");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00","430","60","64","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("9");
            obj.set_text("학번");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_edit_02","Static00_01_00_00_00:16","60","280","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("3");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_01","Static00_02:16","10","280","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            var Div_form_sub_search_form_in_cb_01_innerdataset = new nexacro.NormalDataset("Div_form_sub_search_form_in_cb_01_innerdataset", obj);
            Div_form_sub_search_form_in_cb_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">등록</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">미등록</Col></Row></Rows>");
            obj.set_innerdataset(Div_form_sub_search_form_in_cb_01_innerdataset);
            obj.set_text("2021");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_01","30","60","64","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("13");
            obj.set_text("주야");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_06","Static00_02_00_01:16","60","280","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("14");
            obj.set_innerdataset("dsDncd");
            obj.set_datacolumn("CDNM");
            obj.set_codecolumn("DNCD");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_text("2021");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Div("div_file","30","sub_search:20","1200","260",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_cssclass("divFormR");
            obj.set_text("");
            obj.set_url("CM::DataTransSurv.xfdl");
            this.Div.addChild(obj.name, obj);

            obj = new Static("errorMsg","40","div_file:10","1188","20",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_text("◎ 개별등록시 파일명 : 개인식별키    - 예시 : 900010001123456.PDF");
            obj.set_cssclass("state_result");
            obj.set_font("normal 15px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_visible("true");
            obj.set_color("#070707");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_00","30","div_file:36","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_text("제출");
            obj.set_cssclass("btn_sty08");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_01","1295","850","145","40",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_text("소명자료미존재");
            obj.set_cssclass("btn_sty08");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("gd_00","30","btn_00:10","1190","445",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("8");
            obj.set_cssclass("grid_pdShort,grid_sty04");
            obj.set_binddataset("dsMain");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"50\"/><Column size=\"200\"/><Column size=\"160\"/><Column size=\"500\"/><Column size=\"156\"/><Column size=\"130\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"120\"/><Column size=\"143\"/><Column size=\"205\"/><Column size=\"125\"/><Column size=\"145\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"220\"/><Column size=\"111\"/><Column size=\"150\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"단과대학\"/><Cell col=\"3\" text=\"학과명\"/><Cell col=\"4\" text=\"학과소분류명\"/><Cell col=\"5\" text=\"주야구분\"/><Cell col=\"6\" text=\"학번\"/><Cell col=\"7\" text=\"성명\"/><Cell col=\"8\" text=\"성별\"/><Cell col=\"9\" text=\"취업구분\"/><Cell col=\"10\" text=\"개인식별키\"/><Cell col=\"11\" text=\"검증결과\"/><Cell col=\"12\" text=\"파일명\"/><Cell col=\"13\" text=\"외국인유학생여부\"/><Cell col=\"14\" text=\"진학학교명\"/><Cell col=\"15\" text=\"진학학교본분교명\"/><Cell col=\"16\" text=\"국가명\"/><Cell col=\"17\" text=\"해외진학학교명\"/><Cell col=\"18\" text=\"해외취업회사명\"/><Cell col=\"19\" text=\"해외비자여부\"/><Cell col=\"20\" text=\"해외비자유형\"/><Cell col=\"21\" text=\"해외근무형태\"/><Cell col=\"22\" text=\"교내근무형태\"/><Cell col=\"23\" text=\"시작일/출판일/등록일\"/><Cell col=\"24\" text=\"종료일\"/><Cell col=\"25\" text=\"근무시간\"/><Cell col=\"26\" text=\"공연명/전시회명/도서명/작품명\"/><Cell col=\"27\" text=\"장소/출판사\"/><Cell col=\"28\" text=\"역할/작품명(개인)\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:_chk\"/><Cell col=\"1\" text=\"bind:RNUM\"/><Cell col=\"2\" text=\"bind:COLNM\" tooltiptext=\"bind:COLNM\"/><Cell col=\"3\" text=\"bind:DEPTNM\" tooltiptext=\"bind:DEPTNM\"/><Cell col=\"4\" text=\"bind:DETAILDEPTNM\" tooltiptext=\"bind:DETAILDEPTNM\"/><Cell col=\"5\" text=\"bind:DNNM\" tooltiptext=\"bind:DNNM\"/><Cell col=\"6\" text=\"bind:STUDENTNO\" tooltiptext=\"bind:STUDENTNO\"/><Cell col=\"7\" text=\"bind:NAME\"/><Cell col=\"8\" text=\"bind:SEXNM\"/><Cell col=\"9\" text=\"bind:JOBTYPENM\" displaytype=\"normal\" combodataset=\"dsJobcode\" combodatacol=\"JOBTYPENM\" combocodecol=\"JOBTYPECD\" tooltiptext=\"bind:JOBTYPENM\"/><Cell col=\"10\" text=\"bind:UNIQUEKEY\" tooltiptext=\"bind:UNIQUEKEY\"/><Cell col=\"11\" text=\"bind:RTNRN\" tooltiptext=\"bind:RTNRN\"/><Cell col=\"12\" text=\"bind:REAL_FILE_NAME\" tooltiptext=\"bind:REAL_FILE_NAME\"/><Cell col=\"13\" text=\"bind:EXCHANGEYN\" displaytype=\"combotext\" combodataset=\"dsYn\" combodatacol=\"CDNM\" combocodecol=\"CD\"/><Cell col=\"14\" text=\"bind:GOSCHNM\" tooltiptext=\"bind:GOSCHNM\"/><Cell col=\"15\" text=\"bind:GOORGNM\" tooltiptext=\"bind:GOORGNM\"/><Cell col=\"16\" text=\"bind:NACODENM\" tooltiptext=\"bind:NACODENM\"/><Cell col=\"17\" text=\"bind:GOFORGSCHNM\" tooltiptext=\"bind:GOFORGSCHNM\"/><Cell col=\"18\" text=\"bind:FORGCOMNM\" tooltiptext=\"bind:FORGCOMNM\"/><Cell col=\"19\" text=\"bind:OVERSEAVISAYN\" displaytype=\"combotext\" combodataset=\"dsYn\" combodatacol=\"CDNM\" combocodecol=\"CD\"/><Cell col=\"20\" text=\"bind:OVERSEAVISATYPE\" tooltiptext=\"bind:OVERSEAVISATYPE\"/><Cell col=\"21\" text=\"bind:OVERSEAWORKTYPENM\" tooltiptext=\"bind:OVERSEAWORKTYPENM\"/><Cell col=\"22\" text=\"bind:SCHWORKFORMNM\" tooltiptext=\"bind:SCHWORKFORMNM\"/><Cell col=\"23\" text=\"bind:STARTDT\" displaytype=\"mask\" maskeditformat=\"####.##.##\" maskedittype=\"string\"/><Cell col=\"24\" text=\"bind:ENDDT\" maskeditformat=\"####.##.##\" displaytype=\"mask\" maskedittype=\"string\"/><Cell col=\"25\" text=\"bind:WORKHOUR\"/><Cell col=\"26\" text=\"bind:ARTNM\" tooltiptext=\"bind:ARTNM\"/><Cell col=\"27\" text=\"bind:ARTPL\" tooltiptext=\"bind:ARTPL\"/><Cell col=\"28\" text=\"bind:ARTPO\" tooltiptext=\"bind:ARTPO\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_savefile","1130","div_file:36","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("15");
            obj.set_text("파일저장");
            obj.set_cssclass("btn_sty04");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Div("pagingWrap","30","1219","620","60",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("10");
            obj.set_text("");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_pagging","60","11","480","40",null,null,null,null,null,null,this.Div.form.pagingWrap.form);
            obj.set_taborder("0");
            obj.set_text("div_00");
            obj.set_url("CM::CmPagging.xfdl");
            obj.set_visible("false");
            this.Div.form.pagingWrap.addChild(obj.name, obj);

            obj = new Button("btn_02","1305","920","145","40",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("11");
            obj.set_text("소명자료존재");
            obj.set_cssclass("btn_sty08");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("label_00","136","732","718","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("12");
            this.Div.addChild(obj.name, obj);

            obj = new Static("label_fileCnt","405","732","130","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("13");
            obj.set_text("");
            obj.set_textAlign("left");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_04","1293","995","195","40",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("14");
            obj.set_text("소명자료미존재 일괄처리");
            obj.set_cssclass("btn_sty08");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("gd_01","340","gd_00:-170","298","180",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("16");
            obj.set_cssclass("grid_pdShort,grid_sty04");
            obj.set_binddataset("dsExcel");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"50\"/><Column size=\"200\"/><Column size=\"160\"/><Column size=\"500\"/><Column size=\"156\"/><Column size=\"130\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"120\"/><Column size=\"143\"/><Column size=\"205\"/><Column size=\"125\"/><Column size=\"145\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"220\"/><Column size=\"111\"/><Column size=\"150\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"단과대학\"/><Cell col=\"2\" text=\"학과명\"/><Cell col=\"3\" text=\"학과소분류명\"/><Cell col=\"4\" text=\"주야구분\"/><Cell col=\"5\" text=\"학번\"/><Cell col=\"6\" text=\"성명\"/><Cell col=\"7\" text=\"성별\"/><Cell col=\"8\" text=\"취업구분\"/><Cell col=\"9\" text=\"개인식별키\"/><Cell col=\"10\" text=\"검증결과\"/><Cell col=\"11\" text=\"파일명\"/><Cell col=\"12\" text=\"외국인유학생여부\"/><Cell col=\"13\" text=\"진학학교명\"/><Cell col=\"14\" text=\"진학학교본분교명\"/><Cell col=\"15\" text=\"국가명\"/><Cell col=\"16\" text=\"해외진학학교명\"/><Cell col=\"17\" text=\"해외취업회사명\"/><Cell col=\"18\" text=\"해외비자여부\"/><Cell col=\"19\" text=\"해외비자유형\"/><Cell col=\"20\" text=\"해외근무형태\"/><Cell col=\"21\" text=\"교내근무형태\"/><Cell col=\"22\" text=\"시작일/출판일/등록일\"/><Cell col=\"23\" text=\"종료일\"/><Cell col=\"24\" text=\"근무시간\"/><Cell col=\"25\" text=\"공연명/전시회명/도서명/작품명\"/><Cell col=\"26\" text=\"장소/출판사\"/><Cell col=\"27\" text=\"역할/작품명(개인)\"/></Band><Band id=\"body\"><Cell text=\"bind:RNUM\"/><Cell col=\"1\" text=\"bind:COLNM\" tooltiptext=\"bind:COLNM\"/><Cell col=\"2\" text=\"bind:DEPTNM\" tooltiptext=\"bind:DEPTNM\"/><Cell col=\"3\" text=\"bind:DETAILDEPTNM\" tooltiptext=\"bind:DETAILDEPTNM\"/><Cell col=\"4\" text=\"bind:DNNM\" tooltiptext=\"bind:DNNM\"/><Cell col=\"5\" text=\"bind:STUDENTNO\" tooltiptext=\"bind:STUDENTNO\"/><Cell col=\"6\" text=\"bind:NAME\"/><Cell col=\"7\" text=\"bind:SEXNM\"/><Cell col=\"8\" text=\"bind:JOBTYPENM\" displaytype=\"normal\" combodataset=\"dsJobcode\" combodatacol=\"JOBTYPENM\" combocodecol=\"JOBTYPECD\" tooltiptext=\"bind:JOBTYPENM\"/><Cell col=\"9\" text=\"bind:UNIQUEKEY\" tooltiptext=\"bind:UNIQUEKEY\"/><Cell col=\"10\" text=\"bind:RTNRN\" tooltiptext=\"bind:RTNRN\"/><Cell col=\"11\" text=\"bind:REAL_FILE_NAME\" tooltiptext=\"bind:REAL_FILE_NAME\"/><Cell col=\"12\" text=\"bind:EXCHANGEYN\" displaytype=\"combotext\" combodataset=\"dsYn\" combodatacol=\"CDNM\" combocodecol=\"CD\"/><Cell col=\"13\" text=\"bind:GOSCHNM\" tooltiptext=\"bind:GOSCHNM\"/><Cell col=\"14\" text=\"bind:GOORGNM\" tooltiptext=\"bind:GOORGNM\"/><Cell col=\"15\" text=\"bind:NACODENM\" tooltiptext=\"bind:NACODENM\"/><Cell col=\"16\" text=\"bind:GOFORGSCHNM\" tooltiptext=\"bind:GOFORGSCHNM\"/><Cell col=\"17\" text=\"bind:FORGCOMNM\" tooltiptext=\"bind:FORGCOMNM\"/><Cell col=\"18\" text=\"bind:OVERSEAVISAYN\" displaytype=\"combotext\" combodataset=\"dsYn\" combodatacol=\"CDNM\" combocodecol=\"CD\"/><Cell col=\"19\" text=\"bind:OVERSEAVISATYPE\" tooltiptext=\"bind:OVERSEAVISATYPE\"/><Cell col=\"20\" text=\"bind:OVERSEAWORKTYPENM\" tooltiptext=\"bind:OVERSEAWORKTYPENM\"/><Cell col=\"21\" text=\"bind:SCHWORKFORMNM\" tooltiptext=\"bind:SCHWORKFORMNM\"/><Cell col=\"22\" text=\"bind:STARTDT\" displaytype=\"mask\" maskeditformat=\"####.##.##\" maskedittype=\"string\"/><Cell col=\"23\" text=\"bind:ENDDT\" maskeditformat=\"####.##.##\" displaytype=\"mask\" maskedittype=\"string\"/><Cell col=\"24\" text=\"bind:WORKHOUR\"/><Cell col=\"25\" text=\"bind:ARTNM\" tooltiptext=\"bind:ARTNM\"/><Cell col=\"26\" text=\"bind:ARTPL\" tooltiptext=\"bind:ARTPL\"/><Cell col=\"27\" text=\"bind:ARTPO\" tooltiptext=\"bind:ARTPO\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,1305,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CM::DataTransSurv.xfdl");
            this._addPreloadList("fdl","CM::CmPagging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("rt03m00_copy1.xfdl","CM::common.xjs");
        this.addIncludeScript("rt03m00_copy1.xfdl","CM::utl_script.xjs");
        this.registerScript("rt03m00_copy1.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;
        this.executeIncludeScript("CM::utl_script.xjs"); /*include "CM::utl_script.xjs"*/;

        //기본변수세팅
        this.fv_USERID = "";
        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "AG";
        this.fv_USERGRPTYPE = "";
        this.fv_EVDDOCSEQ = "2"; //증빙소명자료 seq번호
        this.fv_EVDDOCTYPE = "2"; //증빙소명자료 seq번호
        this.fv_SURVPROSTATUSCD="15";//취업-소명제출
        this.fv_SURVOBJ = "";
        this.fv_SURVNM = "";

        //페이징
        this.pageRowCnt = 20;
        this.totalRowCnt = 0;
        this.pageFirst = true;
        this.fv_MENUID = "rt03m00";
        this.fv_MENUNM = "조사결과>검증결과";
        var objApp 		= nexacro.getApplication();
        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceID == "selectSurvSchool"){
        			if(this.dsLogInSch.rowcount > 0){
        				var idx = this.dsLogInSch.findRowExpr("SURVSEQ > '000000'",0);
        				this.lfn_divSurvSet();
        			}
        			this.lfn_selectSurvInfo();
        		}
        		if(serviceID == "listSchool"){
         			var idx = this.dsSchool.findRowExpr("SCHCD=='"+this.fv_SCHCD+"'",0);
        			var schText = this.dsSchool.getColumn(idx, "SCHORGNM");

        			this.Div.form.Div00.form.in_edit_sch.set_value(schText);
        		}
        		if(serviceID == "listVerifyResultInfoOne"){
        			//if(this.dsMain.rowcount == 0) alert("조회된 자료가 없습니다.");
        			/*
        				230717 - 노상태
        				소스는 수정된적이 없는데 공문 발송을 '대상자가 없습니다.'로 발송하였다고 수정요청받음
        			*/

        			if(this.dsMain.rowcount == 0) alert("대상자가 없습니다.");

        			this.dsMain.set_updatecontrol( false );
        			this.dsMain.addColumn("_chk","string",1);
        			this.dsMain.set_updatecontrol( true );
        			//this.Div.form.label_fileCnt.set_text(this.dsFCnt.getColumn(0,"FILE_MAP_CNT")+" 건");
        			this.Div.form.label_00.set_text("제출인원 : "+this.dsFCnt.getColumn(0,"FILE_MAP_CNT")+"명 / 제출대상 : "+this.dsTCnt.getColumn(0,"FILE_MAP_TOT")+"명");
        			//this.Div.form.label_00.set_text("제출인원 : "+this.dsFCnt.getColumn(0,"FILE_MAP_CNT")+"명 / 제출대상 : "+this.dsFCnt.getColumn(0,"FILE_MAP_CNT")+"명");
        			//trace(this.dsPage.saveXML());
        			this.totalRowCnt = this.dsPage.getColumn(0, "TOTALPAGECNT");
        			if(this.pageFirst)this.paggingInit();
        			this.Div_gd_00_oncellclick(this.Div.form.gd_00);
        		}
        		if(serviceID == "listVerifyResultInfoOneCode"){
        			////trace(this.dsDetailDept.saveXML());
        			////trace(this.dsDetailDept.saveXML());

        			this.dsJobGroupCd.insertRow(0);
        			this.dsJobGroupCd.setColumn(0,"JOBTYPEGROUPCD","");
        			this.dsJobGroupCd.setColumn(0,"JOBTYPEGROUPNM","전체");
        			this.dsJobGroupCd.set_filterstr("JOBTYPEGROUPCD !='13' && JOBTYPEGROUPCD !='14' && JOBTYPEGROUPCD !='8' && JOBTYPEGROUPCD !='9' ");

        			this.dsDept.insertRow(0);
        			this.dsDept.setColumn(0,"DEPTCD","");
        			this.dsDept.setColumn(0,"DEPTNM","전체");
        			this.dsDncd.insertRow(0);
        			this.dsDncd.setColumn(0,"DNCD","");
        			this.dsDncd.setColumn(0,"CDNM","전체");
        			this.Div.form.sub_search.form.in_cb_01.set_index(0);

        			if(this.dsFileId.getColumn(0,"EVDDOCSEQ")) this.fv_EVDDOCSEQ = this.dsFileId.getColumn(0,"EVDDOCSEQ");
        			this.Div.form.div_file.form.varSetting(this.dsFileId.getColumn(0,"ATT_IDT_NO"), true);

        		}
        		if(serviceID == "insertRtVerifyResultOne"){
        			alert("첨부된 소명자료가 해당 학생에게 적용되었습니다.");
        			if(this.dsFileId.getColumn(0,"ATT_IDT_NO"))this.Div.form.div_file.form.varSetting(this.dsFileId.getColumn(0,"ATT_IDT_NO"), true);
        			this.pageFirst = true;
        			this.lfn_listPage(1);
        		}
        		if(serviceID == "updateIsEvddocYn2"){
        			alert("소명자료 존재 등록이 완료되었습니다.");
        			for(var i=0; i < this.dsMain.rowcount; i++){
        				if(this.dsMain.getColumn(i,"_chk") =="1"){
        					this.dsMain.setColumn(i,"ISEVDDOCYN", "1");
        				}
        			}
        		}
        		if(serviceID == "updateIsEvddocYn1"){
        			alert("소명자료 미존재 등록이 완료되었습니다.");
        			for(var i=0; i < this.dsMain.rowcount; i++){
        				if(this.dsMain.getColumn(i,"_chk") =="1"){
        					this.dsMain.setColumn(i,"ISEVDDOCYN", "2");
        				}
        			}
        		}
        		if(serviceID == "evddocSend"){
        			for(var i=0; i < this.dsSchool.rowcount; i++){
        				this.dsSchool.setColumn(this.dsSchool.rowposition,"SURVPROSTATUSCD", this.fv_SURVPROSTATUSCD);
        			}
        			alert("제출 되었습니다.");
        		}
        		if(serviceID == "updateIsEvddocYnAll"){
        			alert("소명자료 미존재 등록이 일괄처리되었습니다.");
        			this.pageFirst = true;
        			this.lfn_listPage(1);
        		}
        		if(serviceID == "listExcel"){
        			if(this.dsExcel.rowcount==0){
        				alert("파일저장할 내역이 없습니다");
        				this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "파일저장할 내역이 없습니다.", "");  //졸업후상황(검증결과) 정보 0건
        				return;
        			}
        			this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "졸업후상황(검증결과) 정보", "");  //졸업후상황(검증결과) 정보다운로드
        			this.utlf_excelDownload("졸업후상황(검증결과) 정보",this.Div.form.gd_01,this.Export00_onsuccess);
        		}
        		if(serviceID == "listEvddocNullChk"){
        			if(this.dsNCnt.getColumn(0,"FILE_NULL_CNT") > 0){
        				if(!this.confirm("증빙자료 미제출 "+this.dsNCnt.getColumn(0,"FILE_NULL_CNT")+"명 입니다. 이대로 제출하시겠습니까?")){
        					return;
        				}
        			}

        			//alert(this.dsSearch.saveXML());

        			//alert("제출 되었습니다.");
        			this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "제출", "");  //제출
        			this.gfnTransaction("evddocSend",
        								"/swiss/rt/verifyresult/evddocSend.do",
        								"dsSearch=dsSave",
        								"",
        								"",
        								"fnCallback",
        								false);

        		}
        		if(serviceID == "chkActive"){
        			//alert("rtn chkActive");
        			var chkCnt = this.dsActive.getColumn(idx, "CNT");
        			//alert("chkCnt="+chkCnt);
        			if(chkCnt==0){
        				alert("현재 사용이 불가능합니다.");
        				window.open('/','_self');
        			}
        		}
         	}
        }

        /*학교별 조사기간이 설정되어 있는지 확인 2021-02-18 yyz*/
        this.lfn_selectSurvSchool = function(){
        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";
        	strParam += "USERID="		+ this.fv_USERID 		+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        //	trace(this.dsSearch.saveXML());
        	this.gfnTransaction("selectSurvSchool",
        						"/swiss/cm/selectSurvSchool.do",
        						"dsSearch=dsSearch",
        						"dsLogInSch=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        this.lfn_selectSurvInfo = function(){
        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";
        	strParam += "USERID="		+ this.fv_USERID 		+ "ª";
        	strParam += "USERGRPTYPE="	+ this.fv_USERGRPTYPE 	+ "ª";
        	strParam += "SCHCD="	    + this.fv_SCHCD 		+ "ª";
        	strParam += "ORGCD="	    + this.fv_ORGCD		    + "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	//trace(this.dsSearch.saveXML());
        	this.gfnTransaction("listSchool",
        						"/swiss/cm/listSchool.do",
        						"dsSearch=dsSearch",
        						"dsSchool=dsSchool",
        						"",
        						"fnCallback",
        						false);		asd
        };

        this.rt03m00_onload = function(obj,e)
        {
        	this.chkActive();

        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='AG'",0);
        	this.fv_USERID = objApp.gds_login_info.getColumn(idx, "USERID") ;
        	this.fv_SURVKINDCD = objApp.gds_login_info.getColumn(idx, "SURVKINDCD");
        	this.fv_USERGRPTYPE = objApp.gds_login_info.getColumn(idx, "USERGRPTYPE");
        	this.fv_CHANGEYN = objApp.gds_login_info.getColumn(idx, "CHANGEYN");
        	//this.fv_SURVPROSTATUSCD = objApp.gds_param.getColumn(0, "SURVPROSTATUSCD");
        	this.fv_SCHCD = objApp.gds_param.getColumn(0, "SCHCD");
        	this.fv_ORGCD = objApp.gds_param.getColumn(0, "ORGCD");

        /*
        	if(this.fv_SCHCD != "99999000" && this.fv_SCHCD != "51003000"){
        		alert("사용기간이 아닙니다.");
        		window.open('http://swiss.kedi.re.kr','_self');
        	}else{
        		//alert("KEDI대학교만 통과");
        	}
        */

        	this.lfn_selectSurvSchool();

        	this.dsMain.clearData();
        	this.dsEvdocfile.clearData();
        	this.lfn_selectSearchCdList();
        	this.lfn_divSurvSet();
        	var i = 0;

        	if(!this.lfn_agAuthorityChk(this.dsSchool,i)){
        		this.lfn_setEnable(false);
        	}else{
        		this.lfn_setEnable(true);
        	}
        	this.utlf_enableBtnByCall();
        };

        this.Div_sub_search_btn_search_onclick = function(obj,e)
        {
        	this.pageFirst = true;
        	this.lfn_listPage(1);
        };

        this.lfn_listPage = function(sPage)
        {
        	this.dsEvdocfile.clearData();
        	var start = (sPage - 1) * this.pageRowCnt + 1;
        	var end = sPage * this.pageRowCnt;
        	var strParam = "";
        	strParam += "START=" + start + "ª";
        	strParam += "END=" + end + "ª";

        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";
        	strParam += "SCHCD="	    + this.fv_SCHCD 		+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD		    + "ª";

        	strParam += "REGYN="		    + this.Div.form.sub_search.form.in_cb_01.value 		+ "ª";
        	strParam += "JOBTYPEGROUPCD="	+ this.Div.form.sub_search.form.in_cb_02.value 		+ "ª";
        	strParam += "DEPTCD="		    + this.Div.form.sub_search.form.in_cb_05.value 		+ "ª";

        	strParam += "DNCD="			+ this.Div.form.sub_search.form.in_cb_06.value 		+ "ª";
        	strParam += "NAME="			+ this.Div.form.sub_search.form.in_edit_01.value 	+ "ª";
        	strParam += "UNIQUEKEY="	+ this.Div.form.sub_search.form.in_edit_00.value 	+ "ª";
        	strParam += "STUDENTNO="	+ this.Div.form.sub_search.form.in_edit_02.value 	+ "ª";

        	this.fv_EVDDOCSEQ = this.Div.form.Div00.form.in_search_step.value;
        	this.fv_EVDDOCTYPE = this.Div.form.Div00.form.in_search_step.value;

        	strParam += "EVDDOCSEQ="	+ this.fv_EVDDOCSEQ 	+ "ª";
        	strParam += "EVDDOCTYPE="	+ this.fv_EVDDOCTYPE 	+ "ª";

        	var chkType = this.fv_EVDDOCSEQ;

        	//alert("chkType="+chkType);

        	switch(chkType){
        		case "3":
        			this.Div.form.div_file.set_enable(false);
        			this.Div.form.btn_00.set_enable(false);
        			break;
        		default:
        			this.Div.form.div_file.set_enable(true);
        			this.Div.form.btn_00.set_enable(true);
        			break;
        	}

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	////trace(this.dsSearch.saveXML());
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "검색", strParam);  //검증결과검색
        	this.gfnTransaction("listVerifyResultInfoOne",
        						"/swiss/rt/verifyresult/listVerifyResultInfoOneTmp.do",
        						"dsSearch=dsSearch",
        						"dsMain=dsResult dsPage=dsPage dsFCnt=dsFCnt dsTCnt=dsTCnt",
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

        this.lfn_selectSearchCdList = function()
        {
        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";
        	strParam += "SCHCD="		+ this.fv_SCHCD 		+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD		    + "ª";

        	strParam += "USERID="		+ this.fv_USERID 		+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	////trace(this.dsSearch.saveXML());
        	this.gfnTransaction("listVerifyResultInfoOneCode",
        						"/swiss/rt/verifyresult/listVerifyResultInfoOneCode.do",
        						"dsSearch=dsSearch",
        						"dsFileId=dsFileId dsJobcode=dsJobcode dsDept=dsDept dsDncd=dsDncd dsJobGroupCd=dsJobGroupCd",
        						"",
        						"fnCallback",
        						false);
        };

        this.Div_gd_00_oncellclick = function(obj,e)
        {

        /*
        	if(this.dsMain.rowcount==0)return;
        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.dsMain.getColumn(this.dsMain.rowposition,"SURVSEQ")			+ "ª";
        	strParam += "SURVKINDCD="	+ this.dsMain.getColumn(this.dsMain.rowposition,"SURVKINDCD")		+ "ª";
        	strParam += "SCHCD="		+ this.dsMain.getColumn(this.dsMain.rowposition,"SCHCD")	 		+ "ª";
        	strParam += "ORGCD="		+ this.dsMain.getColumn(this.dsMain.rowposition,"ORGCD")	 		+ "ª";
        	strParam += "UNIQUEKEY="	+ this.dsMain.getColumn(this.dsMain.rowposition,"UNIQUEKEY")		+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	//trace(this.dsSearch.saveXML());
        	this.gfnTransaction("listSchEvdocFile",
        						"/swiss/rt/verifyresult/listSchEvdocFile.do",
        						"dsSearch=dsSearch",
        						"dsEvdocfile=dsResult",
        						"",
        						"fnCallback",
        						false);
        */

        	//if(this.fv_SCHCD == "99999000"){
        		if(e.col =='12') {
        			//alert("in kedi univ");

        			var chkFile = this.dsMain.getColumn(this.dsMain.rowposition,"SAVE_FILE_NAME");
        			//alert("chkFile=["+chkFile+"]");

        			if(!this.dsMain.getColumn(this.dsMain.rowposition,"SAVE_FILE_NAME")) return;
        			var objChildFrame = new ChildFrame();
        			objChildFrame.init("docviewer_popup"
        							  , 0
        							  , 0
        							  , 1280
        							  , 720
        							  , null
        							  , null
        							  , "CM::CMDocViewer.xfdl");
        			objChildFrame.set_showtitlebar(false);
        			objChildFrame.set_dragmovetype("all");
        			objChildFrame.set_openalign("center middle");
        			objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)")
        			var objParam = {param1:this.dsMain.getColumn(this.dsMain.rowposition,"SAVE_FILE_NAME")};
        			objChildFrame.showModal(this.getOwnerFrame()
        								  , objParam
        								  , this
        								  , "fn_popupCallback");
        		}
        	//}
        };
        //그리드의 head영역의 체크박스 클릭 시 전체 체크
        this.Div_gd_00_onheadclick = function(obj,e)
        {
        	var sColID = obj.getCellProperty("body", e.cell, "text");   //"bind:colChk"
            sColID = sColID.substr(5);

            if(sColID == "_chk"){
        		var nValue = obj.getCellProperty("head", e.cell, "text");
        		nValue = (nValue == "1" ? "0" : "1");
        		for(var i=0; i < this.dsMain.rowcount; i++){
        			this.dsMain.setColumn(i, "_chk", nValue);
        			if(nValue == 0){

        			}else if(nValue == 1){

        			}
        		}
        		obj.setCellProperty("Head", e.cell, "text", nValue);
        	}
        };

        //증빙자료 미존재처리
        this.Div_btn_01_onclick = function(obj,e)
        {
        	this.dsSave.clearData();
        	for(var i=0; i < this.dsMain.rowcount; i++){
        		if(this.dsMain.getColumn(i,"_chk") =="1"){
        			var newRow = this.dsSave.addRow();
        			this.dsSave.copyRow(newRow, this.dsMain, i);
        			this.dsSave.setColumn(newRow,"WORKERID", this.fv_USERID);
        			this.dsSave.setColumn(newRow,"ISEVDDOCYN", "2");
        			this.dsSave.addColumn("EVDDOCSEQ","string");
        			this.dsSave.setColumn(newRow,"EVDDOCSEQ",this.fv_EVDDOCSEQ );
        		}
        	}
        	if(this.dsSave.rowcount == 0){
        		this.alert("처리할 데이터를 선택해 주세요.");
        		return;
        	}
        	var idex = 0;
        	var bf_SURVPROSTATUSCD = this.dsSchool.getColumn(idex,"SURVPROSTATUSCD");

        	if(bf_SURVPROSTATUSCD=="16"){
        		alert("승인되어 처리가 불가능합니다.");
        		return;
        	}
        	//trace(this.dsSave.saveXML());
        	this.gfnTransaction("updateIsEvddocYn1",
        						"/swiss/rt/verifyresult/updateIsEvddocYn.do",
        						"dsSearch=dsSave:A",
        						"",
        						"",
        						"fnCallback",
        						false);
        };

        this.lfn_agAuthorityChk = function(ds,row){
        	var ret = true;
        	var v_SURVPROSTATUSCD = ds.getColumn(row,"SURVPROSTATUSCD");
        	var v_SCH_SURVSTRTDT = ds.getColumn(row,"SURVSTRTDT");
        	var v_SCH_SURVENDDT = ds.getColumn(row,"SURVENDDT");
        	var v_TO_DATE = ds.getColumn(row,"TO_DATE");

        /*
        	if("14" != v_SURVPROSTATUSCD && "15" != v_SURVPROSTATUSCD && "17" != v_SURVPROSTATUSCD){
        	//if("14" != v_SURVPROSTATUSCD){
        		this.alert("소명자료가 요청된 경우에만 사용가능합니다.");
        		ret =  false;
        	}

        	if(v_SCH_SURVSTRTDT > v_TO_DATE || v_SCH_SURVENDDT < v_TO_DATE){
        		alert("조사기간이 아닙니다.");
        		ret = false;
        	}
        */
        	return ret;
        }

        this.lfn_setEnable = function(str){
        	this.Div.form.div_file.set_enable(str);
        	//this.Div.form.sub_search.form.btn_search.set_enable(str);
        	this.Div.form.btn_00.set_enable(str);
        	//this.Div.form.btn_01.set_enable(str);
        	//this.Div.form.btn_02.set_enable(str);
        	//this.Div.form.btn_04.set_enable(str);
        	this.Div.form.btn_savefile.set_enable(str);
        }

        this.searchEnter = function(obj,e)
        {
        	if(e.keycode == nexacro.Event.KEY_ENTER){
        		this.pageFirst = true;
        		this.lfn_listPage(1);
        	}
        };

        //파일적용
        this.evddocFileUploadeEnd = function(attIdtNo)
        {
        	//alert('완료'+attIdtNo);
        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";
        	strParam += "SCHCD="	    + this.fv_SCHCD 		+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD		    + "ª";
        	strParam += "USERID="		+ this.fv_USERID 		+ "ª";
        	strParam += "WORKERID="		+ this.fv_USERID 		+ "ª";
        	strParam += "ATT_IDT_NO="	+ attIdtNo 				+ "ª";
        	strParam += "EVDDOCSEQ="	+ this.fv_EVDDOCSEQ 	+ "ª";

        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "파일적용", strParam);  //파일저장

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	//trace(this.dsSearch.saveXML());

        	this.gfnTransaction("insertRtVerifyResultOne",
        						"/swiss/rt/verifyresult/insertRtVerifyResultOne.do",
        						"dsSearch=dsSearch",
        						"",
        						"",
        						"fnCallback",
        						false);
        }
        //제출
        this.Div_btn_00_onclick = function(obj,e)
        {
        	if("4" != this.fv_USERGRPTYPE){ // 취업담당자
        		alert("취업담당자만 제출가능합니다."); return;
        	}
        	this.dsSave.clearData();
        	var idex = 0;
        	var bf_SURVPROSTATUSCD = this.dsSchool.getColumn(idex,"SURVPROSTATUSCD");

        	if(bf_SURVPROSTATUSCD=="16"){
        		alert("승인되어 처리가 불가능합니다.");
        		return;
        	}

        	var newRow = this.dsSave.addRow();
        	this.dsSave.addColumn("USERGRPTYPE","string");
        	this.dsSave.setColumn(newRow,"USERGRPTYPE", this.fv_USERGRPTYPE);
        	this.dsSave.setColumn(newRow,"SURVSEQ",this.fv_SURVSEQ);
        	this.dsSave.setColumn(newRow,"SURVKINDCD",this.fv_SURVKINDCD);
        	this.dsSave.setColumn(newRow,"SCHCD",this.fv_SCHCD);
        	this.dsSave.setColumn(newRow,"ORGCD",this.fv_ORGCD);

        	this.dsSave.addColumn("EVDDOCSEQ","string");
        	this.dsSave.setColumn(newRow,"EVDDOCSEQ",this.fv_EVDDOCSEQ );

        	this.dsSave.addColumn("STATUSCD","string");
        	this.dsSave.setColumn(newRow,"STATUSCD",this.fv_SURVPROSTATUSCD);
        	this.dsSave.addColumn("WORKERID","string");
        	this.dsSave.setColumn(newRow,"WORKERID",this.fv_USERID);
        	this.dsSave.addColumn("USERID","string");
        	this.dsSave.setColumn(newRow,"USERID",this.fv_USERID);

        	//alert("["+this.fv_SURVPROSTATUSCD+"]");
        	//return false;

        	if(!this.confirm("제출 하시겠습니까?")){
        		return;
        	}

        	//trace(this.dsSave.saveXML());
        	this.gfnTransaction("listEvddocNullChk",
        						"/swiss/rt/verifyresult/listEvddocNullChk.do",
        						"dsSearch=dsSave",
        						"dsNCnt=dsNCnt",
        						"",
        						"fnCallback",
        						false);
        };


        this.gd_sub_oncellclick = function(obj,e)
        {
        	if(e.col =='2') {
        		if(!this.dsEvdocfile.getColumn(this.dsEvdocfile.rowposition,"SAVE_FILE_NAME")) return;
        		var objChildFrame = new ChildFrame();
        		objChildFrame.init("docviewer_popup"
        						  , 0
        						  , 0
        						  , 1280
        						  , 720
        						  , null
        						  , null
        						  , "CM::CMDocViewer.xfdl");
        		objChildFrame.set_showtitlebar(false);
        		objChildFrame.set_dragmovetype("all");
        		objChildFrame.set_openalign("center middle");
        		objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)")

        		var objParam = {param1:this.dsEvdocfile.getColumn(this.dsEvdocfile.rowposition,"SAVE_FILE_NAME")};
        		objChildFrame.showModal(this.getOwnerFrame()
        							  , objParam
        							  , this
        							  , "fn_popupCallback");
        	}
        };

        this.Div_btn_02_onclick = function(obj,e)
        {
        	this.dsSave.clearData();
        	for(var i=0; i < this.dsMain.rowcount; i++){
        		if(this.dsMain.getColumn(i,"_chk") =="1"){
        			var newRow = this.dsSave.addRow();
        			this.dsSave.copyRow(newRow, this.dsMain, i);
        			this.dsSave.setColumn(newRow,"WORKERID", this.fv_USERID);
        			this.dsSave.setColumn(newRow,"ISEVDDOCYN", "1");
        			this.dsSave.addColumn("EVDDOCSEQ","string");
        			this.dsSave.setColumn(newRow,"EVDDOCSEQ",this.fv_EVDDOCSEQ );
        		}
        	}
        	if(this.dsSave.rowcount == 0){
        		this.alert("처리할 데이터를 선택해 주세요.");
        		return;
        	}
        	var idex = 0;
        	var bf_SURVPROSTATUSCD = this.dsSchool.getColumn(idex,"SURVPROSTATUSCD");

        	if(bf_SURVPROSTATUSCD=="16"){
        		alert("승인되어 처리가 불가능합니다.");
        		return;
        	}
        	//trace(this.dsSave.saveXML());
        	this.gfnTransaction("updateIsEvddocYn2",
        						"/swiss/rt/verifyresult/updateIsEvddocYn.do",
        						"dsSearch=dsSave:A",
        						"",
        						"",
        						"fnCallback",
        						false);
        };

        this.Div_btn_04_onclick = function(obj,e)
        {
        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";
        	strParam += "SCHCD="		+ this.fv_SCHCD 		+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD		    + "ª";

        	if(!this.confirm("소명자료가 매칭되지 않은 학생들을 모두 미존재로 처리합니다. 계속하시겠습니까?")){
        		return;
        	}
        	//trace(this.dsSearch.saveXML());
        	this.gfnTransaction("updateIsEvddocYnAll",
        						"/swiss/rt/verifyresult/updateIsEvddocYnAll.do",
        						"dsSearch=dsSearch",
        						"",
        						"",
        						"fnCallback",
        						false);
        };

        this.Div_btn_savefile_onclick = function(obj,e)
        {

        	var strParam = "";
        	strParam += "START=" + 0 + "ª";
        	strParam += "END=" + 999999999999999999 + "ª";

        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";
        	strParam += "SCHCD="		+ this.fv_SCHCD 		+ "ª";
        	strParam += "ORGCD="	    + this.fv_ORGCD		    + "ª";

        	strParam += "REGYN="		+ this.Div.form.sub_search.form.in_cb_01.value 		+ "ª";
        	strParam += "JOBTYPEGROUPCD="	+ this.Div.form.sub_search.form.in_cb_02.value 		+ "ª";
        	strParam += "DEPTCD="		+ this.Div.form.sub_search.form.in_cb_05.value 		+ "ª";

        	strParam += "DNCD="			+ this.Div.form.sub_search.form.in_cb_06.value 		+ "ª";
        	strParam += "NAME="			+ this.Div.form.sub_search.form.in_edit_01.value 	+ "ª";
        	strParam += "UNIQUEKEY="	+ this.Div.form.sub_search.form.in_edit_00.value 	+ "ª";
        	strParam += "STUDENTNO="	+ this.Div.form.sub_search.form.in_edit_02.value 	+ "ª";


        	strParam += "EVDDOCSEQ="	+ this.fv_EVDDOCSEQ 	+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	////trace(this.dsSearch.saveXML());
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "파일저장", strParam);  //파일저장
        	this.gfnTransaction("listExcel",
        						"/swiss/rt/verifyresult/listVerifyResultInfoOneTmp.do",
        						"dsSearch=dsSearch",
        						"dsExcel=dsResult",
        						"",
        						"fnCallback",
        						false);
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
        		var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='AG'",0);

        		this.fv_SURVSEQ = objApp.gds_login_info.getColumn(idx, "SURVSEQ");
        		this.fv_SURVOBJ = objApp.gds_login_info.getColumn(idx, "SURVOBJ");
        		this.fv_SURVSTRTDT = objApp.gds_login_info.getColumn(idx, "SURVSTRTDT");
        		this.fv_SURVENDDT = objApp.gds_login_info.getColumn(idx, "SURVENDDT");
        		this.fv_SURVNM = objApp.gds_login_info.getColumn(idx, "SURVNM");
        	}

        	this.Div.form.sub_research03.form.reser_st_result.set_text(this.fv_SURVSEQ.substr(0,2)+"."+this.fv_SURVSEQ.substr(2,2)+"."+this.fv_SURVSEQ.substr(4,2)) ;
        	this.Div.form.sub_research03.form.reser_date_result.set_text(this.fv_SURVOBJ) ;
        	var survinfo = this.fv_SURVSTRTDT.substr(0,4)+"."+this.fv_SURVSTRTDT.substr(4,2)+"."+this.fv_SURVSTRTDT.substr(6,2)
        					+" ~ "+this.fv_SURVENDDT.substr(0,4)+"."+this.fv_SURVENDDT.substr(4,2)+"."+this.fv_SURVENDDT.substr(6,2)
        					+" ( "+this.fv_SURVNM+" )";
        	this.Div.form.sub_research03.form.reser_obj_result.set_text(survinfo) ;

        };


        this.Div_Div00_in_edit_sch_onchanged = function(obj,e)
        {

        };

        this.chkActive = function(){
        	var strParam = "";
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
            this.addEventHandler("onload",this.rt03m00_onload,this);
            this.Div.form.Static01.addEventHandler("onclick",this.Div_Static01_onclick,this);
            this.Div.form.Div00.form.in_edit_sch.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.Div00.form.in_search_step.addEventHandler("onitemchanged",this.Div_Div00_in_search_step_onitemchanged,this);
            this.Div.form.sub_search.form.btn_search.addEventHandler("onclick",this.Div_sub_search_btn_search_onclick,this);
            this.Div.form.sub_search.form.in_edit_00.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.sub_search.form.in_edit_01.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.sub_search.form.in_edit_02.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.btn_00.addEventHandler("onclick",this.Div_btn_00_onclick,this);
            this.Div.form.btn_01.addEventHandler("onclick",this.Div_btn_01_onclick,this);
            this.Div.form.gd_00.addEventHandler("oncellclick",this.Div_gd_00_oncellclick,this);
            this.Div.form.gd_00.addEventHandler("onheadclick",this.Div_gd_00_onheadclick,this);
            this.Div.form.btn_savefile.addEventHandler("onclick",this.Div_btn_savefile_onclick,this);
            this.Div.form.btn_02.addEventHandler("onclick",this.Div_btn_02_onclick,this);
            this.Div.form.btn_04.addEventHandler("onclick",this.Div_btn_04_onclick,this);
            this.Div.form.gd_01.addEventHandler("oncellclick",this.Div_gd_00_oncellclick,this);
            this.Div.form.gd_01.addEventHandler("onheadclick",this.Div_gd_00_onheadclick,this);
        };

        this.loadIncludeScript("rt03m00_copy1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
