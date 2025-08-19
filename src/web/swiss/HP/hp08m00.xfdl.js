(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("hp08m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("15px/normal \"SpoqaHanSans-Regular\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,1100);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","1450",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Div("sub_title_wrap","30","40","1200","60",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            this.Div.addChild(obj.name, obj);

            obj = new Button("Button00","0","0","202","44",null,null,null,null,null,null,this.Div.form.sub_title_wrap.form);
            obj.set_taborder("0");
            obj.set_background("url(\'theme::default/images/logo_top.png\') no-repeat left center");
            obj.set_accessibilitylabel("고등교육기간졸업자 취업통계조사");
            this.Div.form.sub_title_wrap.addChild(obj.name, obj);

            obj = new Button("Button01","1106","10","94","21",null,null,null,null,null,null,this.Div.form.sub_title_wrap.form);
            obj.set_taborder("1");
            obj.set_background("url(\'theme::default/images/ico_home.png\') no-repeat center center");
            obj.set_accessibilitylabel("홈으로");
            obj.set_text("");
            this.Div.form.sub_title_wrap.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","40",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","1200",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","1200",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Div("Div00","30","112","1200","265",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_background("url(\'theme::default/images/img_login.jpg\') no-repeat left center");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","80","1200","52",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("로그인");
            obj.set_textAlign("center");
            obj.set_font("40px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
            obj.set_color("#ffffff");
            obj.set_visible("false");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","143","1200","45",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("로그인이 필요한 페이지입니다. 로그인 후 이용하여 주십시오.");
            obj.set_textAlign("center");
            obj.set_font("24px/normal \"SpoqaHanSans-Light\",\"맑은 고딕\"");
            obj.set_color("#ffffff");
            obj.set_visible("false");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_epki","30","Div00:60","601","80",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_epki on");
            obj.set_accessibilitylabel("공동인증서 로그인(KEDI사용자, 취업담당자, 전산담당자)");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_sms","631","437","601","80",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_sms");
            obj.set_accessibilitylabel("ID+E-mail 로그인(학과담당자)");
            this.Div.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00","30","530","1202","720",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_border("0");
            this.Div.addChild(obj.name, obj);

            obj = new Div("Div00_00","240","1282","5","5",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("8");
            obj.set_background("#b2b2b2");
            obj.set_borderRadius("10px");
            this.Div.addChild(obj.name, obj);

            obj = new Div("Div00","318","143","5","5",null,null,null,null,null,null,this.Div.form.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_background("#b2b2b2");
            obj.set_borderRadius("10px");
            this.Div.form.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","40","1275","190","18",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("9");
            obj.set_text("지적재산,개인정보보호정책");
            obj.set_cssclass("btn_styTxt");
            obj.set_textAlign("center");
            this.Div.addChild(obj.name, obj);

            obj = new Div("Div01","395","1282","5","5",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("10");
            obj.set_background("#b2b2b2");
            obj.set_borderRadius("10px");
            this.Div.addChild(obj.name, obj);

            obj = new Div("Div01","215","2","5","5",null,null,null,null,null,null,this.Div.form.Div01.form);
            obj.set_taborder("0");
            obj.set_background("#b2b2b2");
            obj.set_borderRadius("10px");
            this.Div.form.Div01.addChild(obj.name, obj);

            obj = new Div("Div01_00","355","42","5","5",null,null,null,null,null,null,this.Div.form.Div01.form);
            obj.set_taborder("1");
            obj.set_background("#b2b2b2");
            obj.set_borderRadius("10px");
            this.Div.form.Div01.addChild(obj.name, obj);

            obj = new Div("Div01","215","2","5","5",null,null,null,null,null,null,this.Div.form.Div01.form.Div01_00.form);
            obj.set_taborder("0");
            obj.set_background("#b2b2b2");
            obj.set_borderRadius("10px");
            this.Div.form.Div01.form.Div01_00.addChild(obj.name, obj);

            obj = new Div("Div01_01","215","2","5","5",null,null,null,null,null,null,this.Div.form.Div01.form);
            obj.set_taborder("2");
            obj.set_background("#b2b2b2");
            obj.set_borderRadius("10px");
            this.Div.form.Div01.addChild(obj.name, obj);

            obj = new Div("Div01","215","2","5","5",null,null,null,null,null,null,this.Div.form.Div01.form.Div01_01.form);
            obj.set_taborder("0");
            obj.set_background("#b2b2b2");
            obj.set_borderRadius("10px");
            this.Div.form.Div01.form.Div01_01.addChild(obj.name, obj);

            obj = new Div("Div01_00","355","42","5","5",null,null,null,null,null,null,this.Div.form.Div01.form.Div01_01.form);
            obj.set_taborder("1");
            obj.set_background("#b2b2b2");
            obj.set_borderRadius("10px");
            this.Div.form.Div01.form.Div01_01.addChild(obj.name, obj);

            obj = new Div("Div01","215","2","5","5",null,null,null,null,null,null,this.Div.form.Div01.form.Div01_01.form.Div01_00.form);
            obj.set_taborder("0");
            obj.set_background("#b2b2b2");
            obj.set_borderRadius("10px");
            this.Div.form.Div01.form.Div01_01.form.Div01_00.addChild(obj.name, obj);

            obj = new Div("Div01_02","365","52","5","5",null,null,null,null,null,null,this.Div.form.Div01.form);
            obj.set_taborder("3");
            obj.set_background("#b2b2b2");
            obj.set_borderRadius("10px");
            this.Div.form.Div01.addChild(obj.name, obj);

            obj = new Div("Div01","215","2","5","5",null,null,null,null,null,null,this.Div.form.Div01.form.Div01_02.form);
            obj.set_taborder("0");
            obj.set_background("#b2b2b2");
            obj.set_borderRadius("10px");
            this.Div.form.Div01.form.Div01_02.addChild(obj.name, obj);

            obj = new Div("Div01_00","355","42","5","5",null,null,null,null,null,null,this.Div.form.Div01.form.Div01_02.form);
            obj.set_taborder("1");
            obj.set_background("#b2b2b2");
            obj.set_borderRadius("10px");
            this.Div.form.Div01.form.Div01_02.addChild(obj.name, obj);

            obj = new Div("Div01","215","2","5","5",null,null,null,null,null,null,this.Div.form.Div01.form.Div01_02.form.Div01_00.form);
            obj.set_taborder("0");
            obj.set_background("#b2b2b2");
            obj.set_borderRadius("10px");
            this.Div.form.Div01.form.Div01_02.form.Div01_00.addChild(obj.name, obj);

            obj = new Div("Div01_01","215","2","5","5",null,null,null,null,null,null,this.Div.form.Div01.form.Div01_02.form);
            obj.set_taborder("2");
            obj.set_background("#b2b2b2");
            obj.set_borderRadius("10px");
            this.Div.form.Div01.form.Div01_02.addChild(obj.name, obj);

            obj = new Div("Div01","215","2","5","5",null,null,null,null,null,null,this.Div.form.Div01.form.Div01_02.form.Div01_01.form);
            obj.set_taborder("0");
            obj.set_background("#b2b2b2");
            obj.set_borderRadius("10px");
            this.Div.form.Div01.form.Div01_02.form.Div01_01.addChild(obj.name, obj);

            obj = new Div("Div01_00","355","42","5","5",null,null,null,null,null,null,this.Div.form.Div01.form.Div01_02.form.Div01_01.form);
            obj.set_taborder("1");
            obj.set_background("#b2b2b2");
            obj.set_borderRadius("10px");
            this.Div.form.Div01.form.Div01_02.form.Div01_01.addChild(obj.name, obj);

            obj = new Div("Div01","215","2","5","5",null,null,null,null,null,null,this.Div.form.Div01.form.Div01_02.form.Div01_01.form.Div01_00.form);
            obj.set_taborder("0");
            obj.set_background("#b2b2b2");
            obj.set_borderRadius("10px");
            this.Div.form.Div01.form.Div01_02.form.Div01_01.form.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00","255","1275","130","18",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("11");
            obj.set_text("개인정보처리방침");
            obj.set_cssclass("btn_styTxt");
            obj.set_textAlign("center");
            obj.set_color("red");
            this.Div.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_01","410","1275","180","18",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("12");
            obj.set_text("이메일주소무단수집거부");
            obj.set_cssclass("btn_styTxt");
            obj.set_textAlign("center");
            this.Div.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00","620","1275","280","18",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("13");
            obj.set_text("개인정보의 목적 외 이용 및 제3자 제공내역");
            obj.set_cssclass("btn_styTxt");
            obj.set_textAlign("center");
            obj.set_color("black");
            this.Div.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,1100,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("hp08m00.xfdl","CM::common.xjs");
        this.registerScript("hp08m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;


        /*	1200px 가운데 고정
        *	cpnt : 적용 컴퍼넌트
        *	cx : 외부 넓이
        *	maxW : 컴퍼넌트 고정 넓이
        */
        function workSizeInit(cpnt,cx,maxW)
        {
        	maxW = maxW==null ? 1200: maxW;
        	var nCompWidth = cpnt.getOffsetWidth();
        	var nCompX = (cx/2) - (nCompWidth/2);
        	if(cx < maxW){
        		nCompX = 0;
        	}
        	cpnt.setOffsetLeft(nCompX);
        };


        this.Div.form.btn_epki_onclick = function(obj,e)
        {
         	//this.Div.form.btn_epki.set_cssclass('btn_epki on')
        	//this.Div.form.btn_sms.set_cssclass('btn_sms')
        };

        this.Div.form.btn_sms_onclick = function(obj,e)
        {
        	//this.Div.form.btn_sms.set_cssclass('btn_sms on')
        	//this.Div.form.btn_epki.set_cssclass('btn_epki')
        	this.go("HP::hp09m00.xfdl");
        };


        var rtnRes = "";
        this.WebBrowser00_onusernotify = function(obj,e)
        {
        	rtnRes = e.userdata;
        	if(rtnRes=="goSnd"){
        	//alert(33);
        		//this.alert(rtnRes);
        		//this.fn_goPage("HP::hp08m00.xfdl");
        		this.go("HP::hp10m00.xfdl");

        	}
        	if(rtnRes=="goMain"){
        		//this.fn_goPage("HP::hp08m00.xfdl");
        		//this.go("FrameBase::Form_main.xfdl");
        		//this.fn_initPage("FrameBase::Form_main.xfdl");  //-- 페이지 이동
        		window.location.href=nexacro.getEnvironment().services["svcBaseUrl"].url+"swiss/index.html?linkType=MY";

        	}
        };

        this.hp08m00_oninit = function(obj,e)
        {

        	var svcBaseUrl = nexacro.getEnvironment().services["svcBaseUrl"].url;
        	//this.Div.form.WebBrowser00.set_url(nexacro.getApplication().g_system_sUrl + "/EPKI/channel/epki_swiss.jsp");
        	this.Div.form.WebBrowser00.set_url(svcBaseUrl + "EPKI/channel/epki_swiss.jsp");
        	//this.selectUserList();

        	// 가운데 정렬
        	var h = this.width;
        	workSizeInit(this.Div, h , this.Div.width);

        };

        // 홈으로 이동 합니다
        this.btn_Button01_onclick = function(obj,e)
        {
        	//this.fn_initPage("FrameBase::Form_main.xfdl");  //-- 페이지 이동 ..
        	window.location.href=nexacro.getEnvironment().services["svcBaseUrl"].url;

        };
        this.Div_sub_title_wrap_Button00_onclick = function(obj,e)
        {
        	window.location.href=nexacro.getEnvironment().services["svcBaseUrl"].url;
        };
        this.Div00_Button_privacy_onclick = function(obj,e)
        {
        	window.open('/swiss/index.html?linkType=HP_PRIVACY','_self');
        };
        this.Div00_Button_third_onclick = function(obj,e)
        {
        	window.open('/swiss/index.html?linkType=HP_PRIVACY_THIRD','_self');
        };
        this.btn1_onclick = function(obj,e)
        {
        	//alert("btn1");
        	window.open('https://www.kedi.re.kr/khome/main/sitepolicy/intellectualInfo.do','_blank');
        };
        this.Common_onclick = function(obj,e)
        {
        	//alert("btn3");
        	window.open('https://www.kedi.re.kr/khome/main/sitepolicy/refusalInfo.do','_blank');
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.hp08m00_oninit,this);
            this.Div.form.sub_title_wrap.addEventHandler("onclick",this.btn_Button01_onclick,this);
            this.Div.form.sub_title_wrap.form.Button00.addEventHandler("onclick",this.Div_sub_title_wrap_Button00_onclick,this);
            this.Div.form.sub_title_wrap.form.Button01.addEventHandler("onclick",this.btn_Button01_onclick,this);
            this.Div.form.btn_epki.addEventHandler("onclick",this.Div.form.btn_epki_onclick,this);
            this.Div.form.btn_sms.addEventHandler("onclick",this.Div.form.btn_sms_onclick,this);
            this.Div.form.WebBrowser00.addEventHandler("onusernotify",this.WebBrowser00_onusernotify,this);
            this.Div.form.Div00_00.addEventHandler("onclick",this.Common_onclick,this);
            this.Div.form.Button00_00_00_00.addEventHandler("onclick",this.btn1_onclick,this);
            this.Div.form.Div01.addEventHandler("onclick",this.Common_onclick,this);
            this.Div.form.Button00_00_00_00_00.addEventHandler("onclick",this.Div00_Button_privacy_onclick,this);
            this.Div.form.Button00_00_00_00_01.addEventHandler("onclick",this.Common_onclick,this);
            this.Div.form.Button00_00_00_00_00_00.addEventHandler("onclick",this.Div00_Button_third_onclick,this);
        };

        this.loadIncludeScript("hp08m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
