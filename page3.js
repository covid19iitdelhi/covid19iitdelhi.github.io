function postToGoogle() {
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
  
                $.ajax({
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSfwDUXbJamNzb3ZdVwjnfmZMjWIEQterjAlf0tz729FRSYkSA/formResponse?",
          data: {"entry.589313327": Act1Ep1, "entry.1081643634": Act1h1, "entry.1477727669": Act1m1, 
                    "entry.140155279": Act1Ep2, "entry.2041717756": Act1h2, "entry.1818125165": Act1m2,
                    "entry.1130371394": Act1Ep3, "entry.878752677": Act1h3, "entry.473428879": Act1m3,
                "entry.935051417": Act1Ep4, "entry.1616447866": Act1h4, "entry.627279967": Act1m4,
                "entry.488697699": Act1Ep5, "entry.844636471": Act1h5, "entry.1998086478": Act1m5,
            "entry.240403323": Act1Ep6, "entry.1697648661": Act1h6, "entry.567537596": Act1m6,    
            "entry.432065934": Act1Ep7, "entry.432065934": Act1h7, "entry.432065934": Act1m7,
            "entry.1574364174": Act1Ep8, "entry.1245086646": Act1h8, "entry.51643673": Act1m8}


             // data: {"entry.630525043": field1, "entry.707736545": field2, "entry.1786621969": field3, "entry.393785043": field4, "entry.393785043": height, "entry.1736541269":field7, "entry.1397015985":address},
                    type: "POST",
                    dataType: "xml",
                    success: function(d)
          {
          },
          error: function(x, y, z)
            {
// var result = str.link("https://www.w3schools.com");
              $("data Colleced!").show();
              $('#form').hide();
              window.open("page4.html", "_top");
            }
                });
        return false;
            }



function postToGoogle() {
                var field1 = $("#college").val();
                var field2 = $("#CollegeState").val();
                var field3 = $("#startTime").text();
                var field4 = $("#endTime").text();
                var field5 = $("#heightfeet").text();
                var field6 = $("#heightinch").text();
                var field7 = document.getElementById("placeToTravel");
                var field8 = $("#presentCity").val();
                var field9 = $("#presentDistrict").val();
                var field10 = $("#presentState").val();
                var field11 = $("#pinCode").text();


                // var field4 = $("#placeToTravel option:selected").text();
        
        if(field1 == ""){
          alert('Please Fill university details');
          document.getElementById("college").focus();
          return false;
        }
        if(field2 == ""){
          alert('Please Fill State');
          document.getElementById("CollegeState").focus();
          return false;
        }
        if(field7 == "")
        {
          alert('Please select one option');
          document.getElementById("placeToTravel").focus();
          return false;
        }
        
  
                $.ajax({
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSfwDUXbJamNzb3ZdVwjnfmZMjWIEQterjAlf0tz729FRSYkSA/formResponse",
          data: {"entry.1136718742": field1, "entry.1444621572": field2},
                    type: "POST",
                    dataType: "xml",
                    success: function(d)
          {
          },
          error: function(x, y, z)
            {

              // $('#success-msg').show();
              // $('#form').hide();
              
            }
                });
        return true;
            }

