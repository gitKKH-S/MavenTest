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
                this._setFormPosition(1260,960);
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
            obj = new Div("Div",null,"-10","1260","960","0",null,null,null,null,null,this);
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

            obj = new Static("Static00","0","0","30","960",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","960",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Div("sub_title_wrap","30","20","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            this.Div.addChild(obj.name, obj);

            obj = new Static("sub_title","0","-2","160","32",null,null,null,null,null,null,this.Div.form.sub_title_wrap.form);
            obj.set_taborder("0");
            obj.set_text("연계결과");
            obj.set_cssclass(" title_t2");
            this.Div.form.sub_title_wrap.addChild(obj.name, obj);

            obj = new Div("Div00","30","60","1200","72",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("");
            obj.set_cssclass("divFormR");
            obj.set_visible("true");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_01","30","20","64","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("조사기준");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Combo("in_cb_00","Static00_01:10","20","150","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("0");
            obj.set_datacolumn("SURVSEQNM");
            obj.set_codecolumn("SURVSEQ");
            obj.set_innerdataset("dsSurvInfo");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","360","20","48","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("학교명");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_dbmig","713","20","100","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("DB수신");
            obj.set_cssclass("btn_sty04");
            obj.set_visible("false");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Edit("in_edit_sch","Static00_01_00:10","20","280","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("4");
            obj.set_enable("false");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_sch","713","20","100","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("5");
            obj.set_text("검색");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Div("sub_search","30","Div00:20","1200","106",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","420","10","80","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("4");
            obj.set_text("학과");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Button("btn_search","949","64","160","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("3");
            obj.set_text("검색");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_05","Static00_01_01:10","10","280","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsDept");
            obj.set_datacolumn("DEPTNM");
            obj.set_codecolumn("DEPTCD");
            obj.set_displayrowcount("5");
            obj.set_text("본교");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","420","59","80","35",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("5");
            obj.set_text("개인식별키");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_edit_00","Static00_01_00:10","60","280","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00","30","60","64","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("6");
            obj.set_text("학번");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_edit_02","Static00_01_00_00_00:10","60","280","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("2");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","30","10","64","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("7");
            obj.set_text("취업구분");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_02","Static00_02_00:10","10","280","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsJobGroupCd");
            obj.set_codecolumn("JOBTYPEGROUPCD");
            obj.set_datacolumn("JOBTYPEGROUPNM");
            obj.set_text("2021");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_01","839","10","50","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("9");
            obj.set_text("주야");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_06","Static00_02_00_01:10","10","280","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("10");
            obj.set_innerdataset("dsDncd");
            obj.set_datacolumn("CDNM");
            obj.set_codecolumn("DNCD");
            obj.set_text("2021");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Button("btn_01","1130","sub_search:27","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("8");
            obj.set_text("파일저장");
            obj.set_cssclass("btn_sty04");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("gd_00","30","btn_01:10","1200","520",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_cssclass("grid_pdShort,grid_sty04");
            obj.set_binddataset("dsMain");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autosizingtype("none");
            obj.set_cellsizebandtype("body");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"115\"/><Column size=\"115\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\" suppressalign=\"first\"/><Cell col=\"1\" text=\"단과대학\" suppressalign=\"first\"/><Cell col=\"2\" text=\"학과명\" suppressalign=\"first\"/><Cell col=\"3\" text=\"학과소분류명\" suppressalign=\"first\"/><Cell col=\"4\" text=\"주야구분\" suppressalign=\"first\"/><Cell col=\"5\" text=\"학번\" suppressalign=\"first\"/><Cell col=\"6\" text=\"개인식별키\" suppressalign=\"first\"/><Cell col=\"7\" text=\"성별\" suppressalign=\"first\"/><Cell col=\"8\" text=\"성명\" suppressalign=\"first\"/><Cell col=\"9\" text=\"외국인유학생여부\" suppressalign=\"first\"/><Cell col=\"10\" text=\"6.1 기준 취업구분\" suppressalign=\"first\"/></Band><Band id=\"body\"><Cell text=\"bind:RNUM\" autosizecol=\"limitmin\"/><Cell col=\"1\" text=\"bind:COLNM\" autosizecol=\"limitmin\"/><Cell col=\"2\" text=\"bind:DEPTNM\" autosizecol=\"limitmin\"/><Cell col=\"3\" text=\"bind:DETAILDEPTNM\" autosizecol=\"limitmin\"/><Cell col=\"4\" text=\"bind:DNNM\" autosizecol=\"limitmin\"/><Cell col=\"5\" text=\"bind:STUDENTNO\"/><Cell col=\"6\" text=\"bind:UNIQUEKEY\"/><Cell col=\"7\" text=\"bind:SEXNM\"/><Cell col=\"8\" text=\"bind:NAME\"/><Cell col=\"9\" text=\"bind:EXCHANGEYN\"/><Cell col=\"10\" text=\"bind:JOBTYPENM\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Div("pagingWrap","31","gd_00:20","1200","60",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_pagging","350","11","760","40",null,null,null,null,null,null,this.Div.form.pagingWrap.form);
            obj.set_taborder("0");
            obj.set_text("div_00");
            obj.set_url("CM::CmPagging.xfdl");
            this.Div.form.pagingWrap.addChild(obj.name, obj);

            obj = new Grid("gd_excel","560","gd_00:-375","584","320",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("9");
            obj.set_cssclass("default");
            obj.set_binddataset("dsExcel");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_visible("false");
            obj.set_autosizingtype("both");
            obj.set_autosizebandtype("noleft");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\" font=\"normal 15px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"1\" text=\"단과대학\" font=\"normal 15px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"2\" text=\"학과명\" font=\"normal 15px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"3\" text=\"학과소분류명\" font=\"normal 15px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"4\" text=\"주야구분\" font=\"normal 15px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"5\" text=\"학번\" font=\"normal 15px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"6\" text=\"개인식별키\" font=\"normal 15px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"7\" text=\"성별\" font=\"normal 15px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"8\" text=\"성명\" font=\"normal 15px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"9\" text=\"외국인유학생여부\" font=\"normal 15px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"10\" text=\"6.1 기준 취업구분\" font=\"normal 15px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:RNUM\" autosizecol=\"limitmin\"/><Cell col=\"1\" text=\"bind:COLNM\" autosizecol=\"limitmin\"/><Cell col=\"2\" text=\"bind:DEPTNM\" autosizecol=\"limitmin\"/><Cell col=\"3\" text=\"bind:DETAILDEPTNM\" autosizecol=\"limitmin\"/><Cell col=\"4\" text=\"bind:DNNM\" autosizecol=\"limitmin\"/><Cell col=\"5\" text=\"bind:STUDENTNO\"/><Cell col=\"6\" text=\"bind:UNIQUEKEY\"/><Cell col=\"7\" text=\"bind:SEXNM\"/><Cell col=\"8\" text=\"bind:NAME\"/><Cell col=\"9\" text=\"bind:EXCHANGEYN\"/><Cell col=\"10\" text=\"bind:JOBTYPENM\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,960,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CM::CmPagging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("rt11m00.xfdl","CM::common.xjs");
        this.addIncludeScript("rt11m00.xfdl","CM::utl_script.xjs");
        this.registerScript("rt11m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;
        this.executeIncludeScript("CM::utl_script.xjs"); /*include "CM::utl_script.xjs"*/;

        //기본변수세팅
        this.fv_USERID = "";
        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "GP";
        this.fv_USERGRPTYPE = "4"; // 취업담당자 화면 default

        this.fv_SCHCD = "";
        this.fv_ORGCD = "";

        //페이징
        this.pageRowCnt = 20;
        this.totalRowCnt = 0;
        this.pageFirst = true;

        this.fv_MENUID = "rt11m00";
        this.fv_MENUNM = "조사결과>연계결과";

        var objApp 		= nexacro.getApplication();

        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		//trace(errCD);
        		//trace(errMSG);
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceID == "selectSurvReg"){
        			//trace(this.dsSurvInfo.saveXML());
        			this.dsSurvInfo.addColumn("SURVSEQNM","string");
        			for(var i=0; i < this.dsSurvInfo.rowcount; i++){
        				var v_survseq = this.dsSurvInfo.getColumn(i,"SURVSEQ");
        				var v_SURVSEQNM = v_survseq.substr(0,2)+"."+v_survseq.substr(2,2)+"."+v_survseq.substr(4,2);
        				this.dsSurvInfo.setColumn(i,"SURVSEQNM",v_SURVSEQNM);
        				if(v_survseq.substr(0,2) < 20) this.dsSurvInfo.deleteRow(i);
        			}
         			this.Div.form.Div00.form.in_cb_00.set_value(this.fv_SURVSEQ);
        			this.Div_in_cb_00_onitemchanged(this.Div.form.Div00.form.in_cb_00);

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

        			this.dsJobGroupCd.insertRow(1);
        			this.dsJobGroupCd.setColumn(1,"JOBTYPEGROUPCD","none");
        			this.dsJobGroupCd.setColumn(1,"JOBTYPEGROUPNM","미연계");

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
        			//alert("1");
        			var chkCnt = this.dsActive.getColumn(0, "CNT");
        			//alert("2");
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
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";
        	strParam += "STARTSURVSEQ="	+ this.fv_SURVSEQ 	+ "ª";
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

        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
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
        	////trace(this.dsSearch.saveXML());
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "검색", strParam);  //접속기록
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

        this.Div_in_cb_00_onitemchanged = function(obj,e)
        {

        	this.dsMain.clearData();

        	this.fv_SURVSEQ = this.Div.form.Div00.form.in_cb_00.value;
        	var i = this.Div.form.Div00.form.in_cb_00.index;
        	this.fv_SURVKINDCD = this.dsSurvInfo.getColumn(i, "SURVKINDCD");
        	this.fv_SURVOBJ = this.dsSurvInfo.getColumn(i, "SURVOBJ");
        	this.fv_SURVSTRTDT = this.dsSurvInfo.getColumn(i, "SURVSTRTDT");
        	this.fv_SURVENDDT = this.dsSurvInfo.getColumn(i, "SURVENDDT");
        	this.fv_SURVNM = this.dsSurvInfo.getColumn(i, "SURVNM");

        	if("4"==this.fv_USERGRPTYPE ){
        		//this.lfn_selectSchool();
        		this.Div.form.Div00.form.in_edit_sch.set_value(objApp.gds_param.getColumn(0, "SCHNM"));
        		this.lfn_selectSearchCdList();
        	}
        };

        this.btn_01_onclick = function(obj,e)
        {

        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";
        	strParam += "SCHCD="		+ this.fv_SCHCD 		+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD 		+ "ª";
        	strParam += "USERID="		+ this.fv_USERID		+ "ª";

        	//alert(strParam);
        	//return false;

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	////trace(this.dsSearch.saveXML());
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "파일저장", strParam);  //접속기록
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
        	this.utlf_excelDownload("연계결과",this.Div.form.gd_excel,this.Export00_onsuccess);

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
        	////trace(this.dsSearch.saveXML());
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "DB수신", strParam);  //접속기록
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
        	this.Div.form.Div00.form.in_edit_sch.set_value("");
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
        		this.Div.form.Div00.form.in_edit_sch.set_value(arr[1]+"-"+arr[3]);
        		this.fv_SCHCD=arr[0];
        		this.fv_ORGCD=arr[2];

        		this.Div.form.sub_search.form.in_cb_02.set_value("");
        		this.Div.form.sub_search.form.in_cb_05.set_value("");
        		this.Div.form.sub_search.form.in_cb_06.set_value("");
        		this.dsMain.clearData();
        		this.lfn_selectSearchCdList();
        	}
        };
        this.rt11m00_onload = function(obj,e)
        {
        	this.chkActive();

        	var objApp 		= nexacro.getApplication();
        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='GP'",0);
        	this.fv_USERID = objApp.gds_login_info.getColumn(idx, "USERID") ;
        	this.fv_SURVSEQ = objApp.gds_login_info.getColumn(idx, "SURVSEQ");
        	this.fv_USERGRPTYPE = objApp.gds_login_info.getColumn(idx, "USERGRPTYPE");
        	this.fv_SCHCD = objApp.gds_param.getColumn(0, "SCHCD");
        	this.fv_ORGCD = objApp.gds_param.getColumn(0, "ORGCD");

        	if( "4" == this.fv_USERGRPTYPE){
        		this.Div.form.Div00.form.in_edit_sch.set_value(objApp.gds_param.getColumn(0, "SCHNM"));
        		this.Div.form.Div00.form.btn_sch.set_visible(false);
        		//this.Div.form.Div00.form.btn_dbmig.set_visible(true);
        	}else{
        		this.Div.form.Div00.form.btn_sch.set_visible(true);
        		//this.Div.form.Div00.form.btn_dbmig.set_visible(false);
        	}

        	this.lfn_selectSurvInfo();
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
            this.addEventHandler("onload",this.rt11m00_onload,this);
            this.Div.form.Static01.addEventHandler("onclick",this.Div_Static01_onclick,this);
            this.Div.form.Div00.form.in_cb_00.addEventHandler("onitemchanged",this.Div_in_cb_00_onitemchanged,this);
            this.Div.form.Div00.form.btn_dbmig.addEventHandler("onclick",this.Div_div_school_btn_dbmig_onclick,this);
            this.Div.form.Div00.form.in_edit_sch.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.Div00.form.btn_sch.addEventHandler("onclick",this.btn_sch_onclick,this);
            this.Div.form.sub_search.form.btn_search.addEventHandler("onclick",this.Div_sub_search_btn_search_onclick,this);
            this.Div.form.sub_search.form.in_edit_00.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.sub_search.form.in_edit_02.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.btn_01.addEventHandler("onclick",this.btn_01_onclick,this);
        };

        this.loadIncludeScript("rt11m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
