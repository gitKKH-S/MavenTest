(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("rt10m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,290);
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


            obj = new Dataset("dsOutExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"UNIQUEKEY\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"DNCD\" type=\"STRING\" size=\"256\"/><Column id=\"DNNM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPENM\" type=\"STRING\" size=\"256\"/><Column id=\"REASONNM\" type=\"STRING\" size=\"256\"/><Column id=\"EXCHANGEYN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsActive", this);
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","280",null,null,null,null,null,null,this);
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

            obj = new Static("Static00","0","0","30","280",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","280",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Div("sub_title_wrap","30","20","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            this.Div.addChild(obj.name, obj);

            obj = new Static("sub_title","0","0","120","32",null,null,null,null,null,null,this.Div.form.sub_title_wrap.form);
            obj.set_taborder("0");
            obj.set_text("자체점검");
            obj.set_cssclass(" title_t2");
            this.Div.form.sub_title_wrap.addChild(obj.name, obj);

            obj = new Div("Div00","30","60","1200","74",null,null,null,null,null,null,this.Div.form);
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

            obj = new Static("Static00_01_01","416","28",null,"23","688",null,null,null,null,null,this.Div.form.Div00.form);
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

            obj = new Div("Div01","30","Div00:20","1200","90",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_rpt01","58","23","491","40",null,null,null,null,null,null,this.Div.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("건강보험 직장가입 부적격자 조회");
            obj.set_cssclass("btn_sty05");
            this.Div.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","600","20","1","48",null,null,null,null,null,null,this.Div.form.Div01.form);
            obj.set_taborder("1");
            obj.set_background("#e4e4e4");
            this.Div.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_rpt02",null,"24","491","40","58",null,null,null,null,null,this.Div.form.Div01.form);
            obj.set_taborder("2");
            obj.set_text("건강보험 직장가입 부적격자 점검결과");
            obj.set_cssclass("btn_sty05");
            obj.set_visible("true");
            this.Div.form.Div01.addChild(obj.name, obj);

            obj = new Grid("gd_00","130","254","1198","155",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_cssclass("grid_pdShort,grid_sty04");
            obj.set_binddataset("dsOutExcel");
            obj.set_autosizingtype("none");
            obj.set_autoenter("select");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"140\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"146\"/><Column size=\"60\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"조사회차\" padding=\"0px\" autosizecol=\"limitmin\"/><Cell col=\"1\" text=\"개인식별키\" padding=\"0px\" autosizecol=\"limitmin\"/><Cell col=\"2\" text=\"학교코드\" padding=\"0px\" autosizecol=\"limitmin\"/><Cell col=\"3\" text=\"학교명\" padding=\"0px\" autosizecol=\"limitmin\"/><Cell col=\"4\" text=\"본분교&#13;&#10;코드\" padding=\"0px\" autosizecol=\"limitmin\"/><Cell col=\"5\" text=\"본분교명\" padding=\"0px\" autosizecol=\"limitmin\"/><Cell col=\"6\" text=\"학과코드\" padding=\"0px\" autosizecol=\"limitmin\"/><Cell col=\"7\" text=\"학과명\" padding=\"0px\" autosizecol=\"limitmin\"/><Cell col=\"8\" text=\"주야구분&#13;&#10;코드\" padding=\"0px\" autosizecol=\"limitmin\"/><Cell col=\"9\" text=\"주야구분\" padding=\"0px\" autosizecol=\"limitmin\"/><Cell col=\"10\" text=\"취업구분&#13;&#10;코드\"/><Cell col=\"11\" text=\"취업구분\"/><Cell col=\"12\" text=\"사유\"/><Cell col=\"13\" text=\"외국인&#13;&#10;여부\"/></Band><Band id=\"body\"><Cell text=\"bind:SURVSEQ\" padding=\"0px\" autosizecol=\"default\"/><Cell col=\"1\" text=\"bind:UNIQUEKEY\" padding=\"0px\" autosizecol=\"default\"/><Cell col=\"2\" text=\"bind:SCHCD\" padding=\"0px\" autosizecol=\"default\"/><Cell col=\"3\" text=\"bind:SCHNM\" displaytype=\"normal\" combodataset=\"dsJobcode\" combodatacol=\"JOBTYPENM\" combocodecol=\"JOBTYPECD\" padding=\"0px\" autosizecol=\"default\"/><Cell col=\"4\" text=\"bind:ORGCD\" padding=\"0px\" autosizecol=\"default\"/><Cell col=\"5\" text=\"bind:ORGNM\" padding=\"0px\" autosizecol=\"default\"/><Cell col=\"6\" text=\"bind:DEPTCD\" padding=\"0px\" autosizecol=\"default\"/><Cell col=\"7\" text=\"bind:DEPTNM\" padding=\"0px\" autosizecol=\"default\"/><Cell col=\"8\" text=\"bind:DNCD\" cursor=\"pointer\" padding=\"0px\" autosizecol=\"default\"/><Cell col=\"9\" text=\"bind:DNNM\" editautoselect=\"true\" editinputtype=\"digit\" editmaxlength=\"5\" textAlign=\"center\" padding=\"0px\" autosizecol=\"default\"/><Cell col=\"10\" text=\"bind:JOBTYPECD\"/><Cell col=\"11\" text=\"bind:JOBTYPENM\"/><Cell col=\"12\" text=\"bind:REASONNM\"/><Cell col=\"13\" text=\"bind:EXCHANGEYN\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("gd_01","140","264","1198","155",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_cssclass("grid_pdShort,grid_sty04");
            obj.set_binddataset("dsOutExcel");
            obj.set_autosizingtype("none");
            obj.set_autoenter("select");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"140\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"60\"/><Column size=\"146\"/><Column size=\"142\"/><Column size=\"65\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"조사회차\" padding=\"0px\" autosizecol=\"limitmin\"/><Cell col=\"1\" text=\"개인식별키\" padding=\"0px\" autosizecol=\"limitmin\"/><Cell col=\"2\" text=\"학교코드\" padding=\"0px\" autosizecol=\"limitmin\"/><Cell col=\"3\" text=\"학교명\" padding=\"0px\" autosizecol=\"limitmin\"/><Cell col=\"4\" text=\"본분교&#13;&#10;코드\" padding=\"0px\" autosizecol=\"limitmin\"/><Cell col=\"5\" text=\"본분교명\" padding=\"0px\" autosizecol=\"limitmin\"/><Cell col=\"6\" text=\"학과코드\" padding=\"0px\" autosizecol=\"limitmin\"/><Cell col=\"7\" text=\"학과명\" padding=\"0px\" autosizecol=\"limitmin\"/><Cell col=\"8\" text=\"주야구분&#13;&#10;코드\" padding=\"0px\" autosizecol=\"limitmin\"/><Cell col=\"9\" text=\"주야구분\" padding=\"0px\" autosizecol=\"limitmin\"/><Cell col=\"10\" text=\"취업구분&#13;&#10;코드\"/><Cell col=\"11\" text=\"취업구분\"/><Cell col=\"12\" text=\"외국인&#13;&#10;여부\"/><Cell col=\"13\" text=\"점검 후 취업구분코드\"/><Cell col=\"14\" text=\"점검 후 취업구분\"/><Cell col=\"15\" text=\"점검결과\"/></Band><Band id=\"body\"><Cell text=\"bind:SURVSEQ\" padding=\"0px\" autosizecol=\"default\"/><Cell col=\"1\" text=\"bind:UNIQUEKEY\" padding=\"0px\" autosizecol=\"default\"/><Cell col=\"2\" text=\"bind:SCHCD\" padding=\"0px\" autosizecol=\"default\"/><Cell col=\"3\" text=\"bind:SCHNM\" displaytype=\"normal\" combodataset=\"dsJobcode\" combodatacol=\"JOBTYPENM\" combocodecol=\"JOBTYPECD\" padding=\"0px\" autosizecol=\"default\"/><Cell col=\"4\" text=\"bind:ORGCD\" padding=\"0px\" autosizecol=\"default\"/><Cell col=\"5\" text=\"bind:ORGNM\" padding=\"0px\" autosizecol=\"default\"/><Cell col=\"6\" text=\"bind:DEPTCD\" padding=\"0px\" autosizecol=\"default\"/><Cell col=\"7\" text=\"bind:DEPTNM\" padding=\"0px\" autosizecol=\"default\"/><Cell col=\"8\" text=\"bind:DNCD\" cursor=\"pointer\" padding=\"0px\" autosizecol=\"default\"/><Cell col=\"9\" text=\"bind:DNNM\" editautoselect=\"true\" editinputtype=\"digit\" editmaxlength=\"5\" textAlign=\"center\" padding=\"0px\" autosizecol=\"default\"/><Cell col=\"10\" text=\"bind:JOBTYPECD\"/><Cell col=\"11\" text=\"bind:JOBTYPENM\"/><Cell col=\"12\" text=\"bind:EXCHANGEYN\"/><Cell col=\"13\" text=\"bind:JOBTYPECD_AFT\"/><Cell col=\"14\" text=\"bind:JOBTYPENM_AFT\"/><Cell col=\"15\" text=\"bind:REASONNM_AFT\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,290,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("rt10m00.xfdl","CM::common.xjs");
        this.addIncludeScript("rt10m00.xfdl","CM::utl_script.xjs");
        this.registerScript("rt10m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;
        this.executeIncludeScript("CM::utl_script.xjs"); /*include "CM::utl_script.xjs"*/;
        //기본변수세팅
        this.fv_USERID = "";
        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "AG";
        this.fv_SCHCD= "" ;
        this.fv_ORGCD= "";
        this.fv_USERGRPTYPE="";
        this.fv_UNIGRADENM="";
        this.fv_MENUID = "rt10m00";
        this.fv_MENUNM = "조사결과>자체점검";
        var objApp 		= nexacro.getApplication();
        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceID == "selectSurvReg"){

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
        		if(serviceID == "selectSelfVerify"){
        			this.lfn_excelOutputSave();
        		}
        		if(serviceID == "selectSelfVerifyResult"){
        			this.lfn_excelOutputSaveResult();
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

        this.rt10m00_onload = function(obj,e)
        {
        	this.chkActive();

        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='AG'",0);
        	this.fv_USERID = objApp.gds_login_info.getColumn(idx, "USERID") ;
        	this.fv_SURVSEQ = objApp.gds_login_info.getColumn(idx, "SURVSEQ");
        	this.fv_USERGRPTYPE = objApp.gds_login_info.getColumn(idx, "USERGRPTYPE");
        	this.fv_SCHCD = objApp.gds_param.getColumn(0, "SCHCD");
        	this.fv_ORGCD = objApp.gds_param.getColumn(0, "ORGCD");

        	if("4" == this.fv_USERGRPTYPE || "5" == this.fv_USERGRPTYPE || "6" == this.fv_USERGRPTYPE ){
        		this.Div.form.Div00.form.btn_sch.set_visible(false);
        		this.lfn_schoolInfo();
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
        	strParam += "STARTSURVSEQ="	+ "211231" 	+ "ª"; /* 조사기준20.12.31 이후 자료만 조회 2021-04-27 */
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

        this.Div_Div01_btn_rpt01_onclick = function(obj,e)
        {
        	//alert("건강보험 직장가입 부적격자 조회기간이 아닙니다.");



        	//alert("chkRtn");
        	var chkIdx = this.Div.form.Div00.form.in_cb_sruvseq.index;
        	//alert("chkIdx="+chkIdx);
        	//return false;

        	if(this.utlf_IsNull(this.fv_SCHCD)){
        		alert("학교를 선택해주세요");
        		return false;
        	}

        	var strParam = "";
        	strParam += "SURVSEQ=" + this.Div.form.Div00.form.in_cb_sruvseq.value + "ª";
        	strParam += "SCHCD=" + this.fv_SCHCD + "ª";
        	strParam += "ORGCD=" + this.fv_ORGCD + "ª";
        	strParam += "CHKIDX=" + chkIdx + "ª";
        	strParam += "CD=7ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "건강보험 직장가입 부적격자 조회", strParam);  //건강보험 직장가입 부적격자 조회
        	this.gfnTransaction("selectSelfVerify",
        						"/swiss/rt/verifyresult/selectSelfVerify.do",
        						"dsSearch=dsSearch",
        						"dsOutExcel=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        /*
        this.Div_Div01_btn_rpt02_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        {
        	this.lfn_report("detail/rt01r00");
        };

        this.Div_Div01_btn_rpt03_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        {
        	this.lfn_report("summary/rt02r00");
        };
        */

        this.lfn_excelOutputSave = function()
        {
        	if(this.dsOutExcel.getRowCount()==0){
        		alert("건강보험 직장가입 부적격자가 없습니다.");
        		//alert("확인 할 내용이 없습니다.");
        		return;
        	}
        	this.utlf_excelDownload("자체점검_"+this.getFormatDate(),this.Div.form.gd_00,this.Export00_onsuccess);
        };
        this.lfn_excelOutputSaveResult = function()
        {
        	if(this.dsOutExcel.getRowCount()==0){
        		alert("자체점검 검증결과 확인 대상자가 없습니다.");
        		//alert("확인 할 내용이 없습니다.");
        		return;
        	}
        	this.utlf_excelDownload("점검결과_"+this.getFormatDate(),this.Div.form.gd_01,this.Export00_onsuccess);
        };
        this.Export00_onsuccess = function (obj, e )
        {
        }

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

        /* USERGRPTYPE :4,5,6 조사기준별 학교리스트 */
        this.Div_Div00_in_cb_sruvseq_onitemchanged = function(obj,e)
        {
        	if("4" == this.fv_USERGRPTYPE || "5" == this.fv_USERGRPTYPE || "6" == this.fv_USERGRPTYPE ){
        		this.lfn_schoolInfo();
        	}
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

        this.Div_Div01_btn_rpt02_onclick = function(obj,e)
        {

        	//alert("건강보험 직장가입 부적격자 점검결과 조회기간이 아닙니다.");
        	//return;

        	if(this.utlf_IsNull(this.fv_SCHCD)){
        		alert("학교를 선택해주세요");
        		return false;
        	}

        	var strParam = "";
        	strParam += "SURVSEQ=" + this.Div.form.Div00.form.in_cb_sruvseq.value + "ª";
        	strParam += "SCHCD=" + this.fv_SCHCD + "ª";
        	strParam += "ORGCD=" + this.fv_ORGCD + "ª";
        	strParam += "CD=8ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "건강보험 직장가입 부적격자 점검결과", strParam);  //건강보험 직장가입 부적격자 점검결과
        	this.gfnTransaction("selectSelfVerifyResult",
        						"/swiss/rt/verifyresult/selectSelfVerify.do",
        						"dsSearch=dsSearch",
        						"dsOutExcel=dsResult",
        						"",
        						"fnCallback",
        						false);
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
            this.addEventHandler("onload",this.rt10m00_onload,this);
            this.Div.form.Static01.addEventHandler("onclick",this.Div_Static01_onclick,this);
            this.Div.form.Div00.form.in_cb_sruvseq.addEventHandler("onitemchanged",this.Div_Div00_in_cb_sruvseq_onitemchanged,this);
            this.Div.form.Div00.form.in_edit_sch.addEventHandler("onkeydown",this.Div_sub_search_onkeydown,this);
            this.Div.form.Div00.form.btn_sch.addEventHandler("onclick",this.btn_sch_onclick,this);
            this.Div.form.Div01.form.btn_rpt01.addEventHandler("onclick",this.Div_Div01_btn_rpt01_onclick,this);
            this.Div.form.Div01.form.Static02_00_00.addEventHandler("onclick",this.Div_Div01_Static02_00_00_onclick,this);
            this.Div.form.Div01.form.btn_rpt02.addEventHandler("onclick",this.Div_Div01_btn_rpt02_onclick,this);
        };

        this.loadIncludeScript("rt10m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
