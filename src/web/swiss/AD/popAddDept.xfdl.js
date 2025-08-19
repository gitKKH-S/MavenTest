(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("popAddDept");
            this.set_titletext("학과추가");
            if (Form == this.constructor)
            {
                this._setFormPosition(640,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_resultCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("dept_info","25","50","589","90",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div_00");
            obj.set_cssclass("divFormR");
            this.addChild(obj.name, obj);

            obj = new Static("label_00","39","32","45","26",null,null,null,null,null,null,this.dept_info.form);
            obj.set_taborder("2");
            obj.set_text("학과명");
            this.dept_info.addChild(obj.name, obj);

            obj = new Edit("edt_deptnm","label_00:20","32","134","26",null,null,null,null,null,null,this.dept_info.form);
            obj.set_taborder("0");
            this.dept_info.addChild(obj.name, obj);

            obj = new Static("label_00_00","308","32","56","26",null,null,null,null,null,null,this.dept_info.form);
            obj.set_taborder("3");
            obj.set_text("학과코드");
            this.dept_info.addChild(obj.name, obj);

            obj = new Edit("edt_deptcd","label_00_00:20","32","154","26",null,null,null,null,null,null,this.dept_info.form);
            obj.set_taborder("1");
            this.dept_info.addChild(obj.name, obj);

            obj = new Button("btn_00","328","151","84","33",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_01","228","151","84","33",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Static("sub_title","30","10","370","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("학과추가");
            obj.set_cssclass(" title_t2");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",640,200,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("popAddDept.xfdl","CM::utl_script.xjs");
        this.registerScript("popAddDept.xfdl", function() {
        this.executeIncludeScript("CM::utl_script.xjs"); /*include "CM::utl_script.xjs"*/;

        //기본변수세팅
        this.fv_USERID = "";
        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "";
        this.fv_SCHCD = "";
        this.fv_ORGCD = "";
        this.fv_SCHNM = "";
        this.fv_TARGETROW = "";
        this.fv_MENUNM = "관리자>조사진행>학과추가";

        this.fv_DEPTNM = "";
        this.fv_DEPTCD = "";

        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceID == "insertDept"){
        			if(this.ds_resultCnt.getColumn(0, "CNT") == "-1"){
        				alert("이미 등록된 학과입니다");
        				return false;
        			}else if(this.ds_resultCnt.getColumn(0, "CNT") == "0") {

        			}else{
        				alert("학과가 등록되었습니다.");
        				this.opener.lfn_afterInsertDept(this.fv_TARGETROW, this.fv_DEPTNM, this.fv_DEPTCD);
        				this.close();
        			}
        		}
        	}
        }

        this.popAddDept_onload = function(obj,e)
        {
        	this.fv_SURVSEQ = this.parent.SURVSEQ;
        	this.fv_SURVKINDCD = this.parent.SURVKINDCD;
        	this.fv_SCHCD = this.parent.SCHCD;
        	this.fv_ORGCD = this.parent.ORGCD;
        	this.fv_SCHNM = this.parent.SCHNM;
        	this.fv_TARGETROW = this.parent.NROW;
        	this.fv_DEPTCD = this.parent.DEPTCD;

        	this.dept_info.form.edt_deptcd.set_value(this.fv_DEPTCD);
        };

        this.btn_01_onclick = function(obj,e)
        {
        	var deptnm = this.dept_info.form.edt_deptnm.value;
        	var deptcd = this.dept_info.form.edt_deptcd.value;

        	if(this.utlf_IsNull(deptnm)){
        		alert("학과명을 입력해주세요");
        		return false;
        	}

        	if(this.utlf_IsNull(deptcd)){
        		alert("학과코드를 입력해주세요")
        		return false;
        	}

        	if(deptcd.length > 12){
        		alert("학과코드 길이를 확인해주세요")
        		return false;
        	}

        	if(!confirm("학과를 추가하시겠습니까?\n학과명:" + deptnm + "  학과코드:" + deptcd)){
        		return false;
        	}

        	this.fv_DEPTNM = deptnm;
        	this.fv_DEPTCD = deptcd;

        	var strParam = "SURVSEQ=" 	+ this.fv_SURVSEQ + "ª";
        	strParam += "SURVKINDCD=" 	+ this.fv_SURVKINDCD + "ª";
        	strParam += "DEPTCD=" 		+ deptcd + "ª";
        	strParam += "DEPTNM="  		+ deptnm + "ª";

        	dsParamSetArrowBlank(this.ds_search, strParam);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "학과추가", strParam);  //접속기록
        	this.gfnTransaction("insertDept",
        						"swiss/ad/progress/insertDept.do",
        						"dsSearch=ds_search",
        						"ds_resultCnt=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        this.btn_00_onclick = function(obj,e)
        {
        	this.opener.lfn_afterInsertDept(this.fv_TARGETROW, null, null);
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.popAddDept_onload,this);
            this.dept_info.form.edt_deptnm.addEventHandler("onkeyup",this.searchEnter,this);
            this.dept_info.form.edt_deptcd.addEventHandler("onkeyup",this.searchEnter,this);
            this.btn_00.addEventHandler("onclick",this.btn_00_onclick,this);
            this.btn_01.addEventHandler("onclick",this.btn_01_onclick,this);
        };

        this.loadIncludeScript("popAddDept.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
