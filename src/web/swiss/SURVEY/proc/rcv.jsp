<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" trimDirectiveWhitespaces="true" %>
<%@ page import="java.sql.*" %>
<% 
	String rcv_survey_code = request.getParameter("SURVEY_CODE");
	String rcv_userid = request.getParameter("USERID");

	String rcv_part_code = "";
	String rcv_question_code = "";
	String rcv_answer = "";

	String survey_code = request.getParameter("SURVEY_CODE");
	//out.println("survey_code="+start_date);
	if(survey_code==""||survey_code==null){
		survey_code="";
	}	
	//out.print("survey_code:["+survey_code+"]");
	
	String userid = request.getParameter("USERID");
	//out.println("userid="+userid);
	if(userid==""||userid==null){
		userid="";
	}	
	//out.print("userid:["+userid+"]");
	
	/* db connection */
	Connection conn=null;
	PreparedStatement pstmt=null;
	ResultSet rs=null;
	
    String user = "SWISS_ADM";
    String pw = "swiss2020!";
    String url = "jdbc:oracle:thin:@210.107.248.38:1521:ORACLE9";
    Class.forName("oracle.jdbc.driver.OracleDriver");
    
    conn = DriverManager.getConnection(url, user, pw);

	String sql = "";
	
//init
	sql  = " delete from TMCM_SURVEY_ANSWER where workerid='"+rcv_userid+"'";
	//out.println("<br>"+sql);

	pstmt = conn.prepareStatement(sql);
	rs = pstmt.executeQuery();	

//1-1
	rcv_part_code = "001";
	rcv_question_code = "01-1";
	rcv_answer = request.getParameter("q1_1");
	
	sql  = " insert into TMCM_SURVEY_ANSWER ";
	sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
	sql += " values ";
	sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
	//out.println("<br>"+sql);
	
	pstmt = conn.prepareStatement(sql);
	rs = pstmt.executeQuery();

//1-2
	rcv_part_code = "001";
	rcv_question_code = "01-2";
	rcv_answer = request.getParameter("q1_2");
	
	sql  = " insert into TMCM_SURVEY_ANSWER ";
	sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
	sql += " values ";
	sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
	//out.println("<br>"+sql);
	
	pstmt = conn.prepareStatement(sql);
	rs = pstmt.executeQuery();	
	
//2
	rcv_part_code = "002";
	rcv_question_code = "02";
	rcv_answer = request.getParameter("q2");
	
	sql  = " insert into TMCM_SURVEY_ANSWER ";
	sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
	sql += " values ";
	sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
	//out.println("<br>"+sql);
	
	pstmt = conn.prepareStatement(sql);
	rs = pstmt.executeQuery();	
	
	switch(rcv_answer){
		case "1":
//2-1
			rcv_part_code = "002";
			rcv_question_code = "02-1";
			rcv_answer = request.getParameter("q2_1");
			
			sql  = " insert into TMCM_SURVEY_ANSWER ";
			sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
			sql += " values ";
			sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
			//out.println("<br>"+sql);
			
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();		
			
//2-2
			rcv_part_code = "002";
			rcv_question_code = "02-2";
			rcv_answer = request.getParameter("q2_2");
			
			sql  = " insert into TMCM_SURVEY_ANSWER ";
			sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
			sql += " values ";
			sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
			//out.println("<br>"+sql);
			
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();		
			
//2-3
			rcv_part_code = "002";
			rcv_question_code = "02-3";
			rcv_answer = request.getParameter("q2_3");
			
			sql  = " insert into TMCM_SURVEY_ANSWER ";
			sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
			sql += " values ";
			sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
			//out.println("<br>"+sql);
			
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();				
			break;
		case "2":
//2-4
			rcv_part_code = "002";
			rcv_question_code = "02-4";
			rcv_answer = request.getParameter("q2_4");
			
			sql  = " insert into TMCM_SURVEY_ANSWER ";
			sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
			sql += " values ";
			sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
			//out.println("<br>"+sql);
			
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();		
			break;
	}

