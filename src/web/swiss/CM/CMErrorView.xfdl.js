(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMErrorView");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsErr", this);
            obj._setContents("<ColumnInfo><Column id=\"ERRDESC\" type=\"STRING\" size=\"256\"/><Column id=\"ERRKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"ERRKINDCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_00","0","0","890","520",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div");
            this.addChild(obj.name, obj);

            obj = new Grid("gd_err","10","70","880","373",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsErr");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj.set_cellmovingtype("none");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("grid_sty04");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"837\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"오류내용\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:ERRDESC\" textAlign=\"left\" tooltiptext=\"bind:ERRDESC\"/></Band></Format></Formats>");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("label_00","20","20","180","32",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("1");
            obj.set_text("등록전 필수항목체크");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btn_close","395","455","100","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("2");
            obj.set_text("닫기");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btn_excelsave","778","25","100","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("3");
            obj.set_text("파일저장");
            this.div_00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",900,520,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CMErrorView.xfdl","CM::utl_script.xjs");
        this.registerScript("CMErrorView.xfdl", function() {
        this.executeIncludeScript("CM::utl_script.xjs"); /*include "CM::utl_script.xjs"*/;
        this.fv_MENUNM = "";
        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "";
        this.errPopupDiv_btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        this.errPopupDiv_btn_excelsave_onclick = function(obj,e)
        {
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "파일저장", "");  //오류내역 저장
        	this.utlf_excelDownload("오류내역_"+this.getFormatDate(),this.div_00.form.gd_err,this.Export00_onsuccess);
        };
        this.CMErrorView_onload = function(obj,e)
        {
        	var objApp 		= nexacro.getApplication();
        	this.fv_SURVKINDCD = objApp.gds_param.getColumn(0, "SURVKINDCD");
        	if("AG" == this.fv_SURVKINDCD){
        		this.div_00.form.gd_err.set_cssclass("grid_sty04");
        	}else if("GP" == this.fv_SURVKINDCD){
        		this.div_00.form.gd_err.set_cssclass("grid_sty02");
        	}else if("FP" == this.fv_SURVKINDCD){
        		this.div_00.form.gd_err.set_cssclass("grid_sty03");
        	}

        	var objParam       = this.parent.param1;
        	var SURVSEQ        = this.parent.SURVSEQ;
        	var SURVKINDCD     = this.parent.SURVKINDCD;
        	var MENUNM         = this.parent.MENUNM;
        	this.fv_SURVSEQ    = SURVSEQ;
        	this.fv_SURVKINDCD = SURVKINDCD;
        	this.fv_MENUNM     = MENUNM + ">등록전 필수항목체크"
        	this.dsErr.copyData(objParam);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "오류내역 조회", "");  //오류내역 조회
        };

        /**
         *   today_yyyyMMdd 포맷으로 반환
         */
        this.getFormatDate  = function(){
        	var date = new Date();
            var year = date.getFullYear();              //yyyy
            var month = (1 + date.getMonth());          //M
            month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
            var day = date.getDate();                   //d
            day = day >= 10 ? day : '0' + day;          //day 두자리로 저장
            return  year + '_' + month + '_' + day;       //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
        }

        this.Export00_onsuccess = function (obj, e )
        {
        	//this.setWaitCursor(false);
        	//trace(e.eventid);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CMErrorView_onload,this);
            this.div_00.form.btn_close.addEventHandler("onclick",this.errPopupDiv_btn_close_onclick,this);
            this.div_00.form.btn_excelsave.addEventHandler("onclick",this.errPopupDiv_btn_excelsave_onclick,this);
        };

        this.loadIncludeScript("CMErrorView.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
