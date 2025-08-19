(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("hp09m01");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("15px/normal \"SpoqaHanSans-Regular\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,1370);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","1270",null,null,null,null,null,null,this);
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
            this.Div.form.sub_title_wrap.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","40",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","1340",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","1330",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Div("Div00","30","112","1200","265",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_background("url(\'theme::default/images/img_login.jpg\') no-repeat left center");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_epki","30","437","601","80",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_epki");
            obj.set_accessibilitylabel("공동인증서 로그인(KEDI사용자, 취업담당자, 전산담당자)");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_sms","631","437","601","80",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_sms on");
            obj.set_accessibilitylabel("ID+E-mail 로그인(학과담당자)");
            this.Div.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00","30","530","1202","710",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_border("0");
            this.Div.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,1370,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("hp09m01.xfdl","CM::common.xjs");
        this.registerScript("hp09m01.xfdl", function() {
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



        this.hp09m01_oninit = function(obj,e)
        {
        	var svcBaseUrl = nexacro.getEnvironment().services["svcBaseUrl"].url;
        	this.Div.form.WebBrowser00.set_url( svcBaseUrl + "swiss/login/smsLoginSms.do");

        	// 가운데 정렬
        	var h = this.width;
        	workSizeInit(this.Div, h , this.Div.width);
        };

        var rtnRes = "";
        this.WebBrowser00_onusernotify = function(obj,e)
        {
        	rtnRes = e.userdata;
        	if(rtnRes=="goSnd"){
        		//this.go("FrameBase::Form_main.xfdl");
        		window.location.href=nexacro.getEnvironment().services["svcBaseUrl"].url;
        	}
        };




        this.Div.form.btn_epki_onclick = function(obj,e)
        {
         	//this.Div.form.btn_epki.set_cssclass('btn_epki on')
        	//this.Div.form.btn_sms.set_cssclass('btn_sms')
        	this.go("HP::hp08m00.xfdl");
        };

        this.Div.form.btn_sms_onclick = function(obj,e)
        {
        	//this.Div.form.btn_sms.set_cssclass('btn_sms on')
        	//this.Div.form.btn_epki.set_cssclass('btn_epki')
        };


        // 홈으로 이동
        this.btn_Button01_onclick = function(obj,e)
        {
        	//this.fn_initPage("FrameBase::Form_main.xfdl");  //-- 페이지 이동
        	window.location.href=nexacro.getEnvironment().services["svcBaseUrl"].url;

        };

        this.Div_Static00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.hp09m01_oninit,this);
            this.Div.form.sub_title_wrap.form.Button01.addEventHandler("onclick",this.btn_Button01_onclick,this);
            this.Div.form.Static00.addEventHandler("onclick",this.Div_Static00_onclick,this);
            this.Div.form.btn_epki.addEventHandler("onclick",this.Div.form.btn_epki_onclick,this);
            this.Div.form.btn_sms.addEventHandler("onclick",this.Div.form.btn_sms_onclick,this);
            this.Div.form.WebBrowser00.addEventHandler("onusernotify",this.WebBrowser00_onusernotify,this);
        };

        this.loadIncludeScript("hp09m01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