//3-1
	rcv_part_code = "002";
	rcv_question_code = "03-1";
	rcv_answer = request.getParameter("q3_1");
	
	sql  = " insert into TMCM_SURVEY_ANSWER ";
	sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
	sql += " values ";
	sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
	//out.println("<br>"+sql);
	
	pstmt = conn.prepareStatement(sql);
	rs = pstmt.executeQuery();	
	
	switch(rcv_answer){
		case "1":
//3-1-1
			rcv_part_code = "002";
			rcv_question_code = "03-1-1";
			rcv_answer = request.getParameter("q3_1_1");
			
			sql  = " insert into TMCM_SURVEY_ANSWER ";
			sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
			sql += " values ";
			sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
			//out.println("<br>"+sql);
			
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();		
			
//3-1-2
			rcv_part_code = "002";
			rcv_question_code = "03-1-2";
			rcv_answer = request.getParameter("q3_1_2");
			
			sql  = " insert into TMCM_SURVEY_ANSWER ";
			sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
			sql += " values ";
			sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
			//out.println("<br>"+sql);
			
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();		
			
//3-1-3
			rcv_part_code = "002";
			rcv_question_code = "03-1-3";
			rcv_answer = request.getParameter("q3_1_3");
			
			sql  = " insert into TMCM_SURVEY_ANSWER ";
			sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
			sql += " values ";
			sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
			//out.println("<br>"+sql);
			
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();
			
//3-1-4
			rcv_part_code = "002";
			rcv_question_code = "03-1-4";
			rcv_answer = request.getParameter("q3_1_4");
			
			sql  = " insert into TMCM_SURVEY_ANSWER ";
			sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
			sql += " values ";
			sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
			//out.println("<br>"+sql);
			
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();			
			break;
		case "2":
//3-1-5
			rcv_part_code = "002";
			rcv_question_code = "03-1-5";
			rcv_answer = request.getParameter("q3_1_5");
			
			sql  = " insert into TMCM_SURVEY_ANSWER ";
			sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
			sql += " values ";
			sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
			//out.println("<br>"+sql);
			
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();		
			break;
	}

//3-2
	rcv_part_code = "002";
	rcv_question_code = "03-2";
	rcv_answer = request.getParameter("q3_2");
	
	sql  = " insert into TMCM_SURVEY_ANSWER ";
	sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
	sql += " values ";
	sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
	//out.println("<br>"+sql);
	
	pstmt = conn.prepareStatement(sql);
	rs = pstmt.executeQuery();	
	
//4
	rcv_part_code = "002";
	rcv_question_code = "04";
	rcv_answer = request.getParameter("q4");
	
	sql  = " insert into TMCM_SURVEY_ANSWER ";
	sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
	sql += " values ";
	sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
	//out.println("<br>"+sql);
	
	pstmt = conn.prepareStatement(sql);
	rs = pstmt.executeQuery();	
	
	switch(rcv_answer){
		case "1":
//4-1
			rcv_part_code = "002";
			rcv_question_code = "04-1";
			rcv_answer = request.getParameter("q4_1");
			
			sql  = " insert into TMCM_SURVEY_ANSWER ";
			sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
			sql += " values ";
			sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
			//out.println("<br>"+sql);
			
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();		
			
//4-2
			rcv_part_code = "002";
			rcv_question_code = "04-2";
			rcv_answer = request.getParameter("q4_2");
			
			sql  = " insert into TMCM_SURVEY_ANSWER ";
			sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
			sql += " values ";
			sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
			//out.println("<br>"+sql);
			
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();		
			
//4-3
			rcv_part_code = "002";
			rcv_question_code = "04-3";
			rcv_answer = request.getParameter("q4_3");
			
			sql  = " insert into TMCM_SURVEY_ANSWER ";
			sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
			sql += " values ";
			sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
			//out.println("<br>"+sql);
			
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();
			
//4-4
			rcv_part_code = "002";
			rcv_question_code = "04-4";
			rcv_answer = request.getParameter("q4_4");
			
			sql  = " insert into TMCM_SURVEY_ANSWER ";
			sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
			sql += " values ";
			sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
			//out.println("<br>"+sql);
			
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();			
			
//4-5
			rcv_part_code = "002";
			rcv_question_code = "04-5";
			rcv_answer = request.getParameter("q4_5");
			
			sql  = " insert into TMCM_SURVEY_ANSWER ";
			sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
			sql += " values ";
			sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
			//out.println("<br>"+sql);
			
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();		
		
			break;
		case "2":
//4-6
			rcv_part_code = "002";
			rcv_question_code = "04-6";
			rcv_answer = request.getParameter("q4_6");
			
			sql  = " insert into TMCM_SURVEY_ANSWER ";
			sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
			sql += " values ";
			sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
			//out.println("<br>"+sql);
			
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();		
			break;
	}

