(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("historyPop");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("normal 700 36px/normal \"맑은 고딕\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(645,470);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_reason", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_subSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","645","450",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","590","20",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","465",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","615","0","30","465",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static02","30","20","590","32",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_text("반려");
            obj.set_cssclass("title_t2");
            this.Div.addChild(obj.name, obj);

            obj = new Div("Div00","30","70","585","2",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_background("#000000");
            this.Div.addChild(obj.name, obj);

            obj = new TextArea("in_txtEdit_reason","30","180",null,"178","30",null,null,null,null,null,this.Div.form);
            obj.set_taborder("8");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_return","225","378","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_text("반려");
            obj.set_cssclass("btn_sty01");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_close","btn_return:20","378","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_text("닫기");
            obj.set_cssclass("btn_sty01");
            this.Div.addChild(obj.name, obj);

            obj = new Static("label_00","32","110","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("9");
            obj.set_text("반려사유");
            obj.set_textAlign("center");
            this.Div.addChild(obj.name, obj);

            obj = new Combo("in_cb_return","label_00:25","110",null,"30","30",null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_reason");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_text("in_cb_00");
            this.Div.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",645,470,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("popReturn.xfdl", function() {
        this.historyPop_onactivate = function(obj,e)
        {
        	this.selectReasonList();
        };

        this.Div_btn_return_onclick = function(obj,e)
        {
        	this.parent.parent.fn_returnProc(this.Div.form.in_txtEdit_reason.value);


        };

        this.Div_btn_close_onclick = function(obj,e)
        {
        	//this.close();
        	this.parent.parent.popDiv_return.closePopup();
        };

        this.fnCallback = function(serviceId, errCD, errMSG){

        };

        // 수정요청내용 항목
        this.selectReasonList = function(){
        	var SURVYEAR	= this.parent.parent.Div.form.div_searchArea.form.in_cb_year.value;

        	var strParam = "SURVYEAR=" + SURVYEAR + "ª";
        	strParam += "SURVKINDCD=FP" + "ª";
        	strParam += "CDTYPE=0093" + "ª";

        	dsParamSetArrowBlank(this.ds_subSearch, strParam);
        	this.gfnTransaction("selectReasonList",
        						"swiss/cm/selectCodeList.do",
        						"dsSearch=ds_subSearch",
        						"ds_reason=dsResult",
        						"",
        						"fnCallback",
        						true);

        }

        /*
        // 사유 전달
        this.getResaon = function(){
        	return this.Div.form.in_txtEdit_reason.value;

        }
        */


        this.Div_in_cb_return_onitemchanged = function(obj,e)
        {
        	this.Div.form.in_txtEdit_reason.set_value(this.Div.form.in_cb_return.text);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onactivate",this.historyPop_onactivate,this);
            this.Div.form.btn_return.addEventHandler("onclick",this.Div_btn_return_onclick,this);
            this.Div.form.btn_close.addEventHandler("onclick",this.Div_btn_close_onclick,this);
            this.Div.form.in_cb_return.addEventHandler("onitemchanged",this.Div_in_cb_return_onitemchanged,this);
        };

        this.loadIncludeScript("popReturn.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
