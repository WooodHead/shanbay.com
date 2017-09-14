var bayComponents = function (t) {
  function e(i) {
    if (n[i]) return n[i].exports;
    var o = n[i] = {
      exports: {},
      id: i,
      loaded: !1
    };
    return t[i].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
  }
  var n = {};
  return e.m = t, e.c = n, e.p = "", e(0)
}([function (t, e, n) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var o = n(5);
  Object.defineProperty(e, "initAudios", {
    enumerable: !0,
    get: function () {
      return i(o).default
    }
  });
  var a = n(13);
  Object.defineProperty(e, "initVideos", {
    enumerable: !0,
    get: function () {
      return i(a).default
    }
  });
  var r = n(7);
  Object.defineProperty(e, "initCollapse", {
    enumerable: !0,
    get: function () {
      return i(r).default
    }
  });
  var s = n(6);
  Object.defineProperty(e, "initCalendar", {
    enumerable: !0,
    get: function () {
      return i(s).default
    }
  });
  var c = n(4);
  Object.defineProperty(e, "PullToLoadList", {
    enumerable: !0,
    get: function () {
      return c.PullToLoadList
    }
  });
  var u = n(9);
  Object.defineProperty(e, "comments", {
    enumerable: !0,
    get: function () {
      return i(u).default
    }
  });
  var l = n(12);
  Object.defineProperty(e, "tabs", {
    enumerable: !0,
    get: function () {
      return i(l).default
    }
  });
  var d = n(11);
  Object.defineProperty(e, "renderEditor", {
    enumerable: !0,
    get: function () {
      return i(d).default
    }
  });
  var h = n(10);
  Object.defineProperty(e, "initFlipper", {
    enumerable: !0,
    get: function () {
      return i(h).default
    }
  }), n(16)
}, function (t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var i = n(3);
  Object.keys(i).forEach(function (t) {
    "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
      enumerable: !0,
      get: function () {
        return i[t]
      }
    })
  });
  var o = n(2);
  Object.keys(o).forEach(function (t) {
    "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
      enumerable: !0,
      get: function () {
        return o[t]
      }
    })
  });
  var a = n(14);
  Object.keys(a).forEach(function (t) {
    "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
      enumerable: !0,
      get: function () {
        return a[t]
      }
    })
  });
  var r = n(15);
  Object.keys(r).forEach(function (t) {
    "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
      enumerable: !0,
      get: function () {
        return r[t]
      }
    })
  })
}, function (t, e) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var n = arguments,
    i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    },
    o = e.assertString = function (t) {
      if ("string" != typeof t) throw new TypeError("This library (validator.js) validates strings only")
    },
    a = e.toString = function (t) {
      return "object" === ("undefined" == typeof t ? "undefined" : i(t)) && null !== t ? t = "function" == typeof t.toString ? t.toString() : "[object Object]" : (null === t || "undefined" == typeof t || isNaN(t) && !t.length) && (t = ""), String(t)
    };
  e.merge = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      e = arguments[1];
    return Object.keys(e).forEach(function (n) {
      "undefined" == typeof t[n] && (t[n] = e[n])
    }), t
  }, e.isStandardBrowserEnv = function () {
    return "undefined" != typeof window && "undefined" != typeof document && "function" == typeof document.createElement
  }, e.isFunction = function (t) {
    return "[object Function]" === Object.prototype.toString.call(t)
  }, e.isWechatUA = function (t) {
    return /micromessenger/i.test(t)
  }, e.isMobileUA = function (t) {
    return /Mobile|iP(hone|od|ad)|iOS|Android|BlackBerry/i.test(t)
  }, e.isAndroidUA = function (t) {
    return /(android)/i.test(t)
  }, e.isIOSUA = function (t) {
    return /iPad|iOS|iPhone|iPod/i.test(t)
  }, e.isShanbayAppUA = function (t) {
    return /com\.shanbay/.test(t.toLowerCase())
  }, e.isMobilePhone = function (t) {
    var e = a(t),
      n = {
        "zh-CN": /^(\+?0?86\-?)?1[345789]\d{9}$/,
        "zh-TW": /^(\+?886\-?|0)?9\d{8}$/
      };
    return n["zh-CN"].test(e) || n["zh-TW"].test(e)
  }, e.isEmail = function (t) {
    o(t);
    var e = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return e.test(t)
  }, e.isUrl = function (t) {
    o(t);
    var e = new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i");
    return e.test(t)
  }, e.escapeStr = function (t) {
    return o(t), t.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\//g, "&#x2F;").replace(/\\/g, "&#x5C;").replace(/`/g, "&#96;")
  }, e.unescapeStr = function (t) {
    return o(t), t.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#x2F;/g, "/").replace(/&#96;/g, "`")
  }, e.isStrLength = function (t, e) {
    o(t);
    var a = void 0,
      r = void 0;
    "object" === ("undefined" == typeof e ? "undefined" : i(e)) ? (a = e.min || 0, r = e.max) : (a = n[1], r = n[2]);
    var s = t.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [],
      c = t.length - s.length;
    return c >= a && ("undefined" == typeof r || c <= r)
  }, e.isJSON = function (t) {
    o(t);
    try {
      var e = JSON.parse(t);
      return !!e && "object" === ("undefined" == typeof e ? "undefined" : i(e))
    } catch (t) {}
    return !1
  }, e.isNumeric = function (t) {
    var e = /^[-+]?[0-9]+$/;
    return o(t), e.test(t)
  }, e.isEmptyStr = function (t) {
    return o(t), 0 === t.length
  }, e.isEmptyObj = function (t) {
    return !Object.keys(t).length
  }, e.isArray = function (t) {
    return "[object Array]" === Object.prototype.toString.call(t)
  }
}, function (t, e) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var n = e.parseDate = function (t) {
      var e = /^(\d{4})\-(\d{2})\-(\d{2})T(\d{2}):(\d{2}):(\d{2})(\+|\-)(\d{4})$/,
        n = /^(\d{4})\-(\d{2})\-(\d{2})T(\d{2}):(\d{2}):(\d{2})$/;
      return e.test(t) ? new Date([t.slice(0, 22), ":", t.slice(22)].join("")) : n.test(t) ? new Date(t.replace("T", " ")) : new Date(t)
    },
    i = e.pad = function (t, e, n) {
      return t.length >= e ? t : new Array(e - t.length + 1).join(n) + t
    },
    o = (e.formatDate = function (t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "yyyy-MM-DD",
        o = "日_一_二_三_四_五_六".split("_"),
        a = n(t),
        r = {
          Y: a.getFullYear(),
          y: a.getFullYear(),
          M: a.getMonth() + 1,
          D: a.getDate(),
          d: a.getDay(),
          h: a.getHours(),
          m: a.getMinutes(),
          s: a.getSeconds(),
          S: a.getMilliseconds()
        },
        s = e.replace(/([YyMDdhmsS])+/g, function (t, e) {
          var n = r[e],
            a = t.length;
          return void 0 === n ? t : (n = n.toString(), "d" === t ? o[n] : a > n.length ? i(n, a, 0) : "y" === e || "Y" === e ? n.substr(n.length - a) : n)
        });
      return s
    }, e.trimString = function (t, e) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "...";
      return t.length <= e ? t : t.slice(0, e) + n
    }, e.formatSafetyStr = function (t, e, n) {
      var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "*";
      t = t.toString();
      var o = t.length - e - n;
      if (o < 0) return t;
      var a = new Array(o + 1).join(i);
      return [t.slice(0, e), a, n <= 0 ? "" : t.slice(-n)].join("")
    });
  e.formatSafetyEmail = function (t, e, n, i) {
    var a = t.toString();
    return e = Number(e) || Math.floor(1 * a.length / 4), n = Number(n) || Math.floor(1 * a.length / 4), o(a, e, n, i)
  }, e.formatSafetyMobilephone = function (t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
      i = arguments[3];
    return o(t, e, n, i)
  }
}, function (t, e, n) {
  "use strict";

  function i(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.PullToLoadList = void 0;
  var o = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      return function (e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e
      }
    }(),
    a = n(1);
  e.PullToLoadList = function () {
    function t() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      i(this, t);
      var n = {
        container: window,
        ipp: 10,
        pageNum: 0,
        total: 0,
        apiUrl: "",
        threshold: 10,
        renderItem: function () {},
        onLoadedFirstPage: function () {},
        onLoadedError: function () {},
        parseData: function (t) {
          return {
            items: t.objects,
            total: t.total
          }
        }
      };
      this.options = $.extend({}, n, e), this.apiUrl = this.options.apiUrl, this.ipp = this.options.ipp, this.pageNum = this.options.pageNum, this.total = this.options.total, this.renderItem = this.options.renderItem, this.parseData = this.options.parseData, this.onLoadedFirstPage = this.options.onLoadedFirstPage, this.onLoadedError = this.options.onLoadedError, this.threshold = this.options.threshold, this.container = this.options.container, this.items = [], this.isLoading = !1, this.$loadHint = $("#load-hint"), this.$loadMoreHint = $("#load-more-hint"), this.init()
    }
    return o(t, [{
      key: "init",
      value: function () {
        this.pageNum > 0 ? this.onLoadedFirstPage({}) : (this.pageNum += 1, this.loadItems(this.onLoadedFirstPage, this.onLoadedError)), this.bindEvents()
      }
    }, {
      key: "bindEvents",
      value: function () {
        var t = this,
          e = $(window),
          n = $(this.container)[0],
          i = $("body");
        e.on("touchmove mousewheel", function () {
          if (!t.isLoading)
            if (n === window) {
              var e = document.documentElement;
              e.scrollHeight - Math.ceil(window.scrollY || window.pageYOffset) - t.threshold <= e.clientHeight && t.loadMoreData()
            } else n.scrollHeight - Math.ceil(n.scrollTop) - t.threshold <= n.clientHeight && t.loadMoreData()
        }), i.on("click", "#load-more-hint", function () {
          t.loadMoreData()
        })
      }
    }, {
      key: "loadMoreData",
      value: function () {
        this.checkIsLastPage() || (this.pageNum += 1, this.renderLoading(), this.loadItems())
      }
    }, {
      key: "checkIsLastPage",
      value: function () {
        return this.pageNum * this.ipp >= this.total
      }
    }, {
      key: "renderMoreHint",
      value: function () {
        this.checkIsLastPage() ? this.$loadMoreHint.hide() : this.$loadMoreHint.show()
      }
    }, {
      key: "renderLoading",
      value: function () {
        this.$loadMoreHint.hide(), this.$loadHint.show()
      }
    }, {
      key: "renderItems",
      value: function () {
        var t = this;
        this.items.forEach(function (e) {
          return t.renderItem(e)
        }), this.renderMoreHint()
      }
    }, {
      key: "loadItems",
      value: function () {
        var t = this,
          e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function () {},
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {};
        this.isLoading = !0;
        var i = void 0;
        i = this.apiUrl.split("?").length > 1 ? this.apiUrl + "&page=" + this.pageNum + "&ipp=" + this.ipp : this.apiUrl + "?page=" + this.pageNum + "&ipp=" + this.ipp, (0, a.ajax)({
          url: i,
          type: "GET",
          success: function (n) {
            var i = t.parseData(n);
            t.$loadHint.hide(), t.items = i.items, t.total = i.total, t.isLoading = !1, t.renderItems(), e(n)
          },
          error: function (e, i) {
            t.$loadHint.hide(), n(e, i)
          }
        })
      }
    }]), t
  }()
}, function (t, e) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var n = function (t) {
      var e = Math.floor(t);
      return e < 10 ? "0" + e : e
    },
    i = function (t) {
      var e = n(t / 60),
        i = n(t % 60);
      return e + ":" + i
    },
    o = function (t) {
      t.find(".current-point").css("left", "0%"), t.find(".current-bar").css("width", "0%"), t.find(".audio-controls-time").html("00:00")
    },
    a = function (t) {
      return function () {
        t.play()
      }
    },
    r = function (t) {
      return function () {
        t.pause()
      }
    },
    s = function (t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "play";
      "play" === e ? (t.find(".play-btn").hide(), t.find(".pause-btn").show()) : (t.find(".pause-btn").hide(), t.find(".play-btn").show())
    },
    c = function (t) {
      return function () {
        s(t, "play")
      }
    },
    u = function (t) {
      return function () {
        s(t, "pause")
      }
    },
    l = function (t) {
      return function () {
        o(t)
      }
    },
    d = function (t) {
      return function (e) {
        var n = e.target,
          o = n.currentTime,
          a = n.duration,
          r = n.currentTime / a * 100;
        t.find(".current-point").css("left", r + "%"), t.find(".current-bar").css("width", r + "%"), t.find(".audio-controls-time").html(i(o))
      }
    },
    h = function () {
      var t = ['<div class="audio-controls">', '   <div class="audio-controls-content">', '      <div class="audio-controls-btn">', '          <i class="ib ib-play-circle-o play-btn"></i>', '          <i class="ib ib-pause-circle pause-btn" style="display: none;"></i>', "      </div>", '      <div class="audio-controls-bar">', '          <div class="current-point"></div>', '          <div class="current-bar"></div>', "      </div>", '      <div class="audio-controls-time">00:00</div>', "   </div>", "</div>"].join("");
      return $($.parseHTML(t))
    },
    f = function (t, e) {
      e.on("click", ".play-btn", a(t[0])).on("click", ".pause-btn", r(t[0])), t.on("timeupdate", d(e)).on("play", c(e)).on("pause", u(e)).on("ended", l(e))
    },
    p = function (t) {
      var e = h();
      f(t, e), t.after(e)
    },
    m = function (t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      $(t).each(function (t, n) {
        p($(n), e)
      })
    };
  e.default = m
}, function (t, e, n) {
  "use strict";

  function i(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var o = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      return function (e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e
      }
    }(),
    a = n(1),
    r = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    s = function (t, e) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      return "<" + t + " " + Object.keys(n).map(function (t) {
        return t + '="' + n[t] + '"'
      }).join(" ") + ">\n        " + e + "\n    </" + t + ">"
    },
    c = function (t) {
      for (var e = [], n = t.min; n <= t.max; n += 1) e.push(s(t.node, t.item(n)));
      return e.join("")
    },
    u = function (t, e) {
      for (var n = [], i = new Date(t); i <= e;) {
        var o = (0, a.formatDate)(i, "YYYY-MM-D").split("-");
        n.push({
          year: o[0],
          month: o[1],
          day: o[2]
        }), i.setDate(i.getDate() + 1)
      }
      return n
    },
    l = function (t) {
      var e = new Date(t.replace(".", "-")),
        n = e.getDay();
      e.setDate(e.getDate() - n);
      var i = new Date(e);
      return i.setDate(e.getDate() + 41), u(e, i)
    },
    d = function () {
      function t(e) {
        var n = this;
        i(this, t), this.options = (0, a.merge)(e, {
          $el: $("#calendar"),
          activeDate: new Date,
          min: new Date,
          max: new Date,
          dates: {
            primary: [],
            secondary: []
          },
          onClickDate: function () {}
        }), Object.keys(this.options).forEach(function (t) {
          n[t] = n.options[t]
        }), this.handleClickDate = this.handleClickDate.bind(this), this.tableHead = this.tableHead.bind(this), this.tableRow = this.tableRow.bind(this), this.tableBody = this.tableBody.bind(this), this.table = this.table.bind(this), this.init()
      }
      return o(t, [{
        key: "init",
        value: function () {
          this.$el.addClass("bay-calendar"), this.activeDate = (0, a.formatDate)(this.activeDate, "YYYY.MM"), this.min = (0, a.formatDate)(this.min, "YYYY.MM"), this.max = (0, a.formatDate)(this.max, "YYYY.MM"), this.dates.primary = this.dates.primary ? this.dates.primary.map(function (t) {
            return (0, a.formatDate)(t, "YYYY-MM-D")
          }) : [], this.dates.secondary = this.dates.secondary ? this.dates.secondary.map(function (t) {
            return (0, a.formatDate)(t, "YYYY-MM-D")
          }) : [], this.render(), this.bindEvents()
        }
      }, {
        key: "render",
        value: function () {
          this.$el.html(""), this.$el.html(this.monthNav() + this.table())
        }
      }, {
        key: "bindEvents",
        value: function () {
          var t = this;
          this.$el.on("click", ".prev-month-btn", function (e) {
            $(e.currentTarget).hasClass("disabled") || t.updateMonth(-1)
          }), this.$el.on("click", ".next-month-btn", function (e) {
            $(e.currentTarget).hasClass("disabled") || t.updateMonth(1)
          }), this.$el.on("click", ".date-btn", this.handleClickDate)
        }
      }, {
        key: "updateMonth",
        value: function (t) {
          this.activeDate = new Date(this.activeDate.replace(".", "-")), this.activeDate.setMonth(this.activeDate.getMonth() + t), this.activeDate = (0, a.formatDate)(this.activeDate, "YYYY.MM"), this.render()
        }
      }, {
        key: "handleClickDate",
        value: function (t) {
          var e = $(t.currentTarget),
            n = e.data("date");
          this.onClickDate(n)
        }
      }, {
        key: "monthNav",
        value: function () {
          if (this.activeDate < this.min || this.activeDate > this.max) throw Error("请检查一下参数，activeDate 不在范围内");
          return s("div", s("i", "", {
            class: "\n                    ib ib-chevron-left prev-month-btn\n                    " + (this.activeDate === this.min ? "disabled" : "") + "\n                "
          }) + s("span", this.activeDate) + s("i", "", {
            class: "\n                    ib ib-chevron-right next-month-btn\n                    " + (this.activeDate === this.max ? "disabled" : "") + "\n                "
          }), {
            class: "header-nav"
          })
        }
      }, {
        key: "tableHead",
        value: function () {
          return s("thead", s("tr", c({
            node: "th",
            min: 0,
            max: 6,
            item: function (t) {
              return r[t]
            }
          })))
        }
      }, {
        key: "tableRow",
        value: function (t) {
          var e = this,
            n = l(this.activeDate),
            i = this.activeDate.split(".")[1];
          return c({
            node: "td",
            min: 0,
            max: 6,
            item: function (o) {
              var a = 7 * t + o,
                r = n[a],
                c = r.year + "-" + r.month + "-" + r.day;
              return s("div", r.day, {
                class: "\n                            " + (i !== r.month ? "disabled" : "") + "\n                            " + (e.dates.primary.indexOf(c) !== -1 ? "primary" : "") + "\n                            " + (e.dates.secondary.indexOf(c) !== -1 ? "secondary" : "") + "\n                            date-btn\n                        ",
                "data-date": c
              })
            }
          })
        }
      }, {
        key: "tableBody",
        value: function () {
          return s("tbody", c({
            node: "tr",
            min: 0,
            max: 5,
            item: this.tableRow
          }))
        }
      }, {
        key: "table",
        value: function () {
          return s("table", this.tableHead() + this.tableBody())
        }
      }]), t
    }(),
    h = function (t) {
      return new d(t)
    };
  e.default = h
}, function (t, e) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var n = function (t, e) {
      for (var n = /\s(\S+)$/, i = new RegExp("[\\u4E00-\\u9FFF]+"), o = t.html(); t.height() > e;) {
        var a = n.exec(o),
          r = 2;
        if (a) {
          var s = i.test(a[0]);
          s || (r = a[0].length)
        }
        o = t.html().slice(0, -r) + "&hellip;", t.html(o)
      }
      return t.html()
    },
    i = function () {
      var t = $("[bay-length-limited]");
      t.each(function () {
        var t = $(this),
          e = t.html(),
          i = t.attr("max-line"),
          o = $('<div class="wrapper bay-collapse"><p>' + e + "</p></div>"),
          a = o.find("p"),
          r = $('<a class="toggle-fold-btn">展开</a>'),
          s = !0;
        if ($(this).html(o), i) {
          var c = a.css("lineHeight"),
            u = parseInt(c, 10) * i;
          if (!(a.height() <= u)) {
            o.append(r);
            var l = n(a, u),
              d = function () {
                r.on("click", function () {
                  s = !s, s ? (a.html(l), r.html("展开")) : (a.html(e), r.html("收起"))
                })
              };
            d()
          }
        }
      })
    };
  e.default = i
}, function (t, e, n) {
  "use strict";

  function i(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var o = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      return function (e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e
      }
    }(),
    a = n(1),
    r = function () {
      function t(e) {
        i(this, t), this.options = e, this.render = this.render.bind(this), this.toggleLike = this.toggleLike.bind(this), this.toggleDislike = this.toggleDislike.bind(this), this.showOperations = this.showOperations.bind(this), this.hideOperations = this.hideOperations.bind(this), this.toReportPage = this.toReportPage.bind(this), this.render(), this.bindEvents()
      }
      return o(t, [{
        key: "bindEvents",
        value: function () {
          this.options.isInteractiveDisabled || (this.$toggleLikeBtn = this.$comment.find(".toggle-like-btn"), this.$toggleDislikeBtn = this.$comment.find(".toggle-dislike-btn"), this.$operationList = this.$comment.find(".operation-list .list"), this.$toggleLikeBtn.on("touchstart", this.toggleLike), this.$toggleDislikeBtn.on("touchstart", this.toggleDislike), this.$comment.on("touchstart", ".show-operations-btn", this.showOperations), this.$comment.on("touchstart", ".report-btn", this.toReportPage), $("body").on("touchstart", this.hideOperations))
        }
      }, {
        key: "toReportPage",
        value: function (t) {
          var e = $(t.currentTarget);
          return window.location.href = e.attr("href"), !1
        }
      }, {
        key: "showOperations",
        value: function () {
          return this.options.$el.find(".operation-list .list").hide(), this.$operationList.css({
            display: "block"
          }), !1
        }
      }, {
        key: "hideOperations",
        value: function () {
          this.$operationList.hide()
        }
      }, {
        key: "updateLikeStatus",
        value: function (t) {
          var e = this,
            n = this.options,
            i = n.comment,
            o = n.buildLikeApiData;
          (0, a.ajax)((0, a.merge)(o({
            vote: t,
            commentId: i.id
          }), {
            type: "PUT",
            data: {
              vote: t
            },
            success: function () {
              e.changeLikeStatus(t)
            }
          }))
        }
      }, {
        key: "changeLikeStatus",
        value: function (t) {
          var e = this.$comment.find(".vote-num"),
            n = this.$toggleLikeBtn.hasClass("active"),
            i = +e.html() || 0;
          "up" === t && (this.$toggleLikeBtn.addClass("active"), this.$toggleDislikeBtn.removeClass("disable"), this.$toggleDislikeBtn.html("不喜欢"), status !== t && e.html(i + 1)), "down" === t && (this.$toggleLikeBtn.removeClass("active"), this.$toggleDislikeBtn.addClass("disable"), this.$toggleDislikeBtn.html("已不喜欢"), n && e.html(i - 1 || "")), "delete" === t && (this.$toggleLikeBtn.removeClass("active"), this.$toggleDislikeBtn.removeClass("disable"), this.$toggleDislikeBtn.html("不喜欢"), n && e.html(i - 1 || ""))
        }
      }, {
        key: "toggleLike",
        value: function (t) {
          var e = $(t.currentTarget),
            n = e.hasClass("active"),
            i = n ? "delete" : "up";
          this.updateLikeStatus(i)
        }
      }, {
        key: "toggleDislike",
        value: function (t) {
          var e = $(t.currentTarget),
            n = e.hasClass("disable"),
            i = n ? "delete" : "down";
          return this.updateLikeStatus(i), !1
        }
      }, {
        key: "render",
        value: function () {
          var t = this.options,
            e = t.$el,
            n = t.comment,
            i = t.currentUser,
            o = t.isInteractiveDisabled,
            r = t.hasLikeBtn,
            s = t.hasDislikeBtn,
            c = t.hasNestReplyBtn,
            u = t.hasReportBtn,
            l = n,
            d = l.user || {};
          this.$comment = $('\n            <div class="comment">\n                <div class="info">\n                    <div class="user-partial">\n                        <img class="avatar" src=' + d.avatar + " />\n                        <div>\n                            <p>" + d.nickname + '</p>\n                            <p class="date">' + (0, a.formatDate)(l.created_at) + '</p>\n                        </div>\n                    </div>\n                    <div class="operation-partial">\n                        ' + (i.user_id_str !== d.id || o ? "" : '<i\n                                class="ib ib-pencil operation-item show-input-btn"\n                                data-comment=\'' + JSON.stringify(l) + "'\n                            />") + "\n                        " + (r ? '<div class="toggle-like-btn operation-item ' + (l.is_voted_up ? "active" : "") + '">\n                                <i class="ib ib-thumbs-up-o" />\n                                <span class="vote-num">' + (l.vote_score || "") + "</span>\n                            </div> " : "") + "\n                        " + ((s || c || u) && !o ? '<div class="operation-list">\n                                <div class="dots show-operations-btn">…</div>\n                                <div class="list">\n                                    ' + (s ? '<span class="toggle-dislike-btn ' + (l.is_voted_down ? "disable" : "") + '">\n                                            ' + (l.is_voted_down ? "已不喜欢" : "不喜欢") + "\n                                        </span> " : "") + "\n                                    " + (c ? '<span\n                                            class="show-input-btn"\n                                            data-to-user-id=' + d.id + "\n                                        >回复</span>" : "") + "\n                                    " + (u ? '<a\n                                            class="report-btn"\n                                            href="/web/report?report_url=' + encodeURIComponent(l.report_url) + "&next=" + encodeURIComponent(window.location.href) + '"\n                                        > 举报 </a>' : "") + "\n                                </div>\n                            </div>" : "") + '\n                    </div>\n                </div>\n                <div class="content">' + l.content + "</div>\n            </div>\n        "), e.append(this.$comment)
        }
      }]), t
    }(),
    s = function (t) {
      return new r(t)
    };
  e.default = s
}, function (t, e, n) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }

  function o(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var a = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      return function (e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e
      }
    }(),
    r = n(1),
    s = n(8),
    c = i(s),
    u = function () {
      function t(e) {
        o(this, t), this.options = (0, r.merge)(e, {
          $el: $(".comments"),
          apiUrl: "",
          ipp: 10,
          pageNum: 0,
          total: 0,
          threshold: 10,
          currentUser: {},
          isInteractiveDisabled: !1,
          hasLikeBtn: !1,
          hasDislikeBtn: !1,
          hasReportBtn: !0,
          hasNestReplyBtn: !1,
          parseData: function (t) {
            return {
              items: t.objects,
              total: t.total
            }
          },
          parseItemData: function (t) {
            return t
          },
          buildCommentApiData: function (t) {
            return {
              data: t
            }
          },
          buildLikeApiData: function (t) {
            return {
              data: t
            }
          }
        }), this.render = this.render.bind(this), this.renderComment = this.renderComment.bind(this), this.renderEmptyBlock = this.renderEmptyBlock.bind(this), this.showCommentInputBox = this.showCommentInputBox.bind(this), this.hideCommentInputBox = this.hideCommentInputBox.bind(this), this.updateCommentBtnStatus = this.updateCommentBtnStatus.bind(this), this.submit = this.submit.bind(this), this.render(), this.bindEvents()
      }
      return a(t, [{
        key: "bindEvents",
        value: function () {
          var t = this.options.$el;
          t.on("touchstart", ".show-input-btn", this.showCommentInputBox), t.on("touchstart", ".submit-btn", this.submit), t.on("input", ".comment-input", this.updateCommentBtnStatus), t.on("touchstart", ".comment-bar", function (t) {
            return t.stopPropagation()
          }), $("body").on("touchstart", this.hideCommentInputBox)
        }
      }, {
        key: "updateCommentBtnStatus",
        value: function (t) {
          var e = $(t.currentTarget).val(),
            n = this.options.$el.find(".submit-btn");
          e ? n.addClass("active") : n.removeClass("active")
        }
      }, {
        key: "submit",
        value: function (t) {
          var e = this.options,
            n = e.$el,
            i = e.buildCommentApiData,
            o = e.apiUrl,
            a = n.find(".comment-input").val(),
            s = $(t.currentTarget);
          if (s.hasClass("active")) return this.editingComment.id ? void(0, r.ajax)((0, r.merge)(i({
            commentId: this.editingComment.id,
            content: a
          }), {
            type: "PUT",
            success: this.render
          })) : this.toUserId ? void(0, r.ajax)((0, r.merge)(i({
            to_user_id: this.toUserId,
            content: a
          }), {
            url: o,
            type: "POST",
            success: this.render
          })) : void(0, r.ajax)((0, r.merge)(i({
            content: a
          }), {
            url: o,
            type: "POST",
            success: this.render
          }))
        }
      }, {
        key: "showCommentInputBox",
        value: function (t) {
          if (this.editingComment = {}, t) {
            var e = $(t.currentTarget),
              n = e.data("comment");
            this.editingComment = n || {}, this.toUserId = e.data("to-user-id")
          }
          return this.$commentInputBox.show(), this.$commentInputBox.find("input").val(this.editingComment.content || "").focus(), !1
        }
      }, {
        key: "hideCommentInputBox",
        value: function () {
          this.isCreating || (this.$commentInputBox.hide(), this.$commentInputBox.find("input").trigger("blur"))
        }
      }, {
        key: "renderComment",
        value: function (t) {
          (0, c.default)((0, r.merge)({
            comment: this.options.parseItemData(t)
          }, this.options))
        }
      }, {
        key: "renderEmptyBlock",
        value: function () {
          var t = this.options.$el,
            e = '\n            <div class="empty-block">\n                <img src="https://static.baydn.com/baydn/public/images/object-sofa.png" />\n                <p>快来抢沙发吧～</p>\n            </div>\n        ';
          t.append(e)
        }
      }, {
        key: "renderCommentInputBox",
        value: function () {
          var t = $('<div class="add-comment-bar-box"></div>');
          this.$commentInputBox = $('<div class="comment-bar bottom-bar">\n                <input class="comment-input" type= "text" placeholder= "添加评论..." />\n                <i class="ib ib-send submit-btn clickable" />\n            </div>'), this.options.$el.append(t), t.append(this.$commentInputBox), this.$commentInputBox.hide()
        }
      }, {
        key: "render",
        value: function () {
          var t = this,
            e = this.options,
            n = e.$el,
            i = e.currentUser,
            o = e.parseData,
            a = e.parseItemData;
          n.addClass("bay-comments"), n.html(""), this.isCreating = !1, new bayComponents.PullToLoadList({
            ipp: this.options.ipp,
            pageNum: this.options.pageNum,
            total: this.options.total,
            apiUrl: this.options.apiUrl,
            threshold: this.options.threshold,
            renderItem: this.renderComment,
            parseData: this.options.parseData,
            onLoadedFirstPage: function (e) {
              var n = o(e),
                r = {
                  user: {}
                };
              n.items[0] && (r = a(n.items[0])), $(".comments-num").html(n.total), 0 !== n.total && r.user.id === i.user_id_str || t.options.isInteractiveDisabled || (t.isCreating = !0, t.showCommentInputBox()), 0 === n.total && t.renderEmptyBlock()
            }
          }), this.renderCommentInputBox()
        }
      }]), t
    }(),
    l = function (t) {
      return new u(t)
    };
  e.default = l
}, function (t, e) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var n = $(window),
    i = n.height(),
    o = 0,
    a = 600,
    r = 1,
    s = function (t, e, n, s) {
      var c = void 0,
        u = !1,
        l = !1,
        d = (new Date).getTime(),
        h = (new Date).getTime(),
        f = e.length,
        p = function (e) {
          var o = parseInt(t.css("transform").split(",")[5], 10),
            a = e < 0 ? o + i : o - i,
            c = f * i;
          Math.abs(a) < c - i ? n.show() : n.hide(), t.css("transform", "translate3d(0, " + a + "px, 0)"), document.body.scrollTop = 0, s(r)
        },
        m = function () {
          r += 1, p(1)
        },
        v = function () {
          r -= 1, p(-1)
        };
      $("body").on("touchmove", function (t) {
        t.preventDefault()
      }), e.on("touchstart", function (t) {
        c = t.originalEvent.touches[0].clientY
      }), e.on("touchmove", function (t) {
        var e = $(t.currentTarget),
          n = t.originalEvent.touches[0].clientY;
        u = e.scrollTop() === o, l = e.scrollTop() + e.outerHeight() + 1 >= e[0].scrollHeight, n >= c ? (l = !1, u && t.preventDefault()) : (u = !1, l && t.preventDefault()), t.stopPropagation()
      }), e.on("touchend", function (t) {
        var e = $(t.currentTarget),
          n = t.originalEvent.changedTouches[0].clientY,
          i = (new Date).getTime(),
          o = i - d;
        o < a || (n > c && u && e.index() > 0 ? (d = i, u = !1, v()) : n < c && l && e.index() + 1 < f && (d = i, l = !1, m()))
      }), n.on("click", function () {
        var t = (new Date).getTime(),
          e = t - h;
        h = t, e < a || m()
      })
    },
    c = function (t) {
      var e = t.$container,
        n = t.$nextBtn,
        i = t.onChangePage,
        o = void 0 === i ? function () {} : i,
        a = e.children();
      e.addClass("flipper-pages"), a.addClass("flipper-page"), n.addClass("flipper-next-btn"), $("html").css("height", "100%"), $("body").css("height", "100%"), s(e, a, n, o)
    };
  e.default = c
}, function (t, e) {
  "use strict";

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var i = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      return function (e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e
      }
    }(),
    o = function () {
      function t(e) {
        return n(this, t), this.$el = null, this.config = $.extend({}, t.defaultOptions, e), this.value = this.config.defaultValue, this.$el || this.render(), this.$textarea = this.$el.find("textarea"), this.$options = this.$el.find(".option-check"), this.bindEvents(), this
      }
      return i(t, [{
        key: "bindEvents",
        value: function () {
          var t = this;
          this.$el.on("click", "[data-action=send]", function (e) {
            e.stopPropagation(), t.submitHandler()
          }).on("change", "textarea", function (e) {
            e.stopPropagation(), $.proxy(t.config.change, t, e.currentTarget.value)
          }).on("click", "[data-action=close]", function (e) {
            e.stopPropagation(), t.closeHandler()
          })
        }
      }, {
        key: "show",
        value: function () {
          this.$el.animate({
            bottom: 0
          }, 300, "linear")
        }
      }, {
        key: "close",
        value: function () {
          var t = this;
          this.$el.animate({
            bottom: "-100%"
          }, 300, "linear", function () {
            t.destory()
          })
        }
      }, {
        key: "destory",
        value: function () {
          this.$el.remove()
        }
      }, {
        key: "closeHandler",
        value: function () {
          var t = this.config.onClose,
            e = this.getValue(),
            n = e.txt,
            i = e.checkedVals,
            o = $.proxy(t, this)(n, {
              checkedVals: i
            });
          o && this.close()
        }
      }, {
        key: "getValue",
        value: function () {
          var t = this.$textarea.val(),
            e = [];
          return this.$options.filter(":checked").each(function (t, n) {
            return e.push(n.value)
          }), {
            txt: t,
            checkedVals: e
          }
        }
      }, {
        key: "submitHandler",
        value: function () {
          var t = this.config.onSubmit,
            e = this.getValue(),
            n = e.txt,
            i = e.checkedVals;
          $.proxy(t, this)(n, {
            checkedVals: i
          })
        }
      }, {
        key: "render",
        value: function () {
          var t = this.config,
            e = '\n            <div class="bay-render-editor">\n                <header>\n                    <a class="close-btn" data-action="close">\n                        <i class="ib ib-times"></i>\n                    </a>\n                    <a class="send-btn" data-action="send">发送</a>\n                </header>\n                <textarea placeholder="' + t.placeholder + '">' + this.value + '</textarea>\n                <div class="select-options">\n                    ' + t.checkboxData.items.map(function (t) {
              return '<div class="option">\n                                <label><input class="option-check" type="checkbox" ' + (t.checked ? "checked" : "") + ' value="' + t.value + '"/>' + t.title + "</label>\n                            </div>"
            }).join("") + "\n                </div>\n            </div>";
          $(e).appendTo("body"), this.$el = $(".bay-render-editor")
        }
      }]), t
    }();
  o.defaultOptions = {
    defaultValue: "",
    placeholder: "写点什么....",
    onClose: function () {
      return !0
    },
    onSubmit: $.noop,
    onChange: $.noop,
    checkboxData: {
      items: []
    },
    submitText: "发送"
  };
  var a = void 0,
    r = function (t) {
      return a && a.destory(), a = new o(t), a.show(), a
    };
  e.default = r
}, function (t, e, n) {
  "use strict";

  function i(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var o = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      return function (e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e
      }
    }(),
    a = n(1),
    r = function () {
      function t(e) {
        i(this, t), this.options = (0, a.merge)(e, {
          $el: $(".tabs"),
          defaultIndex: 0,
          onChangeTab: function () {}
        }), this.render = this.render.bind(this), this.bindEvents = this.bindEvents.bind(this), this.changeTab = this.changeTab.bind(this), this.showTab = this.showTab.bind(this), this.render(), this.bindEvents()
      }
      return o(t, [{
        key: "bindEvents",
        value: function () {
          var t = this.options.$el,
            e = t.find(".tab-title");
          e.on("touchstart", this.changeTab)
        }
      }, {
        key: "changeTab",
        value: function (t) {
          var e = this.options.$el,
            n = $(t.currentTarget),
            i = e.find(".tab-title").index(n);
          this.showTab(i)
        }
      }, {
        key: "showTab",
        value: function (t) {
          var e = this.options,
            n = e.$el,
            i = e.onChangeTab;
          n.find(".tab-panel").hide(), n.find(".tab-title").removeClass("active"), n.find(".tab-title:nth-child(" + (t + 1) + ")").addClass("active"), n.find(".tab-panel:nth-child(" + (t + 1) + ")").show(), i(t)
        }
      }, {
        key: "render",
        value: function () {
          this.options.$el.addClass("bay-tabs"), this.showTab(this.options.defaultIndex)
        }
      }]), t
    }(),
    s = function (t) {
      return new r(t)
    };
  e.default = s
}, function (t, e) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var n = function (t) {
      var e = Math.floor(t);
      return e < 10 ? "0" + e : e
    },
    i = function (t) {
      var e = n(t / 60),
        i = n(t % 60);
      return e + ":" + i
    },
    o = e.isFullScreen = function () {
      return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.fullscreenElement)
    },
    a = e.toggleFullscreen = function (t) {
      return function () {
        return o() ? void(document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen()) : void(t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullScreen ? t.webkitRequestFullScreen() : t.webkitEnterFullscreen && t.webkitEnterFullscreen())
      }
    },
    r = function (t) {
      t.find(".current-point").css("left", "0%"), t.find(".current-bar").css("width", "0%"), t.find(".video-controls-remaintime").html("00:00")
    },
    s = function (t, e, n) {
      return function () {
        e.hide(), t.show(), n.play()
      }
    },
    c = function (t) {
      return function () {
        t.play()
      }
    },
    u = function (t) {
      return function () {
        t.pause()
      }
    },
    l = function (t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "play";
      "play" === e ? (t.find(".play-btn").hide(), t.find(".pause-btn").show()) : (t.find(".pause-btn").hide(), t.find(".play-btn").show())
    },
    d = function (t) {
      return function () {
        l(t, "play")
      }
    },
    h = function (t) {
      return function () {
        l(t, "pause")
      }
    },
    f = function (t) {
      return function () {
        r(t)
      }
    },
    p = function (t) {
      return function (e) {
        var n = e.target,
          o = n.currentTime,
          a = n.duration,
          r = n.currentTime / a * 100;
        t.find(".current-point").css("left", r + "%"), t.find(".current-bar").css("width", r + "%"), t.find(".video-controls-remaintime").html(i(o)), t.find(".video-controls-fulltime").html(i(a))
      }
    },
    m = function () {
      var t = ['<div class="video-controls" style="display: none;">', '   <div class="video-controls-btn">', '       <i class="ib ib-play play-btn"></i>', '       <i class="ib ib-pause pause-btn" style="display: none;"></i>', "   </div>", '   <div class="video-controls-remaintime">00:00</div>', '   <div class="video-controls-bar">', '       <div class="current-point"></div>', '       <div class="current-bar"></div>', "   </div>", '   <div class="video-controls-fulltime">00:00</div>', '   <div class="fullscreen"><i class="ib ib-expand"/></div>', "</div>"].join("");
      return $($.parseHTML(t))
    },
    v = function () {
      var t = ['<div class="video-cover">', '   <div class="start-btn"><i class="ib ib-play-circle-o"></i></div>', "</div>"].join("");
      return $($.parseHTML(t))
    },
    b = function (t, e, n) {
      n && n.on("click", s(e, n, t[0])), e.on("click", ".play-btn", c(t[0])).on("click", ".pause-btn", u(t[0])).on("click", ".fullscreen", a(t[0])), t.on("timeupdate", p(e)).on("play", d(e)).on("pause", h(e)).on("ended", f(e))
    },
    g = function (t) {
      t.wrap("<div class='video-box'></div>");
      var e = t.parent(),
        n = m();
      e.append(n);
      var i = /iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      if (i) b(t, n), t.on("play", function () {
        return n.show()
      });
      else {
        var o = v();
        e.append(o), b(t, n, o)
      }
    },
    y = function (t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      $(t).each(function (t, n) {
        g($(n), e)
      })
    };
  e.default = y
}, function (t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.countDownBtn = e.lazyloadImage = e.copyToClipboard = e.selectElement = e.clearFormData = e.getFormData = e.removeClass = e.addClass = e.hasClass = void 0;
  var i = n(2),
    o = e.hasClass = function (t, e) {
      return t.classList ? t.classList.contains(e) : !!t.className.match(new RegExp("(\\s|^)" + e + "(\\s|$)"))
    },
    a = e.addClass = function (t, e) {
      t.classList ? t.classList.add(e) : o(t, e) || (t.className += " " + e)
    },
    r = e.removeClass = function (t, e) {
      if (t.classList) t.classList.remove(e);
      else if (o(t, e)) {
        var n = new RegExp("(\\s|^)" + e + "(\\s|$)");
        t.className = t.className.replace(n, " ")
      }
    },
    s = (e.getFormData = function (t) {
      var e = {},
        n = t.querySelectorAll("input, textarea"),
        i = Array.prototype.slice.call(n);
      return i.forEach(function (t) {
        var n = t.getAttribute("name"),
          i = t.getAttribute("type"),
          o = t.value;
        return !n || "radio" === i && !t.checked ? null : ("radio" === i && (o = "true" === o || o, o = "false" !== o && o), "checkbox" === i && (o = t.checked), "number" === i && (o = ~~o), e[n] = o, null)
      }), e
    }, e.clearFormData = function (t) {
      var e = t.querySelectorAll("input, textarea"),
        n = Array.prototype.slice.call(e);
      n.forEach(function (t) {
        t.value = null
      })
    }, e.selectElement = function (t) {
      if (document.selection) {
        var e = document.body.createTextRange();
        e.moveToElementText(t), e.select()
      } else if (window.getSelection) {
        var n = document.createRange();
        n.selectNode(t), window.getSelection().removeAllRanges(), window.getSelection().addRange(n)
      }
    }),
    c = (e.copyToClipboard = function (t) {
      var e = document.createElement("div");
      e.textContent = t, document.body.appendChild(e), s(e), document.execCommand("copy"), e.remove()
    }, e.lazyloadImage = function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
        e = window.requestAnimationFrame || window.webkitRequestAnimationFrame,
        n = document.querySelectorAll("img[data-src]"),
        i = function (t) {
          if (!t.getAttribute("loaded")) {
            var e = t.getAttribute("data-src");
            t.setAttribute("src", e), t.setAttribute("loaded", !0)
          }
        },
        o = function () {
          var o = Array.prototype.slice.call(n);
          o.forEach(function (n) {
            e(function () {
              var e = n.getBoundingClientRect().top,
                o = window.innerHeight;
              e - t < o && i(n)
            })
          })
        };
      window.addEventListener("scroll", o, !1), window.addEventListener("load", o, !1)
    }, function (t, e) {
      e ? (r(t, "disable"), t.setAttribute("disabled", !1)) : (a(t, "disable"), t.setAttribute("disabled", !0))
    });
  e.countDownBtn = function (t, e) {
    var n = {
      time: 60,
      getProcessText: function (t) {
        return t + "s后重发"
      },
      endText: "重新获取验证码"
    };
    e = (0, i.merge)(e, n), t.innerText = e.getProcessText(e.time), c(t, !1);
    var o = e.time,
      a = window.setInterval(function () {
        o > 0 ? (o -= 1, t.innerText = e.getProcessText(o)) : (window.clearInterval(a), t.innerText = e.endText, c(t, !0))
      }, 1e3);
    return a
  }
}, function (t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.transformUrlToAnchor = e.uniqArr = e.getUrlsFromStr = e.getFrontendVersion = e.getDayDiff = e.ajax = e.getCookie = e.getSearchValue = void 0;
  var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    },
    o = n(3),
    a = n(2),
    r = (e.getSearchValue = function (t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.href,
        n = t.replace(/[[\]]/g, "\\$&"),
        i = new RegExp("[?&]" + n + "(=([^&#]*)|&|#|$)"),
        o = i.exec(e);
      return o ? o[2] ? decodeURIComponent(o[2].replace(/\+/g, "")) : "" : null
    }, e.getCookie = function (t, e) {
      var n = "; " + e + "=(\\w+)",
        i = new RegExp(n, "g"),
        o = i.exec("; " + t);
      return o && o[1]
    }),
    s = (e.ajax = function (t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments[2];
      $.support.cors = !0;
      var o = $.extend({}, {
          LOGIN_URL: "/web/account/login"
        }, n),
        a = {
          contentType: "application/json",
          crossDomain: !0,
          xhrFields: {
            withCredentials: !0
          },
          headers: {
            "X-CSRFToken": r(document.cookie, "csrftoken")
          }
        },
        s = {
          success: function (e) {
            401 === e.status_code || 403 === e.status_code ? window.location.href = o.LOGIN_URL + "/?next=" + location.pathname + location.search : 0 === e.status_code ? t.success && t.success(e.data) : t.error && t.error(e.status_code, e.msg || "请求失败，请稍后重试")
          },
          error: function (e, n) {
            t.error && t.error(e.status, n + "(" + e.status + ")")
          }
        };
      t.type = t.type || "GET", t.data && "object" === i(t.data) && "GET" !== t.type && (t.data = JSON.stringify(t.data)), e ? $.ajax($.extend({}, a, t)) : $.ajax($.extend({}, a, t, s))
    }, e.getDayDiff = function (t, e) {
      var n = new Date((0, o.formatDate)(t)),
        i = new Date((0, o.formatDate)(e));
      return Math.floor((new Date(i) - new Date(n)) / 864e5)
    }, e.getFrontendVersion = function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent,
        e = t.match(/Frontend\/(\d+).(\d+)/gi);
      return e && e.length ? parseFloat(e[0].replace(/Frontend\//gi, "")) : null
    }, e.getUrlsFromStr = function (t) {
      var e = new RegExp("https?:\\/\\/[-A-Za-z0-9+&@#\\/%?=~_|!:,.;]+[-A-Za-z0-9+&@#\\/%=~_|]", "ig");
      return t.match(e)
    }),
    c = e.uniqArr = function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        e = [];
      return (0, a.isArray)(t) ? (t.forEach(function (n, i) {
        var o = t.indexOf(n);
        o === i && t[o] === n && e.push(n)
      }), e) : e
    };
  e.transformUrlToAnchor = function (t) {
    var e = t,
      n = c(s(t));
    return n.forEach(function (t) {
      var n = "<a href='" + t + "' target='_blank'>" + t + "</a>";
      e = e.replace(new RegExp("" + t, "gi"), n)
    }), e
  }
}, function (t, e) {}]);