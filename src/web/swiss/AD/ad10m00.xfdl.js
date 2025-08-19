(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ad10m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("15px/normal \"SpoqaHanSans-Regular\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,970);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMain", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVPROSTATUSNM\" type=\"STRING\" size=\"32\"/><Column id=\"RNUM\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SURVPROSTATUSCD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"TOTALCNT\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"_chk\" type=\"string\" size=\"256\"/><Column id=\"DEPTCNT\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchKind", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProgSt", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSave", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVPROSTATUSNM\" type=\"STRING\" size=\"32\"/><Column id=\"RNUM\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SURVPROSTATUSCD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"TOTALCNT\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"_chk\" type=\"string\" size=\"256\"/><Column id=\"DEPTCNT\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSurvInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVENDDT\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SURVYEAR\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSTATUSCDNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"DATETIME\" size=\"17\"/><Column id=\"SURVOBJ\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSTRTDT\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSTATUSCD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVNM\" type=\"STRING\" size=\"32\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"RN\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SURVKINDNM\" type=\"STRING\" size=\"32\"/><Column id=\"REMARK\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_viewCntList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">20</Col><Col id=\"CDNM\">20</Col></Row><Row><Col id=\"CD\">50</Col><Col id=\"CDNM\">50</Col></Row><Row><Col id=\"CD\">100</Col><Col id=\"CDNM\">100</Col></Row><Row><Col id=\"CD\">200</Col><Col id=\"CDNM\">200</Col></Row><Row><Col id=\"CD\">500</Col><Col id=\"CDNM\">500</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVPROSTATUSNM\" type=\"STRING\" size=\"32\"/><Column id=\"RNUM\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SURVPROSTATUSCD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"TOTALCNT\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"_chk\" type=\"string\" size=\"256\"/><Column id=\"DEPTCNT\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","960",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Div("sub_title_wrap","30","20","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            this.Div.addChild(obj.name, obj);

            obj = new Static("sub_title","0","0","370","32",null,null,null,null,null,null,this.Div.form.sub_title_wrap.form);
            obj.set_taborder("0");
            obj.set_text("졸업 후 상황");
            obj.set_cssclass(" title_t2");
            this.Div.form.sub_title_wrap.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","20",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","970",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Div("sub_search","30","60","1200","155",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","30","60","70","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("0");
            obj.set_text("학제구분");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Button("btn_search","980","110","150","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("2");
            obj.set_text("검색");
            obj.set_cssclass("btn_styLarge");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_00","833","60","64","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("3");
            obj.set_text("진행상태");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_status","916","60","250","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("1");
            obj.set_accessibilitylabel("입고년도");
            obj.set_innerdataset("dsProgSt");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01","450","60","86","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("4");
            obj.set_text("학교명");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_edit_schnm","501","60","260","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_schkind","112","60","210","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("6");
            obj.set_accessibilitylabel("입고년도");
            obj.set_innerdataset("dsSchKind");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00_00","30","110","69","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("7");
            obj.set_text("항목표시");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_viewCnt","112","110","210","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("8");
            obj.set_accessibilitylabel("조사회차");
            obj.set_innerdataset("ds_viewCntList");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_text("20");
            obj.set_value("20");
            obj.set_index("0");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","30","10","74","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("9");
            obj.set_text("조사기준");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_00","112","10","210","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("10");
            obj.set_datacolumn("SURVSEQNM");
            obj.set_codecolumn("SURVSEQ");
            obj.set_innerdataset("dsSurvInfo");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("label_00","502","10","536","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("11");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("reser_obj_result");
            obj.set_font("18px/normal \"SpoqaHanSans-Regular\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","360","10","124","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("12");
            obj.set_text("조사기간(조사명)");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","970",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Div("btnArea","30","sub_search:0","1200","60",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("8");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_saveFile","0","20","100","30",null,null,null,null,null,null,this.Div.form.btnArea.form);
            obj.set_taborder("0");
            obj.set_text("파일로 저장");
            obj.set_cssclass("btn_sty04");
            this.Div.form.btnArea.addChild(obj.name, obj);

            obj = new Button("btn_return",null,"20","100","30","0",null,null,null,null,null,this.Div.form.btnArea.form);
            obj.set_taborder("2");
            obj.set_text("반려");
            obj.set_cssclass("btn_sty04");
            this.Div.form.btnArea.addChild(obj.name, obj);

            obj = new Button("btn_appro",null,"20","100","30","btn_return:20",null,null,null,null,null,this.Div.form.btnArea.form);
            obj.set_taborder("1");
            obj.set_text("승인");
            obj.set_cssclass("btn_sty04");
            this.Div.form.btnArea.addChild(obj.name, obj);

            obj = new Grid("gd_00","30","btnArea:0","1200","480",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("dsMain");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("grid_sty04");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"42\"/><Column size=\"200\"/><Column size=\"283\"/><Column size=\"197\"/><Column size=\"86\"/><Column size=\"90\"/><Column size=\"247\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"학제명\"/><Cell col=\"3\" text=\"학교명\"/><Cell col=\"4\" text=\"본분교명\"/><Cell col=\"5\" text=\"학과수\"/><Cell col=\"6\" text=\"졸업자수\"/><Cell col=\"7\" text=\"진행상태\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:SURVPROSTATUSCD == '11' || SURVPROSTATUSCD == '15' || SURVPROSTATUSCD == '12' || SURVPROSTATUSCD == '16'?'checkboxcontrol':'normal'\" edittype=\"expr:SURVPROSTATUSCD == '11' || SURVPROSTATUSCD == '15' || SURVPROSTATUSCD == '12' || SURVPROSTATUSCD == '16'?'checkbox':'none'\" checkboxtruevalue=\"1\" text=\"bind:_chk\"/><Cell col=\"1\" text=\"bind:RNUM\"/><Cell col=\"2\" text=\"bind:SCHKINDNM\"/><Cell col=\"3\" text=\"bind:SCHNM\"/><Cell col=\"4\" text=\"bind:ORGNM\"/><Cell col=\"5\" text=\"bind:DEPTCNT\"/><Cell col=\"6\" text=\"bind:TOTALCNT\"/><Cell col=\"7\" text=\"bind:SURVPROSTATUSNM\" displaytype=\"normal\" edittype=\"none\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Div("pagingWrap","30","gd_00:10","1200","60",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_pagging","360","11","480","40",null,null,null,null,null,null,this.Div.form.pagingWrap.form);
            obj.set_taborder("0");
            obj.set_text("div_00");
            obj.set_url("CM::CmPagging.xfdl");
            this.Div.form.pagingWrap.addChild(obj.name, obj);

            obj = new Grid("gd_excel","532","gd_00:-230","570","230",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("dsExcel");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("grid_sty04");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"42\"/><Column size=\"200\"/><Column size=\"283\"/><Column size=\"197\"/><Column size=\"86\"/><Column size=\"90\"/><Column size=\"247\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"학제명\"/><Cell col=\"2\" text=\"학교명\"/><Cell col=\"3\" text=\"본분교명\"/><Cell col=\"4\" text=\"학과수\"/><Cell col=\"5\" text=\"졸업자수\"/><Cell col=\"6\" text=\"진행상태\"/></Band><Band id=\"body\"><Cell text=\"bind:RNUM\"/><Cell col=\"1\" text=\"bind:SCHKINDNM\"/><Cell col=\"2\" text=\"bind:SCHNM\"/><Cell col=\"3\" text=\"bind:ORGNM\"/><Cell col=\"4\" text=\"bind:DEPTCNT\"/><Cell col=\"5\" text=\"bind:TOTALCNT\"/><Cell col=\"6\" text=\"bind:SURVPROSTATUSNM\" displaytype=\"normal\" edittype=\"none\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,970,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CM::CmPagging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("ad10m00.xfdl","CM::common.xjs");
        this.addIncludeScript("ad10m00.xfdl","CM::utl_script.xjs");
        this.registerScript("ad10m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;
        this.executeIncludeScript("CM::utl_script.xjs"); /*include "CM::utl_script.xjs"*/;

        //기본변수세팅
        this.fv_USERID = "";
        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "AG";
        //페이징
        this.pageRowCnt = 30;
        this.totalRowCnt = 0;
        this.pageFirst = true;
        this.deleteYn = false;
        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){

        	}else{
        		if(serviceID == "selectSurvReg"){
        			this.dsSurvInfo.addColumn("SURVSEQNM","string");
        			for(var i=0; i < this.dsSurvInfo.rowcount; i++){
        				var v_survseq = this.dsSurvInfo.getColumn(i,"SURVSEQ");
        				var v_SURVSEQNM = v_survseq.substr(0,2)+"."+v_survseq.substr(2,2)+"."+v_survseq.substr(4,2);
        				this.dsSurvInfo.setColumn(i,"SURVSEQNM",v_SURVSEQNM);
        			}
         			this.Div.form.sub_search.form.in_cb_00.set_value(this.fv_SURVSEQ);
        			this.selectSchKindCodeList();
        			this.Div_in_cb_00_onitemchanged(this.Div.form.sub_search.form.in_cb_00);
        		}
        		if(serviceID == "selectSchKindCodeList"){
        			this.dsSchKind.insertRow(0);
        			this.dsSchKind.setColumn(0,"CD","");
        			this.dsSchKind.setColumn(0,"CDNM","전체");
        			trace(this.dsSchKind.saveXML());
        			this.selectProgStCodeList();
        			this.Div.form.sub_search.form.in_cb_schkind.set_index(0);
        		}
        		if(serviceID == "selectProgStCodeList"){
        			this.dsProgSt.insertRow(0);
        			this.dsProgSt.setColumn(0,"CD","");
        			this.dsProgSt.setColumn(0,"CDNM","전체");
        			this.Div.form.sub_search.form.in_cb_status.set_index(0);
        			this.btn_search_onclick(this.Div.form.sub_search.form.btn_search);
        		}

        		if(serviceID == "listAgprogs"){
        			if(this.deleteYn == false && this.dsMain.rowcount == 0) alert("조회된 자료가 없습니다.");
        			this.deleteYn = false;
        			this.dsMain.addColumn("_chk","string");
        			//trace(this.dsMain.saveXML());
        			this.totalRowCnt = this.dsPage.getColumn(0, "TOTALPAGECNT");
        			if(this.pageFirst)this.paggingInit();
        		}

        		if(serviceID == "deleteAppro"){
        			this.deleteYn = true;
        			this.btn_search_onclick(this.Div.form.sub_search.form.btn_search);
        			alert("반려되었습니다.");
        		}
        		if(serviceID == "updateAppro"){
        			this.deleteYn = true;
        			this.btn_search_onclick(this.Div.form.sub_search.form.btn_search);
        			alert("승인되었습니다.");
        		}
        		if(serviceID == "updateReturnRsn"){
        			alert("반려사유를 업로드 하였습니다.");
        		}

        		if(serviceID == "exceldown"){
        			if(this.dsExcel.rowcount==0){
        				alert("저장할 데이터가 없습니다.");
        				return;
        			}
        			this.utlf_excelDownload("조사진행_졸업후상황",this.Div.form.gd_excel,this.Export00_onsuccess);
        		}
         	}
        }

        this.selectSchKindCodeList = function(){
        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD	+ "ª";
        	strParam += "CDTYPE="		+ '0527' 		+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.gfnTransaction("selectSchKindCodeList",
        						"/swiss/cm/selectCodeList.do",
        						"dsSearch=dsSearch",
        						"dsSchKind=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        this.selectProgStCodeList = function(){
        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";
        	strParam += "CDTYPE="		+ '0083' 		+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.gfnTransaction("selectProgStCodeList",
        						"/swiss/cm/selectCodeList.do",
        						"dsSearch=dsSearch",
        						"dsProgSt=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        this.btn_search_onclick = function(obj,e)
        {
        	this.pageFirst = true;
        	this.pageRowCnt = this.Div.form.sub_search.form.in_cb_viewCnt.value;
        	this.lfn_listPage(1);
        };

        this.lfn_listPage = function(sPage)
        {
        	var start = (sPage - 1) * this.pageRowCnt + 1;
        	var end = sPage * this.pageRowCnt;
        	var strParam = "";
        	strParam += "START=" + start + "ª";
        	strParam += "END=" + end + "ª";

        	strParam += "SURVSEQ=" 			+ this.fv_SURVSEQ		+ "ª";
        	strParam += "SURVKINDCD="		+ this.fv_SURVKINDCD	+ "ª";
        	strParam += "SCHKINDCD=" 		+ this.Div.form.sub_search.form.in_cb_schkind.value	+ "ª";
        	strParam += "SURVPROSTATUSCD="	+ this.Div.form.sub_search.form.in_cb_status.value	+ "ª";
        	strParam += "SCHNM="			+ this.Div.form.sub_search.form.in_edit_schnm.value	+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        //	trace(this.dsMain.saveXML());
        	this.gfnTransaction("listAgprogs",
        						"/swiss/ad/progress/listAgprogs.do",
        						"dsSearch=dsSearch",
        						"dsMain=dsResult dsPage=dsPage",
        						"",
        						"fnCallback",
        						false);
        };

        this.lfn_Excel = function(sPage)
        {

        	var strParam = "";
        	strParam += "START=" + 0 + "ª";
        	strParam += "END=" + 999999999999 + "ª";

        	strParam += "SURVSEQ=" 			+ this.fv_SURVSEQ		+ "ª";
        	strParam += "SURVKINDCD="		+ this.fv_SURVKINDCD	+ "ª";
        	strParam += "SCHKINDCD=" 		+ this.Div.form.sub_search.form.in_cb_schkind.value	+ "ª";
        	strParam += "SURVPROSTATUSCD="	+ this.Div.form.sub_search.form.in_cb_status.value	+ "ª";
        	strParam += "SCHNM="			+ this.Div.form.sub_search.form.in_edit_schnm.value	+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        //	trace(this.dsMain.saveXML());
        	this.gfnTransaction("exceldown",
        						"/swiss/ad/progress/listAgprogs.do",
        						"dsSearch=dsSearch",
        						"dsExcel=dsResult dsPage=dsPage",
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

        this.ad10m00_onload = function(obj,e)
        {
        	var objApp 		= nexacro.getApplication();
        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='AG'",0);
        	this.fv_USERID = objApp.gds_login_info.getColumn(idx, "USERID") ;
        	this.fv_SURVSEQ = objApp.gds_login_info.getColumn(idx, "SURVSEQ");
        	this.lfn_selectSurvInfo();
        };

        this.btn_appro_onclick = function(obj,e)
        {
        	if(!this.lfn_yearchk()) return;
        	//alert("aft yearchk");
        	this.dsSave.clearData();
        	var statusChk=true;
        	//alert("bef loop");
        	for(var i=0; i < this.dsMain.rowcount; i++){
        		if(this.dsMain.getColumn(i,"_chk") =="1"){
        			var newRow = this.dsSave.addRow(); //11,취업-졸업후상황 최종제출
        			this.dsSave.copyRow(newRow, this.dsMain, i);
        			//trace(this.dsSave.saveXML());
        			var v_PRGSTATUSCD = "12"; //12 KEDI-졸업후상황 승인 16KEDI-소명승인
        			if(	"11" != this.dsMain.getColumn(i,"SURVPROSTATUSCD") && "15" != this.dsMain.getColumn(i,"SURVPROSTATUSCD")) statusChk = false;
        			if("11"==this.dsMain.getColumn(i,"SURVPROSTATUSCD")){
        				v_PRGSTATUSCD = "12";
        			}else if("15"==this.dsMain.getColumn(i,"SURVPROSTATUSCD")){
        				v_PRGSTATUSCD = "16";
        			}
        			this.dsSave.setColumn(newRow,"SURVPROSTATUSCD",v_PRGSTATUSCD);
        			//모티터링 처리
        			this.dsSave.addColumn("RCEPTCN","string");
        			this.dsSave.setColumn(newRow,"RCEPTCN", "");
        			this.dsSave.addColumn("STATUSCD","string");
        			this.dsSave.setColumn(newRow,"STATUSCD",v_PRGSTATUSCD);
        			this.dsSave.addColumn("WORKERID","string");
        			this.dsSave.setColumn(newRow,"WORKERID",this.fv_USERID);
        		}
        	}
        	//alert("aft loop");

        	if(this.dsSave.rowcount == 0){
        		this.alert("승인할 데이터를 선택해 주십시요");
        		return;
        	}
        	if(!statusChk){
        		alert("학교에서 제출한 경우에만 처리 가능합니다.");
        		return;
        	}
        	if(!this.confirm("승인 하시겠습니까?")){
        		return;
        	}
        	//trace(this.dsSave.saveXML());
        	this.gfnTransaction("updateAppro",
        						"/swiss/ad/progress/updateAppro.do",
        						"dsSearch=dsSave",
        						"",
        						"",
        						"fnCallback",
        						false);
        };

        this.btn_return_onclick = function(obj,e)
        {
        	if(!this.lfn_yearchk()) return;
        	this.dsSave.clearData();
        	var statusChk=true;
        	for(var i=0; i < this.dsMain.rowcount; i++){
        		if(this.dsMain.getColumn(i,"_chk") =="1"){
        			var newRow = this.dsSave.addRow();
        			var v_PRGSTATUSCD = "13"; // KEDI-졸업후상황 반려
        			if(	"12" != this.dsMain.getColumn(i,"SURVPROSTATUSCD") && "16" != this.dsMain.getColumn(i,"SURVPROSTATUSCD")) statusChk = false;
        			if("12"==this.dsMain.getColumn(i,"SURVPROSTATUSCD") ){
        				v_PRGSTATUSCD = "13";
        			}else if("16"==this.dsMain.getColumn(i,"SURVPROSTATUSCD")){
        				v_PRGSTATUSCD = "17";
        			}
        			this.dsSave.copyRow(newRow, this.dsMain, i);

        			this.dsSave.setColumn(newRow,"SURVPROSTATUSCD",v_PRGSTATUSCD);
        			//모티터링 처리
        			this.dsSave.addColumn("RCEPTCN","string");
        			this.dsSave.setColumn(newRow,"RCEPTCN", "");
        			this.dsSave.addColumn("STATUSCD","string");
        			this.dsSave.setColumn(newRow,"STATUSCD",v_PRGSTATUSCD);
        			this.dsSave.addColumn("WORKERID","string");
        			this.dsSave.setColumn(newRow,"WORKERID",this.fv_USERID);
        		}
        	}

        	if(this.dsSave.rowcount == 0){
        		this.alert("반려할 데이터를 선택해 주십시요");
        		return;
        	}
        	if(!statusChk){
        		alert("KEDI에서 승인한 경우에만 처리 가능합니다.");
        		return;
        	}
        	if(!this.confirm("반려 하시겠습니까?")){
        		return;
        	}
        	//trace(this.dsSave.saveXML());
        	this.gfnTransaction("deleteAppro",
        						"/swiss/ad/progress/deleteAppro.do",
        						"dsSearch=dsSave",
        						"",
        						"",
        						"fnCallback",
        						false);
        };

        this.Div_gd_00_oncelldblclick = function(obj,e)
        {
        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("popDiv_history"
        	                  , 0
        					  , 0
        					  , 300
        					  , 200
        					  , null
        					  , null
        					  , "AD::ad10p00.xfdl");
        	objChildFrame.set_showtitlebar(false);
        	objChildFrame.set_dragmovetype("all");
        	objChildFrame.set_openalign("center middle");
        	objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)")
        //trace(this.dsMain.getColumn(this.dsMain.rowposition,"SURVKINDCD"));
        	var objParam = {param1:this.dsMain.getColumn(this.dsMain.rowposition,"SURVSEQ")
        					, param2:this.dsMain.getColumn(this.dsMain.rowposition,"SURVKINDCD")
        					, param3:this.dsMain.getColumn(this.dsMain.rowposition,"SCHCD")
        					, param4:this.dsMain.getColumn(this.dsMain.rowposition,"ORGCD")};
        	objChildFrame.showModal(this.getOwnerFrame()
        	                      , objParam
        						  , this
        						  , "fn_popupCallback");
        };

        this.Div_gd_00_onheadclick = function(obj,e)
        {
        	var sColID = obj.getCellProperty("body", e.cell, "text");   //"bind:colChk"
            sColID = sColID.substr(5);

            if(sColID == "_chk"){
        		var nValue = obj.getCellProperty("head", e.cell, "text");
        		nValue = (nValue == "1" ? "0" : "1");
        		for(var i=0; i < this.dsMain.rowcount; i++){
        			if("11"==this.dsMain.getColumn(i, "SURVPROSTATUSCD") || "15"==this.dsMain.getColumn(i, "SURVPROSTATUSCD")
        			||"12"==this.dsMain.getColumn(i, "SURVPROSTATUSCD") || "16"==this.dsMain.getColumn(i, "SURVPROSTATUSCD")){
        				this.dsMain.setColumn(i, "_chk", nValue);
        			}
        		}
        		obj.setCellProperty("Head", e.cell, "text", nValue);
        	}
        };

        this.Div_btnArea_btn_saveFile_onclick = function(obj,e)
        {
        	this.lfn_Excel();
        };
        this.Export00_onsuccess = function (obj, e )
        {
        	//trace(e.eventid);
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

        this.Div_in_cb_00_onitemchanged = function(obj,e)
        {

        	this.dsMain.clearData();
        	this.fv_SURVSEQ = this.Div.form.sub_search.form.in_cb_00.value;
        	var i = this.Div.form.sub_search.form.in_cb_00.index;
        	this.fv_SURVOBJ = this.dsSurvInfo.getColumn(i, "SURVOBJ");
        	this.fv_SURVSTRTDT = this.dsSurvInfo.getColumn(i, "SURVSTRTDT");
        	this.fv_SURVENDDT = this.dsSurvInfo.getColumn(i, "SURVENDDT");
        	this.fv_SURVNM = this.dsSurvInfo.getColumn(i, "SURVNM");

        	var survinfo = this.fv_SURVSTRTDT.substr(0,4)+"."+this.fv_SURVSTRTDT.substr(4,2)+"."+this.fv_SURVSTRTDT.substr(6,2)
        					+" ~ "+this.fv_SURVENDDT.substr(0,4)+"."+this.fv_SURVENDDT.substr(4,2)+"."+this.fv_SURVENDDT.substr(6,2)
        					+" ( " + this.fv_SURVNM + " )";
        	this.Div.form.sub_search.form.label_00.set_text(survinfo) ;

        };

        this.lfn_yearchk = function()
        {
        	var objApp 		= nexacro.getApplication();
        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='AG'",0);
        	var SURVSEQ = objApp.gds_login_info.getColumn(idx, "SURVSEQ");
        	if(this.fv_SURVSEQ != SURVSEQ){
        		//alert("당해년도만 처리 가능합니다.");
        		//return false;

        		return true;
        	}else{
        		return true;
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ad10m00_onload,this);
            this.Div.form.sub_search.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div.form.sub_search.form.in_edit_schnm.addEventHandler("onkeydown",this.Div_in_edit_00_onkeydown,this);
            this.Div.form.sub_search.form.in_cb_viewCnt.addEventHandler("canitemchange",this.Div_div_searchArea_in_cb_schkind_canitemchange,this);
            this.Div.form.sub_search.form.in_cb_00.addEventHandler("onitemchanged",this.Div_in_cb_00_onitemchanged,this);
            this.Div.form.btnArea.form.btn_saveFile.addEventHandler("onclick",this.Div_btnArea_btn_saveFile_onclick,this);
            this.Div.form.btnArea.form.btn_return.addEventHandler("onclick",this.btn_return_onclick,this);
            this.Div.form.btnArea.form.btn_appro.addEventHandler("onclick",this.btn_appro_onclick,this);
            this.Div.form.gd_00.addEventHandler("onheadclick",this.Div_gd_00_onheadclick,this);
            this.Div.form.gd_00.addEventHandler("oncelldblclick",this.Div_gd_00_oncelldblclick,this);
            this.Div.form.gd_excel.addEventHandler("onheadclick",this.Div_gd_00_onheadclick,this);
            this.Div.form.gd_excel.addEventHandler("oncelldblclick",this.Div_gd_00_oncelldblclick,this);
        };

        this.loadIncludeScript("ad10m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
