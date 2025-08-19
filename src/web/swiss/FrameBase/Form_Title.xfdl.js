(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Title");
            this.set_titletext("TitleForm");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1146,30);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("st_title","0","0",null,null,"876","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_text("■ HOME");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("st_navi","710","0",null,null,"16","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1146,30,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("Form_Title.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
