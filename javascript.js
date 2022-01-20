/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

function add(char) {
  var display = document.getElementById('display'); // 우리가 식을 입력할 input 태그를 불러옵니다.
  // display.value는 input 태그 안에 들어 있는 값을 의미합니다.
  display.value = display.value + char;
  // display.value += char; 로 쓸 수도 있습니다.
  // input 태그의 값 뒤에 char 문자를 추가해 주는 역할을 합니다.
}