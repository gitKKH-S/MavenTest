(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ad16m01");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("normal 700 36px/normal \"맑은 고딕\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,875);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_queMstList", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTIONSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTIONTERMFR\" type=\"DATE\" size=\"256\"/><Column id=\"QUESTIONTERMTO\" type=\"DATE\" size=\"256\"/><Column id=\"QUESTIONTITLE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTINQCNT\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTIONSCRIPT\" type=\"STRING\" size=\"256\"/><Column id=\"DELYN\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIERID\" type=\"STRING\" size=\"256\"/><Column id=\"MODDTHM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_survList", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_kind", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">GP</Col><Col id=\"CDNM\">졸업생정보</Col></Row><Row><Col id=\"CD\">FP</Col><Col id=\"CDNM\">신입생정보</Col></Row><Row><Col id=\"CD\">AG</Col><Col id=\"CDNM\">졸업후상황</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_queInqList", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTIONSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"INQSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"INQNO\" type=\"STRING\" size=\"256\"/><Column id=\"INQTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQTYPENM\" type=\"STRING\" size=\"256\"/><Column id=\"INQEXAMPLECNT\" type=\"STRING\" size=\"256\"/><Column id=\"INQGRPNM\" type=\"STRING\" size=\"256\"/><Column id=\"INQTEXT\" type=\"STRING\" size=\"256\"/><Column id=\"SUJECTINQTITLE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIERID\" type=\"STRING\" size=\"256\"/><Column id=\"MODDTHM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","870",null,null,null,null,null,null,this);
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

            obj = new Static("Static00","0","0","30","865",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","865",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_areaBtn1_01","30","20","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_text("div_00");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_target","760","5","320","30",null,null,null,null,null,null,this.Div.form.div_areaBtn1_01.form);
            obj.set_taborder("1");
            obj.set_text("설문조사 대상 선정 / 진행률 / 개별결과");
            obj.set_cssclass("btn_sty05");
            this.Div.form.div_areaBtn1_01.addChild(obj.name, obj);

            obj = new Button("btn_result","btn_target:20","5","100","30",null,null,null,null,null,null,this.Div.form.div_areaBtn1_01.form);
            obj.set_taborder("0");
            obj.set_text("설문결과");
            obj.set_cssclass("btn_sty05");
            this.Div.form.div_areaBtn1_01.addChild(obj.name, obj);

            obj = new Static("sub_title","0","0","370","32",null,null,null,null,null,null,this.Div.form.div_areaBtn1_01.form);
            obj.set_taborder("2");
            obj.set_text("설문");
            obj.set_cssclass(" title_t2");
            this.Div.form.div_areaBtn1_01.addChild(obj.name, obj);

            obj = new Div("div_detail","30","60","1200","396",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_text("div_00");
            obj.set_cssclass("noticeWrap");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_sub1","0","0","1200","51",null,null,null,null,null,null,this.Div.form.div_detail.form);
            obj.set_taborder("0");
            obj.set_border("0px none,0px none,1px solid #a5a5a5");
            obj.set_text("");
            this.Div.form.div_detail.addChild(obj.name, obj);

            obj = new Div("div_t1","0","0","155","50",null,null,null,null,null,null,this.Div.form.div_detail.form.div_sub1.form);
            obj.set_taborder("0");
            obj.set_text("조사회차");
            obj.set_cssclass("noticeTit");
            this.Div.form.div_detail.form.div_sub1.addChild(obj.name, obj);

            obj = new Div("div_titKind","580","0","155","50",null,null,null,null,null,null,this.Div.form.div_detail.form.div_sub1.form);
            obj.set_taborder("3");
            obj.set_text("조사종류");
            obj.set_cssclass("noticeTit");
            obj.set_border("0px none,1px solid #a5a5a5");
            this.Div.form.div_detail.form.div_sub1.addChild(obj.name, obj);

            obj = new Combo("in_cb_survseq","div_t1:5","4","200","33",null,null,null,null,null,null,this.Div.form.div_detail.form.div_sub1.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_survList");
            obj.set_codecolumn("SURVSEQ");
            obj.set_datacolumn("SURVSEQ");
            obj.set_text("회차");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.div_detail.form.div_sub1.addChild(obj.name, obj);

            obj = new Combo("in_cb_kind","div_titKind:5","4","200","33",null,null,null,null,null,null,this.Div.form.div_detail.form.div_sub1.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_kind");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_text("종류");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.div_detail.form.div_sub1.addChild(obj.name, obj);

            obj = new Div("div_sub2","0","div_sub1:0","1200","51",null,null,null,null,null,null,this.Div.form.div_detail.form);
            obj.set_taborder("1");
            obj.set_border("0px none,0px none,1px solid #a5a5a5");
            obj.set_text("");
            this.Div.form.div_detail.addChild(obj.name, obj);

            obj = new Div("div_t2","0","0","155","50",null,null,null,null,null,null,this.Div.form.div_detail.form.div_sub2.form);
            obj.set_taborder("0");
            obj.set_text("설문시작일");
            obj.set_cssclass("noticeTit");
            this.Div.form.div_detail.form.div_sub2.addChild(obj.name, obj);

            obj = new Div("div_titKind","580","0","155","50",null,null,null,null,null,null,this.Div.form.div_detail.form.div_sub2.form);
            obj.set_taborder("1");
            obj.set_text("설문종료일");
            obj.set_cssclass("noticeTit");
            obj.set_border("0px none,1px solid #a5a5a5");
            this.Div.form.div_detail.form.div_sub2.addChild(obj.name, obj);

            obj = new Calendar("in_calr_stdde","div_t2:5","4","200","35",null,null,null,null,null,null,this.Div.form.div_detail.form.div_sub2.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy.MM.dd");
            obj.set_editformat("yyyy.MM.dd");
            this.Div.form.div_detail.form.div_sub2.addChild(obj.name, obj);

            obj = new Calendar("in_calr_endde","div_titKind:5","4","200","35",null,null,null,null,null,null,this.Div.form.div_detail.form.div_sub2.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy.MM.dd");
            obj.set_editformat("yyyy.MM.dd");
            this.Div.form.div_detail.form.div_sub2.addChild(obj.name, obj);

            obj = new Div("div_sub3","0","div_sub2:0","1200","51",null,null,null,null,null,null,this.Div.form.div_detail.form);
            obj.set_taborder("2");
            obj.set_border("0px none,0px none,1px solid #a5a5a5");
            obj.set_text("");
            this.Div.form.div_detail.addChild(obj.name, obj);

            obj = new Div("div_t3","0","0","155","50",null,null,null,null,null,null,this.Div.form.div_detail.form.div_sub3.form);
            obj.set_taborder("0");
            obj.set_text("설문 명");
            obj.set_cssclass("noticeTit");
            this.Div.form.div_detail.form.div_sub3.addChild(obj.name, obj);

            obj = new Edit("in_edit_title","div_t3:5","5","1030","35",null,null,null,null,null,null,this.Div.form.div_detail.form.div_sub3.form);
            obj.set_taborder("5");
            obj.set_inputfilter("symbol,sign");
            this.Div.form.div_detail.form.div_sub3.addChild(obj.name, obj);

            obj = new Div("div_sub4","0","div_sub3:0","1200","241",null,null,null,null,null,null,this.Div.form.div_detail.form);
            obj.set_taborder("3");
            obj.set_border("0px none,0px none,1px solid #a5a5a5");
            obj.set_text("");
            this.Div.form.div_detail.addChild(obj.name, obj);

            obj = new Div("div_t4","0","0","155","240",null,null,null,null,null,null,this.Div.form.div_detail.form.div_sub4.form);
            obj.set_taborder("0");
            obj.set_text("설명");
            obj.set_cssclass("noticeTit");
            this.Div.form.div_detail.form.div_sub4.addChild(obj.name, obj);

            obj = new TextArea("in_txtEdit_content",null,"8","1030","225","10",null,null,null,null,null,this.Div.form.div_detail.form.div_sub4.form);
            obj.set_taborder("6");
            obj.set_autoskip("true");
            this.Div.form.div_detail.form.div_sub4.addChild(obj.name, obj);

            obj = new Div("div_areaBtn1","30","div_detail:10","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_text("div_00");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_mod","495",null,"100","30",null,"0",null,null,null,null,this.Div.form.div_areaBtn1.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_sty01");
            this.Div.form.div_areaBtn1.addChild(obj.name, obj);

            obj = new Button("btn_list","btn_mod:20",null,"100","30",null,"0",null,null,null,null,this.Div.form.div_areaBtn1.form);
            obj.set_taborder("0");
            obj.set_text("목록");
            obj.set_cssclass("btn_sty01");
            this.Div.form.div_areaBtn1.addChild(obj.name, obj);

            obj = new Div("div_areaBtn2","30","div_areaBtn1:-8","1200","90",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_text("div_00");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static02","0","0","110","30",null,null,null,null,null,null,this.Div.form.div_areaBtn2.form);
            obj.set_taborder("2");
            obj.set_text("설문 문항");
            obj.set_cssclass("title_t2");
            this.Div.form.div_areaBtn2.addChild(obj.name, obj);

            obj = new Button("btn_fileDn","0","47",null,"30","1095",null,null,null,null,null,this.Div.form.div_areaBtn2.form);
            obj.set_taborder("0");
            obj.set_text("파일저장");
            obj.set_cssclass("btn_sty05");
            this.Div.form.div_areaBtn2.addChild(obj.name, obj);

            obj = new Button("btn_quenAdd","1080","47","120","30",null,null,null,null,null,null,this.Div.form.div_areaBtn2.form);
            obj.set_taborder("1");
            obj.set_text("설문 문제 등록");
            obj.set_cssclass("btn_sty09");
            this.Div.form.div_areaBtn2.addChild(obj.name, obj);

            obj = new Grid("gd_item","30","591","1200","270",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_queInqList");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"74\"/><Column size=\"162\"/><Column size=\"232\"/><Column size=\"637\"/><Column size=\"102\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"문제번호\"/><Cell col=\"1\" text=\"문제그룹\"/><Cell col=\"2\" text=\"문제유형\"/><Cell col=\"3\" text=\"문제\"/><Cell col=\"4\" text=\"삭제여부\"/></Band><Band id=\"body\"><Cell padding-left=\"20px\" text=\"bind:INQNO\"/><Cell col=\"1\" padding-left=\"20px\" text=\"bind:INQGRPNM\"/><Cell col=\"2\" padding-left=\"20px\" text=\"bind:INQTYPENM\"/><Cell col=\"3\" text=\"bind:INQTEXT\" tooltiptext=\"bind:INQTEXT\"/><Cell col=\"4\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\" cssclass=\"cellBtn\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,875,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div.form.div_detail.form.div_sub1.form.in_cb_survseq","value","ds_queMstList","SURVSEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div.form.div_detail.form.div_sub1.form.in_cb_kind","value","ds_queMstList","SURVKINDCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div.form.div_detail.form.div_sub2.form.in_calr_stdde","value","ds_queMstList","QUESTIONTERMFR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div.form.div_detail.form.div_sub2.form.in_calr_endde","value","ds_queMstList","QUESTIONTERMTO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div.form.div_detail.form.div_sub4.form.in_txtEdit_content","value","ds_queMstList","QUESTIONSCRIPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div.form.div_detail.form.div_sub3.form.in_edit_title","value","ds_queMstList","QUESTIONTITLE");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ad16m01.xfdl","CM::common.xjs");
        this.addIncludeScript("ad16m01.xfdl","CM::utl_script.xjs");
        this.registerScript("ad16m01.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;
        this.executeIncludeScript("CM::utl_script.xjs"); /*include "CM::utl_script.xjs"*/;

        this.SURVSEQ;
        this.SURVKINDCD;
        this.QUESTIONSEQ;
        this.mode = "NEW";

        this.fv_MENUNM = "관리자>설문등록";

        this.ad16m01_oninit = function(obj,e)
        {
        	this.SURVSEQ = nexacro.getApplication().gds_param.getColumn(0, "SURVSEQ");
        	this.SURVKINDCD = nexacro.getApplication().gds_param.getColumn(0, "SURVKINDCD");
        	this.QUESTIONSEQ = nexacro.getApplication().gds_param.getColumn(0, "QUESTIONSEQ");

        	if(this.SURVSEQ != null && this.SURVSEQ != ""){
        		this.mode= "MOD";
        		this.Div.form.div_areaBtn1.form.btn_mod.set_text("수정");
        	} else {
        		this.Div.form.div_areaBtn1_01.set_visible(false);
        		this.Div.form.div_areaBtn2.set_visible(false);
        		this.Div.form.gd_item.set_visible(false);
        	}
        	this.selectInitInfo();

        };

        // 목록
        this.Div_div_areaBtn1_btn_list_onclick = function(obj,e)
        {
        	this.fn_goPage("AD::ad16m00.xfdl");
        };

        // 수정/저장
        this.Div_div_areaBtn1_btn_mod_onclick = function(obj,e)
        {
        	if (this.validate() == true){
        		return;
        	};
        	this.questionProc();
        };

        // 설문 조사대상
        this.Div_div_areaBtn1_01_btn_target_onclick = function(obj,e)
        {
        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("pop_question_target"
        					  , 0
        					  , 0
        					  , 1260
        					  , 720
        					  , null
        					  , null
        					  , "AD::ad16p02.xfdl");
        	objChildFrame.set_showtitlebar(true);
        	objChildFrame.set_dragmovetype("all");
        	objChildFrame.set_openalign("center middle");
        	objChildFrame.set_autosize("false");
        	objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)");
        	var objParam = {
        		SURVSEQ : this.SURVSEQ
        		, SURVKINDCD : this.SURVKINDCD
        		, QUESTIONSEQ : this.QUESTIONSEQ
        	};
        	objChildFrame.showModal(this.getOwnerFrame()
        						  , objParam
        						  , this
        						  , "fn_popupCallback");
        };

        // 진행률 조회


        // 설문결과
        this.Div_div_areaBtn1_01_btn_result_onclick = function(obj,e)
        {
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
        			SURVSEQ : this.SURVSEQ
        			, SURVKINDCD : this.SURVKINDCD
        			, QUESTIONSEQ : this.QUESTIONSEQ
        		};
        		objChildFrame.showModal(this.getOwnerFrame()
        							  , objParam
        							  , this
        							  , "fn_popupCallback");
        };



        this.fnCallback = function(serviceId, errCD, errMSG){
        	if(errCD < 0){
        		this.setAccessLog("", "AG", this.fv_MENUNM, serviceId + " : Fail", "");  //접속기록(실패시)
        	} else {
        		if(serviceId == "selectInitInfo"){
        			if(this.mode == "MOD"){
        				this.selectQuestionView();
        			} else {
        				this.Div.form.div_detail.form.div_sub1.form.in_cb_survseq.set_index(0);
        				this.Div.form.div_detail.form.div_sub1.form.in_cb_kind.set_index(0);
        			}
        		} else if (serviceId == "selectQuestionView"){

        		} else if (serviceId == "insertQueMst"){
        			this.fn_goPage("AD::ad16m00.xfdl");
        		} else if (serviceId == "updateQueMst"){
        			this.alert("수정되었습니다.");
        		}
        	}
        }


        // 초기 데이터
        this.selectInitInfo = function(){
        	this.gfnTransaction("selectInitInfo",
        						"swiss/ad/questionMng/selectInitInfo.do",
        						"",
        						"ds_survList=survList",
        						"",
        						"fnCallback",
        						true);
        }

        // 상세정보
        this.selectQuestionView = function(){
        	var strParam = "SURVSEQ=" 		+ this.SURVSEQ + "ª";
        		strParam += "SURVKINDCD=" 	+ this.SURVKINDCD + "ª";
        		strParam += "QUESTIONSEQ=" 	+ this.QUESTIONSEQ + "ª";

        	dsParamSetArrowBlank(this.ds_search, strParam);

        	this.setAccessLog(this.SURVSEQ, this.SURVKINDCD, this.fv_MENUNM, "설문상세", strParam);  //접속기록

        	this.gfnTransaction("selectQuestionView",
        						"swiss/ad/questionMng/selectQuestionView.do",
        						"dsSearch=ds_search",
        						"ds_queMstList=mstResult ds_queInqList=inqResult",
        						"",
        						"fnCallback",
        						true);
        }

        // 처리
        this.questionProc = function(){
        	var SURVSEQ			= this.Div.form.div_detail.form.div_sub1.form.in_cb_survseq.value;
        	var SURVKINDCD		= this.Div.form.div_detail.form.div_sub1.form.in_cb_kind.value;
        	var QUESTIONSEQ		= this.QUESTIONSEQ; // 신규는 SQL에서 생성됨
        	var QUESTIONTERMFR	= this.Div.form.div_detail.form.div_sub2.form.in_calr_stdde.value;
        	var QUESTIONTERMTO	= this.Div.form.div_detail.form.div_sub2.form.in_calr_endde.value;
        	var QUESTIONTITLE	= this.Div.form.div_detail.form.div_sub3.form.in_edit_title.value;
        	var QUESTIONSCRIPT	= this.Div.form.div_detail.form.div_sub4.form.in_txtEdit_content.value;


        	var strParam = "SURVSEQ=" 			+ SURVSEQ + "ª";
        		strParam += "SURVKINDCD=" 		+ SURVKINDCD + "ª";
        		strParam += "QUESTIONSEQ=" 		+ QUESTIONSEQ + "ª";
        		strParam += "QUESTIONTERMFR=" 	+ QUESTIONTERMFR + "ª";
        		strParam += "QUESTIONTERMTO=" 	+ QUESTIONTERMTO + "ª";
        		strParam += "QUESTIONTITLE=" 	+ QUESTIONTITLE + "ª";
        		strParam += "QUESTIONSCRIPT=" 	+ QUESTIONSCRIPT + "ª";

        	dsParamSetArrowBlank(this.ds_search, strParam);

        	this.setAccessLog(SURVSEQ, SURVKINDCD, this.fv_MENUNM, this.mode == "NEW" ? "등록" : "수정", strParam);  //접속기록

        	if(this.mode == "NEW"){
        		this.gfnTransaction("insertQueMst",
        						"swiss/ad/questionMng/insertQueMst.do",
        						"dsSearch=ds_search",
        						"",
        						"",
        						"fnCallback",
        						true);
        	} else if(this.mode == "MOD"){
        		this.gfnTransaction("updateQueMst",
        						"swiss/ad/questionMng/updateQueMst.do",
        						"dsSearch=ds_search",
        						"ds_queMstList=dsResult",
        						"",
        						"fnCallback",
        						true);
        	}




        }



        //============================ 설문 문제 관련 START

        // 파일저장
        this.Div_div_areaBtn2_btn_fileDn_onclick = function(obj,e)
        {
        	var strParam = "SURVSEQ=" 		+ this.SURVSEQ + "ª";
        	strParam += "SURVKINDCD=" 	+ this.SURVKINDCD + "ª";
        	strParam += "QUESTIONSEQ=" 	+ this.QUESTIONSEQ + "ª";

        	this.setAccessLog(this.SURVSEQ, this.SURVKINDCD, this.fv_MENUNM, "파일저장", strParam);  //접속기록

        	this.utlf_excelDownload("설문문항", this.Div.form.gd_item, this.Export00_onsuccess);
        };
        this.Export00_onsuccess = function (obj, e )
        {
        };


        /* 설문문항 -- 팝업치리일때 */
        this.Div_div_areaBtn2_btn_quenAdd_onclick = function(obj,e)
        {
        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("pop_question_itemAdd"
        	                  , 0
        					  , 0
        					  , 850
        					  , 880
        					  , null
        					  , null
        					  , "AD::ad16p03.xfdl");
        	objChildFrame.set_showtitlebar(true);
        	objChildFrame.set_dragmovetype("all");
        	objChildFrame.set_openalign("center middle");
        	objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)");
        	objChildFrame.set_autosize("false");
        	//var objParam = {param1:this.dsMain, param2:this.dsMain.rowposition,param3:'I'};

        	var objParam = {
        		SURVSEQ : this.SURVSEQ
        		, SURVKINDCD : this.SURVKINDCD
        		, QUESTIONSEQ : this.QUESTIONSEQ
        		, MODE : "NEW"
        	};
        	objChildFrame.showModal(this.getOwnerFrame()
        	                      , objParam
        						  , this
        						  , "fn_popupCallback");
        };


        this.fn_popupCallback = function(strPopupID, strReturn){
        	if(strPopupID == "pop_question_itemAdd"){
        		this.selectQuestionView();			// 화면갱신
        	} else if (strPopupID == "pop_question_itemMod"){
        		this.selectQuestionView();			// 화면갱신
        	} else if (strPopupID == "pop_question_target"){

        	}
        }
        //============================ 설문 문제 관련 END



        this.Div_gd_item_oncellclick = function(obj,e)
        {
        	var cellPos = this.Div.form.gd_item.getCellPos();
        	var rowPos = this.Div.form.gd_item.getSelectedDatasetRows();

        	if(cellPos == '3') {			// 상세
        		var objChildFrame = new ChildFrame();
        		objChildFrame.init("pop_question_itemMod"
        						  , 0
        						  , 0
        						  , 850
        						  , 880
        						  , null
        						  , null
        						  , "AD::ad16p03.xfdl");
        		objChildFrame.set_showtitlebar(true);
        		objChildFrame.set_dragmovetype("all");
        		objChildFrame.set_openalign("center middle");
        		objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)");
        		objChildFrame.set_autosize("false");
        		//var objParam = {param1:this.dsMain, param2:this.dsMain.rowposition,param3:'I'};

        		var objParam = {
        			SURVSEQ : this.SURVSEQ
        			, SURVKINDCD : this.SURVKINDCD
        			, QUESTIONSEQ : this.QUESTIONSEQ
        			, INQSEQ : this.ds_queInqList.getColumn(rowPos, "INQSEQ")
        			, MODE : "MOD"
        		};
        		objChildFrame.showModal(this.getOwnerFrame()
        							  , objParam
        							  , this
        							  , "fn_popupCallback");
        	} else if (cellPos == '4'){ 	// 삭제

        	}
        };


        this.validate = function(){
        	var survseq = this.Div.form.div_detail.form.div_sub1.form.in_cb_survseq.value;
        	var kind = this.Div.form.div_detail.form.div_sub1.form.in_cb_kind.value;
        	var stdde = this.Div.form.div_detail.form.div_sub2.form.in_calr_stdde.value;
        	var endde = this.Div.form.div_detail.form.div_sub2.form.in_calr_endde.value;
        	var title = this.Div.form.div_detail.form.div_sub3.form.in_edit_title.value;
        	var dc = this.Div.form.div_detail.form.div_sub4.form.in_txtEdit_content.value;

        	if(survseq == "" || survseq == null){
        		this.alert("조사회차를 선택하세요");
        		return true;
        	} else if(kind == "" || kind == null){
        		this.alert("조사종류를 선택하세요");
        		return true;
        	} else if(stdde == "" || stdde == null){
        		this.alert("설문시작일을 선택하세요");
        		return true;
        	} else if(endde == "" || endde == null){
        		this.alert("설문종료일을 선택하세요");
        		return true;
        	} else if(title == "" || title == null){
        		this.alert("설문명을 입력하세요");
        		return true;
        	} else if(dc == "" || dc == null){
        		this.alert("설문에 대한 설명을 입력하세요");
        		return true;
        	}
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.ad16m01_oninit,this);
            this.Div.form.div_areaBtn1_01.form.btn_target.addEventHandler("onclick",this.Div_div_areaBtn1_01_btn_target_onclick,this);
            this.Div.form.div_areaBtn1_01.form.btn_result.addEventHandler("onclick",this.Div_div_areaBtn1_01_btn_result_onclick,this);
            this.Div.form.div_areaBtn1.form.btn_mod.addEventHandler("onclick",this.Div_div_areaBtn1_btn_mod_onclick,this);
            this.Div.form.div_areaBtn1.form.btn_list.addEventHandler("onclick",this.Div_div_areaBtn1_btn_list_onclick,this);
            this.Div.form.div_areaBtn2.form.Static02.addEventHandler("onclick",this.Div_div_areaBtn2_Static02_onclick,this);
            this.Div.form.div_areaBtn2.form.btn_fileDn.addEventHandler("onclick",this.Div_div_areaBtn2_btn_fileDn_onclick,this);
            this.Div.form.div_areaBtn2.form.btn_quenAdd.addEventHandler("onclick",this.Div_div_areaBtn2_btn_quenAdd_onclick,this);
            this.Div.form.gd_item.addEventHandler("oncellclick",this.Div_gd_item_oncellclick,this);
        };

        this.loadIncludeScript("ad16m01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
