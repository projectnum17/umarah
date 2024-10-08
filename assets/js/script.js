'use strict';
console.log('test');
document.addEventListener('DOMContentLoaded', () => {
    function initSlider(selector, config) {
        return new Swiper(selector, {
            loop: config.loop || true,
            speed: config.speed || 2000,
            spaceBetween: config.spaceBetween || 0,
            slidesPerView: config.slidesPerView || 1,
            grabCursor: config.grabCursor !== undefined ? config.grabCursor : true,
            autoplay: config.autoplay
                ? {
                      delay: config.autoplayDelay || 3000,
                      disableOnInteraction: config.disableOnInteraction || true,
                  }
                : false,
            navigation: config.navigation || {},
            pagination: config.pagination || {},
            breakpoints: config.breakpoints || {},
        });
    }
    
    const mainPageHeroSliderConfig = {
        autoplay: true,
        pagination: {
            el: '.custom--pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.page--home .hero .btn--next',
            prevEl: '.page--home .hero .btn--prev',
        },
    };
    
    const newsSliderConfig = {
        autoplay: true,
        spaceBetween: 32,
        slidesPerView: 3,
        pagination: {
            el: '.news-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.news-block .news--next',
            prevEl: '.news-block .news--prev',
        },
        breakpoints: {
            992: {
                spaceBetween: 32,
                slidesPerView: 3,
            },
            768: {
                spaceBetween: 20,
                slidesPerView: 2,
            },
    
            320: {
                spaceBetween: 15,
                slidesPerView: 1,
            },
        },
    };
    // const factoriesSliderConfig = {
    //     centeredSlides: true,
    //     autoplay: true,
    //     spaceBetween: 0,
    //     pagination: {
    //         el: '.factories-pagination',
    //         clickable: true,
    //     },
    //     navigation: {
    //         nextEl: '.factories .factories--next',
    //         prevEl: '.factories .factories--prev',
    //     },
    //     breakpoints: {
    //         992: {
    //             slidesPerView: 3,
    //         },
    //         768: {
    //             centeredSlides: false,
    //             slidesPerView: 1,
    //         },
    
    //         320: {
    //             slidesPerView: 1,
    //         },
    //     },
    // };
    
    const techGalleryConfig = {
        autoplay: true,
        spaceBetween: 32,
        autoplayDelay: 5000,
        slidesPerView: 1.5,
        pagination: {
            el: '.gallery-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.gallerytech .gallery--next',
            prevEl: '.gallerytech .gallery--prev',
        },
        breakpoints: {
            992: {
                slidesPerView: 1.5,
                spaceBetween: 32,
            },
            768: {
                spaceBetween: 20,
                slidesPerView: 1.5,
            },
    
            320: {
                spaceBetween: 15,
                slidesPerView: 1,
            },
        },
    };
    
    const aboutGalleryConfig = {
        autoplay: true,
        spaceBetween: 32,
        autoplayDelay: 5000,
        slidesPerView: 1.5,
        pagination: {
            el: '.about--gallerytech-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.about--gallerytech .about--gallerytech--next',
            prevEl: '.about--gallerytech .about--gallerytech--prev',
        },
        breakpoints: {
            992: {
                slidesPerView: 1.5,
                spaceBetween: 32,
            },
            768: {
                spaceBetween: 20,
                slidesPerView: 1.5,
            },
    
            320: {
                spaceBetween: 15,
                slidesPerView: 1,
            },
        },
    };
    
    const projectsGalleryConfig = {
        autoplay: true,
        spaceBetween: 32,
        autoplayDelay: 5000,
        slidesPerView: 1,
        pagination: {
            el: '.projects-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.projects .projects--next',
            prevEl: '.projects .projects--prev',
        },
        breakpoints: {
            992: {
                spaceBetween: 32,
            },
            768: {
                spaceBetween: 20,
            },
    
            320: {
                spaceBetween: 15,
            },
        },
    };
    
    const mainPageHeroSlider = initSlider(
        '.hero__slider',
        mainPageHeroSliderConfig
    );
    const newsSlider = initSlider('.news-block', newsSliderConfig);
    
    const techGallerySlider = initSlider('.gallerytech__slider', techGalleryConfig);
    
    const aboutGallerySlider = initSlider(
        '.about--gallerytech__slider',
        aboutGalleryConfig
    );
    
    const projectsGallerySlider = initSlider(
        '.projects__gallery',
        projectsGalleryConfig
    );
    
    // const factoriesSlider = initSlider(
    //     '.factories__gallery',
    //     factoriesSliderConfig
    // );
    
    const factoriesSlider = new Swiper('.factories__gallery', {
        centeredSlides: true,
        loop: true,
        speed: 2000,
        grabCursor: true,
        // slidesPerView: 1.5,
        // spaceBetween: 40,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        pagination: {
            el: '.factories-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.factories .factories--next',
            prevEl: '.factories .factories--prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2.5,
            },
            1280: {
                slidesPerView: 2.5,
            },
        },
    });
    const header = document.getElementById('header'),
        dropdownParent = document.querySelector('#dropdownParent'),
        dropdownItems = document.querySelector('#dropdownItems'),
        currentLang = document.querySelector('#currentLang'),
        langItems = document.querySelectorAll('.lang-dropdown__item'),
        mobileLangItems = document.querySelectorAll(
            '.mobile-menu .mobile__lang-item'
        ),
        menuToggle = document.querySelector('.menu-toggle');
    
    let isHidden = false,
        lastScrollTop = 0;
    
    // Scroll event to handle header visibility and scroll effects
    function handleScroll() {
        const currentScrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
    
        if (currentScrollTop > 200) {
            toggleHeaderVisibility(currentScrollTop);
        } else {
            resetHeader();
        }
        handleHeaderScrollEffect(currentScrollTop);
        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    }
    
    // Toggle header visibility on scroll
    function toggleHeaderVisibility(currentScrollTop) {
        if (currentScrollTop > lastScrollTop) {
            if (!isHidden) {
                header.classList.remove('header-show');
                header.classList.add('header-hide');
                isHidden = true;
                dropdownItems.classList.remove('show');
            }
        } else {
            if (isHidden) {
                header.classList.remove('header-hide');
                header.classList.add('header-show');
                isHidden = false;
            }
        }
    }
    
    // Reset header style when at the top of the page
    function resetHeader() {
        header.className = 'header';
        isHidden = false;
    }
    
    // Add scroll effect to header
    function handleHeaderScrollEffect(currentScrollTop) {
        if (currentScrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    // Toggle dropdown visibility
    function toggleDropdown() {
        dropdownItems.classList.toggle('show');
    }
    
    // Set the selected language and close the dropdown
    function selectLanguage(item) {
        currentLang.textContent = item.textContent;
        langItems.forEach((el) => el.classList.remove('current--lang'));
        item.classList.add('current--lang');
        dropdownItems.classList.remove('show');
    }
    
    // Handle mobile language selection
    function selectMobileLanguage(item) {
        mobileLangItems.forEach((langItem) =>
            langItem.classList.remove('chooseLang')
        );
        item.classList.add('chooseLang');
    }
    
    // Toggle mobile menu visibility
    function toggleMobileMenu() {
        menuToggle.classList.toggle('active');
        const body = document.body;
        const mobileMenu = document.querySelector('.mobile-menu');
    
        if (menuToggle.classList.contains('active')) {
            body.style.overflow = 'hidden';
            mobileMenu.classList.add('show');
        } else {
            body.style.overflow = 'scroll';
            mobileMenu.classList.remove('show');
        }
    }
    
    // Event listeners
    window.addEventListener('scroll', handleScroll);
    dropdownParent.addEventListener('click', toggleDropdown);
    
    langItems.forEach((item) => {
        item.addEventListener('click', (event) => {
            event.stopPropagation();
            selectLanguage(item);
        });
    });
    
    mobileLangItems.forEach((item) => {
        item.addEventListener('click', () => selectMobileLanguage(item));
    });
    
    menuToggle.addEventListener('click', toggleMobileMenu);
    if (document.querySelector('.tech-page')) {
        const tabs = document.querySelectorAll('.tabheader__item'),
            tabsContent = document.querySelectorAll('.tabcontent'),
            tabsParent = document.querySelector('.tabheader__items');
    
        function hideTabContent() {
            tabsContent.forEach((item) => {
                item.classList.add('hide');
                item.classList.remove('show', 'fade');
            });
    
            tabs.forEach((el) => {
                el.classList.remove('tabheader__item--active');
            });
        }
    
        function showTabContent(i = 0) {
            tabsContent[i].classList.add('show', 'fade');
            tabsContent[i].classList.remove('hide');
            tabs[i].classList.add('tabheader__item--active');
        }
    
        hideTabContent();
        showTabContent();
    
        tabsParent.addEventListener('click', (e) => {
            const target = e.target;
    
            if (target && target.classList.contains('tabheader__item')) {
                tabs.forEach((el, i) => {
                    if (target == el) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });
    }
});