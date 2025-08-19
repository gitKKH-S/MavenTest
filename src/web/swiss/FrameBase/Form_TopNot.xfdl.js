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

            obj = new Div("div_gnb_1d","0","70","0","31",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("1");
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
        this.registerScript("Form_TopNot.xfdl", function() {
        var cpntListInit;
        var objApp = nexacro.getApplication();

        // 메인로고
        this.Div00_Div01_btn_main_log_onclick = function(obj,e)
        {
        	window.location.href=nexacro.getEnvironment().services["svcBaseUrl"].url;
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Top_onload,this);
            this.Div00.form.Div01.form.btn_main_log.addEventHandler("onclick",this.Div00_Div01_btn_main_log_onclick,this);
        };

        this.loadIncludeScript("Form_TopNot.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
