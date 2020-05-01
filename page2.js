function postToGoogle() {
                var college = $("#college").val();
                var CollegeState = $("#CollegeState").val();
                var startTime = $("#startTime").val();
                var endTime = $("#endTime").val();
                var height = $("#heightfeet").val() + "\'" + $("#heightinch").val() + "\"";
                var weight = $("#weight").val();
                var place;// = document.getElementById("placeToTravel").value;
                var rd1 = document.getElementById("rd1");
                var rd2 = document.getElementById("rd2");
                var rd3 = document.getElementById("rd3");
                var rd4 = document.getElementById("rd4");

                if(rd1.checked==true)
                {
                    place = document.getElementById("rd1").value;
                }
                else if(rd2.checked==true)
                {
                    place = document.getElementById("rd2").value;
                }
                else if(rd3.checked==true)
                {
                    place = document.getElementById("rd3").value;
                }
                else if(rd4.checked==true)
                {
                    place = document.getElementById("rd4").value;
                }
                else {
                    alert("Please select one option!");
                    return false;
                }
                var addline1 = $("#addline1").val();
                var addline2 = $("#addline2").val();
                var presentState = $("#presentState").val();
                var pinCode = $("#pinCode").text();
        
        if(college == ""){
          alert('Please Fill university details');
          document.getElementById("college").focus();
          return false;
        }
        if(CollegeState == ""){
          alert('Please Fill State');
          document.getElementById("CollegeState").focus();
          return false;
        }
        if(place == "")
        {
          alert('Please select one option');
          document.getElementById("place").focus();
          return false;
        }
        
  
                $.ajax({
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSe_cNCavXzTl-78Ze0c3vdr30_xMKXNgAcf8JrBMYeGNVYdVA/formResponse?",
          data: {"entry.1256704265": college, "entry.591722219": CollegeState, "entry.484089851": startTime,
           "entry.1473222291": endTime, "entry.460946191": height,
           "entry.349050934": weight, "entry.349050934": place, "entry.611337322": addline1,
            "entry.274257086": addline2, "entry.1217447060": presentState, "entry.1892486679":pinCode},


             // data: {"entry.630525043": field1, "entry.707736545": field2, "entry.1786621969": field3, "entry.393785043": field4, "entry.393785043": height, "entry.1736541269":field7, "entry.1397015985":address},
                    type: "POST",
                    dataType: "xml",
                    success: function(d)
          {
          },
          error: function(x, y, z)
            {
// var result = str.link("https://www.w3schools.com");
              $("data Collected").show();
              $('#form').hide();
              window.open("page3.html", "_top");
            }
                });
        return false;
            }