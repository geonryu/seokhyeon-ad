$(document).ready(function () {
    var swiper = new Swiper(".main-visual .mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 30,
        freeMode: true,
        loop: true,
        navigation: {
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
        },
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
    });

    $(".btn-nav-opn").on("click", function() {
        $(this).toggleClass("open");
        let active = $(this).hasClass("open");

        if(active) { 
            $("nav").stop().fadeIn();
            $("nav .gnb").addClass("active");
        } else {
            $("nav").stop().fadeOut();
            $("nav .gnb").removeClass("active");
        }
    })

    function scrollAnim(scrTo) {
        $("html, body").stop().animate({
            "scrollTop" : scrTo.offset().top
        }, 650, "easeOutExpo");
    }

    $(".gnb li a").on("click", function(e) {
        e.preventDefault();
        const idx = $(this).parent().index();
        $("nav").stop().fadeOut();
        $("nav .gnb").removeClass("active");
        $(".btn-nav-opn").removeClass("open");
        if(idx===0){
            scrollAnim($("section.about"))
        } else if(idx===1) {
            scrollAnim($("section.gallery"))
        } else if(idx===2){
            scrollAnim($("section.contact"))
        }
    });

    var swiper = new Swiper(".gallery .mySwiper", {
        slidesPerView: 1,
        loop: true,
        navigation: {
            prevEl: ".gallery .swiper-button-prev",
            nextEl: ".gallery .swiper-button-next",
        },
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        }
    });

    // 페이지 연결 준비중
    $(".project-more a").on("click", function(e) {
        e.preventDefault();
        alert("페이지 준비중입니다.");
    })

    AOS.init();
})