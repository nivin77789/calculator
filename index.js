var num = [];
var number = 0;
var num2 = [];
var number2 = 0;
var flag = false;
$(".mode2").hide();
$(".display2").hide();
$(".mode1").click(function () {
  $(".mode1").hide();
  $(".mode2").show();
  $(".sub").removeClass("sub").addClass("sub2");
  $(".display").removeClass("display").addClass("display2");
});
$(".mode2").click(function () {
  $(".mode2").hide();
  $(".mode1").show();

  $(".sub2").removeClass("sub2").addClass("sub");
  $(".display2").removeClass("display2").addClass("display");
});

$(".left button").click(function (e) {
  if (!flag) {
    num.push(e.target.value);
    number = num.join("");
    $("input").attr("placeholder", parseInt(number));
  } else {
    num2.push(e.target.value);
    number2 = num2.join("");
    $("input").attr("placeholder", parseInt(number) + op + parseInt(number2));
  }
});
$(".equal").click(function () {
  switch (op) {
    case "/":
      var result = parseInt(number) / parseInt(number2);
      $("input").attr("placeholder", result);
      break;
    case "x":
      var result = parseInt(number) * parseInt(number2);
      $("input").attr("placeholder", result);
      break;
    case "+":
      var result = parseInt(number) + parseInt(number2);
      $("input").attr("placeholder", result);
      break;
    case "-":
      var result = parseInt(number) - parseInt(number2);
      $("input").attr("placeholder", result);
      break;
    default:
      $("input").attr("placeholder", "error");
  }
});
$(".right button").click(function (e) {
  $("input").attr("placeholder", number + e.target.value);
  op = e.target.value;
  flag = true;
});
$(".ac").click(function (e) {
  num = [];
  num2 = [];
  number = 0;
  number2 = 0;
  flag = false;
  $("input").attr("placeholder", number);
});
