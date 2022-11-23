$(document).ready(function () {
  AOS.init();

  /* burger */
  $(".nav_toggle").on("click", function () {
    $(".nav").toggleClass("active");
    $(".shadow").toggleClass("active");
    $(".nav_toggle").toggleClass("active");
  });

  $(".shadow, .close").on("click", function () {
    $(".nav").removeClass("active");
    $(".shadow").removeClass("active");
    $(".nav_toggle").removeClass("active");
  });

  let links = document.querySelectorAll(".li-nav > li");
  links.forEach((item) => {
    item.addEventListener("click", (e) => {
      document.querySelector(".nav").classList.remove("active");
      document.querySelector(".shadow").classList.remove("active");
      document.querySelector(".nav_toggle").classList.remove("active");
    });
  });

  let filter = $("[data-filter]");

  filter.on("click", function (event) {
    event.preventDefault();
    $(".offer_tab span").removeClass("active");
    let cat = $(this).data("filter");

    $(this).addClass("active");
    $("[data-cat]").each(function () {
      let workCat = $(this).data("cat");

      if (workCat != cat) {
        $(this).removeClass("active");
      } else {
        $(this).addClass("active");
      }
    });
  });

  var offer_slider = new Swiper(".offer_slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".offer_next",
      prevEl: ".offer_prev",
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },

    on: {
      init() {
        this.el.addEventListener("mouseenter", () => {
          this.autoplay.stop();
        });

        this.el.addEventListener("mouseleave", () => {
          this.autoplay.start();
        });
        openCallPopupSlider(this.el);
      },
    },

    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      520: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      769: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  var news_slider = new Swiper(".news_slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".news_next",
      prevEl: ".news_prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      550: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      870: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  var slider_stocks = new Swiper(".swiper-stocks", {
    slidesPerView: 4,
    spaceBetween: 50,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    on: {
      init() {
        this.el.addEventListener("mouseenter", () => {
          this.autoplay.stop();
        });

        this.el.addEventListener("mouseleave", () => {
          this.autoplay.start();
        });
        openCallPopupSlider(this.el);
      },
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      520: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      769: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    }
  });

  $(document).ready(function () {
    $("form").submit(function () {
      var e = $(this);
      return $.ajax({
        type: "POST",
        url: "mail.php",
        data: e.serialize(),
      }).done(function () {
        setTimeout(function () {
          e.trigger("reset");
        }, 1e3);
      });
    });
  });
});

// let drill = document.querySelector('.img_block')

// if(drill) {
//     window.addEventListener("scroll", function () {
//         let value = -window.scrollY;

//         if (value > -1020) {
//             drill.style.right = 0 + value * -0.03 + "%";

//         }
//         console.log(value)

//     });
// }

let cityBlocks = document.querySelectorAll(".block");

cityBlocks.forEach((block) => {
  block.addEventListener("click", (e) => {
    cityBlocks.forEach((item) => {
      item.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    let currentId = e.currentTarget.id;
    let uncurrentId;
    if (currentId == "map1") {
      uncurrentId = "map2";
    } else {
      uncurrentId = "map1";
    }
    let mapActive = document.querySelector("." + currentId);
    let mapUnActive = document.querySelector("." + uncurrentId);
    mapActive.style.display = "block";
    mapUnActive.style.display = "none";
    // console.log("active: " + mapActive.className);
    // console.log("unactive: " + mapUnActive.className);
  });
});

const company = document.querySelector(".company");
if (company) {
  let companyOpenBtn = document.querySelectorAll(".header_production");
  let headerInfo = document.querySelector(".header_info");
  let headerBg = document.querySelector(".header_bg");
  let header = document.querySelector(".header");

  let rotateText = document.querySelector(".rotate_text");
  let abstractStanok = document.querySelector(".abstract-stanok");
  companyOpenBtn.forEach(btn =>{
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      company.classList.add("open");
      headerInfo.classList.add("hide");
      headerBg.classList.add("company-open");
      header.style.paddingBottom = "0px";
      rotateText.style.display = "none";
    });
  });

  let companyPrev = document.querySelector(".company__prev");
  companyPrev.addEventListener("click", (event) => {
    company.classList.remove("open");
    headerInfo.classList.remove("hide");
    headerBg.classList.remove("company-open");
    header.style.paddingBottom = "200px";
    rotateText.style.display = "block";
  });
}

const modalCallBtnList = document.querySelectorAll(".modal-call-btn");
const callModal = document.querySelector(".call_modal");
const callModalWrap = document.querySelector(".call_modal-wrap");
const closeBtn = document.querySelector(".close");

callModal.addEventListener("click", (event) => {
  if (event.target === closeBtn) {
    event.preventDefault();
    callModal.classList.remove("active");
    callModalWrap.classList.remove("active");
  }
  if (event.target === callModal) {
    event.preventDefault();
    callModal.classList.remove("active");
    callModalWrap.classList.remove("active");
  }
});

modalCallBtnList.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    callModal.classList.add("active");
    callModalWrap.classList.add("active");
  });
});


function openCallPopupSlider(slider) {
  const modalCallBtnSlideList = slider.querySelectorAll('.modal-call-btn');
  modalCallBtnSlideList.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      callModal.classList.add("active");
      callModalWrap.classList.add("active");
    });
  });
}

const companyPage = document.querySelector('.company-page');
if(companyPage) {
  window.addEventListener('DOMContentLoaded', (e) => {
    companyPage.classList.add('open');
  });
}
