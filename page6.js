      function postToGoogle() {
    // alert("Hii Manoj");
                var agreement1 = $("#agreement1").val();
                var agreement2 = $("#agreement2").val();
                var agreement3 = $("#agreement3").val();
                var agreement4 = $("#agreement4").val();
                var agreement5 = $("#agreement5").val();
                var agreement6 = $("#agreement6").val();
                var agreement7 = $("#agreement7").val();
                var agreement8 = $("#agreement8").val();
                var agreement9 = $("#agreement9").val();
                var agreement10 = $("#agreement10").val();


                //for part 2
                var satis1 = $("#satis1").val();
                var satis2 = $("#satis2").val();
                var satis3 = $("#satis3").val();
                var satis4 = $("#satis4").val();
                var satis5 = $("#satis5").val();
                var satis6 = $("#satis6").val();
                var satis7 = $("#satis7").val();
                var satis8 = $("#satis8").val();


                //for part 3
                var agc1 = $("#agc1").val();
                var agc2 = $("#agc2").val();
                var agc3 = $("#agc3").val();
                var agc4 = $("#agc4").val();
                var agc5 = $("#agc5").val();
                var agc6 = $("#agc6").val();
                $.ajax(
                {
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSdF2b36-JbNJQMRKHZBqxuslc-lyXSGOFGpKIiNdF6Uk_T9zw/formResponse?",
          data: {"entry.1532481451": agreement1,
          "entry.1143870198": agreement2,
          "entry.1040552983": agreement3,
          "entry.990113328": agreement4,
          "entry.1722948819": agreement5,
          "entry.576224580": agreement6,
          "entry.1621670890": agreement7,
          "entry.1682321098": agreement8,
          "entry.673653272": agreement9,
          "entry.2144748132": agreement10},
                    type: "POST",
                    dataType: "xml",
                    success: function(d)
          {
          },
          error: function(x, y, z)
            {
                // alert("Data Colleced2!!");
              // $("data Colleced!").show();
              // $('#div3').hide();
              // window.open("page5.html", "_top");
            }
                });
                //part 2 start
                $.ajax(
                {
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSfjdgyIzKk-2eIp89EsQfaZ9vncmlJNdlgRdcvijkol4JJfeQ/formResponse?",
          data: {"entry.932147170": satis1,
          "entry.671055647": satis2,
          "entry.1494717137": satis3,
          "entry.58427480": satis4,
          "entry.1233846028": satis5,
          "entry.2024759939": satis6,
          "entry.1340953570": satis7,
          "entry.405158814": satis8},
                    type: "POST",
                    dataType: "xml",
                    success: function(d)
          {
          },
          error: function(x, y, z)
            {
                // alert("Data Colleced2!!");
              // $("data Colleced!").show();
              // $('#div3').hide();
              // window.open("thankyou.html", "_top");
            }
                });


            $.ajax(
            {
                url: "https://docs.google.com/forms/d/e/1FAIpQLSfMUKqeslD9OtKQUGgXcebxwS5sBEdoNm71nACmCu19Uz7Qkw/formResponse?",
          data: {"entry.1100809176": agc1,
          "entry.54508869": agc2,
          "entry.595978942": agc3,
          "entry.228733093": agc4,
          "entry.832387813": agc5,
          "entry.2137162753": agc6},
                    type: "POST",
                    dataType: "xml",
                    success: function(d)
          {
          },
          error: function(x, y, z)
            {
                alert("Data Colleced2!!");
              // $("data Colleced!").show();
              // $('#div3').hide();
              window.open("thankyou.html", "_top");
            }
                });
                // alert(timetaken);
                return false;
}