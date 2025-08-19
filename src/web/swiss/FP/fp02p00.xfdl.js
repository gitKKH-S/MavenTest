(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("fp03p00");
            this.set_titletext("전산담당자공유");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("normal 700 36px/normal \"맑은 고딕\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(980,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_charegelist", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","980","562",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","50",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","560",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","950","0","30","560",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static02","30","50","559","28",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_text("전산담당자 공유");
            obj.set_cssclass("title_t2");
            obj.set_visible("false");
            obj.set_font("18px/normal \"SpoqaHanSans-Bold\"");
            this.Div.addChild(obj.name, obj);

            obj = new Div("Div00","30","90","920","2",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_background("#000000");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_req","360","510","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_text("공유하기");
            obj.set_cssclass("btn_sty01");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_close","530","510","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_text("닫기");
            obj.set_cssclass("btn_sty01");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00_00_00_00","50","109","89","23",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_text("전산담당자명");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Edit("sel_user_nm","162","105","210","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("8");
            obj.set_accessibilitylabel("이름");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00_00_00_00_00","400","109","239","23",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("9");
            obj.set_text("(성명은 정확히 입력 해 주세요.)");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00_00_00_00_01","50","159","89","23",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("10");
            obj.set_text("전산담당자ID");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Edit("sel_user_id","162","155","210","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("11");
            obj.set_accessibilitylabel("이름");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00_00_00_00_00_00","400","159","239","23",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("12");
            obj.set_text("(ID를 정확히 입력 해 주세요.)");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_search","670","130","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("13");
            obj.set_text("검색");
            obj.set_cssclass("btn_sty01");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("gd_main","50","240","880","250",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("14");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_charegelist");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"547\"/><Column size=\"100\"/><Column size=\"200\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"학교명\"/><Cell col=\"1\" text=\"본분교\"/><Cell col=\"2\" text=\"전산담당자명\"/></Band><Band id=\"body\"><Cell text=\"bind:SCHNM\"/><Cell col=\"1\" text=\"bind:ORGNM\"/><Cell col=\"2\" text=\"bind:USERNM\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00_00_00_00_00_00_00","60","210","102","23",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("15");
            obj.set_text("적용학교  : ");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static_schnm","180","Static00_01_01_00_00_00_00_00_00_00_00:-23","620","23",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("16");
            obj.set_text("학교명");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",980,570,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("fp02p00.xfdl", function() {

        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "";

        this.fv_SCHCD = "";
        this.fv_ORGCD = "";
        this.fv_MENUNM = "";
        this.fnCallback = function(serviceID, errCD, errMSG){

        	var objApp 		= nexacro.getApplication();
        	if(errCD < 0){
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceID == "setPubCharg"){

        			var resultVal = objApp.gds_rtn_result.getColumn(0, "RESULTVAL");
        			if( resultVal =="Y"){
        				this.alert("등록되었습니다.");
        				this.opener.fn_saveResult("ok","2");
        			}else{
        				this.alert("오류.");
        			}

        			this.close();

        		}
        		if(serviceID == "getDayNight"){

        		}

        		if(serviceID == "selectPubCharege"){
        			if(this.ds_charegelist.rowcount <= 0){
        				alert("검색된 자료가 없습니다.");
        			}
        		}

         	}
        }

        this.fp03p00_onload = function(obj,e)
        {

        	var SCHCD           = this.parent.param1; // 학교코드
        	var ORGCD           = this.parent.param2; // 본분교
        	var SURVSEQ         = this.parent.SURVSEQ;
        	var SURVKINDCD      = this.parent.SURVKINDCD;
        	var MENUNM          = this.parent.MENUNM;
        	var SCHNM           = this.parent.SCHNM;
        	var ORGNM           = this.parent.ORGNM;
        	var SCHNMstr        = SCHNM + "(" + ORGNM + ")";

        	this.fv_SCHCD       = SCHCD;
        	this.fv_ORGCD       = ORGCD;
        	this.fv_SURVSEQ     = SURVSEQ;
        	this.fv_SURVKINDCD  = SURVKINDCD;
        	this.fv_MENUNM      = MENUNM + ">전산담당자 공유";
        	this.Div.form.Static_schnm.set_text(SCHNMstr);



        };

        this.selectPubCharege = function(obj,e)
        {

        	if( this.Div.form.sel_user_nm.value == null || this.Div.form.sel_user_nm.value == ""){
        		alert("전산담당자명을 입력하세요.");
        		return;
        	}
        	if( this.Div.form.sel_user_id.value == null || this.Div.form.sel_user_id.value == ""){
        		alert("전산담당자아이디를 입력하세요.");
        		return;
        	}



        	var strParam = "";
        	strParam += "tmp="		+ "a" 		+ "ª";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ  	+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";

        	strParam += "sel_user_nm="	+ this.Div.form.sel_user_nm.value	+ "ª";
        	strParam += "sel_user_id="	+ this.Div.form.sel_user_id.value	+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "검색", strParam);  //전산담당자 검색
        	this.gfnTransaction("selectPubCharege",
        						"/swiss/fp/baserel/selectPubCharege.do",
        						"dsSearch=dsSearch",
        						"ds_charegelist=dsResult",
        						"",
        						"fnCallback",
        						false);
        };


        this.btn_req_onclick = function(obj,e)
        {

        	var USERID = this.ds_charegelist.getColumn(this.ds_charegelist.rowposition,"USERID");

        	if( USERID == null || USERID ==""){
        		this.alert("등록된 전산담당자를 검색 후 선택해주세요. ");
        		return;
        	}


        	if(!this.confirm("현재 학교에 선택한 전산 담당자를 등록하겠습니까?")){
        		return;
        	}

        	var strParam = "";
        	strParam    += "tmp="		    + "a" 		        + "ª";
        	strParam    += "SCHCD="		    + this.fv_SCHCD		+ "ª";
        	strParam    += "ORGCD="		    + this.fv_ORGCD		+ "ª";
        	strParam    += "USERID="		+ USERID		    + "ª";
        	strParam    += "USERGRPTYPE="   + "5"		        + "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "공유하기", strParam);  //전산담당자 공유하기
        	this.gfnTransaction("setPubCharg",
        						"/swiss/fp/baserel/setPubCharg.do",
        						"dsSearch=dsSearch",
        						"gds_rtn_result=dsResult",
        						"",
        						"fnCallback",
        						false);
        };



        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        this.searchEnter = function(obj,e)
        {
        	if(e.keycode == nexacro.Event.KEY_ENTER){
        		this.selectPubCharege(this.Div.form.btn_search);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fp03p00_onload,this);
            this.Div.form.btn_req.addEventHandler("onclick",this.btn_req_onclick,this);
            this.Div.form.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.Div.form.sel_user_nm.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.Static00_01_01_00_00_00_00_00_00.addEventHandler("onclick",this.Div_sub_search_Static00_01_01_00_00_00_00_00_00_onclick,this);
            this.Div.form.sel_user_id.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.Static00_01_01_00_00_00_00_00_00_00.addEventHandler("onclick",this.Div_sub_search_Static00_01_01_00_00_00_00_00_00_onclick,this);
            this.Div.form.btn_search.addEventHandler("onclick",this.selectPubCharege,this);
            this.Div.form.gd_main.addEventHandler("onheadclick",this.Div_gd_main_onheadclick,this);
            this.Div.form.Static00_01_01_00_00_00_00_00_00_00_00.addEventHandler("onclick",this.Div_sub_search_Static00_01_01_00_00_00_00_00_00_onclick,this);
            this.Div.form.Static_schnm.addEventHandler("onclick",this.Div_sub_search_Static00_01_01_00_00_00_00_00_00_onclick,this);
        };

        this.loadIncludeScript("fp02p00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
