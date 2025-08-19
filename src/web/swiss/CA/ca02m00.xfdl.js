(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ca02m00");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1255,3700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_base", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1255","3700",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            obj.set_formscrolltype("horizontal");
            obj.set_formscrollbartype("auto auto");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("webBrower_main","0","0",null,null,"0","0",null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_border("0px none");
            this.Div.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1255,3700,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ca02m00.xfdl","CM::common.xjs");
        this.registerScript("ca02m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;

        //글로벌 데이터셋을 사용하기 위한 objApp
        var objApp = nexacro.getApplication();

        this.ca02m00_oninit = function(obj,e)
        {
        	var param = "";

        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='AG'",0);
        	var X_USERID = objApp.gds_login_info.getColumn(idx, "USERID") ;
        	var X_USERGRPTYPE = objApp.gds_login_info.getColumn(idx, "USERGRPTYPE");
        	var X_SCHCD = objApp.gds_param.getColumn(0, "SCHCD");
        	var X_ORGCD = objApp.gds_param.getColumn(0, "ORGCD");

        	param += "SCHCD=" + X_SCHCD + "&ORGCD=" + X_ORGCD + "&USERID="+X_USERID + "&USERGRPTYPE="+X_USERGRPTYPE;
        	//alert(nexacro.getEnvironment().services["svcBaseUrl"].url + "CA/index.jsp?cuid=Ab8vOl3_K.NNpRxDcMjg8mg"+param);
        	this.Div.form.webBrower_main.set_url(nexacro.getEnvironment().services["svcBaseUrl"].url + "swiss/CA/prediction.jsp?"+param);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ca02m00_onload,this);
            this.addEventHandler("oninit",this.ca02m00_oninit,this);
        };

        this.loadIncludeScript("ca02m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
