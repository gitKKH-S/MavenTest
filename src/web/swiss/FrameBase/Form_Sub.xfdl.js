(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            this.set_cssclass("btn_sty06");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,3000);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("Grid00","20","110","400","98",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_scrollbartype("default none");
            obj.set_autofittype("col");
            obj.set_binddataset("");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"항목\"/><Cell col=\"2\" text=\"자료구분\"/><Cell col=\"3\" text=\"타입\"/><Cell col=\"4\" text=\"자리수\" border=\"0px none,0px none,1px solid #a5a5a5\"/></Band><Band id=\"body\"><Cell text=\"bind:NO\" border=\"0px none,0px none,1px solid #a5a5a5\"/><Cell col=\"1\" text=\"bind:항목\"/><Cell col=\"2\" text=\"bind:자료구분\"/><Cell col=\"3\" text=\"bind:타입\"/><Cell col=\"4\" text=\"bind:자리수\" border=\"0px none,0px none,1px solid #a5a5a5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","35","190","60",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("default\r\nclass명 없음\r\ngrid_pdShort 패딩4px");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","202","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("class : grid_sty04\r\n졸업 후 상황");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","230","455","152","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("text");
            obj.set_cssclass("btn_sty02");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00","402","458","122","34",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("text");
            obj.set_font("normal 14px/normal");
            obj.set_cssclass("btn_sty03");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","544","455","122","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("text");
            obj.set_cssclass("btn_sty04");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00","686","450","190","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("text");
            obj.set_cssclass("btn_sty05");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","20","450","190","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("text");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","20","370","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("default\r\nclass명 없음");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","230","370","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("class : btn_sty02\r\n졸업후상황");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","400","370","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("class : btn_sty03\r\n졸업생정보");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","544","370","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("class : btn_sty04\r\n신입생정보");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","686","370","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("class : btn_sty05\r\n기본");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00_00","886","458","122","34",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("text");
            obj.set_cssclass("btn_sty06");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00","880","370","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("class : btn_sty06");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","25","810","210","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","30","730","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("에디트\r\ndefault");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02","282","795","210","50",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("edit_sty02");
            obj.set_background("#fdfdfd");
            obj.set_border("1px solid #dcdcdc,1px solid #dcdcdc,1px solid #dcdcdc,0px");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","282","730","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("에디트\r\nclass : edit_sty02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","30","940","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Static01");
            obj.set_cssclass("title_t2");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_01","25","890","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("title\r\nclass : title_t2");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","25","590","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("default\r\nclass명 없음");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","25","650","210","40",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("KEDI대학원(본교)");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00_00_00","20","553","122","34",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("text");
            obj.set_cssclass("btn_sty07");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_01","20","512","120","37",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("class : btn_sty07");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","440","110","320","100",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("grid_sty02");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"테스트\"/><Cell col=\"1\" text=\"테스트\"/><Cell col=\"2\" text=\"테스트\" border=\"0px none,0px none,1px solid #e3c89c\"/></Band><Band id=\"body\"><Cell text=\"테스트\"/><Cell col=\"1\" text=\"테스트\"/><Cell col=\"2\" text=\"테스트\" border=\"0px none,0px none,1px solid #e3c89c\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","152","940","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("Static02");
            obj.set_cssclass("fontC59");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_01_00","130","890","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("폰트컬러#595959\r\nclass : fontC59");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_01_00","186","512","120","37",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("class : btn_sty08");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_01_00_00","370","512","120","37",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("class : btn_sty09");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_01_00_00_00","556","512","120","37",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("class : btn_sty10");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00_00_00_00","186","553","122","34",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("text");
            obj.set_cssclass("btn_sty08");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00_00_00_00_00","378","553","122","34",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("text");
            obj.set_cssclass("btn_sty09");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00_00_00_00_00_00","564","553","122","34",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("text");
            obj.set_cssclass("btn_sty10");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_01_00_00_00_00","705","510","230","37",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("class : btn_styLarge(font 18px)");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01","712","540","190","50",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("text");
            obj.set_cssclass("btn_styLarge");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","342","926","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("CheckBox00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","790","40","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("class : grid_sty03\r\n신입생 정보");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","806","105","375","105",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("grid_sty03");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"테스트\"/><Cell col=\"1\" text=\"테스트\"/><Cell col=\"2\" text=\"테스트\" border=\"0px none,0px none,1px solid #d0e39c\"/></Band><Band id=\"body\"><Cell text=\"테스트\"/><Cell col=\"1\" text=\"테스트\"/><Cell col=\"2\" text=\"테스트\" border=\"0px none,0px none,1px solid #d0e39c\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","439","45","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("class : grid_sty02\r\n졸업생 정보");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02_00","20","262","375","105",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_cssclass("grid_sty04");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"테스트\"/><Cell col=\"1\" text=\"테스트\"/><Cell col=\"2\" text=\"테스트\" border=\"0px none,0px none,1px solid #e6c9c0\"/></Band><Band id=\"body\"><Cell text=\"테스트\"/><Cell col=\"1\" text=\"테스트\"/><Cell col=\"2\" text=\"테스트\" border=\"0px none,0px none,1px solid #e6c9c0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1200,3000,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","Div.form.Grid00_00","accessibilityaction","Dataset00","학교명");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Grid00","accessibilityaction","Dataset00","학교명");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Sub.xfdl", function() {


        this.CheckBox00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00_00.addEventHandler("onclick",this.Button00_00_onclick,this);
            this.Static00_00_00_00_00.addEventHandler("onclick",this.Static00_00_00_00_00_onclick,this);
            this.Static00_00_00_00_00_00.addEventHandler("onclick",this.Static00_00_00_00_00_00_onclick,this);
            this.Static00_00_00_00_00_00_00.addEventHandler("onclick",this.Static00_00_00_00_00_00_onclick,this);
            this.Static00_00_00_00_00_00_00_01.addEventHandler("onclick",this.Static00_00_00_00_00_00_onclick,this);
            this.Static00_00_00_00_00_00_00_01_00.addEventHandler("onclick",this.Static00_00_00_00_00_00_onclick,this);
            this.Static00_00_00_00_00_00_00_01_00_00.addEventHandler("onclick",this.Static00_00_00_00_00_00_onclick,this);
            this.Static00_00_00_00_00_00_00_01_00_00_00.addEventHandler("onclick",this.Static00_00_00_00_00_00_onclick,this);
            this.Static00_00_00_00_00_00_00_01_00_00_00_00.addEventHandler("onclick",this.Static00_00_00_00_00_00_onclick,this);
            this.Button00_00_01.addEventHandler("onclick",this.Button00_00_onclick,this);
            this.CheckBox00.addEventHandler("onclick",this.CheckBox00_onclick,this);
        };

        this.loadIncludeScript("Form_Sub.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
