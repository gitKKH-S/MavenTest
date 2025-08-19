(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","10","10","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Innorix WP");
            this.addChild(obj.name, obj);

            obj = new Button("btnFileSearch","11","305","89","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("찾아보기");
            this.addChild(obj.name, obj);

            obj = new Button("btnUpload","205","305","89","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("업로드");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00","11","45","569","240",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_url("http://localhost:8080/BigDataTrans/innorix/exam/combineNexa.html");
            this.addChild(obj.name, obj);

            obj = new Button("btnSelectDownload","399","305","89","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("선택다운로드");
            this.addChild(obj.name, obj);

            obj = new Button("selectDelete","496","305","89","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("선택삭제");
            this.addChild(obj.name, obj);

            obj = new Button("getAllFiles","11","340","89","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("getAllFiles()");
            this.addChild(obj.name, obj);

            obj = new Button("getFileCnt","128","340","89","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("getFileCount()");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","618","48","423","320",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_scrollbartype("auto auto");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Button("btnDownload00","302","305","89","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("다운로드");
            this.addChild(obj.name, obj);

            obj = new Button("getSelectedFileCount","245","340","145","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("getSelectedFileCount()");
            this.addChild(obj.name, obj);

            obj = new Button("getFileByIndex","150","410","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("getFileByIndex()");
            this.addChild(obj.name, obj);

            obj = new Button("getUploadFiles","416","340","104","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("getUploadFiles()");
            this.addChild(obj.name, obj);

            obj = new Button("getDownloadFiles","11","374","119","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("getDownloadFiles()");
            this.addChild(obj.name, obj);

            obj = new Button("getUploadFilesSize","150","374","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("getUploadFilesSize()");
            this.addChild(obj.name, obj);

            obj = new Button("getSelectedFiles","11","410","117","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("getSelectedFiles()");
            this.addChild(obj.name, obj);

            obj = new Button("getDownloadFilesSize","292","374","138","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("getDownloadFilesSize()");
            this.addChild(obj.name, obj);

            obj = new Button("getTotalSize","449","374","89","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("getTotalSize()");
            this.addChild(obj.name, obj);

            obj = new Button("getAgentMode","278","410","101","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("getAgentMode()");
            this.addChild(obj.name, obj);

            obj = new Button("btnFolderSearch","108","305","89","24",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("폴더 찾기");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1080,670,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function() {

        /*
         *	이노릭스 컨트롤옵션부 초기값 설정을위한 input태그 값 변경
         */
        this.WebBrowser00_onloadcompleted = function(obj,e) {

        	trace("-----------------WebBrowser00_onloadcompleted---------------");
        	var objOption = new Object();
        	objOption.agent = true;
        	objOption.showGraph = false;
        	//objOption.limitExtension = ["exe","jpg"];
        	//objOption.maxTotalSize = "200000000";
        	//objOption.maxFileSize = "500000";  //byte 488.28125KByte 0.47MByte
        	//objOption.maxFileCount = 4;
        	//objOption.autoReTransfer = false;

        	objOption.retryCount = 3;
        	objOption.retryDelay = 1;
        	objOption.maximumErrorCount = 1;

        	var strJson = JSON.stringify(objOption);

        	var _doc = this.WebBrowser00.getProperty("document");
        	var dom = _doc.callMethod("getElementById", "nexaToInno");
        	dom.setProperty("value", strJson);

        	// 웹 브라우저에서 실행할 경우
        	if (system.navigatorname.indexOf("nexacro") == -1) {
        		var _win = this.WebBrowser00.getProperty("window");
        		 _win.callMethod("fnInitInnorix");

        		 if(_win) {
        			_win.destroy();
        			_win = null;
        		}
        	}

        	if(_doc && dom) {
                _doc.destroy();
                _doc = null;
                dom.destroy();
                dom = null;
            }
        };


        // 이전 메세지 값
        var bfBrowserMessage;

        /*
        * 이노릭스에서 넥사크로 호출 시
        */
        this.WebBrowser00_onusernotify = function(obj,e) {

        	var nTime = new nexacro.Date().getTime()+"";// 1566958687876
        	var browserMessage = nTime.substr(6,4)+e.userdata;

        	trace("WebBrowser00_onusernotify ---- "+bfBrowserMessage+" ------ " + browserMessage);

        	if (bfBrowserMessage != browserMessage) {
        		bfBrowserMessage = browserMessage;
        		var fnNm = browserMessage.substring(4);

        		if (typeof(this[fnNm]) == 'function') {
        			this[fnNm](this.getInnorixRtnVal()); // callback
        		}
        	}
        };



        /*
         * 이노릭스 함수 실행
         *
         * argu1 : 함수명
         * argu2 : 파라메터
         * argu3 : callback
         */
        this.fnExecInnorix = function(argu1, argu2, argu3){

        	trace("fnExecInnorix argu1:" + argu1 + ", argu2:" + argu2 + ", argu3:"+argu3);

        	var rtn;
        	var _win = this.WebBrowser00.getProperty("window");

        	var arguCnt = this.fnExecInnorix.arguments.length;

        	if (arguCnt == 1) {
        	    _win.callMethod("fnExecInnorix", argu1);

        	} else if (arguCnt == 2) {

        		var obj = new Object();
        		obj.fnNm = argu1;
        		obj.params = argu2;
        		_win.callMethod("fnExecInnorix", JSON.stringify(obj));

        	} else if (arguCnt == 3) {

        		var obj = new Object();
        		obj.fnNm = argu1;
        		obj.params = argu2;
        		obj.callback = argu3;
        		_win.callMethod("fnExecInnorix", JSON.stringify(obj));
        	}

        	if (argu1.indexOf("get") > -1 && this.chkEventFire(argu1)) {

        		var _doc = this.WebBrowser00.getProperty("document");

        		var dom = _doc.callMethod("getElementById", "innoToNexa");
        		rtn = dom.getProperty("value");

        		if(_doc) {
        			_doc.destroy();
        			_doc = null;
        		}
        	}

        	 if(_win) {
                _win.destroy();
                _win = null;
            }

        	return rtn;
        }

        /*
        * 이노릭스 이벤트 실행 결과 체크
        */
        this.chkEventFire = function(eventNm) {

        	var _doc, dom, rtn, value;

        	while(true) {

        		_doc = this.WebBrowser00.getProperty("document");
        		dom = _doc.callMethod("getElementById", "eventFire");
        		value = dom.getProperty("value");

        		arr = value.split(":");
        		if (arr.length > 1) {
        			if (arr[0].indexOf(eventNm) > -1) {
        				if (arr[1].indexOf("FIRE") > -1) {
        					if(_doc) {
        						_doc.destroy();
        						_doc = null;
        					}
        					rtn = true;
        					break;
        				}
        			}
        		} else {
        			if(_doc) {
        				_doc.destroy();
        				_doc = null;
        			}
        			rtn = false;
        			break;
        		}
        	}

            dom.setProperty("value", "");

        	return rtn;
        }



        /*
         * Innorix의 처리 결과값 JSON 파싱
         */
        this.getInnorixRtnVal = function() {
        	var rtn;
        	var _doc = this.WebBrowser00.getProperty("document");
        	var value = _doc.callMethod("getElementById", "innoToNexa").getProperty("value");
        	if (value != "") {
        		rtn = JSON.parse(value);
        	}
        	if(_doc) {
                _doc.destroy();
                _doc = null;
            }

        	return rtn; //json형태로 파싱
        }


        /*
        * 이노릭스 이벤트 리스너 등록
        */
        this.fnAddEventListener = function(eventName, callback) {

        	var obj = new Object();
        	obj.eventName = eventName;
        	obj.callback = callback;

        	var _win = this.WebBrowser00.getProperty("window");
        	_win.callMethod("fnAddEventListener", JSON.stringify(obj));

        	if(_win) {
                _win.destroy();
                _win = null;
            }

        }

        ///-----------------

        /*
        * 이노릭스 로딩 완료
        */
        this.loadComplete = function(p) {

        	// 이노릭스 이벤트 리스너 등록
        	this.fnAddEventListener("addFileError","addFileError"); // 파일 첨부시 에러
        	this.fnAddEventListener("uploadError","uploadError");

        }


        /*
         * 업로드 완료 후 처리
         * callback 함수 미지정시 uploadComplete() 호출
         */
        this.uploadComplete = function(p) {

        	var fileArray = new Array();
        	var f = p.files;

        	for (var i=0; i<f.length; i++) {
        		var fileObj = new Object();
        		fileObj.printFileName = f[i].clientFileName;
        		fileObj.fileSize = f[i].fileSize;
        		fileObj.rootName = f[i].rootName;

        		fileObj.downloadUrl = "http://localhost:8080/BigDataTrans/innorix/exam/download.jsp?fileID=" + f[i].fileID; // 서버의 transFileInfo.txt의 해당 트랜스퍼
        		//fileObj.downloadUrl = "http://127.0.0.1:8080/innorix/innorix/exam/download.jsp?fileFullPath=" + f[i].serverFilePath; // 서버에 파일이 저장되어있는 경로
        		// f[i].serverFilePath는 upload.jsp에서 uploader.setHideServerPathInfo(true);를 설정하면 NULL값이 리턴됨.
        		// fileID와같은 Unique한 값을 넘겨서 시스템에서 파일 경로 조회하여 처리하도록 권장함.
        		fileArray.push(fileObj);
        	}

        	this.fnExecInnorix("removeAllFiles"); // 리스트 컨트롤에서 파일을 삭제
        	this.alert("업로드가 완료 되었습니다.\n다운로드 가능하게 재구성 합니다." );
        	this.fnExecInnorix("presetDownloadFiles", fileArray); // 다운로드 목록을 구성

        };

        /*
        * 다운로드 완료시 처리
        * callback 함수 미지정시 downloadComplete() 호출
        */
        this.downloadComplete = function(p) {
        	this.alert("다운로드가 완료 되었습니다.");
        };

        /*
        * 파일 첨부 시 에러
        */
        this.addFileError = function(p){

        	if (p.type.indexOf("allowExtension") > -1) {
        		this.alert("_확장자 제한");
        	} else if (p.type.indexOf("maxFileCount") > -1) {
        		this.alert("_개수 제한");
        	} else if (p.type.indexOf("maxTotalSize") > -1) {
        		this.alert("_사이즈 제한");
        	} else if (p.type.indexOf("limitExtension") > -1) {
        		this.alert("_확장자 제한");
        	} else if (p.type.indexOf("addDuplicateFile") > -1) {
        		this.alert("_중복파일 제한");
        	} else if (p.type.indexOf("maxFileSize") > -1) {
        		this.alert("_개별파일 사이즈 제한");
        	}

        };

        /*
        * 업로드 에러 발생시
        */
        this.uploadError = function(p) {

        	var arrFiles = p.files;

        	for(var i in arrFiles) {

        		if(arrFiles[i].fileState == "error") {
        			this.alert("오류 파일 : " + arrFiles[i].clientFilePath + ", errorCode : " + arrFiles[i].errorCode + ", errorMessage : " + arrFiles[i].errorMessage + ", errorTitle : " + arrFiles[i].errorTitle);
        			break;
        		}
        	}

        	//this.fnExecInnorix("uploadCancel"); //에러시 업로드종료
        }



        //--------------------------------------------------

        /**
        * 폴더 찾기 버튼 클릭
        */
        this.btnFolderSearch_onclick = function(obj,e)
        {
        	this.fnExecInnorix("openFolderDialog"); // 폴더 선택창 출력
        };

        /*
         * 찾아보기 버튼 클릭
         */
        this.btnFileSearch_onclick = function(obj,e) {
        	this.fnExecInnorix("openFileDialog"); // 파일다이얼로그 호출
        };

        /*
         * 업로드 버튼 클릭
         */
        this.btnUpload_onclick = function(obj,e) {

        	var postObj = new Object();
        	//postObj.custParam1 = "C:\\innorix\\save3"; // POST 변수 설정(저장경로지정)

        	this.fnExecInnorix("setPostData", postObj); // POST 변수 설정 함수 호출
        	this.fnExecInnorix("upload",null,"uploadComplete"); // 업로드 함수 호출
        };

        /*
         * 다운로드 버튼 클릭
         */
        this.btnDownload_onclick = function(obj,e) {
        	this.fnExecInnorix("download",null,"downloadComplete"); // 다운로드 함수 호출
        };

        /*
         * 선택다운로드
         */
        this.btnSelectDownload_onclick = function(obj,e) {
        	this.fnExecInnorix("downloadSelectedFiles"); // 선택다운로드 함수 호출
        };

        /*
         * 선택파일삭제
         */
        this.selectDelete_onclick = function(obj,e) {
        	this.fnExecInnorix("removeSelectedFiles"); // 선택파일삭제 함수 호출
        };

        /*
        * 모든 파일 정보조회
        */
        this.getAllFiles_onclick = function(obj,e) {
        	var result = this.fnExecInnorix("getAllFiles");
        	this.TextArea00.set_value(result);

        };

        /*
        * 이노릭스 컨트롤 파일 개수 조회
        */
        this.getFileCount_onclick = function(obj,e) {
        	var result = this.fnExecInnorix("getFileCount");
        	this.TextArea00.set_value(result);
        };

        /*
        * 이노릭스 컨트롤 선택된 파일 개수 조회
        */
        this.getSelectedFileCount_onclick = function(obj,e) {
        	var result = this.fnExecInnorix("getSelectedFileCount");
        	this.TextArea00.set_value(result);
        };

        /*
         *	업로드 전체 파일 정보 조회
         */
        this.getUploadFiles_onclick = function(obj,e)
        {
        	var result = this.fnExecInnorix("getUploadFiles");
        	this.TextArea00.set_value(result);
        };

        /*
         *	다운로드 전체 파일 정보 조회
         */
        this.getDownloadFiles_onclick = function(obj,e)
        {
        	var result = this.fnExecInnorix("getDownloadFiles");
        	this.TextArea00.set_value(result);
        };

        /*
         *	업로드 대상 전체 파일 사이즈 조회
         */
        this.getUploadFilesSize_onclick = function(obj,e)
        {
        	var result = this.fnExecInnorix("getUploadFilesSize");
        	this.TextArea00.set_value(result);
        };

        /*
         *	다운로드 대상 전체 파일 사이즈 조회
         */
        this.getDownloadFilesSize_onclick = function(obj,e)
        {
        	var result = this.fnExecInnorix("getDownloadFilesSize");
        	this.TextArea00.set_value(result);
        };

        /*
         *	전체 파일 사이즈 조회
         */
        this.getTotalSize_onclick = function(obj,e)
        {
        	var result = this.fnExecInnorix("getTotalSize");
        	this.TextArea00.set_value(result);
        };

        /*
         *	선택된 파일 정보 조회
         */
        this.getSelectedFiles_onclick = function(obj,e)
        {
        	var result = this.fnExecInnorix("getSelectedFiles");
        	this.TextArea00.set_value(result);
        };

        /*
         *	입력해준 index에 해당하는 파일 정보 조회
         */
        this.getFileByIndex_onclick = function(obj,e)
        {
        	var result = this.fnExecInnorix("getFileByIndex",0);
        	this.TextArea00.set_value(result);
        };

        /*
         *	사용중인 컨트롤의 Agent 모드, HTML5 모드 사용여부 확인
         */
        this.getAgentMode_onclick = function(obj,e)
        {
        	var result = this.fnExecInnorix("getAgentMode");
        	this.TextArea00.set_value(result);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnFileSearch.addEventHandler("onclick",this.btnFileSearch_onclick,this);
            this.btnUpload.addEventHandler("onclick",this.btnUpload_onclick,this);
            this.WebBrowser00.addEventHandler("onusernotify",this.WebBrowser00_onusernotify,this);
            this.WebBrowser00.addEventHandler("onloadcompleted",this.WebBrowser00_onloadcompleted,this);
            this.btnSelectDownload.addEventHandler("onclick",this.btnSelectDownload_onclick,this);
            this.selectDelete.addEventHandler("onclick",this.selectDelete_onclick,this);
            this.getAllFiles.addEventHandler("onclick",this.getAllFiles_onclick,this);
            this.getFileCnt.addEventHandler("onclick",this.getFileCount_onclick,this);
            this.btnDownload00.addEventHandler("onclick",this.btnDownload_onclick,this);
            this.getSelectedFileCount.addEventHandler("onclick",this.getSelectedFileCount_onclick,this);
            this.getFileByIndex.addEventHandler("onclick",this.getFileByIndex_onclick,this);
            this.getUploadFiles.addEventHandler("onclick",this.getUploadFiles_onclick,this);
            this.getDownloadFiles.addEventHandler("onclick",this.getDownloadFiles_onclick,this);
            this.getUploadFilesSize.addEventHandler("onclick",this.getUploadFilesSize_onclick,this);
            this.getSelectedFiles.addEventHandler("onclick",this.getSelectedFiles_onclick,this);
            this.getDownloadFilesSize.addEventHandler("onclick",this.getDownloadFilesSize_onclick,this);
            this.getTotalSize.addEventHandler("onclick",this.getTotalSize_onclick,this);
            this.getAgentMode.addEventHandler("onclick",this.getAgentMode_onclick,this);
            this.btnFolderSearch.addEventHandler("onclick",this.btnFolderSearch_onclick,this);
        };

        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
