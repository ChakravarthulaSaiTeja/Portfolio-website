$(".Password_Generator").click(function (e) {
    e.preventDefault();
    $(".aboutProject").text(
      "This can be used to generate passwords of your choice with different combinations of Uppercase ,Lowercase ,Symbols and the length of the password and it also shows the Strength of the password"
    );
    $(".projectName div").css("background", "transparent");
    $(".connect4").css("background-color", "purple");
  });
  
  $(".Counting_App").click(function (e) {
    e.preventDefault();
    $(".aboutProject").text(
      "A basic counting app usd to count from -Infinity to +Infinity with two buttons the user can either increase or decrease the value "
    );
    $(".projectName div").css("background", "transparent");
    $(".placement").css("background-color", "purple");
  });
  
  $(".BTech_Project").click(function (e) {
    e.preventDefault();
    $(".aboutProject").text(
      "With the help of Sensors we analyse the surroundings and send that information to the RaspberryPi in which the information is converted to audio Output and the User can hear the Information through wired earphones and also just with the click of the button the user can send his live location co-ordinates to the gaurdian by using the gps module attached to the Pi-board  "
    );
    $(".projectName div").css("background", "transparent");
    $(".social-site").css("background-color", "purple");
  });
  