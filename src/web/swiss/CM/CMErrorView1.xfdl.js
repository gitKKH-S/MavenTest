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
            obj._setContents("<ColumnInfo><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"256\"/><Column id=\"ERRDESC\" type=\"STRING\" size=\"256\"/><Column id=\"ERRKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"ERRKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"STUDENTNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_00","0","0","890","520",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","385","465","122","40",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("0");
            obj.set_text("닫기");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btn_excelsave","768","25","122","40",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("1");
            obj.set_text("파일저장");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("tableTitle00","30","46","650","33",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("2");
            obj.set_text("※아래의 오류내역을 확인하시고 정보등록에서 수정 후 제출하여 주시기 바랍니다.");
            obj.set_cssclass("tableTitle");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_00.addChild(obj.name, obj);

            obj = new Grid("gd_00","10","83","880","357",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_cssclass("grid_pdShort,grid_sty04");
            obj.set_binddataset("dsErr");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"190\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"70\"/><Column size=\"460\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"학교명\"/><Cell col=\"1\" text=\"본분교\"/><Cell col=\"2\" text=\"학번\"/><Cell col=\"3\" text=\"오류구분\"/><Cell col=\"4\" text=\"오류내용\" border=\"0px none,0px solid #e6c9c0,1px solid #e6c9c0,0px none\"/></Band><Band id=\"body\"><Cell text=\"bind:SCHNM\" cssclass=\"alignLeft\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:ORGNM\" cssclass=\"alignLeft\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:STUDENTNO\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:ERRKINDNM\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:ERRDESC\" border=\"0px none,0px solid #e6c9c0,1px solid #e6c9c0,0px none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("tableTitle","20","12","430","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("결과제출시 오류내역");
            obj.set_cssclass("tableTitle");
            this.addChild(obj.name, obj);

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
        this.addIncludeScript("CMErrorView1.xfdl","CM::utl_script.xjs");
        this.registerScript("CMErrorView1.xfdl", function() {
        this.executeIncludeScript("CM::utl_script.xjs"); /*include "CM::utl_script.xjs"*/;

        this.errPopupDiv_btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        this.errPopupDiv_btn_excelsave_onclick = function(obj,e)
        {
        	this.utlf_excelDownload("오류내역_"+this.getFormatDate(),this.gd_00,this.Export00_onsuccess);
        };
        this.CMErrorView_onload = function(obj,e)
        {
        	var objParam  = this.parent.param1;
        	this.dsErr.copyData(objParam);
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
            this.gd_00.addEventHandler("oncellclick",this.Div_gd_00_oncellclick,this);
        };

        this.loadIncludeScript("CMErrorView1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
