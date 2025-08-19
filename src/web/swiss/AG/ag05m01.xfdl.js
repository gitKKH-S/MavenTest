(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ag05m01");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,1110);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSurvInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVINFONM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"USERGRPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchool", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"CHGPSNYN\" type=\"STRING\" size=\"256\"/><Column id=\"EVDDOCKIND\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHORGNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMain", this);
            obj._setContents("<ColumnInfo><Column id=\"NACODENM\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"FORGCOMNM\" type=\"STRING\" size=\"256\"/><Column id=\"HLTHINSSCBYN\" type=\"STRING\" size=\"32\"/><Column id=\"SCHWORKFORM\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"32\"/><Column id=\"SEXCD\" type=\"STRING\" size=\"256\"/><Column id=\"GOSCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"GOORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"32\"/><Column id=\"EXCHANGEYN\" type=\"STRING\" size=\"32\"/><Column id=\"SCHWORKFORMNM\" type=\"STRING\" size=\"256\"/><Column id=\"GOSCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"DETAILDEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAWORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"GOORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"GOFORGSCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"SEXNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKHOUR\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISAYN\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISATYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"COLNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHSTATNM\" type=\"STRING\" size=\"256\"/><Column id=\"DNCD\" type=\"STRING\" size=\"32\"/><Column id=\"ALDYEMPLYN\" type=\"STRING\" size=\"256\"/><Column id=\"UNIQUEKEY\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSETELNO\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"STUDENTNO\" type=\"STRING\" size=\"256\"/><Column id=\"STARTDT\" type=\"STRING\" size=\"256\"/><Column id=\"UNIGRADECD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"DNNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHSTATCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOBILENO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAILADDR\" type=\"STRING\" size=\"256\"/><Column id=\"NACODE\" type=\"STRING\" size=\"32\"/><Column id=\"SAMEUNIVYN\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD_BF\" type=\"STRING\" size=\"32\"/><Column id=\"OVERSEAWORKTYPENM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD\" type=\"STRING\" size=\"32\"/><Column id=\"ENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPEGROUPCD\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPEGROUPNM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPL\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPO\" type=\"STRING\" size=\"256\"/><Column id=\"RNUM\" type=\"STRING\" size=\"256\"/><Column id=\"PRGSTATUSCD\" type=\"STRING\" size=\"256\"/><Column id=\"OUTYM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPENM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPENM_BF\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUser", this);
            obj._setContents("<ColumnInfo><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"USERNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsTmp", this);
            obj._setContents("<ColumnInfo><Column id=\"OPTVALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNationGrp", this);
            obj._setContents("<ColumnInfo><Column id=\"NACONTINENTCD\" type=\"STRING\" size=\"256\"/><Column id=\"NACONTINENT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"NACODENM\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"FORGCOMNM\" type=\"STRING\" size=\"256\"/><Column id=\"HLTHINSSCBYN\" type=\"STRING\" size=\"32\"/><Column id=\"SCHWORKFORM\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"32\"/><Column id=\"SEXCD\" type=\"STRING\" size=\"256\"/><Column id=\"GOSCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"GOORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"32\"/><Column id=\"EXCHANGEYN\" type=\"STRING\" size=\"32\"/><Column id=\"SCHWORKFORMNM\" type=\"STRING\" size=\"256\"/><Column id=\"GOSCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"DETAILDEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAWORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"GOORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"GOFORGSCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"SEXNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKHOUR\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISAYN\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISATYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"COLNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHSTATNM\" type=\"STRING\" size=\"256\"/><Column id=\"DNCD\" type=\"STRING\" size=\"32\"/><Column id=\"ALDYEMPLYN\" type=\"STRING\" size=\"256\"/><Column id=\"UNIQUEKEY\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSETELNO\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"STUDENTNO\" type=\"STRING\" size=\"256\"/><Column id=\"STARTDT\" type=\"STRING\" size=\"256\"/><Column id=\"UNIGRADECD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"DNNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHSTATCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOBILENO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAILADDR\" type=\"STRING\" size=\"256\"/><Column id=\"NACODE\" type=\"STRING\" size=\"32\"/><Column id=\"SAMEUNIVYN\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD_BF\" type=\"STRING\" size=\"32\"/><Column id=\"OVERSEAWORKTYPENM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD\" type=\"STRING\" size=\"32\"/><Column id=\"ENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPEGROUPCD\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPEGROUPNM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPL\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPO\" type=\"STRING\" size=\"256\"/><Column id=\"RNUM\" type=\"STRING\" size=\"256\"/><Column id=\"PRGSTATUSCD\" type=\"STRING\" size=\"256\"/><Column id=\"OUTYM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPENM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPENM_BF\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJobcodegrcd", this);
            obj._setContents("<ColumnInfo><Column id=\"JOBTYPEGROUPNM\" type=\"STRING\" size=\"32\"/><Column id=\"CHGROUPID\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPENM\" type=\"STRING\" size=\"32\"/><Column id=\"USEYN\" type=\"STRING\" size=\"32\"/><Column id=\"MODIFYYN\" type=\"STRING\" size=\"32\"/><Column id=\"ORDERSEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOBTYPECD\" type=\"STRING\" size=\"32\"/><Column id=\"FILEFORMNM\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPEGROUPCD\" type=\"STRING\" size=\"32\"/><Column id=\"DIVISION\" type=\"STRING\" size=\"32\"/><Column id=\"EVDDOCYN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMainPre", this);
            obj._setContents("<ColumnInfo><Column id=\"NACODENM\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"FORGCOMNM\" type=\"STRING\" size=\"256\"/><Column id=\"HLTHINSSCBYN\" type=\"STRING\" size=\"32\"/><Column id=\"SCHWORKFORM\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"32\"/><Column id=\"SEXCD\" type=\"STRING\" size=\"256\"/><Column id=\"GOSCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"GOORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"32\"/><Column id=\"EXCHANGEYN\" type=\"STRING\" size=\"32\"/><Column id=\"SCHWORKFORMNM\" type=\"STRING\" size=\"256\"/><Column id=\"GOSCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"DETAILDEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAWORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"GOORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"GOFORGSCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"SEXNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKHOUR\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISAYN\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISATYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"COLNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHSTATNM\" type=\"STRING\" size=\"256\"/><Column id=\"DNCD\" type=\"STRING\" size=\"32\"/><Column id=\"ALDYEMPLYN\" type=\"STRING\" size=\"256\"/><Column id=\"UNIQUEKEY\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSETELNO\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"STUDENTNO\" type=\"STRING\" size=\"256\"/><Column id=\"STARTDT\" type=\"STRING\" size=\"256\"/><Column id=\"UNIGRADECD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"DNNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHSTATCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOBILENO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAILADDR\" type=\"STRING\" size=\"256\"/><Column id=\"NACODE\" type=\"STRING\" size=\"32\"/><Column id=\"SAMEUNIVYN\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD_BF\" type=\"STRING\" size=\"32\"/><Column id=\"OVERSEAWORKTYPENM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD\" type=\"STRING\" size=\"32\"/><Column id=\"ENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPEGROUPCD\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPEGROUPNM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPL\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPO\" type=\"STRING\" size=\"256\"/><Column id=\"RNUM\" type=\"STRING\" size=\"256\"/><Column id=\"PRGSTATUSCD\" type=\"STRING\" size=\"256\"/><Column id=\"OUTYM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPENM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPENM_BF\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSCHWORKFORM", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">1</Col><Col id=\"CDNM\">상근</Col></Row><Row><Col id=\"CD\">2</Col><Col id=\"CDNM\">비상근</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOVERSEAWORKTYPE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">1</Col><Col id=\"CDNM\">풀타임</Col></Row><Row><Col id=\"CD\">2</Col><Col id=\"CDNM\">파트타임</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLogInSch", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"256\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSTRTDT\" type=\"STRING\" size=\"256\"/><Column id=\"SURVENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","1100",null,null,null,null,null,null,this);
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

            obj = new Static("Static00","0","0","30","1100",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","1100",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_00","30","375","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_text("표준조사지");
            obj.set_cssclass("btn_sty04");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("gd_00","30","415","798","525",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("8");
            obj.set_cssclass("grid_pdShort,grid_sty04");
            obj.set_binddataset("dsMain");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"50\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"140\"/><Column size=\"130\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"120\"/><Column size=\"143\"/><Column size=\"205\"/><Column size=\"125\"/><Column size=\"145\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\" padding=\"0px\"/><Cell col=\"1\" text=\"단과대학\" padding=\"0px\"/><Cell col=\"2\" text=\"학과명\" padding=\"0px\"/><Cell col=\"3\" text=\"학과소분류명\" padding=\"0px\"/><Cell col=\"4\" text=\"주야구분\" padding=\"0px\"/><Cell col=\"5\" text=\"학번\" padding=\"0px\"/><Cell col=\"6\" text=\"성명\" padding=\"0px\"/><Cell col=\"7\" text=\"성별\" padding=\"0px\"/><Cell col=\"8\" text=\"취업구분\" padding=\"0px\"/><Cell col=\"9\" text=\"연계정보\" padding=\"0px\"/><Cell col=\"10\" text=\"개인식별키\" padding=\"0px\"/><Cell col=\"11\" text=\"외국인유학생여부\" padding=\"0px\"/><Cell col=\"12\" text=\"진학학교명\" padding=\"0px\"/><Cell col=\"13\" text=\"진학학교본분교명\" padding=\"0px\"/><Cell col=\"14\" text=\"국가명\" padding=\"0px\"/><Cell col=\"15\" text=\"해외진학학교명\" padding=\"0px\"/><Cell col=\"16\" text=\"해외취업회사명\" padding=\"0px\"/><Cell col=\"17\" text=\"해외비자여부\" padding=\"0px\"/><Cell col=\"18\" text=\"해외비자유형\" padding=\"0px\"/><Cell col=\"19\" text=\"해외근무형태\" padding=\"0px\"/><Cell col=\"20\" text=\"교내근무형태\" padding=\"0px\"/><Cell col=\"21\" text=\"시작일/출판일/등록일\" padding=\"0px\"/><Cell col=\"22\" text=\"종료일\" padding=\"0px\"/><Cell col=\"23\" text=\"근무시간\" padding=\"0px\"/><Cell col=\"24\" text=\"공연명/전시회명/도서명/작품명\" padding=\"0px\"/><Cell col=\"25\" text=\"장소/출판사\" padding=\"0px\"/><Cell col=\"26\" text=\"역할/작품명(개인)\" padding=\"0px\"/></Band><Band id=\"body\"><Cell text=\"bind:RNUM\" padding=\"0px\"/><Cell col=\"1\" text=\"bind:COLNM\" tooltiptext=\"bind:COLNM\" padding=\"0px\"/><Cell col=\"2\" text=\"bind:DEPTNM\" tooltiptext=\"bind:DEPTNM\" padding=\"0px\"/><Cell col=\"3\" text=\"bind:DETAILDEPTNM\" tooltiptext=\"bind:DETAILDEPTNM\" padding=\"0px\"/><Cell col=\"4\" text=\"bind:DNNM\" tooltiptext=\"bind:DNNM\" padding=\"0px\"/><Cell col=\"5\" text=\"bind:STUDENTNO\" tooltiptext=\"bind:STUDENTNO\" padding=\"0px\"/><Cell col=\"6\" text=\"bind:NAME\" padding=\"0px\"/><Cell col=\"7\" text=\"bind:SEXNM\" padding=\"0px\"/><Cell col=\"8\" text=\"bind:JOBTYPENM\" displaytype=\"normal\" combodataset=\"dsJobcode\" combodatacol=\"JOBTYPENM\" combocodecol=\"JOBTYPECD\" tooltiptext=\"bind:JOBTYPENM\" padding=\"0px\"/><Cell col=\"9\" text=\"bind:JOBTYPENM_BF\" displaytype=\"normal\" combodataset=\"dsJobcode\" combodatacol=\"JOBTYPENM\" combocodecol=\"JOBTYPECD\" tooltiptext=\"bind:JOBTYPENM_BF\" padding=\"0px\"/><Cell col=\"10\" text=\"bind:UNIQUEKEY\" tooltiptext=\"bind:UNIQUEKEY\" padding=\"0px\"/><Cell col=\"11\" text=\"bind:EXCHANGEYN\" displaytype=\"combotext\" combodataset=\"dsYn\" combodatacol=\"CDNM\" combocodecol=\"CD\" padding=\"0px\"/><Cell col=\"12\" text=\"bind:GOSCHNM\" tooltiptext=\"bind:GOSCHNM\" padding=\"0px\"/><Cell col=\"13\" text=\"bind:GOORGNM\" tooltiptext=\"bind:GOORGNM\" padding=\"0px\"/><Cell col=\"14\" text=\"bind:NACODENM\" tooltiptext=\"bind:NACODENM\" padding=\"0px\"/><Cell col=\"15\" text=\"bind:GOFORGSCHNM\" tooltiptext=\"bind:GOFORGSCHNM\" padding=\"0px\"/><Cell col=\"16\" text=\"bind:FORGCOMNM\" tooltiptext=\"bind:FORGCOMNM\" padding=\"0px\"/><Cell col=\"17\" text=\"bind:OVERSEAVISAYN\" displaytype=\"combotext\" combodataset=\"dsYn\" combodatacol=\"CDNM\" combocodecol=\"CD\" padding=\"0px\"/><Cell col=\"18\" text=\"bind:OVERSEAVISATYPE\" padding=\"0px\"/><Cell col=\"19\" text=\"bind:OVERSEAWORKTYPE\" displaytype=\"combotext\" combodataset=\"dsOVERSEAWORKTYPE\" combodatacol=\"CDNM\" combocodecol=\"CD\" padding=\"0px\"/><Cell col=\"20\" text=\"bind:SCHWORKFORM\" displaytype=\"combotext\" combodataset=\"dsSCHWORKFORM\" combodatacol=\"CDNM\" combocodecol=\"CD\" padding=\"0px\"/><Cell col=\"21\" text=\"bind:STARTDT\" displaytype=\"mask\" maskeditformat=\"####.##.##\" maskedittype=\"string\" padding=\"0px\"/><Cell col=\"22\" text=\"bind:ENDDT\" maskeditformat=\"####.##.##\" displaytype=\"mask\" maskedittype=\"string\" padding=\"0px\"/><Cell col=\"23\" text=\"bind:WORKHOUR\" padding=\"0px\"/><Cell col=\"24\" text=\"bind:ARTNM\" tooltiptext=\"bind:ARTNM\" padding=\"0px\"/><Cell col=\"25\" text=\"bind:ARTPL\" tooltiptext=\"bind:ARTPL\" padding=\"0px\"/><Cell col=\"26\" text=\"bind:ARTPO\" tooltiptext=\"bind:ARTPO\" padding=\"0px\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_01","1010","375","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("11");
            obj.set_text("초기화");
            obj.set_cssclass("btn_sty08");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_02","1130","375","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("12");
            obj.set_text("저장");
            obj.set_cssclass("btn_sty08");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Div("Div_surv","30","82","1200","95",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_cssclass("sub_research03");
            this.Div.addChild(obj.name, obj);

            obj = new Static("reser_st03","30","10","120","30",null,null,null,null,null,null,this.Div.form.Div_surv.form);
            obj.set_taborder("0");
            obj.set_text("조사 기준");
            obj.set_cssclass("reser_st03");
            this.Div.form.Div_surv.addChild(obj.name, obj);

            obj = new Static("reser_st_result","reser_st03:10","10","120","30",null,null,null,null,null,null,this.Div.form.Div_surv.form);
            obj.set_taborder("1");
            obj.set_text("20.12.31");
            obj.set_cssclass("reser_st_result");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\"");
            this.Div.form.Div_surv.addChild(obj.name, obj);

            obj = new Static("reser_obj03","290","10","113","30",null,null,null,null,null,null,this.Div.form.Div_surv.form);
            obj.set_taborder("2");
            obj.set_text("조사 대상");
            obj.set_cssclass("reser_obj03");
            this.Div.form.Div_surv.addChild(obj.name, obj);

            obj = new Static("reser_date_result","reser_obj03:10","10","584","29",null,null,null,null,null,null,this.Div.form.Div_surv.form);
            obj.set_taborder("3");
            obj.set_text("20.2월, 19.08월 졸업자");
            obj.set_cssclass("reser_date_result");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\"");
            this.Div.form.Div_surv.addChild(obj.name, obj);

            obj = new Static("reser_date03","30","45","120","30",null,null,null,null,null,null,this.Div.form.Div_surv.form);
            obj.set_taborder("4");
            obj.set_text("조사 기간");
            obj.set_cssclass("reser_date03");
            this.Div.form.Div_surv.addChild(obj.name, obj);

            obj = new Static("reser_obj_result","reser_date03:10","45","606","30",null,null,null,null,null,null,this.Div.form.Div_surv.form);
            obj.set_taborder("5");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("reser_obj_result");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\"");
            this.Div.form.Div_surv.addChild(obj.name, obj);

            obj = new Div("sub_search","30","Div_surv:20","1200","155",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","30","10","52","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("0");
            obj.set_text("담당자");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","30","60","54","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("6");
            obj.set_text("학과");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Button("btn_search","949","110","160","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("16");
            obj.set_text("검색");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_cssclass("btn_sty01 btn_styLarge");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_02","810","10","64","23",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("4");
            obj.set_text("입력현황");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_05","100","60","280","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsDept");
            obj.set_datacolumn("DEPTNM");
            obj.set_codecolumn("DEPTCD");
            obj.set_text("본교");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","420","110","70","32",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("14");
            obj.set_text("개인식별키");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_edit_00","500","110","280","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("15");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","30","110","44","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("12");
            obj.set_text("성명");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_edit_01","100","110","280","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("13");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00","810","60","65","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("10");
            obj.set_text("학번");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_edit_02","890","60","280","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("11");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_01","890","10","280","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div_form_sub_search_form_in_cb_01_innerdataset = new nexacro.NormalDataset("Div_form_sub_search_form_in_cb_01_innerdataset", obj);
            Div_form_sub_search_form_in_cb_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">미입력</Col></Row><Row><Col id=\"datacolumn\">입력완료</Col><Col id=\"codecolumn\">4</Col></Row></Rows>");
            obj.set_innerdataset(Div_form_sub_search_form_in_cb_01_innerdataset);
            obj.set_text("2021");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","420","10","64","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("2");
            obj.set_text("취업구분");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_02","500","10","280","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsJobGroupCd");
            obj.set_codecolumn("JOBTYPEGROUPCD");
            obj.set_datacolumn("JOBTYPEGROUPNM");
            obj.set_text("2021");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_01","420","60","64","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("8");
            obj.set_text("주야");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_06","500","60","280","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsDncd");
            obj.set_datacolumn("CDNM");
            obj.set_codecolumn("DNCD");
            obj.set_text("2021");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_00","100","10","280","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsUser");
            obj.set_codecolumn("USERID");
            obj.set_datacolumn("USERNM");
            obj.set_text("2021");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Div("pagingWrap","30","946","800","60",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("10");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_pagging","150","11","480","40",null,null,null,null,null,null,this.Div.form.pagingWrap.form);
            obj.set_taborder("0");
            obj.set_text("div_00");
            obj.set_url("CM::CmPagging.xfdl");
            this.Div.form.pagingWrap.addChild(obj.name, obj);

            obj = new Div("stepArea01_00","30","20","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
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
            obj.set_cssclass("step01 on03");
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
            obj.set_cssclass("ico_step on03");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","653","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("13");
            obj.set_cssclass("ico_step on03");
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

            obj = new Static("ag06m00","1064","0","133","40",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("8");
            obj.set_text("결과조회");
            obj.set_cssclass("step01  last");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00","919","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("15");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00_00","1052","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("16");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Button("btn_03","152","375","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_text("파일저장");
            obj.set_cssclass("btn_sty04");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("gd_01","340","740","498","210",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("9");
            obj.set_cssclass("grid_pdShort,grid_sty04");
            obj.set_binddataset("dsExcel");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"300\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"50\"/><Column size=\"300\"/><Column size=\"300\"/><Column size=\"150\"/><Column size=\"130\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"300\"/><Column size=\"125\"/><Column size=\"145\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"단과대학\"/><Cell col=\"2\" text=\"학과명\"/><Cell col=\"3\" text=\"학과소분류명\"/><Cell col=\"4\" text=\"주야구분\"/><Cell col=\"5\" text=\"학번\"/><Cell col=\"6\" text=\"성명\"/><Cell col=\"7\" text=\"성별\"/><Cell col=\"8\" text=\"취업구분\"/><Cell col=\"9\" text=\"연계정보\"/><Cell col=\"10\" text=\"개인식별키\"/><Cell col=\"11\" text=\"외국인유학생여부\"/><Cell col=\"12\" text=\"진학학교명\"/><Cell col=\"13\" text=\"진학학교본분교명\"/><Cell col=\"14\" text=\"국가명\"/><Cell col=\"15\" text=\"해외진학학교명\"/><Cell col=\"16\" text=\"해외취업회사명\"/><Cell col=\"17\" text=\"해외비자여부\"/><Cell col=\"18\" text=\"해외비자유형\"/><Cell col=\"19\" text=\"해외근무형태\"/><Cell col=\"20\" text=\"교내근무형태\"/><Cell col=\"21\" text=\"시작일/출판일/등록일\"/><Cell col=\"22\" text=\"종료일\"/><Cell col=\"23\" text=\"근무시간\"/><Cell col=\"24\" text=\"공연명/전시회명/도서명/작품명\"/><Cell col=\"25\" text=\"장소/출판사\"/><Cell col=\"26\" text=\"역할/작품명(개인)\"/></Band><Band id=\"body\"><Cell text=\"bind:RNUM\"/><Cell col=\"1\" text=\"bind:COLNM\" tooltiptext=\"bind:COLNM\"/><Cell col=\"2\" text=\"bind:DEPTNM\" tooltiptext=\"bind:DEPTNM\"/><Cell col=\"3\" text=\"bind:DETAILDEPTNM\" tooltiptext=\"bind:DETAILDEPTNM\"/><Cell col=\"4\" text=\"bind:DNNM\" tooltiptext=\"bind:DNNM\"/><Cell col=\"5\" text=\"bind:STUDENTNO\" tooltiptext=\"bind:STUDENTNO\"/><Cell col=\"6\" text=\"bind:NAME\"/><Cell col=\"7\" text=\"bind:SEXNM\"/><Cell col=\"8\" text=\"bind:JOBTYPENM\" displaytype=\"normal\" combodataset=\"dsJobcode\" combodatacol=\"JOBTYPENM\" combocodecol=\"JOBTYPECD\" tooltiptext=\"bind:JOBTYPENM\"/><Cell col=\"9\" text=\"bind:JOBTYPENM_BF\" displaytype=\"normal\" combodataset=\"dsJobcode\" combodatacol=\"JOBTYPENM\" combocodecol=\"JOBTYPECD\" tooltiptext=\"bind:JOBTYPENM_BF\"/><Cell col=\"10\" text=\"bind:UNIQUEKEY\" tooltiptext=\"bind:UNIQUEKEY\"/><Cell col=\"11\" text=\"bind:EXCHANGEYN\" displaytype=\"combotext\" combodataset=\"dsYn\" combodatacol=\"CDNM\" combocodecol=\"CD\"/><Cell col=\"12\" text=\"bind:GOSCHNM\" tooltiptext=\"bind:GOSCHNM\"/><Cell col=\"13\" text=\"bind:GOORGNM\" tooltiptext=\"bind:GOORGNM\"/><Cell col=\"14\" text=\"bind:NACODENM\" tooltiptext=\"bind:NACODENM\"/><Cell col=\"15\" text=\"bind:GOFORGSCHNM\" tooltiptext=\"bind:GOFORGSCHNM\"/><Cell col=\"16\" text=\"bind:FORGCOMNM\" tooltiptext=\"bind:FORGCOMNM\"/><Cell col=\"17\" text=\"bind:OVERSEAVISAYN\" displaytype=\"combotext\" combodataset=\"dsYn\" combodatacol=\"CDNM\" combocodecol=\"CD\"/><Cell col=\"18\" text=\"bind:OVERSEAVISATYPE\"/><Cell col=\"19\" text=\"bind:OVERSEAWORKTYPENM\"/><Cell col=\"20\" text=\"bind:SCHWORKFORMNM\"/><Cell col=\"21\" text=\"bind:STARTDT\" displaytype=\"mask\" maskeditformat=\"####.##.##\" maskedittype=\"string\"/><Cell col=\"22\" text=\"bind:ENDDT\" maskeditformat=\"####.##.##\" displaytype=\"mask\" maskedittype=\"string\"/><Cell col=\"23\" text=\"bind:WORKHOUR\"/><Cell col=\"24\" text=\"bind:ARTNM\" tooltiptext=\"bind:ARTNM\"/><Cell col=\"25\" text=\"bind:ARTPL\" tooltiptext=\"bind:ARTPL\"/><Cell col=\"26\" text=\"bind:ARTPO\" tooltiptext=\"bind:ARTPO\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_goBatch","728","375","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("13");
            obj.set_text("일괄등록 ▶");
            obj.set_cssclass("btn_sty08");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Div("Div02","860","415","370","560",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sel_box04");
            obj.set_text("");
            obj.set_url("AG::ag05s01.xfdl");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,1110,this,function(p){});
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
        this.addIncludeScript("ag05m01.xfdl","CM::common.xjs");
        this.addIncludeScript("ag05m01.xfdl","CM::utl_script.xjs");
        this.registerScript("ag05m01.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;
        this.executeIncludeScript("CM::utl_script.xjs"); /*include "CM::utl_script.xjs"*/;
        //기본변수세팅
        this.fv_USERID = "";
        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "";
        this.fv_USERGRPTYPE = "";
        this.fv_SURVOBJ = "";
        this.fv_SURVNM = "";
        this.fv_CHGPSNYN = "";
        this.fv_CHANGEYN = "";
        this.fv_TMP = "";

        this.fv_SURVPROSTATUSCD = "";

        this.fv_DEPTSTATUS = "";

        this.rnPage = '1';
        //페이징
        this.pageRowCnt = 20;
        this.totalRowCnt = 0;
        this.pageFirst = true;

        this.fv_MENUNM = "졸업후상황>정보등록(일괄)";
        //글로벌 데이터셋을 사용하기 위한 objApp
        var objApp = nexacro.getApplication();

        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		//trace(errCD);
        		//trace(errMSG);
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{

        		if(serviceID == "listIndiAGinfo"){
        			//trace(this.dsMain.saveXML());
        			this.totalRowCnt = this.dsPage.getColumn(0, "TOTALPAGECNT");
        			if(this.totalRowCnt == 0){
        				this.dsMain.clearData();
        				alert("조회된 자료가 없습니다.");
        			}
        			if(this.pageFirst)this.paggingInit();
        		}
        		if(serviceID == "listIndiAGCode"){
        			if(this.dsDept.rowcount==0){
        				alert("조회할 데이터가 없습니다.");
        				return;
        			}
        			////trace(this.dsDetailDept.saveXML());
        			this.dsUser.set_keystring("S:USERNM+");
        			this.dsUser.insertRow(0);
        			this.dsUser.setColumn(0,"USERID","MANAGER");
        			this.dsUser.setColumn(0,"USERNM","전체");
        			this.dsUser.deleteRow(this.dsUser.findRowExpr("USERNM=='취업담당자'",0));

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
        			this.Div.form.sub_search.form.in_cb_01.set_index(0);

        			if("4" == this.fv_USERGRPTYPE){
        				this.Div.form.sub_search.form.in_cb_00.set_index(0);
        			}
        			//this.Div.form.sub_search.form.in_cb_00.set_index(0);
        			//trace(this.dsColcd.saveXML());
        		}
        		if(serviceID == "listIndiAGinfoExcel"){
        			if(this.dsExcel.rowcount==0){
        				alert("파일저장할 내역이 없습니다");
        				return;
        			}
        			this.utlf_excelDownload("졸업후상황 정보",this.Div.form.gd_01,this.Export00_onsuccess);
        		}

        		if(serviceID == "getTmp"){
        			//alert("in getTmp 01");
        			/*
        			var chkopt = this.dsTmp.getColumn(0,"OPTVALUE");
        			if(chkopt=="1"){
        				this.fv_TMP = "1";
        				//alert("미연계자 기타설정 학교 m01");
        			}
        			*/
        			//alert("rtn gettmp");
        			//alert("max="+this.dsTmp.rowcount);
        			for(var cnt=0;cnt<this.dsTmp.rowcount;cnt++){
        				var chkname = this.dsTmp.getColumn(cnt,"OPTNAME");
        				var chkopt = this.dsTmp.getColumn(cnt,"OPTVALUE");

        				//alert("chkname="+chkname+", chkopt="+chkopt);

        				if(chkname=="미연계자기타처리"){
        					if(chkopt=="1"){
        						//alert("in chk");
        						//this.Div.form.Div02_2.form.in_chkBox_01_2.set_value(1);
        						this.fv_TMP="1";
        						//alert("미연계자 기타설정 학교 m01");
        					}
        				}

        				if(chkname=="학과담당자유무설정"){
        					this.fv_DEPTSTATUS = chkopt;
        				}

        				//alert("chkstatus="+this.fv_DEPTSTATUS);
        			}
        		}
         	}
        }

        this.ag05m01_onload = function(obj,e)
        {
        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='AG'",0);
        	this.fv_USERID = objApp.gds_login_info.getColumn(idx, "USERID") ;
        	this.fv_SURVSEQ = objApp.gds_login_info.getColumn(idx, "SURVSEQ");
        	this.fv_SURVKINDCD = objApp.gds_login_info.getColumn(idx, "SURVKINDCD");
        	this.fv_USERGRPTYPE = objApp.gds_login_info.getColumn(idx, "USERGRPTYPE");
        	this.fv_SURVOBJ = objApp.gds_login_info.getColumn(idx, "SURVOBJ");
        	this.fv_SURVNM = objApp.gds_login_info.getColumn(idx, "SURVNM");
        	this.fv_CHANGEYN = objApp.gds_login_info.getColumn(idx, "CHANGEYN");

        	this.fv_SURVPROSTATUSCD = objApp.gds_param.getColumn(0, "SURVPROSTATUSCD");
        	this.fv_CHGPSNYN = objApp.gds_param.getColumn(0, "CHGPSNYN");
        	this.fv_SCHCD = objApp.gds_param.getColumn(0, "SCHCD");
        	this.fv_ORGCD = objApp.gds_param.getColumn(0, "ORGCD");

        	this.getTmp();

        	this.Div02.form.lfn_setData();

        	if("6" == this.fv_USERGRPTYPE){
        		this.Div.form.sub_search.form.in_cb_00.set_enable(false);
        	}

        	this.lfn_divSurvSet();

        	this.lfn_setDivSubSearch();

        	this.Div_sub_search_btn_search_onclick(this.Div.form.sub_search.form.btn_search);
        };

        this.getTmp = function()
        {
        	//var optname = "미연계자기타처리";
        	var optname = "";
        	var strParam = "";

        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";
        	strParam += "SCHCD="		+ this.fv_SCHCD 		+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD 		+ "ª";
        	strParam += "OPTNAME="		+ optname			+ "ª";

        	//alert("strParam="+strParam);
        	//return false;
        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "null값 기타 설정값 조회", strParam);  //접속기록
        	//alert("01");
        	this.gfnTransaction("getTmp",
        						"/swiss/ag/config/getTmp.do",
        						"dsSearch=dsSearch",
        						"dsTmp=dsResult",
        						"",
        						"fnCallback",
        						false);
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

        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";
        	strParam += "SCHCD="		+ this.fv_SCHCD 		+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD 		+ "ª";

        	strParam += "USERID="		+ this.Div.form.sub_search.form.in_cb_00.value 		+ "ª";
        	strParam += "REGYN="		+ this.Div.form.sub_search.form.in_cb_01.value 		+ "ª";
        	strParam += "JOBTYPEGROUPCD="	+ this.Div.form.sub_search.form.in_cb_02.value 	+ "ª";
        	strParam += "DEPTCD="		+ this.Div.form.sub_search.form.in_cb_05.value 		+ "ª";
        	strParam += "DNCD="			+ this.Div.form.sub_search.form.in_cb_06.value 		+ "ª";
        	strParam += "NAME="			+ this.Div.form.sub_search.form.in_edit_01.value 	+ "ª";
        	strParam += "UNIQUEKEY="	+ this.Div.form.sub_search.form.in_edit_00.value 	+ "ª";
        	strParam += "STUDENTNO="	+ this.Div.form.sub_search.form.in_edit_02.value 	+ "ª";
        	strParam += "CHGPSNYN="		+ this.fv_CHGPSNYN									+ "ª";
        	strParam += "TMPNULL="		+ this.fv_TMP										+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	////trace(this.dsSearch.saveXML());
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "검색", strParam);  //접속기록
        	this.gfnTransaction("listIndiAGinfo",
        						"/swiss/ag/regist/listIndiAGinfo.do",
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
        	this.rnPage = nPage;
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
        	strParam += "USERID="		+ this.fv_USERID 			+ "ª";
        	strParam += "USERGRPTYPE="	+ this.fv_USERGRPTYPE 		+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	////trace(this.dsSearch.saveXML());
        	this.gfnTransaction("listIndiAGCode",
        						"/swiss/ag/regist/listIndiAGCode.do",
        						"dsSearch=dsSearch",
        						"dsUser=dsUser dsJobcode=dsJobcode dsDept=dsDept dsDncd=dsDncd dsJobGroupCd=dsJobGroupCd dsJobcodegrcd=dsJobcodegrcd dsMainPre=dsResultPre",
        						"",
        						"fnCallback",
        						true);
        };

        this.lfn_agAuthorityChk = function(){
        	var ret = true;
        	var v_SURVPROSTATUSCD = this.fv_SURVPROSTATUSCD;
        	var v_SCH_SURVSTRTDT = this.fv_SURVSTRTDT;
        	var v_SCH_SURVENDDT = this.fv_SURVENDDT;
        	var v_TO_DATE = objApp.gds_param.getColumn(0, "TODATE");

        	if(v_SCH_SURVSTRTDT > v_TO_DATE || v_SCH_SURVENDDT < v_TO_DATE){
        		alert("조사기간이 아닙니다.");
        		ret = false;
        	}
        	//취업담당자일경우.. /학과담당자는 별도 처리
        	if("4" == this.fv_USERGRPTYPE && ("8" == v_SURVPROSTATUSCD || 10 <= v_SURVPROSTATUSCD)){ // 취업담당자
        		alert("이미 제출되었습니다.");
        		ret =  false;
        	}
        	return ret;
        }

        this.lfn_setEnable = function(str){
        	this.Div02.set_enable(str);
        	this.Div02.form.toolTip.set_visible(str);

        	this.Div.form.btn_00.set_enable(str);
        	this.Div.form.btn_01.set_enable(str);
        	this.Div.form.btn_02.set_enable(str);
        	this.Div.form.btn_goBatch.set_enable(str);
        }

        this.Div_gd_00_oncellclick = function(obj,e)
        {
        //trace(this.dsJobGroupCd.saveXML());
        //trace(this.dsMain.getColumn(this.dsMain.rowposition,"PRGSTATUSCD"));


        // 	if(!this.dsMain.getColumn(this.dsMain.rowposition,"JOBTYPEGROUPCD")){
        // 		var v_JOBTYPECD = this.dsMain.getColumn(this.dsMain.rowposition,"JOBTYPECD");
        // 		var i = this.dsJobcode.findRow("JOBTYPECD",v_JOBTYPECD);
        // 		var v_JOBTYPEGROUPCD = this.dsJobcode.getColumn(i,"JOBTYPEGROUPCD");
        // 		this.dsMain.setColumn(this.dsMain.rowposition,"JOBTYPEGROUPCD",v_JOBTYPEGROUPCD);
        // 	}
        	this.dsMain.addColumn("WORKERID","string");
        	this.dsMain.setColumn(this.dsMain.rowposition,"WORKERID",this.fv_USERID);
        	this.Div02.form.lfn_setData();
        };

        this.Div_btn_01_onclick = function(obj,e)
        {
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "초기화", "");  //접속기록
        	this.Div02.form.lfn_resetPreData();
        };

        this.Div_btn_02_onclick = function(obj,e)
        {
        	if("4" == this.fv_USERGRPTYPE && "5" != this.dsMain.getColumn(this.dsMain.rowposition,"PRGSTATUSCD")){
        		alert("학과에서 제출-승인되지 않은 데이터는 수정 불가능합니다.");
        		return;
        	}
        	trace(this.fv_USERGRPTYPE);
        	trace(this.dsMain.getColumn(this.dsMain.rowposition,"PRGSTATUSCD"));
        	if("6" == this.fv_USERGRPTYPE
        		&& ( '5' == this.dsMain.getColumn(this.dsMain.rowposition,"PRGSTATUSCD"))){
        		alert("취업담당자가 승인하였습니다. 정보등록 및 제출이 불가능합니다.");
        		return;
        	}


        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "저장", "");  //접속기록

        	//alert("chkChktype=["+chkChktype+"]");
        	//return false;

        	this.Div02.form.lfn_saveData();
        };

        this.lfn_setDivSubSearch = function()
        {
        	this.Div.form.sub_search.form.in_cb_00.set_value("");
        	this.Div.form.sub_search.form.in_cb_01.set_value("");
        	this.Div.form.sub_search.form.in_cb_02.set_value("");
        	this.Div.form.sub_search.form.in_cb_05.set_value("");
        	this.Div.form.sub_search.form.in_cb_06.set_value("");

        	this.Div02.form.lfn_deleteAllData(); // 취업구분 데이터 초기화
        	this.Div02.form.lfn_divVisibleFalse();
        	this.dsMain.clearData();
        	this.lfn_selectSearchCdList();

        	this.lfn_setEnable(this.lfn_agAuthorityChk());

        	if("4" == this.fv_USERGRPTYPE ){ //대학 취업담당자
        		this.Div.form.sub_search.form.in_cb_00.set_value("MANAGER");
        		this.Div.form.btn_goBatch.set_visible(true);
        	} else {
        		this.Div.form.btn_goBatch.set_visible(false);
        	}
        	if("6" == this.fv_USERGRPTYPE){
        		this.Div.form.sub_search.form.in_cb_00.set_value(this.fv_USERID);
        	}
        	var v_SURVPROSTATUSCD = this.fv_SURVPROSTATUSCD;

        	if(this.fv_SURVPROSTATUSCD <= 6 && this.fv_CHGPSNYN !='1'){
        		if(this.fv_USERGRPTYPE == "6"){
        			alert("학과담당자 미존재로 설정되었습니다.");
        			this.fn_goPage("AG::ag00m00.xfdl");
        		}
        	}
        	this.utlf_enableBtnByCall();

        	if(this.fv_CHANGEYN=="Y"){
        		this.Div.form.btn_00.set_enable(true);
        	}
        };

        this.searchEnter = function(obj,e)
        {
        	if(e.keycode == nexacro.Event.KEY_ENTER){
        		this.pageFirst = true;
        		this.lfn_listPage(1);
        	}
        };

        this.Div_btn_00_onclick = function(obj,e)
        {
        	var SURVSEQ 	= this.fv_SURVSEQ;
        	var SURVKINDCD 	= this.fv_SURVKINDCD;
        	var SCHCD  		= this.fv_SCHCD;
        	var ORGCD  		= this.fv_ORGCD;

        	var USERID= this.Div.form.sub_search.form.in_cb_00.value;
        	var REGYN= this.Div.form.sub_search.form.in_cb_01.value ;
        	if(!REGYN) REGYN="";
        	var JOBTYPEGROUPCD= this.Div.form.sub_search.form.in_cb_02.value ;
        	var DEPTCD= this.Div.form.sub_search.form.in_cb_05.value ;
        	var DNCD= this.Div.form.sub_search.form.in_cb_06.value 	;
        	var NAME= this.Div.form.sub_search.form.in_edit_01.value ;
        	if(!NAME) NAME="";
        	var UNIQUEKEY= this.Div.form.sub_search.form.in_edit_00.value ;
        	if(!UNIQUEKEY) UNIQUEKEY="";
        	var STUDENTNO= this.Div.form.sub_search.form.in_edit_02.value ;
        	if(!STUDENTNO) STUDENTNO="";
        	var sPage = this.rnPage;
        	var start = (sPage - 1) * this.pageRowCnt + 1;
        	var end = sPage * this.pageRowCnt;

        	var param = "SURVSEQ["+SURVSEQ+"] SURVKINDCD["+SURVKINDCD+"] SCHCD["+SCHCD+"] ORGCD["+ORGCD+"] USERID["+USERID
        	+"] REGYN["+REGYN+"] JOBTYPEGROUPCD["+JOBTYPEGROUPCD+"] DEPTCD["+DEPTCD+"] DNCD["+DNCD
        	+"] NAME["+NAME+"] UNIQUEKEY["+UNIQUEKEY+"] STUDENTNO["+STUDENTNO+"] CHGPSNYN["+this.fv_CHGPSNYN+"] START["+start+"] END["+end+"]";
        	//trace(param);

        	var objFrame = new ChildFrame();
        	var objParam = {param1:"ag05r01.mrd" , param2:param };

        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "표준조사지", param);  //접속기록

        	objFrame.init( "ag05r01", null, null, 600, 600);
        	objFrame.set_showtitlebar(false);
        	objFrame.set_openalign("center middle");
        	objFrame.set_formurl( "CM::CMRdViewer.xfdl" );
        	objFrame.showModal("ag05r01" ,this.getOwnerFrame() ,objParam );
        };


        this.Div_stepArea01_00_Static00_onclick = function(obj,e)
        {

        };

        this.Div_btn_03_onclick = function(obj,e)
        {

        	var strParam = "";

        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";
        	strParam += "SCHCD="		+ this.fv_SCHCD 		+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD 		+ "ª";

        	strParam += "USERID="		+ this.Div.form.sub_search.form.in_cb_00.value 		+ "ª";
        	strParam += "REGYN="		+ this.Div.form.sub_search.form.in_cb_01.value 		+ "ª";
        	strParam += "JOBTYPEGROUPCD="	+ this.Div.form.sub_search.form.in_cb_02.value 	+ "ª";
        	strParam += "DEPTCD="		+ this.Div.form.sub_search.form.in_cb_05.value 		+ "ª";
        	strParam += "DNCD="			+ this.Div.form.sub_search.form.in_cb_06.value 		+ "ª";
        	strParam += "NAME="			+ this.Div.form.sub_search.form.in_edit_01.value 	+ "ª";
        	strParam += "UNIQUEKEY="	+ this.Div.form.sub_search.form.in_edit_00.value 	+ "ª";
        	strParam += "STUDENTNO="	+ this.Div.form.sub_search.form.in_edit_02.value 	+ "ª";
        	strParam += "CHGPSNYN="		+ this.fv_CHGPSNYN									+ "ª";
        	strParam += "TMPNULL="		+ this.fv_TMP										+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	////trace(this.dsSearch.saveXML());
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "파일저장", strParam);  //접속기록
        	this.gfnTransaction("listIndiAGinfoExcel",
        						"/swiss/ag/regist/listIndiAGinfoExcel.do",
        						"dsSearch=dsSearch",
        						"dsExcel=dsResult",
        						"",
        						"fnCallback",
        						false);

        };

        this.Div_btn_goBatch_onclick = function(obj,e)
        {
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "일괄등록", "");  //접속기록
        	this.fn_goPage("AG::ag05m00.xfdl");
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

        	this.Div.form.Div_surv.form.reser_st_result.set_text(this.fv_SURVSEQ.substr(0,2)+"."+this.fv_SURVSEQ.substr(2,2)+"."+this.fv_SURVSEQ.substr(4,2)) ;
        	this.Div.form.Div_surv.form.reser_date_result.set_text(this.fv_SURVOBJ) ;
        	var survinfo = this.fv_SURVSTRTDT.substr(0,4)+"."+this.fv_SURVSTRTDT.substr(4,2)+"."+this.fv_SURVSTRTDT.substr(6,2)
        					+" ~ "+this.fv_SURVENDDT.substr(0,4)+"."+this.fv_SURVENDDT.substr(4,2)+"."+this.fv_SURVENDDT.substr(6,2)
        					+" ( "+this.fv_SURVNM+" )";
        	this.Div.form.Div_surv.form.reser_obj_result.set_text(survinfo) ;

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
            this.addEventHandler("onload",this.ag05m01_onload,this);
            this.Div.form.Static01.addEventHandler("onclick",this.Div_Static01_onclick,this);
            this.Div.form.btn_00.addEventHandler("onclick",this.Div_btn_00_onclick,this);
            this.Div.form.gd_00.addEventHandler("oncellclick",this.Div_gd_00_oncellclick,this);
            this.Div.form.btn_01.addEventHandler("onclick",this.Div_btn_01_onclick,this);
            this.Div.form.btn_02.addEventHandler("onclick",this.Div_btn_02_onclick,this);
            this.Div.form.sub_search.form.btn_search.addEventHandler("onclick",this.Div_sub_search_btn_search_onclick,this);
            this.Div.form.sub_search.form.in_edit_00.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.sub_search.form.in_edit_01.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.sub_search.form.in_edit_02.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.stepArea01_00.form.ag01m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag02m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag03m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag04m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag05m01.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag07m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag08m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag09m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag06m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.btn_03.addEventHandler("onclick",this.Div_btn_03_onclick,this);
            this.Div.form.gd_01.addEventHandler("oncellclick",this.Div_gd_00_oncellclick,this);
            this.Div.form.btn_goBatch.addEventHandler("onclick",this.Div_btn_goBatch_onclick,this);
        };

        this.loadIncludeScript("ag05m01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
