(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Top_Navi");
            this.set_titletext("Form_Top_Navi");
            this.set_cssclass("list_2depth");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,30);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("top_navi_tit",null,"0","380","29","810",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("KEDI 담당 : -");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            obj.set_color("#0054d6");
            this.addChild(obj.name, obj);

            obj = new Static("label_myInfo","460","3",null,"24","470",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("내정보");
            obj.set_color("#0054d6");
            obj.set_textAlign("right");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.addChild(obj.name, obj);

            obj = new Combo("sel_schooNm","850","3","340","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_codecolumn("SCHCD");
            obj.set_datacolumn("SCHTEXT3");
            obj.set_innerdataset("gds_charge_school");
            obj.set_accessibilitylabel("학교명");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","787","3","50","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("학교명 : ");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1200,30,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Top_Navi.xfdl", function() {
        this.Form_Top_onload = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	var usrNm = objApp.gds_login_info.getColumn(0, "USERNM");
        	var grpNm = objApp.gds_login_info.getColumn(0, "USERGRPNM");

        	this.label_myInfo.set_text("[" + grpNm + "] " + usrNm + "님");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Top_onload,this);
            this.addEventHandler("onsize",this.Form_Top_onsize,this);
            this.sel_schooNm.addEventHandler("onitemchanged",this.sel_schooNm_onitemchanged,this);
        };

        this.loadIncludeScript("Form_Top_Navi.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
