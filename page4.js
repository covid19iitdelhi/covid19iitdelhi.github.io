function postToGoogle1() {
	// alert("calling postToGoogle1");
	        	var Act1Ep1 = $("#Act1Ep1").val();
                var Act1h1 = $("#Act1h1").val();
                var Act1m1 = $("#Act1m1").val();

                var Act1Ep2 = $("#Act1Ep2").val();
                var Act1h2 = $("#Act1h2").val();
                var Act1m2 = $("#Act1m2").val();

                var Act1Ep3 = $("#Act1Ep3").val();
                var Act1h3 = $("#Act1h3").val();
                var Act1m3 = $("#Act1m3").val();

                var Act1Ep4 = $("#Act1Ep4").val();
                var Act1h4 = $("#Act1h4").val();
                var Act1m4 = $("#Act1m4").val();

                var Act1Ep5 = $("#Act1Ep5").val();
                var Act1h5 = $("#Act1h5").val();
                var Act1m5 = $("#Act1m5").val();

                var Act1Ep6 = $("#Act1Ep6").val();
                var Act1h6 = $("#Act1h6").val();
                var Act1m6 = $("#Act1m6").val();

                var Act1Ep7 = $("#Act1Ep7").val();
                var Act1h7 = $("#Act1h7").val();
                var Act1m7 = $("#Act1m7").val();

                var Act1Ep8 = $("#Act1Ep8").val();
                var Act1h8 = $("#Act1h8").val();
                var Act1m8 = $("#Act1m8").val(); 

                var Act1Ep9 = $("#Act1Ep9").val();
                var Act1h9 = $("#Act1h9").val();
                var Act1m9 = $("#Act1m9").val(); 
        


        		var Act21Ep1 = $("#Act21Ep1").val();
                var Act21h1 = $("#Act21h1").val();
                var Act21m1 = $("#Act21m1").val();

                var Act21Ep2 = $("#Act21Ep2").val();
                var Act21h2 = $("#Act21h2").val();
                var Act21m2 = $("#Act21m2").val();

                var Act21Ep3 = $("#Act21Ep3").val();
                var Act21h3 = $("#Act21h3").val();
                var Act21m3 = $("#Act21m3").val();

                var Act21Ep4 = $("#Act21Ep4").val();
                var Act21h4 = $("#Act21h4").val();
                var Act21m4 = $("#Act21m4").val();

                var Act21Ep5 = $("#Act21Ep5").val();
                var Act21h5 = $("#Act21h5").val();
                var Act21m5 = $("#Act21m5").val();

                var Act21Ep6 = $("#Act21Ep6").val();
                var Act21h6 = $("#Act21h6").val();
                var Act21m6 = $("#Act21m6").val();

                var Act21Ep7 = $("#Act21Ep7").val();
                var Act21h7 = $("#Act21h7").val();
                var Act21m7 = $("#Act21m7").val();

                var Act21Ep8 = $("#Act21Ep8").val();
                var Act21h8 = $("#Act21h8").val();
                var Act21m8 = $("#Act21m8").val(); 

                var Act21Ep9 = $("#Act21Ep9").val();
                var Act21h9 = $("#Act21h9").val();
                var Act21m9 = $("#Act21m9").val(); 
                $.ajax(
                {
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSd6tmq0z-hWAwjEh5_jd5P39qyXCkQqP1UtEjSDGc34V5adng/formResponse?",
          data: {"entry.530719477": Act1Ep1, "entry.1180141859": Act1h1, "entry.1865469505": Act1m1, 
                    "entry.540530303": Act1Ep2, "entry.782999976": Act1h2, "entry.688904194": Act1m2,
                    "entry.1448759793": Act1Ep3, "entry.1100740981": Act1h3, "entry.730052891": Act1m3,
                "entry.307128159": Act1Ep4, "entry.8011263": Act1h4, "entry.380331738": Act1m4,
                "entry.1430387798": Act1Ep5, "entry.725028245": Act1h5, "entry.123476487": Act1m5,
            "entry.1214836756": Act1Ep6, "entry.1500697122": Act1h6, "entry.2013277655": Act1m6,    
            "entry.1284334322": Act1Ep7, "entry.793798244": Act1h7, "entry.1373353751": Act1m7,
            "entry.1853048902": Act1Ep8, "entry.396725026": Act1h8, "entry.1545072923": Act1m8,
            "entry.762515465": Act1Ep9, "entry.1033982707": Act1h9, "entry.548174633": Act1m9},
                    type: "POST",
                    dataType: "xml",
                    success: function(d)
          {
          },
          error: function(x, y, z)
            {
            	// alert("Data Colleced!!");
              // $("data Colleced!").show();
              // $('#div1').hide();
              // window.open("contact.html", "_top");
            }
                });

                $.ajax(
                {
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSeAsIQqltmxUlgaWcLxw3KUqpQAGSQCvFHf5lye5HYEnbt_dw/formResponse?",
          data: {"entry.147556037": Act21Ep1, "entry.1715602046": Act21h1, "entry.780867114": Act21m1, 
                    "entry.1667755638": Act21Ep2, "entry.451472558": Act21h2, "entry.896043807": Act21m2,
                    "entry.2123884248": Act21Ep3, "entry.648555860": Act21h3, "entry.361406416": Act21m3,
                "entry.599175422": Act21Ep4, "entry.1849050625": Act21h4, "entry.936450097": Act21m4,
                "entry.778556820": Act21Ep5, "entry.130239150": Act21h5, "entry.1528761479": Act21m5,
            "entry.1848191080": Act21Ep6, "entry.161637632": Act21h6, "entry.814800819": Act21m6,    
            "entry.1262103601": Act21Ep7, "entry.1099303454": Act21h7, "entry.1880887081": Act21m7,
            "entry.276255069": Act21Ep8, "entry.118399181": Act21h8, "entry.1278132091": Act21m8,
            "entry.774671822": Act21Ep9, "entry.870581276": Act21h9, "entry.155071844": Act21m9},
                    type: "POST",
                    dataType: "xml",
                    success: function(d)
          {
          },
          error: function(x, y, z)
            {
            	// alert("Data Colleced2!!");
              // $("data Colleced!").show();
              $('#div1').hide();
              // window.open("contact.html", "_top");
            }
                });
                return false;
}

