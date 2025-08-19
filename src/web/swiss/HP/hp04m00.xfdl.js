(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("hp04m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("15px/normal \"SpoqaHanSans-Regular\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_faq", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARDSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BBSNO\" type=\"STRING\" size=\"256\"/><Column id=\"BOARDTYPECD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"REFNO\" type=\"STRING\" size=\"256\"/><Column id=\"LV\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"ANSWER\" type=\"STRING\" size=\"256\"/><Column id=\"NOTICEYN\" type=\"STRING\" size=\"256\"/><Column id=\"SECRETYN\" type=\"STRING\" size=\"256\"/><Column id=\"HIT\" type=\"STRING\" size=\"256\"/><Column id=\"DELYN\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIERID\" type=\"STRING\" size=\"256\"/><Column id=\"MODDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"FILEID\" type=\"STRING\" size=\"256\"/><Column id=\"FILEYN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cnt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_year", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_kind", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CDNM\">전체</Col></Row><Row><Col id=\"CD\">FP</Col><Col id=\"CDNM\">신입생정보</Col></Row><Row><Col id=\"CD\">GP</Col><Col id=\"CDNM\">졸업생정보</Col></Row><Row><Col id=\"CD\">AG</Col><Col id=\"CDNM\">졸업후상황</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fileList", this);
            obj._setContents("<ColumnInfo><Column id=\"ATT_IDT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ATT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIERID\" type=\"STRING\" size=\"256\"/><Column id=\"MODDTHM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fileDownList", this);
            obj._setContents("<ColumnInfo><Column id=\"SAVE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_FILE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fileDownTrans", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","900",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","900",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","900",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_areaTitleImg","30","0","1200","200",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_text("div_00");
            this.Div.addChild(obj.name, obj);

            obj = new ImageViewer("imgFaq","0","0","1200","160",null,null,null,null,null,null,this.Div.form.div_areaTitleImg.form);
            obj.set_image("url(\'theme::default/images/img_faqTop.jpg\')");
            obj.set_border("0px none");
            obj.set_accessibilitylabel("FAQ 고등교육기관졸업자 취업통계조사 FAQ입니다.");
            obj.set_taborder("0");
            this.Div.form.div_areaTitleImg.addChild(obj.name, obj);

            obj = new Div("sub_search","30","div_areaTitleImg:0","1200","74",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","25","20","64","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("0");
            obj.set_text("조사년도");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_year","Static00:0","20","150","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_year");
            obj.set_codecolumn("CDNM");
            obj.set_datacolumn("CDNM");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","290","20","64","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("5");
            obj.set_text("조사종류");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"20","100","30","30",null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("4");
            obj.set_text("검색");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_kind","Static00_01_01:0","20","190","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_kind");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_text("2020");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_edit_keyword","810","20","210","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("3");
            obj.set_displaynulltext("검색어");
            obj.set_maxlength("50");
            obj.set_inputfilter("comma,dot,sign,symbol");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new CheckBox("in_chkBox_name","629","20","50","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("6");
            obj.set_text("이름");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new CheckBox("in_chkBox_subject","in_chkBox_name:15","20","50","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("7");
            obj.set_text("제목");
            obj.set_value("true");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new CheckBox("in_chkBox_answer","in_chkBox_subject:15","20","50","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("8");
            obj.set_text("내용");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Div("div_00","30","sub_search:0","1200","56",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"26","100","30","0",null,null,null,null,null,this.Div.form.div_00.form);
            obj.set_taborder("0");
            obj.set_text("작성");
            obj.set_cssclass("btn_sty09");
            obj.set_visible("false");
            this.Div.form.div_00.addChild(obj.name, obj);

            obj = new Grid("gd_faq_list","30","div_00:10","1200","445",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("false");
            obj.set_readonly("true");
            obj.set_extendsizetype("row");
            obj.set_autosizingtype("row");
            obj.set_treeuseline("false");
            obj.set_nodatatext("데이터가 없습니다.");
            obj.set_wheelscrollrow("1");
            obj.set_binddataset("ds_faq");
            obj.set_cssclass("default");
            obj.set_scrollbartype("auto auto");
            obj.set_cellsizebandtype("body");
            obj.set_scrolltype("vertical");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"95\"/><Column size=\"136\"/><Column size=\"914\"/><Column size=\"52\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"조사년도\"/><Cell col=\"1\" text=\"조사종류\"/><Cell col=\"2\" text=\"FAQ\"/><Cell col=\"3\" text=\"첨부\"/></Band><Band id=\"body\"><Cell text=\"bind:SURVYEAR\"/><Cell col=\"1\" text=\"bind:SURVKINDNM\"/><Cell col=\"2\" text=\"bind:SUBJECT\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:LV\" cssclass=\"alignLeft\" padding=\"10px\" verticalAlign=\"middle\" font=\"normal 15px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"3\" displaytype=\"expr:FILEYN == '1' ? 'imagecontrol' : 'none'\" text=\"expr:FILEYN == '1'? &quot;url('theme://images/ico_file.png')&quot; : &quot;&quot;\" cssclass=\"expr:FILEYN == '1' ? 'grid_file_down' : ''\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Div("pagingWrap","30","gd_faq_list:10","1200","60",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_pagging","360","11","480","33",null,null,null,null,null,null,this.Div.form.pagingWrap.form);
            obj.set_taborder("1");
            obj.set_text("div_00");
            obj.set_url("CM::CmPagging.xfdl");
            this.Div.form.pagingWrap.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,900,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CM::CmPagging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("hp04m00.xfdl","CM::common.xjs");
        this.registerScript("hp04m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;

        this.pageRowCnt = 20;
        this.totalRowCnt = 0;
        this.fv_MENUNM = "알림소식>FAQ";
        this.fv_SURVSEQ="";
        this.fv_SURVKINDCD="AG";
        var objApp 		= nexacro.getApplication();
        this.hp04m00_oninit = function(obj,e)
        {
        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='AG'",0);
        	this.fv_SURVSEQ = objApp.gds_login_info.getColumn(idx, "SURVSEQ");
        	var grp = objApp.gds_login_info.getColumn(0, "USERGRPTYPE");
        	if(grp == "2"){
        		this.Div.form.div_00.form.btn_add.set_visible(true);
        	}

        	this.fileDownTrans.setPostData("BASE_DIR", "");
        	this.fileDownTrans.set_url(nexacro.getEnvironment().services["svcBaseUrl"].url + "swiss/hp/com/downloadFile.do");
        };

        this.hp04m00_onload = function(obj,e)
        {
        	nexacro.getApplication().gds_rtn_result.clear();
        	this.selectYearList();
        	this.searchFaqCnt();

        	//this.Div.form.gd_faq_list.autoSizeRow(0, 1);

        };


        this.Div_sub_search_btn_search_onclick = function(obj,e)
        {
        	this.searchFaqCnt();
        };

        this.searchEnter = function(obj,e)
        {
        	if(e.keycode == nexacro.Event.KEY_ENTER){
        		this.searchFaqCnt();
        	}
        };


        // 새글 작성
        this.Div_pagingWrap_btn_add_onclick = function(obj,e)
        {
        	nexacro.getApplication().gds_rtn_result.clear();
        	this.fn_goPage("HP::hp04m01.xfdl");
        	//__content.form.div_nomagin.set_url("HP::hp01m01.xfdl");

        };


        // 상세페이지 연결
        this.Div_gd_faq_list_oncelldblclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	var grp = objApp.gds_login_info.getColumn(0, "USERGRPTYPE");

        	if(grp == "2"){
        		//var rowPos = this.Div.form.gd_faq_list.getSelectedRows();
        		var rowPos = this.Div.form.gd_faq_list.getSelectedDatasetRows();

        		var bbsNo = this.ds_faq.getColumn(rowPos, "BBSNO");

        		var strParam = "BBSNO=" + bbsNo + "ª";
        		dsParamSetArrowBlank(nexacro.getApplication().gds_rtn_result, strParam);
        		this.fn_goPage("HP::hp04m01.xfdl");
        	}
        };

        this.Div_gd_faq_list_oncellclick = function(obj,e)
        {
        	//trace("=!= : " + nexacro.getApplication().gds_login_info.getColumn(0, "USER_GB"));


        	/*
        	// 셀 합치기
        	this.ds_faq.set_keystring("S:SURVYEAR+SURVKINDNM");

        	var retVal = this.Div.form.gd_faq_list.setCellProperty("body", 2, "suppress", "1");
        	var retVal = this.Div.form.gd_faq_list.setCellProperty("body", 3, "suppress", "2");
        	var retVal = this.Div.form.gd_faq_list.setCellProperty("body", 4, "suppress", "3");
        	var retVal = this.Div.form.gd_faq_list.setCellProperty("body", 5, "suppress", "4");
        	var retVal = this.Div.form.gd_faq_list.setCellProperty("body", 6, "suppress", "5");

        	*/


        	// 스크롤 없게 자동 갱신
        	//var nH = this.Div.form.gd_faq_list.getRealRowFullSize();
        	//this.Div.form.gd_faq_list.set_height(nH+50);
        	//trace("11111111111111");

        	var row = e.row;
        	var col = e.col;
        	var grid = obj;

        	if(col == 3){ // 첨부클릭
        		var fileId = this.ds_faq.getColumn(row, "FILEID");
        		var fileYn = this.ds_faq.getColumn(row, "FILEYN");

        		if(fileYn == 1){

        			var strParam = "ATT_IDT_NO=" + fileId + "ª";
        			dsParamSetArrowBlank(this.ds_search, strParam);

        			this.gfnTransaction("selectFileList",
        								"swiss/hp/com/selectFileList.do",
        								"dsSearch=ds_search",
        								"ds_fileList=dsResult",
        								"",
        								"fnCallback",
        								true);

        		}
        	}

        };

        // 트리변경이 생겼을때
        this.Div_gd_faq_list_cantreestatuschange = function(obj,e)
        {
        	/*
        	var num = obj.getSelectedRows();
        	trace("트리변경1 : " + num);
        	trace("트리변경 END");

        	obj.autoSizeRow(1, 1);
        	*/



        };

        // 선택 위치가 변경
        this.Div_gd_faq_list_oncellposchanged = function(obj,e)
        {

        	/*
        	obj.setCellProperty("body", 0, "autosizerow", "none");
        	obj.setCellProperty("body", 1, "autosizerow", "default");
        	obj.setCellProperty("body", 2, "autosizerow", "none");
        	obj.setCellProperty("body", 3, "autosizerow", "default");


        	*/

        	/*
        	obj.setCellProperty("body", 0, "autosizerow", "none");
        	obj.setCellProperty("body", 1, "autosizerow", "default");
        	obj.setCellProperty("body", 2, "autosizerow", "none");
        	obj.setCellProperty("body", 3, "autosizerow", "default");
        	obj.autoSizeRow(1);

        	*/

        	var numChildRow = this.Div.form.gd_faq_list.getTreeChildRow(this.ds_faq.rowposition, 0, false);
        	//obj.getSubCellProperty()
        };



        this.fnCallback = function(serviceId, errCD, errMSG){
        	if(errCD < 0){
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceId + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceId == "searchFaqCnt"){
        			this.totalRowCnt = this.ds_cnt.getColumn(0, "CNT");
        			this.paggingInit();
        			//this.searchFaqList(Number(this.Div.form.pagingWrap.form.div_pagging.form.fv_pageIdx+1));
        		}
        		if(serviceId == "selectFileList"){
        			this.faqFileDown();
        		}
        		if(serviceId == "searchFaqList"){

        		//	this.Div.form.gd_notice_list.set_height(500);
        			//this.ds_faq.set_

        			for (var i=0; i<this.ds_faq.rowcount; i++){
        				var chkOrg = this.ds_faq.getColumn(i,"SUBJECT");
        				var chkCnv = unescape(this.ds_faq.getColumn(i,"SUBJECT"));
        				if(this.ds_faq.getColumn(i, "SUBJECT") != null){
        					this.ds_faq.setColumn(i, "SUBJECT", chkCnv);
        					//alert("org=["+chkOrg+"], cnv=["+chkCnv+"]");
        				}

        				var chkOrg2 = this.ds_faq.getColumn(i,"ANSWER");
        				var chkCnv2 = unescape(this.ds_faq.getColumn(i,"ANSWER"));
        				if(this.ds_faq.getColumn(i, "ANSWER") != null){
        					this.ds_faq.setColumn(i, "ANSWER", chkCnv2);
        					//alert("org=["+chkOrg+"], cnv=["+chkCnv+"]");
        				}
        			}
        			this.gd_faq_list.clear();

        		}
        	}

        }

        // 조사년도
        this.selectYearList = function(){
        	this.gfnTransaction("selectYearList",
        						"swiss/hp/com/selectYearList.do",
        						"",
        						"ds_year=dsResult",
        						"",
        						"fnCallback",
        						false);
        	this.Div.form.sub_search.form.in_cb_year.set_index(0);
        	this.Div.form.sub_search.form.in_cb_kind.set_index(0);
        }


        //Div.form.pagingWrap.form.div_pagging


        // 전체 게시글수
        this.searchFaqCnt = function(){
        	var year = this.Div.form.sub_search.form.in_cb_year.value;
        	var kindcd = this.Div.form.sub_search.form.in_cb_kind.value;
        	var keyword = this.Div.form.sub_search.form.in_edit_keyword.value;
        	var workerid = this.Div.form.sub_search.form.in_chkBox_name.value;
        	var subject = this.Div.form.sub_search.form.in_chkBox_subject.value;
        	var answer = this.Div.form.sub_search.form.in_chkBox_answer.value;

        	var strParam = "SURVYEAR=" + year+ "ª";
        	strParam += "SURVKINDCD=" + kindcd+ "ª";
        	strParam += "KEYWORD=" + keyword+ "ª";

        	if(workerid){
        		strParam += "WORKERID=Y" + "ª";
        	}
        	if(subject){
        		strParam += "SUBJECT=Y" + "ª";
        	}
        	if(answer){
        		strParam += "ANSWER=Y" + "ª";
        	}
        	dsParamSetArrowBlank(this.ds_search, strParam);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "검색", strParam);  //FAQ
        	this.gfnTransaction("searchFaqCnt",
        						"swiss/hp/faq/searchFaqCnt.do",
        						"dsSearch=ds_search",
        						"ds_cnt=dsResult",
        						"",
        						"fnCallback",
        						true);
        }

        // 데이터 가져오기
        this.searchFaqList = function(sPage){
        	var year = this.Div.form.sub_search.form.in_cb_year.value;
        	var kindcd = this.Div.form.sub_search.form.in_cb_kind.value;
        	var keyword = this.Div.form.sub_search.form.in_edit_keyword.value;
        	var workerid = this.Div.form.sub_search.form.in_chkBox_name.value;
        	var subject = this.Div.form.sub_search.form.in_chkBox_subject.value;
        	var answer = this.Div.form.sub_search.form.in_chkBox_answer.value;

        	var start = (sPage - 1) * this.pageRowCnt + 1;
        	var end = sPage * this.pageRowCnt;
        	var strParam = "SURVYEAR=" + year+ "ª";
        	strParam += "SURVKINDCD=" + kindcd+ "ª";
        	strParam += "KEYWORD=" + keyword+ "ª";
        	strParam += "START=" + start + "ª";
        	strParam += "END=" + end + "ª";

        	if(workerid){
        		strParam += "WORKERID=Y" + "ª";
        	}
        	if(subject){
        		strParam += "SUBJECT=Y" + "ª";
        	}
        	if(answer){
        		strParam += "ANSWER=Y" + "ª";
        	}
        	dsParamSetArrowBlank(this.ds_search, strParam);

        	this.gfnTransaction("searchFaqList",
        						"swiss/hp/faq/searchFaqList.do",
        						"dsSearch=ds_search",
        						"ds_faq=dsResult",
        						"",
        						"fnCallback",
        						false);
        }


        // 페이지 초기화 함수
        this.paggingInit = function(){
        	this.Div.form.pagingWrap.form.div_pagging.form.initPages(this.totalRowCnt, this.pageRowCnt); // 전체DATA CNT, 페이지출력수
        	this.Div.form.pagingWrap.form.div_pagging.form.setPage(1);
        }


        // 페이징 완료후 처리
        this.setPageAfter = function (nPage){
        	this.searchFaqList(nPage);
        }

        //FAQ파일다운
        this.faqFileDown = function(){

        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "첨부파일 다운로드", "attIdtNo="+ this.ds_fileList.getColumn(0, "ATT_IDT_NO"));

        	this.ds_fileDownList.clearData();

        	var nRow = this.ds_fileDownList.addRow();
        	this.ds_fileDownList.setColumn(nRow, "SAVE_PATH", this.ds_fileList.getColumn(0, "SAVE_PATH"));
        	this.ds_fileDownList.setColumn(nRow, "SAVE_FILE_NAME", this.ds_fileList.getColumn(0, "SAVE_FILE_NAME"));
        	this.ds_fileDownList.setColumn(nRow, "REAL_FILE_NAME", this.ds_fileList.getColumn(0, "REAL_FILE_NAME"));

        	// 서버로 전송할 파일정보 셋팅
        	this.fileDownTrans.setPostData("fileInfo", this.ds_fileDownList.saveXML());

        	this.fileDownTrans.set_downloadfilename(this.ds_fileDownList.getColumn(0, "REAL_FILE_NAME"));

        	// 파일 다운로드 실행
        	this.fileDownTrans.download();
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.hp04m00_onload,this);
            this.addEventHandler("oninit",this.hp04m00_oninit,this);
            this.Div.form.sub_search.form.btn_search.addEventHandler("onclick",this.Div_sub_search_btn_search_onclick,this);
            this.Div.form.sub_search.form.in_edit_keyword.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.div_00.form.btn_add.addEventHandler("onclick",this.Div_pagingWrap_btn_add_onclick,this);
            this.Div.form.gd_faq_list.addEventHandler("oncelldblclick",this.Div_gd_faq_list_oncelldblclick,this);
            this.Div.form.gd_faq_list.addEventHandler("oncellclick",this.Div_gd_faq_list_oncellclick,this);
            this.Div.form.gd_faq_list.addEventHandler("cantreestatuschange",this.Div_gd_faq_list_cantreestatuschange,this);
            this.Div.form.gd_faq_list.addEventHandler("oncellposchanged",this.Div_gd_faq_list_oncellposchanged,this);
        };

        this.loadIncludeScript("hp04m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