//5-1
	rcv_part_code = "003";
	rcv_question_code = "05-1";
	rcv_answer = request.getParameter("q5_1");
	
	sql  = " insert into TMCM_SURVEY_ANSWER ";
	sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
	sql += " values ";
	sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
	//out.println("<br>"+sql);
	
	pstmt = conn.prepareStatement(sql);
	rs = pstmt.executeQuery();		
	
//5-2
	rcv_part_code = "003";
	rcv_question_code = "05-2";
	rcv_answer = request.getParameter("q5_2");
	
	sql  = " insert into TMCM_SURVEY_ANSWER ";
	sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
	sql += " values ";
	sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
	//out.println("<br>"+sql);
	
	pstmt = conn.prepareStatement(sql);
	rs = pstmt.executeQuery();		
	
//5-3
	rcv_part_code = "003";
	rcv_question_code = "05-3";
	rcv_answer = request.getParameter("q5_3");
	
	sql  = " insert into TMCM_SURVEY_ANSWER ";
	sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
	sql += " values ";
	sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
	//out.println("<br>"+sql);
	
	pstmt = conn.prepareStatement(sql);
	rs = pstmt.executeQuery();	
	
//6-1
	rcv_part_code = "003";
	rcv_question_code = "06-1";
	rcv_answer = request.getParameter("q6_1");
	
	sql  = " insert into TMCM_SURVEY_ANSWER ";
	sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
	sql += " values ";
	sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
	//out.println("<br>"+sql);
	
	pstmt = conn.prepareStatement(sql);
	rs = pstmt.executeQuery();		
	
//6-2
	rcv_part_code = "003";
	rcv_question_code = "06-2";
	rcv_answer = request.getParameter("q6_2");
	
	sql  = " insert into TMCM_SURVEY_ANSWER ";
	sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
	sql += " values ";
	sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
	//out.println("<br>"+sql);
	
	pstmt = conn.prepareStatement(sql);
	rs = pstmt.executeQuery();		
	
//6-3
	rcv_part_code = "003";
	rcv_question_code = "06-3";
	rcv_answer = request.getParameter("q6_3");
	
	sql  = " insert into TMCM_SURVEY_ANSWER ";
	sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
	sql += " values ";
	sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
	//out.println("<br>"+sql);
	
	pstmt = conn.prepareStatement(sql);
	rs = pstmt.executeQuery();		

//7-1
	rcv_part_code = "003";
	rcv_question_code = "07-1";
	rcv_answer = request.getParameter("q7_1");
	
	sql  = " insert into TMCM_SURVEY_ANSWER ";
	sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
	sql += " values ";
	sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
	//out.println("<br>"+sql);
	
	pstmt = conn.prepareStatement(sql);
	rs = pstmt.executeQuery();		
	
