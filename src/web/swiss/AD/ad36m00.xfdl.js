(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ad30m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,560);
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


            obj = new Dataset("dsMngreport", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"BUTTON_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUTTON_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"BBUILD_SQL\" type=\"STRING\" size=\"256\"/><Column id=\"TARGET_TABLE\" type=\"STRING\" size=\"256\"/><Column id=\"EXEC_USERID\" type=\"STRING\" size=\"256\"/><Column id=\"EXEC_USERNM\" type=\"STRING\" size=\"256\"/><Column id=\"EXEC_DATETIME\" type=\"STRING\" size=\"256\"/><Column id=\"GET_SQL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRtnResult", this);
            obj._setContents("<ColumnInfo><Column id=\"RESULTVAL\" type=\"STRING\" size=\"32\"/><Column id=\"RESULTTXT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excel", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTemp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMngreportMemo", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"MEMO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","550",null,null,null,null,null,null,this);
            obj.set_text("");
            obj.set_background("#f9f9f9");
            obj.set_border("0px solid");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","20",null,null,null,null,null,null,this.Div.form);
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","550",null,null,null,null,null,null,this.Div.form);
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","550",null,null,null,null,null,null,this.Div.form);
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Div("sub_title_wrap","30","20","1200","42",null,null,null,null,null,null,this.Div.form);
            this.Div.addChild(obj.name, obj);

            obj = new Static("sub_title","0","0","120","30",null,null,null,null,null,null,this.Div.form.sub_title_wrap.form);
            obj.set_text("연보출력");
            obj.set_cssclass(" title_t2");
            this.Div.form.sub_title_wrap.addChild(obj.name, obj);

            obj = new Div("Div00","30","60","1200","100",null,null,null,null,null,null,this.Div.form);
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","30","20","80","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_text("조사기준");
            obj.set_taborder("3");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Combo("in_cb_sruvseq","Static00:10","20","109","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_innerdataset("dsSurvInfo");
            obj.set_codecolumn("SURVSEQ");
            obj.set_datacolumn("SURVSEQNM");
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new TextArea("in_dsMngreportMemo","329","20","750","65",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("2");
            obj.getSetter("datasetid").set("dsMngreportMemo");
            obj.getSetter("columnid").set("MEMO");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_save","1089","20","100","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_text("저장");
            obj.set_cssclass("btn_sty01");
            obj.set_taborder("4");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","260","20","80","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_text("이슈내용");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","30","170","1200","380",null,null,null,null,null,null,this.Div.form);
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("gd_list_excel","1039","-1",null,null,null,null,null,null,null,null,this.Div.form.Div01.form);
            obj.set_binddataset("ds_excel");
            obj.set_autofittype("col");
            obj.set_visible("false");
            obj.set_cssclass("grid_sty03");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.Div.form.Div01.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,560,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div.form.Div00.form.in_dsMngreportMemo","value","dsMngreportMemo","MEMO");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ad36m00.xfdl","CM::common.xjs");
        this.addIncludeScript("ad36m00.xfdl","CM::utl_script.xjs");
        this.registerScript("ad36m00.xfdl", function() {
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
        this.fv_MENUNM = "메뉴명";
        this.fv_EXCELNAME="";
        var objApp = nexacro.getApplication();
        var arr=[];
        var arr2=[];
        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        		//trace(errCD);
        		//trace(errMSG);
        	}else{
        		if(serviceID == "selectSurvReg"){
        		//trace(this.dsSurvInfo.saveXML());
        			this.dsSurvInfo.addColumn("SURVSEQNM","string");
        			for(var i=0; i < this.dsSurvInfo.rowcount; i++){
        				var v_survseq = this.dsSurvInfo.getColumn(i,"SURVSEQ");
        				var v_SURVSEQNM = v_survseq.substr(0,2)+"."+v_survseq.substr(2,2)+"."+v_survseq.substr(4,2);
        				this.dsSurvInfo.setColumn(i,"SURVSEQNM",v_SURVSEQNM);
        				/* 조사기준11.12.31 이후 자료만 조회 2021-02-25 고객요청*/
        				 if(v_survseq.substr(0,2) < "19") this.dsSurvInfo.deleteRow(i);
        			}
        			for(var i=0; i < this.dsSurvInfo.rowcount; i++){
        				var v_survseq = this.dsSurvInfo.getColumn(i,"SURVSEQ");
        				/* 모든 조사기준에서 06.01 자료 제외 2021-02-25 고객요청*/
        				if(v_survseq.substr(2,4) == "0601") this.dsSurvInfo.deleteRow(i);
        			}

        		}
        		if(serviceID == "updateMemo"){
        			//trace(this.dsSurvInfo.saveXML());
        			var resultVal = this.dsRtnResult.getColumn(0, "RESULTVAL");
        			alert("메모가 저장되었습니다.");
        		}
        		if(serviceID == "getMemo"){
        			//trace(this.dsSurvInfo.saveXML());
        			/*
        			var chkSurvseq = this.Div.form.Div00.form.in_cb_sruvseq.value;
        			var chkMemo = this.dsMngreportMemo.getColumn(0,"MEMO");

        			alert("chkSurvseq="+chkSurvseq+",memo = "+chkMemo);

        			if(!chkMemo){
        				chkMemo = "";
        				alert("chkSurvseq="+chkSurvseq+",memo = "+chkMemo);
        				this.dsMngreportMemo.addRow();
        				this.dsMngreportMemo.addColumn("SURVSEQ","string","25");
        				this.dsMngreportMemo.addColumn("MEMO","string","1000");
        				this.dsMngreportMemo.addColumn("USERID","string","256");
        				this.dsMngreportMemo.addColumn("MODIFY_DATETIME","string","17");

        				this.dsMngreportMemo.setColumn(0,"SURVSEQ",chkSurvseq);
        				this.dsMngreportMemo.setColumn(0,"MEMO",chkMemo);
        			}else{
        				alert("in memo");
        			}
        			*/
        			//this.Div.form.Div00.form.in_dsMngreportMemo.innerText = chkMemo;
        		}
        		if(serviceID == "selectTargetTable"){
        			//alert("rtn selectTargetTable");
        			var objGridRows = this.Div.form.Div01.form.gd_list_excel;

        			//데이터셋복사
        			this.dsTemp.set_enableevent(false);
        			this.dsTemp.clearData();
        			this.dsTemp.copyData(this.ds_excel);
        			this.dsTemp.set_enableevent(true);

        			//그리드포맷적용
        			objGridRows.createFormat();

        			if(this.ds_excel.rowcount==0){
        				alert("파일저장할 내역이 없습니다");
        				return;
        			}

        			this.utlf_excelDownload(this.fv_EXCELNAME, this.Div.form.Div01.form.gd_list_excel, this.Export00_onsuccess);

        			}
        			if(serviceID == "insertTargetTable"){
        				var resultVal = this.dsRtnResult.getColumn(0, "RESULTVAL");
        				//console.log(resultVal);
        				if( resultVal !="Y"){
        					alert(this.fv_EXCELNAME + "이 빌드 되지 않았습니다");
        				}else{
        					alert(this.fv_EXCELNAME + "이 빌드 되었습니다.");
        					this.in_cb_sruvseq_onitemchanged();
        				}
        		}
         	}
        }

        this.ad30m00_onload = function(obj,e)
        {
        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='AG'",0);
        	this.fv_USERID = objApp.gds_login_info.getColumn(idx, "USERID") ;
        	this.fv_SURVSEQ = objApp.gds_login_info.getColumn(idx, "SURVSEQ");
        	this.fv_USERGRPTYPE = objApp.gds_login_info.getColumn(idx, "USERGRPTYPE");
        	this.lfn_selectSurvInfo();
        	this.Div.form.Div00.form.in_cb_sruvseq.set_index(0);
        	this.in_cb_sruvseq_onitemchanged();

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

        this.lfn_selectMngreportList = function(){//메뉴명과 조사기간이 맞는 버튼 조회
        	var strParam = "";
        	strParam += "MENU_NM="	+ this.fv_MENUNM 	+ "ª";
        	strParam += "SURVSEQ="	+ this.Div.form.Div00.form.in_cb_sruvseq.value + "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	////trace(this.dsSearch.saveXML());
        	this.gfnTransaction("selectSurvReg",
        						"/swiss/ad/mngreport/mngreportList.do",
        						"dsSearch=dsSearch",
        						"dsMngreport=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        this.lfn_getTargetTable = function(SURVSEQ,TARGET_TABLE){//타겟테이블에 생성유무 조회

        	var strParam = "";
        	strParam += "SURVSEQ="		+ SURVSEQ	+ "ª";
        	//strParam += "T_TABLE="	+ TARGET_TABLE.substr(7,3)	+ "ª";
        	strParam += "T_TABLE="	+ TARGET_TABLE	+ "ª";

        	var targetCon = "getTargetTable"+TARGET_TABLE.substr(7,3);

        	//alert(strParam);
        	//alert("getTargetTable_CON="+targetCon);
        	//return falsel;

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.gfnTransaction("getTargetTable",
        						"/swiss/ad/mngreport/getTargetTable.do",
        						"dsSearch=dsSearch",
        						"dsRtnResult=dsResult",
        						"",
        						"fnCallback",
        						false);
        }

        this.lfn_selectTargetTable = function(TARGET_TABLE){//생성시 GET 쿼리로 타겟테이블 데이터 조회
        	//alert("in lfn_sel TT="+TARGET_TABLE.substr(6,3));
        	var strParam = "";
        	strParam += "SURVSEQ="	+ this.Div.form.Div00.form.in_cb_sruvseq.value + "ª";
        	strParam += "T_TABLE="	+ TARGET_TABLE	+ "ª";

        	//var targetCon = "selectTargetTable="+TARGET_TABLE.substr(6,3);

        	//alert("selectTargetTable_CON="+strParam);
        	//return false;

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.gfnTransaction("selectTargetTable",
        						"/swiss/ad/mngreport/selectTargetTable.do",
        						"dsSearch=dsSearch",
        						"ds_excel=dsResult",
        						"",
        						"fnCallback",
        						true);
        }

        this.lfn_insertTargetTable = function(BBUILD_SQL){//미생성시 BUILD 쿼리로 타겟테이블 데이터 인설트
        /*
        	var strParam = "";
        	strParam += "BBUILD_SQL="		+ BBUILD_SQL	    + "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.gfnTransaction("insertTargetTable",
        						"/swiss/ad/mngreport/insertTargetTable.do",
        						"dsSearch=dsSearch",
        						"dsRtnResult=dsResult",
        						"",
        						"fnCallback",
        						true);
        */
        }

        this.Export00_onsuccess = function (obj, e )
        {

        }

        this.in_cb_sruvseq_onitemchanged = function(obj,e)
        {

        	for(var i = 0; i < arr.length; i++){
        		this.Div.form.Div01.form.removeChild(arr[i]);
        		this.Div.form.Div01.form.removeChild(arr2[i]);
        	}

        	var top  = 0;
        	var buttonHeight=20;
        	this.lfn_selectMngreportList();

        	for(var i = 0; i < this.dsMngreport.getCount(); i++){

        		this.lfn_getTargetTable(this.dsMngreport.getColumn(i,'SURVSEQ'),this.dsMngreport.getColumn(i,'TARGET_TABLE'));
        		var resultVal = this.dsRtnResult.getColumn(0, "RESULTVAL");

        		var objButton;
        		var objStatic;
        		objStatic = new Static(this.dsMngreport.getColumn(i,'EXEC_USERNM'), 300, 20+top, 500, 30);
        		if( resultVal !="Y"){
        			objButton = new Button(this.dsMngreport.getColumn(i,'BBUILD_SQL'), 30, 20+top, 400, 30);  //30(+150) 30 140 30 초기값
        			objButton.set_cssclass("btn_sty01");
        		}else{
        			//objButton = new Button(this.dsMngreport.getColumn(i,'GET_SQL').substr(0,6)+this.dsMngreport.getColumn(i,'TARGET_TABLE').substr(7,3), 30, 20+top, 400, 30);  //30(+150) 30 140 30 초기값
        			objButton = new Button(this.dsMngreport.getColumn(i,'TARGET_TABLE'), 30, 20+top, 400, 30);  //30(+150) 30 140 30 초기값
        			objButton.set_cssclass("btn_sty05");
        		}
        		//console.log(resultVal);
        		objButton.set_text(this.dsMngreport.getColumn(i,'BUTTON_NM'));
        		//objButton.set_item('T_TABLE',this.dsMngreport.getColumn(i,'TARGET_TABLE'));
        		objButton.setEventHandler("onclick", this.Div_Div01_btn_00_onclick,objButton);

        		//objStatic.set_text("작성자 ID : "+this.dsMngreport.getColumn(i,'EXEC_USERID')+",   작성자 : "+this.dsMngreport.getColumn(i,'EXEC_USERNM')+",   작성일시 : "+this.dsMngreport.getColumn(i,'EXEC_DATETIME'));
        		if(this.dsMngreport.getColumn(i,'EXEC_DATETIME')){
        			objStatic.set_text("작성일시 : "+this.dsMngreport.getColumn(i,'EXEC_DATETIME'));
        		}else{
        			objStatic.set_text("");
        		}

        		this.Div.form.Div01.addChild(this.dsMngreport.getColumn(i,'GROUP_NM')+" "+this.dsMngreport.getColumn(i,'BUTTON_NM'),objButton);//버튼추가
        		this.Div.form.Div01.addChild(this.dsMngreport.getColumn(i,'GROUP_NM')+" "+this.dsMngreport.getColumn(i,'BUTTON_NM')+" "+this.dsMngreport.getColumn(i,'EXEC_USERNM'),objStatic);//스태틱추가

        		arr[i]  = this.dsMngreport.getColumn(i,'GROUP_NM')+" "+this.dsMngreport.getColumn(i,'BUTTON_NM');
        		arr2[i] = this.dsMngreport.getColumn(i,'GROUP_NM')+" "+this.dsMngreport.getColumn(i,'BUTTON_NM')+" "+this.dsMngreport.getColumn(i,'EXEC_USERNM');
        		objButton.show();
        		objStatic.show();
        		top += 50;
        	}

        	this.Div.form.Div01.form.resetScroll();

        	this.getMemo();
        };

        this.getMemo = function(){
        	var chkSurvseq = this.Div.form.Div00.form.in_cb_sruvseq.value;

        	var strParam = "";
        	strParam += "SURVSEQ="		+ chkSurvseq	+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.gfnTransaction("getMemo",
        						"/swiss/ad/mngreport/getMemo.do",
        						"dsSearch=dsSearch",
        						"dsMngreportMemo=dsResult",
        						"",
        						"fnCallback",
        						false);
        }

        this.Div_Div01_btn_00_onclick = function(obj,e)
        {
        	//alert("id="+this.id+", name="+this.name);
        	//return false;
        	console.log(this);
        	/*
        	for (variable in objButton) {
        		alert("key: " + variable + ", value: " + this[variable]);
        	}
        	*/

        	this.parent.parent.parent.parent.parent.ds_excel.clear();
        	this.parent.parent.parent.parent.parent.fv_EXCELNAME = this.id;

        	if(this.cssclass == 'btn_sty01'){
        		//alert('생성안됨');
        		this.parent.parent.parent.parent.parent.lfn_insertTargetTable(this.name);
        	}else{
        		alert('다운로드:'+this.name);
        		this.parent.parent.parent.parent.parent.lfn_selectTargetTable(this.name);
        	}

        };

        this.btn_save_onclick = function(obj,e)
        {
        	//alert(1);
        	var chkSurvseq = this.Div.form.Div00.form.in_cb_sruvseq.value;
        	var chkMemo = this.Div.form.Div00.form.in_dsMngreportMemo.value;
        	if(chkMemo){

        	}else{
        		alert("메모내용을 입력하셔야 합니다.");
        		return false;
        	}
        	//alert(2);
        	//alert("chkMemo = ["+chkMemo+"]");

        	//alert("in lfn_sel TT="+TARGET_TABLE.substr(6,3));
        	var strParam = "";
        	strParam += "SURVSEQ="	+ chkSurvseq + "ª";
        	strParam += "IN_MEMO="	+ chkMemo + "ª";

        	//alert(targetCon);
        	//return false;

        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.gfnTransaction("updateMemo",
        						"/swiss/ad/mngreport/updateMemo.do",
        						"dsSearch=dsSearch",
        						"",
        						"",
        						"fnCallback",
        						true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ad30m00_onload,this);
            this.Div.form.Static01.addEventHandler("onclick",this.Div_Static01_onclick,this);
            this.Div.form.Div00.form.in_cb_sruvseq.addEventHandler("onitemchanged",this.in_cb_sruvseq_onitemchanged,this);
            this.Div.form.Div00.form.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
        };

        this.loadIncludeScript("ad36m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
