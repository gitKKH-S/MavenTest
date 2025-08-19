(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("rd_test");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("webBrower_00","5","175",null,"322","5",null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00","537","126","153","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("기본샘플사이트");
            this.addChild(obj.name, obj);

            obj = new Edit("in_edit_00","213","53","487","37",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("/app/application/ReportingServer/mrd");
            obj.set_text("/app/application/ReportingServer/mrd");
            this.addChild(obj.name, obj);

            obj = new Static("label_00","13","58","237","39",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("mrd 파일위치 (운영서버)");
            this.addChild(obj.name, obj);

            obj = new Button("btn_01","709","130","163","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("실제 실행 형식");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("rd_test.xfdl", function() {

        this.btn_00_onclick = function(obj,e)
        {
        	this.webBrower_00.set_url("http://newswiss.kedi.re.kr/ReportingServer/html5/sample/sample.html");
        };

        this.btn_01_onclick = function(obj,e)
        {
        	this.webBrower_00.set_url("http://newswiss.kedi.re.kr/ReportingServer/html5/sample/kedi.html");
        };

        this.webBrower_00_onloadcompleted = function(obj,e)
        {
        	trace("999");
        	this.webBrower_00.callMethod("loadPage", "ag00r01.mrd");

        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.webBrower_00.addEventHandler("onloadcompleted",this.webBrower_00_onloadcompleted,this);
            this.btn_00.addEventHandler("onclick",this.btn_00_onclick,this);
            this.btn_01.addEventHandler("onclick",this.btn_01_onclick,this);
        };

        this.loadIncludeScript("rd_test.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
