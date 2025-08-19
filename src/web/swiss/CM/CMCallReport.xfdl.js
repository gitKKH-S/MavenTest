(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMSchool");
            this.set_titletext("학교검색");
            if (Form == this.constructor)
            {
                this._setFormPosition(640,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchool", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SCHKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"UNIGRADENM\" type=\"STRING\" size=\"256\"/><Column id=\"RNUM\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_school_list","25","95","589",null,null,"110",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsSchool");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_usesoftkeyboard("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"접수자\" border=\"0px none,1px solid #a5a5a5,1px solid #a5a5a5,0px none\"/><Cell col=\"1\" text=\"접수\" border=\"0px none,1px solid #a5a5a5,1px solid #a5a5a5,0px none\"/><Cell col=\"2\" text=\"완료\" border=\"0px none,1px solid #a5a5a5,1px solid #a5a5a5,0px none\"/><Cell col=\"3\" text=\"미완료\" border=\"0px none,1px solid #a5a5a5,1px solid #a5a5a5,0px none\"/><Cell col=\"4\" text=\"학교코드\"/><Cell col=\"5\" text=\"본/분교\"/></Band><Band id=\"body\"><Cell text=\"bind:WORKERNM\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:TYPE1_CNT\"/><Cell col=\"2\" text=\"BIND:TYPE4_CNT\"/><Cell col=\"3\" text=\"bind:TYPE2_CNT\"/><Cell col=\"4\" text=\"BIND:SCHCD\"/><Cell col=\"5\" text=\"BIND:ORGCD\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("sub_search","25","21","589","59",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_00");
            obj.set_cssclass("divFormR");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"13","80","26","150",null,null,null,null,null,this.sub_search.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("cls_btn_search");
            this.sub_search.addChild(obj.name, obj);

            obj = new Button("btn_00","270","544","84","33",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Div("Div","30","484","600","61",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Div("pagingWrap","10","6","590","50",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Calendar("in_calr_start","44","33","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Calendar("in_calr_end","214","33","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",640,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CMCallReport.xfdl", function() {
        //기본변수세팅
        this.fv_USERID = "";
        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "";
        this.fv_MENUNM = "";

        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceID == "selectCallReport"){
        			//alert("rtn callreport");
        		}
        	}
        }

        this.CMCallReport_onload = function(obj,e)
        {
        	var objApp 		= nexacro.getApplication();
        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='AG'",0);
        	this.fv_USERID = objApp.gds_login_info.getColumn(idx, "USERID") ;
        	this.fv_SURVSEQ = objApp.gds_login_info.getColumn(idx, "SURVSEQ");
        	this.fv_SURVKINDCD = objApp.gds_login_info.getColumn(idx, "SURVKINDCD");
        	var MENUNM         = this.opener.fv_MENUNM;
        	this.fv_MENUNM     = MENUNM + ">콜센터 리포트";

        	var d = new Date();
        	var year = d.getYear();
        	var month = (d.getMonth() + 1) ;
        	if(month.length == 1){
        		month = "0" + month;
        	}
        	var day = d.getDate();
        	if(day.length == 1){
        		day = "0" + day;
        	}

        	var tToDate = year +"-" +  month +"-01";
        	var toDate =  year +"-" +  month +"-" +  day ;

        	//alert("todate="+tToDate);

        	this.in_calr_start.set_value(tToDate);
        	this.in_calr_end.set_value(toDate);
        };

        this.lfn_listPage = function(sPage)
        {
        	var strParam = "";
        	strParam += "IN_CALR_START=" + this.in_calr_start.value	+ "ª";
        	strParam += "IN_CALR_END=" + this.in_calr_end.value	+ "ª";

        	//alert(strParam);

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "조회", strParam);  //콜센터 통계조회
        	this.gfnTransaction("selectCallReport",
        						"/swiss/ad/system/selectCallReport.do",
        						"dsSearch=dsSearch",
        						"dsSchool=dsResult",
        						"",
        						"fnCallback",
        						false);

        }

        this.div_00_btn_00_onclick = function(obj,e)
        {
        	this.close();
        };

        this.searchEnter = function(obj,e)
        {
        	if(e.keycode == nexacro.Event.KEY_ENTER){
        		this.lfn_listPage(1);
        	}
        };



        this.selectCallReport = function(obj,e)
        {
        	this.lfn_listPage(1);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CMCallReport_onload,this);
            this.grd_school_list.addEventHandler("oncelldblclick",this.grd_school_list_oncelldblclick,this);
            this.sub_search.form.btn_search00.addEventHandler("onclick",this.selectCallReport,this);
            this.btn_00.addEventHandler("onclick",this.div_00_btn_00_onclick,this);
        };

        this.loadIncludeScript("CMCallReport.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
