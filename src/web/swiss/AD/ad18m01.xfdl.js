(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ad18m01");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("15px/normal \"SpoqaHanSans-Regular\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,2000);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMain", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DEPOSITORY_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SHELF\" type=\"STRING\" size=\"256\"/><Column id=\"APPLY_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"TRN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"UNI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_BUNDLE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_NM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DEPOSITORY_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DONE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPT\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIERID\" type=\"STRING\" size=\"256\"/><Column id=\"MODDTHM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_STATS_RECH\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_STATS_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"ENTER_STAT\" type=\"STRING\" size=\"32\"/><Column id=\"EVID_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"SCHOOL_EMPY\" type=\"STRING\" size=\"256\"/><Column id=\"SCHOOL_EMPY_CNT\" type=\"STRING\" size=\"32\"/><Column id=\"ABRD_EMPY\" type=\"STRING\" size=\"256\"/><Column id=\"ABRD_EMPY_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"FARMMER\" type=\"STRING\" size=\"256\"/><Column id=\"FARMMER_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"SOLDIER\" type=\"STRING\" size=\"256\"/><Column id=\"SOLDIER_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PERFORM\" type=\"STRING\" size=\"256\"/><Column id=\"PERFORM_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"DPLAY\" type=\"STRING\" size=\"256\"/><Column id=\"DPLAY_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PUBLISH\" type=\"STRING\" size=\"256\"/><Column id=\"PUBLISH_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"SCNRO\" type=\"STRING\" size=\"256\"/><Column id=\"SCNRO_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"CPYRIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"CPYRIGHT_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"DOMESTIC\" type=\"STRING\" size=\"256\"/><Column id=\"DOMESTIC_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ABRD\" type=\"STRING\" size=\"256\"/><Column id=\"ABRD_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"N_MISSIONED_TRAINEE\" type=\"STRING\" size=\"256\"/><Column id=\"N_MISSIONED_TRAINEE_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"FLIGHT_TRAINEE\" type=\"STRING\" size=\"256\"/><Column id=\"FLIGHT_TRAINEE_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRISONER\" type=\"STRING\" size=\"256\"/><Column id=\"PRISONER_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"DEATH\" type=\"STRING\" size=\"256\"/><Column id=\"DEATH_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"IMMIGRATION\" type=\"STRING\" size=\"256\"/><Column id=\"IMMIGRATION_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"LONG_HOSPIT\" type=\"STRING\" size=\"256\"/><Column id=\"LONG_HOSPIT_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC\" type=\"STRING\" size=\"256\"/><Column id=\"POLICE_TRAINEE\" type=\"STRING\" size=\"256\"/><Column id=\"POLICE_TRAINEE_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"FIREFIGHTING_TRAINEE\" type=\"STRING\" size=\"256\"/><Column id=\"FIREFIGHTING_TRAINEE_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIERID\" type=\"STRING\" size=\"256\"/><Column id=\"MODDTHM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ELEC_DOC_DIR\" type=\"STRING\" size=\"256\"/><Column id=\"ELEC_DOC_NM\" type=\"STRING\" size=\"32\"/><Column id=\"ELEC_DOC_PASS\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIERID\" type=\"STRING\" size=\"256\"/><Column id=\"MODDTHM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDoc", this);
            obj._setContents("<ColumnInfo><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPOSITORY_NO\" type=\"STRING\" size=\"32\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIERID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPOSITORY_NM\" type=\"STRING\" size=\"32\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"MODDTHM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYear", this);
            obj._setContents("<ColumnInfo><Column id=\"year\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","2000",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Div("sub_title_wrap","30","20","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            this.Div.addChild(obj.name, obj);

            obj = new Static("sub_title","0","0","260","32",null,null,null,null,null,null,this.Div.form.sub_title_wrap.form);
            obj.set_taborder("0");
            obj.set_text("문서 기본 정보");
            obj.set_cssclass("title_t2");
            this.Div.form.sub_title_wrap.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","20",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","1200",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","1200",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Div("rowGrid","30","60","1200","370",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_cssclass("rowGrid");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","155","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("6");
            obj.set_text("문서본관위치");
            obj.set_cssclass("boxTitleManda");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","61","155","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("12");
            obj.set_text("학교명");
            obj.set_cssclass("boxTitleManda");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","122","155","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("13");
            obj.set_text("제목");
            obj.set_cssclass("boxTitleManda");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_01","400","0","155","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("14");
            obj.set_text("선반위치");
            obj.set_cssclass("boxTitleManda");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","400","61","155","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("15");
            obj.set_text("본분교");
            obj.set_cssclass("boxTitleManda");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02","155","0","246","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("16");
            obj.set_cssclass("boxDesc");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","155","61","246","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("17");
            obj.set_cssclass("boxDesc");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00","155","122","1045","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("18");
            obj.set_cssclass("boxDesc");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Edit("in_edt_schnm","165","71","224","40",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("4");
            obj.set_accessibilitylabel("학교명");
            obj.getSetter("validate").set("학교명,required:true");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Edit("in_edt_title","165","132","1024","40",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("7");
            obj.set_accessibilitylabel("제목");
            obj.getSetter("validate").set("제목,required:true");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02_02","555","0","246","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("19");
            obj.set_cssclass("boxDesc");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_01","555","61","246","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("20");
            obj.set_cssclass("boxDesc");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","801","0","155","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("21");
            obj.set_text("년도회차");
            obj.set_cssclass("boxTitleManda");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","801","61","155","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("22");
            obj.set_text("문서파일명");
            obj.set_cssclass("boxTitleManda");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_00","956","0","244","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("23");
            obj.set_cssclass("boxDesc");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_01_00","956","61","244","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("24");
            obj.set_cssclass("boxDesc");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Edit("in_edt_filenm","965","71","224","40",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("5");
            obj.set_accessibilitylabel("문서파일명");
            obj.getSetter("validate").set("문서파일명,required:true");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Combo("in_cb_docdepogi","165","12","224","40",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("0");
            obj.set_accessibilitylabel("문서본관위치");
            obj.set_innerdataset("dsDoc");
            obj.set_datacolumn("DEPOSITORY_NM");
            obj.set_codecolumn("DEPOSITORY_NO");
            obj.getSetter("validate").set("문서보관위치,required:true");
            obj.set_text("Combo00");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Combo("in_cb_sunban","565","12","224","40",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("1");
            obj.set_accessibilitylabel("선반위치");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("validate").set("선반위치,required:true");
            var Div_form_rowGrid_form_in_cb_sunban_innerdataset = new nexacro.NormalDataset("Div_form_rowGrid_form_in_cb_sunban_innerdataset", obj);
            Div_form_rowGrid_form_in_cb_sunban_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">1번째</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">2번째</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">3번째</Col></Row><Row><Col id=\"codecolumn\">04</Col><Col id=\"datacolumn\">4번째</Col></Row><Row><Col id=\"codecolumn\">05</Col><Col id=\"datacolumn\">5번째</Col></Row><Row><Col id=\"codecolumn\">06</Col><Col id=\"datacolumn\">6번째</Col></Row><Row><Col id=\"codecolumn\">07</Col><Col id=\"datacolumn\">7번째</Col></Row><Row><Col id=\"codecolumn\">08</Col><Col id=\"datacolumn\">8번째</Col></Row><Row><Col id=\"codecolumn\">09</Col><Col id=\"datacolumn\">9번째</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10번째</Col></Row></Rows>");
            obj.set_innerdataset(Div_form_rowGrid_form_in_cb_sunban_innerdataset);
            obj.set_text("Combo00");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Combo("in_cb_year","965","12","110","40",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("2");
            obj.set_accessibilitylabel("년도회차");
            obj.set_innerdataset("dsYear");
            obj.set_datacolumn("year");
            obj.set_codecolumn("year");
            obj.getSetter("validate").set("년도,required:true");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Combo("in_cb_trn","1077","12","110","40",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("3");
            obj.set_accessibilitylabel("년도회차");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("validate").set("회차,required:true");
            var Div_form_rowGrid_form_in_cb_trn_innerdataset = new nexacro.NormalDataset("Div_form_rowGrid_form_in_cb_trn_innerdataset", obj);
            Div_form_rowGrid_form_in_cb_trn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1회차</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2회차</Col></Row></Rows>");
            obj.set_innerdataset(Div_form_rowGrid_form_in_cb_trn_innerdataset);
            obj.set_text("Combo00");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","0","183","155","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("25");
            obj.set_text("문서번호");
            obj.set_cssclass("boxTitleManda");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_02","155","183","245","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("26");
            obj.set_cssclass("boxDesc");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_01","400","183","155","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("27");
            obj.set_text("보관기간");
            obj.set_cssclass("boxTitleManda");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_01_01","555","183","246","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("28");
            obj.set_cssclass("boxDesc");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00","801","183","155","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("29");
            obj.set_text("시행일");
            obj.set_cssclass("boxTitleManda");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_01_00_00","956","183","244","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("30");
            obj.set_cssclass("boxDesc");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Edit("in_edt_docno","165","191","224","40",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("8");
            obj.set_accessibilitylabel("문서번호");
            obj.getSetter("validate").set("문서번호,required:true");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","0","244","155","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("31");
            obj.set_text("전자문서경로");
            obj.set_cssclass("boxTitle");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_02_00","155","244","245","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("32");
            obj.set_cssclass("boxDesc");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_01_00","400","244","155","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("33");
            obj.set_text("문서비밀번호");
            obj.set_cssclass("boxTitle");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_01_01_00","555","244","645","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("34");
            obj.set_cssclass("boxDesc");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Edit("in_edt_loc","165","254","224","40",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("9");
            obj.set_accessibilitylabel("전자문서경로");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Edit("in_edt_pw","565","254","224","40",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("10");
            obj.set_accessibilitylabel("문서비밀번호");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_02_00_00","155","305","245","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("35");
            obj.set_cssclass("boxDesc");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_01_00_00","400","305","155","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("36");
            obj.set_text("입고일");
            obj.set_cssclass("boxTitleManda");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_01_01_00_00","555","305","645","61",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("37");
            obj.set_cssclass("boxDesc");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Edit("in_edt_regnm","165","315","224","40",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("11");
            obj.set_accessibilitylabel("접수자");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Calendar("in_calr_keep","565","191","224","42",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("38");
            obj.getSetter("validate").set("보관기간,required:true");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Calendar("in_calr_pdate","965","191","224","42",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("39");
            obj.getSetter("validate").set("시행일,required:true");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Calendar("in_calr_regdate","565","314","224","42",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("40");
            obj.getSetter("validate").set("입고일,required:true");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Combo("in_cb_branch","565","71","224","40",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("41");
            obj.set_accessibilitylabel("선반위치");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("validate").set("본분교,required:true");
            var Div_form_rowGrid_form_in_cb_branch_innerdataset = new nexacro.NormalDataset("Div_form_rowGrid_form_in_cb_branch_innerdataset", obj);
            Div_form_rowGrid_form_in_cb_branch_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">본교</Col></Row><Row><Col id=\"codecolumn\">05</Col><Col id=\"datacolumn\">분교</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">캠퍼스</Col></Row><Row><Col id=\"codecolumn\">04</Col><Col id=\"datacolumn\">캠퍼스1</Col></Row></Rows>");
            obj.set_innerdataset(Div_form_rowGrid_form_in_cb_branch_innerdataset);
            obj.set_text("Combo00");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","30","rowGrid:-63","155","61",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_text("접수자");
            obj.set_cssclass("boxTitle");
            this.Div.addChild(obj.name, obj);

            obj = new Static("sub_title","35","rowGrid:45","260","32",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_text("제출 자료 유무");
            obj.set_cssclass("title_t2");
            this.Div.addChild(obj.name, obj);

            obj = new Div("colGrid","30","sub_title:10","1200","84",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_cssclass("colGrid");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","300","40",null,null,null,null,null,null,this.Div.form.colGrid.form);
            obj.set_taborder("0");
            obj.set_text("취업통계조사결과");
            obj.set_cssclass("boxTitleCol");
            obj.set_textAlign("center");
            this.Div.form.colGrid.addChild(obj.name, obj);

            obj = new Static("Static00_00","300","0","300","40",null,null,null,null,null,null,this.Div.form.colGrid.form);
            obj.set_taborder("1");
            obj.set_text("취업통계현황");
            obj.set_cssclass("boxTitleCol");
            obj.set_textAlign("center");
            this.Div.form.colGrid.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","600","0","300","40",null,null,null,null,null,null,this.Div.form.colGrid.form);
            obj.set_taborder("2");
            obj.set_text("진학자 현황");
            obj.set_cssclass("boxTitleCol");
            obj.set_textAlign("center");
            this.Div.form.colGrid.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","900","0","300","40",null,null,null,null,null,null,this.Div.form.colGrid.form);
            obj.set_taborder("3");
            obj.set_text("증빙목록");
            obj.set_cssclass("boxTitleCol");
            obj.set_textAlign("center");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.Div.form.colGrid.addChild(obj.name, obj);

            obj = new Static("Static01","0","40","300","40",null,null,null,null,null,null,this.Div.form.colGrid.form);
            obj.set_taborder("4");
            obj.set_cssclass("boxDescCol");
            this.Div.form.colGrid.addChild(obj.name, obj);

            obj = new Static("Static01_00","300","40","300","40",null,null,null,null,null,null,this.Div.form.colGrid.form);
            obj.set_taborder("5");
            obj.set_cssclass("boxDescCol");
            this.Div.form.colGrid.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","600","40","300","40",null,null,null,null,null,null,this.Div.form.colGrid.form);
            obj.set_taborder("6");
            obj.set_cssclass("boxDescCol");
            this.Div.form.colGrid.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","900","40","300","40",null,null,null,null,null,null,this.Div.form.colGrid.form);
            obj.set_taborder("7");
            obj.set_cssclass("boxDescCol");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.Div.form.colGrid.addChild(obj.name, obj);

            obj = new CheckBox("in_chkbox_a1","139","50","23","20",null,null,null,null,null,null,this.Div.form.colGrid.form);
            obj.set_taborder("8");
            obj.set_accessibilitylabel("교내취업자");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.Div.form.colGrid.addChild(obj.name, obj);

            obj = new CheckBox("in_chkbox_a2","439","50","23","20",null,null,null,null,null,null,this.Div.form.colGrid.form);
            obj.set_taborder("9");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.Div.form.colGrid.addChild(obj.name, obj);

            obj = new CheckBox("in_chkbox_a3","739","50","23","20",null,null,null,null,null,null,this.Div.form.colGrid.form);
            obj.set_taborder("10");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.Div.form.colGrid.addChild(obj.name, obj);

            obj = new CheckBox("in_chkbox_a4","1039","50","23","20",null,null,null,null,null,null,this.Div.form.colGrid.form);
            obj.set_taborder("19");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.Div.form.colGrid.addChild(obj.name, obj);

            obj = new Static("sub_title00","30","colGrid:45","260","32",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("8");
            obj.set_text("제출 자료 유무");
            obj.set_cssclass("title_t2");
            this.Div.addChild(obj.name, obj);

            obj = new Div("colGrid00","30","sub_title00:10","1200","104",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("9");
            obj.set_cssclass("colGrid");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","300","40",null,null,null,null,null,null,this.Div.form.colGrid00.form);
            obj.set_taborder("0");
            obj.set_text("교내 취업자");
            obj.set_cssclass("boxTitleCol");
            obj.set_textAlign("center");
            this.Div.form.colGrid00.addChild(obj.name, obj);

            obj = new Static("Static00_00","300","0","300","40",null,null,null,null,null,null,this.Div.form.colGrid00.form);
            obj.set_taborder("1");
            obj.set_text("해외 취업자");
            obj.set_cssclass("boxTitleCol");
            obj.set_textAlign("center");
            this.Div.form.colGrid00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","600","0","300","40",null,null,null,null,null,null,this.Div.form.colGrid00.form);
            obj.set_taborder("2");
            obj.set_text("농림어업종사자");
            obj.set_cssclass("boxTitleCol");
            obj.set_textAlign("center");
            this.Div.form.colGrid00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","900","0","300","40",null,null,null,null,null,null,this.Div.form.colGrid00.form);
            obj.set_taborder("3");
            obj.set_text("입대자");
            obj.set_cssclass("boxTitleCol");
            obj.set_textAlign("center");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.Div.form.colGrid00.addChild(obj.name, obj);

            obj = new Static("Static01","0","40","300","60",null,null,null,null,null,null,this.Div.form.colGrid00.form);
            obj.set_taborder("4");
            obj.set_cssclass("boxDescCol");
            this.Div.form.colGrid00.addChild(obj.name, obj);

            obj = new Static("Static01_00","300","40","300","60",null,null,null,null,null,null,this.Div.form.colGrid00.form);
            obj.set_taborder("5");
            obj.set_cssclass("boxDescCol");
            this.Div.form.colGrid00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","600","40","300","60",null,null,null,null,null,null,this.Div.form.colGrid00.form);
            obj.set_taborder("6");
            obj.set_cssclass("boxDescCol");
            this.Div.form.colGrid00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","900","40","300","60",null,null,null,null,null,null,this.Div.form.colGrid00.form);
            obj.set_taborder("7");
            obj.set_cssclass("boxDescCol");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.Div.form.colGrid00.addChild(obj.name, obj);

            obj = new CheckBox("in_chkbox_b1","59","60","23","20",null,null,null,null,null,null,this.Div.form.colGrid00.form);
            obj.set_taborder("12");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_visible("false");
            this.Div.form.colGrid00.addChild(obj.name, obj);

            obj = new CheckBox("in_chkbox_b2","369","60","23","20",null,null,null,null,null,null,this.Div.form.colGrid00.form);
            obj.set_taborder("14");
            obj.set_accessibilitylabel("해외 취업자");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_visible("false");
            this.Div.form.colGrid00.addChild(obj.name, obj);

            obj = new CheckBox("in_chkbox_b3","669","60","23","20",null,null,null,null,null,null,this.Div.form.colGrid00.form);
            obj.set_taborder("16");
            obj.set_accessibilitylabel("농림어업종사자");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_visible("false");
            this.Div.form.colGrid00.addChild(obj.name, obj);

            obj = new CheckBox("in_chkbox_b4","969","60","23","20",null,null,null,null,null,null,this.Div.form.colGrid00.form);
            obj.set_taborder("18");
            obj.set_accessibilitylabel("입대자");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_visible("false");
            this.Div.form.colGrid00.addChild(obj.name, obj);

            obj = new Edit("in_edt_b1","85","49","114","40",null,null,null,null,null,null,this.Div.form.colGrid00.form);
            obj.set_taborder("13");
            obj.set_accessibilitylabel("교내취업자");
            obj.set_inputtype("digit");
            obj.set_textAlign("right");
            this.Div.form.colGrid00.addChild(obj.name, obj);

            obj = new Edit("in_edt_b2","in_chkbox_b2:3","50","114","40",null,null,null,null,null,null,this.Div.form.colGrid00.form);
            obj.set_taborder("15");
            obj.set_accessibilitylabel("해외 취업자");
            obj.set_inputtype("digit");
            obj.set_textAlign("right");
            this.Div.form.colGrid00.addChild(obj.name, obj);

            obj = new Edit("in_edt_b3","in_chkbox_b3:3","50","114","40",null,null,null,null,null,null,this.Div.form.colGrid00.form);
            obj.set_taborder("17");
            obj.set_accessibilitylabel("농림어업종사자");
            obj.set_inputtype("digit");
            obj.set_textAlign("right");
            this.Div.form.colGrid00.addChild(obj.name, obj);

            obj = new Edit("in_edt_b4","in_chkbox_b4:3","50","114","40",null,null,null,null,null,null,this.Div.form.colGrid00.form);
            obj.set_taborder("27");
            obj.set_accessibilitylabel("입대자");
            obj.set_inputtype("digit");
            obj.set_textAlign("right");
            this.Div.form.colGrid00.addChild(obj.name, obj);

            obj = new Static("Static02","in_edt_b1:5","62","33","18",null,null,null,null,null,null,this.Div.form.colGrid00.form);
            obj.set_taborder("8");
            obj.set_text("명");
            this.Div.form.colGrid00.addChild(obj.name, obj);

            obj = new Static("Static02_00","in_edt_b2:5","62","33","18",null,null,null,null,null,null,this.Div.form.colGrid00.form);
            obj.set_taborder("9");
            obj.set_text("명");
            this.Div.form.colGrid00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","in_edt_b3:5","62","33","18",null,null,null,null,null,null,this.Div.form.colGrid00.form);
            obj.set_taborder("10");
            obj.set_text("명");
            this.Div.form.colGrid00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","in_edt_b4:5","62","33","18",null,null,null,null,null,null,this.Div.form.colGrid00.form);
            obj.set_taborder("11");
            obj.set_text("명");
            this.Div.form.colGrid00.addChild(obj.name, obj);

            obj = new Static("sub_title00_00","30","colGrid00:30","260","32",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("10");
            obj.set_text("개인 창작 활동 종사자");
            obj.set_cssclass("title_t3");
            this.Div.addChild(obj.name, obj);

            obj = new Div("colGrid00_00","30","sub_title00_00:10","1200","104",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("11");
            obj.set_cssclass("colGrid");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","240","40",null,null,null,null,null,null,this.Div.form.colGrid00_00.form);
            obj.set_taborder("0");
            obj.set_text("공연");
            obj.set_cssclass("boxTitleCol");
            obj.set_textAlign("center");
            this.Div.form.colGrid00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","240","0","240","40",null,null,null,null,null,null,this.Div.form.colGrid00_00.form);
            obj.set_taborder("1");
            obj.set_text("전시");
            obj.set_cssclass("boxTitleCol");
            obj.set_textAlign("center");
            this.Div.form.colGrid00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","480","0","240","40",null,null,null,null,null,null,this.Div.form.colGrid00_00.form);
            obj.set_taborder("2");
            obj.set_text("출판및출반");
            obj.set_cssclass("boxTitleCol");
            obj.set_textAlign("center");
            this.Div.form.colGrid00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","720","0","240","40",null,null,null,null,null,null,this.Div.form.colGrid00_00.form);
            obj.set_taborder("3");
            obj.set_text("영상제작");
            obj.set_cssclass("boxTitleCol");
            obj.set_textAlign("center");
            this.Div.form.colGrid00_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","40","240","60",null,null,null,null,null,null,this.Div.form.colGrid00_00.form);
            obj.set_taborder("4");
            obj.set_cssclass("boxDescCol");
            this.Div.form.colGrid00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","240","40","240","60",null,null,null,null,null,null,this.Div.form.colGrid00_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("boxDescCol");
            this.Div.form.colGrid00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","480","40","240","60",null,null,null,null,null,null,this.Div.form.colGrid00_00.form);
            obj.set_taborder("6");
            obj.set_cssclass("boxDescCol");
            this.Div.form.colGrid00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","720","40","240","60",null,null,null,null,null,null,this.Div.form.colGrid00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("boxDescCol");
            this.Div.form.colGrid00_00.addChild(obj.name, obj);

            obj = new CheckBox("in_chkbox_c1","29","60","23","20",null,null,null,null,null,null,this.Div.form.colGrid00_00.form);
            obj.set_taborder("15");
            obj.set_accessibilitylabel("공연");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_visible("false");
            this.Div.form.colGrid00_00.addChild(obj.name, obj);

            obj = new CheckBox("in_chkbox_c2","279","60","23","20",null,null,null,null,null,null,this.Div.form.colGrid00_00.form);
            obj.set_taborder("17");
            obj.set_accessibilitylabel("전시");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_visible("false");
            this.Div.form.colGrid00_00.addChild(obj.name, obj);

            obj = new CheckBox("in_chkbox_c3","519","60","23","20",null,null,null,null,null,null,this.Div.form.colGrid00_00.form);
            obj.set_taborder("19");
            obj.set_accessibilitylabel("출판및출반");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_visible("false");
            this.Div.form.colGrid00_00.addChild(obj.name, obj);

            obj = new CheckBox("in_chkbox_c4","759","60","23","20",null,null,null,null,null,null,this.Div.form.colGrid00_00.form);
            obj.set_taborder("21");
            obj.set_accessibilitylabel("영상제작");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_visible("false");
            this.Div.form.colGrid00_00.addChild(obj.name, obj);

            obj = new Edit("in_edt_c1","55","49","114","40",null,null,null,null,null,null,this.Div.form.colGrid00_00.form);
            obj.set_taborder("16");
            obj.set_accessibilitylabel("공연");
            obj.set_inputtype("digit");
            obj.set_textAlign("right");
            this.Div.form.colGrid00_00.addChild(obj.name, obj);

            obj = new Edit("in_edt_c2","in_chkbox_c2:3","50","114","40",null,null,null,null,null,null,this.Div.form.colGrid00_00.form);
            obj.set_taborder("18");
            obj.set_accessibilitylabel("전시");
            obj.set_inputtype("digit");
            obj.set_textAlign("right");
            this.Div.form.colGrid00_00.addChild(obj.name, obj);

            obj = new Edit("in_edt_c3","in_chkbox_c3:3","50","114","40",null,null,null,null,null,null,this.Div.form.colGrid00_00.form);
            obj.set_taborder("20");
            obj.set_accessibilitylabel("출판및출반");
            obj.set_inputtype("digit");
            obj.set_textAlign("right");
            this.Div.form.colGrid00_00.addChild(obj.name, obj);

            obj = new Edit("in_edt_c4","in_chkbox_c4:3","50","114","40",null,null,null,null,null,null,this.Div.form.colGrid00_00.form);
            obj.set_taborder("22");
            obj.set_accessibilitylabel("영상제작");
            obj.set_inputtype("digit");
            obj.set_textAlign("right");
            this.Div.form.colGrid00_00.addChild(obj.name, obj);

            obj = new Static("Static02","in_edt_c1:5","62","33","18",null,null,null,null,null,null,this.Div.form.colGrid00_00.form);
            obj.set_taborder("8");
            obj.set_text("명");
            this.Div.form.colGrid00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00","in_edt_c2:5","62","33","18",null,null,null,null,null,null,this.Div.form.colGrid00_00.form);
            obj.set_taborder("9");
            obj.set_text("명");
            this.Div.form.colGrid00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","in_edt_c3:5","62","33","18",null,null,null,null,null,null,this.Div.form.colGrid00_00.form);
            obj.set_taborder("10");
            obj.set_text("명");
            this.Div.form.colGrid00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","in_edt_c4:5","62","33","18",null,null,null,null,null,null,this.Div.form.colGrid00_00.form);
            obj.set_taborder("11");
            obj.set_text("명");
            this.Div.form.colGrid00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","960","0","240","40",null,null,null,null,null,null,this.Div.form.colGrid00_00.form);
            obj.set_taborder("12");
            obj.set_text("저작권");
            obj.set_cssclass("boxTitleCol");
            obj.set_textAlign("center");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.Div.form.colGrid00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","960","40","240","60",null,null,null,null,null,null,this.Div.form.colGrid00_00.form);
            obj.set_taborder("13");
            obj.set_cssclass("boxDescCol");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.Div.form.colGrid00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00","1144","62","33","18",null,null,null,null,null,null,this.Div.form.colGrid00_00.form);
            obj.set_taborder("14");
            obj.set_text("명");
            this.Div.form.colGrid00_00.addChild(obj.name, obj);

            obj = new Edit("in_edt_c5","1025","50","114","40",null,null,null,null,null,null,this.Div.form.colGrid00_00.form);
            obj.set_taborder("37");
            obj.set_accessibilitylabel("저작권");
            obj.set_inputtype("digit");
            obj.set_textAlign("right");
            this.Div.form.colGrid00_00.addChild(obj.name, obj);

            obj = new CheckBox("in_chkbox_c5","999","60","23","20",null,null,null,null,null,null,this.Div.form.colGrid00_00.form);
            obj.set_taborder("23");
            obj.set_accessibilitylabel("저작권");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_visible("false");
            this.Div.form.colGrid00_00.addChild(obj.name, obj);

            obj = new Static("sub_title00_00_00","30","colGrid00_00:30","260","32",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("12");
            obj.set_text("진학자");
            obj.set_cssclass("title_t3");
            this.Div.addChild(obj.name, obj);

            obj = new Div("colGrid00_00_00","30","sub_title00_00_00:10","480","104",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("13");
            obj.set_cssclass("colGrid");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","240","40",null,null,null,null,null,null,this.Div.form.colGrid00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("국내");
            obj.set_cssclass("boxTitleCol");
            obj.set_textAlign("center");
            this.Div.form.colGrid00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","240","0","240","40",null,null,null,null,null,null,this.Div.form.colGrid00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("국외");
            obj.set_cssclass("boxTitleCol");
            obj.set_textAlign("center");
            this.Div.form.colGrid00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","40","240","60",null,null,null,null,null,null,this.Div.form.colGrid00_00_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("boxDescCol");
            this.Div.form.colGrid00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","240","40","240","60",null,null,null,null,null,null,this.Div.form.colGrid00_00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("boxDescCol");
            this.Div.form.colGrid00_00_00.addChild(obj.name, obj);

            obj = new CheckBox("in_chkbox_d1","29","60","23","20",null,null,null,null,null,null,this.Div.form.colGrid00_00_00.form);
            obj.set_taborder("6");
            obj.set_accessibilitylabel("국내");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_visible("false");
            this.Div.form.colGrid00_00_00.addChild(obj.name, obj);

            obj = new CheckBox("in_chkbox_d2","279","60","23","20",null,null,null,null,null,null,this.Div.form.colGrid00_00_00.form);
            obj.set_taborder("8");
            obj.set_accessibilitylabel("국외");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_visible("false");
            this.Div.form.colGrid00_00_00.addChild(obj.name, obj);

            obj = new Edit("in_edt_d1","55","49","114","40",null,null,null,null,null,null,this.Div.form.colGrid00_00_00.form);
            obj.set_taborder("7");
            obj.set_accessibilitylabel("국내");
            obj.set_inputtype("digit");
            obj.set_textAlign("right");
            this.Div.form.colGrid00_00_00.addChild(obj.name, obj);

            obj = new Edit("in_edt_d2","in_chkbox_d2:3","50","114","40",null,null,null,null,null,null,this.Div.form.colGrid00_00_00.form);
            obj.set_taborder("41");
            obj.set_accessibilitylabel("국외");
            obj.set_inputtype("digit");
            obj.set_textAlign("right");
            this.Div.form.colGrid00_00_00.addChild(obj.name, obj);

            obj = new Static("Static02","in_edt_d1:5","62","33","18",null,null,null,null,null,null,this.Div.form.colGrid00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("명");
            this.Div.form.colGrid00_00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00","in_edt_d2:5","62","33","18",null,null,null,null,null,null,this.Div.form.colGrid00_00_00.form);
            obj.set_taborder("5");
            obj.set_text("명");
            this.Div.form.colGrid00_00_00.addChild(obj.name, obj);

            obj = new Static("sub_title00_00_00_00","30","colGrid00_00_00:30","260","32",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("14");
            obj.set_text("진학자");
            obj.set_cssclass("title_t3");
            this.Div.addChild(obj.name, obj);

            obj = new Div("colGrid00_01","30","sub_title00_00_00_00:10","1200","104",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("15");
            obj.set_cssclass("colGrid");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","300","40",null,null,null,null,null,null,this.Div.form.colGrid00_01.form);
            obj.set_taborder("0");
            obj.set_text("임관 전 훈련생(여자)");
            obj.set_cssclass("boxTitleCol");
            obj.set_textAlign("center");
            this.Div.form.colGrid00_01.addChild(obj.name, obj);

            obj = new Static("Static00_00","300","0","300","40",null,null,null,null,null,null,this.Div.form.colGrid00_01.form);
            obj.set_taborder("1");
            obj.set_text("항공종사자 교육대상자");
            obj.set_cssclass("boxTitleCol");
            obj.set_textAlign("center");
            this.Div.form.colGrid00_01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","600","0","300","40",null,null,null,null,null,null,this.Div.form.colGrid00_01.form);
            obj.set_taborder("2");
            obj.set_text("경찰공무원 채용후보자 중 훈련생");
            obj.set_cssclass("boxTitleCol");
            obj.set_textAlign("center");
            this.Div.form.colGrid00_01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","900","0","300","40",null,null,null,null,null,null,this.Div.form.colGrid00_01.form);
            obj.set_taborder("3");
            obj.set_text("소방공무원 채용후보자 중 훈련생");
            obj.set_cssclass("boxTitleCol");
            obj.set_textAlign("center");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.Div.form.colGrid00_01.addChild(obj.name, obj);

            obj = new Static("Static01","0","40","300","60",null,null,null,null,null,null,this.Div.form.colGrid00_01.form);
            obj.set_taborder("4");
            obj.set_cssclass("boxDescCol");
            this.Div.form.colGrid00_01.addChild(obj.name, obj);

            obj = new Static("Static01_00","300","40","300","60",null,null,null,null,null,null,this.Div.form.colGrid00_01.form);
            obj.set_taborder("5");
            obj.set_cssclass("boxDescCol");
            this.Div.form.colGrid00_01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","600","40","300","60",null,null,null,null,null,null,this.Div.form.colGrid00_01.form);
            obj.set_taborder("6");
            obj.set_cssclass("boxDescCol");
            this.Div.form.colGrid00_01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","900","40","300","60",null,null,null,null,null,null,this.Div.form.colGrid00_01.form);
            obj.set_taborder("7");
            obj.set_cssclass("boxDescCol");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.Div.form.colGrid00_01.addChild(obj.name, obj);

            obj = new CheckBox("in_chkbox_e1","59","60","23","20",null,null,null,null,null,null,this.Div.form.colGrid00_01.form);
            obj.set_taborder("12");
            obj.set_accessibilitylabel("임관 전 훈련생(여자)");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_visible("false");
            this.Div.form.colGrid00_01.addChild(obj.name, obj);

            obj = new CheckBox("in_chkbox_e2","369","60","23","20",null,null,null,null,null,null,this.Div.form.colGrid00_01.form);
            obj.set_taborder("14");
            obj.set_accessibilitylabel("항공종사자 교육대상자");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_visible("false");
            this.Div.form.colGrid00_01.addChild(obj.name, obj);

            obj = new CheckBox("in_chkbox_e3","669","60","23","20",null,null,null,null,null,null,this.Div.form.colGrid00_01.form);
            obj.set_taborder("16");
            obj.set_accessibilitylabel("경찰공무원 채용후보자 중 훈련생");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_visible("false");
            this.Div.form.colGrid00_01.addChild(obj.name, obj);

            obj = new CheckBox("in_chkbox_e4","969","60","23","20",null,null,null,null,null,null,this.Div.form.colGrid00_01.form);
            obj.set_taborder("18");
            obj.set_accessibilitylabel("소방공무원 채용후보자 중 훈련생");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_visible("false");
            this.Div.form.colGrid00_01.addChild(obj.name, obj);

            obj = new Edit("in_edt_e1","85","49","114","40",null,null,null,null,null,null,this.Div.form.colGrid00_01.form);
            obj.set_taborder("13");
            obj.set_accessibilitylabel("임관 전 훈련생(여자)");
            obj.set_inputtype("digit");
            obj.set_textAlign("right");
            this.Div.form.colGrid00_01.addChild(obj.name, obj);

            obj = new Edit("in_edt_e2","in_chkbox_e2:3","50","114","40",null,null,null,null,null,null,this.Div.form.colGrid00_01.form);
            obj.set_taborder("15");
            obj.set_accessibilitylabel("항공종사자 교육대상자");
            obj.set_inputtype("digit");
            obj.set_textAlign("right");
            this.Div.form.colGrid00_01.addChild(obj.name, obj);

            obj = new Edit("in_edt_e3","in_chkbox_e3:3","50","114","40",null,null,null,null,null,null,this.Div.form.colGrid00_01.form);
            obj.set_taborder("17");
            obj.set_accessibilitylabel("경찰공무원 채용후보자 중 훈련생");
            obj.set_inputtype("digit");
            obj.set_textAlign("right");
            this.Div.form.colGrid00_01.addChild(obj.name, obj);

            obj = new Edit("in_edt_e4","in_chkbox_e4:3","50","114","40",null,null,null,null,null,null,this.Div.form.colGrid00_01.form);
            obj.set_taborder("49");
            obj.set_accessibilitylabel("소방공무원 채용후보자 중 훈련생");
            obj.set_inputtype("digit");
            obj.set_textAlign("right");
            this.Div.form.colGrid00_01.addChild(obj.name, obj);

            obj = new Static("Static02","in_edt_e1:5","62","33","18",null,null,null,null,null,null,this.Div.form.colGrid00_01.form);
            obj.set_taborder("8");
            obj.set_text("명");
            this.Div.form.colGrid00_01.addChild(obj.name, obj);

            obj = new Static("Static02_00","in_edt_e2:5","62","33","18",null,null,null,null,null,null,this.Div.form.colGrid00_01.form);
            obj.set_taborder("9");
            obj.set_text("명");
            this.Div.form.colGrid00_01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","in_edt_e3:5","62","33","18",null,null,null,null,null,null,this.Div.form.colGrid00_01.form);
            obj.set_taborder("10");
            obj.set_text("명");
            this.Div.form.colGrid00_01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","in_edt_e4:5","62","33","18",null,null,null,null,null,null,this.Div.form.colGrid00_01.form);
            obj.set_taborder("11");
            obj.set_text("명");
            this.Div.form.colGrid00_01.addChild(obj.name, obj);

            obj = new Static("sub_title00_00_00_00_00","30","colGrid00_01:30","260","32",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("16");
            obj.set_text("취업 불가자");
            obj.set_cssclass("title_t3");
            this.Div.addChild(obj.name, obj);

            obj = new Div("colGrid00_00_01","32","sub_title00_00_00_00_00:10","1200","290",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("17");
            obj.set_cssclass("colGrid");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","240","40",null,null,null,null,null,null,this.Div.form.colGrid00_00_01.form);
            obj.set_taborder("0");
            obj.set_text("수형자");
            obj.set_cssclass("boxTitleCol");
            obj.set_textAlign("center");
            this.Div.form.colGrid00_00_01.addChild(obj.name, obj);

            obj = new Static("Static00_00","240","0","240","40",null,null,null,null,null,null,this.Div.form.colGrid00_00_01.form);
            obj.set_taborder("1");
            obj.set_text("사망자");
            obj.set_cssclass("boxTitleCol");
            obj.set_textAlign("center");
            this.Div.form.colGrid00_00_01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","480","0","240","40",null,null,null,null,null,null,this.Div.form.colGrid00_00_01.form);
            obj.set_taborder("2");
            obj.set_text("해외이민자");
            obj.set_cssclass("boxTitleCol");
            obj.set_textAlign("center");
            this.Div.form.colGrid00_00_01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","720","0","240","40",null,null,null,null,null,null,this.Div.form.colGrid00_00_01.form);
            obj.set_taborder("3");
            obj.set_text("장기입원자");
            obj.set_cssclass("boxTitleCol");
            obj.set_textAlign("center");
            this.Div.form.colGrid00_00_01.addChild(obj.name, obj);

            obj = new Static("Static01","0","40","240","247",null,null,null,null,null,null,this.Div.form.colGrid00_00_01.form);
            obj.set_taborder("4");
            obj.set_cssclass("boxDescCol");
            this.Div.form.colGrid00_00_01.addChild(obj.name, obj);

            obj = new Static("Static01_00","240","40","240","247",null,null,null,null,null,null,this.Div.form.colGrid00_00_01.form);
            obj.set_taborder("5");
            obj.set_cssclass("boxDescCol");
            this.Div.form.colGrid00_00_01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","480","40","240","247",null,null,null,null,null,null,this.Div.form.colGrid00_00_01.form);
            obj.set_taborder("6");
            obj.set_cssclass("boxDescCol");
            this.Div.form.colGrid00_00_01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","720","40","240","247",null,null,null,null,null,null,this.Div.form.colGrid00_00_01.form);
            obj.set_taborder("7");
            obj.set_cssclass("boxDescCol");
            this.Div.form.colGrid00_00_01.addChild(obj.name, obj);

            obj = new CheckBox("in_chkbox_f1","29","60","23","20",null,null,null,null,null,null,this.Div.form.colGrid00_00_01.form);
            obj.set_taborder("14");
            obj.set_accessibilitylabel("수형자");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_visible("false");
            this.Div.form.colGrid00_00_01.addChild(obj.name, obj);

            obj = new CheckBox("in_chkbox_f2","279","60","23","20",null,null,null,null,null,null,this.Div.form.colGrid00_00_01.form);
            obj.set_taborder("16");
            obj.set_accessibilitylabel("사망자");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_visible("false");
            this.Div.form.colGrid00_00_01.addChild(obj.name, obj);

            obj = new CheckBox("in_chkbox_f3","519","60","23","20",null,null,null,null,null,null,this.Div.form.colGrid00_00_01.form);
            obj.set_taborder("18");
            obj.set_accessibilitylabel("해외이민자");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_visible("false");
            this.Div.form.colGrid00_00_01.addChild(obj.name, obj);

            obj = new CheckBox("in_chkbox_f4","759","60","23","20",null,null,null,null,null,null,this.Div.form.colGrid00_00_01.form);
            obj.set_taborder("20");
            obj.set_accessibilitylabel("장기입원자");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_visible("false");
            this.Div.form.colGrid00_00_01.addChild(obj.name, obj);

            obj = new Edit("in_edt_f1","55","49","114","40",null,null,null,null,null,null,this.Div.form.colGrid00_00_01.form);
            obj.set_taborder("15");
            obj.set_accessibilitylabel("수형자");
            obj.set_inputtype("digit");
            obj.set_textAlign("right");
            this.Div.form.colGrid00_00_01.addChild(obj.name, obj);

            obj = new Edit("in_edt_f2","in_chkbox_f2:3","50","114","40",null,null,null,null,null,null,this.Div.form.colGrid00_00_01.form);
            obj.set_taborder("17");
            obj.set_accessibilitylabel("사망자");
            obj.set_inputtype("digit");
            obj.set_textAlign("right");
            this.Div.form.colGrid00_00_01.addChild(obj.name, obj);

            obj = new Edit("in_edt_f3","in_chkbox_f3:3","50","114","40",null,null,null,null,null,null,this.Div.form.colGrid00_00_01.form);
            obj.set_taborder("19");
            obj.set_accessibilitylabel("해외이민자");
            obj.set_inputtype("digit");
            obj.set_textAlign("right");
            this.Div.form.colGrid00_00_01.addChild(obj.name, obj);

            obj = new Edit("in_edt_f4","in_chkbox_f4:3","50","114","40",null,null,null,null,null,null,this.Div.form.colGrid00_00_01.form);
            obj.set_taborder("21");
            obj.set_accessibilitylabel("장기입원자");
            obj.set_inputtype("digit");
            obj.set_textAlign("right");
            this.Div.form.colGrid00_00_01.addChild(obj.name, obj);

            obj = new Static("Static02","in_edt_f1:5","62","33","18",null,null,null,null,null,null,this.Div.form.colGrid00_00_01.form);
            obj.set_taborder("8");
            obj.set_text("명");
            this.Div.form.colGrid00_00_01.addChild(obj.name, obj);

            obj = new Static("Static02_00","in_edt_f2:5","62","33","18",null,null,null,null,null,null,this.Div.form.colGrid00_00_01.form);
            obj.set_taborder("9");
            obj.set_text("명");
            this.Div.form.colGrid00_00_01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","in_edt_f3:5","62","33","18",null,null,null,null,null,null,this.Div.form.colGrid00_00_01.form);
            obj.set_taborder("10");
            obj.set_text("명");
            this.Div.form.colGrid00_00_01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","in_edt_f4:5","62","33","18",null,null,null,null,null,null,this.Div.form.colGrid00_00_01.form);
            obj.set_taborder("11");
            obj.set_text("명");
            this.Div.form.colGrid00_00_01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","960","0","240","40",null,null,null,null,null,null,this.Div.form.colGrid00_00_01.form);
            obj.set_taborder("12");
            obj.set_text("비고");
            obj.set_cssclass("boxTitleCol");
            obj.set_textAlign("center");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.Div.form.colGrid00_00_01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","960","40","240","247",null,null,null,null,null,null,this.Div.form.colGrid00_00_01.form);
            obj.set_taborder("13");
            obj.set_cssclass("boxDescCol");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.Div.form.colGrid00_00_01.addChild(obj.name, obj);

            obj = new TextArea("in_text","970","50","220","225",null,null,null,null,null,null,this.Div.form.colGrid00_00_01.form);
            obj.set_taborder("58");
            obj.set_accessibilitylabel("비고");
            this.Div.form.colGrid00_00_01.addChild(obj.name, obj);

            obj = new Div("btnArea","30","colGrid00_00_01:50","1202","60",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("18");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_save","430","1","100","30",null,null,null,null,null,null,this.Div.form.btnArea.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_sty01");
            this.Div.form.btnArea.addChild(obj.name, obj);

            obj = new Button("btn_delete","btn_save:20","1","100","30",null,null,null,null,null,null,this.Div.form.btnArea.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_sty01");
            this.Div.form.btnArea.addChild(obj.name, obj);

            obj = new Button("btn_back","btn_delete:20","1","100","30",null,null,null,null,null,null,this.Div.form.btnArea.form);
            obj.set_taborder("20");
            obj.set_text("뒤로가기");
            obj.set_cssclass("btn_sty01");
            this.Div.form.btnArea.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,2000,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div.form.rowGrid.form.in_cb_docdepogi","value","dsMain","DEPOSITORY_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div.form.rowGrid.form.in_cb_sunban","value","dsMain","SHELF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div.form.rowGrid.form.in_cb_year","value","dsMain","APPLY_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div.form.rowGrid.form.in_cb_trn","value","dsMain","TRN_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div.form.rowGrid.form.in_edt_schnm","value","dsMain","UNI_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div.form.rowGrid.form.in_edt_filenm","value","dsMain","DOC_BUNDLE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div.form.rowGrid.form.in_edt_title","value","dsMain","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div.form.rowGrid.form.in_edt_docno","value","dsMain","DOC_NM_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Div.form.rowGrid.form.in_calr_keep","value","dsMain","DEPOSITORY_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","Div.form.rowGrid.form.in_calr_pdate","value","dsMain","DONE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","Div.form.rowGrid.form.in_edt_loc","value","dsFile","ELEC_DOC_DIR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","Div.form.rowGrid.form.in_edt_pw","value","dsFile","ELEC_DOC_PASS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","Div.form.rowGrid.form.in_edt_regnm","value","dsMain","RECEIPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","Div.form.rowGrid.form.in_calr_regdate","value","dsMain","RECEIVE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","Div.form.colGrid.form.in_chkbox_a1","value","dsDetail","JOB_STATS_RECH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","Div.form.colGrid.form.in_chkbox_a2","value","dsDetail","JOB_STATS_STAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","Div.form.colGrid.form.in_chkbox_a3","value","dsDetail","ENTER_STAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","Div.form.colGrid.form.in_chkbox_a4","value","dsDetail","EVID_LIST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","Div.form.colGrid00.form.in_chkbox_b1","value","dsDetail","SCHOOL_EMPY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","Div.form.colGrid00.form.in_edt_b1","value","dsDetail","SCHOOL_EMPY_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","Div.form.colGrid00.form.in_chkbox_b2","value","dsDetail","ABRD_EMPY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","Div.form.colGrid00.form.in_edt_b2","value","dsDetail","ABRD_EMPY_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","Div.form.colGrid00.form.in_chkbox_b3","value","dsDetail","FARMMER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","Div.form.colGrid00.form.in_edt_b3","value","dsDetail","FARMMER_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","Div.form.colGrid00.form.in_chkbox_b4","value","dsDetail","SOLDIER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","Div.form.colGrid00.form.in_edt_b4","value","dsDetail","SOLDIER_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","Div.form.colGrid00_00.form.in_chkbox_c1","value","dsDetail","PERFORM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","Div.form.colGrid00_00.form.in_edt_c1","value","dsDetail","PERFORM_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","Div.form.colGrid00_00.form.in_chkbox_c2","value","dsDetail","DPLAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","Div.form.colGrid00_00.form.in_edt_c2","value","dsDetail","DPLAY_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","Div.form.colGrid00_00.form.in_chkbox_c3","value","dsDetail","PUBLISH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","Div.form.colGrid00_00.form.in_edt_c3","value","dsDetail","PUBLISH_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","Div.form.colGrid00_00.form.in_chkbox_c4","value","dsDetail","SCNRO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","Div.form.colGrid00_00.form.in_edt_c4","value","dsDetail","SCNRO_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","Div.form.colGrid00_00.form.in_chkbox_c5","value","dsDetail","CPYRIGHT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","Div.form.colGrid00_00.form.in_edt_c5","value","dsDetail","CPYRIGHT_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","Div.form.colGrid00_00_00.form.in_chkbox_d1","value","dsDetail","DOMESTIC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","Div.form.colGrid00_00_00.form.in_edt_d1","value","dsDetail","DOMESTIC_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","Div.form.colGrid00_00_00.form.in_chkbox_d2","value","dsDetail","ABRD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","Div.form.colGrid00_00_00.form.in_edt_d2","value","dsDetail","ABRD_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","Div.form.colGrid00_01.form.in_chkbox_e1","value","dsDetail","N_MISSIONED_TRAINEE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","Div.form.colGrid00_01.form.in_edt_e1","value","dsDetail","N_MISSIONED_TRAINEE_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","Div.form.colGrid00_01.form.in_chkbox_e2","value","dsDetail","FLIGHT_TRAINEE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","Div.form.colGrid00_01.form.in_edt_e2","value","dsDetail","FLIGHT_TRAINEE_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","Div.form.colGrid00_01.form.in_chkbox_e3","value","dsDetail","POLICE_TRAINEE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","Div.form.colGrid00_01.form.in_edt_e3","value","dsDetail","POLICE_TRAINEE_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","Div.form.colGrid00_01.form.in_chkbox_e4","value","dsDetail","FIREFIGHTING_TRAINEE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","Div.form.colGrid00_01.form.in_edt_e4","value","dsDetail","FIREFIGHTING_TRAINEE_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","Div.form.colGrid00_00_01.form.in_chkbox_f1","value","dsDetail","PRISONER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","Div.form.colGrid00_00_01.form.in_edt_f1","value","dsDetail","PRISONER_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","Div.form.colGrid00_00_01.form.in_chkbox_f2","value","dsDetail","DEATH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","Div.form.colGrid00_00_01.form.in_edt_f2","value","dsDetail","DEATH_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","Div.form.colGrid00_00_01.form.in_chkbox_f3","value","dsDetail","IMMIGRATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","Div.form.colGrid00_00_01.form.in_edt_f3","value","dsDetail","IMMIGRATION_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","Div.form.colGrid00_00_01.form.in_chkbox_f4","value","dsDetail","LONG_HOSPIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","Div.form.colGrid00_00_01.form.in_edt_f4","value","dsDetail","LONG_HOSPIT_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","Div.form.colGrid00_00_01.form.in_text","value","dsDetail","ETC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div.form.rowGrid.form.in_cb_branch","value","dsMain","BRANCH_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ad18m01.xfdl","CM::common.xjs");
        this.addIncludeScript("ad18m01.xfdl","CM::utl_script.xjs");
        this.registerScript("ad18m01.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;
        this.executeIncludeScript("CM::utl_script.xjs"); /*include "CM::utl_script.xjs"*/;

        //기본변수세팅
        this.fv_USERID = "";
        this.fv_DOC_NO = "";

        this.fv_MENUNM = "관리자>입고시스템>문서입고관리>문서기본정보";

        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		this.setAccessLog("", "AG", this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceID == "listDocDetail"){
        //  		trace(this.dsMain.saveXML());
        //  		trace(this.dsDetail.saveXML());
        //  		trace(this.dsFile.saveXML());
        			var strParam = "DOC_NO=" + "" + "ª";
        			dsParamSetArrowBlank(nexacro.getApplication().gds_param, strParam);
        		}
        		if(serviceID == "listDocDepository"){
        			this.dsDoc.insertRow(0);
        			this.dsDoc.setColumn(0,"DEPOSITORY_NO","");
        			this.dsDoc.setColumn(0,"DEPOSITORY_NM","선택");
        			//this.btn_search_onclick(this.Div.form.sub_search.form.btn_search);
        			//trace(this.fv_DOC_NO);
        			if(!this.fv_DOC_NO){
        				this.dsDetail.addRow();
        				this.dsFile.addRow();
        				this.dsMain.addRow();
        				this.Div.form.rowGrid.form.in_cb_year.set_index(1);
        				this.Div.form.rowGrid.form.in_cb_trn.set_index(0);
        				this.Div.form.rowGrid.form.in_cb_docdepogi.set_index(0);
        				return;
        			}else{
        				this.lfn_search();
        			}
        		}
        		if(serviceID == "mergeDocInfo"){
        			alert("저장되었습니다.");
        		}
        		if(serviceID == "deleteDocDetail"){
        			alert("삭제되었습니다.");
        			this.fn_goPage("AD::ad18m00.xfdl");
        		}

         	}
        }

        this.lfn_listDoc = function(){
        	this.dsSearch.clearData();
        	var strParam = "";
        	strParam += "DOC_NO=" 	+ this.fv_DOC_NO	+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	//trace(this.dsSearch.saveXML());
        	this.gfnTransaction("listDocDepository",
        						"/swiss/ad/docdepository/listDocDepository.do",
        						"dsSearch=dsSearch",
        						"dsDoc=dsResult",
        						"",
        						"fnCallback",
        						false);
        }

        this.lfn_search = function()
        {
        	var strParam = "";
        	strParam += "DOC_NO=" 	+ this.fv_DOC_NO	+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        //	trace(this.dsSearch.saveXML());
        	this.setAccessLog("", "AG", this.fv_MENUNM, "문서정보", strParam);  //접속기록
        	this.gfnTransaction("listDocDetail",
        						"/swiss/ad/docdepository/listDocDetail.do",
        						"dsSearch=dsSearch",
        						"dsMain=dsMain dsDetail=dsDetail dsFile=dsFile",
        						"",
        						"fnCallback",
        						false);
        };

        this.ad18m01_onload = function(obj,e)
        {
        	var objApp 		= nexacro.getApplication();
        	this.fv_USERID = objApp.gds_login_info.getColumn(0, "USERID") ;
        	this.fv_DOC_NO = nexacro.getApplication().gds_param.getColumn(0, "DOC_NO");

        	var toyear = new Date().getFullYear();
        	var date = toyear+1;
        	for(var i=0; i < 9; i++){
        		var nRow = this.dsYear.addRow();
        		this.dsYear.setColumn(nRow,"year",date-i);
        	}
        	this.lfn_listDoc();
        };

        this.btn_save_onclick = function(obj,e)
        {
        	if(!this.utlf_validate(this.Div.form.rowGrid)) return;
        	var DEPOSITORY_DATE = this.dsMain.getColumn(0,"DEPOSITORY_DATE");
        	var RECEIVE_DATE = this.dsMain.getColumn(0,"RECEIVE_DATE");
        	var DONE_DATE = this.dsMain.getColumn(0,"DONE_DATE");
        // 	trace(DEPOSITORY_DATE);
        // 	trace(RECEIVE_DATE);
        // 	trace(DONE_DATE);
        	if(RECEIVE_DATE > DEPOSITORY_DATE){
        		alert("보관기간이 입고일보다 작습니다. 확인해주세요.");
        		return;
        	}
        	if(DONE_DATE > DEPOSITORY_DATE){
        		alert("보관기간이 시행일보다 작습니다. 확인해주세요.");
        		return;
        	}
        	for(var i=0; i < this.dsMain.rowcount; i++){
        		//this.dsMain.addColumn("WORKERID","string");
        		this.dsMain.setColumn(i,"WORKERID",this.fv_USERID);
        	}
        	for(var i=0; i < this.dsDetail.rowcount; i++){
        		//this.dsDetail.addColumn("WORKERID","string");
        		this.dsDetail.setColumn(i,"WORKERID",this.fv_USERID);
        	}
        	for(var i=0; i < this.dsFile.rowcount; i++){
        		//this.dsFile.addColumn("WORKERID","string");
        		this.dsFile.setColumn(i,"WORKERID",this.fv_USERID);
        	}
        //  	trace(this.dsMain.saveXML());
        //  	trace(this.dsDetail.saveXML());
        //  	trace(this.dsFile.saveXML());
        	this.setAccessLog("", "AG", this.fv_MENUNM, "저장", "DOC_NO=" + this.fv_DOC_NO);  //접속기록
        	this.gfnTransaction("mergeDocInfo",
        						"/swiss/ad/docdepository/mergeDocInfo.do",
        						"dsMain=dsMain dsDetail=dsDetail dsFile=dsFile",
        						"",
        						"",
        						"fnCallback",
        						false);
        };

        this.btn_delete_onclick = function(obj,e)
        {
        	var strParam = "";
        	strParam += "DOC_NO=" 	+ this.fv_DOC_NO	+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        //	trace(this.dsSearch.saveXML());
        	this.setAccessLog("", "AG", this.fv_MENUNM, "삭제", strParam);  //접속기록
        	this.gfnTransaction("deleteDocDetail",
        						"/swiss/ad/docdepository/deleteDocDetail.do",
        						"dsSearch=dsSearch",
        						"",
        						"",
        						"fnCallback",
        						false);
        };

        this.btn_back_onclick = function(obj,e)
        {
        // 	var strParam = "DOC_NO=" + this.dsMain.getColumn(this.dsMain.rowposition,"DOC_NO") + "ª";
        // 	dsParamSetArrowBlank(nexacro.getApplication().gds_param, strParam);

        	this.fn_goPage("AD::ad18m00.xfdl");
        };

        this.box1_onchanged = function(obj,e)
        {
        	if(this.Div.form.colGrid00.form.in_chkbox_b1 != "Y"){
        		this.Div.form.colGrid00.form.in_edt_b1.set_value("");
        	}
        	if(this.Div.form.colGrid00.form.in_chkbox_b2 != "Y"){
        		this.Div.form.colGrid00.form.in_edt_b2.set_value("");
        	}
        	if(this.Div.form.colGrid00.form.in_chkbox_b3 != "Y"){
        		this.Div.form.colGrid00.form.in_edt_b3.set_value("");
        	}
        	if(this.Div.form.colGrid00.form.in_chkbox_b4 != "Y"){
        		this.Div.form.colGrid00.form.in_edt_b4.set_value("");
        	}
        };

        this.box2_onchanged = function(obj,e)
        {
        	if(this.Div.form.colGrid00_00.form.in_chkbox_c1 != "Y"){
        		this.Div.form.colGrid00_00.form.in_edt_c1.set_value("");
        	}
        	if(this.Div.form.colGrid00_00.form.in_chkbox_c2 != "Y"){
        		this.Div.form.colGrid00_00.form.in_edt_c2.set_value("");
        	}
        	if(this.Div.form.colGrid00_00.form.in_chkbox_c3 != "Y"){
        		this.Div.form.colGrid00_00.form.in_edt_c3.set_value("");
        	}
        	if(this.Div.form.colGrid00_00.form.in_chkbox_c4 != "Y"){
        		this.Div.form.colGrid00_00.form.in_edt_c4.set_value("");
        	}
        	if(this.Div.form.colGrid00_00.form.in_chkbox_c5 != "Y"){
        		this.Div.form.colGrid00_00.form.in_edt_c5.set_value("");
        	}
        };

        this.box3_onchanged = function(obj,e)
        {
        	if(this.Div.form.colGrid00_00_00.form.in_chkbox_d1 != "Y"){
        		this.Div.form.colGrid00_00_00.form.in_edt_d1.set_value("");
        	}
        	if(this.Div.form.colGrid00_00_00.form.in_chkbox_d2 != "Y"){
        		this.Div.form.colGrid00_00_00.form.in_edt_d2.set_value("");
        	}
        };

        this.box4_onchanged = function(obj,e)
        {
        	if(this.Div.form.colGrid00_01.form.in_chkbox_e1 != "Y"){
        		this.Div.form.colGrid00_01.form.in_edt_e1.set_value("");
        	}
        	if(this.Div.form.colGrid00_01.form.in_chkbox_e2 != "Y"){
        		this.Div.form.colGrid00_01.form.in_edt_e2.set_value("");
        	}
        	if(this.Div.form.colGrid00_01.form.in_chkbox_e3 != "Y"){
        		this.Div.form.colGrid00_01.form.in_edt_e3.set_value("");
        	}
        	if(this.Div.form.colGrid00_01.form.in_chkbox_e4 != "Y"){
        		this.Div.form.colGrid00_01.form.in_edt_e4.set_value("");
        	}
        };

        this.box5_onchanged = function(obj,e)
        {
        	if(this.Div.form.colGrid00_00_01.form.in_chkbox_f1 != "Y"){
        		this.Div.form.colGrid00_00_01.form.in_edt_f1.set_value("");
        	}
        	if(this.Div.form.colGrid00_00_01.form.in_chkbox_f2 != "Y"){
        		this.Div.form.colGrid00_00_01.form.in_edt_f2.set_value("");
        	}
        	if(this.Div.form.colGrid00_00_01.form.in_chkbox_f3 != "Y"){
        		this.Div.form.colGrid00_00_01.form.in_edt_f3.set_value("");
        	}
        	if(this.Div.form.colGrid00_00_01.form.in_chkbox_f4 != "Y"){
        		this.Div.form.colGrid00_00_01.form.in_edt_f4.set_value("");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ad18m01_onload,this);
            this.Div.form.colGrid00.form.in_chkbox_b1.addEventHandler("onchanged",this.box1_onchanged,this);
            this.Div.form.colGrid00.form.in_chkbox_b2.addEventHandler("onchanged",this.box1_onchanged,this);
            this.Div.form.colGrid00.form.in_chkbox_b3.addEventHandler("onchanged",this.box1_onchanged,this);
            this.Div.form.colGrid00.form.in_chkbox_b4.addEventHandler("onchanged",this.box1_onchanged,this);
            this.Div.form.colGrid00_00.form.in_chkbox_c1.addEventHandler("onchanged",this.box2_onchanged,this);
            this.Div.form.colGrid00_00.form.in_chkbox_c2.addEventHandler("onchanged",this.box2_onchanged,this);
            this.Div.form.colGrid00_00.form.in_chkbox_c3.addEventHandler("onchanged",this.box2_onchanged,this);
            this.Div.form.colGrid00_00.form.in_chkbox_c4.addEventHandler("onchanged",this.box2_onchanged,this);
            this.Div.form.colGrid00_00.form.in_chkbox_c5.addEventHandler("onchanged",this.box2_onchanged,this);
            this.Div.form.colGrid00_00_00.form.in_chkbox_d1.addEventHandler("onchanged",this.box3_onchanged,this);
            this.Div.form.colGrid00_00_00.form.in_chkbox_d2.addEventHandler("onchanged",this.box3_onchanged,this);
            this.Div.form.colGrid00_01.form.in_chkbox_e1.addEventHandler("onchanged",this.box4_onchanged,this);
            this.Div.form.colGrid00_01.form.in_chkbox_e2.addEventHandler("onchanged",this.box4_onchanged,this);
            this.Div.form.colGrid00_01.form.in_chkbox_e3.addEventHandler("onchanged",this.box4_onchanged,this);
            this.Div.form.colGrid00_01.form.in_chkbox_e4.addEventHandler("onchanged",this.box4_onchanged,this);
            this.Div.form.colGrid00_00_01.form.in_chkbox_f1.addEventHandler("onchanged",this.box5_onchanged,this);
            this.Div.form.colGrid00_00_01.form.in_chkbox_f2.addEventHandler("onchanged",this.box5_onchanged,this);
            this.Div.form.colGrid00_00_01.form.in_chkbox_f3.addEventHandler("onchanged",this.box5_onchanged,this);
            this.Div.form.colGrid00_00_01.form.in_chkbox_f4.addEventHandler("onchanged",this.box5_onchanged,this);
            this.Div.form.btnArea.form.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.Div.form.btnArea.form.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.Div.form.btnArea.form.btn_back.addEventHandler("onclick",this.btn_back_onclick,this);
        };

        this.loadIncludeScript("ad18m01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
