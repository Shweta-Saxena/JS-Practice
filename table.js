function table(num) {
  for (var i = 1; i <= 10; i++) {
    let multipy = num * i;
    document.write(`${num}  * ${i}  =  ${multipy}` + `<br/>` + `<hr/>`);
  }
}
table(25);

function swapping(num1, num2) {
  num1 = num1 - num2;
  num2 = num1 + num2;
  num1 = num2 - num1;
  document.write(`num1 -> ${num1}, num2 -> ${num2}` + "<br/>" + "<hr/>");
}
swapping(-31, -20);

function license(num) {
  if (num >= 18) {
    document.write("the person is eligible for license");
    if (num >= 45) {
      document.write("you also applied for insurance");
    } else {
      document.write("you are not applied for insurance");
    }
  } else {
    document.write("the person is not eligible for license");
  }
}
license(20);


