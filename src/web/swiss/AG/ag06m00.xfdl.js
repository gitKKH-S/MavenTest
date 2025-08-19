(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ag06m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,1030);
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
            obj._setContents("<ColumnInfo><Column id=\"NACODENM\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"FORGCOMNM\" type=\"STRING\" size=\"256\"/><Column id=\"HLTHINSSCBYN\" type=\"STRING\" size=\"32\"/><Column id=\"SCHWORKFORM\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"32\"/><Column id=\"SEXCD\" type=\"STRING\" size=\"256\"/><Column id=\"GOSCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"GOORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"32\"/><Column id=\"EXCHANGEYN\" type=\"STRING\" size=\"32\"/><Column id=\"SCHWORKFORMNM\" type=\"STRING\" size=\"256\"/><Column id=\"GOSCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"DETAILDEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAWORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"GOORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"GOFORGSCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"SEXNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKHOUR\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISAYN\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISATYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"COLNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHSTATNM\" type=\"STRING\" size=\"256\"/><Column id=\"DNCD\" type=\"STRING\" size=\"32\"/><Column id=\"ALDYEMPLYN\" type=\"STRING\" size=\"256\"/><Column id=\"UNIQUEKEY\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSETELNO\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"STUDENTNO\" type=\"STRING\" size=\"256\"/><Column id=\"STARTDT\" type=\"STRING\" size=\"256\"/><Column id=\"UNIGRADECD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"DNNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHSTATCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOBILENO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAILADDR\" type=\"STRING\" size=\"256\"/><Column id=\"NACODE\" type=\"STRING\" size=\"32\"/><Column id=\"SAMEUNIVYN\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD_BF\" type=\"STRING\" size=\"32\"/><Column id=\"OVERSEAWORKTYPENM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD\" type=\"STRING\" size=\"32\"/><Column id=\"ENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPEGROUPCD\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPEGROUPNM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPL\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPO\" type=\"STRING\" size=\"256\"/><Column id=\"RNUM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPENM_BF\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPENM\" type=\"STRING\" size=\"256\"/><Column id=\"ALDYEMPLNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREECD\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREENM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUser", this);
            obj._setContents("<ColumnInfo><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"USERNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJobcode", this);
            obj._setContents("<ColumnInfo><Column id=\"JOBTYPEGROUPNM\" type=\"STRING\" size=\"32\"/><Column id=\"CHGROUPID\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPENM\" type=\"STRING\" size=\"32\"/><Column id=\"USEYN\" type=\"STRING\" size=\"32\"/><Column id=\"MODIFYYN\" type=\"STRING\" size=\"32\"/><Column id=\"ORDERSEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOBTYPECD\" type=\"STRING\" size=\"32\"/><Column id=\"FILEFORMNM\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPEGROUPCD\" type=\"STRING\" size=\"32\"/><Column id=\"DIVISION\" type=\"STRING\" size=\"32\"/><Column id=\"EVDDOCYN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsColcd", this);
            obj._setContents("<ColumnInfo><Column id=\"COLCD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsNationGrp", this);
            obj._setContents("<ColumnInfo><Column id=\"NACONTINENTCD\" type=\"STRING\" size=\"256\"/><Column id=\"NACONTINENT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"NACODENM\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"FORGCOMNM\" type=\"STRING\" size=\"256\"/><Column id=\"HLTHINSSCBYN\" type=\"STRING\" size=\"32\"/><Column id=\"SCHWORKFORM\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"32\"/><Column id=\"SEXCD\" type=\"STRING\" size=\"256\"/><Column id=\"GOSCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"GOORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"32\"/><Column id=\"EXCHANGEYN\" type=\"STRING\" size=\"32\"/><Column id=\"SCHWORKFORMNM\" type=\"STRING\" size=\"256\"/><Column id=\"GOSCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"DETAILDEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAWORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"GOORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"GOFORGSCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"SEXNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKHOUR\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISAYN\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISATYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"COLNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHSTATNM\" type=\"STRING\" size=\"256\"/><Column id=\"DNCD\" type=\"STRING\" size=\"32\"/><Column id=\"ALDYEMPLYN\" type=\"STRING\" size=\"256\"/><Column id=\"UNIQUEKEY\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSETELNO\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"STUDENTNO\" type=\"STRING\" size=\"256\"/><Column id=\"STARTDT\" type=\"STRING\" size=\"256\"/><Column id=\"UNIGRADECD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"DNNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHSTATCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOBILENO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAILADDR\" type=\"STRING\" size=\"256\"/><Column id=\"NACODE\" type=\"STRING\" size=\"32\"/><Column id=\"SAMEUNIVYN\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD_BF\" type=\"STRING\" size=\"32\"/><Column id=\"OVERSEAWORKTYPENM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD\" type=\"STRING\" size=\"32\"/><Column id=\"ENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPEGROUPCD\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPEGROUPNM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPL\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPO\" type=\"STRING\" size=\"256\"/><Column id=\"RNUM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPENM_BF\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPENM\" type=\"STRING\" size=\"256\"/><Column id=\"ALDYEMPLNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLogInSch", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"256\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSTRTDT\" type=\"STRING\" size=\"256\"/><Column id=\"SURVENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","1025",null,null,null,null,null,null,this);
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

            obj = new Static("Static00","0","0","30","1020",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","1020",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("gd_00","30","356","798","525",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_cssclass("grid_pdShort,grid_sty04");
            obj.set_binddataset("dsMain");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"50\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"120\"/><Column size=\"143\"/><Column size=\"205\"/><Column size=\"125\"/><Column size=\"145\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"220\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\" padding=\"0px\"/><Cell col=\"1\" text=\"단과대학\" padding=\"0px\"/><Cell col=\"2\" text=\"학과명\" padding=\"0px\"/><Cell col=\"3\" text=\"학과소분류명\" padding=\"0px\"/><Cell col=\"4\" text=\"주야구분\" padding=\"0px\"/><Cell col=\"5\" text=\"학번\" padding=\"0px\"/><Cell col=\"6\" text=\"성명\" padding=\"0px\"/><Cell col=\"7\" text=\"성별\" padding=\"0px\"/><Cell col=\"8\" text=\"대학제출 취업구분\" padding=\"0px\"/><Cell col=\"9\" text=\"최종 취업구분\"/><Cell col=\"10\" text=\"개인식별키\" padding=\"0px\"/><Cell col=\"11\" text=\"외국인유학생여부\" padding=\"0px\"/><Cell col=\"12\" text=\"진학학교명\" padding=\"0px\"/><Cell col=\"13\" text=\"진학학교본분교명\" padding=\"0px\"/><Cell col=\"14\" text=\"국가명\" padding=\"0px\"/><Cell col=\"15\" text=\"해외진학학교명\" padding=\"0px\"/><Cell col=\"16\" text=\"해외취업회사명\" padding=\"0px\"/><Cell col=\"17\" text=\"해외비자여부\" padding=\"0px\"/><Cell col=\"18\" text=\"해외비자유형\" padding=\"0px\"/><Cell col=\"19\" text=\"해외근무형태\" padding=\"0px\"/><Cell col=\"20\" text=\"교내근무형태\" padding=\"0px\"/><Cell col=\"21\" text=\"시작일/출판일/등록일\" padding=\"0px\"/><Cell col=\"22\" text=\"종료일\" padding=\"0px\"/><Cell col=\"23\" text=\"근무시간\" padding=\"0px\"/><Cell col=\"24\" text=\"공연명/전시회명/도서명/작품명\" padding=\"0px\"/><Cell col=\"25\" text=\"장소/출판사\" padding=\"0px\"/><Cell col=\"26\" text=\"역할/작품명(개인)\" padding=\"0px\"/><Cell col=\"27\" text=\"입학당시취업여부\"/></Band><Band id=\"body\"><Cell text=\"bind:RNUM\" padding=\"0px\"/><Cell col=\"1\" text=\"bind:COLNM\" tooltiptext=\"bind:COLNM\" padding=\"0px\"/><Cell col=\"2\" text=\"bind:DEPTNM\" tooltiptext=\"bind:DEPTNM\" padding=\"0px\"/><Cell col=\"3\" text=\"bind:DETAILDEPTNM\" tooltiptext=\"bind:DETAILDEPTNM\" padding=\"0px\"/><Cell col=\"4\" text=\"bind:DNNM\" tooltiptext=\"bind:DNNM\" padding=\"0px\"/><Cell col=\"5\" text=\"bind:STUDENTNO\" tooltiptext=\"bind:STUDENTNO\" padding=\"0px\"/><Cell col=\"6\" text=\"bind:NAME\" tooltiptext=\"bind:NAME\" padding=\"0px\"/><Cell col=\"7\" text=\"bind:SEXNM\" tooltiptext=\"bind:SEXNM\" padding=\"0px\"/><Cell col=\"8\" text=\"bind:JOBTYPENM_BF\" displaytype=\"normal\" combodataset=\"dsJobcode\" combodatacol=\"JOBTYPENM\" combocodecol=\"JOBTYPECD\" padding=\"0px\"/><Cell col=\"9\" text=\"bind:JOBTYPENM\"/><Cell col=\"10\" text=\"bind:UNIQUEKEY\" padding=\"0px\"/><Cell col=\"11\" text=\"bind:EXCHANGEYN\" displaytype=\"combotext\" combodataset=\"dsYn\" combodatacol=\"CDNM\" combocodecol=\"CD\" padding=\"0px\"/><Cell col=\"12\" text=\"bind:GOSCHNM\" tooltiptext=\"bind:GOSCHNM\" padding=\"0px\"/><Cell col=\"13\" text=\"bind:GOORGNM\" tooltiptext=\"bind:GOORGNM\" padding=\"0px\"/><Cell col=\"14\" text=\"bind:NACODENM\" tooltiptext=\"bind:NACODENM\" padding=\"0px\"/><Cell col=\"15\" text=\"bind:GOFORGSCHNM\" tooltiptext=\"bind:GOFORGSCHNM\" padding=\"0px\"/><Cell col=\"16\" text=\"bind:FORGCOMNM\" tooltiptext=\"bind:FORGCOMNM\" padding=\"0px\"/><Cell col=\"17\" text=\"bind:OVERSEAVISAYN\" displaytype=\"combotext\" combodataset=\"dsYn\" combodatacol=\"CDNM\" combocodecol=\"CD\" padding=\"0px\"/><Cell col=\"18\" text=\"bind:OVERSEAVISATYPE\" tooltiptext=\"bind:OVERSEAVISATYPE\" padding=\"0px\"/><Cell col=\"19\" text=\"bind:OVERSEAWORKTYPENM\" padding=\"0px\"/><Cell col=\"20\" text=\"bind:SCHWORKFORMNM\" padding=\"0px\"/><Cell col=\"21\" text=\"bind:STARTDT\" displaytype=\"mask\" maskeditformat=\"####.##.##\" maskedittype=\"string\" padding=\"0px\"/><Cell col=\"22\" text=\"bind:ENDDT\" maskeditformat=\"####.##.##\" displaytype=\"mask\" maskedittype=\"string\" padding=\"0px\"/><Cell col=\"23\" text=\"bind:WORKHOUR\" padding=\"0px\"/><Cell col=\"24\" text=\"bind:ARTNM\" tooltiptext=\"bind:ARTNM\" padding=\"0px\"/><Cell col=\"25\" text=\"bind:ARTPL\" tooltiptext=\"bind:ARTPL\" padding=\"0px\"/><Cell col=\"26\" text=\"bind:ARTPO\" tooltiptext=\"bind:ARTPO\" padding=\"0px\"/><Cell col=\"27\" text=\"bind:ALDYEMPLNM\" tooltiptext=\"bind:ALDYEMPLNM\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Div("stepArea01_00","30","20","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("9");
            obj.set_cssclass("stepArea");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Static("ag01m00","0","0","133","40",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("0");
            obj.set_text("조사현황");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag02m00","266","0","133","40",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("2");
            obj.set_text("환경설정");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag03m00","133","0","133","40",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("1");
            obj.set_text("연계결과");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag04m00","399","0","133","40",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("3");
            obj.set_text("모니터링");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag05m01","532","0","133","40",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("4");
            obj.set_text("정보등록");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag07m00","665","0","133","40",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("5");
            obj.set_text("결과집계");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01","254","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","387","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","520","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("12");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","653","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("13");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01_01","121","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag08m00","798","0","133","40",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("6");
            obj.set_text("결과제출");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","786","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("14");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag09m00","931","0","133","40",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("7");
            obj.set_text("증빙제출");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag06m00","1065","0","133","40",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("8");
            obj.set_text("결과조회");
            obj.set_cssclass("step01 last on03");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00","919","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("15");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00_00","1052","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("16");
            obj.set_cssclass("ico_step on03");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Div("sub_research03","30","stepArea01_00:20","1200","95",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
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

            obj = new Div("sub_search","30","sub_research03:20","1200","110",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("divFormR");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Combo("in_cb_02","102","10","210","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsJobGroupCd");
            obj.set_codecolumn("JOBTYPEGROUPCD");
            obj.set_datacolumn("JOBTYPEGROUPNM");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_text("2021");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","362","10","46","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("2");
            obj.set_text("학과");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Button("btn_search","1078","40","100","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("12");
            obj.set_text("검색");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_05","Static00_01_01:10","10","210","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsDept");
            obj.set_datacolumn("DEPTNM");
            obj.set_codecolumn("DEPTCD");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_text("본교");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","684","60","70","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("10");
            obj.set_text("개인식별키");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_edit_00","Static00_01_00:10","60","210","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("11");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","362","60","46","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("8");
            obj.set_text("성명");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_edit_01","Static00_01_00_00:10","60","210","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("9");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00","30","60","62","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("6");
            obj.set_text("학번");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_edit_02","Static00_01_00_00_00:10","60","210","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("7");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","30","10","62","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("0");
            obj.set_text("취업구분");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_01","684","10","70","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("4");
            obj.set_text("주야");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_06","Static00_02_00_01:10","10","210","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsDncd");
            obj.set_datacolumn("CDNM");
            obj.set_codecolumn("DNCD");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_text("2021");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Div("pagingWrap","30","877","800","60",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_pagging","150","11","480","40",null,null,null,null,null,null,this.Div.form.pagingWrap.form);
            obj.set_taborder("0");
            obj.set_text("div_00");
            obj.set_url("CM::CmPagging.xfdl");
            this.Div.form.pagingWrap.addChild(obj.name, obj);

            obj = new Button("btn_savefile","30","316","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_text("파일저장");
            obj.set_cssclass("btn_sty04");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("gd_01","417","701","421","260",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("8");
            obj.set_cssclass("grid_pdShort,grid_sty04");
            obj.set_binddataset("dsExcel");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"50\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"120\"/><Column size=\"143\"/><Column size=\"205\"/><Column size=\"125\"/><Column size=\"145\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"220\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"120\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"25\"/></Rows><Band id=\"head\"><Cell text=\"순번\" padding=\"0px\"/><Cell col=\"1\" text=\"단과대학\" padding=\"0px\"/><Cell col=\"2\" text=\"학과명\" padding=\"0px\"/><Cell col=\"3\" text=\"학과소분류명\" padding=\"0px\"/><Cell col=\"4\" text=\"주야구분\" padding=\"0px\"/><Cell col=\"5\" text=\"학위\" padding=\"0px\"/><Cell col=\"6\" text=\"학번\" padding=\"0px\"/><Cell col=\"7\" text=\"성명\" padding=\"0px\"/><Cell col=\"8\" text=\"성별\" padding=\"0px\"/><Cell col=\"9\" text=\"대학제출 취업구분\" padding=\"0px\"/><Cell col=\"10\" text=\"최종취업구분\"/><Cell col=\"11\" text=\"개인식별키\" padding=\"0px\"/><Cell col=\"12\" text=\"외국인유학생여부\" padding=\"0px\"/><Cell col=\"13\" text=\"진학학교명\" padding=\"0px\"/><Cell col=\"14\" text=\"진학학교본분교명\" padding=\"0px\"/><Cell col=\"15\" text=\"국가명\" padding=\"0px\"/><Cell col=\"16\" text=\"해외진학학교명\" padding=\"0px\"/><Cell col=\"17\" text=\"해외취업회사명\" padding=\"0px\"/><Cell col=\"18\" text=\"해외비자여부\" padding=\"0px\"/><Cell col=\"19\" text=\"해외비자유형\" padding=\"0px\"/><Cell col=\"20\" text=\"해외근무형태\" padding=\"0px\"/><Cell col=\"21\" text=\"교내근무형태\" padding=\"0px\"/><Cell col=\"22\" text=\"시작일/출판일/등록일\" padding=\"0px\"/><Cell col=\"23\" text=\"종료일\" padding=\"0px\"/><Cell col=\"24\" text=\"근무시간\" padding=\"0px\"/><Cell col=\"25\" text=\"공연명/전시회명/도서명/작품명\" padding=\"0px\"/><Cell col=\"26\" text=\"장소/출판사\" padding=\"0px\"/><Cell col=\"27\" text=\"역할/작품명(개인)\" padding=\"0px\"/><Cell col=\"28\" text=\"입학당시취업여부\"/></Band><Band id=\"body\"><Cell text=\"bind:RNUM\" padding=\"0px\"/><Cell col=\"1\" text=\"bind:COLNM\" tooltiptext=\"bind:COLNM\" padding=\"0px\"/><Cell col=\"2\" text=\"bind:DEPTNM\" tooltiptext=\"bind:DEPTNM\" padding=\"0px\"/><Cell col=\"3\" text=\"bind:DETAILDEPTNM\" tooltiptext=\"bind:DETAILDEPTNM\" padding=\"0px\"/><Cell col=\"4\" text=\"bind:DNNM\" tooltiptext=\"bind:DNNM\" padding=\"0px\"/><Cell col=\"5\" text=\"bind:DEGREENM\" tooltiptext=\"bind:DEGREENM\" padding=\"0px\"/><Cell col=\"6\" text=\"bind:STUDENTNO\" tooltiptext=\"bind:STUDENTNO\" padding=\"0px\"/><Cell col=\"7\" text=\"bind:NAME\" tooltiptext=\"bind:NAME\" padding=\"0px\"/><Cell col=\"8\" text=\"bind:SEXNM\" tooltiptext=\"bind:SEXNM\" padding=\"0px\"/><Cell col=\"9\" text=\"bind:JOBTYPENM_BF\" displaytype=\"normal\" combodataset=\"dsJobcode\" combodatacol=\"JOBTYPENM\" combocodecol=\"JOBTYPECD\" padding=\"0px\"/><Cell col=\"10\" text=\"bind:JOBTYPENM\"/><Cell col=\"11\" text=\"bind:UNIQUEKEY\" padding=\"0px\"/><Cell col=\"12\" text=\"bind:EXCHANGEYN\" displaytype=\"combotext\" combodataset=\"dsYn\" combodatacol=\"CDNM\" combocodecol=\"CD\" padding=\"0px\"/><Cell col=\"13\" text=\"bind:GOSCHNM\" tooltiptext=\"bind:GOSCHNM\" padding=\"0px\"/><Cell col=\"14\" text=\"bind:GOORGNM\" tooltiptext=\"bind:GOORGNM\" padding=\"0px\"/><Cell col=\"15\" text=\"bind:NACODENM\" tooltiptext=\"bind:NACODENM\" padding=\"0px\"/><Cell col=\"16\" text=\"bind:GOFORGSCHNM\" tooltiptext=\"bind:GOFORGSCHNM\" padding=\"0px\"/><Cell col=\"17\" text=\"bind:FORGCOMNM\" tooltiptext=\"bind:FORGCOMNM\" padding=\"0px\"/><Cell col=\"18\" text=\"bind:OVERSEAVISAYN\" displaytype=\"combotext\" combodataset=\"dsYn\" combodatacol=\"CDNM\" combocodecol=\"CD\" padding=\"0px\"/><Cell col=\"19\" text=\"bind:OVERSEAVISATYPE\" tooltiptext=\"bind:OVERSEAVISATYPE\" padding=\"0px\"/><Cell col=\"20\" text=\"bind:OVERSEAWORKTYPENM\" padding=\"0px\"/><Cell col=\"21\" text=\"bind:SCHWORKFORMNM\" padding=\"0px\"/><Cell col=\"22\" text=\"bind:STARTDT\" displaytype=\"mask\" maskeditformat=\"####.##.##\" maskedittype=\"string\" padding=\"0px\"/><Cell col=\"23\" text=\"bind:ENDDT\" maskeditformat=\"####.##.##\" displaytype=\"mask\" maskedittype=\"string\" padding=\"0px\"/><Cell col=\"24\" text=\"bind:WORKHOUR\" padding=\"0px\"/><Cell col=\"25\" text=\"bind:ARTNM\" tooltiptext=\"bind:ARTNM\" padding=\"0px\"/><Cell col=\"26\" text=\"bind:ARTPL\" tooltiptext=\"bind:ARTPL\" padding=\"0px\"/><Cell col=\"27\" text=\"bind:ARTPO\" tooltiptext=\"bind:ARTPO\" padding=\"0px\"/><Cell col=\"28\" text=\"bind:ALDYEMPLNM\" tooltiptext=\"bind:ALDYEMPLNM\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Edit("txt_rtnval","153","317","210","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("10");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Div("Div02","860","356","370","560",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sel_box04");
            obj.set_text("");
            obj.set_url("AG::ag05s01.xfdl");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,1030,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CM::CmPagging.xfdl");
            this._addPreloadList("fdl","AG::ag05s01.xfdl");
        };
        
        // User Script
        this.addIncludeScript("ag06m00.xfdl","CM::common.xjs");
        this.addIncludeScript("ag06m00.xfdl","CM::utl_script.xjs");
        this.registerScript("ag06m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;
        this.executeIncludeScript("CM::utl_script.xjs"); /*include "CM::utl_script.xjs"*/;

        //기본변수세팅
        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "AG";
        this.fv_SCHCD =  "";
        this.fv_ORGCD =  "";
        this.fv_SURVOBJ =  "";
        this.fv_SURVSTRTDT =  "";
        this.fv_SURVENDDT =  "";
        this.fv_SURVNM =  "";
        this.fv_SURVPROSTATUSCD = "";

        this.fv_USERID = "";
        this.fv_USERGRPTYPE = "";
        this.fv_SURVNM = "";
        //페이징
        this.pageRowCnt = 20;
        this.totalRowCnt = 0;
        this.pageFirst = true;

        this.rtnVal = "init";

        this.fv_MENUNM = "졸업후상황>결과조회";

        //글로벌 데이터셋을 사용하기 위한 objApp
        var objApp = nexacro.getApplication();

        this.chkRtn = function(insVal,insText){
        	//alert('insVal='+insVal);
        	switch(insVal){
        		case 'save':
        			var strParam = "";
        			strParam += "START=" + 0 + "ª";
        			strParam += "END=" + 999999999999999999 + "ª";

        			strParam += "SURVSEQ="		    + this.fv_SURVSEQ 		+ "ª";
        			strParam += "SURVKINDCD="	    + this.fv_SURVKINDCD 	+ "ª";
        			strParam += "SCHCD="		    + this.fv_SCHCD 		+ "ª";
        			strParam += "ORGCD="		    + this.fv_ORGCD		    + "ª";
        			strParam += "USERID="		    + this.fv_USERID		+ "ª";
        			strParam += "USERGRPTYPE="	    + this.fv_USERGRPTYPE 	+ "ª";
        			strParam += "JOBTYPEGROUPCD="	+ this.Div.form.sub_search.form.in_cb_02.value 		+ "ª";
        			strParam += "DEPTCD="		    + this.Div.form.sub_search.form.in_cb_05.value 		+ "ª";
        			strParam += "DNCD="			    + this.Div.form.sub_search.form.in_cb_06.value 		+ "ª";
        			strParam += "NAME="			    + this.Div.form.sub_search.form.in_edit_01.value 	+ "ª";
        			strParam += "UNIQUEKEY="	    + this.Div.form.sub_search.form.in_edit_00.value 	+ "ª";
        			strParam += "STUDENTNO="	    + this.Div.form.sub_search.form.in_edit_02.value 	+ "ª";

        			dsParamSetArrowBlank(this.dsSearch, strParam);
        			////trace(this.dsSearch.saveXML());
        			this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "파일저장", strParam);  //접속기록

        			this.gfnTransaction("listExcel",
        								"/swiss/ag/resultSearch/listIndiAGinfo.do",
        								"dsSearch=dsSearch",
        								"dsExcel=dsResult",
        								"",
        								"fnCallback",
        								false);
        			alert('저장되었습니다.');
        			break;
        		default:

        			break;
        	}
        }

        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		//trace(errCD);
        		//trace(errMSG);
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceID == "CMPSComment"){
        			alert("rtnVal="+rtnVal);
        		}
        		if(serviceID == "listIndiAGinfo"){
        			if(this.dsMain.rowcount == 0) alert("조회된 자료가 없습니다.");
        			this.totalRowCnt = this.dsPage.getColumn(0, "TOTALPAGECNT");
        			if(this.pageFirst)this.paggingInit();
        		}
        		if(serviceID == "listIndiAGCode"){
        			////trace(this.dsDetailDept.saveXML());
        			if(this.dsDept.rowcount==0){
        				alert("조회할 데이터가 없습니다.");
        				return;
        			}
        			this.dsJobGroupCd.insertRow(0);
        			this.dsJobGroupCd.setColumn(0,"JOBTYPEGROUPCD","");
        			this.dsJobGroupCd.setColumn(0,"JOBTYPEGROUPNM","전체");

        			this.dsDept.set_keystring("S:DEPTNM+");
        			this.dsDept.insertRow(0);
        			this.dsDept.setColumn(0,"DEPTCD","");
        			this.dsDept.setColumn(0,"DEPTNM","전체");

        			this.dsDncd.insertRow(0);
        			this.dsDncd.setColumn(0,"DNCD","");
        			this.dsDncd.setColumn(0,"CDNM","전체");

        			////trace(this.dsJobGroupCd.saveXML());
        		}
        		if(serviceID == "listExcel"){
        			if(this.dsExcel.rowcount==0){
        				alert("파일저장할 내역이 없습니다");
        				return;
        			}
        			this.utlf_excelDownload("졸업후상황 결과",this.Div.form.gd_01,this.Export00_onsuccess);
        		}
         	}
        }

        this.fn_popupCallback = function(strPopupID, strReturn)
        {
        	if(strReturn == undefined){
        		//alert("strReturn Undefined");
        		return;
        	}else{
        		alert("strpopid="+strPopupID);
        	}

        	if(strPopupID == "sch_popup"){
        		//this.alert("Return Value: " + strReturn);

        		var arr = strReturn.split(",");
        		//alert("학교명=["+arr[1]+"], 본분교명=["+arr[3]+"]");

        		this.Div.form.sub_search.form.in_usrgrpcd.set_value(arr[0]);
        		this.Div.form.sub_search.form.in_usrgrpnm.set_value(arr[1]);
        		this.Div.form.sub_search.form.in_email.set_value(arr[2]);
        		this.Div.form.sub_search.form.in_telno.set_value(arr[3]);

        		this.Div.form.sub_search.form.in_usrnm.set_value(arr[4]);



        		//alert("schcd="+arr[5]);
        		this.Div.form.sub_search.form.in_schcd.set_value(arr[5]);
        		this.Div.form.sub_search.form.in_schnm.set_value(arr[6]);
        		//alert("orgcd="+arr[7]);
        		this.Div.form.sub_search.form.in_orgcd.set_value(arr[7]);
        		this.Div.form.sub_search.form.in_orgnm.set_value(arr[8]);
        	}


        	if(strPopupID == "modify_popup"){
        		this.selectCallcenterList();
        	}

        	if(strPopupID == "wrt_popup"){
        		this.selectCallcenterList();
        	}
        };


        this.ag06m00_onload = function(obj,e)
        {
        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='AG'",0);

        	this.fv_USERID = objApp.gds_login_info.getColumn(idx, "USERID") ;
        	this.fv_SURVKINDCD = objApp.gds_login_info.getColumn(idx, "SURVKINDCD");
        	this.fv_USERGRPTYPE = objApp.gds_login_info.getColumn(idx, "USERGRPTYPE");
        	this.fv_SCHCD = objApp.gds_param.getColumn(0, "SCHCD");
        	this.fv_ORGCD = objApp.gds_param.getColumn(0, "ORGCD");

        	this.lfn_divSurvSet();									// 기본정보 설정

        	this.Div02.form.lfn_deleteAllData(); // 취업구분 데이터 초기화
        	this.Div02.form.lfn_divVisibleFalse();
        	this.dsMain.clearData();

        	this.Div.form.sub_search.form.in_cb_02.set_value("");
        	this.Div.form.sub_search.form.in_cb_05.set_value("");
        	this.Div.form.sub_search.form.in_cb_06.set_value("");

        	this.Div.form.txt_rtnval = rtnVal;

        	this.lfn_selectSearchCdList();                          // 선택된 학교의 학과정보
        };

        this.Div_sub_search_btn_search_onclick = function(obj,e)
        {
        	this.pageFirst = true;
        	this.Div02.form.lfn_resetData();
        	this.lfn_listPage(1);
        };

        this.lfn_listPage = function(sPage)
        {
        	this.Div02.form.lfn_deleteAllData(); // 취업구분 데이터 초기화
        	this.Div02.form.lfn_divVisibleFalse();

        	var start = (sPage - 1) * this.pageRowCnt + 1;
        	var end = sPage * this.pageRowCnt;
        	var strParam = "";
        	strParam += "START=" + start + "ª";
        	strParam += "END=" + end + "ª";

        	strParam += "SURVSEQ="		    + this.fv_SURVSEQ 		                            + "ª";
        	strParam += "SURVKINDCD="	    + this.fv_SURVKINDCD 	                            + "ª";
        	strParam += "SCHCD="		    + this.fv_SCHCD			                            + "ª";
        	strParam += "ORGCD="		    + this.fv_ORGCD			                            + "ª";
        	strParam += "USERID="		    + this.fv_USERID		                            + "ª";
        	strParam += "USERGRPTYPE="	    + this.fv_USERGRPTYPE 	                            + "ª";
        	strParam += "JOBTYPEGROUPCD="	+ this.Div.form.sub_search.form.in_cb_02.value 		+ "ª";
        	strParam += "DEPTCD="		    + this.Div.form.sub_search.form.in_cb_05.value 		+ "ª";
        	strParam += "DNCD="		  	    + this.Div.form.sub_search.form.in_cb_06.value 		+ "ª";
        	strParam += "NAME="			    + this.Div.form.sub_search.form.in_edit_01.value 	+ "ª";
        	strParam += "UNIQUEKEY="	    + this.Div.form.sub_search.form.in_edit_00.value 	+ "ª";
        	strParam += "STUDENTNO="	    + this.Div.form.sub_search.form.in_edit_02.value 	+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	////trace(this.dsSearch.saveXML());
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "검색", strParam);  //접속기록
        	this.gfnTransaction("listIndiAGinfo",
        						"/swiss/ag/resultSearch/listIndiAGinfo.do",
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
        	strParam += "SCHCD="		+ this.fv_SCHCD	 		+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD	 		+ "ª";
        	strParam += "USERID="		+ this.fv_USERID 		+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	////trace(this.dsSearch.saveXML());
        	this.gfnTransaction("listIndiAGCode",
        						"/swiss/ag/resultSearch/listIndiAGCode.do",
        						"dsSearch=dsSearch",
        						"dsUser=dsUser dsJobcode=dsJobcode dsDept=dsDept dsDncd=dsDncd dsJobGroupCd=dsJobGroupCd",
        						"",
        						"fnCallback",
        						false);
        };
        this.Div_gd_00_oncellclick = function(obj,e)
        {
        // 	var v_JOBTYPECD = this.dsMain.getColumn(this.dsMain.rowposition,"JOBTYPECD");
        // 	var i = this.dsJobcode.findRow("JOBTYPECD",v_JOBTYPECD);
        // 	var v_JOBTYPEGROUPCD = this.dsJobcode.getColumn(i,"JOBTYPEGROUPCD");
        // 	this.dsMain.setColumn(this.dsMain.rowposition,"JOBTYPEGROUPCD",v_JOBTYPEGROUPCD);
        // 	this.dsMain.setColumn(this.dsMain.rowposition,"WORKERID",this.fv_USERID);

        	this.Div02.form.lfn_setData();
        	this.utlf_enableDiv(this.Div02,false);
        	this.Div02.form.in_cb_00.set_enable(false);
        	this.Div02.form.div_03.form.in_edit_00.set_width("204");
        	this.Div02.form.div_04.form.in_edit_00.set_width("268");
        	this.Div02.form.div_05.form.in_edit_01.set_width("199");
        };

        this.searchEnter = function(obj,e)
        {
        	if(e.keycode == nexacro.Event.KEY_ENTER){
        		this.pageFirst = true;
        		this.lfn_listPage(1);
        	}
        };

        //메뉴처리
        this.lfn_goMenu = function(obj,e)
        {
        	if(this.name == obj.id ){
        		return;
        		//this.reload();
        	}

        	var menuid = obj.id ;

        	if("6" == this.fv_USERGRPTYPE){
        		if("ag01m00" !=menuid && "ag03m00" !=menuid
        			&& "ag05m01" !=menuid && "ag08m00" !=menuid ){
        			alert("화면에 대한 권한이 없습니다.");
        			return;
        		}
        		if("ag08m00" == menuid){
        			menuid = "ag08m01";// this.fn_goPage("AG::ag08m01.xfdl");
        		}
        	}

        	this.fv_EVDDOCKIND = objApp.gds_param.getColumn(0,"EVDDOCKIND");
        	if(menuid =='ag09m00' && "2" == this.fv_EVDDOCKIND ){
        		menuid = "ag09m01";// this.fn_goPage("AG::ag09m01.xfdl");
        	}

        	this.fn_goPage("AG::"+menuid +".xfdl");
        };


        this.Div_btn_savefile_onclick = function(obj,e)
        {

        	var objFrame = new ChildFrame();
        	var arr = new Array();
        	arr["saveType"] = ["I", ""];
        	arr["SURVParam"] = [this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_SURVNM];


        	objFrame.init( "CMPSComment", null, null, 800, 700);
        	objFrame.set_openalign("center middle");
        	objFrame.set_formurl( "CM::CMPSComment.xfdl" );

        	var arr = new Array();
        	arr["SURVParam"] = [
        		""
        		,""
        		,""
        		,""
        		,""
        		,""
        		,""
        		,""
        		,""
        		,"0"
        		,"0"
        		,""
        		,"0"
        		,""
        	];

        	objFrame.showModal(this.getOwnerFrame()
        	                      , this.fv_MENUNM
        						  , this
        						  , "fn_popupCallback");

        	//objFrame.showModal("CMPSComment" ,this.getOwnerFrame() ,arr, "fnCallback" );

        	//alert("rtnVal="+rtnVal);
        /*
        	if(rtnVal == "save"){
        		var strParam = "";
        		strParam += "START=" + 0 + "ª";
        		strParam += "END=" + 999999999999999999 + "ª";

        		strParam += "SURVSEQ="		    + this.fv_SURVSEQ 		+ "ª";
        		strParam += "SURVKINDCD="	    + this.fv_SURVKINDCD 	+ "ª";
        		strParam += "SCHCD="		    + this.fv_SCHCD 		+ "ª";
        		strParam += "ORGCD="		    + this.fv_ORGCD		    + "ª";
        		strParam += "USERID="		    + this.fv_USERID		+ "ª";
        		strParam += "USERGRPTYPE="	    + this.fv_USERGRPTYPE 	+ "ª";
        		strParam += "JOBTYPEGROUPCD="	+ this.Div.form.sub_search.form.in_cb_02.value 		+ "ª";
        		strParam += "DEPTCD="		    + this.Div.form.sub_search.form.in_cb_05.value 		+ "ª";
        		strParam += "DNCD="			    + this.Div.form.sub_search.form.in_cb_06.value 		+ "ª";
        		strParam += "NAME="			    + this.Div.form.sub_search.form.in_edit_01.value 	+ "ª";
        		strParam += "UNIQUEKEY="	    + this.Div.form.sub_search.form.in_edit_00.value 	+ "ª";
        		strParam += "STUDENTNO="	    + this.Div.form.sub_search.form.in_edit_02.value 	+ "ª";

        		dsParamSetArrowBlank(this.dsSearch, strParam);
        		////trace(this.dsSearch.saveXML());
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "파일저장", strParam);  //접속기록
        		this.gfnTransaction("listExcel",
        							"/swiss/ag/resultSearch/listIndiAGinfo.do",
        							"dsSearch=dsSearch",
        							"dsExcel=dsResult",
        							"",
        							"fnCallback",
        							false);
        	}
        */
        };

        this.Div_sub_search_Static02_onclick = function(obj,e)
        {

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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ag06m00_onload,this);
            this.Div.form.Static01.addEventHandler("onclick",this.Div_Static01_onclick,this);
            this.Div.form.gd_00.addEventHandler("oncellclick",this.Div_gd_00_oncellclick,this);
            this.Div.form.stepArea01_00.form.ag01m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag02m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag03m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag04m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag05m01.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag07m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag08m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag09m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag06m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.sub_search.form.btn_search.addEventHandler("onclick",this.Div_sub_search_btn_search_onclick,this);
            this.Div.form.sub_search.form.in_edit_00.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.sub_search.form.in_edit_01.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.sub_search.form.in_edit_02.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.btn_savefile.addEventHandler("onclick",this.Div_btn_savefile_onclick,this);
            this.Div.form.txt_rtnval.addEventHandler("onkeyup",this.searchEnter,this);
        };

        this.loadIncludeScript("ag06m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
