<%-- Created by IntelliJ IDEA. User: coresight2 Date: 2021-10-11 Time: 오후 9:15
To change this template use File | Settings | File Templates. --%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="cleartype" content="on" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="robots" content="noindex, nofollow" />
    <title>취업 현황</title>
    <meta name="description" content="취업 분석" />
    <link rel="canonical" href="" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="" />
    <link rel="apple-touch-icon-precomposed" href="" />
    <link rel="shortcut icon" sizes="196x196" href="" />
    <link rel="shortcut icon" href="" />
    <meta name="msapplication-TileImage" content="" />
    <meta name="msapplication-TileColor" content="#222222" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="apple-mobile-web-app-title" content="취업 분석" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta property="og:title" content="취업 분석" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="" />
    <meta property="og:url" content="" />
    <meta name="format-detection" content="telephone=no, address=no" />
    <link
      type="text/css"
      href="css/font/NotoSansKR/NotoSansKR.css"
      rel="stylesheet"
    />
    <link type="text/css" href="css/default.css" rel="stylesheet" />
    <link type="text/css" href="css/font-awesome.min.css" rel="stylesheet" />
    <link type="text/css" href="css/job_ui.css?ver=1112" rel="stylesheet" />
    <link type="text/css" href="css/manual.css" rel="stylesheet" />
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.14.0/babel.min.js"></script> -->
    <!-- <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script> -->

    <script type="text/javascript" src="js/vue.min.js"></script>
    <script src="js/moment.js"></script>
    <script
      type="text/javascript"
      src="js/common.js?ver=1105"
    ></script>
    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/lodash@4.17.21.min.js"></script>
    <script src="highcharts/highcharts.js"></script>
    <script src="highcharts/modules/variable-pie.js"></script>
    <script src="highcharts/modules/exporting.js"></script>
    <script src="highcharts/modules/export-data.js"></script>
    <script src="highcharts/modules/accessibility.js"></script>
    <script src="highcharts/modules/annotations.js"></script>
    <script src="highcharts/modules/histogram-bellcurve.js"></script>
    <script src="highcharts/highcharts-more.src.js"></script>
    <script src="highcharts/modules/boost.js"></script>

    <script src="js/vuejs-datepicker/vuejs-datepicker.js"></script>
    <script src="js/vuejs-datepicker/ko.js"></script>

    <script type="text/javascript">
      Highcharts.setOptions({
        colors: [
          "#6ECEDA",
          "#89B1C9",
          "#C6D2BE",
          "#C7D6DB",
          "#E4A99B",
          "#F2EEE5",
          "#EBEBE3",
          "#FFD6AA",
          "#FDF2F0",
        ],
      });
      
      var apiURL = 'https://swissml.kedi.re.kr:8403/';
    </script>
  </head>
  <body></body>
</html>
