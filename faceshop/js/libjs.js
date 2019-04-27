function floatToString(e, t) {
    var n = e.toFixed(t).toString();
    return n.replace(".", Haravan.decimal), n.match("^[." + Haravan.decimal + "]d+") ? "0" + n : n
}

function floatToString(e, t) {
    var n = e.toFixed(t).toString();
    return n.replace(".", Haravan.decimal), n.match("^[." + Haravan.decimal + "]d+") ? "0" + n : n
}

function attributeToString(e) {
    return "string" != typeof e && (e += "", "undefined" === e && (e = "")), jQuery.trim(e)
}

function lazy(e) {
    function t(e, t) {
        var n = new Image,
            i = e.getAttribute("data-src");
        n.onload = function() {
            e.parent ? e.parent.replaceChild(n, e) : e.src = i, t ? t() : null
        }, n.src = i
    }

    function n(t) {
        var n = t.getBoundingClientRect();
        return n.top >= 0 && n.left >= 0 && n.top <= (e.innerHeight || document.documentElement.clientHeight)
    }
    for (var i = function(e, t) {
            if (document.querySelectorAll) t = document.querySelectorAll(e);
            else {
                var n = document,
                    i = n.styleSheets[0] || n.createStyleSheet();
                i.addRule(e, "f:b");
                for (var s = n.all, a = 0, r = [], o = s.length; o > a; a++) s[a].currentStyle.f && r.push(s[a]);
                i.removeRule(0), t = r
            }
            return t
        }, s = function(t, n) {
            e.addEventListener ? this.addEventListener(t, n, !1) : e.attachEvent ? this.attachEvent("on" + t, n) : this["on" + t] = n
        }, a = new Array, r = i("img.lazy"), o = function() {
            for (var e = 0; e < a.length; e++) n(a[e]) && t(a[e], function() {
                a.splice(e, e)
            })
        }, l = 0; l < r.length; l++) a.push(r[l]);
    o(), s("scroll", o), s("touchmove", o)
}
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
if (+ function(e) {
        "use strict";
        var t = e.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
    }(jQuery), + function(e) {
        "use strict";

        function t() {
            var e = document.createElement("bootstrap"),
                t = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var n in t)
                if (void 0 !== e.style[n]) return {
                    end: t[n]
                };
            return !1
        }
        e.fn.emulateTransitionEnd = function(t) {
            var n = !1,
                i = this;
            e(this).one("bsTransitionEnd", function() {
                n = !0
            });
            var s = function() {
                n || e(i).trigger(e.support.transition.end)
            };
            return setTimeout(s, t), this
        }, e(function() {
            e.support.transition = t(), e.support.transition && (e.event.special.bsTransitionEnd = {
                bindType: e.support.transition.end,
                delegateType: e.support.transition.end,
                handle: function(t) {
                    return e(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0
                }
            })
        })
    }(jQuery), + function(e) {
        "use strict";

        function t(t) {
            return this.each(function() {
                var n = e(this),
                    s = n.data("bs.alert");
                s || n.data("bs.alert", s = new i(this)), "string" == typeof t && s[t].call(n)
            })
        }
        var n = '[data-dismiss="alert"]',
            i = function(t) {
                e(t).on("click", n, this.close)
            };
        i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.prototype.close = function(t) {
            function n() {
                r.detach().trigger("closed.bs.alert").remove()
            }
            var s = e(this),
                a = s.attr("data-target");
            a || (a = s.attr("href"), a = a && a.replace(/.*(?=#[^\s]*$)/, ""));
            var r = e(a);
            t && t.preventDefault(), r.length || (r = s.closest(".alert")), r.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (r.removeClass("in"), e.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
        };
        var s = e.fn.alert;
        e.fn.alert = t, e.fn.alert.Constructor = i, e.fn.alert.noConflict = function() {
            return e.fn.alert = s, this
        }, e(document).on("click.bs.alert.data-api", n, i.prototype.close)
    }(jQuery), + function(e) {
        "use strict";

        function t(t) {
            return this.each(function() {
                var i = e(this),
                    s = i.data("bs.button"),
                    a = "object" == typeof t && t;
                s || i.data("bs.button", s = new n(this, a)), "toggle" == t ? s.toggle() : t && s.setState(t)
            })
        }
        var n = function(t, i) {
            this.$element = e(t), this.options = e.extend({}, n.DEFAULTS, i), this.isLoading = !1
        };
        n.VERSION = "3.3.6", n.DEFAULTS = {
            loadingText: "loading..."
        }, n.prototype.setState = function(t) {
            var n = "disabled",
                i = this.$element,
                s = i.is("input") ? "val" : "html",
                a = i.data();
            t += "Text", null == a.resetText && i.data("resetText", i[s]()), setTimeout(e.proxy(function() {
                i[s](null == a[t] ? this.options[t] : a[t]), "loadingText" == t ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
            }, this), 0)
        }, n.prototype.toggle = function() {
            var e = !0,
                t = this.$element.closest('[data-toggle="buttons"]');
            if (t.length) {
                var n = this.$element.find("input");
                "radio" == n.prop("type") ? (n.prop("checked") && (e = !1), t.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (e = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), e && n.trigger("change")
            } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
        };
        var i = e.fn.button;
        e.fn.button = t, e.fn.button.Constructor = n, e.fn.button.noConflict = function() {
            return e.fn.button = i, this
        }, e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
            var i = e(n.target);
            i.hasClass("btn") || (i = i.closest(".btn")), t.call(i, "toggle"), e(n.target).is('input[type="radio"]') || e(n.target).is('input[type="checkbox"]') || n.preventDefault()
        }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
            e(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
        })
    }(jQuery), + function(e) {
        "use strict";

        function t(t) {
            return this.each(function() {
                var i = e(this),
                    s = i.data("bs.carousel"),
                    a = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t),
                    r = "string" == typeof t ? t : a.slide;
                s || i.data("bs.carousel", s = new n(this, a)), "number" == typeof t ? s.to(t) : r ? s[r]() : a.interval && s.pause().cycle()
            })
        }
        var n = function(t, n) {
            this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this))
        };
        n.VERSION = "3.3.6", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
            interval: 5e3,
            pause: "hover",
            wrap: !0,
            keyboard: !0
        }, n.prototype.keydown = function(e) {
            if (!/input|textarea/i.test(e.target.tagName)) {
                switch (e.which) {
                    case 37:
                        this.prev();
                        break;
                    case 39:
                        this.next();
                        break;
                    default:
                        return
                }
                e.preventDefault()
            }
        }, n.prototype.cycle = function(t) {
            return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
        }, n.prototype.getItemIndex = function(e) {
            return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active)
        }, n.prototype.getItemForDirection = function(e, t) {
            var n = this.getItemIndex(t),
                i = "prev" == e && 0 === n || "next" == e && n == this.$items.length - 1;
            if (i && !this.options.wrap) return t;
            var s = "prev" == e ? -1 : 1,
                a = (n + s) % this.$items.length;
            return this.$items.eq(a)
        }, n.prototype.to = function(e) {
            var t = this,
                n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
            return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
                t.to(e)
            }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", this.$items.eq(e))
        }, n.prototype.pause = function(t) {
            return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
        }, n.prototype.next = function() {
            return this.sliding ? void 0 : this.slide("next")
        }, n.prototype.prev = function() {
            return this.sliding ? void 0 : this.slide("prev")
        }, n.prototype.slide = function(t, i) {
            var s = this.$element.find(".item.active"),
                a = i || this.getItemForDirection(t, s),
                r = this.interval,
                o = "next" == t ? "left" : "right",
                l = this;
            if (a.hasClass("active")) return this.sliding = !1;
            var c = a[0],
                d = e.Event("slide.bs.carousel", {
                    relatedTarget: c,
                    direction: o
                });
            if (this.$element.trigger(d), !d.isDefaultPrevented()) {
                if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
                    this.$indicators.find(".active").removeClass("active");
                    var p = e(this.$indicators.children()[this.getItemIndex(a)]);
                    p && p.addClass("active")
                }
                var u = e.Event("slid.bs.carousel", {
                    relatedTarget: c,
                    direction: o
                });
                return e.support.transition && this.$element.hasClass("slide") ? (a.addClass(t), a[0].offsetWidth, s.addClass(o), a.addClass(o), s.one("bsTransitionEnd", function() {
                    a.removeClass([t, o].join(" ")).addClass("active"), s.removeClass(["active", o].join(" ")), l.sliding = !1, setTimeout(function() {
                        l.$element.trigger(u)
                    }, 0)
                }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (s.removeClass("active"), a.addClass("active"), this.sliding = !1, this.$element.trigger(u)), r && this.cycle(), this
            }
        };
        var i = e.fn.carousel;
        e.fn.carousel = t, e.fn.carousel.Constructor = n, e.fn.carousel.noConflict = function() {
            return e.fn.carousel = i, this
        };
        var s = function(n) {
            var i, s = e(this),
                a = e(s.attr("data-target") || (i = s.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
            if (a.hasClass("carousel")) {
                var r = e.extend({}, a.data(), s.data()),
                    o = s.attr("data-slide-to");
                o && (r.interval = !1), t.call(a, r), o && a.data("bs.carousel").to(o), n.preventDefault()
            }
        };
        e(document).on("click.bs.carousel.data-api", "[data-slide]", s).on("click.bs.carousel.data-api", "[data-slide-to]", s), e(window).on("load", function() {
            e('[data-ride="carousel"]').each(function() {
                var n = e(this);
                t.call(n, n.data())
            })
        })
    }(jQuery), + function(e) {
        "use strict";

        function t(t) {
            var n, i = t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
            return e(i)
        }

        function n(t) {
            return this.each(function() {
                var n = e(this),
                    s = n.data("bs.collapse"),
                    a = e.extend({}, i.DEFAULTS, n.data(), "object" == typeof t && t);
                !s && a.toggle && /show|hide/.test(t) && (a.toggle = !1), s || n.data("bs.collapse", s = new i(this, a)), "string" == typeof t && s[t]()
            })
        }
        var i = function(t, n) {
            this.$element = e(t), this.options = e.extend({}, i.DEFAULTS, n), this.$trigger = e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
        };
        i.VERSION = "3.3.6", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
            toggle: !0
        }, i.prototype.dimension = function() {
            var e = this.$element.hasClass("width");
            return e ? "width" : "height"
        }, i.prototype.show = function() {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var t, s = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                if (!(s && s.length && (t = s.data("bs.collapse"), t && t.transitioning))) {
                    var a = e.Event("show.bs.collapse");
                    if (this.$element.trigger(a), !a.isDefaultPrevented()) {
                        s && s.length && (n.call(s, "hide"), t || s.data("bs.collapse", null));
                        var r = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                        var o = function() {
                            this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                        };
                        if (!e.support.transition) return o.call(this);
                        var l = e.camelCase(["scroll", r].join("-"));
                        this.$element.one("bsTransitionEnd", e.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[r](this.$element[0][l])
                    }
                }
            }
        }, i.prototype.hide = function() {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var t = e.Event("hide.bs.collapse");
                if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                    var n = this.dimension();
                    this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                    var s = function() {
                        this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                    };
                    return e.support.transition ? void this.$element[n](0).one("bsTransitionEnd", e.proxy(s, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : s.call(this)
                }
            }
        }, i.prototype.toggle = function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }, i.prototype.getParent = function() {
            return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function(n, i) {
                var s = e(i);
                this.addAriaAndCollapsedClass(t(s), s)
            }, this)).end()
        }, i.prototype.addAriaAndCollapsedClass = function(e, t) {
            var n = e.hasClass("in");
            e.attr("aria-expanded", n), t.toggleClass("collapsed", !n).attr("aria-expanded", n)
        };
        var s = e.fn.collapse;
        e.fn.collapse = n, e.fn.collapse.Constructor = i, e.fn.collapse.noConflict = function() {
            return e.fn.collapse = s, this
        }, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
            var s = e(this);
            s.attr("data-target") || i.preventDefault();
            var a = t(s),
                r = a.data("bs.collapse"),
                o = r ? "toggle" : s.data();
            n.call(a, o)
        })
    }(jQuery), + function(e) {
        "use strict";

        function t(t) {
            var n = t.attr("data-target");
            n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
            var i = n && e(n);
            return i && i.length ? i : t.parent()
        }

        function n(n) {
            n && 3 === n.which || (e(s).remove(), e(a).each(function() {
                var i = e(this),
                    s = t(i),
                    a = {
                        relatedTarget: this
                    };
                s.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && e.contains(s[0], n.target) || (s.trigger(n = e.Event("hide.bs.dropdown", a)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), s.removeClass("open").trigger(e.Event("hidden.bs.dropdown", a)))))
            }))
        }

        function i(t) {
            return this.each(function() {
                var n = e(this),
                    i = n.data("bs.dropdown");
                i || n.data("bs.dropdown", i = new r(this)), "string" == typeof t && i[t].call(n)
            })
        }
        var s = ".dropdown-backdrop",
            a = '[data-toggle="dropdown"]',
            r = function(t) {
                e(t).on("click.bs.dropdown", this.toggle)
            };
        r.VERSION = "3.3.6", r.prototype.toggle = function(i) {
            var s = e(this);
            if (!s.is(".disabled, :disabled")) {
                var a = t(s),
                    r = a.hasClass("open");
                if (n(), !r) {
                    "ontouchstart" in document.documentElement && !a.closest(".navbar-nav").length && e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click", n);
                    var o = {
                        relatedTarget: this
                    };
                    if (a.trigger(i = e.Event("show.bs.dropdown", o)), i.isDefaultPrevented()) return;
                    s.trigger("focus").attr("aria-expanded", "true"), a.toggleClass("open").trigger(e.Event("shown.bs.dropdown", o))
                }
                return !1
            }
        }, r.prototype.keydown = function(n) {
            if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
                var i = e(this);
                if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                    var s = t(i),
                        r = s.hasClass("open");
                    if (!r && 27 != n.which || r && 27 == n.which) return 27 == n.which && s.find(a).trigger("focus"), i.trigger("click");
                    var o = " li:not(.disabled):visible a",
                        l = s.find(".dropdown-menu" + o);
                    if (l.length) {
                        var c = l.index(n.target);
                        38 == n.which && c > 0 && c--, 40 == n.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
                    }
                }
            }
        };
        var o = e.fn.dropdown;
        e.fn.dropdown = i, e.fn.dropdown.Constructor = r, e.fn.dropdown.noConflict = function() {
            return e.fn.dropdown = o, this
        }, e(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
            e.stopPropagation()
        }).on("click.bs.dropdown.data-api", a, r.prototype.toggle).on("keydown.bs.dropdown.data-api", a, r.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", r.prototype.keydown)
    }(jQuery), + function(e) {
        "use strict";

        function t(t, i) {
            return this.each(function() {
                var s = e(this),
                    a = s.data("bs.modal"),
                    r = e.extend({}, n.DEFAULTS, s.data(), "object" == typeof t && t);
                a || s.data("bs.modal", a = new n(this, r)), "string" == typeof t ? a[t](i) : r.show && a.show(i)
            })
        }
        var n = function(t, n) {
            this.options = n, this.$body = e(document.body), this.$element = e(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        };
        n.VERSION = "3.3.6", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, n.prototype.toggle = function(e) {
            return this.isShown ? this.hide() : this.show(e)
        }, n.prototype.show = function(t) {
            var i = this,
                s = e.Event("show.bs.modal", {
                    relatedTarget: t
                });
            this.$element.trigger(s), this.isShown || s.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
                i.$element.one("mouseup.dismiss.bs.modal", function(t) {
                    e(t.target).is(i.$element) && (i.ignoreBackdropClick = !0)
                })
            }), this.backdrop(function() {
                var s = e.support.transition && i.$element.hasClass("fade");
                i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), s && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
                var a = e.Event("shown.bs.modal", {
                    relatedTarget: t
                });
                s ? i.$dialog.one("bsTransitionEnd", function() {
                    i.$element.trigger("focus").trigger(a)
                }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(a)
            }))
        }, n.prototype.hide = function(t) {
            t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
        }, n.prototype.enforceFocus = function() {
            e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
                this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
            }, this))
        }, n.prototype.escape = function() {
            this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function(e) {
                27 == e.which && this.hide()
            }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
        }, n.prototype.resize = function() {
            this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
        }, n.prototype.hideModal = function() {
            var e = this;
            this.$element.hide(), this.backdrop(function() {
                e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal")
            })
        }, n.prototype.removeBackdrop = function() {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        }, n.prototype.backdrop = function(t) {
            var i = this,
                s = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var a = e.support.transition && s;
                if (this.$backdrop = e(document.createElement("div")).addClass("modal-backdrop " + s).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
                        return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                    }, this)), a && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
                a ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : t()
            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var r = function() {
                    i.removeBackdrop(), t && t()
                };
                e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : r()
            } else t && t()
        }, n.prototype.handleUpdate = function() {
            this.adjustDialog()
        }, n.prototype.adjustDialog = function() {
            var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
            this.$element.css({
                paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
                paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
            })
        }, n.prototype.resetAdjustments = function() {
            this.$element.css({
                paddingLeft: "",
                paddingRight: ""
            })
        }, n.prototype.checkScrollbar = function() {
            var e = window.innerWidth;
            if (!e) {
                var t = document.documentElement.getBoundingClientRect();
                e = t.right - Math.abs(t.left)
            }
            this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar()
        }, n.prototype.setScrollbar = function() {
            var e = parseInt(this.$body.css("padding-right") || 0, 10);
            this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
        }, n.prototype.resetScrollbar = function() {
            this.$body.css("padding-right", this.originalBodyPad)
        }, n.prototype.measureScrollbar = function() {
            var e = document.createElement("div");
            e.className = "modal-scrollbar-measure", this.$body.append(e);
            var t = e.offsetWidth - e.clientWidth;
            return this.$body[0].removeChild(e), t
        };
        var i = e.fn.modal;
        e.fn.modal = t, e.fn.modal.Constructor = n, e.fn.modal.noConflict = function() {
            return e.fn.modal = i, this
        }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
            var i = e(this),
                s = i.attr("href"),
                a = e(i.attr("data-target") || s && s.replace(/.*(?=#[^\s]+$)/, "")),
                r = a.data("bs.modal") ? "toggle" : e.extend({
                    remote: !/#/.test(s) && s
                }, a.data(), i.data());
            i.is("a") && n.preventDefault(), a.one("show.bs.modal", function(e) {
                e.isDefaultPrevented() || a.one("hidden.bs.modal", function() {
                    i.is(":visible") && i.trigger("focus")
                })
            }), t.call(a, r, this)
        })
    }(jQuery), + function(e) {
        "use strict";

        function t(t) {
            return this.each(function() {
                var i = e(this),
                    s = i.data("bs.tooltip"),
                    a = "object" == typeof t && t;
                (s || !/destroy|hide/.test(t)) && (s || i.data("bs.tooltip", s = new n(this, a)), "string" == typeof t && s[t]())
            })
        }
        var n = function(e, t) {
            this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", e, t)
        };
        n.VERSION = "3.3.6", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1,
            viewport: {
                selector: "body",
                padding: 0
            }
        }, n.prototype.init = function(t, n, i) {
            if (this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && e(e.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                    click: !1,
                    hover: !1,
                    focus: !1
                }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
            for (var s = this.options.trigger.split(" "), a = s.length; a--;) {
                var r = s[a];
                if ("click" == r) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
                else if ("manual" != r) {
                    var o = "hover" == r ? "mouseenter" : "focusin",
                        l = "hover" == r ? "mouseleave" : "focusout";
                    this.$element.on(o + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this))
                }
            }
            this.options.selector ? this._options = e.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        }, n.prototype.getDefaults = function() {
            return n.DEFAULTS
        }, n.prototype.getOptions = function(t) {
            return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), t
        }, n.prototype.getDelegateOptions = function() {
            var t = {},
                n = this.getDefaults();
            return this._options && e.each(this._options, function(e, i) {
                n[e] != i && (t[e] = i)
            }), t
        }, n.prototype.enter = function(t) {
            var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
            return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusin" == t.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
                "in" == n.hoverState && n.show()
            }, n.options.delay.show)) : n.show())
        }, n.prototype.isInStateTrue = function() {
            for (var e in this.inState)
                if (this.inState[e]) return !0;
            return !1
        }, n.prototype.leave = function(t) {
            var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
            return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusout" == t.type ? "focus" : "hover"] = !1), n.isInStateTrue() ? void 0 : (clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
                "out" == n.hoverState && n.hide()
            }, n.options.delay.hide)) : n.hide())
        }, n.prototype.show = function() {
            var t = e.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(t);
                var i = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                if (t.isDefaultPrevented() || !i) return;
                var s = this,
                    a = this.tip(),
                    r = this.getUID(this.type);
                this.setContent(), a.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && a.addClass("fade");
                var o = "function" == typeof this.options.placement ? this.options.placement.call(this, a[0], this.$element[0]) : this.options.placement,
                    l = /\s?auto?\s?/i,
                    c = l.test(o);
                c && (o = o.replace(l, "") || "top"), a.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).addClass(o).data("bs." + this.type, this), this.options.container ? a.appendTo(this.options.container) : a.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
                var d = this.getPosition(),
                    p = a[0].offsetWidth,
                    u = a[0].offsetHeight;
                if (c) {
                    var f = o,
                        h = this.getPosition(this.$viewport);
                    o = "bottom" == o && d.bottom + u > h.bottom ? "top" : "top" == o && d.top - u < h.top ? "bottom" : "right" == o && d.right + p > h.width ? "left" : "left" == o && d.left - p < h.left ? "right" : o, a.removeClass(f).addClass(o)
                }
                var m = this.getCalculatedOffset(o, d, p, u);
                this.applyPlacement(m, o);
                var v = function() {
                    var e = s.hoverState;
                    s.$element.trigger("shown.bs." + s.type), s.hoverState = null, "out" == e && s.leave(s)
                };
                e.support.transition && this.$tip.hasClass("fade") ? a.one("bsTransitionEnd", v).emulateTransitionEnd(n.TRANSITION_DURATION) : v()
            }
        }, n.prototype.applyPlacement = function(t, n) {
            var i = this.tip(),
                s = i[0].offsetWidth,
                a = i[0].offsetHeight,
                r = parseInt(i.css("margin-top"), 10),
                o = parseInt(i.css("margin-left"), 10);
            isNaN(r) && (r = 0), isNaN(o) && (o = 0), t.top += r, t.left += o, e.offset.setOffset(i[0], e.extend({
                using: function(e) {
                    i.css({
                        top: Math.round(e.top),
                        left: Math.round(e.left)
                    })
                }
            }, t), 0), i.addClass("in");
            var l = i[0].offsetWidth,
                c = i[0].offsetHeight;
            "top" == n && c != a && (t.top = t.top + a - c);
            var d = this.getViewportAdjustedDelta(n, t, l, c);
            d.left ? t.left += d.left : t.top += d.top;
            var p = /top|bottom/.test(n),
                u = p ? 2 * d.left - s + l : 2 * d.top - a + c,
                f = p ? "offsetWidth" : "offsetHeight";
            i.offset(t), this.replaceArrow(u, i[0][f], p)
        }, n.prototype.replaceArrow = function(e, t, n) {
            this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "")
        }, n.prototype.setContent = function() {
            var e = this.tip(),
                t = this.getTitle();
            e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
        }, n.prototype.hide = function(t) {
            function i() {
                "in" != s.hoverState && a.detach(), s.$element.removeAttr("aria-describedby").trigger("hidden.bs." + s.type), t && t()
            }
            var s = this,
                a = e(this.$tip),
                r = e.Event("hide.bs." + this.type);
            return this.$element.trigger(r), r.isDefaultPrevented() ? void 0 : (a.removeClass("in"), e.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this)
        }, n.prototype.fixTitle = function() {
            var e = this.$element;
            (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
        }, n.prototype.hasContent = function() {
            return this.getTitle()
        }, n.prototype.getPosition = function(t) {
            t = t || this.$element;
            var n = t[0],
                i = "BODY" == n.tagName,
                s = n.getBoundingClientRect();
            null == s.width && (s = e.extend({}, s, {
                width: s.right - s.left,
                height: s.bottom - s.top
            }));
            var a = i ? {
                    top: 0,
                    left: 0
                } : t.offset(),
                r = {
                    scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
                },
                o = i ? {
                    width: e(window).width(),
                    height: e(window).height()
                } : null;
            return e.extend({}, s, r, o, a)
        }, n.prototype.getCalculatedOffset = function(e, t, n, i) {
            return "bottom" == e ? {
                top: t.top + t.height,
                left: t.left + t.width / 2 - n / 2
            } : "top" == e ? {
                top: t.top - i,
                left: t.left + t.width / 2 - n / 2
            } : "left" == e ? {
                top: t.top + t.height / 2 - i / 2,
                left: t.left - n
            } : {
                top: t.top + t.height / 2 - i / 2,
                left: t.left + t.width
            }
        }, n.prototype.getViewportAdjustedDelta = function(e, t, n, i) {
            var s = {
                top: 0,
                left: 0
            };
            if (!this.$viewport) return s;
            var a = this.options.viewport && this.options.viewport.padding || 0,
                r = this.getPosition(this.$viewport);
            if (/right|left/.test(e)) {
                var o = t.top - a - r.scroll,
                    l = t.top + a - r.scroll + i;
                o < r.top ? s.top = r.top - o : l > r.top + r.height && (s.top = r.top + r.height - l)
            } else {
                var c = t.left - a,
                    d = t.left + a + n;
                c < r.left ? s.left = r.left - c : d > r.right && (s.left = r.left + r.width - d)
            }
            return s
        }, n.prototype.getTitle = function() {
            var e, t = this.$element,
                n = this.options;
            return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
        }, n.prototype.getUID = function(e) {
            do e += ~~(1e6 * Math.random()); while (document.getElementById(e));
            return e
        }, n.prototype.tip = function() {
            if (!this.$tip && (this.$tip = e(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
            return this.$tip
        }, n.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        }, n.prototype.enable = function() {
            this.enabled = !0
        }, n.prototype.disable = function() {
            this.enabled = !1
        }, n.prototype.toggleEnabled = function() {
            this.enabled = !this.enabled
        }, n.prototype.toggle = function(t) {
            var n = this;
            t && (n = e(t.currentTarget).data("bs." + this.type), n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n))), t ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
        }, n.prototype.destroy = function() {
            var e = this;
            clearTimeout(this.timeout), this.hide(function() {
                e.$element.off("." + e.type).removeData("bs." + e.type), e.$tip && e.$tip.detach(), e.$tip = null, e.$arrow = null, e.$viewport = null
            })
        };
        var i = e.fn.tooltip;
        e.fn.tooltip = t, e.fn.tooltip.Constructor = n, e.fn.tooltip.noConflict = function() {
            return e.fn.tooltip = i, this
        }
    }(jQuery), + function(e) {
        "use strict";

        function t(t) {
            return this.each(function() {
                var i = e(this),
                    s = i.data("bs.popover"),
                    a = "object" == typeof t && t;
                (s || !/destroy|hide/.test(t)) && (s || i.data("bs.popover", s = new n(this, a)), "string" == typeof t && s[t]())
            })
        }
        var n = function(e, t) {
            this.init("popover", e, t)
        };
        if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
        n.VERSION = "3.3.6", n.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }), n.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
            return n.DEFAULTS
        }, n.prototype.setContent = function() {
            var e = this.tip(),
                t = this.getTitle(),
                n = this.getContent();
            e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
        }, n.prototype.hasContent = function() {
            return this.getTitle() || this.getContent()
        }, n.prototype.getContent = function() {
            var e = this.$element,
                t = this.options;
            return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
        }, n.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".arrow")
        };
        var i = e.fn.popover;
        e.fn.popover = t, e.fn.popover.Constructor = n, e.fn.popover.noConflict = function() {
            return e.fn.popover = i, this
        }
    }(jQuery), + function(e) {
        "use strict";

        function t(n, i) {
            this.$body = e(document.body), this.$scrollElement = e(e(n).is(document.body) ? window : n), this.options = e.extend({}, t.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e.proxy(this.process, this)), this.refresh(), this.process()
        }

        function n(n) {
            return this.each(function() {
                var i = e(this),
                    s = i.data("bs.scrollspy"),
                    a = "object" == typeof n && n;
                s || i.data("bs.scrollspy", s = new t(this, a)), "string" == typeof n && s[n]()
            })
        }
        t.VERSION = "3.3.6", t.DEFAULTS = {
            offset: 10
        }, t.prototype.getScrollHeight = function() {
            return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
        }, t.prototype.refresh = function() {
            var t = this,
                n = "offset",
                i = 0;
            this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), e.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
                var t = e(this),
                    s = t.data("target") || t.attr("href"),
                    a = /^#./.test(s) && e(s);
                return a && a.length && a.is(":visible") && [
                    [a[n]().top + i, s]
                ] || null
            }).sort(function(e, t) {
                return e[0] - t[0]
            }).each(function() {
                t.offsets.push(this[0]), t.targets.push(this[1])
            })
        }, t.prototype.process = function() {
            var e, t = this.$scrollElement.scrollTop() + this.options.offset,
                n = this.getScrollHeight(),
                i = this.options.offset + n - this.$scrollElement.height(),
                s = this.offsets,
                a = this.targets,
                r = this.activeTarget;
            if (this.scrollHeight != n && this.refresh(), t >= i) return r != (e = a[a.length - 1]) && this.activate(e);
            if (r && t < s[0]) return this.activeTarget = null, this.clear();
            for (e = s.length; e--;) r != a[e] && t >= s[e] && (void 0 === s[e + 1] || t < s[e + 1]) && this.activate(a[e])
        }, t.prototype.activate = function(t) {
            this.activeTarget = t, this.clear();
            var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
                i = e(n).parents("li").addClass("active");
            i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
        }, t.prototype.clear = function() {
            e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
        };
        var i = e.fn.scrollspy;
        e.fn.scrollspy = n, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function() {
            return e.fn.scrollspy = i, this
        }, e(window).on("load.bs.scrollspy.data-api", function() {
            e('[data-spy="scroll"]').each(function() {
                var t = e(this);
                n.call(t, t.data())
            })
        })
    }(jQuery), + function(e) {
        "use strict";

        function t(t) {
            return this.each(function() {
                var i = e(this),
                    s = i.data("bs.tab");
                s || i.data("bs.tab", s = new n(this)), "string" == typeof t && s[t]()
            })
        }
        var n = function(t) {
            this.element = e(t)
        };
        n.VERSION = "3.3.6", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
            var t = this.element,
                n = t.closest("ul:not(.dropdown-menu)"),
                i = t.data("target");
            if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
                var s = n.find(".active:last a"),
                    a = e.Event("hide.bs.tab", {
                        relatedTarget: t[0]
                    }),
                    r = e.Event("show.bs.tab", {
                        relatedTarget: s[0]
                    });
                if (s.trigger(a), t.trigger(r), !r.isDefaultPrevented() && !a.isDefaultPrevented()) {
                    var o = e(i);
                    this.activate(t.closest("li"), n), this.activate(o, o.parent(), function() {
                        s.trigger({
                            type: "hidden.bs.tab",
                            relatedTarget: t[0]
                        }), t.trigger({
                            type: "shown.bs.tab",
                            relatedTarget: s[0]
                        })
                    })
                }
            }
        }, n.prototype.activate = function(t, i, s) {
            function a() {
                r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), o ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), s && s()
            }
            var r = i.find("> .active"),
                o = s && e.support.transition && (r.length && r.hasClass("fade") || !!i.find("> .fade").length);
            r.length && o ? r.one("bsTransitionEnd", a).emulateTransitionEnd(n.TRANSITION_DURATION) : a(), r.removeClass("in")
        };
        var i = e.fn.tab;
        e.fn.tab = t, e.fn.tab.Constructor = n, e.fn.tab.noConflict = function() {
            return e.fn.tab = i, this
        };
        var s = function(n) {
            n.preventDefault(), t.call(e(this), "show")
        };
        e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', s).on("click.bs.tab.data-api", '[data-toggle="pill"]', s)
    }(jQuery), + function(e) {
        "use strict";

        function t(t) {
            return this.each(function() {
                var i = e(this),
                    s = i.data("bs.affix"),
                    a = "object" == typeof t && t;
                s || i.data("bs.affix", s = new n(this, a)), "string" == typeof t && s[t]()
            })
        }
        var n = function(t, i) {
            this.options = e.extend({}, n.DEFAULTS, i), this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
        };
        n.VERSION = "3.3.6", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
            offset: 0,
            target: window
        }, n.prototype.getState = function(e, t, n, i) {
            var s = this.$target.scrollTop(),
                a = this.$element.offset(),
                r = this.$target.height();
            if (null != n && "top" == this.affixed) return n > s ? "top" : !1;
            if ("bottom" == this.affixed) return null != n ? s + this.unpin <= a.top ? !1 : "bottom" : e - i >= s + r ? !1 : "bottom";
            var o = null == this.affixed,
                l = o ? s : a.top,
                c = o ? r : t;
            return null != n && n >= s ? "top" : null != i && l + c >= e - i ? "bottom" : !1
        }, n.prototype.getPinnedOffset = function() {
            if (this.pinnedOffset) return this.pinnedOffset;
            this.$element.removeClass(n.RESET).addClass("affix");
            var e = this.$target.scrollTop(),
                t = this.$element.offset();
            return this.pinnedOffset = t.top - e
        }, n.prototype.checkPositionWithEventLoop = function() {
            setTimeout(e.proxy(this.checkPosition, this), 1)
        }, n.prototype.checkPosition = function() {
            if (this.$element.is(":visible")) {
                var t = this.$element.height(),
                    i = this.options.offset,
                    s = i.top,
                    a = i.bottom,
                    r = Math.max(e(document).height(), e(document.body).height());
                "object" != typeof i && (a = s = i), "function" == typeof s && (s = i.top(this.$element)), "function" == typeof a && (a = i.bottom(this.$element));
                var o = this.getState(r, t, s, a);
                if (this.affixed != o) {
                    null != this.unpin && this.$element.css("top", "");
                    var l = "affix" + (o ? "-" + o : ""),
                        c = e.Event(l + ".bs.affix");
                    if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                    this.affixed = o, this.unpin = "bottom" == o ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
                }
                "bottom" == o && this.$element.offset({
                    top: r - t - a
                })
            }
        };
        var i = e.fn.affix;
        e.fn.affix = t, e.fn.affix.Constructor = n, e.fn.affix.noConflict = function() {
            return e.fn.affix = i, this
        }, e(window).on("load", function() {
            e('[data-spy="affix"]').each(function() {
                var n = e(this),
                    i = n.data();
                i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), t.call(n, i)
            })
        })
    }(jQuery), "undefined" == typeof Haravan) var Haravan = {};
Haravan.cultures = [{
    code: "vi-VN",
    thousands: ",",
    decimal: ".",
    numberdecimal: 0,
    money_format: "{{amount}}"
}, {
    code: "en-US",
    thousands: ",",
    decimal: ".",
    numberdecimal: 2,
    money_format: "{{amount}}"
}], Haravan.getCulture = function(e) {
    var t;
    for (n = 0; n < Haravan.cultures.length; n++)
        if (Haravan.cultures[n].code == e) {
            t = Haravan.cultures[n];
            break
        } return t || (t = Haravan.cultures[0]), t
}, Haravan.format = Haravan.getCulture(Haravan.culture), Haravan.money_format = "{{amount}}", Haravan.each = function(e, t) {
    for (var n = 0; n < e.length; n++) t(e[n], n)
}, Haravan.map = function(e, t) {
    for (var n = [], i = 0; i < e.length; i++) n.push(t(e[i], i));
    return n
}, Haravan.arrayIncludes = function(e, t) {
    for (var n = 0; n < e.length; n++)
        if (e[n] == t) return !0;
    return !1
}, Haravan.uniq = function(e) {
    for (var t = [], n = 0; n < e.length; n++) Haravan.arrayIncludes(t, e[n]) || t.push(e[n]);
    return t
}, Haravan.isDefined = function(e) {
    return "undefined" != typeof e
}, Haravan.getClass = function(e) {
    return Object.prototype.toString.call(e).slice(8, -1)
}, Haravan.extend = function(e, t) {
    function n() {}
    n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e, e.baseConstructor = t, e.superClass = t.prototype
}, Haravan.urlParam = function(e) {
    var t = RegExp("[?&]" + e + "=([^&]*)").exec(window.location.search);
    return t && decodeURIComponent(t[1].replace(/\+/g, " "))
}, Haravan.Product = function(e) {
    Haravan.isDefined(e) && this.update(e)
}, Haravan.Product.prototype.update = function(e) {
    for (property in e) this[property] = e[property]
}, Haravan.Product.prototype.optionNames = function() {
    return "Array" == Haravan.getClass(this.options) ? this.options : []
}, Haravan.Product.prototype.optionValues = function(e) {
    if (!Haravan.isDefined(this.variants)) return null;
    var t = Haravan.map(this.variants, function(t) {
        var n = "option" + (e + 1);
        return void 0 == t[n] ? null : t[n]
    });
    return null == t[0] ? null : Haravan.uniq(t)
}, Haravan.Product.prototype.getVariant = function(e) {
    var t = null;
    return e.length != this.options.length ? t : (Haravan.each(this.variants, function(n) {
        for (var i = !0, s = 0; s < e.length; s++) {
            var a = "option" + (s + 1);
            n[a] != e[s] && (i = !1)
        }
        return 1 == i ? void(t = n) : void 0
    }), t)
}, Haravan.Product.prototype.getVariantById = function(e) {
    for (var t = 0; t < this.variants.length; t++) {
        var n = this.variants[t];
        if (e == n.id) return n
    }
    return null
}, Haravan.formatMoney = function(e, t) {
    function n(e) {
        return e.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + Haravan.format.thousands)
    }
    e /= 100, "string" == typeof e && (e = e.replace(Haravan.format.thousands, ""));
    var i = "",
        s = /\{\{\s*(\w+)\s*\}\}/,
        a = t || this.money_format;
    switch (a.match(s)[1]) {
        case "amount":
            i = n(floatToString(e, Haravan.format.numberdecimal));
            break;
        case "amount_no_decimals":
            i = n(floatToString(e, 0));
            break;
        case "amount_with_comma_separator":
            i = floatToString(e, Haravan.format.numberdecimal).replace(/\./, ",");
            break;
        case "amount_no_decimals_with_comma_separator":
            i = n(floatToString(e, 0)).replace(/\./, ",")
    }
    return a.replace(s, i)
}, Haravan.OptionSelectors = function(e, t) {
    return this.selectorDivClass = "selector-wrapper", this.selectorClass = "single-option-selector", this.variantIdFieldIdSuffix = "-variant-id", this.variantIdField = null, this.historyState = null, this.selectors = [], this.domIdPrefix = e, this.product = new Haravan.Product(t.product), this.onVariantSelected = Haravan.isDefined(t.onVariantSelected) ? t.onVariantSelected : function() {}, this.replaceSelector(e), this.initDropdown(), t.enableHistoryState && (this.historyState = new Haravan.OptionSelectors.HistoryState(this)), !0
}, Haravan.OptionSelectors.prototype.initDropdown = function() {
    var e = {
            initialLoad: !0
        },
        t = this.selectVariantFromDropdown(e);
    if (!t) {
        var n = this;
        setTimeout(function() {
            n.selectVariantFromParams(e) || n.fireOnChangeForFirstDropdown.call(n, e)
        })
    }
}, Haravan.OptionSelectors.prototype.fireOnChangeForFirstDropdown = function(e) {
    !this.selectors && !this.selectors.length && this.selectors.length > 0 && this.selectors[0].element.onchange(e)
}, Haravan.OptionSelectors.prototype.selectVariantFromParamsOrDropdown = function(e) {
    var t = this.selectVariantFromParams(e);
    t || this.selectVariantFromDropdown(e)
}, Haravan.OptionSelectors.prototype.replaceSelector = function(e) {
    var t = document.getElementById(e);
    if (null != t) {
        var n = t.parentNode;
        Haravan.each(this.buildSelectors(), function(e) {
            n.insertBefore(e, t)
        }), t.style.display = "none", this.variantIdField = t
    }
}, Haravan.OptionSelectors.prototype.selectVariantFromDropdown = function(e) {
    var t = document.getElementById(this.domIdPrefix);
    if (!t) return !1;
    if (t = t.querySelector("[selected]"), null != t) {
        var n = t.value;
        return this.selectVariant(n, e)
    }
    return !1
}, Haravan.OptionSelectors.prototype.selectVariantFromParams = function(e) {
    var t = Haravan.urlParam("variant");
    return this.selectVariant(t, e)
}, Haravan.OptionSelectors.prototype.selectVariant = function(e, t) {
    var n = this.product.getVariantById(e);
    if (null == n) return !1;
    for (var i = 0; i < this.selectors.length; i++) {
        var s = this.selectors[i].element,
            a = s.getAttribute("data-option"),
            r = n[a];
        null != r && this.optionExistInSelect(s, r) && (s.value = r)
    }
    return "undefined" != typeof jQuery ? jQuery(this.selectors[0].element).trigger("change", t) : this.selectors[0].element.onchange(t), !0
}, Haravan.OptionSelectors.prototype.optionExistInSelect = function(e, t) {
    for (var n = 0; n < e.options.length; n++)
        if (e.options[n].value == t) return !0
}, Haravan.OptionSelectors.prototype.insertSelectors = function(e, t) {
    Haravan.isDefined(t) && this.setMessageElement(t), this.domIdPrefix = "product-" + this.product.id + "-variant-selector";
    var n = document.getElementById(e);
    return n ? void Haravan.each(this.buildSelectors(), function(e) {
        n.appendChild(e)
    }) : !1
}, Haravan.OptionSelectors.prototype.buildSelectors = function() {
    for (var e = 0; e < this.product.optionNames().length; e++) {
        var t = new Haravan.SingleOptionSelector(this, e, this.product.optionNames()[e], this.product.optionValues(e));
        t.element.disabled = !1, this.selectors.push(t)
    }
    var n = this.selectorDivClass,
        i = this.product.optionNames(),
        s = Haravan.map(this.selectors, function(e) {
            var t = document.createElement("div");
            if (t.setAttribute("class", n), i.length > 1) {
                var s = document.createElement("label");
                s.htmlFor = e.element.id, s.innerHTML = e.name, t.appendChild(s)
            }
            return t.appendChild(e.element), t
        });
    return s
}, Haravan.OptionSelectors.prototype.selectedValues = function() {
    for (var e = [], t = 0; t < this.selectors.length; t++) {
        var n = this.selectors[t].element.value;
        e.push(n)
    }
    return e
}, Haravan.OptionSelectors.prototype.updateSelectors = function(e, t) {
    var n = this.selectedValues(),
        i = this.product.getVariant(n);
    i ? (this.variantIdField.disabled = !1, this.variantIdField.value = i.id) : this.variantIdField.disabled = !0, this.onVariantSelected(i, this, t), null != this.historyState && this.historyState.onVariantChange(i, this, t)
}, Haravan.OptionSelectorsFromDOM = function(e, t) {
    var n = t.optionNames || [],
        i = t.priceFieldExists || !0,
        s = t.delimiter || "/",
        a = this.createProductFromSelector(e, n, i, s);
    t.product = a, Haravan.OptionSelectorsFromDOM.baseConstructor.call(this, e, t)
}, Haravan.extend(Haravan.OptionSelectorsFromDOM, Haravan.OptionSelectors), Haravan.OptionSelectorsFromDOM.prototype.createProductFromSelector = function(e, t, n, i) {
    if (!Haravan.isDefined(n)) var n = !0;
    if (!Haravan.isDefined(i)) var i = "/";
    var s = document.getElementById(e);
    if (!s) return !1;
    var a = s.childNodes,
        r = (s.parentNode, t.length),
        o = [];
    Haravan.each(a, function(e) {
        if (1 == e.nodeType && "option" == e.tagName.toLowerCase()) {
            var s = e.innerHTML.split(new RegExp("\\s*\\" + i + "\\s*"));
            0 == t.length && (r = s.length - (n ? 1 : 0));
            var a = s.slice(0, r),
                l = n ? s[r] : "",
                c = (e.getAttribute("value"), {
                    available: !e.disabled,
                    id: parseFloat(e.value),
                    price: l,
                    option1: a[0],
                    option2: a[1],
                    option3: a[2]
                });
            o.push(c)
        }
    });
    var l = {
        variants: o
    };
    if (0 == t.length) {
        l.options = [];
        for (var c = 0; r > c; c++) l.options[c] = "option " + (c + 1)
    } else l.options = t;
    return l
}, Haravan.SingleOptionSelector = function(e, t, n, i) {
    if (this.multiSelector = e, this.values = i, this.index = t, this.name = n, this.element = document.createElement("select"), void 0 != this.values)
        for (var s = 0; s < this.values.length; s++) {
            var a = document.createElement("option");
            a.value = i[s], a.innerHTML = i[s], this.element.appendChild(a)
        }
    return this.element.setAttribute("class", this.multiSelector.selectorClass), this.element.setAttribute("data-option", "option" + (t + 1)), this.element.id = e.domIdPrefix + "-option-" + t, this.element.onchange = function(n, i) {
        i = i || {}, e.updateSelectors(t, i)
    }, !0
}, Haravan.Image = {
    preload: function(e, t) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            this.loadImage(this.getSizedImageUrl(i, t))
        }
    },
    loadImage: function(e) {
        (new Image).src = e
    },
    switchImage: function(e, t, n) {
        if (e) {
            var i = this.imageSize(t.src),
                s = this.getSizedImageUrl(e.src, i);
            n ? n(s, e, t) : t.src = s
        }
    },
    imageSize: function(e) {
        var t = e.match(/(1024x1024|2048x2048|pico|icon|thumb|small|compact|medium|large|grande)\./);
        return null != t ? t[1] : null
    },
    getSizedImageUrl: function(e, t) {
        if (null == t) return e;
        if ("master" == t) return this.removeProtocol(e);
        var n = e.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?/);
        if (null != n) {
            var i = e.split(n[0]),
                s = n[0];
            return this.removeProtocol(i[0] + "_" + t + s)
        }
        return null
    },
    removeProtocol: function(e) {
        return e.replace(/http(s)?:/, "")
    }
}, Haravan.OptionSelectors.HistoryState = function(e) {
    this.browserSupports() && this.register(e)
}, Haravan.OptionSelectors.HistoryState.prototype.register = function(e) {
    window.addEventListener("popstate", function() {
        e.selectVariantFromParamsOrDropdown({
            popStateCall: !0
        })
    })
}, Haravan.OptionSelectors.HistoryState.prototype.onVariantChange = function(e, t, n) {
    this.browserSupports() && (!e || n.initialLoad || n.popStateCall || window.history.pushState({}, document.title, "?variant=" + e.id))
}, Haravan.OptionSelectors.HistoryState.prototype.browserSupports = function() {
    return window.history && window.history.pushState
}, "undefined" == typeof Haravan && (Haravan = {}), Haravan.cultures = [{
    code: "vi-VN",
    thousands: ",",
    decimal: ".",
    numberdecimal: 0,
    money_format: "{{amount}}"
}, {
    code: "en-US",
    thousands: ",",
    decimal: ".",
    numberdecimal: 2,
    money_format: "{{amount}}"
}], Haravan.getCulture = function(e) {
    var t;
    for (n = 0; n < Haravan.cultures.length; n++)
        if (Haravan.cultures[n].code == e) {
            t = Haravan.cultures[n];
            break
        } return t || (t = Haravan.cultures[0]), t
}, Haravan.format = Haravan.getCulture(Haravan.culture), Haravan.money_format = "{{amount}}", Haravan.onError = function(XMLHttpRequest, textStatus) {
    var data = eval("(" + XMLHttpRequest.responseText + ")");
    data.message ? alert(data.message + "(" + data.status + "): " + data.description) : alert("Error : " + Haravan.fullMessagesFromErrors(data).join("; ") + ".")
}, Haravan.fullMessagesFromErrors = function(e) {
    var t = [];
    return jQuery.each(e, function(e, n) {
        jQuery.each(n, function(n, i) {
            t.push(e + " " + i)
        })
    }), t
}, Haravan.onCartUpdate = function(e) {
    alert("There are now " + e.item_count + " items in the cart.")
}, Haravan.onCartShippingRatesUpdate = function(e, t) {
    var n = "";
    t.zip && (n += t.zip + ", "), t.province && (n += t.province + ", "), n += t.country, alert("There are " + e.length + " shipping rates available for " + n + ", starting at " + Haravan.formatMoney(e[0].price) + ".")
}, Haravan.onItemAdded = function(e) {
    alert(e.title + " was added to your shopping cart.")
}, Haravan.onProduct = function(e) {
    alert("Received everything we ever wanted to know about " + e.title)
}, Haravan.formatMoney = function(e, t) {
    function n(e) {
        return e.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + Haravan.format.thousands)
    }
    e /= 100, "string" == typeof e && (e = e.replace(Haravan.format.thousands, ""));
    var i = "",
        s = /\{\{\s*(\w+)\s*\}\}/,
        a = t || this.money_format;
    switch (a.match(s)[1]) {
        case "amount":
            i = n(floatToString(e, Haravan.format.numberdecimal));
            break;
        case "amount_no_decimals":
            i = n(floatToString(e, 0));
            break;
        case "amount_with_comma_separator":
            i = floatToString(e, Haravan.format.numberdecimal).replace(/\./, ",");
            break;
        case "amount_no_decimals_with_comma_separator":
            i = n(floatToString(e, 0)).replace(/\./, ",")
    }
    return a.replace(s, i)
}, Haravan.resizeImage = function(e, t) {
    try {
        if ("original" == t) return e;
        var n = e.match(/(.*\/[\w\-\_\.]+)\.(\w{2,4})/);
        return n[1].replace(/http:/g, "") + "_" + t + "." + n[2]
    } catch (i) {
        return e.replace(/http:/g, "")
    }
}, Haravan.addItem = function(e, t, n) {
    var t = t || 1,
        i = {
            type: "POST",
            url: "/cart/add.js",
            data: "quantity=" + t + "&id=" + e,
            dataType: "json",
            success: function(e) {
                "function" == typeof n ? n(e) : Haravan.onItemAdded(e)
            },
            error: function(e, t) {
                Haravan.onError(e, t)
            }
        };
    jQuery.ajax(i)
}, Haravan.addItemFromForm = function(e, t) {
    var n = {
        type: "POST",
        url: "/cart/add.js",
        data: jQuery("#" + e).serialize(),
        dataType: "json",
        success: function(e) {
            "function" == typeof t ? t(e) : Haravan.onItemAdded(e)
        },
        error: function(e, t) {
            Haravan.onError(e, t)
        }
    };
    jQuery.ajax(n)
}, Haravan.getCart = function(e) {
    jQuery.getJSON("/cart.js", function(t) {
        "function" == typeof e ? e(t) : Haravan.onCartUpdate(t)
    })
}, Haravan.getCartShippingRatesForDestination = function(e, t) {
    var n = {
        type: "GET",
        url: "/cart/shipping_rates.json",
        data: Haravan.param({
            shipping_address: e
        }),
        dataType: "json",
        success: function(n) {
            rates = n.shipping_rates, "function" == typeof t ? t(rates, e) : Haravan.onCartShippingRatesUpdate(rates, e)
        },
        error: function(e, t) {
            Haravan.onError(e, t)
        }
    };
    jQuery.ajax(n)
}, Haravan.getProduct = function(e, t) {
    jQuery.getJSON("/products/" + e + ".js", function(e) {
        "function" == typeof t ? t(e) : Haravan.onProduct(e)
    })
}, Haravan.changeItem = function(e, t, n) {
    var i = {
        type: "POST",
        url: "/cart/change.js",
        data: "quantity=" + t + "&id=" + e,
        dataType: "json",
        success: function(e) {
            "function" == typeof n ? n(e) : Haravan.onCartUpdate(e)
        },
        error: function(e, t) {
            Haravan.onError(e, t)
        }
    };
    jQuery.ajax(i)
}, Haravan.removeItem = function(e, t) {
    var n = {
        type: "POST",
        url: "/cart/change.js",
        data: "quantity=0&id=" + e,
        dataType: "json",
        success: function(e) {
            "function" == typeof t ? t(e) : Haravan.onCartUpdate(e)
        },
        error: function(e, t) {
            Haravan.onError(e, t)
        }
    };
    jQuery.ajax(n)
}, Haravan.clear = function(e) {
    var t = {
        type: "POST",
        url: "/cart/clear.js",
        data: "",
        dataType: "json",
        success: function(t) {
            "function" == typeof e ? e(t) : Haravan.onCartUpdate(t)
        },
        error: function(e, t) {
            Haravan.onError(e, t)
        }
    };
    jQuery.ajax(t)
}, Haravan.updateCartFromForm = function(e, t) {
    var n = {
        type: "POST",
        url: "/cart/update.js",
        data: jQuery("#" + e).serialize(),
        dataType: "json",
        success: function(e) {
            "function" == typeof t ? t(e) : Haravan.onCartUpdate(e)
        },
        error: function(e, t) {
            Haravan.onError(e, t)
        }
    };
    jQuery.ajax(n)
}, Haravan.updateCartAttributes = function(e, t) {
    var n = "";
    jQuery.isArray(e) ? jQuery.each(e, function(e, t) {
        var i = attributeToString(t.key);
        "" !== i && (n += "attributes[" + i + "]=" + attributeToString(t.value) + "&")
    }) : "object" == typeof e && null !== e && jQuery.each(e, function(e, t) {
        n += "attributes[" + attributeToString(e) + "]=" + attributeToString(t) + "&"
    });
    var i = {
        type: "POST",
        url: "/cart/update.js",
        data: n,
        dataType: "json",
        success: function(e) {
            "function" == typeof t ? t(e) : Haravan.onCartUpdate(e)
        },
        error: function(e, t) {
            Haravan.onError(e, t)
        }
    };
    jQuery.ajax(i)
}, Haravan.updateCartNote = function(e, t) {
    var n = {
        type: "POST",
        url: "/cart/update.js",
        data: "note=" + attributeToString(e),
        dataType: "json",
        success: function(e) {
            "function" == typeof t ? t(e) : Haravan.onCartUpdate(e)
        },
        error: function(e, t) {
            Haravan.onError(e, t)
        }
    };
    jQuery.ajax(n)
}, jQuery.fn.jquery >= "1.4" ? Haravan.param = jQuery.param : (Haravan.param = function(e) {
    var t = [],
        n = function(e, n) {
            n = jQuery.isFunction(n) ? n() : n, t[t.length] = encodeURIComponent(e) + "=" + encodeURIComponent(n)
        };
    if (jQuery.isArray(e) || e.jquery) jQuery.each(e, function() {
        n(this.name, this.value)
    });
    else
        for (var i in e) Haravan.buildParams(i, e[i], n);
    return t.join("&").replace(/%20/g, "+")
}, Haravan.buildParams = function(e, t, n) {
    jQuery.isArray(t) && t.length ? jQuery.each(t, function(t, i) {
        rbracket.test(e) ? n(e, i) : Haravan.buildParams(e + "[" + ("object" == typeof i || jQuery.isArray(i) ? t : "") + "]", i, n)
    }) : null != t && "object" == typeof t ? Haravan.isEmptyObject(t) ? n(e, "") : jQuery.each(t, function(t, i) {
        Haravan.buildParams(e + "[" + t + "]", i, n)
    }) : n(e, t)
}, Haravan.isEmptyObject = function(e) {
    for (var t in e) return !1;
    return !0
}), LoyaltyAPI = function() {
    var e = this,
        t = "https://onapp.haravan.com/loyaltyep";
    e.makeApiRequest = function(e, t, n, i) {
        var s = "";
        n && (s = JSON.stringify(n)), $.ajax({
            type: t,
            url: e,
            cache: !1,
            dataType: "json",
            data: s,
            contentType: "application/json; charset=UTF-8",
            success: function(e) {
                i(e)
            },
            statusCode: {
                401: function() {
                    console.log("401"), i()
                }
            },
            error: function(e, t) {
                console.log(t), 500 != e.status && console.log(e.responseText), i()
            }
        })
    }, e.makeApiRequestBasicAuth = function(e, t, n, i, s) {
        var a = "";
        i && (a = JSON.stringify(i)), $.ajax({
            type: n,
            url: t,
            cache: !1,
            dataType: "json",
            data: a,
            contentType: "application/json; charset=UTF-8",
            headers: {
                Authorization: "Basic " + e
            },
            success: function(e) {
                s(e)
            },
            statusCode: {
                401: function() {
                    console.log("401"), s()
                }
            },
            error: function(e, t) {
                console.log(t), 500 != e.status && console.log(e.responseText), s()
            }
        })
    }, e.getCouponEarned = function(n, i) {
        if ("" == Haravan.shop) return i();
        var s = t + "/api/customers/pointshistory",
            a = {
                shop: Haravan.shop,
                customer_id: n,
                limit: 15,
                filter_type: "coupons_earned"
            };
        e.makeApiRequest(s, "POST", a, i)
    }, e.getCustomerCoupons = function(n, i) {
        if ("" == Haravan.shop) return i();
        var s = t + "/api/customers/coupons",
            a = {
                shop: Haravan.shop,
                customer_id: n,
                limit: 15
            };
        e.makeApiRequest(s, "POST", a, i)
    }, e.getCustomer = function(n, i, s) {
        if ("" == Haravan.shop) return s();
        var a = t + "/api/customers/detail",
            r = {
                shop: Haravan.shop,
                customer_id: i
            };
        e.makeApiRequestBasicAuth(n, a, "POST", r, s)
    }, e.getCustomerByPhone = function(n, i, s) {
        if ("" == Haravan.shop) return s();
        var a = t + "/api/customers/detailbyphone",
            r = {
                shop: Haravan.shop,
                phone: i
            };
        e.makeApiRequestBasicAuth(n, a, "POST", r, s)
    }, e.getCollPointsProducts = function(n) {
        if ("" == Haravan.shop) return n();
        var i = t + "/api/collpointsproducts",
            s = {
                shop: Haravan.shop
            };
        e.makeApiRequest(i, "POST", s, n)
    }, e.getDiscountCode = function(n, i, s, a, r) {
        if ("" == Haravan.shop) return r();
        var o = t + "/api/customers/points_purchases",
            l = {
                shop: Haravan.shop,
                customer_id: i,
                online: s,
                points_product_id: a
            };
        e.makeApiRequestBasicAuth(n, o, "POST", l, r)
    }, e.getPointsHistory = function(n, i) {
        if ("" == Haravan.shop) return i();
        var s = t + "/api/customers/pointshistory",
            a = {
                shop: Haravan.shop,
                customer_id: n,
                limit: 15,
                filter_type: "custpoints_history"
            };
        e.makeApiRequest(s, "POST", a, i)
    }, e.addShareFbPoints = function(n, i, s, a, r) {
        if ("" == Haravan.shop) return r();
        var o = t + "/api/customers/points_sharefb",
            l = {
                shop: Haravan.shop,
                customer_id: i,
                product_id: s,
                share_fb_post_id: a
            };
        e.makeApiRequestBasicAuth(n, o, "POST", l, r)
    }, e.customerAuth = function(n, i, s, a) {
        if ("" == Haravan.shop) return a();
        var r = t + "/api/customers/auth",
            o = {
                shop: Haravan.shop,
                digest: n,
                channelCustomerId: i,
                channelKey: s
            };
        e.makeApiRequest(r, "POST", o, a)
    }, e.getAuthKey = function(t) {
        var n = $(".sweettooth-widget").attr("data-digest"),
            i = $(".sweettooth-widget").attr("data-channel-customer-id"),
            s = $(".sweettooth-widget").attr("data-channel-key");
        e.customerAuth(n, i, s, function(e) {
            if (!e) return t();
            var n = btoa(e._id + ":" + e.authentication_token);
            return t(n)
        })
    }
};
var api = new LoyaltyAPI,
    authKey = "";
$(document).ready(function() {
        var e = $(".sweettooth-widget").attr("data-digest"),
            t = $(".sweettooth-widget").attr("data-channel-customer-id"),
            n = $(".sweettooth-widget").attr("data-channel-key");
        api.customerAuth(e, t, n, function(e) {
            e && (authKey = btoa(e._id + ":" + e.authentication_token))
        })
    }),
    function() {
        ! function(e) {
            e.countdown = function(t, n) {
                var i, s = this;
                return this.el = t, this.$el = e(t), this.$el.data("countdown", this), this.init = function() {
                    return s.options = e.extend({}, e.countdown.defaultOptions, n), s.options.refresh && (s.interval = setInterval(function() {
                        return s.render()
                    }, s.options.refresh)), s.render(), s
                }, i = function(t) {
                    var n, i;
                    return t = Date.parse(e.isPlainObject(s.options.date) ? s.options.date : new Date(s.options.date)), i = (t - Date.parse(new Date)) / 1e3, 0 >= i && (i = 0, s.interval && s.stop(), s.options.onEnd.apply(s)), n = {
                        years: 0,
                        days: 0,
                        hours: 0,
                        min: 0,
                        sec: 0,
                        millisec: 0
                    }, i >= 31557600 && (n.years = Math.floor(i / 31557600), i -= 365.25 * n.years * 86400), i >= 86400 && (n.days = Math.floor(i / 86400), i -= 86400 * n.days), i >= 3600 && (n.hours = Math.floor(i / 3600), i -= 3600 * n.hours), i >= 60 && (n.min = Math.floor(i / 60), i -= 60 * n.min), n.sec = i, n
                }, this.leadingZeros = function(e, t) {
                    for (null == t && (t = 2), e = String(e); e.length < t;) e = "0" + e;
                    return e
                }, this.update = function(e) {
                    return s.options.date = e, s
                }, this.render = function() {
                    return s.options.render.apply(s, [i(s.options.date)]), s
                }, this.stop = function() {
                    return s.interval && clearInterval(s.interval), s.interval = null, s
                }, this.start = function(t) {
                    return null == t && (t = s.options.refresh || e.countdown.defaultOptions.refresh), s.interval && clearInterval(s.interval), s.render(), s.options.refresh = t, s.interval = setInterval(function() {
                        return s.render()
                    }, s.options.refresh), s
                }, this.init()
            }, e.countdown.defaultOptions = {
                date: "June 7, 2087 15:03:25",
                refresh: 1e3,
                onEnd: e.noop,
                render: function(t) {
                    return e(this.el).html("" + t.years + " years, " + t.days + " days, " + this.leadingZeros(t.hours) + " hours, " + this.leadingZeros(t.min) + " min and " + this.leadingZeros(t.sec) + " sec")
                }
            }, e.fn.countdown = function(t) {
                return e.each(this, function(n, i) {
                    var s;
                    return s = e(i), s.data("countdown") ? void 0 : s.data("countdown", new e.countdown(i, t))
                })
            }
        }(jQuery)
    }.call(this),
    function($) {
        function sc_setScroll(e, t, n) {
            return "transition" == n.transition && "swing" == t && (t = "ease"), {
                anims: [],
                duration: e,
                orgDuration: e,
                easing: t,
                startTime: getTime()
            }
        }

        function sc_startScroll(e, t) {
            for (var n = 0, i = e.anims.length; i > n; n++) {
                var s = e.anims[n];
                s && s[0][t.transition](s[1], e.duration, e.easing, s[2])
            }
        }

        function sc_stopScroll(e, t) {
            is_boolean(t) || (t = !0), is_object(e.pre) && sc_stopScroll(e.pre, t);
            for (var n = 0, i = e.anims.length; i > n; n++) {
                var s = e.anims[n];
                s[0].stop(!0), t && (s[0].css(s[1]), is_function(s[2]) && s[2]())
            }
            is_object(e.post) && sc_stopScroll(e.post, t)
        }

        function sc_afterScroll(e, t, n) {
            switch (t && t.remove(), n.fx) {
                case "fade":
                case "crossfade":
                case "cover-fade":
                case "uncover-fade":
                    e.css("opacity", 1), e.css("filter", "")
            }
        }

        function sc_fireCallbacks(e, t, n, i, s) {
            if (t[n] && t[n].call(e, i), s[n].length)
                for (var a = 0, r = s[n].length; r > a; a++) s[n][a].call(e, i);
            return []
        }

        function sc_fireQueue(e, t, n) {
            return t.length && (e.trigger(cf_e(t[0][0], n), t[0][1]), t.shift()), t
        }

        function sc_hideHiddenItems(e) {
            e.each(function() {
                var e = $(this);
                e.data("_cfs_isHidden", e.is(":hidden")).hide()
            })
        }

        function sc_showHiddenItems(e) {
            e && e.each(function() {
                var e = $(this);
                e.data("_cfs_isHidden") || e.show()
            })
        }

        function sc_clearTimers(e) {
            return e.auto && clearTimeout(e.auto), e.progress && clearInterval(e.progress), e
        }

        function sc_mapCallbackArguments(e, t, n, i, s, a, r) {
            return {
                width: r.width,
                height: r.height,
                items: {
                    old: e,
                    skipped: t,
                    visible: n
                },
                scroll: {
                    items: i,
                    direction: s,
                    duration: a
                }
            }
        }

        function sc_getDuration(e, t, n, i) {
            var s = e.duration;
            return "none" == e.fx ? 0 : ("auto" == s ? s = t.scroll.duration / t.scroll.items * n : 10 > s && (s = i / s), 1 > s ? 0 : ("fade" == e.fx && (s /= 2), Math.round(s)))
        }

        function nv_showNavi(e, t, n) {
            var i = is_number(e.items.minimum) ? e.items.minimum : e.items.visible + 1;
            if ("show" == t || "hide" == t) var s = t;
            else if (i > t) {
                debug(n, "Not enough items (" + t + " total, " + i + " needed): Hiding navigation.");
                var s = "hide"
            } else var s = "show";
            var a = "show" == s ? "removeClass" : "addClass",
                r = cf_c("hidden", n);
            e.auto.button && e.auto.button[s]()[a](r), e.prev.button && e.prev.button[s]()[a](r), e.next.button && e.next.button[s]()[a](r), e.pagination.container && e.pagination.container[s]()[a](r)
        }

        function nv_enableNavi(e, t, n) {
            if (!e.circular && !e.infinite) {
                var i = "removeClass" == t || "addClass" == t ? t : !1,
                    s = cf_c("disabled", n);
                if (e.auto.button && i && e.auto.button[i](s), e.prev.button) {
                    var a = i || 0 == t ? "addClass" : "removeClass";
                    e.prev.button[a](s)
                }
                if (e.next.button) {
                    var a = i || t == e.items.visible ? "addClass" : "removeClass";
                    e.next.button[a](s)
                }
            }
        }

        function go_getObject(e, t) {
            return is_function(t) ? t = t.call(e) : is_undefined(t) && (t = {}), t
        }

        function go_getItemsObject(e, t) {
            return t = go_getObject(e, t), is_number(t) ? t = {
                visible: t
            } : "variable" == t ? t = {
                visible: t,
                width: t,
                height: t
            } : is_object(t) || (t = {}), t
        }

        function go_getScrollObject(e, t) {
            return t = go_getObject(e, t), is_number(t) ? t = 50 >= t ? {
                items: t
            } : {
                duration: t
            } : is_string(t) ? t = {
                easing: t
            } : is_object(t) || (t = {}), t
        }

        function go_getNaviObject(e, t) {
            if (t = go_getObject(e, t), is_string(t)) {
                var n = cf_getKeyCode(t);
                t = -1 == n ? $(t) : n
            }
            return t
        }

        function go_getAutoObject(e, t) {
            return t = go_getNaviObject(e, t), is_jquery(t) ? t = {
                button: t
            } : is_boolean(t) ? t = {
                play: t
            } : is_number(t) && (t = {
                timeoutDuration: t
            }), t.progress && (is_string(t.progress) || is_jquery(t.progress)) && (t.progress = {
                bar: t.progress
            }), t
        }

        function go_complementAutoObject(e, t) {
            return is_function(t.button) && (t.button = t.button.call(e)), is_string(t.button) && (t.button = $(t.button)), is_boolean(t.play) || (t.play = !0), is_number(t.delay) || (t.delay = 0), is_undefined(t.pauseOnEvent) && (t.pauseOnEvent = !0), is_boolean(t.pauseOnResize) || (t.pauseOnResize = !0), is_number(t.timeoutDuration) || (t.timeoutDuration = 10 > t.duration ? 2500 : 5 * t.duration), t.progress && (is_function(t.progress.bar) && (t.progress.bar = t.progress.bar.call(e)), is_string(t.progress.bar) && (t.progress.bar = $(t.progress.bar)), t.progress.bar ? (is_function(t.progress.updater) || (t.progress.updater = $.fn.carouFredSel.progressbarUpdater), is_number(t.progress.interval) || (t.progress.interval = 50)) : t.progress = !1), t
        }

        function go_getPrevNextObject(e, t) {
            return t = go_getNaviObject(e, t), is_jquery(t) ? t = {
                button: t
            } : is_number(t) && (t = {
                key: t
            }), t
        }

        function go_complementPrevNextObject(e, t) {
            return is_function(t.button) && (t.button = t.button.call(e)), is_string(t.button) && (t.button = $(t.button)), is_string(t.key) && (t.key = cf_getKeyCode(t.key)), t
        }

        function go_getPaginationObject(e, t) {
            return t = go_getNaviObject(e, t), is_jquery(t) ? t = {
                container: t
            } : is_boolean(t) && (t = {
                keys: t
            }), t
        }

        function go_complementPaginationObject(e, t) {
            return is_function(t.container) && (t.container = t.container.call(e)), is_string(t.container) && (t.container = $(t.container)), is_number(t.items) || (t.items = !1), is_boolean(t.keys) || (t.keys = !1), is_function(t.anchorBuilder) || is_false(t.anchorBuilder) || (t.anchorBuilder = $.fn.carouFredSel.pageAnchorBuilder), is_number(t.deviation) || (t.deviation = 0), t
        }

        function go_getSwipeObject(e, t) {
            return is_function(t) && (t = t.call(e)), is_undefined(t) && (t = {
                onTouch: !1
            }), is_true(t) ? t = {
                onTouch: t
            } : is_number(t) && (t = {
                items: t
            }), t
        }

        function go_complementSwipeObject(e, t) {
            return is_boolean(t.onTouch) || (t.onTouch = !0), is_boolean(t.onMouse) || (t.onMouse = !1), is_object(t.options) || (t.options = {}), is_boolean(t.options.triggerOnTouchEnd) || (t.options.triggerOnTouchEnd = !1), t
        }

        function go_getMousewheelObject(e, t) {
            return is_function(t) && (t = t.call(e)), is_true(t) ? t = {} : is_number(t) ? t = {
                items: t
            } : is_undefined(t) && (t = !1), t
        }

        function go_complementMousewheelObject(e, t) {
            return t
        }

        function gn_getItemIndex(e, t, n, i, s) {
            if (is_string(e) && (e = $(e, s)), is_object(e) && (e = $(e, s)), is_jquery(e) ? (e = s.children().index(e), is_boolean(n) || (n = !1)) : is_boolean(n) || (n = !0), is_number(e) || (e = 0), is_number(t) || (t = 0), n && (e += i.first), e += t, i.total > 0) {
                for (; e >= i.total;) e -= i.total;
                for (; 0 > e;) e += i.total
            }
            return e
        }

        function gn_getVisibleItemsPrev(e, t, n) {
            for (var i = 0, s = 0, a = n; a >= 0; a--) {
                var r = e.eq(a);
                if (i += r.is(":visible") ? r[t.d.outerWidth](!0) : 0, i > t.maxDimension) return s;
                0 == a && (a = e.length), s++
            }
        }

        function gn_getVisibleItemsPrevFilter(e, t, n) {
            return gn_getItemsPrevFilter(e, t.items.filter, t.items.visibleConf.org, n)
        }

        function gn_getScrollItemsPrevFilter(e, t, n, i) {
            return gn_getItemsPrevFilter(e, t.items.filter, i, n);
        }

        function gn_getItemsPrevFilter(e, t, n, i) {
            for (var s = 0, a = 0, r = i, o = e.length; r >= 0; r--) {
                if (a++, a == o) return a;
                var l = e.eq(r);
                if (l.is(t) && (s++, s == n)) return a;
                0 == r && (r = o)
            }
        }

        function gn_getVisibleOrg(e, t) {
            return t.items.visibleConf.org || e.children().slice(0, t.items.visible).filter(t.items.filter).length
        }

        function gn_getVisibleItemsNext(e, t, n) {
            for (var i = 0, s = 0, a = n, r = e.length - 1; r >= a; a++) {
                var o = e.eq(a);
                if (i += o.is(":visible") ? o[t.d.outerWidth](!0) : 0, i > t.maxDimension) return s;
                if (s++, s == r + 1) return s;
                a == r && (a = -1)
            }
        }

        function gn_getVisibleItemsNextTestCircular(e, t, n, i) {
            var s = gn_getVisibleItemsNext(e, t, n);
            return t.circular || n + s > i && (s = i - n), s
        }

        function gn_getVisibleItemsNextFilter(e, t, n) {
            return gn_getItemsNextFilter(e, t.items.filter, t.items.visibleConf.org, n, t.circular)
        }

        function gn_getScrollItemsNextFilter(e, t, n, i) {
            return gn_getItemsNextFilter(e, t.items.filter, i + 1, n, t.circular) - 1
        }

        function gn_getItemsNextFilter(e, t, n, i) {
            for (var s = 0, a = 0, r = i, o = e.length - 1; o >= r; r++) {
                if (a++, a >= o) return a;
                var l = e.eq(r);
                if (l.is(t) && (s++, s == n)) return a;
                r == o && (r = -1)
            }
        }

        function gi_getCurrentItems(e, t) {
            return e.slice(0, t.items.visible)
        }

        function gi_getOldItemsPrev(e, t, n) {
            return e.slice(n, t.items.visibleConf.old + n)
        }

        function gi_getNewItemsPrev(e, t) {
            return e.slice(0, t.items.visible)
        }

        function gi_getOldItemsNext(e, t) {
            return e.slice(0, t.items.visibleConf.old)
        }

        function gi_getNewItemsNext(e, t, n) {
            return e.slice(n, t.items.visible + n)
        }

        function sz_storeMargin(e, t, n) {
            t.usePadding && (is_string(n) || (n = "_cfs_origCssMargin"), e.each(function() {
                var e = $(this),
                    i = parseInt(e.css(t.d.marginRight), 10);
                is_number(i) || (i = 0), e.data(n, i)
            }))
        }

        function sz_resetMargin(e, t, n) {
            if (t.usePadding) {
                var i = is_boolean(n) ? n : !1;
                is_number(n) || (n = 0), sz_storeMargin(e, t, "_cfs_tempCssMargin"), e.each(function() {
                    var e = $(this);
                    e.css(t.d.marginRight, i ? e.data("_cfs_tempCssMargin") : n + e.data("_cfs_origCssMargin"))
                })
            }
        }

        function sz_storeOrigCss(e) {
            e.each(function() {
                var e = $(this);
                e.data("_cfs_origCss", e.attr("style") || "")
            })
        }

        function sz_restoreOrigCss(e) {
            e.each(function() {
                var e = $(this);
                e.attr("style", e.data("_cfs_origCss") || "")
            })
        }

        function sz_setResponsiveSizes(e, t) {
            var n = (e.items.visible, e.items[e.d.width]),
                i = e[e.d.height],
                s = is_percentage(i);
            t.each(function() {
                var t = $(this),
                    a = n - ms_getPaddingBorderMargin(t, e, "Width");
                t[e.d.width](a), s && t[e.d.height](ms_getPercentage(a, i))
            })
        }

        function sz_setSizes(e, t) {
            var n = e.parent(),
                i = e.children(),
                s = gi_getCurrentItems(i, t),
                a = cf_mapWrapperSizes(ms_getSizes(s, t, !0), t, !1);
            if (n.css(a), t.usePadding) {
                var r = t.padding,
                    o = r[t.d[1]];
                t.align && 0 > o && (o = 0);
                var l = s.last();
                l.css(t.d.marginRight, l.data("_cfs_origCssMargin") + o), e.css(t.d.top, r[t.d[0]]), e.css(t.d.left, r[t.d[3]])
            }
            return e.css(t.d.width, a[t.d.width] + 2 * ms_getTotalSize(i, t, "width")), e.css(t.d.height, ms_getLargestSize(i, t, "height")), a
        }

        function ms_getSizes(e, t, n) {
            return [ms_getTotalSize(e, t, "width", n), ms_getLargestSize(e, t, "height", n)]
        }

        function ms_getLargestSize(e, t, n, i) {
            return is_boolean(i) || (i = !1), is_number(t[t.d[n]]) && i ? t[t.d[n]] : is_number(t.items[t.d[n]]) ? t.items[t.d[n]] : (n = n.toLowerCase().indexOf("width") > -1 ? "outerWidth" : "outerHeight", ms_getTrueLargestSize(e, t, n))
        }

        function ms_getTrueLargestSize(e, t, n) {
            for (var i = 0, s = 0, a = e.length; a > s; s++) {
                var r = e.eq(s),
                    o = r.is(":visible") ? r[t.d[n]](!0) : 0;
                o > i && (i = o)
            }
            return i
        }

        function ms_getTotalSize(e, t, n, i) {
            if (is_boolean(i) || (i = !1), is_number(t[t.d[n]]) && i) return t[t.d[n]];
            if (is_number(t.items[t.d[n]])) return t.items[t.d[n]] * e.length;
            for (var s = n.toLowerCase().indexOf("width") > -1 ? "outerWidth" : "outerHeight", a = 0, r = 0, o = e.length; o > r; r++) {
                var l = e.eq(r);
                a += l.is(":visible") ? l[t.d[s]](!0) : 0
            }
            return a
        }

        function ms_getParentSize(e, t, n) {
            var i = e.is(":visible");
            i && e.hide();
            var s = e.parent()[t.d[n]]();
            return i && e.show(), s
        }

        function ms_getMaxDimension(e, t) {
            return is_number(e[e.d.width]) ? e[e.d.width] : t
        }

        function ms_hasVariableSizes(e, t, n) {
            for (var i = !1, s = !1, a = 0, r = e.length; r > a; a++) {
                var o = e.eq(a),
                    l = o.is(":visible") ? o[t.d[n]](!0) : 0;
                i === !1 ? i = l : i != l && (s = !0), 0 == i && (s = !0)
            }
            return s
        }

        function ms_getPaddingBorderMargin(e, t, n) {
            return e[t.d["outer" + n]](!0) - e[t.d[n.toLowerCase()]]()
        }

        function ms_getPercentage(e, t) {
            if (is_percentage(t)) {
                if (t = parseInt(t.slice(0, -1), 10), !is_number(t)) return e;
                e *= t / 100
            }
            return e
        }

        function cf_e(e, t, n, i, s) {
            return is_boolean(n) || (n = !0), is_boolean(i) || (i = !0), is_boolean(s) || (s = !1), n && (e = t.events.prefix + e), i && (e = e + "." + t.events.namespace), i && s && (e += t.serialNumber), e
        }

        function cf_c(e, t) {
            return is_string(t.classnames[e]) ? t.classnames[e] : e
        }

        function cf_mapWrapperSizes(e, t, n) {
            is_boolean(n) || (n = !0);
            var i = t.usePadding && n ? t.padding : [0, 0, 0, 0],
                s = {};
            return s[t.d.width] = e[0] + i[1] + i[3], s[t.d.height] = e[1] + i[0] + i[2], s
        }

        function cf_sortParams(e, t) {
            for (var n = [], i = 0, s = e.length; s > i; i++)
                for (var a = 0, r = t.length; r > a; a++)
                    if (t[a].indexOf(typeof e[i]) > -1 && is_undefined(n[a])) {
                        n[a] = e[i];
                        break
                    } return n
        }

        function cf_getPadding(e) {
            if (is_undefined(e)) return [0, 0, 0, 0];
            if (is_number(e)) return [e, e, e, e];
            if (is_string(e) && (e = e.split("px").join("").split("em").join("").split(" ")), !is_array(e)) return [0, 0, 0, 0];
            for (var t = 0; 4 > t; t++) e[t] = parseInt(e[t], 10);
            switch (e.length) {
                case 0:
                    return [0, 0, 0, 0];
                case 1:
                    return [e[0], e[0], e[0], e[0]];
                case 2:
                    return [e[0], e[1], e[0], e[1]];
                case 3:
                    return [e[0], e[1], e[2], e[1]];
                default:
                    return [e[0], e[1], e[2], e[3]]
            }
        }

        function cf_getAlignPadding(e, t) {
            var n = is_number(t[t.d.width]) ? Math.ceil(t[t.d.width] - ms_getTotalSize(e, t, "width")) : 0;
            switch (t.align) {
                case "left":
                    return [0, n];
                case "right":
                    return [n, 0];
                case "center":
                default:
                    return [Math.ceil(n / 2), Math.floor(n / 2)]
            }
        }

        function cf_getDimensions(e) {
            for (var t = [
                    ["width", "innerWidth", "outerWidth", "height", "innerHeight", "outerHeight", "left", "top", "marginRight", 0, 1, 2, 3],
                    ["height", "innerHeight", "outerHeight", "width", "innerWidth", "outerWidth", "top", "left", "marginBottom", 3, 2, 1, 0]
                ], n = t[0].length, i = "right" == e.direction || "left" == e.direction ? 0 : 1, s = {}, a = 0; n > a; a++) s[t[0][a]] = t[i][a];
            return s
        }

        function cf_getAdjust(e, t, n, i) {
            var s = e;
            if (is_function(n)) s = n.call(i, s);
            else if (is_string(n)) {
                var a = n.split("+"),
                    r = n.split("-");
                if (r.length > a.length) var o = !0,
                    l = r[0],
                    c = r[1];
                else var o = !1,
                    l = a[0],
                    c = a[1];
                switch (l) {
                    case "even":
                        s = 1 == e % 2 ? e - 1 : e;
                        break;
                    case "odd":
                        s = 0 == e % 2 ? e - 1 : e;
                        break;
                    default:
                        s = e
                }
                c = parseInt(c, 10), is_number(c) && (o && (c = -c), s += c)
            }
            return (!is_number(s) || 1 > s) && (s = 1), s
        }

        function cf_getItemsAdjust(e, t, n, i) {
            return cf_getItemAdjustMinMax(cf_getAdjust(e, t, n, i), t.items.visibleConf)
        }

        function cf_getItemAdjustMinMax(e, t) {
            return is_number(t.min) && t.min > e && (e = t.min), is_number(t.max) && e > t.max && (e = t.max), 1 > e && (e = 1), e
        }

        function cf_getSynchArr(e) {
            is_array(e) || (e = [
                [e]
            ]), is_array(e[0]) || (e = [e]);
            for (var t = 0, n = e.length; n > t; t++) is_string(e[t][0]) && (e[t][0] = $(e[t][0])), is_boolean(e[t][1]) || (e[t][1] = !0), is_boolean(e[t][2]) || (e[t][2] = !0), is_number(e[t][3]) || (e[t][3] = 0);
            return e
        }

        function cf_getKeyCode(e) {
            return "right" == e ? 39 : "left" == e ? 37 : "up" == e ? 38 : "down" == e ? 40 : -1
        }

        function cf_setCookie(e, t, n) {
            if (e) {
                var i = t.triggerHandler(cf_e("currentPosition", n));
                $.fn.carouFredSel.cookie.set(e, i)
            }
        }

        function cf_getCookie(e) {
            var t = $.fn.carouFredSel.cookie.get(e);
            return "" == t ? 0 : t
        }

        function in_mapCss(e, t) {
            for (var n = {}, i = 0, s = t.length; s > i; i++) n[t[i]] = e.css(t[i]);
            return n
        }

        function in_complementItems(e, t, n, i) {
            return is_object(e.visibleConf) || (e.visibleConf = {}), is_object(e.sizesConf) || (e.sizesConf = {}), 0 == e.start && is_number(i) && (e.start = i), is_object(e.visible) ? (e.visibleConf.min = e.visible.min, e.visibleConf.max = e.visible.max, e.visible = !1) : is_string(e.visible) ? ("variable" == e.visible ? e.visibleConf.variable = !0 : e.visibleConf.adjust = e.visible, e.visible = !1) : is_function(e.visible) && (e.visibleConf.adjust = e.visible, e.visible = !1), is_string(e.filter) || (e.filter = n.filter(":hidden").length > 0 ? ":visible" : "*"), e[t.d.width] || (t.responsive ? (debug(!0, "Set a " + t.d.width + " for the items!"), e[t.d.width] = ms_getTrueLargestSize(n, t, "outerWidth")) : e[t.d.width] = ms_hasVariableSizes(n, t, "outerWidth") ? "variable" : n[t.d.outerWidth](!0)), e[t.d.height] || (e[t.d.height] = ms_hasVariableSizes(n, t, "outerHeight") ? "variable" : n[t.d.outerHeight](!0)), e.sizesConf.width = e.width, e.sizesConf.height = e.height, e
        }

        function in_complementVisibleItems(e, t) {
            return "variable" == e.items[e.d.width] && (e.items.visibleConf.variable = !0), e.items.visibleConf.variable || (is_number(e[e.d.width]) ? e.items.visible = Math.floor(e[e.d.width] / e.items[e.d.width]) : (e.items.visible = Math.floor(t / e.items[e.d.width]), e[e.d.width] = e.items.visible * e.items[e.d.width], e.items.visibleConf.adjust || (e.align = !1)), ("Infinity" == e.items.visible || 1 > e.items.visible) && (debug(!0, 'Not a valid number of visible items: Set to "variable".'), e.items.visibleConf.variable = !0)), e
        }

        function in_complementPrimarySize(e, t, n) {
            return "auto" == e && (e = ms_getTrueLargestSize(n, t, "outerWidth")), e
        }

        function in_complementSecondarySize(e, t, n) {
            return "auto" == e && (e = ms_getTrueLargestSize(n, t, "outerHeight")), e || (e = t.items[t.d.height]), e
        }

        function in_getAlignPadding(e, t) {
            var n = cf_getAlignPadding(gi_getCurrentItems(t, e), e);
            return e.padding[e.d[1]] = n[1], e.padding[e.d[3]] = n[0], e
        }

        function in_getResponsiveValues(e, t) {
            var n = cf_getItemAdjustMinMax(Math.ceil(e[e.d.width] / e.items[e.d.width]), e.items.visibleConf);
            n > t.length && (n = t.length);
            var i = Math.floor(e[e.d.width] / n);
            return e.items.visible = n, e.items[e.d.width] = i, e[e.d.width] = n * i, e
        }

        function bt_pauseOnHoverConfig(e) {
            if (is_string(e)) var t = e.indexOf("immediate") > -1,
                n = e.indexOf("resume") > -1;
            else var t = n = !1;
            return [t, n]
        }

        function bt_mousesheelNumber(e) {
            return is_number(e) ? e : null
        }

        function is_null(e) {
            return null === e
        }

        function is_undefined(e) {
            return is_null(e) || void 0 === e || "" === e || "undefined" === e
        }

        function is_array(e) {
            return e instanceof Array
        }

        function is_jquery(e) {
            return e instanceof jQuery
        }

        function is_object(e) {
            return (e instanceof Object || "object" == typeof e) && !is_null(e) && !is_jquery(e) && !is_array(e) && !is_function(e)
        }

        function is_number(e) {
            return (e instanceof Number || "number" == typeof e) && !isNaN(e)
        }

        function is_string(e) {
            return (e instanceof String || "string" == typeof e) && !is_undefined(e) && !is_true(e) && !is_false(e)
        }

        function is_function(e) {
            return e instanceof Function || "function" == typeof e
        }

        function is_boolean(e) {
            return e instanceof Boolean || "boolean" == typeof e || is_true(e) || is_false(e)
        }

        function is_true(e) {
            return e === !0 || "true" === e
        }

        function is_false(e) {
            return e === !1 || "false" === e
        }

        function is_percentage(e) {
            return is_string(e) && "%" == e.slice(-1)
        }

        function getTime() {
            return (new Date).getTime()
        }

        function deprecated(e, t) {
            debug(!0, e + " is DEPRECATED, support for it will be removed. Use " + t + " instead.")
        }

        function debug(e, t) {
            if (!is_undefined(window.console) && !is_undefined(window.console.log)) {
                if (is_object(e)) {
                    var n = " (" + e.selector + ")";
                    e = e.debug
                } else var n = "";
                if (!e) return !1;
                t = is_string(t) ? "carouFredSel" + n + ": " + t : ["carouFredSel" + n + ":", t], window.console.log(t)
            }
            return !1
        }
        $.fn.carouFredSel || ($.fn.caroufredsel = $.fn.carouFredSel = function(options, configs) {
            if (0 == this.length) return debug(!0, 'No element found for "' + this.selector + '".'), this;
            if (this.length > 1) return this.each(function() {
                $(this).carouFredSel(options, configs)
            });
            var $cfs = this,
                $tt0 = this[0],
                starting_position = !1;
            $cfs.data("_cfs_isCarousel") && (starting_position = $cfs.triggerHandler("_cfs_triggerEvent", "currentPosition"), $cfs.trigger("_cfs_triggerEvent", ["destroy", !0]));
            var FN = {};
            FN._init = function(e, t, n) {
                e = go_getObject($tt0, e), e.items = go_getItemsObject($tt0, e.items), e.scroll = go_getScrollObject($tt0, e.scroll), e.auto = go_getAutoObject($tt0, e.auto), e.prev = go_getPrevNextObject($tt0, e.prev), e.next = go_getPrevNextObject($tt0, e.next), e.pagination = go_getPaginationObject($tt0, e.pagination), e.swipe = go_getSwipeObject($tt0, e.swipe), e.mousewheel = go_getMousewheelObject($tt0, e.mousewheel), t && (opts_orig = $.extend(!0, {}, $.fn.carouFredSel.defaults, e)), opts = $.extend(!0, {}, $.fn.carouFredSel.defaults, e), opts.d = cf_getDimensions(opts), crsl.direction = "up" == opts.direction || "left" == opts.direction ? "next" : "prev";
                var i = $cfs.children(),
                    s = ms_getParentSize($wrp, opts, "width");
                if (is_true(opts.cookie) && (opts.cookie = "caroufredsel_cookie_" + conf.serialNumber), opts.maxDimension = ms_getMaxDimension(opts, s), opts.items = in_complementItems(opts.items, opts, i, n), opts[opts.d.width] = in_complementPrimarySize(opts[opts.d.width], opts, i), opts[opts.d.height] = in_complementSecondarySize(opts[opts.d.height], opts, i), opts.responsive && (is_percentage(opts[opts.d.width]) || (opts[opts.d.width] = "100%")), is_percentage(opts[opts.d.width]) && (crsl.upDateOnWindowResize = !0, crsl.primarySizePercentage = opts[opts.d.width], opts[opts.d.width] = ms_getPercentage(s, crsl.primarySizePercentage), opts.items.visible || (opts.items.visibleConf.variable = !0)), opts.responsive ? (opts.usePadding = !1, opts.padding = [0, 0, 0, 0], opts.align = !1, opts.items.visibleConf.variable = !1) : (opts.items.visible || (opts = in_complementVisibleItems(opts, s)), opts[opts.d.width] || (!opts.items.visibleConf.variable && is_number(opts.items[opts.d.width]) && "*" == opts.items.filter ? (opts[opts.d.width] = opts.items.visible * opts.items[opts.d.width], opts.align = !1) : opts[opts.d.width] = "variable"), is_undefined(opts.align) && (opts.align = is_number(opts[opts.d.width]) ? "center" : !1), opts.items.visibleConf.variable && (opts.items.visible = gn_getVisibleItemsNext(i, opts, 0))), "*" == opts.items.filter || opts.items.visibleConf.variable || (opts.items.visibleConf.org = opts.items.visible, opts.items.visible = gn_getVisibleItemsNextFilter(i, opts, 0)), opts.items.visible = cf_getItemsAdjust(opts.items.visible, opts, opts.items.visibleConf.adjust, $tt0), opts.items.visibleConf.old = opts.items.visible, opts.responsive) opts.items.visibleConf.min || (opts.items.visibleConf.min = opts.items.visible), opts.items.visibleConf.max || (opts.items.visibleConf.max = opts.items.visible), opts = in_getResponsiveValues(opts, i, s);
                else switch (opts.padding = cf_getPadding(opts.padding), "top" == opts.align ? opts.align = "left" : "bottom" == opts.align && (opts.align = "right"), opts.align) {
                    case "center":
                    case "left":
                    case "right":
                        "variable" != opts[opts.d.width] && (opts = in_getAlignPadding(opts, i), opts.usePadding = !0);
                        break;
                    default:
                        opts.align = !1, opts.usePadding = 0 != opts.padding[0] || 0 != opts.padding[1] || 0 != opts.padding[2] || 0 != opts.padding[3]
                }
                is_number(opts.scroll.duration) || (opts.scroll.duration = 500), is_undefined(opts.scroll.items) && (opts.scroll.items = opts.responsive || opts.items.visibleConf.variable || "*" != opts.items.filter ? "visible" : opts.items.visible), opts.auto = $.extend(!0, {}, opts.scroll, opts.auto), opts.prev = $.extend(!0, {}, opts.scroll, opts.prev), opts.next = $.extend(!0, {}, opts.scroll, opts.next), opts.pagination = $.extend(!0, {}, opts.scroll, opts.pagination), opts.auto = go_complementAutoObject($tt0, opts.auto), opts.prev = go_complementPrevNextObject($tt0, opts.prev), opts.next = go_complementPrevNextObject($tt0, opts.next), opts.pagination = go_complementPaginationObject($tt0, opts.pagination), opts.swipe = go_complementSwipeObject($tt0, opts.swipe), opts.mousewheel = go_complementMousewheelObject($tt0, opts.mousewheel), opts.synchronise && (opts.synchronise = cf_getSynchArr(opts.synchronise)), opts.auto.onPauseStart && (opts.auto.onTimeoutStart = opts.auto.onPauseStart, deprecated("auto.onPauseStart", "auto.onTimeoutStart")), opts.auto.onPausePause && (opts.auto.onTimeoutPause = opts.auto.onPausePause, deprecated("auto.onPausePause", "auto.onTimeoutPause")), opts.auto.onPauseEnd && (opts.auto.onTimeoutEnd = opts.auto.onPauseEnd, deprecated("auto.onPauseEnd", "auto.onTimeoutEnd")), opts.auto.pauseDuration && (opts.auto.timeoutDuration = opts.auto.pauseDuration, deprecated("auto.pauseDuration", "auto.timeoutDuration"))
            }, FN._build = function() {
                $cfs.data("_cfs_isCarousel", !0);
                var e = $cfs.children(),
                    t = in_mapCss($cfs, ["textAlign", "float", "position", "top", "right", "bottom", "left", "zIndex", "width", "height", "marginTop", "marginRight", "marginBottom", "marginLeft"]),
                    n = "relative";
                switch (t.position) {
                    case "absolute":
                    case "fixed":
                        n = t.position
                }
                "parent" == conf.wrapper ? sz_storeOrigCss($wrp) : $wrp.css(t), $wrp.css({
                    overflow: "hidden",
                    position: n
                }), sz_storeOrigCss($cfs), $cfs.data("_cfs_origCssZindex", t.zIndex), $cfs.css({
                    textAlign: "left",
                    "float": "none",
                    position: "absolute",
                    top: 0,
                    right: "auto",
                    bottom: "auto",
                    left: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0
                }), sz_storeMargin(e, opts), sz_storeOrigCss(e), opts.responsive && sz_setResponsiveSizes(opts, e)
            }, FN._bind_events = function() {
                FN._unbind_events(), $cfs.bind(cf_e("stop", conf), function(e, t) {
                    return e.stopPropagation(), crsl.isStopped || opts.auto.button && opts.auto.button.addClass(cf_c("stopped", conf)), crsl.isStopped = !0, opts.auto.play && (opts.auto.play = !1, $cfs.trigger(cf_e("pause", conf), t)), !0
                }), $cfs.bind(cf_e("finish", conf), function(e) {
                    return e.stopPropagation(), crsl.isScrolling && sc_stopScroll(scrl), !0
                }), $cfs.bind(cf_e("pause", conf), function(e, t, n) {
                    if (e.stopPropagation(), tmrs = sc_clearTimers(tmrs), t && crsl.isScrolling) {
                        scrl.isStopped = !0;
                        var i = getTime() - scrl.startTime;
                        scrl.duration -= i, scrl.pre && (scrl.pre.duration -= i), scrl.post && (scrl.post.duration -= i), sc_stopScroll(scrl, !1)
                    }
                    if (crsl.isPaused || crsl.isScrolling || n && (tmrs.timePassed += getTime() - tmrs.startTime), crsl.isPaused || opts.auto.button && opts.auto.button.addClass(cf_c("paused", conf)), crsl.isPaused = !0, opts.auto.onTimeoutPause) {
                        var s = opts.auto.timeoutDuration - tmrs.timePassed,
                            a = 100 - Math.ceil(100 * s / opts.auto.timeoutDuration);
                        opts.auto.onTimeoutPause.call($tt0, a, s)
                    }
                    return !0
                }), $cfs.bind(cf_e("play", conf), function(e, t, n, i) {
                    e.stopPropagation(), tmrs = sc_clearTimers(tmrs);
                    var s = [t, n, i],
                        a = ["string", "number", "boolean"],
                        r = cf_sortParams(s, a);
                    if (t = r[0], n = r[1], i = r[2], "prev" != t && "next" != t && (t = crsl.direction), is_number(n) || (n = 0), is_boolean(i) || (i = !1), i && (crsl.isStopped = !1, opts.auto.play = !0), !opts.auto.play) return e.stopImmediatePropagation(), debug(conf, "Carousel stopped: Not scrolling.");
                    crsl.isPaused && opts.auto.button && (opts.auto.button.removeClass(cf_c("stopped", conf)), opts.auto.button.removeClass(cf_c("paused", conf))), crsl.isPaused = !1, tmrs.startTime = getTime();
                    var o = opts.auto.timeoutDuration + n;
                    return dur2 = o - tmrs.timePassed, perc = 100 - Math.ceil(100 * dur2 / o), opts.auto.progress && (tmrs.progress = setInterval(function() {
                        var e = getTime() - tmrs.startTime + tmrs.timePassed,
                            t = Math.ceil(100 * e / o);
                        opts.auto.progress.updater.call(opts.auto.progress.bar[0], t)
                    }, opts.auto.progress.interval)), tmrs.auto = setTimeout(function() {
                        opts.auto.progress && opts.auto.progress.updater.call(opts.auto.progress.bar[0], 100), opts.auto.onTimeoutEnd && opts.auto.onTimeoutEnd.call($tt0, perc, dur2), crsl.isScrolling ? $cfs.trigger(cf_e("play", conf), t) : $cfs.trigger(cf_e(t, conf), opts.auto)
                    }, dur2), opts.auto.onTimeoutStart && opts.auto.onTimeoutStart.call($tt0, perc, dur2), !0
                }), $cfs.bind(cf_e("resume", conf), function(e) {
                    return e.stopPropagation(), scrl.isStopped ? (scrl.isStopped = !1, crsl.isPaused = !1, crsl.isScrolling = !0, scrl.startTime = getTime(), sc_startScroll(scrl, conf)) : $cfs.trigger(cf_e("play", conf)), !0
                }), $cfs.bind(cf_e("prev", conf) + " " + cf_e("next", conf), function(e, t, n, i, s) {
                    if (e.stopPropagation(), crsl.isStopped || $cfs.is(":hidden")) return e.stopImmediatePropagation(), debug(conf, "Carousel stopped or hidden: Not scrolling.");
                    var a = is_number(opts.items.minimum) ? opts.items.minimum : opts.items.visible + 1;
                    if (a > itms.total) return e.stopImmediatePropagation(), debug(conf, "Not enough items (" + itms.total + " total, " + a + " needed): Not scrolling.");
                    var r = [t, n, i, s],
                        o = ["object", "number/string", "function", "boolean"],
                        l = cf_sortParams(r, o);
                    t = l[0], n = l[1], i = l[2], s = l[3];
                    var c = e.type.slice(conf.events.prefix.length);
                    if (is_object(t) || (t = {}), is_function(i) && (t.onAfter = i), is_boolean(s) && (t.queue = s), t = $.extend(!0, {}, opts[c], t), t.conditions && !t.conditions.call($tt0, c)) return e.stopImmediatePropagation(), debug(conf, 'Callback "conditions" returned false.');
                    if (!is_number(n)) {
                        if ("*" != opts.items.filter) n = "visible";
                        else
                            for (var d = [n, t.items, opts[c].items], l = 0, p = d.length; p > l; l++)
                                if (is_number(d[l]) || "page" == d[l] || "visible" == d[l]) {
                                    n = d[l];
                                    break
                                } switch (n) {
                            case "page":
                                return e.stopImmediatePropagation(), $cfs.triggerHandler(cf_e(c + "Page", conf), [t, i]);
                            case "visible":
                                opts.items.visibleConf.variable || "*" != opts.items.filter || (n = opts.items.visible)
                        }
                    }
                    if (scrl.isStopped) return $cfs.trigger(cf_e("resume", conf)), $cfs.trigger(cf_e("queue", conf), [c, [t, n, i]]), e.stopImmediatePropagation(), debug(conf, "Carousel resumed scrolling.");
                    if (t.duration > 0 && crsl.isScrolling) return t.queue && ("last" == t.queue && (queu = []), ("first" != t.queue || 0 == queu.length) && $cfs.trigger(cf_e("queue", conf), [c, [t, n, i]])), e.stopImmediatePropagation(), debug(conf, "Carousel currently scrolling.");
                    if (tmrs.timePassed = 0, $cfs.trigger(cf_e("slide_" + c, conf), [t, n]), opts.synchronise)
                        for (var u = opts.synchronise, f = [t, n], h = 0, p = u.length; p > h; h++) {
                            var m = c;
                            u[h][2] || (m = "prev" == m ? "next" : "prev"), u[h][1] || (f[0] = u[h][0].triggerHandler("_cfs_triggerEvent", ["configuration", m])), f[1] = n + u[h][3], u[h][0].trigger("_cfs_triggerEvent", ["slide_" + m, f])
                        }
                    return !0
                }), $cfs.bind(cf_e("slide_prev", conf), function(e, t, n) {
                    e.stopPropagation();
                    var i = $cfs.children();
                    if (!opts.circular && 0 == itms.first) return opts.infinite && $cfs.trigger(cf_e("next", conf), itms.total - 1), e.stopImmediatePropagation();
                    if (sz_resetMargin(i, opts), !is_number(n)) {
                        if (opts.items.visibleConf.variable) n = gn_getVisibleItemsPrev(i, opts, itms.total - 1);
                        else if ("*" != opts.items.filter) {
                            var s = is_number(t.items) ? t.items : gn_getVisibleOrg($cfs, opts);
                            n = gn_getScrollItemsPrevFilter(i, opts, itms.total - 1, s)
                        } else n = opts.items.visible;
                        n = cf_getAdjust(n, opts, t.items, $tt0)
                    }
                    if (opts.circular || itms.total - n < itms.first && (n = itms.total - itms.first), opts.items.visibleConf.old = opts.items.visible, opts.items.visibleConf.variable) {
                        var a = cf_getItemsAdjust(gn_getVisibleItemsNext(i, opts, itms.total - n), opts, opts.items.visibleConf.adjust, $tt0);
                        a >= opts.items.visible + n && itms.total > n && (n++, a = cf_getItemsAdjust(gn_getVisibleItemsNext(i, opts, itms.total - n), opts, opts.items.visibleConf.adjust, $tt0)), opts.items.visible = a
                    } else if ("*" != opts.items.filter) {
                        var a = gn_getVisibleItemsNextFilter(i, opts, itms.total - n);
                        opts.items.visible = cf_getItemsAdjust(a, opts, opts.items.visibleConf.adjust, $tt0)
                    }
                    if (sz_resetMargin(i, opts, !0), 0 == n) return e.stopImmediatePropagation(), debug(conf, "0 items to scroll: Not scrolling.");
                    for (debug(conf, "Scrolling " + n + " items backward."), itms.first += n; itms.first >= itms.total;) itms.first -= itms.total;
                    opts.circular || (0 == itms.first && t.onEnd && t.onEnd.call($tt0, "prev"), opts.infinite || nv_enableNavi(opts, itms.first, conf)), $cfs.children().slice(itms.total - n, itms.total).prependTo($cfs), itms.total < opts.items.visible + n && $cfs.children().slice(0, opts.items.visible + n - itms.total).clone(!0).appendTo($cfs);
                    var i = $cfs.children(),
                        r = gi_getOldItemsPrev(i, opts, n),
                        o = gi_getNewItemsPrev(i, opts),
                        l = i.eq(n - 1),
                        c = r.last(),
                        d = o.last();
                    sz_resetMargin(i, opts);
                    var p = 0,
                        u = 0;
                    if (opts.align) {
                        var f = cf_getAlignPadding(o, opts);
                        p = f[0], u = f[1]
                    }
                    var h = 0 > p ? opts.padding[opts.d[3]] : 0,
                        m = !1,
                        v = $();
                    if (n > opts.items.visible && (v = i.slice(opts.items.visibleConf.old, n), "directscroll" == t.fx)) {
                        var g = opts.items[opts.d.width];
                        m = v, l = d, sc_hideHiddenItems(m), opts.items[opts.d.width] = "variable"
                    }
                    var b = !1,
                        y = ms_getTotalSize(i.slice(0, n), opts, "width"),
                        w = cf_mapWrapperSizes(ms_getSizes(o, opts, !0), opts, !opts.usePadding),
                        _ = 0,
                        x = {},
                        C = {},
                        S = {},
                        T = {},
                        P = {},
                        k = {},
                        I = {},
                        M = sc_getDuration(t, opts, n, y);
                    switch (t.fx) {
                        case "cover":
                        case "cover-fade":
                            _ = ms_getTotalSize(i.slice(0, opts.items.visible), opts, "width")
                    }
                    m && (opts.items[opts.d.width] = g), sz_resetMargin(i, opts, !0), u >= 0 && sz_resetMargin(c, opts, opts.padding[opts.d[1]]), p >= 0 && sz_resetMargin(l, opts, opts.padding[opts.d[3]]), opts.align && (opts.padding[opts.d[1]] = u, opts.padding[opts.d[3]] = p), k[opts.d.left] = -(y - h), I[opts.d.left] = -(_ - h), C[opts.d.left] = w[opts.d.width];
                    var E = function() {},
                        N = function() {},
                        A = function() {},
                        O = function() {},
                        j = function() {},
                        z = function() {},
                        D = function() {},
                        H = function() {},
                        L = function() {},
                        F = function() {},
                        R = function() {};
                    switch (t.fx) {
                        case "crossfade":
                        case "cover":
                        case "cover-fade":
                        case "uncover":
                        case "uncover-fade":
                            b = $cfs.clone(!0).appendTo($wrp)
                    }
                    switch (t.fx) {
                        case "crossfade":
                        case "uncover":
                        case "uncover-fade":
                            b.children().slice(0, n).remove(), b.children().slice(opts.items.visibleConf.old).remove();
                            break;
                        case "cover":
                        case "cover-fade":
                            b.children().slice(opts.items.visible).remove(), b.css(I)
                    }
                    if ($cfs.css(k), scrl = sc_setScroll(M, t.easing, conf), x[opts.d.left] = opts.usePadding ? opts.padding[opts.d[3]] : 0, ("variable" == opts[opts.d.width] || "variable" == opts[opts.d.height]) && (E = function() {
                            $wrp.css(w)
                        }, N = function() {
                            scrl.anims.push([$wrp, w])
                        }), opts.usePadding) {
                        switch (d.not(l).length && (S[opts.d.marginRight] = l.data("_cfs_origCssMargin"), 0 > p ? l.css(S) : (D = function() {
                            l.css(S)
                        }, H = function() {
                            scrl.anims.push([l, S])
                        })), t.fx) {
                            case "cover":
                            case "cover-fade":
                                b.children().eq(n - 1).css(S)
                        }
                        d.not(c).length && (T[opts.d.marginRight] = c.data("_cfs_origCssMargin"), A = function() {
                            c.css(T)
                        }, O = function() {
                            scrl.anims.push([c, T])
                        }), u >= 0 && (P[opts.d.marginRight] = d.data("_cfs_origCssMargin") + opts.padding[opts.d[1]], j = function() {
                            d.css(P)
                        }, z = function() {
                            scrl.anims.push([d, P])
                        })
                    }
                    R = function() {
                        $cfs.css(x)
                    };
                    var B = opts.items.visible + n - itms.total;
                    F = function() {
                        if (B > 0 && ($cfs.children().slice(itms.total).remove(), r = $($cfs.children().slice(itms.total - (opts.items.visible - B)).get().concat($cfs.children().slice(0, B).get()))), sc_showHiddenItems(m), opts.usePadding) {
                            var e = $cfs.children().eq(opts.items.visible + n - 1);
                            e.css(opts.d.marginRight, e.data("_cfs_origCssMargin"))
                        }
                    };
                    var W = sc_mapCallbackArguments(r, v, o, n, "prev", M, w);
                    switch (L = function() {
                        sc_afterScroll($cfs, b, t), crsl.isScrolling = !1, clbk.onAfter = sc_fireCallbacks($tt0, t, "onAfter", W, clbk), queu = sc_fireQueue($cfs, queu, conf), crsl.isPaused || $cfs.trigger(cf_e("play", conf))
                    }, crsl.isScrolling = !0, tmrs = sc_clearTimers(tmrs), clbk.onBefore = sc_fireCallbacks($tt0, t, "onBefore", W, clbk), t.fx) {
                        case "none":
                            $cfs.css(x), E(), A(), j(), D(), R(), F(), L();
                            break;
                        case "fade":
                            scrl.anims.push([$cfs, {
                                opacity: 0
                            }, function() {
                                E(), A(), j(), D(), R(), F(), scrl = sc_setScroll(M, t.easing, conf), scrl.anims.push([$cfs, {
                                    opacity: 1
                                }, L]), sc_startScroll(scrl, conf)
                            }]);
                            break;
                        case "crossfade":
                            $cfs.css({
                                opacity: 0
                            }), scrl.anims.push([b, {
                                opacity: 0
                            }]), scrl.anims.push([$cfs, {
                                opacity: 1
                            }, L]), N(), A(), j(), D(), R(), F();
                            break;
                        case "cover":
                            scrl.anims.push([b, x, function() {
                                A(), j(), D(), R(), F(), L()
                            }]), N();
                            break;
                        case "cover-fade":
                            scrl.anims.push([$cfs, {
                                opacity: 0
                            }]), scrl.anims.push([b, x, function() {
                                A(), j(), D(), R(), F(), L()
                            }]), N();
                            break;
                        case "uncover":
                            scrl.anims.push([b, C, L]), N(), A(), j(), D(), R(), F();
                            break;
                        case "uncover-fade":
                            $cfs.css({
                                opacity: 0
                            }), scrl.anims.push([$cfs, {
                                opacity: 1
                            }]), scrl.anims.push([b, C, L]), N(), A(), j(), D(), R(), F();
                            break;
                        default:
                            scrl.anims.push([$cfs, x, function() {
                                F(), L()
                            }]), N(), O(), z(), H()
                    }
                    return sc_startScroll(scrl, conf), cf_setCookie(opts.cookie, $cfs, conf), $cfs.trigger(cf_e("updatePageStatus", conf), [!1, w]), !0
                }), $cfs.bind(cf_e("slide_next", conf), function(e, t, n) {
                    e.stopPropagation();
                    var i = $cfs.children();
                    if (!opts.circular && itms.first == opts.items.visible) return opts.infinite && $cfs.trigger(cf_e("prev", conf), itms.total - 1), e.stopImmediatePropagation();
                    if (sz_resetMargin(i, opts), !is_number(n)) {
                        if ("*" != opts.items.filter) {
                            var s = is_number(t.items) ? t.items : gn_getVisibleOrg($cfs, opts);
                            n = gn_getScrollItemsNextFilter(i, opts, 0, s)
                        } else n = opts.items.visible;
                        n = cf_getAdjust(n, opts, t.items, $tt0)
                    }
                    var a = 0 == itms.first ? itms.total : itms.first;
                    if (!opts.circular) {
                        if (opts.items.visibleConf.variable) var r = gn_getVisibleItemsNext(i, opts, n),
                            s = gn_getVisibleItemsPrev(i, opts, a - 1);
                        else var r = opts.items.visible,
                            s = opts.items.visible;
                        n + r > a && (n = a - s)
                    }
                    if (opts.items.visibleConf.old = opts.items.visible, opts.items.visibleConf.variable) {
                        for (var r = cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(i, opts, n, a), opts, opts.items.visibleConf.adjust, $tt0); opts.items.visible - n >= r && itms.total > n;) n++, r = cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(i, opts, n, a), opts, opts.items.visibleConf.adjust, $tt0);
                        opts.items.visible = r
                    } else if ("*" != opts.items.filter) {
                        var r = gn_getVisibleItemsNextFilter(i, opts, n);
                        opts.items.visible = cf_getItemsAdjust(r, opts, opts.items.visibleConf.adjust, $tt0)
                    }
                    if (sz_resetMargin(i, opts, !0), 0 == n) return e.stopImmediatePropagation(), debug(conf, "0 items to scroll: Not scrolling.");
                    for (debug(conf, "Scrolling " + n + " items forward."), itms.first -= n; 0 > itms.first;) itms.first += itms.total;
                    opts.circular || (itms.first == opts.items.visible && t.onEnd && t.onEnd.call($tt0, "next"), opts.infinite || nv_enableNavi(opts, itms.first, conf)), itms.total < opts.items.visible + n && $cfs.children().slice(0, opts.items.visible + n - itms.total).clone(!0).appendTo($cfs);
                    var i = $cfs.children(),
                        o = gi_getOldItemsNext(i, opts),
                        l = gi_getNewItemsNext(i, opts, n),
                        c = i.eq(n - 1),
                        d = o.last(),
                        p = l.last();
                    sz_resetMargin(i, opts);
                    var u = 0,
                        f = 0;
                    if (opts.align) {
                        var h = cf_getAlignPadding(l, opts);
                        u = h[0], f = h[1]
                    }
                    var m = !1,
                        v = $();
                    if (n > opts.items.visibleConf.old && (v = i.slice(opts.items.visibleConf.old, n), "directscroll" == t.fx)) {
                        var g = opts.items[opts.d.width];
                        m = v, c = d, sc_hideHiddenItems(m), opts.items[opts.d.width] = "variable"
                    }
                    var b = !1,
                        y = ms_getTotalSize(i.slice(0, n), opts, "width"),
                        w = cf_mapWrapperSizes(ms_getSizes(l, opts, !0), opts, !opts.usePadding),
                        _ = 0,
                        x = {},
                        C = {},
                        S = {},
                        T = {},
                        P = {},
                        k = sc_getDuration(t, opts, n, y);
                    switch (t.fx) {
                        case "uncover":
                        case "uncover-fade":
                            _ = ms_getTotalSize(i.slice(0, opts.items.visibleConf.old), opts, "width")
                    }
                    m && (opts.items[opts.d.width] = g), opts.align && 0 > opts.padding[opts.d[1]] && (opts.padding[opts.d[1]] = 0), sz_resetMargin(i, opts, !0), sz_resetMargin(d, opts, opts.padding[opts.d[1]]), opts.align && (opts.padding[opts.d[1]] = f, opts.padding[opts.d[3]] = u), P[opts.d.left] = opts.usePadding ? opts.padding[opts.d[3]] : 0;
                    var I = function() {},
                        M = function() {},
                        E = function() {},
                        N = function() {},
                        A = function() {},
                        O = function() {},
                        j = function() {},
                        z = function() {},
                        D = function() {};
                    switch (t.fx) {
                        case "crossfade":
                        case "cover":
                        case "cover-fade":
                        case "uncover":
                        case "uncover-fade":
                            b = $cfs.clone(!0).appendTo($wrp), b.children().slice(opts.items.visibleConf.old).remove()
                    }
                    switch (t.fx) {
                        case "crossfade":
                        case "cover":
                        case "cover-fade":
                            $cfs.css("zIndex", 1), b.css("zIndex", 0)
                    }
                    if (scrl = sc_setScroll(k, t.easing, conf), x[opts.d.left] = -y, C[opts.d.left] = -_, 0 > u && (x[opts.d.left] += u), ("variable" == opts[opts.d.width] || "variable" == opts[opts.d.height]) && (I = function() {
                            $wrp.css(w)
                        }, M = function() {
                            scrl.anims.push([$wrp, w])
                        }), opts.usePadding) {
                        var H = p.data("_cfs_origCssMargin");
                        f >= 0 && (H += opts.padding[opts.d[1]]), p.css(opts.d.marginRight, H), c.not(d).length && (T[opts.d.marginRight] = d.data("_cfs_origCssMargin")), E = function() {
                            d.css(T)
                        }, N = function() {
                            scrl.anims.push([d, T])
                        };
                        var L = c.data("_cfs_origCssMargin");
                        u > 0 && (L += opts.padding[opts.d[3]]), S[opts.d.marginRight] = L, A = function() {
                            c.css(S)
                        }, O = function() {
                            scrl.anims.push([c, S])
                        }
                    }
                    D = function() {
                        $cfs.css(P)
                    };
                    var F = opts.items.visible + n - itms.total;
                    z = function() {
                        F > 0 && $cfs.children().slice(itms.total).remove();
                        var e = $cfs.children().slice(0, n).appendTo($cfs).last();
                        if (F > 0 && (l = gi_getCurrentItems(i, opts)), sc_showHiddenItems(m), opts.usePadding) {
                            if (itms.total < opts.items.visible + n) {
                                var t = $cfs.children().eq(opts.items.visible - 1);
                                t.css(opts.d.marginRight, t.data("_cfs_origCssMargin") + opts.padding[opts.d[1]])
                            }
                            e.css(opts.d.marginRight, e.data("_cfs_origCssMargin"))
                        }
                    };
                    var R = sc_mapCallbackArguments(o, v, l, n, "next", k, w);
                    switch (j = function() {
                        $cfs.css("zIndex", $cfs.data("_cfs_origCssZindex")), sc_afterScroll($cfs, b, t), crsl.isScrolling = !1, clbk.onAfter = sc_fireCallbacks($tt0, t, "onAfter", R, clbk), queu = sc_fireQueue($cfs, queu, conf), crsl.isPaused || $cfs.trigger(cf_e("play", conf))
                    }, crsl.isScrolling = !0, tmrs = sc_clearTimers(tmrs), clbk.onBefore = sc_fireCallbacks($tt0, t, "onBefore", R, clbk), t.fx) {
                        case "none":
                            $cfs.css(x), I(), E(), A(), D(), z(), j();
                            break;
                        case "fade":
                            scrl.anims.push([$cfs, {
                                opacity: 0
                            }, function() {
                                I(), E(), A(), D(), z(), scrl = sc_setScroll(k, t.easing, conf), scrl.anims.push([$cfs, {
                                    opacity: 1
                                }, j]), sc_startScroll(scrl, conf)
                            }]);
                            break;
                        case "crossfade":
                            $cfs.css({
                                opacity: 0
                            }), scrl.anims.push([b, {
                                opacity: 0
                            }]), scrl.anims.push([$cfs, {
                                opacity: 1
                            }, j]), M(), E(), A(), D(), z();
                            break;
                        case "cover":
                            $cfs.css(opts.d.left, $wrp[opts.d.width]()), scrl.anims.push([$cfs, P, j]), M(), E(), A(), z();
                            break;
                        case "cover-fade":
                            $cfs.css(opts.d.left, $wrp[opts.d.width]()), scrl.anims.push([b, {
                                opacity: 0
                            }]), scrl.anims.push([$cfs, P, j]), M(), E(), A(), z();
                            break;
                        case "uncover":
                            scrl.anims.push([b, C, j]), M(), E(), A(), D(), z();
                            break;
                        case "uncover-fade":
                            $cfs.css({
                                opacity: 0
                            }), scrl.anims.push([$cfs, {
                                opacity: 1
                            }]), scrl.anims.push([b, C, j]), M(), E(), A(), D(), z();
                            break;
                        default:
                            scrl.anims.push([$cfs, x, function() {
                                D(), z(), j()
                            }]), M(), N(), O()
                    }
                    return sc_startScroll(scrl, conf), cf_setCookie(opts.cookie, $cfs, conf), $cfs.trigger(cf_e("updatePageStatus", conf), [!1, w]), !0
                }), $cfs.bind(cf_e("slideTo", conf), function(e, t, n, i, s, a, r) {
                    e.stopPropagation();
                    var o = [t, n, i, s, a, r],
                        l = ["string/number/object", "number", "boolean", "object", "string", "function"],
                        c = cf_sortParams(o, l);
                    return s = c[3], a = c[4], r = c[5], t = gn_getItemIndex(c[0], c[1], c[2], itms, $cfs), 0 == t ? !1 : (is_object(s) || (s = !1), "prev" != a && "next" != a && (a = opts.circular ? itms.total / 2 >= t ? "next" : "prev" : 0 == itms.first || itms.first > t ? "next" : "prev"),
                        "prev" == a && (t = itms.total - t), $cfs.trigger(cf_e(a, conf), [s, t, r]), !0)
                }), $cfs.bind(cf_e("prevPage", conf), function(e, t, n) {
                    e.stopPropagation();
                    var i = $cfs.triggerHandler(cf_e("currentPage", conf));
                    return $cfs.triggerHandler(cf_e("slideToPage", conf), [i - 1, t, "prev", n])
                }), $cfs.bind(cf_e("nextPage", conf), function(e, t, n) {
                    e.stopPropagation();
                    var i = $cfs.triggerHandler(cf_e("currentPage", conf));
                    return $cfs.triggerHandler(cf_e("slideToPage", conf), [i + 1, t, "next", n])
                }), $cfs.bind(cf_e("slideToPage", conf), function(e, t, n, i, s) {
                    e.stopPropagation(), is_number(t) || (t = $cfs.triggerHandler(cf_e("currentPage", conf)));
                    var a = opts.pagination.items || opts.items.visible,
                        r = Math.ceil(itms.total / a) - 1;
                    return 0 > t && (t = r), t > r && (t = 0), $cfs.triggerHandler(cf_e("slideTo", conf), [t * a, 0, !0, n, i, s])
                }), $cfs.bind(cf_e("jumpToStart", conf), function(e, t) {
                    if (e.stopPropagation(), t = t ? gn_getItemIndex(t, 0, !0, itms, $cfs) : 0, t += itms.first, 0 != t) {
                        if (itms.total > 0)
                            for (; t > itms.total;) t -= itms.total;
                        $cfs.prepend($cfs.children().slice(t, itms.total))
                    }
                    return !0
                }), $cfs.bind(cf_e("synchronise", conf), function(e, t) {
                    if (e.stopPropagation(), t) t = cf_getSynchArr(t);
                    else {
                        if (!opts.synchronise) return debug(conf, "No carousel to synchronise.");
                        t = opts.synchronise
                    }
                    for (var n = $cfs.triggerHandler(cf_e("currentPosition", conf)), i = !0, s = 0, a = t.length; a > s; s++) t[s][0].triggerHandler(cf_e("slideTo", conf), [n, t[s][3], !0]) || (i = !1);
                    return i
                }), $cfs.bind(cf_e("queue", conf), function(e, t, n) {
                    return e.stopPropagation(), is_function(t) ? t.call($tt0, queu) : is_array(t) ? queu = t : is_undefined(t) || queu.push([t, n]), queu
                }), $cfs.bind(cf_e("insertItem", conf), function(e, t, n, i, s) {
                    e.stopPropagation();
                    var a = [t, n, i, s],
                        r = ["string/object", "string/number/object", "boolean", "number"],
                        o = cf_sortParams(a, r);
                    if (t = o[0], n = o[1], i = o[2], s = o[3], is_object(t) && !is_jquery(t) ? t = $(t) : is_string(t) && (t = $(t)), !is_jquery(t) || 0 == t.length) return debug(conf, "Not a valid object.");
                    is_undefined(n) && (n = "end"), sz_storeMargin(t, opts), sz_storeOrigCss(t);
                    var l = n,
                        c = "before";
                    "end" == n ? i ? (0 == itms.first ? (n = itms.total - 1, c = "after") : (n = itms.first, itms.first += t.length), 0 > n && (n = 0)) : (n = itms.total - 1, c = "after") : n = gn_getItemIndex(n, s, i, itms, $cfs);
                    var d = $cfs.children().eq(n);
                    return d.length ? d[c](t) : (debug(conf, "Correct insert-position not found! Appending item to the end."), $cfs.append(t)), "end" == l || i || itms.first > n && (itms.first += t.length), itms.total = $cfs.children().length, itms.first >= itms.total && (itms.first -= itms.total), $cfs.trigger(cf_e("updateSizes", conf)), $cfs.trigger(cf_e("linkAnchors", conf)), !0
                }), $cfs.bind(cf_e("removeItem", conf), function(e, t, n, i) {
                    e.stopPropagation();
                    var s = [t, n, i],
                        a = ["string/number/object", "boolean", "number"],
                        r = cf_sortParams(s, a);
                    if (t = r[0], n = r[1], i = r[2], t instanceof $ && t.length > 1) return o = $(), t.each(function() {
                        var e = $cfs.trigger(cf_e("removeItem", conf), [$(this), n, i]);
                        e && (o = o.add(e))
                    }), o;
                    if (is_undefined(t) || "end" == t) o = $cfs.children().last();
                    else {
                        t = gn_getItemIndex(t, i, n, itms, $cfs);
                        var o = $cfs.children().eq(t);
                        o.length && itms.first > t && (itms.first -= o.length)
                    }
                    return o && o.length && (o.detach(), itms.total = $cfs.children().length, $cfs.trigger(cf_e("updateSizes", conf))), o
                }), $cfs.bind(cf_e("onBefore", conf) + " " + cf_e("onAfter", conf), function(e, t) {
                    e.stopPropagation();
                    var n = e.type.slice(conf.events.prefix.length);
                    return is_array(t) && (clbk[n] = t), is_function(t) && clbk[n].push(t), clbk[n]
                }), $cfs.bind(cf_e("currentPosition", conf), function(e, t) {
                    if (e.stopPropagation(), 0 == itms.first) var n = 0;
                    else var n = itms.total - itms.first;
                    return is_function(t) && t.call($tt0, n), n
                }), $cfs.bind(cf_e("currentPage", conf), function(e, t) {
                    e.stopPropagation();
                    var n, i = opts.pagination.items || opts.items.visible,
                        s = Math.ceil(itms.total / i - 1);
                    return n = 0 == itms.first ? 0 : itms.first < itms.total % i ? 0 : itms.first != i || opts.circular ? Math.round((itms.total - itms.first) / i) : s, 0 > n && (n = 0), n > s && (n = s), is_function(t) && t.call($tt0, n), n
                }), $cfs.bind(cf_e("currentVisible", conf), function(e, t) {
                    e.stopPropagation();
                    var n = gi_getCurrentItems($cfs.children(), opts);
                    return is_function(t) && t.call($tt0, n), n
                }), $cfs.bind(cf_e("slice", conf), function(e, t, n, i) {
                    if (e.stopPropagation(), 0 == itms.total) return !1;
                    var s = [t, n, i],
                        a = ["number", "number", "function"],
                        r = cf_sortParams(s, a);
                    if (t = is_number(r[0]) ? r[0] : 0, n = is_number(r[1]) ? r[1] : itms.total, i = r[2], t += itms.first, n += itms.first, items.total > 0) {
                        for (; t > itms.total;) t -= itms.total;
                        for (; n > itms.total;) n -= itms.total;
                        for (; 0 > t;) t += itms.total;
                        for (; 0 > n;) n += itms.total
                    }
                    var o, l = $cfs.children();
                    return o = n > t ? l.slice(t, n) : $(l.slice(t, itms.total).get().concat(l.slice(0, n).get())), is_function(i) && i.call($tt0, o), o
                }), $cfs.bind(cf_e("isPaused", conf) + " " + cf_e("isStopped", conf) + " " + cf_e("isScrolling", conf), function(e, t) {
                    e.stopPropagation();
                    var n = e.type.slice(conf.events.prefix.length),
                        i = crsl[n];
                    return is_function(t) && t.call($tt0, i), i
                }), $cfs.bind(cf_e("configuration", conf), function(e, a, b, c) {
                    e.stopPropagation();
                    var reInit = !1;
                    if (is_function(a)) a.call($tt0, opts);
                    else if (is_object(a)) opts_orig = $.extend(!0, {}, opts_orig, a), b !== !1 ? reInit = !0 : opts = $.extend(!0, {}, opts, a);
                    else if (!is_undefined(a))
                        if (is_function(b)) {
                            var val = eval("opts." + a);
                            is_undefined(val) && (val = ""), b.call($tt0, val)
                        } else {
                            if (is_undefined(b)) return eval("opts." + a);
                            "boolean" != typeof c && (c = !0), eval("opts_orig." + a + " = b"), c !== !1 ? reInit = !0 : eval("opts." + a + " = b")
                        } if (reInit) {
                        sz_resetMargin($cfs.children(), opts), FN._init(opts_orig), FN._bind_buttons();
                        var sz = sz_setSizes($cfs, opts);
                        $cfs.trigger(cf_e("updatePageStatus", conf), [!0, sz])
                    }
                    return opts
                }), $cfs.bind(cf_e("linkAnchors", conf), function(e, t, n) {
                    return e.stopPropagation(), is_undefined(t) ? t = $("body") : is_string(t) && (t = $(t)), is_jquery(t) && 0 != t.length ? (is_string(n) || (n = "a.caroufredsel"), t.find(n).each(function() {
                        var e = this.hash || "";
                        e.length > 0 && -1 != $cfs.children().index($(e)) && $(this).unbind("click").click(function(t) {
                            t.preventDefault(), $cfs.trigger(cf_e("slideTo", conf), e)
                        })
                    }), !0) : debug(conf, "Not a valid object.")
                }), $cfs.bind(cf_e("updatePageStatus", conf), function(e, t) {
                    if (e.stopPropagation(), opts.pagination.container) {
                        var n = opts.pagination.items || opts.items.visible,
                            i = Math.ceil(itms.total / n);
                        t && (opts.pagination.anchorBuilder && (opts.pagination.container.children().remove(), opts.pagination.container.each(function() {
                            for (var e = 0; i > e; e++) {
                                var t = $cfs.children().eq(gn_getItemIndex(e * n, 0, !0, itms, $cfs));
                                $(this).append(opts.pagination.anchorBuilder.call(t[0], e + 1))
                            }
                        })), opts.pagination.container.each(function() {
                            $(this).children().unbind(opts.pagination.event).each(function(e) {
                                $(this).bind(opts.pagination.event, function(t) {
                                    t.preventDefault(), $cfs.trigger(cf_e("slideTo", conf), [e * n, -opts.pagination.deviation, !0, opts.pagination])
                                })
                            })
                        }));
                        var s = $cfs.triggerHandler(cf_e("currentPage", conf)) + opts.pagination.deviation;
                        return s >= i && (s = 0), 0 > s && (s = i - 1), opts.pagination.container.each(function() {
                            $(this).children().removeClass(cf_c("selected", conf)).eq(s).addClass(cf_c("selected", conf))
                        }), !0
                    }
                }), $cfs.bind(cf_e("updateSizes", conf), function() {
                    var e = opts.items.visible,
                        t = $cfs.children(),
                        n = ms_getParentSize($wrp, opts, "width");
                    if (itms.total = t.length, crsl.primarySizePercentage ? (opts.maxDimension = n, opts[opts.d.width] = ms_getPercentage(n, crsl.primarySizePercentage)) : opts.maxDimension = ms_getMaxDimension(opts, n), opts.responsive ? (opts.items.width = opts.items.sizesConf.width, opts.items.height = opts.items.sizesConf.height, opts = in_getResponsiveValues(opts, t, n), e = opts.items.visible, sz_setResponsiveSizes(opts, t)) : opts.items.visibleConf.variable ? e = gn_getVisibleItemsNext(t, opts, 0) : "*" != opts.items.filter && (e = gn_getVisibleItemsNextFilter(t, opts, 0)), !opts.circular && 0 != itms.first && e > itms.first) {
                        if (opts.items.visibleConf.variable) var i = gn_getVisibleItemsPrev(t, opts, itms.first) - itms.first;
                        else if ("*" != opts.items.filter) var i = gn_getVisibleItemsPrevFilter(t, opts, itms.first) - itms.first;
                        else var i = opts.items.visible - itms.first;
                        debug(conf, "Preventing non-circular: sliding " + i + " items backward."), $cfs.trigger(cf_e("prev", conf), i)
                    }
                    opts.items.visible = cf_getItemsAdjust(e, opts, opts.items.visibleConf.adjust, $tt0), opts.items.visibleConf.old = opts.items.visible, opts = in_getAlignPadding(opts, t);
                    var s = sz_setSizes($cfs, opts);
                    return $cfs.trigger(cf_e("updatePageStatus", conf), [!0, s]), nv_showNavi(opts, itms.total, conf), nv_enableNavi(opts, itms.first, conf), s
                }), $cfs.bind(cf_e("destroy", conf), function(e, t) {
                    return e.stopPropagation(), tmrs = sc_clearTimers(tmrs), $cfs.data("_cfs_isCarousel", !1), $cfs.trigger(cf_e("finish", conf)), t && $cfs.trigger(cf_e("jumpToStart", conf)), sz_restoreOrigCss($cfs.children()), sz_restoreOrigCss($cfs), FN._unbind_events(), FN._unbind_buttons(), "parent" == conf.wrapper ? sz_restoreOrigCss($wrp) : $wrp.replaceWith($cfs), !0
                }), $cfs.bind(cf_e("debug", conf), function() {
                    return debug(conf, "Carousel width: " + opts.width), debug(conf, "Carousel height: " + opts.height), debug(conf, "Item widths: " + opts.items.width), debug(conf, "Item heights: " + opts.items.height), debug(conf, "Number of items visible: " + opts.items.visible), opts.auto.play && debug(conf, "Number of items scrolled automatically: " + opts.auto.items), opts.prev.button && debug(conf, "Number of items scrolled backward: " + opts.prev.items), opts.next.button && debug(conf, "Number of items scrolled forward: " + opts.next.items), conf.debug
                }), $cfs.bind("_cfs_triggerEvent", function(e, t, n) {
                    return e.stopPropagation(), $cfs.triggerHandler(cf_e(t, conf), n)
                })
            }, FN._unbind_events = function() {
                $cfs.unbind(cf_e("", conf)), $cfs.unbind(cf_e("", conf, !1)), $cfs.unbind("_cfs_triggerEvent")
            }, FN._bind_buttons = function() {
                if (FN._unbind_buttons(), nv_showNavi(opts, itms.total, conf), nv_enableNavi(opts, itms.first, conf), opts.auto.pauseOnHover) {
                    var e = bt_pauseOnHoverConfig(opts.auto.pauseOnHover);
                    $wrp.bind(cf_e("mouseenter", conf, !1), function() {
                        $cfs.trigger(cf_e("pause", conf), e)
                    }).bind(cf_e("mouseleave", conf, !1), function() {
                        $cfs.trigger(cf_e("resume", conf))
                    })
                }
                if (opts.auto.button && opts.auto.button.bind(cf_e(opts.auto.event, conf, !1), function(e) {
                        e.preventDefault();
                        var t = !1,
                            n = null;
                        crsl.isPaused ? t = "play" : opts.auto.pauseOnEvent && (t = "pause", n = bt_pauseOnHoverConfig(opts.auto.pauseOnEvent)), t && $cfs.trigger(cf_e(t, conf), n)
                    }), opts.prev.button && (opts.prev.button.bind(cf_e(opts.prev.event, conf, !1), function(e) {
                        e.preventDefault(), $cfs.trigger(cf_e("prev", conf))
                    }), opts.prev.pauseOnHover)) {
                    var e = bt_pauseOnHoverConfig(opts.prev.pauseOnHover);
                    opts.prev.button.bind(cf_e("mouseenter", conf, !1), function() {
                        $cfs.trigger(cf_e("pause", conf), e)
                    }).bind(cf_e("mouseleave", conf, !1), function() {
                        $cfs.trigger(cf_e("resume", conf))
                    })
                }
                if (opts.next.button && (opts.next.button.bind(cf_e(opts.next.event, conf, !1), function(e) {
                        e.preventDefault(), $cfs.trigger(cf_e("next", conf))
                    }), opts.next.pauseOnHover)) {
                    var e = bt_pauseOnHoverConfig(opts.next.pauseOnHover);
                    opts.next.button.bind(cf_e("mouseenter", conf, !1), function() {
                        $cfs.trigger(cf_e("pause", conf), e)
                    }).bind(cf_e("mouseleave", conf, !1), function() {
                        $cfs.trigger(cf_e("resume", conf))
                    })
                }
                if (opts.pagination.container && opts.pagination.pauseOnHover) {
                    var e = bt_pauseOnHoverConfig(opts.pagination.pauseOnHover);
                    opts.pagination.container.bind(cf_e("mouseenter", conf, !1), function() {
                        $cfs.trigger(cf_e("pause", conf), e)
                    }).bind(cf_e("mouseleave", conf, !1), function() {
                        $cfs.trigger(cf_e("resume", conf))
                    })
                }
                if ((opts.prev.key || opts.next.key) && $(document).bind(cf_e("keyup", conf, !1, !0, !0), function(e) {
                        var t = e.keyCode;
                        t == opts.next.key && (e.preventDefault(), $cfs.trigger(cf_e("next", conf))), t == opts.prev.key && (e.preventDefault(), $cfs.trigger(cf_e("prev", conf)))
                    }), opts.pagination.keys && $(document).bind(cf_e("keyup", conf, !1, !0, !0), function(e) {
                        var t = e.keyCode;
                        t >= 49 && 58 > t && (t = (t - 49) * opts.items.visible, itms.total >= t && (e.preventDefault(), $cfs.trigger(cf_e("slideTo", conf), [t, 0, !0, opts.pagination])))
                    }), $.fn.swipe) {
                    var t = "ontouchstart" in window;
                    if (t && opts.swipe.onTouch || !t && opts.swipe.onMouse) {
                        var n = $.extend(!0, {}, opts.prev, opts.swipe),
                            i = $.extend(!0, {}, opts.next, opts.swipe),
                            s = function() {
                                $cfs.trigger(cf_e("prev", conf), [n])
                            },
                            a = function() {
                                $cfs.trigger(cf_e("next", conf), [i])
                            };
                        switch (opts.direction) {
                            case "up":
                            case "down":
                                opts.swipe.options.swipeUp = a, opts.swipe.options.swipeDown = s;
                                break;
                            default:
                                opts.swipe.options.swipeLeft = a, opts.swipe.options.swipeRight = s
                        }
                        crsl.swipe && $cfs.swipe("destroy"), $wrp.swipe(opts.swipe.options), $wrp.css("cursor", "move"), crsl.swipe = !0
                    }
                }
                if ($.fn.mousewheel && opts.mousewheel) {
                    var r = $.extend(!0, {}, opts.prev, opts.mousewheel),
                        o = $.extend(!0, {}, opts.next, opts.mousewheel);
                    crsl.mousewheel && $wrp.unbind(cf_e("mousewheel", conf, !1)), $wrp.bind(cf_e("mousewheel", conf, !1), function(e, t) {
                        e.preventDefault(), t > 0 ? $cfs.trigger(cf_e("prev", conf), [r]) : $cfs.trigger(cf_e("next", conf), [o])
                    }), crsl.mousewheel = !0
                }
                if (opts.auto.play && $cfs.trigger(cf_e("play", conf), opts.auto.delay), crsl.upDateOnWindowResize) {
                    var l = function() {
                            $cfs.trigger(cf_e("finish", conf)), opts.auto.pauseOnResize && !crsl.isPaused && $cfs.trigger(cf_e("play", conf)), sz_resetMargin($cfs.children(), opts), $cfs.trigger(cf_e("updateSizes", conf))
                        },
                        c = $(window),
                        d = null;
                    if ($.debounce && "debounce" == conf.onWindowResize) d = $.debounce(200, l);
                    else if ($.throttle && "throttle" == conf.onWindowResize) d = $.throttle(300, l);
                    else {
                        var p = 0,
                            u = 0;
                        d = function() {
                            var e = c.width(),
                                t = c.height();
                            (e != p || t != u) && (l(), p = e, u = t)
                        }
                    }
                    c.bind(cf_e("resize", conf, !1, !0, !0), d)
                }
            }, FN._unbind_buttons = function() {
                var e = (cf_e("", conf), cf_e("", conf, !1));
                ns3 = cf_e("", conf, !1, !0, !0), $(document).unbind(ns3), $(window).unbind(ns3), $wrp.unbind(e), opts.auto.button && opts.auto.button.unbind(e), opts.prev.button && opts.prev.button.unbind(e), opts.next.button && opts.next.button.unbind(e), opts.pagination.container && (opts.pagination.container.unbind(e), opts.pagination.anchorBuilder && opts.pagination.container.children().remove()), crsl.swipe && ($cfs.swipe("destroy"), $wrp.css("cursor", "default"), crsl.swipe = !1), crsl.mousewheel && (crsl.mousewheel = !1), nv_showNavi(opts, "hide", conf), nv_enableNavi(opts, "removeClass", conf)
            }, is_boolean(configs) && (configs = {
                debug: configs
            });
            var crsl = {
                    direction: "next",
                    isPaused: !0,
                    isScrolling: !1,
                    isStopped: !1,
                    mousewheel: !1,
                    swipe: !1
                },
                itms = {
                    total: $cfs.children().length,
                    first: 0
                },
                tmrs = {
                    auto: null,
                    progress: null,
                    startTime: getTime(),
                    timePassed: 0
                },
                scrl = {
                    isStopped: !1,
                    duration: 0,
                    startTime: 0,
                    easing: "",
                    anims: []
                },
                clbk = {
                    onBefore: [],
                    onAfter: []
                },
                queu = [],
                conf = $.extend(!0, {}, $.fn.carouFredSel.configs, configs),
                opts = {},
                opts_orig = $.extend(!0, {}, options),
                $wrp = "parent" == conf.wrapper ? $cfs.parent() : $cfs.wrap("<" + conf.wrapper.element + ' class="' + conf.wrapper.classname + '" />').parent();
            if (conf.selector = $cfs.selector, conf.serialNumber = $.fn.carouFredSel.serialNumber++, conf.transition = conf.transition && $.fn.transition ? "transition" : "animate", FN._init(opts_orig, !0, starting_position), FN._build(), FN._bind_events(), FN._bind_buttons(), is_array(opts.items.start)) var start_arr = opts.items.start;
            else {
                var start_arr = [];
                0 != opts.items.start && start_arr.push(opts.items.start)
            }
            if (opts.cookie && start_arr.unshift(parseInt(cf_getCookie(opts.cookie), 10)), start_arr.length > 0)
                for (var a = 0, l = start_arr.length; l > a; a++) {
                    var s = start_arr[a];
                    if (0 != s) {
                        if (s === !0) {
                            if (s = window.location.hash, 1 > s.length) continue
                        } else "random" === s && (s = Math.floor(Math.random() * itms.total));
                        if ($cfs.triggerHandler(cf_e("slideTo", conf), [s, 0, !0, {
                                fx: "none"
                            }])) break
                    }
                }
            var siz = sz_setSizes($cfs, opts),
                itm = gi_getCurrentItems($cfs.children(), opts);
            return opts.onCreate && opts.onCreate.call($tt0, {
                width: siz.width,
                height: siz.height,
                items: itm
            }), $cfs.trigger(cf_e("updatePageStatus", conf), [!0, siz]), $cfs.trigger(cf_e("linkAnchors", conf)), conf.debug && $cfs.trigger(cf_e("debug", conf)), $cfs
        }, $.fn.carouFredSel.serialNumber = 1, $.fn.carouFredSel.defaults = {
            synchronise: !1,
            infinite: !0,
            circular: !0,
            responsive: !1,
            direction: "left",
            items: {
                start: 0
            },
            scroll: {
                easing: "swing",
                duration: 500,
                pauseOnHover: !1,
                event: "click",
                queue: !1
            }
        }, $.fn.carouFredSel.configs = {
            debug: !1,
            transition: !1,
            onWindowResize: "throttle",
            events: {
                prefix: "",
                namespace: "cfs"
            },
            wrapper: {
                element: "div",
                classname: "caroufredsel_wrapper"
            },
            classnames: {}
        }, $.fn.carouFredSel.pageAnchorBuilder = function(e) {
            return '<a href="#"><span>' + e + "</span></a>"
        }, $.fn.carouFredSel.progressbarUpdater = function(e) {
            $(this).css("width", e + "%")
        }, $.fn.carouFredSel.cookie = {
            get: function(e) {
                e += "=";
                for (var t = document.cookie.split(";"), n = 0, i = t.length; i > n; n++) {
                    for (var s = t[n];
                        " " == s.charAt(0);) s = s.slice(1);
                    if (0 == s.indexOf(e)) return s.slice(e.length)
                }
                return 0
            },
            set: function(e, t, n) {
                var i = "";
                if (n) {
                    var s = new Date;
                    s.setTime(s.getTime() + 864e5 * n), i = "; expires=" + s.toGMTString()
                }
                document.cookie = e + "=" + t + i + "; path=/"
            },
            remove: function(e) {
                $.fn.carouFredSel.cookie.set(e, "", -1)
            }
        }, $.extend($.easing, {
            quadratic: function(e) {
                var t = e * e;
                return e * (-t * e + 4 * t - 6 * e + 4)
            },
            cubic: function(e) {
                return e * (4 * e * e - 9 * e + 6)
            },
            elastic: function(e) {
                var t = e * e;
                return e * (33 * t * t - 106 * t * e + 126 * t - 67 * e + 15)
            }
        }))
    }(jQuery), ! function() {
        "use strict";

        function e(e) {
            e.fn.swiper = function(t) {
                var n;
                return e(this).each(function() {
                    var e = new Swiper(this, t);
                    n || (n = e)
                }), n
            }
        }
        window.Swiper = function(e, t) {
            function n() {
                return "horizontal" === h.params.direction
            }

            function i() {
                h.autoplayTimeoutId = setTimeout(function() {
                    h.params.loop ? (h.fixLoop(), h._slideNext()) : h.isEnd ? t.autoplayStopOnLast ? h.stopAutoplay() : h._slideTo(0) : h._slideNext()
                }, h.params.autoplay)
            }

            function s(e, t) {
                var n = m(e.target);
                if (!n.is(t))
                    if ("string" == typeof t) n = n.parents(t);
                    else if (t.nodeType) {
                    var i;
                    return n.parents().each(function(e, n) {
                        n === t && (i = t)
                    }), i ? t : void 0
                }
                return 0 === n.length ? void 0 : n[0]
            }

            function a(e, t) {
                t = t || {};
                var n = window.MutationObserver || window.WebkitMutationObserver,
                    i = new n(function(e) {
                        e.forEach(function(e) {
                            h.onResize(), h.emit("onObserverUpdate", h, e)
                        })
                    });
                i.observe(e, {
                    attributes: "undefined" == typeof t.attributes ? !0 : t.attributes,
                    childList: "undefined" == typeof t.childList ? !0 : t.childList,
                    characterData: "undefined" == typeof t.characterData ? !0 : t.characterData
                }), h.observers.push(i)
            }

            function r(e) {
                e.originalEvent && (e = e.originalEvent);
                var t = e.keyCode || e.charCode;
                if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                    if (37 === t || 39 === t || 38 === t || 40 === t) {
                        var i = !1;
                        if (h.container.parents(".swiper-slide").length > 0 && 0 === h.container.parents(".swiper-slide-active").length) return;
                        for (var s = {
                                left: window.pageXOffset,
                                top: window.pageYOffset
                            }, a = window.innerWidth, r = window.innerHeight, o = h.container.offset(), l = [
                                [o.left, o.top],
                                [o.left + h.width, o.top],
                                [o.left, o.top + h.height],
                                [o.left + h.width, o.top + h.height]
                            ], c = 0; c < l.length; c++) {
                            var d = l[c];
                            d[0] >= s.left && d[0] <= s.left + a && d[1] >= s.top && d[1] <= s.top + r && (i = !0)
                        }
                        if (!i) return
                    }
                    n() ? ((37 === t || 39 === t) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 39 === t && h.slideNext(), 37 === t && h.slidePrev()) : ((38 === t || 40 === t) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === t && h.slideNext(), 38 === t && h.slidePrev())
                }
            }

            function o(e) {
                e.originalEvent && (e = e.originalEvent);
                var t = h._wheelEvent,
                    i = 0;
                if (e.detail) i = -e.detail;
                else if ("mousewheel" === t)
                    if (h.params.mousewheelForceToAxis)
                        if (n()) {
                            if (!(Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY))) return;
                            i = e.wheelDeltaX
                        } else {
                            if (!(Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX))) return;
                            i = e.wheelDeltaY
                        }
                else i = e.wheelDelta;
                else if ("DOMMouseScroll" === t) i = -e.detail;
                else if ("wheel" === t)
                    if (h.params.mousewheelForceToAxis)
                        if (n()) {
                            if (!(Math.abs(e.deltaX) > Math.abs(e.deltaY))) return;
                            i = -e.deltaX
                        } else {
                            if (!(Math.abs(e.deltaY) > Math.abs(e.deltaX))) return;
                            i = -e.deltaY
                        }
                else i = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX : -e.deltaY;
                if (h.params.freeMode) {
                    var s = h.getWrapperTranslate() + i;
                    if (s > 0 && (s = 0), s < h.maxTranslate() && (s = h.maxTranslate()), h.setWrapperTransition(0), h.setWrapperTranslate(s), h.updateProgress(), h.updateActiveIndex(), 0 === s || s === h.maxTranslate()) return
                } else(new Date).getTime() - h._lastWheelScrollTime > 60 && (0 > i ? h.slideNext() : h.slidePrev()), h._lastWheelScrollTime = (new Date).getTime();
                return h.params.autoplay && h.stopAutoplay(), e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
            }

            function l(e, t) {
                e = m(e);
                var i, s, a;
                i = e.attr("data-swiper-parallax") || "0", s = e.attr("data-swiper-parallax-x"), a = e.attr("data-swiper-parallax-y"), s || a ? (s = s || "0", a = a || "0") : n() ? (s = i, a = "0") : (a = i, s = "0"), s = s.indexOf("%") >= 0 ? parseInt(s, 10) * t + "%" : s * t + "px", a = a.indexOf("%") >= 0 ? parseInt(a, 10) * t + "%" : a * t + "px", e.transform("translate3d(" + s + ", " + a + ",0px)")
            }

            function c(e) {
                return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e
            }
            if (!(this instanceof Swiper)) return new Swiper(e, t);
            var d = {
                    direction: "horizontal",
                    touchEventsTarget: "container",
                    initialSlide: 0,
                    speed: 300,
                    autoplay: !1,
                    autoplayDisableOnInteraction: !0,
                    freeMode: !1,
                    freeModeMomentum: !0,
                    freeModeMomentumRatio: 1,
                    freeModeMomentumBounce: !0,
                    freeModeMomentumBounceRatio: 1,
                    setWrapperSize: !1,
                    virtualTranslate: !1,
                    effect: "slide",
                    coverflow: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: !0
                    },
                    cube: {
                        slideShadows: !0,
                        shadow: !0,
                        shadowOffset: 20,
                        shadowScale: .94
                    },
                    fade: {
                        crossFade: !1
                    },
                    parallax: !1,
                    scrollbar: null,
                    scrollbarHide: !0,
                    keyboardControl: !1,
                    mousewheelControl: !1,
                    mousewheelForceToAxis: !1,
                    hashnav: !1,
                    spaceBetween: 0,
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerColumnFill: "column",
                    slidesPerGroup: 1,
                    centeredSlides: !1,
                    touchRatio: 1,
                    touchAngle: 45,
                    simulateTouch: !0,
                    shortSwipes: !0,
                    longSwipes: !0,
                    longSwipesRatio: .5,
                    longSwipesMs: 300,
                    followFinger: !0,
                    onlyExternal: !1,
                    threshold: 0,
                    touchMoveStopPropagation: !0,
                    pagination: null,
                    paginationClickable: !1,
                    paginationHide: !1,
                    paginationBulletRender: null,
                    resistance: !0,
                    resistanceRatio: .85,
                    nextButton: null,
                    prevButton: null,
                    watchSlidesProgress: !1,
                    watchSlidesVisibility: !1,
                    grabCursor: !1,
                    preventClicks: !0,
                    preventClicksPropagation: !0,
                    slideToClickedSlide: !1,
                    lazyLoading: !1,
                    lazyLoadingInPrevNext: !1,
                    lazyLoadingOnTransitionStart: !1,
                    preloadImages: !0,
                    updateOnImagesReady: !0,
                    loop: !1,
                    loopAdditionalSlides: 0,
                    loopedSlides: null,
                    control: void 0,
                    controlInverse: !1,
                    allowSwipeToPrev: !0,
                    allowSwipeToNext: !0,
                    swipeHandler: null,
                    noSwiping: !0,
                    noSwipingClass: "swiper-no-swiping",
                    slideClass: "swiper-slide",
                    slideActiveClass: "swiper-slide-active",
                    slideVisibleClass: "swiper-slide-visible",
                    slideDuplicateClass: "swiper-slide-duplicate",
                    slideNextClass: "swiper-slide-next",
                    slidePrevClass: "swiper-slide-prev",
                    wrapperClass: "swiper-wrapper",
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    buttonDisabledClass: "swiper-button-disabled",
                    paginationHiddenClass: "swiper-pagination-hidden",
                    observer: !1,
                    observeParents: !1,
                    a11y: !1,
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    runCallbacksOnInit: !0
                },
                p = t && t.virtualTranslate;
            t = t || {};
            for (var u in d)
                if ("undefined" == typeof t[u]) t[u] = d[u];
                else if ("object" == typeof t[u])
                for (var f in d[u]) "undefined" == typeof t[u][f] && (t[u][f] = d[u][f]);
            var h = this;
            h.params = t, h.classNames = [];
            var m;
            if (m = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7, m && (h.$ = m, h.container = m(e), 0 !== h.container.length)) {
                if (h.container.length > 1) return void h.container.each(function() {
                    new Swiper(this, t)
                });
                h.container[0].swiper = h, h.container.data("swiper", h), h.classNames.push("swiper-container-" + h.params.direction), h.params.freeMode && h.classNames.push("swiper-container-free-mode"), h.support.flexbox || (h.classNames.push("swiper-container-no-flexbox"), h.params.slidesPerColumn = 1), (h.params.parallax || h.params.watchSlidesVisibility) && (h.params.watchSlidesProgress = !0), ["cube", "coverflow"].indexOf(h.params.effect) >= 0 && (h.support.transforms3d ? (h.params.watchSlidesProgress = !0, h.classNames.push("swiper-container-3d")) : h.params.effect = "slide"), "slide" !== h.params.effect && h.classNames.push("swiper-container-" + h.params.effect), "cube" === h.params.effect && (h.params.resistanceRatio = 0, h.params.slidesPerView = 1, h.params.slidesPerColumn = 1, h.params.slidesPerGroup = 1, h.params.centeredSlides = !1, h.params.spaceBetween = 0, h.params.virtualTranslate = !0, h.params.setWrapperSize = !1), "fade" === h.params.effect && (h.params.slidesPerView = 1, h.params.slidesPerColumn = 1, h.params.slidesPerGroup = 1, h.params.watchSlidesProgress = !0, h.params.spaceBetween = 0, "undefined" == typeof p && (h.params.virtualTranslate = !0)), h.params.grabCursor && h.support.touch && (h.params.grabCursor = !1), h.wrapper = h.container.children("." + h.params.wrapperClass), h.params.pagination && (h.paginationContainer = m(h.params.pagination), h.params.paginationClickable && h.paginationContainer.addClass("swiper-pagination-clickable")), h.rtl = n() && ("rtl" === h.container[0].dir.toLowerCase() || "rtl" === h.container.css("direction")), h.rtl && h.classNames.push("swiper-container-rtl"), h.rtl && (h.wrongRTL = "-webkit-box" === h.wrapper.css("display")), h.params.slidesPerColumn > 1 && h.classNames.push("swiper-container-multirow"), h.device.android && h.classNames.push("swiper-container-android"), h.container.addClass(h.classNames.join(" ")), h.translate = 0, h.progress = 0, h.velocity = 0, h.lockSwipeToNext = function() {
                    h.params.allowSwipeToNext = !1
                }, h.lockSwipeToPrev = function() {
                    h.params.allowSwipeToPrev = !1
                }, h.lockSwipes = function() {
                    h.params.allowSwipeToNext = h.params.allowSwipeToPrev = !1
                }, h.unlockSwipeToNext = function() {
                    h.params.allowSwipeToNext = !0
                }, h.unlockSwipeToPrev = function() {
                    h.params.allowSwipeToPrev = !0
                }, h.unlockSwipes = function() {
                    h.params.allowSwipeToNext = h.params.allowSwipeToPrev = !0
                }, h.params.grabCursor && (h.container[0].style.cursor = "move", h.container[0].style.cursor = "-webkit-grab", h.container[0].style.cursor = "-moz-grab", h.container[0].style.cursor = "grab"), h.imagesToLoad = [], h.imagesLoaded = 0, h.loadImage = function(e, t, n, i) {
                    function s() {
                        i && i()
                    }
                    var a;
                    e.complete && n ? s() : t ? (a = new Image, a.onload = s, a.onerror = s, a.src = t) : s()
                }, h.preloadImages = function() {
                    function e() {
                        "undefined" != typeof h && null !== h && (void 0 !== h.imagesLoaded && h.imagesLoaded++, h.imagesLoaded === h.imagesToLoad.length && (h.params.updateOnImagesReady && h.update(), h.emit("onImagesReady", h)))
                    }
                    h.imagesToLoad = h.container.find("img");
                    for (var t = 0; t < h.imagesToLoad.length; t++) h.loadImage(h.imagesToLoad[t], h.imagesToLoad[t].currentSrc || h.imagesToLoad[t].getAttribute("src"), !0, e)
                }, h.autoplayTimeoutId = void 0, h.autoplaying = !1, h.autoplayPaused = !1, h.startAutoplay = function() {
                    return "undefined" != typeof h.autoplayTimeoutId ? !1 : h.params.autoplay ? h.autoplaying ? !1 : (h.autoplaying = !0, h.emit("onAutoplayStart", h), void i()) : !1
                }, h.stopAutoplay = function() {
                    h.autoplayTimeoutId && (h.autoplayTimeoutId && clearTimeout(h.autoplayTimeoutId), h.autoplaying = !1, h.autoplayTimeoutId = void 0, h.emit("onAutoplayStop", h))
                }, h.pauseAutoplay = function(e) {
                    h.autoplayPaused || (h.autoplayTimeoutId && clearTimeout(h.autoplayTimeoutId), h.autoplayPaused = !0, 0 === e ? (h.autoplayPaused = !1, i()) : h.wrapper.transitionEnd(function() {
                        h.autoplayPaused = !1, h.autoplaying ? i() : h.stopAutoplay()
                    }))
                }, h.minTranslate = function() {
                    return -h.snapGrid[0]
                }, h.maxTranslate = function() {
                    return -h.snapGrid[h.snapGrid.length - 1]
                }, h.updateContainerSize = function() {
                    h.width = h.container[0].clientWidth, h.height = h.container[0].clientHeight, h.size = n() ? h.width : h.height
                }, h.updateSlidesSize = function() {
                    h.slides = h.wrapper.children("." + h.params.slideClass), h.snapGrid = [], h.slidesGrid = [], h.slidesSizesGrid = [];
                    var e, t = h.params.spaceBetween,
                        i = 0,
                        s = 0,
                        a = 0;
                    "string" == typeof t && t.indexOf("%") >= 0 && (t = parseFloat(t.replace("%", "")) / 100 * h.size), h.virtualSize = -t, h.slides.css(h.rtl ? {
                        marginLeft: "",
                        marginTop: ""
                    } : {
                        marginRight: "",
                        marginBottom: ""
                    });
                    var r;
                    h.params.slidesPerColumn > 1 && (r = Math.floor(h.slides.length / h.params.slidesPerColumn) === h.slides.length / h.params.slidesPerColumn ? h.slides.length : Math.ceil(h.slides.length / h.params.slidesPerColumn) * h.params.slidesPerColumn);
                    var o;
                    for (e = 0; e < h.slides.length; e++) {
                        o = 0;
                        var l = h.slides.eq(e);
                        if (h.params.slidesPerColumn > 1) {
                            var c, d, p, u, f = h.params.slidesPerColumn;
                            "column" === h.params.slidesPerColumnFill ? (d = Math.floor(e / f), p = e - d * f, c = d + p * r / f, l.css({
                                "-webkit-box-ordinal-group": c,
                                "-moz-box-ordinal-group": c,
                                "-ms-flex-order": c,
                                "-webkit-order": c,
                                order: c
                            })) : (u = r / f, p = Math.floor(e / u), d = e - p * u), l.css({
                                "margin-top": 0 !== p && h.params.spaceBetween && h.params.spaceBetween + "px"
                            }).attr("data-swiper-column", d).attr("data-swiper-row", p)
                        }
                        "none" !== l.css("display") && ("auto" === h.params.slidesPerView ? o = n() ? l.outerWidth(!0) : l.outerHeight(!0) : (o = (h.size - (h.params.slidesPerView - 1) * t) / h.params.slidesPerView, n() ? h.slides[e].style.width = o + "px" : h.slides[e].style.height = o + "px"), h.slides[e].swiperSlideSize = o, h.slidesSizesGrid.push(o), h.params.centeredSlides ? (i = i + o / 2 + s / 2 + t, 0 === e && (i = i - h.size / 2 - t), Math.abs(i) < .001 && (i = 0), a % h.params.slidesPerGroup === 0 && h.snapGrid.push(i), h.slidesGrid.push(i)) : (a % h.params.slidesPerGroup === 0 && h.snapGrid.push(i), h.slidesGrid.push(i), i = i + o + t), h.virtualSize += o + t, s = o, a++)
                    }
                    h.virtualSize = Math.max(h.virtualSize, h.size);
                    var m;
                    if (h.rtl && h.wrongRTL && ("slide" === h.params.effect || "coverflow" === h.params.effect) && h.wrapper.css({
                            width: h.virtualSize + h.params.spaceBetween + "px"
                        }), (!h.support.flexbox || h.params.setWrapperSize) && h.wrapper.css(n() ? {
                            width: h.virtualSize + h.params.spaceBetween + "px"
                        } : {
                            height: h.virtualSize + h.params.spaceBetween + "px"
                        }), h.params.slidesPerColumn > 1 && (h.virtualSize = (o + h.params.spaceBetween) * r, h.virtualSize = Math.ceil(h.virtualSize / h.params.slidesPerColumn) - h.params.spaceBetween, h.wrapper.css({
                            width: h.virtualSize + h.params.spaceBetween + "px"
                        }), h.params.centeredSlides)) {
                        for (m = [], e = 0; e < h.snapGrid.length; e++) h.snapGrid[e] < h.virtualSize + h.snapGrid[0] && m.push(h.snapGrid[e]);
                        h.snapGrid = m
                    }
                    if (!h.params.centeredSlides) {
                        for (m = [], e = 0; e < h.snapGrid.length; e++) h.snapGrid[e] <= h.virtualSize - h.size && m.push(h.snapGrid[e]);
                        h.snapGrid = m, Math.floor(h.virtualSize - h.size) > Math.floor(h.snapGrid[h.snapGrid.length - 1]) && h.snapGrid.push(h.virtualSize - h.size)
                    }
                    0 === h.snapGrid.length && (h.snapGrid = [0]), 0 !== h.params.spaceBetween && h.slides.css(n() ? h.rtl ? {
                        marginLeft: t + "px"
                    } : {
                        marginRight: t + "px"
                    } : {
                        marginBottom: t + "px"
                    }), h.params.watchSlidesProgress && h.updateSlidesOffset()
                }, h.updateSlidesOffset = function() {
                    for (var e = 0; e < h.slides.length; e++) h.slides[e].swiperSlideOffset = n() ? h.slides[e].offsetLeft : h.slides[e].offsetTop
                }, h.updateSlidesProgress = function(e) {
                    if ("undefined" == typeof e && (e = h.translate || 0), 0 !== h.slides.length) {
                        "undefined" == typeof h.slides[0].swiperSlideOffset && h.updateSlidesOffset();
                        var t = h.params.centeredSlides ? -e + h.size / 2 : -e;
                        h.rtl && (t = h.params.centeredSlides ? e - h.size / 2 : e), h.container[0].getBoundingClientRect(), n() ? "left" : "top", n() ? "right" : "bottom", h.slides.removeClass(h.params.slideVisibleClass);
                        for (var i = 0; i < h.slides.length; i++) {
                            var s = h.slides[i],
                                a = h.params.centeredSlides === !0 ? s.swiperSlideSize / 2 : 0,
                                r = (t - s.swiperSlideOffset - a) / (s.swiperSlideSize + h.params.spaceBetween);
                            if (h.params.watchSlidesVisibility) {
                                var o = -(t - s.swiperSlideOffset - a),
                                    l = o + h.slidesSizesGrid[i],
                                    c = o >= 0 && o < h.size || l > 0 && l <= h.size || 0 >= o && l >= h.size;
                                c && h.slides.eq(i).addClass(h.params.slideVisibleClass)
                            }
                            s.progress = h.rtl ? -r : r
                        }
                    }
                }, h.updateProgress = function(e) {
                    "undefined" == typeof e && (e = h.translate || 0);
                    var t = h.maxTranslate() - h.minTranslate();
                    0 === t ? (h.progress = 0, h.isBeginning = h.isEnd = !0) : (h.progress = (e - h.minTranslate()) / t, h.isBeginning = h.progress <= 0, h.isEnd = h.progress >= 1), h.isBeginning && h.emit("onReachBeginning", h), h.isEnd && h.emit("onReachEnd", h), h.params.watchSlidesProgress && h.updateSlidesProgress(e), h.emit("onProgress", h, h.progress)
                }, h.updateActiveIndex = function() {
                    var e, t, n, i = h.rtl ? h.translate : -h.translate;
                    for (t = 0; t < h.slidesGrid.length; t++) "undefined" != typeof h.slidesGrid[t + 1] ? i >= h.slidesGrid[t] && i < h.slidesGrid[t + 1] - (h.slidesGrid[t + 1] - h.slidesGrid[t]) / 2 ? e = t : i >= h.slidesGrid[t] && i < h.slidesGrid[t + 1] && (e = t + 1) : i >= h.slidesGrid[t] && (e = t);
                    (0 > e || "undefined" == typeof e) && (e = 0), n = Math.floor(e / h.params.slidesPerGroup), n >= h.snapGrid.length && (n = h.snapGrid.length - 1), e !== h.activeIndex && (h.snapIndex = n, h.previousIndex = h.activeIndex, h.activeIndex = e, h.updateClasses())
                }, h.updateClasses = function() {
                    h.slides.removeClass(h.params.slideActiveClass + " " + h.params.slideNextClass + " " + h.params.slidePrevClass);
                    var e = h.slides.eq(h.activeIndex);
                    if (e.addClass(h.params.slideActiveClass), e.next("." + h.params.slideClass).addClass(h.params.slideNextClass), e.prev("." + h.params.slideClass).addClass(h.params.slidePrevClass), h.bullets && h.bullets.length > 0) {
                        h.bullets.removeClass(h.params.bulletActiveClass);
                        var t;
                        h.params.loop ? (t = Math.ceil(h.activeIndex - h.loopedSlides) / h.params.slidesPerGroup, t > h.slides.length - 1 - 2 * h.loopedSlides && (t -= h.slides.length - 2 * h.loopedSlides), t > h.bullets.length - 1 && (t -= h.bullets.length)) : t = "undefined" != typeof h.snapIndex ? h.snapIndex : h.activeIndex || 0, h.paginationContainer.length > 1 ? h.bullets.each(function() {
                            m(this).index() === t && m(this).addClass(h.params.bulletActiveClass)
                        }) : h.bullets.eq(t).addClass(h.params.bulletActiveClass)
                    }
                    h.params.loop || (h.params.prevButton && (h.isBeginning ? (m(h.params.prevButton).addClass(h.params.buttonDisabledClass),
                        h.params.a11y && h.a11y && h.a11y.disable(m(h.params.prevButton))) : (m(h.params.prevButton).removeClass(h.params.buttonDisabledClass), h.params.a11y && h.a11y && h.a11y.enable(m(h.params.prevButton)))), h.params.nextButton && (h.isEnd ? (m(h.params.nextButton).addClass(h.params.buttonDisabledClass), h.params.a11y && h.a11y && h.a11y.disable(m(h.params.nextButton))) : (m(h.params.nextButton).removeClass(h.params.buttonDisabledClass), h.params.a11y && h.a11y && h.a11y.enable(m(h.params.nextButton)))))
                }, h.updatePagination = function() {
                    if (h.params.pagination && h.paginationContainer && h.paginationContainer.length > 0) {
                        for (var e = "", t = h.params.loop ? Math.ceil((h.slides.length - 2 * h.loopedSlides) / h.params.slidesPerGroup) : h.snapGrid.length, n = 0; t > n; n++) e += h.params.paginationBulletRender ? h.params.paginationBulletRender(n, h.params.bulletClass) : '<span class="' + h.params.bulletClass + '"></span>';
                        h.paginationContainer.html(e), h.bullets = h.paginationContainer.find("." + h.params.bulletClass)
                    }
                }, h.update = function(e) {
                    function t() {
                        i = Math.min(Math.max(h.translate, h.maxTranslate()), h.minTranslate()), h.setWrapperTranslate(i), h.updateActiveIndex(), h.updateClasses()
                    }
                    if (h.updateContainerSize(), h.updateSlidesSize(), h.updateProgress(), h.updatePagination(), h.updateClasses(), h.params.scrollbar && h.scrollbar && h.scrollbar.set(), e) {
                        var n, i;
                        h.params.freeMode ? t() : (n = "auto" === h.params.slidesPerView && h.isEnd && !h.params.centeredSlides ? h.slideTo(h.slides.length - 1, 0, !1, !0) : h.slideTo(h.activeIndex, 0, !1, !0), n || t())
                    }
                }, h.onResize = function() {
                    if (h.updateContainerSize(), h.updateSlidesSize(), h.updateProgress(), ("auto" === h.params.slidesPerView || h.params.freeMode) && h.updatePagination(), h.params.scrollbar && h.scrollbar && h.scrollbar.set(), h.params.freeMode) {
                        var e = Math.min(Math.max(h.translate, h.maxTranslate()), h.minTranslate());
                        h.setWrapperTranslate(e), h.updateActiveIndex(), h.updateClasses()
                    } else h.updateClasses(), "auto" === h.params.slidesPerView && h.isEnd && !h.params.centeredSlides ? h.slideTo(h.slides.length - 1, 0, !1, !0) : h.slideTo(h.activeIndex, 0, !1, !0)
                };
                var v = ["mousedown", "mousemove", "mouseup"];
                window.navigator.pointerEnabled ? v = ["pointerdown", "pointermove", "pointerup"] : window.navigator.msPointerEnabled && (v = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), h.touchEvents = {
                    start: h.support.touch || !h.params.simulateTouch ? "touchstart" : v[0],
                    move: h.support.touch || !h.params.simulateTouch ? "touchmove" : v[1],
                    end: h.support.touch || !h.params.simulateTouch ? "touchend" : v[2]
                }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === h.params.touchEventsTarget ? h.container : h.wrapper).addClass("swiper-wp8-" + h.params.direction), h.initEvents = function(e) {
                    var n = e ? "off" : "on",
                        i = e ? "removeEventListener" : "addEventListener",
                        s = "container" === h.params.touchEventsTarget ? h.container[0] : h.wrapper[0],
                        a = h.support.touch ? s : document,
                        r = !!h.params.nested;
                    h.browser.ie ? (s[i](h.touchEvents.start, h.onTouchStart, !1), a[i](h.touchEvents.move, h.onTouchMove, r), a[i](h.touchEvents.end, h.onTouchEnd, !1)) : (h.support.touch && (s[i](h.touchEvents.start, h.onTouchStart, !1), s[i](h.touchEvents.move, h.onTouchMove, r), s[i](h.touchEvents.end, h.onTouchEnd, !1)), !t.simulateTouch || h.device.ios || h.device.android || (s[i]("mousedown", h.onTouchStart, !1), a[i]("mousemove", h.onTouchMove, r), a[i]("mouseup", h.onTouchEnd, !1))), window[i]("resize", h.onResize), h.params.nextButton && (m(h.params.nextButton)[n]("click", h.onClickNext), h.params.a11y && h.a11y && m(h.params.nextButton)[n]("keydown", h.a11y.onEnterKey)), h.params.prevButton && (m(h.params.prevButton)[n]("click", h.onClickPrev), h.params.a11y && h.a11y && m(h.params.prevButton)[n]("keydown", h.a11y.onEnterKey)), h.params.pagination && h.params.paginationClickable && m(h.paginationContainer)[n]("click", "." + h.params.bulletClass, h.onClickIndex), (h.params.preventClicks || h.params.preventClicksPropagation) && s[i]("click", h.preventClicks, !0)
                }, h.attachEvents = function() {
                    h.initEvents()
                }, h.detachEvents = function() {
                    h.initEvents(!0)
                }, h.allowClick = !0, h.preventClicks = function(e) {
                    h.allowClick || (h.params.preventClicks && e.preventDefault(), h.params.preventClicksPropagation && (e.stopPropagation(), e.stopImmediatePropagation()))
                }, h.onClickNext = function(e) {
                    e.preventDefault(), h.slideNext()
                }, h.onClickPrev = function(e) {
                    e.preventDefault(), h.slidePrev()
                }, h.onClickIndex = function(e) {
                    e.preventDefault();
                    var t = m(this).index() * h.params.slidesPerGroup;
                    h.params.loop && (t += h.loopedSlides), h.slideTo(t)
                }, h.updateClickedSlide = function(e) {
                    var t = s(e, "." + h.params.slideClass);
                    if (!t) return h.clickedSlide = void 0, void(h.clickedIndex = void 0);
                    if (h.clickedSlide = t, h.clickedIndex = m(t).index(), h.params.slideToClickedSlide && void 0 !== h.clickedIndex && h.clickedIndex !== h.activeIndex) {
                        var n, i = h.clickedIndex;
                        if (h.params.loop)
                            if (n = m(h.clickedSlide).attr("data-swiper-slide-index"), i > h.slides.length - h.params.slidesPerView) h.fixLoop(), i = h.wrapper.children("." + h.params.slideClass + '[data-swiper-slide-index="' + n + '"]').eq(0).index(), setTimeout(function() {
                                h.slideTo(i)
                            }, 0);
                            else if (i < h.params.slidesPerView - 1) {
                            h.fixLoop();
                            var a = h.wrapper.children("." + h.params.slideClass + '[data-swiper-slide-index="' + n + '"]');
                            i = a.eq(a.length - 1).index(), setTimeout(function() {
                                h.slideTo(i)
                            }, 0)
                        } else h.slideTo(i);
                        else h.slideTo(i)
                    }
                };
                var g, b, y, w, _, x, C, S, T, $ = "input, select, textarea, button",
                    P = Date.now(),
                    k = [];
                h.animating = !1, h.touches = {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                };
                var I, M;
                if (h.onTouchStart = function(e) {
                        if (e.originalEvent && (e = e.originalEvent), I = "touchstart" === e.type, I || !("which" in e) || 3 !== e.which) {
                            if (h.params.noSwiping && s(e, "." + h.params.noSwipingClass)) return void(h.allowClick = !0);
                            if (!h.params.swipeHandler || s(e, h.params.swipeHandler)) {
                                if (g = !0, b = !1, w = void 0, M = void 0, h.touches.startX = h.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, h.touches.startY = h.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY, y = Date.now(), h.allowClick = !0, h.updateContainerSize(), h.swipeDirection = void 0, h.params.threshold > 0 && (C = !1), "touchstart" !== e.type) {
                                    var t = !0;
                                    m(e.target).is($) && (t = !1), document.activeElement && m(document.activeElement).is($) && document.activeElement.blur(), t && e.preventDefault()
                                }
                                h.emit("onTouchStart", h, e)
                            }
                        }
                    }, h.onTouchMove = function(e) {
                        if (e.originalEvent && (e = e.originalEvent), !(I && "mousemove" === e.type || e.preventedByNestedSwiper)) {
                            if (h.params.onlyExternal) return b = !0, void(h.allowClick = !1);
                            if (I && document.activeElement && e.target === document.activeElement && m(e.target).is($)) return b = !0, void(h.allowClick = !1);
                            if (h.emit("onTouchMove", h, e), !(e.targetTouches && e.targetTouches.length > 1)) {
                                if (h.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, h.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, "undefined" == typeof w) {
                                    var i = 180 * Math.atan2(Math.abs(h.touches.currentY - h.touches.startY), Math.abs(h.touches.currentX - h.touches.startX)) / Math.PI;
                                    w = n() ? i > h.params.touchAngle : 90 - i > h.params.touchAngle
                                }
                                if (w && h.emit("onTouchMoveOpposite", h, e), "undefined" == typeof M && h.browser.ieTouch && (h.touches.currentX !== h.touches.startX || h.touches.currentY !== h.touches.startY) && (M = !0), g) {
                                    if (w) return void(g = !1);
                                    if (M || !h.browser.ieTouch) {
                                        h.allowClick = !1, h.emit("onSliderMove", h, e), e.preventDefault(), h.params.touchMoveStopPropagation && !h.params.nested && e.stopPropagation(), b || (t.loop && h.fixLoop(), x = h.getWrapperTranslate(), h.setWrapperTransition(0), h.animating && h.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), h.params.autoplay && h.autoplaying && (h.params.autoplayDisableOnInteraction ? h.stopAutoplay() : h.pauseAutoplay()), T = !1, h.params.grabCursor && (h.container[0].style.cursor = "move", h.container[0].style.cursor = "-webkit-grabbing", h.container[0].style.cursor = "-moz-grabbin", h.container[0].style.cursor = "grabbing")), b = !0;
                                        var s = h.touches.diff = n() ? h.touches.currentX - h.touches.startX : h.touches.currentY - h.touches.startY;
                                        s *= h.params.touchRatio, h.rtl && (s = -s), h.swipeDirection = s > 0 ? "prev" : "next", _ = s + x;
                                        var a = !0;
                                        if (s > 0 && _ > h.minTranslate() ? (a = !1, h.params.resistance && (_ = h.minTranslate() - 1 + Math.pow(-h.minTranslate() + x + s, h.params.resistanceRatio))) : 0 > s && _ < h.maxTranslate() && (a = !1, h.params.resistance && (_ = h.maxTranslate() + 1 - Math.pow(h.maxTranslate() - x - s, h.params.resistanceRatio))), a && (e.preventedByNestedSwiper = !0), !h.params.allowSwipeToNext && "next" === h.swipeDirection && x > _ && (_ = x), !h.params.allowSwipeToPrev && "prev" === h.swipeDirection && _ > x && (_ = x), h.params.followFinger) {
                                            if (h.params.threshold > 0) {
                                                if (!(Math.abs(s) > h.params.threshold || C)) return void(_ = x);
                                                if (!C) return C = !0, h.touches.startX = h.touches.currentX, h.touches.startY = h.touches.currentY, _ = x, void(h.touches.diff = n() ? h.touches.currentX - h.touches.startX : h.touches.currentY - h.touches.startY)
                                            }(h.params.freeMode || h.params.watchSlidesProgress) && h.updateActiveIndex(), h.params.freeMode && (0 === k.length && k.push({
                                                position: h.touches[n() ? "startX" : "startY"],
                                                time: y
                                            }), k.push({
                                                position: h.touches[n() ? "currentX" : "currentY"],
                                                time: (new Date).getTime()
                                            })), h.updateProgress(_), h.setWrapperTranslate(_)
                                        }
                                    }
                                }
                            }
                        }
                    }, h.onTouchEnd = function(e) {
                        if (e.originalEvent && (e = e.originalEvent), h.emit("onTouchEnd", h, e), g) {
                            h.params.grabCursor && b && g && (h.container[0].style.cursor = "move", h.container[0].style.cursor = "-webkit-grab", h.container[0].style.cursor = "-moz-grab", h.container[0].style.cursor = "grab");
                            var t = Date.now(),
                                n = t - y;
                            if (h.allowClick && (h.updateClickedSlide(e), h.emit("onTap", h, e), 300 > n && t - P > 300 && (S && clearTimeout(S), S = setTimeout(function() {
                                    h && (h.params.paginationHide && h.paginationContainer.length > 0 && !m(e.target).hasClass(h.params.bulletClass) && h.paginationContainer.toggleClass(h.params.paginationHiddenClass), h.emit("onClick", h, e))
                                }, 300)), 300 > n && 300 > t - P && (S && clearTimeout(S), h.emit("onDoubleTap", h, e))), P = Date.now(), setTimeout(function() {
                                    h && h.allowClick && (h.allowClick = !0)
                                }, 0), !g || !b || !h.swipeDirection || 0 === h.touches.diff || _ === x) return void(g = b = !1);
                            g = b = !1;
                            var i;
                            if (i = h.params.followFinger ? h.rtl ? h.translate : -h.translate : -_, h.params.freeMode) {
                                if (i < -h.minTranslate()) return void h.slideTo(h.activeIndex);
                                if (i > -h.maxTranslate()) return void h.slideTo(h.slides.length - 1);
                                if (h.params.freeModeMomentum) {
                                    if (k.length > 1) {
                                        var s = k.pop(),
                                            a = k.pop(),
                                            r = s.position - a.position,
                                            o = s.time - a.time;
                                        h.velocity = r / o, h.velocity = h.velocity / 2, Math.abs(h.velocity) < .02 && (h.velocity = 0), (o > 150 || (new Date).getTime() - s.time > 300) && (h.velocity = 0)
                                    } else h.velocity = 0;
                                    k.length = 0;
                                    var l = 1e3 * h.params.freeModeMomentumRatio,
                                        c = h.velocity * l,
                                        d = h.translate + c;
                                    h.rtl && (d = -d);
                                    var p, u = !1,
                                        f = 20 * Math.abs(h.velocity) * h.params.freeModeMomentumBounceRatio;
                                    d < h.maxTranslate() && (h.params.freeModeMomentumBounce ? (d + h.maxTranslate() < -f && (d = h.maxTranslate() - f), p = h.maxTranslate(), u = !0, T = !0) : d = h.maxTranslate()), d > h.minTranslate() && (h.params.freeModeMomentumBounce ? (d - h.minTranslate() > f && (d = h.minTranslate() + f), p = h.minTranslate(), u = !0, T = !0) : d = h.minTranslate()), 0 !== h.velocity && (l = Math.abs(h.rtl ? (-d - h.translate) / h.velocity : (d - h.translate) / h.velocity)), h.params.freeModeMomentumBounce && u ? (h.updateProgress(p), h.setWrapperTransition(l), h.setWrapperTranslate(d), h.onTransitionStart(), h.animating = !0, h.wrapper.transitionEnd(function() {
                                        T && (h.emit("onMomentumBounce", h), h.setWrapperTransition(h.params.speed), h.setWrapperTranslate(p), h.wrapper.transitionEnd(function() {
                                            h.onTransitionEnd()
                                        }))
                                    })) : h.velocity ? (h.updateProgress(d), h.setWrapperTransition(l), h.setWrapperTranslate(d), h.onTransitionStart(), h.animating || (h.animating = !0, h.wrapper.transitionEnd(function() {
                                        h.onTransitionEnd()
                                    }))) : h.updateProgress(d), h.updateActiveIndex()
                                }
                                return void((!h.params.freeModeMomentum || n >= h.params.longSwipesMs) && (h.updateProgress(), h.updateActiveIndex()))
                            }
                            var v, w = 0,
                                C = h.slidesSizesGrid[0];
                            for (v = 0; v < h.slidesGrid.length; v += h.params.slidesPerGroup) "undefined" != typeof h.slidesGrid[v + h.params.slidesPerGroup] ? i >= h.slidesGrid[v] && i < h.slidesGrid[v + h.params.slidesPerGroup] && (w = v, C = h.slidesGrid[v + h.params.slidesPerGroup] - h.slidesGrid[v]) : i >= h.slidesGrid[v] && (w = v, C = h.slidesGrid[h.slidesGrid.length - 1] - h.slidesGrid[h.slidesGrid.length - 2]);
                            var $ = (i - h.slidesGrid[w]) / C;
                            if (n > h.params.longSwipesMs) {
                                if (!h.params.longSwipes) return void h.slideTo(h.activeIndex);
                                "next" === h.swipeDirection && h.slideTo($ >= h.params.longSwipesRatio ? w + h.params.slidesPerGroup : w), "prev" === h.swipeDirection && h.slideTo($ > 1 - h.params.longSwipesRatio ? w + h.params.slidesPerGroup : w)
                            } else {
                                if (!h.params.shortSwipes) return void h.slideTo(h.activeIndex);
                                "next" === h.swipeDirection && h.slideTo(w + h.params.slidesPerGroup), "prev" === h.swipeDirection && h.slideTo(w)
                            }
                        }
                    }, h._slideTo = function(e, t) {
                        return h.slideTo(e, t, !0, !0)
                    }, h.slideTo = function(e, t, i, s) {
                        "undefined" == typeof i && (i = !0), "undefined" == typeof e && (e = 0), 0 > e && (e = 0), h.snapIndex = Math.floor(e / h.params.slidesPerGroup), h.snapIndex >= h.snapGrid.length && (h.snapIndex = h.snapGrid.length - 1);
                        var a = -h.snapGrid[h.snapIndex];
                        h.params.autoplay && h.autoplaying && (s || !h.params.autoplayDisableOnInteraction ? h.pauseAutoplay(t) : h.stopAutoplay()), h.updateProgress(a);
                        for (var r = 0; r < h.slidesGrid.length; r++) - a >= h.slidesGrid[r] && (e = r);
                        return "undefined" == typeof t && (t = h.params.speed), h.previousIndex = h.activeIndex || 0, h.activeIndex = e, a === h.translate ? (h.updateClasses(), !1) : (h.onTransitionStart(i), n() ? a : 0, n() ? 0 : a, 0 === t ? (h.setWrapperTransition(0), h.setWrapperTranslate(a), h.onTransitionEnd(i)) : (h.setWrapperTransition(t), h.setWrapperTranslate(a), h.animating || (h.animating = !0, h.wrapper.transitionEnd(function() {
                            h.onTransitionEnd(i)
                        }))), h.updateClasses(), !0)
                    }, h.onTransitionStart = function(e) {
                        "undefined" == typeof e && (e = !0), h.lazy && h.lazy.onTransitionStart(), e && (h.emit("onTransitionStart", h), h.activeIndex !== h.previousIndex && h.emit("onSlideChangeStart", h))
                    }, h.onTransitionEnd = function(e) {
                        h.animating = !1, h.setWrapperTransition(0), "undefined" == typeof e && (e = !0), h.lazy && h.lazy.onTransitionEnd(), e && (h.emit("onTransitionEnd", h), h.activeIndex !== h.previousIndex && h.emit("onSlideChangeEnd", h)), h.params.hashnav && h.hashnav && h.hashnav.setHash()
                    }, h.slideNext = function(e, t, n) {
                        return h.params.loop ? h.animating ? !1 : (h.fixLoop(), h.container[0].clientLeft, h.slideTo(h.activeIndex + h.params.slidesPerGroup, t, e, n)) : h.slideTo(h.activeIndex + h.params.slidesPerGroup, t, e, n)
                    }, h._slideNext = function(e) {
                        return h.slideNext(!0, e, !0)
                    }, h.slidePrev = function(e, t, n) {
                        return h.params.loop ? h.animating ? !1 : (h.fixLoop(), h.container[0].clientLeft, h.slideTo(h.activeIndex - 1, t, e, n)) : h.slideTo(h.activeIndex - 1, t, e, n)
                    }, h._slidePrev = function(e) {
                        return h.slidePrev(!0, e, !0)
                    }, h.slideReset = function(e, t) {
                        return h.slideTo(h.activeIndex, t, e)
                    }, h.setWrapperTransition = function(e, t) {
                        h.wrapper.transition(e), "slide" !== h.params.effect && h.effects[h.params.effect] && h.effects[h.params.effect].setTransition(e), h.params.parallax && h.parallax && h.parallax.setTransition(e), h.params.scrollbar && h.scrollbar && h.scrollbar.setTransition(e), h.params.control && h.controller && h.controller.setTransition(e, t), h.emit("onSetTransition", h, e)
                    }, h.setWrapperTranslate = function(e, t, i) {
                        var s = 0,
                            a = 0,
                            r = 0;
                        n() ? s = h.rtl ? -e : e : a = e, h.params.virtualTranslate || h.wrapper.transform(h.support.transforms3d ? "translate3d(" + s + "px, " + a + "px, " + r + "px)" : "translate(" + s + "px, " + a + "px)"), h.translate = n() ? s : a, t && h.updateActiveIndex(), "slide" !== h.params.effect && h.effects[h.params.effect] && h.effects[h.params.effect].setTranslate(h.translate), h.params.parallax && h.parallax && h.parallax.setTranslate(h.translate), h.params.scrollbar && h.scrollbar && h.scrollbar.setTranslate(h.translate), h.params.control && h.controller && h.controller.setTranslate(h.translate, i), h.emit("onSetTranslate", h, h.translate)
                    }, h.getTranslate = function(e, t) {
                        var n, i, s, a;
                        return "undefined" == typeof t && (t = "x"), h.params.virtualTranslate ? h.rtl ? -h.translate : h.translate : (s = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? a = new WebKitCSSMatrix("none" === s.webkitTransform ? "" : s.webkitTransform) : (a = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = a.toString().split(",")), "x" === t && (i = window.WebKitCSSMatrix ? a.m41 : parseFloat(16 === n.length ? n[12] : n[4])), "y" === t && (i = window.WebKitCSSMatrix ? a.m42 : parseFloat(16 === n.length ? n[13] : n[5])), h.rtl && i && (i = -i), i || 0)
                    }, h.getWrapperTranslate = function(e) {
                        return "undefined" == typeof e && (e = n() ? "x" : "y"), h.getTranslate(h.wrapper[0], e)
                    }, h.observers = [], h.initObservers = function() {
                        if (h.params.observeParents)
                            for (var e = h.container.parents(), t = 0; t < e.length; t++) a(e[t]);
                        a(h.container[0], {
                            childList: !1
                        }), a(h.wrapper[0], {
                            attributes: !1
                        })
                    }, h.disconnectObservers = function() {
                        for (var e = 0; e < h.observers.length; e++) h.observers[e].disconnect();
                        h.observers = []
                    }, h.createLoop = function() {
                        h.wrapper.children("." + h.params.slideClass + "." + h.params.slideDuplicateClass).remove();
                        var e = h.wrapper.children("." + h.params.slideClass);
                        h.loopedSlides = parseInt(h.params.loopedSlides || h.params.slidesPerView, 10), h.loopedSlides = h.loopedSlides + h.params.loopAdditionalSlides, h.loopedSlides > e.length && (h.loopedSlides = e.length);
                        var t, n = [],
                            i = [];
                        for (e.each(function(t, s) {
                                var a = m(this);
                                t < h.loopedSlides && i.push(s), t < e.length && t >= e.length - h.loopedSlides && n.push(s), a.attr("data-swiper-slide-index", t)
                            }), t = 0; t < i.length; t++) h.wrapper.append(m(i[t].cloneNode(!0)).addClass(h.params.slideDuplicateClass));
                        for (t = n.length - 1; t >= 0; t--) h.wrapper.prepend(m(n[t].cloneNode(!0)).addClass(h.params.slideDuplicateClass))
                    }, h.destroyLoop = function() {
                        h.wrapper.children("." + h.params.slideClass + "." + h.params.slideDuplicateClass).remove(), h.slides.removeAttr("data-swiper-slide-index")
                    }, h.fixLoop = function() {
                        var e;
                        h.activeIndex < h.loopedSlides ? (e = h.slides.length - 3 * h.loopedSlides + h.activeIndex, e += h.loopedSlides, h.slideTo(e, 0, !1, !0)) : ("auto" === h.params.slidesPerView && h.activeIndex >= 2 * h.loopedSlides || h.activeIndex > h.slides.length - 2 * h.params.slidesPerView) && (e = -h.slides.length + h.activeIndex + h.loopedSlides, e += h.loopedSlides, h.slideTo(e, 0, !1, !0))
                    }, h.appendSlide = function(e) {
                        if (h.params.loop && h.destroyLoop(), "object" == typeof e && e.length)
                            for (var t = 0; t < e.length; t++) e[t] && h.wrapper.append(e[t]);
                        else h.wrapper.append(e);
                        h.params.loop && h.createLoop(), h.params.observer && h.support.observer || h.update(!0)
                    }, h.prependSlide = function(e) {
                        h.params.loop && h.destroyLoop();
                        var t = h.activeIndex + 1;
                        if ("object" == typeof e && e.length) {
                            for (var n = 0; n < e.length; n++) e[n] && h.wrapper.prepend(e[n]);
                            t = h.activeIndex + e.length
                        } else h.wrapper.prepend(e);
                        h.params.loop && h.createLoop(), h.params.observer && h.support.observer || h.update(!0), h.slideTo(t, 0, !1)
                    }, h.removeSlide = function(e) {
                        h.params.loop && h.destroyLoop();
                        var t, n = h.activeIndex;
                        if ("object" == typeof e && e.length) {
                            for (var i = 0; i < e.length; i++) t = e[i], h.slides[t] && h.slides.eq(t).remove(), n > t && n--;
                            n = Math.max(n, 0)
                        } else t = e, h.slides[t] && h.slides.eq(t).remove(), n > t && n--, n = Math.max(n, 0);
                        h.params.observer && h.support.observer || h.update(!0), h.slideTo(n, 0, !1)
                    }, h.removeAllSlides = function() {
                        for (var e = [], t = 0; t < h.slides.length; t++) e.push(t);
                        h.removeSlide(e)
                    }, h.effects = {
                        fade: {
                            fadeIndex: null,
                            setTranslate: function() {
                                for (var e = 0; e < h.slides.length; e++) {
                                    var t = h.slides.eq(e),
                                        i = t[0].swiperSlideOffset,
                                        s = -i;
                                    h.params.virtualTranslate || (s -= h.translate);
                                    var a = 0;
                                    n() || (a = s, s = 0);
                                    var r = h.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                                    r > 0 && 1 > r && (h.effects.fade.fadeIndex = e), t.css({
                                        opacity: r
                                    }).transform("translate3d(" + s + "px, " + a + "px, 0px)")
                                }
                            },
                            setTransition: function(e) {
                                if (h.slides.transition(e), h.params.virtualTranslate && 0 !== e) {
                                    var t = null !== h.effects.fade.fadeIndex ? h.effects.fade.fadeIndex : h.activeIndex;
                                    h.slides.eq(t).transitionEnd(function() {
                                        for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], t = 0; t < e.length; t++) h.wrapper.trigger(e[t])
                                    })
                                }
                            }
                        },
                        cube: {
                            setTranslate: function() {
                                var e, t = 0;
                                h.params.cube.shadow && (n() ? (e = h.wrapper.find(".swiper-cube-shadow"), 0 === e.length && (e = m('<div class="swiper-cube-shadow"></div>'), h.wrapper.append(e)), e.css({
                                    height: h.width + "px"
                                })) : (e = h.container.find(".swiper-cube-shadow"), 0 === e.length && (e = m('<div class="swiper-cube-shadow"></div>'), h.container.append(e))));
                                for (var i = 0; i < h.slides.length; i++) {
                                    var s = h.slides.eq(i),
                                        a = 90 * i,
                                        r = Math.floor(a / 360);
                                    h.rtl && (a = -a, r = Math.floor(-a / 360));
                                    var o = Math.max(Math.min(s[0].progress, 1), -1),
                                        l = 0,
                                        c = 0,
                                        d = 0;
                                    i % 4 === 0 ? (l = 4 * -r * h.size, d = 0) : (i - 1) % 4 === 0 ? (l = 0, d = 4 * -r * h.size) : (i - 2) % 4 === 0 ? (l = h.size + 4 * r * h.size, d = h.size) : (i - 3) % 4 === 0 && (l = -h.size, d = 3 * h.size + 4 * h.size * r), h.rtl && (l = -l), n() || (c = l, l = 0);
                                    var p = "rotateX(" + (n() ? 0 : -a) + "deg) rotateY(" + (n() ? a : 0) + "deg) translate3d(" + l + "px, " + c + "px, " + d + "px)";
                                    if (1 >= o && o > -1 && (t = 90 * i + 90 * o, h.rtl && (t = 90 * -i - 90 * o)), s.transform(p), h.params.cube.slideShadows) {
                                        var u = s.find(n() ? ".swiper-slide-shadow-left" : ".swiper-slide-shadow-top"),
                                            f = s.find(n() ? ".swiper-slide-shadow-right" : ".swiper-slide-shadow-bottom");
                                        0 === u.length && (u = m('<div class="swiper-slide-shadow-' + (n() ? "left" : "top") + '"></div>'), s.append(u)), 0 === f.length && (f = m('<div class="swiper-slide-shadow-' + (n() ? "right" : "bottom") + '"></div>'), s.append(f)), s[0].progress, u.length && (u[0].style.opacity = -s[0].progress), f.length && (f[0].style.opacity = s[0].progress)
                                    }
                                }
                                if (h.wrapper.css({
                                        "-webkit-transform-origin": "50% 50% -" + h.size / 2 + "px",
                                        "-moz-transform-origin": "50% 50% -" + h.size / 2 + "px",
                                        "-ms-transform-origin": "50% 50% -" + h.size / 2 + "px",
                                        "transform-origin": "50% 50% -" + h.size / 2 + "px"
                                    }), h.params.cube.shadow)
                                    if (n()) e.transform("translate3d(0px, " + (h.width / 2 + h.params.cube.shadowOffset) + "px, " + -h.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + h.params.cube.shadowScale + ")");
                                    else {
                                        var v = Math.abs(t) - 90 * Math.floor(Math.abs(t) / 90),
                                            g = 1.5 - (Math.sin(2 * v * Math.PI / 360) / 2 + Math.cos(2 * v * Math.PI / 360) / 2),
                                            b = h.params.cube.shadowScale,
                                            y = h.params.cube.shadowScale / g,
                                            w = h.params.cube.shadowOffset;
                                        e.transform("scale3d(" + b + ", 1, " + y + ") translate3d(0px, " + (h.height / 2 + w) + "px, " + -h.height / 2 / y + "px) rotateX(-90deg)")
                                    } var _ = h.isSafari || h.isUiWebView ? -h.size / 2 : 0;
                                h.wrapper.transform("translate3d(0px,0," + _ + "px) rotateX(" + (n() ? 0 : t) + "deg) rotateY(" + (n() ? -t : 0) + "deg)")
                            },
                            setTransition: function(e) {
                                h.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), h.params.cube.shadow && !n() && h.container.find(".swiper-cube-shadow").transition(e)
                            }
                        },
                        coverflow: {
                            setTranslate: function() {
                                for (var e = h.translate, t = n() ? -e + h.width / 2 : -e + h.height / 2, i = n() ? h.params.coverflow.rotate : -h.params.coverflow.rotate, s = h.params.coverflow.depth, a = 0, r = h.slides.length; r > a; a++) {
                                    var o = h.slides.eq(a),
                                        l = h.slidesSizesGrid[a],
                                        c = o[0].swiperSlideOffset,
                                        d = (t - c - l / 2) / l * h.params.coverflow.modifier,
                                        p = n() ? i * d : 0,
                                        u = n() ? 0 : i * d,
                                        f = -s * Math.abs(d),
                                        v = n() ? 0 : h.params.coverflow.stretch * d,
                                        g = n() ? h.params.coverflow.stretch * d : 0;
                                    Math.abs(g) < .001 && (g = 0), Math.abs(v) < .001 && (v = 0), Math.abs(f) < .001 && (f = 0), Math.abs(p) < .001 && (p = 0), Math.abs(u) < .001 && (u = 0);
                                    var b = "translate3d(" + g + "px," + v + "px," + f + "px)  rotateX(" + u + "deg) rotateY(" + p + "deg)";
                                    if (o.transform(b), o[0].style.zIndex = -Math.abs(Math.round(d)) + 1, h.params.coverflow.slideShadows) {
                                        var y = o.find(n() ? ".swiper-slide-shadow-left" : ".swiper-slide-shadow-top"),
                                            w = o.find(n() ? ".swiper-slide-shadow-right" : ".swiper-slide-shadow-bottom");
                                        0 === y.length && (y = m('<div class="swiper-slide-shadow-' + (n() ? "left" : "top") + '"></div>'), o.append(y)), 0 === w.length && (w = m('<div class="swiper-slide-shadow-' + (n() ? "right" : "bottom") + '"></div>'), o.append(w)), y.length && (y[0].style.opacity = d > 0 ? d : 0), w.length && (w[0].style.opacity = -d > 0 ? -d : 0)
                                    }
                                }
                                if (h.browser.ie) {
                                    var _ = h.wrapper[0].style;
                                    _.perspectiveOrigin = t + "px 50%"
                                }
                            },
                            setTransition: function(e) {
                                h.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                            }
                        }
                    }, h.lazy = {
                        initialImageLoaded: !1,
                        loadImageInSlide: function(e) {
                            if ("undefined" != typeof e && 0 !== h.slides.length) {
                                var t = h.slides.eq(e),
                                    n = t.find("img.swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");
                                0 !== n.length && n.each(function() {
                                    var e = m(this);
                                    e.addClass("swiper-lazy-loading");
                                    var n = e.attr("data-src");
                                    h.loadImage(e[0], n, !1, function() {
                                        e.attr("src", n), e.removeAttr("data-src"), e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"), t.find(".swiper-lazy-preloader, .preloader").remove(), h.emit("onLazyImageReady", h, t[0], e[0])
                                    }), h.emit("onLazyImageLoad", h, t[0], e[0])
                                })
                            }
                        },
                        load: function() {
                            if (h.params.watchSlidesVisibility) h.wrapper.children("." + h.params.slideVisibleClass).each(function() {
                                h.lazy.loadImageInSlide(m(this).index())
                            });
                            else if (h.params.slidesPerView > 1)
                                for (var e = h.activeIndex; e < h.activeIndex + h.params.slidesPerView; e++) h.slides[e] && h.lazy.loadImageInSlide(e);
                            else h.lazy.loadImageInSlide(h.activeIndex);
                            if (h.params.lazyLoadingInPrevNext) {
                                var t = h.wrapper.children("." + h.params.slideNextClass);
                                t.length > 0 && h.lazy.loadImageInSlide(t.index());
                                var n = h.wrapper.children("." + h.params.slidePrevClass);
                                n.length > 0 && h.lazy.loadImageInSlide(n.index())
                            }
                        },
                        onTransitionStart: function() {
                            h.params.lazyLoading && (h.params.lazyLoadingOnTransitionStart || !h.params.lazyLoadingOnTransitionStart && !h.lazy.initialImageLoaded) && (h.lazy.initialImageLoaded = !0, h.lazy.load())
                        },
                        onTransitionEnd: function() {
                            h.params.lazyLoading && !h.params.lazyLoadingOnTransitionStart && h.lazy.load()
                        }
                    }, h.scrollbar = {
                        set: function() {
                            if (h.params.scrollbar) {
                                var e = h.scrollbar;
                                e.track = m(h.params.scrollbar), e.drag = e.track.find(".swiper-scrollbar-drag"), 0 === e.drag.length && (e.drag = m('<div class="swiper-scrollbar-drag"></div>'), e.track.append(e.drag)), e.drag[0].style.width = "", e.drag[0].style.height = "", e.trackSize = n() ? e.track[0].offsetWidth : e.track[0].offsetHeight, e.divider = h.size / h.virtualSize, e.moveDivider = e.divider * (e.trackSize / h.size), e.dragSize = e.trackSize * e.divider, n() ? e.drag[0].style.width = e.dragSize + "px" : e.drag[0].style.height = e.dragSize + "px", e.track[0].style.display = e.divider >= 1 ? "none" : "", h.params.scrollbarHide && (e.track[0].style.opacity = 0)
                            }
                        },
                        setTranslate: function() {
                            if (h.params.scrollbar) {
                                var e, t = h.scrollbar,
                                    i = (h.translate || 0, t.dragSize);
                                e = (t.trackSize - t.dragSize) * h.progress, h.rtl && n() ? (e = -e, e > 0 ? (i = t.dragSize - e, e = 0) : -e + t.dragSize > t.trackSize && (i = t.trackSize + e)) : 0 > e ? (i = t.dragSize + e, e = 0) : e + t.dragSize > t.trackSize && (i = t.trackSize - e), n() ? (t.drag.transform(h.support.transforms3d ? "translate3d(" + e + "px, 0, 0)" : "translateX(" + e + "px)"), t.drag[0].style.width = i + "px") : (t.drag.transform(h.support.transforms3d ? "translate3d(0px, " + e + "px, 0)" : "translateY(" + e + "px)"), t.drag[0].style.height = i + "px"), h.params.scrollbarHide && (clearTimeout(t.timeout), t.track[0].style.opacity = 1, t.timeout = setTimeout(function() {
                                    t.track[0].style.opacity = 0, t.track.transition(400)
                                }, 1e3))
                            }
                        },
                        setTransition: function(e) {
                            h.params.scrollbar && h.scrollbar.drag.transition(e)
                        }
                    }, h.controller = {
                        setTranslate: function(e, t) {
                            var n, i, s = h.params.control;
                            if (h.isArray(s))
                                for (var a = 0; a < s.length; a++) s[a] !== t && s[a] instanceof Swiper && (e = s[a].rtl && "horizontal" === s[a].params.direction ? -h.translate : h.translate, n = (s[a].maxTranslate() - s[a].minTranslate()) / (h.maxTranslate() - h.minTranslate()), i = (e - h.minTranslate()) * n + s[a].minTranslate(), h.params.controlInverse && (i = s[a].maxTranslate() - i), s[a].updateProgress(i), s[a].setWrapperTranslate(i, !1, h), s[a].updateActiveIndex());
                            else s instanceof Swiper && t !== s && (e = s.rtl && "horizontal" === s.params.direction ? -h.translate : h.translate, n = (s.maxTranslate() - s.minTranslate()) / (h.maxTranslate() - h.minTranslate()), i = (e - h.minTranslate()) * n + s.minTranslate(), h.params.controlInverse && (i = s.maxTranslate() - i), s.updateProgress(i), s.setWrapperTranslate(i, !1, h), s.updateActiveIndex())
                        },
                        setTransition: function(e, t) {
                            var n = h.params.control;
                            if (h.isArray(n))
                                for (var i = 0; i < n.length; i++) n[i] !== t && n[i] instanceof Swiper && n[i].setWrapperTransition(e, h);
                            else n instanceof Swiper && t !== n && n.setWrapperTransition(e, h)
                        }
                    }, h.hashnav = {
                        init: function() {
                            if (h.params.hashnav) {
                                h.hashnav.initialized = !0;
                                var e = document.location.hash.replace("#", "");
                                if (e)
                                    for (var t = 0, n = 0, i = h.slides.length; i > n; n++) {
                                        var s = h.slides.eq(n),
                                            a = s.attr("data-hash");
                                        if (a === e && !s.hasClass(h.params.slideDuplicateClass)) {
                                            var r = s.index();
                                            h.slideTo(r, t, h.params.runCallbacksOnInit, !0)
                                        }
                                    }
                            }
                        },
                        setHash: function() {
                            h.hashnav.initialized && h.params.hashnav && (document.location.hash = h.slides.eq(h.activeIndex).attr("data-hash") || "")
                        }
                    }, h.disableKeyboardControl = function() {
                        m(document).off("keydown", r)
                    }, h.enableKeyboardControl = function() {
                        m(document).on("keydown", r)
                    }, h._wheelEvent = !1, h._lastWheelScrollTime = (new Date).getTime(), h.params.mousewheelControl) {
                    if (void 0 !== document.onmousewheel && (h._wheelEvent = "mousewheel"), !h._wheelEvent) try {
                        new WheelEvent("wheel"), h._wheelEvent = "wheel"
                    } catch (E) {}
                    h._wheelEvent || (h._wheelEvent = "DOMMouseScroll")
                }
                h.disableMousewheelControl = function() {
                    return h._wheelEvent ? (h.container.off(h._wheelEvent, o), !0) : !1
                }, h.enableMousewheelControl = function() {
                    return h._wheelEvent ? (h.container.on(h._wheelEvent, o), !0) : !1
                }, h.parallax = {
                    setTranslate: function() {
                        h.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            l(this, h.progress)
                        }), h.slides.each(function() {
                            var e = m(this);
                            e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                var t = Math.min(Math.max(e[0].progress, -1), 1);
                                l(this, t)
                            })
                        })
                    },
                    setTransition: function(e) {
                        "undefined" == typeof e && (e = h.params.speed), h.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            var t = m(this),
                                n = parseInt(t.attr("data-swiper-parallax-duration"), 10) || e;
                            0 === e && (n = 0), t.transition(n)
                        })
                    }
                }, h._plugins = [];
                for (var N in h.plugins) {
                    var A = h.plugins[N](h, h.params[N]);
                    A && h._plugins.push(A)
                }
                return h.callPlugins = function(e) {
                    for (var t = 0; t < h._plugins.length; t++) e in h._plugins[t] && h._plugins[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                }, h.emitterEventListeners = {}, h.emit = function(e) {
                    h.params[e] && h.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                    var t;
                    if (h.emitterEventListeners[e])
                        for (t = 0; t < h.emitterEventListeners[e].length; t++) h.emitterEventListeners[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                    h.callPlugins && h.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                }, h.on = function(e, t) {
                    return e = c(e), h.emitterEventListeners[e] || (h.emitterEventListeners[e] = []), h.emitterEventListeners[e].push(t), h
                }, h.off = function(e, t) {
                    var n;
                    if (e = c(e), "undefined" == typeof t) return h.emitterEventListeners[e] = [], h;
                    if (h.emitterEventListeners[e] && 0 !== h.emitterEventListeners[e].length) {
                        for (n = 0; n < h.emitterEventListeners[e].length; n++) h.emitterEventListeners[e][n] === t && h.emitterEventListeners[e].splice(n, 1);
                        return h
                    }
                }, h.once = function(e, t) {
                    e = c(e);
                    var n = function() {
                        t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), h.off(e, n)
                    };
                    return h.on(e, n), h
                }, h.a11y = {
                    makeFocusable: function(e) {
                        return e[0].tabIndex = "0", e
                    },
                    addRole: function(e, t) {
                        return e.attr("role", t), e
                    },
                    addLabel: function(e, t) {
                        return e.attr("aria-label", t), e
                    },
                    disable: function(e) {
                        return e.attr("aria-disabled", !0), e
                    },
                    enable: function(e) {
                        return e.attr("aria-disabled", !1), e
                    },
                    onEnterKey: function(e) {
                        13 === e.keyCode && (m(e.target).is(h.params.nextButton) ? (h.onClickNext(e), h.a11y.notify(h.isEnd ? h.params.lastSlideMsg : h.params.nextSlideMsg)) : m(e.target).is(h.params.prevButton) && (h.onClickPrev(e), h.a11y.notify(h.isBeginning ? h.params.firstSlideMsg : h.params.prevSlideMsg)))
                    },
                    liveRegion: m('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
                    notify: function(e) {
                        var t = h.a11y.liveRegion;
                        0 !== t.length && (t.html(""), t.html(e))
                    },
                    init: function() {
                        if (h.params.nextButton) {
                            var e = m(h.params.nextButton);
                            h.a11y.makeFocusable(e), h.a11y.addRole(e, "button"), h.a11y.addLabel(e, h.params.nextSlideMsg)
                        }
                        if (h.params.prevButton) {
                            var t = m(h.params.prevButton);
                            h.a11y.makeFocusable(t), h.a11y.addRole(t, "button"), h.a11y.addLabel(t, h.params.prevSlideMsg)
                        }
                        m(h.container).append(h.a11y.liveRegion)
                    },
                    destroy: function() {
                        h.a11y.liveRegion && h.a11y.liveRegion.length > 0 && h.a11y.liveRegion.remove()
                    }
                }, h.init = function() {
                    h.params.loop && h.createLoop(), h.updateContainerSize(), h.updateSlidesSize(), h.updatePagination(), h.params.scrollbar && h.scrollbar && h.scrollbar.set(), "slide" !== h.params.effect && h.effects[h.params.effect] && (h.params.loop || h.updateProgress(), h.effects[h.params.effect].setTranslate()), h.params.loop ? h.slideTo(h.params.initialSlide + h.loopedSlides, 0, h.params.runCallbacksOnInit) : (h.slideTo(h.params.initialSlide, 0, h.params.runCallbacksOnInit), 0 === h.params.initialSlide && (h.parallax && h.params.parallax && h.parallax.setTranslate(), h.lazy && h.params.lazyLoading && h.lazy.load())), h.attachEvents(), h.params.observer && h.support.observer && h.initObservers(), h.params.preloadImages && !h.params.lazyLoading && h.preloadImages(),
                        h.params.autoplay && h.startAutoplay(), h.params.keyboardControl && h.enableKeyboardControl && h.enableKeyboardControl(), h.params.mousewheelControl && h.enableMousewheelControl && h.enableMousewheelControl(), h.params.hashnav && h.hashnav && h.hashnav.init(), h.params.a11y && h.a11y && h.a11y.init(), h.emit("onInit", h)
                }, h.cleanupStyles = function() {
                    h.container.removeClass(h.classNames.join(" ")).removeAttr("style"), h.wrapper.removeAttr("style"), h.slides && h.slides.length && h.slides.removeClass([h.params.slideVisibleClass, h.params.slideActiveClass, h.params.slideNextClass, h.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), h.paginationContainer && h.paginationContainer.length && h.paginationContainer.removeClass(h.params.paginationHiddenClass), h.bullets && h.bullets.length && h.bullets.removeClass(h.params.bulletActiveClass), h.params.prevButton && m(h.params.prevButton).removeClass(h.params.buttonDisabledClass), h.params.nextButton && m(h.params.nextButton).removeClass(h.params.buttonDisabledClass), h.params.scrollbar && h.scrollbar && (h.scrollbar.track && h.scrollbar.track.length && h.scrollbar.track.removeAttr("style"), h.scrollbar.drag && h.scrollbar.drag.length && h.scrollbar.drag.removeAttr("style"))
                }, h.destroy = function(e, t) {
                    h.detachEvents(), h.stopAutoplay(), h.params.loop && h.destroyLoop(), t && h.cleanupStyles(), h.disconnectObservers(), h.params.keyboardControl && h.disableKeyboardControl && h.disableKeyboardControl(), h.params.mousewheelControl && h.disableMousewheelControl && h.disableMousewheelControl(), h.params.a11y && h.a11y && h.a11y.destroy(), h.emit("onDestroy"), e !== !1 && (h = null)
                }, h.init(), h
            }
        }, Swiper.prototype = {
            isSafari: function() {
                var e = navigator.userAgent.toLowerCase();
                return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
            }(),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
            isArray: function(e) {
                return "[object Array]" === Object.prototype.toString.apply(e)
            },
            browser: {
                ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
                ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1
            },
            device: function() {
                var e = navigator.userAgent,
                    t = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                    n = e.match(/(iPad).*OS\s([\d_]+)/),
                    i = (e.match(/(iPod)(.*OS\s([\d_]+))?/), !n && e.match(/(iPhone\sOS)\s([\d_]+)/));
                return {
                    ios: n || i || n,
                    android: t
                }
            }(),
            support: {
                touch: window.Modernizr && Modernizr.touch === !0 || function() {
                    return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
                }(),
                transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() {
                    var e = document.createElement("div").style;
                    return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
                }(),
                flexbox: function() {
                    for (var e = document.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), n = 0; n < t.length; n++)
                        if (t[n] in e) return !0
                }(),
                observer: function() {
                    return "MutationObserver" in window || "WebkitMutationObserver" in window
                }()
            },
            plugins: {}
        };
        for (var t = ["jQuery", "Zepto", "Dom7"], n = 0; n < t.length; n++) window[t[n]] && e(window[t[n]]);
        var i;
        i = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7, i && ("transitionEnd" in i.fn || (i.fn.transitionEnd = function(e) {
            function t(a) {
                if (a.target === this)
                    for (e.call(this, a), n = 0; n < i.length; n++) s.off(i[n], t)
            }
            var n, i = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                s = this;
            if (e)
                for (n = 0; n < i.length; n++) s.on(i[n], t);
            return this
        }), "transform" in i.fn || (i.fn.transform = function(e) {
            for (var t = 0; t < this.length; t++) {
                var n = this[t].style;
                n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = e
            }
            return this
        }), "transition" in i.fn || (i.fn.transition = function(e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t++) {
                var n = this[t].style;
                n.webkitTransitionDuration = n.MsTransitionDuration = n.msTransitionDuration = n.MozTransitionDuration = n.OTransitionDuration = n.transitionDuration = e
            }
            return this
        }))
    }(), "undefined" != typeof module ? module.exports = Swiper : "function" == typeof define && define.amd && define([], function() {
        "use strict";
        return Swiper
    }),
    function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" != typeof jQuery ? jQuery : window.Zepto)
    }(function(e) {
        "use strict";

        function t(t) {
            var n = t.data;
            t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(n))
        }

        function n(t) {
            var n = t.target,
                i = e(n);
            if (!i.is("[type=submit],[type=image]")) {
                var s = i.closest("[type=submit]");
                if (0 === s.length) return;
                n = s[0]
            }
            var a = this;
            if (a.clk = n, "image" == n.type)
                if (void 0 !== t.offsetX) a.clk_x = t.offsetX, a.clk_y = t.offsetY;
                else if ("function" == typeof e.fn.offset) {
                var r = i.offset();
                a.clk_x = t.pageX - r.left, a.clk_y = t.pageY - r.top
            } else a.clk_x = t.pageX - n.offsetLeft, a.clk_y = t.pageY - n.offsetTop;
            setTimeout(function() {
                a.clk = a.clk_x = a.clk_y = null
            }, 100)
        }

        function i() {
            if (e.fn.ajaxSubmit.debug) {
                var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
                window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
            }
        }
        var s = {};
        s.fileapi = void 0 !== e("<input type='file'/>").get(0).files, s.formdata = void 0 !== window.FormData;
        var a = !!e.fn.prop;
        e.fn.attr2 = function() {
            if (!a) return this.attr.apply(this, arguments);
            var e = this.prop.apply(this, arguments);
            return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments)
        }, e.fn.ajaxSubmit = function(t) {
            function n(n) {
                var i, s, a = e.param(n, t.traditional).split("&"),
                    r = a.length,
                    o = [];
                for (i = 0; r > i; i++) a[i] = a[i].replace(/\+/g, " "), s = a[i].split("="), o.push([decodeURIComponent(s[0]), decodeURIComponent(s[1])]);
                return o
            }

            function r(i) {
                for (var s = new FormData, a = 0; a < i.length; a++) s.append(i[a].name, i[a].value);
                if (t.extraData) {
                    var r = n(t.extraData);
                    for (a = 0; a < r.length; a++) r[a] && s.append(r[a][0], r[a][1])
                }
                t.data = null;
                var o = e.extend(!0, {}, e.ajaxSettings, t, {
                    contentType: !1,
                    processData: !1,
                    cache: !1,
                    type: l || "POST"
                });
                t.uploadProgress && (o.xhr = function() {
                    var n = e.ajaxSettings.xhr();
                    return n.upload && n.upload.addEventListener("progress", function(e) {
                        var n = 0,
                            i = e.loaded || e.position,
                            s = e.total;
                        e.lengthComputable && (n = Math.ceil(i / s * 100)), t.uploadProgress(e, i, s, n)
                    }, !1), n
                }), o.data = null;
                var c = o.beforeSend;
                return o.beforeSend = function(e, n) {
                    t.formData ? n.data = t.formData : n.data = s, c && c.call(this, e, n)
                }, e.ajax(o)
            }

            function o(n) {
                function s(e) {
                    var t = null;
                    try {
                        e.contentWindow && (t = e.contentWindow.document)
                    } catch (n) {
                        i("cannot get iframe.contentWindow document: " + n)
                    }
                    if (t) return t;
                    try {
                        t = e.contentDocument ? e.contentDocument : e.document
                    } catch (n) {
                        i("cannot get iframe.contentDocument: " + n), t = e.document
                    }
                    return t
                }

                function r() {
                    function t() {
                        try {
                            var e = s(g).readyState;
                            i("state = " + e), e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50)
                        } catch (n) {
                            i("Server abort: ", n, " (", n.name, ")"), o($), x && clearTimeout(x), x = void 0
                        }
                    }
                    var n = p.attr2("target"),
                        a = p.attr2("action"),
                        r = "multipart/form-data",
                        c = p.attr("enctype") || p.attr("encoding") || r;
                    C.setAttribute("target", h), l && !/post/i.test(l) || C.setAttribute("method", "POST"), a != u.url && C.setAttribute("action", u.url), u.skipEncodingOverride || l && !/post/i.test(l) || p.attr({
                        encoding: "multipart/form-data",
                        enctype: "multipart/form-data"
                    }), u.timeout && (x = setTimeout(function() {
                        _ = !0, o(T)
                    }, u.timeout));
                    var d = [];
                    try {
                        if (u.extraData)
                            for (var f in u.extraData) u.extraData.hasOwnProperty(f) && (e.isPlainObject(u.extraData[f]) && u.extraData[f].hasOwnProperty("name") && u.extraData[f].hasOwnProperty("value") ? d.push(e('<input type="hidden" name="' + u.extraData[f].name + '">').val(u.extraData[f].value).appendTo(C)[0]) : d.push(e('<input type="hidden" name="' + f + '">').val(u.extraData[f]).appendTo(C)[0]));
                        u.iframeTarget || v.appendTo("body"), g.attachEvent ? g.attachEvent("onload", o) : g.addEventListener("load", o, !1), setTimeout(t, 15);
                        try {
                            C.submit()
                        } catch (m) {
                            var b = document.createElement("form").submit;
                            b.apply(C)
                        }
                    } finally {
                        C.setAttribute("action", a), C.setAttribute("enctype", c), n ? C.setAttribute("target", n) : p.removeAttr("target"), e(d).remove()
                    }
                }

                function o(t) {
                    if (!b.aborted && !E) {
                        if (M = s(g), M || (i("cannot access response document"), t = $), t === T && b) return b.abort("timeout"), void S.reject(b, "timeout");
                        if (t == $ && b) return b.abort("server abort"), void S.reject(b, "error", "server abort");
                        if (M && M.location.href != u.iframeSrc || _) {
                            g.detachEvent ? g.detachEvent("onload", o) : g.removeEventListener("load", o, !1);
                            var n, a = "success";
                            try {
                                if (_) throw "timeout";
                                var r = "xml" == u.dataType || M.XMLDocument || e.isXMLDoc(M);
                                if (i("isXml=" + r), !r && window.opera && (null === M.body || !M.body.innerHTML) && --N) return i("requeing onLoad callback, DOM not available"), void setTimeout(o, 250);
                                var l = M.body ? M.body : M.documentElement;
                                b.responseText = l ? l.innerHTML : null, b.responseXML = M.XMLDocument ? M.XMLDocument : M, r && (u.dataType = "xml"), b.getResponseHeader = function(e) {
                                    var t = {
                                        "content-type": u.dataType
                                    };
                                    return t[e.toLowerCase()]
                                }, l && (b.status = Number(l.getAttribute("status")) || b.status, b.statusText = l.getAttribute("statusText") || b.statusText);
                                var c = (u.dataType || "").toLowerCase(),
                                    d = /(json|script|text)/.test(c);
                                if (d || u.textarea) {
                                    var p = M.getElementsByTagName("textarea")[0];
                                    if (p) b.responseText = p.value, b.status = Number(p.getAttribute("status")) || b.status, b.statusText = p.getAttribute("statusText") || b.statusText;
                                    else if (d) {
                                        var h = M.getElementsByTagName("pre")[0],
                                            m = M.getElementsByTagName("body")[0];
                                        h ? b.responseText = h.textContent ? h.textContent : h.innerText : m && (b.responseText = m.textContent ? m.textContent : m.innerText)
                                    }
                                } else "xml" == c && !b.responseXML && b.responseText && (b.responseXML = A(b.responseText));
                                try {
                                    I = j(b, c, u)
                                } catch (y) {
                                    a = "parsererror", b.error = n = y || a
                                }
                            } catch (y) {
                                i("error caught: ", y), a = "error", b.error = n = y || a
                            }
                            b.aborted && (i("upload aborted"), a = null), b.status && (a = b.status >= 200 && b.status < 300 || 304 === b.status ? "success" : "error"), "success" === a ? (u.success && u.success.call(u.context, I, "success", b), S.resolve(b.responseText, "success", b), f && e.event.trigger("ajaxSuccess", [b, u])) : a && (void 0 === n && (n = b.statusText), u.error && u.error.call(u.context, b, a, n), S.reject(b, "error", n), f && e.event.trigger("ajaxError", [b, u, n])), f && e.event.trigger("ajaxComplete", [b, u]), f && !--e.active && e.event.trigger("ajaxStop"), u.complete && u.complete.call(u.context, b, a), E = !0, u.timeout && clearTimeout(x), setTimeout(function() {
                                u.iframeTarget ? v.attr("src", u.iframeSrc) : v.remove(), b.responseXML = null
                            }, 100)
                        }
                    }
                }
                var c, d, u, f, h, v, g, b, y, w, _, x, C = p[0],
                    S = e.Deferred();
                if (S.abort = function(e) {
                        b.abort(e)
                    }, n)
                    for (d = 0; d < m.length; d++) c = e(m[d]), a ? c.prop("disabled", !1) : c.removeAttr("disabled");
                if (u = e.extend(!0, {}, e.ajaxSettings, t), u.context = u.context || u, h = "jqFormIO" + (new Date).getTime(), u.iframeTarget ? (v = e(u.iframeTarget), w = v.attr2("name"), w ? h = w : v.attr2("name", h)) : (v = e('<iframe name="' + h + '" src="' + u.iframeSrc + '" />'), v.css({
                        position: "absolute",
                        top: "-1000px",
                        left: "-1000px"
                    })), g = v[0], b = {
                        aborted: 0,
                        responseText: null,
                        responseXML: null,
                        status: 0,
                        statusText: "n/a",
                        getAllResponseHeaders: function() {},
                        getResponseHeader: function() {},
                        setRequestHeader: function() {},
                        abort: function(t) {
                            var n = "timeout" === t ? "timeout" : "aborted";
                            i("aborting upload... " + n), this.aborted = 1;
                            try {
                                g.contentWindow.document.execCommand && g.contentWindow.document.execCommand("Stop")
                            } catch (s) {}
                            v.attr("src", u.iframeSrc), b.error = n, u.error && u.error.call(u.context, b, n, t), f && e.event.trigger("ajaxError", [b, u, n]), u.complete && u.complete.call(u.context, b, n)
                        }
                    }, f = u.global, f && 0 === e.active++ && e.event.trigger("ajaxStart"), f && e.event.trigger("ajaxSend", [b, u]), u.beforeSend && u.beforeSend.call(u.context, b, u) === !1) return u.global && e.active--, S.reject(), S;
                if (b.aborted) return S.reject(), S;
                y = C.clk, y && (w = y.name, w && !y.disabled && (u.extraData = u.extraData || {}, u.extraData[w] = y.value, "image" == y.type && (u.extraData[w + ".x"] = C.clk_x, u.extraData[w + ".y"] = C.clk_y)));
                var T = 1,
                    $ = 2,
                    P = e("meta[name=csrf-token]").attr("content"),
                    k = e("meta[name=csrf-param]").attr("content");
                k && P && (u.extraData = u.extraData || {}, u.extraData[k] = P), u.forceSync ? r() : setTimeout(r, 10);
                var I, M, E, N = 50,
                    A = e.parseXML || function(e, t) {
                        return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null
                    },
                    O = e.parseJSON || function(e) {
                        return window.eval("(" + e + ")")
                    },
                    j = function(t, n, i) {
                        var s = t.getResponseHeader("content-type") || "",
                            a = "xml" === n || !n && s.indexOf("xml") >= 0,
                            r = a ? t.responseXML : t.responseText;
                        return a && "parsererror" === r.documentElement.nodeName && e.error && e.error("parsererror"), i && i.dataFilter && (r = i.dataFilter(r, n)), "string" == typeof r && ("json" === n || !n && s.indexOf("json") >= 0 ? r = O(r) : ("script" === n || !n && s.indexOf("javascript") >= 0) && e.globalEval(r)), r
                    };
                return S
            }
            if (!this.length) return i("ajaxSubmit: skipping submit process - no element selected"), this;
            var l, c, d, p = this;
            "function" == typeof t ? t = {
                success: t
            } : void 0 === t && (t = {}), l = t.type || this.attr2("method"), c = t.url || this.attr2("action"), d = "string" == typeof c ? e.trim(c) : "", d = d || window.location.href || "", d && (d = (d.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, {
                url: d,
                success: e.ajaxSettings.success,
                type: l || e.ajaxSettings.type,
                iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
            }, t);
            var u = {};
            if (this.trigger("form-pre-serialize", [this, t, u]), u.veto) return i("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
            if (t.beforeSerialize && t.beforeSerialize(this, t) === !1) return i("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
            var f = t.traditional;
            void 0 === f && (f = e.ajaxSettings.traditional);
            var h, m = [],
                v = this.formToArray(t.semantic, m);
            if (t.data && (t.extraData = t.data, h = e.param(t.data, f)), t.beforeSubmit && t.beforeSubmit(v, this, t) === !1) return i("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
            if (this.trigger("form-submit-validate", [v, this, t, u]), u.veto) return i("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
            var g = e.param(v, f);
            h && (g = g ? g + "&" + h : h), "GET" == t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + g, t.data = null) : t.data = g;
            var b = [];
            if (t.resetForm && b.push(function() {
                    p.resetForm()
                }), t.clearForm && b.push(function() {
                    p.clearForm(t.includeHidden)
                }), !t.dataType && t.target) {
                var y = t.success || function() {};
                b.push(function(n) {
                    var i = t.replaceTarget ? "replaceWith" : "html";
                    e(t.target)[i](n).each(y, arguments)
                })
            } else t.success && b.push(t.success);
            if (t.success = function(e, n, i) {
                    for (var s = t.context || this, a = 0, r = b.length; r > a; a++) b[a].apply(s, [e, n, i || p, p])
                }, t.error) {
                var w = t.error;
                t.error = function(e, n, i) {
                    var s = t.context || this;
                    w.apply(s, [e, n, i, p])
                }
            }
            if (t.complete) {
                var _ = t.complete;
                t.complete = function(e, n) {
                    var i = t.context || this;
                    _.apply(i, [e, n, p])
                }
            }
            var x = e("input[type=file]:enabled", this).filter(function() {
                    return "" !== e(this).val()
                }),
                C = x.length > 0,
                S = "multipart/form-data",
                T = p.attr("enctype") == S || p.attr("encoding") == S,
                $ = s.fileapi && s.formdata;
            i("fileAPI :" + $);
            var P, k = (C || T) && !$;
            t.iframe !== !1 && (t.iframe || k) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function() {
                P = o(v)
            }) : P = o(v) : P = (C || T) && $ ? r(v) : e.ajax(t), p.removeData("jqxhr").data("jqxhr", P);
            for (var I = 0; I < m.length; I++) m[I] = null;
            return this.trigger("form-submit-notify", [this, t]), this
        }, e.fn.ajaxForm = function(s) {
            if (s = s || {}, s.delegation = s.delegation && e.isFunction(e.fn.on), !s.delegation && 0 === this.length) {
                var a = {
                    s: this.selector,
                    c: this.context
                };
                return !e.isReady && a.s ? (i("DOM not ready, queuing ajaxForm"), e(function() {
                    e(a.s, a.c).ajaxForm(s)
                }), this) : (i("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this)
            }
            return s.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, n).on("submit.form-plugin", this.selector, s, t).on("click.form-plugin", this.selector, s, n), this) : this.ajaxFormUnbind().bind("submit.form-plugin", s, t).bind("click.form-plugin", s, n)
        }, e.fn.ajaxFormUnbind = function() {
            return this.unbind("submit.form-plugin click.form-plugin")
        }, e.fn.formToArray = function(t, n) {
            var i = [];
            if (0 === this.length) return i;
            var a, r = this[0],
                o = this.attr("id"),
                l = t ? r.getElementsByTagName("*") : r.elements;
            if (l && !/MSIE [678]/.test(navigator.userAgent) && (l = e(l).get()), o && (a = e(':input[form="' + o + '"]').get(), a.length && (l = (l || []).concat(a))), !l || !l.length) return i;
            var c, d, p, u, f, h, m;
            for (c = 0, h = l.length; h > c; c++)
                if (f = l[c], p = f.name, p && !f.disabled)
                    if (t && r.clk && "image" == f.type) r.clk == f && (i.push({
                        name: p,
                        value: e(f).val(),
                        type: f.type
                    }), i.push({
                        name: p + ".x",
                        value: r.clk_x
                    }, {
                        name: p + ".y",
                        value: r.clk_y
                    }));
                    else if (u = e.fieldValue(f, !0), u && u.constructor == Array)
                for (n && n.push(f), d = 0, m = u.length; m > d; d++) i.push({
                    name: p,
                    value: u[d]
                });
            else if (s.fileapi && "file" == f.type) {
                n && n.push(f);
                var v = f.files;
                if (v.length)
                    for (d = 0; d < v.length; d++) i.push({
                        name: p,
                        value: v[d],
                        type: f.type
                    });
                else i.push({
                    name: p,
                    value: "",
                    type: f.type
                })
            } else null !== u && "undefined" != typeof u && (n && n.push(f), i.push({
                name: p,
                value: u,
                type: f.type,
                required: f.required
            }));
            if (!t && r.clk) {
                var g = e(r.clk),
                    b = g[0];
                p = b.name, p && !b.disabled && "image" == b.type && (i.push({
                    name: p,
                    value: g.val()
                }), i.push({
                    name: p + ".x",
                    value: r.clk_x
                }, {
                    name: p + ".y",
                    value: r.clk_y
                }))
            }
            return i
        }, e.fn.formSerialize = function(t) {
            return e.param(this.formToArray(t))
        }, e.fn.fieldSerialize = function(t) {
            var n = [];
            return this.each(function() {
                var i = this.name;
                if (i) {
                    var s = e.fieldValue(this, t);
                    if (s && s.constructor == Array)
                        for (var a = 0, r = s.length; r > a; a++) n.push({
                            name: i,
                            value: s[a]
                        });
                    else null !== s && "undefined" != typeof s && n.push({
                        name: this.name,
                        value: s
                    })
                }
            }), e.param(n)
        }, e.fn.fieldValue = function(t) {
            for (var n = [], i = 0, s = this.length; s > i; i++) {
                var a = this[i],
                    r = e.fieldValue(a, t);
                null === r || "undefined" == typeof r || r.constructor == Array && !r.length || (r.constructor == Array ? e.merge(n, r) : n.push(r))
            }
            return n
        }, e.fieldValue = function(t, n) {
            var i = t.name,
                s = t.type,
                a = t.tagName.toLowerCase();
            if (void 0 === n && (n = !0), n && (!i || t.disabled || "reset" == s || "button" == s || ("checkbox" == s || "radio" == s) && !t.checked || ("submit" == s || "image" == s) && t.form && t.form.clk != t || "select" == a && -1 == t.selectedIndex)) return null;
            if ("select" == a) {
                var r = t.selectedIndex;
                if (0 > r) return null;
                for (var o = [], l = t.options, c = "select-one" == s, d = c ? r + 1 : l.length, p = c ? r : 0; d > p; p++) {
                    var u = l[p];
                    if (u.selected) {
                        var f = u.value;
                        if (f || (f = u.attributes && u.attributes.value && !u.attributes.value.specified ? u.text : u.value), c) return f;
                        o.push(f)
                    }
                }
                return o
            }
            return e(t).val()
        }, e.fn.clearForm = function(t) {
            return this.each(function() {
                e("input,select,textarea", this).clearFields(t)
            })
        }, e.fn.clearFields = e.fn.clearInputs = function(t) {
            var n = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
            return this.each(function() {
                var i = this.type,
                    s = this.tagName.toLowerCase();
                n.test(i) || "textarea" == s ? this.value = "" : "checkbox" == i || "radio" == i ? this.checked = !1 : "select" == s ? this.selectedIndex = -1 : "file" == i ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (t === !0 && /hidden/.test(i) || "string" == typeof t && e(this).is(t)) && (this.value = "")
            })
        }, e.fn.resetForm = function() {
            return this.each(function() {
                ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
            })
        }, e.fn.enable = function(e) {
            return void 0 === e && (e = !0), this.each(function() {
                this.disabled = !e
            })
        }, e.fn.selected = function(t) {
            return void 0 === t && (t = !0), this.each(function() {
                var n = this.type;
                if ("checkbox" == n || "radio" == n) this.checked = t;
                else if ("option" == this.tagName.toLowerCase()) {
                    var i = e(this).parent("select");
                    t && i[0] && "select-one" == i[0].type && i.find("option").selected(!1), this.selected = t
                }
            })
        }, e.fn.ajaxSubmit.debug = !1
    }), ! function(e) {
        function t() {
            e[n].glbl || (o = {
                $wndw: e(window),
                $docu: e(document),
                $html: e("html"),
                $body: e("body")
            }, s = {}, a = {}, r = {}, e.each([s, a, r], function(e, t) {
                t.add = function(e) {
                    e = e.split(" ");
                    for (var n = 0, i = e.length; i > n; n++) t[e[n]] = t.mm(e[n])
                }
            }), s.mm = function(e) {
                return "mm-" + e
            }, s.add("wrapper menu panels panel nopanel current highest opened subopened navbar hasnavbar title btn prev next listview nolistview inset vertical selected divider spacer hidden fullsubopen"), s.umm = function(e) {
                return "mm-" == e.slice(0, 3) && (e = e.slice(3)), e
            }, a.mm = function(e) {
                return "mm-" + e
            }, a.add("parent child"), r.mm = function(e) {
                return e + ".mm"
            }, r.add("transitionend webkitTransitionEnd click scroll keydown mousedown mouseup touchstart touchmove touchend orientationchange"), e[n]._c = s, e[n]._d = a, e[n]._e = r, e[n].glbl = o)
        }
        var n = "mmenu",
            i = "5.7.4";
        if (!(e[n] && e[n].version > i)) {
            e[n] = function(e, t, n) {
                this.$menu = e, this._api = ["bind", "initPanels", "update", "setSelected", "getInstance", "openPanel", "closePanel", "closeAllPanels"], this.opts = t, this.conf = n, this.vars = {}, this.cbck = {}, "function" == typeof this.___deprecated && this.___deprecated(), this._initMenu(), this._initAnchors();
                var i = this.$pnls.children();
                return this._initAddons(), this.initPanels(i), "function" == typeof this.___debug && this.___debug(), this
            }, e[n].version = i, e[n].addons = {}, e[n].uniqueId = 0, e[n].defaults = {
                extensions: [],
                initMenu: function() {},
                initPanels: function() {},
                navbar: {
                    add: !0,
                    title: "Menu",
                    titleLink: "panel"
                },
                onClick: {
                    setSelected: !0
                },
                slidingSubmenus: !0
            }, e[n].configuration = {
                classNames: {
                    divider: "Divider",
                    inset: "Inset",
                    panel: "Panel",
                    selected: "Selected",
                    spacer: "Spacer",
                    vertical: "Vertical"
                },
                clone: !1,
                openingInterval: 25,
                panelNodetype: "ul, ol, div",
                transitionDuration: 400
            }, e[n].prototype = {
                init: function(e) {
                    this.initPanels(e)
                },
                initPanels: function(e) {
                    e = e.not("." + s.nopanel), e = this._initPanels(e), this.opts.initPanels.call(this, e), this.trigger("initPanels", e), this.trigger("update")
                },
                update: function() {
                    this.trigger("update")
                },
                setSelected: function(e) {
                    this.$menu.find("." + s.listview).children().removeClass(s.selected), e.addClass(s.selected), this.trigger("setSelected", e)
                },
                openPanel: function(t) {
                    var i = t.parent(),
                        a = this;
                    if (i.hasClass(s.vertical)) {
                        var r = i.parents("." + s.subopened);
                        if (r.length) return void this.openPanel(r.first());
                        i.addClass(s.opened), this.trigger("openPanel", t), this.trigger("openingPanel", t), this.trigger("openedPanel", t)
                    } else {
                        if (t.hasClass(s.current)) return;
                        var o = this.$pnls.children("." + s.panel),
                            l = o.filter("." + s.current);
                        o.removeClass(s.highest).removeClass(s.current).not(t).not(l).not("." + s.vertical).addClass(s.hidden), e[n].support.csstransitions || l.addClass(s.hidden), t.hasClass(s.opened) ? t.nextAll("." + s.opened).addClass(s.highest).removeClass(s.opened).removeClass(s.subopened) : (t.addClass(s.highest), l.addClass(s.subopened)), t.removeClass(s.hidden).addClass(s.current), a.trigger("openPanel", t), setTimeout(function() {
                            t.removeClass(s.subopened).addClass(s.opened), a.trigger("openingPanel", t), a.__transitionend(t, function() {
                                a.trigger("openedPanel", t)
                            }, a.conf.transitionDuration)
                        }, this.conf.openingInterval)
                    }
                },
                closePanel: function(e) {
                    var t = e.parent();
                    t.hasClass(s.vertical) && (t.removeClass(s.opened), this.trigger("closePanel", e), this.trigger("closingPanel", e), this.trigger("closedPanel", e))
                },
                closeAllPanels: function() {
                    this.$menu.find("." + s.listview).children().removeClass(s.selected).filter("." + s.vertical).removeClass(s.opened);
                    var e = this.$pnls.children("." + s.panel),
                        t = e.first();
                    this.$pnls.children("." + s.panel).not(t).removeClass(s.subopened).removeClass(s.opened).removeClass(s.current).removeClass(s.highest).addClass(s.hidden), this.openPanel(t)
                },
                togglePanel: function(e) {
                    var t = e.parent();
                    t.hasClass(s.vertical) && this[t.hasClass(s.opened) ? "closePanel" : "openPanel"](e)
                },
                getInstance: function() {
                    return this
                },
                bind: function(e, t) {
                    e = "init" == e ? "initPanels" : e, this.cbck[e] = this.cbck[e] || [], this.cbck[e].push(t)
                },
                trigger: function() {
                    var e = this,
                        t = Array.prototype.slice.call(arguments),
                        n = t.shift();
                    if (n = "init" == n ? "initPanels" : n, this.cbck[n])
                        for (var i = 0, s = this.cbck[n].length; s > i; i++) this.cbck[n][i].apply(e, t)
                },
                _initMenu: function() {
                    this.conf.clone && (this.$orig = this.$menu, this.$menu = this.$orig.clone(!0), this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function() {
                        e(this).attr("id", s.mm(e(this).attr("id")))
                    })), this.opts.initMenu.call(this, this.$menu, this.$orig), this.$menu.attr("id", this.$menu.attr("id") || this.__getUniqueId()), this.$pnls = e('<div class="' + s.panels + '" />').append(this.$menu.children(this.conf.panelNodetype)).prependTo(this.$menu), this.$menu.parent().addClass(s.wrapper);
                    var t = [s.menu];
                    this.opts.slidingSubmenus || t.push(s.vertical), this.opts.extensions = this.opts.extensions.length ? "mm-" + this.opts.extensions.join(" mm-") : "", this.opts.extensions && t.push(this.opts.extensions), this.$menu.addClass(t.join(" "))
                },
                _initPanels: function(t) {
                    var n = this,
                        i = this.__findAddBack(t, "ul, ol");
                    this.__refactorClass(i, this.conf.classNames.inset, "inset").addClass(s.nolistview + " " + s.nopanel), i.not("." + s.nolistview).addClass(s.listview);
                    var r = this.__findAddBack(t, "." + s.listview).children();
                    this.__refactorClass(r, this.conf.classNames.selected, "selected"), this.__refactorClass(r, this.conf.classNames.divider, "divider"), this.__refactorClass(r, this.conf.classNames.spacer, "spacer"), this.__refactorClass(this.__findAddBack(t, "." + this.conf.classNames.panel), this.conf.classNames.panel, "panel");
                    var o = e(),
                        l = t.add(t.find("." + s.panel)).add(this.__findAddBack(t, "." + s.listview).children().children(this.conf.panelNodetype)).not("." + s.nopanel);
                    this.__refactorClass(l, this.conf.classNames.vertical, "vertical"), this.opts.slidingSubmenus || l.addClass(s.vertical), l.each(function() {
                        var t = e(this),
                            i = t;
                        t.is("ul, ol") ? (t.wrap('<div class="' + s.panel + '" />'), i = t.parent()) : i.addClass(s.panel);
                        var a = t.attr("id");
                        t.removeAttr("id"), i.attr("id", a || n.__getUniqueId()), t.hasClass(s.vertical) && (t.removeClass(n.conf.classNames.vertical), i.add(i.parent()).addClass(s.vertical)), o = o.add(i)
                    });
                    var c = e("." + s.panel, this.$menu);
                    o.each(function() {
                        var t, i, r = e(this),
                            o = r.parent(),
                            l = o.children("a, span").first();
                        if (o.is("." + s.panels) || (o.data(a.child, r), r.data(a.parent, o)), o.children("." + s.next).length || o.parent().is("." + s.listview) && (t = r.attr("id"), i = e('<a class="' + s.next + '" href="#' + t + '" data-target="#' + t + '" />').insertBefore(l), l.is("span") && i.addClass(s.fullsubopen)), !r.children("." + s.navbar).length && !o.hasClass(s.vertical)) {
                            o.parent().is("." + s.listview) ? o = o.closest("." + s.panel) : (l = o.closest("." + s.panel).find('a[href="#' + r.attr("id") + '"]').first(), o = l.closest("." + s.panel));
                            var c = !1,
                                d = e('<div class="' + s.navbar + '" />');
                            if (n.opts.navbar.add && r.addClass(s.hasnavbar), o.length) {
                                switch (t = o.attr("id"), n.opts.navbar.titleLink) {
                                    case "anchor":
                                        c = l.attr("href");
                                        break;
                                    case "panel":
                                    case "parent":
                                        c = "#" + t;
                                        break;
                                    default:
                                        c = !1
                                }
                                d.append('<a class="' + s.btn + " " + s.prev + '" href="#' + t + '" data-target="#' + t + '" />').append(e('<a class="' + s.title + '"' + (c ? ' href="' + c + '"' : "") + " />").text(l.text())).prependTo(r)
                            } else n.opts.navbar.title && d.append('<a class="' + s.title + '">' + n.opts.navbar.title + "</a>").prependTo(r)
                        }
                    });
                    var d = this.__findAddBack(t, "." + s.listview).children("." + s.selected).removeClass(s.selected).last().addClass(s.selected);
                    d.add(d.parentsUntil("." + s.menu, "li")).filter("." + s.vertical).addClass(s.opened).end().each(function() {
                        e(this).parentsUntil("." + s.menu, "." + s.panel).not("." + s.vertical).first().addClass(s.opened).parentsUntil("." + s.menu, "." + s.panel).not("." + s.vertical).first().addClass(s.opened).addClass(s.subopened)
                    }), d.children("." + s.panel).not("." + s.vertical).addClass(s.opened).parentsUntil("." + s.menu, "." + s.panel).not("." + s.vertical).first().addClass(s.opened).addClass(s.subopened);
                    var p = c.filter("." + s.opened);
                    return p.length || (p = o.first()), p.addClass(s.opened).last().addClass(s.current), o.not("." + s.vertical).not(p.last()).addClass(s.hidden).end().filter(function() {
                        return !e(this).parent().hasClass(s.panels)
                    }).appendTo(this.$pnls), o
                },
                _initAnchors: function() {
                    var t = this;
                    o.$body.on(r.click + "-oncanvas", "a[href]", function(i) {
                        var a = e(this),
                            r = !1,
                            o = t.$menu.find(a).length;
                        for (var l in e[n].addons)
                            if (e[n].addons[l].clickAnchor.call(t, a, o)) {
                                r = !0;
                                break
                            } var c = a.attr("href");
                        if (!r && o && c.length > 1 && "#" == c.slice(0, 1)) try {
                            var d = e(c, t.$menu);
                            d.is("." + s.panel) && (r = !0, t[a.parent().hasClass(s.vertical) ? "togglePanel" : "openPanel"](d))
                        } catch (p) {}
                        if (r && i.preventDefault(), !r && o && a.is("." + s.listview + " > li > a") && !a.is('[rel="external"]') && !a.is('[target="_blank"]')) {
                            t.__valueOrFn(t.opts.onClick.setSelected, a) && t.setSelected(e(i.target).parent());
                            var u = t.__valueOrFn(t.opts.onClick.preventDefault, a, "#" == c.slice(0, 1));
                            u && i.preventDefault(), t.__valueOrFn(t.opts.onClick.close, a, u) && t.close()
                        }
                    })
                },
                _initAddons: function() {
                    var t;
                    for (t in e[n].addons) e[n].addons[t].add.call(this), e[n].addons[t].add = function() {};
                    for (t in e[n].addons) e[n].addons[t].setup.call(this)
                },
                _getOriginalMenuId: function() {
                    var e = this.$menu.attr("id");
                    return e && e.length && this.conf.clone && (e = s.umm(e)), e
                },
                __api: function() {
                    var t = this,
                        n = {};
                    return e.each(this._api, function() {
                        var e = this;
                        n[e] = function() {
                            var i = t[e].apply(t, arguments);
                            return "undefined" == typeof i ? n : i
                        }
                    }), n
                },
                __valueOrFn: function(e, t, n) {
                    return "function" == typeof e ? e.call(t[0]) : "undefined" == typeof e && "undefined" != typeof n ? n : e
                },
                __refactorClass: function(e, t, n) {
                    return e.filter("." + t).removeClass(t).addClass(s[n])
                },
                __findAddBack: function(e, t) {
                    return e.find(t).add(e.filter(t))
                },
                __filterListItems: function(e) {
                    return e.not("." + s.divider).not("." + s.hidden)
                },
                __transitionend: function(t, n, i) {
                    var s = !1,
                        a = function(i) {
                            if ("undefined" != typeof i) {
                                if (!e(i.target).is(t)) return !1;
                                t.unbind(r.transitionend), t.unbind(r.webkitTransitionEnd)
                            }
                            s || n.call(t[0]), s = !0
                        };
                    t.on(r.transitionend, a), t.on(r.webkitTransitionEnd, a), setTimeout(a, 1.1 * i)
                },
                __getUniqueId: function() {
                    return s.mm(e[n].uniqueId++)
                }
            }, e.fn[n] = function(i, s) {
                t(), i = e.extend(!0, {}, e[n].defaults, i), s = e.extend(!0, {}, e[n].configuration, s);
                var a = e();
                return this.each(function() {
                    var t = e(this);
                    if (!t.data(n)) {
                        var r = new e[n](t, i, s);
                        r.$menu.data(n, r.__api()), a = a.add(r.$menu)
                    }
                }), a
            }, e[n].support = {
                touch: "ontouchstart" in window || navigator.msMaxTouchPoints || !1,
                csstransitions: function() {
                    if ("undefined" != typeof Modernizr && "undefined" != typeof Modernizr.csstransitions) return Modernizr.csstransitions;
                    var e = document.body || document.documentElement,
                        t = e.style,
                        n = "transition";
                    if ("string" == typeof t[n]) return !0;
                    var i = ["Moz", "webkit", "Webkit", "Khtml", "O", "ms"];
                    n = n.charAt(0).toUpperCase() + n.substr(1);
                    for (var s = 0; s < i.length; s++)
                        if ("string" == typeof t[i[s] + n]) return !0;
                    return !1
                }(),
                csstransforms: function() {
                    return "undefined" != typeof Modernizr && "undefined" != typeof Modernizr.csstransforms ? Modernizr.csstransforms : !0
                }(),
                csstransforms3d: function() {
                    return "undefined" != typeof Modernizr && "undefined" != typeof Modernizr.csstransforms3d ? Modernizr.csstransforms3d : !0
                }()
            };
            var s, a, r, o
        }
    }(jQuery),
    function(e) {
        var t = "mmenu",
            n = "offCanvas";
        e[t].addons[n] = {
            setup: function() {
                if (this.opts[n]) {
                    var s = this.opts[n],
                        a = this.conf[n];
                    r = e[t].glbl, this._api = e.merge(this._api, ["open", "close", "setPage"]), ("top" == s.position || "bottom" == s.position) && (s.zposition = "front"), "string" != typeof a.pageSelector && (a.pageSelector = "> " + a.pageNodetype), r.$allMenus = (r.$allMenus || e()).add(this.$menu), this.vars.opened = !1;
                    var o = [i.offcanvas];
                    "left" != s.position && o.push(i.mm(s.position)), "back" != s.zposition && o.push(i.mm(s.zposition)), this.$menu.addClass(o.join(" ")).parent().removeClass(i.wrapper), e[t].support.csstransforms || this.$menu.addClass(i["no-csstransforms"]), e[t].support.csstransforms3d || this.$menu.addClass(i["no-csstransforms3d"]), this.setPage(r.$page), this._initBlocker(), this["_initWindow_" + n](), this.$menu[a.menuInjectMethod + "To"](a.menuWrapperSelector);
                    var l = window.location.hash;
                    if (l) {
                        var c = this._getOriginalMenuId();
                        c && c == l.slice(1) && this.open()
                    }
                }
            },
            add: function() {
                i = e[t]._c, s = e[t]._d, a = e[t]._e, i.add("offcanvas slideout blocking modal background opening blocker page no-csstransforms3d"), s.add("style"), a.add("resize")
            },
            clickAnchor: function(e, t) {
                var s = this;
                if (this.opts[n]) {
                    var a = this._getOriginalMenuId();
                    if (a && e.is('[href="#' + a + '"]')) {
                        if (t) return !0;
                        var o = e.closest("." + i.menu);
                        if (o.length) {
                            var l = o.data("mmenu");
                            if (l && l.close) return l.close(), s.__transitionend(o, function() {
                                s.open()
                            }, s.conf.transitionDuration), !0
                        }
                        return this.open(), !0
                    }
                    if (r.$page) return a = r.$page.first().attr("id"), a && e.is('[href="#' + a + '"]') ? (this.close(), !0) : void 0
                }
            }
        }, e[t].defaults[n] = {
            position: "left",
            zposition: "back",
            blockUI: !0,
            moveBackground: !0
        }, e[t].configuration[n] = {
            pageNodetype: "div",
            pageSelector: null,
            noPageSelector: [],
            wrapPageIfNeeded: !0,
            menuWrapperSelector: "body",
            menuInjectMethod: "prepend"
        }, e[t].prototype.open = function() {
            if (!this.vars.opened) {
                var e = this;
                this._openSetup(), setTimeout(function() {
                    e._openFinish()
                }, this.conf.openingInterval), this.trigger("open")
            }
        }, e[t].prototype._openSetup = function() {
            var t = this,
                o = this.opts[n];
            this.closeAllOthers(), r.$page.each(function() {
                e(this).data(s.style, e(this).attr("style") || "");
            }), r.$wndw.trigger(a.resize + "-" + n, [!0]);
            var l = [i.opened];
            o.blockUI && l.push(i.blocking), "modal" == o.blockUI && l.push(i.modal), o.moveBackground && l.push(i.background), "left" != o.position && l.push(i.mm(this.opts[n].position)), "back" != o.zposition && l.push(i.mm(this.opts[n].zposition)), this.opts.extensions && l.push(this.opts.extensions), r.$html.addClass(l.join(" ")), setTimeout(function() {
                t.vars.opened = !0
            }, this.conf.openingInterval), this.$menu.addClass(i.current + " " + i.opened)
        }, e[t].prototype._openFinish = function() {
            var e = this;
            this.__transitionend(r.$page.first(), function() {
                e.trigger("opened")
            }, this.conf.transitionDuration), r.$html.addClass(i.opening), this.trigger("opening")
        }, e[t].prototype.close = function() {
            if (this.vars.opened) {
                var t = this;
                this.__transitionend(r.$page.first(), function() {
                    t.$menu.removeClass(i.current + " " + i.opened);
                    var a = [i.opened, i.blocking, i.modal, i.background, i.mm(t.opts[n].position), i.mm(t.opts[n].zposition)];
                    t.opts.extensions && a.push(t.opts.extensions), r.$html.removeClass(a.join(" ")), r.$page.each(function() {
                        e(this).attr("style", e(this).data(s.style))
                    }), t.vars.opened = !1, t.trigger("closed")
                }, this.conf.transitionDuration), r.$html.removeClass(i.opening), this.trigger("close"), this.trigger("closing")
            }
        }, e[t].prototype.closeAllOthers = function() {
            r.$allMenus.not(this.$menu).each(function() {
                var n = e(this).data(t);
                n && n.close && n.close()
            })
        }, e[t].prototype.setPage = function(t) {
            var s = this,
                a = this.conf[n];
            t && t.length || (t = r.$body.find(a.pageSelector), a.noPageSelector.length && (t = t.not(a.noPageSelector.join(", "))), t.length > 1 && a.wrapPageIfNeeded && (t = t.wrapAll("<" + this.conf[n].pageNodetype + " />").parent())), t.each(function() {
                e(this).attr("id", e(this).attr("id") || s.__getUniqueId())
            }), t.addClass(i.page + " " + i.slideout), r.$page = t, this.trigger("setPage", t)
        }, e[t].prototype["_initWindow_" + n] = function() {
            r.$wndw.off(a.keydown + "-" + n).on(a.keydown + "-" + n, function(e) {
                return r.$html.hasClass(i.opened) && 9 == e.keyCode ? (e.preventDefault(), !1) : void 0
            });
            var e = 0;
            r.$wndw.off(a.resize + "-" + n).on(a.resize + "-" + n, function(t, n) {
                if (1 == r.$page.length && (n || r.$html.hasClass(i.opened))) {
                    var s = r.$wndw.height();
                    (n || s != e) && (e = s, r.$page.css("minHeight", s))
                }
            })
        }, e[t].prototype._initBlocker = function() {
            var t = this;
            this.opts[n].blockUI && (r.$blck || (r.$blck = e('<div id="' + i.blocker + '" class="' + i.slideout + '" />')), r.$blck.appendTo(r.$body).off(a.touchstart + "-" + n + " " + a.touchmove + "-" + n).on(a.touchstart + "-" + n + " " + a.touchmove + "-" + n, function(e) {
                e.preventDefault(), e.stopPropagation(), r.$blck.trigger(a.mousedown + "-" + n)
            }).off(a.mousedown + "-" + n).on(a.mousedown + "-" + n, function(e) {
                e.preventDefault(), r.$html.hasClass(i.modal) || (t.closeAllOthers(), t.close())
            }))
        };
        var i, s, a, r
    }(jQuery),
    function(e) {
        var t = "mmenu",
            n = "scrollBugFix";
        e[t].addons[n] = {
            setup: function() {
                var s = this,
                    o = this.opts[n];
                if (this.conf[n], r = e[t].glbl, e[t].support.touch && this.opts.offCanvas && this.opts.offCanvas.blockUI && ("boolean" == typeof o && (o = {
                        fix: o
                    }), "object" != typeof o && (o = {}), o = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], o), o.fix)) {
                    var l = this.$menu.attr("id"),
                        c = !1;
                    this.bind("opening", function() {
                        this.$pnls.children("." + i.current).scrollTop(0)
                    }), r.$docu.on(a.touchmove, function(e) {
                        s.vars.opened && e.preventDefault()
                    }), r.$body.on(a.touchstart, "#" + l + "> ." + i.panels + "> ." + i.current, function(e) {
                        s.vars.opened && (c || (c = !0, 0 === e.currentTarget.scrollTop ? e.currentTarget.scrollTop = 1 : e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.offsetHeight && (e.currentTarget.scrollTop -= 1), c = !1))
                    }).on(a.touchmove, "#" + l + "> ." + i.panels + "> ." + i.current, function(t) {
                        s.vars.opened && e(this)[0].scrollHeight > e(this).innerHeight() && t.stopPropagation()
                    }), r.$wndw.on(a.orientationchange, function() {
                        s.$pnls.children("." + i.current).scrollTop(0).css({
                            "-webkit-overflow-scrolling": "auto"
                        }).css({
                            "-webkit-overflow-scrolling": "touch"
                        })
                    })
                }
            },
            add: function() {
                i = e[t]._c, s = e[t]._d, a = e[t]._e
            },
            clickAnchor: function() {}
        }, e[t].defaults[n] = {
            fix: !0
        };
        var i, s, a, r
    }(jQuery),
    function(e) {
        var t = "mmenu",
            n = "autoHeight";
        e[t].addons[n] = {
            setup: function() {
                if (this.opts.offCanvas) {
                    var s = this.opts[n];
                    if (this.conf[n], r = e[t].glbl, "boolean" == typeof s && s && (s = {
                            height: "auto"
                        }), "string" == typeof s && (s = {
                            height: s
                        }), "object" != typeof s && (s = {}), s = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], s), "auto" == s.height || "highest" == s.height) {
                        this.$menu.addClass(i.autoheight);
                        var a = function(t) {
                            if (this.vars.opened) {
                                var n = parseInt(this.$pnls.css("top"), 10) || 0,
                                    a = parseInt(this.$pnls.css("bottom"), 10) || 0,
                                    r = 0;
                                this.$menu.addClass(i.measureheight), "auto" == s.height ? (t = t || this.$pnls.children("." + i.current), t.is("." + i.vertical) && (t = t.parents("." + i.panel).not("." + i.vertical).first()), r = t.outerHeight()) : "highest" == s.height && this.$pnls.children().each(function() {
                                    var t = e(this);
                                    t.is("." + i.vertical) && (t = t.parents("." + i.panel).not("." + i.vertical).first()), r = Math.max(r, t.outerHeight())
                                }), this.$menu.height(r + n + a).removeClass(i.measureheight)
                            }
                        };
                        this.bind("opening", a), "highest" == s.height && this.bind("initPanels", a), "auto" == s.height && (this.bind("update", a), this.bind("openPanel", a), this.bind("closePanel", a))
                    }
                }
            },
            add: function() {
                i = e[t]._c, s = e[t]._d, a = e[t]._e, i.add("autoheight measureheight"), a.add("resize")
            },
            clickAnchor: function() {}
        }, e[t].defaults[n] = {
            height: "default"
        };
        var i, s, a, r
    }(jQuery),
    function(e) {
        var t = "mmenu",
            n = "backButton";
        e[t].addons[n] = {
            setup: function() {
                if (this.opts.offCanvas) {
                    var s = this,
                        a = this.opts[n];
                    if (this.conf[n], r = e[t].glbl, "boolean" == typeof a && (a = {
                            close: a
                        }), "object" != typeof a && (a = {}), a = e.extend(!0, {}, e[t].defaults[n], a), a.close) {
                        var o = "#" + s.$menu.attr("id");
                        this.bind("opened", function() {
                            location.hash != o && history.pushState(null, document.title, o)
                        }), e(window).on("popstate", function(e) {
                            r.$html.hasClass(i.opened) ? (e.stopPropagation(), s.close()) : location.hash == o && (e.stopPropagation(), s.open())
                        })
                    }
                }
            },
            add: function() {
                return window.history && window.history.pushState ? (i = e[t]._c, s = e[t]._d, void(a = e[t]._e)) : void(e[t].addons[n].setup = function() {})
            },
            clickAnchor: function() {}
        }, e[t].defaults[n] = {
            close: !1
        };
        var i, s, a, r
    }(jQuery),
    function(e) {
        var t = "mmenu",
            n = "columns";
        e[t].addons[n] = {
            setup: function() {
                var s = this.opts[n];
                if (this.conf[n], r = e[t].glbl, "boolean" == typeof s && (s = {
                        add: s
                    }), "number" == typeof s && (s = {
                        add: !0,
                        visible: s
                    }), "object" != typeof s && (s = {}), "number" == typeof s.visible && (s.visible = {
                        min: s.visible,
                        max: s.visible
                    }), s = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], s), s.add) {
                    s.visible.min = Math.max(1, Math.min(6, s.visible.min)), s.visible.max = Math.max(s.visible.min, Math.min(6, s.visible.max)), this.$menu.addClass(i.columns);
                    for (var a = this.opts.offCanvas ? this.$menu.add(r.$html) : this.$menu, o = [], l = 0; l <= s.visible.max; l++) o.push(i.columns + "-" + l);
                    o = o.join(" ");
                    var c = function() {
                            u.call(this, this.$pnls.children("." + i.current))
                        },
                        d = function() {
                            var e = this.$pnls.children("." + i.panel).filter("." + i.opened).length;
                            e = Math.min(s.visible.max, Math.max(s.visible.min, e)), a.removeClass(o).addClass(i.columns + "-" + e)
                        },
                        p = function() {
                            this.opts.offCanvas && r.$html.removeClass(o)
                        },
                        u = function(t) {
                            this.$pnls.children("." + i.panel).removeClass(o).filter("." + i.subopened).removeClass(i.hidden).add(t).slice(-s.visible.max).each(function(t) {
                                e(this).addClass(i.columns + "-" + t)
                            })
                        };
                    this.bind("open", d), this.bind("close", p), this.bind("initPanels", c), this.bind("openPanel", u), this.bind("openingPanel", d), this.bind("openedPanel", d), this.opts.offCanvas || d.call(this)
                }
            },
            add: function() {
                i = e[t]._c, s = e[t]._d, a = e[t]._e, i.add("columns")
            },
            clickAnchor: function(t, s) {
                if (!this.opts[n].add) return !1;
                if (s) {
                    var a = t.attr("href");
                    if (a.length > 1 && "#" == a.slice(0, 1)) try {
                        var r = e(a, this.$menu);
                        if (r.is("." + i.panel))
                            for (var o = parseInt(t.closest("." + i.panel).attr("class").split(i.columns + "-")[1].split(" ")[0], 10) + 1; o !== !1;) {
                                var l = this.$pnls.children("." + i.columns + "-" + o);
                                if (!l.length) {
                                    o = !1;
                                    break
                                }
                                o++, l.removeClass(i.subopened).removeClass(i.opened).removeClass(i.current).removeClass(i.highest).addClass(i.hidden)
                            }
                    } catch (c) {}
                }
            }
        }, e[t].defaults[n] = {
            add: !1,
            visible: {
                min: 1,
                max: 3
            }
        };
        var i, s, a, r
    }(jQuery),
    function(e) {
        var t = "mmenu",
            n = "counters";
        e[t].addons[n] = {
            setup: function() {
                var a = this,
                    o = this.opts[n];
                this.conf[n], r = e[t].glbl, "boolean" == typeof o && (o = {
                    add: o,
                    update: o
                }), "object" != typeof o && (o = {}), o = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], o), this.bind("initPanels", function(t) {
                    this.__refactorClass(e("em", t), this.conf.classNames[n].counter, "counter")
                }), o.add && this.bind("initPanels", function(t) {
                    var n;
                    switch (o.addTo) {
                        case "panels":
                            n = t;
                            break;
                        default:
                            n = t.filter(o.addTo)
                    }
                    n.each(function() {
                        var t = e(this).data(s.parent);
                        t && (t.children("em." + i.counter).length || t.prepend(e('<em class="' + i.counter + '" />')))
                    })
                }), o.update && this.bind("update", function() {
                    this.$pnls.find("." + i.panel).each(function() {
                        var t = e(this),
                            n = t.data(s.parent);
                        if (n) {
                            var r = n.children("em." + i.counter);
                            r.length && (t = t.children("." + i.listview), t.length && r.html(a.__filterListItems(t.children()).length))
                        }
                    })
                })
            },
            add: function() {
                i = e[t]._c, s = e[t]._d, a = e[t]._e, i.add("counter search noresultsmsg")
            },
            clickAnchor: function() {}
        }, e[t].defaults[n] = {
            add: !1,
            addTo: "panels",
            update: !1
        }, e[t].configuration.classNames[n] = {
            counter: "Counter"
        };
        var i, s, a, r
    }(jQuery),
    function(e) {
        var t = "mmenu",
            n = "dividers";
        e[t].addons[n] = {
            setup: function() {
                var s = this,
                    o = this.opts[n];
                if (this.conf[n], r = e[t].glbl, "boolean" == typeof o && (o = {
                        add: o,
                        fixed: o
                    }), "object" != typeof o && (o = {}), o = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], o), this.bind("initPanels", function() {
                        this.__refactorClass(e("li", this.$menu), this.conf.classNames[n].collapsed, "collapsed")
                    }), o.add && this.bind("initPanels", function(t) {
                        var n;
                        switch (o.addTo) {
                            case "panels":
                                n = t;
                                break;
                            default:
                                n = t.filter(o.addTo)
                        }
                        e("." + i.divider, n).remove(), n.find("." + i.listview).not("." + i.vertical).each(function() {
                            var t = "";
                            s.__filterListItems(e(this).children()).each(function() {
                                var n = e.trim(e(this).children("a, span").text()).slice(0, 1).toLowerCase();
                                n != t && n.length && (t = n, e('<li class="' + i.divider + '">' + n + "</li>").insertBefore(this))
                            })
                        })
                    }), o.collapse && this.bind("initPanels", function(t) {
                        e("." + i.divider, t).each(function() {
                            var t = e(this),
                                n = t.nextUntil("." + i.divider, "." + i.collapsed);
                            n.length && (t.children("." + i.subopen).length || (t.wrapInner("<span />"), t.prepend('<a href="#" class="' + i.subopen + " " + i.fullsubopen + '" />')))
                        })
                    }), o.fixed) {
                    var l = function(t) {
                        t = t || this.$pnls.children("." + i.current);
                        var n = t.find("." + i.divider).not("." + i.hidden);
                        if (n.length) {
                            this.$menu.addClass(i.hasdividers);
                            var s = t.scrollTop() || 0,
                                a = "";
                            t.is(":visible") && t.find("." + i.divider).not("." + i.hidden).each(function() {
                                e(this).position().top + s < s + 1 && (a = e(this).text())
                            }), this.$fixeddivider.text(a)
                        } else this.$menu.removeClass(i.hasdividers)
                    };
                    this.$fixeddivider = e('<ul class="' + i.listview + " " + i.fixeddivider + '"><li class="' + i.divider + '"></li></ul>').prependTo(this.$pnls).children(), this.bind("openPanel", l), this.bind("update", l), this.bind("initPanels", function(t) {
                        t.off(a.scroll + "-dividers " + a.touchmove + "-dividers").on(a.scroll + "-dividers " + a.touchmove + "-dividers", function() {
                            l.call(s, e(this))
                        })
                    })
                }
            },
            add: function() {
                i = e[t]._c, s = e[t]._d, a = e[t]._e, i.add("collapsed uncollapsed fixeddivider hasdividers"), a.add("scroll")
            },
            clickAnchor: function(e, t) {
                if (this.opts[n].collapse && t) {
                    var s = e.parent();
                    if (s.is("." + i.divider)) {
                        var a = s.nextUntil("." + i.divider, "." + i.collapsed);
                        return s.toggleClass(i.opened), a[s.hasClass(i.opened) ? "addClass" : "removeClass"](i.uncollapsed), !0
                    }
                }
                return !1
            }
        }, e[t].defaults[n] = {
            add: !1,
            addTo: "panels",
            fixed: !1,
            collapse: !1
        }, e[t].configuration.classNames[n] = {
            collapsed: "Collapsed"
        };
        var i, s, a, r
    }(jQuery),
    function(e) {
        function t(e, t, n) {
            return t > e && (e = t), e > n && (e = n), e
        }

        function n(n, i, s) {
            var o, l, c, d, p, u = this,
                f = {},
                h = 0,
                m = !1,
                v = !1,
                g = 0,
                b = 0;
            switch (this.opts.offCanvas.position) {
                case "left":
                case "right":
                    f.events = "panleft panright", f.typeLower = "x", f.typeUpper = "X", v = "width";
                    break;
                case "top":
                case "bottom":
                    f.events = "panup pandown", f.typeLower = "y", f.typeUpper = "Y", v = "height"
            }
            switch (this.opts.offCanvas.position) {
                case "right":
                case "bottom":
                    f.negative = !0, d = function(e) {
                        e >= s.$wndw[v]() - n.maxStartPos && (h = 1)
                    };
                    break;
                default:
                    f.negative = !1, d = function(e) {
                        e <= n.maxStartPos && (h = 1)
                    }
            }
            switch (this.opts.offCanvas.position) {
                case "left":
                    f.open_dir = "right", f.close_dir = "left";
                    break;
                case "right":
                    f.open_dir = "left", f.close_dir = "right";
                    break;
                case "top":
                    f.open_dir = "down", f.close_dir = "up";
                    break;
                case "bottom":
                    f.open_dir = "up", f.close_dir = "down"
            }
            switch (this.opts.offCanvas.zposition) {
                case "front":
                    p = function() {
                        return this.$menu
                    };
                    break;
                default:
                    p = function() {
                        return e("." + r.slideout)
                    }
            }
            var y = this.__valueOrFn(n.node, this.$menu, s.$page);
            "string" == typeof y && (y = e(y));
            var w = new Hammer(y[0], this.opts[a].vendors.hammer);
            w.on("panstart", function(e) {
                d(e.center[f.typeLower]), s.$slideOutNodes = p(), m = f.open_dir
            }).on(f.events + " panend", function(e) {
                h > 0 && e.preventDefault()
            }).on(f.events, function(e) {
                if (o = e["delta" + f.typeUpper], f.negative && (o = -o), o != g && (m = o >= g ? f.open_dir : f.close_dir), g = o, g > n.threshold && 1 == h) {
                    if (s.$html.hasClass(r.opened)) return;
                    h = 2, u._openSetup(), u.trigger("opening"), s.$html.addClass(r.dragging), b = t(s.$wndw[v]() * i[v].perc, i[v].min, i[v].max)
                }
                2 == h && (l = t(g, 10, b) - ("front" == u.opts.offCanvas.zposition ? b : 0), f.negative && (l = -l), c = "translate" + f.typeUpper + "(" + l + "px )", s.$slideOutNodes.css({
                    "-webkit-transform": "-webkit-" + c,
                    transform: c
                }))
            }).on("panend", function() {
                2 == h && (s.$html.removeClass(r.dragging), s.$slideOutNodes.css("transform", ""), u[m == f.open_dir ? "_openFinish" : "close"]()), h = 0
            })
        }

        function i(t) {
            var n = this;
            t.each(function() {
                var t = e(this),
                    i = t.data(o.parent);
                if (i && (i = i.closest("." + r.panel), i.length)) {
                    var s = new Hammer(t[0], n.opts[a].vendors.hammer);
                    s.on("panright", function() {
                        n.openPanel(i)
                    })
                }
            })
        }
        var s = "mmenu",
            a = "drag";
        e[s].addons[a] = {
            setup: function() {
                if (this.opts.offCanvas) {
                    var t = this.opts[a],
                        r = this.conf[a];
                    c = e[s].glbl, "boolean" == typeof t && (t = {
                        menu: t,
                        panels: t
                    }), "object" != typeof t && (t = {}), "boolean" == typeof t.menu && (t.menu = {
                        open: t.menu
                    }), "object" != typeof t.menu && (t.menu = {}), "boolean" == typeof t.panels && (t.panels = {
                        close: t.panels
                    }), "object" != typeof t.panels && (t.panels = {}), t = this.opts[a] = e.extend(!0, {}, e[s].defaults[a], t), t.menu.open && n.call(this, t.menu, r.menu, c), t.panels.close && this.bind("initPanels", function(e) {
                        i.call(this, e, t.panels, r.panels, c)
                    })
                }
            },
            add: function() {
                return "function" != typeof Hammer || Hammer.VERSION < 2 ? void(e[s].addons[a].setup = function() {}) : (r = e[s]._c, o = e[s]._d, l = e[s]._e, void r.add("dragging"))
            },
            clickAnchor: function() {}
        }, e[s].defaults[a] = {
            menu: {
                open: !1,
                maxStartPos: 100,
                threshold: 50
            },
            panels: {
                close: !1
            },
            vendors: {
                hammer: {}
            }
        }, e[s].configuration[a] = {
            menu: {
                width: {
                    perc: .8,
                    min: 140,
                    max: 440
                },
                height: {
                    perc: .8,
                    min: 140,
                    max: 880
                }
            },
            panels: {}
        };
        var r, o, l, c
    }(jQuery),
    function(e) {
        var t = "mmenu",
            n = "dropdown";
        e[t].addons[n] = {
            setup: function() {
                if (this.opts.offCanvas) {
                    var o = this,
                        l = this.opts[n],
                        c = this.conf[n];
                    if (r = e[t].glbl, "boolean" == typeof l && l && (l = {
                            drop: l
                        }), "object" != typeof l && (l = {}), "string" == typeof l.position && (l.position = {
                            of: l.position
                        }), l = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], l), l.drop) {
                        if ("string" != typeof l.position.of) {
                            var d = this.$menu.attr("id");
                            d && d.length && (this.conf.clone && (d = i.umm(d)), l.position.of = '[href="#' + d + '"]')
                        }
                        if ("string" == typeof l.position.of) {
                            var p = e(l.position.of);
                            if (p.length) {
                                this.$menu.addClass(i.dropdown), l.tip && this.$menu.addClass(i.tip), l.event = l.event.split(" "), 1 == l.event.length && (l.event[1] = l.event[0]), "hover" == l.event[0] && p.on(a.mouseenter + "-dropdown", function() {
                                    o.open()
                                }), "hover" == l.event[1] && this.$menu.on(a.mouseleave + "-dropdown", function() {
                                    o.close()
                                }), this.bind("opening", function() {
                                    this.$menu.data(s.style, this.$menu.attr("style") || ""), r.$html.addClass(i.dropdown)
                                }), this.bind("closed", function() {
                                    this.$menu.attr("style", this.$menu.data(s.style)), r.$html.removeClass(i.dropdown)
                                });
                                var u = function(s, a) {
                                        var o = a[0],
                                            d = a[1],
                                            u = "x" == s ? "scrollLeft" : "scrollTop",
                                            f = "x" == s ? "outerWidth" : "outerHeight",
                                            h = "x" == s ? "left" : "top",
                                            m = "x" == s ? "right" : "bottom",
                                            v = "x" == s ? "width" : "height",
                                            g = "x" == s ? "maxWidth" : "maxHeight",
                                            b = null,
                                            y = r.$wndw[u](),
                                            w = p.offset()[h] -= y,
                                            _ = w + p[f](),
                                            x = r.$wndw[v](),
                                            C = c.offset.button[s] + c.offset.viewport[s];
                                        if (l.position[s]) switch (l.position[s]) {
                                            case "left":
                                            case "bottom":
                                                b = "after";
                                                break;
                                            case "right":
                                            case "top":
                                                b = "before"
                                        }
                                        null === b && (b = x / 2 > w + (_ - w) / 2 ? "after" : "before");
                                        var S, T;
                                        return "after" == b ? (S = "x" == s ? w : _, T = x - (S + C), o[h] = S + c.offset.button[s], o[m] = "auto", d.push(i["x" == s ? "tipleft" : "tiptop"])) : (S = "x" == s ? _ : w, T = S - C, o[m] = "calc( 100% - " + (S - c.offset.button[s]) + "px )", o[h] = "auto", d.push(i["x" == s ? "tipright" : "tipbottom"])), o[g] = Math.min(e[t].configuration[n][v].max, T), [o, d]
                                    },
                                    f = function() {
                                        if (this.vars.opened) {
                                            this.$menu.attr("style", this.$menu.data(s.style));
                                            var e = [{},
                                                []
                                            ];
                                            e = u.call(this, "y", e), e = u.call(this, "x", e), this.$menu.css(e[0]), l.tip && this.$menu.removeClass(i.tipleft + " " + i.tipright + " " + i.tiptop + " " + i.tipbottom).addClass(e[1].join(" "))
                                        }
                                    };
                                this.bind("opening", f), r.$wndw.on(a.resize + "-dropdown", function() {
                                    f.call(o)
                                }), this.opts.offCanvas.blockUI || r.$wndw.on(a.scroll + "-dropdown", function() {
                                    f.call(o)
                                })
                            }
                        }
                    }
                }
            },
            add: function() {
                i = e[t]._c, s = e[t]._d, a = e[t]._e, i.add("dropdown tip tipleft tipright tiptop tipbottom"), a.add("mouseenter mouseleave resize scroll")
            },
            clickAnchor: function() {}
        }, e[t].defaults[n] = {
            drop: !1,
            event: "click",
            position: {},
            tip: !0
        }, e[t].configuration[n] = {
            offset: {
                button: {
                    x: -10,
                    y: 10
                },
                viewport: {
                    x: 20,
                    y: 20
                }
            },
            height: {
                max: 880
            },
            width: {
                max: 440
            }
        };
        var i, s, a, r
    }(jQuery),
    function(e) {
        var t = "mmenu",
            n = "fixedElements";
        e[t].addons[n] = {
            setup: function() {
                if (this.opts.offCanvas) {
                    var i = this.opts[n];
                    this.conf[n], r = e[t].glbl, i = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], i);
                    var s = function(e) {
                        var t = this.conf.classNames[n].fixed;
                        this.__refactorClass(e.find("." + t), t, "slideout").appendTo(r.$body)
                    };
                    s.call(this, r.$page), this.bind("setPage", s)
                }
            },
            add: function() {
                i = e[t]._c, s = e[t]._d, a = e[t]._e, i.add("fixed")
            },
            clickAnchor: function() {}
        }, e[t].configuration.classNames[n] = {
            fixed: "Fixed"
        };
        var i, s, a, r
    }(jQuery),
    function(e) {
        var t = "mmenu",
            n = "iconPanels";
        e[t].addons[n] = {
            setup: function() {
                var s = this,
                    a = this.opts[n];
                if (this.conf[n], r = e[t].glbl, "boolean" == typeof a && (a = {
                        add: a
                    }), "number" == typeof a && (a = {
                        add: !0,
                        visible: a
                    }), "object" != typeof a && (a = {}), a = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], a), a.visible++, a.add) {
                    this.$menu.addClass(i.iconpanel);
                    for (var o = [], l = 0; l <= a.visible; l++) o.push(i.iconpanel + "-" + l);
                    o = o.join(" ");
                    var c = function(t) {
                        t.hasClass(i.vertical) || s.$pnls.children("." + i.panel).removeClass(o).filter("." + i.subopened).removeClass(i.hidden).add(t).not("." + i.vertical).slice(-a.visible).each(function(t) {
                            e(this).addClass(i.iconpanel + "-" + t)
                        })
                    };
                    this.bind("openPanel", c), this.bind("initPanels", function(t) {
                        c.call(s, s.$pnls.children("." + i.current)), t.not("." + i.vertical).each(function() {
                            e(this).children("." + i.subblocker).length || e(this).prepend('<a href="#' + e(this).closest("." + i.panel).attr("id") + '" class="' + i.subblocker + '" />')
                        })
                    })
                }
            },
            add: function() {
                i = e[t]._c, s = e[t]._d, a = e[t]._e, i.add("iconpanel subblocker")
            },
            clickAnchor: function() {}
        }, e[t].defaults[n] = {
            add: !1,
            visible: 3
        };
        var i, s, a, r
    }(jQuery),
    function(e) {
        function t(t, n) {
            t || (t = this.$pnls.children("." + a.current));
            var i = e();
            "default" == n && (i = t.children("." + a.listview).find("a[href]").not(":hidden"), i.length || (i = t.find(c).not(":hidden")), i.length || (i = this.$menu.children("." + a.navbar).find(c).not(":hidden"))), i.length || (i = this.$menu.children("." + a.tabstart)), i.first().focus()
        }

        function n(e) {
            e || (e = this.$pnls.children("." + a.current));
            var t = this.$pnls.children("." + a.panel),
                n = t.not(e);
            n.find(c).attr("tabindex", -1), e.find(c).attr("tabindex", 0), e.find("input.mm-toggle, input.mm-check").attr("tabindex", -1)
        }
        var i = "mmenu",
            s = "keyboardNavigation";
        e[i].addons[s] = {
            setup: function() {
                var r = this,
                    o = this.opts[s];
                if (this.conf[s], l = e[i].glbl, ("boolean" == typeof o || "string" == typeof o) && (o = {
                        enable: o
                    }), "object" != typeof o && (o = {}), o = this.opts[s] = e.extend(!0, {}, e[i].defaults[s], o), o.enable) {
                    o.enhance && this.$menu.addClass(a.keyboardfocus);
                    var d = e('<input class="' + a.tabstart + '" tabindex="0" type="text" />'),
                        p = e('<input class="' + a.tabend + '" tabindex="0" type="text" />');
                    this.bind("initPanels", function() {
                        this.$menu.prepend(d).append(p).children("." + a.navbar).find(c).attr("tabindex", 0)
                    }), this.bind("open", function() {
                        n.call(this), this.__transitionend(this.$menu, function() {
                            t.call(r, null, o.enable)
                        }, this.conf.transitionDuration)
                    }), this.bind("openPanel", function(e) {
                        n.call(this, e), this.__transitionend(e, function() {
                            t.call(r, e, o.enable)
                        }, this.conf.transitionDuration)
                    }), this["_initWindow_" + s](o.enhance)
                }
            },
            add: function() {
                a = e[i]._c, r = e[i]._d, o = e[i]._e, a.add("tabstart tabend keyboardfocus"), o.add("focusin keydown")
            },
            clickAnchor: function() {}
        }, e[i].defaults[s] = {
            enable: !1,
            enhance: !1
        }, e[i].configuration[s] = {}, e[i].prototype["_initWindow_" + s] = function(t) {
            l.$wndw.off(o.keydown + "-offCanvas"), l.$wndw.off(o.focusin + "-" + s).on(o.focusin + "-" + s, function(t) {
                if (l.$html.hasClass(a.opened)) {
                    var n = e(t.target);
                    n.is("." + a.tabend) && n.parent().find("." + a.tabstart).focus()
                }
            }), l.$wndw.off(o.keydown + "-" + s).on(o.keydown + "-" + s, function(t) {
                var n = e(t.target),
                    i = n.closest("." + a.menu);
                if (i.length)
                    if (i.data("mmenu"), n.is("input, textarea"));
                    else switch (t.keyCode) {
                        case 13:
                            (n.is(".mm-toggle") || n.is(".mm-check")) && n.trigger(o.click);
                            break;
                        case 32:
                        case 37:
                        case 38:
                        case 39:
                        case 40:
                            t.preventDefault()
                    }
            }), t && l.$wndw.on(o.keydown + "-" + s, function(t) {
                var n = e(t.target),
                    i = n.closest("." + a.menu);
                if (i.length) {
                    var s = i.data("mmenu");
                    if (n.is("input, textarea")) switch (t.keyCode) {
                        case 27:
                            n.val("")
                    } else switch (t.keyCode) {
                        case 8:
                            var o = n.closest("." + a.panel).data(r.parent);
                            o && o.length && s.openPanel(o.closest("." + a.panel));
                            break;
                        case 27:
                            i.hasClass(a.offcanvas) && s.close()
                    }
                }
            })
        };
        var a, r, o, l, c = "input, select, textarea, button, label, a[href]"
    }(jQuery),
    function(e) {
        var t = "mmenu",
            n = "lazySubmenus";
        e[t].addons[n] = {
            setup: function() {
                var a = this.opts[n];
                this.conf[n], r = e[t].glbl, "boolean" == typeof a && (a = {
                    load: a
                }), "object" != typeof a && (a = {}), a = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], a), a.load && (this.$menu.find("li").find("li").children(this.conf.panelNodetype).each(function() {
                    e(this).parent().addClass(i.lazysubmenu).data(s.lazysubmenu, this).end().remove()
                }), this.bind("openingPanel", function(t) {
                    var n = t.find("." + i.lazysubmenu);
                    n.length && (n.each(function() {
                        e(this).append(e(this).data(s.lazysubmenu)).removeData(s.lazysubmenu).removeClass(i.lazysubmenu)
                    }), this.initPanels(t))
                }))
            },
            add: function() {
                i = e[t]._c, s = e[t]._d, a = e[t]._e, i.add("lazysubmenu"), s.add("lazysubmenu")
            },
            clickAnchor: function() {}
        }, e[t].defaults[n] = {
            load: !1
        }, e[t].configuration[n] = {};
        var i, s, a, r
    }(jQuery),
    function(e) {
        var t = "mmenu",
            n = "rtl";
        e[t].addons[n] = {
            setup: function() {
                var s = this.opts[n];
                this.conf[n], r = e[t].glbl, "object" != typeof s && (s = {
                    use: s
                }), s = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], s), "boolean" != typeof s.use && (s.use = "rtl" == (r.$html.attr("dir") || "").toLowerCase()), s.use && this.$menu.addClass(i.rtl)
            },
            add: function() {
                i = e[t]._c, s = e[t]._d, a = e[t]._e, i.add("rtl")
            },
            clickAnchor: function() {}
        }, e[t].defaults[n] = {
            use: "detect"
        };
        var i, s, a, r
    }(jQuery),
    function(e) {
        function t(e, t, n) {
            e.prop("aria-" + t, n)[n ? "attr" : "removeAttr"]("aria-" + t, "true")
        }

        function n(e) {
            return '<span class="' + a.sronly + '">' + e + "</span>"
        }
        var i = "mmenu",
            s = "screenReader";
        e[i].addons[s] = {
            setup: function() {
                var r = this.opts[s],
                    o = this.conf[s];
                if (l = e[i].glbl, "boolean" == typeof r && (r = {
                        aria: r,
                        text: r
                    }), "object" != typeof r && (r = {}), r = this.opts[s] = e.extend(!0, {}, e[i].defaults[s], r), r.aria) {
                    if (this.opts.offCanvas) {
                        var c = function() {
                                t(this.$menu, "hidden", !1)
                            },
                            d = function() {
                                t(this.$menu, "hidden", !0)
                            };
                        this.bind("open", c), this.bind("close", d), d.call(this)
                    }
                    var p = function() {
                            t(this.$menu.find("." + a.hidden), "hidden", !0), t(this.$menu.find('[aria-hidden="true"]').not("." + a.hidden), "hidden", !1)
                        },
                        u = function(e) {
                            t(this.$pnls.children("." + a.panel).not(e).not("." + a.hidden), "hidden", !0), t(e, "hidden", !1)
                        };
                    this.bind("update", p), this.bind("openPanel", p), this.bind("openPanel", u);
                    var f = function(e) {
                        t(e.find("." + a.prev + ", ." + a.next), "haspopup", !0)
                    };
                    this.bind("initPanels", f), f.call(this, this.$menu.children("." + a.navbar))
                }
                if (r.text) {
                    var h = function(t) {
                        t.children("." + a.navbar).children("." + a.prev).html(n(o.text.closeSubmenu)).end().children("." + a.next).html(n(o.text.openSubmenu)).end().children("." + a.close).html(n(o.text.closeMenu)), t.is("." + a.panel) && t.find("." + a.listview).find("." + a.next).each(function() {
                            e(this).html(n(o.text[e(this).parent().is("." + a.vertical) ? "toggleSubmenu" : "openSubmenu"]))
                        })
                    };
                    this.bind("initPanels", h), h.call(this, this.$menu)
                }
            },
            add: function() {
                a = e[i]._c, r = e[i]._d, o = e[i]._e, a.add("sronly")
            },
            clickAnchor: function() {}
        }, e[i].defaults[s] = {
            aria: !1,
            text: !1
        }, e[i].configuration[s] = {
            text: {
                closeMenu: "Close menu",
                closeSubmenu: "Close submenu",
                openSubmenu: "Open submenu",
                toggleSubmenu: "Toggle submenu"
            }
        };
        var a, r, o, l
    }(jQuery),
    function(e) {
        function t(e) {
            switch (e) {
                case 9:
                case 16:
                case 17:
                case 18:
                case 37:
                case 38:
                case 39:
                case 40:
                    return !0
            }
            return !1
        }
        var n = "mmenu",
            i = "searchfield";
        e[n].addons[i] = {
            setup: function() {
                var l = this,
                    c = this.opts[i],
                    d = this.conf[i];
                o = e[n].glbl, "boolean" == typeof c && (c = {
                    add: c
                }), "object" != typeof c && (c = {}), "boolean" == typeof c.resultsPanel && (c.resultsPanel = {
                    add: c.resultsPanel
                }), c = this.opts[i] = e.extend(!0, {}, e[n].defaults[i], c), d = this.conf[i] = e.extend(!0, {}, e[n].configuration[i], d), this.bind("close", function() {
                    this.$menu.find("." + s.search).find("input").blur()
                }), this.bind("initPanels", function(n) {
                    if (c.add) {
                        var o;
                        switch (c.addTo) {
                            case "panels":
                                o = n;
                                break;
                            default:
                                o = this.$menu.find(c.addTo)
                        }
                        if (o.each(function() {
                                var t = e(this);
                                if (!t.is("." + s.panel) || !t.is("." + s.vertical)) {
                                    if (!t.children("." + s.search).length) {
                                        var n = l.__valueOrFn(d.clear, t),
                                            i = l.__valueOrFn(d.form, t),
                                            a = l.__valueOrFn(d.input, t),
                                            o = l.__valueOrFn(d.submit, t),
                                            p = e("<" + (i ? "form" : "div") + ' class="' + s.search + '" />'),
                                            u = e('<input placeholder="' + c.placeholder + '" type="text" autocomplete="off" />');
                                        p.append(u);
                                        var f;
                                        if (a)
                                            for (f in a) u.attr(f, a[f]);
                                        if (n && e('<a class="' + s.btn + " " + s.clear + '" href="#" />').appendTo(p).on(r.click + "-searchfield", function(e) {
                                                e.preventDefault(), u.val("").trigger(r.keyup + "-searchfield")
                                            }), i) {
                                            for (f in i) p.attr(f, i[f]);
                                            o && !n && e('<a class="' + s.btn + " " + s.next + '" href="#" />').appendTo(p).on(r.click + "-searchfield", function(e) {
                                                e.preventDefault(), p.submit()
                                            })
                                        }
                                        t.hasClass(s.search) ? t.replaceWith(p) : t.prepend(p).addClass(s.hassearch)
                                    }
                                    if (c.noResults) {
                                        var h = t.closest("." + s.panel).length;
                                        if (h || (t = l.$pnls.children("." + s.panel).first()), !t.children("." + s.noresultsmsg).length) {
                                            var m = t.children("." + s.listview).first();
                                            e('<div class="' + s.noresultsmsg + " " + s.hidden + '" />').append(c.noResults)[m.length ? "insertAfter" : "prependTo"](m.length ? m : t)
                                        }
                                    }
                                }
                            }), c.search) {
                            if (c.resultsPanel.add) {
                                c.showSubPanels = !1;
                                var p = this.$pnls.children("." + s.resultspanel);
                                p.length || (p = e('<div class="' + s.panel + " " + s.resultspanel + " " + s.hidden + '" />').appendTo(this.$pnls).append('<div class="' + s.navbar + " " + s.hidden + '"><a class="' + s.title + '">' + c.resultsPanel.title + "</a></div>").append('<ul class="' + s.listview + '" />').append(this.$pnls.find("." + s.noresultsmsg).first().clone()), this.initPanels(p))
                            }
                            this.$menu.find("." + s.search).each(function() {
                                var n, o, d = e(this),
                                    u = d.closest("." + s.panel).length;
                                u ? (n = d.closest("." + s.panel), o = n) : (n = e("." + s.panel, l.$menu), o = l.$menu), c.resultsPanel.add && (n = n.not(p));
                                var f = d.children("input"),
                                    h = l.__findAddBack(n, "." + s.listview).children("li"),
                                    m = h.filter("." + s.divider),
                                    v = l.__filterListItems(h),
                                    g = "a",
                                    b = g + ", span",
                                    y = "",
                                    w = function() {
                                        var t = f.val().toLowerCase();
                                        if (t != y) {
                                            if (y = t, c.resultsPanel.add && p.children("." + s.listview).empty(), n.scrollTop(0), v.add(m).addClass(s.hidden).find("." + s.fullsubopensearch).removeClass(s.fullsubopen + " " + s.fullsubopensearch), v.each(function() {
                                                    var t = e(this),
                                                        n = g;
                                                    (c.showTextItems || c.showSubPanels && t.find("." + s.next)) && (n = b);
                                                    var i = t.data(a.searchtext) || t.children(n).text();
                                                    i.toLowerCase().indexOf(y) > -1 && t.add(t.prevAll("." + s.divider).first()).removeClass(s.hidden)
                                                }), c.showSubPanels && n.each(function() {
                                                    var t = e(this);
                                                    l.__filterListItems(t.find("." + s.listview).children()).each(function() {
                                                        var t = e(this),
                                                            n = t.data(a.child);
                                                        t.removeClass(s.nosubresults), n && n.find("." + s.listview).children().removeClass(s.hidden)
                                                    })
                                                }), c.resultsPanel.add)
                                                if ("" === y) this.closeAllPanels(), this.openPanel(this.$pnls.children("." + s.subopened).last());
                                                else {
                                                    var i = e();
                                                    n.each(function() {
                                                        var t = l.__filterListItems(e(this).find("." + s.listview).children()).not("." + s.hidden).clone(!0);
                                                        t.length && (c.resultsPanel.dividers && (i = i.add('<li class="' + s.divider + '">' + e(this).children("." + s.navbar).text() + "</li>")), i = i.add(t))
                                                    }), i.find("." + s.next).remove(), p.children("." + s.listview).append(i), this.openPanel(p)
                                                }
                                            else e(n.get().reverse()).each(function(t) {
                                                var n = e(this),
                                                    i = n.data(a.parent);
                                                i && (l.__filterListItems(n.find("." + s.listview).children()).length ? (i.hasClass(s.hidden) && i.children("." + s.next).not("." + s.fullsubopen).addClass(s.fullsubopen).addClass(s.fullsubopensearch), i.removeClass(s.hidden).removeClass(s.nosubresults).prevAll("." + s.divider).first().removeClass(s.hidden)) : u || (n.hasClass(s.opened) && setTimeout(function() {
                                                    l.openPanel(i.closest("." + s.panel))
                                                }, (t + 1) * (1.5 * l.conf.openingInterval)), i.addClass(s.nosubresults)))
                                            });
                                            o.find("." + s.noresultsmsg)[v.not("." + s.hidden).length ? "addClass" : "removeClass"](s.hidden), this.update()
                                        }
                                    };
                                f.off(r.keyup + "-" + i + " " + r.change + "-" + i).on(r.keyup + "-" + i, function(e) {
                                    t(e.keyCode) || w.call(l)
                                }).on(r.change + "-" + i, function() {
                                    w.call(l)
                                });
                                var _ = d.children("." + s.btn);
                                _.length && f.on(r.keyup + "-" + i, function() {
                                    _[f.val().length ? "removeClass" : "addClass"](s.hidden)
                                }), f.trigger(r.keyup + "-" + i)
                            })
                        }
                    }
                })
            },
            add: function() {
                s = e[n]._c, a = e[n]._d, r = e[n]._e, s.add("clear search hassearch resultspanel noresultsmsg noresults nosubresults fullsubopensearch"), a.add("searchtext"), r.add("change keyup")
            },
            clickAnchor: function() {}
        }, e[n].defaults[i] = {
            add: !1,
            addTo: "panels",
            placeholder: "Search",
            noResults: "No results found.",
            resultsPanel: {
                add: !1,
                dividers: !0,
                title: "Search results"
            },
            search: !0,
            showTextItems: !1,
            showSubPanels: !0
        }, e[n].configuration[i] = {
            clear: !1,
            form: !1,
            input: !1,
            submit: !1
        };
        var s, a, r, o
    }(jQuery),
    function(e) {
        var t = "mmenu",
            n = "sectionIndexer";
        e[t].addons[n] = {
            setup: function() {
                var s = this,
                    o = this.opts[n];
                this.conf[n], r = e[t].glbl, "boolean" == typeof o && (o = {
                    add: o
                }), "object" != typeof o && (o = {}), o = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], o), this.bind("initPanels", function(t) {
                    if (o.add) {
                        var n;
                        switch (o.addTo) {
                            case "panels":
                                n = t;
                                break;
                            default:
                                n = e(o.addTo, this.$menu).filter("." + i.panel)
                        }
                        n.find("." + i.divider).closest("." + i.panel).addClass(i.hasindexer)
                    }
                    if (!this.$indexer && this.$pnls.children("." + i.hasindexer).length) {
                        this.$indexer = e('<div class="' + i.indexer + '" />').prependTo(this.$pnls).append('<a href="#a">a</a><a href="#b">b</a><a href="#c">c</a><a href="#d">d</a><a href="#e">e</a><a href="#f">f</a><a href="#g">g</a><a href="#h">h</a><a href="#i">i</a><a href="#j">j</a><a href="#k">k</a><a href="#l">l</a><a href="#m">m</a><a href="#n">n</a><a href="#o">o</a><a href="#p">p</a><a href="#q">q</a><a href="#r">r</a><a href="#s">s</a><a href="#t">t</a><a href="#u">u</a><a href="#v">v</a><a href="#w">w</a><a href="#x">x</a><a href="#y">y</a><a href="#z">z</a>'), this.$indexer.children().on(a.mouseover + "-sectionindexer " + i.touchstart + "-sectionindexer", function() {
                            var t = e(this).attr("href").slice(1),
                                n = s.$pnls.children("." + i.current),
                                a = n.find("." + i.listview),
                                r = !1,
                                o = n.scrollTop();
                            n.scrollTop(0), a.children("." + i.divider).not("." + i.hidden).each(function() {
                                r === !1 && t == e(this).text().slice(0, 1).toLowerCase() && (r = e(this).position().top)
                            }), n.scrollTop(r !== !1 ? r : o)
                        });
                        var r = function(e) {
                            s.$menu[(e.hasClass(i.hasindexer) ? "add" : "remove") + "Class"](i.hasindexer)
                        };
                        this.bind("openPanel", r), r.call(this, this.$pnls.children("." + i.current))
                    }
                })
            },
            add: function() {
                i = e[t]._c, s = e[t]._d, a = e[t]._e, i.add("indexer hasindexer"), a.add("mouseover touchstart")
            },
            clickAnchor: function(e) {
                return e.parent().is("." + i.indexer) ? !0 : void 0
            }
        }, e[t].defaults[n] = {
            add: !1,
            addTo: "panels"
        };
        var i, s, a, r
    }(jQuery),
    function(e) {
        var t = "mmenu",
            n = "setSelected";
        e[t].addons[n] = {
            setup: function() {
                var a = this,
                    o = this.opts[n];
                if (this.conf[n], r = e[t].glbl, "boolean" == typeof o && (o = {
                        hover: o,
                        parent: o
                    }), "object" != typeof o && (o = {}), o = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], o), "detect" == o.current) {
                    var l = function(e) {
                        e = e.split("?")[0].split("#")[0];
                        var t = a.$menu.find('a[href="' + e + '"], a[href="' + e + '/"]');
                        t.length ? a.setSelected(t.parent(), !0) : (e = e.split("/").slice(0, -1), e.length && l(e.join("/")))
                    };
                    l(window.location.href)
                } else o.current || this.bind("initPanels", function(e) {
                    e.find("." + i.listview).children("." + i.selected).removeClass(i.selected)
                });
                if (o.hover && this.$menu.addClass(i.hoverselected), o.parent) {
                    this.$menu.addClass(i.parentselected);
                    var c = function(e) {
                        this.$pnls.find("." + i.listview).find("." + i.next).removeClass(i.selected);
                        for (var t = e.data(s.parent); t && t.length;) t = t.not("." + i.vertical).children("." + i.next).addClass(i.selected).end().closest("." + i.panel).data(s.parent)
                    };
                    this.bind("openedPanel", c), this.bind("initPanels", function() {
                        c.call(this, this.$pnls.children("." + i.current))
                    })
                }
            },
            add: function() {
                i = e[t]._c, s = e[t]._d, a = e[t]._e, i.add("hoverselected parentselected")
            },
            clickAnchor: function() {}
        }, e[t].defaults[n] = {
            current: !0,
            hover: !1,
            parent: !1
        };
        var i, s, a, r
    }(jQuery),
    function(e) {
        var t = "mmenu",
            n = "toggles";
        e[t].addons[n] = {
            setup: function() {
                var s = this;
                this.opts[n], this.conf[n], r = e[t].glbl, this.bind("initPanels", function(t) {
                    this.__refactorClass(e("input", t), this.conf.classNames[n].toggle, "toggle"), this.__refactorClass(e("input", t), this.conf.classNames[n].check, "check"), e("input." + i.toggle + ", input." + i.check, t).each(function() {
                        var t = e(this),
                            n = t.closest("li"),
                            a = t.hasClass(i.toggle) ? "toggle" : "check",
                            r = t.attr("id") || s.__getUniqueId();
                        n.children('label[for="' + r + '"]').length || (t.attr("id", r), n.prepend(t), e('<label for="' + r + '" class="' + i[a] + '"></label>').insertBefore(n.children("a, span").last()))
                    })
                })
            },
            add: function() {
                i = e[t]._c, s = e[t]._d, a = e[t]._e, i.add("toggle check")
            },
            clickAnchor: function() {}
        }, e[t].configuration.classNames[n] = {
            toggle: "Toggle",
            check: "Check"
        };
        var i, s, a, r
    }(jQuery),
    function(e) {
        var t = "mmenu",
            n = "navbars";
        e[t].addons[n] = {
            setup: function() {
                var s = this,
                    a = this.opts[n],
                    o = this.conf[n];
                if (r = e[t].glbl, "undefined" != typeof a) {
                    a instanceof Array || (a = [a]);
                    var l = {};
                    if (a.length) {
                        e.each(a, function(r) {
                            var c = a[r];
                            "boolean" == typeof c && c && (c = {}), "object" != typeof c && (c = {}), "undefined" == typeof c.content && (c.content = ["prev", "title"]), c.content instanceof Array || (c.content = [c.content]), c = e.extend(!0, {}, s.opts.navbar, c);
                            var d = c.position,
                                p = c.height;
                            "number" != typeof p && (p = 1), p = Math.min(4, Math.max(1, p)), "bottom" != d && (d = "top"), l[d] || (l[d] = 0), l[d]++;
                            var u = e("<div />").addClass(i.navbar + " " + i.navbar + "-" + d + " " + i.navbar + "-" + d + "-" + l[d] + " " + i.navbar + "-size-" + p);
                            l[d] += p - 1;
                            for (var f = 0, h = 0, m = c.content.length; m > h; h++) {
                                var v = e[t].addons[n][c.content[h]] || !1;
                                v ? f += v.call(s, u, c, o) : (v = c.content[h], v instanceof e || (v = e(c.content[h])), u.append(v))
                            }
                            f += Math.ceil(u.children().not("." + i.btn).length / p), f > 1 && u.addClass(i.navbar + "-content-" + f), u.children("." + i.btn).length && u.addClass(i.hasbtns), u.prependTo(s.$menu)
                        });
                        for (var c in l) s.$menu.addClass(i.hasnavbar + "-" + c + "-" + l[c])
                    }
                }
            },
            add: function() {
                i = e[t]._c, s = e[t]._d, a = e[t]._e, i.add("close hasbtns")
            },
            clickAnchor: function() {}
        }, e[t].configuration[n] = {
            breadcrumbSeparator: "/"
        }, e[t].configuration.classNames[n] = {};
        var i, s, a, r
    }(jQuery),
    function(e) {
        var t = "mmenu",
            n = "navbars",
            i = "breadcrumbs";
        e[t].addons[n][i] = function(n, i, s) {
            var a = e[t]._c,
                r = e[t]._d;
            a.add("breadcrumbs separator");
            var o = e('<span class="' + a.breadcrumbs + '" />').appendTo(n);
            this.bind("initPanels", function(t) {
                t.removeClass(a.hasnavbar).each(function() {
                    for (var t = [], n = e(this), i = e('<span class="' + a.breadcrumbs + '"></span>'), o = e(this).children().first(), l = !0; o && o.length;) {
                        o.is("." + a.panel) || (o = o.closest("." + a.panel));
                        var c = o.children("." + a.navbar).children("." + a.title).text();
                        t.unshift(l ? "<span>" + c + "</span>" : '<a href="#' + o.attr("id") + '">' + c + "</a>"), l = !1, o = o.data(r.parent)
                    }
                    i.append(t.join('<span class="' + a.separator + '">' + s.breadcrumbSeparator + "</span>")).appendTo(n.children("." + a.navbar))
                })
            });
            var l = function() {
                o.html(this.$pnls.children("." + a.current).children("." + a.navbar).children("." + a.breadcrumbs).html())
            };
            return this.bind("openPanel", l), this.bind("initPanels", l), 0
        }
    }(jQuery),
    function(e) {
        var t = "mmenu",
            n = "navbars",
            i = "close";
        e[t].addons[n][i] = function(n) {
            var i = e[t]._c,
                s = e[t].glbl,
                a = e('<a class="' + i.close + " " + i.btn + '" href="#" />').appendTo(n),
                r = function(e) {
                    a.attr("href", "#" + e.attr("id"))
                };
            return r.call(this, s.$page), this.bind("setPage", r), -1
        }
    }(jQuery),
    function(e) {
        var t = "mmenu",
            n = "navbars",
            i = "next";
        e[t].addons[n][i] = function(i) {
            var s, a, r = e[t]._c,
                o = e('<a class="' + r.next + " " + r.btn + '" href="#" />').appendTo(i),
                l = function(e) {
                    e = e || this.$pnls.children("." + r.current);
                    var t = e.find("." + this.conf.classNames[n].panelNext);
                    s = t.attr("href"), a = t.html(), o[s ? "attr" : "removeAttr"]("href", s), o[s || a ? "removeClass" : "addClass"](r.hidden), o.html(a)
                };
            return this.bind("openPanel", l), this.bind("initPanels", function() {
                l.call(this)
            }), -1
        }, e[t].configuration.classNames[n].panelNext = "Next"
    }(jQuery),
    function(e) {
        var t = "mmenu",
            n = "navbars",
            i = "prev";
        e[t].addons[n][i] = function(i) {
            var s = e[t]._c,
                a = e('<a class="' + s.prev + " " + s.btn + '" href="#" />').appendTo(i);
            this.bind("initPanels", function(e) {
                e.removeClass(s.hasnavbar).children("." + s.navbar).addClass(s.hidden)
            });
            var r, o, l = function(e) {
                if (e = e || this.$pnls.children("." + s.current), !e.hasClass(s.vertical)) {
                    var t = e.find("." + this.conf.classNames[n].panelPrev);
                    t.length || (t = e.children("." + s.navbar).children("." + s.prev)), r = t.attr("href"), o = t.html(), a[r ? "attr" : "removeAttr"]("href", r), a[r || o ? "removeClass" : "addClass"](s.hidden), a.html(o)
                }
            };
            return this.bind("openPanel", l), this.bind("initPanels", function() {
                l.call(this)
            }), -1
        }, e[t].configuration.classNames[n].panelPrev = "Prev"
    }(jQuery),
    function(e) {
        var t = "mmenu",
            n = "navbars",
            i = "searchfield";
        e[t].addons[n][i] = function(n) {
            var i = e[t]._c,
                s = e('<div class="' + i.search + '" />').appendTo(n);
            return "object" != typeof this.opts.searchfield && (this.opts.searchfield = {}), this.opts.searchfield.add = !0, this.opts.searchfield.addTo = s, 0
        }
    }(jQuery),
    function(e) {
        var t = "mmenu",
            n = "navbars",
            i = "title";
        e[t].addons[n][i] = function(i, s) {
            var a, r, o = e[t]._c,
                l = e('<a class="' + o.title + '" />').appendTo(i),
                c = function(e) {
                    if (e = e || this.$pnls.children("." + o.current), !e.hasClass(o.vertical)) {
                        var t = e.find("." + this.conf.classNames[n].panelTitle);
                        t.length || (t = e.children("." + o.navbar).children("." + o.title)), a = t.attr("href"), r = t.html() || s.title, l[a ? "attr" : "removeAttr"]("href", a), l[a || r ? "removeClass" : "addClass"](o.hidden), l.html(r)
                    }
                };
            return this.bind("openPanel", c), this.bind("initPanels", function() {
                c.call(this)
            }), 0
        }, e[t].configuration.classNames[n].panelTitle = "Title"
    }(jQuery), ! function(e) {
        var t = !0;
        e.flexslider = function(n, i) {
            var s = e(n);
            s.vars = e.extend({}, e.flexslider.defaults, i);
            var a, r = s.vars.namespace,
                o = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
                l = ("ontouchstart" in window || o || window.DocumentTouch && document instanceof DocumentTouch) && s.vars.touch,
                c = "click touchend MSPointerUp keyup",
                d = "",
                p = "vertical" === s.vars.direction,
                u = s.vars.reverse,
                f = s.vars.itemWidth > 0,
                h = "fade" === s.vars.animation,
                m = "" !== s.vars.asNavFor,
                v = {};
            e.data(n, "flexslider", s), v = {
                init: function() {
                    s.animating = !1, s.currentSlide = parseInt(s.vars.startAt ? s.vars.startAt : 0, 10), isNaN(s.currentSlide) && (s.currentSlide = 0), s.animatingTo = s.currentSlide, s.atEnd = 0 === s.currentSlide || s.currentSlide === s.last, s.containerSelector = s.vars.selector.substr(0, s.vars.selector.search(" ")), s.slides = e(s.vars.selector, s), s.container = e(s.containerSelector, s), s.count = s.slides.length, s.syncExists = e(s.vars.sync).length > 0, "slide" === s.vars.animation && (s.vars.animation = "swing"), s.prop = p ? "top" : "marginLeft", s.args = {}, s.manualPause = !1, s.stopped = !1, s.started = !1, s.startTimeout = null, s.transitions = !s.vars.video && !h && s.vars.useCSS && function() {
                        var e = document.createElement("div"),
                            t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                        for (var n in t)
                            if (void 0 !== e.style[t[n]]) return s.pfx = t[n].replace("Perspective", "").toLowerCase(), s.prop = "-" + s.pfx + "-transform", !0;
                        return !1
                    }(), s.ensureAnimationEnd = "", "" !== s.vars.controlsContainer && (s.controlsContainer = e(s.vars.controlsContainer).length > 0 && e(s.vars.controlsContainer)), "" !== s.vars.manualControls && (s.manualControls = e(s.vars.manualControls).length > 0 && e(s.vars.manualControls)), "" !== s.vars.customDirectionNav && (s.customDirectionNav = 2 === e(s.vars.customDirectionNav).length && e(s.vars.customDirectionNav)), s.vars.randomize && (s.slides.sort(function() {
                        return Math.round(Math.random()) - .5
                    }), s.container.empty().append(s.slides)), s.doMath(), s.setup("init"), s.vars.controlNav && v.controlNav.setup(), s.vars.directionNav && v.directionNav.setup(), s.vars.keyboard && (1 === e(s.containerSelector).length || s.vars.multipleKeyboard) && e(document).bind("keyup", function(e) {
                        var t = e.keyCode;
                        if (!s.animating && (39 === t || 37 === t)) {
                            var n = 39 === t ? s.getTarget("next") : 37 === t ? s.getTarget("prev") : !1;
                            s.flexAnimate(n, s.vars.pauseOnAction)
                        }
                    }), s.vars.mousewheel && s.bind("mousewheel", function(e, t) {
                        e.preventDefault();
                        var n = 0 > t ? s.getTarget("next") : s.getTarget("prev");
                        s.flexAnimate(n, s.vars.pauseOnAction)
                    }), s.vars.pausePlay && v.pausePlay.setup(), s.vars.slideshow && s.vars.pauseInvisible && v.pauseInvisible.init(), s.vars.slideshow && (s.vars.pauseOnHover && s.hover(function() {
                        s.manualPlay || s.manualPause || s.pause()
                    }, function() {
                        s.manualPause || s.manualPlay || s.stopped || s.play()
                    }), s.vars.pauseInvisible && v.pauseInvisible.isHidden() || (s.vars.initDelay > 0 ? s.startTimeout = setTimeout(s.play, s.vars.initDelay) : s.play())), m && v.asNav.setup(), l && s.vars.touch && v.touch(), (!h || h && s.vars.smoothHeight) && e(window).bind("resize orientationchange focus", v.resize), s.find("img").attr("draggable", "false"), setTimeout(function() {
                        s.vars.start(s)
                    }, 200)
                },
                asNav: {
                    setup: function() {
                        s.asNav = !0, s.animatingTo = Math.floor(s.currentSlide / s.move), s.currentItem = s.currentSlide, s.slides.removeClass(r + "active-slide").eq(s.currentItem).addClass(r + "active-slide"), o ? (n._slider = s, s.slides.each(function() {
                            var t = this;
                            t._gesture = new MSGesture, t._gesture.target = t, t.addEventListener("MSPointerDown", function(e) {
                                e.preventDefault(), e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId)
                            }, !1), t.addEventListener("MSGestureTap", function(t) {
                                t.preventDefault();
                                var n = e(this),
                                    i = n.index();
                                e(s.vars.asNavFor).data("flexslider").animating || n.hasClass("active") || (s.direction = s.currentItem < i ? "next" : "prev", s.flexAnimate(i, s.vars.pauseOnAction, !1, !0, !0))
                            })
                        })) : s.slides.on(c, function(t) {
                            t.preventDefault();
                            var n = e(this),
                                i = n.index(),
                                a = n.offset().left - e(s).scrollLeft();
                            0 >= a && n.hasClass(r + "active-slide") ? s.flexAnimate(s.getTarget("prev"), !0) : e(s.vars.asNavFor).data("flexslider").animating || n.hasClass(r + "active-slide") || (s.direction = s.currentItem < i ? "next" : "prev", s.flexAnimate(i, s.vars.pauseOnAction, !1, !0, !0))
                        })
                    }
                },
                controlNav: {
                    setup: function() {
                        s.manualControls ? v.controlNav.setupManual() : v.controlNav.setupPaging()
                    },
                    setupPaging: function() {
                        var t, n, i = "thumbnails" === s.vars.controlNav ? "control-thumbs" : "control-paging",
                            a = 1;
                        if (s.controlNavScaffold = e('<ol class="' + r + "control-nav " + r + i + '"></ol>'), s.pagingCount > 1)
                            for (var o = 0; o < s.pagingCount; o++) {
                                if (n = s.slides.eq(o), void 0 === n.attr("data-thumb-alt") && n.attr("data-thumb-alt", ""), altText = "" !== n.attr("data-thumb-alt") ? altText = ' alt="' + n.attr("data-thumb-alt") + '"' : "", t = "thumbnails" === s.vars.controlNav ? '<img src="' + n.attr("data-thumb") + '"' + altText + "/>" : '<a href="#">' + a + "</a>", "thumbnails" === s.vars.controlNav && !0 === s.vars.thumbCaptions) {
                                    var l = n.attr("data-thumbcaption");
                                    "" !== l && void 0 !== l && (t += '<span class="' + r + 'caption">' + l + "</span>")
                                }
                                s.controlNavScaffold.append("<li>" + t + "</li>"), a++
                            }
                        s.controlsContainer ? e(s.controlsContainer).append(s.controlNavScaffold) : s.append(s.controlNavScaffold), v.controlNav.set(), v.controlNav.active(), s.controlNavScaffold.delegate("a, img", c, function(t) {
                            if (t.preventDefault(), "" === d || d === t.type) {
                                var n = e(this),
                                    i = s.controlNav.index(n);
                                n.hasClass(r + "active") || (s.direction = i > s.currentSlide ? "next" : "prev", s.flexAnimate(i, s.vars.pauseOnAction))
                            }
                            "" === d && (d = t.type), v.setToClearWatchedEvent()
                        })
                    },
                    setupManual: function() {
                        s.controlNav = s.manualControls, v.controlNav.active(), s.controlNav.bind(c, function(t) {
                            if (t.preventDefault(), "" === d || d === t.type) {
                                var n = e(this),
                                    i = s.controlNav.index(n);
                                n.hasClass(r + "active") || (i > s.currentSlide ? s.direction = "next" : s.direction = "prev", s.flexAnimate(i, s.vars.pauseOnAction))
                            }
                            "" === d && (d = t.type), v.setToClearWatchedEvent()
                        })
                    },
                    set: function() {
                        var t = "thumbnails" === s.vars.controlNav ? "img" : "a";
                        s.controlNav = e("." + r + "control-nav li " + t, s.controlsContainer ? s.controlsContainer : s)
                    },
                    active: function() {
                        s.controlNav.removeClass(r + "active").eq(s.animatingTo).addClass(r + "active")
                    },
                    update: function(t, n) {
                        s.pagingCount > 1 && "add" === t ? s.controlNavScaffold.append(e('<li><a href="#">' + s.count + "</a></li>")) : 1 === s.pagingCount ? s.controlNavScaffold.find("li").remove() : s.controlNav.eq(n).closest("li").remove(), v.controlNav.set(), s.pagingCount > 1 && s.pagingCount !== s.controlNav.length ? s.update(n, t) : v.controlNav.active()
                    }
                },
                directionNav: {
                    setup: function() {
                        var t = e('<ul class="' + r + 'direction-nav"><li class="' + r + 'nav-prev"><a class="' + r + 'prev" href="#">' + s.vars.prevText + '</a></li><li class="' + r + 'nav-next"><a class="' + r + 'next" href="#">' + s.vars.nextText + "</a></li></ul>");
                        s.customDirectionNav ? s.directionNav = s.customDirectionNav : s.controlsContainer ? (e(s.controlsContainer).append(t), s.directionNav = e("." + r + "direction-nav li a", s.controlsContainer)) : (s.append(t), s.directionNav = e("." + r + "direction-nav li a", s)), v.directionNav.update(), s.directionNav.bind(c, function(t) {
                            t.preventDefault();
                            var n;
                            ("" === d || d === t.type) && (n = e(this).hasClass(r + "next") ? s.getTarget("next") : s.getTarget("prev"), s.flexAnimate(n, s.vars.pauseOnAction)), "" === d && (d = t.type), v.setToClearWatchedEvent()
                        })
                    },
                    update: function() {
                        var e = r + "disabled";
                        1 === s.pagingCount ? s.directionNav.addClass(e).attr("tabindex", "-1") : s.vars.animationLoop ? s.directionNav.removeClass(e).removeAttr("tabindex") : 0 === s.animatingTo ? s.directionNav.removeClass(e).filter("." + r + "prev").addClass(e).attr("tabindex", "-1") : s.animatingTo === s.last ? s.directionNav.removeClass(e).filter("." + r + "next").addClass(e).attr("tabindex", "-1") : s.directionNav.removeClass(e).removeAttr("tabindex")
                    }
                },
                pausePlay: {
                    setup: function() {
                        var t = e('<div class="' + r + 'pauseplay"><a href="#"></a></div>');
                        s.controlsContainer ? (s.controlsContainer.append(t), s.pausePlay = e("." + r + "pauseplay a", s.controlsContainer)) : (s.append(t), s.pausePlay = e("." + r + "pauseplay a", s)), v.pausePlay.update(s.vars.slideshow ? r + "pause" : r + "play"), s.pausePlay.bind(c, function(t) {
                            t.preventDefault(), ("" === d || d === t.type) && (e(this).hasClass(r + "pause") ? (s.manualPause = !0, s.manualPlay = !1, s.pause()) : (s.manualPause = !1, s.manualPlay = !0, s.play())), "" === d && (d = t.type), v.setToClearWatchedEvent()
                        })
                    },
                    update: function(e) {
                        "play" === e ? s.pausePlay.removeClass(r + "pause").addClass(r + "play").html(s.vars.playText) : s.pausePlay.removeClass(r + "play").addClass(r + "pause").html(s.vars.pauseText)
                    }
                },
                touch: function() {
                    function e(e) {
                        e.stopPropagation(), s.animating ? e.preventDefault() : (s.pause(), n._gesture.addPointer(e.pointerId), x = 0, c = p ? s.h : s.w, m = Number(new Date), l = f && u && s.animatingTo === s.last ? 0 : f && u ? s.limit - (s.itemW + s.vars.itemMargin) * s.move * s.animatingTo : f && s.currentSlide === s.last ? s.limit : f ? (s.itemW + s.vars.itemMargin) * s.move * s.currentSlide : u ? (s.last - s.currentSlide + s.cloneOffset) * c : (s.currentSlide + s.cloneOffset) * c)
                    }

                    function t(e) {
                        e.stopPropagation();
                        var t = e.target._slider;
                        if (t) {
                            var i = -e.translationX,
                                s = -e.translationY;
                            return x += p ? s : i, d = x, y = p ? Math.abs(x) < Math.abs(-i) : Math.abs(x) < Math.abs(-s), e.detail === e.MSGESTURE_FLAG_INERTIA ? void setImmediate(function() {
                                n._gesture.stop()
                            }) : void((!y || Number(new Date) - m > 500) && (e.preventDefault(), !h && t.transitions && (t.vars.animationLoop || (d = x / (0 === t.currentSlide && 0 > x || t.currentSlide === t.last && x > 0 ? Math.abs(x) / c + 2 : 1)), t.setProps(l + d, "setTouch"))))
                        }
                    }

                    function i(e) {
                        e.stopPropagation();
                        var t = e.target._slider;
                        if (t) {
                            if (t.animatingTo === t.currentSlide && !y && null !== d) {
                                var n = u ? -d : d,
                                    i = n > 0 ? t.getTarget("next") : t.getTarget("prev");
                                t.canAdvance(i) && (Number(new Date) - m < 550 && Math.abs(n) > 50 || Math.abs(n) > c / 2) ? t.flexAnimate(i, t.vars.pauseOnAction) : h || t.flexAnimate(t.currentSlide, t.vars.pauseOnAction, !0)
                            }
                            a = null, r = null, d = null, l = null, x = 0
                        }
                    }
                    var a, r, l, c, d, m, v, g, b, y = !1,
                        w = 0,
                        _ = 0,
                        x = 0;
                    o ? (n.style.msTouchAction = "none", n._gesture = new MSGesture, n._gesture.target = n, n.addEventListener("MSPointerDown", e, !1), n._slider = s, n.addEventListener("MSGestureChange", t, !1), n.addEventListener("MSGestureEnd", i, !1)) : (v = function(e) {
                        s.animating ? e.preventDefault() : (window.navigator.msPointerEnabled || 1 === e.touches.length) && (s.pause(), c = p ? s.h : s.w, m = Number(new Date), w = e.touches[0].pageX, _ = e.touches[0].pageY, l = f && u && s.animatingTo === s.last ? 0 : f && u ? s.limit - (s.itemW + s.vars.itemMargin) * s.move * s.animatingTo : f && s.currentSlide === s.last ? s.limit : f ? (s.itemW + s.vars.itemMargin) * s.move * s.currentSlide : u ? (s.last - s.currentSlide + s.cloneOffset) * c : (s.currentSlide + s.cloneOffset) * c, a = p ? _ : w, r = p ? w : _, n.addEventListener("touchmove", g, !1), n.addEventListener("touchend", b, !1))
                    }, g = function(e) {
                        w = e.touches[0].pageX, _ = e.touches[0].pageY, d = p ? a - _ : a - w, y = p ? Math.abs(d) < Math.abs(w - r) : Math.abs(d) < Math.abs(_ - r);
                        var t = 500;
                        (!y || Number(new Date) - m > t) && (e.preventDefault(), !h && s.transitions && (s.vars.animationLoop || (d /= 0 === s.currentSlide && 0 > d || s.currentSlide === s.last && d > 0 ? Math.abs(d) / c + 2 : 1), s.setProps(l + d, "setTouch")))
                    }, b = function() {
                        if (n.removeEventListener("touchmove", g, !1), s.animatingTo === s.currentSlide && !y && null !== d) {
                            var e = u ? -d : d,
                                t = e > 0 ? s.getTarget("next") : s.getTarget("prev");
                            s.canAdvance(t) && (Number(new Date) - m < 550 && Math.abs(e) > 50 || Math.abs(e) > c / 2) ? s.flexAnimate(t, s.vars.pauseOnAction) : h || s.flexAnimate(s.currentSlide, s.vars.pauseOnAction, !0)
                        }
                        n.removeEventListener("touchend", b, !1), a = null, r = null, d = null, l = null
                    }, n.addEventListener("touchstart", v, !1))
                },
                resize: function() {
                    !s.animating && s.is(":visible") && (f || s.doMath(), h ? v.smoothHeight() : f ? (s.slides.width(s.computedW), s.update(s.pagingCount), s.setProps()) : p ? (s.viewport.height(s.h), s.setProps(s.h, "setTotal")) : (s.vars.smoothHeight && v.smoothHeight(), s.newSlides.width(s.computedW), s.setProps(s.computedW, "setTotal")))
                },
                smoothHeight: function(e) {
                    if (!p || h) {
                        var t = h ? s : s.viewport;
                        e ? t.animate({
                            height: s.slides.eq(s.animatingTo).height()
                        }, e) : t.height(s.slides.eq(s.animatingTo).height())
                    }
                },
                sync: function(t) {
                    var n = e(s.vars.sync).data("flexslider"),
                        i = s.animatingTo;
                    switch (t) {
                        case "animate":
                            n.flexAnimate(i, s.vars.pauseOnAction, !1, !0);
                            break;
                        case "play":
                            n.playing || n.asNav || n.play();
                            break;
                        case "pause":
                            n.pause()
                    }
                },
                uniqueID: function(t) {
                    return t.filter("[id]").add(t.find("[id]")).each(function() {
                        var t = e(this);
                        t.attr("id", t.attr("id") + "_clone")
                    }), t
                },
                pauseInvisible: {
                    visProp: null,
                    init: function() {
                        var e = v.pauseInvisible.getHiddenProp();
                        if (e) {
                            var t = e.replace(/[H|h]idden/, "") + "visibilitychange";
                            document.addEventListener(t, function() {
                                v.pauseInvisible.isHidden() ? s.startTimeout ? clearTimeout(s.startTimeout) : s.pause() : s.started ? s.play() : s.vars.initDelay > 0 ? setTimeout(s.play, s.vars.initDelay) : s.play()
                            })
                        }
                    },
                    isHidden: function() {
                        var e = v.pauseInvisible.getHiddenProp();
                        return e ? document[e] : !1
                    },
                    getHiddenProp: function() {
                        var e = ["webkit", "moz", "ms", "o"];
                        if ("hidden" in document) return "hidden";
                        for (var t = 0; t < e.length; t++)
                            if (e[t] + "Hidden" in document) return e[t] + "Hidden";
                        return null
                    }
                },
                setToClearWatchedEvent: function() {
                    clearTimeout(a), a = setTimeout(function() {
                        d = ""
                    }, 3e3)
                }
            }, s.flexAnimate = function(t, n, i, a, o) {
                if (s.vars.animationLoop || t === s.currentSlide || (s.direction = t > s.currentSlide ? "next" : "prev"), m && 1 === s.pagingCount && (s.direction = s.currentItem < t ? "next" : "prev"), !s.animating && (s.canAdvance(t, o) || i) && s.is(":visible")) {
                    if (m && a) {
                        var c = e(s.vars.asNavFor).data("flexslider");
                        if (s.atEnd = 0 === t || t === s.count - 1, c.flexAnimate(t, !0, !1, !0, o), s.direction = s.currentItem < t ? "next" : "prev", c.direction = s.direction, Math.ceil((t + 1) / s.visible) - 1 === s.currentSlide || 0 === t) return s.currentItem = t, s.slides.removeClass(r + "active-slide").eq(t).addClass(r + "active-slide"), !1;
                        s.currentItem = t, s.slides.removeClass(r + "active-slide").eq(t).addClass(r + "active-slide"), t = Math.floor(t / s.visible)
                    }
                    if (s.animating = !0, s.animatingTo = t, n && s.pause(), s.vars.before(s), s.syncExists && !o && v.sync("animate"), s.vars.controlNav && v.controlNav.active(), f || s.slides.removeClass(r + "active-slide").eq(t).addClass(r + "active-slide"), s.atEnd = 0 === t || t === s.last, s.vars.directionNav && v.directionNav.update(), t === s.last && (s.vars.end(s), s.vars.animationLoop || s.pause()), h) l ? (s.slides.eq(s.currentSlide).css({
                        opacity: 0,
                        zIndex: 1
                    }), s.slides.eq(t).css({
                        opacity: 1,
                        zIndex: 2
                    }), s.wrapup(y)) : (s.slides.eq(s.currentSlide).css({
                        zIndex: 1
                    }).animate({
                        opacity: 0
                    }, s.vars.animationSpeed, s.vars.easing), s.slides.eq(t).css({
                        zIndex: 2
                    }).animate({
                        opacity: 1
                    }, s.vars.animationSpeed, s.vars.easing, s.wrapup));
                    else {
                        var d, g, b, y = p ? s.slides.filter(":first").height() : s.computedW;
                        f ? (d = s.vars.itemMargin, b = (s.itemW + d) * s.move * s.animatingTo, g = b > s.limit && 1 !== s.visible ? s.limit : b) : g = 0 === s.currentSlide && t === s.count - 1 && s.vars.animationLoop && "next" !== s.direction ? u ? (s.count + s.cloneOffset) * y : 0 : s.currentSlide === s.last && 0 === t && s.vars.animationLoop && "prev" !== s.direction ? u ? 0 : (s.count + 1) * y : u ? (s.count - 1 - t + s.cloneOffset) * y : (t + s.cloneOffset) * y, s.setProps(g, "", s.vars.animationSpeed), s.transitions ? (s.vars.animationLoop && s.atEnd || (s.animating = !1, s.currentSlide = s.animatingTo), s.container.unbind("webkitTransitionEnd transitionend"), s.container.bind("webkitTransitionEnd transitionend", function() {
                            clearTimeout(s.ensureAnimationEnd), s.wrapup(y)
                        }), clearTimeout(s.ensureAnimationEnd), s.ensureAnimationEnd = setTimeout(function() {
                            s.wrapup(y)
                        }, s.vars.animationSpeed + 100)) : s.container.animate(s.args, s.vars.animationSpeed, s.vars.easing, function() {
                            s.wrapup(y)
                        })
                    }
                    s.vars.smoothHeight && v.smoothHeight(s.vars.animationSpeed)
                }
            }, s.wrapup = function(e) {
                h || f || (0 === s.currentSlide && s.animatingTo === s.last && s.vars.animationLoop ? s.setProps(e, "jumpEnd") : s.currentSlide === s.last && 0 === s.animatingTo && s.vars.animationLoop && s.setProps(e, "jumpStart")), s.animating = !1, s.currentSlide = s.animatingTo, s.vars.after(s)
            }, s.animateSlides = function() {
                !s.animating && t && s.flexAnimate(s.getTarget("next"))
            }, s.pause = function() {
                clearInterval(s.animatedSlides), s.animatedSlides = null, s.playing = !1, s.vars.pausePlay && v.pausePlay.update("play"), s.syncExists && v.sync("pause")
            }, s.play = function() {
                s.playing && clearInterval(s.animatedSlides), s.animatedSlides = s.animatedSlides || setInterval(s.animateSlides, s.vars.slideshowSpeed), s.started = s.playing = !0, s.vars.pausePlay && v.pausePlay.update("pause"), s.syncExists && v.sync("play")
            }, s.stop = function() {
                s.pause(), s.stopped = !0
            }, s.canAdvance = function(e, t) {
                var n = m ? s.pagingCount - 1 : s.last;
                return t ? !0 : m && s.currentItem === s.count - 1 && 0 === e && "prev" === s.direction ? !0 : m && 0 === s.currentItem && e === s.pagingCount - 1 && "next" !== s.direction ? !1 : e !== s.currentSlide || m ? s.vars.animationLoop ? !0 : s.atEnd && 0 === s.currentSlide && e === n && "next" !== s.direction ? !1 : !s.atEnd || s.currentSlide !== n || 0 !== e || "next" !== s.direction : !1
            }, s.getTarget = function(e) {
                return s.direction = e, "next" === e ? s.currentSlide === s.last ? 0 : s.currentSlide + 1 : 0 === s.currentSlide ? s.last : s.currentSlide - 1
            }, s.setProps = function(e, t, n) {
                var i = function() {
                    var n = e ? e : (s.itemW + s.vars.itemMargin) * s.move * s.animatingTo,
                        i = function() {
                            if (f) return "setTouch" === t ? e : u && s.animatingTo === s.last ? 0 : u ? s.limit - (s.itemW + s.vars.itemMargin) * s.move * s.animatingTo : s.animatingTo === s.last ? s.limit : n;
                            switch (t) {
                                case "setTotal":
                                    return u ? (s.count - 1 - s.currentSlide + s.cloneOffset) * e : (s.currentSlide + s.cloneOffset) * e;
                                case "setTouch":
                                    return u ? e : e;
                                case "jumpEnd":
                                    return u ? e : s.count * e;
                                case "jumpStart":
                                    return u ? s.count * e : e;
                                default:
                                    return e
                            }
                        }();
                    return -1 * i + "px"
                }();
                s.transitions && (i = p ? "translate3d(0," + i + ",0)" : "translate3d(" + i + ",0,0)", n = void 0 !== n ? n / 1e3 + "s" : "0s", s.container.css("-" + s.pfx + "-transition-duration", n), s.container.css("transition-duration", n)), s.args[s.prop] = i, (s.transitions || void 0 === n) && s.container.css(s.args), s.container.css("transform", i)
            }, s.setup = function(t) {
                if (h) s.slides.css({
                    width: "100%",
                    "float": "left",
                    marginRight: "-100%",
                    position: "relative"
                }), "init" === t && (l ? s.slides.css({
                    opacity: 0,
                    display: "block",
                    webkitTransition: "opacity " + s.vars.animationSpeed / 1e3 + "s ease",
                    zIndex: 1
                }).eq(s.currentSlide).css({
                    opacity: 1,
                    zIndex: 2
                }) : 0 == s.vars.fadeFirstSlide ? s.slides.css({
                    opacity: 0,
                    display: "block",
                    zIndex: 1
                }).eq(s.currentSlide).css({
                    zIndex: 2
                }).css({
                    opacity: 1
                }) : s.slides.css({
                    opacity: 0,
                    display: "block",
                    zIndex: 1
                }).eq(s.currentSlide).css({
                    zIndex: 2
                }).animate({
                    opacity: 1
                }, s.vars.animationSpeed, s.vars.easing)), s.vars.smoothHeight && v.smoothHeight();
                else {
                    var n, i;
                    "init" === t && (s.viewport = e('<div class="' + r + 'viewport"></div>').css({
                        overflow: "hidden",
                        position: "relative"
                    }).appendTo(s).append(s.container), s.cloneCount = 0, s.cloneOffset = 0, u && (i = e.makeArray(s.slides).reverse(), s.slides = e(i), s.container.empty().append(s.slides))), s.vars.animationLoop && !f && (s.cloneCount = 2, s.cloneOffset = 1, "init" !== t && s.container.find(".clone").remove(), s.container.append(v.uniqueID(s.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(v.uniqueID(s.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), s.newSlides = e(s.vars.selector, s), n = u ? s.count - 1 - s.currentSlide + s.cloneOffset : s.currentSlide + s.cloneOffset, p && !f ? (s.container.height(200 * (s.count + s.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
                        s.newSlides.css({
                            display: "block"
                        }), s.doMath(), s.viewport.height(s.h), s.setProps(n * s.h, "init")
                    }, "init" === t ? 100 : 0)) : (s.container.width(200 * (s.count + s.cloneCount) + "%"), s.setProps(n * s.computedW, "init"), setTimeout(function() {
                        s.doMath(), s.newSlides.css({
                            width: s.computedW,
                            marginRight: s.computedM,
                            "float": "left",
                            display: "block"
                        }), s.vars.smoothHeight && v.smoothHeight()
                    }, "init" === t ? 100 : 0))
                }
                f || s.slides.removeClass(r + "active-slide").eq(s.currentSlide).addClass(r + "active-slide"), s.vars.init(s)
            }, s.doMath = function() {
                var e = s.slides.first(),
                    t = s.vars.itemMargin,
                    n = s.vars.minItems,
                    i = s.vars.maxItems;
                s.w = void 0 === s.viewport ? s.width() : s.viewport.width(), s.h = e.height(), s.boxPadding = e.outerWidth() - e.width(), f ? (s.itemT = s.vars.itemWidth + t, s.itemM = t, s.minW = n ? n * s.itemT : s.w, s.maxW = i ? i * s.itemT - t : s.w, s.itemW = s.minW > s.w ? (s.w - t * (n - 1)) / n : s.maxW < s.w ? (s.w - t * (i - 1)) / i : s.vars.itemWidth > s.w ? s.w : s.vars.itemWidth, s.visible = Math.floor(s.w / s.itemW), s.move = s.vars.move > 0 && s.vars.move < s.visible ? s.vars.move : s.visible, s.pagingCount = Math.ceil((s.count - s.visible) / s.move + 1), s.last = s.pagingCount - 1, s.limit = 1 === s.pagingCount ? 0 : s.vars.itemWidth > s.w ? s.itemW * (s.count - 1) + t * (s.count - 1) : (s.itemW + t) * s.count - s.w - t) : (s.itemW = s.w, s.itemM = t, s.pagingCount = s.count, s.last = s.count - 1), s.computedW = s.itemW - s.boxPadding, s.computedM = s.itemM
            }, s.update = function(e, t) {
                s.doMath(), f || (e < s.currentSlide ? s.currentSlide += 1 : e <= s.currentSlide && 0 !== e && (s.currentSlide -= 1), s.animatingTo = s.currentSlide), s.vars.controlNav && !s.manualControls && ("add" === t && !f || s.pagingCount > s.controlNav.length ? v.controlNav.update("add") : ("remove" === t && !f || s.pagingCount < s.controlNav.length) && (f && s.currentSlide > s.last && (s.currentSlide -= 1, s.animatingTo -= 1), v.controlNav.update("remove", s.last))), s.vars.directionNav && v.directionNav.update()
            }, s.addSlide = function(t, n) {
                var i = e(t);
                s.count += 1, s.last = s.count - 1, p && u ? void 0 !== n ? s.slides.eq(s.count - n).after(i) : s.container.prepend(i) : void 0 !== n ? s.slides.eq(n).before(i) : s.container.append(i), s.update(n, "add"), s.slides = e(s.vars.selector + ":not(.clone)", s), s.setup(), s.vars.added(s)
            }, s.removeSlide = function(t) {
                var n = isNaN(t) ? s.slides.index(e(t)) : t;
                s.count -= 1, s.last = s.count - 1, isNaN(t) ? e(t, s.slides).remove() : p && u ? s.slides.eq(s.last).remove() : s.slides.eq(t).remove(), s.doMath(), s.update(n, "remove"), s.slides = e(s.vars.selector + ":not(.clone)", s), s.setup(), s.vars.removed(s)
            }, v.init()
        }, e(window).blur(function() {
            t = !1
        }).focus(function() {
            t = !0
        }), e.flexslider.defaults = {
            namespace: "flex-",
            selector: ".slides > li",
            animation: "fade",
            easing: "swing",
            direction: "horizontal",
            reverse: !1,
            animationLoop: !0,
            smoothHeight: !1,
            startAt: 0,
            slideshow: !0,
            slideshowSpeed: 7e3,
            animationSpeed: 600,
            initDelay: 0,
            randomize: !1,
            fadeFirstSlide: !0,
            thumbCaptions: !1,
            pauseOnAction: !0,
            pauseOnHover: !1,
            pauseInvisible: !0,
            useCSS: !0,
            touch: !0,
            video: !1,
            controlNav: !0,
            directionNav: !0,
            prevText: "Previous",
            nextText: "Next",
            keyboard: !0,
            multipleKeyboard: !1,
            mousewheel: !1,
            pausePlay: !1,
            pauseText: "Pause",
            playText: "Play",
            controlsContainer: "",
            manualControls: "",
            customDirectionNav: "",
            sync: "",
            asNavFor: "",
            itemWidth: 0,
            itemMargin: 0,
            minItems: 1,
            maxItems: 0,
            move: 0,
            allowOneSlide: !0,
            start: function() {},
            before: function() {},
            after: function() {},
            end: function() {},
            added: function() {},
            removed: function() {},
            init: function() {}
        }, e.fn.flexslider = function(t) {
            if (void 0 === t && (t = {}), "object" == typeof t) return this.each(function() {
                var n = e(this),
                    i = t.selector ? t.selector : ".slides > li",
                    s = n.find(i);
                1 === s.length && t.allowOneSlide === !0 || 0 === s.length ? (s.fadeIn(400), t.start && t.start(n)) : void 0 === n.data("flexslider") && new e.flexslider(this, t)
            });
            var n = e(this).data("flexslider");
            switch (t) {
                case "play":
                    n.play();
                    break;
                case "pause":
                    n.pause();
                    break;
                case "stop":
                    n.stop();
                    break;
                case "next":
                    n.flexAnimate(n.getTarget("next"), !0);
                    break;
                case "prev":
                case "previous":
                    n.flexAnimate(n.getTarget("prev"), !0);
                    break;
                default:
                    "number" == typeof t && n.flexAnimate(t, !0)
            }
        }
    }(jQuery);
    /*this.screenshotPreview = function() {
        xOffset = 10, yOffset = 30, $("a.preview").hover(function(e) {
            this.t = this.title, this.title = "";
            var t = "" != this.t ? "<br/>" + this.t : "";
            $("body").append("<p id='screenshot'><img src='" + this.rel + "' alt='url preview' />" + t + "</p>"), $("#screenshot").css("top", e.pageY - xOffset + "px").css("left", e.pageX + yOffset + "px").fadeIn("fast")
        }, function() {
            this.title = this.t, $("#screenshot").remove()
        }), $("a.screenshot").mousemove(function(e) {
            $("#screenshot").css("top", e.pageY - xOffset + "px").css("left", e.pageX + yOffset + "px")
        })
    }, $(document).ready(function() {
        screenshotPreview()
    })*/
