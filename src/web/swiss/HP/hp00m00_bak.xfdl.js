(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("hp00m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,5530);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","0","0","1260","5500",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_font("15px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            obj.set_taborder("63");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","31","5520",null,null,null,null,null,null,this.Div00.form);
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_taborder("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","5520",null,null,null,null,null,null,this.Div00.form);
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_taborder("2");
            this.Div00.addChild(obj.name, obj);

            obj = new ImageViewer("imgViewer_00","31","21","1199","336",null,null,null,null,null,null,this.Div00.form);
            obj.set_image("url(\'imagerc::privacy_label.png\')");
            obj.set_taborder("3");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_00","80","imgViewer_00:20","1090","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("I. 개인정보처리방침(고등교육취업통계) (2024.08.05. 기준)");
            obj.set_font("bold 18px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_taborder("4");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_01","80","label_00:20","1090","239",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("한국교육개발원 ‘고등교육기관졸업자 취업통계조사 홈페이지’에서 취급하는 모든 개인정보는 개인정보 보호법 등 관련 법령상의 개인정보보호 규정을 준수하여 \r\n수집·보유·처리 되고 있습니다. \r\n\r\n한국교육개발원 ‘고등교육기관졸업자 취업통계조사 홈페이지’는 개인정보보호법에 따라 이용자의 개인정보보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 \r\n처리할 수 있도록 아래와 같은 처리 방침을 두고 있습니다. \r\n\r\n특히, 개인정보를 처리하는 한국교육개발원 웹사이트의 경우 『개인정보 보호법』 제 30 조 제 1 항 및 동법『시행령』 제 31 조 제 1 항의 규정에 의하여 해당 홈페이지에 \r\n별도의 『개인정보처리방침』을 정하여 운영하고 있습니다. 한국교육개발원은 개인정보 처리방침을 변경하는 경우에는 시행의 시기, 변경된 내용을 정보주체가 쉽게 확인 할 수 있도록 \r\n변경 전·후를 비교하여 공개하도록 할 예정입니다.");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_border("1px solid black");
            obj.set_padding("10px");
            obj.set_taborder("5");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_02","80","label_01:20","1090","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("제1조(개인정보의 처리목적, 처리 및 보유기간, 처리하는 개인정보 항목)");
            obj.set_font("bold 16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_taborder("6");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_03","80","label_02:20","1090","400",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("  ① 한국교육개발원 ‘고등교육기관졸업자 취업통계조사 홈페이지(이하 취업통계홈페이지)은 서비스 제공 및 민원처리, 소관업무 수행 등의 목적으로 필요에 의한 최소한으로 개인정보를 \r\n      수집하고 있습니다. \r\n\r\n  ② 취업통계홈페이지에서 처리하는 개인정보는 수집·이용 목적으로 명시한 범위내에서 처리하며, 개인정보보호법 및 관련 법령에서 정하는 보유기간을 준용하여 이행하고 있습니다. \r\n\r\n  ③ 취업통계홈페이지에서 처리하는 개인정보의 항목은 다음과 같습니다.\r\n\r\n      - 필수 : 학교명, 사용자명, 이메일주소, 전화번호\r\n\r\n      - 선택 : 휴대폰번호, 부서명, 팩스\r\n\r\n  ④ 취업통계시스템에서 운영하는 개인정보파일 현황은 다음과 같습니다. \r\n\r\n      - 개인정보파일의 명칭 : 취업통계조사 홈페이지 회원정보\r\n\r\n      - 개인정보파일의 운영근거 : 개인정보 보호법 제30조 제1항 및 개인정보보호법 시행령제 31조 제1항의 규정(정보주체동의)");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_taborder("7");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_04","80","label_03:20","1090","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("제2조(개인정보 제3자 제공)");
            obj.set_font("bold 16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_taborder("8");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_05","80","label_04:20","1090","480",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("  ① 취업통계시스템은 정보주체의 개인정보를 수집·이용 목적으로 명시한 범위 내에서 처리하며, 다음의 경우를 제외하고는 본래의 목적 범위를 초과하여 처리하거나 제3자에게 제공하지\r\n      않습니다.\r\n\r\n      1. 정보주체로부터 별도의 동의를 받는 경우\r\n\r\n      2. 법률에 특별한 규정이 있는 경우\r\n\r\n      3. 정보주체 또는 법정대리인이 의사표시를 할 수 없는 상태에 있거나 주소불명 등으로 사전 동의를 받을 수 없는 경우로서 명백히 정보주체 또는 제3자의 급박한 생명, 신체, \r\n          재산의 이익을 위하여 필요하다고 인정되는 경우\r\n\r\n      4. 통계작성 및 학술연구 등의 목적을 위하여 필요한 경우로서 특정 개인을 알아 볼 수 없는 형태로 개인정보를 제공하는 경우\r\n\r\n      5. 개인정보를 목적 외의 용도로 이용하거나 이를 제3자에게 제공하지 아니하면 다른 법률에서 정하는 소관 업무를 수행할 수 없는 경우로서 보호위원회의 심의·의결을 거친 경우\r\n\r\n      6. 조약, 그 밖의 국제협정의 이행을 위하여 외국정보 또는 국제기구에 제공하기 위하여 필요한 경우\r\n\r\n      7. 범죄의 수사와 공소의 제기 및 유지를 위하여 필요한 경우\r\n\r\n      8. 법원의 재판업무 수행을 위하여 필요한 경우\r\n\r\n      9. 형 및 감호, 보호처분의 집행을 위하여 필요한 경우\r\n\r\n  ② 제1항에 대한 사항은 각 소속기관에서 운영하는 소관 홈페이지에 게재하여 정보주체가 확인할 수 있도록 안내를 하고 있습니다.");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_taborder("9");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_06","80","label_05:20","1090","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("제3조(개인정보처리 위탁)");
            obj.set_font("bold 16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_taborder("10");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_07","80","label_06:20","1090","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("  ① 취업통계시스템은 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다. ");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_taborder("11");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_08","80","label_07:20","360","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("위탁기관");
            obj.set_textAlign("center");
            obj.set_background("#dfeaf5");
            obj.set_font("bold 15px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_border("1px solid black, 1px solid black, 1px solid black, 0px none");
            obj.set_taborder("12");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_09","440","label_07:20","360","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("위탁받는자");
            obj.set_textAlign("center");
            obj.set_background("#dfeaf5");
            obj.set_font("bold 15px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_border("1px solid, 1px solid, 1px solid, 0px none");
            obj.set_taborder("13");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_10","800","label_07:20","371","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("위탁업무");
            obj.set_textAlign("center");
            obj.set_background("#dfeaf5");
            obj.set_font("bold 15px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_border("1px solid black, 0px none");
            obj.set_taborder("14");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_11","80","label_08:0","360","45",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("한국교육개발원");
            obj.set_textAlign("center");
            obj.set_border("0px none, 1px solid black, 1px solid black, 0px none");
            obj.set_font("15px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_taborder("15");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_12","440","label_09:0","360","45",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("(주)천명시스템");
            obj.set_textAlign("center");
            obj.set_border("0px none, 1px solid, 1px solid, 0px none");
            obj.set_font("15px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_taborder("16");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_13","800","label_10:0","370","45",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("웹 사이트 및 시스템관리\r\n조사자료 및 데이터 관리");
            obj.set_textAlign("center");
            obj.set_border("0px none, 0px none, 1px solid black");
            obj.set_font("15px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_taborder("17");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_14","80","label_13:20","1090","120",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("  ② 취업통계시스템은 위탁계약 체결시 개인정보 보호법 제26조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적·관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리·감독, 손해배상 등\r\n      책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.\r\n  \r\n  ③ 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체 없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다. ");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_taborder("18");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_15","80","label_14:20","1090","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("제4조(정보주체 권리·의무 및 그 행사방법) ");
            obj.set_font("bold 16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_taborder("19");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_16","80","label_15:20","1090","630",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("  ① 정보주체(만 14세 미만인 경우에는 법정대리인을 말함)는 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.\r\n\r\n      1. 개인정보 열람요구\r\n      \r\n      2. 오류 등이 있을 경우 정정 요구\r\n      \r\n      3. 삭제요구\r\n      \r\n      4. 처리정지 요구\r\n\r\n  ② 제1항에 따른 권리 행사는 개인정보보호법 시행규칙 별지 제8호 서식을 작성하여 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며, 기관은 이에 대해 지체\r\n      없이 조치하겠습니다.\r\n\r\n  ③ 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다.\r\n\r\n  ④ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보보호법 시행규칙 별지 제11호 서식에 따른 위임장을 \r\n      제출하셔야 합니다. \r\n\r\n  ⑤ 개인정보 열람 및 처리정지 요구는 개인정보보호법 제35조 제5항, 제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다. \r\n\r\n  ⑥ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.\r\n\r\n  ⑦ 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 주민등록증·운전면허증·여권 등의 신분증명서를 \r\n      제출받아 확인합니다.\r\n\r\n  ⑧ 정보주체는 하기 제7조(개인정보 보호책임자)에 명시된 개인정보보호 담당자 및 개인정보파일별 담당부서/담당자를 통하여 권리·의무를 행사할 수 있으며, 한국교육개발원은 \r\n      정보주체의 청구가 신속하게 처리되도록 노력하겠습니다. \r\n\r\n      ☞ 정보주체는 상기 열람청구 접수부서 이외에 안전행정부의 ‘개인정보보호 종합지원 포털’ 웹사이트(www.privacy.go.kr)를 통하여서도 개인정보 열람, 정정·삭제, 처리정지\r\n          청구를 하실 수 있습니다.  ");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_taborder("20");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_17","80","label_16:20","1090","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("제5조(개인정보 파기 절차 및 방법) ");
            obj.set_font("bold 16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_taborder("21");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_18","80","label_17:20","1090","420",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("  ① 취업통계시스템에서는 원칙적으로 개인정보 처리목적이 달성된 개인정보는 지체없이 파기합니다. 다만, 다른 법령에 따라 보존하여야 하는 경우에는 그러하지 않을 수 있습니다. \r\n      파기의 절차, 기한 및 방법은 다음과 같습니다.\r\n      \r\n     가. 파기절차\r\n      \r\n      불필요한 개인정보 및 개인정보파일은 부서별 개인정보책임자의 책임 하에 내부방침 절차에 따라 다음과 같이 처리하고 있습니다.\r\n\r\n       ⦁ 개인정보의 파기\r\n\r\n       - 보유기간이 경과한 개인정보는 종료일로부터 지체 없이 파기합니다. \r\n\r\n       ⦁ 개인정보파일의 파기\r\n\r\n       - 개인정보파일의 처리 목적 달성, 해당 서비스의 폐지, 사업의 종료 등 그 개인정보파일이 불필요하게 되었을 때에는 개인정보의 처리가 불필요한 것으로 인정\r\n          되는 날로부터 지체 없이 그 개인정보파일을 파기합니다. \r\n\r\n      나. 파기방법\r\n\r\n      전자적 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다. ");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_taborder("22");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_19","80","label_18:20","1090","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("제6조(개인정보 안전성 확보 조치) ");
            obj.set_font("bold 16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_taborder("23");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_20","80","label_19:20","1090","550",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("  ① 취업통계시스템은 「개인정보보호법」 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적, 관리적, 물리적 조치를 하고 있습니다.\r\n\r\n      1. 개인정보 취급직원의 최소화 및 교육\r\n\r\n          개인정보를 취급하는 직원은 반드시 필요한 인원에 한하여 지정·관리하고 있으며 취급직원을 대상으로 안전한 관리를 위한 교육을 실시하고 있습니다.\r\n\r\n      2. 개인정보에 대한 접근 제한\r\n\r\n          개인정보를 처리하는 개인정보처리시스템에 대한 접근권한의 부여·변경·말소를 통하여 개인정보에 대한 접근통제를 위한 필요한 조치를 하고 있으며 침입차단 시스템을 이용하여 \r\n          외부로부터의 무단 접근을 통제하고 있습니다.\r\n\r\n      3. 접속기록의 보관\r\n\r\n          개인정보처리시스템에 접속한 기록을 최소 6개월 이상 보관·관리하고 있습니다. \r\n\r\n      4. 개인정보의 암호화\r\n\r\n          개인정보는 암호화 등을 통해 안전하게 저장 및 관리되고 있습니다. 또한 중요한 데이터는 저장 및 전송 시 암호화하여 사용하는 등의 별도 보안기능을 사용하고 있습니다. \r\n\r\n      5. 보안프로그램 설치 및 주기적 점검·갱신\r\n\r\n          해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적으로 갱신·점검하고 있습니다.\r\n\r\n      6. 비인가자에 대한 출입 통제\r\n          개인정보를 보관하고 있는 개인정보처리시스템의 물리적 보관 장소를 별도로 두고 이에 대해 출입통제 절차를 수립·운영하고 있습니다.");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_taborder("24");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_21","80","label_20:20","1090","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("제7조(개인정보 보호책임자)\r");
            obj.set_font("bold 16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_taborder("25");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_22","80","label_21:20","1090","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("  ① 개인정보보호법 제3조 제1항에 따라 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보\r\n      보호책임자를 지정하고 있습니다.");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_taborder("26");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_23","80","label_22:20","280","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("구분");
            obj.set_textAlign("center");
            obj.set_background("#dfeaf5");
            obj.set_font("bold 15px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_border("1px solid black, 1px solid black, 1px solid black, 0px none");
            obj.set_taborder("27");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_24","80","label_23:0","280","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("개인정보보호 책임관");
            obj.set_textAlign("center");
            obj.set_border("0px none, 1px solid black, 1px solid black, 0px none");
            obj.set_font("13px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_taborder("28");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_25","80","label_24:0","280","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("개인정보보호 분야별 책임관");
            obj.set_textAlign("center");
            obj.set_border("0px none, 1px solid black, 1px solid black, 0px none");
            obj.set_font("13px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_taborder("29");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_26","80","label_25:0","280","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("개인정보보호 담당자");
            obj.set_textAlign("center");
            obj.set_border("0px none, 1px solid black, 1px solid black, 0px none");
            obj.set_font("13px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_taborder("30");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_27","360","label_22:20","280","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("부서명/직책");
            obj.set_textAlign("center");
            obj.set_background("#dfeaf5");
            obj.set_font("bold 15px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_border("1px solid, 1px solid, 1px solid, 0px none");
            obj.set_taborder("31");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_28","360","label_27:0","280","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("경영지원본부장");
            obj.set_textAlign("center");
            obj.set_border("0px none, 1px solid, 1px solid, 0px none");
            obj.set_font("13px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_taborder("32");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_29","360","label_28:0","280","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("교육데이터연구본부장");
            obj.set_textAlign("center");
            obj.set_border("0px none, 1px solid, 1px solid, 0px none");
            obj.set_font("13px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_taborder("33");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_30","360","label_29:0","280","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("고등교육취업통계팀");
            obj.set_textAlign("center");
            obj.set_border("0px none, 1px solid, 1px solid, 0px none");
            obj.set_font("13px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_taborder("34");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_31","640","label_22:20","250","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("성명");
            obj.set_textAlign("center");
            obj.set_background("#dfeaf5");
            obj.set_font("bold 15px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_border("1px solid, 1px solid, 1px solid, 0px none");
            obj.set_taborder("35");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_32","640","label_31:0","250","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("임승호");
            obj.set_textAlign("center");
            obj.set_border("0px none, 1px solid, 1px solid, 0px none");
            obj.set_font("13px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_taborder("36");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_33","640","label_32:0","250","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("박병영");
            obj.set_textAlign("center");
            obj.set_border("0px none, 1px solid, 1px solid, 0px none");
            obj.set_font("13px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_taborder("37");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_34","640","label_33:0","250","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("노상태");
            obj.set_textAlign("center");
            obj.set_border("0px none, 1px solid, 1px solid, 0px none");
            obj.set_font("13px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_taborder("38");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_35","890","label_22:20","280","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("연락처");
            obj.set_textAlign("center");
            obj.set_background("#dfeaf5");
            obj.set_font("bold 15px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_border("1px solid black, 0px none");
            obj.set_taborder("39");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_36","890","label_35:0","280","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_text(" 043-530-9800\r\n winho@kedi.re.kr");
            obj.set_textAlign("left");
            obj.set_border("0px none, 0px none, 1px solid black");
            obj.set_font("13px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_taborder("40");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_37","890","label_36:0","280","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_text(" 043-530-9533\r\n bybypark@kedi.re.kr");
            obj.set_textAlign("left");
            obj.set_border("0px none, 0px none, 1px solid black");
            obj.set_font("13px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_verticalAlign("middle");
            obj.set_taborder("41");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_38","890","label_37:0","280","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_text(" 043-530-9659\r\n nosangtae@kedi.re.kr");
            obj.set_textAlign("left");
            obj.set_border("0px none, 0px none, 1px solid black");
            obj.set_font("13px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_verticalAlign("middle");
            obj.set_taborder("42");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_39","80","label_38:20","1090","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("  ② 정보주체는 취업통계시스템의 서비스를 이용하면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. \r\n      한국교육개발원은 정보주체의 문의에 대해 지체 없이 답변 및 처리 하겠습니다. ");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_taborder("43");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_40","80","label_39:20","1090","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("제8조(권익침해 구제방법) ");
            obj.set_font("bold 16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_taborder("44");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_41","80","label_40:20","1090","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("정보주체는 개인정보 침해로 인한 피해구제, 상담 등을 하기 위해 다음과 같이 한국교육개발원 및 타 기관에 문의 하실 수 있습니다.\r\n  ① 취업통계조사 홈페이지의 서비스의 이용과 관련한 개인정보 침해 신고는 다음과 같이 신고 할 수 있습니다.\r\n      · 취업통계시스템 개인정보 침해신고 : 취업통계시스템 개인정보 침해신고 : 노상태(043-530-9659, nosangtae@kedi.re.kr)\r\n\r\n      이와 관련한 처리절차는 다음과 같습니다. ");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_taborder("45");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_42","500","label_41:20","340","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("【개인정보 관련 민원 및 침해신고 처리절차】");
            obj.set_font("bold 16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_textAlign("left");
            obj.set_taborder("46");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_43","80","label_42:20","227","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("침해신고접수");
            obj.set_textAlign("center");
            obj.set_background("#ccffff");
            obj.set_font("bold 15px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_border("1px solid black, 1px solid black, 1px solid black, 1px solid black");
            obj.set_taborder("47");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_44","label_43:70","label_42:20","228","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("침해사실조사");
            obj.set_textAlign("center");
            obj.set_background("#ccffff");
            obj.set_font("bold 15px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_border("1px solid, 1px solid, 1px solid,1px solid black");
            obj.set_taborder("48");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_45","label_44:70","label_42:20","227","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("처    리");
            obj.set_textAlign("center");
            obj.set_background("#ccffff");
            obj.set_font("bold 15px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_border("1px solid, 1px solid, 1px solid,1px solid black");
            obj.set_taborder("49");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_46","label_45:70","label_42:20","228","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("결과통보");
            obj.set_textAlign("center");
            obj.set_background("#ccffff");
            obj.set_font("bold 15px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_border("1px solid black, 1px solid black");
            obj.set_taborder("50");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_47","80","label_43:20","227","105",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("방문접수\r\n(담당관실)");
            obj.set_textAlign("center");
            obj.set_border("1px solid black, 1px solid black, 1px solid black, 1px solid black");
            obj.set_background("#f4f4f4");
            obj.set_taborder("51");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_48","label_47:10","label_43:62","60","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("⇒");
            obj.set_textAlign("center");
            obj.set_taborder("52");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_49","label_43:70","label_44:20","228","105",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("침해여부 확인,\r\n 침해기관 방문\r\n및\r\n서면조사");
            obj.set_textAlign("center");
            obj.set_border("1px solid black, 1px solid black, 1px solid black, 1px solid black");
            obj.set_background("#f4f4f4");
            obj.set_taborder("53");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_50","label_49:10","label_44:62","60","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("⇒");
            obj.set_textAlign("center");
            obj.set_taborder("54");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_51","label_44:70","label_45:20","227","105",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("처리 및 조치");
            obj.set_textAlign("center");
            obj.set_border("1px solid black, 1px solid black, 1px solid black, 1px solid black");
            obj.set_background("#f4f4f4");
            obj.set_taborder("55");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_52","label_51:10","label_45:62","60","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("⇒");
            obj.set_textAlign("center");
            obj.set_taborder("56");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_53","label_45:70","label_46:20","228","105",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("신고인 통보");
            obj.set_textAlign("center");
            obj.set_border("1px solid black, 1px solid black, 1px solid black, 1px solid black");
            obj.set_background("#f4f4f4");
            obj.set_taborder("57");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_54","80","label_47:20","227","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("침해신고서");
            obj.set_textAlign("center");
            obj.set_border("1px solid black, 1px solid black, 1px solid black, 1px solid black");
            obj.set_background("#ffff99");
            obj.set_font("bold 15px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_taborder("58");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_55","label_54:70","label_49:20","228","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("침해사고관리대장");
            obj.set_textAlign("center");
            obj.set_border("1px solid black, 1px solid black, 1px solid black, 1px solid black");
            obj.set_background("#ffff99");
            obj.set_font("bold 15px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_taborder("59");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_56","label_55:70","label_51:20","227","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("조치보고서");
            obj.set_textAlign("center");
            obj.set_border("1px solid black, 1px solid black, 1px solid black, 1px solid black");
            obj.set_background("#ffff99");
            obj.set_font("bold 15px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_taborder("60");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_57","label_56:70","label_53:20","228","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("결과통보서");
            obj.set_textAlign("center");
            obj.set_border("1px solid black, 1px solid black, 1px solid black, 1px solid black");
            obj.set_background("#ffff99");
            obj.set_font("bold 15px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_taborder("61");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_58","80","label_54:20","1090","360",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("  ② 개인정보주체는 개인정보침해로 인한 피해를 구제 받기 위하여 개인정보 분쟁 조정위원회, 한국인터넷진흥원 개인정보 침해 - 신고센터 등에 분쟁해결이나 상담등을 신청할 수 있습니다.\r\n\r\n      ⦁ 개인정보 분쟁조정위원회 : 1833-6972(www.kopico.or.kr)\r\n\r\n      ⦁ 개인정보 침해신고센터 : 118(privacy.kisa.or.kr)\r\n\r\n      ⦁ 대검찰청 사이버수사과 : 1301(www.spo.go.kr)\r\n\r\n      ⦁ 경찰청 사이버안전국 : 182(police.go.kr)\r\n\r\n  ③ 개인정보의 열람, 정정·삭제, 처리정지 등에 대한 정보주체자의 요구에 대하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는 이익을 침해 받은 자는 행정심판법이 \r\n\r\n        정하는 바에 따라 행정심판을 청구할 수 있습니다.\r\n\r\n      ☞ 중앙행정심판위원회(www.simpan.go.kr)의 전화번호 안내 참조");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_taborder("62");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_59","80","label_58:20","1090","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("제9조. 개인정보 처리방침 변경");
            obj.set_font("bold 16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_60","80","label_59:20","1090","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("이 개인정보처리방침은 2023.01.17.부터 적용됩니다. 이전의 개인정보처리방침은 아래에서 확인 가능합니다. ");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_privacy_20210120","80","label_60:10","240","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("☞ 2021. 01. 20. 개인정보처리 방침 보기");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_color("#188af5");
            obj.set_textDecoration("underline");
            obj.set_cursor("pointer");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_privacy_20210527","80","label_privacy_20210120:10","240","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("☞ 2021. 05. 27. 개인정보처리 방침 보기");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_color("#188af5");
            obj.set_textDecoration("underline");
            obj.set_cursor("pointer");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_privacy_20210625","80","label_privacy_20210527:10","240","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("☞ 2021. 06. 25. 개인정보처리 방침 보기");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_color("#188af5");
            obj.set_textDecoration("underline");
            obj.set_cursor("pointer");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_privacy_20210804","80","label_privacy_20210625:10","240","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("☞ 2021. 08. 04. 개인정보처리 방침 보기");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_color("#188af5");
            obj.set_textDecoration("underline");
            obj.set_cursor("pointer");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_privacy_20230117","80","label_privacy_20210804:10","240","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("☞ 2022. 01. 06. 개인정보처리 방침 보기");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_color("#188af5");
            obj.set_textDecoration("underline");
            obj.set_cursor("pointer");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("label_privacy_20230117_00","80","label_privacy_20230117:10","240","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("☞ 2023. 01.17. 개인정보처리 방침 보기");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_color("#188af5");
            obj.set_textDecoration("underline");
            obj.set_cursor("pointer");
            obj.set_taborder("70");
            this.Div00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,5530,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("hp00m00_copy1.xfdl","CM::common.xjs");
        this.registerScript("hp00m00_copy1.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;

        this.hp00m00_onload = function(obj,e)
        {

        };


        this.Div_label_privacy_20210120_onclick = function(obj,e)
        {
        	var url = nexacro.getEnvironment().services["svcBaseUrl"].url + "privacy_20210120.pdf";
        	location.href = url;
        };

        this.Div00_label_privacy_20210527_onclick = function(obj,e)
        {
        	var url = nexacro.getEnvironment().services["svcBaseUrl"].url + "privacy_20210527.pdf";
        	location.href = url;
        };

        this.Div00_label_privacy_20210625_onclick = function(obj,e)
        {
        	var url = nexacro.getEnvironment().services["svcBaseUrl"].url + "privacy_20210625.pdf";
        	location.href = url;
        };

        this.Div00_label_privacy_20210804_onclick = function(obj,e)
        {
        	var url = nexacro.getEnvironment().services["svcBaseUrl"].url + "privacy_20220106.pdf";
        	location.href = url;
        };

        this.Div00_imgViewer_00_onclick = function(obj,e)
        {

        };

        this.Div_label_privacy_20230117_00_onclick = function(obj,e)
        {
        	//var url = nexacro.getEnvironment().services["svcBaseUrl"].url + "privacy_20230117.pdf";
        	//location.href = url;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.hp00m00_onload,this);
            this.Div00.form.Static00_00.addEventHandler("onclick",this.Div00_Static00_00_onclick,this);
            this.Div00.form.label_01.addEventHandler("onclick",this.Div_div_00_label_00_onclick,this);
            this.Div00.form.label_02.addEventHandler("onclick",this.Div_label_00_00_onclick,this);
            this.Div00.form.label_03.addEventHandler("onclick",this.Div_label_00_00_onclick,this);
            this.Div00.form.label_04.addEventHandler("onclick",this.Div_label_00_00_onclick,this);
            this.Div00.form.label_05.addEventHandler("onclick",this.Div_label_00_00_onclick,this);
            this.Div00.form.label_06.addEventHandler("onclick",this.Div_label_00_00_onclick,this);
            this.Div00.form.label_07.addEventHandler("onclick",this.Div_label_00_00_onclick,this);
            this.Div00.form.label_10.addEventHandler("onclick",this.Div_div_01_label_00_01_00_onclick,this);
            this.Div00.form.label_13.addEventHandler("onclick",this.Div_div_01_label_00_00_00_00_onclick,this);
            this.Div00.form.label_14.addEventHandler("onclick",this.Div_label_00_00_onclick,this);
            this.Div00.form.label_15.addEventHandler("onclick",this.Div_label_00_00_onclick,this);
            this.Div00.form.label_16.addEventHandler("onclick",this.Div_label_00_00_onclick,this);
            this.Div00.form.label_17.addEventHandler("onclick",this.Div_label_00_00_onclick,this);
            this.Div00.form.label_18.addEventHandler("onclick",this.Div_label_00_00_onclick,this);
            this.Div00.form.label_19.addEventHandler("onclick",this.Div_label_00_00_onclick,this);
            this.Div00.form.label_20.addEventHandler("onclick",this.Div_label_00_00_onclick,this);
            this.Div00.form.label_21.addEventHandler("onclick",this.Div_label_00_00_onclick,this);
            this.Div00.form.label_22.addEventHandler("onclick",this.Div_label_00_00_onclick,this);
            this.Div00.form.label_33.addEventHandler("onclick",this.Div00_div_01_00_label_00_00_00_01_00_onclick,this);
            this.Div00.form.label_35.addEventHandler("onclick",this.Div_div_01_label_00_01_00_onclick,this);
            this.Div00.form.label_36.addEventHandler("onclick",this.Div_div_01_label_00_00_00_00_onclick,this);
            this.Div00.form.label_37.addEventHandler("onclick",this.Div_div_01_label_00_00_00_00_onclick,this);
            this.Div00.form.label_38.addEventHandler("onclick",this.Div_div_01_label_00_00_00_00_onclick,this);
            this.Div00.form.label_39.addEventHandler("onclick",this.Div_label_00_00_onclick,this);
            this.Div00.form.label_40.addEventHandler("onclick",this.Div_label_00_00_onclick,this);
            this.Div00.form.label_41.addEventHandler("onclick",this.Div_label_00_00_onclick,this);
            this.Div00.form.label_42.addEventHandler("onclick",this.Div_label_00_00_onclick,this);
            this.Div00.form.label_46.addEventHandler("onclick",this.Div_div_01_label_00_01_00_onclick,this);
            this.Div00.form.label_47.addEventHandler("onclick",this.Div00_div_01_00_00_label_00_00_onclick,this);
            this.Div00.form.label_48.addEventHandler("onclick",this.Div00_div_01_00_00_label_01_onclick,this);
            this.Div00.form.label_52.addEventHandler("onclick",this.Div00_div_01_00_00_label_01_00_onclick,this);
            this.Div00.form.label_53.addEventHandler("onclick",this.Div_div_01_label_00_00_00_00_onclick,this);
            this.Div00.form.label_57.addEventHandler("onclick",this.Div_div_01_label_00_00_00_00_onclick,this);
            this.Div00.form.label_58.addEventHandler("onclick",this.Div_label_00_00_onclick,this);
            this.Div00.form.label_59.addEventHandler("onclick",this.Div_label_00_00_onclick,this);
            this.Div00.form.label_60.addEventHandler("onclick",this.Div_label_00_00_onclick,this);
            this.Div00.form.label_privacy_20210120.addEventHandler("onclick",this.Div_label_privacy_20210120_onclick,this);
            this.Div00.form.label_privacy_20210527.addEventHandler("onclick",this.Div00_label_privacy_20210527_onclick,this);
            this.Div00.form.label_privacy_20210625.addEventHandler("onclick",this.Div00_label_privacy_20210625_onclick,this);
            this.Div00.form.label_privacy_20210804.addEventHandler("onclick",this.Div00_label_privacy_20210804_onclick,this);
            this.Div00.form.label_privacy_20230117.addEventHandler("onclick",this.Div00_label_privacy_20210804_onclick,this);
            this.Div00.form.label_privacy_20230117_00.addEventHandler("onclick",this.Div_label_privacy_20230117_00_onclick,this);
        };

        this.loadIncludeScript("hp00m00_copy1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
