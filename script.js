document.addEventListener("DOMContentLoaded", function () {
    const slidesContainer = document.querySelector(".slides-container");
    const slides = document.querySelectorAll(".multipletab_slide-top");
    const tabs = document.querySelectorAll(".multipletab_slide-text p");
  
    let activeIndex = 0;
    let slideWidth = slides[0].clientWidth;
  
    function showSlide(index) {
      slidesContainer.style.transform = `translateX(-${index * slideWidth}px)`;
  
      tabs.forEach((tab, i) => {
        if (i === index) {
          tab.classList.add("mstp_active");
        } else {
          tab.classList.remove("mstp_active");
        }
      });
  
      activeIndex = index;
    }
  
    function showNextSlide() {
      activeIndex = (activeIndex + 1) % slides.length;
      showSlide(activeIndex);
    }
  
    function showPrevSlide() {
      activeIndex = (activeIndex - 1 + slides.length) % slides.length;
      showSlide(activeIndex);
    }
  
    function showTabSlide(index) {
      showSlide(index);
    }
  
    const prevArrow = document.querySelector(".prev");
    const nextArrow = document.querySelector(".next");
  
    prevArrow.addEventListener("click", showPrevSlide);
    nextArrow.addEventListener("click", showNextSlide);
  
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", function () {
        showTabSlide(index);
      });
    });
  
    // Update slideWidth when the window is resized
    window.addEventListener("resize", function () {
      slideWidth = slides[0].clientWidth;
      showSlide(activeIndex); // Ensure correct slide is displayed on resize
    });
  });
  