(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmGetDatasets");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"path\" type=\"STRING\" size=\"256\"/><Column id=\"dataset_id\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_columns", this);
            obj._setContents("<ColumnInfo><Column id=\"column_id\" type=\"STRING\" size=\"256\"/><Column id=\"column_type\" type=\"STRING\" size=\"256\"/><Column id=\"column_size\" type=\"STRING\" size=\"256\"/><Column id=\"column_prop\" type=\"STRING\" size=\"256\"/><Column id=\"column_sumtext\" type=\"STRING\" size=\"256\"/><Column id=\"column_datapath\" type=\"STRING\" size=\"256\"/><Column id=\"column_description\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rows", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_finder", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stHSpliter","350","45","10",null,null,"15",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("◀\r\n▶");
            obj.set_background("#eeeeee");
            obj.set_textAlign("center");
            obj.set_font("8px/normal \"Gulim\"");
            obj.set_border("1px solid #b7b1b2");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","15","45",null,null,"stHSpliter:-1","15",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("2px solid #125dae,1px solid #b7b1b2,1px solid #b7b1b2,1px solid #b7b1b2");
            obj.set_binddataset("ds_list");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Path\"/><Cell col=\"1\" text=\"Dataset ID\"/></Band><Band id=\"body\"><Cell text=\"bind:path\"/><Cell col=\"1\" text=\"bind:dataset_id\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stGridList","15","15","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Dataset List");
            obj.set_font("normal 700 17px/normal \"Arial,Malgun Gothic,Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Tab("tbDataset","stHSpliter:16","15",null,null,"15","15",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_tabposition("bottom");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tbDataset);
            obj.set_text("Dataset");
            obj.set_border("0px none");
            this.tbDataset.addChild(obj.name, obj);

            obj = new Static("stGridList00","0","0","120","30",null,null,null,null,null,null,this.tbDataset.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("Columns");
            obj.set_font("normal 700 17px/normal \"Arial,Malgun Gothic,Gulim\"");
            this.tbDataset.Tabpage1.addChild(obj.name, obj);

            obj = new Static("stVSpliter","0","225",null,"10","0",null,null,null,null,null,this.tbDataset.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("▲▼");
            obj.set_background("#eeeeee");
            obj.set_textAlign("center");
            obj.set_font("8px/normal \"Gulim\"");
            obj.set_border("1px solid #b7b1b2");
            this.tbDataset.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grdColumns","0","30",null,null,"0","stVSpliter:-1",null,null,null,null,this.tbDataset.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_border("2px solid #125dae,1px solid #b7b1b2,1px solid #b7b1b2,1px solid #b7b1b2");
            obj.set_binddataset("ds_columns");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Id\"/><Cell col=\"1\" text=\"Type\"/><Cell col=\"2\" text=\"Size\"/><Cell col=\"3\" text=\"Prop\"/><Cell col=\"4\" text=\"SumText\"/><Cell col=\"5\" text=\"DataPath\"/><Cell col=\"6\" text=\"Description\"/></Band><Band id=\"body\"><Cell text=\"bind:column_id\"/><Cell col=\"1\" text=\"bind:column_type\"/><Cell col=\"2\" text=\"bind:column_size\"/><Cell col=\"3\" text=\"bind:column_prop\"/><Cell col=\"4\" text=\"bind:column_sumtext\"/><Cell col=\"5\" text=\"bind:column_datapath\"/><Cell col=\"6\" text=\"bind:column_description\"/></Band></Format></Formats>");
            this.tbDataset.Tabpage1.addChild(obj.name, obj);

            obj = new Static("stGridList00_00","0","stVSpliter:15","54","30",null,null,null,null,null,null,this.tbDataset.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("Rows");
            obj.set_font("normal 700 17px/normal \"Arial,Malgun Gothic,Gulim\"");
            this.tbDataset.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grdRows","0","stVSpliter:45",null,null,"0","0",null,null,null,null,this.tbDataset.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_border("2px solid #125dae,1px solid #b7b1b2,1px solid #b7b1b2,1px solid #b7b1b2");
            obj.set_binddataset("ds_rows");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.tbDataset.Tabpage1.addChild(obj.name, obj);

            obj = new Static("stDsNm","stGridList00_00:10","stVSpliter:15",null,"30","0",null,null,null,null,null,this.tbDataset.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("text");
            obj.set_font("normal 700 17px/normal \"Arial,Malgun Gothic,Gulim\"");
            this.tbDataset.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("in_edit_00",null,"250","145","25","0",null,null,null,null,null,this.tbDataset.Tabpage1.form);
            obj.set_taborder("6");
            this.tbDataset.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmbDsRows",null,"250","136","25","in_edit_00:4",null,null,null,null,null,this.tbDataset.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_type("dropdown");
            obj.set_text("Combo00");
            this.tbDataset.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tbDataset);
            obj.set_text("Source");
            obj.set_border("0px none");
            this.tbDataset.addChild(obj.name, obj);

            obj = new TextArea("taDatasetSource","0","30",null,null,"0","0",null,null,null,null,this.tbDataset.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_border("2px solid #125dae,1px solid #b7b1b2,1px solid #b7b1b2,1px solid #b7b1b2");
            this.tbDataset.Tabpage2.addChild(obj.name, obj);

            obj = new Static("stGridList","0","0","160","30",null,null,null,null,null,null,this.tbDataset.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("Dataset Source");
            obj.set_font("normal 700 17px/normal \"Arial,Malgun Gothic,Gulim\"");
            this.tbDataset.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btnCopy",null,"15","120","25","15",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Coyp Clipboard");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbFinder","stGridList:15","15",null,"25","stHSpliter:1",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_type("caseifilterlike");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Button("btnReload",null,"15","120","25","150",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("reload");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmGetDatasets_test.xfdl", function() {
        /**
        	개발용입니다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        	테스트용으로만 사용하세요

        	사용법)
        	FrameBase > MAIN_FRAME 에 onkeydown 이벤트 추가 + 아래 매서드 추가

        	//테스트용임 올리지마세요------------------
        	this.Form_Work_onkeydown = function(obj:nexacro.Form,e:nexacro.KeyEventInfo)
        	{
        		if(e.keycode == 49 && e.altkey && e.ctrlkey && e.shiftkey){ // '1' + alt + ctr + shift
        			var objChildFrame = new ChildFrame();
        			objChildFrame.init("frmGetDatasets"
        							  , 0
        							  , 0
        							  , 1300
        							  , 700
        							  , null
        							  , null
        							  , "CM::frmGetDatasets_test.xfdl");
        			objChildFrame.set_showtitlebar(true);
        			objChildFrame.set_dragmovetype("all");
        			objChildFrame.set_openalign("center middle");
        			objChildFrame.set_autosize("false");
        			objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)");

        			objChildFrame.set_resizable("true") // set
        			var objParam = {};
        			objChildFrame.showModal(nexacro.getApplication().mainframe.fullFrame
        								  , objParam
        								  , nexacro.getApplication().mainframe.fullFrame.form.div_content.form.div_work.form.div_nomagin.form
        								  , "fn_popupCallback");
        		}
        	};
        	//테스트용임 올리지마세요------------------
        */

        //데이터셋 찾을 From
        this.targetForm;

        //데이터셋 리스트용 Array
        this.datasetlist = [];

        //Drag*Drop 처리용 Object
        this.objDargChecker = 	{
        							"x" : 0, "y" : 0,
        							"dragFlag" : false,
        							"targetObj" : null
        						};

        this.frmGetDatasets_onload = function(obj,e)
        {
        	//this.targetForm = this;
        	this.targetForm = this.opener;
        	//this.targetForm = this.opener.parent.form.div_content.form.div_work.form.div_nomagin.form;

        	//글로벌 데이터셋 리스트 가져오기 함수
        	this.fnGetGlobalDatasetList();

        	//로컬 데이터셋 리스트 가져오기 함수
        	this.fnGetDatasetList(this.targetForm, this.targetForm.name);

        	//Finder Combo에 데이터셋 리스트 연결
        	this.cmbFinder.set_innerdataset(this.ds_finder);

        	/*
        	//가져온 데이터셋 리스트가 있을 경우
        	if(this.ds_list.rowcount!=0)
        	{
        		//데이터셋 정보 로드 함수
        		//this.fnGetDataset();
        	}
        	*/

        	//정렬 기능 초기화
        	this.fnInitGridSort(this.grdList);
        	this.fnInitGridSort(this.tbDataset.Tabpage1.form.grdColumns);
        	this.fnInitGridSort(this.tbDataset.Tabpage1.form.grdRows);

        	//this.set_titletext( this.titletext + " - " + this.targetForm.name);
        	this.set_titletext( "GetDatasets - " + this.targetForm.name);

        	//가져온 데이터셋 리스트가 있을 경우
        	if(this.ds_list.rowcount!=0)
        	{
        		//데이터셋 정보 로드 함수
        		this.grdList.selectRow(0);
        	}
        };

        //콤보로 데이터셋 찾기
        this.cmbFinder_onitemchanged = function(obj,e)
        {
        	//찾은 Row로 데이터셋 리스트 Row 셋팅
        	this.ds_list.set_rowposition(e.postindex-1);
        };

        //글로벌 데이터셋 리스트 가져오기 함수
        this.fnGetGlobalDatasetList = function()
        {
        	var objApp = nexacro.getApplication();
        	var objObjects = objApp.all;
        	var nLength = objObjects.length;
        	var nRow;

        	this.ds_list.set_enableevent(false);
        	this.ds_finder.set_enableevent(false);
        	for(var i=0;i<nLength;i++)
        	{
        		if(objObjects[i] instanceof nexacro.NormalDataset)
        		{
        			nRow = this.ds_list.addRow();
        			this.ds_list.setColumn(nRow, "path", "application");
        			this.ds_list.setColumn(nRow, "dataset_id", objObjects[i].id);

        			nRow = this.ds_finder.addRow();
        			this.ds_finder.setColumn(nRow, "code", objObjects[i].id + " (application)");
        			this.ds_finder.setColumn(nRow, "value", objObjects[i].id + " (application)");

        			this.datasetlist["application"+"."+objObjects[i].id] = objObjects[i];
        		}
        	}
        	this.ds_finder.set_enableevent(false);
        	this.ds_list.set_enableevent(true);
        }

        //로컬 데이터셋 리스트 가져오기 함수
        this.fnGetDatasetList = function(objForm, sScope)
        {
        	var objComps = objForm.components;
        	var objComp;

        	var nCount = objComps.length;

        	var objObjects = objForm.objects;
        	var nLength = objObjects.length;
        	var nRow;

        	this.ds_list.set_enableevent(false);
        	this.ds_finder.set_enableevent(false);
        	for(var i=0;i<nLength;i++)
        	{
        		if(objObjects[i] instanceof nexacro.NormalDataset)
        		{
        			nRow = this.ds_list.addRow();
        			this.ds_list.setColumn(nRow, "path", sScope);
        			this.ds_list.setColumn(nRow, "dataset_id", objObjects[i].id);

        			nRow = this.ds_finder.addRow();
        			this.ds_finder.setColumn(nRow, "code", objObjects[i].id + " ("+sScope+")");
        			this.ds_finder.setColumn(nRow, "value", objObjects[i].id + " ("+sScope+")");

        			this.datasetlist[sScope+"."+objObjects[i].id] = objObjects[i];
        		}
        	}
        	this.ds_finder.set_enableevent(false);
        	this.ds_list.set_enableevent(true);

        	for(var i=0;i<nCount;i++)
        	{
        		objComp = objComps[i];

        		if(objComp instanceof nexacro.Div)
        		{
        			//Div일 경우 재귀 호출
        			this.fnGetDatasetList(objComp.form, sScope + "."+objComp.id+".form");
        		}
        		else if(objComp instanceof nexacro.PopupDiv)
        		{
        			//Popup Div일 경우 재귀 호출
        			this.fnGetDatasetList(objComp.form, sScope + "."+objComp.id+".form");
        		}
        		else if(objComp instanceof nexacro.Tab)
        		{
        			var nTabCount = objComp.tabpages.length;
        			for(var j=0;j<nTabCount;j++)
        			{
        				var objTabPage = objComp.tabpages[j];

        				//Tab일 경우 재귀 호출
        				this.fnGetDatasetList(objTabPage.form, sScope + "."+objComp.id+"."+objTabPage.id+".form")
        			}
        		}
        	}
        }

        //데이터셋 정보 로드 함수
        this.fnGetDataset = function()
        {
        	var nRow = this.ds_list.rowposition;
        	var sPath = this.ds_list.getColumn(nRow, "path");
        	var sDatasetId = this.ds_list.getColumn(nRow, "dataset_id");
        	var objDs;

        	var nColCount;
        	var objColumnInfo;
        	var nAddRow;

        	var objGridColumns = this.tbDataset.Tabpage1.form.grdColumns;
        	var objGridRows = this.tbDataset.Tabpage1.form.grdRows;
        	var objTaDsSource = this.tbDataset.Tabpage2.form.taDatasetSource;
        	var sDsSource;

        	if(!sPath)return;

        	this.fnClearAllSort(objGridColumns);
        	this.fnClearAllSort(objGridRows);

        	objDs = this.datasetlist[sPath+"."+sDatasetId];

        	this.ds_columns.set_enableevent(false);
        	this.ds_columns.clearData();
        	nColCount = objDs.colcount;

        	for(var i=0;i<nColCount;i++)
        	{
        		nAddRow = this.ds_columns.addRow();
        		objColumnInfo = objDs.getColumnInfo(i);
        		this.ds_columns.setColumn(nAddRow, "column_id", objColumnInfo.name);
        		this.ds_columns.setColumn(nAddRow, "column_type", objColumnInfo.type);
        		this.ds_columns.setColumn(nAddRow, "column_size", objColumnInfo.size);
        		this.ds_columns.setColumn(nAddRow, "column_prop", objColumnInfo.prop);
        		this.ds_columns.setColumn(nAddRow, "column_sumtext", objColumnInfo.sumtext);
        		this.ds_columns.setColumn(nAddRow, "column_datapath", objColumnInfo.datapath);

        	}
        	this.ds_columns.set_enableevent(true);

        	this.ds_rows.set_enableevent(false);
        	this.ds_rows.clearData();
        	this.ds_rows.copyData(objDs);
        	this.ds_rows.set_enableevent(true);

        	objGridRows.createFormat();
        	objGridRows.setFormatRowProperty(0, "size", 30);
        	objGridRows.setFormatRowProperty(1, "size", 30);
        	objGridRows.insertContentsCol("left", 0);
        	objGridRows.setFormatColProperty(0, "size", 40);
        	objGridRows.setCellProperty("head", 0, "text", "No");
        	objGridRows.setCellProperty("body", 0, "text", "expr:currow+1");
        	objGridRows.setCellProperty("body", 0, "textAlign", "center");

        	sDsSource = objDs.saveXML();
        	sDsSource = sDsSource.replace('<Dataset id="'+objDs.id+'">\n', "");
        	sDsSource = sDsSource.replace('<\/Dataset>', "");
        	sDsSource = nexacro.replaceAll(sDsSource, '	<ColumnInfo>', "<ColumnInfo>");
        	sDsSource = nexacro.replaceAll(sDsSource, '\n	', "\n");
        	objTaDsSource.set_value(sDsSource);
        }

        //데이터셋 리스트 Row 변경 시
        this.ds_list_onrowposchanged = function(obj,e)
        {
        	var path = obj.getColumn(e.newrow, "path");
        	var datasetId = obj.getColumn(e.newrow, "dataset_id");
        	//데이터셋 이름표시 변경
        	this.tbDataset.Tabpage1.form.stDsNm.set_text(path + " > " + datasetId);

        	//데이터셋 정보 로드 함수
        	this.fnGetDataset();

        	// cmbDsRows 세팅
        	this.fnInitCmbDsRows();
        };

        //클립보드 복사 버튼 클릭 시
        this.btnCopy_onclick = function(obj,e)
        {
        	//데이터셋 XML정보 클립보드로 복사
        	var objTaDsSource = this.tbDataset.Tabpage2.form.taDatasetSource;
        	system.setClipboard("CF_TEXT", objTaDsSource.value);
        };

        //////////////////////////////그리드 정렬 START////////////////////////////////////////////////
        /**
        * @description form onload --> define config object and addEventHandler (form, grid)
        * @param objForm : form,
        *		 objConfig : {objGrid,[strMarkType,ascMark,descMark,multikey]}
        * @return
        */
        this.fnInitGridSort = function(objGrid)
        {
        	objGrid.keyType	= "all";
        	objGrid.marker	= "text";
        	objGrid.ascMark	= "▲";
        	objGrid.descMark = "▼";
        	objGrid.varFlag	= "";
        	objGrid.colIdx1	= "";

        	objGrid.addEventHandler("onheadclick",this.grid_onheadclick,this);
        };

        /**
        * @description 정렬 상태 셋팅 (실제 정렬 처리는 fnExecuteSort 에서 담당)
        * @param  {grid} 대상 Grid Component
                  {headCellIndex} headCellIndex head cell index
                  {isMultiple} 다중선택여부
                  {sortStatus} 정렬상태 강제 지정 (미지정시 현재 상태 반전)
        * @return {boolean} 상태 변경 여부
        */
        this.fnSetSortStatus = function(grid, headCellIndex, isMultiple, sortStatus)
        {
        	// head cell index 에 해당하는 body cell index
        	var bodyCellIndex = this.fnGetBodyCellIndex(grid, headCellIndex);
        	if (bodyCellIndex < 0)
        	{
        		return false;
        	}
        	// body cell index 에 해당하는 바인드 컬럼명
        	var columnName = this.fnGetBindColumnNameByIndex(grid, bodyCellIndex);
        	if (this.gfnIsNull(columnName))
        	{
        		trace("Check Grid body cell bind value");
        		return false;
        	}

        	if (this.gfnIsNull(isMultiple))
        	{
        		isMultiple = false;
        	}

        	if (this.gfnIsNull(sortStatus))
        	{
        		sortStatus = -1;
        	}

        	// Cell별 정렬정보
        	if (this.gfnIsNull(grid.cellInfos))
        	{
        		grid.cellInfos = {};
        	}

        	// 정렬대상컬럼 (순서중요)
        	if (this.gfnIsNull(grid.sortItems))
        	{
        		grid.sortItems = [];
        	}

        	var cellInfos = grid.cellInfos,
        		sortItems = grid.sortItems,
        		cellInfo = cellInfos[columnName],
        		sortItem,
        		status;

        	if (this.gfnIsNull(cellInfo))
        	{
        		var headText = grid.getCellText(-1, headCellIndex);
        		cellInfo = cellInfos[columnName] = { index: headCellIndex, status: 0, text: headText };
        	}

        	// set sort status
        	if (isMultiple)
        	{
        		status = cellInfo.status;

        		if (sortStatus == -1)
        		{
        			if (status == 0)
        			{
        				cellInfo.status = 1;
        			}
        			else if (status == 1)
        			{
        				cellInfo.status = 2;
        			}
        			else if (status == 2)
        			{
        				cellInfo.status = 0;
        			}
        		}
        		else
        		{
        			cellInfo.status = sortStatus;
        		}
        	}
        	else
        	{
        		for (var p in cellInfos)
        		{
        			if (!cellInfos.hasOwnProperty(p))
        			{
        				return;
        			}

        			cellInfo = cellInfos[p];

        			if (cellInfo.index == headCellIndex)
        			{
        				status = cellInfo.status;

        				if (sortStatus == -1)
        				{
        					if (status == 0)
        					{
        						cellInfo.status = 1;
        					}
        					else if (status == 1)
        					{
        						cellInfo.status = 2;
        					}
        					else if (status == 2)
        					{
        						cellInfo.status = 0;
        					}
        				}
        				else
        				{
        					cellInfo.status = sortStatus;
        				}
        			}
        			else
        			{
        				cellInfo.status = 0;
        			}

        			if (cellInfo.status == 0)
        			{
        				for (var j = 0, len2 = sortItems.length; j < len2; j++)
        				{
        					if (sortItems[j] !== columnName)
        					{
        						sortItems.splice(j, 1);

        						break;
        					}
        				}
        			}
        		}
        	}

        	var hasItem = false;

        	for (var i = 0, len = sortItems.length; i < len; i++)
        	{
        		if (sortItems[i] == columnName)
        		{
        			hasItem = true;
        			break;
        		}
        	}

        	if (!hasItem)
        	{
        		sortItems.push(columnName);
        	}

        	return true;
        }

        /**
        * @description 정렬 적용
        * @param  {grid} 대상 Grid Component
        * @return
        */
        this.fnExecuteSort = function(grid)
        {
        	var cellInfos = grid.cellInfos,
        		sortItems = grid.sortItems,
        		cellInfo,
        		sortItem,
        	    columnName,
        		headCellIndex,
        		status,
        		sortString = "";

        	if (this.gfnIsNull(cellInfos) || this.gfnIsNull(sortItems))
        	{
        		return;
        	}

        	// keystring 조합
        	for (var i = 0, len = sortItems.length; i < len; i++)
        	{
        		columnName = sortItems[i];
        		status = cellInfos[columnName].status;

        		if (status > 0)
        		{
        			sortString += (status == 1 ? "+" : "-") + columnName;
        		}
        	}

        	var nCellIdx = grid.getBindCellIndex("body", columnName)

        	if (grid.varFlag == "-" &&  nCellIdx == grid.colIdx1)
        	{
        		grid.varFlag="";
        		this.fnClearSort(grid, nCellIdx);

        		return;
        	}

        	var ds = grid.getBindDataset();;

        	// keystring 확인
        	var curKeyString = ds.keystring;
        	var groupKeyString = "";

        	if (curKeyString.length > 0 && curKeyString.indexOf(",") < 0)
        	{
        		var sIndex = curKeyString.indexOf("S:");
        		var gIndex = curKeyString.indexOf("G:");

        		if (sIndex > -1)
        		{
        			groupKeyString = "";
        		}
        		else
        		{
        			if (gIndex < 0)
        			{
        				groupKeyString = "G:"+curKeyString;
        			}
        			else
        			{
        				groupKeyString = curKeyString;
        			}
        		}
        	}
        	else
        	{
        		var temps = curKeyString.split(",");
        		var temp;

        		for (var i = 0, len = temps.length; i < len; i++)
        		{
        			temp = temps[i];

        			if (temp.length > 0 && temp.indexOf("S:") < 0)
        			{
        				if (temp.indexOf("G:") < 0)
        				{
        					groupKeyString = "G:"+temp;
        				}
        				else
        				{
        					groupKeyString = temp;
        				}
        			}
        		}
        	}

        	if (sortString.length > 0)
        	{
        		var sortKeyString = "S:" + sortString;

        		if (groupKeyString.length > 0)
        		{
        			ds.set_keystring(sortKeyString + "," + groupKeyString);
        		}
        		else
        		{
        			ds.set_keystring(sortKeyString);
        		}

        		grid.sortKeyString = sortKeyString;
        	}
        	else
        	{
        		ds.set_keystring(groupKeyString);

        		grid.sortKeyString = "";
        	}

        	this.varFlag = ds.keystring.substr(2, 1);
        	this.colIdx1 = grid.getBindCellIndex("body", columnName);

        	// 정렬표시
        	var index, text, marker, style;

        	for (var p in cellInfos)
        	{
        		if (!cellInfos.hasOwnProperty(p))
        		{
        			return;
        		}

        		cellInfo = cellInfos[p];
        		status = cellInfo.status;
        		index = cellInfo.index;
        		text = cellInfo.text;

        		marker = this.gfnDecode(status, 1, grid.ascMark, 2, grid.descMark, "");

        		if (grid.marker == "text")
        		{
        			if(this.gfnIsNull(marker)==true)
        			{
        				grid.setCellProperty( "head", index, "text", text);
        			}
        			else
        			{
        				grid.setCellProperty( "head", index, "text", text + marker);
        			}
        		}
        		else if ( grid.marker == "image" )
        		{
        			var background = marker + " 50 5";
        		}
        	}
        }

        /**
        * @description 주어진 head cell 에 해당하는 정렬 상태 제거
        * @param  {grid} 대상 Grid Component
                  {headCellIndex} head cell index
        * @return
        */
        this.fnClearSort = function(grid, headCellIndex)
        {
        	var bodyCellIndex = this.fnGetBodyCellIndex(grid, headCellIndex);

        	if (bodyCellIndex < 0)
        	{
        		return;
        	}

        	var columnName	= this.fnGetBindColumnNameByIndex(grid, bodyCellIndex),
        		cellInfos	= grid.cellInfos,
        		sortItems	= grid.sortItems;

        	if (this.gfnIsNull(cellInfos) || this.gfnIsNull(sortItems))
        	{
        		return;
        	}

        	if (this.gfnIsNull(columnName) || this.gfnIsNull(cellInfos[columnName]))
        	{
        		return;
        	}

        	// 정렬상태를 변경
        	cellInfos[columnName].status = 0;

        	// 정렬실행
        	this.fnExecuteSort(grid);

        	// 컬럼정보제거
        	for (var i = 0, len = sortItems.length; i < len; i++)
        	{
        		if (sortItems[i] == columnName)
        		{
        			sortItems.splice(i, 1);
        			break;
        		}
        	}

        	// Cell 정보제거
        	delete cellInfos[columnName];
        }

        /**
        * @description 현재 적용된 모든 정렬 상태 제거
        * @param  {grid} 대상 Grid Component
        * @return
        */
        this.fnClearAllSort = function(grid)
        {
        	var cellInfos = grid.cellInfos;
        	var sortItems = grid.sortItems;

        	if (this.gfnIsNull(cellInfos) || this.gfnIsNull(sortItems))
        	{
        		return;
        	}

        	// 모든 정렬상태를 원래로 되돌림.
        	for (var p in cellInfos)
        	{
        		if (!cellInfos.hasOwnProperty(p))
        		{
        			return;
        		}

        		cellInfos[p].status = 0;
        	}

        	// 정렬실행
        	this.fnExecuteSort(grid);

        	// 정보 초기화
        	grid.cellInfos = {};
        	grid.sortItems = [];
        }

        /************************************************************************************************
        * 정렬 utility 관련 function 처리
        ************************************************************************************************/
         /**
        * @description body cell index로 binding 된 컬럼명 가져오기
        * @param  {grid} 대상 Grid Component
                  {index} index body cell index
        * @return {String} Column Id
        */
        this.fnGetBindColumnNameByIndex = function(grid, index)
        {
        	var text = "";
        	var columnid = "";
        	var subCell = grid.getCellProperty("body", index, "subcell");

        	if (subCell > 0)
        	{
        		text = grid.getSubCellProperty("body", index, 0, "text");
        	}
        	else
        	{
        		text = grid.getCellProperty("body", index, "text");
        	}

        	if (!this.gfnIsNull(text))
        	{
        		if (text.search(/^BIND\(/) > -1)
        		{
        			columnid = text.replace(/^BIND\(/, "");
        			columnid = columnid.substr(0, columnid.length-1);
        		}
        		else if ( text.search(/^bind:/) > -1 )
        		{
        			columnid = text.replace(/^bind:/, "");
        		}
        	}

        	return columnid;
        }

        /**
        * @description head cell에 match되는 body cell 가져오기
        * @param {grid} 대상 Grid Component
                 {headCellIndex} headCellIndex head cell index
        * @return {number} Cell Index
        */
        this.fnGetBodyCellIndex = function(grid, headCellIndex)
        {
        	// Max Head Row Index
        	var maxHeadRow = 0;

        	for (var i = 0, len = grid.getCellCount("head"); i < len; i++)
        	{
        		var row = grid.getCellProperty("head", i, "row");
        		if (maxHeadRow < row)
        		{
        			maxHeadRow = row;
        		}
        	}
        	// Max Body Row Index
        	var maxBodyRow = 0;
        	for (var i=0, len=grid.getCellCount("body"); i<len; i++)
        	{
        		var row = grid.getCellProperty("body", i, "row");

        		if (maxBodyRow < row)
        		{
        			maxBodyRow = row;
        		}
        	}

        	if (maxHeadRow == 0 && maxBodyRow == 0)
        	{
        		return headCellIndex;
        	}

        	// Body Row 가 1개 이상일 경우
        	// Head의 row 가 Body의 row 보다 클 경우 차이 row 를 뺀 것을 대상으로 찾고
        	// Body의 row 가 Head의 row 보다 크거나 같을 경우 row index가 같은 대상을 찾는다.
        	var cellIndex = -1;
        	var sRow = -1;
        	var nRow = parseInt(grid.getCellProperty("head", headCellIndex, "row"));
        	var nCol = parseInt(grid.getCellProperty("head", headCellIndex, "col"));
        	var nColspan = parseInt(grid.getCellProperty("head", headCellIndex, "colspan"));

        	if (maxHeadRow > maxBodyRow)
        	{
        		sRow = nRow - (maxHeadRow - maxBodyRow);
        		sRow = (sRow < 0 ? 0 : sRow);
        	}
        	else
        	{
        		sRow = nRow;
        	}

        	var cRow, cCol, cColspan;

        	for (var i = 0, len = grid.getCellCount("body"); i < len; i++)
        	{
        		cRow = parseInt(grid.getCellProperty("body", i, "row"));
        		cCol = parseInt(grid.getCellProperty("body", i, "col"));
        		cColspan = parseInt(grid.getCellProperty("body", i, "colspan"));

        		// 실제로 매칭되는 body cell 이 없지만 colspan으로 첫번째 항목을 찾을 경우.
        		if (sRow == cRow && nCol == cCol && nColspan == cColspan)
        		{
        			cellIndex = i;

        			break;
        		}
        	}

        	return cellIndex;
        }

        /**************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         **************************************************************************/
        /**
         * @description grid onheadclick event --> shift or ctrl key down check and execute sort
        */
        this.grid_onheadclick = function (obj,e)
        {
        	var multiple = false;

        	if (obj.keyType == "shift")
        	{
        		if (e.shiftkey)
        		{
        			multiple = true;
        		}
        	}
        	else if (obj.keyType == "ctrl")
        	{
        		if (e.ctrlkey)
        		{
        			multiple = true;
        		}
        	}
        	else if (obj.keyType == "all")
        	{
        		if (e.shiftkey || e.ctrlkey)
        		{
        			multiple = true;
        		}
        	}


        	if (this.fnSetSortStatus(obj, e.cell, multiple))
        	{
        		this.fnExecuteSort(obj);
        	}

        }
        //////////////////////////////그리드 정렬 END////////////////////////////////////////////////
        //////////////////////////////공통함수 START////////////////////////////////////////////////
        /**************************************************************************
        *  공통 함수 처리 영역
           해당 함수의 경우 프로젝트 사용 시 프로젝트 공통함수로 전환을 권장 드립니다.
        **************************************************************************/
        /**
        * @description 파리미터 값이 Null 인지 체크하는 함수
        * @param {All} val – 체크할 문자열
        * @return {boolean} Val이 undefined, null, NaN, "", Array.length=0 인 경우 = true
        															  이 외의 경우 = false
        */
        this.gfnIsNull = function (Val)
        {
        	if (new String(Val).valueOf() == "undefined") return true;
        	if (Val == null) return true;
        	if (("x" + Val == "xNaN") && (new String(Val.length).valueOf() == "undefined")) return true;
        	if (Val.length == 0) return true;

        	return false;
        }

        /**
        * @description Grid에서 expression으로  표현할때 decode 문처럼 사용할 수 있는 기능
        * @param N/A
        * @return {String} varRtnValue - 반환된 문자열
        */
        this.gfnDecode = function ()
        {
        	var varRtnValue = null;
        	var arrArgument = arguments;
        	var varValue = arrArgument[0];
        	var bIsDefault = false;
        	var nCount = 0;

        	if ((arrArgument.length % 2) == 0)
        	{
        		nCount = arrArgument.length - 1;
        		bIsDefault = true;
        	}
        	else
        	{
        		nCount = arrArgument.length;
        		bIsDefault = false;
        	}

        	for (var i = 1; i < nCount; i += 2)
        	{
        		if (varValue == arrArgument[i])
        		{
        			varRtnValue = arrArgument[i + 1];
        			i = nCount;
        		}
        	}

        	if (varRtnValue == null && bIsDefault)
        	{
        		varRtnValue = arrArgument[arrArgument.length - 1];
        	}

        	return varRtnValue;
        };

        //////////////////////////////공통함수 END////////////////////////////////////////////////

        //////////////////////////////스플리터 처리 함수 START////////////////////////////////////////////////
        this.stHSpliter_onlbuttondown = function(obj,e)
        {
        	var objDrag = this.objDargChecker;

        		//Drag 여부값 설정(드래그 시작)
        		objDrag.dragFlag = true;

        		//클릭된 좌표값 설정
        		objDrag.x = e.screenx;
        		objDrag.y = e.screeny;

        		//클릭된 컴포넌트 설정
        		objDrag.targetObj = obj;
        		obj.orgX = obj.getOffsetLeft();
        		obj.orgY = obj.getOffsetTop();
        };

        this.stHSpliter_onlbuttonup = function(obj,e)
        {
        	//Drag 여부값 설정(드래그 종료)
        	this.objDargChecker.dragFlag = false;
        };

        this.tbDataset_Tabpage1_stVSpliter_onlbuttondown = function(obj,e)
        {
        	var objDrag = this.objDargChecker;

        		//Drag 여부값 설정(드래그 시작)
        		objDrag.dragFlag = true;

        		//클릭된 좌표값 설정
        		objDrag.x = e.screenx;
        		objDrag.y = e.screeny;

        		//클릭된 컴포넌트 설정
        		objDrag.targetObj = obj;
        		obj.orgX = obj.getOffsetLeft();
        		obj.orgY = obj.getOffsetTop();
        };

        this.tbDataset_Tabpage1_stVSpliter_onlbuttonup = function(obj,e)
        {
        	//Drag 여부값 설정(드래그 종료)
        	this.objDargChecker.dragFlag = false;
        };

        this.frmGetDatasets_onmousemove = function(obj,e)
        {
        	var objDrag = this.objDargChecker;

        	//Drag 여부값이 시작 상태일 경우
        	if(objDrag.dragFlag==true)
        	{
        		var nX, nX1, nX2, nY, nY1, nY2;
        		var objTargetComp = objDrag.targetObj;
        		if(objTargetComp.id=="stHSpliter")
        		{
        			nX1 = objDrag.x;
        			nX2 = e.screenx;
        			nX = objTargetComp.orgX + nX2 - nX1;
        			objTargetComp.setOffsetLeft(nX);
        			this.resetScroll();

        		}else if(objTargetComp.id=="stVSpliter")
        		{
        			nY1 = objDrag.y;
        			nY2 = e.screeny;
        			nY = objTargetComp.orgY + nY2 - nY1;
        			objTargetComp.setOffsetTop(nY);
        			objTargetComp.parent.resetScroll();
        		}
        	}
        };
        //////////////////////////////스플리터 처리 함수 END////////////////////////////////////////////////

        this.prgrBar_00_onclick = function(obj,e)
        {

        };

        this.btnReload_onclick = function(obj,e)
        {
        	this.ds_list.clearData();
        	this.ds_finder.clearData();
        	this.ds_columns.clearData();
        	this.ds_rows.clearData();
        	this.frmGetDatasets_onload();
        };

        this.tbDataset_Tabpage1_btnSearch_onclick = function(obj,e)
        {
        	var searchCondition = this.tbDataset.Tabpage1.form.in_edit_00.value;

        };


        /**
        *  검색세팅 -------------
        */
        this.fnInitCmbDsRows = function(){
        	var objConfig  = {
        						objGrid		: this.tbDataset.Tabpage1.form.grdRows,
        						objCombo	: this.tbDataset.Tabpage1.form.cmbDsRows,
        						objEdit		: this.tbDataset.Tabpage1.form.in_edit_00
        					 }
        	var objForm = this.getOwnerFrame().form;

        	objConfig.objDs	= objForm.objects[objConfig.objGrid.binddataset];

        	objConfig.objCombo.set_enableevent(false);
        	var dsBind = this.fnSetComboDataset(objConfig.objCombo,objConfig.objGrid,obj);

        	//dataset addChild & set_innerdataset (code,value)
        	objForm.addChild(dsBind.name,dsBind);
        	objConfig.objCombo.set_innerdataset(dsBind.name);
        	objConfig.objCombo.set_codecolumn('code');
        	objConfig.objCombo.set_datacolumn('value');
        	objConfig.objCombo.set_index(0);
        	objConfig.objCombo.set_enableevent(true);

        	//edit reset
        	objConfig.objEdit.set_value("");
        	objConfig.objDs.set_filterstr("");

        	//comboChange_onitemchanged
        	objConfig.objCombo.code = dsBind.getColumn(0,'code');

        	objConfig.objEdit.addEventHandler("onkeyup",this.tbDataset_Tabpage1_in_edit_00_onkeyup,objForm);
        	objConfig.objCombo.addEventHandler("onitemchanged",this.tbDataset_Tabpage1_cmbDsRows_onitemchanged,objForm);

        	objForm.config = objConfig;
        }

        /**
        * @description create dataset (combo inner dataset)
        * @param objCombo : combo, objGrid : grid , objForm : this (form)
        * @return objTempDs : dataset 'dsBindCombo'
        */
        this.fnSetComboDataset = function(objCombo,objGrid,objForm)
        {
        	//create dataset name ('dsBindCombo' + random 4 number)
        	var sDatasetId = "dsBindCombo" + nexacro.floor(Math.random(),4) * 10000;	// 0 ~ 9999

        	//create dataset
        	var objTempDs = new Dataset;
        	objTempDs.set_name(sDatasetId);

        	objTempDs.set_enableevent(false);
        	objTempDs.addColumn('code','string',256);
        	objTempDs.addColumn('value','string',256);

        	var sText = "";
        	var sCode = "";
        	var nRow = -1;
        	for(var i=0; i<objGrid.getCellCount('head'); i++)
        	{
        		sText = objGrid.getCellProperty( 'head', i, 'text' );

        		if(sText == "No") continue;

        		if(!this.gfnIsNull(sText))
        		{
        			sCode = objGrid.getCellProperty( 'body', i, 'text' );

        			nRow = objTempDs.addRow();
        			objTempDs.setColumn(nRow,'code',sCode.replace('bind:',''));
        			objTempDs.setColumn(nRow,'value',sText);
        		}
        	}

        	objTempDs.set_enableevent(true);

        	return objTempDs;
        }

        /**
        * @description filter excute
        * @param obj : form, strValue : filter contents
        */
        this.fnSetFilterExcute = function (obj,strValue)
        {
        	var objDs	 = obj.config.objDs;
        	var sFilterstr = "";
        	if(!this.gfnIsNull(strValue))
        	{
        		/*
        		var objCombo = obj.config.objCombo;
        		var objEdit	 = obj.config.objEdit;
        		*/
        		sFilterstr = obj.config.objCombo.code + ".indexOf('"+obj.config.objEdit.strFilter+"') > -1";
        	}

        	objDs.set_enableevent(false);
        	objDs.set_filterstr(sFilterstr);
        	objDs.set_enableevent(true);
        }


        /**************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         **************************************************************************/
        /**
         * @description edit onkeyup event --> this.fnSetFilterExcute(obj:form,strValue)
        */
        this.tbDataset_Tabpage1_in_edit_00_onkeyup = function(obj,e)
        {
        	var objForm = obj.parent.getOwnerFrame().form;
        	obj.strFilter = obj.value;

        	this.fnSetFilterExcute(objForm,obj.strFilter);
        };

        /**
         * @description combo onitemchanged event --> combo code setting
        */
        this.tbDataset_Tabpage1_cmbDsRows_onitemchanged = function(obj,e)
        {
        	obj.code = e.postvalue;
        };

        /**************************************************************************
        *  공통 함수 처리 영역
           해당 함수의 경우 프로젝트 사용 시 프로젝트 공통함수로 전환을 권장 드립니다.
        **************************************************************************/
        /**
        * @description 파리미터 값이 Null 인지 체크하는 함수
        * @param {All} val – 체크할 문자열
        * @return {boolean} Val이 undefined, null, NaN, "", Array.length=0 인 경우 = true
        															  이 외의 경우 = false
        */
        this.gfnIsNull = function (Val)
        {
        	if (new String(Val).valueOf() == "undefined") return true;
        	if (Val == null) return true;
        	if (("x" + Val == "xNaN") && (new String(Val.length).valueOf() == "undefined")) return true;
        	if (Val.length == 0) return true;

        	return false;
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frmGetDatasets_onload,this);
            this.addEventHandler("onmousemove",this.frmGetDatasets_onmousemove,this);
            this.stHSpliter.addEventHandler("onlbuttondown",this.stHSpliter_onlbuttondown,this);
            this.stHSpliter.addEventHandler("onlbuttonup",this.stHSpliter_onlbuttonup,this);
            this.tbDataset.Tabpage1.form.stVSpliter.addEventHandler("onlbuttondown",this.tbDataset_Tabpage1_stVSpliter_onlbuttondown,this);
            this.tbDataset.Tabpage1.form.stVSpliter.addEventHandler("onlbuttonup",this.tbDataset_Tabpage1_stVSpliter_onlbuttonup,this);
            this.tbDataset.Tabpage1.form.cmbDsRows.addEventHandler("onitemchanged",this.tbDataset_Tabpage1_cmbDsRows_onitemchanged,this);
            this.btnCopy.addEventHandler("onclick",this.btnCopy_onclick,this);
            this.cmbFinder.addEventHandler("onitemchanged",this.cmbFinder_onitemchanged,this);
            this.btnReload.addEventHandler("onclick",this.btnReload_onclick,this);
            this.ds_list.addEventHandler("onrowposchanged",this.ds_list_onrowposchanged,this);
        };

        this.loadIncludeScript("frmGetDatasets_test.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
