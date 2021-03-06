! function(e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var s = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(s.exports, s, s.exports, n), s.l = !0, s.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var s in e) n.d(o, s, function(t) {
                return e[t]
            }.bind(null, s));
        return o
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 537)
}({
    24: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.apikey = "64NQWtq9QFiaGqiYgikhAzebf", t.blockVideoURL = "https://www.youtube.com/watch?v=iOd5r5pfHig", t.blockVideoId = "iOd5r5pfHig", t.locationReportUrl = "https://service.block.si/location?", t.logHost = "https://log.block.si/v1/sendLog", t.ratingHost1 = "https://service1.block.si/getRating.json?url=", t.ratingHost2 = "https://service2.block.si/getRating.json?url=", t.websocketHost = "wss://ssl-ex-ws.block.si", t.googleApiKey = "AIzaSyDW38ZmZ_OtBHrN1vMDWih-skMf8KGLoOE", t.elasticsearchUrl = "https://log.block.si/v1/metrics", t.elasticsearchDebugUrl = "http://debug.block.si/config", t.socketIoHost = "wss://k8s-ws-lb.block.si", t.tdApi = "https://td.block.si/api/2.0", t.configHost = "https://service.block.si/config", t.configV1k8s = "http://api.blocksi.net", t.searchUrls = ["*://www.google.ca/*", "*://www.google.co.in/*", "*://www.google.co.th/*", "*://www.google.co.uk/*", "*://www.google.com/*", "*://www.google.com.mx/*", "*://www.google.com.tw/*", "*://www.google.es/*", "*://www.google.fr/*", "*://www.google.no/*", "*://www.google.si/*", "*://www.google.com/*", "*://www.bing.com/*", "*://duckduckgo.com/*", "*://yandex.com/*", "*://search.yahoo.com/*", "*://*.search.yahoo.com/*", "*://www.ecosia.org/*", "*://www.kiddle.co/*", "*://www.kidrex.org/*", "*://www.qwant.com/*"], t.googleGamesUrls = ["/logos/fnbx/solitaire", "/fbx?fbx=minesweeper", "/logos/2010/pacman10", "/fbx?fbx=tic_tac_toe", "/fbx?fbx=snake_arcade", "/logos/doodles/2017/fischinger", "/logos/2017/logo17"], t.assessmentPage = `chrome-extension://${chrome.runtime.id}/pages/assessment.html`, t.headsUpPage = `chrome-extension://${chrome.runtime.id}/pages/heads_up.html`, t.blockPage = `chrome-extension://${chrome.runtime.id}/pages/blockPage.html`, t.chatPage = `chrome-extension://${chrome.runtime.id}/pages/chat.html`, t.enforcePage = `chrome-extension://${chrome.runtime.id}/pages/enforce.html`, t.bedTimePage = `chrome-extension://${chrome.runtime.id}/pages/bedtime.html`
    },
    537: function(e, t, n) {
        e.exports = n(538)
    },
    538: function(e, t, n) {
        "use strict";
        var o = n(24);

        function s(e) {
            let t;
            return t = (t = `${e}`.replace(/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim, '<a href="$1" target="_blank">$1</a>')).replace(/(^|[^\/])(www\.[\S]+(\b|$))/gim, '$1<a href="http://$2" target="_blank">$2</a>')
        }
        const c = e => {
            const t = new Date;
            return e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear()
        };
        chrome.runtime.sendMessage({
            message: document.getElementById("userInput").value,
            type: "getClassData"
        });
        let a = !0;
        chrome.runtime.onMessage.addListener(e => {
            switch (e.type) {
                case "receiveChat": {
                    const t = document.querySelector("#chatArea"),
                        {
                            message: n,
                            teacher: o
                        } = e,
                        c = document.createElement("div"),
                        a = document.createElement("p"),
                        r = document.createElement("span"),
                        l = document.getElementById("chatArea");
                    a.setAttribute("class", "TeacherTxt"), r.setAttribute("class", "TeacherTxt"), c.setAttribute("class", "TeacherTxt");
                    let i = (new Date).toLocaleString("en-US");
                    i = `Today,${i.split(",")[1]}`, a.innerText = i, r.innerText = o.split("@")[0], n.includes("<") && n.includes(">") && n.includes("</") ? c.innerText = n : c.innerHTML = s(n), l.appendChild(a), l.appendChild(r), l.appendChild(c), t.scrollTop = t.scrollHeight - t.clientHeight;
                    break
                }
                case "classData": {
                    const t = document.querySelector("#chatArea"),
                        n = e.classData.data.Title,
                        a = e.classData.data.CompanyId,
                        {
                            companyId: r
                        } = e,
                        l = e.classData.data._id,
                        i = document.getElementById("classTitle");
                    document.getElementById("teacherName").innerText = a, i.innerText = n;
                    const d = document.getElementById("chatArea");
                    fetch(`${o.tdApi}/classes/${r}/${l}/chat/history`).then(e => e.json()).then(n => {
                        const o = n.data.filter(t => t.student_id === e.user);
                        if (0 !== o.length)
                            for (let e = 0; e < o.length; e++) {
                                const n = document.createElement("div"),
                                    r = document.createElement("p"),
                                    l = document.createElement("span");
                                "TEACHER" === o[e].message_from ? (n.setAttribute("class", "TeacherTxt"), r.setAttribute("class", "TeacherTxt"), l.setAttribute("class", "TeacherTxt"), l.innerText = a.split("@")[0]) : (n.setAttribute("class", "StudentTxt"), r.setAttribute("class", "StudentTxt"), l.setAttribute("class", "StudentTxt"), l.innerText = "You");
                                const i = new Date(+o[e].time);
                                let u = i.toLocaleString("en-US");
                                c(i) && (u = `Today,${u.split(",")[1]}`), o[e].body.includes("<") && o[e].body.includes(">") && o[e].body.includes("</") ? n.innerText = o[e].body : n.innerHTML = s(o[e].body), r.innerText = u, d.appendChild(r), d.appendChild(l), d.appendChild(n), t.scrollTop = t.scrollHeight - t.clientHeight
                            }
                    });
                    break
                }
                case "enableChat": {
                    a = e.message;
                    const t = document.getElementById("btnSend");
                    a ? (t.disabled = !1, t.style.backgroundColor = "#ff9000") : (t.disabled = !0, t.style.backgroundColor = "#c7c3be");
                    break
                }
            }
        });
        const r = document.getElementById("btnSend");
        r.onclick = function() {
            if (a) {
                const e = document.querySelector("#chatArea"),
                    t = document.getElementById("userInput"),
                    n = document.createElement("div"),
                    o = document.createElement("p"),
                    c = document.createElement("span"),
                    a = document.getElementById("chatArea");
                if (o.setAttribute("class", "StudentTxt"), c.setAttribute("class", "StudentTxt"), n.setAttribute("class", "StudentTxt"), t.value.includes("<") && t.value.includes(">") && t.value.includes("</") ? n.innerText = t.value : n.innerHTML = s(t.value), "" === n.innerText || n.innerText.includes("data:text/html")) return !1;
                chrome.runtime.sendMessage({
                    message: document.getElementById("userInput").value,
                    type: "chatMsg"
                });
                let r = (new Date).toLocaleString("en-US");
                r = `Today,${r.split(",")[1]}`, o.innerText = r, c.innerText = "You", a.appendChild(o), a.appendChild(c), a.appendChild(n), e.scrollTop = e.scrollHeight - e.clientHeight, document.getElementById("userInput").value = ""
            }
        }, document.body.addEventListener("keyup", e => {
            13 === e.keyCode && r.click()
        })
    }
});
