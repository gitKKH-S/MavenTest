(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ad16p03");
            this.set_titletext("설문 문제");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("normal 700 36px/normal \"맑은 고딕\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(850,835);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_questionInq", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTIONSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"INQSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"INQNO\" type=\"STRING\" size=\"256\"/><Column id=\"INQTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQEXAMPLECNT\" type=\"STRING\" size=\"256\"/><Column id=\"INQGRPNM\" type=\"STRING\" size=\"256\"/><Column id=\"INQTEXT\" type=\"STRING\" size=\"256\"/><Column id=\"SUJECTINQTITLE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIERID\" type=\"STRING\" size=\"256\"/><Column id=\"MODDTHM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inqNo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">1</Col><Col id=\"CDNM\">1</Col></Row><Row><Col id=\"CD\">2</Col><Col id=\"CDNM\">2</Col></Row><Row><Col id=\"CD\">3</Col><Col id=\"CDNM\">3</Col></Row><Row><Col id=\"CD\">4</Col><Col id=\"CDNM\">4</Col></Row><Row><Col id=\"CD\">5</Col><Col id=\"CDNM\">5</Col></Row><Row><Col id=\"CD\">6</Col><Col id=\"CDNM\">6</Col></Row><Row><Col id=\"CD\">7</Col><Col id=\"CDNM\">7</Col></Row><Row><Col id=\"CD\">8</Col><Col id=\"CDNM\">8</Col></Row><Row><Col id=\"CD\">9</Col><Col id=\"CDNM\">9</Col></Row><Row><Col id=\"CD\">10</Col><Col id=\"CDNM\">10</Col></Row><Row><Col id=\"CD\">11</Col><Col id=\"CDNM\">11</Col></Row><Row><Col id=\"CD\">12</Col><Col id=\"CDNM\">12</Col></Row><Row><Col id=\"CD\">13</Col><Col id=\"CDNM\">13</Col></Row><Row><Col id=\"CD\">14</Col><Col id=\"CDNM\">14</Col></Row><Row><Col id=\"CD\">15</Col><Col id=\"CDNM\">15</Col></Row><Row><Col id=\"CD\">16</Col><Col id=\"CDNM\">16</Col></Row><Row><Col id=\"CD\">17</Col><Col id=\"CDNM\">17</Col></Row><Row><Col id=\"CD\">18</Col><Col id=\"CDNM\">18</Col></Row><Row><Col id=\"CD\">19</Col><Col id=\"CDNM\">19</Col></Row><Row><Col id=\"CD\">20</Col><Col id=\"CDNM\">20</Col></Row><Row><Col id=\"CD\">21</Col><Col id=\"CDNM\">21</Col></Row><Row><Col id=\"CD\">22</Col><Col id=\"CDNM\">22</Col></Row><Row><Col id=\"CD\">23</Col><Col id=\"CDNM\">23</Col></Row><Row><Col id=\"CD\">24</Col><Col id=\"CDNM\">24</Col></Row><Row><Col id=\"CD\">25</Col><Col id=\"CDNM\">25</Col></Row><Row><Col id=\"CD\">26</Col><Col id=\"CDNM\">26</Col></Row><Row><Col id=\"CD\">27</Col><Col id=\"CDNM\">27</Col></Row><Row><Col id=\"CD\">28</Col><Col id=\"CDNM\">28</Col></Row><Row><Col id=\"CD\">29</Col><Col id=\"CDNM\">29</Col></Row><Row><Col id=\"CD\">30</Col><Col id=\"CDNM\">30</Col></Row><Row><Col id=\"CD\">31</Col><Col id=\"CDNM\">31</Col></Row><Row><Col id=\"CD\">32</Col><Col id=\"CDNM\">32</Col></Row><Row><Col id=\"CD\">33</Col><Col id=\"CDNM\">33</Col></Row><Row><Col id=\"CD\">34</Col><Col id=\"CDNM\">34</Col><Row><Col id=\"CD\">35</Col><Col id=\"CDNM\">35</Col></Row></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inqType", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_queEx", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTIONSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"INQSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EXSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EXAMPLENO\" type=\"STRING\" size=\"256\"/><Column id=\"EXAMPLETEXT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_queEx_init", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTIONSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"INQSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EXSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EXAMPLENO\" type=\"STRING\" size=\"256\"/><Column id=\"EXAMPLETEXT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","850","835",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","790","20",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","835",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00",null,"0","30","835","0",null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_areaItem","30","60","790","465",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_text("div_areaItem");
            obj.set_cssclass("noticeWrap");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_sub1","0","0","790","43",null,null,null,null,null,null,this.Div.form.div_areaItem.form);
            obj.set_taborder("0");
            obj.set_border("0px none,0px none,1px solid #a5a5a5");
            obj.set_text("");
            this.Div.form.div_areaItem.addChild(obj.name, obj);

            obj = new Div("div_inqno","0","0","100","42",null,null,null,null,null,null,this.Div.form.div_areaItem.form.div_sub1.form);
            obj.set_taborder("0");
            obj.set_text("문제번호");
            obj.set_cssclass("noticeTit");
            this.Div.form.div_areaItem.form.div_sub1.addChild(obj.name, obj);

            obj = new Div("div_grp","229","0","100","42",null,null,null,null,null,null,this.Div.form.div_areaItem.form.div_sub1.form);
            obj.set_taborder("4");
            obj.set_text("문제그룹");
            obj.set_cssclass("noticeTit");
            obj.set_border("0px none,1px solid #a5a5a5");
            this.Div.form.div_areaItem.form.div_sub1.addChild(obj.name, obj);

            obj = new Combo("in_cb_inqno","div_inqno:5","4","100","33",null,null,null,null,null,null,this.Div.form.div_areaItem.form.div_sub1.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_inqNo");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.div_areaItem.form.div_sub1.addChild(obj.name, obj);

            obj = new Div("div_type","499","0","100","42",null,null,null,null,null,null,this.Div.form.div_areaItem.form.div_sub1.form);
            obj.set_taborder("5");
            obj.set_text("문제유형");
            obj.set_cssclass("noticeTit");
            obj.set_border("0px none,1px solid #a5a5a5");
            this.Div.form.div_areaItem.form.div_sub1.addChild(obj.name, obj);

            obj = new Combo("in_cb_inqType","div_type:5","4","176","33",null,null,null,null,null,null,this.Div.form.div_areaItem.form.div_sub1.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_inqType");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_text("종류");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.div_areaItem.form.div_sub1.addChild(obj.name, obj);

            obj = new Edit("in_edit_inqGrp","div_grp:5","4","150","33",null,null,null,null,null,null,this.Div.form.div_areaItem.form.div_sub1.form);
            obj.set_taborder("2");
            this.Div.form.div_areaItem.form.div_sub1.addChild(obj.name, obj);

            obj = new Div("div_sub2","0","43","790","43",null,null,null,null,null,null,this.Div.form.div_areaItem.form);
            obj.set_taborder("1");
            obj.set_border("0px none,0px none,1px solid #a5a5a5");
            obj.set_text("");
            this.Div.form.div_areaItem.addChild(obj.name, obj);

            obj = new Div("div_t2","0","0","100","42",null,null,null,null,null,null,this.Div.form.div_areaItem.form.div_sub2.form);
            obj.set_taborder("0");
            obj.set_text("문제");
            obj.set_cssclass("noticeTit");
            this.Div.form.div_areaItem.form.div_sub2.addChild(obj.name, obj);

            obj = new Edit("in_edit_inqText","div_t2:5","5","675","35",null,null,null,null,null,null,this.Div.form.div_areaItem.form.div_sub2.form);
            obj.set_taborder("4");
            this.Div.form.div_areaItem.form.div_sub2.addChild(obj.name, obj);

            obj = new Div("div_sub3","0","86","790","371",null,null,null,null,null,null,this.Div.form.div_areaItem.form);
            obj.set_taborder("2");
            obj.set_border("0px none,0px none,1px solid #a5a5a5");
            obj.set_text("");
            this.Div.form.div_areaItem.addChild(obj.name, obj);

            obj = new Div("div_t3","0","0","100","370",null,null,null,null,null,null,this.Div.form.div_areaItem.form.div_sub3.form);
            obj.set_taborder("0");
            obj.set_text("첨부전문");
            obj.set_cssclass("noticeTit");
            this.Div.form.div_areaItem.form.div_sub3.addChild(obj.name, obj);

            obj = new Div("div_edtor","div_t3:0","0","680","370",null,null,null,null,null,null,this.Div.form.div_areaItem.form.div_sub3.form);
            obj.set_taborder("5");
            obj.set_text("div_00");
            obj.set_url("CM::TextEditor.xfdl");
            this.Div.form.div_areaItem.form.div_sub3.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"div_areaItem:5","100","30","421",null,null,null,null,null,this.Div.form);
            obj.set_text("저장");
            obj.set_cssclass("btn_sty09");
            obj.set_taborder("0");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_close","btn_save:10","div_areaItem:5","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_text("닫기");
            obj.set_cssclass("btn_sty01");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_00","1","687","849","12",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Div("div_areaQueInq","35","div_00:-135","784","270",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_queExAdd",null,"11","100","30","0",null,null,null,null,null,this.div_areaQueInq.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_sty05");
            obj.set_text("문항추가");
            this.div_areaQueInq.addChild(obj.name, obj);

            obj = new Grid("gd_queEx","0","50",null,"206","0",null,null,null,null,null,this.div_areaQueInq.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_queEx");
            obj.set_autofittype("col");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("default");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"615\"/><Column size=\"80\"/></Columns><Rows><Row size=\"45\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"문항번호\"/><Cell col=\"1\" text=\"문항\"/><Cell col=\"2\" text=\"삭제여부\"/></Band><Band id=\"body\"><Cell text=\"bind:EXAMPLENO\" displaytype=\"editcontrol\" edittype=\"text\" editmaxlength=\"2\" editinputtype=\"digit\" editautoselect=\"true\"/><Cell col=\"1\" text=\"bind:EXAMPLETEXT\" displaytype=\"editcontrol\" edittype=\"text\" editmaxlength=\"300\" editautoselect=\"true\"/><Cell col=\"2\" text=\"삭제\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"cellBtn\"/></Band></Format></Formats>");
            this.div_areaQueInq.addChild(obj.name, obj);

            obj = new Static("Static02","0","10","165","30",null,null,null,null,null,null,this.div_areaQueInq.form);
            obj.set_taborder("2");
            obj.set_text("설문 문항");
            obj.set_cssclass("title_t2");
            this.div_areaQueInq.addChild(obj.name, obj);

            obj = new Div("sub_title_wrap","30","20","790","42",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("sub_title","0","0","370","32",null,null,null,null,null,null,this.sub_title_wrap.form);
            obj.set_taborder("0");
            obj.set_text("설문 문제");
            obj.set_cssclass(" title_t2");
            this.sub_title_wrap.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",850,835,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div.form.div_areaItem.form.div_sub1.form.in_cb_inqno","value","ds_questionInq","INQNO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div.form.div_areaItem.form.div_sub1.form.in_cb_inqType","value","ds_questionInq","INQTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div.form.div_areaItem.form.div_sub2.form.in_edit_inqText","value","ds_questionInq","INQTEXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div.form.div_areaItem.form.div_sub1.form.in_edit_inqGrp","value","ds_questionInq","INQGRPNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div.form.div_areaItem.form.div_sub3.form.div_edtor","text","ds_questionInq","SUJECTINQTITLE");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CM::TextEditor.xfdl");
        };
        
        // User Script
        this.registerScript("ad16p03.xfdl", function() {
        this.SURVSEQ;
        this.SURVKINDCD;
        this.QUESTIONSEQ;
        this.INQSEQ;
        this.MODE = "NEW";

        this.fv_MENUNM = this.opener.fv_MENUNM + ">설문문제등록";

        this.ad16p03_oninit = function(obj,e)
        {
        	this.SURVSEQ 	= this.parent.SURVSEQ;
        	this.SURVKINDCD = this.parent.SURVKINDCD;
        	this.QUESTIONSEQ= this.parent.QUESTIONSEQ;
        	this.INQSEQ		= this.parent.INQSEQ;
        	this.MODE		= this.parent.MODE;

        	this.initQueInq();
        };

        this.ad16p03_onload = function(obj,e)
        {
        	/** DATA SET
        	 this.ds_child.copyData(objParam);
            this.Grid00.set_binddataset("ds_child");
            this.Grid00.createFormat();
        	*/

        };

        // 문제유형 선택시
        this.Div_div_areaItem_div_sub1_in_cb_inqType_onitemchanged = function(obj,e)
        {

        		var val = this.Div.form.div_areaItem.form.div_sub1.form.in_cb_inqType.value;

        		if(val == '01' || val == '03' || val == '06'){
        			this.div_areaQueInq.set_visible(true);
        		} else if(val == '04' || val == '05' || val == '07'){
        			this.div_areaQueInq.set_visible(true);
        		} else {
        			this.div_areaQueInq.set_visible(false);
        		}


        };

        // 수정/저장
        this.Div_btn_save_onclick = function(obj,e)
        {
        	if(this.validateInq()){
        		return;
        	}
        	this.queInqProc();
        };

        // 닫기
        this.Div_btn_close_onclick = function(obj,e)
        {
        	this.close("자식창에서전달하는 메세지");
        };

        // 문항추가
        this.div_areaQueInq_btn_queExAdd_onclick = function(obj,e)
        {
        	if(this.ds_queEx.rowcount == 0){
        		this.ds_queEx.copyData(this.ds_queEx_init);
        	}
        	this.ds_queEx.addRow();
        };

        // 문항삭제
        this.div_areaQueInq_gd_queEx_oncellclick = function(obj,e)
        {
        	var nRow = this.div_areaQueInq.form.gd_queEx.getSelectedDatasetRows();
        	var nPos = this.div_areaQueInq.form.gd_queEx.getCellPos();

        	if(nPos == "2"){					// 삭제
        		this.ds_queEx.deleteRow(nRow);
        	}
        };

        // 문항변경사항 처리
        this.div_areaQueInq_btn_queExSave_onclick = function(obj,e)
        {
        	if(this.INQSEQ == "" || this.INQSEQ == null){
        		this.alert("설문문제를 저장 후에 작성하세요");
        		return;
        	}


        	var bChangeData = false;
        	var nRowCnt = this.ds_queEx.rowcount;
        	for(var i=0; i<nRowCnt; i++){
        		switch(this.ds_queEx.getRowType(i)){
        			case 0:
        				break;
        			case 2:			// 추가
        				/*
        				if(this.validateEx(i) == true){
        					return;
        				}
        				*/
        				bChangeData = true;
        				var strParam = "SURVSEQ=" 	+ this.SURVSEQ + "ª";
        				strParam += "SURVKINDCD=" 	+ this.SURVKINDCD + "ª";
        				strParam += "QUESTIONSEQ=" 	+ this.QUESTIONSEQ + "ª";
        				strParam += "INQSEQ=" 		+ this.INQSEQ + "ª";

        				strParam += "EXAMPLENO=" 	+ this.ds_queEx.getColumn(i, "EXAMPLENO") + "ª";
        				strParam += "EXAMPLETEXT=" 	+ this.ds_queEx.getColumn(i, "EXAMPLETEXT") + "ª";

        				dsParamSetArrowBlank(this.ds_search, strParam);
        				this.gfnTransaction("insertQueEx",
        						"swiss/ad/questionMng/insertQueEx.do",
        						"dsSearch=ds_search",
        						"",
        						"",
        						"fnCallback",
        						false);
        				break;
        			case 4 : 		// 수정
        				/*
        				if(this.validateEx(i) == true){
        					return;
        				}
        				*/
        				bChangeData = true;
        				var strParam = "SURVSEQ=" 	+ this.SURVSEQ + "ª";
        				strParam += "SURVKINDCD=" 	+ this.SURVKINDCD + "ª";
        				strParam += "QUESTIONSEQ=" 	+ this.QUESTIONSEQ + "ª";
        				strParam += "INQSEQ=" 		+ this.INQSEQ + "ª";
        				strParam += "EXSEQ=" 		+ this.ds_queEx.getColumn(i, "EXSEQ") + "ª";

        				strParam += "EXAMPLENO=" 	+ this.ds_queEx.getColumn(i, "EXAMPLENO") + "ª";
        				strParam += "EXAMPLETEXT=" 	+ this.ds_queEx.getColumn(i, "EXAMPLETEXT") + "ª";

        				dsParamSetArrowBlank(this.ds_search, strParam);
        				this.gfnTransaction("updateQueEx",
        						"swiss/ad/questionMng/updateQueEx.do",
        						"dsSearch=ds_search",
        						"",
        						"",
        						"fnCallback",
        						false);
        				break;
        			default :
        				break;
        		}
        	}


        	var delCnt = this.ds_queEx.getDeletedRowCount();
        	if(delCnt > 0){
        		for(var i=0; i<delCnt; i++){
        			bChangeData = true;
        			var strParam = "SURVSEQ=" 	+ this.ds_queEx.getDeletedColumn(i, "SURVSEQ") + "ª";
        			strParam += "SURVKINDCD=" 	+ this.ds_queEx.getDeletedColumn(i, "SURVKINDCD") + "ª";
        			strParam += "QUESTIONSEQ=" 	+ this.ds_queEx.getDeletedColumn(i, "QUESTIONSEQ") + "ª";
        			strParam += "INQSEQ=" 		+ this.ds_queEx.getDeletedColumn(i, "INQSEQ") + "ª";
        			strParam += "EXSEQ=" 		+ this.ds_queEx.getDeletedColumn(i, "EXSEQ") + "ª";

        			dsParamSetArrowBlank(this.ds_search, strParam);
        			this.gfnTransaction("deleteQueEx",
        						"swiss/ad/questionMng/deleteQueEx.do",
        						"dsSearch=ds_search",
        						"",
        						"",
        						"fnCallback",
        						false);
        		}

        	}
        	if(bChangeData == true) {
        		// this.alert("문항정보가 저장 되었습니다.");
        		// 설문보기 목록갱신 + 설문보기문항CNT UPDATE
        		var strParam = "SURVSEQ=" 	+ this.SURVSEQ + "ª";
        		strParam += "SURVKINDCD=" 	+ this.SURVKINDCD + "ª";
        		strParam += "QUESTIONSEQ=" 	+ this.QUESTIONSEQ + "ª";
        		strParam += "INQSEQ=" 		+ this.INQSEQ + "ª";

        		dsParamSetArrowBlank(this.ds_search, strParam);
        		this.gfnTransaction("selectQueExList",
        						"swiss/ad/questionMng/selectQueExList.do",
        						"dsSearch=ds_search",
        						"ds_queEx=dsResult",
        						"",
        						"fnCallback",
        						false);
        	}
        };



        this.fnCallback = function(serviceId, errCD, errMSG){

        	if(errCD < 0){
        		this.setAccessLog("", "AG", this.fv_MENUNM, serviceId + " : Fail", "");  //접속기록(실패시)
        	} else {
        		if(serviceId =="initQueInq"){

        		} else if(serviceId == "selectQueInqView"){

        		} else if(serviceId == "insertQueInq"){
        			/*
        			if(confirm("등록 완료 되었습니다. \n\n추가 등록 하시겠습니까?")){
        				this.Div.form.div_areaItem.form.div_sub1.form.in_cb_inqno.set_index(0);
        				this.Div.form.div_areaItem.form.div_sub1.form.in_edit_inqGrp.set_value("");
        				this.Div.form.div_areaItem.form.div_sub1.form.in_cb_inqType.set_index(0);
        			} else {
        				this.close();
        			}
        			*/
        		} else if(serviceId == "updateQueInq"){
        			/*this.close();*/
        		}
        	}
        }




        this.initQueInq = function(){
        	var strParam = "SURVSEQ=" 			+ this.SURVSEQ + "ª";
        		strParam += "SURVKINDCD=" 		+ this.SURVKINDCD + "ª";
        		strParam += "CDTYPE=2009ª";

        	dsParamSetArrowBlank(this.ds_search, strParam);

        	this.setAccessLog(this.SURVSEQ, this.SURVKINDCD, this.fv_MENUNM, "설문문제상세", strParam);  //접속기록

        	this.gfnTransaction("initQueInq",
        						"swiss/cm/selectCodeList.do",
        						"dsSearch=ds_search",
        						"ds_inqType=dsResult",
        						"",
        						"fnCallback",
        						false);
        	if(this.MODE == "MOD"){
        		this.selectQueInqView();
        		this.Div.form.btn_save.set_text("수정");
        	} else {
        		this.Div.form.div_areaItem.form.div_sub1.form.in_cb_inqType.set_index(0);
        		this.Div_div_areaItem_div_sub1_in_cb_inqType_onitemchanged(this.Div.form.div_areaItem.form.div_sub1.form.in_cb_inqType, '');
        	}

        }

        this.selectQueInqView = function(){
        	var strParam = "SURVSEQ=" 			+ this.SURVSEQ + "ª";
        		strParam += "SURVKINDCD=" 		+ this.SURVKINDCD + "ª";
        		strParam += "QUESTIONSEQ=" 		+ this.QUESTIONSEQ + "ª";
        		strParam += "INQSEQ=" 			+ this.INQSEQ + "ª";

        	dsParamSetArrowBlank(this.ds_search, strParam);
        	this.gfnTransaction("selectQueInqView",
        						"swiss/ad/questionMng/selectQueInqView.do",
        						"dsSearch=ds_search",
        						"ds_questionInq=dsResultInq ds_queEx=dsResultEx",
        						"",
        						"fnCallback",
        						false);
        	this.Div_div_areaItem_div_sub1_in_cb_inqType_onitemchanged(this.Div.form.div_areaItem.form.div_sub1.form.in_cb_inqType);
        }

        this.queInqProc = function(){
        	var msg = "저장 되었습니다.";

        	var strParam = "SURVSEQ=" 	+ this.SURVSEQ + "ª";
        	strParam += "SURVKINDCD=" 	+ this.SURVKINDCD + "ª";
        	strParam += "QUESTIONSEQ=" 	+ this.QUESTIONSEQ + "ª";
        	strParam += "INQSEQ=" 		+ this.INQSEQ + "ª";
        	this.setAccessLog(this.SURVSEQ, this.SURVKINDCD, this.fv_MENUNM, this.mode == "NEW" ? "등록" : "수정", strParam);  //접속기록

        	if(this.MODE == "NEW"){
        		this.ds_questionInq.setColumn(0, "SURVSEQ", 	this.SURVSEQ);
        		this.ds_questionInq.setColumn(0, "SURVKINDCD", 	this.SURVKINDCD);
        		this.ds_questionInq.setColumn(0, "QUESTIONSEQ", this.QUESTIONSEQ);
        		this.ds_questionInq.setColumn(0, "SUJECTINQTITLE", this.Div.form.div_areaItem.form.div_sub3.form.div_edtor.form.getContentTxt());
        		this.gfnTransaction("insertQueInq",
        						"swiss/ad/questionMng/insertQueInq.do",
        						"dsSearch=ds_questionInq",
        						"ds_questionInq=dsResult",
        						"",
        						"fnCallback",
        						false);
        		this.INQSEQ = this.ds_questionInq.getColumn(0, "INQSEQ");
        		this.div_areaQueInq_btn_queExSave_onclick();
        	} else {
        		this.ds_questionInq.setColumn(0, "SUJECTINQTITLE", this.Div.form.div_areaItem.form.div_sub3.form.div_edtor.form.getContentTxt());
        		this.gfnTransaction("updateQueInq",
        						"swiss/ad/questionMng/updateQueInq.do",
        						"dsSearch=ds_questionInq",
        						"",
        						"",
        						"fnCallback",
        						false);
        		this.div_areaQueInq_btn_queExSave_onclick();
        		msg = "수정 되었습니다.";
        	}
        	this.close(msg);
        }


        // ===  editor에 내용 전달 (처음로딩시 실행)   ==
        this.returnContent = function(){
        	if(this.MODE == "MOD"){
        		var content = this.ds_questionInq.getColumn(0, "SUJECTINQTITLE");
        		if(content == null || content == ""){
        			content = " ";
        		}
        		return content;
        	} else {
        		return "";
        	}
        }
        // ========================= editor END

        this.validateInq= function(){
        	var inqno 	= this.Div.form.div_areaItem.form.div_sub1.form.in_cb_inqno.value;
        	var inqgrp 	= this.Div.form.div_areaItem.form.div_sub1.form.in_edit_inqGrp.value;
        	var type		= this.Div.form.div_areaItem.form.div_sub1.form.in_cb_inqType.value;
        	var title 		= this.Div.form.div_areaItem.form.div_sub2.form.in_edit_inqText.value;

        	if(inqno == null || inqno == ""){
        		this.alert("문제번호를 선택하세요");
        		return true;
        	} else if(inqgrp == null || inqgrp == ""){
        		this.alert("문제그룹을 입력하세요");
        		return true;
        	} else if(type == null || type == ""){
        		this.alert("문제유형을 선택하세요");
        		return true;
        	} else if(title == null || title == ""){
        		this.alert("문제를 입력하세요");
        		return true;
        	}
        	if(type == '01' || type == '03' || type == '06' || type == '04' || type == '05' || type == '07'){
        		var cnt = this.div_areaQueInq.form.gd_queEx.rowcount;

        		if(cnt <= 0){
        			this.alert("문항이 입력되지 않았습니다.");
        			return true;
        		}

        		var nRowCnt = this.ds_queEx.rowcount;
        		for(var i=0; i<nRowCnt; i++){
        			if(this.validateEx(i) == true){
        				return true;
        			}
        		}
        	}
        }


        this.validateEx = function(idx){
        	if(this.ds_queEx.getColumn(idx, "EXAMPLENO") == "" || this.ds_queEx.getColumn(idx, "EXAMPLENO") == null){
        		this.alert("문항번호를 입력하세요");
        		return true;
        	}
        	if(this.ds_queEx.getColumn(idx, "EXAMPLETEXT") == "" || this.ds_queEx.getColumn(idx, "EXAMPLETEXT") == null){
        		this.alert("문항을 입력하세요");
        		return true;
        	}
        }









        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.ad16p03_oninit,this);
            this.addEventHandler("onload",this.ad16p03_onload,this);
            this.Div.form.div_areaItem.form.div_sub1.form.in_cb_inqType.addEventHandler("onitemchanged",this.Div_div_areaItem_div_sub1_in_cb_inqType_onitemchanged,this);
            this.Div.form.btn_save.addEventHandler("onclick",this.Div_btn_save_onclick,this);
            this.Div.form.btn_close.addEventHandler("onclick",this.Div_btn_close_onclick,this);
            this.div_areaQueInq.form.btn_queExAdd.addEventHandler("onclick",this.div_areaQueInq_btn_queExAdd_onclick,this);
            this.div_areaQueInq.form.gd_queEx.addEventHandler("oncellclick",this.div_areaQueInq_gd_queEx_oncellclick,this);
            this.div_areaQueInq.form.Static02.addEventHandler("onclick",this.Div_Static02_onclick,this);
            this.sub_title_wrap.form.sub_title.addEventHandler("onclick",this.sub_title_wrap_sub_title_onclick,this);
        };

        this.loadIncludeScript("ad16p03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
