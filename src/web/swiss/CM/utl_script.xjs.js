//XJS=utl_script.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /**
        * 엑셀 다운로드
        * @param
        * @return
        * @example  utlf_excelDownload(name,grid,onscuccess)
        */
        this.utlf_excelDownload = function(name,grid,onscuccess,inp_pw){
        	this.exportObj = new ExcelExportObject();
        	if(onscuccess)this.exportObj.addEventHandler("onsuccess", onscuccess, this);
        	this.exportObj.set_exporttype(nexacro.ExportTypes.EXCEL2007);
        	this.exportObj.set_exportactivemode( "active" );
        	this.exportObj.set_exporturl("svcBaseUrl::XExportImport.do");
        	this.exportObj.set_exportfilename(name);
        	//trace(this.exportObj.exportfilename);
        	this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, grid, "Sheet1!A1", "allrecord", "allrecord", "suppress", "allstyle","none","none","both");

        	this.exportObj.set_exporteventtype("itemrecord");
        	this.exportObj.set_exportuitype("exportprogress");
        	this.exportObj.set_exportmessageprocess("%d[%d/%d]");
        	//this.exportObj.set_exportfilepassword("1234");
        	//trace("exporturl== "+this.exportObj.exporturl);

        	if(inp_pw){
        		var result = this.exportObj.exportData("filepassword="+inp_pw, "", false);
        	}else{
        		var result = this.exportObj.exportData();
        	}
        }
        /**
        * 엑셀 업로드
        * @param
        * @return
        * @example  utlf_excelUpload(grid,onscuccess,onerror)
        */
        this.utlf_excelUpload = function(grid,onscuccess,onerror){
        	this.importObj = new nexacro.ExcelImportObject("Import00",this);
        	this.importObj.set_importtype(nexacro.ImportTypes.EXCEL);
        	if(onscuccess)this.importObj.addEventHandler("onsuccess", onscuccess, this);
        	if(onerror)this.importObj.addEventHandler("onerror", onerror, this);
        	this.importObj.set_importurl("svcBaseUrl::XExportImport.do");
        	this.importObj.importData("", "[command=getsheetdata;output=outDs;body=Sheet1!A1;]", "["+grid+"=outDs]");
        }

        /**
        * 엑셀 다운로드(Export 구분 2021-03-12)
        * @param
        * @return
        * @example  utlf_excelExport(name,grid,onscuccess)
        */
        this.utlf_excelExport = function(name,grid,onscuccess){
        	this.exportObj = new ExcelExportObject();
        	if(onscuccess)this.exportObj.addEventHandler("onsuccess", onscuccess, this);
        	this.exportObj.set_exporttype(nexacro.ExportTypes.EXCEL2007);
        	this.exportObj.set_exportactivemode( "active" );
        	this.exportObj.set_exporturl("svcBaseUrl::XExport.do");
        	this.exportObj.set_exportfilename(name);
        	//trace(this.exportObj.exportfilename);
        	this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, grid, "Sheet1!A1", "allrecord", "allrecord", "suppress", "allstyle","none","none","both");

        	this.exportObj.set_exporteventtype("itemrecord");
        	this.exportObj.set_exportuitype("exportprogress");
        	this.exportObj.set_exportmessageprocess("%d[%d/%d]");
        	//this.exportObj.set_exportfilepassword("1234");
        	//trace("exporturl== "+this.exportObj.exporturl);

        	var result = this.exportObj.exportData();
        }
        /**
        * 엑셀 업로드(Import 구분 2021-03-12)
        * @param
        * @return
        * @example  utlf_excelImport(grid,onscuccess,onerror)
        */
        this.utlf_excelImport = function(grid,onscuccess,onerror){
        	this.importObj = new nexacro.ExcelImportObject("Import00",this);
        	this.importObj.set_importtype(nexacro.ImportTypes.EXCEL);
        	if(onscuccess)this.importObj.addEventHandler("onsuccess", onscuccess, this);
        	if(onerror)this.importObj.addEventHandler("onerror", onerror, this);
        	this.importObj.set_importurl("svcBaseUrl::XImport.do");
        	this.importObj.importData("", "[command=getsheetdata;output=outDs;body=Sheet1!A1;]", "["+grid+"=outDs]");
        }

        /**
        * 엑셀 다운로드(보안다운로드 구분)
        * @param
        * @return
        * @example  utlf_securityExcelDownload(name,grid,onscuccess)
        */
        this.utlf_securityExcelDownload = function(name,grid,onscuccess){
        	this.exportObj = new ExcelExportObject();
        	if(onscuccess)this.exportObj.addEventHandler("onsuccess", onscuccess, this);
        	this.exportObj.set_exporttype(nexacro.ExportTypes.EXCEL2007);
        	this.exportObj.set_exportactivemode( "active" );
        	this.exportObj.set_exporturl("svcBaseUrl::XSecurityExport.do");
        	this.exportObj.set_exportfilename(name);
        	//trace(this.exportObj.exportfilename);
        	this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, grid, "Sheet1!A1", "allrecord", "allrecord", "suppress", "allstyle","none","none","both");

        	this.exportObj.set_exporteventtype("itemrecord");
        	this.exportObj.set_exportuitype("exportprogress");
        	this.exportObj.set_exportmessageprocess("%d[%d/%d]");
        	//this.exportObj.set_exportfilepassword("1234");
        	//trace("exporturl== "+this.exportObj.exporturl);

        	var result = this.exportObj.exportData();
        }

        /**
        * div 안의 components enable  button 제외
        * @param utlf_enableDiv	- this.div
        * @return
        * @example  utlf_enableDiv(this.div_00,true)
        */
        this.utlf_enableDiv = function(oComp,bArg){
        	if(oComp instanceof Div){
        		for (var j = 0; j < oComp.form.components.length; j++) {
        			if(oComp.form.components[j] instanceof Radio ){
        				oComp.form.components[j].set_enable(bArg);
        			}
        			if(oComp.form.components[j] instanceof Edit ){
        				oComp.form.components[j].set_enable(bArg);
        			}
        			if(oComp.form.components[j] instanceof CheckBox ){
        				oComp.form.components[j].set_enable(bArg);
        			}
        			if(oComp.form.components[j] instanceof Calendar ){
        				oComp.form.components[j].set_enable(bArg);
        			}
        			if(oComp.form.components[j] instanceof Div ){
        				this.utlf_enableDiv(oComp.form.components[j]);
        			}
        		}
        	}
        }


        /**
        * div 안의 components enable
        * @param
        * @return
        * @example  utlf_enableBtn(this.div_00,true)
        */
        this.utlf_enableBtn = function(oComp,bArg){
        	if(oComp instanceof Div){
        		for (var j = 0; j < oComp.form.components.length; j++) {
        			if(oComp.form.components[j] instanceof Button ){
        				if(oComp.form.components[j].id.indexOf("search") == -1)
        					oComp.form.components[j].set_enable(bArg);
        			}
        			if(oComp.form.components[j] instanceof Div ){
        				if(oComp.form.components[j].id.indexOf("div_pagging") == -1)
        					this.utlf_enableBtn(oComp.form.components[j]);
        			}
        		}
        	}
        }

        this.utlf_enableBtnByCall = function(){
        	var objApp 		= nexacro.getApplication();
        	//this.fv_USERID = objApp.gds_login_info.getColumn(0, "USERID") ;
        	var CHANGEYN = objApp.gds_login_info.getColumn(0, "CHANGEYN") ;
        	if("Y" == CHANGEYN){
        		this.utlf_enableBtn(this.Div,false);
        	}
        }

        /**
        * div 안의 components enable
        * @param utlf_enableDiv	- this.div
        * @return
        * @example  utlf_enableDivAll(this.div_00,true)
        */
        this.utlf_enableDivAll = function(oComp,bArg){
        	if(oComp instanceof Div){
        		for (var j = 0; j < oComp.form.components.length; j++) {
        			if(oComp.form.components[j] instanceof Radio ){
        				oComp.form.components[j].set_enable(bArg);
        			}
        			if(oComp.form.components[j] instanceof Edit ){
        				oComp.form.components[j].set_enable(bArg);
        			}
        			if(oComp.form.components[j] instanceof CheckBox ){
        				oComp.form.components[j].set_enable(bArg);
        			}
        			if(oComp.form.components[j] instanceof Calendar ){
        				oComp.form.components[j].set_enable(bArg);
        			}
        			if(oComp.form.components[j] instanceof Button ){
        				oComp.form.components[j].set_enable(bArg);
        			}
        			if(oComp.form.components[j] instanceof Grid ){
        				oComp.form.components[j].set_enable(bArg);
        			}
        			if(oComp.form.components[j] instanceof Div ){
        				this.utlf_enableDivAll(oComp.form.components[j]);
        			}
        		}
        	}
        }


        /**
        * div 안의 components 초기화
        * @param utlf_resetDiv	- this.div
        * @return
        * @example  utlf_resetDiv(this.div_00)
        */
        this.utlf_resetDiv = function(oComp){
        	if(oComp instanceof Div){
        		for (var j = 0; j < oComp.form.components.length; j++) {
        			if(oComp.form.components[j] instanceof Radio ){
        				oComp.form.components[j].set_value("");
        			}
        			if(oComp.form.components[j] instanceof Edit ){
        				oComp.form.components[j].set_value("");
        			}
        			if(oComp.form.components[j] instanceof CheckBox ){
        				oComp.form.components[j].set_value("");
        			}
        			if(oComp.form.components[j] instanceof Calendar ){
        				oComp.form.components[j].set_value("");
        			}
        			if(oComp.form.components[j] instanceof Div ){
        				this.utlf_resetDiv(oComp.form.components[j]);
        			}
        		}
        	}
        }
        /**
        * this.Div 내의 모든(div 포함) components validation
        * @param utlf_validate	- this.components
        * @return  (alert Message)
        * @example  utlf_validate(this.components)
        */
        var focusComp = "";
        this.utlf_validate = function(oComp)
        {	var retmsg = "";
        	focusComp="";
        	if(oComp instanceof Div){
        		for (var j = 0; j < oComp.form.components.length; j++) {
        			var v_validate = oComp.form.components[j].validate;
        			if(v_validate)
        			{
        				var v_arrvalue = v_validate.split(",");
        				//trace(v_arrvalue);
        				var v_value = oComp.form.components[j].value;
        				if(v_validate){
        					for(var k = 1; k < v_arrvalue.length; k++){
        						var ret = this._swiss_procValidationChk(v_value,v_arrvalue[k],v_arrvalue[0]);
        						if("" != ret)
        							retmsg = retmsg + ret +"\n";
        					}
        					if( retmsg != "" && focusComp =="" )
        						focusComp=oComp.form.components[j];
        				}
        			}
        			retmsg = retmsg + this._swiss_validateDiv(oComp.form.components[j]);
        		}
        	}
        	if(retmsg != ""){
        		alert(retmsg);
        		if(focusComp) focusComp.setFocus();
        		return false;
        	}else{
        		return true;
        	}
        }

        //VALIDATION메시지 팝업활용
        this.utlf_validateAG = function(oComp,dsErr)
        {	var retmsg = "";
        	if(oComp instanceof Div){
        		for (var j = 0; j < oComp.form.components.length; j++) {
        			var v_validate = oComp.form.components[j].validate;
        			if(v_validate)
        			{
        				var v_arrvalue = v_validate.split(",");
        				//trace(v_arrvalue);
        				var v_value = oComp.form.components[j].value;
        				if(v_validate){
        					for(var k = 1; k < v_arrvalue.length; k++){
        						var ret = this._swiss_procValidationChk(v_value,v_arrvalue[k],v_arrvalue[0]);
        						if("" != ret)
        							retmsg = retmsg + ret +"\n";
        					}
        				}
        			}
        			retmsg = retmsg + this._swiss_validateDiv(oComp.form.components[j]);
        		}
        	}
        	if(retmsg != ""){
        	//trace(retmsg);
        		var v2_arrvalue = retmsg.split("\n");
        		for(var k = 0; k < v2_arrvalue.length; k++){
        			if(!v2_arrvalue[k]) break;
        			var nRow = dsErr.addRow();
        			dsErr.setColumn(nRow,"ERRDESC",v2_arrvalue[k]);
        			dsErr.setColumn(nRow,"ERRKINDNM","오류사항");
        			dsErr.setColumn(nRow,"ERRKINDCD","2");
        		}
        	}else{
        		return true;
        	}
        }

        /**
        * 1개의 this.Div 내의 components validation
        * @param utlf_validate	- this.Div
        * @return  (alert Message)
        * @example  utlf_validateDiv(this.Div)
        */
        this.utlf_validateDiv = function(oComp)
        {	var retmsg = "";
        	focusComp = "";
        	retmsg = this._swiss_validateDiv(oComp);
        	if(retmsg != ""){
        		alert(retmsg);
        		if(focusComp) focusComp.setFocus();
        		return false;
        	}else{
        		return true;
        	}
        }

        /**
        * this.Div 내의 components validation
        * @param utlf_validate	- this.Div
        * @return   Message
        * @example  _swiss_validateDiv(this.Div)
        */
        this._swiss_validateDiv = function(oComp)
        {	var retmsg = "";
        	if(oComp instanceof Div){
        		if(!oComp.visible) return retmsg;
        		for (var j = 0; j < oComp.form.components.length; j++) {
        			var v_validate = oComp.form.components[j].validate;
        			if(v_validate)
        			{
        				var v_arrvalue = v_validate.split(",");
        				//trace(v_arrvalue);
        				var v_value = oComp.form.components[j].value;
        				if(v_validate){
        					for(var k = 1; k < v_arrvalue.length; k++){
        						var ret = this._swiss_procValidationChk(v_value,v_arrvalue[k],v_arrvalue[0]);
        						if("" != ret)
        							retmsg = retmsg + ret +"\n";
        					}
        					if( retmsg != "" && focusComp =="" )
        						focusComp=oComp.form.components[j];
        				}
        			}
        		}
        	}
        	return retmsg;
        }


        this.utlf_swiss_procValidationChk = function(strObjVal, strVal, strTitle) {
        	return this._swiss_procValidationChk(strObjVal, strVal, strTitle);
        }
        /**
        * Check 항목에 대한 Object의 Value 확인.
        * @param strObjVal	- Validation 체크 Value
        * @param strVal 		- Validation 항목
        * @param strTitle	- Message 출력용 Object Name
        * @return  true/strin(Message)
        * @example  _svcf_procValidationChk(strObjVal, strVal, strTitle)
        */
        this._swiss_procValidationChk = function(strObjVal, strVal, strTitle) {

        	var rtnVal = "";
        	var strMsg = "";
        	var arrValid = strVal.split(":");
        	var arrStrTitle = strTitle.split(":");
        	if(arrStrTitle.length>1)
        		strTitle = arrStrTitle[arrStrTitle.length-1]

        	switch( arrValid[0] )
        	{
        		case "required" :
        			if (this.utlf_IsNull(this.utlf_Trim(strObjVal))) {
        				if (arrValid[1] == "false") rtnVal = "";
        				else 	rtnVal = strTitle + "이(가) 누락되어 있습니다. 반드시 입력해주세요.";
        			}
        			break;
        		case "required1" :
        			if (this.utlf_IsNull(this.utlf_Trim(strObjVal))) {
        				if (arrValid[1] == "false") rtnVal = "";
        				else 	rtnVal = strTitle + "이 누락되어 있습니다. 반드시 입력해주세요.";
        			}
        			break;
        		case "required2" :
        			if (this.utlf_IsNull(this.utlf_Trim(strObjVal))) {
        				if (arrValid[1] == "false") rtnVal = "";
        				else 	rtnVal = strTitle + "가 누락되어 있습니다. 반드시 입력해주세요.";
        			}
        			break;
        		case "unrequired1" :
        			if (!this.utlf_IsNull(this.utlf_Trim(strObjVal))) {
        				if (arrValid[1] == "false") rtnVal = "";
        				else 	rtnVal = strTitle+"은 불필요한 입력항목입니다. 자동 삭제됩니다.";
        			}
        			break;
        		case "unrequired2" :
        			if (!this.utlf_IsNull(this.utlf_Trim(strObjVal))) {
        				if (arrValid[1] == "false") rtnVal = "";
        				else 	rtnVal = strTitle+"는 불필요한 입력항목입니다. 자동 삭제됩니다.";
        			}
        			break;

        		 case "dateAG1":
        			if (!this.utlf_IsNull(this.utlf_Trim(strObjVal, ""))) {
        				if (!this.utlf_IsDate(strObjVal)) {
        					rtnVal = strTitle + "을 입력해주세요.";
        				}
        			}
        		break;
        		 case "dateAG2":
        			if (!this.utlf_IsNull(this.utlf_Trim(strObjVal, ""))) {
        				if (!this.utlf_IsDate(strObjVal)) {
        					rtnVal = strTitle + "를 입력해주세요.";
        				}
        			}
        		break;
        		case "digitsAG1" :
        			if (! this.utlf_IsNum(strObjVal)) {
        				rtnVal = strTitle + "을 입력해주세요.";
        			}
        			break;
        		case "digitsAG2" :
        			if (! this.utlf_IsNum(strObjVal)) {
        				rtnVal = strTitle + "를 입력해주세요.";
        			}
        			break;

        		case "digits" :
        			if (! this.utlf_IsNum(this.utlf_Trim(strObjVal,""))) {
        				rtnVal = strTitle + "은(는) 숫자 입력 항목입니다.";
        			}
        			break;
        		case "digitsExNULL" :
        			if (strObjVal && ! this.utlf_IsNum(this.utlf_Trim(strObjVal,""))) {
        				rtnVal = strTitle + "은(는) 숫자 입력 항목입니다.";
        			}
        			break;
        		 case "date":
        			if (!this.utlf_IsNull(this.utlf_Trim(strObjVal, ""))) {
        				if (!this.utlf_IsDate(strObjVal)) {
        					rtnVal = strTitle + "은(는) 입력형식이 맞지 않습니다.(YYYYMMDD)";
        				}
        			}
        		break;

        		case "dateym" :
        			if (!this.utlf_IsNull(this.utlf_Trim(strObjVal, ""))) {
        				if (!this.utlf_IsDate(strObjVal + "01")) {
        					rtnVal = strTitle + "은(는) 년월 입력 항목입니다.";
        				}
        			}
        			break;

        		case "jumin" :
        			if (! this.utlf_IsRsrNo(strObjVal)) {
        				rtnVal = strTitle + " 형식이 잘못되었습니다.";
        			}
        			break;

        		case "max" :
        			if (parseInt(strObjVal) > parseInt(arrValid[1])) {
        				rtnVal = strTitle + " 값의 최대값은 " + arrValid[1] + "입니다.";
        			}
        			break;

        		case "min" :
        			if (parseInt(strObjVal) < parseInt(arrValid[1])) {
        				rtnVal = strTitle + " 값의 최소값은 " + arrValid[1] + "입니다.";
        			}
        			break;

        		case "maxlength" :
        			if (this.utlf_Len(strObjVal) > parseInt(arrValid[1])) {
        				rtnVal = strTitle + " 최대 길이는 " + arrValid[1] + "입니다.";
        			}
        			break;

        		case "maxlengthAG1" :
        			if (this.utlf_Len(strObjVal) > parseInt(arrValid[1])) {
        				rtnVal = strTitle + "을 입력해주세요."+ " 최대 길이는 " + arrValid[1] + "입니다.";
        			}
        			break;
        		case "maxlengthAG2" :
        			if (this.utlf_Len(strObjVal) > parseInt(arrValid[1])) {
        				rtnVal = strTitle + "를 입력해주세요."+ " 최대 길이는 " + arrValid[1] + "입니다.";
        			}
        			break;
        		case "minlengthAG1" :
        			if (this.utlf_Len(strObjVal) < parseInt(arrValid[1])) {
        				rtnVal = strTitle + "을 입력해주세요."+ " 최소 길이는 " + arrValid[1] + "입니다.";
        			}
        			break;
        		case "minlengthAG2" :
        			if (this.utlf_Len(strObjVal) < parseInt(arrValid[1])) {
        				rtnVal = strTitle + "를 입력해주세요."+ " 최소 길이는 " + arrValid[1] + "입니다.";
        			}
        			break;
        		case "minlength" :
        			if (this.utlf_Len(strObjVal) < parseInt(arrValid[1])) {
        				rtnVal = strTitle + " 최소 길이는 " + arrValid[1] + "입니다.";
        			}
        			break;

        		case "maxlengthB" :
        			if (this.utlf_LenB(strObjVal) > parseInt(arrValid[1])) {
        				rtnVal = strTitle + " 최대 길이는 " + arrValid[1] + "입니다.(한글 3Byte, 영문/숫자 1Byte)";
        			}
        			break;

        		case "minlengthB" :
        			if (this.utlf_LenB(strObjVal) < parseInt(arrValid[1])) {
        				rtnVal = strTitle + " 최소 길이는 " + arrValid[1] + "입니다.(한글 3Byte, 영문/숫자 1Byte)";
        			}
        			break;

        		case "equallen" :
        			if (strObjVal.length != parseInt(arrValid[1])) {
        				rtnVal = strTitle + " 길이는 " + arrValid[1] + "입니다.";
        			}
        			break;

        		case "comparemax" :
        			if (parseInt(this.utlf_Replace(strObjVal, "-", "")) < parseInt(eval(arrValid[1]).value)) {
        				rtnVal = strTitle + "이(가) " + arrValid[2] + " 보다 작습니다.";
        			}
        			break;

        		case "comparemin" :
        			if (parseInt(this.utlf_Replace(strObjVal, "-", "")) > parseInt(eval(arrValid[1]).value)) {
        				rtnVal = strTitle + "이(가) " + arrValid[2] + " 보다 큽니다.";
        			}
        			break;

        		case "equalto" :
        			if (strObjVal > eval(arrValid[1]).value) {
        				rtnVal = strTitle + "은(는) " + arrValid[2] + "와(과) 틀립니다.";
        			}
        			break;

        		case "range" :
        			if (parseInt(strObjVal) < parseInt(arrValid[1]) || parseInt(strObjVal) > parseInt(arrValid[2])) {
        				rtnVal = strTitle + "은(는) " + arrValid[1] + " ~ " + arrValid[2] + " 사이의 값입니다.";
        			}
        			break;

        		case "fix12" :
        			if (parseInt(strObjVal) !="1" && parseInt(strObjVal) != "2" ) {
        				rtnVal = strTitle + "(1 또는 2)를 입력해주세요.";
        			}
        			break;

        		case "fix123" :
        			if (parseInt(strObjVal) !="1" && parseInt(strObjVal) != "2" && parseInt(strObjVal) != "3" ) {
        				rtnVal = strTitle + "(1 또는 2 또는 3)를 입력해주세요.";
        			}
        			break;

        		case "fix1" :
        			if (parseInt(strObjVal) !="1" ) {
        				rtnVal = strTitle + "는 1로만 입력하시기 바랍니다.";
        			}
        			break;
        		case "email" :
        			if (strObjVal && !this.utlf_isEmail(strObjVal) ) {
        				rtnVal = "["+this.utlf_nvl(strObjVal,'')+"]는 "+strTitle + " 형식이 잘못되었습니다.";
        			}
        			break;
        		case "special" :
        			if (!this.utlf_specialPattern(strObjVal) ) {
        				rtnVal = strTitle + "에 특수문자 또는 영어 외 외국어가 존재합니다.";
        			}
        			break;

        		case "mobile" :
        			if (!this.utlf_isMobile(this.utlf_Trim(strObjVal, "")) ) {
        				rtnVal = strTitle + "유효한 휴대폰번호가 아닙니다.";
        			}
        			break;

        // 		default :
        // 			rtnVal = "Validation 구분이 명확하지 않습니다.";
        // 			break;
        	}


        	return rtnVal;
        }

        /**
        * Check 데이터셋의 Value 확인.
        * @return  true/strin(Message)
        * @example  utlf_getValidDataSet(dsMain, dsValid, dsErr)
        */
        this.errCnt=0;
        this.utlf_getValidDataSet = function(dsMain, dsValid, dsErr) {
        	dsErr.clearData();
        	var rtnVal = "";
        	for (var i=1; i<dsMain.rowcount; i++) {
        		for (var K=0; K<dsMain.getColCount(); K++) {
        			for (var j=0; j<dsValid.getColCount(); j++) {
        				if(dsMain.getColID(K) == dsValid.getColID(j)){
        					if(dsValid.getColumn(0,dsValid.getColID(j))){
        						var vCell = dsMain.getColumn(i,dsMain.getColID(K));
        						var strSplit = dsValid.getColumn(0,dsValid.getColID(j));
        						var arrValidChk = strSplit.split(",");
        						var strColName = arrValidChk[0];
        						//trace(vCell);
        						//if(vCell && vCell != "" ){
        							for (var h=1; h<arrValidChk.length; h++) {
        								rtnVal = this._swiss_procValidationChk(vCell, arrValidChk[h], strColName);
        								if(rtnVal != ""){
        									var nRow = dsErr.addRow();
        									dsErr.setColumn(nRow,"ERRDESC",rtnVal);
        									dsErr.setColumn(nRow,"ERRKINDNM","오류사항");
        									this.errCnt++;
        									if(this.errCnt>101){
        										//trace(dsErr.saveXML());
        										return false;
        									}
        								}
        							}
        						//}
        					}
        				}
        			}
        		}
        	}
        	if(dsErr.rowcount > 0){
        		return false;
        	}else{
        		return true;
        	}
        }


        /**
         * sText를 String으로 형변환
         * undefined   -> ""
         * null        -> ""
         * 1           -> "1"
         * ""          -> ""
         * 1.1         -> "1.1"
         * @param  sText
         * @return String
         * @see
         */
        this.utlf_Str = function(sText){
        	if(sText == undefined) return "";
        	if(sText == null) return "";
        	if(sText instanceof String) return sText;

        	return ""+sText;
        }
        /**
        * 문자열에서 주어진 부분 문자열의 위치를 검색
        * @param : sOrg 		- 검색대상 문자열
        * @param : sFind 		- 검색할 문자열
        * @param : nStart 	- 검색 시작 위치
        * @return : Integer(문자열의 위치)
        * @example : utlf_Pos(strText, "Find", [0]);		[]는 Optional을 표현.
        */
        this.utlf_Pos = function(sOrg, sFind, nStart)
        {
        	if( this.utlf_IsNull(sOrg) || this.utlf_IsNull(sFind) )		return -1;
        	if( this.utlf_IsNull(nStart) )		nStart = 0;

        	return sOrg.indexOf(sFind, nStart);
        }

        /**
        * 문자열의 일부분을 다른 문자열로 치환
        * @param : sOrg 	- 가운데 부문을 얻어올 원본 문자열
        * @param : sRepFrom - 치환대상 문자열
        * @param : sRepTo 	- 치환될 문자열
        * @return : string
        * @example : utlf_Replace( sOrg, " ", "" );
        */
        this.utlf_Replace = function( sOrg, sRepFrom, sRepTo )
        {
        	var pos, nStart=0, sRet="";

        	sOrg = this.utlf_Str(sOrg);

        	if( this.utlf_IsNull(sOrg) )			return "";
        	if( this.utlf_IsNull(sRepFrom) )		return sOrg;
        	//if( this.utlf_IsNull(sRepTo) )		return sOrg;

        	while(1)
        	{
        		pos = this.utlf_Pos( sOrg, sRepFrom, nStart );
        		if( pos < 0 )
        		{
        			sRet += sOrg.substr( nStart );
        			break;
        		}
        		else
        		{
        			sRet += sOrg.substr( nStart, pos - nStart);
        			sRet += sRepTo;
        			nStart = pos+sRepFrom.length;
        		}
        	}
        	return sRet;
        }

        /**
        * 문자열의 좌측 공백을 제거
        * @param : sOrg 		- 좌측 공백문자 제거 대상 문자열
        * @param : [sTrim] 	- 제거대상 문자열(default:" ")
        * @return : string
        * @example : this.utlf_LTrim( sOrg, " ");
        */
        this.utlf_LTrim = function(sOrg, sTrim)
        {
        	var chk, pos;

        	sOrg = this.utlf_Str(sOrg);

        	if( this.utlf_IsNull(sOrg) )		return "";
        	if( this.utlf_IsNull(sTrim) )		sTrim = " ";

        	for( pos = 0 ; pos < sOrg.length ; pos+=sTrim.length )
        	{
        		if( sOrg.substr( pos, sTrim.length ) != sTrim )
        			break;
        	}

        	return sOrg.substr(pos);
        }

        /**
        * 문자열의 우측 공백을 제거
        * @param : sOrg 		- 우측 공백문자 제거 대상 문자열
        * @param : [sTrim] 	- 치환대상 문자열
        * @return : string
        * @example : utlf_RTrim( sOrg, " ");
        */
        this.utlf_RTrim = function(sOrg, sTrim)
        {
        	var pos, nStart;

        	sOrg = this.utlf_Str(sOrg);

        	if( this.utlf_IsNull(sOrg) )		return "";
        	if( this.utlf_IsNull(sTrim) )		sTrim = " ";

        	for( pos = sOrg.length-sTrim.length ; pos >= 0 ; pos -= sTrim.length )
        	{
        		if( sOrg.substr( pos, sTrim.length ) != sTrim )
        			break;
        	}

        	return sOrg.substr(0, pos+sTrim.length);
        }

        /**
        * 문자열의 좌우측 공백을 제거
        * @param : sOrg 		- 좌측 공백문자 제거 대상 문자열
        * @param : [sTrim] 	- 제거대상 문자열(default:" ")
        * @return : string
        * @example : utlf_Trim( sOrg, " ");
        */
        this.utlf_Trim = function(sOrg, sTrim) {
        	var rtnVal = "";
        	if (this.utlf_IsNull(sTrim)) sTrim = " ";
        	rtnVal = this.utlf_RTrim(sOrg, sTrim);
        	rtnVal = this.utlf_LTrim(rtnVal, sTrim);

        	return rtnVal;
        }

        /**
        * 문자열이 지정된 길이가 되도록 왼쪽을 채우는 함수
        * @param : sOrg 	- 원본 문자열
        * @param : sPad 	- 왼쪽에 채울 문자
        * @param : nCnt 	- 출력될 문자열의 길이
        * @return : string
        * @example : utlf_LPad("2", "0", 2);
        */
        this.utlf_LPad = function(sOrg, sPad, nCnt)
        {
        	var i, sRet="";

        	if( this.utlf_IsNull(sOrg) )		return "";
        	if( this.utlf_IsNull(sPad) )		sPad = " ";
        	if( this.utlf_IsNull(nCnt) )		nCnt = 1;

        	for( i = 0 ; i < nCnt ; i++ )
        		sRet += sPad;
        	sRet += sOrg;

        	return sRet;
        }

        /**
        * 문자열이 지정된 길이가 되도록 오른쪽을 채우는 함수
        * @param : sOrg 	- 원본 문자열
        * @param : sPad 	- 오늘쪽에 채울 문자
        * @param : nCnt 	- 출력될 문자열의 길이
        * @return : string
        * @example : utlf_RPad("2", "0", 2);
        */
        this.utlf_RPad = function(sOrg, sPad, nCnt)
        {
        	var i, sRet="";

        	if( this.utlf_IsNull(sOrg) )		return "";
        	if( this.utlf_IsNull(sPad) )		sPad = " ";
        	if( this.utlf_IsNull(nCnt) )		nCnt = 1;

        	sRet += sOrg;
        	for( i = 0 ; i < nCnt ; i++ )
        		sRet += sPad;

        	return sRet;
        }

        /**
        * 문자열의 오른쪼 부분을 지정한 길이만큼 가져오는 함수
        * @param : sOrg 	- 원본 문자열
        * @param : nSize 	- 얻어올 크기
        * @return : string
        * @example : utlf_Right(sOrg, 2);
        */
        this.utlf_Right = function(sOrg, nSize)
        {
        	if( this.utlf_IsNull(sOrg) || this.utlf_IsNull(nSize) )		return "";

        	if( sOrg.length < nSize )
        		return sOrg;
        	else
        		return sOrg.substr(sOrg.length-nSize, nSize);
        }

        /**
        * 문자열의 문자 개수 가져옴
        * @param : sOrg 	- 원본 문자열
        * @param : sCnt 	- Count 대상 문자
        * @return : Integer
        * @example : utlf_Count(sOrg, 2);
        */
        this.utlf_Count = function(sOrg, sCnt)
        {
        	var i, sRet="";
        	var nCnt = 0;

        	if( this.utlf_IsNull(sOrg) || this.utlf_IsNull(sCnt) )		return -1;

        	for( i = 0 ; i < sOrg.length ; i += sCnt.length )
        	{
        		if( sOrg.substr(i, sCnt.length) == sCnt )
        			nCnt++;
        	}

        	return nCnt;
        }

        /**
        * 문자열의 전체 길이 계산(한글,한자:2 / 나머지 1)
        * @param : sVal 	- 입력받은 문자열
        * @return : Integer
        * @example : utlf_LenB(sVal);
        */
        this.utlf_LenB = function(sVal)
        {
        	var len = 0;

        	if( this.utlf_IsNull(sVal) ) 	return -1;

            for (i=0; i<sVal.length; i++)
            {
        			if (sVal.charCodeAt(i) > 127)
        				len += 3;
        			else
        				len += 1;
            }
        	return len;
        }

        /**
        * 문자열의 전체 길이 계산(한글,한자:2 / 나머지 1)
        * @param : sVal 	- 입력받은 문자열
        * @return : Integer
        * @example : utlf_Len(sVal);
        */
        this.utlf_Len = function(sVal)
        {
        	var len = 0;

        	if( this.utlf_IsNull(sVal) ) 	return -1;

            for (i=0; i<sVal.length; i++)
            {
        		len += 1;
            }
        	return len;
        }

        /**
        * 숫자형식 여부 확인
        * @param : sNum 	- 숫자형식 확인 대상 문자열
        * @return : true/false
        * @example : utlf_IsNum(sNum);
        */
        this.utlf_IsNum = function(sNum)
        {
        	var c;
        	var point_cnt=0;
        	var ret=true;

        	if( this.utlf_IsNull(sNum) )		return false;

        	for( i = 0 ; i < sNum.length ; i++ )
        	{
        		c = sNum.charAt(i);
        		if( i == 0 && ( c == "+" || c == "-" ) );
        		else if( c >= "0" && c <= "9" );
        		else if( c == "." )
        		{
        			point_cnt++;
        			if( point_cnt > 1 )
        			{
        				ret = false;
        				break;
        			}
        		}
        		else
        		{
        			ret = false;
        			break;
        		}
        	}

        	return ret;
        }

        /**
        * 날짜 형시 여부 체크
        * @param : sDate 	- yyyyMMdd형태의 날짜
        * @return : true/false
        * @example : utlf_LastDateNum("20100501");
        */
        this.utlf_IsDate = function(sDate)
        {
        	if( this.utlf_IsNull(sDate) )		return false;

        	if( sDate.length != 8 )
        		return false;

        	if( this.utlf_IsNum(sDate) != true )
        		return false;

        	if(sDate.substring(0, 4) == '0000') return false;

        	var nMonth  = parseInt(sDate.substring(4,6), 10);
        	var nDate  = parseInt(sDate.substring(6,8), 10);

        	if( nMonth < 1 || nMonth > 12 )
        		return false;

        	if( nDate < 1 || nDate > this.utlf_LastDateNum(sDate) )
        		return false;

        	return true;
        }

        /**
        * 해당월의 마지막 날짜
        * @param : sDate 	- yyyyMMdd 형태의 날짜
        * @return : integer
        * @example : utlf_LastDateNum("20100501");
        */
        this.utlf_LastDateNum = function(sDate)
        {
        	var nMonth, nLastDate;

        	if( this.utlf_IsNull(sDate) )		return -1;

        	nMonth = parseInt(sDate.substr(4,2), 10);
        	if( nMonth == 1 || nMonth == 3 || nMonth == 5 || nMonth == 7  || nMonth == 8 || nMonth == 10 || nMonth == 12 )
        		nLastDate = 31;
        	else if( nMonth == 2 )
        	{
        		if( this.utlf_IsLeapYear(sDate) == true )
        			nLastDate = 29;
        		else
        			nLastDate = 28;
        	}
        	else
        		nLastDate = 30;

        	return nLastDate;
        }

        /**
        * 윤년여부 확인
        * @param : sDate 	- yyyyMMdd형태의 날짜
        * @return : true/false
        * @example : utlf_IsLeapYear("20100501");
        */
        this.utlf_IsLeapYear = function(sDate)
        {
        	var ret;
        	var nY;

        	if( this.utlf_IsNull(sDate) )		return false;

        	nY = parseInt(sDate.substring(0,4), 10);

        	if ((nY % 4) == 0)
        	{
        		if ((nY % 100) != 0 || (nY % 400) == 0)
        			ret = true;
        		else
        		ret = false;
        	}
        	else
        		ret = false;

        	return ret;
        }

        /**
        * Null에 해당하는 값 체크.
        * @param : sValue - Null 확인 밗
        * @return : true/false
        * @example : utlf_IsNull(sValue);
        */
        this.utlf_IsNull = function(sValue)
        {
        	if( new String(sValue).valueOf() == "undefined")
        		return true;
        	if( sValue == null )
        		return true;
        	if( ("x"+sValue == "xNaN") && ( new String(sValue.length).valueOf() == "undefined" ) )
        		return true;
        	if( sValue.length == 0 )
        		return true;
        	return false;
        }
        /**
        * 주민번호 확인
        * @param : sValue	 - 입력된 주민등록번호
        * @return : true/false
        * @example : utlf_IsRsrNo(sValue);
        */
        this.utlf_IsRsrNo = function(sValue)
        {
        	if( this.utlf_IsNull(sValue) )	return false;

        	var v_JuminNo = this.utlf_Replace(sValue, "-", "");
        	var v_JuminChkDgt = [2,3,4,5,6,7,8,9,2,3,4,5];
        	var v_FNum = new Number();
        	var v_LNum = new Number();
        	var v_iSum = new Number();
        	var v_RtnVal;
        	var v_YY;

        	if(v_JuminNo.length != 13)
        		return false;

        	v_FNum = v_JuminNo.substr(0, 6).toString();
        	v_LNum = v_JuminNo.substr(6).toString();

        	if (v_LNum.substr(0,1) == '1' ||  v_LNum.substr(0,1) == '2' || v_LNum.substr(0,1) == '5' || v_LNum.substr(0,1) == '6')
        			v_YY  = '19';
        	else if (v_LNum.substr(0,1) == '3' ||  v_LNum.substr(0,1) == '4' || v_LNum.substr(0,1) == '7' || v_LNum.substr(0,1) == '8')
        			v_YY  = '20';
        	else
        	return false;

        	if(this.utlf_IsDate(v_YY + v_FNum) == false)
        	return false;

        	if (this.utlf_IsNum(v_JuminNo) == false)
        	return false;

        	for ( ix = 0; ix < 12 ; ix++)
        		v_iSum += (parseInt(v_JuminNo.substr(ix, 1)) * v_JuminChkDgt[ix]);

        	v_iSum = 11 - (v_iSum%11);
        	v_iSum = v_iSum % 10;
        	if (v_iSum != (parseInt(v_JuminNo.substr(12, 1))))
        		return false;

        	return true;
        }

        /*******************************************************************************
         ★ 설명
            법인 등록번호 확인
         ★ parameter
            sValue : 법인 등록 번호
         ★ return
            - sValue가 법인등록번호 형식에 맞는 경우 = true
            - sValue가 법인등록번호 형식에 맞지 않는 경우 = false
        ******************************************************************************/
        this.utlf_IsCorpRegNo = function(sValue)
        {
            var arr_regno  = sValue.split("");
            var arr_wt   = new Array(1,2,1,2,1,2,1,2,1,2,1,2);
            var iSum_regno  = 0;
            var iCheck_digit = 0;

            if (sValue.length != 13){
                return false;
            }

            for (i = 0; i < 12; i++){
                iSum_regno +=  eval(arr_regno[i]) * eval(arr_wt[i]);
            }

            iCheck_digit = 10 - (iSum_regno % 10);
            iCheck_digit = iCheck_digit % 10;

            if (iCheck_digit != arr_regno[12]){
                return false;
            }
            return true;
        }



        /**
        * 외국인번호 확인
        * @param : sValue    - 입력된 외국인등록번호
        * @return : true/false
        * @example : utlf_IsForeignNo(sValue);
        */
        this.utlf_IsForeignNo = function(sValue)
        {
            var sum = 0;
            var odd = 0;

            if (sValue.length != 13) {
                return false;
            }

            buf = Array(13);
            for (i = 0; i < 13; i++) buf[i] = parseInt(sValue.charAt(i));

            if (buf[6] != 5 && buf[6] != 6 && buf[6] != 7 && buf[6] != 8) {
                return false;
            }

            odd = buf[7] * 10 + buf[8];

            if (odd % 2 != 0) {
              return false;
            }

            for (i = 0, sum = 0; i < 12; i++) {
                sum += buf[i] * ((i % 8) +2);
            }

            sum = (11 - (sum % 11)) % 10 + 2;

            if ( sum != buf[12]) {
                return false;
            } else {
                return true;
            }
        }

        /**
        * 날짜 형시 여부 체크
        * @param : sDate 	- yyyyMMdd형태의 날짜
        * @return : true/false
        * @example : utlf_LastDateNum("20100501");
        */
        this.utlf_IsDate = function(sDate)
        {
        	if( this.utlf_IsNull(sDate) )		return false;

        	if( sDate.length != 8 )
        		return false;

        	if( this.utlf_IsNum(sDate) != true )
        		return false;

        	if(sDate.substring(0, 4) == '0000') return false;

        	var nMonth  = parseInt(sDate.substring(4,6), 10);
        	var nDate  = parseInt(sDate.substring(6,8), 10);

        	if( nMonth < 1 || nMonth > 12 )
        		return false;

        	if( nDate < 1 || nDate > this.utlf_LastDateNum(sDate) )
        		return false;

        	return true;
        }

        /**
        * Check 대상 Value가 Null일 경우 지정된 값으로 대체
        * @param : sVal	- Null Check 대상 Value
        * @param sRepVal	- Null일 경우 대체 Value
        * @return : N/A
        * @example : utlf_nvl(sVal, sRepVal)
        */
        this.utlf_nvl = function(sVal, sRepVal)
        {
            if (this.utlf_IsNull(sVal)) return sRepVal;
            else return sVal;
        }
        //email chk
        this.utlf_isEmail = function (email){
        	var regExp = /[a-z0-9-_]{2,}@[a-z0-9-]{2,}.[a-z0-9]{2,}/i;
        	return regExp.test(email);
        }
        //특수문자 여부
        this.utlf_specialPattern = function(str)
        {
        	//var special_pattern = /[`~!@#$%^&*_+<>|{}\\\'\";:\/?\u3400-\u9FBF]/gi;
        	var special_pattern = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|\.\(\)\ ]+$/;
        	if( special_pattern.test(str) == false ){
        		//alert('특수문자는 사용할 수 없습니다.');
        		return false;
        	}
        	return true;
        }

        this.utlf_isMobile = function(phoneNum)
        {
        	if(this.utlf_IsNull(phoneNum)) return true;
        	var regExp =/(01[016789])([1-9]{1}[0-9]{2,3})([0-9]{4})$/;
        	var myArray;
        	if(regExp.test(phoneNum)){
        		myArray = regExp.exec(phoneNum);
        		return true;
        	} else {
        		return false;
        	}
        }

        //날자계산
        //윤달 계산
        this.utlf_f_leapyear = function(yy) {
            if (yy % 4 == 0 && yy % 100 != 0 || yy % 400 == 0)
                return 1;
            else
                return 0;
        }

        // Check how many days there are on the inputted year and month
        // 년과 달을 입력하면, 한달에 몇일이 있는지 확인하는 함수입니다.
        this.utlf_f_dayofmonth = function(yy, mm) {
            switch (mm) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                return 31;
            case 4:
            case 6:
            case 9:
            case 11:
                return 30;
            case 2:
                return 28 + this.utlf_f_leapyear(yy);
            }
        }

        this.utlf_day_cal = function(yy, mm, dd) { //해당년도만의 일수 계산
            var tot = 0;
            for (var i = 1; i < mm; i++) {
                tot += this.utlf_f_dayofmonth(yy, i);
            }
            return tot + dd;
        }

        this.utlf_dateDiff = function(val1, val2) { //날짜 일수 계산
        trace(val1);
        trace(val2);
            var sdate_year = Number(val1.substring(0, 4));
            var sdate_month = Number(val1.substring(4, 6));
            var sdate_day = Number(val1.substring(6, 8));
            var edate_year = Number(val2.substring(0, 4));
            var edate_month = Number(val2.substring(4, 6));
            var edate_day = Number(val2.substring(6, 8));
            var year_result = edate_year - sdate_year;

            var tot = 0;
            tot += year_result * 365; //년도 차이 일수 계산
            tot += -this.utlf_day_cal(sdate_year, sdate_month, sdate_day) + 1; //시작 날짜 일수 계산
            tot += this.utlf_day_cal(edate_year, edate_month, edate_day); //종료 날짜 일수 계산

            return tot;
        }

        //날자 비교
        // this.utlf_dateDiff = function(_date1, _date2) {
        //     var diffDate_1 = _date1 instanceof Date ? _date1 : new Date(_date1);
        //     var diffDate_2 = _date2 instanceof Date ? _date2 : new Date(_date2);
        //     diffDate_1 = new Date(diffDate_1.getFullYear(), diffDate_1.getMonth()+1, diffDate_1.getDate());
        //     diffDate_2 = new Date(diffDate_2.getFullYear(), diffDate_2.getMonth()+1, diffDate_2.getDate());
        //     var diff = Math.abs(diffDate_2.getTime() - diffDate_1.getTime());
        //     diff = Math.ceil(diff / (1000 * 3600 * 24));
        //     return diff;
        // }
        //date 변환
        this.utlf_toDate =function (date_str)
        {
            var yyyyMMdd = String(date_str);
            var sYear = yyyyMMdd.substring(0,4);
            var sMonth = yyyyMMdd.substring(4,6);
            var sDate = yyyyMMdd.substring(6,8);

            return new Date(Number(sYear), Number(sMonth)-1, Number(sDate));
        }

        //ERR POPUP
        this.utlf_err_pop = function(ds){
        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("error_pop"
        	                  , 0
        					  , 0
        					  , 600
        					  , 520
        					  , null
        					  , null
        					  , "CM::CMErrorView.xfdl");
        	objChildFrame.set_showtitlebar(false);
        	objChildFrame.set_dragmovetype("all");
        	objChildFrame.set_openalign("center middle");
        	objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)")
        	var objParam = {param1:ds};
        	objChildFrame.showModal(this.getOwnerFrame()
        	                      , objParam
        						  , this
        						  , null);
        }

        //제출 ERR POPUP
        this.utlf_err_pop1 = function(ds){
        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("error_pop"
        	                  , 0
        					  , 0
        					  , 600
        					  , 520
        					  , null
        					  , null
        					  , "CM::CMErrorView1.xfdl");
        	objChildFrame.set_showtitlebar(false);
        	objChildFrame.set_dragmovetype("all");
        	objChildFrame.set_openalign("center middle");
        	objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)")
        	var objParam = {param1:ds};
        	objChildFrame.showModal(this.getOwnerFrame()
        	                      , objParam
        						  , this
        						  , null);
        }

        this.utlf_setErr = function(dsErr, str, errkind) {
        	var nRow = dsErr.addRow();
        	dsErr.setColumn(nRow,"ERRDESC",str);
        	dsErr.setColumn(nRow,"ERRKINDCD",errkind); // 1확인 2오류
        }

        /**
         *   today_yyyyMMdd 포맷으로 반환
         */
        this.utlf_getFormatDate  = function(){
        	var date = new Date();
            var year = date.getFullYear();              //yyyy
            var month = (1 + date.getMonth());          //M
            month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
            var day = date.getDate();                   //d
            day = day >= 10 ? day : '0' + day;          //day 두자리로 저장
            return  year + '_' + month + '_' + day;       //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
        }

        this.utlf_setSessionSCHORGCD = function(SCHCD,ORGCD){
        	var objApp 		= nexacro.getApplication();
        	var strParam = "";
        	strParam += "SCHCD=" +SCHCD+ "ª";
        	strParam += "ORGCD=" +ORGCD+ "ª";
        	dsParamSetArrowBlank(nexacro.getApplication().gds_param, strParam);
        }

        this.utlf_getSessionSCHORGCD = function(){
        	var schorgcd = "";
        	var schcd = nexacro.getApplication().gds_param.getColumn(0, "SCHCD")
        	var orgcd = nexacro.getApplication().gds_param.getColumn(0, "ORGCD");
        	if(schcd && orgcd) schorgcd = schcd+""+orgcd;
        	return schorgcd;
        }

        // 학교정보 새로고침
        this.utlf_refreshGdsSchoolInfo = function(SURVKINDCD){
        	var mForm = nexacro.getApplication().mainframe.fullFrame.form;
        	var schCb = mForm.div_header.form.div_work.form.sel_schooNm;
        	var schCbIdx = schCb.index;
        	mForm.selectChgSchool(SURVKINDCD);
        	schCb.set_index(schCbIdx);
        	mForm.sel_schooNm_onitemchanged(schCb);
        }
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
