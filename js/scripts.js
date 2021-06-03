$(function () {
  $(document).scroll(function () {
    if ($(window).scrollTop() >= $("header").offset().top) {
      $("nav").addClass("sticky");
    } else {
      $("nav").removeClass("sticky");
    }
  });

  $("body").scrollspy({
    target: ".navbar",
    offset: 80,
  });

  $(".vski").click(function () {
    alert(
      "Vski Developers site is currently under under Maintenance. Please Visit later"
    );
  });

  $(".socialplatforms").click(function () {
    alert("Sorry but currently only our instagram social platform is active");
  });

  $(".navbar-nav a, #scroll-down").bind("click", function (e) {
    var anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor.attr("href")).offset().top,
        },
        1000
      );
    e.preventDefault();
  });

  var stylesheet = $("link#theme-stylesheet");
  $("<link id='new-stylesheet' rel='stylesheet'>").insertAfter(stylesheet);
  var alternateColour = $("link#new-stylesheet");

  if ($.cookie("theme_csspath")) {
    alternateColour.attr("href", $.cookie("theme_csspath"));
  }

  $("#colour").change(function () {
    if ($(this).val() !== "") {
      var theme_csspath = "css/style." + $(this).val() + ".css";

      alternateColour.attr("href", theme_csspath);
    }

    return false;
  });
});
