(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Bottom");
            this.set_titletext("Form_Bottom");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,369);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_footerLink", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CDNM\">관련기관 바로가기</Col><Col id=\"CD\"/></Row><Row><Col id=\"CD\">https://www.kedi.re.kr</Col><Col id=\"CDNM\">한국교육개발원</Col></Row><Row><Col id=\"CD\">https://www.moe.go.kr</Col><Col id=\"CDNM\">교육부</Col></Row><Row><Col id=\"CD\">https://kess.kedi.re.kr</Col><Col id=\"CDNM\">교육통계서비스</Col></Row><Row><Col id=\"CD\">https://www.academyinfo.go.kr</Col><Col id=\"CDNM\">대학알리미</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","1","1200","368",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","200","42","5","5",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_background("#b2b2b2");
            obj.set_borderRadius("10px");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00","318","143","5","5",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_background("#b2b2b2");
            obj.set_borderRadius("10px");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","0","35","190","18",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("지적재산,개인정보보호정책");
            obj.set_cssclass("btn_styTxt");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","355","42","5","5",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_background("#b2b2b2");
            obj.set_borderRadius("10px");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","215","2","5","5",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("0");
            obj.set_background("#b2b2b2");
            obj.set_borderRadius("10px");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Div("Div01_00","355","42","5","5",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("1");
            obj.set_background("#b2b2b2");
            obj.set_borderRadius("10px");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Div("Div01","215","2","5","5",null,null,null,null,null,null,this.Div00.form.Div01.form.Div01_00.form);
            obj.set_taborder("0");
            obj.set_background("#b2b2b2");
            obj.set_borderRadius("10px");
            this.Div00.form.Div01.form.Div01_00.addChild(obj.name, obj);

            obj = new Div("Div01_01","215","2","5","5",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("2");
            obj.set_background("#b2b2b2");
            obj.set_borderRadius("10px");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Div("Div01","215","2","5","5",null,null,null,null,null,null,this.Div00.form.Div01.form.Div01_01.form);
            obj.set_taborder("0");
            obj.set_background("#b2b2b2");
            obj.set_borderRadius("10px");
            this.Div00.form.Div01.form.Div01_01.addChild(obj.name, obj);

            obj = new Div("Div01_00","355","42","5","5",null,null,null,null,null,null,this.Div00.form.Div01.form.Div01_01.form);
            obj.set_taborder("1");
            obj.set_background("#b2b2b2");
            obj.set_borderRadius("10px");
            this.Div00.form.Div01.form.Div01_01.addChild(obj.name, obj);

            obj = new Div("Div01","215","2","5","5",null,null,null,null,null,null,this.Div00.form.Div01.form.Div01_01.form.Div01_00.form);
            obj.set_taborder("0");
            obj.set_background("#b2b2b2");
            obj.set_borderRadius("10px");
            this.Div00.form.Div01.form.Div01_01.form.Div01_00.addChild(obj.name, obj);

            obj = new Div("Div01_02","365","52","5","5",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("3");
            obj.set_background("#b2b2b2");
            obj.set_borderRadius("10px");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Div("Div01","215","2","5","5",null,null,null,null,null,null,this.Div00.form.Div01.form.Div01_02.form);
            obj.set_taborder("0");
            obj.set_background("#b2b2b2");
            obj.set_borderRadius("10px");
            this.Div00.form.Div01.form.Div01_02.addChild(obj.name, obj);

            obj = new Div("Div01_00","355","42","5","5",null,null,null,null,null,null,this.Div00.form.Div01.form.Div01_02.form);
            obj.set_taborder("1");
            obj.set_background("#b2b2b2");
            obj.set_borderRadius("10px");
            this.Div00.form.Div01.form.Div01_02.addChild(obj.name, obj);

            obj = new Div("Div01","215","2","5","5",null,null,null,null,null,null,this.Div00.form.Div01.form.Div01_02.form.Div01_00.form);
            obj.set_taborder("0");
            obj.set_background("#b2b2b2");
            obj.set_borderRadius("10px");
            this.Div00.form.Div01.form.Div01_02.form.Div01_00.addChild(obj.name, obj);

            obj = new Div("Div01_01","215","2","5","5",null,null,null,null,null,null,this.Div00.form.Div01.form.Div01_02.form);
            obj.set_taborder("2");
            obj.set_background("#b2b2b2");
            obj.set_borderRadius("10px");
            this.Div00.form.Div01.form.Div01_02.addChild(obj.name, obj);

            obj = new Div("Div01","215","2","5","5",null,null,null,null,null,null,this.Div00.form.Div01.form.Div01_02.form.Div01_01.form);
            obj.set_taborder("0");
            obj.set_background("#b2b2b2");
            obj.set_borderRadius("10px");
            this.Div00.form.Div01.form.Div01_02.form.Div01_01.addChild(obj.name, obj);

            obj = new Div("Div01_00","355","42","5","5",null,null,null,null,null,null,this.Div00.form.Div01.form.Div01_02.form.Div01_01.form);
            obj.set_taborder("1");
            obj.set_background("#b2b2b2");
            obj.set_borderRadius("10px");
            this.Div00.form.Div01.form.Div01_02.form.Div01_01.addChild(obj.name, obj);

            obj = new Div("Div01","215","2","5","5",null,null,null,null,null,null,this.Div00.form.Div01.form.Div01_02.form.Div01_01.form.Div01_00.form);
            obj.set_taborder("0");
            obj.set_background("#b2b2b2");
            obj.set_borderRadius("10px");
            this.Div00.form.Div01.form.Div01_02.form.Div01_01.form.Div01_00.addChild(obj.name, obj);

            obj = new Div("Div02","0","86","1200","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_background("#f9f9f9");
            obj.set_border("1px solid #e6e6e6");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_03","55","106","190","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("문의처 : 043)530-9661~8");
            obj.set_color("#707070");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_03_00","268","106","62","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("이메일 : ");
            obj.set_color("#707070");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00","328","106","130","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("swiss@kedi.re.kr");
            obj.set_color("#0054d6");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_03_01","487","106","373","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("문의시간 : (오전) 09:30~11:30 (오후) 13:30~17:30");
            obj.set_color("#707070");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cd_link","1000","100","187","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_background("#f9f9f9");
            obj.set_color("#000000");
            obj.set_cssclass("comFooter");
            obj.set_innerdataset("ds_footerLink");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_padding("0px");
            obj.set_border("0px");
            obj.set_text("관련기관 바로가기");
            obj.set_value(" ");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","253","102","1","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_background("#e0e0e0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","470","102","1","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_background("#e0e0e0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","990","102","1","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_background("#e0e0e0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","245","212","623","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("주소 : (27873) 충청북도 진천군 덕산읍 교학로 7, 한국교육개발원 교육통계센터 고등교육 취업통계팀");
            obj.set_font("13px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00","245","234","623","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("Copyrightⓒ 2006-2024 KEDI All Rights Reserved.");
            obj.set_font("13px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
            obj.set_color("#707070");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00","215","35","130","18",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("개인정보처리방침");
            obj.set_cssclass("btn_styTxt");
            obj.set_textAlign("center");
            obj.set_color("red");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_01","370","35","180","18",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("이메일주소무단수집거부");
            obj.set_cssclass("btn_styTxt");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","0","212","202","44",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_img");
            obj.set_background("url(\'theme::default/images/logo_footer.png\')");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00","580","35","280","18",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("개인정보의 목적 외 이용 및 제3자 제공내역");
            obj.set_cssclass("btn_styTxt");
            obj.set_textAlign("center");
            obj.set_color("black");
            this.Div00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1200,369,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Bottom.xfdl", function() {

        this.Form_Bottom_onload = function(obj,e)
        {
        	this.Div00.form.cd_link.set_index(0);
        	/*
        	var objApp 		= nexacro.getApplication();
        	var grp = objApp.gds_login_info.getColumn(0, "USERGRPTYPE");

        	if(grp == '1' || grp == '2' || grp == '8'){
        		this.Div00.form.Static01_share.set_visible(true);
        		this.Div00.form.label_share.set_visible(true);
        		this.Div00.form.iv_share.set_visible(true);
        	}		*/
        };

        this.Div00_cd_link_onitemchanged = function(obj,e)
        {
        	var link = this.Div00.form.cd_link.value;
        	window.open(link);
        };

        // 화면공유 실행
        this.Div00_label_share_onclick = function(obj,e)
        {
        	this.fn_goPage("AD::ad25m00.xfdl");
        };

        this.Div00_Button_privacy_onclick = function(obj,e)
        {
        	this.fn_goPage("HP::hp00m00.xfdl");
        };

        this.Div00_Button_third_onclick = function(obj,e)
        {
        	this.fn_goPage("HP::hp14m00.xfdl");
        };

        this.btn3_onclick = function(obj,e)
        {
        	window.open('https://www.kedi.re.kr/khome/main/sitepolicy/refusalInfo.do','_blank');
        };

        this.btn1_onclick = function(obj,e)
        {
        	window.open('https://www.kedi.re.kr/khome/main/sitepolicy/intellectualInfo.do','_blank');
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Bottom_onload,this);
            this.Div00.form.Div00.addEventHandler("onclick",this.Common_onclick,this);
            this.Div00.form.Button00_00_00_00.addEventHandler("onclick",this.btn1_onclick,this);
            this.Div00.form.Div01.addEventHandler("onclick",this.Common_onclick,this);
            this.Div00.form.Div01.form.Div01.addEventHandler("onclick",this.Common_onclick,this);
            this.Div00.form.Div01.form.Div01_01.addEventHandler("onclick",this.Common_onclick,this);
            this.Div00.form.Div01.form.Div01_01.form.Div01.addEventHandler("onclick",this.Common_onclick,this);
            this.Div00.form.Static00_03_00_00.addEventHandler("onclick",this.Div00_Static00_03_00_00_onclick,this);
            this.Div00.form.Static00_03_01.addEventHandler("onclick",this.Div00_Static00_03_01_onclick,this);
            this.Div00.form.cd_link.addEventHandler("onitemchanged",this.Div00_cd_link_onitemchanged,this);
            this.Div00.form.Button00_00_00_00_00.addEventHandler("onclick",this.Div00_Button_privacy_onclick,this);
            this.Div00.form.Button00_00_00_00_01.addEventHandler("onclick",this.btn3_onclick,this);
            this.Div00.form.Button00_00_00_00_00_00.addEventHandler("onclick",this.Div00_Button_third_onclick,this);
        };

        this.loadIncludeScript("Form_Bottom.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