function postToGoogle2() {

	// $('#div2').hide();
	// $("data Colleced!").show();

    
	 			var Act2Ep1 = $("#Act2Ep1").val();
                var Act2h1 = $("#Act2h1").val();
                var Act2m1 = $("#Act2m1").val();

                var Act2Ep2 = $("#Act2Ep2").val();
                var Act2h2 = $("#Act2h2").val();
                var Act2m2 = $("#Act2m2").val();

                var Act2Ep3 = $("#Act2Ep3").val();
                var Act2h3 = $("#Act2h3").val();
                var Act2m3 = $("#Act2m3").val();

 // alert(Act2Ep3);

                var Act22Ep1 = $("#Act22Ep1").val();
                var Act22h1 = $("#Act22h1").val();
                var Act22m1 = $("#Act22m1").val();
	// alert(Act22Ep1);
                var Act22Ep2 = $("#Act22Ep2").val();
                var Act22h2 = $("#Act22h2").val();
                var Act22m2 = $("#Act22m2").val();

                var Act22Ep3 = $("#Act22Ep3").val();
                var Act22h3 = $("#Act22h3").val();
                var Act22m3 = $("#Act22m3").val();
                $.ajax({
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSdqPZZ-Sd8hTS7dIwuiHbpV3Hv563OB9F3uDhgTOkH7ki955A/formResponse?",
          data: {"entry.227888929": Act2Ep1, "entry.85095159": Act2h1, "entry.883754928": Act2m1,
              "entry.1819370409": Act2Ep2, "entry.473248355": Act2h2, "entry.594621583": Act2m2, "entry.49605570": Act2Ep3, "entry.554889590": Act2h3, "entry.1016751622": Act2m3},
                    type: "POST",
                    dataType: "xml",
                    success: function(d)
          {
          },
          error: function(x, y, z)
            {
    //           $('#div2').hide();
    //               // $('#div2').hide();
    // $('#div1').hide();
              // window.open("page4.html", "_top");
            }
                });


                $.ajax({
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSfgEFCH1G1m3J1Gag5W62vTFLf7C27BPQ0dNQDYsOQg6M59aw/formResponse?",
          data: {"entry.1481344078": Act22Ep1, "entry.1075768324": Act22h1, "entry.1953986236": Act22m1,
              "entry.1750352312": Act22Ep2, "entry.1424478939": Act22h2, "entry.15972643": Act22m2, "entry.1404284420": Act22Ep3, "entry.1565340545": Act22h3, "entry.115133119": Act22m3},
                    type: "POST",
                    dataType: "xml",
                    success: function(d)
          {
          },
          error: function(x, y, z)
            {
              // $("data Colleced!").show();
              $('#div2').hide();
                  // $('#div2').hide();
    $('#div1').hide();
              // window.open("page4.html", "_top");
            }
                });
                return false;
}

