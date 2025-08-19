(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("vs02m00");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,1300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_base", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","1300",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Div("sub_title_wrap","30","40","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","40",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","1300",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","1300",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new WebBrowser("webBrower_main","30","Static01:10","1200","1240",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_border("0px none");
            obj.set_url("http://newswiss.kedi.re.kr/bipodata/custom.jsp?cuid=AYnDq7BFF4NGrP13XASbsD4");
            this.Div.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,1300,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("vs02m00.xfdl","CM::common.xjs");
        this.registerScript("vs02m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;

        this.fv_MENUNM = "진로탐색>취업통계(전체)";

        this.vs02m00_oninit = function(obj,e)
        {
        	var X_SCHCD = "";
        	var X_ORGCD = "";
        	var param = "";
        	var objApp = nexacro.getApplication();
        	var grp = objApp.gds_login_info.getColumn(0, "USERGRPTYPE");

        	/*
        	if(grp == '1' || grp == '2' || grp == '8'){
        		param = "";
        	} else {
        		this.ds_base.copyData(objApp.gds_charge_school);
        		var cnt = this.ds_base.getRowCount();

        		for(var i=0; i < cnt; i++){
        			if (i == 0) {
        				X_SCHCD += this.ds_base.getColumn(i,"SCHCD");
        				X_ORGCD += this.ds_base.getColumn(i,"ORGCD");
        			} else {
        				// X_SCHCD += ";" + this.ds_base.getColumn(i,"SCHCD");
        				X_ORGCD += ";" + this.ds_base.getColumn(i,"ORGCD");
        			}
        		}
        		param = "&X_SCHCD="+X_SCHCD + "&X_ORGCD=" + X_ORGCD;
        	}
        	*/
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
        	trace(param);
        	//this.Div.form.webBrower_main.set_url(nexacro.getEnvironment().services["svcBaseUrl"].url + "BOE/OpenDocument/opendoc/openDocument.jsp?sIDType=CUID&iDocID=AYnDq7BFF4NGrP13XASbsD4" + param);
        	this.Div.form.webBrower_main.set_url(nexacro.getEnvironment().services["svcBaseUrl"].url + "bipodata/custom.jsp?cuid=AYnDq7BFF4NGrP13XASbsD4" + param);

        	this.setAccessLog("", "AG", this.fv_MENUNM, "취업통계(전체) 조회", "");
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.vs02m00_oninit,this);
        };

        this.loadIncludeScript("vs02m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
