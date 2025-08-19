(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("innoFileCombineP");
            this.set_titletext("파일추가");
            if (Form == this.constructor)
            {
                this._setFormPosition(740,230);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_fileDownList", this);
            obj._setContents("<ColumnInfo><Column id=\"SAVE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_FILE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fileDownTrans", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new WebBrowser("web00","0","50",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnSelectAllFiles",null,"10","80","30","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("전체선택");
            obj.set_visible("true");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnFileDel",null,"10","80","30","btnSelectAllFiles:10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("파일삭제");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnFileAdd",null,"10","80","30","btnFileDel:10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("파일추가");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.addChild(obj.name, obj);

            obj = new Static("stcAttFile","0","10","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("첨부파일");
            obj.set_cssclass("stc_WF_STitle");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",740,230,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","btnFileAdd","text","ds_btnName","btnAddFile");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","btnFileDel","text","ds_btnName","btnDelFile");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","btnSelectAllFiles","text","ds_btnName","btnSelectAll");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DataTransMntr.xfdl", function() {
        /***********************************************************************************
         * 전역변수 / 지역변수
         ***********************************************************************************/
        var objEnv = nexacro.getEnvironment();
        var objApp = nexacro.getApplication();
        var attIdtNo = "";		//파일고유번호
        var useChk = "";		//화면 유형(R: 다운로드, S:파일업로드 및 다운로드)
        var onloadChk = false;		//웹 브라우저 컴포넌트의 load 완료 여부
        // var chkFunction = this.parent.parent.parent.parent.fn_setFileAttIdNo;
        var updateYn = "";
        var kindCd = "SURVFILE"; 	// 테이블타입 (BOARD : TMHP_BOARDFILE, SURVFILE : TMAD_SURVFILE)

        /***********************************************************************************
         * Form 관련 이벤트
         ***********************************************************************************/
        this.innoFileCombineP_oninit = function(obj,e)
        {
        	this.web00.set_url(nexacro.getEnvironment().services["svcBigDataTrans"].url + "dt/combine.do");
        };

        //onload 후 웹브라우저 url set
        this.innoFileCombineP_onload = function(obj,e){

        };

        //웹 브라우저 내 jsp정상 load체크
        this.web00_onloadcompleted = function(obj,e){
        	onloadChk = true;
        	this.fn_fileListChk();

        	if(onloadChk){
        		var userId = objApp.gds_login_info.getColumn(0, "USERID");// 사용자ID
        		var _win = this.web00.callMethod("initDt",attIdtNo,userId, kindCd, "multi");
        	}else{
        		alert("파일 업로드 컴포넌트를 불러오는 중 입니다. 잠시만 기다려주시기 바랍니다.");
        		return;
        	}

        	//jsp 함수 호출 후 _win변수에 할당된 메모리 삭제
        	if(_win){
        		_win.destroy();
        		_win = null;
        	}

        	//---------------- 파일 다운로드용
        	//this.fileDownTrans.setPostData("BASE_DIR", "");
        	//this.fileDownTrans.set_url("svcBaseUrl::swiss/hp/com/downloadFile.do");


        };

        /***********************************************************************************
         * transction callback 함수
         ***********************************************************************************/


        /***********************************************************************************
         * 컴포넌트 비즈니스 로직 함수
         ***********************************************************************************/

        //파일업로드 기능을 사용할 form에서 호출하는 함수
        //파일 고유번호와 화면 유형을 전달
        this.varSetting = function(openerAttIdtNo,useChk){
        	if(openerAttIdtNo == 0){
        		openerAttIdtNo = "";
        	}

        	attIdtNo = openerAttIdtNo;
        	this.authChk(useChk);
        }

        //화면 유형에 따라 버튼 조정
        this.authChk = function(useChk){
        // 	if(useChk=="S"){
        // 		this.btnFileAdd.set_visible(true);
        // 		this.btnFileDel.set_visible(true);
        // 	}else{
        // 		this.btnFileAdd.set_visible(false);
        // 		this.btnFileDel.set_visible(false);
        // 	}
        	trace("파일업로드 시작 2222");
        	//업무화면에서 함수 호출 시 웹브라우저의 url 재설정
        	var fileUrl = nexacro.getEnvironment().services["svcBigDataTrans"].url + "dt/combine.do";
        	this.web00.set_url(fileUrl);
        }

        //jsp함수 호출(파일목록)
        this.fn_fileListChk = function(){
        	trace("fn_fileListChk attIdtNo 3 : " +attIdtNo + " / onloadChk : " + onloadChk + " / kindCd : " + kindCd + " / attIdtNo" + attIdtNo);

        	if(onloadChk){
        		var _win = this.web00.callMethod("fileListCheck",attIdtNo, kindCd);
        	}else{
        		alert("파일 업로드 컴포넌트를 불러오는 중 입니다. 잠시만 기다려주시기 바랍니다.");
        		return;
        	}

        	//jsp 함수 호출 후 _win변수에 할당된 메모리 삭제
        	if(_win){
        		_win.destroy();
        		_win = null;
        	}
        }

        //jsp함수 호출(파일업로드)
        this.btnFileAdd_onclick = function(obj,e){
        	if(onloadChk){
        		var userId = objApp.gds_login_info.getColumn(0, "USERID");// 사용자ID
        		var _win = this.web00.callMethod("changeFileUrl",attIdtNo,userId, kindCd);
        	}else{
        		alert("파일 업로드 컴포넌트를 불러오는 중 입니다. 잠시만 기다려주시기 바랍니다.");
        		return;
        	}

        	//jsp 함수 호출 후 _win변수에 할당된 메모리 삭제
        	if(_win){
        		_win.destroy();
        		_win = null;
        	}
        }

        //jsp함수 호출(파일삭제)
        this.btnFileDel_onclick = function(obj,e){
        	if(onloadChk){
        		var _win = this.web00.callMethod("innoFileDel", kindCd);
        	}else{
        		alert("파일 업로드 컴포넌트를 불러오는 중 입니다. 잠시만 기다려주시기 바랍니다.");
        		return;
        	}

        	if(_win){
        		_win.destroy();
        		_win = null;
        	}
        };

        //jsp함수 호출(파일다운로드)
        this.btnFileDown_onclick = function(obj,e){

        	/*
        	if(onloadChk){
        		var _win = this.web00.callMethod("innoFileDown");
        	}else{
        		alert("파일 업로드 컴포넌트를 불러오는 중 입니다. 잠시만 기다려주시기 바랍니다.");
        		return;
        	}

        	if(_win){
        		_win.destroy();
        		_win = null;
        	}
        	*/

        	//------------------------------- 파일 다운로드로 변경 ----------------------------
        	this.ds_fileDownList.clearData();
        	var nRow = this.ds_fileDownList.addRow();

        	var svcBaseUrl = nexacro.getEnvironment().services["svcBaseUrl"].url;
        	var downUrl ="/kkk/";
        	if (svcBaseUrl.indexOf("localhost") > 0 ){
        			 downUrl = "C:/eGovFrameDev-3.8.0-64bit/server/apache-tomcat-9.0.31/webapps/swiss/docdown/";
        	}

        	//trace( nexacro.getEnvironment().services["svcBaseUrl"].url+"docdown/");
        	//this.ds_fileDownList.setColumn(nRow, "SAVE_PATH", nexacro.getEnvironment().services["svcBaseUrl"].url+"docdown/");
        	this.ds_fileDownList.setColumn(nRow, "SAVE_PATH", downUrl );
         	this.ds_fileDownList.setColumn(nRow, "SAVE_FILE_NAME", "FPrequestForm.xlsx");
         	this.ds_fileDownList.setColumn(nRow, "REAL_FILE_NAME", "20201028_신편입생 수정 파일 양식.xlsx");
        	//trace(this.ds_fileDownList.saveXML());
        	// 서버로 전송할 파일정보 셋팅
        	this.fileDownTrans.setPostData("fileInfo", this.ds_fileDownList.saveXML());
        	this.fileDownTrans.set_downloadfilename(this.ds_fileDownList.getColumn(0, "REAL_FILE_NAME"));

        	// 파일 다운로드 실행
        	this.fileDownTrans.download();

        };

        //jsp함수 호출(파일전체선택)
        this.btnSelectAllFiles_onclick = function(obj,e){
        	if(onloadChk){
        		var _win = this.web00.callMethod("innoSelectAllFiles");
        	}else{
        		alert("파일 업로드 컴포넌트를 불러오는 중 입니다. 잠시만 기다려주시기 바랍니다.");
        		return;
        	}

        	if(_win){
        		_win.destroy();
        		_win = null;
        	}
        };

        //jsp에서 파일 업로드 완료 시 호출하는 함수
        //파일업로드 완료 후 전역변수에 파일고유번호를 할당한다.
        this.web00_onusernotify = function(obj,e){
        	attIdtNo = e.userdata;
        };

        //부모창에서 파일고유번호를 조회하기 위한 함수
        //파일업로드 컴포넌트를 사용하는 화면에서는 본 함수를 사용하여 해당 업무 DB에 파일고유번호를 update한다.
        this.returnAttIdtNo = function(){
        	return attIdtNo;
        }

        this.getFileCount = function(){
        	return this.web00.callMethod("getFileCount");
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.innoFileCombineP_onload,this);
            this.addEventHandler("oninit",this.innoFileCombineP_oninit,this);
            this.web00.addEventHandler("onusernotify",this.web00_onusernotify,this);
            this.web00.addEventHandler("onloadcompleted",this.web00_onloadcompleted,this);
            this.btnSelectAllFiles.addEventHandler("onclick",this.btnSelectAllFiles_onclick,this);
            this.btnFileDel.addEventHandler("onclick",this.btnFileDel_onclick,this);
            this.btnFileAdd.addEventHandler("onclick",this.btnFileAdd_onclick,this);
        };

        this.loadIncludeScript("DataTransMntr.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
