(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ad11m01");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,950);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvdocfile", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"CHGPSNYN\" type=\"STRING\" size=\"256\"/><Column id=\"EVDDOCKIND\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHORGNM\" type=\"STRING\" size=\"256\"/><Column id=\"IMPROPTYN\" type=\"STRING\" size=\"256\"/><Column id=\"RTNRN\" type=\"STRING\" size=\"256\"/><Column id=\"PAGENO\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_PATH_FILE\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EVDDOCTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMain", this);
            obj._setContents("<ColumnInfo><Column id=\"NACODENM\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"FORGCOMNM\" type=\"STRING\" size=\"256\"/><Column id=\"HLTHINSSCBYN\" type=\"STRING\" size=\"32\"/><Column id=\"SCHWORKFORM\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"32\"/><Column id=\"SEXCD\" type=\"STRING\" size=\"256\"/><Column id=\"GOSCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"GOORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"32\"/><Column id=\"EXCHANGEYN\" type=\"STRING\" size=\"32\"/><Column id=\"SCHWORKFORMNM\" type=\"STRING\" size=\"256\"/><Column id=\"GOSCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"DETAILDEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAWORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"GOORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"GOFORGSCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"SEXNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKHOUR\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISAYN\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISATYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"COLNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHSTATNM\" type=\"STRING\" size=\"256\"/><Column id=\"DNCD\" type=\"STRING\" size=\"32\"/><Column id=\"ALDYEMPLYN\" type=\"STRING\" size=\"256\"/><Column id=\"UNIQUEKEY\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSETELNO\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"STUDENTNO\" type=\"STRING\" size=\"256\"/><Column id=\"STARTDT\" type=\"STRING\" size=\"256\"/><Column id=\"UNIGRADECD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"DNNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHSTATCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOBILENO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAILADDR\" type=\"STRING\" size=\"256\"/><Column id=\"NACODE\" type=\"STRING\" size=\"32\"/><Column id=\"SAMEUNIVYN\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD_BF\" type=\"STRING\" size=\"32\"/><Column id=\"OVERSEAWORKTYPENM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD\" type=\"STRING\" size=\"32\"/><Column id=\"ENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPEGROUPCD\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPEGROUPNM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPL\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPO\" type=\"STRING\" size=\"256\"/><Column id=\"RNUM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPENM\" type=\"STRING\" size=\"256\"/><Column id=\"ISEVDDOCYN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJobcode", this);
            obj._setContents("<ColumnInfo><Column id=\"JOBTYPEGROUPNM\" type=\"STRING\" size=\"32\"/><Column id=\"CHGROUPID\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPENM\" type=\"STRING\" size=\"32\"/><Column id=\"USEYN\" type=\"STRING\" size=\"32\"/><Column id=\"MODIFYYN\" type=\"STRING\" size=\"32\"/><Column id=\"ORDERSEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOBTYPECD\" type=\"STRING\" size=\"32\"/><Column id=\"FILEFORMNM\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPEGROUPCD\" type=\"STRING\" size=\"32\"/><Column id=\"DIVISION\" type=\"STRING\" size=\"32\"/><Column id=\"EVDDOCYN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJobGroupCd", this);
            obj._setContents("<ColumnInfo><Column id=\"JOBTYPEGROUPCD\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPEGROUPNM\" type=\"STRING\" size=\"256\"/><Column id=\"CHGROUPID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNationGrp", this);
            obj._setContents("<ColumnInfo><Column id=\"NACONTINENTCD\" type=\"STRING\" size=\"256\"/><Column id=\"NACONTINENT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">1</Col><Col id=\"CDNM\">적합</Col></Row><Row><Col id=\"CD\">2</Col><Col id=\"CDNM\">부적합</Col></Row><Row><Col id=\"CD\">3</Col><Col id=\"CDNM\">확인필요</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fileDownList", this);
            obj._setContents("<ColumnInfo><Column id=\"SAVE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_FILE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">1</Col><Col id=\"CDNM\">예</Col></Row><Row><Col id=\"CD\">2</Col><Col id=\"CDNM\">아니요</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSurvInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVENDDT\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SURVYEAR\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSTATUSCDNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"DATETIME\" size=\"17\"/><Column id=\"SURVOBJ\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSTRTDT\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSTATUSCD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVNM\" type=\"STRING\" size=\"32\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"RN\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SURVKINDNM\" type=\"STRING\" size=\"32\"/><Column id=\"REMARK\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fileDownTrans", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","940",null,null,null,null,null,null,this);
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

            obj = new Static("Static00","0","0","30","940",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","940",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Div("sub_title_wrap","30","20","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            this.Div.addChild(obj.name, obj);

            obj = new Static("sub_title","0","0","200","32",null,null,null,null,null,null,this.Div.form.sub_title_wrap.form);
            obj.set_taborder("0");
            obj.set_text("개인별 소명자료");
            obj.set_cssclass(" title_t2");
            this.Div.form.sub_title_wrap.addChild(obj.name, obj);

            obj = new Div("Div00","30","60","1200","50",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_01","25","10","74","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("조사기준");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Combo("in_cb_00","Static00_01:0","10","150","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("0");
            obj.set_datacolumn("SURVSEQNM");
            obj.set_codecolumn("SURVSEQ");
            obj.set_innerdataset("dsSurvInfo");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Div("sub_search","30","Div00:20","1200","150",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_search","980","110","150","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("0");
            obj.set_text("검색");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","416","10","94","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("1");
            obj.set_text("학교-본분교");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","416","60","64","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("2");
            obj.set_text("성명");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_edit_name","509","60","280","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("3");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00","851","60","65","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("4");
            obj.set_text("처리여부");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","28","10","64","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("5");
            obj.set_text("취업구분");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_jobtype","119","10","240","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsJobGroupCd");
            obj.set_codecolumn("JOBTYPEGROUPCD");
            obj.set_datacolumn("JOBTYPEGROUPNM");
            obj.set_text("2021");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_edit_sch","509","10","280","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("7");
            obj.set_enable("false");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_procyn","919","60","250","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div_form_sub_search_form_in_cb_procyn_innerdataset = new nexacro.NormalDataset("Div_form_sub_search_form_in_cb_procyn_innerdataset", obj);
            Div_form_sub_search_form_in_cb_procyn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">처리</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">비처리</Col></Row></Rows>");
            obj.set_innerdataset(Div_form_sub_search_form_in_cb_procyn_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Button("btn_sch","807","10","80","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("9");
            obj.set_text("검색");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_01","26","60","80","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("10");
            obj.set_text("개인 식별키");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_edit_userkey","119","60","240","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("11");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00_00","26","110","80","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("12");
            obj.set_text("부적합 여부");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_impr","119","110","240","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div_form_sub_search_form_in_cb_impr_innerdataset = new nexacro.NormalDataset("Div_form_sub_search_form_in_cb_impr_innerdataset", obj);
            Div_form_sub_search_form_in_cb_impr_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">적합</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">부적합</Col></Row><Row><Col id=\"datacolumn\">확인필요</Col><Col id=\"codecolumn\">3</Col></Row><Row><Col id=\"datacolumn\">내용변경</Col><Col id=\"codecolumn\">4</Col></Row></Rows>");
            obj.set_innerdataset(Div_form_sub_search_form_in_cb_impr_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Grid("gd_00","30","sub_search:20","598","525",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_cssclass("grid_pdShort,grid_sty04");
            obj.set_binddataset("dsMain");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"172\"/><Column size=\"130\"/><Column size=\"150\"/><Column size=\"180\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"220\"/><Column size=\"150\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"220\"/><Column size=\"130\"/><Column size=\"220\"/><Column size=\"220\"/><Column size=\"220\"/><Column size=\"125\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"250\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"학교명\"/><Cell col=\"2\" text=\"본분교명\"/><Cell col=\"3\" text=\"단과대학\"/><Cell col=\"4\" text=\"학과명\"/><Cell col=\"5\" text=\"학과소분류명\"/><Cell col=\"6\" text=\"주야구분\"/><Cell col=\"7\" text=\"학번\"/><Cell col=\"8\" text=\"성명\"/><Cell col=\"9\" text=\"성별\"/><Cell col=\"10\" text=\"취업구분\"/><Cell col=\"11\" text=\"개인식별키\"/><Cell col=\"12\" text=\"소명자료 존재여부\"/><Cell col=\"13\" text=\"외국인유학생여부\"/><Cell col=\"14\" text=\"진학학교명\"/><Cell col=\"15\" text=\"진학학교본분교명\"/><Cell col=\"16\" text=\"국가명\"/><Cell col=\"17\" text=\"해외진학학교명\"/><Cell col=\"18\" text=\"해외취업회사명\"/><Cell col=\"19\" text=\"해외비자여부\"/><Cell col=\"20\" text=\"해외비자유형\"/><Cell col=\"21\" text=\"해외근무형태\"/><Cell col=\"22\" text=\"교내근무형태\"/><Cell col=\"23\" text=\"시작일/출판일/등록일\"/><Cell col=\"24\" text=\"종료일\"/><Cell col=\"25\" text=\"근무시간\"/><Cell col=\"26\" text=\"공연명/전시회명/도서명/작품명\"/><Cell col=\"27\" text=\"장소/출판사\"/><Cell col=\"28\" text=\"역할/작품명(개인)\"/></Band><Band id=\"body\"><Cell text=\"bind:RNUM\"/><Cell col=\"1\" text=\"bind:SCHNM\"/><Cell col=\"2\" text=\"bind:ORGNM\"/><Cell col=\"3\" text=\"bind:COLNM\" tooltiptext=\"bind:COLNM\"/><Cell col=\"4\" text=\"bind:DEPTNM\" tooltiptext=\"bind:DEPTNM\"/><Cell col=\"5\" text=\"bind:DETAILDEPTNM\" tooltiptext=\"bind:DETAILDEPTNM\"/><Cell col=\"6\" text=\"bind:DNNM\" tooltiptext=\"bind:DNNM\"/><Cell col=\"7\" text=\"bind:STUDENTNO\" tooltiptext=\"bind:STUDENTNO\"/><Cell col=\"8\" text=\"bind:NAME\" tooltiptext=\"bind:NAME\"/><Cell col=\"9\" text=\"bind:SEXNM\"/><Cell col=\"10\" text=\"bind:JOBTYPEGROUPNM\" displaytype=\"normal\"/><Cell col=\"11\" text=\"bind:UNIQUEKEY\" tooltiptext=\"bind:UNIQUEKEY\"/><Cell col=\"12\" text=\"bind:ISEVDDOCYN\" displaytype=\"combotext\" combodataset=\"dsExYn\" combodatacol=\"CDNM\" combocodecol=\"CD\"/><Cell col=\"13\" text=\"bind:EXCHANGEYN\" displaytype=\"combotext\" combodataset=\"dsExYn\" combodatacol=\"CDNM\" combocodecol=\"CD\"/><Cell col=\"14\" text=\"bind:GOSCHNM\" tooltiptext=\"bind:GOSCHNM\"/><Cell col=\"15\" text=\"bind:GOORGNM\" tooltiptext=\"bind:GOORGNM\"/><Cell col=\"16\" text=\"bind:NACODENM\" tooltiptext=\"bind:NACODENM\"/><Cell col=\"17\" text=\"bind:GOFORGSCHNM\" tooltiptext=\"bind:GOFORGSCHNM\"/><Cell col=\"18\" text=\"bind:FORGCOMNM\" tooltiptext=\"bind:FORGCOMNM\"/><Cell col=\"19\" text=\"bind:OVERSEAVISAYN\" displaytype=\"combotext\" combodataset=\"dsYn\" combodatacol=\"CDNM\" combocodecol=\"CD\" tooltiptext=\"bind:OVERSEAVISAYN\"/><Cell col=\"20\" text=\"bind:OVERSEAVISATYPE\" tooltiptext=\"bind:OVERSEAVISATYPE\"/><Cell col=\"21\" text=\"bind:OVERSEAWORKTYPENM\" tooltiptext=\"bind:OVERSEAWORKTYPENM\"/><Cell col=\"22\" text=\"bind:SCHWORKFORMNM\" tooltiptext=\"bind:SCHWORKFORMNM\"/><Cell col=\"23\" text=\"bind:STARTDT\" displaytype=\"mask\" maskeditformat=\"####.##.##\" maskedittype=\"string\"/><Cell col=\"24\" text=\"bind:ENDDT\" maskeditformat=\"####.##.##\" displaytype=\"mask\" maskedittype=\"string\"/><Cell col=\"25\" text=\"bind:WORKHOUR\"/><Cell col=\"26\" text=\"bind:ARTNM\" tooltiptext=\"bind:ARTNM\"/><Cell col=\"27\" text=\"bind:ARTPL\" tooltiptext=\"bind:ARTPL\"/><Cell col=\"28\" text=\"bind:ARTPO\" tooltiptext=\"bind:ARTPO\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Div("pagingWrap","30","gd_00:0","620","60",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_pagging","60","11","480","40",null,null,null,null,null,null,this.Div.form.pagingWrap.form);
            obj.set_taborder("0");
            obj.set_text("div_00");
            obj.set_url("CM::CmPagging.xfdl");
            this.Div.form.pagingWrap.addChild(obj.name, obj);

            obj = new Div("Div02","647","300","580","292",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sel_box04");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","214","70","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("성별");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("label_SEXNM","108","213","180","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","306","215","70","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_text("외국인");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","20","251","70","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_text("취업구분");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("label_EXCHANGEYN","394","214","180","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("label_jobnm","108","251","460","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","20","10","70","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("6");
            obj.set_text("학교명");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("label_SCHNM","108","10","460","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("7");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","20","44","70","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("8");
            obj.set_text("본분교명");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("label_ORGNM","108","44","460","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("9");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00","20","78","70","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("10");
            obj.set_text("단과대명");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("label_COLNM","108","78","460","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("11");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00","20","112","70","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("12");
            obj.set_text("학과명");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("label_DEPTNM","108","112","460","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("13");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00_00","20","146","70","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("14");
            obj.set_text("주야구분");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("label_DNNM","108","146","460","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("15");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","20","180","70","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("16");
            obj.set_text("성명");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("label_name","108","180","180","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("17");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_02","306","180","70","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("18");
            obj.set_text("학번");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("label_STNO","394","180","180","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("19");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","15","44","550","1",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("20");
            obj.set_background("#e4e4e4");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","15","77","550","1",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("21");
            obj.set_background("#e4e4e4");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00","15","111","550","1",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("22");
            obj.set_background("#e4e4e4");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00","15","145","550","1",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("23");
            obj.set_background("#e4e4e4");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_00","15","179","550","1",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("24");
            obj.set_background("#e4e4e4");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_00_00","15","213","550","1",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("25");
            obj.set_background("#e4e4e4");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_00_00_00","15","248","550","1",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("26");
            obj.set_background("#e4e4e4");
            this.Div02.addChild(obj.name, obj);

            obj = new Div("Div03","647","Div02:5","580","230",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("sel_box04");
            this.addChild(obj.name, obj);

            obj = new Grid("gd_sub","0","-2","568","164",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_cssclass("grid_pdShort,grid_sty04");
            obj.set_binddataset("dsEvdocfile");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"247\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"129\"/></Rows><Band id=\"head\"><Cell text=\"적합여부\"/><Cell col=\"1\" text=\"파일명\"/><Cell col=\"2\" text=\"페이지NO\"/><Cell col=\"3\" text=\"반려사유\"/><Cell col=\"4\" text=\"저장\"/></Band><Band id=\"body\"><Cell text=\"bind:IMPROPTYN\" combodataset=\"dsYn\" combodatacol=\"CDNM\" combocodecol=\"CD\" edittype=\"none\" displaytype=\"combotext\"/><Cell col=\"1\" text=\"bind:REAL_FILE_NAME\" cursor=\"pointer\"/><Cell col=\"2\" text=\"bind:PAGENO\"/><Cell col=\"3\" text=\"bind:RTNRN\" edittype=\"textarea\" displaytype=\"textareacontrol\"/><Cell col=\"4\" text=\"bind:DOWN_LINK\" tooltiptext=\"bind:DOWN_LINK\"/></Band></Format></Formats>");
            this.Div03.addChild(obj.name, obj);

            obj = new Radio("in_rdo_00","19","170","339","47",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Div03_form_in_rdo_00_innerdataset = new nexacro.NormalDataset("Div03_form_in_rdo_00_innerdataset", obj);
            Div03_form_in_rdo_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">적합</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">부적합</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">확인필요</Col></Row></Rows>");
            obj.set_innerdataset(Div03_form_in_rdo_00_innerdataset);
            this.Div03.addChild(obj.name, obj);

            obj = new Button("btn_save","365","175","100","30",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("btn_update","475","175","100","30",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("3");
            obj.set_text("내용변경");
            obj.set_cssclass("btn_sty04");
            this.Div03.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,950,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","Div03.form.in_rdo_00","value","dsEvdocfile","IMPROPTYN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div02.form.label_SEXNM","text","dsMain","SEXNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div02.form.label_jobnm","text","dsMain","JOBTYPENM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div02.form.label_SCHNM","text","dsMain","SCHNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div02.form.label_ORGNM","text","dsMain","ORGNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div02.form.label_COLNM","text","dsMain","COLNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div02.form.label_DEPTNM","text","dsMain","DEPTNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div02.form.label_DNNM","text","dsMain","DNNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div02.form.label_name","text","dsMain","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Div02.form.label_STNO","text","dsMain","STUDENTNO");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CM::CmPagging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("ad12m01.xfdl","CM::common.xjs");
        this.addIncludeScript("ad12m01.xfdl","CM::utl_script.xjs");
        this.registerScript("ad12m01.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;
        this.executeIncludeScript("CM::utl_script.xjs"); /*include "CM::utl_script.xjs"*/;

        //기본변수세팅
        this.fv_USERID = "";
        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "AG";
        this.fv_USERGRPTYPE = "";
        this.fv_SCHCD = "";
        this.fv_ORGCD= "";
        this.fv_EVDDOCTYPE = "2"; // 소명자료
        //페이징
        this.pageRowCnt = 20;
        this.totalRowCnt = 0;
        this.pageFirst = true;

        this.fv_MENUNM = "관리자>자료검증>개인별소명자료";

        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		//trace(errCD);
        		//trace(errMSG);
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceID == "selectSurvReg"){
        			this.dsSurvInfo.addColumn("SURVSEQNM","string");
        			for(var i=0; i < this.dsSurvInfo.rowcount; i++){
        				var v_survseq = this.dsSurvInfo.getColumn(i,"SURVSEQ");
        				var v_SURVSEQNM = v_survseq.substr(0,2)+"."+v_survseq.substr(2,2)+"."+v_survseq.substr(4,2);
        				this.dsSurvInfo.setColumn(i,"SURVSEQNM",v_SURVSEQNM);
        			}
         			this.Div.form.Div00.form.in_cb_00.set_value(this.fv_SURVSEQ);
        			this.lfn_listJobGroupCd();
        		}
        		if(serviceID == "listJobGroupCd"){
        			this.dsJobGroupCd.insertRow(0);
        			this.dsJobGroupCd.setColumn(0,"JOBTYPEGROUPCD","");
        			this.dsJobGroupCd.setColumn(0,"JOBTYPEGROUPNM","전체");
        			this.dsJobGroupCd.set_filterstr("JOBTYPEGROUPCD !='13' && JOBTYPEGROUPCD !='14' && JOBTYPEGROUPCD !='8' && JOBTYPEGROUPCD !='9' ");
        		}
        		if(serviceID == "listSchEvdocIndi"){
        			if(this.dsMain.rowcount == 0) alert("조회된 자료가 없습니다.");
        			this.totalRowCnt = this.dsPage.getColumn(0, "TOTALPAGECNT");
        			if(this.pageFirst)this.paggingInit();
        			this.Div_gd_00_oncellclick(this.Div.form.gd_00);
        		}
        		if(serviceID == "listSchEvdocFile"){
        			//if(this.dsEvdocfile.rowcount == 0) alert("조회된 자료가 없습니다.");
        			if("15"!=this.dsMain.getColumn(this.dsMain.rowposition,"SURVPROSTATUSCD") && "17"!=this.dsMain.getColumn(this.dsMain.rowposition,"SURVPROSTATUSCD")){
        				//alert("소명자료 처리 단계가 아닙니다.");
        				this.Div03.form.btn_save.set_enable(false);
        				this.Div03.form.btn_update.set_enable(false);
        				this.Div03.form.in_rdo_00.set_enable(false);
        			}else{
        				this.Div03.form.btn_save.set_enable(true);
        				this.Div03.form.btn_update.set_enable(true);
        				this.Div03.form.in_rdo_00.set_enable(true);
        			}
        		}
        		if(serviceID == "updateReturnRsn"){
        			alert("저장되었습니다.");
        		}


         	}
        }

        this.lfn_listJobGroupCd = function(){
        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	////trace(this.dsSearch.saveXML());
        	this.gfnTransaction("listJobGroupCd",
        						"/swiss/ad/dataVerification/listJobGroupCd.do",
        						"dsSearch=dsSearch",
        						"dsJobGroupCd=dsJobGroupCd",
        						"",
        						"fnCallback",
        						false);
        };

        this.ad11m01_onload = function(obj,e)
        {
        	var objApp 		= nexacro.getApplication();
        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='AG'",0);
        	this.fv_USERID = objApp.gds_login_info.getColumn(idx, "USERID") ;
        	this.fv_SURVSEQ = objApp.gds_login_info.getColumn(idx, "SURVSEQ");

        	this.fileDownTrans.setPostData("BASE_DIR", "");
        	this.fileDownTrans.set_url("svcBaseUrl::swiss/hp/com/downloadFile.do");

        	this.lfn_selectSurvInfo();
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

        	strParam += "EVDDOCTYPE=" 		+ this.fv_EVDDOCTYPE	+ "ª";
        	strParam += "SURVSEQ="			+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="		+ this.fv_SURVKINDCD 	+ "ª";
        	if(this.Div.form.sub_search.form.in_edit_sch.value != ""){
        		strParam += "SCHCD="		+ this.fv_SCHCD 		+ "ª";
        		strParam += "ORGCD="		+ this.fv_ORGCD			+ "ª";
        	}
        	strParam += "JOBTYPEGROUPCD="	+ this.Div.form.sub_search.form.in_cb_jobtype.value + "ª";
        	strParam += "NAME="			+ this.Div.form.sub_search.form.in_edit_name.value 		+ "ª";
        	strParam += "UNIQUEKEY="	+ this.Div.form.sub_search.form.in_edit_userkey.value 	+ "ª";
        	strParam += "PROCYN="		+ this.Div.form.sub_search.form.in_cb_procyn.value 		+ "ª";
        	strParam += "IMPROPTYN="	+ this.Div.form.sub_search.form.in_cb_impr.value 		+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	////trace(this.dsSearch.saveXML());
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "검색", strParam);  //접속기록
        	this.gfnTransaction("listSchEvdocIndi",
        						"/swiss/ad/dataVerification/listSchEvdocIndi.do",
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

        this.Div_gd_00_oncellclick = function(obj,e)
        {

        	if(this.dsMain.rowcount==0)return;
        	var strParam = "";
        	strParam += "EVDDOCTYPE=" 	+ this.fv_EVDDOCTYPE	+ "ª";
        	strParam += "SURVSEQ="		+ this.dsMain.getColumn(this.dsMain.rowposition,"SURVSEQ")			+ "ª";
        	strParam += "SURVKINDCD="	+ this.dsMain.getColumn(this.dsMain.rowposition,"SURVKINDCD")		+ "ª";
        	strParam += "SCHCD="		+ this.dsMain.getColumn(this.dsMain.rowposition,"SCHCD")	 		+ "ª";
        	strParam += "ORGCD="		+ this.dsMain.getColumn(this.dsMain.rowposition,"ORGCD")	 		+ "ª";
        	strParam += "UNIQUEKEY="	+ this.dsMain.getColumn(this.dsMain.rowposition,"UNIQUEKEY")		+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	//trace(this.dsSearch.saveXML());
        	this.gfnTransaction("listSchEvdocFile",
        						"/swiss/ad/dataVerification/listSchEvdocFile.do",
        						"dsSearch=dsSearch",
        						"dsEvdocfile=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        this.btn_sch_onclick = function(obj,e)
        {
        	this.fv_SCHCD="";
        	this.fv_ORGCD="";
        	this.Div.form.sub_search.form.in_edit_sch.set_value("");
        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("sch_popup"
        	                  , 0
        					  , 0
        					  , 750
        					  , 550
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
        		this.Div.form.sub_search.form.in_edit_sch.set_value(arr[1]+"-"+arr[3]);
        		this.fv_SCHCD=arr[0];
        		this.fv_ORGCD=arr[2];
        	}
        };

        this.btn_save_onclick = function(obj,e)
        {
        	if(!this.lfn_yearchk()) return;
        	if(this.dsEvdocfile.rowcount == 0){
        		this.alert("저장할 데이터가 없습니다.");
        		return;
        	}
        	if(!this.confirm("저장 하시겠습니까?")){
        		return;
        	}
        	//trace(this.dsEvdocfile.saveXML());
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "저장(반려사유일괄)", "");  //접속기록
        	this.gfnTransaction("updateReturnRsn",
        						"/swiss/ad/dataVerification/updateReturnRsn.do",
        						"dsSearch=dsEvdocfile",
        						"",
        						"",
        						"fnCallback",
        						false);
        };

        this.gd_sub_oncellclick = function(obj,e)
        {
        	if(e.col =='1') {
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

        	if(e.col == '4'){
        		//alert("SAVE=["+this.dsEvdocfile.getColumn(this.dsEvdocfile.rowposition,"SAVE_FILE_NAME")+"]\r\nREAL=["+this.dsEvdocfile.getColumn(this.dsEvdocfile.rowposition,"REAL_FILE_NAME")+"]");
        		//alert("start");

        		this.ds_fileDownList.clearData();
        		//alert(0);
        		var nRow = this.ds_fileDownList.addRow();
        		//alert(1);

        		var svcBaseUrl = nexacro.getEnvironment().services["svcBaseUrl"].url;
        		var downUrl ="/app/application/data/";


        		if (svcBaseUrl.indexOf("localhost") > 0 ){
        				 downUrl = "C:/eGovFrameDev-3.8.0-64bit/server/apache-tomcat-9.0.31/webapps/swiss/data/";
        		}
        		//alert(downUrl);
        		//alert(2);

        		this.ds_fileDownList.setColumn(nRow, "SAVE_PATH", downUrl );
        		this.ds_fileDownList.setColumn(nRow, "SAVE_FILE_NAME", this.dsEvdocfile.getColumn(this.dsEvdocfile.rowposition,"SAVE_FILE_NAME"));
        		this.ds_fileDownList.setColumn(nRow, "REAL_FILE_NAME", this.dsEvdocfile.getColumn(this.dsEvdocfile.rowposition,"REAL_FILE_NAME"));
        		//alert(3);
        		//alert(this.ds_fileDownList.saveXML());

        		// 서버로 전송할 파일정보 셋팅
        		this.fileDownTrans.setPostData("fileInfo", this.ds_fileDownList.saveXML());
        		this.fileDownTrans.set_downloadfilename(this.dsEvdocfile.getColumn(this.dsEvdocfile.rowposition,"REAL_FILE_NAME"));
        		//alert(4);
        		// 파일 다운로드 실행
        		this.fileDownTrans.download();
        		//alert(5);

        	}
        };
        this.Div03_in_rdo_00_onitemchanged = function(obj,e)
        {
        	if("1" == this.Div03.form.in_rdo_00.value){
        		this.dsEvdocfile.setColumn(this.dsEvdocfile.rowcount-1,"RTNRN","")
        	}
        };


        this.searchEnter = function(obj,e)
        {
        	if(e.keycode == nexacro.Event.KEY_ENTER){
        		this.pageFirst = true;
        		this.lfn_listPage(1);
        	}
        };

        this.Div03_btn_update_onclick = function(obj,e)
        {
        	if(!this.lfn_yearchk()) return;
        	if(this.dsEvdocfile.rowcount == 0){
        		this.alert("변경할 데이터가 없습니다.");
        		return;
        	}
        	var SURVSEQ = this.dsMain.getColumn(this.dsMain.rowposition,"SURVSEQ");
        	var SURVKINDCD = this.dsMain.getColumn(this.dsMain.rowposition,"SURVKINDCD");
        	var SCHCD = this.dsMain.getColumn(this.dsMain.rowposition,"SCHCD");
        	var ORGCD = this.dsMain.getColumn(this.dsMain.rowposition,"ORGCD");
        	var UNIQUEKEY = this.dsMain.getColumn(this.dsMain.rowposition,"UNIQUEKEY");
        	var NAME = this.dsMain.getColumn(this.dsMain.rowposition,"NAME");
        	var STUDENTNO = this.dsMain.getColumn(this.dsMain.rowposition,"STUDENTNO");

        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("ad11m02_popup"
        	                  , 0
        					  , 0
        					  , 0
        					  , 0
        					  , null
        					  , null
        					  , "AD::ad11m02.xfdl");
        	objChildFrame.set_showtitlebar(false);
        	objChildFrame.set_dragmovetype("all");
        	objChildFrame.set_openalign("center middle");
        	objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)")

        	var objParam = {param1:SURVSEQ
        					,param2:SURVKINDCD
        					,param3:SCHCD
        					,param4:ORGCD
        					,param5:UNIQUEKEY
        					,param6:NAME
        					,param7:STUDENTNO};
        	objChildFrame.showModal(this.getOwnerFrame()
        	                      , objParam
        						  , this
        						  , "fn_popupCallback");
        };


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

        this.Div_in_cb_00_onitemchanged = function(obj,e)
        {

        	this.dsMain.clearData();
        	this.fv_SURVSEQ = this.Div.form.Div00.form.in_cb_00.value;
        	var i = this.Div.form.Div00.form.in_cb_00.index;
        	//this.fv_SURVKINDCD = this.dsSurvInfo.getColumn(i, "SURVKINDCD");
        	this.fv_SURVOBJ = this.dsSurvInfo.getColumn(i, "SURVOBJ");
        	this.fv_SURVSTRTDT = this.dsSurvInfo.getColumn(i, "SURVSTRTDT");
        	this.fv_SURVENDDT = this.dsSurvInfo.getColumn(i, "SURVENDDT");
        	this.fv_SURVNM = this.dsSurvInfo.getColumn(i, "SURVNM");

        	var survinfo = this.fv_SURVSTRTDT.substr(0,4)+"."+this.fv_SURVSTRTDT.substr(4,2)+"."+this.fv_SURVSTRTDT.substr(6,2)
        					+" ~ "+this.fv_SURVENDDT.substr(0,4)+"."+this.fv_SURVENDDT.substr(4,2)+"."+this.fv_SURVENDDT.substr(6,2)
        					+" ( " + this.fv_SURVNM + " )";
        	this.Div.form.Div00.form.label_00.set_text(survinfo) ;

        };

        this.lfn_yearchk = function()
        {
        	var objApp 		= nexacro.getApplication();
        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='AG'",0);
        	var SURVSEQ = objApp.gds_login_info.getColumn(idx, "SURVSEQ");
        	if(this.fv_SURVSEQ != SURVSEQ){
        		alert("당해년도만 처리 가능합니다.");return false;
        	}else{
        		return true;
        	}
        }
        this.Static_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ad11m01_onload,this);
            this.Div.form.Static01.addEventHandler("onclick",this.Div_Static01_onclick,this);
            this.Div.form.Div00.form.in_cb_00.addEventHandler("onitemchanged",this.Div_in_cb_00_onitemchanged,this);
            this.Div.form.sub_search.form.btn_search.addEventHandler("onclick",this.Div_sub_search_btn_search_onclick,this);
            this.Div.form.sub_search.form.in_edit_name.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.sub_search.form.in_edit_sch.addEventHandler("onkeydown",this.Div_sub_search_onkeydown,this);
            this.Div.form.sub_search.form.in_cb_procyn.addEventHandler("onitemchanged",this.Div_sub_search_in_cb_procyn_onitemchanged,this);
            this.Div.form.sub_search.form.btn_sch.addEventHandler("onclick",this.btn_sch_onclick,this);
            this.Div.form.sub_search.form.Static00_01_00_00_01.addEventHandler("onclick",this.Static_onclick,this);
            this.Div.form.sub_search.form.in_edit_userkey.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.sub_search.form.Static00_01_00_00_00_00.addEventHandler("onclick",this.Static_onclick,this);
            this.Div.form.sub_search.form.in_cb_impr.addEventHandler("onitemchanged",this.Div_sub_search_in_cb_procyn_onitemchanged,this);
            this.Div.form.gd_00.addEventHandler("oncellclick",this.Div_gd_00_oncellclick,this);
            this.Div03.form.gd_sub.addEventHandler("oncellclick",this.gd_sub_oncellclick,this);
            this.Div03.form.in_rdo_00.addEventHandler("onitemchanged",this.Div03_in_rdo_00_onitemchanged,this);
            this.Div03.form.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.Div03.form.btn_update.addEventHandler("onclick",this.Div03_btn_update_onclick,this);
        };

        this.loadIncludeScript("ad12m01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
