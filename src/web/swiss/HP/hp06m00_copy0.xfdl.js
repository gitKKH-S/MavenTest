(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("hp06m00");
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
            obj = new Div("Div","0","0","1260","900",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","900",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","900",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new ImageViewer("imgPoll","30","0","1200","160",null,null,null,null,null,null,this.Div.form);
            obj.set_image("url(\'theme::default/images/img_pollTop.jpg\')");
            obj.set_border("0px none");
            obj.set_accessibilitylabel("설문조사 고등교육기관졸업자 취업통계조사 설문조사입니다.");
            obj.set_taborder("2");
            this.Div.addChild(obj.name, obj);

            obj = new Div("Div00","30","imgPoll:40","1200","74",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Static("label_survseq","25","20","64","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("조사회차");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Combo("in_cb_year","label_survseq:0","20","150","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_survList");
            obj.set_codecolumn("SURVSEQ");
            obj.set_datacolumn("SURVSEQ");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("label_kind","290","20","64","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("5");
            obj.set_text("조사종류");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Combo("in_cb_kind","label_kind:0","20","190","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_kind");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_text("");
            obj.set_value("");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("label_name","in_cb_kind:50","20","84","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("설문조사명");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"20","100","30","30",null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("검색");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Edit("in_edit_title","label_name:0","20","300","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("4");
            obj.set_maxlength("50");
            obj.set_inputfilter("dot,sign,symbol");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Grid("gd_list","30","Div00:46","1200","445",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_binddataset("ds_queMstList");
            obj.set_autofittype("col");
            obj.set_scrollbartype("default none");
            obj.set_cssclass("default");
            obj.set_nodatatext("데이터가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"103\"/><Column size=\"131\"/><Column size=\"78\"/><Column size=\"419\"/><Column size=\"102\"/><Column size=\"88\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"80\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"25\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"조사회차\"/><Cell col=\"1\" rowspan=\"2\" text=\"조사종류\"/><Cell col=\"2\" rowspan=\"2\" text=\"설문회차\"/><Cell col=\"3\" rowspan=\"2\" text=\"설문조사명\"/><Cell col=\"4\" colspan=\"2\" text=\"설문기간\"/><Cell col=\"6\" rowspan=\"2\" text=\"설문수\"/><Cell col=\"7\" colspan=\"2\" text=\"대상학교\"/><Cell col=\"9\" rowspan=\"2\" text=\"상태\"/><Cell row=\"1\" col=\"4\" text=\"시작일\"/><Cell row=\"1\" col=\"5\" text=\"종료일\"/><Cell row=\"1\" col=\"7\" text=\"응답\"/><Cell row=\"1\" col=\"8\" text=\"대상\"/></Band><Band id=\"body\"><Cell padding-left=\"20px\" text=\"bind:SURVSEQ\"/><Cell col=\"1\" text=\"bind:SURVKINDNM\"/><Cell col=\"2\" padding-left=\"20px\" text=\"bind:QUESTIONSEQ\"/><Cell col=\"3\" padding-left=\"20px\" text=\"bind:QUESTIONTITLE\" textAlign=\"left\" tooltiptext=\"bind:QUESTIONTITLE\"/><Cell col=\"4\" padding-left=\"20px\" text=\"bind:QUESTIONTERMFR\" displaytype=\"date\" calendardateformat=\"yyyy.MM.dd\" calendareditformat=\"yyyy.MM.dd\"/><Cell col=\"5\" padding-left=\"20px\" text=\"bind:QUESTIONTERMTO\" displaytype=\"date\" calendardateformat=\"yyyy.MM.dd\" calendareditformat=\"yyyy.MM.dd\"/><Cell col=\"6\" text=\"bind:TOTINQCNT\"/><Cell col=\"7\" padding-left=\"20px\" text=\"bind:ANS_CNT\"/><Cell col=\"8\" padding-left=\"20px\" text=\"bind:TAR_CNT\"/><Cell col=\"9\" textAlign=\"center\" padding-left=\"20px\" displaytype=\"normal\" edittype=\"none\" text=\"expr:TAR_STATE != '0'?'설문완료':'설문이전'\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,900,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("hp06m00_copy0.xfdl","CM::common.xjs");
        this.addIncludeScript("hp06m00_copy0.xfdl","CM::utl_script.xjs");
        this.registerScript("hp06m00_copy0.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;
        this.executeIncludeScript("CM::utl_script.xjs"); /*include "CM::utl_script.xjs"*/;


        this.hp06m00_oninit = function(obj,e)
        {
        	this.selectInitInfo();
        };

        // 설문화면
        this.Div_gd_list_oncellclick = function(obj,e)
        {

        	var objApp = nexacro.getApplication();
        	var grp = objApp.gds_login_info.getColumn(0, "USERGRPTYPE");

        	if(grp != "4"){
        		this.alert("취업담당자만 사용가능합니다.");
        		return;
        	}

        	var nRow = this.Div.form.gd_list.getSelectedDatasetRows();
        	var nPos = this.Div.form.gd_list.getCellPos();

        	var strParam = "SURVSEQ=" + this.ds_queMstList.getColumn(nRow, "SURVSEQ") + "ª";
        	strParam += "SURVKINDCD=" + this.ds_queMstList.getColumn(nRow, "SURVKINDCD") + "ª";
        	strParam += "QUESTIONSEQ=" + this.ds_queMstList.getColumn(nRow, "QUESTIONSEQ") + "ª";
        	strParam += "TAR_STATE=" + this.ds_queMstList.getColumn(nRow, "TAR_STATE") + "ª";

        	dsParamSetArrowBlank(nexacro.getApplication().gds_rtn_result, strParam);


        	/*	사용자는 종합결과페이지 제공 안함 */
        	this.fn_goPage("HP::hp06m01.xfdl");
        	/*
        	if(nPos == "9"){
        		this.fn_goPage("HP::hp06m02.xfdl");
        	} else {
        		this.fn_goPage("HP::hp06m01.xfdl");
        	}
        	*/

        };


        this.fnCallback = function(serviceId, errCD, errMSG){
        	if(serviceId == "selectInitInfo"){
        		this.Div.form.Div00.form.in_cb_year.set_index(0)
        		this.searchQuestionList();
        	} else if (serviceId == "searchQuestionList"){

        	}

        }




        this.selectInitInfo = function(){
        	this.gfnTransaction("selectInitInfo",
        						"swiss/hp/question/selectInitInfo.do",
        						"",
        						"ds_survList=survList",
        						"",
        						"fnCallback",
        						true);
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

        	this.gfnTransaction("searchQuestionList",
        						"swiss/hp/question/searchQuestionList.do",
        						"dsSearch=ds_search",
        						"ds_queMstList=dsResult",
        						"",
        						"fnCallback",
        						true);
        }


        this.Div_Div00_btn_search_onclick = function(obj,e)
        {
        	this.searchQuestionList();
        };


        this.searchEnter = function(obj,e)
        {
        	if(e.keycode == nexacro.Event.KEY_ENTER){
        		this.Div_Div00_btn_search_onclick(this.Div.form.Div00.form.btn_search);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.hp06m00_oninit,this);
            this.Div.form.Div00.form.in_cb_year.addEventHandler("onitemchanged",this.Div_Div00_Combo00_onitemchanged,this);
            this.Div.form.Div00.form.in_cb_kind.addEventHandler("onitemchanged",this.Div_Div00_Combo00_onitemchanged,this);
            this.Div.form.Div00.form.btn_search.addEventHandler("onclick",this.Div_Div00_btn_search_onclick,this);
            this.Div.form.Div00.form.in_edit_title.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.gd_list.addEventHandler("oncellclick",this.Div_gd_list_oncellclick,this);
        };

        this.loadIncludeScript("hp06m00_copy0.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
