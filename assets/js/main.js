(function($) {
    "use strict";
    

    $(document).ready( function() {
        $('body').addClass('loaded');


        //>> Mobile Menu Js Start <<//
        $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "1199",
            meanExpand: ['<i class="far fa-plus"></i>'],
        });


        //>> Sidebar Toggle Js Start <<//
        $(".offcanvas__close,.offcanvas__overlay").on("click", function() {
            $(".offcanvas__info").removeClass("info-open");
            $(".offcanvas__overlay").removeClass("overlay-open");
        });
        $(".sidebar__toggle").on("click", function() {
            $(".offcanvas__info").addClass("info-open");
            $(".offcanvas__overlay").addClass("overlay-open");
        });


        //>> Body Overlay Js Start <<//
        $(".body-overlay").on("click", function() {
            $(".offcanvas__area").removeClass("offcanvas-opened");
            $(".df-search-area").removeClass("opened");;
            $(".body-overlay").removeClass("opened");
        });

        //>> Sticky Header Js Start <<//

        $(window).on("scroll", function() {
            if ($(this).scrollTop() > 250) {
                $("#header-sticky").addClass("sticky");
            } else {
                $("#header-sticky").removeClass("sticky");
            }
        });
        

        // Sidebar Area Start <<//
        $(".share-btn").on("click", function() {
            var target = $(this).data("target");
            $("#" + target).toggle();
        });
        $(document).ready(function() {
            $(".openButton").on("click", function(e) {
                e.preventDefault();
                $("#targetElement").removeClass("side_bar_hidden");
                $("#targetElement2").addClass("side_bar_hidden2");
                $("#targetElement3").addClass("side_bar_hidden3");
                $("#targetElement4").addClass("side_bar_hidden4");
            });
        
            $("#closeButton").on("click", function(e) {
                e.preventDefault();
                $("#targetElement").addClass("side_bar_hidden");
            });
        
            $("#openButton2").on("click", function(e) {
                e.preventDefault();
                $("#targetElement2").removeClass("side_bar_hidden2");
                $("#targetElement").addClass("side_bar_hidden");
                $("#targetElement3").addClass("side_bar_hidden3");
                $("#targetElement4").addClass("side_bar_hidden4");
            });
        
            $("#closeButton2").on("click", function(e) {
                e.preventDefault();
                $("#targetElement2").addClass("side_bar_hidden2");
            });
        
            $(".openButton3").on("click", function(e) {
                e.preventDefault();
                $("#targetElement3").removeClass("side_bar_hidden3");
                $("#targetElement").addClass("side_bar_hidden");
                $("#targetElement2").addClass("side_bar_hidden2");
                $("#targetElement4").addClass("side_bar_hidden4");
            });
        
            $("#closeButton3").on("click", function(e) {
                e.preventDefault();
                $("#targetElement3").addClass("side_bar_hidden3");
            });
        
            $(".openButton4").on("click", function(e) {
                e.preventDefault();
                $("#targetElement4").removeClass("side_bar_hidden4");
                $("#targetElement").addClass("side_bar_hidden");
                $("#targetElement2").addClass("side_bar_hidden2");
                $("#targetElement3").addClass("side_bar_hidden3");
            });
        
            $("#closeButton4").on("click", function(e) {
                e.preventDefault();
                $("#targetElement4").addClass("side_bar_hidden4");
            });




            $(".share-btn").on("click", function() {
                var target = $(this).data("target");
                $("#" + target).toggle();
            });
            $("#openButton11").on("click", function(e) {
                e.preventDefault();
                $("#targetElement11").removeClass("side_bar_hidden11");
            });
            $("#closeButton11").on("click", function(e) {
                e.preventDefault();
                $("#targetElement11").addClass("side_bar_hidden11");
            });
            
        });
        
        //>> Video Popup Start <<//
        $(".img-popup").magnificPopup({
            type: "image",
            gallery: {
                enabled: true,
            },
        });

        $('.video-popup').magnificPopup({
            type: 'iframe',
            callbacks: {
            }
        });
        
        //>> Counterup Start <<//
        $(".count").counterUp({
            delay: 15,
            time: 4000,
        });

        //>> Wow Animation Start <<//
        new WOW().init();

        //>> Nice Select Start <<//
        $('select').niceSelect();
        

        //>> Hero-1 Slider Start <<//
        const sliderActive2 = ".hero-slider";
        const sliderInit2 = new Swiper(sliderActive2, {
            loop: true,
            slidesPerView: 1,
            effect: "fade",
            speed: 3000,
            // autoplay: {
            //     delay: 3000,
            //     disableOnInteraction: false,
            // },
            navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
              },
            pagination: {
                el: ".dot",
                clickable: true,
            },
        });

       function animated_swiper(selector, init) {
           const animated = function animated() {
               $(selector + " [data-animation]").each(function () {
                   let anim = $(this).data("animation");
                   let delay = $(this).data("delay");
                   let duration = $(this).data("duration");
                   $(this)
                       .removeClass("anim" + anim)
                       .addClass(anim + " animated")
                       .css({
                           webkitAnimationDelay: delay,
                           animationDelay: delay,
                           webkitAnimationDuration: duration,
                           animationDuration: duration,
                       })
                       .one("animationend", function () {
                           $(this).removeClass(anim + " animated");
                       });
               });
           };
           animated();
           init.on("slideChange", function () {
               $(sliderActive2 + " [data-animation]").removeClass("animated");
           });
           init.on("slideChange", animated);
       }
       animated_swiper(sliderActive2, sliderInit2);

       //>> Hero-3 Slider Start <<//
       const sliderActive1 = ".hero-slider-2";
       const sliderInit1 = new Swiper(sliderActive1, {
           loop: true,
           slidesPerView: 1,
           effect: "fade",
           speed: 2000,
           autoplay: {
           delay: 4000,
           disableOnInteraction: false,
           },
           pagination: {
               el: ".dot12",
               clickable: true,
           },
           
       });
       // content animation when active start here
       function animated_swiper(selector, init) {
            let animated = function animated() {
                $(selector + " [data-animation]").each(function () {
                    let anim = $(this).data("animation");
                    let delay = $(this).data("delay");
                    let duration = $(this).data("duration");
                    $(this)
                        .removeClass("anim" + anim)
                        .addClass(anim + " animated")
                        .css({
                            webkitAnimationDelay: delay,
                            animationDelay: delay,
                            webkitAnimationDuration: duration,
                            animationDuration: duration,
                        })
                        .one("animationend", function () {
                            $(this).removeClass(anim + " animated");
                        });
                });
            };
            animated();
            init.on("slideChange", function () {
                $(sliderActive1 + " [data-animation]").removeClass("animated");
            });
            init.on("slideChange", animated);
       }
       animated_swiper(sliderActive1, sliderInit1);


        //>> feature slider start <<//
        const featureSwiper = new Swiper('.feature-marquee', {
            loop: true, 
            autoplay: {
                delay: 0, 
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            speed: 3000, 
            slidesPerView: 'auto',
            spaceBetween: 30,
            freeMode: true,
            allowTouchMove: true, 
            
            breakpoints: {
                992: {
                    loop: false, 
                    allowTouchMove: false, 
                    freeMode: false, 
                    slidesPerView: 'auto',
                    spaceBetween: 30 
                }
            }
        });


        //>> Category Slider Start <<//
        if($('.category-slider').length > 0) {
            const categorySlider = new Swiper(".category-slider", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                },
                pagination: {
                    el: ".dot",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                breakpoints: {
                    1399: {
                        slidesPerView: 4,
                    },
                    1199: {
                        slidesPerView: 3,
                    },
                    991: {
                        slidesPerView: 3,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 2,
                    },
                    350: {
                        slidesPerView: 2,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }
        
        if($('.category-slider-2').length > 0) {
            const categorySlider2 = new Swiper(".category-slider-2", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".dot",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                breakpoints: {
                    1399: {
                        slidesPerView: 7,
                    },
                    1199: {
                        slidesPerView: 6,
                    },
                    991: {
                        slidesPerView: 5,
                    },
                    767: {
                        slidesPerView: 4,
                    },
                    575: {
                        slidesPerView: 3,
                    },
                    375: {
                        slidesPerView: 2,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        if($('.category-slider-22').length > 0) {
            const categorySlider22 = new Swiper(".category-slider-22", {
                spaceBetween: 15,
                speed: 2000,
                loop: true,
                centeredSlides: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".dot",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                breakpoints: {
                    1399: {
                        slidesPerView: 7,
                    },
                    1199: {
                        slidesPerView: 6,
                    },
                    991: {
                        slidesPerView: 5,
                    },
                    767: {
                        slidesPerView: 4,
                    },
                    575: {
                        slidesPerView: 3,
                    },
                    375: {
                        slidesPerView: 2,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        if($('.category-slider-6').length > 0) {
            const categorySlider6 = new Swiper(".category-slider-6", {
                spaceBetween: 15,
                speed: 2000,
                loop: true,
                centeredSlides: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                breakpoints: {
                    991: {
                        slidesPerView: 5,
                    },
                    767: {
                        slidesPerView: 4,
                    },
                    575: {
                        slidesPerView: 3,
                    },
                    375: {
                        slidesPerView: 2,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        //>> Testimonial Slider Start <<//
        const testimonialSwiper = new Swiper('.testimonial-swiper', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        });

        if($('.testimonial-slider').length > 0) {
            const testimonialSlider = new Swiper(".testimonial-slider", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".dot1",
                    clickable: true,
                },
            });
        }

        if($('.testimonial-slider-2').length > 0) {
            const testimonialSlider2 = new Swiper(".testimonial-slider-2", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".dot3",
                    clickable: true,
                },
                breakpoints: {
                    991: {
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerView: 1,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        if($('.instagram-slider').length > 0) {
            const instagramSlider = new Swiper(".instagram-slider", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".dot09",
                    clickable: true,
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 4,
                    },
                    991: {
                        slidesPerView: 3,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 2,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        //>> Brand Slider Start <<//
        if($('.brand-slider').length > 0) {
            const brandSlider = new Swiper(".brand-slider", {
                spaceBetween: 24,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 5,
                    },
                    991: {
                        slidesPerView: 4,
                    },
                    767: {
                        slidesPerView: 3,
                    },
                    575: {
                        slidesPerView: 2,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        //>> Product Slider Start <<//
        if($('.product-slider-2').length > 0) {
            const productSlider2 = new Swiper(".product-slider-2", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                breakpoints: {
                    1399: {
                        slidesPerView: 4,
                    },
                    1199: {
                        slidesPerView: 3,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 2,
                    },
                    350: {
                        slidesPerView: 2,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                    
                },
            });
        }

        if($('.related-slider').length > 0) {
            const relatedSlider = new Swiper(".related-slider", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                breakpoints: {
                    1399: {
                        slidesPerView: 4,
                    },
                    1199: {
                        slidesPerView: 3,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 2,
                    },
                    350: {
                        slidesPerView: 2,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                    
                },
            });
        }

        //>> shop Start <<//
        function initTabs() {
            const $tabs = $('[data-tab]');
            const $contents = $('[data-tab-content]');
            
            $contents.show();
            
            $tabs.filter('[data-tab="all"]').addClass('active');
            
            $tabs.on('click', function(e) {
                e.preventDefault();
                
                $tabs.removeClass('active');
                $(this).addClass('active');
                
                const target = $(this).data('tab');
                
                if (target === 'all') {
                    $contents.show();
                } else if (target === 'bedroom') {
                    $contents.hide();
                    $contents.filter('[data-tab-content="office"]').show();
                } else {
                    $contents.hide();
                    $contents.filter(`[data-tab-content="${target}"]`).show();
                }
            });
        }

        if($('.shop-slider-6').length > 0) {
            const shopSlider6 = new Swiper(".shop-slider-6", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 4,
                    },
                    991: {
                        slidesPerView: 3,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 2,
                    },
                    350: {
                        slidesPerView: 2,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                    
                },
            });
        }

        if($('.new-arrivals-slider').length > 0) {
            const newArrivalsSlider = new Swiper(".new-arrivals-slider", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                // autoplay: {
                //     delay: 1000,
                //     disableOnInteraction: false,
                // },
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                pagination: {
                    el: ".dot",
                    clickable: true,
                },
                breakpoints: {
                    1399: {
                        slidesPerView: 4,
                    },
                    1199: {
                        slidesPerView: 3,
                    },
                    991: {
                        slidesPerView: 3,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 2,
                    },
                    450: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                    
                },
            });
        }

        if($('.big-sale-right-slider').length > 0) {
            const bigSaleRightSlider = new Swiper(".big-sale-right-slider", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 2,
                    },
                    991: {
                        slidesPerView: 1,
                    },
                    767: {
                        slidesPerView: 1,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                    
                },
            });
        }

           //>> courses Slider Start <<//
           if($('.details-slider').length > 0) {
            const detailsSlider = new Swiper(".details-slider", {
                spaceBetween: 30,
                speed: 1300,
                loop: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".dot",
                    clickable: true,
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 1,
                    },
                    991: {
                        slidesPerView: 1,
                    },
                    767: {
                        slidesPerView: 1,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }
        
        if($('.product-slider-21').length > 0) {
            const productSlider21 = new Swiper(".product-slider-21", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 3,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 2,
                    },
                    350: {
                        slidesPerView: 2,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                    
                },
            });
        }
        
        //>> Shop Details Quantity Start <<//
        $(document).ready(function() {
            $('.qty-minus').on('click', function() {
                const input = $(this).next('.qty-input');
                if (parseInt(input.val()) > parseInt(input.attr('min'))) {
                input.val(parseInt(input.val()) - 1);
                }
            });

            $('.qty-plus').on('click', function() {
                const input = $(this).prev('.qty-input');
                input.val(parseInt(input.val()) + 1);
            });
            });

        //>> Product Details Swiper Slide Start <<//
        const shopSliderThumb = new Swiper(".shop-slider-thumb", {
            loop: true,
            spaceBetween: 30,
            slidesPerView: 3,
          
            freeMode: true,
            watchSlidesProgress: true,
            navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
        });

        const shopSingleProductSlide = new Swiper(".shop-single-slide", {
            speed: 1000,
            loop: "true",
            grabCursor: true,
            navigation: {
                nextEl: ".right-array",
                prevEl: ".left-array",
            },
            thumbs: {
                swiper: shopSliderThumb,
            },
        });

        $(document).ready(function() {
            $('.details-image-items .nav-link').on('click', function(e) {
                e.preventDefault();
                
                const thumbImg = $(this).find('img').attr('src');
                
                $(this).closest('.details-image-items')
                       .find('.shop-thumb img')
                       .attr('src', thumbImg.replace('-thumb', ''));
                
                $('.details-image-items .nav-link').removeClass('active');
                $(this).addClass('active');
            });
        });

         // range sliger
         function getVals() {
            let parent = this.parentNode;
            let slides = parent.getElementsByTagName("input");
            let slide1 = parseFloat(slides[0].value);
            let slide2 = parseFloat(slides[1].value);
            if (slide1 > slide2) {
                let tmp = slide2;
                slide2 = slide1;
                slide1 = tmp;
            }

            let displayElement = parent.getElementsByClassName("rangeValues")[0];
            displayElement.innerHTML = "$" + slide1 + " - $" + slide2;
        }

        window.onload = function() {
            let sliderSections = document.getElementsByClassName("range-slider");
            for (let x = 0; x < sliderSections.length; x++) {
                let sliders = sliderSections[x].getElementsByTagName("input");
                for (let y = 0; y < sliders.length; y++) {
                    if (sliders[y].type === "range") {
                        sliders[y].oninput = getVals;
                        sliders[y].oninput();
                    }
                }
            }
        }

        progressBar: () => {
            const pline = document.querySelectorAll(".progressbar.line");
            const pcircle = document.querySelectorAll(".progressbar.semi-circle");
            pline.forEach(e => {
                const line = new ProgressBar.Line(e, {
                    strokeWidth: 6,
                    trailWidth: 6,
                    duration: 3000,
                    easing: 'easeInOut',
                    text: {
                        style: {
                            color: 'inherit',
                            position: 'absolute',
                            right: '0',
                            top: '-30px',
                            padding: 0,
                            margin: 0,
                            transform: null
                        },
                        autoStyleContainer: false
                    },
                    step: (state, line) => {
                        line.setText(Math.round(line.value() * 100) + ' %');
                    }
                });
                let value = e.getAttribute('data-value') / 100;
                new Waypoint({
                    element: e,
                    handler: function() {
                        line.animate(value);
                    },
                    offset: 'bottom-in-view',
                })
            });
            pcircle.forEach(e => {
                const circle = new ProgressBar.SemiCircle(e, {
                    strokeWidth: 6,
                    trailWidth: 6,
                    duration: 2000,
                    easing: 'easeInOut',
                    step: (state, circle) => {
                        circle.setText(Math.round(circle.value() * 100));
                    }
                });
                let value = e.getAttribute('data-value') / 100;
                new Waypoint({
                    element: e,
                    handler: function() {
                        circle.animate(value);
                    },
                    offset: 'bottom-in-view',
                })
            });
        }

        const rangeInput = document.querySelectorAll(".range-input input"),
        priceInput = document.querySelectorAll(".price-input input"),
        range = document.querySelector(".slider .progress");
        let priceGap = 1000;

        priceInput.forEach((input) => {
            input.addEventListener("input", (e) => {
                let minPrice = parseInt(priceInput[0].value),
                    maxPrice = parseInt(priceInput[1].value);

                if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
                    if (e.target.className === "input-min") {
                        rangeInput[0].value = minPrice;
                        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
                    } else {
                        rangeInput[1].value = maxPrice;
                        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
                    }
                }
            });
        });

        rangeInput.forEach((input) => {
            input.addEventListener("input", (e) => {
                let minVal = parseInt(rangeInput[0].value),
                    maxVal = parseInt(rangeInput[1].value);

                if (maxVal - minVal < priceGap) {
                    if (e.target.className === "range-min") {
                        rangeInput[0].value = maxVal - priceGap;
                    } else {
                        rangeInput[1].value = minVal + priceGap;
                    }
                } else {
                    priceInput[0].value = minVal;
                    priceInput[1].value = maxVal;
                    range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
                    range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
                }
            });
        });
        
        // Category-click
        $(".bd-category__click").click(function () {
            $(this).siblings(".category__items, .category__items-2").slideToggle();
            $(this).toggleClass("items-open");
        });

        // quntity increment and decrement
        const quantityIncrement = document.querySelectorAll(".quantityIncrement");
        const quantityDecrement = document.querySelectorAll(".quantityDecrement");
        if (quantityIncrement && quantityDecrement) {
            quantityIncrement.forEach((increment) => {
                increment.addEventListener("click", function () {
                    const value = parseInt(
                        increment.parentElement.querySelector("input").value
                    );
                    increment.parentElement.querySelector("input").value = value + 1;
                });
            });

            quantityDecrement.forEach((decrement) => {
                decrement.addEventListener("click", function () {
                    const value = parseInt(
                        decrement.parentElement.querySelector("input").value
                    );
                    if (value > 1) {
                        decrement.parentElement.querySelector("input").value = value - 1;
                    }
                });
            });
        }

        //Quantity 
        const inputs = document.querySelectorAll('#qty, #qty2, #qty3');
        const btnminus = document.querySelectorAll('.qtyminus');
        const btnplus = document.querySelectorAll('.qtyplus');

        if (inputs.length > 0 && btnminus.length > 0 && btnplus.length > 0) {

            inputs.forEach(function(input, index) {
                const min = Number(input.getAttribute('min'));
                const max = Number(input.getAttribute('max'));
                const step = Number(input.getAttribute('step'));

                function qtyminus(e) {
                    const current = Number(input.value);
                    const newval = (current - step);
                    if (newval < min) {
                        newval = min;
                    } else if (newval > max) {
                        newval = max;
                    }
                    input.value = Number(newval);
                    e.preventDefault();
                }

                function qtyplus(e) {
                    const current = Number(input.value);
                    const newval = (current + step);
                    if (newval > max) newval = max;
                    input.value = Number(newval);
                    e.preventDefault();
                }

                btnminus[index].addEventListener('click', qtyminus);
                btnplus[index].addEventListener('click', qtyplus);
            });
        }

         //>> CountDown Start <<//
         let targetDate = new Date("2025-6-12 00:00:00").getTime();
         const countdownInterval = setInterval(function () {
             let currentDate = new Date().getTime();
             let remainingTime = targetDate - currentDate;
 
             if (remainingTime <= 0) {
                 clearInterval(countdownInterval);
                 // Display a message or perform any action when the countdown timer reaches zero
                 $("#countdown-container").text("Countdown has ended!");
             } else {
                 let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
                 let hours = Math.floor(
                     (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                 );
                 let minutes = Math.floor(
                     (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
                 );
                 let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
 
                 // Pad single-digit values with leading zeros
                 $("#day").text(days.toString().padStart(2, "0"));
                 $("#hour").text(hours.toString().padStart(2, "0"));
                 $("#min").text(minutes.toString().padStart(2, "0"));
                 $("#sec").text(seconds.toString().padStart(2, "0"));
             }
         }, 1000);

         //>> Search Popup Start <<//
        const $searchWrap = $(".search-wrap");
        const $navSearch = $(".nav-search");
        const $searchClose = $("#search-close");

        $(".search-trigger").on("click", function (e) {
            e.preventDefault();
            $searchWrap.animate({ opacity: "toggle" }, 500);
            $navSearch.add($searchClose).addClass("open");
        });

        $(".search-close").on("click", function (e) {
            e.preventDefault();
            $searchWrap.animate({ opacity: "toggle" }, 500);
            $navSearch.add($searchClose).removeClass("open");
        });

        function closeSearch() {
            $searchWrap.fadeOut(200);
            $navSearch.add($searchClose).removeClass("open");
        }

        $(document.body).on("click", function (e) {
            closeSearch();
        });

        $(".search-trigger, .main-search-input").on("click", function (e) {
            e.stopPropagation();
        });
        
        initTabs();


    }); // End Document Ready Function

    //Price Range Slideer
    document.addEventListener("DOMContentLoaded", function () {
        const minSlider = document.getElementById("min-slider");
        const maxSlider = document.getElementById("max-slider");
        const amount = document.getElementById("amount");

        function updateAmount() {
            const minValue = parseInt(minSlider.value, 10);
            const maxValue = parseInt(maxSlider.value, 10);

            // Ensure the minimum value is always lower than the maximum value
            if (minValue > maxValue) {
                minSlider.value = maxValue;
            }

            // Update the displayed price range
            amount.value = "$" + minSlider.value + " - $" + maxSlider.value;

            // Calculate the percentage positions of the sliders
            const minPercent =
                ((minSlider.value - minSlider.min) /
                    (minSlider.max - minSlider.min)) *
                100;
            const maxPercent =
                ((maxSlider.value - maxSlider.min) /
                    (maxSlider.max - maxSlider.min)) *
                100;

            // Update the background gradient to show the active track color
            minSlider.style.background = `linear-gradient(to right, #D0D0D2 ${minPercent}%, #57437B ${minPercent}%, #57437B ${maxPercent}%, #D0D0D2 ${maxPercent}%)`;
            maxSlider.style.background = `linear-gradient(to right, #D0D0D2 ${minPercent}%, #57437B ${minPercent}%, #57437B ${maxPercent}%, #D0D0D2 ${maxPercent}%)`;
        }

        // Initialize the sliders and track with default values
        amount && updateAmount();

        // if (minSlider && maxSlider) {

        // Add event listeners for both sliders
        minSlider && minSlider.addEventListener("input", updateAmount);
        maxSlider && maxSlider.addEventListener("input", updateAmount);
        // }
    });

    

    // function loader() {
    //     $(window).on('load', function() {
    //         // Animate loader off screen
    //         $(".preloader").addClass('loaded');                    
    //         $(".preloader").delay(600).fadeOut();                       
    //     });
    // }

    // loader();
   

})(jQuery); // End jQuery

