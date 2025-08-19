(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Top_Menu");
            this.set_titletext("Form_Top_Menu");
            this.set_cssclass("list_2depth");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,1410);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("menuTree", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize


            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1200,1410,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Top_Menu.xfdl", function() {
        /*	메뉴 컴포넌트 id,name 명명 규칙
        *	'1depth 목록 Button'의 name 	->  'btn_' 		+ 	MENUID		ex) btn_m-01
        *	'2depth 목록 Div'의 name 	->  	'div_'		+ 	MENUID		ex) div_m-01
        *	'2depth 목록 Button'의 name 	->  'btn_' 		+ 	MENUID		ex) btn_m-01-01
        *	'3depth 목록 Div'의 name 	->  	'div_'  	+ 	MENUID		ex) div_m-04-06
        *	'3depth 목록 Button'의 name 	->  'btn_' 		+ 	MENUID		ex) btn_m-04-06-01
        */

        var selctGnb1d = "";		//마지막 클릭한 gnb 1depth code
        var selctGnb2d = "";		//마지막 클릭한 gnb 2depth code
        var selctGnb3d = "";		//마지막 클릭한 gnb 3depth code
        var selctGnb1dName = "";	//마지막 클릭한 gnb 1depth name
        var selctGnb2dName = "";	//마지막 클릭한 gnb 2depth name
        var selctGnb3dName = "";	//마지막 클릭한 gnb 3depth name

        this.Form_Top_Menu_onload = function(obj,e)
        {

        	var ds_menu = nexacro.getApplication().gds_top_menu;
        	ds_menu.set_keystring( "S:MENULEVEL+MENUORDER");

        	var cnt =1;
        	for(var i=0; i < ds_menu.getRowCount(); i++){
        		var gnb_MENULEVEL = ds_menu.getColumn(i, "MENULEVEL");
        		var gnb_PAGEURL = ds_menu.getColumn(i, "PAGEURL");

        		if(gnb_MENULEVEL == 0){
        			if(gnb_PAGEURL == null ||  gnb_PAGEURL == '' || gnb_PAGEURL == '<null>'){

        				var new_div_gnb_2d = new Div();
        				var new_menu_nm = ds_menu.getColumn(i, "MENUNM");
        				var new_menu_id = ds_menu.getColumn(i, "MENUID");
        				var new_menu_css = ds_menu.getColumn(i, "CSSCLASSNO")

        				/*
        				var vTop = 1000;
        				var vHeight = 0;
        				var vLeft = 1000;
        				var vWidth = 220;
        				*/

        				cnt++;
        				var vTop = 0;
        				var vHeight =1000;
        				var vLeft = cnt*220;
        				var vWidth = 220;


        				new_div_gnb_2d.init( 'div_' + new_menu_id , vLeft, vTop , vWidth, vHeight );
        				new_div_gnb_2d.set_cssclass('listInner' + new_menu_css);
        				new_div_gnb_2d.set_formscrolltype("none");
        				//new_div_gnb_2d.set_text(new_menu_nm);
        				this.addChild('div_' + new_menu_id, new_div_gnb_2d);
        				new_div_gnb_2d.show();
        				//new_div_gnb_2d.set_enable(false);
        				//new_div_gnb_2d.set_visible(false);

        				if(this.menuTree.colcount <= 0){
        					this.menuTree.addColumn("0","STRING");
        				}
        				var newRow = this.menuTree.addRow();
        				this.menuTree.setColumn( newRow, "0", 'div_' + new_menu_id);
        			}
        		}else if(gnb_MENULEVEL == 1){

        			var new_btn_gnb_2d = new Button();
        			var new_up_menu_id = ds_menu.getColumn(i, "UPMENUID");
        			var new_menu_nm = ds_menu.getColumn(i, "MENUNM");
        			var new_menu_id = ds_menu.getColumn(i, "MENUID");
        			var new_menu_css = ds_menu.getColumn(i, "CSSCLASSNO");

        			var vTop = 0;
        			var vHeight = 30;
        			var vLeft = 50; //0;
        			var vWidth = 120; //220;

        			new_btn_gnb_2d.init( 'btn_' + new_menu_id , vLeft, vTop , vWidth, vHeight );
        			new_btn_gnb_2d.set_cssclass('list_2depth' + new_menu_css);
        			new_btn_gnb_2d.set_text(new_menu_nm);
        			new_btn_gnb_2d.set_textAlign('center');

        			/*임시 2021-01-22 아이디별 권한제한
        			var objApp 		= nexacro.getApplication();

        			if(new_menu_id=="m-04-03" || new_menu_id=="m-04-04" || new_menu_id=="m-04-05" || new_menu_id=="m-04-06" || new_menu_id=="m-04-07" || new_menu_id=="m-04-08" || new_menu_id=="m-04-09" || new_menu_id=="m-04-10" || new_menu_id=="m-04-11" || new_menu_id=="m-04-12" || new_menu_id=="m-04-13" || new_menu_id=="m-04-14"){
        				if(objApp.gds_login_info.getColumn(0, "USERID") == 'ssgroup1227@kedi.re.kr' || objApp.gds_login_info.getColumn(0, "USERID") == 'yapplus@kedi.re.kr' || objApp.gds_login_info.getColumn(0, "USERID") == 'yapplus@hanmail.net' || objApp.gds_login_info.getColumn(0, "USERID") == 'kim487good@kedi.re.kr' || objApp.gds_login_info.getColumn(0, "USERID") == 'kim487apple@naver.com' || objApp.gds_login_info.getColumn(0, "USERID") == 'tnwls96122@kedi.re.kr' || objApp.gds_login_info.getColumn(0, "USERID") == 'tnwls96122@naver.com' || objApp.gds_login_info.getColumn(0, "USERID") == 'nosangtae@kedi.re.kr'){
        				//if(objApp.gds_login_info.getColumn(0, "USERID") == 'ssgroup1227@kedi.re.kr'){
        					this.all['div_' + new_up_menu_id].form.addChild('btn_' + new_menu_id, new_btn_gnb_2d);
        				}
        				//학과담당자 테스트 아이디 등록
        				if(objApp.gds_login_info.getColumn(0, "USERID") == 'swiss@kedi.re.kr'||objApp.gds_login_info.getColumn(0, "USERID") == 'yzwind@naver.com'){
        					this.all['div_' + new_up_menu_id].form.addChild('btn_' + new_menu_id, new_btn_gnb_2d);
        				}

        			}else{
        				this.all['div_' + new_up_menu_id].form.addChild('btn_' + new_menu_id, new_btn_gnb_2d);
        			}
        			*/
            		/* 기존 */
            		this.all['div_' + new_up_menu_id].form.addChild('btn_' + new_menu_id, new_btn_gnb_2d); //임시주석처리
        			new_btn_gnb_2d.show();


        			if(gnb_PAGEURL == null ||  gnb_PAGEURL == '' || gnb_PAGEURL == '<null>'){

        				var new_div_gnb_3d = new Div();


        				var vTop__ = 0;
        				var vHeight__ = 150;
        				var vLeft__ = 50; //0;
        				var vWidth__ = 120; //220;

        				new_div_gnb_3d.init( 'div_' + new_menu_id , vLeft__, vTop__ , vWidth__, vHeight__ );
        				new_div_gnb_3d.set_cssclass('list_3depth_div');
        				new_div_gnb_3d.set_formscrolltype("none");
        				this.all['div_' + new_up_menu_id].form.addChild('div_' + new_menu_id, new_div_gnb_3d);
        				new_div_gnb_3d.show();

        				if(this.menuTree.colcount <= 1){
        					this.menuTree.addColumn("1","STRING");
        				}
        				var newRow = this.menuTree.addRow();
        				this.menuTree.setColumn( newRow, "0",'div_' +  new_up_menu_id);
        				this.menuTree.setColumn( newRow, "1", 'div_' + new_menu_id);
        			}
        		}else if(gnb_MENULEVEL == 2){
        			var new_btn_gnb_3d = new Button();
        			var new_up_menu_id = ds_menu.getColumn(i, "UPMENUID");
        			var new_menu_nm = ds_menu.getColumn(i, "MENUNM");
        			var new_menu_id = ds_menu.getColumn(i, "MENUID");
        			var new_menu_css = ds_menu.getColumn(i, "CSSCLASSNO")

        			var vTop = 0;
        			var vHeight = 30;
        			var vLeft = 0;
        			var vWidth = 120; //220;

        			new_btn_gnb_3d.init( 'btn_' + new_menu_id , vLeft, vTop , vWidth, vHeight );
        			new_btn_gnb_3d.set_cssclass('list_3depth');
        			new_btn_gnb_3d.set_text(new_menu_nm);
        			new_btn_gnb_3d.set_textAlign('center');

        			var upRow = this.menuTree.findRow( "1" ,'div_' +  new_up_menu_id );


        			var __1dDivId =this.menuTree.getColumn(upRow,"0");
        			var __2dDivId =this.menuTree.getColumn(upRow,"1");

        			this.all[__1dDivId].form.all[__2dDivId].form.addChild('btn_' + new_menu_id, new_btn_gnb_3d);
        			new_btn_gnb_3d.show();
        		}
        	}



        	/*	gnb 2depth 초기화
        	*/
        	var cpntList = this.all;
        	for(var i = 0; i < cpntList.length;i++){
        		if(cpntList[i] instanceof Div ){
        			var dtlCpntList = cpntList[i].form.all;

        			//gnb 2depth 메뉴 닫기 이벤트 등록
        			//cpntList[i].addEventHandler("onmouseleave", this.gnb2DOnmouseleave, this);
        			//cpntList[i].addEventHandler("onkillfocus", this.gnb2DOnkillfocus, this);

        			cpntList[i].addEventHandler("onmouseleave", this.gnb2DOnmouseleave, this);
        			cpntList[i].addEventHandler("onclick", this.gnb2DOnkillfocus, this);


        			for(var j = 0; j < dtlCpntList.length; j++){
        				if(dtlCpntList[j] instanceof Div){
        					dtlCpntList[j].set_height(0 + "");
        					//dtlCpntList[j].addEventHandler("onmouseleave", this.gnb3DOnmouseleave, this);
        					dtlCpntList[j].addEventHandler("onclick", this.gnb3DOnmouseleave, this);
        					var dtl2CpntList = dtlCpntList[j].form.all;
        					for(var k = 0; k < dtl2CpntList.length; k++){
        						if(k==0){
        							dtl2CpntList[k].set_top(0);
        						}else{
        							dtl2CpntList[k].set_top(dtl2CpntList[k-1].name+":0");
        						}

        						dtl2CpntList[k].addEventHandler("onclick", this.gotoContent, this);
        					}

        				}else if(dtlCpntList[j] instanceof Button){
        					dtlCpntList[j].addEventHandler("onclick", this.menuButtonOnclick, this);
        					//dtlCpntList[j].addEventHandler("onmouseenter", this.menuButtonOnmouseenter, this);

        					var _is2depth = true;
        					var cnt =0;
        					for(var k = 0; k < dtlCpntList.length; k++){
        						if(dtlCpntList[k].name == "div_" + dtlCpntList[j].name.substring(4)){
        							_is2depth = false;
        							dtlCpntList[j].set_text(dtlCpntList[j].text + '▽'); // ∨
        							break;
        						}
        					}
        					if(_is2depth){
        						dtlCpntList[j].addEventHandler("onclick", this.gotoContent, this);
        					}
        				}
        			}
        			this.gnb2DInit(cpntList[i]);
        		}
        	}

        };

        /* gnb 2depth 이벤트 3depth 열기
        */
        this.menuButtonOnclick = function(obj,e)
        {
        	var _2DList = obj.parent.all;
        	selctGnb2d = obj.name.substring(4);
        	selctGnb2dName = obj.text;

        	var gnb3depthNo = true;
        	for(var i =0 ; i < _2DList.length; i++){
        		if(_2DList[i].name == "div_" + obj.name.substring(4)){
        			var _3DDiv = _2DList[i];
        			if(_3DDiv instanceof Div){
        				if(_3DDiv.height != 0){
        					//_3DDiv.set_height(0 + "");
        				}else{
        					this.set3depthMaxHeight(_3DDiv);
        				}
        				this.gnb2DInit(null,_3DDiv);
        				gnb3depthNo = false;
        				break;
        			}
        		}
        	}

        	if(gnb3depthNo){
        		//this.gotoContent(obj,e);
        		this.gnb2DInit(obj.parent.parent);
        	}

        };

        this.form_ontimer = function(obj, e)
        {
           this.killTimer(e.timerid);
           if(e.timerid==1)
           {
              this.menuButtonOnmouseenter_timer(menuButtonOnmouseenterObj);
              this.killTimer(e.timerid);
            }
        }

        var menuButtonOnmouseenterObj;


        this.menuButtonOnmouseenter = function(obj,e){
           menuButtonOnmouseenterObj = obj;

           this.setTimer(1, 500);
        }


        this.menuButtonOnmouseenter_timer = function(obj,e){

        	var _2DList = obj.parent.all;
        	selctGnb2d = obj.name.substring(4);
        	selctGnb2dName = obj.text;

        	var gnb3depthNo = true;
        	for(var i =0 ; i < _2DList.length; i++){
        		if(_2DList[i].name == "div_" + obj.name.substring(4)){
        			var _3DDiv = _2DList[i];
        			if(_3DDiv instanceof Div){
        				if(_3DDiv.height != 0){
        					//_3DDiv.set_height(0 + "");
        				}else{
        					this.set3depthMaxHeight(_3DDiv);
        				}
        				this.gnb2DInit(null,_3DDiv);
        				gnb3depthNo = false;
        				break;
        			}
        		}
        	}

        	if(gnb3depthNo){
        		//this.gotoContent(obj,e);
        		this.gnb2DInit(obj.parent.parent);
        	}
        }





        /*	gnb 3depth 높이 변경
        *	cpnt : 3depth div
        */
        this.set3depthMaxHeight = function(cpnt)
        {
        	cpnt.set_height((cpnt.form.all.length*30 + 15)  + "");
        };


        /*	gnb 2depth 초기화함수
        *	gnb2DInit(div) -> cpnt2D_div  3depth 메뉴 닫기 및 2depth div 높이 변경
        *	gnb2DInit(null,div) -> cpnt2D_div  3depth 메뉴 닫기, 선택된 3depth 메뉴 열기 및 2depth div 높이 변경
        *	cpnt2D_div : 2depth div
        *	cpnt3D_div : 3depth div
        */
        this.gnb2DInit = function(cpnt2D_div,cpnt3D_div){
        	var dtlCpntList;
        	if(cpnt3D_div != null){
        		dtlCpntList = cpnt3D_div.parent.all;
        		cpnt2D_div = cpnt3D_div.parent.parent;
        		for(var j = 0; j < dtlCpntList.length; j++){
        			if(dtlCpntList[j] instanceof Div){
        				if(cpnt3D_div.name != dtlCpntList[j].name){
        					dtlCpntList[j].set_height(0 + "");
        				}
        			}
        		}
        	}else{
        		dtlCpntList = cpnt2D_div.form.all;
        		for(var j = 0; j < dtlCpntList.length; j++){
        			if(dtlCpntList[j] instanceof Div){
        				dtlCpntList[j].set_height(0 + "");
        			}
        		}
        	}

        	var cpnt2D_div_height = 26;
        	for(var j = 0; j < dtlCpntList.length; j++){
        		if(j==0)
        		{
        			dtlCpntList[j].set_top("26px");
        		}else
        		{
        			dtlCpntList[j].set_top(dtlCpntList[j-1].name+":0");
        		}
        		cpnt2D_div_height += nexacro.toNumber(dtlCpntList[j].height,0);

        	}

        	cpnt2D_div.set_height(cpnt2D_div_height + 34 + "");

        	if(cpnt3D_div != null){
        		open2DepthGnbH(cpnt2D_div_height + 34 + "");
        	}
        }

        /*	gnb 선택 이벤트
        */
        this.gotoContent = function(obj,e)
        {
        	this.selectSessionChk();
        	var objApp = nexacro.getApplication();
        	var chk = objApp.gds_login_info.getColumn(0, "LOGIN_YN");	// 로그인 여부
        	if(chk != "Y"){
        		//this.fn_initPage("FrameBase::Form_main.xfdl");
        		this.alert("사용시간이 경과 되었습니다. 로그인 후 사용 하시기 바랍니다.");
        		// window.location.href=nexacro.getEnvironment().services["svcBaseUrl"].url;
        		// this.fn_goPage("HP::hp10m00.xfdl");
        		window.location.href=nexacro.getEnvironment().services["svcBaseUrl"].url;
        		return;
        	}

        	var upRow;
        	if(obj.cssclass.indexOf("list_2depth")==-1){
        		selctGnb3d = obj.name.substring(4);
        		selctGnb3dName = obj.text;

        		selctGnb1d = obj.parent.parent.parent.parent.name.substr(4);
        		upRow = nexacro.getApplication().gds_top_menu.findRow( "MENUID" ,  selctGnb1d);
        		selctGnb1dName = nexacro.getApplication().gds_top_menu.getColumn(upRow,"MENUNM");
        	}else{
        		selctGnb2d = obj.name.substring(4);
        		selctGnb2dName = obj.text;
        		selctGnb3d = "";
        		selctGnb3dName = "";

        		selctGnb1d = obj.parent.parent.name.substr(4);
        		upRow = nexacro.getApplication().gds_top_menu.findRow( "MENUID" ,  selctGnb1d);
        		selctGnb1dName = nexacro.getApplication().gds_top_menu.getColumn(upRow,"MENUNM");

        	}

        	selctGnb1d = obj.parent.parent.name.substr(4,4);

        	upRow = nexacro.getApplication().gds_top_menu.findRow( "MENUID" ,  selctGnb1d);

        	selctGnb1dName = nexacro.getApplication().gds_top_menu.getColumn(upRow,"MENUNM");

        	if(gnb_1d != selctGnb1d){
        		if(selctGnb1d == "m-02"){
        			objApp.gds_param.setColumn(0,"SURVKINDCD","GP");
        			this.selectChgSchool("GP");
        		}else if(selctGnb1d == "m-03"){
        			objApp.gds_param.setColumn(0,"SURVKINDCD","FP");
        			this.selectChgSchool("FP");
        		}else if(selctGnb1d == "m-04"){
        			objApp.gds_param.setColumn(0,"SURVKINDCD","AG");
        			this.selectChgSchool("AG");
        		}else{
        			objApp.gds_param.setColumn(0,"SURVKINDCD","AG");
        			this.selectChgSchool("AG");
        		}
        	}
        	//alert("gnb_1d:"+gnb_1d+"  selctGnb1d:"+selctGnb1d);
        	gnb_1d  = selctGnb1d;
        	gnb_2d  = selctGnb2d;
        	gnb_3d  = selctGnb3d;
        	gnb_1d_name = selctGnb1dName;
        	gnb_2d_name = selctGnb2dName;
        	gnb_3d_name = selctGnb3dName;

        	openContent();
        	this.menuSelectReset();
        };


        /*	gnb 2depth 메뉴에서 마우스 벗어날경우
        */
        this.gnb2DOnmouseleave = function(obj,e)
        {
        	if(e.fromobject.name == obj.name ){
        		close2DepthGnb();
        	}
        };

        /*	gnb 2depth 메뉴에서 포커스가 벗어날경우
        */
        this.gnb2DOnkillfocus = function(obj,e)
        {
        	if(e.fromobject.name == obj.name ){
        		close2DepthGnb();
        	}
        };

        /*	gnb 3depth 메뉴에서 마우스 벗어날경우
        */
        this.gnb3DOnmouseleave = function(obj,e)
        {
        	if(e.fromobject.name == obj.name ){

        		var upRow = this.menuTree.findRow( "1" , obj.name );
        		var __1dDivId =this.menuTree.getColumn(upRow,"0");
        		this.gnb2DInit(this.all[__1dDivId]);
        	}
        };



        this.menuSelectReset = function(){

        	/*	gnb 2depth 초기화
        	*/
        	var cpntList = this.all;
        	for(var i = 0; i < cpntList.length;i++){
        		if(cpntList[i] instanceof Div ){
        			var dtlCpntList = cpntList[i].form.all;

        			for(var j = 0; j < dtlCpntList.length; j++){
        				if(dtlCpntList[j] instanceof Div){
        					var dtl2CpntList = dtlCpntList[j].form.all;
        					for(var k = 0; k < dtl2CpntList.length; k++){
        						if(dtl2CpntList[k] instanceof Button){
        							if(gnb_3d == ""){
        								dtl2CpntList[k].setSelectStatus(false);
        								continue;
        							}
        							if(dtl2CpntList[k].name == "btn_" + gnb_3d ){
        								dtl2CpntList[k].setSelectStatus(true);
        							}else{
        								dtl2CpntList[k].setSelectStatus(false);
        							}

        						}

        					}

        				}else if(dtlCpntList[j] instanceof Button){
        					if(dtlCpntList[j].name == "btn_"  + gnb_2d ){
        						dtlCpntList[j].setSelectStatus(true);
        					}else{
        						dtlCpntList[j].setSelectStatus(false);
        					}
        				}
        			}
        		}
        	}

        }

        this.fnCallback = function(serviceID, errCD, errMSG){
        	var objApp = nexacro.getApplication();

        	if(errCD < 0){

        	}else{
        		if(serviceID == "selectSessionChk"){

        		}
        		if(serviceID == "selectChgSchool"){
        			var idx = 0;
        			if(objApp.gds_charge_school.findRowExpr("SCHCD == '"+objApp.gds_param.getColumn(0,"SCHCD")+"' && ORGCD == '"+objApp.gds_param.getColumn(0,"ORGCD")+"'",0) > -1) {
        				idx = objApp.gds_charge_school.findRowExpr("SCHCD == '"+objApp.gds_param.getColumn(0,"SCHCD")+"' && ORGCD == '"+objApp.gds_param.getColumn(0,"ORGCD")+"'",0);
        			}

        			objApp.gds_param.setColumn(0,"SURVSEQ"           ,objApp.gds_charge_school.getColumn(idx, "SURVSEQ"));
        			objApp.gds_param.setColumn(0,"SCHCD"             ,objApp.gds_charge_school.getColumn(idx, "SCHCD"));
        			objApp.gds_param.setColumn(0,"ORGCD"             ,objApp.gds_charge_school.getColumn(idx, "ORGCD"));
        			objApp.gds_param.setColumn(0,"SCHNM"             ,objApp.gds_charge_school.getColumn(idx, "SCHNM"));
        			objApp.gds_param.setColumn(0,"ORGNM"             ,objApp.gds_charge_school.getColumn(idx, "ORGNM"));
        			objApp.gds_param.setColumn(0,"SURVSTRTDT"        ,objApp.gds_charge_school.getColumn(idx, "SURVSTRTDT"));
        			objApp.gds_param.setColumn(0,"SURVENDDT"         ,objApp.gds_charge_school.getColumn(idx, "SURVENDDT"));
        			objApp.gds_param.setColumn(0,"SURVNM"            ,objApp.gds_charge_school.getColumn(idx, "SURVNM"));
        			objApp.gds_param.setColumn(0,"SURVOBJ"           ,objApp.gds_charge_school.getColumn(idx, "SURVOBJ"));
        			objApp.gds_param.setColumn(0,"TODATE"            ,objApp.gds_charge_school.getColumn(idx, "TODATE"));
        			objApp.gds_param.setColumn(0,"SURVPROSTATUSCD"   ,objApp.gds_charge_school.getColumn(idx, "SURVPROSTATUSCD"));
        			objApp.gds_param.setColumn(0,"SURVPROSTATUSCDNM" ,objApp.gds_charge_school.getColumn(idx, "SURVPROSTATUSCDNM"));
        			objApp.gds_param.setColumn(0,"SCHTEXT1"          ,objApp.gds_charge_school.getColumn(idx, "SCHTEXT1"));
        			objApp.gds_param.setColumn(0,"SCHTEXT2"          ,objApp.gds_charge_school.getColumn(idx, "SCHTEXT2"));
        			objApp.gds_param.setColumn(0,"SCHTEXT3"          ,objApp.gds_charge_school.getColumn(idx, "SCHTEXT3"));
        			objApp.gds_param.setColumn(0,"EVDDOCKIND"        ,objApp.gds_charge_school.getColumn(idx, "EVDDOCKIND"));
        			objApp.gds_param.setColumn(0,"CHGPSNYN"          ,objApp.gds_charge_school.getColumn(idx, "CHGPSNYN"));
        			objApp.gds_param.setColumn(0,"CHARGENM"          ,objApp.gds_charge_school.getColumn(idx, "CHARGENM"));
        			objApp.gds_param.setColumn(0,"OWNERNM"          ,objApp.gds_charge_school.getColumn(idx, "OWNERNM"));

        			var CHARGENM = "-";
        			if(objApp.gds_charge_school.rowcount > 0){
        				CHARGENM = objApp.gds_charge_school.getColumn(idx, "CHARGENM");
        				OWNERNM = objApp.gds_charge_school.getColumn(idx, "OWNERNM");
        			}
        			var chkUserGrpType = objApp.gds_login_info.getColumn(0,"USERGRPTYPE");

        			switch(chkUserGrpType){
        				case "6": //학과담당자
        					//alert("in 6");
        					setGnbNavi("[취업담당자] "+OWNERNM);
        					break;
        				default:
        					setGnbNavi("[KEDI담당자] "+CHARGENM);
        					break;
        			}
        		}
         	}
        }

        /* 로그인정보 가져오기 */
        this.selectSessionChk = function(){

        	this.gfnTransaction("selectSessionChk",
        						"swiss/cm/getSessionChk.do",
        						"",
        						"gds_login_info=dsLoginInfo",
        						"",
        						"fnCallback",
        						false);

        };

        /* 로그인사용자 학교정보 가져오기 */
        this.selectChgSchool = function(survGb){
        	var strParam = "";
        	var objApp = nexacro.getApplication();
        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='"+survGb+"'",0);

        	strParam += "SURVSEQ="		+ objApp.gds_login_info.getColumn(idx, "SURVSEQ")		+ "ª";
        	strParam += "SURVKINDCD="	+ objApp.gds_login_info.getColumn(idx, "SURVKINDCD")	+ "ª";
        	strParam += "USERID="		+ objApp.gds_login_info.getColumn(idx, "USERID") 		+ "ª";
        	strParam += "USERGRPTYPE="	+ objApp.gds_login_info.getColumn(idx, "USERGRPTYPE")	+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.gfnTransaction("selectChgSchool",
        						"swiss/cm/selectChgSchool.do",
        						"dsSearch=dsSearch",
        						"gds_charge_school=dsChgSchool",
        						"",
        						"fnCallback",
        						false);

        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Top_Menu_onload,this);
            this.addEventHandler("ontimer",this.form_ontimer,this);
        };

        this.loadIncludeScript("Form_Top_Menu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
