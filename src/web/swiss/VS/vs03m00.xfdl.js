(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("vs03m00");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,1500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_base", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","1500",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Div("sub_title_wrap","30","40","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","40",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","1500",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","1500",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_tab1","40","Static01:10","280","50",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_text("근무지역");
            obj.set_cssclass("btn_sty05");
            this.Div.addChild(obj.name, obj);

            obj = new WebBrowser("webBrower_main","30","btn_tab1:20","1200","1380",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_border("0px none");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_tab2","btn_tab1:20","Static01:10","280","50",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_text("산업분류");
            obj.set_cssclass("btn_sty05");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_tab3","btn_tab2:20","Static01:10","280","50",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_text("급여구간");
            obj.set_cssclass("btn_sty05");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_tab4","btn_tab3:20","Static01:10","280","50",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("8");
            obj.set_text("기업유형");
            obj.set_cssclass("btn_sty05");
            this.Div.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,1500,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("vs03m00.xfdl","CM::common.xjs");
        this.registerScript("vs03m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;

        this.fv_MENUNM = "진로탐색>취업통계(상세)";

        this.vs03m00_oninit = function(obj,e)
        {
        	var param = this.initParams();
        	this.Div.form.webBrower_main.set_url(nexacro.getEnvironment().services["svcBaseUrl"].url + "bipodata/custom.jsp?cuid=Aad9gwqj1dNDn.f4QemX9J8" + param);

        	this.setAccessLog("", "AG", this.fv_MENUNM, "취업통계(상세) 조회", "");
        };


        this.Div_btn_tab1_onclick = function(obj,e)
        {
        	var param = this.initParams();
        	this.Div.form.webBrower_main.set_url(nexacro.getEnvironment().services["svcBaseUrl"].url + "bipodata/custom.jsp?cuid=Aad9gwqj1dNDn.f4QemX9J8" + param);
        };

        this.Div_btn_tab2_onclick = function(obj,e)
        {
        	var param = this.initParams();
        	this.Div.form.webBrower_main.set_url(nexacro.getEnvironment().services["svcBaseUrl"].url + "bipodata/custom.jsp?cuid=AZTmq6ZgY05PgbA1via2Rzo" + param);
        };

        this.Div_btn_tab3_onclick = function(obj,e)
        {
        	var param = this.initParams();
        	this.Div.form.webBrower_main.set_url(nexacro.getEnvironment().services["svcBaseUrl"].url + "bipodata/custom.jsp?cuid=AZutEkagDV9Cm7B6nNK8l50" + param);
        };

        this.Div_btn_tab4_onclick = function(obj,e)
        {
        	var param = this.initParams();
        	this.Div.form.webBrower_main.set_url(nexacro.getEnvironment().services["svcBaseUrl"].url + "bipodata/custom.jsp?cuid=AfyarKMUgTtBmofxUEpESiw" + param);
        };

        // 로딩완료시
        this.Div_webBrower_main_onloadcompleted = function(obj,e)
        {
        	/*
        	var doc= this.Div.form.webBrower_main.getProperty("document");
        	var body = doc.getProperty("body");
        	var aa = body.getProperty("scrollHeight");

        	trace(aa);

        	obj.set_height(aa + 100);
        	*/
        };

        this.initParams = function(){
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
        	/*
        	if(grp == '1' || grp == '2' || grp == '8'){
        		param = "";
        	} else {
        		this.ds_base.copyData(objApp.gds_charge_school);
        		var cnt = this.ds_base.getRowCount();
        		param += "&X_SCHCD=" + this.ds_base.getColumn(0,"SCHCD");

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
        	return param;
        }



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.vs03m00_onload,this);
            this.addEventHandler("oninit",this.vs03m00_oninit,this);
            this.Div.form.btn_tab1.addEventHandler("onclick",this.Div_btn_tab1_onclick,this);
            this.Div.form.webBrower_main.addEventHandler("onloadcompleted",this.Div_webBrower_main_onloadcompleted,this);
            this.Div.form.btn_tab2.addEventHandler("onclick",this.Div_btn_tab2_onclick,this);
            this.Div.form.btn_tab3.addEventHandler("onclick",this.Div_btn_tab3_onclick,this);
            this.Div.form.btn_tab4.addEventHandler("onclick",this.Div_btn_tab4_onclick,this);
        };

        this.loadIncludeScript("vs03m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
