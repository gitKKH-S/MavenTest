(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMSchool");
            this.set_titletext("학교검색");
            if (Form == this.constructor)
            {
                this._setFormPosition(640,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchool", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SCHKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"UNIGRADENM\" type=\"STRING\" size=\"256\"/><Column id=\"RNUM\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_school_list","25","95","589",null,null,"110",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsSchool");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_usesoftkeyboard("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"번호\" border=\"0px none,1px solid #a5a5a5,1px solid #a5a5a5,0px none\"/><Cell col=\"1\" text=\"학제명\" border=\"0px none,1px solid #a5a5a5,1px solid #a5a5a5,0px none\"/><Cell col=\"2\" text=\"학교명\" border=\"0px none,1px solid #a5a5a5,1px solid #a5a5a5,0px none\"/><Cell col=\"3\" text=\"본분교\" border=\"0px none,1px solid #a5a5a5,1px solid #a5a5a5,0px none\"/><Cell col=\"4\" text=\"구분\" border=\"0px none,1px solid #a5a5a5,1px solid #a5a5a5,0px none\"/><Cell col=\"5\" text=\"학교코드\"/><Cell col=\"6\" text=\"본/분교\"/></Band><Band id=\"body\"><Cell text=\"bind:RNUM\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:SCHKINDNM\"/><Cell col=\"2\" text=\"BIND:SCHNM\"/><Cell col=\"3\" text=\"bind:ORGNM\"/><Cell col=\"4\" text=\"bind:UNIGRADENM\" border=\"0px none,1px solid #a5a5a5,1px solid #a5a5a5,0px none\"/><Cell col=\"5\" text=\"BIND:SCHCD\"/><Cell col=\"6\" text=\"BIND:ORGCD\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("sub_search","25","21","589","59",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_00");
            obj.set_cssclass("divFormR");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"17","80","26","10",null,null,null,null,null,this.sub_search.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("cls_btn_search");
            this.sub_search.addChild(obj.name, obj);

            obj = new Edit("edt_schcd","102","17","134","26",null,null,null,null,null,null,this.sub_search.form);
            obj.set_taborder("1");
            this.sub_search.addChild(obj.name, obj);

            obj = new Edit("edt_schnm","332","17","154","26",null,null,null,null,null,null,this.sub_search.form);
            obj.set_taborder("2");
            this.sub_search.addChild(obj.name, obj);

            obj = new Radio("in_rdo_00","12","10","87","36",null,null,null,null,null,null,this.sub_search.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var sub_search_form_in_rdo_00_innerdataset = new nexacro.NormalDataset("sub_search_form_in_rdo_00_innerdataset", obj);
            sub_search_form_in_rdo_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">학교코드</Col></Row></Rows>");
            obj.set_innerdataset(sub_search_form_in_rdo_00_innerdataset);
            obj.set_text("");
            obj.set_value("입고년도");
            obj.set_index("-1");
            this.sub_search.addChild(obj.name, obj);

            obj = new Radio("in_rdo_01","252","10","77","36",null,null,null,null,null,null,this.sub_search.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var sub_search_form_in_rdo_01_innerdataset = new nexacro.NormalDataset("sub_search_form_in_rdo_01_innerdataset", obj);
            sub_search_form_in_rdo_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">학교명</Col></Row></Rows>");
            obj.set_innerdataset(sub_search_form_in_rdo_01_innerdataset);
            obj.set_text("학교명");
            obj.set_value("1");
            obj.set_index("0");
            this.sub_search.addChild(obj.name, obj);

            obj = new Button("btn_00","270","544","84","33",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Div("Div","30","484","600","61",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Div("pagingWrap","10","6","590","50",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_pagging","40","1","530","40",null,null,null,null,null,null,this.Div.form.pagingWrap.form);
            obj.set_taborder("0");
            obj.set_text("div_00");
            obj.set_url("CM::CmPagging.xfdl");
            this.Div.form.pagingWrap.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",640,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CM::CmPagging.xfdl");
        };
        
        // User Script
        this.registerScript("CMSchool.xfdl", function() {
        //기본변수세팅
        this.fv_USERID = "";
        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "";
        this.fv_MENUNM = "";
        //페이징
        this.pageRowCnt = 30;
        this.totalRowCnt = 0;
        this.pageFirst = true;

        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceID == "selectSchoolList"){
        			this.totalRowCnt = this.dsPage.getColumn(0, "TOTALPAGECNT");
        			if(this.pageFirst)this.paggingInit();
        		}
        	}
        }
        this.CMSchool_onload = function(obj,e)
        {
        	var objApp 		= nexacro.getApplication();
        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='AG'",0);
        	this.fv_USERID = objApp.gds_login_info.getColumn(idx, "USERID") ;
        	this.fv_SURVSEQ = objApp.gds_login_info.getColumn(idx, "SURVSEQ");
        	this.fv_SURVKINDCD = objApp.gds_login_info.getColumn(idx, "SURVKINDCD");
        	var MENUNM         = this.opener.fv_MENUNM;
        	this.fv_MENUNM     = MENUNM + ">학교조회";
        	this.selectSchoolList();
        };

        // 학교 목록
        this.selectSchoolList = function(){
        	this.pageFirst = true;
        	this.lfn_listPage(1);
        };

        this.lfn_listPage = function(sPage)
        {
        	var start = (sPage - 1) * this.pageRowCnt + 1;
        	var end = sPage * this.pageRowCnt;
        	var strParam = "";
        	strParam += "START=" + start + "ª";
        	strParam += "END=" + end + "ª";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD	+ "ª";
        	if(this.sub_search.form.in_rdo_00.value=="1"){
        		strParam += "SCHCD="	+ this.sub_search.form.edt_schcd.value	+ "ª";
        	}
        	if(this.sub_search.form.in_rdo_01.value=="1"){
        		strParam += "SCHNM="	+ this.sub_search.form.edt_schnm.value	+ "ª";
        	}
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "조회", strParam);  //학교조회
        	this.gfnTransaction("selectSchoolList",
        						"/swiss/cm/selectSchoolList.do",
        						"dsSearch=dsSearch",
        						"dsSchool=dsResult dsPage=dsPage",
        						"",
        						"fnCallback",
        						false);

        }

        // 페이지 초기화 함수
        this.paggingInit = function(){
        	this.Div.form.pagingWrap.form.div_pagging.form.initPages(this.totalRowCnt, this.pageRowCnt); // 전체DATA CNT, 페이지출력수
        	this.Div.form.pagingWrap.form.div_pagging.form.setPage(1);
        }

        // 페이징 완료후 처리
        this.setPageAfter = function (nPage){
        	if(!this.pageFirst)this.lfn_listPage(nPage);
        	this.pageFirst = false;
        }

        // 그리드 셀  클릭시 이벤트
        this.grd_school_list_oncelldblclick = function(obj,e)
        {
        	var objParam = this.dsSchool.getColumn(this.dsSchool.rowposition,"SCHCD")
        				+","+this.dsSchool.getColumn(this.dsSchool.rowposition,"SCHNM")
        				+","+this.dsSchool.getColumn(this.dsSchool.rowposition,"ORGCD")
        				+","+this.dsSchool.getColumn(this.dsSchool.rowposition,"ORGNM")
        				+","+this.dsSchool.getColumn(this.dsSchool.rowposition,"UNIGRADENM")
        				;
        	this.close(objParam);// 창닫기

        };

        this.Div_sub_search_in_rdo_00_onitemclick = function(obj,e)
        {
        	this.sub_search.form.in_rdo_00.set_value("1");
        	this.sub_search.form.in_rdo_01.set_value("");

        };

        this.Div_sub_search_in_rdo_01_onitemclick = function(obj,e)
        {
        	this.sub_search.form.in_rdo_00.set_value("");
        	this.sub_search.form.in_rdo_01.set_value("1");
        };

        this.div_00_btn_00_onclick = function(obj,e)
        {
        	this.close();
        };

        this.searchEnter = function(obj,e)
        {
        	if(e.keycode == nexacro.Event.KEY_ENTER){
        		this.pageFirst = true;
        		this.lfn_listPage(1);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CMSchool_onload,this);
            this.grd_school_list.addEventHandler("oncelldblclick",this.grd_school_list_oncelldblclick,this);
            this.sub_search.form.btn_search00.addEventHandler("onclick",this.selectSchoolList,this);
            this.sub_search.form.edt_schcd.addEventHandler("onkeyup",this.searchEnter,this);
            this.sub_search.form.edt_schnm.addEventHandler("onkeyup",this.searchEnter,this);
            this.sub_search.form.in_rdo_00.addEventHandler("onitemclick",this.Div_sub_search_in_rdo_00_onitemclick,this);
            this.sub_search.form.in_rdo_01.addEventHandler("onitemclick",this.Div_sub_search_in_rdo_01_onitemclick,this);
            this.btn_00.addEventHandler("onclick",this.div_00_btn_00_onclick,this);
        };

        this.loadIncludeScript("CMSchool.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
