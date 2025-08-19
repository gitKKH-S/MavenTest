(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("hp02m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("15px/normal \"SpoqaHanSans-Regular\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,1195);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_news", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARDSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BBSNO\" type=\"STRING\" size=\"256\"/><Column id=\"BOARDTYPECD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"REFNO\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"NOTICEYN\" type=\"STRING\" size=\"256\"/><Column id=\"SECRETYN\" type=\"STRING\" size=\"256\"/><Column id=\"HIT\" type=\"STRING\" size=\"256\"/><Column id=\"DELYN\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIERID\" type=\"STRING\" size=\"256\"/><Column id=\"MODDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"FILEID\" type=\"STRING\" size=\"256\"/><Column id=\"FILEYN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cnt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_year", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_kind", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CDNM\">전체</Col></Row><Row><Col id=\"CD\">FP</Col><Col id=\"CDNM\">신편입생정보</Col></Row><Row><Col id=\"CD\">GP</Col><Col id=\"CDNM\">졸업생정보</Col></Row><Row><Col id=\"CD\">AG</Col><Col id=\"CDNM\">졸업후상황</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","1195",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","1195",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","1195",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new ImageViewer("imgNews","30","0","1200","160",null,null,null,null,null,null,this.Div.form);
            obj.set_image("url(\'theme::default/images/img_newsTop.jpg\')");
            obj.set_border("0px none");
            obj.set_accessibilitylabel("취업통계소식 고등교육기관졸업자 취업통계조사 취업통계소식입니다.");
            obj.set_taborder("5");
            this.Div.addChild(obj.name, obj);

            obj = new Static("label_subject","43","imgNews:10","937","50",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_text("제목");
            obj.set_cssclass(" title_t2");
            this.Div.addChild(obj.name, obj);

            obj = new WebBrowser("webBrower_text","30","label_subject:0","1200","600",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_border("0px none");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("gd_news_list","30","webBrower_text:10","1200","248",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_news");
            obj.set_cssclass("default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"578\"/><Column size=\"206\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"소식\"/><Cell col=\"1\" text=\"작성일\"/></Band><Band id=\"body\"><Cell text=\"bind:SUBJECT\"/><Cell col=\"1\" text=\"bind:WORKDTHM\" displaytype=\"date\" edittype=\"date\" calendardateformat=\"yyyy.MM.dd\" calendareditformat=\"yyyy.MM.dd\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Div("pagingWrap","30","gd_news_list:10","1200","35",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_pagging","380","0","480","33",null,null,null,null,null,null,this.Div.form.pagingWrap.form);
            obj.set_taborder("1");
            obj.set_text("div_00");
            obj.set_url("CM::CmPagging.xfdl");
            this.Div.form.pagingWrap.addChild(obj.name, obj);

            obj = new Div("div_btnArea","980","imgNews:10","250",null,null,"975",null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_text("버튼영역");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"10","70","30","0",null,null,null,null,null,this.Div.form.div_btnArea.form);
            obj.set_taborder("13");
            obj.set_text("삭제");
            obj.set_cssclass("btn_sty05");
            this.Div.form.div_btnArea.addChild(obj.name, obj);

            obj = new Button("btn_mod",null,"10","70","30","btn_del:10",null,null,null,null,null,this.Div.form.div_btnArea.form);
            obj.set_taborder("1");
            obj.set_text("수정");
            obj.set_cssclass("btn_sty05");
            this.Div.form.div_btnArea.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"10","70","30","btn_mod:10",null,null,null,null,null,this.Div.form.div_btnArea.form);
            obj.set_taborder("0");
            obj.set_text("작성");
            obj.set_cssclass("btn_sty09");
            this.Div.form.div_btnArea.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,1195,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div.form.label_subject","text","ds_news","SUBJECT");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CM::CmPagging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("hp02m00.xfdl","CM::common.xjs");
        this.registerScript("hp02m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;

        this.pageRowCnt = 5;
        this.totalRowCnt = 0;
        this.bbsNo;
        this.fv_MENUNM = "알림소식>취업통계소식";
        this.fv_SURVSEQ="";
        this.fv_SURVKINDCD="AG";
        var objApp 		= nexacro.getApplication();
        this.hp02m00_oninit = function(obj,e)
        {
        	var grp = objApp.gds_login_info.getColumn(0, "USERGRPTYPE");

        	if(grp == "2"){
        		this.Div.form.div_btnArea.set_visible(true);
        	}
        };

        this.hp02m00_onload = function(obj,e)
        {
        	nexacro.getApplication().gds_rtn_result.clear();
        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='AG'",0);
        	this.fv_SURVSEQ = objApp.gds_login_info.getColumn(idx, "SURVSEQ");
        	this.searchNewsCnt();
        };

        // 신규
        this.Div_div_btnArea_btn_add_onclick = function(obj,e)
        {
        	nexacro.getApplication().gds_rtn_result.clear();
        	this.fn_goPage("HP::hp02m01.xfdl");

        };
        // 수정
        this.Div_div_btnArea_btn_mod_onclick = function(obj,e)
        {
        	var strParam = "BBSNO=" + this.bbsNo + "ª";
        	dsParamSetArrowBlank(nexacro.getApplication().gds_rtn_result, strParam);
        	this.fn_goPage("HP::hp02m01.xfdl");
        };
        // 삭제
        this.Div_div_btnArea_btn_del_onclick = function(obj,e)
        {
        	if(this.confirm("선택한 취업통계소식을 정말 삭제 하시겠습니까?")){
        		this.deleteNews();
        	}
        };


        // 선택
        this.Div_gd_news_list_oncellclick = function(obj,e)
        {
        	var url = nexacro.getEnvironment().services["svcBaseUrl"].url + "ui/file/richtexteditor/html/preview.html";
        	this.Div.form.webBrower_text.set_url(url);
        };

        this.Div_webBrower_text_onloadcompleted = function(obj,e)
        {
        	var rowPos = this.Div.form.gd_news_list.getSelectedRows();
        	this.bbsNo = this.ds_news.getColumn(rowPos, "BBSNO");
        	obj.callMethod("setContent", this.ds_news.getColumn(rowPos, "TEXT"));

        	/*
        	//var siteHeight = obj.callMethod("getHeight")
        	var doc = this.Div.form.webBrower_text.getProperty("document");
        	var body = doc.getProperty("body");
        	var siteHeight = body.getProperty("scrollHeight");

        	obj.set_height(siteHeight);
        	this.Div.form.resetScroll();
        	*/

        };

        this.fnCallback = function(serviceId, errCD, errMSG){
        	if(errCD < 0){
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)

        	}else{
        		if(serviceId == "searchNewsCnt"){
        			this.totalRowCnt = this.ds_cnt.getColumn(0, "CNT");
        			this.paggingInit();
        			//this.searchNewsList(this.Div.form.pagingWrap.form.div_pagging.form.fv_pageIdx+1);
        		}
        		if(serviceId =="deleteNews"){
        			this.searchNewsCnt();
        		}
        	}

        }



        //Div.form.pagingWrap.form.div_pagging


        // 전체 게시글수
        this.searchNewsCnt = function(){
        	var strParam = "ª";
        	dsParamSetArrowBlank(this.ds_search, strParam);

        	this.gfnTransaction("searchNewsCnt",
        						"swiss/hp/news/searchNewsCnt.do",
        						"dsSearch=ds_search",
        						"ds_cnt=dsResult",
        						"",
        						"fnCallback",
        						true);
        }

        // 데이터 가져오기
        this.searchNewsList = function(sPage){
        	var start = (sPage - 1) * this.pageRowCnt + 1;
        	var end = sPage * this.pageRowCnt;
        	var strParam = "START=" + start + "ª";
        	strParam += "END=" + end + "ª";
        	dsParamSetArrowBlank(this.ds_search, strParam);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "취업통계소식조회", strParam);  //취업통계소식조회
        	this.gfnTransaction("searchNewsList",
        						"swiss/hp/news/searchNewsList.do",
        						"dsSearch=ds_search",
        						"ds_news=dsResult",
        						"",
        						"fnCallback",
        						false);
        	var url = nexacro.getEnvironment().services["svcBaseUrl"].url + "ui/file/richtexteditor/html/preview.html";
        	this.Div.form.webBrower_text.set_url(url);
        }

        // 삭제
        this.deleteNews = function(){
        	var strParam = "BBSNO=" + this.bbsNo + "ª";
        	dsParamSetArrowBlank(this.ds_search, strParam);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "삭제", strParam);  //취업통계 소식 삭제
        	this.gfnTransaction("deleteNews",
        						"swiss/hp/news/deleteNews.do",
        						"dsSearch=ds_search",
        						"",
        						"",
        						"fnCallback",
        						true);
        }

        // 페이지 초기화 함수
        this.paggingInit = function(){
        	this.Div.form.pagingWrap.form.div_pagging.form.initPages(this.totalRowCnt, this.pageRowCnt); // 전체DATA CNT, 페이지출력수
        	this.Div.form.pagingWrap.form.div_pagging.form.setPage(1);
        }

        // 페이징 완료후 처리
        this.setPageAfter = function (nPage){
        	this.searchNewsList(nPage);
        }












        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.hp02m00_onload,this);
            this.addEventHandler("oninit",this.hp02m00_oninit,this);
            this.Div.form.webBrower_text.addEventHandler("onloadcompleted",this.Div_webBrower_text_onloadcompleted,this);
            this.Div.form.gd_news_list.addEventHandler("oncellclick",this.Div_gd_news_list_oncellclick,this);
            this.Div.form.div_btnArea.form.btn_del.addEventHandler("onclick",this.Div_div_btnArea_btn_del_onclick,this);
            this.Div.form.div_btnArea.form.btn_mod.addEventHandler("onclick",this.Div_div_btnArea_btn_mod_onclick,this);
            this.Div.form.div_btnArea.form.btn_add.addEventHandler("onclick",this.Div_div_btnArea_btn_add_onclick,this);
        };

        this.loadIncludeScript("hp02m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
