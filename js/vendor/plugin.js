// Avoid `console` errors in browsers that lack a console.
(function () {
	var method;
	var noop = function () {};
	var methods = [
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}
}());


/*! WOW - v1.1.3 - 2016-05-06
 * Copyright (c) 2016 Matthieu Aussaguel;*/
(function () {
	var a, b, c, d, e, f = function (a, b) {
			return function () {
				return a.apply(b, arguments)
			}
		},
		g = [].indexOf || function (a) {
			for (var b = 0, c = this.length; c > b; b++)
				if (b in this && this[b] === a) return b;
			return -1
		};
	b = function () {
		function a() {}
		return a.prototype.extend = function (a, b) {
			var c, d;
			for (c in b) d = b[c], null == a[c] && (a[c] = d);
			return a
		}, a.prototype.isMobile = function (a) {
			return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
		}, a.prototype.createEvent = function (a, b, c, d) {
			var e;
			return null == b && (b = !1), null == c && (c = !1), null == d && (d = null), null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e
		}, a.prototype.emitEvent = function (a, b) {
			return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0
		}, a.prototype.addEvent = function (a, b, c) {
			return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
		}, a.prototype.removeEvent = function (a, b, c) {
			return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
		}, a.prototype.innerHeight = function () {
			return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
		}, a
	}(), c = this.WeakMap || this.MozWeakMap || (c = function () {
		function a() {
			this.keys = [], this.values = []
		}
		return a.prototype.get = function (a) {
			var b, c, d, e, f;
			for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
				if (c = f[b], c === a) return this.values[b]
		}, a.prototype.set = function (a, b) {
			var c, d, e, f, g;
			for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
				if (d = g[c], d === a) return void(this.values[c] = b);
			return this.keys.push(a), this.values.push(b)
		}, a
	}()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function () {
		function a() {
			"undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
		}
		return a.notSupported = !0, a.prototype.observe = function () {}, a
	}()), d = this.getComputedStyle || function (a, b) {
		return this.getPropertyValue = function (b) {
			var c;
			return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function (a, b) {
				return b.toUpperCase()
			}), (null != (c = a.currentStyle) ? c[b] : void 0) || null
		}, this
	}, e = /(\-([a-z]){1})/g, this.WOW = function () {
		function e(a) {
			null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.resetAnimation = f(this.resetAnimation, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), null != a.scrollContainer && (this.config.scrollContainer = document.querySelector(a.scrollContainer)), this.animationNameCache = new c, this.wowEvent = this.util().createEvent(this.config.boxClass)
		}
		return e.prototype.defaults = {
			boxClass: "wow",
			animateClass: "animated",
			offset: 0,
			mobile: !0,
			live: !0,
			callback: null,
			scrollContainer: null
		}, e.prototype.init = function () {
			var a;
			return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
		}, e.prototype.start = function () {
			var b, c, d, e;
			if (this.stopped = !1, this.boxes = function () {
					var a, c, d, e;
					for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
					return e
				}.call(this), this.all = function () {
					var a, c, d, e;
					for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
					return e
				}.call(this), this.boxes.length)
				if (this.disabled()) this.resetStyle();
				else
					for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(b, !0);
			return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function (a) {
				return function (b) {
					var c, d, e, f, g;
					for (g = [], c = 0, d = b.length; d > c; c++) f = b[c], g.push(function () {
						var a, b, c, d;
						for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++) e = c[a], d.push(this.doSync(e));
						return d
					}.call(a));
					return g
				}
			}(this)).observe(document.body, {
				childList: !0,
				subtree: !0
			}) : void 0
		}, e.prototype.stop = function () {
			return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
		}, e.prototype.sync = function (b) {
			return a.notSupported ? this.doSync(this.element) : void 0
		}, e.prototype.doSync = function (a) {
			var b, c, d, e, f;
			if (null == a && (a = this.element), 1 === a.nodeType) {
				for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++) b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0);
				return f
			}
		}, e.prototype.show = function (a) {
			return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a, "animationend", this.resetAnimation), this.util().addEvent(a, "oanimationend", this.resetAnimation), this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation), a
		}, e.prototype.applyStyle = function (a, b) {
			var c, d, e;
			return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function (f) {
				return function () {
					return f.customStyle(a, b, d, c, e)
				}
			}(this))
		}, e.prototype.animate = function () {
			return "requestAnimationFrame" in window ? function (a) {
				return window.requestAnimationFrame(a)
			} : function (a) {
				return a()
			}
		}(), e.prototype.resetStyle = function () {
			var a, b, c, d, e;
			for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.style.visibility = "visible");
			return e
		}, e.prototype.resetAnimation = function (a) {
			var b;
			return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement, b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0
		}, e.prototype.customStyle = function (a, b, c, d, e) {
			return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {
				animationDuration: c
			}), d && this.vendorSet(a.style, {
				animationDelay: d
			}), e && this.vendorSet(a.style, {
				animationIterationCount: e
			}), this.vendorSet(a.style, {
				animationName: b ? "none" : this.cachedAnimationName(a)
			}), a
		}, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function (a, b) {
			var c, d, e, f;
			d = [];
			for (c in b) e = b[c], a["" + c] = e, d.push(function () {
				var b, d, g, h;
				for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++) f = g[b], h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);
				return h
			}.call(this));
			return d
		}, e.prototype.vendorCSS = function (a, b) {
			var c, e, f, g, h, i;
			for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++) i = f[c], g = g || h.getPropertyCSSValue("-" + i + "-" + b);
			return g
		}, e.prototype.animationName = function (a) {
			var b;
			try {
				b = this.vendorCSS(a, "animation-name").cssText
			} catch (c) {
				b = d(a).getPropertyValue("animation-name")
			}
			return "none" === b ? "" : b
		}, e.prototype.cacheAnimationName = function (a) {
			return this.animationNameCache.set(a, this.animationName(a))
		}, e.prototype.cachedAnimationName = function (a) {
			return this.animationNameCache.get(a)
		}, e.prototype.scrollHandler = function () {
			return this.scrolled = !0
		}, e.prototype.scrollCallback = function () {
			var a;
			return !this.scrolled || (this.scrolled = !1, this.boxes = function () {
				var b, c, d, e;
				for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));
				return e
			}.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
		}, e.prototype.offsetTop = function (a) {
			for (var b; void 0 === a.offsetTop;) a = a.parentNode;
			for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop;
			return b
		}, e.prototype.isVisible = function (a) {
			var b, c, d, e, f;
			return c = a.getAttribute("data-wow-offset") || this.config.offset, f = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f
		}, e.prototype.util = function () {
			return null != this._util ? this._util : this._util = new b
		}, e.prototype.disabled = function () {
			return !this.config.mobile && this.util().isMobile(navigator.userAgent)
		}, e
	}()
}).call(this);


/**
 * Owl Carousel v2.3.2
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
! function (a, b, c, d) {
	function e(b, c) {
		this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		}, this._states = {
			current: {},
			tags: {
				initializing: ["busy"],
				animating: ["busy"],
				dragging: ["interacting"]
			}
		}, a.each(["onResize", "onThrottledResize"], a.proxy(function (b, c) {
			this._handlers[c] = a.proxy(this[c], this)
		}, this)), a.each(e.Plugins, a.proxy(function (a, b) {
			this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
		}, this)), a.each(e.Workers, a.proxy(function (b, c) {
			this._pipe.push({
				filter: c.filter,
				run: a.proxy(c.run, this)
			})
		}, this)), this.setup(), this.initialize()
	}
	e.Defaults = {
		items: 3,
		loop: !1,
		center: !1,
		rewind: !1,
		mouseDrag: !0,
		touchDrag: !0,
		pullDrag: !0,
		freeDrag: !1,
		margin: 0,
		stagePadding: 0,
		merge: !1,
		mergeFit: !0,
		autoWidth: !1,
		startPosition: 0,
		rtl: !1,
		smartSpeed: 250,
		fluidSpeed: !1,
		dragEndSpeed: !1,
		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: b,
		fallbackEasing: "swing",
		info: !1,
		nestedItemSelector: !1,
		itemElement: "div",
		stageElement: "div",
		refreshClass: "owl-refresh",
		loadedClass: "owl-loaded",
		loadingClass: "owl-loading",
		rtlClass: "owl-rtl",
		responsiveClass: "owl-responsive",
		dragClass: "owl-drag",
		itemClass: "owl-item",
		stageClass: "owl-stage",
		stageOuterClass: "owl-stage-outer",
		grabClass: "owl-grab"
	}, e.Width = {
		Default: "default",
		Inner: "inner",
		Outer: "outer"
	}, e.Type = {
		Event: "event",
		State: "state"
	}, e.Plugins = {}, e.Workers = [{
		filter: ["width", "settings"],
		run: function () {
			this._width = this.$element.width()
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function (a) {
			a.current = this._items && this._items[this.relative(this._current)]
		}
	}, {
		filter: ["items", "settings"],
		run: function () {
			this.$stage.children(".cloned").remove()
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function (a) {
			var b = this.settings.margin || "",
				c = !this.settings.autoWidth,
				d = this.settings.rtl,
				e = {
					width: "auto",
					"margin-left": d ? b : "",
					"margin-right": d ? "" : b
				};
			!c && this.$stage.children().css(e), a.css = e
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function (a) {
			var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
				c = null,
				d = this._items.length,
				e = !this.settings.autoWidth,
				f = [];
			for (a.items = {
					merge: !1,
					width: b
				}; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
			this._widths = f
		}
	}, {
		filter: ["items", "settings"],
		run: function () {
			var b = [],
				c = this._items,
				d = this.settings,
				e = Math.max(2 * d.items, 4),
				f = 2 * Math.ceil(c.length / 2),
				g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
				h = "",
				i = "";
			for (g /= 2; g > 0;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i, g -= 1;
			this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage)
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function () {
			for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
			this._coordinates = f
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function () {
			var a = this.settings.stagePadding,
				b = this._coordinates,
				c = {
					width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
					"padding-left": a || "",
					"padding-right": a || ""
				};
			this.$stage.css(c)
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function (a) {
			var b = this._coordinates.length,
				c = !this.settings.autoWidth,
				d = this.$stage.children();
			if (c && a.items.merge)
				for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
			else c && (a.css.width = a.items.width, d.css(a.css))
		}
	}, {
		filter: ["items"],
		run: function () {
			this._coordinates.length < 1 && this.$stage.removeAttr("style")
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function (a) {
			a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current)
		}
	}, {
		filter: ["position"],
		run: function () {
			this.animate(this.coordinates(this._current))
		}
	}, {
		filter: ["width", "position", "items", "settings"],
		run: function () {
			var a, b, c, d, e = this.settings.rtl ? 1 : -1,
				f = 2 * this.settings.stagePadding,
				g = this.coordinates(this.current()) + f,
				h = g + this.width() * e,
				i = [];
			for (c = 0, d = this._coordinates.length; c < d; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
			this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
		}
	}], e.prototype.initializeStage = function () {
		this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()))
	}, e.prototype.initializeItems = function () {
		var b = this.$element.find(".owl-item");
		if (b.length) return this._items = b.get().map(function (b) {
			return a(b)
		}), this._mergers = this._items.map(function () {
			return 1
		}), void this.refresh();
		this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
	}, e.prototype.initialize = function () {
		if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
			var a, b, c;
			a = this.$element.find("img"), b = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, c = this.$element.children(b).width(), a.length && c <= 0 && this.preloadAutoWidthImages(a)
		}
		this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
	}, e.prototype.isVisible = function () {
		return !this.settings.checkVisibility || this.$element.is(":visible")
	}, e.prototype.setup = function () {
		var b = this.viewport(),
			c = this.options.responsive,
			d = -1,
			e = null;
		c ? (a.each(c, function (a) {
			a <= b && a > d && (d = Number(a))
		}), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {
			property: {
				name: "settings",
				value: e
			}
		}), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
			property: {
				name: "settings",
				value: this.settings
			}
		})
	}, e.prototype.optionsLogic = function () {
		this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
	}, e.prototype.prepare = function (b) {
		var c = this.trigger("prepare", {
			content: b
		});
		return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {
			content: c.data
		}), c.data
	}, e.prototype.update = function () {
		for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) {
				return this[a]
			}, this._invalidated), e = {}; b < c;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
		this._invalidated = {}, !this.is("valid") && this.enter("valid")
	}, e.prototype.width = function (a) {
		switch (a = a || e.Width.Default) {
			case e.Width.Inner:
			case e.Width.Outer:
				return this._width;
			default:
				return this._width - 2 * this.settings.stagePadding + this.settings.margin
		}
	}, e.prototype.refresh = function () {
		this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
	}, e.prototype.onThrottledResize = function () {
		b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
	}, e.prototype.onResize = function () {
		return !!this._items.length && (this._width !== this.$element.width() && (!!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
	}, e.prototype.registerEventHandlers = function () {
		a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
			return !1
		})), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
	}, e.prototype.onDragStart = function (b) {
		var d = null;
		3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
			x: d[16 === d.length ? 12 : 4],
			y: d[16 === d.length ? 13 : 5]
		}) : (d = this.$stage.position(), d = {
			x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
			y: d.top
		}), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function (b) {
			var d = this.difference(this._drag.pointer, this.pointer(b));
			a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"))
		}, this)))
	}, e.prototype.onDragMove = function (a) {
		var b = null,
			c = null,
			d = null,
			e = this.difference(this._drag.pointer, this.pointer(a)),
			f = this.difference(this._drag.stage.start, e);
		this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x))
	}, e.prototype.onDragEnd = function (b) {
		var d = this.difference(this._drag.pointer, this.pointer(b)),
			e = this._drag.stage.current,
			f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
		a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
			return !1
		})), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
	}, e.prototype.closest = function (b, c) {
		var e = -1,
			f = 30,
			g = this.width(),
			h = this.coordinates();
		return this.settings.freeDrag || a.each(h, a.proxy(function (a, i) {
			return "left" === c && b > i - f && b < i + f ? e = a : "right" === c && b > i - g - f && b < i - g + f ? e = a + 1 : this.op(b, "<", i) && this.op(b, ">", h[a + 1] !== d ? h[a + 1] : i - g) && (e = "left" === c ? a + 1 : a), -1 === e
		}, this)), this.settings.loop || (this.op(b, ">", h[this.minimum()]) ? e = b = this.minimum() : this.op(b, "<", h[this.maximum()]) && (e = b = this.maximum())), e
	}, e.prototype.animate = function (b) {
		var c = this.speed() > 0;
		this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
			transform: "translate3d(" + b + "px,0px,0px)",
			transition: this.speed() / 1e3 + "s"
		}) : c ? this.$stage.animate({
			left: b + "px"
		}, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
			left: b + "px"
		})
	}, e.prototype.is = function (a) {
		return this._states.current[a] && this._states.current[a] > 0
	}, e.prototype.current = function (a) {
		if (a === d) return this._current;
		if (0 === this._items.length) return d;
		if (a = this.normalize(a), this._current !== a) {
			var b = this.trigger("change", {
				property: {
					name: "position",
					value: a
				}
			});
			b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
				property: {
					name: "position",
					value: this._current
				}
			})
		}
		return this._current
	}, e.prototype.invalidate = function (b) {
		return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function (a, b) {
			return b
		})
	}, e.prototype.reset = function (a) {
		(a = this.normalize(a)) !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
	}, e.prototype.normalize = function (a, b) {
		var c = this._items.length,
			e = b ? 0 : this._clones.length;
		return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a
	}, e.prototype.relative = function (a) {
		return a -= this._clones.length / 2, this.normalize(a, !0)
	}, e.prototype.maximum = function (a) {
		var b, c, d, e = this.settings,
			f = this._coordinates.length;
		if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
		else if (e.autoWidth || e.merge) {
			if (b = this._items.length)
				for (c = this._items[--b].width(), d = this.$element.width(); b-- && !((c += this._items[b].width() + this.settings.margin) > d););
			f = b + 1
		} else f = e.center ? this._items.length - 1 : this._items.length - e.items;
		return a && (f -= this._clones.length / 2), Math.max(f, 0)
	}, e.prototype.minimum = function (a) {
		return a ? 0 : this._clones.length / 2
	}, e.prototype.items = function (a) {
		return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
	}, e.prototype.mergers = function (a) {
		return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
	}, e.prototype.clones = function (b) {
		var c = this._clones.length / 2,
			e = c + this._items.length,
			f = function (a) {
				return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2
			};
		return b === d ? a.map(this._clones, function (a, b) {
			return f(b)
		}) : a.map(this._clones, function (a, c) {
			return a === b ? f(c) : null
		})
	}, e.prototype.speed = function (a) {
		return a !== d && (this._speed = a), this._speed
	}, e.prototype.coordinates = function (b) {
		var c, e = 1,
			f = b - 1;
		return b === d ? a.map(this._coordinates, a.proxy(function (a, b) {
			return this.coordinates(b)
		}, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c))
	}, e.prototype.duration = function (a, b, c) {
		return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
	}, e.prototype.to = function (a, b) {
		var c = this.current(),
			d = null,
			e = a - this.relative(c),
			f = (e > 0) - (e < 0),
			g = this._items.length,
			h = this.minimum(),
			i = this.maximum();
		this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g), a = c + e, (d = ((a - h) % g + g) % g + h) !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.isVisible() && this.update()
	}, e.prototype.next = function (a) {
		a = a || !1, this.to(this.relative(this.current()) + 1, a)
	}, e.prototype.prev = function (a) {
		a = a || !1, this.to(this.relative(this.current()) - 1, a)
	}, e.prototype.onTransitionEnd = function (a) {
		if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
		this.leave("animating"), this.trigger("translated")
	}, e.prototype.viewport = function () {
		var d;
		return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d
	}, e.prototype.replace = function (b) {
		this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function () {
			return 1 === this.nodeType
		}).each(a.proxy(function (a, b) {
			b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
		}, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
	}, e.prototype.add = function (b, c) {
		var e = this.relative(this._current);
		c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
			content: b,
			position: c
		}), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
			content: b,
			position: c
		})
	}, e.prototype.remove = function (a) {
		(a = this.normalize(a, !0)) !== d && (this.trigger("remove", {
			content: this._items[a],
			position: a
		}), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
			content: null,
			position: a
		}))
	}, e.prototype.preloadAutoWidthImages = function (b) {
		b.each(a.proxy(function (b, c) {
			this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function (a) {
				c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
			}, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
		}, this))
	}, e.prototype.destroy = function () {
		this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), !1 !== this.settings.responsive && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
		for (var d in this._plugins) this._plugins[d].destroy();
		this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
	}, e.prototype.op = function (a, b, c) {
		var d = this.settings.rtl;
		switch (b) {
			case "<":
				return d ? a > c : a < c;
			case ">":
				return d ? a < c : a > c;
			case ">=":
				return d ? a <= c : a >= c;
			case "<=":
				return d ? a >= c : a <= c
		}
	}, e.prototype.on = function (a, b, c, d) {
		a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
	}, e.prototype.off = function (a, b, c, d) {
		a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
	}, e.prototype.trigger = function (b, c, d, f, g) {
		var h = {
				item: {
					count: this._items.length,
					index: this.current()
				}
			},
			i = a.camelCase(a.grep(["on", b, d], function (a) {
				return a
			}).join("-").toLowerCase()),
			j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
				relatedTarget: this
			}, h, c));
		return this._supress[b] || (a.each(this._plugins, function (a, b) {
			b.onTrigger && b.onTrigger(j)
		}), this.register({
			type: e.Type.Event,
			name: b
		}), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j
	}, e.prototype.enter = function (b) {
		a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
			this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++
		}, this))
	}, e.prototype.leave = function (b) {
		a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
			this._states.current[b]--
		}, this))
	}, e.prototype.register = function (b) {
		if (b.type === e.Type.Event) {
			if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
				var c = a.event.special[b.name]._default;
				a.event.special[b.name]._default = function (a) {
					return !c || !c.apply || a.namespace && -1 !== a.namespace.indexOf("owl") ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
				}, a.event.special[b.name].owl = !0
			}
		} else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function (c, d) {
			return a.inArray(c, this._states.tags[b.name]) === d
		}, this)))
	}, e.prototype.suppress = function (b) {
		a.each(b, a.proxy(function (a, b) {
			this._supress[b] = !0
		}, this))
	}, e.prototype.release = function (b) {
		a.each(b, a.proxy(function (a, b) {
			delete this._supress[b]
		}, this))
	}, e.prototype.pointer = function (a) {
		var c = {
			x: null,
			y: null
		};
		return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c
	}, e.prototype.isNumeric = function (a) {
		return !isNaN(parseFloat(a))
	}, e.prototype.difference = function (a, b) {
		return {
			x: a.x - b.x,
			y: a.y - b.y
		}
	}, a.fn.owlCarousel = function (b) {
		var c = Array.prototype.slice.call(arguments, 1);
		return this.each(function () {
			var d = a(this),
				f = d.data("owl.carousel");
			f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) {
				f.register({
					type: e.Type.Event,
					name: c
				}), f.$element.on(c + ".owl.carousel.core", a.proxy(function (a) {
					a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]))
				}, f))
			})), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
		})
	}, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	var e = function (b) {
		this._core = b, this._interval = null, this._visible = null, this._handlers = {
			"initialized.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.settings.autoRefresh && this.watch()
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
	};
	e.Defaults = {
		autoRefresh: !0,
		autoRefreshInterval: 500
	}, e.prototype.watch = function () {
		this._interval || (this._visible = this._core.isVisible(), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
	}, e.prototype.refresh = function () {
		this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
	}, e.prototype.destroy = function () {
		var a, c;
		b.clearInterval(this._interval);
		for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
		for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	var e = function (b) {
		this._core = b, this._loaded = [], this._handlers = {
			"initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) {
				if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
					for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && -1 * e || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function (a, b) {
							this.load(b)
						}, this); f++ < e;) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
	};
	e.Defaults = {
		lazyLoad: !1
	}, e.prototype.load = function (c) {
		var d = this._core.$stage.children().eq(c),
			e = d && d.find(".owl-lazy");
		!e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) {
			var e, f = a(d),
				g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src") || f.attr("data-srcset");
			this._core.trigger("load", {
				element: f,
				url: g
			}, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () {
				f.css("opacity", 1), this._core.trigger("loaded", {
					element: f,
					url: g
				}, "lazy")
			}, this)).attr("src", g) : f.is("source") ? f.one("load.owl.lazy", a.proxy(function () {
				this._core.trigger("loaded", {
					element: f,
					url: g
				}, "lazy")
			}, this)).attr("srcset", g) : (e = new Image, e.onload = a.proxy(function () {
				f.css({
					"background-image": 'url("' + g + '")',
					opacity: "1"
				}), this._core.trigger("loaded", {
					element: f,
					url: g
				}, "lazy")
			}, this), e.src = g)
		}, this)), this._loaded.push(d.get(0)))
	}, e.prototype.destroy = function () {
		var a, b;
		for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	var e = function (c) {
		this._core = c, this._handlers = {
			"initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.settings.autoHeight && this.update()
			}, this),
			"changed.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.settings.autoHeight && "position" === a.property.name && (console.log("update called"), this.update())
			}, this),
			"loaded.owl.lazy": a.proxy(function (a) {
				a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
		var d = this;
		a(b).on("load", function () {
			d._core.settings.autoHeight && d.update()
		}), a(b).resize(function () {
			d._core.settings.autoHeight && (null != d._intervalId && clearTimeout(d._intervalId), d._intervalId = setTimeout(function () {
				d.update()
			}, 250))
		})
	};
	e.Defaults = {
		autoHeight: !1,
		autoHeightClass: "owl-height"
	}, e.prototype.update = function () {
		var b = this._core._current,
			c = b + this._core.settings.items,
			d = this._core.$stage.children().toArray().slice(b, c),
			e = [],
			f = 0;
		a.each(d, function (b, c) {
			e.push(a(c).height())
		}), f = Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)
	}, e.prototype.destroy = function () {
		var a, b;
		for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	var e = function (b) {
		this._core = b, this._videos = {}, this._playing = null, this._handlers = {
			"initialized.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.register({
					type: "state",
					name: "playing",
					tags: ["interacting"]
				})
			}, this),
			"resize.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
			}, this),
			"refreshed.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
			}, this),
			"changed.owl.carousel": a.proxy(function (a) {
				a.namespace && "position" === a.property.name && this._playing && this.stop()
			}, this),
			"prepared.owl.carousel": a.proxy(function (b) {
				if (b.namespace) {
					var c = a(b.content).find(".owl-video");
					c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
				}
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) {
			this.play(a)
		}, this))
	};
	e.Defaults = {
		video: !1,
		videoHeight: !1,
		videoWidth: !1
	}, e.prototype.fetch = function (a, b) {
		var c = function () {
				return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
			}(),
			d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
			e = a.attr("data-width") || this._core.settings.videoWidth,
			f = a.attr("data-height") || this._core.settings.videoHeight,
			g = a.attr("href");
		if (!g) throw new Error("Missing video URL.");
		if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
		else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
		else {
			if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
			c = "vzaar"
		}
		d = d[6], this._videos[g] = {
			type: c,
			id: d,
			width: e,
			height: f
		}, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
	}, e.prototype.thumbnail = function (b, c) {
		var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
			h = b.find("img"),
			i = "src",
			j = "",
			k = this._core.settings,
			l = function (a) {
				e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
			};
		if (b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;
		"youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
			type: "GET",
			url: "//vimeo.com/api/v2/video/" + c.id + ".json",
			jsonp: "callback",
			dataType: "jsonp",
			success: function (a) {
				f = a[0].thumbnail_large, l(f)
			}
		}) : "vzaar" === c.type && a.ajax({
			type: "GET",
			url: "//vzaar.com/api/videos/" + c.id + ".json",
			jsonp: "callback",
			dataType: "jsonp",
			success: function (a) {
				f = a.framegrab_url, l(f)
			}
		})
	}, e.prototype.stop = function () {
		this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
	}, e.prototype.play = function (b) {
		var c, d = a(b.target),
			e = d.closest("." + this._core.settings.itemClass),
			f = this._videos[e.attr("data-video")],
			g = f.width || "100%",
			h = f.height || this._core.$stage.height();
		this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"))
	}, e.prototype.isInFullScreen = function () {
		var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
		return b && a(b).parent().hasClass("owl-video-frame")
	}, e.prototype.destroy = function () {
		var a, b;
		this._core.$element.off("click.owl.video");
		for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	var e = function (b) {
		this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
			"change.owl.carousel": a.proxy(function (a) {
				a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
			}, this),
			"drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
				a.namespace && (this.swapping = "translated" == a.type)
			}, this),
			"translate.owl.carousel": a.proxy(function (a) {
				a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
			}, this)
		}, this.core.$element.on(this.handlers)
	};
	e.Defaults = {
		animateOut: !1,
		animateIn: !1
	}, e.prototype.swap = function () {
		if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
			this.core.speed(0);
			var b, c = a.proxy(this.clear, this),
				d = this.core.$stage.children().eq(this.previous),
				e = this.core.$stage.children().eq(this.next),
				f = this.core.settings.animateIn,
				g = this.core.settings.animateOut;
			this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({
				left: b + "px"
			}).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
		}
	}, e.prototype.clear = function (b) {
		a(b.target).css({
			left: ""
		}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
	}, e.prototype.destroy = function () {
		var a, b;
		for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	var e = function (b) {
		this._core = b, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
			"changed.owl.carousel": a.proxy(function (a) {
				a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._paused && (this._time = 0)
			}, this),
			"initialized.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.settings.autoplay && this.play()
			}, this),
			"play.owl.autoplay": a.proxy(function (a, b, c) {
				a.namespace && this.play(b, c)
			}, this),
			"stop.owl.autoplay": a.proxy(function (a) {
				a.namespace && this.stop()
			}, this),
			"mouseover.owl.autoplay": a.proxy(function () {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
			}, this),
			"mouseleave.owl.autoplay": a.proxy(function () {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
			}, this),
			"touchstart.owl.core": a.proxy(function () {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
			}, this),
			"touchend.owl.core": a.proxy(function () {
				this._core.settings.autoplayHoverPause && this.play()
			}, this)
		}, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options)
	};
	e.Defaults = {
		autoplay: !1,
		autoplayTimeout: 5e3,
		autoplayHoverPause: !1,
		autoplaySpeed: !1
	}, e.prototype._next = function (d) {
		this._call = b.setTimeout(a.proxy(this._next, this, d), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(d || this._core.settings.autoplaySpeed)
	}, e.prototype.read = function () {
		return (new Date).getTime() - this._time
	}, e.prototype.play = function (c, d) {
		var e;
		this._core.is("rotating") || this._core.enter("rotating"), c = c || this._core.settings.autoplayTimeout, e = Math.min(this._time % (this._timeout || c), c), this._paused ? (this._time = this.read(), this._paused = !1) : b.clearTimeout(this._call), this._time += this.read() % c - e, this._timeout = c, this._call = b.setTimeout(a.proxy(this._next, this, d), c - e)
	}, e.prototype.stop = function () {
		this._core.is("rotating") && (this._time = 0, this._paused = !0, b.clearTimeout(this._call), this._core.leave("rotating"))
	}, e.prototype.pause = function () {
		this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, b.clearTimeout(this._call))
	}, e.prototype.destroy = function () {
		var a, b;
		this.stop();
		for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	"use strict";
	var e = function (b) {
		this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		}, this._handlers = {
			"prepared.owl.carousel": a.proxy(function (b) {
				b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
			}, this),
			"added.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
			}, this),
			"remove.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
			}, this),
			"changed.owl.carousel": a.proxy(function (a) {
				a.namespace && "position" == a.property.name && this.draw()
			}, this),
			"initialized.owl.carousel": a.proxy(function (a) {
				a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
			}, this),
			"refreshed.owl.carousel": a.proxy(function (a) {
				a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
	};
	e.Defaults = {
		nav: !1,
		navText: ['<span aria-label="Previous">‹</span>', '<span aria-label="Next">›</span>'],
		navSpeed: !1,
		navElement: 'button type="button" role="presentation"',
		navContainer: !1,
		navContainerClass: "owl-nav",
		navClass: ["owl-prev", "owl-next"],
		slideBy: 1,
		dotClass: "owl-dot",
		dotsClass: "owl-dots",
		dots: !0,
		dotsEach: !1,
		dotsData: !1,
		dotsSpeed: !1,
		dotsContainer: !1
	}, e.prototype.initialize = function () {
		var b, c = this._core.settings;
		this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function (a) {
			this.prev(c.navSpeed)
		}, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function (a) {
			this.next(c.navSpeed)
		}, this)), c.dotsData || (this._templates = [a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", a.proxy(function (b) {
			var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
			b.preventDefault(), this.to(d, c.dotsSpeed)
		}, this));
		for (b in this._overrides) this._core[b] = a.proxy(this[b], this)
	}, e.prototype.destroy = function () {
		var a, b, c, d, e;
		e = this._core.settings;
		for (a in this._handlers) this.$element.off(a, this._handlers[a]);
		for (b in this._controls) "$relative" === b && e.navContainer ? this._controls[b].html("") : this._controls[b].remove();
		for (d in this.overides) this._core[d] = this._overrides[d];
		for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
	}, e.prototype.update = function () {
		var a, b, c, d = this._core.clones().length / 2,
			e = d + this._core.items().length,
			f = this._core.maximum(!0),
			g = this._core.settings,
			h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
		if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy)
			for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
				if (b >= h || 0 === b) {
					if (this._pages.push({
							start: Math.min(f, a - d),
							end: a - d + h - 1
						}), Math.min(f, a - d) === f) break;
					b = 0, ++c
				}
				b += this._core.mergers(this._core.relative(a))
			}
	}, e.prototype.draw = function () {
		var b, c = this._core.settings,
			d = this._core.items().length <= c.items,
			e = this._core.relative(this._core.current()),
			f = c.loop || c.rewind;
		this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
	}, e.prototype.onTrigger = function (b) {
		var c = this._core.settings;
		b.page = {
			index: a.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
		}
	}, e.prototype.current = function () {
		var b = this._core.relative(this._core.current());
		return a.grep(this._pages, a.proxy(function (a, c) {
			return a.start <= b && a.end >= b
		}, this)).pop()
	}, e.prototype.getPosition = function (b) {
		var c, d, e = this._core.settings;
		return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
	}, e.prototype.next = function (b) {
		a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
	}, e.prototype.prev = function (b) {
		a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
	}, e.prototype.to = function (b, c, d) {
		var e;
		!d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
	}, a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	"use strict";
	var e = function (c) {
		this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
			"initialized.owl.carousel": a.proxy(function (c) {
				c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
			}, this),
			"prepared.owl.carousel": a.proxy(function (b) {
				if (b.namespace) {
					var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
					if (!c) return;
					this._hashes[c] = b.content
				}
			}, this),
			"changed.owl.carousel": a.proxy(function (c) {
				if (c.namespace && "position" === c.property.name) {
					var d = this._core.items(this._core.relative(this._core.current())),
						e = a.map(this._hashes, function (a, b) {
							return a === d ? b : null
						}).join();
					if (!e || b.location.hash.slice(1) === e) return;
					b.location.hash = e
				}
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function (a) {
			var c = b.location.hash.substring(1),
				e = this._core.$stage.children(),
				f = this._hashes[c] && e.index(this._hashes[c]);
			f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
		}, this))
	};
	e.Defaults = {
		URLhashListener: !1
	}, e.prototype.destroy = function () {
		var c, d;
		a(b).off("hashchange.owl.navigation");
		for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
		for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	function e(b, c) {
		var e = !1,
			f = b.charAt(0).toUpperCase() + b.slice(1);
		return a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
			if (g[b] !== d) return e = !c || b, !1
		}), e
	}

	function f(a) {
		return e(a, !0)
	}
	var g = a("<support>").get(0).style,
		h = "Webkit Moz O ms".split(" "),
		i = {
			transition: {
				end: {
					WebkitTransition: "webkitTransitionEnd",
					MozTransition: "transitionend",
					OTransition: "oTransitionEnd",
					transition: "transitionend"
				}
			},
			animation: {
				end: {
					WebkitAnimation: "webkitAnimationEnd",
					MozAnimation: "animationend",
					OAnimation: "oAnimationEnd",
					animation: "animationend"
				}
			}
		},
		j = {
			csstransforms: function () {
				return !!e("transform")
			},
			csstransforms3d: function () {
				return !!e("perspective")
			},
			csstransitions: function () {
				return !!e("transition")
			},
			cssanimations: function () {
				return !!e("animation")
			}
		};
	j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);


/*!
 * Isotope PACKAGED v3.0.5
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2017 Metafizzy
 */

