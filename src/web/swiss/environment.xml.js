if (nexacro.Environment)
{
    var env = nexacro._environment = new nexacro.Environment();

    env.on_init = function ()
    {
        this.set_themeid("theme::default");
        this.set_userfontid("font::spoqa.xfont");
    };

    env.on_initEvent = function ()
    {
        // add event handler

    };

    env.loadTypeDefinition = function ()
    {
        nexacro._setTypeDefinitionURL("typedefinition.xml");
        nexacro._addService("theme", "file", "./_resource_/_theme_/", "session", null, "", "", "");
        nexacro._addService("initvalue", "file", "./_resource_/_initvalue_/", "session", null, "", "", "");
        nexacro._addService("xcssrc", "file", "./_resource_/_xcss_/", "session", null, "", "", "");
        nexacro._addService("imagerc", "file", "./_resource_/_images_/", "session", null, "", "", "");
        nexacro._addService("font", "file", "./_resource_/_font_/", "session", null, "", "0", "0");
        nexacro._addService("FrameBase", "form", "./FrameBase/", "session", null, "", "0", "0");
        nexacro._addService("lib", "js", "./lib/", "session", null, "", "0", "0");
        nexacro._addService("HomMain", "form", "./Hom/Main/", "session", null, "", "0", "0");
        nexacro._addService("HP", "form", "./HP/", "session", null, "", "0", "0");
        nexacro._addService("CM", "form", "./CM/", "session", null, "", "0", "0");
        nexacro._addService("AD", "form", "./AD/", "session", null, "", "0", "0");
        nexacro._addService("GP", "form", "./GP/", "session", null, "", "0", "0");
        nexacro._addService("FP", "form", "./FP/", "session", null, "", "0", "0");
        nexacro._addService("AG", "form", "./AG/", "session", null, "", "0", "0");
        nexacro._addService("RT", "form", "./RT/", "session", null, "", "0", "0");
        nexacro._addService("VS", "form", "./VS/", "session", null, "", "0", "0");
        nexacro._addService("ET", "form", "./ET/", "session", null, "", "0", "0");
        nexacro._addService("LK", "form", "./LK/", "session", null, "", "0", "0");
        nexacro._addService("VF", "form", "./VF/", "session", null, "", "0", "0");
        nexacro._addService("svcBaseUrl", "form", "http://localhost:8080/", "none", null, "", "0", "0");
        nexacro._addService("svcBigDataTrans", "form", "http://localhost:8080/BigDataTrans/", "none", null, "", "0", "0");
        nexacro._addService("CA", "form", "./CA/", "session", null, "", "0", "0");
        nexacro._addService("POP", "form", "./POP/", "session", null, "", "0", "0");

    	nexacro._component_uri = (nexacro._arg_compurl ? nexacro._arg_compurl : "./nexacro17lib/component/");
    	nexacro._theme_uri = "./_resource_/_theme_/";

    	// load components
        var registerclass = [
        		{"id":"Button", "classname":"nexacro.Button", "type":"JavaScript"},
        		{"id":"Combo", "classname":"nexacro.Combo", "type":"JavaScript"},
        		{"id":"Edit", "classname":"nexacro.Edit", "type":"JavaScript"},
        		{"id":"MaskEdit", "classname":"nexacro.MaskEdit", "type":"JavaScript"},
        		{"id":"TextArea", "classname":"nexacro.TextArea", "type":"JavaScript"},
        		{"id":"Static", "classname":"nexacro.Static", "type":"JavaScript"},
        		{"id":"Div", "classname":"nexacro.Div", "type":"JavaScript"},
        		{"id":"PopupDiv", "classname":"nexacro.PopupDiv", "type":"JavaScript"},
        		{"id":"Radio", "classname":"nexacro.Radio", "type":"JavaScript"},
        		{"id":"CheckBox", "classname":"nexacro.CheckBox", "type":"JavaScript"},
        		{"id":"ListBox", "classname":"nexacro.ListBox", "type":"JavaScript"},
        		{"id":"Grid", "classname":"nexacro.Grid", "type":"JavaScript"},
        		{"id":"Spin", "classname":"nexacro.Spin", "type":"JavaScript"},
        		{"id":"Menu", "classname":"nexacro.Menu", "type":"JavaScript"},
        		{"id":"PopupMenu", "classname":"nexacro.PopupMenu", "type":"JavaScript"},
        		{"id":"Tab", "classname":"nexacro.Tab", "type":"JavaScript"},
        		{"id":"GroupBox", "classname":"nexacro.GroupBox", "type":"JavaScript"},
        		{"id":"Calendar", "classname":"nexacro.Calendar", "type":"JavaScript"},
        		{"id":"ImageViewer", "classname":"nexacro.ImageViewer", "type":"JavaScript"},
        		{"id":"ProgressBar", "classname":"nexacro.ProgressBar", "type":"JavaScript"},
        		{"id":"Plugin", "classname":"nexacro.Plugin", "type":"JavaScript"},
        		{"id":"Dataset", "classname":"nexacro.NormalDataset", "type":"JavaScript"},
        		{"id":"ListView", "classname":"nexacro.ListView", "type":"JavaScript"},
        		{"id":"WebBrowser", "classname":"nexacro.WebBrowser", "type":"JavaScript"},
        		{"id":"BasicChart", "classname":"nexacro.BasicChart", "type":"JavaScript"},
        		{"id":"PyramidChart", "classname":"nexacro.PyramidChart", "type":"JavaScript"},
        		{"id":"FloatChart", "classname":"nexacro.FloatChart", "type":"JavaScript"},
        		{"id":"RoseChart", "classname":"nexacro.RoseChart", "type":"JavaScript"},
        		{"id":"RadarChart", "classname":"nexacro.RadarChart", "type":"JavaScript"},
        		{"id":"GaugeChart", "classname":"nexacro.GaugeChart", "type":"JavaScript"},
        		{"id":"PieChart", "classname":"nexacro.PieChart", "type":"JavaScript"},
        		{"id":"BubbleChart", "classname":"nexacro.BubbleChart", "type":"JavaScript"},
        		{"id":"VirtualFile", "classname":"nexacro.VirtualFile", "type":"JavaScript"},
        		{"id":"FileDialog", "classname":"nexacro.FileDialog", "type":"JavaScript"},
        		{"id":"FileDownload", "classname":"nexacro.FileDownload", "type":"JavaScript"},
        		{"id":"FileUpTransfer", "classname":"nexacro.FileUpTransfer", "type":"JavaScript"},
        		{"id":"FileUpload", "classname":"nexacro.FileUpload", "type":"JavaScript"},
        		{"id":"FileDownTransfer", "classname":"nexacro.FileDownTransfer", "type":"JavaScript"}
        ];
    	nexacro._addClasses(registerclass);
    };

    env.on_loadVariables = function ()
    {
        // Variables
        nexacro.setEnvironmentVariable("__gnb_menu", "");
        nexacro.setEnvironmentVariable("__gnb_navi", "");
        nexacro.setEnvironmentVariable("__content", "");
        nexacro.setEnvironmentVariable("__footer", "");
        nexacro.setEnvironmentVariable("browserMargin", "");
        nexacro.setEnvironmentVariable("gnb_1d", "mm");
        nexacro.setEnvironmentVariable("gnb_2d", "");
        nexacro.setEnvironmentVariable("gnb_3d", "");
        nexacro.setEnvironmentVariable("gnb_1d_name", "");
        nexacro.setEnvironmentVariable("gnb_2d_name", "");
        nexacro.setEnvironmentVariable("gnb_3d_name", "");
        nexacro.setEnvironmentVariable("__work_page_url", "");
        nexacro.setEnvironmentVariable("Variable0", "");
        nexacro.setEnvironmentVariable("html_link_type", "");
        nexacro.setEnvironmentVariable("html_link_bbsno", "");

        // Cookies


        // HTTP Header

    };

	env.on_loadDeviceAdaptors = function ()
	{
        // load device adatpor

	};

    // User Script
    env.registerScript("environment.xml", function() {
    var pForm = nexacro.Form.prototype;
    var showAlert = true;

    //공통 Transaction 처리
    pForm.gfnTransaction = function(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync)
    {
    	var objEnv = nexacro.getEnvironment();


    	if (utlf_IsNull(strSvcId) || utlf_IsNull(strSvcUrl))
    	{
    		trace("Error : gfnTransaction() 함수의 인자값이 부족합니다.");
    		return false;
    	}

    	// fnCallback 함수 기본값 설정
    	if (utlf_IsNull(callBackFnc)) callBackFnc = "fnCallback";

    	var objDate = new Date();
    	var nStartTime = objDate.getTime();
        var sStartDate = objDate.getYear()
    						+"-"+String(objDate.getMonth()).padLeft(2, '0')
    						+"-"+String(objDate.getDate()).padLeft(2, '0')
    						+" "+String(objDate.getHours()).padLeft(2, '0')
    						+":"+String(objDate.getMinutes()).padLeft(2, '0')
    						+":"+String(objDate.getSeconds()).padLeft(2, '0')
    						+" "+objDate.getMilliseconds();

    	// Async
    	if ((isAsync != true) && (isAsync != false)) isAsync = true;
    	// 1. Service ID  And callBackFnc Merge
    	var strMergeSvcID = strSvcId + "|" + callBackFnc + "|" + isAsync + "|" + sStartDate + "|" + nStartTime;

    	// 2. strServiceUrl
    	// var strServiceUrl = "g_system_sUrl::" + strSvcUrl;
    	var strServiceUrl = "svcBaseUrl::" + strSvcUrl;

    	// 5. strArg
    	var arguments = "";
    	if (utlf_IsNull(strArg))
    	{
    		arguments = "";
    	}
    	else
    	{
    		arguments = strArg;
    	}

    	// 0. 개발시에는 xml 운영시에는 ssv로 할것
    	var nDataType = 0;
    	this.transaction( strMergeSvcID			//1.strMergeSvcID
    					, strServiceUrl			//2.strServiceUrl
    					, inData				//3.inDataSet
    					, outData				//4.outDataSet
    					, arguments				//5.arguments
    					, "gfnCallback"			//6.strCallbackFunc
    					, isAsync				//7.bAsync
    					, nDataType				//0.nDataType : 0(XML 타입), 1((Binary 타입),  2(SSV 타입) --> HTML5에서는 Binary 타입은 지원안함
    					, false);				//0.bCompress ( default : false )
    };

    //공통 Callback 처리
    pForm.gfnCallback = function(svcID,errorCode,errorMsg)
    {
    	var arrSvcID = svcID.split("|");

    	// 에러 공통 처리
    	if(errorCode != 0)
    	{
    		switch(errorCode)
    		{
    			case -1 :
    				// 보안관련 에러내용 주석처리함 2020.11.13
    				//var arrError = (""+errorMsg).split("Query is");
    				//nexacro.getApplication().alert("서버 오류입니다.\n관리자에게 문의하세요. \n" + "svcID = " + svcID + "\n arrError = " + arrError);
    				//nexacro.getApplication().alert(arrError);
    				break;

    			case -2463215:
    				//@todo : 임의 에러코드  처리
    				//return false;
    				break;

    			case 999:
    				// 미인증사용자
    				window.location.href=nexacro.getEnvironment().services["svcBaseUrl"].url;
    				if(showAlert){
    					this.alert("사용시간이 경과 되었습니다. 로그인 후 사용 하시기 바랍니다.");
    				}
    				showAlert = false;
    				return false;
    		}
    	}

    	// 서비스 실행결과 출력
    	var sStartDate = arrSvcID[3];
    	var nStartTime = arrSvcID[4];

    	var objDate = new Date();
    	var sEndDate = objDate.getYear()
    					+"-"+String(objDate.getMonth()).padLeft(2, '0')
    					+"-"+String(objDate.getDate()).padLeft(2, '0')
    					+" "+String(objDate.getHours()).padLeft(2, '0')
    					+":"+String(objDate.getMinutes()).padLeft(2, '0')
    					+":"+String(objDate.getSeconds()).padLeft(2, '0')
    					+" "+objDate.getMilliseconds();
    	var nElapseTime = (objDate.getTime() - nStartTime)/1000;

    	var sMsg = "";
    	if (errorCode == 0)
    	{
    		//sMsg = "gfnCallback : SvcID>>"+arrSvcID[0] + ",  errorCode>>"+errorCode + ", errorMsg>>"+errorMsg + ", isAsync>>" + arrSvcID[2] + ", sStartDate>>" + sStartDate + ", sEndDate>>"+sEndDate + ", nElapseTime>>"+nElapseTime;
    		//trace(sMsg);
    	}
    	else {
    		//sMsg = "gfnCallback : SvcID>>"+arrSvcID[0] + ",  errorCode>>"+errorCode + ", isAsync>>" + arrSvcID[2] + ", sStartDate>>" + sStartDate + ", sEndDate>>"+sEndDate + ", nElapseTime>>"+nElapseTime;
    		//sMsg += "\n==================== errorMsg =======================\n"+errorMsg+"\n==================================================";
    		//trace(sMsg);
    	}

    	// 화면의 callBack 함수 실행
    	if(!utlf_IsNull(arrSvcID[1]))
    	{
    		this.lookupFunc(arrSvcID[1]).call(arrSvcID[0], errorCode, errorMsg);
    	}
    };

    //세션체크
    pForm.sessionCheck = function(){
    	var objApp 		= nexacro.getApplication();
    	this.gfnTransaction("sessionCheck",
    					"swiss/cmm/getSessionCheck.do",
    					"dsSearch=dsSearch",
    					"gds_user_info=dsResult",
    					"",
    					"fnCallback",
    					false);
    	if(objApp.gds_user_info.getColumn(0, "USER_ID") == null || objApp.gds_user_info.getColumn(0, "USER_ID") == "Guest" || objApp.gds_user_info.getColumn(0, "USER_ID") == ""){
    		objApp.mainframe.Frame.TopFrame.form.LogInIcon.set_text("로그인");
    	} else {
    		objApp.mainframe.Frame.TopFrame.form.LogInIcon.set_text("로그아웃");
    	}
    };

    //접속기록
    pForm.setAccessLog = function(strSurvSeq, steSurvKindCd, strAllMenuNm, strAction, strParam){
    	var objApp 		= nexacro.getApplication();
    	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='"+steSurvKindCd+"'",0);

    	objApp.gds_accesslog.setColumn(0,"USERID"          ,objApp.gds_login_info.getColumn(idx, "USERID"));
    	objApp.gds_accesslog.setColumn(0,"USERNM"          ,objApp.gds_login_info.getColumn(idx, "USERNM"));
    	objApp.gds_accesslog.setColumn(0,"USERGRPTYPE"     ,objApp.gds_login_info.getColumn(idx, "USERGRPTYPE"));
    	objApp.gds_accesslog.setColumn(0,"SCHCD"           ,objApp.gds_param.getColumn(0, "SCHCD"));
    	objApp.gds_accesslog.setColumn(0,"ORGCD"           ,objApp.gds_param.getColumn(0, "ORGCD"));
    	objApp.gds_accesslog.setColumn(0,"SCHNM"           ,objApp.gds_param.getColumn(0, "SCHNM"));
    	objApp.gds_accesslog.setColumn(0,"SURVSEQ"         ,strSurvSeq);
    	objApp.gds_accesslog.setColumn(0,"SURVKINDCD"      ,steSurvKindCd);
    	objApp.gds_accesslog.setColumn(0,"ALLMENUNM"       ,strAllMenuNm);
    	objApp.gds_accesslog.setColumn(0,"ACTION"          ,strAction);
    	objApp.gds_accesslog.setColumn(0,"STRPARAM"        ,strParam);

    	this.gfnTransaction("setAccessLog",
    					"swiss/cm/setAccessLog.do",
    					"dsSearch=gds_accesslog",
    					"",
    					"",
    					"fnCallback",
    					false);
    };

    // Left Menu Set
    pForm.leftMenuSet = function(sRow, sysNm){
    	var objApp 		= nexacro.getApplication();
    	var page_path  	= objApp.gds_left_menu.getColumn(sRow,"PAGE_PATH");
    	var page_id  	= objApp.gds_left_menu.getColumn(sRow,"PAGE_ID");
    	var page_title 	= objApp.gds_left_menu.getColumn(sRow,"MENU_NM");
    	var page_navi 	= page_title;
    	var up_menu_id 	= objApp.gds_left_menu.getColumn(sRow,"UP_MENU_ID");
    	var up_row 		= objApp.gds_left_menu.findRow("MENU_ID",up_menu_id);

    	if(page_path != null){
    		while(up_row != -1){
    			var up_page_nm = objApp.gds_left_menu.getColumn(up_row,"MENU_NM");
    			page_navi = up_page_nm + " > " + page_navi;

    			up_menu_id = objApp.gds_left_menu.getColumn(up_row,"UP_MENU_ID");
    			up_row = objApp.gds_left_menu.findRow("MENU_ID",up_menu_id);
    		}

    		objApp.mainframe.Frame.BodyFrame.MainFrame.TitleFrame.form.st_title.set_text("■ " + page_title);
    		objApp.mainframe.Frame.BodyFrame.MainFrame.TitleFrame.form.st_navi.set_text(sysNm + " > " + page_navi);
    		//objApp.mainframe.set_titletext(nexacro.getApplication().g_system_name + " : " +  sysNm + " > " + page_navi);
    		objApp.mainframe.Frame.BodyFrame.MainFrame.WorkFrame.set_formurl(page_path);
    	}
    };

    dsParamSet = function(obj, strPara){
       if(utlf_Length(utlf_Trim(strPara)) == 0) return;

       var sParamArray = new Array();
       var sParamDivstr = new Array(2);
       sParamArray = strPara.split(" ");

       obj.deleteAll();

       for(var i=0; i < sParamArray.length; i++){
          if(sParamArray[i].length > 3){
             sParamDivstr = sParamArray[i].split("=");
             obj.addColumn(sParamDivstr[0], "string", 1024);
             if(obj.rowcount == 0) obj.addRow();
             obj.setColumn(0,sParamDivstr[0], sParamDivstr[1].replace("undefined",""));
          }
       }

       obj.applyChange();

    };

    dsParamSetArrowBlank = function(obj, strPara){

       if(utlf_Length(utlf_Trim(strPara)) == 0) return;
       strPara += "system_dummy=1ª";

       var sParamArray = new Array();
       var sParamDivstr = new Array(2);
       sParamArray = strPara.split("ª");

       obj.deleteAll();

    	for(var i=0; i < sParamArray.length; i++){
    		if(sParamArray[i].length > 3){
    			sParamDivstr = sParamArray[i].split("=");
    			if(sParamDivstr[1].replace("undefined","") != ""){
    				obj.addColumn(sParamDivstr[0], "string", 1024);
    				if(obj.rowcount == 0) obj.addRow();
    				obj.setColumn(0,sParamDivstr[0], sParamDivstr[1].replace("undefined",""));
    			}
    		}
    	}

       obj.applyChange();

    };


    dsParamSetArrowBlank2 = function(obj, strPara){

       if(utlf_Length(utlf_Trim(strPara)) == 0) return;
       strPara += "system_dummy＃§＃1ª";

       var sParamArray = new Array();
       var sParamDivstr = new Array(2);
       sParamArray = strPara.split("ª");

       obj.deleteAll();

    	for(var i=0; i < sParamArray.length; i++){
    		if(sParamArray[i].length > 3){
    			sParamDivstr = sParamArray[i].split("＃§＃");
    			trace("PARAM 2 : " + sParamDivstr[0] + " / " + sParamDivstr[1]);
    			if(sParamDivstr[1].replace("undefined","") != ""){
    				/*
    				if(sParamDivstr[0] == 'TEXT'){
    					obj.addColumn(sParamDivstr[0], "BLOG", 1024);
    				} else {
    					obj.addColumn(sParamDivstr[0], "string", 1024);
    				}
    				*/
    				obj.addColumn(sParamDivstr[0], "string", 1024);
    				if(obj.rowcount == 0) obj.addRow();
    				obj.setColumn(0,sParamDivstr[0], sParamDivstr[1].replace("undefined",""));
    			}
    		}
    	}

       obj.applyChange();

    };


    utlf_IsNull = function(sValue)
    {
    	if( new String(sValue).valueOf() == "undefined")
    		return true;
    	if( sValue == null )
    		return true;
    	if( ("x"+sValue == "xNaN") )
    		return true;
    	if( sValue.length == 0 )
    		return true;
    	return false;
    };

    utlf_Length = function(obj){
    	if(obj.toString() == "[object Edit]"){
    		return obj.text.length;
    	}else if(nexacro.isNumeric(obj)){

    	}else{
    		return obj.length;
    	}
    };

    utlf_Trim = function(sOrg, sTrim) {
    	var rtnVal = "";
    	if (utlf_IsNull(sTrim)) sTrim = " ";
    	rtnVal = utlf_RTrim(sOrg, sTrim);
    	rtnVal = utlf_LTrim(rtnVal, sTrim);

    	return rtnVal;
    };

    utlf_RTrim = function(sOrg, sTrim)
    {
    	var pos, nStart;

    	sOrg = utlf_Str(sOrg);

    	if( utlf_IsNull(sOrg) )		return "";
    	if( utlf_IsNull(sTrim) )		sTrim = " ";

    	for( pos = sOrg.length-sTrim.length ; pos >= 0 ; pos -= sTrim.length )
    	{
    		if( sOrg.substr( pos, sTrim.length ) != sTrim )
    			break;
    	}

    	return sOrg.substr(0, pos+sTrim.length);
    };

    utlf_Str = function(sText)
    {
    	if( utlf_IsNull(sText) ) {
    		return "";
    	} else {
    		return sText;
    	}
    };

    utlf_LTrim = function(sOrg, sTrim)
    {
    	var chk, pos;

    	sOrg = utlf_Str(sOrg);

    	if( utlf_IsNull(sOrg) )		return "";
    	if( utlf_IsNull(sTrim) )		sTrim = " ";

    	for( pos = 0 ; pos < sOrg.length ; pos+=sTrim.length )
    	{
    		if( sOrg.substr( pos, sTrim.length ) != sTrim )
    			break;
    	}

    	return sOrg.substr(pos);
    };

    /*
    utlf_Alert = function ( sMsgId, arrArg, sPopId, sCallback)
    {
        var objApp = nexacro.getApplication();
    	if(objApp.gdsMessage.findRow("msgId", sMsgId) < 0) return false;

    	var sMsg = objApp.gdsMessage.lookup("msgId", sMsgId, "msgText");

    	alert(sMsg);


    	if( this.gfnIsNull(sMsg) ) sMsg = "확인";
    	// 줄바꿈 변경
    	sMsg = sMsg.replace(/\\n/g, String.fromCharCode(10));
    	sMsg =  gfnConvertMessage(sMsg, arrArg);

    	var sMsgType = objApp.gdsMessage.lookup("msgId", sMsgId, "msgType");
    	if( this.gfnIsNull(sPopId) ) sPopId = sMsgId;

    	var sMsgUrl ="";
    	switch(sMsgType) {
    	case "A":
    		sMsgUrl = "cmm::cmmAlert.xfdl";
    		break;
    	case "C":
    		sMsgUrl = "cmm::cmmConfirm.xfdl";
    		if(this.gfnIsNull(sCallback)) trace("callback함수를 지정하지 않았습니다");
    		break;
    	}

    	var oArg = {paramContents:sMsg};
    	var oOption = {};

    	this.gfnOpenPopup( sPopId,sMsgUrl,oArg,sCallback,oOption);

    };
    */

    /*
    gfnConvertMessage = function(msg, values) {
        return msg.replace(/\{(\d+)\}/g, function() {
            return values[arguments[1]];
        });
    };
    */

    pForm.commonCodeList = function(grp_gb, sel_gb, addParam, search_obj, return_obj){

    	var strParam = "";
    	strParam += "GRP_GB="	+ grp_gb + "ª";
    	strParam += "SEL_GB=" 	+ sel_gb + "ª";
    	strParam += addParam			 + "ª";

    	dsParamSetArrowBlank(eval("this." + search_obj), strParam);

    	this.gfnTransaction("selectCommonCodeList",
    					"swiss/cmm/selectCommonCodeList.do",
    					"dsSearch=" + search_obj,
    					return_obj + "=dsResult",
    					"",
    					"fnCallback",
    					false);
    };


    pForm.commonCodeListArray = function(grp_gb, sel_gb, addParam, search_obj, return_obj){
    	var grp_gb_array 		= grp_gb.split(",");
    	var sel_gb_array  		= sel_gb.split(",");
    	var addParam_array  	= addParam.split(",");
    	var return_obj_array  	= return_obj.split(",");

    	if(
    		grp_gb_array.length != sel_gb_array.length ||
    		grp_gb_array.length != addParam_array.length ||
    		grp_gb_array.length != return_obj_array.length
    	   ){
    		alert("commonCodeListArray의 파라미터 개수가 다릅니다.");
    		return;
    	}
    	var search_obj = eval("this."+search_obj);
    	search_obj.deleteAll();
    	search_obj.addColumn("GRP_GB", "string", 1024);
    	search_obj.addColumn("SEL_GB", "string", 1024);

    	var strreturn_obj = "";
    	for(var i = 0; i < grp_gb_array.length; i++){
    		var idx = search_obj.addRow();
    		search_obj.setColumn(idx, "GRP_GB", grp_gb_array[i]);
    		search_obj.setColumn(idx, "SEL_GB", sel_gb_array[i]);

    		if(addParam_array[i].length > 0){
    			var sParamDivstr = addParam_array[i].split("=");

    			if(sParamDivstr.length > 0){
    				search_obj.addColumn(sParamDivstr[0], "string", 1024);
    				search_obj.setColumn(idx, sParamDivstr[0], sParamDivstr[1].replace("undefined",""));
    			}
    		}

    		strreturn_obj += return_obj_array[i] + "=" + "dsResult" + i + " ";
    	}
    	search_obj.applyChange();

    	this.gfnTransaction("selectCommonCodeListArray",
    					"swiss/cmm/selectCommonCodeListArray.do",
    					"dsSearch=" + search_obj.id,
    					strreturn_obj,
    					"",
    					"fnCallback",
    					false);
    };




    //=============crownix script start 20200313=======================

    pForm.fn_set_rd_url = function()
    {
    	//object id가 web_rd* 네이밍으로 생성된 WebBroser에 url 적용
    	for(var i=0; i<this.all.length; i++){
    		if(this.all[i] == "[object WebBrowser]"){
    			//object id 명명 규칙은 변경요망
    			if(this.all[i].name.indexOf("web_rd") >= 0){
    				//rd화면 적용 common 페이지
    				this.all[i].set_url(nexacro.getApplication().g_crownix_html5_viewer);
    			}
    		}
    	}
    }

    //WebBrowser object 객체 return
    pForm.fn_getIframeHandle = function (rd_id)
    {
    	/*
    		g_crownix_framePath: mainframe.Frame.BodyFrame.MainFrame.WorkFrame.form.
    		위 경로는 좌측 Project Explorer에 App Information>Apps>App_Desktop 구성요소
    		HTML5로 변환시 WebBrowser의 iframe id는 g_crownix_framePath + rd_id + "_WebBrowser"
    		명칭으로 자동 지정되어 아래와 같이 만듬.
    	*/
    	trace("경로 확인 : " + nexacro.getApplication().g_crownix_framePath    + "--" + rd_id);
    	return document.getElementById(nexacro.getApplication().g_crownix_framePath + rd_id + "_WebBrowser");
    };

    //rd 파일 호출
    pForm.fn_rdLoad = function(rdPath, rdFileName, rd_id, param)
    {
    	var sRptUrl = nexacro.getApplication().g_crownix_sRptUrl + rdPath + rdFileName;

    	var _tmp_RVValues = [];
    	var sParam = "";
    	if (param != "" && param != null) {
    		for ( var name in param ) {
    			_tmp_RVValues.push(name + "[" + param[name] + "]");
    		}
    		sParam = " /rv " + _tmp_RVValues.join(" ");
    	}
    	var ifms = this.fn_getIframeHandle(rd_id);
    	ifms.contentWindow.crownixViewer.openFile(sRptUrl, sParam);
    };

    //rd viewer 생성
    pForm.fn_rdCreate = function (rd_id)
    {
    	var sUrl = nexacro.getApplication().g_crownix_sUrl;
    	var sId = nexacro.getApplication().g_crownix_sId;

    	var ifms = this.fn_getIframeHandle(rd_id);
    	var crownixRpt = ifms.contentWindow._crownix_createViewer(sUrl, sId);
    	if (crownixRpt == null || crownixRpt == undefined)
    	{
    		alert("report 생성실패...");
    		return;
    	}
    	crownixRpt = null;
    };

    //=============crownix script end 20200313=======================

    pForm.fn_chkLogin = function(gotoUtl){
    	var objApp 		= nexacro.getApplication();
    	return objApp.gds_login_info.getColumn(0,"LOGIN_YN");
    }






    pForm.fn_initPage = function(gotoUtl){
    	var objApp 		= nexacro.getApplication();
    	objApp.mainframe.fullFrame.set_formurl(gotoUtl);
    }


    // 페이지 이동 : this.fn_goPage("HP::abc.xfdl");
    pForm.fn_goPage = function(gotoUtl){

    	//var objApp 		= nexacro.getApplication();
    	//objApp.mainframe.AreaFrame.WorkFrame.set_formurl(pageUrl);

    	var objApp = nexacro.getApplication();
    	var chk = objApp.gds_login_info.getColumn(0, "LOGIN_YN");	// 로그인 여부

    	if(__work_page_url == gotoUtl){		// 이동하려는 페이지가 같으면 중지
    		return;
    	}

    	if(chk != "Y" && gotoUtl != "GP::hp08m00.xfdl"){
    		//nexacro.getApplication().mainframe.fullFrame.set_formurl("FrameBase::Form_main.xfdl");
    		//false;
    	}



    	__content.set_height(0);
    	__content.form.div_nomagin.set_height(0);
    	__content.parent.vscrollbar.set_pos(0);

    		//__content.set_url(gotoUtl);
    	__content.form.div_nomagin.set_formscrolltype("vertical");

    	trace(" gotoUtl : " + gotoUtl);

    	__content.form.div_nomagin.set_url(gotoUtl);

    	__work_page_url = gotoUtl;

    }

    // 자기페이지 이동
    pForm.fn_goOnPage = function(gotoUtl){

    	__content.set_height(0);
    	__content.form.div_nomagin.set_height(0);
    	__content.parent.vscrollbar.set_pos(0);
    	__content.form.div_nomagin.set_formscrolltype("vertical");
    	__content.form.div_nomagin.set_url("");
    	__content.form.div_nomagin.set_url(gotoUtl);
    	__work_page_url = gotoUtl;

    }
    /*

    pForm.fn_goPage2 = function(gotoUtl){
    	__content.set_height(0);
    	__content.form.div_nomagin.set_height(0);
    	__content.parent.vscrollbar.set_pos(0);

    		//__content.set_url(gotoUtl);
    	__content.form.div_nomagin.set_formscrolltype("vertical");

    	trace(" gotoUtl : " + gotoUtl);

    	__content.form.div_nomagin.set_url(gotoUtl);

    	__work_page_url = gotoUtl;

    }


    */


    pForm.fn_test = function(gotoUtl){
    	trace("공통스크립트");

    }

    });
					
    env = null;
}

