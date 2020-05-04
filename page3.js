function postToGoogle1() {
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


        
                $.ajax(
                {
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSfwDUXbJamNzb3ZdVwjnfmZMjWIEQterjAlf0tz729FRSYkSA/formResponse?",
          data: {"entry.589313327": Act1Ep1, "entry.1081643634": Act1h1, "entry.1477727669": Act1m1, 
                    "entry.140155279": Act1Ep2, "entry.2041717756": Act1h2, "entry.1818125165": Act1m2,
                    "entry.1130371394": Act1Ep3, "entry.878752677": Act1h3, "entry.473428879": Act1m3,
                "entry.935051417": Act1Ep4, "entry.1616447866": Act1h4, "entry.627279967": Act1m4,
                "entry.488697699": Act1Ep5, "entry.844636471": Act1h5, "entry.1998086478": Act1m5,
            "entry.240403323": Act1Ep6, "entry.1697648661": Act1h6, "entry.567537596": Act1m6,    
            "entry.432065934": Act1Ep7, "entry.432065934": Act1h7, "entry.432065934": Act1m7,
            "entry.1574364174": Act1Ep8, "entry.1245086646": Act1h8, "entry.51643673": Act1m8},
                    type: "POST",
                    dataType: "xml",
                    success: function(d)
          {
          },
          error: function(x, y, z)
            {
            	// alert("Data Colleced!");
              // $("data Colleced!").show();
              $('#div1').hide();
              // window.open("contact.html", "_top");
            }
                });
                return false;
}

function postToGoogle2()
	{
	// alert("calling postToGoogle2");
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
                $.ajax({
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSe027RAc-YIo4sjEyRv95J6Lf9I6oEx0yKOvm1dSgjL31Ew0Q/formResponse?",
          data: {"entry.828826895": Act2Ep1, "entry.1893407105": Act2h1, "entry.2031946838": Act2m1,
              "entry.785827973": Act2Ep2, "entry.1851796168": Act2h2, "entry.751037663": Act2m2, "entry.1486116038": Act2Ep3, "entry.1095684285": Act2h3, "entry.67377549": Act2m3},
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
	// alert("caaling postToGoogle3");
	// $('#div3').hide();

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
	
	$.ajax({
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSepfJRUW5sqqxBUjP-C3L5k1UKQbO_wfa91uFH5gqheODOsFg/formResponse?",
          data: {"entry.1240983519": Act3Ep1, "entry.383180612": Act3h1, "entry.1544578175": Act3m1, 
                    "entry.2131394848": Act3Ep2, "entry.1816358712": Act3h2, "entry.2117956502": Act3m2,
                    "entry.763708774": Act3Ep3, "entry.915345378": Act3h3, "entry.791929017": Act3m3,
                "entry.1210355126": Act3Ep4, "entry.485366456": Act3h4, "entry.1968149439": Act3m4,
                "entry.2145866749": Act3Ep5, "entry.2039028117": Act3h5, "entry.1964228224": Act3m5,
            "entry.1462921509": Act3Ep6, "entry.1864361906": Act3h6, "entry.337755629": Act3m6,    
            "entry.504852015": Act3Ep7, "entry.736994120": Act3h7, "entry.1808288161": Act3m7,
            "entry.252017369": Act3Ep8, "entry.529850838": Act3h8, "entry.1574401359": Act3m8,
            "entry.1242205847": Act3Ep9, "entry.244738212": Act3h9, "entry.1410458934": Act3m9,
            "entry.250939805": Act3Ep10, "entry.839624857": Act3h10, "entry.1828980499": Act3m10,
            "entry.1582245921": Act3Ep11, "entry.1596036032": Act3h11, "entry.1071599023": Act3m11},
                    type: "POST",
                    dataType: "xml",
                    success: function(d)
          {
          },
          error: function(x, y, z)
            {
              // $("data Colleced!").show();
              // $('#div3').hide();
              window.open("page5.html", "_top");
            }
                });




        return false;
}