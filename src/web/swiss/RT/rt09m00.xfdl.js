(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("rt09m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,415);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSurvInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVENDDT\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SURVYEAR\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSTATUSCDNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"DATETIME\" size=\"17\"/><Column id=\"SURVOBJ\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSTRTDT\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSTATUSCD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVNM\" type=\"STRING\" size=\"32\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"RN\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SURVKINDNM\" type=\"STRING\" size=\"32\"/><Column id=\"REMARK\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchool", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"CHGPSNYN\" type=\"STRING\" size=\"256\"/><Column id=\"EVDDOCKIND\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHORGNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsActive", this);
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","410",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","20",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","405",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","405",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Div("sub_title_wrap","30","20","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Static("sub_title","0","0","120","32",null,null,null,null,null,null,this.Div.form.sub_title_wrap.form);
            obj.set_taborder("0");
            obj.set_text("비교정보");
            obj.set_cssclass(" title_t2");
            this.Div.form.sub_title_wrap.addChild(obj.name, obj);

            obj = new Div("Div00","30","60","1200","80",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","30","20","80","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("조사기준");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Combo("in_cb_sruvseq","Static00:10","20","220","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsSurvInfo");
            obj.set_codecolumn("SURVSEQ");
            obj.set_datacolumn("SURVSEQNM");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","416","20","94","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("학교-본분교");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Edit("in_edit_sch","Static00_01_01:10","20","280","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_sch","in_edit_sch:108","20","100","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("검색");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","30","Div00:20","1200","240",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("");
            obj.set_cssclass("divFormR");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_rpt01","300","30","140","30",null,null,null,null,null,null,this.Div.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("취업현황(요약)");
            obj.set_cssclass("btn_sty05");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_rpt02","520","30","140","30",null,null,null,null,null,null,this.Div.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("취업현황(상세)");
            obj.set_cssclass("btn_sty05");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_rpt04","960","30","140","30",null,null,null,null,null,null,this.Div.form.Div01.form);
            obj.set_taborder("2");
            obj.set_text("유지취업(상세)");
            obj.set_cssclass("btn_sty05");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_rpt03","740","30","140","30",null,null,null,null,null,null,this.Div.form.Div01.form);
            obj.set_taborder("3");
            obj.set_text("유지취업(요약)");
            obj.set_cssclass("btn_sty05");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_rpt01_1","300","80","140","30",null,null,null,null,null,null,this.Div.form.Div01.form);
            obj.set_taborder("4");
            obj.set_text("산업분류(요약)");
            obj.set_cssclass("btn_sty05");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_rpt02_1","520","80","140","30",null,null,null,null,null,null,this.Div.form.Div01.form);
            obj.set_taborder("5");
            obj.set_text("산업분류(상세)");
            obj.set_cssclass("btn_sty05");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_rpt04_1","960","80","140","30",null,null,null,null,null,null,this.Div.form.Div01.form);
            obj.set_taborder("6");
            obj.set_text("기업규모(상세)");
            obj.set_cssclass("btn_sty05");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_rpt03_1","740","80","140","30",null,null,null,null,null,null,this.Div.form.Div01.form);
            obj.set_taborder("7");
            obj.set_text("기업규모(요약)");
            obj.set_cssclass("btn_sty05");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_rpt01_2","300","btn_rpt01_1:20","140","30",null,null,null,null,null,null,this.Div.form.Div01.form);
            obj.set_taborder("8");
            obj.set_text("기업형태(요약)");
            obj.set_cssclass("btn_sty05");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_rpt02_2","520","130","140","30",null,null,null,null,null,null,this.Div.form.Div01.form);
            obj.set_taborder("9");
            obj.set_text("기업형태(상세)");
            obj.set_cssclass("btn_sty05");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_rpt04_2","960","130","140","30",null,null,null,null,null,null,this.Div.form.Div01.form);
            obj.set_taborder("10");
            obj.set_text("근무지역(상세)");
            obj.set_cssclass("btn_sty05");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_rpt03_2","740","130","140","30",null,null,null,null,null,null,this.Div.form.Div01.form);
            obj.set_taborder("11");
            obj.set_text("근무지역(요약)");
            obj.set_cssclass("btn_sty05");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_rpt01_3","300","180","140","30",null,null,null,null,null,null,this.Div.form.Div01.form);
            obj.set_taborder("12");
            obj.set_text("초임급여(요약)");
            obj.set_cssclass("btn_sty05");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_rpt02_3","btn_rpt01_3:80","180","140","30",null,null,null,null,null,null,this.Div.form.Div01.form);
            obj.set_taborder("13");
            obj.set_text("초임급여(상세)");
            obj.set_cssclass("btn_sty05");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_rpt03_3","btn_rpt02_3:80","180","140","30",null,null,null,null,null,null,this.Div.form.Div01.form);
            obj.set_taborder("15");
            obj.set_text("자격증취득(요약)");
            obj.set_cssclass("btn_sty05");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_rpt04_3","btn_rpt03_3:80","180","140","30",null,null,null,null,null,null,this.Div.form.Div01.form);
            obj.set_taborder("14");
            obj.set_text("자격증취득(상세)");
            obj.set_cssclass("btn_sty05");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_rpt01_00_00_00_00","40","100","180","40",null,null,null,null,null,null,this.Div.form.Div01.form);
            obj.set_taborder("16");
            obj.set_text("추세분석");
            obj.set_cssclass("btn_sty01");
            obj.set_font("bold 18px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_enable("false");
            this.Div.form.Div01.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,415,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("rt09m00.xfdl","CM::common.xjs");
        this.registerScript("rt09m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;

        //기본변수세팅
        this.fv_USERID = "";
        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "AG";
        this.fv_SCHCD= "" ;
        this.fv_ORGCD= "";
        this.fv_USERGRPTYPE="";
        this.fv_UNIGRADENM="";
        this.fv_MENUID = "rt09m00";
        this.fv_MENUNM = "조사결과>비교정보>추세분석";
        var objApp 		= nexacro.getApplication();
        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceID == "selectSurvReg"){
        		//trace(this.dsSurvInfo.saveXML());
        			this.dsSurvInfo.addColumn("SURVSEQNM","string");
        			for(var i=0; i < this.dsSurvInfo.rowcount; i++){
        				var v_survseq = this.dsSurvInfo.getColumn(i,"SURVSEQ");
        				var v_SURVSEQNM = v_survseq.substr(0,2)+"."+v_survseq.substr(2,2)+"."+v_survseq.substr(4,2);
        				this.dsSurvInfo.setColumn(i,"SURVSEQNM",v_SURVSEQNM);
        			}
        			this.Div.form.Div00.form.in_cb_sruvseq.set_index(0);
        		}
        		if(serviceID == "schoolInfo"){

        			var idx = this.dsSchool.findRowExpr("SCHCD=='"+this.fv_SCHCD+"'",0);
        			var schText = this.dsSchool.getColumn(idx, "SCHORGNM");

        			this.Div.form.Div00.form.in_edit_sch.set_value(schText);

        			if(this.dsSchool.getColumn(idx,"SCHORGCD").substring(9,10) == "M"){
        				this.fv_UNIGRADENM = "대학원";
        			}else{
        				this.fv_UNIGRADENM = "대학";
        			}
        		}
        		if(serviceID == "chkActive"){
        			//alert("rtn chkActive");
        			var chkCnt = this.dsActive.getColumn(idx, "CNT");
        			//alert("chkCnt="+chkCnt);
        			if(chkCnt==0){
        				alert("현재 사용이 불가능합니다.");
        				window.open('/','_self');
        			}
        		}
         	}
        }

        this.rt09m00_onload = function(obj,e)
        {
        	this.chkActive();

        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='AG'",0);
        	this.fv_USERID = objApp.gds_login_info.getColumn(idx, "USERID") ;
        	this.fv_SURVSEQ = objApp.gds_login_info.getColumn(idx, "SURVSEQ");
        	this.fv_USERGRPTYPE = objApp.gds_login_info.getColumn(idx, "USERGRPTYPE");
        	if("4" == this.fv_USERGRPTYPE || "5" == this.fv_USERGRPTYPE || "6" == this.fv_USERGRPTYPE ){
        		this.fv_SCHCD = objApp.gds_param.getColumn(0, "SCHCD");
        		this.fv_ORGCD = objApp.gds_param.getColumn(0, "ORGCD");

        		this.Div.form.Div00.form.btn_sch.set_visible(false);
        		this.lfn_schoolInfo();
        	}else{
        		this.Div.form.Div00.form.btn_sch.set_visible(true);
        	}
        	this.lfn_selectSurvInfo();
        };

        this.btn_sch_onclick = function(obj,e)
        {
        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("sch_popup"
        	                  , 0
        					  , 0
        					  , 0
        					  , 0
        					  , null
        					  , null
        					  , "CM::CMSchool.xfdl");
        	objChildFrame.set_showtitlebar(false);
        	objChildFrame.set_dragmovetype("all");
        	objChildFrame.set_openalign("center middle");
        	objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)")

        	var objParam = {param3:'I'};
        	objChildFrame.showModal(this.getOwnerFrame()
        	                      , objParam
        						  , this
        						  , "fn_popupCallback");
        };
        this.fn_popupCallback = function(strPopupID, strReturn)
        {
        	if(strReturn == undefined){
        		return;
        	}
        	if(strPopupID == "sch_popup"){
        		//this.alert("Return Value: " + strReturn);
        		//SCHCD/SCHNM/ORGCD/ORGNM
        		var arr = strReturn.split(",");
        		this.Div.form.Div00.form.in_edit_sch.set_value(arr[1]+"-"+arr[3]);
        		this.fv_SCHCD=arr[0];
        		this.fv_ORGCD=arr[2];
        		this.fv_UNIGRADENM=arr[4];
        	}
        };


        this.lfn_selectSurvInfo = function(){
        	var strParam = "";
        	strParam += "SURVKINDCD="	+ "AG" 	+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	////trace(this.dsSearch.saveXML());
        	this.gfnTransaction("selectSurvReg",
        						"/swiss/ad/surv/selectSurvReg.do",
        						"dsSearch=dsSearch",
        						"dsSurvInfo=dsResult",
        						"",
        						"fnCallback",
        						false);
        };


        this.lfn_report = function(rpt,rptname)
        {
        	if("" == this.fv_SCHCD || undefined == this.fv_SCHCD){
        		alert("학교를 선택해 주세요.");
        		return;
        	}
        	if("대학" != this.fv_UNIGRADENM)
        		rpt = rpt+"_2";
        	var SURVSEQ 	= this.Div.form.Div00.form.in_cb_sruvseq.value;
        	var SURVKINDCD 	= this.fv_SURVKINDCD;
        	var SCHCD  		= this.fv_SCHCD;
        	var ORGCD  		= this.fv_ORGCD;
        	var param = "SURVSEQ["+SURVSEQ+"] SCHCD["+SCHCD+"] ORGCD["+ORGCD+"] PRINT_GB[]";
        	//var param = "SURVSEQ[181231] SCHCD[53013600] ORGCD[1] PRINT_GB[]";
        	var objFrame = new ChildFrame();
        	var objParam = {param1:"rt/"+rpt+".mrd" , param2:param };
        	//var objParam = {param1:"rt/summary/rt09r00.mrd" , param2:param };
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, rptname, objParam.param1 + " " + param );  //접속기록
        	objFrame.init( rpt, null, null, 600, 600);
        	objFrame.set_showtitlebar(false);
        	objFrame.set_openalign("center middle");
        	objFrame.set_formurl( "CM::CMRdViewer.xfdl" );
        	objFrame.showModal(rpt ,this.getOwnerFrame() ,objParam );
        };

        this.Div_Div01_btn_rpt01_onclick = function(obj,e)
        {
        	this.lfn_report("summary/rt31r00","취업현황(요약)");
        };

        this.Div_Div01_btn_rpt02_onclick = function(obj,e)
        {
        	this.lfn_report("detail/rt31r00","취업현황(상세)");
        };

        this.Div_Div01_btn_rpt03_onclick = function(obj,e)
        {
        	this.lfn_report("summary/rt32r00","유지취업(요약)");
        };

        this.Div_Div01_btn_rpt04_onclick = function(obj,e)
        {
        	this.lfn_report("detail/rt32r00","유지취업(상세)");
        };

        this.Div_Div01_btn_rpt01_1_onclick = function(obj,e)
        {
        	this.lfn_report("summary/rt33r00","산업분류(요약)");
        };

        this.Div_Div01_btn_rpt02_1_onclick = function(obj,e)
        {
        	this.lfn_report("detail/rt33r00","산업분류(상세)");
        };

        this.Div_Div01_btn_rpt03_1_onclick = function(obj,e)
        {
        	this.lfn_report("summary/rt34r00","기업규모(요약)");
        };

        this.Div_Div01_btn_rpt04_1_onclick = function(obj,e)
        {
        	this.lfn_report("detail/rt34r00","기업규모(상세)");
        };

        this.Div_Div01_btn_rpt01_2_onclick = function(obj,e)
        {
        	this.lfn_report("summary/rt35r00","기업형태(요약)");
        };

        this.Div_Div01_btn_rpt02_2_onclick = function(obj,e)
        {
        	this.lfn_report("detail/rt35r00","기업형태(상세)");
        };

        this.Div_Div01_btn_rpt03_2_onclick = function(obj,e)
        {
        	this.lfn_report("summary/rt36r00","근무지역(요약)");
        };

        this.Div_Div01_btn_rpt04_2_onclick = function(obj,e)
        {
        	this.lfn_report("detail/rt36r00","근무지역(상세)");
        };

        this.Div_Div01_btn_rpt01_3_onclick = function(obj,e)
        {
        	this.lfn_report("summary/rt37r00","초임급여(요약)");
        };

        this.Div_Div01_btn_rpt02_3_onclick = function(obj,e)
        {
        	this.lfn_report("detail/rt37r00","초임급여(상세)");
        };

        this.Div_Div01_btn_rpt03_3_onclick = function(obj,e)
        {
        	this.lfn_report("summary/rt38r00","자격증취득(요약)");
        };

        this.Div_Div01_btn_rpt04_3_onclick = function(obj,e)
        {
        	this.lfn_report("detail/rt38r00","자격증취득(상세)");
        };

        this.lfn_schoolInfo = function(){
        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";
        	strParam += "USERID="		+ this.fv_USERID 		+ "ª";
        	strParam += "USERGRPTYPE="	+ this.fv_USERGRPTYPE 	+ "ª";
        	strParam += "SCHCD="		+ this.fv_SCHCD 		+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	////trace(this.dsSearch.saveXML());
        	this.gfnTransaction("schoolInfo",
        						"/swiss/cm/schoolInfo.do",
        						"dsSearch=dsSearch",
        						"dsSchool=dsSchool",
        						"",
        						"fnCallback",
        						false);
        };

        this.Div_Div00_in_cb_sruvseq_onitemchanged = function(obj,e)
        {
        	if("4" == this.fv_USERGRPTYPE || "5" == this.fv_USERGRPTYPE || "6" == this.fv_USERGRPTYPE ){
        		this.lfn_schoolInfo();
        	}
        };

        this.chkActive = function(){
        	var strParam = "";
        	strParam += "PAGEID=" + this.fv_MENUID + "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	////trace(this.dsSearch.saveXML());
        	//alert(strParam);
        	//return false;

        	//alert("start active");

        	this.gfnTransaction("chkActive",
        						"/swiss/ad/user/chkActive.do",
        						"dsSearch=dsSearch",
        						"dsActive=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.rt09m00_onload,this);
            this.Div.form.Static01.addEventHandler("onclick",this.Div_Static01_onclick,this);
            this.Div.form.Div00.form.in_cb_sruvseq.addEventHandler("onitemchanged",this.Div_Div00_in_cb_sruvseq_onitemchanged,this);
            this.Div.form.Div00.form.in_edit_sch.addEventHandler("onkeydown",this.Div_sub_search_onkeydown,this);
            this.Div.form.Div00.form.btn_sch.addEventHandler("onclick",this.btn_sch_onclick,this);
            this.Div.form.Div01.form.btn_rpt01.addEventHandler("onclick",this.Div_Div01_btn_rpt01_onclick,this);
            this.Div.form.Div01.form.btn_rpt02.addEventHandler("onclick",this.Div_Div01_btn_rpt02_onclick,this);
            this.Div.form.Div01.form.btn_rpt04.addEventHandler("onclick",this.Div_Div01_btn_rpt04_onclick,this);
            this.Div.form.Div01.form.btn_rpt03.addEventHandler("onclick",this.Div_Div01_btn_rpt03_onclick,this);
            this.Div.form.Div01.form.btn_rpt01_1.addEventHandler("onclick",this.Div_Div01_btn_rpt01_1_onclick,this);
            this.Div.form.Div01.form.btn_rpt02_1.addEventHandler("onclick",this.Div_Div01_btn_rpt02_1_onclick,this);
            this.Div.form.Div01.form.btn_rpt04_1.addEventHandler("onclick",this.Div_Div01_btn_rpt04_1_onclick,this);
            this.Div.form.Div01.form.btn_rpt03_1.addEventHandler("onclick",this.Div_Div01_btn_rpt03_1_onclick,this);
            this.Div.form.Div01.form.btn_rpt01_2.addEventHandler("onclick",this.Div_Div01_btn_rpt01_2_onclick,this);
            this.Div.form.Div01.form.btn_rpt02_2.addEventHandler("onclick",this.Div_Div01_btn_rpt02_2_onclick,this);
            this.Div.form.Div01.form.btn_rpt04_2.addEventHandler("onclick",this.Div_Div01_btn_rpt04_2_onclick,this);
            this.Div.form.Div01.form.btn_rpt03_2.addEventHandler("onclick",this.Div_Div01_btn_rpt03_2_onclick,this);
            this.Div.form.Div01.form.btn_rpt01_3.addEventHandler("onclick",this.Div_Div01_btn_rpt01_3_onclick,this);
            this.Div.form.Div01.form.btn_rpt02_3.addEventHandler("onclick",this.Div_Div01_btn_rpt02_3_onclick,this);
            this.Div.form.Div01.form.btn_rpt03_3.addEventHandler("onclick",this.Div_Div01_btn_rpt03_3_onclick,this);
            this.Div.form.Div01.form.btn_rpt04_3.addEventHandler("onclick",this.Div_Div01_btn_rpt04_3_onclick,this);
        };

        this.loadIncludeScript("rt09m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
