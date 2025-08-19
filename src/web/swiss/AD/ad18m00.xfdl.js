(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ad18m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("15px/normal \"SpoqaHanSans-Regular\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,915);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMain", this);
            obj._setContents("<ColumnInfo><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPOSITORY_NO\" type=\"STRING\" size=\"32\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIERID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPOSITORY_NM\" type=\"STRING\" size=\"32\"/><Column id=\"APPLY_YEAR_TRN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"UNI_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSave", this);
            obj._setContents("<ColumnInfo><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPOSITORY_NO\" type=\"STRING\" size=\"32\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIERID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPOSITORY_NM\" type=\"STRING\" size=\"32\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"MODDTHM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseyn", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"cdnm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"cdnm\">사용</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"cdnm\">비사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDoc", this);
            obj._setContents("<ColumnInfo><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPOSITORY_NO\" type=\"STRING\" size=\"32\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIERID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPOSITORY_NM\" type=\"STRING\" size=\"32\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"MODDTHM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYear", this);
            obj._setContents("<ColumnInfo><Column id=\"year\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","910",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Div("sub_title_wrap","30","20","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            this.Div.addChild(obj.name, obj);

            obj = new Static("sub_title","0","0","370","32",null,null,null,null,null,null,this.Div.form.sub_title_wrap.form);
            obj.set_taborder("0");
            obj.set_text("문서입고관리");
            obj.set_cssclass(" title_t2");
            this.Div.form.sub_title_wrap.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","20",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","905",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","905",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Div("sub_search","30","60","1200","140",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","30","30","64","23",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("9");
            obj.set_text("문서위치");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01","30","73","64","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("6");
            obj.set_text("본분교");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_col","Static00_01:10","73","190","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("2");
            obj.set_accessibilitylabel("보관상태");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div_form_sub_search_form_in_cb_col_innerdataset = new nexacro.NormalDataset("Div_form_sub_search_form_in_cb_col_innerdataset", obj);
            Div_form_sub_search_form_in_cb_col_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">본교</Col></Row><Row><Col id=\"codecolumn\">05</Col><Col id=\"datacolumn\">분교</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">캠퍼스</Col></Row><Row><Col id=\"codecolumn\">04</Col><Col id=\"datacolumn\">캠퍼스1</Col></Row></Rows>");
            obj.set_innerdataset(Div_form_sub_search_form_in_cb_col_innerdataset);
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"73","100","30","30",null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("5");
            obj.set_text("검색");
            obj.set_cssclass("btn_styLarge");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_year","412","30","140","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("0");
            obj.set_accessibilitylabel("입고년도");
            obj.set_innerdataset("dsYear");
            obj.set_codecolumn("year");
            obj.set_datacolumn("year");
            obj.set_text("2021");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_gbn","412","73","140","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("3");
            obj.set_accessibilitylabel("구분");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div_form_sub_search_form_in_cb_gbn_innerdataset = new nexacro.NormalDataset("Div_form_sub_search_form_in_cb_gbn_innerdataset", obj);
            Div_form_sub_search_form_in_cb_gbn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">학교</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">제목</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">문서번호</Col></Row></Rows>");
            obj.set_innerdataset(Div_form_sub_search_form_in_cb_gbn_innerdataset);
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_trn","in_cb_year:10","30","140","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("1");
            obj.set_accessibilitylabel("입고년도회차");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div_form_sub_search_form_in_cb_trn_innerdataset = new nexacro.NormalDataset("Div_form_sub_search_form_in_cb_trn_innerdataset", obj);
            Div_form_sub_search_form_in_cb_trn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1회차</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2회차</Col></Row></Rows>");
            obj.set_innerdataset(Div_form_sub_search_form_in_cb_trn_innerdataset);
            obj.set_text("1회차");
            obj.set_value("1");
            obj.set_index("0");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Calendar("in_calr_00","817","30","160","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("11");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static01","in_calr_00:10","31","18","24",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("7");
            obj.set_text("~");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00","340","73","62","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("8");
            obj.set_text("구분");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_edt_text","in_cb_gbn:10","73","140","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("4");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_depository","Static00_00:10","30","190","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("10");
            obj.set_accessibilitylabel("입고년도");
            obj.set_innerdataset("dsDoc");
            obj.set_codecolumn("DEPOSITORY_NO");
            obj.set_datacolumn("DEPOSITORY_NM");
            obj.set_text("2021");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Calendar("in_calr_01","Static01:0","30","160","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("12");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Radio("in_rdo_00",null,"30","87","30","796",null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div_form_sub_search_form_in_rdo_00_innerdataset = new nexacro.NormalDataset("Div_form_sub_search_form_in_rdo_00_innerdataset", obj);
            Div_form_sub_search_form_in_rdo_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">입고년도</Col></Row></Rows>");
            obj.set_innerdataset(Div_form_sub_search_form_in_rdo_00_innerdataset);
            obj.set_text("");
            obj.set_value("입고년도");
            obj.set_index("-1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Radio("in_rdo_01","in_cb_trn:33","30","77","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div_form_sub_search_form_in_rdo_01_innerdataset = new nexacro.NormalDataset("Div_form_sub_search_form_in_rdo_01_innerdataset", obj);
            Div_form_sub_search_form_in_rdo_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">입고일</Col></Row></Rows>");
            obj.set_innerdataset(Div_form_sub_search_form_in_rdo_01_innerdataset);
            obj.set_text("");
            obj.set_value("입고년도");
            obj.set_index("-1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Button("btn_newreg",null,"sub_search:20","100","30","30",null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_text("입고추가");
            obj.set_cssclass("btn_sty05");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("grd_00","30","btn_newreg:20","1200","538",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_binddataset("dsMain");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"115\"/><Column size=\"315\"/><Column size=\"600\"/></Columns><Rows><Row size=\"45\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"보관위치명\"/><Cell col=\"1\" text=\"년도회차\"/><Cell col=\"2\" text=\"학교명\"/><Cell col=\"3\" text=\"제목\" border=\"0px none,0px none,1px solid #a5a5a5\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPOSITORY_NM\"/><Cell col=\"1\" text=\"bind:APPLY_YEAR_TRN_NO\" cssclass=\"alignLeft\"/><Cell col=\"2\" text=\"bind:UNI_NM\" cssclass=\"alignLeft\"/><Cell col=\"3\" text=\"bind:TITLE\" cssclass=\"alignLeft\" border=\"0px none,0px none,1px solid #a5a5a5\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Div("pagingWrap","40","838","1184","64",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_pagging","370","11","480","40",null,null,null,null,null,null,this.Div.form.pagingWrap.form);
            obj.set_taborder("0");
            obj.set_text("div_00");
            obj.set_url("CM::CmPagging.xfdl");
            this.Div.form.pagingWrap.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,915,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CM::CmPagging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("ad18m00.xfdl","CM::common.xjs");
        this.addIncludeScript("ad18m00.xfdl","CM::utl_script.xjs");
        this.registerScript("ad18m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;
        this.executeIncludeScript("CM::utl_script.xjs"); /*include "CM::utl_script.xjs"*/;

        //기본변수세팅
        this.fv_USERID = "";
        //페이징
        this.pageRowCnt = 20;
        this.totalRowCnt = 0;
        this.pageFirst = true;

        this.fv_MENUNM = "관리자>입고시스템>문서입고관리";

        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		this.setAccessLog("", "AG", this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceID == "listDocInsert"){
        			if(this.dsMain.rowcount == 0) alert("조회된 자료가 없습니다.");
        			this.totalRowCnt = this.dsPage.getColumn(0, "TOTALPAGECNT");
        			if(this.pageFirst)this.paggingInit();
        		}
        		if(serviceID == "listDocDepository"){
        			this.dsDoc.insertRow(0);
        			this.dsDoc.setColumn(0,"DEPOSITORY_NO","");
        			this.dsDoc.setColumn(0,"DEPOSITORY_NM","전체");
        			this.Div.form.sub_search.form.in_rdo_00.set_value("1");
        			this.Div.form.sub_search.form.in_cb_year.set_index(1);
        			this.Div.form.sub_search.form.in_cb_trn.set_index(0);
        			this.btn_search_onclick(this.Div.form.sub_search.form.btn_search);
        		}
         	}
        }
        this.lfn_listDoc = function(){
        	this.dsSearch.clearData();
        	var strParam = "";
        	strParam += "DOC_NO=" 	+ this.fv_DOC_NO	+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.gfnTransaction("listDocDepository",
        						"/swiss/ad/docdepository/listDocDepository.do",
        						"dsSearch=dsSearch",
        						"dsDoc=dsResult",
        						"",
        						"fnCallback",
        						false);
        }

        this.btn_search_onclick = function(obj,e)
        {
        	this.pageFirst = true;
        	this.lfn_listSearch(1);
        };

        this.lfn_listSearch = function(sPage){
        	this.dsSearch.clearData();
        	var start = (sPage - 1) * this.pageRowCnt + 1;
        	var end = sPage * this.pageRowCnt;
        	var strParam = "";
        	strParam += "START=" + start + "ª";
        	strParam += "END=" + end + "ª";
        	strParam += "DEPOSITORY_NO=" 	+ this.Div.form.sub_search.form.in_cb_depository.value	+ "ª";
        	if( "1" == this.Div.form.sub_search.form.in_rdo_00.value){
        		strParam += "APPLY_YEAR="		+ this.Div.form.sub_search.form.in_cb_year.value	+ "ª";
        		strParam += "TRN_NO=" 			+ this.Div.form.sub_search.form.in_cb_trn.value	+ "ª";
        	}else if( "2" == this.Div.form.sub_search.form.in_rdo_01.value){
        		if("" == this.Div.form.sub_search.form.in_calr_00.value){
        			alert("입고 시작일을 입력해 주세요"); return;
        		}
        		if("" == this.Div.form.sub_search.form.in_calr_01.value){
        			alert("입고 종료일을 입력해 주세요"); return;
        		}
        		if(this.Div.form.sub_search.form.in_calr_00.value > this.Div.form.sub_search.form.in_calr_01.value){
        			alert("입고시작일이 종료일보다 클수 없습니다."); return;
        		}
        		strParam += "RECEIVE_SDATE="		+ this.Div.form.sub_search.form.in_calr_00.value	+ "ª";
        		strParam += "RECEIVE_EDATE="		+ this.Div.form.sub_search.form.in_calr_00.value	+ "ª";
        	}
        	strParam += "BRANCH_TYPE=" 		+ this.Div.form.sub_search.form.in_cb_col.value	+ "ª";

        	if( "1" == this.Div.form.sub_search.form.in_cb_gbn.value){
        		strParam += "UNI_NM="			+ this.Div.form.sub_search.form.in_edt_text.value	+ "ª";
        	}else if( "2" == this.Div.form.sub_search.form.in_cb_gbn.value){
        		strParam += "TITLE="		+ this.Div.form.sub_search.form.in_edt_text.value	+ "ª";
        	}else if( "3" == this.Div.form.sub_search.form.in_cb_gbn.value){
        		strParam += "DOC_NM_NO="			+ this.Div.form.sub_search.form.in_edt_text.value	+ "ª";
        	}

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        //	trace(this.dsSearch.saveXML());
        	this.setAccessLog("", "AG", this.fv_MENUNM, "검색", strParam);  //접속기록
        	this.gfnTransaction("listDocInsert",
        						"/swiss/ad/docdepository/listDocInsert.do",
        						"dsSearch=dsSearch",
        						"dsMain=dsResult dsPage=dsPage",
        						"",
        						"fnCallback",
        						false);
        };

        // 페이지 초기화 함수
        this.paggingInit = function(){
        	this.Div.form.pagingWrap.form.div_pagging.form.initPages(this.totalRowCnt, this.pageRowCnt); // 전체DATA CNT, 페이지출력수
        	this.Div.form.pagingWrap.form.div_pagging.form.setPage(1);
        }


        // 페이징 완료후 처리
        this.setPageAfter = function (nPage){
        	if(!this.pageFirst)this.lfn_listSearch(nPage);
        	this.pageFirst = false;
        }

        this.ad18m00_onload = function(obj,e)
        {
        	var objApp 		= nexacro.getApplication();
        	this.fv_USERID = objApp.gds_login_info.getColumn(0, "USERID") ;
        	var toyear = new Date().getFullYear();
        	var date = toyear+1;
        	for(var i=0; i < 9; i++){
        		var nRow = this.dsYear.addRow();
        		this.dsYear.setColumn(nRow,"year",date-i);
        	}
        	this.lfn_listDoc();
        };

        this.Div_btn_newreg_onclick = function(obj,e)
        {
        	this.fn_goPage("AD::ad18m01.xfdl");
        };

        this.Div_sub_search_in_rdo_00_onitemclick = function(obj,e)
        {
        	this.Div.form.sub_search.form.in_rdo_00.set_value("1");
        	this.Div.form.sub_search.form.in_rdo_01.set_value("");
        };

        this.Div_sub_search_in_rdo_01_onitemclick = function(obj,e)
        {
        	this.Div.form.sub_search.form.in_rdo_00.set_value("");
        	this.Div.form.sub_search.form.in_rdo_01.set_value("2");
        };

        this.Div_grd_00_oncelldblclick = function(obj,e)
        {
        	var strParam = "DOC_NO=" + this.dsMain.getColumn(this.dsMain.rowposition,"DOC_NO") + "ª";
        	//trace(this.dsMain.getColumn(this.dsMain.rowposition,"DOC_NO"));
        	dsParamSetArrowBlank(nexacro.getApplication().gds_param, strParam);

        	this.fn_goPage("AD::ad18m01.xfdl");
        };


        this.Div_sub_search_in_rdo_00_onitemchanged = function(obj,e)
        {

        };

        this.searchEnter = function(obj,e)
        {
        	if(e.keycode == nexacro.Event.KEY_ENTER){
        		this.btn_search_onclick(this.Div.form.sub_search.form.btn_search);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ad18m00_onload,this);
            this.Div.form.sub_search.form.Static00_01.addEventHandler("onclick",this.Div_sub_search_Static00_01_onclick,this);
            this.Div.form.sub_search.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div.form.sub_search.form.in_edt_text.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.sub_search.form.in_cb_depository.addEventHandler("onitemchanged",this.Div_sub_search_in_cb_depository_onitemchanged,this);
            this.Div.form.sub_search.form.in_rdo_00.addEventHandler("onitemclick",this.Div_sub_search_in_rdo_00_onitemclick,this);
            this.Div.form.sub_search.form.in_rdo_00.addEventHandler("onitemchanged",this.Div_sub_search_in_rdo_00_onitemchanged,this);
            this.Div.form.sub_search.form.in_rdo_01.addEventHandler("onitemclick",this.Div_sub_search_in_rdo_01_onitemclick,this);
            this.Div.form.btn_newreg.addEventHandler("onclick",this.Div_btn_newreg_onclick,this);
            this.Div.form.grd_00.addEventHandler("oncelldblclick",this.Div_grd_00_oncelldblclick,this);
        };

        this.loadIncludeScript("ad18m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
