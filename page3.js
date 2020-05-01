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
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSdWDdKfpfA_KPALSciUdjmMS7nSUjNRrWxDhtdPI8q2kxPlUg/formResponse",
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