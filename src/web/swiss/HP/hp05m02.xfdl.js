(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("hp05m02");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("15px/normal \"SpoqaHanSans-Regular\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,1600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fileList", this);
            obj._setContents("<ColumnInfo><Column id=\"ATT_IDT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ATT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIERID\" type=\"STRING\" size=\"256\"/><Column id=\"MODDTHM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fileDownList", this);
            obj._setContents("<ColumnInfo><Column id=\"SAVE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_FILE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qna", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARDSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BBSNO\" type=\"STRING\" size=\"256\"/><Column id=\"BOARDTYPECD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"REFNO\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"ANSWER\" type=\"STRING\" size=\"256\"/><Column id=\"NOTICEYN\" type=\"STRING\" size=\"256\"/><Column id=\"SECRETYN\" type=\"STRING\" size=\"256\"/><Column id=\"HIT\" type=\"STRING\" size=\"256\"/><Column id=\"DELYN\" type=\"STRING\" size=\"256\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIERID\" type=\"STRING\" size=\"256\"/><Column id=\"MODDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"FILEID\" type=\"STRING\" size=\"256\"/><Column id=\"FILEYN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_reply", this);
            obj._setContents("<ColumnInfo><Column id=\"BBSNO\" type=\"STRING\" size=\"256\"/><Column id=\"ANSWER\" type=\"STRING\" size=\"4000\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fileDownTrans", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","1600",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","1200",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","1200",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new ImageViewer("imgQna","30","0","1200","160",null,null,null,null,null,null,this.Div.form);
            obj.set_image("url(\'theme::default/images/img_qnaTop.jpg\')");
            obj.set_border("0px none");
            obj.set_accessibilitylabel("FAQ 고등교육기관졸업자 취업통계조사 FAQ입니다.");
            this.Div.addChild(obj.name, obj);

            obj = new Div("rowGrid","30","imgQna:30","1200",null,null,"937",null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_cssclass("rowGrid");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Static("div_subTitle","0","0","200","50",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("0");
            obj.set_text("2020년 졸업생정보");
            obj.set_cssclass("boxTitleBlue");
            obj.set_textAlign("center");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("bak_subject","200","0","588","50",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("1");
            obj.set_cssclass("boxDesc");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","bak_subject:0","0","155","50",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("2");
            obj.set_text("유형");
            obj.set_cssclass("boxTitleBlue");
            obj.set_textAlign("center");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_00","Static00_01_01:0","0","257","50",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("3");
            obj.set_cssclass("boxDesc");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("label_subject","div_subTitle:20","11","570","28",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("4");
            obj.set_text("처리완료 (서유미)");
            obj.set_cssclass("fontC59");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("label_type","970","11","210","28",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("5");
            obj.set_text("취업담당자");
            obj.set_cssclass("fontC59");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new TextArea("in_txtEdit_answer","0","50","1200",null,null,"0",null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            obj.set_border("0px none,0px none,0px none,");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Div("div_fileArea","30","rowGrid:0","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_border("1px solid #a5a5a5,0px none");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_fileTitle","0","0","200","40",null,null,null,null,null,null,this.Div.form.div_fileArea.form);
            obj.set_taborder("0");
            obj.set_text("첨부파일");
            obj.set_cssclass("noticeTit");
            this.Div.form.div_fileArea.addChild(obj.name, obj);

            obj = new Grid("gd_fileList","div_fileTitle:0","0",null,null,"0","0",null,null,null,null,this.Div.form.div_fileArea.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_fileList");
            obj.set_nodatatext("첨부파일이 없습니다.");
            obj.set_readonly("true");
            obj.set_border("0px none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"645\"/><Column size=\"250\"/><Column size=\"105\"/></Columns><Rows><Row size=\"40\"/></Rows><Band id=\"body\"><Cell text=\"bind:REAL_FILE_NAME\" border=\"0px none\"/><Cell col=\"1\" text=\"bind:FILE_SIZE\" border=\"0px none\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"다운로드\" border=\"0px none\" cssclass=\"cellBtn\"/></Band></Format></Formats>");
            this.Div.form.div_fileArea.addChild(obj.name, obj);

            obj = new Div("div_writeArea","30","div_fileArea:0","1200","51",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.Div.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","200","50",null,null,null,null,null,null,this.Div.form.div_writeArea.form);
            obj.set_taborder("0");
            obj.set_text("작성자");
            obj.set_cssclass("noticeTit");
            this.Div.form.div_writeArea.addChild(obj.name, obj);

            obj = new Static("label_workerNm","Div00:20","0","570","50",null,null,null,null,null,null,this.Div.form.div_writeArea.form);
            obj.set_taborder("1");
            obj.set_text("취업통계팀 홍길동");
            obj.set_cssclass("noticeDesc");
            this.Div.form.div_writeArea.addChild(obj.name, obj);

            obj = new Div("Div00_00","788","0","150","50",null,null,null,null,null,null,this.Div.form.div_writeArea.form);
            obj.set_taborder("2");
            obj.set_text("작성일시");
            obj.set_cssclass("noticeTit");
            obj.set_border("0px none,1px solid #a5a5a5");
            this.Div.form.div_writeArea.addChild(obj.name, obj);

            obj = new Static("label_workDthm","Div00_00:20","0","222","50",null,null,null,null,null,null,this.Div.form.div_writeArea.form);
            obj.set_taborder("3");
            obj.set_text("2020-07-01 14:00");
            obj.set_cssclass("noticeDesc");
            this.Div.form.div_writeArea.addChild(obj.name, obj);

            obj = new Div("div_btnArea","903","div_writeArea:10",null,"48","30",null,null,null,null,null,this.Div.form);
            obj.set_taborder("9");
            obj.set_text("div_00");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_del","207","1",null,"30","0",null,null,null,null,null,this.Div.form.div_btnArea.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_sty01");
            this.Div.form.div_btnArea.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"1","120","30","btn_del:10",null,null,null,null,null,this.Div.form.div_btnArea.form);
            obj.set_taborder("0");
            obj.set_text("수정");
            obj.set_cssclass("btn_sty01");
            this.Div.form.div_btnArea.addChild(obj.name, obj);

            obj = new Div("div_reply","30","div_btnArea:20","1200","346",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_cssclass("divForm");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new TextArea("in_edit_reply","30","38","1130","116",null,null,null,null,null,null,this.Div.form.div_reply.form);
            obj.set_taborder("0");
            obj.set_displaynulltext("최대 5줄까지 입력됩니다.");
            obj.set_enable("false");
            this.Div.form.div_reply.addChild(obj.name, obj);

            obj = new Button("btn_replyAdd","1040","163","120","30",null,null,null,null,null,null,this.Div.form.div_reply.form);
            obj.set_taborder("1");
            obj.set_text("등록");
            obj.set_visible("false");
            this.Div.form.div_reply.addChild(obj.name, obj);

            obj = new Div("div_replyListArea","30","in_edit_reply:80","1150","10",null,null,null,null,null,null,this.Div.form.div_reply.form);
            obj.set_taborder("2");
            obj.set_visible("true");
            this.Div.form.div_reply.addChild(obj.name, obj);

            obj = new Button("btn_list",null,"div_writeArea:10","120","30","570",null,null,null,null,null,this.Div.form);
            obj.set_taborder("9");
            obj.set_text("목록");
            obj.set_cssclass("btn_sty05");
            this.Div.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,1600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div.form.div_writeArea.form.label_workerNm","text","ds_qna","WORKERID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div.form.div_writeArea.form.label_workDthm","text","ds_qna","WORKDTHM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div.form.rowGrid.form.label_subject","text","ds_qna","SUBJECT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div.form.rowGrid.form.label_type","text","ds_qna","SURVKINDNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div.form.rowGrid.form.in_txtEdit_answer","value","ds_qna","ANSWER");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("hp05m02.xfdl","CM::common.xjs");
        this.registerScript("hp05m02.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;

        this.bbsNo;
        this.fv_USERID = "";
        this.fv_GRP = "";

        this.fv_MENUNM = "알림소식>Q&A>상세";

        this.hp05m02_oninit = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	var grp = objApp.gds_login_info.getColumn(0, "USERGRPTYPE");
        	this.fv_GRP = grp;
        	if(grp == "2" || grp == "8" || grp == "1"){
        		this.Div.form.div_btnArea.set_visible(true);
        		this.Div.form.div_reply.form.in_edit_reply.set_enable(true);
        		this.Div.form.div_reply.form.btn_replyAdd.set_visible(true);
        	}

        	//alert("ORGID="+objApp.gds_login_info.getColumn(0, "ORGID")+",USERID="+objApp.gds_login_info.getColumn(0, "USERID"));
        	this.fv_USERID=objApp.gds_login_info.getColumn(0, "USERID");

        	this.bbsNo =  nexacro.getApplication().gds_rtn_result.getColumn(0, "BBSNO");
        	if(this.bbsNo == null){
        		this.alert("올바른 접근이 아닙니다.");
        		//return;
        	}
        	this.selectQnaView();
        };


        // 목록
        this.Div_div_btnArea_btn_list_onclick = function(obj,e)
        {
        	this.fn_goPage("HP::hp05m00.xfdl");
        };
        // 수정
        this.Div_div_btnArea_btn_save_onclick = function(obj,e)
        {
        	var strParam = "BBSNO=" + this.bbsNo + "ª";
        	dsParamSetArrowBlank(nexacro.getApplication().gds_rtn_result, strParam);
        	this.fn_goPage("HP::hp05m01.xfdl");
        };
        // 삭제
        this.Div_div_btnArea_btn_del_onclick = function(obj,e)
        {
        	if(this.confirm("게시글을 정말 삭제 하시겠습니까?")){
        		var strParam = "BBSNO=" + this.bbsNo + "ª";
        		dsParamSetArrowBlank(this.ds_search, strParam);

        		this.setAccessLog("", "AG", this.fv_MENUNM, "삭제", strParam);  //접속기록
        		this.gfnTransaction("deleteQna",
        						"swiss/hp/qna/deleteQna.do",
        						"dsSearch=ds_search",
        						"",
        						"",
        						"fnCallback",
        						true);
        	}
        };

        // 답변등록
        this.Div_div_reply_btn_replyAdd_onclick = function(obj,e)
        {
        	this.insertQnaReply();
        };


        // 파일 다운로드
        this.Div_div_fileArea_gd_fileList_oncellclick = function(obj,e)
        {

        	var cellPos = this.Div.form.div_fileArea.form.gd_fileList.getCellPos();

        	var _fileName = this.ds_fileList.getColumn(e.row, "REAL_FILE_NAME");
        	var _realName = this.ds_fileList.getColumn(e.row, "SAVE_FILE_NAME");
        	var _lastDaot = _fileName.lastIndexOf('.');

        	var ext = _fileName.substring(_lastDaot,_fileName.length).toLowerCase();

        	if(cellPos == '2'){
        		this.ds_fileDownList.clearData();

        		var nRow = this.ds_fileDownList.addRow();
        		this.ds_fileDownList.setColumn(nRow, "SAVE_PATH", this.ds_fileList.getColumn(e.row, "SAVE_PATH"));
        		this.ds_fileDownList.setColumn(nRow, "SAVE_FILE_NAME", this.ds_fileList.getColumn(e.row, "SAVE_FILE_NAME"));
        		this.ds_fileDownList.setColumn(nRow, "REAL_FILE_NAME", this.ds_fileList.getColumn(e.row, "REAL_FILE_NAME"));

        		// 서버로 전송할 파일정보 셋팅
        		this.fileDownTrans.setPostData("fileInfo", this.ds_fileDownList.saveXML());

        		this.fileDownTrans.set_downloadfilename(this.ds_fileDownList.getColumn(0, "REAL_FILE_NAME"));

        		// 파일 다운로드 실행
        		this.fileDownTrans.download();

        	} else {
        		if(ext == ".hwp" || ext == ".doc" || ext == ".docx" || ext == ".ppt" || ext == ".pptx" || ext == ".xls" || ext == ".xlsx" || ext == ".pdf" || ext == ".txt" || ext == ".png" || ext == ".jpg" || ext == ".jpeg" || ext == ".gif" || ext == ".tif" || ext == ".tiff"){

        			var objChildFrame = new ChildFrame();
        			objChildFrame.init("pop_docView"
        							  , 0
        							  , 0
        							  , 1150
        							  , 770
        							  , null
        							  , null
        							  , "CM::CMDocViewer.xfdl");
        			objChildFrame.set_showtitlebar(false);
        			objChildFrame.set_dragmovetype("all");
        			objChildFrame.set_openalign("center middle");
        			objChildFrame.set_autosize("false");
        			objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)");
        			var objParam = {
        				param1 : _realName
        			};
        			objChildFrame.showModal(this.getOwnerFrame()
        								  , objParam
        								  , this
        								  , "fn_popupCallback");
        		} else {
        			this.alert("미리보기가 지원되지 않는 형식입니다.");
        		}


        	}
        };

        this.fnCallback = function(serviceId, errCD, errMSG){
        	if(errCD < 0){
        		this.setAccessLog("", "AG", this.fv_MENUNM, serviceId + " : Fail", "");  //접속기록(실패시)
        	} else {
        		if(serviceId == "selectQnaView"){
        			var objApp = nexacro.getApplication();
        			var userid = objApp.gds_login_info.getColumn(0, "USERID");
        			var writer = this.ds_qna.getColumn(0, "WORKERID");

        			if(userid == writer){
        				this.Div.form.div_btnArea.set_visible(true);
        				this.Div.form.div_btnArea.form.btn_del.set_visible(false);
        				this.Div.form.div_btnArea.form.btn_save.set_right(0);
        			}

        			var nAnswer = this.ds_qna.getColumn(0,"ANSWER");
        			var n2Answer = unescape(nAnswer);
        			this.ds_qna.setColumn(0,"ANSWER",n2Answer);


        			this.Div.form.rowGrid.form.div_subTitle.set_text(this.ds_qna.getColumn(0,"SURVYEAR") + "년 " + this.ds_qna.getColumn(0,"SURVKINDNM"));
        			this.Div.form.div_writeArea.form.label_workerNm.set_text(this.ds_qna.getColumn(0,"SCHNM") + " " + this.ds_qna.getColumn(0,"WORKERNM"))

        			this.fileDownTrans.setPostData("BASE_DIR", "");
        			this.fileDownTrans.set_url(nexacro.getEnvironment().services["svcBaseUrl"].url + "swiss/hp/com/downloadFile.do");
        			this.selectFileList();

        			this.replyListCreate();
        		} else if(serviceId == "selectFileList"){
        			var rowCnt = this.ds_fileList.getRowCount();
        			if(rowCnt > 1){
        				var plusHeightCnt = (rowCnt-1) * 40;
        				// this.div_AreaMain.form.div_AreaContent.set_height(this.div_AreaMain.form.div_AreaContent.getOffsetHeight() + plusHeightCnt);
        				this.Div.form.div_fileArea.form.div_fileTitle.set_height(this.Div.form.div_fileArea.form.div_fileTitle.getOffsetHeight() + plusHeightCnt);
        				this.Div.form.div_fileArea.set_height(this.Div.form.div_fileArea.getOffsetHeight() + plusHeightCnt);
        				this.Div.form.resetScroll();
        			}
        		} else if( serviceId == "deleteQna"){
        			this.alert("삭제 되었습니다.");
        			this.fn_goPage("HP::hp05m00.xfdl");

        		} else if( serviceId == "insertQnaReply"){
        			this.alert("답변이 작성 되었습니다.");
        			var strParam = "BBSNO=" + this.bbsNo + "ª";
        			dsParamSetArrowBlank(nexacro.getApplication().gds_rtn_result, strParam);
        			this.fn_goPage("HP::hp05m00.xfdl");
        		}
        	}
        }

        this.fn_popupCallback = function(strPopupID, strReturn){
        	if(strPopupID == "pop_docView"){
        	}
        }



        this.selectQnaView = function(){
        	var strParam = "BBSNO=" + this.bbsNo + "ª";

        	dsParamSetArrowBlank(this.ds_search, strParam);

        	this.gfnTransaction("selectQnaView",
        						"swiss/hp/qna/selectQnaView.do",
        						"dsSearch=ds_search",
        						"ds_qna=dsResult ds_reply=dsResultReply",
        						"",
        						"fnCallback",
        						true);
        }

        this.selectFileList = function(){
        	//this.transaction("selectFileList", this.saveUrl + "fileDownload_servlet_list_XML.jsp", "", "dsDownload=dsList", "filefolder="+this.folderName, "callback_transaction", "false", "0")

        	var fileId = this.ds_qna.getColumn(0, "FILEID")
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



        /*
        // 답변목록
        this.selectQnaReplyList = function(){
        	var strParam = "BBSNO=" + this.bbsNo + "ª";
        	dsParamSetArrowBlank(this.ds_search, strParam);
        	this.gfnTransaction("selectQnaReplyList",
        						"swiss/hp/qna/selectQnaReplyList.do",
        						"dsSearch=ds_search",
        						"ds_reply=dsResult",
        						"",
        						"fnCallback",
        						true);
        }
        */


        // 답변 작성
        this.insertQnaReply = function(){
        	var objApp = nexacro.getApplication();
        	var reply = this.Div.form.div_reply.form.in_edit_reply.value;
        	var WORKERNM = objApp.gds_login_info.getColumn(0, "USERNM");

        	if(reply.length > 2000){
        		this.alert("최대 답변 길이는 2000자 입니다.");
        		return;
        	}
        	var strParam = "REFNO=" + this.bbsNo + "ª";	// 답글번호
        	strParam 	+= 'ANSWER=' 	+ reply + 'ª';
        	strParam 	+= 'WORKERNM=' 	+ WORKERNM + 'ª';

        	dsParamSetArrowBlank(this.ds_search, strParam);
        	this.setAccessLog("", "AG", this.fv_MENUNM, "등록(댓글)", strParam);  //접속기록
        	this.gfnTransaction("insertQnaReply",
        						"swiss/hp/qna/insertQnaReply.do",
        						"dsSearch=ds_search",
        						"",
        						"",
        						"fnCallback",
        						true);
        }


        this.replyListCreate = function(){

        	var cnt = this.ds_reply.getRowCount();
        	//alert("rowcnt="+cnt);

        	if(cnt > 0){

        		for(var i=0; cnt > i; i++){
        			var deptNm = this.ds_reply.getColumn(i, "DEPTNM") != null ? this.ds_reply.getColumn(i, "DEPTNM") : '';
        			var replyWriter = deptNm + " " + this.ds_reply.getColumn(i, "WORKERNM");
        			var replyTxt = this.ds_reply.getColumn(i, "ANSWER");
        			var replyDate = this.ds_reply.getColumn(i, "WORKDTHM");
        			var workerID = this.ds_reply.getColumn(i, "WORKERID");
        			//alert(workerID);

        			var chkRow = 5;
        			chkRow = replyTxt.split("\n").length;


        			var chkHeight = 0;
        			chkHeight = 10+chkRow*22;

        			var replyHeight = 10+chkRow*22+150;

        			if(i==0){
        				var plusH=0;
        				var replyHeightOld = 0;
        			}else{
        				plusH = plusH + replyHeightOld;
        			}
        			//var plusH = i * replyHeight;

        			//alert("i="+i+",chkRow="+chkRow+", chkHeight="+chkHeight+", replyHeight="+replyHeight+", replyHeightOld="+replyHeightOld+", plusH="+plusH);

        			var objbar = new Static();
        			objbar.init("label_reply_bar" + i, 0, plusH, 1130, 1);		// id, 왼쪽 , 탑, 너비, 높이
        			this.Div.form.div_reply.form.div_replyListArea.form.addChild("label_reply_bar" + i,objbar);
        			objbar.set_background("#d9d9d9");
        			//objbar.set_background("red");
        			objbar.show();

        			var objWriter = new Static();
        			objWriter.init("label_reply_writer" + i, 0, "label_reply_bar" + i + ":5", 500, 40);		// id, 왼쪽 , 탑, 너비, 높이
        			this.Div.form.div_reply.form.div_replyListArea.form.addChild("label_reply_writer" + i,objWriter);
        			objWriter.set_color("#0054d6");
        			//objWriter.set_background("BROWN");
        			objWriter.set_text(replyWriter);
        			objWriter.show();

        			var objTxt = new Static();

        			//alert(replyTxt+",rowcnt="+chkRow+", real rowcnt="+chkRow2);

        			//objTxt.init("textarea_reply_text" + i, 0, "label_reply_writer" + i + ":5", 1130, chkHeight);
        			objTxt.init("textarea_reply_text" + i, 0, "label_reply_writer" + i + ":5", 1130, chkHeight);

        			//objTxt.set_minheight(70);
        			//objTxt.set_maxheight(300);

        			//alert(replyTxt);
        			this.Div.form.div_reply.form.div_replyListArea.form.addChild("textarea_reply_text"+ i, objTxt);
        			//objTxt.set_color("#d9d9d9");
        			//objTxt.set_background("blue");
        			objTxt.set_text(replyTxt);
        			//objTxt.set_readonly("true");
        			objTxt.show();

        			/*
        			var objTxt = new TextArea();
        			objTxt.init("textarea_reply_text" + i, 0, "label_reply_writer" + i + ":5", 1130, 100);
        			this.Div.form.div_reply.form.div_replyListArea.form.addChild("textarea_reply_text" + i,objTxt);
        			objTxt.set_color("#d9d9d9");
        			objTxt.set_value(replyTxt);
        			objTxt.set_readonly("true");
        			objTxt.show();
        			*/

        			var objDate = new Static();
        			objDate.init("textarea_reply_date" + i, 0, "textarea_reply_text" + i + ":5", 300, 40);
        			this.Div.form.div_reply.form.div_replyListArea.form.addChild("textarea_reply_date" + i,objDate);
        			objDate.set_color("#9e9e9e");
        			objDate.set_text(replyDate);
        			objDate.show();

        			//alert("workerid="+workerID+", userid="+this.fv_USERID);

        			var objBtnDel = new Button();
        			objBtnDel.init("btn_reply_del" + i, 0, "textarea_reply_date" + i + ":5", 70, 30);
        			this.Div.form.div_reply.form.div_replyListArea.form.addChild("btn_reply_del" + i,objBtnDel);
        			objBtnDel.set_cssclass("btn_sty03");
        			objBtnDel.set_text("삭제");
        			objBtnDel.addEventHandler("onclick", this.Button_replyAdd_onclick, this);
        			if(workerID==this.fv_USERID || (this.fv_GRP == "2" || this.fv_GRP == "8") ){
        				objBtnDel.show();
        			}

        			replyHeightOld = replyHeight;
        		}
        	}

        	this.Div.form.div_reply.set_height(this.Div.form.div_reply.getOffsetHeight() + (cnt * replyHeight));
        	this.Div.form.div_reply.form.div_replyListArea.set_height(cnt * replyHeight);
        	this.Div.form.resetScroll();
        }

        this.Button_replyAdd_onclick = function(obj,e){
        	var idx = obj.name.replace("btn_reply_del", '');
        	var replyNum = this.ds_reply.getColumn(idx, "BBSNO");

        	if(this.confirm("답글을 정말 삭제 하시겠습니까?")){
        		var strParam = "BBSNO=" + replyNum + "ª";
        		dsParamSetArrowBlank(this.ds_search, strParam);

        		this.setAccessLog("", "AG", this.fv_MENUNM, "삭제(댓글)", strParam);  //접속기록
        		this.gfnTransaction("deleteQna",
        						"swiss/hp/qna/deleteQna.do",
        						"dsSearch=ds_search",
        						"",
        						"",
        						"fnCallback",
        						true);
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.hp05m02_oninit,this);
            this.Div.form.rowGrid.form.in_txtEdit_answer.addEventHandler("onchanged",this.Div_rowGrid_in_txtEdit_answer_onchanged,this);
            this.Div.form.div_fileArea.form.gd_fileList.addEventHandler("oncellclick",this.Div_div_fileArea_gd_fileList_oncellclick,this);
            this.Div.form.div_btnArea.form.btn_del.addEventHandler("onclick",this.Div_div_btnArea_btn_del_onclick,this);
            this.Div.form.div_btnArea.form.btn_save.addEventHandler("onclick",this.Div_div_btnArea_btn_save_onclick,this);
            this.Div.form.div_reply.form.btn_replyAdd.addEventHandler("onclick",this.Div_div_reply_btn_replyAdd_onclick,this);
            this.Div.form.btn_list.addEventHandler("onclick",this.Div_div_btnArea_btn_list_onclick,this);
        };

        this.loadIncludeScript("hp05m02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
