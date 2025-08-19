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
            obj = new Grid("grd_school_list","25","160","589",null,null,"80",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsSchool");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_usesoftkeyboard("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"100\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"사용자구분\" border=\"0px none,1px solid #a5a5a5,1px solid #a5a5a5,0px none\"/><Cell col=\"1\" text=\"학교코드\"/><Cell col=\"2\" text=\"본/분교\"/><Cell col=\"3\" text=\"이름\"/></Band><Band id=\"body\"><Cell text=\"bind:USRGRPNM\"/><Cell col=\"1\" text=\"BIND:SCHCD\"/><Cell col=\"2\" text=\"BIND:ORGCD\"/><Cell col=\"3\" text=\"bind:USRNM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("sub_search","25","21","589","89",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_00");
            obj.set_cssclass("divFormR");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"10","80","68","143",null,null,null,null,null,this.sub_search.form);
            obj.set_taborder("0");
            obj.set_text("추가");
            obj.set_cssclass("btn_sty08");
            this.sub_search.addChild(obj.name, obj);

            obj = new Edit("add_usrnm","14","8","160","30",null,null,null,null,null,null,this.sub_search.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("담당자명");
            this.sub_search.addChild(obj.name, obj);

            obj = new Combo("add_usrgrpnm","add_usrnm:10","8","160","30",null,null,null,null,null,null,this.sub_search.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsSurvey");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_displaynulltext("사용자구분");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.sub_search.addChild(obj.name, obj);

            obj = new Edit("add_email","14","add_usrnm:10","160","30",null,null,null,null,null,null,this.sub_search.form);
            obj.set_taborder("3");
            obj.set_displaynulltext("이메일");
            this.sub_search.addChild(obj.name, obj);

            obj = new Edit("add_telno","add_email:10","add_usrnm:10","160","30",null,null,null,null,null,null,this.sub_search.form);
            obj.set_taborder("4");
            obj.set_displaynulltext("전화번호");
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

            obj = new Static("basicMsg",null,"130","584",null,"26","450",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("state_result");
            obj.set_font("normal 16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_visible("true");
            obj.set_text("1234");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",640,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CMSchoolCallUser.xfdl", function() {
        //기본변수세팅
        this.fv_USERID = "";
        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "";
        this.fv_MENUNM = "";

        this.SCHCD = "";
        this.SCHNM = "";
        this.ORGCD = "";
        this.ORGNM = "";
        this.USRGRPNM = "";

        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceID == "selectSchoolList"){
        			//this.totalRowCnt = this.dsPage.getColumn(0, "TOTALPAGECNT");
        			//if(this.pageFirst)this.paggingInit();
        		}
        	}
        }

        this.CMSchoolCallUser_onload = function(obj,e)
        {
        	var objApp 		= nexacro.getApplication();
        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='AG'",0);
        	this.fv_USERID = objApp.gds_login_info.getColumn(idx, "USERID") ;
        	this.fv_SURVSEQ = objApp.gds_login_info.getColumn(idx, "SURVSEQ");
        	this.fv_SURVKINDCD = objApp.gds_login_info.getColumn(idx, "SURVKINDCD");
        	var MENUNM         = this.opener.fv_MENUNM;
        	//this.fv_MENUNM     = MENUNM + ">학교조회";
        	//this.selectSchoolList();

        	this.SCHCD = this.parent.SCHCD;
        	this.SCHNM  = this.parent.SCHNM;
        	this.ORGCD = this.parent.ORGCD;
        	this.ORGNM  = this.parent.ORGNM;
        	this.USRGRPNM  = this.parent.USRGRPNM;

        	//alert("s1="+this.SCHCD+", s2="+this.SCHNM+", s3="+this.ORGCD+", s4="+this.ORGNM+", UNIGRADENM="+this.UNIGRADENM);

        	this.basicMsg.set_text(this.SCHNM+" / "+this.ORGNM+"의 검색 결과입니다.");
        	this.selectUserListCall();
        };

        // 학교 목록
        this.selectUserListCall = function(){
        	this.pageFirst = true;
        	this.lfn_listPage(1);
        };

        this.lfn_listPage = function(sPage)
        {
        	var start = (sPage - 1) * this.pageRowCnt + 1;
        	var end = sPage * this.pageRowCnt;

        	var strParam = "";
        	strParam += "SCHCD="	+ this.SCHCD	+ "ª";
        	strParam += "ORGCD="	+ this.ORGCD	+ "ª";

        	//alert(1);

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "조회", strParam);  //학교조회
        	this.gfnTransaction("selectUserListCall",
        						"/swiss/cm/selectUserListCall.do",
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

        this.Div_sub_search_in_rdo_01_onitemclick = function(obj,e)
        {
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

        this.grd_usr_list_oncelldblclick = function(obj,e)
        {
        	var objParam = this.dsSchool.getColumn(this.dsSchool.rowposition,"USRGRP")
        				+","+this.dsSchool.getColumn(this.dsSchool.rowposition,"USRGRPNM")
        				+","+this.dsSchool.getColumn(this.dsSchool.rowposition,"EMAIL")
        				+","+this.dsSchool.getColumn(this.dsSchool.rowposition,"TELNO")
        				+","+this.dsSchool.getColumn(this.dsSchool.rowposition,"USRNM")
        				+","+this.SCHCD
        				+","+this.SCHNM
        				+","+this.ORGCD
        				+","+this.ORGNM
        				;
        	//alert(objParam);
        	this.close(objParam);// 창닫기
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CMSchoolCallUser_onload,this);
            this.grd_school_list.addEventHandler("oncelldblclick",this.grd_usr_list_oncelldblclick,this);
            this.sub_search.form.btn_search00.addEventHandler("onclick",this.selectSchoolListCall,this);
            this.sub_search.form.add_usrnm.addEventHandler("onkeyup",this.searchEnter,this);
            this.sub_search.form.add_email.addEventHandler("onkeyup",this.searchEnter,this);
            this.sub_search.form.add_telno.addEventHandler("onkeyup",this.searchEnter,this);
            this.btn_00.addEventHandler("onclick",this.div_00_btn_00_onclick,this);
        };

        this.loadIncludeScript("CMSchoolCallUser.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
