(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Top");
            this.set_titletext("Form_Top");
            this.set_cssclass("list_2depth");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,112);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_topTmp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0","1200","111",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0","0","1200","111",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("gnbInner");
            obj.set_text("");
            obj.set_background("#ffffff");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_main_log","0","33","202","44",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_img");
            obj.set_background("url(\'theme::default/images/logo_top.png\') no-repeat");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_rs",null,"23","60","65","5",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("3");
            obj.set_text("원격지원");
            obj.set_borderRadius("0px");
            obj.set_background("url(\'theme::default/images/ico_control.png\') no-repeat center top #ffffff");
            obj.set_color("#0054d6");
            obj.set_font("14px/normal \"SpoqaHanSans-Bold\"");
            obj.set_verticalAlign("bottom");
            obj.set_fittocontents("width");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_logout",null,"23","55","65","btn_rs:10",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("로그아웃");
            obj.set_borderRadius("0px");
            obj.set_background("url(\'theme::default/images/ico_loginAfter.png\') no-repeat center top #ffffff");
            obj.set_color("#0054d6");
            obj.set_font("14px/normal \"SpoqaHanSans-Bold\"");
            obj.set_verticalAlign("bottom");
            obj.set_fittocontents("width");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_my",null,"23","65","65","btn_logout:10",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("2");
            obj.set_text("마이페이지");
            obj.set_borderRadius("0px");
            obj.set_background("url(\'theme::default/images/ico_myPage.png\') no-repeat center top #ffffff");
            obj.set_color("#0054d6");
            obj.set_font("14px/normal \"SpoqaHanSans-Bold\"");
            obj.set_verticalAlign("bottom");
            obj.set_fittocontents("width");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Div("div_gnb_1d","0","70","0","31",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("4");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new ImageViewer("iv_share",null,"9","50","65","10",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("5");
            obj.set_image("url(\'theme::default/images/ico_share.png\')");
            obj.set_color("transparent");
            obj.set_background("transparent");
            obj.set_fittocontents("width");
            obj.set_stretch("fixaspectratio");
            obj.set_visible("false");
            obj.set_text("");
            obj.set_cursor("pointer");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("label_share",null,"iv_share:-5","62","20","7",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("6");
            obj.set_text("화면공유");
            obj.set_color("#0054d6");
            obj.set_font("bold 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cursor("pointer");
            this.Div00.form.Div01.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1200,112,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Top.xfdl", function() {
        var cpntListInit;
        var objApp = nexacro.getApplication();

        this.Form_Top_onload = function(obj,e)
        {
        	this.fv_CHANGEYN = objApp.gds_login_info.getColumn(0, "CHANGEYN");
        	this.fv_USERGRPTYPE = objApp.gds_login_info.getColumn(0, "USERGRPTYPE");

        	if( this.fv_USERGRPTYPE =="2" || this.fv_USERGRPTYPE =="8" ){
        		this.Div00.form.Div01.form.iv_share.set_visible(true) ;
        		this.Div00.form.Div01.form.label_share.set_visible(true) ;
        		this.Div00.form.Div01.form.btn_rs.set_visible(false) ;
        	}
        	if( this.fv_CHANGEYN =="Y"){
        		this.Div00.form.Div01.form.label_share.set_text("화면원복") ;
        		this.Div00.form.Div01.form.iv_share.set_visible(true) ;
        		this.Div00.form.Div01.form.label_share.set_visible(true) ;
        		this.Div00.form.Div01.form.btn_rs.set_visible(false) ;
        	}


        	this.selectTopMenuList();

        	var ds_menu = nexacro.getApplication().gds_top_menu;
        	ds_menu.set_keystring( "S:MENUORDER");
        	var cnt = 0;

        	var div_gnb_1d = this.Div00.form.Div01.form.div_gnb_1d;
        	var vTop = 0;
        	var vHeight = 30;
        	var vLeft = 0;
        	var vWidth = 0;
        	var totWidth = 0;
        	for(var i=0; i < ds_menu.getRowCount(); i++){

        		if(ds_menu.getColumn(i, "MENULEVEL") == 0){
        			cnt++;
        			var new_btn_gnb_1d = new Button();
        			var new_menu_nm = ds_menu.getColumn(i, "MENUNM");
        			var new_menu_id = ds_menu.getColumn(i, "MENUID");

        			var textLength = new_menu_nm.length;

        			var emptyLength =  textLength - nexacro.replaceAll(new_menu_nm,' ','').length;
        			textLength = textLength - emptyLength;

        			vWidth = textLength*16 + emptyLength*5 + 30;
        			vLeft = totWidth + 5;

        			totWidth = vLeft + vWidth;

        			new_btn_gnb_1d.init( 'btn_' + new_menu_id , vLeft, vTop , vWidth, vHeight );
        			new_btn_gnb_1d.set_cssclass('gnbList' + ds_menu.getColumn(i, "CSSCLASSNO"));
        			new_btn_gnb_1d.set_text(new_menu_nm);
        			new_btn_gnb_1d.set_textAlign('center')

        			div_gnb_1d.form.addChild('btn_' + new_menu_id, new_btn_gnb_1d);
        			new_btn_gnb_1d.show();

        		}
        	}

        	var cx = 970 - 202;
        	var nCompX = (cx/2) - (totWidth/2);
        	div_gnb_1d.setOffsetLeft(nCompX + 202);
        	div_gnb_1d.set_top(40);
        	div_gnb_1d.set_width(totWidth + 1);

        	/*	gnb 1depth 클릭이벤트 등록
        	*/
        	var cpntList = this.Div00.form.Div01.form.div_gnb_1d.form.all;
        	for(var i = 0; i < cpntList.length;i++){
        		if(cpntList[i] instanceof Button ){
        			//cpntList[i].addEventHandler("onclick", this.top_gnb_1d_click, this);
        			cpntList[i].addEventHandler("onmouseenter", this.top_gnb_1d__onmouseenter, this);
        			cpntList[i].setSelectStatus(false);
        		}
        	}
        	cpntListInit = this.Div00.form.Div01.form.div_gnb_1d.form.all;

        };


        // 메인로고
        this.Div00_Div01_btn_main_log_onclick = function(obj,e)
        {
        	window.location.href=nexacro.getEnvironment().services["svcBaseUrl"].url;
        };

        this.fnCallback = function(serviceID, errCD, errMSG){

        	if(errCD < 0){
        	}else{
        		if(serviceID == "selectTopMenuList"){

        		}

        		if(serviceID == "logOut"){

        			this.alert("로그아웃 되었습니다.");
        			window.location.href=nexacro.getEnvironment().services["svcBaseUrl"].url;
        		}

        		if(serviceID == "restoreCharege"){

        			var resultVal = objApp.gds_rtn_result.getColumn(0, "RESULTVAL");

        			if( resultVal =="Y"){
        				this.alert("화면이 복원되었습니다.");
        				window.location.href=nexacro.getEnvironment().services["svcBaseUrl"].url+"swiss/index.html?linkType=MY";
        			}
        			if( resultVal =="AN"){
        				this.alert("권한이 없습니다.");
        			}
        			if( resultVal =="SN"){
        				this.alert("전환 실패 했습니다.");
        			}

        		}
         	}
        }

        // 메뉴
        this.selectTopMenuList = function(){

        	var strParam = "";
        	strParam += "USERGRPTYPE="	+ objApp.gds_login_info.getColumn(0, "USERGRPTYPE") 	+ "ª";
        	dsParamSetArrowBlank(this.ds_topTmp, strParam);

        	this.gfnTransaction("selectTopMenuList",
        						"swiss/cm/selectTopMenuList.do",
        						"dsSearch=ds_topTmp",
        						"gds_top_menu=dsResult",
        						"",
        						"fnCallback",
        						false);

        }


        top_gnb_1d_select_init = function(){
        	var cpntList = cpntListInit;

        	for(var i=0; i<cpntList.length; i++){
        		if(cpntList[i] instanceof Button){
        			if(cpntList[i].name.indexOf("btn_") >= 0){
        				if(cpntList[i].name.indexOf(gnb_1d) == -1){
        					cpntList[i].setSelectStatus(false);
        				} else {
        					cpntList[i].setSelectStatus(true);
        				}
        				cpntList[i].setFocus(false);
        			}
        		}
        	}
        	__content.setFocus(false);
        }



        /*	gnb 1depth 클릭이벤트
        */
        this.top_gnb_1d_click = function(obj,e)
        {
        	var cpntCenter =  obj.left - 0 + (obj.width/2);

        	obj.parent.parent.parent;

        	var cpntList = this.Div00.form.Div01.form.all;

        	for(var i = 0; i < cpntList.length;i++){
        		if(cpntList[i] instanceof Button ){
        			if(cpntList[i].name.indexOf("btn_") >= 0 ){
        				if(cpntList[i].name.indexOf(gnb_1d) == -1 ){
        					cpntList[i].setSelectStatus(false);
        				}else{
        				}
        			}
        		}
        	}

        	obj.setSelectStatus(true);

        	open2DepthGnb(cpntCenter, obj.name.substr(4));
        };


        /*	gnb 1depth
        */
        this.top_gnb_1d__onmouseenter = function(obj,e)
        {
        	var cpntCenter =  obj.left - 0 + (obj.width/2) + this.Div00.form.Div01.form.div_gnb_1d.left;


        	var cpntList = this.Div00.form.Div01.form.div_gnb_1d.form.all;

        	for(var i = 0; i < cpntList.length;i++){
        		if(cpntList[i] instanceof Button ){
        			if(cpntList[i].name.indexOf("btn_") >= 0 ){
        				if(cpntList[i].name.indexOf(gnb_1d) == -1 ){
        					cpntList[i].setSelectStatus(false);
        				}else{
        					cpntList[i].setSelectStatus(true);
        				}
        				cpntList[i].setFocus(false);
        			}
        		}
        	}

        	obj.setSelectStatus(true);
        	__content.setFocus(false);
        	open2DepthGnb(cpntCenter, obj.name.substr(4));

        };

        this.Div00_Div01_btn_logout_onclick = function(obj,e)
        {
        	if(this.confirm("로그아웃 하시겠습니까?")){
        		this.gfnTransaction("logOut",
        				"/swiss/hp/login/logOut.do",
        				"",
        				"gds_rtn_result=dsResult",
        				"",
        				"fnCallback",
        				false);
        	}
        };

        this.Div00_Div01_btn_my_onclick = function(obj,e)
        {
        	var naviTitText = "내정보" + " > " + " 내정보수정";
        	__gnb_navi.form.top_navi_tit.set_text(naviTitText);

        	this.fn_goPage("HP::hp11m00.xfdl");
        };

        this.Div00_Div01_btn_rs_onclick = function(obj,e)
        {
        	window.open("http://as82.kr/swiss");
        };

        this.Div00_Div01_iv_share_onclick = function(obj,e)
        {
        	this.fv_CHANGEYN = objApp.gds_login_info.getColumn(0, "CHANGEYN");
        		if(this.fv_CHANGEYN =="Y"){
        			if(!this.confirm("화면을 복원 하겠습니까?")){
        			return;
        			}
        			var strParam = "";
        			strParam += "tmp="		+ "" 		+ "ª";  // 공통 세션 데이터셋에 있는 정보 가져오기

        			this.gfnTransaction("restoreCharege",
        								"/swiss/ad/system/restoreCharege.do",
        								"dsSearch=dsSearch",
        								"gds_rtn_result=dsResult",
        								"",
        								"fnCallback",
        								false);
        		}else{
        			this.fn_goPage("AD::ad25m00.xfdl");
        		}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Top_onload,this);
            this.Div00.form.Div01.form.btn_main_log.addEventHandler("onclick",this.Div00_Div01_btn_main_log_onclick,this);
            this.Div00.form.Div01.form.btn_rs.addEventHandler("onclick",this.Div00_Div01_btn_rs_onclick,this);
            this.Div00.form.Div01.form.btn_logout.addEventHandler("onclick",this.Div00_Div01_btn_logout_onclick,this);
            this.Div00.form.Div01.form.btn_my.addEventHandler("onclick",this.Div00_Div01_btn_my_onclick,this);
            this.Div00.form.Div01.form.iv_share.addEventHandler("onclick",this.Div00_Div01_iv_share_onclick,this);
            this.Div00.form.Div01.form.label_share.addEventHandler("onclick",this.Div00_Div01_iv_share_onclick,this);
        };

        this.loadIncludeScript("Form_Top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
