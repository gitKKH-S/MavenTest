(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ad24m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("15px/normal \"SpoqaHanSans-Regular\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,1175);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_user_grp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_page", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch00", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sys", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_menu", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","1170",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Div("sub_title_wrap","30","20","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            this.Div.addChild(obj.name, obj);

            obj = new Static("sub_title","0","0","277","32",null,null,null,null,null,null,this.Div.form.sub_title_wrap.form);
            obj.set_taborder("0");
            obj.set_text("사용자 권한관리");
            obj.set_cssclass(" title_t2");
            this.Div.form.sub_title_wrap.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","20",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","1165",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","1165",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("grpNm","493","60","297","26",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("9");
            obj.set_text("그룹명");
            obj.set_font("normal 700 14pt/normal \"맑은 고딕\"");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("grd_usr_grp","60","grpNm:16","380","410",null,null,null,null,null,null,this.Div.form);
            obj.set_binddataset("ds_user_grp");
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_scrollbartype("auto auto");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"420\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"사용자 그룹\"/></Band><Band id=\"body\"><Cell text=\"bind:CDNM\" cssclass=\"alignLeft\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_save01","1050","60","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_text("설정");
            obj.set_cssclass("btn_sty01");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("grd_menu","490","btn_save01:12",null,"720","7.14%",null,null,null,null,null,this.Div.form);
            obj.set_taborder("8");
            obj.set_binddataset("ds_menu");
            obj.set_treeusecheckbox("false");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_cssclass("cls_grd_base01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"163\"/><Column size=\"45\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"메뉴명\"/><Cell col=\"1\" text=\"권한부여\"/></Band><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" text=\"BIND:MENUNM\" treelevel=\"BIND:MENULEVEL\" treestartlevel=\"-2\"/><Cell col=\"1\" edittype=\"checkbox\" text=\"BIND:KEY\" displaytype=\"checkboxcontrol\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_save02","1050","grd_menu:30","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_text("설정");
            obj.set_cssclass("btn_sty01");
            this.Div.addChild(obj.name, obj);

            obj = new Div("btnArea","30","1022","1202","140",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            this.Div.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,1175,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ad24m00.xfdl","CM::common.xjs");
        this.registerScript("ad24m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;


        var flag_key = "";
        var flag_menu_level = -1;

        //기본변수세팅
        this.fv_USERID = "";
        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "";

        this.fv_MENUNM = "관리자>시스템관리>사용자권한";

        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		this.setAccessLog("", "AG", this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceID == "selectUserGrpSearch"){
        			this.setGrpTitle();
        			this.selectUserGrpMenu();
        		}

        		if(serviceID == "saveUserGrpPageMenu"){
        			alert("저장되었습니다.");
        			this.setGrpTitle();
        			this.selectUserGrpMenu();
        		}
         	}
        }

        this.ad24m00_onload = function(obj,e)
        {
        	var objApp 		= nexacro.getApplication();

        	this.fv_USERID = objApp.gds_login_info.getColumn(0, "USERID") ;
        	this.fv_SURVSEQ = objApp.gds_login_info.getColumn(0, "SURVSEQ");
        	this.fv_SURVKINDCD = objApp.gds_login_info.getColumn(0, "SURVKINDCD");



        	this.selectUserGrpSearch();
        };

        // 그룹 정보 가져오기
        this.selectUserGrpSearch = function(){

        	//alert(111);
        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ		+ "ª";
        	strParam += "SURVKINDCD="		+ this.fv_SURVKINDCD		+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.setAccessLog("", "AG", this.fv_MENUNM, "권한조회", strParam);  //접속기록

        	this.gfnTransaction("selectUserGrpSearch",
        						"/swiss/ad/menu/selectUserGrpSearch.do",
        						"dsSearch=dsSearch",
        						"ds_user_grp=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        // 그룹 정보 가져오기
        this.setGrpTitle = function(){

        	var grpTitle = this.ds_user_grp.getColumn(this.ds_user_grp.rowposition,"CDNM") ;
        	this.Div.form.grpNm.set_text(grpTitle)  ;
        };

        // 그리드 셀  클릭시 이벤트
        this.grd_usr_grp_oncellclick = function(obj, e)
        {
        	this.setGrpTitle();
        	this.selectUserGrpMenu();

        }

        // 메뉴 정보 가져오기
        this.selectUserGrpMenu = function(){

        	var strParam = "";

        	strParam += "GROUPCD="		+ this.ds_user_grp.getColumn(this.ds_user_grp.rowposition,"CD") + "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.gfnTransaction("selectUserGrpMenu",
        						"/swiss/ad/menu/selectUserGrpMenu.do",
        						"dsSearch=dsSearch",
        						"ds_menu=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        //저장
        this.btn_save_onclick = function(obj,e)
        {
        	for(var i=0; i < this.ds_menu.rowcount; i++){
        		this.ds_menu.setColumn(i,"KEYSTR", this.ds_menu.getColumn(i,"KEY"));
        	}
        	//return;

        	if(!this.confirm("저장하시겠습니까?")){
        		return;
        	}

        	var strParam = "";
        	strParam += "GROUPCD="		+ this.ds_user_grp.getColumn(this.ds_user_grp.rowposition,"CD") + "ª";
        	dsParamSetArrowBlank(this.dsSearch00, strParam);

        	this.setAccessLog("", "AG", this.fv_MENUNM, "설정", strParam);  //접속기록

        	this.gfnTransaction("saveUserGrpPageMenu",
        						"/swiss/ad/menu/saveUserGrpPageMenu.do",
        						"dsSearch=ds_menu:A dsSearch00=dsSearch00",
        						"",
        						"",
        						"fnCallback",
        						false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ad24m00_onload,this);
            this.Div.form.sub_title_wrap.form.sub_title.addEventHandler("onclick",this.Div_sub_title_wrap_sub_title_onclick,this);
            this.Div.form.grpNm.addEventHandler("onclick",this.Div_Div00_Static00_03_onclick,this);
            this.Div.form.grd_usr_grp.addEventHandler("oncellclick",this.grd_usr_grp_oncellclick,this);
            this.Div.form.btn_save01.addEventHandler("onclick",this.btn_save_onclick,this);
            this.Div.form.btn_save02.addEventHandler("onclick",this.btn_save_onclick,this);
        };

        this.loadIncludeScript("ad24m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
