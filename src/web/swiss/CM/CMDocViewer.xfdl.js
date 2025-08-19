(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DocViewer");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1150,770);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_docInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new WebBrowser("webBrower_00","10","10",null,"710","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","525","725","111","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_sty05");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1150,770,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CMDocViewer.xfdl", function() {
        this.fv_path="";
        this.fnCallback = function(){

        	if("SUCCESS" == this.ds_docInfo.getColumn(0, "CODE")){
        		this.webBrower_00.set_url(nexacro.getEnvironment().services["svcBaseUrl"].url + this.ds_docInfo.getColumn(0, "URL"));
        	} else {
        		this.alert(this.ds_docInfo.getColumn(0, "MSG") + ", 오류코드 : " + this.ds_docInfo.getColumn(0, "CODE"));
        	}
        }

        this.lfn_viewer = function()
        {
        	var strParam = "fileInfo=" + this.fv_path + "ª";
        	dsParamSetArrowBlank(this.ds_search, strParam);
        	this.gfnTransaction("selectNoticeView",
        						"/swiss/cm/docView.do",
        						"dsSearch=ds_search",
        						"ds_docInfo=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        this.DocViewer_onload = function(obj,e)
        {
        	var objParam  = this.parent.param1;
        	this.fv_path = objParam;
        	this.lfn_viewer();
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DocViewer_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };

        this.loadIncludeScript("CMDocViewer.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
