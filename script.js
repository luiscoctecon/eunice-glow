// JavaScript for animations and interactions
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);

        // Observe all animated elements
        document.querySelectorAll('.animate-slide-up, .animate-fade-in').forEach(el => {
            observer.observe(el);
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Mobile Menu Functionality
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileMenuIcon = mobileMenuBtn.querySelector('i');
        let isMenuOpen = false;

        function toggleMobileMenu() {
            isMenuOpen = !isMenuOpen;
            mobileMenu.classList.toggle('hidden');
            document.body.classList.toggle('overflow-hidden');
            mobileMenuIcon.classList.toggle('fa-bars');
            mobileMenuIcon.classList.toggle('fa-times');
        }

        mobileMenuBtn.addEventListener('click', toggleMobileMenu);

        // Close mobile menu when clicking a link
        document.querySelectorAll('#mobileMenu a').forEach(link => {
            link.addEventListener('click', () => {
                if (isMenuOpen) {
                    toggleMobileMenu();
                }
            });
        });

        // Add click handlers to CTA buttons
        


  
  
  // Initialize About Swiper
document.addEventListener('DOMContentLoaded', function() {
    const aboutSwiper = new Swiper('.aboutSwiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'fade',
    speed: 1000,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    });
});



//heat protector 

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'eyf6fx-fu.myshopify.com',
      storefrontAccessToken: '3768e3aa0c990cd25c93de476895152e',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '9850646626621',
        node: document.getElementById('product-component-1756993139235'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "carousel-button": {
          "display": "none"
        }
      },
      "title": {
        "font-family": "Droid Serif, serif",
        "color": "#ffffff"
      },
      "button": {
        "font-family": "Droid Serif, serif",
        "font-weight": "bold",
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px",
        "color": "#000000",
        ":hover": {
          "color": "#000000",
          "background-color": "#e6e6e6"
        },
        "background-color": "#ffffff",
        ":focus": {
          "background-color": "#e6e6e6"
        },
        "border-radius": "10px",
        "padding-left": "64px",
        "padding-right": "64px"
      },
      "quantityInput": {
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px"
      },
      "price": {
        "color": "#ffffff"
      },
      "compareAt": {
        "color": "#ffffff"
      },
      "unitPrice": {
        "color": "#ffffff"
      },
      "description": {
        "font-family": "PT Serif, serif",
        "color": "#ffffff"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "options": false
    },
    "text": {
      "button": "View product"
    },
    "googleFonts": [
      "Droid Serif",
      "PT Serif"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-family": "Droid Serif, serif",
        "font-weight": "bold",
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px",
        "color": "#000000",
        ":hover": {
          "color": "#000000",
          "background-color": "#e6e6e6"
        },
        "background-color": "#ffffff",
        ":focus": {
          "background-color": "#e6e6e6"
        },
        "border-radius": "10px",
        "padding-left": "64px",
        "padding-right": "64px"
      },
      "quantityInput": {
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px"
      },
      "title": {
        "font-family": "PT Serif, serif",
        "font-weight": "bold",
        "font-size": "26px",
        "color": "#fdfdfd"
      },
      "price": {
        "font-family": "PT Serif, serif",
        "font-weight": "bold",
        "font-size": "18px",
        "color": "#ffffff"
      },
      "compareAt": {
        "font-family": "PT Serif, serif",
        "font-weight": "bold",
        "font-size": "15.299999999999999px",
        "color": "#ffffff"
      },
      "unitPrice": {
        "font-family": "PT Serif, serif",
        "font-weight": "bold",
        "font-size": "15.299999999999999px",
        "color": "#ffffff"
      },
      "description": {
        "font-family": "PT Serif, serif",
        "font-weight": "normal",
        "font-size": "14px",
        "color": "#ffffff"
      }
    },
    "googleFonts": [
      "PT Serif",
      "Droid Serif"
    ],
    "text": {
      "button": "Add to cart"
    }
  },
  "modal": {
    "styles": {
      "modal": {
        "background-color": "#000000"
      }
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-family": "Droid Serif, serif",
        "font-weight": "bold",
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px",
        "color": "#000000",
        ":hover": {
          "color": "#000000",
          "background-color": "#e6e6e6"
        },
        "background-color": "#ffffff",
        ":focus": {
          "background-color": "#e6e6e6"
        },
        "border-radius": "10px"
      },
      "title": {
        "color": "#000000"
      },
      "header": {
        "color": "#000000"
      },
      "lineItems": {
        "color": "#000000"
      },
      "subtotalText": {
        "color": "#000000"
      },
      "subtotal": {
        "color": "#000000"
      },
      "notice": {
        "color": "#000000"
      },
      "currency": {
        "color": "#000000"
      },
      "close": {
        "color": "#000000",
        ":hover": {
          "color": "#000000"
        }
      },
      "empty": {
        "color": "#000000"
      },
      "noteDescription": {
        "color": "#000000"
      },
      "discountText": {
        "color": "#000000"
      },
      "discountIcon": {
        "fill": "#000000"
      },
      "discountAmount": {
        "color": "#000000"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Let's Nourish That Hair!"
    },
    "googleFonts": [
      "Droid Serif"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Droid Serif, serif",
        "font-weight": "bold",
        "background-color": "#ffffff",
        ":hover": {
          "background-color": "#e6e6e6"
        },
        ":focus": {
          "background-color": "#e6e6e6"
        }
      },
      "count": {
        "font-size": "14px",
        "color": "#000000",
        ":hover": {
          "color": "#000000"
        }
      },
      "iconPath": {
        "fill": "#000000"
      }
    },
    "googleFonts": [
      "Droid Serif"
    ]
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#000000"
      },
      "title": {
        "color": "#000000"
      },
      "price": {
        "color": "#000000"
      },
      "fullPrice": {
        "color": "#000000"
      },
      "discount": {
        "color": "#000000"
      },
      "discountIcon": {
        "fill": "#000000"
      },
      "quantity": {
        "color": "#000000"
      },
      "quantityIncrement": {
        "color": "#000000",
        "border-color": "#000000"
      },
      "quantityDecrement": {
        "color": "#000000",
        "border-color": "#000000"
      },
      "quantityInput": {
        "color": "#000000",
        "border-color": "#000000"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/


//oil 

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'eyf6fx-fu.myshopify.com',
      storefrontAccessToken: '3768e3aa0c990cd25c93de476895152e',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '9850645643581',
        node: document.getElementById('product-component-1756993292886'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "carousel-button": {
          "display": "none"
        }
      },
      "title": {
        "font-family": "Droid Serif, serif",
        "color": "#ffffff"
      },
      "button": {
        "font-family": "Droid Serif, serif",
        "font-weight": "bold",
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px",
        "color": "#000000",
        ":hover": {
          "color": "#000000",
          "background-color": "#e6e6e6"
        },
        "background-color": "#ffffff",
        ":focus": {
          "background-color": "#e6e6e6"
        },
        "border-radius": "10px",
        "padding-left": "64px",
        "padding-right": "64px"
      },
      "quantityInput": {
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px"
      },
      "price": {
        "color": "#ffffff"
      },
      "compareAt": {
        "color": "#ffffff"
      },
      "unitPrice": {
        "color": "#ffffff"
      },
      "description": {
        "font-family": "PT Serif, serif",
        "color": "#ffffff"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "options": false
    },
    "text": {
      "button": "View product"
    },
    "googleFonts": [
      "Droid Serif",
      "PT Serif"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-family": "Droid Serif, serif",
        "font-weight": "bold",
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px",
        "color": "#000000",
        ":hover": {
          "color": "#000000",
          "background-color": "#e6e6e6"
        },
        "background-color": "#ffffff",
        ":focus": {
          "background-color": "#e6e6e6"
        },
        "border-radius": "10px",
        "padding-left": "64px",
        "padding-right": "64px"
      },
      "quantityInput": {
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px"
      },
      "title": {
        "font-family": "PT Serif, serif",
        "font-weight": "bold",
        "font-size": "26px",
        "color": "#fdfdfd"
      },
      "price": {
        "font-family": "PT Serif, serif",
        "font-weight": "bold",
        "font-size": "18px",
        "color": "#ffffff"
      },
      "compareAt": {
        "font-family": "PT Serif, serif",
        "font-weight": "bold",
        "font-size": "15.299999999999999px",
        "color": "#ffffff"
      },
      "unitPrice": {
        "font-family": "PT Serif, serif",
        "font-weight": "bold",
        "font-size": "15.299999999999999px",
        "color": "#ffffff"
      },
      "description": {
        "font-family": "PT Serif, serif",
        "font-weight": "normal",
        "font-size": "14px",
        "color": "#ffffff"
      }
    },
    "googleFonts": [
      "PT Serif",
      "Droid Serif"
    ],
    "text": {
      "button": "Add to cart"
    }
  },
  "modal": {
    "styles": {
      "modal": {
        "background-color": "#000000"
      }
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-family": "Droid Serif, serif",
        "font-weight": "bold",
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px",
        "color": "#000000",
        ":hover": {
          "color": "#000000",
          "background-color": "#e6e6e6"
        },
        "background-color": "#ffffff",
        ":focus": {
          "background-color": "#e6e6e6"
        },
        "border-radius": "10px"
      },
      "title": {
        "color": "#000000"
      },
      "header": {
        "color": "#000000"
      },
      "lineItems": {
        "color": "#000000"
      },
      "subtotalText": {
        "color": "#000000"
      },
      "subtotal": {
        "color": "#000000"
      },
      "notice": {
        "color": "#000000"
      },
      "currency": {
        "color": "#000000"
      },
      "close": {
        "color": "#000000",
        ":hover": {
          "color": "#000000"
        }
      },
      "empty": {
        "color": "#000000"
      },
      "noteDescription": {
        "color": "#000000"
      },
      "discountText": {
        "color": "#000000"
      },
      "discountIcon": {
        "fill": "#000000"
      },
      "discountAmount": {
        "color": "#000000"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Let's Nourish That Hair!"
    },
    "googleFonts": [
      "Droid Serif"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Droid Serif, serif",
        "font-weight": "bold",
        "background-color": "#ffffff",
        ":hover": {
          "background-color": "#e6e6e6"
        },
        ":focus": {
          "background-color": "#e6e6e6"
        }
      },
      "count": {
        "font-size": "14px",
        "color": "#000000",
        ":hover": {
          "color": "#000000"
        }
      },
      "iconPath": {
        "fill": "#000000"
      }
    },
    "googleFonts": [
      "Droid Serif"
    ]
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#000000"
      },
      "title": {
        "color": "#000000"
      },
      "price": {
        "color": "#000000"
      },
      "fullPrice": {
        "color": "#000000"
      },
      "discount": {
        "color": "#000000"
      },
      "discountIcon": {
        "fill": "#000000"
      },
      "quantity": {
        "color": "#000000"
      },
      "quantityIncrement": {
        "color": "#000000",
        "border-color": "#000000"
      },
      "quantityDecrement": {
        "color": "#000000",
        "border-color": "#000000"
      },
      "quantityInput": {
        "color": "#000000",
        "border-color": "#000000"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

//twisty

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'eyf6fx-fu.myshopify.com',
      storefrontAccessToken: '3768e3aa0c990cd25c93de476895152e',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '9862845989181',
        node: document.getElementById('product-component-1756993522203'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "carousel-button": {
          "display": "none"
        }
      },
      "title": {
        "font-family": "Droid Serif, serif",
        "color": "#ffffff"
      },
      "button": {
        "font-family": "Droid Serif, serif",
        "font-weight": "bold",
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px",
        "color": "#000000",
        ":hover": {
          "color": "#000000",
          "background-color": "#e6e6e6"
        },
        "background-color": "#ffffff",
        ":focus": {
          "background-color": "#e6e6e6"
        },
        "border-radius": "10px",
        "padding-left": "64px",
        "padding-right": "64px"
      },
      "quantityInput": {
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px"
      },
      "price": {
        "color": "#ffffff"
      },
      "compareAt": {
        "color": "#ffffff"
      },
      "unitPrice": {
        "color": "#ffffff"
      },
      "description": {
        "font-family": "PT Serif, serif",
        "color": "#ffffff"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "options": false
    },
    "text": {
      "button": "View product"
    },
    "googleFonts": [
      "Droid Serif",
      "PT Serif"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-family": "Droid Serif, serif",
        "font-weight": "bold",
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px",
        "color": "#000000",
        ":hover": {
          "color": "#000000",
          "background-color": "#e6e6e6"
        },
        "background-color": "#ffffff",
        ":focus": {
          "background-color": "#e6e6e6"
        },
        "border-radius": "10px",
        "padding-left": "64px",
        "padding-right": "64px"
      },
      "quantityInput": {
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px"
      },
      "title": {
        "font-family": "PT Serif, serif",
        "font-weight": "bold",
        "font-size": "26px",
        "color": "#fdfdfd"
      },
      "price": {
        "font-family": "PT Serif, serif",
        "font-weight": "bold",
        "font-size": "18px",
        "color": "#ffffff"
      },
      "compareAt": {
        "font-family": "PT Serif, serif",
        "font-weight": "bold",
        "font-size": "15.299999999999999px",
        "color": "#ffffff"
      },
      "unitPrice": {
        "font-family": "PT Serif, serif",
        "font-weight": "bold",
        "font-size": "15.299999999999999px",
        "color": "#ffffff"
      },
      "description": {
        "font-family": "PT Serif, serif",
        "font-weight": "normal",
        "font-size": "14px",
        "color": "#ffffff"
      }
    },
    "googleFonts": [
      "PT Serif",
      "Droid Serif"
    ],
    "text": {
      "button": "Add to cart"
    }
  },
  "modal": {
    "styles": {
      "modal": {
        "background-color": "#000000"
      }
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-family": "Droid Serif, serif",
        "font-weight": "bold",
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px",
        "color": "#000000",
        ":hover": {
          "color": "#000000",
          "background-color": "#e6e6e6"
        },
        "background-color": "#ffffff",
        ":focus": {
          "background-color": "#e6e6e6"
        },
        "border-radius": "10px"
      },
      "title": {
        "color": "#000000"
      },
      "header": {
        "color": "#000000"
      },
      "lineItems": {
        "color": "#000000"
      },
      "subtotalText": {
        "color": "#000000"
      },
      "subtotal": {
        "color": "#000000"
      },
      "notice": {
        "color": "#000000"
      },
      "currency": {
        "color": "#000000"
      },
      "close": {
        "color": "#000000",
        ":hover": {
          "color": "#000000"
        }
      },
      "empty": {
        "color": "#000000"
      },
      "noteDescription": {
        "color": "#000000"
      },
      "discountText": {
        "color": "#000000"
      },
      "discountIcon": {
        "fill": "#000000"
      },
      "discountAmount": {
        "color": "#000000"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Let's Nourish That Hair!"
    },
    "googleFonts": [
      "Droid Serif"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Droid Serif, serif",
        "font-weight": "bold",
        "background-color": "#ffffff",
        ":hover": {
          "background-color": "#e6e6e6"
        },
        ":focus": {
          "background-color": "#e6e6e6"
        }
      },
      "count": {
        "font-size": "14px",
        "color": "#000000",
        ":hover": {
          "color": "#000000"
        }
      },
      "iconPath": {
        "fill": "#000000"
      }
    },
    "googleFonts": [
      "Droid Serif"
    ]
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#000000"
      },
      "title": {
        "color": "#000000"
      },
      "price": {
        "color": "#000000"
      },
      "fullPrice": {
        "color": "#000000"
      },
      "discount": {
        "color": "#000000"
      },
      "discountIcon": {
        "fill": "#000000"
      },
      "quantity": {
        "color": "#000000"
      },
      "quantityIncrement": {
        "color": "#000000",
        "border-color": "#000000"
      },
      "quantityDecrement": {
        "color": "#000000",
        "border-color": "#000000"
      },
      "quantityInput": {
        "color": "#000000",
        "border-color": "#000000"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/