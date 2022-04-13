let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

let li = document.querySelectorAll(".faq-text li")
for (var i = 0; i<li.length;i++){
    li[i].addEventListener("click", (e)=> {
        let clickedLi;
        if(e.target.classList.contains("question-arrow")){
            clickedLi = e.target.parentElement;
        }
        else{
            clickedLi = e.target.parentElement.parentElement;
        }
        clickedLi.classList.toggle("showAnswer");
    });
}

$(document).ready(function(){
  $(".item") .click(function(){
      $(".item").removeClass("active");
      $(".tab_item").removeClass("active");
      $(this).addClass("active");

      let tab_ = $(this).attr("data-tab");

      $("#"+ tab_).addClass("active");
  });
});

window.addEventListener('scroll', reveal);
function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}
function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}
var countDownDate = new Date("April 22, 2022 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + " Days " + hours + " Hours "
  + minutes + " Minutes " + seconds + " Seconds ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

var countdown;
        var date = new Date("mar 13, 2022 11:51:51");
        date.setDate(date.getDate());

        countdown =setInterval(function(){
            timegap(date);
        }, 1000);

        function timegap(toDate){
            var dateType = toDate;
            var rightNow = new Date();
            var diffBetween = dateType.getTime() - rightNow.getTime();

            if(diffBetween <= 0){
                clearInterval(countdown);
                document.getElementById("countdown").style.display = "none";
            }
            else{
                var seconds = Math.floor(diffBetween / 1000);
                var minutes = Math.floor(seconds / 60);
                var hours = Math.floor(minutes / 60);
                var days = Math.floor(hours / 24);

                hours %= 24;
                minutes %= 60;
                seconds %= 60;

                $("#days").text(days);
                $("#hours").text(hours);
                $("#minutes").text(minutes);
                $("#seconds").text(seconds);

            }
        }