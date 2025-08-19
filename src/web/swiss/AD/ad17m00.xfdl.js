(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ad17m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("15px/normal \"SpoqaHanSans-Regular\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,860);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMain", this);
            obj._setContents("<ColumnInfo><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPOSITORY_NO\" type=\"STRING\" size=\"32\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIERID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPOSITORY_NM\" type=\"STRING\" size=\"32\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"MODDTHM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSave", this);
            obj._setContents("<ColumnInfo><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPOSITORY_NO\" type=\"STRING\" size=\"32\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIERID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPOSITORY_NM\" type=\"STRING\" size=\"32\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"MODDTHM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseyn", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"cdnm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"cdnm\">사용</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"cdnm\">비사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","855",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Div("sub_title_wrap","30","20","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            this.Div.addChild(obj.name, obj);

            obj = new Static("sub_title","0","0","370","32",null,null,null,null,null,null,this.Div.form.sub_title_wrap.form);
            obj.set_taborder("0");
            obj.set_text("문서 보관함 관리");
            obj.set_cssclass(" title_t2");
            this.Div.form.sub_title_wrap.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","20",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","850",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Div("sub_search","30","60","1200","74",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","30","20","80","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("0");
            obj.set_text("문서보관함");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_useyn","490","20","210","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("1");
            obj.set_accessibilitylabel("입고년도");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div_form_sub_search_form_in_cb_useyn_innerdataset = new nexacro.NormalDataset("Div_form_sub_search_form_in_cb_useyn_innerdataset", obj);
            Div_form_sub_search_form_in_cb_useyn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">비사용</Col></Row></Rows>");
            obj.set_innerdataset(Div_form_sub_search_form_in_cb_useyn_innerdataset);
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Button("btn_search","in_cb_useyn:108","20","100","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("2");
            obj.set_text("검색");
            obj.set_cssclass("btn_styLarge");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_00","416","20","64","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("3");
            obj.set_text("사용여부");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_edit_doc","Static00:10","20","210","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Button("btn_newreg","1130","sub_search:20","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_text("새 보관함");
            obj.set_cssclass("btn_sty05");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("grd_00","30","sub_search:20","818","659",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_binddataset("dsMain");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"371\"/><Column size=\"149\"/><Column size=\"149\"/><Column size=\"149\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"문서보관함\"/><Cell col=\"1\" text=\"등록자\"/><Cell col=\"2\" text=\"등록일\"/><Cell col=\"3\" text=\"사용여부\" border=\"0px none,0px none,1px solid #a5a5a5\"/></Band><Band id=\"body\" cssclass=\"alignLeft\"><Cell text=\"bind:DEPOSITORY_NM\"/><Cell col=\"1\" text=\"bind:REG_NM\"/><Cell col=\"2\" text=\"bind:WORKDTHM\"/><Cell col=\"3\" text=\"bind:USE_YN\" border=\"0px none,0px none,1px solid #a5a5a5\" displaytype=\"combotext\" combodataset=\"dsUseyn\" combocodecol=\"code\" combodatacol=\"cdnm\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_box00","890","btn_newreg:15","340","200",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_cssclass("sel_box");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","22","27","73","30",null,null,null,null,null,null,this.Div.form.div_box00.form);
            obj.set_taborder("0");
            obj.set_text("문서보관함");
            this.Div.form.div_box00.addChild(obj.name, obj);

            obj = new Static("Static00_00","22","89","73","30",null,null,null,null,null,null,this.Div.form.div_box00.form);
            obj.set_taborder("1");
            obj.set_text("사용여부");
            this.Div.form.div_box00.addChild(obj.name, obj);

            obj = new Edit("in_edit_doc","115","27","198","30",null,null,null,null,null,null,this.Div.form.div_box00.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.getSetter("validate").set("문서보관함,required:true");
            this.Div.form.div_box00.addChild(obj.name, obj);

            obj = new Combo("in_cb_useyn","116","89","198","30",null,null,null,null,null,null,this.Div.form.div_box00.form);
            obj.set_taborder("3");
            obj.set_accessibilitylabel("입고년도");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("validate").set("사용여부,required:true");
            var Div_form_div_box00_form_in_cb_useyn_innerdataset = new nexacro.NormalDataset("Div_form_div_box00_form_in_cb_useyn_innerdataset", obj);
            Div_form_div_box00_form_in_cb_useyn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">비사용</Col></Row></Rows>");
            obj.set_innerdataset(Div_form_div_box00_form_in_cb_useyn_innerdataset);
            obj.set_text("사용");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.div_box00.addChild(obj.name, obj);

            obj = new Button("btn_save","1012","div_box00:-55","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_text("저장");
            obj.set_cssclass("btn_sty09");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","850",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("8");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,860,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div.form.sub_search.form.in_edit_doc","value","dsSearch01","USERNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div.form.div_box00.form.in_edit_doc","value","dsMain","DEPOSITORY_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div.form.div_box00.form.in_cb_useyn","value","dsMain","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ad17m00.xfdl","CM::common.xjs");
        this.addIncludeScript("ad17m00.xfdl","CM::utl_script.xjs");
        this.registerScript("ad17m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;
        this.executeIncludeScript("CM::utl_script.xjs"); /*include "CM::utl_script.xjs"*/;

        //기본변수세팅
        this.fv_USERID = "";

        this.fv_MENUNM = "관리자>입고시스템>문서함관리";

        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		this.setAccessLog("", "AG", this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceID == "listDocDepository"){
        			if(this.dsMain.rowcount == 0) alert("조회된 자료가 없습니다.");
        			if(this.dsSave.rowcount>0){
        				var i = this.dsMain.findRow("DEPOSITORY_NM", this.dsSave.getColumn(0,"DEPOSITORY_NM"));
        				if(i < 0 ) i=0;
        				this.dsMain.set_rowposition(i);
        			}
        		}
        		if(serviceID == "mergeDocDepository"){
        			this.btn_search_onclick(this.Div.form.sub_search.form.btn_search);
        			alert("저장되었습니다.");
        		}
         	}
        }

        this.btn_search_onclick = function(obj,e)
        {
        	var strParam = "";
        	strParam += "DEPOSITORY_NM=" 	+ this.Div.form.sub_search.form.in_edit_doc.value	+ "ª";
        	strParam += "USE_YN="			+ this.Div.form.sub_search.form.in_cb_useyn.value	+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        //	trace(this.dsSearch.saveXML());
        	this.setAccessLog("", "AG", this.fv_MENUNM, "검색", strParam);  //접속기록
        	this.gfnTransaction("listDocDepository",
        						"/swiss/ad/docdepository/listDocDepository.do",
        						"dsSearch=dsSearch",
        						"dsMain=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        this.Div_btn_save_onclick = function(obj,e)
        {
        	if(!this.utlf_validate(this.Div.form.div_box00)) return;
        	this.dsSave.clearData();
        	var newRow = this.dsSave.addRow();
        	this.dsSave.copyRow(newRow, this.dsMain, this.dsMain.rowposition);
        	this.dsSave.setColumn(newRow,"WORKERID", this.fv_USERID);

        	//trace(this.dsSave.saveXML());
        	this.setAccessLog("", "AG", this.fv_MENUNM, "저장", "");  //접속기록
        	this.gfnTransaction("mergeDocDepository",
        						"/swiss/ad/docdepository/mergeDocDepository.do",
        						"dsSearch=dsSave",
        						"",
        						"",
        						"fnCallback",
        						false);
        };

        this.ad17m00_onload = function(obj,e)
        {
        	var objApp 		= nexacro.getApplication();
        	this.fv_USERID = objApp.gds_login_info.getColumn(0, "USERID") ;

        	this.btn_search_onclick(this.Div.form.sub_search.form.btn_search);
        };

        this.Div_btn_newreg_onclick = function(obj,e)
        {
        	for(var i=0; i < this.dsMain.rowcount; i++){
        		if(this.dsMain.getRowType( i )=="2"){
        			alert("저장되지 않은 데이터가 있습니다.");return;
        		}
        	}
        	this.dsMain.addRow();
        	//trace(this.dsMain.saveXML());
        };

        this.Div_grd_00_onselectchanged = function(obj,e)
        {	//trace(this.dsMain.saveXML());
        	if("2" == this.dsMain.getRowType(e.oldrow)){
        		alert("저장되지 않은 데이터가 있습니다.");
        		this.dsMain.set_rowposition(e.oldrow);
        	}
        	if("4" == this.dsMain.getRowType(e.oldrow)){
        		if(this.confirm("수정되지 않은 데이터가 있습니다. 계속 진행 하시겠습니까?")) return;
        		this.dsMain.set_rowposition(e.oldrow);
        	}
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
            this.addEventHandler("onload",this.ad17m00_onload,this);
            this.Div.form.sub_search.form.Static00.addEventHandler("onclick",this.Div_sub_search_Static00_onclick,this);
            this.Div.form.sub_search.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div.form.sub_search.form.in_edit_doc.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.btn_newreg.addEventHandler("onclick",this.Div_btn_newreg_onclick,this);
            this.Div.form.grd_00.addEventHandler("onselectchanged",this.Div_grd_00_onselectchanged,this);
            this.Div.form.div_box00.form.in_edit_doc.addEventHandler("onkeydown",this.Div_in_edit_00_onkeydown,this);
            this.Div.form.btn_save.addEventHandler("onclick",this.Div_btn_save_onclick,this);
        };

        this.loadIncludeScript("ad17m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
