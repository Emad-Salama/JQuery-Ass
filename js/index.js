$(document).ready(function () {
    $(".one").on("click", function () {
        $(".one").next().slideToggle(1000);
        $("h3:not('.one')").next().css("display", "none");
    });
    
    
    $(".two").on("click", function () {
        $(".two").next().slideToggle(1000);
        $("h3:not('.two')").next().css("display", "none");
    });
    
    $(".three").on("click", function () {
        $(".three").next().slideToggle(1000);
        $("h3:not('.three')").next().css("display", "none");
    });
    
    $(".four").on("click", function () {
        $(".four").next().slideToggle(1000);
        $("h3:not('.four')").next().css("display", "none");
    })


    function countDown() {
        const dateNow = new Date().getTime();
        const countDownDate = new Date("Fri Jul 26 2024 14:00:00");
        const gap = countDownDate - dateNow;
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
    
        const textDay = Math.floor((gap / day));
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);
    
        document.querySelector(".day").innerHTML = textDay;
        document.querySelector(".hours").innerHTML = textHour;
        document.querySelector(".minutes").innerHTML = textMinute;
        document.querySelector(".seconds").innerHTML = textSecond;
        
        if (textSecond < 10) {
            document.querySelector(".seconds").innerHTML = `0${textSecond}`
        }
        if (textMinute < 10) {
            document.querySelector(".seconds").innerHTML = `0${textMinute}`
        }
        if (textHour < 10) {
            document.querySelector(".seconds").innerHTML = `0${textHour}`
        }
    
    }
    
    let count = setInterval(countDown, 1000);



    $('textarea').keyup(function () {
        var left = 100 - $(this).val().length;
        if (left < 0) {
            left = 0;
        }
        $('.charsLeft').text(left);
    });

    $(".bar-icon").on("click", function () {
        $(".side-nav").fadeIn(1000);
        $(".bar-icon").css("left", "22.5%")
    
    })

})

$(".closebtn").on("click", function () {
    $(".side-nav").css("display", "none")
    $(".bar-icon").css("left", "2%")
})





