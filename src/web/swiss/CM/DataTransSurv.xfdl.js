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
            obj = new Dataset("dsJobFileNm", this);
            obj._setContents("<ColumnInfo><Column id=\"FILEFORMNM\" type=\"STRING\" size=\"256\"/><Column id=\"FILENM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new WebBrowser("web00","0","50",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_url("http://localhost:8080/swissDataTrans/dt/combineSurv.do");
            this.addChild(obj.name, obj);

            obj = new Button("btnFileDown",null,"10","80","30","-88",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("파일다운");
            obj.set_visible("false");
            obj.set_cssclass("btn_sty04");
            this.addChild(obj.name, obj);

            obj = new Button("btnSelectAllFiles",null,"10","80","30","92",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("전체선택");
            obj.set_visible("true");
            obj.set_cssclass("btn_sty04");
            this.addChild(obj.name, obj);

            obj = new Button("btnFileDel",null,"10","80","30","btnSelectAllFiles:10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("파일삭제");
            obj.set_cssclass("btn_sty04");
            this.addChild(obj.name, obj);

            obj = new Button("btnFileAdd",null,"10","80","30","btnFileDel:10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("파일추가");
            obj.set_cssclass("btn_sty04");
            this.addChild(obj.name, obj);

            obj = new Static("stcAttFile","20","10","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("첨부파일");
            obj.set_cssclass("stc_WF_STitle");
            this.addChild(obj.name, obj);

            obj = new Button("btnFileAdj",null,"10","80","30","2",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("파일적용");
            obj.set_cssclass("btn_sty08");
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

            obj = new BindItem("item3","btnFileDown","text","ds_btnName","btnFileDown");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","btnFileAdj","text","ds_btnName","btnAddFile");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DataTransSurv.xfdl", function() {
        /***********************************************************************************
         * 전역변수 / 지역변수
         ***********************************************************************************/
        var objEnv = nexacro.getEnvironment();
        var objApp = nexacro.getApplication();
        var attIdtNo = "";		//파일고유번호
        var useChk = "";		//화면 유형(R: 다운로드, S:파일업로드 및 다운로드)
        var onloadChk = false;		//웹 브라우저 컴포넌트의 load 완료 여부
        var addFileChk = false;		//파일등록여부
        // var chkFunction = this.parent.parent.parent.parent.fn_setFileAttIdNo;
        var updateYn = "";
        var kindCd = "SURVFILE"; 	// 테이블타입 (BOARD : TMHP_BOARDFILE, SURVFILE : TMAD_SURVFILE)
        var fileSplit = "";

        var fv_MENUNM = "";
        /***********************************************************************************
         * Form 관련 이벤트
         ***********************************************************************************/


        this.innoFileCombineP_oninit = function(obj,e)
        {
        	this.web00.set_url(nexacro.getEnvironment().services["svcBigDataTrans"].url + "dt/combineSurv.do");
        };

        //onload 후 웹브라우저 url set
        this.innoFileCombineP_onload = function(obj,e){
        	this.fv_MENUNM = this.parent.parent.parent.parent.fv_MENUNM + ">파일공통(조사)"
        };

        //웹 브라우저 내 jsp정상 load체크
        this.web00_onloadcompleted = function(obj,e){
        	onloadChk = true;
        	this.fn_fileListChk();

        	if(onloadChk){
        		var userId = objApp.gds_login_info.getColumn(0, "USERID");// 사용자ID
        		var _win = this.web00.callMethod("initDt",attIdtNo,userId, kindCd);
        	}else{
        		alert("파일 업로드 컴포넌트를 불러오는 중 입니다. 잠시만 기다려주시기 바랍니다.");
        		return;
        	}

        	var CHANGEYN = objApp.gds_login_info.getColumn(0, "CHANGEYN") ;
        	if("Y" == CHANGEYN){
        		this.btnFileAdd.set_enable(false);
        		this.btnFileDel.set_enable(false);
        		this.btnSelectAllFiles.set_enable(false);
        		this.btnFileAdj.set_enable(false);
        	}

        	//jsp 함수 호출 후 _win변수에 할당된 메모리 삭제
        	if(_win){
        		_win.destroy();
        		_win = null;
        	}
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
        	//trace("varSetting - openerAttIdtNo:" + openerAttIdtNo + " / useChk" + useChk);
        	if(openerAttIdtNo == 0){
        		openerAttIdtNo = "";
        	}

        	attIdtNo = openerAttIdtNo;
        	this.authChk(useChk);
        }

        //화면 유형에 따라 버튼 조정
        this.authChk = function(useChk){

        	//업무화면에서 함수 호출 시 웹브라우저의 url 재설정
        	//var fileUrl = "http://localhost:8080/swissDataTrans/jbds/combine.do";
        	var fileUrl = nexacro.getEnvironment().services["svcBigDataTrans"].url + "dt/combineSurv.do";
        	this.web00.set_url(fileUrl);
        }

        //jsp함수 호출(파일목록)
        this.fn_fileListChk = function(){
        	//trace("fn_fileListChk attIdtNo 3 : " +attIdtNo + " / onloadChk : " + onloadChk + " / kindCd : " + kindCd + " / attIdtNo" + attIdtNo);

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

        	if(this.parent.parent.parent.parent.dsJobFileNm)this.dsJobFileNm.copyData(this.parent.parent.parent.parent.dsJobFileNm);
        	//var FILENM="파일적용시 아래의 파일만 적용가능합니다. \n";

        	for(var i=0; i < this.dsJobFileNm.rowcount; i++){
        		//FILENM = FILENM+this.dsJobFileNm.getColumn(i,"FILENM")+"\n";
        		fileSplit = fileSplit+this.dsJobFileNm.getColumn(i,"FILENM")+"|";
        		//var _win = this.web00.callMethod("beforeAddFile",this.dsJobFileNm.getColumn(i,"FILENM"));
        		//if( !_win) alert(this.dsJobFileNm.getColumn(i,"FILENM")+"은 잘못된 파일입니다.");
        	}

        	var objApp 		= nexacro.getApplication();
        	if(onloadChk){
        		//alert(onloadChk);

        		addFileChk = true;//파일등록
        		var userId = objApp.gds_login_info.getColumn(0, "USERID");// 사용자ID

        		var strLog = "attIdtNo=" + attIdtNo + ", userId=" + userId + ", kindCd=" + kindCd;
        		this.setAccessLog(this.parent.parent.parent.parent.fv_SURVSEQ, this.parent.parent.parent.parent.fv_SURVKINDCD, this.fv_MENUNM, "파일추가", strLog);  //접속기록

        		var _win = this.web00.callMethod("changeFileUrl",attIdtNo,userId, kindCd,fileSplit);

        		//alert("userId="+userId);

        	}else{
        		alert("파일 업로드 컴포넌트를 불러오는 중 입니다. 잠시만 기다려주시기 바랍니다.");
        		return;
        	}
        	//alert("aft onloadChk");

        	//jsp 함수 호출 후 _win변수에 할당된 메모리 삭제
        	if(_win){
        		_win.destroy();
        		_win = null;
        	}
        }

        //jsp함수 호출(파일삭제)
        this.btnFileDel_onclick = function(obj,e){
        	if(onloadChk){
        		this.setAccessLog(this.parent.parent.parent.parent.fv_SURVSEQ, this.parent.parent.parent.parent.fv_SURVKINDCD, this.fv_MENUNM, "파일삭제", "");  //접속기록
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
        	if(onloadChk){
        		this.setAccessLog(this.parent.parent.parent.parent.fv_SURVSEQ, this.parent.parent.parent.parent.fv_SURVKINDCD, this.fv_MENUNM, "파일다운", "");  //접속기록
        		var _win = this.web00.callMethod("innoFileDown");
        	}else{
        		alert("파일 업로드 컴포넌트를 불러오는 중 입니다. 잠시만 기다려주시기 바랍니다.");
        		return;
        	}

        	if(_win){
        		_win.destroy();
        		_win = null;
        	}

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

        this.btnFileAdj_onclick = function(obj,e)
        {
        	var fileCount = this.web00.callMethod("getFileCount");
        	trace(fileCount);
        	trace(attIdtNo);
        	if( !attIdtNo || attIdtNo == "" || fileCount <= 0 ){
        		alert("적용할 파일이 없습니다.");
        		return;
        	}
        	this.setAccessLog(this.parent.parent.parent.parent.fv_SURVSEQ, this.parent.parent.parent.parent.fv_SURVKINDCD, this.fv_MENUNM, "파일적용", "");  //접속기록
        	this.parent.parent.parent.parent.evddocFileUploadeEnd(attIdtNo);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.innoFileCombineP_onload,this);
            this.addEventHandler("oninit",this.innoFileCombineP_oninit,this);
            this.web00.addEventHandler("onusernotify",this.web00_onusernotify,this);
            this.web00.addEventHandler("onloadcompleted",this.web00_onloadcompleted,this);
            this.btnFileDown.addEventHandler("onclick",this.btnFileDown_onclick,this);
            this.btnSelectAllFiles.addEventHandler("onclick",this.btnSelectAllFiles_onclick,this);
            this.btnFileDel.addEventHandler("onclick",this.btnFileDel_onclick,this);
            this.btnFileAdd.addEventHandler("onclick",this.btnFileAdd_onclick,this);
            this.btnFileAdj.addEventHandler("onclick",this.btnFileAdj_onclick,this);
        };

        this.loadIncludeScript("DataTransSurv.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
