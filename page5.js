function postToGoogle() {
				var modeoftravel;
				var rd1 = document.getElementById("rd1");
			    var rd2 = document.getElementById("rd2");
                var rd3 = document.getElementById("rd3");
                var rd4 = document.getElementById("rd4");
                var rd5 = document.getElementById("rd5");
			    var rd6 = document.getElementById("rd6");
                var rd7 = document.getElementById("rd7");
                var rd8 = document.getElementById("rd8");
                var rd9 = document.getElementById("rd9");
			    var rd10 = document.getElementById("rd10");
                var rd11 = document.getElementById("rd11");
                var rd12 = document.getElementById("rd12");
                var rd13 = document.getElementById("rd13");

                var people1 = $("#people1").val();
                var people2 = $('#people2').val();
                var people3 = $('#people3').val();
                var gender = $('#gender').val();
                var age = $('#age').val();
                var degree = $('#degree').val();
                var marital = $('#marital').val();
                var fstatus = $('#fstatus').val();
                var mstatus = $('#mstatus').val();
                var income = $('#income').val();
                var cars = $('#cars').val();
                var bikes = $('#bikes').val();
                var bicycles = $('#bicycles').val();
                var auto = $('#auto').val();
                var license = $('#license').val();
                // alert("Manoj yahaan pe");
                if(rd1.checked==true)
                {
                    modeoftravel = document.getElementById("rd1").value;
                }
                else if(rd2.checked==true)
                {
                    modeoftravel = document.getElementById("rd2").value;
                }
                else if(rd3.checked==true)
                {
                    modeoftravel = document.getElementById("rd3").value;
                }
                else if(rd4.checked==true)
                {
                    modeoftravel = document.getElementById("rd4").value;
                }
                else if(rd5.checked==true)
                {
                    modeoftravel = document.getElementById("rd5").value;
                }
                else if(rd6.checked==true)
                {
                    modeoftravel = document.getElementById("rd6").value;
                }
                else if(rd7.checked==true)
                {
                    modeoftravel = document.getElementById("rd7").value;
                }
                else if(rd8.checked==true)
                {
                    modeoftravel = document.getElementById("rd8").value;
                }
                else if(rd9.checked==true)
                {
                    modeoftravel = document.getElementById("rd9").value;
                }
                else if(rd10.checked==true)
                {
                    modeoftravel = document.getElementById("rd10").value;
                }
                else if(rd11.checked==true)
                {
                    modeoftravel = document.getElementById("rd11").value;
                }
                else if(rd12.checked==true)
                {
                    modeoftravel = document.getElementById("rd12").value;
                }
                else if(rd13.checked==true)
                {
                    // modeoftravel = document.getElementById("rd13").value;
                    modeoftravel = "other : " + $('#other').val();
                }
                else {
                	alert("Please select one");
                	return false;
                }
                var timetaken = $('#TimeTaken').val();

                $.ajax(
                {
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSczQLKiHAfAxfGb0A09jq8UaB9jah-yZM19awgNTyIEL59d7A/formResponse?",
          data: {"entry.242315631": modeoftravel, "entry.569540021": timetaken},
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

                $.ajax(
                {
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSes3YAtHUFN7X4R1-y0G1x9F2IL9zaUAlPLP_WtzeMgEetEEg/formResponse?",
          data: {"entry.541068286": people1, "entry.1119844491": people2, "entry.1625301976": people3, "entry.1006936033": gender, "entry.807107198": age, "entry.1687065810": degree, "entry.801799989": marital, "entry.405597528": fstatus, "entry.719070802": mstatus, "entry.7736696": income, "entry.1969095261": cars, "entry.1748076933": bikes, "entry.1076080521": bicycles, "entry.1471013927": auto, "entry.116819393": license},
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
              window.open("page4.html", "_top");
            }
                });
                // alert(timetaken);
                return false;
}