function postToGoogle3() {
	
 var Act3Ep1 = $("#Act3Ep1").val();
                var Act3h1 = $("#Act3h1").val();
                var Act3m1 = $("#Act3m1").val();

                var Act3Ep2 = $("#Act3Ep2").val();
                var Act3h2 = $("#Act3h2").val();
                var Act3m2 = $("#Act3m2").val();

                var Act3Ep3 = $("#Act3Ep3").val();
                var Act3h3 = $("#Act3h3").val();
                var Act3m3 = $("#Act3m3").val();

                var Act3Ep4 = $("#Act3Ep4").val();
                var Act3h4 = $("#Act3h4").val();
                var Act3m4 = $("#Act3m4").val();

                var Act3Ep5 = $("#Act3Ep5").val();
                var Act3h5 = $("#Act3h5").val();
                var Act3m5 = $("#Act3m5").val();

                var Act3Ep6 = $("#Act3Ep6").val();
                var Act3h6 = $("#Act3h6").val();
                var Act3m6 = $("#Act3m6").val();

                var Act3Ep7 = $("#Act3Ep7").val();
                var Act3h7 = $("#Act3h7").val();
                var Act3m7 = $("#Act3m7").val();

                var Act3Ep8 = $("#Act3Ep8").val();
                var Act3h8 = $("#Act3h8").val();
                var Act3m8 = $("#Act3m8").val(); 

                var Act3Ep9 = $("#Act3Ep9").val();
                var Act3h9 = $("#Act3h9").val();
                var Act3m9 = $("#Act3m9").val(); 
        
                var Act3Ep10 = $("#Act3Ep10").val();
                var Act3h10 = $("#Act3h10").val();
                var Act3m10 = $("#Act3m10").val();

                var Act3Ep11 = $("#Act3Ep11").val();
                var Act3h11 = $("#Act3h11").val();
                var Act3m11 = $("#Act3m11").val();


        		var Act23Ep1 = $("#Act23Ep1").val();
                var Act23h1 = $("#Act23h1").val();
                var Act23m1 = $("#Act23m1").val();

                var Act23Ep2 = $("#Act23Ep2").val();
                var Act23h2 = $("#Act23h2").val();
                var Act23m2 = $("#Act23m2").val();

                var Act23Ep3 = $("#Act23Ep3").val();
                var Act23h3 = $("#Act23h3").val();
                var Act23m3 = $("#Act23m3").val();

                var Act23Ep4 = $("#Act23Ep4").val();
                var Act23h4 = $("#Act23h4").val();
                var Act23m4 = $("#Act23m4").val();

                var Act23Ep5 = $("#Act23Ep5").val();
                var Act23h5 = $("#Act23h5").val();
                var Act23m5 = $("#Act23m5").val();

                var Act23Ep6 = $("#Act23Ep6").val();
                var Act23h6 = $("#Act23h6").val();
                var Act23m6 = $("#Act23m6").val();

                var Act23Ep7 = $("#Act23Ep7").val();
                var Act23h7 = $("#Act23h7").val();
                var Act23m7 = $("#Act23m7").val();

                var Act23Ep8 = $("#Act23Ep8").val();
                var Act23h8 = $("#Act23h8").val();
                var Act23m8 = $("#Act23m8").val(); 

                var Act23Ep9 = $("#Act23Ep9").val();
                var Act23h9 = $("#Act23h9").val();
                var Act23m9 = $("#Act23m9").val(); 

                var Act23Ep10 = $("#Act23Ep10").val();
                var Act23h10 = $("#Act23h10").val();
                var Act23m10 = $("#Act23m10").val(); 

                var Act23Ep11 = $("#Act23Ep11").val();
                var Act23h11 = $("#Act23h11").val();
                var Act23m11 = $("#Act23m11").val(); 

                // alert("calling postToGoogle1"+Act3Ep1);
                $.ajax(
                {
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSf9XJv1eQdM7BskB1SEjkWQheccv7H4PJDMVlKM8LchrLKwyA/formResponse?",
          data: {"entry.1164569302": Act3Ep1, "entry.713484502": Act3h1, "entry.1168877449": Act3m1, 
                    "entry.1187834280": Act3Ep2, "entry.2138228039": Act3h2, "entry.1854196137": Act3m2,
                    "entry.1858145255": Act3Ep3, "entry.764722107": Act3h3, "entry.251909204": Act3m3,
                "entry.757931339": Act3Ep4, "entry.1515361847": Act3h4, "entry.1157407236": Act3m4,
                "entry.1176198745": Act3Ep5, "entry.444773425": Act3h5, "entry.444773425": Act3m5,
            "entry.1288366842": Act3Ep6, "entry.2088997871": Act3h6, "entry.304638759": Act3m6,    
            "entry.1452307111": Act3Ep7, "entry.2114084202": Act3h7, "entry.1490072629": Act3m7,
            "entry.845345644": Act3Ep8, "entry.765792181": Act3h8, "entry.1307037004": Act3m8,
            "entry.1188143600": Act3Ep9, "entry.979341870": Act3h9, "entry.467595814": Act3m9, "entry.1464580811": Act3Ep10, "entry.1503623824": Act3h10, "entry.965630691": Act3m10, "entry.635755871": Act3Ep11, "entry.1215070622": Act3h11, "entry.1732944635": Act3m11},
                    type: "POST",
                    dataType: "xml",
                    success: function(d)
          {
          },
          error: function(x, y, z)
            {
            	// alert("Data Colleced!!");
              // $("data Colleced!").show();
              // $('#div3').hide();
              // window.open("contact.html", "_top");
            }
                });

                $.ajax(
                {
                    url: "https://docs.google.com/forms/d/e/1FAIpQLScs2fu0MlU6YcW3DGmuymmkRh9tziXZVtm0Kb_IRA0fxdq5nQ/formResponse?",
          data: {"entry.366673959": Act23Ep1, "entry.901580358": Act23h1, "entry.678142005": Act23m1, 
                    "entry.165163278": Act23Ep2, "entry.1946419338": Act23h2, "entry.914973689": Act23m2,
                    "entry.2103266026": Act23Ep3, "entry.774628323": Act23h3, "entry.83284586": Act23m3,
                "entry.1749388477": Act23Ep4, "entry.1891748103": Act23h4, "entry.428602786": Act23m4,
                "entry.753556514": Act23Ep5, "entry.1722386035": Act23h5, "entry.952165486": Act23m5,
            "entry.790800098": Act23Ep6, "entry.448471714": Act23h6, "entry.219193018": Act23m6,    
            "entry.2105465134": Act23Ep7, "entry.1179323675": Act23h7, "entry.939302915": Act23m7,
            "entry.76589685": Act23Ep8, "entry.1099781040": Act23h8, "entry.76647455": Act23m8,
            "entry.1999627635": Act23Ep9, "entry.481856820": Act23h9, "entry.1522255747": Act23m9, "entry.1272692948": Act23Ep10, "entry.1206158821": Act23h10, "entry.27283780": Act23m10, "entry.1956951600": Act23Ep11, "entry.1956951600": Act23h11, "entry.218342097": Act23m11},
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
              window.open("page5.html", "_top");
            }
                });
                return false;
}