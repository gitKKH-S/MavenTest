(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("vs01m00");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,1100);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_base", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","1200",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Div("sub_title_wrap","30","40","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

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

            obj = new WebBrowser("webBrower_main","30","Static01:10","1200","1100",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_border("0px none");
            this.Div.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,1200,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("vs01m00.xfdl","CM::common.xjs");
        this.registerScript("vs01m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;

        this.fv_MENUNM = "진로탐색>학교현황";

        this.vs01m00_oninit = function(obj,e)
        {
        	var X_SCHCD = "";
        	var X_ORGCD = "";
        	var param = "";
        	var objApp = nexacro.getApplication();
        	var grp = objApp.gds_login_info.getColumn(0, "USERGRPTYPE");


        	if(grp == '1' || grp == '2' || grp == '8'){
        		param += "&X_SCHCD="
        	} else {
        		this.ds_base.copyData(objApp.gds_charge_school);
        		var cnt = this.ds_base.getRowCount();
        		for(var i=0; i < cnt; i++){
        			if (i == 0) {
        				param += "&X_SCHCD=" + this.ds_base.getColumn(i,"SCHCD") + "_" + this.ds_base.getColumn(i,"ORGCD");
        			} else {
        				param += ";" + this.ds_base.getColumn(i,"SCHCD") + "_" + this.ds_base.getColumn(i,"ORGCD");
        			}
        		}
        	}


        	/*

        	if(grp == '1' || grp == '2' || grp == '8'){
        		param += "&X_SCHCD="
        	} else {
        		this.ds_base.copyData(objApp.gds_charge_school);
        		var cnt = this.ds_base.getRowCount();
        		param += "&X_SCHCD=" + this.ds_base.getColumn(0,"SCHCD");

        	}

        	*/

        	trace(param);
        	this.Div.form.webBrower_main.set_url(nexacro.getEnvironment().services["svcBaseUrl"].url + "bipodata/custom.jsp?cuid=Ab8vOl3_K.NNpRxDcMjg8mg"+param);

        	this.setAccessLog("", "AG", this.fv_MENUNM, "학교현황 조회", "");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.vs01m00_onload,this);
            this.addEventHandler("oninit",this.vs01m00_oninit,this);
            this.Div.form.webBrower_main.addEventHandler("onloadcompleted",this.Div_webBrower_main_onloadcompleted,this);
        };

        this.loadIncludeScript("vs01m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
