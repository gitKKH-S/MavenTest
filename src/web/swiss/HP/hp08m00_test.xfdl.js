(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("hp08m00");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,1270);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select_surv", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_ID\"/><Col id=\"CODE_NM\">조사기준일</Col></Row><Row><Col id=\"CODE_ID\">231231</Col><Col id=\"CODE_NM\">231231</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select_option", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_ID\"/><Col id=\"CODE_NM\">조사구분</Col></Row><Row><Col id=\"CODE_ID\">GP</Col><Col id=\"CODE_NM\">졸업생정보</Col></Row><Row><Col id=\"CODE_ID\">FP</Col><Col id=\"CODE_NM\">신편입생 </Col></Row><Row><Col id=\"CODE_ID\">AG</Col><Col id=\"CODE_NM\">졸업후 상황 </Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_kedi_user", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"USERGRPNM\" type=\"STRING\" size=\"256\"/><Column id=\"USERNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"MOBILENO\" type=\"STRING\" size=\"256\"/><Column id=\"FAXNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAILADDR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOGIN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_usergrp", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_NM\">사용자구분</Col><Col id=\"CODE_ID\"/></Row><Row><Col id=\"CODE_ID\">1</Col><Col id=\"CODE_NM\">MASTER 관리자</Col></Row><Row><Col id=\"CODE_ID\">2</Col><Col id=\"CODE_NM\">KEDI 관리자</Col></Row><Row><Col id=\"CODE_ID\">4</Col><Col id=\"CODE_NM\">취업담당자</Col></Row><Row><Col id=\"CODE_ID\">5</Col><Col id=\"CODE_NM\">전산담당자</Col></Row><Row><Col id=\"CODE_ID\">6</Col><Col id=\"CODE_NM\">학과담당자</Col></Row><Row><Col id=\"CODE_ID\">8</Col><Col id=\"CODE_NM\">콜센타사용자</Col></Row><Row><Col id=\"CODE_ID\">9</Col><Col id=\"CODE_NM\">임시사용자</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("gd_kedUser",null,"110","100.00%","90.00%","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_kedi_user");
            obj.set_cssclass("cls_grd_base01");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"22\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"사용자구분\" font=\"normal 10pt/normal &quot;Arial&quot;\"/><Cell col=\"1\" text=\"학교\" font=\"normal 10pt/normal &quot;Arial&quot;\"/><Cell col=\"2\" text=\"학과\" font=\"normal 10pt/normal &quot;Arial&quot;\"/><Cell col=\"3\" text=\"조사회차\" font=\"normal 10pt/normal &quot;Arial&quot;\"/><Cell col=\"4\" text=\"조사종류\" font=\"normal 10pt/normal &quot;Arial&quot;\"/><Cell col=\"5\" text=\"ID\" font=\"normal 10pt/normal &quot;Arial&quot;\"/><Cell col=\"6\" text=\"성명\" font=\"normal 10pt/normal &quot;Arial&quot;\"/></Band><Band id=\"body\"><Cell text=\"BIND:USERGRPNM\" textAlign=\"center\" font=\"normal 10pt/normal &quot;Arial&quot;\"/><Cell col=\"1\" text=\"BIND:SCHNM\" textAlign=\"center\" font=\"normal 10pt/normal &quot;Arial&quot;\"/><Cell col=\"2\" text=\"BIND:DEPTNM\" textAlign=\"center\" font=\"normal 10pt/normal &quot;Arial&quot;\"/><Cell col=\"3\" text=\"BIND:SURVSEQ\" textAlign=\"center\" font=\"normal 10pt/normal &quot;Arial&quot;\"/><Cell col=\"4\" text=\"BIND:SURVKINDCD\" textAlign=\"center\" font=\"normal 10pt/normal &quot;Arial&quot;\"/><Cell col=\"5\" text=\"BIND:USERID\" font=\"normal 10pt/normal &quot;Arial&quot;\"/><Cell col=\"6\" text=\"BIND:USERNM\" font=\"normal 10pt/normal &quot;Arial&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_chk",null,"1042","82","28","888",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("세션체크");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_move",null,"1042","82","28","578",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("페이지 이동");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00","760","1020","74","55",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("btn_00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_select_surv","15","57","215","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_codecolumn("CODE_ID");
            obj.set_datacolumn("CODE_NM");
            obj.set_cssclass("cls_cmb_base01");
            obj.set_innerdataset("ds_select_surv");
            obj.set_visible("true");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_select_option","242","57","215","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_codecolumn("CODE_ID");
            obj.set_datacolumn("CODE_NM");
            obj.set_cssclass("cls_cmb_base01");
            obj.set_innerdataset("ds_select_option");
            obj.set_visible("true");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sndMain",null,"900","171","60","929",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("홈 으로 이동");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sndMain00",null,"1042","82","28","698",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("epki 등록");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ch",null,"910","145","40","630",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("취업담당등록");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_user_id","469","19","204","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("cls_edt_base01");
            obj.set_displaynulltext("성명 / ID");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search00","700","19","87","64",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("조회");
            obj.set_cssclass("cls_btn_search");
            this.addChild(obj.name, obj);

            obj = new Button("btn_logout",null,"912","82","28","398",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("로그아웃");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sndMain01",null,"1100","171","60","420",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("nre 으로 이동");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_user_schnm","242","19","215","26",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("cls_edt_base01");
            obj.set_displaynulltext("학교명");
            this.addChild(obj.name, obj);

            obj = new Combo("edt_user_grptype","15","19","215","26",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_codecolumn("CODE_ID");
            obj.set_datacolumn("CODE_NM");
            obj.set_cssclass("cls_cmb_base01");
            obj.set_innerdataset("ds_usergrp");
            obj.set_visible("true");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,1270,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("hp08m00_test.xfdl","CM::common.xjs");
        this.registerScript("hp08m00_test.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;

        this.CLIENT_IPADDRESS;

        var objApp 		= nexacro.getApplication();
        this.fv_SURVSEQ = "";

        this.fnCallback = function(serviceID, errCD, errMSG){

        	if(errCD < 0){
        		if(serviceID == "setLoginInfo"){
        			alert("로그인 실패......");

        		}

        	}else{


        		if(serviceID == "setLoginInfo") {
        			var logInYn = this.dsResult.getColumn(0, "LOGIN_YN"); //로그인 여부
        			trace( this.dsResult.saveXML());  // 트레이스
        			//alert(this.dsResult.getColumn(0, "LOGIN_YN"));
        			//alert( this.dsResult.getRowCount() );


        			var objApp 		= nexacro.getApplication();
        			//alert(objApp.gds_login_info.getColumn(0, "LOGIN_YN"));
        			//this.objApp.gds_login_info.copyData(dsResult);

        			//alert( objApp.gds_login_info.getColumn(0, "LOGIN_YN") );
        			//alert( objApp.gds_login_info.getColumn(0, "SURVSEQ") );

        			if(objApp.gds_login_info.getColumn(0, "USERID") != null){
        				//alert("id :" + objApp.gds_login_info.getColumn(0, "USERID") );
        				//alert("로그인 되었습니다." );
        				window.location.href=nexacro.getEnvironment().services["svcBaseUrl"].url+"swiss/index.html?linkType=MY";
        			}

        			trace( objApp.gds_charge_school.saveXML());  // 트레이스

        			//alert( objApp.gds_charge_school.getRowCount() );
        			//alert( objApp.gds_charge_school.getColCount() );

        			for( var i = 0 ; i < objApp.gds_charge_school.getRowCount() ; i++){
        				//alert( "학교코드 :" + objApp.gds_charge_school.getColumn(i, "SCHCD") );
        			}

        			trace( objApp.gds_login_info.saveXML());  // 트레이스


        			//this.fn_initPage("FrameBase::Form_main.xfdl");  //-- 페이지 이동
        			//this.go("FrameBase::Form_main.xfdl");
        			if( objApp.gds_login_info.getColumn(0, "USERID") != undefined ){
        				//this.fn_initPage("FrameBase::Form_main.xfdl");  //-- 페이지 이동
        			}else{
        				alert("로그인 실패");
        			}


        			/*
        			var objApp = nexacro.getApplication();
        			//trace(objApp.gds_user_info.saveXML());
        			if(logInYn == "Y"){
        				objApp.alert("로그인이 완료되었습니다.");
        				objApp.mainframe.Frame.TopFrame.form.Form_Top_onload();
        				objApp.mainframe.Frame.TopFrame.form.LogInIcon.set_text("로그아웃");
        				this.close();
        			}else{
        				nexacro.getApplication().alert("아이디 혹은 비밀번호 입력이 잘못되었습니다.\n\n확인하시고 다시 입력하여 주시기 바랍니다.");
        				objApp.mainframe.Frame.TopFrame.form.LogInIcon.set_text("로그인");
        			}
        			*/
        		}
        		if(serviceID == "logOut") {
        			//alert(1);
        			var resultVal = objApp.gds_rtn_result.getColumn(0, "RESULTVAL");
        			alert(resultVal);
        			if( resultVal =="Y"){
        				this.fn_initPage("FrameBase::Form_main.xfdl");  //-- 페이지 이동
        			}else{
        				this.alert("로그인에 실패 했습니다.");
        			}
        		}
        		if(serviceID == "setLoginInfoGet") {
        			alert( objApp.gds_login_info.getColumn(0, "LOGIN_YN") );
        			alert( objApp.gds_login_info.getColumn(0, "USERID") );

        		}



         	}
        }

        this.label_00_onclick = function(obj,e)
        {

        };





        this.selectUserList = function(){

        	//alert(this.cmb_select_option.value);
        	//alert(this.edt_user_id.value);
        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.cmb_select_surv.value 		+ "ª";
        	strParam += "SURVKINDCD="		+ this.cmb_select_option.value 		+ "ª";
        	strParam += "edt_user_grptype="		+ this.edt_user_grptype.value 		+ "ª";
        	strParam += "edt_user_schnm="		+ this.edt_user_schnm.value 		+ "ª";
        	strParam += "edt_user_id="		+ this.edt_user_id.value 		+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	//alert("strParam="+strParam);
        	//return false;

        	this.gfnTransaction("selectKediUser",
        						"/swiss/ad/user/selectTempUserList.do",
        						"dsSearch=dsSearch",
        						"ds_kedi_user=dsResult",
        						"",
        						"fnCallback",
        						false);

        };



        this.cmb_system_onitemchanged = function(obj,e)
        {
        	//alert(this.cmb_select_option.value);

        	return;
        	/*
        	var strParam = "";
        	if(this.cmb_select_option.value == "GP"){
        		strParam += "SURVSEQ="		+ '211231' 		+ "ª";
        	}else{
        		strParam += "SURVSEQ="		+ '201231' 		+ "ª";
        	}

        	strParam += "SURVKINDCD="		+  this.cmb_select_option.value 	+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);


        	this.gfnTransaction("selectKediUser",
        						"/swiss/ad/user/selectTempUserList.do",
        						"dsSearch=dsSearch",
        						"ds_kedi_user=dsResult",
        						"",
        						"fnCallback",
        						false);

        	*/

        };


        // 그리드 셀  클릭시 이벤트
        this.gd_kedUser_oncellclick = function(obj, e)
        {
        	//alert(" row값 :" +  e.row.valueOf() );

        	var userId = this.gd_kedUser.getCellText(e.row.valueOf(), 5);
        	//alert("userId : " + userId);
        	var SURVSEQ = this.gd_kedUser.getCellText(e.row.valueOf(), 5);
        	//alert("SURVSEQ : " + SURVSEQ);
        	var SURVKINDCD = this.gd_kedUser.getCellText(e.row.valueOf(), 6);
        	//alert("SURVKINDCD : " + SURVKINDCD);
        	var USERSEQ = this.gd_kedUser.getCellText(e.row.valueOf(), 7);
        	//alert("USERSEQ : " + USERSEQ);
        	/*
        	if(e.cell ==2){
        		//alert("2번째 셀");
        	}*/

        	//setFormatColProperty(col 1, "size", 0); // 그리드 col 숨기기);
        	/*
        	if(this.cmb_select_surv.value == ""){
        	 this.alert("조사기준 선택 해 주세요.");
        	  return;
        	}
        	if(this.cmb_select_option.value == ""){
        	 this.alert("조사부류 선택 해 주세요.");
        	 return;
        	}	*/

        	var strParam = "";
        	strParam += "USERID="		+ userId 		+ "ª";
        	//strParam += "SURVSEQ="		+ '211231' 		+ "ª";  // 공통 세션 데이터셋에 있는 정보 가져오기
        	//strParam += "SURVKINDCD="		+ 'GP' 		+ "ª";	// 공통 세션 데이터셋에 있는 정보 가져오기

        	strParam += "SURVSEQ="		+ this.cmb_select_surv.value 		+ "ª";
        	strParam += "SURVKINDCD="		+  this.cmb_select_option.value 	+ "ª";

        	strParam += "USERSEQ="		+  USERSEQ 	+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.gfnTransaction("setLoginInfo",
        						"swiss/hp/login/setLoginInfo.do",
        						"dsSearch=dsSearch",
        						"dsResult=dsResult gds_login_info=dsLoginInfo gds_charge_school=dsChargeSchool",//"gds_login_info=dsResult",//"dsResult=dsResult gds_login_info=dsResult","dsResult=dsResult gds_login_info=dsResult gds_charge_school=schoolList"
        						"",
        						"fnCallback",
        						false);


        };


        // 세션 체크 -------------------- 삭제 할것...
        this.btn_chk_onclick = function(obj,e)
        {


        	var strParam = "";
        	strParam += "USERID="		+ "11" 		+ "ª";
        	//strParam += "SURVSEQ="		+ '211231' 		+ "ª";  // 공통 세션 데이터셋에 있는 정보 가져오기


        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.gfnTransaction("setLoginInfoGet",
        						"swiss/cm/getSessionChk.do",
        						"dsSearch=dsSearch",
        						"dsResult=dsResult gds_login_info=dsLoginInfo gds_charge_school=dsChargeSchool",//"gds_login_info=dsResult",//"dsResult=dsResult gds_login_info=dsResult","dsResult=dsResult gds_login_info=dsResult gds_charge_school=schoolList"
        						"",
        						"fnCallback",
        						false);




        	/*
        	var objApp 		= nexacro.getApplication();
        	alert("아이디 체크 " +  objApp.gds_login_info.getColumn(0, "USERID") );

        	var strParam = "";
        	strParam += "menuId="		+ 'm00000' 		+ "ª";
        	strParam += "USERID="		+ '111' 		+ "ª";
        	strParam += "SURVSEQ="		+ '222'  		+ "ª";
        	strParam += "SURVKINDCD="		+  '333'  	+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.gfnTransaction("setLoginInfo",
        						"/swiss/hp/login/loginGet.do",
        						"dsSearch=dsSearch",
        						"dsResult=dsResult",
        						"",
        						"fnCallback",
        						false);

        	*/

        };


        this.btn_logout_onclick = function(obj,e)
        {
        	var strParam = "";
        	strParam += "SURVSEQ="		+ '211231' 		+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);


        	this.gfnTransaction("logOut",
        						"/swiss/hp/login/logOut.do",
        						"dsSearch=dsSearch",
        						"gds_rtn_result=dsResult",
        						"",
        						"fnCallback",
        						false);

        };

        this.btn_move_onclick = function(obj,e)
        {
        	//this.go("FP::fp03m00.xfdl");

        	//this.go("AD::ad04m00.xfdl");

        	//this.go("FP::fp02m00.xfdl");
        	this.go("AD::ad22m00.xfdl");
        	//this.fn_goPage("AD::ad22m00.xfdl");
        	//this.go("HP::hp10m01.xfdl");

        };

        // 취업담당 등록
        this.btn_ch_onclick = function(obj,e)
        {
        	//this.go("AD::ad04m00.xfdl");
        	alert(" 홈으로 이동후 : 관리자 > 조사준비> 담당자등록 메뉴를 이용해 주세요.");

        };

        this.btn_sndMain_onclick = function(obj,e)
        {
        	//this.fn_initPage("FrameBase::Form_main.xfdl");  //-- 페이지 이동
        	//this.fn_initPage("FrameBase::Form_main.xfdl");  //-- 페이지 이동
        	window.location.href=nexacro.getEnvironment().services["svcBaseUrl"].url;

        };


        this.btn_sndMain2_onclick = function(obj,e)
        {
        	//this.fn_initPage("FrameBase::Form_main.xfdl");  //-- 페이지 이동
        	this.fn_initPage("FrameBase::Form_main.xfdl");  //-- 페이지 이동


        };

        this.btn_search_onclick = function(obj,e)
        {
        	this.selectUserList();
        };






        var rtnRes = "";

        this.WebBrowser00_onusernotify = function(obj,e)
        {
        	rtnRes = e.userdata;
        	if(rtnRes=="abc"){
        		//this.alert(rtnRes);
        		this.fn_goPage("HP::hp08m00.xfdl");

        	}
        };


        this.hp08m00_oninit = function(obj,e)
        {
        	//this.selectUserList();
        	//alert("start");

        	//alert(1);
        	this.transaction("sid","/ext_lib/ip_chk.jsp","","","","fn_ip_chk");
            //alert("IP Address :: " + ret_SysipAddress );

        	this.fv_SURVSEQ = objApp.gds_login_info.getColumn(idx, "SURVSEQ");

        };

        this.fn_ip_chk = function(sid, ecd, emsg)
        {
        	//alert("ip:"+this.CLIENT_IPADDRESS+", sid:"+sid+",ecd:"+ecd+",emsg:"+emsg);
        	if(!this.CLIENT_IPADDRESS){
        		this.CLIENT_IPADDRESS="127.0.0.1"
        	}
        	//alert(this.CLIENT_IPADDRESS);
        	//var chkIP = this.CLIENT_IPADDRESS;
        	//alert("chkIP="+chkIP);

        	//this.genBBSKey();

        	if(this.CLIENT_IPADDRESS != "127.0.0.1" && this.CLIENT_IPADDRESS != "10.100.52.107" && this.CLIENT_IPADDRESS != "10.100.52.32"){
        		//alert("접속불가능한 ip입니다.");
        		window.open('http://www.naver.com','_self');
        		return false;
        	}
        }


        this.btn_00_onclick = function(obj,e)
        {
        	alert(rtnRes);
        };

        this.Static01_01_onclick = function(obj,e)
        {

        };












        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.hp08m00_oninit,this);
            this.gd_kedUser.addEventHandler("oncellclick",this.gd_kedUser_oncellclick,this);
            this.btn_chk.addEventHandler("onclick",this.btn_chk_onclick,this);
            this.btn_move.addEventHandler("onclick",this.btn_move_onclick,this);
            this.btn_00.addEventHandler("onclick",this.btn_00_onclick,this);
            this.cmb_select_surv.addEventHandler("onitemchanged",this.cmb_system_onitemchanged,this);
            this.cmb_select_option.addEventHandler("onitemchanged",this.cmb_system_onitemchanged,this);
            this.btn_sndMain.addEventHandler("onclick",this.btn_sndMain_onclick,this);
            this.btn_sndMain00.addEventHandler("onclick",this.btn_sndMain_onclick,this);
            this.btn_ch.addEventHandler("onclick",this.btn_ch_onclick,this);
            this.btn_search00.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_logout.addEventHandler("onclick",this.btn_logout_onclick,this);
            this.btn_sndMain01.addEventHandler("onclick",this.btn_sndMain2_onclick,this);
        };

        this.loadIncludeScript("hp08m00_test.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
