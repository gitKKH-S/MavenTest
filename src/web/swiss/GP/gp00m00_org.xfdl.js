(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("hp03m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("15px/normal \"SpoqaHanSans-Regular\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,840);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"번호\" type=\"STRING\" size=\"256\"/><Column id=\"조사년도\" type=\"STRING\" size=\"256\"/><Column id=\"조사종류\" type=\"STRING\" size=\"256\"/><Column id=\"제목\" type=\"STRING\" size=\"256\"/><Column id=\"첨부\" type=\"STRING\" size=\"256\"/><Column id=\"조회수\" type=\"STRING\" size=\"256\"/><Column id=\"작성자\" type=\"STRING\" size=\"256\"/><Column id=\"작성일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"번호\">공지</Col><Col id=\"조사년도\">2020</Col><Col id=\"조사종류\">졸업생정보</Col><Col id=\"제목\">[인적정보조사]조사 일정 안내</Col><Col id=\"첨부\">url('file://C:/Users/Administrator/Desktop/swissPub/_resource_/_theme_/default/images/ico_file.png')</Col><Col id=\"조회수\">471</Col><Col id=\"작성자\">취업통계팀한송희</Col><Col id=\"작성일\">2020-07-01</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","840",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","840",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","840",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new ImageViewer("imgefer","30","0","1200","140",null,null,null,null,null,null,this.Div.form);
            obj.set_image("url(\'theme::default/images/img_researchTop.jpg\')");
            obj.set_border("0px none");
            obj.set_accessibilitylabel("자료실 고등교육기관졸업자 취업통계조사 자료실입니다.");
            obj.set_taborder("2");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Div("Div00","30","imgefer:13","1200","80",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_cssclass("reser_desc01");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","224","10","876","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("교육기관(고등교육기관 및 직업계고) 졸업자 취업통계(통계작성 승인번호 : 제920024호)");
            obj.set_font("bold 18px/normal \"Arial\",\"SpoqaHanSans-Regular\"");
            obj.set_color("#e16f00");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","469","37","401","33",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("- 고등교육기관 졸업자 취업통계조사");
            obj.set_color("#616161");
            obj.set_font("18px/normal \"Arial\",\"SpoqaHanSans-Regular\"");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","30","Div00:13","1200","330",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_background("transparent");
            obj.set_image("url(\'theme::default/images/reser_table01.png\')");
            this.Div.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01","30","600","1200","180",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_background("transparent");
            obj.set_image("url(\'theme::default/images/reser_visual01.jpg\')");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static03","470","Div00:0","30","13",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_background("url(\'theme::default/images/reser_bul01.png\') no-repeat");
            this.Div.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,840,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("gp00m00_copy0.xfdl","CM::common.xjs");
        this.registerScript("gp00m00_copy0.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("gp00m00_copy0.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
