(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("fp07p00");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("webBrower_00","3","20",null,"870","2",null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,900,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("fp07p00.xfdl", function() {

        this.fp07p00_onload = function(obj,e)
        {

        	//alert(1);

        	var SURVSEQ = this.parent.param1;
        	var SURVKINDCD = this.parent.param2;

        	var SCHCD = this.parent.param3;    // 학교코드
        	var ORGCD = this.parent.param4; 	// 본분교

        	//alert(6666666);

        	//var param = "SURVSEQ["+SURVSEQ+"] SURVKINDCD["+SURVKINDCD+"] SCHCD["+SCHCD+"] ORGCD["+ORGCD+"] PRINT_GB[]";
        	var param = "SURVSEQ[201231] SURVKINDCD[AG] SCHCD[53168000] ORGCD[1]";

        	//this.webBrower_00.set_url("http://newswiss.kedi.re.kr/ReportingServer/html5/sample/sample.html");
        	//this.webBrower_00.set_url("http://newswiss.kedi.re.kr/ReportingServer/html5/sample/fp07_sample.jsp?param="+param+"&fnm=ag05r01.mrd");
        	this.webBrower_00.set_url("http://newswiss.kedi.re.kr/ReportingServer/html5/swissReportViewer.jsp?param="+param+"&fnm=ag05r01.mrd");
        	//this.webBrower_00.set_url("http://newswiss.kedi.re.kr/ReportingServer/html5/sample/swissReportViewer.jsp?param="+param);

        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fp07p00_onload,this);
            this.webBrower_00.addEventHandler("onloadcompleted",this.webBrower_00_onloadcompleted,this);
        };

        this.loadIncludeScript("fp07p00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
