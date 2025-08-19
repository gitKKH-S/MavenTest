(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Left");
            this.set_titletext("Form_Left");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(220,628);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPageLog", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("st_menu_nm","0","0","220","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("HOME");
            obj.set_background("darkblue");
            obj.set_color("white");
            obj.set_padding("0px");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_left_menu","0","30","220",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("gds_left_menu");
            obj.set_treeusecheckbox("false");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_border("1px solid #d1d1d1");
            obj.set_autosizingtype("none");
            obj.set_scrollbartype("default");
            obj.set_background("");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"131\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:MENU_LEVEL\" treestartlevel=\"1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",220,628,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Left.xfdl", function() {
        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){

        	}else{

         	}
        }

        this.grd_left_menu_oncellclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	var page_path  	= objApp.gds_left_menu.getColumn(e.row,"PAGE_PATH");

        	if(page_path != null){
        		this.leftMenuSet(e.row, this.st_menu_nm.text);
        	}else{
        		//page_path가 null일 경우 해당메뉴의 서브메뉴중 page_path가 있는 최상단 메뉴를 로드
        		for(var i=e.row+1; i < objApp.gds_left_menu.rowcount; i++){
        			var page_path  	= objApp.gds_left_menu.getColumn(i,"PAGE_PATH");

        			if(page_path != null){
        				this.leftMenuSet(i,  this.st_menu_nm.text);
        				i = objApp.gds_left_menu.rowcount;
        			}
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.grd_left_menu.addEventHandler("oncellclick",this.grd_left_menu_oncellclick,this);
        };

        this.loadIncludeScript("Form_Left.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
