(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("rt00m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,1165);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSurvInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVENDDT\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SURVYEAR\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSTATUSCDNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"DATETIME\" size=\"17\"/><Column id=\"SURVOBJ\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSTRTDT\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSTATUSCD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVNM\" type=\"STRING\" size=\"32\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"RN\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SURVKINDNM\" type=\"STRING\" size=\"32\"/><Column id=\"REMARK\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchool", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"CHGPSNYN\" type=\"STRING\" size=\"256\"/><Column id=\"EVDDOCKIND\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHORGNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMain", this);
            obj._setContents("<ColumnInfo><Column id=\"NACODENM\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"FORGCOMNM\" type=\"STRING\" size=\"256\"/><Column id=\"HLTHINSSCBYN\" type=\"STRING\" size=\"32\"/><Column id=\"SCHWORKFORM\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"32\"/><Column id=\"SEXCD\" type=\"STRING\" size=\"256\"/><Column id=\"GOSCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"GOORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"32\"/><Column id=\"EXCHANGEYN\" type=\"STRING\" size=\"32\"/><Column id=\"SCHWORKFORMNM\" type=\"STRING\" size=\"256\"/><Column id=\"GOSCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"DETAILDEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAWORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"GOORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"GOFORGSCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"SEXNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKHOUR\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISAYN\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISATYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"COLNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHSTATNM\" type=\"STRING\" size=\"256\"/><Column id=\"DNCD\" type=\"STRING\" size=\"32\"/><Column id=\"ALDYEMPLYN\" type=\"STRING\" size=\"256\"/><Column id=\"UNIQUEKEY\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSETELNO\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"STUDENTNO\" type=\"STRING\" size=\"256\"/><Column id=\"STARTDT\" type=\"STRING\" size=\"256\"/><Column id=\"UNIGRADECD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"DNNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHSTATCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOBILENO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAILADDR\" type=\"STRING\" size=\"256\"/><Column id=\"NACODE\" type=\"STRING\" size=\"32\"/><Column id=\"SAMEUNIVYN\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD_BF\" type=\"STRING\" size=\"32\"/><Column id=\"OVERSEAWORKTYPENM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD\" type=\"STRING\" size=\"32\"/><Column id=\"ENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPEGROUPCD\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPEGROUPNM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPL\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPO\" type=\"STRING\" size=\"256\"/><Column id=\"RNUM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPENM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPENM_BF\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"NACODENM\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"FORGCOMNM\" type=\"STRING\" size=\"256\"/><Column id=\"HLTHINSSCBYN\" type=\"STRING\" size=\"32\"/><Column id=\"SCHWORKFORM\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"32\"/><Column id=\"SEXCD\" type=\"STRING\" size=\"256\"/><Column id=\"GOSCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"GOORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"32\"/><Column id=\"EXCHANGEYN\" type=\"STRING\" size=\"32\"/><Column id=\"SCHWORKFORMNM\" type=\"STRING\" size=\"256\"/><Column id=\"GOSCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"DETAILDEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAWORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"GOORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"GOFORGSCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"SEXNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKHOUR\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISAYN\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISATYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"COLNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHSTATNM\" type=\"STRING\" size=\"256\"/><Column id=\"DNCD\" type=\"STRING\" size=\"32\"/><Column id=\"ALDYEMPLYN\" type=\"STRING\" size=\"256\"/><Column id=\"UNIQUEKEY\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSETELNO\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"STUDENTNO\" type=\"STRING\" size=\"256\"/><Column id=\"STARTDT\" type=\"STRING\" size=\"256\"/><Column id=\"UNIGRADECD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"DNNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHSTATCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOBILENO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAILADDR\" type=\"STRING\" size=\"256\"/><Column id=\"NACODE\" type=\"STRING\" size=\"32\"/><Column id=\"SAMEUNIVYN\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD_BF\" type=\"STRING\" size=\"32\"/><Column id=\"OVERSEAWORKTYPENM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD\" type=\"STRING\" size=\"32\"/><Column id=\"ENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPEGROUPCD\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPEGROUPNM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPL\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPO\" type=\"STRING\" size=\"256\"/><Column id=\"RNUM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPENM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPENM_BF\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsActive", this);
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","1160",null,null,null,null,null,null,this);
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

            obj = new Static("Static00","0","0","30","1150",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","1150",null,null,null,null,null,null,this.Div.form);
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
            obj.set_text("DB이관");
            obj.set_cssclass(" title_t2");
            this.Div.form.sub_title_wrap.addChild(obj.name, obj);

            obj = new Div("sub_research03","30","60","1200","95",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("10");
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

            obj = new Div("div_school","30","sub_research03:20","1200","74",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_01","416","20","80","30",null,null,null,null,null,null,this.Div.form.div_school.form);
            obj.set_taborder("0");
            obj.set_text("학교-본분교");
            this.Div.form.div_school.addChild(obj.name, obj);

            obj = new Edit("in_edit_sch","Static00_01:10","20","280","30",null,null,null,null,null,null,this.Div.form.div_school.form);
            obj.set_taborder("2");
            obj.set_enable("false");
            this.Div.form.div_school.addChild(obj.name, obj);

            obj = new Button("btn_dbmig","in_edit_sch:108","20","100","30",null,null,null,null,null,null,this.Div.form.div_school.form);
            obj.set_taborder("1");
            obj.set_text("DB수신");
            obj.set_cssclass("btn_sty04");
            this.Div.form.div_school.addChild(obj.name, obj);

            obj = new Button("btn_sch","in_edit_sch:108","20","100","30",null,null,null,null,null,null,this.Div.form.div_school.form);
            obj.set_taborder("3");
            obj.set_text("검색");
            this.Div.form.div_school.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","30","20","80","30",null,null,null,null,null,null,this.Div.form.div_school.form);
            obj.set_taborder("4");
            obj.set_text("조사기준");
            this.Div.form.div_school.addChild(obj.name, obj);

            obj = new Combo("in_cb_sruvseq","Static00_01_00:10","20","220","30",null,null,null,null,null,null,this.Div.form.div_school.form);
            obj.set_taborder("5");
            obj.set_datacolumn("SURVSEQNM");
            obj.set_codecolumn("SURVSEQ");
            obj.set_innerdataset("dsSurvInfo");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.div_school.addChild(obj.name, obj);

            obj = new Div("sub_search","30","div_school:20","1200","105",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","30","10","64","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("7");
            obj.set_text("취업구분");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_02","Static00_02_00:16","10","280","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsJobGroupCd");
            obj.set_codecolumn("JOBTYPEGROUPCD");
            obj.set_datacolumn("JOBTYPEGROUPNM");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_text("2021");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","430","10","64","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("4");
            obj.set_text("학과");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","430","60","70","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("5");
            obj.set_text("개인식별키");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_edit_00","Static00_01_00:10","60","280","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Button("btn_search","in_edit_00:169","60","160","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("3");
            obj.set_text("검색");
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

            obj = new Static("Static00_01_00_00_00","30","60","64","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("6");
            obj.set_text("학번");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_edit_02","Static00_01_00_00_00:16","60","280","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("2");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_01","in_cb_05:30","10","64","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("9");
            obj.set_text("주야");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_06","Static00_02_00_01:16","10","280","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("10");
            obj.set_innerdataset("dsDncd");
            obj.set_datacolumn("CDNM");
            obj.set_codecolumn("DNCD");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_text("2021");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Button("btn_01","1130","sub_search:20","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("8");
            obj.set_text("파일저장");
            obj.set_cssclass("btn_sty04");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("gd_00","30","btn_01:10","1200","595",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_cssclass("grid_pdShort,grid_sty04");
            obj.set_binddataset("dsMain");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"130\"/><Column size=\"50\"/><Column size=\"130\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"120\"/><Column size=\"143\"/><Column size=\"205\"/><Column size=\"125\"/><Column size=\"145\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"220\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"학교명\"/><Cell col=\"2\" text=\"본분교명\"/><Cell col=\"3\" text=\"단과대학\"/><Cell col=\"4\" text=\"학과명\"/><Cell col=\"5\" text=\"학과소분류명\"/><Cell col=\"6\" text=\"주야구분\"/><Cell col=\"7\" text=\"개인식별키\"/><Cell col=\"8\" text=\"성별\"/><Cell col=\"9\" text=\"외국인유학생여부\"/><Cell col=\"10\" text=\"대학제출 취업구분\"/><Cell col=\"11\" text=\"최종 취업구분\"/><Cell col=\"12\" text=\"진학학교명\"/><Cell col=\"13\" text=\"진학학교본분교명\"/><Cell col=\"14\" text=\"국가명\"/><Cell col=\"15\" text=\"해외진학학교명\"/><Cell col=\"16\" text=\"해외취업회사명\"/><Cell col=\"17\" text=\"해외비자여부\"/><Cell col=\"18\" text=\"해외비자유형\"/><Cell col=\"19\" text=\"해외근무형태\"/><Cell col=\"20\" text=\"교내근무형태\"/><Cell col=\"21\" text=\"시작일/출판일/등록일\"/><Cell col=\"22\" text=\"종료일\"/><Cell col=\"23\" text=\"근무시간\"/><Cell col=\"24\" text=\"공연명/전시회명/도서명/작품명\"/><Cell col=\"25\" text=\"장소/출판사\"/><Cell col=\"26\" text=\"역할/작품명(개인)\"/></Band><Band id=\"body\"><Cell text=\"bind:RNUM\"/><Cell col=\"1\" text=\"bind:SCHNM\"/><Cell col=\"2\" text=\"bind:ORGNM\"/><Cell col=\"3\" text=\"bind:COLNM\" tooltiptext=\"bind:COLNM\"/><Cell col=\"4\" text=\"bind:DEPTNM\" tooltiptext=\"bind:DEPTNM\"/><Cell col=\"5\" text=\"bind:DETAILDEPTNM\" tooltiptext=\"bind:DETAILDEPTNM\"/><Cell col=\"6\" text=\"bind:DNNM\" tooltiptext=\"bind:DNNM\"/><Cell col=\"7\" text=\"bind:UNIQUEKEY\" tooltiptext=\"bind:UNIQUEKEY\"/><Cell col=\"8\" text=\"bind:SEXNM\"/><Cell col=\"9\" text=\"bind:EXCHANGEYN\" displaytype=\"combotext\" combodataset=\"dsYn\" combodatacol=\"CDNM\" combocodecol=\"CD\" edittype=\"none\"/><Cell col=\"10\" text=\"bind:JOBTYPENM_BF\" displaytype=\"normal\" tooltiptext=\"bind:JOBTYPENM_BF\"/><Cell col=\"11\" text=\"bind:JOBTYPENM\" tooltiptext=\"bind:JOBTYPENM\"/><Cell col=\"12\" text=\"bind:GOSCHNM\" tooltiptext=\"bind:GOSCHNM\"/><Cell col=\"13\" text=\"bind:GOORGNM\" tooltiptext=\"bind:GOORGNM\"/><Cell col=\"14\" text=\"bind:NACODENM\" tooltiptext=\"bind:NACODENM\"/><Cell col=\"15\" text=\"bind:GOFORGSCHNM\" tooltiptext=\"bind:GOFORGSCHNM\"/><Cell col=\"16\" text=\"bind:FORGCOMNM\" tooltiptext=\"bind:FORGCOMNM\"/><Cell col=\"17\" text=\"bind:OVERSEAVISAYN\" displaytype=\"combotext\" combodataset=\"dsYn\" combodatacol=\"CDNM\" combocodecol=\"CD\"/><Cell col=\"18\" text=\"bind:OVERSEAVISATYPE\" tooltiptext=\"bind:OVERSEAVISATYPE\"/><Cell col=\"19\" text=\"bind:OVERSEAWORKTYPENM\" tooltiptext=\"bind:OVERSEAWORKTYPENM\"/><Cell col=\"20\" text=\"bind:SCHWORKFORMNM\" tooltiptext=\"bind:SCHWORKFORMNM\"/><Cell col=\"21\" text=\"bind:STARTDT\" displaytype=\"mask\" maskeditformat=\"####.##.##\" maskedittype=\"string\"/><Cell col=\"22\" text=\"bind:ENDDT\" maskeditformat=\"####.##.##\" displaytype=\"mask\" maskedittype=\"string\"/><Cell col=\"23\" text=\"bind:WORKHOUR\"/><Cell col=\"24\" text=\"bind:ARTNM\" tooltiptext=\"bind:ARTNM\"/><Cell col=\"25\" text=\"bind:ARTPL\" tooltiptext=\"bind:ARTPL\"/><Cell col=\"26\" text=\"bind:ARTPO\" tooltiptext=\"bind:ARTPO\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Div("pagingWrap","31","gd_00:-7","1200","60",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_pagging","350","11","760","40",null,null,null,null,null,null,this.Div.form.pagingWrap.form);
            obj.set_taborder("0");
            obj.set_text("div_00");
            obj.set_url("CM::CmPagging.xfdl");
            this.Div.form.pagingWrap.addChild(obj.name, obj);

            obj = new Grid("gd_excel","514","gd_00:-390","584","320",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("9");
            obj.set_cssclass("default");
            obj.set_binddataset("dsExcel");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"130\"/><Column size=\"50\"/><Column size=\"130\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"120\"/><Column size=\"143\"/><Column size=\"205\"/><Column size=\"125\"/><Column size=\"145\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"220\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"학교명\"/><Cell col=\"1\" text=\"본분교명\"/><Cell col=\"2\" text=\"단과대학\"/><Cell col=\"3\" text=\"학과명\"/><Cell col=\"4\" text=\"학과소분류명\"/><Cell col=\"5\" text=\"주야구분\"/><Cell col=\"6\" text=\"개인식별키\"/><Cell col=\"7\" text=\"성별\"/><Cell col=\"8\" text=\"외국인유학생여부\"/><Cell col=\"9\" text=\"대학제출 취업구분\"/><Cell col=\"10\" text=\"최종 취업구분\"/><Cell col=\"11\" text=\"진학학교명\"/><Cell col=\"12\" text=\"진학학교본분교명\"/><Cell col=\"13\" text=\"국가명\"/><Cell col=\"14\" text=\"해외진학학교명\"/><Cell col=\"15\" text=\"해외취업회사명\"/><Cell col=\"16\" text=\"해외비자여부\"/><Cell col=\"17\" text=\"해외비자유형\"/><Cell col=\"18\" text=\"해외근무형태\"/><Cell col=\"19\" text=\"교내근무형태\"/><Cell col=\"20\" text=\"시작일/출판일/등록일\"/><Cell col=\"21\" text=\"종료일\"/><Cell col=\"22\" text=\"근무시간\"/><Cell col=\"23\" text=\"공연명/전시회명/도서명/작품명\"/><Cell col=\"24\" text=\"장소/출판사\"/><Cell col=\"25\" text=\"역할/작품명(개인)\"/></Band><Band id=\"body\"><Cell text=\"bind:SCHNM\"/><Cell col=\"1\" text=\"bind:ORGNM\"/><Cell col=\"2\" text=\"bind:COLNM\" tooltiptext=\"bind:COLNM\"/><Cell col=\"3\" text=\"bind:DEPTNM\" tooltiptext=\"bind:DEPTNM\"/><Cell col=\"4\" text=\"bind:DETAILDEPTNM\"/><Cell col=\"5\" text=\"bind:DNNM\" tooltiptext=\"bind:DNNM\"/><Cell col=\"6\" text=\"bind:UNIQUEKEY\" tooltiptext=\"bind:UNIQUEKEY\"/><Cell col=\"7\" text=\"bind:SEXNM\"/><Cell col=\"8\" text=\"bind:EXCHANGEYN\" displaytype=\"combotext\" combodataset=\"dsYn\" combodatacol=\"CDNM\" combocodecol=\"CD\" edittype=\"none\"/><Cell col=\"9\" text=\"bind:JOBTYPENM_BF\" displaytype=\"normal\" tooltiptext=\"bind:JOBTYPENM_BF\"/><Cell col=\"10\" text=\"bind:JOBTYPENM\" tooltiptext=\"bind:JOBTYPENM\"/><Cell col=\"11\" text=\"bind:GOSCHNM\" tooltiptext=\"bind:GOSCHNM\"/><Cell col=\"12\" text=\"bind:GOORGNM\" tooltiptext=\"bind:GOORGNM\"/><Cell col=\"13\" text=\"bind:NACODENM\" tooltiptext=\"bind:NACODENM\"/><Cell col=\"14\" text=\"bind:GOFORGSCHNM\" tooltiptext=\"bind:GOFORGSCHNM\"/><Cell col=\"15\" text=\"bind:FORGCOMNM\" tooltiptext=\"bind:FORGCOMNM\"/><Cell col=\"16\" text=\"bind:OVERSEAVISAYN\" displaytype=\"combotext\" combodataset=\"dsYn\" combodatacol=\"CDNM\" combocodecol=\"CD\"/><Cell col=\"17\" text=\"bind:OVERSEAVISATYPE\" tooltiptext=\"bind:OVERSEAVISATYPE\"/><Cell col=\"18\" text=\"bind:OVERSEAWORKTYPENM\" tooltiptext=\"bind:OVERSEAWORKTYPENM\"/><Cell col=\"19\" text=\"bind:SCHWORKFORMNM\" tooltiptext=\"bind:SCHWORKFORMNM\"/><Cell col=\"20\" text=\"bind:STARTDT\" displaytype=\"mask\" maskeditformat=\"####.##.##\" maskedittype=\"string\"/><Cell col=\"21\" text=\"bind:ENDDT\" maskeditformat=\"####.##.##\" displaytype=\"mask\" maskedittype=\"string\"/><Cell col=\"22\" text=\"bind:WORKHOUR\"/><Cell col=\"23\" text=\"bind:ARTNM\" tooltiptext=\"bind:ARTNM\"/><Cell col=\"24\" text=\"bind:ARTPL\" tooltiptext=\"bind:ARTPL\"/><Cell col=\"25\" text=\"bind:ARTPO\" tooltiptext=\"bind:ARTPO\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,1165,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CM::CmPagging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("rt00m00.xfdl","CM::common.xjs");
        this.addIncludeScript("rt00m00.xfdl","CM::utl_script.xjs");
        this.registerScript("rt00m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;
        this.executeIncludeScript("CM::utl_script.xjs"); /*include "CM::utl_script.xjs"*/;

        //기본변수세팅
        this.fv_SURVSEQ = "";
        this.fv_USERID = "";
        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "AG";
        this.fv_USERGRPTYPE = "4"; // 취업담당자 화면 default

        this.fv_SCHCD = "";
        this.fv_ORGCD = "";

        //페이징
        this.pageRowCnt = 20;
        this.totalRowCnt = 0;
        this.pageFirst = true;
        this.fv_MENUID = "rt00m00";
        this.fv_MENUNM = "조사결과>DB이관";
        var objApp 		= nexacro.getApplication();
        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        		//trace(errCD);
        		//trace(errMSG);
        	}else{
        		if(serviceID == "selectSurvReg"){
        			//trace(this.dsSurvInfo.saveXML());
        			this.dsSurvInfo.addColumn("SURVSEQNM","string");
        			for(var i=this.dsSurvInfo.rowcount-1; i >= 0; i--){
        				var v_survseq = this.dsSurvInfo.getColumn(i,"SURVSEQ");
        				var v_SURVSEQNM = v_survseq.substr(0,2)+"."+v_survseq.substr(2,2)+"."+v_survseq.substr(4,2);
        				this.dsSurvInfo.setColumn(i,"SURVSEQNM",v_SURVSEQNM);
        				/* 조사기준11.12.31 이후 자료만 조회 2021-02-25 고객요청*/
        				 if(v_survseq.substr(0,2) < "11") this.dsSurvInfo.deleteRow(i);
        			}
        			for(var i=this.dsSurvInfo.rowcount-1; i >= 0; i--){
        				var v_survseq = this.dsSurvInfo.getColumn(i,"SURVSEQ");
        				/* 모든 조사기준에서 06.01 자료 제외 2021-02-25 고객요청*/
        				if(v_survseq.substr(2,4) == "0601") this.dsSurvInfo.deleteRow(i);
        			}
        		}
        		if(serviceID == "schoolInfo"){

        			var idx = this.dsSchool.findRowExpr("SCHCD=='"+this.fv_SCHCD+"'",0);
        			var schText = this.dsSchool.getColumn(idx, "SCHORGNM");

        			this.Div.form.Div00.form.in_edit_sch.set_value(schText);

        			if(this.dsSchool.getColumn(idx,"SCHORGCD").substring(9,10) == "M"){
        				this.fv_UNIGRADENM = "대학원";
        			}else{
        				this.fv_UNIGRADENM = "대학";
        			}
        		}
        		if(serviceID == "listIndiAGinfo"){
        			if(this.dsMain.rowcount == 0) alert("조회된 자료가 없습니다.");
        			this.totalRowCnt = this.dsPage.getColumn(0, "TOTALPAGECNT");
        			if(this.pageFirst)this.paggingInit();
        		}
        		if(serviceID == "listIndiAGCode"){
        			////trace(this.dsDetailDept.saveXML());
        // 			if(this.dsDept.rowcount==0){
        // 				alert("조회할 데이터가 없습니다.");
        // 				return;
        // 			}
        			this.dsJobGroupCd.insertRow(0);
        			this.dsJobGroupCd.setColumn(0,"JOBTYPEGROUPCD","");
        			this.dsJobGroupCd.setColumn(0,"JOBTYPEGROUPNM","전체");
        			this.dsDept.insertRow(0);
        			this.dsDept.setColumn(0,"DEPTCD","");
        			this.dsDept.setColumn(0,"DEPTNM","전체");
        			this.dsDncd.insertRow(0);
        			this.dsDncd.setColumn(0,"DNCD","");
        			this.dsDncd.setColumn(0,"CDNM","전체");

        			////trace(this.dsJobGroupCd.saveXML());
        		}
        		if(serviceID == "listResultExcel"){
        			this.lfn_exceldown();
        		}
        		if(serviceID == "insertRstView"){
        			alert("데이터가 수신 처리되었습니다.");
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

        this.lfn_selectSurvInfo = function(){
        	var strParam = "";
        	strParam += "SURVKINDCD="	+ "AG" 	+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	////trace(this.dsSearch.saveXML());
        	this.gfnTransaction("selectSurvReg",
        						"/swiss/ad/surv/selectSurvReg.do",
        						"dsSearch=dsSearch",
        						"dsSurvInfo=dsResult",
        						"",
        						"fnCallback",
        						false);
        };


        this.lfn_schoolInfo = function(){
        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";
        	strParam += "USERID="		+ this.fv_USERID 		+ "ª";
        	strParam += "USERGRPTYPE="	+ this.fv_USERGRPTYPE 	+ "ª";
        	strParam += "SCHCD="		+ this.fv_SCHCD 		+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	////trace(this.dsSearch.saveXML());
        	this.gfnTransaction("schoolInfo",
        						"/swiss/cm/schoolInfo.do",
        						"dsSearch=dsSearch",
        						"dsSchool=dsSchool",
        						"",
        						"fnCallback",
        						false);
        };

        this.rt00m00_onload = function(obj,e)
        {
        	this.chkActive();

        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='AG'",0);
        	this.fv_USERID = objApp.gds_login_info.getColumn(idx, "USERID") ;
        	this.fv_SURVKINDCD = objApp.gds_login_info.getColumn(idx, "SURVKINDCD");
        	this.fv_USERGRPTYPE = objApp.gds_login_info.getColumn(idx, "USERGRPTYPE");
        	this.fv_CHANGEYN = objApp.gds_login_info.getColumn(idx, "CHANGEYN");
        	this.fv_SURVPROSTATUSCD = objApp.gds_param.getColumn(0, "SURVPROSTATUSCD");
        	this.fv_SCHCD = objApp.gds_param.getColumn(0, "SCHCD");
        	this.fv_ORGCD = objApp.gds_param.getColumn(0, "ORGCD");

        	this.lfn_divSurvSet();

        	if( "4" == this.fv_USERGRPTYPE){
        		this.Div.form.div_school.form.btn_sch.set_visible(false);
        		this.Div.form.div_school.form.btn_dbmig.set_visible(true);
        	}else{
        		this.Div.form.div_school.form.btn_sch.set_visible(true);
        		this.Div.form.div_school.form.btn_dbmig.set_visible(false);
        	}

        	this.lfn_selectSurvInfo();

        	this.Div.form.sub_search.form.in_cb_02.set_value("");
        	this.Div.form.sub_search.form.in_cb_05.set_value("");
        	this.Div.form.sub_search.form.in_cb_06.set_value("");
        	this.dsMain.clearData();
        	this.lfn_selectSearchCdList();

        };

        this.Div_sub_search_btn_search_onclick = function(obj,e)
        {
        	this.pageFirst = true;
        	this.lfn_listPage(1);
        };

        this.lfn_listPage = function(sPage)
        {

        	var start = (sPage - 1) * this.pageRowCnt + 1;
        	var end = sPage * this.pageRowCnt;
        	var strParam = "";
        	strParam += "START=" + start + "ª";
        	strParam += "END=" + end + "ª";

        	strParam += "SURVSEQ="		+ this.Div.form.div_school.form.in_cb_sruvseq.value 	+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";
        	strParam += "SCHCD="		+ this.fv_SCHCD 		+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD 		+ "ª";
        	strParam += "USERID="		+ this.fv_USERID		+ "ª";

        	strParam += "JOBTYPEGROUPCD="	+ this.Div.form.sub_search.form.in_cb_02.value 		+ "ª";
        	strParam += "DEPTCD="		+ this.Div.form.sub_search.form.in_cb_05.value 		+ "ª";
        	strParam += "DNCD="			+ this.Div.form.sub_search.form.in_cb_06.value 		+ "ª";

        	strParam += "UNIQUEKEY="	+ this.Div.form.sub_search.form.in_edit_00.value 	+ "ª";
        	strParam += "STUDENTNO="	+ this.Div.form.sub_search.form.in_edit_02.value 	+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "검색", strParam);  //검색
        	////trace(this.dsSearch.saveXML());
        	this.gfnTransaction("listIndiAGinfo",
        						"/swiss/rt/dbmig/listIndiAGinfo.do",
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
        this.lfn_selectSearchCdList = function()
        {
        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";
        	strParam += "SCHCD="		+ this.fv_SCHCD 		+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD 		+ "ª";
        	strParam += "USERID="		+ this.fv_USERID 		+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	////trace(this.dsSearch.saveXML());
        	this.gfnTransaction("listIndiAGCode",
        						"/swiss/rt/dbmig/listIndiAGCode.do",
        						"dsSearch=dsSearch",
        						"dsUser=dsUser dsJobcode=dsJobcode dsDept=dsDept dsDncd=dsDncd dsJobGroupCd=dsJobGroupCd",
        						"",
        						"fnCallback",
        						false);
        };

        this.searchEnter = function(obj,e)
        {
        	if(e.keycode == nexacro.Event.KEY_ENTER){
        		this.pageFirst = true;
        		this.lfn_listPage(1);
        	}
        };

        this.Div_in_cb_sruvseq_onitemchanged = function(obj,e)
        {
        	if("4" == this.fv_USERGRPTYPE || "5" == this.fv_USERGRPTYPE || "6" == this.fv_USERGRPTYPE ){
        		this.lfn_schoolInfo();
        	}
        };

        this.btn_01_onclick = function(obj,e)
        {

        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.Div.form.div_school.form.in_cb_sruvseq.value 	+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";
        	strParam += "SCHCD="		+ this.fv_SCHCD 		+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD 		+ "ª";
        	strParam += "USERID="		+ this.fv_USERID		+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	////trace(this.dsSearch.saveXML());
        	this.gfnTransaction("listResultExcel",
        						"/swiss/rt/dbmig/listResultExcel.do",
        						"dsSearch=dsSearch",
        						"dsExcel=dsResult",
        						"",
        						"fnCallback",
        						false);
        }
        this.lfn_exceldown = function()
        {
        	if(this.dsExcel.getRowCount()==0){
        		alert("저장할 데이터가 없습니다.");
        		return;
        	}
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "파일저장", "");  //DB이관 파일다운로드하기
        	this.utlf_excelDownload("DB이관",this.Div.form.gd_excel,this.Export00_onsuccess);

        };
        this.Export00_onsuccess = function (obj, e )
        {
        	trace(e.eventid);
        }

        this.Div_div_school_btn_dbmig_onclick = function(obj,e)
        {
        	if(!this.confirm("데이터를 수신하시겠습니까?")) return;
        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";
        	strParam += "SCHCD="		+ this.fv_SCHCD 		+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD 		+ "ª";
        	strParam += "WORKERID="		+ this.fv_USERID		+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "DB수신", strParam);  //DB수신
        	////trace(this.dsSearch.saveXML());
        	this.gfnTransaction("insertRstView",
        						"/swiss/rt/dbmig/insertRstView.do",
        						"dsSearch=dsSearch",
        						"",
        						"",
        						"fnCallback",
        						false);
        };

        this.btn_sch_onclick = function(obj,e)
        {
        	this.fv_SCHCD="";
        	this.fv_ORGCD="";
        	this.Div.form.div_school.form.in_edit_sch.set_value("");
        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("sch_popup"
        	                  , 0
        					  , 0
        					  , 0
        					  , 0
        					  , null
        					  , null
        					  , "CM::CMSchool.xfdl");
        	objChildFrame.set_showtitlebar(false);
        	objChildFrame.set_dragmovetype("all");
        	objChildFrame.set_openalign("center middle");
        	objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)")

        	var objParam = {param3:'I'};
        	objChildFrame.showModal(this.getOwnerFrame()
        	                      , objParam
        						  , this
        						  , "fn_popupCallback");
        };

        this.fn_popupCallback = function(strPopupID, strReturn)
        {
        	if(strReturn == undefined){
        		return;
        	}
        	if(strPopupID == "sch_popup"){
        		var arr = strReturn.split(",");
        		this.Div.form.div_school.form.in_edit_sch.set_value(arr[1]+"-"+arr[3]);
        		this.fv_SCHCD=arr[0];
        		this.fv_ORGCD=arr[2];

        		this.Div.form.sub_search.form.in_cb_02.set_value("");
        		this.Div.form.sub_search.form.in_cb_05.set_value("");
        		this.Div.form.sub_search.form.in_cb_06.set_value("");
        		this.dsMain.clearData();
        		this.lfn_selectSearchCdList();
        	}
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
            this.addEventHandler("onload",this.rt00m00_onload,this);
            this.Div.form.Static01.addEventHandler("onclick",this.Div_Static01_onclick,this);
            this.Div.form.div_school.form.in_edit_sch.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.div_school.form.btn_dbmig.addEventHandler("onclick",this.Div_div_school_btn_dbmig_onclick,this);
            this.Div.form.div_school.form.btn_sch.addEventHandler("onclick",this.btn_sch_onclick,this);
            this.Div.form.div_school.form.in_cb_sruvseq.addEventHandler("onitemchanged",this.Div_in_cb_sruvseq_onitemchanged,this);
            this.Div.form.sub_search.form.in_edit_00.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.sub_search.form.btn_search.addEventHandler("onclick",this.Div_sub_search_btn_search_onclick,this);
            this.Div.form.sub_search.form.in_edit_02.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.btn_01.addEventHandler("onclick",this.btn_01_onclick,this);
        };

        this.loadIncludeScript("rt00m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
