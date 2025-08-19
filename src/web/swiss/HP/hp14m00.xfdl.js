(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("hp00m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","0","0","1260","600",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_font("15px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            obj.set_taborder("3");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","31","2000",null,null,null,null,null,null,this.Div00.form);
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_taborder("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","2000",null,null,null,null,null,null,this.Div00.form);
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_taborder("2");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_privacy_20210120","60","200","840","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("1. 개인정보의 목적 외 이용 및 제공 내역(2024.01.01 ~ 2024.01.31).PDF");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_color("#188af5");
            obj.set_textDecoration("underline");
            obj.set_cursor("pointer");
            obj.set_taborder("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_privacy_20210120_00","60","label_privacy_20210120:10","840","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("2. 개인정보의 목적 외 이용 및 제공 내역(2024.02.01 ~ 2024.02.29).PDF");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_color("#188af5");
            obj.set_textDecoration("underline");
            obj.set_cursor("pointer");
            obj.set_taborder("4");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_privacy_20210120_01","60","label_privacy_20210120_00:10","840","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("3. 개인정보의 목적 외 이용 및 제공 내역(2024.07.01 ~ 2024.07.31).PDF");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_color("#188af5");
            obj.set_textDecoration("underline");
            obj.set_cursor("pointer");
            obj.set_taborder("5");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_third","40","20","1090","169",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("개인정보 보호법」제18조제4항, 「개인정보 처리 방법에 관한 고시」제2조에 의거,\r\n한국교육개발원 고등교육취업통계팀이 보유한 개인정보를 목적외로 이용하거나 \r\n제3자에게 제공한 내역에 대하여 아래와 같이 공고합니다.\r\n\r\n가. 게재사항: 날짜, 법적 근거, 목적, 개인정보 항목\r\n나. 제공횟수: 3회\r\n다. 이용 및 제공 기간: 2024.01.01.~2024.07.31.");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_border("1px solid black");
            obj.set_padding("10px");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("hp14m00.xfdl","CM::common.xjs");
        this.registerScript("hp14m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;

        this.hp00m00_onload = function(obj,e)
        {

        };


        this.Div_label_privacy_20240201_onclick = function(obj,e)
        {
        	var url = nexacro.getEnvironment().services["svcBaseUrl"].url + "privacy_third_240201.pdf";
        	window.open(url,'_blank');
        };

        this.Div_label_privacy_20240101_onclick = function(obj,e)
        {
        	var url = nexacro.getEnvironment().services["svcBaseUrl"].url + "privacy_third_240101.pdf";
        	window.open(url,'_blank');
        };

        this.Div_label_privacy_20240701_onclick = function(obj,e)
        {
        	var url = nexacro.getEnvironment().services["svcBaseUrl"].url + "privacy_third_240701.pdf";
        	window.open(url,'_blank');
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.hp00m00_onload,this);
            this.Div00.form.Static00_00.addEventHandler("onclick",this.Div00_Static00_00_onclick,this);
            this.Div00.form.label_privacy_20210120.addEventHandler("onclick",this.Div_label_privacy_20240101_onclick,this);
            this.Div00.form.label_privacy_20210120_00.addEventHandler("onclick",this.Div_label_privacy_20240201_onclick,this);
            this.Div00.form.label_privacy_20210120_01.addEventHandler("onclick",this.Div_label_privacy_20240701_onclick,this);
            this.label_third.addEventHandler("onclick",this.Div_div_00_label_00_onclick,this);
        };

        this.loadIncludeScript("hp14m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
