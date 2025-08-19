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
            
            // UI Components Initialize
            obj = new Grid("grd_school_list","25","95","589",null,null,"80",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsSchool");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_usesoftkeyboard("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"60\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"학교명\" border=\"0px none,1px solid #a5a5a5,1px solid #a5a5a5,0px none\"/><Cell col=\"1\" text=\"본분교명\" border=\"0px none,1px solid #a5a5a5,1px solid #a5a5a5,0px none\"/><Cell col=\"2\" text=\"학교코드\"/><Cell col=\"3\" text=\"본/분교\"/></Band><Band id=\"body\"><Cell text=\"BIND:SCHNM\"/><Cell col=\"1\" text=\"bind:ORGNM\"/><Cell col=\"2\" text=\"BIND:SCHCD\"/><Cell col=\"3\" text=\"BIND:ORGCD\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("sub_search","25","21","589","59",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_00");
            obj.set_cssclass("divFormR");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"17","80","26","250",null,null,null,null,null,this.sub_search.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("cls_btn_search");
            this.sub_search.addChild(obj.name, obj);

            obj = new Edit("edt_schnm","92","17","154","26",null,null,null,null,null,null,this.sub_search.form);
            obj.set_taborder("1");
            this.sub_search.addChild(obj.name, obj);

            obj = new Radio("in_rdo_01","12","10","77","36",null,null,null,null,null,null,this.sub_search.form);
            obj.set_taborder("2");
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
        this.registerScript("CMCallModifySchool.xfdl", function() {
        //기본변수세팅
        this.fv_USERID = "";
        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "";
        this.fv_MENUNM = "";

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
        this.CMSchoolCall_onload = function(obj,e)
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
        this.selectSchoolListCall = function(){
        	this.lfn_listPage(1);
        };

        this.lfn_listPage = function(sPage)
        {
        	var start = (sPage - 1) * this.pageRowCnt + 1;
        	var end = sPage * this.pageRowCnt;
        	var strParam = "";

        	if(this.sub_search.form.in_rdo_01.value=="1"){
        		strParam += "SCHNM="	+ this.sub_search.form.edt_schnm.value	+ "ª";
        	}

        	//alert(1);

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "조회", strParam);  //학교조회
        	this.gfnTransaction("selectSchoolListCall",
        						"/swiss/cm/selectSchoolListCall.do",
        						"dsSearch=dsSearch",
        						"dsSchool=dsResult dsPage=dsPage",
        						"",
        						"fnCallback",
        						false);

        }

        // 그리드 셀  클릭시 이벤트
        this.grd_school_list_oncelldblclick = function(obj,e)
        {
        	/*
        	var objParam = this.dsSchool.getColumn(this.dsSchool.rowposition,"SCHCD")
        				+","+this.dsSchool.getColumn(this.dsSchool.rowposition,"SCHNM")
        				+","+this.dsSchool.getColumn(this.dsSchool.rowposition,"ORGCD")
        				+","+this.dsSchool.getColumn(this.dsSchool.rowposition,"ORGNM")
        				+","+this.dsSchool.getColumn(this.dsSchool.rowposition,"UNIGRADENM")
        				;
        	this.close(objParam);// 창닫기
        	*/
        /*
        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("wrt_popup2"
        	                  , 0
        					  , 0
        					  , 0
        					  , 0
        					  , null
        					  , null
        					  , "CM::CMCallModifyUser.xfdl");
        	objChildFrame.set_showtitlebar(false);
        	objChildFrame.set_dragmovetype("all");
        	objChildFrame.set_openalign("center middle");
        	objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)")

        	var objParam = {param3:'I'};

        	objChildFrame.showModal(this.getOwnerFrame()
        	                      , objParam
        						  , this
        						  , "fn_popupCallback");
        */
        };

        this.fn_popupCallback = function(strPopupID, strReturn)
        {
        	if(strReturn == undefined){
        		return;
        	}else{
        		alert("strpopid="+strPopupID);
        	}

        	/*
        	if(strPopupID == "sch_popup"){
        		//this.alert("Return Value: " + strReturn);

        		var arr = strReturn.split(",");
        		//alert("학교명=["+arr[1]+"], 본분교명=["+arr[3]+"]");

        		this.Div.form.sub_search.form.in_schnm.set_value(arr[1]);
        		this.Div.form.sub_search.form.in_orgnm.set_value(arr[3]);
        	}
        	*/
        };

        this.div_00_btn_00_onclick = function(obj,e)
        {
        	this.close();
        };

        this.searchEnter = function(obj,e)
        {
        	if(e.keycode == nexacro.Event.KEY_ENTER){
        		this.lfn_listPage(1);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CMSchoolCall_onload,this);
            this.grd_school_list.addEventHandler("oncelldblclick",this.grd_school_list_oncelldblclick,this);
            this.sub_search.form.btn_search00.addEventHandler("onclick",this.selectSchoolListCall,this);
            this.sub_search.form.edt_schnm.addEventHandler("onkeyup",this.searchEnter,this);
            this.sub_search.form.in_rdo_01.addEventHandler("onitemclick",this.Div_sub_search_in_rdo_01_onitemclick,this);
            this.btn_00.addEventHandler("onclick",this.div_00_btn_00_onclick,this);
        };

        this.loadIncludeScript("CMCallModifySchool.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
