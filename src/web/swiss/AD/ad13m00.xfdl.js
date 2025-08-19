(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ad13m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("15px/normal \"SpoqaHanSans-Regular\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,830);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMain", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"200\"/><Column id=\"DIVISION\" type=\"STRING\" size=\"200\"/><Column id=\"TARGET\" type=\"STRING\" size=\"200\"/><Column id=\"SUBJECT\" type=\"STRING\" size=\"500\"/><Column id=\"MESSAGE\" type=\"STRING\" size=\"500\"/><Column id=\"_chk\" type=\"STRING\" size=\"256\"/><Column id=\"VERINO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVPROSTATUSNM\" type=\"STRING\" size=\"200\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"200\"/><Column id=\"DIVISION\" type=\"STRING\" size=\"200\"/><Column id=\"TARGET\" type=\"STRING\" size=\"200\"/><Column id=\"SUBJECT\" type=\"STRING\" size=\"500\"/><Column id=\"MESSAGE\" type=\"STRING\" size=\"500\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSave", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"200\"/><Column id=\"DIVISION\" type=\"STRING\" size=\"200\"/><Column id=\"TARGET\" type=\"STRING\" size=\"200\"/><Column id=\"SUBJECT\" type=\"STRING\" size=\"500\"/><Column id=\"MESSAGE\" type=\"STRING\" size=\"500\"/><Column id=\"_chk\" type=\"STRING\" size=\"256\"/><Column id=\"VERINO\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"STRING\" size=\"200\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"200\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"200\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"500\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"500\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"256\"/><Column id=\"STUDENTNO\" type=\"STRING\" size=\"256\"/><Column id=\"VERINO\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"MESSAGE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSurvInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVENDDT\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SURVYEAR\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSTATUSCDNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"DATETIME\" size=\"17\"/><Column id=\"SURVOBJ\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSTRTDT\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSTATUSCD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVNM\" type=\"STRING\" size=\"32\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"RN\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SURVKINDNM\" type=\"STRING\" size=\"32\"/><Column id=\"REMARK\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","825",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Div("sub_title_wrap","30","20","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            this.Div.addChild(obj.name, obj);

            obj = new Static("sub_title","0","0","370","32",null,null,null,null,null,null,this.Div.form.sub_title_wrap.form);
            obj.set_taborder("0");
            obj.set_text("졸업생정보");
            obj.set_cssclass(" title_t2");
            this.Div.form.sub_title_wrap.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","20",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","820",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Div("sub_search","30","60","1200","74",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","416","20","40","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("0");
            obj.set_text("구분");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_00","Static00:30","20","240","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("2");
            obj.set_accessibilitylabel("입고년도");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div_form_sub_search_form_in_cb_00_innerdataset = new nexacro.NormalDataset("Div_form_sub_search_form_in_cb_00_innerdataset", obj);
            Div_form_sub_search_form_in_cb_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">NULL값 확인</Col><Col id=\"datacolumn\">NULL값 확인</Col></Row><Row><Col id=\"codecolumn\">형식 검증</Col><Col id=\"datacolumn\">형식 검증</Col></Row><Row><Col id=\"codecolumn\">내용 검증</Col><Col id=\"datacolumn\">내용 검증</Col></Row></Rows>");
            obj.set_innerdataset(Div_form_sub_search_form_in_cb_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Button("btn_proc","in_cb_00:108","25","100","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("1");
            obj.set_text("검증");
            obj.set_cssclass("btn_styLarge");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Button("btn_verirst","btn_proc:20","25","100","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("3");
            obj.set_text("검증내역저장");
            obj.set_cssclass("btn_styLarge");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01","30","20","80","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("4");
            obj.set_text("조사기준");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_01","Static00_01:10","20","220","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("5");
            obj.set_datacolumn("SURVSEQNM");
            obj.set_codecolumn("SURVSEQ");
            obj.set_innerdataset("dsSurvInfo");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","820",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("gd_00","30","sub_search:20","1200","660",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_autofittype("col");
            obj.set_autoenter("none");
            obj.set_binddataset("dsMain");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"90\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"748\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"검증번호\"/><Cell col=\"2\" text=\"구분\"/><Cell col=\"3\" text=\"대상\"/><Cell col=\"4\" text=\"내용\" border=\"0px none,0px solid #a5a5ff,1px solid #a5a5a5,0px none\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"1\" text=\"bind:_chk\"/><Cell col=\"1\" text=\"bind:VERINO\"/><Cell col=\"2\" text=\"bind:DIVISION\"/><Cell col=\"3\" text=\"bind:TARGET\"/><Cell col=\"4\" text=\"bind:SUBJECT\" textAlign=\"left\" padding=\"0px 0px 0px 10px\" border=\"0px none,0px solid #a5a5a5,1px solid #a5a5a5,0px none\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("gd_01","515","gd_00:-363","670","170",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_autofittype("none");
            obj.set_autoenter("none");
            obj.set_binddataset("dsExcel");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj.set_visible("false");
            obj.set_cssclass("default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"126\"/><Column size=\"150\"/><Column size=\"129\"/><Column size=\"133\"/><Column size=\"200\"/><Column size=\"111\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"300\"/><Column size=\"300\"/><Column size=\"300\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"순번\" color=\"#000000\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"1\" text=\"검증번호\" color=\"#000000\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"2\" text=\"조사기준\" color=\"#000000\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"3\" text=\"조사종류\" color=\"#000000\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"4\" text=\"학교코드\" color=\"#000000\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"5\" text=\"학교\" color=\"#000000\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"6\" text=\"본분교코드\" color=\"#000000\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"7\" text=\"본분교\" color=\"#000000\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"8\" text=\"학과\" color=\"#000000\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"9\" text=\"학번\" color=\"#000000\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"10\" text=\"검증번호\" color=\"#000000\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"11\" text=\"검증내용\" color=\"#000000\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"12\" text=\"검증컬럼\" color=\"#000000\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"13\" text=\"컬럼내용\" color=\"#000000\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" checkboxtruevalue=\"1\" text=\"expr:currow+1\" color=\"#595959\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"1\" text=\"bind:VERINO\" color=\"#595959\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"2\" text=\"bind:SURVSEQ\" color=\"#595959\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"3\" text=\"bind:SURVKINDCD\" color=\"#595959\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"4\" text=\"bind:SCHCD\" color=\"#595959\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"5\" text=\"bind:SCHNM\" color=\"#595959\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"6\" text=\"bind:ORGCD\" color=\"#595959\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"7\" text=\"bind:ORGNM\" color=\"#595959\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"8\" text=\"bind:DEPTNM\" color=\"#595959\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"9\" text=\"bind:STUDENTNO\" color=\"#595959\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"10\" text=\"bind:VERINO\" color=\"#595959\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"11\" text=\"bind:MESSAGE\" textAlign=\"left\" color=\"#595959\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"12\" text=\"bind:COLUMN_NAME\" color=\"#595959\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"13\" text=\"bind:COLUMN_INFO\" textAlign=\"center\" color=\"#595959\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,830,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ad13m00.xfdl","CM::common.xjs");
        this.addIncludeScript("ad13m00.xfdl","CM::utl_script.xjs");
        this.registerScript("ad13m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;
        this.executeIncludeScript("CM::utl_script.xjs"); /*include "CM::utl_script.xjs"*/;
        this.fv_USERID ="";
        this.fv_SURVSEQ="";
        this.fv_SURVKINDCD="GP";

        this.fv_MENUNM = "관리자>형식검증>졸업생정보";

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
        			this.Div.form.sub_search.form.in_cb_01.set_index(0);
        			this.listVerify();
        		}
        		if(serviceID == "listVerify"){
        			this.dsMain.addColumn("_chk","string");
        		}
        		if(serviceID == "procVerify"){
        			alert("처리되었습니다.");
        		}
        		if(serviceID == "listVeriRst"){
        			this.utlf_excelDownload("형식검증_"+this.utlf_getFormatDate(),this.Div.form.gd_01,this.Export00_onsuccess);
        		}
         	}
        }

        this.listVerify = function(){
        	var strParam = "";
        	strParam += "DIVISION="		+ this.Div.form.sub_search.form.in_cb_00.value		+ "ª";
        	strParam += "SURVKINDCD="	+ 'GP'	+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.gfnTransaction("listVerify",
        						"/swiss/ad/formverification/listVerify.do",
        						"dsSearch=dsSearch",
        						"dsMain=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        this.ad13m00_onload = function(obj,e)
        {
        	var objApp 		= nexacro.getApplication();
        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='GP'",0);
        	this.fv_USERID = objApp.gds_login_info.getColumn(idx, "USERID") ;
        	this.fv_SURVSEQ = objApp.gds_login_info.getColumn(idx, "SURVSEQ");
        	this.Div.form.sub_search.form.in_cb_00.set_index(0);

        	this.lfn_selectSurvInfo();
        };


        this.Div_gd_00_onheadclick = function(obj,e)
        {
        	var sColID = obj.getCellProperty("body", e.cell, "text");   //"bind:colChk"
            sColID = sColID.substr(5);

            if(sColID == "_chk"){
        		var nValue = obj.getCellProperty("head", e.cell, "text");
        		nValue = (nValue == "1" ? "0" : "1");
        		for(var i=0; i < this.dsMain.rowcount; i++){
        			this.dsMain.setColumn(i, "_chk", nValue);
        		}
        		obj.setCellProperty("Head", e.cell, "text", nValue);
        	}
        };


        this.Div_sub_search_btn_proc_onclick = function(obj,e)
        {
        	this.dsSave.clearData();
        	for(var i=0; i < this.dsMain.rowcount; i++){
        		if(this.dsMain.getColumn(i,"_chk") =="1"){
        			var newRow = this.dsSave.addRow();
        			this.dsSave.copyRow(newRow, this.dsMain, i);
        			this.dsSave.addColumn("SURVSEQ","string");
        			this.dsSave.setColumn(newRow,"SURVSEQ",this.Div.form.sub_search.form.in_cb_01.value);
        			this.dsSave.addColumn("WORKERID","string");
        			this.dsSave.setColumn(newRow,"WORKERID",this.fv_USERID);
        		}
        	}
        	if(this.dsSave.rowcount==0) {
        		alert("검증번호를 선택해 주세요.");
        		return;
        	}
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "검증", "");  //접속기록
        	this.gfnTransaction("procVerify",
        						"/swiss/ad/formverification/procVerify.do",
        						"dsSearch=dsSave",
        						"",
        						"",
        						"fnCallback",
        						false);
        };

        this.lfn_selectSurvInfo = function(){
        	var strParam = "";
        	strParam += "SURVKINDCD="	+ "GP" 	+ "ª";
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

        this.Div_sub_search_btn_verirst_onclick = function(obj,e)
        {
        	this.dsSave.clearData();
        	for(var i=0; i < this.dsMain.rowcount; i++){
        		if(this.dsMain.getColumn(i,"_chk") =="1"){
        			var newRow = this.dsSave.addRow();
        			this.dsSave.copyRow(newRow, this.dsMain, i);
        			this.dsSave.addColumn("SURVSEQ","string");
        			this.dsSave.setColumn(newRow,"SURVSEQ",this.Div.form.sub_search.form.in_cb_01.value);
        			this.dsSave.addColumn("WORKERID","string");
        			this.dsSave.setColumn(newRow,"WORKERID",this.fv_USERID);
        		}
        	}
        //trace(this.dsSave.saveXML());
        	if(this.dsSave.rowcount==0) {
        		alert("검증번호를 선택해 주세요.");
        		return;
        	}

        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "검증내역저장", "");  //접속기록
        	this.gfnTransaction("listVeriRst",
        						"/swiss/ad/formverification/listVeriRst.do",
        						"dsSearch=dsSave",
        						"dsExcel=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        this.Export00_onsuccess = function (obj, e )
        {
        	//trace(e.eventid);
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ad13m00_onload,this);
            this.Div.form.sub_search.form.in_cb_00.addEventHandler("onitemchanged",this.listVerify,this);
            this.Div.form.sub_search.form.btn_proc.addEventHandler("onclick",this.Div_sub_search_btn_proc_onclick,this);
            this.Div.form.sub_search.form.btn_verirst.addEventHandler("onclick",this.Div_sub_search_btn_verirst_onclick,this);
            this.Div.form.sub_search.form.in_cb_01.addEventHandler("onitemchanged",this.Div_in_cb_00_onitemchanged,this);
            this.Div.form.gd_00.addEventHandler("onheadclick",this.Div_gd_00_onheadclick,this);
            this.Div.form.gd_00.addEventHandler("oncelldblclick",this.Div_gd_00_oncelldblclick,this);
            this.Div.form.gd_01.addEventHandler("onheadclick",this.Div_gd_00_onheadclick,this);
            this.Div.form.gd_01.addEventHandler("oncelldblclick",this.Div_gd_00_oncelldblclick,this);
        };

        this.loadIncludeScript("ad13m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
