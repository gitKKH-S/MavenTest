(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ag08p00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("normal 700 36px/normal \"맑은 고딕\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(980,622);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsErr", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"256\"/><Column id=\"ERRDESC\" type=\"STRING\" size=\"256\"/><Column id=\"ERRKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"ERRKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"STUDENTNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","980","622",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","1200",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","950","0","30","1200",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("gd_00","30","123","920","340",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_cssclass("grid_pdShort,grid_sty04");
            obj.set_binddataset("dsErr");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"190\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"70\"/><Column size=\"460\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"학교명\"/><Cell col=\"1\" text=\"본분교\"/><Cell col=\"2\" text=\"학번\"/><Cell col=\"3\" text=\"오류구분\"/><Cell col=\"4\" text=\"오류내용\" border=\"0px none,0px solid #e6c9c0,1px solid #e6c9c0,0px none\"/></Band><Band id=\"body\"><Cell text=\"bind:SCHNM\" cssclass=\"alignLeft\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:ORGNM\" cssclass=\"alignLeft\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:STUDENTNO\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:ERRKINDNM\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:ERRDESC\" border=\"0px none,0px solid #e6c9c0,1px solid #e6c9c0,0px none\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Div("pagingWrap","30","gd_00:3","920","60",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_pagging","210","11","480","40",null,null,null,null,null,null,this.Div.form.pagingWrap.form);
            obj.set_taborder("0");
            obj.set_text("div_00");
            obj.set_url("CM::CmPagging.xfdl");
            this.Div.form.pagingWrap.addChild(obj.name, obj);

            obj = new Button("btn_01","400","540","190","50",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_text("닫기");
            this.Div.addChild(obj.name, obj);

            obj = new Static("tableTitle","30","40","430","32",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_text("결과제출시 오류내역");
            obj.set_cssclass("tableTitle");
            this.Div.addChild(obj.name, obj);

            obj = new Static("tableTitle00","30","80","650","33",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_text("※아래의 오류내역을 확인하시고 정보등록에서 수정 후 제출하여 주시기 바랍니다.");
            obj.set_cssclass("tableTitle");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_excel","808","67","122","40",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("8");
            obj.set_text("파일저장");
            obj.set_cssclass("btn_sty04");
            obj.set_visible("true");
            this.Div.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",980,622,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CM::CmPagging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("ag08p00.xfdl","CM::utl_script.xjs");
        this.registerScript("ag08p00.xfdl", function() {
        this.executeIncludeScript("CM::utl_script.xjs"); /*include "CM::utl_script.xjs"*/;

        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		//trace(errCD);
        		//trace(errMSG);
        	}else{
        		if(serviceID == "selectSurvSchool"){
        			if(this.dsLogInSch.rowcount > 0){
        				var idx = this.dsLogInSch.findRowExpr("SURVSEQ > '000000'",0);
        				this.lfn_divSurvSet(this.dsLogInSch, idx);
        			}
        			this.lfn_selectSearchCdList();
        		}
         	}
        }

        this.ag08p00_onload = function(obj,e)
        {
        	this.dsErr.copyData(this.opener.dsErr);
        };

        this.Div_btn_excel_onclick = function(obj,e)
        {
        	if(this.dsErr.rowcount==0){
        		alert("파일저장할 오류내역이 없습니다");
        		return;
        	}
        	this.utlf_excelDownload("결과제출오류내역",this.Div.form.gd_00,this.Export00_onsuccess);
        };

        this.Export00_onsuccess = function (obj, e )
        {

        }
        this.Div_btn_01_onclick = function(obj,e)
        {
        	this.close();
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ag08p00_onload,this);
            this.Div.form.gd_00.addEventHandler("oncellclick",this.Div_gd_00_oncellclick,this);
            this.Div.form.btn_01.addEventHandler("onclick",this.Div_btn_01_onclick,this);
            this.Div.form.btn_excel.addEventHandler("onclick",this.Div_btn_excel_onclick,this);
        };

        this.loadIncludeScript("ag08p00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
