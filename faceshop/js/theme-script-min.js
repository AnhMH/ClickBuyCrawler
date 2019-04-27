! function(t) {
    "use strict";

    function e() {
        window.addEventListener("scroll", function() {
            if (0 != document.documentElement.scrollTop || 0 != document.body.scrollTop)
                for (var t = document.getElementsByTagName("img"), e = 0; e < t.length; e++) t[e].getAttribute("data-src") && t[e].setAttribute("src", t[e].getAttribute("data-src"))
        })
    }

    function n() {
        var e = parseInt(t(".container").innerWidth()),
            n = parseInt(t(".vertical-menu-content").width());
        t(".vertical-menu-content").find(".vertical-dropdown-menu").each(function() {
            t(this).width(e - n - 2)
        })
    }

    function a() {
        var e = parseInt(t(window).width());
        768 > e && (t("#nav-top-menu").removeClass("nav-ontop"), t("body").hasClass("home") && (e > 1024 ? t("#nav-top-menu").find(".vertical-menu-content").show() : t("#nav-top-menu").find(".vertical-menu-content").hide()), t("#shopping-cart-box-ontop .cart-block").appendTo("#cart-block"), t("#shopping-cart-box-ontop").fadeOut(), t("#user-info-opntop #user-info-top").appendTo(".top-header .container"))
    }

    function o() {
        var t = document.createElement("p");
        t.style.width = "100%", t.style.height = "200px";
        var e = document.createElement("div");
        e.style.position = "absolute", e.style.top = "0px", e.style.left = "0px", e.style.visibility = "hidden", e.style.width = "200px", e.style.height = "150px", e.style.overflow = "hidden", e.appendChild(t), document.body.appendChild(e);
        var n = parseInt(t.offsetWidth);
        e.style.overflow = "scroll";
        var a = parseInt(t.offsetWidth);
        return n == a && (a = e.clientWidth), document.body.removeChild(e), n - a
    }

    function i() {
        if (t(window).width() + o() >= 768) {
            var e = t("#main-menus .navbar").innerWidth();
            t("#main-menus ul.mega_dropdown").each(function() {
                var n = t(this).innerWidth(),
                    a = t(this).position().left;
                if (n > e) t(this).css("width", e + "px"), t(this).css("left", "0");
                else if (n + a > e) {
                    var o = e - n,
                        i = parseInt(o / 2);
                    t(this).css("left", i)
                }
            })
        }
        t(window).width() + o() < 1025 ? t("#main-menus li.dropdown:not(.active) >a").attr("data-toggle", "dropdown") : t("#main-menus li.dropdown >a").removeAttr("data-toggle")
    }
    t(document).ready(function() {
        e(), t(document).on("click", ".add-to-car", function() {
            var e = t(this).attr("data-variantid"),
                n = parseInt(1),
                a = t(this).data("price"),
                o = t(this).data("image"),
                i = t(this).data("title"),
                s = t(this).data("sku"),
                c = t(this).data("url");
            t.ajax({
                type: "GET",
                url: c + "?view=modal-recommend",
                success: function(e) {
                    t("#modal-product .control-wrapper").html(e)
                }
            });
            var l = {
                type: "POST",
                url: "/cart/add.js",
                data: "quantity=" + n + "&id=" + e,
                dataType: "json",
                success: function() {
                    t.ajax({
                        type: "GET",
                        url: "/cart.js",
                        dataType: "json",
                        success: function(e) {
                            t("#cart-block .notify, #shopping-cart-box-ontop .cart-items-count").html(e.item_count)
                        }
                    }), t.ajax({
                        type: "GET",
                        url: "/cart?view=mini",
                        success: function(e) {
                            t("#shopping-cart-box-ontop .cart-block, #cart-block .cart-block").html(e)
                        }
                    }), t("#modal-product .modal-quantity").html("Số lượng: " + n), t("#modal-product .price-new").html(Haravan.formatMoney(a, "{{amount}}₫")), t("#modal-product .modal-price").html(Haravan.formatMoney(a * n, "{{amount}}₫")), t("#modal-product .product-info h3").html(i), t("#modal-product .modal-sku").html("Mã sản phẩm: " + s), t("#modal-product .product-pic img").attr("src", o), t(".btn-trigger-product").trigger("click")
                },
                error: function(t, e) {
                    Haravan.onError(t, e)
                }
            };
            jQuery.ajax(l)
        })  , t("#nav-menu").mmenu(), t(".logo .mm-icon-menu").click(function() {
            t("#nav-menu").removeClass("hidden")
        }), t(".show-search-mobile").click(function() {
            t(this).parents(".header-search-box").find(".search-box").slideToggle()
        }), t(".category-featured ul.navbar-nav li a").click(function() {
            var n = t(this),
                a = n.data("handle"),
                o = n.attr("data-check"),
                i = a.substring(a.length - 1, a.length),
                s = n.attr("href");
            "true" == o && t.ajax({
                url: "/collections/" + a,
                success: function(a) {
                    1 == i ? (t(s + " .product-list").html(a), n.attr("data-check", "false")) : (t(s).append(a), n.attr("data-check", "false")), e()
                }
            })
        }), t("#product-detail .des").css("height", t("#product-detail .des").height() / 2), t(".show-more").click(function() {
            t("#product-detail .des").removeAttr("style"), t(this).remove()
        })
    }), t(window).load(function() {
        n(), i()
    }), t(document).ready(function() {
        t('[data-toggle="tooltip"]').tooltip(), i();
        try {
            t(".owl-carousel").each(function() {
                var e = t(this).data();
                e.lazyload && (e.lazyLoad = !0), e.navText = ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'], e.smartSpeed = "300", t(this).hasClass("owl-style2") && (e.animateOut = "fadeOut", e.animateIn = "fadeIn"), t(this).owlCarousel(e)
            })
        } catch (e) {
            console.log(e)
        }
        t(".owl-carousel-vertical").each(function() {
            var e = t(this).data();
            e.navText = ['<span class="icon-up"></spam>', '<span class="icon-down"></span>'], e.smartSpeed = "900", e.animateOut = "", e.animateIn = "fadeInUp", t(this).owlCarousel(e)
        }), t(document).on("click", ".btn-close", function() {
            return t(this).closest(".top-banner").animate({
                height: 0,
                opacity: 0
            }, 1e3), !1
        }), t(document).on("click", ".toggle-menu", function() {
            return t(this).closest(".nav-menu").find(".navbar-collapse").toggle(), !1
        }), t(document).on("click", "a.btn-elevator", function(e) {
            e.preventDefault();
            var n = this.hash;
            if (t(document).find(n).length <= 0) return !1;
            var a = t(n);
            return t("html, body").stop().animate({
                scrollTop: a.offset().top - 50
            }, 500), !1
        }), t(document).on("click", ".scroll_top", function() {
            return t("body,html").animate({
                scrollTop: 0
            }, 400), !1
        }), t(document).on("click", ".brand-showcase-logo li", function() {
            var e = t(this).data("tab");
            return t(this).closest(".brand-showcase-logo").find("li").each(function() {
                t(this).removeClass("active")
            }), t(this).closest("li").addClass("active"), t(".brand-showcase-content").find(".brand-showcase-content-tab").each(function() {
                t(this).removeClass("active")
            }), t("#" + e).addClass("active"), !1
        }), t(".slider-range-price").each(function() {
            var e = t(this).data("min"),
                n = t(this).data("max"),
                a = t(this).data("unit"),
                o = t(this).data("value-min"),
                i = t(this).data("value-max"),
                s = t(this).data("label-reasult"),
                c = t(this);
            t(this).slider({
                range: !0,
                min: e,
                max: n,
                values: [o, i],
                slide: function(t, e) {
                    var n = s + " " + a + e.values[0] + " - " + a + e.values[1];
                    console.log(c), c.closest(".slider-range").find(".amount-range-price").html(n)
                }
            })
        }), t(document).on("click", ".open-cate", function() {
            t(this).closest(".vertical-menu-content").find("li.cat-link-orther").each(function() {
                t(this).slideDown()
            }), t(this).addClass("colse-cate").removeClass("open-cate").html("Close")
        }), t(document).on("click", ".colse-cate", function() {
            return t(this).closest(".vertical-menu-content").find("li.cat-link-orther").each(function() {
                t(this).slideUp()
            }), t(this).addClass("open-cate").removeClass("colse-cate").html("All Categories"), !1
        }), t(document).on("click", ".vertical-megamenus-ontop-bar", function() {
            return t("#vertical-megamenus-ontop").find(".box-vertical-megamenus").slideToggle(), t("#vertical-megamenus-ontop").toggleClass("active"), !1
        }), t(document).on("click", ".display-product-option .view-as-grid", function() {
            return t(this).closest(".display-product-option").find("li").removeClass("selected"), t(this).addClass("selected"), t(this).closest("#view-product-list").find(".product-list").removeClass("list").addClass("grid"), !1
        }), t(document).on("click", ".display-product-option .view-as-list", function() {
            return t(this).closest(".display-product-option").find("li").removeClass("selected"), t(this).addClass("selected"), t(this).closest("#view-product-list").find(".product-list").removeClass("grid").addClass("list"), !1
        }), t(document).on("click", ".tree-menu li span", function() {
            return t(this).closest("li").children("ul").slideToggle(), t(this).closest("li").haschildren("ul") && t(this).toggleClass("open"), !1
        }), t(document).on("click", ".click-menu", function() {
            t(window).width();
            return t(this).parents(".box-vertical-megamenus").find(".vertical-menu-content").slideToggle(), t(this).toggleClass("active"), !1
        }), t(document).on("click", ".btn-plus-down", function() {
            var e = parseInt(t("#option-product-qty").val());
            return e -= 1, 0 >= e ? !1 : (t("#option-product-qty").val(e), !1)
        }), t(document).on("click", ".btn-plus-up", function() {
            var e = parseInt(t("#option-product-qty").val());
            return e += 1, 0 >= e ? !1 : (t("#option-product-qty").val(e), !1)
        }), t(document).on("click", "*", function(e) {
            var n = t("#box-vertical-megamenus");
            if (!n.is(e.target) && 0 === n.has(e.target).length) {
                if (t("body").hasClass("home") && !t("#nav-top-menu").hasClass("nav-ontop")) return;
                n.find(".vertical-menu-content").hide(), n.find(".title").removeClass("active")
            }
        }), t(document).on("click", "#btn-send-contact", function() {
            var e = t("#subject").val(),
                n = t("#email").val(),
                a = t("#order_reference").val(),
                o = t("#message").val(),
                i = {
                    subject: e,
                    email: n,
                    order_reference: a,
                    message: o
                };
            t.post("ajax_contact.php", i, function(e) {
                "done" == e.trim() ? (t("#email").val(""), t("#order_reference").val(""), t("#message").val(""), t("#message-box-conact").html('<div class="alert alert-info">Your message was sent successfully. Thanks</div>')) : t("#message-box-conact").html(e)
            })
        })
    }), t(window).resize(function() {
        n(), a(), i()
    }), t(window).scroll(function() {
        i(), 0 == t(window).scrollTop() ? t(".scroll_top").stop(!1, !0).fadeOut(600) : t(".scroll_top").stop(!1, !0).fadeIn(600);
        var e = t(window).scrollTop(),
            n = t("#header").height() + t("#top-banner").height() + t(".banner-top").height(),
            a = t(window).width(),
            o = t("#box-vertical-megamenus .box-vertical-megamenus").innerHeight();
        a > 767 && (e > n + o - 50 ? t("#nav-top-menu").addClass("nav-ontop") : (t("#nav-top-menu").removeClass("nav-ontop"), t("body").hasClass("home") && (t("#nav-top-menu").find(".vertical-menu-content").removeAttr("style"), a > 1024 ? t("#nav-top-menu").find(".vertical-menu-content").show() : t("#nav-top-menu").find(".vertical-menu-content").hide(), t("#nav-top-menu").find(".vertical-menu-content").removeAttr("style"))))
    })
}(jQuery);