! function (t, e) {
	"function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
		return e(t, i)
	}) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function (t, e) {
	"use strict";

	function i(i, s, a) {
		function u(t, e, o) {
			var n, s = "$()." + i + '("' + e + '")';
			return t.each(function (t, u) {
				var h = a.data(u, i);
				if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);
				var d = h[e];
				if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");
				var l = d.apply(h, o);
				n = void 0 === n ? l : n
			}), void 0 !== n ? n : t
		}

		function h(t, e) {
			t.each(function (t, o) {
				var n = a.data(o, i);
				n ? (n.option(e), n._init()) : (n = new s(o, e), a.data(o, i, n))
			})
		}
		a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function (t) {
			a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
		}), a.fn[i] = function (t) {
			if ("string" == typeof t) {
				var e = n.call(arguments, 1);
				return u(this, t, e)
			}
			return h(this, t), this
		}, o(a))
	}

	function o(t) {
		!t || t && t.bridget || (t.bridget = i)
	}
	var n = Array.prototype.slice,
		s = t.console,
		r = "undefined" == typeof s ? function () {} : function (t) {
			s.error(t)
		};
	return o(e || t.jQuery), i
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function () {
	function t() {}
	var e = t.prototype;
	return e.on = function (t, e) {
		if (t && e) {
			var i = this._events = this._events || {},
				o = i[t] = i[t] || [];
			return o.indexOf(e) == -1 && o.push(e), this
		}
	}, e.once = function (t, e) {
		if (t && e) {
			this.on(t, e);
			var i = this._onceEvents = this._onceEvents || {},
				o = i[t] = i[t] || {};
			return o[e] = !0, this
		}
	}, e.off = function (t, e) {
		var i = this._events && this._events[t];
		if (i && i.length) {
			var o = i.indexOf(e);
			return o != -1 && i.splice(o, 1), this
		}
	}, e.emitEvent = function (t, e) {
		var i = this._events && this._events[t];
		if (i && i.length) {
			i = i.slice(0), e = e || [];
			for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
				var s = i[n],
					r = o && o[s];
				r && (this.off(t, s), delete o[s]), s.apply(this, e)
			}
			return this
		}
	}, e.allOff = function () {
		delete this._events, delete this._onceEvents
	}, t
}),
function (t, e) {
	"use strict";
	"function" == typeof define && define.amd ? define("get-size/get-size", [], function () {
		return e()
	}) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function () {
	"use strict";

	function t(t) {
		var e = parseFloat(t),
			i = t.indexOf("%") == -1 && !isNaN(e);
		return i && e
	}

	function e() {}

	function i() {
		for (var t = {
				width: 0,
				height: 0,
				innerWidth: 0,
				innerHeight: 0,
				outerWidth: 0,
				outerHeight: 0
			}, e = 0; e < h; e++) {
			var i = u[e];
			t[i] = 0
		}
		return t
	}

	function o(t) {
		var e = getComputedStyle(t);
		return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
	}

	function n() {
		if (!d) {
			d = !0;
			var e = document.createElement("div");
			e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
			var i = document.body || document.documentElement;
			i.appendChild(e);
			var n = o(e);
			s.isBoxSizeOuter = r = 200 == t(n.width), i.removeChild(e)
		}
	}

	function s(e) {
		if (n(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
			var s = o(e);
			if ("none" == s.display) return i();
			var a = {};
			a.width = e.offsetWidth, a.height = e.offsetHeight;
			for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
				var f = u[l],
					c = s[f],
					m = parseFloat(c);
				a[f] = isNaN(m) ? 0 : m
			}
			var p = a.paddingLeft + a.paddingRight,
				y = a.paddingTop + a.paddingBottom,
				g = a.marginLeft + a.marginRight,
				v = a.marginTop + a.marginBottom,
				_ = a.borderLeftWidth + a.borderRightWidth,
				I = a.borderTopWidth + a.borderBottomWidth,
				z = d && r,
				x = t(s.width);
			x !== !1 && (a.width = x + (z ? 0 : p + _));
			var S = t(s.height);
			return S !== !1 && (a.height = S + (z ? 0 : y + I)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (y + I), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a
		}
	}
	var r, a = "undefined" == typeof console ? e : function (t) {
			console.error(t)
		},
		u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
		h = u.length,
		d = !1;
	return s
}),
function (t, e) {
	"use strict";
	"function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function () {
	"use strict";
	var t = function () {
		var t = window.Element.prototype;
		if (t.matches) return "matches";
		if (t.matchesSelector) return "matchesSelector";
		for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
			var o = e[i],
				n = o + "MatchesSelector";
			if (t[n]) return n
		}
	}();
	return function (e, i) {
		return e[t](i)
	}
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
		return e(t, i)
	}) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function (t, e) {
	var i = {};
	i.extend = function (t, e) {
		for (var i in e) t[i] = e[i];
		return t
	}, i.modulo = function (t, e) {
		return (t % e + e) % e
	}, i.makeArray = function (t) {
		var e = [];
		if (Array.isArray(t)) e = t;
		else if (t && "object" == typeof t && "number" == typeof t.length)
			for (var i = 0; i < t.length; i++) e.push(t[i]);
		else e.push(t);
		return e
	}, i.removeFrom = function (t, e) {
		var i = t.indexOf(e);
		i != -1 && t.splice(i, 1)
	}, i.getParent = function (t, i) {
		for (; t.parentNode && t != document.body;)
			if (t = t.parentNode, e(t, i)) return t
	}, i.getQueryElement = function (t) {
		return "string" == typeof t ? document.querySelector(t) : t
	}, i.handleEvent = function (t) {
		var e = "on" + t.type;
		this[e] && this[e](t)
	}, i.filterFindElements = function (t, o) {
		t = i.makeArray(t);
		var n = [];
		return t.forEach(function (t) {
			if (t instanceof HTMLElement) {
				if (!o) return void n.push(t);
				e(t, o) && n.push(t);
				for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++) n.push(i[s])
			}
		}), n
	}, i.debounceMethod = function (t, e, i) {
		var o = t.prototype[e],
			n = e + "Timeout";
		t.prototype[e] = function () {
			var t = this[n];
			t && clearTimeout(t);
			var e = arguments,
				s = this;
			this[n] = setTimeout(function () {
				o.apply(s, e), delete s[n]
			}, i || 100)
		}
	}, i.docReady = function (t) {
		var e = document.readyState;
		"complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
	}, i.toDashed = function (t) {
		return t.replace(/(.)([A-Z])/g, function (t, e, i) {
			return e + "-" + i
		}).toLowerCase()
	};
	var o = t.console;
	return i.htmlInit = function (e, n) {
		i.docReady(function () {
			var s = i.toDashed(n),
				r = "data-" + s,
				a = document.querySelectorAll("[" + r + "]"),
				u = document.querySelectorAll(".js-" + s),
				h = i.makeArray(a).concat(i.makeArray(u)),
				d = r + "-options",
				l = t.jQuery;
			h.forEach(function (t) {
				var i, s = t.getAttribute(r) || t.getAttribute(d);
				try {
					i = s && JSON.parse(s)
				} catch (a) {
					return void(o && o.error("Error parsing " + r + " on " + t.className + ": " + a))
				}
				var u = new e(t, i);
				l && l.data(t, n, u)
			})
		})
	}, i
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function (t, e) {
	"use strict";

	function i(t) {
		for (var e in t) return !1;
		return e = null, !0
	}

	function o(t, e) {
		t && (this.element = t, this.layout = e, this.position = {
			x: 0,
			y: 0
		}, this._create())
	}

	function n(t) {
		return t.replace(/([A-Z])/g, function (t) {
			return "-" + t.toLowerCase()
		})
	}
	var s = document.documentElement.style,
		r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
		a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
		u = {
			WebkitTransition: "webkitTransitionEnd",
			transition: "transitionend"
		}[r],
		h = {
			transform: a,
			transition: r,
			transitionDuration: r + "Duration",
			transitionProperty: r + "Property",
			transitionDelay: r + "Delay"
		},
		d = o.prototype = Object.create(t.prototype);
	d.constructor = o, d._create = function () {
		this._transn = {
			ingProperties: {},
			clean: {},
			onEnd: {}
		}, this.css({
			position: "absolute"
		})
	}, d.handleEvent = function (t) {
		var e = "on" + t.type;
		this[e] && this[e](t)
	}, d.getSize = function () {
		this.size = e(this.element)
	}, d.css = function (t) {
		var e = this.element.style;
		for (var i in t) {
			var o = h[i] || i;
			e[o] = t[i]
		}
	}, d.getPosition = function () {
		var t = getComputedStyle(this.element),
			e = this.layout._getOption("originLeft"),
			i = this.layout._getOption("originTop"),
			o = t[e ? "left" : "right"],
			n = t[i ? "top" : "bottom"],
			s = this.layout.size,
			r = o.indexOf("%") != -1 ? parseFloat(o) / 100 * s.width : parseInt(o, 10),
			a = n.indexOf("%") != -1 ? parseFloat(n) / 100 * s.height : parseInt(n, 10);
		r = isNaN(r) ? 0 : r, a = isNaN(a) ? 0 : a, r -= e ? s.paddingLeft : s.paddingRight, a -= i ? s.paddingTop : s.paddingBottom, this.position.x = r, this.position.y = a
	}, d.layoutPosition = function () {
		var t = this.layout.size,
			e = {},
			i = this.layout._getOption("originLeft"),
			o = this.layout._getOption("originTop"),
			n = i ? "paddingLeft" : "paddingRight",
			s = i ? "left" : "right",
			r = i ? "right" : "left",
			a = this.position.x + t[n];
		e[s] = this.getXValue(a), e[r] = "";
		var u = o ? "paddingTop" : "paddingBottom",
			h = o ? "top" : "bottom",
			d = o ? "bottom" : "top",
			l = this.position.y + t[u];
		e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this])
	}, d.getXValue = function (t) {
		var e = this.layout._getOption("horizontal");
		return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
	}, d.getYValue = function (t) {
		var e = this.layout._getOption("horizontal");
		return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
	}, d._transitionTo = function (t, e) {
		this.getPosition();
		var i = this.position.x,
			o = this.position.y,
			n = parseInt(t, 10),
			s = parseInt(e, 10),
			r = n === this.position.x && s === this.position.y;
		if (this.setPosition(t, e), r && !this.isTransitioning) return void this.layoutPosition();
		var a = t - i,
			u = e - o,
			h = {};
		h.transform = this.getTranslate(a, u), this.transition({
			to: h,
			onTransitionEnd: {
				transform: this.layoutPosition
			},
			isCleaning: !0
		})
	}, d.getTranslate = function (t, e) {
		var i = this.layout._getOption("originLeft"),
			o = this.layout._getOption("originTop");
		return t = i ? t : -t, e = o ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
	}, d.goTo = function (t, e) {
		this.setPosition(t, e), this.layoutPosition()
	}, d.moveTo = d._transitionTo, d.setPosition = function (t, e) {
		this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
	}, d._nonTransition = function (t) {
		this.css(t.to), t.isCleaning && this._removeStyles(t.to);
		for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
	}, d.transition = function (t) {
		if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
		var e = this._transn;
		for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
		for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
		if (t.from) {
			this.css(t.from);
			var o = this.element.offsetHeight;
			o = null
		}
		this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
	};
	var l = "opacity," + n(a);
	d.enableTransition = function () {
		if (!this.isTransitioning) {
			var t = this.layout.options.transitionDuration;
			t = "number" == typeof t ? t + "ms" : t, this.css({
				transitionProperty: l,
				transitionDuration: t,
				transitionDelay: this.staggerDelay || 0
			}), this.element.addEventListener(u, this, !1)
		}
	}, d.onwebkitTransitionEnd = function (t) {
		this.ontransitionend(t)
	}, d.onotransitionend = function (t) {
		this.ontransitionend(t)
	};
	var f = {
		"-webkit-transform": "transform"
	};
	d.ontransitionend = function (t) {
		if (t.target === this.element) {
			var e = this._transn,
				o = f[t.propertyName] || t.propertyName;
			if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) {
				var n = e.onEnd[o];
				n.call(this), delete e.onEnd[o]
			}
			this.emitEvent("transitionEnd", [this])
		}
	}, d.disableTransition = function () {
		this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1
	}, d._removeStyles = function (t) {
		var e = {};
		for (var i in t) e[i] = "";
		this.css(e)
	};
	var c = {
		transitionProperty: "",
		transitionDuration: "",
		transitionDelay: ""
	};
	return d.removeTransitionStyles = function () {
		this.css(c)
	}, d.stagger = function (t) {
		t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
	}, d.removeElem = function () {
		this.element.parentNode.removeChild(this.element), this.css({
			display: ""
		}), this.emitEvent("remove", [this])
	}, d.remove = function () {
		return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
			this.removeElem()
		}), void this.hide()) : void this.removeElem()
	}, d.reveal = function () {
		delete this.isHidden, this.css({
			display: ""
		});
		var t = this.layout.options,
			e = {},
			i = this.getHideRevealTransitionEndProperty("visibleStyle");
		e[i] = this.onRevealTransitionEnd, this.transition({
			from: t.hiddenStyle,
			to: t.visibleStyle,
			isCleaning: !0,
			onTransitionEnd: e
		})
	}, d.onRevealTransitionEnd = function () {
		this.isHidden || this.emitEvent("reveal")
	}, d.getHideRevealTransitionEndProperty = function (t) {
		var e = this.layout.options[t];
		if (e.opacity) return "opacity";
		for (var i in e) return i
	}, d.hide = function () {
		this.isHidden = !0, this.css({
			display: ""
		});
		var t = this.layout.options,
			e = {},
			i = this.getHideRevealTransitionEndProperty("hiddenStyle");
		e[i] = this.onHideTransitionEnd, this.transition({
			from: t.visibleStyle,
			to: t.hiddenStyle,
			isCleaning: !0,
			onTransitionEnd: e
		})
	}, d.onHideTransitionEnd = function () {
		this.isHidden && (this.css({
			display: "none"
		}), this.emitEvent("hide"))
	}, d.destroy = function () {
		this.css({
			position: "",
			left: "",
			right: "",
			top: "",
			bottom: "",
			transition: "",
			transform: ""
		})
	}, o
}),
function (t, e) {
	"use strict";
	"function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, o, n, s) {
		return e(t, i, o, n, s)
	}) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function (t, e, i, o, n) {
	"use strict";

	function s(t, e) {
		var i = o.getQueryElement(t);
		if (!i) return void(u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
		this.element = i, h && (this.$element = h(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);
		var n = ++l;
		this.element.outlayerGUID = n, f[n] = this, this._create();
		var s = this._getOption("initLayout");
		s && this.layout()
	}

	function r(t) {
		function e() {
			t.apply(this, arguments)
		}
		return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
	}

	function a(t) {
		if ("number" == typeof t) return t;
		var e = t.match(/(^\d*\.?\d*)(\w*)/),
			i = e && e[1],
			o = e && e[2];
		if (!i.length) return 0;
		i = parseFloat(i);
		var n = m[o] || 1;
		return i * n
	}
	var u = t.console,
		h = t.jQuery,
		d = function () {},
		l = 0,
		f = {};
	s.namespace = "outlayer", s.Item = n, s.defaults = {
		containerStyle: {
			position: "relative"
		},
		initLayout: !0,
		originLeft: !0,
		originTop: !0,
		resize: !0,
		resizeContainer: !0,
		transitionDuration: "0.4s",
		hiddenStyle: {
			opacity: 0,
			transform: "scale(0.001)"
		},
		visibleStyle: {
			opacity: 1,
			transform: "scale(1)"
		}
	};
	var c = s.prototype;
	o.extend(c, e.prototype), c.option = function (t) {
		o.extend(this.options, t)
	}, c._getOption = function (t) {
		var e = this.constructor.compatOptions[t];
		return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
	}, s.compatOptions = {
		initLayout: "isInitLayout",
		horizontal: "isHorizontal",
		layoutInstant: "isLayoutInstant",
		originLeft: "isOriginLeft",
		originTop: "isOriginTop",
		resize: "isResizeBound",
		resizeContainer: "isResizingContainer"
	}, c._create = function () {
		this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle);
		var t = this._getOption("resize");
		t && this.bindResize()
	}, c.reloadItems = function () {
		this.items = this._itemize(this.element.children)
	}, c._itemize = function (t) {
		for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
			var s = e[n],
				r = new i(s, this);
			o.push(r)
		}
		return o
	}, c._filterFindItemElements = function (t) {
		return o.filterFindElements(t, this.options.itemSelector)
	}, c.getItemElements = function () {
		return this.items.map(function (t) {
			return t.element
		})
	}, c.layout = function () {
		this._resetLayout(), this._manageStamps();
		var t = this._getOption("layoutInstant"),
			e = void 0 !== t ? t : !this._isLayoutInited;
		this.layoutItems(this.items, e), this._isLayoutInited = !0
	}, c._init = c.layout, c._resetLayout = function () {
		this.getSize()
	}, c.getSize = function () {
		this.size = i(this.element)
	}, c._getMeasurement = function (t, e) {
		var o, n = this.options[t];
		n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n), this[t] = o ? i(o)[e] : n) : this[t] = 0
	}, c.layoutItems = function (t, e) {
		t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
	}, c._getItemsForLayout = function (t) {
		return t.filter(function (t) {
			return !t.isIgnored
		})
	}, c._layoutItems = function (t, e) {
		if (this._emitCompleteOnItems("layout", t), t && t.length) {
			var i = [];
			t.forEach(function (t) {
				var o = this._getItemLayoutPosition(t);
				o.item = t, o.isInstant = e || t.isLayoutInstant, i.push(o)
			}, this), this._processLayoutQueue(i)
		}
	}, c._getItemLayoutPosition = function () {
		return {
			x: 0,
			y: 0
		}
	}, c._processLayoutQueue = function (t) {
		this.updateStagger(), t.forEach(function (t, e) {
			this._positionItem(t.item, t.x, t.y, t.isInstant, e)
		}, this)
	}, c.updateStagger = function () {
		var t = this.options.stagger;
		return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
	}, c._positionItem = function (t, e, i, o, n) {
		o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i))
	}, c._postLayout = function () {
		this.resizeContainer()
	}, c.resizeContainer = function () {
		var t = this._getOption("resizeContainer");
		if (t) {
			var e = this._getContainerSize();
			e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
		}
	}, c._getContainerSize = d, c._setContainerMeasure = function (t, e) {
		if (void 0 !== t) {
			var i = this.size;
			i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
		}
	}, c._emitCompleteOnItems = function (t, e) {
		function i() {
			n.dispatchEvent(t + "Complete", null, [e])
		}

		function o() {
			r++, r == s && i()
		}
		var n = this,
			s = e.length;
		if (!e || !s) return void i();
		var r = 0;
		e.forEach(function (e) {
			e.once(t, o)
		})
	}, c.dispatchEvent = function (t, e, i) {
		var o = e ? [e].concat(i) : i;
		if (this.emitEvent(t, o), h)
			if (this.$element = this.$element || h(this.element), e) {
				var n = h.Event(e);
				n.type = t, this.$element.trigger(n, i)
			} else this.$element.trigger(t, i)
	}, c.ignore = function (t) {
		var e = this.getItem(t);
		e && (e.isIgnored = !0)
	}, c.unignore = function (t) {
		var e = this.getItem(t);
		e && delete e.isIgnored
	}, c.stamp = function (t) {
		t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
	}, c.unstamp = function (t) {
		t = this._find(t), t && t.forEach(function (t) {
			o.removeFrom(this.stamps, t), this.unignore(t)
		}, this)
	}, c._find = function (t) {
		if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t)
	}, c._manageStamps = function () {
		this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
	}, c._getBoundingRect = function () {
		var t = this.element.getBoundingClientRect(),
			e = this.size;
		this._boundingRect = {
			left: t.left + e.paddingLeft + e.borderLeftWidth,
			top: t.top + e.paddingTop + e.borderTopWidth,
			right: t.right - (e.paddingRight + e.borderRightWidth),
			bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
		}
	}, c._manageStamp = d, c._getElementOffset = function (t) {
		var e = t.getBoundingClientRect(),
			o = this._boundingRect,
			n = i(t),
			s = {
				left: e.left - o.left - n.marginLeft,
				top: e.top - o.top - n.marginTop,
				right: o.right - e.right - n.marginRight,
				bottom: o.bottom - e.bottom - n.marginBottom
			};
		return s
	}, c.handleEvent = o.handleEvent, c.bindResize = function () {
		t.addEventListener("resize", this), this.isResizeBound = !0
	}, c.unbindResize = function () {
		t.removeEventListener("resize", this), this.isResizeBound = !1
	}, c.onresize = function () {
		this.resize()
	}, o.debounceMethod(s, "onresize", 100), c.resize = function () {
		this.isResizeBound && this.needsResizeLayout() && this.layout()
	}, c.needsResizeLayout = function () {
		var t = i(this.element),
			e = this.size && t;
		return e && t.innerWidth !== this.size.innerWidth
	}, c.addItems = function (t) {
		var e = this._itemize(t);
		return e.length && (this.items = this.items.concat(e)), e
	}, c.appended = function (t) {
		var e = this.addItems(t);
		e.length && (this.layoutItems(e, !0), this.reveal(e))
	}, c.prepended = function (t) {
		var e = this._itemize(t);
		if (e.length) {
			var i = this.items.slice(0);
			this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
		}
	}, c.reveal = function (t) {
		if (this._emitCompleteOnItems("reveal", t), t && t.length) {
			var e = this.updateStagger();
			t.forEach(function (t, i) {
				t.stagger(i * e), t.reveal()
			})
		}
	}, c.hide = function (t) {
		if (this._emitCompleteOnItems("hide", t), t && t.length) {
			var e = this.updateStagger();
			t.forEach(function (t, i) {
				t.stagger(i * e), t.hide()
			})
		}
	}, c.revealItemElements = function (t) {
		var e = this.getItems(t);
		this.reveal(e)
	}, c.hideItemElements = function (t) {
		var e = this.getItems(t);
		this.hide(e)
	}, c.getItem = function (t) {
		for (var e = 0; e < this.items.length; e++) {
			var i = this.items[e];
			if (i.element == t) return i
		}
	}, c.getItems = function (t) {
		t = o.makeArray(t);
		var e = [];
		return t.forEach(function (t) {
			var i = this.getItem(t);
			i && e.push(i)
		}, this), e
	}, c.remove = function (t) {
		var e = this.getItems(t);
		this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
			t.remove(), o.removeFrom(this.items, t)
		}, this)
	}, c.destroy = function () {
		var t = this.element.style;
		t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
			t.destroy()
		}), this.unbindResize();
		var e = this.element.outlayerGUID;
		delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace)
	}, s.data = function (t) {
		t = o.getQueryElement(t);
		var e = t && t.outlayerGUID;
		return e && f[e]
	}, s.create = function (t, e) {
		var i = r(s);
		return i.defaults = o.extend({}, s.defaults), o.extend(i.defaults, e), i.compatOptions = o.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(n), o.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i
	};
	var m = {
		ms: 1,
		s: 1e3
	};
	return s.Item = n, s
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, function (t) {
	"use strict";

	function e() {
		t.Item.apply(this, arguments)
	}
	var i = e.prototype = Object.create(t.Item.prototype),
		o = i._create;
	i._create = function () {
		this.id = this.layout.itemGUID++, o.call(this), this.sortData = {}
	}, i.updateSortData = function () {
		if (!this.isIgnored) {
			this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
			var t = this.layout.options.getSortData,
				e = this.layout._sorters;
			for (var i in t) {
				var o = e[i];
				this.sortData[i] = o(this.element, this)
			}
		}
	};
	var n = i.destroy;
	return i.destroy = function () {
		n.apply(this, arguments), this.css({
			display: ""
		})
	}, e
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function (t, e) {
	"use strict";

	function i(t) {
		this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
	}
	var o = i.prototype,
		n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
	return n.forEach(function (t) {
		o[t] = function () {
			return e.prototype[t].apply(this.isotope, arguments)
		}
	}), o.needsVerticalResizeLayout = function () {
		var e = t(this.isotope.element),
			i = this.isotope.size && e;
		return i && e.innerHeight != this.isotope.size.innerHeight
	}, o._getMeasurement = function () {
		this.isotope._getMeasurement.apply(this, arguments)
	}, o.getColumnWidth = function () {
		this.getSegmentSize("column", "Width")
	}, o.getRowHeight = function () {
		this.getSegmentSize("row", "Height")
	}, o.getSegmentSize = function (t, e) {
		var i = t + e,
			o = "outer" + e;
		if (this._getMeasurement(i, o), !this[i]) {
			var n = this.getFirstItemSize();
			this[i] = n && n[o] || this.isotope.size["inner" + e]
		}
	}, o.getFirstItemSize = function () {
		var e = this.isotope.filteredItems[0];
		return e && e.element && t(e.element)
	}, o.layout = function () {
		this.isotope.layout.apply(this.isotope, arguments)
	}, o.getSize = function () {
		this.isotope.getSize(), this.size = this.isotope.size
	}, i.modes = {}, i.create = function (t, e) {
		function n() {
			i.apply(this, arguments)
		}
		return n.prototype = Object.create(o), n.prototype.constructor = n, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n
	}, i
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function (t, e) {
	var i = t.create("masonry");
	i.compatOptions.fitWidth = "isFitWidth";
	var o = i.prototype;
	return o._resetLayout = function () {
		this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
		for (var t = 0; t < this.cols; t++) this.colYs.push(0);
		this.maxY = 0, this.horizontalColIndex = 0
	}, o.measureColumns = function () {
		if (this.getContainerWidth(), !this.columnWidth) {
			var t = this.items[0],
				i = t && t.element;
			this.columnWidth = i && e(i).outerWidth || this.containerWidth
		}
		var o = this.columnWidth += this.gutter,
			n = this.containerWidth + this.gutter,
			s = n / o,
			r = o - n % o,
			a = r && r < 1 ? "round" : "floor";
		s = Math[a](s), this.cols = Math.max(s, 1)
	}, o.getContainerWidth = function () {
		var t = this._getOption("fitWidth"),
			i = t ? this.element.parentNode : this.element,
			o = e(i);
		this.containerWidth = o && o.innerWidth
	}, o._getItemLayoutPosition = function (t) {
		t.getSize();
		var e = t.size.outerWidth % this.columnWidth,
			i = e && e < 1 ? "round" : "ceil",
			o = Math[i](t.size.outerWidth / this.columnWidth);
		o = Math.min(o, this.cols);
		for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = {
				x: this.columnWidth * s.col,
				y: s.y
			}, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++) this.colYs[h] = a;
		return r
	}, o._getTopColPosition = function (t) {
		var e = this._getTopColGroup(t),
			i = Math.min.apply(Math, e);
		return {
			col: e.indexOf(i),
			y: i
		}
	}, o._getTopColGroup = function (t) {
		if (t < 2) return this.colYs;
		for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) e[o] = this._getColGroupY(o, t);
		return e
	}, o._getColGroupY = function (t, e) {
		if (e < 2) return this.colYs[t];
		var i = this.colYs.slice(t, t + e);
		return Math.max.apply(Math, i)
	}, o._getHorizontalColPosition = function (t, e) {
		var i = this.horizontalColIndex % this.cols,
			o = t > 1 && i + t > this.cols;
		i = o ? 0 : i;
		var n = e.size.outerWidth && e.size.outerHeight;
		return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, {
			col: i,
			y: this._getColGroupY(i, t)
		}
	}, o._manageStamp = function (t) {
		var i = e(t),
			o = this._getElementOffset(t),
			n = this._getOption("originLeft"),
			s = n ? o.left : o.right,
			r = s + i.outerWidth,
			a = Math.floor(s / this.columnWidth);
		a = Math.max(0, a);
		var u = Math.floor(r / this.columnWidth);
		u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);
		for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++) this.colYs[l] = Math.max(d, this.colYs[l])
	}, o._getContainerSize = function () {
		this.maxY = Math.max.apply(Math, this.colYs);
		var t = {
			height: this.maxY
		};
		return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
	}, o._getContainerFitWidth = function () {
		for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
		return (this.cols - t) * this.columnWidth - this.gutter
	}, o.needsResizeLayout = function () {
		var t = this.containerWidth;
		return this.getContainerWidth(), t != this.containerWidth
	}, i
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function (t, e) {
	"use strict";
	var i = t.create("masonry"),
		o = i.prototype,
		n = {
			_getElementOffset: !0,
			layout: !0,
			_getMeasurement: !0
		};
	for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
	var r = o.measureColumns;
	o.measureColumns = function () {
		this.items = this.isotope.filteredItems, r.call(this)
	};
	var a = o._getOption;
	return o._getOption = function (t) {
		return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
	}, i
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function (t) {
	"use strict";
	var e = t.create("fitRows"),
		i = e.prototype;
	return i._resetLayout = function () {
		this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
	}, i._getItemLayoutPosition = function (t) {
		t.getSize();
		var e = t.size.outerWidth + this.gutter,
			i = this.isotope.size.innerWidth + this.gutter;
		0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
		var o = {
			x: this.x,
			y: this.y
		};
		return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o
	}, i._getContainerSize = function () {
		return {
			height: this.maxY
		}
	}, e
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function (t) {
	"use strict";
	var e = t.create("vertical", {
			horizontalAlignment: 0
		}),
		i = e.prototype;
	return i._resetLayout = function () {
		this.y = 0
	}, i._getItemLayoutPosition = function (t) {
		t.getSize();
		var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
			i = this.y;
		return this.y += t.size.outerHeight, {
			x: e,
			y: i
		}
	}, i._getContainerSize = function () {
		return {
			height: this.y
		}
	}, e
}),
function (t, e) {
	"function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function (i, o, n, s, r, a) {
		return e(t, i, o, n, s, r, a)
	}) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function (t, e, i, o, n, s, r) {
	function a(t, e) {
		return function (i, o) {
			for (var n = 0; n < t.length; n++) {
				var s = t[n],
					r = i.sortData[s],
					a = o.sortData[s];
				if (r > a || r < a) {
					var u = void 0 !== e[s] ? e[s] : e,
						h = u ? 1 : -1;
					return (r > a ? 1 : -1) * h
				}
			}
			return 0
		}
	}
	var u = t.jQuery,
		h = String.prototype.trim ? function (t) {
			return t.trim()
		} : function (t) {
			return t.replace(/^\s+|\s+$/g, "")
		},
		d = e.create("isotope", {
			layoutMode: "masonry",
			isJQueryFiltering: !0,
			sortAscending: !0
		});
	d.Item = s, d.LayoutMode = r;
	var l = d.prototype;
	l._create = function () {
		this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
		for (var t in r.modes) this._initLayoutMode(t)
	}, l.reloadItems = function () {
		this.itemGUID = 0, e.prototype.reloadItems.call(this)
	}, l._itemize = function () {
		for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
			var o = t[i];
			o.id = this.itemGUID++
		}
		return this._updateItemsSortData(t), t
	}, l._initLayoutMode = function (t) {
		var e = r.modes[t],
			i = this.options[t] || {};
		this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this)
	}, l.layout = function () {
		return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
	}, l._layout = function () {
		var t = this._getIsInstant();
		this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
	}, l.arrange = function (t) {
		this.option(t), this._getIsInstant();
		var e = this._filter(this.items);
		this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
	}, l._init = l.arrange, l._hideReveal = function (t) {
		this.reveal(t.needReveal), this.hide(t.needHide)
	}, l._getIsInstant = function () {
		var t = this._getOption("layoutInstant"),
			e = void 0 !== t ? t : !this._isLayoutInited;
		return this._isInstant = e, e
	}, l._bindArrangeComplete = function () {
		function t() {
			e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems])
		}
		var e, i, o, n = this;
		this.once("layoutComplete", function () {
			e = !0, t()
		}), this.once("hideComplete", function () {
			i = !0, t()
		}), this.once("revealComplete", function () {
			o = !0, t()
		})
	}, l._filter = function (t) {
		var e = this.options.filter;
		e = e || "*";
		for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
			var a = t[r];
			if (!a.isIgnored) {
				var u = s(a);
				u && i.push(a), u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a)
			}
		}
		return {
			matches: i,
			needReveal: o,
			needHide: n
		}
	}, l._getFilterTest = function (t) {
		return u && this.options.isJQueryFiltering ? function (e) {
			return u(e.element).is(t)
		} : "function" == typeof t ? function (e) {
			return t(e.element)
		} : function (e) {
			return o(e.element, t)
		}
	}, l.updateSortData = function (t) {
		var e;
		t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
	}, l._getSorters = function () {
		var t = this.options.getSortData;
		for (var e in t) {
			var i = t[e];
			this._sorters[e] = f(i)
		}
	}, l._updateItemsSortData = function (t) {
		for (var e = t && t.length, i = 0; e && i < e; i++) {
			var o = t[i];
			o.updateSortData()
		}
	};
	var f = function () {
		function t(t) {
			if ("string" != typeof t) return t;
			var i = h(t).split(" "),
				o = i[0],
				n = o.match(/^\[(.+)\]$/),
				s = n && n[1],
				r = e(s, o),
				a = d.sortDataParsers[i[1]];
			return t = a ? function (t) {
				return t && a(r(t))
			} : function (t) {
				return t && r(t)
			}
		}

		function e(t, e) {
			return t ? function (e) {
				return e.getAttribute(t)
			} : function (t) {
				var i = t.querySelector(e);
				return i && i.textContent
			}
		}
		return t
	}();
	d.sortDataParsers = {
		parseInt: function (t) {
			return parseInt(t, 10)
		},
		parseFloat: function (t) {
			return parseFloat(t)
		}
	}, l._sort = function () {
		if (this.options.sortBy) {
			var t = n.makeArray(this.options.sortBy);
			this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
			var e = a(this.sortHistory, this.options.sortAscending);
			this.filteredItems.sort(e)
		}
	}, l._getIsSameSortBy = function (t) {
		for (var e = 0; e < t.length; e++)
			if (t[e] != this.sortHistory[e]) return !1;
		return !0
	}, l._mode = function () {
		var t = this.options.layoutMode,
			e = this.modes[t];
		if (!e) throw new Error("No layout mode: " + t);
		return e.options = this.options[t], e
	}, l._resetLayout = function () {
		e.prototype._resetLayout.call(this), this._mode()._resetLayout()
	}, l._getItemLayoutPosition = function (t) {
		return this._mode()._getItemLayoutPosition(t)
	}, l._manageStamp = function (t) {
		this._mode()._manageStamp(t)
	}, l._getContainerSize = function () {
		return this._mode()._getContainerSize()
	}, l.needsResizeLayout = function () {
		return this._mode().needsResizeLayout()
	}, l.appended = function (t) {
		var e = this.addItems(t);
		if (e.length) {
			var i = this._filterRevealAdded(e);
			this.filteredItems = this.filteredItems.concat(i)
		}
	}, l.prepended = function (t) {
		var e = this._itemize(t);
		if (e.length) {
			this._resetLayout(), this._manageStamps();
			var i = this._filterRevealAdded(e);
			this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
		}
	}, l._filterRevealAdded = function (t) {
		var e = this._filter(t);
		return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
	}, l.insert = function (t) {
		var e = this.addItems(t);
		if (e.length) {
			var i, o, n = e.length;
			for (i = 0; i < n; i++) o = e[i], this.element.appendChild(o.element);
			var s = this._filter(e).matches;
			for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
			for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
			this.reveal(s)
		}
	};
	var c = l.remove;
	return l.remove = function (t) {
		t = n.makeArray(t);
		var e = this.getItems(t);
		c.call(this, t);
		for (var i = e && e.length, o = 0; i && o < i; o++) {
			var s = e[o];
			n.removeFrom(this.filteredItems, s)
		}
	}, l.shuffle = function () {
		for (var t = 0; t < this.items.length; t++) {
			var e = this.items[t];
			e.sortData.random = Math.random()
		}
		this.options.sortBy = "random", this._sort(), this._layout()
	}, l._noTransition = function (t, e) {
		var i = this.options.transitionDuration;
		this.options.transitionDuration = 0;
		var o = t.apply(this, e);
		return this.options.transitionDuration = i, o
	}, l.getFilteredItemElements = function () {
		return this.filteredItems.map(function (t) {
			return t.element
		})
	}, d
});