//7-2
	rcv_part_code = "003";
	rcv_question_code = "07-2";
	rcv_answer = request.getParameter("q7_2");
	
	sql  = " insert into TMCM_SURVEY_ANSWER ";
	sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
	sql += " values ";
	sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
	//out.println("<br>"+sql);
	
	pstmt = conn.prepareStatement(sql);
	rs = pstmt.executeQuery();		
	
//7-3
	rcv_part_code = "003";
	rcv_question_code = "07-3";
	rcv_answer = request.getParameter("q7_3");
	
	sql  = " insert into TMCM_SURVEY_ANSWER ";
	sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
	sql += " values ";
	sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
	//out.println("<br>"+sql);
	
	pstmt = conn.prepareStatement(sql);
	rs = pstmt.executeQuery();		
	
//8-1
	rcv_part_code = "003";
	rcv_question_code = "08-1";
	rcv_answer = request.getParameter("q8_1");
	
	sql  = " insert into TMCM_SURVEY_ANSWER ";
	sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
	sql += " values ";
	sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
	//out.println("<br>"+sql);
	
	pstmt = conn.prepareStatement(sql);
	rs = pstmt.executeQuery();		
	
//8-2
	rcv_part_code = "003";
	rcv_question_code = "08-2";
	rcv_answer = request.getParameter("q8_2");
	
	sql  = " insert into TMCM_SURVEY_ANSWER ";
	sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
	sql += " values ";
	sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
	//out.println("<br>"+sql);
	
	pstmt = conn.prepareStatement(sql);
	rs = pstmt.executeQuery();			

//9
	rcv_part_code = "004";
	rcv_question_code = "09";
	rcv_answer = request.getParameter("q9");
	
	sql  = " insert into TMCM_SURVEY_ANSWER ";
	sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
	sql += " values ";
	sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
	//out.println("<br>"+sql);
	
	pstmt = conn.prepareStatement(sql);
	rs = pstmt.executeQuery();	
	
	switch(rcv_answer){
		case "1":
//9-1
			rcv_part_code = "004";
			rcv_question_code = "09-1";
			rcv_answer = request.getParameter("q9_1");
			
			sql  = " insert into TMCM_SURVEY_ANSWER ";
			sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
			sql += " values ";
			sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
			//out.println("<br>"+sql);
			
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();		
			
//9-2
			rcv_part_code = "004";
			rcv_question_code = "09-2";
			rcv_answer = request.getParameter("q9_2");
			
			sql  = " insert into TMCM_SURVEY_ANSWER ";
			sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
			sql += " values ";
			sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
			//out.println("<br>"+sql);
			
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();		
			
//9-3
			rcv_part_code = "004";
			rcv_question_code = "09-3";
			rcv_answer = request.getParameter("q9_3");
			
			sql  = " insert into TMCM_SURVEY_ANSWER ";
			sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
			sql += " values ";
			sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
			//out.println("<br>"+sql);
			
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();				
			break;
		case "2":
//9-4
			rcv_part_code = "004";
			rcv_question_code = "09-4";
			rcv_answer = request.getParameter("q9_4");
			
			sql  = " insert into TMCM_SURVEY_ANSWER ";
			sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
			sql += " values ";
			sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
			//out.println("<br>"+sql);
			
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();		
			break;
	}
	
