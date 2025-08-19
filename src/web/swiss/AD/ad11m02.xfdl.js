(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ad11m02");
            this.set_titletext("학교검색");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,290);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsType1", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">1</Col><Col id=\"CDNM\">상근</Col></Row><Row><Col id=\"CD\">2</Col><Col id=\"CDNM\">비상근</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsType2", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">1</Col><Col id=\"CDNM\">풀타임</Col></Row><Row><Col id=\"CD\">2</Col><Col id=\"CDNM\">파트타임</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">1</Col><Col id=\"CDNM\">예</Col></Row><Row><Col id=\"CD\">2</Col><Col id=\"CDNM\">아니요</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJobcode", this);
            obj._setContents("<ColumnInfo><Column id=\"JOBTYPEGROUPNM\" type=\"STRING\" size=\"32\"/><Column id=\"CHGROUPID\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPENM\" type=\"STRING\" size=\"32\"/><Column id=\"USEYN\" type=\"STRING\" size=\"32\"/><Column id=\"MODIFYYN\" type=\"STRING\" size=\"32\"/><Column id=\"ORDERSEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOBTYPECD\" type=\"STRING\" size=\"32\"/><Column id=\"FILEFORMNM\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPEGROUPCD\" type=\"STRING\" size=\"32\"/><Column id=\"DIVISION\" type=\"STRING\" size=\"32\"/><Column id=\"EVDDOCYN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMain", this);
            obj._setContents("<ColumnInfo><Column id=\"NACODENM\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"FORGCOMNM\" type=\"STRING\" size=\"256\"/><Column id=\"HLTHINSSCBYN\" type=\"STRING\" size=\"32\"/><Column id=\"SCHWORKFORM\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"32\"/><Column id=\"SEXCD\" type=\"STRING\" size=\"256\"/><Column id=\"GOSCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"GOORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"32\"/><Column id=\"EXCHANGEYN\" type=\"STRING\" size=\"32\"/><Column id=\"SCHWORKFORMNM\" type=\"STRING\" size=\"256\"/><Column id=\"GOSCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"DETAILDEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAWORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"GOORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"GOFORGSCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"SEXNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKHOUR\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISAYN\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISATYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"COLNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHSTATNM\" type=\"STRING\" size=\"256\"/><Column id=\"DNCD\" type=\"STRING\" size=\"32\"/><Column id=\"ALDYEMPLYN\" type=\"STRING\" size=\"256\"/><Column id=\"UNIQUEKEY\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSETELNO\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"STUDENTNO\" type=\"STRING\" size=\"256\"/><Column id=\"STARTDT\" type=\"STRING\" size=\"256\"/><Column id=\"UNIGRADECD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"DNNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHSTATCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOBILENO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAILADDR\" type=\"STRING\" size=\"256\"/><Column id=\"NACODE\" type=\"STRING\" size=\"32\"/><Column id=\"SAMEUNIVYN\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD_BF\" type=\"STRING\" size=\"32\"/><Column id=\"OVERSEAWORKTYPENM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD\" type=\"STRING\" size=\"32\"/><Column id=\"ENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPEGROUPCD\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPEGROUPNM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPL\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPO\" type=\"STRING\" size=\"256\"/><Column id=\"RNUM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPENM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMainForm", this);
            obj._setContents("<ColumnInfo><Column id=\"NACODENM\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"FORGCOMNM\" type=\"STRING\" size=\"256\"/><Column id=\"HLTHINSSCBYN\" type=\"STRING\" size=\"32\"/><Column id=\"SCHWORKFORM\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"32\"/><Column id=\"SEXCD\" type=\"STRING\" size=\"256\"/><Column id=\"GOSCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"GOORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"32\"/><Column id=\"EXCHANGEYN\" type=\"STRING\" size=\"32\"/><Column id=\"SCHWORKFORMNM\" type=\"STRING\" size=\"256\"/><Column id=\"GOSCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"DETAILDEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAWORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"GOORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"GOFORGSCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"SEXNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKHOUR\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISAYN\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISATYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"COLNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHSTATNM\" type=\"STRING\" size=\"256\"/><Column id=\"DNCD\" type=\"STRING\" size=\"32\"/><Column id=\"ALDYEMPLYN\" type=\"STRING\" size=\"256\"/><Column id=\"UNIQUEKEY\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSETELNO\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"STUDENTNO\" type=\"STRING\" size=\"256\"/><Column id=\"STARTDT\" type=\"STRING\" size=\"256\"/><Column id=\"UNIGRADECD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"DNNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHSTATCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOBILENO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAILADDR\" type=\"STRING\" size=\"256\"/><Column id=\"NACODE\" type=\"STRING\" size=\"32\"/><Column id=\"SAMEUNIVYN\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD_BF\" type=\"STRING\" size=\"32\"/><Column id=\"OVERSEAWORKTYPENM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD\" type=\"STRING\" size=\"32\"/><Column id=\"ENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPEGROUPCD\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPEGROUPNM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPL\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPO\" type=\"STRING\" size=\"256\"/><Column id=\"RNUM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPENM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_close","640","230","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Grid("gd_00","20","75","1240","125",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("grid_pdShort,grid_sty04");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_autoenter("select");
            obj.set_binddataset("dsMain");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"118\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"183\" band=\"left\"/><Column size=\"318\"/><Column size=\"201\"/><Column size=\"104\"/><Column size=\"155\"/><Column size=\"48\"/><Column size=\"58\"/><Column size=\"145\"/><Column size=\"80\"/><Column size=\"137\"/><Column size=\"48\"/><Column size=\"200\"/><Column size=\"250\"/><Column size=\"125\"/><Column size=\"145\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"250\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"학번\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"개인식별키\"/><Cell col=\"3\" text=\"취업구분\"/><Cell col=\"4\" text=\"동대학(원)진학여부_수정\"/><Cell col=\"5\" colspan=\"3\" text=\"진학학교코드\"/><Cell col=\"8\" colspan=\"2\" text=\"진학학교본분교코드\"/><Cell col=\"10\" colspan=\"3\" text=\"국가코드\"/><Cell col=\"13\" text=\"해외진학학교명\"/><Cell col=\"14\" text=\"해외취업회사명\"/><Cell col=\"15\" text=\"해외비자여부\"/><Cell col=\"16\" text=\"해외비자유형\"/><Cell col=\"17\" text=\"해외근무형태\"/><Cell col=\"18\" text=\"교내근무형태\"/><Cell col=\"19\" text=\"시작일/출판일/등록일\"/><Cell col=\"20\" text=\"종료일\"/><Cell col=\"21\" text=\"근무시간\"/><Cell col=\"22\" text=\"공연명/전시회명/도서명/작품명\"/><Cell col=\"23\" text=\"장소/출판사\"/><Cell col=\"24\" text=\"역할/작품명(개인)\"/></Band><Band id=\"body\"><Cell text=\"bind:STUDENTNO\" tooltiptext=\"bind:STUDENTNO\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:UNIQUEKEY\" tooltiptext=\"bind:UNIQUEKEY\"/><Cell col=\"3\" text=\"bind:JOBTYPECD\" displaytype=\"combocontrol\" combodataset=\"dsJobcode\" combodatacol=\"JOBTYPENM\" combocodecol=\"JOBTYPECD\" edittype=\"combo\" editautoselect=\"true\" comboautoselect=\"true\"/><Cell col=\"4\" text=\"bind:SAMEUNIVYN\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"5\" text=\"bind:GOSCHCD\" displaytype=\"editcontrol\" edittype=\"text\" editmaxlength=\"8\"/><Cell col=\"6\" text=\"bind:GOSCHNM\"/><Cell col=\"7\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"cellBtn\" text=\"검색\"/><Cell col=\"8\" text=\"bind:GOORGCD\" displaytype=\"editcontrol\" edittype=\"text\" editmaxlength=\"1\"/><Cell col=\"9\" text=\"bind:GOORGNM\"/><Cell col=\"10\" text=\"bind:NACODE\" displaytype=\"editcontrol\" edittype=\"text\" editmaxlength=\"4\"/><Cell col=\"11\" text=\"bind:NACODENM\"/><Cell col=\"12\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"cellBtn\" text=\"검색\"/><Cell col=\"13\" text=\"bind:GOFORGSCHNM\" tooltiptext=\"bind:GOFORGSCHNM\" displaytype=\"editcontrol\" edittype=\"text\" editmaxlength=\"80\"/><Cell col=\"14\" text=\"bind:FORGCOMNM\" tooltiptext=\"bind:FORGCOMNM\" displaytype=\"editcontrol\" edittype=\"text\" editmaxlength=\"80\"/><Cell col=\"15\" text=\"bind:OVERSEAVISAYN\" displaytype=\"combocontrol\" combodataset=\"dsYn\" combodatacol=\"CDNM\" combocodecol=\"CD\" edittype=\"combo\"/><Cell col=\"16\" text=\"bind:OVERSEAVISATYPE\" displaytype=\"editcontrol\" edittype=\"text\" editmaxlength=\"80\"/><Cell col=\"17\" text=\"bind:OVERSEAWORKTYPE\" editinputtype=\"normal\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsType2\" combodatacol=\"CDNM\" combocodecol=\"CD\"/><Cell col=\"18\" text=\"bind:SCHWORKFORM\" editinputtype=\"digit\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsType1\" combodatacol=\"CDNM\" combocodecol=\"CD\"/><Cell col=\"19\" text=\"bind:STARTDT\" displaytype=\"calendarcontrol\" maskeditformat=\"####.##.##\" maskedittype=\"string\" edittype=\"date\" calendardateformat=\"yyyy.MM.dd\" calendareditformat=\"yyyy.MM.dd\" calendarautoselect=\"true\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"20\" text=\"bind:ENDDT\" maskeditformat=\"####.##.##\" displaytype=\"calendarcontrol\" maskedittype=\"string\" edittype=\"date\" calendareditformat=\"yyyy.MM.dd\" calendardateformat=\"yyyy.MM.dd\" calendarautoselect=\"true\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"21\" text=\"bind:WORKHOUR\" editinputtype=\"digit\" editmaxlength=\"4\" displaytype=\"editcontrol\" edittype=\"textarea\"/><Cell col=\"22\" text=\"bind:ARTNM\" tooltiptext=\"bind:ARTNM\" editmaxlength=\"80\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"23\" text=\"bind:ARTPL\" tooltiptext=\"bind:ARTPL\" editmaxlength=\"80\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"24\" text=\"bind:ARTPO\" tooltiptext=\"bind:ARTPO\" editmaxlength=\"80\" displaytype=\"editcontrol\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Div("sub_title_wrap","20","30","1200","42",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("sub_title","0","-2","240","32",null,null,null,null,null,null,this.sub_title_wrap.form);
            obj.set_taborder("0");
            obj.set_text("졸업후상황 내용변경");
            obj.set_cssclass(" title_t2");
            this.sub_title_wrap.addChild(obj.name, obj);

            obj = new Button("btn_save","530","230","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,290,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ad11m02.xfdl", function() {
        //기본변수세팅
        this.fv_USERID = "";
        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "AG";
        this.fv_SCHCD = "";
        this.fv_ORGCD = "";
        this.fv_UNIQUEKEY = "";
        this.fv_NAME = "";
        this.fv_STUDENTNO = "";

        this.fv_MENUNM = this.opener.fv_MENUNM + ">" + "졸업후상황내용변경팝업";

        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceID == "selectList"){
        			this.dsMain.addColumn("NAME","string");
        			this.dsMain.addColumn("STUDENTNO","string");
        			if(this.dsMain.rowcount == 0){
        				var nRow = this.dsMainForm.addRow();
        				this.dsMain.copyData(this.dsMainForm);
        				//trace(this.dsMain.saveXML());
        			}
        			for(var i=0; i < this.dsMain.rowcount; i++){
        				this.dsMain.setColumn(i,"SURVSEQ",this.fv_SURVSEQ);
        				this.dsMain.setColumn(i,"SURVKINDCD",this.fv_SURVKINDCD);
        				this.dsMain.setColumn(i,"SCHCD",this.fv_SCHCD);
        				this.dsMain.setColumn(i,"ORGCD",this.fv_ORGCD);
        				this.dsMain.setColumn(i,"UNIQUEKEY",this.fv_UNIQUEKEY);
        				this.dsMain.setColumn(i,"NAME",this.fv_NAME);
        				this.dsMain.setColumn(i,"STUDENTNO",this.fv_STUDENTNO);
        				this.dsMain.setColumn(i,"WORKERID",this.fv_USERID);
        			}
        			//trace(this.dsMain.saveXML());
        			for(var i=0; i < this.dsJobcode.rowcount; i++){
        				this.dsJobcode.setColumn(i,"JOBTYPENM","["+this.dsJobcode.getColumn(i,"JOBTYPECD")+"]"+this.dsJobcode.getColumn(i,"JOBTYPENM"));
        			}
        			trace(this.dsMain.saveXML());
        		}
        		if(serviceID == "insertAgRegist"){
        			alert("저장되었습니다.");
        		}
        	}
        }
        this.ad11m02_onload = function(obj,e)
        {
        	this.fv_SURVSEQ = this.parent.param1;
        	this.fv_SCHCD = this.parent.param3;
        	this.fv_ORGCD = this.parent.param4;
        	this.fv_UNIQUEKEY = this.parent.param5;
        	this.fv_NAME = this.parent.param6;
        	this.fv_STUDENTNO = this.parent.param7;

        	this.selectList();
        };


        this.selectList = function()
        {
        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD	+ "ª";
        	strParam += "SCHCD="		+ this.fv_SCHCD	+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD	+ "ª";
        	strParam += "UNIQUEKEY="	+ this.fv_UNIQUEKEY	+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "목록조회", strParam);  //접속기록
        	this.gfnTransaction("selectList",
        						"/swiss/ad/dataVerification/listInfo.do",
        						"dsSearch=dsSearch",
        						"dsMain=dsResult dsJobcode=dsJobcode",
        						"",
        						"fnCallback",
        						false);

        }


        this.div_00_btn_00_onclick = function(obj,e)
        {
        	this.close();
        };


        this.btn_save_onclick = function(obj,e)
        {
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "저장", "");  //접속기록
        	this.gfnTransaction("insertAgRegist",
        						"/swiss/ad/dataVerification/insertAgRegist.do",
        						"dsSearch=dsMain",
        						"",
        						"",
        						"fnCallback",
        						false);
        };


        this.lfn_goschool = function()
        {
        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("goschool_popup"
        	                  , 0
        					  , 0
        					  , 300
        					  , 200
        					  , null
        					  , null
        					  , "AG::ag05p01.xfdl");
        	objChildFrame.set_showtitlebar(false);
        	objChildFrame.set_dragmovetype("all");
        	objChildFrame.set_openalign("center middle");
        	objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)");
        	var schcd = "";
        	if("1" == this.dsMain.getColumn(this.dsMain.rowposition,"SAMEUNIVYN")){
        		schcd = this.dsMain.getColumn(this.dsMain.rowposition,"SCHCD");
        	}
        	var objParam = {param1:this.dsMain.getColumn(this.dsMain.rowposition,"JOBTYPECD"),param2:schcd};
        	objChildFrame.showModal(this.getOwnerFrame()
        	                      , objParam
        						  , this
        						  , "");
        };

        this.fn_set_goschool = function(SCHCD,SCHNM,ORGCD,ORGNM)
        {

        	if(SCHNM == ""){
        		return;
        	}
        	this.dsMain.setColumn(0,"GOSCHNM", SCHNM);
        	this.dsMain.setColumn(0,"GOSCHCD", SCHCD);
        	this.dsMain.setColumn(0,"GOORGNM", ORGNM);
        	this.dsMain.setColumn(0,"GOORGCD", ORGCD);
        	var preschcd = this.dsMain.getColumn(0,"SCHCD").substring(0,5);
        	var aftschcd = this.dsMain.getColumn(0,"GOSCHCD").substring(0,5);
        	//trace(preschcd);
        	//trace(aftschcd);
        	//동대학여부
        	if(preschcd == aftschcd)
        		this.dsMain.setColumn(0,"SAMEUNIVYN", '1');
        	else{
        		this.dsMain.setColumn(0,"SAMEUNIVYN", '');
        	}

        };

        this.lfn_selectOversea = function()
        {
        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("oversea_popup1"
        	                  , 0
        					  , 0
        					  , 300
        					  , 200
        					  , null
        					  , null
        					  , "AG::ag05p02.xfdl");
        	objChildFrame.set_showtitlebar(false);
        	objChildFrame.set_dragmovetype("all");
        	objChildFrame.set_openalign("center middle");
        	objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)")

        	objChildFrame.showModal(this.getOwnerFrame()
        	                      , ''
        						  , this
        						  , "");
        }
        this.fn_set_oversea = function(cd, cdnm)
        {
        	if(cdnm == undefined){
        		return;
        	}

        	this.dsMain.setColumn(this.dsMain.rowposition,"NACODE", cd);
        	this.dsMain.setColumn(this.dsMain.rowposition,"NACODENM", cdnm);

        };

        this.Div_gd_00_oncellclick = function(obj,e)
        {
        	if(e.col =='7') {
        		this.lfn_goschool();
        	}
        	if(e.col =='12') {
        		this.lfn_selectOversea();
        	}
        	if(e.cell == 19 || e.cell == 20 )
        	{
        		obj.dropdownCalendar();
        	}
        	else if(e.cell == 3 || e.cell == 15 || e.cell == 17 || e.cell == 18 )
        	{
        		obj.dropdownCombo();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ad11m02_onload,this);
            this.btn_close.addEventHandler("onclick",this.div_00_btn_00_onclick,this);
            this.gd_00.addEventHandler("oncellclick",this.Div_gd_00_oncellclick,this);
            this.Static01.addEventHandler("onclick",this.Div_Static01_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
        };

        this.loadIncludeScript("ad11m02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
