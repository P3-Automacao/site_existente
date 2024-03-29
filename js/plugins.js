function onYouTubePlayerAPIReady() {
    if (ytp.YTAPIReady) return;
    ytp.YTAPIReady = true;
    jQuery(document).trigger("YTAPIReady")
}
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, t, n, r, i) {
        return jQuery.easing[jQuery.easing.def](e, t, n, r, i)
    },
    easeInQuad: function(e, t, n, r, i) {
        return r * (t /= i) * t + n
    },
    easeOutQuad: function(e, t, n, r, i) {
        return -r * (t /= i) * (t - 2) + n
    },
    easeInOutQuad: function(e, t, n, r, i) {
        if ((t /= i / 2) < 1) {
            return r / 2 * t * t + n
        }
        return -r / 2 * (--t * (t - 2) - 1) + n
    },
    easeInCubic: function(e, t, n, r, i) {
        return r * (t /= i) * t * t + n
    },
    easeOutCubic: function(e, t, n, r, i) {
        return r * ((t = t / i - 1) * t * t + 1) + n
    },
    easeInOutCubic: function(e, t, n, r, i) {
        if ((t /= i / 2) < 1) {
            return r / 2 * t * t * t + n
        }
        return r / 2 * ((t -= 2) * t * t + 2) + n
    },
    easeInQuart: function(e, t, n, r, i) {
        return r * (t /= i) * t * t * t + n
    },
    easeOutQuart: function(e, t, n, r, i) {
        return -r * ((t = t / i - 1) * t * t * t - 1) + n
    },
    easeInOutQuart: function(e, t, n, r, i) {
        if ((t /= i / 2) < 1) {
            return r / 2 * t * t * t * t + n
        }
        return -r / 2 * ((t -= 2) * t * t * t - 2) + n
    },
    easeInQuint: function(e, t, n, r, i) {
        return r * (t /= i) * t * t * t * t + n
    },
    easeOutQuint: function(e, t, n, r, i) {
        return r * ((t = t / i - 1) * t * t * t * t + 1) + n
    },
    easeInOutQuint: function(e, t, n, r, i) {
        if ((t /= i / 2) < 1) {
            return r / 2 * t * t * t * t * t + n
        }
        return r / 2 * ((t -= 2) * t * t * t * t + 2) + n
    },
    easeInSine: function(e, t, n, r, i) {
        return -r * Math.cos(t / i * (Math.PI / 2)) + r + n
    },
    easeOutSine: function(e, t, n, r, i) {
        return r * Math.sin(t / i * (Math.PI / 2)) + n
    },
    easeInOutSine: function(e, t, n, r, i) {
        return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + n
    },
    easeInExpo: function(e, t, n, r, i) {
        return t == 0 ? n : r * Math.pow(2, 10 * (t / i - 1)) + n
    },
    easeOutExpo: function(e, t, n, r, i) {
        return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n
    },
    easeInOutExpo: function(e, t, n, r, i) {
        if (t == 0) {
            return n
        }
        if (t == i) {
            return n + r
        }
        if ((t /= i / 2) < 1) {
            return r / 2 * Math.pow(2, 10 * (t - 1)) + n
        }
        return r / 2 * (-Math.pow(2, -10 * --t) + 2) + n
    },
    easeInCirc: function(e, t, n, r, i) {
        return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + n
    },
    easeOutCirc: function(e, t, n, r, i) {
        return r * Math.sqrt(1 - (t = t / i - 1) * t) + n
    },
    easeInOutCirc: function(e, t, n, r, i) {
        if ((t /= i / 2) < 1) {
            return -r / 2 * (Math.sqrt(1 - t * t) - 1) + n
        }
        return r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
    },
    easeInElastic: function(e, t, n, r, i) {
        var s = 1.70158;
        var o = 0;
        var u = r;
        if (t == 0) {
            return n
        }
        if ((t /= i) == 1) {
            return n + r
        }
        if (!o) {
            o = i * .3
        }
        if (u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else {
            var s = o / (2 * Math.PI) * Math.asin(r / u)
        }
        return -(u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o)) + n
    },
    easeOutElastic: function(e, t, n, r, i) {
        var s = 1.70158;
        var o = 0;
        var u = r;
        if (t == 0) {
            return n
        }
        if ((t /= i) == 1) {
            return n + r
        }

        if (!o) {
            o = i * .3
        }
        if (u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else {
            var s = o / (2 * Math.PI) * Math.asin(r / u)
        }
        return u * Math.pow(2, -10 * t) * Math.sin((t * i - s) * 2 * Math.PI / o) + r + n
    },
    easeInOutElastic: function(e, t, n, r, i) {
        var s = 1.70158;
        var o = 0;
        var u = r;
        if (t == 0) {
            return n
        }
        if ((t /= i / 2) == 2) {
            return n + r
        }
        if (!o) {
            o = i * .3 * 1.5
        }
        if (u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else {
            var s = o / (2 * Math.PI) * Math.asin(r / u)
        }
        if (t < 1) {
            return -.5 * u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) + n
        }
        return u * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) * .5 + r + n
    },
    easeInBack: function(e, t, n, r, i, s) {
        if (s == undefined) {
            s = 1.70158
        }
        return r * (t /= i) * t * ((s + 1) * t - s) + n
    },
    easeOutBack: function(e, t, n, r, i, s) {
        if (s == undefined) {
            s = 1.70158
        }
        return r * ((t = t / i - 1) * t * ((s + 1) * t + s) + 1) + n
    },
    easeInOutBack: function(e, t, n, r, i, s) {
        if (s == undefined) {
            s = 1.70158
        }
        if ((t /= i / 2) < 1) {
            return r / 2 * t * t * (((s *= 1.525) + 1) * t - s) + n
        }
        return r / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + n
    },
    easeInBounce: function(e, t, n, r, i) {
        return r - jQuery.easing.easeOutBounce(e, i - t, 0, r, i) + n
    },
    easeOutBounce: function(e, t, n, r, i) {
        if ((t /= i) < 1 / 2.75) {
            return r * 7.5625 * t * t + n
        } else {
            if (t < 2 / 2.75) {
                return r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n
            } else {
                if (t < 2.5 / 2.75) {
                    return r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n
                } else {
                    return r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
                }
            }
        }
    },
    easeInOutBounce: function(e, t, n, r, i) {
        if (t < i / 2) {
            return jQuery.easing.easeInBounce(e, t * 2, 0, r, i) * .5 + n
        }
        return jQuery.easing.easeOutBounce(e, t * 2 - i, 0, r, i) * .5 + r * .5 + n
    }
});
window.google = window.google || {};
google.maps = google.maps || {};
(function() {
    function e(e) {
        document.write("<" + 'script src="' + e + '"' + ' type="text/javascript"><' + "/script>")
    }
    var t = google.maps.modules = {};
    google.maps.__gjsload__ = function(e, n) {
        t[e] = n
    };
    google.maps.Load = function(e) {
        delete google.maps.Load;
        e([.009999999776482582, [
                [
                    ["http://mt0.googleapis.com/vt?lyrs=m@270000000&src=api&hl=it-IT&", "http://mt1.googleapis.com/vt?lyrs=m@270000000&src=api&hl=it-IT&"], null, null, null, null, "m@270000000", ["https://mts0.google.com/vt?lyrs=m@270000000&src=api&hl=it-IT&", "https://mts1.google.com/vt?lyrs=m@270000000&src=api&hl=it-IT&"]
                ],
                [
                    ["http://khm0.googleapis.com/kh?v=155&hl=it-IT&", "http://khm1.googleapis.com/kh?v=155&hl=it-IT&"], null, null, null, 1, "155", ["https://khms0.google.com/kh?v=155&hl=it-IT&", "https://khms1.google.com/kh?v=155&hl=it-IT&"]
                ],
                [
                    ["http://mt0.googleapis.com/vt?lyrs=h@270000000&src=api&hl=it-IT&", "http://mt1.googleapis.com/vt?lyrs=h@270000000&src=api&hl=it-IT&"], null, null, null, null, "h@270000000", ["https://mts0.google.com/vt?lyrs=h@270000000&src=api&hl=it-IT&", "https://mts1.google.com/vt?lyrs=h@270000000&src=api&hl=it-IT&"]
                ],
                [
                    ["http://mt0.googleapis.com/vt?lyrs=t@132,r@270000000&src=api&hl=it-IT&", "http://mt1.googleapis.com/vt?lyrs=t@132,r@270000000&src=api&hl=it-IT&"], null, null, null, null, "t@132,r@270000000", ["https://mts0.google.com/vt?lyrs=t@132,r@270000000&src=api&hl=it-IT&", "https://mts1.google.com/vt?lyrs=t@132,r@270000000&src=api&hl=it-IT&"]
                ], null, null, [
                    ["http://cbk0.googleapis.com/cbk?", "http://cbk1.googleapis.com/cbk?"]
                ],
                [
                    ["http://khm0.googleapis.com/kh?v=84&hl=it-IT&", "http://khm1.googleapis.com/kh?v=84&hl=it-IT&"], null, null, null, null, "84", ["https://khms0.google.com/kh?v=84&hl=it-IT&", "https://khms1.google.com/kh?v=84&hl=it-IT&"]
                ],
                [
                    ["http://mt0.googleapis.com/mapslt?hl=it-IT&", "http://mt1.googleapis.com/mapslt?hl=it-IT&"]
                ],
                [
                    ["http://mt0.googleapis.com/mapslt/ft?hl=it-IT&", "http://mt1.googleapis.com/mapslt/ft?hl=it-IT&"]
                ],
                [
                    ["http://mt0.googleapis.com/vt?hl=it-IT&", "http://mt1.googleapis.com/vt?hl=it-IT&"]
                ],
                [
                    ["http://mt0.googleapis.com/mapslt/loom?hl=it-IT&", "http://mt1.googleapis.com/mapslt/loom?hl=it-IT&"]
                ],
                [
                    ["https://mts0.googleapis.com/mapslt?hl=it-IT&", "https://mts1.googleapis.com/mapslt?hl=it-IT&"]
                ],
                [
                    ["https://mts0.googleapis.com/mapslt/ft?hl=it-IT&", "https://mts1.googleapis.com/mapslt/ft?hl=it-IT&"]
                ],
                [
                    ["https://mts0.googleapis.com/mapslt/loom?hl=it-IT&", "https://mts1.googleapis.com/mapslt/loom?hl=it-IT&"]
                ]
            ],
            ["it-IT", "US", null, 0, null, null, "http://maps.gstatic.com/mapfiles/", "http://csi.gstatic.com", "https://maps.googleapis.com", "http://maps.googleapis.com"],
            ["http://maps.gstatic.com/intl/it_ALL/mapfiles/api-3/17/11", "3.17.11"],
            [542525814], 1, null, null, null, null, null, "", null, null, 0, "http://khm.googleapis.com/mz?v=155&", null, "https://earthbuilder.googleapis.com", "https://earthbuilder.googleapis.com", null, "http://mt.googleapis.com/vt/icon", [
                ["http://mt0.googleapis.com/vt", "http://mt1.googleapis.com/vt"],
                ["https://mts0.googleapis.com/vt", "https://mts1.googleapis.com/vt"],
                [null, [
                        [0, "m", 27e7]
                    ],
                    [null, "it-IT", "US", null, 18, null, null, null, null, null, null, [
                        [47],
                        [37, [
                            ["smartmaps"]
                        ]]
                    ]], 0
                ],
                [null, [
                        [0, "m", 27e7]
                    ],
                    [null, "it-IT", "US", null, 18, null, null, null, null, null, null, [
                        [47],
                        [37, [
                            ["smartmaps"]
                        ]]
                    ]], 3
                ],
                [null, [
                        [0, "m", 27e7]
                    ],
                    [null, "it-IT", "US", null, 18, null, null, null, null, null, null, [
                        [50],
                        [37, [
                            ["smartmaps"]
                        ]]
                    ]], 0
                ],
                [null, [
                        [0, "m", 27e7]
                    ],
                    [null, "it-IT", "US", null, 18, null, null, null, null, null, null, [
                        [50],
                        [37, [
                            ["smartmaps"]
                        ]]
                    ]], 3
                ],
                [null, [
                        [4, "t", 132],
                        [0, "r", 132e6]
                    ],
                    [null, "it-IT", "US", null, 18, null, null, null, null, null, null, [
                        [5],
                        [37, [
                            ["smartmaps"]
                        ]]
                    ]], 0
                ],
                [null, [
                        [4, "t", 132],
                        [0, "r", 132e6]
                    ],
                    [null, "it-IT", "US", null, 18, null, null, null, null, null, null, [
                        [5],
                        [37, [
                            ["smartmaps"]
                        ]]
                    ]], 3
                ],
                [null, null, [null, "it-IT", "US", null, 18], 0],
                [null, null, [null, "it-IT", "US", null, 18], 3],
                [null, null, [null, "it-IT", "US", null, 18], 6],
                [null, null, [null, "it-IT", "US", null, 18], 0],
                ["https://mts0.google.com/vt", "https://mts1.google.com/vt"], "/maps/vt"
            ], 2, 500, ["http://geo0.ggpht.com/cbk?cb_client=maps_sv.uv_api_demo", "http://www.gstatic.com/landmark/tour", "http://www.gstatic.com/landmark/config", "/maps/preview/reveal?authuser=0", "/maps/preview/log204", "/gen204?tbm=map", "http://static.panoramio.com.storage.googleapis.com/photos/"],
            ["https://www.google.com/maps/api/js/widget?pb=!1m2!1u17!2s11!2sit-IT!3sUS", "https://www.google.com/maps/api/js/slave_widget?pb=!1m2!1u17!2s11"]
        ], n)
    };
    var n = (new Date).getTime();
    e("http://maps.gstatic.com/intl/it_ALL/mapfiles/api-3/17/11/main.js")
})();
jQuery(function(e) {
    e(document).ready(function() {
        var t = "http://maps.google.com/maps/api/geocode/json?address=" + e("#gmap").data("address") + "&sensor=false";
        e.getJSON(t, function(t) {
            var n = t.results[0].geometry.location.lat;
            var r = t.results[0].geometry.location.lng;
            e("#gmap").attr("data-lat", n);
            e("#gmap").attr("data-lng", r)
        });
        e("#gmap_markers span").each(function(t) {
            var n = parseInt(t) + 1;
            n = "m" + n;
            var r = "http://maps.google.com/maps/api/geocode/json?address=" + e(this).data("mark-address") + "&sensor=false";
            e(this).attr("id", n);
            e.getJSON(r, function(t) {
                var r = t.results[0].geometry.location.lat;
                var i = t.results[0].geometry.location.lng;
                e("#" + n).attr("data-lat", r);
                e("#" + n).attr("data-lng", i)
            })
        })
    });
    e(window).load(function() {
        var t = e("#gmap").data("lat");
        var n = e("#gmap").data("lng");
        var r = e("#gmap").data("zoom");
        var i = e("#gmap").data("color");
        var s = e("#gmap").data("saturation");
        var o = new google.maps.LatLng(t, n);
        var u = [{
            stylers: [{
                hue: i
            }, {
                saturation: s
            }]
        }, {
            featureType: "road",
            elementType: "geometry",
            stylers: [{
                lightness: 100
            }, {
                visibility: "simplified"
            }]
        }, {
            featureType: "road",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }];
        var a = e("#gmap").gmap({
            center: o,
            zoom: r,
            scrollwheel: false,
            zoomControl: true,
            disableDefaultUI: true,
            styles: u,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        e("#gmap_markers span").each(function() {
            var t = new google.maps.LatLng(e(this).data("lat"), e(this).data("lng"));
            var n = e(this).html();
            a.gmap("addMarker", {
                position: t,
                bounds: false,
                options: {
                    icon: new google.maps.MarkerImage("img/marker.png")
                }
            }).click(function() {
                a.gmap("openInfoWindow", {
                    content: n
                }, this)
            })
        })
    })
});
(function(e) {
    var t = new Array,
        n = new Array,
        r = function() {},
        i = 0;
    var s = {
        splashVPos: "35%",
        loaderVPos: "50%",
        splashID: "#jpreContent",
        showSplash: true,
        showPercentage: true,
        autoClose: true,
        closeBtnText: "Start!",
        onetimeLoad: false,
        debugMode: false,
        splashFunction: function() {}
    };
    var o = function() {
        if (s.onetimeLoad) {
            var e = document.cookie.split("; ");
            for (var t = 0, n; n = e[t] && e[t].split("="); t++) {
                if (n.shift() === "jpreLoader") {
                    return n.join("=")
                }
            }
            return false
        } else {
            return false
        }
    };
    var u = function(e) {
        if (s.onetimeLoad) {
            var t = new Date;
            t.setDate(t.getDate() + e);
            var n = e == null ? "" : "expires=" + t.toUTCString();
            document.cookie = "jpreLoader=loaded; " + n
        }
    };
    var a = function() {
        jOverlay = e("<div></div>").attr("id", "jpreOverlay").css({
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 9999999
        }).appendTo("body");
        if (s.showSplash) {
            jContent = e("<div></div>").attr("id", "jpreSlide").appendTo(jOverlay);
            var t = e(window).width() - e(jContent).width();
            e(jContent).css({
                position: "absolute",
                top: s.splashVPos,
                left: Math.round(50 / e(window).width() * t) + "%"
            });
            e(jContent).html(e(s.splashID).wrap("<div/>").parent().html());
            e(s.splashID).remove();
            s.splashFunction()
        }
        jLoader = e("<div></div>").attr("id", "jpreLoader").appendTo(jOverlay);
        var n = e(window).width() - e(jLoader).width();
        e(jLoader).css({
            position: "absolute",
            top: s.loaderVPos,
            left: Math.round(50 / e(window).width() * n) + "%"
        });
        jBar = e("<div></div>").attr("id", "jpreBar").css({
            width: "10%",
            height: "3px"
        }).appendTo(jLoader);
        if (s.showPercentage) {
            jPer = e("<div></div>").attr("id", "jprePercentage").css({
                position: "relative",
                height: "100%"
            }).appendTo(jLoader).html("...")
        }
        if (!s.autoclose) {
            jButton = e("<div></div>").attr("id", "jpreButton").on("click", function() {
                p()
            }).css({
                position: "relative",
                height: "100%"
            }).appendTo(jLoader).text(s.closeBtnText).hide()
        }
    };
    var f = function(n) {
        e(n).find("*:not(script)").each(function() {
            var n = "";
            if (e(this).css("background-image").indexOf("none") == -1 && e(this).css("background-image").indexOf("-gradient") == -1) {
                n = e(this).css("background-image");
                if (n.indexOf("url") != -1) {
                    var r = n.match(/url\((.*?)\)/);
                    n = r[1].replace(/\"/g, "")
                }
            } else if (e(this).get(0).nodeName.toLowerCase() == "img" && typeof e(this).attr("src") != "undefined") {
                n = e(this).attr("src")
            }
            if (n.length > 0) {
                t.push(n)
            }
        })
    };
    var l = function() {
        for (var e = 0; e < t.length; e++) {
            if (c(t[e]));
        }
    };
    var c = function(t) {
        var r = new Image;
        e(r).load(function() {
            h()
        }).error(function() {
            n.push(e(this).attr("src"));
            h()
        }).attr("src", t)
    };
    var h = function() {
        i++;
        var n = Math.round(i / t.length * 100);
        e(jBar).stop().animate({
            width: n + "%"
        }, 500, "linear");
        if (s.showPercentage) {
            e(jPer).text(n + "%")
        }
        if (i >= t.length) {
            i = t.length;
            u();
            if (s.showPercentage) {
                e(jPer).text("100%")
            }
            if (s.debugMode) {
                var r = d()
            }
            e(jBar).stop().animate({
                width: "100%"
            }, 500, "linear", function() {
                if (s.autoClose) p();
                else e(jButton).fadeIn(1e3)
            })
        }
    };
    var p = function() {
        e("#intro-slideshow").owlCarousel({
            autoPlay: true,
            singleItem: true,
            stopOnHover: false,
            transitionStyle: "megafade"
        });
        e("body").css({
            "overflow-y": "auto"
        });
        // e(document).scrollTop(0);
        setTimeout(function() {
            e(jLoader).fadeOut(300, function() {
                e(jOverlay).animate({
                    height: 0
                }, 500, function() {
                    e(jOverlay).remove();
                    r()
                })
            })
        }, 1500)
    };
    var d = function() {
        if (n.length > 0) {
            var e = "ERROR - IMAGE FILES MISSING!!!\n\r";
            e += n.length + " image files cound not be found. \n\r";
            e += "Please check your image paths and filenames:\n\r";
            for (var t = 0; t < n.length; t++) {
                e += "- " + n[t] + "\n\r"
            }
            return true
        } else {
            return false
        }
    };
    e.fn.jpreLoader = function(t, n) {
        if (t) {
            e.extend(s, t)
        }
        if (typeof n == "function") {
            r = n
        }
        e("body").css({
            display: "block"
        });
        return this.each(function() {
            if (!o()) {
                a();
                f(this);
                l()
            } else {
                e(s.splashID).remove();
                r()
            }
        })
    }
})(jQuery);
(function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
})(function(e) {
    function t(t, r) {
        var i, s, o, u = t.nodeName.toLowerCase();
        return "area" === u ? (i = t.parentNode, s = i.name, t.href && s && "map" === i.nodeName.toLowerCase() ? (o = e("img[usemap='#" + s + "']")[0], !!o && n(o)) : !1) : (/input|select|textarea|button|object/.test(u) ? !t.disabled : "a" === u ? t.href || r : r) && n(t)
    }

    function n(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
            return "hidden" === e.css(this, "visibility")
        }).length
    }

    function r(e) {
        for (var t, n; e.length && e[0] !== document;) {
            if (t = e.css("position"), ("absolute" === t || "relative" === t || "fixed" === t) && (n = parseInt(e.css("zIndex"), 10), !isNaN(n) && 0 !== n)) return n;
            e = e.parent()
        }
        return 0
    }

    function i() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, e.extend(this._defaults, this.regional[""]), this.regional.en = e.extend(!0, {}, this.regional[""]), this.regional["en-US"] = e.extend(!0, {}, this.regional.en), this.dpDiv = s(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function s(t) {
        var n = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.delegate(n, "mouseout", function() {
            e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover")
        }).delegate(n, "mouseover", o)
    }

    function o() {
        e.datepicker._isDisabledDatepicker(g.inline ? g.dpDiv.parent()[0] : g.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover"))
    }

    function u(t, n) {
        e.extend(t, n);
        for (var r in n) null == n[r] && (t[r] = n[r]);
        return t
    }

    function a(e) {
        return function() {
            var t = this.element.val();
            e.apply(this, arguments), this._refresh(), t !== this.element.val() && this._trigger("change")
        }
    }
    e.ui = e.ui || {}, e.extend(e.ui, {
        version: "1.11.1",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        scrollParent: function(t) {
            var n = this.css("position"),
                r = "absolute" === n,
                i = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                s = this.parents().filter(function() {
                    var t = e(this);
                    return r && "static" === t.css("position") ? !1 : i.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                }).eq(0);
            return "fixed" !== n && s.length ? s : e(this[0].ownerDocument || document)
        },
        uniqueId: function() {
            var e = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++e)
                })
            }
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(n) {
                return !!e.data(n, t)
            }
        }) : function(t, n, r) {
            return !!e.data(t, r[3])
        },
        focusable: function(n) {
            return t(n, !isNaN(e.attr(n, "tabindex")))
        },
        tabbable: function(n) {
            var r = e.attr(n, "tabindex"),
                i = isNaN(r);
            return (i || r >= 0) && t(n, !i)
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(t, n) {
        function r(t, n, r, s) {
            return e.each(i, function() {
                n -= parseFloat(e.css(t, "padding" + this)) || 0, r && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (n -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), n
        }
        var i = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"],
            s = n.toLowerCase(),
            o = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };
        e.fn["inner" + n] = function(t) {
            return void 0 === t ? o["inner" + n].call(this) : this.each(function() {
                e(this).css(s, r(this, t) + "px")
            })
        }, e.fn["outer" + n] = function(t, i) {
            return "number" != typeof t ? o["outer" + n].call(this, t) : this.each(function() {
                e(this).css(s, r(this, t, !0, i) + "px")
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
        return function(n) {
            return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this)
        }
    }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
        focus: function(t) {
            return function(n, r) {
                return "number" == typeof n ? this.each(function() {
                    var t = this;
                    setTimeout(function() {
                        e(t).focus(), r && r.call(t)
                    }, n)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus),
        disableSelection: function() {
            var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.bind(e + ".ui-disableSelection", function(e) {
                    e.preventDefault()
                })
            }
        }(),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function(t) {
            if (void 0 !== t) return this.css("zIndex", t);
            if (this.length)
                for (var n, r, i = e(this[0]); i.length && i[0] !== document;) {
                    if (n = i.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) && (r = parseInt(i.css("zIndex"), 10), !isNaN(r) && 0 !== r)) return r;
                    i = i.parent()
                }
            return 0
        }
    }), e.ui.plugin = {
        add: function(t, n, r) {
            var i, s = e.ui[t].prototype;
            for (i in r) s.plugins[i] = s.plugins[i] || [], s.plugins[i].push([n, r[i]])
        },
        call: function(e, t, n, r) {
            var i, s = e.plugins[t];
            if (s && (r || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
                for (i = 0; s.length > i; i++) e.options[s[i][0]] && s[i][1].apply(e.element, n)
        }
    };
    var f = 0,
        l = Array.prototype.slice;
    e.cleanData = function(t) {
        return function(n) {
            var r, i, s;
            for (s = 0; null != (i = n[s]); s++) try {
                r = e._data(i, "events"), r && r.remove && e(i).triggerHandler("remove")
            } catch (o) {}
            t(n)
        }
    }(e.cleanData), e.widget = function(t, n, r) {
        var i, s, o, u, a = {},
            f = t.split(".")[0];
        return t = t.split(".")[1], i = f + "-" + t, r || (r = n, n = e.Widget), e.expr[":"][i.toLowerCase()] = function(t) {
            return !!e.data(t, i)
        }, e[f] = e[f] || {}, s = e[f][t], o = e[f][t] = function(e, t) {
            return this._createWidget ? (arguments.length && this._createWidget(e, t), void 0) : new o(e, t)
        }, e.extend(o, s, {
            version: r.version,
            _proto: e.extend({}, r),
            _childConstructors: []
        }), u = new n, u.options = e.widget.extend({}, u.options), e.each(r, function(t, r) {
            return e.isFunction(r) ? (a[t] = function() {
                var e = function() {
                        return n.prototype[t].apply(this, arguments)
                    },
                    i = function(e) {
                        return n.prototype[t].apply(this, e)
                    };
                return function() {
                    var t, n = this._super,
                        s = this._superApply;
                    return this._super = e, this._superApply = i, t = r.apply(this, arguments), this._super = n, this._superApply = s, t
                }
            }(), void 0) : (a[t] = r, void 0)
        }), o.prototype = e.widget.extend(u, {
            widgetEventPrefix: s ? u.widgetEventPrefix || t : t
        }, a, {
            constructor: o,
            namespace: f,
            widgetName: t,
            widgetFullName: i
        }), s ? (e.each(s._childConstructors, function(t, n) {
            var r = n.prototype;
            e.widget(r.namespace + "." + r.widgetName, o, n._proto)
        }), delete s._childConstructors) : n._childConstructors.push(o), e.widget.bridge(t, o), o
    }, e.widget.extend = function(t) {
        for (var n, r, i = l.call(arguments, 1), s = 0, o = i.length; o > s; s++)
            for (n in i[s]) r = i[s][n], i[s].hasOwnProperty(n) && void 0 !== r && (t[n] = e.isPlainObject(r) ? e.isPlainObject(t[n]) ? e.widget.extend({}, t[n], r) : e.widget.extend({}, r) : r);
        return t
    }, e.widget.bridge = function(t, n) {
        var r = n.prototype.widgetFullName || t;
        e.fn[t] = function(i) {
            var s = "string" == typeof i,
                o = l.call(arguments, 1),
                u = this;
            return i = !s && o.length ? e.widget.extend.apply(null, [i].concat(o)) : i, s ? this.each(function() {
                var n, s = e.data(this, r);
                return "instance" === i ? (u = s, !1) : s ? e.isFunction(s[i]) && "_" !== i.charAt(0) ? (n = s[i].apply(s, o), n !== s && void 0 !== n ? (u = n && n.jquery ? u.pushStack(n.get()) : n, !1) : void 0) : e.error("no such method '" + i + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; " + "attempted to call method '" + i + "'")
            }) : this.each(function() {
                var t = e.data(this, r);
                t ? (t.option(i || {}), t._init && t._init()) : e.data(this, r, new n(i, this))
            }), u
        }
    }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t, n) {
            n = e(n || this.defaultElement || this)[0], this.element = e(n), this.uuid = f++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), n !== this && (e.data(n, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(e) {
                    e.target === n && this.destroy()
                }
            }), this.document = e(n.style ? n.ownerDocument : n.document || n), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function() {
            return this.element
        },
        option: function(t, n) {
            var r, i, s, o = t;
            if (0 === arguments.length) return e.widget.extend({}, this.options);
            if ("string" == typeof t)
                if (o = {}, r = t.split("."), t = r.shift(), r.length) {
                    for (i = o[t] = e.widget.extend({}, this.options[t]), s = 0; r.length - 1 > s; s++) i[r[s]] = i[r[s]] || {}, i = i[r[s]];
                    if (t = r.pop(), 1 === arguments.length) return void 0 === i[t] ? null : i[t];
                    i[t] = n
                } else {
                    if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                    o[t] = n
                }
            return this._setOptions(o), this
        },
        _setOptions: function(e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this
        },
        _setOption: function(e, t) {
            return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function(t, n, r) {
            var i, s = this;
            "boolean" != typeof t && (r = n, n = t, t = !1), r ? (n = i = e(n), this.bindings = this.bindings.add(n)) : (r = n, n = this.element, i = this.widget()), e.each(r, function(r, o) {
                function u() {
                    return t || s.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? s[o] : o).apply(s, arguments) : void 0
                }
                "string" != typeof o && (u.guid = o.guid = o.guid || u.guid || e.guid++);
                var a = r.match(/^([\w:-]*)\s*(.*)$/),
                    f = a[1] + s.eventNamespace,
                    l = a[2];
                l ? i.delegate(l, f, u) : n.bind(f, u)
            })
        },
        _off: function(e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
        },
        _delay: function(e, t) {
            function n() {
                return ("string" == typeof e ? r[e] : e).apply(r, arguments)
            }
            var r = this;
            return setTimeout(n, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function(t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function(t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, n, r) {
            var i, s, o = this.options[t];
            if (r = r || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], s = n.originalEvent)
                for (i in s) i in n || (n[i] = s[i]);
            return this.element.trigger(n, r), !(e.isFunction(o) && o.apply(this.element[0], [n].concat(r)) === !1 || n.isDefaultPrevented())
        }
    }, e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(t, n) {
        e.Widget.prototype["_" + t] = function(r, i, s) {
            "string" == typeof i && (i = {
                effect: i
            });
            var o, u = i ? i === !0 || "number" == typeof i ? n : i.effect || n : t;
            i = i || {}, "number" == typeof i && (i = {
                duration: i
            }), o = !e.isEmptyObject(i), i.complete = s, i.delay && r.delay(i.delay), o && e.effects && e.effects.effect[u] ? r[t](i) : u !== t && r[u] ? r[u](i.duration, i.easing, s) : r.queue(function(n) {
                e(this)[t](), s && s.call(r[0]), n()
            })
        }
    }), e.widget;
    var c = !1;
    e(document).mouseup(function() {
            c = !1
        }), e.widget("ui.mouse", {
            version: "1.11.1",
            options: {
                cancel: "input,textarea,button,select,option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function() {
                var t = this;
                this.element.bind("mousedown." + this.widgetName, function(e) {
                    return t._mouseDown(e)
                }).bind("click." + this.widgetName, function(n) {
                    return !0 === e.data(n.target, t.widgetName + ".preventClickEvent") ? (e.removeData(n.target, t.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1) : void 0
                }), this.started = !1
            },
            _mouseDestroy: function() {
                this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function(t) {
                if (!c) {
                    this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                    var n = this,
                        r = 1 === t.which,
                        i = "string" == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
                    return r && !i && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                        n.mouseDelayMet = !0
                    }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                        return n._mouseMove(e)
                    }, this._mouseUpDelegate = function(e) {
                        return n._mouseUp(e)
                    }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), c = !0, !0)) : !0
                }
            },
            _mouseMove: function(t) {
                return e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button ? this._mouseUp(t) : t.which ? this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) : this._mouseUp(t)
            },
            _mouseUp: function(t) {
                return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), c = !1, !1
            },
            _mouseDistanceMet: function(e) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function() {
                return this.mouseDelayMet
            },
            _mouseStart: function() {},
            _mouseDrag: function() {},
            _mouseStop: function() {},
            _mouseCapture: function() {
                return !0
            }
        }),
        function() {
            function t(e, t, n) {
                return [parseFloat(e[0]) * (p.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (p.test(e[1]) ? n / 100 : 1)]
            }

            function n(t, n) {
                return parseInt(e.css(t, n), 10) || 0
            }

            function r(t) {
                var n = t[0];
                return 9 === n.nodeType ? {
                    width: t.width(),
                    height: t.height(),
                    offset: {
                        top: 0,
                        left: 0
                    }
                } : e.isWindow(n) ? {
                    width: t.width(),
                    height: t.height(),
                    offset: {
                        top: t.scrollTop(),
                        left: t.scrollLeft()
                    }
                } : n.preventDefault ? {
                    width: 0,
                    height: 0,
                    offset: {
                        top: n.pageY,
                        left: n.pageX
                    }
                } : {
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    offset: t.offset()
                }
            }
            e.ui = e.ui || {};
            var i, s, o = Math.max,
                u = Math.abs,
                a = Math.round,
                f = /left|center|right/,
                l = /top|center|bottom/,
                c = /[\+\-]\d+(\.[\d]+)?%?/,
                h = /^\w+/,
                p = /%$/,
                d = e.fn.position;
            e.position = {
                    scrollbarWidth: function() {
                        if (void 0 !== i) return i;
                        var t, n, r = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                            s = r.children()[0];
                        return e("body").append(r), t = s.offsetWidth, r.css("overflow", "scroll"), n = s.offsetWidth, t === n && (n = r[0].clientWidth), r.remove(), i = t - n
                    },
                    getScrollInfo: function(t) {
                        var n = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                            r = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                            i = "scroll" === n || "auto" === n && t.width < t.element[0].scrollWidth,
                            s = "scroll" === r || "auto" === r && t.height < t.element[0].scrollHeight;
                        return {
                            width: s ? e.position.scrollbarWidth() : 0,
                            height: i ? e.position.scrollbarWidth() : 0
                        }
                    },
                    getWithinInfo: function(t) {
                        var n = e(t || window),
                            r = e.isWindow(n[0]),
                            i = !!n[0] && 9 === n[0].nodeType;
                        return {
                            element: n,
                            isWindow: r,
                            isDocument: i,
                            offset: n.offset() || {
                                left: 0,
                                top: 0
                            },
                            scrollLeft: n.scrollLeft(),
                            scrollTop: n.scrollTop(),
                            width: r || i ? n.width() : n.outerWidth(),
                            height: r || i ? n.height() : n.outerHeight()
                        }
                    }
                }, e.fn.position = function(i) {
                    if (!i || !i.of) return d.apply(this, arguments);
                    i = e.extend({}, i);
                    var p, v, m, g, y, b, w = e(i.of),
                        E = e.position.getWithinInfo(i.within),
                        S = e.position.getScrollInfo(E),
                        x = (i.collision || "flip").split(" "),
                        T = {};
                    return b = r(w), w[0].preventDefault && (i.at = "left top"), v = b.width, m = b.height, g = b.offset, y = e.extend({}, g), e.each(["my", "at"], function() {
                        var e, t, n = (i[this] || "").split(" ");
                        1 === n.length && (n = f.test(n[0]) ? n.concat(["center"]) : l.test(n[0]) ? ["center"].concat(n) : ["center", "center"]), n[0] = f.test(n[0]) ? n[0] : "center", n[1] = l.test(n[1]) ? n[1] : "center", e = c.exec(n[0]), t = c.exec(n[1]), T[this] = [e ? e[0] : 0, t ? t[0] : 0], i[this] = [h.exec(n[0])[0], h.exec(n[1])[0]]
                    }), 1 === x.length && (x[1] = x[0]), "right" === i.at[0] ? y.left += v : "center" === i.at[0] && (y.left += v / 2), "bottom" === i.at[1] ? y.top += m : "center" === i.at[1] && (y.top += m / 2), p = t(T.at, v, m), y.left += p[0], y.top += p[1], this.each(function() {
                        var r, f, l = e(this),
                            c = l.outerWidth(),
                            h = l.outerHeight(),
                            d = n(this, "marginLeft"),
                            b = n(this, "marginTop"),
                            N = c + d + n(this, "marginRight") + S.width,
                            C = h + b + n(this, "marginBottom") + S.height,
                            L = e.extend({}, y),
                            A = t(T.my, l.outerWidth(), l.outerHeight());
                        "right" === i.my[0] ? L.left -= c : "center" === i.my[0] && (L.left -= c / 2), "bottom" === i.my[1] ? L.top -= h : "center" === i.my[1] && (L.top -= h / 2), L.left += A[0], L.top += A[1], s || (L.left = a(L.left), L.top = a(L.top)), r = {
                            marginLeft: d,
                            marginTop: b
                        }, e.each(["left", "top"], function(t, n) {
                            e.ui.position[x[t]] && e.ui.position[x[t]][n](L, {
                                targetWidth: v,
                                targetHeight: m,
                                elemWidth: c,
                                elemHeight: h,
                                collisionPosition: r,
                                collisionWidth: N,
                                collisionHeight: C,
                                offset: [p[0] + A[0], p[1] + A[1]],
                                my: i.my,
                                at: i.at,
                                within: E,
                                elem: l
                            })
                        }), i.using && (f = function(e) {
                            var t = g.left - L.left,
                                n = t + v - c,
                                r = g.top - L.top,
                                s = r + m - h,
                                a = {
                                    target: {
                                        element: w,
                                        left: g.left,
                                        top: g.top,
                                        width: v,
                                        height: m
                                    },
                                    element: {
                                        element: l,
                                        left: L.left,
                                        top: L.top,
                                        width: c,
                                        height: h
                                    },
                                    horizontal: 0 > n ? "left" : t > 0 ? "right" : "center",
                                    vertical: 0 > s ? "top" : r > 0 ? "bottom" : "middle"
                                };
                            c > v && v > u(t + n) && (a.horizontal = "center"), h > m && m > u(r + s) && (a.vertical = "middle"), a.important = o(u(t), u(n)) > o(u(r), u(s)) ? "horizontal" : "vertical", i.using.call(this, e, a)
                        }), l.offset(e.extend(L, {
                            using: f
                        }))
                    })
                }, e.ui.position = {
                    fit: {
                        left: function(e, t) {
                            var n, r = t.within,
                                i = r.isWindow ? r.scrollLeft : r.offset.left,
                                s = r.width,
                                u = e.left - t.collisionPosition.marginLeft,
                                a = i - u,
                                f = u + t.collisionWidth - s - i;
                            t.collisionWidth > s ? a > 0 && 0 >= f ? (n = e.left + a + t.collisionWidth - s - i, e.left += a - n) : e.left = f > 0 && 0 >= a ? i : a > f ? i + s - t.collisionWidth : i : a > 0 ? e.left += a : f > 0 ? e.left -= f : e.left = o(e.left - u, e.left)
                        },
                        top: function(e, t) {
                            var n, r = t.within,
                                i = r.isWindow ? r.scrollTop : r.offset.top,
                                s = t.within.height,
                                u = e.top - t.collisionPosition.marginTop,
                                a = i - u,
                                f = u + t.collisionHeight - s - i;
                            t.collisionHeight > s ? a > 0 && 0 >= f ? (n = e.top + a + t.collisionHeight - s - i, e.top += a - n) : e.top = f > 0 && 0 >= a ? i : a > f ? i + s - t.collisionHeight : i : a > 0 ? e.top += a : f > 0 ? e.top -= f : e.top = o(e.top - u, e.top)
                        }
                    },
                    flip: {

                        left: function(e, t) {
                            var n, r, i = t.within,
                                s = i.offset.left + i.scrollLeft,
                                o = i.width,
                                a = i.isWindow ? i.scrollLeft : i.offset.left,
                                f = e.left - t.collisionPosition.marginLeft,
                                l = f - a,
                                c = f + t.collisionWidth - o - a,
                                h = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0,
                                p = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0,
                                d = -2 * t.offset[0];
                            0 > l ? (n = e.left + h + p + d + t.collisionWidth - o - s, (0 > n || u(l) > n) && (e.left += h + p + d)) : c > 0 && (r = e.left - t.collisionPosition.marginLeft + h + p + d - a, (r > 0 || c > u(r)) && (e.left += h + p + d))
                        },
                        top: function(e, t) {
                            var n, r, i = t.within,
                                s = i.offset.top + i.scrollTop,
                                o = i.height,
                                a = i.isWindow ? i.scrollTop : i.offset.top,
                                f = e.top - t.collisionPosition.marginTop,
                                l = f - a,
                                c = f + t.collisionHeight - o - a,
                                h = "top" === t.my[1],
                                p = h ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0,
                                d = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0,
                                v = -2 * t.offset[1];
                            0 > l ? (r = e.top + p + d + v + t.collisionHeight - o - s, e.top + p + d + v > l && (0 > r || u(l) > r) && (e.top += p + d + v)) : c > 0 && (n = e.top - t.collisionPosition.marginTop + p + d + v - a, e.top + p + d + v > c && (n > 0 || c > u(n)) && (e.top += p + d + v))
                        }
                    },
                    flipfit: {
                        left: function() {
                            e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments)
                        },
                        top: function() {
                            e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments)
                        }
                    }
                },
                function() {
                    var t, n, r, i, o, u = document.getElementsByTagName("body")[0],
                        a = document.createElement("div");
                    t = document.createElement(u ? "div" : "body"), r = {
                        visibility: "hidden",
                        width: 0,
                        height: 0,
                        border: 0,
                        margin: 0,
                        background: "none"
                    }, u && e.extend(r, {
                        position: "absolute",
                        left: "-1000px",
                        top: "-1000px"
                    });
                    for (o in r) t.style[o] = r[o];
                    t.appendChild(a), n = u || document.documentElement, n.insertBefore(t, n.firstChild), a.style.cssText = "position: absolute; left: 10.7432222px;", i = e(a).offset().left, s = i > 10 && 11 > i, t.innerHTML = "", n.removeChild(t)
                }()
        }(), e.ui.position, e.widget("ui.draggable", e.ui.mouse, {
            version: "1.11.1",
            widgetEventPrefix: "drag",
            options: {
                addClasses: !0,
                appendTo: "parent",
                axis: !1,
                connectToSortable: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                grid: !1,

                handle: !1,
                helper: "original",
                iframeFix: !1,
                opacity: !1,
                refreshPositions: !1,
                revert: !1,
                revertDuration: 500,
                scope: "default",
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                snap: !1,
                snapMode: "both",
                snapTolerance: 20,
                stack: !1,
                zIndex: !1,
                drag: null,
                start: null,
                stop: null
            },
            _create: function() {
                "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit()
            },
            _setOption: function(e, t) {
                this._super(e, t), "handle" === e && (this._removeHandleClassName(), this._setHandleClassName())
            },
            _destroy: function() {
                return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0, void 0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), this._mouseDestroy(), void 0)
            },
            _mouseCapture: function(t) {
                var n = this.document[0],
                    r = this.options;
                try {
                    n.activeElement && "body" !== n.activeElement.nodeName.toLowerCase() && e(n.activeElement).blur()
                } catch (i) {}
                return this.helper || r.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (e(r.iframeFix === !0 ? "iframe" : r.iframeFix).each(function() {
                    e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                        width: this.offsetWidth + "px",
                        height: this.offsetHeight + "px",
                        position: "absolute",
                        opacity: "0.001",
                        zIndex: 1e3
                    }).css(e(this).offset()).appendTo("body")
                }), !0) : !1)
            },
            _mouseStart: function(t) {
                var n = this.options;
                return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, this.offset.scroll = !1, e.extend(this.offset, {
                    click: {
                        left: t.pageX - this.offset.left,
                        top: t.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
            },
            _mouseDrag: function(t, n) {
                if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !n) {
                    var r = this._uiHash();
                    if (this._trigger("drag", t, r) === !1) return this._mouseUp({}), !1;
                    this.position = r.position
                }
                return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
            },
            _mouseStop: function(t) {
                var n = this,
                    r = !1;
                return e.ui.ddmanager && !this.options.dropBehaviour && (r = e.ui.ddmanager.drop(this, t)), this.dropped && (r = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !r || "valid" === this.options.revert && r || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, r) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    n._trigger("stop", t) !== !1 && n._clear()
                }) : this._trigger("stop", t) !== !1 && this._clear(), !1
            },
            _mouseUp: function(t) {
                return e("div.ui-draggable-iframeFix").each(function() {
                    this.parentNode.removeChild(this)
                }), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), this.element.focus(), e.ui.mouse.prototype._mouseUp.call(this, t)
            },
            cancel: function() {
                return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
            },
            _getHandle: function(t) {
                return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0
            },
            _setHandleClassName: function() {
                this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle")
            },
            _removeHandleClassName: function() {
                this.handleElement.removeClass("ui-draggable-handle")
            },
            _createHelper: function(t) {
                var n = this.options,
                    r = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t])) : "clone" === n.helper ? this.element.clone().removeAttr("id") : this.element;
                return r.parents("body").length || r.appendTo("parent" === n.appendTo ? this.element[0].parentNode : n.appendTo), r[0] === this.element[0] || /(fixed|absolute)/.test(r.css("position")) || r.css("position", "absolute"), r
            },
            _adjustOffsetFromHelper: function(t) {
                "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                    left: +t[0],
                    top: +t[1] || 0
                }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
            },
            _isRootNode: function(e) {
                return /(html|body)/i.test(e.tagName) || e === this.document[0]
            },
            _getParentOffset: function() {
                var t = this.offsetParent.offset(),
                    n = this.document[0];
                return "absolute" === this.cssPosition && this.scrollParent[0] !== n && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = {
                    top: 0,
                    left: 0
                }), {
                    top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if ("relative" !== this.cssPosition) return {
                    top: 0,
                    left: 0
                };
                var e = this.element.position(),
                    t = this._isRootNode(this.scrollParent[0]);
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + (t ? 0 : this.scrollParent.scrollTop()),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + (t ? 0 : this.scrollParent.scrollLeft())
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.element.css("marginLeft"), 10) || 0,
                    top: parseInt(this.element.css("marginTop"), 10) || 0,
                    right: parseInt(this.element.css("marginRight"), 10) || 0,
                    bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var t, n, r, i = this.options,
                    s = this.document[0];
                return this.relativeContainer = null, i.containment ? "window" === i.containment ? (this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || s.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : "document" === i.containment ? (this.containment = [0, 0, e(s).width() - this.helperProportions.width - this.margins.left, (e(s).height() || s.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : i.containment.constructor === Array ? (this.containment = i.containment, void 0) : ("parent" === i.containment && (i.containment = this.helper[0].parentNode), n = e(i.containment), r = n[0], r && (t = "hidden" !== n.css("overflow"), this.containment = [(parseInt(n.css("borderLeftWidth"), 10) || 0) + (parseInt(n.css("paddingLeft"), 10) || 0), (parseInt(n.css("borderTopWidth"), 10) || 0) + (parseInt(n.css("paddingTop"), 10) || 0), (t ? Math.max(r.scrollWidth, r.offsetWidth) : r.offsetWidth) - (parseInt(n.css("borderRightWidth"), 10) || 0) - (parseInt(n.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(r.scrollHeight, r.offsetHeight) : r.offsetHeight) - (parseInt(n.css("borderBottomWidth"), 10) || 0) - (parseInt(n.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = n), void 0) : (this.containment = null, void 0)
            },
            _convertPositionTo: function(e, t) {
                t || (t = this.position);
                var n = "absolute" === e ? 1 : -1,
                    r = this._isRootNode(this.scrollParent[0]);
                return {
                    top: t.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top) * n,
                    left: t.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left) * n
                }
            },
            _generatePosition: function(e, t) {
                var n, r, i, s, o = this.options,
                    u = this._isRootNode(this.scrollParent[0]),
                    a = e.pageX,
                    f = e.pageY;
                return u && this.offset.scroll || (this.offset.scroll = {
                    top: this.scrollParent.scrollTop(),
                    left: this.scrollParent.scrollLeft()
                }), t && (this.containment && (this.relativeContainer ? (r = this.relativeContainer.offset(), n = [this.containment[0] + r.left, this.containment[1] + r.top, this.containment[2] + r.left, this.containment[3] + r.top]) : n = this.containment, e.pageX - this.offset.click.left < n[0] && (a = n[0] + this.offset.click.left), e.pageY - this.offset.click.top < n[1] && (f = n[1] + this.offset.click.top), e.pageX - this.offset.click.left > n[2] && (a = n[2] + this.offset.click.left), e.pageY - this.offset.click.top > n[3] && (f = n[3] + this.offset.click.top)), o.grid && (i = o.grid[1] ? this.originalPageY + Math.round((f - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, f = n ? i - this.offset.click.top >= n[1] || i - this.offset.click.top > n[3] ? i : i - this.offset.click.top >= n[1] ? i - o.grid[1] : i + o.grid[1] : i, s = o.grid[0] ? this.originalPageX + Math.round((a - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, a = n ? s - this.offset.click.left >= n[0] || s - this.offset.click.left > n[2] ? s : s - this.offset.click.left >= n[0] ? s - o.grid[0] : s + o.grid[0] : s), "y" === o.axis && (a = this.originalPageX), "x" === o.axis && (f = this.originalPageY)), {
                    top: f - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : u ? 0 : this.offset.scroll.top),
                    left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : u ? 0 : this.offset.scroll.left)
                }
            },
            _clear: function() {
                this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
            },
            _trigger: function(t, n, r) {
                return r = r || this._uiHash(), e.ui.plugin.call(this, t, [n, r, this], !0), "drag" === t && (this.positionAbs = this._convertPositionTo("absolute")), e.Widget.prototype._trigger.call(this, t, n, r)
            },
            plugins: {},
            _uiHash: function() {
                return {
                    helper: this.helper,
                    position: this.position,
                    originalPosition: this.originalPosition,
                    offset: this.positionAbs
                }
            }
        }), e.ui.plugin.add("draggable", "connectToSortable", {
            start: function(t, n, r) {
                var i = r.options,
                    s = e.extend({}, n, {
                        item: r.element
                    });
                r.sortables = [], e(i.connectToSortable).each(function() {
                    var n = e(this).sortable("instance");
                    n && !n.options.disabled && (r.sortables.push({
                        instance: n,
                        shouldRevert: n.options.revert
                    }), n.refreshPositions(), n._trigger("activate", t, s))
                })
            },
            stop: function(t, n, r) {
                var i = e.extend({}, n, {
                    item: r.element
                });
                e.each(r.sortables, function() {
                    this.instance.isOver ? (this.instance.isOver = 0, r.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, "original" === r.options.helper && this.instance.currentItem.css({
                        top: "auto",
                        left: "auto"
                    })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, i))
                })
            },
            drag: function(t, n, r) {
                var i = this;
                e.each(r.sortables, function() {
                    var s = !1,
                        o = this;
                    this.instance.positionAbs = r.positionAbs, this.instance.helperProportions = r.helperProportions, this.instance.offset.click = r.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (s = !0, e.each(r.sortables, function() {
                        return this.instance.positionAbs = r.positionAbs, this.instance.helperProportions = r.helperProportions, this.instance.offset.click = r.offset.click, this !== o && this.instance._intersectsWith(this.instance.containerCache) && e.contains(o.instance.element[0], this.instance.element[0]) && (s = !1), s
                    })), s ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(i).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                        return n.helper[0]
                    }, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = r.offset.click.top, this.instance.offset.click.left = r.offset.click.left, this.instance.offset.parent.left -= r.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= r.offset.parent.top - this.instance.offset.parent.top, r._trigger("toSortable", t), r.dropped = this.instance.element, r.currentItem = r.element, this.instance.fromOutside = r), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), r._trigger("fromSortable", t), r.dropped = !1)
                })
            }
        }), e.ui.plugin.add("draggable", "cursor", {
            start: function(t, n, r) {
                var i = e("body"),
                    s = r.options;
                i.css("cursor") && (s._cursor = i.css("cursor")), i.css("cursor", s.cursor)
            },
            stop: function(t, n, r) {
                var i = r.options;
                i._cursor && e("body").css("cursor", i._cursor)
            }
        }), e.ui.plugin.add("draggable", "opacity", {
            start: function(t, n, r) {
                var i = e(n.helper),
                    s = r.options;
                i.css("opacity") && (s._opacity = i.css("opacity")), i.css("opacity", s.opacity)
            },
            stop: function(t, n, r) {
                var i = r.options;
                i._opacity && e(n.helper).css("opacity", i._opacity)
            }
        }), e.ui.plugin.add("draggable", "scroll", {
            start: function(e, t, n) {
                n.scrollParentNotHidden || (n.scrollParentNotHidden = n.helper.scrollParent(!1)), n.scrollParentNotHidden[0] !== n.document[0] && "HTML" !== n.scrollParentNotHidden[0].tagName && (n.overflowOffset = n.scrollParentNotHidden.offset())
            },
            drag: function(t, n, r) {
                var i = r.options,
                    s = !1,
                    o = r.scrollParentNotHidden[0],
                    u = r.document[0];
                o !== u && "HTML" !== o.tagName ? (i.axis && "x" === i.axis || (r.overflowOffset.top + o.offsetHeight - t.pageY < i.scrollSensitivity ? o.scrollTop = s = o.scrollTop + i.scrollSpeed : t.pageY - r.overflowOffset.top < i.scrollSensitivity && (o.scrollTop = s = o.scrollTop - i.scrollSpeed)), i.axis && "y" === i.axis || (r.overflowOffset.left + o.offsetWidth - t.pageX < i.scrollSensitivity ? o.scrollLeft = s = o.scrollLeft + i.scrollSpeed : t.pageX - r.overflowOffset.left < i.scrollSensitivity && (o.scrollLeft = s = o.scrollLeft - i.scrollSpeed))) : (i.axis && "x" === i.axis || (t.pageY - e(u).scrollTop() < i.scrollSensitivity ? s = e(u).scrollTop(e(u).scrollTop() - i.scrollSpeed) : e(window).height() - (t.pageY - e(u).scrollTop()) < i.scrollSensitivity && (s = e(u).scrollTop(e(u).scrollTop() + i.scrollSpeed))), i.axis && "y" === i.axis || (t.pageX - e(u).scrollLeft() < i.scrollSensitivity ? s = e(u).scrollLeft(e(u).scrollLeft() - i.scrollSpeed) : e(window).width() - (t.pageX - e(u).scrollLeft()) < i.scrollSensitivity && (s = e(u).scrollLeft(e(u).scrollLeft() + i.scrollSpeed)))), s !== !1 && e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(r, t)
            }
        }), e.ui.plugin.add("draggable", "snap", {
            start: function(t, n, r) {
                var i = r.options;
                r.snapElements = [], e(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" : i.snap).each(function() {
                    var t = e(this),
                        n = t.offset();
                    this !== r.element[0] && r.snapElements.push({
                        item: this,
                        width: t.outerWidth(),
                        height: t.outerHeight(),
                        top: n.top,
                        left: n.left
                    })
                })
            },
            drag: function(t, n, r) {
                var i, s, o, u, a, f, l, c, h, p, d = r.options,
                    v = d.snapTolerance,
                    m = n.offset.left,
                    g = m + r.helperProportions.width,
                    y = n.offset.top,
                    b = y + r.helperProportions.height;
                for (h = r.snapElements.length - 1; h >= 0; h--) a = r.snapElements[h].left, f = a + r.snapElements[h].width, l = r.snapElements[h].top, c = l + r.snapElements[h].height, a - v > g || m > f + v || l - v > b || y > c + v || !e.contains(r.snapElements[h].item.ownerDocument, r.snapElements[h].item) ? (r.snapElements[h].snapping && r.options.snap.release && r.options.snap.release.call(r.element, t, e.extend(r._uiHash(), {
                    snapItem: r.snapElements[h].item
                })), r.snapElements[h].snapping = !1) : ("inner" !== d.snapMode && (i = v >= Math.abs(l - b), s = v >= Math.abs(c - y), o = v >= Math.abs(a - g), u = v >= Math.abs(f - m), i && (n.position.top = r._convertPositionTo("relative", {
                    top: l - r.helperProportions.height,
                    left: 0
                }).top - r.margins.top), s && (n.position.top = r._convertPositionTo("relative", {
                    top: c,
                    left: 0
                }).top - r.margins.top), o && (n.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: a - r.helperProportions.width
                }).left - r.margins.left), u && (n.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: f
                }).left - r.margins.left)), p = i || s || o || u, "outer" !== d.snapMode && (i = v >= Math.abs(l - y), s = v >= Math.abs(c - b), o = v >= Math.abs(a - m), u = v >= Math.abs(f - g), i && (n.position.top = r._convertPositionTo("relative", {
                    top: l,
                    left: 0
                }).top - r.margins.top), s && (n.position.top = r._convertPositionTo("relative", {
                    top: c - r.helperProportions.height,
                    left: 0
                }).top - r.margins.top), o && (n.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: a
                }).left - r.margins.left), u && (n.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: f - r.helperProportions.width
                }).left - r.margins.left)), !r.snapElements[h].snapping && (i || s || o || u || p) && r.options.snap.snap && r.options.snap.snap.call(r.element, t, e.extend(r._uiHash(), {
                    snapItem: r.snapElements[h].item
                })), r.snapElements[h].snapping = i || s || o || u || p)
            }
        }), e.ui.plugin.add("draggable", "stack", {
            start: function(t, n, r) {
                var i, s = r.options,
                    o = e.makeArray(e(s.stack)).sort(function(t, n) {
                        return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(n).css("zIndex"), 10) || 0)
                    });
                o.length && (i = parseInt(e(o[0]).css("zIndex"), 10) || 0, e(o).each(function(t) {
                    e(this).css("zIndex", i + t)
                }), this.css("zIndex", i + o.length))
            }
        }), e.ui.plugin.add("draggable", "zIndex", {
            start: function(t, n, r) {
                var i = e(n.helper),
                    s = r.options;
                i.css("zIndex") && (s._zIndex = i.css("zIndex")), i.css("zIndex", s.zIndex)
            },
            stop: function(t, n, r) {
                var i = r.options;
                i._zIndex && e(n.helper).css("zIndex", i._zIndex)
            }
        }), e.ui.draggable, e.widget("ui.droppable", {
            version: "1.11.1",
            widgetEventPrefix: "drop",
            options: {
                accept: "*",
                activeClass: !1,
                addClasses: !0,
                greedy: !1,
                hoverClass: !1,
                scope: "default",
                tolerance: "intersect",
                activate: null,
                deactivate: null,
                drop: null,
                out: null,
                over: null
            },
            _create: function() {
                var t, n = this.options,
                    r = n.accept;
                this.isover = !1, this.isout = !0, this.accept = e.isFunction(r) ? r : function(e) {
                    return e.is(r)
                }, this.proportions = function() {
                    return arguments.length ? (t = arguments[0], void 0) : t ? t : t = {
                        width: this.element[0].offsetWidth,
                        height: this.element[0].offsetHeight
                    }
                }, this._addToManager(n.scope), n.addClasses && this.element.addClass("ui-droppable")
            },
            _addToManager: function(t) {
                e.ui.ddmanager.droppables[t] = e.ui.ddmanager.droppables[t] || [], e.ui.ddmanager.droppables[t].push(this)
            },
            _splice: function(e) {
                for (var t = 0; e.length > t; t++) e[t] === this && e.splice(t, 1)
            },
            _destroy: function() {
                var t = e.ui.ddmanager.droppables[this.options.scope];
                this._splice(t), this.element.removeClass("ui-droppable ui-droppable-disabled")
            },
            _setOption: function(t, n) {
                if ("accept" === t) this.accept = e.isFunction(n) ? n : function(e) {
                    return e.is(n)
                };
                else if ("scope" === t) {
                    var r = e.ui.ddmanager.droppables[this.options.scope];
                    this._splice(r), this._addToManager(n)
                }
                this._super(t, n)
            },
            _activate: function(t) {
                var n = e.ui.ddmanager.current;
                this.options.activeClass && this.element.addClass(this.options.activeClass), n && this._trigger("activate", t, this.ui(n))
            },
            _deactivate: function(t) {
                var n = e.ui.ddmanager.current;
                this.options.activeClass && this.element.removeClass(this.options.activeClass), n && this._trigger("deactivate", t, this.ui(n))

            },
            _over: function(t) {
                var n = e.ui.ddmanager.current;
                n && (n.currentItem || n.element)[0] !== this.element[0] && this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(n)))
            },
            _out: function(t) {
                var n = e.ui.ddmanager.current;
                n && (n.currentItem || n.element)[0] !== this.element[0] && this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(n)))
            },
            _drop: function(t, n) {
                var r = n || e.ui.ddmanager.current,
                    i = !1;
                return r && (r.currentItem || r.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                    var n = e(this).droppable("instance");
                    return n.options.greedy && !n.options.disabled && n.options.scope === r.options.scope && n.accept.call(n.element[0], r.currentItem || r.element) && e.ui.intersect(r, e.extend(n, {
                        offset: n.element.offset()
                    }), n.options.tolerance, t) ? (i = !0, !1) : void 0
                }), i ? !1 : this.accept.call(this.element[0], r.currentItem || r.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(r)), this.element) : !1) : !1
            },
            ui: function(e) {
                return {
                    draggable: e.currentItem || e.element,
                    helper: e.helper,
                    position: e.position,
                    offset: e.positionAbs
                }
            }
        }), e.ui.intersect = function() {
            function e(e, t, n) {
                return e >= t && t + n > e
            }
            return function(t, n, r, i) {
                if (!n.offset) return !1;
                var s = (t.positionAbs || t.position.absolute).left,
                    o = (t.positionAbs || t.position.absolute).top,
                    u = s + t.helperProportions.width,
                    a = o + t.helperProportions.height,
                    f = n.offset.left,
                    l = n.offset.top,
                    c = f + n.proportions().width,
                    h = l + n.proportions().height;
                switch (r) {
                    case "fit":
                        return s >= f && c >= u && o >= l && h >= a;
                    case "intersect":
                        return s + t.helperProportions.width / 2 > f && c > u - t.helperProportions.width / 2 && o + t.helperProportions.height / 2 > l && h > a - t.helperProportions.height / 2;
                    case "pointer":
                        return e(i.pageY, l, n.proportions().height) && e(i.pageX, f, n.proportions().width);
                    case "touch":
                        return (o >= l && h >= o || a >= l && h >= a || l > o && a > h) && (s >= f && c >= s || u >= f && c >= u || f > s && u > c);
                    default:
                        return !1
                }
            }
        }(), e.ui.ddmanager = {
            current: null,
            droppables: {
                "default": []
            },
            prepareOffsets: function(t, n) {
                var r, i, s = e.ui.ddmanager.droppables[t.options.scope] || [],
                    o = n ? n.type : null,
                    u = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
                e: for (r = 0; s.length > r; r++)
                    if (!(s[r].options.disabled || t && !s[r].accept.call(s[r].element[0], t.currentItem || t.element))) {
                        for (i = 0; u.length > i; i++)
                            if (u[i] === s[r].element[0]) {
                                s[r].proportions().height = 0;
                                continue e
                            }
                        s[r].visible = "none" !== s[r].element.css("display"), s[r].visible && ("mousedown" === o && s[r]._activate.call(s[r], n), s[r].offset = s[r].element.offset(), s[r].proportions({
                            width: s[r].element[0].offsetWidth,
                            height: s[r].element[0].offsetHeight
                        }))
                    }
            },
            drop: function(t, n) {
                var r = !1;
                return e.each((e.ui.ddmanager.droppables[t.options.scope] || []).slice(), function() {
                    this.options && (!this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance, n) && (r = this._drop.call(this, n) || r), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, n)))
                }), r
            },
            dragStart: function(t, n) {
                t.element.parentsUntil("body").bind("scroll.droppable", function() {
                    t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, n)
                })
            },
            drag: function(t, n) {
                t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, n), e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function() {
                    if (!this.options.disabled && !this.greedyChild && this.visible) {
                        var r, i, s, o = e.ui.intersect(t, this, this.options.tolerance, n),
                            u = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;
                        u && (this.options.greedy && (i = this.options.scope, s = this.element.parents(":data(ui-droppable)").filter(function() {
                            return e(this).droppable("instance").options.scope === i
                        }), s.length && (r = e(s[0]).droppable("instance"), r.greedyChild = "isover" === u)), r && "isover" === u && (r.isover = !1, r.isout = !0, r._out.call(r, n)), this[u] = !0, this["isout" === u ? "isover" : "isout"] = !1, this["isover" === u ? "_over" : "_out"].call(this, n), r && "isout" === u && (r.isout = !1, r.isover = !0, r._over.call(r, n)))
                    }
                })
            },
            dragStop: function(t, n) {
                t.element.parentsUntil("body").unbind("scroll.droppable"), t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, n)
            }
        }, e.ui.droppable, e.widget("ui.resizable", e.ui.mouse, {
            version: "1.11.1",
            widgetEventPrefix: "resize",
            options: {
                alsoResize: !1,
                animate: !1,
                animateDuration: "slow",
                animateEasing: "swing",
                aspectRatio: !1,
                autoHide: !1,
                containment: !1,
                ghost: !1,
                grid: !1,
                handles: "e,s,se",
                helper: !1,
                maxHeight: null,
                maxWidth: null,
                minHeight: 10,
                minWidth: 10,
                zIndex: 90,
                resize: null,
                start: null,
                stop: null
            },
            _num: function(e) {
                return parseInt(e, 10) || 0
            },
            _isNumber: function(e) {
                return !isNaN(parseInt(e, 10))
            },
            _hasScroll: function(t, n) {
                if ("hidden" === e(t).css("overflow")) return !1;
                var r = n && "left" === n ? "scrollLeft" : "scrollTop",
                    i = !1;
                return t[r] > 0 ? !0 : (t[r] = 1, i = t[r] > 0, t[r] = 0, i)
            },
            _create: function() {
                var t, n, r, i, s, o = this,
                    u = this.options;
                if (this.element.addClass("ui-resizable"), e.extend(this, {
                        _aspectRatio: !!u.aspectRatio,
                        aspectRatio: u.aspectRatio,
                        originalElement: this.element,
                        _proportionallyResizeElements: [],
                        _helper: u.helper || u.ghost || u.animate ? u.helper || "ui-resizable-helper" : null
                    }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                        position: this.element.css("position"),
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight(),
                        top: this.element.css("top"),
                        left: this.element.css("left")
                    })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
                        marginLeft: this.originalElement.css("marginLeft"),
                        marginTop: this.originalElement.css("marginTop"),
                        marginRight: this.originalElement.css("marginRight"),
                        marginBottom: this.originalElement.css("marginBottom")
                    }), this.originalElement.css({
                        marginLeft: 0,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0
                    }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                        position: "static",
                        zoom: 1,
                        display: "block"
                    })), this.originalElement.css({
                        margin: this.originalElement.css("margin")
                    }), this._proportionallyResize()), this.handles = u.handles || (e(".ui-resizable-handle", this.element).length ? {
                        n: ".ui-resizable-n",
                        e: ".ui-resizable-e",
                        s: ".ui-resizable-s",
                        w: ".ui-resizable-w",
                        se: ".ui-resizable-se",
                        sw: ".ui-resizable-sw",
                        ne: ".ui-resizable-ne",
                        nw: ".ui-resizable-nw"
                    } : "e,s,se"), this.handles.constructor === String)
                    for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), t = this.handles.split(","), this.handles = {}, n = 0; t.length > n; n++) r = e.trim(t[n]), s = "ui-resizable-" + r, i = e("<div class='ui-resizable-handle " + s + "'></div>"), i.css({
                        zIndex: u.zIndex
                    }), "se" === r && i.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[r] = ".ui-resizable-" + r, this.element.append(i);
                this._renderAxis = function(t) {
                    var n, r, i, s;
                    t = t || this.element;
                    for (n in this.handles) this.handles[n].constructor === String && (this.handles[n] = this.element.children(this.handles[n]).first().show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (r = e(this.handles[n], this.element), s = /sw|ne|nw|se|n|s/.test(n) ? r.outerHeight() : r.outerWidth(), i = ["padding", /ne|nw|n/.test(n) ? "Top" : /se|sw|s/.test(n) ? "Bottom" : /^e$/.test(n) ? "Right" : "Left"].join(""), t.css(i, s), this._proportionallyResize()), e(this.handles[n]).length
                }, this._renderAxis(this.element), this._handles = e(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
                    o.resizing || (this.className && (i = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = i && i[1] ? i[1] : "se")
                }), u.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                    u.disabled || (e(this).removeClass("ui-resizable-autohide"), o._handles.show())
                }).mouseleave(function() {
                    u.disabled || o.resizing || (e(this).addClass("ui-resizable-autohide"), o._handles.hide())
                })), this._mouseInit()
            },
            _destroy: function() {
                this._mouseDestroy();
                var t, n = function(t) {
                    e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
                };
                return this.elementIsWrapper && (n(this.element), t = this.element, this.originalElement.css({
                    position: t.css("position"),
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    top: t.css("top"),
                    left: t.css("left")
                }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), n(this.originalElement), this
            },
            _mouseCapture: function(t) {
                var n, r, i = !1;
                for (n in this.handles) r = e(this.handles[n])[0], (r === t.target || e.contains(r, t.target)) && (i = !0);
                return !this.options.disabled && i
            },
            _mouseStart: function(t) {
                var n, r, i, s = this.options,
                    o = this.element;
                return this.resizing = !0, this._renderProxy(), n = this._num(this.helper.css("left")), r = this._num(this.helper.css("top")), s.containment && (n += e(s.containment).scrollLeft() || 0, r += e(s.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                    left: n,
                    top: r
                }, this.size = this._helper ? {
                    width: this.helper.width(),
                    height: this.helper.height()
                } : {
                    width: o.width(),
                    height: o.height()
                }, this.originalSize = this._helper ? {
                    width: o.outerWidth(),
                    height: o.outerHeight()
                } : {
                    width: o.width(),
                    height: o.height()
                }, this.sizeDiff = {
                    width: o.outerWidth() - o.width(),
                    height: o.outerHeight() - o.height()
                }, this.originalPosition = {
                    left: n,
                    top: r
                }, this.originalMousePosition = {
                    left: t.pageX,
                    top: t.pageY
                }, this.aspectRatio = "number" == typeof s.aspectRatio ? s.aspectRatio : this.originalSize.width / this.originalSize.height || 1, i = e(".ui-resizable-" + this.axis).css("cursor"), e("body").css("cursor", "auto" === i ? this.axis + "-resize" : i), o.addClass("ui-resizable-resizing"), this._propagate("start", t), !0
            },
            _mouseDrag: function(t) {
                var n, r, i = this.originalMousePosition,
                    s = this.axis,
                    o = t.pageX - i.left || 0,
                    u = t.pageY - i.top || 0,
                    a = this._change[s];
                return this._updatePrevProperties(), a ? (n = a.apply(this, [t, o, u]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (n = this._updateRatio(n, t)), n = this._respectSize(n, t), this._updateCache(n), this._propagate("resize", t), r = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), e.isEmptyObject(r) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges()), !1) : !1
            },
            _mouseStop: function(t) {
                this.resizing = !1;
                var n, r, i, s, o, u, a, f = this.options,
                    l = this;
                return this._helper && (n = this._proportionallyResizeElements, r = n.length && /textarea/i.test(n[0].nodeName), i = r && this._hasScroll(n[0], "left") ? 0 : l.sizeDiff.height, s = r ? 0 : l.sizeDiff.width, o = {
                    width: l.helper.width() - s,
                    height: l.helper.height() - i
                }, u = parseInt(l.element.css("left"), 10) + (l.position.left - l.originalPosition.left) || null, a = parseInt(l.element.css("top"), 10) + (l.position.top - l.originalPosition.top) || null, f.animate || this.element.css(e.extend(o, {
                    top: a,
                    left: u
                })), l.helper.height(l.size.height), l.helper.width(l.size.width), this._helper && !f.animate && this._proportionallyResize()), e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
            },
            _updatePrevProperties: function() {
                this.prevPosition = {
                    top: this.position.top,
                    left: this.position.left
                }, this.prevSize = {
                    width: this.size.width,
                    height: this.size.height
                }
            },
            _applyChanges: function() {
                var e = {};
                return this.position.top !== this.prevPosition.top && (e.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (e.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (e.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (e.height = this.size.height + "px"), this.helper.css(e), e
            },
            _updateVirtualBoundaries: function(e) {
                var t, n, r, i, s, o = this.options;
                s = {
                    minWidth: this._isNumber(o.minWidth) ? o.minWidth : 0,
                    maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth : 1 / 0,
                    minHeight: this._isNumber(o.minHeight) ? o.minHeight : 0,
                    maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight : 1 / 0
                }, (this._aspectRatio || e) && (t = s.minHeight * this.aspectRatio, r = s.minWidth / this.aspectRatio, n = s.maxHeight * this.aspectRatio, i = s.maxWidth / this.aspectRatio, t > s.minWidth && (s.minWidth = t), r > s.minHeight && (s.minHeight = r), s.maxWidth > n && (s.maxWidth = n), s.maxHeight > i && (s.maxHeight = i)), this._vBoundaries = s
            },
            _updateCache: function(e) {
                this.offset = this.helper.offset(), this._isNumber(e.left) && (this.position.left = e.left), this._isNumber(e.top) && (this.position.top = e.top), this._isNumber(e.height) && (this.size.height = e.height), this._isNumber(e.width) && (this.size.width = e.width)
            },
            _updateRatio: function(e) {
                var t = this.position,
                    n = this.size,
                    r = this.axis;
                return this._isNumber(e.height) ? e.width = e.height * this.aspectRatio : this._isNumber(e.width) && (e.height = e.width / this.aspectRatio), "sw" === r && (e.left = t.left + (n.width - e.width), e.top = null), "nw" === r && (e.top = t.top + (n.height - e.height), e.left = t.left + (n.width - e.width)), e
            },
            _respectSize: function(e) {
                var t = this._vBoundaries,
                    n = this.axis,
                    r = this._isNumber(e.width) && t.maxWidth && t.maxWidth < e.width,
                    i = this._isNumber(e.height) && t.maxHeight && t.maxHeight < e.height,
                    s = this._isNumber(e.width) && t.minWidth && t.minWidth > e.width,
                    o = this._isNumber(e.height) && t.minHeight && t.minHeight > e.height,
                    u = this.originalPosition.left + this.originalSize.width,
                    a = this.position.top + this.size.height,
                    f = /sw|nw|w/.test(n),
                    l = /nw|ne|n/.test(n);
                return s && (e.width = t.minWidth), o && (e.height = t.minHeight), r && (e.width = t.maxWidth), i && (e.height = t.maxHeight), s && f && (e.left = u - t.minWidth), r && f && (e.left = u - t.maxWidth), o && l && (e.top = a - t.minHeight), i && l && (e.top = a - t.maxHeight), e.width || e.height || e.left || !e.top ? e.width || e.height || e.top || !e.left || (e.left = null) : e.top = null, e
            },
            _getPaddingPlusBorderDimensions: function(e) {
                for (var t = 0, n = [], r = [e.css("borderTopWidth"), e.css("borderRightWidth"), e.css("borderBottomWidth"), e.css("borderLeftWidth")], i = [e.css("paddingTop"), e.css("paddingRight"), e.css("paddingBottom"), e.css("paddingLeft")]; 4 > t; t++) n[t] = parseInt(r[t], 10) || 0, n[t] += parseInt(i[t], 10) || 0;
                return {
                    height: n[0] + n[2],
                    width: n[1] + n[3]
                }
            },
            _proportionallyResize: function() {
                if (this._proportionallyResizeElements.length)
                    for (var e, t = 0, n = this.helper || this.element; this._proportionallyResizeElements.length > t; t++) e = this._proportionallyResizeElements[t], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(e)), e.css({
                        height: n.height() - this.outerDimensions.height || 0,
                        width: n.width() - this.outerDimensions.width || 0
                    })
            },
            _renderProxy: function() {
                var t = this.element,
                    n = this.options;
                this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() - 1,
                    height: this.element.outerHeight() - 1,
                    position: "absolute",
                    left: this.elementOffset.left + "px",
                    top: this.elementOffset.top + "px",
                    zIndex: ++n.zIndex
                }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
            },
            _change: {
                e: function(e, t) {
                    return {
                        width: this.originalSize.width + t
                    }
                },
                w: function(e, t) {
                    var n = this.originalSize,
                        r = this.originalPosition;
                    return {
                        left: r.left + t,
                        width: n.width - t
                    }
                },
                n: function(e, t, n) {
                    var r = this.originalSize,
                        i = this.originalPosition;
                    return {
                        top: i.top + n,
                        height: r.height - n
                    }
                },
                s: function(e, t, n) {
                    return {
                        height: this.originalSize.height + n
                    }
                },
                se: function(t, n, r) {
                    return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, n, r]))
                },
                sw: function(t, n, r) {
                    return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, n, r]))
                },
                ne: function(t, n, r) {
                    return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, n, r]))
                },
                nw: function(t, n, r) {
                    return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, n, r]))
                }
            },
            _propagate: function(t, n) {
                e.ui.plugin.call(this, t, [n, this.ui()]), "resize" !== t && this._trigger(t, n, this.ui())
            },
            plugins: {},
            ui: function() {
                return {
                    originalElement: this.originalElement,
                    element: this.element,
                    helper: this.helper,
                    position: this.position,
                    size: this.size,
                    originalSize: this.originalSize,
                    originalPosition: this.originalPosition
                }
            }
        }), e.ui.plugin.add("resizable", "animate", {
            stop: function(t) {
                var n = e(this).resizable("instance"),
                    r = n.options,
                    i = n._proportionallyResizeElements,
                    s = i.length && /textarea/i.test(i[0].nodeName),
                    o = s && n._hasScroll(i[0], "left") ? 0 : n.sizeDiff.height,
                    u = s ? 0 : n.sizeDiff.width,
                    a = {
                        width: n.size.width - u,
                        height: n.size.height - o
                    },
                    f = parseInt(n.element.css("left"), 10) + (n.position.left - n.originalPosition.left) || null,
                    l = parseInt(n.element.css("top"), 10) + (n.position.top - n.originalPosition.top) || null;
                n.element.animate(e.extend(a, l && f ? {
                    top: l,
                    left: f
                } : {}), {
                    duration: r.animateDuration,
                    easing: r.animateEasing,
                    step: function() {
                        var r = {
                            width: parseInt(n.element.css("width"), 10),
                            height: parseInt(n.element.css("height"), 10),
                            top: parseInt(n.element.css("top"), 10),
                            left: parseInt(n.element.css("left"), 10)
                        };
                        i && i.length && e(i[0]).css({
                            width: r.width,
                            height: r.height
                        }), n._updateCache(r), n._propagate("resize", t)
                    }
                })
            }
        }), e.ui.plugin.add("resizable", "containment", {
            start: function() {
                var t, n, r, i, s, o, u, a = e(this).resizable("instance"),
                    f = a.options,
                    l = a.element,
                    c = f.containment,
                    h = c instanceof e ? c.get(0) : /parent/.test(c) ? l.parent().get(0) : c;
                h && (a.containerElement = e(h), /document/.test(c) || c === document ? (a.containerOffset = {
                    left: 0,
                    top: 0
                }, a.containerPosition = {
                    left: 0,
                    top: 0
                }, a.parentData = {
                    element: e(document),
                    left: 0,
                    top: 0,
                    width: e(document).width(),
                    height: e(document).height() || document.body.parentNode.scrollHeight
                }) : (t = e(h), n = [], e(["Top", "Right", "Left", "Bottom"]).each(function(e, r) {
                    n[e] = a._num(t.css("padding" + r))
                }), a.containerOffset = t.offset(), a.containerPosition = t.position(), a.containerSize = {
                    height: t.innerHeight() - n[3],
                    width: t.innerWidth() - n[1]
                }, r = a.containerOffset, i = a.containerSize.height, s = a.containerSize.width, o = a._hasScroll(h, "left") ? h.scrollWidth : s, u = a._hasScroll(h) ? h.scrollHeight : i, a.parentData = {
                    element: h,
                    left: r.left,
                    top: r.top,
                    width: o,
                    height: u
                }))
            },
            resize: function(t) {
                var n, r, i, s, o = e(this).resizable("instance"),
                    u = o.options,
                    a = o.containerOffset,
                    f = o.position,
                    l = o._aspectRatio || t.shiftKey,
                    c = {
                        top: 0,
                        left: 0
                    },
                    h = o.containerElement,
                    p = !0;
                h[0] !== document && /static/.test(h.css("position")) && (c = a), f.left < (o._helper ? a.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - a.left : o.position.left - c.left), l && (o.size.height = o.size.width / o.aspectRatio, p = !1), o.position.left = u.helper ? a.left : 0), f.top < (o._helper ? a.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - a.top : o.position.top), l && (o.size.width = o.size.height * o.aspectRatio, p = !1), o.position.top = o._helper ? a.top : 0), i = o.containerElement.get(0) === o.element.parent().get(0), s = /relative|absolute/.test(o.containerElement.css("position")), i && s ? (o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top) : (o.offset.left = o.element.offset().left, o.offset.top = o.element.offset().top), n = Math.abs(o.sizeDiff.width + (o._helper ? o.offset.left - c.left : o.offset.left - a.left)), r = Math.abs(o.sizeDiff.height + (o._helper ? o.offset.top - c.top : o.offset.top - a.top)), n + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - n, l && (o.size.height = o.size.width / o.aspectRatio, p = !1)), r + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - r, l && (o.size.width = o.size.height * o.aspectRatio, p = !1)), p || (o.position.left = o.prevPosition.left, o.position.top = o.prevPosition.top, o.size.width = o.prevSize.width, o.size.height = o.prevSize.height)
            },
            stop: function() {
                var t = e(this).resizable("instance"),
                    n = t.options,
                    r = t.containerOffset,
                    i = t.containerPosition,
                    s = t.containerElement,
                    o = e(t.helper),
                    u = o.offset(),
                    a = o.outerWidth() - t.sizeDiff.width,
                    f = o.outerHeight() - t.sizeDiff.height;
                t._helper && !n.animate && /relative/.test(s.css("position")) && e(this).css({
                    left: u.left - i.left - r.left,
                    width: a,
                    height: f
                }), t._helper && !n.animate && /static/.test(s.css("position")) && e(this).css({
                    left: u.left - i.left - r.left,
                    width: a,
                    height: f
                })
            }
        }), e.ui.plugin.add("resizable", "alsoResize", {
            start: function() {
                var t = e(this).resizable("instance"),
                    n = t.options,
                    r = function(t) {
                        e(t).each(function() {
                            var t = e(this);
                            t.data("ui-resizable-alsoresize", {
                                width: parseInt(t.width(), 10),
                                height: parseInt(t.height(), 10),
                                left: parseInt(t.css("left"), 10),
                                top: parseInt(t.css("top"), 10)
                            })
                        })
                    };
                "object" != typeof n.alsoResize || n.alsoResize.parentNode ? r(n.alsoResize) : n.alsoResize.length ? (n.alsoResize = n.alsoResize[0], r(n.alsoResize)) : e.each(n.alsoResize, function(e) {
                    r(e)
                })
            },
            resize: function(t, n) {
                var r = e(this).resizable("instance"),
                    i = r.options,
                    s = r.originalSize,
                    o = r.originalPosition,
                    u = {
                        height: r.size.height - s.height || 0,
                        width: r.size.width - s.width || 0,
                        top: r.position.top - o.top || 0,
                        left: r.position.left - o.left || 0
                    },
                    a = function(t, r) {
                        e(t).each(function() {
                            var t = e(this),
                                i = e(this).data("ui-resizable-alsoresize"),
                                s = {},
                                o = r && r.length ? r : t.parents(n.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                            e.each(o, function(e, t) {
                                var n = (i[t] || 0) + (u[t] || 0);
                                n && n >= 0 && (s[t] = n || null)
                            }), t.css(s)
                        })
                    };
                "object" != typeof i.alsoResize || i.alsoResize.nodeType ? a(i.alsoResize) : e.each(i.alsoResize, function(e, t) {
                    a(e, t)
                })
            },
            stop: function() {
                e(this).removeData("resizable-alsoresize")
            }
        }), e.ui.plugin.add("resizable", "ghost", {
            start: function() {
                var t = e(this).resizable("instance"),
                    n = t.options,
                    r = t.size;
                t.ghost = t.originalElement.clone(), t.ghost.css({
                    opacity: .25,
                    display: "block",
                    position: "relative",
                    height: r.height,
                    width: r.width,
                    margin: 0,
                    left: 0,
                    top: 0
                }).addClass("ui-resizable-ghost").addClass("string" == typeof n.ghost ? n.ghost : ""), t.ghost.appendTo(t.helper)
            },
            resize: function() {
                var t = e(this).resizable("instance");
                t.ghost && t.ghost.css({
                    position: "relative",
                    height: t.size.height,
                    width: t.size.width
                })
            },
            stop: function() {
                var t = e(this).resizable("instance");
                t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
            }
        }), e.ui.plugin.add("resizable", "grid", {
            resize: function() {
                var t, n = e(this).resizable("instance"),
                    r = n.options,
                    i = n.size,
                    s = n.originalSize,
                    o = n.originalPosition,
                    u = n.axis,
                    a = "number" == typeof r.grid ? [r.grid, r.grid] : r.grid,
                    f = a[0] || 1,
                    l = a[1] || 1,
                    c = Math.round((i.width - s.width) / f) * f,
                    h = Math.round((i.height - s.height) / l) * l,
                    p = s.width + c,
                    d = s.height + h,
                    v = r.maxWidth && p > r.maxWidth,
                    m = r.maxHeight && d > r.maxHeight,
                    g = r.minWidth && r.minWidth > p,
                    y = r.minHeight && r.minHeight > d;
                r.grid = a, g && (p += f), y && (d += l), v && (p -= f), m && (d -= l), /^(se|s|e)$/.test(u) ? (n.size.width = p, n.size.height = d) : /^(ne)$/.test(u) ? (n.size.width = p, n.size.height = d, n.position.top = o.top - h) : /^(sw)$/.test(u) ? (n.size.width = p, n.size.height = d, n.position.left = o.left - c) : ((0 >= d - l || 0 >= p - f) && (t = n._getPaddingPlusBorderDimensions(this)), d - l > 0 ? (n.size.height = d, n.position.top = o.top - h) : (d = l - t.height, n.size.height = d, n.position.top = o.top + s.height - d), p - f > 0 ? (n.size.width = p, n.position.left = o.left - c) : (p = l - t.height, n.size.width = p, n.position.left = o.left + s.width - p))
            }
        }), e.ui.resizable, e.widget("ui.selectable", e.ui.mouse, {
            version: "1.11.1",
            options: {
                appendTo: "body",
                autoRefresh: !0,
                distance: 0,
                filter: "*",
                tolerance: "touch",
                selected: null,
                selecting: null,
                start: null,
                stop: null,
                unselected: null,
                unselecting: null
            },
            _create: function() {
                var t, n = this;
                this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                    t = e(n.options.filter, n.element[0]), t.addClass("ui-selectee"), t.each(function() {
                        var t = e(this),
                            n = t.offset();
                        e.data(this, "selectable-item", {
                            element: this,
                            $element: t,
                            left: n.left,
                            top: n.top,
                            right: n.left + t.outerWidth(),
                            bottom: n.top + t.outerHeight(),
                            startselected: !1,
                            selected: t.hasClass("ui-selected"),
                            selecting: t.hasClass("ui-selecting"),
                            unselecting: t.hasClass("ui-unselecting")
                        })
                    })
                }, this.refresh(), this.selectees = t.addClass("ui-selectee"), this._mouseInit(), this.helper = e("<div class='ui-selectable-helper'></div>")
            },
            _destroy: function() {
                this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
            },
            _mouseStart: function(t) {
                var n = this,
                    r = this.options;
                this.opos = [t.pageX, t.pageY], this.options.disabled || (this.selectees = e(r.filter, this.element[0]), this._trigger("start", t), e(r.appendTo).append(this.helper), this.helper.css({
                    left: t.pageX,
                    top: t.pageY,
                    width: 0,
                    height: 0
                }), r.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                    var r = e.data(this, "selectable-item");
                    r.startselected = !0, t.metaKey || t.ctrlKey || (r.$element.removeClass("ui-selected"), r.selected = !1, r.$element.addClass("ui-unselecting"), r.unselecting = !0, n._trigger("unselecting", t, {
                        unselecting: r.element
                    }))
                }), e(t.target).parents().addBack().each(function() {
                    var r, i = e.data(this, "selectable-item");
                    return i ? (r = !t.metaKey && !t.ctrlKey || !i.$element.hasClass("ui-selected"), i.$element.removeClass(r ? "ui-unselecting" : "ui-selected").addClass(r ? "ui-selecting" : "ui-unselecting"), i.unselecting = !r, i.selecting = r, i.selected = r, r ? n._trigger("selecting", t, {
                        selecting: i.element
                    }) : n._trigger("unselecting", t, {
                        unselecting: i.element
                    }), !1) : void 0
                }))
            },
            _mouseDrag: function(t) {
                if (this.dragged = !0, !this.options.disabled) {
                    var n, r = this,
                        i = this.options,
                        s = this.opos[0],
                        o = this.opos[1],
                        u = t.pageX,
                        a = t.pageY;
                    return s > u && (n = u, u = s, s = n), o > a && (n = a, a = o, o = n), this.helper.css({
                        left: s,
                        top: o,
                        width: u - s,
                        height: a - o
                    }), this.selectees.each(function() {
                        var n = e.data(this, "selectable-item"),
                            f = !1;
                        n && n.element !== r.element[0] && ("touch" === i.tolerance ? f = !(n.left > u || s > n.right || n.top > a || o > n.bottom) : "fit" === i.tolerance && (f = n.left > s && u > n.right && n.top > o && a > n.bottom), f ? (n.selected && (n.$element.removeClass("ui-selected"), n.selected = !1), n.unselecting && (n.$element.removeClass("ui-unselecting"), n.unselecting = !1), n.selecting || (n.$element.addClass("ui-selecting"), n.selecting = !0, r._trigger("selecting", t, {
                            selecting: n.element
                        }))) : (n.selecting && ((t.metaKey || t.ctrlKey) && n.startselected ? (n.$element.removeClass("ui-selecting"), n.selecting = !1, n.$element.addClass("ui-selected"), n.selected = !0) : (n.$element.removeClass("ui-selecting"), n.selecting = !1, n.startselected && (n.$element.addClass("ui-unselecting"), n.unselecting = !0), r._trigger("unselecting", t, {
                            unselecting: n.element
                        }))), n.selected && (t.metaKey || t.ctrlKey || n.startselected || (n.$element.removeClass("ui-selected"), n.selected = !1, n.$element.addClass("ui-unselecting"), n.unselecting = !0, r._trigger("unselecting", t, {
                            unselecting: n.element
                        })))))
                    }), !1
                }
            },
            _mouseStop: function(t) {
                var n = this;
                return this.dragged = !1, e(".ui-unselecting", this.element[0]).each(function() {
                    var r = e.data(this, "selectable-item");
                    r.$element.removeClass("ui-unselecting"), r.unselecting = !1, r.startselected = !1, n._trigger("unselected", t, {
                        unselected: r.element
                    })
                }), e(".ui-selecting", this.element[0]).each(function() {
                    var r = e.data(this, "selectable-item");
                    r.$element.removeClass("ui-selecting").addClass("ui-selected"), r.selecting = !1, r.selected = !0, r.startselected = !0, n._trigger("selected", t, {
                        selected: r.element
                    })
                }), this._trigger("stop", t), this.helper.remove(), !1
            }
        }), e.widget("ui.sortable", e.ui.mouse, {
            version: "1.11.1",
            widgetEventPrefix: "sort",
            ready: !1,
            options: {
                appendTo: "parent",
                axis: !1,
                connectWith: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                dropOnEmpty: !0,
                forcePlaceholderSize: !1,
                forceHelperSize: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                items: "> *",
                opacity: !1,
                placeholder: !1,
                revert: !1,
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                scope: "default",
                tolerance: "intersect",
                zIndex: 1e3,
                activate: null,
                beforeStop: null,
                change: null,
                deactivate: null,
                out: null,
                over: null,
                receive: null,
                remove: null,
                sort: null,
                start: null,
                stop: null,
                update: null
            },
            _isOverAxis: function(e, t, n) {
                return e >= t && t + n > e
            },
            _isFloating: function(e) {
                return /left|right/.test(e.css("float")) || /inline|table-cell/.test(e.css("display"))
            },
            _create: function() {
                var e = this.options;
                this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === e.axis || this._isFloating(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
            },
            _setOption: function(e, t) {
                this._super(e, t), "handle" === e && this._setHandleClassName()
            },
            _setHandleClassName: function() {
                this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), e.each(this.items, function() {
                    (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
                })
            },
            _destroy: function() {
                this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), this._mouseDestroy();
                for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + "-item");
                return this
            },
            _mouseCapture: function(t, n) {
                var r = null,
                    i = !1,
                    s = this;
                return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(t), e(t.target).parents().each(function() {
                    return e.data(this, s.widgetName + "-item") === s ? (r = e(this), !1) : void 0
                }), e.data(t.target, s.widgetName + "-item") === s && (r = e(t.target)), r ? !this.options.handle || n || (e(this.options.handle, r).find("*").addBack().each(function() {
                    this === t.target && (i = !0)
                }), i) ? (this.currentItem = r, this._removeCurrentsFromItems(), !0) : !1 : !1)
            },
            _mouseStart: function(t, n, r) {
                var i, s, o = this.options;
                if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                        top: this.offset.top - this.margins.top,
                        left: this.offset.left - this.margins.left
                    }, e.extend(this.offset, {
                        click: {
                            left: t.pageX - this.offset.left,
                            top: t.pageY - this.offset.top
                        },
                        parent: this._getParentOffset(),
                        relative: this._getRelativeOffset()
                    }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = {
                        prev: this.currentItem.prev()[0],
                        parent: this.currentItem.parent()[0]
                    }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (s = this.document.find("body"), this.storedCursor = s.css("cursor"), s.css("cursor", o.cursor), this.storedStylesheet = e("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(s)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !r)
                    for (i = this.containers.length - 1; i >= 0; i--) this.containers[i]._trigger("activate", t, this._uiHash(this));
                return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
            },
            _mouseDrag: function(t) {
                var n, r, i, s, o = this.options,
                    u = !1;
                for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = u = this.scrollParent[0].scrollTop + o.scrollSpeed : t.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = u = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = u = this.scrollParent[0].scrollLeft + o.scrollSpeed : t.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = u = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (t.pageY - e(document).scrollTop() < o.scrollSensitivity ? u = e(document).scrollTop(e(document).scrollTop() - o.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < o.scrollSensitivity && (u = e(document).scrollTop(e(document).scrollTop() + o.scrollSpeed)), t.pageX - e(document).scrollLeft() < o.scrollSensitivity ? u = e(document).scrollLeft(e(document).scrollLeft() - o.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < o.scrollSensitivity && (u = e(document).scrollLeft(e(document).scrollLeft() + o.scrollSpeed))), u !== !1 && e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), n = this.items.length - 1; n >= 0; n--)
                    if (r = this.items[n], i = r.item[0], s = this._intersectsWithPointer(r), s && r.instance === this.currentContainer && i !== this.currentItem[0] && this.placeholder[1 === s ? "next" : "prev"]()[0] !== i && !e.contains(this.placeholder[0], i) && ("semi-dynamic" === this.options.type ? !e.contains(this.element[0], i) : !0)) {
                        if (this.direction = 1 === s ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(r)) break;
                        this._rearrange(t, r), this._trigger("change", t, this._uiHash());
                        break
                    }
                return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
            },
            _mouseStop: function(t, n) {
                if (t) {
                    if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), this.options.revert) {
                        var r = this,
                            i = this.placeholder.offset(),
                            s = this.options.axis,
                            o = {};
                        s && "x" !== s || (o.left = i.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), s && "y" !== s || (o.top = i.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, e(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function() {
                            r._clear(t)
                        })
                    } else this._clear(t, n);
                    return !1
                }
            },
            cancel: function() {
                if (this.dragging) {
                    this._mouseUp({
                        target: null
                    }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                    for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
                }
                return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
                    helper: null,
                    dragging: !1,
                    reverting: !1,
                    _noFinalSort: null
                }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this
            },
            serialize: function(t) {
                var n = this._getItemsAsjQuery(t && t.connected),
                    r = [];
                return t = t || {}, e(n).each(function() {
                    var n = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
                    n && r.push((t.key || n[1] + "[]") + "=" + (t.key && t.expression ? n[1] : n[2]))
                }), !r.length && t.key && r.push(t.key + "="), r.join("&")
            },
            toArray: function(t) {
                var n = this._getItemsAsjQuery(t && t.connected),
                    r = [];
                return t = t || {}, n.each(function() {
                    r.push(e(t.item || this).attr(t.attribute || "id") || "")
                }), r
            },
            _intersectsWith: function(e) {
                var t = this.positionAbs.left,
                    n = t + this.helperProportions.width,
                    r = this.positionAbs.top,
                    i = r + this.helperProportions.height,
                    s = e.left,
                    o = s + e.width,
                    u = e.top,
                    a = u + e.height,
                    f = this.offset.click.top,
                    l = this.offset.click.left,
                    c = "x" === this.options.axis || r + f > u && a > r + f,
                    h = "y" === this.options.axis || t + l > s && o > t + l,
                    p = c && h;
                return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? p : t + this.helperProportions.width / 2 > s && o > n - this.helperProportions.width / 2 && r + this.helperProportions.height / 2 > u && a > i - this.helperProportions.height / 2
            },
            _intersectsWithPointer: function(e) {
                var t = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height),
                    n = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width),
                    r = t && n,
                    i = this._getDragVerticalDirection(),
                    s = this._getDragHorizontalDirection();
                return r ? this.floating ? s && "right" === s || "down" === i ? 2 : 1 : i && ("down" === i ? 2 : 1) : !1
            },
            _intersectsWithSides: function(e) {
                var t = this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height),
                    n = this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
                    r = this._getDragVerticalDirection(),
                    i = this._getDragHorizontalDirection();
                return this.floating && i ? "right" === i && n || "left" === i && !n : r && ("down" === r && t || "up" === r && !t)
            },
            _getDragVerticalDirection: function() {
                var e = this.positionAbs.top - this.lastPositionAbs.top;
                return 0 !== e && (e > 0 ? "down" : "up")
            },
            _getDragHorizontalDirection: function() {
                var e = this.positionAbs.left - this.lastPositionAbs.left;
                return 0 !== e && (e > 0 ? "right" : "left")
            },
            refresh: function(e) {
                return this._refreshItems(e), this._setHandleClassName(), this.refreshPositions(), this
            },
            _connectWith: function() {
                var e = this.options;
                return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith
            },
            _getItemsAsjQuery: function(t) {
                function n() {
                    u.push(this)
                }
                var r, i, s, o, u = [],
                    a = [],
                    f = this._connectWith();
                if (f && t)
                    for (r = f.length - 1; r >= 0; r--)
                        for (s = e(f[r]), i = s.length - 1; i >= 0; i--) o = e.data(s[i], this.widgetFullName), o && o !== this && !o.options.disabled && a.push([e.isFunction(o.options.items) ? o.options.items.call(o.element) : e(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);
                for (a.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                        options: this.options,
                        item: this.currentItem
                    }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), r = a.length - 1; r >= 0; r--) a[r][0].each(n);
                return e(u)
            },
            _removeCurrentsFromItems: function() {
                var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
                this.items = e.grep(this.items, function(e) {
                    for (var n = 0; t.length > n; n++)
                        if (t[n] === e.item[0]) return !1;
                    return !0
                })
            },
            _refreshItems: function(t) {
                this.items = [], this.containers = [this];
                var n, r, i, s, o, u, a, f, l = this.items,
                    c = [
                        [e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                            item: this.currentItem
                        }) : e(this.options.items, this.element), this]
                    ],
                    h = this._connectWith();
                if (h && this.ready)
                    for (n = h.length - 1; n >= 0; n--)
                        for (i = e(h[n]), r = i.length - 1; r >= 0; r--) s = e.data(i[r], this.widgetFullName), s && s !== this && !s.options.disabled && (c.push([e.isFunction(s.options.items) ? s.options.items.call(s.element[0], t, {
                            item: this.currentItem
                        }) : e(s.options.items, s.element), s]), this.containers.push(s));
                for (n = c.length - 1; n >= 0; n--)
                    for (o = c[n][1], u = c[n][0], r = 0, f = u.length; f > r; r++) a = e(u[r]), a.data(this.widgetName + "-item", o), l.push({
                        item: a,
                        instance: o,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
            },
            refreshPositions: function(t) {
                this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                var n, r, i, s;
                for (n = this.items.length - 1; n >= 0; n--) r = this.items[n], r.instance !== this.currentContainer && this.currentContainer && r.item[0] !== this.currentItem[0] || (i = this.options.toleranceElement ? e(this.options.toleranceElement, r.item) : r.item, t || (r.width = i.outerWidth(), r.height = i.outerHeight()), s = i.offset(), r.left = s.left, r.top = s.top);
                if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                else
                    for (n = this.containers.length - 1; n >= 0; n--) s = this.containers[n].element.offset(), this.containers[n].containerCache.left = s.left, this.containers[n].containerCache.top = s.top, this.containers[n].containerCache.width = this.containers[n].element.outerWidth(), this.containers[n].containerCache.height = this.containers[n].element.outerHeight();
                return this
            },
            _createPlaceholder: function(t) {
                t = t || this;
                var n, r = t.options;
                r.placeholder && r.placeholder.constructor !== String || (n = r.placeholder, r.placeholder = {
                    element: function() {
                        var r = t.currentItem[0].nodeName.toLowerCase(),
                            i = e("<" + r + ">", t.document[0]).addClass(n || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                        return "tr" === r ? t.currentItem.children().each(function() {
                            e("<td>&#160;</td>", t.document[0]).attr("colspan", e(this).attr("colspan") || 1).appendTo(i)
                        }) : "img" === r && i.attr("src", t.currentItem.attr("src")), n || i.css("visibility", "hidden"), i
                    },
                    update: function(e, i) {
                        (!n || r.forcePlaceholderSize) && (i.height() || i.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), i.width() || i.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
                    }
                }), t.placeholder = e(r.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), r.placeholder.update(t, t.placeholder)
            },
            _contactContainers: function(t) {
                var n, r, i, s, o, u, a, f, l, c, h = null,
                    p = null;
                for (n = this.containers.length - 1; n >= 0; n--)
                    if (!e.contains(this.currentItem[0], this.containers[n].element[0]))
                        if (this._intersectsWith(this.containers[n].containerCache)) {
                            if (h && e.contains(this.containers[n].element[0], h.element[0])) continue;
                            h = this.containers[n], p = n
                        } else this.containers[n].containerCache.over && (this.containers[n]._trigger("out", t, this._uiHash(this)), this.containers[n].containerCache.over = 0);
                if (h)
                    if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", t, this._uiHash(this)), this.containers[p].containerCache.over = 1);
                    else {
                        for (i = 1e4, s = null, l = h.floating || this._isFloating(this.currentItem), o = l ? "left" : "top", u = l ? "width" : "height", c = l ? "clientX" : "clientY", r = this.items.length - 1; r >= 0; r--) e.contains(this.containers[p].element[0], this.items[r].item[0]) && this.items[r].item[0] !== this.currentItem[0] && (a = this.items[r].item.offset()[o], f = !1, t[c] - a > this.items[r][u] / 2 && (f = !0), i > Math.abs(t[c] - a) && (i = Math.abs(t[c] - a), s = this.items[r], this.direction = f ? "up" : "down"));
                        if (!s && !this.options.dropOnEmpty) return;
                        if (this.currentContainer === this.containers[p]) return;
                        s ? this._rearrange(t, s, null, !0) : this._rearrange(t, null, this.containers[p].element, !0), this._trigger("change", t, this._uiHash()), this.containers[p]._trigger("change", t, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", t, this._uiHash(this)), this.containers[p].containerCache.over = 1
                    }
            },
            _createHelper: function(t) {
                var n = this.options,
                    r = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === n.helper ? this.currentItem.clone() : this.currentItem;
                return r.parents("body").length || e("parent" !== n.appendTo ? n.appendTo : this.currentItem[0].parentNode)[0].appendChild(r[0]), r[0] === this.currentItem[0] && (this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                }), (!r[0].style.width || n.forceHelperSize) && r.width(this.currentItem.width()), (!r[0].style.height || n.forceHelperSize) && r.height(this.currentItem.height()), r
            },
            _adjustOffsetFromHelper: function(t) {
                "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                    left: +t[0],
                    top: +t[1] || 0
                }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
            },
            _getParentOffset: function() {
                this.offsetParent = this.helper.offsetParent();
                var t = this.offsetParent.offset();
                return "absolute" === this.cssPosition && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
                    top: 0,
                    left: 0
                }), {
                    top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if ("relative" === this.cssPosition) {
                    var e = this.currentItem.position();
                    return {
                        top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {
                    top: 0,
                    left: 0
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                    top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var t, n, r, i = this.options;
                "parent" === i.containment && (i.containment = this.helper[0].parentNode), ("document" === i.containment || "window" === i.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, e("document" === i.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (e("document" === i.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(i.containment) || (t = e(i.containment)[0], n = e(i.containment).offset(), r = "hidden" !== e(t).css("overflow"), this.containment = [n.left + (parseInt(e(t).css("borderLeftWidth"), 10) || 0) + (parseInt(e(t).css("paddingLeft"), 10) || 0) - this.margins.left, n.top + (parseInt(e(t).css("borderTopWidth"), 10) || 0) + (parseInt(e(t).css("paddingTop"), 10) || 0) - this.margins.top, n.left + (r ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(e(t).css("borderLeftWidth"), 10) || 0) - (parseInt(e(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, n.top + (r ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(e(t).css("borderTopWidth"), 10) || 0) - (parseInt(e(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
            },
            _convertPositionTo: function(t, n) {
                n || (n = this.position);
                var r = "absolute" === t ? 1 : -1,
                    i = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    s = /(html|body)/i.test(i[0].tagName);
                return {
                    top: n.top + this.offset.relative.top * r + this.offset.parent.top * r - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : i.scrollTop()) * r,
                    left: n.left + this.offset.relative.left * r + this.offset.parent.left * r - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : i.scrollLeft()) * r
                }
            },
            _generatePosition: function(t) {
                var n, r, i = this.options,
                    s = t.pageX,
                    o = t.pageY,
                    u = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    a = /(html|body)/i.test(u[0].tagName);
                return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (s = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (s = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), i.grid && (n = this.originalPageY + Math.round((o - this.originalPageY) / i.grid[1]) * i.grid[1], o = this.containment ? n - this.offset.click.top >= this.containment[1] && n - this.offset.click.top <= this.containment[3] ? n : n - this.offset.click.top >= this.containment[1] ? n - i.grid[1] : n + i.grid[1] : n, r = this.originalPageX + Math.round((s - this.originalPageX) / i.grid[0]) * i.grid[0], s = this.containment ? r - this.offset.click.left >= this.containment[0] && r - this.offset.click.left <= this.containment[2] ? r : r - this.offset.click.left >= this.containment[0] ? r - i.grid[0] : r + i.grid[0] : r)), {
                    top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : u.scrollTop()),
                    left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : u.scrollLeft())
                }
            },
            _rearrange: function(e, t, n, r) {
                n ? n[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
                var i = this.counter;
                this._delay(function() {
                    i === this.counter && this.refreshPositions(!r)
                })
            },
            _clear: function(e, t) {
                function n(e, t, n) {
                    return function(r) {
                        n._trigger(e, r, t._uiHash(t))
                    }
                }
                this.reverting = !1;
                var r, i = [];
                if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                    for (r in this._storedCSS)("auto" === this._storedCSS[r] || "static" === this._storedCSS[r]) && (this._storedCSS[r] = "");
                    this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                } else this.currentItem.show();
                for (this.fromOutside && !t && i.push(function(e) {
                        this._trigger("receive", e, this._uiHash(this.fromOutside))
                    }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || i.push(function(e) {
                        this._trigger("update", e, this._uiHash())
                    }), this !== this.currentContainer && (t || (i.push(function(e) {
                        this._trigger("remove", e, this._uiHash())
                    }), i.push(function(e) {
                        return function(t) {
                            e._trigger("receive", t, this._uiHash(this))
                        }
                    }.call(this, this.currentContainer)), i.push(function(e) {
                        return function(t) {
                            e._trigger("update", t, this._uiHash(this))
                        }
                    }.call(this, this.currentContainer)))), r = this.containers.length - 1; r >= 0; r--) t || i.push(n("deactivate", this, this.containers[r])), this.containers[r].containerCache.over && (i.push(n("out", this, this.containers[r])), this.containers[r].containerCache.over = 0);
                if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                    if (!t) {
                        for (this._trigger("beforeStop", e, this._uiHash()), r = 0; i.length > r; r++) i[r].call(this, e);
                        this._trigger("stop", e, this._uiHash())
                    }
                    return this.fromOutside = !1, !1
                }
                if (t || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !t) {
                    for (r = 0; i.length > r; r++) i[r].call(this, e);
                    this._trigger("stop", e, this._uiHash())
                }
                return this.fromOutside = !1, !0
            },
            _trigger: function() {
                e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
            },
            _uiHash: function(t) {
                var n = t || this;
                return {
                    helper: n.helper,
                    placeholder: n.placeholder || e([]),
                    position: n.position,
                    originalPosition: n.originalPosition,
                    offset: n.positionAbs,
                    item: n.currentItem,
                    sender: t ? t.element : null
                }
            }
        }), e.widget("ui.accordion", {
            version: "1.11.1",
            options: {
                active: 0,
                animate: {},
                collapsible: !1,
                event: "click",
                header: "> li > :first-child,> :not(li):even",
                heightStyle: "auto",
                icons: {
                    activeHeader: "ui-icon-triangle-1-s",
                    header: "ui-icon-triangle-1-e"
                },
                activate: null,
                beforeActivate: null
            },
            hideProps: {
                borderTopWidth: "hide",
                borderBottomWidth: "hide",
                paddingTop: "hide",
                paddingBottom: "hide",
                height: "hide"
            },
            showProps: {
                borderTopWidth: "show",
                borderBottomWidth: "show",
                paddingTop: "show",
                paddingBottom: "show",
                height: "show"
            },
            _create: function() {
                var t = this.options;
                this.prevShow = this.prevHide = e(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), t.collapsible || t.active !== !1 && null != t.active || (t.active = 0), this._processPanels(), 0 > t.active && (t.active += this.headers.length), this._refresh()
            },
            _getCreateEventData: function() {
                return {
                    header: this.active,
                    panel: this.active.length ? this.active.next() : e()
                }
            },
            _createIcons: function() {
                var t = this.options.icons;
                t && (e("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons"))
            },
            _destroyIcons: function() {
                this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
            },
            _destroy: function() {
                var e;
                this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(), this._destroyIcons(), e = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && e.css("height", "")
            },
            _setOption: function(e, t) {
                return "active" === e ? (this._activate(t), void 0) : ("event" === e && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(e, t), "collapsible" !== e || t || this.options.active !== !1 || this._activate(0), "icons" === e && (this._destroyIcons(), t && this._createIcons()), "disabled" === e && (this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!t)), void 0)
            },
            _keydown: function(t) {
                if (!t.altKey && !t.ctrlKey) {
                    var n = e.ui.keyCode,
                        r = this.headers.length,
                        i = this.headers.index(t.target),
                        s = !1;
                    switch (t.keyCode) {
                        case n.RIGHT:
                        case n.DOWN:
                            s = this.headers[(i + 1) % r];
                            break;
                        case n.LEFT:
                        case n.UP:
                            s = this.headers[(i - 1 + r) % r];
                            break;
                        case n.SPACE:
                        case n.ENTER:
                            this._eventHandler(t);
                            break;
                        case n.HOME:
                            s = this.headers[0];
                            break;
                        case n.END:
                            s = this.headers[r - 1]
                    }
                    s && (e(t.target).attr("tabIndex", -1), e(s).attr("tabIndex", 0), s.focus(), t.preventDefault())
                }
            },
            _panelKeyDown: function(t) {
                t.keyCode === e.ui.keyCode.UP && t.ctrlKey && e(t.currentTarget).prev().focus()
            },
            refresh: function() {
                var t = this.options;
                this._processPanels(), t.active === !1 && t.collapsible === !0 || !this.headers.length ? (t.active = !1, this.active = e()) : t.active === !1 ? this._activate(0) : this.active.length && !e.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = e()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
            },
            _processPanels: function() {
                this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
            },
            _refresh: function() {
                var t, n = this.options,
                    r = n.heightStyle,
                    i = this.element.parent();
                this.active = this._findActive(n.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function() {
                    var t = e(this),
                        n = t.uniqueId().attr("id"),
                        r = t.next(),
                        i = r.uniqueId().attr("id");
                    t.attr("aria-controls", i), r.attr("aria-labelledby", n)
                }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: -1
                }).next().attr({
                    "aria-hidden": "true"
                }).hide(), this.active.length ? this.active.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                }).next().attr({
                    "aria-hidden": "false"
                }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(n.event), "fill" === r ? (t = i.height(), this.element.siblings(":visible").each(function() {
                    var n = e(this),
                        r = n.css("position");
                    "absolute" !== r && "fixed" !== r && (t -= n.outerHeight(!0))
                }), this.headers.each(function() {
                    t -= e(this).outerHeight(!0)
                }), this.headers.next().each(function() {
                    e(this).height(Math.max(0, t - e(this).innerHeight() + e(this).height()))
                }).css("overflow", "auto")) : "auto" === r && (t = 0, this.headers.next().each(function() {
                    t = Math.max(t, e(this).css("height", "").height())
                }).height(t))
            },
            _activate: function(t) {
                var n = this._findActive(t)[0];
                n !== this.active[0] && (n = n || this.active[0], this._eventHandler({
                    target: n,
                    currentTarget: n,
                    preventDefault: e.noop
                }))
            },
            _findActive: function(t) {
                return "number" == typeof t ? this.headers.eq(t) : e()
            },
            _setupEvents: function(t) {
                var n = {
                    keydown: "_keydown"
                };
                t && e.each(t.split(" "), function(e, t) {
                    n[t] = "_eventHandler"
                }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, n), this._on(this.headers.next(), {
                    keydown: "_panelKeyDown"
                }), this._hoverable(this.headers), this._focusable(this.headers)
            },
            _eventHandler: function(t) {
                var n = this.options,
                    r = this.active,
                    i = e(t.currentTarget),
                    s = i[0] === r[0],
                    o = s && n.collapsible,
                    u = o ? e() : i.next(),
                    a = r.next(),
                    f = {
                        oldHeader: r,
                        oldPanel: a,
                        newHeader: o ? e() : i,
                        newPanel: u
                    };
                t.preventDefault(), s && !n.collapsible || this._trigger("beforeActivate", t, f) === !1 || (n.active = o ? !1 : this.headers.index(i), this.active = s ? e() : i, this._toggle(f), r.removeClass("ui-accordion-header-active ui-state-active"), n.icons && r.children(".ui-accordion-header-icon").removeClass(n.icons.activeHeader).addClass(n.icons.header), s || (i.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), n.icons && i.children(".ui-accordion-header-icon").removeClass(n.icons.header).addClass(n.icons.activeHeader), i.next().addClass("ui-accordion-content-active")))
            },
            _toggle: function(t) {
                var n = t.newPanel,
                    r = this.prevShow.length ? this.prevShow : t.oldPanel;
                this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = n, this.prevHide = r, this.options.animate ? this._animate(n, r, t) : (r.hide(), n.show(), this._toggleComplete(t)), r.attr({
                    "aria-hidden": "true"
                }), r.prev().attr("aria-selected", "false"), n.length && r.length ? r.prev().attr({
                    tabIndex: -1,
                    "aria-expanded": "false"
                }) : n.length && this.headers.filter(function() {
                    return 0 === e(this).attr("tabIndex")
                }).attr("tabIndex", -1), n.attr("aria-hidden", "false").prev().attr({
                    "aria-selected": "true",
                    tabIndex: 0,
                    "aria-expanded": "true"
                })
            },
            _animate: function(e, t, n) {
                var r, i, s, o = this,
                    u = 0,
                    a = e.length && (!t.length || e.index() < t.index()),
                    f = this.options.animate || {},
                    l = a && f.down || f,
                    c = function() {
                        o._toggleComplete(n)
                    };
                return "number" == typeof l && (s = l), "string" == typeof l && (i = l), i = i || l.easing || f.easing, s = s || l.duration || f.duration, t.length ? e.length ? (r = e.show().outerHeight(), t.animate(this.hideProps, {
                    duration: s,
                    easing: i,
                    step: function(e, t) {
                        t.now = Math.round(e)
                    }
                }), e.hide().animate(this.showProps, {
                    duration: s,
                    easing: i,
                    complete: c,
                    step: function(e, n) {
                        n.now = Math.round(e), "height" !== n.prop ? u += n.now : "content" !== o.options.heightStyle && (n.now = Math.round(r - t.outerHeight() - u), u = 0)
                    }
                }), void 0) : t.animate(this.hideProps, s, i, c) : e.animate(this.showProps, s, i, c)
            },
            _toggleComplete: function(e) {
                var t = e.oldPanel;
                t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), t.length && (t.parent()[0].className = t.parent()[0].className), this._trigger("activate", null, e)
            }
        }), e.widget("ui.menu", {
            version: "1.11.1",
            defaultElement: "<ul>",
            delay: 300,
            options: {
                icons: {
                    submenu: "ui-icon-carat-1-e"
                },
                items: "> *",
                menus: "ul",
                position: {
                    my: "left-1 top",
                    at: "right top"
                },
                role: "menu",
                blur: null,
                focus: null,
                select: null
            },
            _create: function() {
                this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                    role: this.options.role,
                    tabIndex: 0
                }), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                    "mousedown .ui-menu-item": function(e) {
                        e.preventDefault()
                    },
                    "click .ui-menu-item": function(t) {
                        var n = e(t.target);
                        !this.mouseHandled && n.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), n.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && e(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                    },
                    "mouseenter .ui-menu-item": function(t) {
                        var n = e(t.currentTarget);
                        n.siblings(".ui-state-active").removeClass("ui-state-active"), this.focus(t, n)
                    },
                    mouseleave: "collapseAll",
                    "mouseleave .ui-menu": "collapseAll",
                    focus: function(e, t) {
                        var n = this.active || this.element.find(this.options.items).eq(0);
                        t || this.focus(e, n)
                    },
                    blur: function(t) {
                        this._delay(function() {
                            e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
                        })
                    },
                    keydown: "_keydown"
                }), this.refresh(), this._on(this.document, {
                    click: function(e) {
                        this._closeOnDocumentClick(e) && this.collapseAll(e), this.mouseHandled = !1
                    }
                })
            },
            _destroy: function() {
                this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                    var t = e(this);
                    t.data("ui-menu-submenu-carat") && t.remove()
                }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
            },
            _keydown: function(t) {
                function n(e) {
                    return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                }
                var r, i, s, o, u, a = !0;
                switch (t.keyCode) {
                    case e.ui.keyCode.PAGE_UP:
                        this.previousPage(t);
                        break;
                    case e.ui.keyCode.PAGE_DOWN:
                        this.nextPage(t);
                        break;
                    case e.ui.keyCode.HOME:
                        this._move("first", "first", t);
                        break;
                    case e.ui.keyCode.END:
                        this._move("last", "last", t);
                        break;
                    case e.ui.keyCode.UP:
                        this.previous(t);
                        break;
                    case e.ui.keyCode.DOWN:
                        this.next(t);
                        break;
                    case e.ui.keyCode.LEFT:
                        this.collapse(t);
                        break;
                    case e.ui.keyCode.RIGHT:
                        this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                        break;
                    case e.ui.keyCode.ENTER:
                    case e.ui.keyCode.SPACE:
                        this._activate(t);
                        break;
                    case e.ui.keyCode.ESCAPE:
                        this.collapse(t);
                        break;
                    default:
                        a = !1, i = this.previousFilter || "", s = String.fromCharCode(t.keyCode), o = !1, clearTimeout(this.filterTimer), s === i ? o = !0 : s = i + s, u = RegExp("^" + n(s), "i"), r = this.activeMenu.find(this.options.items).filter(function() {
                            return u.test(e(this).text())
                        }), r = o && -1 !== r.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : r, r.length || (s = String.fromCharCode(t.keyCode), u = RegExp("^" + n(s), "i"), r = this.activeMenu.find(this.options.items).filter(function() {
                            return u.test(e(this).text())
                        })), r.length ? (this.focus(t, r), r.length > 1 ? (this.previousFilter = s, this.filterTimer = this._delay(function() {
                            delete this.previousFilter
                        }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
                }
                a && t.preventDefault()
            },
            _activate: function(e) {
                this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(e) : this.select(e))
            },
            refresh: function() {
                var t, n, r = this,
                    i = this.options.icons.submenu,
                    s = this.element.find(this.options.menus);
                this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                }).each(function() {
                    var t = e(this),
                        n = t.parent(),
                        r = e("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
                    n.attr("aria-haspopup", "true").prepend(r), t.attr("aria-labelledby", n.attr("id"))
                }), t = s.add(this.element), n = t.find(this.options.items), n.not(".ui-menu-item").each(function() {
                    var t = e(this);
                    r._isDivider(t) && t.addClass("ui-widget-content ui-menu-divider")
                }), n.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
                    tabIndex: -1,
                    role: this._itemRole()
                }), n.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !e.contains(this.element[0], this.active[0]) && this.blur()
            },
            _itemRole: function() {
                return {
                    menu: "menuitem",
                    listbox: "option"
                }[this.options.role]
            },
            _setOption: function(e, t) {
                "icons" === e && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu), "disabled" === e && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this._super(e, t)
            },
            focus: function(e, t) {
                var n, r;
                this.blur(e, e && "focus" === e.type), this._scrollIntoView(t), this.active = t.first(), r = this.active.addClass("ui-state-focus").removeClass("ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", r.attr("id")), this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"), e && "keydown" === e.type ? this._close() : this.timer = this._delay(function() {
                    this._close()
                }, this.delay), n = t.children(".ui-menu"), n.length && e && /^mouse/.test(e.type) && this._startOpening(n), this.activeMenu = t.parent(), this._trigger("focus", e, {
                    item: t
                })
            },
            _scrollIntoView: function(t) {
                var n, r, i, s, o, u;
                this._hasScroll() && (n = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0, r = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0, i = t.offset().top - this.activeMenu.offset().top - n - r, s = this.activeMenu.scrollTop(), o = this.activeMenu.height(), u = t.outerHeight(), 0 > i ? this.activeMenu.scrollTop(s + i) : i + u > o && this.activeMenu.scrollTop(s + i - o + u))
            },
            blur: function(e, t) {
                t || clearTimeout(this.timer), this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", e, {
                    item: this.active
                }))
            },
            _startOpening: function(e) {
                clearTimeout(this.timer), "true" === e.attr("aria-hidden") && (this.timer = this._delay(function() {
                    this._close(), this._open(e)
                }, this.delay))
            },
            _open: function(t) {
                var n = e.extend({
                    of: this.active
                }, this.options.position);
                clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(n)
            },
            collapseAll: function(t, n) {
                clearTimeout(this.timer), this.timer = this._delay(function() {
                    var r = n ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));
                    r.length || (r = this.element), this._close(r), this.blur(t), this.activeMenu = r
                }, this.delay)
            },
            _close: function(e) {
                e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
            },
            _closeOnDocumentClick: function(t) {
                return !e(t.target).closest(".ui-menu").length
            },
            _isDivider: function(e) {
                return !/[^\-\u2014\u2013\s]/.test(e.text())
            },
            collapse: function(e) {
                var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                t && t.length && (this._close(), this.focus(e, t))
            },
            expand: function(e) {
                var t = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
                t && t.length && (this._open(t.parent()), this._delay(function() {
                    this.focus(e, t)
                }))
            },
            next: function(e) {
                this._move("next", "first", e)
            },
            previous: function(e) {
                this._move("prev", "last", e)
            },
            isFirstItem: function() {
                return this.active && !this.active.prevAll(".ui-menu-item").length
            },
            isLastItem: function() {
                return this.active && !this.active.nextAll(".ui-menu-item").length
            },
            _move: function(e, t, n) {
                var r;
                this.active && (r = "first" === e || "last" === e ? this.active["first" === e ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[e + "All"](".ui-menu-item").eq(0)), r && r.length && this.active || (r = this.activeMenu.find(this.options.items)[t]()), this.focus(n, r)
            },
            nextPage: function(t) {
                var n, r, i;
                return this.active ? (this.isLastItem() || (this._hasScroll() ? (r = this.active.offset().top, i = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                    return n = e(this), 0 > n.offset().top - r - i
                }), this.focus(t, n)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())), void 0) : (this.next(t), void 0)
            },
            previousPage: function(t) {
                var n, r, i;
                return this.active ? (this.isFirstItem() || (this._hasScroll() ? (r = this.active.offset().top, i = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                    return n = e(this), n.offset().top - r + i > 0
                }), this.focus(t, n)) : this.focus(t, this.activeMenu.find(this.options.items).first())), void 0) : (this.next(t), void 0)
            },
            _hasScroll: function() {
                return this.element.outerHeight() < this.element.prop("scrollHeight")
            },
            select: function(t) {
                this.active = this.active || e(t.target).closest(".ui-menu-item");
                var n = {
                    item: this.active
                };
                this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, n)
            }
        }), e.widget("ui.autocomplete", {
            version: "1.11.1",
            defaultElement: "<input>",
            options: {
                appendTo: null,
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                source: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                response: null,
                search: null,
                select: null
            },
            requestIndex: 0,
            pending: 0,
            _create: function() {
                var t, n, r, i = this.element[0].nodeName.toLowerCase(),
                    s = "textarea" === i,
                    o = "input" === i;
                this.isMultiLine = s ? !0 : o ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[s || o ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                    keydown: function(i) {
                        if (this.element.prop("readOnly")) return t = !0, r = !0, n = !0, void 0;
                        t = !1, r = !1, n = !1;
                        var s = e.ui.keyCode;
                        switch (i.keyCode) {
                            case s.PAGE_UP:
                                t = !0, this._move("previousPage", i);
                                break;
                            case s.PAGE_DOWN:
                                t = !0, this._move("nextPage", i);
                                break;
                            case s.UP:
                                t = !0, this._keyEvent("previous", i);
                                break;
                            case s.DOWN:
                                t = !0, this._keyEvent("next", i);
                                break;
                            case s.ENTER:
                                this.menu.active && (t = !0, i.preventDefault(), this.menu.select(i));
                                break;
                            case s.TAB:
                                this.menu.active && this.menu.select(i);
                                break;
                            case s.ESCAPE:
                                this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(i), i.preventDefault());
                                break;
                            default:
                                n = !0, this._searchTimeout(i)
                        }
                    },
                    keypress: function(r) {
                        if (t) return t = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && r.preventDefault(), void 0;
                        if (!n) {
                            var i = e.ui.keyCode;
                            switch (r.keyCode) {
                                case i.PAGE_UP:
                                    this._move("previousPage", r);
                                    break;
                                case i.PAGE_DOWN:
                                    this._move("nextPage", r);
                                    break;
                                case i.UP:
                                    this._keyEvent("previous", r);
                                    break;
                                case i.DOWN:
                                    this._keyEvent("next", r)
                            }
                        }
                    },
                    input: function(e) {
                        return r ? (r = !1, e.preventDefault(), void 0) : (this._searchTimeout(e), void 0)
                    },
                    focus: function() {
                        this.selectedItem = null, this.previous = this._value()
                    },
                    blur: function(e) {
                        return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(e), this._change(e), void 0)
                    }
                }), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                    role: null
                }).hide().menu("instance"), this._on(this.menu.element, {
                    mousedown: function(t) {
                        t.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                            delete this.cancelBlur
                        });
                        var n = this.menu.element[0];
                        e(t.target).closest(".ui-menu-item").length || this._delay(function() {
                            var t = this;
                            this.document.one("mousedown", function(r) {
                                r.target === t.element[0] || r.target === n || e.contains(n, r.target) || t.close()
                            })
                        })
                    },
                    menufocus: function(t, n) {
                        var r, i;
                        return this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type)) ? (this.menu.blur(), this.document.one("mousemove", function() {
                            e(t.target).trigger(t.originalEvent)
                        }), void 0) : (i = n.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", t, {
                            item: i
                        }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(i.value), r = n.item.attr("aria-label") || i.value, r && e.trim(r).length && (this.liveRegion.children().hide(), e("<div>").text(r).appendTo(this.liveRegion)), void 0)
                    },
                    menuselect: function(e, t) {
                        var n = t.item.data("ui-autocomplete-item"),
                            r = this.previous;
                        this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = r, this._delay(function() {
                            this.previous = r, this.selectedItem = n
                        })), !1 !== this._trigger("select", e, {
                            item: n
                        }) && this._value(n.value), this.term = this._value(), this.close(e), this.selectedItem = n
                    }
                }), this.liveRegion = e("<span>", {
                    role: "status",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body), this._on(this.window, {
                    beforeunload: function() {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _destroy: function() {
                clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
            },
            _setOption: function(e, t) {
                this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this._appendTo()), "disabled" === e && t && this.xhr && this.xhr.abort()
            },
            _appendTo: function() {
                var t = this.options.appendTo;
                return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
            },
            _initSource: function() {
                var t, n, r = this;
                e.isArray(this.options.source) ? (t = this.options.source, this.source = function(n, r) {
                    r(e.ui.autocomplete.filter(t, n.term))
                }) : "string" == typeof this.options.source ? (n = this.options.source, this.source = function(t, i) {
                    r.xhr && r.xhr.abort(), r.xhr = e.ajax({
                        url: n,
                        data: t,
                        dataType: "json",
                        success: function(e) {
                            i(e)
                        },
                        error: function() {
                            i([])
                        }
                    })
                }) : this.source = this.options.source
            },
            _searchTimeout: function(e) {
                clearTimeout(this.searching), this.searching = this._delay(function() {
                    var t = this.term === this._value(),
                        n = this.menu.element.is(":visible"),
                        r = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
                    (!t || t && !n && !r) && (this.selectedItem = null, this.search(null, e))
                }, this.options.delay)
            },
            search: function(e, t) {
                return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(e) : void 0
            },
            _search: function(e) {
                this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                    term: e
                }, this._response())
            },
            _response: function() {
                var t = ++this.requestIndex;
                return e.proxy(function(e) {
                    t === this.requestIndex && this.__response(e), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
                }, this)
            },
            __response: function(e) {
                e && (e = this._normalize(e)), this._trigger("response", null, {
                    content: e
                }), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
            },
            close: function(e) {
                this.cancelSearch = !0, this._close(e)
            },
            _close: function(e) {
                this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
            },
            _change: function(e) {
                this.previous !== this._value() && this._trigger("change", e, {
                    item: this.selectedItem
                })
            },
            _normalize: function(t) {
                return t.length && t[0].label && t[0].value ? t : e.map(t, function(t) {
                    return "string" == typeof t ? {
                        label: t,
                        value: t
                    } : e.extend({}, t, {
                        label: t.label || t.value,
                        value: t.value || t.label
                    })
                })
            },
            _suggest: function(t) {
                var n = this.menu.element.empty();
                this._renderMenu(n, t), this.isNewMenu = !0, this.menu.refresh(), n.show(), this._resizeMenu(), n.position(e.extend({
                    of: this.element
                }, this.options.position)), this.options.autoFocus && this.menu.next()
            },
            _resizeMenu: function() {
                var e = this.menu.element;
                e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function(t, n) {
                var r = this;
                e.each(n, function(e, n) {
                    r._renderItemData(t, n)
                })
            },
            _renderItemData: function(e, t) {
                return this._renderItem(e, t).data("ui-autocomplete-item", t)
            },
            _renderItem: function(t, n) {
                return e("<li>").text(n.label).appendTo(t)
            },
            _move: function(e, t) {
                return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this.isMultiLine || this._value(this.term), this.menu.blur(), void 0) : (this.menu[e](t), void 0) : (this.search(null, t), void 0)
            },
            widget: function() {
                return this.menu.element
            },
            _value: function() {
                return this.valueMethod.apply(this.element, arguments)
            },
            _keyEvent: function(e, t) {
                (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(e, t), t.preventDefault())
            }
        }), e.extend(e.ui.autocomplete, {
            escapeRegex: function(e) {
                return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            },
            filter: function(t, n) {
                var r = RegExp(e.ui.autocomplete.escapeRegex(n), "i");
                return e.grep(t, function(e) {
                    return r.test(e.label || e.value || e)
                })
            }
        }), e.widget("ui.autocomplete", e.ui.autocomplete, {
            options: {
                messages: {
                    noResults: "No search results.",
                    results: function(e) {
                        return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                    }
                }
            },
            __response: function(t) {
                var n;
                this._superApply(arguments), this.options.disabled || this.cancelSearch || (n = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.children().hide(), e("<div>").text(n).appendTo(this.liveRegion))
            }
        }), e.ui.autocomplete;
    var h, p = "ui-button ui-widget ui-state-default ui-corner-all",
        d = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        v = function() {
            var t = e(this);
            setTimeout(function() {
                t.find(":ui-button").button("refresh")
            }, 1)
        },
        m = function(t) {
            var n = t.name,
                r = t.form,
                i = e([]);
            return n && (n = n.replace(/'/g, "\\'"), i = r ? e(r).find("[name='" + n + "'][type=radio]") : e("[name='" + n + "'][type=radio]", t.ownerDocument).filter(function() {
                return !this.form
            })), i
        };
    e.widget("ui.button", {
        version: "1.11.1",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, v), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
            var t = this,
                n = this.options,
                r = "checkbox" === this.type || "radio" === this.type,
                i = r ? "" : "ui-state-active";
            null === n.label && (n.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(p).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                n.disabled || this === h && e(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace, function() {
                n.disabled || e(this).removeClass(i)
            }).bind("click" + this.eventNamespace, function(e) {
                n.disabled && (e.preventDefault(), e.stopImmediatePropagation())
            }), this._on({
                focus: function() {
                    this.buttonElement.addClass("ui-state-focus")
                },
                blur: function() {
                    this.buttonElement.removeClass("ui-state-focus")
                }
            }), r && this.element.bind("change" + this.eventNamespace, function() {
                t.refresh()
            }), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                return n.disabled ? !1 : void 0
            }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (n.disabled) return !1;
                e(this).addClass("ui-state-active"), t.buttonElement.attr("aria-pressed", "true");
                var r = t.element[0];
                m(r).not(r).map(function() {
                    return e(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                return n.disabled ? !1 : (e(this).addClass("ui-state-active"), h = this, t.document.one("mouseup", function() {
                    h = null
                }), void 0)
            }).bind("mouseup" + this.eventNamespace, function() {
                return n.disabled ? !1 : (e(this).removeClass("ui-state-active"), void 0)
            }).bind("keydown" + this.eventNamespace, function(t) {
                return n.disabled ? !1 : ((t.keyCode === e.ui.keyCode.SPACE || t.keyCode === e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active"), void 0)
            }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                e(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function(t) {
                t.keyCode === e.ui.keyCode.SPACE && e(this).click()
            })), this._setOption("disabled", n.disabled), this._resetButton()
        },
        _determineButtonType: function() {
            var e, t, n;
            this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (e = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass("ui-helper-hidden-accessible"), n = this.element.is(":checked"), n && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", n)) : this.buttonElement = this.element
        },
        widget: function() {
            return this.buttonElement
        },
        _destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(p + " ui-state-active " + d).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function(e, t) {
            return this._super(e, t), "disabled" === e ? (this.widget().toggleClass("ui-state-disabled", !!t), this.element.prop("disabled", !!t), t && ("checkbox" === this.type || "radio" === this.type ? this.buttonElement.removeClass("ui-state-focus") : this.buttonElement.removeClass("ui-state-focus ui-state-active")), void 0) : (this._resetButton(), void 0)
        },
        refresh: function() {
            var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOption("disabled", t), "radio" === this.type ? m(this.element[0]).each(function() {
                e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function() {
            if ("input" === this.type) return this.options.label && this.element.val(this.options.label), void 0;
            var t = this.buttonElement.removeClass(d),
                n = e("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),
                r = this.options.icons,
                i = r.primary && r.secondary,
                s = [];
            r.primary || r.secondary ? (this.options.text && s.push("ui-button-text-icon" + (i ? "s" : r.primary ? "-primary" : "-secondary")), r.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + r.primary + "'></span>"), r.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + r.secondary + "'></span>"), this.options.text || (s.push(i ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", e.trim(n)))) : s.push("ui-button-text-only"), t.addClass(s.join(" "))
        }
    }), e.widget("ui.buttonset", {
        version: "1.11.1",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
        },
        _create: function() {
            this.element.addClass("ui-buttonset")
        },
        _init: function() {
            this.refresh()
        },
        _setOption: function(e, t) {
            "disabled" === e && this.buttons.button("option", e, t), this._super(e, t)
        },
        refresh: function() {
            var t = "rtl" === this.element.css("direction"),
                n = this.element.find(this.options.items),
                r = n.filter(":ui-button");
            n.not(":ui-button").button(), r.button("refresh"), this.buttons = n.map(function() {
                return e(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function() {
            this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
                return e(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    }), e.ui.button, e.extend(e.ui, {
        datepicker: {
            version: "1.11.1"
        }
    });
    var g;
    e.extend(i.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(e) {
            return u(this._defaults, e || {}), this
        },
        _attachDatepicker: function(t, n) {
            var r, i, s;
            r = t.nodeName.toLowerCase(), i = "div" === r || "span" === r, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), s = this._newInst(e(t), i), s.settings = e.extend({}, n || {}), "input" === r ? this._connectDatepicker(t, s) : i && this._inlineDatepicker(t, s)
        },
        _newInst: function(t, n) {
            var r = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: r,
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: n,
                dpDiv: n ? s(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(t, n) {
            var r = e(t);
            n.append = e([]), n.trigger = e([]), r.hasClass(this.markerClassName) || (this._attachments(r, n), r.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(n), e.data(t, "datepicker", n), n.settings.disabled && this._disableDatepicker(t))
        },
        _attachments: function(t, n) {
            var r, i, s, o = this._get(n, "appendText"),
                u = this._get(n, "isRTL");
            n.append && n.append.remove(), o && (n.append = e("<span class='" + this._appendClass + "'>" + o + "</span>"), t[u ? "before" : "after"](n.append)), t.unbind("focus", this._showDatepicker), n.trigger && n.trigger.remove(), r = this._get(n, "showOn"), ("focus" === r || "both" === r) && t.focus(this._showDatepicker), ("button" === r || "both" === r) && (i = this._get(n, "buttonText"), s = this._get(n, "buttonImage"), n.trigger = e(this._get(n, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
                src: s,
                alt: i,
                title: i
            }) : e("<button type='button'></button>").addClass(this._triggerClass).html(s ? e("<img/>").attr({
                src: s,
                alt: i,
                title: i
            }) : i)), t[u ? "before" : "after"](n.trigger), n.trigger.click(function() {
                return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1
            }))
        },
        _autoSize: function(e) {
            if (this._get(e, "autoSize") && !e.inline) {
                var t, n, r, i, s = new Date(2009, 11, 20),
                    o = this._get(e, "dateFormat");
                o.match(/[DM]/) && (t = function(e) {
                    for (n = 0, r = 0, i = 0; e.length > i; i++) e[i].length > n && (n = e[i].length, r = i);
                    return r
                }, s.setMonth(t(this._get(e, o.match(/MM/) ? "monthNames" : "monthNamesShort"))), s.setDate(t(this._get(e, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - s.getDay())), e.input.attr("size", this._formatDate(e, s).length)
            }
        },
        _inlineDatepicker: function(t, n) {
            var r = e(t);
            r.hasClass(this.markerClassName) || (r.addClass(this.markerClassName).append(n.dpDiv), e.data(t, "datepicker", n), this._setDate(n, this._getDefaultDate(n), !0), this._updateDatepicker(n), this._updateAlternate(n), n.settings.disabled && this._disableDatepicker(t), n.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(t, n, r, i, s) {
            var o, a, f, l, c, h = this._dialogInst;
            return h || (this.uuid += 1, o = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + o + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), h = this._dialogInst = this._newInst(this._dialogInput, !1), h.settings = {}, e.data(this._dialogInput[0], "datepicker", h)), u(h.settings, i || {}), n = n && n.constructor === Date ? this._formatDate(h, n) : n, this._dialogInput.val(n), this._pos = s ? s.length ? s : [s.pageX, s.pageY] : null, this._pos || (a = document.documentElement.clientWidth, f = document.documentElement.clientHeight, l = document.documentElement.scrollLeft || document.body.scrollLeft, c = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [a / 2 - 100 + l, f / 2 - 150 + c]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), h.settings.onSelect = r, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], "datepicker", h), this
        },
        _destroyDatepicker: function(t) {
            var n, r = e(t),
                i = e.data(t, "datepicker");
            r.hasClass(this.markerClassName) && (n = t.nodeName.toLowerCase(), e.removeData(t, "datepicker"), "input" === n ? (i.append.remove(), i.trigger.remove(), r.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === n || "span" === n) && r.removeClass(this.markerClassName).empty())
        },
        _enableDatepicker: function(t) {
            var n, r, i = e(t),
                s = e.data(t, "datepicker");
            i.hasClass(this.markerClassName) && (n = t.nodeName.toLowerCase(), "input" === n ? (t.disabled = !1, s.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === n || "span" === n) && (r = i.children("." + this._inlineClass), r.children().removeClass("ui-state-disabled"), r.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function(e) {
                return e === t ? null : e
            }))
        },
        _disableDatepicker: function(t) {
            var n, r, i = e(t),
                s = e.data(t, "datepicker");
            i.hasClass(this.markerClassName) && (n = t.nodeName.toLowerCase(), "input" === n ? (t.disabled = !0, s.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === n || "span" === n) && (r = i.children("." + this._inlineClass), r.children().addClass("ui-state-disabled"), r.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function(e) {
                return e === t ? null : e
            }), this._disabledInputs[this._disabledInputs.length] = t)
        },
        _isDisabledDatepicker: function(e) {
            if (!e) return !1;
            for (var t = 0; this._disabledInputs.length > t; t++)
                if (this._disabledInputs[t] === e) return !0;
            return !1
        },
        _getInst: function(t) {
            try {
                return e.data(t, "datepicker")
            } catch (n) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(t, n, r) {
            var i, s, o, a, f = this._getInst(t);
            return 2 === arguments.length && "string" == typeof n ? "defaults" === n ? e.extend({}, e.datepicker._defaults) : f ? "all" === n ? e.extend({}, f.settings) : this._get(f, n) : null : (i = n || {}, "string" == typeof n && (i = {}, i[n] = r), f && (this._curInst === f && this._hideDatepicker(), s = this._getDateDatepicker(t, !0), o = this._getMinMaxDate(f, "min"), a = this._getMinMaxDate(f, "max"), u(f.settings, i), null !== o && void 0 !== i.dateFormat && void 0 === i.minDate && (f.settings.minDate = this._formatDate(f, o)), null !== a && void 0 !== i.dateFormat && void 0 === i.maxDate && (f.settings.maxDate = this._formatDate(f, a)), "disabled" in i && (i.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(e(t), f), this._autoSize(f), this._setDate(f, s), this._updateAlternate(f), this._updateDatepicker(f)), void 0)
        },
        _changeDatepicker: function(e, t, n) {
            this._optionDatepicker(e, t, n)
        },
        _refreshDatepicker: function(e) {
            var t = this._getInst(e);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function(e, t) {
            var n = this._getInst(e);
            n && (this._setDate(n, t), this._updateDatepicker(n), this._updateAlternate(n))
        },
        _getDateDatepicker: function(e, t) {
            var n = this._getInst(e);
            return n && !n.inline && this._setDateFromField(n, t), n ? this._getDate(n) : null
        },
        _doKeyDown: function(t) {
            var n, r, i, s = e.datepicker._getInst(t.target),
                o = !0,
                u = s.dpDiv.is(".ui-datepicker-rtl");
            if (s._keyEvent = !0, e.datepicker._datepickerShowing) switch (t.keyCode) {
                case 9:
                    e.datepicker._hideDatepicker(), o = !1;
                    break;
                case 13:
                    return i = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", s.dpDiv), i[0] && e.datepicker._selectDay(t.target, s.selectedMonth, s.selectedYear, i[0]), n = e.datepicker._get(s, "onSelect"), n ? (r = e.datepicker._formatDate(s), n.apply(s.input ? s.input[0] : null, [r, s])) : e.datepicker._hideDatepicker(), !1;
                case 27:
                    e.datepicker._hideDatepicker();
                    break;
                case 33:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(s, "stepBigMonths") : -e.datepicker._get(s, "stepMonths"), "M");
                    break;
                case 34:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(s, "stepBigMonths") : +e.datepicker._get(s, "stepMonths"), "M");
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), o = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), o = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, u ? 1 : -1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(s, "stepBigMonths") : -e.datepicker._get(s, "stepMonths"), "M");
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), o = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, u ? -1 : 1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(s, "stepBigMonths") : +e.datepicker._get(s, "stepMonths"), "M");
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), o = t.ctrlKey || t.metaKey;
                    break;
                default:
                    o = !1
            } else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : o = !1;
            o && (t.preventDefault(), t.stopPropagation())
        },
        _doKeyPress: function(t) {
            var n, r, i = e.datepicker._getInst(t.target);
            return e.datepicker._get(i, "constrainInput") ? (n = e.datepicker._possibleChars(e.datepicker._get(i, "dateFormat")), r = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || " " > r || !n || n.indexOf(r) > -1) : void 0
        },
        _doKeyUp: function(t) {
            var n, r = e.datepicker._getInst(t.target);
            if (r.input.val() !== r.lastVal) try {
                n = e.datepicker.parseDate(e.datepicker._get(r, "dateFormat"), r.input ? r.input.val() : null, e.datepicker._getFormatConfig(r)), n && (e.datepicker._setDateFromField(r), e.datepicker._updateAlternate(r), e.datepicker._updateDatepicker(r))
            } catch (i) {}
            return !0
        },
        _showDatepicker: function(t) {
            if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = e("input", t.parentNode)[0]), !e.datepicker._isDisabledDatepicker(t) && e.datepicker._lastInput !== t) {
                var n, i, s, o, a, f, l;
                n = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== n && (e.datepicker._curInst.dpDiv.stop(!0, !0), n && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), i = e.datepicker._get(n, "beforeShow"), s = i ? i.apply(t, [t, n]) : {}, s !== !1 && (u(n.settings, s), n.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(n), e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), o = !1, e(t).parents().each(function() {
                    return o |= "fixed" === e(this).css("position"), !o
                }), a = {
                    left: e.datepicker._pos[0],
                    top: e.datepicker._pos[1]
                }, e.datepicker._pos = null, n.dpDiv.empty(), n.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), e.datepicker._updateDatepicker(n), a = e.datepicker._checkOffset(n, a, o), n.dpDiv.css({
                    position: e.datepicker._inDialog && e.blockUI ? "static" : o ? "fixed" : "absolute",
                    display: "none",
                    left: a.left + "px",
                    top: a.top + "px"
                }), n.inline || (f = e.datepicker._get(n, "showAnim"), l = e.datepicker._get(n, "duration"), n.dpDiv.css("z-index", r(e(t)) + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[f] ? n.dpDiv.show(f, e.datepicker._get(n, "showOptions"), l) : n.dpDiv[f || "show"](f ? l : null), e.datepicker._shouldFocusInput(n) && n.input.focus(), e.datepicker._curInst = n))
            }
        },
        _updateDatepicker: function(t) {
            this.maxRows = 4, g = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
            var n, r = this._getNumberOfMonths(t),
                i = r[1],
                s = 17,
                u = t.dpDiv.find("." + this._dayOverClass + " a");
            u.length > 0 && o.apply(u.get(0)), t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), i > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + i).css("width", s * i + "em"), t.dpDiv[(1 !== r[0] || 1 !== r[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (n = t.yearshtml, setTimeout(function() {
                n === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), n = t.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function(e) {
            return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")
        },
        _checkOffset: function(t, n, r) {
            var i = t.dpDiv.outerWidth(),
                s = t.dpDiv.outerHeight(),
                o = t.input ? t.input.outerWidth() : 0,
                u = t.input ? t.input.outerHeight() : 0,
                a = document.documentElement.clientWidth + (r ? 0 : e(document).scrollLeft()),
                f = document.documentElement.clientHeight + (r ? 0 : e(document).scrollTop());
            return n.left -= this._get(t, "isRTL") ? i - o : 0, n.left -= r && n.left === t.input.offset().left ? e(document).scrollLeft() : 0, n.top -= r && n.top === t.input.offset().top + u ? e(document).scrollTop() : 0, n.left -= Math.min(n.left, n.left + i > a && a > i ? Math.abs(n.left + i - a) : 0), n.top -= Math.min(n.top, n.top + s > f && f > s ? Math.abs(s + u) : 0), n
        },
        _findPos: function(t) {
            for (var n, r = this._getInst(t), i = this._get(r, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));) t = t[i ? "previousSibling" : "nextSibling"];
            return n = e(t).offset(), [n.left, n.top]
        },
        _hideDatepicker: function(t) {
            var n, r, i, s, o = this._curInst;
            !o || t && o !== e.data(t, "datepicker") || this._datepickerShowing && (n = this._get(o, "showAnim"), r = this._get(o, "duration"), i = function() {
                e.datepicker._tidyDialog(o)
            }, e.effects && (e.effects.effect[n] || e.effects[n]) ? o.dpDiv.hide(n, e.datepicker._get(o, "showOptions"), r, i) : o.dpDiv["slideDown" === n ? "slideUp" : "fadeIn" === n ? "fadeOut" : "hide"](n ? r : null, i), n || i(), this._datepickerShowing = !1, s = this._get(o, "onClose"), s && s.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function(e) {
            e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(t) {
            if (e.datepicker._curInst) {
                var n = e(t.target),
                    r = e.datepicker._getInst(n[0]);
                (n[0].id !== e.datepicker._mainDivId && 0 === n.parents("#" + e.datepicker._mainDivId).length && !n.hasClass(e.datepicker.markerClassName) && !n.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || n.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== r) && e.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(t, n, r) {
            var i = e(t),
                s = this._getInst(i[0]);
            this._isDisabledDatepicker(i[0]) || (this._adjustInstDate(s, n + ("M" === r ? this._get(s, "showCurrentAtPos") : 0), r), this._updateDatepicker(s))
        },
        _gotoToday: function(t) {
            var n, r = e(t),
                i = this._getInst(r[0]);
            this._get(i, "gotoCurrent") && i.currentDay ? (i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear) : (n = new Date, i.selectedDay = n.getDate(), i.drawMonth = i.selectedMonth = n.getMonth(), i.drawYear = i.selectedYear = n.getFullYear()), this._notifyChange(i), this._adjustDate(r)
        },
        _selectMonthYear: function(t, n, r) {
            var i = e(t),
                s = this._getInst(i[0]);
            s["selected" + ("M" === r ? "Month" : "Year")] = s["draw" + ("M" === r ? "Month" : "Year")] = parseInt(n.options[n.selectedIndex].value, 10), this._notifyChange(s), this._adjustDate(i)
        },
        _selectDay: function(t, n, r, i) {
            var s, o = e(t);
            e(i).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || (s = this._getInst(o[0]), s.selectedDay = s.currentDay = e("a", i).html(), s.selectedMonth = s.currentMonth = n, s.selectedYear = s.currentYear = r, this._selectDate(t, this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear)))
        },
        _clearDate: function(t) {
            var n = e(t);
            this._selectDate(n, "")
        },
        _selectDate: function(t, n) {
            var r, i = e(t),
                s = this._getInst(i[0]);
            n = null != n ? n : this._formatDate(s), s.input && s.input.val(n), this._updateAlternate(s), r = this._get(s, "onSelect"), r ? r.apply(s.input ? s.input[0] : null, [n, s]) : s.input && s.input.trigger("change"), s.inline ? this._updateDatepicker(s) : (this._hideDatepicker(), this._lastInput = s.input[0], "object" != typeof s.input[0] && s.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function(t) {
            var n, r, i, s = this._get(t, "altField");
            s && (n = this._get(t, "altFormat") || this._get(t, "dateFormat"), r = this._getDate(t), i = this.formatDate(n, r, this._getFormatConfig(t)), e(s).each(function() {
                e(this).val(i)
            }))
        },
        noWeekends: function(e) {
            var t = e.getDay();
            return [t > 0 && 6 > t, ""]
        },
        iso8601Week: function(e) {
            var t, n = new Date(e.getTime());
            return n.setDate(n.getDate() + 4 - (n.getDay() || 7)), t = n.getTime(), n.setMonth(0), n.setDate(1), Math.floor(Math.round((t - n) / 864e5) / 7) + 1
        },
        parseDate: function(t, n, r) {
            if (null == t || null == n) throw "Invalid arguments";
            if (n = "object" == typeof n ? "" + n : n + "", "" === n) return null;
            var i, s, o, u, a = 0,
                f = (r ? r.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                l = "string" != typeof f ? f : (new Date).getFullYear() % 100 + parseInt(f, 10),
                c = (r ? r.dayNamesShort : null) || this._defaults.dayNamesShort,
                h = (r ? r.dayNames : null) || this._defaults.dayNames,
                p = (r ? r.monthNamesShort : null) || this._defaults.monthNamesShort,
                d = (r ? r.monthNames : null) || this._defaults.monthNames,
                v = -1,
                m = -1,
                g = -1,
                y = -1,
                b = !1,
                w = function(e) {
                    var n = t.length > i + 1 && t.charAt(i + 1) === e;
                    return n && i++, n
                },
                E = function(e) {
                    var t = w(e),
                        r = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2,
                        i = "y" === e ? r : 1,
                        s = RegExp("^\\d{" + i + "," + r + "}"),
                        o = n.substring(a).match(s);
                    if (!o) throw "Missing number at position " + a;
                    return a += o[0].length, parseInt(o[0], 10)
                },
                S = function(t, r, i) {
                    var s = -1,
                        o = e.map(w(t) ? i : r, function(e, t) {
                            return [
                                [t, e]
                            ]
                        }).sort(function(e, t) {
                            return -(e[1].length - t[1].length)
                        });
                    if (e.each(o, function(e, t) {
                            var r = t[1];
                            return n.substr(a, r.length).toLowerCase() === r.toLowerCase() ? (s = t[0], a += r.length, !1) : void 0
                        }), -1 !== s) return s + 1;
                    throw "Unknown name at position " + a
                },
                x = function() {
                    if (n.charAt(a) !== t.charAt(i)) throw "Unexpected literal at position " + a;
                    a++
                };
            for (i = 0; t.length > i; i++)
                if (b) "'" !== t.charAt(i) || w("'") ? x() : b = !1;
                else switch (t.charAt(i)) {
                    case "d":
                        g = E("d");
                        break;
                    case "D":
                        S("D", c, h);
                        break;
                    case "o":
                        y = E("o");
                        break;
                    case "m":
                        m = E("m");
                        break;
                    case "M":
                        m = S("M", p, d);
                        break;
                    case "y":
                        v = E("y");
                        break;
                    case "@":
                        u = new Date(E("@")), v = u.getFullYear(), m = u.getMonth() + 1, g = u.getDate();
                        break;
                    case "!":
                        u = new Date((E("!") - this._ticksTo1970) / 1e4), v = u.getFullYear(), m = u.getMonth() + 1, g = u.getDate();
                        break;
                    case "'":
                        w("'") ? x() : b = !0;
                        break;
                    default:
                        x()
                }
                if (n.length > a && (o = n.substr(a), !/^\s+/.test(o))) throw "Extra/unparsed characters found in date: " + o;
            if (-1 === v ? v = (new Date).getFullYear() : 100 > v && (v += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (l >= v ? 0 : -100)), y > -1)
                for (m = 1, g = y;;) {
                    if (s = this._getDaysInMonth(v, m - 1), s >= g) break;
                    m++, g -= s
                }
            if (u = this._daylightSavingAdjust(new Date(v, m - 1, g)), u.getFullYear() !== v || u.getMonth() + 1 !== m || u.getDate() !== g) throw "Invalid date";
            return u
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function(e, t, n) {
            if (!t) return "";
            var r, i = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                s = (n ? n.dayNames : null) || this._defaults.dayNames,
                o = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                u = (n ? n.monthNames : null) || this._defaults.monthNames,
                a = function(t) {
                    var n = e.length > r + 1 && e.charAt(r + 1) === t;
                    return n && r++, n
                },
                f = function(e, t, n) {
                    var r = "" + t;
                    if (a(e))
                        for (; n > r.length;) r = "0" + r;
                    return r
                },
                l = function(e, t, n, r) {
                    return a(e) ? r[t] : n[t]
                },
                c = "",
                h = !1;
            if (t)
                for (r = 0; e.length > r; r++)
                    if (h) "'" !== e.charAt(r) || a("'") ? c += e.charAt(r) : h = !1;
                    else switch (e.charAt(r)) {
                        case "d":
                            c += f("d", t.getDate(), 2);
                            break;
                        case "D":
                            c += l("D", t.getDay(), i, s);
                            break;
                        case "o":
                            c += f("o", Math.round(((new Date(t.getFullYear(), t.getMonth(), t.getDate())).getTime() - (new Date(t.getFullYear(), 0, 0)).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            c += f("m", t.getMonth() + 1, 2);
                            break;
                        case "M":
                            c += l("M", t.getMonth(), o, u);
                            break;
                        case "y":
                            c += a("y") ? t.getFullYear() : (10 > t.getYear() % 100 ? "0" : "") + t.getYear() % 100;
                            break;
                        case "@":
                            c += t.getTime();
                            break;
                        case "!":
                            c += 1e4 * t.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            a("'") ? c += "'" : h = !0;
                            break;
                        default:
                            c += e.charAt(r)
                    }
                    return c
        },
        _possibleChars: function(e) {
            var t, n = "",
                r = !1,
                i = function(n) {
                    var r = e.length > t + 1 && e.charAt(t + 1) === n;
                    return r && t++, r
                };
            for (t = 0; e.length > t; t++)
                if (r) "'" !== e.charAt(t) || i("'") ? n += e.charAt(t) : r = !1;
                else switch (e.charAt(t)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        n += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        i("'") ? n += "'" : r = !0;
                        break;
                    default:
                        n += e.charAt(t)
                }
                return n
        },
        _get: function(e, t) {
            return void 0 !== e.settings[t] ? e.settings[t] : this._defaults[t]
        },
        _setDateFromField: function(e, t) {
            if (e.input.val() !== e.lastVal) {
                var n = this._get(e, "dateFormat"),
                    r = e.lastVal = e.input ? e.input.val() : null,
                    i = this._getDefaultDate(e),
                    s = i,
                    o = this._getFormatConfig(e);
                try {
                    s = this.parseDate(n, r, o) || i
                } catch (u) {
                    r = t ? "" : r
                }
                e.selectedDay = s.getDate(), e.drawMonth = e.selectedMonth = s.getMonth(), e.drawYear = e.selectedYear = s.getFullYear(), e.currentDay = r ? s.getDate() : 0, e.currentMonth = r ? s.getMonth() : 0, e.currentYear = r ? s.getFullYear() : 0, this._adjustInstDate(e)
            }
        },
        _getDefaultDate: function(e) {
            return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
        },
        _determineDate: function(t, n, r) {
            var i = function(e) {
                    var t = new Date;
                    return t.setDate(t.getDate() + e), t
                },
                s = function(n) {
                    try {
                        return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), n, e.datepicker._getFormatConfig(t))
                    } catch (r) {}
                    for (var i = (n.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, s = i.getFullYear(), o = i.getMonth(), u = i.getDate(), a = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, f = a.exec(n); f;) {
                        switch (f[2] || "d") {
                            case "d":
                            case "D":
                                u += parseInt(f[1], 10);
                                break;
                            case "w":
                            case "W":
                                u += 7 * parseInt(f[1], 10);
                                break;
                            case "m":
                            case "M":
                                o += parseInt(f[1], 10), u = Math.min(u, e.datepicker._getDaysInMonth(s, o));
                                break;
                            case "y":
                            case "Y":
                                s += parseInt(f[1], 10), u = Math.min(u, e.datepicker._getDaysInMonth(s, o))
                        }
                        f = a.exec(n)
                    }
                    return new Date(s, o, u)
                },
                o = null == n || "" === n ? r : "string" == typeof n ? s(n) : "number" == typeof n ? isNaN(n) ? r : i(n) : new Date(n.getTime());
            return o = o && "Invalid Date" == "" + o ? r : o, o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o)
        },
        _daylightSavingAdjust: function(e) {
            return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
        },
        _setDate: function(e, t, n) {
            var r = !t,
                i = e.selectedMonth,
                s = e.selectedYear,
                o = this._restrictMinMax(e, this._determineDate(e, t, new Date));
            e.selectedDay = e.currentDay = o.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth(), e.drawYear = e.selectedYear = e.currentYear = o.getFullYear(), i === e.selectedMonth && s === e.selectedYear || n || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(r ? "" : this._formatDate(e))
        },
        _getDate: function(e) {
            var t = !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return t
        },
        _attachHandlers: function(t) {
            var n = this._get(t, "stepMonths"),
                r = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map(function() {
                var t = {
                    prev: function() {
                        e.datepicker._adjustDate(r, -n, "M")
                    },
                    next: function() {
                        e.datepicker._adjustDate(r, +n, "M")
                    },
                    hide: function() {
                        e.datepicker._hideDatepicker()
                    },
                    today: function() {
                        e.datepicker._gotoToday(r)
                    },
                    selectDay: function() {
                        return e.datepicker._selectDay(r, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    },
                    selectMonth: function() {
                        return e.datepicker._selectMonthYear(r, this, "M"), !1
                    },
                    selectYear: function() {
                        return e.datepicker._selectMonthYear(r, this, "Y"), !1
                    }
                };
                e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(e) {
            var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k, L, A, O, M, _, D, P, H, B, j, F, I, q = new Date,
                R = this._daylightSavingAdjust(new Date(q.getFullYear(), q.getMonth(), q.getDate())),
                U = this._get(e, "isRTL"),
                z = this._get(e, "showButtonPanel"),
                W = this._get(e, "hideIfNoPrevNext"),
                X = this._get(e, "navigationAsDateFormat"),
                V = this._getNumberOfMonths(e),
                $ = this._get(e, "showCurrentAtPos"),
                J = this._get(e, "stepMonths"),
                K = 1 !== V[0] || 1 !== V[1],
                Q = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                G = this._getMinMaxDate(e, "min"),
                Y = this._getMinMaxDate(e, "max"),
                Z = e.drawMonth - $,
                et = e.drawYear;
            if (0 > Z && (Z += 12, et--), Y)
                for (t = this._daylightSavingAdjust(new Date(Y.getFullYear(), Y.getMonth() - V[0] * V[1] + 1, Y.getDate())), t = G && G > t ? G : t; this._daylightSavingAdjust(new Date(et, Z, 1)) > t;) Z--, 0 > Z && (Z = 11, et--);
            for (e.drawMonth = Z, e.drawYear = et, n = this._get(e, "prevText"), n = X ? this.formatDate(n, this._daylightSavingAdjust(new Date(et, Z - J, 1)), this._getFormatConfig(e)) : n, r = this._canAdjustMonth(e, -1, et, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "e" : "w") + "'>" + n + "</span></a>" : W ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "e" : "w") + "'>" + n + "</span></a>", i = this._get(e, "nextText"), i = X ? this.formatDate(i, this._daylightSavingAdjust(new Date(et, Z + J, 1)), this._getFormatConfig(e)) : i, s = this._canAdjustMonth(e, 1, et, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "w" : "e") + "'>" + i + "</span></a>" : W ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "w" : "e") + "'>" + i + "</span></a>", o = this._get(e, "currentText"), u = this._get(e, "gotoCurrent") && e.currentDay ? Q : R, o = X ? this.formatDate(o, u, this._getFormatConfig(e)) : o, a = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", f = z ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (U ? a : "") + (this._isInRange(e, u) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + "</button>" : "") + (U ? "" : a) + "</div>" : "", l = parseInt(this._get(e, "firstDay"), 10), l = isNaN(l) ? 0 : l, c = this._get(e, "showWeek"), h = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), d = this._get(e, "monthNames"), v = this._get(e, "monthNamesShort"), m = this._get(e, "beforeShowDay"), g = this._get(e, "showOtherMonths"), y = this._get(e, "selectOtherMonths"), b = this._getDefaultDate(e), w = "", S = 0; V[0] > S; S++) {
                for (x = "", this.maxRows = 4, T = 0; V[1] > T; T++) {
                    if (N = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay)), C = " ui-corner-all", k = "", K) {
                        if (k += "<div class='ui-datepicker-group", V[1] > 1) switch (T) {
                            case 0:
                                k += " ui-datepicker-group-first", C = " ui-corner-" + (U ? "right" : "left");
                                break;
                            case V[1] - 1:
                                k += " ui-datepicker-group-last", C = " ui-corner-" + (U ? "left" : "right");
                                break;
                            default:
                                k += " ui-datepicker-group-middle", C = ""
                        }
                        k += "'>"
                    }
                    for (k += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + C + "'>" + (/all|left/.test(C) && 0 === S ? U ? s : r : "") + (/all|right/.test(C) && 0 === S ? U ? r : s : "") + this._generateMonthYearHeader(e, Z, et, G, Y, S > 0 || T > 0, d, v) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", L = c ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", E = 0; 7 > E; E++) A = (E + l) % 7, L += "<th scope='col'" + ((E + l + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + h[A] + "'>" + p[A] + "</span></th>";
                    for (k += L + "</tr></thead><tbody>", O = this._getDaysInMonth(et, Z), et === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, O)), M = (this._getFirstDayOfMonth(et, Z) - l + 7) % 7, _ = Math.ceil((M + O) / 7), D = K ? this.maxRows > _ ? this.maxRows : _ : _, this.maxRows = D, P = this._daylightSavingAdjust(new Date(et, Z, 1 - M)), H = 0; D > H; H++) {
                        for (k += "<tr>", B = c ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(P) + "</td>" : "", E = 0; 7 > E; E++) j = m ? m.apply(e.input ? e.input[0] : null, [P]) : [!0, ""], F = P.getMonth() !== Z, I = F && !y || !j[0] || G && G > P || Y && P > Y, B += "<td class='" + ((E + l + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (P.getTime() === N.getTime() && Z === e.selectedMonth && e._keyEvent || b.getTime() === P.getTime() && b.getTime() === N.getTime() ? " " + this._dayOverClass : "") + (I ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !g ? "" : " " + j[1] + (P.getTime() === Q.getTime() ? " " + this._currentClass : "") + (P.getTime() === R.getTime() ? " ui-datepicker-today" : "")) + "'" + (F && !g || !j[2] ? "" : " title='" + j[2].replace(/'/g, "&#39;") + "'") + (I ? "" : " data-handler='selectDay' data-event='click' data-month='" + P.getMonth() + "' data-year='" + P.getFullYear() + "'") + ">" + (F && !g ? "&#xa0;" : I ? "<span class='ui-state-default'>" + P.getDate() + "</span>" : "<a class='ui-state-default" + (P.getTime() === R.getTime() ? " ui-state-highlight" : "") + (P.getTime() === Q.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + P.getDate() + "</a>") + "</td>", P.setDate(P.getDate() + 1), P = this._daylightSavingAdjust(P);
                        k += B + "</tr>"
                    }
                    Z++, Z > 11 && (Z = 0, et++), k += "</tbody></table>" + (K ? "</div>" + (V[0] > 0 && T === V[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += k
                }
                w += x
            }
            return w += f, e._keyEvent = !1, w
        },
        _generateMonthYearHeader: function(e, t, n, r, i, s, o, u) {
            var a, f, l, c, h, p, d, v, m = this._get(e, "changeMonth"),
                g = this._get(e, "changeYear"),
                y = this._get(e, "showMonthAfterYear"),
                b = "<div class='ui-datepicker-title'>",
                w = "";
            if (s || !m) w += "<span class='ui-datepicker-month'>" + o[t] + "</span>";
            else {
                for (a = r && r.getFullYear() === n, f = i && i.getFullYear() === n, w += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", l = 0; 12 > l; l++)(!a || l >= r.getMonth()) && (!f || i.getMonth() >= l) && (w += "<option value='" + l + "'" + (l === t ? " selected='selected'" : "") + ">" + u[l] + "</option>");
                w += "</select>"
            }
            if (y || (b += w + (!s && m && g ? "" : "&#xa0;")), !e.yearshtml)
                if (e.yearshtml = "", s || !g) b += "<span class='ui-datepicker-year'>" + n + "</span>";
                else {
                    for (c = this._get(e, "yearRange").split(":"), h = (new Date).getFullYear(), p = function(e) {
                            var t = e.match(/c[+\-].*/) ? n + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? h + parseInt(e, 10) : parseInt(e, 10);
                            return isNaN(t) ? h : t
                        }, d = p(c[0]), v = Math.max(d, p(c[1] || "")), d = r ? Math.max(d, r.getFullYear()) : d, v = i ? Math.min(v, i.getFullYear()) : v, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; v >= d; d++) e.yearshtml += "<option value='" + d + "'" + (d === n ? " selected='selected'" : "") + ">" + d + "</option>";
                    e.yearshtml += "</select>", b += e.yearshtml, e.yearshtml = null
                }
            return b += this._get(e, "yearSuffix"), y && (b += (!s && m && g ? "" : "&#xa0;") + w), b += "</div>"
        },
        _adjustInstDate: function(e, t, n) {
            var r = e.drawYear + ("Y" === n ? t : 0),
                i = e.drawMonth + ("M" === n ? t : 0),
                s = Math.min(e.selectedDay, this._getDaysInMonth(r, i)) + ("D" === n ? t : 0),
                o = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(r, i, s)));
            e.selectedDay = o.getDate(), e.drawMonth = e.selectedMonth = o.getMonth(), e.drawYear = e.selectedYear = o.getFullYear(), ("M" === n || "Y" === n) && this._notifyChange(e)
        },
        _restrictMinMax: function(e, t) {
            var n = this._getMinMaxDate(e, "min"),
                r = this._getMinMaxDate(e, "max"),
                i = n && n > t ? n : t;
            return r && i > r ? r : i
        },
        _notifyChange: function(e) {
            var t = this._get(e, "onChangeMonthYear");
            t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
        },
        _getNumberOfMonths: function(e) {
            var t = this._get(e, "numberOfMonths");
            return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
        },
        _getMinMaxDate: function(e, t) {
            return this._determineDate(e, this._get(e, t + "Date"), null)
        },
        _getDaysInMonth: function(e, t) {
            return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
        },
        _getFirstDayOfMonth: function(e, t) {
            return (new Date(e, t, 1)).getDay()
        },
        _canAdjustMonth: function(e, t, n, r) {
            var i = this._getNumberOfMonths(e),
                s = this._daylightSavingAdjust(new Date(n, r + (0 > t ? t : i[0] * i[1]), 1));
            return 0 > t && s.setDate(this._getDaysInMonth(s.getFullYear(), s.getMonth())), this._isInRange(e, s)
        },
        _isInRange: function(e, t) {
            var n, r, i = this._getMinMaxDate(e, "min"),
                s = this._getMinMaxDate(e, "max"),
                o = null,
                u = null,
                a = this._get(e, "yearRange");
            return a && (n = a.split(":"), r = (new Date).getFullYear(), o = parseInt(n[0], 10), u = parseInt(n[1], 10), n[0].match(/[+\-].*/) && (o += r), n[1].match(/[+\-].*/) && (u += r)), (!i || t.getTime() >= i.getTime()) && (!s || t.getTime() <= s.getTime()) && (!o || t.getFullYear() >= o) && (!u || u >= t.getFullYear())
        },
        _getFormatConfig: function(e) {
            var t = this._get(e, "shortYearCutoff");
            return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                shortYearCutoff: t,
                dayNamesShort: this._get(e, "dayNamesShort"),
                dayNames: this._get(e, "dayNames"),
                monthNamesShort: this._get(e, "monthNamesShort"),
                monthNames: this._get(e, "monthNames")
            }
        },
        _formatDate: function(e, t, n, r) {
            t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
            var i = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(r, n, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return this.formatDate(this._get(e, "dateFormat"), i, this._getFormatConfig(e))
        }
    }), e.fn.datepicker = function(t) {
        if (!this.length) return this;
        e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);
        var n = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(n)) : this.each(function() {
            "string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(n)) : e.datepicker._attachDatepicker(this, t)
        }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(n))
    }, e.datepicker = new i, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.11.1", e.datepicker, e.widget("ui.dialog", {
        version: "1.11.1",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            closeOnEscape: !0,
            closeText: "Close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(t) {
                    var n = e(this).css(t).offset().top;
                    0 > n && e(this).css("top", t.top - n)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,

            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        resizableRelatedOptions: {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            }, this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && e.fn.draggable && this._makeDraggable(), this.options.resizable && e.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t.jquery || t.nodeType) ? e(t) : this.document.find(t || "body").eq(0)
        },
        _destroy: function() {
            var e, t = this.originalPosition;
            this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), e = t.parent.children().eq(t.index), e.length && e[0] !== this.element[0] ? e.before(this.element) : t.parent.append(this.element)
        },
        widget: function() {
            return this.uiDialog
        },
        disable: e.noop,
        enable: e.noop,
        close: function(t) {
            var n, r = this;
            if (this._isOpen && this._trigger("beforeClose", t) !== !1) {
                if (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), !this.opener.filter(":focusable").focus().length) try {
                    n = this.document[0].activeElement, n && "body" !== n.nodeName.toLowerCase() && e(n).blur()
                } catch (i) {}
                this._hide(this.uiDialog, this.options.hide, function() {
                    r._trigger("close", t)
                })
            }
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function() {
            this._moveToTop()
        },
        _moveToTop: function(t, n) {
            var r = !1,
                i = this.uiDialog.siblings(".ui-front:visible").map(function() {
                    return +e(this).css("z-index")
                }).get(),
                s = Math.max.apply(null, i);
            return s >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", s + 1), r = !0), r && !n && this._trigger("focus", t), r
        },
        open: function() {
            var t = this;
            return this._isOpen ? (this._moveToTop() && this._focusTabbable(), void 0) : (this._isOpen = !0, this.opener = e(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() {
                t._focusTabbable(), t._trigger("focus")
            }), this._makeFocusTarget(), this._trigger("open"), void 0)
        },
        _focusTabbable: function() {
            var e = this._focusedElement;
            e || (e = this.element.find("[autofocus]")), e.length || (e = this.element.find(":tabbable")), e.length || (e = this.uiDialogButtonPane.find(":tabbable")), e.length || (e = this.uiDialogTitlebarClose.filter(":tabbable")), e.length || (e = this.uiDialog), e.eq(0).focus()
        },
        _keepFocus: function(t) {
            function n() {
                var t = this.document[0].activeElement,
                    n = this.uiDialog[0] === t || e.contains(this.uiDialog[0], t);
                n || this._focusTabbable()
            }
            t.preventDefault(), n.call(this), this._delay(n)
        },
        _createWrapper: function() {
            this.uiDialog = e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()), this._on(this.uiDialog, {
                keydown: function(t) {
                    if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === e.ui.keyCode.ESCAPE) return t.preventDefault(), this.close(t), void 0;
                    if (t.keyCode === e.ui.keyCode.TAB && !t.isDefaultPrevented()) {
                        var n = this.uiDialog.find(":tabbable"),
                            r = n.filter(":first"),
                            i = n.filter(":last");
                        t.target !== i[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== r[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (this._delay(function() {
                            i.focus()
                        }), t.preventDefault()) : (this._delay(function() {
                            r.focus()
                        }), t.preventDefault())
                    }
                },
                mousedown: function(e) {
                    this._moveToTop(e) && this._focusTabbable()
                }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function() {
            var t;
            this.uiDialogTitlebar = e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
                mousedown: function(t) {
                    e(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                }
            }), this.uiDialogTitlebarClose = e("<button type='button'></button>").button({
                label: this.options.closeText,
                icons: {
                    primary: "ui-icon-closethick"
                },
                text: !1
            }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
                click: function(e) {
                    e.preventDefault(), this.close(e)
                }
            }), t = e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(t), this.uiDialog.attr({
                "aria-labelledby": t.attr("id")
            })
        },
        _title: function(e) {
            this.options.title || e.html("&#160;"), e.text(this.options.title)
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
        },
        _createButtons: function() {
            var t = this,
                n = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), e.isEmptyObject(n) || e.isArray(n) && !n.length ? (this.uiDialog.removeClass("ui-dialog-buttons"), void 0) : (e.each(n, function(n, r) {
                var i, s;
                r = e.isFunction(r) ? {
                    click: r,
                    text: n
                } : r, r = e.extend({
                    type: "button"
                }, r), i = r.click, r.click = function() {
                    i.apply(t.element[0], arguments)
                }, s = {
                    icons: r.icons,
                    text: r.showText
                }, delete r.icons, delete r.showText, e("<button></button>", r).button(s).appendTo(t.uiButtonSet)
            }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), void 0)
        },
        _makeDraggable: function() {
            function t(e) {
                return {
                    position: e.position,
                    offset: e.offset
                }
            }
            var n = this,
                r = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(r, i) {
                    e(this).addClass("ui-dialog-dragging"), n._blockFrames(), n._trigger("dragStart", r, t(i))
                },
                drag: function(e, r) {
                    n._trigger("drag", e, t(r))
                },
                stop: function(i, s) {
                    var o = s.offset.left - n.document.scrollLeft(),
                        u = s.offset.top - n.document.scrollTop();
                    r.position = {
                        my: "left top",
                        at: "left" + (o >= 0 ? "+" : "") + o + " " + "top" + (u >= 0 ? "+" : "") + u,
                        of: n.window
                    }, e(this).removeClass("ui-dialog-dragging"), n._unblockFrames(), n._trigger("dragStop", i, t(s))
                }
            })
        },
        _makeResizable: function() {
            function t(e) {
                return {
                    originalPosition: e.originalPosition,
                    originalSize: e.originalSize,
                    position: e.position,
                    size: e.size
                }
            }
            var n = this,
                r = this.options,
                i = r.resizable,
                s = this.uiDialog.css("position"),
                o = "string" == typeof i ? i : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: r.maxWidth,
                maxHeight: r.maxHeight,
                minWidth: r.minWidth,
                minHeight: this._minHeight(),
                handles: o,
                start: function(r, i) {
                    e(this).addClass("ui-dialog-resizing"), n._blockFrames(), n._trigger("resizeStart", r, t(i))
                },
                resize: function(e, r) {
                    n._trigger("resize", e, t(r))
                },
                stop: function(i, s) {
                    var o = n.uiDialog.offset(),
                        u = o.left - n.document.scrollLeft(),
                        a = o.top - n.document.scrollTop();
                    r.height = n.uiDialog.height(), r.width = n.uiDialog.width(), r.position = {
                        my: "left top",
                        at: "left" + (u >= 0 ? "+" : "") + u + " " + "top" + (a >= 0 ? "+" : "") + a,
                        of: n.window
                    }, e(this).removeClass("ui-dialog-resizing"), n._unblockFrames(), n._trigger("resizeStop", i, t(s))
                }
            }).css("position", s)
        },
        _trackFocus: function() {
            this._on(this.widget(), {
                focusin: function(t) {
                    this._makeFocusTarget(), this._focusedElement = e(t.target)
                }
            })
        },
        _makeFocusTarget: function() {
            this._untrackInstance(), this._trackingInstances().unshift(this)
        },
        _untrackInstance: function() {
            var t = this._trackingInstances(),
                n = e.inArray(this, t); - 1 !== n && t.splice(n, 1)
        },
        _trackingInstances: function() {
            var e = this.document.data("ui-dialog-instances");
            return e || (e = [], this.document.data("ui-dialog-instances", e)), e
        },
        _minHeight: function() {
            var e = this.options;
            return "auto" === e.height ? e.minHeight : Math.min(e.minHeight, e.height)
        },
        _position: function() {
            var e = this.uiDialog.is(":visible");
            e || this.uiDialog.show(), this.uiDialog.position(this.options.position), e || this.uiDialog.hide()
        },
        _setOptions: function(t) {
            var n = this,
                r = !1,
                i = {};
            e.each(t, function(e, t) {
                n._setOption(e, t), e in n.sizeRelatedOptions && (r = !0), e in n.resizableRelatedOptions && (i[e] = t)
            }), r && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", i)
        },
        _setOption: function(e, t) {
            var n, r, i = this.uiDialog;
            "dialogClass" === e && i.removeClass(this.options.dialogClass).addClass(t), "disabled" !== e && (this._super(e, t), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({
                label: "" + t
            }), "draggable" === e && (n = i.is(":data(ui-draggable)"), n && !t && i.draggable("destroy"), !n && t && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && (r = i.is(":data(ui-resizable)"), r && !t && i.resizable("destroy"), r && "string" == typeof t && i.resizable("option", "handles", t), r || t === !1 || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function() {
            var e, t, n, r = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }), r.minWidth > r.width && (r.width = r.minWidth), e = this.uiDialog.css({
                height: "auto",
                width: r.width
            }).outerHeight(), t = Math.max(0, r.minHeight - e), n = "number" == typeof r.maxHeight ? Math.max(0, r.maxHeight - e) : "none", "auto" === r.height ? this.element.css({
                minHeight: t,
                maxHeight: n,
                height: "auto"
            }) : this.element.height(Math.max(0, r.height - e)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var t = e(this);
                return e("<div>").css({
                    position: "absolute",
                    width: t.outerWidth(),
                    height: t.outerHeight()
                }).appendTo(t.parent()).offset(t.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _allowInteraction: function(t) {
            return e(t.target).closest(".ui-dialog").length ? !0 : !!e(t.target).closest(".ui-datepicker").length
        },
        _createOverlay: function() {
            if (this.options.modal) {
                var t = !0;
                this._delay(function() {
                    t = !1
                }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
                    focusin: function(e) {
                        t || this._allowInteraction(e) || (e.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                    }
                }), this.overlay = e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {
                    mousedown: "_keepFocus"
                }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
            }
        },
        _destroyOverlay: function() {
            if (this.options.modal && this.overlay) {
                var e = this.document.data("ui-dialog-overlays") - 1;
                e ? this.document.data("ui-dialog-overlays", e) : this.document.unbind("focusin").removeData("ui-dialog-overlays"), this.overlay.remove(), this.overlay = null
            }
        }
    }), e.widget("ui.progressbar", {
        version: "1.11.1",
        options: {
            max: 100,
            value: 0,
            change: null,
            complete: null
        },
        min: 0,
        _create: function() {
            this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min
            }), this.valueDiv = e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue()
        },
        _destroy: function() {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
        },
        value: function(e) {
            return void 0 === e ? this.options.value : (this.options.value = this._constrainedValue(e), this._refreshValue(), void 0)
        },
        _constrainedValue: function(e) {
            return void 0 === e && (e = this.options.value), this.indeterminate = e === !1, "number" != typeof e && (e = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, e))
        },
        _setOptions: function(e) {
            var t = e.value;
            delete e.value, this._super(e), this.options.value = this._constrainedValue(t), this._refreshValue()
        },
        _setOption: function(e, t) {
            "max" === e && (t = Math.max(this.min, t)), "disabled" === e && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this._super(e, t)
        },
        _percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function() {
            var t = this.options.value,
                n = this._percentage();
            this.valueDiv.toggle(this.indeterminate || t > this.min).toggleClass("ui-corner-right", t === this.options.max).width(n.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = e("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": t
            }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== t && (this.oldValue = t, this._trigger("change")), t === this.options.max && this._trigger("complete")
        }
    }), e.widget("ui.selectmenu", {
        version: "1.11.1",
        defaultElement: "<select>",
        options: {
            appendTo: null,
            disabled: null,
            icons: {
                button: "ui-icon-triangle-1-s"
            },
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            width: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            select: null
        },
        _create: function() {
            var e = this.element.uniqueId().attr("id");
            this.ids = {
                element: e,
                button: e + "-button",
                menu: e + "-menu"
            }, this._drawButton(), this._drawMenu(), this.options.disabled && this.disable()
        },
        _drawButton: function() {
            var t = this,
                n = this.element.attr("tabindex");
            this.label = e("label[for='" + this.ids.element + "']").attr("for", this.ids.button), this._on(this.label, {
                click: function(e) {
                    this.button.focus(), e.preventDefault()
                }
            }), this.element.hide(), this.button = e("<span>", {
                "class": "ui-selectmenu-button ui-widget ui-state-default ui-corner-all",
                tabindex: n || this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: "combobox",
                "aria-expanded": "false",
                "aria-autocomplete": "list",
                "aria-owns": this.ids.menu,
                "aria-haspopup": "true"
            }).insertAfter(this.element), e("<span>", {
                "class": "ui-icon " + this.options.icons.button
            }).prependTo(this.button), this.buttonText = e("<span>", {
                "class": "ui-selectmenu-text"
            }).appendTo(this.button), this._setText(this.buttonText, this.element.find("option:selected").text()), this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function() {
                t.menuItems || t._refreshMenu()
            }), this._hoverable(this.button), this._focusable(this.button)
        },
        _drawMenu: function() {
            var t = this;
            this.menu = e("<ul>", {
                "aria-hidden": "true",
                "aria-labelledby": this.ids.button,
                id: this.ids.menu
            }), this.menuWrap = e("<div>", {
                "class": "ui-selectmenu-menu ui-front"
            }).append(this.menu).appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                role: "listbox",
                select: function(e, n) {
                    e.preventDefault(), t._select(n.item.data("ui-selectmenu-item"), e)
                },
                focus: function(e, n) {
                    var r = n.item.data("ui-selectmenu-item");
                    null != t.focusIndex && r.index !== t.focusIndex && (t._trigger("focus", e, {
                        item: r
                    }), t.isOpen || t._select(r, e)), t.focusIndex = r.index, t.button.attr("aria-activedescendant", t.menuItems.eq(r.index).attr("id"))
                }
            }).menu("instance"), this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() {
                return !1
            }, this.menuInstance._isDivider = function() {
                return !1
            }
        },
        refresh: function() {
            this._refreshMenu(), this._setText(this.buttonText, this._getSelectedItem().text()), this.options.width || this._resizeButton()
        },
        _refreshMenu: function() {
            this.menu.empty();
            var e, t = this.element.find("option");
            t.length && (this._parseOptions(t), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup"), e = this._getSelectedItem(), this.menuInstance.focus(null, e), this._setAria(e.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
        },
        open: function(e) {
            this.options.disabled || (this.menuItems ? (this.menu.find(".ui-state-focus").removeClass("ui-state-focus"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", e))
        },
        _position: function() {
            this.menuWrap.position(e.extend({
                of: this.button
            }, this.options.position))
        },
        close: function(e) {
            this.isOpen && (this.isOpen = !1, this._toggleAttr(), this._off(this.document), this._trigger("close", e))
        },
        widget: function() {
            return this.button
        },
        menuWidget: function() {
            return this.menu
        },
        _renderMenu: function(t, n) {
            var r = this,
                i = "";
            e.each(n, function(n, s) {
                s.optgroup !== i && (e("<li>", {
                    "class": "ui-selectmenu-optgroup ui-menu-divider" + (s.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : ""),
                    text: s.optgroup
                }).appendTo(t), i = s.optgroup), r._renderItemData(t, s)
            })
        },
        _renderItemData: function(e, t) {
            return this._renderItem(e, t).data("ui-selectmenu-item", t)
        },
        _renderItem: function(t, n) {
            var r = e("<li>");
            return n.disabled && r.addClass("ui-state-disabled"), this._setText(r, n.label), r.appendTo(t)
        },
        _setText: function(e, t) {
            t ? e.text(t) : e.html("&#160;")
        },
        _move: function(e, t) {
            var n, r, i = ".ui-menu-item";
            this.isOpen ? n = this.menuItems.eq(this.focusIndex) : (n = this.menuItems.eq(this.element[0].selectedIndex), i += ":not(.ui-state-disabled)"), r = "first" === e || "last" === e ? n["first" === e ? "prevAll" : "nextAll"](i).eq(-1) : n[e + "All"](i).eq(0), r.length && this.menuInstance.focus(t, r)
        },
        _getSelectedItem: function() {
            return this.menuItems.eq(this.element[0].selectedIndex)
        },
        _toggle: function(e) {
            this[this.isOpen ? "close" : "open"](e)
        },
        _documentClick: {
            mousedown: function(t) {
                this.isOpen && (e(t.target).closest(".ui-selectmenu-menu, #" + this.ids.button).length || this.close(t))
            }
        },
        _buttonEvents: {
            mousedown: function(e) {
                e.preventDefault()
            },
            click: "_toggle",
            keydown: function(t) {
                var n = !0;
                switch (t.keyCode) {
                    case e.ui.keyCode.TAB:
                    case e.ui.keyCode.ESCAPE:
                        this.close(t), n = !1;
                        break;
                    case e.ui.keyCode.ENTER:
                        this.isOpen && this._selectFocusedItem(t);
                        break;
                    case e.ui.keyCode.UP:
                        t.altKey ? this._toggle(t) : this._move("prev", t);
                        break;
                    case e.ui.keyCode.DOWN:
                        t.altKey ? this._toggle(t) : this._move("next", t);
                        break;
                    case e.ui.keyCode.SPACE:
                        this.isOpen ? this._selectFocusedItem(t) : this._toggle(t);
                        break;
                    case e.ui.keyCode.LEFT:
                        this._move("prev", t);
                        break;
                    case e.ui.keyCode.RIGHT:
                        this._move("next", t);
                        break;
                    case e.ui.keyCode.HOME:
                    case e.ui.keyCode.PAGE_UP:
                        this._move("first", t);
                        break;
                    case e.ui.keyCode.END:
                    case e.ui.keyCode.PAGE_DOWN:
                        this._move("last", t);
                        break;
                    default:
                        this.menu.trigger(t), n = !1
                }
                n && t.preventDefault()
            }
        },
        _selectFocusedItem: function(e) {
            var t = this.menuItems.eq(this.focusIndex);
            t.hasClass("ui-state-disabled") || this._select(t.data("ui-selectmenu-item"), e)
        },
        _select: function(e, t) {
            var n = this.element[0].selectedIndex;
            this.element[0].selectedIndex = e.index, this._setText(this.buttonText, e.label), this._setAria(e), this._trigger("select", t, {
                item: e
            }), e.index !== n && this._trigger("change", t, {
                item: e
            }), this.close(t)
        },
        _setAria: function(e) {
            var t = this.menuItems.eq(e.index).attr("id");
            this.button.attr({
                "aria-labelledby": t,
                "aria-activedescendant": t
            }), this.menu.attr("aria-activedescendant", t)
        },
        _setOption: function(e, t) {
            "icons" === e && this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(t.button), this._super(e, t), "appendTo" === e && this.menuWrap.appendTo(this._appendTo()), "disabled" === e && (this.menuInstance.option("disabled", t), this.button.toggleClass("ui-state-disabled", t).attr("aria-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)), "width" === e && this._resizeButton()
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
        },
        _toggleAttr: function() {
            this.button.toggleClass("ui-corner-top", this.isOpen).toggleClass("ui-corner-all", !this.isOpen).attr("aria-expanded", this.isOpen), this.menuWrap.toggleClass("ui-selectmenu-open", this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
        },
        _resizeButton: function() {
            var e = this.options.width;
            e || (e = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(e)
        },
        _resizeMenu: function() {
            this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
        },
        _getCreateOptions: function() {
            return {
                disabled: this.element.prop("disabled")
            }
        },
        _parseOptions: function(t) {
            var n = [];
            t.each(function(t, r) {
                var i = e(r),
                    s = i.parent("optgroup");
                n.push({
                    element: i,
                    index: t,
                    value: i.attr("value"),
                    label: i.text(),
                    optgroup: s.attr("label") || "",
                    disabled: s.prop("disabled") || i.prop("disabled")
                })
            }), this.items = n
        },
        _destroy: function() {
            this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.label.attr("for", this.ids.element)
        }
    }), e.widget("ui.slider", e.ui.mouse, {
        version: "1.11.1",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function() {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
        },
        _refresh: function() {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
        },
        _createHandles: function() {
            var t, n, r = this.options,
                i = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                s = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
                o = [];
            for (n = r.values && r.values.length || 1, i.length > n && (i.slice(n).remove(), i = i.slice(0, n)), t = i.length; n > t; t++) o.push(s);
            this.handles = i.add(e(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(t) {
                e(this).data("ui-slider-handle-index", t)
            })
        },
        _createRange: function() {
            var t = this.options,
                n = "";
            t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = e("<div></div>").appendTo(this.element), n = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(n + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range : ""))) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function() {
            this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
        },
        _destroy: function() {
            this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var n, r, i, s, o, u, a, f, l = this,
                c = this.options;
            return c.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), n = {
                x: t.pageX,
                y: t.pageY
            }, r = this._normValueFromMouse(n), i = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) {
                var n = Math.abs(r - l.values(t));
                (i > n || i === n && (t === l._lastChangedValue || l.values(t) === c.min)) && (i = n, s = e(this), o = t)
            }), u = this._start(t, o), u === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, s.addClass("ui-state-active").focus(), a = s.offset(), f = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = f ? {
                left: 0,
                top: 0
            } : {
                left: t.pageX - a.left - s.width() / 2,
                top: t.pageY - a.top - s.height() / 2 - (parseInt(s.css("borderTopWidth"), 10) || 0) - (parseInt(s.css("borderBottomWidth"), 10) || 0) + (parseInt(s.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(t, o, r), this._animateOff = !0, !0))
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(e) {
            var t = {
                    x: e.pageX,
                    y: e.pageY
                },
                n = this._normValueFromMouse(t);
            return this._slide(e, this._handleIndex, n), !1
        },
        _mouseStop: function(e) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(e) {
            var t, n, r, i, s;
            return "horizontal" === this.orientation ? (t = this.elementSize.width, n = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, n = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), r = n / t, r > 1 && (r = 1), 0 > r && (r = 0), "vertical" === this.orientation && (r = 1 - r), i = this._valueMax() - this._valueMin(), s = this._valueMin() + r * i, this._trimAlignValue(s)
        },
        _start: function(e, t) {
            var n = {
                handle: this.handles[t],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("start", e, n)
        },
        _slide: function(e, t, n) {
            var r, i, s;
            this.options.values && this.options.values.length ? (r = this.values(t ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === t && n > r || 1 === t && r > n) && (n = r), n !== this.values(t) && (i = this.values(), i[t] = n, s = this._trigger("slide", e, {
                handle: this.handles[t],
                value: n,
                values: i
            }), r = this.values(t ? 0 : 1), s !== !1 && this.values(t, n))) : n !== this.value() && (s = this._trigger("slide", e, {
                handle: this.handles[t],
                value: n
            }), s !== !1 && this.value(n))
        },
        _stop: function(e, t) {
            var n = {
                handle: this.handles[t],
                value: this.value()
            };
            this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("stop", e, n)
        },
        _change: function(e, t) {
            if (!this._keySliding && !this._mouseSliding) {
                var n = {
                    handle: this.handles[t],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._lastChangedValue = t, this._trigger("change", e, n)
            }
        },
        value: function(e) {
            return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0), void 0) : this._value()
        },
        values: function(t, n) {
            var r, i, s;
            if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(n), this._refreshValue(), this._change(null, t), void 0;
            if (!arguments.length) return this._values();
            if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
            for (r = this.options.values, i = arguments[0], s = 0; r.length > s; s += 1) r[s] = this._trimAlignValue(i[s]), this._change(null, s);
            this._refreshValue()
        },
        _setOption: function(t, n) {
            var r, i = 0;
            switch ("range" === t && this.options.range === !0 && ("min" === n ? (this.options.value = this._values(0), this.options.values = null) : "max" === n && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), e.isArray(this.options.values) && (i = this.options.values.length), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!n), this._super(t, n), t) {
                case "orientation":
                    this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === n ? "bottom" : "left", "");
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), r = 0; i > r; r += 1) this._change(null, r);
                    this._animateOff = !1;
                    break;
                case "min":
                case "max":
                    this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _value: function() {
            var e = this.options.value;
            return e = this._trimAlignValue(e)
        },
        _values: function(e) {
            var t, n, r;
            if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t);
            if (this.options.values && this.options.values.length) {
                for (n = this.options.values.slice(), r = 0; n.length > r; r += 1) n[r] = this._trimAlignValue(n[r]);
                return n
            }
            return []
        },
        _trimAlignValue: function(e) {
            if (this._valueMin() >= e) return this._valueMin();
            if (e >= this._valueMax()) return this._valueMax();
            var t = this.options.step > 0 ? this.options.step : 1,
                n = (e - this._valueMin()) % t,
                r = e - n;
            return 2 * Math.abs(n) >= t && (r += n > 0 ? t : -t), parseFloat(r.toFixed(5))
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.options.max
        },
        _refreshValue: function() {
            var t, n, r, i, s, o = this.options.range,
                u = this.options,
                a = this,
                f = this._animateOff ? !1 : u.animate,
                l = {};
            this.options.values && this.options.values.length ? this.handles.each(function(r) {
                n = 100 * ((a.values(r) - a._valueMin()) / (a._valueMax() - a._valueMin())), l["horizontal" === a.orientation ? "left" : "bottom"] = n + "%", e(this).stop(1, 1)[f ? "animate" : "css"](l, u.animate), a.options.range === !0 && ("horizontal" === a.orientation ? (0 === r && a.range.stop(1, 1)[f ? "animate" : "css"]({
                    left: n + "%"
                }, u.animate), 1 === r && a.range[f ? "animate" : "css"]({
                    width: n - t + "%"
                }, {
                    queue: !1,
                    duration: u.animate
                })) : (0 === r && a.range.stop(1, 1)[f ? "animate" : "css"]({
                    bottom: n + "%"
                }, u.animate), 1 === r && a.range[f ? "animate" : "css"]({
                    height: n - t + "%"
                }, {
                    queue: !1,
                    duration: u.animate
                }))), t = n
            }) : (r = this.value(), i = this._valueMin(), s = this._valueMax(), n = s !== i ? 100 * ((r - i) / (s - i)) : 0, l["horizontal" === this.orientation ? "left" : "bottom"] = n + "%", this.handle.stop(1, 1)[f ? "animate" : "css"](l, u.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[f ? "animate" : "css"]({
                width: n + "%"
            }, u.animate), "max" === o && "horizontal" === this.orientation && this.range[f ? "animate" : "css"]({
                width: 100 - n + "%"
            }, {
                queue: !1,
                duration: u.animate
            }), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[f ? "animate" : "css"]({
                height: n + "%"
            }, u.animate), "max" === o && "vertical" === this.orientation && this.range[f ? "animate" : "css"]({
                height: 100 - n + "%"
            }, {
                queue: !1,
                duration: u.animate
            }))
        },
        _handleEvents: {
            keydown: function(t) {
                var n, r, i, s, o = e(t.target).data("ui-slider-handle-index");
                switch (t.keyCode) {
                    case e.ui.keyCode.HOME:
                    case e.ui.keyCode.END:
                    case e.ui.keyCode.PAGE_UP:
                    case e.ui.keyCode.PAGE_DOWN:
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, e(t.target).addClass("ui-state-active"), n = this._start(t, o), n === !1)) return
                }
                switch (s = this.options.step, r = i = this.options.values && this.options.values.length ? this.values(o) : this.value(), t.keyCode) {
                    case e.ui.keyCode.HOME:
                        i = this._valueMin();
                        break;
                    case e.ui.keyCode.END:
                        i = this._valueMax();
                        break;
                    case e.ui.keyCode.PAGE_UP:
                        i = this._trimAlignValue(r + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case e.ui.keyCode.PAGE_DOWN:
                        i = this._trimAlignValue(r - (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                        if (r === this._valueMax()) return;
                        i = this._trimAlignValue(r + s);
                        break;
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        if (r === this._valueMin()) return;
                        i = this._trimAlignValue(r - s)
                }
                this._slide(t, o, i)
            },
            keyup: function(t) {
                var n = e(t.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(t, n), this._change(t, n), e(t.target).removeClass("ui-state-active"))
            }
        }
    }), e.widget("ui.spinner", {
        version: "1.11.1",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function() {
            var t = {},
                n = this.element;
            return e.each(["min", "max", "step"], function(e, r) {
                var i = n.attr(r);
                void 0 !== i && i.length && (t[r] = i)
            }), t
        },
        _events: {
            keydown: function(e) {
                this._start(e) && this._keydown(e) && e.preventDefault()
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val()
            },
            blur: function(e) {
                return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", e), void 0)
            },
            mousewheel: function(e, t) {
                if (t) {
                    if (!this.spinning && !this._start(e)) return !1;
                    this._spin((t > 0 ? 1 : -1) * this.options.step, e), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
                        this.spinning && this._stop(e)
                    }, 100), e.preventDefault()
                }
            },
            "mousedown .ui-spinner-button": function(t) {
                function n() {
                    var e = this.element[0] === this.document[0].activeElement;
                    e || (this.element.focus(), this.previous = r, this._delay(function() {
                        this.previous = r
                    }))
                }
                var r;
                r = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), t.preventDefault(), n.call(this), this.cancelBlur = !0, this._delay(function() {
                    delete this.cancelBlur, n.call(this)
                }), this._start(t) !== !1 && this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(t) {
                return e(t.currentTarget).hasClass("ui-state-active") ? this._start(t) === !1 ? !1 : (this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t), void 0) : void 0
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _draw: function() {
            var e = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            this.element.attr("role", "spinbutton"), this.buttons = e.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * e.height()) && e.height() > 0 && e.height(e.height()), this.options.disabled && this.disable()
        },
        _keydown: function(t) {
            var n = this.options,
                r = e.ui.keyCode;
            switch (t.keyCode) {
                case r.UP:
                    return this._repeat(null, 1, t), !0;
                case r.DOWN:
                    return this._repeat(null, -1, t), !0;
                case r.PAGE_UP:
                    return this._repeat(null, n.page, t), !0;
                case r.PAGE_DOWN:
                    return this._repeat(null, -n.page, t), !0
            }
            return !1
        },
        _uiSpinnerHtml: function() {
            return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
        },
        _buttonHtml: function() {
            return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" + "</a>" + "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" + "<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" + "</a>"
        },
        _start: function(e) {
            return this.spinning || this._trigger("start", e) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
        },
        _repeat: function(e, t, n) {
            e = e || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
                this._repeat(40, t, n)
            }, e), this._spin(t * this.options.step, n)
        },
        _spin: function(e, t) {
            var n = this.value() || 0;
            this.counter || (this.counter = 1), n = this._adjustValue(n + e * this._increment(this.counter)), this.spinning && this._trigger("spin", t, {
                value: n
            }) === !1 || (this._value(n), this.counter++)
        },
        _increment: function(t) {
            var n = this.options.incremental;
            return n ? e.isFunction(n) ? n(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1
        },
        _precision: function() {
            var e = this._precisionOf(this.options.step);
            return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e
        },
        _precisionOf: function(e) {
            var t = "" + e,
                n = t.indexOf(".");
            return -1 === n ? 0 : t.length - n - 1
        },
        _adjustValue: function(e) {
            var t, n, r = this.options;
            return t = null !== r.min ? r.min : 0, n = e - t, n = Math.round(n / r.step) * r.step, e = t + n, e = parseFloat(e.toFixed(this._precision())), null !== r.max && e > r.max ? r.max : null !== r.min && r.min > e ? r.min : e
        },
        _stop: function(e) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", e))
        },
        _setOption: function(e, t) {
            if ("culture" === e || "numberFormat" === e) {
                var n = this._parse(this.element.val());
                return this.options[e] = t, this.element.val(this._format(n)), void 0
            }("max" === e || "min" === e || "step" === e) && "string" == typeof t && (t = this._parse(t)), "icons" === e && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down)), this._super(e, t), "disabled" === e && (this.widget().toggleClass("ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable"))
        },
        _setOptions: a(function(e) {
            this._super(e)
        }),
        _parse: function(e) {
            return "string" == typeof e && "" !== e && (e = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(e, 10, this.options.culture) : +e), "" === e || isNaN(e) ? null : e
        },
        _format: function(e) {
            return "" === e ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(e, this.options.numberFormat, this.options.culture) : e
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        isValid: function() {
            var e = this.value();
            return null === e ? !1 : e === this._adjustValue(e)
        },
        _value: function(e, t) {
            var n;
            "" !== e && (n = this._parse(e), null !== n && (t || (n = this._adjustValue(n)), e = this._format(n))), this.element.val(e), this._refresh()
        },
        _destroy: function() {
            this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
        },
        stepUp: a(function(e) {
            this._stepUp(e)
        }),
        _stepUp: function(e) {
            this._start() && (this._spin((e || 1) * this.options.step), this._stop())
        },
        stepDown: a(function(e) {
            this._stepDown(e)
        }),
        _stepDown: function(e) {
            this._start() && (this._spin((e || 1) * -this.options.step), this._stop())
        },
        pageUp: a(function(e) {
            this._stepUp((e || 1) * this.options.page)
        }),
        pageDown: a(function(e) {
            this._stepDown((e || 1) * this.options.page)
        }),
        value: function(e) {
            return arguments.length ? (a(this._value).call(this, e), void 0) : this._parse(this.element.val())
        },
        widget: function() {
            return this.uiSpinner
        }
    }), e.widget("ui.tabs", {
        version: "1.11.1",
        delay: 300,
        options: {
            active: null,
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: function() {
            var e = /#.*$/;
            return function(t) {
                var n, r;
                t = t.cloneNode(!1), n = t.href.replace(e, ""), r = location.href.replace(e, "");
                try {
                    n = decodeURIComponent(n)
                } catch (i) {}
                try {
                    r = decodeURIComponent(r)
                } catch (i) {}
                return t.hash.length > 1 && n === r
            }
        }(),
        _create: function() {
            var t = this,
                n = this.options;
            this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", n.collapsible), this._processTabs(), n.active = this._initialActive(), e.isArray(n.disabled) && (n.disabled = e.unique(n.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"), function(e) {
                return t.tabs.index(e)
            }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(n.active) : e(), this._refresh(), this.active.length && this.load(n.active)
        },
        _initialActive: function() {
            var t = this.options.active,
                n = this.options.collapsible,
                r = location.hash.substring(1);
            return null === t && (r && this.tabs.each(function(n, i) {
                return e(i).attr("aria-controls") === r ? (t = n, !1) : void 0
            }), null === t && (t = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === t || -1 === t) && (t = this.tabs.length ? 0 : !1)), t !== !1 && (t = this.tabs.index(this.tabs.eq(t)), -1 === t && (t = n ? !1 : 0)), !n && t === !1 && this.anchors.length && (t = 0), t
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : e()
            }
        },
        _tabKeydown: function(t) {
            var n = e(this.document[0].activeElement).closest("li"),
                r = this.tabs.index(n),
                i = !0;
            if (!this._handlePageNav(t)) {
                switch (t.keyCode) {
                    case e.ui.keyCode.RIGHT:
                    case e.ui.keyCode.DOWN:
                        r++;
                        break;
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.LEFT:
                        i = !1, r--;
                        break;
                    case e.ui.keyCode.END:
                        r = this.anchors.length - 1;
                        break;
                    case e.ui.keyCode.HOME:
                        r = 0;
                        break;
                    case e.ui.keyCode.SPACE:
                        return t.preventDefault(), clearTimeout(this.activating), this._activate(r), void 0;
                    case e.ui.keyCode.ENTER:
                        return t.preventDefault(), clearTimeout(this.activating), this._activate(r === this.options.active ? !1 : r), void 0;
                    default:
                        return
                }
                t.preventDefault(), clearTimeout(this.activating), r = this._focusNextTab(r, i), t.ctrlKey || (n.attr("aria-selected", "false"), this.tabs.eq(r).attr("aria-selected", "true"), this.activating = this._delay(function() {
                    this.option("active", r)
                }, this.delay))
            }
        },
        _panelKeydown: function(t) {
            this._handlePageNav(t) || t.ctrlKey && t.keyCode === e.ui.keyCode.UP && (t.preventDefault(), this.active.focus())
        },
        _handlePageNav: function(t) {
            return t.altKey && t.keyCode === e.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === e.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
        },
        _findNextTab: function(t, n) {
            function r() {
                return t > i && (t = 0), 0 > t && (t = i), t
            }
            for (var i = this.tabs.length - 1; - 1 !== e.inArray(r(), this.options.disabled);) t = n ? t + 1 : t - 1;
            return t
        },
        _focusNextTab: function(e, t) {
            return e = this._findNextTab(e, t), this.tabs.eq(e).focus(), e
        },
        _setOption: function(e, t) {
            return "active" === e ? (this._activate(t), void 0) : "disabled" === e ? (this._setupDisabled(t), void 0) : (this._super(e, t), "collapsible" === e && (this.element.toggleClass("ui-tabs-collapsible", t), t || this.options.active !== !1 || this._activate(0)), "event" === e && this._setupEvents(t), "heightStyle" === e && this._setupHeightStyle(t), void 0)
        },
        _sanitizeSelector: function(e) {
            return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var t = this.options,
                n = this.tablist.children(":has(a[href])");
            t.disabled = e.map(n.filter(".ui-state-disabled"), function(e) {
                return n.index(e)
            }), this._processTabs(), t.active !== !1 && this.anchors.length ? this.active.length && !e.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = e()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = e()), this._refresh()
        },
        _refresh: function() {
            this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-hidden": "true"
            }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }), this._getPanelForTab(this.active).show().attr({
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function() {
            var t = this;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function(t) {
                e(this).is(".ui-state-disabled") && t.preventDefault()
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                e(this).closest("li").is(".ui-state-disabled") && this.blur()
            }), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            }), this.anchors = this.tabs.map(function() {
                return e("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            }), this.panels = e(), this.anchors.each(function(n, r) {
                var i, s, o, u = e(r).uniqueId().attr("id"),
                    a = e(r).closest("li"),
                    f = a.attr("aria-controls");
                t._isLocal(r) ? (i = r.hash, o = i.substring(1), s = t.element.find(t._sanitizeSelector(i))) : (o = a.attr("aria-controls") || e({}).uniqueId()[0].id, i = "#" + o, s = t.element.find(i), s.length || (s = t._createPanel(o), s.insertAfter(t.panels[n - 1] || t.tablist)), s.attr("aria-live", "polite")), s.length && (t.panels = t.panels.add(s)), f && a.data("ui-tabs-aria-controls", f), a.attr({
                    "aria-controls": o,
                    "aria-labelledby": u
                }), s.attr("aria-labelledby", u)
            }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
        },
        _getList: function() {
            return this.tablist || this.element.find("ol,ul").eq(0)
        },
        _createPanel: function(t) {
            return e("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        },
        _setupDisabled: function(t) {
            e.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1);
            for (var n, r = 0; n = this.tabs[r]; r++) t === !0 || -1 !== e.inArray(r, t) ? e(n).addClass("ui-state-disabled").attr("aria-disabled", "true") : e(n).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = t
        },
        _setupEvents: function(t) {
            var n = {};
            t && e.each(t.split(" "), function(e, t) {
                n[t] = "_eventHandler"
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                click: function(e) {
                    e.preventDefault()
                }
            }), this._on(this.anchors, n), this._on(this.tabs, {
                keydown: "_tabKeydown"
            }), this._on(this.panels, {
                keydown: "_panelKeydown"
            }), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(t) {
            var n, r = this.element.parent();
            "fill" === t ? (n = r.height(), n -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                var t = e(this),
                    r = t.css("position");
                "absolute" !== r && "fixed" !== r && (n -= t.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function() {
                n -= e(this).outerHeight(!0)
            }), this.panels.each(function() {
                e(this).height(Math.max(0, n - e(this).innerHeight() + e(this).height()))
            }).css("overflow", "auto")) : "auto" === t && (n = 0, this.panels.each(function() {
                n = Math.max(n, e(this).height("").height())
            }).height(n))
        },
        _eventHandler: function(t) {
            var n = this.options,
                r = this.active,
                i = e(t.currentTarget),
                s = i.closest("li"),
                o = s[0] === r[0],
                u = o && n.collapsible,
                a = u ? e() : this._getPanelForTab(s),
                f = r.length ? this._getPanelForTab(r) : e(),
                l = {
                    oldTab: r,
                    oldPanel: f,
                    newTab: u ? e() : s,
                    newPanel: a
                };
            t.preventDefault(), s.hasClass("ui-state-disabled") || s.hasClass("ui-tabs-loading") || this.running || o && !n.collapsible || this._trigger("beforeActivate", t, l) === !1 || (n.active = u ? !1 : this.tabs.index(s), this.active = o ? e() : s, this.xhr && this.xhr.abort(), f.length || a.length || e.error("jQuery UI Tabs: Mismatching fragment identifier."), a.length && this.load(this.tabs.index(s), t), this._toggle(t, l))
        },
        _toggle: function(t, n) {
            function r() {
                s.running = !1, s._trigger("activate", t, n)
            }

            function i() {
                n.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), o.length && s.options.show ? s._show(o, s.options.show, r) : (o.show(), r())
            }
            var s = this,
                o = n.newPanel,
                u = n.oldPanel;
            this.running = !0, u.length && this.options.hide ? this._hide(u, this.options.hide, function() {
                n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), i()
            }) : (n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), u.hide(), i()), u.attr("aria-hidden", "true"), n.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), o.length && u.length ? n.oldTab.attr("tabIndex", -1) : o.length && this.tabs.filter(function() {
                return 0 === e(this).attr("tabIndex")
            }).attr("tabIndex", -1), o.attr("aria-hidden", "false"), n.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _activate: function(t) {
            var n, r = this._findActive(t);
            r[0] !== this.active[0] && (r.length || (r = this.active), n = r.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: n,
                currentTarget: n,
                preventDefault: e.noop
            }))
        },
        _findActive: function(t) {
            return t === !1 ? e() : this.tabs.eq(t)
        },
        _getIndex: function(e) {
            return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + e + "']"))), e
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tablist.unbind(this.eventNamespace), this.tabs.add(this.panels).each(function() {
                e.data(this, "ui-tabs-destroy") ? e(this).remove() : e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
            }), this.tabs.each(function() {
                var t = e(this),
                    n = t.data("ui-tabs-aria-controls");
                n ? t.attr("aria-controls", n).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function(t) {
            var n = this.options.disabled;
            n !== !1 && (void 0 === t ? n = !1 : (t = this._getIndex(t), n = e.isArray(n) ? e.map(n, function(e) {
                return e !== t ? e : null
            }) : e.map(this.tabs, function(e, n) {
                return n !== t ? n : null
            })), this._setupDisabled(n))
        },
        disable: function(t) {
            var n = this.options.disabled;
            if (n !== !0) {
                if (void 0 === t) n = !0;
                else {
                    if (t = this._getIndex(t), -1 !== e.inArray(t, n)) return;
                    n = e.isArray(n) ? e.merge([t], n).sort() : [t]
                }
                this._setupDisabled(n)
            }
        },
        load: function(t, n) {
            t = this._getIndex(t);
            var r = this,
                i = this.tabs.eq(t),
                s = i.find(".ui-tabs-anchor"),
                o = this._getPanelForTab(i),
                u = {
                    tab: i,
                    panel: o
                };
            this._isLocal(s[0]) || (this.xhr = e.ajax(this._ajaxSettings(s, n, u)), this.xhr && "canceled" !== this.xhr.statusText && (i.addClass("ui-tabs-loading"), o.attr("aria-busy", "true"), this.xhr.success(function(e) {
                setTimeout(function() {
                    o.html(e), r._trigger("load", n, u)
                }, 1)
            }).complete(function(e, t) {
                setTimeout(function() {
                    "abort" === t && r.panels.stop(!1, !0), i.removeClass("ui-tabs-loading"), o.removeAttr("aria-busy"), e === r.xhr && delete r.xhr
                }, 1)
            })))
        },
        _ajaxSettings: function(t, n, r) {
            var i = this;
            return {
                url: t.attr("href"),
                beforeSend: function(t, s) {
                    return i._trigger("beforeLoad", n, e.extend({
                        jqXHR: t,
                        ajaxSettings: s
                    }, r))
                }
            }
        },
        _getPanelForTab: function(t) {
            var n = e(t).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + n))
        }
    }), e.widget("ui.tooltip", {
        version: "1.11.1",
        options: {
            content: function() {
                var t = e(this).attr("title") || "";
                return e("<a>").text(t).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: !0,
            tooltipClass: null,
            track: !1,
            close: null,
            open: null
        },
        _addDescribedBy: function(t, n) {
            var r = (t.attr("aria-describedby") || "").split(/\s+/);
            r.push(n), t.data("ui-tooltip-id", n).attr("aria-describedby", e.trim(r.join(" ")))
        },
        _removeDescribedBy: function(t) {
            var n = t.data("ui-tooltip-id"),
                r = (t.attr("aria-describedby") || "").split(/\s+/),
                i = e.inArray(n, r); - 1 !== i && r.splice(i, 1), t.removeData("ui-tooltip-id"), r = e.trim(r.join(" ")), r ? t.attr("aria-describedby", r) : t.removeAttr("aria-describedby")
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable(), this.liveRegion = e("<div>").attr({
                role: "log",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)
        },
        _setOption: function(t, n) {
            var r = this;
            return "disabled" === t ? (this[n ? "_disable" : "_enable"](), this.options[t] = n, void 0) : (this._super(t, n), "content" === t && e.each(this.tooltips, function(e, t) {
                r._updateContent(t)
            }), void 0)
        },
        _disable: function() {
            var t = this;
            e.each(this.tooltips, function(n, r) {
                var i = e.Event("blur");
                i.target = i.currentTarget = r[0], t.close(i, !0)
            }), this.element.find(this.options.items).addBack().each(function() {
                var t = e(this);
                t.is("[title]") && t.data("ui-tooltip-title", t.attr("title")).removeAttr("title")
            })
        },
        _enable: function() {
            this.element.find(this.options.items).addBack().each(function() {
                var t = e(this);
                t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
            })
        },
        open: function(t) {
            var n = this,
                r = e(t ? t.target : this.element).closest(this.options.items);
            r.length && !r.data("ui-tooltip-id") && (r.attr("title") && r.data("ui-tooltip-title", r.attr("title")), r.data("ui-tooltip-open", !0), t && "mouseover" === t.type && r.parents().each(function() {
                var t, r = e(this);
                r.data("ui-tooltip-open") && (t = e.Event("blur"), t.target = t.currentTarget = this, n.close(t, !0)), r.attr("title") && (r.uniqueId(), n.parents[this.id] = {
                    element: this,
                    title: r.attr("title")
                }, r.attr("title", ""))
            }), this._updateContent(r, t))
        },
        _updateContent: function(e, t) {
            var n, r = this.options.content,
                i = this,
                s = t ? t.type : null;
            return "string" == typeof r ? this._open(t, e, r) : (n = r.call(e[0], function(n) {
                e.data("ui-tooltip-open") && i._delay(function() {
                    t && (t.type = s), this._open(t, e, n)
                })
            }), n && this._open(t, e, n), void 0)
        },
        _open: function(t, n, r) {
            function i(e) {
                f.of = e, s.is(":hidden") || s.position(f)
            }
            var s, o, u, a, f = e.extend({}, this.options.position);
            if (r) {
                if (s = this._find(n), s.length) return s.find(".ui-tooltip-content").html(r), void 0;
                n.is("[title]") && (t && "mouseover" === t.type ? n.attr("title", "") : n.removeAttr("title")), s = this._tooltip(n), this._addDescribedBy(n, s.attr("id")), s.find(".ui-tooltip-content").html(r), this.liveRegion.children().hide(), r.clone ? (a = r.clone(), a.removeAttr("id").find("[id]").removeAttr("id")) : a = r, e("<div>").html(a).appendTo(this.liveRegion), this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, {
                    mousemove: i
                }), i(t)) : s.position(e.extend({
                    of: n
                }, this.options.position)), this.hiding = !1, this.closing = !1, s.hide(), this._show(s, this.options.show), this.options.show && this.options.show.delay && (u = this.delayedShow = setInterval(function() {
                    s.is(":visible") && (i(f.of), clearInterval(u))
                }, e.fx.interval)), this._trigger("open", t, {
                    tooltip: s
                }), o = {
                    keyup: function(t) {
                        if (t.keyCode === e.ui.keyCode.ESCAPE) {
                            var r = e.Event(t);
                            r.currentTarget = n[0], this.close(r, !0)
                        }
                    }
                }, n[0] !== this.element[0] && (o.remove = function() {
                    this._removeTooltip(s)
                }), t && "mouseover" !== t.type || (o.mouseleave = "close"), t && "focusin" !== t.type || (o.focusout = "close"), this._on(!0, n, o)
            }
        },
        close: function(t) {
            var n = this,
                r = e(t ? t.currentTarget : this.element),
                i = this._find(r);
            this.closing || (clearInterval(this.delayedShow), r.data("ui-tooltip-title") && !r.attr("title") && r.attr("title", r.data("ui-tooltip-title")), this._removeDescribedBy(r), this.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function() {
                n._removeTooltip(e(this)), this.hiding = !1, this.closing = !1
            }), r.removeData("ui-tooltip-open"), this._off(r, "mouseleave focusout keyup"), r[0] !== this.element[0] && this._off(r, "remove"), this._off(this.document, "mousemove"), t && "mouseleave" === t.type && e.each(this.parents, function(t, r) {
                e(r.element).attr("title", r.title), delete n.parents[t]
            }), this.closing = !0, this._trigger("close", t, {
                tooltip: i
            }), this.hiding || (this.closing = !1))
        },
        _tooltip: function(t) {
            var n = e("<div>").attr("role", "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || "")),
                r = n.uniqueId().attr("id");
            return e("<div>").addClass("ui-tooltip-content").appendTo(n), n.appendTo(this.document[0].body), this.tooltips[r] = t, n
        },
        _find: function(t) {
            var n = t.data("ui-tooltip-id");
            return n ? e("#" + n) : e()
        },
        _removeTooltip: function(e) {
            e.remove(), delete this.tooltips[e.attr("id")]
        },
        _destroy: function() {
            var t = this;
            e.each(this.tooltips, function(n, r) {
                var i = e.Event("blur");
                i.target = i.currentTarget = r[0], t.close(i, !0), e("#" + n).remove(), r.data("ui-tooltip-title") && (r.attr("title") || r.attr("title", r.data("ui-tooltip-title")), r.removeData("ui-tooltip-title"))
            }), this.liveRegion.remove()
        }
    });
    var y = "ui-effects-",
        b = e;
    e.effects = {
            effect: {}
        },
        function(e, t) {
            function n(e, t, n) {
                var r = c[t.type] || {};
                return null == e ? n || !t.def ? null : t.def : (e = r.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : r.mod ? (e + r.mod) % r.mod : 0 > e ? 0 : e > r.max ? r.max : e)
            }

            function r(n) {
                var r = f(),
                    i = r._rgba = [];
                return n = n.toLowerCase(), d(a, function(e, s) {
                    var o, u = s.re.exec(n),
                        a = u && s.parse(u),
                        f = s.space || "rgba";
                    return a ? (o = r[f](a), r[l[f].cache] = o[l[f].cache], i = r._rgba = o._rgba, !1) : t
                }), i.length ? ("0,0,0,0" === i.join() && e.extend(i, s.transparent), r) : s[n]
            }

            function i(e, t, n) {
                return n = (n + 1) % 1, 1 > 6 * n ? e + 6 * (t - e) * n : 1 > 2 * n ? t : 2 > 3 * n ? e + 6 * (t - e) * (2 / 3 - n) : e
            }
            var s, o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                u = /^([\-+])=\s*(\d+\.?\d*)/,
                a = [{
                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(e) {
                        return [e[1], e[2], e[3], e[4]]
                    }
                }, {
                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(e) {
                        return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]]
                    }
                }, {
                    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                    parse: function(e) {
                        return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
                    }
                }, {
                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                    parse: function(e) {
                        return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
                    }
                }, {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function(e) {
                        return [e[1], e[2] / 100, e[3] / 100, e[4]]
                    }
                }],
                f = e.Color = function(t, n, r, i) {
                    return new e.Color.fn.parse(t, n, r, i)
                },
                l = {
                    rgba: {
                        props: {
                            red: {
                                idx: 0,
                                type: "byte"
                            },
                            green: {
                                idx: 1,
                                type: "byte"
                            },
                            blue: {
                                idx: 2,
                                type: "byte"
                            }
                        }
                    },
                    hsla: {
                        props: {
                            hue: {
                                idx: 0,
                                type: "degrees"
                            },
                            saturation: {
                                idx: 1,
                                type: "percent"
                            },
                            lightness: {
                                idx: 2,
                                type: "percent"
                            }
                        }
                    }
                },
                c = {
                    "byte": {
                        floor: !0,
                        max: 255
                    },
                    percent: {
                        max: 1
                    },
                    degrees: {
                        mod: 360,
                        floor: !0
                    }
                },
                h = f.support = {},
                p = e("<p>")[0],
                d = e.each;
            p.style.cssText = "background-color:rgba(1,1,1,.5)", h.rgba = p.style.backgroundColor.indexOf("rgba") > -1, d(l, function(e, t) {
                t.cache = "_" + e, t.props.alpha = {
                    idx: 3,
                    type: "percent",
                    def: 1
                }
            }), f.fn = e.extend(f.prototype, {
                parse: function(i, o, u, a) {
                    if (i === t) return this._rgba = [null, null, null, null], this;
                    (i.jquery || i.nodeType) && (i = e(i).css(o), o = t);
                    var c = this,
                        h = e.type(i),
                        p = this._rgba = [];
                    return o !== t && (i = [i, o, u, a], h = "array"), "string" === h ? this.parse(r(i) || s._default) : "array" === h ? (d(l.rgba.props, function(e, t) {
                        p[t.idx] = n(i[t.idx], t)
                    }), this) : "object" === h ? (i instanceof f ? d(l, function(e, t) {
                        i[t.cache] && (c[t.cache] = i[t.cache].slice())
                    }) : d(l, function(t, r) {
                        var s = r.cache;
                        d(r.props, function(e, t) {
                            if (!c[s] && r.to) {
                                if ("alpha" === e || null == i[e]) return;
                                c[s] = r.to(c._rgba)
                            }
                            c[s][t.idx] = n(i[e], t, !0)
                        }), c[s] && 0 > e.inArray(null, c[s].slice(0, 3)) && (c[s][3] = 1, r.from && (c._rgba = r.from(c[s])))
                    }), this) : t
                },
                is: function(e) {
                    var n = f(e),
                        r = !0,
                        i = this;
                    return d(l, function(e, s) {
                        var o, u = n[s.cache];
                        return u && (o = i[s.cache] || s.to && s.to(i._rgba) || [], d(s.props, function(e, n) {
                            return null != u[n.idx] ? r = u[n.idx] === o[n.idx] : t
                        })), r
                    }), r
                },
                _space: function() {
                    var e = [],
                        t = this;
                    return d(l, function(n, r) {
                        t[r.cache] && e.push(n)
                    }), e.pop()
                },
                transition: function(e, t) {
                    var r = f(e),
                        i = r._space(),
                        s = l[i],
                        o = 0 === this.alpha() ? f("transparent") : this,
                        u = o[s.cache] || s.to(o._rgba),
                        a = u.slice();
                    return r = r[s.cache], d(s.props, function(e, i) {
                        var s = i.idx,
                            o = u[s],
                            f = r[s],
                            l = c[i.type] || {};
                        null !== f && (null === o ? a[s] = f : (l.mod && (f - o > l.mod / 2 ? o += l.mod : o - f > l.mod / 2 && (o -= l.mod)), a[s] = n((f - o) * t + o, i)))
                    }), this[i](a)
                },
                blend: function(t) {
                    if (1 === this._rgba[3]) return this;
                    var n = this._rgba.slice(),
                        r = n.pop(),
                        i = f(t)._rgba;
                    return f(e.map(n, function(e, t) {
                        return (1 - r) * i[t] + r * e
                    }))
                },
                toRgbaString: function() {
                    var t = "rgba(",
                        n = e.map(this._rgba, function(e, t) {
                            return null == e ? t > 2 ? 1 : 0 : e
                        });
                    return 1 === n[3] && (n.pop(), t = "rgb("), t + n.join() + ")"
                },
                toHslaString: function() {
                    var t = "hsla(",
                        n = e.map(this.hsla(), function(e, t) {
                            return null == e && (e = t > 2 ? 1 : 0), t && 3 > t && (e = Math.round(100 * e) + "%"), e
                        });
                    return 1 === n[3] && (n.pop(), t = "hsl("), t + n.join() + ")"
                },
                toHexString: function(t) {
                    var n = this._rgba.slice(),
                        r = n.pop();
                    return t && n.push(~~(255 * r)), "#" + e.map(n, function(e) {
                        return e = (e || 0).toString(16), 1 === e.length ? "0" + e : e
                    }).join("")
                },
                toString: function() {
                    return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                }
            }), f.fn.parse.prototype = f.fn, l.hsla.to = function(e) {
                if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                var t, n, r = e[0] / 255,
                    i = e[1] / 255,
                    s = e[2] / 255,
                    o = e[3],
                    u = Math.max(r, i, s),
                    a = Math.min(r, i, s),
                    f = u - a,
                    l = u + a,
                    c = .5 * l;
                return t = a === u ? 0 : r === u ? 60 * (i - s) / f + 360 : i === u ? 60 * (s - r) / f + 120 : 60 * (r - i) / f + 240, n = 0 === f ? 0 : .5 >= c ? f / l : f / (2 - l), [Math.round(t) % 360, n, c, null == o ? 1 : o]
            }, l.hsla.from = function(e) {
                if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                var t = e[0] / 360,
                    n = e[1],
                    r = e[2],
                    s = e[3],
                    o = .5 >= r ? r * (1 + n) : r + n - r * n,
                    u = 2 * r - o;
                return [Math.round(255 * i(u, o, t + 1 / 3)), Math.round(255 * i(u, o, t)), Math.round(255 * i(u, o, t - 1 / 3)), s]
            }, d(l, function(r, i) {
                var s = i.props,
                    o = i.cache,
                    a = i.to,
                    l = i.from;
                f.fn[r] = function(r) {
                    if (a && !this[o] && (this[o] = a(this._rgba)), r === t) return this[o].slice();
                    var i, u = e.type(r),
                        c = "array" === u || "object" === u ? r : arguments,
                        h = this[o].slice();
                    return d(s, function(e, t) {
                        var r = c["object" === u ? e : t.idx];
                        null == r && (r = h[t.idx]), h[t.idx] = n(r, t)
                    }), l ? (i = f(l(h)), i[o] = h, i) : f(h)
                }, d(s, function(t, n) {
                    f.fn[t] || (f.fn[t] = function(i) {
                        var s, o = e.type(i),
                            a = "alpha" === t ? this._hsla ? "hsla" : "rgba" : r,
                            f = this[a](),
                            l = f[n.idx];
                        return "undefined" === o ? l : ("function" === o && (i = i.call(this, l), o = e.type(i)), null == i && n.empty ? this : ("string" === o && (s = u.exec(i), s && (i = l + parseFloat(s[2]) * ("+" === s[1] ? 1 : -1))), f[n.idx] = i, this[a](f)))
                    })
                })
            }), f.hook = function(t) {
                var n = t.split(" ");
                d(n, function(t, n) {
                    e.cssHooks[n] = {
                        set: function(t, i) {
                            var s, o, u = "";
                            if ("transparent" !== i && ("string" !== e.type(i) || (s = r(i)))) {
                                if (i = f(s || i), !h.rgba && 1 !== i._rgba[3]) {
                                    for (o = "backgroundColor" === n ? t.parentNode : t;
                                        ("" === u || "transparent" === u) && o && o.style;) try {
                                        u = e.css(o, "backgroundColor"), o = o.parentNode
                                    } catch (a) {}
                                    i = i.blend(u && "transparent" !== u ? u : "_default")
                                }
                                i = i.toRgbaString()
                            }
                            try {
                                t.style[n] = i
                            } catch (a) {}
                        }
                    }, e.fx.step[n] = function(t) {
                        t.colorInit || (t.start = f(t.elem, n), t.end = f(t.end), t.colorInit = !0), e.cssHooks[n].set(t.elem, t.start.transition(t.end, t.pos))
                    }
                })
            }, f.hook(o), e.cssHooks.borderColor = {
                expand: function(e) {
                    var t = {};
                    return d(["Top", "Right", "Bottom", "Left"], function(n, r) {
                        t["border" + r + "Color"] = e
                    }), t
                }
            }, s = e.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff"
            }
        }(b),
        function() {
            function t(t) {
                var n, r, i = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
                    s = {};
                if (i && i.length && i[0] && i[i[0]])
                    for (r = i.length; r--;) n = i[r], "string" == typeof i[n] && (s[e.camelCase(n)] = i[n]);
                else
                    for (n in i) "string" == typeof i[n] && (s[n] = i[n]);
                return s
            }

            function n(t, n) {
                var r, s, o = {};
                for (r in n) s = n[r], t[r] !== s && (i[r] || (e.fx.step[r] || !isNaN(parseFloat(s))) && (o[r] = s));
                return o
            }
            var r = ["add", "remove", "toggle"],
                i = {
                    border: 1,
                    borderBottom: 1,
                    borderColor: 1,
                    borderLeft: 1,
                    borderRight: 1,
                    borderTop: 1,
                    borderWidth: 1,
                    margin: 1,
                    padding: 1
                };
            e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, n) {
                e.fx.step[n] = function(e) {
                    ("none" !== e.end && !e.setAttr || 1 === e.pos && !e.setAttr) && (b.style(e.elem, n, e.end), e.setAttr = !0)
                }
            }), e.fn.addBack || (e.fn.addBack = function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }), e.effects.animateClass = function(i, s, o, u) {
                var a = e.speed(s, o, u);
                return this.queue(function() {
                    var s, o = e(this),
                        u = o.attr("class") || "",
                        f = a.children ? o.find("*").addBack() : o;
                    f = f.map(function() {
                        var n = e(this);
                        return {
                            el: n,
                            start: t(this)
                        }
                    }), s = function() {
                        e.each(r, function(e, t) {
                            i[t] && o[t + "Class"](i[t])
                        })
                    }, s(), f = f.map(function() {
                        return this.end = t(this.el[0]), this.diff = n(this.start, this.end), this
                    }), o.attr("class", u), f = f.map(function() {
                        var t = this,
                            n = e.Deferred(),
                            r = e.extend({}, a, {
                                queue: !1,
                                complete: function() {
                                    n.resolve(t)
                                }
                            });
                        return this.el.animate(this.diff, r), n.promise()
                    }), e.when.apply(e, f.get()).done(function() {
                        s(), e.each(arguments, function() {
                            var t = this.el;
                            e.each(this.diff, function(e) {
                                t.css(e, "")
                            })
                        }), a.complete.call(o[0])
                    })
                })
            }, e.fn.extend({
                addClass: function(t) {
                    return function(n, r, i, s) {
                        return r ? e.effects.animateClass.call(this, {
                            add: n
                        }, r, i, s) : t.apply(this, arguments)
                    }
                }(e.fn.addClass),
                removeClass: function(t) {
                    return function(n, r, i, s) {
                        return arguments.length > 1 ? e.effects.animateClass.call(this, {
                            remove: n
                        }, r, i, s) : t.apply(this, arguments)
                    }
                }(e.fn.removeClass),
                toggleClass: function(t) {
                    return function(n, r, i, s, o) {
                        return "boolean" == typeof r || void 0 === r ? i ? e.effects.animateClass.call(this, r ? {
                            add: n
                        } : {
                            remove: n
                        }, i, s, o) : t.apply(this, arguments) : e.effects.animateClass.call(this, {
                            toggle: n
                        }, r, i, s)
                    }
                }(e.fn.toggleClass),
                switchClass: function(t, n, r, i, s) {
                    return e.effects.animateClass.call(this, {
                        add: n,
                        remove: t
                    }, r, i, s)
                }
            })
        }(),
        function() {
            function t(t, n, r, i) {
                return e.isPlainObject(t) && (n = t, t = t.effect), t = {
                    effect: t
                }, null == n && (n = {}), e.isFunction(n) && (i = n, r = null, n = {}), ("number" == typeof n || e.fx.speeds[n]) && (i = r, r = n, n = {}), e.isFunction(r) && (i = r, r = null), n && e.extend(t, n), r = r || n.duration, t.duration = e.fx.off ? 0 : "number" == typeof r ? r : r in e.fx.speeds ? e.fx.speeds[r] : e.fx.speeds._default, t.complete = i || n.complete, t
            }

            function n(t) {
                return !t || "number" == typeof t || e.fx.speeds[t] ? !0 : "string" != typeof t || e.effects.effect[t] ? e.isFunction(t) ? !0 : "object" != typeof t || t.effect ? !1 : !0 : !0
            }
            e.extend(e.effects, {
                version: "1.11.1",
                save: function(e, t) {
                    for (var n = 0; t.length > n; n++) null !== t[n] && e.data(y + t[n], e[0].style[t[n]])
                },
                restore: function(e, t) {
                    var n, r;
                    for (r = 0; t.length > r; r++) null !== t[r] && (n = e.data(y + t[r]), void 0 === n && (n = ""), e.css(t[r], n))
                },
                setMode: function(e, t) {
                    return "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"), t
                },
                getBaseline: function(e, t) {
                    var n, r;
                    switch (e[0]) {
                        case "top":
                            n = 0;
                            break;
                        case "middle":
                            n = .5;
                            break;
                        case "bottom":
                            n = 1;
                            break;
                        default:
                            n = e[0] / t.height
                    }
                    switch (e[1]) {
                        case "left":
                            r = 0;
                            break;
                        case "center":
                            r = .5;
                            break;
                        case "right":
                            r = 1;
                            break;
                        default:
                            r = e[1] / t.width
                    }
                    return {
                        x: r,
                        y: n
                    }
                },
                createWrapper: function(t) {
                    if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                    var n = {
                            width: t.outerWidth(!0),
                            height: t.outerHeight(!0),
                            "float": t.css("float")
                        },
                        r = e("<div></div>").addClass("ui-effects-wrapper").css({
                            fontSize: "100%",
                            background: "transparent",
                            border: "none",
                            margin: 0,
                            padding: 0
                        }),
                        i = {
                            width: t.width(),
                            height: t.height()
                        },
                        s = document.activeElement;
                    try {
                        s.id
                    } catch (o) {
                        s = document.body
                    }
                    return t.wrap(r), (t[0] === s || e.contains(t[0], s)) && e(s).focus(), r = t.parent(), "static" === t.css("position") ? (r.css({
                        position: "relative"
                    }), t.css({
                        position: "relative"
                    })) : (e.extend(n, {
                        position: t.css("position"),
                        zIndex: t.css("z-index")
                    }), e.each(["top", "left", "bottom", "right"], function(e, r) {
                        n[r] = t.css(r), isNaN(parseInt(n[r], 10)) && (n[r] = "auto")
                    }), t.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    })), t.css(i), r.css(n).show()
                },
                removeWrapper: function(t) {
                    var n = document.activeElement;
                    return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === n || e.contains(t[0], n)) && e(n).focus()), t
                },
                setTransition: function(t, n, r, i) {
                    return i = i || {}, e.each(n, function(e, n) {
                        var s = t.cssUnit(n);
                        s[0] > 0 && (i[n] = s[0] * r + s[1])
                    }), i
                }
            }), e.fn.extend({
                effect: function() {
                    function n(t) {
                        function n() {
                            e.isFunction(s) && s.call(i[0]), e.isFunction(t) && t()
                        }
                        var i = e(this),
                            s = r.complete,
                            u = r.mode;
                        (i.is(":hidden") ? "hide" === u : "show" === u) ? (i[u](), n()) : o.call(i[0], r, n)
                    }
                    var r = t.apply(this, arguments),
                        i = r.mode,
                        s = r.queue,
                        o = e.effects.effect[r.effect];
                    return e.fx.off || !o ? i ? this[i](r.duration, r.complete) : this.each(function() {
                        r.complete && r.complete.call(this)
                    }) : s === !1 ? this.each(n) : this.queue(s || "fx", n)
                },
                show: function(e) {
                    return function(r) {
                        if (n(r)) return e.apply(this, arguments);
                        var i = t.apply(this, arguments);
                        return i.mode = "show", this.effect.call(this, i)
                    }
                }(e.fn.show),
                hide: function(e) {
                    return function(r) {
                        if (n(r)) return e.apply(this, arguments);
                        var i = t.apply(this, arguments);
                        return i.mode = "hide", this.effect.call(this, i)
                    }
                }(e.fn.hide),
                toggle: function(e) {
                    return function(r) {
                        if (n(r) || "boolean" == typeof r) return e.apply(this, arguments);
                        var i = t.apply(this, arguments);
                        return i.mode = "toggle", this.effect.call(this, i)
                    }
                }(e.fn.toggle),
                cssUnit: function(t) {
                    var n = this.css(t),
                        r = [];
                    return e.each(["em", "px", "%", "pt"], function(e, t) {
                        n.indexOf(t) > 0 && (r = [parseFloat(n), t])
                    }), r
                }
            })
        }(),
        function() {
            var t = {};
            e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e, n) {
                t[n] = function(t) {
                    return Math.pow(t, e + 2)
                }
            }), e.extend(t, {
                Sine: function(e) {
                    return 1 - Math.cos(e * Math.PI / 2)
                },
                Circ: function(e) {
                    return 1 - Math.sqrt(1 - e * e)
                },
                Elastic: function(e) {
                    return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
                },
                Back: function(e) {
                    return e * e * (3 * e - 2)
                },
                Bounce: function(e) {
                    for (var t, n = 4;
                        ((t = Math.pow(2, --n)) - 1) / 11 > e;);
                    return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
                }
            }), e.each(t, function(t, n) {
                e.easing["easeIn" + t] = n, e.easing["easeOut" + t] = function(e) {
                    return 1 - n(1 - e)
                }, e.easing["easeInOut" + t] = function(e) {
                    return .5 > e ? n(2 * e) / 2 : 1 - n(-2 * e + 2) / 2
                }
            })
        }(), e.effects, e.effects.effect.blind = function(t, n) {
            var r, i, s, o = e(this),
                u = /up|down|vertical/,
                a = /up|left|vertical|horizontal/,
                f = ["position", "top", "bottom", "left", "right", "height", "width"],
                l = e.effects.setMode(o, t.mode || "hide"),
                c = t.direction || "up",
                h = u.test(c),
                p = h ? "height" : "width",
                d = h ? "top" : "left",
                v = a.test(c),
                m = {},
                g = "show" === l;
            o.parent().is(".ui-effects-wrapper") ? e.effects.save(o.parent(), f) : e.effects.save(o, f), o.show(), r = e.effects.createWrapper(o).css({
                overflow: "hidden"
            }), i = r[p](), s = parseFloat(r.css(d)) || 0, m[p] = g ? i : 0, v || (o.css(h ? "bottom" : "right", 0).css(h ? "top" : "left", "auto").css({
                position: "absolute"
            }), m[d] = g ? s : i + s), g && (r.css(p, 0), v || r.css(d, s + i)), r.animate(m, {
                duration: t.duration,
                easing: t.easing,
                queue: !1,
                complete: function() {
                    "hide" === l && o.hide(), e.effects.restore(o, f), e.effects.removeWrapper(o), n()
                }
            })
        }, e.effects.effect.bounce = function(t, n) {
            var r, i, s, o = e(this),
                u = ["position", "top", "bottom", "left", "right", "height", "width"],
                a = e.effects.setMode(o, t.mode || "effect"),
                f = "hide" === a,
                l = "show" === a,
                c = t.direction || "up",
                h = t.distance,
                p = t.times || 5,
                d = 2 * p + (l || f ? 1 : 0),
                v = t.duration / d,
                m = t.easing,
                g = "up" === c || "down" === c ? "top" : "left",
                y = "up" === c || "left" === c,
                b = o.queue(),
                w = b.length;
            for ((l || f) && u.push("opacity"), e.effects.save(o, u), o.show(), e.effects.createWrapper(o), h || (h = o["top" === g ? "outerHeight" : "outerWidth"]() / 3), l && (s = {
                    opacity: 1
                }, s[g] = 0, o.css("opacity", 0).css(g, y ? 2 * -h : 2 * h).animate(s, v, m)), f && (h /= Math.pow(2, p - 1)), s = {}, s[g] = 0, r = 0; p > r; r++) i = {}, i[g] = (y ? "-=" : "+=") + h, o.animate(i, v, m).animate(s, v, m), h = f ? 2 * h : h / 2;
            f && (i = {
                opacity: 0
            }, i[g] = (y ? "-=" : "+=") + h, o.animate(i, v, m)), o.queue(function() {
                f && o.hide(), e.effects.restore(o, u), e.effects.removeWrapper(o), n()
            }), w > 1 && b.splice.apply(b, [1, 0].concat(b.splice(w, d + 1))), o.dequeue()
        }, e.effects.effect.clip = function(t, n) {
            var r, i, s, o = e(this),
                u = ["position", "top", "bottom", "left", "right", "height", "width"],
                a = e.effects.setMode(o, t.mode || "hide"),
                f = "show" === a,
                l = t.direction || "vertical",
                c = "vertical" === l,
                h = c ? "height" : "width",
                p = c ? "top" : "left",
                d = {};
            e.effects.save(o, u), o.show(), r = e.effects.createWrapper(o).css({
                overflow: "hidden"
            }), i = "IMG" === o[0].tagName ? r : o, s = i[h](), f && (i.css(h, 0), i.css(p, s / 2)), d[h] = f ? s : 0, d[p] = f ? 0 : s / 2, i.animate(d, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: function() {
                    f || o.hide(), e.effects.restore(o, u), e.effects.removeWrapper(o), n()
                }
            })
        }, e.effects.effect.drop = function(t, n) {
            var r, i = e(this),
                s = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
                o = e.effects.setMode(i, t.mode || "hide"),
                u = "show" === o,
                a = t.direction || "left",
                f = "up" === a || "down" === a ? "top" : "left",
                l = "up" === a || "left" === a ? "pos" : "neg",
                c = {
                    opacity: u ? 1 : 0
                };
            e.effects.save(i, s), i.show(), e.effects.createWrapper(i), r = t.distance || i["top" === f ? "outerHeight" : "outerWidth"](!0) / 2, u && i.css("opacity", 0).css(f, "pos" === l ? -r : r), c[f] = (u ? "pos" === l ? "+=" : "-=" : "pos" === l ? "-=" : "+=") + r, i.animate(c, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: function() {
                    "hide" === o && i.hide(), e.effects.restore(i, s), e.effects.removeWrapper(i), n()
                }
            })
        }, e.effects.effect.explode = function(t, n) {
            function r() {
                b.push(this), b.length === c * h && i()
            }

            function i() {
                p.css({
                    visibility: "visible"
                }), e(b).remove(), v || p.hide(), n()
            }
            var s, o, u, a, f, l, c = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3,
                h = c,
                p = e(this),
                d = e.effects.setMode(p, t.mode || "hide"),
                v = "show" === d,
                m = p.show().css("visibility", "hidden").offset(),
                g = Math.ceil(p.outerWidth() / h),
                y = Math.ceil(p.outerHeight() / c),
                b = [];
            for (s = 0; c > s; s++)
                for (a = m.top + s * y, l = s - (c - 1) / 2, o = 0; h > o; o++) u = m.left + o * g, f = o - (h - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -o * g,
                    top: -s * y
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: g,
                    height: y,
                    left: u + (v ? f * g : 0),
                    top: a + (v ? l * y : 0),
                    opacity: v ? 0 : 1
                }).animate({
                    left: u + (v ? 0 : f * g),
                    top: a + (v ? 0 : l * y),
                    opacity: v ? 1 : 0
                }, t.duration || 500, t.easing, r)
        }, e.effects.effect.fade = function(t, n) {
            var r = e(this),
                i = e.effects.setMode(r, t.mode || "toggle");
            r.animate({
                opacity: i
            }, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: n
            })
        }, e.effects.effect.fold = function(t, n) {
            var r, i, s = e(this),
                o = ["position", "top", "bottom", "left", "right", "height", "width"],
                u = e.effects.setMode(s, t.mode || "hide"),
                a = "show" === u,
                f = "hide" === u,
                l = t.size || 15,
                c = /([0-9]+)%/.exec(l),
                h = !!t.horizFirst,
                p = a !== h,
                d = p ? ["width", "height"] : ["height", "width"],
                v = t.duration / 2,
                m = {},
                g = {};
            e.effects.save(s, o), s.show(), r = e.effects.createWrapper(s).css({
                overflow: "hidden"
            }), i = p ? [r.width(), r.height()] : [r.height(), r.width()], c && (l = parseInt(c[1], 10) / 100 * i[f ? 0 : 1]), a && r.css(h ? {
                height: 0,
                width: l
            } : {
                height: l,
                width: 0
            }), m[d[0]] = a ? i[0] : l, g[d[1]] = a ? i[1] : 0, r.animate(m, v, t.easing).animate(g, v, t.easing, function() {
                f && s.hide(), e.effects.restore(s, o), e.effects.removeWrapper(s), n()
            })
        }, e.effects.effect.highlight = function(t, n) {
            var r = e(this),
                i = ["backgroundImage", "backgroundColor", "opacity"],
                s = e.effects.setMode(r, t.mode || "show"),
                o = {
                    backgroundColor: r.css("backgroundColor")
                };
            "hide" === s && (o.opacity = 0), e.effects.save(r, i), r.show().css({
                backgroundImage: "none",
                backgroundColor: t.color || "#ffff99"
            }).animate(o, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: function() {
                    "hide" === s && r.hide(), e.effects.restore(r, i), n()
                }
            })
        }, e.effects.effect.size = function(t, n) {
            var r, i, s, o = e(this),
                u = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
                a = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
                f = ["width", "height", "overflow"],
                l = ["fontSize"],
                c = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                h = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                p = e.effects.setMode(o, t.mode || "effect"),
                d = t.restore || "effect" !== p,
                v = t.scale || "both",
                m = t.origin || ["middle", "center"],
                g = o.css("position"),
                y = d ? u : a,
                b = {
                    height: 0,
                    width: 0,
                    outerHeight: 0,
                    outerWidth: 0
                };
            "show" === p && o.show(), r = {
                height: o.height(),
                width: o.width(),
                outerHeight: o.outerHeight(),
                outerWidth: o.outerWidth()
            }, "toggle" === t.mode && "show" === p ? (o.from = t.to || b, o.to = t.from || r) : (o.from = t.from || ("show" === p ? b : r), o.to = t.to || ("hide" === p ? b : r)), s = {
                from: {
                    y: o.from.height / r.height,
                    x: o.from.width / r.width
                },
                to: {
                    y: o.to.height / r.height,
                    x: o.to.width / r.width
                }
            }, ("box" === v || "both" === v) && (s.from.y !== s.to.y && (y = y.concat(c), o.from = e.effects.setTransition(o, c, s.from.y, o.from), o.to = e.effects.setTransition(o, c, s.to.y, o.to)), s.from.x !== s.to.x && (y = y.concat(h), o.from = e.effects.setTransition(o, h, s.from.x, o.from), o.to = e.effects.setTransition(o, h, s.to.x, o.to))), ("content" === v || "both" === v) && s.from.y !== s.to.y && (y = y.concat(l).concat(f), o.from = e.effects.setTransition(o, l, s.from.y, o.from), o.to = e.effects.setTransition(o, l, s.to.y, o.to)), e.effects.save(o, y), o.show(), e.effects.createWrapper(o), o.css("overflow", "hidden").css(o.from), m && (i = e.effects.getBaseline(m, r), o.from.top = (r.outerHeight - o.outerHeight()) * i.y, o.from.left = (r.outerWidth - o.outerWidth()) * i.x, o.to.top = (r.outerHeight - o.to.outerHeight) * i.y, o.to.left = (r.outerWidth - o.to.outerWidth) * i.x), o.css(o.from), ("content" === v || "both" === v) && (c = c.concat(["marginTop", "marginBottom"]).concat(l), h = h.concat(["marginLeft", "marginRight"]), f = u.concat(c).concat(h), o.find("*[width]").each(function() {
                var n = e(this),
                    r = {
                        height: n.height(),
                        width: n.width(),
                        outerHeight: n.outerHeight(),
                        outerWidth: n.outerWidth()
                    };
                d && e.effects.save(n, f), n.from = {
                    height: r.height * s.from.y,
                    width: r.width * s.from.x,
                    outerHeight: r.outerHeight * s.from.y,
                    outerWidth: r.outerWidth * s.from.x
                }, n.to = {
                    height: r.height * s.to.y,
                    width: r.width * s.to.x,
                    outerHeight: r.height * s.to.y,
                    outerWidth: r.width * s.to.x
                }, s.from.y !== s.to.y && (n.from = e.effects.setTransition(n, c, s.from.y, n.from), n.to = e.effects.setTransition(n, c, s.to.y, n.to)), s.from.x !== s.to.x && (n.from = e.effects.setTransition(n, h, s.from.x, n.from), n.to = e.effects.setTransition(n, h, s.to.x, n.to)), n.css(n.from), n.animate(n.to, t.duration, t.easing, function() {
                    d && e.effects.restore(n, f)
                })
            })), o.animate(o.to, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: function() {
                    0 === o.to.opacity && o.css("opacity", o.from.opacity), "hide" === p && o.hide(), e.effects.restore(o, y), d || ("static" === g ? o.css({
                        position: "relative",
                        top: o.to.top,
                        left: o.to.left
                    }) : e.each(["top", "left"], function(e, t) {
                        o.css(t, function(t, n) {
                            var r = parseInt(n, 10),
                                i = e ? o.to.left : o.to.top;
                            return "auto" === n ? i + "px" : r + i + "px"
                        })
                    })), e.effects.removeWrapper(o), n()
                }
            })
        }, e.effects.effect.scale = function(t, n) {
            var r = e(this),
                i = e.extend(!0, {}, t),
                s = e.effects.setMode(r, t.mode || "effect"),
                o = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) ? 0 : "hide" === s ? 0 : 100),
                u = t.direction || "both",
                a = t.origin,
                f = {
                    height: r.height(),
                    width: r.width(),
                    outerHeight: r.outerHeight(),
                    outerWidth: r.outerWidth()
                },
                l = {
                    y: "horizontal" !== u ? o / 100 : 1,
                    x: "vertical" !== u ? o / 100 : 1
                };
            i.effect = "size", i.queue = !1, i.complete = n, "effect" !== s && (i.origin = a || ["middle", "center"], i.restore = !0), i.from = t.from || ("show" === s ? {
                height: 0,
                width: 0,
                outerHeight: 0,
                outerWidth: 0
            } : f), i.to = {
                height: f.height * l.y,
                width: f.width * l.x,
                outerHeight: f.outerHeight * l.y,
                outerWidth: f.outerWidth * l.x
            }, i.fade && ("show" === s && (i.from.opacity = 0, i.to.opacity = 1), "hide" === s && (i.from.opacity = 1, i.to.opacity = 0)), r.effect(i)
        }, e.effects.effect.puff = function(t, n) {
            var r = e(this),
                i = e.effects.setMode(r, t.mode || "hide"),
                s = "hide" === i,
                o = parseInt(t.percent, 10) || 150,
                u = o / 100,
                a = {
                    height: r.height(),
                    width: r.width(),
                    outerHeight: r.outerHeight(),
                    outerWidth: r.outerWidth()
                };
            e.extend(t, {
                effect: "scale",
                queue: !1,
                fade: !0,
                mode: i,
                complete: n,
                percent: s ? o : 100,
                from: s ? a : {
                    height: a.height * u,
                    width: a.width * u,
                    outerHeight: a.outerHeight * u,
                    outerWidth: a.outerWidth * u
                }
            }), r.effect(t)
        }, e.effects.effect.pulsate = function(t, n) {
            var r, i = e(this),
                s = e.effects.setMode(i, t.mode || "show"),
                o = "show" === s,
                u = "hide" === s,
                a = o || "hide" === s,
                f = 2 * (t.times || 5) + (a ? 1 : 0),
                l = t.duration / f,
                c = 0,
                h = i.queue(),
                p = h.length;
            for ((o || !i.is(":visible")) && (i.css("opacity", 0).show(), c = 1), r = 1; f > r; r++) i.animate({
                opacity: c
            }, l, t.easing), c = 1 - c;
            i.animate({
                opacity: c
            }, l, t.easing), i.queue(function() {
                u && i.hide(), n()
            }), p > 1 && h.splice.apply(h, [1, 0].concat(h.splice(p, f + 1))), i.dequeue()
        }, e.effects.effect.shake = function(t, n) {
            var r, i = e(this),
                s = ["position", "top", "bottom", "left", "right", "height", "width"],
                o = e.effects.setMode(i, t.mode || "effect"),
                u = t.direction || "left",
                a = t.distance || 20,
                f = t.times || 3,
                l = 2 * f + 1,
                c = Math.round(t.duration / l),
                h = "up" === u || "down" === u ? "top" : "left",
                p = "up" === u || "left" === u,
                d = {},
                v = {},
                m = {},
                g = i.queue(),
                y = g.length;
            for (e.effects.save(i, s), i.show(), e.effects.createWrapper(i), d[h] = (p ? "-=" : "+=") + a, v[h] = (p ? "+=" : "-=") + 2 * a, m[h] = (p ? "-=" : "+=") + 2 * a, i.animate(d, c, t.easing), r = 1; f > r; r++) i.animate(v, c, t.easing).animate(m, c, t.easing);
            i.animate(v, c, t.easing).animate(d, c / 2, t.easing).queue(function() {
                "hide" === o && i.hide(), e.effects.restore(i, s), e.effects.removeWrapper(i), n()
            }), y > 1 && g.splice.apply(g, [1, 0].concat(g.splice(y, l + 1))), i.dequeue()
        }, e.effects.effect.slide = function(t, n) {
            var r, i = e(this),
                s = ["position", "top", "bottom", "left", "right", "width", "height"],
                o = e.effects.setMode(i, t.mode || "show"),
                u = "show" === o,
                a = t.direction || "left",
                f = "up" === a || "down" === a ? "top" : "left",
                l = "up" === a || "left" === a,
                c = {};
            e.effects.save(i, s), i.show(), r = t.distance || i["top" === f ? "outerHeight" : "outerWidth"](!0), e.effects.createWrapper(i).css({
                overflow: "hidden"
            }), u && i.css(f, l ? isNaN(r) ? "-" + r : -r : r), c[f] = (u ? l ? "+=" : "-=" : l ? "-=" : "+=") + r, i.animate(c, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: function() {
                    "hide" === o && i.hide(), e.effects.restore(i, s), e.effects.removeWrapper(i), n()
                }
            })
        }, e.effects.effect.transfer = function(t, n) {
            var r = e(this),
                i = e(t.to),
                s = "fixed" === i.css("position"),
                o = e("body"),
                u = s ? o.scrollTop() : 0,
                a = s ? o.scrollLeft() : 0,
                f = i.offset(),
                l = {
                    top: f.top - u,
                    left: f.left - a,
                    height: i.innerHeight(),
                    width: i.innerWidth()
                },
                c = r.offset(),
                h = e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({
                    top: c.top - u,
                    left: c.left - a,
                    height: r.innerHeight(),
                    width: r.innerWidth(),
                    position: s ? "fixed" : "absolute"
                }).animate(l, t.duration, t.easing, function() {
                    h.remove(), n()
                })
        }
});
(function(e) {
    e.fn.appear = function(t, n) {
        var r = e.extend({
            data: undefined,
            one: true,
            accX: 0,
            accY: 0
        }, n);
        return this.each(function() {
            var n = e(this);
            n.appeared = false;
            if (!t) {
                n.trigger("appear", r.data);
                return
            }
            var i = e(window);
            var s = function() {
                if (!n.is(":visible")) {
                    n.appeared = false;
                    return
                }
                var e = i.scrollLeft();
                var t = i.scrollTop();
                var s = n.offset();
                var o = s.left;
                var u = s.top;
                var a = r.accX;
                var f = r.accY;
                var l = n.height();
                var c = i.height();
                var h = n.width();
                var p = i.width();
                if (u + l + f >= t && u <= t + c + f && o + h + a >= e && o <= e + p + a) {
                    if (!n.appeared) n.trigger("appear", r.data)
                } else {
                    n.appeared = false
                }
            };
            var o = function() {
                n.appeared = true;
                if (r.one) {
                    i.unbind("scroll", s);
                    var o = e.inArray(s, e.fn.appear.checks);
                    if (o >= 0) e.fn.appear.checks.splice(o, 1)
                }
                t.apply(this, arguments)
            };
            if (r.one) n.one("appear", r.data, o);
            else n.bind("appear", r.data, o);
            i.scroll(s);
            e.fn.appear.checks.push(s);
            s()
        })
    };
    e.extend(e.fn.appear, {
        checks: [],
        timeout: null,
        checkAll: function() {
            var t = e.fn.appear.checks.length;
            if (t > 0)
                while (t--) e.fn.appear.checks[t]()
        },
        run: function() {
            if (e.fn.appear.timeout) clearTimeout(e.fn.appear.timeout);
            e.fn.appear.timeout = setTimeout(e.fn.appear.checkAll, 20)
        }
    });
    e.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function(t, n) {
        var r = e.fn[n];
        if (r) {
            e.fn[n] = function() {
                var t = r.apply(this, arguments);
                e.fn.appear.run();
                return t
            }
        }
    })
})(jQuery);
(function(e) {
    function t(e, t) {
        return e.toFixed(t.decimals)
    }
    e.fn.countTo = function(t) {
        t = t || {};
        return e(this).each(function() {
            function l() {
                a += i;
                u++;
                c(a);
                if (typeof n.onUpdate == "function") {
                    n.onUpdate.call(s, a)
                }
                if (u >= r) {
                    o.removeData("countTo");
                    clearInterval(f.interval);
                    a = n.to;
                    if (typeof n.onComplete == "function") {
                        n.onComplete.call(s, a)
                    }
                }
            }

            function c(e) {
                var t = n.formatter.call(s, e, n);
                o.text(t)
            }
            var n = e.extend({}, e.fn.countTo.defaults, {
                from: e(this).data("from"),
                to: e(this).data("to"),
                speed: e(this).data("speed"),
                refreshInterval: e(this).data("refresh-interval"),
                decimals: e(this).data("decimals")
            }, t);
            var r = Math.ceil(n.speed / n.refreshInterval),
                i = (n.to - n.from) / r;
            var s = this,
                o = e(this),
                u = 0,
                a = n.from,
                f = o.data("countTo") || {};
            o.data("countTo", f);
            if (f.interval) {
                clearInterval(f.interval)
            }
            f.interval = setInterval(l, n.refreshInterval);
            c(a)
        })
    };
    e.fn.countTo.defaults = {
        from: 0,
        to: 0,
        speed: 1e3,
        refreshInterval: 100,
        decimals: 0,
        formatter: t,
        onUpdate: null,
        onComplete: null
    }
})(jQuery);
(function(e, t, n, r) {
    "use strict";
    var i = n("html"),
        s = n(e),
        o = n(t),
        u = n.fancybox = function() {
            u.open.apply(this, arguments)
        },
        a = navigator.userAgent.match(/msie/i),
        f = null,
        l = t.createTouch !== r,
        c = function(e) {
            return e && e.hasOwnProperty && e instanceof n
        },
        h = function(e) {
            return e && n.type(e) === "string"
        },
        p = function(e) {
            return h(e) && e.indexOf("%") > 0
        },
        d = function(e) {
            return e && !(e.style.overflow && e.style.overflow === "hidden") && (e.clientWidth && e.scrollWidth > e.clientWidth || e.clientHeight && e.scrollHeight > e.clientHeight)
        },
        v = function(e, t) {
            var n = parseInt(e, 10) || 0;
            if (t && p(e)) {
                n = u.getViewport()[t] / 100 * n
            }
            return Math.ceil(n)
        },
        m = function(e, t) {
            return v(e, t) + "px"
        };
    n.extend(u, {
        version: "2.1.5",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1,
            autoSize: true,
            autoHeight: false,
            autoWidth: false,
            autoResize: true,
            autoCenter: !l,
            fitToView: true,
            aspectRatio: false,
            topRatio: .5,
            leftRatio: .5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: true,
            closeBtn: true,
            closeClick: false,
            nextClick: false,
            mouseWheel: true,
            autoPlay: false,
            playSpeed: 3e3,
            preload: 3,
            modal: false,
            loop: true,
            ajax: {
                dataType: "html",
                headers: {
                    "X-fancyBox": true
                }
            },
            iframe: {
                scrolling: "auto",
                preload: true
            },
            swf: {
                wmode: "transparent",
                allowfullscreen: "true",
                allowscriptaccess: "always"
            },
            keys: {
                next: {
                    13: "left",
                    34: "up",
                    39: "left",
                    40: "up"
                },
                prev: {
                    8: "right",
                    33: "down",
                    37: "right",
                    38: "down"
                },
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: {
                next: "left",
                prev: "right"
            },
            scrollOutside: true,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (a ? ' allowtransparency="true"' : "") + "></iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: true,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: true,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {
                overlay: true,
                title: true
            },
            onCancel: n.noop,
            beforeLoad: n.noop,
            afterLoad: n.noop,
            beforeShow: n.noop,
            afterShow: n.noop,
            beforeChange: n.noop,
            beforeClose: n.noop,
            afterClose: n.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: false,
        isOpen: false,
        isOpened: false,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {
            timer: null,
            isActive: false
        },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function(e, t) {
            if (!e) {
                return
            }
            if (!n.isPlainObject(t)) {
                t = {}
            }
            if (false === u.close(true)) {
                return
            }
            if (!n.isArray(e)) {
                e = c(e) ? n(e).get() : [e]
            }
            n.each(e, function(i, s) {
                var o = {},
                    a, f, l, p, d, v, m;
                if (n.type(s) === "object") {
                    if (s.nodeType) {
                        s = n(s)
                    }
                    if (c(s)) {
                        o = {
                            href: s.data("fancybox-href") || s.attr("href"),
                            title: s.data("fancybox-title") || s.attr("title"),
                            isDom: true,
                            element: s
                        };
                        if (n.metadata) {
                            n.extend(true, o, s.metadata())
                        }
                    } else {
                        o = s
                    }
                }
                a = t.href || o.href || (h(s) ? s : null);
                f = t.title !== r ? t.title : o.title || "";
                l = t.content || o.content;
                p = l ? "html" : t.type || o.type;
                if (!p && o.isDom) {
                    p = s.data("fancybox-type");
                    if (!p) {
                        d = s.prop("class").match(/fancybox\.(\w+)/);
                        p = d ? d[1] : null
                    }
                }
                if (h(a)) {
                    if (!p) {
                        if (u.isImage(a)) {
                            p = "image"
                        } else if (u.isSWF(a)) {
                            p = "swf"
                        } else if (a.charAt(0) === "#") {
                            p = "inline"
                        } else if (h(s)) {
                            p = "html";
                            l = s
                        }
                    }
                    if (p === "ajax") {
                        v = a.split(/\s+/, 2);
                        a = v.shift();
                        m = v.shift()
                    }
                }
                if (!l) {
                    if (p === "inline") {
                        if (a) {
                            l = n(h(a) ? a.replace(/.*(?=#[^\s]+$)/, "") : a)
                        } else if (o.isDom) {
                            l = s
                        }
                    } else if (p === "html") {
                        l = a
                    } else if (!p && !a && o.isDom) {
                        p = "inline";
                        l = s
                    }
                }
                n.extend(o, {
                    href: a,
                    type: p,
                    content: l,
                    title: f,
                    selector: m
                });
                e[i] = o
            });
            u.opts = n.extend(true, {}, u.defaults, t);
            if (t.keys !== r) {
                u.opts.keys = t.keys ? n.extend({}, u.defaults.keys, t.keys) : false
            }
            u.group = e;
            return u._start(u.opts.index)
        },
        cancel: function() {
            var e = u.coming;
            if (!e || false === u.trigger("onCancel")) {
                return
            }
            u.hideLoading();
            if (u.ajaxLoad) {
                u.ajaxLoad.abort()
            }
            u.ajaxLoad = null;
            if (u.imgPreload) {
                u.imgPreload.onload = u.imgPreload.onerror = null
            }
            if (e.wrap) {
                e.wrap.stop(true, true).trigger("onReset").remove()
            }
            u.coming = null;
            if (!u.current) {
                u._afterZoomOut(e)
            }
        },
        close: function(e) {
            u.cancel();
            if (false === u.trigger("beforeClose")) {
                return
            }
            u.unbindEvents();
            if (!u.isActive) {
                return
            }
            if (!u.isOpen || e === true) {
                n(".fancybox-wrap").stop(true).trigger("onReset").remove();
                u._afterZoomOut()
            } else {
                u.isOpen = u.isOpened = false;
                u.isClosing = true;
                n(".fancybox-item, .fancybox-nav").remove();
                u.wrap.stop(true, true).removeClass("fancybox-opened");
                u.transitions[u.current.closeMethod]()
            }
        },
        play: function(e) {
            var t = function() {
                    clearTimeout(u.player.timer)
                },
                n = function() {
                    t();
                    if (u.current && u.player.isActive) {
                        u.player.timer = setTimeout(u.next, u.current.playSpeed)
                    }
                },
                r = function() {
                    t();
                    o.unbind(".player");
                    u.player.isActive = false;
                    u.trigger("onPlayEnd")
                },
                i = function() {
                    if (u.current && (u.current.loop || u.current.index < u.group.length - 1)) {
                        u.player.isActive = true;
                        o.bind({
                            "onCancel.player beforeClose.player": r,
                            "onUpdate.player": n,
                            "beforeLoad.player": t
                        });
                        n();
                        u.trigger("onPlayStart")
                    }
                };
            if (e === true || !u.player.isActive && e !== false) {
                i()
            } else {
                r()
            }
        },
        next: function(e) {
            var t = u.current;
            if (t) {
                if (!h(e)) {
                    e = t.direction.next
                }
                u.jumpto(t.index + 1, e, "next")
            }
        },
        prev: function(e) {
            var t = u.current;
            if (t) {
                if (!h(e)) {
                    e = t.direction.prev
                }
                u.jumpto(t.index - 1, e, "prev")
            }
        },
        jumpto: function(e, t, n) {
            var i = u.current;
            if (!i) {
                return
            }
            e = v(e);
            u.direction = t || i.direction[e >= i.index ? "next" : "prev"];
            u.router = n || "jumpto";
            if (i.loop) {
                if (e < 0) {
                    e = i.group.length + e % i.group.length
                }
                e = e % i.group.length
            }
            if (i.group[e] !== r) {
                u.cancel();
                u._start(e)
            }
        },
        reposition: function(e, t) {
            var r = u.current,
                i = r ? r.wrap : null,
                s;
            if (i) {
                s = u._getPosition(t);
                if (e && e.type === "scroll") {
                    delete s.position;
                    i.stop(true, true).animate(s, 200)
                } else {
                    i.css(s);
                    r.pos = n.extend({}, r.dim, s)
                }
            }
        },
        update: function(e) {
            var t = e && e.type,
                n = !t || t === "orientationchange";
            if (n) {
                clearTimeout(f);
                f = null
            }
            if (!u.isOpen || f) {
                return
            }
            f = setTimeout(function() {
                var r = u.current;
                if (!r || u.isClosing) {
                    return
                }
                u.wrap.removeClass("fancybox-tmp");
                if (n || t === "load" || t === "resize" && r.autoResize) {
                    u._setDimension()
                }
                if (!(t === "scroll" && r.canShrink)) {
                    u.reposition(e)
                }
                u.trigger("onUpdate");
                f = null
            }, n && !l ? 0 : 300)
        },
        toggle: function(e) {
            if (u.isOpen) {
                u.current.fitToView = n.type(e) === "boolean" ? e : !u.current.fitToView;
                if (l) {
                    u.wrap.removeAttr("style").addClass("fancybox-tmp");
                    u.trigger("onUpdate")
                }
                u.update()
            }
        },
        hideLoading: function() {
            o.unbind(".loading");
            n("#fancybox-loading").remove()
        },
        showLoading: function() {
            var e, t;
            u.hideLoading();
            e = n('<div id="fancybox-loading"><div></div></div>').click(u.cancel).appendTo("body");
            o.bind("keydown.loading", function(e) {
                if ((e.which || e.keyCode) === 27) {
                    e.preventDefault();
                    u.cancel()
                }
            });
            if (!u.defaults.fixed) {
                t = u.getViewport();
                e.css({
                    position: "absolute",
                    top: t.h * .5 + t.y,
                    left: t.w * .5 + t.x
                })
            }
        },
        getViewport: function() {
            var t = u.current && u.current.locked || false,
                n = {
                    x: s.scrollLeft(),
                    y: s.scrollTop()
                };
            if (t) {
                n.w = t[0].clientWidth;
                n.h = t[0].clientHeight
            } else {
                n.w = l && e.innerWidth ? e.innerWidth : s.width();
                n.h = l && e.innerHeight ? e.innerHeight : s.height()
            }
            return n
        },
        unbindEvents: function() {
            if (u.wrap && c(u.wrap)) {
                u.wrap.unbind(".fb")
            }
            o.unbind(".fb");
            s.unbind(".fb")
        },
        bindEvents: function() {
            var e = u.current,
                t;
            if (!e) {
                return
            }
            s.bind("orientationchange.fb" + (l ? "" : " resize.fb") + (e.autoCenter && !e.locked ? " scroll.fb" : ""), u.update);
            t = e.keys;
            if (t) {
                o.bind("keydown.fb", function(i) {
                    var s = i.which || i.keyCode,
                        o = i.target || i.srcElement;
                    if (s === 27 && u.coming) {
                        return false
                    }
                    if (!i.ctrlKey && !i.altKey && !i.shiftKey && !i.metaKey && !(o && (o.type || n(o).is("[contenteditable]")))) {
                        n.each(t, function(t, o) {
                            if (e.group.length > 1 && o[s] !== r) {
                                u[t](o[s]);
                                i.preventDefault();
                                return false
                            }
                            if (n.inArray(s, o) > -1) {
                                u[t]();
                                i.preventDefault();
                                return false
                            }
                        })
                    }
                })
            }
            if (n.fn.mousewheel && e.mouseWheel) {
                u.wrap.bind("mousewheel.fb", function(t, r, i, s) {
                    var o = t.target || null,
                        a = n(o),
                        f = false;
                    while (a.length) {
                        if (f || a.is(".fancybox-skin") || a.is(".fancybox-wrap")) {
                            break
                        }
                        f = d(a[0]);
                        a = n(a).parent()
                    }
                    if (r !== 0 && !f) {
                        if (u.group.length > 1 && !e.canShrink) {
                            if (s > 0 || i > 0) {
                                u.prev(s > 0 ? "down" : "left")
                            } else if (s < 0 || i < 0) {
                                u.next(s < 0 ? "up" : "right")
                            }
                            t.preventDefault()
                        }
                    }
                })
            }
        },
        trigger: function(e, t) {
            var r, i = t || u.coming || u.current;
            if (!i) {
                return
            }
            if (n.isFunction(i[e])) {
                r = i[e].apply(i, Array.prototype.slice.call(arguments, 1))
            }
            if (r === false) {
                return false
            }
            if (i.helpers) {
                n.each(i.helpers, function(t, r) {
                    if (r && u.helpers[t] && n.isFunction(u.helpers[t][e])) {
                        u.helpers[t][e](n.extend(true, {}, u.helpers[t].defaults, r), i)
                    }
                })
            }
            o.trigger(e)
        },
        isImage: function(e) {
            return h(e) && e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
        },
        isSWF: function(e) {
            return h(e) && e.match(/\.(swf)((\?|#).*)?$/i)
        },
        _start: function(e) {
            var t = {},
                r, i, s, o, a;
            e = v(e);
            r = u.group[e] || null;
            if (!r) {
                return false
            }
            t = n.extend(true, {}, u.opts, r);
            o = t.margin;
            a = t.padding;
            if (n.type(o) === "number") {
                t.margin = [o, o, o, o]
            }
            if (n.type(a) === "number") {
                t.padding = [a, a, a, a]
            }
            if (t.modal) {
                n.extend(true, t, {
                    closeBtn: false,
                    closeClick: false,
                    nextClick: false,
                    arrows: false,
                    mouseWheel: false,
                    keys: null,
                    helpers: {
                        overlay: {
                            closeClick: false
                        }
                    }
                })
            }
            if (t.autoSize) {
                t.autoWidth = t.autoHeight = true
            }
            if (t.width === "auto") {
                t.autoWidth = true
            }
            if (t.height === "auto") {
                t.autoHeight = true
            }
            t.group = u.group;
            t.index = e;
            u.coming = t;
            if (false === u.trigger("beforeLoad")) {
                u.coming = null;
                return
            }
            s = t.type;
            i = t.href;
            if (!s) {
                u.coming = null;
                if (u.current && u.router && u.router !== "jumpto") {
                    u.current.index = e;
                    return u[u.router](u.direction)
                }
                return false
            }
            u.isActive = true;
            if (s === "image" || s === "swf") {
                t.autoHeight = t.autoWidth = false;
                t.scrolling = "visible"
            }
            if (s === "image") {
                t.aspectRatio = true
            }
            if (s === "iframe" && l) {
                t.scrolling = "scroll"
            }
            t.wrap = n(t.tpl.wrap).addClass("fancybox-" + (l ? "mobile" : "desktop") + " fancybox-type-" + s + " fancybox-tmp " + t.wrapCSS).appendTo(t.parent || "body");
            n.extend(t, {
                skin: n(".fancybox-skin", t.wrap),
                outer: n(".fancybox-outer", t.wrap),
                inner: n(".fancybox-inner", t.wrap)
            });
            n.each(["Top", "Right", "Bottom", "Left"], function(e, n) {
                t.skin.css("padding" + n, m(t.padding[e]))
            });
            u.trigger("onReady");
            if (s === "inline" || s === "html") {
                if (!t.content || !t.content.length) {
                    return u._error("content")
                }
            } else if (!i) {
                return u._error("href")
            }
            if (s === "image") {
                u._loadImage()
            } else if (s === "ajax") {
                u._loadAjax()
            } else if (s === "iframe") {
                u._loadIframe()
            } else {
                u._afterLoad()
            }
        },
        _error: function(e) {
            n.extend(u.coming, {
                type: "html",
                autoWidth: true,
                autoHeight: true,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: e,
                content: u.coming.tpl.error
            });
            u._afterLoad()
        },
        _loadImage: function() {
            var e = u.imgPreload = new Image;
            e.onload = function() {
                this.onload = this.onerror = null;
                u.coming.width = this.width / u.opts.pixelRatio;
                u.coming.height = this.height / u.opts.pixelRatio;
                u._afterLoad()
            };
            e.onerror = function() {
                this.onload = this.onerror = null;
                u._error("image")
            };
            e.src = u.coming.href;
            if (e.complete !== true) {
                u.showLoading()
            }
        },
        _loadAjax: function() {
            var e = u.coming;
            u.showLoading();
            u.ajaxLoad = n.ajax(n.extend({}, e.ajax, {
                url: e.href,
                error: function(e, t) {
                    if (u.coming && t !== "abort") {
                        u._error("ajax", e)
                    } else {
                        u.hideLoading()
                    }
                },
                success: function(t, n) {
                    if (n === "success") {
                        e.content = t;
                        u._afterLoad()
                    }
                }
            }))
        },
        _loadIframe: function() {
            var e = u.coming,
                t = n(e.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", l ? "auto" : e.iframe.scrolling).attr("src", e.href);
            n(e.wrap).bind("onReset", function() {
                try {
                    n(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                } catch (e) {}
            });
            if (e.iframe.preload) {
                u.showLoading();
                t.one("load", function() {
                    n(this).data("ready", 1);
                    if (!l) {
                        n(this).bind("load.fb", u.update)
                    }
                    n(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
                    u._afterLoad()
                })
            }
            e.content = t.appendTo(e.inner);
            if (!e.iframe.preload) {
                u._afterLoad()
            }
        },
        _preloadImages: function() {
            var e = u.group,
                t = u.current,
                n = e.length,
                r = t.preload ? Math.min(t.preload, n - 1) : 0,
                i, s;
            for (s = 1; s <= r; s += 1) {
                i = e[(t.index + s) % n];
                if (i.type === "image" && i.href) {
                    (new Image).src = i.href
                }
            }
        },
        _afterLoad: function() {
            var e = u.coming,
                t = u.current,
                r = "fancybox-placeholder",
                i, s, o, a, f, l;
            u.hideLoading();
            if (!e || u.isActive === false) {
                return
            }
            if (false === u.trigger("afterLoad", e, t)) {
                e.wrap.stop(true).trigger("onReset").remove();
                u.coming = null;
                return
            }
            if (t) {
                u.trigger("beforeChange", t);
                t.wrap.stop(true).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()
            }
            u.unbindEvents();
            i = e;
            s = e.content;
            o = e.type;
            a = e.scrolling;
            n.extend(u, {
                wrap: i.wrap,
                skin: i.skin,
                outer: i.outer,
                inner: i.inner,
                current: i,
                previous: t
            });
            f = i.href;
            switch (o) {
                case "inline":
                case "ajax":
                case "html":
                    if (i.selector) {
                        s = n("<div>").html(s).find(i.selector)
                    } else if (c(s)) {
                        if (!s.data(r)) {
                            s.data(r, n('<div class="' + r + '"></div>').insertAfter(s).hide())
                        }
                        s = s.show().detach();
                        i.wrap.bind("onReset", function() {
                            if (n(this).find(s).length) {
                                s.hide().replaceAll(s.data(r)).data(r, false)
                            }
                        })
                    }
                    break;
                case "image":
                    s = i.tpl.image.replace("{href}", f);
                    break;
                case "swf":
                    s = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + f + '"></param>';
                    l = "";
                    n.each(i.swf, function(e, t) {
                        s += '<param name="' + e + '" value="' + t + '"></param>';
                        l += " " + e + '="' + t + '"'
                    });
                    s += '<embed src="' + f + '" type="application/x-shockwave-flash" width="100%" height="100%"' + l + "></embed></object>";
                    break
            }
            if (!(c(s) && s.parent().is(i.inner))) {
                i.inner.append(s)
            }
            u.trigger("beforeShow");
            i.inner.css("overflow", a === "yes" ? "scroll" : a === "no" ? "hidden" : a);
            u._setDimension();
            u.reposition();
            u.isOpen = false;
            u.coming = null;
            u.bindEvents();
            if (!u.isOpened) {
                n(".fancybox-wrap").not(i.wrap).stop(true).trigger("onReset").remove()
            } else if (t.prevMethod) {
                u.transitions[t.prevMethod]()
            }
            u.transitions[u.isOpened ? i.nextMethod : i.openMethod]();
            u._preloadImages()
        },
        _setDimension: function() {
            var e = u.getViewport(),
                t = 0,
                r = false,
                i = false,
                s = u.wrap,
                o = u.skin,
                a = u.inner,
                f = u.current,
                l = f.width,
                c = f.height,
                h = f.minWidth,
                d = f.minHeight,
                g = f.maxWidth,
                y = f.maxHeight,
                b = f.scrolling,
                w = f.scrollOutside ? f.scrollbarWidth : 0,
                E = f.margin,
                S = v(E[1] + E[3]),
                x = v(E[0] + E[2]),
                T, N, C, k, L, A, O, M, _, D, P, H, B, j, I;
            s.add(o).add(a).width("auto").height("auto").removeClass("fancybox-tmp");
            T = v(o.outerWidth(true) - o.width());
            N = v(o.outerHeight(true) - o.height());
            C = S + T;
            k = x + N;
            L = p(l) ? (e.w - C) * v(l) / 100 : l;
            A = p(c) ? (e.h - k) * v(c) / 100 : c;
            if (f.type === "iframe") {
                j = f.content;
                if (f.autoHeight && j.data("ready") === 1) {
                    try {
                        if (j[0].contentWindow.document.location) {
                            a.width(L).height(9999);
                            I = j.contents().find("body");
                            if (w) {
                                I.css("overflow-x", "hidden")
                            }
                            A = I.outerHeight(true)
                        }
                    } catch (q) {}
                }
            } else if (f.autoWidth || f.autoHeight) {
                a.addClass("fancybox-tmp");
                if (!f.autoWidth) {
                    a.width(L)
                }
                if (!f.autoHeight) {
                    a.height(A)
                }
                if (f.autoWidth) {
                    L = a.width()
                }
                if (f.autoHeight) {
                    A = a.height()
                }
                a.removeClass("fancybox-tmp")
            }
            l = v(L);
            c = v(A);
            _ = L / A;
            h = v(p(h) ? v(h, "w") - C : h);
            g = v(p(g) ? v(g, "w") - C : g);
            d = v(p(d) ? v(d, "h") - k : d);
            y = v(p(y) ? v(y, "h") - k : y);
            O = g;
            M = y;
            if (f.fitToView) {
                g = Math.min(e.w - C, g);
                y = Math.min(e.h - k, y)
            }
            H = e.w - S;
            B = e.h - x;
            if (f.aspectRatio) {
                if (l > g) {
                    l = g;
                    c = v(l / _)
                }
                if (c > y) {
                    c = y;
                    l = v(c * _)
                }
                if (l < h) {
                    l = h;
                    c = v(l / _)
                }
                if (c < d) {
                    c = d;
                    l = v(c * _)
                }
            } else {
                l = Math.max(h, Math.min(l, g));
                if (f.autoHeight && f.type !== "iframe") {
                    a.width(l);
                    c = a.height()
                }
                c = Math.max(d, Math.min(c, y))
            }
            if (f.fitToView) {
                a.width(l).height(c);
                s.width(l + T);
                D = s.width();
                P = s.height();
                if (f.aspectRatio) {
                    while ((D > H || P > B) && l > h && c > d) {
                        if (t++ > 19) {
                            break
                        }
                        c = Math.max(d, Math.min(y, c - 10));
                        l = v(c * _);
                        if (l < h) {
                            l = h;
                            c = v(l / _)
                        }
                        if (l > g) {
                            l = g;
                            c = v(l / _)
                        }
                        a.width(l).height(c);
                        s.width(l + T);
                        D = s.width();
                        P = s.height()
                    }
                } else {
                    l = Math.max(h, Math.min(l, l - (D - H)));
                    c = Math.max(d, Math.min(c, c - (P - B)))
                }
            }
            if (w && b === "auto" && c < A && l + T + w < H) {
                l += w
            }
            a.width(l).height(c);
            s.width(l + T);
            D = s.width();
            P = s.height();
            r = (D > H || P > B) && l > h && c > d;
            i = f.aspectRatio ? l < O && c < M && l < L && c < A : (l < O || c < M) && (l < L || c < A);
            n.extend(f, {
                dim: {
                    width: m(D),
                    height: m(P)
                },
                origWidth: L,
                origHeight: A,
                canShrink: r,
                canExpand: i,
                wPadding: T,
                hPadding: N,
                wrapSpace: P - o.outerHeight(true),
                skinSpace: o.height() - c
            });
            if (!j && f.autoHeight && c > d && c < y && !i) {
                a.height("auto")
            }
        },
        _getPosition: function(e) {
            var t = u.current,
                n = u.getViewport(),
                r = t.margin,
                i = u.wrap.width() + r[1] + r[3],
                s = u.wrap.height() + r[0] + r[2],
                o = {
                    position: "absolute",
                    top: r[0],
                    left: r[3]
                };
            if (t.autoCenter && t.fixed && !e && s <= n.h && i <= n.w) {
                o.position = "fixed"
            } else if (!t.locked) {
                o.top += n.y;
                o.left += n.x
            }
            o.top = m(Math.max(o.top, o.top + (n.h - s) * t.topRatio));
            o.left = m(Math.max(o.left, o.left + (n.w - i) * t.leftRatio));
            return o
        },
        _afterZoomIn: function() {
            var e = u.current;
            if (!e) {
                return
            }
            u.isOpen = u.isOpened = true;
            u.wrap.css("overflow", "visible").addClass("fancybox-opened");
            u.update();
            if (e.closeClick || e.nextClick && u.group.length > 1) {
                u.inner.css("cursor", "pointer").bind("click.fb", function(t) {
                    if (!n(t.target).is("a") && !n(t.target).parent().is("a")) {
                        t.preventDefault();
                        u[e.closeClick ? "close" : "next"]()
                    }
                })
            }
            if (e.closeBtn) {
                n(e.tpl.closeBtn).appendTo(u.skin).bind("click.fb", function(e) {
                    e.preventDefault();
                    u.close()
                })
            }
            if (e.arrows && u.group.length > 1) {
                if (e.loop || e.index > 0) {
                    n(e.tpl.prev).appendTo(u.outer).bind("click.fb", u.prev)
                }
                if (e.loop || e.index < u.group.length - 1) {
                    n(e.tpl.next).appendTo(u.outer).bind("click.fb", u.next)
                }
            }
            u.trigger("afterShow");
            if (!e.loop && e.index === e.group.length - 1) {
                u.play(false)
            } else if (u.opts.autoPlay && !u.player.isActive) {
                u.opts.autoPlay = false;
                u.play()
            }
        },
        _afterZoomOut: function(e) {
            e = e || u.current;
            n(".fancybox-wrap").trigger("onReset").remove();
            n.extend(u, {
                group: {},
                opts: {},
                router: false,
                current: null,
                isActive: false,
                isOpened: false,
                isOpen: false,
                isClosing: false,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            });
            u.trigger("afterClose", e)
        }
    });
    u.transitions = {
        getOrigPosition: function() {
            var e = u.current,
                t = e.element,
                n = e.orig,
                r = {},
                i = 50,
                s = 50,
                o = e.hPadding,
                a = e.wPadding,
                f = u.getViewport();
            if (!n && e.isDom && t.is(":visible")) {
                n = t.find("img:first");
                if (!n.length) {
                    n = t
                }
            }
            if (c(n)) {
                r = n.offset();
                if (n.is("img")) {
                    i = n.outerWidth();
                    s = n.outerHeight()
                }
            } else {
                r.top = f.y + (f.h - s) * e.topRatio;
                r.left = f.x + (f.w - i) * e.leftRatio
            }
            if (u.wrap.css("position") === "fixed" || e.locked) {
                r.top -= f.y;
                r.left -= f.x
            }
            r = {
                top: m(r.top - o * e.topRatio),
                left: m(r.left - a * e.leftRatio),
                width: m(i + a),
                height: m(s + o)
            };
            return r
        },
        step: function(e, t) {
            var n, r, i, s = t.prop,
                o = u.current,
                a = o.wrapSpace,
                f = o.skinSpace;
            if (s === "width" || s === "height") {
                n = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start);
                if (u.isClosing) {
                    n = 1 - n
                }
                r = s === "width" ? o.wPadding : o.hPadding;
                i = e - r;
                u.skin[s](v(s === "width" ? i : i - a * n));
                u.inner[s](v(s === "width" ? i : i - a * n - f * n))
            }
        },
        zoomIn: function() {
            var e = u.current,
                t = e.pos,
                r = e.openEffect,
                i = r === "elastic",
                s = n.extend({
                    opacity: 1
                }, t);
            delete s.position;
            if (i) {
                t = this.getOrigPosition();
                if (e.openOpacity) {
                    t.opacity = .1
                }
            } else if (r === "fade") {
                t.opacity = .1
            }
            u.wrap.css(t).animate(s, {
                duration: r === "none" ? 0 : e.openSpeed,
                easing: e.openEasing,
                step: i ? this.step : null,
                complete: u._afterZoomIn
            })
        },
        zoomOut: function() {
            var e = u.current,
                t = e.closeEffect,
                n = t === "elastic",
                r = {
                    opacity: .1
                };
            if (n) {
                r = this.getOrigPosition();
                if (e.closeOpacity) {
                    r.opacity = .1
                }
            }
            u.wrap.animate(r, {
                duration: t === "none" ? 0 : e.closeSpeed,
                easing: e.closeEasing,
                step: n ? this.step : null,
                complete: u._afterZoomOut
            })
        },
        changeIn: function() {
            var e = u.current,
                t = e.nextEffect,
                n = e.pos,
                r = {
                    opacity: 1
                },
                i = u.direction,
                s = 200,
                o;
            n.opacity = .1;
            if (t === "elastic") {
                o = i === "down" || i === "up" ? "top" : "left";
                if (i === "down" || i === "right") {
                    n[o] = m(v(n[o]) - s);
                    r[o] = "+=" + s + "px"
                } else {
                    n[o] = m(v(n[o]) + s);
                    r[o] = "-=" + s + "px"
                }
            }
            if (t === "none") {
                u._afterZoomIn()
            } else {
                u.wrap.css(n).animate(r, {
                    duration: e.nextSpeed,
                    easing: e.nextEasing,
                    complete: u._afterZoomIn
                })
            }
        },
        changeOut: function() {
            var e = u.previous,
                t = e.prevEffect,
                r = {
                    opacity: .1
                },
                i = u.direction,
                s = 200;
            if (t === "elastic") {
                r[i === "down" || i === "up" ? "top" : "left"] = (i === "up" || i === "left" ? "-" : "+") + "=" + s + "px"
            }
            e.wrap.animate(r, {
                duration: t === "none" ? 0 : e.prevSpeed,
                easing: e.prevEasing,
                complete: function() {
                    n(this).trigger("onReset").remove()
                }
            })
        }
    };
    u.helpers.overlay = {
        defaults: {
            closeClick: true,
            speedOut: 200,
            showEarly: true,
            css: {},
            locked: !l,
            fixed: true
        },
        overlay: null,
        fixed: false,
        el: n("html"),
        create: function(e) {
            e = n.extend({}, this.defaults, e);
            if (this.overlay) {
                this.close()
            }
            this.overlay = n('<div class="fancybox-overlay"></div>').appendTo(u.coming ? u.coming.parent : e.parent);
            this.fixed = false;
            if (e.fixed && u.defaults.fixed) {
                this.overlay.addClass("fancybox-overlay-fixed");
                this.fixed = true
            }
        },
        open: function(e) {
            var t = this;
            e = n.extend({}, this.defaults, e);
            if (this.overlay) {
                this.overlay.unbind(".overlay").width("auto").height("auto")
            } else {
                this.create(e)
            }
            if (!this.fixed) {
                s.bind("resize.overlay", n.proxy(this.update, this));
                this.update()
            }
            if (e.closeClick) {
                this.overlay.bind("click.overlay", function(e) {
                    if (n(e.target).hasClass("fancybox-overlay")) {
                        if (u.isActive) {
                            u.close()
                        } else {
                            t.close()
                        }
                        return false
                    }
                })
            }
            this.overlay.css(e.css).show()
        },
        close: function() {
            var e, t;
            s.unbind("resize.overlay");
            if (this.el.hasClass("fancybox-lock")) {
                n(".fancybox-margin").removeClass("fancybox-margin");
                e = s.scrollTop();
                t = s.scrollLeft();
                this.el.removeClass("fancybox-lock");
                s.scrollTop(e).scrollLeft(t)
            }
            n(".fancybox-overlay").remove().hide();
            n.extend(this, {
                overlay: null,
                fixed: false
            })
        },
        update: function() {
            var e = "100%",
                n;
            this.overlay.width(e).height("100%");
            if (a) {
                n = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth);
                if (o.width() > n) {
                    e = o.width()
                }
            } else if (o.width() > s.width()) {
                e = o.width()
            }
            this.overlay.width(e).height(o.height())
        },
        onReady: function(e, t) {
            var r = this.overlay;
            n(".fancybox-overlay").stop(true, true);
            if (!r) {
                this.create(e)
            }
            if (e.locked && this.fixed && t.fixed) {
                if (!r) {
                    this.margin = o.height() > s.height() ? n("html").css("margin-right").replace("px", "") : false
                }
                t.locked = this.overlay.append(t.wrap);
                t.fixed = false
            }
            if (e.showEarly === true) {
                this.beforeShow.apply(this, arguments)
            }
        },
        beforeShow: function(e, t) {
            var r, i;
            if (t.locked) {
                if (this.margin !== false) {
                    n("*").filter(function() {
                        return n(this).css("position") === "fixed" && !n(this).hasClass("fancybox-overlay") && !n(this).hasClass("fancybox-wrap")
                    }).addClass("fancybox-margin");
                    this.el.addClass("fancybox-margin")
                }
                r = s.scrollTop();
                i = s.scrollLeft();
                this.el.addClass("fancybox-lock");
                s.scrollTop(r).scrollLeft(i)
            }
            this.open(e)
        },
        onUpdate: function() {
            if (!this.fixed) {
                this.update()
            }
        },
        afterClose: function(e) {
            if (this.overlay && !u.coming) {
                this.overlay.fadeOut(e.speedOut, n.proxy(this.close, this))
            }
        }
    };
    u.helpers.title = {
        defaults: {
            type: "float",
            position: "bottom"
        },
        beforeShow: function(e) {
            var t = u.current,
                r = t.title,
                i = e.type,
                s, o;
            if (n.isFunction(r)) {
                r = r.call(t.element, t)
            }
            if (!h(r) || n.trim(r) === "") {
                return
            }
            s = n('<div class="fancybox-title fancybox-title-' + i + '-wrap">' + r + "</div>");
            switch (i) {
                case "inside":
                    o = u.skin;
                    break;
                case "outside":
                    o = u.wrap;
                    break;
                case "over":
                    o = u.inner;
                    break;
                default:
                    o = u.skin;
                    s.appendTo("body");
                    if (a) {
                        s.width(s.width())
                    }
                    s.wrapInner('<span class="child"></span>');
                    u.current.margin[2] += Math.abs(v(s.css("margin-bottom")));
                    break
            }
            s[e.position === "top" ? "prependTo" : "appendTo"](o)
        }
    };
    n.fn.fancybox = function(e) {
        var t, r = n(this),
            i = this.selector || "",
            s = function(s) {
                var o = n(this).blur(),
                    a = t,
                    f, l;
                if (!(s.ctrlKey || s.altKey || s.shiftKey || s.metaKey) && !o.is(".fancybox-wrap")) {
                    f = e.groupAttr || "data-fancybox-group";
                    l = o.attr(f);
                    if (!l) {
                        f = "rel";
                        l = o.get(0)[f]
                    }
                    if (l && l !== "" && l !== "nofollow") {
                        o = i.length ? n(i) : r;
                        o = o.filter("[" + f + '="' + l + '"]');
                        a = o.index(this)
                    }
                    e.index = a;
                    if (u.open(o, e) !== false) {
                        s.preventDefault()
                    }
                }
            };
        e = e || {};
        t = e.index || 0;
        if (!i || e.live === false) {
            r.unbind("click.fb-start").bind("click.fb-start", s)
        } else {
            o.undelegate(i, "click.fb-start").delegate(i + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", s)
        }
        this.filter("[data-fancybox-start=1]").trigger("click");
        return this
    };
    o.ready(function() {
        var t, s;
        if (n.scrollbarWidth === r) {
            n.scrollbarWidth = function() {
                var e = n('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                    t = e.children(),
                    r = t.innerWidth() - t.height(99).innerWidth();
                e.remove();
                return r
            }
        }
        if (n.support.fixedPosition === r) {
            n.support.fixedPosition = function() {
                var e = n('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
                    t = e[0].offsetTop === 20 || e[0].offsetTop === 15;
                e.remove();
                return t
            }()
        }
        n.extend(u.defaults, {
            scrollbarWidth: n.scrollbarWidth(),
            fixed: n.support.fixedPosition,
            parent: n("body")
        });
        t = n(e).width();
        i.addClass("fancybox-lock-test");
        s = n(e).width();
        i.removeClass("fancybox-lock-test");
        n("<style type='text/css'>.fancybox-margin{margin-right:" + (s - t) + "px;}</style>").appendTo("head")
    })
})(window, document, jQuery);
(function(e) {
    e.fn.fitText = function(t, n) {
        var r = t || 1,
            i = e.extend({
                minFontSize: Number.NEGATIVE_INFINITY,
                maxFontSize: Number.POSITIVE_INFINITY
            }, n);
        return this.each(function() {
            var t = e(this);
            var n = function() {
                t.css("font-size", Math.max(Math.min(t.width() / (r * 10), parseFloat(i.maxFontSize)), parseFloat(i.minFontSize)))
            };
            n();
            e(window).on("resize", n)
        })
    }
})(jQuery);
(function(e) {
    function t(t, n, r, i) {
        var s = t.text().split(n),
            o = "";
        if (s.length) {
            e(s).each(function(e, t) {
                o += '<span class="' + r + (e + 1) + '">' + t + "</span>" + i
            });
            t.empty().append(o)
        }
    }
    var n = {
        init: function() {
            return this.each(function() {
                t(e(this), "", "char", "")
            })
        },
        words: function() {
            return this.each(function() {
                t(e(this), " ", "word", " ")
            })
        },
        lines: function() {
            return this.each(function() {
                var n = "eefec303079ad17405c889e092e105b0";
                t(e(this).children("br").replaceWith(n).end(), n, "line", "")
            })
        }
    };
    e.fn.lettering = function(t) {
        if (t && n[t]) {
            return n[t].apply(this, [].slice.call(arguments, 1))
        } else if (t === "letters" || !t) {
            return n.init.apply(this, [].slice.call(arguments, 0))
        }
        e.error("Method " + t + " does not exist on jQuery.lettering");
        return this
    }
})(jQuery);
var ytp = ytp || {};
(function(jQuery, ytp) {
    var nAgt = navigator.userAgent;
    if (!jQuery.browser) {
        jQuery.browser = {};
        jQuery.browser.mozilla = !1;
        jQuery.browser.webkit = !1;
        jQuery.browser.opera = !1;
        jQuery.browser.safari = !1;
        jQuery.browser.chrome = !1;
        jQuery.browser.msie = !1;
        jQuery.browser.ua = nAgt;
        jQuery.browser.name = navigator.appName;
        jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion);
        jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
        var nameOffset, verOffset, ix;
        if (-1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
        else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
        else if (-1 != nAgt.indexOf("Trident")) {
            jQuery.browser.msie = !0;
            jQuery.browser.name = "Microsoft Internet Explorer";
            var start = nAgt.indexOf("rv:") + 3,
                end = start + 4;
            jQuery.browser.fullVersion = nAgt.substring(start, end)
        } else -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName)); - 1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)); - 1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix));
        jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10);
        isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10));
        jQuery.browser.version = jQuery.browser.majorVersion
    }
    jQuery.browser.android = /Android/i.test(nAgt);
    jQuery.browser.blackberry = /BlackBerry/i.test(nAgt);
    jQuery.browser.ios = /iPhone|iPad|iPod/i.test(nAgt);
    jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt);
    jQuery.browser.windowsMobile = /IEMobile/i.test(nAgt);
    jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile;
    ytp.isDevice = jQuery.browser.mobile;
    jQuery.fn.CSSAnimate = function(e, t, n, r, i) {
        function s(e) {
            return e.replace(/([A-Z])/g, function(e) {
                return "-" + e.toLowerCase()
            })
        }

        function o(e, t) {
            return "string" !== typeof e || e.match(/^[\-0-9\.]+$/) ? "" + e + t : e
        }
        jQuery.support.CSStransition = function() {
            var e = (document.body || document.documentElement).style;
            return void 0 !== e.transition || void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.MsTransition || void 0 !== e.OTransition
        }();
        return this.each(function() {
            var u = this,
                l = jQuery(this);
            u.id = u.id || "CSSA_" + (new Date).getTime();
            var c = c || {
                type: "noEvent"
            };
            if (u.CSSAIsRunning && u.eventType == c.type) u.CSSqueue = function() {
                l.CSSAnimate(e, t, n, r, i)
            };
            else if (u.CSSqueue = null, u.eventType = c.type, 0 !== l.length && e) {
                u.CSSAIsRunning = !0;
                "function" == typeof t && (i = t, t = jQuery.fx.speeds._default);
                "function" == typeof n && (i = n, n = 0);
                "function" == typeof r && (i = r, r = "cubic-bezier(0.65,0.03,0.36,0.72)");
                if ("string" == typeof t)
                    for (var d in jQuery.fx.speeds)
                        if (t == d) {
                            t = jQuery.fx.speeds[d];
                            break
                        } else t = jQuery.fx.speeds._default;
                t || (t = jQuery.fx.speeds._default);
                if (jQuery.support.CSStransition) {
                    c = {
                        "default": "ease",
                        "in": "ease-in",
                        out: "ease-out",
                        "in-out": "ease-in-out",
                        snap: "cubic-bezier(0,1,.5,1)",
                        easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
                        easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
                        easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
                        easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
                        easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
                        easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
                        easeOutExpo: "cubic-bezier(.19,1,.22,1)",
                        easeInOutExpo: "cubic-bezier(1,0,0,1)",
                        easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
                        easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
                        easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
                        easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
                        easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
                        easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
                        easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
                        easeOutQuint: "cubic-bezier(.23,1,.32,1)",
                        easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
                        easeInSine: "cubic-bezier(.47,0,.745,.715)",
                        easeOutSine: "cubic-bezier(.39,.575,.565,1)",
                        easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
                        easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
                        easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
                        easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
                    };
                    c[r] && (r = c[r]);
                    var v = "",
                        y = "transitionEnd";
                    jQuery.browser.webkit ? (v = "-webkit-", y = "webkitTransitionEnd") : jQuery.browser.mozilla ? (v = "-moz-", y = "transitionend") : jQuery.browser.opera ? (v = "-o-", y = "otransitionend") : jQuery.browser.msie && (v = "-ms-", y = "msTransitionEnd");
                    c = [];
                    for (b in e) {
                        d = b;
                        "transform" === d && (d = v + "transform", e[d] = e[b], delete e[b]);
                        "filter" === d && (d = v + "filter", e[d] = e[b], delete e[b]);
                        if ("transform-origin" === d || "origin" === d) d = v + "transform-origin", e[d] = e[b], delete e[b];
                        "x" === d && (d = v + "transform", e[d] = e[d] || "", e[d] += " translateX(" + o(e[b], "px") + ")", delete e[b]);
                        "y" === d && (d = v + "transform", e[d] = e[d] || "", e[d] += " translateY(" + o(e[b], "px") + ")", delete e[b]);
                        "z" === d && (d = v + "transform", e[d] = e[d] || "", e[d] += " translateZ(" + o(e[b], "px") + ")", delete e[b]);
                        "rotate" === d && (d = v + "transform", e[d] = e[d] || "", e[d] += " rotate(" + o(e[b], "deg") + ")", delete e[b]);
                        "rotateX" === d && (d = v + "transform", e[d] = e[d] || "", e[d] += " rotateX(" + o(e[b], "deg") + ")", delete e[b]);
                        "rotateY" === d && (d = v + "transform", e[d] = e[d] || "", e[d] += " rotateY(" + o(e[b], "deg") + ")", delete e[b]);
                        "rotateZ" === d && (d = v + "transform", e[d] = e[d] || "", e[d] += " rotateZ(" + o(e[b], "deg") + ")", delete e[b]);
                        "scale" === d && (d = v + "transform", e[d] = e[d] || "", e[d] += " scale(" + o(e[b], "") + ")", delete e[b]);
                        "scaleX" === d && (d = v + "transform", e[d] = e[d] || "", e[d] += " scaleX(" + o(e[b], "") + ")", delete e[b]);
                        "scaleY" === d && (d = v + "transform", e[d] = e[d] || "", e[d] += " scaleY(" + o(e[b], "") + ")", delete e[b]);
                        "scaleZ" === d && (d = v + "transform", e[d] = e[d] || "", e[d] += " scaleZ(" + o(e[b], "") + ")", delete e[b]);
                        "skew" === d && (d = v + "transform", e[d] = e[d] || "", e[d] += " skew(" + o(e[b], "deg") + ")", delete e[b]);
                        "skewX" === d && (d = v + "transform", e[d] = e[d] || "", e[d] += " skewX(" + o(e[b], "deg") + ")", delete e[b]);
                        "skewY" === d && (d = v + "transform", e[d] = e[d] || "", e[d] += " skewY(" + o(e[b], "deg") + ")", delete e[b]);
                        "perspective" === d && (d = v + "transform", e[d] = e[d] || "", e[d] += " perspective(" + o(e[b], "px") + ")", delete e[b]);
                        0 > c.indexOf(d) && c.push(s(d))
                    }
                    var b = c.join(","),
                        w = function() {
                            l.off(y + "." + u.id);
                            clearTimeout(u.timeout);
                            l.css(v + "transition", "");
                            "function" == typeof i && i(l);
                            u.called = !0;
                            u.CSSAIsRunning = !1;
                            "function" == typeof u.CSSqueue && (u.CSSqueue(), u.CSSqueue = null)
                        },
                        E = {};
                    jQuery.extend(E, e);
                    E[v + "transition-property"] = b;
                    E[v + "transition-duration"] = t + "ms";
                    E[v + "transition-delay"] = n + "ms";
                    E[v + "transition-style"] = "preserve-3d";
                    E[v + "transition-timing-function"] = r;
                    setTimeout(function() {
                        l.one(y + "." + u.id, w);
                        l.css(E)
                    }, 1);
                    u.timeout = setTimeout(function() {
                        l.called || !i ? (l.called = !1, u.CSSAIsRunning = !1) : (l.css(v + "transition", ""), i(l), u.CSSAIsRunning = !1, "function" == typeof u.CSSqueue && (u.CSSqueue(), u.CSSqueue = null))
                    }, t + n + 100)
                } else {
                    for (var b in e) "transform" === b && delete e[b], "filter" === b && delete e[b], "transform-origin" === b && delete e[b], "auto" === e[b] && delete e[b];
                    i && "string" !== typeof i || (i = "linear");
                    l.animate(e, t, i)
                }
            }
        })
    };
    var getYTPVideoID = function(e) {
        var t;
        if (e.substr(0, 16) == "http://youtu.be/") {
            t = e.replace("http://youtu.be/", "")
        } else if (e.indexOf("http") > -1) {
            t = e.match(/[\\?&]v=([^&#]*)/)[1]
        } else {
            t = e
        }
        return t
    };
    jQuery.mbYTPlayer = {
        name: "jquery.mb.YTPlayer",
        version: "2.7.1",
        author: "Matteo Bicocchi",
        defaults: {
            containment: "body",
            ratio: "16/9",
            videoURL: null,
            startAt: 0,
            stopAt: 0,
            autoPlay: true,
            vol: 100,
            addRaster: false,
            opacity: 1,
            quality: "default",
            mute: false,
            loop: true,
            showControls: true,
            showAnnotations: false,
            showYTLogo: true,
            stopMovieOnClick: false,
            realfullscreen: true,
            gaTrack: true,
            onReady: function(e) {},
            onStateChange: function(e) {},
            onPlaybackQualityChange: function(e) {},
            onError: function(e) {}
        },
        controls: {
            play: "P",
            pause: "p",
            mute: "M",
            unmute: "A",
            onlyYT: "O",
            showSite: "R",
            ytLogo: "Y"
        },
        rasterImg: "images/raster.png",
        rasterImgRetina: "images/raster@2x.png",
        locationProtocol: "https:",
        buildPlayer: function(options) {
            return this.each(function() {
                var YTPlayer = this;
                var $YTPlayer = jQuery(YTPlayer);
                YTPlayer.loop = 0;
                YTPlayer.opt = {};
                $YTPlayer.addClass("mb_YTVPlayer");
                var property = $YTPlayer.data("property") && typeof $YTPlayer.data("property") == "string" ? eval("(" + $YTPlayer.data("property") + ")") : $YTPlayer.data("property");
                if (typeof property.vol != "undefined") property.vol = property.vol == 0 ? property.vol = 1 : property.vol;
                jQuery.extend(YTPlayer.opt, jQuery.mbYTPlayer.defaults, options, property);
                var canGoFullscreen = !(jQuery.browser.msie || jQuery.browser.opera || self.location.href != top.location.href);
                if (!canGoFullscreen) YTPlayer.opt.realfullscreen = false;
                if (!$YTPlayer.attr("id")) $YTPlayer.attr("id", "YTP_" + (new Date).getTime());
                YTPlayer.opt.id = YTPlayer.id;
                YTPlayer.isAlone = false;
                var playerID = "mbYTP_" + YTPlayer.id;
                var videoID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL) : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")) : false;
                YTPlayer.videoID = videoID;
                YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? "0" : "3";
                var playerVars = {
                    autoplay: 0,
                    modestbranding: 1,
                    controls: 0,
                    showinfo: 0,
                    rel: 0,
                    enablejsapi: 1,
                    version: 3,
                    playerapiid: playerID,
                    origin: "*",
                    allowfullscreen: true,
                    wmode: "transparent",
                    iv_load_policy: YTPlayer.opt.showAnnotations
                };
                var canPlayHTML5 = false;
                var v = document.createElement("video");
                if (v.canPlayType) {
                    canPlayHTML5 = true
                }
                if (canPlayHTML5) jQuery.extend(playerVars, {
                    html5: 1
                });
                if (jQuery.browser.msie && jQuery.browser.version < 9) {
                    this.opt.opacity = 1
                }
                var playerBox = jQuery("<div/>").attr("id", playerID).addClass("playerBox");
                var overlay = jQuery("<div/>").css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }).addClass("YTPOverlay");
                YTPlayer.isSelf = YTPlayer.opt.containment == "self";
                YTPlayer.opt.containment = YTPlayer.opt.containment == "self" ? jQuery(this) : jQuery(YTPlayer.opt.containment);
                YTPlayer.isBackground = YTPlayer.opt.containment.get(0).tagName.toLowerCase() == "body";
                if (YTPlayer.isBackground && ytp.backgroundIsInited) return;
                if (!YTPlayer.opt.containment.is(jQuery(this))) {
                    $YTPlayer.hide()
                } else {
                    YTPlayer.isPlayer = true
                }
                if (ytp.isDevice && YTPlayer.isBackground) {
                    $YTPlayer.remove();
                    return
                }
                if (YTPlayer.opt.addRaster) {
                    var retina = window.retina || window.devicePixelRatio > 1;
                    overlay.addClass(retina ? "raster retina" : "raster")
                } else {
                    overlay.removeClass("raster retina")
                }
                var wrapper = jQuery("<div/>").addClass("mbYTP_wrapper").attr("id", "wrapper_" + playerID);
                wrapper.css({
                    position: "absolute",
                    zIndex: 0,
                    minWidth: "100%",
                    minHeight: "100%",
                    left: 0,
                    top: 0,
                    overflow: "hidden",
                    opacity: 0
                });
                playerBox.css({
                    position: "absolute",
                    zIndex: 0,
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    overflow: "hidden",
                    opacity: this.opt.opacity
                });
                wrapper.append(playerBox);
                YTPlayer.opt.containment.children().not("script, style").each(function() {
                    if (jQuery(this).css("position") == "static") jQuery(this).css("position", "relative")
                });
                if (YTPlayer.isBackground) {
                    jQuery("body").css({
                        position: "relative",
                        minWidth: "100%",
                        minHeight: "100%",
                        zIndex: 1,
                        boxSizing: "border-box"
                    });
                    wrapper.css({
                        position: "fixed",
                        top: 0,
                        left: 0,
                        zIndex: 0,
                        webkitTransform: "translateZ(0)"
                    });
                    $YTPlayer.hide()
                } else if (YTPlayer.opt.containment.css("position") == "static") YTPlayer.opt.containment.css({
                    position: "relative"
                });
                YTPlayer.opt.containment.prepend(wrapper);
                YTPlayer.wrapper = wrapper;
                playerBox.css({
                    opacity: 1
                });
                if (!ytp.isDevice) {
                    playerBox.after(overlay);
                    YTPlayer.overlay = overlay
                }
                if (!YTPlayer.isBackground) {
                    overlay.on("mouseenter", function() {
                        $YTPlayer.find(".mb_YTVPBar").addClass("visible")
                    }).on("mouseleave", function() {
                        $YTPlayer.find(".mb_YTVPBar").removeClass("visible")
                    })
                }
                if (!ytp.YTAPIReady) {
                    jQuery("#YTAPI").remove();
                    var tag = jQuery("<script></script>").attr({
                        src: jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/player_api?v=" + jQuery.mbYTPlayer.version,
                        id: "YTAPI"
                    });
                    jQuery("head title").after(tag)
                } else {
                    setTimeout(function() {
                        jQuery(document).trigger("YTAPIReady")
                    }, 100)
                }
                jQuery(document).on("YTAPIReady", function() {
                    if (YTPlayer.isBackground && ytp.backgroundIsInited || YTPlayer.isInit) return;
                    if (YTPlayer.isBackground && YTPlayer.opt.stopMovieOnClick) jQuery(document).off("mousedown.ytplayer").on("mousedown,.ytplayer", function(e) {
                        var t = jQuery(e.target);
                        if (t.is("a") || t.parents().is("a")) {
                            $YTPlayer.pauseYTP()
                        }
                    });
                    if (YTPlayer.isBackground) {
                        ytp.backgroundIsInited = true
                    }
                    YTPlayer.opt.autoPlay = typeof YTPlayer.opt.autoPlay == "undefined" ? YTPlayer.isBackground ? true : false : YTPlayer.opt.autoPlay;
                    YTPlayer.opt.vol = YTPlayer.opt.vol ? YTPlayer.opt.vol : 100;
                    jQuery.mbYTPlayer.getDataFromFeed(YTPlayer.videoID, YTPlayer);
                    jQuery(YTPlayer).on("YTPChanged", function() {
                        if (YTPlayer.isInit) return;
                        YTPlayer.isInit = true;
                        if (ytp.isDevice && !YTPlayer.isBackground) {
                            new YT.Player(playerID, {
                                videoId: YTPlayer.videoID.toString(),
                                height: "100%",
                                width: "100%",
                                videoId: YTPlayer.videoID,
                                events: {
                                    onReady: function(e) {
                                        YTPlayer.player = e.target;
                                        playerBox.css({
                                            opacity: 1
                                        });
                                        YTPlayer.wrapper.css({
                                            opacity: 1
                                        });
                                        $YTPlayer.optimizeDisplay()
                                    },
                                    onStateChange: function() {}
                                }
                            });
                            return
                        }
                        new YT.Player(playerID, {
                            videoId: YTPlayer.videoID.toString(),
                            playerVars: playerVars,
                            events: {
                                onReady: function(e) {
                                    YTPlayer.player = e.target;
                                    if (YTPlayer.isReady) return;
                                    YTPlayer.isReady = true;
                                    YTPlayer.playerEl = YTPlayer.player.getIframe();
                                    $YTPlayer.optimizeDisplay();
                                    YTPlayer.videoID = videoID;
                                    jQuery(window).on("resize.YTP", function() {
                                        $YTPlayer.optimizeDisplay()
                                    });
                                    if (YTPlayer.opt.showControls) jQuery(YTPlayer).buildYTPControls();
                                    var t = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;
                                    YTPlayer.player.setVolume(0);
                                    jQuery(YTPlayer).muteYTPVolume();
                                    jQuery.mbYTPlayer.checkForState(YTPlayer);
                                    YTPlayer.checkForStartAt = setInterval(function() {
                                        var e = YTPlayer.player.getVideoLoadedFraction() > t / YTPlayer.player.getDuration();
                                        if (YTPlayer.player.getCurrentTime() >= t && YTPlayer.player.getDuration() > 0 && e) {
                                            clearInterval(YTPlayer.checkForStartAt);
                                            YTPlayer.player.setVolume(0);
                                            jQuery(YTPlayer).muteYTPVolume();
                                            if (typeof YTPlayer.opt.onReady == "function") YTPlayer.opt.onReady($YTPlayer);
                                            if (YTPlayer.opt.autoPlay) $YTPlayer.playYTP();
                                            else YTPlayer.player.pauseVideo();
                                            if (YTPlayer.opt.autoPlay) $YTPlayer.playYTP();
                                            else YTPlayer.player.pauseVideo();
                                            if (!YTPlayer.opt.mute) jQuery(YTPlayer).unmuteYTPVolume();
                                            $YTPlayer.css("background-image", "none");
                                            YTPlayer.wrapper.CSSAnimate({
                                                opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity
                                            }, 2e3);
                                            jQuery.mbYTPlayer.checkForState(YTPlayer)
                                        } else {
                                            YTPlayer.player.playVideo();
                                            YTPlayer.player.seekTo(t, true)
                                        }
                                    }, 100)
                                },
                                onStateChange: function(event) {
                                    if (typeof event.target.getPlayerState != "function") return;
                                    var state = event.target.getPlayerState();
                                    if (typeof YTPlayer.opt.onStateChange == "function") YTPlayer.opt.onStateChange($YTPlayer, state);
                                    var controls = jQuery("#controlBar_" + YTPlayer.id);
                                    var data = YTPlayer.opt;
                                    if (state == 0) {
                                        if (YTPlayer.state == state) return;
                                        YTPlayer.state = state;
                                        YTPlayer.player.pauseVideo();
                                        var startAt = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;
                                        if (data.loop) {
                                            YTPlayer.wrapper.css({
                                                opacity: 0
                                            });
                                            $YTPlayer.playYTP();
                                            YTPlayer.player.seekTo(startAt, true)
                                        } else if (!YTPlayer.isBackground) {
                                            YTPlayer.player.seekTo(startAt, true);
                                            $YTPlayer.playYTP();
                                            setTimeout(function() {

                                                $YTPlayer.pauseYTP()
                                            }, 10)
                                        }
                                        if (!data.loop && YTPlayer.isBackground) YTPlayer.wrapper.CSSAnimate({
                                            opacity: 0
                                        }, 2e3);
                                        else if (data.loop) {
                                            YTPlayer.wrapper.css({
                                                opacity: 0
                                            });
                                            YTPlayer.loop++
                                        }
                                        controls.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                        jQuery(YTPlayer).trigger("YTPEnd")
                                    }
                                    if (state == 3) {
                                        if (YTPlayer.state == state) return;
                                        YTPlayer.state = state;
                                        YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality);
                                        controls.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                        jQuery(YTPlayer).trigger("YTPBuffering")
                                    }
                                    if (state == -1) {
                                        if (YTPlayer.state == state) return;
                                        YTPlayer.state = state;
                                        YTPlayer.wrapper.css({
                                            opacity: 0
                                        });
                                        jQuery(YTPlayer).trigger("YTPUnstarted")
                                    }
                                    if (state == 1) {
                                        if (YTPlayer.state == state) return;
                                        YTPlayer.state = state;
                                        YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality);
                                        controls.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.pause);
                                        jQuery(YTPlayer).trigger("YTPStart");
                                        if (typeof _gaq != "undefined" && eval(YTPlayer.opt.gaTrack)) _gaq.push(["_trackEvent", "YTPlayer", "Play", YTPlayer.title || YTPlayer.videoID.toString()]);
                                        if (typeof ga != "undefined" && eval(YTPlayer.opt.gaTrack)) ga("send", "event", "YTPlayer", "play", YTPlayer.title || YTPlayer.videoID.toString())
                                    }
                                    if (state == 2) {
                                        if (YTPlayer.state == state) return;
                                        YTPlayer.state = state;
                                        controls.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                        jQuery(YTPlayer).trigger("YTPPause")
                                    }
                                },
                                onPlaybackQualityChange: function(e) {
                                    if (typeof YTPlayer.opt.onPlaybackQualityChange == "function") YTPlayer.opt.onPlaybackQualityChange($YTPlayer)
                                },
                                onError: function(e) {
                                    if (e.data == 150) {
                                        console.log("Embedding this video is restricted by Youtube.");
                                        if (YTPlayer.isPlayList) jQuery(YTPlayer).playNext()
                                    }
                                    if (e.data == 2 && YTPlayer.isPlayList) jQuery(YTPlayer).playNext();
                                    if (typeof YTPlayer.opt.onError == "function") YTPlayer.opt.onError($YTPlayer, e)
                                }
                            }
                        })
                    })
                })
            })
        },
        getDataFromFeed: function(e, t) {
            t.videoID = e;
            if (!jQuery.browser.msie) {
                jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol + "//gdata.youtube.com/feeds/api/videos/" + e + "?v=2&alt=jsonc", function(e, n, r) {
                    t.dataReceived = true;
                    var i = e.data;
                    t.title = i.title;
                    t.videoData = i;
                    if (t.opt.ratio == "auto")
                        if (i.aspectRatio && i.aspectRatio === "widescreen") t.opt.ratio = "16/9";
                        else t.opt.ratio = "4/3";
                    if (!t.hasData) {
                        t.hasData = true;
                        if (t.isPlayer) {
                            var s = t.videoData.thumbnail.hqDefault;
                            t.opt.containment.css({
                                background: "rgba(0,0,0,0.5) url(" + s + ") center center",
                                backgroundSize: "cover"
                            })
                        }
                    }
                    jQuery(t).trigger("YTPChanged")
                });
                setTimeout(function() {
                    if (!t.dataReceived && !t.hasData) {
                        t.hasData = true;
                        jQuery(t).trigger("YTPChanged")
                    }
                }, 1500)
            } else {
                t.opt.ratio == "auto" ? t.opt.ratio = "16/9" : t.opt.ratio;
                if (!t.hasData) {
                    t.hasData = true;
                    setTimeout(function() {
                        jQuery(t).trigger("YTPChanged")
                    }, 100)
                }
            }
        },
        getVideoID: function() {
            var e = this.get(0);
            return e.videoID || false
        },
        setVideoQuality: function(e) {
            var t = this.get(0);
            t.player.setPlaybackQuality(e)
        },
        YTPlaylist: function(e, t, n) {
            var r = this.get(0);
            r.isPlayList = true;
            if (t) e = jQuery.shuffle(e);
            if (!r.videoID) {
                r.videos = e;
                r.videoCounter = 0;
                r.videoLength = e.length;
                jQuery(r).data("property", e[0]);
                jQuery(r).mb_YTPlayer()
            }
            if (typeof n == "function") jQuery(r).on("YTPChanged", function() {
                n(r)
            });
            jQuery(r).on("YTPEnd", function() {
                jQuery(r).playNext()
            })
        },
        playNext: function() {
            var e = this.get(0);
            e.videoCounter++;
            if (e.videoCounter >= e.videoLength) e.videoCounter = 0;
            jQuery(e.playerEl).css({
                opacity: 0
            });
            jQuery(e).changeMovie(e.videos[e.videoCounter])
        },
        playPrev: function() {
            var e = this.get(0);
            e.videoCounter--;
            if (e.videoCounter < 0) e.videoCounter = e.videoLength - 1;
            jQuery(e.playerEl).css({
                opacity: 0
            });
            jQuery(e).changeMovie(e.videos[e.videoCounter])
        },
        changeMovie: function(e) {
            var t = this.get(0);
            t.opt.startAt = 0;
            t.opt.stopAt = 0;
            t.opt.mute = true;
            if (e) {
                jQuery.extend(t.opt, e)
            }
            t.videoID = getYTPVideoID(t.opt.videoURL);
            jQuery(t).pauseYTP();
            var n = jQuery.browser.msie ? 1e3 : 0;
            jQuery(t.playerEl).CSSAnimate({
                opacity: 0
            }, n);
            setTimeout(function() {
                jQuery(t).getPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/v/" + t.videoID), 1, t.opt.quality);
                jQuery(t).playYTP();
                jQuery(t).one("YTPStart", function() {
                    t.wrapper.CSSAnimate({
                        opacity: t.isAlone ? 1 : t.opt.opacity
                    }, 1e3);
                    jQuery(t.playerEl).CSSAnimate({
                        opacity: 1
                    }, n);
                    if (t.opt.startAt) {
                        t.player.seekTo(t.opt.startAt)
                    }
                    jQuery.mbYTPlayer.checkForState(t);
                    if (!t.opt.autoPlay) jQuery(t).pauseYTP()
                });
                if (t.opt.mute) {
                    jQuery(t).muteYTPVolume()
                } else {
                    jQuery(t).unmuteYTPVolume()
                }
            }, n);
            if (t.opt.addRaster) {
                var r = window.retina || window.devicePixelRatio > 1;
                t.overlay.addClass(r ? "raster retina" : "raster")
            } else {
                t.overlay.removeClass("raster");
                t.overlay.removeClass("retina")
            }
            jQuery("#controlBar_" + t.id).remove();
            if (t.opt.showControls) jQuery(t).buildYTPControls();
            jQuery.mbYTPlayer.getDataFromFeed(t.videoID, t);
            jQuery(t).optimizeDisplay()
        },
        getPlayer: function() {
            return jQuery(this).get(0).player
        },
        playerDestroy: function() {
            var e = this.get(0);
            ytp.YTAPIReady = false;
            ytp.backgroundIsInited = false;
            e.isInit = false;
            e.videoID = null;
            var t = e.wrapper;
            t.remove();
            jQuery("#controlBar_" + e.id).remove()
        },
        fullscreen: function(real) {
            function RunPrefixMethod(e, t) {
                var n = ["webkit", "moz", "ms", "o", ""];
                var r = 0,
                    i, s;
                while (r < n.length && !e[i]) {
                    i = t;
                    if (n[r] == "") {
                        i = i.substr(0, 1).toLowerCase() + i.substr(1)
                    }
                    i = n[r] + i;
                    s = typeof e[i];
                    if (s != "undefined") {
                        n = [n[r]];
                        return s == "function" ? e[i]() : e[i]
                    }
                    r++
                }
            }

            function launchFullscreen(e) {
                RunPrefixMethod(e, "RequestFullScreen")
            }

            function cancelFullscreen() {
                if (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) {
                    RunPrefixMethod(document, "CancelFullScreen")
                }
            }
            var YTPlayer = this.get(0);
            if (typeof real == "undefined") real = YTPlayer.opt.realfullscreen;
            real = eval(real);
            var controls = jQuery("#controlBar_" + YTPlayer.id);
            var fullScreenBtn = controls.find(".mb_OnlyYT");
            var videoWrapper = YTPlayer.isSelf ? YTPlayer.opt.containment : YTPlayer.wrapper;
            if (real) {
                var fullscreenchange = jQuery.browser.mozilla ? "mozfullscreenchange" : jQuery.browser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
                jQuery(document).off(fullscreenchange).on(fullscreenchange, function() {
                    var e = RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen");
                    if (!e) {
                        YTPlayer.isAlone = false;
                        fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT);
                        jQuery(YTPlayer).setVideoQuality(YTPlayer.opt.quality);
                        videoWrapper.removeClass("fullscreen");
                        videoWrapper.CSSAnimate({
                            opacity: YTPlayer.opt.opacity
                        }, 500);
                        videoWrapper.css({
                            zIndex: 0
                        });
                        if (YTPlayer.isBackground) {
                            jQuery("body").after(controls)
                        } else {
                            YTPlayer.wrapper.before(controls)
                        }
                        jQuery(window).resize();
                        jQuery(YTPlayer).trigger("YTPFullScreenEnd")
                    } else {
                        jQuery(YTPlayer).setVideoQuality("default");
                        jQuery(YTPlayer).trigger("YTPFullScreenStart")
                    }
                })
            }
            if (!YTPlayer.isAlone) {
                if (real) {
                    var playerState = YTPlayer.player.getPlayerState();
                    videoWrapper.css({
                        opacity: 0
                    });
                    videoWrapper.addClass("fullscreen");
                    launchFullscreen(videoWrapper.get(0));
                    setTimeout(function() {
                        videoWrapper.CSSAnimate({
                            opacity: 1
                        }, 1e3);
                        YTPlayer.wrapper.append(controls);
                        jQuery(YTPlayer).optimizeDisplay();
                        YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + .1, true)
                    }, 500)
                } else videoWrapper.css({
                    zIndex: 1e4
                }).CSSAnimate({
                    opacity: 1
                }, 1e3);
                fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite);
                YTPlayer.isAlone = true
            } else {
                if (real) {
                    cancelFullscreen()
                } else {
                    videoWrapper.CSSAnimate({
                        opacity: YTPlayer.opt.opacity
                    }, 500);
                    videoWrapper.css({
                        zIndex: 0
                    })
                }
                fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT);
                YTPlayer.isAlone = false
            }
        },
        playYTP: function() {
            var e = this.get(0);
            if (typeof e.player === "undefined") return;
            var t = jQuery("#controlBar_" + e.id);
            var n = t.find(".mb_YTVPPlaypause");
            n.html(jQuery.mbYTPlayer.controls.pause);
            e.player.playVideo();
            e.wrapper.CSSAnimate({
                opacity: e.isAlone ? 1 : e.opt.opacity
            }, 2e3);
            jQuery(e).on("YTPStart", function() {
                jQuery(e).css("background-image", "none")
            })
        },
        toggleLoops: function() {
            var e = this.get(0);
            var t = e.opt;
            if (t.loop == 1) {
                t.loop = 0
            } else {
                if (t.startAt) {
                    e.player.seekTo(t.startAt)
                } else {
                    e.player.playVideo()
                }
                t.loop = 1
            }
        },
        stopYTP: function() {
            var e = this.get(0);
            var t = jQuery("#controlBar_" + e.id);
            var n = t.find(".mb_YTVPPlaypause");
            n.html(jQuery.mbYTPlayer.controls.play);
            e.player.stopVideo()
        },
        pauseYTP: function() {
            var e = this.get(0);
            var t = e.opt;
            var n = jQuery("#controlBar_" + e.id);
            var r = n.find(".mb_YTVPPlaypause");
            r.html(jQuery.mbYTPlayer.controls.play);
            e.player.pauseVideo()
        },
        seekToYTP: function(e) {
            var t = this.get(0);
            t.player.seekTo(e, true)
        },
        setYTPVolume: function(e) {
            var t = this.get(0);
            if (!e && !t.opt.vol && t.player.getVolume() == 0) jQuery(t).unmuteYTPVolume();
            else if (!e && t.player.getVolume() > 0 || e && t.player.getVolume() == e) jQuery(t).muteYTPVolume();
            else t.opt.vol = e;
            t.player.setVolume(t.opt.vol)
        },
        muteYTPVolume: function() {
            var e = this.get(0);
            e.player.mute();
            e.player.setVolume(0);
            var t = jQuery("#controlBar_" + e.id);
            var n = t.find(".mb_YTVPMuteUnmute");
            n.html(jQuery.mbYTPlayer.controls.unmute);
            jQuery(e).addClass("isMuted");
            jQuery(e).trigger("YTPMuted")
        },
        unmuteYTPVolume: function() {
            var e = this.get(0);
            e.player.unMute();
            e.player.setVolume(e.opt.vol);
            var t = jQuery("#controlBar_" + e.id);
            var n = t.find(".mb_YTVPMuteUnmute");
            n.html(jQuery.mbYTPlayer.controls.mute);
            jQuery(e).removeClass("isMuted");
            jQuery(e).trigger("YTPUnmuted")
        },
        manageYTPProgress: function() {
            var e = this.get(0);
            var t = jQuery("#controlBar_" + e.id);
            var n = t.find(".mb_YTVPProgress");
            var r = t.find(".mb_YTVPLoaded");
            var i = t.find(".mb_YTVTime");
            var s = n.outerWidth();
            var o = Math.floor(e.player.getCurrentTime());
            var u = Math.floor(e.player.getDuration());
            var a = o * s / u;
            var f = 0;
            var l = e.player.getVideoLoadedFraction() * 100;
            r.css({
                left: f,
                width: l + "%"
            });
            i.css({
                left: 0,
                width: a
            });
            return {
                totalTime: u,
                currentTime: o
            }
        },
        buildYTPControls: function() {
            var YTPlayer = this.get(0);
            var data = YTPlayer.opt;
            data.showYTLogo = data.showYTLogo || data.printUrl;
            if (jQuery("#controlBar_" + YTPlayer.id).length) return;
            var controlBar = jQuery("<span/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTVPBar").css({
                whiteSpace: "noWrap",
                position: YTPlayer.isBackground ? "fixed" : "absolute",
                zIndex: YTPlayer.isBackground ? 1e4 : 1e3
            }).hide();
            var buttonBar = jQuery("<div/>").addClass("buttonBar");
            var playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTVPPlaypause ytpicon").click(function() {
                if (YTPlayer.player.getPlayerState() == 1) jQuery(YTPlayer).pauseYTP();
                else jQuery(YTPlayer).playYTP()
            });
            var MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTVPMuteUnmute ytpicon").click(function() {
                if (YTPlayer.player.getVolume() == 0) {
                    jQuery(YTPlayer).unmuteYTPVolume()
                } else {
                    jQuery(YTPlayer).muteYTPVolume()
                }
            });
            var idx = jQuery("<span/>").addClass("mb_YTVPTime");
            var vURL = data.videoURL;
            if (vURL.indexOf("http") < 0) vURL = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + data.videoURL;
            var movieUrl = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTVPUrl ytpicon").attr("title", "view on YouTube").on("click", function() {
                window.open(vURL, "viewOnYT")
            });
            var onlyVideo = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function() {
                jQuery(YTPlayer).fullscreen(data.realfullscreen)
            });
            var progressBar = jQuery("<div/>").addClass("mb_YTVPProgress").css("position", "absolute").click(function(e) {
                timeBar.css({
                    width: e.clientX - timeBar.offset().left
                });
                YTPlayer.timeW = e.clientX - timeBar.offset().left;
                controlBar.find(".mb_YTVPLoaded").css({
                    width: 0
                });
                var t = Math.floor(YTPlayer.player.getDuration());
                YTPlayer.goto = timeBar.outerWidth() * t / progressBar.outerWidth();
                YTPlayer.player.seekTo(parseFloat(YTPlayer.goto), true);
                controlBar.find(".mb_YTVPLoaded").css({
                    width: 0
                })
            });
            var loadedBar = jQuery("<div/>").addClass("mb_YTVPLoaded").css("position", "absolute");
            var timeBar = jQuery("<div/>").addClass("mb_YTVTime").css("position", "absolute");
            progressBar.append(loadedBar).append(timeBar);
            buttonBar.append(playpause).append(MuteUnmute).append(idx);
            if (data.showYTLogo) {
                buttonBar.append(movieUrl)
            }
            if (YTPlayer.isBackground || eval(YTPlayer.opt.realfullscreen) && !YTPlayer.isBackground) buttonBar.append(onlyVideo);
            controlBar.append(buttonBar).append(progressBar);
            if (!YTPlayer.isBackground) {
                controlBar.addClass("inlinePlayer");
                YTPlayer.wrapper.before(controlBar)
            } else {
                jQuery("body").after(controlBar)
            }
            controlBar.fadeIn()
        },
        checkForState: function(e) {
            clearInterval(e.getState);
            e.getState = setInterval(function() {
                var t = jQuery(e).manageYTPProgress();
                var n = jQuery(e);
                var r = jQuery("#controlBar_" + e.id);
                var i = e.opt;
                var s = e.opt.startAt ? e.opt.startAt : 1;
                var o = e.opt.stopAt > e.opt.startAt ? e.opt.stopAt : 0;
                o = o < e.player.getDuration() ? o : 0;
                if (e.player.getVolume() == 0) n.addClass("isMuted");
                else n.removeClass("isMuted");
                if (t.totalTime) {
                    r.find(".mb_YTVPTime").html(jQuery.mbYTPlayer.formatTime(t.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(t.totalTime))
                } else {
                    r.find(".mb_YTVPTime").html("-- : -- / -- : --")
                }
                if (e.player.getPlayerState() == 1 && (parseFloat(e.player.getDuration() - 3) < e.player.getCurrentTime() || o > 0 && parseFloat(e.player.getCurrentTime()) > o)) {
                    if (e.isEnded) return;
                    e.isEnded = true;
                    setTimeout(function() {
                        e.isEnded = false
                    }, 2e3);
                    if (e.isPlayList) {
                        clearInterval(e.getState);
                        jQuery(e).trigger("YTPEnd");
                        return
                    } else if (!i.loop) {
                        e.player.pauseVideo();
                        e.wrapper.CSSAnimate({
                            opacity: 0
                        }, 1e3, function() {
                            jQuery(e).trigger("YTPEnd");
                            e.player.seekTo(s, true);
                            if (!e.isBackground) {
                                var t = e.videoData.thumbnail.hqDefault;
                                jQuery(e).css({
                                    background: "rgba(0,0,0,0.5) url(" + t + ") center center",
                                    backgroundSize: "cover"
                                })
                            }
                        })
                    } else e.player.seekTo(s, true)
                }
            }, 1)
        },
        formatTime: function(e) {
            var t = Math.floor(e / 60);
            var n = Math.floor(e - 60 * t);
            return (t <= 9 ? "0" + t : t) + " : " + (n <= 9 ? "0" + n : n)
        }
    };
    jQuery.fn.toggleVolume = function() {
        var e = this.get(0);
        if (!e) return;
        if (e.player.isMuted()) {
            jQuery(e).unmuteYTPVolume();
            return true
        } else {
            jQuery(e).muteYTPVolume();
            return false
        }
    };
    jQuery.fn.optimizeDisplay = function() {
        var e = this.get(0);
        var t = e.opt;
        var n = jQuery(e.playerEl);
        var r = {};
        var i = e.wrapper;
        r.width = i.outerWidth();
        r.height = i.outerHeight();
        var s = 24;
        var o = 100;
        var u = {};
        u.width = r.width + r.width * s / 100;
        u.height = t.ratio == "16/9" ? Math.ceil(9 * r.width / 16) : Math.ceil(3 * r.width / 4);
        u.marginTop = -((u.height - r.height) / 2);
        u.marginLeft = -(r.width * (s / 2) / 100);
        if (u.height < r.height) {
            u.height = r.height + r.height * s / 100;
            u.width = t.ratio == "16/9" ? Math.floor(16 * r.height / 9) : Math.floor(4 * r.height / 3);
            u.marginTop = -(r.height * (s / 2) / 100);
            u.marginLeft = -((u.width - r.width) / 2)
        }
        u.width += o;
        u.height += o;
        u.marginTop -= o / 2;
        u.marginLeft -= o / 2;
        n.css({
            width: u.width,
            height: u.height,
            marginTop: u.marginTop,
            marginLeft: u.marginLeft
        })
    };
    jQuery.shuffle = function(e) {
        var t = e.slice();
        var n = t.length;
        var r = n;
        while (r--) {
            var i = parseInt(Math.random() * n);
            var s = t[r];
            t[r] = t[i];
            t[i] = s
        }
        return t
    };
    jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer;
    jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.YTPlaylist;
    jQuery.fn.playNext = jQuery.mbYTPlayer.playNext;
    jQuery.fn.playPrev = jQuery.mbYTPlayer.playPrev;
    jQuery.fn.changeMovie = jQuery.mbYTPlayer.changeMovie;
    jQuery.fn.getVideoID = jQuery.mbYTPlayer.getVideoID;
    jQuery.fn.getPlayer = jQuery.mbYTPlayer.getPlayer;
    jQuery.fn.playerDestroy = jQuery.mbYTPlayer.playerDestroy;
    jQuery.fn.fullscreen = jQuery.mbYTPlayer.fullscreen;
    jQuery.fn.buildYTPControls = jQuery.mbYTPlayer.buildYTPControls;
    jQuery.fn.playYTP = jQuery.mbYTPlayer.playYTP;
    jQuery.fn.toggleLoops = jQuery.mbYTPlayer.toggleLoops;
    jQuery.fn.stopYTP = jQuery.mbYTPlayer.stopYTP;
    jQuery.fn.pauseYTP = jQuery.mbYTPlayer.pauseYTP;
    jQuery.fn.seekToYTP = jQuery.mbYTPlayer.seekToYTP;
    jQuery.fn.muteYTPVolume = jQuery.mbYTPlayer.muteYTPVolume;
    jQuery.fn.unmuteYTPVolume = jQuery.mbYTPlayer.unmuteYTPVolume;
    jQuery.fn.setYTPVolume = jQuery.mbYTPlayer.setYTPVolume;
    jQuery.fn.setVideoQuality = jQuery.mbYTPlayer.setVideoQuality;
    jQuery.fn.manageYTPProgress = jQuery.mbYTPlayer.manageYTPProgress
})(jQuery, ytp);
(function(e) {
    function t(t) {
        var n = t || window.event,
            r = [].slice.call(arguments, 1),
            i = 0,
            s = 0,
            o = 0,
            t = e.event.fix(n);
        t.type = "mousewheel";
        n.wheelDelta && (i = n.wheelDelta / 120);
        n.detail && (i = -n.detail / 3);
        o = i;
        n.axis !== void 0 && n.axis === n.HORIZONTAL_AXIS && (o = 0, s = -1 * i);
        n.wheelDeltaY !== void 0 && (o = n.wheelDeltaY / 120);
        n.wheelDeltaX !== void 0 && (s = -1 * n.wheelDeltaX / 120);
        r.unshift(t, i, s, o);
        return (e.event.dispatch || e.event.handle).apply(this, r)
    }
    var n = ["DOMMouseScroll", "mousewheel"];
    if (e.event.fixHooks)
        for (var r = n.length; r;) e.event.fixHooks[n[--r]] = e.event.mouseHooks;
    e.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener)
                for (var e = n.length; e;) this.addEventListener(n[--e], t, false);
            else this.onmousewheel = t
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var e = n.length; e;) this.removeEventListener(n[--e], t, false);
            else this.onmousewheel = null
        }
    };
    e.fn.extend({
        mousewheel: function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function(e) {
            return this.unbind("mousewheel", e)
        }
    })
})(jQuery);
(function(e) {
    "use strict";

    function t(t) {
        return /In/.test(t) || e.inArray(t, e.fn.textillate.defaults.inEffects) >= 0
    }

    function n(t) {
        return /Out/.test(t) || e.inArray(t, e.fn.textillate.defaults.outEffects) >= 0
    }

    function r(t) {
        var n = t.attributes || [],
            r = {};
        if (!n.length) return r;
        e.each(n, function(e, t) {
            if (/^data-in-*/.test(t.nodeName)) {
                r.in = r.in || {};
                r.in[t.nodeName.replace(/data-in-/, "")] = t.nodeValue
            } else if (/^data-out-*/.test(t.nodeName)) {
                r.out = r.out || {};
                r.out[t.nodeName.replace(/data-out-/, "")] = t.nodeValue
            } else if (/^data-*/.test(t.nodeName)) {
                r[t.nodeName] = t.nodeValue
            }
        });
        return r
    }

    function i(e) {
        for (var t, n, r = e.length; r; t = parseInt(Math.random() * r), n = e[--r], e[r] = e[t], e[t] = n);
        return e
    }

    function s(e, t, n) {
        e.addClass("animated " + t).css("visibility", "visible").show();
        e.one("animationend webkitAnimationEnd oAnimationEnd", function() {
            e.removeClass("animated " + t);
            n && n()
        })
    }

    function o(r, o, u) {
        var a = this,
            f = r.length;
        if (!f) {
            u && u();
            return
        }
        if (o.shuffle) r = i(r);
        if (o.reverse) r = r.toArray().reverse();
        e.each(r, function(r, i) {
            function l() {
                if (t(o.effect)) {
                    a.css("visibility", "visible")
                } else if (n(o.effect)) {
                    a.css("visibility", "hidden")
                }
                f -= 1;
                if (!f && u) u()
            }
            var a = e(i);
            var c = o.sync ? o.delay : o.delay * r * o.delayScale;
            a.text() ? setTimeout(function() {
                s(a, o.effect, l)
            }, c) : l()
        })
    }
    var u = function(i, s) {
        var u = this,
            a = e(i);
        u.init = function() {
            u.$texts = a.find(s.selector);
            if (!u.$texts.length) {
                u.$texts = e('<ul class="texts"><li>' + a.html() + "</li></ul>");
                a.html(u.$texts)
            }
            u.$texts.hide();
            u.$current = e("<span>").text(u.$texts.find(":first-child").html()).prependTo(a);
            if (t(s.in.effect)) {
                u.$current.css("visibility", "hidden")
            } else if (n(s.out.effect)) {
                u.$current.css("visibility", "visible")
            }
            u.setOptions(s);
            u.timeoutRun = null;
            setTimeout(function() {
                u.options.autoStart && u.start()
            }, u.options.initialDelay)
        };
        u.setOptions = function(e) {
            u.options = e
        };
        u.triggerEvent = function(t) {
            var n = e.Event(t + ".tlt");
            a.trigger(n, u);
            return n
        };
        u.in = function(i, s) {
            i = i || 0;
            var a = u.$texts.find(":nth-child(" + (i + 1) + ")"),
                f = e.extend({}, u.options, r(a)),
                l;
            a.addClass("current");
            u.triggerEvent("inAnimationBegin");
            u.$current.text(a.html()).lettering("words");
            u.$current.find('[class^="word"]').css({
                display: "inline-block",
                "-webkit-transform": "translate3d(0,0,0)",
                "-moz-transform": "translate3d(0,0,0)",
                "-o-transform": "translate3d(0,0,0)",
                transform: "translate3d(0,0,0)"
            }).each(function() {
                e(this).lettering()
            });
            l = u.$current.find('[class^="char"]').css("display", "inline-block");
            if (t(f.in.effect)) {
                l.css("visibility", "hidden")
            } else if (n(f.in.effect)) {
                l.css("visibility", "visible")
            }
            u.currentIndex = i;
            o(l, f.in, function() {
                u.triggerEvent("inAnimationEnd");
                if (f.in.callback) f.in.callback();
                if (s) s(u)
            })
        };
        u.out = function(t) {
            var n = u.$texts.find(":nth-child(" + (u.currentIndex + 1) + ")"),
                i = u.$current.find('[class^="char"]'),
                s = e.extend({}, u.options, r(n));
            u.triggerEvent("outAnimationBegin");
            o(i, s.out, function() {
                n.removeClass("current");
                u.triggerEvent("outAnimationEnd");
                if (s.out.callback) s.out.callback();
                if (t) t(u)
            })
        };
        u.start = function(e) {
            u.triggerEvent("start");
            (function t(e) {
                u.in(e, function() {
                    var n = u.$texts.children().length;
                    e += 1;
                    if (!u.options.loop && e >= n) {
                        if (u.options.callback) u.options.callback();
                        u.triggerEvent("end")
                    } else {
                        e = e % n;
                        u.timeoutRun = setTimeout(function() {
                            u.out(function() {
                                t(e)
                            })
                        }, u.options.minDisplayTime)
                    }
                })
            })(e || 0)
        };
        u.stop = function() {
            if (u.timeoutRun) {
                clearInterval(u.timeoutRun);
                u.timeoutRun = null
            }
        };
        u.init()
    };
    e.fn.textillate = function(t, n) {
        return this.each(function() {
            var i = e(this),
                s = i.data("textillate"),
                o = e.extend(true, {}, e.fn.textillate.defaults, r(this), typeof t == "object" && t);
            if (!s) {
                i.data("textillate", s = new u(this, o))
            } else if (typeof t == "string") {
                s[t].apply(s, [].concat(n))
            } else {
                s.setOptions.call(s, o)
            }
        })
    };
    e.fn.textillate.defaults = {
        selector: ".texts",
        loop: false,
        minDisplayTime: 2e3,
        initialDelay: 0,
        "in": {
            effect: "fadeInLeftBig",
            delayScale: 1.5,
            delay: 50,
            sync: false,
            reverse: false,
            shuffle: false,
            callback: function() {}
        },
        out: {
            effect: "hinge",
            delayScale: 1.5,
            delay: 50,
            sync: false,
            reverse: false,
            shuffle: false,
            callback: function() {}
        },
        autoStart: true,
        inEffects: [],
        outEffects: ["hinge"],
        callback: function() {}
    }
})(jQuery);
eval(function(e, t, n, r, i, s) {
    i = function(e) {
        return (e < t ? "" : i(parseInt(e / t))) + ((e = e % t) > 35 ? String.fromCharCode(e + 29) : e.toString(36))
    };
    if (!"".replace(/^/, String)) {
        while (n--) s[i(n)] = r[n] || i(n);
        r = [function(e) {
            return s[e]
        }];
        i = function() {
            return "\\w+"
        };
        n = 1
    }
    while (n--)
        if (r[n]) e = e.replace(new RegExp("\\b" + i(n) + "\\b", "g"), r[n]);
    return e
}('(3(d){d.a=3(a,b){j c=a.v(".")[0],a=a.v(".")[1];d[c]=d[c]||{};d[c][a]=3(a,b){I.O&&2.1i(a,b)};d[c][a].K=d.n({1s:c,1u:a},b);d.N[a]=3(b){j g="1p"===1k b,f=L.K.X.W(I,1),i=2;l(g&&"1j"===b.1l(0,1))6 i;2.18(3(){j h=d.1b(2,a);h||(h=d.1b(2,a,k d[c][a](b,2)));g&&(i=h[b].14(h,f))});6 i}};d.a("1J.1G",{u:{1A:"1x",1y:5},1B:3(a,b){6 b?(2.u[a]=b,2.4("9").x(a,b),2):2.u[a]},1i:3(a,b){2.E=b;a=a||{};m.n(2.u,a,{1h:2.w(a.1h)});2.1g();2.1f&&2.1f()},1g:3(){j a=2;2.o={9:k 8.7.1D(a.E,a.u),M:[],p:[],q:[]};8.7.G.1C(a.o.9,"1F",3(){d(a.E).19("1E",a.o.9)});a.C(a.u.1t,a.o.9)},Z:3(a){j b=2.4("12",k 8.7.1z);b.n(2.w(a));2.4("9").1M(b);6 2},1L:3(a){j b=2.4("9").1O();6 b?b.1N(a.Y()):!1},1K:3(a,b){2.4("9").1H[b].J(2.F(a));6 2},1I:3(a,b){a.9=2.4("9");a.13=2.w(a.13);j c=k(a.1n||8.7.1o)(a),e=2.4("M");c.16?e[c.16]=c:e.J(c);c.12&&2.Z(c.Y());2.C(b,a.9,c);6 d(c)},z:3(a){2.B(2.4(a));2.x(a,[]);6 2},B:3(a){y(j b Q a)a.11(b)&&(a[b]r 8.7.17?(8.7.G.1v(a[b]),a[b].A&&a[b].A(t)):a[b]r L&&2.B(a[b]),a[b]=t)},1w:3(a,b,c){a=2.4(a);b.s=d.1m(b.s)?b.s:[b.s];y(j e Q a)l(a.11(e)){j g=!1,f;y(f Q b.s)l(-1<d.1r(b.s[f],a[e][b.1q]))g=!0;10 l(b.V&&"1P"===b.V){g=!1;2c}c(a[e],g)}6 2},4:3(a,b){j c=2.o;l(!c[a]){l(-1<a.2e(">")){y(j e=a.T(/ /g,"").v(">"),d=0;d<e.O;d++){l(!c[e[d]])l(b)c[e[d]]=d+1<e.O?[]:b;10 6 t;c=c[e[d]]}6 c}b&&!c[a]&&2.x(a,b)}6 c[a]},2g:3(a,b,c){j d=2.4("H",a.2f||k 8.7.2i);d.R(a);d.2h(2.4("9"),2.F(b));2.C(c,d);6 2},2b:3(){t!=2.4("H")&&2.4("H").2a();6 2},x:3(a,b){2.o[a]=b;6 2},2d:3(){j a=2.4("9"),b=a.2o();d(a).1e("2q");a.2p(b);6 2},2k:3(){2.z("M").z("q").z("p").B(2.o);m.2n(2.E,2.1W)},C:3(a){a&&d.1X(a)&&a.14(2,L.K.X.W(I,1))},w:3(a){l(!a)6 k 8.7.P(0,0);l(a r 8.7.P)6 a;a=a.T(/ /g,"").v(",");6 k 8.7.P(a[0],a[1])},F:3(a){6!a?t:a r m?a[0]:a r 1Q?a:d("#"+a)[0]},1S:3(a,b,c){j d=2,g=2.4("q > U",k 8.7.U),f=2.4("q > S",k 8.7.S);b&&f.R(b);g.1U(a,3(a,b){"1T"===b?(f.26(a),f.A(d.4("9"))):f.A(t);c(a,b)})},27:3(a,b){2.4("9").29(2.4("q > 1d",k 8.7.1d(2.F(a),b)))},28:3(a,b){2.4("q > 1a",k 8.7.1a).21(a,b)},20:3(a,b){j c=k 8.7[a](m.n({9:2.4("9")},b));2.4("p > "+a,[]).J(c);6 d(c)},22:3(a,b){(!b?2.4("p > D",k 8.7.D):2.4("p > D",k 8.7.D(b,a))).R(m.n({9:2.4("9")},a))},23:3(a,b,c){2.4("p > "+a,k 8.7.1Y(b,m.n({9:2.4("9")},c)))}});m.N.n({1e:3(a){8.7.G.19(2[0],a);6 2},15:3(a,b,c){8.7&&2[0]r 8.7.17?8.7.G.24(2[0],a,b):c?2.1c(a,b,c):2.1c(a,b);6 2}});m.18("25 1R 1Z 1V 2m 2l 2j".v(" "),3(a,b){m.N[b]=3(a,d){6 2.15(b,a,d)}})})(m);', 62, 151, "||this|function|get||return|maps|google|map||||||||||var|new|if|jQuery|extend|instance|overlays|services|instanceof|value|null|options|split|_latLng|set|for|clear|setMap|_c|_call|FusionTablesLayer|el|_unwrap|event|iw|arguments|push|prototype|Array|markers|fn|length|LatLng|in|setOptions|DirectionsRenderer|replace|DirectionsService|operator|call|slice|getPosition|addBounds|else|hasOwnProperty|bounds|position|apply|addEventListener|id|MVCObject|each|trigger|Geocoder|data|bind|StreetViewPanorama|triggerEvent|_init|_create|center|_setup|_|typeof|substring|isArray|marker|Marker|string|property|inArray|namespace|callback|pluginName|clearInstanceListeners|find|roadmap|zoom|LatLngBounds|mapTypeId|option|addListenerOnce|Map|init|bounds_changed|gmap|controls|addMarker|ui|addControl|inViewport|fitBounds|contains|getBounds|AND|Object|rightclick|displayDirections|OK|route|mouseover|name|isFunction|KmlLayer|dblclick|addShape|geocode|loadFusion|loadKML|addListener|click|setDirections|displayStreetView|search|setStreetView|close|closeInfoWindow|break|refresh|indexOf|infoWindow|openInfoWindow|open|InfoWindow|dragend|destroy|drag|mouseout|removeData|getCenter|setCenter|resize".split("|"), 0, {}));
! function(e) {
    function t() {}

    function n(e) {
        function n(t) {
            t.prototype.option || (t.prototype.option = function(t) {
                e.isPlainObject(t) && (this.options = e.extend(!0, this.options, t))
            })
        }

        function i(t, n) {
            e.fn[t] = function(i) {
                if ("string" == typeof i) {
                    for (var o = r.call(arguments, 1), u = 0, l = this.length; l > u; u++) {
                        var h = this[u],
                            p = e.data(h, t);
                        if (p)
                            if (e.isFunction(p[i]) && "_" !== i.charAt(0)) {
                                var v = p[i].apply(p, o);
                                if (void 0 !== v) return v
                            } else s("no such method '" + i + "' for " + t + " instance");
                        else s("cannot call methods on " + t + " prior to initialization; attempted to call '" + i + "'")
                    }
                    return this
                }
                return this.each(function() {
                    var r = e.data(this, t);
                    r ? (r.option(i), r._init()) : (r = new n(this, i), e.data(this, t, r))
                })
            }
        }
        if (e) {
            var s = "undefined" == typeof console ? t : function(e) {
                console.error(e)
            };
            return e.bridget = function(e, t) {
                n(t), i(e, t)
            }, e.bridget
        }
    }
    var r = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], n) : n(e.jQuery)
}(window),
function(e) {
    function t(t) {
        var n = e.event;
        return n.target = n.target || n.srcElement || t, n
    }
    var n = document.documentElement,
        r = function() {};
    n.addEventListener ? r = function(e, t, n) {
        e.addEventListener(t, n, !1)
    } : n.attachEvent && (r = function(e, n, r) {
        e[n + r] = r.handleEvent ? function() {
            var n = t(e);
            r.handleEvent.call(r, n)
        } : function() {
            var n = t(e);
            r.call(e, n)
        }, e.attachEvent("on" + n, e[n + r])
    });
    var i = function() {};
    n.removeEventListener ? i = function(e, t, n) {
        e.removeEventListener(t, n, !1)
    } : n.detachEvent && (i = function(e, t, n) {
        e.detachEvent("on" + t, e[t + n]);
        try {
            delete e[t + n]
        } catch (r) {
            e[t + n] = void 0
        }
    });
    var s = {
        bind: r,
        unbind: i
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", s) : "object" == typeof exports ? module.exports = s : e.eventie = s
}(this),
function(e) {
    function t(e) {
        "function" == typeof e && (t.isReady ? e() : s.push(e))
    }

    function n(e) {
        var n = "readystatechange" === e.type && "complete" !== i.readyState;
        if (!t.isReady && !n) {
            t.isReady = !0;
            for (var r = 0, o = s.length; o > r; r++) {
                var u = s[r];
                u()
            }
        }
    }

    function r(r) {
        return r.bind(i, "DOMContentLoaded", n), r.bind(i, "readystatechange", n), r.bind(e, "load", n), t
    }
    var i = e.document,
        s = [];
    t.isReady = !1, "function" == typeof define && define.amd ? (t.isReady = "function" == typeof requirejs, define("doc-ready/doc-ready", ["eventie/eventie"], r)) : e.docReady = r(e.eventie)
}(this),
function() {
    function e() {}

    function t(e, t) {
        for (var n = e.length; n--;)
            if (e[n].listener === t) return n;
        return -1
    }

    function n(e) {
        return function() {
            return this[e].apply(this, arguments)
        }
    }
    var r = e.prototype,
        i = this,
        s = i.EventEmitter;
    r.getListeners = function(e) {
        var t, n, r = this._getEvents();
        if (e instanceof RegExp) {
            t = {};
            for (n in r) r.hasOwnProperty(n) && e.test(n) && (t[n] = r[n])
        } else t = r[e] || (r[e] = []);
        return t
    }, r.flattenListeners = function(e) {
        var t, n = [];
        for (t = 0; t < e.length; t += 1) n.push(e[t].listener);
        return n
    }, r.getListenersAsObject = function(e) {
        var t, n = this.getListeners(e);
        return n instanceof Array && (t = {}, t[e] = n), t || n
    }, r.addListener = function(e, n) {
        var r, i = this.getListenersAsObject(e),
            s = "object" == typeof n;
        for (r in i) i.hasOwnProperty(r) && -1 === t(i[r], n) && i[r].push(s ? n : {
            listener: n,
            once: !1
        });
        return this
    }, r.on = n("addListener"), r.addOnceListener = function(e, t) {
        return this.addListener(e, {
            listener: t,
            once: !0
        })
    }, r.once = n("addOnceListener"), r.defineEvent = function(e) {
        return this.getListeners(e), this
    }, r.defineEvents = function(e) {
        for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
        return this
    }, r.removeListener = function(e, n) {
        var r, i, s = this.getListenersAsObject(e);
        for (i in s) s.hasOwnProperty(i) && (r = t(s[i], n), -1 !== r && s[i].splice(r, 1));
        return this
    }, r.off = n("removeListener"), r.addListeners = function(e, t) {
        return this.manipulateListeners(!1, e, t)
    }, r.removeListeners = function(e, t) {
        return this.manipulateListeners(!0, e, t)
    }, r.manipulateListeners = function(e, t, n) {
        var r, i, s = e ? this.removeListener : this.addListener,
            o = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp)
            for (r = n.length; r--;) s.call(this, t, n[r]);
        else
            for (r in t) t.hasOwnProperty(r) && (i = t[r]) && ("function" == typeof i ? s.call(this, r, i) : o.call(this, r, i));
        return this
    }, r.removeEvent = function(e) {
        var t, n = typeof e,
            r = this._getEvents();
        if ("string" === n) delete r[e];
        else if (e instanceof RegExp)
            for (t in r) r.hasOwnProperty(t) && e.test(t) && delete r[t];
        else delete this._events;
        return this
    }, r.removeAllListeners = n("removeEvent"), r.emitEvent = function(e, t) {
        var n, r, i, s, o = this.getListenersAsObject(e);
        for (i in o)
            if (o.hasOwnProperty(i))
                for (r = o[i].length; r--;) n = o[i][r], n.once === !0 && this.removeListener(e, n.listener), s = n.listener.apply(this, t || []), s === this._getOnceReturnValue() && this.removeListener(e, n.listener);
        return this
    }, r.trigger = n("emitEvent"), r.emit = function(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t)
    }, r.setOnceReturnValue = function(e) {
        return this._onceReturnValue = e, this
    }, r._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, r._getEvents = function() {
        return this._events || (this._events = {})
    }, e.noConflict = function() {
        return i.EventEmitter = s, e
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return e
    }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}.call(this),
    function(e) {
        function t(e) {
            if (e) {
                if ("string" == typeof r[e]) return e;
                e = e.charAt(0).toUpperCase() + e.slice(1);
                for (var t, i = 0, s = n.length; s > i; i++)
                    if (t = n[i] + e, "string" == typeof r[t]) return t
            }
        }
        var n = "Webkit Moz ms Ms O".split(" "),
            r = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
            return t
        }) : "object" == typeof exports ? module.exports = t : e.getStyleProperty = t
    }(window),
    function(e) {
        function t(e) {
            var t = parseFloat(e),
                n = -1 === e.indexOf("%") && !isNaN(t);
            return n && t
        }

        function n() {
            for (var e = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, t = 0, n = o.length; n > t; t++) {
                var r = o[t];
                e[r] = 0
            }
            return e
        }

        function r(e) {
            function r(e) {
                if ("string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
                    var r = s(e);
                    if ("none" === r.display) return n();
                    var i = {};
                    i.width = e.offsetWidth, i.height = e.offsetHeight;
                    for (var p = i.isBorderBox = !(!l || !r[l] || "border-box" !== r[l]), d = 0, v = o.length; v > d; d++) {
                        var m = o[d],
                            y = r[m];
                        y = u(e, y);
                        var w = parseFloat(y);
                        i[m] = isNaN(w) ? 0 : w
                    }
                    var E = i.paddingLeft + i.paddingRight,
                        S = i.paddingTop + i.paddingBottom,
                        x = i.marginLeft + i.marginRight,
                        T = i.marginTop + i.marginBottom,
                        N = i.borderLeftWidth + i.borderRightWidth,
                        C = i.borderTopWidth + i.borderBottomWidth,
                        k = p && a,
                        L = t(r.width);
                    L !== !1 && (i.width = L + (k ? 0 : E + N));
                    var A = t(r.height);
                    return A !== !1 && (i.height = A + (k ? 0 : S + C)), i.innerWidth = i.width - (E + N), i.innerHeight = i.height - (S + C), i.outerWidth = i.width + x, i.outerHeight = i.height + T, i
                }
            }

            function u(e, t) {
                if (i || -1 === t.indexOf("%")) return t;
                var n = e.style,
                    r = n.left,
                    s = e.runtimeStyle,
                    o = s && s.left;
                return o && (s.left = e.currentStyle.left), n.left = t, t = n.pixelLeft, n.left = r, o && (s.left = o), t
            }
            var a, l = e("boxSizing");
            return function() {
                if (l) {
                    var e = document.createElement("div");
                    e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style[l] = "border-box";
                    var n = document.body || document.documentElement;
                    n.appendChild(e);
                    var r = s(e);
                    a = 200 === t(r.width), n.removeChild(e)
                }
            }(), r
        }
        var i = e.getComputedStyle,
            s = i ? function(e) {
                return i(e, null)
            } : function(e) {
                return e.currentStyle
            },
            o = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], r) : "object" == typeof exports ? module.exports = r(require("get-style-property")) : e.getSize = r(e.getStyleProperty)
    }(window),
    function(e, t) {
        function n(e, t) {
            return e[u](t)
        }

        function r(e) {
            if (!e.parentNode) {
                var t = document.createDocumentFragment();
                t.appendChild(e)
            }
        }

        function i(e, t) {
            r(e);
            for (var n = e.parentNode.querySelectorAll(t), i = 0, s = n.length; s > i; i++)
                if (n[i] === e) return !0;
            return !1
        }

        function s(e, t) {
            return r(e), n(e, t)
        }
        var o, u = function() {
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], n = 0, r = e.length; r > n; n++) {
                var i = e[n],
                    s = i + "MatchesSelector";
                if (t[s]) return s
            }
        }();
        if (u) {
            var a = document.createElement("div"),
                f = n(a, "div");
            o = f ? n : s
        } else o = i;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return o
        }) : window.matchesSelector = o
    }(this, Element.prototype),
    function(e) {
        function t(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function n(e) {
            for (var t in e) return !1;
            return t = null, !0
        }

        function r(e) {
            return e.replace(/([A-Z])/g, function(e) {
                return "-" + e.toLowerCase()
            })
        }

        function i(e, i, s) {
            function u(e, t) {
                e && (this.element = e, this.layout = t, this.position = {
                    x: 0,
                    y: 0
                }, this._create())
            }
            var a = s("transition"),
                f = s("transform"),
                l = a && f,
                h = !!s("perspective"),
                p = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "otransitionend",
                    transition: "transitionend"
                }[a],
                v = ["transform", "transition", "transitionDuration", "transitionProperty"],
                m = function() {
                    for (var e = {}, t = 0, n = v.length; n > t; t++) {
                        var r = v[t],
                            i = s(r);
                        i && i !== r && (e[r] = i)
                    }
                    return e
                }();
            t(u.prototype, e.prototype), u.prototype._create = function() {
                this._transn = {
                    ingProperties: {},
                    clean: {},
                    onEnd: {}
                }, this.css({
                    position: "absolute"
                })
            }, u.prototype.handleEvent = function(e) {
                var t = "on" + e.type;
                this[t] && this[t](e)
            }, u.prototype.getSize = function() {
                this.size = i(this.element)
            }, u.prototype.css = function(e) {
                var t = this.element.style;
                for (var n in e) {
                    var r = m[n] || n;
                    t[r] = e[n]
                }
            }, u.prototype.getPosition = function() {
                var e = o(this.element),
                    t = this.layout.options,
                    n = t.isOriginLeft,
                    r = t.isOriginTop,
                    i = parseInt(e[n ? "left" : "right"], 10),
                    s = parseInt(e[r ? "top" : "bottom"], 10);
                i = isNaN(i) ? 0 : i, s = isNaN(s) ? 0 : s;
                var u = this.layout.size;
                i -= n ? u.paddingLeft : u.paddingRight, s -= r ? u.paddingTop : u.paddingBottom, this.position.x = i, this.position.y = s
            }, u.prototype.layoutPosition = function() {
                var e = this.layout.size,
                    t = this.layout.options,
                    n = {};
                t.isOriginLeft ? (n.left = this.position.x + e.paddingLeft + "px", n.right = "") : (n.right = this.position.x + e.paddingRight + "px", n.left = ""), t.isOriginTop ? (n.top = this.position.y + e.paddingTop + "px", n.bottom = "") : (n.bottom = this.position.y + e.paddingBottom + "px", n.top = ""), this.css(n), this.emitEvent("layout", [this])
            };
            var y = h ? function(e, t) {
                return "translate3d(" + e + "px, " + t + "px, 0)"
            } : function(e, t) {
                return "translate(" + e + "px, " + t + "px)"
            };
            u.prototype._transitionTo = function(e, t) {
                this.getPosition();
                var n = this.position.x,
                    r = this.position.y,
                    i = parseInt(e, 10),
                    s = parseInt(t, 10),
                    o = i === this.position.x && s === this.position.y;
                if (this.setPosition(e, t), o && !this.isTransitioning) return void this.layoutPosition();
                var u = e - n,
                    a = t - r,
                    f = {},
                    l = this.layout.options;
                u = l.isOriginLeft ? u : -u, a = l.isOriginTop ? a : -a, f.transform = y(u, a), this.transition({
                    to: f,
                    onTransitionEnd: {
                        transform: this.layoutPosition
                    },
                    isCleaning: !0
                })
            }, u.prototype.goTo = function(e, t) {
                this.setPosition(e, t), this.layoutPosition()
            }, u.prototype.moveTo = l ? u.prototype._transitionTo : u.prototype.goTo, u.prototype.setPosition = function(e, t) {
                this.position.x = parseInt(e, 10), this.position.y = parseInt(t, 10)
            }, u.prototype._nonTransition = function(e) {
                this.css(e.to), e.isCleaning && this._removeStyles(e.to);
                for (var t in e.onTransitionEnd) e.onTransitionEnd[t].call(this)
            }, u.prototype._transition = function(e) {
                if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(e);
                var t = this._transn;
                for (var n in e.onTransitionEnd) t.onEnd[n] = e.onTransitionEnd[n];
                for (n in e.to) t.ingProperties[n] = !0, e.isCleaning && (t.clean[n] = !0);
                if (e.from) {
                    this.css(e.from);
                    var r = this.element.offsetHeight;
                    r = null
                }
                this.enableTransition(e.to), this.css(e.to), this.isTransitioning = !0
            };
            var w = f && r(f) + ",opacity";
            u.prototype.enableTransition = function() {
                this.isTransitioning || (this.css({
                    transitionProperty: w,
                    transitionDuration: this.layout.options.transitionDuration
                }), this.element.addEventListener(p, this, !1))
            }, u.prototype.transition = u.prototype[a ? "_transition" : "_nonTransition"], u.prototype.onwebkitTransitionEnd = function(e) {
                this.ontransitionend(e)
            }, u.prototype.onotransitionend = function(e) {
                this.ontransitionend(e)
            };
            var E = {
                "-webkit-transform": "transform",
                "-moz-transform": "transform",
                "-o-transform": "transform"
            };
            u.prototype.ontransitionend = function(e) {
                if (e.target === this.element) {
                    var t = this._transn,
                        r = E[e.propertyName] || e.propertyName;
                    if (delete t.ingProperties[r], n(t.ingProperties) && this.disableTransition(), r in t.clean && (this.element.style[e.propertyName] = "", delete t.clean[r]), r in t.onEnd) {
                        var i = t.onEnd[r];
                        i.call(this), delete t.onEnd[r]
                    }
                    this.emitEvent("transitionEnd", [this])
                }
            }, u.prototype.disableTransition = function() {
                this.removeTransitionStyles(), this.element.removeEventListener(p, this, !1), this.isTransitioning = !1
            }, u.prototype._removeStyles = function(e) {
                var t = {};
                for (var n in e) t[n] = "";
                this.css(t)
            };
            var S = {
                transitionProperty: "",
                transitionDuration: ""
            };
            return u.prototype.removeTransitionStyles = function() {
                this.css(S)
            }, u.prototype.removeElem = function() {
                this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
            }, u.prototype.remove = function() {
                if (!a || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
                var e = this;
                this.on("transitionEnd", function() {
                    return e.removeElem(), !0
                }), this.hide()
            }, u.prototype.reveal = function() {
                delete this.isHidden, this.css({
                    display: ""
                });
                var e = this.layout.options;
                this.transition({
                    from: e.hiddenStyle,
                    to: e.visibleStyle,
                    isCleaning: !0
                })
            }, u.prototype.hide = function() {
                this.isHidden = !0, this.css({
                    display: ""
                });
                var e = this.layout.options;
                this.transition({
                    from: e.visibleStyle,
                    to: e.hiddenStyle,
                    isCleaning: !0,
                    onTransitionEnd: {
                        opacity: function() {
                            this.isHidden && this.css({
                                display: "none"
                            })
                        }
                    }
                })
            }, u.prototype.destroy = function() {
                this.css({
                    position: "",
                    left: "",
                    right: "",
                    top: "",
                    bottom: "",
                    transition: "",
                    transform: ""
                })
            }, u
        }
        var s = e.getComputedStyle,
            o = s ? function(e) {
                return s(e, null)
            } : function(e) {
                return e.currentStyle
            };
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], i) : (e.Outlayer = {}, e.Outlayer.Item = i(e.EventEmitter, e.getSize, e.getStyleProperty))
    }(window),
    function(e) {
        function t(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function n(e) {
            return "[object Array]" === c.call(e)
        }

        function r(e) {
            var t = [];
            if (n(e)) t = e;
            else if (e && "number" == typeof e.length)
                for (var r = 0, i = e.length; i > r; r++) t.push(e[r]);
            else t.push(e);
            return t
        }

        function i(e, t) {
            var n = p(t, e); - 1 !== n && t.splice(n, 1)
        }

        function s(e) {
            return e.replace(/(.)([A-Z])/g, function(e, t, n) {
                return t + "-" + n
            }).toLowerCase()
        }

        function o(n, o, c, p, v, g) {
            function y(e, n) {
                if ("string" == typeof e && (e = u.querySelector(e)), !e || !h(e)) return void(a && a.error("Bad " + this.constructor.namespace + " element: " + e));
                this.element = e, this.options = t({}, this.constructor.defaults), this.option(n);
                var r = ++w;
                this.element.outlayerGUID = r, E[r] = this, this._create(), this.options.isInitLayout && this.layout()
            }
            var w = 0,
                E = {};
            return y.namespace = "outlayer", y.Item = g, y.defaults = {
                containerStyle: {
                    position: "relative"
                },
                isInitLayout: !0,
                isOriginLeft: !0,
                isOriginTop: !0,
                isResizeBound: !0,
                isResizingContainer: !0,
                transitionDuration: "0.4s",
                hiddenStyle: {
                    opacity: 0,
                    transform: "scale(0.001)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "scale(1)"
                }
            }, t(y.prototype, c.prototype), y.prototype.option = function(e) {
                t(this.options, e)
            }, y.prototype._create = function() {
                this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), t(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
            }, y.prototype.reloadItems = function() {
                this.items = this._itemize(this.element.children)
            }, y.prototype._itemize = function(e) {
                for (var t = this._filterFindItemElements(e), n = this.constructor.Item, r = [], i = 0, s = t.length; s > i; i++) {
                    var o = t[i],
                        u = new n(o, this);
                    r.push(u)
                }
                return r
            }, y.prototype._filterFindItemElements = function(e) {
                e = r(e);
                for (var t = this.options.itemSelector, n = [], i = 0, s = e.length; s > i; i++) {
                    var o = e[i];
                    if (h(o))
                        if (t) {
                            v(o, t) && n.push(o);
                            for (var u = o.querySelectorAll(t), a = 0, f = u.length; f > a; a++) n.push(u[a])
                        } else n.push(o)
                }
                return n
            }, y.prototype.getItemElements = function() {
                for (var e = [], t = 0, n = this.items.length; n > t; t++) e.push(this.items[t].element);
                return e
            }, y.prototype.layout = function() {
                this._resetLayout(), this._manageStamps();
                var e = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                this.layoutItems(this.items, e), this._isLayoutInited = !0
            }, y.prototype._init = y.prototype.layout, y.prototype._resetLayout = function() {
                this.getSize()
            }, y.prototype.getSize = function() {
                this.size = p(this.element)
            }, y.prototype._getMeasurement = function(e, t) {
                var n, r = this.options[e];
                r ? ("string" == typeof r ? n = this.element.querySelector(r) : h(r) && (n = r), this[e] = n ? p(n)[t] : r) : this[e] = 0
            }, y.prototype.layoutItems = function(e, t) {
                e = this._getItemsForLayout(e), this._layoutItems(e, t), this._postLayout()
            }, y.prototype._getItemsForLayout = function(e) {
                for (var t = [], n = 0, r = e.length; r > n; n++) {
                    var i = e[n];
                    i.isIgnored || t.push(i)
                }
                return t
            }, y.prototype._layoutItems = function(e, t) {
                function n() {
                    r.emitEvent("layoutComplete", [r, e])
                }
                var r = this;
                if (!e || !e.length) return void n();
                this._itemsOn(e, "layout", n);
                for (var i = [], s = 0, o = e.length; o > s; s++) {
                    var u = e[s],
                        a = this._getItemLayoutPosition(u);
                    a.item = u, a.isInstant = t || u.isLayoutInstant, i.push(a)
                }
                this._processLayoutQueue(i)
            }, y.prototype._getItemLayoutPosition = function() {
                return {
                    x: 0,
                    y: 0
                }
            }, y.prototype._processLayoutQueue = function(e) {
                for (var t = 0, n = e.length; n > t; t++) {
                    var r = e[t];
                    this._positionItem(r.item, r.x, r.y, r.isInstant)
                }
            }, y.prototype._positionItem = function(e, t, n, r) {
                r ? e.goTo(t, n) : e.moveTo(t, n)
            }, y.prototype._postLayout = function() {
                this.resizeContainer()
            }, y.prototype.resizeContainer = function() {
                if (this.options.isResizingContainer) {
                    var e = this._getContainerSize();
                    e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
                }
            }, y.prototype._getContainerSize = l, y.prototype._setContainerMeasure = function(e, t) {
                if (void 0 !== e) {
                    var n = this.size;
                    n.isBorderBox && (e += t ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), e = Math.max(e, 0), this.element.style[t ? "width" : "height"] = e + "px"
                }
            }, y.prototype._itemsOn = function(e, t, n) {
                function r() {
                    return i++, i === s && n.call(o), !0
                }
                for (var i = 0, s = e.length, o = this, u = 0, a = e.length; a > u; u++) {
                    var f = e[u];
                    f.on(t, r)
                }
            }, y.prototype.ignore = function(e) {
                var t = this.getItem(e);
                t && (t.isIgnored = !0)
            }, y.prototype.unignore = function(e) {
                var t = this.getItem(e);
                t && delete t.isIgnored
            }, y.prototype.stamp = function(e) {
                if (e = this._find(e)) {
                    this.stamps = this.stamps.concat(e);
                    for (var t = 0, n = e.length; n > t; t++) {
                        var r = e[t];
                        this.ignore(r)
                    }
                }
            }, y.prototype.unstamp = function(e) {
                if (e = this._find(e))
                    for (var t = 0, n = e.length; n > t; t++) {
                        var r = e[t];
                        i(r, this.stamps), this.unignore(r)
                    }
            }, y.prototype._find = function(e) {
                return e ? ("string" == typeof e && (e = this.element.querySelectorAll(e)), e = r(e)) : void 0
            }, y.prototype._manageStamps = function() {
                if (this.stamps && this.stamps.length) {
                    this._getBoundingRect();
                    for (var e = 0, t = this.stamps.length; t > e; e++) {
                        var n = this.stamps[e];
                        this._manageStamp(n)
                    }
                }
            }, y.prototype._getBoundingRect = function() {
                var e = this.element.getBoundingClientRect(),
                    t = this.size;
                this._boundingRect = {
                    left: e.left + t.paddingLeft + t.borderLeftWidth,
                    top: e.top + t.paddingTop + t.borderTopWidth,
                    right: e.right - (t.paddingRight + t.borderRightWidth),
                    bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth)
                }
            }, y.prototype._manageStamp = l, y.prototype._getElementOffset = function(e) {
                var t = e.getBoundingClientRect(),
                    n = this._boundingRect,
                    r = p(e),
                    i = {
                        left: t.left - n.left - r.marginLeft,
                        top: t.top - n.top - r.marginTop,
                        right: n.right - t.right - r.marginRight,
                        bottom: n.bottom - t.bottom - r.marginBottom
                    };
                return i
            }, y.prototype.handleEvent = function(e) {
                var t = "on" + e.type;
                this[t] && this[t](e)
            }, y.prototype.bindResize = function() {
                this.isResizeBound || (n.bind(e, "resize", this), this.isResizeBound = !0)
            }, y.prototype.unbindResize = function() {
                this.isResizeBound && n.unbind(e, "resize", this), this.isResizeBound = !1
            }, y.prototype.onresize = function() {
                function e() {
                    t.resize(), delete t.resizeTimeout
                }
                this.resizeTimeout && clearTimeout(this.resizeTimeout);
                var t = this;
                this.resizeTimeout = setTimeout(e, 100)
            }, y.prototype.resize = function() {
                this.isResizeBound && this.needsResizeLayout() && this.layout()
            }, y.prototype.needsResizeLayout = function() {
                var e = p(this.element),
                    t = this.size && e;
                return t && e.innerWidth !== this.size.innerWidth
            }, y.prototype.addItems = function(e) {
                var t = this._itemize(e);
                return t.length && (this.items = this.items.concat(t)), t
            }, y.prototype.appended = function(e) {
                var t = this.addItems(e);
                t.length && (this.layoutItems(t, !0), this.reveal(t))
            }, y.prototype.prepended = function(e) {
                var t = this._itemize(e);
                if (t.length) {
                    var n = this.items.slice(0);
                    this.items = t.concat(n), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(n)
                }
            }, y.prototype.reveal = function(e) {
                var t = e && e.length;
                if (t)
                    for (var n = 0; t > n; n++) {
                        var r = e[n];
                        r.reveal()
                    }
            }, y.prototype.hide = function(e) {
                var t = e && e.length;
                if (t)
                    for (var n = 0; t > n; n++) {
                        var r = e[n];
                        r.hide()
                    }
            }, y.prototype.getItem = function(e) {
                for (var t = 0, n = this.items.length; n > t; t++) {
                    var r = this.items[t];
                    if (r.element === e) return r
                }
            }, y.prototype.getItems = function(e) {
                if (e && e.length) {
                    for (var t = [], n = 0, r = e.length; r > n; n++) {
                        var i = e[n],
                            s = this.getItem(i);
                        s && t.push(s)
                    }
                    return t
                }
            }, y.prototype.remove = function(e) {
                e = r(e);
                var t = this.getItems(e);
                if (t && t.length) {
                    this._itemsOn(t, "remove", function() {
                        this.emitEvent("removeComplete", [this, t])
                    });
                    for (var n = 0, s = t.length; s > n; n++) {
                        var o = t[n];
                        o.remove(), i(o, this.items)
                    }
                }
            }, y.prototype.destroy = function() {
                var e = this.element.style;
                e.height = "", e.position = "", e.width = "";
                for (var t = 0, n = this.items.length; n > t; t++) {
                    var r = this.items[t];
                    r.destroy()
                }
                this.unbindResize(), delete this.element.outlayerGUID, f && f.removeData(this.element, this.constructor.namespace)
            }, y.data = function(e) {
                var t = e && e.outlayerGUID;
                return t && E[t]
            }, y.create = function(e, n) {
                function r() {
                    y.apply(this, arguments)
                }
                return Object.create ? r.prototype = Object.create(y.prototype) : t(r.prototype, y.prototype), r.prototype.constructor = r, r.defaults = t({}, y.defaults), t(r.defaults, n), r.prototype.settings = {}, r.namespace = e, r.data = y.data, r.Item = function() {
                    g.apply(this, arguments)
                }, r.Item.prototype = new g, o(function() {
                    for (var t = s(e), n = u.querySelectorAll(".js-" + t), i = "data-" + t + "-options", o = 0, l = n.length; l > o; o++) {
                        var c, h = n[o],
                            p = h.getAttribute(i);
                        try {
                            c = p && JSON.parse(p)
                        } catch (v) {
                            a && a.error("Error parsing " + i + " on " + h.nodeName.toLowerCase() + (h.id ? "#" + h.id : "") + ": " + v);
                            continue
                        }
                        var m = new r(h, c);
                        f && f.data(h, e, m)
                    }
                }), f && f.bridget && f.bridget(e, r), r
            }, y.Item = g, y
        }
        var u = e.document,
            a = e.console,
            f = e.jQuery,
            l = function() {},
            c = Object.prototype.toString,
            h = "object" == typeof HTMLElement ? function(e) {
                return e instanceof HTMLElement
            } : function(e) {
                return e && "object" == typeof e && 1 === e.nodeType && "string" == typeof e.nodeName
            },
            p = Array.prototype.indexOf ? function(e, t) {
                return e.indexOf(t)
            } : function(e, t) {
                for (var n = 0, r = e.length; r > n; n++)
                    if (e[n] === t) return n;
                return -1
            };
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], o) : e.Outlayer = o(e.eventie, e.docReady, e.EventEmitter, e.getSize, e.matchesSelector, e.Outlayer.Item)
    }(window),
    function(e) {
        function t(e, t) {
            var r = e.create("masonry");
            return r.prototype._resetLayout = function() {
                this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
                var e = this.cols;
                for (this.colYs = []; e--;) this.colYs.push(0);
                this.maxY = 0
            }, r.prototype.measureColumns = function() {
                if (this.getContainerWidth(), !this.columnWidth) {
                    var e = this.items[0],
                        n = e && e.element;
                    this.columnWidth = n && t(n).outerWidth || this.containerWidth
                }
                this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1)
            }, r.prototype.getContainerWidth = function() {
                var e = this.options.isFitWidth ? this.element.parentNode : this.element,
                    n = t(e);
                this.containerWidth = n && n.innerWidth
            }, r.prototype._getItemLayoutPosition = function(e) {
                e.getSize();
                var t = e.size.outerWidth % this.columnWidth,
                    r = t && 1 > t ? "round" : "ceil",
                    i = Math[r](e.size.outerWidth / this.columnWidth);
                i = Math.min(i, this.cols);
                for (var s = this._getColGroup(i), o = Math.min.apply(Math, s), u = n(s, o), a = {
                        x: this.columnWidth * u,
                        y: o
                    }, f = o + e.size.outerHeight, l = this.cols + 1 - s.length, h = 0; l > h; h++) this.colYs[u + h] = f;
                return a
            }, r.prototype._getColGroup = function(e) {
                if (2 > e) return this.colYs;
                for (var t = [], n = this.cols + 1 - e, r = 0; n > r; r++) {
                    var i = this.colYs.slice(r, r + e);
                    t[r] = Math.max.apply(Math, i)
                }
                return t
            }, r.prototype._manageStamp = function(e) {
                var n = t(e),
                    r = this._getElementOffset(e),
                    i = this.options.isOriginLeft ? r.left : r.right,
                    s = i + n.outerWidth,
                    o = Math.floor(i / this.columnWidth);
                o = Math.max(0, o);
                var u = Math.floor(s / this.columnWidth);
                u -= s % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);
                for (var a = (this.options.isOriginTop ? r.top : r.bottom) + n.outerHeight, f = o; u >= f; f++) this.colYs[f] = Math.max(a, this.colYs[f])
            }, r.prototype._getContainerSize = function() {
                this.maxY = Math.max.apply(Math, this.colYs);
                var e = {
                    height: this.maxY
                };
                return this.options.isFitWidth && (e.width = this._getContainerFitWidth()), e
            }, r.prototype._getContainerFitWidth = function() {
                for (var e = 0, t = this.cols; --t && 0 === this.colYs[t];) e++;
                return (this.cols - e) * this.columnWidth - this.gutter
            }, r.prototype.needsResizeLayout = function() {
                var e = this.containerWidth;
                return this.getContainerWidth(), e !== this.containerWidth
            }, r
        }
        var n = Array.prototype.indexOf ? function(e, t) {
            return e.indexOf(t)
        } : function(e, t) {
            for (var n = 0, r = e.length; r > n; n++) {
                var i = e[n];
                if (i === t) return n
            }
            return -1
        };
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], t) : e.Masonry = t(e.Outlayer, e.getSize)
    }(window);
window.Modernizr = function(e, t, n) {
        function r(e) {
            g.cssText = e
        }

        function i(e, t) {
            return r(E.join(e + ";") + (t || ""))
        }

        function s(e, t) {
            return typeof e === t
        }

        function o(e, t) {
            return !!~("" + e).indexOf(t)
        }

        function u(e, t) {
            for (var r in e) {
                var i = e[r];
                if (!o(i, "-") && g[i] !== n) return t == "pfx" ? i : !0
            }
            return !1
        }

        function a(e, t, r) {
            for (var i in e) {
                var o = t[e[i]];
                if (o !== n) return r === !1 ? e[i] : s(o, "function") ? o.bind(r || t) : o
            }
            return !1
        }

        function f(e, t, n) {
            var r = e.charAt(0).toUpperCase() + e.slice(1),
                i = (e + " " + x.join(r + " ") + r).split(" ");
            return s(t, "string") || s(t, "undefined") ? u(i, t) : (i = (e + " " + T.join(r + " ") + r).split(" "), a(i, t, n))
        }

        function l() {
            h.input = function(n) {
                for (var r = 0, i = n.length; r < i; r++) L[n[r]] = n[r] in y;
                return L.list && (L.list = !!t.createElement("datalist") && !!e.HTMLDataListElement), L
            }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), h.inputtypes = function(e) {
                for (var r = 0, i, s, o, u = e.length; r < u; r++) y.setAttribute("type", s = e[r]), i = y.type !== "text", i && (y.value = b, y.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(s) && y.style.WebkitAppearance !== n ? (d.appendChild(y), o = t.defaultView, i = o.getComputedStyle && o.getComputedStyle(y, null).WebkitAppearance !== "textfield" && y.offsetHeight !== 0, d.removeChild(y)) : /^(search|tel)$/.test(s) || (/^(url|email)$/.test(s) ? i = y.checkValidity && y.checkValidity() === !1 : i = y.value != b)), k[e[r]] = !!i;
                return k
            }("search tel url email datetime date month week time datetime-local number range color".split(" "))
        }
        var c = "2.6.2",
            h = {},
            p = !0,
            d = t.documentElement,
            v = "modernizr",
            m = t.createElement(v),
            g = m.style,
            y = t.createElement("input"),
            b = ":)",
            w = {}.toString,
            E = " -webkit- -moz- -o- -ms- ".split(" "),
            S = "Webkit Moz O ms",
            x = S.split(" "),
            T = S.toLowerCase().split(" "),
            N = {
                svg: "http://www.w3.org/2000/svg"
            },
            C = {},
            k = {},
            L = {},
            A = [],
            O = A.slice,
            M, _ = function(e, n, r, i) {
                var s, o, u, a, f = t.createElement("div"),
                    l = t.body,
                    c = l || t.createElement("body");
                if (parseInt(r, 10))
                    while (r--) u = t.createElement("div"), u.id = i ? i[r] : v + (r + 1), f.appendChild(u);
                return s = ["&#173;", '<style id="s', v, '">', e, "</style>"].join(""), f.id = v, (l ? f : c).innerHTML += s, c.appendChild(f), l || (c.style.background = "", c.style.overflow = "hidden", a = d.style.overflow, d.style.overflow = "hidden", d.appendChild(c)), o = n(f, e), l ? f.parentNode.removeChild(f) : (c.parentNode.removeChild(c), d.style.overflow = a), !!o
            },
            D = function(t) {
                var n = e.matchMedia || e.msMatchMedia;
                if (n) return n(t).matches;
                var r;
                return _("@media " + t + " { #" + v + " { position: absolute; } }", function(t) {
                    r = (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle)["position"] == "absolute"
                }), r
            },
            P = function() {
                function e(e, i) {
                    i = i || t.createElement(r[e] || "div"), e = "on" + e;
                    var o = e in i;
                    return o || (i.setAttribute || (i = t.createElement("div")), i.setAttribute && i.removeAttribute && (i.setAttribute(e, ""), o = s(i[e], "function"), s(i[e], "undefined") || (i[e] = n), i.removeAttribute(e))), i = null, o
                }
                var r = {
                    select: "input",
                    change: "input",
                    submit: "form",
                    reset: "form",
                    error: "img",
                    load: "img",
                    abort: "img"
                };
                return e
            }(),
            H = {}.hasOwnProperty,
            B;
        !s(H, "undefined") && !s(H.call, "undefined") ? B = function(e, t) {
            return H.call(e, t)
        } : B = function(e, t) {
            return t in e && s(e.constructor.prototype[t], "undefined")
        }, Function.prototype.bind || (Function.prototype.bind = function(e) {
            var t = this;
            if (typeof t != "function") throw new TypeError;
            var n = O.call(arguments, 1),
                r = function() {
                    if (this instanceof r) {
                        var i = function() {};
                        i.prototype = t.prototype;
                        var s = new i,
                            o = t.apply(s, n.concat(O.call(arguments)));
                        return Object(o) === o ? o : s
                    }
                    return t.apply(e, n.concat(O.call(arguments)))
                };
            return r
        }), C.flexbox = function() {
            return f("flexWrap")
        }, C.canvas = function() {
            var e = t.createElement("canvas");
            return !!e.getContext && !!e.getContext("2d")
        }, C.canvastext = function() {
            return !!h.canvas && !!s(t.createElement("canvas").getContext("2d").fillText, "function")
        }, C.webgl = function() {
            return !!e.WebGLRenderingContext
        }, C.touch = function() {
            var n;
            return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : _(["@media (", E.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
                n = e.offsetTop === 9
            }), n
        }, C.geolocation = function() {
            return "geolocation" in navigator
        }, C.postmessage = function() {
            return !!e.postMessage
        }, C.websqldatabase = function() {
            return !!e.openDatabase
        }, C.indexedDB = function() {
            return !!f("indexedDB", e)
        }, C.hashchange = function() {
            return P("hashchange", e) && (t.documentMode === n || t.documentMode > 7)
        }, C.history = function() {
            return !!e.history && !!history.pushState
        }, C.draganddrop = function() {
            var e = t.createElement("div");
            return "draggable" in e || "ondragstart" in e && "ondrop" in e
        }, C.websockets = function() {
            return "WebSocket" in e || "MozWebSocket" in e
        }, C.rgba = function() {
            return r("background-color:rgba(150,255,150,.5)"), o(g.backgroundColor, "rgba")
        }, C.hsla = function() {
            return r("background-color:hsla(120,40%,100%,.5)"), o(g.backgroundColor, "rgba") || o(g.backgroundColor, "hsla")
        }, C.multiplebgs = function() {
            return r("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(g.background)
        }, C.backgroundsize = function() {
            return f("backgroundSize")
        }, C.borderimage = function() {
            return f("borderImage")
        }, C.borderradius = function() {
            return f("borderRadius")
        }, C.boxshadow = function() {
            return f("boxShadow")
        }, C.textshadow = function() {
            return t.createElement("div").style.textShadow === ""
        }, C.opacity = function() {
            return i("opacity:.55"), /^0.55$/.test(g.opacity)
        }, C.cssanimations = function() {
            return f("animationName")
        }, C.csscolumns = function() {
            return f("columnCount")
        }, C.cssgradients = function() {
            var e = "background-image:",
                t = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                n = "linear-gradient(left top,#9f9, white);";
            return r((e + "-webkit- ".split(" ").join(t + e) + E.join(n + e)).slice(0, -e.length)), o(g.backgroundImage, "gradient")
        }, C.cssreflections = function() {
            return f("boxReflect")
        }, C.csstransforms = function() {
            return !!f("transform")
        }, C.csstransforms3d = function() {
            var e = !!f("perspective");
            return e && "webkitPerspective" in d.style && _("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t, n) {
                e = t.offsetLeft === 9 && t.offsetHeight === 3
            }), e
        }, C.csstransitions = function() {
            return f("transition")
        }, C.fontface = function() {
            var e;
            return _('@font-face {font-family:"font";src:url("https://")}', function(n, r) {
                var i = t.getElementById("smodernizr"),
                    s = i.sheet || i.styleSheet,
                    o = s ? s.cssRules && s.cssRules[0] ? s.cssRules[0].cssText : s.cssText || "" : "";
                e = /src/i.test(o) && o.indexOf(r.split(" ")[0]) === 0
            }), e
        }, C.generatedcontent = function() {
            var e;
            return _(["#", v, "{font:0/0 a}#", v, ':after{content:"', b, '";visibility:hidden;font:3px/1 a}'].join(""), function(t) {
                e = t.offsetHeight >= 3
            }), e
        }, C.video = function() {
            var e = t.createElement("video"),
                n = !1;
            try {
                if (n = !!e.canPlayType) n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
            } catch (r) {}
            return n
        }, C.audio = function() {
            var e = t.createElement("audio"),
                n = !1;
            try {
                if (n = !!e.canPlayType) n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, "")
            } catch (r) {}
            return n
        }, C.localstorage = function() {
            try {
                return localStorage.setItem(v, v), localStorage.removeItem(v), !0
            } catch (e) {
                return !1
            }
        }, C.sessionstorage = function() {
            try {
                return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0
            } catch (e) {
                return !1
            }
        }, C.webworkers = function() {
            return !!e.Worker
        }, C.applicationcache = function() {
            return !!e.applicationCache
        }, C.svg = function() {
            return !!t.createElementNS && !!t.createElementNS(N.svg, "svg").createSVGRect
        }, C.inlinesvg = function() {
            var e = t.createElement("div");
            return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == N.svg
        }, C.smil = function() {
            return !!t.createElementNS && /SVGAnimate/.test(w.call(t.createElementNS(N.svg, "animate")))
        }, C.svgclippaths = function() {
            return !!t.createElementNS && /SVGClipPath/.test(w.call(t.createElementNS(N.svg, "clipPath")))
        };
        for (var j in C) B(C, j) && (M = j.toLowerCase(), h[M] = C[j](), A.push((h[M] ? "" : "no-") + M));
        return h.input || l(), h.addTest = function(e, t) {
                if (typeof e == "object")
                    for (var r in e) B(e, r) && h.addTest(r, e[r]);
                else {
                    e = e.toLowerCase();
                    if (h[e] !== n) return h;
                    t = typeof t == "function" ? t() : t, typeof p != "undefined" && p && (d.className += " " + (t ? "" : "no-") + e), h[e] = t
                }
                return h
            }, r(""), m = y = null,
            function(e, t) {
                function n(e, t) {
                    var n = e.createElement("p"),
                        r = e.getElementsByTagName("head")[0] || e.documentElement;
                    return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
                }

                function r() {
                    var e = g.elements;
                    return typeof e == "string" ? e.split(" ") : e
                }

                function i(e) {
                    var t = v[e[p]];
                    return t || (t = {}, d++, e[p] = d, v[d] = t), t
                }

                function s(e, n, r) {
                    n || (n = t);
                    if (m) return n.createElement(e);
                    r || (r = i(n));
                    var s;
                    return r.cache[e] ? s = r.cache[e].cloneNode() : c.test(e) ? s = (r.cache[e] = r.createElem(e)).cloneNode() : s = r.createElem(e), s.canHaveChildren && !l.test(e) ? r.frag.appendChild(s) : s
                }

                function o(e, n) {
                    e || (e = t);
                    if (m) return e.createDocumentFragment();
                    n = n || i(e);
                    var s = n.frag.cloneNode(),
                        o = 0,
                        u = r(),
                        a = u.length;
                    for (; o < a; o++) s.createElement(u[o]);
                    return s
                }

                function u(e, t) {
                    t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                        return g.shivMethods ? s(n, e, t) : t.createElem(n)
                    }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/\w+/g, function(e) {
                        return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                    }) + ");return n}")(g, t.frag)
                }

                function a(e) {
                    e || (e = t);
                    var r = i(e);
                    return g.shivCSS && !h && !r.hasCSS && (r.hasCSS = !!n(e, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), m || u(e, r), e
                }
                var f = e.html5 || {},
                    l = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    c = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    h, p = "_html5shiv",
                    d = 0,
                    v = {},
                    m;
                (function() {
                    try {
                        var e = t.createElement("a");
                        e.innerHTML = "<xyz></xyz>", h = "hidden" in e, m = e.childNodes.length == 1 || function() {
                            t.createElement("a");
                            var e = t.createDocumentFragment();
                            return typeof e.cloneNode == "undefined" || typeof e.createDocumentFragment == "undefined" || typeof e.createElement == "undefined"
                        }()
                    } catch (n) {
                        h = !0, m = !0
                    }
                })();
                var g = {
                    elements: f.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                    shivCSS: f.shivCSS !== !1,
                    supportsUnknownElements: m,
                    shivMethods: f.shivMethods !== !1,
                    type: "default",
                    shivDocument: a,
                    createElement: s,
                    createDocumentFragment: o
                };
                e.html5 = g, a(t)
            }(this, t), h._version = c, h._prefixes = E, h._domPrefixes = T, h._cssomPrefixes = x, h.mq = D, h.hasEvent = P, h.testProp = function(e) {
                return u([e])
            }, h.testAllProps = f, h.testStyles = _, h.prefixed = function(e, t, n) {
                return t ? f(e, t, n) : f(e, "pfx")
            }, d.className = d.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (p ? " js " + A.join(" ") : ""), h
    }(this, this.document),
    function(e, t, n) {
        function r(e) {
            return "[object Function]" == d.call(e)
        }

        function i(e) {
            return "string" == typeof e
        }

        function s() {}

        function o(e) {
            return !e || "loaded" == e || "complete" == e || "uninitialized" == e
        }

        function u() {
            var e = v.shift();
            m = 1, e ? e.t ? h(function() {
                ("c" == e.t ? k.injectCss : k.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
            }, 0) : (e(), u()) : m = 0
        }

        function a(e, n, r, i, s, a, f) {
            function l(t) {
                if (!d && o(c.readyState) && (w.r = d = 1, !m && u(), c.onload = c.onreadystatechange = null, t)) {
                    "img" != e && h(function() {
                        b.removeChild(c)
                    }, 50);
                    for (var r in T[n]) T[n].hasOwnProperty(r) && T[n][r].onload()
                }
            }
            var f = f || k.errorTimeout,
                c = t.createElement(e),
                d = 0,
                g = 0,
                w = {
                    t: r,
                    s: n,
                    e: s,
                    a: a,
                    x: f
                };
            1 === T[n] && (g = 1, T[n] = []), "object" == e ? c.data = n : (c.src = n, c.type = e), c.width = c.height = "0", c.onerror = c.onload = c.onreadystatechange = function() {
                l.call(this, g)
            }, v.splice(i, 0, w), "img" != e && (g || 2 === T[n] ? (b.insertBefore(c, y ? null : p), h(l, f)) : T[n].push(c))
        }

        function f(e, t, n, r, s) {
            return m = 0, t = t || "j", i(e) ? a("c" == t ? E : w, e, t, this.i++, n, r, s) : (v.splice(this.i++, 0, e), 1 == v.length && u()), this
        }

        function l() {
            var e = k;
            return e.loader = {
                load: f,
                i: 0
            }, e
        }
        var c = t.documentElement,
            h = e.setTimeout,
            p = t.getElementsByTagName("script")[0],
            d = {}.toString,
            v = [],
            m = 0,
            g = "MozAppearance" in c.style,
            y = g && !!t.createRange().compareNode,
            b = y ? c : p.parentNode,
            c = e.opera && "[object Opera]" == d.call(e.opera),
            c = !!t.attachEvent && !c,
            w = g ? "object" : c ? "script" : "img",
            E = c ? "script" : w,
            S = Array.isArray || function(e) {
                return "[object Array]" == d.call(e)
            },
            x = [],
            T = {},
            N = {
                timeout: function(e, t) {
                    return t.length && (e.timeout = t[0]), e
                }
            },
            C, k;
        k = function(e) {
            function t(e) {
                var e = e.split("!"),
                    t = x.length,
                    n = e.pop(),
                    r = e.length,
                    n = {
                        url: n,
                        origUrl: n,
                        prefixes: e
                    },
                    i, s, o;
                for (s = 0; s < r; s++) o = e[s].split("="), (i = N[o.shift()]) && (n = i(n, o));
                for (s = 0; s < t; s++) n = x[s](n);
                return n
            }

            function o(e, i, s, o, u) {
                var a = t(e),
                    f = a.autoCallback;
                a.url.split(".").pop().split("?").shift(), a.bypass || (i && (i = r(i) ? i : i[e] || i[o] || i[e.split("/").pop().split("?")[0]]), a.instead ? a.instead(e, i, s, o, u) : (T[a.url] ? a.noexec = !0 : T[a.url] = 1, s.load(a.url, a.forceCSS || !a.forceJS && "css" == a.url.split(".").pop().split("?").shift() ? "c" : n, a.noexec, a.attrs, a.timeout), (r(i) || r(f)) && s.load(function() {
                    l(), i && i(a.origUrl, u, o), f && f(a.origUrl, u, o), T[a.url] = 2
                })))
            }

            function u(e, t) {
                function n(e, n) {
                    if (e) {
                        if (i(e)) n || (f = function() {
                            var e = [].slice.call(arguments);
                            l.apply(this, e), c()
                        }), o(e, f, t, 0, u);
                        else if (Object(e) === e)
                            for (p in h = function() {
                                    var t = 0,
                                        n;
                                    for (n in e) e.hasOwnProperty(n) && t++;
                                    return t
                                }(), e) e.hasOwnProperty(p) && (!n && !--h && (r(f) ? f = function() {
                                var e = [].slice.call(arguments);
                                l.apply(this, e), c()
                            } : f[p] = function(e) {
                                return function() {
                                    var t = [].slice.call(arguments);
                                    e && e.apply(this, t), c()
                                }
                            }(l[p])), o(e[p], f, t, p, u))
                    } else !n && c()
                }
                var u = !!e.test,
                    a = e.load || e.both,
                    f = e.callback || s,
                    l = f,
                    c = e.complete || s,
                    h, p;
                n(u ? e.yep : e.nope, !!a), a && n(a)
            }
            var a, f, c = this.yepnope.loader;
            if (i(e)) o(e, 0, c, 0);
            else if (S(e))
                for (a = 0; a < e.length; a++) f = e[a], i(f) ? o(f, 0, c, 0) : S(f) ? k(f) : Object(f) === f && u(f, c);
            else Object(e) === e && u(e, c)
        }, k.addPrefix = function(e, t) {
            N[e] = t
        }, k.addFilter = function(e) {
            x.push(e)
        }, k.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", C = function() {
            t.removeEventListener("DOMContentLoaded", C, 0), t.readyState = "complete"
        }, 0)), e.yepnope = l(), e.yepnope.executeStack = u, e.yepnope.injectJs = function(e, n, r, i, a, f) {
            var l = t.createElement("script"),
                c, d, i = i || k.errorTimeout;
            l.src = e;
            for (d in r) l.setAttribute(d, r[d]);
            n = f ? u : n || s, l.onreadystatechange = l.onload = function() {
                !c && o(l.readyState) && (c = 1, n(), l.onload = l.onreadystatechange = null)
            }, h(function() {
                c || (c = 1, n(1))
            }, i), a ? l.onload() : p.parentNode.insertBefore(l, p)
        }, e.yepnope.injectCss = function(e, n, r, i, o, a) {
            var i = t.createElement("link"),
                f, n = a ? u : n || s;
            i.href = e, i.rel = "stylesheet", i.type = "text/css";
            for (f in r) i.setAttribute(f, r[f]);
            o || (p.parentNode.insertBefore(i, p), h(n, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    };

/* START OWL */

"function"!=typeof Object.create&&(Object.create=function(t){function e(){}return e.prototype=t,new e}),function(t,e,o){var i={init:function(e,o){var i=this;i.$elem=t(o),i.options=t.extend({},t.fn.owlCarousel.options,i.$elem.data(),e),i.userOptions=e,i.loadContent()},loadContent:function(){function e(t){var e,o="";if("function"==typeof i.options.jsonSuccess)i.options.jsonSuccess.apply(this,[t]);else{for(e in t.owl)t.owl.hasOwnProperty(e)&&(o+=t.owl[e].item);i.$elem.html(o)}i.logIn()}var o,i=this;"function"==typeof i.options.beforeInit&&i.options.beforeInit.apply(this,[i.$elem]),"string"==typeof i.options.jsonPath?(o=i.options.jsonPath,t.getJSON(o,e)):i.logIn()},logIn:function(){var t=this;t.$elem.data({"owl-originalStyles":t.$elem.attr("style"),"owl-originalClasses":t.$elem.attr("class")}),t.$elem.css({opacity:0}),t.orignalItems=t.options.items,t.checkBrowser(),t.wrapperWidth=0,t.checkVisible=null,t.setVars()},setVars:function(){var t=this;return 0===t.$elem.children().length?!1:(t.baseClass(),t.eventTypes(),t.$userItems=t.$elem.children(),t.itemsAmount=t.$userItems.length,t.wrapItems(),t.$owlItems=t.$elem.find(".owl-item"),t.$owlWrapper=t.$elem.find(".owl-wrapper"),t.playDirection="next",t.prevItem=0,t.prevArr=[0],t.currentItem=0,t.customEvents(),void t.onStartup())},onStartup:function(){var t=this;t.updateItems(),t.calculateAll(),t.buildControls(),t.updateControls(),t.response(),t.moveEvents(),t.stopOnHover(),t.owlStatus(),t.options.transitionStyle!==!1&&t.transitionTypes(t.options.transitionStyle),t.options.autoPlay===!0&&(t.options.autoPlay=5e3),t.play(),t.$elem.find(".owl-wrapper").css("display","block"),t.$elem.is(":visible")?t.$elem.css("opacity",1):t.watchVisibility(),t.onstartup=!1,t.eachMoveUpdate(),"function"==typeof t.options.afterInit&&t.options.afterInit.apply(this,[t.$elem])},eachMoveUpdate:function(){var t=this;t.options.lazyLoad===!0&&t.lazyLoad(),t.options.autoHeight===!0&&t.autoHeight(),t.onVisibleItems(),"function"==typeof t.options.afterAction&&t.options.afterAction.apply(this,[t.$elem])},updateVars:function(){var t=this;"function"==typeof t.options.beforeUpdate&&t.options.beforeUpdate.apply(this,[t.$elem]),t.watchVisibility(),t.updateItems(),t.calculateAll(),t.updatePosition(),t.updateControls(),t.eachMoveUpdate(),"function"==typeof t.options.afterUpdate&&t.options.afterUpdate.apply(this,[t.$elem])},reload:function(){var t=this;e.setTimeout(function(){t.updateVars()},0)},watchVisibility:function(){var t=this;return t.$elem.is(":visible")!==!1?!1:(t.$elem.css({opacity:0}),e.clearInterval(t.autoPlayInterval),e.clearInterval(t.checkVisible),void(t.checkVisible=e.setInterval(function(){t.$elem.is(":visible")&&(t.reload(),t.$elem.animate({opacity:1},200),e.clearInterval(t.checkVisible))},500)))},wrapItems:function(){var t=this;t.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'),t.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'),t.wrapperOuter=t.$elem.find(".owl-wrapper-outer"),t.$elem.css("display","block")},baseClass:function(){var t=this,e=t.$elem.hasClass(t.options.baseClass),o=t.$elem.hasClass(t.options.theme);e||t.$elem.addClass(t.options.baseClass),o||t.$elem.addClass(t.options.theme)},updateItems:function(){var e,o,i=this;if(i.options.responsive===!1)return!1;if(i.options.singleItem===!0)return i.options.items=i.orignalItems=1,i.options.itemsCustom=!1,i.options.itemsDesktop=!1,i.options.itemsDesktopSmall=!1,i.options.itemsTablet=!1,i.options.itemsTabletSmall=!1,i.options.itemsMobile=!1,!1;if(e=t(i.options.responsiveBaseWidth).width(),e>(i.options.itemsDesktop[0]||i.orignalItems)&&(i.options.items=i.orignalItems),i.options.itemsCustom!==!1)for(i.options.itemsCustom.sort(function(t,e){return t[0]-e[0]}),o=0;o<i.options.itemsCustom.length;o+=1)i.options.itemsCustom[o][0]<=e&&(i.options.items=i.options.itemsCustom[o][1]);else e<=i.options.itemsDesktop[0]&&i.options.itemsDesktop!==!1&&(i.options.items=i.options.itemsDesktop[1]),e<=i.options.itemsDesktopSmall[0]&&i.options.itemsDesktopSmall!==!1&&(i.options.items=i.options.itemsDesktopSmall[1]),e<=i.options.itemsTablet[0]&&i.options.itemsTablet!==!1&&(i.options.items=i.options.itemsTablet[1]),e<=i.options.itemsTabletSmall[0]&&i.options.itemsTabletSmall!==!1&&(i.options.items=i.options.itemsTabletSmall[1]),e<=i.options.itemsMobile[0]&&i.options.itemsMobile!==!1&&(i.options.items=i.options.itemsMobile[1]);i.options.items>i.itemsAmount&&i.options.itemsScaleUp===!0&&(i.options.items=i.itemsAmount)},response:function(){var o,i,n=this;return n.options.responsive!==!0?!1:(i=t(e).width(),n.resizer=function(){t(e).width()!==i&&(n.options.autoPlay!==!1&&e.clearInterval(n.autoPlayInterval),e.clearTimeout(o),o=e.setTimeout(function(){i=t(e).width(),n.updateVars()},n.options.responsiveRefreshRate))},void t(e).resize(n.resizer))},updatePosition:function(){var t=this;t.jumpTo(t.currentItem),t.options.autoPlay!==!1&&t.checkAp()},appendItemsSizes:function(){var e=this,o=0,i=e.itemsAmount-e.options.items;e.$owlItems.each(function(n){var s=t(this);s.css({width:e.itemWidth}).data("owl-item",Number(n)),(n%e.options.items===0||n===i)&&(n>i||(o+=1)),s.data("owl-roundPages",o)})},appendWrapperSizes:function(){var t=this,e=t.$owlItems.length*t.itemWidth;t.$owlWrapper.css({width:2*e,left:0}),t.appendItemsSizes()},calculateAll:function(){var t=this;t.calculateWidth(),t.appendWrapperSizes(),t.loops(),t.max()},calculateWidth:function(){var t=this;t.itemWidth=Math.round(t.$elem.width()/t.options.items)},max:function(){var t=this,e=-1*(t.itemsAmount*t.itemWidth-t.options.items*t.itemWidth);return t.options.items>t.itemsAmount?(t.maximumItem=0,e=0,t.maximumPixels=0):(t.maximumItem=t.itemsAmount-t.options.items,t.maximumPixels=e),e},min:function(){return 0},loops:function(){var e,o,i,n=this,s=0,a=0;for(n.positionsInArray=[0],n.pagesInArray=[],e=0;e<n.itemsAmount;e+=1)a+=n.itemWidth,n.positionsInArray.push(-a),n.options.scrollPerPage===!0&&(o=t(n.$owlItems[e]),i=o.data("owl-roundPages"),i!==s&&(n.pagesInArray[s]=n.positionsInArray[e],s=i))},buildControls:function(){var e=this;(e.options.navigation===!0||e.options.pagination===!0)&&(e.owlControls=t('<div class="owl-controls"/>').toggleClass("clickable",!e.browser.isTouch).appendTo(e.$elem)),e.options.pagination===!0&&e.buildPagination(),e.options.navigation===!0&&e.buildButtons()},buildButtons:function(){var e=this,o=t('<div class="owl-buttons"/>');e.owlControls.append(o),e.buttonPrev=t("<div/>",{"class":"owl-prev",html:e.options.navigationText[0]||""}),e.buttonNext=t("<div/>",{"class":"owl-next",html:e.options.navigationText[1]||""}),o.append(e.buttonPrev).append(e.buttonNext),o.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(t){t.preventDefault()}),o.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',function(o){o.preventDefault(),t(this).hasClass("owl-next")?e.next():e.prev()})},buildPagination:function(){var e=this;e.paginationWrapper=t('<div class="owl-pagination"/>'),e.owlControls.append(e.paginationWrapper),e.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(o){o.preventDefault(),Number(t(this).data("owl-page"))!==e.currentItem&&e.goTo(Number(t(this).data("owl-page")),!0)})},updatePagination:function(){var e,o,i,n,s,a,r=this;if(r.options.pagination===!1)return!1;for(r.paginationWrapper.html(""),e=0,o=r.itemsAmount-r.itemsAmount%r.options.items,n=0;n<r.itemsAmount;n+=1)n%r.options.items===0&&(e+=1,o===n&&(i=r.itemsAmount-r.options.items),s=t("<div/>",{"class":"owl-page"}),a=t("<span></span>",{text:r.options.paginationNumbers===!0?e:"","class":r.options.paginationNumbers===!0?"owl-numbers":""}),s.append(a),s.data("owl-page",o===n?i:n),s.data("owl-roundPages",e),r.paginationWrapper.append(s));r.checkPagination()},checkPagination:function(){var e=this;return e.options.pagination===!1?!1:void e.paginationWrapper.find(".owl-page").each(function(){t(this).data("owl-roundPages")===t(e.$owlItems[e.currentItem]).data("owl-roundPages")&&(e.paginationWrapper.find(".owl-page").removeClass("active"),t(this).addClass("active"))})},checkNavigation:function(){var t=this;return t.options.navigation===!1?!1:void(t.options.rewindNav===!1&&(0===t.currentItem&&0===t.maximumItem?(t.buttonPrev.addClass("disabled"),t.buttonNext.addClass("disabled")):0===t.currentItem&&0!==t.maximumItem?(t.buttonPrev.addClass("disabled"),t.buttonNext.removeClass("disabled")):t.currentItem===t.maximumItem?(t.buttonPrev.removeClass("disabled"),t.buttonNext.addClass("disabled")):0!==t.currentItem&&t.currentItem!==t.maximumItem&&(t.buttonPrev.removeClass("disabled"),t.buttonNext.removeClass("disabled"))))},updateControls:function(){var t=this;t.updatePagination(),t.checkNavigation(),t.owlControls&&(t.options.items>=t.itemsAmount?t.owlControls.hide():t.owlControls.show())},destroyControls:function(){var t=this;t.owlControls&&t.owlControls.remove()},next:function(t){var e=this;if(e.isTransition)return!1;if(e.currentItem+=e.options.scrollPerPage===!0?e.options.items:1,e.currentItem>e.maximumItem+(e.options.scrollPerPage===!0?e.options.items-1:0)){if(e.options.rewindNav!==!0)return e.currentItem=e.maximumItem,!1;e.currentItem=0,t="rewind"}e.goTo(e.currentItem,t)},prev:function(t){var e=this;if(e.isTransition)return!1;if(e.options.scrollPerPage===!0&&e.currentItem>0&&e.currentItem<e.options.items?e.currentItem=0:e.currentItem-=e.options.scrollPerPage===!0?e.options.items:1,e.currentItem<0){if(e.options.rewindNav!==!0)return e.currentItem=0,!1;e.currentItem=e.maximumItem,t="rewind"}e.goTo(e.currentItem,t)},goTo:function(t,o,i){var n,s=this;return s.isTransition?!1:("function"==typeof s.options.beforeMove&&s.options.beforeMove.apply(this,[s.$elem]),t>=s.maximumItem?t=s.maximumItem:0>=t&&(t=0),s.currentItem=s.owl.currentItem=t,s.options.transitionStyle!==!1&&"drag"!==i&&1===s.options.items&&s.browser.support3d===!0?(s.swapSpeed(0),s.browser.support3d===!0?s.transition3d(s.positionsInArray[t]):s.css2slide(s.positionsInArray[t],1),s.afterGo(),s.singleItemTransition(),!1):(n=s.positionsInArray[t],s.browser.support3d===!0?(s.isCss3Finish=!1,o===!0?(s.swapSpeed("paginationSpeed"),e.setTimeout(function(){s.isCss3Finish=!0},s.options.paginationSpeed)):"rewind"===o?(s.swapSpeed(s.options.rewindSpeed),e.setTimeout(function(){s.isCss3Finish=!0},s.options.rewindSpeed)):(s.swapSpeed("slideSpeed"),e.setTimeout(function(){s.isCss3Finish=!0},s.options.slideSpeed)),s.transition3d(n)):o===!0?s.css2slide(n,s.options.paginationSpeed):"rewind"===o?s.css2slide(n,s.options.rewindSpeed):s.css2slide(n,s.options.slideSpeed),void s.afterGo()))},jumpTo:function(t){var e=this;"function"==typeof e.options.beforeMove&&e.options.beforeMove.apply(this,[e.$elem]),t>=e.maximumItem||-1===t?t=e.maximumItem:0>=t&&(t=0),e.swapSpeed(0),e.browser.support3d===!0?e.transition3d(e.positionsInArray[t]):e.css2slide(e.positionsInArray[t],1),e.currentItem=e.owl.currentItem=t,e.afterGo()},afterGo:function(){var t=this;t.prevArr.push(t.currentItem),t.prevItem=t.owl.prevItem=t.prevArr[t.prevArr.length-2],t.prevArr.shift(0),t.prevItem!==t.currentItem&&(t.checkPagination(),t.checkNavigation(),t.eachMoveUpdate(),t.options.autoPlay!==!1&&t.checkAp()),"function"==typeof t.options.afterMove&&t.prevItem!==t.currentItem&&t.options.afterMove.apply(this,[t.$elem])},stop:function(){var t=this;t.apStatus="stop",e.clearInterval(t.autoPlayInterval)},checkAp:function(){var t=this;"stop"!==t.apStatus&&t.play()},play:function(){var t=this;return t.apStatus="play",t.options.autoPlay===!1?!1:(e.clearInterval(t.autoPlayInterval),void(t.autoPlayInterval=e.setInterval(function(){t.next(!0)},t.options.autoPlay)))},swapSpeed:function(t){var e=this;"slideSpeed"===t?e.$owlWrapper.css(e.addCssSpeed(e.options.slideSpeed)):"paginationSpeed"===t?e.$owlWrapper.css(e.addCssSpeed(e.options.paginationSpeed)):"string"!=typeof t&&e.$owlWrapper.css(e.addCssSpeed(t))},addCssSpeed:function(t){return{"-webkit-transition":"all "+t+"ms ease","-moz-transition":"all "+t+"ms ease","-o-transition":"all "+t+"ms ease",transition:"all "+t+"ms ease"}},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}},doTranslate:function(t){return{"-webkit-transform":"translate3d("+t+"px, 0px, 0px)","-moz-transform":"translate3d("+t+"px, 0px, 0px)","-o-transform":"translate3d("+t+"px, 0px, 0px)","-ms-transform":"translate3d("+t+"px, 0px, 0px)",transform:"translate3d("+t+"px, 0px,0px)"}},transition3d:function(t){var e=this;e.$owlWrapper.css(e.doTranslate(t))},css2move:function(t){var e=this;e.$owlWrapper.css({left:t})},css2slide:function(t,e){var o=this;o.isCssFinish=!1,o.$owlWrapper.stop(!0,!0).animate({left:t},{duration:e||o.options.slideSpeed,complete:function(){o.isCssFinish=!0}})},checkBrowser:function(){var t,i,n,s,a=this,r="translate3d(0px, 0px, 0px)",l=o.createElement("div");l.style.cssText="  -moz-transform:"+r+"; -ms-transform:"+r+"; -o-transform:"+r+"; -webkit-transform:"+r+"; transform:"+r,t=/translate3d\(0px, 0px, 0px\)/g,i=l.style.cssText.match(t),n=null!==i&&i.length>=1,s="ontouchstart"in e||e.navigator.msMaxTouchPoints,a.browser={support3d:n,isTouch:s}},moveEvents:function(){var t=this;(t.options.mouseDrag!==!1||t.options.touchDrag!==!1)&&(t.gestures(),t.disabledEvents())},eventTypes:function(){var t=this,e=["s","e","x"];t.ev_types={},t.options.mouseDrag===!0&&t.options.touchDrag===!0?e=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]:t.options.mouseDrag===!1&&t.options.touchDrag===!0?e=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]:t.options.mouseDrag===!0&&t.options.touchDrag===!1&&(e=["mousedown.owl","mousemove.owl","mouseup.owl"]),t.ev_types.start=e[0],t.ev_types.move=e[1],t.ev_types.end=e[2]},disabledEvents:function(){var e=this;e.$elem.on("dragstart.owl",function(t){t.preventDefault()}),e.$elem.on("mousedown.disableTextSelect",function(e){return t(e.target).is("input, textarea, select, option")})},gestures:function(){function i(t){if(void 0!==t.touches)return{x:t.touches[0].pageX,y:t.touches[0].pageY};if(void 0===t.touches){if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY};if(void 0===t.pageX)return{x:t.clientX,y:t.clientY}}}function n(e){"on"===e?(t(o).on(l.ev_types.move,a),t(o).on(l.ev_types.end,r)):"off"===e&&(t(o).off(l.ev_types.move),t(o).off(l.ev_types.end))}function s(o){var s,a=o.originalEvent||o||e.event;if(3===a.which)return!1;if(!(l.itemsAmount<=l.options.items)){if(l.isCssFinish===!1&&!l.options.dragBeforeAnimFinish)return!1;if(l.isCss3Finish===!1&&!l.options.dragBeforeAnimFinish)return!1;l.options.autoPlay!==!1&&e.clearInterval(l.autoPlayInterval),l.browser.isTouch===!0||l.$owlWrapper.hasClass("grabbing")||l.$owlWrapper.addClass("grabbing"),l.newPosX=0,l.newRelativeX=0,t(this).css(l.removeTransition()),s=t(this).position(),p.relativePos=s.left,p.offsetX=i(a).x-s.left,p.offsetY=i(a).y-s.top,n("on"),p.sliding=!1,p.targetElement=a.target||a.srcElement}}function a(n){var s,a,r=n.originalEvent||n||e.event;l.newPosX=i(r).x-p.offsetX,l.newPosY=i(r).y-p.offsetY,l.newRelativeX=l.newPosX-p.relativePos,"function"==typeof l.options.startDragging&&p.dragging!==!0&&0!==l.newRelativeX&&(p.dragging=!0,l.options.startDragging.apply(l,[l.$elem])),(l.newRelativeX>8||l.newRelativeX<-8)&&l.browser.isTouch===!0&&(void 0!==r.preventDefault?r.preventDefault():r.returnValue=!1,p.sliding=!0),(l.newPosY>10||l.newPosY<-10)&&p.sliding===!1&&t(o).off("touchmove.owl"),s=function(){return l.newRelativeX/5},a=function(){return l.maximumPixels+l.newRelativeX/5},l.newPosX=Math.max(Math.min(l.newPosX,s()),a()),l.browser.support3d===!0?l.transition3d(l.newPosX):l.css2move(l.newPosX)}function r(o){var i,s,a,r=o.originalEvent||o||e.event;r.target=r.target||r.srcElement,p.dragging=!1,l.browser.isTouch!==!0&&l.$owlWrapper.removeClass("grabbing"),l.dragDirection=l.owl.dragDirection=l.newRelativeX<0?"left":"right",0!==l.newRelativeX&&(i=l.getNewPosition(),l.goTo(i,!1,"drag"),p.targetElement===r.target&&l.browser.isTouch!==!0&&(t(r.target).on("click.disable",function(e){e.stopImmediatePropagation(),e.stopPropagation(),e.preventDefault(),t(e.target).off("click.disable")}),s=t._data(r.target,"events").click,a=s.pop(),s.splice(0,0,a))),n("off")}var l=this,p={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};l.isCssFinish=!0,l.$elem.on(l.ev_types.start,".owl-wrapper",s)},getNewPosition:function(){var t=this,e=t.closestItem();return e>t.maximumItem?(t.currentItem=t.maximumItem,e=t.maximumItem):t.newPosX>=0&&(e=0,t.currentItem=0),e},closestItem:function(){var e=this,o=e.options.scrollPerPage===!0?e.pagesInArray:e.positionsInArray,i=e.newPosX,n=null;return t.each(o,function(s,a){i-e.itemWidth/20>o[s+1]&&i-e.itemWidth/20<a&&"left"===e.moveDirection()?(n=a,e.currentItem=e.options.scrollPerPage===!0?t.inArray(n,e.positionsInArray):s):i+e.itemWidth/20<a&&i+e.itemWidth/20>(o[s+1]||o[s]-e.itemWidth)&&"right"===e.moveDirection()&&(e.options.scrollPerPage===!0?(n=o[s+1]||o[o.length-1],e.currentItem=t.inArray(n,e.positionsInArray)):(n=o[s+1],e.currentItem=s+1))}),e.currentItem},moveDirection:function(){var t,e=this;return e.newRelativeX<0?(t="right",e.playDirection="next"):(t="left",e.playDirection="prev"),t},customEvents:function(){var t=this;t.$elem.on("owl.next",function(){t.next()}),t.$elem.on("owl.prev",function(){t.prev()}),t.$elem.on("owl.play",function(e,o){t.options.autoPlay=o,t.play(),t.hoverStatus="play"}),t.$elem.on("owl.stop",function(){t.stop(),t.hoverStatus="stop"}),t.$elem.on("owl.goTo",function(e,o){t.goTo(o)}),t.$elem.on("owl.jumpTo",function(e,o){t.jumpTo(o)})},stopOnHover:function(){var t=this;t.options.stopOnHover===!0&&t.browser.isTouch!==!0&&t.options.autoPlay!==!1&&(t.$elem.on("mouseover",function(){t.stop()}),t.$elem.on("mouseout",function(){"stop"!==t.hoverStatus&&t.play()}))},lazyLoad:function(){var e,o,i,n,s,a=this;if(a.options.lazyLoad===!1)return!1;for(e=0;e<a.itemsAmount;e+=1)o=t(a.$owlItems[e]),"loaded"!==o.data("owl-loaded")&&(i=o.data("owl-item"),n=o.find(".lazyOwl"),"string"==typeof n.data("src")?(void 0===o.data("owl-loaded")&&(n.hide(),o.addClass("loading").data("owl-loaded","checked")),s=a.options.lazyFollow===!0?i>=a.currentItem:!0,s&&i<a.currentItem+a.options.items&&n.length&&n.each(function(){a.lazyPreload(o,t(this))})):o.data("owl-loaded","loaded"))},lazyPreload:function(t,o){function i(){t.data("owl-loaded","loaded").removeClass("loading"),o.removeAttr("data-src"),"fade"===a.options.lazyEffect?o.fadeIn(400):o.show(),"function"==typeof a.options.afterLazyLoad&&a.options.afterLazyLoad.apply(this,[a.$elem])}function n(){r+=1,a.completeImg(o.get(0))||s===!0?i():100>=r?e.setTimeout(n,100):i()}var s,a=this,r=0;"DIV"===o.prop("tagName")?(o.css("background-image","url("+o.data("src")+")"),s=!0):o[0].src=o.data("src"),n()},autoHeight:function(){function o(){var o=t(s.$owlItems[s.currentItem]).height();s.wrapperOuter.css("height",o+"px"),s.wrapperOuter.hasClass("autoHeight")||e.setTimeout(function(){s.wrapperOuter.addClass("autoHeight")},0)}function i(){n+=1,s.completeImg(a.get(0))?o():100>=n?e.setTimeout(i,100):s.wrapperOuter.css("height","")}var n,s=this,a=t(s.$owlItems[s.currentItem]).find("img");void 0!==a.get(0)?(n=0,i()):o()},completeImg:function(t){var e;return t.complete?(e=typeof t.naturalWidth,"undefined"!==e&&0===t.naturalWidth?!1:!0):!1},onVisibleItems:function(){var e,o=this;for(o.options.addClassActive===!0&&o.$owlItems.removeClass("active"),o.visibleItems=[],e=o.currentItem;e<o.currentItem+o.options.items;e+=1)o.visibleItems.push(e),o.options.addClassActive===!0&&t(o.$owlItems[e]).addClass("active");o.owl.visibleItems=o.visibleItems},transitionTypes:function(t){var e=this;e.outClass="owl-"+t+"-out",e.inClass="owl-"+t+"-in"},singleItemTransition:function(){function t(t){return{position:"relative",left:t+"px"}}var e=this,o=e.outClass,i=e.inClass,n=e.$owlItems.eq(e.currentItem),s=e.$owlItems.eq(e.prevItem),a=Math.abs(e.positionsInArray[e.currentItem])+e.positionsInArray[e.prevItem],r=Math.abs(e.positionsInArray[e.currentItem])+e.itemWidth/2,l="webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";e.isTransition=!0,e.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":r+"px","-moz-perspective-origin":r+"px","perspective-origin":r+"px"}),s.css(t(a,10)).addClass(o).on(l,function(){e.endPrev=!0,s.off(l),e.clearTransStyle(s,o)}),n.addClass(i).on(l,function(){e.endCurrent=!0,n.off(l),e.clearTransStyle(n,i)})},clearTransStyle:function(t,e){var o=this;t.css({position:"",left:""}).removeClass(e),o.endPrev&&o.endCurrent&&(o.$owlWrapper.removeClass("owl-origin"),o.endPrev=!1,o.endCurrent=!1,o.isTransition=!1)},owlStatus:function(){var t=this;t.owl={userOptions:t.userOptions,baseElement:t.$elem,userItems:t.$userItems,owlItems:t.$owlItems,currentItem:t.currentItem,prevItem:t.prevItem,visibleItems:t.visibleItems,isTouch:t.browser.isTouch,browser:t.browser,dragDirection:t.dragDirection}},clearEvents:function(){var i=this;i.$elem.off(".owl owl mousedown.disableTextSelect"),t(o).off(".owl owl"),t(e).off("resize",i.resizer)},unWrap:function(){var t=this;0!==t.$elem.children().length&&(t.$owlWrapper.unwrap(),t.$userItems.unwrap().unwrap(),t.owlControls&&t.owlControls.remove()),t.clearEvents(),t.$elem.attr({style:t.$elem.data("owl-originalStyles")||"","class":t.$elem.data("owl-originalClasses")})},destroy:function(){var t=this;t.stop(),e.clearInterval(t.checkVisible),t.unWrap(),t.$elem.removeData()},reinit:function(e){var o=this,i=t.extend({},o.userOptions,e);o.unWrap(),o.init(i,o.$elem)},addItem:function(t,e){var o,i=this;return t?0===i.$elem.children().length?(i.$elem.append(t),i.setVars(),!1):(i.unWrap(),o=void 0===e||-1===e?-1:e,o>=i.$userItems.length||-1===o?i.$userItems.eq(-1).after(t):i.$userItems.eq(o).before(t),void i.setVars()):!1},removeItem:function(t){var e,o=this;return 0===o.$elem.children().length?!1:(e=void 0===t||-1===t?-1:t,o.unWrap(),o.$userItems.eq(e).remove(),void o.setVars())}};t.fn.owlCarousel=function(e){return this.each(function(){if(t(this).data("owl-init")===!0)return!1;t(this).data("owl-init",!0);var o=Object.create(i);o.init(e,this),t.data(this,"owlCarousel",o)})},t.fn.owlCarousel.options={items:5,itemsCustom:!1,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!1,itemsScaleUp:!1,slideSpeed:200,paginationSpeed:800,rewindSpeed:1e3,autoPlay:!1,stopOnHover:!1,navigation:!1,navigationText:["prev","next"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,responsive:!0,responsiveRefreshRate:200,responsiveBaseWidth:e,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:!1,lazyFollow:!0,lazyEffect:"fade",autoHeight:!1,jsonPath:!1,jsonSuccess:!1,dragBeforeAnimFinish:!0,mouseDrag:!0,touchDrag:!0,addClassActive:!1,transitionStyle:!1,beforeUpdate:!1,afterUpdate:!1,beforeInit:!1,afterInit:!1,beforeMove:!1,afterMove:!1,afterAction:!1,startDragging:!1,afterLazyLoad:!1}}(jQuery,window,document);

/* END OWL */

(function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
})(function(e) {
    function t(t, r) {
        var i, s, o, u = t.nodeName.toLowerCase();
        return "area" === u ? (i = t.parentNode, s = i.name, t.href && s && "map" === i.nodeName.toLowerCase() ? (o = e("img[usemap='#" + s + "']")[0], !!o && n(o)) : !1) : (/input|select|textarea|button|object/.test(u) ? !t.disabled : "a" === u ? t.href || r : r) && n(t)
    }

    function n(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
            return "hidden" === e.css(this, "visibility")
        }).length
    }

    function r(e) {
        for (var t, n; e.length && e[0] !== document;) {
            if (t = e.css("position"), ("absolute" === t || "relative" === t || "fixed" === t) && (n = parseInt(e.css("zIndex"), 10), !isNaN(n) && 0 !== n)) return n;
            e = e.parent()
        }
        return 0
    }

    function i() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, e.extend(this._defaults, this.regional[""]), this.regional.en = e.extend(!0, {}, this.regional[""]), this.regional["en-US"] = e.extend(!0, {}, this.regional.en), this.dpDiv = s(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function s(t) {
        var n = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.delegate(n, "mouseout", function() {
            e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover")
        }).delegate(n, "mouseover", o)
    }

    function o() {
        e.datepicker._isDisabledDatepicker(g.inline ? g.dpDiv.parent()[0] : g.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover"))
    }

    function u(t, n) {
        e.extend(t, n);
        for (var r in n) null == n[r] && (t[r] = n[r]);
        return t
    }

    function a(e) {
        return function() {
            var t = this.element.val();
            e.apply(this, arguments), this._refresh(), t !== this.element.val() && this._trigger("change")
        }
    }
    e.ui = e.ui || {}, e.extend(e.ui, {
        version: "1.11.1",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        scrollParent: function(t) {
            var n = this.css("position"),
                r = "absolute" === n,
                i = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                s = this.parents().filter(function() {
                    var t = e(this);
                    return r && "static" === t.css("position") ? !1 : i.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                }).eq(0);
            return "fixed" !== n && s.length ? s : e(this[0].ownerDocument || document)
        },
        uniqueId: function() {
            var e = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++e)
                })
            }
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(n) {
                return !!e.data(n, t)
            }
        }) : function(t, n, r) {
            return !!e.data(t, r[3])
        },
        focusable: function(n) {
            return t(n, !isNaN(e.attr(n, "tabindex")))
        },
        tabbable: function(n) {
            var r = e.attr(n, "tabindex"),
                i = isNaN(r);
            return (i || r >= 0) && t(n, !i)
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(t, n) {
        function r(t, n, r, s) {
            return e.each(i, function() {
                n -= parseFloat(e.css(t, "padding" + this)) || 0, r && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (n -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), n
        }
        var i = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"],
            s = n.toLowerCase(),
            o = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };
        e.fn["inner" + n] = function(t) {
            return void 0 === t ? o["inner" + n].call(this) : this.each(function() {
                e(this).css(s, r(this, t) + "px")
            })
        }, e.fn["outer" + n] = function(t, i) {
            return "number" != typeof t ? o["outer" + n].call(this, t) : this.each(function() {
                e(this).css(s, r(this, t, !0, i) + "px")
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
        return function(n) {
            return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this)
        }
    }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
        focus: function(t) {
            return function(n, r) {
                return "number" == typeof n ? this.each(function() {
                    var t = this;
                    setTimeout(function() {
                        e(t).focus(), r && r.call(t)
                    }, n)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus),
        disableSelection: function() {
            var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.bind(e + ".ui-disableSelection", function(e) {
                    e.preventDefault()
                })
            }
        }(),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function(t) {
            if (void 0 !== t) return this.css("zIndex", t);
            if (this.length)
                for (var n, r, i = e(this[0]); i.length && i[0] !== document;) {
                    if (n = i.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) && (r = parseInt(i.css("zIndex"), 10), !isNaN(r) && 0 !== r)) return r;
                    i = i.parent()
                }
            return 0
        }
    }), e.ui.plugin = {
        add: function(t, n, r) {
            var i, s = e.ui[t].prototype;
            for (i in r) s.plugins[i] = s.plugins[i] || [], s.plugins[i].push([n, r[i]])
        },
        call: function(e, t, n, r) {
            var i, s = e.plugins[t];
            if (s && (r || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
                for (i = 0; s.length > i; i++) e.options[s[i][0]] && s[i][1].apply(e.element, n)
        }
    };
    var f = 0,
        l = Array.prototype.slice;
    e.cleanData = function(t) {
        return function(n) {
            var r, i, s;
            for (s = 0; null != (i = n[s]); s++) try {
                r = e._data(i, "events"), r && r.remove && e(i).triggerHandler("remove")
            } catch (o) {}
            t(n)
        }
    }(e.cleanData), e.widget = function(t, n, r) {
        var i, s, o, u, a = {},
            f = t.split(".")[0];
        return t = t.split(".")[1], i = f + "-" + t, r || (r = n, n = e.Widget), e.expr[":"][i.toLowerCase()] = function(t) {
            return !!e.data(t, i)
        }, e[f] = e[f] || {}, s = e[f][t], o = e[f][t] = function(e, t) {
            return this._createWidget ? (arguments.length && this._createWidget(e, t), void 0) : new o(e, t)
        }, e.extend(o, s, {
            version: r.version,
            _proto: e.extend({}, r),
            _childConstructors: []
        }), u = new n, u.options = e.widget.extend({}, u.options), e.each(r, function(t, r) {
            return e.isFunction(r) ? (a[t] = function() {
                var e = function() {
                        return n.prototype[t].apply(this, arguments)
                    },
                    i = function(e) {
                        return n.prototype[t].apply(this, e)
                    };
                return function() {
                    var t, n = this._super,
                        s = this._superApply;
                    return this._super = e, this._superApply = i, t = r.apply(this, arguments), this._super = n, this._superApply = s, t
                }
            }(), void 0) : (a[t] = r, void 0)
        }), o.prototype = e.widget.extend(u, {
            widgetEventPrefix: s ? u.widgetEventPrefix || t : t
        }, a, {
            constructor: o,
            namespace: f,
            widgetName: t,
            widgetFullName: i
        }), s ? (e.each(s._childConstructors, function(t, n) {
            var r = n.prototype;
            e.widget(r.namespace + "." + r.widgetName, o, n._proto)
        }), delete s._childConstructors) : n._childConstructors.push(o), e.widget.bridge(t, o), o
    }, e.widget.extend = function(t) {
        for (var n, r, i = l.call(arguments, 1), s = 0, o = i.length; o > s; s++)
            for (n in i[s]) r = i[s][n], i[s].hasOwnProperty(n) && void 0 !== r && (t[n] = e.isPlainObject(r) ? e.isPlainObject(t[n]) ? e.widget.extend({}, t[n], r) : e.widget.extend({}, r) : r);
        return t
    }, e.widget.bridge = function(t, n) {
        var r = n.prototype.widgetFullName || t;
        e.fn[t] = function(i) {
            var s = "string" == typeof i,
                o = l.call(arguments, 1),
                u = this;
            return i = !s && o.length ? e.widget.extend.apply(null, [i].concat(o)) : i, s ? this.each(function() {
                var n, s = e.data(this, r);
                return "instance" === i ? (u = s, !1) : s ? e.isFunction(s[i]) && "_" !== i.charAt(0) ? (n = s[i].apply(s, o), n !== s && void 0 !== n ? (u = n && n.jquery ? u.pushStack(n.get()) : n, !1) : void 0) : e.error("no such method '" + i + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; " + "attempted to call method '" + i + "'")
            }) : this.each(function() {
                var t = e.data(this, r);
                t ? (t.option(i || {}), t._init && t._init()) : e.data(this, r, new n(i, this))
            }), u
        }
    }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t, n) {
            n = e(n || this.defaultElement || this)[0], this.element = e(n), this.uuid = f++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), n !== this && (e.data(n, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(e) {
                    e.target === n && this.destroy()
                }
            }), this.document = e(n.style ? n.ownerDocument : n.document || n), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function() {
            return this.element
        },
        option: function(t, n) {
            var r, i, s, o = t;
            if (0 === arguments.length) return e.widget.extend({}, this.options);
            if ("string" == typeof t)
                if (o = {}, r = t.split("."), t = r.shift(), r.length) {
                    for (i = o[t] = e.widget.extend({}, this.options[t]), s = 0; r.length - 1 > s; s++) i[r[s]] = i[r[s]] || {}, i = i[r[s]];
                    if (t = r.pop(), 1 === arguments.length) return void 0 === i[t] ? null : i[t];
                    i[t] = n
                } else {
                    if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                    o[t] = n
                }
            return this._setOptions(o), this
        },
        _setOptions: function(e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this
        },
        _setOption: function(e, t) {
            return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function(t, n, r) {
            var i, s = this;
            "boolean" != typeof t && (r = n, n = t, t = !1), r ? (n = i = e(n), this.bindings = this.bindings.add(n)) : (r = n, n = this.element, i = this.widget()), e.each(r, function(r, o) {
                function u() {
                    return t || s.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? s[o] : o).apply(s, arguments) : void 0
                }
                "string" != typeof o && (u.guid = o.guid = o.guid || u.guid || e.guid++);
                var a = r.match(/^([\w:-]*)\s*(.*)$/),
                    f = a[1] + s.eventNamespace,
                    l = a[2];
                l ? i.delegate(l, f, u) : n.bind(f, u)
            })
        },
        _off: function(e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
        },
        _delay: function(e, t) {
            function n() {
                return ("string" == typeof e ? r[e] : e).apply(r, arguments)
            }
            var r = this;
            return setTimeout(n, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function(t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function(t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, n, r) {
            var i, s, o = this.options[t];
            if (r = r || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], s = n.originalEvent)
                for (i in s) i in n || (n[i] = s[i]);
            return this.element.trigger(n, r), !(e.isFunction(o) && o.apply(this.element[0], [n].concat(r)) === !1 || n.isDefaultPrevented())
        }
    }, e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(t, n) {
        e.Widget.prototype["_" + t] = function(r, i, s) {
            "string" == typeof i && (i = {
                effect: i
            });
            var o, u = i ? i === !0 || "number" == typeof i ? n : i.effect || n : t;
            i = i || {}, "number" == typeof i && (i = {
                duration: i
            }), o = !e.isEmptyObject(i), i.complete = s, i.delay && r.delay(i.delay), o && e.effects && e.effects.effect[u] ? r[t](i) : u !== t && r[u] ? r[u](i.duration, i.easing, s) : r.queue(function(n) {
                e(this)[t](), s && s.call(r[0]), n()
            })
        }
    }), e.widget;
    var c = !1;
    e(document).mouseup(function() {
            c = !1
        }), e.widget("ui.mouse", {
            version: "1.11.1",
            options: {
                cancel: "input,textarea,button,select,option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function() {
                var t = this;
                this.element.bind("mousedown." + this.widgetName, function(e) {
                    return t._mouseDown(e)
                }).bind("click." + this.widgetName, function(n) {
                    return !0 === e.data(n.target, t.widgetName + ".preventClickEvent") ? (e.removeData(n.target, t.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1) : void 0
                }), this.started = !1
            },
            _mouseDestroy: function() {
                this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function(t) {
                if (!c) {
                    this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                    var n = this,
                        r = 1 === t.which,
                        i = "string" == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
                    return r && !i && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                        n.mouseDelayMet = !0
                    }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                        return n._mouseMove(e)
                    }, this._mouseUpDelegate = function(e) {
                        return n._mouseUp(e)
                    }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), c = !0, !0)) : !0
                }
            },
            _mouseMove: function(t) {
                return e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button ? this._mouseUp(t) : t.which ? this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) : this._mouseUp(t)
            },
            _mouseUp: function(t) {
                return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), c = !1, !1
            },
            _mouseDistanceMet: function(e) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function() {
                return this.mouseDelayMet
            },
            _mouseStart: function() {},
            _mouseDrag: function() {},
            _mouseStop: function() {},
            _mouseCapture: function() {
                return !0
            }
        }),
        function() {
            function t(e, t, n) {
                return [parseFloat(e[0]) * (p.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (p.test(e[1]) ? n / 100 : 1)]
            }

            function n(t, n) {
                return parseInt(e.css(t, n), 10) || 0
            }

            function r(t) {
                var n = t[0];
                return 9 === n.nodeType ? {
                    width: t.width(),
                    height: t.height(),
                    offset: {
                        top: 0,
                        left: 0
                    }
                } : e.isWindow(n) ? {
                    width: t.width(),
                    height: t.height(),
                    offset: {
                        top: t.scrollTop(),
                        left: t.scrollLeft()
                    }
                } : n.preventDefault ? {
                    width: 0,
                    height: 0,
                    offset: {
                        top: n.pageY,
                        left: n.pageX
                    }
                } : {
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    offset: t.offset()
                }
            }
            e.ui = e.ui || {};
            var i, s, o = Math.max,
                u = Math.abs,
                a = Math.round,
                f = /left|center|right/,
                l = /top|center|bottom/,
                c = /[\+\-]\d+(\.[\d]+)?%?/,
                h = /^\w+/,
                p = /%$/,
                d = e.fn.position;
            e.position = {
                    scrollbarWidth: function() {
                        if (void 0 !== i) return i;
                        var t, n, r = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                            s = r.children()[0];
                        return e("body").append(r), t = s.offsetWidth, r.css("overflow", "scroll"), n = s.offsetWidth, t === n && (n = r[0].clientWidth), r.remove(), i = t - n
                    },
                    getScrollInfo: function(t) {
                        var n = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                            r = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                            i = "scroll" === n || "auto" === n && t.width < t.element[0].scrollWidth,
                            s = "scroll" === r || "auto" === r && t.height < t.element[0].scrollHeight;
                        return {
                            width: s ? e.position.scrollbarWidth() : 0,
                            height: i ? e.position.scrollbarWidth() : 0
                        }
                    },
                    getWithinInfo: function(t) {
                        var n = e(t || window),
                            r = e.isWindow(n[0]),
                            i = !!n[0] && 9 === n[0].nodeType;
                        return {
                            element: n,
                            isWindow: r,
                            isDocument: i,
                            offset: n.offset() || {
                                left: 0,
                                top: 0
                            },
                            scrollLeft: n.scrollLeft(),
                            scrollTop: n.scrollTop(),
                            width: r || i ? n.width() : n.outerWidth(),
                            height: r || i ? n.height() : n.outerHeight()
                        }
                    }
                }, e.fn.position = function(i) {
                    if (!i || !i.of) return d.apply(this, arguments);
                    i = e.extend({}, i);
                    var p, v, m, g, y, b, w = e(i.of),
                        E = e.position.getWithinInfo(i.within),
                        S = e.position.getScrollInfo(E),
                        x = (i.collision || "flip").split(" "),
                        T = {};
                    return b = r(w), w[0].preventDefault && (i.at = "left top"), v = b.width, m = b.height, g = b.offset, y = e.extend({}, g), e.each(["my", "at"], function() {
                        var e, t, n = (i[this] || "").split(" ");
                        1 === n.length && (n = f.test(n[0]) ? n.concat(["center"]) : l.test(n[0]) ? ["center"].concat(n) : ["center", "center"]), n[0] = f.test(n[0]) ? n[0] : "center", n[1] = l.test(n[1]) ? n[1] : "center", e = c.exec(n[0]), t = c.exec(n[1]), T[this] = [e ? e[0] : 0, t ? t[0] : 0], i[this] = [h.exec(n[0])[0], h.exec(n[1])[0]]
                    }), 1 === x.length && (x[1] = x[0]), "right" === i.at[0] ? y.left += v : "center" === i.at[0] && (y.left += v / 2), "bottom" === i.at[1] ? y.top += m : "center" === i.at[1] && (y.top += m / 2), p = t(T.at, v, m), y.left += p[0], y.top += p[1], this.each(function() {
                        var r, f, l = e(this),
                            c = l.outerWidth(),
                            h = l.outerHeight(),
                            d = n(this, "marginLeft"),
                            b = n(this, "marginTop"),
                            N = c + d + n(this, "marginRight") + S.width,
                            C = h + b + n(this, "marginBottom") + S.height,
                            L = e.extend({}, y),
                            A = t(T.my, l.outerWidth(), l.outerHeight());
                        "right" === i.my[0] ? L.left -= c : "center" === i.my[0] && (L.left -= c / 2), "bottom" === i.my[1] ? L.top -= h : "center" === i.my[1] && (L.top -= h / 2), L.left += A[0], L.top += A[1], s || (L.left = a(L.left), L.top = a(L.top)), r = {
                            marginLeft: d,
                            marginTop: b
                        }, e.each(["left", "top"], function(t, n) {
                            e.ui.position[x[t]] && e.ui.position[x[t]][n](L, {
                                targetWidth: v,
                                targetHeight: m,
                                elemWidth: c,
                                elemHeight: h,
                                collisionPosition: r,
                                collisionWidth: N,
                                collisionHeight: C,
                                offset: [p[0] + A[0], p[1] + A[1]],
                                my: i.my,
                                at: i.at,
                                within: E,
                                elem: l
                            })
                        }), i.using && (f = function(e) {
                            var t = g.left - L.left,
                                n = t + v - c,
                                r = g.top - L.top,
                                s = r + m - h,
                                a = {
                                    target: {
                                        element: w,
                                        left: g.left,
                                        top: g.top,
                                        width: v,
                                        height: m
                                    },
                                    element: {
                                        element: l,
                                        left: L.left,
                                        top: L.top,
                                        width: c,
                                        height: h
                                    },
                                    horizontal: 0 > n ? "left" : t > 0 ? "right" : "center",
                                    vertical: 0 > s ? "top" : r > 0 ? "bottom" : "middle"
                                };
                            c > v && v > u(t + n) && (a.horizontal = "center"), h > m && m > u(r + s) && (a.vertical = "middle"), a.important = o(u(t), u(n)) > o(u(r), u(s)) ? "horizontal" : "vertical", i.using.call(this, e, a)
                        }), l.offset(e.extend(L, {
                            using: f
                        }))
                    })
                }, e.ui.position = {
                    fit: {
                        left: function(e, t) {
                            var n, r = t.within,
                                i = r.isWindow ? r.scrollLeft : r.offset.left,
                                s = r.width,
                                u = e.left - t.collisionPosition.marginLeft,
                                a = i - u,
                                f = u + t.collisionWidth - s - i;
                            t.collisionWidth > s ? a > 0 && 0 >= f ? (n = e.left + a + t.collisionWidth - s - i, e.left += a - n) : e.left = f > 0 && 0 >= a ? i : a > f ? i + s - t.collisionWidth : i : a > 0 ? e.left += a : f > 0 ? e.left -= f : e.left = o(e.left - u, e.left)
                        },
                        top: function(e, t) {
                            var n, r = t.within,
                                i = r.isWindow ? r.scrollTop : r.offset.top,
                                s = t.within.height,
                                u = e.top - t.collisionPosition.marginTop,
                                a = i - u,
                                f = u + t.collisionHeight - s - i;
                            t.collisionHeight > s ? a > 0 && 0 >= f ? (n = e.top + a + t.collisionHeight - s - i, e.top += a - n) : e.top = f > 0 && 0 >= a ? i : a > f ? i + s - t.collisionHeight : i : a > 0 ? e.top += a : f > 0 ? e.top -= f : e.top = o(e.top - u, e.top)
                        }
                    },
                    flip: {
                        left: function(e, t) {
                            var n, r, i = t.within,
                                s = i.offset.left + i.scrollLeft,
                                o = i.width,
                                a = i.isWindow ? i.scrollLeft : i.offset.left,
                                f = e.left - t.collisionPosition.marginLeft,
                                l = f - a,
                                c = f + t.collisionWidth - o - a,
                                h = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0,
                                p = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0,
                                d = -2 * t.offset[0];
                            0 > l ? (n = e.left + h + p + d + t.collisionWidth - o - s, (0 > n || u(l) > n) && (e.left += h + p + d)) : c > 0 && (r = e.left - t.collisionPosition.marginLeft + h + p + d - a, (r > 0 || c > u(r)) && (e.left += h + p + d))
                        },
                        top: function(e, t) {
                            var n, r, i = t.within,
                                s = i.offset.top + i.scrollTop,
                                o = i.height,
                                a = i.isWindow ? i.scrollTop : i.offset.top,
                                f = e.top - t.collisionPosition.marginTop,
                                l = f - a,
                                c = f + t.collisionHeight - o - a,
                                h = "top" === t.my[1],
                                p = h ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0,
                                d = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0,
                                v = -2 * t.offset[1];
                            0 > l ? (r = e.top + p + d + v + t.collisionHeight - o - s, e.top + p + d + v > l && (0 > r || u(l) > r) && (e.top += p + d + v)) : c > 0 && (n = e.top - t.collisionPosition.marginTop + p + d + v - a, e.top + p + d + v > c && (n > 0 || c > u(n)) && (e.top += p + d + v))
                        }
                    },
                    flipfit: {
                        left: function() {
                            e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments)
                        },
                        top: function() {
                            e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments)
                        }
                    }
                },
                function() {
                    var t, n, r, i, o, u = document.getElementsByTagName("body")[0],
                        a = document.createElement("div");
                    t = document.createElement(u ? "div" : "body"), r = {
                        visibility: "hidden",
                        width: 0,
                        height: 0,
                        border: 0,
                        margin: 0,
                        background: "none"
                    }, u && e.extend(r, {
                        position: "absolute",
                        left: "-1000px",
                        top: "-1000px"
                    });
                    for (o in r) t.style[o] = r[o];
                    t.appendChild(a), n = u || document.documentElement, n.insertBefore(t, n.firstChild), a.style.cssText = "position: absolute; left: 10.7432222px;", i = e(a).offset().left, s = i > 10 && 11 > i, t.innerHTML = "", n.removeChild(t)
                }()
        }(), e.ui.position, e.widget("ui.draggable", e.ui.mouse, {
            version: "1.11.1",
            widgetEventPrefix: "drag",
            options: {
                addClasses: !0,
                appendTo: "parent",
                axis: !1,
                connectToSortable: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                iframeFix: !1,
                opacity: !1,
                refreshPositions: !1,
                revert: !1,
                revertDuration: 500,
                scope: "default",
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                snap: !1,
                snapMode: "both",
                snapTolerance: 20,
                stack: !1,
                zIndex: !1,
                drag: null,
                start: null,
                stop: null
            },
            _create: function() {
                "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit()
            },
            _setOption: function(e, t) {
                this._super(e, t), "handle" === e && (this._removeHandleClassName(), this._setHandleClassName())
            },
            _destroy: function() {
                return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0, void 0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), this._mouseDestroy(), void 0)
            },
            _mouseCapture: function(t) {
                var n = this.document[0],
                    r = this.options;
                try {
                    n.activeElement && "body" !== n.activeElement.nodeName.toLowerCase() && e(n.activeElement).blur()
                } catch (i) {}
                return this.helper || r.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (e(r.iframeFix === !0 ? "iframe" : r.iframeFix).each(function() {
                    e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                        width: this.offsetWidth + "px",
                        height: this.offsetHeight + "px",
                        position: "absolute",
                        opacity: "0.001",
                        zIndex: 1e3
                    }).css(e(this).offset()).appendTo("body")
                }), !0) : !1)
            },
            _mouseStart: function(t) {
                var n = this.options;
                return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, this.offset.scroll = !1, e.extend(this.offset, {
                    click: {
                        left: t.pageX - this.offset.left,
                        top: t.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
            },
            _mouseDrag: function(t, n) {
                if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !n) {
                    var r = this._uiHash();
                    if (this._trigger("drag", t, r) === !1) return this._mouseUp({}), !1;
                    this.position = r.position
                }
                return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
            },
            _mouseStop: function(t) {
                var n = this,
                    r = !1;
                return e.ui.ddmanager && !this.options.dropBehaviour && (r = e.ui.ddmanager.drop(this, t)), this.dropped && (r = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !r || "valid" === this.options.revert && r || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, r) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    n._trigger("stop", t) !== !1 && n._clear()
                }) : this._trigger("stop", t) !== !1 && this._clear(), !1
            },
            _mouseUp: function(t) {
                return e("div.ui-draggable-iframeFix").each(function() {
                    this.parentNode.removeChild(this)
                }), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), this.element.focus(), e.ui.mouse.prototype._mouseUp.call(this, t)
            },
            cancel: function() {
                return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
            },
            _getHandle: function(t) {
                return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0
            },
            _setHandleClassName: function() {
                this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle")
            },
            _removeHandleClassName: function() {
                this.handleElement.removeClass("ui-draggable-handle")
            },
            _createHelper: function(t) {
                var n = this.options,
                    r = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t])) : "clone" === n.helper ? this.element.clone().removeAttr("id") : this.element;
                return r.parents("body").length || r.appendTo("parent" === n.appendTo ? this.element[0].parentNode : n.appendTo), r[0] === this.element[0] || /(fixed|absolute)/.test(r.css("position")) || r.css("position", "absolute"), r
            },
            _adjustOffsetFromHelper: function(t) {
                "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                    left: +t[0],
                    top: +t[1] || 0
                }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
            },
            _isRootNode: function(e) {
                return /(html|body)/i.test(e.tagName) || e === this.document[0]
            },
            _getParentOffset: function() {
                var t = this.offsetParent.offset(),
                    n = this.document[0];
                return "absolute" === this.cssPosition && this.scrollParent[0] !== n && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = {
                    top: 0,
                    left: 0
                }), {
                    top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if ("relative" !== this.cssPosition) return {
                    top: 0,
                    left: 0
                };
                var e = this.element.position(),
                    t = this._isRootNode(this.scrollParent[0]);
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + (t ? 0 : this.scrollParent.scrollTop()),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + (t ? 0 : this.scrollParent.scrollLeft())
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.element.css("marginLeft"), 10) || 0,
                    top: parseInt(this.element.css("marginTop"), 10) || 0,
                    right: parseInt(this.element.css("marginRight"), 10) || 0,
                    bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var t, n, r, i = this.options,
                    s = this.document[0];
                return this.relativeContainer = null, i.containment ? "window" === i.containment ? (this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || s.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : "document" === i.containment ? (this.containment = [0, 0, e(s).width() - this.helperProportions.width - this.margins.left, (e(s).height() || s.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : i.containment.constructor === Array ? (this.containment = i.containment, void 0) : ("parent" === i.containment && (i.containment = this.helper[0].parentNode), n = e(i.containment), r = n[0], r && (t = "hidden" !== n.css("overflow"), this.containment = [(parseInt(n.css("borderLeftWidth"), 10) || 0) + (parseInt(n.css("paddingLeft"), 10) || 0), (parseInt(n.css("borderTopWidth"), 10) || 0) + (parseInt(n.css("paddingTop"), 10) || 0), (t ? Math.max(r.scrollWidth, r.offsetWidth) : r.offsetWidth) - (parseInt(n.css("borderRightWidth"), 10) || 0) - (parseInt(n.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(r.scrollHeight, r.offsetHeight) : r.offsetHeight) - (parseInt(n.css("borderBottomWidth"), 10) || 0) - (parseInt(n.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = n), void 0) : (this.containment = null, void 0)
            },
            _convertPositionTo: function(e, t) {
                t || (t = this.position);
                var n = "absolute" === e ? 1 : -1,
                    r = this._isRootNode(this.scrollParent[0]);
                return {
                    top: t.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top) * n,
                    left: t.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left) * n
                }
            },
            _generatePosition: function(e, t) {
                var n, r, i, s, o = this.options,
                    u = this._isRootNode(this.scrollParent[0]),
                    a = e.pageX,
                    f = e.pageY;
                return u && this.offset.scroll || (this.offset.scroll = {
                    top: this.scrollParent.scrollTop(),
                    left: this.scrollParent.scrollLeft()
                }), t && (this.containment && (this.relativeContainer ? (r = this.relativeContainer.offset(), n = [this.containment[0] + r.left, this.containment[1] + r.top, this.containment[2] + r.left, this.containment[3] + r.top]) : n = this.containment, e.pageX - this.offset.click.left < n[0] && (a = n[0] + this.offset.click.left), e.pageY - this.offset.click.top < n[1] && (f = n[1] + this.offset.click.top), e.pageX - this.offset.click.left > n[2] && (a = n[2] + this.offset.click.left), e.pageY - this.offset.click.top > n[3] && (f = n[3] + this.offset.click.top)), o.grid && (i = o.grid[1] ? this.originalPageY + Math.round((f - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, f = n ? i - this.offset.click.top >= n[1] || i - this.offset.click.top > n[3] ? i : i - this.offset.click.top >= n[1] ? i - o.grid[1] : i + o.grid[1] : i, s = o.grid[0] ? this.originalPageX + Math.round((a - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, a = n ? s - this.offset.click.left >= n[0] || s - this.offset.click.left > n[2] ? s : s - this.offset.click.left >= n[0] ? s - o.grid[0] : s + o.grid[0] : s), "y" === o.axis && (a = this.originalPageX), "x" === o.axis && (f = this.originalPageY)), {
                    top: f - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : u ? 0 : this.offset.scroll.top),
                    left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : u ? 0 : this.offset.scroll.left)
                }
            },
            _clear: function() {
                this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
            },
            _trigger: function(t, n, r) {
                return r = r || this._uiHash(), e.ui.plugin.call(this, t, [n, r, this], !0), "drag" === t && (this.positionAbs = this._convertPositionTo("absolute")), e.Widget.prototype._trigger.call(this, t, n, r)
            },
            plugins: {},
            _uiHash: function() {
                return {
                    helper: this.helper,
                    position: this.position,
                    originalPosition: this.originalPosition,
                    offset: this.positionAbs
                }
            }
        }), e.ui.plugin.add("draggable", "connectToSortable", {
            start: function(t, n, r) {
                var i = r.options,
                    s = e.extend({}, n, {
                        item: r.element
                    });
                r.sortables = [], e(i.connectToSortable).each(function() {
                    var n = e(this).sortable("instance");
                    n && !n.options.disabled && (r.sortables.push({
                        instance: n,
                        shouldRevert: n.options.revert
                    }), n.refreshPositions(), n._trigger("activate", t, s))
                })
            },
            stop: function(t, n, r) {
                var i = e.extend({}, n, {
                    item: r.element
                });
                e.each(r.sortables, function() {
                    this.instance.isOver ? (this.instance.isOver = 0, r.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, "original" === r.options.helper && this.instance.currentItem.css({
                        top: "auto",
                        left: "auto"
                    })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, i))
                })
            },
            drag: function(t, n, r) {
                var i = this;
                e.each(r.sortables, function() {
                    var s = !1,
                        o = this;
                    this.instance.positionAbs = r.positionAbs, this.instance.helperProportions = r.helperProportions, this.instance.offset.click = r.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (s = !0, e.each(r.sortables, function() {
                        return this.instance.positionAbs = r.positionAbs, this.instance.helperProportions = r.helperProportions, this.instance.offset.click = r.offset.click, this !== o && this.instance._intersectsWith(this.instance.containerCache) && e.contains(o.instance.element[0], this.instance.element[0]) && (s = !1), s
                    })), s ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(i).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                        return n.helper[0]
                    }, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = r.offset.click.top, this.instance.offset.click.left = r.offset.click.left, this.instance.offset.parent.left -= r.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= r.offset.parent.top - this.instance.offset.parent.top, r._trigger("toSortable", t), r.dropped = this.instance.element, r.currentItem = r.element, this.instance.fromOutside = r), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), r._trigger("fromSortable", t), r.dropped = !1)
                })
            }
        }), e.ui.plugin.add("draggable", "cursor", {
            start: function(t, n, r) {
                var i = e("body"),
                    s = r.options;
                i.css("cursor") && (s._cursor = i.css("cursor")), i.css("cursor", s.cursor)
            },
            stop: function(t, n, r) {
                var i = r.options;
                i._cursor && e("body").css("cursor", i._cursor)
            }
        }), e.ui.plugin.add("draggable", "opacity", {
            start: function(t, n, r) {
                var i = e(n.helper),
                    s = r.options;
                i.css("opacity") && (s._opacity = i.css("opacity")), i.css("opacity", s.opacity)
            },
            stop: function(t, n, r) {
                var i = r.options;
                i._opacity && e(n.helper).css("opacity", i._opacity)
            }
        }), e.ui.plugin.add("draggable", "scroll", {
            start: function(e, t, n) {
                n.scrollParentNotHidden || (n.scrollParentNotHidden = n.helper.scrollParent(!1)), n.scrollParentNotHidden[0] !== n.document[0] && "HTML" !== n.scrollParentNotHidden[0].tagName && (n.overflowOffset = n.scrollParentNotHidden.offset())
            },
            drag: function(t, n, r) {
                var i = r.options,
                    s = !1,
                    o = r.scrollParentNotHidden[0],
                    u = r.document[0];
                o !== u && "HTML" !== o.tagName ? (i.axis && "x" === i.axis || (r.overflowOffset.top + o.offsetHeight - t.pageY < i.scrollSensitivity ? o.scrollTop = s = o.scrollTop + i.scrollSpeed : t.pageY - r.overflowOffset.top < i.scrollSensitivity && (o.scrollTop = s = o.scrollTop - i.scrollSpeed)), i.axis && "y" === i.axis || (r.overflowOffset.left + o.offsetWidth - t.pageX < i.scrollSensitivity ? o.scrollLeft = s = o.scrollLeft + i.scrollSpeed : t.pageX - r.overflowOffset.left < i.scrollSensitivity && (o.scrollLeft = s = o.scrollLeft - i.scrollSpeed))) : (i.axis && "x" === i.axis || (t.pageY - e(u).scrollTop() < i.scrollSensitivity ? s = e(u).scrollTop(e(u).scrollTop() - i.scrollSpeed) : e(window).height() - (t.pageY - e(u).scrollTop()) < i.scrollSensitivity && (s = e(u).scrollTop(e(u).scrollTop() + i.scrollSpeed))), i.axis && "y" === i.axis || (t.pageX - e(u).scrollLeft() < i.scrollSensitivity ? s = e(u).scrollLeft(e(u).scrollLeft() - i.scrollSpeed) : e(window).width() - (t.pageX - e(u).scrollLeft()) < i.scrollSensitivity && (s = e(u).scrollLeft(e(u).scrollLeft() + i.scrollSpeed)))), s !== !1 && e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(r, t)
            }
        }), e.ui.plugin.add("draggable", "snap", {
            start: function(t, n, r) {
                var i = r.options;
                r.snapElements = [], e(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" : i.snap).each(function() {
                    var t = e(this),
                        n = t.offset();
                    this !== r.element[0] && r.snapElements.push({
                        item: this,
                        width: t.outerWidth(),
                        height: t.outerHeight(),
                        top: n.top,
                        left: n.left
                    })
                })
            },
            drag: function(t, n, r) {
                var i, s, o, u, a, f, l, c, h, p, d = r.options,
                    v = d.snapTolerance,
                    m = n.offset.left,
                    g = m + r.helperProportions.width,
                    y = n.offset.top,
                    b = y + r.helperProportions.height;
                for (h = r.snapElements.length - 1; h >= 0; h--) a = r.snapElements[h].left, f = a + r.snapElements[h].width, l = r.snapElements[h].top, c = l + r.snapElements[h].height, a - v > g || m > f + v || l - v > b || y > c + v || !e.contains(r.snapElements[h].item.ownerDocument, r.snapElements[h].item) ? (r.snapElements[h].snapping && r.options.snap.release && r.options.snap.release.call(r.element, t, e.extend(r._uiHash(), {
                    snapItem: r.snapElements[h].item
                })), r.snapElements[h].snapping = !1) : ("inner" !== d.snapMode && (i = v >= Math.abs(l - b), s = v >= Math.abs(c - y), o = v >= Math.abs(a - g), u = v >= Math.abs(f - m), i && (n.position.top = r._convertPositionTo("relative", {
                    top: l - r.helperProportions.height,
                    left: 0
                }).top - r.margins.top), s && (n.position.top = r._convertPositionTo("relative", {
                    top: c,
                    left: 0
                }).top - r.margins.top), o && (n.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: a - r.helperProportions.width
                }).left - r.margins.left), u && (n.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: f
                }).left - r.margins.left)), p = i || s || o || u, "outer" !== d.snapMode && (i = v >= Math.abs(l - y), s = v >= Math.abs(c - b), o = v >= Math.abs(a - m), u = v >= Math.abs(f - g), i && (n.position.top = r._convertPositionTo("relative", {
                    top: l,
                    left: 0
                }).top - r.margins.top), s && (n.position.top = r._convertPositionTo("relative", {
                    top: c - r.helperProportions.height,
                    left: 0
                }).top - r.margins.top), o && (n.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: a
                }).left - r.margins.left), u && (n.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: f - r.helperProportions.width
                }).left - r.margins.left)), !r.snapElements[h].snapping && (i || s || o || u || p) && r.options.snap.snap && r.options.snap.snap.call(r.element, t, e.extend(r._uiHash(), {
                    snapItem: r.snapElements[h].item
                })), r.snapElements[h].snapping = i || s || o || u || p)
            }
        }), e.ui.plugin.add("draggable", "stack", {
            start: function(t, n, r) {
                var i, s = r.options,
                    o = e.makeArray(e(s.stack)).sort(function(t, n) {
                        return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(n).css("zIndex"), 10) || 0)
                    });
                o.length && (i = parseInt(e(o[0]).css("zIndex"), 10) || 0, e(o).each(function(t) {
                    e(this).css("zIndex", i + t)
                }), this.css("zIndex", i + o.length))
            }
        }), e.ui.plugin.add("draggable", "zIndex", {
            start: function(t, n, r) {
                var i = e(n.helper),
                    s = r.options;
                i.css("zIndex") && (s._zIndex = i.css("zIndex")), i.css("zIndex", s.zIndex)
            },
            stop: function(t, n, r) {
                var i = r.options;
                i._zIndex && e(n.helper).css("zIndex", i._zIndex)
            }
        }), e.ui.draggable, e.widget("ui.droppable", {
            version: "1.11.1",
            widgetEventPrefix: "drop",
            options: {
                accept: "*",
                activeClass: !1,
                addClasses: !0,
                greedy: !1,
                hoverClass: !1,
                scope: "default",
                tolerance: "intersect",
                activate: null,
                deactivate: null,
                drop: null,
                out: null,
                over: null
            },
            _create: function() {
                var t, n = this.options,
                    r = n.accept;
                this.isover = !1, this.isout = !0, this.accept = e.isFunction(r) ? r : function(e) {
                    return e.is(r)
                }, this.proportions = function() {
                    return arguments.length ? (t = arguments[0], void 0) : t ? t : t = {
                        width: this.element[0].offsetWidth,
                        height: this.element[0].offsetHeight
                    }
                }, this._addToManager(n.scope), n.addClasses && this.element.addClass("ui-droppable")
            },
            _addToManager: function(t) {
                e.ui.ddmanager.droppables[t] = e.ui.ddmanager.droppables[t] || [], e.ui.ddmanager.droppables[t].push(this)
            },
            _splice: function(e) {
                for (var t = 0; e.length > t; t++) e[t] === this && e.splice(t, 1)
            },
            _destroy: function() {
                var t = e.ui.ddmanager.droppables[this.options.scope];
                this._splice(t), this.element.removeClass("ui-droppable ui-droppable-disabled")
            },
            _setOption: function(t, n) {
                if ("accept" === t) this.accept = e.isFunction(n) ? n : function(e) {
                    return e.is(n)
                };
                else if ("scope" === t) {
                    var r = e.ui.ddmanager.droppables[this.options.scope];
                    this._splice(r), this._addToManager(n)
                }
                this._super(t, n)
            },
            _activate: function(t) {
                var n = e.ui.ddmanager.current;
                this.options.activeClass && this.element.addClass(this.options.activeClass), n && this._trigger("activate", t, this.ui(n))
            },
            _deactivate: function(t) {
                var n = e.ui.ddmanager.current;
                this.options.activeClass && this.element.removeClass(this.options.activeClass), n && this._trigger("deactivate", t, this.ui(n))
            },
            _over: function(t) {
                var n = e.ui.ddmanager.current;
                n && (n.currentItem || n.element)[0] !== this.element[0] && this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(n)))
            },
            _out: function(t) {
                var n = e.ui.ddmanager.current;
                n && (n.currentItem || n.element)[0] !== this.element[0] && this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(n)))
            },
            _drop: function(t, n) {
                var r = n || e.ui.ddmanager.current,
                    i = !1;
                return r && (r.currentItem || r.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                    var n = e(this).droppable("instance");
                    return n.options.greedy && !n.options.disabled && n.options.scope === r.options.scope && n.accept.call(n.element[0], r.currentItem || r.element) && e.ui.intersect(r, e.extend(n, {
                        offset: n.element.offset()
                    }), n.options.tolerance, t) ? (i = !0, !1) : void 0
                }), i ? !1 : this.accept.call(this.element[0], r.currentItem || r.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(r)), this.element) : !1) : !1
            },
            ui: function(e) {
                return {
                    draggable: e.currentItem || e.element,
                    helper: e.helper,
                    position: e.position,
                    offset: e.positionAbs
                }
            }
        }), e.ui.intersect = function() {
            function e(e, t, n) {
                return e >= t && t + n > e
            }
            return function(t, n, r, i) {
                if (!n.offset) return !1;
                var s = (t.positionAbs || t.position.absolute).left,
                    o = (t.positionAbs || t.position.absolute).top,
                    u = s + t.helperProportions.width,
                    a = o + t.helperProportions.height,
                    f = n.offset.left,
                    l = n.offset.top,
                    c = f + n.proportions().width,
                    h = l + n.proportions().height;
                switch (r) {
                    case "fit":
                        return s >= f && c >= u && o >= l && h >= a;
                    case "intersect":
                        return s + t.helperProportions.width / 2 > f && c > u - t.helperProportions.width / 2 && o + t.helperProportions.height / 2 > l && h > a - t.helperProportions.height / 2;
                    case "pointer":
                        return e(i.pageY, l, n.proportions().height) && e(i.pageX, f, n.proportions().width);
                    case "touch":
                        return (o >= l && h >= o || a >= l && h >= a || l > o && a > h) && (s >= f && c >= s || u >= f && c >= u || f > s && u > c);
                    default:
                        return !1
                }
            }
        }(), e.ui.ddmanager = {
            current: null,
            droppables: {
                "default": []
            },
            prepareOffsets: function(t, n) {
                var r, i, s = e.ui.ddmanager.droppables[t.options.scope] || [],
                    o = n ? n.type : null,
                    u = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
                e: for (r = 0; s.length > r; r++)
                    if (!(s[r].options.disabled || t && !s[r].accept.call(s[r].element[0], t.currentItem || t.element))) {
                        for (i = 0; u.length > i; i++)
                            if (u[i] === s[r].element[0]) {
                                s[r].proportions().height = 0;
                                continue e
                            }
                        s[r].visible = "none" !== s[r].element.css("display"), s[r].visible && ("mousedown" === o && s[r]._activate.call(s[r], n), s[r].offset = s[r].element.offset(), s[r].proportions({
                            width: s[r].element[0].offsetWidth,
                            height: s[r].element[0].offsetHeight
                        }))
                    }
            },
            drop: function(t, n) {
                var r = !1;
                return e.each((e.ui.ddmanager.droppables[t.options.scope] || []).slice(), function() {
                    this.options && (!this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance, n) && (r = this._drop.call(this, n) || r), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, n)))
                }), r
            },
            dragStart: function(t, n) {
                t.element.parentsUntil("body").bind("scroll.droppable", function() {
                    t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, n)
                })
            },
            drag: function(t, n) {
                t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, n), e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function() {
                    if (!this.options.disabled && !this.greedyChild && this.visible) {
                        var r, i, s, o = e.ui.intersect(t, this, this.options.tolerance, n),
                            u = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;
                        u && (this.options.greedy && (i = this.options.scope, s = this.element.parents(":data(ui-droppable)").filter(function() {
                            return e(this).droppable("instance").options.scope === i
                        }), s.length && (r = e(s[0]).droppable("instance"), r.greedyChild = "isover" === u)), r && "isover" === u && (r.isover = !1, r.isout = !0, r._out.call(r, n)), this[u] = !0, this["isout" === u ? "isover" : "isout"] = !1, this["isover" === u ? "_over" : "_out"].call(this, n), r && "isout" === u && (r.isout = !1, r.isover = !0, r._over.call(r, n)))
                    }
                })
            },
            dragStop: function(t, n) {
                t.element.parentsUntil("body").unbind("scroll.droppable"), t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, n)
            }
        }, e.ui.droppable, e.widget("ui.resizable", e.ui.mouse, {
            version: "1.11.1",
            widgetEventPrefix: "resize",
            options: {
                alsoResize: !1,
                animate: !1,
                animateDuration: "slow",
                animateEasing: "swing",
                aspectRatio: !1,
                autoHide: !1,
                containment: !1,
                ghost: !1,
                grid: !1,
                handles: "e,s,se",
                helper: !1,
                maxHeight: null,
                maxWidth: null,
                minHeight: 10,
                minWidth: 10,
                zIndex: 90,
                resize: null,
                start: null,
                stop: null
            },
            _num: function(e) {
                return parseInt(e, 10) || 0
            },
            _isNumber: function(e) {
                return !isNaN(parseInt(e, 10))
            },
            _hasScroll: function(t, n) {
                if ("hidden" === e(t).css("overflow")) return !1;
                var r = n && "left" === n ? "scrollLeft" : "scrollTop",
                    i = !1;
                return t[r] > 0 ? !0 : (t[r] = 1, i = t[r] > 0, t[r] = 0, i)
            },
            _create: function() {
                var t, n, r, i, s, o = this,
                    u = this.options;
                if (this.element.addClass("ui-resizable"), e.extend(this, {
                        _aspectRatio: !!u.aspectRatio,
                        aspectRatio: u.aspectRatio,
                        originalElement: this.element,
                        _proportionallyResizeElements: [],
                        _helper: u.helper || u.ghost || u.animate ? u.helper || "ui-resizable-helper" : null
                    }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                        position: this.element.css("position"),
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight(),
                        top: this.element.css("top"),
                        left: this.element.css("left")
                    })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
                        marginLeft: this.originalElement.css("marginLeft"),
                        marginTop: this.originalElement.css("marginTop"),
                        marginRight: this.originalElement.css("marginRight"),
                        marginBottom: this.originalElement.css("marginBottom")
                    }), this.originalElement.css({
                        marginLeft: 0,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0
                    }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                        position: "static",
                        zoom: 1,
                        display: "block"
                    })), this.originalElement.css({
                        margin: this.originalElement.css("margin")
                    }), this._proportionallyResize()), this.handles = u.handles || (e(".ui-resizable-handle", this.element).length ? {
                        n: ".ui-resizable-n",
                        e: ".ui-resizable-e",
                        s: ".ui-resizable-s",
                        w: ".ui-resizable-w",
                        se: ".ui-resizable-se",
                        sw: ".ui-resizable-sw",
                        ne: ".ui-resizable-ne",
                        nw: ".ui-resizable-nw"
                    } : "e,s,se"), this.handles.constructor === String)
                    for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), t = this.handles.split(","), this.handles = {}, n = 0; t.length > n; n++) r = e.trim(t[n]), s = "ui-resizable-" + r, i = e("<div class='ui-resizable-handle " + s + "'></div>"), i.css({
                        zIndex: u.zIndex
                    }), "se" === r && i.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[r] = ".ui-resizable-" + r, this.element.append(i);
                this._renderAxis = function(t) {
                    var n, r, i, s;
                    t = t || this.element;
                    for (n in this.handles) this.handles[n].constructor === String && (this.handles[n] = this.element.children(this.handles[n]).first().show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (r = e(this.handles[n], this.element), s = /sw|ne|nw|se|n|s/.test(n) ? r.outerHeight() : r.outerWidth(), i = ["padding", /ne|nw|n/.test(n) ? "Top" : /se|sw|s/.test(n) ? "Bottom" : /^e$/.test(n) ? "Right" : "Left"].join(""), t.css(i, s), this._proportionallyResize()), e(this.handles[n]).length
                }, this._renderAxis(this.element), this._handles = e(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
                    o.resizing || (this.className && (i = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = i && i[1] ? i[1] : "se")
                }), u.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                    u.disabled || (e(this).removeClass("ui-resizable-autohide"), o._handles.show())
                }).mouseleave(function() {
                    u.disabled || o.resizing || (e(this).addClass("ui-resizable-autohide"), o._handles.hide())
                })), this._mouseInit()
            },
            _destroy: function() {
                this._mouseDestroy();
                var t, n = function(t) {
                    e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
                };
                return this.elementIsWrapper && (n(this.element), t = this.element, this.originalElement.css({
                    position: t.css("position"),
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    top: t.css("top"),
                    left: t.css("left")
                }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), n(this.originalElement), this
            },
            _mouseCapture: function(t) {
                var n, r, i = !1;
                for (n in this.handles) r = e(this.handles[n])[0], (r === t.target || e.contains(r, t.target)) && (i = !0);
                return !this.options.disabled && i
            },
            _mouseStart: function(t) {
                var n, r, i, s = this.options,
                    o = this.element;
                return this.resizing = !0, this._renderProxy(), n = this._num(this.helper.css("left")), r = this._num(this.helper.css("top")), s.containment && (n += e(s.containment).scrollLeft() || 0, r += e(s.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                    left: n,
                    top: r
                }, this.size = this._helper ? {
                    width: this.helper.width(),
                    height: this.helper.height()
                } : {
                    width: o.width(),
                    height: o.height()
                }, this.originalSize = this._helper ? {
                    width: o.outerWidth(),
                    height: o.outerHeight()
                } : {
                    width: o.width(),
                    height: o.height()
                }, this.sizeDiff = {
                    width: o.outerWidth() - o.width(),
                    height: o.outerHeight() - o.height()
                }, this.originalPosition = {
                    left: n,
                    top: r
                }, this.originalMousePosition = {
                    left: t.pageX,
                    top: t.pageY
                }, this.aspectRatio = "number" == typeof s.aspectRatio ? s.aspectRatio : this.originalSize.width / this.originalSize.height || 1, i = e(".ui-resizable-" + this.axis).css("cursor"), e("body").css("cursor", "auto" === i ? this.axis + "-resize" : i), o.addClass("ui-resizable-resizing"), this._propagate("start", t), !0
            },
            _mouseDrag: function(t) {
                var n, r, i = this.originalMousePosition,
                    s = this.axis,
                    o = t.pageX - i.left || 0,
                    u = t.pageY - i.top || 0,
                    a = this._change[s];
                return this._updatePrevProperties(), a ? (n = a.apply(this, [t, o, u]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (n = this._updateRatio(n, t)), n = this._respectSize(n, t), this._updateCache(n), this._propagate("resize", t), r = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), e.isEmptyObject(r) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges()), !1) : !1
            },
            _mouseStop: function(t) {
                this.resizing = !1;
                var n, r, i, s, o, u, a, f = this.options,
                    l = this;
                return this._helper && (n = this._proportionallyResizeElements, r = n.length && /textarea/i.test(n[0].nodeName), i = r && this._hasScroll(n[0], "left") ? 0 : l.sizeDiff.height, s = r ? 0 : l.sizeDiff.width, o = {
                    width: l.helper.width() - s,
                    height: l.helper.height() - i
                }, u = parseInt(l.element.css("left"), 10) + (l.position.left - l.originalPosition.left) || null, a = parseInt(l.element.css("top"), 10) + (l.position.top - l.originalPosition.top) || null, f.animate || this.element.css(e.extend(o, {
                    top: a,
                    left: u
                })), l.helper.height(l.size.height), l.helper.width(l.size.width), this._helper && !f.animate && this._proportionallyResize()), e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
            },
            _updatePrevProperties: function() {
                this.prevPosition = {
                    top: this.position.top,
                    left: this.position.left
                }, this.prevSize = {
                    width: this.size.width,
                    height: this.size.height
                }
            },
            _applyChanges: function() {
                var e = {};
                return this.position.top !== this.prevPosition.top && (e.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (e.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (e.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (e.height = this.size.height + "px"), this.helper.css(e), e
            },
            _updateVirtualBoundaries: function(e) {
                var t, n, r, i, s, o = this.options;
                s = {
                    minWidth: this._isNumber(o.minWidth) ? o.minWidth : 0,
                    maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth : 1 / 0,
                    minHeight: this._isNumber(o.minHeight) ? o.minHeight : 0,
                    maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight : 1 / 0
                }, (this._aspectRatio || e) && (t = s.minHeight * this.aspectRatio, r = s.minWidth / this.aspectRatio, n = s.maxHeight * this.aspectRatio, i = s.maxWidth / this.aspectRatio, t > s.minWidth && (s.minWidth = t), r > s.minHeight && (s.minHeight = r), s.maxWidth > n && (s.maxWidth = n), s.maxHeight > i && (s.maxHeight = i)), this._vBoundaries = s
            },
            _updateCache: function(e) {
                this.offset = this.helper.offset(), this._isNumber(e.left) && (this.position.left = e.left), this._isNumber(e.top) && (this.position.top = e.top), this._isNumber(e.height) && (this.size.height = e.height), this._isNumber(e.width) && (this.size.width = e.width)
            },
            _updateRatio: function(e) {
                var t = this.position,
                    n = this.size,
                    r = this.axis;
                return this._isNumber(e.height) ? e.width = e.height * this.aspectRatio : this._isNumber(e.width) && (e.height = e.width / this.aspectRatio), "sw" === r && (e.left = t.left + (n.width - e.width), e.top = null), "nw" === r && (e.top = t.top + (n.height - e.height), e.left = t.left + (n.width - e.width)), e
            },
            _respectSize: function(e) {
                var t = this._vBoundaries,
                    n = this.axis,
                    r = this._isNumber(e.width) && t.maxWidth && t.maxWidth < e.width,
                    i = this._isNumber(e.height) && t.maxHeight && t.maxHeight < e.height,
                    s = this._isNumber(e.width) && t.minWidth && t.minWidth > e.width,
                    o = this._isNumber(e.height) && t.minHeight && t.minHeight > e.height,
                    u = this.originalPosition.left + this.originalSize.width,
                    a = this.position.top + this.size.height,
                    f = /sw|nw|w/.test(n),
                    l = /nw|ne|n/.test(n);
                return s && (e.width = t.minWidth), o && (e.height = t.minHeight), r && (e.width = t.maxWidth), i && (e.height = t.maxHeight), s && f && (e.left = u - t.minWidth), r && f && (e.left = u - t.maxWidth), o && l && (e.top = a - t.minHeight), i && l && (e.top = a - t.maxHeight), e.width || e.height || e.left || !e.top ? e.width || e.height || e.top || !e.left || (e.left = null) : e.top = null, e
            },
            _getPaddingPlusBorderDimensions: function(e) {
                for (var t = 0, n = [], r = [e.css("borderTopWidth"), e.css("borderRightWidth"), e.css("borderBottomWidth"), e.css("borderLeftWidth")], i = [e.css("paddingTop"), e.css("paddingRight"), e.css("paddingBottom"), e.css("paddingLeft")]; 4 > t; t++) n[t] = parseInt(r[t], 10) || 0, n[t] += parseInt(i[t], 10) || 0;
                return {
                    height: n[0] + n[2],
                    width: n[1] + n[3]
                }
            },
            _proportionallyResize: function() {
                if (this._proportionallyResizeElements.length)
                    for (var e, t = 0, n = this.helper || this.element; this._proportionallyResizeElements.length > t; t++) e = this._proportionallyResizeElements[t], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(e)), e.css({
                        height: n.height() - this.outerDimensions.height || 0,
                        width: n.width() - this.outerDimensions.width || 0
                    })
            },
            _renderProxy: function() {
                var t = this.element,
                    n = this.options;
                this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() - 1,
                    height: this.element.outerHeight() - 1,
                    position: "absolute",
                    left: this.elementOffset.left + "px",
                    top: this.elementOffset.top + "px",
                    zIndex: ++n.zIndex
                }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
            },
            _change: {
                e: function(e, t) {
                    return {
                        width: this.originalSize.width + t
                    }
                },
                w: function(e, t) {
                    var n = this.originalSize,
                        r = this.originalPosition;
                    return {
                        left: r.left + t,
                        width: n.width - t
                    }
                },
                n: function(e, t, n) {
                    var r = this.originalSize,
                        i = this.originalPosition;
                    return {
                        top: i.top + n,
                        height: r.height - n
                    }
                },
                s: function(e, t, n) {
                    return {
                        height: this.originalSize.height + n
                    }
                },
                se: function(t, n, r) {
                    return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, n, r]))
                },
                sw: function(t, n, r) {
                    return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, n, r]))
                },
                ne: function(t, n, r) {
                    return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, n, r]))
                },
                nw: function(t, n, r) {
                    return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, n, r]))
                }
            },
            _propagate: function(t, n) {
                e.ui.plugin.call(this, t, [n, this.ui()]), "resize" !== t && this._trigger(t, n, this.ui())
            },
            plugins: {},
            ui: function() {
                return {
                    originalElement: this.originalElement,
                    element: this.element,
                    helper: this.helper,
                    position: this.position,
                    size: this.size,
                    originalSize: this.originalSize,
                    originalPosition: this.originalPosition
                }
            }
        }), e.ui.plugin.add("resizable", "animate", {
            stop: function(t) {
                var n = e(this).resizable("instance"),
                    r = n.options,
                    i = n._proportionallyResizeElements,
                    s = i.length && /textarea/i.test(i[0].nodeName),
                    o = s && n._hasScroll(i[0], "left") ? 0 : n.sizeDiff.height,
                    u = s ? 0 : n.sizeDiff.width,
                    a = {
                        width: n.size.width - u,
                        height: n.size.height - o
                    },
                    f = parseInt(n.element.css("left"), 10) + (n.position.left - n.originalPosition.left) || null,
                    l = parseInt(n.element.css("top"), 10) + (n.position.top - n.originalPosition.top) || null;
                n.element.animate(e.extend(a, l && f ? {
                    top: l,
                    left: f
                } : {}), {
                    duration: r.animateDuration,
                    easing: r.animateEasing,
                    step: function() {
                        var r = {
                            width: parseInt(n.element.css("width"), 10),
                            height: parseInt(n.element.css("height"), 10),
                            top: parseInt(n.element.css("top"), 10),
                            left: parseInt(n.element.css("left"), 10)
                        };
                        i && i.length && e(i[0]).css({
                            width: r.width,
                            height: r.height
                        }), n._updateCache(r), n._propagate("resize", t)
                    }
                })
            }
        }), e.ui.plugin.add("resizable", "containment", {
            start: function() {
                var t, n, r, i, s, o, u, a = e(this).resizable("instance"),
                    f = a.options,
                    l = a.element,
                    c = f.containment,
                    h = c instanceof e ? c.get(0) : /parent/.test(c) ? l.parent().get(0) : c;
                h && (a.containerElement = e(h), /document/.test(c) || c === document ? (a.containerOffset = {
                    left: 0,
                    top: 0
                }, a.containerPosition = {
                    left: 0,
                    top: 0
                }, a.parentData = {
                    element: e(document),
                    left: 0,
                    top: 0,
                    width: e(document).width(),
                    height: e(document).height() || document.body.parentNode.scrollHeight
                }) : (t = e(h), n = [], e(["Top", "Right", "Left", "Bottom"]).each(function(e, r) {
                    n[e] = a._num(t.css("padding" + r))
                }), a.containerOffset = t.offset(), a.containerPosition = t.position(), a.containerSize = {
                    height: t.innerHeight() - n[3],
                    width: t.innerWidth() - n[1]
                }, r = a.containerOffset, i = a.containerSize.height, s = a.containerSize.width, o = a._hasScroll(h, "left") ? h.scrollWidth : s, u = a._hasScroll(h) ? h.scrollHeight : i, a.parentData = {
                    element: h,
                    left: r.left,
                    top: r.top,
                    width: o,
                    height: u
                }))
            },
            resize: function(t) {
                var n, r, i, s, o = e(this).resizable("instance"),
                    u = o.options,
                    a = o.containerOffset,
                    f = o.position,
                    l = o._aspectRatio || t.shiftKey,
                    c = {
                        top: 0,
                        left: 0
                    },
                    h = o.containerElement,
                    p = !0;
                h[0] !== document && /static/.test(h.css("position")) && (c = a), f.left < (o._helper ? a.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - a.left : o.position.left - c.left), l && (o.size.height = o.size.width / o.aspectRatio, p = !1), o.position.left = u.helper ? a.left : 0), f.top < (o._helper ? a.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - a.top : o.position.top), l && (o.size.width = o.size.height * o.aspectRatio, p = !1), o.position.top = o._helper ? a.top : 0), i = o.containerElement.get(0) === o.element.parent().get(0), s = /relative|absolute/.test(o.containerElement.css("position")), i && s ? (o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top) : (o.offset.left = o.element.offset().left, o.offset.top = o.element.offset().top), n = Math.abs(o.sizeDiff.width + (o._helper ? o.offset.left - c.left : o.offset.left - a.left)), r = Math.abs(o.sizeDiff.height + (o._helper ? o.offset.top - c.top : o.offset.top - a.top)), n + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - n, l && (o.size.height = o.size.width / o.aspectRatio, p = !1)), r + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - r, l && (o.size.width = o.size.height * o.aspectRatio, p = !1)), p || (o.position.left = o.prevPosition.left, o.position.top = o.prevPosition.top, o.size.width = o.prevSize.width, o.size.height = o.prevSize.height)
            },
            stop: function() {
                var t = e(this).resizable("instance"),
                    n = t.options,
                    r = t.containerOffset,
                    i = t.containerPosition,
                    s = t.containerElement,
                    o = e(t.helper),
                    u = o.offset(),
                    a = o.outerWidth() - t.sizeDiff.width,
                    f = o.outerHeight() - t.sizeDiff.height;
                t._helper && !n.animate && /relative/.test(s.css("position")) && e(this).css({
                    left: u.left - i.left - r.left,
                    width: a,
                    height: f
                }), t._helper && !n.animate && /static/.test(s.css("position")) && e(this).css({
                    left: u.left - i.left - r.left,
                    width: a,
                    height: f
                })
            }
        }), e.ui.plugin.add("resizable", "alsoResize", {
            start: function() {
                var t = e(this).resizable("instance"),
                    n = t.options,
                    r = function(t) {
                        e(t).each(function() {
                            var t = e(this);
                            t.data("ui-resizable-alsoresize", {
                                width: parseInt(t.width(), 10),
                                height: parseInt(t.height(), 10),
                                left: parseInt(t.css("left"), 10),
                                top: parseInt(t.css("top"), 10)
                            })
                        })
                    };
                "object" != typeof n.alsoResize || n.alsoResize.parentNode ? r(n.alsoResize) : n.alsoResize.length ? (n.alsoResize = n.alsoResize[0], r(n.alsoResize)) : e.each(n.alsoResize, function(e) {
                    r(e)
                })
            },
            resize: function(t, n) {
                var r = e(this).resizable("instance"),
                    i = r.options,
                    s = r.originalSize,
                    o = r.originalPosition,
                    u = {
                        height: r.size.height - s.height || 0,
                        width: r.size.width - s.width || 0,
                        top: r.position.top - o.top || 0,
                        left: r.position.left - o.left || 0
                    },
                    a = function(t, r) {
                        e(t).each(function() {
                            var t = e(this),
                                i = e(this).data("ui-resizable-alsoresize"),
                                s = {},
                                o = r && r.length ? r : t.parents(n.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                            e.each(o, function(e, t) {
                                var n = (i[t] || 0) + (u[t] || 0);
                                n && n >= 0 && (s[t] = n || null)
                            }), t.css(s)
                        })
                    };
                "object" != typeof i.alsoResize || i.alsoResize.nodeType ? a(i.alsoResize) : e.each(i.alsoResize, function(e, t) {
                    a(e, t)
                })
            },
            stop: function() {
                e(this).removeData("resizable-alsoresize")
            }
        }), e.ui.plugin.add("resizable", "ghost", {
            start: function() {
                var t = e(this).resizable("instance"),
                    n = t.options,
                    r = t.size;
                t.ghost = t.originalElement.clone(), t.ghost.css({
                    opacity: .25,
                    display: "block",
                    position: "relative",
                    height: r.height,
                    width: r.width,
                    margin: 0,
                    left: 0,
                    top: 0
                }).addClass("ui-resizable-ghost").addClass("string" == typeof n.ghost ? n.ghost : ""), t.ghost.appendTo(t.helper)
            },
            resize: function() {
                var t = e(this).resizable("instance");
                t.ghost && t.ghost.css({
                    position: "relative",
                    height: t.size.height,
                    width: t.size.width
                })
            },
            stop: function() {
                var t = e(this).resizable("instance");
                t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
            }
        }), e.ui.plugin.add("resizable", "grid", {
            resize: function() {
                var t, n = e(this).resizable("instance"),
                    r = n.options,
                    i = n.size,
                    s = n.originalSize,
                    o = n.originalPosition,
                    u = n.axis,
                    a = "number" == typeof r.grid ? [r.grid, r.grid] : r.grid,
                    f = a[0] || 1,
                    l = a[1] || 1,
                    c = Math.round((i.width - s.width) / f) * f,
                    h = Math.round((i.height - s.height) / l) * l,
                    p = s.width + c,
                    d = s.height + h,
                    v = r.maxWidth && p > r.maxWidth,
                    m = r.maxHeight && d > r.maxHeight,
                    g = r.minWidth && r.minWidth > p,
                    y = r.minHeight && r.minHeight > d;
                r.grid = a, g && (p += f), y && (d += l), v && (p -= f), m && (d -= l), /^(se|s|e)$/.test(u) ? (n.size.width = p, n.size.height = d) : /^(ne)$/.test(u) ? (n.size.width = p, n.size.height = d, n.position.top = o.top - h) : /^(sw)$/.test(u) ? (n.size.width = p, n.size.height = d, n.position.left = o.left - c) : ((0 >= d - l || 0 >= p - f) && (t = n._getPaddingPlusBorderDimensions(this)), d - l > 0 ? (n.size.height = d, n.position.top = o.top - h) : (d = l - t.height, n.size.height = d, n.position.top = o.top + s.height - d), p - f > 0 ? (n.size.width = p, n.position.left = o.left - c) : (p = l - t.height, n.size.width = p, n.position.left = o.left + s.width - p))
            }
        }), e.ui.resizable, e.widget("ui.selectable", e.ui.mouse, {
            version: "1.11.1",
            options: {
                appendTo: "body",
                autoRefresh: !0,
                distance: 0,
                filter: "*",
                tolerance: "touch",
                selected: null,
                selecting: null,
                start: null,
                stop: null,
                unselected: null,
                unselecting: null
            },
            _create: function() {
                var t, n = this;
                this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                    t = e(n.options.filter, n.element[0]), t.addClass("ui-selectee"), t.each(function() {
                        var t = e(this),
                            n = t.offset();
                        e.data(this, "selectable-item", {
                            element: this,
                            $element: t,
                            left: n.left,
                            top: n.top,
                            right: n.left + t.outerWidth(),
                            bottom: n.top + t.outerHeight(),
                            startselected: !1,
                            selected: t.hasClass("ui-selected"),
                            selecting: t.hasClass("ui-selecting"),
                            unselecting: t.hasClass("ui-unselecting")
                        })
                    })
                }, this.refresh(), this.selectees = t.addClass("ui-selectee"), this._mouseInit(), this.helper = e("<div class='ui-selectable-helper'></div>")
            },
            _destroy: function() {
                this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
            },
            _mouseStart: function(t) {
                var n = this,
                    r = this.options;
                this.opos = [t.pageX, t.pageY], this.options.disabled || (this.selectees = e(r.filter, this.element[0]), this._trigger("start", t), e(r.appendTo).append(this.helper), this.helper.css({
                    left: t.pageX,
                    top: t.pageY,
                    width: 0,
                    height: 0
                }), r.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                    var r = e.data(this, "selectable-item");
                    r.startselected = !0, t.metaKey || t.ctrlKey || (r.$element.removeClass("ui-selected"), r.selected = !1, r.$element.addClass("ui-unselecting"), r.unselecting = !0, n._trigger("unselecting", t, {
                        unselecting: r.element
                    }))
                }), e(t.target).parents().addBack().each(function() {
                    var r, i = e.data(this, "selectable-item");
                    return i ? (r = !t.metaKey && !t.ctrlKey || !i.$element.hasClass("ui-selected"), i.$element.removeClass(r ? "ui-unselecting" : "ui-selected").addClass(r ? "ui-selecting" : "ui-unselecting"), i.unselecting = !r, i.selecting = r, i.selected = r, r ? n._trigger("selecting", t, {
                        selecting: i.element
                    }) : n._trigger("unselecting", t, {
                        unselecting: i.element
                    }), !1) : void 0
                }))
            },
            _mouseDrag: function(t) {
                if (this.dragged = !0, !this.options.disabled) {
                    var n, r = this,
                        i = this.options,
                        s = this.opos[0],
                        o = this.opos[1],
                        u = t.pageX,
                        a = t.pageY;
                    return s > u && (n = u, u = s, s = n), o > a && (n = a, a = o, o = n), this.helper.css({
                        left: s,
                        top: o,
                        width: u - s,
                        height: a - o
                    }), this.selectees.each(function() {
                        var n = e.data(this, "selectable-item"),
                            f = !1;
                        n && n.element !== r.element[0] && ("touch" === i.tolerance ? f = !(n.left > u || s > n.right || n.top > a || o > n.bottom) : "fit" === i.tolerance && (f = n.left > s && u > n.right && n.top > o && a > n.bottom), f ? (n.selected && (n.$element.removeClass("ui-selected"), n.selected = !1), n.unselecting && (n.$element.removeClass("ui-unselecting"), n.unselecting = !1), n.selecting || (n.$element.addClass("ui-selecting"), n.selecting = !0, r._trigger("selecting", t, {
                            selecting: n.element
                        }))) : (n.selecting && ((t.metaKey || t.ctrlKey) && n.startselected ? (n.$element.removeClass("ui-selecting"), n.selecting = !1, n.$element.addClass("ui-selected"), n.selected = !0) : (n.$element.removeClass("ui-selecting"), n.selecting = !1, n.startselected && (n.$element.addClass("ui-unselecting"), n.unselecting = !0), r._trigger("unselecting", t, {
                            unselecting: n.element
                        }))), n.selected && (t.metaKey || t.ctrlKey || n.startselected || (n.$element.removeClass("ui-selected"), n.selected = !1, n.$element.addClass("ui-unselecting"), n.unselecting = !0, r._trigger("unselecting", t, {
                            unselecting: n.element
                        })))))
                    }), !1
                }
            },
            _mouseStop: function(t) {
                var n = this;
                return this.dragged = !1, e(".ui-unselecting", this.element[0]).each(function() {
                    var r = e.data(this, "selectable-item");
                    r.$element.removeClass("ui-unselecting"), r.unselecting = !1, r.startselected = !1, n._trigger("unselected", t, {
                        unselected: r.element
                    })
                }), e(".ui-selecting", this.element[0]).each(function() {
                    var r = e.data(this, "selectable-item");
                    r.$element.removeClass("ui-selecting").addClass("ui-selected"), r.selecting = !1, r.selected = !0, r.startselected = !0, n._trigger("selected", t, {
                        selected: r.element
                    })
                }), this._trigger("stop", t), this.helper.remove(), !1
            }
        }), e.widget("ui.sortable", e.ui.mouse, {
            version: "1.11.1",
            widgetEventPrefix: "sort",
            ready: !1,
            options: {
                appendTo: "parent",
                axis: !1,
                connectWith: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                dropOnEmpty: !0,
                forcePlaceholderSize: !1,
                forceHelperSize: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                items: "> *",
                opacity: !1,
                placeholder: !1,
                revert: !1,
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                scope: "default",
                tolerance: "intersect",
                zIndex: 1e3,
                activate: null,
                beforeStop: null,
                change: null,
                deactivate: null,
                out: null,
                over: null,
                receive: null,
                remove: null,
                sort: null,
                start: null,
                stop: null,
                update: null
            },
            _isOverAxis: function(e, t, n) {
                return e >= t && t + n > e
            },
            _isFloating: function(e) {
                return /left|right/.test(e.css("float")) || /inline|table-cell/.test(e.css("display"))
            },
            _create: function() {
                var e = this.options;
                this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === e.axis || this._isFloating(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
            },
            _setOption: function(e, t) {
                this._super(e, t), "handle" === e && this._setHandleClassName()
            },
            _setHandleClassName: function() {
                this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), e.each(this.items, function() {
                    (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
                })
            },
            _destroy: function() {
                this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), this._mouseDestroy();
                for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + "-item");
                return this
            },
            _mouseCapture: function(t, n) {
                var r = null,
                    i = !1,
                    s = this;
                return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(t), e(t.target).parents().each(function() {
                    return e.data(this, s.widgetName + "-item") === s ? (r = e(this), !1) : void 0
                }), e.data(t.target, s.widgetName + "-item") === s && (r = e(t.target)), r ? !this.options.handle || n || (e(this.options.handle, r).find("*").addBack().each(function() {
                    this === t.target && (i = !0)
                }), i) ? (this.currentItem = r, this._removeCurrentsFromItems(), !0) : !1 : !1)
            },
            _mouseStart: function(t, n, r) {
                var i, s, o = this.options;
                if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                        top: this.offset.top - this.margins.top,
                        left: this.offset.left - this.margins.left
                    }, e.extend(this.offset, {
                        click: {
                            left: t.pageX - this.offset.left,
                            top: t.pageY - this.offset.top
                        },
                        parent: this._getParentOffset(),
                        relative: this._getRelativeOffset()
                    }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = {
                        prev: this.currentItem.prev()[0],
                        parent: this.currentItem.parent()[0]
                    }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (s = this.document.find("body"), this.storedCursor = s.css("cursor"), s.css("cursor", o.cursor), this.storedStylesheet = e("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(s)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !r)
                    for (i = this.containers.length - 1; i >= 0; i--) this.containers[i]._trigger("activate", t, this._uiHash(this));
                return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
            },
            _mouseDrag: function(t) {
                var n, r, i, s, o = this.options,
                    u = !1;
                for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = u = this.scrollParent[0].scrollTop + o.scrollSpeed : t.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = u = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = u = this.scrollParent[0].scrollLeft + o.scrollSpeed : t.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = u = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (t.pageY - e(document).scrollTop() < o.scrollSensitivity ? u = e(document).scrollTop(e(document).scrollTop() - o.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < o.scrollSensitivity && (u = e(document).scrollTop(e(document).scrollTop() + o.scrollSpeed)), t.pageX - e(document).scrollLeft() < o.scrollSensitivity ? u = e(document).scrollLeft(e(document).scrollLeft() - o.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < o.scrollSensitivity && (u = e(document).scrollLeft(e(document).scrollLeft() + o.scrollSpeed))), u !== !1 && e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), n = this.items.length - 1; n >= 0; n--)
                    if (r = this.items[n], i = r.item[0], s = this._intersectsWithPointer(r), s && r.instance === this.currentContainer && i !== this.currentItem[0] && this.placeholder[1 === s ? "next" : "prev"]()[0] !== i && !e.contains(this.placeholder[0], i) && ("semi-dynamic" === this.options.type ? !e.contains(this.element[0], i) : !0)) {
                        if (this.direction = 1 === s ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(r)) break;
                        this._rearrange(t, r), this._trigger("change", t, this._uiHash());
                        break
                    }
                return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
            },
            _mouseStop: function(t, n) {
                if (t) {
                    if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), this.options.revert) {
                        var r = this,
                            i = this.placeholder.offset(),
                            s = this.options.axis,
                            o = {};
                        s && "x" !== s || (o.left = i.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), s && "y" !== s || (o.top = i.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, e(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function() {
                            r._clear(t)
                        })
                    } else this._clear(t, n);
                    return !1
                }
            },
            cancel: function() {
                if (this.dragging) {
                    this._mouseUp({
                        target: null
                    }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                    for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
                }
                return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
                    helper: null,
                    dragging: !1,
                    reverting: !1,
                    _noFinalSort: null
                }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this
            },
            serialize: function(t) {
                var n = this._getItemsAsjQuery(t && t.connected),
                    r = [];
                return t = t || {}, e(n).each(function() {
                    var n = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
                    n && r.push((t.key || n[1] + "[]") + "=" + (t.key && t.expression ? n[1] : n[2]))
                }), !r.length && t.key && r.push(t.key + "="), r.join("&")
            },
            toArray: function(t) {
                var n = this._getItemsAsjQuery(t && t.connected),
                    r = [];
                return t = t || {}, n.each(function() {
                    r.push(e(t.item || this).attr(t.attribute || "id") || "")
                }), r
            },
            _intersectsWith: function(e) {
                var t = this.positionAbs.left,
                    n = t + this.helperProportions.width,
                    r = this.positionAbs.top,
                    i = r + this.helperProportions.height,
                    s = e.left,
                    o = s + e.width,
                    u = e.top,
                    a = u + e.height,
                    f = this.offset.click.top,
                    l = this.offset.click.left,
                    c = "x" === this.options.axis || r + f > u && a > r + f,
                    h = "y" === this.options.axis || t + l > s && o > t + l,
                    p = c && h;
                return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? p : t + this.helperProportions.width / 2 > s && o > n - this.helperProportions.width / 2 && r + this.helperProportions.height / 2 > u && a > i - this.helperProportions.height / 2
            },
            _intersectsWithPointer: function(e) {
                var t = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height),
                    n = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width),
                    r = t && n,
                    i = this._getDragVerticalDirection(),
                    s = this._getDragHorizontalDirection();
                return r ? this.floating ? s && "right" === s || "down" === i ? 2 : 1 : i && ("down" === i ? 2 : 1) : !1
            },
            _intersectsWithSides: function(e) {
                var t = this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height),
                    n = this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
                    r = this._getDragVerticalDirection(),
                    i = this._getDragHorizontalDirection();
                return this.floating && i ? "right" === i && n || "left" === i && !n : r && ("down" === r && t || "up" === r && !t)
            },
            _getDragVerticalDirection: function() {
                var e = this.positionAbs.top - this.lastPositionAbs.top;
                return 0 !== e && (e > 0 ? "down" : "up")
            },
            _getDragHorizontalDirection: function() {
                var e = this.positionAbs.left - this.lastPositionAbs.left;
                return 0 !== e && (e > 0 ? "right" : "left")
            },
            refresh: function(e) {
                return this._refreshItems(e), this._setHandleClassName(), this.refreshPositions(), this
            },
            _connectWith: function() {
                var e = this.options;
                return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith
            },
            _getItemsAsjQuery: function(t) {
                function n() {
                    u.push(this)
                }
                var r, i, s, o, u = [],
                    a = [],
                    f = this._connectWith();
                if (f && t)
                    for (r = f.length - 1; r >= 0; r--)
                        for (s = e(f[r]), i = s.length - 1; i >= 0; i--) o = e.data(s[i], this.widgetFullName), o && o !== this && !o.options.disabled && a.push([e.isFunction(o.options.items) ? o.options.items.call(o.element) : e(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);
                for (a.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                        options: this.options,
                        item: this.currentItem
                    }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), r = a.length - 1; r >= 0; r--) a[r][0].each(n);
                return e(u)
            },
            _removeCurrentsFromItems: function() {
                var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
                this.items = e.grep(this.items, function(e) {
                    for (var n = 0; t.length > n; n++)
                        if (t[n] === e.item[0]) return !1;
                    return !0
                })
            },
            _refreshItems: function(t) {
                this.items = [], this.containers = [this];
                var n, r, i, s, o, u, a, f, l = this.items,
                    c = [
                        [e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                            item: this.currentItem
                        }) : e(this.options.items, this.element), this]
                    ],
                    h = this._connectWith();
                if (h && this.ready)
                    for (n = h.length - 1; n >= 0; n--)
                        for (i = e(h[n]), r = i.length - 1; r >= 0; r--) s = e.data(i[r], this.widgetFullName), s && s !== this && !s.options.disabled && (c.push([e.isFunction(s.options.items) ? s.options.items.call(s.element[0], t, {
                            item: this.currentItem
                        }) : e(s.options.items, s.element), s]), this.containers.push(s));
                for (n = c.length - 1; n >= 0; n--)
                    for (o = c[n][1], u = c[n][0], r = 0, f = u.length; f > r; r++) a = e(u[r]), a.data(this.widgetName + "-item", o), l.push({
                        item: a,
                        instance: o,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
            },
            refreshPositions: function(t) {
                this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                var n, r, i, s;
                for (n = this.items.length - 1; n >= 0; n--) r = this.items[n], r.instance !== this.currentContainer && this.currentContainer && r.item[0] !== this.currentItem[0] || (i = this.options.toleranceElement ? e(this.options.toleranceElement, r.item) : r.item, t || (r.width = i.outerWidth(), r.height = i.outerHeight()), s = i.offset(), r.left = s.left, r.top = s.top);
                if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                else
                    for (n = this.containers.length - 1; n >= 0; n--) s = this.containers[n].element.offset(), this.containers[n].containerCache.left = s.left, this.containers[n].containerCache.top = s.top, this.containers[n].containerCache.width = this.containers[n].element.outerWidth(), this.containers[n].containerCache.height = this.containers[n].element.outerHeight();
                return this
            },
            _createPlaceholder: function(t) {
                t = t || this;
                var n, r = t.options;
                r.placeholder && r.placeholder.constructor !== String || (n = r.placeholder, r.placeholder = {
                    element: function() {
                        var r = t.currentItem[0].nodeName.toLowerCase(),
                            i = e("<" + r + ">", t.document[0]).addClass(n || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                        return "tr" === r ? t.currentItem.children().each(function() {
                            e("<td> </td>", t.document[0]).attr("colspan", e(this).attr("colspan") || 1).appendTo(i)
                        }) : "img" === r && i.attr("src", t.currentItem.attr("src")), n || i.css("visibility", "hidden"), i
                    },
                    update: function(e, i) {
                        (!n || r.forcePlaceholderSize) && (i.height() || i.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), i.width() || i.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
                    }
                }), t.placeholder = e(r.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), r.placeholder.update(t, t.placeholder)
            },
            _contactContainers: function(t) {
                var n, r, i, s, o, u, a, f, l, c, h = null,
                    p = null;
                for (n = this.containers.length - 1; n >= 0; n--)
                    if (!e.contains(this.currentItem[0], this.containers[n].element[0]))
                        if (this._intersectsWith(this.containers[n].containerCache)) {
                            if (h && e.contains(this.containers[n].element[0], h.element[0])) continue;
                            h = this.containers[n], p = n
                        } else this.containers[n].containerCache.over && (this.containers[n]._trigger("out", t, this._uiHash(this)), this.containers[n].containerCache.over = 0);
                if (h)
                    if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", t, this._uiHash(this)), this.containers[p].containerCache.over = 1);
                    else {
                        for (i = 1e4, s = null, l = h.floating || this._isFloating(this.currentItem), o = l ? "left" : "top", u = l ? "width" : "height", c = l ? "clientX" : "clientY", r = this.items.length - 1; r >= 0; r--) e.contains(this.containers[p].element[0], this.items[r].item[0]) && this.items[r].item[0] !== this.currentItem[0] && (a = this.items[r].item.offset()[o], f = !1, t[c] - a > this.items[r][u] / 2 && (f = !0), i > Math.abs(t[c] - a) && (i = Math.abs(t[c] - a), s = this.items[r], this.direction = f ? "up" : "down"));
                        if (!s && !this.options.dropOnEmpty) return;
                        if (this.currentContainer === this.containers[p]) return;
                        s ? this._rearrange(t, s, null, !0) : this._rearrange(t, null, this.containers[p].element, !0), this._trigger("change", t, this._uiHash()), this.containers[p]._trigger("change", t, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", t, this._uiHash(this)), this.containers[p].containerCache.over = 1
                    }
            },
            _createHelper: function(t) {
                var n = this.options,
                    r = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === n.helper ? this.currentItem.clone() : this.currentItem;
                return r.parents("body").length || e("parent" !== n.appendTo ? n.appendTo : this.currentItem[0].parentNode)[0].appendChild(r[0]), r[0] === this.currentItem[0] && (this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                }), (!r[0].style.width || n.forceHelperSize) && r.width(this.currentItem.width()), (!r[0].style.height || n.forceHelperSize) && r.height(this.currentItem.height()), r
            },
            _adjustOffsetFromHelper: function(t) {
                "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                    left: +t[0],
                    top: +t[1] || 0
                }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
            },
            _getParentOffset: function() {
                this.offsetParent = this.helper.offsetParent();
                var t = this.offsetParent.offset();
                return "absolute" === this.cssPosition && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
                    top: 0,
                    left: 0
                }), {
                    top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if ("relative" === this.cssPosition) {
                    var e = this.currentItem.position();
                    return {
                        top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {
                    top: 0,
                    left: 0
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                    top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var t, n, r, i = this.options;
                "parent" === i.containment && (i.containment = this.helper[0].parentNode), ("document" === i.containment || "window" === i.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, e("document" === i.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (e("document" === i.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(i.containment) || (t = e(i.containment)[0], n = e(i.containment).offset(), r = "hidden" !== e(t).css("overflow"), this.containment = [n.left + (parseInt(e(t).css("borderLeftWidth"), 10) || 0) + (parseInt(e(t).css("paddingLeft"), 10) || 0) - this.margins.left, n.top + (parseInt(e(t).css("borderTopWidth"), 10) || 0) + (parseInt(e(t).css("paddingTop"), 10) || 0) - this.margins.top, n.left + (r ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(e(t).css("borderLeftWidth"), 10) || 0) - (parseInt(e(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, n.top + (r ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(e(t).css("borderTopWidth"), 10) || 0) - (parseInt(e(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
            },
            _convertPositionTo: function(t, n) {
                n || (n = this.position);
                var r = "absolute" === t ? 1 : -1,
                    i = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    s = /(html|body)/i.test(i[0].tagName);
                return {
                    top: n.top + this.offset.relative.top * r + this.offset.parent.top * r - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : i.scrollTop()) * r,
                    left: n.left + this.offset.relative.left * r + this.offset.parent.left * r - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : i.scrollLeft()) * r
                }
            },
            _generatePosition: function(t) {
                var n, r, i = this.options,
                    s = t.pageX,
                    o = t.pageY,
                    u = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    a = /(html|body)/i.test(u[0].tagName);
                return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (s = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (s = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), i.grid && (n = this.originalPageY + Math.round((o - this.originalPageY) / i.grid[1]) * i.grid[1], o = this.containment ? n - this.offset.click.top >= this.containment[1] && n - this.offset.click.top <= this.containment[3] ? n : n - this.offset.click.top >= this.containment[1] ? n - i.grid[1] : n + i.grid[1] : n, r = this.originalPageX + Math.round((s - this.originalPageX) / i.grid[0]) * i.grid[0], s = this.containment ? r - this.offset.click.left >= this.containment[0] && r - this.offset.click.left <= this.containment[2] ? r : r - this.offset.click.left >= this.containment[0] ? r - i.grid[0] : r + i.grid[0] : r)), {
                    top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : u.scrollTop()),
                    left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : u.scrollLeft())
                }
            },
            _rearrange: function(e, t, n, r) {
                n ? n[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
                var i = this.counter;
                this._delay(function() {
                    i === this.counter && this.refreshPositions(!r)
                })
            },
            _clear: function(e, t) {
                function n(e, t, n) {
                    return function(r) {
                        n._trigger(e, r, t._uiHash(t))
                    }
                }
                this.reverting = !1;
                var r, i = [];
                if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                    for (r in this._storedCSS)("auto" === this._storedCSS[r] || "static" === this._storedCSS[r]) && (this._storedCSS[r] = "");
                    this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                } else this.currentItem.show();
                for (this.fromOutside && !t && i.push(function(e) {
                        this._trigger("receive", e, this._uiHash(this.fromOutside))
                    }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || i.push(function(e) {
                        this._trigger("update", e, this._uiHash())
                    }), this !== this.currentContainer && (t || (i.push(function(e) {
                        this._trigger("remove", e, this._uiHash())
                    }), i.push(function(e) {
                        return function(t) {
                            e._trigger("receive", t, this._uiHash(this))
                        }
                    }.call(this, this.currentContainer)), i.push(function(e) {
                        return function(t) {
                            e._trigger("update", t, this._uiHash(this))
                        }
                    }.call(this, this.currentContainer)))), r = this.containers.length - 1; r >= 0; r--) t || i.push(n("deactivate", this, this.containers[r])), this.containers[r].containerCache.over && (i.push(n("out", this, this.containers[r])), this.containers[r].containerCache.over = 0);
                if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                    if (!t) {
                        for (this._trigger("beforeStop", e, this._uiHash()), r = 0; i.length > r; r++) i[r].call(this, e);
                        this._trigger("stop", e, this._uiHash())
                    }
                    return this.fromOutside = !1, !1
                }
                if (t || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !t) {
                    for (r = 0; i.length > r; r++) i[r].call(this, e);
                    this._trigger("stop", e, this._uiHash())
                }
                return this.fromOutside = !1, !0
            },
            _trigger: function() {
                e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
            },
            _uiHash: function(t) {
                var n = t || this;
                return {
                    helper: n.helper,
                    placeholder: n.placeholder || e([]),
                    position: n.position,
                    originalPosition: n.originalPosition,
                    offset: n.positionAbs,
                    item: n.currentItem,
                    sender: t ? t.element : null
                }
            }
        }), e.widget("ui.accordion", {
            version: "1.11.1",
            options: {
                active: 0,
                animate: {},
                collapsible: !1,
                event: "click",
                header: "> li > :first-child,> :not(li):even",
                heightStyle: "auto",
                icons: {
                    activeHeader: "ui-icon-triangle-1-s",
                    header: "ui-icon-triangle-1-e"
                },
                activate: null,
                beforeActivate: null
            },
            hideProps: {
                borderTopWidth: "hide",
                borderBottomWidth: "hide",
                paddingTop: "hide",
                paddingBottom: "hide",
                height: "hide"
            },
            showProps: {
                borderTopWidth: "show",
                borderBottomWidth: "show",
                paddingTop: "show",
                paddingBottom: "show",
                height: "show"
            },
            _create: function() {
                var t = this.options;
                this.prevShow = this.prevHide = e(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), t.collapsible || t.active !== !1 && null != t.active || (t.active = 0), this._processPanels(), 0 > t.active && (t.active += this.headers.length), this._refresh()
            },
            _getCreateEventData: function() {
                return {
                    header: this.active,
                    panel: this.active.length ? this.active.next() : e()
                }
            },
            _createIcons: function() {
                var t = this.options.icons;
                t && (e("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons"))
            },
            _destroyIcons: function() {
                this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
            },
            _destroy: function() {
                var e;
                this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(), this._destroyIcons(), e = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && e.css("height", "")
            },
            _setOption: function(e, t) {
                return "active" === e ? (this._activate(t), void 0) : ("event" === e && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(e, t), "collapsible" !== e || t || this.options.active !== !1 || this._activate(0), "icons" === e && (this._destroyIcons(), t && this._createIcons()), "disabled" === e && (this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!t)), void 0)
            },
            _keydown: function(t) {
                if (!t.altKey && !t.ctrlKey) {
                    var n = e.ui.keyCode,
                        r = this.headers.length,
                        i = this.headers.index(t.target),
                        s = !1;
                    switch (t.keyCode) {
                        case n.RIGHT:
                        case n.DOWN:
                            s = this.headers[(i + 1) % r];
                            break;
                        case n.LEFT:
                        case n.UP:
                            s = this.headers[(i - 1 + r) % r];
                            break;
                        case n.SPACE:
                        case n.ENTER:
                            this._eventHandler(t);
                            break;
                        case n.HOME:
                            s = this.headers[0];
                            break;
                        case n.END:
                            s = this.headers[r - 1]
                    }
                    s && (e(t.target).attr("tabIndex", -1), e(s).attr("tabIndex", 0), s.focus(), t.preventDefault())
                }
            },
            _panelKeyDown: function(t) {
                t.keyCode === e.ui.keyCode.UP && t.ctrlKey && e(t.currentTarget).prev().focus()
            },
            refresh: function() {
                var t = this.options;
                this._processPanels(), t.active === !1 && t.collapsible === !0 || !this.headers.length ? (t.active = !1, this.active = e()) : t.active === !1 ? this._activate(0) : this.active.length && !e.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = e()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
            },
            _processPanels: function() {
                this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
            },
            _refresh: function() {
                var t, n = this.options,
                    r = n.heightStyle,
                    i = this.element.parent();
                this.active = this._findActive(n.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function() {
                    var t = e(this),
                        n = t.uniqueId().attr("id"),
                        r = t.next(),
                        i = r.uniqueId().attr("id");
                    t.attr("aria-controls", i), r.attr("aria-labelledby", n)
                }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: -1
                }).next().attr({
                    "aria-hidden": "true"
                }).hide(), this.active.length ? this.active.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                }).next().attr({
                    "aria-hidden": "false"
                }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(n.event), "fill" === r ? (t = i.height(), this.element.siblings(":visible").each(function() {
                    var n = e(this),
                        r = n.css("position");
                    "absolute" !== r && "fixed" !== r && (t -= n.outerHeight(!0))
                }), this.headers.each(function() {
                    t -= e(this).outerHeight(!0)
                }), this.headers.next().each(function() {
                    e(this).height(Math.max(0, t - e(this).innerHeight() + e(this).height()))
                }).css("overflow", "auto")) : "auto" === r && (t = 0, this.headers.next().each(function() {
                    t = Math.max(t, e(this).css("height", "").height())
                }).height(t))
            },
            _activate: function(t) {
                var n = this._findActive(t)[0];
                n !== this.active[0] && (n = n || this.active[0], this._eventHandler({
                    target: n,
                    currentTarget: n,
                    preventDefault: e.noop
                }))
            },
            _findActive: function(t) {
                return "number" == typeof t ? this.headers.eq(t) : e()
            },
            _setupEvents: function(t) {
                var n = {
                    keydown: "_keydown"
                };
                t && e.each(t.split(" "), function(e, t) {
                    n[t] = "_eventHandler"
                }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, n), this._on(this.headers.next(), {
                    keydown: "_panelKeyDown"
                }), this._hoverable(this.headers), this._focusable(this.headers)
            },
            _eventHandler: function(t) {
                var n = this.options,
                    r = this.active,
                    i = e(t.currentTarget),
                    s = i[0] === r[0],
                    o = s && n.collapsible,
                    u = o ? e() : i.next(),
                    a = r.next(),
                    f = {
                        oldHeader: r,
                        oldPanel: a,
                        newHeader: o ? e() : i,
                        newPanel: u
                    };
                t.preventDefault(), s && !n.collapsible || this._trigger("beforeActivate", t, f) === !1 || (n.active = o ? !1 : this.headers.index(i), this.active = s ? e() : i, this._toggle(f), r.removeClass("ui-accordion-header-active ui-state-active"), n.icons && r.children(".ui-accordion-header-icon").removeClass(n.icons.activeHeader).addClass(n.icons.header), s || (i.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), n.icons && i.children(".ui-accordion-header-icon").removeClass(n.icons.header).addClass(n.icons.activeHeader), i.next().addClass("ui-accordion-content-active")))
            },
            _toggle: function(t) {
                var n = t.newPanel,
                    r = this.prevShow.length ? this.prevShow : t.oldPanel;
                this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = n, this.prevHide = r, this.options.animate ? this._animate(n, r, t) : (r.hide(), n.show(), this._toggleComplete(t)), r.attr({
                    "aria-hidden": "true"
                }), r.prev().attr("aria-selected", "false"), n.length && r.length ? r.prev().attr({
                    tabIndex: -1,
                    "aria-expanded": "false"
                }) : n.length && this.headers.filter(function() {
                    return 0 === e(this).attr("tabIndex")
                }).attr("tabIndex", -1), n.attr("aria-hidden", "false").prev().attr({
                    "aria-selected": "true",
                    tabIndex: 0,
                    "aria-expanded": "true"
                })
            },
            _animate: function(e, t, n) {
                var r, i, s, o = this,
                    u = 0,
                    a = e.length && (!t.length || e.index() < t.index()),
                    f = this.options.animate || {},
                    l = a && f.down || f,
                    c = function() {
                        o._toggleComplete(n)
                    };
                return "number" == typeof l && (s = l), "string" == typeof l && (i = l), i = i || l.easing || f.easing, s = s || l.duration || f.duration, t.length ? e.length ? (r = e.show().outerHeight(), t.animate(this.hideProps, {
                    duration: s,
                    easing: i,
                    step: function(e, t) {
                        t.now = Math.round(e)
                    }
                }), e.hide().animate(this.showProps, {
                    duration: s,
                    easing: i,
                    complete: c,
                    step: function(e, n) {
                        n.now = Math.round(e), "height" !== n.prop ? u += n.now : "content" !== o.options.heightStyle && (n.now = Math.round(r - t.outerHeight() - u), u = 0)
                    }
                }), void 0) : t.animate(this.hideProps, s, i, c) : e.animate(this.showProps, s, i, c)
            },
            _toggleComplete: function(e) {
                var t = e.oldPanel;
                t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), t.length && (t.parent()[0].className = t.parent()[0].className), this._trigger("activate", null, e)
            }
        }), e.widget("ui.menu", {
            version: "1.11.1",
            defaultElement: "<ul>",
            delay: 300,
            options: {
                icons: {
                    submenu: "ui-icon-carat-1-e"
                },
                items: "> *",
                menus: "ul",
                position: {
                    my: "left-1 top",
                    at: "right top"
                },
                role: "menu",
                blur: null,
                focus: null,
                select: null
            },
            _create: function() {
                this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                    role: this.options.role,
                    tabIndex: 0
                }), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                    "mousedown .ui-menu-item": function(e) {
                        e.preventDefault()
                    },
                    "click .ui-menu-item": function(t) {
                        var n = e(t.target);
                        !this.mouseHandled && n.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), n.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && e(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                    },
                    "mouseenter .ui-menu-item": function(t) {
                        var n = e(t.currentTarget);
                        n.siblings(".ui-state-active").removeClass("ui-state-active"), this.focus(t, n)
                    },
                    mouseleave: "collapseAll",
                    "mouseleave .ui-menu": "collapseAll",
                    focus: function(e, t) {
                        var n = this.active || this.element.find(this.options.items).eq(0);
                        t || this.focus(e, n)
                    },
                    blur: function(t) {
                        this._delay(function() {
                            e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
                        })
                    },
                    keydown: "_keydown"
                }), this.refresh(), this._on(this.document, {
                    click: function(e) {
                        this._closeOnDocumentClick(e) && this.collapseAll(e), this.mouseHandled = !1
                    }
                })
            },
            _destroy: function() {
                this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                    var t = e(this);
                    t.data("ui-menu-submenu-carat") && t.remove()
                }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
            },
            _keydown: function(t) {
                function n(e) {
                    return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                }
                var r, i, s, o, u, a = !0;
                switch (t.keyCode) {
                    case e.ui.keyCode.PAGE_UP:
                        this.previousPage(t);
                        break;
                    case e.ui.keyCode.PAGE_DOWN:
                        this.nextPage(t);
                        break;
                    case e.ui.keyCode.HOME:
                        this._move("first", "first", t);
                        break;
                    case e.ui.keyCode.END:
                        this._move("last", "last", t);
                        break;
                    case e.ui.keyCode.UP:
                        this.previous(t);
                        break;
                    case e.ui.keyCode.DOWN:
                        this.next(t);
                        break;
                    case e.ui.keyCode.LEFT:
                        this.collapse(t);
                        break;
                    case e.ui.keyCode.RIGHT:
                        this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                        break;
                    case e.ui.keyCode.ENTER:
                    case e.ui.keyCode.SPACE:
                        this._activate(t);
                        break;
                    case e.ui.keyCode.ESCAPE:
                        this.collapse(t);
                        break;
                    default:
                        a = !1, i = this.previousFilter || "", s = String.fromCharCode(t.keyCode), o = !1, clearTimeout(this.filterTimer), s === i ? o = !0 : s = i + s, u = RegExp("^" + n(s), "i"), r = this.activeMenu.find(this.options.items).filter(function() {
                            return u.test(e(this).text())
                        }), r = o && -1 !== r.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : r, r.length || (s = String.fromCharCode(t.keyCode), u = RegExp("^" + n(s), "i"), r = this.activeMenu.find(this.options.items).filter(function() {
                            return u.test(e(this).text())
                        })), r.length ? (this.focus(t, r), r.length > 1 ? (this.previousFilter = s, this.filterTimer = this._delay(function() {
                            delete this.previousFilter
                        }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
                }
                a && t.preventDefault()
            },
            _activate: function(e) {
                this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(e) : this.select(e))
            },
            refresh: function() {
                var t, n, r = this,
                    i = this.options.icons.submenu,
                    s = this.element.find(this.options.menus);
                this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                }).each(function() {
                    var t = e(this),
                        n = t.parent(),
                        r = e("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
                    n.attr("aria-haspopup", "true").prepend(r), t.attr("aria-labelledby", n.attr("id"))
                }), t = s.add(this.element), n = t.find(this.options.items), n.not(".ui-menu-item").each(function() {
                    var t = e(this);
                    r._isDivider(t) && t.addClass("ui-widget-content ui-menu-divider")
                }), n.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
                    tabIndex: -1,
                    role: this._itemRole()
                }), n.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !e.contains(this.element[0], this.active[0]) && this.blur()
            },
            _itemRole: function() {
                return {
                    menu: "menuitem",
                    listbox: "option"
                }[this.options.role]
            },
            _setOption: function(e, t) {
                "icons" === e && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu), "disabled" === e && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this._super(e, t)
            },
            focus: function(e, t) {
                var n, r;
                this.blur(e, e && "focus" === e.type), this._scrollIntoView(t), this.active = t.first(), r = this.active.addClass("ui-state-focus").removeClass("ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", r.attr("id")), this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"), e && "keydown" === e.type ? this._close() : this.timer = this._delay(function() {
                    this._close()
                }, this.delay), n = t.children(".ui-menu"), n.length && e && /^mouse/.test(e.type) && this._startOpening(n), this.activeMenu = t.parent(), this._trigger("focus", e, {
                    item: t
                })
            },
            _scrollIntoView: function(t) {
                var n, r, i, s, o, u;
                this._hasScroll() && (n = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0, r = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0, i = t.offset().top - this.activeMenu.offset().top - n - r, s = this.activeMenu.scrollTop(), o = this.activeMenu.height(), u = t.outerHeight(), 0 > i ? this.activeMenu.scrollTop(s + i) : i + u > o && this.activeMenu.scrollTop(s + i - o + u))
            },
            blur: function(e, t) {
                t || clearTimeout(this.timer), this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", e, {
                    item: this.active
                }))
            },
            _startOpening: function(e) {
                clearTimeout(this.timer), "true" === e.attr("aria-hidden") && (this.timer = this._delay(function() {
                    this._close(), this._open(e)
                }, this.delay))
            },
            _open: function(t) {
                var n = e.extend({
                    of: this.active
                }, this.options.position);
                clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(n)
            },
            collapseAll: function(t, n) {
                clearTimeout(this.timer), this.timer = this._delay(function() {
                    var r = n ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));
                    r.length || (r = this.element), this._close(r), this.blur(t), this.activeMenu = r
                }, this.delay)
            },
            _close: function(e) {
                e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
            },
            _closeOnDocumentClick: function(t) {
                return !e(t.target).closest(".ui-menu").length
            },
            _isDivider: function(e) {
                return !/[^\-\u2014\u2013\s]/.test(e.text())
            },
            collapse: function(e) {
                var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                t && t.length && (this._close(), this.focus(e, t))
            },
            expand: function(e) {
                var t = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
                t && t.length && (this._open(t.parent()), this._delay(function() {
                    this.focus(e, t)
                }))
            },
            next: function(e) {
                this._move("next", "first", e)
            },
            previous: function(e) {
                this._move("prev", "last", e)
            },
            isFirstItem: function() {
                return this.active && !this.active.prevAll(".ui-menu-item").length
            },
            isLastItem: function() {
                return this.active && !this.active.nextAll(".ui-menu-item").length
            },
            _move: function(e, t, n) {
                var r;
                this.active && (r = "first" === e || "last" === e ? this.active["first" === e ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[e + "All"](".ui-menu-item").eq(0)), r && r.length && this.active || (r = this.activeMenu.find(this.options.items)[t]()), this.focus(n, r)
            },
            nextPage: function(t) {
                var n, r, i;
                return this.active ? (this.isLastItem() || (this._hasScroll() ? (r = this.active.offset().top, i = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                    return n = e(this), 0 > n.offset().top - r - i
                }), this.focus(t, n)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())), void 0) : (this.next(t), void 0)
            },
            previousPage: function(t) {
                var n, r, i;
                return this.active ? (this.isFirstItem() || (this._hasScroll() ? (r = this.active.offset().top, i = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                    return n = e(this), n.offset().top - r + i > 0
                }), this.focus(t, n)) : this.focus(t, this.activeMenu.find(this.options.items).first())), void 0) : (this.next(t), void 0)
            },
            _hasScroll: function() {
                return this.element.outerHeight() < this.element.prop("scrollHeight")
            },
            select: function(t) {
                this.active = this.active || e(t.target).closest(".ui-menu-item");
                var n = {
                    item: this.active
                };
                this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, n)
            }
        }), e.widget("ui.autocomplete", {
            version: "1.11.1",
            defaultElement: "<input>",
            options: {
                appendTo: null,
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                source: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                response: null,
                search: null,
                select: null
            },
            requestIndex: 0,
            pending: 0,
            _create: function() {
                var t, n, r, i = this.element[0].nodeName.toLowerCase(),
                    s = "textarea" === i,
                    o = "input" === i;
                this.isMultiLine = s ? !0 : o ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[s || o ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                    keydown: function(i) {
                        if (this.element.prop("readOnly")) return t = !0, r = !0, n = !0, void 0;
                        t = !1, r = !1, n = !1;
                        var s = e.ui.keyCode;
                        switch (i.keyCode) {
                            case s.PAGE_UP:
                                t = !0, this._move("previousPage", i);
                                break;
                            case s.PAGE_DOWN:
                                t = !0, this._move("nextPage", i);
                                break;
                            case s.UP:
                                t = !0, this._keyEvent("previous", i);
                                break;
                            case s.DOWN:
                                t = !0, this._keyEvent("next", i);
                                break;
                            case s.ENTER:
                                this.menu.active && (t = !0, i.preventDefault(), this.menu.select(i));
                                break;
                            case s.TAB:
                                this.menu.active && this.menu.select(i);
                                break;
                            case s.ESCAPE:
                                this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(i), i.preventDefault());
                                break;
                            default:
                                n = !0, this._searchTimeout(i)
                        }
                    },
                    keypress: function(r) {
                        if (t) return t = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && r.preventDefault(), void 0;
                        if (!n) {
                            var i = e.ui.keyCode;
                            switch (r.keyCode) {
                                case i.PAGE_UP:
                                    this._move("previousPage", r);
                                    break;
                                case i.PAGE_DOWN:
                                    this._move("nextPage", r);
                                    break;
                                case i.UP:
                                    this._keyEvent("previous", r);
                                    break;
                                case i.DOWN:
                                    this._keyEvent("next", r)
                            }
                        }
                    },
                    input: function(e) {
                        return r ? (r = !1, e.preventDefault(), void 0) : (this._searchTimeout(e), void 0)
                    },
                    focus: function() {
                        this.selectedItem = null, this.previous = this._value()
                    },
                    blur: function(e) {
                        return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(e), this._change(e), void 0)
                    }
                }), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                    role: null
                }).hide().menu("instance"), this._on(this.menu.element, {
                    mousedown: function(t) {
                        t.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                            delete this.cancelBlur
                        });
                        var n = this.menu.element[0];
                        e(t.target).closest(".ui-menu-item").length || this._delay(function() {
                            var t = this;
                            this.document.one("mousedown", function(r) {
                                r.target === t.element[0] || r.target === n || e.contains(n, r.target) || t.close()
                            })
                        })
                    },
                    menufocus: function(t, n) {
                        var r, i;
                        return this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type)) ? (this.menu.blur(), this.document.one("mousemove", function() {
                            e(t.target).trigger(t.originalEvent)
                        }), void 0) : (i = n.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", t, {
                            item: i
                        }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(i.value), r = n.item.attr("aria-label") || i.value, r && e.trim(r).length && (this.liveRegion.children().hide(), e("<div>").text(r).appendTo(this.liveRegion)), void 0)
                    },
                    menuselect: function(e, t) {
                        var n = t.item.data("ui-autocomplete-item"),
                            r = this.previous;
                        this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = r, this._delay(function() {
                            this.previous = r, this.selectedItem = n
                        })), !1 !== this._trigger("select", e, {
                            item: n
                        }) && this._value(n.value), this.term = this._value(), this.close(e), this.selectedItem = n
                    }
                }), this.liveRegion = e("<span>", {
                    role: "status",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body), this._on(this.window, {
                    beforeunload: function() {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _destroy: function() {
                clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
            },
            _setOption: function(e, t) {
                this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this._appendTo()), "disabled" === e && t && this.xhr && this.xhr.abort()
            },
            _appendTo: function() {
                var t = this.options.appendTo;
                return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
            },
            _initSource: function() {
                var t, n, r = this;
                e.isArray(this.options.source) ? (t = this.options.source, this.source = function(n, r) {
                    r(e.ui.autocomplete.filter(t, n.term))
                }) : "string" == typeof this.options.source ? (n = this.options.source, this.source = function(t, i) {
                    r.xhr && r.xhr.abort(), r.xhr = e.ajax({
                        url: n,
                        data: t,
                        dataType: "json",
                        success: function(e) {
                            i(e)
                        },
                        error: function() {
                            i([])
                        }
                    })
                }) : this.source = this.options.source
            },
            _searchTimeout: function(e) {
                clearTimeout(this.searching), this.searching = this._delay(function() {
                    var t = this.term === this._value(),
                        n = this.menu.element.is(":visible"),
                        r = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
                    (!t || t && !n && !r) && (this.selectedItem = null, this.search(null, e))
                }, this.options.delay)
            },
            search: function(e, t) {
                return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(e) : void 0
            },
            _search: function(e) {
                this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                    term: e
                }, this._response())
            },
            _response: function() {
                var t = ++this.requestIndex;
                return e.proxy(function(e) {
                    t === this.requestIndex && this.__response(e), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
                }, this)
            },
            __response: function(e) {
                e && (e = this._normalize(e)), this._trigger("response", null, {
                    content: e
                }), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
            },
            close: function(e) {
                this.cancelSearch = !0, this._close(e)
            },
            _close: function(e) {
                this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
            },
            _change: function(e) {
                this.previous !== this._value() && this._trigger("change", e, {
                    item: this.selectedItem
                })
            },
            _normalize: function(t) {
                return t.length && t[0].label && t[0].value ? t : e.map(t, function(t) {
                    return "string" == typeof t ? {
                        label: t,
                        value: t
                    } : e.extend({}, t, {
                        label: t.label || t.value,
                        value: t.value || t.label
                    })
                })
            },
            _suggest: function(t) {
                var n = this.menu.element.empty();
                this._renderMenu(n, t), this.isNewMenu = !0, this.menu.refresh(), n.show(), this._resizeMenu(), n.position(e.extend({
                    of: this.element
                }, this.options.position)), this.options.autoFocus && this.menu.next()
            },
            _resizeMenu: function() {
                var e = this.menu.element;
                e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function(t, n) {
                var r = this;
                e.each(n, function(e, n) {
                    r._renderItemData(t, n)
                })
            },
            _renderItemData: function(e, t) {
                return this._renderItem(e, t).data("ui-autocomplete-item", t)
            },
            _renderItem: function(t, n) {
                return e("<li>").text(n.label).appendTo(t)
            },
            _move: function(e, t) {
                return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this.isMultiLine || this._value(this.term), this.menu.blur(), void 0) : (this.menu[e](t), void 0) : (this.search(null, t), void 0)
            },
            widget: function() {
                return this.menu.element
            },
            _value: function() {
                return this.valueMethod.apply(this.element, arguments)
            },
            _keyEvent: function(e, t) {
                (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(e, t), t.preventDefault())
            }
        }), e.extend(e.ui.autocomplete, {
            escapeRegex: function(e) {
                return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            },
            filter: function(t, n) {
                var r = RegExp(e.ui.autocomplete.escapeRegex(n), "i");
                return e.grep(t, function(e) {
                    return r.test(e.label || e.value || e)
                })
            }
        }), e.widget("ui.autocomplete", e.ui.autocomplete, {
            options: {
                messages: {
                    noResults: "No search results.",
                    results: function(e) {
                        return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                    }
                }
            },
            __response: function(t) {
                var n;
                this._superApply(arguments), this.options.disabled || this.cancelSearch || (n = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.children().hide(), e("<div>").text(n).appendTo(this.liveRegion))
            }
        }), e.ui.autocomplete;
    var h, p = "ui-button ui-widget ui-state-default ui-corner-all",
        d = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        v = function() {
            var t = e(this);
            setTimeout(function() {
                t.find(":ui-button").button("refresh")
            }, 1)
        },
        m = function(t) {
            var n = t.name,
                r = t.form,
                i = e([]);
            return n && (n = n.replace(/'/g, "\\'"), i = r ? e(r).find("[name='" + n + "'][type=radio]") : e("[name='" + n + "'][type=radio]", t.ownerDocument).filter(function() {
                return !this.form
            })), i
        };
    e.widget("ui.button", {
        version: "1.11.1",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, v), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
            var t = this,
                n = this.options,
                r = "checkbox" === this.type || "radio" === this.type,
                i = r ? "" : "ui-state-active";
            null === n.label && (n.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(p).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                n.disabled || this === h && e(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace, function() {
                n.disabled || e(this).removeClass(i)
            }).bind("click" + this.eventNamespace, function(e) {
                n.disabled && (e.preventDefault(), e.stopImmediatePropagation())
            }), this._on({
                focus: function() {
                    this.buttonElement.addClass("ui-state-focus")
                },
                blur: function() {
                    this.buttonElement.removeClass("ui-state-focus")
                }
            }), r && this.element.bind("change" + this.eventNamespace, function() {
                t.refresh()
            }), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                return n.disabled ? !1 : void 0
            }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (n.disabled) return !1;
                e(this).addClass("ui-state-active"), t.buttonElement.attr("aria-pressed", "true");
                var r = t.element[0];
                m(r).not(r).map(function() {
                    return e(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                return n.disabled ? !1 : (e(this).addClass("ui-state-active"), h = this, t.document.one("mouseup", function() {
                    h = null
                }), void 0)
            }).bind("mouseup" + this.eventNamespace, function() {
                return n.disabled ? !1 : (e(this).removeClass("ui-state-active"), void 0)
            }).bind("keydown" + this.eventNamespace, function(t) {
                return n.disabled ? !1 : ((t.keyCode === e.ui.keyCode.SPACE || t.keyCode === e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active"), void 0)
            }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                e(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function(t) {
                t.keyCode === e.ui.keyCode.SPACE && e(this).click()
            })), this._setOption("disabled", n.disabled), this._resetButton()
        },
        _determineButtonType: function() {
            var e, t, n;

            this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (e = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass("ui-helper-hidden-accessible"), n = this.element.is(":checked"), n && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", n)) : this.buttonElement = this.element
        },
        widget: function() {
            return this.buttonElement
        },
        _destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(p + " ui-state-active " + d).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function(e, t) {
            return this._super(e, t), "disabled" === e ? (this.widget().toggleClass("ui-state-disabled", !!t), this.element.prop("disabled", !!t), t && ("checkbox" === this.type || "radio" === this.type ? this.buttonElement.removeClass("ui-state-focus") : this.buttonElement.removeClass("ui-state-focus ui-state-active")), void 0) : (this._resetButton(), void 0)
        },
        refresh: function() {
            var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOption("disabled", t), "radio" === this.type ? m(this.element[0]).each(function() {
                e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function() {
            if ("input" === this.type) return this.options.label && this.element.val(this.options.label), void 0;
            var t = this.buttonElement.removeClass(d),
                n = e("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),
                r = this.options.icons,
                i = r.primary && r.secondary,
                s = [];
            r.primary || r.secondary ? (this.options.text && s.push("ui-button-text-icon" + (i ? "s" : r.primary ? "-primary" : "-secondary")), r.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + r.primary + "'></span>"), r.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + r.secondary + "'></span>"), this.options.text || (s.push(i ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", e.trim(n)))) : s.push("ui-button-text-only"), t.addClass(s.join(" "))
        }
    }), e.widget("ui.buttonset", {
        version: "1.11.1",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
        },
        _create: function() {
            this.element.addClass("ui-buttonset")
        },
        _init: function() {
            this.refresh()
        },
        _setOption: function(e, t) {
            "disabled" === e && this.buttons.button("option", e, t), this._super(e, t)
        },
        refresh: function() {
            var t = "rtl" === this.element.css("direction"),
                n = this.element.find(this.options.items),
                r = n.filter(":ui-button");
            n.not(":ui-button").button(), r.button("refresh"), this.buttons = n.map(function() {
                return e(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function() {
            this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
                return e(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    }), e.ui.button, e.extend(e.ui, {
        datepicker: {
            version: "1.11.1"
        }
    });
    var g;
    e.extend(i.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(e) {
            return u(this._defaults, e || {}), this
        },
        _attachDatepicker: function(t, n) {
            var r, i, s;
            r = t.nodeName.toLowerCase(), i = "div" === r || "span" === r, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), s = this._newInst(e(t), i), s.settings = e.extend({}, n || {}), "input" === r ? this._connectDatepicker(t, s) : i && this._inlineDatepicker(t, s)
        },
        _newInst: function(t, n) {
            var r = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: r,
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: n,
                dpDiv: n ? s(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(t, n) {
            var r = e(t);
            n.append = e([]), n.trigger = e([]), r.hasClass(this.markerClassName) || (this._attachments(r, n), r.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(n), e.data(t, "datepicker", n), n.settings.disabled && this._disableDatepicker(t))
        },
        _attachments: function(t, n) {
            var r, i, s, o = this._get(n, "appendText"),
                u = this._get(n, "isRTL");
            n.append && n.append.remove(), o && (n.append = e("<span class='" + this._appendClass + "'>" + o + "</span>"), t[u ? "before" : "after"](n.append)), t.unbind("focus", this._showDatepicker), n.trigger && n.trigger.remove(), r = this._get(n, "showOn"), ("focus" === r || "both" === r) && t.focus(this._showDatepicker), ("button" === r || "both" === r) && (i = this._get(n, "buttonText"), s = this._get(n, "buttonImage"), n.trigger = e(this._get(n, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
                src: s,
                alt: i,
                title: i
            }) : e("<button type='button'></button>").addClass(this._triggerClass).html(s ? e("<img/>").attr({
                src: s,
                alt: i,
                title: i
            }) : i)), t[u ? "before" : "after"](n.trigger), n.trigger.click(function() {
                return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1
            }))
        },
        _autoSize: function(e) {
            if (this._get(e, "autoSize") && !e.inline) {
                var t, n, r, i, s = new Date(2009, 11, 20),
                    o = this._get(e, "dateFormat");
                o.match(/[DM]/) && (t = function(e) {
                    for (n = 0, r = 0, i = 0; e.length > i; i++) e[i].length > n && (n = e[i].length, r = i);
                    return r
                }, s.setMonth(t(this._get(e, o.match(/MM/) ? "monthNames" : "monthNamesShort"))), s.setDate(t(this._get(e, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - s.getDay())), e.input.attr("size", this._formatDate(e, s).length)
            }
        },
        _inlineDatepicker: function(t, n) {
            var r = e(t);
            r.hasClass(this.markerClassName) || (r.addClass(this.markerClassName).append(n.dpDiv), e.data(t, "datepicker", n), this._setDate(n, this._getDefaultDate(n), !0), this._updateDatepicker(n), this._updateAlternate(n), n.settings.disabled && this._disableDatepicker(t), n.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(t, n, r, i, s) {
            var o, a, f, l, c, h = this._dialogInst;
            return h || (this.uuid += 1, o = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + o + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), h = this._dialogInst = this._newInst(this._dialogInput, !1), h.settings = {}, e.data(this._dialogInput[0], "datepicker", h)), u(h.settings, i || {}), n = n && n.constructor === Date ? this._formatDate(h, n) : n, this._dialogInput.val(n), this._pos = s ? s.length ? s : [s.pageX, s.pageY] : null, this._pos || (a = document.documentElement.clientWidth, f = document.documentElement.clientHeight, l = document.documentElement.scrollLeft || document.body.scrollLeft, c = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [a / 2 - 100 + l, f / 2 - 150 + c]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), h.settings.onSelect = r, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], "datepicker", h), this
        },
        _destroyDatepicker: function(t) {
            var n, r = e(t),
                i = e.data(t, "datepicker");
            r.hasClass(this.markerClassName) && (n = t.nodeName.toLowerCase(), e.removeData(t, "datepicker"), "input" === n ? (i.append.remove(), i.trigger.remove(), r.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === n || "span" === n) && r.removeClass(this.markerClassName).empty())
        },
        _enableDatepicker: function(t) {
            var n, r, i = e(t),
                s = e.data(t, "datepicker");
            i.hasClass(this.markerClassName) && (n = t.nodeName.toLowerCase(), "input" === n ? (t.disabled = !1, s.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === n || "span" === n) && (r = i.children("." + this._inlineClass), r.children().removeClass("ui-state-disabled"), r.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function(e) {
                return e === t ? null : e
            }))
        },
        _disableDatepicker: function(t) {
            var n, r, i = e(t),
                s = e.data(t, "datepicker");
            i.hasClass(this.markerClassName) && (n = t.nodeName.toLowerCase(), "input" === n ? (t.disabled = !0, s.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === n || "span" === n) && (r = i.children("." + this._inlineClass), r.children().addClass("ui-state-disabled"), r.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function(e) {
                return e === t ? null : e
            }), this._disabledInputs[this._disabledInputs.length] = t)
        },
        _isDisabledDatepicker: function(e) {
            if (!e) return !1;
            for (var t = 0; this._disabledInputs.length > t; t++)
                if (this._disabledInputs[t] === e) return !0;
            return !1
        },
        _getInst: function(t) {
            try {
                return e.data(t, "datepicker")
            } catch (n) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(t, n, r) {
            var i, s, o, a, f = this._getInst(t);
            return 2 === arguments.length && "string" == typeof n ? "defaults" === n ? e.extend({}, e.datepicker._defaults) : f ? "all" === n ? e.extend({}, f.settings) : this._get(f, n) : null : (i = n || {}, "string" == typeof n && (i = {}, i[n] = r), f && (this._curInst === f && this._hideDatepicker(), s = this._getDateDatepicker(t, !0), o = this._getMinMaxDate(f, "min"), a = this._getMinMaxDate(f, "max"), u(f.settings, i), null !== o && void 0 !== i.dateFormat && void 0 === i.minDate && (f.settings.minDate = this._formatDate(f, o)), null !== a && void 0 !== i.dateFormat && void 0 === i.maxDate && (f.settings.maxDate = this._formatDate(f, a)), "disabled" in i && (i.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(e(t), f), this._autoSize(f), this._setDate(f, s), this._updateAlternate(f), this._updateDatepicker(f)), void 0)
        },
        _changeDatepicker: function(e, t, n) {
            this._optionDatepicker(e, t, n)
        },
        _refreshDatepicker: function(e) {
            var t = this._getInst(e);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function(e, t) {
            var n = this._getInst(e);
            n && (this._setDate(n, t), this._updateDatepicker(n), this._updateAlternate(n))
        },
        _getDateDatepicker: function(e, t) {
            var n = this._getInst(e);
            return n && !n.inline && this._setDateFromField(n, t), n ? this._getDate(n) : null
        },
        _doKeyDown: function(t) {
            var n, r, i, s = e.datepicker._getInst(t.target),
                o = !0,
                u = s.dpDiv.is(".ui-datepicker-rtl");
            if (s._keyEvent = !0, e.datepicker._datepickerShowing) switch (t.keyCode) {
                case 9:
                    e.datepicker._hideDatepicker(), o = !1;
                    break;
                case 13:
                    return i = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", s.dpDiv), i[0] && e.datepicker._selectDay(t.target, s.selectedMonth, s.selectedYear, i[0]), n = e.datepicker._get(s, "onSelect"), n ? (r = e.datepicker._formatDate(s), n.apply(s.input ? s.input[0] : null, [r, s])) : e.datepicker._hideDatepicker(), !1;
                case 27:
                    e.datepicker._hideDatepicker();
                    break;
                case 33:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(s, "stepBigMonths") : -e.datepicker._get(s, "stepMonths"), "M");
                    break;
                case 34:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(s, "stepBigMonths") : +e.datepicker._get(s, "stepMonths"), "M");
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), o = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), o = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, u ? 1 : -1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(s, "stepBigMonths") : -e.datepicker._get(s, "stepMonths"), "M");
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), o = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, u ? -1 : 1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(s, "stepBigMonths") : +e.datepicker._get(s, "stepMonths"), "M");
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), o = t.ctrlKey || t.metaKey;
                    break;
                default:
                    o = !1
            } else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : o = !1;
            o && (t.preventDefault(), t.stopPropagation())
        },
        _doKeyPress: function(t) {
            var n, r, i = e.datepicker._getInst(t.target);
            return e.datepicker._get(i, "constrainInput") ? (n = e.datepicker._possibleChars(e.datepicker._get(i, "dateFormat")), r = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || " " > r || !n || n.indexOf(r) > -1) : void 0
        },
        _doKeyUp: function(t) {
            var n, r = e.datepicker._getInst(t.target);
            if (r.input.val() !== r.lastVal) try {
                n = e.datepicker.parseDate(e.datepicker._get(r, "dateFormat"), r.input ? r.input.val() : null, e.datepicker._getFormatConfig(r)), n && (e.datepicker._setDateFromField(r), e.datepicker._updateAlternate(r), e.datepicker._updateDatepicker(r))
            } catch (i) {}
            return !0
        },
        _showDatepicker: function(t) {
            if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = e("input", t.parentNode)[0]), !e.datepicker._isDisabledDatepicker(t) && e.datepicker._lastInput !== t) {
                var n, i, s, o, a, f, l;
                n = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== n && (e.datepicker._curInst.dpDiv.stop(!0, !0), n && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), i = e.datepicker._get(n, "beforeShow"), s = i ? i.apply(t, [t, n]) : {}, s !== !1 && (u(n.settings, s), n.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(n), e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), o = !1, e(t).parents().each(function() {
                    return o |= "fixed" === e(this).css("position"), !o
                }), a = {
                    left: e.datepicker._pos[0],
                    top: e.datepicker._pos[1]
                }, e.datepicker._pos = null, n.dpDiv.empty(), n.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), e.datepicker._updateDatepicker(n), a = e.datepicker._checkOffset(n, a, o), n.dpDiv.css({
                    position: e.datepicker._inDialog && e.blockUI ? "static" : o ? "fixed" : "absolute",
                    display: "none",
                    left: a.left + "px",
                    top: a.top + "px"
                }), n.inline || (f = e.datepicker._get(n, "showAnim"), l = e.datepicker._get(n, "duration"), n.dpDiv.css("z-index", r(e(t)) + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[f] ? n.dpDiv.show(f, e.datepicker._get(n, "showOptions"), l) : n.dpDiv[f || "show"](f ? l : null), e.datepicker._shouldFocusInput(n) && n.input.focus(), e.datepicker._curInst = n))
            }
        },
        _updateDatepicker: function(t) {
            this.maxRows = 4, g = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
            var n, r = this._getNumberOfMonths(t),
                i = r[1],
                s = 17,
                u = t.dpDiv.find("." + this._dayOverClass + " a");
            u.length > 0 && o.apply(u.get(0)), t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), i > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + i).css("width", s * i + "em"), t.dpDiv[(1 !== r[0] || 1 !== r[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (n = t.yearshtml, setTimeout(function() {
                n === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), n = t.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function(e) {
            return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")
        },
        _checkOffset: function(t, n, r) {
            var i = t.dpDiv.outerWidth(),
                s = t.dpDiv.outerHeight(),
                o = t.input ? t.input.outerWidth() : 0,
                u = t.input ? t.input.outerHeight() : 0,
                a = document.documentElement.clientWidth + (r ? 0 : e(document).scrollLeft()),
                f = document.documentElement.clientHeight + (r ? 0 : e(document).scrollTop());
            return n.left -= this._get(t, "isRTL") ? i - o : 0, n.left -= r && n.left === t.input.offset().left ? e(document).scrollLeft() : 0, n.top -= r && n.top === t.input.offset().top + u ? e(document).scrollTop() : 0, n.left -= Math.min(n.left, n.left + i > a && a > i ? Math.abs(n.left + i - a) : 0), n.top -= Math.min(n.top, n.top + s > f && f > s ? Math.abs(s + u) : 0), n
        },
        _findPos: function(t) {
            for (var n, r = this._getInst(t), i = this._get(r, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));) t = t[i ? "previousSibling" : "nextSibling"];
            return n = e(t).offset(), [n.left, n.top]
        },
        _hideDatepicker: function(t) {
            var n, r, i, s, o = this._curInst;
            !o || t && o !== e.data(t, "datepicker") || this._datepickerShowing && (n = this._get(o, "showAnim"), r = this._get(o, "duration"), i = function() {
                e.datepicker._tidyDialog(o)
            }, e.effects && (e.effects.effect[n] || e.effects[n]) ? o.dpDiv.hide(n, e.datepicker._get(o, "showOptions"), r, i) : o.dpDiv["slideDown" === n ? "slideUp" : "fadeIn" === n ? "fadeOut" : "hide"](n ? r : null, i), n || i(), this._datepickerShowing = !1, s = this._get(o, "onClose"), s && s.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function(e) {
            e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(t) {
            if (e.datepicker._curInst) {
                var n = e(t.target),
                    r = e.datepicker._getInst(n[0]);
                (n[0].id !== e.datepicker._mainDivId && 0 === n.parents("#" + e.datepicker._mainDivId).length && !n.hasClass(e.datepicker.markerClassName) && !n.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || n.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== r) && e.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(t, n, r) {
            var i = e(t),
                s = this._getInst(i[0]);
            this._isDisabledDatepicker(i[0]) || (this._adjustInstDate(s, n + ("M" === r ? this._get(s, "showCurrentAtPos") : 0), r), this._updateDatepicker(s))
        },
        _gotoToday: function(t) {
            var n, r = e(t),
                i = this._getInst(r[0]);
            this._get(i, "gotoCurrent") && i.currentDay ? (i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear) : (n = new Date, i.selectedDay = n.getDate(), i.drawMonth = i.selectedMonth = n.getMonth(), i.drawYear = i.selectedYear = n.getFullYear()), this._notifyChange(i), this._adjustDate(r)
        },
        _selectMonthYear: function(t, n, r) {
            var i = e(t),
                s = this._getInst(i[0]);
            s["selected" + ("M" === r ? "Month" : "Year")] = s["draw" + ("M" === r ? "Month" : "Year")] = parseInt(n.options[n.selectedIndex].value, 10), this._notifyChange(s), this._adjustDate(i)
        },
        _selectDay: function(t, n, r, i) {
            var s, o = e(t);
            e(i).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || (s = this._getInst(o[0]), s.selectedDay = s.currentDay = e("a", i).html(), s.selectedMonth = s.currentMonth = n, s.selectedYear = s.currentYear = r, this._selectDate(t, this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear)))
        },
        _clearDate: function(t) {
            var n = e(t);
            this._selectDate(n, "")
        },
        _selectDate: function(t, n) {
            var r, i = e(t),
                s = this._getInst(i[0]);
            n = null != n ? n : this._formatDate(s), s.input && s.input.val(n), this._updateAlternate(s), r = this._get(s, "onSelect"), r ? r.apply(s.input ? s.input[0] : null, [n, s]) : s.input && s.input.trigger("change"), s.inline ? this._updateDatepicker(s) : (this._hideDatepicker(), this._lastInput = s.input[0], "object" != typeof s.input[0] && s.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function(t) {
            var n, r, i, s = this._get(t, "altField");
            s && (n = this._get(t, "altFormat") || this._get(t, "dateFormat"), r = this._getDate(t), i = this.formatDate(n, r, this._getFormatConfig(t)), e(s).each(function() {
                e(this).val(i)
            }))
        },
        noWeekends: function(e) {
            var t = e.getDay();
            return [t > 0 && 6 > t, ""]
        },
        iso8601Week: function(e) {
            var t, n = new Date(e.getTime());
            return n.setDate(n.getDate() + 4 - (n.getDay() || 7)), t = n.getTime(), n.setMonth(0), n.setDate(1), Math.floor(Math.round((t - n) / 864e5) / 7) + 1
        },
        parseDate: function(t, n, r) {
            if (null == t || null == n) throw "Invalid arguments";
            if (n = "object" == typeof n ? "" + n : n + "", "" === n) return null;
            var i, s, o, u, a = 0,
                f = (r ? r.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                l = "string" != typeof f ? f : (new Date).getFullYear() % 100 + parseInt(f, 10),
                c = (r ? r.dayNamesShort : null) || this._defaults.dayNamesShort,
                h = (r ? r.dayNames : null) || this._defaults.dayNames,
                p = (r ? r.monthNamesShort : null) || this._defaults.monthNamesShort,
                d = (r ? r.monthNames : null) || this._defaults.monthNames,
                v = -1,
                m = -1,
                g = -1,
                y = -1,
                b = !1,
                w = function(e) {
                    var n = t.length > i + 1 && t.charAt(i + 1) === e;
                    return n && i++, n
                },
                E = function(e) {
                    var t = w(e),
                        r = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2,
                        i = "y" === e ? r : 1,
                        s = RegExp("^\\d{" + i + "," + r + "}"),
                        o = n.substring(a).match(s);
                    if (!o) throw "Missing number at position " + a;
                    return a += o[0].length, parseInt(o[0], 10)
                },
                S = function(t, r, i) {
                    var s = -1,
                        o = e.map(w(t) ? i : r, function(e, t) {
                            return [
                                [t, e]
                            ]
                        }).sort(function(e, t) {
                            return -(e[1].length - t[1].length)
                        });
                    if (e.each(o, function(e, t) {
                            var r = t[1];
                            return n.substr(a, r.length).toLowerCase() === r.toLowerCase() ? (s = t[0], a += r.length, !1) : void 0
                        }), -1 !== s) return s + 1;
                    throw "Unknown name at position " + a
                },
                x = function() {
                    if (n.charAt(a) !== t.charAt(i)) throw "Unexpected literal at position " + a;
                    a++
                };
            for (i = 0; t.length > i; i++)
                if (b) "'" !== t.charAt(i) || w("'") ? x() : b = !1;
                else switch (t.charAt(i)) {
                    case "d":
                        g = E("d");
                        break;
                    case "D":
                        S("D", c, h);
                        break;
                    case "o":
                        y = E("o");
                        break;
                    case "m":
                        m = E("m");
                        break;
                    case "M":
                        m = S("M", p, d);
                        break;
                    case "y":
                        v = E("y");
                        break;
                    case "@":
                        u = new Date(E("@")), v = u.getFullYear(), m = u.getMonth() + 1, g = u.getDate();
                        break;
                    case "!":
                        u = new Date((E("!") - this._ticksTo1970) / 1e4), v = u.getFullYear(), m = u.getMonth() + 1, g = u.getDate();
                        break;
                    case "'":
                        w("'") ? x() : b = !0;
                        break;
                    default:
                        x()
                }
                if (n.length > a && (o = n.substr(a), !/^\s+/.test(o))) throw "Extra/unparsed characters found in date: " + o;
            if (-1 === v ? v = (new Date).getFullYear() : 100 > v && (v += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (l >= v ? 0 : -100)), y > -1)
                for (m = 1, g = y;;) {
                    if (s = this._getDaysInMonth(v, m - 1), s >= g) break;
                    m++, g -= s
                }
            if (u = this._daylightSavingAdjust(new Date(v, m - 1, g)), u.getFullYear() !== v || u.getMonth() + 1 !== m || u.getDate() !== g) throw "Invalid date";
            return u
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function(e, t, n) {
            if (!t) return "";
            var r, i = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                s = (n ? n.dayNames : null) || this._defaults.dayNames,
                o = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                u = (n ? n.monthNames : null) || this._defaults.monthNames,
                a = function(t) {
                    var n = e.length > r + 1 && e.charAt(r + 1) === t;
                    return n && r++, n
                },
                f = function(e, t, n) {
                    var r = "" + t;
                    if (a(e))
                        for (; n > r.length;) r = "0" + r;
                    return r
                },
                l = function(e, t, n, r) {
                    return a(e) ? r[t] : n[t]
                },
                c = "",
                h = !1;
            if (t)
                for (r = 0; e.length > r; r++)
                    if (h) "'" !== e.charAt(r) || a("'") ? c += e.charAt(r) : h = !1;
                    else switch (e.charAt(r)) {
                        case "d":
                            c += f("d", t.getDate(), 2);
                            break;
                        case "D":
                            c += l("D", t.getDay(), i, s);
                            break;
                        case "o":
                            c += f("o", Math.round(((new Date(t.getFullYear(), t.getMonth(), t.getDate())).getTime() - (new Date(t.getFullYear(), 0, 0)).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            c += f("m", t.getMonth() + 1, 2);
                            break;
                        case "M":
                            c += l("M", t.getMonth(), o, u);
                            break;
                        case "y":
                            c += a("y") ? t.getFullYear() : (10 > t.getYear() % 100 ? "0" : "") + t.getYear() % 100;
                            break;
                        case "@":
                            c += t.getTime();
                            break;
                        case "!":
                            c += 1e4 * t.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            a("'") ? c += "'" : h = !0;
                            break;
                        default:
                            c += e.charAt(r)
                    }
                    return c
        },
        _possibleChars: function(e) {
            var t, n = "",
                r = !1,
                i = function(n) {
                    var r = e.length > t + 1 && e.charAt(t + 1) === n;
                    return r && t++, r
                };
            for (t = 0; e.length > t; t++)
                if (r) "'" !== e.charAt(t) || i("'") ? n += e.charAt(t) : r = !1;
                else switch (e.charAt(t)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        n += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        i("'") ? n += "'" : r = !0;
                        break;
                    default:
                        n += e.charAt(t)
                }
                return n
        },
        _get: function(e, t) {
            return void 0 !== e.settings[t] ? e.settings[t] : this._defaults[t]
        },
        _setDateFromField: function(e, t) {
            if (e.input.val() !== e.lastVal) {
                var n = this._get(e, "dateFormat"),
                    r = e.lastVal = e.input ? e.input.val() : null,
                    i = this._getDefaultDate(e),
                    s = i,
                    o = this._getFormatConfig(e);
                try {
                    s = this.parseDate(n, r, o) || i
                } catch (u) {
                    r = t ? "" : r
                }
                e.selectedDay = s.getDate(), e.drawMonth = e.selectedMonth = s.getMonth(), e.drawYear = e.selectedYear = s.getFullYear(), e.currentDay = r ? s.getDate() : 0, e.currentMonth = r ? s.getMonth() : 0, e.currentYear = r ? s.getFullYear() : 0, this._adjustInstDate(e)
            }
        },
        _getDefaultDate: function(e) {
            return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
        },
        _determineDate: function(t, n, r) {
            var i = function(e) {
                    var t = new Date;
                    return t.setDate(t.getDate() + e), t
                },
                s = function(n) {
                    try {
                        return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), n, e.datepicker._getFormatConfig(t))
                    } catch (r) {}
                    for (var i = (n.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, s = i.getFullYear(), o = i.getMonth(), u = i.getDate(), a = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, f = a.exec(n); f;) {
                        switch (f[2] || "d") {
                            case "d":
                            case "D":
                                u += parseInt(f[1], 10);
                                break;
                            case "w":
                            case "W":
                                u += 7 * parseInt(f[1], 10);
                                break;
                            case "m":
                            case "M":
                                o += parseInt(f[1], 10), u = Math.min(u, e.datepicker._getDaysInMonth(s, o));
                                break;
                            case "y":
                            case "Y":
                                s += parseInt(f[1], 10), u = Math.min(u, e.datepicker._getDaysInMonth(s, o))
                        }
                        f = a.exec(n)
                    }
                    return new Date(s, o, u)
                },
                o = null == n || "" === n ? r : "string" == typeof n ? s(n) : "number" == typeof n ? isNaN(n) ? r : i(n) : new Date(n.getTime());
            return o = o && "Invalid Date" == "" + o ? r : o, o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o)
        },
        _daylightSavingAdjust: function(e) {
            return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
        },
        _setDate: function(e, t, n) {
            var r = !t,
                i = e.selectedMonth,
                s = e.selectedYear,
                o = this._restrictMinMax(e, this._determineDate(e, t, new Date));
            e.selectedDay = e.currentDay = o.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth(), e.drawYear = e.selectedYear = e.currentYear = o.getFullYear(), i === e.selectedMonth && s === e.selectedYear || n || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(r ? "" : this._formatDate(e))
        },
        _getDate: function(e) {
            var t = !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return t
        },
        _attachHandlers: function(t) {
            var n = this._get(t, "stepMonths"),
                r = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map(function() {
                var t = {
                    prev: function() {
                        e.datepicker._adjustDate(r, -n, "M")
                    },
                    next: function() {
                        e.datepicker._adjustDate(r, +n, "M")
                    },
                    hide: function() {
                        e.datepicker._hideDatepicker()
                    },
                    today: function() {
                        e.datepicker._gotoToday(r)
                    },
                    selectDay: function() {
                        return e.datepicker._selectDay(r, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    },
                    selectMonth: function() {
                        return e.datepicker._selectMonthYear(r, this, "M"), !1
                    },
                    selectYear: function() {
                        return e.datepicker._selectMonthYear(r, this, "Y"), !1
                    }
                };
                e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(e) {
            var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k, L, A, O, M, _, D, P, H, B, j, F, I, q = new Date,
                R = this._daylightSavingAdjust(new Date(q.getFullYear(), q.getMonth(), q.getDate())),
                U = this._get(e, "isRTL"),
                z = this._get(e, "showButtonPanel"),
                W = this._get(e, "hideIfNoPrevNext"),
                X = this._get(e, "navigationAsDateFormat"),
                V = this._getNumberOfMonths(e),
                $ = this._get(e, "showCurrentAtPos"),
                J = this._get(e, "stepMonths"),
                K = 1 !== V[0] || 1 !== V[1],
                Q = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                G = this._getMinMaxDate(e, "min"),
                Y = this._getMinMaxDate(e, "max"),
                Z = e.drawMonth - $,
                et = e.drawYear;
            if (0 > Z && (Z += 12, et--), Y)
                for (t = this._daylightSavingAdjust(new Date(Y.getFullYear(), Y.getMonth() - V[0] * V[1] + 1, Y.getDate())), t = G && G > t ? G : t; this._daylightSavingAdjust(new Date(et, Z, 1)) > t;) Z--, 0 > Z && (Z = 11, et--);
            for (e.drawMonth = Z, e.drawYear = et, n = this._get(e, "prevText"), n = X ? this.formatDate(n, this._daylightSavingAdjust(new Date(et, Z - J, 1)), this._getFormatConfig(e)) : n, r = this._canAdjustMonth(e, -1, et, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "e" : "w") + "'>" + n + "</span></a>" : W ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "e" : "w") + "'>" + n + "</span></a>", i = this._get(e, "nextText"), i = X ? this.formatDate(i, this._daylightSavingAdjust(new Date(et, Z + J, 1)), this._getFormatConfig(e)) : i, s = this._canAdjustMonth(e, 1, et, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "w" : "e") + "'>" + i + "</span></a>" : W ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "w" : "e") + "'>" + i + "</span></a>", o = this._get(e, "currentText"), u = this._get(e, "gotoCurrent") && e.currentDay ? Q : R, o = X ? this.formatDate(o, u, this._getFormatConfig(e)) : o, a = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", f = z ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (U ? a : "") + (this._isInRange(e, u) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + "</button>" : "") + (U ? "" : a) + "</div>" : "", l = parseInt(this._get(e, "firstDay"), 10), l = isNaN(l) ? 0 : l, c = this._get(e, "showWeek"), h = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), d = this._get(e, "monthNames"), v = this._get(e, "monthNamesShort"), m = this._get(e, "beforeShowDay"), g = this._get(e, "showOtherMonths"), y = this._get(e, "selectOtherMonths"), b = this._getDefaultDate(e), w = "", S = 0; V[0] > S; S++) {
                for (x = "", this.maxRows = 4, T = 0; V[1] > T; T++) {
                    if (N = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay)), C = " ui-corner-all", k = "", K) {
                        if (k += "<div class='ui-datepicker-group", V[1] > 1) switch (T) {
                            case 0:
                                k += " ui-datepicker-group-first", C = " ui-corner-" + (U ? "right" : "left");
                                break;
                            case V[1] - 1:
                                k += " ui-datepicker-group-last", C = " ui-corner-" + (U ? "left" : "right");
                                break;
                            default:
                                k += " ui-datepicker-group-middle", C = ""
                        }
                        k += "'>"
                    }
                    for (k += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + C + "'>" + (/all|left/.test(C) && 0 === S ? U ? s : r : "") + (/all|right/.test(C) && 0 === S ? U ? r : s : "") + this._generateMonthYearHeader(e, Z, et, G, Y, S > 0 || T > 0, d, v) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", L = c ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", E = 0; 7 > E; E++) A = (E + l) % 7, L += "<th scope='col'" + ((E + l + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + h[A] + "'>" + p[A] + "</span></th>";
                    for (k += L + "</tr></thead><tbody>", O = this._getDaysInMonth(et, Z), et === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, O)), M = (this._getFirstDayOfMonth(et, Z) - l + 7) % 7, _ = Math.ceil((M + O) / 7), D = K ? this.maxRows > _ ? this.maxRows : _ : _, this.maxRows = D, P = this._daylightSavingAdjust(new Date(et, Z, 1 - M)), H = 0; D > H; H++) {
                        for (k += "<tr>", B = c ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(P) + "</td>" : "", E = 0; 7 > E; E++) j = m ? m.apply(e.input ? e.input[0] : null, [P]) : [!0, ""], F = P.getMonth() !== Z, I = F && !y || !j[0] || G && G > P || Y && P > Y, B += "<td class='" + ((E + l + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (P.getTime() === N.getTime() && Z === e.selectedMonth && e._keyEvent || b.getTime() === P.getTime() && b.getTime() === N.getTime() ? " " + this._dayOverClass : "") + (I ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !g ? "" : " " + j[1] + (P.getTime() === Q.getTime() ? " " + this._currentClass : "") + (P.getTime() === R.getTime() ? " ui-datepicker-today" : "")) + "'" + (F && !g || !j[2] ? "" : " title='" + j[2].replace(/'/g, "&#39;") + "'") + (I ? "" : " data-handler='selectDay' data-event='click' data-month='" + P.getMonth() + "' data-year='" + P.getFullYear() + "'") + ">" + (F && !g ? " " : I ? "<span class='ui-state-default'>" + P.getDate() + "</span>" : "<a class='ui-state-default" + (P.getTime() === R.getTime() ? " ui-state-highlight" : "") + (P.getTime() === Q.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + P.getDate() + "</a>") + "</td>", P.setDate(P.getDate() + 1), P = this._daylightSavingAdjust(P);
                        k += B + "</tr>"
                    }
                    Z++, Z > 11 && (Z = 0, et++), k += "</tbody></table>" + (K ? "</div>" + (V[0] > 0 && T === V[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += k
                }
                w += x
            }
            return w += f, e._keyEvent = !1, w
        },
        _generateMonthYearHeader: function(e, t, n, r, i, s, o, u) {
            var a, f, l, c, h, p, d, v, m = this._get(e, "changeMonth"),
                g = this._get(e, "changeYear"),
                y = this._get(e, "showMonthAfterYear"),
                b = "<div class='ui-datepicker-title'>",
                w = "";
            if (s || !m) w += "<span class='ui-datepicker-month'>" + o[t] + "</span>";
            else {
                for (a = r && r.getFullYear() === n, f = i && i.getFullYear() === n, w += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", l = 0; 12 > l; l++)(!a || l >= r.getMonth()) && (!f || i.getMonth() >= l) && (w += "<option value='" + l + "'" + (l === t ? " selected='selected'" : "") + ">" + u[l] + "</option>");
                w += "</select>"
            }
            if (y || (b += w + (!s && m && g ? "" : " ")), !e.yearshtml)
                if (e.yearshtml = "", s || !g) b += "<span class='ui-datepicker-year'>" + n + "</span>";
                else {
                    for (c = this._get(e, "yearRange").split(":"), h = (new Date).getFullYear(), p = function(e) {
                            var t = e.match(/c[+\-].*/) ? n + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? h + parseInt(e, 10) : parseInt(e, 10);
                            return isNaN(t) ? h : t
                        }, d = p(c[0]), v = Math.max(d, p(c[1] || "")), d = r ? Math.max(d, r.getFullYear()) : d, v = i ? Math.min(v, i.getFullYear()) : v, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; v >= d; d++) e.yearshtml += "<option value='" + d + "'" + (d === n ? " selected='selected'" : "") + ">" + d + "</option>";
                    e.yearshtml += "</select>", b += e.yearshtml, e.yearshtml = null
                }
            return b += this._get(e, "yearSuffix"), y && (b += (!s && m && g ? "" : " ") + w), b += "</div>"
        },
        _adjustInstDate: function(e, t, n) {
            var r = e.drawYear + ("Y" === n ? t : 0),
                i = e.drawMonth + ("M" === n ? t : 0),
                s = Math.min(e.selectedDay, this._getDaysInMonth(r, i)) + ("D" === n ? t : 0),
                o = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(r, i, s)));
            e.selectedDay = o.getDate(), e.drawMonth = e.selectedMonth = o.getMonth(), e.drawYear = e.selectedYear = o.getFullYear(), ("M" === n || "Y" === n) && this._notifyChange(e)
        },
        _restrictMinMax: function(e, t) {
            var n = this._getMinMaxDate(e, "min"),
                r = this._getMinMaxDate(e, "max"),
                i = n && n > t ? n : t;
            return r && i > r ? r : i
        },
        _notifyChange: function(e) {
            var t = this._get(e, "onChangeMonthYear");
            t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
        },
        _getNumberOfMonths: function(e) {
            var t = this._get(e, "numberOfMonths");
            return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
        },
        _getMinMaxDate: function(e, t) {
            return this._determineDate(e, this._get(e, t + "Date"), null)
        },
        _getDaysInMonth: function(e, t) {
            return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
        },
        _getFirstDayOfMonth: function(e, t) {
            return (new Date(e, t, 1)).getDay()
        },
        _canAdjustMonth: function(e, t, n, r) {
            var i = this._getNumberOfMonths(e),
                s = this._daylightSavingAdjust(new Date(n, r + (0 > t ? t : i[0] * i[1]), 1));
            return 0 > t && s.setDate(this._getDaysInMonth(s.getFullYear(), s.getMonth())), this._isInRange(e, s)
        },
        _isInRange: function(e, t) {
            var n, r, i = this._getMinMaxDate(e, "min"),
                s = this._getMinMaxDate(e, "max"),
                o = null,
                u = null,
                a = this._get(e, "yearRange");
            return a && (n = a.split(":"), r = (new Date).getFullYear(), o = parseInt(n[0], 10), u = parseInt(n[1], 10), n[0].match(/[+\-].*/) && (o += r), n[1].match(/[+\-].*/) && (u += r)), (!i || t.getTime() >= i.getTime()) && (!s || t.getTime() <= s.getTime()) && (!o || t.getFullYear() >= o) && (!u || u >= t.getFullYear())
        },
        _getFormatConfig: function(e) {
            var t = this._get(e, "shortYearCutoff");
            return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                shortYearCutoff: t,
                dayNamesShort: this._get(e, "dayNamesShort"),
                dayNames: this._get(e, "dayNames"),
                monthNamesShort: this._get(e, "monthNamesShort"),
                monthNames: this._get(e, "monthNames")
            }
        },
        _formatDate: function(e, t, n, r) {
            t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
            var i = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(r, n, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return this.formatDate(this._get(e, "dateFormat"), i, this._getFormatConfig(e))
        }
    }), e.fn.datepicker = function(t) {
        if (!this.length) return this;
        e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);
        var n = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(n)) : this.each(function() {
            "string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(n)) : e.datepicker._attachDatepicker(this, t)
        }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(n))
    }, e.datepicker = new i, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.11.1", e.datepicker, e.widget("ui.dialog", {
        version: "1.11.1",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            closeOnEscape: !0,
            closeText: "Close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(t) {
                    var n = e(this).css(t).offset().top;
                    0 > n && e(this).css("top", t.top - n)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        resizableRelatedOptions: {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            }, this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && e.fn.draggable && this._makeDraggable(), this.options.resizable && e.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t.jquery || t.nodeType) ? e(t) : this.document.find(t || "body").eq(0)
        },
        _destroy: function() {
            var e, t = this.originalPosition;
            this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), e = t.parent.children().eq(t.index), e.length && e[0] !== this.element[0] ? e.before(this.element) : t.parent.append(this.element)
        },
        widget: function() {
            return this.uiDialog
        },
        disable: e.noop,
        enable: e.noop,
        close: function(t) {
            var n, r = this;
            if (this._isOpen && this._trigger("beforeClose", t) !== !1) {
                if (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), !this.opener.filter(":focusable").focus().length) try {
                    n = this.document[0].activeElement, n && "body" !== n.nodeName.toLowerCase() && e(n).blur()
                } catch (i) {}
                this._hide(this.uiDialog, this.options.hide, function() {
                    r._trigger("close", t)
                })
            }
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function() {
            this._moveToTop()
        },
        _moveToTop: function(t, n) {
            var r = !1,
                i = this.uiDialog.siblings(".ui-front:visible").map(function() {
                    return +e(this).css("z-index")
                }).get(),
                s = Math.max.apply(null, i);
            return s >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", s + 1), r = !0), r && !n && this._trigger("focus", t), r
        },
        open: function() {
            var t = this;
            return this._isOpen ? (this._moveToTop() && this._focusTabbable(), void 0) : (this._isOpen = !0, this.opener = e(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() {
                t._focusTabbable(), t._trigger("focus")
            }), this._makeFocusTarget(), this._trigger("open"), void 0)
        },
        _focusTabbable: function() {
            var e = this._focusedElement;
            e || (e = this.element.find("[autofocus]")), e.length || (e = this.element.find(":tabbable")), e.length || (e = this.uiDialogButtonPane.find(":tabbable")), e.length || (e = this.uiDialogTitlebarClose.filter(":tabbable")), e.length || (e = this.uiDialog), e.eq(0).focus()
        },
        _keepFocus: function(t) {
            function n() {
                var t = this.document[0].activeElement,
                    n = this.uiDialog[0] === t || e.contains(this.uiDialog[0], t);
                n || this._focusTabbable()
            }
            t.preventDefault(), n.call(this), this._delay(n)
        },
        _createWrapper: function() {
            this.uiDialog = e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()), this._on(this.uiDialog, {
                keydown: function(t) {
                    if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === e.ui.keyCode.ESCAPE) return t.preventDefault(), this.close(t), void 0;
                    if (t.keyCode === e.ui.keyCode.TAB && !t.isDefaultPrevented()) {
                        var n = this.uiDialog.find(":tabbable"),
                            r = n.filter(":first"),
                            i = n.filter(":last");
                        t.target !== i[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== r[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (this._delay(function() {
                            i.focus()
                        }), t.preventDefault()) : (this._delay(function() {
                            r.focus()
                        }), t.preventDefault())
                    }
                },
                mousedown: function(e) {
                    this._moveToTop(e) && this._focusTabbable()
                }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function() {
            var t;
            this.uiDialogTitlebar = e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
                mousedown: function(t) {
                    e(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                }
            }), this.uiDialogTitlebarClose = e("<button type='button'></button>").button({
                label: this.options.closeText,
                icons: {
                    primary: "ui-icon-closethick"
                },
                text: !1
            }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
                click: function(e) {
                    e.preventDefault(), this.close(e)
                }
            }), t = e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(t), this.uiDialog.attr({
                "aria-labelledby": t.attr("id")
            })
        },
        _title: function(e) {
            this.options.title || e.html(" "), e.text(this.options.title)
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
        },
        _createButtons: function() {
            var t = this,
                n = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), e.isEmptyObject(n) || e.isArray(n) && !n.length ? (this.uiDialog.removeClass("ui-dialog-buttons"), void 0) : (e.each(n, function(n, r) {
                var i, s;
                r = e.isFunction(r) ? {
                    click: r,
                    text: n
                } : r, r = e.extend({
                    type: "button"
                }, r), i = r.click, r.click = function() {
                    i.apply(t.element[0], arguments)
                }, s = {
                    icons: r.icons,
                    text: r.showText
                }, delete r.icons, delete r.showText, e("<button></button>", r).button(s).appendTo(t.uiButtonSet)
            }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), void 0)
        },
        _makeDraggable: function() {
            function t(e) {
                return {
                    position: e.position,
                    offset: e.offset
                }
            }
            var n = this,
                r = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(r, i) {
                    e(this).addClass("ui-dialog-dragging"), n._blockFrames(), n._trigger("dragStart", r, t(i))
                },
                drag: function(e, r) {
                    n._trigger("drag", e, t(r))
                },
                stop: function(i, s) {
                    var o = s.offset.left - n.document.scrollLeft(),
                        u = s.offset.top - n.document.scrollTop();
                    r.position = {
                        my: "left top",
                        at: "left" + (o >= 0 ? "+" : "") + o + " " + "top" + (u >= 0 ? "+" : "") + u,
                        of: n.window
                    }, e(this).removeClass("ui-dialog-dragging"), n._unblockFrames(), n._trigger("dragStop", i, t(s))
                }
            })
        },
        _makeResizable: function() {
            function t(e) {
                return {
                    originalPosition: e.originalPosition,
                    originalSize: e.originalSize,
                    position: e.position,
                    size: e.size
                }
            }
            var n = this,
                r = this.options,
                i = r.resizable,
                s = this.uiDialog.css("position"),
                o = "string" == typeof i ? i : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: r.maxWidth,
                maxHeight: r.maxHeight,
                minWidth: r.minWidth,
                minHeight: this._minHeight(),
                handles: o,
                start: function(r, i) {
                    e(this).addClass("ui-dialog-resizing"), n._blockFrames(), n._trigger("resizeStart", r, t(i))
                },
                resize: function(e, r) {
                    n._trigger("resize", e, t(r))
                },
                stop: function(i, s) {
                    var o = n.uiDialog.offset(),
                        u = o.left - n.document.scrollLeft(),
                        a = o.top - n.document.scrollTop();
                    r.height = n.uiDialog.height(), r.width = n.uiDialog.width(), r.position = {
                        my: "left top",
                        at: "left" + (u >= 0 ? "+" : "") + u + " " + "top" + (a >= 0 ? "+" : "") + a,
                        of: n.window
                    }, e(this).removeClass("ui-dialog-resizing"), n._unblockFrames(), n._trigger("resizeStop", i, t(s))
                }
            }).css("position", s)
        },
        _trackFocus: function() {
            this._on(this.widget(), {
                focusin: function(t) {
                    this._makeFocusTarget(), this._focusedElement = e(t.target)
                }
            })
        },
        _makeFocusTarget: function() {
            this._untrackInstance(), this._trackingInstances().unshift(this)
        },
        _untrackInstance: function() {
            var t = this._trackingInstances(),
                n = e.inArray(this, t); - 1 !== n && t.splice(n, 1)
        },
        _trackingInstances: function() {
            var e = this.document.data("ui-dialog-instances");
            return e || (e = [], this.document.data("ui-dialog-instances", e)), e
        },
        _minHeight: function() {
            var e = this.options;
            return "auto" === e.height ? e.minHeight : Math.min(e.minHeight, e.height)
        },
        _position: function() {
            var e = this.uiDialog.is(":visible");
            e || this.uiDialog.show(), this.uiDialog.position(this.options.position), e || this.uiDialog.hide()
        },
        _setOptions: function(t) {
            var n = this,
                r = !1,
                i = {};
            e.each(t, function(e, t) {
                n._setOption(e, t), e in n.sizeRelatedOptions && (r = !0), e in n.resizableRelatedOptions && (i[e] = t)
            }), r && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", i)
        },
        _setOption: function(e, t) {
            var n, r, i = this.uiDialog;
            "dialogClass" === e && i.removeClass(this.options.dialogClass).addClass(t), "disabled" !== e && (this._super(e, t), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({
                label: "" + t
            }), "draggable" === e && (n = i.is(":data(ui-draggable)"), n && !t && i.draggable("destroy"), !n && t && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && (r = i.is(":data(ui-resizable)"), r && !t && i.resizable("destroy"), r && "string" == typeof t && i.resizable("option", "handles", t), r || t === !1 || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function() {
            var e, t, n, r = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }), r.minWidth > r.width && (r.width = r.minWidth), e = this.uiDialog.css({
                height: "auto",
                width: r.width
            }).outerHeight(), t = Math.max(0, r.minHeight - e), n = "number" == typeof r.maxHeight ? Math.max(0, r.maxHeight - e) : "none", "auto" === r.height ? this.element.css({
                minHeight: t,
                maxHeight: n,
                height: "auto"
            }) : this.element.height(Math.max(0, r.height - e)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var t = e(this);
                return e("<div>").css({
                    position: "absolute",
                    width: t.outerWidth(),
                    height: t.outerHeight()
                }).appendTo(t.parent()).offset(t.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _allowInteraction: function(t) {
            return e(t.target).closest(".ui-dialog").length ? !0 : !!e(t.target).closest(".ui-datepicker").length
        },
        _createOverlay: function() {
            if (this.options.modal) {
                var t = !0;
                this._delay(function() {
                    t = !1
                }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
                    focusin: function(e) {
                        t || this._allowInteraction(e) || (e.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                    }
                }), this.overlay = e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {
                    mousedown: "_keepFocus"
                }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
            }
        },
        _destroyOverlay: function() {
            if (this.options.modal && this.overlay) {
                var e = this.document.data("ui-dialog-overlays") - 1;
                e ? this.document.data("ui-dialog-overlays", e) : this.document.unbind("focusin").removeData("ui-dialog-overlays"), this.overlay.remove(), this.overlay = null
            }
        }
    }), e.widget("ui.progressbar", {
        version: "1.11.1",
        options: {
            max: 100,
            value: 0,
            change: null,
            complete: null
        },
        min: 0,
        _create: function() {
            this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min
            }), this.valueDiv = e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue()
        },
        _destroy: function() {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
        },
        value: function(e) {
            return void 0 === e ? this.options.value : (this.options.value = this._constrainedValue(e), this._refreshValue(), void 0)
        },
        _constrainedValue: function(e) {
            return void 0 === e && (e = this.options.value), this.indeterminate = e === !1, "number" != typeof e && (e = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, e))
        },
        _setOptions: function(e) {
            var t = e.value;
            delete e.value, this._super(e), this.options.value = this._constrainedValue(t), this._refreshValue()
        },
        _setOption: function(e, t) {
            "max" === e && (t = Math.max(this.min, t)), "disabled" === e && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this._super(e, t)
        },
        _percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function() {
            var t = this.options.value,
                n = this._percentage();
            this.valueDiv.toggle(this.indeterminate || t > this.min).toggleClass("ui-corner-right", t === this.options.max).width(n.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = e("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": t
            }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== t && (this.oldValue = t, this._trigger("change")), t === this.options.max && this._trigger("complete")
        }
    }), e.widget("ui.selectmenu", {
        version: "1.11.1",
        defaultElement: "<select>",
        options: {
            appendTo: null,
            disabled: null,
            icons: {
                button: "ui-icon-triangle-1-s"
            },
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            width: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            select: null
        },
        _create: function() {
            var e = this.element.uniqueId().attr("id");
            this.ids = {
                element: e,
                button: e + "-button",
                menu: e + "-menu"
            }, this._drawButton(), this._drawMenu(), this.options.disabled && this.disable()
        },
        _drawButton: function() {
            var t = this,
                n = this.element.attr("tabindex");
            this.label = e("label[for='" + this.ids.element + "']").attr("for", this.ids.button), this._on(this.label, {
                click: function(e) {
                    this.button.focus(), e.preventDefault()
                }
            }), this.element.hide(), this.button = e("<span>", {
                "class": "ui-selectmenu-button ui-widget ui-state-default ui-corner-all",
                tabindex: n || this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: "combobox",
                "aria-expanded": "false",
                "aria-autocomplete": "list",
                "aria-owns": this.ids.menu,
                "aria-haspopup": "true"
            }).insertAfter(this.element), e("<span>", {
                "class": "ui-icon " + this.options.icons.button
            }).prependTo(this.button), this.buttonText = e("<span>", {
                "class": "ui-selectmenu-text"
            }).appendTo(this.button), this._setText(this.buttonText, this.element.find("option:selected").text()), this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function() {
                t.menuItems || t._refreshMenu()
            }), this._hoverable(this.button), this._focusable(this.button)
        },
        _drawMenu: function() {
            var t = this;
            this.menu = e("<ul>", {
                "aria-hidden": "true",
                "aria-labelledby": this.ids.button,
                id: this.ids.menu
            }), this.menuWrap = e("<div>", {
                "class": "ui-selectmenu-menu ui-front"
            }).append(this.menu).appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                role: "listbox",
                select: function(e, n) {
                    e.preventDefault(), t._select(n.item.data("ui-selectmenu-item"), e)
                },
                focus: function(e, n) {
                    var r = n.item.data("ui-selectmenu-item");
                    null != t.focusIndex && r.index !== t.focusIndex && (t._trigger("focus", e, {
                        item: r
                    }), t.isOpen || t._select(r, e)), t.focusIndex = r.index, t.button.attr("aria-activedescendant", t.menuItems.eq(r.index).attr("id"))
                }
            }).menu("instance"), this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() {
                return !1
            }, this.menuInstance._isDivider = function() {
                return !1
            }
        },
        refresh: function() {
            this._refreshMenu(), this._setText(this.buttonText, this._getSelectedItem().text()), this.options.width || this._resizeButton()
        },
        _refreshMenu: function() {
            this.menu.empty();
            var e, t = this.element.find("option");
            t.length && (this._parseOptions(t), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup"), e = this._getSelectedItem(), this.menuInstance.focus(null, e), this._setAria(e.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
        },
        open: function(e) {
            this.options.disabled || (this.menuItems ? (this.menu.find(".ui-state-focus").removeClass("ui-state-focus"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", e))
        },
        _position: function() {
            this.menuWrap.position(e.extend({
                of: this.button
            }, this.options.position))
        },
        close: function(e) {
            this.isOpen && (this.isOpen = !1, this._toggleAttr(), this._off(this.document), this._trigger("close", e))
        },
        widget: function() {
            return this.button
        },
        menuWidget: function() {
            return this.menu
        },
        _renderMenu: function(t, n) {
            var r = this,
                i = "";
            e.each(n, function(n, s) {
                s.optgroup !== i && (e("<li>", {
                    "class": "ui-selectmenu-optgroup ui-menu-divider" + (s.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : ""),
                    text: s.optgroup
                }).appendTo(t), i = s.optgroup), r._renderItemData(t, s)
            })
        },
        _renderItemData: function(e, t) {
            return this._renderItem(e, t).data("ui-selectmenu-item", t)
        },
        _renderItem: function(t, n) {
            var r = e("<li>");
            return n.disabled && r.addClass("ui-state-disabled"), this._setText(r, n.label), r.appendTo(t)
        },
        _setText: function(e, t) {
            t ? e.text(t) : e.html("&#160;")
        },
        _move: function(e, t) {
            var n, r, i = ".ui-menu-item";
            this.isOpen ? n = this.menuItems.eq(this.focusIndex) : (n = this.menuItems.eq(this.element[0].selectedIndex), i += ":not(.ui-state-disabled)"), r = "first" === e || "last" === e ? n["first" === e ? "prevAll" : "nextAll"](i).eq(-1) : n[e + "All"](i).eq(0), r.length && this.menuInstance.focus(t, r)
        },
        _getSelectedItem: function() {
            return this.menuItems.eq(this.element[0].selectedIndex)
        },
        _toggle: function(e) {
            this[this.isOpen ? "close" : "open"](e)
        },
        _documentClick: {
            mousedown: function(t) {
                this.isOpen && (e(t.target).closest(".ui-selectmenu-menu, #" + this.ids.button).length || this.close(t))
            }
        },
        _buttonEvents: {
            mousedown: function(e) {
                e.preventDefault()
            },
            click: "_toggle",
            keydown: function(t) {
                var n = !0;
                switch (t.keyCode) {
                    case e.ui.keyCode.TAB:
                    case e.ui.keyCode.ESCAPE:
                        this.close(t), n = !1;
                        break;
                    case e.ui.keyCode.ENTER:
                        this.isOpen && this._selectFocusedItem(t);
                        break;
                    case e.ui.keyCode.UP:
                        t.altKey ? this._toggle(t) : this._move("prev", t);
                        break;
                    case e.ui.keyCode.DOWN:
                        t.altKey ? this._toggle(t) : this._move("next", t);
                        break;
                    case e.ui.keyCode.SPACE:
                        this.isOpen ? this._selectFocusedItem(t) : this._toggle(t);
                        break;
                    case e.ui.keyCode.LEFT:
                        this._move("prev", t);
                        break;
                    case e.ui.keyCode.RIGHT:
                        this._move("next", t);
                        break;
                    case e.ui.keyCode.HOME:
                    case e.ui.keyCode.PAGE_UP:
                        this._move("first", t);
                        break;
                    case e.ui.keyCode.END:
                    case e.ui.keyCode.PAGE_DOWN:
                        this._move("last", t);
                        break;
                    default:
                        this.menu.trigger(t), n = !1
                }
                n && t.preventDefault()
            }
        },
        _selectFocusedItem: function(e) {
            var t = this.menuItems.eq(this.focusIndex);
            t.hasClass("ui-state-disabled") || this._select(t.data("ui-selectmenu-item"), e)
        },
        _select: function(e, t) {
            var n = this.element[0].selectedIndex;
            this.element[0].selectedIndex = e.index, this._setText(this.buttonText, e.label), this._setAria(e), this._trigger("select", t, {
                item: e
            }), e.index !== n && this._trigger("change", t, {
                item: e
            }), this.close(t)
        },
        _setAria: function(e) {
            var t = this.menuItems.eq(e.index).attr("id");
            this.button.attr({
                "aria-labelledby": t,
                "aria-activedescendant": t
            }), this.menu.attr("aria-activedescendant", t)
        },
        _setOption: function(e, t) {
            "icons" === e && this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(t.button), this._super(e, t), "appendTo" === e && this.menuWrap.appendTo(this._appendTo()), "disabled" === e && (this.menuInstance.option("disabled", t), this.button.toggleClass("ui-state-disabled", t).attr("aria-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)), "width" === e && this._resizeButton()
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
        },
        _toggleAttr: function() {
            this.button.toggleClass("ui-corner-top", this.isOpen).toggleClass("ui-corner-all", !this.isOpen).attr("aria-expanded", this.isOpen), this.menuWrap.toggleClass("ui-selectmenu-open", this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
        },
        _resizeButton: function() {
            var e = this.options.width;
            e || (e = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(e)
        },
        _resizeMenu: function() {
            this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
        },
        _getCreateOptions: function() {
            return {
                disabled: this.element.prop("disabled")
            }
        },
        _parseOptions: function(t) {
            var n = [];
            t.each(function(t, r) {
                var i = e(r),
                    s = i.parent("optgroup");
                n.push({
                    element: i,
                    index: t,
                    value: i.attr("value"),
                    label: i.text(),
                    optgroup: s.attr("label") || "",
                    disabled: s.prop("disabled") || i.prop("disabled")
                })
            }), this.items = n
        },
        _destroy: function() {
            this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.label.attr("for", this.ids.element)
        }
    }), e.widget("ui.slider", e.ui.mouse, {
        version: "1.11.1",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function() {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
        },
        _refresh: function() {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
        },
        _createHandles: function() {
            var t, n, r = this.options,
                i = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                s = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
                o = [];
            for (n = r.values && r.values.length || 1, i.length > n && (i.slice(n).remove(), i = i.slice(0, n)), t = i.length; n > t; t++) o.push(s);
            this.handles = i.add(e(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(t) {
                e(this).data("ui-slider-handle-index", t)
            })
        },
        _createRange: function() {
            var t = this.options,
                n = "";
            t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = e("<div></div>").appendTo(this.element), n = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(n + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range : ""))) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function() {
            this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
        },
        _destroy: function() {
            this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var n, r, i, s, o, u, a, f, l = this,
                c = this.options;
            return c.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), n = {
                x: t.pageX,
                y: t.pageY
            }, r = this._normValueFromMouse(n), i = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) {
                var n = Math.abs(r - l.values(t));
                (i > n || i === n && (t === l._lastChangedValue || l.values(t) === c.min)) && (i = n, s = e(this), o = t)
            }), u = this._start(t, o), u === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, s.addClass("ui-state-active").focus(), a = s.offset(), f = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = f ? {
                left: 0,
                top: 0
            } : {
                left: t.pageX - a.left - s.width() / 2,
                top: t.pageY - a.top - s.height() / 2 - (parseInt(s.css("borderTopWidth"), 10) || 0) - (parseInt(s.css("borderBottomWidth"), 10) || 0) + (parseInt(s.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(t, o, r), this._animateOff = !0, !0))
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(e) {
            var t = {
                    x: e.pageX,
                    y: e.pageY
                },
                n = this._normValueFromMouse(t);
            return this._slide(e, this._handleIndex, n), !1
        },
        _mouseStop: function(e) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(e) {
            var t, n, r, i, s;
            return "horizontal" === this.orientation ? (t = this.elementSize.width, n = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, n = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), r = n / t, r > 1 && (r = 1), 0 > r && (r = 0), "vertical" === this.orientation && (r = 1 - r), i = this._valueMax() - this._valueMin(), s = this._valueMin() + r * i, this._trimAlignValue(s)
        },
        _start: function(e, t) {
            var n = {
                handle: this.handles[t],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("start", e, n)
        },
        _slide: function(e, t, n) {
            var r, i, s;
            this.options.values && this.options.values.length ? (r = this.values(t ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === t && n > r || 1 === t && r > n) && (n = r), n !== this.values(t) && (i = this.values(), i[t] = n, s = this._trigger("slide", e, {
                handle: this.handles[t],
                value: n,
                values: i
            }), r = this.values(t ? 0 : 1), s !== !1 && this.values(t, n))) : n !== this.value() && (s = this._trigger("slide", e, {
                handle: this.handles[t],
                value: n
            }), s !== !1 && this.value(n))
        },
        _stop: function(e, t) {
            var n = {
                handle: this.handles[t],
                value: this.value()
            };
            this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("stop", e, n)
        },
        _change: function(e, t) {
            if (!this._keySliding && !this._mouseSliding) {
                var n = {
                    handle: this.handles[t],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._lastChangedValue = t, this._trigger("change", e, n)
            }
        },
        value: function(e) {
            return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0), void 0) : this._value()
        },
        values: function(t, n) {
            var r, i, s;
            if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(n), this._refreshValue(), this._change(null, t), void 0;
            if (!arguments.length) return this._values();
            if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
            for (r = this.options.values, i = arguments[0], s = 0; r.length > s; s += 1) r[s] = this._trimAlignValue(i[s]), this._change(null, s);
            this._refreshValue()
        },
        _setOption: function(t, n) {
            var r, i = 0;
            switch ("range" === t && this.options.range === !0 && ("min" === n ? (this.options.value = this._values(0), this.options.values = null) : "max" === n && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), e.isArray(this.options.values) && (i = this.options.values.length), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!n), this._super(t, n), t) {
                case "orientation":
                    this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === n ? "bottom" : "left", "");
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), r = 0; i > r; r += 1) this._change(null, r);
                    this._animateOff = !1;
                    break;
                case "min":
                case "max":
                    this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _value: function() {
            var e = this.options.value;
            return e = this._trimAlignValue(e)
        },
        _values: function(e) {
            var t, n, r;
            if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t);
            if (this.options.values && this.options.values.length) {
                for (n = this.options.values.slice(), r = 0; n.length > r; r += 1) n[r] = this._trimAlignValue(n[r]);
                return n
            }
            return []
        },
        _trimAlignValue: function(e) {
            if (this._valueMin() >= e) return this._valueMin();
            if (e >= this._valueMax()) return this._valueMax();
            var t = this.options.step > 0 ? this.options.step : 1,
                n = (e - this._valueMin()) % t,
                r = e - n;
            return 2 * Math.abs(n) >= t && (r += n > 0 ? t : -t), parseFloat(r.toFixed(5))
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.options.max
        },
        _refreshValue: function() {
            var t, n, r, i, s, o = this.options.range,
                u = this.options,
                a = this,
                f = this._animateOff ? !1 : u.animate,
                l = {};
            this.options.values && this.options.values.length ? this.handles.each(function(r) {
                n = 100 * ((a.values(r) - a._valueMin()) / (a._valueMax() - a._valueMin())), l["horizontal" === a.orientation ? "left" : "bottom"] = n + "%", e(this).stop(1, 1)[f ? "animate" : "css"](l, u.animate), a.options.range === !0 && ("horizontal" === a.orientation ? (0 === r && a.range.stop(1, 1)[f ? "animate" : "css"]({
                    left: n + "%"
                }, u.animate), 1 === r && a.range[f ? "animate" : "css"]({
                    width: n - t + "%"
                }, {
                    queue: !1,
                    duration: u.animate
                })) : (0 === r && a.range.stop(1, 1)[f ? "animate" : "css"]({
                    bottom: n + "%"
                }, u.animate), 1 === r && a.range[f ? "animate" : "css"]({
                    height: n - t + "%"
                }, {
                    queue: !1,
                    duration: u.animate
                }))), t = n
            }) : (r = this.value(), i = this._valueMin(), s = this._valueMax(), n = s !== i ? 100 * ((r - i) / (s - i)) : 0, l["horizontal" === this.orientation ? "left" : "bottom"] = n + "%", this.handle.stop(1, 1)[f ? "animate" : "css"](l, u.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[f ? "animate" : "css"]({
                width: n + "%"
            }, u.animate), "max" === o && "horizontal" === this.orientation && this.range[f ? "animate" : "css"]({
                width: 100 - n + "%"
            }, {
                queue: !1,
                duration: u.animate
            }), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[f ? "animate" : "css"]({
                height: n + "%"
            }, u.animate), "max" === o && "vertical" === this.orientation && this.range[f ? "animate" : "css"]({
                height: 100 - n + "%"
            }, {
                queue: !1,
                duration: u.animate
            }))
        },
        _handleEvents: {
            keydown: function(t) {
                var n, r, i, s, o = e(t.target).data("ui-slider-handle-index");
                switch (t.keyCode) {
                    case e.ui.keyCode.HOME:
                    case e.ui.keyCode.END:
                    case e.ui.keyCode.PAGE_UP:
                    case e.ui.keyCode.PAGE_DOWN:
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, e(t.target).addClass("ui-state-active"), n = this._start(t, o), n === !1)) return
                }
                switch (s = this.options.step, r = i = this.options.values && this.options.values.length ? this.values(o) : this.value(), t.keyCode) {
                    case e.ui.keyCode.HOME:
                        i = this._valueMin();
                        break;
                    case e.ui.keyCode.END:
                        i = this._valueMax();
                        break;
                    case e.ui.keyCode.PAGE_UP:
                        i = this._trimAlignValue(r + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case e.ui.keyCode.PAGE_DOWN:
                        i = this._trimAlignValue(r - (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                        if (r === this._valueMax()) return;
                        i = this._trimAlignValue(r + s);
                        break;
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        if (r === this._valueMin()) return;
                        i = this._trimAlignValue(r - s)
                }
                this._slide(t, o, i)
            },
            keyup: function(t) {
                var n = e(t.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(t, n), this._change(t, n), e(t.target).removeClass("ui-state-active"))
            }
        }
    }), e.widget("ui.spinner", {
        version: "1.11.1",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function() {
            var t = {},
                n = this.element;
            return e.each(["min", "max", "step"], function(e, r) {
                var i = n.attr(r);
                void 0 !== i && i.length && (t[r] = i)
            }), t
        },
        _events: {
            keydown: function(e) {
                this._start(e) && this._keydown(e) && e.preventDefault()
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val()
            },
            blur: function(e) {
                return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", e), void 0)
            },
            mousewheel: function(e, t) {
                if (t) {
                    if (!this.spinning && !this._start(e)) return !1;
                    this._spin((t > 0 ? 1 : -1) * this.options.step, e), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
                        this.spinning && this._stop(e)
                    }, 100), e.preventDefault()
                }
            },
            "mousedown .ui-spinner-button": function(t) {
                function n() {
                    var e = this.element[0] === this.document[0].activeElement;
                    e || (this.element.focus(), this.previous = r, this._delay(function() {
                        this.previous = r
                    }))
                }
                var r;
                r = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), t.preventDefault(), n.call(this), this.cancelBlur = !0, this._delay(function() {
                    delete this.cancelBlur, n.call(this)
                }), this._start(t) !== !1 && this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(t) {
                return e(t.currentTarget).hasClass("ui-state-active") ? this._start(t) === !1 ? !1 : (this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t), void 0) : void 0
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _draw: function() {
            var e = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            this.element.attr("role", "spinbutton"), this.buttons = e.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * e.height()) && e.height() > 0 && e.height(e.height()), this.options.disabled && this.disable()
        },
        _keydown: function(t) {
            var n = this.options,
                r = e.ui.keyCode;
            switch (t.keyCode) {
                case r.UP:
                    return this._repeat(null, 1, t), !0;
                case r.DOWN:
                    return this._repeat(null, -1, t), !0;
                case r.PAGE_UP:
                    return this._repeat(null, n.page, t), !0;
                case r.PAGE_DOWN:
                    return this._repeat(null, -n.page, t), !0
            }
            return !1
        },
        _uiSpinnerHtml: function() {
            return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
        },
        _buttonHtml: function() {
            return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" + "</a>" + "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" + "<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" + "</a>"
        },
        _start: function(e) {
            return this.spinning || this._trigger("start", e) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
        },
        _repeat: function(e, t, n) {
            e = e || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
                this._repeat(40, t, n)
            }, e), this._spin(t * this.options.step, n)
        },
        _spin: function(e, t) {
            var n = this.value() || 0;
            this.counter || (this.counter = 1), n = this._adjustValue(n + e * this._increment(this.counter)), this.spinning && this._trigger("spin", t, {
                value: n
            }) === !1 || (this._value(n), this.counter++)
        },
        _increment: function(t) {
            var n = this.options.incremental;
            return n ? e.isFunction(n) ? n(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1
        },
        _precision: function() {
            var e = this._precisionOf(this.options.step);
            return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e
        },
        _precisionOf: function(e) {
            var t = "" + e,
                n = t.indexOf(".");
            return -1 === n ? 0 : t.length - n - 1
        },
        _adjustValue: function(e) {
            var t, n, r = this.options;
            return t = null !== r.min ? r.min : 0, n = e - t, n = Math.round(n / r.step) * r.step, e = t + n, e = parseFloat(e.toFixed(this._precision())), null !== r.max && e > r.max ? r.max : null !== r.min && r.min > e ? r.min : e
        },
        _stop: function(e) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", e))
        },
        _setOption: function(e, t) {
            if ("culture" === e || "numberFormat" === e) {
                var n = this._parse(this.element.val());
                return this.options[e] = t, this.element.val(this._format(n)), void 0
            }("max" === e || "min" === e || "step" === e) && "string" == typeof t && (t = this._parse(t)), "icons" === e && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down)), this._super(e, t), "disabled" === e && (this.widget().toggleClass("ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable"))
        },
        _setOptions: a(function(e) {
            this._super(e)
        }),
        _parse: function(e) {
            return "string" == typeof e && "" !== e && (e = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(e, 10, this.options.culture) : +e), "" === e || isNaN(e) ? null : e
        },
        _format: function(e) {
            return "" === e ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(e, this.options.numberFormat, this.options.culture) : e
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        isValid: function() {
            var e = this.value();
            return null === e ? !1 : e === this._adjustValue(e)
        },
        _value: function(e, t) {
            var n;
            "" !== e && (n = this._parse(e), null !== n && (t || (n = this._adjustValue(n)), e = this._format(n))), this.element.val(e), this._refresh()
        },
        _destroy: function() {
            this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
        },
        stepUp: a(function(e) {
            this._stepUp(e)
        }),
        _stepUp: function(e) {
            this._start() && (this._spin((e || 1) * this.options.step), this._stop())
        },
        stepDown: a(function(e) {
            this._stepDown(e)
        }),
        _stepDown: function(e) {
            this._start() && (this._spin((e || 1) * -this.options.step), this._stop())
        },
        pageUp: a(function(e) {
            this._stepUp((e || 1) * this.options.page)
        }),
        pageDown: a(function(e) {
            this._stepDown((e || 1) * this.options.page)
        }),
        value: function(e) {
            return arguments.length ? (a(this._value).call(this, e), void 0) : this._parse(this.element.val())
        },
        widget: function() {
            return this.uiSpinner
        }
    }), e.widget("ui.tabs", {
        version: "1.11.1",
        delay: 300,
        options: {
            active: null,
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: function() {
            var e = /#.*$/;
            return function(t) {
                var n, r;
                t = t.cloneNode(!1), n = t.href.replace(e, ""), r = location.href.replace(e, "");
                try {
                    n = decodeURIComponent(n)
                } catch (i) {}
                try {
                    r = decodeURIComponent(r)
                } catch (i) {}
                return t.hash.length > 1 && n === r
            }
        }(),
        _create: function() {
            var t = this,
                n = this.options;
            this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", n.collapsible), this._processTabs(), n.active = this._initialActive(), e.isArray(n.disabled) && (n.disabled = e.unique(n.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"), function(e) {
                return t.tabs.index(e)
            }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(n.active) : e(), this._refresh(), this.active.length && this.load(n.active)
        },
        _initialActive: function() {
            var t = this.options.active,
                n = this.options.collapsible,
                r = location.hash.substring(1);
            return null === t && (r && this.tabs.each(function(n, i) {
                return e(i).attr("aria-controls") === r ? (t = n, !1) : void 0
            }), null === t && (t = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === t || -1 === t) && (t = this.tabs.length ? 0 : !1)), t !== !1 && (t = this.tabs.index(this.tabs.eq(t)), -1 === t && (t = n ? !1 : 0)), !n && t === !1 && this.anchors.length && (t = 0), t
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : e()
            }
        },
        _tabKeydown: function(t) {
            var n = e(this.document[0].activeElement).closest("li"),
                r = this.tabs.index(n),
                i = !0;
            if (!this._handlePageNav(t)) {
                switch (t.keyCode) {
                    case e.ui.keyCode.RIGHT:
                    case e.ui.keyCode.DOWN:
                        r++;
                        break;
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.LEFT:
                        i = !1, r--;
                        break;
                    case e.ui.keyCode.END:
                        r = this.anchors.length - 1;
                        break;
                    case e.ui.keyCode.HOME:
                        r = 0;
                        break;
                    case e.ui.keyCode.SPACE:
                        return t.preventDefault(), clearTimeout(this.activating), this._activate(r), void 0;
                    case e.ui.keyCode.ENTER:
                        return t.preventDefault(), clearTimeout(this.activating), this._activate(r === this.options.active ? !1 : r), void 0;
                    default:
                        return
                }
                t.preventDefault(), clearTimeout(this.activating), r = this._focusNextTab(r, i), t.ctrlKey || (n.attr("aria-selected", "false"), this.tabs.eq(r).attr("aria-selected", "true"), this.activating = this._delay(function() {
                    this.option("active", r)
                }, this.delay))
            }
        },
        _panelKeydown: function(t) {
            this._handlePageNav(t) || t.ctrlKey && t.keyCode === e.ui.keyCode.UP && (t.preventDefault(), this.active.focus())
        },
        _handlePageNav: function(t) {
            return t.altKey && t.keyCode === e.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === e.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
        },
        _findNextTab: function(t, n) {
            function r() {
                return t > i && (t = 0), 0 > t && (t = i), t
            }
            for (var i = this.tabs.length - 1; - 1 !== e.inArray(r(), this.options.disabled);) t = n ? t + 1 : t - 1;
            return t
        },
        _focusNextTab: function(e, t) {
            return e = this._findNextTab(e, t), this.tabs.eq(e).focus(), e
        },
        _setOption: function(e, t) {
            return "active" === e ? (this._activate(t), void 0) : "disabled" === e ? (this._setupDisabled(t), void 0) : (this._super(e, t), "collapsible" === e && (this.element.toggleClass("ui-tabs-collapsible", t), t || this.options.active !== !1 || this._activate(0)), "event" === e && this._setupEvents(t), "heightStyle" === e && this._setupHeightStyle(t), void 0)
        },
        _sanitizeSelector: function(e) {
            return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var t = this.options,
                n = this.tablist.children(":has(a[href])");
            t.disabled = e.map(n.filter(".ui-state-disabled"), function(e) {
                return n.index(e)
            }), this._processTabs(), t.active !== !1 && this.anchors.length ? this.active.length && !e.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = e()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = e()), this._refresh()
        },
        _refresh: function() {
            this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-hidden": "true"
            }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }), this._getPanelForTab(this.active).show().attr({
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function() {
            var t = this;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function(t) {
                e(this).is(".ui-state-disabled") && t.preventDefault()
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                e(this).closest("li").is(".ui-state-disabled") && this.blur()
            }), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            }), this.anchors = this.tabs.map(function() {
                return e("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            }), this.panels = e(), this.anchors.each(function(n, r) {
                var i, s, o, u = e(r).uniqueId().attr("id"),
                    a = e(r).closest("li"),
                    f = a.attr("aria-controls");
                t._isLocal(r) ? (i = r.hash, o = i.substring(1), s = t.element.find(t._sanitizeSelector(i))) : (o = a.attr("aria-controls") || e({}).uniqueId()[0].id, i = "#" + o, s = t.element.find(i), s.length || (s = t._createPanel(o), s.insertAfter(t.panels[n - 1] || t.tablist)), s.attr("aria-live", "polite")), s.length && (t.panels = t.panels.add(s)), f && a.data("ui-tabs-aria-controls", f), a.attr({
                    "aria-controls": o,
                    "aria-labelledby": u
                }), s.attr("aria-labelledby", u)
            }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
        },
        _getList: function() {
            return this.tablist || this.element.find("ol,ul").eq(0)
        },
        _createPanel: function(t) {
            return e("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        },
        _setupDisabled: function(t) {
            e.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1);
            for (var n, r = 0; n = this.tabs[r]; r++) t === !0 || -1 !== e.inArray(r, t) ? e(n).addClass("ui-state-disabled").attr("aria-disabled", "true") : e(n).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = t
        },
        _setupEvents: function(t) {
            var n = {};
            t && e.each(t.split(" "), function(e, t) {
                n[t] = "_eventHandler"
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                click: function(e) {
                    e.preventDefault()
                }
            }), this._on(this.anchors, n), this._on(this.tabs, {
                keydown: "_tabKeydown"
            }), this._on(this.panels, {
                keydown: "_panelKeydown"
            }), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(t) {
            var n, r = this.element.parent();
            "fill" === t ? (n = r.height(), n -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                var t = e(this),
                    r = t.css("position");
                "absolute" !== r && "fixed" !== r && (n -= t.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function() {
                n -= e(this).outerHeight(!0)
            }), this.panels.each(function() {
                e(this).height(Math.max(0, n - e(this).innerHeight() + e(this).height()))
            }).css("overflow", "auto")) : "auto" === t && (n = 0, this.panels.each(function() {
                n = Math.max(n, e(this).height("").height())
            }).height(n))
        },
        _eventHandler: function(t) {
            var n = this.options,
                r = this.active,
                i = e(t.currentTarget),
                s = i.closest("li"),
                o = s[0] === r[0],
                u = o && n.collapsible,
                a = u ? e() : this._getPanelForTab(s),
                f = r.length ? this._getPanelForTab(r) : e(),
                l = {
                    oldTab: r,
                    oldPanel: f,
                    newTab: u ? e() : s,
                    newPanel: a
                };
            t.preventDefault(), s.hasClass("ui-state-disabled") || s.hasClass("ui-tabs-loading") || this.running || o && !n.collapsible || this._trigger("beforeActivate", t, l) === !1 || (n.active = u ? !1 : this.tabs.index(s), this.active = o ? e() : s, this.xhr && this.xhr.abort(), f.length || a.length || e.error("jQuery UI Tabs: Mismatching fragment identifier."), a.length && this.load(this.tabs.index(s), t), this._toggle(t, l))
        },
        _toggle: function(t, n) {
            function r() {
                s.running = !1, s._trigger("activate", t, n)
            }

            function i() {
                n.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), o.length && s.options.show ? s._show(o, s.options.show, r) : (o.show(), r())
            }
            var s = this,
                o = n.newPanel,
                u = n.oldPanel;
            this.running = !0, u.length && this.options.hide ? this._hide(u, this.options.hide, function() {
                n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), i()
            }) : (n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), u.hide(), i()), u.attr("aria-hidden", "true"), n.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), o.length && u.length ? n.oldTab.attr("tabIndex", -1) : o.length && this.tabs.filter(function() {
                return 0 === e(this).attr("tabIndex")
            }).attr("tabIndex", -1), o.attr("aria-hidden", "false"), n.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _activate: function(t) {
            var n, r = this._findActive(t);
            r[0] !== this.active[0] && (r.length || (r = this.active), n = r.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: n,
                currentTarget: n,
                preventDefault: e.noop
            }))
        },
        _findActive: function(t) {
            return t === !1 ? e() : this.tabs.eq(t)
        },
        _getIndex: function(e) {
            return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + e + "']"))), e
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tablist.unbind(this.eventNamespace), this.tabs.add(this.panels).each(function() {
                e.data(this, "ui-tabs-destroy") ? e(this).remove() : e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
            }), this.tabs.each(function() {
                var t = e(this),
                    n = t.data("ui-tabs-aria-controls");
                n ? t.attr("aria-controls", n).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function(t) {
            var n = this.options.disabled;
            n !== !1 && (void 0 === t ? n = !1 : (t = this._getIndex(t), n = e.isArray(n) ? e.map(n, function(e) {
                return e !== t ? e : null
            }) : e.map(this.tabs, function(e, n) {
                return n !== t ? n : null
            })), this._setupDisabled(n))
        },
        disable: function(t) {
            var n = this.options.disabled;
            if (n !== !0) {
                if (void 0 === t) n = !0;
                else {
                    if (t = this._getIndex(t), -1 !== e.inArray(t, n)) return;
                    n = e.isArray(n) ? e.merge([t], n).sort() : [t]
                }
                this._setupDisabled(n)
            }
        },
        load: function(t, n) {
            t = this._getIndex(t);
            var r = this,
                i = this.tabs.eq(t),
                s = i.find(".ui-tabs-anchor"),
                o = this._getPanelForTab(i),
                u = {
                    tab: i,
                    panel: o
                };
            this._isLocal(s[0]) || (this.xhr = e.ajax(this._ajaxSettings(s, n, u)), this.xhr && "canceled" !== this.xhr.statusText && (i.addClass("ui-tabs-loading"), o.attr("aria-busy", "true"), this.xhr.success(function(e) {
                setTimeout(function() {
                    o.html(e), r._trigger("load", n, u)
                }, 1)
            }).complete(function(e, t) {
                setTimeout(function() {
                    "abort" === t && r.panels.stop(!1, !0), i.removeClass("ui-tabs-loading"), o.removeAttr("aria-busy"), e === r.xhr && delete r.xhr
                }, 1)
            })))
        },
        _ajaxSettings: function(t, n, r) {
            var i = this;
            return {
                url: t.attr("href"),
                beforeSend: function(t, s) {
                    return i._trigger("beforeLoad", n, e.extend({
                        jqXHR: t,
                        ajaxSettings: s
                    }, r))
                }
            }
        },
        _getPanelForTab: function(t) {
            var n = e(t).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + n))
        }
    }), e.widget("ui.tooltip", {
        version: "1.11.1",
        options: {
            content: function() {
                var t = e(this).attr("title") || "";
                return e("<a>").text(t).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: !0,
            tooltipClass: null,
            track: !1,
            close: null,
            open: null
        },
        _addDescribedBy: function(t, n) {
            var r = (t.attr("aria-describedby") || "").split(/\s+/);
            r.push(n), t.data("ui-tooltip-id", n).attr("aria-describedby", e.trim(r.join(" ")))
        },
        _removeDescribedBy: function(t) {
            var n = t.data("ui-tooltip-id"),
                r = (t.attr("aria-describedby") || "").split(/\s+/),
                i = e.inArray(n, r); - 1 !== i && r.splice(i, 1), t.removeData("ui-tooltip-id"), r = e.trim(r.join(" ")), r ? t.attr("aria-describedby", r) : t.removeAttr("aria-describedby")
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable(), this.liveRegion = e("<div>").attr({
                role: "log",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)
        },
        _setOption: function(t, n) {
            var r = this;
            return "disabled" === t ? (this[n ? "_disable" : "_enable"](), this.options[t] = n, void 0) : (this._super(t, n), "content" === t && e.each(this.tooltips, function(e, t) {
                r._updateContent(t)
            }), void 0)
        },
        _disable: function() {
            var t = this;
            e.each(this.tooltips, function(n, r) {
                var i = e.Event("blur");
                i.target = i.currentTarget = r[0], t.close(i, !0)
            }), this.element.find(this.options.items).addBack().each(function() {
                var t = e(this);
                t.is("[title]") && t.data("ui-tooltip-title", t.attr("title")).removeAttr("title")
            })
        },
        _enable: function() {
            this.element.find(this.options.items).addBack().each(function() {
                var t = e(this);
                t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
            })
        },
        open: function(t) {
            var n = this,
                r = e(t ? t.target : this.element).closest(this.options.items);
            r.length && !r.data("ui-tooltip-id") && (r.attr("title") && r.data("ui-tooltip-title", r.attr("title")), r.data("ui-tooltip-open", !0), t && "mouseover" === t.type && r.parents().each(function() {
                var t, r = e(this);
                r.data("ui-tooltip-open") && (t = e.Event("blur"), t.target = t.currentTarget = this, n.close(t, !0)), r.attr("title") && (r.uniqueId(), n.parents[this.id] = {
                    element: this,
                    title: r.attr("title")
                }, r.attr("title", ""))
            }), this._updateContent(r, t))
        },
        _updateContent: function(e, t) {
            var n, r = this.options.content,
                i = this,
                s = t ? t.type : null;
            return "string" == typeof r ? this._open(t, e, r) : (n = r.call(e[0], function(n) {
                e.data("ui-tooltip-open") && i._delay(function() {
                    t && (t.type = s), this._open(t, e, n)
                })
            }), n && this._open(t, e, n), void 0)
        },
        _open: function(t, n, r) {
            function i(e) {
                f.of = e, s.is(":hidden") || s.position(f)
            }
            var s, o, u, a, f = e.extend({}, this.options.position);
            if (r) {
                if (s = this._find(n), s.length) return s.find(".ui-tooltip-content").html(r), void 0;
                n.is("[title]") && (t && "mouseover" === t.type ? n.attr("title", "") : n.removeAttr("title")), s = this._tooltip(n), this._addDescribedBy(n, s.attr("id")), s.find(".ui-tooltip-content").html(r), this.liveRegion.children().hide(), r.clone ? (a = r.clone(), a.removeAttr("id").find("[id]").removeAttr("id")) : a = r, e("<div>").html(a).appendTo(this.liveRegion), this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, {
                    mousemove: i
                }), i(t)) : s.position(e.extend({
                    of: n
                }, this.options.position)), this.hiding = !1, this.closing = !1, s.hide(), this._show(s, this.options.show), this.options.show && this.options.show.delay && (u = this.delayedShow = setInterval(function() {
                    s.is(":visible") && (i(f.of), clearInterval(u))
                }, e.fx.interval)), this._trigger("open", t, {
                    tooltip: s
                }), o = {
                    keyup: function(t) {
                        if (t.keyCode === e.ui.keyCode.ESCAPE) {
                            var r = e.Event(t);
                            r.currentTarget = n[0], this.close(r, !0)
                        }
                    }
                }, n[0] !== this.element[0] && (o.remove = function() {
                    this._removeTooltip(s)
                }), t && "mouseover" !== t.type || (o.mouseleave = "close"), t && "focusin" !== t.type || (o.focusout = "close"), this._on(!0, n, o)
            }
        },
        close: function(t) {
            var n = this,
                r = e(t ? t.currentTarget : this.element),
                i = this._find(r);
            this.closing || (clearInterval(this.delayedShow), r.data("ui-tooltip-title") && !r.attr("title") && r.attr("title", r.data("ui-tooltip-title")), this._removeDescribedBy(r), this.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function() {
                n._removeTooltip(e(this)), this.hiding = !1, this.closing = !1
            }), r.removeData("ui-tooltip-open"), this._off(r, "mouseleave focusout keyup"), r[0] !== this.element[0] && this._off(r, "remove"), this._off(this.document, "mousemove"), t && "mouseleave" === t.type && e.each(this.parents, function(t, r) {
                e(r.element).attr("title", r.title), delete n.parents[t]
            }), this.closing = !0, this._trigger("close", t, {
                tooltip: i
            }), this.hiding || (this.closing = !1))
        },
        _tooltip: function(t) {
            var n = e("<div>").attr("role", "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || "")),
                r = n.uniqueId().attr("id");
            return e("<div>").addClass("ui-tooltip-content").appendTo(n), n.appendTo(this.document[0].body), this.tooltips[r] = t, n
        },
        _find: function(t) {
            var n = t.data("ui-tooltip-id");
            return n ? e("#" + n) : e()
        },
        _removeTooltip: function(e) {
            e.remove(), delete this.tooltips[e.attr("id")]
        },
        _destroy: function() {
            var t = this;
            e.each(this.tooltips, function(n, r) {
                var i = e.Event("blur");
                i.target = i.currentTarget = r[0], t.close(i, !0), e("#" + n).remove(), r.data("ui-tooltip-title") && (r.attr("title") || r.attr("title", r.data("ui-tooltip-title")), r.removeData("ui-tooltip-title"))
            }), this.liveRegion.remove()
        }
    });
    var y = "ui-effects-",
        b = e;
    e.effects = {
            effect: {}
        },
        function(e, t) {
            function n(e, t, n) {
                var r = c[t.type] || {};
                return null == e ? n || !t.def ? null : t.def : (e = r.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : r.mod ? (e + r.mod) % r.mod : 0 > e ? 0 : e > r.max ? r.max : e)
            }

            function r(n) {
                var r = f(),
                    i = r._rgba = [];
                return n = n.toLowerCase(), d(a, function(e, s) {
                    var o, u = s.re.exec(n),
                        a = u && s.parse(u),
                        f = s.space || "rgba";
                    return a ? (o = r[f](a), r[l[f].cache] = o[l[f].cache], i = r._rgba = o._rgba, !1) : t
                }), i.length ? ("0,0,0,0" === i.join() && e.extend(i, s.transparent), r) : s[n]
            }

            function i(e, t, n) {
                return n = (n + 1) % 1, 1 > 6 * n ? e + 6 * (t - e) * n : 1 > 2 * n ? t : 2 > 3 * n ? e + 6 * (t - e) * (2 / 3 - n) : e
            }
            var s, o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                u = /^([\-+])=\s*(\d+\.?\d*)/,
                a = [{
                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(e) {
                        return [e[1], e[2], e[3], e[4]]
                    }
                }, {
                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(e) {
                        return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]]
                    }
                }, {
                    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                    parse: function(e) {
                        return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
                    }
                }, {
                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                    parse: function(e) {
                        return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
                    }
                }, {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function(e) {
                        return [e[1], e[2] / 100, e[3] / 100, e[4]]
                    }
                }],
                f = e.Color = function(t, n, r, i) {
                    return new e.Color.fn.parse(t, n, r, i)
                },
                l = {
                    rgba: {
                        props: {
                            red: {
                                idx: 0,
                                type: "byte"
                            },
                            green: {
                                idx: 1,
                                type: "byte"
                            },
                            blue: {
                                idx: 2,
                                type: "byte"
                            }
                        }
                    },
                    hsla: {
                        props: {
                            hue: {
                                idx: 0,
                                type: "degrees"
                            },
                            saturation: {
                                idx: 1,
                                type: "percent"
                            },
                            lightness: {
                                idx: 2,
                                type: "percent"
                            }
                        }
                    }
                },
                c = {
                    "byte": {
                        floor: !0,
                        max: 255
                    },
                    percent: {
                        max: 1
                    },
                    degrees: {
                        mod: 360,
                        floor: !0
                    }
                },
                h = f.support = {},
                p = e("<p>")[0],
                d = e.each;
            p.style.cssText = "background-color:rgba(1,1,1,.5)", h.rgba = p.style.backgroundColor.indexOf("rgba") > -1, d(l, function(e, t) {
                t.cache = "_" + e, t.props.alpha = {
                    idx: 3,
                    type: "percent",
                    def: 1
                }
            }), f.fn = e.extend(f.prototype, {
                parse: function(i, o, u, a) {
                    if (i === t) return this._rgba = [null, null, null, null], this;
                    (i.jquery || i.nodeType) && (i = e(i).css(o), o = t);
                    var c = this,
                        h = e.type(i),
                        p = this._rgba = [];
                    return o !== t && (i = [i, o, u, a], h = "array"), "string" === h ? this.parse(r(i) || s._default) : "array" === h ? (d(l.rgba.props, function(e, t) {
                        p[t.idx] = n(i[t.idx], t)
                    }), this) : "object" === h ? (i instanceof f ? d(l, function(e, t) {
                        i[t.cache] && (c[t.cache] = i[t.cache].slice())
                    }) : d(l, function(t, r) {
                        var s = r.cache;
                        d(r.props, function(e, t) {
                            if (!c[s] && r.to) {
                                if ("alpha" === e || null == i[e]) return;
                                c[s] = r.to(c._rgba)
                            }
                            c[s][t.idx] = n(i[e], t, !0)
                        }), c[s] && 0 > e.inArray(null, c[s].slice(0, 3)) && (c[s][3] = 1, r.from && (c._rgba = r.from(c[s])))
                    }), this) : t
                },
                is: function(e) {
                    var n = f(e),
                        r = !0,
                        i = this;
                    return d(l, function(e, s) {
                        var o, u = n[s.cache];
                        return u && (o = i[s.cache] || s.to && s.to(i._rgba) || [], d(s.props, function(e, n) {
                            return null != u[n.idx] ? r = u[n.idx] === o[n.idx] : t
                        })), r
                    }), r
                },
                _space: function() {
                    var e = [],
                        t = this;
                    return d(l, function(n, r) {
                        t[r.cache] && e.push(n)
                    }), e.pop()
                },
                transition: function(e, t) {
                    var r = f(e),
                        i = r._space(),
                        s = l[i],
                        o = 0 === this.alpha() ? f("transparent") : this,
                        u = o[s.cache] || s.to(o._rgba),
                        a = u.slice();
                    return r = r[s.cache], d(s.props, function(e, i) {
                        var s = i.idx,
                            o = u[s],
                            f = r[s],
                            l = c[i.type] || {};
                        null !== f && (null === o ? a[s] = f : (l.mod && (f - o > l.mod / 2 ? o += l.mod : o - f > l.mod / 2 && (o -= l.mod)), a[s] = n((f - o) * t + o, i)))
                    }), this[i](a)
                },
                blend: function(t) {
                    if (1 === this._rgba[3]) return this;
                    var n = this._rgba.slice(),
                        r = n.pop(),
                        i = f(t)._rgba;
                    return f(e.map(n, function(e, t) {
                        return (1 - r) * i[t] + r * e
                    }))
                },
                toRgbaString: function() {
                    var t = "rgba(",
                        n = e.map(this._rgba, function(e, t) {
                            return null == e ? t > 2 ? 1 : 0 : e
                        });
                    return 1 === n[3] && (n.pop(), t = "rgb("), t + n.join() + ")"
                },
                toHslaString: function() {
                    var t = "hsla(",
                        n = e.map(this.hsla(), function(e, t) {
                            return null == e && (e = t > 2 ? 1 : 0), t && 3 > t && (e = Math.round(100 * e) + "%"), e
                        });
                    return 1 === n[3] && (n.pop(), t = "hsl("), t + n.join() + ")"
                },
                toHexString: function(t) {
                    var n = this._rgba.slice(),
                        r = n.pop();
                    return t && n.push(~~(255 * r)), "#" + e.map(n, function(e) {
                        return e = (e || 0).toString(16), 1 === e.length ? "0" + e : e
                    }).join("")
                },
                toString: function() {
                    return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                }
            }), f.fn.parse.prototype = f.fn, l.hsla.to = function(e) {
                if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                var t, n, r = e[0] / 255,
                    i = e[1] / 255,
                    s = e[2] / 255,
                    o = e[3],
                    u = Math.max(r, i, s),
                    a = Math.min(r, i, s),
                    f = u - a,
                    l = u + a,
                    c = .5 * l;
                return t = a === u ? 0 : r === u ? 60 * (i - s) / f + 360 : i === u ? 60 * (s - r) / f + 120 : 60 * (r - i) / f + 240, n = 0 === f ? 0 : .5 >= c ? f / l : f / (2 - l), [Math.round(t) % 360, n, c, null == o ? 1 : o]
            }, l.hsla.from = function(e) {
                if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                var t = e[0] / 360,
                    n = e[1],
                    r = e[2],
                    s = e[3],
                    o = .5 >= r ? r * (1 + n) : r + n - r * n,
                    u = 2 * r - o;
                return [Math.round(255 * i(u, o, t + 1 / 3)), Math.round(255 * i(u, o, t)), Math.round(255 * i(u, o, t - 1 / 3)), s]
            }, d(l, function(r, i) {
                var s = i.props,
                    o = i.cache,
                    a = i.to,
                    l = i.from;
                f.fn[r] = function(r) {
                    if (a && !this[o] && (this[o] = a(this._rgba)), r === t) return this[o].slice();
                    var i, u = e.type(r),
                        c = "array" === u || "object" === u ? r : arguments,
                        h = this[o].slice();
                    return d(s, function(e, t) {
                        var r = c["object" === u ? e : t.idx];
                        null == r && (r = h[t.idx]), h[t.idx] = n(r, t)
                    }), l ? (i = f(l(h)), i[o] = h, i) : f(h)
                }, d(s, function(t, n) {
                    f.fn[t] || (f.fn[t] = function(i) {
                        var s, o = e.type(i),
                            a = "alpha" === t ? this._hsla ? "hsla" : "rgba" : r,
                            f = this[a](),
                            l = f[n.idx];
                        return "undefined" === o ? l : ("function" === o && (i = i.call(this, l), o = e.type(i)), null == i && n.empty ? this : ("string" === o && (s = u.exec(i), s && (i = l + parseFloat(s[2]) * ("+" === s[1] ? 1 : -1))), f[n.idx] = i, this[a](f)))
                    })
                })
            }), f.hook = function(t) {
                var n = t.split(" ");
                d(n, function(t, n) {
                    e.cssHooks[n] = {
                        set: function(t, i) {
                            var s, o, u = "";
                            if ("transparent" !== i && ("string" !== e.type(i) || (s = r(i)))) {
                                if (i = f(s || i), !h.rgba && 1 !== i._rgba[3]) {
                                    for (o = "backgroundColor" === n ? t.parentNode : t;
                                        ("" === u || "transparent" === u) && o && o.style;) try {
                                        u = e.css(o, "backgroundColor"), o = o.parentNode
                                    } catch (a) {}
                                    i = i.blend(u && "transparent" !== u ? u : "_default")
                                }
                                i = i.toRgbaString()
                            }
                            try {
                                t.style[n] = i
                            } catch (a) {}
                        }
                    }, e.fx.step[n] = function(t) {
                        t.colorInit || (t.start = f(t.elem, n), t.end = f(t.end), t.colorInit = !0), e.cssHooks[n].set(t.elem, t.start.transition(t.end, t.pos))
                    }
                })
            }, f.hook(o), e.cssHooks.borderColor = {
                expand: function(e) {
                    var t = {};
                    return d(["Top", "Right", "Bottom", "Left"], function(n, r) {
                        t["border" + r + "Color"] = e
                    }), t
                }
            }, s = e.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff"
            }
        }(b),
        function() {
            function t(t) {
                var n, r, i = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
                    s = {};
                if (i && i.length && i[0] && i[i[0]])
                    for (r = i.length; r--;) n = i[r], "string" == typeof i[n] && (s[e.camelCase(n)] = i[n]);
                else
                    for (n in i) "string" == typeof i[n] && (s[n] = i[n]);
                return s
            }

            function n(t, n) {
                var r, s, o = {};
                for (r in n) s = n[r], t[r] !== s && (i[r] || (e.fx.step[r] || !isNaN(parseFloat(s))) && (o[r] = s));
                return o
            }
            var r = ["add", "remove", "toggle"],
                i = {
                    border: 1,
                    borderBottom: 1,
                    borderColor: 1,
                    borderLeft: 1,
                    borderRight: 1,
                    borderTop: 1,
                    borderWidth: 1,
                    margin: 1,
                    padding: 1
                };
            e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, n) {
                e.fx.step[n] = function(e) {
                    ("none" !== e.end && !e.setAttr || 1 === e.pos && !e.setAttr) && (b.style(e.elem, n, e.end), e.setAttr = !0)
                }
            }), e.fn.addBack || (e.fn.addBack = function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }), e.effects.animateClass = function(i, s, o, u) {
                var a = e.speed(s, o, u);
                return this.queue(function() {
                    var s, o = e(this),
                        u = o.attr("class") || "",
                        f = a.children ? o.find("*").addBack() : o;
                    f = f.map(function() {
                        var n = e(this);
                        return {
                            el: n,
                            start: t(this)
                        }
                    }), s = function() {
                        e.each(r, function(e, t) {
                            i[t] && o[t + "Class"](i[t])
                        })
                    }, s(), f = f.map(function() {
                        return this.end = t(this.el[0]), this.diff = n(this.start, this.end), this
                    }), o.attr("class", u), f = f.map(function() {
                        var t = this,
                            n = e.Deferred(),
                            r = e.extend({}, a, {
                                queue: !1,
                                complete: function() {
                                    n.resolve(t)
                                }
                            });
                        return this.el.animate(this.diff, r), n.promise()
                    }), e.when.apply(e, f.get()).done(function() {
                        s(), e.each(arguments, function() {
                            var t = this.el;
                            e.each(this.diff, function(e) {
                                t.css(e, "")
                            })
                        }), a.complete.call(o[0])
                    })
                })
            }, e.fn.extend({
                addClass: function(t) {
                    return function(n, r, i, s) {
                        return r ? e.effects.animateClass.call(this, {
                            add: n
                        }, r, i, s) : t.apply(this, arguments)
                    }
                }(e.fn.addClass),
                removeClass: function(t) {
                    return function(n, r, i, s) {
                        return arguments.length > 1 ? e.effects.animateClass.call(this, {
                            remove: n
                        }, r, i, s) : t.apply(this, arguments)
                    }
                }(e.fn.removeClass),
                toggleClass: function(t) {
                    return function(n, r, i, s, o) {
                        return "boolean" == typeof r || void 0 === r ? i ? e.effects.animateClass.call(this, r ? {
                            add: n
                        } : {
                            remove: n
                        }, i, s, o) : t.apply(this, arguments) : e.effects.animateClass.call(this, {
                            toggle: n
                        }, r, i, s)
                    }
                }(e.fn.toggleClass),
                switchClass: function(t, n, r, i, s) {
                    return e.effects.animateClass.call(this, {
                        add: n,
                        remove: t
                    }, r, i, s)
                }
            })
        }(),
        function() {
            function t(t, n, r, i) {
                return e.isPlainObject(t) && (n = t, t = t.effect), t = {
                    effect: t
                }, null == n && (n = {}), e.isFunction(n) && (i = n, r = null, n = {}), ("number" == typeof n || e.fx.speeds[n]) && (i = r, r = n, n = {}), e.isFunction(r) && (i = r, r = null), n && e.extend(t, n), r = r || n.duration, t.duration = e.fx.off ? 0 : "number" == typeof r ? r : r in e.fx.speeds ? e.fx.speeds[r] : e.fx.speeds._default, t.complete = i || n.complete, t
            }

            function n(t) {
                return !t || "number" == typeof t || e.fx.speeds[t] ? !0 : "string" != typeof t || e.effects.effect[t] ? e.isFunction(t) ? !0 : "object" != typeof t || t.effect ? !1 : !0 : !0
            }
            e.extend(e.effects, {
                version: "1.11.1",
                save: function(e, t) {
                    for (var n = 0; t.length > n; n++) null !== t[n] && e.data(y + t[n], e[0].style[t[n]])
                },
                restore: function(e, t) {
                    var n, r;
                    for (r = 0; t.length > r; r++) null !== t[r] && (n = e.data(y + t[r]), void 0 === n && (n = ""), e.css(t[r], n))
                },
                setMode: function(e, t) {
                    return "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"), t
                },
                getBaseline: function(e, t) {
                    var n, r;
                    switch (e[0]) {
                        case "top":
                            n = 0;
                            break;
                        case "middle":
                            n = .5;
                            break;
                        case "bottom":
                            n = 1;
                            break;
                        default:
                            n = e[0] / t.height
                    }
                    switch (e[1]) {
                        case "left":
                            r = 0;
                            break;
                        case "center":
                            r = .5;
                            break;
                        case "right":
                            r = 1;
                            break;
                        default:
                            r = e[1] / t.width
                    }
                    return {
                        x: r,
                        y: n
                    }
                },
                createWrapper: function(t) {
                    if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                    var n = {
                            width: t.outerWidth(!0),
                            height: t.outerHeight(!0),
                            "float": t.css("float")
                        },
                        r = e("<div></div>").addClass("ui-effects-wrapper").css({
                            fontSize: "100%",
                            background: "transparent",
                            border: "none",
                            margin: 0,
                            padding: 0
                        }),
                        i = {
                            width: t.width(),
                            height: t.height()
                        },
                        s = document.activeElement;
                    try {
                        s.id
                    } catch (o) {
                        s = document.body
                    }
                    return t.wrap(r), (t[0] === s || e.contains(t[0], s)) && e(s).focus(), r = t.parent(), "static" === t.css("position") ? (r.css({
                        position: "relative"
                    }), t.css({
                        position: "relative"
                    })) : (e.extend(n, {
                        position: t.css("position"),
                        zIndex: t.css("z-index")
                    }), e.each(["top", "left", "bottom", "right"], function(e, r) {
                        n[r] = t.css(r), isNaN(parseInt(n[r], 10)) && (n[r] = "auto")
                    }), t.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    })), t.css(i), r.css(n).show()
                },
                removeWrapper: function(t) {
                    var n = document.activeElement;
                    return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === n || e.contains(t[0], n)) && e(n).focus()), t
                },
                setTransition: function(t, n, r, i) {
                    return i = i || {}, e.each(n, function(e, n) {
                        var s = t.cssUnit(n);
                        s[0] > 0 && (i[n] = s[0] * r + s[1])
                    }), i
                }
            }), e.fn.extend({
                effect: function() {
                    function n(t) {
                        function n() {
                            e.isFunction(s) && s.call(i[0]), e.isFunction(t) && t()
                        }
                        var i = e(this),
                            s = r.complete,
                            u = r.mode;
                        (i.is(":hidden") ? "hide" === u : "show" === u) ? (i[u](), n()) : o.call(i[0], r, n)
                    }
                    var r = t.apply(this, arguments),
                        i = r.mode,
                        s = r.queue,
                        o = e.effects.effect[r.effect];
                    return e.fx.off || !o ? i ? this[i](r.duration, r.complete) : this.each(function() {
                        r.complete && r.complete.call(this)
                    }) : s === !1 ? this.each(n) : this.queue(s || "fx", n)
                },
                show: function(e) {
                    return function(r) {
                        if (n(r)) return e.apply(this, arguments);
                        var i = t.apply(this, arguments);
                        return i.mode = "show", this.effect.call(this, i)
                    }
                }(e.fn.show),
                hide: function(e) {
                    return function(r) {
                        if (n(r)) return e.apply(this, arguments);
                        var i = t.apply(this, arguments);
                        return i.mode = "hide", this.effect.call(this, i)
                    }
                }(e.fn.hide),
                toggle: function(e) {
                    return function(r) {
                        if (n(r) || "boolean" == typeof r) return e.apply(this, arguments);
                        var i = t.apply(this, arguments);
                        return i.mode = "toggle", this.effect.call(this, i)
                    }
                }(e.fn.toggle),
                cssUnit: function(t) {
                    var n = this.css(t),
                        r = [];
                    return e.each(["em", "px", "%", "pt"], function(e, t) {
                        n.indexOf(t) > 0 && (r = [parseFloat(n), t])
                    }), r
                }
            })
        }(),
        function() {
            var t = {};
            e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e, n) {
                t[n] = function(t) {
                    return Math.pow(t, e + 2)
                }
            }), e.extend(t, {
                Sine: function(e) {
                    return 1 - Math.cos(e * Math.PI / 2)
                },
                Circ: function(e) {
                    return 1 - Math.sqrt(1 - e * e)
                },
                Elastic: function(e) {
                    return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
                },
                Back: function(e) {
                    return e * e * (3 * e - 2)
                },
                Bounce: function(e) {
                    for (var t, n = 4;
                        ((t = Math.pow(2, --n)) - 1) / 11 > e;);
                    return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
                }
            }), e.each(t, function(t, n) {
                e.easing["easeIn" + t] = n, e.easing["easeOut" + t] = function(e) {
                    return 1 - n(1 - e)
                }, e.easing["easeInOut" + t] = function(e) {
                    return .5 > e ? n(2 * e) / 2 : 1 - n(-2 * e + 2) / 2
                }
            })
        }(), e.effects, e.effects.effect.blind = function(t, n) {
            var r, i, s, o = e(this),
                u = /up|down|vertical/,
                a = /up|left|vertical|horizontal/,
                f = ["position", "top", "bottom", "left", "right", "height", "width"],
                l = e.effects.setMode(o, t.mode || "hide"),
                c = t.direction || "up",
                h = u.test(c),
                p = h ? "height" : "width",
                d = h ? "top" : "left",
                v = a.test(c),
                m = {},
                g = "show" === l;
            o.parent().is(".ui-effects-wrapper") ? e.effects.save(o.parent(), f) : e.effects.save(o, f), o.show(), r = e.effects.createWrapper(o).css({
                overflow: "hidden"
            }), i = r[p](), s = parseFloat(r.css(d)) || 0, m[p] = g ? i : 0, v || (o.css(h ? "bottom" : "right", 0).css(h ? "top" : "left", "auto").css({
                position: "absolute"
            }), m[d] = g ? s : i + s), g && (r.css(p, 0), v || r.css(d, s + i)), r.animate(m, {
                duration: t.duration,
                easing: t.easing,
                queue: !1,
                complete: function() {
                    "hide" === l && o.hide(), e.effects.restore(o, f), e.effects.removeWrapper(o), n()
                }
            })
        }, e.effects.effect.bounce = function(t, n) {
            var r, i, s, o = e(this),
                u = ["position", "top", "bottom", "left", "right", "height", "width"],
                a = e.effects.setMode(o, t.mode || "effect"),
                f = "hide" === a,
                l = "show" === a,
                c = t.direction || "up",
                h = t.distance,
                p = t.times || 5,
                d = 2 * p + (l || f ? 1 : 0),
                v = t.duration / d,
                m = t.easing,
                g = "up" === c || "down" === c ? "top" : "left",
                y = "up" === c || "left" === c,
                b = o.queue(),
                w = b.length;
            for ((l || f) && u.push("opacity"), e.effects.save(o, u), o.show(), e.effects.createWrapper(o), h || (h = o["top" === g ? "outerHeight" : "outerWidth"]() / 3), l && (s = {
                    opacity: 1
                }, s[g] = 0, o.css("opacity", 0).css(g, y ? 2 * -h : 2 * h).animate(s, v, m)), f && (h /= Math.pow(2, p - 1)), s = {}, s[g] = 0, r = 0; p > r; r++) i = {}, i[g] = (y ? "-=" : "+=") + h, o.animate(i, v, m).animate(s, v, m), h = f ? 2 * h : h / 2;
            f && (i = {
                opacity: 0
            }, i[g] = (y ? "-=" : "+=") + h, o.animate(i, v, m)), o.queue(function() {
                f && o.hide(), e.effects.restore(o, u), e.effects.removeWrapper(o), n()
            }), w > 1 && b.splice.apply(b, [1, 0].concat(b.splice(w, d + 1))), o.dequeue()
        }, e.effects.effect.clip = function(t, n) {
            var r, i, s, o = e(this),
                u = ["position", "top", "bottom", "left", "right", "height", "width"],
                a = e.effects.setMode(o, t.mode || "hide"),
                f = "show" === a,
                l = t.direction || "vertical",
                c = "vertical" === l,
                h = c ? "height" : "width",
                p = c ? "top" : "left",
                d = {};
            e.effects.save(o, u), o.show(), r = e.effects.createWrapper(o).css({
                overflow: "hidden"
            }), i = "IMG" === o[0].tagName ? r : o, s = i[h](), f && (i.css(h, 0), i.css(p, s / 2)), d[h] = f ? s : 0, d[p] = f ? 0 : s / 2, i.animate(d, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: function() {
                    f || o.hide(), e.effects.restore(o, u), e.effects.removeWrapper(o), n()
                }
            })
        }, e.effects.effect.drop = function(t, n) {
            var r, i = e(this),
                s = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
                o = e.effects.setMode(i, t.mode || "hide"),
                u = "show" === o,
                a = t.direction || "left",
                f = "up" === a || "down" === a ? "top" : "left",
                l = "up" === a || "left" === a ? "pos" : "neg",
                c = {
                    opacity: u ? 1 : 0
                };
            e.effects.save(i, s), i.show(), e.effects.createWrapper(i), r = t.distance || i["top" === f ? "outerHeight" : "outerWidth"](!0) / 2, u && i.css("opacity", 0).css(f, "pos" === l ? -r : r), c[f] = (u ? "pos" === l ? "+=" : "-=" : "pos" === l ? "-=" : "+=") + r, i.animate(c, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: function() {
                    "hide" === o && i.hide(), e.effects.restore(i, s), e.effects.removeWrapper(i), n()
                }
            })
        }, e.effects.effect.explode = function(t, n) {
            function r() {
                b.push(this), b.length === c * h && i()
            }

            function i() {
                p.css({
                    visibility: "visible"
                }), e(b).remove(), v || p.hide(), n()
            }
            var s, o, u, a, f, l, c = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3,
                h = c,
                p = e(this),
                d = e.effects.setMode(p, t.mode || "hide"),
                v = "show" === d,
                m = p.show().css("visibility", "hidden").offset(),
                g = Math.ceil(p.outerWidth() / h),
                y = Math.ceil(p.outerHeight() / c),
                b = [];
            for (s = 0; c > s; s++)
                for (a = m.top + s * y, l = s - (c - 1) / 2, o = 0; h > o; o++) u = m.left + o * g, f = o - (h - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -o * g,
                    top: -s * y
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: g,
                    height: y,
                    left: u + (v ? f * g : 0),
                    top: a + (v ? l * y : 0),
                    opacity: v ? 0 : 1
                }).animate({
                    left: u + (v ? 0 : f * g),
                    top: a + (v ? 0 : l * y),
                    opacity: v ? 1 : 0
                }, t.duration || 500, t.easing, r)
        }, e.effects.effect.fade = function(t, n) {
            var r = e(this),
                i = e.effects.setMode(r, t.mode || "toggle");
            r.animate({
                opacity: i
            }, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: n
            })
        }, e.effects.effect.fold = function(t, n) {
            var r, i, s = e(this),
                o = ["position", "top", "bottom", "left", "right", "height", "width"],
                u = e.effects.setMode(s, t.mode || "hide"),
                a = "show" === u,
                f = "hide" === u,
                l = t.size || 15,
                c = /([0-9]+)%/.exec(l),
                h = !!t.horizFirst,
                p = a !== h,
                d = p ? ["width", "height"] : ["height", "width"],
                v = t.duration / 2,
                m = {},
                g = {};
            e.effects.save(s, o), s.show(), r = e.effects.createWrapper(s).css({
                overflow: "hidden"
            }), i = p ? [r.width(), r.height()] : [r.height(), r.width()], c && (l = parseInt(c[1], 10) / 100 * i[f ? 0 : 1]), a && r.css(h ? {
                height: 0,
                width: l
            } : {
                height: l,
                width: 0
            }), m[d[0]] = a ? i[0] : l, g[d[1]] = a ? i[1] : 0, r.animate(m, v, t.easing).animate(g, v, t.easing, function() {
                f && s.hide(), e.effects.restore(s, o), e.effects.removeWrapper(s), n()
            })
        }, e.effects.effect.highlight = function(t, n) {
            var r = e(this),
                i = ["backgroundImage", "backgroundColor", "opacity"],
                s = e.effects.setMode(r, t.mode || "show"),
                o = {
                    backgroundColor: r.css("backgroundColor")
                };
            "hide" === s && (o.opacity = 0), e.effects.save(r, i), r.show().css({
                backgroundImage: "none",
                backgroundColor: t.color || "#ffff99"
            }).animate(o, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: function() {
                    "hide" === s && r.hide(), e.effects.restore(r, i), n()
                }
            })
        }, e.effects.effect.size = function(t, n) {
            var r, i, s, o = e(this),
                u = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
                a = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
                f = ["width", "height", "overflow"],
                l = ["fontSize"],
                c = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                h = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                p = e.effects.setMode(o, t.mode || "effect"),
                d = t.restore || "effect" !== p,
                v = t.scale || "both",
                m = t.origin || ["middle", "center"],
                g = o.css("position"),
                y = d ? u : a,
                b = {
                    height: 0,
                    width: 0,
                    outerHeight: 0,
                    outerWidth: 0
                };
            "show" === p && o.show(), r = {
                height: o.height(),
                width: o.width(),
                outerHeight: o.outerHeight(),
                outerWidth: o.outerWidth()
            }, "toggle" === t.mode && "show" === p ? (o.from = t.to || b, o.to = t.from || r) : (o.from = t.from || ("show" === p ? b : r), o.to = t.to || ("hide" === p ? b : r)), s = {
                from: {
                    y: o.from.height / r.height,
                    x: o.from.width / r.width
                },
                to: {
                    y: o.to.height / r.height,
                    x: o.to.width / r.width
                }
            }, ("box" === v || "both" === v) && (s.from.y !== s.to.y && (y = y.concat(c), o.from = e.effects.setTransition(o, c, s.from.y, o.from), o.to = e.effects.setTransition(o, c, s.to.y, o.to)), s.from.x !== s.to.x && (y = y.concat(h), o.from = e.effects.setTransition(o, h, s.from.x, o.from), o.to = e.effects.setTransition(o, h, s.to.x, o.to))), ("content" === v || "both" === v) && s.from.y !== s.to.y && (y = y.concat(l).concat(f), o.from = e.effects.setTransition(o, l, s.from.y, o.from), o.to = e.effects.setTransition(o, l, s.to.y, o.to)), e.effects.save(o, y), o.show(), e.effects.createWrapper(o), o.css("overflow", "hidden").css(o.from), m && (i = e.effects.getBaseline(m, r), o.from.top = (r.outerHeight - o.outerHeight()) * i.y, o.from.left = (r.outerWidth - o.outerWidth()) * i.x, o.to.top = (r.outerHeight - o.to.outerHeight) * i.y, o.to.left = (r.outerWidth - o.to.outerWidth) * i.x), o.css(o.from), ("content" === v || "both" === v) && (c = c.concat(["marginTop", "marginBottom"]).concat(l), h = h.concat(["marginLeft", "marginRight"]), f = u.concat(c).concat(h), o.find("*[width]").each(function() {
                var n = e(this),
                    r = {
                        height: n.height(),
                        width: n.width(),
                        outerHeight: n.outerHeight(),
                        outerWidth: n.outerWidth()
                    };
                d && e.effects.save(n, f), n.from = {
                    height: r.height * s.from.y,
                    width: r.width * s.from.x,
                    outerHeight: r.outerHeight * s.from.y,
                    outerWidth: r.outerWidth * s.from.x
                }, n.to = {
                    height: r.height * s.to.y,
                    width: r.width * s.to.x,
                    outerHeight: r.height * s.to.y,
                    outerWidth: r.width * s.to.x
                }, s.from.y !== s.to.y && (n.from = e.effects.setTransition(n, c, s.from.y, n.from), n.to = e.effects.setTransition(n, c, s.to.y, n.to)), s.from.x !== s.to.x && (n.from = e.effects.setTransition(n, h, s.from.x, n.from), n.to = e.effects.setTransition(n, h, s.to.x, n.to)), n.css(n.from), n.animate(n.to, t.duration, t.easing, function() {
                    d && e.effects.restore(n, f)
                })
            })), o.animate(o.to, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: function() {
                    0 === o.to.opacity && o.css("opacity", o.from.opacity), "hide" === p && o.hide(), e.effects.restore(o, y), d || ("static" === g ? o.css({
                        position: "relative",
                        top: o.to.top,
                        left: o.to.left
                    }) : e.each(["top", "left"], function(e, t) {
                        o.css(t, function(t, n) {
                            var r = parseInt(n, 10),
                                i = e ? o.to.left : o.to.top;
                            return "auto" === n ? i + "px" : r + i + "px"
                        })
                    })), e.effects.removeWrapper(o), n()
                }
            })
        }, e.effects.effect.scale = function(t, n) {
            var r = e(this),
                i = e.extend(!0, {}, t),
                s = e.effects.setMode(r, t.mode || "effect"),
                o = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) ? 0 : "hide" === s ? 0 : 100),
                u = t.direction || "both",
                a = t.origin,
                f = {
                    height: r.height(),
                    width: r.width(),
                    outerHeight: r.outerHeight(),
                    outerWidth: r.outerWidth()
                },
                l = {
                    y: "horizontal" !== u ? o / 100 : 1,
                    x: "vertical" !== u ? o / 100 : 1
                };
            i.effect = "size", i.queue = !1, i.complete = n, "effect" !== s && (i.origin = a || ["middle", "center"], i.restore = !0), i.from = t.from || ("show" === s ? {
                height: 0,
                width: 0,
                outerHeight: 0,
                outerWidth: 0
            } : f), i.to = {
                height: f.height * l.y,
                width: f.width * l.x,
                outerHeight: f.outerHeight * l.y,
                outerWidth: f.outerWidth * l.x
            }, i.fade && ("show" === s && (i.from.opacity = 0, i.to.opacity = 1), "hide" === s && (i.from.opacity = 1, i.to.opacity = 0)), r.effect(i)
        }, e.effects.effect.puff = function(t, n) {
            var r = e(this),
                i = e.effects.setMode(r, t.mode || "hide"),
                s = "hide" === i,
                o = parseInt(t.percent, 10) || 150,
                u = o / 100,
                a = {
                    height: r.height(),
                    width: r.width(),
                    outerHeight: r.outerHeight(),
                    outerWidth: r.outerWidth()
                };
            e.extend(t, {
                effect: "scale",
                queue: !1,
                fade: !0,
                mode: i,
                complete: n,
                percent: s ? o : 100,
                from: s ? a : {
                    height: a.height * u,
                    width: a.width * u,
                    outerHeight: a.outerHeight * u,
                    outerWidth: a.outerWidth * u
                }
            }), r.effect(t)
        }, e.effects.effect.pulsate = function(t, n) {
            var r, i = e(this),
                s = e.effects.setMode(i, t.mode || "show"),
                o = "show" === s,
                u = "hide" === s,
                a = o || "hide" === s,
                f = 2 * (t.times || 5) + (a ? 1 : 0),
                l = t.duration / f,
                c = 0,
                h = i.queue(),
                p = h.length;
            for ((o || !i.is(":visible")) && (i.css("opacity", 0).show(), c = 1), r = 1; f > r; r++) i.animate({
                opacity: c
            }, l, t.easing), c = 1 - c;
            i.animate({
                opacity: c
            }, l, t.easing), i.queue(function() {
                u && i.hide(), n()
            }), p > 1 && h.splice.apply(h, [1, 0].concat(h.splice(p, f + 1))), i.dequeue()
        }, e.effects.effect.shake = function(t, n) {
            var r, i = e(this),
                s = ["position", "top", "bottom", "left", "right", "height", "width"],
                o = e.effects.setMode(i, t.mode || "effect"),
                u = t.direction || "left",
                a = t.distance || 20,
                f = t.times || 3,
                l = 2 * f + 1,
                c = Math.round(t.duration / l),
                h = "up" === u || "down" === u ? "top" : "left",
                p = "up" === u || "left" === u,
                d = {},
                v = {},
                m = {},
                g = i.queue(),
                y = g.length;
            for (e.effects.save(i, s), i.show(), e.effects.createWrapper(i), d[h] = (p ? "-=" : "+=") + a, v[h] = (p ? "+=" : "-=") + 2 * a, m[h] = (p ? "-=" : "+=") + 2 * a, i.animate(d, c, t.easing), r = 1; f > r; r++) i.animate(v, c, t.easing).animate(m, c, t.easing);
            i.animate(v, c, t.easing).animate(d, c / 2, t.easing).queue(function() {
                "hide" === o && i.hide(), e.effects.restore(i, s), e.effects.removeWrapper(i), n()
            }), y > 1 && g.splice.apply(g, [1, 0].concat(g.splice(y, l + 1))), i.dequeue()
        }, e.effects.effect.slide = function(t, n) {
            var r, i = e(this),
                s = ["position", "top", "bottom", "left", "right", "width", "height"],
                o = e.effects.setMode(i, t.mode || "show"),
                u = "show" === o,
                a = t.direction || "left",
                f = "up" === a || "down" === a ? "top" : "left",
                l = "up" === a || "left" === a,
                c = {};
            e.effects.save(i, s), i.show(), r = t.distance || i["top" === f ? "outerHeight" : "outerWidth"](!0), e.effects.createWrapper(i).css({
                overflow: "hidden"
            }), u && i.css(f, l ? isNaN(r) ? "-" + r : -r : r), c[f] = (u ? l ? "+=" : "-=" : l ? "-=" : "+=") + r, i.animate(c, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: function() {
                    "hide" === o && i.hide(), e.effects.restore(i, s), e.effects.removeWrapper(i), n()
                }
            })
        }, e.effects.effect.transfer = function(t, n) {
            var r = e(this),
                i = e(t.to),
                s = "fixed" === i.css("position"),
                o = e("body"),
                u = s ? o.scrollTop() : 0,
                a = s ? o.scrollLeft() : 0,
                f = i.offset(),
                l = {
                    top: f.top - u,
                    left: f.left - a,
                    height: i.innerHeight(),
                    width: i.innerWidth()
                },
                c = r.offset(),
                h = e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({
                    top: c.top - u,
                    left: c.left - a,
                    height: r.innerHeight(),
                    width: r.innerWidth(),
                    position: s ? "fixed" : "absolute"
                }).animate(l, t.duration, t.easing, function() {
                    h.remove(), n()
                })
        }
})