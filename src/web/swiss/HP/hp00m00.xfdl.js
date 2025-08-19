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
                this._setFormPosition(1260,13300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","0","0","1260","13300",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_font("15px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            obj.set_taborder("10");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","31","13300",null,null,null,null,null,null,this.Div00.form);
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_taborder("8");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","13300",null,null,null,null,null,null,this.Div00.form);
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_taborder("9");
            this.Div00.addChild(obj.name, obj);

            obj = new ImageViewer("imgViewer_00","31","21","1080","13140",null,null,null,null,null,null,this.Div00.form);
            obj.set_image("url(\'theme::default/images/privacy.jpg\')");
            obj.set_taborder("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_privacy_diff","80","imgViewer_00:20","240","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("※ 신·구 조문 대비표");
            obj.set_font("bold 16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_color("#188af5");
            obj.set_textDecoration("underline");
            obj.set_cursor("pointer");
            obj.set_taborder("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_privacy_20210120","80","label_privacy_diff:10","240","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("☞ 2021. 01. 20. 개인정보처리 방침 보기");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_color("#188af5");
            obj.set_textDecoration("underline");
            obj.set_cursor("pointer");
            obj.set_taborder("2");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_privacy_20210527","80","label_privacy_20210120:10","240","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("☞ 2021. 05. 27. 개인정보처리 방침 보기");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_color("#188af5");
            obj.set_textDecoration("underline");
            obj.set_cursor("pointer");
            obj.set_taborder("3");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_privacy_20210625","80","label_privacy_20210527:10","240","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("☞ 2021. 06. 25. 개인정보처리 방침 보기");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_color("#188af5");
            obj.set_textDecoration("underline");
            obj.set_cursor("pointer");
            obj.set_taborder("4");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_privacy_20210804","80","label_privacy_20210625:10","240","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("☞ 2021. 08. 04. 개인정보처리 방침 보기");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_color("#188af5");
            obj.set_textDecoration("underline");
            obj.set_cursor("pointer");
            obj.set_taborder("5");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_privacy_20230117","80","label_privacy_20210804:10","240","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("☞ 2022. 01. 06. 개인정보처리 방침 보기");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_color("#188af5");
            obj.set_textDecoration("underline");
            obj.set_cursor("pointer");
            obj.set_taborder("6");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_privacy_20230117_00","80","label_privacy_20230117:10","240","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("☞ 2023. 01.17. 개인정보처리 방침 보기");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_color("#188af5");
            obj.set_textDecoration("underline");
            obj.set_cursor("pointer");
            obj.set_taborder("7");
            this.Div00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,13300,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("hp00m00.xfdl","CM::common.xjs");
        this.registerScript("hp00m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;

        this.hp00m00_onload = function(obj,e)
        {

        };


        this.Div_label_privacy_20210120_onclick = function(obj,e)
        {
        	var url = nexacro.getEnvironment().services["svcBaseUrl"].url + "privacy_diff.pdf";
        	window.open(url,'_blank');
        };

        this.Div00_label_privacy_20210527_onclick = function(obj,e)
        {
        	var url = nexacro.getEnvironment().services["svcBaseUrl"].url + "privacy_20210527.pdf";
        	window.open(url,'_blank');
        };

        this.Div00_label_privacy_20210625_onclick = function(obj,e)
        {
        	var url = nexacro.getEnvironment().services["svcBaseUrl"].url + "privacy_20210625.pdf";
        	window.open(url,'_blank');
        };

        this.Div00_label_privacy_20210804_onclick = function(obj,e)
        {
        	var url = nexacro.getEnvironment().services["svcBaseUrl"].url + "privacy_20220106.pdf";
        	window.open(url,'_blank');
        };

        this.Div00_imgViewer_00_onclick = function(obj,e)
        {

        };

        this.Div_label_privacy_20230117_00_onclick = function(obj,e)
        {
        	var url = nexacro.getEnvironment().services["svcBaseUrl"].url + "privacy_20230117.pdf";
        	window.open(url,'_blank');
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.hp00m00_onload,this);
            this.Div00.form.Static00_00.addEventHandler("onclick",this.Div00_Static00_00_onclick,this);
            this.Div00.form.label_privacy_diff.addEventHandler("onclick",this.Div_label_privacy_20210120_onclick,this);
            this.Div00.form.label_privacy_20210120.addEventHandler("onclick",this.Div_label_privacy_20210120_onclick,this);
            this.Div00.form.label_privacy_20210527.addEventHandler("onclick",this.Div00_label_privacy_20210527_onclick,this);
            this.Div00.form.label_privacy_20210625.addEventHandler("onclick",this.Div00_label_privacy_20210625_onclick,this);
            this.Div00.form.label_privacy_20210804.addEventHandler("onclick",this.Div00_label_privacy_20210804_onclick,this);
            this.Div00.form.label_privacy_20230117.addEventHandler("onclick",this.Div00_label_privacy_20210804_onclick,this);
            this.Div00.form.label_privacy_20230117_00.addEventHandler("onclick",this.Div_label_privacy_20230117_00_onclick,this);
        };

        this.loadIncludeScript("hp00m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
