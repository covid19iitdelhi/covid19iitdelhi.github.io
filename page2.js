function postToGoogle() {
                var field1 = $("#college").val();
                var field2 = $("#CollegeState").val();
                var field3 = $("#startTime").val();
                var field4 = $("#endTime").val();
                var height = $("#heightfeet").val() + "\'" + $("#heightinch").val() + "\"";
                var field6 = $("#heightinch").val();
                var weight1 = $("#weight").val();
                var field7;// = document.getElementById("placeToTravel").value;
                var rd1 = document.getElementById("rd1");
                var rd2 = document.getElementById("rd2");
                var rd3 = document.getElementById("rd3");
                var rd4 = document.getElementById("rd4");

                if(rd1.checked==true)
                {
                    field7 = document.getElementById("rd1").value;
                }
                else if(rd2.checked==true)
                {
                    field7 = document.getElementById("rd2").value;
                }
                else if(rd3.checked==true)
                {
                    field7 = document.getElementById("rd3").value;
                }
                else if(rd4.checked==true)
                {
                    field7 = document.getElementById("rd4").value;
                }
                else {
                    alert("Please select one option!");
                    return false;
                }
                var field8 = $("#addline1").val();
                var field9 = $("#addline2").val();
                var field10 = $("#presentState").val();
                var field11 = $("#pinCode").text();
                var address = field8 + ", " + field9 + ", STATE - " + field10 + ", PIN - " + field11;
                // var height = field5 + "' " + field6;
                // var field4 = $("#placeToTravel option:selected").text();
        
        // if(field1 == ""){
        //   alert('Please Fill university details');
        //   document.getElementById("college").focus();
        //   return false;
        // }
        // if(field2 == ""){
        //   alert('Please Fill State');
        //   document.getElementById("CollegeState").focus();
        //   return false;
        // }
        // if(field7 == "")
        // {
        //   alert('Please select one option');
        //   document.getElementById("placeToTravel").focus();
        //   return false;
        // }
        
  
                $.ajax({
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSdn0C__bhtufyDheFgx6BfYhvyuL6EumgD62mze5M0ZJhbZdQ/formResponse?",
          data: {"entry.630525043": field1, "entry.707736545": field2, "entry.1786621969": field3, "entry.393785043": field4, "entry.1789715397": height, "entry.1736541269": field7},


             // data: {"entry.630525043": field1, "entry.707736545": field2, "entry.1786621969": field3, "entry.393785043": field4, "entry.393785043": height, "entry.1736541269":field7, "entry.1397015985":address},
                    type: "POST",
                    dataType: "xml",
                    success: function(d)
          {
          },
          error: function(x, y, z)
            {
// var result = str.link("https://www.w3schools.com");
              $('#success-msg').show();
              $('#form').hide();
              window.open("page3.html", "_top");
            }
                });
        return false;
            }