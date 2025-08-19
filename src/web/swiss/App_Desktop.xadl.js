(function()
{
    return function()  
	{
        this.on_loadAppVariables = function()
        {		
            var obj = null;
            
            // global dataset
            obj = new Dataset("gds_left_menu", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_user_info", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JOJIK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SOSOK\" type=\"STRING\" size=\"256\"/><Column id=\"USER_GB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_login_info", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"USERNM\" type=\"STRING\" size=\"256\"/><Column id=\"USERGRPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USERGRPNM\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SURVYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSTRTDT\" type=\"STRING\" size=\"256\"/><Column id=\"SURVENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"SURVNM\" type=\"STRING\" size=\"256\"/><Column id=\"SURVOBJ\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGEYN\" type=\"STRING\" size=\"256\"/><Column id=\"ORGID\" type=\"STRING\" size=\"256\"/><Column id=\"ORGGRP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_charge_school", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSTRTDT\" type=\"STRING\" size=\"256\"/><Column id=\"SURVENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVNM\" type=\"STRING\" size=\"256\"/><Column id=\"SURVOBJ\" type=\"STRING\" size=\"256\"/><Column id=\"TODATE\" type=\"STRING\" size=\"256\"/><Column id=\"SURVPROSTATUSCD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVPROSTATUSCDNM\" type=\"STRING\" size=\"256\"/><Column id=\"SCHTEXT1\" type=\"STRING\" size=\"256\"/><Column id=\"SCHTEXT2\" type=\"STRING\" size=\"256\"/><Column id=\"SCHTEXT3\" type=\"STRING\" size=\"256\"/><Column id=\"EVDDOCKIND\" type=\"STRING\" size=\"256\"/><Column id=\"CHGPSNYN\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGENM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_auth_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENUID\" type=\"STRING\" size=\"256\"/><Column id=\"MENUNM\" type=\"STRING\" size=\"256\"/><Column id=\"MENULEVEL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_param", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTIONSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSTRTDT\" type=\"STRING\" size=\"256\"/><Column id=\"SURVENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"SURVNM\" type=\"STRING\" size=\"256\"/><Column id=\"SURVOBJ\" type=\"STRING\" size=\"256\"/><Column id=\"TODATE\" type=\"STRING\" size=\"256\"/><Column id=\"SURVPROSTATUSCD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVPROSTATUSCDNM\" type=\"STRING\" size=\"256\"/><Column id=\"SCHTEXT1\" type=\"STRING\" size=\"256\"/><Column id=\"SCHTEXT2\" type=\"STRING\" size=\"256\"/><Column id=\"SCHTEXT3\" type=\"STRING\" size=\"256\"/><Column id=\"EVDDOCKIND\" type=\"STRING\" size=\"256\"/><Column id=\"CHGPSNYN\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGENM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_top_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENUNM\" type=\"STRING\" size=\"256\"/><Column id=\"MENUID\" type=\"STRING\" size=\"256\"/><Column id=\"MENULEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"PAGEID\" type=\"STRING\" size=\"256\"/><Column id=\"TOPMENUID\" type=\"STRING\" size=\"256\"/><Column id=\"MENUORDER\" type=\"INT\" size=\"256\"/><Column id=\"UPMENUID\" type=\"STRING\" size=\"256\"/><Column id=\"PAGEURL\" type=\"STRING\" size=\"256\"/><Column id=\"CSSCLASSNO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENUNM\">열린소식</Col><Col id=\"MENUID\">m-01</Col><Col id=\"MENULEVEL\">0</Col><Col id=\"TOPMENUID\">HP</Col><Col id=\"PAGEID\">&lt;null&gt;</Col><Col id=\"MENUORDER\">2</Col><Col id=\"UPMENUID\">m</Col><Col id=\"PAGEURL\">&lt;null&gt;</Col><Col id=\"CSSCLASSNO\">01</Col></Row><Row><Col id=\"MENUNM\">졸업생정보</Col><Col id=\"MENUID\">m-02</Col><Col id=\"MENULEVEL\">0</Col><Col id=\"PAGEID\">&lt;null&gt;</Col><Col id=\"TOPMENUID\">GP</Col><Col id=\"MENUORDER\">3</Col><Col id=\"UPMENUID\">m</Col><Col id=\"PAGEURL\">&lt;null&gt;</Col><Col id=\"CSSCLASSNO\">02</Col></Row><Row><Col id=\"MENUNM\">신입생정보</Col><Col id=\"MENUID\">m-03</Col><Col id=\"MENULEVEL\">0</Col><Col id=\"PAGEID\">&lt;null&gt;</Col><Col id=\"TOPMENUID\">FP</Col><Col id=\"MENUORDER\">4</Col><Col id=\"UPMENUID\">m</Col><Col id=\"PAGEURL\">&lt;null&gt;</Col><Col id=\"CSSCLASSNO\">03</Col></Row><Row><Col id=\"MENUNM\">졸업 후 상황</Col><Col id=\"MENUID\">m-04</Col><Col id=\"MENULEVEL\">0</Col><Col id=\"PAGEID\">&lt;null&gt;</Col><Col id=\"TOPMENUID\">AG</Col><Col id=\"MENUORDER\">5</Col><Col id=\"UPMENUID\">m</Col><Col id=\"PAGEURL\">&lt;null&gt;</Col><Col id=\"CSSCLASSNO\">04</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_rtn_result", this);
            obj._setContents("<ColumnInfo><Column id=\"RESULTVAL\" type=\"STRING\" size=\"256\"/><Column id=\"RESULTTXT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_accesslog", this);
            obj._setContents("<ColumnInfo><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"USERNM\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIP\" type=\"STRING\" size=\"256\"/><Column id=\"USERGRPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"ALLMENUNM\" type=\"STRING\" size=\"256\"/><Column id=\"ACTION\" type=\"STRING\" size=\"256\"/><Column id=\"STRPARAM\" type=\"STRING\" size=\"256\"/><Column id=\"STRCOMMENT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this._addDataset(obj.name, obj);
            
            // global variable
            this._addVariable("g_update_man","system");
            this._addVariable("g_system_name","고등교육기관졸업자 취업통계조사");
            this._addVariable("g_crownix_sRptUrl","http://localhost:8080/crownix_rd/");
            this._addVariable("g_crownix_sUrl","http://localhost:8080/ReportingServer/service");
            this._addVariable("g_crownix_sId","crownix-viewer");
            this._addVariable("g_crownix_framePath","mainframe.fullFrame.form.");
            this._addVariable("g_crownix_html5_viewer","http://localhost:8080/crownix_rd/crownix_html5_viewer.html");
            this._addVariable("g_system_sUrl","http://localhost:8080/");
            this._addVariable("p_bbs_id","");
            
            obj = null;
        };
 
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("Application_Desktop");
            this.set_screenid("Desktop_screen");

            if (this._is_attach_childframe)
            	return;
        
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1280","720",null,null,this);
            mainframe.set_titletext("MidLeftFrame");
            mainframe.set_showcascadetitletext("false");
            mainframe.set_showtitleicon("false");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;        

            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var frame0 = new ChildFrame("fullFrame",null,null,null,null,null,null,"FrameBase::MAIN_FRAME.xfdl",this);
            frame0.set_dragmovetype("none");
            frame0.set_topmost("true");
            frame0.set_showtitlebar("false");
            frame0.set_showtitleicon("false");
            this.addChild(frame0.name, frame0);
            frame0.set_formurl("FrameBase::MAIN_FRAME.xfdl");

            this.frame=frame0;
        };
        
        this.on_initEvent = function()
        {
            this.mainframe.addEventHandler("onactivate",this.mainframe_onactivate,this);
        };
        
        // script Compiler
        this.registerScript("App_Desktop.xadl", function() {
        this.mainframe_onactivate = function(obj,e)
        {
        	obj.set_titletext(nexacro.getApplication().g_system_name);
        };

        /*	전역변수
        *	__gnb_menu : MAIN_FRAME -> div_gnb_menu(gnb 2dpth menu div)  컴포넌트
        *	__gnb_navi : MAIN_FRAME -> div_header - > div_work(gnb 경로 텍스트 div)  컴포넌트
        *	__content : MAIN_FRAME -> div_content - > div_work(컨텐츠  div)  컴포넌트
        *	__footer : MAIN_FRAME -> div_footer div(컨텐츠  div)  컴포넌트
        *	browserMargin : 1200px 이상 가운데 고정 left margin 값
        *	gnb_1d : 현재 content의 gnb 1depth code
        *	gnb_2d : 현재 content의 gnb 2depth code
        *	gnb_3d : 현재 content의 gnb 3depth code
        *	gnb_2d_name : 현재 content의 gnb 1depth name
        *	gnb_1d_name : 현재 content의 gnb 2depth name
        *	gnb_3d_name : 현재 content의 gnb 3depth name
        *	__work_page_url : 현재 content url
        */

        /*
        *	호출될 xfdl파일에 아래 xjs 반드시 호출 할것.
        *	include "CM::js/common.xjs"; //content 영역 초기화 onload 메서드 포함
        */

        /*	메뉴 컴포넌트 id,name 명명 규칙
        *	'1depth 목록 Button'의 name 	->  'btn_' 		+ 	MENUID		ex) btn_m-01
        *	'2depth 목록 Div'의 name 	->  	'div_'		+ 	MENUID		ex) div_m-01
        *	'2depth 목록 Button'의 name 	->  'btn_' 		+ 	MENUID		ex) btn_m-01-01
        *	'3depth 목록 Div'의 name 	->  	'div_'  	+ 	MENUID		ex) div_m-04-06
        *	'3depth 목록 Button'의 name 	->  'btn_' 		+ 	MENUID		ex) btn_m-04-06-01
        */


        /*	gnb 클릭 메서드 정의
        *	include "CM::js/common.xjs"; 인클루드 할것
        */
        openContent = function(h)
        {
        	var gotoUtl = "";
        	var ds_menu = nexacro.getApplication().gds_top_menu;

        	var category = nexacro.getEnvironmentVariable("html_link_type");
        	if(category== "MY"){								// 메인페이이 연계에 따른 별도 처리
        		gotoUtl = "HP/hp11m00";
        		nexacro.setEnvironmentVariable("html_link_type", "");
        	} else if(category== "HP_NOTICE"){
        		gotoUtl = "HP/hp01m00";
        		nexacro.setEnvironmentVariable("html_link_type", "");
        	} else if(category== "HP_NEWS"){
        		gotoUtl = "HP/hp02m00";
        		nexacro.setEnvironmentVariable("html_link_type", "");
        	} else if(category== "HP_PDS"){
        		gotoUtl = "HP/hp03m00";
        		nexacro.setEnvironmentVariable("html_link_type", "");
        	} else if(category== "HP_FAQ"){
        		gotoUtl = "HP/hp04m00";
        		nexacro.setEnvironmentVariable("html_link_type", "");
        	} else if(category== "HP_QNA"){
        		gotoUtl = "HP/hp05m00";
        		nexacro.setEnvironmentVariable("html_link_type", "");
        	} else if(category== "HP_QUESTION"){
        		gotoUtl = "HP/hp06m00";
        		nexacro.setEnvironmentVariable("html_link_type", "");
        	} else if(category== "HP_PRIVACY"){
        		gotoUtl = "HP/hp00m00";
        		nexacro.setEnvironmentVariable("html_link_type", "");


        	} else if(category== "GP"){
        		gotoUtl = "GP/gp01m00";
        		nexacro.setEnvironmentVariable("html_link_type", "");
        	} else if(category== "FP"){
        		gotoUtl = "FP/fp01m00";
        		nexacro.setEnvironmentVariable("html_link_type", "");
        	} else if(category== "AG"){
        		gotoUtl = "AG/ag01m00";
        		nexacro.setEnvironmentVariable("html_link_type", "");
        	} else if(category== "RT"){
        		gotoUtl = "RT/rt02m00";
        		nexacro.setEnvironmentVariable("html_link_type", "");
        	} else if(category== "VS"){
        		gotoUtl = "CA/ca01m00";
        		nexacro.setEnvironmentVariable("html_link_type", "");


        	} else if(gnb_3d== "noticeDetail"){
        		gotoUtl = "HP/hp01m02";
        		nexacro.setEnvironmentVariable("html_link_type", "");
        	} else if(gnb_3d== ""){
        		var urlRow = ds_menu.findRow( "MENUID" ,  gnb_2d);
        		gotoUtl =  ds_menu.getColumn(urlRow,"PAGEURL");
        	} else{
        		var urlRow = ds_menu.findRow( "MENUID" , gnb_3d );
        		 gotoUtl =  ds_menu.getColumn(urlRow,"PAGEURL");
        	}

        	gotoUtl =  gotoUtl.substr(0,2).toUpperCase() +  "::"+    gotoUtl.substr(3) +  ".xfdl";

        	if(__work_page_url != gotoUtl ){
        		__content.set_height(0);
        		__content.form.div_nomagin.set_height(0);
        		__content.parent.vscrollbar.set_pos(0);

        		//__content.set_url(gotoUtl);
        		__content.form.div_nomagin.set_formscrolltype("vertical");

        		__content.form.div_nomagin.set_url(gotoUtl);

        		__work_page_url = gotoUtl;
        	}
        	//alert(gotoUtl)
        	top_gnb_1d_select_init();
        };



        /*	gnb 2depth 메뉴 닫기
        */
        close2DepthGnb = function()
        {
        	__gnb_menu.set_left(30000);
        	__gnb_menu.set_top(110);
        	__gnb_menu.set_visible(false);
        	__gnb_menu.set_enable(false);

        	top_gnb_1d_select_init();

        };

        /*	gnb 2depth 메뉴 열기
        *	FrameBase::Form_Top_Menu.xfdl의 div_menu_서비스명 div를 보여준다.
        *	알림소식(HP),공통(CM),관리자(AD),졸업생정보(GP),신입생정보(FP),졸업후상황(AG),분석결과(RT),시각화(VS),기타(ET),연계(LK),검증(VF)
        *	임시 - 메인(MM), 진로탐색(TT)
        *	cpntCenter : gnb 1dept의 중심 좌표
        *	gnbName : 서비스명
        */
        open2DepthGnb = function(cpntCenter, gnbName)
        {
        	var selectGnb = __gnb_menu.form.all['div_' + gnbName];
        	var selectGnbList = __gnb_menu.form.all;
        	for(var i=0; i < selectGnbList.length;i++){
        		if(selectGnbList[i] instanceof Div){
        			selectGnbList[i].set_visible(false);
        			selectGnbList[i].set_enable(false);
        		}
        	}
        	selectGnb.set_left(0);
        	selectGnb.set_top(0);
        	selectGnb.set_visible(true);
        	selectGnb.set_enable(true);

        	__gnb_menu.set_left(browserMargin + cpntCenter - 110);
        	__gnb_menu.set_top(110);
        	__gnb_menu.set_visible(true);
        	__gnb_menu.set_enable(true);


        	__gnb_menu.set_height(selectGnb.height);

        };


        /*	gnb 2dept 메뉴 동적 높이변경
        */
        open2DepthGnbH = function(h)
        {
        	__gnb_menu.set_height(h);
        };

        /*	gnb 2depth 메뉴 동적 좌우 마진변경
        *	1200PX 전체 컨텐츠 웹에서 가운데로 구현
        */
        open2DepthGnbLeft = function(_left)
        {
        	__gnb_menu.set_left(__gnb_menu.left - browserMargin + _left);
        };


        /*	해더 gnb depth 경로 텍스트 변경
        */
        setGnbNavi = function(naviTitText)
        {
        	__gnb_navi.form.top_navi_tit.set_text(naviTitText);
        };

        });

        this.checkLicense("");
        
        this.loadPreloadList();
        this.loadCss("xcssrc::richtexteditor.xcss");
        this.loadIncludeScript("App_Desktop.xadl");
    };
}
)();
