! function (e) {
  function t(r) {
    if (n[r]) return n[r].exports;
    var o = n[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
  }
  var n = {};
  t.m = e, t.c = n, t.i = function (e) {
    return e
  }, t.d = function (e, n, r) {
    t.o(e, n) || Object.defineProperty(e, n, {
      configurable: !1,
      enumerable: !0,
      get: r
    })
  }, t.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return t.d(n, "a", n), n
  }, t.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, t.p = "/web/public/", t(t.s = 20)
}([function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = arguments,
    o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    a = t.assertString = function (e) {
      if ("string" != typeof e) throw new TypeError("This library (validator.js) validates strings only")
    },
    i = t.toString = function (e) {
      return "object" === (void 0 === e ? "undefined" : o(e)) && null !== e ? e = "function" == typeof e.toString ? e.toString() : "[object Object]" : (null === e || void 0 === e || isNaN(e) && !e.length) && (e = ""), String(e)
    };
  t.merge = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = arguments[1];
    return Object.keys(t).forEach(function (n) {
      void 0 === e[n] && (e[n] = t[n])
    }), e
  }, t.isStandardBrowserEnv = function () {
    return "undefined" != typeof window && "undefined" != typeof document && "function" == typeof document.createElement
  }, t.isFunction = function (e) {
    return "[object Function]" === Object.prototype.toString.call(e)
  }, t.isWechatUA = function (e) {
    return /micromessenger/i.test(e)
  }, t.isMobileUA = function (e) {
    return /Mobile|iP(hone|od|ad)|iOS|Android|BlackBerry/i.test(e)
  }, t.isAndroidUA = function (e) {
    return /(android)/i.test(e)
  }, t.isIOSUA = function (e) {
    return /iPad|iOS|iPhone|iPod/i.test(e)
  }, t.isShanbayAppUA = function (e) {
    return /com\.shanbay|com\.beeblio/.test(e.toLowerCase())
  }, t.isMobilePhone = function (e) {
    var t = i(e),
      n = {
        "zh-CN": /^(\+?0?86\-?)?1[345789]\d{9}$/,
        "zh-TW": /^(\+?886\-?|0)?9\d{8}$/
      };
    return n["zh-CN"].test(t) || n["zh-TW"].test(t)
  }, t.isEmail = function (e) {
    return a(e), /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
  }, t.isUrl = function (e) {
    return a(e), new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i").test(e)
  }, t.escapeStr = function (e) {
    return a(e), e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\//g, "&#x2F;").replace(/\\/g, "&#x5C;").replace(/`/g, "&#96;")
  }, t.unescapeStr = function (e) {
    return a(e), e.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#x2F;/g, "/").replace(/&#96;/g, "`")
  }, t.isStrLength = function (e, t) {
    a(e);
    var n = void 0,
      i = void 0;
    "object" === (void 0 === t ? "undefined" : o(t)) ? (n = t.min || 0, i = t.max) : (n = r[1], i = r[2]);
    var c = e.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [],
      s = e.length - c.length;
    return s >= n && (void 0 === i || s <= i)
  }, t.isJSON = function (e) {
    a(e);
    try {
      var t = JSON.parse(e);
      return !!t && "object" === (void 0 === t ? "undefined" : o(t))
    } catch (e) {}
    return !1
  }, t.isNumeric = function (e) {
    var t = /^[-+]?[0-9]+$/;
    return a(e), t.test(e)
  }, t.isEmptyStr = function (e) {
    return a(e), 0 === e.length
  }, t.isEmptyObj = function (e) {
    return !Object.keys(e).length
  }, t.isArray = function (e) {
    return "[object Array]" === Object.prototype.toString.call(e)
  }
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.getAppNameFromAgent = t.transformUrlToAnchor = t.uniqArr = t.getUrlsFromStr = t.getFrontendVersion = t.getDayDiff = t.ajax = t.getCookie = t.getSearchValue = void 0;
  var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    o = n(3),
    a = n(0),
    i = (t.getSearchValue = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.href,
        n = e.replace(/[[\]]/g, "\\$&"),
        r = new RegExp("[?&]" + n + "(=([^&#]*)|&|#|$)"),
        o = r.exec(t);
      return o ? o[2] ? decodeURIComponent(o[2].replace(/\+/g, "")) : "" : null
    }, t.getCookie = function (e, t) {
      var n = "; " + t + "=(\\w+)",
        r = new RegExp(n, "g"),
        o = r.exec("; " + e);
      return o && o[1]
    }),
    c = (t.ajax = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
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
            "X-CSRFToken": i(document.cookie, "csrftoken")
          }
        },
        c = {
          success: function (t) {
            401 === t.status_code || 403 === t.status_code ? window.location.href = o.LOGIN_URL + "/?next=" + encodeURIComponent(location.href) : 0 === t.status_code ? e.success && e.success(t.data) : (422 === t.status_code && (t.msg = function (e) {
              if (!e) return t.msg;
              var n = [];
              return $.each(e, function (e, t) {
                var r = t.map(function (t) {
                  return "(" + e + "): " + t
                });
                n = n.concat(r)
              }), n.join("\n")
            }(t.errors)), e.error && e.error(t.status_code, t.msg || "请求失败，请稍后重试"))
          },
          error: function (t, n) {
            e.error && e.error(t.status, n + "(" + t.status + ")")
          }
        };
      e.type = e.type || "GET", e.data && "object" === r(e.data) && "GET" !== e.type && (e.data = JSON.stringify(e.data)), t ? $.ajax($.extend({}, a, e)) : $.ajax($.extend({}, a, e, c))
    }, t.getDayDiff = function (e, t) {
      var n = new Date((0, o.formatDate)(e)),
        r = new Date((0, o.formatDate)(t));
      return Math.floor((new Date(r) - new Date(n)) / 864e5)
    }, t.getFrontendVersion = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent,
        t = e.match(/Frontend\/(\d+).(\d+)/gi);
      return t && t.length ? parseFloat(t[0].replace(/Frontend\//gi, "")) : null
    }, t.getUrlsFromStr = function (e) {
      var t = new RegExp("https?:\\/\\/[-A-Za-z0-9+&@#\\/%?=~_|!:,.;]+[-A-Za-z0-9+&@#\\/%=~_|]", "ig");
      return e.match(t)
    }),
    s = t.uniqArr = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t = [];
      return (0, a.isArray)(e) ? (e.forEach(function (n, r) {
        var o = e.indexOf(n);
        o === r && e[o] === n && t.push(n)
      }), t) : t
    };
  t.transformUrlToAnchor = function (e) {
    var t = e;
    return s(c(e)).forEach(function (e) {
      var n = "<a href='" + e + "' target='_blank'>" + e + "</a>";
      t = t.replace(new RegExp("" + e, "gi"), n)
    }), t
  }, t.getAppNameFromAgent = function (e) {
    var t = void 0,
      n = {
        "com.shanbay.words": "bdc",
        "com.shanbay.news": "news",
        "com.shanbay.listen": "listen",
        "com.shanbay.speak": "speak",
        "com.shanbay.reader": "read",
        "com.shanbay.book": "read",
        "com.shanbay.sentence": "sentence",
        "com.beeblio.sentence": "sentence"
      };
    return Object.keys(n).forEach(function (r) {
      -1 !== e.indexOf(r) && (t = n[r])
    }), t
  }
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = n(3);
  Object.keys(r).forEach(function (e) {
    "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
      enumerable: !0,
      get: function () {
        return r[e]
      }
    })
  });
  var o = n(0);
  Object.keys(o).forEach(function (e) {
    "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
      enumerable: !0,
      get: function () {
        return o[e]
      }
    })
  });
  var a = n(6);
  Object.keys(a).forEach(function (e) {
    "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
      enumerable: !0,
      get: function () {
        return a[e]
      }
    })
  });
  var i = n(1);
  Object.keys(i).forEach(function (e) {
    "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
      enumerable: !0,
      get: function () {
        return i[e]
      }
    })
  });
  var c = n(8);
  Object.keys(c).forEach(function (e) {
    "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
      enumerable: !0,
      get: function () {
        return c[e]
      }
    })
  });
  var s = n(7);
  Object.keys(s).forEach(function (e) {
    "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
      enumerable: !0,
      get: function () {
        return s[e]
      }
    })
  })
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = t.parseDate = function (e) {
      var t = /^(\d{4})\-(\d{2})\-(\d{2})T(\d{2}):(\d{2}):(\d{2})(\+|\-)(\d{4})$/,
        n = /^(\d{4})\-(\d{2})\-(\d{2})T(\d{2}):(\d{2}):(\d{2})$/;
      return t.test(e) ? new Date([e.slice(0, 22), ":", e.slice(22)].join("")) : n.test(e) ? new Date(e.replace("T", " ")) : new Date(e)
    },
    o = t.pad = function (e, t, n) {
      return e.length >= t ? e : new Array(t - e.length + 1).join(n) + e
    },
    a = (t.formatDate = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "yyyy-MM-DD",
        n = "日_一_二_三_四_五_六".split("_"),
        a = r(e),
        i = {
          Y: a.getFullYear(),
          y: a.getFullYear(),
          M: a.getMonth() + 1,
          D: a.getDate(),
          d: a.getDay(),
          h: a.getHours(),
          m: a.getMinutes(),
          s: a.getSeconds(),
          S: a.getMilliseconds()
        };
      return t.replace(/([YyMDdhmsS])+/g, function (e, t) {
        var r = i[t],
          a = e.length;
        return void 0 === r ? e : (r = r.toString(), "d" === e ? n[r] : a > r.length ? o(r, a, 0) : "y" === t || "Y" === t ? r.substr(r.length - a) : r)
      })
    }, t.trimString = function (e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "...";
      return e.length <= t ? e : e.slice(0, t) + n
    }, t.formatSafetyStr = function (e, t, n) {
      var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "*";
      e = e.toString();
      var o = e.length - t - n;
      if (o < 0) return e;
      var a = new Array(o + 1).join(r);
      return [e.slice(0, t), a, n <= 0 ? "" : e.slice(-n)].join("")
    });
  t.formatSafetyEmail = function (e, t, n, r) {
    var o = e.toString();
    return t = Number(t) || Math.floor(1 * o.length / 4), n = Number(n) || Math.floor(1 * o.length / 4), a(o, t, n, r)
  }, t.formatSafetyMobilephone = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
      r = arguments[3];
    return a(e, t, n, r)
  }, t.formatNumToCn = function (e) {
    var t = +e,
      n = ["", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
      r = t % 10,
      o = Math.floor(t / 10),
      a = n[r],
      i = 1 === o ? "" : n[o];
    return t >= 100 ? t : t >= 10 ? i + "十" + a : t > 0 ? a : "零"
  }
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = n(5);
  Object.keys(r).forEach(function (e) {
    "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
      enumerable: !0,
      get: function () {
        return r[e]
      }
    })
  });
  var o = (t.HOST_URL = "www.shanbay.com", t.BASE_URL = "https://www.shanbay.com"),
    a = (t.DOMAIN = ".shanbay.com", t.STATIC_URL = "https://static.baydn.com", t.OSS_SECURE = !0, t.MEDIA_CODE = "public_image_upload", t.PUB_IMG_CODE = "storage_media_image", t.PUB_AUD_CODE = "storage_media_audio", t.PUB_VID_CODE = "storage_media_video", t.PUB_ZIP_CODE = "storage_media_zip", t.SHANBAY_PREFIX_V2 = o + "/api/v2"),
    i = t.SHANBAY_PREFIX_V1 = o + "/api/v1";
  t.LOGIN_URL = o + "/web/account/login", t.LOGIN_MOBILE_URL = o + "/web/account/login", t.API_PREFIX_MEDIA = a + "/media", t.API_PREFIX_PAY = a + "/pay", t.API_PREFIX_REFERRAL = a + "/referral", t.API_PREFIX_LIVE = a + "/live", t.API_PREFIX_MALL = a + "/mall", t.API_PREFIX_CHECKIN = i + "/checkin", t.API_PREFIX_CHECKINPLAN = a + "/checkinplan", t.API_PREFIX_DESKMATE = a + "/deskmate", t.API_PREFIX_TRACK = a + "/track", t.API_PREFIX_CAMP = a + "/checkinplan/camp", t.API_PREFIX_ZERO = a + "/zero", t.API_PREFIX_ELEVATOR = a + "/elevator", t.API_PREFIX_QUESTIONNAIRE = a + "/questionnaire", t.businessProducts = {
    "elevator.train": {
      productId: "xzlvz",
      businessCodeId: "zkvse"
    },
    "camp.read": {
      productId: "imdli",
      businessCodeId: "swcvz"
    },
    "camp.speak": null
  }
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  t.APP_NAME = "web", t.IPP = 10, t.MAX_IPP = 1e3, t.PART_SIZE = 1048576, t.CURRENT_YEAR = "2017", t.BAYDN_URL = "https://static.baydn.com/baydn/public", t.SHANBAY_APP_URL = "shanbay.native.app:/", t.PICTURE_TYPE = "png"
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.parsePasteDataToMarkdown = t.countDownBtn = t.lazyloadImage = t.copyToClipboard = t.selectElement = t.clearFormData = t.getFormData = t.removeClass = t.addClass = t.hasClass = void 0;
  var r = n(0),
    o = t.hasClass = function (e, t) {
      return e.classList ? e.classList.contains(t) : !!e.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)"))
    },
    a = t.addClass = function (e, t) {
      e.classList ? e.classList.add(t) : o(e, t) || (e.className += " " + t)
    },
    i = t.removeClass = function (e, t) {
      if (e.classList) e.classList.remove(t);
      else if (o(e, t)) {
        var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
        e.className = e.className.replace(n, " ")
      }
    },
    c = (t.getFormData = function (e) {
      var t = {},
        n = e.querySelectorAll("input, textarea");
      return Array.prototype.slice.call(n).forEach(function (e) {
        var n = e.getAttribute("name"),
          r = e.getAttribute("type"),
          o = e.value;
        return !n || "radio" === r && !e.checked ? null : ("radio" === r && (o = "true" === o || o, o = "false" !== o && o), "checkbox" === r && (o = e.checked), "number" === r && (o = ~~o), t[n] = o, null)
      }), t
    }, t.clearFormData = function (e) {
      var t = e.querySelectorAll("input, textarea");
      Array.prototype.slice.call(t).forEach(function (e) {
        e.value = null
      })
    }, t.selectElement = function (e) {
      if (document.selection) {
        var t = document.body.createTextRange();
        t.moveToElementText(e), t.select()
      } else if (window.getSelection) {
        var n = document.createRange();
        n.selectNode(e), window.getSelection().removeAllRanges(), window.getSelection().addRange(n)
      }
    }),
    s = (t.copyToClipboard = function (e) {
      var t = document.createElement("div");
      t.textContent = e, document.body.appendChild(t), c(t), document.execCommand("copy"), t.remove()
    }, t.lazyloadImage = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
        t = window.requestAnimationFrame || window.webkitRequestAnimationFrame,
        n = document.querySelectorAll("img[data-src]"),
        r = function (e) {
          if (!e.getAttribute("loaded")) {
            var t = e.getAttribute("data-src");
            e.setAttribute("src", t), e.setAttribute("loaded", !0)
          }
        },
        o = function () {
          Array.prototype.slice.call(n).forEach(function (n) {
            t(function () {
              var t = n.getBoundingClientRect().top,
                o = window.innerHeight;
              t - e < o && r(n)
            })
          })
        };
      window.addEventListener("scroll", o, !1), window.addEventListener("load", o, !1)
    }, function (e, t) {
      t ? (i(e, "disable"), e.setAttribute("disabled", !1)) : (a(e, "disable"), e.setAttribute("disabled", !0))
    });
  t.countDownBtn = function (e, t) {
    var n = {
      time: 60,
      getProcessText: function (e) {
        return e + "s后重发"
      },
      endText: "重新获取验证码"
    };
    t = (0, r.merge)(t, n), e.innerText = t.getProcessText(t.time), s(e, !1);
    var o = t.time,
      a = window.setInterval(function () {
        o > 0 ? (o -= 1, e.innerText = t.getProcessText(o)) : (window.clearInterval(a), e.innerText = t.endText, s(e, !0))
      }, 1e3);
    return a
  }, t.parsePasteDataToMarkdown = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
      n = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], e.clipboardData.getData("text/html")),
      r = $(n),
      o = r.filter(function (e, t) {
        return -1 === ["META"].indexOf(t.tagName.toUpperCase())
      }),
      a = function e(t, n) {
        t.children().length ? t.children().each(function (t, r) {
          return e($(r), n)
        }) : n(t)
      },
      i = [];
    return a(o, function (e) {
      var n = e.html(),
        r = e.css("color"),
        o = t.indexOf("bold") > -1,
        a = t.indexOf("italic") > -1,
        c = t.indexOf("color") > -1,
        s = e.css("font-weight") > 400 && !o,
        u = "italic" === e.css("font-style") && !a,
        l = "rgb(0, 0, 0)" !== e.css("color") && !c;
      s && u ? n = "**_" + n + "_**" : s ? n = "**" + n + "**" : u && (n = "*" + n + "*"), l && (n = '<span style="color:' + r + '">' + n + "</span>"), "BR" === e[0].tagName.toUpperCase() ? i.push("\n\r") : i.push(n)
    }), i.join("")
  }
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.studyroomShare = void 0;
  var r = n(1),
    o = n(0);
  t.studyroomShare = function (e) {
    var t = "https://static.baydn.com/baydn/public/images/logo-s.png",
      n = e.data,
      a = e.isDev,
      i = void 0 !== a && a,
      c = e.onSuccess,
      s = e.onError,
      u = {
        title: document.title,
        image_url: t,
        redirect_url: window.location.href
      };
    (0, o.merge)(n.share_content, u), (0, r.ajax)({
      url: (i ? "http://local.daydayup.me/api/v2" : "https://www.shanbay.com/api/v2") + "/studyroom/posts/share/",
      type: "POST",
      data: n,
      success: c,
      error: s
    })
  }
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.wxSdkConfig = void 0;
  var r = n(0),
    o = n(1),
    a = "https://www.shanbay.com/api/v1",
    i = "http://local.daydayup.me:3000/api/v1",
    c = ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareQZone"];
  t.wxSdkConfig = function (e) {
    var t = e.shareData,
      n = e.jsApiList,
      s = void 0 === n ? c : n,
      u = e.onReady,
      l = e.isDev,
      d = void 0 !== l && l,
      f = e.isDebug,
      p = void 0 !== f && f;
    (0, r.isWechatUA)(window.navigator.userAgent) ? (0, o.ajax)({
      url: (d ? i : a) + "/wechat/jsconfig/?url=" + encodeURIComponent(window.location.href),
      success: function (e) {
        var n = s.concat(),
          r = {
            debug: p,
            appId: e.appid,
            timestamp: e.timestamp,
            nonceStr: e.noncestr,
            signature: e.signature,
            jsApiList: n
          };
        wx.config(r), wx.ready(function () {
          ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareQZone"].forEach(function (e) {
            if (t && -1 !== s.indexOf(e)) {
              var n = $.extend({}, t, {
                success: function () {
                  t.success && t.success(e)
                }
              });
              wx[e](n)
            }
          }), u && u({
            appId: e.appid,
            timestamp: e.timestamp,
            nonceStr: e.noncestr,
            signature: e.signature
          })
        })
      }
    }) : u && u()
  }
}, function (e, t, n) {
  "use strict";

  function r(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e)
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t.default = e, t
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.fetchCaptcha = t.registerByEmail = t.fetchTwoStepToken = t.login = t.resetPassword = t.verifyMobile = void 0;
  var o = n(2),
    a = n(4),
    i = r(a);
  t.verifyMobile = function (e, t, n) {
    (0, o.ajax)({
      url: i.SHANBAY_PREFIX_V1 + "/account/mobile_verification/",
      type: "PUT",
      data: $.extend({}, {
        verify_event: "shanbay_verify_reset_password"
      }, e),
      success: t,
      error: n
    })
  }, t.resetPassword = function (e, t, n) {
    (0, o.ajax)({
      url: i.SHANBAY_PREFIX_V1 + "/account/reset_password/",
      type: "PUT",
      data: e,
      success: t,
      error: n
    })
  }, t.login = function (e, t, n) {
    (0, o.ajax)({
      url: i.SHANBAY_PREFIX_V1 + "/account/login/web/",
      type: "PUT",
      data: e,
      success: t,
      error: n
    })
  }, t.fetchTwoStepToken = function (e, t, n) {
    (0, o.ajax)({
      url: i.SHANBAY_PREFIX_V1 + "/g_auth/?username=" + e,
      type: "GET",
      success: t,
      error: n
    })
  }, t.registerByEmail = function (e, t, n) {
    (0, o.ajax)({
      url: i.SHANBAY_PREFIX_V1 + "/account/create/web/",
      type: "POST",
      data: e,
      success: t,
      error: n
    })
  }, t.fetchCaptcha = function (e, t) {
    (0, o.ajax)({
      url: i.SHANBAY_PREFIX_V1 + "/account/captcha/",
      type: "GET",
      success: e,
      error: t
    })
  }
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.checkInput = t.hideError = t.showError = t.setButtonStatus = t.updateSaveBtnStatus = t.checkForm = t.checkValueByName = t.isBtnDisable = t.setVerifyInput = t.changeHeightByDelta = void 0;
  var r = n(2),
    o = (t.changeHeightByDelta = function (e, t) {
      var n = ~~e.height();
      e.css("height", n + t)
    }, t.setVerifyInput = function (e, t) {
      t ? (e.data("not-required", !1), e.parent().removeClass("hide")) : (e.data("not-required", !0), e.parent().addClass("hide"))
    }, t.isBtnDisable = function (e) {
      return e.hasClass("disable") || e.attr("disabled")
    }, t.checkValueByName = function (e, t) {
      return "mobile" === e ? (0, r.isMobilePhone)(t) : "email" === e ? (0, r.isEmail)(t) : !(0, r.isEmptyStr)(t)
    }),
    a = t.checkForm = function (e) {
      var t = e.find("input, textarea"),
        n = Array.prototype.slice.call(t),
        r = !1;
      return n.filter(function (e) {
        return !$(e).data("not-required")
      }).forEach(function (e) {
        var t = $(e).attr("name"),
          n = $(e).val();
        o(t, n) || (r = !0)
      }), !r
    },
    i = t.updateSaveBtnStatus = function (e, t) {
      a(t) ? e.removeClass("disable") : e.addClass("disable")
    },
    c = (t.setButtonStatus = function (e, t) {
      t ? (e.removeClass("disable"), e.attr("disabled", !1)) : (e.addClass("disable"), e.attr("disabled", !0))
    }, t.showError = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "error",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : $(".account-error-hint");
      t.html(e), t.fadeIn(500).delay(2e3).fadeOut(500)
    }, t.hideError = function () {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $(".account-error-hint")).hide()
    });
  t.checkInput = function (e, t) {
    $("input").on("input", function (n) {
      var r = $(n.currentTarget),
        o = t || r.parents("form"),
        a = e || o.find("button");
      o.length && a.length && (i(a, o), c())
    })
  }
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = t.speed || .6,
      r = t.autoPlay || 1e4,
      o = 0,
      a = -1,
      i = 1,
      c = null,
      s = {
        init: function () {
          var e = this;
          c = document.querySelectorAll(".page-number div"), s.bindTouchEvent(), s.setCurrentPage(), t.autoPlayDisable || setInterval(function () {
            return e.gotoPage()
          }, r)
        },
        transform: function (e) {
          this.style.webkitTransform = "translate3d(" + e + "px,0,0)", this.style.msTransform = "translate(" + e + "px,0)", o = e
        },
        gotoPage: function (t) {
          var r = this,
            a = document.querySelector("#viewport"),
            s = document.querySelector(e).offsetWidth,
            u = -s * (c.length - 1),
            l = n + "s ease -webkit-transform",
            d = n + "s ease -ms-transform",
            f = null != t ? -s * t : o - s;
          f < u && (f = 0), a.style.webkitTransition = l, a.style.msTransition = d, this.transform.call(a, f), i = Math.round(Math.abs(f) / s) + 1, setTimeout(function () {
            return r.setCurrentPage()
          }, 100)
        },
        setCurrentPage: function () {
          -1 !== a && (c[a].className = ""), a = i - 1, c[a].className = "current"
        },
        bindTouchEvent: function () {
          var t = this,
            r = document.querySelector("#viewport"),
            a = document.querySelector(e).offsetWidth,
            s = -a * (c.length - 1),
            u = 0,
            l = 0,
            d = 0,
            f = 0,
            p = "left",
            h = !1,
            m = 0;
          Array.prototype.forEach.call(c, function (e, n) {
            e.addEventListener("click", function (e) {
              e.preventDefault(), t.gotoPage(n)
            })
          }), r.addEventListener("touchstart", function (e) {
            e.preventDefault();
            var t = e.touches[0];
            u = t.pageX, l = t.pageY, d = o, r.style.webkitTransition = "", m = (new Date).getTime(), h = !1
          }, !1), r.addEventListener("touchmove", function (e) {
            e.preventDefault();
            var n = e.touches[0],
              o = n.pageX - u,
              a = n.pageY - l;
            if (Math.abs(o) > Math.abs(a)) {
              f = o;
              var i = d + o;
              i <= 0 && i >= s && (t.transform.call(r, i), h = !0), p = o > 0 ? "right" : "left"
            }
          }, !1), r.addEventListener("touchend", function (e) {
            e.preventDefault();
            var c = 0,
              u = (new Date).getTime() - m;
            h && (r.style.webkitTransition = n + "s ease -webkit-transform", u < 300 ? (c = "left" === p ? o - (a + f) : o + a - f, c = c > 0 ? 0 : c, c = c < s ? s : c) : Math.abs(f) / a < .5 ? c = o - f : (c = "left" === p ? o - (a + f) : o + a - f, c = c > 0 ? 0 : c, c = c < s ? s : c), t.transform.call(r, c), i = Math.round(Math.abs(c) / a) + 1, setTimeout(function () {
              t.setCurrentPage()
            }, 100))
          }, !1)
        }
      };
    s.init()
  };
  t.default = r
}, , , , , , , , , function (e, t, n) {
  "use strict";

  function r(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var o = n(2),
    a = n(4),
    i = n(11),
    c = r(i),
    s = n(10),
    u = n(9);
  (0, c.default)("#slides");
  var l = $("input"),
    d = $(".register-form"),
    f = $(".terms-checkbox"),
    p = $(".register-btn"),
    h = $(".captcha > img"),
    m = d.find("[name=username]"),
    g = void 0,
    v = function () {
      f[0].checked ? (0, s.updateSaveBtnStatus)(p, d) : p.addClass("disable")
    };
  f.on("click", v), l.on("input", v);
  var y = function () {
    (0, u.fetchCaptcha)(function (e) {
      h.attr("src", e.image_url.replace("https://www.shanbay.com", a.BASE_URL)), g = e.key
    }, function (e) {
      return (0, s.showError)(e)
    })
  };
  h.on("click", y),
    function () {
      y(), (0, s.checkForm)(d) && p.removeClass("disable")
    }();
  var b = function (e) {
      e.preventDefault();
      var t = $('.register-form [name="email"]').val();
      $(".mail-address-box .address-info").text(t), d.hide().next().show()
    },
    _ = function () {
      d.show().next().hide(), $('[type="password"], [name="code"]').val(""), p.addClass("disable"), y()
    };
  p.on("click", b), m.on("blur", function () {
    var e = m.val();
    (function (e) {
      return /^\d+$/.test(e)
    })(e) && (0, s.showError)("用户名不能全为数字")
  }), $(".step-back").on("click", _), $(".submit-btn").on("click", function (e) {
    e.preventDefault();
    var t = (0, o.getFormData)(d[0]);
    !!f[0].checked && (0, s.checkForm)(d) && (t.agree = 1, t.key = g, (0, u.registerByEmail)(t, function () {
      window.location.href = "/accounts/register/complete/"
    }, function (e, t) {
      _(), (0, s.showError)(t)
    }))
  })
}]);