(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("hp12m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("15px/normal \"SpoqaHanSans-Regular\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,1100);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_queMstList", this);
            obj._setContents("<ColumnInfo><Column id=\"TRDATE\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTIONSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTIONTERMFR\" type=\"DATE\" size=\"256\"/><Column id=\"QUESTIONTERMTO\" type=\"DATE\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","1100",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgTraining","30","40","1200","260",null,null,null,null,null,null,this);
            obj.set_image("url(\'theme::default/images/img_trainingTop.jpg\')");
            obj.set_border("0px none");
            obj.set_accessibilitylabel("설문조사 고등교육기관졸업자 취업통계조사 설문조사입니다.");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Div("sub_search","30","330","1200","230",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_cssclass("divFormR");
            this.addChild(obj.name, obj);

            obj = new Static("divTitle","15","10","1167","29",null,null,null,null,null,null,this.sub_search.form);
            obj.set_taborder("0");
            obj.set_font("18px/normal \"SpoqaHanSans-Regular\"");
            obj.set_visible("true");
            obj.set_cssclass("reser_date_result");
            this.sub_search.addChild(obj.name, obj);

            obj = new Static("label_trdate","15","50","80","29",null,null,null,null,null,null,this.sub_search.form);
            obj.set_taborder("1");
            obj.set_text("일시");
            this.sub_search.addChild(obj.name, obj);

            obj = new Static("divTrdate","123","50","1059","29",null,null,null,null,null,null,this.sub_search.form);
            obj.set_taborder("2");
            obj.set_font("18px/normal \"SpoqaHanSans-Regular\"");
            obj.set_visible("true");
            obj.set_cssclass("reser_date_result");
            this.sub_search.addChild(obj.name, obj);

            obj = new Static("label_place","15","90","80","29",null,null,null,null,null,null,this.sub_search.form);
            obj.set_taborder("1");
            obj.set_text("장소");
            this.sub_search.addChild(obj.name, obj);

            obj = new Static("divPlace","123","90","1059","29",null,null,null,null,null,null,this.sub_search.form);
            obj.set_taborder("2");
            obj.set_font("18px/normal \"SpoqaHanSans-Regular\"");
            obj.set_visible("true");
            obj.set_cssclass("reser_date_result");
            this.sub_search.addChild(obj.name, obj);

            obj = new Static("label_maxcnt","15","130","80","29",null,null,null,null,null,null,this.sub_search.form);
            obj.set_taborder("1");
            obj.set_text("신청인원");
            this.sub_search.addChild(obj.name, obj);

            obj = new Static("divMaxcnt","123","130","1059","29",null,null,null,null,null,null,this.sub_search.form);
            obj.set_taborder("2");
            obj.set_font("18px/normal \"SpoqaHanSans-Regular\"");
            obj.set_visible("true");
            obj.set_cssclass("reser_date_result");
            this.sub_search.addChild(obj.name, obj);

            obj = new Static("label_rcdate","15","170","80","29",null,null,null,null,null,null,this.sub_search.form);
            obj.set_taborder("1");
            obj.set_text("신청기간");
            this.sub_search.addChild(obj.name, obj);

            obj = new Static("divRcdate","123","170","1059","29",null,null,null,null,null,null,this.sub_search.form);
            obj.set_taborder("2");
            obj.set_font("18px/normal \"SpoqaHanSans-Regular\"");
            obj.set_visible("true");
            obj.set_cssclass("reser_date_result");
            this.sub_search.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,1100,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("hp12m00_test.xfdl","CM::common.xjs");
        this.registerScript("hp12m00_test.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;

        this.hp12m00_oninit = function(obj,e)
        {
        	//alert("bef init");
        	this.selectInitInfo();
        };

        this.fnCallback = function(serviceId, errCD, errMSG){
        	if(serviceId == "selectInitInfo"){
        		//alert("in selectInitInfo");
        		this.Div.form.sub_search.form.divTitle.set_text('asdf1');
        		this.Div.form.sub_search.form.divTrdate.set_text('asdf2');
        		this.Div.form.sub_search.form.divPlace.set_text('asdf3');
        		this.Div.form.sub_search.form.divMaxcnt.set_text('asdf4');
        		this.Div.form.sub_search.form.divRcdate.set_text('asdf5');

        		//this.searchQuestionList();
        	} else if (serviceId == "searchQuestionList"){

        	}
        }

        this.selectInitInfo = function(){
        	this.gfnTransaction("selectInitInfo",
        						"swiss/ad/survtrain/selectInitInfo.do",
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


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.hp12m00_oninit,this);
        };

        this.loadIncludeScript("hp12m00_test.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
