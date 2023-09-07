$(document).ready(function() {

    // 상세페이지 range slider
    var sheet = document.createElement('style'),  
    $rangeInput = $('.range input'),
    prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];
  
    document.body.appendChild(sheet);
  
    var getTrackStyle = function (el) {  
      var curVal = el.value,
          val = (curVal - 1) * 16.666666667,
          style = '';
  
      // Set active label
      $('.range-labels li').removeClass('active selected');
  
      var curLabel = $('.range-labels').find('li:nth-child(' + curVal + ')');
  
      curLabel.addClass('active selected');
      curLabel.prevAll().addClass('selected');
  
      // Change background gradient
      for (var i = 0; i < prefs.length; i++) {
        style += '.range {background: linear-gradient(to right, #37adbf 0%, #37adbf ' + val + '%, #fff ' + val + '%, #fff 100%)}';
        style += '.range input::-' + prefs[i] + '{background: linear-gradient(to right, #37adbf 0%, #37adbf ' + val + '%, #b2b2b2 ' + val + '%, #b2b2b2 100%)}';
      }
  
      return style;
    }
  
    $rangeInput.on('input', function () {
      sheet.textContent = getTrackStyle(this);
    });
    
    // Change input value on label click
    $('.range-labels li').on('click', function () {
      var index = $(this).index();
      
      $rangeInput.val(index + 1).trigger('input');
      
    });


    // // 전체 상단 바 스크롤시 상단 고정
    // $(window).scroll(function(){
        
    //   var myObj_ind = $('#here_ind');
    //   if (myObj_ind.length){
    //      var here_ind = myObj_ind.offset().top
    //   }

    //   var height_ind = $(document).scrollTop();
    //   console.log("height_ind = " + height_ind);
    //   console.log("here_ind = " + here_ind);
    //     if(height_ind >= here_ind){
    //       $(".topBar").css({"position":"sticky","top":"0","left":"0","width":"100%","z-index":"100000"});

    //     } 
    
    // })



    // 상세페이지 탭메뉴 스크롤시 상단 고정
    $(window).scroll(function(){
       
      var myObj = $('#here');
      if (myObj.length){
         var here = myObj.offset().top;
      }
      var height = $(document).scrollTop();


      if(height >= 580){
        $(".main_body .boder_bg").css({"position":"sticky","top":"55px","left":"0","width":"100%","z-index":"1000"});
        $(".detail_tabs .content_bottom .tabs").css({"position":"sticky","top":"67px","left":"0","width":"100%","z-index":"1000"});
        $(".detail_tabs .content_bottom .tabs").css({"background":"#fff"});
      } else {
        $(".main_body .boder_bg").css({"position":"static","z-index":"1000"});
        $(".detail_tabs .content_bottom .tabs").css({"position":"static","z-index":"1000"});
        $(".detail_tabs .content_bottom .tabs").css({"background":"#fff"});
      }
    
    })



    // 상세페이지 구매하기 클릭시 z-index
    // $(".main_select").click(function() {
    //   $(".menuModal").addClass("active");
    //   $(".bottom_menu").css({"background":"#fff"})
    // })


 


  // index 페이지 전체메뉴 클릭
  $(".menuClick").click(function() {
    $(".menuModal").toggleClass("active");
    $(".bottom_menu").toggleClass("on");
  })
 


  // 메인 페이지 탭메뉴일경우 틀릭시
  // $(".content_bottom_index .ind03_tabs li").click(function() {
  //   let ind03_re = $(this).attr("data-alt");
  //   $(".content_bottom_index>.tab_content_index>div").removeClass("active");
  //   $("#" + ind03_re).addClass("active");
  // });


  




  // index 페이지 메인타입 모달창
  $(".bottom_menu .click_type").click(function() {
    $(".modal_home_wrap").css({"display":"block"})
  });

  $(".bottom_menu .modal_close, .modal_home_wrap").click(function() {
    $(".modal_home_wrap").css({"display":"none"})
  })


    // select 클릭 - 카테고리
  // $("#catego").click(function(){
  //   let cate = $(this).val();
  //   $(".thumb_product_search>li").removeClass("active");
  //   $("#" + cate).addClass("active");
  // });


  // select 클릭 - 금주신규상품
  $("#cate_product").click(function(){
    let cate = $(this).val();
    $(".thumb_product_search>li").removeClass("active");
    $("#" + cate).addClass("active");
  });




  // 하단 탭 클릭 - 카테고리
  $(".cate_body .tabs_index li").click(function() {
    let cate_re = $(this).attr("data-alt");
    $(".cate_body .cate_bottom>ul").removeClass("active");
    $("#" + cate_re).addClass("active");
  });

  $(".cate_body .tabs_index li").click(function() {
    $(this).addClass("on");
    $(this).siblings("li").removeClass("on");
  });


  




 



  
  // 하단 탭 클릭 - 상세페이지
  $(".detail_tabs>.content_bottom .tabs li").click(function() {
    let result1 = $(this).attr("data-alt");
    $(".content_bottom>.tab_content>div").removeClass("active");
    $("#" + result1).addClass("active");
  });
  $(".detail_tabs>.content_bottom .tabs li").click(function() {
    $(this).addClass("on");
    $(this).siblings("li").removeClass("on");
  });



  // 하단 탭 클릭 - 쿠폰함
  $(".point_content>.content_bottom .tabs li").click(function() {
    let cou_result1 = $(this).attr("data-alt");
    $(".point_content>.content_bottom>.tab_content>div").removeClass("active");
    $("#" + cou_result1).addClass("active");
  });
  $(".point_content>.content_bottom .tabs li").click(function() {
    $(this).addClass("on");
    $(this).siblings("li").removeClass("on");
  });





    // 하단 탭 클릭 - 리뷰작성하기
    $(".review_cont .content_bottom .tabs li").click(function() {
      let cou_result1 = $(this).attr("data-alt");
      $(".review_cont>.content_bottom>.tab_content>div").removeClass("active");
      $("#" + cou_result1).addClass("active");
    });
    $(".review_cont .content_bottom .tabs li").click(function() {
      $(this).addClass("on");
      $(this).siblings("li").removeClass("on");
    });






  // 하단 탭 클릭 - 쿠폰함 (모바일/태블릿)
  $(".content_bottom_cou.mo_cou_div .tabs li").click(function() {
    let result2 = $(this).attr("data-alt");
    $(".content_bottom_cou.mo_cou_div>.tab_content>div").removeClass("active");
    $("#" + result2).addClass("active");
  });

  $(".content_bottom_cou.ta_cou_div .tabs li").click(function() {
    let result3 = $(this).attr("data-alt");
    $(".content_bottom_cou.ta_cou_div>.tab_content>div").removeClass("active");
    $("#" + result3).addClass("active");
  });

  $(".content_bottom_cou .tabs li").click(function() {
    $(this).addClass("on");
    $(this).siblings("li").removeClass("on");
  });



  // 하단 탭 클릭 - 주문하기 - 포인트/적립금
   $(".payType_point .content_bottom .tabs li").click(function() {
    let ra_result = $(this).attr("data-alt");
    $(".payType_point .content_bottom .tab_content>div").removeClass("active");
    $("#" + ra_result).addClass("active");
  });


   // 하단 탭 클릭 - 주문하기 - 배송정보
   $(".deli_loc_con .content_bottom .tabs li").click(function() {
    let deli_result = $(this).attr("data-alt");
    $(".deli_loc_con .content_bottom .deli_tab_cont>div").removeClass("active");
    $("#" + deli_result).addClass("active");
  });










  // 구매하기 클릭
  $(".content_footer_ul .pur").click(function() {
    $(".pur_detail").css({"bottom":"0","z-index":"10000"})
    $(".pur_detail_wp").css({"display":"block"})
    $(".footer_like").css({"display":"none"})
    $(".content_footer_ul").css({"width":"100%"});
    $(".content_footer_ul>li:nth-child(1)").text("장바구니");
  })
  
  // 구매하기 - 닫기 클릭
  $(".btn-close").click(function() {
    $(".pur_detail_wp").css({"display":"none"})
    $(".footer_like").css({"display":"block"})
    $(".content_footer_ul").css({"width":"calc(100% - 60px)"});
    $(".content_footer_ul>li:nth-child(1)").text("선물하기");
  })




  // 결제방법 클릭
  var idxx_ = 0;
  $(".wrap_02 .payType .payType_ul>li").click(function() {
    $(this).addClass("on");
    $(this).siblings("li").removeClass("on");
    $(this).find(".ck_display").addClass("on");
    $(this).siblings("li").find(".ck_display").removeClass("on");
    $(this).find("svg").addClass("icon_pay_on");
    $(this).siblings("li").find("svg").removeClass("icon_pay_on");
  })









  // 좋아요 클릭
    $(".footer_like>img").click(function(){
      $(".modal_like").fadeIn("fast", function () {
        $(this).delay(500).fadeOut("fast");
      }) 
    });

    var like = 0;
    $(".content_footer .footer_like img").click(function() {
      if(like == 0) {
        $(this).attr("src","img/like_af.png")
        $(".modal_like .modal-content_like>div:nth-child(1)").addClass("active")
        $(".modal_like .modal-content_like>div:nth-child(2)").removeClass("active")
        like = 1;
      } else if(like == 1){
        $(this).attr("src","img/like_be.png")
        $(".modal_like .modal-content_like>div:nth-child(1)").removeClass("active")
        $(".modal_like .modal-content_like>div:nth-child(2)").addClass("active")
        like = 0;
      }
  })
 









  // 상세페이지 구매 후기 - 평점 별 클릭
  // var star = 0;
  // $(".tab_content .review_wrap .star_ul img").click(function() {
  //     if(star == 0) {
  //       $(this).attr("src","img/star_ye.png")
  //       star = 1;
  //     } else if(star == 1){
  //       $(this).attr("src","img/star_tr.png")
  //       star = 0;
  //     }
  // })




  // 검색하기 - select 클릭
  $("#sbucont_wp_sear").click(function(){
    let selV = $(this).val();
    $(".thumb_product_search>li").removeClass("active");
    $("#" + selV).addClass("active");
  });






  // 찜한 상품 하단 팝업 노출
  $(".cart_put").click(function(){
    $(".like_footer.like_footer.like_footer_add").fadeIn("fast", function () {
      $(".like_footer.like_footer.like_footer_del").css({"display":"none"})
      $(this).delay(2000).fadeOut("fast");

    }) 
  });
  $(".cart_select .click_del").click(function(){

    $(".like_footer.like_footer.like_footer_del").fadeIn("fast", function () {
      $(".like_footer.like_footer.like_footer_add").css({"display":"none"})
      $(this).delay(2000).fadeOut("fast");
    }) 
  });




  // 장바구니 항목 클릭시 체크박스 이미지
  // var cart_chk = 0;
  // $(".pro_chk_la, .pro_chk").click(function(){
  //   if(cart_chk == 0) {
  //     $(this).attr("src","img/ckbox_ck.png")
  //     cart_chk = 1;
  //   } else if(cart_chk == 1){
  //     $(this).attr("src","img/ckbox.png")
  //     cart_chk = 0;
  //   }
  // });






   // 장바구니 전체선택 클릭시
   var $cart = $('#cart_ck');
   $cart.change(function() {
     var $this = $(this);
     var checked = $this.prop('checked');
     $('input[name="pro_chk"]').prop('checked', checked);
   })


     // 찜한상품 전체선택 클릭시
     var $like = $('#like_ck');
     $like.change(function() {
       var $this = $(this);
       var checked = $this.prop('checked');
       $('input[name="pro_chk"]').prop('checked', checked);
     })




 
   // 장바구니 선택삭제 클릭시
   $(".cart_select .click_del").click(function(){
     $(".like_footer.like_footer.like_footer_del").fadeIn("fast");
   });


  $(".pro_chk").click(function () {
    $(this).css({"background-image":"url('../img/ckbox_ck.png')"})
  })



 
 
      // 찜한상품 전체선택 클릭시
      var $like = $('#like_ck');
      $like.change(function() {
        var $this = $(this);
        var checked = $this.prop('checked');
        $('input[name="pro_chk_like"]').prop('checked', checked);
      })
   
 



    // 주문하기 - 배송정보 - 직접입력 클릭시
    $(".select_box_sel").click(function(){
      var selV_del = $(this).val();
      if(selV_del == "self") {
        $(".self_text").css({"display":"block"})
      } else {
        $(".self_text").css({"display":"none"})
      }
    });


    // 주문하기 - 배송지변경 클릭시
    $(".deli_modi_btn").click(function(){
      $(".deli_div_fir").css({"display":"none"})
      $(".deli_div_seco").css({"display":"block"})
      $(".deli_div_thir").css({"display":"none"})
    });
    // 주문하기 - 배송지변경 - 수정 클릭시
    $(".deli_modi_btn02").click(function(){
      $(".deli_div_fir").css({"display":"none"})
      $(".deli_div_seco").css({"display":"none"})
      $(".deli_div_thir").css({"display":"block"})
    });
    // 주문하기 - 배송지변경 - 저장 클릭시
    $(".submit").click(function(){
      $(".deli_div_fir").css({"display":"block"})
      $(".deli_div_seco").css({"display":"none"})
      $(".deli_div_thir").css({"display":"none"})
    });
    // 배송지 선택 - 닫기 이미지 클릭시
    $(".deli_close").click(function(){
      $(".deli_div_fir").css({"display":"block"})
      $(".deli_div_seco").css({"display":"none"})
      $(".deli_div_thir").css({"display":"none"})
    });



   







    $('.stars .fa').click(function() {
      $(this).addClass('active');
  
      // 클릭한 별을 기준으로 (.fa) 그 이전 별은 보이게 그 뒤에 별들은 안보이게
      $(this).prevAll().addClass('active');
      $(this).nextAll().removeClass('active');
  
      // 순서를 찾는 메서드 index 0 1 2 3 4
      // 텍스트내용을 출력 text, 태그+텍스트 html
      var num = $(this).index();
      $('.print').text(starRate);
      var starRate = num + 1
      if(starRate == 1) {
          $('.print').html('<img src="img/icon/star-lv1.png">' + '별로에요');
      } else if(starRate == 2) {
          $('.print').html('<img src="img/icon/star-lv2.png">' + '보통 이에요');
      } else if(starRate == 3) {
          $('.print').html('<img src="img/icon/star-lv3.png">' + '그냥 그래요');
      } else if(starRate == 4) {
          $('.print').html('<img src="img/icon/star-lv4.png">' + '맘에 들어요');
      } else {
          $('.print').html('<img src="img/icon/star-lv4.png">' + '아주 좋아요');
      }
  });







    // 주문하기 - 배송정보_02 배송지 클릭시
    $(".wrap_02.deli_loc .deli_ul.deli_ul_seco>li").click(function(){
      $(this).addClass("on");
      $(this).siblings("li").removeClass('on')

      const idxx = $(this).index(); 
        
      if(idxx === 0){
          $('.deli_select01>img').attr("src", "img/checkaf.svg");
          $('.deli_select02>img').attr("src", "img/checkbe.svg");
      } else if(idxx === 1){
          $('.deli_select02>img').attr("src", "img/checkaf.svg");
          $('.deli_select01>img').attr("src", "img/checkbe.svg");
      }

    });




     // 주문하기 - 포인트/적립금 결제 tab 클릭시
     $(".payType_point .content_bottom .tabs li").click(function() {
      $(this).addClass("on");
      $(this).siblings("li").removeClass("on");
    });

     // 주문하기 - 기본배송지/신규배송지 tab 클릭시
     $(".deli_loc_con .content_bottom .tabs li").click(function() {
      $(this).addClass("on");
      $(this).siblings("li").removeClass("on");
    });



  

    // 주문하기 - 포인트 적립금 결제 - 휴가포인트 - 아이디 조회 클릭시
    $(".point_find").click(function(){
      $(".payType_point_02").css({"display":"block"})
      $(".payType_point_01").css({"display":"none"})
    });


     // 주문하기 - 포인트 적립금 결제 - 휴가포인트 - 아이디 조회 클릭시 tab none
     $(".point_find").click(function(){
      $(".payType_point_02").css({"display":"block"})
      $(".payType_point_01").css({"display":"none"})
    });


    // 주문하기 - 포인트 적립금 결제 - 휴가포인트 - 아이디 조회 클릭시  포인트/적립금 클릭시
      $(".wrap_02 .payType_point .content_bottom .tabs>li").click(function() {
        var index_po = $(this).index();
   
        if(index_po == 0) {
          $(".click_text").html("보유 포인트는 <b>100,000</b>입니다.")
        } else if(index_po == 1){
          $(".click_text").html("보유 적립금은 <b>100,000</b>입니다.")
        }
      
      });

      // 주문하기 - 포인트결제 - 모두사용 클릭시
      $(".point_use").click(function(){
        $(".payType_point_02").css({"display":"none"})
        $(".payType_point_01").css({"display":"block"})
      });


  

       // 선물하기 - 현금영수증 - 발행/미발행 체크
      $(".radio_cr>div>input").click(function(){
        var reciptstat = $(this).val();
        if(reciptstat == "none") {
          $(".bottom_select").css({"display":"none"});
        } else {
          $(".bottom_select").css({"display":"block"});
        }
      });



      // 선물하기 - 현금영수증 selectbox
      $(".reciptSel").click(function(){
        var reciptSel = $(this).val();
        $(".reciptSelect_div>div").css({"display":"none"})
        $("#" + reciptSel).css({"display":"block"})
      });


   







    $(".content_bottom .tabs li").click(function() {
      let result_re = $(this).attr("data-alt");
      $(".content_bottom>.review_content>div").removeClass("active");
      $("#" + result_re).addClass("active");
    });
  


     


    // 리뷰 - 리뷰작성완료 클릭시
    $(".review_foot").click(function(){
      $(".review_01").css({"display":"block"})
      $(".review_02").css({"display":"none"})
      $(".review_foot").css({"display":"none"})
      $(".review_ch_01").css({"display":"block"})
      $(".review_ch_02").css({"display":"none"})
    });






    // 리뷰작성하기 - 별 평점
    // 평점 별 클릭
    var r_star = 0;
    $(".review_write .star .star_review img").click(function() {
        if(r_star == 0) {
          $(this).attr("src","img/review_star_02.png")
          r_star = 1;
        } else if(r_star == 1){
          $(this).attr("src","img/review_star_01.png")
          r_star = 0;
        }
    })






  // 찜한 상품 선택삭제 클릭시 
  $(".click_del").click(function() {
    $(".modal_del").fadeIn();
  })

  $(".close_mo").click(function() {
    $(".modal_del").fadeOut();
  })









  });

















    
       



      








