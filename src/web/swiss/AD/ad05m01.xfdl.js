(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ad05m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("15px/normal \"SpoqaHanSans-Regular\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,620);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMain", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"TRSDATE\" type=\"STRING\" size=\"256\"/><Column id=\"TREDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PLACE\" type=\"STRING\" size=\"256\"/><Column id=\"MAXCNT\" type=\"STRING\" size=\"2\"/><Column id=\"RCSDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RCEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CHKACTIVE\" type=\"STRING\" size=\"16\"/><Column id=\"TRAININGSEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">1</Col><Col id=\"CDNM\">예</Col></Row><Row><Col id=\"CD\">2</Col><Col id=\"CDNM\">아니요</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSave", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"TRSDATE\" type=\"STRING\" size=\"256\"/><Column id=\"TREDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PLACE\" type=\"STRING\" size=\"256\"/><Column id=\"MAXCNT\" type=\"STRING\" size=\"2\"/><Column id=\"RCSDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RCEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CHKACTIVE\" type=\"STRING\" size=\"16\"/><Column id=\"TRAININGSEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYmd", this);
            obj._setContents("<ColumnInfo><Column id=\"ymd\" type=\"STRING\" size=\"256\"/><Column id=\"ymdnm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsErr", this);
            obj._setContents("<ColumnInfo><Column id=\"ERRDESC\" type=\"STRING\" size=\"256\"/><Column id=\"ERRKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"ERRKINDCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsValid", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDNM\" type=\"STRING\" size=\"32\"/><Column id=\"TRAININGNM\" type=\"STRING\" size=\"256\"/><Column id=\"TRAININGDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"DAMDANGNM\" type=\"STRING\" size=\"32\"/><Column id=\"TRAININGYN\" type=\"STRING\" size=\"16\"/><Column id=\"NM1\" type=\"STRING\" size=\"32\"/><Column id=\"NM2\" type=\"STRING\" size=\"32\"/><Column id=\"NM3\" type=\"STRING\" size=\"256\"/><Column id=\"NM4\" type=\"STRING\" size=\"256\"/><Column id=\"NM5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SCHNM\">학교명,maxlengthB:200</Col><Col id=\"SCHKINDNM\">학제명,maxlengthB:100</Col><Col id=\"TRAININGNM\">연수명,maxlength:200</Col><Col id=\"TRAININGDATE\">참석일자,maxlengthB:100</Col><Col id=\"ORGNM\">본분교명,maxlengthB:200</Col><Col id=\"DAMDANGNM\">담당자명,maxlengthB:50</Col><Col id=\"TRAININGYN\">참석여부,fix12</Col><Col id=\"NM1\">참석자명1,maxlengthB:50</Col><Col id=\"NM5\">참석자명5,maxlengthB:50</Col><Col id=\"NM4\">참석자명4,maxlengthB:50</Col><Col id=\"NM3\">참석자명3,maxlengthB:50</Col><Col id=\"NM2\">참석자명2,maxlengthB:50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSurvInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVENDDT\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SURVYEAR\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSTATUSCDNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"DATETIME\" size=\"17\"/><Column id=\"SURVOBJ\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSTRTDT\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSTATUSCD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVNM\" type=\"STRING\" size=\"32\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"RN\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SURVKINDNM\" type=\"STRING\" size=\"32\"/><Column id=\"REMARK\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","610",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Div("sub_title_wrap","30","20","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            this.Div.addChild(obj.name, obj);

            obj = new Static("sub_title","0","0","370","32",null,null,null,null,null,null,this.Div.form.sub_title_wrap.form);
            obj.set_taborder("0");
            obj.set_text("연수관리");
            obj.set_cssclass(" title_t2");
            this.Div.form.sub_title_wrap.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","20",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","610",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Div("sub_search","30","60","1200","50",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","30","9","80","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("0");
            obj.set_text("조사기준");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Button("btn_search","1079","9","100","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("2");
            obj.set_text("검색");
            obj.set_cssclass("btn_styLarge");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_00","399","9","64","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("3");
            obj.set_text("조사종류");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_survkindcd","482","9","260","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("1");
            obj.set_accessibilitylabel("입고년도");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div_form_sub_search_form_in_cb_survkindcd_innerdataset = new nexacro.NormalDataset("Div_form_sub_search_form_in_cb_survkindcd_innerdataset", obj);
            Div_form_sub_search_form_in_cb_survkindcd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">조사구분</Col></Row><Row><Col id=\"codecolumn\">GP</Col><Col id=\"datacolumn\">졸업생정보</Col></Row><Row><Col id=\"codecolumn\">FP</Col><Col id=\"datacolumn\">신입생정보</Col></Row><Row><Col id=\"codecolumn\">AG</Col><Col id=\"datacolumn\">졸업후상황</Col></Row></Rows>");
            obj.set_innerdataset(Div_form_sub_search_form_in_cb_survkindcd_innerdataset);
            obj.set_text("졸업생정보");
            obj.set_value("GP");
            obj.set_index("0");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_sruvseq","116","9","220","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("4");
            obj.set_accessibilitylabel("입고년도");
            obj.set_innerdataset("dsSurvInfo");
            obj.set_codecolumn("SURVSEQ");
            obj.set_datacolumn("SURVSEQNM");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","610",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("gd_main","30","168","1200","312",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("dsMain");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"42\"/><Column size=\"460\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"70\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"15\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"순번\"/><Cell col=\"2\" rowspan=\"2\" text=\"연수명\"/><Cell col=\"3\" rowspan=\"2\" text=\"연수일자\"/><Cell col=\"4\" rowspan=\"2\" text=\"장소\"/><Cell col=\"5\" rowspan=\"2\" text=\"최대인원\"/><Cell col=\"6\" rowspan=\"2\" text=\"신청가능일\"/><Cell col=\"7\" rowspan=\"2\" text=\"활성여부\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"1\" text=\"bind:_chk\"/><Cell col=\"1\" text=\"bind:RNUM\"/><Cell col=\"2\" text=\"bind:TITLE\"/><Cell col=\"3\" text=\"bind:TRAININGDATE\"/><Cell col=\"4\" text=\"bind:PLACE\"/><Cell col=\"5\" text=\"bind:MAXCNT\"/><Cell col=\"6\" text=\"bind:RECEIPTDATE\"/><Cell col=\"7\" text=\"bind:CHKACTIVETEXT\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Div("pagingWrap","30","gd_main:20","1200","60",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_pagging","360","11","480","40",null,null,null,null,null,null,this.Div.form.pagingWrap.form);
            obj.set_taborder("0");
            obj.set_text("div_00");
            obj.set_url("CM::CmPagging.xfdl");
            this.Div.form.pagingWrap.addChild(obj.name, obj);

            obj = new Button("btn_modify","1130","130","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_text("등록");
            this.Div.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,620,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CM::CmPagging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("ad05m01.xfdl","CM::common.xjs");
        this.addIncludeScript("ad05m01.xfdl","CM::utl_script.xjs");
        this.registerScript("ad05m01.xfdl", function() {
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
        this.deleteYn = false;

        this.fv_MENUNM = "관리자>조사준비>연수관리";

        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceID == "selectSurvReg"){
        			this.dsSurvInfo.addColumn("SURVSEQNM","string");
        			for(var i=0; i < this.dsSurvInfo.rowcount; i++){
        				var v_survseq = this.dsSurvInfo.getColumn(i,"SURVSEQ");
        				var v_SURVSEQNM = v_survseq.substr(0,2)+"."+v_survseq.substr(2,2)+"."+v_survseq.substr(4,2);
        				this.dsSurvInfo.setColumn(i,"SURVSEQNM",v_SURVSEQNM);
        			}
        			this.Div.form.sub_search.form.in_cb_sruvseq.set_index(0);
        		}
        		if(serviceID == "listTrainNew"){
        			if(this.deleteYn == false && this.dsMain.rowcount == 0) {
        				alert("조회된 자료가 없습니다.");
        			}
        			this.deleteYn = false;
        			this.dsMain.addColumn("_chk","string");
        			this.totalRowCnt = this.dsPage.getColumn(0, "TOTALPAGECNT");
        			if(this.pageFirst)this.paggingInit();
        		}
        		if(serviceID == "listTrainNewFile"){
        			//trace(this.dsExcelBf.saveXML());
        			this.utlf_excelDownload("연수관리",this.Div.form.gd_excel,this.Export00_onsuccess);
        		}
        		if(serviceID == "deleteTrainNew"){
        			alert("삭제되었습니다.");
        			this.deleteYn = true;
        			this.btn_search_onclick(this.Div.form.sub_search.form.btn_search);
        		}
        		if(serviceID == "insertTrainNew"){
        			this.pageFirst = true;
        			this.lfn_listPage(1);
        			alert("연수관리를 업로드 하였습니다.");
        		}
         	}
        }

        this.btn_search_onclick = function(obj,e)
        {
        	this.pageFirst = true;
        	this.lfn_listPage(1);
        };

        this.lfn_listPage = function(sPage)
        {
        /*
        	this.dsMain.clearData();
        	var start = (sPage - 1) * this.pageRowCnt + 1;
        	var end = sPage * this.pageRowCnt;
        	var strParam = "";
        	strParam += "START=" + start + "ª";
        	strParam += "END=" + end + "ª";

        	strParam += "SURVSEQ=" 		+ this.Div.form.sub_search.form.in_cb_sruvseq.value		+ "ª";
        	strParam += "SURVKINDCD="	+ this.Div.form.sub_search.form.in_cb_survkindcd.value	+ "ª";
        	strParam += "SCHKINDNM=" 	+ this.Div.form.sub_search.form.in_cb_schkind.value		+ "ª";
        	strParam += "DAMDANGNM="	+ this.Div.form.sub_search.form.in_edit_damdang.value	+ "ª";
        	strParam += "SCHNM="		+ this.Div.form.sub_search.form.in_edit_schnm.value		+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	//trace(this.dsSearch.saveXML());
        	this.gfnTransaction("listTrain",
        						"/swiss/ad/survtrain/listTrain.do",
        						"dsSearch=dsSearch",
        						"dsMain=dsResult dsPage=dsPage",
        						"",
        						"fnCallback",
        						false);
        */
        	this.dsMain.clearData();
        	var start = (sPage - 1) * this.pageRowCnt + 1;
        	var end = sPage * this.pageRowCnt;
        	var strParam = "";
        	strParam += "START=" + start + "ª";
        	strParam += "END=" + end + "ª";

        	strParam += "SURVSEQ=" 		+ this.Div.form.sub_search.form.in_cb_sruvseq.value		+ "ª";
        	strParam += "SURVKINDCD="	+ this.Div.form.sub_search.form.in_cb_survkindcd.value	+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	//alert(this.dsSearch.saveXML());
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "검색", strParam);  //접속기록
        	this.gfnTransaction("listTrainNew",
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

        this.ad05m00_onload = function(obj,e)
        {
        	var objApp 		= nexacro.getApplication();
        	this.fv_USERID = objApp.gds_login_info.getColumn(0, "USERID") ;
        	this.fv_SURVSEQ = objApp.gds_login_info.getColumn(0, "SURVSEQ");
        	this.fv_SURVKINDCD = objApp.gds_login_info.getColumn(0, "SURVKINDCD");
        	this.lfn_selectSurvInfo();
        };

        this.lfn_selectSurvInfo = function(){
        	var strParam = "";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";
        	strParam += "STARTSURVSEQ="	+ "211231" 	+ "ª";
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

        this.Export00_onsuccess = function (obj, e )
        {
        	//trace(e.eventid);
        }

        this.Div_btn_sampledown_onclick = function(obj,e)
        {
        	this.dsExcelBf.clearData();
        	this.dsExcelBf.addRow();
        	this.utlf_excelDownload("연수관리양식",this.Div.form.gd_excel,this.Export00_onsuccess);
        };

        this.Div_btn_filesave_onclick = function(obj,e)
        {
        	var strParam = "";
        	strParam += "START=" + 0 + "ª";
        	strParam += "END=" + 999999999999999 + "ª";

        	strParam += "SURVSEQ=" 		+ this.Div.form.sub_search.form.in_cb_sruvseq.value		+ "ª";
        	strParam += "SURVKINDCD="	+ this.Div.form.sub_search.form.in_cb_survkindcd.value	+ "ª";
        	strParam += "SCHKINDNM=" 	+ this.Div.form.sub_search.form.in_cb_schkind.value		+ "ª";
        	strParam += "DAMDANGNM="	+ this.Div.form.sub_search.form.in_edit_damdang.value	+ "ª";
        	strParam += "SCHNM="		+ this.Div.form.sub_search.form.in_edit_schnm.value		+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	//trace(this.dsSearch.saveXML());
        	this.gfnTransaction("listTrainFile",
        						"/swiss/ad/survtrain/listTrain.do",
        						"dsSearch=dsSearch",
        						"dsExcelBf=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        this.Div_btn_getinyn_onclick = function(obj,e)
        {
        	this.utlf_excelUpload("dsExcel",this.Import00_onsuccess,this.Import00_onerror);
        };
        //onsuccess Event
        this.Import00_onsuccess = function(obj,  e)
        {
        	this.dsExcel.deleteRow(0);
        	this.dsSaveExcel.clearData();
        	for(var i=0; i < this.dsExcel.rowcount; i++){
        		var nRow = this.dsSaveExcel.addRow();
        		this.dsSaveExcel.copyRow(nRow,this.dsExcel,i,"TRAININGNM=Column0,TRAININGDATE=Column1,SCHKINDNM=Column2,SCHNM=Column3,ORGNM=Column4,DAMDANGNM=Column5,TRAININGYN=Column6,NM1=Column7,NM2=Column8,NM3=Column9,NM4=Column10,NM5=Column11");
        		this.dsSaveExcel.addColumn("SURVSEQ","string");
        		this.dsSaveExcel.setColumn(nRow,"SURVSEQ",this.Div.form.sub_search.form.in_cb_sruvseq.value	 );
        		this.dsSaveExcel.addColumn("SURVKINDCD","string");
        		this.dsSaveExcel.setColumn(nRow,"SURVKINDCD",this.Div.form.sub_search.form.in_cb_survkindcd.value );
        		this.dsSaveExcel.addColumn("USERID","string");
        		this.dsSaveExcel.setColumn(nRow,"USERID", this.fv_USERID);

        	}

        	for(var i=0; i < this.dsExcel.rowcount; i++){
        		var TRAININGNM = this.dsSaveExcel.getColumn(nRow,"TRAININGNM");
        		var TRAININGDATE = this.dsSaveExcel.getColumn(nRow,"TRAININGDATE");
        		var SCHKINDNM = this.dsSaveExcel.getColumn(nRow,"SCHKINDNM");
        		var SCHNM = this.dsSaveExcel.getColumn(nRow,"SCHNM");
        		var ORGNM = this.dsSaveExcel.getColumn(nRow,"ORGNM");
        		var DAMDANGNM = this.dsSaveExcel.getColumn(nRow,"DAMDANGNM");
        		var TRAININGYN = this.dsSaveExcel.getColumn(nRow,"TRAININGYN");
        		var NM1 = this.dsSaveExcel.getColumn(nRow,"NM1");
        		var NM2 = this.dsSaveExcel.getColumn(nRow,"NM2");
        		var NM3 = this.dsSaveExcel.getColumn(nRow,"NM3");
        		var NM4 = this.dsSaveExcel.getColumn(nRow,"NM4");
        		var NM5 = this.dsSaveExcel.getColumn(nRow,"NM5");
        		var nIDRow = this.dsSaveExcel.findRowExpr("TRAININGNM=="+"'"+TRAININGNM+"' && TRAININGDATE=="+"'"+TRAININGDATE+"' && SCHKINDNM=="+"'"+SCHKINDNM
        										+"' && SCHNM=="+"'"+SCHNM+"' && ORGNM =="+"'"+ORGNM
        										+"' && DAMDANGNM=="+"'"+DAMDANGNM+"' && TRAININGYN =="+"'"+TRAININGYN+
        										+"' && NM1=="+"'"+NM1+"' && NM2 =="+"'"+NM2+
        										+"' && NM3=="+"'"+NM3+"' && NM4 =="+"'"+NM4+
        										+"' && NM5=="+"'"+NM5+"'",i+1);
        		if( nIDRow != -1){
        			this.dsSaveExcel.deleteRow(i);
        				//dupStr = dupStr + "["+EMAILADDR+"]"
        				//this.lfn_setErr( "["+EMAILADDR+"]"+ "이메일에 중복된 값이 존재 합니다.");
        		}
        	}
        	//trace(this.dsSaveExcel.saveXML());
        	this.lfn_excelSave();
        }

        this.lfn_excelSave = function()
        {
        	if(this.dsExcel.rowcount == 0){
        		this.alert("입력할 엑셀파일을 선택하세요");
        		return;
        	}

        	if(!this.utlf_getValidDataSet(this.dsSaveExcel,this.dsValid,this.dsErr)){
        		//trace(this.dsErr.saveXML());
        		var errMsg = "";
        		for(var i=0; i < this.dsErr.rowcount; i++){
        			errMsg = errMsg+ this.dsErr.getColumn(i,"ERRDESC")+"\n";
        		}
        		alert("아래와 같이 오류사항있습니다.\n"+errMsg);
        		return;
        	}
        	this.dsSaveExcel.deleteRow(0);
        	this.gfnTransaction("insertTrain",
        						"/swiss/ad/survtrain/insertTrain.do",
        						"dsSearch=dsSaveExcel",
        						"",
        						"",
        						"fnCallback",
        						false);
        };
        //onerror Event
        this.Import00_onerror = function(obj,  e)
        {
        	//trace("임포트실패");
        }

        this.Div_btn_modify_onclick = function(obj,e)
        {
        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("chf_popup2"
        	                  , 0
        					  , 0
        					  , 750
        					  , 550
        					  , null
        					  , null
        					  , "AD::ad05p01.xfdl");
        	objChildFrame.set_showtitlebar(false);
        	objChildFrame.set_dragmovetype("all");
        	objChildFrame.set_openalign("center middle");
        	objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)")
        	//var objParam = {param1:this.dsMain, param2:this.dsMain.rowposition,param3:'I'};
        	var objParam = {param3:'I'};


        	objChildFrame.showModal(this.getOwnerFrame()
        	                      , objParam
        						  , this
        						  , "fn_popupCallback");
        };

        //그리드의 head영역의 체크박스 클릭 시 전체 체크
        this.Div_gd_main_onheadclick = function(obj,e)
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


        this.Div_sub_search_in_edit_damdang_onkeydown = function(obj,e)
        {
        	if(e.keycode == nexacro.Event.KEY_ENTER){
        		this.btn_search_onclick(this.Div.form.sub_search.form.btn_search);
        	}
        };

        this.Div_sub_search_in_edit_schnm_onkeydown = function(obj,e)
        {
        	if(e.keycode == nexacro.Event.KEY_ENTER){
        		this.btn_search_onclick(this.Div.form.sub_search.form.btn_search);
        	}
        };

        this.Div_gd_main_oncelldblclick = function(obj,e)
        {
        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("chf_popup1"
        	                  , 0
        					  , 0
        					  , 300
        					  , 200
        					  , null
        					  , null
        					  , "AD::ad05p01.xfdl");
        	objChildFrame.set_showtitlebar(false);
        	objChildFrame.set_dragmovetype("all");
        	objChildFrame.set_openalign("center middle");
        	objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)")

        	var objParam = {param1:this.dsMain, param2:this.dsMain.rowposition,param3:'U'};

        	objChildFrame.showModal(this.getOwnerFrame()
        	                      , objParam
        						  , this
        						  , "fn_popupCallback");
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ad05m00_onload,this);
            this.Div.form.sub_title_wrap.form.sub_title.addEventHandler("onclick",this.Div_sub_title_wrap_sub_title_onclick,this);
            this.Div.form.sub_search.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div.form.gd_main.addEventHandler("onheadclick",this.Div_gd_main_onheadclick,this);
            this.Div.form.gd_main.addEventHandler("oncelldblclick",this.Div_gd_main_oncelldblclick,this);
            this.Div.form.btn_modify.addEventHandler("onclick",this.Div_btn_modify_onclick,this);
        };

        this.loadIncludeScript("ad05m01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
