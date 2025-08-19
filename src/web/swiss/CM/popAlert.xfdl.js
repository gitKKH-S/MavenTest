(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("popAlert");
            this.set_titletext("알림");
            this.set_border("0px");
            this.set_font("normal 700 36px/normal \"맑은 고딕\"");
            this.set_color("#000000");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,120);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("altmsg","50","0","550","100.00%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass(" title_t2");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,120,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("popAlert.xfdl", function() {

        this.popAlert_onload = function(obj,e)
        {
        	var callWidth = this.parent.param1;
        	var callHeight = this.parent.param2;
        	var callMsg = this.parent.param3;

        	//this.width = callWidth;
        	//this.height = callHeight;

        	//alert("width="+callWidth+", height="+callHeight+", msg="+callMsg);

        	this.altmsg.set_text("");
        	this.altmsg.set_text(callMsg);
        };


        this.altmsg_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.popAlert_onload,this);
            this.addEventHandler("onclick",this.popAlert_onclick,this);
            this.altmsg.addEventHandler("onclick",this.altmsg_onclick,this);
        };

        this.loadIncludeScript("popAlert.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
