(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ag01m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,870);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMain", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSTRTDT\" type=\"STRING\" size=\"32\"/><Column id=\"SURVENDDT\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSTATUSCD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVNM\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SURVYEAR\" type=\"STRING\" size=\"32\"/><Column id=\"WORKDTHM\" type=\"DATETIME\" size=\"17\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"RN\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSTATUSCDNM\" type=\"STRING\" size=\"256\"/><Column id=\"SURVOBJ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSurvKindCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"cdnm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cd\">GP</Col><Col id=\"cdnm\">졸업생정보</Col></Row><Row><Col id=\"cd\">FP</Col><Col id=\"cdnm\">신입생정보</Col></Row><Row><Col id=\"cd\">AG</Col><Col id=\"cdnm\">졸업후상황</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsStatus", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">1</Col><Col id=\"CDNM\">미생성</Col></Row><Row><Col id=\"CD\">2</Col><Col id=\"CDNM\">생성</Col></Row><Row><Col id=\"CD\">3</Col><Col id=\"CDNM\">완료</Col></Row><Row><Col id=\"CD\">4</Col><Col id=\"CDNM\">오류</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","860",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","20",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","860",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","860",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Div("sub_title_wrap","30","20","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            this.Div.addChild(obj.name, obj);

            obj = new Static("sub_title","0","0","120","32",null,null,null,null,null,null,this.Div.form.sub_title_wrap.form);
            obj.set_taborder("0");
            obj.set_text("조사등록");
            obj.set_cssclass(" title_t2");
            this.Div.form.sub_title_wrap.addChild(obj.name, obj);

            obj = new Grid("gd_01","30","120","1200","700",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_border("1px solid #b2b2b2,0px none,0px none");
            obj.set_binddataset("dsMain");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"43\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"116\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"275\"/><Column size=\"82\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"NO.\"/><Cell col=\"1\" text=\"조사기준\"/><Cell col=\"2\" text=\"조사구분\"/><Cell col=\"3\" text=\"조사년도\"/><Cell col=\"4\" text=\"조사시작일\"/><Cell col=\"5\" text=\"조사종료일\"/><Cell col=\"6\" text=\"조사대상\"/><Cell col=\"7\" text=\"조사명\"/><Cell col=\"8\" text=\"생성여부\" border=\"0px none,0px solid #a5a5ff,1px solid #a5a5a5,0px none\"/></Band><Band id=\"body\"><Cell color=\"#595959\" textAlign=\"left\" padding-left=\"20px\" font=\"normal 15px/normal &quot;Malgun Gothic&quot;\" padding=\"0px 0px 0px 20px\" text=\"expr:currow+1\"/><Cell col=\"1\" color=\"#595959\" textAlign=\"left\" padding-left=\"20px\" font=\"normal 15px/normal &quot;Malgun Gothic&quot;\" padding=\"0px 0px 0px 20px\" text=\"bind:SURVSEQ\"/><Cell col=\"2\" color=\"#595959\" textAlign=\"left\" padding-left=\"20px\" font=\"normal 15px/normal &quot;Malgun Gothic&quot;\" padding=\"0px 0px 0px 20px\" text=\"bind:SURVKINDCD\" combodataset=\"dsSurvKindCd\" combocodecol=\"cd\" combodatacol=\"cdnm\" displaytype=\"combotext\"/><Cell col=\"3\" displaytype=\"normal\" textAlign=\"center\" font=\"normal 15px/normal &quot;Malgun Gothic&quot;\" text=\"bind:SURVYEAR\"/><Cell col=\"4\" text=\"bind:SURVSTRTDT\" displaytype=\"mask\" maskeditformat=\"####-##-##\" maskedittype=\"string\" textAlign=\"center\" calendareditformat=\"yyyy.MM.dd\" calendardateformat=\"yyyy.MM.dd ddd\"/><Cell col=\"5\" text=\"bind:SURVENDDT\" maskeditformat=\"####-##-##\" displaytype=\"mask\" maskedittype=\"string\" textAlign=\"center\" calendardateformat=\"yyyy.MM.dd ddd\" calendareditformat=\"yyyy.MM.dd\"/><Cell col=\"6\" text=\"bind:SURVOBJ\"/><Cell col=\"7\" text=\"bind:SURVNM\"/><Cell col=\"8\" text=\"bind:SURVSTATUSCD\" border=\"0px none,0px solid #a5a5a5,1px solid #a5a5a5,0px none\" displaytype=\"combotext\" combodataset=\"dsStatus\" combodatacol=\"CDNM\" combocodecol=\"CD\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_00","1130","70","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_text("등록");
            this.Div.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,870,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div.form.gd_01","accessibilityaction","Dataset00","학교명");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ad01m00.xfdl","CM::common.xjs");
        this.registerScript("ad01m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;

        this.fv_MENUNM = "관리자>조사준비>조사등록";

        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		this.setAccessLog("", "AG", this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceID == "list"){
        			//trace(this.dsMain.saveXML());
        			for(var i=0; i < this.dsMain.rowcount; i++){
        				this.dsMain.setColumn(i,"SURVSTATUSCDNM",this.dsStatus.getColumn(this.dsStatus.findRow("CD",this.dsMain.getColumn(i,"SURVSTATUSCD")),"CDNM"));
        			}
        		}
         	}
        }

        this.lfn_selectSurvInfo = function(){
        	var strParam = "";
        	strParam += "SURVSEQ="		+ '' 		+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	//trace(this.dsSearch.saveXML());
        	this.setAccessLog("", "AG", this.fv_MENUNM, "조사목록", strParam);  //접속기록
        	this.gfnTransaction("list",
        						"/swiss/ad/surv/listSurvReg.do",
        						"dsSearch=dsSearch",
        						"dsMain=dsResult",
        						"",
        						"fnCallback",
        						false);
        };



        this.ag01m00_onload = function(obj,e)
        {
        	this.lfn_selectSurvInfo();
        };

        this.Div_gd_01_oncelldblclick = function(obj,e)
        {
        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("chf_popup1"
        	                  , 0
        					  , 0
        					  , 300
        					  , 200
        					  , null
        					  , null
        					  , "AD::ad01p00.xfdl");
        	objChildFrame.set_showtitlebar(false);
        	objChildFrame.set_dragmovetype("all");
        	objChildFrame.set_openalign("center middle");
        	objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)")

        	var objParam = {param1:this.dsMain, param2:this.dsMain.rowposition,param3:'U'};
        	objChildFrame.showModal(this.getOwnerFrame()
        	                      , objParam
        						  , this
        						  , "fn_popupCallback");
        };

        this.fn_popupCallback = function(strPopupID, strReturn)
        {
        	if(strReturn == undefined){
        		return;
        	}

        	if(strPopupID == "chf_popup1"){
        		this.alert("Return Value: " + strReturn);
        	}
        };

        this.Div_btn_00_onclick = function(obj,e)
        {
        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("chf_popup2"
        	                  , 0
        					  , 0
        					  , 750
        					  , 550
        					  , null
        					  , null
        					  , "AD::ad01p00.xfdl");
        	objChildFrame.set_showtitlebar(false);
        	objChildFrame.set_dragmovetype("all");
        	objChildFrame.set_openalign("center middle");
        	objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)")
        	//var objParam = {param1:this.dsMain, param2:this.dsMain.rowposition,param3:'I'};
        	var objParam = {param3:'I'};
        	objChildFrame.showModal(this.getOwnerFrame()
        	                      , objParam
        						  , this
        						  , "fn_popupCallback");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ag01m00_onload,this);
            this.Div.form.sub_title_wrap.form.sub_title.addEventHandler("onclick",this.Div_sub_title_wrap_sub_title_onclick,this);
            this.Div.form.gd_01.addEventHandler("oncelldblclick",this.Div_gd_01_oncelldblclick,this);
            this.Div.form.btn_00.addEventHandler("onclick",this.Div_btn_00_onclick,this);
        };

        this.loadIncludeScript("ad01m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
