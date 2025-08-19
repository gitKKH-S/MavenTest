(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_main");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1564,3150);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_notice", this);
            obj._setContents("<ColumnInfo><Column id=\"SUBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"BOARDSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BBSNO\" type=\"STRING\" size=\"256\"/><Column id=\"NOTICEYN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0","1568","111",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("main_header");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","30","202","44",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_background("url(\'theme::default/images/logo_top.png\') no-repeat");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_online",null,"20","55","65","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("원격지원");
            obj.set_font("14px/normal \"SpoqaHanSans-Bold\"");
            obj.set_color("#0054d6");
            obj.set_borderRadius("0px");
            obj.set_background("url(\'theme::default/images/ico_control.png\') no-repeat center top #ffffff");
            obj.set_verticalAlign("bottom");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("div_on",null,"10","169","100","60",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("div_00");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_logout","22","10","55","65",null,null,null,null,null,null,this.Div00.form.div_on.form);
            obj.set_taborder("0");
            obj.set_text("로그아웃");
            obj.set_font("14px/normal \"SpoqaHanSans-Bold\"");
            obj.set_color("#0054d6");
            obj.set_borderRadius("0px");
            obj.set_background("url(\'theme::default/images/ico_loginAfter.png\') no-repeat center top #ffffff");
            obj.set_verticalAlign("bottom");
            this.Div00.form.div_on.addChild(obj.name, obj);

            obj = new Button("btn_my","85","10","67","65",null,null,null,null,null,null,this.Div00.form.div_on.form);
            obj.set_taborder("1");
            obj.set_text("내정보");
            obj.set_font("14px/normal \"SpoqaHanSans-Bold\"");
            obj.set_color("#0054d6");
            obj.set_borderRadius("0px");
            obj.set_background("url(\'theme::default/images/ico_myPage.png\') no-repeat center top #ffffff");
            obj.set_verticalAlign("bottom");
            this.Div00.form.div_on.addChild(obj.name, obj);

            obj = new Div("div_off",null,"10","93","100","60",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("div_01");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_login","15","10","55","65",null,null,null,null,null,null,this.Div00.form.div_off.form);
            obj.set_taborder("0");
            obj.set_text("로그인");
            obj.set_font("14px/normal \"SpoqaHanSans-Bold\"");
            obj.set_color("#0054d6");
            obj.set_borderRadius("0px");
            obj.set_background("url(\'theme::default/images/ico_login.png\') no-repeat center top #ffffff");
            obj.set_verticalAlign("bottom");
            this.Div00.form.div_off.addChild(obj.name, obj);

            obj = new Div("Div01","0","793","1564","110",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("0px none,0px none,1px solid #b2cbf3");
            obj.set_text("");
            obj.set_cssclass("main_news");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","31","211","48",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("취업통계조사 일정");
            obj.set_font("19px/normal \"SpoqaHanSans-Bold\"");
            obj.set_color("#0054d6");
            obj.set_background("#ecf2fb");
            obj.set_textAlign("center");
            obj.set_borderRadius("30px");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","240","25","120","60",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("2020.07.15");
            obj.set_font("19px/normal \"SpoqaHanSans-Bold\"");
            obj.set_color("#010101");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","360","25","788","60",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("2020년 하반기 취업통계조사 기간이 시작됩니다.  조사에 많은 참여 부탁드립니다.");
            obj.set_font("18px/normal \"SpoqaHanSans-Regular\"");
            this.Div01.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","0","111","100%","682",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_image("url(\'theme::default/images/img_mainTop.jpg\')");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","185","903","1200","395",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("#ffffff");
            obj.set_text("");
            obj.set_cssclass("main_cate");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","160","130","13","19",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_background("url(\'theme::default/images/bul_mainList.png\') no-repeat");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static00_00","404","130","13","19",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_background("url(\'theme::default/images/bul_mainList.png\') no-repeat");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static00_01","615","130","13","19",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_background("url(\'theme::default/images/bul_mainList.png\') no-repeat");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static00_02","814","130","13","19",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_background("url(\'theme::default/images/bul_mainList.png\') no-repeat");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static00_03","985","131","20","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_background("url(\'theme::default/images/bul_mainList.png\') no-repeat");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("btn_hp","7","86","131","206",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_main01");
            obj.set_text("");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("btn_gp","194","86","191","206",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_main02");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("btn_fp","428","86","168","206",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_main03");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("btn_ag","635","86","160","206",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_main04");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("btn_rt","842","86","131","206",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_main05");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("btn_vs","1025","86","131","206",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_main06");
            this.Div02.addChild(obj.name, obj);

            obj = new Div("Div03","0","1298",null,"555","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#ededed");
            obj.set_cssclass("main_graph");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","185","0","1200","555",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_cssclass("graph_inner");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static00","0","85","345","60",null,null,null,null,null,null,this.Div03.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("고등교육기관 취업통계");
            obj.set_font("30px/normal \"SpoqaHanSans-Regular\"");
            this.Div03.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","84.8%","100","175","30",null,null,null,null,null,null,this.Div03.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("기존년도 : 2020년도 5월");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\"");
            obj.set_border("0px none,0px none,1px solid #b6b6b6");
            this.Div03.form.Div00.addChild(obj.name, obj);

            obj = new WebBrowser("webBrower_chart","0","149","1200","395",null,null,null,null,null,null,this.Div03.form.Div00.form);
            obj.set_taborder("2");
            obj.set_border("0");
            this.Div03.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div04","185","1853","1200","920",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("#ffffff");
            obj.set_cssclass("main_bot");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","125","600","250",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("0");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","120","32",null,null,null,null,null,null,this.Div04.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("공지사항");
            obj.set_font("30px/normal \"SpoqaHanSans-Regular\"");
            this.Div04.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_noticeMore","551","9","14","14",null,null,null,null,null,null,this.Div04.form.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_more");
            this.Div04.form.Div00.addChild(obj.name, obj);

            obj = new Grid("gd_notice","0","59","563","190",null,null,null,null,null,null,this.Div04.form.Div00.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_notice");
            obj.set_border("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"419\"/><Column size=\"142\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:SUBJECT\" border=\"0px none\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:WORKDTHM\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" border=\"0px none,0px none,0px none,\"/></Band></Format></Formats>");
            this.Div04.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","600","125","600","252",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("1");
            obj.set_border("0px none,0px none,0px none,1px solid #e5e5e5");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static00","33","0","315","32",null,null,null,null,null,null,this.Div04.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("서비스 바로가기");
            obj.set_font("30px/normal \"SpoqaHanSans-Regular\"");
            this.Div04.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_faq","-1","87","150","150",null,null,null,null,null,null,this.Div04.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("FAQ");
            obj.set_cssclass("btn_mainService01");
            obj.set_verticalAlign("bottom");
            this.Div04.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_pds","144","87","150","150",null,null,null,null,null,null,this.Div04.form.Div01.form);
            obj.set_taborder("2");
            obj.set_text("자료실");
            obj.set_cssclass("btn_mainService02");
            obj.set_verticalAlign("bottom");
            this.Div04.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_qna","299","87","150","150",null,null,null,null,null,null,this.Div04.form.Div01.form);
            obj.set_taborder("3");
            obj.set_text("Q&A");
            obj.set_cssclass("btn_mainService03");
            obj.set_verticalAlign("bottom");
            this.Div04.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_question","444","87","150","150",null,null,null,null,null,null,this.Div04.form.Div01.form);
            obj.set_taborder("4");
            obj.set_text("설문조사");
            obj.set_cssclass("btn_mainService04");
            obj.set_verticalAlign("bottom");
            this.Div04.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_news","0","490","390","295",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("2");
            obj.set_text("취업통계소식");
            obj.set_cssclass("btn_conBot01");
            obj.set_verticalAlign("bottom");
            obj.set_textAlign("left");
            obj.set_rtl("false");
            this.Div04.addChild(obj.name, obj);

            obj = new Button("btn_kessData","405","490","390","295",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("3");
            obj.set_text("교육통계데이터 제공신청");
            obj.set_cssclass("btn_conBot02");
            obj.set_verticalAlign("bottom");
            obj.set_textAlign("left");
            this.Div04.addChild(obj.name, obj);

            obj = new Button("btn_kessPub","810","490","390","295",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("4");
            obj.set_text("취업통계 간행물");
            obj.set_cssclass("btn_conBot03");
            obj.set_verticalAlign("bottom");
            obj.set_textAlign("left");
            this.Div04.addChild(obj.name, obj);

            obj = new Button("btn_00","49","824","243","83",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("5");
            obj.set_text("문서뷰어테스트");
            this.Div04.addChild(obj.name, obj);

            obj = new Button("btn_01","308","833","205","73",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("6");
            obj.set_text("리포트테스트");
            this.Div04.addChild(obj.name, obj);

            obj = new Div("Div06","0","2780",null,"370","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_border("1px solid #d9d9d9,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","185","0","1200","369",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.Div06.addChild(obj.name, obj);

            obj = new Div("Div00","200","42","5","5",null,null,null,null,null,null,this.Div06.form.Div00.form);
            obj.set_taborder("0");
            obj.set_background("#b2b2b2");
            obj.set_borderRadius("10px");
            this.Div06.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div00","318","143","5","5",null,null,null,null,null,null,this.Div06.form.Div00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_background("#b2b2b2");
            obj.set_borderRadius("10px");
            this.Div06.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","0","35","190","18",null,null,null,null,null,null,this.Div06.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("지적재산,개인정보보호정책");
            obj.set_cssclass("btn_styTxt");
            obj.set_textAlign("center");
            this.Div06.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","355","42","5","5",null,null,null,null,null,null,this.Div06.form.Div00.form);
            obj.set_taborder("2");
            obj.set_background("#b2b2b2");
            obj.set_borderRadius("10px");
            this.Div06.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00","215","35","130","18",null,null,null,null,null,null,this.Div06.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("개인정보처리방침");
            obj.set_cssclass("btn_styTxt");
            obj.set_textAlign("center");
            obj.set_color("red");
            this.Div06.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_01","370","35","180","18",null,null,null,null,null,null,this.Div06.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("이메일주소무단수집거부");
            obj.set_cssclass("btn_styTxt");
            obj.set_textAlign("center");
            this.Div06.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div02","0","86","1200","60",null,null,null,null,null,null,this.Div06.form.Div00.form);
            obj.set_taborder("5");
            obj.set_background("#f9f9f9");
            obj.set_border("1px solid #e6e6e6");
            obj.set_text("");
            this.Div06.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_03","55","106","190","20",null,null,null,null,null,null,this.Div06.form.Div00.form);
            obj.set_taborder("6");
            obj.set_text("문의처 : 043)530-9661~7");
            obj.set_color("#707070");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
            this.Div06.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_03_00","328","106","62","20",null,null,null,null,null,null,this.Div06.form.Div00.form);
            obj.set_taborder("7");
            obj.set_text("이메일 : ");
            obj.set_color("#707070");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
            this.Div06.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00","388","106","130","20",null,null,null,null,null,null,this.Div06.form.Div00.form);
            obj.set_taborder("8");
            obj.set_text("swiss@kedi.re.kr..");
            obj.set_color("#0054d6");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
            this.Div06.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_03_01","587","106","380","20",null,null,null,null,null,null,this.Div06.form.Div00.form);
            obj.set_taborder("9");
            obj.set_text("문의시간 : (오전) 09:30~11:30 (오후) 13:30~17:30");
            obj.set_color("#707070");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
            this.Div06.form.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","1000","100","187","34",null,null,null,null,null,null,this.Div06.form.Div00.form);
            obj.set_taborder("10");
            obj.set_background("#f9f9f9");
            obj.set_color("#000000");
            obj.set_cssclass("comFooter");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_padding("0px");
            obj.set_border("0px");
            var Div06_form_Div00_form_Combo00_innerdataset = new nexacro.NormalDataset("Div06_form_Div00_form_Combo00_innerdataset", obj);
            Div06_form_Div00_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">관련기관 바로가기</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">관련기관 바로가기</Col></Row></Rows>");
            obj.set_innerdataset(Div06_form_Div00_form_Combo00_innerdataset);
            obj.set_text("관련기관 바로가기");
            obj.set_value("01");
            obj.set_index("0");
            this.Div06.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","283","102","1","30",null,null,null,null,null,null,this.Div06.form.Div00.form);
            obj.set_taborder("11");
            obj.set_background("#e0e0e0");
            this.Div06.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","550","102","1","30",null,null,null,null,null,null,this.Div06.form.Div00.form);
            obj.set_taborder("12");
            obj.set_background("#e0e0e0");
            this.Div06.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","980","102","1","30",null,null,null,null,null,null,this.Div06.form.Div00.form);
            obj.set_taborder("13");
            obj.set_background("#e0e0e0");
            this.Div06.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","0","212","202","44",null,null,null,null,null,null,this.Div06.form.Div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_img");
            obj.set_background("url(\'theme::default/images/logo_footer.png\')");
            this.Div06.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","245","212","623","22",null,null,null,null,null,null,this.Div06.form.Div00.form);
            obj.set_taborder("15");
            obj.set_text("주소 : (27873) 충청북도 진천군 덕산읍 교학로 7, 한국교육개발원 교육통계센터 고등교육 취업통계팀");
            obj.set_font("13px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
            this.Div06.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00","245","234","623","22",null,null,null,null,null,null,this.Div06.form.Div00.form);
            obj.set_taborder("16");
            obj.set_text("Copyrightⓒ 2006-2020 KEDI All Rights Reserved.");
            obj.set_font("13px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
            obj.set_color("#707070");
            this.Div06.form.Div00.addChild(obj.name, obj);

            obj = new Div("txt_mainImgWrap","67.5%","605","463","135",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("txt_mainImgWrap");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("txt_mainImgTxt","108","15","350","60",null,null,null,null,null,null,this.txt_mainImgWrap.form);
            obj.set_taborder("0");
            obj.set_text("지금은 취업통계조사 기간입니다");
            obj.set_cssclass("txt_mainImgTxt");
            this.txt_mainImgWrap.addChild(obj.name, obj);

            obj = new Static("txt_mainImgDate","109","56","339","60",null,null,null,null,null,null,this.txt_mainImgWrap.form);
            obj.set_taborder("1");
            obj.set_text("2020.4.1~2020.4.30");
            obj.set_cssclass("txt_mainImgDate");
            this.txt_mainImgWrap.addChild(obj.name, obj);

            obj = new WebBrowser("webBrower_link","730","2665","117","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Screen0",1564,3150,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;


                // {{ this.Div00.form.div_on
                p = rootobj.Div00.form.div_on.form;

                p.btn_logout.set_taborder("0");
                p.btn_logout.set_text("로그아웃");
                p.btn_logout.set_font("14px/normal \"SpoqaHanSans-Bold\"");
                p.btn_logout.set_color("#0054d6");
                p.btn_logout.set_borderRadius("0px");
                p.btn_logout.set_background("url(\'theme::default/images/ico_loginAfter.png\') no-repeat center top #ffffff");
                p.btn_logout.set_verticalAlign("bottom");
                p.btn_logout.move("22","10","55","65",null,null);

                p.btn_my.set_taborder("1");
                p.btn_my.set_text("내정보");
                p.btn_my.set_font("14px/normal \"SpoqaHanSans-Bold\"");
                p.btn_my.set_color("#0054d6");
                p.btn_my.set_borderRadius("0px");
                p.btn_my.set_background("url(\'theme::default/images/ico_myPage.png\') no-repeat center top #ffffff");
                p.btn_my.set_verticalAlign("bottom");
                p.btn_my.move("85","10","67","65",null,null);
                // this.Div00.form.div_on }}


                // {{ this.Div00.form.div_off
                p = rootobj.Div00.form.div_off.form;

                p.btn_login.set_taborder("0");
                p.btn_login.set_text("로그인");
                p.btn_login.set_font("14px/normal \"SpoqaHanSans-Bold\"");
                p.btn_login.set_color("#0054d6");
                p.btn_login.set_borderRadius("0px");
                p.btn_login.set_background("url(\'theme::default/images/ico_login.png\') no-repeat center top #ffffff");
                p.btn_login.set_verticalAlign("bottom");
                p.btn_login.move("15","10","55","65",null,null);
                // this.Div00.form.div_off }}


                // {{ this.Div00
                p = rootobj.Div00.form;

                p.Button00.set_taborder("0");
                p.Button00.set_background("url(\'theme::default/images/logo_top.png\') no-repeat");
                p.Button00.move("0","30","202","44",null,null);

                p.btn_online.set_taborder("1");
                p.btn_online.set_text("원격지원");
                p.btn_online.set_font("14px/normal \"SpoqaHanSans-Bold\"");
                p.btn_online.set_color("#0054d6");
                p.btn_online.set_borderRadius("0px");
                p.btn_online.set_background("url(\'theme::default/images/ico_control.png\') no-repeat center top #ffffff");
                p.btn_online.set_verticalAlign("bottom");
                p.btn_online.move(null,"20","55","65","10",null);

                p.div_on.set_taborder("2");
                p.div_on.set_text("div_00");
                p.div_on.set_visible("false");
                p.div_on.move(null,"10","169","100","60",null);

                p.div_off.set_taborder("3");
                p.div_off.set_text("div_01");
                p.div_off.set_visible("false");
                p.div_off.move(null,"10","93","100","60",null);
                // this.Div00 }}


                // {{ this.Div01
                p = rootobj.Div01.form;

                p.Static00.set_taborder("0");
                p.Static00.set_text("취업통계조사 일정");
                p.Static00.set_font("19px/normal \"SpoqaHanSans-Bold\"");
                p.Static00.set_color("#0054d6");
                p.Static00.set_background("#ecf2fb");
                p.Static00.set_textAlign("center");
                p.Static00.set_borderRadius("30px");
                p.Static00.move("0","31","211","48",null,null);

                p.Static01.set_taborder("1");
                p.Static01.set_text("2020.07.15");
                p.Static01.set_font("19px/normal \"SpoqaHanSans-Bold\"");
                p.Static01.set_color("#010101");
                p.Static01.move("240","25","120","60",null,null);

                p.Static02.set_taborder("2");
                p.Static02.set_text("2020년 하반기 취업통계조사 기간이 시작됩니다.  조사에 많은 참여 부탁드립니다.");
                p.Static02.set_font("18px/normal \"SpoqaHanSans-Regular\"");
                p.Static02.move("360","25","788","60",null,null);
                // this.Div01 }}


                // {{ this.Div02
                p = rootobj.Div02.form;

                p.Static00.set_taborder("0");
                p.Static00.set_background("url(\'theme::default/images/bul_mainList.png\') no-repeat");
                p.Static00.move("160","130","13","19",null,null);

                p.Static00_00.set_taborder("1");
                p.Static00_00.set_background("url(\'theme::default/images/bul_mainList.png\') no-repeat");
                p.Static00_00.move("404","130","13","19",null,null);

                p.Static00_01.set_taborder("2");
                p.Static00_01.set_background("url(\'theme::default/images/bul_mainList.png\') no-repeat");
                p.Static00_01.move("615","130","13","19",null,null);

                p.Static00_02.set_taborder("3");
                p.Static00_02.set_background("url(\'theme::default/images/bul_mainList.png\') no-repeat");
                p.Static00_02.move("814","130","13","19",null,null);

                p.Static00_03.set_taborder("4");
                p.Static00_03.set_background("url(\'theme::default/images/bul_mainList.png\') no-repeat");
                p.Static00_03.move("985","131","20","32",null,null);

                p.btn_hp.set_taborder("5");
                p.btn_hp.set_cssclass("btn_main01");
                p.btn_hp.set_text("");
                p.btn_hp.move("7","86","131","206",null,null);

                p.btn_gp.set_taborder("6");
                p.btn_gp.set_cssclass("btn_main02");
                p.btn_gp.move("194","86","191","206",null,null);

                p.btn_fp.set_taborder("7");
                p.btn_fp.set_cssclass("btn_main03");
                p.btn_fp.move("428","86","168","206",null,null);

                p.btn_ag.set_taborder("8");
                p.btn_ag.set_cssclass("btn_main04");
                p.btn_ag.move("635","86","160","206",null,null);

                p.btn_rt.set_taborder("9");
                p.btn_rt.set_cssclass("btn_main05");
                p.btn_rt.move("842","86","131","206",null,null);

                p.btn_vs.set_taborder("10");
                p.btn_vs.set_cssclass("btn_main06");
                p.btn_vs.move("1025","86","131","206",null,null);
                // this.Div02 }}


                // {{ this.Div03.form.Div00
                p = rootobj.Div03.form.Div00.form;

                p.Static00.set_taborder("0");
                p.Static00.set_text("고등교육기관 취업통계");
                p.Static00.set_font("30px/normal \"SpoqaHanSans-Regular\"");
                p.Static00.move("0","85","345","60",null,null);

                p.Static01.set_taborder("1");
                p.Static01.set_text("기존년도 : 2020년도 5월");
                p.Static01.set_font("16px/normal \"SpoqaHanSans-Regular\"");
                p.Static01.set_border("0px none,0px none,1px solid #b6b6b6");
                p.Static01.move("84.8%","100","175","30",null,null);

                p.webBrower_chart.set_taborder("2");
                p.webBrower_chart.set_border("0");
                p.webBrower_chart.move("0","149","1200","395",null,null);
                // this.Div03.form.Div00 }}


                // {{ this.Div03
                p = rootobj.Div03.form;

                p.Div00.set_taborder("0");
                p.Div00.set_cssclass("graph_inner");
                p.Div00.move("185","0","1200","555",null,null);
                // this.Div03 }}


                // {{ this.Div04.form.Div00
                p = rootobj.Div04.form.Div00.form;

                p.Static00.set_taborder("0");
                p.Static00.set_text("공지사항");
                p.Static00.set_font("30px/normal \"SpoqaHanSans-Regular\"");
                p.Static00.move("0","0","120","32",null,null);

                p.btn_noticeMore.set_taborder("1");
                p.btn_noticeMore.set_cssclass("btn_more");
                p.btn_noticeMore.move("551","9","14","14",null,null);

                p.gd_notice.set_taborder("2");
                p.gd_notice.set_binddataset("ds_notice");
                p.gd_notice.set_border("0");
                p.gd_notice.move("0","59","563","190",null,null);
                // this.Div04.form.Div00 }}


                // {{ this.Div04.form.Div01
                p = rootobj.Div04.form.Div01.form;

                p.Static00.set_taborder("0");
                p.Static00.set_text("서비스 바로가기");
                p.Static00.set_font("30px/normal \"SpoqaHanSans-Regular\"");
                p.Static00.move("33","0","315","32",null,null);

                p.btn_faq.set_taborder("1");
                p.btn_faq.set_text("FAQ");
                p.btn_faq.set_cssclass("btn_mainService01");
                p.btn_faq.set_verticalAlign("bottom");
                p.btn_faq.move("-1","87","150","150",null,null);

                p.btn_pds.set_taborder("2");
                p.btn_pds.set_text("자료실");
                p.btn_pds.set_cssclass("btn_mainService02");
                p.btn_pds.set_verticalAlign("bottom");
                p.btn_pds.move("144","87","150","150",null,null);

                p.btn_qna.set_taborder("3");
                p.btn_qna.set_text("Q&A");
                p.btn_qna.set_cssclass("btn_mainService03");
                p.btn_qna.set_verticalAlign("bottom");
                p.btn_qna.move("299","87","150","150",null,null);

                p.btn_question.set_taborder("4");
                p.btn_question.set_text("설문조사");
                p.btn_question.set_cssclass("btn_mainService04");
                p.btn_question.set_verticalAlign("bottom");
                p.btn_question.move("444","87","150","150",null,null);
                // this.Div04.form.Div01 }}


                // {{ this.Div04
                p = rootobj.Div04.form;

                p.Div00.set_taborder("0");
                p.Div00.move("0","125","600","250",null,null);

                p.Div01.set_taborder("1");
                p.Div01.set_border("0px none,0px none,0px none,1px solid #e5e5e5");
                p.Div01.move("600","125","600","252",null,null);

                p.btn_news.set_taborder("2");
                p.btn_news.set_text("취업통계소식");
                p.btn_news.set_cssclass("btn_conBot01");
                p.btn_news.set_verticalAlign("bottom");
                p.btn_news.set_textAlign("left");
                p.btn_news.move("0","490","390","295",null,null);

                p.btn_kessData.set_taborder("3");
                p.btn_kessData.set_text("교육통계데이터 제공신청");
                p.btn_kessData.set_cssclass("btn_conBot02");
                p.btn_kessData.set_verticalAlign("bottom");
                p.btn_kessData.set_textAlign("left");
                p.btn_kessData.move("405","490","390","295",null,null);

                p.btn_kessPub.set_taborder("4");
                p.btn_kessPub.set_text("취업통계 간행물");
                p.btn_kessPub.set_cssclass("btn_conBot03");
                p.btn_kessPub.set_verticalAlign("bottom");
                p.btn_kessPub.set_textAlign("left");
                p.btn_kessPub.move("810","490","390","295",null,null);

                p.btn_00.set_taborder("5");
                p.btn_00.set_text("문서뷰어테스트");
                p.btn_00.move("49","824","243","83",null,null);

                p.btn_01.set_taborder("6");
                p.btn_01.set_text("리포트테스트");
                p.btn_01.move("308","833","205","73",null,null);
                // this.Div04 }}


                // {{ this.Div06.form.Div00
                p = rootobj.Div06.form.Div00.form;

                p.Div00.set_taborder("0");
                p.Div00.set_background("#b2b2b2");
                p.Div00.set_borderRadius("10px");
                p.Div00.move("200","42","5","5",null,null);

                p.Button00_00_00_00.set_taborder("1");
                p.Button00_00_00_00.set_text("지적재산,개인정보보호정책");
                p.Button00_00_00_00.set_cssclass("btn_styTxt");
                p.Button00_00_00_00.set_textAlign("center");
                p.Button00_00_00_00.move("0","35","190","18",null,null);

                p.Div01.set_taborder("2");
                p.Div01.set_background("#b2b2b2");
                p.Div01.set_borderRadius("10px");
                p.Div01.move("355","42","5","5",null,null);

                p.Button00_00_00_00_00.set_taborder("3");
                p.Button00_00_00_00_00.set_text("개인정보처리방침");
                p.Button00_00_00_00_00.set_cssclass("btn_styTxt");
                p.Button00_00_00_00_00.set_textAlign("center");
                p.Button00_00_00_00_00.set_color("red");
                p.Button00_00_00_00_00.move("215","35","130","18",null,null);

                p.Button00_00_00_00_01.set_taborder("4");
                p.Button00_00_00_00_01.set_text("이메일주소무단수집거부");
                p.Button00_00_00_00_01.set_cssclass("btn_styTxt");
                p.Button00_00_00_00_01.set_textAlign("center");
                p.Button00_00_00_00_01.move("370","35","180","18",null,null);

                p.Div02.set_taborder("5");
                p.Div02.set_background("#f9f9f9");
                p.Div02.set_border("1px solid #e6e6e6");
                p.Div02.set_text("");
                p.Div02.move("0","86","1200","60",null,null);

                p.Static00_03.set_taborder("6");
                p.Static00_03.set_text("문의처 : 043)530-9661~7");
                p.Static00_03.set_color("#707070");
                p.Static00_03.set_font("16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
                p.Static00_03.move("55","106","190","20",null,null);

                p.Static00_03_00.set_taborder("7");
                p.Static00_03_00.set_text("이메일 : ");
                p.Static00_03_00.set_color("#707070");
                p.Static00_03_00.set_font("16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
                p.Static00_03_00.move("328","106","62","20",null,null);

                p.Static00_03_00_00.set_taborder("8");
                p.Static00_03_00_00.set_text("swiss@kedi.re.kr..");
                p.Static00_03_00_00.set_color("#0054d6");
                p.Static00_03_00_00.set_font("16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
                p.Static00_03_00_00.move("388","106","130","20",null,null);

                p.Static00_03_01.set_taborder("9");
                p.Static00_03_01.set_text("문의시간 : (오전) 09:30~11:30 (오후) 13:30~17:30");
                p.Static00_03_01.set_color("#707070");
                p.Static00_03_01.set_font("16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
                p.Static00_03_01.move("587","106","380","20",null,null);

                p.Combo00.set_taborder("10");
                p.Combo00.set_background("#f9f9f9");
                p.Combo00.set_color("#000000");
                p.Combo00.set_cssclass("comFooter");
                p.Combo00.set_innerdataset(Div06_form_Div00_form_Combo00_innerdataset);
                p.Combo00.set_codecolumn("codecolumn");
                p.Combo00.set_datacolumn("datacolumn");
                p.Combo00.set_padding("0px");
                p.Combo00.set_border("0px");
                p.Combo00.set_text("관련기관 바로가기");
                p.Combo00.set_value("01");
                p.Combo00.set_index("0");
                p.Combo00.move("1000","100","187","34",null,null);

                p.Static01.set_taborder("11");
                p.Static01.set_background("#e0e0e0");
                p.Static01.move("283","102","1","30",null,null);

                p.Static01_00.set_taborder("12");
                p.Static01_00.set_background("#e0e0e0");
                p.Static01_00.move("550","102","1","30",null,null);

                p.Static01_00_00.set_taborder("13");
                p.Static01_00_00.set_background("#e0e0e0");
                p.Static01_00_00.move("980","102","1","30",null,null);

                p.Button00.set_taborder("14");
                p.Button00.set_cssclass("btn_img");
                p.Button00.set_background("url(\'theme::default/images/logo_footer.png\')");
                p.Button00.move("0","212","202","44",null,null);

                p.Static02.set_taborder("15");
                p.Static02.set_text("주소 : (27873) 충청북도 진천군 덕산읍 교학로 7, 한국교육개발원 교육통계센터 고등교육 취업통계팀");
                p.Static02.set_font("13px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
                p.Static02.move("245","212","623","22",null,null);

                p.Static02_00.set_taborder("16");
                p.Static02_00.set_text("Copyrightⓒ 2006-2020 KEDI All Rights Reserved.");
                p.Static02_00.set_font("13px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
                p.Static02_00.set_color("#707070");
                p.Static02_00.move("245","234","623","22",null,null);
                // this.Div06.form.Div00 }}


                // {{ this.Div06
                p = rootobj.Div06.form;

                p.Div00.set_taborder("0");
                p.Div00.set_text("");
                p.Div00.move("185","0","1200","369",null,null);
                // this.Div06 }}


                // {{ this.txt_mainImgWrap
                p = rootobj.txt_mainImgWrap.form;

                p.txt_mainImgTxt.set_taborder("0");
                p.txt_mainImgTxt.set_text("지금은 취업통계조사 기간입니다");
                p.txt_mainImgTxt.set_cssclass("txt_mainImgTxt");
                p.txt_mainImgTxt.move("108","15","350","60",null,null);

                p.txt_mainImgDate.set_taborder("1");
                p.txt_mainImgDate.set_text("2020.4.1~2020.4.30");
                p.txt_mainImgDate.set_cssclass("txt_mainImgDate");
                p.txt_mainImgDate.move("109","56","339","60",null,null);
                // this.txt_mainImgWrap }}
                p = rootobj;
                p.set_titletext("New Form");

                p.Div00.set_taborder("0");
                p.Div00.set_text("");
                p.Div00.set_cssclass("main_header");
                p.Div00.move("0","0","1568","111",null,null);

                p.Div01.set_taborder("1");
                p.Div01.set_border("0px none,0px none,1px solid #b2cbf3");
                p.Div01.set_text("");
                p.Div01.set_cssclass("main_news");
                p.Div01.move("0","793","1564","110",null,null);

                p.ImageViewer00.set_taborder("2");
                p.ImageViewer00.set_image("url(\'theme::default/images/img_mainTop.jpg\')");
                p.ImageViewer00.move("0","111","100%","682",null,null);

                p.Div02.set_taborder("3");
                p.Div02.set_background("#ffffff");
                p.Div02.set_text("");
                p.Div02.set_cssclass("main_cate");
                p.Div02.move("185","903","1200","395",null,null);

                p.Div03.set_taborder("4");
                p.Div03.set_background("#ededed");
                p.Div03.set_cssclass("main_graph");
                p.Div03.move("0","1298",null,"555","0",null);

                p.Div04.set_taborder("5");
                p.Div04.set_background("#ffffff");
                p.Div04.set_cssclass("main_bot");
                p.Div04.move("185","1853","1200","920",null,null);

                p.Div06.set_taborder("6");
                p.Div06.set_border("1px solid #d9d9d9,0px none,0px none");
                p.Div06.move("0","2780",null,"370","0",null);

                p.txt_mainImgWrap.set_taborder("7");
                p.txt_mainImgWrap.set_cssclass("txt_mainImgWrap");
                p.txt_mainImgWrap.set_text("");
                p.txt_mainImgWrap.move("67.5%","605","463","135",null,null);

                p.webBrower_link.set_taborder("8");
                p.webBrower_link.set_visible("false");
                p.webBrower_link.move("730","2665","117","50",null,null);
            	}
            );
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout1","Screen0,Desktop_screen",480,3460,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;


                // {{ this.Div00
                p = rootobj.Div00.form;

                p.Button00.set_background("url(\'theme::default/images/logo_topMo.png\') no-repeat");
                p.Button00.set_textAlign("center");
                p.Button00.set_text("");
                p.Button00.move("181","30",null,null,"163","135");

                p.btn_online.set_font("12px/normal \"SpoqaHanSans-Bold\"");
                p.btn_online.set_background("url(\'theme::default/images/ico_controlMo.png\') no-repeat center top #ffffff");
                p.btn_online.move("290","90",null,null,"135","92");
                // this.Div00 }}


                // {{ this.Div01
                p = rootobj.Div01.form;

                p.Static01.set_font("13px/normal \"SpoqaHanSans-Bold\"");
                p.Static01.move("20","60","120","29",null,null);

                p.Static00.set_font("13px/normal \"SpoqaHanSans-Bold\"");
                p.Static00.move("10","13",null,null,"350","79");

                p.Static02.set_text("2020년 하반기 취업통계조사 기간이 시작됩니다. ");
                p.Static02.set_font("13px/normal \"SpoqaHanSans-Regular\"");
                p.Static02.move("20","75",null,"40","18",null);
                // this.Div01 }}


                // {{ this.Div02
                p = rootobj.Div02.form;

                p.Static00.move("216","22","13","19",null,null);

                p.Static00_01.move("216","175","13","19",null,null);

                p.Static00_03.move("216","355","13","19",null,null);

                p.Static00_02.move("300","130","0","0",null,null);

                p.Static00_00.move("415","204","2","1",null,null);

                p.btn_hp.set_cssclass("btn_main01Mo");
                p.btn_hp.move("54","4",null,null,"305","500");

                p.btn_gp.set_cssclass("btn_main02Mo");
                p.btn_gp.move("269","4",null,null,"80","484");

                p.btn_fp.set_cssclass("btn_main03Mo");
                p.btn_fp.move("53","154",null,null,"300","330");

                p.btn_ag.set_cssclass("btn_main04Mo");
                p.btn_ag.move("265","154",null,null,"85","337");

                p.btn_rt.set_cssclass("btn_main05Mo");
                p.btn_rt.move("55","331",null,null,"300","150");

                p.btn_vs.set_cssclass("btn_main06Mo");
                p.btn_vs.move("259","331",null,null,"80","160");
                // this.Div02 }}


                // {{ this.Div03.form.Div00
                p = rootobj.Div03.form.Div00.form;

                p.Static01.set_font("12px/normal \"SpoqaHanSans-Regular\"");
                p.Static01.set_text("기존년도 : 2020년도 5월");
                p.Static01.move("175","102",null,"20","170",null);

                p.Static00.set_textAlign("center");
                p.Static00.set_font("20px/normal \"SpoqaHanSans-Regular\"");
                p.Static00.set_text("고등교육기관 취업통계");
                p.Static00.move("11","52",null,"60","11",null);
                // this.Div03.form.Div00 }}


                // {{ this.Div03
                p = rootobj.Div03.form;

                p.Div00.set_text("");
                p.Div00.move("0","0","480","482",null,null);
                // this.Div03 }}


                // {{ this.Div04.form.Div00
                p = rootobj.Div04.form.Div00.form;

                p.Static00.set_font("20px/normal \"SpoqaHanSans-Regular\"");
                p.Static00.move("15","35","120","32",null,null);

                p.btn_noticeMore.move("440","44","14","14",null,null);
                // this.Div04.form.Div00 }}


                // {{ this.Div04.form.Div01
                p = rootobj.Div04.form.Div01.form;

                p.btn_faq.set_font("12px/normal \"SpoqaHanSans-Bold\"");
                p.btn_faq.set_background("url(\'theme::default/images/btn_mainService01Mo.png\') no-repeat center top");
                p.btn_faq.set_text("FAQ");
                p.btn_faq.move("-16","53",null,null,"343","52");

                p.btn_pds.set_background("url(\'theme::default/images/btn_mainService02Mo.png\') no-repeat center top");
                p.btn_pds.set_font("12px/normal \"SpoqaHanSans-Bold\"");
                p.btn_pds.move("92","53",null,null,"228","51");

                p.btn_qna.set_background("url(\'theme::default/images/btn_mainService03Mo.png\') no-repeat center top");
                p.btn_qna.set_font("12px/normal \"SpoqaHanSans-Bold\"");
                p.btn_qna.move("215","53",null,null,"114","51");

                p.btn_question.set_background("url(\'theme::default/images/btn_mainService04Mo.png\') no-repeat center top");
                p.btn_question.set_font("12px/normal \"SpoqaHanSans-Bold\"");
                p.btn_question.move("340","53",null,null,"8","51");

                p.Static00.set_font("20px/normal \"SpoqaHanSans-Regular\"");
                p.Static00.move("0","0","315","32",null,null);
                // this.Div04.form.Div01 }}


                // {{ this.Div04
                p = rootobj.Div04.form;

                p.Div00.move("0","13","480","188",null,null);

                p.Div01.set_border("0px none,0px none,1px solid #e5e5e5");
                p.Div01.set_text("");
                p.Div01.move("15","215",null,null,"30","830");

                p.btn_news.set_background("url(\'theme::default/images/img_botMenu01Mo.jpg\') no-repeat left top");
                p.btn_news.set_font("17px \"SpoqaHanSans-Regular\"");
                p.btn_news.move("18.75","440",null,null,"95","570");

                p.btn_kessData.set_background("url(\'theme::default/images/img_botMenu02Mo.jpg\') no-repeat left top");
                p.btn_kessData.set_font("17px \"SpoqaHanSans-Regular\"");
                p.btn_kessData.move("18.75","685",null,null,"110","320");

                p.btn_kessPub.set_background("url(\'theme::default/images/img_botMenu03Mo.jpg\') no-repeat left top");
                p.btn_kessPub.set_font("17px \"SpoqaHanSans-Regular\"");
                p.btn_kessPub.move("17.92","942","294","218",null,null);
                // this.Div04 }}


                // {{ this.Div06.form.Div00
                p = rootobj.Div06.form.Div00.form;

                p.Button00_00_00_00_01.set_font("11px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
                p.Button00_00_00_00_01.move("151","64",null,null,"140","229");

                p.Button00_00_00_00_00.set_font("11px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
                p.Button00_00_00_00_00.move("176","56",null,null,"165","280");

                p.Button00_00_00_00.set_font("11px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
                p.Button00_00_00_00.move("129","23",null,null,"117","308");

                p.Div01.set_background("transparent");

                p.Div00.set_background("transparent");

                p.Div02.set_text("");
                p.Div02.move("11","124",null,"90","0",null);

                p.Static01_00_00.set_background("transparent");
                p.Static01_00_00.move("245","152","1","30",null,null);

                p.Static00_03_00_00.set_font("11px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
                p.Static00_03_00_00.move("73","158",null,null,"165","170");

                p.Static00_03_01.set_font("11px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
                p.Static00_03_01.set_text("문의시간 : (오전) 09:30~11:30 (오후) 13:30~17:30");
                p.Static00_03_01.move("35","186",null,null,"56","148");

                p.Combo00.set_font("11px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
                p.Combo00.set_border("1px solid #e6e6e6");
                p.Combo00.move("11","220",null,null,"1","100");

                p.Static01_00.set_background("transparent");
                p.Static01_00.move("Static00_03:0","102","1","30",null,null);

                p.Static00_03.set_font("11px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
                p.Static00_03.move("35","136","190","20",null,null);

                p.Static00_03_00.set_font("11px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
                p.Static00_03_00.move("35","161","62","20",null,null);

                p.Static01.set_background("transparent");

                p.Button00.move("0","262","0","0",null,null);

                p.Static02.set_font("10px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
                p.Static02.set_text("주소 : (27873) 충청북도 진천군 덕산읍 교학로 7, 한국교육개발원\r\n 교육통계센터 고등교육 취업통계팀");
                p.Static02.set_textAlign("center");
                p.Static02.move("16","273",null,null,"19","50");

                p.Static02_00.set_font("10px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
                p.Static02_00.move("118","304",null,null,"101","28");
                // this.Div06.form.Div00 }}


                // {{ this.Div06
                p = rootobj.Div06.form;

                p.Div00.move("-1","5",null,null,"10","10");
                // this.Div06 }}


                // {{ this.txt_mainImgWrap
                p = rootobj.txt_mainImgWrap.form;

                p.txt_mainImgTxt.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
                p.txt_mainImgTxt.move("58","37","256","31",null,null);

                p.txt_mainImgDate.set_font("16px/normal \"SpoqaHanSans-Bold\"");
                p.txt_mainImgDate.set_text("2020.4.1~2020.4.30");
                p.txt_mainImgDate.move("59","60","236","25",null,null);
                // this.txt_mainImgWrap }}
                p = rootobj;
                p.Div00.move("0","0","480","225",null,null);

                p.Div01.set_text("");
                p.Div01.move("0","641",null,"129","0",null);

                p.ImageViewer00.set_image("url(\'theme::default/images/img_mainTopMo.jpg\')");
                p.ImageViewer00.set_stretch("fit");
                p.ImageViewer00.move("0","149",null,"481","0",null);

                p.Div02.move("0","836","480","614",null,null);

                p.Div03.move("0","1348",null,"492","0",null);

                p.Div04.move("0","1840",null,"1230","0",null);

                p.Div06.move("0","3070",null,"370","0",null);

                p.txt_mainImgWrap.set_background("url(\'theme::default/images/ico_mainImgTxtMo.png\') no-repeat left center");
                p.txt_mainImgWrap.set_text("");
                p.txt_mainImgWrap.move("30","499","369","126",null,null);
            	}
            );
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_main.xfdl", function() {
        this.linkType;

        this.Form_main_onload = function(obj,e)
        {
        	var h = this.width;
        	workSizeInit(this.Div00, h , this.Div00.width);
        	workSizeInit(this.Div01, h , this.Div01.width);
        	workSizeInit(this.Div02, h , this.Div02.width);
        	workSizeInit(this.Div03.form.Div00, h , this.Div03.form.Div00.width);
        	workSizeInit(this.Div04, h , this.Div04.width);
        	workSizeInit(this.Div06.form.Div00, h , this.Div06.form.Div00.width);

        	this.selectSessionChk();
        	var objApp = nexacro.getApplication();
        	var chk = objApp.gds_login_info.getColumn(0, "LOGIN_YN");	// 로그인 여부
        	if(chk == "Y"){
        		this.Div00.form.div_on.set_visible(true);
        		this.Div00.form.div_off.set_visible(false);
        	} else {
        		this.Div00.form.div_on.set_visible(false);
        		this.Div00.form.div_off.set_visible(true);
        	}
        	trace("svcBaseUrl::" + "ui/main/chart/index.html");
        	this.Div03.form.Div00.form.webBrower_chart.set_url(nexacro.getEnvironment().services["svcBaseUrl"].url + "ui/main/chart/index.html") ;
        	this.selectInitInfo();
        };

        this.Form_main_onsize = function(obj,e)
        {
        	var h = e.cx;
        	workSizeInit(this.Div00, h , this.Div00.width);
        	workSizeInit(this.Div01, h , this.Div01.width);
        	workSizeInit(this.Div02, h , this.Div02.width);
        	workSizeInit(this.Div03.form.Div00, h , this.Div03.form.Div00.width);
        	workSizeInit(this.Div04, h , this.Div04.width);
        	workSizeInit(this.Div06.form.Div00, h , this.Div06.form.Div00.width);
        };


        /*	1200px 가운데 고정
        *	cpnt : 적용 컴퍼넌트
        *	cx : 외부 넓이
        *	maxW : 컴퍼넌트 고정 넓이
        */
        function workSizeInit(cpnt,cx,maxW)
        {
        	maxW = maxW==null ? 1200: maxW;
        	var nCompWidth = cpnt.getOffsetWidth();
        	var nCompX = (cx/2) - (nCompWidth/2);
        	if(cx < maxW){
        		nCompX = 0;
        	}
        	cpnt.setOffsetLeft(nCompX);
        };




        // 알림소식
        this.Div02_btn_hp_onclick = function(obj,e)
        {
        	nexacro.setPrivateProfile("pageCd", "HP_NOTICE");
        	this.fn_initPage("FrameBase::MAIN_FRAME.xfdl");
        };
        this.Div02_btn_gp_onclick = function(obj,e)
        {
        	nexacro.setPrivateProfile("pageCd", "GP");
        	this.fn_initPage("FrameBase::MAIN_FRAME.xfdl");
        };

        this.Div02_btn_fp_onclick = function(obj,e)
        {
        	nexacro.setPrivateProfile("pageCd", "FP");
        	this.fn_initPage("FrameBase::MAIN_FRAME.xfdl");
        };

        this.Div02_btn_ag_onclick = function(obj,e)
        {
        	nexacro.setPrivateProfile("pageCd", "AG");
        	this.fn_initPage("FrameBase::MAIN_FRAME.xfdl");
        };

        this.Div02_btn_rt_onclick = function(obj,e)
        {
        	nexacro.setPrivateProfile("pageCd", "RT");
        	this.fn_initPage("FrameBase::MAIN_FRAME.xfdl");
        };

        this.Div02_btn_vs_onclick = function(obj,e)
        {
        	nexacro.setPrivateProfile("pageCd", "VS");
        	this.fn_initPage("FrameBase::MAIN_FRAME.xfdl");
        };
        this.Div04_Div00_btn_noticeMore_onclick = function(obj,e)
        {
        	nexacro.setPrivateProfile("pageCd", "HP_NOTICE");
        	this.fn_initPage("FrameBase::MAIN_FRAME.xfdl");
        };
        this.Div04_Div01_btn_faq_onclick = function(obj,e)
        {
        	nexacro.setPrivateProfile("pageCd", "HP_FAQ");
        	this.fn_initPage("FrameBase::MAIN_FRAME.xfdl");
        };

        this.Div04_Div01_btn_pds_onclick = function(obj,e)
        {
        	nexacro.setPrivateProfile("pageCd", "HP_PDS");
        	this.fn_initPage("FrameBase::MAIN_FRAME.xfdl");
        };

        this.Div04_Div01_btn_qna_onclick = function(obj,e)
        {
        	nexacro.setPrivateProfile("pageCd", "HP_QNA");
        	this.fn_initPage("FrameBase::MAIN_FRAME.xfdl");
        };

        this.Div04_Div01_btn_question_onclick = function(obj,e)
        {
        	nexacro.setPrivateProfile("pageCd", "HP_QUESTION");
        	this.fn_initPage("FrameBase::MAIN_FRAME.xfdl");
        };

        /* 게시글 선택*/
        this.Div04_Div00_gd_notice_oncellclick = function(obj,e)
        {
        	var bbsNo = this.ds_notice.getColumn(obj.getSelectedRows(), "BBSNO");
        	nexacro.setPrivateProfile("pageCd", "HP_NOTICE_DETAIL");
        	nexacro.setPrivateProfile("bbsNo", this.ds_notice.getColumn(obj.getSelectedRows(), "BBSNO"));
        	this.fn_initPage("FrameBase::MAIN_FRAME.xfdl");
        };

        this.Div04_btn_news_onclick = function(obj,e)
        {
        	nexacro.setPrivateProfile("pageCd", "HP_NEWS");
        	this.fn_initPage("FrameBase::MAIN_FRAME.xfdl");
        };



        // 로그인페이지 이동
        this.Div00_btn_logState_onclick = function(obj,e)
        {
        	this.fn_initPage("HP::hp08m00.xfdl");
        };

        // 로그아웃처리
        this.Div00_div_on_btn_logout_onclick = function(obj,e)
        {
        	if(this.confirm("로그아웃 하시겠습니까?")){
        		this.gfnTransaction("logOut",
        				"/swiss/hp/login/logOut.do",
        				"",
        				"gds_rtn_result=dsResult",
        				"",
        				"fnCallback",
        				false);
        		window.location.href=nexacro.getEnvironment().services["svcBaseUrl"].url;
        	}
        };

        // 마이페이지 연결
        this.Div00_div_on_btn_my_onclick = function(obj,e)
        {
        	nexacro.setPrivateProfile("pageCd", "MY");
        	this.fn_initPage("FrameBase::MAIN_FRAME.xfdl");
        };

        // 원격지원
        this.Div00_btn_online_onclick = function(obj,e)
        {

        };

        // 그래프
        this.Div03_Div00_webBrower_chart_onloadcompleted = function(obj,e)
        {
        	obj.callMethod("fn_load", "100","80","50","85");
        };

        this.fnCallback = function(){
        }


        /* 로그인정보 가져오기 */
        this.selectSessionChk = function(){

        	this.gfnTransaction("selectSessionChk",
        						"swiss/cm/getSessionChk.do",
        						"dsSearch=dsSearch",
        						"gds_login_info=dsLoginInfo gds_charge_school=dsChargeSchool",
        						"",
        						"fnCallback",
        						false);
        }

        /* 게시판목록 */
        this.selectInitInfo = function(){
        	this.gfnTransaction("selectInitInfo",
        						"swiss/hp/home/selectInitInfo.do",
        						"",
        						"ds_notice=dsResult",
        						"",
        						"fnCallback",
        						true);
        }


        // 간행물
        this.Div04_btn_kessPub_onclick = function(obj,e)
        {
        	this.webBrower_link.set_url(nexacro.getEnvironment().services["svcBaseUrl"].url + "ui/main/mainLink.html");
        	this.linkType="pub";
        };

        // 데이터 제공신청
        this.Div04_btn_kessData_onclick = function(obj,e)
        {
        	this.webBrower_link.set_url(nexacro.getEnvironment().services["svcBaseUrl"].url + "ui/main/mainLink.html");
        	this.linkType="data";
        };
        this.webBrower_link_onloadcompleted = function(obj,e)
        {
        	this.webBrower_link.callMethod("goUrl", this.linkType);
        };

        this.Div04_btn_00_onclick = function(obj,e)
        {
        	this.fn_initPage("CM::DocViewer.xfdl");
        };

        this.Div04_btn_01_onclick = function(obj,e)
        {
        	this.fn_initPage("HP::rd_test.xfdl");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_main_onload,this);
            this.addEventHandler("onsize",this.Form_main_onsize,this);
            this.Div00.addEventHandler("onsize",this.Div00_onsize,this);
            this.Div00.form.btn_online.addEventHandler("onclick",this.Div00_btn_online_onclick,this);
            this.Div00.form.div_on.form.btn_logout.addEventHandler("onclick",this.Div00_div_on_btn_logout_onclick,this);
            this.Div00.form.div_on.form.btn_my.addEventHandler("onclick",this.Div00_div_on_btn_my_onclick,this);
            this.Div00.form.div_off.form.btn_login.addEventHandler("onclick",this.Div00_btn_logState_onclick,this);
            this.Div01.form.Static02.addEventHandler("onclick",this.Div01_Static02_onclick,this);
            this.Div02.form.btn_hp.addEventHandler("onclick",this.Div02_btn_hp_onclick,this);
            this.Div02.form.btn_gp.addEventHandler("onclick",this.Div02_btn_gp_onclick,this);
            this.Div02.form.btn_fp.addEventHandler("onclick",this.Div02_btn_fp_onclick,this);
            this.Div02.form.btn_ag.addEventHandler("onclick",this.Div02_btn_ag_onclick,this);
            this.Div02.form.btn_rt.addEventHandler("onclick",this.Div02_btn_rt_onclick,this);
            this.Div02.form.btn_vs.addEventHandler("onclick",this.Div02_btn_vs_onclick,this);
            this.Div03.form.Div00.form.webBrower_chart.addEventHandler("onloadcompleted",this.Div03_Div00_webBrower_chart_onloadcompleted,this);
            this.Div04.form.Div00.form.btn_noticeMore.addEventHandler("onclick",this.Div04_Div00_btn_noticeMore_onclick,this);
            this.Div04.form.Div00.form.gd_notice.addEventHandler("oncellclick",this.Div04_Div00_gd_notice_oncellclick,this);
            this.Div04.form.Div01.form.btn_faq.addEventHandler("onclick",this.Div04_Div01_btn_faq_onclick,this);
            this.Div04.form.Div01.form.btn_pds.addEventHandler("onclick",this.Div04_Div01_btn_pds_onclick,this);
            this.Div04.form.Div01.form.btn_qna.addEventHandler("onclick",this.Div04_Div01_btn_qna_onclick,this);
            this.Div04.form.Div01.form.btn_question.addEventHandler("onclick",this.Div04_Div01_btn_question_onclick,this);
            this.Div04.form.btn_news.addEventHandler("onclick",this.Div04_btn_news_onclick,this);
            this.Div04.form.btn_kessData.addEventHandler("onclick",this.Div04_btn_kessData_onclick,this);
            this.Div04.form.btn_kessPub.addEventHandler("onclick",this.Div04_btn_kessPub_onclick,this);
            this.Div04.form.btn_00.addEventHandler("onclick",this.Div04_btn_00_onclick,this);
            this.Div04.form.btn_01.addEventHandler("onclick",this.Div04_btn_01_onclick,this);
            this.Div06.form.Div00.form.Button00_00_00_00_01.addEventHandler("onclick",this.Div00_Button00_00_00_00_01_onclick,this);
            this.Div06.form.Div00.form.Static00_03_00_00.addEventHandler("onclick",this.Div00_Static00_03_00_00_onclick,this);
            this.Div06.form.Div00.form.Static00_03_01.addEventHandler("onclick",this.Div00_Static00_03_01_onclick,this);
            this.Div06.form.Div00.form.Combo00.addEventHandler("onitemchanged",this.Div00_Combo00_onitemchanged,this);
            this.webBrower_link.addEventHandler("onloadcompleted",this.webBrower_link_onloadcompleted,this);
        };

        this.loadIncludeScript("Form_main.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
