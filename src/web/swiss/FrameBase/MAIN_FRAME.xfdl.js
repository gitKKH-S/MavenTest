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
                this._setFormPosition(1280,1000);
            }

            

            // Object(Dataset, ExcelExportObject) Initialize

            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            

            // UI Components Initialize

            obj = new Div("div_content","0%","165",null,null,"0","371","1201",null,"100",null,this);
            obj.set_taborder("1");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","0","0","1200",null,null,"0",null,null,null,null,this.div_content.form);
            obj.set_taborder("0");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            this.div_content.addChild(obj.name, obj);

            obj = new Div("div_nomagin","-30","0",null,null,"-30","0",null,null,null,null,this.div_content.form.div_work.form);
            obj.set_taborder("0");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollindicatorsize("0");
            this.div_content.form.div_work.addChild(obj.name, obj);

            obj = new Div("div_footer","0.00%",null,null,"371","0","0","1201",null,"371",null,this);
            obj.set_taborder("2");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollindicatorsize("0");
            obj.set_cssclass("footerInner");
            obj.set_border("1px solid #d9d9d9,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","5%","0%",null,null,"5%","0%","1200","1200",null,null,this.div_footer.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_url("FrameBase::Form_Bottom.xfdl");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollindicatorsize("0");
            this.div_footer.addChild(obj.name, obj);

            obj = new Div("div_header","0%","0%",null,"165","0",null,"1201",null,"165",null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollindicatorsize("0");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","0","117","1200","42",null,null,"1200",null,null,null,this.div_header.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_formscrollindicatorsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarbarminsize("0");
            obj.set_background("#e5e5e5");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("top_navi_tit",null,"5","380","29","810",null,null,null,null,null,this.div_header.form.div_work.form);
            obj.set_taborder("0");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            obj.set_color("#6d6d6d");
            this.div_header.form.div_work.addChild(obj.name, obj);

            obj = new Static("label_myInfo","460","8",null,"24","470",null,null,null,null,null,this.div_header.form.div_work.form);
            obj.set_taborder("1");
            obj.set_text("내정보");
            obj.set_color("#6d6d6d");
            obj.set_textAlign("right");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_header.form.div_work.addChild(obj.name, obj);

            obj = new Static("Static00","792","8","50","24",null,null,null,null,null,null,this.div_header.form.div_work.form);
            obj.set_taborder("2");
            obj.set_text("[학교명] ");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_color("#6d6d6d");
            this.div_header.form.div_work.addChild(obj.name, obj);

            obj = new Combo("sel_schooNm","850","8","340","24",null,null,null,null,null,null,this.div_header.form.div_work.form);
            obj.set_taborder("3");
            obj.set_codecolumn("SCHCD");
            obj.set_datacolumn("SCHTEXT3");
            obj.set_innerdataset("gds_charge_school");
            obj.set_accessibilitylabel("학교명");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_header.form.div_work.addChild(obj.name, obj);

            obj = new Div("div_top","0.00%","0.00%",null,"113","0.00%",null,"1201",null,"113",null,this);
            obj.set_taborder("3");
            obj.set_accessibilityrole("form");
            obj.set_cssclass("gnbWrap");
            obj.set_background("#ffffff");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollindicatorsize("0");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","5%","0%","1200",null,null,"0%","1200","1200",null,null,this.div_top.form);
            obj.set_taborder("0");
            obj.set_accessibilitydesclevel("child");
            obj.set_url("FrameBase::Form_Top.xfdl");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollindicatorsize("0");
            obj.set_text("");
            this.div_top.addChild(obj.name, obj);

            obj = new Div("div_gnb_menu","1456","80","220","540",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_url("FrameBase::Form_Top_Menu.xfdl");
            obj.set_visible("false");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollindicatorsize("0");
            this.addChild(obj.name, obj);



            // Layout Functions

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,1000,this,function(p){});
            this.addLayout(obj.name, obj);

            

            // BindItem Information



        };

        

        this.loadPreloadList = function()

        {

            this._addPreloadList("fdl","FrameBase::Form_Bottom.xfdl");
            this._addPreloadList("fdl","FrameBase::Form_Top.xfdl");
            this._addPreloadList("fdl","FrameBase::Form_Top_Menu.xfdl");

        };

        

        // User Script

        this.registerScript("MAIN_FRAME.xfdl", function() {
        var workList = [];	//1200px 가운데 고정 목록

        this.Form_Work_oninit = function(obj,e)
        {
        	this.selectSessionChk();
        	var objApp = nexacro.getApplication();

        	var chk = objApp.gds_login_info.getColumn(0, "LOGIN_YN");	// 로그인 여부

        	var category = nexacro.getEnvironmentVariable("html_link_type");

        	if(chk != "Y" && category != "HP_PRIVACY"){
        		this.fn_initPage("FrameBase::Form_main.xfdl");
        		this.alert("로그인 후 사용 가능 합니다.");
        		// window.location.href=nexacro.getEnvironment().services["svcBaseUrl"].url;
        		// this.fn_goPage("HP::hp10m00.xfdl");
        		window.location.href=nexacro.getEnvironment().services["svcBaseUrl"].url;
        		return;
        	}else if(chk != "Y" && category == "HP_PRIVACY"){
        		this.div_header.form.div_work.form.top_navi_tit.visible = false;
        		this.div_header.form.div_work.form.label_myInfo.visible = false;
        		this.div_header.form.div_work.form.Static00.visible = false;
        		this.div_header.form.div_work.form.sel_schooNm.visible = false;
        		this.div_top.form.div_work.set_url("FrameBase::Form_TopNot.xfdl");
        	}else{
        		var usrNm = objApp.gds_login_info.getColumn(0, "USERNM");
        		var grpNm = objApp.gds_login_info.getColumn(0, "USERGRPNM");

        		this.div_header.form.div_work.form.label_myInfo.set_text("[" + grpNm + "] " + usrNm + "님");

        		this.selectChgSchool("AG");
        	}
        };

        this.Form_Work_onload = function(obj,e)
        {
        	//전역 변수 초기화
        	__gnb_menu = this.div_gnb_menu;
        	__gnb_navi = this.div_header.form.div_work;
        	__content = this.div_content.form.div_work;
        	__footer = this.div_footer;
        	__work_magin = false;
        	__work_page_url = "";

        	gnb_1d= "mm" //초기화 안할시 오류로 인하여 임시 변수 등록
        	browserMargin = (this.width/2) - (1200/2);

        	//1200px 가운데 고정 목록 등록
        	var headerTopWork = this.div_top.form.div_work;
        	var headerWork = this.div_header.form.div_work;
        	var contentWork = this.div_content.form.div_work;
        	var footerWork = this.div_footer.form.div_work;

        	workList.push(headerTopWork,headerWork,contentWork,footerWork);

        	workSizeInit(this.width);

        	this.div_content.set_formscrolltype( "vertical" );
        	//this.div_content.form.div_work.set_formscrolltype( "vertical" );

        	this.initPage();
        };

        this.Form_Work_onsize = function(obj,e)
        {
        	workSizeInit(e.cx);
        };

        /*	1200px 가운데 고정
        *	cx : 브라우저 넓이
        */
        function workSizeInit(cx)
        {

        	for(var i = 0 ;i< workList.length;i++){
        		var nCompWidth = workList[i].getOffsetWidth();
        		var nCompX = (cx/2) - (nCompWidth/2);
        		if(cx<1200){
        			nCompX = 0;
        		}
        		workList[i].setOffsetLeft(nCompX);
        	}
        	open2DepthGnbLeft(nCompX);
        	browserMargin = nCompX;

        };

        this.div_content_onmouseenter = function(obj,e)
        {
        	//close2DepthGnb();
        };

        this.div_content_div_work_div_nomagin_btn_00_onclick = function(obj,e)
        {
        	//this.fn_initPage("FrameBase::MAIN_FRAME.xfdl");
        	//var objApp 		= nexacro.getApplication();
        	//objApp.mainframe.fullFrame.set_formurl("FrameBase::MAIN_FRAME.xfdl");
        	//objApp.mainframe.fullFrame.set_formurl("FrameBase::MAIN_FRAME.xfdl");

        	nexacro.getApplication().mainframe.fullFrame.set_formurl("FrameBase::MAIN_FRAME.xfdl");

        };

        this.initPage = function(){

        	//var category = nexacro.getPrivateProfile("pageCd");
        	//nexacro.setPrivateProfile("pageCd", "")
        	//var appObj = nexacro.getApplication();

        	var category = nexacro.getEnvironmentVariable("html_link_type");
        	if(category == "MY"){
        		gnb_1d  = "m-01";
        		gnb_2d  = "m-01-01";
        		gnb_3d  = "myPage";
        		gnb_1d_name = "내정보";
        		gnb_2d_name = "내정보 수정";
        		gnb_3d_name = "";
        	} else if(category == "HP_NOTICE"){
        		gnb_1d  = "m-01";
        		gnb_2d  = "m-01-01";
        		gnb_3d  = "";
        		gnb_1d_name = "알림소식";
        		gnb_2d_name = "공지사항";
        		gnb_3d_name = "";

        	} else if(category == "HP_NEWS"){
        		gnb_1d  = "m-01";
        		gnb_2d  = "m-01-02";
        		gnb_3d  = "";
        		gnb_1d_name = "알림소식";
        		gnb_2d_name = "취업통계소식";
        		gnb_3d_name = "";
        	} else if(category == "HP_PDS"){
        		gnb_1d  = "m-01";
        		gnb_2d  = "m-01-03";
        		gnb_3d  = "";
        		gnb_1d_name = "알림소식";
        		gnb_2d_name = "자료실";
        		gnb_3d_name = "";
        	} else if(category == "HP_FAQ"){
        		gnb_1d  = "m-01";
        		gnb_2d  = "m-01-04";
        		gnb_3d  = "";
        		gnb_1d_name = "알림소식";
        		gnb_2d_name = "FAQ";
        		gnb_3d_name = "";
        	} else if(category == "HP_QNA"){
        		gnb_1d  = "m-01";
        		gnb_2d  = "m-01-05";
        		gnb_3d  = "";
        		gnb_1d_name = "알림소식";
        		gnb_2d_name = "Q&A";
        		gnb_3d_name = "";
        	} else if(category == "HP_QUESTION"){
        		gnb_1d  = "m-01";
        		gnb_2d  = "m-01-06";
        		gnb_3d  = "";
        		gnb_1d_name = "알림소식";
        		gnb_2d_name = "설문조사";
        		gnb_3d_name = "";
        	} else if(category == "GP"){
        		gnb_1d  = "m-02";
        		gnb_2d  = "m-02-01";
        		gnb_3d  = "";
        		gnb_1d_name = "졸업생정보";
        		gnb_2d_name = "조사개요";
        		gnb_3d_name = "";
        	} else if(category == "FP"){
        		gnb_1d  = "m-03";
        		gnb_2d  = "m-03-01";
        		gnb_3d  = "";
        		gnb_1d_name = "신입생정보";
        		gnb_2d_name = "조사개요";
        		gnb_3d_name = "";
        	} else if(category == "AG"){
        		gnb_1d  = "m-04";
        		gnb_2d  = "m-04-01";
        		gnb_3d  = "";
        		gnb_1d_name = "졸업 후 상황";
        		gnb_2d_name = "조사개요";
        		gnb_3d_name = "";
        	} else if(category == "RT"){
        		gnb_1d  = "m-05";
        		gnb_2d  = "m-05-01";
        		gnb_3d  = "";
        		gnb_1d_name = "조사결과";
        		gnb_2d_name = "조사결과";
        		gnb_3d_name = "";
        	} else if(category == "VS"){
        		gnb_1d  = "m-06";
        		gnb_2d  = "m-06-01";
        		gnb_3d  = "";
        		gnb_1d_name = "진로탐색";
        		gnb_2d_name = "진로탐색";
        		gnb_3d_name = "";
        	} else if(category == "HP_NOTICE_DETAIL"){
        		gnb_1d  = "m-01";
        		gnb_2d  = "m-01-01";
        		gnb_3d  = "noticeDetail";
        		gnb_1d_name = "알림소식";
        		gnb_2d_name = "공지사항";
        		gnb_3d_name = "";

        		var strParam = "BBSNO=" + nexacro.getEnvironmentVariable("html_link_bbsno") + "ª";
        		nexacro.setPrivateProfile("bbsNo", "")
        		dsParamSetArrowBlank(nexacro.getApplication().gds_param, strParam);
        	} else if(category == "HP_LOGIN"){
        		this.fn_goPage("HP::hp10m00.xfdl");
        	}
        	openContent();
        }

        this.fnCallback = function(serviceID, errCD, errMSG){
        	var objApp = nexacro.getApplication();

        	if(errCD < 0){

        	}else{
        		if(serviceID == "selectSessionChk"){

        		}
        		if(serviceID == "selectChgSchool"){
        			var idx = 0;
        			if(objApp.gds_charge_school.findRowExpr("SCHCD == '"+objApp.gds_param.getColumn(0,"SCHCD")+"' && ORGCD == '"+objApp.gds_param.getColumn(0,"ORGCD")+"'",0) > -1) {
        				idx = objApp.gds_charge_school.findRowExpr("SCHCD == '"+objApp.gds_param.getColumn(0,"SCHCD")+"' && ORGCD == '"+objApp.gds_param.getColumn(0,"ORGCD")+"'",0);
        			}
        			this.div_header.form.div_work.form.sel_schooNm.set_index(idx);
        			objApp.gds_param.setColumn(0,"SURVSEQ"           ,objApp.gds_charge_school.getColumn(obj.index, "SURVSEQ"));
        			objApp.gds_param.setColumn(0,"SCHCD"             ,objApp.gds_charge_school.getColumn(obj.index, "SCHCD"));
        			objApp.gds_param.setColumn(0,"ORGCD"             ,objApp.gds_charge_school.getColumn(obj.index, "ORGCD"));
        			objApp.gds_param.setColumn(0,"SCHNM"             ,objApp.gds_charge_school.getColumn(obj.index, "SCHNM"));
        			objApp.gds_param.setColumn(0,"ORGNM"             ,objApp.gds_charge_school.getColumn(obj.index, "ORGNM"));
        			objApp.gds_param.setColumn(0,"SURVSTRTDT"        ,objApp.gds_charge_school.getColumn(obj.index, "SURVSTRTDT"));
        			objApp.gds_param.setColumn(0,"SURVENDDT"         ,objApp.gds_charge_school.getColumn(obj.index, "SURVENDDT"));
        			objApp.gds_param.setColumn(0,"SURVNM"            ,objApp.gds_charge_school.getColumn(obj.index, "SURVNM"));
        			objApp.gds_param.setColumn(0,"SURVOBJ"           ,objApp.gds_charge_school.getColumn(obj.index, "SURVOBJ"));
        			objApp.gds_param.setColumn(0,"TODATE"            ,objApp.gds_charge_school.getColumn(obj.index, "TODATE"));
        			objApp.gds_param.setColumn(0,"SURVPROSTATUSCD"   ,objApp.gds_charge_school.getColumn(obj.index, "SURVPROSTATUSCD"));
        			objApp.gds_param.setColumn(0,"SURVPROSTATUSCDNM" ,objApp.gds_charge_school.getColumn(obj.index, "SURVPROSTATUSCDNM"));
        			objApp.gds_param.setColumn(0,"SCHTEXT1"          ,objApp.gds_charge_school.getColumn(obj.index, "SCHTEXT1"));
        			objApp.gds_param.setColumn(0,"SCHTEXT2"          ,objApp.gds_charge_school.getColumn(obj.index, "SCHTEXT2"));
        			objApp.gds_param.setColumn(0,"SCHTEXT3"          ,objApp.gds_charge_school.getColumn(obj.index, "SCHTEXT3"));
        			objApp.gds_param.setColumn(0,"EVDDOCKIND"        ,objApp.gds_charge_school.getColumn(obj.index, "EVDDOCKIND"));
        			objApp.gds_param.setColumn(0,"CHGPSNYN"          ,objApp.gds_charge_school.getColumn(obj.index, "CHGPSNYN"));
        			objApp.gds_param.setColumn(0,"CHARGENM"          ,objApp.gds_charge_school.getColumn(obj.index, "CHARGENM"));
        			objApp.gds_param.setColumn(0,"OWNERNM"          ,objApp.gds_charge_school.getColumn(obj.index, "OWNERNM"));

        			var CHARGENM = "-";
        			if(objApp.gds_charge_school.rowcount > 0){
        				CHARGENM = objApp.gds_charge_school.getColumn(obj.index, "CHARGENM");
        				OWNERNM = objApp.gds_charge_school.getColumn(obj.index, "OWNERNM");
        			}
        			//this.div_header.form.div_work.form.top_navi_tit.set_text("[KEDI담당자] "+CHARGENM);
        			var chkUserGrpType = objApp.gds_login_info.getColumn(0,"USERGRPTYPE");

        			switch(chkUserGrpType){
        				case "6": //학과담당자
        					//alert("in 6");
        					this.div_header.form.div_work.form.top_navi_tit.set_text("[취업담당자] "+OWNERNM);
        					break;
        				default:
        					this.div_header.form.div_work.form.top_navi_tit.set_text("[KEDI담당자] "+CHARGENM);
        					break;
        			}

        		}
         	}
        }

        /* 로그인정보 가져오기 */
        this.selectSessionChk = function(){

        	this.gfnTransaction("selectSessionChk",
        						"swiss/cm/getSessionChk.do",
        						"",
        						"gds_login_info=dsLoginInfo",
        						"",
        						"fnCallback",
        						false);

        };

        /* 로그인사용자 학교정보 가져오기 */
        this.selectChgSchool = function(survGb){
        	var strParam = "";
        	var objApp = nexacro.getApplication();
        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='"+survGb+"'",0);

        	strParam += "SURVSEQ="		+ objApp.gds_login_info.getColumn(idx, "SURVSEQ")		+ "ª";
        	strParam += "SURVKINDCD="	+ objApp.gds_login_info.getColumn(idx, "SURVKINDCD")	+ "ª";
        	strParam += "USERID="		+ objApp.gds_login_info.getColumn(idx, "USERID") 		+ "ª";
        	strParam += "USERGRPTYPE="	+ objApp.gds_login_info.getColumn(idx, "USERGRPTYPE")	+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.gfnTransaction("selectChgSchool",
        						"swiss/cm/selectChgSchool.do",
        						"dsSearch=dsSearch",
        						"gds_charge_school=dsChgSchool",
        						"",
        						"fnCallback",
        						false);

        };

        this.getNavInfo = function(){
        	return this.div_header.form.div_work.text;

        }
        this.sel_schooNm_onitemchanged = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	objApp.gds_param.setColumn(0,"SURVSEQ"           ,objApp.gds_charge_school.getColumn(obj.index, "SURVSEQ"));
        	objApp.gds_param.setColumn(0,"SCHCD"             ,objApp.gds_charge_school.getColumn(obj.index, "SCHCD"));
        	objApp.gds_param.setColumn(0,"ORGCD"             ,objApp.gds_charge_school.getColumn(obj.index, "ORGCD"));
        	objApp.gds_param.setColumn(0,"SCHNM"             ,objApp.gds_charge_school.getColumn(obj.index, "SCHNM"));
        	objApp.gds_param.setColumn(0,"ORGNM"             ,objApp.gds_charge_school.getColumn(obj.index, "ORGNM"));
        	objApp.gds_param.setColumn(0,"SURVSTRTDT"        ,objApp.gds_charge_school.getColumn(obj.index, "SURVSTRTDT"));
        	objApp.gds_param.setColumn(0,"SURVENDDT"         ,objApp.gds_charge_school.getColumn(obj.index, "SURVENDDT"));
        	objApp.gds_param.setColumn(0,"SURVNM"            ,objApp.gds_charge_school.getColumn(obj.index, "SURVNM"));
        	objApp.gds_param.setColumn(0,"SURVOBJ"           ,objApp.gds_charge_school.getColumn(obj.index, "SURVOBJ"));
        	objApp.gds_param.setColumn(0,"TODATE"            ,objApp.gds_charge_school.getColumn(obj.index, "TODATE"));
        	objApp.gds_param.setColumn(0,"SURVPROSTATUSCD"   ,objApp.gds_charge_school.getColumn(obj.index, "SURVPROSTATUSCD"));
        	objApp.gds_param.setColumn(0,"SURVPROSTATUSCDNM" ,objApp.gds_charge_school.getColumn(obj.index, "SURVPROSTATUSCDNM"));
        	objApp.gds_param.setColumn(0,"SCHTEXT1"          ,objApp.gds_charge_school.getColumn(obj.index, "SCHTEXT1"));
        	objApp.gds_param.setColumn(0,"SCHTEXT2"          ,objApp.gds_charge_school.getColumn(obj.index, "SCHTEXT2"));
        	objApp.gds_param.setColumn(0,"SCHTEXT3"          ,objApp.gds_charge_school.getColumn(obj.index, "SCHTEXT3"));
        	objApp.gds_param.setColumn(0,"EVDDOCKIND"        ,objApp.gds_charge_school.getColumn(obj.index, "EVDDOCKIND"));
        	objApp.gds_param.setColumn(0,"CHGPSNYN"          ,objApp.gds_charge_school.getColumn(obj.index, "CHGPSNYN"));
        	objApp.gds_param.setColumn(0,"CHARGENM"          ,objApp.gds_charge_school.getColumn(obj.index, "CHARGENM"));
        	setGnbNavi("[KEDI담당자] "+objApp.gds_charge_school.getColumn(obj.index, "CHARGENM"));
        	this.fn_goOnPage(__work_page_url);
        };

        	this.Form_Work_onkeydown = function(obj,e)
        	{
        		if(e.keycode == 49 && e.altkey && e.ctrlkey && e.shiftkey){ // '1' + alt + ctr + shift
        			var objChildFrame = new ChildFrame();
        			objChildFrame.init("frmGetDatasets"
        							  , 0
        							  , 0
        							  , 1300
        							  , 700
        							  , null
        							  , null
        							  , "CM::frmGetDatasets_test.xfdl");
        			objChildFrame.set_showtitlebar(true);
        			objChildFrame.set_dragmovetype("all");
        			objChildFrame.set_openalign("center middle");
        			objChildFrame.set_autosize("false");
        			objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)");

        			objChildFrame.set_resizable("true") // set
        			var objParam = {};
        			objChildFrame.showModal(nexacro.getApplication().mainframe.fullFrame
        								  , objParam
        								  , nexacro.getApplication().mainframe.fullFrame.form.div_content.form.div_work.form.div_nomagin.form
        								  , "fn_popupCallback");
        		}
        	};

        });

        

        // Regist UI Components Event

        this.on_initEvent = function()

        {

            this.addEventHandler("onload",this.Form_Work_onload,this);
            this.addEventHandler("onsize",this.Form_Work_onsize,this);
            this.addEventHandler("oninit",this.Form_Work_oninit,this);
            this.addEventHandler("onkeydown",this.Form_Work_onkeydown,this);
            this.div_content.addEventHandler("onmouseenter",this.div_content_onmouseenter,this);
            this.div_header.form.div_work.form.sel_schooNm.addEventHandler("onitemchanged",this.sel_schooNm_onitemchanged,this);

        };



        this.loadIncludeScript("MAIN_FRAME.xfdl");

        this.loadPreloadList();

        

        // Remove Reference

        obj = null;

    };

}

)();
