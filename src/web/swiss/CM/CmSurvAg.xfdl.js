(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CmSurvAg");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,125);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div_surv","0","0","1200","125",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("sub_research03");
            this.addChild(obj.name, obj);

            obj = new Static("reser_st03","32","25","120","30",null,null,null,null,null,null,this.Div_surv.form);
            obj.set_taborder("0");
            obj.set_text("조사 기준");
            obj.set_cssclass("reser_st03");
            this.Div_surv.addChild(obj.name, obj);

            obj = new Static("label_00","reser_st03:10","25","120","30",null,null,null,null,null,null,this.Div_surv.form);
            obj.set_taborder("1");
            obj.set_text("20.12.31");
            obj.set_cssclass("reser_st_result");
            obj.set_font("18px/normal \"SpoqaHanSans-Regular\"");
            this.Div_surv.addChild(obj.name, obj);

            obj = new Static("reser_obj03","290","25","113","30",null,null,null,null,null,null,this.Div_surv.form);
            obj.set_taborder("2");
            obj.set_text("조사 대상");
            obj.set_cssclass("reser_obj03");
            this.Div_surv.addChild(obj.name, obj);

            obj = new Static("label_01","reser_obj03:10","26","584","29",null,null,null,null,null,null,this.Div_surv.form);
            obj.set_taborder("3");
            obj.set_text("20.2월, 19.08월 졸업자");
            obj.set_cssclass("reser_date_result");
            obj.set_font("18px/normal \"SpoqaHanSans-Regular\"");
            this.Div_surv.addChild(obj.name, obj);

            obj = new Static("reser_date03","32","70","120","28",null,null,null,null,null,null,this.Div_surv.form);
            obj.set_taborder("4");
            obj.set_text("조사 기간");
            obj.set_cssclass("reser_date03");
            this.Div_surv.addChild(obj.name, obj);

            obj = new Static("label_02","162","69","606","30",null,null,null,null,null,null,this.Div_surv.form);
            obj.set_taborder("5");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("reser_obj_result");
            obj.set_font("18px/normal \"SpoqaHanSans-Regular\"");
            this.Div_surv.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1200,125,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CmSurvAg.xfdl", function() {
        	var objApp 		= nexacro.getApplication();
        	this.fv_SURVKINDCD = "AG";
        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='AG'",0);
        	//var idx = 0;

        	this.fv_SURVSEQ = objApp.gds_login_info.getColumn(idx, "SURVSEQ");
        	this.fv_SURVOBJ = objApp.gds_login_info.getColumn(idx, "SURVOBJ");
        	this.fv_SURVSTRTDT = objApp.gds_login_info.getColumn(idx, "SURVSTRTDT");
        	this.fv_SURVENDDT = objApp.gds_login_info.getColumn(idx, "SURVENDDT");
        	this.fv_SURVNM = objApp.gds_login_info.getColumn(idx, "SURVNM");

        	this.Div_surv.form.label_00.set_text(this.fv_SURVSEQ.substr(0,2)+"."+this.fv_SURVSEQ.substr(2,2)+"."+this.fv_SURVSEQ.substr(4,2)) ;
        	this.Div_surv.form.label_01.set_text(this.fv_SURVOBJ) ;
        	var survinfo = this.fv_SURVSTRTDT.substr(0,4)+"."+this.fv_SURVSTRTDT.substr(4,2)+"."+this.fv_SURVSTRTDT.substr(6,2)
        					+" ~ "+this.fv_SURVENDDT.substr(0,4)+"."+this.fv_SURVENDDT.substr(4,2)+"."+this.fv_SURVENDDT.substr(6,2)
        					+" ( " + this.fv_SURVNM + " )";
        	this.Div_surv.form.label_02.set_text(survinfo) ;
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("CmSurvAg.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
