

 $(window).scroll(function(){
    curr = $(this).scrollTop()
      html = `현재스크롤값: ${curr}`
    if(curr >= 1){
      $('.onlineEducation-menu').addClass('on')
    }else{
      $('.onlineEducation-menu').removeClass('on')
      }
    }
  )

  $(window).trigger('click')

  $(".burgerBtn").click(function(){
    $('body').toggleClass('scroll-hide');
    $(".mo_gnb_inner").toggleClass("isAct")
    $(".search-btn").toggleClass("mo_gnb-on")
    $(".burgerBtn").toggleClass("on")
    $(".header").toggleClass("mo_gnb-on")
    if ($(".burgerBtn").attr('aria-expanded') === 'false') {
      $('.burgerBtn').attr('aria-expanded', 'true' )
    } else {
      $('.burgerBtn').attr('aria-expanded', 'false' )
    }
  })

    $('.mo_gnb_inner .top .nav-item').click(function(e){
      if($(this).find('.sub-list').length){
        $(this).find('.sub-list').toggleClass('on');
        $(this).find(".hasSubMenu").toggleClass("on")
      }
  })
    $('.mo_gnb_inner .middle .nav-item').click(function(e){
      if($(this).find('.sub-list').length){
        $(this).find('.sub-list').toggleClass('on')
        $(this).siblings().find('.sub-list').removeClass('on')
        $(this).find(".hasSubMenu").toggleClass("on")
        $(this).siblings().find(".hasSubMenu").removeClass("on")
      }
  })


  //네이버비즈니스 gnb 벗어나는게 왜 범위가 좁을까?
  $('.header > .inner .gnb').hover(function(e){
    $('.sub-list').addClass('on');
    $(".header").addClass("hov").height($('.sub-list').outerHeight(true)+$(".header .inner").height())
  },function(e){
    $('.sub-list').removeClass('on');
    $(".header").css('height', 'auto')
    if($('.onlineEducation-menu').length){
      $(".header").removeClass("hov")
    }
  })
  

  $(".search-btn").click(function(){
    $('.header').addClass("search")
    $(".search-area input").focus()
  })

  $(".close-btn").click(function(){
    $('.header').removeClass("search")
  })

  const menuSlide = new Swiper('.onlineEducation-menu .swiper',{
    slidesPerView:"auto",
    spaceBetween: 16,
    cssMode: true,
    breakpoints: {
      851: {
        spaceBetween: 48,
      },
    }
  })
  $('.onlineEducation-menu .swiper-slide').click(function(){
    $(this).addClass('on').siblings().removeClass('on')
  })

  const onlineEducationSlide = new Swiper('.section-onlineEducation .swiper',{
    slidesPerView:3,
    spaceBetween: 16,
    clickable: false,
    navigation: {
      nextEl: ".section-onlineEducation .next",
      prevEl: ".section-onlineEducation .prev",
    },
    on: {
      activeIndexChange: function(){
        $(".section-onlineEducation .prev").addClass("on")
      }
    },
     breakpoints: {
    // 851 이상에만 적용
      851: {
        spaceBetween: 24,
      },
    }
  })

  $('.section-onlineEducation .tab-item').click(function(e){
    e.preventDefault();
    tabName = $(this).find('a').data('tab');
    $(this).addClass('on').siblings().removeClass('on');
    $(tabName).addClass('on').siblings().removeClass('on');
    const className = tabName.replace("#", ".")
    $(className).addClass('on').siblings().removeClass('on');
  })
 function anchor(swipe) {
    const centerIndex = swipe.realIndex
    const section = swipe.el.parentNode.parentNode.className
    switch(centerIndex){
      case 0:
        $(`.${section} .text-box-mo#${section}-1`).addClass("on").siblings().removeClass("on")
        break;
      case 1:
        $(`.${section} .text-box-mo#${section}-2`).toggleClass("on").siblings().removeClass("on")
        break;
      case 2:
        $(`.${section} .text-box-mo#${section}-3`).toggleClass("on").siblings().removeClass("on")
        break;
      case 3:
        $(`.${section} .text-box-mo#${section}-4`).toggleClass("on").siblings().removeClass("on")
        break;
      default:
       return
  }

  }
  const thisWeekSlidePc = new Swiper('.section-thisWeek .swiper.pc',{
      slidesPerView: 4,
      spaceBetween: 24,
  })
  const thisWeekSlideMo = new Swiper('.section-thisWeek .swiper.mo',{
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    spaceBetween: 16,
    initialSlide: 0,
    clickable: false,
    on:   {
      transitionEnd: function(){
        anchor(this)
      }
    },

  })

  const lineUpSlide = new Swiper('.section-lineUp .swiper',{
    slidesPerView: 3,
    spaceBetween: 16,
    clickable: false,
     breakpoints: {
      851: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
      navigation: {
      nextEl: ".section-lineUp .next",
      prevEl: ".section-lineUp .prev",
    },
    on: {
      activeIndexChange: function(){
        $(".section-lineUp .prev").addClass("on")
      }
    }
  })

  $(".tooltip").click(function(){
    $(".tip").toggleClass('on')
  })
  const newEducationSlidePc = new Swiper('.section-newEducation .swiper.pc',{
    slidesPerView: 4,
    spaceBetween: 24,
    clickable: false,
  }) 


  const newEducationSlideMo = new Swiper('.section-newEducation .swiper.mo',{
      slidesPerView: 'auto',
      centeredSlides: true,
      loop: true,
      spaceBetween: 16,
      initialSlide: 0,
      clickable: false,
      on:   {
        transitionEnd: function(){
         anchor(this)
        }
      } 
  })  

 
  $('.related').click(function (e){
    e.preventDefault()
    $(this).toggleClass('on')
  })
  $('.info').click(function (e){
    e.preventDefault()
    $(this).toggleClass('on')
  })

  
  $('.more-btn').click(function(){
    $(this).addClass('active').siblings().addClass('active')
  })

  $(".bookmark").click(function(){
    $(this).toggleClass("save")
    $(this).siblings(".image-box").addClass("on")
  })



 
  $(".scrollTop").click(function(){
    $('html, body').animate({scrollTop: 0}, 800);
    return false;
  })