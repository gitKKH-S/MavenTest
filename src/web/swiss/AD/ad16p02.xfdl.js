(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ad16p02");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("15px/normal \"SpoqaHanSans-Regular\"");
            this.set_titletext("설문조사대상");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,695);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tarSchool", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROVINCECD\" type=\"STRING\" size=\"256\"/><Column id=\"PROVINCENM\" type=\"STRING\" size=\"256\"/><Column id=\"SCHKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"SCHFUNDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHFUNDNM\" type=\"STRING\" size=\"256\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"256\"/><Column id=\"USERGRPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USERGRPNM\" type=\"STRING\" size=\"256\"/><Column id=\"USERNM\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"ANSCNT\" type=\"STRING\" size=\"256\"/><Column id=\"TARGETYN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_province", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_schKind", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_schFound", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_targetYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CDNM\">전체</Col></Row><Row><Col id=\"CD\">true</Col><Col id=\"CDNM\">대상</Col></Row><Row><Col id=\"CD\">false</Col><Col id=\"CDNM\">비대상</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","695",null,null,null,null,null,null,this);
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

            obj = new Static("Static00","0","0","30","695",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","695",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Div("Div00","30","60","1200","150",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_search","1019","74","100","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("검색");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("label_schNm","25","70","60","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("10");
            obj.set_text("학교명");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Edit("in_edit_schNm","label_schNm:10","70","174","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("1");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("label_area","25","20","60","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("지역");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Combo("in_cb_crovince","label_area:10","20","174","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_province");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("label_s2","in_cb_crovince:50","20","70","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("학제구분");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Combo("in_cb_","label_s2:10","20","170","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_schKind");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("label_s3","in_cb_:50","20","100","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("6");
            obj.set_text("학교설립구분");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Combo("in_cb_schKind","label_s3:10","20","120","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_schFound");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("label_s5","in_cb_schKind:50","20","60","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("8");
            obj.set_text("대상여부");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Combo("in_cb_survTargetYn","label_s5:10","20","150","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("9");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_innerdataset("ds_targetYn");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("label_userNm","in_edit_schNm:50","70","70","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("11");
            obj.set_text("사용자명");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Edit("in_edit_userNm","label_userNm:10","70","168","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("12");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_fileDn","30","Div00:20","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_text("파일저장");
            obj.set_cssclass("btn_sty05");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("gd_list","30","btn_fileDn:20","1200","320",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_binddataset("ds_tarSchool");
            obj.set_autofittype("col");
            obj.set_scrollbartype("default none");
            obj.set_cssclass("default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"49\"/><Column size=\"68\"/><Column size=\"83\"/><Column size=\"144\"/><Column size=\"80\"/><Column size=\"197\"/><Column size=\"101\"/><Column size=\"167\"/><Column size=\"130\"/><Column size=\"186\"/><Column size=\"81\"/><Column size=\"107\"/><Column size=\"92\"/></Columns><Rows><Row size=\"45\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\" text=\"지역명\"/><Cell col=\"3\" text=\"학제구분\"/><Cell col=\"4\" text=\"설립구분\"/><Cell col=\"5\" text=\"학교명\"/><Cell col=\"6\" text=\"본분교\"/><Cell col=\"7\" text=\"담당자구분\"/><Cell col=\"8\" text=\"사용자\"/><Cell col=\"9\" text=\"사용자ID\"/><Cell col=\"10\" text=\"설문대상\"/><Cell col=\"11\" text=\"진행상태\"/><Cell col=\"12\" text=\"설문일시\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" checkboxfalsevalue=\"false\" checkboxtruevalue=\"true\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:PROVINCENM\"/><Cell col=\"3\" text=\"bind:SCHKINDNM\"/><Cell col=\"4\" text=\"bind:SCHFUNDNM\"/><Cell col=\"5\" text=\"bind:SCHNM\"/><Cell col=\"6\" text=\"bind:ORGNM\"/><Cell col=\"7\" text=\"bind:USERGRPNM\"/><Cell col=\"8\" text=\"bind:USERNM\"/><Cell col=\"9\" text=\"bind:USERID\"/><Cell col=\"10\" text=\"expr:TARGETYN == true? '대상':'미대상'\"/><Cell col=\"11\" text=\"expr:ANSCNT == 0 ? '미응답':'응답'\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"cellBtn\"/><Cell col=\"12\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Div("btnArea","30","gd_list:30","1202","50",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_close","548","0","100","30",null,null,null,null,null,null,this.Div.form.btnArea.form);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_cssclass("btn_sty01");
            this.Div.form.btnArea.addChild(obj.name, obj);

            obj = new Button("btn_schDel",null,"230","120","30","30",null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_sty06");
            obj.set_text("설문대상제외");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_schAdd","968","Div00:20","120","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_sty07");
            obj.set_text("설문대상등록");
            this.Div.addChild(obj.name, obj);

            obj = new Div("sub_title_wrap","30","20","1200","42",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("sub_title","0","0","370","32",null,null,null,null,null,null,this.sub_title_wrap.form);
            obj.set_taborder("0");
            obj.set_text("설문조사대상");
            obj.set_cssclass(" title_t2");
            this.sub_title_wrap.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,695,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ad16p02.xfdl","CM::utl_script.xjs");
        this.registerScript("ad16p02.xfdl", function() {
        this.executeIncludeScript("CM::utl_script.xjs"); /*include "CM::utl_script.xjs"*/;

        this.SURVSEQ;
        this.SURVKINDCD;
        this.QUESTIONSEQ;

        this.fv_MENUNM = this.opener.fv_MENUNM + ">설문조사대상팝업";

        this.ad16p02_oninit = function(obj,e)
        {
        	this.SURVSEQ 	= this.parent.SURVSEQ;
        	this.SURVKINDCD = this.parent.SURVKINDCD;
        	this.QUESTIONSEQ= this.parent.QUESTIONSEQ;

        	this.selectInitInfo();
        	//this.selectQuestionViewList();
        };

        // 학제구분 0527
        // 학교설립 0512



        // 검색
        this.Div_Div00_btn_search_onclick = function(obj,e)
        {
        	this.selectQueTargetList();
        };

        // 파일저장
        this.Div_btn_fileDn_onclick = function(obj,e)
        {
        	var strParam = "SURVSEQ=" 	+ this.SURVSEQ + "ª";
        	strParam += "SURVKINDCD=" 	+ this.SURVKINDCD + "ª";
        	strParam += "QUESTIONSEQ=" 	+ this.QUESTIONSEQ + "ª";
        	this.setAccessLog(this.SURVSEQ , this.SURVKINDCD, this.fv_MENUNM, "파일저장", strParam);  //접속기록
        	this.utlf_excelDownload("설문조사대상", this.Div.form.gd_list, this.Export00_onsuccess);
        };
        this.Export00_onsuccess = function (obj, e )
        {

        };

        // 닫기
        this.Div_btnArea_btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        // 전체선택
        this.Div_gd_list_onheadclick = function(obj,e)
        {
        	var strType = obj.getCellProperty("head", e.cell, "displaytype");
        	if(strType == "checkboxcontrol"){
        		var strVal = obj.getCellProperty("head", e.cell, "text");
        		var v1_chk = false;

        		if(strVal){
        			obj.setCellProperty("head", e.cell, "text", false); obj.setcell
        			v1_chk = false;
        		} else {
        			obj.setCellProperty("head", e.cell, "text", true);
        			v1_chk = true;
        		}

        		var objDS = obj.getBindDataset();

        		for (var i=0; i<objDS.rowcount; i++){
        			objDS.setColumn(i, "CHK", v1_chk);
        		}
        	}
        };

        // 설문대상 등록
        this.Div_btn_schAdd_onclick = function(obj,e)
        {
        	if(this.chkSelect()){
        		return;
        	}

        	var objDS = this.Div.form.gd_list.getBindDataset();
        	for(var i=0; i<objDS.rowcount; i++){
        		var chk = objDS.getColumn(i, "CHK");
        		if(chk == 'true'){
        			var strParam = "SURVSEQ=" 	+ this.SURVSEQ + "ª";
        			strParam += "SURVKINDCD=" 	+ this.SURVKINDCD + "ª";
        			strParam += "QUESTIONSEQ=" 	+ this.QUESTIONSEQ + "ª";
        			strParam += "USERID=" 	+ objDS.getColumn(i, "USERID") + "ª";

        			dsParamSetArrowBlank(this.ds_search, strParam);

        			this.setAccessLog(this.SURVSEQ, this.SURVKINDCD, this.fv_MENUNM, "설문대상등록", strParam);  //접속기록

        			this.gfnTransaction("insertQueObj",
        					"swiss/ad/questionMng/insertQueObj.do",
        					"dsSearch=ds_search",
        					"",
        					"",
        					"fnCallback",
        					false);
        		}
        	}
        	this.alert("처리가 완료되었습니다.");
        	this.selectQueTargetList();
        };

        // 설문대상 제외
        this.Div_btn_schDel_onclick = function(obj,e)
        {
        	if(this.chkSelect()){
        		return;
        	}

        	var objDS = this.Div.form.gd_list.getBindDataset();
        	for(var i=0; i<objDS.rowcount; i++){
        		var chk = objDS.getColumn(i, "CHK");
        		if(chk == 'true'){
        			var strParam = "SURVSEQ=" 	+ this.SURVSEQ + "ª";
        			strParam += "SURVKINDCD=" 	+ this.SURVKINDCD + "ª";
        			strParam += "QUESTIONSEQ=" 	+ this.QUESTIONSEQ + "ª";
        			strParam += "USERID=" 	+ objDS.getColumn(i, "USERID") + "ª";

        			dsParamSetArrowBlank(this.ds_search, strParam);

        			this.setAccessLog(this.SURVSEQ, this.SURVKINDCD , this.fv_MENUNM, "설문대상제외", strParam);  //접속기록

        			this.gfnTransaction("deleteQueObj",
        					"swiss/ad/questionMng/deleteQueObj.do",
        					"dsSearch=ds_search",
        					"",
        					"",
        					"fnCallback",
        					false);
        		}
        	}
        	this.alert("처리가 완료되었습니다.");
        	this.selectQueTargetList();
        };



        this.Div_gd_list_oncellclick = function(obj,e)
        {
        	var nRow = this.Div.form.gd_list.getSelectedDatasetRows();
        	var nPos = this.Div.form.gd_list.getCellPos();

        	if(nPos == "11"){
        		if(this.ds_tarSchool.getColumn(nRow, "ANSCNT") == 0){
        			this.alert("설문 진행상태가 [응답]인 사용자만 확인 가능합니다.");
        			return;
        		}
        		var objChildFrame = new ChildFrame();
        		objChildFrame.init("pop_question_user_result"
        						  , 0
        						  , 0
        						  , 1280
        						  , 768
        						  , null
        						  , null
        						  , "AD::ad16p00.xfdl");
        		objChildFrame.set_showtitlebar(false);
        		objChildFrame.set_dragmovetype("all");
        		objChildFrame.set_openalign("center middle");
        		objChildFrame.set_autosize("false");
        		objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)");
        		var objParam = {
        			SURVSEQ : this.SURVSEQ
        			, SURVKINDCD : this.SURVKINDCD
        			, QUESTIONSEQ : this.QUESTIONSEQ
        			, USERID : this.ds_tarSchool.getColumn(nRow, "USERID")
        		};

        		objChildFrame.showModal(this.getOwnerFrame()
        							  , objParam
        							  , this
        							  , "fn_popupCallback");
        	}
        };


        this.fnCallback = function(serviceId, errCD, errMSG){
        	if(errCD < 0){
        		this.setAccessLog("", "AG", this.fv_MENUNM, serviceId + " : Fail", "");  //접속기록(실패시)
        	} else {
        		if(serviceId == "selectInitInfo"){

        		}
        	}
        }

        this.selectInitInfo = function(){
        	this.selectCodeList('0522', 'ds_province');
        	this.ds_province.insertRow(0);
        	this.ds_province.setColumn(0,"CD","");
        	this.ds_province.setColumn(0,"CDNM","전체");

        	this.selectCodeList('0527', 'ds_schKind');
        	this.ds_schKind.insertRow(0);
        	this.ds_schKind.setColumn(0,"CD","");
        	this.ds_schKind.setColumn(0,"CDNM","전체");

        	this.selectCodeList('0512', 'ds_schFound');
        	this.ds_schFound.insertRow(0);
        	this.ds_schFound.setColumn(0,"CD","");
        	this.ds_schFound.setColumn(0,"CDNM","전체");

        	this.Div.form.Div00.form.in_cb_survTargetYn.set_index(0);

        	this.selectQueTargetList();
        }

        this.selectCodeList = function(cd, resultDs){
        	var strParam = "SURVSEQ=" + this.SURVSEQ + "ª";
        	strParam += "SURVKINDCD=" + this.SURVKINDCD + "ª";
        	strParam += "CDTYPE=" + cd + "ª";

        	dsParamSetArrowBlank(this.ds_search, strParam);
        	this.gfnTransaction("code"+ cd,
        						"swiss/cm/selectCodeList.do",
        						"dsSearch=ds_search",
        						resultDs + "=dsResult",
        						"",
        						"fnCallback",
        						false);
        }

        this.selectQueTargetList = function(){
        	var strParam = "SURVSEQ=" 	+ this.SURVSEQ + "ª";
        	strParam += "SURVKINDCD=" 	+ this.SURVKINDCD + "ª";
        	strParam += "QUESTIONSEQ=" 	+ this.QUESTIONSEQ + "ª";

        	strParam += "PROVINCECD=" 	+ this.Div.form.Div00.form.in_cb_crovince.value + "ª";
        	strParam += "SCHKINDCD=" 	+ this.Div.form.Div00.form.in_cb_.value + "ª";
        	strParam += "SCHFUNDCD=" 	+ this.Div.form.Div00.form.in_cb_schKind.value + "ª";
        	strParam += "TARGETYN=" 	+ this.Div.form.Div00.form.in_cb_survTargetYn.value + "ª";
        	strParam += "SCHNM=" 		+ this.Div.form.Div00.form.in_edit_schNm.value + "ª";
        	strParam += "USERNM=" 		+ this.Div.form.Div00.form.in_edit_userNm.value + "ª";

        	dsParamSetArrowBlank(this.ds_search, strParam);

        	this.setAccessLog(this.SURVSEQ, this.SURVKINDCD, this.fv_MENUNM, "검색", strParam);  //접속기록

        	this.gfnTransaction("selectQueTargetList",
        					"swiss/ad/questionMng/selectQueTargetList.do",
        					"dsSearch=ds_search",
        					"ds_tarSchool=dsResult",
        					"",
        					"fnCallback",
        					true);
        }


        this.chkSelect = function(){
        	var cnt = this.Div.form.gd_list.rowcount;
        	var tot = 0;
        	var valChk = '';

        	for(var i=0; i<cnt; i++){
        		var tmp = this.ds_tarSchool.getColumn(i, "CHK");
        		if(tmp == 'true'){
        			if(tot == 0){
        				valChk = this.ds_tarSchool.getColumn(i, "TARGETYN");
        			}
        			if(valChk != this.ds_tarSchool.getColumn(i, "TARGETYN")){
        				this.alert("설문 대상여부가 같은 건만 등록/제외가 가능합니다.");
        				return true;
        			}
        			if(this.ds_tarSchool.getColumn(i, "ANSCNT") != 0){
        				this.alert("설문 진행상태가 [응답]인 사용자는 등록/제외가 불가능 합니다.")
        				return true;
        			}
        			tot += 1;
        		}
        	}

        	if(tot <= 0 ){
        		this.alert("선택된 학교가 없습니다.");
        		return true;
        	}

        }




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.ad16p02_oninit,this);
            this.Div.form.Div00.form.btn_search.addEventHandler("onclick",this.Div_Div00_btn_search_onclick,this);
            this.Div.form.Div00.form.in_cb_crovince.addEventHandler("onitemchanged",this.Div_Div00_Combo00_onitemchanged,this);
            this.Div.form.Div00.form.in_cb_.addEventHandler("onitemchanged",this.Div_Div00_Combo00_onitemchanged,this);
            this.Div.form.Div00.form.in_cb_schKind.addEventHandler("onitemchanged",this.Div_Div00_Combo00_onitemchanged,this);
            this.Div.form.Div00.form.in_cb_survTargetYn.addEventHandler("onitemchanged",this.Div_Div00_Combo00_onitemchanged,this);
            this.Div.form.btn_fileDn.addEventHandler("onclick",this.Div_btn_fileDn_onclick,this);
            this.Div.form.gd_list.addEventHandler("onheadclick",this.Div_gd_list_onheadclick,this);
            this.Div.form.gd_list.addEventHandler("oncellclick",this.Div_gd_list_oncellclick,this);
            this.Div.form.btnArea.form.btn_close.addEventHandler("onclick",this.Div_btnArea_btn_close_onclick,this);
            this.Div.form.btn_schDel.addEventHandler("onclick",this.Div_btn_schDel_onclick,this);
            this.Div.form.btn_schAdd.addEventHandler("onclick",this.Div_btn_schAdd_onclick,this);
            this.sub_title_wrap.form.sub_title.addEventHandler("onclick",this.sub_title_wrap_sub_title_onclick,this);
        };

        this.loadIncludeScript("ad16p02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
