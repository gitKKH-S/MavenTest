(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MenuOnOff");
            this.set_cssclass("form_MN_BG");
            this.set_scrollbartype("none none");
            if (Form == this.constructor)
            {
                this._setFormPosition(40,880);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_copyMenu", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"menuCode\" type=\"STRING\" size=\"256\"/><Column id=\"menuLevel\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_orgMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"menuCode\" type=\"STRING\" size=\"256\"/><Column id=\"menuLevel\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnMenu","0","390","40","100",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_LF_Open");
            this.addChild(obj.name, obj);

            obj = new Div("divMenu","0","0",null,"580","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Button("btnImgSt","0","0","40","40",null,null,null,null,null,null,this.divMenu.form);
            obj.set_taborder("1");
            obj.set_borderRadius("0px 50px 0px 0px");
            obj.set_border("0px solid");
            this.divMenu.addChild(obj.name, obj);

            obj = new Grid("grdLFMenu","0","btnImgSt:0",null,"320","0",null,null,null,null,null,this.divMenu.form);
            obj.set_taborder("0");
            obj.set_cssclass("grd_LF_SmMenu");
            obj.set_treeinitstatus("collapse,all");
            obj.set_treeusebutton("no");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_binddataset("ds_copyMenu");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/></Columns><Rows><Row size=\"40\"/></Rows><Band id=\"body\"><Cell cssclass=\"expr:menuCode==&quot;BD&quot; ? &quot;tree_SM_BD&quot; : menuCode==&quot;CT&quot; ? &quot;tree_SM_CT&quot; : menuCode==&quot;CK&quot; ? &quot;tree_SM_CK&quot; : menuCode==&quot;NM&quot; ? &quot;tree_SM_NM&quot; : menuCode==&quot;PT&quot; ? &quot;tree_SM_PT&quot; : menuCode==&quot;SY&quot; ? &quot;tree_SM_SY&quot; : menuCode==&quot;ST&quot; ? &quot;tree_SM_ST&quot; : menuCode==&quot;MY&quot; ? &quot;tree_SM_MY&quot; : menuCode==&quot;HM&quot; ? &quot;tree_SM_HM&quot; : &quot;&quot;\" displaytype=\"normal\" edittype=\"none\" treelevel=\"bind:menuLevel\" text=\" \"/></Band></Format></Formats>");
            this.divMenu.addChild(obj.name, obj);

            obj = new Button("btnImgEd","0","grdLFMenu:0","40","40",null,null,null,null,null,null,this.divMenu.form);
            obj.set_taborder("2");
            obj.set_borderRadius("0px 0px 50px 0px");
            obj.set_border("0px solid");
            this.divMenu.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",40,880,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("MenuOnOff.xfdl", function() {
        /***********************************************************************************
         * SYSTEM      :
         * BUSINESS    :
         * FILE NAME   : MenuOnOff.xfdl
         * PROGRAMMER  : 권택기
         * DATE        : 2020-05-21
         * DESCRIPTION : 메뉴 화면
         *------------------------------------------------------------------
         * MODIFY DATE   PROGRAMMER			DESCRIPTION
         *------------------------------------------------------------------
         *
         *------------------------------------------------------------------
         ***********************************************************************************/

        /***********************************************************************************
         * 공통 Library include
         ***********************************************************************************/
        //include "Lib::Comm.xjs"

        /***********************************************************************************
         * 전역변수 / 지역변수
         ***********************************************************************************/
        var objApp = nexacro.getApplication();
        var grdRow = 0;
        /***********************************************************************************
         * Form 관련 이벤트
         ***********************************************************************************/


        /***********************************************************************************
         * transction callback 함수
         ***********************************************************************************/
        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){

        	}else{
        	}
        };

        /***********************************************************************************
         * 컴포넌트 비즈니스 로직 함수
         ***********************************************************************************/
        // 메뉴목록 확장
        this.fn_menuOC = function(obj,e)
        {
        	reSize_Menu(this.btnMenu);
        	grdRow = e.row;
        	this.fn_copyMenu(); // 메뉴 copy
        };

        // 메뉴목록 보여주기
        this.fn_visible = function()
        {
        	if(this.divMenu.visible){
        		this.divMenu.set_visible(false);
        		this.btnMenu.set_visible(true);
        	} else {
        		this.divMenu.set_visible(true);
        		this.btnMenu.set_visible(false);
        	}
        };

        // 메뉴 code 복사
        this.fn_copyMenu = function()
        {
        	this.ds_orgMenu.clearData();
        	this.ds_copyMenu.copyData(objApp.ds_menuCode);	// 메뉴 아이콘화 시 표시 데이터셋
        	this.ds_orgMenu.copyData(objApp.ds_menuCode);	// LeftMenu의 row이동을 위한 데이터셋
        	this.ds_copyMenu.filter("menuLevel < 2"); 		// 최상단 메뉴만 표시
        	this.fn_addHomeMenu(); 							// 홈 메뉴 추가
        	this.ds_copyMenu.set_rowposition(-1);
        	this.fn_visible(); 								// 메뉴목록 보여주기
        };

        // 홈 메뉴 추가
        this.fn_addHomeMenu = function()
        {
        	this.ds_copyMenu.insertRow(0); 					// 첫줄에 추가
        	this.ds_copyMenu.setColumn(0, "menuCode", "HM");
        	this.seachMenuCode(); 							// 데이터셋에서 메뉴 번호 검색
        	this.fn_modGrid(); 								// 그리드 크기 조절
        };

        // 홈 메뉴 그리드 크기 조절
        this.fn_modGrid = function()
        {
        	var menuCnt = this.ds_copyMenu.rowcount;
        	var menuHeight = menuCnt * 40;
        	this.divMenu.form.grdLFMenu.set_height(menuHeight);
        	this.divMenu.form.btnImgEd.set_top(menuHeight+40);
        };

        this.seachMenuCode = function()
        {
        	this.ds_orgMenu.set_keystring("S:menuSeq"); 				// 원본 메뉴 재설정
        	v_menuCode = this.ds_copyMenu.getColumn(grdRow,"menuCode");	// 현재 축소 메뉴코드
        	for(var i=0; i<this.ds_orgMenu.rowcount; i++){
        		if(this.ds_orgMenu.getColumn(i,"menuCode") == v_menuCode){
        			grdRow = i;
        		}
        	}

        	objApp.mainframe.TopFrameSet.WorkFrameSet.LeftFrame.form.fn_treeinit("Y"); // Y이면 열린 메뉴 전부 닫기

        	if(!utlf_IsNull(grdRow)){		// 선택한 메뉴 펼치기
        		if( v_menuCode == "HM" ){
        			objApp.mainframe.TopFrameSet.WorkFrameSet.LeftFrame.form.fn_moveMain(); // 메인으로 이동
        		} else {
        			objApp.mainframe.TopFrameSet.WorkFrameSet.LeftFrame.form.fn_treeStatus(objApp.mainframe.TopFrameSet.WorkFrameSet.LeftFrame.form.grdLeftMenu,grdRow);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnMenu.addEventHandler("onclick",this.fn_menuOC,this);
            this.divMenu.form.grdLFMenu.addEventHandler("oncellclick",this.fn_menuOC,this);
        };

        this.loadIncludeScript("MenuOnOff.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
