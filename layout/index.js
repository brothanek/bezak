var current = 0,
    slides = document.getElementsByClassName("sl");

setInterval(function () {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
    }
    current = (current != slides.length - 1) ? current + 1 : 0;
    slides[current].style.opacity = 1;
}, 4000);

/*https://jsfiddle.net/oneeezy/rrfwogxm/*/
// Smooth Scroll
!function (e, t) { "function" == typeof define && define.amd ? define("smoothScroll", t(e)) : "object" == typeof exports ? module.exports = t(e) : e.smoothScroll = t(e) }(window || this, function (e) { "use strict"; var t, n, o, r = {}, a = !!document.querySelector && !!e.addEventListener, c = { speed: 500, easing: "easeInOutCubic", offset: 0, updateURL: !0, callbackBefore: function () { }, callbackAfter: function () { } }, u = function (e, t, n) { if ("[object Object]" === Object.prototype.toString.call(e)) for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(n, e[o], o, e); else for (var r = 0, a = e.length; a > r; r++)t.call(n, e[r], r, e) }, i = function (e, t) { var n = {}; return u(e, function (t, o) { n[o] = e[o] }), u(t, function (e, o) { n[o] = t[o] }), n }, l = function (e, t) { for (var n = t.charAt(0); e && e !== document; e = e.parentNode)if ("." === n) { if (e.classList.contains(t.substr(1))) return e } else if ("#" === n) { if (e.id === t.substr(1)) return e } else if ("[" === n && e.hasAttribute(t.substr(1, t.length - 2))) return e; return !1 }, s = function (e) { return Math.max(e.scrollHeight, e.offsetHeight, e.clientHeight) }, f = function (e) { for (var t, n = String(e), o = n.length, r = -1, a = "", c = n.charCodeAt(0); ++r < o;) { if (t = n.charCodeAt(r), 0 === t) throw new InvalidCharacterError("Invalid character: the input contains U+0000."); a += t >= 1 && 31 >= t || 127 == t || 0 === r && t >= 48 && 57 >= t || 1 === r && t >= 48 && 57 >= t && 45 === c ? "\\" + t.toString(16) + " " : t >= 128 || 45 === t || 95 === t || t >= 48 && 57 >= t || t >= 65 && 90 >= t || t >= 97 && 122 >= t ? n.charAt(r) : "\\" + n.charAt(r) } return a }, d = function (e, t) { var n; return "easeInQuad" === e && (n = t * t), "easeOutQuad" === e && (n = t * (2 - t)), "easeInOutQuad" === e && (n = .5 > t ? 2 * t * t : -1 + (4 - 2 * t) * t), "easeInCubic" === e && (n = t * t * t), "easeOutCubic" === e && (n = --t * t * t + 1), "easeInOutCubic" === e && (n = .5 > t ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1), "easeInQuart" === e && (n = t * t * t * t), "easeOutQuart" === e && (n = 1 - --t * t * t * t), "easeInOutQuart" === e && (n = .5 > t ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t), "easeInQuint" === e && (n = t * t * t * t * t), "easeOutQuint" === e && (n = 1 + --t * t * t * t * t), "easeInOutQuint" === e && (n = .5 > t ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t), n || t }, h = function (e, t, n) { var o = 0; if (e.offsetParent) do o += e.offsetTop, e = e.offsetParent; while (e); return o = o - t - n, o >= 0 ? o : 0 }, m = function () { return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) }, p = function (e) { return e && "object" == typeof JSON && "function" == typeof JSON.parse ? JSON.parse(e) : {} }, v = function (t, n) { history.pushState && (n || "true" === n) && history.pushState(null, null, [e.location.protocol, "//", e.location.host, e.location.pathname, e.location.search, t].join("")) }; r.animateScroll = function (t, n, r) { var a = i(a || c, r || {}), u = p(t ? t.getAttribute("data-options") : null); a = i(a, u), n = "#" + f(n.substr(1)); var l = "#" === n ? document.documentElement : document.querySelector(n), g = e.pageYOffset; o || (o = document.querySelector("[data-scroll-header]")); var b, O, y, S = null === o ? 0 : s(o) + o.offsetTop, I = h(l, S, parseInt(a.offset, 10)), H = I - g, E = m(), A = 0; v(n, a.updateURL); var L = function (o, r, c) { var u = e.pageYOffset; (o == r || u == r || e.innerHeight + u >= E) && (clearInterval(c), l.focus(), a.callbackAfter(t, n)) }, Q = function () { A += 16, O = A / parseInt(a.speed, 10), O = O > 1 ? 1 : O, y = g + H * d(a.easing, O), e.scrollTo(0, Math.floor(y)), L(y, I, b) }, C = function () { a.callbackBefore(t, n), b = setInterval(Q, 16) }; 0 === e.pageYOffset && e.scrollTo(0, 0), C() }; var g = function (e) { var n = l(e.target, "[data-scroll]"); n && "a" === n.tagName.toLowerCase() && (e.preventDefault(), r.animateScroll(n, n.hash, t)) }, b = function () { n || (n = setTimeout(function () { n = null, headerHeight = null === o ? 0 : s(o) + o.offsetTop }, 66)) }; return r.destroy = function () { t && (document.removeEventListener("click", g, !1), e.removeEventListener("resize", b, !1), t = null, n = null, o = null) }, r.init = function (n) { a && (r.destroy(), t = i(c, n || {}), o = document.querySelector("[data-scroll-header]"), document.addEventListener("click", g, !1), o && e.addEventListener("resize", b, !1)) }, r });

