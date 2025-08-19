(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("fp07m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("normal 700 36px/normal \"맑은 고딕\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,360);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_school_list", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"256\"/><Column id=\"SURVPROSTATUSNM\" type=\"STRING\" size=\"256\"/><Column id=\"SURVPROSTATUSCD\" type=\"STRING\" size=\"256\"/><Column id=\"NUMSENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"NUMEXAMDT\" type=\"STRING\" size=\"256\"/><Column id=\"INFOREGDT\" type=\"STRING\" size=\"256\"/><Column id=\"INFOSENDDT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"학교명\" type=\"STRING\" size=\"256\"/><Column id=\"본분교명\" type=\"STRING\" size=\"256\"/><Column id=\"처리상태\" type=\"STRING\" size=\"256\"/><Column id=\"정보입력일\" type=\"STRING\" size=\"256\"/><Column id=\"KDEI제출일시\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"학교명\">KEDI 대학교</Col><Col id=\"본분교명\">본교</Col><Col id=\"처리상태\">취업-인적정보요청</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChkCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK_SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_USERID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_NULL_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsActive", this);
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","350",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","20",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","350",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","350",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Div("stepArea00_00_00_00_00_00","30","20","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_cssclass("stepArea");
            this.Div.addChild(obj.name, obj);

            obj = new Static("gp01m00","0","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00_00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("조사현황");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("gp02m00","342","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00_00_00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("환경설정");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("gp03m00","171","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00_00_00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("연계결과");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("gp04m00","513","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00_00_00_00_00.form);
            obj.set_taborder("3");
            obj.set_text("정보등록");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("gp05m00","1026","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00_00_00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("결과조회");
            obj.set_cssclass("step01 last");
            obj.set_cursor("pointer");
            this.Div.form.stepArea00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("gp06m00","684","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_00_00_00_00_00.form);
            obj.set_taborder("5");
            obj.set_text("결과집계");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("gp07m00","855","0","172","40",null,null,null,null,null,null,this.Div.form.stepArea00_00_00_00_00_00.form);
            obj.set_taborder("6");
            obj.set_text("결과제출");
            obj.set_cssclass("step01 on01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01","329","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea00_00_00_00_00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","159","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea00_00_00_00_00_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","842","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea00_00_00_00_00_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("ico_step on01");
            this.Div.form.stepArea00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","500","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea00_00_00_00_00_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","1013","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea00_00_00_00_00_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("ico_step on01");
            this.Div.form.stepArea00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","671","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea00_00_00_00_00_00.form);
            obj.set_taborder("12");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Div("sub_research01","30","stepArea00_00_00_00_00_00:20","1200","95",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_cssclass("sub_research01");
            this.Div.addChild(obj.name, obj);

            obj = new Static("reser_st01","30","10","120","30",null,null,null,null,null,null,this.Div.form.sub_research01.form);
            obj.set_taborder("0");
            obj.set_text("조사 기준");
            obj.set_cssclass("reser_st01");
            this.Div.form.sub_research01.addChild(obj.name, obj);

            obj = new Static("reser_st_result","reser_st01:10","10","120","30",null,null,null,null,null,null,this.Div.form.sub_research01.form);
            obj.set_taborder("1");
            obj.set_text("OO.12.31");
            obj.set_cssclass("reser_st_result");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\"");
            this.Div.form.sub_research01.addChild(obj.name, obj);

            obj = new Static("reser_obj01","290","10","123","30",null,null,null,null,null,null,this.Div.form.sub_research01.form);
            obj.set_taborder("2");
            obj.set_text("조사 대상");
            obj.set_cssclass("reser_obj01");
            obj.set_visible("true");
            obj.set_font("16px/normal \"SpoqaHanSans-Bold\"");
            this.Div.form.sub_research01.addChild(obj.name, obj);

            obj = new Static("reser_date_result","reser_obj01:10","10","584","30",null,null,null,null,null,null,this.Div.form.sub_research01.form);
            obj.set_taborder("3");
            obj.set_text("oo.2월, 19.08월 졸업자");
            obj.set_cssclass("reser_date_result");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\"");
            obj.set_visible("true");
            this.Div.form.sub_research01.addChild(obj.name, obj);

            obj = new Static("reser_date01","30","45","120","30",null,null,null,null,null,null,this.Div.form.sub_research01.form);
            obj.set_taborder("4");
            obj.set_text("조사 기간");
            obj.set_cssclass("reser_date01");
            this.Div.form.sub_research01.addChild(obj.name, obj);

            obj = new Static("reser_obj_result","reser_date01:10","45","606","30",null,null,null,null,null,null,this.Div.form.sub_research01.form);
            obj.set_taborder("5");
            obj.set_text("oo20 7.13 ~ oo20.7.23. (oo21년 고등교육기관 oo생수 조사)");
            obj.set_cssclass("reser_obj_result");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\"");
            this.Div.form.sub_research01.addChild(obj.name, obj);

            obj = new Div("sub_state","30","180","720","55",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static02","0","22","140","30",null,null,null,null,null,null,this.Div.form.sub_state.form);
            obj.set_taborder("0");
            obj.set_text("취업통계진행상태 :");
            obj.set_tooltiptype("hover,mouseleave");
            this.Div.form.sub_state.addChild(obj.name, obj);

            obj = new Static("state_result","145","22","535","30",null,null,null,null,null,null,this.Div.form.sub_state.form);
            obj.set_taborder("1");
            obj.set_text("--");
            obj.set_cssclass("state_result");
            this.Div.form.sub_state.addChild(obj.name, obj);

            obj = new Button("btn_submit","1010","200","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("8");
            obj.set_text("제출");
            obj.set_cssclass("btn_sty06");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("Grid","30","240",null,"83","30",null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_binddataset("ds_school_list");
            obj.set_cssclass("grid_sty02_01");
            obj.set_autosizingtype("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"190\"/><Column size=\"90\"/><Column size=\"264\"/><Column size=\"135\"/><Column size=\"136\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"학교명\"/><Cell col=\"1\" text=\"본분교명\"/><Cell col=\"2\" text=\"처리상태\"/><Cell col=\"3\" text=\"정보입력일\"/><Cell col=\"4\" text=\"KDEI제출일시\"/></Band><Band id=\"body\"><Cell text=\"bind:SCHNM\"/><Cell col=\"1\" text=\"bind:ORGNM\"/><Cell col=\"2\" text=\"bind:SURVPROSTATUSNM\"/><Cell col=\"3\" text=\"bind:INFOREGDT\"/><Cell col=\"4\" text=\"bind:INFOSENDDT\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_pub_print","1130","200","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_text("결과 출력");
            obj.set_cssclass("btn_sty06");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_pub_print00","900","200","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("9");
            obj.set_text("테스트");
            obj.set_cssclass("btn_sty06");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_visible("false");
            obj.set_enable("false");
            this.Div.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,360,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("gp07m00.xfdl","CM::common.xjs");
        this.addIncludeScript("gp07m00.xfdl","CM::utl_script.xjs");
        this.addIncludeScript("gp07m00.xfdl","CM::utl_modal.xjs");
        this.registerScript("gp07m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;
        this.executeIncludeScript("CM::utl_script.xjs"); /*include "CM::utl_script.xjs"*/;
        this.executeIncludeScript("CM::utl_modal.xjs"); /*include "CM::utl_modal.xjs"*/;

        //기본변수세팅
        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "";
        this.fv_SCHCD =  "";
        this.fv_ORGCD =  "";
        this.fv_SURVOBJ =  "";
        this.fv_SURVSTRTDT =  "";
        this.fv_SURVENDDT =  "";
        this.fv_SURVNM =  "";
        this.fv_SURVPROSTATUSCD = "";

        this.fv_USERID = "";
        this.fv_USERGRPTYPE ="";

        this.fv_ERRCNT =  "";
        this.fv_SURVTERM =  "";
        this.fv_CHANGEYN = "";
        this.fv_MENUNM = "졸업생정보>결과제출";
        this.fv_MENUID = "GP07M00";
        //글로벌 데이터셋을 사용하기 위한 objApp
        var objApp = nexacro.getApplication();

        this.fnCallback = function(serviceID, errCD, errMSG){

        	if(errCD < 0){
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceID == "selectSchoolInfo"){
        			// 선택된 데이터 불러오기
        			var SURVPROSTATUSCD = this.ds_school_list.getColumn(0,"SURVPROSTATUSCD");
        			var SURVPROSTATUSNM = this.ds_school_list.getColumn(0, "SURVPROSTATUSNM");
        			if(this.fv_SURVTERM != "Y") SURVPROSTATUSNM = SURVPROSTATUSNM + " (조사기간 아님)" ;
        			this.Div.form.sub_state.form.state_result.set_text(SURVPROSTATUSNM);

        			/*
        			var SCHNM = this.ds_school_list.getColumn(0,"SCHNM");
        			var ORGNM = this.ds_school_list.getColumn(0,"ORGNM");
        			this.Div.form.sel_box02.form.txt_sh_nm.set_text( SCHNM );
        			this.Div.form.sel_box02.form.txt_sh_or.set_text( ORGNM );
        			*/

        			if( SURVPROSTATUSCD =="11" ){
        				this.Div.form.btn_submit.set_visible(false);
        			}else{
        				this.Div.form.btn_submit.set_visible(true);
        			}

        			if(this.fv_CHANGEYN =="Y"){
        				this.utlf_enableBtn(this.Div,false);
        			}
        			this.getErrCnt();// 오류 갯수
        		}
        		if(serviceID == "statusSave"){
        			//this.reload();
        			//this.alert("제출 처리되었습니다. 공문에 출력물을 첨부하여 제출해주세요.");
        			this.alert("제출 처리되었습니다.");
        			this.selectSchoolInfo();
        		}
        		if(serviceID == "getErrCnt"){
        			// 등록 오류 개수
        			var resultVal = objApp.gds_rtn_result.getColumn(0, "RESULTVAL");
        			this.fv_ERRCNT  = resultVal;

        		}

        		if(serviceID == "listQuestionNullChk"){

        			var nCnt = this.dsNCnt.getColumn(0,"FILE_NULL_CNT");

        			if(nCnt>0){

        				var SURVPROSTATUSCD = this.ds_school_list.getColumn(0,"SURVPROSTATUSCD");   // 상태코드

        				var SURVSEQ 	= this.fv_SURVSEQ;
        				var SURVKINDCD	= this.fv_SURVKINDCD;
        				var SCHCD  		= this.fv_SCHCD;
        				var ORGCD  		= this.fv_ORGCD;

        				var objFrame = new ChildFrame();

        				var fnm = "graduCntNew.mrd";
        				var param = "SURVSEQ["+SURVSEQ+"] SURVKINDCD["+SURVKINDCD+"] SCHCD["+SCHCD+"] ORGCD["+ORGCD+"] PRINT_GB[]";
        				var objParam = {param1:fnm , param2:param };
        				this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "결과출력",  objParam.param1 + " " + param);  //결과출력
        				objFrame.init( "CMRdViewer", null, null, 600, 600);
        				objFrame.set_showtitlebar(false);
        				objFrame.set_openalign("center middle");
        				objFrame.set_formurl( "CM::CMRdViewer.xfdl" );

        				objFrame.showModal("CMRdViewer" ,this.getOwnerFrame() ,objParam );
        			}else{
        				alert("설문에 먼저 응답하셔야 합니다.");
        				window.open('/swiss/index.html?linkType=HP_QUESTION','_blank');
        			}
        		}

        		if(serviceID == "close_alert"){
        			this.fn_goPage("GP::gp01m00.xfdl");
        		}

        		if(serviceID == "chkActive"){
        			//alert("rtn chkActive");
        			var chkStatus = this.dsActive.getColumn(0, "PAGESTATUS");
        			var chkMsg = this.dsActive.getColumn(0, "RTNMSG");
        			var chkCnt = this.dsActive.getColumn(0, "CNT");
        			var chkRow = this.dsActive.rowcount;
        			//alert("chkCnt="+chkCnt);

        /*
        var nW = 500;
        var nH = 400;

        var objApp = nexacro.getApplication();
        var nLeft = (objApp.mainframe.width  / 2) - Math.round(nW / 2);
        var nTop  = (objApp.mainframe.height / 2) - Math.round(nH / 2) ;
        nLeft = system.clientToScreenX(this, nLeft);
        nTop  = system.clientToScreenY(this, nTop);
        //alert(0);
        var objParam = {};
        //alert(1);
        var sOpenStyle = "dragmovetype=all"
                     + " resizable=true"
                     + " titletext=Modaless"
                     + " showtitlebar=true"
                     + " showstatusbar=false";
        //alert(2);
        nexacro.open("chf_popup3"
                   , "AD::popAlert.xfdl"
                   , this.getOwnerFrame()
                   , objParam
                   , sOpenStyle
                   , nLeft
                   , nTop
                   , nW
                   , nH
                   , this);
        */
        //alert(0);

        /*
        var objChildFrame = new ChildFrame();
            objChildFrame.init("close_alert"
                              , 0
                              , 0
                              , 0
                              , 0
                              , null
                              , null
                              , "AD::popAlert.xfdl");
        //alert(1);
            objChildFrame.set_dragmovetype("none");
            objChildFrame.set_openalign("center middle");
            objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)")
        //alert(2);
            var objParam = {param1:600,param2:150,param3:chkMsg};
        //alert(3);

            objChildFrame.showModal(this.getOwnerFrame()
                                  , objParam
                                  , this
                                  , "fnCallback");
        */
        			if(chkStatus!=1){
        				this.callModal(1200,300,"CM::popAlert.xfdl","close_alert",chkMsg);
        			}
        		}

         	}


        }

        this.fp07m00_onload = function(obj,e)
        {
        	this.chkActive();

        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='GP'",0);

        	this.fv_USERID     = objApp.gds_login_info.getColumn(idx, "USERID") ;
        	this.fv_SURVKINDCD = objApp.gds_login_info.getColumn(idx, "SURVKINDCD");
        	this.fv_CHANGEYN   = objApp.gds_login_info.getColumn(0, "CHANGEYN");
        	this.fv_USERGRPTYPE = objApp.gds_login_info.getColumn(idx, "USERGRPTYPE");

        	this.fv_SCHCD      = objApp.gds_param.getColumn(0, "SCHCD");
        	this.fv_ORGCD      = objApp.gds_param.getColumn(0, "ORGCD");

        	this.lfn_divSurvSet();									// 기본정보 설정

        	this.selectSchoolInfo();
        };

        this.selectSchoolInfo = function(){

        	var strParam = "";
        	strParam += "tmp="				+ "a" 					+ "ª";
        	strParam += "STATUSparamCD="	+ "0081" 				+ "ª";  // 졸업자
        	strParam += "SURVSEQ="			+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="		+ this.fv_SURVKINDCD 	+ "ª";
        	strParam += "SCHCD="			+ this.fv_SCHCD 		+ "ª";
        	strParam += "ORGCD="			+ this.fv_ORGCD 		+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "결과제출 조회", strParam);  //결과제출 조회
        	this.gfnTransaction("selectSchoolInfo",
        						"/swiss/fp/baserel/selectSchoolInfo.do",
        						"dsSearch=dsSearch",
        						"ds_school_list=dsResult",
        						"",
        						"fnCallback",
        						false);


        };

        //  등록 오류 개수 가져오기
        this.getErrCnt = function(){

        	var strParam = "";
        	strParam += "tmp="				+ "a" 					+ "ª";
        	strParam += "SURVSEQ="			+ this.fv_SURVSEQ		+ "ª";
        	strParam += "SURVKINDCD="		+ this.fv_SURVKINDCD	+ "ª";
        	strParam += "SCHCD="			+ this.fv_SCHCD 		+ "ª";
        	strParam += "ORGCD="			+ this.fv_ORGCD 		+ "ª";

        	//alert(2);
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.gfnTransaction("getErrCnt",
        						"/swiss/fp/insertrel/getErrCnt.do",
        						"dsSearch=dsSearch",
        						"gds_rtn_result=dsResult",
        						"",
        						"fnCallback",
        						false);
        };



        // 공문출력
        this.btn_pub_print_onclick = function(obj,e)
        {
        /*
        	if(this.fv_SURVTERM !=  "Y"){
        		//this.alert("선택된 학교는 조사기간이 아닙니다.");
        		//return;
        	}

        	var SURVPROSTATUSCD = this.ds_school_list.getColumn(0,"SURVPROSTATUSCD");   // 상태코드

        	if(  SURVPROSTATUSCD != "11" &&  SURVPROSTATUSCD != "12"  ){
        		this.alert("출력 가능한 상태가 아닙니다. 결과제출 이후 출력이 가능합니다.");
        		return;
        	}

        	var newRow = this.dsChkCnt.addRow();

        	this.dsChkCnt.setColumn(newRow,"CHK_SURVSEQ",this.fv_SURVSEQ);
        	this.dsChkCnt.setColumn(newRow,"CHK_SURVKINDCD",this.fv_SURVKINDCD);
        	this.dsChkCnt.setColumn(newRow,"CHK_USERID",this.fv_USERID);

        	this.gfnTransaction("listQuestionNullChk",
        						"/swiss/gp/baserel/listQuestionNullChk.do",
        						"dsChkCnt=dsChkCnt",
        						"dsNCnt=dsNCnt",
        						"",
        						"fnCallback",
        						false);
        */
        			var nCnt = this.dsNCnt.getColumn(0,"FILE_NULL_CNT");
        /*
        			if(nCnt>0){
        */
        				var SURVPROSTATUSCD = this.ds_school_list.getColumn(0,"SURVPROSTATUSCD");   // 상태코드

        				var SURVSEQ 	= this.fv_SURVSEQ;
        				var SURVKINDCD	= this.fv_SURVKINDCD;
        				var SCHCD  		= this.fv_SCHCD;
        				var ORGCD  		= this.fv_ORGCD;

        				var objFrame = new ChildFrame();

        				var fnm = "graduCntNew.mrd";
        				var param = "SURVSEQ["+SURVSEQ+"] SURVKINDCD["+SURVKINDCD+"] SCHCD["+SCHCD+"] ORGCD["+ORGCD+"] PRINT_GB[]";
        				var objParam = {param1:fnm , param2:param };
        				this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "결과출력",  objParam.param1 + " " + param);  //결과출력
        				objFrame.init( "CMRdViewer", null, null, 600, 600);
        				objFrame.set_showtitlebar(false);
        				objFrame.set_openalign("center middle");
        				objFrame.set_formurl( "CM::CMRdViewer.xfdl" );

        				objFrame.showModal("CMRdViewer" ,this.getOwnerFrame() ,objParam );
        /*
        			}else{
        				alert("설문에 먼저 응답하셔야 합니다.");
        				window.open('/swiss/index.html?linkType=HP_QUESTION','_blank');
        			}
        */
        };


        // 취업-인적정보KEDI제출
        this.btn_con_onclick = function(obj,e)
        {
        	if(this.fv_SURVTERM !=  "Y"){
        		this.alert("선택된 학교는 조사기간이 아닙니다.");
        		return;
        	}

        	if( this.fv_ERRCNT != "0"){
        		this.alert("등록된 자료에 오류건이 "+this.fv_ERRCNT+"건 존재합니다. 정보재등록 후 진행 해 주세요.");
        		return;
        	}

        	/*
        	0081	1	졸업자수 미제출
        	0081	2	취업-졸업자수 수정요청
        	0081	3	KEDI-졸업자수 수정완료
        	0081	4	취업-졸업자수 제출완료
        	0081	5	KEDI-졸업자수 반려
        	0081	6	취업-졸업생정보 등록요청
        	0081	7	전산-졸업생정보 등록
        	0081	8	전산-졸업생정보 제출
        	0081	9	취업-졸업생정보 승인
        	0081	10	취업-졸업생정보 반려
        	0081	11	취업-졸업생정보 제출
        	0081	12	KEDI-졸업생정보 승인
        	0081	13	KEDI-졸업생정보 반려

        	*/
        	var CHGCOMYN = this.ds_school_list.getColumn(0,"CHGCOMYN");
        	var SURVPROSTATUSCD = this.ds_school_list.getColumn(0,"SURVPROSTATUSCD");

        	// 제출조건
        	if( SURVPROSTATUSCD == "4"   ){
        		this.alert("제출 가능한 상태가 아닙니다. 파일등록 이후 제출이 가능합니다.");
        		return;
        	}
        	if( SURVPROSTATUSCD == "11"   ){
        		this.alert("이미 제출 하셨습니다. 수정사항이 있다면 파일등록 후 다시 제출해주세요.");
        		return;
        	}
        	if( SURVPROSTATUSCD == "12"   ){
        		this.alert("KEDI-승인상태로 제출하실 수 없습니다. 수정요청을 원하시면 KEDI로 연락 후 반려처리 하셔야 합니다.");
        		return;
        	}

        	if(CHGCOMYN == '1'){
        	// 다타입
        		if( SURVPROSTATUSCD != "9"   ){
        			this.alert("제출 가능한 상태가 아닙니다. 전산담당자가 제출한 졸업생정보 승인 이후 제출이 가능합니다.");
        			return;
        		}
        	}else{
        	// 나타입
        		if( SURVPROSTATUSCD != "7"   ){
        			this.alert("제출 가능한 상태가 아닙니다. 졸업생정보 등록 이후 제출이 가능합니다.");
        			return;
        		}
        	}

        	if(!this.confirm("제출하시겠습니까?")){
        		return;
        	}

        	//alert("bef save");

        	this.fv_RCEPTCN = "" ;
        	this.statusSave();
        };


        // 상태 처리
        this.statusSave = function()
        {
        	//this.alert("start save="+this.fv_STATUSCD);

        	var strParam = "";
        	strParam += "tmp="			+ "a" 		+ "ª";
        	strParam += "SURVSEQ="		+ this.ds_school_list.getColumn(0,"SURVSEQ")		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD		+ "ª";

        	strParam += "SCHCD="		+ this.ds_school_list.getColumn(0,"SCHCD")		+ "ª";
        	strParam += "ORGCD="		+ this.ds_school_list.getColumn(0,"ORGCD")		+ "ª";
        	strParam += "RCEPTCN="		+ this.fv_RCEPTCN		+ "ª";
        	strParam += "STATUSCD="		+ "11"		+ "ª";	// 상태 (취업-인적정보KEDI제출)

        	this.Div.form.btn_submit.set_visible(false);

        //alert("bef go save");
        //alert("strparam="+strParam);
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "제출", strParam);  //결과제출
        	this.gfnTransaction("statusSave",
        						"/swiss/fp/insertrel/saveSurvHist.do",
        						"dsSearch=dsSearch",
        						"gds_rtn_result=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        //메뉴이동
        this.lfn_goMenu = function(obj,e)
        {
        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='GP'",0);
        	this.fv_USERGRPTYPE = objApp.gds_login_info.getColumn(idx, "USERGRPTYPE");
        	var menuid = obj.id ;

        	if("5" == this.fv_USERGRPTYPE){
        		if("gp03m00" !=menuid && "gp04m00" !=menuid
        			&& "gp05m00" !=menuid ){
        			alert("화면에 대한 권한이 없습니다.");
        			return;
        		}
        	}

        	this.fn_goPage("GP::"+menuid +".xfdl");
        };

        this.lfn_divSurvSet = function(){

        	/*조사기준, 조사기간 설정 : 현재시간에 해당하는 설정 확인*/
        	var toDate     = objApp.gds_param.getColumn(0, "TODATE");
        	var survStrtdt = objApp.gds_param.getColumn(0, "SURVSTRTDT");
        	var survEnddt  = objApp.gds_param.getColumn(0, "SURVENDDT");
        	if(toDate >= survStrtdt && toDate <= survEnddt){
        		this.fv_SURVSEQ = objApp.gds_param.getColumn(0, "SURVSEQ");
        		this.fv_SURVOBJ = objApp.gds_param.getColumn(0, "SURVOBJ");
        		this.fv_SURVSTRTDT = objApp.gds_param.getColumn(0, "SURVSTRTDT");
        		this.fv_SURVENDDT = objApp.gds_param.getColumn(0, "SURVENDDT");
        		this.fv_SURVNM = objApp.gds_param.getColumn(0, "SURVNM");

        	}else{
        		var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='GP'",0);

        		this.fv_SURVSEQ = objApp.gds_login_info.getColumn(idx, "SURVSEQ");
        		this.fv_SURVOBJ = objApp.gds_login_info.getColumn(idx, "SURVOBJ");
        		this.fv_SURVSTRTDT = objApp.gds_login_info.getColumn(idx, "SURVSTRTDT");
        		this.fv_SURVENDDT = objApp.gds_login_info.getColumn(idx, "SURVENDDT");
        		this.fv_SURVNM = objApp.gds_login_info.getColumn(idx, "SURVNM");
        	}

        	this.Div.form.sub_research01.form.reser_st_result.set_text(this.fv_SURVSEQ.substr(0,2)+"."+this.fv_SURVSEQ.substr(2,2)+"."+this.fv_SURVSEQ.substr(4,2)) ;
        	this.Div.form.sub_research01.form.reser_date_result.set_text(this.fv_SURVOBJ) ;
        	var survinfo = this.fv_SURVSTRTDT.substr(0,4)+"."+this.fv_SURVSTRTDT.substr(4,2)+"."+this.fv_SURVSTRTDT.substr(6,2)
        					+" ~ "+this.fv_SURVENDDT.substr(0,4)+"."+this.fv_SURVENDDT.substr(4,2)+"."+this.fv_SURVENDDT.substr(6,2)
        					+" ( "+this.fv_SURVNM+" )";
        	this.Div.form.sub_research01.form.reser_obj_result.set_text(survinfo) ;

        	// ----------- 선택 학교 조사기간 확인
        	if(this.fv_SURVSTRTDT > toDate || this.fv_SURVENDDT < toDate){
        		this.fv_SURVTERM =  "N";
        	}else{
        		this.fv_SURVTERM =  "Y";
        	}
        };

        this.btn_pub_print00_onclick = function(obj,e)
        {
        				alert("설문에 먼저 응답하셔야 합니다.");
        				window.open('/swiss/index.html?linkType=HP_QUESTION','_self');
        };

        this.chkActive = function(){
        	var strParam = "";
        	strParam += "PAGEGROUP=GPª";
        	strParam += "PAGEID=" + this.fv_MENUID + "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	////trace(this.dsSearch.saveXML());
        	//alert(strParam);
        	//return false;

        	//alert("start active");

        	this.gfnTransaction("chkActive",
        						"/swiss/ad/user/chkActive.do",
        						"dsSearch=dsSearch",
        						"dsActive=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fp07m00_onload,this);
            this.Div.form.stepArea00_00_00_00_00_00.form.gp01m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_00_00_00_00_00.form.gp02m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_00_00_00_00_00.form.gp03m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_00_00_00_00_00.form.gp04m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_00_00_00_00_00.form.gp05m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_00_00_00_00_00.form.gp06m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_00_00_00_00_00.form.gp07m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.btn_submit.addEventHandler("onclick",this.btn_con_onclick,this);
            this.Div.form.Grid.addEventHandler("oncellclick",this.gird_wrap02_oncellclick,this);
            this.Div.form.btn_pub_print.addEventHandler("onclick",this.btn_pub_print_onclick,this);
            this.Div.form.btn_pub_print00.addEventHandler("onclick",this.btn_pub_print00_onclick,this);
        };

        this.loadIncludeScript("gp07m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
