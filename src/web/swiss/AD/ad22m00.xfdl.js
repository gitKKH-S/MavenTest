(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ad22m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("15px/normal \"SpoqaHanSans-Regular\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,1210);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_sys", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_page", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_use_yn", this);
            obj._setContents("<ColumnInfo><Column id=\"code_id\" type=\"STRING\" size=\"256\"/><Column id=\"code_nm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code_id\">Y</Col><Col id=\"code_nm\">사용</Col></Row><Row><Col id=\"code_id\">N</Col><Col id=\"code_nm\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_display_yn", this);
            obj._setContents("<ColumnInfo><Column id=\"code_id\" type=\"STRING\" size=\"256\"/><Column id=\"code_nm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code_id\">Y</Col><Col id=\"code_nm\">전시</Col></Row><Row><Col id=\"code_id\">N</Col><Col id=\"code_nm\">미전시</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_menu", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sub_menu", this);
            obj.getSetter("binddataset").set("ds_sub_menu");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"TOPMENUID\" type=\"STRING\" size=\"256\"/><Column id=\"MENULEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENUID\" type=\"STRING\" size=\"256\"/><Column id=\"MENUNM\" type=\"STRING\" size=\"256\"/><Column id=\"PAGEID\" type=\"STRING\" size=\"256\"/><Column id=\"PAGENM\" type=\"STRING\" size=\"256\"/><Column id=\"MENUORDER\" type=\"STRING\" size=\"256\"/><Column id=\"UPMENUID\" type=\"STRING\" size=\"256\"/><Column id=\"USEYN\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAYYN\" type=\"STRING\" size=\"256\"/><Column id=\"PAGEID\" type=\"STRING\" size=\"256\"/><Column id=\"PAGENM\" type=\"STRING\" size=\"256\"/><Column id=\"PAGEURL\" type=\"STRING\" size=\"256\"/><Column id=\"CSSCLASSNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sub_cnt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","1205",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Div("sub_title_wrap","30","20","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            this.Div.addChild(obj.name, obj);

            obj = new Static("sub_title","0","0","120","32",null,null,null,null,null,null,this.Div.form.sub_title_wrap.form);
            obj.set_taborder("0");
            obj.set_text("메뉴관리");
            obj.set_cssclass(" title_t2");
            this.Div.form.sub_title_wrap.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","20",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","1200",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","1200",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("grd_menu","30","60","1200","325",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_binddataset("ds_menu");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.set_cssclass("treeArea");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"1200\"/></Columns><Rows><Row size=\"0\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell/></Band><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" text=\"BIND:MENUNM\" treelevel=\"BIND:MENULEVEL\" treestartlevel=\"-2\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("grd_sub_menu","30","grd_menu:20","1200","330",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_scrollbartype("auto auto");
            obj.set_binddataset("ds_sub_menu");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"170\"/><Column size=\"245\"/><Column size=\"180\"/><Column size=\"245\"/><Column size=\"180\"/><Column size=\"180\"/></Columns><Rows><Row size=\"45\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"메뉴 ID\"/><Cell col=\"1\" text=\"메뉴명\"/><Cell col=\"2\" text=\"페이지 ID\"/><Cell col=\"3\" text=\"페이지명\"/><Cell col=\"4\" text=\"메뉴레벨\"/><Cell col=\"5\" text=\"메뉴순번\" border=\"0px none,0px none,1px solid #a5a5a5\"/></Band><Band id=\"body\"><Cell text=\"bind:MENUID\" cssclass=\"alignLeft\"/><Cell col=\"1\" text=\"bind:MENUNM\" cssclass=\"alignLeft\"/><Cell col=\"2\" text=\"bind:PAGEID\" cssclass=\"alignLeft\"/><Cell col=\"3\" text=\"bind:PAGENM\" cssclass=\"alignLeft\"/><Cell col=\"4\" text=\"bind:MENULEVEL\" cssclass=\"alignLeft\"/><Cell col=\"5\" text=\"bind:MENUORDER\" border=\"0px none,0px none,1px solid #a5a5a5\" cssclass=\"alignLeft\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Div("rowGrid","30","grd_sub_menu:20","1200","280",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_cssclass("rowGrid");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","155","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("6");
            obj.set_text("메뉴명");
            obj.set_cssclass("boxTitle");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","61","155","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("7");
            obj.set_text("메뉴ID");
            obj.set_cssclass("boxTitle");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_01","400","0","155","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("8");
            obj.set_text("메뉴레벨");
            obj.set_cssclass("boxTitle");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","400","61","155","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("9");
            obj.set_text("시스템ID");
            obj.set_cssclass("boxTitle");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02","155","0","246","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("10");
            obj.set_cssclass("boxDesc");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","155","61","246","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("11");
            obj.set_cssclass("boxDesc");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Edit("edt_menu_nm","165","12","224","40",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("0");
            obj.set_accessibilitylabel("메뉴명");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Edit("edt_menu_id","165","71","224","40",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_readonly("true");
            obj.set_taborder("3");
            obj.set_accessibilitylabel("메뉴ID");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02_02","555","0","246","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("12");
            obj.set_cssclass("boxDesc");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_01","555","61","246","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("13");
            obj.set_cssclass("boxDesc");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Edit("edt_menu_level","565","12","224","40",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("1");
            obj.set_accessibilitylabel("메뉴레벨");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Edit("edt_top_menu_id","565","71","224","40",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("4");
            obj.set_accessibilitylabel("메뉴순서");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","801","0","155","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("14");
            obj.set_text("사용여부");
            obj.set_cssclass("boxTitle");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","801","61","155","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("15");
            obj.set_text("메뉴순번");
            obj.set_cssclass("boxTitle");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_00","956","0","243","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("16");
            obj.set_cssclass("boxDesc");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_01_00","956","61","243","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("17");
            obj.set_cssclass("boxDesc");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Combo("cmb_use_yn","965","12","224","40",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_innerdataset("ds_use_yn");
            obj.set_datacolumn("code_nm");
            obj.set_codecolumn("code_id");
            obj.set_displaynulltext("선택");
            obj.set_taborder("2");
            obj.set_accessibilitylabel("사용여부");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Spin("sp_menu_sb","965","71","224","40",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("5");
            obj.set_accessibilitylabel("페이지 ID");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","0","123","155","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("18");
            obj.set_text("페이지명");
            obj.set_cssclass("boxTitle");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_01","400","123","155","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("19");
            obj.set_text("페이지ID");
            obj.set_cssclass("boxTitle");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_02","155","123","246","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("20");
            obj.set_cssclass("boxDesc");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Edit("edt_page_nm","165","133","224","40",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("21");
            obj.set_accessibilitylabel("메뉴ID");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_01_01","555","123","246","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("22");
            obj.set_cssclass("boxDesc");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Edit("edt_page_id","565","133","224","40",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("23");
            obj.set_accessibilitylabel("메뉴순서");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00","801","123","155","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("24");
            obj.set_text("페이지 URL");
            obj.set_cssclass("boxTitle");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_01_00_00","956","123","243","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("25");
            obj.set_cssclass("boxDesc");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Edit("page_url","965","133","224","40",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("26");
            obj.set_accessibilitylabel("페이지 ID");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","0","184","155","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("27");
            obj.set_text("표출여부");
            obj.set_cssclass("boxTitle");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_01_00","400","184","155","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("28");
            obj.set_text("CSS ID");
            obj.set_cssclass("boxTitle");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_02_00","155","184","246","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("29");
            obj.set_cssclass("boxDesc");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Combo("cmb_dispaly_yn","165","194","224","40",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_innerdataset("ds_display_yn");
            obj.set_datacolumn("code_nm");
            obj.set_codecolumn("code_id");
            obj.set_displaynulltext("선택");
            obj.set_taborder("30");
            obj.set_accessibilitylabel("메뉴ID");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_01_01_00","555","184","625","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("31");
            obj.set_cssclass("boxDesc");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Edit("menu_css","565","194","224","40",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("32");
            obj.set_accessibilitylabel("메뉴순서");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_01_00_00_00","801","184","398","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("33");
            obj.set_cssclass("boxDesc");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("label_00","808","197","293","33",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("34");
            obj.set_text("  ( FP:03  , GP:02 , AG:04  , 그외 01 )");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Div("btnArea","30","rowGrid:10","1202","140",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            this.Div.addChild(obj.name, obj);

            obj = new Button("Button00","440","1","100","30",null,null,null,null,null,null,this.Div.form.btnArea.form);
            obj.set_taborder("0");
            obj.set_text("추가");
            obj.set_cssclass("btn_sty01");
            this.Div.form.btnArea.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","Button00:20","1","100","30",null,null,null,null,null,null,this.Div.form.btnArea.form);
            obj.set_taborder("9");
            obj.set_text("저장");
            obj.set_cssclass("btn_sty01");
            this.Div.form.btnArea.addChild(obj.name, obj);

            obj = new Button("Button00_00","Button00_00_00:20","1","100","30",null,null,null,null,null,null,this.Div.form.btnArea.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_sty01");
            this.Div.form.btnArea.addChild(obj.name, obj);

            obj = new Edit("add_flag","884","4","64","32",null,null,null,null,null,null,this.Div.form.btnArea.form);
            obj.set_taborder("3");
            obj.set_visible("false");
            this.Div.form.btnArea.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,1210,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div.form.rowGrid.form.edt_menu_nm","value","ds_sub_menu","MENUNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div.form.rowGrid.form.cmb_use_yn","value","ds_sub_menu","USEYN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div.form.rowGrid.form.edt_top_menu_id","value","ds_sub_menu","TOPMENUID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div.form.rowGrid.form.edt_page_nm","value","ds_sub_menu","PAGENM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div.form.rowGrid.form.edt_menu_level","value","ds_sub_menu","MENULEVEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div.form.rowGrid.form.edt_menu_id","value","ds_sub_menu","MENUID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div.form.rowGrid.form.sp_menu_sb","value","ds_sub_menu","MENUORDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div.form.rowGrid.form.edt_page_id","value","ds_sub_menu","PAGEID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Div.form.rowGrid.form.page_id","value","ds_sub_menu","PAGEID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","Div.form.rowGrid.form.page_nm","value","ds_sub_menu","PAGENM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","Div.form.rowGrid.form.page_url","value","ds_sub_menu","PAGEURL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div.form.rowGrid.form.cmb_dispaly_yn","value","ds_sub_menu","DISPLAYYN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","Div.form.rowGrid.form.menu_css","value","ds_sub_menu","CSSCLASSNO");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ad22m00.xfdl","CM::common.xjs");
        this.registerScript("ad22m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;


        var flag_key = "";
        var flag_menu_level = -1;

        this.fv_MENUNM = "관리자>시스템관리>메뉴관리";

        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		this.setAccessLog("", "AG", this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceID == "selectSystemId"){
        			//this.selectPage();
        		}

        		if(serviceID == "saveMenu"){
        			alert("저장되었습니다.");
        			this.setBefPos();
        		}

        		if(serviceID == "deleteMenu"){
        			alert("삭제되었습니다.");
        			this.setBefPos();
        		}

        		if(serviceID == "selectAllMenu"){
        			this.selectSubMenu();
        		}

         	}
        }

        this.ad22m00_onload = function(obj,e)
        {
        	//this.selectSystemId();

        	this.selectAllMenu();

        	//this.selectPage();  // 페이지 설명 불필요....
        };

        this.selectSystemId = function(){

        	this.gfnTransaction("selectSystemId",
        						"swiss/cmm/selectSystemId.do",
        						"",
        						"ds_sys=dsResult",
        						"",
        						"fnCallback",
        						false);
        	this.cmb_system.set_index(0);
        }

        this.selectAllMenu = function(){

        	this.gfnTransaction("selectAllMenu",
        						"/swiss/ad/menu/selectAllMenu.do",
        						"",
        						"ds_menu=dsResult",
        						"",
        						"fnCallback",
        						false);
        }


        this.selectSubMenu = function(){

        	//alert("111");
        	this.Div.form.btnArea.form.add_flag.set_value("0");

        	var strParam = "";
        	strParam += "TOPMENUID="	+ this.ds_menu.getColumn(this.ds_menu.rowposition,"TOPMENUID") + "ª";
        	strParam += "MENUID=" 		+ this.ds_menu.getColumn(this.ds_menu.rowposition,"MENUID") + "ª";
        	strParam += "MENULEVEL=" 	+ this.ds_menu.getColumn(this.ds_menu.rowposition,"MENULEVEL") + "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.gfnTransaction("selectSubMenu",
        						"/swiss/ad/menu/selectSubMenu.do",
        						"dsSearch=dsSearch",
        						"ds_sub_menu=dsResult",
        						"",
        						"fnCallback",
        						false);
        }


        // ds_sub_menu  메뉴 출력
        this.grd_menu_oncellclick = function(obj,e)
        {
        	if(e.clickitem != "treeitembutton"){
        		this.selectSubMenu();
        	}
        };

        // 메뉴 추가
        this.btn_add_onclick = function(obj,e)
        {
        	if( this.Div.form.btnArea.form.add_flag.value == "1"){
        		return;
        	}
        	this.Div.form.btnArea.form.add_flag.set_value("1");

        	var m_id = "";
        	var m_level = nexacro.toNumber(this.ds_menu.getColumn(this.ds_menu.rowposition,"MENULEVEL")) + 1;
        	var m_top_menu_id = this.ds_menu.getColumn(this.ds_menu.rowposition,"TOPMENUID");
        	var m_up_menu_id = this.ds_menu.getColumn(this.ds_menu.rowposition,"MENUID");
        	var m_seq = "1";

        	if(this.ds_menu.getColumn(this.ds_menu.rowposition,"MENULEVEL") == -1){
        		m_top_menu_id = "";
        	}

        	//alert(this.ds_sub_menu.rowcount);
        	if(this.ds_sub_menu.rowcount > 0){

        		var crn_id = this.ds_sub_menu.getColumn(this.ds_sub_menu.rowcount-1,"MENUID");
        		var n_id = crn_id.substr(0,crn_id.length-2);
        		//alert(n_id);
        		var l_id ="";
        		var last2="";
        		/*
        		var n_id = crn_id.substr(0,crn_id.length-2);
        		var l_id = crn_id.substr(crn_id.length-2, crn_id.length);
        		*/
        		//m_id = n_id + (nexacro.toNumber(l_id) + 10);
        		if(this.ds_sub_menu.rowcount==1){
        			m_id = crn_id + "-01";
        		}else{
        			l_id = crn_id.substr(crn_id.length-2, crn_id.length);
        			last2 =  "" +( eval(l_id) + 1);
        			//alert("길이: "+ last2.length);
        			if(last2.length ==1){
        				last2 = "0"+ last2;
        			}


        			m_id = n_id + last2;
        		}


        		m_seq = nexacro.toNumber(this.ds_sub_menu.getColumn(this.ds_sub_menu.rowcount-1,"MENUORDER"))+1;
        	}else{
        		//m_id = this.ds_menu.getColumn(this.ds_menu.rowposition,"MENUID") + "10";
        		m_id = "m";
        		m_seq = "1";
        		m_level = -1;
        		m_top_menu_id="MM"
        	}

        	this.ds_sub_menu.addRow();
        	var ds_row = this.ds_sub_menu.rowcount - 1;

        	this.ds_sub_menu.setColumn(ds_row, "TOPMENUID", m_top_menu_id);
        	this.ds_sub_menu.setColumn(ds_row, "MENUID", m_id);
        	this.ds_sub_menu.setColumn(ds_row, "MENUNM", null);
        	this.ds_sub_menu.setColumn(ds_row, "MENULEVEL", m_level);
        	this.ds_sub_menu.setColumn(ds_row, "UPMENUID", m_up_menu_id);
        	this.ds_sub_menu.setColumn(ds_row, "PAGEID", null);
        	this.ds_sub_menu.setColumn(ds_row, "PAGENM", null);
        	this.ds_sub_menu.setColumn(ds_row, "USEYN", "Y");
        	this.ds_sub_menu.setColumn(ds_row, "UPDATEMAN", nexacro.getApplication().g_update_man);
        	this.ds_sub_menu.setColumn(ds_row, "MENUORDER", m_seq);

        };


        this.btn_save_onclick = function(obj,e)
        {

        	for(var i=0; i<this.ds_sub_menu.rowcount; i++){
        		if(this.ds_sub_menu.getColumn(i,"MENUNM") == null || this.ds_sub_menu.getColumn(i,"MENUNM") == ""){
        			alert("메뉴명을 입력하세요.");
        			this.Div.form.rowGride.form.edt_menu_nm.setFocus();
        			return;
        		}

        		if(this.ds_sub_menu.getColumn(i,"MENULEVEL") == null || this.ds_sub_menu.getColumn(i,"MENULEVEL") == ""){
        			alert("메뉴레벨을 입력하세요.");
        			this.Div.form.rowGride.form.edt_menu_level.setFocus();
        			return;
        		}

        		if(this.ds_sub_menu.getColumn(i,"USEYN") == null || this.ds_sub_menu.getColumn(i,"USEYN") == ""){
        			alert("사용여부를 선택하세요.");
        			this.Div.form.rowGride.form.cmb_use_yn.setFocus();
        			this.Div.form.rowGride.form.cmb_use_yn.dropdown();
        			return;
        		}
        		/*
        		if(this.ds_sub_menu.getColumn(i,"MENUID") == null || this.ds_sub_menu.getColumn(i,"MENUID") == ""){
        			alert("메뉴ID를 입력하세요.");
        			this.edt_menu_id.setFocus();
        			return;
        		}
        		*/

        		if(this.ds_sub_menu.getColumn(i,"TOPMENUID") == null || this.ds_sub_menu.getColumn(i,"TOPMENUID") == ""){
        			alert("시스템ID를 입력하세요.");
        			this.edt_top_menu_id.setFocus();
        			return;
        		}

        		if(this.ds_sub_menu.getColumn(i,"MENUORDER") == null || this.ds_sub_menu.getColumn(i,"MENUORDER") == ""){
        			alert("메뉴순번을 입력하세요.");
        			this.Div.form.rowGride.form.sp_menu_sb.setFocus();
        			return;
        		}
        		/*
        		if(this.ds_sub_menu.getColumn(i,"PAGEID") == null || this.ds_sub_menu.getColumn(i,"PAGEID") == ""){
        			alert("페이지ID를 입력하세요.");
        			this.sp_menu_sb.setFocus();
        			return;
        		}
        		if(this.ds_sub_menu.getColumn(i,"PAGEURL") == null || this.ds_sub_menu.getColumn(i,"PAGEURL") == ""){
        			alert("페이지URL을 입력하세요.");
        			this.sp_menu_sb.setFocus();
        			return;
        		}
        		*/

        		if(this.ds_sub_menu.getColumn(i,"DISPLAYYN") == null || this.ds_sub_menu.getColumn(i,"DISPLAYYN") == ""){
        			alert("표출여부를 선택하세요.");
        			this.Div.form.rowGride.form.cmb_display_yn.setFocus();
        			this.Div.form.rowGride.form.cmb_display_yn.dropdown();
        			return;
        		}

        		//RowType 4: 수정된ROW
        		if(this.ds_sub_menu.getRowType(i) == 4){
        			this.ds_sub_menu.setColumn(i,"UPDATEMAN",nexacro.getApplication().g_update_man);
        		}
        	}

        	if(!this.confirm("저장하시겠습니까?")){
        		return;
        	}

        	var strParam = "";
        	strParam += "menuId="		+ 'm00000' 		+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);


        	flag_key = this.ds_menu.getColumn(this.ds_menu.rowposition,"KEY");
        	flag_menu_level = this.ds_menu.getColumn(this.ds_menu.rowposition,"MENULEVEL");
        	this.setAccessLog("", "AG", this.fv_MENUNM, "저장", strParam);  //접속기록
        	this.gfnTransaction("saveMenu",
        						"/swiss/ad/menu/saveMenu.do",
        						"dsSearch=ds_sub_menu:U dsSearch2=dsSearch",
        						"",
        						"",
        						"fnCallback",
        						false);
        };



        this.btn_del_onclick = function(obj,e)
        {
        	if(!this.confirm("선택된 행을 삭제하시겠습니까?")){
        		return;
        	}

        	if(this.ds_sub_menu.getRowType(this.ds_sub_menu.rowposition) == 2){
        		this.ds_sub_menu.deleteRow(this.ds_sub_menu.rowposition);
        		alert("삭제되었습니다.");
        		return;
        	}

        	var strParam = "";
        	strParam += "TOPMENUID="	+ this.ds_sub_menu.getColumn(this.ds_sub_menu.rowposition,"TOPMENUID") + "ª";
        	strParam += "MENUID=" 		+ this.ds_sub_menu.getColumn(this.ds_sub_menu.rowposition,"MENUID") 	+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.gfnTransaction("selectSubMenuCnt",
        						"/swiss/ad/menu/selectSubMenuCnt.do",
        						"dsSearch=dsSearch",
        						"ds_sub_cnt=dsResult",
        						"",
        						"fnCallback",
        						false);

        	if(this.ds_sub_cnt.getColumn(0,"SUBCNT") > 0){
        		alert("하위메뉴가 있어 삭제할 수 없습니다.");
        		return;
        	}

        	flag_key = this.ds_menu.getColumn(this.ds_menu.rowposition,"KEY");
        	flag_menu_level = this.ds_menu.getColumn(this.ds_menu.rowposition,"MENULEVEL");

        	var strParam = "";
        	strParam += "TOPMENUID="	+ this.ds_sub_menu.getColumn(this.ds_sub_menu.rowposition, "TOPMENUID") + "ª";
        	strParam += "MENUID=" 		+ this.ds_sub_menu.getColumn(this.ds_sub_menu.rowposition, "MENUID") + "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.setAccessLog("", "AG", this.fv_MENUNM, "삭제", strParam);  //접속기록
        	this.gfnTransaction("deleteMenu",
        						"/swiss/ad/menu/deleteMenu.do",
        						"dsSearch=dsSearch",
        						"",
        						"",
        						"fnCallback",
        						false);
        };



        this.Static11_onclick = function(obj,e)
        {

        };


        // 그리드 리프레시 ...
        this.setBefPos = function(){
        	this.selectAllMenu();

        	var flag_row = this.ds_menu.findRow("KEY",flag_key);
        	this.ds_menu.set_rowposition(flag_row);
        	this.selectSubMenu();

        	if(flag_menu_level == -1){
        		var flag_system = this.cmb_system.value;
        		this.selectSystemId();
        		this.cmb_system.set_value(flag_system);
        	}

        	flag_key = "";
        	flag_menu_level = -1;
        }










        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ad22m00_onload,this);
            this.Div.form.grd_menu.addEventHandler("oncellclick",this.grd_menu_oncellclick,this);
            this.Div.form.btnArea.form.Button00.addEventHandler("onclick",this.btn_add_onclick,this);
            this.Div.form.btnArea.form.Button00_00_00.addEventHandler("onclick",this.btn_save_onclick,this);
            this.Div.form.btnArea.form.Button00_00.addEventHandler("onclick",this.btn_del_onclick,this);
            this.ds_sys.addEventHandler("canrowposchange",this.ds_sys_canrowposchange,this);
            this.ds_sub_menu.addEventHandler("canrowposchange",this.ds_sub_menu_canrowposchange,this);
        };

        this.loadIncludeScript("ad22m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
