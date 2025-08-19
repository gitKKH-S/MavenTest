(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("hp11m01");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("15px/normal \"SpoqaHanSans-Regular\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_myinfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","480",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","480",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","480",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Div("rowGrid","30","70","1200","240",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_cssclass("rowGrid");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","155","51",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("0");
            obj.set_text("사용자구분");
            obj.set_cssclass("boxTitleBlue");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","51","155","51",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("1");
            obj.set_text("사용자명");
            obj.set_cssclass("boxTitleBlue");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02","155","0","425","51",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("2");
            obj.set_cssclass("boxDesc");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","580","0","155","51",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("3");
            obj.set_text("사용자ID");
            obj.set_cssclass("boxTitleBlue");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_00","735","0","465","51",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("4");
            obj.set_cssclass("boxDesc");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02_02","155","51","425","51",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("5");
            obj.set_cssclass("boxDesc");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00","580","51","155","51",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("6");
            obj.set_text("이메일주소");
            obj.set_cssclass("boxTitleBlue");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_00_00","735","51","465","51",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("7");
            obj.set_cssclass("boxDesc");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("groupTyp","172","14","268","22",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("8");
            obj.set_text("구분");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("userId","993","14","197","22",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("9");
            obj.set_text("ID");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("email","753","65","208","22",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("10");
            obj.set_text("EMAIL");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static01_01_01_00","172","166","362","22",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("11");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","0","102","155","51",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("12");
            obj.set_text("전화번호");
            obj.set_cssclass("boxTitleBlue");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_01","155","102","425","51",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("13");
            obj.set_cssclass("boxDesc");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00","580","102","155","51",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("14");
            obj.set_text("휴대폰번호");
            obj.set_cssclass("boxTitleBlue");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_00_00_00","735","102","465","51",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("15");
            obj.set_cssclass("boxDesc");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Div("btnArea","30","345","1202","50",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            this.Div.addChild(obj.name, obj);

            obj = new Button("Button00","513","1","122","40",null,null,null,null,null,null,this.Div.form.btnArea.form);
            obj.set_taborder("0");
            obj.set_text("정보수정");
            obj.set_cssclass("btn_sty01");
            this.Div.form.btnArea.addChild(obj.name, obj);

            obj = new Button("btn_pub","933","1","122","40",null,null,null,null,null,null,this.Div.form.btnArea.form);
            obj.set_taborder("1");
            obj.set_text("화면공유");
            obj.set_cssclass("btn_sty01");
            obj.set_visible("false");
            this.Div.form.btnArea.addChild(obj.name, obj);

            obj = new Button("btn_res","1063","1","122","40",null,null,null,null,null,null,this.Div.form.btnArea.form);
            obj.set_taborder("2");
            obj.set_text("내화면 원복");
            obj.set_cssclass("btn_sty01");
            obj.set_visible("false");
            this.Div.form.btnArea.addChild(obj.name, obj);

            obj = new Button("ButtonAccount","23","1","122","40",null,null,null,null,null,null,this.Div.form.btnArea.form);
            obj.set_taborder("3");
            obj.set_text("계정관리");
            obj.set_cssclass("btn_sty01");
            obj.set_visible("true");
            obj.set_enable("true");
            this.Div.form.btnArea.addChild(obj.name, obj);

            obj = new Static("Static02","30","5","270","45",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_text("내정보수정");
            obj.set_font("24px/normal \"SpoqaHanSans-Bold\"");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","30","226","155","51",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("비밀번호 변경");
            obj.set_cssclass("boxTitleBlue");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_02","185","226","425","51",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("boxDesc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00","610","226","155","51",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("boxTitleBlue");
            obj.set_text("부서명");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_00_00","765","226","465","51",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("boxDesc");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.addChild(obj.name, obj);

            obj = new Button("pwd_pop","303","235","177","29",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("비밀번호 변경");
            obj.set_cssclass("btn_sty01");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("TELNO","196","179","244","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Edit("USERNM","197","128","243","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Edit("MOBILENO","776","179","234","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Edit("USERID","776","79","234","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Edit("DEPTNM","776","231","234","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,480,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div.form.rowGrid.form.edt_menu_nm","value","ds_myinfo","USERID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div.form.rowGrid.form.cmb_use_yn","value","ds_myinfo","USERGRPTYPESTR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div.form.rowGrid.form.edt_top_menu_id","value","ds_myinfo","USERNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div.form.rowGrid.form.edt_page_nm","value","ds_myinfo","TELNO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div.form.rowGrid.form.edt_menu_level","value","ds_myinfo","MOBILENO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div.form.rowGrid.form.edt_menu_id","value","ds_myinfo","EMAILADDR");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("hp11m00.xfdl","CM::common.xjs");
        this.registerScript("hp11m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;

        //기본변수세팅
        this.fv_USERID = "";
        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "";
        this.fv_CHANGEYN = "";
        this.fv_USERGRPTYPE =  "";
        //페이징
        this.pageRowCnt = 30;
        this.totalRowCnt = 0;
        this.pageFirst = true;

        this.fv_MENUNM = "마이페이지";

        this.fnCallback = function(serviceID, errCD, errMSG){

        	var objApp 		= nexacro.getApplication();
        	if(errCD < 0){
        		this.setAccessLog("", "AG", this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{

        		if(serviceID == "getMyInfo"){

        			var USERID = this.ds_myinfo.getColumn(0, "USERID");
        			var USERGRPTYPESTR = this.ds_myinfo.getColumn(0, "USERGRPTYPESTR");
        			var USERNM = this.ds_myinfo.getColumn(0, "USERNM");
        			var TELNO = this.ds_myinfo.getColumn(0, "TELNO");
        			var DEPTNM = this.ds_myinfo.getColumn(0, "DEPTNM");
        			var MOBILENO = this.ds_myinfo.getColumn(0, "MOBILENO");
        			var EMAILADDR = this.ds_myinfo.getColumn(0, "EMAILADDR");

        			this.Div.form.rowGrid.form.groupTyp.set_text(USERGRPTYPESTR);
        			this.Div.form.rowGrid.form.userId.set_text(USERID);
        			this.Div.form.rowGrid.form.email.set_text(EMAILADDR);

        			this.USERID.set_value(USERID);
        			this.USERNM.set_value(USERNM);
        			this.TELNO.set_value(TELNO);
        			this.DEPTNM.set_value(DEPTNM);
        			this.MOBILENO.set_value(MOBILENO);


        		}
        		if(serviceID == "updateMyinfo"){
        			if( objApp.gds_rtn_result.getColumn(0, "RESULTVAL") =="Y"){

        				if(this.fv_USERID != this.USERID.value){
        					this.alert("ID가 변경되었습니다.");
        					window.location.href=nexacro.getEnvironment().services["svcBaseUrl"].url;  // 메인으로 던짐
        				}else{
        					this.alert("수정되었습니다.");
        				}

        			}
        			if( objApp.gds_rtn_result.getColumn(0, "RESULTVAL") =="DUP"){
        				this.alert("중복된 ID가 존재 합니다.");
        			}
        			if( objApp.gds_rtn_result.getColumn(0, "RESULTVAL") =="N"){
        				this.alert("수정이 정상적으로 이루어 지지 않았습니다. !!");
        			}
        		}
        		if(serviceID == "restoreCharege"){

        			var resultVal = objApp.gds_rtn_result.getColumn(0, "RESULTVAL");

        			if( resultVal =="Y"){
        				this.alert("화면이 복원되었습니다.");
        				window.location.href=nexacro.getEnvironment().services["svcBaseUrl"].url+"swiss/index.html?linkType=MY";
        			}
        			if( resultVal =="AN"){
        				this.alert("권한이 없습니다.");
        			}
        			if( resultVal =="SN"){
        				this.alert("전환 실패 했습니다.");
        			}

        		}
         	}
        }

        this.hp11m01_onload = function(obj,e)
        {
        	var objApp 		= nexacro.getApplication();
        	this.fv_USERID = objApp.gds_login_info.getColumn(0, "USERID") ;
        	this.fv_SURVSEQ = objApp.gds_login_info.getColumn(0, "SURVSEQ");
        	this.fv_SURVKINDCD = objApp.gds_login_info.getColumn(0, "SURVKINDCD");
        	this.fv_CHANGEYN = objApp.gds_login_info.getColumn(0, "CHANGEYN");
        	this.fv_USERGRPTYPE = objApp.gds_login_info.getColumn(0, "USERGRPTYPE");

        	this.getMyInfo();

        	if( this.fv_USERGRPTYPE =="2" || this.fv_USERGRPTYPE =="8" ){
        		this.Div.form.btnArea.form.btn_pub.set_visible(true) ;
        	}

        	if( this.fv_USERGRPTYPE =="6"){
        		//this.Div.form.btnArea.form.set_enable(false) ;
        	}

        	if( this.fv_CHANGEYN =="Y"){
        		this.Div.form.btnArea.form.btn_res.set_visible(true);

        		this.pwd_pop.set_enable(false);
        		this.Div.form.btnArea.form.Button00.set_enable(false);

        	}

        	//alert(this.fv_USERGRPTYPE);
        	if(this.fv_USERGRPTYPE == "6"){
        		this.pwd_pop.set_visible(true);
        	}

        	if(this.fv_USERGRPTYPE == "1" || this.fv_USERGRPTYPE == "2" || this.fv_USERGRPTYPE == "4")
        	{
        		this.Div.form.btnArea.form.ButtonAccount.set_visible(true);
        	}else{
        		this.Div.form.btnArea.form.ButtonAccount.set_visible(false);
        	}

        	//this.Div.form.btnArea.form.ButtonAccount.set_visible(false);

        };

        // 내정 가져오기
        this.getMyInfo = function(){

        	var strParam = "";
        	strParam += "tmp="		+ "a" 		+ "ª";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD	+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.gfnTransaction("getMyInfo",
        						"/swiss/hp/my/getMyInfo.do",
        						"dsSearch=dsSearch",
        						"ds_myinfo=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        this.btn_update_onclick = function(obj,e)
        {
        		var objFrame = new ChildFrame();
        		var arr = new Array();
        		//arr["SCHCDORGCD"] = this.Div.form.sub_search.form.sel_schooNm.value;
        		arr["SCHCDORGCD"] =["", ""];


        		var objChildFrame = new ChildFrame();
        		objChildFrame.init("chf_popup1"
        						  , 0
        						  , 0
        						  , 750
        						  , 550
        						  , null
        						  , null
        						  , "HP::hp11p00.xfdl");

        		objChildFrame.set_dragmovetype("all");
        		objChildFrame.set_openalign("center middle");
        		objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)")

        		var objParam = {param1:"", param2:""};
        		objChildFrame.showModal(this.getOwnerFrame()
        							  , objParam
        							  , this
        							  , "fn_popupCallback");
        };

        // 저장
        this.btn_save_onclick = function(obj,e)
        {
        	if(this.USERNM.value == null || this.USERNM.value == ""){
        		alert("성명을 입력하세요.");
        		this.USERNM.setFocus();
        		return;
        	}

        	if(this.TELNO.value == null || this.TELNO.value == ""){
        		alert("전화번호를 입력하세요.");
        		this.TELNO.setFocus();
        		return;
        	}

        	if(this.MOBILENO.value == null || this.MOBILENO.value == ""){
        		alert("휴대폰번호를 입력하세요.");
        		this.MOBILENO.setFocus();
        		return;
        	}

        	var regExp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
        	if(!regExp.test( this.MOBILENO.value  )) {
        		this.alert("핸드폰 형식이 올바르지 않습니다.");
        		return;
        	}

        	if(this.DEPTNM.value == null || this.DEPTNM.value == ""){
        		alert("부서명을 입력해주세요.\r\n입력하신 부서명은 우편물 전달시 배송지 주소로 사용됩니다.");
        		//this.DEPTNM.setFocus();
        		//return;
        	}

        	if(this.fv_USERID != this.USERID.value ){
        		if(!this.confirm(" ID 변경시 메일주소도 동일하게 변경됩니다. \n  ID를 변경 하겠습니까?")){
        			return;
        		}
        	}else{
        		if(!this.confirm("수정하시겠습니까?")){
        			return;
        		}
        	}


        	//alert(this.opener.cmb_select_survseq.value);
        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";  // 공통 세션 데이터셋에 있는 정보 가져오기
        	strParam += "SURVKINDCD="		+ this.fv_SURVKINDCD		+ "ª";	// 공통 세션 데이터셋에 있는 정보 가져오기
        	strParam += "USERNM="		+ this.USERNM.value		+ "ª";
        	strParam += "TELNO="		+ this.TELNO.value		+ "ª";
        	strParam += "DEPTNM="		+ this.DEPTNM.value		+ "ª";
        	strParam += "MOBILENO="		+ this.MOBILENO.value		+ "ª";
        	strParam += "USERID="		+ this.USERID.value.trim()		+ "ª";
        	//strParam += "USERID="		+ trim(this.USERID.value)		+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "정보수정", strParam);  //접속기록
        	this.gfnTransaction("updateMyinfo",
        						"/swiss/hp/my/updateMyinfo.do",
        						"dsSearch=dsSearch",
        						"gds_rtn_result=dsResult",
        						"",
        						"fnCallback",
        						false);

        };
        //원복하기
        this.btn_restore_onclick = function(obj,e)
        {
        	if(!this.confirm("화면을 복원 하겠습니까?")){
        		return;
        	}

        	//alert(this.opener.cmb_select_survseq.value);
        	var strParam = "";
        	strParam += "tmp="		+ "" 		+ "ª";  // 공통 세션 데이터셋에 있는 정보 가져오기
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "내화면 원복", strParam);  //접속기록
        	this.gfnTransaction("restoreCharege",
        						"/swiss/ad/system/restoreCharege.do",
        						"dsSearch=dsSearch",
        						"gds_rtn_result=dsResult",
        						"",
        						"fnCallback",
        						false);

        };

        this.btn_change_onclick = function(obj,e)
        {
        	this.fn_goPage("AD::ad25m00.xfdl");
        	//this.fn_initPage("AD::ad25m00.xfdl");  //-- 페이지 이동
        };


        this.btn_account_onclick = function(obj,e)
        {
        		var naviTitText = "내정보" + " > " + " 계정추가";
        	__gnb_navi.form.top_navi_tit.set_text(naviTitText);

        	this.fn_goPage("AD::ad37m00.xfdl");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.hp11m01_onload,this);
            this.Div.form.btnArea.form.Button00.addEventHandler("onclick",this.btn_save_onclick,this);
            this.Div.form.btnArea.form.btn_pub.addEventHandler("onclick",this.btn_change_onclick,this);
            this.Div.form.btnArea.form.btn_res.addEventHandler("onclick",this.btn_restore_onclick,this);
            this.Div.form.btnArea.form.ButtonAccount.addEventHandler("onclick",this.btn_account_onclick,this);
            this.pwd_pop.addEventHandler("onclick",this.btn_update_onclick,this);
        };

        this.loadIncludeScript("hp11m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
