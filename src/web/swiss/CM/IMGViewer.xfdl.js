(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("IMGViewer");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("webBrower_00","3","50",null,"800","2",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_accessibilityrole("webbrowser");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","1195","10","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,900,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("IMGViewer.xfdl", function() {

        this.IMGViewer_onload = function(obj,e)
        {
        	var imgfile= this.parent.param1;
        	//var param  = this.parent.param2;
        	//param = "SURVSEQ[201231] SURVKINDCD[AG] SCHCD[53168000] ORGCD[1]";
        	//mrdfile = "ag05r01.mrd";
        	var svcBaseUrl = nexacro.getEnvironment().services["svcBaseUrl"].url;
        	//this.webBrower_00.set_url("http://newswiss.kedi.re.kr/ReportingServer/html5/swissReportViewer.jsp?param="+param+"&fnm="+mrdfile);
        	this.webBrower_00.width = 1300;
        	this.webBrower_00.set_url(svcBaseUrl+"/images/temp"+imgfile);
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.IMGViewer_onload,this);
            this.webBrower_00.addEventHandler("onloadcompleted",this.webBrower_00_onloadcompleted,this);
            this.webBrower_00.addEventHandler("onusernotify",this.webBrower_00_onusernotify,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };

        this.loadIncludeScript("IMGViewer.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
