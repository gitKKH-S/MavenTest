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
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_docInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new WebBrowser("webBrower_00","20","260",null,"430","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Edit("in_edit_name","800","63","205","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_value("555.pptx");
            obj.set_text("555.pptx");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00","720","122","281","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("문서보기");
            this.addChild(obj.name, obj);

            obj = new Static("label_00","45","12","409","33",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("문서뷰어 테스트 : 파일경로를 입력하고   [문서보기]  실행");
            this.addChild(obj.name, obj);

            obj = new TextArea("in_txtEdit_00","440","199","570","42",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("label_02","39","62","741","29",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("실파일위치및이름 (로컬:C:\\\\eGovFrameDev-3.8.0-64bit\\\\_files , 서버:/app/application/_files)");
            this.addChild(obj.name, obj);

            obj = new Static("label_03","40","210","390","21",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("문서보기후  생성되는 파일 위치 : http://domainaddr/");
            this.addChild(obj.name, obj);

            obj = new Static("label_04","45","89","615","23",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("서버의경우 DB에서 암호화된 이름 던지면 됨");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","in_txtEdit_00","value","ds_docInfo","URL");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DocViewer.xfdl", function() {

        this.fnCallback = function(){

        	if("SUCCESS" == this.ds_docInfo.getColumn(0, "CODE")){
        		this.webBrower_00.set_url(nexacro.getEnvironment().services["svcBaseUrl"].url + this.ds_docInfo.getColumn(0, "URL"));
        	} else {
        		this.alert(this.ds_docInfo.getColumn(0, "MSG") + ", 오류코드 : " + this.ds_docInfo.getColumn(0, "CODE"));
        	}
        }

        this.btn_00_onclick = function(obj,e)
        {
        	var path = this.in_edit_name.value;
        	var strParam = "fileInfo=" + path + "ª";

        	dsParamSetArrowBlank(this.ds_search, strParam);

        	this.gfnTransaction("selectNoticeView",
        						"/swiss/cm/docView.do",
        						"dsSearch=ds_search",
        						"ds_docInfo=dsResult",
        						"",
        						"fnCallback",
        						true);




        };

        this.DocViewer_onload = function(obj,e)
        {
        	var objParam  = this.parent.param1;
        	this.in_edit_name.set_value(objParam);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DocViewer_onload,this);
            this.btn_00.addEventHandler("onclick",this.btn_00_onclick,this);
        };

        this.loadIncludeScript("DocViewer.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