// Initialize
smoothScroll.init({
    speed: 1000,
    easing: 'easeInOutCubic',
    offset: 0,
    updateURL: true,
    callbackBefore: function (toggle, anchor) { },
    callbackAfter: function (toggle, anchor) { }
});

//google maps
const data = [
    {
        name: "Stará pošta",
        content: "Masarykovo Náměstí 87 <br>Bělá pod Bezdězem <br> 29421",
        placeId: "ChIJM_nqbExRCUcRDH3qpQT_YCk",
        position: {
            lat: 50.501834,
            lng: 14.801410
        }
    },
    {
        "name": "Vostrov",
        "content": "295 01 Mnichovo Hradiště",
        "placeId": "ChIJdWGOSw1SCUcRBDNIGlsb21s",
        "position": {
            "lat": 50.536739,
            "lng": 14.964506
        }
    },
    {
        "name": "TURN OFF CLUB",
        "content": "Jiráskova 97<br>Turnov",
        "placeId": "ChIJKVOe9JizDkcRwIz23y",
        "position": {
            "lat": 50.588135,
            "lng": 15.156378
        }
    },
    {
        "name": "AZYL pivní bar",
        "content": "Široká 302<br>Liberec",
        "placeId": "ChIJ6_CcFpg2CUcRAQHkg7v9C2M",
        "position": {
            "lat": 50.769485,
            "lng": 15.050407
        }
    },
    {
        "name": "Hospoda U Sedláka",
        "content": "Ledce 130<br>294 47 Ledce",
        "placeId": "ChIJvxa5ZDEDDEcRXkBNPxokyGE",
        "position": {
            "lat": 50.353337,
            "lng": 15.080516
        }
    },
    {
        "name": "Pivní sen",
        "content": "náměstí Republiky 465<br>Mladá Boleslav",
        "placeId": "ChIJlVPZsbRVCUcRy2FbjH2EMtY",
        "position": {
            "lat": 50.411334,
            "lng": 14.916385
        }
    },
    {
        "name": "Gurmán MB",
        "content": "Staroměstské náměstí 13<br>Mladá Boleslav",
        "placeId": "ChIJJ5acNb5VCUcRdBURvRx9lT0",
        "position": {
            "lat": 50.409875,
            "lng": 14.902007
        }
    },
    {
        "name": "Clock café",
        "content": "Českobratrské nám. 57/3<br>Mladá Boleslav",
        "placeId": "ChIJs5rKL7lVCUcRJ7IIEhIOrBY",
        "position": {
            "lat": 50.414015,
            "lng": 14.904826
        }
    },
    {
        "name": "Zahrada Hradiště",
        "content": "Palackého 236<br>Mnichovo Hradiště",
        "placeId": "ChIJvTZm2UJSCUcRb313YSt9XXQ",
        "position": {
            "lat": 50.414014,
            "lng": 14.904826
        }
    },
    {
        "name": "Hostinec Malý Růžek",
        "content": "Škroupova ulice 726<br>Hradec Králové",
        "placeId": "ChIJM_Ey-CUrDEcRQ2GojdMP2Iw",
        "position": {
            "lat": 50.214883,
            "lng": 15.824403
        }
    }, 
    {
        "name": "BARVÍRNA BAR",
        "content": "Barvířská ulice 33/4<br>Liberec",
        "placeId": "ChIJkc_U2Zg2CUcROD6TKSVbWOM",
        "position": {
            "lat": 50.214883,
            "lng": 15.824403
        }
    }
]
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 50.489174,
            lng: 15.038288
        },
        zoom: 9,
        styles: [
            {
                "featureType": "landscape",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 60
                    }
                ]
            },
            {
                "featureType": "road.local",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 40
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "transit",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "lightness": 30
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ef8c25"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#b6c54c"
                    },
                    {
                        "lightness": 40
                    },
                    {
                        "saturation": -40
                    }
                ]
            },
            {}
        ]
    })
    const infowindow = new google.maps.InfoWindow();
    data.map(item => {
        const marker = new google.maps.Marker({
            map,
            name: item.name,
            content: item.content,
            position: item.position,
            // icon: 'layout/navigation.png',
            placeId: item.placeId,
            loc: item.position
        });
        google.maps.event.addListener(marker, "click", () => {
            let link = `<br><a target=”_blank” href=https://www.google.com/maps/search/?api=1&query=${marker.loc.lat},${marker.loc.lng}&query_place_id=${marker.placeId}><img class='navigate' src="layout/navigation.png" /></a>`
            infowindow.setContent(
                "<div><strong>" +
                marker.name +
                "</strong><br>" +
                marker.content + "<br>" + link +
                "</div>");

            infowindow.open(map, marker);
        });
    })


}