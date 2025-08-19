(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("hp04m01");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("15px/normal \"SpoqaHanSans-Regular\"");
            this.set_background("#f9f9f9");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,1010);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_kind", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">FP</Col><Col id=\"CDNM\">신입생정보</Col></Row><Row><Col id=\"CD\">GP</Col><Col id=\"CDNM\">졸업생정보</Col></Row><Row><Col id=\"CD\">AG</Col><Col id=\"CDNM\">졸업후상황</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_year", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_faq", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARDSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BBSNO\" type=\"STRING\" size=\"256\"/><Column id=\"BOARDTYPECD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"REFNO\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"ANSWER\" type=\"STRING\" size=\"256\"/><Column id=\"NOTICEYN\" type=\"STRING\" size=\"256\"/><Column id=\"SECRETYN\" type=\"STRING\" size=\"256\"/><Column id=\"HIT\" type=\"STRING\" size=\"256\"/><Column id=\"DELYN\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIERID\" type=\"STRING\" size=\"256\"/><Column id=\"MODDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"FILEID\" type=\"STRING\" size=\"256\"/><Column id=\"FILEYN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","1010",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","1010",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","1010",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new ImageViewer("imgFaq","30","0","1200","160",null,null,null,null,null,null,this.Div.form);
            obj.set_image("url(\'theme::default/images/img_faqTop.jpg\')");
            obj.set_border("0px none");
            obj.set_accessibilitylabel("FAQ 고등교육기관졸업자 취업통계조사 FAQ입니다.");
            obj.set_taborder("0");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_areaMain","30","imgFaq:30","1200","760",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_cssclass("rowGrid");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_areaContent","0","80","1198","420",null,null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_taborder("7");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_formscrollbartype("none none");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","0","0","155","420",null,null,null,null,null,null,this.Div.form.div_areaMain.form.div_areaContent.form);
            obj.set_taborder("1");
            obj.set_text("답변");
            obj.set_cssclass("boxTitle");
            obj.set_textAlign("center");
            this.Div.form.div_areaMain.form.div_areaContent.addChild(obj.name, obj);

            obj = new TextArea("in_txtEdit_answer","Static00_00_00_00:20","9","1005","400",null,null,null,null,null,null,this.Div.form.div_areaMain.form.div_areaContent.form);
            obj.set_taborder("0");
            obj.set_maxlength("4000");
            obj.set_inputfilter("sign");
            this.Div.form.div_areaMain.form.div_areaContent.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","155","40",null,null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_taborder("1");
            obj.set_text("조사년도");
            obj.set_cssclass("boxTitle");
            obj.set_textAlign("center");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","Static00:0","155","40",null,null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_taborder("5");
            obj.set_text("질문");
            obj.set_cssclass("boxTitle");
            obj.set_textAlign("center");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new Static("Static00_02","155","0","425","40",null,null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_cssclass("boxDesc");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new Static("Static_title","Static00_00_00:0","Static00_02:0",null,"40","0",null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_cssclass("boxDesc");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new Edit("in_edit_subject","Static00_00_00:20","45",null,"30","20",null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_taborder("6");
            obj.set_maxlength("200");
            obj.set_inputfilter("sign");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new Combo("in_cb_year","Static00:20","4","150","30",null,null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_year");
            obj.set_codecolumn("CDNM");
            obj.set_datacolumn("CDNM");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_00","733","0",null,"40","0",null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_taborder("10");
            obj.set_cssclass("boxDesc");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","580","0","155","40",null,null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_taborder("3");
            obj.set_text("조사종류");
            obj.set_cssclass("boxTitle");
            obj.set_textAlign("center");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new Combo("in_cb_kind","Static00_01_01:20","4","210","30",null,null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_kind");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new Div("div_areaFile","0","500","1198","246",null,null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_border("0px none,0px none,1px solid #a5a5a5");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new Static("static_file","0","0","155","245",null,null,null,null,null,null,this.Div.form.div_areaMain.form.div_areaFile.form);
            obj.set_taborder("1");
            obj.set_text("첨부파일");
            obj.set_cssclass("boxTitle");
            obj.set_textAlign("center");
            this.Div.form.div_areaMain.form.div_areaFile.addChild(obj.name, obj);

            obj = new Div("div_fileRight","static_file:15","0",null,"235","10",null,null,null,null,null,this.Div.form.div_areaMain.form.div_areaFile.form);
            obj.set_taborder("1");
            obj.set_text("div_fileRight");
            obj.set_url("CM::DataTransBoard.xfdl");
            obj.set_background("#ffffff");
            this.Div.form.div_areaMain.form.div_areaFile.addChild(obj.name, obj);

            obj = new Div("div_btnArea","30","div_areaMain:0",null,"68","30",null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_text("div_00");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"20","120","30","0",null,null,null,null,null,this.Div.form.div_btnArea.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            this.Div.form.div_btnArea.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"20","120","30","btn_del:10",null,null,null,null,null,this.Div.form.div_btnArea.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            this.Div.form.div_btnArea.addChild(obj.name, obj);

            obj = new Button("btn_list","560","20","120","30",null,null,null,null,null,null,this.Div.form.div_btnArea.form);
            obj.set_taborder("0");
            obj.set_text("목록");
            obj.set_cssclass("btn_sty05");
            this.Div.form.div_btnArea.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,1010,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","Div.form.div_areaMain.form.div_areaContent.form.in_txtEdit_answer","value","ds_faq","ANSWER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div.form.div_areaMain.form.in_edit_subject","value","ds_faq","SUBJECT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div.form.div_areaMain.form.in_cb_year","value","ds_faq","SURVYEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div.form.div_areaMain.form.in_cb_kind","value","ds_faq","SURVKINDCD");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CM::DataTransBoard.xfdl");
        };
        
        // User Script
        this.addIncludeScript("hp04m01.xfdl","CM::common.xjs");
        this.registerScript("hp04m01.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;
        this.bbsNo;
        this.mode = "NEW";
        this.fv_MENUNM = "알림소식>FAQ>작성";
        this.fv_SURVSEQ="";
        this.fv_SURVKINDCD="AG";
        var objApp 		= nexacro.getApplication();

        this.hp04m01_oninit = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	var grp = objApp.gds_login_info.getColumn(0, "USERGRPTYPE");
        	if(grp == "2"){
        		this.Div.form.div_btnArea.set_visible(true);
        	}

        	this.bbsNo =  nexacro.getApplication().gds_rtn_result.getColumn(0, "BBSNO");
        	if(this.bbsNo != null){			// 신규
        		this.mode = "MOD";
        	}
        };

        this.hp04m01_onload = function(obj,e)
        {
        	this.selectYearList();
        };

        // 목록
        this.Div_btn_list_onclick = function(obj,e)
        {
        	this.fn_goPage("HP::hp04m00.xfdl");
        };

        // 처리
        this.Div_btn_save_onclick = function(obj,e)
        {
        	if(this.validate()){
        		return;
        	}

        	var SURVYEAR 	= this.Div.form.div_areaMain.form.in_cb_year.value;
        	var SURVKINDCD 	= this.Div.form.div_areaMain.form.in_cb_kind.value;
        	var SUBJECT		= this.Div.form.div_areaMain.form.in_edit_subject.value;
        	var ANSWER 		= escape(this.Div.form.div_areaMain.form.div_areaContent.form.in_txtEdit_answer.value);
        	var FILEID 		= this.Div.form.div_areaMain.form.div_areaFile.form.div_fileRight.form.returnAttIdtNo();
        	var WORKERNM	= objApp.gds_login_info.getColumn(0, "USERNM");

        	var strParam = 'SURVYEAR=' + SURVYEAR + 'ª';
        		strParam += 'SURVKINDCD=' + SURVKINDCD + 'ª';
        		strParam += 'SUBJECT=' + SUBJECT + 'ª';
        		strParam += 'ANSWER=' + ANSWER + 'ª';
        		strParam += 'FILEID=' + FILEID + 'ª';
        		strParam += 'WORKERNM='	+ WORKERNM + 'ª';

        	if(this.mode == 'MOD'){
        		strParam += 'BBSNO=' + this.bbsNo + 'ª';

        		dsParamSetArrowBlank(this.ds_search, strParam);
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "수정", strParam);  //접속기록
        		this.gfnTransaction("updateFaq",
        							"swiss/hp/faq/updateFaq.do",
        							"dsSearch=ds_search",
        							"",
        							"",
        							"fnCallback",
        							true);
        	} else {
        		var SURVYEAR 	= this.Div.form.div_areaMain.form.in_cb_year.value;
        		var SURVKINDCD 	= this.Div.form.div_areaMain.form.in_cb_kind.value;
        		var SUBJECT		= this.Div.form.div_areaMain.form.in_edit_subject.value;
        		var ANSWER 		= this.Div.form.div_areaMain.form.div_areaContent.form.in_txtEdit_answer.value;

        		dsParamSetArrowBlank(this.ds_search, strParam);
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "등록", strParam);  //접속기록
        		this.gfnTransaction("insertFaq",
        							"swiss/hp/faq/insertFaq.do",
        							"dsSearch=ds_search",
        							"",
        							"",
        							"fnCallback",
        							true);
        	}
        };

        // 삭제
        this.Div_div_btnArea_btn_del_onclick = function(obj,e)
        {
        	if(confirm("FAQ 내용을 삭제하시겠습니까?")){
        		var strParam = 'BBSNO=' + this.bbsNo + 'ª';

        		dsParamSetArrowBlank(this.ds_search, strParam);

        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "삭제", strParam);  //접속기록
        		this.gfnTransaction("deleteFaq",
        							"swiss/hp/faq/deleteFaq.do",
        							"dsSearch=ds_search",
        							"",
        							"",
        							"fnCallback",
        							true);
        	}

        };

        this.fnCallback = function(serviceId, errCD, errMSG){
        	if(errCD == 0){
        		if(serviceId == "selectYearList"){
        			if(this.mode == "NEW"){
        				this.Div.form.div_areaMain.form.in_cb_year.set_index(0);
        				this.Div.form.div_areaMain.form.in_cb_kind.set_index(0);

        			} else {
        				this.selectFaqView();
        			}
        		} else if(serviceId == "selectFaqView"){
        			var nAnswer = this.ds_faq.getColumn(0,"ANSWER");
        			var n2Answer = unescape(nAnswer);
        			this.ds_faq.setColumn(0,"ANSWER",n2Answer);

        			this.Div.form.div_btnArea.form.btn_save.set_text("수정");
        			this.Div.form.div_areaMain.form.div_areaFile.form.div_fileRight.form.varSetting(this.ds_faq.getColumn(0, "FILEID"), true);
        		} else if(serviceId == "insertFaq"){
        			this.alert("저장 되었습니다.");
        			this.fn_goPage("HP::hp04m00.xfdl");
        		} else if(serviceId == "updateFaq"){
        			this.alert("수정 되었습니다.");
        			this.fn_goPage("HP::hp04m00.xfdl");
        		} else if(serviceId == "deleteFaq"){
        			this.alert("삭제 되었습니다.");
        			this.fn_goPage("HP::hp04m00.xfdl");
        		}
        	} else {
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceId + " : Fail", "bbsNo=" + this.bbsNo + ",mode=" + this.mode);  //접속기록(실패시)
        	}
        }

        // 조사년도
        this.selectYearList = function(){
        	this.gfnTransaction("selectYearList",
        						"swiss/hp/com/selectYearList.do",
        						"",
        						"ds_year=dsResult",
        						"",
        						"fnCallback",
        						false);
        }

        // 상세정보
        this.selectFaqView = function(){
        	var strParam = "BBSNO=" + this.bbsNo + "ª";

        	dsParamSetArrowBlank(this.ds_search, strParam);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "상세", strParam);  //접속기록
        	this.gfnTransaction("selectFaqView",
        						"swiss/hp/faq/selectFaqView.do",
        						"dsSearch=ds_search",
        						"ds_faq=dsResult",
        						"",
        						"fnCallback",
        						true);
        }

        this.validate = function(){
        	var SURVYEAR 	= this.Div.form.div_areaMain.form.in_cb_year.value;
        	var SURVKINDCD 	= this.Div.form.div_areaMain.form.in_cb_kind.value;
        	var SUBJECT		= this.Div.form.div_areaMain.form.in_edit_subject.value;
        	var ANSWER 		= this.Div.form.div_areaMain.form.div_areaContent.form.in_txtEdit_answer.value;

        	if(SURVYEAR == null || SURVYEAR == ""){
        		this.alert("조사년도를 선택하세요");
        		return true;
        	} else if(SURVKINDCD == null || SURVKINDCD == ""){
        		this.alert("조사종류를 선택하세요");
        		return true;
        	} else if(SUBJECT == null || SUBJECT == ""){
        		this.alert("질문을 입력하세요");
        		return true;
        	} else if(ANSWER == null || ANSWER == ""){
        		this.alert("답변을 입력하세요");
        		return true;
        	}
        }



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.hp04m01_oninit,this);
            this.addEventHandler("onload",this.hp04m01_onload,this);
            this.Div.form.div_btnArea.form.btn_del.addEventHandler("onclick",this.Div_div_btnArea_btn_del_onclick,this);
            this.Div.form.div_btnArea.form.btn_save.addEventHandler("onclick",this.Div_btn_save_onclick,this);
            this.Div.form.div_btnArea.form.btn_list.addEventHandler("onclick",this.Div_btn_list_onclick,this);
        };

        this.loadIncludeScript("hp04m01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
