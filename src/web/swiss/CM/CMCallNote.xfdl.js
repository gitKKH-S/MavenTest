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
                this._setFormPosition(820,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchool", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SCHKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"UNIGRADENM\" type=\"STRING\" size=\"256\"/><Column id=\"RNUM\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("sub_search","25","21","775","569",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div_00");
            obj.set_cssclass("divFormR");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"13","80","26","160",null,null,null,null,null,this.sub_search.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("cls_btn_search");
            this.sub_search.addChild(obj.name, obj);

            obj = new Button("btn_00","358","600","84","33",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Edit("in_schnm","44","33","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_displaynulltext("학교명");
            obj.set_maxlength("100");
            obj.set_readonly("true");
            obj.set_text("asdf");
            this.addChild(obj.name, obj);

            obj = new Edit("in_orgnm","214","33","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_displaynulltext("본분교명");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("in_orgnm00","384","33","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_displaynulltext("담당자");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Combo("in_survey_div","44","116","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("dsSurvey");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_displaynulltext("조사구분");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("in_receipt_div","214","116","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("dsReceipt");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_displaynulltext("문의구분");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("in_orgnm00_00","44","75","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_displaynulltext("이메일");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("in_orgnm00_00_00","214","75","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_displaynulltext("연락처");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("in_schnm00","44","155","746","185",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_displaynulltext("접수내용");
            obj.set_maxlength("100");
            obj.set_readonly("false");
            obj.set_text("asdf");
            this.addChild(obj.name, obj);

            obj = new Edit("in_schnm00_00","44","392","746","185",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_displaynulltext("답변내용");
            obj.set_maxlength("100");
            obj.set_readonly("false");
            obj.set_text("asdf");
            this.addChild(obj.name, obj);

            obj = new Combo("in_survey_div00","44","351","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_innerdataset("dsSurvey");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",820,650,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CMCallNote.xfdl", function() {
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

        	var tToDate = "2023-07-01";
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
            this.sub_search.form.btn_search00.addEventHandler("onclick",this.selectCallReport,this);
            this.btn_00.addEventHandler("onclick",this.div_00_btn_00_onclick,this);
            this.in_schnm.addEventHandler("oneditclick",this.btn_search00_onclick,this);
            this.in_orgnm.addEventHandler("oneditclick",this.btn_search00_onclick,this);
            this.in_orgnm00.addEventHandler("oneditclick",this.btn_search00_onclick,this);
            this.in_orgnm00_00.addEventHandler("oneditclick",this.btn_search00_onclick,this);
            this.in_orgnm00_00_00.addEventHandler("oneditclick",this.btn_search00_onclick,this);
        };

        this.loadIncludeScript("CMCallNote.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
