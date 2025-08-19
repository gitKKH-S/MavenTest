(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("hp12m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("15px/normal \"SpoqaHanSans-Regular\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVDATE\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"SURVMSG\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"SURVSTRTDT\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"SURVENDDT\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"RATEDT\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"SCHRATETOTAL\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"SCHRATEN\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"SCHRATET\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"SCHRATEG\" type=\"STRING\" size=\"256\"/><Column id=\"NOTICE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tmadhp", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVDATE\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"SURVMSG\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"SURVSTRTDT\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"SURVENDDT\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"RATEDT\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"SCHRATETOTAL\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"SCHRATEN\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"SCHRATET\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"SCHRATEG\" type=\"STRING\" size=\"256\"/><Column id=\"NOTICE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","960",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","40",null,null,null,null,null,null,this.Div.form);
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

            obj = new Static("Static00_00","1230","0","30","1200",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Div("sub_search","30","10","1200","370",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Edit("in_edit_00","19","19","1160","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("0");
            obj.getSetter("description").set("survmsg");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Calendar("in_edit_01","19","in_edit_00:15","160","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("1");
            obj.getSetter("description").set("survstrtdt");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Calendar("in_edit_02","in_edit_01:15","in_edit_00:15","160","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("2");
            obj.getSetter("description").set("survenddt");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Calendar("in_edit_03","19","in_edit_01:50","160","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("3");
            obj.getSetter("description").set("survdate");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_edit_04","19","in_edit_03:15","1160","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("5");
            obj.getSetter("description").set("notice");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Calendar("in_edit_05","19","in_edit_04:50","160","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("4");
            obj.getSetter("description").set("ratedt");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_edit_06","19","in_edit_05:15","160","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("6");
            obj.getSetter("description").set("schratetotal");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_edit_07","in_edit_06:15","in_edit_05:15","160","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("7");
            obj.getSetter("description").set("schraten");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_edit_08","in_edit_07:16","in_edit_05:15","160","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("8");
            obj.getSetter("description").set("schratet");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_edit_09","in_edit_08:15","in_edit_05:15","160","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("9");
            obj.getSetter("description").set("schrateg");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"sub_search:20","100","30","60",null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_cssclass("btn_sty09");
            obj.set_visible("true");
            this.Div.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,900,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","in_edit_01","value","dsMain","SURVSTRTDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_00.form.in_calr_00_00","value","dsMain","SURVENDDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","in_edit_02","value","dsMain","SURVSTRTDT");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ad26m00.xfdl","CM::common.xjs");
        this.registerScript("ad26m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;

        this.fv_MENUNM = "관리자>시스템관리>메인페이지";

        this.ad26m00_oninit = function(obj,e)
        {
        	//alert("in init");
        };

        this.ad26m00_onload = function(obj,e){
        	//alert("in load");
        	var objApp 		= nexacro.getApplication();
        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='FP'",0);

        	this.fv_USERID = objApp.gds_login_info.getColumn(idx, "USERID") ;
        	this.fv_USERSEQ = objApp.gds_login_info.getColumn(idx, "USERSEQ") ;
        	this.fv_SURVSEQ = objApp.gds_login_info.getColumn(idx, "SURVSEQ");
        	this.fv_SURVKINDCD = objApp.gds_login_info.getColumn(idx, "SURVKINDCD");
        	this.fv_SURVOBJ = objApp.gds_login_info.getColumn(idx, "SURVOBJ");
        	this.fv_SURVSTRTDT = objApp.gds_login_info.getColumn(idx, "SURVSTRTDT");
        	this.fv_SURVENDDT = objApp.gds_login_info.getColumn(idx, "SURVENDDT");
        	this.fv_SURVNM = objApp.gds_login_info.getColumn(idx, "SURVNM");
        	this.fv_USERGRPTYPE = objApp.gds_login_info.getColumn(idx, "USERGRPTYPE");
        	this.fv_CHANGEYN = objApp.gds_login_info.getColumn(0, "CHANGEYN");

        	this.getTmadHP();
        }

        this.fnCallback = function(serviceId, errCD, errMSG){
        	if(errCD < 0){
        		this.setAccessLog("", "AG", this.fv_MENUNM, serviceId + " : Fail", "");  //접속기록(실패시)
        	} else {
        		if(serviceId == "getTmadHP"){
        			//alert("in rst getTmadHP");
        			var survMsg = this.ds_tmadhp.getColumn(0,"SURVMSG");
        			//alert("survMsg="+survMsg);
        			var survStartdt = this.ds_tmadhp.getColumn(0,"SURVSTRTDT");
        			var survEnddt = this.ds_tmadhp.getColumn(0,"SURVENDDT");

        			var survDate = this.ds_tmadhp.getColumn(0,"SURVDATE");
        			var survNotice = this.ds_tmadhp.getColumn(0,"NOTICE");

        			var survRatedt = this.ds_tmadhp.getColumn(0,"RATEDT");
        			var survSchratetotal = this.ds_tmadhp.getColumn(0,"SCHRATETOTAL");
        			var survSchraten = this.ds_tmadhp.getColumn(0,"SCHRATEN");
        			var survSchratet = this.ds_tmadhp.getColumn(0,"SCHRATET");
        			var survSchrateg = this.ds_tmadhp.getColumn(0,"SCHRATEG");

        			this.Div.form.sub_search.form.in_edit_00.set_value(survMsg);
        			this.Div.form.sub_search.form.in_edit_01.set_value(survStartdt);
        			this.Div.form.sub_search.form.in_edit_02.set_value(survEnddt);

        			this.Div.form.sub_search.form.in_edit_03.set_value(survDate);
        			this.Div.form.sub_search.form.in_edit_04.set_value(survNotice);

        			this.Div.form.sub_search.form.in_edit_05.set_value(survRatedt);
        			this.Div.form.sub_search.form.in_edit_06.set_value(survSchratetotal);
        			this.Div.form.sub_search.form.in_edit_07.set_value(survSchraten);
        			this.Div.form.sub_search.form.in_edit_08.set_value(survSchratet);
        			this.Div.form.sub_search.form.in_edit_09.set_value(survSchrateg);
        		}

        		if(serviceId == "setTmadHP"){
        			alert("수정되었습니다.");
        		}
        	}
        }

        this.getTmadHP = function(){
        	//현재 홈페이지 메인화면 내용 가져오기
        	//alert("in getTmadHP");
        	var strParam = "1=1ª";

        	dsParamSetArrowBlank(this.ds_tmadhp, strParam);

        	this.gfnTransaction("getTmadHP",
        						"swiss/ad/surv/getTmadHP.do",
        						"",
        						"ds_tmadhp=dsResult",
        						"",
        						"fnCallback",
        						false);
        }


        this.Div_btn_add_onclick = function(obj,e)
        {
        	//현재 수정된 내용을 홈페이지 메인화면으로 저장
        	var survMsg = this.Div.form.sub_search.form.in_edit_00.value;
        	var survStartdt = this.Div.form.sub_search.form.in_edit_01.value;
        	var survEnddt = this.Div.form.sub_search.form.in_edit_02.value;

        	var survDate = this.Div.form.sub_search.form.in_edit_03.value;
        	var survNotice = this.Div.form.sub_search.form.in_edit_04.value;

        	var survRatedt = this.Div.form.sub_search.form.in_edit_05.value;
        	var survSchratetotal = this.Div.form.sub_search.form.in_edit_06.value;
        	var survSchraten = this.Div.form.sub_search.form.in_edit_07.value;
        	var survSchratet = this.Div.form.sub_search.form.in_edit_08.value;
        	var survSchrateg = this.Div.form.sub_search.form.in_edit_09.value;

        	var strParam = 'SURVMSG=' 	+ survMsg + 'ª';
        	strParam 	+= 'SURVSTARTDT='+ survStartdt + 'ª';
        	strParam 	+= 'SURVENDDT=' 	+ survEnddt + 'ª';
        	strParam 	+= 'SURVDATE=' 	+ survDate + 'ª';
        	strParam 	+= 'NOTICE=' 	+ survNotice + 'ª';
        	strParam 	+= 'SURVRATEDT=' 	+ survRatedt + 'ª';
        	strParam 	+= 'SURVSCHRATETOAL=' 	+ survSchratetotal + 'ª';
        	strParam 	+= 'SURVSCHRATEN=' 	+ survSchraten + 'ª';
        	strParam 	+= 'SURVSCHRATET=' 	+ survSchratet + 'ª';
        	strParam 	+= 'SURVSCHRATEG=' 	+ survSchrateg + 'ª';

        	//alert(strParam);

        	dsParamSetArrowBlank(this.ds_search, strParam);

        	this.setAccessLog("", "AG", this.fv_MENUNM, "저장", strParam);  //접속기록

        	this.gfnTransaction("setTmadHP",
        						"swiss/ad/surv/setTmadHP.do",
        						"dsSearch=ds_search",
        						"",
        						"",
        						"fnCallback",
        						false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.ad26m00_oninit,this);
            this.addEventHandler("onload",this.ad26m00_onload,this);
            this.Div.form.btn_add.addEventHandler("onclick",this.Div_btn_add_onclick,this);
        };

        this.loadIncludeScript("ad26m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
