(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ad16m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("normal 700 36px/normal \"맑은 고딕\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,690);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_queMstList", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTIONSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTIONTERMFR\" type=\"DATE\" size=\"256\"/><Column id=\"QUESTIONTERMTO\" type=\"DATE\" size=\"256\"/><Column id=\"QUESTIONTITLE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTINQCNT\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTIONSCRIPT\" type=\"STRING\" size=\"256\"/><Column id=\"DELYN\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIERID\" type=\"STRING\" size=\"256\"/><Column id=\"MODDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"TAR_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ANS_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"TAR_STATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_survList", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_kind", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">GP</Col><Col id=\"CDNM\">졸업생정보</Col></Row><Row><Col id=\"CD\">FP</Col><Col id=\"CDNM\">신입생정보</Col></Row><Row><Col id=\"CD\">AG</Col><Col id=\"CDNM\">졸업후상황</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","685",null,null,null,null,null,null,this);
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

            obj = new Static("Static00","0","0","30","680",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","680",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Div("Div00","30","60","1200","74",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Static("label_survseq","25","20","64","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("조사회차");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Combo("in_cb_year","label_survseq:0","20","150","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_survList");
            obj.set_codecolumn("SURVSEQ");
            obj.set_datacolumn("SURVSEQ");
            obj.set_font("normal 15px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("label_kind","in_cb_year:51","20","64","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("5");
            obj.set_text("조사종류");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Combo("in_cb_kind","label_kind:0","20","190","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_kind");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_font("normal 15px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_text("");
            obj.set_value("");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("label_name","594","20","84","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("설문조사명");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"20","100","30","30",null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("검색");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Edit("in_edit_title","label_name:0","20","300","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("4");
            obj.set_inputfilter("sign,symbol");
            obj.set_font("normal 15px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_fileDn","30","Div00:20","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_text("파일저장");
            obj.set_cssclass("btn_sty05");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"Div00:20","100","30","30",null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_text("등록");
            obj.set_cssclass("btn_sty09");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("gd_list","30","btn_add:20","1200","470",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_queMstList");
            obj.set_autofittype("col");
            obj.set_scrollbartype("default none");
            obj.set_cssclass("default");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"103\"/><Column size=\"131\"/><Column size=\"78\"/><Column size=\"419\"/><Column size=\"102\"/><Column size=\"101\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"25\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"조사회차\" font=\"normal 700 12px/normal &quot;Gulim&quot;\" color=\"#2f2f2f\"/><Cell col=\"1\" rowspan=\"2\" text=\"조사종류\" font=\"normal 700 12px/normal &quot;Gulim&quot;\" color=\"#2f2f2f\"/><Cell col=\"2\" rowspan=\"2\" text=\"설문회차\" font=\"normal 700 12px/normal &quot;Gulim&quot;\" color=\"#2f2f2f\"/><Cell col=\"3\" rowspan=\"2\" text=\"설문조사명\" font=\"normal 700 12px/normal &quot;Gulim&quot;\" color=\"#2f2f2f\"/><Cell col=\"4\" colspan=\"2\" text=\"설문기간\" font=\"normal 700 12px/normal &quot;Gulim&quot;\" color=\"#2f2f2f\"/><Cell col=\"6\" rowspan=\"2\" text=\"설문수\" font=\"normal 700 12px/normal &quot;Gulim&quot;\" color=\"#2f2f2f\"/><Cell col=\"7\" colspan=\"2\" text=\"대상학교\" font=\"normal 700 12px/normal &quot;Gulim&quot;\" color=\"#2f2f2f\"/><Cell col=\"9\" rowspan=\"2\" text=\"상태\" font=\"normal 700 12px/normal &quot;Gulim&quot;\" color=\"#2f2f2f\"/><Cell col=\"10\" rowspan=\"2\" text=\"결과\" font=\"normal 700 12px/normal &quot;Gulim&quot;\" color=\"#2f2f2f\"/><Cell col=\"11\" rowspan=\"2\" text=\"삭제여부\" font=\"normal 700 12px/normal &quot;Gulim&quot;\" color=\"#2f2f2f\"/><Cell row=\"1\" col=\"4\" text=\"시작일\" font=\"normal 700 12px/normal &quot;Gulim&quot;\" color=\"#2f2f2f\"/><Cell row=\"1\" col=\"5\" text=\"종료일\" font=\"normal 700 12px/normal &quot;Gulim&quot;\" color=\"#2f2f2f\"/><Cell row=\"1\" col=\"7\" text=\"응답\" font=\"normal 700 12px/normal &quot;Gulim&quot;\" color=\"#2f2f2f\"/><Cell row=\"1\" col=\"8\" text=\"대상\" font=\"normal 700 12px/normal &quot;Gulim&quot;\" color=\"#2f2f2f\"/></Band><Band id=\"body\"><Cell padding-left=\"20px\" text=\"bind:SURVSEQ\" color=\"#666666\"/><Cell col=\"1\" text=\"bind:SURVKINDNM\" color=\"#666666\"/><Cell col=\"2\" padding-left=\"20px\" text=\"bind:QUESTIONSEQ\" color=\"#666666\"/><Cell col=\"3\" padding-left=\"20px\" text=\"bind:QUESTIONTITLE\" tooltiptext=\"bind:QUESTIONTITLE\" textAlign=\"left\" color=\"#666666\"/><Cell col=\"4\" padding-left=\"20px\" text=\"bind:QUESTIONTERMFR\" displaytype=\"date\" calendardateformat=\"yyyy.MM.dd\" calendareditformat=\"yyyy.MM.dd\" color=\"#666666\"/><Cell col=\"5\" padding-left=\"20px\" text=\"bind:QUESTIONTERMTO\" displaytype=\"date\" calendardateformat=\"yyyy.MM.dd\" calendareditformat=\"yyyy.MM.dd\" color=\"#666666\"/><Cell col=\"6\" text=\"bind:TOTINQCNT\" color=\"#666666\"/><Cell col=\"7\" padding-left=\"20px\" text=\"bind:ANS_CNT\" color=\"#666666\"/><Cell col=\"8\" padding-left=\"20px\" text=\"bind:TAR_CNT\" color=\"#666666\"/><Cell col=\"9\" textAlign=\"center\" padding-left=\"20px\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"expr:TAR_STATE == 'NOW' ? '진행중': TAR_STATE == 'NOF' ? '설문전' : '마감'\" color=\"#666666\" cssclass=\"cellBtn\"/><Cell col=\"10\" edittype=\"button\" displaytype=\"buttoncontrol\" text=\"설문결과\" cssclass=\"cellBtn\" color=\"#666666\"/><Cell col=\"11\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\" cssclass=\"cellBtn\" color=\"#666666\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Div("sub_title_wrap","30","20","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            this.Div.addChild(obj.name, obj);

            obj = new Static("sub_title","0","0","370","32",null,null,null,null,null,null,this.Div.form.sub_title_wrap.form);
            obj.set_taborder("0");
            obj.set_text("설문관리");
            obj.set_cssclass(" title_t2");
            this.Div.form.sub_title_wrap.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,690,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ad16m00.xfdl","CM::common.xjs");
        this.addIncludeScript("ad16m00.xfdl","CM::utl_script.xjs");
        this.registerScript("ad16m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;
        this.executeIncludeScript("CM::utl_script.xjs"); /*include "CM::utl_script.xjs"*/;

        this.fv_MENUNM = "관리자>설문관리";

        this.ad16m00_onload = function(obj,e)
        {
        	this.selectInitInfo();
        };

        // 검색
        this.Div_Div00_Button00_onclick = function(obj,e)
        {
        	this.searchQuestionList();
        };

        // 파일저장
        this.Div_btn_fileDn_onclick = function(obj,e)
        {
        	var survseq = this.Div.form.Div00.form.in_cb_year.value;
        	var title 	= this.Div.form.Div00.form.in_edit_title.value;
        	var kind 	= this.Div.form.Div00.form.in_cb_kind.value;

        	var strLog = "SURVSEQ=" + survseq + "ª";
        	strLog += "SURVKINDCD=" + kind + "ª";
        	strLog += "QUESTIONTITLE=" + title + "ª";

        	this.setAccessLog(survseq, kind, this.fv_MENUNM, "파일저장", strLog);  //접속기록
        	this.utlf_excelDownload("설문목록", this.Div.form.gd_list, this.Export00_onsuccess);
        };
        this.Export00_onsuccess = function (obj, e )
        {
        };


        // 등록
        this.Div_btn_add_onclick = function(obj,e)
        {
        	nexacro.getApplication().gds_param.clear();
        	this.fn_goPage("AD::ad16m01.xfdl");
        };



        this.fnCallback = function(serviceId, errCD, errMSG){
        	if(errCD < 0){
        		this.setAccessLog("", "AG", this.fv_MENUNM, serviceId + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceId == "selectInitInfo"){
        			this.Div.form.Div00.form.in_cb_year.set_index(0)
        			this.searchQuestionList();
        		} else if (serviceId == "searchQuestionList"){

        		} else if (serviceId == "deleteQuestion"){
        			this.searchQuestionList();
        			this.alert("처리가 완료 되었습니다.");
        		}
        	}
        }

        this.selectInitInfo = function(){

        	this.gfnTransaction("selectInitInfo",
        						"swiss/ad/questionMng/selectInitInfo.do",
        						"",
        						"ds_survList=survList",
        						"",
        						"fnCallback",
        						false);

        }

        // 데이터 가져오기
        this.searchQuestionList = function(sPage){
        	var survseq = this.Div.form.Div00.form.in_cb_year.value;
        	var title 	= this.Div.form.Div00.form.in_edit_title.value;
        	var kind 	= this.Div.form.Div00.form.in_cb_kind.value;

        	var strParam = "SURVSEQ=" + survseq + "ª";
        	strParam += "SURVKINDCD=" + kind + "ª";
        	strParam += "QUESTIONTITLE=" + title + "ª";

        	dsParamSetArrowBlank(this.ds_search, strParam);

        	this.setAccessLog(survseq, kind, this.fv_MENUNM, "검색", strParam);  //접속기록

        	this.gfnTransaction("searchQuestionList",
        						"swiss/ad/questionMng/searchQuestionList.do",
        						"dsSearch=ds_search",
        						"ds_queMstList=dsResult",
        						"",
        						"fnCallback",
        						false);
        }


        this.Div_gd_list_oncellclick = function(obj,e)
        {
        	var cellPos = this.Div.form.gd_list.getCellPos();
        	var rowPos  = this.Div.form.gd_list.getSelectedDatasetRows();

        	if(cellPos == '9') {							// 설문보기
        		var objChildFrame = new ChildFrame();
        		objChildFrame.init("pop_question_view"
        						  , 0
        						  , 0
        						  , 1260
        						  , 920
        						  , null
        						  , null
        						  , "AD::ad16p00.xfdl");
        		objChildFrame.set_showtitlebar(true);
        		objChildFrame.set_dragmovetype("all");
        		objChildFrame.set_openalign("center middle");
        		objChildFrame.set_autosize("false");
        		objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)");
        		var objParam = {
        			SURVSEQ : this.ds_queMstList.getColumn(rowPos, "SURVSEQ")
        			, SURVKINDCD : this.ds_queMstList.getColumn(rowPos, "SURVKINDCD")
        			, QUESTIONSEQ : this.ds_queMstList.getColumn(rowPos, "QUESTIONSEQ")
        		};
        		objChildFrame.showModal(this.getOwnerFrame()
        							  , objParam
        							  , this
        							  , "fn_popupCallback");
        	} else if(cellPos == '10') {					// 설문 결과
        		var objChildFrame = new ChildFrame();
        		objChildFrame.init("pop_question_result"
        						  , 0
        						  , 0
        						  , 1260
        						  , 720
        						  , null
        						  , null
        						  , "AD::ad16p01.xfdl");
        		objChildFrame.set_showtitlebar(true);
        		objChildFrame.set_dragmovetype("all");
        		objChildFrame.set_openalign("center middle");
        		objChildFrame.set_autosize("false");
        		objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)");
        		var objParam = {
        			SURVSEQ : this.ds_queMstList.getColumn(rowPos, "SURVSEQ")
        			, SURVKINDCD : this.ds_queMstList.getColumn(rowPos, "SURVKINDCD")
        			, QUESTIONSEQ : this.ds_queMstList.getColumn(rowPos, "QUESTIONSEQ")
        		};
        		objChildFrame.showModal(this.getOwnerFrame()
        							  , objParam
        							  , this
        							  , "fn_popupCallback");
        	} else if(cellPos == '11'){						// 설문 삭제
        		if(this.confirm("선택한 설문과 관련된 모든 내용이 삭제됩니다.\n정말 삭제 하시겠습니까?")){
        			var strParam = "SURVSEQ=" + this.ds_queMstList.getColumn(rowPos, "SURVSEQ") + "ª";
        			strParam += "SURVKINDCD=" + this.ds_queMstList.getColumn(rowPos, "SURVKINDCD") + "ª";
        			strParam += "QUESTIONSEQ=" + this.ds_queMstList.getColumn(rowPos, "QUESTIONSEQ") + "ª";

        			dsParamSetArrowBlank(this.ds_search, strParam);

        			this.setAccessLog(this.ds_queMstList.getColumn(rowPos, "SURVSEQ"), this.ds_queMstList.getColumn(rowPos, "SURVKINDCD"), this.fv_MENUNM, "삭제", strParam);  //접속기록

        			this.gfnTransaction("deleteQuestion",
        						"swiss/ad/questionMng/deleteQuestion.do",
        						"dsSearch=ds_search",
        						"",
        						"",
        						"fnCallback",
        						false);
        		}

        	} else {
        		var SURVSEQ = this.ds_queMstList.getColumn(rowPos, "SURVSEQ");
        		var SURVKINDCD = this.ds_queMstList.getColumn(rowPos, "SURVKINDCD");
        		var QUESTIONSEQ = this.ds_queMstList.getColumn(rowPos, "QUESTIONSEQ");

        		var strParam = "SURVSEQ=" + SURVSEQ + "ª";
        		strParam += "SURVKINDCD=" + SURVKINDCD + "ª";
        		strParam += "QUESTIONSEQ=" + QUESTIONSEQ + "ª";

        		dsParamSetArrowBlank(nexacro.getApplication().gds_param, strParam);
        		this.fn_goPage("AD::ad16m01.xfdl");
        	}

        };



        this.Div_Div00_Combo00_onitemchanged = function(obj,e)
        {
        	this.selectSurvList();
        };


        this.fn_popupCallback = function(strPopupID, strReturn){
        	if(strPopupID == "pop_question_view"){

        	} else if(strPopupID == "pop_question_result"){

        	}
        }


        this.searchEnter = function(obj,e)
        {
        	if(e.keycode == nexacro.Event.KEY_ENTER){
        		this.Div_Div00_Button00_onclick(this.Div.form.Div00.form.Button00);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ad16m00_onload,this);
            this.Div.form.Div00.form.in_cb_year.addEventHandler("onitemchanged",this.Div_Div00_Combo00_onitemchanged,this);
            this.Div.form.Div00.form.in_cb_kind.addEventHandler("onitemchanged",this.Div_Div00_Combo00_onitemchanged,this);
            this.Div.form.Div00.form.Button00.addEventHandler("onclick",this.Div_Div00_Button00_onclick,this);
            this.Div.form.Div00.form.in_edit_title.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.btn_fileDn.addEventHandler("onclick",this.Div_btn_fileDn_onclick,this);
            this.Div.form.btn_add.addEventHandler("onclick",this.Div_btn_add_onclick,this);
            this.Div.form.gd_list.addEventHandler("oncellclick",this.Div_gd_list_oncellclick,this);
        };

        this.loadIncludeScript("ad16m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
