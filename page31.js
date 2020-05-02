function postToGoogle2() {
 var Act2Ep1 = $("#Act2Ep1").val();
                var Act2h1 = $("#Act2h1").val();
                var Act2m1 = $("#Act2m1").val();

                var Act2Ep2 = $("#Act2Ep2").val();
                var Act2h2 = $("#Act2h2").val();
                var Act2m2 = $("#Act2m2").val();

                var Act2Ep3 = $("#Act2Ep3").val();
                var Act2h3 = $("#Act2h3").val();
                var Act2m3 = $("#Act2m3").val();



        
  alert("Hii");
                $.ajax({
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSe027RAc-YIo4sjEyRv95J6Lf9I6oEx0yKOvm1dSgjL31Ew0Q/formResponse?",
          data: {"entry.828826895": Act2Ep1, "entry.1893407105": Act2h1, "entry.2031946838": Act2m1,
              "entry.785827973": Act2Ep2, "entry.1851796168": Act2h2, "entry.751037663": Act2m2, "entry.1095684285" Act2h3, "entry.67377549": Act2m3},
                    type: "POST",
                    dataType: "xml",
                    success: function(d)
          {
          },
          error: function(x, y, z)
            {
              // $("data Colleced!").show();
              // $('#form').hide();
              window.open("page4.html", "_top");
              
            }
                });

                return false;
}