/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
! function (a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function (a) {
	var b, c, d, e, f, g, h = "Close",
		i = "BeforeClose",
		j = "AfterClose",
		k = "BeforeAppend",
		l = "MarkupParse",
		m = "Open",
		n = "Change",
		o = "mfp",
		p = "." + o,
		q = "mfp-ready",
		r = "mfp-removing",
		s = "mfp-prevent-close",
		t = function () {},
		u = !!window.jQuery,
		v = a(window),
		w = function (a, c) {
			b.ev.on(o + a + p, c)
		},
		x = function (b, c, d, e) {
			var f = document.createElement("div");
			return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
		},
		y = function (c, d) {
			b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
		},
		z = function (c) {
			return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
		},
		A = function () {
			a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
		},
		B = function () {
			var a = document.createElement("p").style,
				b = ["ms", "O", "Moz", "Webkit"];
			if (void 0 !== a.transition) return !0;
			for (; b.length;)
				if (b.pop() + "Transition" in a) return !0;
			return !1
		};
	t.prototype = {
		constructor: t,
		init: function () {
			var c = navigator.appVersion;
			b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
		},
		open: function (c) {
			var e;
			if (c.isObj === !1) {
				b.items = c.items.toArray(), b.index = 0;
				var g, h = c.items;
				for (e = 0; e < h.length; e++)
					if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
						b.index = e;
						break
					}
			} else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
			if (b.isOpen) return void b.updateItemHTML();
			b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () {
				b.close()
			}), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) {
				b._checkIfClose(a.target) && b.close()
			}), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
			var i = a.magnificPopup.modules;
			for (e = 0; e < i.length; e++) {
				var j = i[e];
				j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
			}
			y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) {
				c.close_replaceWith = z(d.type)
			}), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({
				overflow: b.st.overflowY,
				overflowX: "hidden",
				overflowY: b.st.overflowY
			}) : b.wrap.css({
				top: v.scrollTop(),
				position: "absolute"
			}), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
				height: d.height(),
				position: "absolute"
			}), b.st.enableEscapeKey && d.on("keyup" + p, function (a) {
				27 === a.keyCode && b.close()
			}), v.on("resize" + p, function () {
				b.updateSize()
			}), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
			var k = b.wH = v.height(),
				n = {};
			if (b.fixedContentPos && b._hasScrollBar(k)) {
				var o = b._getScrollbarSize();
				o && (n.marginRight = o)
			}
			b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
			var r = b.st.mainClass;
			return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () {
				b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
			}, 16), b.isOpen = !0, b.updateSize(k), y(m), c
		},
		close: function () {
			b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () {
				b._close()
			}, b.st.removalDelay)) : b._close())
		},
		_close: function () {
			y(h);
			var c = r + " " + q + " ";
			if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
				var e = {
					marginRight: ""
				};
				b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
			}
			d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
		},
		updateSize: function (a) {
			if (b.isIOS) {
				var c = document.documentElement.clientWidth / window.innerWidth,
					d = window.innerHeight * c;
				b.wrap.css("height", d), b.wH = d
			} else b.wH = a || v.height();
			b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
		},
		updateItemHTML: function () {
			var c = b.items[b.index];
			b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
			var d = c.type;
			if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
				var f = b.st[d] ? b.st[d].markup : !1;
				y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
			}
			e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
			var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
			b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
		},
		appendContent: function (a, c) {
			b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
		},
		parseEl: function (c) {
			var d, e = b.items[c];
			if (e.tagName ? e = {
					el: a(e)
				} : (d = e.type, e = {
					data: e,
					src: e.src
				}), e.el) {
				for (var f = b.types, g = 0; g < f.length; g++)
					if (e.el.hasClass("mfp-" + f[g])) {
						d = f[g];
						break
					}
				e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
			}
			return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
		},
		addGroup: function (a, c) {
			var d = function (d) {
				d.mfpEl = this, b._openClick(d, a, c)
			};
			c || (c = {});
			var e = "click.magnificPopup";
			c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
		},
		_openClick: function (c, d, e) {
			var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
			if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
				var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
				if (g)
					if (a.isFunction(g)) {
						if (!g.call(b)) return !0
					} else if (v.width() < g) return !0;
				c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
			}
		},
		updateStatus: function (a, d) {
			if (b.preloader) {
				c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
				var e = {
					status: a,
					text: d
				};
				y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) {
					a.stopImmediatePropagation()
				}), b.container.addClass("mfp-s-" + a), c = a
			}
		},
		_checkIfClose: function (c) {
			if (!a(c).hasClass(s)) {
				var d = b.st.closeOnContentClick,
					e = b.st.closeOnBgClick;
				if (d && e) return !0;
				if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
				if (c === b.content[0] || a.contains(b.content[0], c)) {
					if (d) return !0
				} else if (e && a.contains(document, c)) return !0;
				return !1
			}
		},
		_addClassToMFP: function (a) {
			b.bgOverlay.addClass(a), b.wrap.addClass(a)
		},
		_removeClassFromMFP: function (a) {
			this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
		},
		_hasScrollBar: function (a) {
			return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
		},
		_setFocus: function () {
			(b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
		},
		_onFocusIn: function (c) {
			return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
		},
		_parseMarkup: function (b, c, d) {
			var e;
			d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (c, d) {
				if (void 0 === d || d === !1) return !0;
				if (e = c.split("_"), e.length > 1) {
					var f = b.find(p + "-" + e[0]);
					if (f.length > 0) {
						var g = e[1];
						"replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d)
					}
				} else b.find(p + "-" + c).html(d)
			})
		},
		_getScrollbarSize: function () {
			if (void 0 === b.scrollbarSize) {
				var a = document.createElement("div");
				a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
			}
			return b.scrollbarSize
		}
	}, a.magnificPopup = {
		instance: null,
		proto: t.prototype,
		modules: [],
		open: function (b, c) {
			return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
		},
		close: function () {
			return a.magnificPopup.instance && a.magnificPopup.instance.close()
		},
		registerModule: function (b, c) {
			c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
		},
		defaults: {
			disableOn: 0,
			key: null,
			midClick: !1,
			mainClass: "",
			preloader: !0,
			focus: "",
			closeOnContentClick: !1,
			closeOnBgClick: !0,
			closeBtnInside: !0,
			showCloseBtn: !0,
			enableEscapeKey: !0,
			modal: !1,
			alignTop: !1,
			removalDelay: 0,
			prependTo: null,
			fixedContentPos: "auto",
			fixedBgPos: "auto",
			overflowY: "auto",
			closeMarkup: '<button title="%title%" type="button" class="mfp-close">×</button>',
			tClose: "Close (Esc)",
			tLoading: "Loading...",
			autoFocusLast: !0
		}
	}, a.fn.magnificPopup = function (c) {
		A();
		var d = a(this);
		if ("string" == typeof c)
			if ("open" === c) {
				var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup,
					g = parseInt(arguments[1], 10) || 0;
				f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
					mfpEl: e
				}, d, f)
			} else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
		else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
		return d
	};
	var C, D, E, F = "inline",
		G = function () {
			E && (D.after(E.addClass(C)).detach(), E = null)
		};
	a.magnificPopup.registerModule(F, {
		options: {
			hiddenClass: "hide",
			markup: "",
			tNotFound: "Content not found"
		},
		proto: {
			initInline: function () {
				b.types.push(F), w(h + "." + F, function () {
					G()
				})
			},
			getInline: function (c, d) {
				if (G(), c.src) {
					var e = b.st.inline,
						f = a(c.src);
					if (f.length) {
						var g = f[0].parentNode;
						g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
					} else b.updateStatus("error", e.tNotFound), f = a("<div>");
					return c.inlineElement = f, f
				}
				return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
			}
		}
	});
	var H, I = "ajax",
		J = function () {
			H && a(document.body).removeClass(H)
		},
		K = function () {
			J(), b.req && b.req.abort()
		};
	a.magnificPopup.registerModule(I, {
		options: {
			settings: null,
			cursor: "mfp-ajax-cur",
			tError: '<a href="%url%">The content</a> could not be loaded.'
		},
		proto: {
			initAjax: function () {
				b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
			},
			getAjax: function (c) {
				H && a(document.body).addClass(H), b.updateStatus("loading");
				var d = a.extend({
					url: c.src,
					success: function (d, e, f) {
						var g = {
							data: d,
							xhr: f
						};
						y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () {
							b.wrap.addClass(q)
						}, 16), b.updateStatus("ready"), y("AjaxContentAdded")
					},
					error: function () {
						J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
					}
				}, b.st.ajax.settings);
				return b.req = a.ajax(d), ""
			}
		}
	});
	var L, M = function (c) {
		if (c.data && void 0 !== c.data.title) return c.data.title;
		var d = b.st.image.titleSrc;
		if (d) {
			if (a.isFunction(d)) return d.call(b, c);
			if (c.el) return c.el.attr(d) || ""
		}
		return ""
	};
	a.magnificPopup.registerModule("image", {
		options: {
			markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
			cursor: "mfp-zoom-out-cur",
			titleSrc: "title",
			verticalFit: !0,
			tError: '<a href="%url%">The image</a> could not be loaded.'
		},
		proto: {
			initImage: function () {
				var c = b.st.image,
					d = ".image";
				b.types.push("image"), w(m + d, function () {
					"image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
				}), w(h + d, function () {
					c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
				}), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
			},
			resizeImage: function () {
				var a = b.currItem;
				if (a && a.img && b.st.image.verticalFit) {
					var c = 0;
					b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
				}
			},
			_onImageHasSize: function (a) {
				a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
			},
			findImageSize: function (a) {
				var c = 0,
					d = a.img[0],
					e = function (f) {
						L && clearInterval(L), L = setInterval(function () {
							return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
						}, f)
					};
				e(1)
			},
			getImage: function (c, d) {
				var e = 0,
					f = function () {
						c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
					},
					g = function () {
						c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
					},
					h = b.st.image,
					i = d.find(".mfp-img");
				if (i.length) {
					var j = document.createElement("img");
					j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
				}
				return b._parseMarkup(d, {
					title: M(c),
					img_replaceWith: c.img
				}, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
			}
		}
	});
	var N, O = function () {
		return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
	};
	a.magnificPopup.registerModule("zoom", {
		options: {
			enabled: !1,
			easing: "ease-in-out",
			duration: 300,
			opener: function (a) {
				return a.is("img") ? a : a.find("img")
			}
		},
		proto: {
			initZoom: function () {
				var a, c = b.st.zoom,
					d = ".zoom";
				if (c.enabled && b.supportsTransition) {
					var e, f, g = c.duration,
						j = function (a) {
							var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
								d = "all " + c.duration / 1e3 + "s " + c.easing,
								e = {
									position: "fixed",
									zIndex: 9999,
									left: 0,
									top: 0,
									"-webkit-backface-visibility": "hidden"
								},
								f = "transition";
							return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
						},
						k = function () {
							b.content.css("visibility", "visible")
						};
					w("BuildControls" + d, function () {
						if (b._allowZoom()) {
							if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
							f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () {
								f.css(b._getOffset(!0)), e = setTimeout(function () {
									k(), setTimeout(function () {
										f.remove(), a = f = null, y("ZoomAnimationEnded")
									}, 16)
								}, g)
							}, 16)
						}
					}), w(i + d, function () {
						if (b._allowZoom()) {
							if (clearTimeout(e), b.st.removalDelay = g, !a) {
								if (a = b._getItemToZoom(), !a) return;
								f = j(a)
							}
							f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () {
								f.css(b._getOffset())
							}, 16)
						}
					}), w(h + d, function () {
						b._allowZoom() && (k(), f && f.remove(), a = null)
					})
				}
			},
			_allowZoom: function () {
				return "image" === b.currItem.type
			},
			_getItemToZoom: function () {
				return b.currItem.hasSize ? b.currItem.img : !1
			},
			_getOffset: function (c) {
				var d;
				d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
				var e = d.offset(),
					f = parseInt(d.css("padding-top"), 10),
					g = parseInt(d.css("padding-bottom"), 10);
				e.top -= a(window).scrollTop() - f;
				var h = {
					width: d.width(),
					height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
				};
				return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
			}
		}
	});
	var P = "iframe",
		Q = "//about:blank",
		R = function (a) {
			if (b.currTemplate[P]) {
				var c = b.currTemplate[P].find("iframe");
				c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
			}
		};
	a.magnificPopup.registerModule(P, {
		options: {
			markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
			srcAction: "iframe_src",
			patterns: {
				youtube: {
					index: "youtube.com",
					id: "v=",
					src: "//www.youtube.com/embed/%id%?autoplay=1"
				},
				vimeo: {
					index: "vimeo.com/",
					id: "/",
					src: "//player.vimeo.com/video/%id%?autoplay=1"
				},
				gmaps: {
					index: "//maps.google.",
					src: "%id%&output=embed"
				}
			}
		},
		proto: {
			initIframe: function () {
				b.types.push(P), w("BeforeChange", function (a, b, c) {
					b !== c && (b === P ? R() : c === P && R(!0))
				}), w(h + "." + P, function () {
					R()
				})
			},
			getIframe: function (c, d) {
				var e = c.src,
					f = b.st.iframe;
				a.each(f.patterns, function () {
					return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
				});
				var g = {};
				return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
			}
		}
	});
	var S = function (a) {
			var c = b.items.length;
			return a > c - 1 ? a - c : 0 > a ? c + a : a
		},
		T = function (a, b, c) {
			return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
		};
	a.magnificPopup.registerModule("gallery", {
		options: {
			enabled: !1,
			arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
			preload: [0, 2],
			navigateByImgClick: !0,
			arrows: !0,
			tPrev: "Previous (Left arrow key)",
			tNext: "Next (Right arrow key)",
			tCounter: "%curr% of %total%"
		},
		proto: {
			initGallery: function () {
				var c = b.st.gallery,
					e = ".mfp-gallery";
				return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function () {
					c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () {
						return b.items.length > 1 ? (b.next(), !1) : void 0
					}), d.on("keydown" + e, function (a) {
						37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
					})
				}), w("UpdateStatus" + e, function (a, c) {
					c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
				}), w(l + e, function (a, d, e, f) {
					var g = b.items.length;
					e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
				}), w("BuildControls" + e, function () {
					if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
						var d = c.arrowMarkup,
							e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
							f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
						e.click(function () {
							b.prev()
						}), f.click(function () {
							b.next()
						}), b.container.append(e.add(f))
					}
				}), w(n + e, function () {
					b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () {
						b.preloadNearbyImages(), b._preloadTimeout = null
					}, 16)
				}), void w(h + e, function () {
					d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null
				})) : !1
			},
			next: function () {
				b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
			},
			prev: function () {
				b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
			},
			goTo: function (a) {
				b.direction = a >= b.index, b.index = a, b.updateItemHTML()
			},
			preloadNearbyImages: function () {
				var a, c = b.st.gallery.preload,
					d = Math.min(c[0], b.items.length),
					e = Math.min(c[1], b.items.length);
				for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
				for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
			},
			_preloadItem: function (c) {
				if (c = S(c), !b.items[c].preloaded) {
					var d = b.items[c];
					d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () {
						d.hasSize = !0
					}).on("error.mfploader", function () {
						d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
					}).attr("src", d.src)), d.preloaded = !0
				}
			}
		}
	});
	var U = "retina";
	a.magnificPopup.registerModule(U, {
		options: {
			replaceSrc: function (a) {
				return a.src.replace(/\.\w+$/, function (a) {
					return "@2x" + a
				})
			},
			ratio: 1
		},
		proto: {
			initRetina: function () {
				if (window.devicePixelRatio > 1) {
					var a = b.st.retina,
						c = a.ratio;
					c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) {
						b.img.css({
							"max-width": b.img[0].naturalWidth / c,
							width: "100%"
						})
					}), w("ElementParse." + U, function (b, d) {
						d.src = a.replaceSrc(d, c)
					}))
				}
			}
		}
	}), A()
});


// jquery easing
! function (n) {
	"function" == typeof define && define.amd ? define(["jquery"], function (e) {
		return n(e)
	}) : "object" == typeof module && "object" == typeof module.exports ? exports = n(require("jquery")) : n(jQuery)
}(function (n) {
	function e(n) {
		var e = 7.5625,
			t = 2.75;
		return n < 1 / t ? e * n * n : n < 2 / t ? e * (n -= 1.5 / t) * n + .75 : n < 2.5 / t ? e * (n -= 2.25 / t) * n + .9375 : e * (n -= 2.625 / t) * n + .984375
	}
	n.easing.jswing = n.easing.swing;
	var t = Math.pow,
		u = Math.sqrt,
		r = Math.sin,
		i = Math.cos,
		a = Math.PI,
		c = 1.70158,
		o = 1.525 * c,
		s = 2 * a / 3,
		f = 2 * a / 4.5;
	n.extend(n.easing, {
		def: "easeOutQuad",
		swing: function (e) {
			return n.easing[n.easing.def](e)
		},
		easeInQuad: function (n) {
			return n * n
		},
		easeOutQuad: function (n) {
			return 1 - (1 - n) * (1 - n)
		},
		easeInOutQuad: function (n) {
			return n < .5 ? 2 * n * n : 1 - t(-2 * n + 2, 2) / 2
		},
		easeInCubic: function (n) {
			return n * n * n
		},
		easeOutCubic: function (n) {
			return 1 - t(1 - n, 3)
		},
		easeInOutCubic: function (n) {
			return n < .5 ? 4 * n * n * n : 1 - t(-2 * n + 2, 3) / 2
		},
		easeInQuart: function (n) {
			return n * n * n * n
		},
		easeOutQuart: function (n) {
			return 1 - t(1 - n, 4)
		},
		easeInOutQuart: function (n) {
			return n < .5 ? 8 * n * n * n * n : 1 - t(-2 * n + 2, 4) / 2
		},
		easeInQuint: function (n) {
			return n * n * n * n * n
		},
		easeOutQuint: function (n) {
			return 1 - t(1 - n, 5)
		},
		easeInOutQuint: function (n) {
			return n < .5 ? 16 * n * n * n * n * n : 1 - t(-2 * n + 2, 5) / 2
		},
		easeInSine: function (n) {
			return 1 - i(n * a / 2)
		},
		easeOutSine: function (n) {
			return r(n * a / 2)
		},
		easeInOutSine: function (n) {
			return -(i(a * n) - 1) / 2
		},
		easeInExpo: function (n) {
			return 0 === n ? 0 : t(2, 10 * n - 10)
		},
		easeOutExpo: function (n) {
			return 1 === n ? 1 : 1 - t(2, -10 * n)
		},
		easeInOutExpo: function (n) {
			return 0 === n ? 0 : 1 === n ? 1 : n < .5 ? t(2, 20 * n - 10) / 2 : (2 - t(2, -20 * n + 10)) / 2
		},
		easeInCirc: function (n) {
			return 1 - u(1 - t(n, 2))
		},
		easeOutCirc: function (n) {
			return u(1 - t(n - 1, 2))
		},
		easeInOutCirc: function (n) {
			return n < .5 ? (1 - u(1 - t(2 * n, 2))) / 2 : (u(1 - t(-2 * n + 2, 2)) + 1) / 2
		},
		easeInElastic: function (n) {
			return 0 === n ? 0 : 1 === n ? 1 : -t(2, 10 * n - 10) * r((10 * n - 10.75) * s)
		},
		easeOutElastic: function (n) {
			return 0 === n ? 0 : 1 === n ? 1 : t(2, -10 * n) * r((10 * n - .75) * s) + 1
		},
		easeInOutElastic: function (n) {
			return 0 === n ? 0 : 1 === n ? 1 : n < .5 ? -(t(2, 20 * n - 10) * r((20 * n - 11.125) * f)) / 2 : t(2, -20 * n + 10) * r((20 * n - 11.125) * f) / 2 + 1
		},
		easeInBack: function (n) {
			return (c + 1) * n * n * n - c * n * n
		},
		easeOutBack: function (n) {
			return 1 + (c + 1) * t(n - 1, 3) + c * t(n - 1, 2)
		},
		easeInOutBack: function (n) {
			return n < .5 ? t(2 * n, 2) * (7.189819 * n - o) / 2 : (t(2 * n - 2, 2) * ((o + 1) * (2 * n - 2) + o) + 2) / 2
		},
		easeInBounce: function (n) {
			return 1 - e(1 - n)
		},
		easeOutBounce: e,
		easeInOutBounce: function (n) {
			return n < .5 ? (1 - e(1 - 2 * n)) / 2 : (1 + e(2 * n - 1)) / 2
		}
	})
});


/**
 * Swiper 4.1.6
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2018 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: February 11, 2018
 */
