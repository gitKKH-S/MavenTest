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
                this._setFormPosition(980,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_history", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"MNTRSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"STATUSCD\" type=\"STRING\" size=\"256\"/><Column id=\"STATUSNM\" type=\"STRING\" size=\"256\"/><Column id=\"STATUSWKDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"RCEPTCN\" type=\"STRING\" size=\"256\"/><Column id=\"ATT_IDT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ATT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"BASEFILENM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_subSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fileDownList", this);
            obj._setContents("<ColumnInfo><Column id=\"SAVE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_FILE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fileDownTrans", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","980","550",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","30","20","660","32",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_text("상태이력");
            obj.set_cssclass("title_t2");
            this.Div.addChild(obj.name, obj);

            obj = new Div("Div00","30","70","920","2",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_background("#000000");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("gd_history","30","83",null,"337","30",null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_history");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"58\"/><Column size=\"194\"/><Column size=\"125\"/><Column size=\"296\"/><Column size=\"157\"/><Column size=\"152\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"접수상태\"/><Cell col=\"2\" text=\"작업자\"/><Cell col=\"3\" text=\"접수내용\"/><Cell col=\"4\" text=\"첨부파일\"/><Cell col=\"5\" text=\"작업시간\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:STATUSNM\" tooltiptext=\"bind:STATUSNM\"/><Cell col=\"2\" text=\"bind:WORKERNM\" tooltiptext=\"bind:WORKERNM\"/><Cell col=\"3\" text=\"bind:RCEPTCN\" tooltiptext=\"bind:RCEPTCN\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:REAL_FILE_NAME\"/><Cell col=\"5\" text=\"bind:STATUSWKDTHM\" displaytype=\"date\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm\" calendareditformat=\"yyyy-MM-dd HH:mm\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Button("Button02","440","gd_history:25","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_cssclass("btn_sty01");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","1200",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","950","0","30","1200",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","920","20",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            this.Div.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",980,550,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("popHistory_copy0.xfdl", function() {
        this.historyPop_onactivate = function(obj,e)
        {
        	this.selectHistory();
        };

        this.selectHistory = function(){
        	var nRow = this.parent.parent.Div.form.gd_list.getSelectedDatasetRows();

        	var SURVSEQ		= this.parent.parent.ds_list.getColumn(nRow, "SURVSEQ")
        	var SURVKINDCD	= this.parent.parent.ds_list.getColumn(nRow, "SURVKINDCD")
        	var SCHCD		= this.parent.parent.ds_list.getColumn(nRow, "SCHCD")
        	var ORGCD		= this.parent.parent.ds_list.getColumn(nRow, "ORGCD")

        	var strParam = "SURVSEQ=" 		+ SURVSEQ + "ª";
        	strParam += "SURVKINDCD=" 		+ SURVKINDCD + "ª";
        	strParam += "SCHCD=" 			+ SCHCD + "ª";
        	strParam += "ORGCD="  			+ ORGCD + "ª";

        	dsParamSetArrowBlank(this.ds_subSearch, strParam);
        	this.gfnTransaction("searchFpResultList",
        						"swiss/ad/progress/selectHistory.do",
        						"dsSearch=ds_subSearch",
        						"ds_history=dsResult",
        						"",
        						"fnCallback",
        						true);
        }


        this.Div_Button02_onclick = function(obj,e)
        {
        	this.parent.parent.popDiv_history.closePopup();
        };


        // 파일 다운로드
        this.Div_gd_history_oncellclick = function(obj,e)
        {
        	var nRow = this.Div.form.gd_history.getSelectedDatasetRows();
        	var nPos = this.Div.form.gd_history.getCellPos();

        	if(nPos == "4"){
        		this.ds_fileDownList.clearData();

        		var nRow = this.ds_fileDownList.addRow();
        		this.ds_fileDownList.setColumn(nRow, "SAVE_PATH", 		this.ds_history.getColumn(e.row, "SAVE_PATH"));
        		this.ds_fileDownList.setColumn(nRow, "SAVE_FILE_NAME", 	this.ds_history.getColumn(e.row, "SAVE_FILE_NAME"));
        		this.ds_fileDownList.setColumn(nRow, "REAL_FILE_NAME", 	this.ds_history.getColumn(e.row, "REAL_FILE_NAME"));

        		// 서버로 전송할 파일정보 셋팅
        		this.fileDownTrans.set_url("svcBaseUrl::swiss/hp/com/downloadFile.do");
        		this.fileDownTrans.setPostData("fileInfo", this.ds_fileDownList.saveXML());

        		this.fileDownTrans.set_downloadfilename(this.ds_fileDownList.getColumn(0, "REAL_FILE_NAME"));

        		// 파일 다운로드 실행
        		this.fileDownTrans.download();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onactivate",this.historyPop_onactivate,this);
            this.Div.form.gd_history.addEventHandler("oncellclick",this.Div_gd_history_oncellclick,this);
            this.Div.form.Button02.addEventHandler("onclick",this.Div_Button02_onclick,this);
        };

        this.loadIncludeScript("popHistory_copy0.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
