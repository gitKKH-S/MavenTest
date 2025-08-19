(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ad08m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("15px/normal \"SpoqaHanSans-Regular\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,950);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"256\"/><Column id=\"SURVPROSTATUSDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTCNT\" type=\"STRING\" size=\"256\"/><Column id=\"FPCNT\" type=\"STRING\" size=\"256\"/><Column id=\"SURVPROSTATUSCD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVPROSTATUSNM\" type=\"STRING\" size=\"256\"/><Column id=\"RCEPTCN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cnt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_survList", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSTRTDT\" type=\"STRING\" size=\"256\"/><Column id=\"SURVENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"SURVOBJ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_status", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"CDTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_schkind", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"CDTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_viewCntList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">20</Col><Col id=\"CDNM\">20</Col></Row><Row><Col id=\"CD\">50</Col><Col id=\"CDNM\">50</Col></Row><Row><Col id=\"CD\">100</Col><Col id=\"CDNM\">100</Col></Row><Row><Col id=\"CD\">200</Col><Col id=\"CDNM\">200</Col></Row><Row><Col id=\"CD\">500</Col><Col id=\"CDNM\">500</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","-30","1260","970",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Div("sub_title_wrap","30","40","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            this.Div.addChild(obj.name, obj);

            obj = new Static("sub_title","0","8","370","32",null,null,null,null,null,null,this.Div.form.sub_title_wrap.form);
            obj.set_taborder("0");
            obj.set_text("신입생 연계결과");
            obj.set_cssclass(" title_t2");
            this.Div.form.sub_title_wrap.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","40",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","970",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","970",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_searchArea","30","90","1200","155",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","25","10","64","30",null,null,null,null,null,null,this.Div.form.div_searchArea.form);
            obj.set_taborder("0");
            obj.set_text("조사년도");
            this.Div.form.div_searchArea.addChild(obj.name, obj);

            obj = new Button("btn_search","980","110","150","30",null,null,null,null,null,null,this.Div.form.div_searchArea.form);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.set_cssclass("btn_styLarge");
            this.Div.form.div_searchArea.addChild(obj.name, obj);

            obj = new Combo("in_cb_year","112","10","210","30",null,null,null,null,null,null,this.Div.form.div_searchArea.form);
            obj.set_taborder("1");
            obj.set_accessibilitylabel("조사회차");
            obj.set_innerdataset("ds_survList");
            obj.set_codecolumn("SURVYEAR");
            obj.set_datacolumn("SURVYEAR");
            obj.set_text("2020");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.div_searchArea.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00","450","60","86","30",null,null,null,null,null,null,this.Div.form.div_searchArea.form);
            obj.set_taborder("5");
            obj.set_text("학교명");
            this.Div.form.div_searchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00","450","10","64","30",null,null,null,null,null,null,this.Div.form.div_searchArea.form);
            obj.set_taborder("6");
            obj.set_text("조사명");
            this.Div.form.div_searchArea.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00","870","60","69","30",null,null,null,null,null,null,this.Div.form.div_searchArea.form);
            obj.set_taborder("7");
            obj.set_text("진행상태");
            this.Div.form.div_searchArea.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00_00","25","110","69","30",null,null,null,null,null,null,this.Div.form.div_searchArea.form);
            obj.set_taborder("8");
            obj.set_text("항목표시");
            this.Div.form.div_searchArea.addChild(obj.name, obj);

            obj = new Combo("in_cb_prostatus","949","60","210","30",null,null,null,null,null,null,this.Div.form.div_searchArea.form);
            obj.set_taborder("3");
            obj.set_accessibilitylabel("진행상태");
            obj.set_innerdataset("ds_status");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.div_searchArea.addChild(obj.name, obj);

            obj = new Edit("in_edit_school","525","60","294","30",null,null,null,null,null,null,this.Div.form.div_searchArea.form);
            obj.set_taborder("2");
            obj.set_accessibilitylabel("학교명");
            obj.set_inputfilter("symbol,sign");
            this.Div.form.div_searchArea.addChild(obj.name, obj);

            obj = new Static("label_survnm","525","10",null,"30","50",null,null,null,null,null,this.Div.form.div_searchArea.form);
            obj.set_taborder("9");
            obj.set_text("label_survnm");
            this.Div.form.div_searchArea.addChild(obj.name, obj);

            obj = new Static("Static00_01","25","60","64","30",null,null,null,null,null,null,this.Div.form.div_searchArea.form);
            obj.set_taborder("10");
            obj.set_text("학제구분");
            this.Div.form.div_searchArea.addChild(obj.name, obj);

            obj = new Combo("in_cb_schkind","112","60","210","30",null,null,null,null,null,null,this.Div.form.div_searchArea.form);
            obj.set_taborder("11");
            obj.set_accessibilitylabel("조사회차");
            obj.set_innerdataset("ds_schkind");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_text("2020");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.div_searchArea.addChild(obj.name, obj);

            obj = new Combo("in_cb_viewCnt","112","110","210","30",null,null,null,null,null,null,this.Div.form.div_searchArea.form);
            obj.set_taborder("12");
            obj.set_accessibilitylabel("조사회차");
            obj.set_innerdataset("ds_viewCntList");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_text("20");
            obj.set_value("20");
            obj.set_index("0");
            this.Div.form.div_searchArea.addChild(obj.name, obj);

            obj = new Div("btnArea","30","div_searchArea:0","1202","60",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_saveFile","0","21","100","30",null,null,null,null,null,null,this.Div.form.btnArea.form);
            obj.set_taborder("0");
            obj.set_text("파일저장");
            obj.set_cssclass("btn_sty05");
            this.Div.form.btnArea.addChild(obj.name, obj);

            obj = new Button("btn_return","1100","21","100","30",null,null,null,null,null,null,this.Div.form.btnArea.form);
            obj.set_taborder("1");
            obj.set_text("반려");
            obj.set_cssclass("btn_sty03");
            this.Div.form.btnArea.addChild(obj.name, obj);

            obj = new Grid("gd_list","30","btnArea:0","1200","550",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj.set_cssclass("grid_sty03");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"43\"/><Column size=\"89\"/><Column size=\"228\"/><Column size=\"80\"/><Column size=\"138\"/><Column size=\"75\"/><Column size=\"78\"/><Column size=\"142\"/><Column size=\"326\"/></Columns><Rows><Row size=\"45\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"조사기준\"/><Cell col=\"2\" text=\"학교명\"/><Cell col=\"3\" text=\"본분교\"/><Cell col=\"4\" text=\"제출일시\"/><Cell col=\"5\" text=\"학과수\"/><Cell col=\"6\" text=\"신입생수\"/><Cell col=\"7\" text=\"접수상태\"/><Cell col=\"8\" text=\"수정요청내용\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:SURVPROSTATUSCD == '2'?'checkboxcontrol':SURVPROSTATUSCD == '4'?'checkboxcontrol':SURVPROSTATUSCD == '6'?'checkboxcontrol':'none'\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:SURVSEQ\" tooltiptext=\"bind:SURVSEQ\"/><Cell col=\"2\" text=\"bind:SCHNM\" tooltiptext=\"bind:SCHNM\"/><Cell col=\"3\" text=\"bind:ORGNM\" tooltiptext=\"bind:ORGNM\"/><Cell col=\"4\" text=\"bind:SURVPROSTATUSDTHM\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd hh:mm\" calendareditformat=\"yyyy-MM-dd hh:mm\" tooltiptext=\"bind:SURVPROSTATUSDTHM\"/><Cell col=\"5\" text=\"bind:DEPTCNT\" tooltiptext=\"bind:DEPTCNT\"/><Cell col=\"6\" text=\"bind:FPCNT\"/><Cell col=\"7\" text=\"bind:SURVPROSTATUSNM\" tooltiptext=\"bind:SURVPROSTATUSNM\"/><Cell col=\"8\" text=\"bind:RCEPTCN\" tooltiptext=\"bind:RCEPTCN\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Div("pagingWrap","30","gd_list:10","1200","60",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_pagging","360","11","480","33",null,null,null,null,null,null,this.Div.form.pagingWrap.form);
            obj.set_taborder("0");
            obj.set_text("pagging");
            obj.set_url("CM::CmPagging.xfdl");
            this.Div.form.pagingWrap.addChild(obj.name, obj);

            obj = new PopupDiv("popDiv_history","1287","75","982","554",null,null,null,null,null,null,this);
            obj.set_text("popDiv_history");
            obj.set_visible("false");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #54666d");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("popDiv_return","1287","741","655","475",null,null,null,null,null,null,this);
            obj.set_text("popDiv_승인/반려");
            obj.set_visible("false");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #54666d");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,950,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CM::CmPagging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("ad08m00.xfdl","CM::common.xjs");
        this.addIncludeScript("ad08m00.xfdl","CM::utl_script.xjs");
        this.registerScript("ad08m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;
        this.executeIncludeScript("CM::utl_script.xjs"); /*include "CM::utl_script.xjs"*/;

        this.pageRowCnt = 20;
        this.totalRowCnt = 0;

        this.ad08m00_oninit = function(obj,e)
        {
        	this.initFpInfo();
        };


        this.ad08m00_onload = function(obj,e)
        {

        };

        // 검색
        this.Div_sub_search00_btn_search_onclick = function(obj,e)
        {
        	this.pageRowCnt = this.Div.form.div_searchArea.form.in_cb_viewCnt.value;
        	this.searchFpResultCnt();
        };

        this.Div_div_searchArea_in_cb_year_onitemchanged = function(obj,e)
        {
        	this.yearChanged();
        };

        // 전체 선택
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
        			if(objDS.getColumn(i, "CHK") != null){
        				objDS.setColumn(i, "CHK", v1_chk);
        			}
        		}
        	}
        };

        /*
        // 수정하기
        this.Div_btnArea_btn_reqOk_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        {
        	var objDS = this.Div.form.gd_list.getBindDataset();
        	var chkCnt = 0;				// 선택건수


        	for(var i=0; i<objDS.rowcount; i++){
        		var chk = objDS.getColumn(i, "CHK");
        		var tmpStatus = objDS.getColumn(i, "SURVPROSTATUSNM");

        		if(chk == true){
        			chkCnt += 1;
        		}
        	}

        	if(chkCnt <= 0){
        		this.alert("수정 반영할 선택하세요");
        		return;
        	}
        };
        */

        // 반려처리
        this.Div_btnArea_btn_return_onclick = function(obj,e)
        {
        	var objDS = this.Div.form.gd_list.getBindDataset();
        	var chkCnt = 0;				// 반려처리건수
        	var chkStatus = false;		// 접수 상태 체크
        	var status = "";			// 접수상태

        	for(var i=0; i<objDS.rowcount; i++){
        		var chk = objDS.getColumn(i, "CHK");
        		var tmpStatus = objDS.getColumn(i, "SURVPROSTATUSNM");

        		if(chk == true){
        			chkCnt += 1;
        			if(chkCnt == "1"){
        				status = tmpStatus;
        			}

        			if(status != tmpStatus){
        				chkStatus = true;
        			}
        		}
        	}

        	if(chkCnt <= 0){
        		this.alert("반려할 대상을 선택하세요");
        		return;
        	}

        	// 상태가 같은경우만 처리
        	if(chkStatus){
        		this.alert("접수상태가 동일한건만 처리 가능합니다.");
        		return;
        	}

        	/*
        	var objApp = nexacro.getApplication();
        	var mainFrame = objApp.mainframe;
        	var nH = nexacro.toNumber()
        	*/
        	this.popDiv_return.set_url("");
        	this.popDiv_return.trackPopup(300,200,650,470,"fn_returnCallback");
        	this.popDiv_return.set_url("AD::popReturn.xfdl");
        };

        // 반려팝업
        this.popDiv_return_onpopup = function(obj,e)
        {

        };

        // 팝업에서 호출
        this.fn_returnProc = function(rceptcn){
        	//var rceptcn = this.popDiv_return.form.getResaon();
        	this.updateApproval(rceptcn);
        	this.popDiv_return.closePopup();
        }


        this.fn_returnCallback = function(){

        }

        // 팝업
        this.Div_gd_list_oncellclick = function(obj,e)
        {
        	var nRow = this.Div.form.gd_list.getSelectedDatasetRows();
        	var nPos = this.Div.form.gd_list.getCellPos();

        	if(nPos != "0"){
        		if(nPos == "8"){	//수정요청 히스토리
        			this.popDiv_history.set_url("")
        			this.popDiv_history.trackPopup(300, 200);

        			//this.popDiv_history.trackPopupByComponent(this.Div.form.div_searchArea.form.in_cb_year.getOffsetWidth(), this.Div.form.div_searchArea.form.in_cb_year.getOffsetHeight(), 150, 100);
        			this.popDiv_history.set_url("AD::popHistory.xfdl")
        		} else {
        			var objChildFrame = new ChildFrame();
        			objChildFrame.init("pop_ad08p00_info"
        							  , 0
        							  , 0
        							  , 1150
        							  , 700
        							  , null
        							  , null
        							  , "AD::ad08p00.xfdl");
        			objChildFrame.set_showtitlebar(false);
        			objChildFrame.set_dragmovetype("all");
        			objChildFrame.set_openalign("center middle");
        			objChildFrame.set_autosize("false");
        			objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)");
        			var objParam = {
        				SURVSEQ 	: this.ds_list.getColumn(nRow, "SURVSEQ")
        				, SURVKINDCD: this.ds_list.getColumn(nRow, "SURVKINDCD")
        				, SCHCD		: this.ds_list.getColumn(nRow, "SCHCD")
        				, ORGCD		: this.ds_list.getColumn(nRow, "ORGCD")
        				, INFO		: this.Div.form.div_searchArea.form.label_survnm.text
        				, SCHNM		: this.ds_list.getColumn(nRow,"SCHNM")
        			};
        			objChildFrame.showModal(this.getOwnerFrame()
        								  , objParam
        								  , this
        								  , "fn_popupCallback");
        		/*
        			var SURVSEQ		= this.ds_list.getColumn(nRow, "SURVSEQ")
        			var SURVKINDCD	= this.ds_list.getColumn(nRow, "SURVKINDCD")
        			var SCHCD		= this.ds_list.getColumn(nRow, "SCHCD")
        			var ORGCD		= this.ds_list.getColumn(nRow, "ORGCD")

        			this.popDiv_detail.set_url("");
        			this.popDiv_detail.trackPopup(300,200,960,700,"fn_returnCallback");
        			this.popDiv_detail.set_url("AD::ad08p00.xfdl");
        		*/
        		}

        	}
        };

        this.searchEnter = function(obj,e)
        {
        	if(e.keycode == nexacro.Event.KEY_ENTER){
        		this.Div_sub_search00_btn_search_onclick(this.Div.form.div_searchArea.form.btn_search);
        	}
        };

        this.popDiv_history_onpopup = function(obj,e)
        {

        };



        this.fnCallback = function(serviceId, errCD, errMSG){
        	if(serviceId == "initFpInfo"){
        		this.Div.form.div_searchArea.form.in_cb_year.set_index(0);
        		this.yearChanged();
        		this.searchFpResultCnt();
        	} else if(serviceId == "searchFpResultCnt"){
        		this.totalRowCnt = this.ds_cnt.getColumn(0, "CNT");
        		this.paggingInit();
        		this.searchFpResultList(this.Div.form.pagingWrap.form.div_pagging.form.fv_pageIdx+1);
        	} else if(serviceId == "searchFpResultList"){


        	} else if(serviceId =="updateApproval"){
        		this.alert("처리 완료 되었습니다.");
        		this.searchFpResultCnt();
        	} else if(serviceId == "selectstatusList"){
        		var cnt = this.ds_status.rowcount;
        		for(cnt;  5 < cnt; cnt--){
        			this.ds_status.deleteRow(cnt);
        		}
        		this.ds_status.insertRow(0);
        		this.ds_status.setColumn(0,"SURVSEQ","");
        		this.ds_status.setColumn(0,"SURVKINDCD","");
        		this.ds_status.setColumn(0,"CDTYPE","");
        		this.ds_status.setColumn(0,"CD","");
        		this.ds_status.setColumn(0,"CDNM","전체");
        	} else if(serviceId =="selectschkindList"){
        		this.ds_schkind.insertRow(0);
        		this.ds_schkind.setColumn(0,"SURVSEQ","");
        		this.ds_schkind.setColumn(0,"SURVKINDCD","");
        		this.ds_schkind.setColumn(0,"CDTYPE","");
        		this.ds_schkind.setColumn(0,"CD","");
        		this.ds_schkind.setColumn(0,"CDNM","전체");
        	}

        }

        this.fn_popupCallback = function(strPopupID, strReturn){
        	if(strPopupID == "pop_ad08p00_info"){
        		this.searchFpResultCnt();
        	}
        }



        this.initFpInfo = function(){
        	this.gfnTransaction("initFpInfo",
        						"swiss/ad/progress/initFpInfo.do",
        						"",
        						"ds_survList=dsResult",
        						"",
        						"fnCallback",
        						true);
        }

        // YRAR 선택 후 처리
        this.yearChanged = function(){
        	var choice = this.Div.form.div_searchArea.form.in_cb_year.index;
        	var txt = this.ds_survList.getColumn(choice, "SURVNM") + "(" + this.ds_survList.getColumn(choice, "SURVSTRTDT") +  " ~ " + this.ds_survList.getColumn(choice, "SURVENDDT") + ")"
        	this.Div.form.div_searchArea.form.label_survnm.set_text(txt);

        	this.selectstatusList();
        	this.selectschkindList();

        }

        this.selectstatusList = function(){
        	var SURVYEAR	= this.Div.form.div_searchArea.form.in_cb_year.value

        	var strParam = "SURVYEAR=" + SURVYEAR + "ª";
        	strParam += "SURVKINDCD=FP" + "ª";
        	strParam += "CDTYPE=0082" + "ª";

        	dsParamSetArrowBlank(this.ds_search, strParam);
        	this.gfnTransaction("selectstatusList",
        						"swiss/cm/selectCodeList.do",
        						"dsSearch=ds_search",
        						"ds_status=dsResult",
        						"",
        						"fnCallback",
        						true);
        }
        this.selectschkindList = function(){
        	var SURVYEAR = this.Div.form.div_searchArea.form.in_cb_year.value;

        	var strParam = "SURVYEAR=" + SURVYEAR + "ª";
        	strParam += "SURVKINDCD=FP" + "ª";
        	strParam += "CDTYPE=0527" + "ª";

        	dsParamSetArrowBlank(this.ds_search, strParam);
        	this.gfnTransaction("selectschkindList",
        						"swiss/cm/selectCodeList.do",
        						"dsSearch=ds_search",
        						"ds_schkind=dsResult",
        						"",
        						"fnCallback",
        						true);
        }


        // CNT
        this.searchFpResultCnt = function(){
        	var SURVYEAR		= this.Div.form.div_searchArea.form.in_cb_year.value;
        	var SCHKINDCD		= this.Div.form.div_searchArea.form.in_cb_schkind.value;
        	var SCHNM 			= this.Div.form.div_searchArea.form.in_edit_school.value;
        	var SURVPROSTATUSCD	= this.Div.form.div_searchArea.form.in_cb_prostatus.value;

        	var strParam = "SURVYEAR=" 		+ SURVYEAR + "ª";
        	strParam += "SCHKINDCD=" 		+ SCHKINDCD + "ª";
        	strParam += "SCHNM=" 			+ SCHNM + "ª";
        	strParam += "SURVPROSTATUSCD="  + SURVPROSTATUSCD + "ª";

        	dsParamSetArrowBlank(this.ds_search, strParam);
        	this.gfnTransaction("searchFpResultCnt",
        						"swiss/ad/progress/searchFpResultCnt.do",
        						"dsSearch=ds_search",
        						"ds_cnt=dsResult",
        						"",
        						"fnCallback",
        						true);
        }


        // 목록
        this.searchFpResultList = function(sPage){
        	var SURVYEAR		= this.Div.form.div_searchArea.form.in_cb_year.value;
        	var SCHKINDCD		= this.Div.form.div_searchArea.form.in_cb_schkind.value;
        	var SCHNM 			= this.Div.form.div_searchArea.form.in_edit_school.value;
        	var SURVPROSTATUSCD	= this.Div.form.div_searchArea.form.in_cb_prostatus.value;

        	var start = (sPage - 1) * this.pageRowCnt + 1;
        	var end = sPage * this.pageRowCnt;
        	var strParam = "SURVYEAR=" 		+ SURVYEAR + "ª";
        	strParam += "SCHKINDCD=" 		+ SCHKINDCD + "ª";
        	strParam += "SCHNM=" 			+ SCHNM + "ª";
        	strParam += "SURVPROSTATUSCD="  + SURVPROSTATUSCD + "ª";
        	strParam += "START=" + start + "ª";
        	strParam += "END=" + end + "ª";

        	dsParamSetArrowBlank(this.ds_search, strParam);
        	this.gfnTransaction("searchFpResultList",
        						"swiss/ad/progress/searchFpResultList.do",
        						"dsSearch=ds_search",
        						"ds_list=dsResult",
        						"",
        						"fnCallback",
        						true);
        }

        // 반려
        this.updateApproval = function(rceptcn){
        	var objDS = this.Div.form.gd_list.getBindDataset();

        	for(var i=0; i<objDS.rowcount; i++){
        		var chk = objDS.getColumn(i, "CHK");
        		if(chk == true){
        			var SURVSEQ 	= this.ds_list.getColumn(i, "SURVSEQ");
        			var SURVKINDCD  = this.ds_list.getColumn(i, "SURVKINDCD");
        			var SCHCD  		= this.ds_list.getColumn(i, "SCHCD");
        			var ORGCD 		= this.ds_list.getColumn(i, "ORGCD");

        			var strParam = "SURVSEQ=" 		+ SURVSEQ + "ª";
        			strParam += "SURVKINDCD=" 		+ SURVKINDCD + "ª";
        			strParam += "SCHCD=" 			+ SCHCD + "ª";
        			strParam += "ORGCD="  			+ ORGCD + "ª";
        			strParam += "STATUSCD=5ª"; 			// 5:반려, 3:수정완료

        			strParam += "RCEPTCN="  		+ rceptcn + "ª";

        			dsParamSetArrowBlank(this.ds_search, strParam);
        			this.gfnTransaction("updateApproval",
        								"swiss/ad/progress/updateApproval.do",
        								"dsSearch=ds_search",
        								"ds_list=dsResult",
        								"",
        								"fnCallback",
        								true);
        		}
        	}
        }

        this.Div_btnArea_btn_saveFile_onclick = function(obj,e)
        {
        	this.utlf_excelDownload("신편입생연계결과", this.Div.form.gd_list, this.Export00_onsuccess);
        };

        this.Export00_onsuccess = function (obj, e )
        {

        }


        // 페이징 초기화 함수
        this.paggingInit = function(){
        	this.Div.form.pagingWrap.form.div_pagging.form.initPages(this.totalRowCnt, this.pageRowCnt); // 전체DATA CNT, 페이지출력수
        	this.Div.form.pagingWrap.form.div_pagging.form.setPage(1);
        }

        // 페이징 완료후 처리
        this.setPageAfter = function (nPage){
        	this.searchFpResultList(nPage);
        }



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ad08m00_onload,this);
            this.addEventHandler("oninit",this.ad08m00_oninit,this);
            this.Div.form.div_searchArea.form.btn_search.addEventHandler("onclick",this.Div_sub_search00_btn_search_onclick,this);
            this.Div.form.div_searchArea.form.in_cb_year.addEventHandler("onitemchanged",this.Div_div_searchArea_in_cb_year_onitemchanged,this);
            this.Div.form.div_searchArea.form.in_edit_school.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.div_searchArea.form.in_cb_schkind.addEventHandler("canitemchange",this.Div_div_searchArea_in_cb_schkind_canitemchange,this);
            this.Div.form.div_searchArea.form.in_cb_viewCnt.addEventHandler("canitemchange",this.Div_div_searchArea_in_cb_schkind_canitemchange,this);
            this.Div.form.btnArea.form.btn_saveFile.addEventHandler("onclick",this.Div_btnArea_btn_saveFile_onclick,this);
            this.Div.form.btnArea.form.btn_return.addEventHandler("onclick",this.Div_btnArea_btn_return_onclick,this);
            this.Div.form.gd_list.addEventHandler("oncellclick",this.Div_gd_list_oncellclick,this);
            this.Div.form.gd_list.addEventHandler("onheadclick",this.Div_gd_list_onheadclick,this);
            this.popDiv_history.addEventHandler("onpopup",this.popDiv_history_onpopup,this);
            this.popDiv_return.addEventHandler("onpopup",this.popDiv_return_onpopup,this);
        };

        this.loadIncludeScript("ad08m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