! function (e, t) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t()
}(this, function () {
	"use strict";
	var e = "undefined" == typeof document ? {
			body: {},
			addEventListener: function () {},
			removeEventListener: function () {},
			activeElement: {
				blur: function () {},
				nodeName: ""
			},
			querySelector: function () {
				return null
			},
			querySelectorAll: function () {
				return []
			},
			getElementById: function () {
				return null
			},
			createEvent: function () {
				return {
					initEvent: function () {}
				}
			},
			createElement: function () {
				return {
					children: [],
					childNodes: [],
					style: {},
					setAttribute: function () {},
					getElementsByTagName: function () {
						return []
					}
				}
			},
			location: {
				hash: ""
			}
		} : document,
		t = "undefined" == typeof window ? {
			document: e,
			navigator: {
				userAgent: ""
			},
			location: {},
			history: {},
			CustomEvent: function () {
				return this
			},
			addEventListener: function () {},
			removeEventListener: function () {},
			getComputedStyle: function () {
				return {
					getPropertyValue: function () {
						return ""
					}
				}
			},
			Image: function () {},
			Date: function () {},
			screen: {},
			setTimeout: function () {},
			clearTimeout: function () {}
		} : window,
		i = function (e) {
			for (var t = 0; t < e.length; t += 1) this[t] = e[t];
			return this.length = e.length, this
		};

	function s(s, a) {
		var r = [],
			n = 0;
		if (s && !a && s instanceof i) return s;
		if (s)
			if ("string" == typeof s) {
				var o, l, d = s.trim();
				if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
					var h = "div";
					for (0 === d.indexOf("<li") && (h = "ul"), 0 === d.indexOf("<tr") && (h = "tbody"), 0 !== d.indexOf("<td") && 0 !== d.indexOf("<th") || (h = "tr"), 0 === d.indexOf("<tbody") && (h = "table"), 0 === d.indexOf("<option") && (h = "select"), (l = e.createElement(h)).innerHTML = d, n = 0; n < l.childNodes.length; n += 1) r.push(l.childNodes[n])
				} else
					for (o = a || "#" !== s[0] || s.match(/[ .<>:~]/) ? (a || e).querySelectorAll(s.trim()) : [e.getElementById(s.trim().split("#")[1])], n = 0; n < o.length; n += 1) o[n] && r.push(o[n])
			} else if (s.nodeType || s === t || s === e) r.push(s);
		else if (s.length > 0 && s[0].nodeType)
			for (n = 0; n < s.length; n += 1) r.push(s[n]);
		return new i(r)
	}

	function a(e) {
		for (var t = [], i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
		return t
	}
	s.fn = i.prototype, s.Class = i, s.Dom7 = i;
	"resize scroll".split(" ");
	var r = {
		addClass: function (e) {
			if (void 0 === e) return this;
			for (var t = e.split(" "), i = 0; i < t.length; i += 1)
				for (var s = 0; s < this.length; s += 1) void 0 !== this[s].classList && this[s].classList.add(t[i]);
			return this
		},
		removeClass: function (e) {
			for (var t = e.split(" "), i = 0; i < t.length; i += 1)
				for (var s = 0; s < this.length; s += 1) void 0 !== this[s].classList && this[s].classList.remove(t[i]);
			return this
		},
		hasClass: function (e) {
			return !!this[0] && this[0].classList.contains(e)
		},
		toggleClass: function (e) {
			for (var t = e.split(" "), i = 0; i < t.length; i += 1)
				for (var s = 0; s < this.length; s += 1) void 0 !== this[s].classList && this[s].classList.toggle(t[i]);
			return this
		},
		attr: function (e, t) {
			var i = arguments;
			if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
			for (var s = 0; s < this.length; s += 1)
				if (2 === i.length) this[s].setAttribute(e, t);
				else
					for (var a in e) this[s][a] = e[a], this[s].setAttribute(a, e[a]);
			return this
		},
		removeAttr: function (e) {
			for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
			return this
		},
		data: function (e, t) {
			var i;
			if (void 0 !== t) {
				for (var s = 0; s < this.length; s += 1)(i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
				return this
			}
			if (i = this[0]) {
				if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];
				var a = i.getAttribute("data-" + e);
				return a || void 0
			}
		},
		transform: function (e) {
			for (var t = 0; t < this.length; t += 1) {
				var i = this[t].style;
				i.webkitTransform = e, i.transform = e
			}
			return this
		},
		transition: function (e) {
			"string" != typeof e && (e += "ms");
			for (var t = 0; t < this.length; t += 1) {
				var i = this[t].style;
				i.webkitTransitionDuration = e, i.transitionDuration = e
			}
			return this
		},
		on: function () {
			for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
			var i, a = e[0],
				r = e[1],
				n = e[2],
				o = e[3];

			function l(e) {
				var t = e.target;
				if (t) {
					var i = e.target.dom7EventData || [];
					if (i.unshift(e), s(t).is(r)) n.apply(t, i);
					else
						for (var a = s(t).parents(), o = 0; o < a.length; o += 1) s(a[o]).is(r) && n.apply(a[o], i)
				}
			}

			function d(e) {
				var t = e && e.target ? e.target.dom7EventData || [] : [];
				t.unshift(e), n.apply(this, t)
			}
			"function" == typeof e[1] && (a = (i = e)[0], n = i[1], o = i[2], r = void 0), o || (o = !1);
			for (var h, p = a.split(" "), c = 0; c < this.length; c += 1) {
				var u = this[c];
				if (r)
					for (h = 0; h < p.length; h += 1) u.dom7LiveListeners || (u.dom7LiveListeners = []), u.dom7LiveListeners.push({
						type: a,
						listener: n,
						proxyListener: l
					}), u.addEventListener(p[h], l, o);
				else
					for (h = 0; h < p.length; h += 1) u.dom7Listeners || (u.dom7Listeners = []), u.dom7Listeners.push({
						type: a,
						listener: n,
						proxyListener: d
					}), u.addEventListener(p[h], d, o)
			}
			return this
		},
		off: function () {
			for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
			var i, s = e[0],
				a = e[1],
				r = e[2],
				n = e[3];
			"function" == typeof e[1] && (s = (i = e)[0], r = i[1], n = i[2], a = void 0), n || (n = !1);
			for (var o = s.split(" "), l = 0; l < o.length; l += 1)
				for (var d = 0; d < this.length; d += 1) {
					var h = this[d];
					if (a) {
						if (h.dom7LiveListeners)
							for (var p = 0; p < h.dom7LiveListeners.length; p += 1) r ? h.dom7LiveListeners[p].listener === r && h.removeEventListener(o[l], h.dom7LiveListeners[p].proxyListener, n) : h.dom7LiveListeners[p].type === o[l] && h.removeEventListener(o[l], h.dom7LiveListeners[p].proxyListener, n)
					} else if (h.dom7Listeners)
						for (var c = 0; c < h.dom7Listeners.length; c += 1) r ? h.dom7Listeners[c].listener === r && h.removeEventListener(o[l], h.dom7Listeners[c].proxyListener, n) : h.dom7Listeners[c].type === o[l] && h.removeEventListener(o[l], h.dom7Listeners[c].proxyListener, n)
				}
			return this
		},
		trigger: function () {
			for (var i = [], s = arguments.length; s--;) i[s] = arguments[s];
			for (var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1)
				for (var o = 0; o < this.length; o += 1) {
					var l = void 0;
					try {
						l = new t.CustomEvent(a[n], {
							detail: r,
							bubbles: !0,
							cancelable: !0
						})
					} catch (t) {
						(l = e.createEvent("Event")).initEvent(a[n], !0, !0), l.detail = r
					}
					this[o].dom7EventData = i.filter(function (e, t) {
						return t > 0
					}), this[o].dispatchEvent(l), this[o].dom7EventData = [], delete this[o].dom7EventData
				}
			return this
		},
		transitionEnd: function (e) {
			var t, i = ["webkitTransitionEnd", "transitionend"],
				s = this;

			function a(r) {
				if (r.target === this)
					for (e.call(this, r), t = 0; t < i.length; t += 1) s.off(i[t], a)
			}
			if (e)
				for (t = 0; t < i.length; t += 1) s.on(i[t], a);
			return this
		},
		outerWidth: function (e) {
			if (this.length > 0) {
				if (e) {
					var t = this.styles();
					return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
				}
				return this[0].offsetWidth
			}
			return null
		},
		outerHeight: function (e) {
			if (this.length > 0) {
				if (e) {
					var t = this.styles();
					return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
				}
				return this[0].offsetHeight
			}
			return null
		},
		offset: function () {
			if (this.length > 0) {
				var i = this[0],
					s = i.getBoundingClientRect(),
					a = e.body,
					r = i.clientTop || a.clientTop || 0,
					n = i.clientLeft || a.clientLeft || 0,
					o = i === t ? t.scrollY : i.scrollTop,
					l = i === t ? t.scrollX : i.scrollLeft;
				return {
					top: s.top + o - r,
					left: s.left + l - n
				}
			}
			return null
		},
		css: function (e, i) {
			var s;
			if (1 === arguments.length) {
				if ("string" != typeof e) {
					for (s = 0; s < this.length; s += 1)
						for (var a in e) this[s].style[a] = e[a];
					return this
				}
				if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(e)
			}
			if (2 === arguments.length && "string" == typeof e) {
				for (s = 0; s < this.length; s += 1) this[s].style[e] = i;
				return this
			}
			return this
		},
		each: function (e) {
			if (!e) return this;
			for (var t = 0; t < this.length; t += 1)
				if (!1 === e.call(this[t], t, this[t])) return this;
			return this
		},
		html: function (e) {
			if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
			for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
			return this
		},
		text: function (e) {
			if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
			for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
			return this
		},
		is: function (a) {
			var r, n, o = this[0];
			if (!o || void 0 === a) return !1;
			if ("string" == typeof a) {
				if (o.matches) return o.matches(a);
				if (o.webkitMatchesSelector) return o.webkitMatchesSelector(a);
				if (o.msMatchesSelector) return o.msMatchesSelector(a);
				for (r = s(a), n = 0; n < r.length; n += 1)
					if (r[n] === o) return !0;
				return !1
			}
			if (a === e) return o === e;
			if (a === t) return o === t;
			if (a.nodeType || a instanceof i) {
				for (r = a.nodeType ? [a] : a, n = 0; n < r.length; n += 1)
					if (r[n] === o) return !0;
				return !1
			}
			return !1
		},
		index: function () {
			var e, t = this[0];
			if (t) {
				for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
				return e
			}
		},
		eq: function (e) {
			if (void 0 === e) return this;
			var t, s = this.length;
			return new i(e > s - 1 ? [] : e < 0 ? (t = s + e) < 0 ? [] : [this[t]] : [this[e]])
		},
		append: function () {
			for (var t, s = [], a = arguments.length; a--;) s[a] = arguments[a];
			for (var r = 0; r < s.length; r += 1) {
				t = s[r];
				for (var n = 0; n < this.length; n += 1)
					if ("string" == typeof t) {
						var o = e.createElement("div");
						for (o.innerHTML = t; o.firstChild;) this[n].appendChild(o.firstChild)
					} else if (t instanceof i)
					for (var l = 0; l < t.length; l += 1) this[n].appendChild(t[l]);
				else this[n].appendChild(t)
			}
			return this
		},
		prepend: function (t) {
			var s, a;
			for (s = 0; s < this.length; s += 1)
				if ("string" == typeof t) {
					var r = e.createElement("div");
					for (r.innerHTML = t, a = r.childNodes.length - 1; a >= 0; a -= 1) this[s].insertBefore(r.childNodes[a], this[s].childNodes[0])
				} else if (t instanceof i)
				for (a = 0; a < t.length; a += 1) this[s].insertBefore(t[a], this[s].childNodes[0]);
			else this[s].insertBefore(t, this[s].childNodes[0]);
			return this
		},
		next: function (e) {
			return this.length > 0 ? e ? this[0].nextElementSibling && s(this[0].nextElementSibling).is(e) ? new i([this[0].nextElementSibling]) : new i([]) : this[0].nextElementSibling ? new i([this[0].nextElementSibling]) : new i([]) : new i([])
		},
		nextAll: function (e) {
			var t = [],
				a = this[0];
			if (!a) return new i([]);
			for (; a.nextElementSibling;) {
				var r = a.nextElementSibling;
				e ? s(r).is(e) && t.push(r) : t.push(r), a = r
			}
			return new i(t)
		},
		prev: function (e) {
			if (this.length > 0) {
				var t = this[0];
				return e ? t.previousElementSibling && s(t.previousElementSibling).is(e) ? new i([t.previousElementSibling]) : new i([]) : t.previousElementSibling ? new i([t.previousElementSibling]) : new i([])
			}
			return new i([])
		},
		prevAll: function (e) {
			var t = [],
				a = this[0];
			if (!a) return new i([]);
			for (; a.previousElementSibling;) {
				var r = a.previousElementSibling;
				e ? s(r).is(e) && t.push(r) : t.push(r), a = r
			}
			return new i(t)
		},
		parent: function (e) {
			for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? s(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
			return s(a(t))
		},
		parents: function (e) {
			for (var t = [], i = 0; i < this.length; i += 1)
				for (var r = this[i].parentNode; r;) e ? s(r).is(e) && t.push(r) : t.push(r), r = r.parentNode;
			return s(a(t))
		},
		closest: function (e) {
			var t = this;
			return void 0 === e ? new i([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
		},
		find: function (e) {
			for (var t = [], s = 0; s < this.length; s += 1)
				for (var a = this[s].querySelectorAll(e), r = 0; r < a.length; r += 1) t.push(a[r]);
			return new i(t)
		},
		children: function (e) {
			for (var t = [], r = 0; r < this.length; r += 1)
				for (var n = this[r].childNodes, o = 0; o < n.length; o += 1) e ? 1 === n[o].nodeType && s(n[o]).is(e) && t.push(n[o]) : 1 === n[o].nodeType && t.push(n[o]);
			return new i(a(t))
		},
		remove: function () {
			for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
			return this
		},
		add: function () {
			for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
			var i, a;
			for (i = 0; i < e.length; i += 1) {
				var r = s(e[i]);
				for (a = 0; a < r.length; a += 1) this[this.length] = r[a], this.length += 1
			}
			return this
		},
		styles: function () {
			return this[0] ? t.getComputedStyle(this[0], null) : {}
		}
	};
	Object.keys(r).forEach(function (e) {
		s.fn[e] = r[e]
	});
	var n, o, l, d = {
			deleteProps: function (e) {
				var t = e;
				Object.keys(t).forEach(function (e) {
					try {
						t[e] = null
					} catch (e) {}
					try {
						delete t[e]
					} catch (e) {}
				})
			},
			nextTick: function (e, t) {
				return void 0 === t && (t = 0), setTimeout(e, t)
			},
			now: function () {
				return Date.now()
			},
			getTranslate: function (e, i) {
				var s, a, r;
				void 0 === i && (i = "x");
				var n = t.getComputedStyle(e, null);
				return t.WebKitCSSMatrix ? ((a = n.transform || n.webkitTransform).split(",").length > 6 && (a = a.split(", ").map(function (e) {
					return e.replace(",", ".")
				}).join(", ")), r = new t.WebKitCSSMatrix("none" === a ? "" : a)) : s = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === i && (a = t.WebKitCSSMatrix ? r.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])), "y" === i && (a = t.WebKitCSSMatrix ? r.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])), a || 0
			},
			parseUrlQuery: function (e) {
				var i, s, a, r, n = {},
					o = e || t.location.href;
				if ("string" == typeof o && o.length)
					for (r = (s = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
							return "" !== e
						})).length, i = 0; i < r; i += 1) a = s[i].replace(/#\S+/g, "").split("="), n[decodeURIComponent(a[0])] = void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || "";
				return n
			},
			isObject: function (e) {
				return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
			},
			extend: function () {
				for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
				for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
					var a = e[s];
					if (void 0 !== a && null !== a)
						for (var r = Object.keys(Object(a)), n = 0, o = r.length; n < o; n += 1) {
							var l = r[n],
								h = Object.getOwnPropertyDescriptor(a, l);
							void 0 !== h && h.enumerable && (d.isObject(i[l]) && d.isObject(a[l]) ? d.extend(i[l], a[l]) : !d.isObject(i[l]) && d.isObject(a[l]) ? (i[l] = {}, d.extend(i[l], a[l])) : i[l] = a[l])
						}
				}
				return i
			}
		},
		h = (l = e.createElement("div"), {
			touch: t.Modernizr && !0 === t.Modernizr.touch || !!("ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch),
			pointerEvents: !(!t.navigator.pointerEnabled && !t.PointerEvent),
			prefixedPointerEvents: !!t.navigator.msPointerEnabled,
			transition: (o = l.style, "transition" in o || "webkitTransition" in o || "MozTransition" in o),
			transforms3d: t.Modernizr && !0 === t.Modernizr.csstransforms3d || (n = l.style, "webkitPerspective" in n || "MozPerspective" in n || "OPerspective" in n || "MsPerspective" in n || "perspective" in n),
			flexbox: function () {
				for (var e = l.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i += 1)
					if (t[i] in e) return !0;
				return !1
			}(),
			observer: "MutationObserver" in t || "WebkitMutationObserver" in t,
			passiveListener: function () {
				var e = !1;
				try {
					var i = Object.defineProperty({}, "passive", {
						get: function () {
							e = !0
						}
					});
					t.addEventListener("testPassiveListener", null, i)
				} catch (e) {}
				return e
			}(),
			gestures: "ongesturestart" in t
		}),
		p = function (e) {
			void 0 === e && (e = {});
			var t = this;
			t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) {
				t.on(e, t.params.on[e])
			})
		},
		c = {
			components: {
				configurable: !0
			}
		};
	p.prototype.on = function (e, t) {
		var i = this;
		return "function" != typeof t ? i : (e.split(" ").forEach(function (e) {
			i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e].push(t)
		}), i)
	}, p.prototype.once = function (e, t) {
		var i = this;
		if ("function" != typeof t) return i;
		return i.on(e, function s() {
			for (var a = [], r = arguments.length; r--;) a[r] = arguments[r];
			t.apply(i, a), i.off(e, s)
		})
	}, p.prototype.off = function (e, t) {
		var i = this;
		return e.split(" ").forEach(function (e) {
			void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e].forEach(function (s, a) {
				s === t && i.eventsListeners[e].splice(a, 1)
			})
		}), i
	}, p.prototype.emit = function () {
		for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
		var i, s, a, r = this;
		return r.eventsListeners ? ("string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), a = r) : (i = e[0].events, s = e[0].data, a = e[0].context || r), (Array.isArray(i) ? i : i.split(" ")).forEach(function (e) {
			if (r.eventsListeners[e]) {
				var t = [];
				r.eventsListeners[e].forEach(function (e) {
					t.push(e)
				}), t.forEach(function (e) {
					e.apply(a, s)
				})
			}
		}), r) : r
	}, p.prototype.useModulesParams = function (e) {
		var t = this;
		t.modules && Object.keys(t.modules).forEach(function (i) {
			var s = t.modules[i];
			s.params && d.extend(e, s.params)
		})
	}, p.prototype.useModules = function (e) {
		void 0 === e && (e = {});
		var t = this;
		t.modules && Object.keys(t.modules).forEach(function (i) {
			var s = t.modules[i],
				a = e[i] || {};
			s.instance && Object.keys(s.instance).forEach(function (e) {
				var i = s.instance[e];
				t[e] = "function" == typeof i ? i.bind(t) : i
			}), s.on && t.on && Object.keys(s.on).forEach(function (e) {
				t.on(e, s.on[e])
			}), s.create && s.create.bind(t)(a)
		})
	}, c.components.set = function (e) {
		this.use && this.use(e)
	}, p.installModule = function (e) {
		for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
		var s = this;
		s.prototype.modules || (s.prototype.modules = {});
		var a = e.name || Object.keys(s.prototype.modules).length + "_" + d.now();
		return s.prototype.modules[a] = e, e.proto && Object.keys(e.proto).forEach(function (t) {
			s.prototype[t] = e.proto[t]
		}), e.static && Object.keys(e.static).forEach(function (t) {
			s[t] = e.static[t]
		}), e.install && e.install.apply(s, t), s
	}, p.use = function (e) {
		for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
		var s = this;
		return Array.isArray(e) ? (e.forEach(function (e) {
			return s.installModule(e)
		}), s) : s.installModule.apply(s, [e].concat(t))
	}, Object.defineProperties(p, c);
	var u = {
			updateSize: function () {
				var e, t, i = this.$el;
				e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), d.extend(this, {
					width: e,
					height: t,
					size: this.isHorizontal() ? e : t
				}))
			},
			updateSlides: function () {
				var e = this.params,
					t = this.$wrapperEl,
					i = this.size,
					s = this.rtl,
					a = this.wrongRTL,
					r = t.children("." + this.params.slideClass),
					n = this.virtual && e.virtual.enabled ? this.virtual.slides.length : r.length,
					o = [],
					l = [],
					p = [],
					c = e.slidesOffsetBefore;
				"function" == typeof c && (c = e.slidesOffsetBefore.call(this));
				var u = e.slidesOffsetAfter;
				"function" == typeof u && (u = e.slidesOffsetAfter.call(this));
				var v = n,
					f = this.snapGrid.length,
					m = this.snapGrid.length,
					g = e.spaceBetween,
					b = -c,
					w = 0,
					y = 0;
				if (void 0 !== i) {
					var x, E;
					"string" == typeof g && g.indexOf("%") >= 0 && (g = parseFloat(g.replace("%", "")) / 100 * i), this.virtualSize = -g, s ? r.css({
						marginLeft: "",
						marginTop: ""
					}) : r.css({
						marginRight: "",
						marginBottom: ""
					}), e.slidesPerColumn > 1 && (x = Math.floor(n / e.slidesPerColumn) === n / this.params.slidesPerColumn ? n : Math.ceil(n / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (x = Math.max(x, e.slidesPerView * e.slidesPerColumn)));
					for (var T, S = e.slidesPerColumn, C = x / S, M = C - (e.slidesPerColumn * C - n), z = 0; z < n; z += 1) {
						E = 0;
						var P = r.eq(z);
						if (e.slidesPerColumn > 1) {
							var k = void 0,
								$ = void 0,
								L = void 0;
							"column" === e.slidesPerColumnFill ? (L = z - ($ = Math.floor(z / S)) * S, ($ > M || $ === M && L === S - 1) && (L += 1) >= S && (L = 0, $ += 1), k = $ + L * x / S, P.css({
								"-webkit-box-ordinal-group": k,
								"-moz-box-ordinal-group": k,
								"-ms-flex-order": k,
								"-webkit-order": k,
								order: k
							})) : $ = z - (L = Math.floor(z / C)) * C, P.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== L && e.spaceBetween && e.spaceBetween + "px").attr("data-swiper-column", $).attr("data-swiper-row", L)
						}
						"none" !== P.css("display") && ("auto" === e.slidesPerView ? (E = this.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0), e.roundLengths && (E = Math.floor(E))) : (E = (i - (e.slidesPerView - 1) * g) / e.slidesPerView, e.roundLengths && (E = Math.floor(E)), r[z] && (this.isHorizontal() ? r[z].style.width = E + "px" : r[z].style.height = E + "px")), r[z] && (r[z].swiperSlideSize = E), p.push(E), e.centeredSlides ? (b = b + E / 2 + w / 2 + g, 0 === w && 0 !== z && (b = b - i / 2 - g), 0 === z && (b = b - i / 2 - g), Math.abs(b) < .001 && (b = 0), y % e.slidesPerGroup == 0 && o.push(b), l.push(b)) : (y % e.slidesPerGroup == 0 && o.push(b), l.push(b), b = b + E + g), this.virtualSize += E + g, w = E, y += 1)
					}
					if (this.virtualSize = Math.max(this.virtualSize, i) + u, s && a && ("slide" === e.effect || "coverflow" === e.effect) && t.css({
							width: this.virtualSize + e.spaceBetween + "px"
						}), h.flexbox && !e.setWrapperSize || (this.isHorizontal() ? t.css({
							width: this.virtualSize + e.spaceBetween + "px"
						}) : t.css({
							height: this.virtualSize + e.spaceBetween + "px"
						})), e.slidesPerColumn > 1 && (this.virtualSize = (E + e.spaceBetween) * x, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? t.css({
							width: this.virtualSize + e.spaceBetween + "px"
						}) : t.css({
							height: this.virtualSize + e.spaceBetween + "px"
						}), e.centeredSlides)) {
						T = [];
						for (var I = 0; I < o.length; I += 1) o[I] < this.virtualSize + o[0] && T.push(o[I]);
						o = T
					}
					if (!e.centeredSlides) {
						T = [];
						for (var D = 0; D < o.length; D += 1) o[D] <= this.virtualSize - i && T.push(o[D]);
						o = T, Math.floor(this.virtualSize - i) - Math.floor(o[o.length - 1]) > 1 && o.push(this.virtualSize - i)
					}
					0 === o.length && (o = [0]), 0 !== e.spaceBetween && (this.isHorizontal() ? s ? r.css({
						marginLeft: g + "px"
					}) : r.css({
						marginRight: g + "px"
					}) : r.css({
						marginBottom: g + "px"
					})), d.extend(this, {
						slides: r,
						snapGrid: o,
						slidesGrid: l,
						slidesSizesGrid: p
					}), n !== v && this.emit("slidesLengthChange"), o.length !== f && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), l.length !== m && this.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset()
				}
			},
			updateAutoHeight: function () {
				var e, t = [],
					i = 0;
				if ("auto" !== this.params.slidesPerView && this.params.slidesPerView > 1)
					for (e = 0; e < Math.ceil(this.params.slidesPerView); e += 1) {
						var s = this.activeIndex + e;
						if (s > this.slides.length) break;
						t.push(this.slides.eq(s)[0])
					} else t.push(this.slides.eq(this.activeIndex)[0]);
				for (e = 0; e < t.length; e += 1)
					if (void 0 !== t[e]) {
						var a = t[e].offsetHeight;
						i = a > i ? a : i
					}
				i && this.$wrapperEl.css("height", i + "px")
			},
			updateSlidesOffset: function () {
				for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
			},
			updateSlidesProgress: function (e) {
				void 0 === e && (e = this.translate || 0);
				var t = this.params,
					i = this.slides,
					s = this.rtl;
				if (0 !== i.length) {
					void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
					var a = -e;
					s && (a = e), i.removeClass(t.slideVisibleClass);
					for (var r = 0; r < i.length; r += 1) {
						var n = i[r],
							o = (a + (t.centeredSlides ? this.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + t.spaceBetween);
						if (t.watchSlidesVisibility) {
							var l = -(a - n.swiperSlideOffset),
								d = l + this.slidesSizesGrid[r];
							(l >= 0 && l < this.size || d > 0 && d <= this.size || l <= 0 && d >= this.size) && i.eq(r).addClass(t.slideVisibleClass)
						}
						n.progress = s ? -o : o
					}
				}
			},
			updateProgress: function (e) {
				void 0 === e && (e = this.translate || 0);
				var t = this.params,
					i = this.maxTranslate() - this.minTranslate(),
					s = this.progress,
					a = this.isBeginning,
					r = this.isEnd,
					n = a,
					o = r;
				0 === i ? (s = 0, a = !0, r = !0) : (a = (s = (e - this.minTranslate()) / i) <= 0, r = s >= 1), d.extend(this, {
					progress: s,
					isBeginning: a,
					isEnd: r
				}), (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesProgress(e), a && !n && this.emit("reachBeginning toEdge"), r && !o && this.emit("reachEnd toEdge"), (n && !a || o && !r) && this.emit("fromEdge"), this.emit("progress", s)
			},
			updateSlidesClasses: function () {
				var e, t = this.slides,
					i = this.params,
					s = this.$wrapperEl,
					a = this.activeIndex,
					r = this.realIndex,
					n = this.virtual && i.virtual.enabled;
				t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
				var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
				i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
				var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
				i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
			},
			updateActiveIndex: function (e) {
				var t, i = this.rtl ? this.translate : -this.translate,
					s = this.slidesGrid,
					a = this.snapGrid,
					r = this.params,
					n = this.activeIndex,
					o = this.realIndex,
					l = this.snapIndex,
					h = e;
				if (void 0 === h) {
					for (var p = 0; p < s.length; p += 1) void 0 !== s[p + 1] ? i >= s[p] && i < s[p + 1] - (s[p + 1] - s[p]) / 2 ? h = p : i >= s[p] && i < s[p + 1] && (h = p + 1) : i >= s[p] && (h = p);
					r.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0)
				}
				if ((t = a.indexOf(i) >= 0 ? a.indexOf(i) : Math.floor(h / r.slidesPerGroup)) >= a.length && (t = a.length - 1), h !== n) {
					var c = parseInt(this.slides.eq(h).attr("data-swiper-slide-index") || h, 10);
					d.extend(this, {
						snapIndex: t,
						realIndex: c,
						previousIndex: n,
						activeIndex: h
					}), this.emit("activeIndexChange"), this.emit("snapIndexChange"), o !== c && this.emit("realIndexChange"), this.emit("slideChange")
				} else t !== l && (this.snapIndex = t, this.emit("snapIndexChange"))
			},
			updateClickedSlide: function (e) {
				var t = this.params,
					i = s(e.target).closest("." + t.slideClass)[0],
					a = !1;
				if (i)
					for (var r = 0; r < this.slides.length; r += 1) this.slides[r] === i && (a = !0);
				if (!i || !a) return this.clickedSlide = void 0, void(this.clickedIndex = void 0);
				this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(s(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = s(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
			}
		},
		v = {
			getTranslate: function (e) {
				void 0 === e && (e = this.isHorizontal() ? "x" : "y");
				var t = this.params,
					i = this.rtl,
					s = this.translate,
					a = this.$wrapperEl;
				if (t.virtualTranslate) return i ? -s : s;
				var r = d.getTranslate(a[0], e);
				return i && (r = -r), r || 0
			},
			setTranslate: function (e, t) {
				var i = this.rtl,
					s = this.params,
					a = this.$wrapperEl,
					r = this.progress,
					n = 0,
					o = 0;
				this.isHorizontal() ? n = i ? -e : e : o = e, s.roundLengths && (n = Math.floor(n), o = Math.floor(o)), s.virtualTranslate || (h.transforms3d ? a.transform("translate3d(" + n + "px, " + o + "px, 0px)") : a.transform("translate(" + n + "px, " + o + "px)")), this.translate = this.isHorizontal() ? n : o;
				var l = this.maxTranslate() - this.minTranslate();
				(0 === l ? 0 : (e - this.minTranslate()) / l) !== r && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
			},
			minTranslate: function () {
				return -this.snapGrid[0]
			},
			maxTranslate: function () {
				return -this.snapGrid[this.snapGrid.length - 1]
			}
		},
		f = {
			setTransition: function (e, t) {
				this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
			},
			transitionStart: function (e, t) {
				void 0 === e && (e = !0);
				var i = this.activeIndex,
					s = this.params,
					a = this.previousIndex;
				s.autoHeight && this.updateAutoHeight();
				var r = t;
				if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"), this.emit("transitionStart"), e && i !== a) {
					if ("reset" === r) return void this.emit("slideResetTransitionStart");
					this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
				}
			},
			transitionEnd: function (e, t) {
				void 0 === e && (e = !0);
				var i = this.activeIndex,
					s = this.previousIndex;
				this.animating = !1, this.setTransition(0);
				var a = t;
				if (a || (a = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) {
					if ("reset" === a) return void this.emit("slideResetTransitionEnd");
					this.emit("slideChangeTransitionEnd"), "next" === a ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
				}
			}
		},
		m = {
			slideTo: function (e, t, i, s) {
				void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
				var a = this,
					r = e;
				r < 0 && (r = 0);
				var n = a.params,
					o = a.snapGrid,
					l = a.slidesGrid,
					d = a.previousIndex,
					p = a.activeIndex,
					c = a.rtl,
					u = a.$wrapperEl;
				if (a.animating && n.preventIntercationOnTransition) return !1;
				var v = Math.floor(r / n.slidesPerGroup);
				v >= o.length && (v = o.length - 1), (p || n.initialSlide || 0) === (d || 0) && i && a.emit("beforeSlideChangeStart");
				var f, m = -o[v];
				if (a.updateProgress(m), n.normalizeSlideIndex)
					for (var g = 0; g < l.length; g += 1) - Math.floor(100 * m) >= Math.floor(100 * l[g]) && (r = g);
				if (a.initialized && r !== p) {
					if (!a.allowSlideNext && m < a.translate && m < a.minTranslate()) return !1;
					if (!a.allowSlidePrev && m > a.translate && m > a.maxTranslate() && (p || 0) !== r) return !1
				}
				return f = r > p ? "next" : r < p ? "prev" : "reset", c && -m === a.translate || !c && m === a.translate ? (a.updateActiveIndex(r), n.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== n.effect && a.setTranslate(m), "reset" !== f && (a.transitionStart(i, f), a.transitionEnd(i, f)), !1) : (0 !== t && h.transition ? (a.setTransition(t), a.setTranslate(m), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, f), a.animating || (a.animating = !0, u.transitionEnd(function () {
					a && !a.destroyed && a.transitionEnd(i, f)
				}))) : (a.setTransition(0), a.setTranslate(m), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, f), a.transitionEnd(i, f)), !0)
			},
			slideToLoop: function (e, t, i, s) {
				void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
				var a = e;
				return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s)
			},
			slideNext: function (e, t, i) {
				void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
				var s = this.params,
					a = this.animating;
				return s.loop ? !a && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i)) : this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i)
			},
			slidePrev: function (e, t, i) {
				void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
				var s = this.params,
					a = this.animating;
				return s.loop ? !a && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex - 1, e, t, i)) : this.slideTo(this.activeIndex - 1, e, t, i)
			},
			slideReset: function (e, t, i) {
				void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
				return this.slideTo(this.activeIndex, e, t, i)
			},
			slideToClickedSlide: function () {
				var e, t = this,
					i = t.params,
					a = t.$wrapperEl,
					r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
					n = t.clickedIndex;
				if (i.loop) {
					if (t.animating) return;
					e = parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? n < t.loopedSlides - r / 2 || n > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), n = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), d.nextTick(function () {
						t.slideTo(n)
					})) : t.slideTo(n) : n > t.slides.length - r ? (t.loopFix(), n = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), d.nextTick(function () {
						t.slideTo(n)
					})) : t.slideTo(n)
				} else t.slideTo(n)
			}
		},
		g = {
			loopCreate: function () {
				var t = this,
					i = t.params,
					a = t.$wrapperEl;
				a.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
				var r = a.children("." + i.slideClass);
				if (i.loopFillGroupWithBlank) {
					var n = i.slidesPerGroup - r.length % i.slidesPerGroup;
					if (n !== i.slidesPerGroup) {
						for (var o = 0; o < n; o += 1) {
							var l = s(e.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
							a.append(l)
						}
						r = a.children("." + i.slideClass)
					}
				}
				"auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length), t.loopedSlides = parseInt(i.loopedSlides || i.slidesPerView, 10), t.loopedSlides += i.loopAdditionalSlides, t.loopedSlides > r.length && (t.loopedSlides = r.length);
				var d = [],
					h = [];
				r.each(function (e, i) {
					var a = s(i);
					e < t.loopedSlides && h.push(i), e < r.length && e >= r.length - t.loopedSlides && d.push(i), a.attr("data-swiper-slide-index", e)
				});
				for (var p = 0; p < h.length; p += 1) a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
				for (var c = d.length - 1; c >= 0; c -= 1) a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass))
			},
			loopFix: function () {
				var e, t = this.params,
					i = this.activeIndex,
					s = this.slides,
					a = this.loopedSlides,
					r = this.allowSlidePrev,
					n = this.allowSlideNext,
					o = this.snapGrid,
					l = this.rtl;
				this.allowSlidePrev = !0, this.allowSlideNext = !0;
				var d = -o[i] - this.getTranslate();
				i < a ? (e = s.length - 3 * a + i, e += a, this.slideTo(e, 0, !1, !0) && 0 !== d && this.setTranslate((l ? -this.translate : this.translate) - d)) : ("auto" === t.slidesPerView && i >= 2 * a || i > s.length - 2 * t.slidesPerView) && (e = -s.length + i + a, e += a, this.slideTo(e, 0, !1, !0) && 0 !== d && this.setTranslate((l ? -this.translate : this.translate) - d));
				this.allowSlidePrev = r, this.allowSlideNext = n
			},
			loopDestroy: function () {
				var e = this.$wrapperEl,
					t = this.params,
					i = this.slides;
				e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove(), i.removeAttr("data-swiper-slide-index")
			}
		},
		b = {
			setGrabCursor: function (e) {
				if (!h.touch && this.params.simulateTouch) {
					var t = this.el;
					t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
				}
			},
			unsetGrabCursor: function () {
				h.touch || (this.el.style.cursor = "")
			}
		},
		w = {
			appendSlide: function (e) {
				var t = this.$wrapperEl,
					i = this.params;
				if (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e)
					for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);
				else t.append(e);
				i.loop && this.loopCreate(), i.observer && h.observer || this.update()
			},
			prependSlide: function (e) {
				var t = this.params,
					i = this.$wrapperEl,
					s = this.activeIndex;
				t.loop && this.loopDestroy();
				var a = s + 1;
				if ("object" == typeof e && "length" in e) {
					for (var r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);
					a = s + e.length
				} else i.prepend(e);
				t.loop && this.loopCreate(), t.observer && h.observer || this.update(), this.slideTo(a, 0, !1)
			},
			removeSlide: function (e) {
				var t = this.params,
					i = this.$wrapperEl,
					s = this.activeIndex;
				t.loop && (this.loopDestroy(), this.slides = i.children("." + t.slideClass));
				var a, r = s;
				if ("object" == typeof e && "length" in e) {
					for (var n = 0; n < e.length; n += 1) a = e[n], this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1);
					r = Math.max(r, 0)
				} else a = e, this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1), r = Math.max(r, 0);
				t.loop && this.loopCreate(), t.observer && h.observer || this.update(), t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1)
			},
			removeAllSlides: function () {
				for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
				this.removeSlide(e)
			}
		},
		y = function () {
			var i = t.navigator.userAgent,
				s = {
					ios: !1,
					android: !1,
					androidChrome: !1,
					desktop: !1,
					windows: !1,
					iphone: !1,
					ipod: !1,
					ipad: !1,
					cordova: t.cordova || t.phonegap,
					phonegap: t.cordova || t.phonegap
				},
				a = i.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
				r = i.match(/(Android);?[\s\/]+([\d.]+)?/),
				n = i.match(/(iPad).*OS\s([\d_]+)/),
				o = i.match(/(iPod)(.*OS\s([\d_]+))?/),
				l = !n && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
			if (a && (s.os = "windows", s.osVersion = a[2], s.windows = !0), r && !a && (s.os = "android", s.osVersion = r[2], s.android = !0, s.androidChrome = i.toLowerCase().indexOf("chrome") >= 0), (n || l || o) && (s.os = "ios", s.ios = !0), l && !o && (s.osVersion = l[2].replace(/_/g, "."), s.iphone = !0), n && (s.osVersion = n[2].replace(/_/g, "."), s.ipad = !0), o && (s.osVersion = o[3] ? o[3].replace(/_/g, ".") : null, s.iphone = !0), s.ios && s.osVersion && i.indexOf("Version/") >= 0 && "10" === s.osVersion.split(".")[0] && (s.osVersion = i.toLowerCase().split("version/")[1].split(" ")[0]), s.desktop = !(s.os || s.android || s.webView), s.webView = (l || n || o) && i.match(/.*AppleWebKit(?!.*Safari)/i), s.os && "ios" === s.os) {
				var d = s.osVersion.split("."),
					h = e.querySelector('meta[name="viewport"]');
				s.minimalUi = !s.webView && (o || l) && (1 * d[0] == 7 ? 1 * d[1] >= 1 : 1 * d[0] > 7) && h && h.getAttribute("content").indexOf("minimal-ui") >= 0
			}
			return s.pixelRatio = t.devicePixelRatio || 1, s
		}(),
		x = function (i) {
			var a = this.touchEventsData,
				r = this.params,
				n = this.touches;
			if (!this.animating || !r.preventIntercationOnTransition) {
				var o = i;
				if (o.originalEvent && (o = o.originalEvent), a.isTouchEvent = "touchstart" === o.type, (a.isTouchEvent || !("which" in o) || 3 !== o.which) && (!a.isTouched || !a.isMoved))
					if (r.noSwiping && s(o.target).closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0]) this.allowClick = !0;
					else if (!r.swipeHandler || s(o).closest(r.swipeHandler)[0]) {
					n.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, n.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
					var l = n.currentX,
						h = n.currentY;
					if (!(y.ios && !y.cordova && r.iOSEdgeSwipeDetection && l <= r.iOSEdgeSwipeThreshold && l >= t.screen.width - r.iOSEdgeSwipeThreshold)) {
						if (d.extend(a, {
								isTouched: !0,
								isMoved: !1,
								allowTouchCallbacks: !0,
								isScrolling: void 0,
								startMoving: void 0
							}), n.startX = l, n.startY = h, a.touchStartTime = d.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, r.threshold > 0 && (a.allowThresholdMove = !1), "touchstart" !== o.type) {
							var p = !0;
							s(o.target).is(a.formElements) && (p = !1), e.activeElement && s(e.activeElement).is(a.formElements) && e.activeElement !== o.target && e.activeElement.blur(), p && this.allowTouchMove && o.preventDefault()
						}
						this.emit("touchStart", o)
					}
				}
			}
		},
		E = function (t) {
			var i = this.touchEventsData,
				a = this.params,
				r = this.touches,
				n = this.rtl,
				o = t;
			if (o.originalEvent && (o = o.originalEvent), i.isTouched) {
				if (!i.isTouchEvent || "mousemove" !== o.type) {
					var l = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX,
						h = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY;
					if (o.preventedByNestedSwiper) return r.startX = l, void(r.startY = h);
					if (!this.allowTouchMove) return this.allowClick = !1, void(i.isTouched && (d.extend(r, {
						startX: l,
						startY: h,
						currentX: l,
						currentY: h
					}), i.touchStartTime = d.now()));
					if (i.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
						if (this.isVertical()) {
							if (h < r.startY && this.translate <= this.maxTranslate() || h > r.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
						} else if (l < r.startX && this.translate <= this.maxTranslate() || l > r.startX && this.translate >= this.minTranslate()) return;
					if (i.isTouchEvent && e.activeElement && o.target === e.activeElement && s(o.target).is(i.formElements)) return i.isMoved = !0, void(this.allowClick = !1);
					if (i.allowTouchCallbacks && this.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
						r.currentX = l, r.currentY = h;
						var p, c = r.currentX - r.startX,
							u = r.currentY - r.startY;
						if (void 0 === i.isScrolling) this.isHorizontal() && r.currentY === r.startY || this.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : c * c + u * u >= 25 && (p = 180 * Math.atan2(Math.abs(u), Math.abs(c)) / Math.PI, i.isScrolling = this.isHorizontal() ? p > a.touchAngle : 90 - p > a.touchAngle);
						if (i.isScrolling && this.emit("touchMoveOpposite", o), "undefined" == typeof startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;
						else if (i.startMoving) {
							this.allowClick = !1, o.preventDefault(), a.touchMoveStopPropagation && !a.nested && o.stopPropagation(), i.isMoved || (a.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !a.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", o)), this.emit("sliderMove", o), i.isMoved = !0;
							var v = this.isHorizontal() ? c : u;
							r.diff = v, v *= a.touchRatio, n && (v = -v), this.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
							var f = !0,
								m = a.resistanceRatio;
							if (a.touchReleaseOnEdges && (m = 0), v > 0 && i.currentTranslate > this.minTranslate() ? (f = !1, a.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + v, m))) : v < 0 && i.currentTranslate < this.maxTranslate() && (f = !1, a.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - v, m))), f && (o.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), a.threshold > 0) {
								if (!(Math.abs(v) > a.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
								if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void(r.diff = this.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
							}
							a.followFinger && ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), a.freeMode && (0 === i.velocities.length && i.velocities.push({
								position: r[this.isHorizontal() ? "startX" : "startY"],
								time: i.touchStartTime
							}), i.velocities.push({
								position: r[this.isHorizontal() ? "currentX" : "currentY"],
								time: d.now()
							})), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate))
						}
					}
				}
			} else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", o)
		},
		T = function (e) {
			var t = this,
				i = t.touchEventsData,
				s = t.params,
				a = t.touches,
				r = t.rtl,
				n = t.$wrapperEl,
				o = t.slidesGrid,
				l = t.snapGrid,
				h = e;
			if (h.originalEvent && (h = h.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", h), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
			s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
			var p, c = d.now(),
				u = c - i.touchStartTime;
			if (t.allowClick && (t.updateClickedSlide(h), t.emit("tap", h), u < 300 && c - i.lastClickTime > 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), i.clickTimeout = d.nextTick(function () {
					t && !t.destroyed && t.emit("click", h)
				}, 300)), u < 300 && c - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), t.emit("doubleTap", h))), i.lastClickTime = d.now(), d.nextTick(function () {
					t.destroyed || (t.allowClick = !0)
				}), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
			if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, p = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, s.freeMode) {
				if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
				if (p > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
				if (s.freeModeMomentum) {
					if (i.velocities.length > 1) {
						var v = i.velocities.pop(),
							f = i.velocities.pop(),
							m = v.position - f.position,
							g = v.time - f.time;
						t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || d.now() - v.time > 300) && (t.velocity = 0)
					} else t.velocity = 0;
					t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
					var b = 1e3 * s.freeModeMomentumRatio,
						w = t.velocity * b,
						y = t.translate + w;
					r && (y = -y);
					var x, E = !1,
						T = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
					if (y < t.maxTranslate()) s.freeModeMomentumBounce ? (y + t.maxTranslate() < -T && (y = t.maxTranslate() - T), x = t.maxTranslate(), E = !0, i.allowMomentumBounce = !0) : y = t.maxTranslate();
					else if (y > t.minTranslate()) s.freeModeMomentumBounce ? (y - t.minTranslate() > T && (y = t.minTranslate() + T), x = t.minTranslate(), E = !0, i.allowMomentumBounce = !0) : y = t.minTranslate();
					else if (s.freeModeSticky) {
						for (var S, C = 0; C < l.length; C += 1)
							if (l[C] > -y) {
								S = C;
								break
							}
						y = -(y = Math.abs(l[S] - y) < Math.abs(l[S - 1] - y) || "next" === t.swipeDirection ? l[S] : l[S - 1])
					}
					if (0 !== t.velocity) b = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity);
					else if (s.freeModeSticky) return void t.slideReset();
					s.freeModeMomentumBounce && E ? (t.updateProgress(x), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function () {
						t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), t.setTranslate(x), n.transitionEnd(function () {
							t && !t.destroyed && t.transitionEnd()
						}))
					})) : t.velocity ? (t.updateProgress(y), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function () {
						t && !t.destroyed && t.transitionEnd()
					}))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses()
				}(!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
			} else {
				for (var M = 0, z = t.slidesSizesGrid[0], P = 0; P < o.length; P += s.slidesPerGroup) void 0 !== o[P + s.slidesPerGroup] ? p >= o[P] && p < o[P + s.slidesPerGroup] && (M = P, z = o[P + s.slidesPerGroup] - o[P]) : p >= o[P] && (M = P, z = o[o.length - 1] - o[o.length - 2]);
				var k = (p - o[M]) / z;
				if (u > s.longSwipesMs) {
					if (!s.longSwipes) return void t.slideTo(t.activeIndex);
					"next" === t.swipeDirection && (k >= s.longSwipesRatio ? t.slideTo(M + s.slidesPerGroup) : t.slideTo(M)), "prev" === t.swipeDirection && (k > 1 - s.longSwipesRatio ? t.slideTo(M + s.slidesPerGroup) : t.slideTo(M))
				} else {
					if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
					"next" === t.swipeDirection && t.slideTo(M + s.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(M)
				}
			}
		},
		S = function () {
			var e = this.params,
				t = this.el;
			if (!t || 0 !== t.offsetWidth) {
				e.breakpoints && this.setBreakpoint();
				var i = this.allowSlideNext,
					s = this.allowSlidePrev;
				if (this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), e.freeMode) {
					var a = Math.min(Math.max(this.translate, this.maxTranslate()), this.minTranslate());
					this.setTranslate(a), this.updateActiveIndex(), this.updateSlidesClasses(), e.autoHeight && this.updateAutoHeight()
				} else this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0);
				this.allowSlidePrev = s, this.allowSlideNext = i
			}
		},
		C = function (e) {
			this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
		};
	var M = {
			attachEvents: function () {
				var t = this.params,
					i = this.touchEvents,
					s = this.el,
					a = this.wrapperEl;
				this.onTouchStart = x.bind(this), this.onTouchMove = E.bind(this), this.onTouchEnd = T.bind(this), this.onClick = C.bind(this);
				var r = "container" === t.touchEventsTarget ? s : a,
					n = !!t.nested;
				if (h.touch || !h.pointerEvents && !h.prefixedPointerEvents) {
					if (h.touch) {
						var o = !("touchstart" !== i.start || !h.passiveListener || !t.passiveListeners) && {
							passive: !0,
							capture: !1
						};
						r.addEventListener(i.start, this.onTouchStart, o), r.addEventListener(i.move, this.onTouchMove, h.passiveListener ? {
							passive: !1,
							capture: n
						} : n), r.addEventListener(i.end, this.onTouchEnd, o)
					}(t.simulateTouch && !y.ios && !y.android || t.simulateTouch && !h.touch && y.ios) && (r.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, n), e.addEventListener("mouseup", this.onTouchEnd, !1))
				} else r.addEventListener(i.start, this.onTouchStart, !1), e.addEventListener(i.move, this.onTouchMove, n), e.addEventListener(i.end, this.onTouchEnd, !1);
				(t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", this.onClick, !0), this.on("resize observerUpdate", S)
			},
			detachEvents: function () {
				var t = this.params,
					i = this.touchEvents,
					s = this.el,
					a = this.wrapperEl,
					r = "container" === t.touchEventsTarget ? s : a,
					n = !!t.nested;
				if (h.touch || !h.pointerEvents && !h.prefixedPointerEvents) {
					if (h.touch) {
						var o = !("onTouchStart" !== i.start || !h.passiveListener || !t.passiveListeners) && {
							passive: !0,
							capture: !1
						};
						r.removeEventListener(i.start, this.onTouchStart, o), r.removeEventListener(i.move, this.onTouchMove, n), r.removeEventListener(i.end, this.onTouchEnd, o)
					}(t.simulateTouch && !y.ios && !y.android || t.simulateTouch && !h.touch && y.ios) && (r.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, n), e.removeEventListener("mouseup", this.onTouchEnd, !1))
				} else r.removeEventListener(i.start, this.onTouchStart, !1), e.removeEventListener(i.move, this.onTouchMove, n), e.removeEventListener(i.end, this.onTouchEnd, !1);
				(t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", this.onClick, !0), this.off("resize observerUpdate", S)
			}
		},
		z = {
			setBreakpoint: function () {
				var e = this.activeIndex,
					t = this.loopedSlides;
				void 0 === t && (t = 0);
				var i = this.params,
					s = i.breakpoints;
				if (s && (!s || 0 !== Object.keys(s).length)) {
					var a = this.getBreakpoint(s);
					if (a && this.currentBreakpoint !== a) {
						var r = a in s ? s[a] : this.originalParams,
							n = i.loop && r.slidesPerView !== i.slidesPerView;
						d.extend(this.params, r), d.extend(this, {
							allowTouchMove: this.params.allowTouchMove,
							allowSlideNext: this.params.allowSlideNext,
							allowSlidePrev: this.params.allowSlidePrev
						}), this.currentBreakpoint = a, n && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - t + this.loopedSlides, 0, !1)), this.emit("breakpoint", r)
					}
				}
			},
			getBreakpoint: function (e) {
				if (e) {
					var i = !1,
						s = [];
					Object.keys(e).forEach(function (e) {
						s.push(e)
					}), s.sort(function (e, t) {
						return parseInt(e, 10) - parseInt(t, 10)
					});
					for (var a = 0; a < s.length; a += 1) {
						var r = s[a];
						r >= t.innerWidth && !i && (i = r)
					}
					return i || "max"
				}
			}
		},
		P = function () {
			return {
				isIE: !!t.navigator.userAgent.match(/Trident/g) || !!t.navigator.userAgent.match(/MSIE/g),
				isSafari: (e = t.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
				isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
			};
			var e
		}();
	var k = {
			init: !0,
			direction: "horizontal",
			touchEventsTarget: "container",
			initialSlide: 0,
			speed: 300,
			preventIntercationOnTransition: !1,
			iOSEdgeSwipeDetection: !1,
			iOSEdgeSwipeThreshold: 20,
			freeMode: !1,
			freeModeMomentum: !0,
			freeModeMomentumRatio: 1,
			freeModeMomentumBounce: !0,
			freeModeMomentumBounceRatio: 1,
			freeModeMomentumVelocityRatio: 1,
			freeModeSticky: !1,
			freeModeMinimumVelocity: .02,
			autoHeight: !1,
			setWrapperSize: !1,
			virtualTranslate: !1,
			effect: "slide",
			breakpoints: void 0,
			spaceBetween: 0,
			slidesPerView: 1,
			slidesPerColumn: 1,
			slidesPerColumnFill: "column",
			slidesPerGroup: 1,
			centeredSlides: !1,
			slidesOffsetBefore: 0,
			slidesOffsetAfter: 0,
			normalizeSlideIndex: !0,
			watchOverflow: !1,
			roundLengths: !1,
			touchRatio: 1,
			touchAngle: 45,
			simulateTouch: !0,
			shortSwipes: !0,
			longSwipes: !0,
			longSwipesRatio: .5,
			longSwipesMs: 300,
			followFinger: !0,
			allowTouchMove: !0,
			threshold: 0,
			touchMoveStopPropagation: !0,
			touchReleaseOnEdges: !1,
			uniqueNavElements: !0,
			resistance: !0,
			resistanceRatio: .85,
			watchSlidesProgress: !1,
			watchSlidesVisibility: !1,
			grabCursor: !1,
			preventClicks: !0,
			preventClicksPropagation: !0,
			slideToClickedSlide: !1,
			preloadImages: !0,
			updateOnImagesReady: !0,
			loop: !1,
			loopAdditionalSlides: 0,
			loopedSlides: null,
			loopFillGroupWithBlank: !1,
			allowSlidePrev: !0,
			allowSlideNext: !0,
			swipeHandler: null,
			noSwiping: !0,
			noSwipingClass: "swiper-no-swiping",
			noSwipingSelector: null,
			passiveListeners: !0,
			containerModifierClass: "swiper-container-",
			slideClass: "swiper-slide",
			slideBlankClass: "swiper-slide-invisible-blank",
			slideActiveClass: "swiper-slide-active",
			slideDuplicateActiveClass: "swiper-slide-duplicate-active",
			slideVisibleClass: "swiper-slide-visible",
			slideDuplicateClass: "swiper-slide-duplicate",
			slideNextClass: "swiper-slide-next",
			slideDuplicateNextClass: "swiper-slide-duplicate-next",
			slidePrevClass: "swiper-slide-prev",
			slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
			wrapperClass: "swiper-wrapper",
			runCallbacksOnInit: !0
		},
		$ = {
			update: u,
			translate: v,
			transition: f,
			slide: m,
			loop: g,
			grabCursor: b,
			manipulation: w,
			events: M,
			breakpoints: z,
			checkOverflow: {
				checkOverflow: function () {
					var e = this.isLocked;
					this.isLocked = 1 === this.snapGrid.length, this.allowTouchMove = !this.isLocked, e && e !== this.isLocked && (this.isEnd = !1, this.navigation.update())
				}
			},
			classes: {
				addClasses: function () {
					var e = this.classNames,
						t = this.params,
						i = this.rtl,
						s = this.$el,
						a = [];
					a.push(t.direction), t.freeMode && a.push("free-mode"), h.flexbox || a.push("no-flexbox"), t.autoHeight && a.push("autoheight"), i && a.push("rtl"), t.slidesPerColumn > 1 && a.push("multirow"), y.android && a.push("android"), y.ios && a.push("ios"), P.isIE && (h.pointerEvents || h.prefixedPointerEvents) && a.push("wp8-" + t.direction), a.forEach(function (i) {
						e.push(t.containerModifierClass + i)
					}), s.addClass(e.join(" "))
				},
				removeClasses: function () {
					var e = this.$el,
						t = this.classNames;
					e.removeClass(t.join(" "))
				}
			},
			images: {
				loadImage: function (e, i, s, a, r, n) {
					var o;

					function l() {
						n && n()
					}
					e.complete && r ? l() : i ? ((o = new t.Image).onload = l, o.onerror = l, a && (o.sizes = a), s && (o.srcset = s), i && (o.src = i)) : l()
				},
				preloadImages: function () {
					var e = this;

					function t() {
						void 0 !== e && null !== e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
					}
					e.imagesToLoad = e.$el.find("img");
					for (var i = 0; i < e.imagesToLoad.length; i += 1) {
						var s = e.imagesToLoad[i];
						e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
					}
				}
			}
		},
		L = {},
		I = function (e) {
			function t() {
				for (var i, a, r, n = [], o = arguments.length; o--;) n[o] = arguments[o];
				1 === n.length && n[0].constructor && n[0].constructor === Object ? a = n[0] : (i = (r = n)[0], a = r[1]);
				a || (a = {}), a = d.extend({}, a), i && !a.el && (a.el = i), e.call(this, a), Object.keys($).forEach(function (e) {
					Object.keys($[e]).forEach(function (i) {
						t.prototype[i] || (t.prototype[i] = $[e][i])
					})
				});
				var l = this;
				void 0 === l.modules && (l.modules = {}), Object.keys(l.modules).forEach(function (e) {
					var t = l.modules[e];
					if (t.params) {
						var i = Object.keys(t.params)[0],
							s = t.params[i];
						if ("object" != typeof s) return;
						if (!(i in a && "enabled" in s)) return;
						!0 === a[i] && (a[i] = {
							enabled: !0
						}), "object" != typeof a[i] || "enabled" in a[i] || (a[i].enabled = !0), a[i] || (a[i] = {
							enabled: !1
						})
					}
				});
				var p = d.extend({}, k);
				l.useModulesParams(p), l.params = d.extend({}, p, L, a), l.originalParams = d.extend({}, l.params), l.passedParams = d.extend({}, a), l.$ = s;
				var c = s(l.params.el);
				if (i = c[0]) {
					if (c.length > 1) {
						var u = [];
						return c.each(function (e, i) {
							var s = d.extend({}, a, {
								el: i
							});
							u.push(new t(s))
						}), u
					}
					i.swiper = l, c.data("swiper", l);
					var v, f, m = c.children("." + l.params.wrapperClass);
					return d.extend(l, {
						$el: c,
						el: i,
						$wrapperEl: m,
						wrapperEl: m[0],
						classNames: [],
						slides: s(),
						slidesGrid: [],
						snapGrid: [],
						slidesSizesGrid: [],
						isHorizontal: function () {
							return "horizontal" === l.params.direction
						},
						isVertical: function () {
							return "vertical" === l.params.direction
						},
						rtl: "horizontal" === l.params.direction && ("rtl" === i.dir.toLowerCase() || "rtl" === c.css("direction")),
						wrongRTL: "-webkit-box" === m.css("display"),
						activeIndex: 0,
						realIndex: 0,
						isBeginning: !0,
						isEnd: !1,
						translate: 0,
						progress: 0,
						velocity: 0,
						animating: !1,
						allowSlideNext: l.params.allowSlideNext,
						allowSlidePrev: l.params.allowSlidePrev,
						touchEvents: (v = ["touchstart", "touchmove", "touchend"], f = ["mousedown", "mousemove", "mouseup"], h.pointerEvents ? f = ["pointerdown", "pointermove", "pointerup"] : h.prefixedPointerEvents && (f = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), l.touchEventsTouch = {
							start: v[0],
							move: v[1],
							end: v[2]
						}, l.touchEventsDesktop = {
							start: f[0],
							move: f[1],
							end: f[2]
						}, h.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop),
						touchEventsData: {
							isTouched: void 0,
							isMoved: void 0,
							allowTouchCallbacks: void 0,
							touchStartTime: void 0,
							isScrolling: void 0,
							currentTranslate: void 0,
							startTranslate: void 0,
							allowThresholdMove: void 0,
							formElements: "input, select, option, textarea, button, video",
							lastClickTime: d.now(),
							clickTimeout: void 0,
							velocities: [],
							allowMomentumBounce: void 0,
							isTouchEvent: void 0,
							startMoving: void 0
						},
						allowClick: !0,
						allowTouchMove: l.params.allowTouchMove,
						touches: {
							startX: 0,
							startY: 0,
							currentX: 0,
							currentY: 0,
							diff: 0
						},
						imagesToLoad: [],
						imagesLoaded: 0
					}), l.useModules(), l.params.init && l.init(), l
				}
			}
			e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
			var i = {
				extendedDefaults: {
					configurable: !0
				},
				defaults: {
					configurable: !0
				},
				Class: {
					configurable: !0
				},
				$: {
					configurable: !0
				}
			};
			return t.prototype.slidesPerViewDynamic = function () {
				var e = this.params,
					t = this.slides,
					i = this.slidesGrid,
					s = this.size,
					a = this.activeIndex,
					r = 1;
				if (e.centeredSlides) {
					for (var n, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1) t[l] && !n && (r += 1, (o += t[l].swiperSlideSize) > s && (n = !0));
					for (var d = a - 1; d >= 0; d -= 1) t[d] && !n && (r += 1, (o += t[d].swiperSlideSize) > s && (n = !0))
				} else
					for (var h = a + 1; h < t.length; h += 1) i[h] - i[a] < s && (r += 1);
				return r
			}, t.prototype.update = function () {
				var e = this;
				e && !e.destroyed && (e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (t(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || t(), e.emit("update"));

				function t() {
					var t = e.rtl ? -1 * e.translate : e.translate,
						i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
					e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
				}
			}, t.prototype.init = function () {
				this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"))
			}, t.prototype.destroy = function (e, t) {
				void 0 === e && (e = !0), void 0 === t && (t = !0);
				var i = this,
					s = i.params,
					a = i.$el,
					r = i.$wrapperEl,
					n = i.slides;
				i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), a.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function (e) {
					i.off(e)
				}), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), d.deleteProps(i)), i.destroyed = !0
			}, t.extendDefaults = function (e) {
				d.extend(L, e)
			}, i.extendedDefaults.get = function () {
				return L
			}, i.defaults.get = function () {
				return k
			}, i.Class.get = function () {
				return e
			}, i.$.get = function () {
				return s
			}, Object.defineProperties(t, i), t
		}(p),
		D = {
			name: "device",
			proto: {
				device: y
			},
			static: {
				device: y
			}
		},
		O = {
			name: "support",
			proto: {
				support: h
			},
			static: {
				support: h
			}
		},
		A = {
			name: "browser",
			proto: {
				browser: P
			},
			static: {
				browser: P
			}
		},
		H = {
			name: "resize",
			create: function () {
				var e = this;
				d.extend(e, {
					resize: {
						resizeHandler: function () {
							e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
						},
						orientationChangeHandler: function () {
							e && !e.destroyed && e.initialized && e.emit("orientationchange")
						}
					}
				})
			},
			on: {
				init: function () {
					t.addEventListener("resize", this.resize.resizeHandler), t.addEventListener("orientationchange", this.resize.orientationChangeHandler)
				},
				destroy: function () {
					t.removeEventListener("resize", this.resize.resizeHandler), t.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
				}
			}
		},
		N = {
			func: t.MutationObserver || t.WebkitMutationObserver,
			attach: function (e, t) {
				void 0 === t && (t = {});
				var i = this,
					s = new(0, N.func)(function (e) {
						e.forEach(function (e) {
							i.emit("observerUpdate", e)
						})
					});
				s.observe(e, {
					attributes: void 0 === t.attributes || t.attributes,
					childList: void 0 === t.childList || t.childList,
					characterData: void 0 === t.characterData || t.characterData
				}), i.observer.observers.push(s)
			},
			init: function () {
				if (h.observer && this.params.observer) {
					if (this.params.observeParents)
						for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
					this.observer.attach(this.$el[0], {
						childList: !1
					}), this.observer.attach(this.$wrapperEl[0], {
						attributes: !1
					})
				}
			},
			destroy: function () {
				this.observer.observers.forEach(function (e) {
					e.disconnect()
				}), this.observer.observers = []
			}
		},
		X = {
			name: "observer",
			params: {
				observer: !1,
				observeParents: !1
			},
			create: function () {
				d.extend(this, {
					observer: {
						init: N.init.bind(this),
						attach: N.attach.bind(this),
						destroy: N.destroy.bind(this),
						observers: []
					}
				})
			},
			on: {
				init: function () {
					this.observer.init()
				},
				destroy: function () {
					this.observer.destroy()
				}
			}
		},
		Y = {
			update: function (e) {
				var t = this,
					i = t.params,
					s = i.slidesPerView,
					a = i.slidesPerGroup,
					r = i.centeredSlides,
					n = t.virtual,
					o = n.from,
					l = n.to,
					h = n.slides,
					p = n.slidesGrid,
					c = n.renderSlide,
					u = n.offset;
				t.updateActiveIndex();
				var v, f, m, g = t.activeIndex || 0;
				v = t.rtl && t.isHorizontal() ? "right" : t.isHorizontal() ? "left" : "top", r ? (f = Math.floor(s / 2) + a, m = Math.floor(s / 2) + a) : (f = s + (a - 1), m = a);
				var b = Math.max((g || 0) - m, 0),
					w = Math.min((g || 0) + f, h.length - 1),
					y = (t.slidesGrid[b] || 0) - (t.slidesGrid[0] || 0);

				function x() {
					t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
				}
				if (d.extend(t.virtual, {
						from: b,
						to: w,
						offset: y,
						slidesGrid: t.slidesGrid
					}), o === b && l === w && !e) return t.slidesGrid !== p && y !== u && t.slides.css(v, y + "px"), void t.updateProgress();
				if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
					offset: y,
					from: b,
					to: w,
					slides: function () {
						for (var e = [], t = b; t <= w; t += 1) e.push(h[t]);
						return e
					}()
				}), void x();
				var E = [],
					T = [];
				if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
				else
					for (var S = o; S <= l; S += 1)(S < b || S > w) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + S + '"]').remove();
				for (var C = 0; C < h.length; C += 1) C >= b && C <= w && (void 0 === l || e ? T.push(C) : (C > l && T.push(C), C < o && E.push(C)));
				T.forEach(function (e) {
					t.$wrapperEl.append(c(h[e], e))
				}), E.sort(function (e, t) {
					return e < t
				}).forEach(function (e) {
					t.$wrapperEl.prepend(c(h[e], e))
				}), t.$wrapperEl.children(".swiper-slide").css(v, y + "px"), x()
			},
			renderSlide: function (e, t) {
				var i = this.params.virtual;
				if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
				var a = i.renderSlide ? s(i.renderSlide.call(this, e, t)) : s('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
				return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = a), a
			},
			appendSlide: function (e) {
				this.virtual.slides.push(e), this.virtual.update(!0)
			},
			prependSlide: function (e) {
				if (this.virtual.slides.unshift(e), this.params.virtual.cache) {
					var t = this.virtual.cache,
						i = {};
					Object.keys(t).forEach(function (e) {
						i[e + 1] = t[e]
					}), this.virtual.cache = i
				}
				this.virtual.update(!0), this.slideNext(0)
			}
		},
		B = {
			name: "virtual",
			params: {
				virtual: {
					enabled: !1,
					slides: [],
					cache: !0,
					renderSlide: null,
					renderExternal: null
				}
			},
			create: function () {
				d.extend(this, {
					virtual: {
						update: Y.update.bind(this),
						appendSlide: Y.appendSlide.bind(this),
						prependSlide: Y.prependSlide.bind(this),
						renderSlide: Y.renderSlide.bind(this),
						slides: this.params.virtual.slides,
						cache: {}
					}
				})
			},
			on: {
				beforeInit: function () {
					if (this.params.virtual.enabled) {
						this.classNames.push(this.params.containerModifierClass + "virtual");
						var e = {
							watchSlidesProgress: !0
						};
						d.extend(this.params, e), d.extend(this.originalParams, e), this.virtual.update()
					}
				},
				setTranslate: function () {
					this.params.virtual.enabled && this.virtual.update()
				}
			}
		},
		G = {
			handle: function (i) {
				var s = i;
				s.originalEvent && (s = s.originalEvent);
				var a = s.keyCode || s.charCode;
				if (!this.allowSlideNext && (this.isHorizontal() && 39 === a || this.isVertical() && 40 === a)) return !1;
				if (!this.allowSlidePrev && (this.isHorizontal() && 37 === a || this.isVertical() && 38 === a)) return !1;
				if (!(s.shiftKey || s.altKey || s.ctrlKey || s.metaKey || e.activeElement && e.activeElement.nodeName && ("input" === e.activeElement.nodeName.toLowerCase() || "textarea" === e.activeElement.nodeName.toLowerCase()))) {
					if (this.params.keyboard.onlyInViewport && (37 === a || 39 === a || 38 === a || 40 === a)) {
						var r = !1;
						if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
						var n = t.innerWidth,
							o = t.innerHeight,
							l = this.$el.offset();
						this.rtl && (l.left -= this.$el[0].scrollLeft);
						for (var d = [
								[l.left, l.top],
								[l.left + this.width, l.top],
								[l.left, l.top + this.height],
								[l.left + this.width, l.top + this.height]
							], h = 0; h < d.length; h += 1) {
							var p = d[h];
							p[0] >= 0 && p[0] <= n && p[1] >= 0 && p[1] <= o && (r = !0)
						}
						if (!r) return
					}
					this.isHorizontal() ? (37 !== a && 39 !== a || (s.preventDefault ? s.preventDefault() : s.returnValue = !1), (39 === a && !this.rtl || 37 === a && this.rtl) && this.slideNext(), (37 === a && !this.rtl || 39 === a && this.rtl) && this.slidePrev()) : (38 !== a && 40 !== a || (s.preventDefault ? s.preventDefault() : s.returnValue = !1), 40 === a && this.slideNext(), 38 === a && this.slidePrev()), this.emit("keyPress", a)
				}
			},
			enable: function () {
				this.keyboard.enabled || (s(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
			},
			disable: function () {
				this.keyboard.enabled && (s(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
			}
		},
		V = {
			name: "keyboard",
			params: {
				keyboard: {
					enabled: !1,
					onlyInViewport: !0
				}
			},
			create: function () {
				d.extend(this, {
					keyboard: {
						enabled: !1,
						enable: G.enable.bind(this),
						disable: G.disable.bind(this),
						handle: G.handle.bind(this)
					}
				})
			},
			on: {
				init: function () {
					this.params.keyboard.enabled && this.keyboard.enable()
				},
				destroy: function () {
					this.keyboard.enabled && this.keyboard.disable()
				}
			}
		};
	var R = {
			lastScrollTime: d.now(),
			event: t.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
				var t = "onwheel" in e;
				if (!t) {
					var i = e.createElement("div");
					i.setAttribute("onwheel", "return;"), t = "function" == typeof i.onwheel
				}
				return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")), t
			}() ? "wheel" : "mousewheel",
			normalize: function (e) {
				var t = 0,
					i = 0,
					s = 0,
					a = 0;
				return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, a = 10 * i, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (s = e.deltaX), (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, a *= 40) : (s *= 800, a *= 800)), s && !t && (t = s < 1 ? -1 : 1), a && !i && (i = a < 1 ? -1 : 1), {
					spinX: t,
					spinY: i,
					pixelX: s,
					pixelY: a
				}
			},
			handle: function (e) {
				var i = e,
					s = this,
					a = s.params.mousewheel;
				i.originalEvent && (i = i.originalEvent);
				var r = 0,
					n = s.rtl ? -1 : 1,
					o = R.normalize(i);
				if (a.forceToAxis)
					if (s.isHorizontal()) {
						if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
						r = o.pixelX * n
					} else {
						if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
						r = o.pixelY
					}
				else r = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * n : -o.pixelY;
				if (0 === r) return !0;
				if (a.invert && (r = -r), s.params.freeMode) {
					var l = s.getTranslate() + r * a.sensitivity,
						h = s.isBeginning,
						p = s.isEnd;
					if (l >= s.minTranslate() && (l = s.minTranslate()), l <= s.maxTranslate() && (l = s.maxTranslate()), s.setTransition(0), s.setTranslate(l), s.updateProgress(), s.updateActiveIndex(), s.updateSlidesClasses(), (!h && s.isBeginning || !p && s.isEnd) && s.updateSlidesClasses(), s.params.freeModeSticky && (clearTimeout(s.mousewheel.timeout), s.mousewheel.timeout = d.nextTick(function () {
							s.slideReset()
						}, 300)), s.emit("scroll", i), s.params.autoplay && s.params.autoplayDisableOnInteraction && s.stopAutoplay(), l === s.minTranslate() || l === s.maxTranslate()) return !0
				} else {
					if (d.now() - s.mousewheel.lastScrollTime > 60)
						if (r < 0)
							if (s.isEnd && !s.params.loop || s.animating) {
								if (a.releaseOnEdges) return !0
							} else s.slideNext(), s.emit("scroll", i);
					else if (s.isBeginning && !s.params.loop || s.animating) {
						if (a.releaseOnEdges) return !0
					} else s.slidePrev(), s.emit("scroll", i);
					s.mousewheel.lastScrollTime = (new t.Date).getTime()
				}
				return i.preventDefault ? i.preventDefault() : i.returnValue = !1, !1
			},
			enable: function () {
				if (!R.event) return !1;
				if (this.mousewheel.enabled) return !1;
				var e = this.$el;
				return "container" !== this.params.mousewheel.eventsTarged && (e = s(this.params.mousewheel.eventsTarged)), e.on(R.event, this.mousewheel.handle), this.mousewheel.enabled = !0, !0
			},
			disable: function () {
				if (!R.event) return !1;
				if (!this.mousewheel.enabled) return !1;
				var e = this.$el;
				return "container" !== this.params.mousewheel.eventsTarged && (e = s(this.params.mousewheel.eventsTarged)), e.off(R.event, this.mousewheel.handle), this.mousewheel.enabled = !1, !0
			}
		},
		F = {
			update: function () {
				var e = this.params.navigation;
				if (!this.params.loop) {
					var t = this.navigation,
						i = t.$nextEl,
						s = t.$prevEl;
					s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
				}
			},
			init: function () {
				var e, t, i = this,
					a = i.params.navigation;
				(a.nextEl || a.prevEl) && (a.nextEl && (e = s(a.nextEl), i.params.uniqueNavElements && "string" == typeof a.nextEl && e.length > 1 && 1 === i.$el.find(a.nextEl).length && (e = i.$el.find(a.nextEl))), a.prevEl && (t = s(a.prevEl), i.params.uniqueNavElements && "string" == typeof a.prevEl && t.length > 1 && 1 === i.$el.find(a.prevEl).length && (t = i.$el.find(a.prevEl))), e && e.length > 0 && e.on("click", function (e) {
					e.preventDefault(), i.isEnd && !i.params.loop || i.slideNext()
				}), t && t.length > 0 && t.on("click", function (e) {
					e.preventDefault(), i.isBeginning && !i.params.loop || i.slidePrev()
				}), d.extend(i.navigation, {
					$nextEl: e,
					nextEl: e && e[0],
					$prevEl: t,
					prevEl: t && t[0]
				}))
			},
			destroy: function () {
				var e = this.navigation,
					t = e.$nextEl,
					i = e.$prevEl;
				t && t.length && (t.off("click"), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click"), i.removeClass(this.params.navigation.disabledClass))
			}
		},
		W = {
			update: function () {
				var e = this.rtl,
					t = this.params.pagination;
				if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
					var i, a = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
						r = this.pagination.$el,
						n = this.params.loop ? Math.ceil((a - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
					if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > a - 1 - 2 * this.loopedSlides && (i -= a - 2 * this.loopedSlides), i > n - 1 && (i -= n), i < 0 && "bullets" !== this.params.paginationType && (i = n + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
						var o, l, d, h = this.pagination.bullets;
						if (t.dynamicBullets && (this.pagination.bulletSize = h.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (i > this.previousIndex && this.pagination.dynamicBulletIndex < t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex += 1 : i < this.previousIndex && this.pagination.dynamicBulletIndex > 0 && (this.pagination.dynamicBulletIndex -= 1)), o = i - this.pagination.dynamicBulletIndex, d = ((l = o + (t.dynamicMainBullets - 1)) + o) / 2), h.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), r.length > 1) h.each(function (e, a) {
							var r = s(a),
								n = r.index();
							n === i && r.addClass(t.bulletActiveClass), t.dynamicBullets && (n >= o && n <= l && r.addClass(t.bulletActiveClass + "-main"), n === o && r.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), n === l && r.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"))
						});
						else if (h.eq(i).addClass(t.bulletActiveClass), t.dynamicBullets) {
							for (var p = h.eq(o), c = h.eq(l), u = o; u <= l; u += 1) h.eq(u).addClass(t.bulletActiveClass + "-main");
							p.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), c.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next")
						}
						if (t.dynamicBullets) {
							var v = Math.min(h.length, t.dynamicMainBullets + 4),
								f = (this.pagination.bulletSize * v - this.pagination.bulletSize) / 2 - d * this.pagination.bulletSize,
								m = e ? "right" : "left";
							h.css(this.isHorizontal() ? m : "top", f + "px")
						}
					}
					if ("fraction" === t.type && (r.find("." + t.currentClass).text(i + 1), r.find("." + t.totalClass).text(n)), "progressbar" === t.type) {
						var g = (i + 1) / n,
							b = g,
							w = 1;
						this.isHorizontal() || (w = g, b = 1), r.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + b + ") scaleY(" + w + ")").transition(this.params.speed)
					}
					"custom" === t.type && t.renderCustom ? (r.html(t.renderCustom(this, i + 1, n)), this.emit("paginationRender", this, r[0])) : this.emit("paginationUpdate", this, r[0]), r[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass)
				}
			},
			render: function () {
				var e = this.params.pagination;
				if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
					var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
						i = this.pagination.$el,
						s = "";
					if ("bullets" === e.type) {
						for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1) e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
						i.html(s), this.pagination.bullets = i.find("." + e.bulletClass)
					}
					"fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0])
				}
			},
			init: function () {
				var e = this,
					t = e.params.pagination;
				if (t.el) {
					var i = s(t.el);
					0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), t.clickable && i.on("click", "." + t.bulletClass, function (t) {
						t.preventDefault();
						var i = s(this).index() * e.params.slidesPerGroup;
						e.params.loop && (i += e.loopedSlides), e.slideTo(i)
					}), d.extend(e.pagination, {
						$el: i,
						el: i[0]
					}))
				}
			},
			destroy: function () {
				var e = this.params.pagination;
				if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
					var t = this.pagination.$el;
					t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass)
				}
			}
		},
		q = {
			setTranslate: function () {
				if (this.params.scrollbar.el && this.scrollbar.el) {
					var e = this.scrollbar,
						t = this.rtl,
						i = this.progress,
						s = e.dragSize,
						a = e.trackSize,
						r = e.$dragEl,
						n = e.$el,
						o = this.params.scrollbar,
						l = s,
						d = (a - s) * i;
					t && this.isHorizontal() ? (d = -d) > 0 ? (l = s - d, d = 0) : -d + s > a && (l = a + d) : d < 0 ? (l = s + d, d = 0) : d + s > a && (l = a - d), this.isHorizontal() ? (h.transforms3d ? r.transform("translate3d(" + d + "px, 0, 0)") : r.transform("translateX(" + d + "px)"), r[0].style.width = l + "px") : (h.transforms3d ? r.transform("translate3d(0px, " + d + "px, 0)") : r.transform("translateY(" + d + "px)"), r[0].style.height = l + "px"), o.hide && (clearTimeout(this.scrollbar.timeout), n[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function () {
						n[0].style.opacity = 0, n.transition(400)
					}, 1e3))
				}
			},
			setTransition: function (e) {
				this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
			},
			updateSize: function () {
				if (this.params.scrollbar.el && this.scrollbar.el) {
					var e = this.scrollbar,
						t = e.$dragEl,
						i = e.$el;
					t[0].style.width = "", t[0].style.height = "";
					var s, a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
						r = this.size / this.virtualSize,
						n = r * (a / this.size);
					s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", i[0].style.display = r >= 1 ? "none" : "", this.params.scrollbarHide && (i[0].style.opacity = 0), d.extend(e, {
						trackSize: a,
						divider: r,
						moveDivider: n,
						dragSize: s
					}), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
				}
			},
			setDragPosition: function (e) {
				var t, i = this.scrollbar,
					s = i.$el,
					a = i.dragSize,
					r = i.trackSize;
				t = ((this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - s.offset()[this.isHorizontal() ? "left" : "top"] - a / 2) / (r - a), t = Math.max(Math.min(t, 1), 0), this.rtl && (t = 1 - t);
				var n = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
				this.updateProgress(n), this.setTranslate(n), this.updateActiveIndex(), this.updateSlidesClasses()
			},
			onDragStart: function (e) {
				var t = this.params.scrollbar,
					i = this.scrollbar,
					s = this.$wrapperEl,
					a = i.$el,
					r = i.$dragEl;
				this.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), this.emit("scrollbarDragStart", e)
			},
			onDragMove: function (e) {
				var t = this.scrollbar,
					i = this.$wrapperEl,
					s = t.$el,
					a = t.$dragEl;
				this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e))
			},
			onDragEnd: function (e) {
				var t = this.params.scrollbar,
					i = this.scrollbar.$el;
				this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = d.nextTick(function () {
					i.css("opacity", 0), i.transition(400)
				}, 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideReset())
			},
			enableDraggable: function () {
				if (this.params.scrollbar.el) {
					var t = this.scrollbar,
						i = this.touchEvents,
						s = this.touchEventsDesktop,
						a = this.params,
						r = t.$el[0],
						n = !(!h.passiveListener || !a.passiveListener) && {
							passive: !1,
							capture: !1
						},
						o = !(!h.passiveListener || !a.passiveListener) && {
							passive: !0,
							capture: !1
						};
					h.touch || !h.pointerEvents && !h.prefixedPointerEvents ? (h.touch && (r.addEventListener(i.start, this.scrollbar.onDragStart, n), r.addEventListener(i.move, this.scrollbar.onDragMove, n), r.addEventListener(i.end, this.scrollbar.onDragEnd, o)), (a.simulateTouch && !y.ios && !y.android || a.simulateTouch && !h.touch && y.ios) && (r.addEventListener("mousedown", this.scrollbar.onDragStart, n), e.addEventListener("mousemove", this.scrollbar.onDragMove, n), e.addEventListener("mouseup", this.scrollbar.onDragEnd, o))) : (r.addEventListener(s.start, this.scrollbar.onDragStart, n), e.addEventListener(s.move, this.scrollbar.onDragMove, n), e.addEventListener(s.end, this.scrollbar.onDragEnd, o))
				}
			},
			disableDraggable: function () {
				if (this.params.scrollbar.el) {
					var t = this.scrollbar,
						i = this.touchEvents,
						s = this.touchEventsDesktop,
						a = this.params,
						r = t.$el[0],
						n = !(!h.passiveListener || !a.passiveListener) && {
							passive: !1,
							capture: !1
						},
						o = !(!h.passiveListener || !a.passiveListener) && {
							passive: !0,
							capture: !1
						};
					h.touch || !h.pointerEvents && !h.prefixedPointerEvents ? (h.touch && (r.removeEventListener(i.start, this.scrollbar.onDragStart, n), r.removeEventListener(i.move, this.scrollbar.onDragMove, n), r.removeEventListener(i.end, this.scrollbar.onDragEnd, o)), (a.simulateTouch && !y.ios && !y.android || a.simulateTouch && !h.touch && y.ios) && (r.removeEventListener("mousedown", this.scrollbar.onDragStart, n), e.removeEventListener("mousemove", this.scrollbar.onDragMove, n), e.removeEventListener("mouseup", this.scrollbar.onDragEnd, o))) : (r.removeEventListener(s.start, this.scrollbar.onDragStart, n), e.removeEventListener(s.move, this.scrollbar.onDragMove, n), e.removeEventListener(s.end, this.scrollbar.onDragEnd, o))
				}
			},
			init: function () {
				if (this.params.scrollbar.el) {
					var e = this.scrollbar,
						t = this.$el,
						i = this.params.scrollbar,
						a = s(i.el);
					this.params.uniqueNavElements && "string" == typeof i.el && a.length > 1 && 1 === t.find(i.el).length && (a = t.find(i.el));
					var r = a.find("." + this.params.scrollbar.dragClass);
					0 === r.length && (r = s('<div class="' + this.params.scrollbar.dragClass + '"></div>'), a.append(r)), d.extend(e, {
						$el: a,
						el: a[0],
						$dragEl: r,
						dragEl: r[0]
					}), i.draggable && e.enableDraggable()
				}
			},
			destroy: function () {
				this.scrollbar.disableDraggable()
			}
		},
		j = {
			setTransform: function (e, t) {
				var i = this.rtl,
					a = s(e),
					r = i ? -1 : 1,
					n = a.attr("data-swiper-parallax") || "0",
					o = a.attr("data-swiper-parallax-x"),
					l = a.attr("data-swiper-parallax-y"),
					d = a.attr("data-swiper-parallax-scale"),
					h = a.attr("data-swiper-parallax-opacity");
				if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = n, l = "0") : (l = n, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t * r + "%" : o * t * r + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", void 0 !== h && null !== h) {
					var p = h - (h - 1) * (1 - Math.abs(t));
					a[0].style.opacity = p
				}
				if (void 0 === d || null === d) a.transform("translate3d(" + o + ", " + l + ", 0px)");
				else {
					var c = d - (d - 1) * (1 - Math.abs(t));
					a.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + c + ")")
				}
			},
			setTranslate: function () {
				var e = this,
					t = e.$el,
					i = e.slides,
					a = e.progress,
					r = e.snapGrid;
				t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, i) {
					e.parallax.setTransform(i, a)
				}), i.each(function (t, i) {
					var n = i.progress;
					e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(t / 2) - a * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), s(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, i) {
						e.parallax.setTransform(i, n)
					})
				})
			},
			setTransition: function (e) {
				void 0 === e && (e = this.params.speed);
				this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, i) {
					var a = s(i),
						r = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
					0 === e && (r = 0), a.transition(r)
				})
			}
		},
		K = {
			getDistanceBetweenTouches: function (e) {
				if (e.targetTouches.length < 2) return 1;
				var t = e.targetTouches[0].pageX,
					i = e.targetTouches[0].pageY,
					s = e.targetTouches[1].pageX,
					a = e.targetTouches[1].pageY;
				return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2))
			},
			onGestureStart: function (e) {
				var t = this.params.zoom,
					i = this.zoom,
					a = i.gesture;
				if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !h.gestures) {
					if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
					i.fakeGestureTouched = !0, a.scaleStart = K.getDistanceBetweenTouches(e)
				}
				a.$slideEl && a.$slideEl.length || (a.$slideEl = s(e.target).closest(".swiper-slide"), 0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas"), a.$imageWrapEl = a.$imageEl.parent("." + t.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl.transition(0), this.zoom.isScaling = !0) : a.$imageEl = void 0
			},
			onGestureChange: function (e) {
				var t = this.params.zoom,
					i = this.zoom,
					s = i.gesture;
				if (!h.gestures) {
					if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
					i.fakeGestureMoved = !0, s.scaleMove = K.getDistanceBetweenTouches(e)
				}
				s.$imageEl && 0 !== s.$imageEl.length && (h.gestures ? this.zoom.scale = e.scale * i.currentScale : i.scale = s.scaleMove / s.scaleStart * i.currentScale, i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
			},
			onGestureEnd: function (e) {
				var t = this.params.zoom,
					i = this.zoom,
					s = i.gesture;
				if (!h.gestures) {
					if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
					if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !y.android) return;
					i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
				}
				s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio), s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (s.$slideEl = void 0))
			},
			onTouchStart: function (e) {
				var t = this.zoom,
					i = t.gesture,
					s = t.image;
				i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (y.android && e.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
			},
			onTouchMove: function (e) {
				var t = this.zoom,
					i = t.gesture,
					s = t.image,
					a = t.velocity;
				if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
					s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = d.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = d.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX), this.rtl && (s.startY = -s.startY));
					var r = s.width * t.scale,
						n = s.height * t.scale;
					if (!(r < i.slideWidth && n < i.slideHeight)) {
						if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - n / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) {
							if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void(s.isTouched = !1);
							if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void(s.isTouched = !1)
						}
						e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
					}
				}
			},
			onTouchEnd: function () {
				var e = this.zoom,
					t = e.gesture,
					i = e.image,
					s = e.velocity;
				if (t.$imageEl && 0 !== t.$imageEl.length) {
					if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void(i.isMoved = !1);
					i.isTouched = !1, i.isMoved = !1;
					var a = 300,
						r = 300,
						n = s.x * a,
						o = i.currentX + n,
						l = s.y * r,
						d = i.currentY + l;
					0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)), 0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
					var h = Math.max(a, r);
					i.currentX = o, i.currentY = d;
					var p = i.width * e.scale,
						c = i.height * e.scale;
					i.minX = Math.min(t.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - c / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
				}
			},
			onTransitionEnd: function () {
				var e = this.zoom,
					t = e.gesture;
				t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0, e.scale = 1, e.currentScale = 1)
			},
			toggle: function (e) {
				var t = this.zoom;
				t.scale && 1 !== t.scale ? t.out() : t.in(e)
			},
			in: function (e) {
				var t, i, a, r, n, o, l, d, h, p, c, u, v, f, m, g, b = this.zoom,
					w = this.params.zoom,
					y = b.gesture,
					x = b.image;
				(y.$slideEl || (y.$slideEl = this.clickedSlide ? s(this.clickedSlide) : this.slides.eq(this.activeIndex), y.$imageEl = y.$slideEl.find("img, svg, canvas"), y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)), y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, i = x.touchesStart.y), b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (m = y.$slideEl[0].offsetWidth, g = y.$slideEl[0].offsetHeight, a = y.$slideEl.offset().left + m / 2 - t, r = y.$slideEl.offset().top + g / 2 - i, l = y.$imageEl[0].offsetWidth, d = y.$imageEl[0].offsetHeight, h = l * b.scale, p = d * b.scale, v = -(c = Math.min(m / 2 - h / 2, 0)), f = -(u = Math.min(g / 2 - p / 2, 0)), n = a * b.scale, o = r * b.scale, n < c && (n = c), n > v && (n = v), o < u && (o = u), o > f && (o = f)) : (n = 0, o = 0), y.$imageWrapEl.transition(300).transform("translate3d(" + n + "px, " + o + "px,0)"), y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"))
			},
			out: function () {
				var e = this.zoom,
					t = this.params.zoom,
					i = e.gesture;
				i.$slideEl || (i.$slideEl = this.clickedSlide ? s(this.clickedSlide) : this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0)
			},
			enable: function () {
				var e = this.zoom;
				if (!e.enabled) {
					e.enabled = !0;
					var t = !("touchstart" !== this.touchEvents.start || !h.passiveListener || !this.params.passiveListeners) && {
						passive: !0,
						capture: !1
					};
					h.gestures ? (this.$wrapperEl.on("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove)
				}
			},
			disable: function () {
				var e = this.zoom;
				if (e.enabled) {
					this.zoom.enabled = !1;
					var t = !("touchstart" !== this.touchEvents.start || !h.passiveListener || !this.params.passiveListeners) && {
						passive: !0,
						capture: !1
					};
					h.gestures ? (this.$wrapperEl.off("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove)
				}
			}
		},
		U = {
			loadInSlide: function (e, t) {
				void 0 === t && (t = !0);
				var i = this,
					a = i.params.lazy;
				if (void 0 !== e && 0 !== i.slides.length) {
					var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
						n = r.find("." + a.elementClass + ":not(." + a.loadedClass + "):not(." + a.loadingClass + ")");
					!r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || (n = n.add(r[0])), 0 !== n.length && n.each(function (e, n) {
						var o = s(n);
						o.addClass(a.loadingClass);
						var l = o.attr("data-background"),
							d = o.attr("data-src"),
							h = o.attr("data-srcset"),
							p = o.attr("data-sizes");
						i.loadImage(o[0], d || l, h, p, !1, function () {
							if (void 0 !== i && null !== i && i && (!i || i.params) && !i.destroyed) {
								if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (h && (o.attr("srcset", h), o.removeAttr("data-srcset")), p && (o.attr("sizes", p), o.removeAttr("data-sizes")), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(a.loadedClass).removeClass(a.loadingClass), r.find("." + a.preloaderClass).remove(), i.params.loop && t) {
									var e = r.attr("data-swiper-slide-index");
									if (r.hasClass(i.params.slideDuplicateClass)) {
										var s = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
										i.lazy.loadInSlide(s.index(), !1)
									} else {
										var n = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
										i.lazy.loadInSlide(n.index(), !1)
									}
								}
								i.emit("lazyImageReady", r[0], o[0])
							}
						}), i.emit("lazyImageLoad", r[0], o[0])
					})
				}
			},
			load: function () {
				var e = this,
					t = e.$wrapperEl,
					i = e.params,
					a = e.slides,
					r = e.activeIndex,
					n = e.virtual && i.virtual.enabled,
					o = i.lazy,
					l = i.slidesPerView;

				function d(e) {
					if (n) {
						if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
					} else if (a[e]) return !0;
					return !1
				}

				function h(e) {
					return n ? s(e).attr("data-swiper-slide-index") : s(e).index()
				}
				if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each(function (t, i) {
					var a = n ? s(i).attr("data-swiper-slide-index") : s(i).index();
					e.lazy.loadInSlide(a)
				});
				else if (l > 1)
					for (var p = r; p < r + l; p += 1) d(p) && e.lazy.loadInSlide(p);
				else e.lazy.loadInSlide(r);
				if (o.loadPrevNext)
					if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
						for (var c = o.loadPrevNextAmount, u = l, v = Math.min(r + u + Math.max(c, u), a.length), f = Math.max(r - Math.max(u, c), 0), m = r + l; m < v; m += 1) d(m) && e.lazy.loadInSlide(m);
						for (var g = f; g < r; g += 1) d(g) && e.lazy.loadInSlide(g)
					} else {
						var b = t.children("." + i.slideNextClass);
						b.length > 0 && e.lazy.loadInSlide(h(b));
						var w = t.children("." + i.slidePrevClass);
						w.length > 0 && e.lazy.loadInSlide(h(w))
					}
			}
		},
		_ = {
			LinearSpline: function (e, t) {
				var i, s, a, r, n, o = function (e, t) {
					for (s = -1, i = e.length; i - s > 1;) e[a = i + s >> 1] <= t ? s = a : i = a;
					return i
				};
				return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
					return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
				}, this
			},
			getInterpolateFunction: function (e) {
				this.controller.spline || (this.controller.spline = this.params.loop ? new _.LinearSpline(this.slidesGrid, e.slidesGrid) : new _.LinearSpline(this.snapGrid, e.snapGrid))
			},
			setTranslate: function (e, t) {
				var i, s, a = this,
					r = a.controller.control;

				function n(e) {
					var t = e.rtl && "horizontal" === e.params.direction ? -a.translate : a.translate;
					"slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), s = -a.controller.spline.interpolate(-t)), s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), s = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, a), e.updateActiveIndex(), e.updateSlidesClasses()
				}
				if (Array.isArray(r))
					for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof I && n(r[o]);
				else r instanceof I && t !== r && n(r)
			},
			setTransition: function (e, t) {
				var i, s = this,
					a = s.controller.control;

				function r(t) {
					t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.$wrapperEl.transitionEnd(function () {
						a && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd())
					}))
				}
				if (Array.isArray(a))
					for (i = 0; i < a.length; i += 1) a[i] !== t && a[i] instanceof I && r(a[i]);
				else a instanceof I && t !== a && r(a)
			}
		},
		Z = {
			makeElFocusable: function (e) {
				return e.attr("tabIndex", "0"), e
			},
			addElRole: function (e, t) {
				return e.attr("role", t), e
			},
			addElLabel: function (e, t) {
				return e.attr("aria-label", t), e
			},
			disableEl: function (e) {
				return e.attr("aria-disabled", !0), e
			},
			enableEl: function (e) {
				return e.attr("aria-disabled", !1), e
			},
			onEnterKey: function (e) {
				var t = this.params.a11y;
				if (13 === e.keyCode) {
					var i = s(e.target);
					this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click()
				}
			},
			notify: function (e) {
				var t = this.a11y.liveRegion;
				0 !== t.length && (t.html(""), t.html(e))
			},
			updateNavigation: function () {
				if (!this.params.loop) {
					var e = this.navigation,
						t = e.$nextEl,
						i = e.$prevEl;
					i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), t && t.length > 0 && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t))
				}
			},
			updatePagination: function () {
				var e = this,
					t = e.params.a11y;
				e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function (i, a) {
					var r = s(a);
					e.a11y.makeElFocusable(r), e.a11y.addElRole(r, "button"), e.a11y.addElLabel(r, t.paginationBulletMessage.replace(/{{index}}/, r.index() + 1))
				})
			},
			init: function () {
				this.$el.append(this.a11y.liveRegion);
				var e, t, i = this.params.a11y;
				this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
			},
			destroy: function () {
				var e, t;
				this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
			}
		},
		Q = {
			init: function () {
				if (this.params.history) {
					if (!t.history || !t.history.pushState) return this.params.history.enabled = !1, void(this.params.hashNavigation.enabled = !0);
					var e = this.history;
					e.initialized = !0, e.paths = Q.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || t.addEventListener("popstate", this.history.setHistoryPopState))
				}
			},
			destroy: function () {
				this.params.history.replaceState || t.removeEventListener("popstate", this.history.setHistoryPopState)
			},
			setHistoryPopState: function () {
				this.history.paths = Q.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
			},
			getPathValues: function () {
				var e = t.location.pathname.slice(1).split("/").filter(function (e) {
						return "" !== e
					}),
					i = e.length;
				return {
					key: e[i - 2],
					value: e[i - 1]
				}
			},
			setHistory: function (e, i) {
				if (this.history.initialized && this.params.history.enabled) {
					var s = this.slides.eq(i),
						a = Q.slugify(s.attr("data-history"));
					t.location.pathname.includes(e) || (a = e + "/" + a);
					var r = t.history.state;
					r && r.value === a || (this.params.history.replaceState ? t.history.replaceState({
						value: a
					}, null, a) : t.history.pushState({
						value: a
					}, null, a))
				}
			},
			slugify: function (e) {
				return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
			},
			scrollToSlide: function (e, t, i) {
				if (t)
					for (var s = 0, a = this.slides.length; s < a; s += 1) {
						var r = this.slides.eq(s);
						if (Q.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
							var n = r.index();
							this.slideTo(n, e, i)
						}
					} else this.slideTo(0, e, i)
			}
		},
		J = {
			onHashCange: function () {
				var t = e.location.hash.replace("#", "");
				t !== this.slides.eq(this.activeIndex).attr("data-hash") && this.slideTo(this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index())
			},
			setHash: function () {
				if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
					if (this.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || "");
					else {
						var i = this.slides.eq(this.activeIndex),
							s = i.attr("data-hash") || i.attr("data-history");
						e.location.hash = s || ""
					}
			},
			init: function () {
				if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
					this.hashNavigation.initialized = !0;
					var i = e.location.hash.replace("#", "");
					if (i)
						for (var a = 0, r = this.slides.length; a < r; a += 1) {
							var n = this.slides.eq(a);
							if ((n.attr("data-hash") || n.attr("data-history")) === i && !n.hasClass(this.params.slideDuplicateClass)) {
								var o = n.index();
								this.slideTo(o, 0, this.params.runCallbacksOnInit, !0)
							}
						}
					this.params.hashNavigation.watchState && s(t).on("hashchange", this.hashNavigation.onHashCange)
				}
			},
			destroy: function () {
				this.params.hashNavigation.watchState && s(t).off("hashchange", this.hashNavigation.onHashCange)
			}
		},
		ee = {
			run: function () {
				var e = this,
					t = e.slides.eq(e.activeIndex),
					i = e.params.autoplay.delay;
				t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = d.nextTick(function () {
					e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
				}, i)
			},
			start: function () {
				return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0))
			},
			stop: function () {
				return !!this.autoplay.running && (void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0))
			},
			pause: function (e) {
				var t = this;
				t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? t.$wrapperEl.transitionEnd(function () {
					t && !t.destroyed && (t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
				}) : (t.autoplay.paused = !1, t.autoplay.run())))
			}
		},
		te = {
			setTranslate: function () {
				for (var e = this.slides, t = 0; t < e.length; t += 1) {
					var i = this.slides.eq(t),
						s = -i[0].swiperSlideOffset;
					this.params.virtualTranslate || (s -= this.translate);
					var a = 0;
					this.isHorizontal() || (a = s, s = 0);
					var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
					i.css({
						opacity: r
					}).transform("translate3d(" + s + "px, " + a + "px, 0px)")
				}
			},
			setTransition: function (e) {
				var t = this,
					i = t.slides,
					s = t.$wrapperEl;
				if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
					var a = !1;
					i.transitionEnd(function () {
						if (!a && t && !t.destroyed) {
							a = !0, t.animating = !1;
							for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) s.trigger(e[i])
						}
					})
				}
			}
		},
		ie = {
			setTranslate: function () {
				var e, t = this.$el,
					i = this.$wrapperEl,
					a = this.slides,
					r = this.width,
					n = this.height,
					o = this.rtl,
					l = this.size,
					d = this.params.cubeEffect,
					h = this.isHorizontal(),
					p = this.virtual && this.params.virtual.enabled,
					c = 0;
				d.shadow && (h ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
					height: r + "px"
				})) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), t.append(e)));
				for (var u = 0; u < a.length; u += 1) {
					var v = a.eq(u),
						f = u;
					p && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
					var m = 90 * f,
						g = Math.floor(m / 360);
					o && (m = -m, g = Math.floor(-m / 360));
					var b = Math.max(Math.min(v[0].progress, 1), -1),
						w = 0,
						y = 0,
						x = 0;
					f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), h || (y = w, w = 0);
					var E = "rotateX(" + (h ? 0 : -m) + "deg) rotateY(" + (h ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
					if (b <= 1 && b > -1 && (c = 90 * f + 90 * b, o && (c = 90 * -f - 90 * b)), v.transform(E), d.slideShadows) {
						var T = h ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
							S = h ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
						0 === T.length && (T = s('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'), v.append(T)), 0 === S.length && (S = s('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'), v.append(S)), T.length && (T[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0))
					}
				}
				if (i.css({
						"-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
						"-moz-transform-origin": "50% 50% -" + l / 2 + "px",
						"-ms-transform-origin": "50% 50% -" + l / 2 + "px",
						"transform-origin": "50% 50% -" + l / 2 + "px"
					}), d.shadow)
					if (h) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
					else {
						var C = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
							M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2),
							z = d.shadowScale,
							k = d.shadowScale / M,
							$ = d.shadowOffset;
						e.transform("scale3d(" + z + ", 1, " + k + ") translate3d(0px, " + (n / 2 + $) + "px, " + -n / 2 / k + "px) rotateX(-90deg)")
					}
				var L = P.isSafari || P.isUiWebView ? -l / 2 : 0;
				i.transform("translate3d(0px,0," + L + "px) rotateX(" + (this.isHorizontal() ? 0 : c) + "deg) rotateY(" + (this.isHorizontal() ? -c : 0) + "deg)")
			},
			setTransition: function (e) {
				var t = this.$el;
				this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
			}
		},
		se = {
			setTranslate: function () {
				for (var e = this.slides, t = 0; t < e.length; t += 1) {
					var i = e.eq(t),
						a = i[0].progress;
					this.params.flipEffect.limitRotation && (a = Math.max(Math.min(i[0].progress, 1), -1));
					var r = -180 * a,
						n = 0,
						o = -i[0].swiperSlideOffset,
						l = 0;
					if (this.isHorizontal() ? this.rtl && (r = -r) : (l = o, o = 0, n = -r, r = 0), i[0].style.zIndex = -Math.abs(Math.round(a)) + e.length, this.params.flipEffect.slideShadows) {
						var d = this.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"),
							h = this.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
						0 === d.length && (d = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), i.append(d)), 0 === h.length && (h = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), i.append(h)), d.length && (d[0].style.opacity = Math.max(-a, 0)), h.length && (h[0].style.opacity = Math.max(a, 0))
					}
					i.transform("translate3d(" + o + "px, " + l + "px, 0px) rotateX(" + n + "deg) rotateY(" + r + "deg)")
				}
			},
			setTransition: function (e) {
				var t = this,
					i = t.slides,
					s = t.activeIndex,
					a = t.$wrapperEl;
				if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
					var r = !1;
					i.eq(s).transitionEnd(function () {
						if (!r && t && !t.destroyed) {
							r = !0, t.animating = !1;
							for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) a.trigger(e[i])
						}
					})
				}
			}
		},
		ae = {
			setTranslate: function () {
				for (var e = this.width, t = this.height, i = this.slides, a = this.$wrapperEl, r = this.slidesSizesGrid, n = this.params.coverflowEffect, o = this.isHorizontal(), l = this.translate, d = o ? e / 2 - l : t / 2 - l, p = o ? n.rotate : -n.rotate, c = n.depth, u = 0, v = i.length; u < v; u += 1) {
					var f = i.eq(u),
						m = r[u],
						g = (d - f[0].swiperSlideOffset - m / 2) / m * n.modifier,
						b = o ? p * g : 0,
						w = o ? 0 : p * g,
						y = -c * Math.abs(g),
						x = o ? 0 : n.stretch * g,
						E = o ? n.stretch * g : 0;
					Math.abs(E) < .001 && (E = 0), Math.abs(x) < .001 && (x = 0), Math.abs(y) < .001 && (y = 0), Math.abs(b) < .001 && (b = 0), Math.abs(w) < .001 && (w = 0);
					var T = "translate3d(" + E + "px," + x + "px," + y + "px)  rotateX(" + w + "deg) rotateY(" + b + "deg)";
					if (f.transform(T), f[0].style.zIndex = 1 - Math.abs(Math.round(g)), n.slideShadows) {
						var S = o ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
							C = o ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
						0 === S.length && (S = s('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'), f.append(S)), 0 === C.length && (C = s('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'), f.append(C)), S.length && (S[0].style.opacity = g > 0 ? g : 0), C.length && (C[0].style.opacity = -g > 0 ? -g : 0)
					}
				}(h.pointerEvents || h.prefixedPointerEvents) && (a[0].style.perspectiveOrigin = d + "px 50%")
			},
			setTransition: function (e) {
				this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
			}
		},
		re = [D, O, A, H, X, B, V, {
			name: "mousewheel",
			params: {
				mousewheel: {
					enabled: !1,
					releaseOnEdges: !1,
					invert: !1,
					forceToAxis: !1,
					sensitivity: 1,
					eventsTarged: "container"
				}
			},
			create: function () {
				d.extend(this, {
					mousewheel: {
						enabled: !1,
						enable: R.enable.bind(this),
						disable: R.disable.bind(this),
						handle: R.handle.bind(this),
						lastScrollTime: d.now()
					}
				})
			},
			on: {
				init: function () {
					this.params.mousewheel.enabled && this.mousewheel.enable()
				},
				destroy: function () {
					this.mousewheel.enabled && this.mousewheel.disable()
				}
			}
		}, {
			name: "navigation",
			params: {
				navigation: {
					nextEl: null,
					prevEl: null,
					hideOnClick: !1,
					disabledClass: "swiper-button-disabled",
					hiddenClass: "swiper-button-hidden",
					lockClass: "swiper-button-lock"
				}
			},
			create: function () {
				d.extend(this, {
					navigation: {
						init: F.init.bind(this),
						update: F.update.bind(this),
						destroy: F.destroy.bind(this)
					}
				})
			},
			on: {
				init: function () {
					this.navigation.init(), this.navigation.update()
				},
				toEdge: function () {
					this.navigation.update()
				},
				fromEdge: function () {
					this.navigation.update()
				},
				destroy: function () {
					this.navigation.destroy()
				},
				click: function (e) {
					var t = this.navigation,
						i = t.$nextEl,
						a = t.$prevEl;
					!this.params.navigation.hideOnClick || s(e.target).is(a) || s(e.target).is(i) || (i && i.toggleClass(this.params.navigation.hiddenClass), a && a.toggleClass(this.params.navigation.hiddenClass))
				}
			}
		}, {
			name: "pagination",
			params: {
				pagination: {
					el: null,
					bulletElement: "span",
					clickable: !1,
					hideOnClick: !1,
					renderBullet: null,
					renderProgressbar: null,
					renderFraction: null,
					renderCustom: null,
					type: "bullets",
					dynamicBullets: !1,
					dynamicMainBullets: 1,
					bulletClass: "swiper-pagination-bullet",
					bulletActiveClass: "swiper-pagination-bullet-active",
					modifierClass: "swiper-pagination-",
					currentClass: "swiper-pagination-current",
					totalClass: "swiper-pagination-total",
					hiddenClass: "swiper-pagination-hidden",
					progressbarFillClass: "swiper-pagination-progressbar-fill",
					clickableClass: "swiper-pagination-clickable",
					lockClass: "swiper-pagination-lock"
				}
			},
			create: function () {
				d.extend(this, {
					pagination: {
						init: W.init.bind(this),
						render: W.render.bind(this),
						update: W.update.bind(this),
						destroy: W.destroy.bind(this),
						dynamicBulletIndex: 0
					}
				})
			},
			on: {
				init: function () {
					this.pagination.init(), this.pagination.render(), this.pagination.update()
				},
				activeIndexChange: function () {
					this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
				},
				snapIndexChange: function () {
					this.params.loop || this.pagination.update()
				},
				slidesLengthChange: function () {
					this.params.loop && (this.pagination.render(), this.pagination.update())
				},
				snapGridLengthChange: function () {
					this.params.loop || (this.pagination.render(), this.pagination.update())
				},
				destroy: function () {
					this.pagination.destroy()
				},
				click: function (e) {
					this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !s(e.target).hasClass(this.params.pagination.bulletClass) && this.pagination.$el.toggleClass(this.params.pagination.hiddenClass)
				}
			}
		}, {
			name: "scrollbar",
			params: {
				scrollbar: {
					el: null,
					dragSize: "auto",
					hide: !1,
					draggable: !1,
					snapOnRelease: !0,
					lockClass: "swiper-scrollbar-lock",
					dragClass: "swiper-scrollbar-drag"
				}
			},
			create: function () {
				d.extend(this, {
					scrollbar: {
						init: q.init.bind(this),
						destroy: q.destroy.bind(this),
						updateSize: q.updateSize.bind(this),
						setTranslate: q.setTranslate.bind(this),
						setTransition: q.setTransition.bind(this),
						enableDraggable: q.enableDraggable.bind(this),
						disableDraggable: q.disableDraggable.bind(this),
						setDragPosition: q.setDragPosition.bind(this),
						onDragStart: q.onDragStart.bind(this),
						onDragMove: q.onDragMove.bind(this),
						onDragEnd: q.onDragEnd.bind(this),
						isTouched: !1,
						timeout: null,
						dragTimeout: null
					}
				})
			},
			on: {
				init: function () {
					this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
				},
				update: function () {
					this.scrollbar.updateSize()
				},
				resize: function () {
					this.scrollbar.updateSize()
				},
				observerUpdate: function () {
					this.scrollbar.updateSize()
				},
				setTranslate: function () {
					this.scrollbar.setTranslate()
				},
				setTransition: function (e) {
					this.scrollbar.setTransition(e)
				},
				destroy: function () {
					this.scrollbar.destroy()
				}
			}
		}, {
			name: "parallax",
			params: {
				parallax: {
					enabled: !1
				}
			},
			create: function () {
				d.extend(this, {
					parallax: {
						setTransform: j.setTransform.bind(this),
						setTranslate: j.setTranslate.bind(this),
						setTransition: j.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function () {
					this.params.parallax.enabled && (this.params.watchSlidesProgress = !0)
				},
				init: function () {
					this.params.parallax && this.parallax.setTranslate()
				},
				setTranslate: function () {
					this.params.parallax && this.parallax.setTranslate()
				},
				setTransition: function (e) {
					this.params.parallax && this.parallax.setTransition(e)
				}
			}
		}, {
			name: "zoom",
			params: {
				zoom: {
					enabled: !1,
					maxRatio: 3,
					minRatio: 1,
					toggle: !0,
					containerClass: "swiper-zoom-container",
					zoomedSlideClass: "swiper-slide-zoomed"
				}
			},
			create: function () {
				var e = this,
					t = {
						enabled: !1,
						scale: 1,
						currentScale: 1,
						isScaling: !1,
						gesture: {
							$slideEl: void 0,
							slideWidth: void 0,
							slideHeight: void 0,
							$imageEl: void 0,
							$imageWrapEl: void 0,
							maxRatio: 3
						},
						image: {
							isTouched: void 0,
							isMoved: void 0,
							currentX: void 0,
							currentY: void 0,
							minX: void 0,
							minY: void 0,
							maxX: void 0,
							maxY: void 0,
							width: void 0,
							height: void 0,
							startX: void 0,
							startY: void 0,
							touchesStart: {},
							touchesCurrent: {}
						},
						velocity: {
							x: void 0,
							y: void 0,
							prevPositionX: void 0,
							prevPositionY: void 0,
							prevTime: void 0
						}
					};
				"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (i) {
					t[i] = K[i].bind(e)
				}), d.extend(e, {
					zoom: t
				})
			},
			on: {
				init: function () {
					this.params.zoom.enabled && this.zoom.enable()
				},
				destroy: function () {
					this.zoom.disable()
				},
				touchStart: function (e) {
					this.zoom.enabled && this.zoom.onTouchStart(e)
				},
				touchEnd: function (e) {
					this.zoom.enabled && this.zoom.onTouchEnd(e)
				},
				doubleTap: function (e) {
					this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
				},
				transitionEnd: function () {
					this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
				}
			}
		}, {
			name: "lazy",
			params: {
				lazy: {
					enabled: !1,
					loadPrevNext: !1,
					loadPrevNextAmount: 1,
					loadOnTransitionStart: !1,
					elementClass: "swiper-lazy",
					loadingClass: "swiper-lazy-loading",
					loadedClass: "swiper-lazy-loaded",
					preloaderClass: "swiper-lazy-preloader"
				}
			},
			create: function () {
				d.extend(this, {
					lazy: {
						initialImageLoaded: !1,
						load: U.load.bind(this),
						loadInSlide: U.loadInSlide.bind(this)
					}
				})
			},
			on: {
				beforeInit: function () {
					this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
				},
				init: function () {
					this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
				},
				scroll: function () {
					this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
				},
				resize: function () {
					this.params.lazy.enabled && this.lazy.load()
				},
				scrollbarDragMove: function () {
					this.params.lazy.enabled && this.lazy.load()
				},
				transitionStart: function () {
					this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
				},
				transitionEnd: function () {
					this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
				}
			}
		}, {
			name: "controller",
			params: {
				controller: {
					control: void 0,
					inverse: !1,
					by: "slide"
				}
			},
			create: function () {
				d.extend(this, {
					controller: {
						control: this.params.controller.control,
						getInterpolateFunction: _.getInterpolateFunction.bind(this),
						setTranslate: _.setTranslate.bind(this),
						setTransition: _.setTransition.bind(this)
					}
				})
			},
			on: {
				update: function () {
					this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
				},
				resize: function () {
					this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
				},
				observerUpdate: function () {
					this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
				},
				setTranslate: function (e, t) {
					this.controller.control && this.controller.setTranslate(e, t)
				},
				setTransition: function (e, t) {
					this.controller.control && this.controller.setTransition(e, t)
				}
			}
		}, {
			name: "a11y",
			params: {
				a11y: {
					enabled: !1,
					notificationClass: "swiper-notification",
					prevSlideMessage: "Previous slide",
					nextSlideMessage: "Next slide",
					firstSlideMessage: "This is the first slide",
					lastSlideMessage: "This is the last slide",
					paginationBulletMessage: "Go to slide {{index}}"
				}
			},
			create: function () {
				var e = this;
				d.extend(e, {
					a11y: {
						liveRegion: s('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
					}
				}), Object.keys(Z).forEach(function (t) {
					e.a11y[t] = Z[t].bind(e)
				})
			},
			on: {
				init: function () {
					this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
				},
				toEdge: function () {
					this.params.a11y.enabled && this.a11y.updateNavigation()
				},
				fromEdge: function () {
					this.params.a11y.enabled && this.a11y.updateNavigation()
				},
				paginationUpdate: function () {
					this.params.a11y.enabled && this.a11y.updatePagination()
				},
				destroy: function () {
					this.params.a11y.enabled && this.a11y.destroy()
				}
			}
		}, {
			name: "history",
			params: {
				history: {
					enabled: !1,
					replaceState: !1,
					key: "slides"
				}
			},
			create: function () {
				d.extend(this, {
					history: {
						init: Q.init.bind(this),
						setHistory: Q.setHistory.bind(this),
						setHistoryPopState: Q.setHistoryPopState.bind(this),
						scrollToSlide: Q.scrollToSlide.bind(this),
						destroy: Q.destroy.bind(this)
					}
				})
			},
			on: {
				init: function () {
					this.params.history.enabled && this.history.init()
				},
				destroy: function () {
					this.params.history.enabled && this.history.destroy()
				},
				transitionEnd: function () {
					this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
				}
			}
		}, {
			name: "hash-navigation",
			params: {
				hashNavigation: {
					enabled: !1,
					replaceState: !1,
					watchState: !1
				}
			},
			create: function () {
				d.extend(this, {
					hashNavigation: {
						initialized: !1,
						init: J.init.bind(this),
						destroy: J.destroy.bind(this),
						setHash: J.setHash.bind(this),
						onHashCange: J.onHashCange.bind(this)
					}
				})
			},
			on: {
				init: function () {
					this.params.hashNavigation.enabled && this.hashNavigation.init()
				},
				destroy: function () {
					this.params.hashNavigation.enabled && this.hashNavigation.destroy()
				},
				transitionEnd: function () {
					this.hashNavigation.initialized && this.hashNavigation.setHash()
				}
			}
		}, {
			name: "autoplay",
			params: {
				autoplay: {
					enabled: !1,
					delay: 3e3,
					waitForTransition: !0,
					disableOnInteraction: !0,
					stopOnLastSlide: !1,
					reverseDirection: !1
				}
			},
			create: function () {
				d.extend(this, {
					autoplay: {
						running: !1,
						paused: !1,
						run: ee.run.bind(this),
						start: ee.start.bind(this),
						stop: ee.stop.bind(this),
						pause: ee.pause.bind(this)
					}
				})
			},
			on: {
				init: function () {
					this.params.autoplay.enabled && this.autoplay.start()
				},
				beforeTransitionStart: function (e, t) {
					this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
				},
				sliderFirstMove: function () {
					this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
				},
				destroy: function () {
					this.autoplay.running && this.autoplay.stop()
				}
			}
		}, {
			name: "effect-fade",
			params: {
				fadeEffect: {
					crossFade: !1
				}
			},
			create: function () {
				d.extend(this, {
					fadeEffect: {
						setTranslate: te.setTranslate.bind(this),
						setTransition: te.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function () {
					if ("fade" === this.params.effect) {
						this.classNames.push(this.params.containerModifierClass + "fade");
						var e = {
							slidesPerView: 1,
							slidesPerColumn: 1,
							slidesPerGroup: 1,
							watchSlidesProgress: !0,
							spaceBetween: 0,
							virtualTranslate: !0
						};
						d.extend(this.params, e), d.extend(this.originalParams, e)
					}
				},
				setTranslate: function () {
					"fade" === this.params.effect && this.fadeEffect.setTranslate()
				},
				setTransition: function (e) {
					"fade" === this.params.effect && this.fadeEffect.setTransition(e)
				}
			}
		}, {
			name: "effect-cube",
			params: {
				cubeEffect: {
					slideShadows: !0,
					shadow: !0,
					shadowOffset: 20,
					shadowScale: .94
				}
			},
			create: function () {
				d.extend(this, {
					cubeEffect: {
						setTranslate: ie.setTranslate.bind(this),
						setTransition: ie.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function () {
					if ("cube" === this.params.effect) {
						this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
						var e = {
							slidesPerView: 1,
							slidesPerColumn: 1,
							slidesPerGroup: 1,
							watchSlidesProgress: !0,
							resistanceRatio: 0,
							spaceBetween: 0,
							centeredSlides: !1,
							virtualTranslate: !0
						};
						d.extend(this.params, e), d.extend(this.originalParams, e)
					}
				},
				setTranslate: function () {
					"cube" === this.params.effect && this.cubeEffect.setTranslate()
				},
				setTransition: function (e) {
					"cube" === this.params.effect && this.cubeEffect.setTransition(e)
				}
			}
		}, {
			name: "effect-flip",
			params: {
				flipEffect: {
					slideShadows: !0,
					limitRotation: !0
				}
			},
			create: function () {
				d.extend(this, {
					flipEffect: {
						setTranslate: se.setTranslate.bind(this),
						setTransition: se.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function () {
					if ("flip" === this.params.effect) {
						this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
						var e = {
							slidesPerView: 1,
							slidesPerColumn: 1,
							slidesPerGroup: 1,
							watchSlidesProgress: !0,
							spaceBetween: 0,
							virtualTranslate: !0
						};
						d.extend(this.params, e), d.extend(this.originalParams, e)
					}
				},
				setTranslate: function () {
					"flip" === this.params.effect && this.flipEffect.setTranslate()
				},
				setTransition: function (e) {
					"flip" === this.params.effect && this.flipEffect.setTransition(e)
				}
			}
		}, {
			name: "effect-coverflow",
			params: {
				coverflowEffect: {
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: !0
				}
			},
			create: function () {
				d.extend(this, {
					coverflowEffect: {
						setTranslate: ae.setTranslate.bind(this),
						setTransition: ae.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function () {
					"coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
				},
				setTranslate: function () {
					"coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
				},
				setTransition: function (e) {
					"coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
				}
			}
		}];
	return void 0 === I.use && (I.use = I.Class.use, I.installModule = I.Class.installModule), I.use(re), I
});
//# sourceMappingURL=swiper.min.js.map


/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */
function hexToRgb(e) {
	var a = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	e = e.replace(a, function (e, a, t, i) {
		return a + a + t + t + i + i
	});
	var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
	return t ? {
		r: parseInt(t[1], 16),
		g: parseInt(t[2], 16),
		b: parseInt(t[3], 16)
	} : null
}

function clamp(e, a, t) {
	return Math.min(Math.max(e, a), t)
}

function isInArray(e, a) {
	return a.indexOf(e) > -1
}
var pJS = function (e, a) {
	var t = document.querySelector("#" + e + " > .particles-js-canvas-el");
	this.pJS = {
		canvas: {
			el: t,
			w: t.offsetWidth,
			h: t.offsetHeight
		},
		particles: {
			number: {
				value: 400,
				density: {
					enable: !0,
					value_area: 800
				}
			},
			color: {
				value: "#fff"
			},
			shape: {
				type: "circle",
				stroke: {
					width: 0,
					color: "#ff0000"
				},
				polygon: {
					nb_sides: 5
				},
				image: {
					src: "",
					width: 100,
					height: 100
				}
			},
			opacity: {
				value: 1,
				random: !1,
				anim: {
					enable: !1,
					speed: 2,
					opacity_min: 0,
					sync: !1
				}
			},
			size: {
				value: 20,
				random: !1,
				anim: {
					enable: !1,
					speed: 20,
					size_min: 0,
					sync: !1
				}
			},
			line_linked: {
				enable: !0,
				distance: 100,
				color: "#fff",
				opacity: 1,
				width: 1
			},
			move: {
				enable: !0,
				speed: 2,
				direction: "none",
				random: !1,
				straight: !1,
				out_mode: "out",
				bounce: !1,
				attract: {
					enable: !1,
					rotateX: 3e3,
					rotateY: 3e3
				}
			},
			array: []
		},
		interactivity: {
			detect_on: "canvas",
			events: {
				onhover: {
					enable: !0,
					mode: "grab"
				},
				onclick: {
					enable: !0,
					mode: "push"
				},
				resize: !0
			},
			modes: {
				grab: {
					distance: 100,
					line_linked: {
						opacity: 1
					}
				},
				bubble: {
					distance: 200,
					size: 80,
					duration: .4
				},
				repulse: {
					distance: 200,
					duration: .4
				},
				push: {
					particles_nb: 4
				},
				remove: {
					particles_nb: 2
				}
			},
			mouse: {}
		},
		retina_detect: !1,
		fn: {
			interact: {},
			modes: {},
			vendors: {}
		},
		tmp: {}
	};
	var i = this.pJS;
	a && Object.deepExtend(i, a), i.tmp.obj = {
		size_value: i.particles.size.value,
		size_anim_speed: i.particles.size.anim.speed,
		move_speed: i.particles.move.speed,
		line_linked_distance: i.particles.line_linked.distance,
		line_linked_width: i.particles.line_linked.width,
		mode_grab_distance: i.interactivity.modes.grab.distance,
		mode_bubble_distance: i.interactivity.modes.bubble.distance,
		mode_bubble_size: i.interactivity.modes.bubble.size,
		mode_repulse_distance: i.interactivity.modes.repulse.distance
	}, i.fn.retinaInit = function () {
		i.retina_detect && window.devicePixelRatio > 1 ? (i.canvas.pxratio = window.devicePixelRatio, i.tmp.retina = !0) : (i.canvas.pxratio = 1, i.tmp.retina = !1), i.canvas.w = i.canvas.el.offsetWidth * i.canvas.pxratio, i.canvas.h = i.canvas.el.offsetHeight * i.canvas.pxratio, i.particles.size.value = i.tmp.obj.size_value * i.canvas.pxratio, i.particles.size.anim.speed = i.tmp.obj.size_anim_speed * i.canvas.pxratio, i.particles.move.speed = i.tmp.obj.move_speed * i.canvas.pxratio, i.particles.line_linked.distance = i.tmp.obj.line_linked_distance * i.canvas.pxratio, i.interactivity.modes.grab.distance = i.tmp.obj.mode_grab_distance * i.canvas.pxratio, i.interactivity.modes.bubble.distance = i.tmp.obj.mode_bubble_distance * i.canvas.pxratio, i.particles.line_linked.width = i.tmp.obj.line_linked_width * i.canvas.pxratio, i.interactivity.modes.bubble.size = i.tmp.obj.mode_bubble_size * i.canvas.pxratio, i.interactivity.modes.repulse.distance = i.tmp.obj.mode_repulse_distance * i.canvas.pxratio
	}, i.fn.canvasInit = function () {
		i.canvas.ctx = i.canvas.el.getContext("2d")
	}, i.fn.canvasSize = function () {
		i.canvas.el.width = i.canvas.w, i.canvas.el.height = i.canvas.h, i && i.interactivity.events.resize && window.addEventListener("resize", function () {
			i.canvas.w = i.canvas.el.offsetWidth, i.canvas.h = i.canvas.el.offsetHeight, i.tmp.retina && (i.canvas.w *= i.canvas.pxratio, i.canvas.h *= i.canvas.pxratio), i.canvas.el.width = i.canvas.w, i.canvas.el.height = i.canvas.h, i.particles.move.enable || (i.fn.particlesEmpty(), i.fn.particlesCreate(), i.fn.particlesDraw(), i.fn.vendors.densityAutoParticles()), i.fn.vendors.densityAutoParticles()
		})
	}, i.fn.canvasPaint = function () {
		i.canvas.ctx.fillRect(0, 0, i.canvas.w, i.canvas.h)
	}, i.fn.canvasClear = function () {
		i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h)
	}, i.fn.particle = function (e, a, t) {
		if (this.radius = (i.particles.size.random ? Math.random() : 1) * i.particles.size.value, i.particles.size.anim.enable && (this.size_status = !1, this.vs = i.particles.size.anim.speed / 100, i.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = t ? t.x : Math.random() * i.canvas.w, this.y = t ? t.y : Math.random() * i.canvas.h, this.x > i.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > i.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), i.particles.move.bounce && i.fn.vendors.checkOverlap(this, t), this.color = {}, "object" == typeof e.value)
			if (e.value instanceof Array) {
				var s = e.value[Math.floor(Math.random() * i.particles.color.value.length)];
				this.color.rgb = hexToRgb(s)
			} else void 0 != e.value.r && void 0 != e.value.g && void 0 != e.value.b && (this.color.rgb = {
				r: e.value.r,
				g: e.value.g,
				b: e.value.b
			}), void 0 != e.value.h && void 0 != e.value.s && void 0 != e.value.l && (this.color.hsl = {
				h: e.value.h,
				s: e.value.s,
				l: e.value.l
			});
		else "random" == e.value ? this.color.rgb = {
			r: Math.floor(256 * Math.random()) + 0,
			g: Math.floor(256 * Math.random()) + 0,
			b: Math.floor(256 * Math.random()) + 0
		} : "string" == typeof e.value && (this.color = e, this.color.rgb = hexToRgb(this.color.value));
		this.opacity = (i.particles.opacity.random ? Math.random() : 1) * i.particles.opacity.value, i.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = i.particles.opacity.anim.speed / 100, i.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
		var n = {};
		switch (i.particles.move.direction) {
			case "top":
				n = {
					x: 0,
					y: -1
				};
				break;
			case "top-right":
				n = {
					x: .5,
					y: -.5
				};
				break;
			case "right":
				n = {
					x: 1,
					y: -0
				};
				break;
			case "bottom-right":
				n = {
					x: .5,
					y: .5
				};
				break;
			case "bottom":
				n = {
					x: 0,
					y: 1
				};
				break;
			case "bottom-left":
				n = {
					x: -.5,
					y: 1
				};
				break;
			case "left":
				n = {
					x: -1,
					y: 0
				};
				break;
			case "top-left":
				n = {
					x: -.5,
					y: -.5
				};
				break;
			default:
				n = {
					x: 0,
					y: 0
				}
		}
		i.particles.move.straight ? (this.vx = n.x, this.vy = n.y, i.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = n.x + Math.random() - .5, this.vy = n.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy;
		var r = i.particles.shape.type;
		if ("object" == typeof r) {
			if (r instanceof Array) {
				var c = r[Math.floor(Math.random() * r.length)];
				this.shape = c
			}
		} else this.shape = r;
		if ("image" == this.shape) {
			var o = i.particles.shape;
			this.img = {
				src: o.image.src,
				ratio: o.image.width / o.image.height
			}, this.img.ratio || (this.img.ratio = 1), "svg" == i.tmp.img_type && void 0 != i.tmp.source_svg && (i.fn.vendors.createSvgImg(this), i.tmp.pushing && (this.img.loaded = !1))
		}
	}, i.fn.particle.prototype.draw = function () {
		function e() {
			i.canvas.ctx.drawImage(r, a.x - t, a.y - t, 2 * t, 2 * t / a.img.ratio)
		}
		var a = this;
		if (void 0 != a.radius_bubble) var t = a.radius_bubble;
		else var t = a.radius;
		if (void 0 != a.opacity_bubble) var s = a.opacity_bubble;
		else var s = a.opacity;
		if (a.color.rgb) var n = "rgba(" + a.color.rgb.r + "," + a.color.rgb.g + "," + a.color.rgb.b + "," + s + ")";
		else var n = "hsla(" + a.color.hsl.h + "," + a.color.hsl.s + "%," + a.color.hsl.l + "%," + s + ")";
		switch (i.canvas.ctx.fillStyle = n, i.canvas.ctx.beginPath(), a.shape) {
			case "circle":
				i.canvas.ctx.arc(a.x, a.y, t, 0, 2 * Math.PI, !1);
				break;
			case "edge":
				i.canvas.ctx.rect(a.x - t, a.y - t, 2 * t, 2 * t);
				break;
			case "triangle":
				i.fn.vendors.drawShape(i.canvas.ctx, a.x - t, a.y + t / 1.66, 2 * t, 3, 2);
				break;
			case "polygon":
				i.fn.vendors.drawShape(i.canvas.ctx, a.x - t / (i.particles.shape.polygon.nb_sides / 3.5), a.y - t / .76, 2.66 * t / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 1);
				break;
			case "star":
				i.fn.vendors.drawShape(i.canvas.ctx, a.x - 2 * t / (i.particles.shape.polygon.nb_sides / 4), a.y - t / 1.52, 2 * t * 2.66 / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 2);
				break;
			case "image":
				if ("svg" == i.tmp.img_type) var r = a.img.obj;
				else var r = i.tmp.img_obj;
				r && e()
		}
		i.canvas.ctx.closePath(), i.particles.shape.stroke.width > 0 && (i.canvas.ctx.strokeStyle = i.particles.shape.stroke.color, i.canvas.ctx.lineWidth = i.particles.shape.stroke.width, i.canvas.ctx.stroke()), i.canvas.ctx.fill()
	}, i.fn.particlesCreate = function () {
		for (var e = 0; e < i.particles.number.value; e++) i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value))
	}, i.fn.particlesUpdate = function () {
		for (var e = 0; e < i.particles.array.length; e++) {
			var a = i.particles.array[e];
			if (i.particles.move.enable) {
				var t = i.particles.move.speed / 2;
				a.x += a.vx * t, a.y += a.vy * t
			}
			if (i.particles.opacity.anim.enable && (1 == a.opacity_status ? (a.opacity >= i.particles.opacity.value && (a.opacity_status = !1), a.opacity += a.vo) : (a.opacity <= i.particles.opacity.anim.opacity_min && (a.opacity_status = !0), a.opacity -= a.vo), a.opacity < 0 && (a.opacity = 0)), i.particles.size.anim.enable && (1 == a.size_status ? (a.radius >= i.particles.size.value && (a.size_status = !1), a.radius += a.vs) : (a.radius <= i.particles.size.anim.size_min && (a.size_status = !0), a.radius -= a.vs), a.radius < 0 && (a.radius = 0)), "bounce" == i.particles.move.out_mode) var s = {
				x_left: a.radius,
				x_right: i.canvas.w,
				y_top: a.radius,
				y_bottom: i.canvas.h
			};
			else var s = {
				x_left: -a.radius,
				x_right: i.canvas.w + a.radius,
				y_top: -a.radius,
				y_bottom: i.canvas.h + a.radius
			};
			switch (a.x - a.radius > i.canvas.w ? (a.x = s.x_left, a.y = Math.random() * i.canvas.h) : a.x + a.radius < 0 && (a.x = s.x_right, a.y = Math.random() * i.canvas.h), a.y - a.radius > i.canvas.h ? (a.y = s.y_top, a.x = Math.random() * i.canvas.w) : a.y + a.radius < 0 && (a.y = s.y_bottom, a.x = Math.random() * i.canvas.w), i.particles.move.out_mode) {
				case "bounce":
					a.x + a.radius > i.canvas.w ? a.vx = -a.vx : a.x - a.radius < 0 && (a.vx = -a.vx), a.y + a.radius > i.canvas.h ? a.vy = -a.vy : a.y - a.radius < 0 && (a.vy = -a.vy)
			}
			if (isInArray("grab", i.interactivity.events.onhover.mode) && i.fn.modes.grabParticle(a), (isInArray("bubble", i.interactivity.events.onhover.mode) || isInArray("bubble", i.interactivity.events.onclick.mode)) && i.fn.modes.bubbleParticle(a), (isInArray("repulse", i.interactivity.events.onhover.mode) || isInArray("repulse", i.interactivity.events.onclick.mode)) && i.fn.modes.repulseParticle(a), i.particles.line_linked.enable || i.particles.move.attract.enable)
				for (var n = e + 1; n < i.particles.array.length; n++) {
					var r = i.particles.array[n];
					i.particles.line_linked.enable && i.fn.interact.linkParticles(a, r), i.particles.move.attract.enable && i.fn.interact.attractParticles(a, r), i.particles.move.bounce && i.fn.interact.bounceParticles(a, r)
				}
		}
	}, i.fn.particlesDraw = function () {
		i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h), i.fn.particlesUpdate();
		for (var e = 0; e < i.particles.array.length; e++) {
			var a = i.particles.array[e];
			a.draw()
		}
	}, i.fn.particlesEmpty = function () {
		i.particles.array = []
	}, i.fn.particlesRefresh = function () {
		cancelRequestAnimFrame(i.fn.checkAnimFrame), cancelRequestAnimFrame(i.fn.drawAnimFrame), i.tmp.source_svg = void 0, i.tmp.img_obj = void 0, i.tmp.count_svg = 0, i.fn.particlesEmpty(), i.fn.canvasClear(), i.fn.vendors.start()
	}, i.fn.interact.linkParticles = function (e, a) {
		var t = e.x - a.x,
			s = e.y - a.y,
			n = Math.sqrt(t * t + s * s);
		if (n <= i.particles.line_linked.distance) {
			var r = i.particles.line_linked.opacity - n / (1 / i.particles.line_linked.opacity) / i.particles.line_linked.distance;
			if (r > 0) {
				var c = i.particles.line_linked.color_rgb_line;
				i.canvas.ctx.strokeStyle = "rgba(" + c.r + "," + c.g + "," + c.b + "," + r + ")", i.canvas.ctx.lineWidth = i.particles.line_linked.width, i.canvas.ctx.beginPath(), i.canvas.ctx.moveTo(e.x, e.y), i.canvas.ctx.lineTo(a.x, a.y), i.canvas.ctx.stroke(), i.canvas.ctx.closePath()
			}
		}
	}, i.fn.interact.attractParticles = function (e, a) {
		var t = e.x - a.x,
			s = e.y - a.y,
			n = Math.sqrt(t * t + s * s);
		if (n <= i.particles.line_linked.distance) {
			var r = t / (1e3 * i.particles.move.attract.rotateX),
				c = s / (1e3 * i.particles.move.attract.rotateY);
			e.vx -= r, e.vy -= c, a.vx += r, a.vy += c
		}
	}, i.fn.interact.bounceParticles = function (e, a) {
		var t = e.x - a.x,
			i = e.y - a.y,
			s = Math.sqrt(t * t + i * i),
			n = e.radius + a.radius;
		n >= s && (e.vx = -e.vx, e.vy = -e.vy, a.vx = -a.vx, a.vy = -a.vy)
	}, i.fn.modes.pushParticles = function (e, a) {
		i.tmp.pushing = !0;
		for (var t = 0; e > t; t++) i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value, {
			x: a ? a.pos_x : Math.random() * i.canvas.w,
			y: a ? a.pos_y : Math.random() * i.canvas.h
		})), t == e - 1 && (i.particles.move.enable || i.fn.particlesDraw(), i.tmp.pushing = !1)
	}, i.fn.modes.removeParticles = function (e) {
		i.particles.array.splice(0, e), i.particles.move.enable || i.fn.particlesDraw()
	}, i.fn.modes.bubbleParticle = function (e) {
		function a() {
			e.opacity_bubble = e.opacity, e.radius_bubble = e.radius
		}

		function t(a, t, s, n, c) {
			if (a != t)
				if (i.tmp.bubble_duration_end) {
					if (void 0 != s) {
						var o = n - p * (n - a) / i.interactivity.modes.bubble.duration,
							l = a - o;
						d = a + l, "size" == c && (e.radius_bubble = d), "opacity" == c && (e.opacity_bubble = d)
					}
				} else if (r <= i.interactivity.modes.bubble.distance) {
				if (void 0 != s) var v = s;
				else var v = n;
				if (v != a) {
					var d = n - p * (n - a) / i.interactivity.modes.bubble.duration;
					"size" == c && (e.radius_bubble = d), "opacity" == c && (e.opacity_bubble = d)
				}
			} else "size" == c && (e.radius_bubble = void 0), "opacity" == c && (e.opacity_bubble = void 0)
		}
		if (i.interactivity.events.onhover.enable && isInArray("bubble", i.interactivity.events.onhover.mode)) {
			var s = e.x - i.interactivity.mouse.pos_x,
				n = e.y - i.interactivity.mouse.pos_y,
				r = Math.sqrt(s * s + n * n),
				c = 1 - r / i.interactivity.modes.bubble.distance;
			if (r <= i.interactivity.modes.bubble.distance) {
				if (c >= 0 && "mousemove" == i.interactivity.status) {
					if (i.interactivity.modes.bubble.size != i.particles.size.value)
						if (i.interactivity.modes.bubble.size > i.particles.size.value) {
							var o = e.radius + i.interactivity.modes.bubble.size * c;
							o >= 0 && (e.radius_bubble = o)
						} else {
							var l = e.radius - i.interactivity.modes.bubble.size,
								o = e.radius - l * c;
							o > 0 ? e.radius_bubble = o : e.radius_bubble = 0
						}
					if (i.interactivity.modes.bubble.opacity != i.particles.opacity.value)
						if (i.interactivity.modes.bubble.opacity > i.particles.opacity.value) {
							var v = i.interactivity.modes.bubble.opacity * c;
							v > e.opacity && v <= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = v)
						} else {
							var v = e.opacity - (i.particles.opacity.value - i.interactivity.modes.bubble.opacity) * c;
							v < e.opacity && v >= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = v)
						}
				}
			} else a();
			"mouseleave" == i.interactivity.status && a()
		} else if (i.interactivity.events.onclick.enable && isInArray("bubble", i.interactivity.events.onclick.mode)) {
			if (i.tmp.bubble_clicking) {
				var s = e.x - i.interactivity.mouse.click_pos_x,
					n = e.y - i.interactivity.mouse.click_pos_y,
					r = Math.sqrt(s * s + n * n),
					p = ((new Date).getTime() - i.interactivity.mouse.click_time) / 1e3;
				p > i.interactivity.modes.bubble.duration && (i.tmp.bubble_duration_end = !0), p > 2 * i.interactivity.modes.bubble.duration && (i.tmp.bubble_clicking = !1, i.tmp.bubble_duration_end = !1)
			}
			i.tmp.bubble_clicking && (t(i.interactivity.modes.bubble.size, i.particles.size.value, e.radius_bubble, e.radius, "size"), t(i.interactivity.modes.bubble.opacity, i.particles.opacity.value, e.opacity_bubble, e.opacity, "opacity"))
		}
	}, i.fn.modes.repulseParticle = function (e) {
		function a() {
			var a = Math.atan2(d, p);
			if (e.vx = u * Math.cos(a), e.vy = u * Math.sin(a), "bounce" == i.particles.move.out_mode) {
				var t = {
					x: e.x + e.vx,
					y: e.y + e.vy
				};
				t.x + e.radius > i.canvas.w ? e.vx = -e.vx : t.x - e.radius < 0 && (e.vx = -e.vx), t.y + e.radius > i.canvas.h ? e.vy = -e.vy : t.y - e.radius < 0 && (e.vy = -e.vy)
			}
		}
		if (i.interactivity.events.onhover.enable && isInArray("repulse", i.interactivity.events.onhover.mode) && "mousemove" == i.interactivity.status) {
			var t = e.x - i.interactivity.mouse.pos_x,
				s = e.y - i.interactivity.mouse.pos_y,
				n = Math.sqrt(t * t + s * s),
				r = {
					x: t / n,
					y: s / n
				},
				c = i.interactivity.modes.repulse.distance,
				o = 100,
				l = clamp(1 / c * (-1 * Math.pow(n / c, 2) + 1) * c * o, 0, 50),
				v = {
					x: e.x + r.x * l,
					y: e.y + r.y * l
				};
			"bounce" == i.particles.move.out_mode ? (v.x - e.radius > 0 && v.x + e.radius < i.canvas.w && (e.x = v.x), v.y - e.radius > 0 && v.y + e.radius < i.canvas.h && (e.y = v.y)) : (e.x = v.x, e.y = v.y)
		} else if (i.interactivity.events.onclick.enable && isInArray("repulse", i.interactivity.events.onclick.mode))
			if (i.tmp.repulse_finish || (i.tmp.repulse_count++, i.tmp.repulse_count == i.particles.array.length && (i.tmp.repulse_finish = !0)), i.tmp.repulse_clicking) {
				var c = Math.pow(i.interactivity.modes.repulse.distance / 6, 3),
					p = i.interactivity.mouse.click_pos_x - e.x,
					d = i.interactivity.mouse.click_pos_y - e.y,
					m = p * p + d * d,
					u = -c / m * 1;
				c >= m && a()
			} else 0 == i.tmp.repulse_clicking && (e.vx = e.vx_i, e.vy = e.vy_i)
	}, i.fn.modes.grabParticle = function (e) {
		if (i.interactivity.events.onhover.enable && "mousemove" == i.interactivity.status) {
			var a = e.x - i.interactivity.mouse.pos_x,
				t = e.y - i.interactivity.mouse.pos_y,
				s = Math.sqrt(a * a + t * t);
			if (s <= i.interactivity.modes.grab.distance) {
				var n = i.interactivity.modes.grab.line_linked.opacity - s / (1 / i.interactivity.modes.grab.line_linked.opacity) / i.interactivity.modes.grab.distance;
				if (n > 0) {
					var r = i.particles.line_linked.color_rgb_line;
					i.canvas.ctx.strokeStyle = "rgba(" + r.r + "," + r.g + "," + r.b + "," + n + ")", i.canvas.ctx.lineWidth = i.particles.line_linked.width, i.canvas.ctx.beginPath(), i.canvas.ctx.moveTo(e.x, e.y), i.canvas.ctx.lineTo(i.interactivity.mouse.pos_x, i.interactivity.mouse.pos_y), i.canvas.ctx.stroke(), i.canvas.ctx.closePath()
				}
			}
		}
	}, i.fn.vendors.eventsListeners = function () {
		"window" == i.interactivity.detect_on ? i.interactivity.el = window : i.interactivity.el = i.canvas.el, (i.interactivity.events.onhover.enable || i.interactivity.events.onclick.enable) && (i.interactivity.el.addEventListener("mousemove", function (e) {
			if (i.interactivity.el == window) var a = e.clientX,
				t = e.clientY;
			else var a = e.offsetX || e.clientX,
				t = e.offsetY || e.clientY;
			i.interactivity.mouse.pos_x = a, i.interactivity.mouse.pos_y = t, i.tmp.retina && (i.interactivity.mouse.pos_x *= i.canvas.pxratio, i.interactivity.mouse.pos_y *= i.canvas.pxratio), i.interactivity.status = "mousemove"
		}), i.interactivity.el.addEventListener("mouseleave", function (e) {
			i.interactivity.mouse.pos_x = null, i.interactivity.mouse.pos_y = null, i.interactivity.status = "mouseleave"
		})), i.interactivity.events.onclick.enable && i.interactivity.el.addEventListener("click", function () {
			if (i.interactivity.mouse.click_pos_x = i.interactivity.mouse.pos_x, i.interactivity.mouse.click_pos_y = i.interactivity.mouse.pos_y, i.interactivity.mouse.click_time = (new Date).getTime(), i.interactivity.events.onclick.enable) switch (i.interactivity.events.onclick.mode) {
				case "push":
					i.particles.move.enable ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : 1 == i.interactivity.modes.push.particles_nb ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : i.interactivity.modes.push.particles_nb > 1 && i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb);
					break;
				case "remove":
					i.fn.modes.removeParticles(i.interactivity.modes.remove.particles_nb);
					break;
				case "bubble":
					i.tmp.bubble_clicking = !0;
					break;
				case "repulse":
					i.tmp.repulse_clicking = !0, i.tmp.repulse_count = 0, i.tmp.repulse_finish = !1, setTimeout(function () {
						i.tmp.repulse_clicking = !1
					}, 1e3 * i.interactivity.modes.repulse.duration)
			}
		})
	}, i.fn.vendors.densityAutoParticles = function () {
		if (i.particles.number.density.enable) {
			var e = i.canvas.el.width * i.canvas.el.height / 1e3;
			i.tmp.retina && (e /= 2 * i.canvas.pxratio);
			var a = e * i.particles.number.value / i.particles.number.density.value_area,
				t = i.particles.array.length - a;
			0 > t ? i.fn.modes.pushParticles(Math.abs(t)) : i.fn.modes.removeParticles(t)
		}
	}, i.fn.vendors.checkOverlap = function (e, a) {
		for (var t = 0; t < i.particles.array.length; t++) {
			var s = i.particles.array[t],
				n = e.x - s.x,
				r = e.y - s.y,
				c = Math.sqrt(n * n + r * r);
			c <= e.radius + s.radius && (e.x = a ? a.x : Math.random() * i.canvas.w, e.y = a ? a.y : Math.random() * i.canvas.h, i.fn.vendors.checkOverlap(e))
		}
	}, i.fn.vendors.createSvgImg = function (e) {
		var a = i.tmp.source_svg,
			t = /#([0-9A-F]{3,6})/gi,
			s = a.replace(t, function (a, t, i, s) {
				if (e.color.rgb) var n = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + e.opacity + ")";
				else var n = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + e.opacity + ")";
				return n
			}),
			n = new Blob([s], {
				type: "image/svg+xml;charset=utf-8"
			}),
			r = window.URL || window.webkitURL || window,
			c = r.createObjectURL(n),
			o = new Image;
		o.addEventListener("load", function () {
			e.img.obj = o, e.img.loaded = !0, r.revokeObjectURL(c), i.tmp.count_svg++
		}), o.src = c
	}, i.fn.vendors.destroypJS = function () {
		cancelAnimationFrame(i.fn.drawAnimFrame), t.remove(), pJSDom = null
	}, i.fn.vendors.drawShape = function (e, a, t, i, s, n) {
		var r = s * n,
			c = s / n,
			o = 180 * (c - 2) / c,
			l = Math.PI - Math.PI * o / 180;
		e.save(), e.beginPath(), e.translate(a, t), e.moveTo(0, 0);
		for (var v = 0; r > v; v++) e.lineTo(i, 0), e.translate(i, 0), e.rotate(l);
		e.fill(), e.restore()
	}, i.fn.vendors.exportImg = function () {
		window.open(i.canvas.el.toDataURL("image/png"), "_blank")
	}, i.fn.vendors.loadImg = function (e) {
		if (i.tmp.img_error = void 0, "" != i.particles.shape.image.src)
			if ("svg" == e) {
				var a = new XMLHttpRequest;
				a.open("GET", i.particles.shape.image.src), a.onreadystatechange = function (e) {
					4 == a.readyState && (200 == a.status ? (i.tmp.source_svg = e.currentTarget.response, i.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), i.tmp.img_error = !0))
				}, a.send()
			} else {
				var t = new Image;
				t.addEventListener("load", function () {
					i.tmp.img_obj = t, i.fn.vendors.checkBeforeDraw()
				}), t.src = i.particles.shape.image.src
			}
		else console.log("Error pJS - No image.src"), i.tmp.img_error = !0
	}, i.fn.vendors.draw = function () {
		"image" == i.particles.shape.type ? "svg" == i.tmp.img_type ? i.tmp.count_svg >= i.particles.number.value ? (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : void 0 != i.tmp.img_obj ? (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame))
	}, i.fn.vendors.checkBeforeDraw = function () {
		"image" == i.particles.shape.type ? "svg" == i.tmp.img_type && void 0 == i.tmp.source_svg ? i.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(i.tmp.checkAnimFrame), i.tmp.img_error || (i.fn.vendors.init(), i.fn.vendors.draw())) : (i.fn.vendors.init(), i.fn.vendors.draw())
	}, i.fn.vendors.init = function () {
		i.fn.retinaInit(), i.fn.canvasInit(), i.fn.canvasSize(), i.fn.canvasPaint(), i.fn.particlesCreate(), i.fn.vendors.densityAutoParticles(), i.particles.line_linked.color_rgb_line = hexToRgb(i.particles.line_linked.color)
	}, i.fn.vendors.start = function () {
		isInArray("image", i.particles.shape.type) ? (i.tmp.img_type = i.particles.shape.image.src.substr(i.particles.shape.image.src.length - 3), i.fn.vendors.loadImg(i.tmp.img_type)) : i.fn.vendors.checkBeforeDraw()
	}, i.fn.vendors.eventsListeners(), i.fn.vendors.start()
};
Object.deepExtend = function (e, a) {
	for (var t in a) a[t] && a[t].constructor && a[t].constructor === Object ? (e[t] = e[t] || {}, arguments.callee(e[t], a[t])) : e[t] = a[t];
	return e
}, window.requestAnimFrame = function () {
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
		window.setTimeout(e, 1e3 / 60)
	}
}(), window.cancelRequestAnimFrame = function () {
	return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
}(), window.pJSDom = [], window.particlesJS = function (e, a) {
	"string" != typeof e && (a = e, e = "particles-js"), e || (e = "particles-js");
	var t = document.getElementById(e),
		i = "particles-js-canvas-el",
		s = t.getElementsByClassName(i);
	if (s.length)
		for (; s.length > 0;) t.removeChild(s[0]);
	var n = document.createElement("canvas");
	n.className = i, n.style.width = "100%", n.style.height = "100%";
	var r = document.getElementById(e).appendChild(n);
	null != r && pJSDom.push(new pJS(e, a))
}, window.particlesJS.load = function (e, a, t) {
	var i = new XMLHttpRequest;
	i.open("GET", a), i.onreadystatechange = function (a) {
		if (4 == i.readyState)
			if (200 == i.status) {
				var s = JSON.parse(a.currentTarget.response);
				window.particlesJS(e, s), t && t()
			} else console.log("Error pJS - XMLHttpRequest status: " + i.status), console.log("Error pJS - File config not found")
	}, i.send()
};