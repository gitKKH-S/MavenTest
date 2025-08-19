(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("fp03p00");
            this.set_titletext("신입생조사 학과정보 수정 사유");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("normal 700 36px/normal \"맑은 고딕\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(980,610);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fileDownList", this);
            obj._setContents("<ColumnInfo><Column id=\"SAVE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_FILE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fileDownTrans", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","980","602",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","50",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","600",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","950","0","30","600",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static02","30","50","560","28",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_text("신입생정보 조사 학과정보 수정사유 등록");
            obj.set_cssclass("title_t2");
            obj.set_visible("true");
            obj.set_font("18px/normal \"SpoqaHanSans-Bold\"");
            this.Div.addChild(obj.name, obj);

            obj = new Div("Div00","30","90","920","2",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_background("#000000");
            this.Div.addChild(obj.name, obj);

            obj = new TextArea("contents","30","105","920","184",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_background("#f9f9f9");
            obj.set_border("1px solid #f9f9f9");
            obj.set_padding("25px");
            obj.set_displaynulltext("수정사유를 입력해 주십시오");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_req","360","550","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_text("수정요청");
            obj.set_cssclass("btn_sty01");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_close","530","550","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_text("닫기");
            obj.set_cssclass("btn_sty01");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_fileRight","30","300","920","230",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("8");
            obj.set_text("div_fileRight");
            obj.set_url("CM::DataTransMntr.xfdl");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_req00","770","53","180","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("9");
            obj.set_text("신청양식파일다운");
            obj.set_cssclass("btn_sty01");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Edit("SCHCD","710","555","57","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("cls_edt_base01");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("ORGCD","790","555","57","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("cls_edt_base01");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",980,610,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CM::DataTransMntr.xfdl");
        };
        
        // User Script
        this.registerScript("fp03p00.xfdl", function() {
        this.fv_MENUNM = "";
        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "";

        this.fnCallback = function(serviceID, errCD, errMSG){

        	var objApp 		= nexacro.getApplication();
        	if(errCD < 0){
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceID == "insertSurvHist"){

        			var resultVal = objApp.gds_rtn_result.getColumn(0, "RESULTVAL");
        			if( resultVal !="Y"){
        				this.alert("등록에 실패 했습니다.");
        			}else{

        				this.opener.fn_saveResult("수정요청","2");

        				/*
        				this.opener.Div.form.sub_state.form.state_result.set_text("수정요청");
        				var index =  this.opener.Div.form.sub_search.form.sel_schooNm.index;
        				this.opener.ds_chgSchool.setColumn(index, "STATUSNM", "연계결과 제출" );
        				this.opener.ds_chgSchool.setColumn(index, "SURVPROSTATUSCD", "4" ); //수정요청
        				*/

        				this.alert("수정요청이 완료되었습니다.");
        			}
        			this.close();

        		}
        		if(serviceID == "getDayNight"){

        		}

         	}
        }

        this.fp03p00_onload = function(obj,e)
        {
        	//alert(this.opener.ds_chgSchool.getColumn(this.opener.ds_chgSchool.rowposition, "SCHCD") );

        	//var index =  this.opener.Div.form.sub_search.form.sel_schooNm.index;
        	//alert(index);

        	//var SCHCD = this.parent.SCHCDORGCD[0]   ; // 학교코드
        	//var ORGCD = this.parent.SCHCDORGCD[1]; // 본분교

        	var SCHCD          = this.parent.param1;   ; // 학교코드
        	var ORGCD          = this.parent.param2; // 본분교
        	var SURVSEQ        = this.parent.SURVSEQ;
        	var SURVKINDCD     = this.parent.SURVKINDCD;
        	var MENUNM         = this.parent.MENUNM;
        	this.fv_SURVSEQ    = SURVSEQ;
        	this.fv_SURVKINDCD = SURVKINDCD;
        	this.fv_MENUNM     = MENUNM + ">졸업생정보 조사 학과정보 수정사유 등록";
        	//alert(SCHCD);
        	this.SCHCD.set_value(SCHCD);
        	this.ORGCD.set_value(ORGCD);


        	this.fileDownTrans.setPostData("BASE_DIR", "");
        	this.fileDownTrans.set_url("svcBaseUrl::swiss/hp/com/downloadFileDoc.do");


        };

        this.btn_req_onclick = function(obj,e)
        {

        	if( this.Div.form.contents.value == null || this.Div.form.contents.value == ""){
        		this.alert("수정사유 입력 및 파일을 등록해주세요.");
        		return;
        	}

        	var FILEID 		= this.Div.form.div_fileRight.form.returnAttIdtNo();
        	//alert(FILEID);
        	/*
        	if( FILEID == null || FILEID == ""){
        		this.alert("수정사유 입력 및 파일을 등록해주세요.");
        		return;
        	}	*/

        	var fileCnt = this.Div.form.div_fileRight.form.getFileCount();
        	if( fileCnt == "0"){
        		this.alert("수정사유 입력 및 파일을 등록해주세요.");
        		return;
        	}


        	var strParam = "";
        	strParam += "tmp="		    + "a" 		                   + "ª";
        	strParam += "SCHCD="		+ this.SCHCD.value		       + "ª";

        	strParam += "ORGCD="		+ this.ORGCD.value		       + "ª";
        	strParam += "SURVSEQ="		+  this.fv_SURVSEQ             + "ª";
        	strParam += "SURVKINDCD="   +  this.fv_SURVKINDCD          + "ª";

        	strParam += "RCEPTCN="		+ this.Div.form.contents.value + "ª";
        	strParam += "STATUSCD="		+ "2"		                   + "ª";	// 상태 - 연계결과  수정요청

        	//strParam += 'FILEID＃§＃' + FILEID + 'ª';
        	strParam += "ATT_IDT_NO="	+ FILEID	                   + "ª";

        	//alert(this.ORGCD.value);

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "수정요청", strParam);  //수정요청
        	this.gfnTransaction("insertSurvHist",
        						"/swiss/fp/baserel/insertSurvHist.do",
        						"dsSearch=dsSearch",
        						"gds_rtn_result=dsResult",
        						"",
        						"fnCallback",
        						false);
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
        	var downUrl ="doc";
        	if (svcBaseUrl.indexOf("localhost") > 0 ){
        			 downUrl = "C:/eGovFrameDev-3.8.0-64bit/server/apache-tomcat-9.0.31/webapps/swiss/docdown/";
        	}

        	//trace( nexacro.getEnvironment().services["svcBaseUrl"].url+"docdown/");
        	//this.ds_fileDownList.setColumn(nRow, "SAVE_PATH", nexacro.getEnvironment().services["svcBaseUrl"].url+"docdown/");
        	this.ds_fileDownList.setColumn(nRow, "SAVE_PATH", downUrl );
         	this.ds_fileDownList.setColumn(nRow, "SAVE_FILE_NAME", "FPrequestForm.xlsx");
         	this.ds_fileDownList.setColumn(nRow, "REAL_FILE_NAME", "신입생정보_수정서식.xlsx");
        	//trace(this.ds_fileDownList.saveXML());
        	// 서버로 전송할 파일정보 셋팅
        	this.fileDownTrans.setPostData("fileInfo", this.ds_fileDownList.saveXML());
        	this.fileDownTrans.set_downloadfilename(this.ds_fileDownList.getColumn(0, "REAL_FILE_NAME"));
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "신청양식파일다운", "");  //신청양식파일다운로드하기
        	// 파일 다운로드 실행
        	this.fileDownTrans.download();

        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fp03p00_onload,this);
            this.Div.form.Static02.addEventHandler("onclick",this.Div_Static02_onclick,this);
            this.Div.form.btn_req.addEventHandler("onclick",this.btn_req_onclick,this);
            this.Div.form.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.Div.form.btn_req00.addEventHandler("onclick",this.btnFileDown_onclick,this);
        };

        this.loadIncludeScript("fp03p00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
