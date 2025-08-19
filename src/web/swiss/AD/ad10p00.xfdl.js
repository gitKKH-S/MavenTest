(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ad10p00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("normal 700 36px/normal \"맑은 고딕\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(980,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMain", this);
            obj._setContents("<ColumnInfo><Column id=\"STATUSNM\" type=\"STRING\" size=\"256\"/><Column id=\"STATUSWKDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"RCEPTCN\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERNM\" type=\"STRING\" size=\"256\"/><Column id=\"RN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","980","660",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","30","49","660","28",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_text("상태이력");
            obj.set_cssclass("title_t2");
            this.Div.addChild(obj.name, obj);

            obj = new Div("Div00","30","90","920","2",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_background("#000000");
            this.Div.addChild(obj.name, obj);

            obj = new Button("Button02","440","620","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_cssclass("btn_sty01");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","1200",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","950","0","30","1200",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","920","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("gd_01","30","121","920","473",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_binddataset("dsMain");
            obj.set_autofittype("col");
            obj.set_cssclass("grid_sty04");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"44\"/><Column size=\"279\"/><Column size=\"104\"/><Column size=\"403\"/><Column size=\"270\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"NO.\" border=\"0px,1px solid #e5e5e5,1px solid #e5e5e5\"/><Cell col=\"1\" text=\"접수상태\" border=\"0px,1px solid #e5e5e5,1px solid #e5e5e5\"/><Cell col=\"2\" text=\"작업자\" border=\"0px,1px solid #e5e5e5,1px solid #e5e5e5\"/><Cell col=\"3\" text=\"접수냉용\" border=\"0px,1px solid #e5e5e5,1px solid #e5e5e5\"/><Cell col=\"4\" text=\"작업시간\" border=\"0px,0px,1px solid #e5e5e5,1px solid #e5e5e5\"/></Band><Band id=\"body\"><Cell color=\"#595959\" textAlign=\"left\" padding-left=\"20px\" font=\"normal 15px/normal &quot;Malgun Gothic&quot;\" padding=\"0px 0px 0px 20px\" border=\"1px solid #dbdee2,1px solid #dbdee2,1px solid #dbdee2,0px\" text=\"bind:RN\"/><Cell col=\"1\" color=\"#595959\" textAlign=\"left\" padding-left=\"20px\" font=\"normal 15px/normal &quot;Malgun Gothic&quot;\" padding=\"0px 0px 0px 20px\" text=\"bind:STATUSNM\"/><Cell col=\"2\" color=\"#595959\" textAlign=\"left\" padding-left=\"20px\" font=\"normal 15px/normal &quot;Malgun Gothic&quot;\" padding=\"0px 0px 0px 20px\" text=\"bind:WORKERNM\"/><Cell col=\"3\" displaytype=\"normal\" textAlign=\"center\" font=\"normal 15px/normal &quot;Malgun Gothic&quot;\" text=\"bind:RCEPTCN\"/><Cell col=\"4\" displaytype=\"normal\" textAlign=\"center\" font=\"normal 15px/normal &quot;Malgun Gothic&quot;\" border=\"1px solid #dbdee2,0px,1px solid #dbdee2,1px solid #dbdee2\" text=\"bind:STATUSWKDTHM\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",980,670,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div.form.gd_01","accessibilityaction","Dataset00","학교명");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ad10p00.xfdl", function() {
        //기본변수세팅
        this.fv_SCHCD = "";
        this.fv_ORGCD = "";
        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "";

        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){

        	}else{
        		if(serviceID == "selectDetailAgState"){
        			if(this.dsMain.rowcount == 0) alert("조회된 자료가 없습니다.");
        		}
         	}
        }

        this.selectHistory = function(){
        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD	+ "ª";
        	strParam += "SCHCD="		+ this.fv_SCHCD			+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD			+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	trace(this.dsSearch.saveXML());
        	this.gfnTransaction("selectDetailAgState",
        						"/swiss/ag/state/selectDetailAgState.do",
        						"dsSearch=dsSearch",
        						"dsMain=dsResult01",
        						"",
        						"fnCallback",
        						false);
        }

        this.Div_Button02_onclick = function(obj,e)
        {
        	this.close();
        };

        this.ad10p00_onload = function(obj,e)
        {
        	this.fv_SURVSEQ 	= this.parent.param1;
        	this.fv_SURVKINDCD 	= this.parent.param2;
        	this.fv_SCHCD 		= this.parent.param3;
        	this.fv_ORGCD 		= this.parent.param4;
        	this.selectHistory();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ad10p00_onload,this);
            this.Div.form.Button02.addEventHandler("onclick",this.Div_Button02_onclick,this);
        };

        this.loadIncludeScript("ad10p00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
