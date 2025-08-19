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


            obj = new Dataset("ds_SurveyList", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVEY_CODE\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"SURVEY_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"TAR_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ANS_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Grid("gd_list","30","180","1200","445",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_SurveyList");
            obj.set_autofittype("col");
            obj.set_scrollbartype("default none");
            obj.set_cssclass("default");
            obj.set_nodatatext("데이터가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"36\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"SURVEY_CODE\" font=\"16px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"1\" text=\"SURVEY_TITLE\" font=\"16px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"2\" text=\"TAR_CNT\" font=\"16px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"3\" text=\"ANS_CNT\" font=\"16px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:SURVEY_CODE\"/><Cell col=\"1\" text=\"bind:SURVEY_TITLE\"/><Cell col=\"2\" text=\"bind:TAR_CNT\"/><Cell col=\"3\" text=\"bind:ANS_CNT\"/></Band></Format></Formats>");
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
        this.addIncludeScript("hp06m00.xfdl","CM::common.xjs");
        this.addIncludeScript("hp06m00.xfdl","CM::utl_script.xjs");
        this.registerScript("hp06m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;
        this.executeIncludeScript("CM::utl_script.xjs"); /*include "CM::utl_script.xjs"*/;


        this.hp06m00_onload = function(obj,e)
        {
        	this.searchSurveyList();
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

        	var strParam = "SURVEY_CODE=" + this.ds_SurveyList.getColumn(nRow, "SURVEY_CODE") + "ª";
        	//strParam += "SURVKINDCD=" + this.ds_SurveyList.getColumn(nRow, "SURVKINDCD") + "ª";
        	//strParam += "QUESTIONSEQ=" + this.ds_SurveyList.getColumn(nRow, "QUESTIONSEQ") + "ª";
        	//strParam += "TAR_STATE=" + this.ds_SurveyList.getColumn(nRow, "TAR_STATE") + "ª";

        	//var strParam = "SURVSEQ=ª";



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
        		//alert("in cback");
        		//this.searchSurveyList();
        	} else if(serviceId == "searchSurveyList"){

        		var objApp = nexacro.getApplication();
        		var grp = objApp.gds_login_info.getColumn(0, "USERGRPTYPE");

        		if(grp != "4"){
        			this.alert("취업담당자만 사용가능합니다.");
        			return;
        		}

        		//var nRow = this.Div.form.gd_list.getSelectedDatasetRows();
        		var nRow = 0;
        		//var nPos = this.Div.form.gd_list.getCellPos();
        		var nPos = 0;

        		var strParam = "SURVEY_CODE=" + this.ds_SurveyList.getColumn(nRow, "SURVEY_CODE") + "ª";
        		//strParam += "SURVKINDCD=" + this.ds_SurveyList.getColumn(nRow, "SURVKINDCD") + "ª";
        		//strParam += "QUESTIONSEQ=" + this.ds_SurveyList.getColumn(nRow, "QUESTIONSEQ") + "ª";
        		//strParam += "TAR_STATE=" + this.ds_SurveyList.getColumn(nRow, "TAR_STATE") + "ª";

        		//var strParam = "SURVSEQ=ª";



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

        		this.fn_goPage("HP::hp06m01.xfdl");
        	}
        }

        // 데이터 가져오기
        this.searchSurveyList = function(sPage){

        	//alert("call searchSurveyList");

        	var strParam = "SURVSEQ=ª";
        	dsParamSetArrowBlank(this.ds_search, strParam);

        	this.gfnTransaction("searchSurveyList",
        						"swiss/hp/survey/searchSurveyList.do",
        						"dsSearch=ds_search",
        						"ds_SurveyList=dsResult",
        						"",
        						"fnCallback",
        						true);
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.hp06m00_onload,this);
            this.Div.form.gd_list.addEventHandler("oncellclick",this.Div_gd_list_oncellclick,this);
        };

        this.loadIncludeScript("hp06m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
