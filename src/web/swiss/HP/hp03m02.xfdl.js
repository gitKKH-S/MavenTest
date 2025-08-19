(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("hp03m02");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("15px/normal \"SpoqaHanSans-Regular\"");
            this.set_background("#f9f9f9");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,1100);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pds", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARDSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BBSNO\" type=\"STRING\" size=\"256\"/><Column id=\"BOARDTYPECD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"REFNO\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"NOTICEYN\" type=\"STRING\" size=\"256\"/><Column id=\"SECRETYN\" type=\"STRING\" size=\"256\"/><Column id=\"HIT\" type=\"STRING\" size=\"256\"/><Column id=\"DELYN\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIERID\" type=\"STRING\" size=\"256\"/><Column id=\"MODDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"FILEID\" type=\"STRING\" size=\"256\"/><Column id=\"FILEYN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("");
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
            obj = new Div("div_AreaMain","0","0","1260","1100",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","1100",null,null,null,null,null,null,this.div_AreaMain.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_text("");
            this.div_AreaMain.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","1100",null,null,null,null,null,null,this.div_AreaMain.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.div_AreaMain.addChild(obj.name, obj);

            obj = new ImageViewer("imgreFer","30","0","1200","160",null,null,null,null,null,null,this.div_AreaMain.form);
            obj.set_image("url(\'theme::default/images/img_referTop.jpg\')");
            obj.set_border("0px none");
            obj.set_accessibilitylabel("자료실 고등교육기관졸업자 취업통계조사 자료실입니다.");
            obj.set_taborder("4");
            this.div_AreaMain.addChild(obj.name, obj);

            obj = new Div("div_AreaContent","31","imgreFer:30","1200","620",null,null,null,null,null,null,this.div_AreaMain.form);
            obj.set_taborder("2");
            obj.set_cssclass("rowGrid");
            obj.set_text("");
            this.div_AreaMain.addChild(obj.name, obj);

            obj = new Div("div_areaTitle","0","0","1196","51",null,null,null,null,null,null,this.div_AreaMain.form.div_AreaContent.form);
            obj.set_taborder("0");
            obj.set_border("0px none,0px none,1px solid #a5a5a5");
            obj.set_text("");
            obj.set_background("#ffffff");
            this.div_AreaMain.form.div_AreaContent.addChild(obj.name, obj);

            obj = new Div("div_subTitle","0","0","200","50",null,null,null,null,null,null,this.div_AreaMain.form.div_AreaContent.form.div_areaTitle.form);
            obj.set_taborder("0");
            obj.set_text("2020년 졸업생 정보");
            obj.set_cssclass("noticeTit");
            this.div_AreaMain.form.div_AreaContent.form.div_areaTitle.addChild(obj.name, obj);

            obj = new Static("label_subject","238","0","701","50",null,null,null,null,null,null,this.div_AreaMain.form.div_AreaContent.form.div_areaTitle.form);
            obj.set_taborder("1");
            obj.set_text("[취업통계조사] 검증결과 확인 및 소명 정정 기간 안내");
            obj.set_cssclass("noticeDesc");
            this.div_AreaMain.form.div_AreaContent.form.div_areaTitle.addChild(obj.name, obj);

            obj = new Div("div_areaText","0","div_areaTitle:0",null,"437","0",null,null,null,null,null,this.div_AreaMain.form.div_AreaContent.form);
            obj.set_taborder("3");
            obj.set_text("div_00");
            this.div_AreaMain.form.div_AreaContent.addChild(obj.name, obj);

            obj = new WebBrowser("webBrower_text","-1","0",null,"437","0",null,null,null,null,null,this.div_AreaMain.form.div_AreaContent.form.div_areaText.form);
            obj.set_taborder("0");
            this.div_AreaMain.form.div_AreaContent.form.div_areaText.addChild(obj.name, obj);

            obj = new Div("div_fileArea","0","div_areaText:0","1198","42",null,null,null,null,null,null,this.div_AreaMain.form.div_AreaContent.form);
            obj.set_taborder("1");
            obj.set_border("1px solid #a5a5a5,0px none");
            obj.set_text("");
            this.div_AreaMain.form.div_AreaContent.addChild(obj.name, obj);

            obj = new Div("div_fileTitle","0","0","200","40",null,null,null,null,null,null,this.div_AreaMain.form.div_AreaContent.form.div_fileArea.form);
            obj.set_taborder("0");
            obj.set_text("첨부파일");
            obj.set_cssclass("noticeTit");
            this.div_AreaMain.form.div_AreaContent.form.div_fileArea.addChild(obj.name, obj);

            obj = new Grid("gd_fileList","div_fileTitle:0","0",null,null,"0","0",null,null,null,null,this.div_AreaMain.form.div_AreaContent.form.div_fileArea.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_fileList");
            obj.set_nodatatext("첨부파일이 없습니다.");
            obj.set_readonly("true");
            obj.set_border("0px none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"645\"/><Column size=\"250\"/><Column size=\"103\"/></Columns><Rows><Row size=\"40\"/></Rows><Band id=\"body\"><Cell text=\"bind:REAL_FILE_NAME\" border=\"0px none\"/><Cell col=\"1\" text=\"bind:FILE_SIZE\" border=\"0px none\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"다운로드\" border=\"0px none\" cssclass=\"cellBtn\"/></Band></Format></Formats>");
            this.div_AreaMain.form.div_AreaContent.form.div_fileArea.addChild(obj.name, obj);

            obj = new Div("div_writeArea","0","div_fileArea:0","1198","51",null,null,null,null,null,null,this.div_AreaMain.form.div_AreaContent.form);
            obj.set_taborder("2");
            obj.set_text("");
            this.div_AreaMain.form.div_AreaContent.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","0","200","50",null,null,null,null,null,null,this.div_AreaMain.form.div_AreaContent.form.div_writeArea.form);
            obj.set_taborder("0");
            obj.set_text("작성자");
            obj.set_cssclass("boxTitleBlue");
            obj.set_textAlign("center");
            this.div_AreaMain.form.div_AreaContent.form.div_writeArea.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00","680","0","155","50",null,null,null,null,null,null,this.div_AreaMain.form.div_AreaContent.form.div_writeArea.form);
            obj.set_taborder("1");
            obj.set_text("작성일시");
            obj.set_cssclass("boxTitleBlue");
            obj.set_textAlign("center");
            this.div_AreaMain.form.div_AreaContent.form.div_writeArea.addChild(obj.name, obj);

            obj = new Static("Static00_02_02","Static00_00_00:0","0","482","50",null,null,null,null,null,null,this.div_AreaMain.form.div_AreaContent.form.div_writeArea.form);
            obj.set_taborder("2");
            obj.set_cssclass("boxDesc");
            this.div_AreaMain.form.div_AreaContent.form.div_writeArea.addChild(obj.name, obj);

            obj = new Static("label_workerNm","215","4","391","42",null,null,null,null,null,null,this.div_AreaMain.form.div_AreaContent.form.div_writeArea.form);
            obj.set_taborder("3");
            obj.set_text("취업통계팀 홍길동");
            obj.set_cssclass("noticeDesc");
            this.div_AreaMain.form.div_AreaContent.form.div_writeArea.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_00_00","Static00_01_01_00:0","0",null,"50","0",null,null,null,null,null,this.div_AreaMain.form.div_AreaContent.form.div_writeArea.form);
            obj.set_taborder("4");
            obj.set_cssclass("boxDesc");
            obj.set_text("2020-07-01 14:00");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.div_AreaMain.form.div_AreaContent.form.div_writeArea.addChild(obj.name, obj);

            obj = new Div("div_areaBtn2","920","div_AreaContent:0",null,"53","30",null,null,null,null,null,this.div_AreaMain.form);
            obj.set_taborder("3");
            obj.set_visible("false");
            this.div_AreaMain.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"0","120","30","0",null,null,null,null,null,this.div_AreaMain.form.div_areaBtn2.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            this.div_AreaMain.form.div_areaBtn2.addChild(obj.name, obj);

            obj = new Button("btn_mod",null,"0","120","30","btn_del:10",null,null,null,null,null,this.div_AreaMain.form.div_areaBtn2.form);
            obj.set_taborder("0");
            obj.set_text("수정");
            this.div_AreaMain.form.div_areaBtn2.addChild(obj.name, obj);

            obj = new Div("div_areaBtn","470","div_AreaContent:0",null,"53","470",null,null,null,null,null,this.div_AreaMain.form);
            obj.set_taborder("5");
            obj.set_text("div_00");
            obj.set_visible("true");
            this.div_AreaMain.addChild(obj.name, obj);

            obj = new Button("btn_list","100","0","120","30",null,null,null,null,null,null,this.div_AreaMain.form.div_areaBtn.form);
            obj.set_taborder("0");
            obj.set_text("목록");
            obj.set_cssclass("btn_sty05");
            this.div_AreaMain.form.div_areaBtn.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,1100,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_AreaMain.form.div_AreaContent.form.div_areaTitle.form.label_subject","text","ds_pds","SUBJECT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_AreaMain.form.div_AreaContent.form.div_writeArea.form.label_workerNm","text","ds_pds","WORKERID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_AreaMain.form.div_AreaContent.form.div_writeArea.form.Static00_02_02_00_00","text","ds_pds","WORKDTHM");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("hp03m02.xfdl","CM::common.xjs");
        this.registerScript("hp03m02.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;
        this.bbsNo;
        // this.onloadChk = false;

        //include "HP::lib_filetransupdown.xjs";

        // 파일목록관련
        //include "HP::lib_fileCrud.xjs";
        //this.saveUrl = "http://localhost:8080/service0716/";
        this.fv_MENUNM = "알림소식>자료실>상세";
        this.fv_SURVSEQ="";
        this.fv_SURVKINDCD="AG";
        var objApp = nexacro.getApplication();
        this.hp03m02_oninit = function(obj,e)
        {
        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='AG'",0);
        	this.fv_SURVSEQ = objApp.gds_login_info.getColumn(idx, "SURVSEQ");
        	var grp = objApp.gds_login_info.getColumn(0, "USERGRPTYPE");
        	if(grp == "2"){
        		this.div_AreaMain.form.div_areaBtn2.set_visible(true);
        	}


        	this.bbsNo =  nexacro.getApplication().gds_rtn_result.getColumn(0, "BBSNO");
        	if(this.bbsNo == null){
        		this.alert("올바른 접근이 아닙니다.");
        		//return;
        	}
        	this.selectPdsView();
        };

        // 목록
        this.Div_btn_list_onclick = function(obj,e)
        {
        	// this.fn_goPage("HP::hp01m00.xfdl");
        	this.fn_goPage("HP::hp03m00.xfdl");
        };

        // 수정
        this.Div_btn_mod_onclick = function(obj,e)
        {
        	var strParam = "BBSNO=" + this.bbsNo + "ª";
        	dsParamSetArrowBlank(nexacro.getApplication().gds_rtn_result, strParam);

        	this.fn_goPage("HP::hp03m01.xfdl");
        };

        // 삭제
        this.Div_btn_del_onclick = function(obj,e)
        {
        	if(confirm("내용을 삭제하시겠습니까?")){
        		var strParam = 'BBSNO=' + this.bbsNo + 'ª';

        		dsParamSetArrowBlank(this.ds_search, strParam);
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "삭제", strParam);  //자료실 삭제
        		this.gfnTransaction("deletePds",
        							"swiss/hp/pds/deletePds.do",
        							"dsSearch=ds_search",
        							"",
        							"",
        							"fnCallback",
        							true);
        	}
        };

        // 파일 다운로드
        this.div_AreaMain_div_AreaContent_div_fileArea_gd_fileList_oncellclick = function(obj,e){

        	var cellPos = this.div_AreaMain.form.div_AreaContent.form.div_fileArea.form.gd_fileList.getCellPos();


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
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "첨부파일 다운로드", this.ds_fileDownList.getColumn(0, "REAL_FILE_NAME"));  //파일다운로드
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

        this.webBrower_text_onloadcompleted = function(obj,e)
        {
        	obj.callMethod("setContent", this.ds_pds.getColumn(0, "TEXT"));


        	var originHeight = this.div_AreaMain.form.div_AreaContent.form.div_areaText.form.webBrower_text.getOffsetHeight();
        	var viewHeight = obj.callMethod("getHeight");
        	obj.set_height(viewHeight);

        	this.div_AreaMain.form.resetScroll();
        };

        // 상세
        this.selectPdsView = function(){
        	var strParam = "BBSNO=" + this.bbsNo + "ª";

        	dsParamSetArrowBlank(this.ds_search, strParam);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "상세정보", strParam);  //자료실 상세조회
        	this.gfnTransaction("selectPdsView",
        						"swiss/hp/pds/selectPdsView.do",
        						"dsSearch=ds_search",
        						"ds_pds=dsResult",
        						"",
        						"fnCallback",
        						true);
        }

        this.selectFileList = function(){
        	//this.transaction("selectFileList", this.saveUrl + "fileDownload_servlet_list_XML.jsp", "", "dsDownload=dsList", "filefolder="+this.folderName, "callback_transaction", "false", "0")

        	var fileId = this.ds_pds.getColumn(0, "FILEID")
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

        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceID == "selectPdsView"){
        			var objApp = nexacro.getApplication();
        			var userid = objApp.gds_login_info.getColumn(0, "USERID");
        			var writer = this.ds_pds.getColumn(0, "WORKERID");

        			if(userid == writer){
        				this.div_AreaMain.form.div_areaBtn2.set_visible(true);
        			}

        			this.div_AreaMain.form.div_AreaContent.form.div_areaTitle.form.div_subTitle.set_text(this.ds_pds.getColumn(0,"SURVYEAR") + "년 " + this.ds_pds.getColumn(0,"SURVKINDNM"));
        			this.div_AreaMain.form.div_AreaContent.form.div_writeArea.form.label_workerNm.set_text(this.ds_pds.getColumn(0,"DEPTNM") + " " + this.ds_pds.getColumn(0,"WORKERNM"))

        			var url = nexacro.getEnvironment().services["svcBaseUrl"].url + "ui/file/richtexteditor/html/preview.html";
        			this.div_AreaMain.form.div_AreaContent.form.div_areaText.form.webBrower_text.set_url(url);

        			this.fileDownTrans.setPostData("BASE_DIR", "");
        			this.fileDownTrans.set_url(nexacro.getEnvironment().services["svcBaseUrl"].url + "swiss/hp/com/downloadFile.do");
        			this.selectFileList();
        		}
        		if(serviceID == "selectFileList"){
        			var rowCnt = this.ds_fileList.getRowCount();
        			if(rowCnt > 1){
        				var plusHeightCnt = (rowCnt-1) * 40;
        				this.div_AreaMain.form.div_AreaContent.set_height(this.div_AreaMain.form.div_AreaContent.getOffsetHeight() + plusHeightCnt);
        				this.div_AreaMain.form.div_AreaContent.form.div_fileArea.form.div_fileTitle.set_height(this.div_AreaMain.form.div_AreaContent.form.div_fileArea.form.div_fileTitle.getOffsetHeight() + plusHeightCnt);
        				this.div_AreaMain.form.div_AreaContent.form.div_fileArea.set_height(this.div_AreaMain.form.div_AreaContent.form.div_fileArea.getOffsetHeight() + plusHeightCnt);


        				// 작성자정보 위치 변경
        				this.div_AreaMain.form.div_AreaContent.form.div_writeArea.set_height(this.div_AreaMain.form.div_AreaContent.form.div_writeArea.getOffsetHeight() + plusHeightCnt);
        				this.div_AreaMain.form.div_areaBtn.set_height(this.div_AreaMain.form.div_areaBtn.getOffsetHeight() + plusHeightCnt);
        				this.div_AreaMain.resize(this.div_AreaMain.getOffsetWidth(), this.div_AreaMain.getOffsetHeight() + plusHeightCnt);
        				this.div_AreaMain.form.resetScroll();
        			}
        		}
        		if(serviceID == "deletePds"){
        			this.alert("삭제 되었습니다.");
        			this.fn_goPage("HP::hp03m00.xfdl");
        		}
        	}
        }

        this.fn_popupCallback = function(strPopupID, strReturn){
        	if(strPopupID == "pop_docView"){
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.hp03m02_oninit,this);
            this.div_AreaMain.form.div_AreaContent.form.div_areaText.form.webBrower_text.addEventHandler("onloadcompleted",this.webBrower_text_onloadcompleted,this);
            this.div_AreaMain.form.div_AreaContent.form.div_fileArea.form.gd_fileList.addEventHandler("oncellclick",this.div_AreaMain_div_AreaContent_div_fileArea_gd_fileList_oncellclick,this);
            this.div_AreaMain.form.div_areaBtn2.form.btn_del.addEventHandler("onclick",this.Div_btn_del_onclick,this);
            this.div_AreaMain.form.div_areaBtn2.form.btn_mod.addEventHandler("onclick",this.Div_btn_mod_onclick,this);
            this.div_AreaMain.form.div_areaBtn.form.btn_list.addEventHandler("onclick",this.Div_btn_list_onclick,this);
        };

        this.loadIncludeScript("hp03m02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
