(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ad04m00_pop02");
            this.set_titletext("학교검색");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_school_list", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SCHKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHKINDCDNM\" type=\"STRING\" size=\"256\"/><Column id=\"UNIGRADECDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static05_00","30","55",null,"30","50",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("cls_st_back01");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","30","55","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("학교명");
            obj.set_cssclass("cls_st_base01");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"55","100","30","50",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("cls_btn_search");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_searchValue","145","57","204","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("cls_edt_base01");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_school_list","30","95",null,null,"2.86%","110",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_school_list");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_usesoftkeyboard("true");
            obj.set_cssclass("cls_grd_base01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"학제명\"/><Cell col=\"2\" text=\"학교명\"/><Cell col=\"3\" text=\"본분교\"/><Cell col=\"4\" text=\"구분\"/><Cell col=\"5\" text=\"학교코드\"/><Cell col=\"6\" text=\"본/분교\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"BIND:SCHKINDCDNM\"/><Cell col=\"2\" text=\"BIND:SCHNM\"/><Cell col=\"3\" text=\"BIND:ORGCDNM\"/><Cell col=\"4\" text=\"BIND:UNIGRADECDNM\"/><Cell col=\"5\" text=\"BIND:SCHCD\"/><Cell col=\"6\" text=\"BIND:ORGCD\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("label_surv_info","28","6","382","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("학교 선택");
            obj.set_font("24px/normal \"SpoqaHanSans-Regular\"");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",700,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ad04p01.xfdl", function() {
        this.fv_USERID = "";

        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "";
        this.fv_POPID = "";

        this.ad04m00_pop02_onload = function(obj,e)
        {

        	var objApp 		= nexacro.getApplication();
        	this.fv_USERID = objApp.gds_login_info.getColumn(0, "USERID") ;
        	this.fv_SURVSEQ = this.parent.SURVParam[0];
        	this.fv_SURVKINDCD = this.parent.SURVParam[1];
        	this.fv_POPID = this.parent.popId[0];

        	//alert("SURVParam[0]:"+this.parent.SURVParam[0]+";SURVParam[1]:"+this.parent.SURVParam[1]+"popId[0]:;"+this.parent.popId[0]);

        	this.selectSchoolList(); // 담당자 목록


        };

        // 학교 목록
        this.selectSchoolList = function(){

        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";  // ------------------  임시 조사기준
        	strParam += "SURVKINDCD="		+ this.fv_SURVKINDCD 		+ "ª";  // ------------------  임시 조사종류
        	if(  this.edt_searchValue.value != null && this.edt_searchValue.value != ""   ){
        		strParam += "searchValue="		+ this.edt_searchValue.value + "ª";
        	}

        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.gfnTransaction("selectSchoolList",
        						"/swiss/ad/user/selectSchoolList.do",
        						"dsSearch=dsSearch",
        						"ds_school_list=dsResult",
        						"",
        						"fnCallback",
        						false);

        }


        // 그리드 셀  클릭시 이벤트
        this.grd_school_list_oncellclick = function(obj, e)
        {


        };







        this.grd_school_list_oncelldblclick = function(obj,e)
        {
        	//alert(" row값 :" +  e.row.valueOf() );
        	var SCHNM = this.grd_school_list.getCellText(e.row.valueOf(), 2);
        	//alert("SCHNM : " + SCHNM);
        	var SCHCD = this.grd_school_list.getCellText(e.row.valueOf(), 5);
        	var ORGCD = this.grd_school_list.getCellText(e.row.valueOf(), 6);
        	//alert(this.opener.edt_sh_temp.value);

        	this.opener.fn_popReturn(this.fv_POPID,SCHNM,SCHCD,ORGCD);
        	this.close();// 창닫기

        	/*

        	if(this.opener.edt_sh_temp.value == "00" ){
        		this.opener.edt_sh_nm00.set_value(SCHNM);
        		this.opener.edt_sh00_cd.set_value(SCHCD);
        		this.opener.edt_sh00_orgcd.set_value(ORGCD);
        		this.close();// 창닫기
        	}
        	if(this.opener.edt_sh_temp.value == "01" ){
        		this.opener.edt_sh_nm01.set_value(SCHNM);
        		this.opener.edt_sh01_cd.set_value(SCHCD);
        		this.opener.edt_sh01_orgcd.set_value(ORGCD);
        		this.close();// 창닫기
        	}
        	if(this.opener.edt_sh_temp.value == "00" ){
        		this.opener.edt_sh_nm00.set_value(SCHNM);
        		this.opener.edt_sh00_cd.set_value(SCHCD);
        		this.close();// 창닫기
        	}
        	if(this.opener.edt_sh_temp.value == "02" ){
        		this.opener.edt_sh_nm02.set_value(SCHNM);
        		this.opener.edt_sh02_cd.set_value(SCHCD);
        		this.opener.edt_sh02_orgcd.set_value(ORGCD);
        		this.close();// 창닫기
        	}
        	if(this.opener.edt_sh_temp.value == "03" ){
        		this.opener.edt_sh_nm03.set_value(SCHNM);
        		this.opener.edt_sh03_cd.set_value(SCHCD);
        		this.opener.edt_sh03_orgcd.set_value(ORGCD);
        		this.close();// 창닫기
        	}
        	if(this.opener.edt_sh_temp.value == "04" ){
        		this.opener.edt_sh_nm04.set_value(SCHNM);
        		this.opener.edt_sh04_cd.set_value(SCHCD);
        		this.opener.edt_sh04_orgcd.set_value(ORGCD);
        		this.close();// 창닫기
        	}
        	if(this.opener.edt_sh_temp.value == "05" ){
        		this.opener.edt_sh_nm05.set_value(SCHNM);
        		this.opener.edt_sh05_cd.set_value(SCHCD);
        		this.opener.edt_sh05_orgcd.set_value(ORGCD);
        		this.close();// 창닫기
        	}
        	if(this.opener.edt_sh_temp.value == "06" ){
        		this.opener.edt_sh_nm06.set_value(SCHNM);
        		this.opener.edt_sh06_cd.set_value(SCHCD);
        		this.opener.edt_sh06_orgcd.set_value(ORGCD);
        		this.close();// 창닫기
        	}
        	*/

        };

        this.searchEnter = function(obj,e)
        {
        	if(e.keycode == nexacro.Event.KEY_ENTER){
        		this.btn_search.click();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ad04m00_pop02_onload,this);
            this.btn_search.addEventHandler("onclick",this.selectSchoolList,this);
            this.edt_searchValue.addEventHandler("onkeyup",this.searchEnter,this);
            this.grd_school_list.addEventHandler("oncelldblclick",this.grd_school_list_oncelldblclick,this);
        };

        this.loadIncludeScript("ad04p01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