//10
	rcv_part_code = "004";
	rcv_question_code = "10";
	rcv_answer = request.getParameter("q10");
	
	sql  = " insert into TMCM_SURVEY_ANSWER ";
	sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
	sql += " values ";
	sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
	//out.println("<br>"+sql);
	
	pstmt = conn.prepareStatement(sql);
	rs = pstmt.executeQuery();	
	
	switch(rcv_answer){
		case "1":
//10-1
			rcv_part_code = "004";
			rcv_question_code = "10-1";
			rcv_answer = request.getParameter("q10_1");
			
			sql  = " insert into TMCM_SURVEY_ANSWER ";
			sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
			sql += " values ";
			sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
			//out.println("<br>"+sql);
			
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();		
			
//10-2
			rcv_part_code = "004";
			rcv_question_code = "10-2";
			rcv_answer = request.getParameter("q10_2");
			
			sql  = " insert into TMCM_SURVEY_ANSWER ";
			sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
			sql += " values ";
			sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
			//out.println("<br>"+sql);
			
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();		
			
//10-3
			rcv_part_code = "004";
			rcv_question_code = "10-3";
			rcv_answer = request.getParameter("q10_3");
			
			sql  = " insert into TMCM_SURVEY_ANSWER ";
			sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
			sql += " values ";
			sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
			//out.println("<br>"+sql);
			
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();				
			break;
		case "2":
//10-4
			rcv_part_code = "004";
			rcv_question_code = "10-4";
			rcv_answer = request.getParameter("q10_4");
			
			sql  = " insert into TMCM_SURVEY_ANSWER ";
			sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
			sql += " values ";
			sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
			//out.println("<br>"+sql);
			
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();		
			break;
	}
	
//11
	rcv_part_code = "004";
	rcv_question_code = "11";
	rcv_answer = request.getParameter("q11");
	
	sql  = " insert into TMCM_SURVEY_ANSWER ";
	sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
	sql += " values ";
	sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
	//out.println("<br>"+sql);
	
	pstmt = conn.prepareStatement(sql);
	rs = pstmt.executeQuery();	
	
	switch(rcv_answer){
		case "1":
//11-1
			rcv_part_code = "004";
			rcv_question_code = "11-1";
			rcv_answer = request.getParameter("q11_1");
			
			sql  = " insert into TMCM_SURVEY_ANSWER ";
			sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
			sql += " values ";
			sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
			//out.println("<br>"+sql);
			
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();		
			
//11-2
			rcv_part_code = "004";
			rcv_question_code = "11-2";
			rcv_answer = request.getParameter("q11_2");
			
			sql  = " insert into TMCM_SURVEY_ANSWER ";
			sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
			sql += " values ";
			sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
			//out.println("<br>"+sql);
			
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();		
			
//11-3
			rcv_part_code = "004";
			rcv_question_code = "11-3";
			rcv_answer = request.getParameter("q11_3");
			
			sql  = " insert into TMCM_SURVEY_ANSWER ";
			sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
			sql += " values ";
			sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
			//out.println("<br>"+sql);
			
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();				
			break;
		case "2":
//11-4
			rcv_part_code = "004";
			rcv_question_code = "11-4";
			rcv_answer = request.getParameter("q11_4");
			
			sql  = " insert into TMCM_SURVEY_ANSWER ";
			sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
			sql += " values ";
			sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
			//out.println("<br>"+sql);
			
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();		
			break;
	}
		
	
//12-1
	rcv_part_code = "004";
	rcv_question_code = "12-1";
	rcv_answer = request.getParameter("q12_1");
	
	sql  = " insert into TMCM_SURVEY_ANSWER ";
	sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
	sql += " values ";
	sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
	//out.println("<br>"+sql);
	
	pstmt = conn.prepareStatement(sql);
	rs = pstmt.executeQuery();

//12-2
	rcv_part_code = "004";
	rcv_question_code = "12-2";
	rcv_answer = request.getParameter("q12_2");
	
	sql  = " insert into TMCM_SURVEY_ANSWER ";
	sql += " 	(SURVEY_CODE, PART_CODE, QUESTION_CODE, ANSWER, WORKDTHM, WORKERID ) ";
	sql += " values ";
	sql += " 	('"+rcv_survey_code+"', '"+rcv_part_code+"', '"+rcv_question_code+"', '"+rcv_answer+"', sysdate, '"+rcv_userid+"' ) ";
	//out.println("<br>"+sql);
	
	pstmt = conn.prepareStatement(sql);
	rs = pstmt.executeQuery();

out.println("success");

%>				