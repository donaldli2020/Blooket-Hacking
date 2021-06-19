(window.webpackJsonp = window.webpackJsonp || []).push([[9], {
    "3RWh": function(e, t, a) {
        "use strict";
        a.d(t, "b", (function() {
            return s
        }
        )),
        a.d(t, "a", (function() {
            return o
        }
        ));
        var s = {
            Toast: {
                type: "food",
                profits: [1e303, 2e303, 3e303, 4e303, 5e303, 6e303],
                prices: [0, 0, 0, 0, 0]
            },
            Cereal: {
                type: "food",
                profits: [1e303, 2e303, 3e303, 4e303, 5e303, 6e303],
                prices: [0, 0, 0, 0, 0]
            },
            Yogurt: {
                type: "food",
                profits: [1e303, 2e303, 3e303, 4e303, 5e303, 6e303],
                prices: [0, 0, 0, 0, 0]
            },
            "Breakfast Combo": {
                type: "food",
                profits: [1e303, 2e303, 3e303, 4e303, 5e303, 6e303],
                prices: [0, 0, 0, 0, 0]
            },
            "Orange Juice": {
                type: "food",
                profits: [1e303, 2e303, 3e303, 4e303, 5e303, 6e303],
                prices: [0, 0, 0, 0, 0]
            },
            Milk: {
                type: "food",
                profits: [1e303, 2e303, 3e303, 4e303, 5e303, 6e303],
                prices: [0, 0, 0, 0, 0]
            },
            Waffle: {
                type: "food",
                profits: [1e303, 2e303, 3e303, 4e303, 5e303, 6e303],
                prices: [0, 0, 0, 0, 0]
            },
            Pancakes: {
                type: "food",
                profits: [1e303, 2e303, 3e303, 4e303, 5e303, 6e303],
                prices: [0, 0, 0, 0, 0]
            },
            "French Toast": {
                type: "food",
                profits: [1e303, 2e303, 3e303, 4e303, 5e303, 6e303],
                prices: [0, 0, 0, 0, 0]
            },
            level: {
                name: "Café Level",
                type: "item",
                multipliers: [1e303, 2e303, 3e303, 4e303, 5e303, 6e303],
                prices: [0, 0, 0, 0, 0]
            },
            time: {
                name: "Wait Time",
                type: "item",
                times: [1e303, 2e303, 3e303, 4e303, 5e303, 6e303],
                prices: [0, 0, 0, 0, 0]
            }
        }
          , o = {
            pay: {
                name: "Paycheck Bonus",
                price: 500,
                percent: .05,
                color: "#2ca02c",
                icon: "fas fa-hand-holding-usd",
                desc: "Give a player +25% of their balance"
            },
            crate: {
                name: "Supply Crate",
                price: 0,
                percent: .1,
                color: "#ff7f0f",
                icon: "fas fa-parachute-box",
                desc: "+7 stock of all your foods"
            },
            happy: {
                name: "Happy Customers",
                price: 0,
                percent: .125,
                color: "#b3dc23",
                icon: "fas fa-grin-alt",
                desc: "Your next 5 customers pay double"
            },
            trash: {
                name: "Trash the Food",
                price: 0,
                percent: .15,
                color: "#7f7f7f",
                icon: "fas fa-trash-alt",
                desc: "Lower a player's food stocks by 3 each"
            },
            tax: {
                name: "TAXES!!!",
                price: 0,
                percent: .25,
                color: "#1f77b4",
                icon: "fas fa-funnel-dollar",
                desc: "Reduce a player's balance by 25%"
            },
            inspect: {
                name: "Health Inspection",
                price: 0,
                percent: .275,
                color: "#d62728",
                icon: "fas fa-file-medical",
                desc: "Force a player to get a 12s health inspection"
            },
            back: {
                name: "Run It Back",
                price: 0,
                percent: 0,
                color: "#0bc2cf",
                icon: "fas fa-sync-alt",
                desc: "Be able to buy all your abilities again"
            }
        }
    },
    "3Yb6": function(e, t, a) {
        (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__left___1m5xF-camelCase{height:85%;top:6%;padding:1.5% 1.25vw;left:2.5vw;overflow-y:auto;overflow-x:visible}.styles__left___1m5xF-camelCase,.styles__standingRow___387aL-camelCase{position:absolute;width:35vw}.styles__standingRow___387aL-camelCase{height:8vh;background-color:#ac7339;box-shadow:inset 0 0 0 .5vw rgba(96,64,32,.4),0 0 8px 3px rgba(0,0,0,.2);padding:.5vw;border-radius:7px;border-radius:8;display:flex;flex-direction:row;justify-content:space-between}.styles__placeText___A3Foh-camelCase{text-align:center;padding:1vh 0 1vh .5vw;min-width:2vw;line-height:6vh;text-align:right}.styles__placeText___A3Foh-camelCase,.styles__superPlaceText___1VmuG-camelCase{color:#fff;font-family:Titan One,sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__superPlaceText___1VmuG-camelCase{text-align:left;width:1vw;font-size:1.3vw;margin-top:4px;margin-left:1px}.styles__blookBox___1qP8d-camelCase{margin-left:1.5vw;width:6.25vh;height:7.1875vh;margin-top:.40625vh;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__nameText___3e1sb-camelCase{padding:1vh 1vw;text-align:left;flex-grow:1}.styles__cashText___15Zk5-camelCase,.styles__nameText___3e1sb-camelCase{font-weight:700;color:#fff;line-height:6vh;font-family:Nunito,sans-serif}.styles__cashText___15Zk5-camelCase{padding:1vh 1.5vw;width:7vw;text-align:right;overflow:hidden}.styles__chatroom___3EN4R-camelCase{width:55vw;height:calc(65% - 30px);position:absolute;left:42.5vw;top:7.5%;padding:15px 0;background-color:#ac7339;box-shadow:inset 0 0 0 .5vw rgba(96,64,32,.4),0 0 8px 3px rgba(0,0,0,.2);border-radius:8px;overflow:hidden}.styles__chatroomInside___2KwYO-camelCase{width:100%;height:100%;overflow:hidden;overflow-y:scroll}.styles__invisibleScrollbar___3pffC-camelCase::-webkit-scrollbar{width:0}.styles__noAlerts___vjopn-camelCase{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-content:center;text-align:center;color:#fff}.styles__noAlertsIcon___3aYwc-camelCase{font-size:8vw;margin:0 auto 2vh}.styles__noAlertsText___3AAOh-camelCase{font-size:3vw}.styles__noAlertsText___3AAOh-camelCase,.styles__totalCashText___1wzEb-camelCase{font-weight:700;font-family:Nunito,sans-serif}.styles__totalCashText___1wzEb-camelCase{color:#fff;background-color:#ac7339;box-shadow:inset 0 0 0 .5vw rgba(96,64,32,.4),0 0 8px 3px rgba(0,0,0,.2);border-radius:6px;text-align:center;position:absolute;left:45vw;top:80%;width:46vw;height:calc(15% - 2vh);padding:1vh 2vw}", ""]),
        t.locals = {
            left: "styles__left___1m5xF-camelCase",
            standingRow: "styles__standingRow___387aL-camelCase",
            placeText: "styles__placeText___A3Foh-camelCase",
            superPlaceText: "styles__superPlaceText___1VmuG-camelCase",
            blookBox: "styles__blookBox___1qP8d-camelCase",
            nameText: "styles__nameText___3e1sb-camelCase",
            cashText: "styles__cashText___15Zk5-camelCase",
            chatroom: "styles__chatroom___3EN4R-camelCase",
            chatroomInside: "styles__chatroomInside___2KwYO-camelCase",
            invisibleScrollbar: "styles__invisibleScrollbar___3pffC-camelCase",
            noAlerts: "styles__noAlerts___vjopn-camelCase",
            noAlertsIcon: "styles__noAlertsIcon___3aYwc-camelCase",
            noAlertsText: "styles__noAlertsText___3AAOh-camelCase",
            totalCashText: "styles__totalCashText___1wzEb-camelCase"
        }
    },
    "3pgL": function(e, t, a) {
        (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__background___FjZBh-camelCase{background-image:linear-gradient(90deg,rgba(200,0,0,.5) 50%,transparent 0),linear-gradient(rgba(200,0,0,.5) 50%,transparent 0);background-size:50px 50px}.styles__contentHolder___26TQB-camelCase{display:flex;flex-direction:column;position:absolute;left:5%;top:50%;transform:translateY(-50%)}.styles__header___4K0ON-camelCase{font-size:10vw;margin:20px 0;padding:1vw 3.1vw 1vw 3vw;background-color:#ac7339;box-shadow:inset 0 0 0 .6vw rgba(96,64,32,.4),0 0 8px 3px rgba(0,0,0,.2);font-family:Satisfy,sans-serif;border-radius:7px;text-shadow:2px 2px 8px grey;color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__buttonContainer___1MvXc-camelCase{margin:20px 0;display:flex;flex-flow:column;align-items:flex-start}.styles__button___18zAv-camelCase{font-size:3vw;font-family:Satisfy,sans-serif;border-radius:7px;text-shadow:2px 2px 8px grey;color:#fff;margin:5px 0;padding:.4vw 2vw;background-color:#ac7339;box-shadow:inset 0 0 0 .5vw rgba(96,64,32,.4),0 0 8px 3px rgba(0,0,0,.2);outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__button___18zAv-camelCase:hover{transform:scale(.95)}.styles__loginText___3e8CR-camelCase{position:absolute;bottom:1%;left:50%;transform:translateX(-50%);text-align:center;font-size:18px;font-family:Nunito,sans-serif;text-shadow:2px 2px 8px grey;color:#fff;background-color:#ac7339;box-shadow:inset 0 0 0 5px rgba(96,64,32,.4),0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;padding:7px 10px}.styles__saveHeaderHolder___1b2G0-camelCase{width:90%;margin:70px auto 50px;display:flex;justify-content:center;align-items:center}.styles__savesHeader___38Hfi-camelCase{font-size:72px;color:#fff;text-shadow:2px 2px 8px grey;background-color:#ac7339;box-shadow:inset 0 0 0 7px rgba(96,64,32,.4),0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;padding:5px 25px;text-align:center;display:inline-block;font-family:Satisfy,sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__savesHolder___2tljV-camelCase{width:90%;margin:5px 5%;display:flex;flex-direction:row;justify-content:space-evenly}.styles__saveContainer___2dWa--camelCase{background-color:#ac7339;box-shadow:inset 0 0 0 7px rgba(96,64,32,.4),0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;display:flex;flex-direction:column;max-width:286px;margin:15px 20px;flex-grow:1;font-family:Nunito,sans-serif;color:#fff;text-shadow:2px 2px 8px grey}.styles__saveTitle___3YJPX-camelCase{font-size:42px;line-height:45px;margin:10px 5% 0}.styles__saveSubTitle___2By99-camelCase,.styles__saveTitle___3YJPX-camelCase{font-weight:700;width:90%}.styles__saveSubTitle___2By99-camelCase{font-size:32px;margin:0 5%;opacity:.75}.styles__saveRow___3_KBt-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;width:90%;margin:5px auto;font-size:22px;height:25px}.styles__saveIcon___2ryOu-camelCase{width:38px;text-align:center;margin-left:5px}.styles__loadButton___rt3Qc-camelCase{background-color:#ac7339;box-shadow:inset 0 0 0 5px rgba(96,64,32,.4),0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;display:flex;justify-content:center;align-items:center;margin:15px auto;font-family:Nunito,sans-serif;font-weight:700;font-size:26px;padding:5px 13px;color:#fff;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__loadButton___rt3Qc-camelCase:hover{transform:scale(.95)}.styles__emptySave___PG4QH-camelCase{font-size:54px;padding:20px 0;margin:auto;font-weight:700}.styles__backButton___3Qovm-camelCase{position:absolute;top:10px;left:10px;font-size:30px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;color:#fff;background-color:#ac7339;box-shadow:inset 0 0 0 5px rgba(96,64,32,.4),0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;padding:5px 15px;text-shadow:2px 2px 8px grey}.styles__backButton___3Qovm-camelCase,.styles__stageText___3Q7Ts-camelCase{font-family:Nunito,sans-serif}.styles__stageText___3Q7Ts-camelCase{font-size:28px;font-weight:700;margin-right:10px;color:#3a3a3a;line-height:50px;text-align:right;overflow:hidden}@media only screen and (max-width:800px){.styles__header___4K0ON-camelCase{font-size:26vw;padding:3vw 6.6vw 3vw 6vw;box-shadow:inset 0 0 0 1.6vw rgba(96,64,32,.4),0 0 8px 3px rgba(0,0,0,.2)}.styles__button___18zAv-camelCase{font-size:10vw;padding:1.3vw 5vw;box-shadow:inset 0 0 0 1.4vw rgba(96,64,32,.4),0 0 8px 3px rgba(0,0,0,.2)}.styles__loginText___3e8CR-camelCase{width:80%;font-size:14px}.styles__savesHeader___38Hfi-camelCase{font-size:64px;line-height:70px;padding:10px 25px}.styles__saveHeaderHolder___1b2G0-camelCase{margin:70px auto 25px}.styles__savesHolder___2tljV-camelCase{width:90%;margin:5px 5%;flex-direction:column;justify-content:space-evenly;align-items:center}.styles__saveContainer___2dWa--camelCase{width:300px;margin:15px 20px}}", ""]),
        t.locals = {
            background: "styles__background___FjZBh-camelCase",
            contentHolder: "styles__contentHolder___26TQB-camelCase",
            header: "styles__header___4K0ON-camelCase",
            buttonContainer: "styles__buttonContainer___1MvXc-camelCase",
            button: "styles__button___18zAv-camelCase",
            loginText: "styles__loginText___3e8CR-camelCase",
            saveHeaderHolder: "styles__saveHeaderHolder___1b2G0-camelCase",
            savesHeader: "styles__savesHeader___38Hfi-camelCase",
            savesHolder: "styles__savesHolder___2tljV-camelCase",
            saveContainer: "styles__saveContainer___2dWa--camelCase",
            saveTitle: "styles__saveTitle___3YJPX-camelCase",
            saveSubTitle: "styles__saveSubTitle___2By99-camelCase",
            saveRow: "styles__saveRow___3_KBt-camelCase",
            saveIcon: "styles__saveIcon___2ryOu-camelCase",
            loadButton: "styles__loadButton___rt3Qc-camelCase",
            emptySave: "styles__emptySave___PG4QH-camelCase",
            backButton: "styles__backButton___3Qovm-camelCase",
            stageText: "styles__stageText___3Q7Ts-camelCase"
        }
    },
    "4j4v": function(e, t, a) {
        var s = a("MV/S");
        "string" == typeof s && (s = [[e.i, s, ""]]);
        var o = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        a("aET+")(s, o);
        s.locals && (e.exports = s.locals)
    },
    "5JIh": function(e, t, a) {
        "use strict";
        var s = a("q1tI")
          , o = a.n(s)
          , r = a("ANjH")
          , n = a("/MKj")
          , i = a("17x9")
          , c = a.n(i)
          , l = a("wIs1")
          , u = a("mLw1")
          , p = a("b6Qr")
          , f = a("vDqi")
          , m = a.n(f)
          , d = a("anyA")
          , h = a("dgWh")
          , _ = a("pMbe")
          , y = a("9RJb")
          , b = a.n(y)
          , v = a("GIcp")
          , g = a.n(v)
          , w = a("dJL0")
          , C = a("iQ+n")
          , x = a("ZENw")
          , k = a("Bz36")
          , S = a("bpVs")
          , O = a("G/Pl")
          , T = a("TN+F")
          , j = a("SdQT");
        function N(e) {
            return (N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function I(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                t && (s = s.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, s)
            }
            return a
        }
        function E(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? I(Object(a), !0).forEach((function(t) {
                    A(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : I(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        function A(e, t, a) {
            return t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a,
            e
        }
        function P(e, t, a, s, o, r, n) {
            try {
                var i = e[r](n)
                  , c = i.value
            } catch (e) {
                return void a(e)
            }
            i.done ? t(c) : Promise.resolve(c).then(s, o)
        }
        function R(e, t) {
            for (var a = 0; a < t.length; a++) {
                var s = t[a];
                s.enumerable = s.enumerable || !1,
                s.configurable = !0,
                "value"in s && (s.writable = !0),
                Object.defineProperty(e, s.key, s)
            }
        }
        function B(e, t) {
            return (B = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function D(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var a, s = H(e);
                if (t) {
                    var o = H(this).constructor;
                    a = Reflect.construct(s, arguments, o)
                } else
                    a = s.apply(this, arguments);
                return z(this, a)
            }
        }
        function z(e, t) {
            return !t || "object" !== N(t) && "function" != typeof t ? L(e) : t
        }
        function L(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function H(e) {
            return (H = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var M = function(e, t) {
            return t ? o.a.createElement("div", {
                className: b.a.stageText
            }, "$".concat(Object(T.v)(e.cash))) : o.a.createElement("div", {
                className: b.a.stageText
            }, "Day ".concat(e.day))
        }
          , q = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && B(e, t)
            }(c, e);
            var t, a, s, r, n, i = D(c);
            function c(e) {
                var t;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, c),
                (t = i.call(this, e)).state = {
                    ready: !1,
                    numCorrect: 0,
                    numQuestions: 0,
                    standings: [],
                    plus: !1,
                    foodServed: 0,
                    cafeCash: 0,
                    message: "",
                    name: "",
                    me: {}
                },
                t.here = !0,
                t.stats = {},
                t.saveStats = t.saveStats.bind(L(t)),
                t.renderStats = t.renderStats.bind(L(t)),
                t
            }
            return t = c,
            (a = [{
                key: "componentDidMount",
                value: (r = regeneratorRuntime.mark((function e() {
                    var t, a, s, o, r, n, i, c, l = this;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                this.props.user.getData();
                            case 2:
                                if ((t = e.sent) || this.setState({
                                    notLoggedIn: !0
                                }),
                                this.props.cafe && "final" === this.props.cafe.stage) {
                                    e.next = 6;
                                    break
                                }
                                return e.abrupt("return");
                            case 6:
                                if (this.isSolo = !this.props.cafe.mode,
                                this.isHw = Boolean(this.props.cafe.resultId),
                                this.isSolo || this.isHw || this.props.firebase.setVal({
                                    id: this.props.client.hostId,
                                    path: "c/".concat(this.props.client.name),
                                    val: {
                                        c: E({}, this.props.cafe.corrects),
                                        i: E({}, this.props.cafe.incorrects)
                                    }
                                }),
                                this.isHw && m.a.put("/api/results", {
                                    id: this.props.cafe.resultId,
                                    data: {
                                        corrects: this.props.cafe.corrects,
                                        incorrects: this.props.cafe.incorrects,
                                        day: this.props.cafe.day,
                                        alive: !1
                                    }
                                }).catch((function(e) {
                                    return console.error(e)
                                }
                                )),
                                a = 0,
                                s = 0,
                                Object.values(this.props.cafe.corrects).forEach((function(e) {
                                    a += e,
                                    s += e
                                }
                                )),
                                Object.values(this.props.cafe.incorrects).forEach((function(e) {
                                    s += e
                                }
                                )),
                                o = this.props.client && this.props.client.blook ? this.props.client.blook : Object(T.o)(Object.keys(O.a)),
                                r = this.props.client && this.props.client.name ? this.props.client.name : "You",
                                (n = this.props.client && this.props.client.standing ? JSON.parse(JSON.stringify(this.props.client.standing)) : [{
                                    name: r,
                                    blook: o,
                                    place: 6 - this.props.cafe.items.level,
                                    day: this.props.cafe.day,
                                    cash: this.props.cafe.cafeCash
                                }]).sort((function(e, t) {
                                    return e.place - t.place
                                }
                                )),
                                -1 !== (i = n.map((function(e) {
                                    return e.name
                                }
                                )).indexOf(r))) {
                                    e.next = 21;
                                    break
                                }
                                return e.abrupt("return");
                            case 21:
                                c = n[i].place,
                                this.stats = {
                                    place: c,
                                    day: this.props.cafe.day,
                                    cafeCash: n[i].cash,
                                    playersDefeated: this.props.cafe.mode ? this.props.client.standing.length - c : 0,
                                    foodServed: this.props.cafe.foodServed,
                                    correctAnswers: a,
                                    blookUsed: o,
                                    nameUsed: r
                                },
                                this.props.cafe.mode ? this.readyTimeout = setTimeout((function() {
                                    l.setState({
                                        ready: !0,
                                        numCorrect: a,
                                        numQuestions: s,
                                        foodServed: l.props.cafe.foodServed,
                                        cafeCash: l.props.cafe.cafeCash,
                                        me: n[i]
                                    })
                                }
                                ), 4750) : this.setState({
                                    numCorrect: a,
                                    numQuestions: s,
                                    day: this.props.cafe.day,
                                    foodServed: this.props.cafe.foodServed,
                                    cafeCash: this.props.cafe.cafeCash,
                                    message: Object(S.a)((c - 1) / 5),
                                    ready: !this.props.cafe.cafeId || this.state.ready,
                                    standings: n
                                }),
                                t && (this.saveStats(t.name, (function() {}
                                )),
                                m.a.put("/api/users/plan", {
                                    name: t.name,
                                    stripeId: t.stripe
                                }).then((function(e) {
                                    l.here && l.setState({
                                        ready: !l.props.cafe.mode || l.state.ready,
                                        name: t.name,
                                        plus: "Starter" !== e.data.plan || l.props.client && l.props.client.plus
                                    })
                                }
                                )).catch((function(e) {
                                    console.error(e)
                                }
                                )),
                                this.props.cafe.cafeId && (m.a.defaults.headers.common.Authorization = "undefined" != typeof window ? localStorage.getItem("token") : null,
                                m.a.delete("/api/cafes", {
                                    params: {
                                        name: t.name,
                                        id: this.props.cafe.cafeId,
                                        setId: this.props.cafe.setId
                                    }
                                }).catch((function(e) {
                                    console.error(e)
                                }
                                ))));
                            case 25:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this)
                }
                )),
                n = function() {
                    var e = this
                      , t = arguments;
                    return new Promise((function(a, s) {
                        var o = r.apply(e, t);
                        function n(e) {
                            P(o, a, s, n, i, "next", e)
                        }
                        function i(e) {
                            P(o, a, s, n, i, "throw", e)
                        }
                        n(void 0)
                    }
                    ))
                }
                ,
                function() {
                    return n.apply(this, arguments)
                }
                )
            }, {
                key: "componentWillUnmount",
                value: function() {
                    clearTimeout(this.readyTimeout),
                    this.props.deleteCafe(),
                    this.props.deleteClient(),
                    this.here = !1
                }
            }, {
                key: "saveStats",
                value: function(e, t) {
                    this.isSolo ? (m.a.defaults.headers.common.Authorization = "undefined" != typeof window ? localStorage.getItem("token") : null,
                    m.a.put("/api/users/cafestats/solo", {
                        name: e,
                        place: this.stats.place,
                        day: this.stats.day,
                        cafeCash: this.stats.cafeCash,
                        foodServed: this.stats.foodServed,
                        blookUsed: this.stats.blookUsed,
                        nameUsed: this.stats.nameUsed,
                        correctAnswers: this.stats.correctAnswers
                    }).then(t).catch((function(e) {
                        return console.error(e)
                    }
                    ))) : (m.a.defaults.headers.common.Authorization = "undefined" != typeof window ? localStorage.getItem("token") : null,
                    m.a.put("/api/users/cafestats/live", {
                        name: e,
                        place: this.stats.place,
                        cafeCash: this.stats.cafeCash,
                        foodServed: this.stats.foodServed,
                        blookUsed: this.stats.blookUsed,
                        nameUsed: this.stats.nameUsed,
                        correctAnswers: this.stats.correctAnswers,
                        playersDefeated: this.stats.playersDefeated
                    }).then(t).catch((function(e) {
                        return console.error(e)
                    }
                    )))
                }
            }, {
                key: "renderStats",
                value: function() {
                    return o.a.createElement("div", {
                        style: {
                            width: "100%"
                        }
                    }, o.a.createElement(k.a, {
                        title: "Food Served",
                        stat: Object(T.n)(this.state.foodServed)
                    }), o.a.createElement(k.a, {
                        title: "Final Cash",
                        stat: "$".concat(Object(T.n)(this.state.cafeCash))
                    }))
                }
            }, {
                key: "render",
                value: function() {
                    if (this.props.cafe && (this.props.cafe.resultId || this.props.cafe.mode) ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0),
                    this.redirect || !this.props.cafe || "final" !== this.props.cafe.stage)
                        return o.a.createElement(u.a, {
                            to: "/play"
                        });
                    var e = this.props.cafe && this.props.cafe.resultId;
                    return o.a.createElement("div", {
                        className: p.isMobile ? g.a.mBody : g.a.body,
                        style: {
                            backgroundColor: "#0bc2cf"
                        }
                    }, o.a.createElement(C.a, {
                        title: "Play Café | Blooket",
                        desc: "Serve delicious food to Blooks by answering questions, and make money to upgrade your Café."
                    }), o.a.createElement(w.a, {
                        noRight: !e,
                        rightText: "Play Again",
                        rightLink: "/play"
                    }), this.state.ready ? this.props.cafe.mode ? o.a.createElement(x.a, {
                        standings: this.props.client.standing,
                        name: this.props.client.name || "You",
                        numCorrect: this.state.numCorrect,
                        numQuestions: this.state.numQuestions,
                        username: this.state.name,
                        plus: this.props.client.plus,
                        myStat: "$".concat(Object(T.n)(this.state.me.cash)),
                        saveStats: this.saveStats,
                        renderStandingStat: function(e) {
                            return M(e, !0)
                        },
                        renderStats: this.renderStats,
                        tokenMultiplier: .25
                    }) : o.a.createElement(x.a, {
                        standings: this.state.standings,
                        name: this.props.client && this.props.client.name ? this.props.client.name : "You",
                        numCorrect: this.state.numCorrect,
                        numQuestions: this.state.numQuestions,
                        username: this.state.name,
                        plus: this.state.plus,
                        myStat: "Stayed Open for ".concat(this.state.day, " ").concat(1 === this.state.day ? "Day" : "Days"),
                        saveStats: this.saveStats,
                        renderStandingStat: function(e) {
                            return M(e, !1)
                        },
                        renderStats: this.renderStats,
                        customMessage: this.state.message,
                        tokenMultiplier: .3
                    }) : null)
                }
            }]) && R(t.prototype, a),
            s && R(t, s),
            c
        }(o.a.Component);
        q.propTypes = {
            cafe: c.a.object,
            client: c.a.object,
            firebase: c.a.object,
            deleteCafe: c.a.func.isRequired,
            deleteClient: c.a.func.isRequired,
            user: c.a.object
        };
        t.a = Object(d.c)(Object(l.a)(Object(n.b)((function(e) {
            return {
                cafe: e.cafes.cafe,
                client: e.clients.client
            }
        }
        ), (function(e) {
            return Object(r.b)({
                deleteCafe: h.a,
                deleteClient: _.a
            }, e)
        }
        ))(Object(j.d)(q))))
    },
    "7R+V": function(e, t, a) {
        "use strict";
        a.d(t, "c", (function() {
            return n
        }
        )),
        a.d(t, "b", (function() {
            return i
        }
        )),
        a.d(t, "a", (function() {
            return c
        }
        ));
        var s = a("b6Qr")
          , o = a("w16W")
          , r = a.n(o)
          , n = [{
            elementId: "customer",
            text: "Your Café has a customer! He wants 2 pieces of Toast.",
            nextButtonText: "Next",
            className: r.a.customer
        }, {
            elementId: "customer",
            text: "You have until that colored bar is empty to serve the customer. Fail to serve 3 customers in a day and your game is over.",
            nextButtonText: "Next",
            className: r.a.customer
        }, {
            elementId: "plate1",
            text: "Toast usually goes here, but right now we don't have any.",
            nextButtonText: "Next",
            className: r.a.plate
        }, {
            elementId: "restock",
            text: "Luckily, we can restock our food by clicking this button".concat(s.isMobile ? "" : " (or by pressing the space key once the tutorial is over)", ". Go ahead and click it now!"),
            elementClick: !0,
            functionIndex: 0,
            className: r.a.restock
        }, {
            elementId: "restock",
            text: "Usually you'll have to answer a question correctly to restock your food, but we'll skip that for now. Go ahead and click again to get the 2nd piece of toast.",
            elementClick: !0,
            functionIndex: 0,
            className: r.a.restock
        }, {
            elementId: "plate1",
            text: "Now that we have 2 pieces of Toast, we can click once to select them. Click it now!",
            elementClick: !0,
            className: r.a.plate
        }, {
            elementId: "customer",
            text: "Now that you have the food selected, just click anywhere on the customer to deliver it!",
            elementClick: !0,
            className: r.a.customer
        }, {
            text: "Perfect! You just made $2! After the day is over, you can use this cash to upgrade your Café.",
            nextButtonText: "Next",
            className: r.a.centered
        }, {
            elementId: "customersText",
            backgroundColor: "#9a49aa",
            text: "You can tell how many customers are remaining in a day by that number in the top right of the header. Now, it's time to open your Café! Good Luck!",
            nextButtonText: "Open Café",
            className: r.a.topRight
        }]
          , i = [{
            elementId: "customer",
            text: "Your Café has a customer! He wants 2 pieces of Toast.",
            nextButtonText: "Next",
            className: r.a.customer
        }, {
            elementId: "plate1",
            text: "Toast usually goes here, but right now we don't have any.",
            nextButtonText: "Next",
            className: r.a.plate
        }, {
            elementId: "restock",
            text: "Luckily, we can restock our food by clicking this button".concat(s.isMobile ? "" : " (or by pressing the space key once the tutorial is over)", ". Go ahead and click it now!"),
            elementClick: !0,
            functionIndex: 0,
            className: r.a.restock
        }, {
            elementId: "restock",
            text: "Usually you'll have to answer a question correctly to restock your food, but we'll skip that for now. Go ahead and click again to get the 2nd piece of toast.",
            elementClick: !0,
            functionIndex: 0,
            className: r.a.restock
        }, {
            elementId: "plate1",
            text: "Now that we have 2 pieces of Toast, we can click once to select them. Click it now!",
            elementClick: !0,
            className: r.a.plate
        }, {
            elementId: "customer",
            text: "Now that you have the food selected, just click anywhere on the customer to deliver it!",
            elementClick: !0,
            className: r.a.customer
        }, {
            text: "Perfect! You just made $7!",
            nextButtonText: "Next",
            className: r.a.centered
        }, {
            elementId: "upgrade",
            text: "You can now use this money to upgrade your Café! Go ahead and click that button to go to the Upgrade Shop!",
            elementClick: !0,
            functionIndex: 1,
            className: r.a.restock
        }]
          , c = [{
            elementId: "upgrade2",
            text: "Look! The green price indicates that you can afford cereal! Go ahead and click on it to buy it!",
            elementClick: !0,
            functionIndex: 0,
            className: r.a.cereal
        }, {
            text: "Great work! Buying upgrades helps you make more money! Below the upgrades you'll also find abilities to help you win.",
            nextButtonText: "Next",
            className: r.a.centered
        }, {
            elementId: "shopButton",
            text: "Now go back to your Café to keep serving customers. Make sure you visit the Upgrade Shop frequently!",
            elementClick: !0,
            functionIndex: 1,
            className: r.a.back
        }]
    },
    "8N3m": function(e, t, a) {
        var s = a("W8y1");
        "string" == typeof s && (s = [[e.i, s, ""]]);
        var o = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        a("aET+")(s, o);
        s.locals && (e.exports = s.locals)
    },
    "9RJb": function(e, t, a) {
        var s = a("X29w");
        "string" == typeof s && (s = [[e.i, s, ""]]);
        var o = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        a("aET+")(s, o);
        s.locals && (e.exports = s.locals)
    },
    ATvy: function(e, t, a) {
        "use strict";
        var s = a("q1tI")
          , o = a.n(s)
          , r = a("ANjH")
          , n = a("/MKj")
          , i = a("17x9")
          , c = a.n(i)
          , l = a("mf+E")
          , u = a("wIs1")
          , p = a("b6Qr")
          , f = a("TSYQ")
          , m = a.n(f)
          , d = a("vDqi")
          , h = a.n(d)
          , _ = a("GIcp")
          , y = a.n(_)
          , b = a("4j4v")
          , v = a.n(b)
          , g = a("2g2H")
          , w = a("iQ+n")
          , C = a("FPhr")
          , x = a("6hcl")
          , k = a("SCqF")
          , S = a("vPiy")
          , O = a("7R+V")
          , T = a("Tqoc");
        function j(e, t, a, s, o, r, n, i) {
            return {
                type: T.a,
                corrects: e,
                incorrects: t,
                cafeCash: a,
                day: s,
                foodServed: o,
                freeQuestions: r,
                stage: n,
                foodStocks: i
            }
        }
        function N(e, t, a, s, o, r, n, i, c) {
            return {
                type: T.b,
                corrects: e,
                incorrects: t,
                cafeCash: a,
                day: s,
                foodServed: o,
                freeQuestions: r,
                stage: n,
                foodStocks: i,
                customers: c
            }
        }
        var I = a("bMSx")
          , E = a("pMbe")
          , A = a("4hRK")
          , P = a("IAGC")
          , R = a("avlG")
          , B = a("DoX5")
          , D = a("3RWh")
          , z = a("TN+F")
          , L = a("SdQT")
          , H = a("anyA")
          , M = a("AkzR")
          , q = a("6T3a")
          , J = a("Rpkt")
          , U = a("RiBT")
          , G = a("ASIK")
          , Q = a("mNb3")
          , F = a("qnVj")
          , V = a("5v1S");
        function W(e) {
            return (W = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Y(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                t && (s = s.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, s)
            }
            return a
        }
        function K(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Y(Object(a), !0).forEach((function(t) {
                    X(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Y(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        function X(e, t, a) {
            return t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a,
            e
        }
        function $(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                    return;
                var a = []
                  , s = !0
                  , o = !1
                  , r = void 0;
                try {
                    for (var n, i = e[Symbol.iterator](); !(s = (n = i.next()).done) && (a.push(n.value),
                    !t || a.length !== t); s = !0)
                        ;
                } catch (e) {
                    o = !0,
                    r = e
                } finally {
                    try {
                        s || null == i.return || i.return()
                    } finally {
                        if (o)
                            throw r
                    }
                }
                return a
            }(e, t) || ie(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function Z(e, t, a, s, o, r, n) {
            try {
                var i = e[r](n)
                  , c = i.value
            } catch (e) {
                return void a(e)
            }
            i.done ? t(c) : Promise.resolve(c).then(s, o)
        }
        function ee(e, t) {
            for (var a = 0; a < t.length; a++) {
                var s = t[a];
                s.enumerable = s.enumerable || !1,
                s.configurable = !0,
                "value"in s && (s.writable = !0),
                Object.defineProperty(e, s.key, s)
            }
        }
        function te(e, t) {
            return (te = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function ae(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var a, s = re(e);
                if (t) {
                    var o = re(this).constructor;
                    a = Reflect.construct(s, arguments, o)
                } else
                    a = s.apply(this, arguments);
                return se(this, a)
            }
        }
        function se(e, t) {
            return !t || "object" !== W(t) && "function" != typeof t ? oe(e) : t
        }
        function oe(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function re(e) {
            return (re = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function ne(e) {
            return function(e) {
                if (Array.isArray(e))
                    return ce(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                    return Array.from(e)
            }(e) || ie(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function ie(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return ce(e, t);
                var a = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === a && e.constructor && (a = e.constructor.name),
                "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? ce(e, t) : void 0
            }
        }
        function ce(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var a = 0, s = new Array(t); a < t; a++)
                s[a] = e[a];
            return s
        }
        var le = [].concat(ne(Object.keys(M.a)), ne(Object.keys(q.a)), ne(Object.keys(J.a)), ne(Object.keys(U.a)), ne(Object.keys(G.a)))
          , ue = [].concat(ne(Object.keys(Q.a)), ne(Object.keys(F.a)), ne(Object.keys(V.a)))
          , pe = {
            Toast: 0,
            Cereal: 0,
            Yogurt: 0,
            "Breakfast Combo": 0,
            "Orange Juice": 0,
            Milk: 0,
            Waffle: 0,
            Pancakes: 0,
            "French Toast": 0
        }
          , fe = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && te(e, t)
            }(c, e);
            var t, a, s, r, n, i = ae(c);
            function c(e) {
                var t;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, c),
                (t = i.call(this, e)).state = {
                    name: "",
                    foods: [],
                    customers: [{}, {}, {}],
                    futureCustomers: [],
                    foodSelected: -1,
                    question: {},
                    phase: "cafe",
                    correct: !0,
                    reportArray: [],
                    totalProfit: -1,
                    day: 1,
                    customersMissed: 0,
                    askTour: !1,
                    showTour: !1,
                    goal: 0,
                    gameOver: !1,
                    cafeCash: 0,
                    canUpgrade: !1,
                    cashChange: 0,
                    attackerName: "",
                    attackerBlook: "",
                    ability: "",
                    redirect: !1
                },
                t.timeouts = [],
                t.questions = [],
                t.freeQuestions = [],
                t.corrects = e.cafe && e.cafe.corrects ? JSON.parse(JSON.stringify(e.cafe.corrects)) : {},
                t.incorrects = e.cafe && e.cafe.incorrects ? JSON.parse(JSON.stringify(e.cafe.incorrects)) : {},
                t.waiting = !1,
                t.canGoNext = !0,
                t.foodServed = 0,
                t.foodSales = JSON.parse(JSON.stringify(pe)),
                t.happyCustomers = 0,
                t.gettingQuestion = !1,
                t.gameOver = !1,
                t.dbRefStage = {},
                t.dbRefMe = {},
                t.here = !0,
                t.onAnswer = t.onAnswer.bind(oe(t)),
                t.getQuestion = t.getQuestion.bind(oe(t)),
                t.newDay = t.newDay.bind(oe(t)),
                t.newLiveCustomer = t.newLiveCustomer.bind(oe(t)),
                t.addCustomer = t.addCustomer.bind(oe(t)),
                t.removeCustomer = t.removeCustomer.bind(oe(t)),
                t.answerNext = t.answerNext.bind(oe(t)),
                t.selectFood = t.selectFood.bind(oe(t)),
                t.selectCustomer = t.selectCustomer.bind(oe(t)),
                t.answerTour = t.answerTour.bind(oe(t)),
                t.canUpgrade = t.canUpgrade.bind(oe(t)),
                t.goToShop = t.goToShop.bind(oe(t)),
                t
            }
            return t = c,
            (a = [{
                key: "componentDidMount",
                value: (r = regeneratorRuntime.mark((function e() {
                    var t = this;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                this.props.user.getData();
                            case 2:
                                if (e.sent || this.setState({
                                    notLoggedIn: !0
                                }),
                                this.props.cafe && "cafe" === this.props.cafe.stage && this.props.cafe.questions && this.props.cafe.questions[0]) {
                                    e.next = 7;
                                    break
                                }
                                return this.setState({
                                    redirect: !0
                                }),
                                e.abrupt("return");
                            case 7:
                                if (Object(z.c)(),
                                this.questions = this.props.cafe.questions,
                                this.freeQuestions = JSON.parse(JSON.stringify(this.props.cafe.freeQuestions)),
                                this.props.cafe.isHappy && (this.happyCustomers = 5),
                                this.setState({
                                    foods: Object.entries(this.props.cafe.foods).map((function(e) {
                                        var a = $(e, 2)
                                          , s = a[0];
                                        return {
                                            name: s,
                                            level: a[1],
                                            stock: t.props.cafe.foodStocks && t.props.cafe.foodStocks[s] ? t.props.cafe.foodStocks[s] : 0
                                        }
                                    }
                                    )),
                                    name: this.props.client ? this.props.client.name : "",
                                    cafeCash: this.props.cafe.cafeCash,
                                    day: this.props.cafe.day,
                                    askTour: 1 === this.props.cafe.day && 0 === this.props.cafe.foods.Cereal,
                                    goal: 1 === this.props.cafe.day && (this.props.cafe.hwGoal || this.props.cafe.goal) || 0,
                                    mode: this.props.cafe.mode,
                                    customers: this.props.cafe.customers && 3 === this.props.cafe.customers.length ? this.props.cafe.customers : [{}, {}, {}]
                                }, (function() {
                                    if (!t.state.askTour && !t.state.goal)
                                        if (t.state.mode) {
                                            t.canUpgrade();
                                            for (var e = 0; e < 3 - t.state.customers.filter((function(e) {
                                                return e.profit
                                            }
                                            )).length; e++)
                                                t.newLiveCustomer()
                                        } else
                                            t.newDay()
                                }
                                )),
                                document.onkeypress = function(e) {
                                    var a = e || window.event;
                                    if (32 === a.keyCode || "Space" === a.code) {
                                        if (t.state.totalProfit >= 0)
                                            return;
                                        "cafe" === t.state.phase ? (t.getQuestion(),
                                        t.setState({
                                            foodSelected: -1
                                        })) : "feedback" === t.state.phase && t.canGoNext && t.answerNext()
                                    }
                                }
                                ,
                                !(this.props.client && this.props.client.hostId && this.props.cafe.mode)) {
                                    e.next = 22;
                                    break
                                }
                                return e.next = 16,
                                this.props.firebase.getDatabaseRef(this.props.client.hostId, "stg");
                            case 16:
                                return this.dbRefStage = e.sent,
                                this.dbRefStage.on("value", (function(e) {
                                    switch (e.val()) {
                                    case "fin":
                                        t.props.firebase.getDatabaseVal(t.props.client.hostId, "st", (function(e) {
                                            var a = e ? e.map((function(e) {
                                                return {
                                                    name: e.n,
                                                    blook: e.b,
                                                    cash: e.c,
                                                    place: e.p
                                                }
                                            }
                                            )).filter((function(e) {
                                                return e.cash || 0 === e.cash
                                            }
                                            )) : [];
                                            t.props.endCafeDay(t.corrects, t.incorrects, t.state.cafeCash, t.state.day, t.props.cafe.foodServed + t.foodServed, t.freeQuestions, "final", {}),
                                            t.props.setStanding(a),
                                            t.props.history.push("/cafe/final")
                                        }
                                        ));
                                        break;
                                    case null:
                                        t.props.firebase.getDatabaseVal(t.props.client.hostId, "stg", (function(e) {
                                            e || (t.props.deleteClient(),
                                            t.props.history.push("/play"))
                                        }
                                        ))
                                    }
                                }
                                )),
                                e.next = 20,
                                this.props.firebase.getDatabaseRef(this.props.client.hostId, "c/".concat(this.props.client.name, "/at"));
                            case 20:
                                this.dbRefMe = e.sent,
                                this.dbRefMe.on("value", (function(e) {
                                    if (e.val() && !t.state.ability) {
                                        var a = e.val().split(":")
                                          , s = a[2]
                                          , o = t.state.cafeCash
                                          , r = 0;
                                        "pay" === s ? r = Math.round(.25 * o) : "tax" === s && (r = Math.round(-.25 * o)),
                                        o += r,
                                        t.here && (t.setState({
                                            cashChange: Math.abs(r),
                                            attackerName: a[0],
                                            attackerBlook: a[1],
                                            ability: s,
                                            cafeCash: o
                                        }, (function() {
                                            "inspect" === s ? t.abilityTimeout = setTimeout((function() {
                                                t.setState({
                                                    ability: ""
                                                })
                                            }
                                            ), 12e3) : "trash" === s && (t.abilityTimeout = setTimeout((function() {
                                                var e = t.state.foods.map((function(e) {
                                                    return K(K({}, e), {}, {
                                                        stock: Math.max(0, e.stock - 3)
                                                    })
                                                }
                                                ));
                                                t.setState({
                                                    foods: e
                                                }, (function() {
                                                    t.abilityTimeout = setTimeout((function() {
                                                        t.setState({
                                                            ability: ""
                                                        })
                                                    }
                                                    ), 1050)
                                                }
                                                ))
                                            }
                                            ), 1050))
                                        }
                                        )),
                                        t.props.firebase.setVal({
                                            id: t.props.client.hostId,
                                            path: "c/".concat(t.props.client.name),
                                            val: {
                                                b: t.props.client.blook,
                                                ca: o
                                            }
                                        }))
                                    }
                                }
                                ));
                            case 22:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this)
                }
                )),
                n = function() {
                    var e = this
                      , t = arguments;
                    return new Promise((function(a, s) {
                        var o = r.apply(e, t);
                        function n(e) {
                            Z(o, a, s, n, i, "next", e)
                        }
                        function i(e) {
                            Z(o, a, s, n, i, "throw", e)
                        }
                        n(void 0)
                    }
                    ))
                }
                ,
                function() {
                    return n.apply(this, arguments)
                }
                )
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.here = !1,
                    Object(z.t)(),
                    this.timeouts.forEach((function(e) {
                        clearTimeout(e)
                    }
                    )),
                    clearTimeout(this.abilityTimeout),
                    clearTimeout(this.waitTimeout),
                    clearTimeout(this.nextTimeout),
                    clearTimeout(this.exitTimeout),
                    clearTimeout(this.doneTimeout),
                    clearTimeout(this.customerTimeout),
                    document.onkeypress = function() {}
                    ,
                    Object.keys(this.dbRefStage).length && this.dbRefStage.off("value"),
                    Object.keys(this.dbRefMe).length && this.dbRefMe.off("value")
                }
            }, {
                key: "onAnswer",
                value: function(e) {
                    var t = this;
                    if (!this.waiting) {
                        this.waiting = !0;
                        var a = this.state.question.correctAnswers.includes(e)
                          , s = this.state.question.number;
                        a ? this.corrects[s] ? this.corrects[s] += 1 : this.corrects[s] = 1 : this.incorrects[s] ? this.incorrects[s] += 1 : this.incorrects[s] = 1,
                        this.canGoNext = !1,
                        this.here && this.setState({
                            correct: a,
                            phase: "feedback"
                        }, (function() {
                            t.state.correct ? t.canGoNext = !0 : t.nextTimeout = setTimeout((function() {
                                t.canGoNext = !0
                            }
                            ), 3e3)
                        }
                        ))
                    }
                }
            }, {
                key: "getQuestion",
                value: function() {
                    var e = this;
                    if (!this.state.showTour && this.here && !this.gettingQuestion) {
                        this.gettingQuestion = !0,
                        0 === this.freeQuestions.length && (this.freeQuestions = JSON.parse(JSON.stringify(this.questions)));
                        var t = Object(z.o)(this.freeQuestions);
                        this.freeQuestions.splice(this.freeQuestions.indexOf(t), 1),
                        t.random && (t.answers = Object(z.w)(t.answers)),
                        this.here && this.setState({
                            question: t,
                            phase: "question"
                        }, (function() {
                            e.waiting = !0,
                            e.waitTimeout = setTimeout((function() {
                                e.waiting = !1,
                                e.gettingQuestion = !1
                            }
                            ), 400)
                        }
                        ))
                    }
                }
            }, {
                key: "newDay",
                value: function() {
                    var e = this
                      , t = this.state.foods.filter((function(e) {
                        return e.level > 0
                    }
                    )).map((function(e) {
                        return e.name
                    }
                    ))
                      , a = Math.round(10 * (1 - Math.exp(-.06 * (this.state.day - 1)))) + 5
                      , s = 0;
                    this.questions.forEach((function(e) {
                        s += e.timeLimit
                    }
                    ));
                    for (var o = Math.min(s / this.questions.length / 1.5, 12), r = [], n = 0; n < a; n++) {
                        for (var i = Math.random() > .9, c = Object(z.o)([1, 2, 2, 3, 3, 3]), l = 0, u = {}, p = 0; p < c; p++) {
                            var f = Object(z.q)(1, Math.min(.35 * this.state.day, i ? 11 : 5) + 2);
                            u[Object(z.o)(t)] = f,
                            l += f
                        }
                        var m = 0;
                        Object.entries(u).forEach((function(t) {
                            var a = $(t, 2)
                              , s = a[0]
                              , o = a[1];
                            m += D.b[s].profits[e.props.cafe.foods[s]] * o
                        }
                        )),
                        m *= D.b.level.multipliers[this.props.cafe.items.level - 1],
                        m = Math.round(1.75 * m),
                        r.push({
                            blook: i ? Object(z.o)(ue) : Object(z.o)(le),
                            time: 1e3 * (37 * Math.exp(-.05 * this.state.day) + 1.3 * l + (this.state.day < 15 ? o + 6 : 5)) + 1e3 * D.b.time.times[this.props.cafe.items.level - 1],
                            enterDelay: 1e3 * (7 * Math.random() * Math.exp(-.035 * this.state.day) + 1.5),
                            constantOrder: u,
                            order: u,
                            profit: m
                        })
                    }
                    this.here && this.setState({
                        futureCustomers: r,
                        showTour: !1
                    }, (function() {
                        e.customerTimeout = setTimeout((function() {
                            var t = [{}, {}, {}];
                            t[Object(z.q)(0, 3)] = r[0],
                            r.splice(0, 1),
                            e.setState({
                                customers: t,
                                futureCustomers: r
                            }, (function() {
                                for (var t = 0; t < 2; t++)
                                    e.addCustomer(r[0].enterDelay * (1 + t))
                            }
                            ))
                        }
                        ), 3e3)
                    }
                    ))
                }
            }, {
                key: "newLiveCustomer",
                value: function() {
                    for (var e = this, t = this.state.foods.filter((function(e) {
                        return e.level > 0
                    }
                    )).map((function(e) {
                        return e.name
                    }
                    )), a = Math.random() > .9, s = Object(z.o)([1, 2, 2, 3, 3, 3]), o = {}, r = 0; r < s; r++) {
                        var n = Object(z.q)(1, Math.min(.03 * (this.foodServed + this.props.cafe.foodServed), a ? 9 : 5) + 2);
                        o[Object(z.o)(t)] = n
                    }
                    var i = 0;
                    Object.entries(o).forEach((function(t) {
                        var a = $(t, 2)
                          , s = a[0]
                          , o = a[1];
                        i += D.b[s].profits[e.props.cafe.foods[s]] * o
                    }
                    )),
                    i *= D.b.level.multipliers[this.props.cafe.items.level - 1],
                    i = Math.round(3.25 * i),
                    this.happyCustomers > 0 && (i = Math.round(2 * i),
                    this.happyCustomers -= 1);
                    var c = {
                        blook: a ? Object(z.o)(ue) : Object(z.o)(le),
                        time: -1,
                        enterDelay: 5 * Math.random() * 1e3,
                        constantOrder: o,
                        order: o,
                        profit: i
                    };
                    this.addCustomer(c.enterDelay, c)
                }
            }, {
                key: "addCustomer",
                value: function(e, t) {
                    var a = this;
                    -1 !== e && this.timeouts.push(setTimeout((function() {
                        var e = JSON.parse(JSON.stringify(a.state.customers))
                          , s = JSON.parse(JSON.stringify(a.state.futureCustomers))
                          , o = function(e) {
                            for (var t = 0; t < e.length; t++)
                                if (!e[t].blook)
                                    return t;
                            return -1
                        }(e);
                        -1 !== o && s.length > 0 ? e[o] = s.splice(0, 1)[0] : t && (e[o] = t),
                        a.here && a.setState({
                            customers: e,
                            futureCustomers: s
                        })
                    }
                    ), e))
                }
            }, {
                key: "removeCustomer",
                value: function(e, t) {
                    var a = this;
                    if (t && this.props.client && this.props.client.hostId && this.props.cafe.mode) {
                        var s = this.state.cafeCash + this.state.customers[e].profit;
                        if (this.props.firebase.setVal({
                            id: this.props.client.hostId,
                            path: "c/".concat(this.props.client.name),
                            val: {
                                b: this.props.client.blook,
                                ca: s
                            }
                        }),
                        !this.here)
                            return;
                        this.setState({
                            cafeCash: s
                        }, this.canUpgrade)
                    }
                    this.doneTimeout = setTimeout((function() {
                        var s = JSON.parse(JSON.stringify(a.state.customers));
                        if (0 !== s[e].time) {
                            var o = a.state.customersMissed;
                            t ? Object.entries(s[e].constantOrder).forEach((function(e) {
                                var t = $(e, 2)
                                  , s = t[0]
                                  , o = t[1];
                                a.foodSales[s] += o
                            }
                            )) : o += 1,
                            s[e] = {},
                            a.here && a.setState({
                                customers: s,
                                customersMissed: o
                            }, (function() {
                                if (o >= 3) {
                                    if (a.gameOver = !0,
                                    !a.here)
                                        return;
                                    a.setState({
                                        gameOver: !0
                                    }, (function() {
                                        a.props.cafe.cafeId ? (h.a.defaults.headers.common.Authorization = "undefined" != typeof window ? localStorage.getItem("token") : null,
                                        h.a.put("/api/cafes/save", {
                                            id: a.props.cafe.cafeId,
                                            corrects: a.corrects,
                                            incorrects: a.incorrects,
                                            cafeCash: a.props.cafe.cafeCash + Math.max(a.state.totalProfit, 0),
                                            foodServed: a.props.cafe.foodServed + a.foodServed,
                                            day: a.state.day,
                                            stage: "final"
                                        }).then((function() {
                                            a.exitTimeout = setTimeout((function() {
                                                a.props.endCafeDay(a.corrects, a.incorrects, a.props.cafe.cafeCash + Math.max(a.state.totalProfit, 0), a.state.day, a.props.cafe.foodServed + a.foodServed, a.freeQuestions, "final", {}),
                                                a.props.history.push("/cafe/final")
                                            }
                                            ), 5e3)
                                        }
                                        )).catch((function(e) {
                                            console.error(e),
                                            a.props.history.push("/login")
                                        }
                                        ))) : a.exitTimeout = setTimeout((function() {
                                            a.props.endCafeDay(a.corrects, a.incorrects, a.props.cafe.cafeCash + Math.max(a.state.totalProfit, 0), a.state.day, a.props.cafe.foodServed + a.foodServed, a.freeQuestions, "final", {}),
                                            a.props.history.push("/cafe/final")
                                        }
                                        ), 5e3)
                                    }
                                    ))
                                } else if (a.props.cafe.mode)
                                    a.newLiveCustomer();
                                else if (0 === a.state.customers.filter((function(e) {
                                    return e.blook
                                }
                                )).length && 0 === a.state.futureCustomers.length) {
                                    var e = []
                                      , t = 0
                                      , s = D.b.level.multipliers[a.props.cafe.items.level - 1];
                                    if (Object.entries(a.foodSales).forEach((function(o) {
                                        var r = $(o, 2)
                                          , n = r[0]
                                          , i = r[1];
                                        if (!(i <= 0)) {
                                            var c = Math.round(i * D.b[n].profits[a.props.cafe.foods[n]] * s * 1.75);
                                            t += c,
                                            e.push({
                                                name: n,
                                                amount: i,
                                                profit: c
                                            })
                                        }
                                    }
                                    )),
                                    a.gameOver || !a.here)
                                        return;
                                    a.setState({
                                        reportArray: e,
                                        totalProfit: t
                                    })
                                } else
                                    a.addCustomer(a.state.futureCustomers[0] ? a.state.futureCustomers[0].enterDelay : -1)
                            }
                            ))
                        } else {
                            if (Object.entries(s[e].constantOrder).forEach((function(e) {
                                var t = $(e, 2)
                                  , s = t[0]
                                  , o = t[1];
                                a.foodSales[s] += o
                            }
                            )),
                            s[e] = {},
                            !a.here)
                                return;
                            a.setState({
                                customers: s
                            })
                        }
                    }
                    ), 2200)
                }
            }, {
                key: "answerNext",
                value: function() {
                    if (this.canGoNext) {
                        var e = JSON.parse(JSON.stringify(this.state.foods));
                        this.state.correct && e.forEach((function(t, a) {
                            t.level > 0 && (e[a].stock = Math.min(e[a].stock + 1, 99))
                        }
                        )),
                        this.setState({
                            phase: "cafe",
                            foods: e
                        })
                    }
                }
            }, {
                key: "selectFood",
                value: function(e) {
                    this.state.foods[e].stock <= 0 || this.setState({
                        foodSelected: e === this.state.foodSelected ? -1 : e
                    })
                }
            }, {
                key: "selectCustomer",
                value: function(e) {
                    var t = this.state.customers[e] ? this.state.customers[e].order : null;
                    if (t) {
                        var a = this.state.foods[this.state.foodSelected];
                        if (a.stock > 0 && t[a.name] > 0) {
                            var s = JSON.parse(JSON.stringify(this.state.customers))
                              , o = Math.min(s[e].order[a.name], a.stock);
                            s[e].order[a.name] -= o;
                            var r = JSON.parse(JSON.stringify(this.state.foods));
                            r[this.state.foodSelected].stock -= o,
                            this.foodServed += o,
                            this.setState({
                                customers: s,
                                foods: r,
                                foodSelected: -1
                            })
                        } else
                            this.setState({
                                foodSelected: -1
                            })
                    } else
                        this.setState({
                            foodSelected: -1
                        })
                }
            }, {
                key: "answerTour",
                value: function(e) {
                    var t = this;
                    if (this.here)
                        if (e) {
                            var a = {
                                Toast: 2
                            }
                              , s = [{
                                blook: Object(z.o)(le),
                                time: 0,
                                enterDelay: 0,
                                constantOrder: a,
                                order: a,
                                profit: this.props.cafe.mode ? 7 : 2
                            }, {}, {}];
                            this.setState({
                                customers: s,
                                askTour: !1,
                                showTour: !0
                            })
                        } else
                            this.setState({
                                askTour: !1,
                                showTour: !1
                            }, (function() {
                                if (!t.state.goal)
                                    if (t.props.cafe.mode) {
                                        t.canUpgrade();
                                        for (var e = 0; e < 3 - t.state.customers.filter((function(e) {
                                            return e.profit
                                        }
                                        )).length; e++)
                                            t.newLiveCustomer()
                                    } else
                                        t.newDay()
                            }
                            ))
                }
            }, {
                key: "canUpgrade",
                value: function() {
                    for (var e = !1, t = Object.entries(this.props.cafe.foods), a = 0; a < Object.keys(this.props.cafe.foods).length; a++)
                        if (D.b[t[a][0]].prices[t[a][1]] <= this.state.cafeCash) {
                            e = !0;
                            break
                        }
                    if (!e)
                        for (var s = Object.entries(this.props.cafe.items), o = 0; o < Object.keys(this.props.cafe.items).length; o++)
                            if (D.b[s[o][0]].prices[s[o][1]] <= this.state.cafeCash) {
                                e = !0;
                                break
                            }
                    this.here && this.setState({
                        canUpgrade: e
                    })
                }
            }, {
                key: "goToShop",
                value: function() {
                    var e = this;
                    if (!this.gameOver) {
                        var t = {};
                        this.state.foods.forEach((function(e) {
                            t[e.name] = e.stock
                        }
                        )),
                        this.props.cafe.cafeId ? (h.a.defaults.headers.common.Authorization = "undefined" != typeof window ? localStorage.getItem("token") : null,
                        h.a.put("/api/cafes/save", {
                            id: this.props.cafe.cafeId,
                            corrects: this.corrects,
                            incorrects: this.incorrects,
                            cafeCash: this.props.cafe.cafeCash + this.state.totalProfit,
                            foodServed: this.props.cafe.foodServed + this.foodServed,
                            day: this.state.day + 1,
                            stage: "shop",
                            foodStocks: t
                        }).then((function() {
                            e.props.endCafeDay(e.corrects, e.incorrects, e.props.cafe.cafeCash + e.state.totalProfit, e.state.day + 1, e.props.cafe.foodServed + e.foodServed, e.freeQuestions, "shop", t),
                            e.props.history.push("/cafe/shop")
                        }
                        )).catch((function(t) {
                            console.error(t),
                            e.props.history.push("/login")
                        }
                        ))) : this.props.cafe.mode ? (this.props.endCafeLive(this.corrects, this.incorrects, this.state.cafeCash, this.state.showTour ? 1 : this.state.day + 1, this.props.cafe.foodServed + this.foodServed, this.freeQuestions, "shop", t, this.state.customers.map((function(e) {
                            return e.order && 0 === Object.values(e.order).filter((function(e) {
                                return e
                            }
                            )).length ? {} : e
                        }
                        ))),
                        this.props.history.push("/cafe/shop")) : (this.props.endCafeDay(this.corrects, this.incorrects, this.props.cafe.cafeCash + this.state.totalProfit, this.state.day + 1, this.props.cafe.foodServed + this.foodServed, this.freeQuestions, "shop", t),
                        this.props.history.push("/cafe/shop"))
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this;
                    return this.props.cafe && (this.props.cafe.resultId || this.props.cafe.mode) ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0),
                    !this.redirect && this.props.cafe && this.props.cafe.questions && this.props.cafe.questions[0] && !this.state.redirect ? o.a.createElement("div", {
                        className: p.isMobile ? y.a.mBody : y.a.body,
                        id: "body"
                    }, o.a.createElement(w.a, {
                        title: "Play Café | Blooket",
                        desc: "Serve delicious food to Blooks by answering questions, and make money to upgrade your Café."
                    }), o.a.createElement(g.a, {
                        cash: this.state.mode ? this.state.cafeCash : null,
                        customers: this.state.mode ? null : this.state.futureCustomers.length,
                        name: this.state.name,
                        color: Object(P.d)(this.props.cafe.items.level)
                    }), o.a.createElement("div", {
                        className: y.a.regularBody,
                        id: "regularBody"
                    }, this.state.showTour ? o.a.createElement(S.a, {
                        steps: this.props.cafe.mode ? O.b : O.c,
                        onExit: this.props.cafe.goal ? function() {}
                        : this.state.goal ? function() {
                            return e.answerTour(!1)
                        }
                        : this.newDay,
                        functions: [this.answerNext, this.goToShop]
                    }) : null, o.a.createElement(P.a, {
                        level: this.props.cafe.items.level
                    }), o.a.createElement("div", {
                        className: v.a.counterBelow
                    }), o.a.createElement("div", {
                        className: v.a.counterBottom,
                        style: {
                            backgroundColor: Object(P.b)(this.props.cafe.items.level)
                        }
                    }), o.a.createElement("div", {
                        className: v.a.counterTop,
                        style: {
                            backgroundColor: Object(P.c)(this.props.cafe.items.level)
                        }
                    }), this.state.foods.map((function(t, a) {
                        return o.a.createElement("div", {
                            className: m()(v.a.plate, v.a["plate".concat(a + 1)], X({}, v.a.plateHover, t.stock > 0), X({}, v.a.plateSelected, e.state.foodSelected === a && t.stock > 0), X({}, v.a.plateColor4, 4 === t.level), X({}, v.a.plateColor5, 5 === t.level)),
                            key: t.name,
                            style: {
                                cursor: t.stock > 0 ? "pointer" : "auto"
                            },
                            id: "plate".concat(a + 1),
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.selectFood(a)
                            }
                        }, t.level > 1 ? o.a.createElement("div", {
                            className: v.a["plateLevel".concat(t.level)]
                        }) : null, t.stock > 0 ? o.a.createElement(B.a, {
                            name: t.name,
                            className: v.a.food
                        }) : null, 0 === t.level ? o.a.createElement("div", {
                            className: v.a.lockedPlate
                        }, o.a.createElement("i", {
                            className: "fas fa-lock"
                        })) : o.a.createElement("div", {
                            className: v.a.foodStock
                        }, t.stock))
                    }
                    )), this.state.customers.map((function(t, a) {
                        return t && t.blook ? o.a.createElement(A.a, {
                            blook: t.blook,
                            place: a,
                            key: a,
                            order: t.order,
                            profit: t.profit,
                            canClick: -1 !== e.state.foodSelected && Object.entries(t.order).filter((function(e) {
                                return $(e, 2)[1] > 0
                            }
                            )).map((function(e) {
                                return e[0]
                            }
                            )).includes(e.state.foods[e.state.foodSelected].name),
                            onClick: function() {
                                return e.selectCustomer(a)
                            },
                            time: t.time,
                            onDone: function(t) {
                                return e.removeCustomer(a, t)
                            }
                        }) : null
                    }
                    )), o.a.createElement("div", {
                        className: this.state.mode ? v.a.restockButtonLive : v.a.restockButton,
                        role: "button",
                        tabIndex: 0,
                        onClick: this.getQuestion,
                        id: "restock"
                    }, "Restock Food", p.isMobile ? null : o.a.createElement("div", {
                        className: v.a.restockKey
                    }, "Space")), "trash" === this.state.ability ? o.a.createElement(B.a, {
                        name: this.state.attackerBlook,
                        className: v.a.trashBlook
                    }) : null, this.state.mode ? o.a.createElement("div", {
                        className: v.a.restockButtonLive,
                        role: "button",
                        tabIndex: 0,
                        onClick: this.goToShop,
                        id: "upgrade",
                        style: {
                            backgroundColor: "#ff7b24",
                            left: "52.5%",
                            opacity: this.state.canUpgrade ? 1 : .5
                        }
                    }, "Upgrade Shop", this.state.canUpgrade ? o.a.createElement("div", {
                        className: v.a.upgradeIcon
                    }, "!") : null) : null, o.a.createElement("div", {
                        className: v.a.missesContainer
                    }, o.a.createElement("i", {
                        className: m()("fas fa-times", v.a.miss),
                        style: {
                            opacity: this.state.customersMissed > 0 ? 1 : 0
                        }
                    }), o.a.createElement("i", {
                        className: m()("fas fa-times", v.a.miss),
                        style: {
                            opacity: this.state.customersMissed > 1 ? 1 : 0
                        }
                    }), o.a.createElement("i", {
                        className: m()("fas fa-times", v.a.miss),
                        style: {
                            opacity: this.state.customersMissed > 2 ? 1 : 0
                        }
                    }))), "question" === this.state.phase ? o.a.createElement("div", {
                        className: v.a.questionContainer
                    }, o.a.createElement(C.a, {
                        onAnswer: this.onAnswer,
                        text: this.state.question.text,
                        answers: this.state.question.answers,
                        image: this.state.question.image
                    })) : "feedback" === this.state.phase ? o.a.createElement("div", {
                        className: v.a.feedbackContainer
                    }, o.a.createElement(x.a, {
                        incorrectTime: 3,
                        correctAnswers: this.state.question.correctAnswers,
                        correct: this.state.correct,
                        onNext: this.answerNext
                    })) : null, this.state.totalProfit >= 0 ? o.a.createElement("div", {
                        className: m()(y.a.modal, v.a.modalFadeIn)
                    }, o.a.createElement("div", {
                        className: v.a.reportContainer
                    }, o.a.createElement("div", {
                        className: v.a.reportHeader
                    }, "Day ".concat(this.state.day)), this.state.reportArray.map((function(e, t) {
                        return o.a.createElement("div", {
                            className: v.a.reportRow,
                            key: e.name,
                            style: {
                                backgroundColor: t % 2 == 0 ? "#e6e6e6" : "#f2f2f2",
                                borderTopLeftRadius: 0 === t ? 5 : 0,
                                borderTopRightRadius: 0 === t ? 5 : 0
                            }
                        }, o.a.createElement(B.a, {
                            name: e.name,
                            className: v.a.reportFood
                        }), o.a.createElement("i", {
                            className: m()("fas fa-times", v.a.reportTimes)
                        }), o.a.createElement("div", {
                            className: v.a.reportAmount
                        }, "".concat(e.amount, " sold")), o.a.createElement("div", {
                            className: v.a.reportProfit
                        }, "$".concat(Object(z.v)(e.profit))))
                    }
                    )), o.a.createElement("div", {
                        style: {
                            backgroundColor: "#c43a35",
                            width: "90%",
                            height: 3
                        }
                    }), o.a.createElement("div", {
                        className: v.a.reportRow,
                        style: {
                            backgroundColor: this.state.reportArray.length % 2 == 0 ? "#e6e6e6" : "#f2f2f2",
                            borderBottomLeftRadius: 5,
                            borderBottomRightRadius: 5
                        }
                    }, o.a.createElement("div", {
                        className: v.a.reportAmount
                    }, "Total Profit:"), o.a.createElement("div", {
                        className: v.a.reportProfit
                    }, "+ $".concat(Object(z.n)(this.state.totalProfit)))), o.a.createElement("div", {
                        className: v.a.reportShopButton,
                        role: "button",
                        tabIndex: 0,
                        onClick: this.goToShop
                    }, "To Upgrade Shop"), o.a.createElement("div", {
                        style: {
                            height: 30
                        }
                    })), o.a.createElement("div", {
                        style: {
                            height: 50
                        }
                    })) : null, this.state.askTour ? o.a.createElement(k.a, {
                        text: "Would you like a quick tutorial?",
                        buttonOne: {
                            text: "Yes",
                            click: function() {
                                return e.answerTour(!0)
                            },
                            color: "blue"
                        },
                        buttonTwo: {
                            text: "No",
                            click: function() {
                                return e.answerTour(!1)
                            },
                            color: "blue"
                        }
                    }) : this.state.goal && !this.state.showTour ? o.a.createElement(k.a, {
                        text: this.state.mode ? "Time" === this.state.mode ? "Make as much money as you can in ".concat(this.state.goal, " ").concat(1 === parseInt(this.state.goal, 10) ? "minute" : "minutes", "!") : "Be the first to make $".concat(Object(z.n)(this.state.goal), "!") : "Your goal for this homework is to keep your Café open for ".concat(this.state.goal, " ").concat(1 === this.state.goal ? "Day" : "Days", "!"),
                        buttonOne: {
                            text: "Cool",
                            click: function() {
                                return e.setState({
                                    goal: 0
                                }, (function() {
                                    return e.answerTour(!1)
                                }
                                ))
                            },
                            color: "blue"
                        }
                    }) : "pay" === this.state.ability || "tax" === this.state.ability ? o.a.createElement(k.a, {
                        text: "pay" === this.state.ability ? "".concat(this.state.attackerName, " just gave you a $").concat(Object(z.n)(this.state.cashChange), " paycheck bonus!") : "".concat(this.state.attackerName, " just forced you to pay $").concat(Object(z.n)(this.state.cashChange), " in taxes."),
                        blook: this.state.attackerBlook,
                        buttonOne: {
                            text: "OK",
                            click: function() {
                                return e.setState({
                                    ability: ""
                                })
                            },
                            color: "blue"
                        }
                    }) : null, "inspect" === this.state.ability ? o.a.createElement(R.a, {
                        name: this.state.attackerName,
                        blook: this.state.attackerBlook
                    }) : null, this.state.gameOver ? o.a.createElement("div", {
                        className: m()(y.a.modal, v.a.modalFadeIn)
                    }, o.a.createElement("div", {
                        className: v.a.gameOverContainer
                    }, o.a.createElement("div", {
                        className: v.a.gameOverText
                    }, "Game Over"), o.a.createElement("div", {
                        className: v.a.gameOverTextSmall
                    }, "You failed to serve 3 customers today"))) : null) : o.a.createElement(l.a, {
                        to: "/login"
                    })
                }
            }]) && ee(t.prototype, a),
            s && ee(t, s),
            c
        }(o.a.Component);
        fe.propTypes = {
            client: c.a.object,
            cafe: c.a.object,
            history: c.a.object.isRequired,
            endCafeDay: c.a.func.isRequired,
            endCafeLive: c.a.func.isRequired,
            setStanding: c.a.func.isRequired,
            deleteClient: c.a.func.isRequired,
            firebase: c.a.object,
            user: c.a.object
        };
        t.a = Object(H.c)(Object(u.a)(Object(n.b)((function(e) {
            return {
                id: e.hosts.id,
                client: e.clients.client,
                cafe: e.cafes.cafe
            }
        }
        ), (function(e) {
            return Object(r.b)({
                endCafeDay: j,
                endCafeLive: N,
                setStanding: I.b,
                deleteClient: E.a
            }, e)
        }
        ))(Object(L.d)(fe))))
    },
    FHWu: function(e, t, a) {
        "use strict";
        a.d(t, "c", (function() {
            return q
        }
        )),
        a.d(t, "b", (function() {
            return U
        }
        ));
        var s = a("q1tI")
          , o = a.n(s)
          , r = a("ANjH")
          , n = a("/MKj")
          , i = a("17x9")
          , c = a.n(i)
          , l = a("wIs1")
          , u = a("mLw1")
          , p = a("vDqi")
          , f = a.n(p)
          , m = a("b6Qr")
          , d = a("TSYQ")
          , h = a.n(d)
          , _ = a("dgWh")
          , y = a("epYD")
          , b = a("XuX+")
          , v = a("GIcp")
          , g = a.n(v)
          , w = a("k7NU")
          , C = a.n(w)
          , x = a("2g2H")
          , k = a("iQ+n")
          , S = a("anyA")
          , O = a("SCqF")
          , T = a("ZENw")
          , j = a("bpVs")
          , N = a("Bz36")
          , I = a("G/Pl")
          , E = a("TN+F");
        function A(e) {
            return (A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function P(e, t, a, s, o, r, n) {
            try {
                var i = e[r](n)
                  , c = i.value
            } catch (e) {
                return void a(e)
            }
            i.done ? t(c) : Promise.resolve(c).then(s, o)
        }
        function R(e) {
            return function() {
                var t = this
                  , a = arguments;
                return new Promise((function(s, o) {
                    var r = e.apply(t, a);
                    function n(e) {
                        P(r, s, o, n, i, "next", e)
                    }
                    function i(e) {
                        P(r, s, o, n, i, "throw", e)
                    }
                    n(void 0)
                }
                ))
            }
        }
        function B(e, t) {
            for (var a = 0; a < t.length; a++) {
                var s = t[a];
                s.enumerable = s.enumerable || !1,
                s.configurable = !0,
                "value"in s && (s.writable = !0),
                Object.defineProperty(e, s.key, s)
            }
        }
        function D(e, t) {
            return (D = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function z(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var a, s = M(e);
                if (t) {
                    var o = M(this).constructor;
                    a = Reflect.construct(s, arguments, o)
                } else
                    a = s.apply(this, arguments);
                return L(this, a)
            }
        }
        function L(e, t) {
            return !t || "object" !== A(t) && "function" != typeof t ? H(e) : t
        }
        function H(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function M(e) {
            return (M = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var q = {
            Toast: 1,
            Cereal: 0,
            Yogurt: 0,
            "Breakfast Combo": 0,
            "Orange Juice": 0,
            Milk: 0,
            Waffle: 0,
            Pancakes: 0,
            "French Toast": 0
        }
          , J = {
            level: 1,
            time: 1
        }
          , U = {
            inspect: 1,
            crate: 1,
            pay: 1,
            tax: 1,
            trash: 1,
            happy: 1,
            back: 1
        }
          , G = function(e) {
            return o.a.createElement("div", {
                className: C.a.stageText
            }, "Day ".concat(e.day))
        }
          , Q = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && D(e, t)
            }(i, e);
            var t, a, s, r, n = z(i);
            function i(e) {
                var t;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, i),
                (t = n.call(this, e)).state = {
                    questions: [],
                    ready: !1,
                    isSave: !1,
                    warn: !1,
                    loggedIn: !1,
                    savesPhase: !1,
                    savesArray: [],
                    loading: !1,
                    replaceIndex: 0,
                    name: "",
                    nameUsed: "",
                    numCorrect: 0,
                    numQuestions: 0,
                    day: 0,
                    foodServed: 0,
                    cafeCash: 0,
                    message: "",
                    showFinal: !1,
                    standings: [],
                    noId: !1,
                    noIdPopUp: !1,
                    noQuestions: !1
                },
                t.redirect = !1,
                t.name = "",
                t.stripe = "",
                t.working = !0,
                t.here = !0,
                t.loadGame = t.loadGame.bind(H(t)),
                t.newGame = t.newGame.bind(H(t)),
                t.endGame = t.endGame.bind(H(t)),
                t.renderStats = t.renderStats.bind(H(t)),
                t
            }
            return t = i,
            (a = [{
                key: "componentDidMount",
                value: (r = R(regeneratorRuntime.mark((function e() {
                    var t, a = this;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return this.props.deleteCafe(),
                                e.next = 3,
                                this.props.user.getData();
                            case 3:
                                (t = e.sent) ? (this.name = t.name,
                                this.stripe = t.stripe,
                                this.setState({
                                    loggedIn: !0
                                }),
                                f.a.get("/api/cafes/byuser", {
                                    params: {
                                        name: this.name
                                    }
                                }).then((function(e) {
                                    a.here && a.setState({
                                        isSave: e.data.success && !(a.props.client && a.props.client.hwId && a.props.client.questions),
                                        savesArray: e.data.success ? e.data.savesArray : [null, null, null]
                                    }, (function() {
                                        a.working = !1
                                    }
                                    ))
                                }
                                )).catch((function(e) {
                                    console.error(e)
                                }
                                ))) : this.setState({
                                    notLoggedIn: !0
                                }),
                                this.props.client && this.props.client.hwId && this.props.client.questions ? (this.working = !1,
                                this.setState({
                                    questions: this.props.client.questions || [],
                                    ready: !0
                                })) : this.props.id ? f.a.get("/api/games", {
                                    params: {
                                        gameId: this.props.id
                                    }
                                }).then((function(e) {
                                    a.here && a.setState({
                                        questions: e.data.questions.map((function(e) {
                                            return {
                                                text: e.question,
                                                answers: e.answers,
                                                correctAnswers: e.correctAnswers,
                                                number: e.number,
                                                random: e.random,
                                                timeLimit: e.timeLimit,
                                                image: e.image ? e.image.url : null
                                            }
                                        }
                                        )),
                                        ready: !0
                                    })
                                }
                                )).catch((function(e) {
                                    console.error(e)
                                }
                                )) : this.setState({
                                    noId: !0,
                                    ready: !0
                                });
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this)
                }
                ))),
                function() {
                    return r.apply(this, arguments)
                }
                )
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.here = !1
                }
            }, {
                key: "loadGame",
                value: function(e) {
                    if (this.state.ready && !this.working) {
                        this.working = !0;
                        var t = this.state.savesArray[e]
                          , a = []
                          , s = !1
                          , o = this;
                        !function() {
                            r.apply(this, arguments)
                        }()
                    }
                    function r() {
                        return (r = R(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (!t.setId) {
                                            e.next = 9;
                                            break
                                        }
                                        if (!o.state.noId) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.next = 4,
                                        new Promise((function(e) {
                                            f.a.get("/api/games", {
                                                params: {
                                                    gameId: t.setId
                                                }
                                            }).then((function(t) {
                                                t.data ? a = t.data.questions.map((function(e) {
                                                    return {
                                                        text: e.question,
                                                        answers: e.answers,
                                                        correctAnswers: e.correctAnswers,
                                                        number: e.number,
                                                        random: e.random,
                                                        timeLimit: e.timeLimit,
                                                        image: e.image ? e.image.url : null
                                                    }
                                                }
                                                )) : s = !0,
                                                e()
                                            }
                                            )).catch((function(e) {
                                                console.error(e)
                                            }
                                            ))
                                        }
                                        ));
                                    case 4:
                                        e.next = 7;
                                        break;
                                    case 6:
                                        a = o.state.questions;
                                    case 7:
                                        e.next = 11;
                                        break;
                                    case 9:
                                        return e.next = 11,
                                        new Promise((function(e) {
                                            f.a.get("/api/homeworks/byid", {
                                                params: {
                                                    id: t.hwId
                                                }
                                            }).then((function(t) {
                                                t.data ? a = t.data.questions : o.state.noId ? s = !0 : a = o.state.questions,
                                                e()
                                            }
                                            )).catch((function(e) {
                                                console.error(e)
                                            }
                                            ))
                                        }
                                        ));
                                    case 11:
                                        if (!s) {
                                            e.next = 15;
                                            break
                                        }
                                        return o.setState({
                                            noIdPopUp: !0,
                                            noQuestions: !0
                                        }),
                                        o.working = !1,
                                        e.abrupt("return");
                                    case 15:
                                        t.hwName && (o.props.addClientName(t.hwName),
                                        o.props.addHwClient(t.hwId, "Cafe", 0, t.hwPlus)),
                                        o.props.setupCafe(t._id, t.setId, t.resultId, t.hwId, t.hwGoal, a, t.cafeCash, t.day, t.foods, t.items, t.corrects, t.incorrects, t.foodServed, t.stage, t.foodStocks),
                                        "cafe" === t.stage ? o.props.history.push("/cafe") : "shop" === t.stage ? o.props.history.push("/cafe/shop") : o.props.history.push("/cafe/final");
                                    case 18:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )))).apply(this, arguments)
                    }
                }
            }, {
                key: "newGame",
                value: function(e) {
                    if (this.state.ready && !this.working) {
                        this.working = !0;
                        var t = this;
                        !function() {
                            a.apply(this, arguments)
                        }()
                    }
                    function a() {
                        return (a = R(regeneratorRuntime.mark((function a() {
                            var s, o;
                            return regeneratorRuntime.wrap((function(a) {
                                for (; ; )
                                    switch (a.prev = a.next) {
                                    case 0:
                                        if (s = "",
                                        !t.props.client || !t.props.client.hwId) {
                                            a.next = 4;
                                            break
                                        }
                                        return a.next = 4,
                                        new Promise((function(e, a) {
                                            f.a.post("/api/results", {
                                                hwId: t.props.client.hwId,
                                                name: t.props.client.name,
                                                data: {
                                                    corrects: {},
                                                    incorrects: {},
                                                    day: 1,
                                                    alive: !0
                                                }
                                            }).then((function(t) {
                                                s = t.data._id,
                                                e()
                                            }
                                            )).catch((function(e) {
                                                console.error(e),
                                                a()
                                            }
                                            ))
                                        }
                                        ));
                                    case 4:
                                        if (o = {},
                                        !t.name) {
                                            a.next = 9;
                                            break
                                        }
                                        return a.next = 8,
                                        new Promise((function(a, o) {
                                            f.a.defaults.headers.common.Authorization = "undefined" != typeof window ? localStorage.getItem("token") : null,
                                            f.a.post("/api/cafes", {
                                                setId: t.props.id,
                                                name: t.name,
                                                hwId: t.props.client && t.props.client.hwId ? t.props.client.hwId : null,
                                                hwName: t.props.client && t.props.client.name ? t.props.client.name : null,
                                                hwPlus: !(!t.props.client || !t.props.client.plus) && t.props.client.plus,
                                                hwGoal: !(!t.props.client || !t.props.client.amount) && t.props.client.amount,
                                                saveIndex: e,
                                                foods: JSON.parse(JSON.stringify(q)),
                                                items: JSON.parse(JSON.stringify(J)),
                                                resultId: s
                                            }).then((function(e) {
                                                localStorage.setItem("token", e.data.token),
                                                a(e.data)
                                            }
                                            )).catch((function(e) {
                                                console.error(e),
                                                o()
                                            }
                                            ))
                                        }
                                        ));
                                    case 8:
                                        o = a.sent;
                                    case 9:
                                        t.props.setupCafe(o.newSaveId, t.props.id, s, t.props.client && t.props.client.hwId ? t.props.client.hwId : null, t.props.client && t.props.client.amount ? t.props.client.amount : null, t.state.questions, 0, 1, JSON.parse(JSON.stringify(q)), JSON.parse(JSON.stringify(J)), {}, {}, 0, "cafe", {}),
                                        o.oldSave && o.oldSave.stage ? t.endGame(o.oldSave) : t.props.history.push("/cafe");
                                    case 11:
                                    case "end":
                                        return a.stop()
                                    }
                            }
                            ), a)
                        }
                        )))).apply(this, arguments)
                    }
                }
            }, {
                key: "endGame",
                value: function(e) {
                    var t = this;
                    f.a.put("/api/users/plan", {
                        name: this.name,
                        stripeId: this.stripe
                    }).then((function(e) {
                        t.here && t.setState({
                            showFinal: !0,
                            plus: "Starter" !== e.data.plan
                        })
                    }
                    )).catch((function(e) {
                        console.error(e)
                    }
                    ));
                    var a = e.hwName || "You"
                      , s = 0
                      , o = 0;
                    Object.values(e.corrects).forEach((function(e) {
                        s += e,
                        o += e
                    }
                    )),
                    Object.values(e.incorrects).forEach((function(e) {
                        o += e
                    }
                    ));
                    var r = 6 - e.items.level
                      , n = Object(E.o)(Object.keys(I.a));
                    f.a.defaults.headers.common.Authorization = "undefined" != typeof window ? localStorage.getItem("token") : null,
                    f.a.put("/api/users/cafestats/solo", {
                        name: this.name,
                        place: r,
                        day: e.day,
                        cafeCash: e.cafeCash,
                        foodServed: e.foodServed,
                        blookUsed: n,
                        nameUsed: a,
                        correctAnswers: s
                    }).catch((function(e) {
                        console.error(e)
                    }
                    )),
                    this.setState({
                        warn: !1,
                        name: this.name,
                        nameUsed: a,
                        numCorrect: s,
                        numQuestions: o,
                        day: e.day,
                        cafeCash: e.cafeCash,
                        foodServed: e.foodServed,
                        message: Object(j.a)((r - 1) / 5),
                        ready: !0,
                        standings: [{
                            name: a,
                            blook: n,
                            place: r,
                            day: e.day
                        }]
                    })
                }
            }, {
                key: "renderStats",
                value: function() {
                    return o.a.createElement("div", {
                        style: {
                            width: "100%"
                        }
                    }, o.a.createElement(N.a, {
                        title: "Food Served",
                        stat: Object(E.n)(this.state.foodServed)
                    }), o.a.createElement(N.a, {
                        title: "Final Cash",
                        stat: Object(E.n)(this.state.cafeCash)
                    }))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this;
                    return this.props.client && this.props.client.hwId ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0),
                    this.redirect || this.state.ready && (!this.state.questions || 0 === this.state.questions.length) && !this.state.noId ? o.a.createElement(u.a, {
                        to: "/login"
                    }) : o.a.createElement("div", {
                        className: h()(m.isMobile ? g.a.mBody : g.a.body, C.a.background)
                    }, o.a.createElement(k.a, {
                        title: "Load Café | Blooket",
                        desc: "Start a new game or load a saved game of Blooket's Café."
                    }), o.a.createElement(x.a, {
                        noRight: !0
                    }), this.state.savesPhase ? o.a.createElement("div", {
                        className: g.a.regularBody
                    }, o.a.createElement("div", {
                        className: C.a.backButton,
                        role: "button",
                        tabIndex: 0,
                        onClick: function() {
                            return e.setState({
                                savesPhase: !1,
                                loading: !1
                            })
                        }
                    }, "Back"), o.a.createElement("div", {
                        className: C.a.saveHeaderHolder
                    }, o.a.createElement("div", {
                        className: C.a.savesHeader
                    }, this.state.loading ? "Choose a Save" : "Choose a Save Slot")), o.a.createElement("div", {
                        className: C.a.savesHolder
                    }, this.state.savesArray.map((function(t, a) {
                        return t ? o.a.createElement("div", {
                            className: C.a.saveContainer,
                            key: t._id
                        }, o.a.createElement("div", {
                            className: C.a.saveTitle
                        }, "Day ".concat(t.day)), o.a.createElement("div", {
                            className: C.a.saveSubTitle
                        }, "Café Level ".concat(t.items.level)), o.a.createElement("div", {
                            className: C.a.saveRow
                        }, "$".concat(Object(E.n)(t.cafeCash)), o.a.createElement("i", {
                            className: h()(C.a.saveIcon, "fas fa-coins")
                        })), o.a.createElement("div", {
                            className: C.a.saveRow
                        }, "shop" === t.stage ? "Shop" : "Café Day", o.a.createElement("i", {
                            className: h()(C.a.saveIcon, "fas fa-store")
                        })), o.a.createElement("div", {
                            className: C.a.saveRow
                        }, t.hwName || "Not Homework", o.a.createElement("i", {
                            className: h()(C.a.saveIcon, "fas fa-file-alt")
                        })), o.a.createElement("div", {
                            className: C.a.loadButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: e.state.loading ? function() {
                                return e.loadGame(a)
                            }
                            : e.state.noId ? function() {
                                return e.setState({
                                    noIdPopUp: !0
                                })
                            }
                            : function() {
                                return e.setState({
                                    warn: !0,
                                    replaceIndex: a
                                })
                            }
                        }, e.state.loading ? "Load Game" : "Replace Game")) : o.a.createElement("div", {
                            className: C.a.saveContainer,
                            key: a
                        }, o.a.createElement("div", {
                            className: C.a.emptySave
                        }, "Empty"), e.state.loading ? null : o.a.createElement("div", {
                            className: C.a.loadButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: e.state.noId ? function() {
                                return e.setState({
                                    noIdPopUp: !0
                                })
                            }
                            : function() {
                                return e.newGame(a)
                            }
                        }, "New Game"))
                    }
                    )))) : o.a.createElement("div", {
                        className: g.a.regularBody
                    }, o.a.createElement("div", {
                        className: C.a.contentHolder
                    }, o.a.createElement("div", {
                        className: C.a.header
                    }, "Café"), o.a.createElement("div", {
                        className: C.a.buttonContainer
                    }, this.state.isSave ? o.a.createElement("div", {
                        className: C.a.button,
                        role: "button",
                        tabIndex: 0,
                        onClick: function() {
                            return e.setState({
                                savesPhase: !0,
                                loading: !0
                            })
                        }
                    }, "Load Game") : null, o.a.createElement("div", {
                        className: C.a.button,
                        role: "button",
                        tabIndex: 0,
                        onClick: this.state.loggedIn ? function() {
                            return e.setState({
                                savesPhase: !0,
                                loading: !1
                            })
                        }
                        : this.newGame
                    }, "New Game"))), this.state.loggedIn ? o.a.createElement("div", {
                        className: C.a.loginText
                    }, "Your progress will automatically be saved") : o.a.createElement("div", {
                        className: C.a.loginText
                    }, o.a.createElement("a", {
                        href: "https://www.blooket.com/login",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: {
                            color: "#fff"
                        }
                    }, "Login"), " to save your progress")), this.state.warn ? o.a.createElement(O.a, {
                        text: "Starting a new game will delete this save! Don't worry though, we'll give you the tokens for your old save right now!",
                        buttonOne: {
                            text: "Continue",
                            click: function() {
                                return e.newGame(e.state.replaceIndex)
                            },
                            color: "blue"
                        },
                        buttonTwo: {
                            text: "Go Back",
                            click: function() {
                                return e.setState({
                                    warn: !1
                                })
                            },
                            color: "blue"
                        }
                    }) : this.state.noIdPopUp ? o.a.createElement(O.a, {
                        text: this.state.noQuestions ? "This save doesn't have an associated question set. Go find a set, click 'Solo', and try again!" : "You need a question set to create a new game!",
                        buttonOne: {
                            text: "Find A Set",
                            click: function() {
                                return e.props.history.push("/discover")
                            },
                            color: "blue"
                        },
                        buttonTwo: {
                            text: "Go Back",
                            click: function() {
                                return e.setState({
                                    noIdPopUp: !1,
                                    noQuestions: !1
                                })
                            },
                            color: "blue"
                        }
                    }) : null, this.state.showFinal ? o.a.createElement("div", {
                        className: g.a.modal
                    }, o.a.createElement(T.a, {
                        standings: this.state.standings,
                        name: this.state.nameUsed,
                        numCorrect: this.state.numCorrect,
                        numQuestions: this.state.numQuestions,
                        username: this.state.name,
                        plus: this.state.plus,
                        myStat: "Stayed Open for ".concat(this.state.day, " ").concat(1 === this.state.day ? "Day" : "Days"),
                        saveStats: this.saveStats,
                        renderStandingStat: G,
                        renderStats: this.renderStats,
                        customMessage: this.state.message,
                        tokenMultiplier: .3,
                        buttonFunc: function() {
                            return e.props.history.push("/cafe")
                        },
                        noWait: !0
                    })) : null)
                }
            }]) && B(t.prototype, a),
            s && B(t, s),
            i
        }(o.a.Component);
        Q.propTypes = {
            client: c.a.object,
            history: c.a.object.isRequired,
            id: c.a.string,
            deleteCafe: c.a.func.isRequired,
            user: c.a.object
        };
        t.a = Object(S.c)(Object(l.a)(Object(n.b)((function(e) {
            return {
                id: e.hosts.id,
                client: e.clients.client
            }
        }
        ), (function(e) {
            return Object(r.b)({
                setupCafe: _.b,
                deleteCafe: _.a,
                addClientName: b.a,
                addHwClient: y.b
            }, e)
        }
        ))(Q)))
    },
    FfIY: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return s
        }
        )),
        a.d(t, "b", (function() {
            return o
        }
        ));
        var s = "DELETE_CAFE"
          , o = "SETUP_CAFE"
    },
    Fs1x: function(e, t, a) {
        "use strict";
        var s = a("q1tI")
          , o = a.n(s)
          , r = a("ANjH")
          , n = a("/MKj")
          , i = a("17x9")
          , c = a.n(i)
          , l = a("wIs1")
          , u = a("mLw1")
          , p = a("b6Qr")
          , f = a("TSYQ")
          , m = a.n(f)
          , d = a("vDqi")
          , h = a.n(d)
          , _ = a("GIcp")
          , y = a.n(_)
          , b = a("8N3m")
          , v = a.n(b)
          , g = a("2g2H")
          , w = a("iQ+n")
          , C = a("anyA")
          , x = a("ceum");
        function k(e, t, a, s, o, r, n) {
            return {
                type: x.a,
                foods: e,
                items: t,
                abilities: a,
                cafeCash: s,
                stage: o,
                foodStocks: r,
                isHappy: n
            }
        }
        var S = a("bMSx")
          , O = a("pMbe")
          , T = a("3RWh")
          , j = a("FHWu")
          , N = a("IAGC")
          , I = a("avlG")
          , E = a("SCqF")
          , A = a("DoX5")
          , P = a("vPiy")
          , R = a("7R+V")
          , B = a("TN+F")
          , D = a("SdQT");
        function z(e) {
            return (z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function L(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                    return;
                var a = []
                  , s = !0
                  , o = !1
                  , r = void 0;
                try {
                    for (var n, i = e[Symbol.iterator](); !(s = (n = i.next()).done) && (a.push(n.value),
                    !t || a.length !== t); s = !0)
                        ;
                } catch (e) {
                    o = !0,
                    r = e
                } finally {
                    try {
                        s || null == i.return || i.return()
                    } finally {
                        if (o)
                            throw r
                    }
                }
                return a
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return H(e, t);
                var a = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === a && e.constructor && (a = e.constructor.name);
                if ("Map" === a || "Set" === a)
                    return Array.from(e);
                if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
                    return H(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function H(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var a = 0, s = new Array(t); a < t; a++)
                s[a] = e[a];
            return s
        }
        function M(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                t && (s = s.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, s)
            }
            return a
        }
        function q(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? M(Object(a), !0).forEach((function(t) {
                    J(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : M(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        function J(e, t, a) {
            return t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a,
            e
        }
        function U(e, t, a, s, o, r, n) {
            try {
                var i = e[r](n)
                  , c = i.value
            } catch (e) {
                return void a(e)
            }
            i.done ? t(c) : Promise.resolve(c).then(s, o)
        }
        function G(e, t) {
            for (var a = 0; a < t.length; a++) {
                var s = t[a];
                s.enumerable = s.enumerable || !1,
                s.configurable = !0,
                "value"in s && (s.writable = !0),
                Object.defineProperty(e, s.key, s)
            }
        }
        function Q(e, t) {
            return (Q = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function F(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var a, s = Y(e);
                if (t) {
                    var o = Y(this).constructor;
                    a = Reflect.construct(s, arguments, o)
                } else
                    a = s.apply(this, arguments);
                return V(this, a)
            }
        }
        function V(e, t) {
            return !t || "object" !== z(t) && "function" != typeof t ? W(e) : t
        }
        function W(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Y(e) {
            return (Y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var K = ["far fa-hourglass", "fas fa-hourglass-start", "fas fa-hourglass-half", "fas fa-hourglass-end", "fas fa-hourglass"]
          , X = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Q(e, t)
            }(c, e);
            var t, a, s, r, n, i = F(c);
            function c(e) {
                var t;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, c),
                (t = i.call(this, e)).state = {
                    cafeCash: e.cafe ? e.cafe.cafeCash : 0,
                    items: {},
                    abilities: {},
                    ability: "",
                    showPlayers: !1,
                    players: [],
                    ready: !1,
                    goalCompleted: !1,
                    showTour: !1,
                    cashChange: 0,
                    attackerName: "",
                    attackerBlook: "",
                    attackerAbility: ""
                },
                t.dbRefStage = {},
                t.dbRefMe = {},
                t.foodStocks = {},
                t.isHappy = !1,
                t.buyItem = t.buyItem.bind(W(t)),
                t.buyAbility = t.buyAbility.bind(W(t)),
                t.useAbility = t.useAbility.bind(W(t)),
                t.nextDay = t.nextDay.bind(W(t)),
                t.endNow = t.endNow.bind(W(t)),
                t
            }
            return t = c,
            (a = [{
                key: "componentDidMount",
                value: (r = regeneratorRuntime.mark((function e() {
                    var t = this;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                this.props.user.getData();
                            case 2:
                                if (e.sent || this.setState({
                                    notLoggedIn: !0
                                }),
                                this.props.cafe && "shop" === this.props.cafe.stage && this.props.cafe.questions && this.props.cafe.questions[0]) {
                                    e.next = 7;
                                    break
                                }
                                return this.setState({
                                    redirect: !0
                                }),
                                e.abrupt("return");
                            case 7:
                                if (Object(B.c)(),
                                this.foodStocks = q({}, this.props.cafe.foodStocks),
                                this.setState({
                                    items: q(q({}, this.props.cafe.foods), this.props.cafe.items),
                                    abilities: this.props.cafe.abilities ? q({}, this.props.cafe.abilities) : {},
                                    ready: !0,
                                    goalCompleted: this.props.cafe.hwGoal && this.props.cafe.day - 1 === parseInt(this.props.cafe.hwGoal, 10),
                                    showTour: 1 === this.props.cafe.day
                                }),
                                this.props.cafe && this.props.cafe.resultId && h.a.put("/api/results", {
                                    id: this.props.cafe.resultId,
                                    data: {
                                        corrects: this.props.cafe.corrects,
                                        incorrects: this.props.cafe.incorrects,
                                        day: this.props.cafe.day,
                                        alive: !0
                                    }
                                }).catch((function(e) {
                                    return console.error(e)
                                }
                                )),
                                !(this.props.client && this.props.client.hostId && this.props.cafe.mode)) {
                                    e.next = 20;
                                    break
                                }
                                return e.next = 14,
                                this.props.firebase.getDatabaseRef(this.props.client.hostId, "stg");
                            case 14:
                                return this.dbRefStage = e.sent,
                                this.dbRefStage.on("value", (function(e) {
                                    switch (e.val()) {
                                    case "fin":
                                        t.props.firebase.getDatabaseVal(t.props.client.hostId, "st", (function(e) {
                                            var a = e ? e.map((function(e) {
                                                return {
                                                    name: e.n,
                                                    blook: e.b,
                                                    cash: e.c,
                                                    place: e.p
                                                }
                                            }
                                            )) : []
                                              , s = q({}, t.state.items)
                                              , o = {
                                                level: s.level,
                                                time: s.time
                                            };
                                            delete s.level,
                                            delete s.time,
                                            t.props.leaveCafeShop(s, o, t.state.abilities, t.state.cafeCash, "final", t.foodStocks, t.isHappy),
                                            t.props.setStanding(a),
                                            t.props.history.push("/cafe/final")
                                        }
                                        ));
                                        break;
                                    case null:
                                        t.props.firebase.getDatabaseVal(t.props.client.hostId, "stg", (function(e) {
                                            e || (t.props.deleteClient(),
                                            t.props.history.push("/play"))
                                        }
                                        ))
                                    }
                                }
                                )),
                                e.next = 18,
                                this.props.firebase.getDatabaseRef(this.props.client.hostId, "c/".concat(this.props.client.name, "/at"));
                            case 18:
                                this.dbRefMe = e.sent,
                                this.dbRefMe.on("value", (function(e) {
                                    if (e.val() && !t.state.attackerAbility) {
                                        var a = e.val().split(":")
                                          , s = a[2]
                                          , o = t.state.cafeCash
                                          , r = 0;
                                        "pay" === s ? r = Math.round(.25 * o) : "tax" === s && (r = Math.round(-.25 * o)),
                                        o += r,
                                        Object.entries(t.foodStocks).forEach((function(e) {
                                            var a = L(e, 2)
                                              , s = a[0]
                                              , o = a[1];
                                            t.foodStocks[s] = Math.max(0, o - 3)
                                        }
                                        )),
                                        t.setState({
                                            cashChange: Math.abs(r),
                                            attackerName: a[0],
                                            attackerBlook: a[1],
                                            attackerAbility: s,
                                            cafeCash: o
                                        }, (function() {
                                            "inspect" === s && (t.abilityTimeout = setTimeout((function() {
                                                t.setState({
                                                    attackerAbility: ""
                                                })
                                            }
                                            ), 12e3))
                                        }
                                        )),
                                        t.props.firebase.setVal({
                                            id: t.props.client.hostId,
                                            path: "c/".concat(t.props.client.name),
                                            val: {
                                                b: t.props.client.blook,
                                                ca: o
                                            }
                                        })
                                    }
                                }
                                ));
                            case 20:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this)
                }
                )),
                n = function() {
                    var e = this
                      , t = arguments;
                    return new Promise((function(a, s) {
                        var o = r.apply(e, t);
                        function n(e) {
                            U(o, a, s, n, i, "next", e)
                        }
                        function i(e) {
                            U(o, a, s, n, i, "throw", e)
                        }
                        n(void 0)
                    }
                    ))
                }
                ,
                function() {
                    return n.apply(this, arguments)
                }
                )
            }, {
                key: "componentWillUnmount",
                value: function() {
                    Object(B.t)(),
                    clearTimeout(this.abilityTimeout),
                    Object.keys(this.dbRefStage).length && this.dbRefStage.off("value"),
                    Object.keys(this.dbRefMe).length && this.dbRefMe.off("value")
                }
            }, {
                key: "buyItem",
                value: function(e) {
                    var t = this;
                    if (!this.buying) {
                        this.buying = !0;
                        var a = T.b[e]
                          , s = this.state.items[e]
                          , o = a.prices[s];
                        if (o > this.state.cafeCash || 5 === s)
                            this.buying = !1;
                        else {
                            var r = JSON.parse(JSON.stringify(this.state.items));
                            r[e] += 1;
                            var n = this.state.cafeCash - o;
                            this.props.client && this.props.client.hostId && this.props.cafe.mode && this.props.firebase.setVal({
                                id: this.props.client.hostId,
                                path: "c/".concat(this.props.client.name),
                                val: {
                                    b: this.props.client.blook,
                                    ca: n,
                                    up: "food" === T.b[e].type ? "".concat(e, ":").concat(r[e]) : null
                                }
                            }),
                            this.setState({
                                items: r,
                                cafeCash: this.state.cafeCash - o
                            }, (function() {
                                t.buying = !1
                            }
                            ))
                        }
                    }
                }
            }, {
                key: "buyAbility",
                value: function(e) {
                    var t = this;
                    if (!this.buying) {
                        this.buying = !0;
                        var a = T.a[e]
                          , s = this.state.cafeCash
                          , o = Math.round(a.price + s * a.percent);
                        if (o > s || 0 === this.state.abilities[e])
                            this.buying = !1;
                        else {
                            var r = JSON.parse(JSON.stringify(this.state.abilities));
                            r[e] = 0,
                            s -= o,
                            this.setState({
                                abilities: r,
                                ability: e,
                                cafeCash: s
                            }, (function() {
                                t.buying = !1,
                                ["pay", "trash", "tax", "inspect"].includes(t.state.ability) ? t.props.firebase.getDatabaseVal(t.props.client.hostId, "c", (function(e) {
                                    var a = Object.entries(e).map((function(e) {
                                        var t = L(e, 2)
                                          , a = t[0]
                                          , s = t[1];
                                        return {
                                            name: a,
                                            blook: s.b,
                                            cash: s.ca || 0
                                        }
                                    }
                                    )).filter((function(e) {
                                        return e.name !== t.props.client.name
                                    }
                                    ));
                                    a.sort((function(e, t) {
                                        return t.cash - e.cash
                                    }
                                    )),
                                    t.setState({
                                        players: a,
                                        showPlayers: !0
                                    })
                                }
                                )) : t.useAbility()
                            }
                            ))
                        }
                    }
                }
            }, {
                key: "useAbility",
                value: function(e) {
                    var t = this
                      , a = q({}, this.state.abilities);
                    e ? this.props.firebase.setVal({
                        id: this.props.client.hostId,
                        path: "c/".concat(this.props.client.name, "/tat"),
                        val: "".concat(e.name, ":").concat(this.state.ability)
                    }) : "back" === this.state.ability ? (a = q({}, j.b)).back = 0 : "crate" === this.state.ability ? Object.entries(this.state.items).forEach((function(e) {
                        var a = L(e, 2)
                          , s = a[0];
                        a[1] > 0 && !["time", "level"].includes(s) && (t.foodStocks[s] ? t.foodStocks[s] = Math.min(t.foodStocks[s] + 7, 99) : t.foodStocks[s] = 7)
                    }
                    )) : "happy" === this.state.ability && (this.isHappy = !0),
                    this.setState({
                        abilities: a,
                        showPlayers: !1
                    })
                }
            }, {
                key: "nextDay",
                value: function() {
                    var e = this
                      , t = q({}, this.state.items)
                      , a = {
                        level: t.level,
                        time: t.time
                    };
                    delete t.level,
                    delete t.time,
                    this.props.cafe.cafeId ? (h.a.defaults.headers.common.Authorization = "undefined" != typeof window ? localStorage.getItem("token") : null,
                    h.a.put("/api/cafes/save", {
                        id: this.props.cafe.cafeId,
                        foods: t,
                        items: a,
                        cafeCash: this.state.cafeCash,
                        stage: "cafe"
                    }).then((function() {
                        e.props.leaveCafeShop(t, a, e.state.abilities, e.state.cafeCash, "cafe", e.foodStocks, e.isHappy),
                        e.props.history.push("/cafe")
                    }
                    )).catch((function(t) {
                        console.error(t),
                        e.props.history.push("/login")
                    }
                    ))) : (this.props.leaveCafeShop(t, a, this.state.abilities, this.state.cafeCash, "cafe", this.foodStocks, this.isHappy),
                    this.props.history.push("/cafe"))
                }
            }, {
                key: "endNow",
                value: function() {
                    this.props.leaveCafeShop(this.props.cafe.foods, this.props.cafe.items, this.props.cafe.abilities, this.props.cafe.cafeCash, "final", this.foodStocks, this.isHappy),
                    this.props.history.push("/cafe/final")
                }
            }, {
                key: "render",
                value: function() {
                    var e = this;
                    return this.props.cafe && (this.props.cafe.resultId || this.props.cafe.mode) ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0),
                    this.redirect || !this.props.cafe || this.state.redirect ? o.a.createElement(u.a, {
                        to: "/login"
                    }) : o.a.createElement("div", {
                        className: p.isMobile ? y.a.mBody : y.a.body,
                        id: "body"
                    }, o.a.createElement(w.a, {
                        title: "Play Café | Blooket",
                        desc: "Serve delicious food to Blooks by answering questions, and make money to upgrade your Café."
                    }), o.a.createElement(g.a, {
                        cash: this.state.cafeCash
                    }), this.state.ready ? o.a.createElement("div", {
                        className: y.a.regularBody,
                        id: "regularBody"
                    }, this.state.showTour ? o.a.createElement(P.a, {
                        steps: R.a,
                        onExit: function() {},
                        functions: [function() {
                            return e.buyItem("Cereal")
                        }
                        , this.nextDay]
                    }) : null, o.a.createElement("div", {
                        className: v.a.header
                    }, "Upgrade Shop"), o.a.createElement("div", {
                        className: v.a.nextDayButton,
                        role: "button",
                        tabIndex: 0,
                        onClick: this.nextDay,
                        id: "shopButton"
                    }, this.props.cafe.mode ? "Back" : "Next Day"), o.a.createElement("div", {
                        className: v.a.shopContainer
                    }, Object.entries(T.b).map((function(t, a) {
                        var s = L(t, 2)
                          , r = s[0]
                          , n = s[1];
                        return "time" === r && e.state.items[r] || "time" !== r ? o.a.createElement("div", {
                            className: m()(v.a.itemContainer, J({}, v.a.itemContainerHover, e.state.items[r] < 5 && e.state.cafeCash >= n.prices[e.state.items[r]])),
                            key: r,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.buyItem(r)
                            },
                            style: {
                                cursor: e.state.items[r] < 5 && e.state.cafeCash >= n.prices[e.state.items[r]] ? "pointer" : "not-allowed"
                            },
                            id: "upgrade".concat(a + 1)
                        }, "food" === n.type ? o.a.createElement("div", {
                            className: m()(v.a.plate, J({}, v.a.plate4, 4 === e.state.items[r]), J({}, v.a.plate5, 5 === e.state.items[r]))
                        }, e.state.items[r] > 1 ? o.a.createElement("div", {
                            className: v.a["plateLevel".concat(e.state.items[r])]
                        }) : null, 0 === e.state.items[r] ? o.a.createElement("div", {
                            className: v.a.lockedPlate
                        }, o.a.createElement("i", {
                            className: "fas fa-lock"
                        })) : o.a.createElement(A.a, {
                            name: r,
                            className: v.a.food
                        })) : "level" === r ? o.a.createElement("div", {
                            className: v.a.backgroundContainer
                        }, o.a.createElement(N.a, {
                            level: e.state.items[r]
                        })) : "time" === r ? o.a.createElement("div", {
                            className: v.a.iconContainer
                        }, o.a.createElement("i", {
                            className: m()(K[e.state.items[r] - 1], v.a.upgradeIcon)
                        })) : null, o.a.createElement("div", {
                            className: v.a.rightContainer
                        }, o.a.createElement("div", {
                            className: v.a.itemName
                        }, n.name || r), o.a.createElement("div", {
                            className: v.a.itemLevel
                        }, 0 === e.state.items[r] ? "Locked" : "Level ".concat(e.state.items[r])), o.a.createElement("div", {
                            className: v.a.itemDesc
                        }, "time" === r ? "".concat(T.b[r].times[e.state.items[r] - 1], "s").concat(5 !== e.state.items[r] ? " -> ".concat(T.b[r].times[e.state.items[r]], "s") : "", " Bonus Time") : "level" === r ? "x".concat(T.b[r].multipliers[e.state.items[r] - 1]).concat(5 !== e.state.items[r] ? " -> x".concat(T.b[r].multipliers[e.state.items[r]]) : "", " Profits") : e.state.items[r] > 0 ? "$".concat(Object(B.n)(Math.round(T.b[r].profits[e.state.items[r]] * T.b.level.multipliers[e.state.items.level - 1] * (e.props.cafe.mode ? 3.25 : 1.75)))).concat(5 !== e.state.items[r] ? " -> $".concat(Object(B.n)(Math.round(T.b[r].profits[e.state.items[r] + 1] * T.b.level.multipliers[e.state.items.level - 1] * (e.props.cafe.mode ? 3.25 : 1.75)))) : "", " Per Sale") : null, o.a.createElement("br", null), 5 === e.state.items[r] ? "Max Level" : ""), 5 !== e.state.items[r] ? o.a.createElement("div", {
                            className: v.a.itemUpgrade,
                            style: {
                                color: e.state.cafeCash >= n.prices[e.state.items[r]] ? "#4bc22e" : "#c43a35"
                            }
                        }, "$".concat(Object(B.n)(n.prices[e.state.items[r]]))) : null)) : null
                    }
                    ))), this.props.cafe.mode && !this.state.showTour ? o.a.createElement("div", {
                        className: v.a.abilityHeader
                    }, "Abilities") : null, this.props.cafe.mode && !this.state.showTour ? o.a.createElement("div", {
                        className: v.a.shopContainer
                    }, Object.entries(T.a).map((function(t, a) {
                        var s = L(t, 2)
                          , r = s[0]
                          , n = s[1];
                        return o.a.createElement("div", {
                            className: m()(v.a.itemContainer, J({}, v.a.itemContainerHover, 1 === e.state.abilities[r] && e.state.cafeCash >= Math.round(n.price + e.state.cafeCash * n.percent))),
                            key: r,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.buyAbility(r)
                            },
                            style: {
                                cursor: 1 === e.state.abilities[r] && e.state.cafeCash >= Math.round(n.price + e.state.cafeCash * n.percent) ? "pointer" : "not-allowed"
                            },
                            id: "upgrade".concat(a + 1)
                        }, o.a.createElement("div", {
                            className: v.a.iconContainer,
                            style: {
                                backgroundColor: n.color
                            }
                        }, o.a.createElement("i", {
                            className: m()(n.icon, v.a.upgradeIcon)
                        })), o.a.createElement("div", {
                            className: v.a.rightContainer
                        }, o.a.createElement("div", {
                            className: v.a.itemName
                        }, n.name), o.a.createElement("div", {
                            className: v.a.itemLevel
                        }, n.desc), o.a.createElement("div", {
                            className: v.a.itemUpgrade,
                            style: {
                                color: 0 === e.state.abilities[r] ? "#3a3a3a" : e.state.cafeCash >= Math.round(n.price + e.state.cafeCash * n.percent) ? "#4bc22e" : "#c43a35"
                            }
                        }, 0 === e.state.abilities[r] ? "Used" : "$".concat(Object(B.n)(Math.round(n.price + e.state.cafeCash * n.percent))))))
                    }
                    ))) : null, this.state.showPlayers ? this.state.players.length > 0 ? o.a.createElement("div", {
                        className: v.a.playerWrapper
                    }, o.a.createElement("div", {
                        className: v.a.playerHeader
                    }, "Choose a Player"), o.a.createElement("div", {
                        className: v.a.playerHolder
                    }, this.state.players.map((function(t) {
                        return o.a.createElement("div", {
                            className: v.a.playerContainer,
                            key: t.name,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.useAbility(t)
                            }
                        }, o.a.createElement(A.a, {
                            name: t.blook,
                            className: v.a.playerBlook
                        }), o.a.createElement("div", {
                            className: v.a.playerColumn
                        }, o.a.createElement("div", {
                            className: v.a.playerText
                        }, t.name), o.a.createElement("div", {
                            className: v.a.playerCash
                        }, "$".concat(Object(B.n)(t.cash)))))
                    }
                    ))), o.a.createElement("div", {
                        style: {
                            height: 30
                        }
                    })) : o.a.createElement("div", {
                        className: v.a.playerWrapper
                    }, o.a.createElement("div", {
                        className: v.a.playerHeader
                    }, "No Players to Interact With"), o.a.createElement("div", {
                        className: v.a.noPlayers,
                        role: "button",
                        tabIndex: 0,
                        onClick: function() {
                            return e.useAbility(null)
                        }
                    }, "Next")) : null, this.state.goalCompleted ? o.a.createElement(E.a, {
                        text: "You completed the goal for this homework! You can now end the game or keep playing (your teacher will see the extra effort)!",
                        buttonOne: {
                            text: "Keep Playing",
                            click: function() {
                                return e.setState({
                                    goalCompleted: !1
                                })
                            },
                            color: "blue"
                        },
                        buttonTwo: {
                            text: "End Now",
                            click: this.endNow,
                            color: "blue"
                        }
                    }) : ["pay", "tax", "trash"].includes(this.state.attackerAbility) ? o.a.createElement(E.a, {
                        text: "pay" === this.state.attackerAbility ? "".concat(this.state.attackerName, " just gave you a $").concat(Object(B.n)(this.state.cashChange), " paycheck bonus!") : "tax" === this.state.attackerAbility ? "".concat(this.state.attackerName, " just forced you to pay $").concat(Object(B.n)(this.state.cashChange), " in taxes.") : "".concat(this.state.attackerName, " just trashed 3 of each of your foods."),
                        blook: this.state.attackerBlook,
                        buttonOne: {
                            text: "OK",
                            click: function() {
                                return e.setState({
                                    attackerAbility: ""
                                })
                            },
                            color: "blue"
                        }
                    }) : null) : null, "inspect" === this.state.attackerAbility ? o.a.createElement(I.a, {
                        name: this.state.attackerName,
                        blook: this.state.attackerBlook
                    }) : null)
                }
            }]) && G(t.prototype, a),
            s && G(t, s),
            c
        }(o.a.Component);
        X.propTypes = {
            client: c.a.object,
            cafe: c.a.object,
            history: c.a.object.isRequired,
            firebase: c.a.object,
            leaveCafeShop: c.a.func.isRequired,
            setStanding: c.a.func.isRequired,
            deleteClient: c.a.func.isRequired,
            user: c.a.object
        };
        t.a = Object(C.c)(Object(l.a)(Object(n.b)((function(e) {
            return {
                id: e.hosts.id,
                client: e.clients.client,
                cafe: e.cafes.cafe
            }
        }
        ), (function(e) {
            return Object(r.b)({
                leaveCafeShop: k,
                setStanding: S.b,
                deleteClient: O.a
            }, e)
        }
        ))(Object(D.d)(X))))
    },
    "MV/S": function(e, t, a) {
        (t = e.exports = a("JPst")(!1)).push([e.i, '.styles__counterBelow___1itKm-camelCase{bottom:0;height:7.5%;background-color:#737373;background-image:linear-gradient(180deg,#424242,rgba(66,66,66,0) 70%)}.styles__counterBelow___1itKm-camelCase,.styles__counterBottom___1c0vk-camelCase{position:absolute;left:0;width:100%}.styles__counterBottom___1c0vk-camelCase{bottom:7.5%;height:5%;background-color:#1f7a1f}.styles__counterTop___38fS8-camelCase{bottom:12.5%;left:0;width:100%;background-color:#2eb82e}.styles__counterTop___38fS8-camelCase,.styles__trashBlook___3i0jI-camelCase{position:absolute;height:45vh}.styles__trashBlook___3i0jI-camelCase{bottom:12.75%;left:100vw;width:39.15vh;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-animation:styles__trashSlide___2OawA-camelCase 2s linear forwards;animation:styles__trashSlide___2OawA-camelCase 2s linear forwards}@-webkit-keyframes styles__trashSlide___2OawA-camelCase{0%{transform:translateX(0)}to{transform:translateX(calc(-100vw - 40vh))}}@keyframes styles__trashSlide___2OawA-camelCase{0%{transform:translateX(0)}to{transform:translateX(calc(-100vw - 40vh))}}.styles__plate___3jJp7-camelCase{border-bottom:1vh solid #ddd;box-shadow:0 1.6vh 0 rgba(0,0,0,.1);border-radius:50%;height:20vh;width:20vh;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;cursor:pointer}.styles__plate___3jJp7-camelCase,.styles__plate___3jJp7-camelCase:before{background-color:#fff;position:absolute}.styles__plate___3jJp7-camelCase:before{content:"";display:block;left:calc(50% - 6.5vh);top:calc(50% - 6.5vh);height:13vh;width:13vh;border-radius:12vh;border-top:1.2vh solid #ccc;opacity:.4}.styles__plateHover___kwcYJ-camelCase:hover,.styles__plateSelected___2qVA0-camelCase{box-shadow:0 0 0 1.2vh hsla(0,0%,100%,.4)}.styles__lockedPlate___8fCL6-camelCase{position:absolute;border-bottom:1vh solid transparent;width:100%;height:100%;border-radius:50%;background-color:rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;font-size:5vh;color:#fff;text-shadow:.5vh .5vh 0 grey}.styles__plateLevel2___16Htu-camelCase{border-radius:50%;border:2vh solid #009ff2;opacity:.4}.styles__plateLevel2___16Htu-camelCase,.styles__plateLevel3___3dh0O-camelCase{position:absolute;left:calc(50% - 9.25vh);top:calc(50% - 9.25vh);height:14.5vh;width:14.5vh}.styles__plateLevel3___3dh0O-camelCase{border-radius:50%;border:2vh double #093;opacity:.5}.styles__plateColor4___2JwV5-camelCase{border-bottom:1vh solid #004;background-color:#008;box-shadow:0 1.6vh 0 rgba(0,0,0,.1)}.styles__plateColor4___2JwV5-camelCase:before{border-top:1.2vh solid #004;background-color:#008}.styles__plateLevel4___gWh27-camelCase{position:absolute;left:calc(50% - 9.25vh);top:calc(50% - 9.25vh);height:14.5vh;width:14.5vh;border-radius:50%;border:2vh double #fff;opacity:.9}.styles__plateColor5___5Gy1--camelCase{border-bottom:1vh solid #111;background-color:#333;box-shadow:0 1.6vh 0 rgba(0,0,0,.1)}.styles__plateColor5___5Gy1--camelCase:before{border-top:1.2vh solid #111;background-color:#333}.styles__plateLevel5___1d-RF-camelCase{position:absolute;left:calc(50% - 9.25vh);top:calc(50% - 9.25vh);height:14.5vh;width:14.5vh;border-radius:50%;border:2vh groove #fff;opacity:.7}.styles__foodStock___3jbrn-camelCase{right:0;bottom:0;width:4vh;height:4vh;border-radius:.6vh;background-color:#0bc2cf;box-shadow:.5vh .5vh 0 rgba(0,0,0,.2);display:flex;justify-content:center;align-items:center;font-family:Nunito,sans-serif;font-weight:700;font-size:2.7vh;color:#fff}.styles__food___3Cmn6-camelCase,.styles__foodStock___3jbrn-camelCase{position:absolute}.styles__food___3Cmn6-camelCase{width:62.5%;height:71.875%;left:18.75%;top:14.0625%}.styles__plate1___307ik-camelCase{bottom:calc(12.5% + 22vh);left:calc(10% - 10vh)}.styles__plate2___2qiAC-camelCase{bottom:calc(12.5% + 3vh);left:calc(20% - 10vh)}.styles__plate3___34Vpr-camelCase{bottom:calc(12.5% + 22vh);left:calc(30% - 10vh)}.styles__plate4___UgoGD-camelCase{bottom:calc(12.5% + 3vh);left:calc(40% - 10vh)}.styles__plate5___3jknA-camelCase{bottom:calc(12.5% + 22vh);left:calc(50% - 10vh)}.styles__plate6___1Y5Yh-camelCase{bottom:calc(12.5% + 3vh);left:calc(60% - 10vh)}.styles__plate7___1hs8t-camelCase{bottom:calc(12.5% + 22vh);left:calc(70% - 10vh)}.styles__plate8___3TWiv-camelCase{bottom:calc(12.5% + 3vh);left:calc(80% - 10vh)}.styles__plate9___8gVIf-camelCase{bottom:calc(12.5% + 22vh);left:calc(90% - 10vh)}.styles__restockButton___3RKCq-camelCase{position:absolute;height:10%;width:25%;bottom:1.5%;left:37.5%;background-color:#0bc2cf;box-shadow:.5vh .5vh 0 rgba(0,0,0,.2);border-radius:6px;display:flex;justify-content:center;align-items:center;font-family:Nunito,sans-serif;font-weight:700;font-size:2.75vw;color:#fff;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:.2s}.styles__restockButton___3RKCq-camelCase:hover{transform:scale(.95)}.styles__restockButtonLive___3y9D2-camelCase{position:absolute;height:10%;width:25%;bottom:1.5%;right:52.5%;background-color:#0bc2cf;box-shadow:.5vh .5vh 0 rgba(0,0,0,.2);border-radius:6px;display:flex;justify-content:center;align-items:center;font-family:Nunito,sans-serif;font-weight:700;font-size:2.5vw;color:#fff;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:.2s}.styles__restockButtonLive___3y9D2-camelCase:hover{transform:scale(.95)}.styles__upgradeIcon___39dSc-camelCase{top:-10px;right:-10px;border-radius:50%;height:25px;line-height:23px;width:25px;background-color:#ff462b;box-shadow:0 0 8px 3px rgba(0,0,0,.2);color:#fff;font-family:Titan One,sans-serif;font-size:20px;text-align:center}.styles__restockKey___mc2o--camelCase,.styles__upgradeIcon___39dSc-camelCase{position:absolute;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__restockKey___mc2o--camelCase{right:calc(100% - 5vh);bottom:1.5%;width:8vh;height:3vh;border-radius:.45vh;background-color:#fff;border:1px solid grey;box-shadow:1px 0 1px 0 #eee,0 2px 0 2px #ccc,0 2px 0 3px #444;display:flex;justify-content:center;align-items:center;font-family:Nunito,sans-serif;font-weight:700;font-size:2.025vh;color:grey;pointer-events:none}.styles__missesContainer___3ozsB-camelCase{position:absolute;right:1%;width:30vh;bottom:1%;height:10vh;display:flex;flex-direction:row}.styles__miss___3Ap9F-camelCase{font-size:10vh;width:10vh;text-align:center;color:#c43a35;text-shadow:.2vh .8vh 0 rgba(0,0,0,.2);transition:.4s}.styles__questionContainer___3PKoK-camelCase{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#fff;z-index:2;-webkit-animation:styles__growIn___rUav5-camelCase .4s linear forwards;animation:styles__growIn___rUav5-camelCase .4s linear forwards}@-webkit-keyframes styles__growIn___rUav5-camelCase{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes styles__growIn___rUav5-camelCase{0%{transform:scale(0)}to{transform:scale(1)}}.styles__feedbackContainer___1Jigf-camelCase{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#f7f7f7}.styles__modalFadeIn___2TnG5-camelCase{opacity:0;-webkit-animation:styles__fadeIn___1kyTF-camelCase .4s linear .5s forwards;animation:styles__fadeIn___1kyTF-camelCase .4s linear .5s forwards}.styles__reportContainer___co8ku-camelCase{opacity:0;top:65px;margin:65px auto 15px;width:520px;display:flex;flex-direction:column;align-items:center;background-color:#fff;border-radius:10px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);font-family:Nunito,sans-serif;-webkit-animation:styles__fadeIn___1kyTF-camelCase .4s linear 1s forwards;animation:styles__fadeIn___1kyTF-camelCase .4s linear 1s forwards}.styles__reportHeader___1VuYd-camelCase{font-size:74px;font-family:Satisfy,sans-serif;color:#3a3a3a;text-align:center;margin:20px auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__reportRow___9vcUv-camelCase{height:50px;display:flex;flex-direction:row;align-items:center;width:calc(90% - 20px);margin:0 auto;padding:0 10px}.styles__reportFood___z3Jwz-camelCase{height:40px;width:35px;margin:auto 10px auto 0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__reportAmount___kfvbS-camelCase{font-size:26px;font-weight:700}.styles__reportTimes___QLDoM-camelCase{font-size:16px;margin-right:6px}.styles__reportProfit___1B9ml-camelCase{font-size:30px;font-weight:700;margin-left:auto}.styles__reportShopButton___33ag4-camelCase{display:flex;justify-content:center;align-items:center;background-color:#0bc2cf;box-shadow:4px 4px 0 rgba(0,0,0,.2);border-radius:6px;font-size:26px;padding:5px 10px;margin:25px auto 0;color:#fff;font-family:Nunito,sans-serif;font-weight:700;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__reportShopButton___33ag4-camelCase:hover{transform:scale(.95)}.styles__gameOverContainer___2qiWr-camelCase{display:flex;flex-direction:column;justify-content:center;align-items:center;width:90%;position:absolute;left:5%;top:50%;transform:translateY(-50%);color:#fff;text-shadow:2px 2px 8px grey}.styles__gameOverText___1TPp4-camelCase{font-family:Satisfy,sans-serif;font-size:12vw;opacity:0;-webkit-animation:styles__fadeIn___1kyTF-camelCase .4s linear 1s forwards;animation:styles__fadeIn___1kyTF-camelCase .4s linear 1s forwards}.styles__gameOverTextSmall___3RCRD-camelCase{font-family:Nunito,sans-serif;font-weight:700;font-size:3vw;opacity:0;-webkit-animation:styles__fadeIn___1kyTF-camelCase .4s linear 1.6s forwards;animation:styles__fadeIn___1kyTF-camelCase .4s linear 1.6s forwards}@-webkit-keyframes styles__fadeIn___1kyTF-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___1kyTF-camelCase{0%{opacity:0}to{opacity:1}}@media only screen and (max-width:800px){.styles__counterTop___38fS8-camelCase{height:42.5vh}.styles__restockButton___3RKCq-camelCase{height:10%;width:60%;bottom:1.5%;left:50%;transform:translateX(-50%);border-radius:6px;max-width:400px;font-size:7vw}.styles__restockButton___3RKCq-camelCase:hover{transform:scale(1) translateX(-50%)}.styles__restockButtonLive___3y9D2-camelCase{height:10%;width:45%;bottom:1.5%;right:52.5%;font-size:5.5vw}.styles__restockButtonLive___3y9D2-camelCase:hover{transform:scale(1) translateX(0)}.styles__upgradeIcon___39dSc-camelCase{top:-10px;right:-5px}.styles__plate___3jJp7-camelCase{transform:scale(.6)}.styles__plate1___307ik-camelCase{left:calc(20% - 10vh)}.styles__plate1___307ik-camelCase,.styles__plate2___2qiAC-camelCase{bottom:calc(12.5% + 24.75vh)}.styles__plate2___2qiAC-camelCase{left:calc(50% - 10vh)}.styles__plate3___34Vpr-camelCase{bottom:calc(12.5% + 24.75vh);left:calc(80% - 10vh)}.styles__plate4___UgoGD-camelCase{left:calc(20% - 10vh)}.styles__plate4___UgoGD-camelCase,.styles__plate5___3jknA-camelCase{bottom:calc(12.5% + 11vh)}.styles__plate5___3jknA-camelCase{left:calc(50% - 10vh)}.styles__plate6___1Y5Yh-camelCase{bottom:calc(12.5% + 11vh);left:calc(80% - 10vh)}.styles__plate7___1hs8t-camelCase{left:calc(20% - 10vh)}.styles__plate7___1hs8t-camelCase,.styles__plate8___3TWiv-camelCase{bottom:calc(12.5% - 2.75vh)}.styles__plate8___3TWiv-camelCase{left:calc(50% - 10vh)}.styles__plate9___8gVIf-camelCase{bottom:calc(12.5% - 2.75vh);left:calc(80% - 10vh)}.styles__plateHover___kwcYJ-camelCase:hover{box-shadow:0 0 0 1.2vh hsla(0,0%,100%,0)}.styles__plateSelected___2qVA0-camelCase:hover{box-shadow:0 0 0 1.2vh hsla(0,0%,100%,.4)}.styles__restockKey___mc2o--camelCase{display:none;opacity:0}.styles__missesContainer___3ozsB-camelCase{right:0;width:18%;bottom:1.5%;height:10%;flex-flow:row wrap;justify-content:center;align-items:center}.styles__miss___3Ap9F-camelCase{font-size:5vh;width:auto;margin:auto;text-shadow:.15vh .6vh 0 rgba(0,0,0,.2)}.styles__reportContainer___co8ku-camelCase{top:45px;left:calc(50vw - 160px);width:320px}.styles__reportHeader___1VuYd-camelCase{font-size:54px}.styles__reportRow___9vcUv-camelCase{height:40px}.styles__reportFood___z3Jwz-camelCase{height:30px}.styles__reportAmount___kfvbS-camelCase{font-size:18px}.styles__reportTimes___QLDoM-camelCase{font-size:12px}.styles__reportProfit___1B9ml-camelCase{font-size:24px}.styles__gameOverText___1TPp4-camelCase{font-size:15vw}.styles__gameOverTextSmall___3RCRD-camelCase{font-size:5vw}}', ""]),
        t.locals = {
            counterBelow: "styles__counterBelow___1itKm-camelCase",
            counterBottom: "styles__counterBottom___1c0vk-camelCase",
            counterTop: "styles__counterTop___38fS8-camelCase",
            trashBlook: "styles__trashBlook___3i0jI-camelCase",
            trashSlide: "styles__trashSlide___2OawA-camelCase",
            plate: "styles__plate___3jJp7-camelCase",
            plateHover: "styles__plateHover___kwcYJ-camelCase",
            plateSelected: "styles__plateSelected___2qVA0-camelCase",
            lockedPlate: "styles__lockedPlate___8fCL6-camelCase",
            plateLevel2: "styles__plateLevel2___16Htu-camelCase",
            plateLevel3: "styles__plateLevel3___3dh0O-camelCase",
            plateColor4: "styles__plateColor4___2JwV5-camelCase",
            plateLevel4: "styles__plateLevel4___gWh27-camelCase",
            plateColor5: "styles__plateColor5___5Gy1--camelCase",
            plateLevel5: "styles__plateLevel5___1d-RF-camelCase",
            foodStock: "styles__foodStock___3jbrn-camelCase",
            food: "styles__food___3Cmn6-camelCase",
            plate1: "styles__plate1___307ik-camelCase",
            plate2: "styles__plate2___2qiAC-camelCase",
            plate3: "styles__plate3___34Vpr-camelCase",
            plate4: "styles__plate4___UgoGD-camelCase",
            plate5: "styles__plate5___3jknA-camelCase",
            plate6: "styles__plate6___1Y5Yh-camelCase",
            plate7: "styles__plate7___1hs8t-camelCase",
            plate8: "styles__plate8___3TWiv-camelCase",
            plate9: "styles__plate9___8gVIf-camelCase",
            restockButton: "styles__restockButton___3RKCq-camelCase",
            restockButtonLive: "styles__restockButtonLive___3y9D2-camelCase",
            upgradeIcon: "styles__upgradeIcon___39dSc-camelCase",
            restockKey: "styles__restockKey___mc2o--camelCase",
            missesContainer: "styles__missesContainer___3ozsB-camelCase",
            miss: "styles__miss___3Ap9F-camelCase",
            questionContainer: "styles__questionContainer___3PKoK-camelCase",
            growIn: "styles__growIn___rUav5-camelCase",
            feedbackContainer: "styles__feedbackContainer___1Jigf-camelCase",
            modalFadeIn: "styles__modalFadeIn___2TnG5-camelCase",
            fadeIn: "styles__fadeIn___1kyTF-camelCase",
            reportContainer: "styles__reportContainer___co8ku-camelCase",
            reportHeader: "styles__reportHeader___1VuYd-camelCase",
            reportRow: "styles__reportRow___9vcUv-camelCase",
            reportFood: "styles__reportFood___z3Jwz-camelCase",
            reportAmount: "styles__reportAmount___kfvbS-camelCase",
            reportTimes: "styles__reportTimes___QLDoM-camelCase",
            reportProfit: "styles__reportProfit___1B9ml-camelCase",
            reportShopButton: "styles__reportShopButton___33ag4-camelCase",
            gameOverContainer: "styles__gameOverContainer___2qiWr-camelCase",
            gameOverText: "styles__gameOverText___1TPp4-camelCase",
            gameOverTextSmall: "styles__gameOverTextSmall___3RCRD-camelCase"
        }
    },
    Oc9b: function(e, t, a) {
        var s = a("mAlt");
        "string" == typeof s && (s = [[e.i, s, ""]]);
        var o = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        a("aET+")(s, o);
        s.locals && (e.exports = s.locals)
    },
    Tqoc: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return s
        }
        )),
        a.d(t, "b", (function() {
            return o
        }
        ));
        var s = "END_CAFE_DAY"
          , o = "END_CAFE_LIVE"
    },
    W8y1: function(e, t, a) {
        (t = e.exports = a("JPst")(!1)).push([e.i, '.styles__header___f28tc-camelCase{font-size:5.5vw;margin:1vw auto .25vw}.styles__abilityHeader___xC__x-camelCase,.styles__header___f28tc-camelCase{font-family:Satisfy,sans-serif;color:#3a3a3a;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__abilityHeader___xC__x-camelCase{font-size:4vw;margin:-1vw auto}.styles__nextDayButton___19g86-camelCase{display:flex;justify-content:center;align-items:center;background-color:#0bc2cf;box-shadow:4px 4px 0 rgba(0,0,0,.2);border-radius:6px;width:15vw;height:4vw;font-size:2.2vw;color:#fff;font-family:Nunito,sans-serif;font-weight:700;position:absolute;top:1vw;right:1vw;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__nextDayButton___19g86-camelCase:hover{transform:scale(.95)}.styles__shopContainer___3CrvE-camelCase{display:flex;flex-flow:row wrap;width:95%;margin:20px 2.5%}.styles__itemContainer___SyHdJ-camelCase{background-color:#f5f5f5;border:3px solid #a7a7a7;border-radius:6px;box-shadow:4px 4px 0 rgba(0,0,0,.2);display:flex;flex-direction:row;width:calc(21% - 1vw);padding:.5vw;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:10px auto;transition:.2s}.styles__itemContainerHover___YVmof-camelCase:hover{transform:scale(.95)}.styles__plate___31ltg-camelCase{border-bottom:.35vw solid #eee;box-shadow:0 .56vw 0 rgba(0,0,0,.1);border-radius:50%;height:7vw;width:7vw;position:relative;margin-bottom:.56vw}.styles__plate___31ltg-camelCase,.styles__plate___31ltg-camelCase:before{background-color:#fff}.styles__plate___31ltg-camelCase:before{content:"";display:block;position:absolute;left:calc(50% - 2.275vw);top:calc(50% - 2.275vw);height:4.55vw;width:4.55vw;border-radius:4.2vw;border-top:.42vw solid #ccc;opacity:.4}.styles__lockedPlate___EBfom-camelCase{position:absolute;border-bottom:.35vw solid transparent;width:100%;height:100%;border-radius:50%;background-color:rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;font-size:1.75vw;color:#fff;text-shadow:.175vw .175vw 0 grey}.styles__plateLevel2___1bwGX-camelCase{border-radius:50%;border:.7vw solid #009ff2;opacity:.4}.styles__plateLevel2___1bwGX-camelCase,.styles__plateLevel3___1HsUR-camelCase{position:absolute;left:calc(50% - 3.2375vw);top:calc(50% - 3.2375vw);height:5.075vw;width:5.075vw}.styles__plateLevel3___1HsUR-camelCase{border-radius:50%;border:.7vw double #093;opacity:.5}.styles__plate4___39MZ2-camelCase{border-bottom:.35vw solid #004;background-color:#008;box-shadow:0 .56vw 0 rgba(0,0,0,.1)}.styles__plate4___39MZ2-camelCase:before{border-top:.42vw solid #004;background-color:#008}.styles__plateLevel4___1Lb1g-camelCase{position:absolute;left:calc(50% - 3.2375vw);top:calc(50% - 3.2375vw);height:5.075vw;width:5.075vw;border-radius:50%;border:.7vw double #fff;opacity:.9}.styles__plate5___2rTg6-camelCase{border-bottom:.35vw solid #111;background-color:#333;box-shadow:0 .56vw 0 rgba(0,0,0,.1)}.styles__plate5___2rTg6-camelCase:before{border-top:.42vw solid #111;background-color:#333}.styles__plateLevel5___10aRQ-camelCase{position:absolute;left:calc(50% - 3.2375vw);top:calc(50% - 3.2375vw);height:5.075vw;width:5.075vw;border-radius:50%;border:.7vw groove #fff;opacity:.7}.styles__food___1EGzC-camelCase{position:absolute;width:62.5%;height:71.875%;left:18.75%;top:14.0625%}.styles__backgroundContainer___33E4J-camelCase{border:3px solid #a7a7a7;border-radius:5px;height:7vw;width:7vw;margin:auto}.styles__iconContainer___1MksP-camelCase{border-radius:5px;height:7vw;width:7vw;margin:auto;display:flex;align-items:center;justify-content:center;background-color:#9a49aa}.styles__upgradeIcon___LVSJu-camelCase{margin:auto;color:#fff;text-shadow:2px 2px 8px grey;font-size:4vw}.styles__rightContainer___gU_Wk-camelCase{display:flex;flex-direction:column;font-family:Nunito,sans-serif;color:#3a3a3a;margin-left:1vw;width:calc(100% - 8vw)}.styles__itemName___2CiTT-camelCase{font-weight:700;font-size:1.75vw;line-height:1.75vw}.styles__itemLevel___31dyT-camelCase{margin-top:.2vw;margin-bottom:.15vw;line-height:1.2vw}.styles__itemDesc___2STSA-camelCase,.styles__itemLevel___31dyT-camelCase{font-size:1.05vw;margin-left:.1vw}.styles__itemDesc___2STSA-camelCase{opacity:.7}.styles__itemUpgrade___23uWG-camelCase{margin-top:auto;font-size:1.4vw;margin-left:auto;margin-bottom:-.3vw;font-weight:700}.styles__playerWrapper___JVydk-camelCase{display:flex;flex-flow:column;width:100%;height:100%;position:fixed;top:0;left:0;overflow-x:hidden;background-color:#f7f7f7;-webkit-animation:styles__growIn___UZTuV-camelCase .4s;animation:styles__growIn___UZTuV-camelCase .4s}@-webkit-keyframes styles__growIn___UZTuV-camelCase{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes styles__growIn___UZTuV-camelCase{0%{transform:scale(0)}to{transform:scale(1)}}.styles__playerHeader___3RkEi-camelCase{font-size:6vw;width:80%;margin:95px auto 0;color:#3a3a3a;text-align:center;font-family:Satisfy,sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__playerHolder___EyH_Z-camelCase{display:flex;flex-flow:row wrap;justify-content:center;width:80%;margin:30px auto;outline:none}.styles__noPlayers___1TSWe-camelCase{width:200px;height:60px;line-height:60px;background-color:#0bc2cf;box-shadow:4px 4px 0 rgba(0,0,0,.2);border-radius:6px;cursor:pointer;text-align:center;text-decoration:none;outline:none;font-family:Nunito,sans-serif;font-weight:700;font-size:30px;color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:absolute;top:calc(50% - 30px);left:calc(50% - 100px);transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__noPlayers___1TSWe-camelCase:hover{transform:scale(.95)}.styles__playerContainer___vKvzn-camelCase{background-color:#f5f5f5;border:3px solid #a7a7a7;border-radius:6px;box-shadow:4px 4px 0 rgba(0,0,0,.2);min-height:75px;display:flex;flex-direction:row;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;margin:10px;min-width:275px;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__playerContainer___vKvzn-camelCase:focus,.styles__playerContainer___vKvzn-camelCase:hover{transform:scale(1.03)}.styles__playerBlook___3avJQ-camelCase{width:55px;height:63.25px;margin:auto 5px auto 10px}.styles__playerColumn___2o4Vn-camelCase{display:flex;flex-direction:column;flex-grow:1;margin:2.5px 10px;min-height:70px}.styles__playerText___2U7pM-camelCase{font-weight:700;font-size:28px;margin-right:10px;word-break:break-word}.styles__playerCash___3gsgL-camelCase,.styles__playerText___2U7pM-camelCase{color:#3a3a3a;font-family:Nunito,sans-serif;line-height:35px}.styles__playerCash___3gsgL-camelCase{height:35px;font-size:26px}@media only screen and (max-width:800px){.styles__header___f28tc-camelCase{font-size:12vw;margin:3.4vw 5% 9vw;width:80%;text-align:left}.styles__abilityHeader___xC__x-camelCase{font-size:9vw;margin-bottom:-3vw}.styles__nextDayButton___19g86-camelCase{box-shadow:4px 4px 0 rgba(0,0,0,.2);width:30vw;height:8vw;font-size:4.4vw;top:20vw;right:5%}.styles__nextDayButton___19g86-camelCase:hover{transform:scale(1)}.styles__itemContainer___SyHdJ-camelCase{width:calc(43% - 2vw);padding:1vw;margin:7px auto}.styles__itemContainerHover___YVmof-camelCase:hover{transform:scale(1)}.styles__plate___31ltg-camelCase{border-bottom:.7vw solid #eee;box-shadow:0 1.12vw 0 rgba(0,0,0,.1);height:14vw;width:14vw;margin-bottom:1.12vw}.styles__plate___31ltg-camelCase:before{left:calc(50% - 4.55vw);top:calc(50% - 4.55vw);height:9.1vw;width:9.1vw;border-radius:8.4vw;border-top:.84vw solid #ccc}.styles__lockedPlate___EBfom-camelCase{border-bottom:.7vw solid transparent;font-size:3.5vw;text-shadow:.35vw .35vw 0 grey}.styles__plateLevel2___1bwGX-camelCase{border:1.4vw solid #009ff2}.styles__plateLevel2___1bwGX-camelCase,.styles__plateLevel3___1HsUR-camelCase{left:calc(50% - 6.475vw);top:calc(50% - 6.475vw);height:10.15vw;width:10.15vw}.styles__plateLevel3___1HsUR-camelCase{border:1.4vw double #093}.styles__plate4___39MZ2-camelCase{border-bottom:.7vw solid #004;box-shadow:0 1.12vw 0 rgba(0,0,0,.1)}.styles__plate4___39MZ2-camelCase:before{border-top:.84vw solid #004}.styles__plateLevel4___1Lb1g-camelCase{left:calc(50% - 6.475vw);top:calc(50% - 6.475vw);height:10.15vw;width:10.15vw;border:1.4vw double #fff}.styles__plate5___2rTg6-camelCase{border-bottom:.7vw solid #111;box-shadow:0 1.12vw 0 rgba(0,0,0,.1)}.styles__plate5___2rTg6-camelCase:before{border-top:.84vw solid #111}.styles__plateLevel5___10aRQ-camelCase{left:calc(50% - 6.475vw);top:calc(50% - 6.475vw);height:10.15vw;width:10.15vw;border:1.4vw groove #fff}.styles__backgroundContainer___33E4J-camelCase,.styles__iconContainer___1MksP-camelCase{height:14vw;width:14vw}.styles__upgradeIcon___LVSJu-camelCase{font-size:8vw}.styles__rightContainer___gU_Wk-camelCase{margin-left:1vw;width:calc(100% - 15vw)}.styles__itemName___2CiTT-camelCase{font-size:3.5vw;line-height:3.5vw}.styles__itemLevel___31dyT-camelCase{margin-top:.6vw;margin-bottom:.4vw;line-height:2.5vw}.styles__itemDesc___2STSA-camelCase,.styles__itemLevel___31dyT-camelCase{font-size:2.1vw;margin-left:.2vw}.styles__itemUpgrade___23uWG-camelCase{font-size:2.8vw;margin-bottom:-.3vw}.styles__playerHeader___3RkEi-camelCase{font-size:11vw}.styles__playerHolder___EyH_Z-camelCase{width:90%}.styles__playerContainer___vKvzn-camelCase{width:100%}}', ""]),
        t.locals = {
            header: "styles__header___f28tc-camelCase",
            abilityHeader: "styles__abilityHeader___xC__x-camelCase",
            nextDayButton: "styles__nextDayButton___19g86-camelCase",
            shopContainer: "styles__shopContainer___3CrvE-camelCase",
            itemContainer: "styles__itemContainer___SyHdJ-camelCase",
            itemContainerHover: "styles__itemContainerHover___YVmof-camelCase",
            plate: "styles__plate___31ltg-camelCase",
            lockedPlate: "styles__lockedPlate___EBfom-camelCase",
            plateLevel2: "styles__plateLevel2___1bwGX-camelCase",
            plateLevel3: "styles__plateLevel3___1HsUR-camelCase",
            plate4: "styles__plate4___39MZ2-camelCase",
            plateLevel4: "styles__plateLevel4___1Lb1g-camelCase",
            plate5: "styles__plate5___2rTg6-camelCase",
            plateLevel5: "styles__plateLevel5___10aRQ-camelCase",
            food: "styles__food___1EGzC-camelCase",
            backgroundContainer: "styles__backgroundContainer___33E4J-camelCase",
            iconContainer: "styles__iconContainer___1MksP-camelCase",
            upgradeIcon: "styles__upgradeIcon___LVSJu-camelCase",
            rightContainer: "styles__rightContainer___gU_Wk-camelCase",
            itemName: "styles__itemName___2CiTT-camelCase",
            itemLevel: "styles__itemLevel___31dyT-camelCase",
            itemDesc: "styles__itemDesc___2STSA-camelCase",
            itemUpgrade: "styles__itemUpgrade___23uWG-camelCase",
            playerWrapper: "styles__playerWrapper___JVydk-camelCase",
            growIn: "styles__growIn___UZTuV-camelCase",
            playerHeader: "styles__playerHeader___3RkEi-camelCase",
            playerHolder: "styles__playerHolder___EyH_Z-camelCase",
            noPlayers: "styles__noPlayers___1TSWe-camelCase",
            playerContainer: "styles__playerContainer___vKvzn-camelCase",
            playerBlook: "styles__playerBlook___3avJQ-camelCase",
            playerColumn: "styles__playerColumn___2o4Vn-camelCase",
            playerText: "styles__playerText___2U7pM-camelCase",
            playerCash: "styles__playerCash___3gsgL-camelCase"
        }
    },
    Wm7U: function(e, t, a) {
        var s = a("3Yb6");
        "string" == typeof s && (s = [[e.i, s, ""]]);
        var o = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        a("aET+")(s, o);
        s.locals && (e.exports = s.locals)
    },
    X29w: function(e, t, a) {
        (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__stageText___1Fsd5-camelCase{font-size:28px;font-weight:700;margin-right:10px;color:#3a3a3a;line-height:50px;font-family:Nunito,sans-serif;text-align:right;overflow:hidden}", ""]),
        t.locals = {
            stageText: "styles__stageText___1Fsd5-camelCase"
        }
    },
    YygJ: function(e, t, a) {
        (t = e.exports = a("JPst")(!1)).push([e.i, ".tourSteps__customer___2ktCG-camelCase{left:35%;top:calc(10% + 55px);width:50%}.tourSteps__plate___2lM0V-camelCase{bottom:calc(12.5% + 22vh);left:calc(12.5% + 10vh)}.tourSteps__restock___3Im-H-camelCase{left:50%;bottom:15%;transform:translateX(-50%)}.tourSteps__centered___2lVcu-camelCase{top:50%;left:50%;transform:translate(-50%,-50%)}.tourSteps__topRight___3DxJw-camelCase{top:65px;right:10px}.tourSteps__cereal___2zyWw-camelCase{top:calc(95px + 20.4vw);left:50%;transform:translateX(-50%)}.tourSteps__back___1jOd5-camelCase{top:calc(7vw + 55px);right:1vw}@media only screen and (max-width:800px){.tourSteps__plate___2lM0V-camelCase{bottom:calc(12.5% + 9.25vh);left:calc(20% - 10vh)}.tourSteps__cereal___2zyWw-camelCase{top:calc(109px + 42.8vw)}.tourSteps__back___1jOd5-camelCase{top:calc(32vw + 55px);right:5%}}", ""]),
        t.locals = {
            customer: "tourSteps__customer___2ktCG-camelCase",
            plate: "tourSteps__plate___2lM0V-camelCase",
            restock: "tourSteps__restock___3Im-H-camelCase",
            centered: "tourSteps__centered___2lVcu-camelCase",
            topRight: "tourSteps__topRight___3DxJw-camelCase",
            cereal: "tourSteps__cereal___2zyWw-camelCase",
            back: "tourSteps__back___1jOd5-camelCase"
        }
    },
    ceum: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return s
        }
        ));
        var s = "LEAVE_CAFE_SHOP"
    },
    dgWh: function(e, t, a) {
        "use strict";
        a.d(t, "b", (function() {
            return o
        }
        )),
        a.d(t, "a", (function() {
            return r
        }
        ));
        var s = a("FfIY");
        function o(e, t, a, o, r, n, i, c, l, u, p, f, m, d, h) {
            return {
                type: s.b,
                cafeId: e,
                setId: t,
                resultId: a,
                hwId: o,
                hwGoal: r,
                questions: n,
                cafeCash: i,
                day: c,
                foods: l,
                items: u,
                corrects: p,
                incorrects: f,
                foodServed: m,
                stage: d,
                foodStocks: h
            }
        }
        function r() {
            return {
                type: s.a
            }
        }
    },
    k7NU: function(e, t, a) {
        var s = a("3pgL");
        "string" == typeof s && (s = [[e.i, s, ""]]);
        var o = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        a("aET+")(s, o);
        s.locals && (e.exports = s.locals)
    },
    mAlt: function(e, t, a) {
        (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__cafeBackground___38bvd-camelCase{background-color:#fff;background-image:linear-gradient(90deg,rgba(200,0,0,.5) 50%,transparent 0),linear-gradient(rgba(200,0,0,.5) 50%,transparent 0);background-size:50px 50px}", ""]),
        t.locals = {
            cafeBackground: "styles__cafeBackground___38bvd-camelCase"
        }
    },
    ofFp: function(e, t, a) {
        "use strict";
        var s = a("q1tI")
          , o = a.n(s)
          , r = a("ANjH")
          , n = a("/MKj")
          , i = a("17x9")
          , c = a.n(i)
          , l = a("mLw1")
          , u = a("wIs1")
          , p = a("4HzQ")
          , f = a("1F66")
          , m = a.n(f)
          , d = a("ZRP+")
          , h = a("TSYQ")
          , _ = a.n(h)
          , y = a("vDqi")
          , b = a.n(y)
          , v = a("wd/R")
          , g = a.n(v)
          , w = (a("RiPy"),
        a("6bnt"))
          , C = a("1b17")
          , x = a("5gLy")
          , k = a("9IXX")
          , S = a("lDJk")
          , O = a("iQ+n")
          , T = a("GIcp")
          , j = a.n(T)
          , N = a("Wm7U")
          , I = a.n(N)
          , E = a("IAGC")
          , A = a("DoX5")
          , P = a("TN+F")
          , R = a("xZdf")
          , B = a.n(R)
          , D = a("SdQT");
        function z(e) {
            return (z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function L(e) {
            return function(e) {
                if (Array.isArray(e))
                    return q(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                    return Array.from(e)
            }(e) || M(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function H(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                    return;
                var a = []
                  , s = !0
                  , o = !1
                  , r = void 0;
                try {
                    for (var n, i = e[Symbol.iterator](); !(s = (n = i.next()).done) && (a.push(n.value),
                    !t || a.length !== t); s = !0)
                        ;
                } catch (e) {
                    o = !0,
                    r = e
                } finally {
                    try {
                        s || null == i.return || i.return()
                    } finally {
                        if (o)
                            throw r
                    }
                }
                return a
            }(e, t) || M(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function M(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return q(e, t);
                var a = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === a && e.constructor && (a = e.constructor.name),
                "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? q(e, t) : void 0
            }
        }
        function q(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var a = 0, s = new Array(t); a < t; a++)
                s[a] = e[a];
            return s
        }
        function J(e, t) {
            for (var a = 0; a < t.length; a++) {
                var s = t[a];
                s.enumerable = s.enumerable || !1,
                s.configurable = !0,
                "value"in s && (s.writable = !0),
                Object.defineProperty(e, s.key, s)
            }
        }
        function U(e, t) {
            return (U = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function G(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var a, s = V(e);
                if (t) {
                    var o = V(this).constructor;
                    a = Reflect.construct(s, arguments, o)
                } else
                    a = s.apply(this, arguments);
                return Q(this, a)
            }
        }
        function Q(e, t) {
            return !t || "object" !== z(t) && "function" != typeof t ? F(e) : t
        }
        function F(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function V(e) {
            return (V = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var W = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && U(e, t)
            }(n, e);
            var t, a, s, r = G(n);
            function n(e) {
                var t;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (t = r.call(this, e)).state = {
                    timer: "00:00",
                    players: [],
                    alerts: [],
                    totalCash: 0,
                    muted: !!e.host && e.host.muted
                },
                t.ok = !1,
                t.alertContainer = o.a.createRef(),
                t.getClients = t.getClients.bind(F(t)),
                t.changeMuted = t.changeMuted.bind(F(t)),
                t.goNext = t.goNext.bind(F(t)),
                t.addAlert = t.addAlert.bind(F(t)),
                t.scrollToBottom = t.scrollToBottom.bind(F(t)),
                t.audio = new Audio(B.a),
                t.audio.muted = t.state.muted,
                t
            }
            return t = n,
            (a = [{
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    if (this.props.host && this.props.host.settings) {
                        if (this.audio.volume = .6,
                        this.audio.play(),
                        this.audio.addEventListener("ended", (function() {
                            e.audio.currentTime = 0,
                            e.audio.play()
                        }
                        ), !1),
                        b.a.defaults.headers.common.Authorization = "undefined" != typeof window ? localStorage.getItem("token") : null,
                        this.props.firebase.setStage({
                            id: this.props.host.id,
                            stage: "cafe"
                        }),
                        "Time" === this.props.host.settings.mode) {
                            var t = 60 * this.props.host.settings.amount
                              , a = 4;
                            this.setState({
                                timer: g.a.duration(t, "seconds").format("mm:ss")
                            }),
                            this.timerInterval = setInterval((function() {
                                t -= 1,
                                e.setState({
                                    timer: g.a.duration(t, "seconds").format("mm:ss")
                                }),
                                t <= 0 ? (e.getClients(!0),
                                clearInterval(e.timerInterval)) : 0 === a ? (e.getClients(!1),
                                a = 4) : a -= 1
                            }
                            ), 1e3)
                        } else
                            this.clientsInterval = setInterval((function() {
                                e.getClients(!1)
                            }
                            ), 4e3);
                        this.alertContainer = document.querySelector("#alerts")
                    }
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    var e = this;
                    clearInterval(this.timerInterval),
                    clearInterval(this.clientsInterval),
                    !this.ok && this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id),
                    this.props.deleteHost(),
                    window.removeEventListener("beforeunload", P.u)),
                    this.audio.currentTime = 0,
                    this.audio.pause(),
                    this.audio.removeEventListener("ended", (function() {
                        e.audio.currentTime = 0,
                        e.audio.play()
                    }
                    ), !1)
                }
            }, {
                key: "getClients",
                value: function(e) {
                    var t = this;
                    this.props.firebase.getDatabaseVal(this.props.host.id, "c", (function(a) {
                        var s = a || {};
                        if (s && 0 !== Object.keys(s).length) {
                            var o = !1
                              , r = [];
                            Object.entries(s).forEach((function(e) {
                                var a = H(e, 2)
                                  , s = a[0]
                                  , o = a[1];
                                if (r.push({
                                    name: s,
                                    blook: o.b,
                                    cash: o.ca || 0,
                                    toAttack: o.tat
                                }),
                                o.up) {
                                    var n = o.up.split(":");
                                    2 === n.length && t.addAlert(s, o.b, "upgraded ".concat(n[0], " to Level ").concat(n[1]), n[0])
                                }
                            }
                            ));
                            var n = r.map((function(e) {
                                return e.name
                            }
                            ));
                            r.forEach((function(e) {
                                if (e.toAttack) {
                                    var a = e.toAttack.split(":")
                                      , s = n.indexOf(a[0]);
                                    if (-1 === s)
                                        return;
                                    var o = r[s];
                                    if (a.length < 2)
                                        return;
                                    t.props.firebase.setVal({
                                        id: t.props.host.id,
                                        path: "c/".concat(o.name, "/at"),
                                        val: "".concat(e.name, ":").concat(e.blook, ":").concat(a[1])
                                    }),
                                    t.props.firebase.removeVal(t.props.host.id, "c/".concat(e.name, "/tat"))
                                }
                            }
                            )),
                            r.sort((function(e, t) {
                                return t.cash - e.cash
                            }
                            ));
                            for (var i = 0, c = 0; c < r.length; c++)
                                r[c].place = c + 1,
                                i += r[c].cash,
                                "Cash" === t.props.host.settings.mode && r[c].cash >= t.props.host.settings.amount && (o = !0);
                            o || e ? t.goNext([].concat(r)) : t.setState({
                                players: r,
                                totalCash: i
                            })
                        }
                    }
                    ))
                }
            }, {
                key: "changeMuted",
                value: function() {
                    var e = this;
                    this.setState({
                        muted: !this.state.muted
                    }, (function() {
                        e.audio.muted = e.state.muted,
                        e.props.setMuted(e.state.muted)
                    }
                    ))
                }
            }, {
                key: "goNext",
                value: function(e) {
                    var t = this;
                    this.props.updateStandings(e);
                    var a = e.map((function(e) {
                        return {
                            n: e.name,
                            b: e.blook,
                            c: e.cash,
                            p: e.place
                        }
                    }
                    ));
                    this.props.firebase.setVal({
                        id: this.props.host.id,
                        path: "st",
                        val: a
                    }, (function() {
                        b.a.defaults.headers.common.Authorization = "undefined" != typeof window ? localStorage.getItem("token") : null,
                        t.props.firebase.setStage({
                            id: t.props.host.id,
                            stage: "fin"
                        }, (function() {
                            t.ok = !0,
                            t.props.history.push("/host/cafe/final")
                        }
                        ))
                    }
                    ))
                }
            }, {
                key: "addAlert",
                value: function(e, t, a, s) {
                    var o = [].concat(L(this.state.alerts), [{
                        name: e,
                        blook: t,
                        msg: a,
                        endBlook: s
                    }])
                      , r = Array.from(new Set(o.map((function(e) {
                        return "".concat(e.name, " ").concat(e.msg)
                    }
                    )))).map((function(e) {
                        return o.find((function(t) {
                            return "".concat(t.name, " ").concat(t.msg) === e
                        }
                        ))
                    }
                    ));
                    r.length > 15 && r.splice(0, 1),
                    this.setState({
                        alerts: r
                    }, this.scrollToBottom)
                }
            }, {
                key: "scrollToBottom",
                value: function() {
                    this.alertContainer.scrollTop = this.alertContainer.scrollHeight
                }
            }, {
                key: "render",
                value: function() {
                    var e = this;
                    return this.props.host && this.props.host.settings ? o.a.createElement("div", {
                        className: j.a.body,
                        style: {
                            overflow: "hidden"
                        }
                    }, o.a.createElement(O.a, {
                        title: "Host Blooket",
                        desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                    }), o.a.createElement(k.a, {
                        left: "Blooket",
                        center: "Time" === this.props.host.settings.mode ? this.state.timer : "Goal: $".concat(Object(P.n)(this.props.host.settings.amount)),
                        right: this.props.host.settings.lateJoin ? "ID: ".concat(this.props.host.id) : "",
                        muted: this.state.muted,
                        changeMuted: this.changeMuted,
                        onRightClick: function() {
                            return e.getClients(!0)
                        }
                    }), o.a.createElement("div", {
                        className: j.a.hostRegularBody
                    }, o.a.createElement(E.a, {
                        level: 2
                    }), o.a.createElement(m.a, {
                        data: this.state.players,
                        keyAccessor: function(e) {
                            return e.name
                        },
                        start: function(e) {
                            return {
                                opacity: 1,
                                x: -60,
                                y: 11 * (e.place - 1)
                            }
                        },
                        enter: function(e) {
                            return {
                                opacity: [1],
                                x: [0],
                                y: [11 * (e.place - 1)],
                                timing: {
                                    duration: 1e3,
                                    ease: d.a
                                }
                            }
                        },
                        update: function(e) {
                            return {
                                opacity: [1],
                                x: [0],
                                y: [11 * (e.place - 1)],
                                timing: {
                                    duration: 500,
                                    ease: d.a
                                }
                            }
                        },
                        leave: function() {
                            return {
                                opacity: [1e-6],
                                x: [-60],
                                timing: 1e3
                            }
                        }
                    }, (function(e) {
                        return o.a.createElement("div", {
                            className: _()(I.a.left, I.a.invisibleScrollbar)
                        }, e.map((function(e) {
                            var t = e.key
                              , a = e.data
                              , s = e.state
                              , r = s.x
                              , n = s.y
                              , i = s.opacity;
                            return o.a.createElement("div", {
                                key: t,
                                style: {
                                    opacity: i,
                                    transform: "translate(".concat(r, "vw, ").concat(n, "vh)")
                                },
                                className: I.a.standingRow
                            }, o.a.createElement(p.Textfit, {
                                className: I.a.placeText,
                                mode: "single",
                                forceSingleModeWidth: !1,
                                min: 1,
                                max: Object(P.C)("5vw")
                            }, a.place), o.a.createElement("div", {
                                className: I.a.superPlaceText
                            }, Object(P.g)(a.place)), o.a.createElement(A.a, {
                                name: a.blook,
                                className: I.a.blookBox
                            }), o.a.createElement(p.Textfit, {
                                className: I.a.nameText,
                                mode: "single",
                                forceSingleModeWidth: !1,
                                min: 1,
                                max: Object(P.C)("4vw")
                            }, a.name), o.a.createElement(p.Textfit, {
                                className: I.a.cashText,
                                mode: "single",
                                forceSingleModeWidth: !1,
                                min: 1,
                                max: Object(P.C)("5vw")
                            }, "$".concat(Object(P.v)(a.cash))))
                        }
                        )))
                    }
                    )), o.a.createElement("div", {
                        className: I.a.chatroom
                    }, o.a.createElement("div", {
                        className: _()(I.a.chatroomInside, I.a.invisibleScrollbar),
                        id: "alerts"
                    }, this.state.alerts[0] ? this.state.alerts.map((function(e, t) {
                        return o.a.createElement(S.a, {
                            key: t,
                            name: e.name,
                            blook: e.blook,
                            message: e.msg,
                            endBlook: e.endBlook,
                            glitchInfo: e.glitchInfo,
                            isWhite: !0
                        })
                    }
                    )) : o.a.createElement("div", {
                        className: I.a.noAlerts
                    }, o.a.createElement("i", {
                        className: _()(I.a.noAlertsIcon, "far fa-clock")
                    }), o.a.createElement("div", {
                        className: I.a.noAlertsText
                    }, "Waiting For Action...")))), o.a.createElement(p.Textfit, {
                        className: I.a.totalCashText,
                        mode: "single",
                        forceSingleModeWidth: !1,
                        min: 1,
                        max: Object(P.C)("7vw")
                    }, "$".concat(Object(P.n)(this.state.totalCash))))) : o.a.createElement(l.a, {
                        to: "/dashboard"
                    })
                }
            }]) && J(t.prototype, a),
            s && J(t, s),
            n
        }(o.a.Component);
        W.propTypes = {
            host: c.a.object,
            firebase: c.a.object,
            history: c.a.object,
            updateStandings: c.a.func.isRequired,
            setMuted: c.a.func.isRequired,
            deleteHost: c.a.func.isRequired
        };
        t.a = Object(u.a)(Object(n.b)((function(e) {
            return {
                host: e.hosts.host
            }
        }
        ), (function(e) {
            return Object(r.b)({
                updateStandings: w.b,
                setMuted: C.a,
                deleteHost: x.c
            }, e)
        }
        ))(Object(D.d)(W)))
    },
    w16W: function(e, t, a) {
        var s = a("YygJ");
        "string" == typeof s && (s = [[e.i, s, ""]]);
        var o = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        a("aET+")(s, o);
        s.locals && (e.exports = s.locals)
    },
    z3gw: function(e, t, a) {
        "use strict";
        var s = a("q1tI")
          , o = a.n(s)
          , r = a("ANjH")
          , n = a("/MKj")
          , i = a("17x9")
          , c = a.n(i)
          , l = a("mLw1")
          , u = a("wIs1")
          , p = a("vDqi")
          , f = a.n(p)
          , m = a("TSYQ")
          , d = a.n(m)
          , h = a("5gLy")
          , _ = a("GIcp")
          , y = a.n(_)
          , b = a("Oc9b")
          , v = a.n(b)
          , g = a("pcIS")
          , w = a("TN+F")
          , C = a("iQ+n")
          , x = a("SdQT");
        function k(e) {
            return (k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function S(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                    return;
                var a = []
                  , s = !0
                  , o = !1
                  , r = void 0;
                try {
                    for (var n, i = e[Symbol.iterator](); !(s = (n = i.next()).done) && (a.push(n.value),
                    !t || a.length !== t); s = !0)
                        ;
                } catch (e) {
                    o = !0,
                    r = e
                } finally {
                    try {
                        s || null == i.return || i.return()
                    } finally {
                        if (o)
                            throw r
                    }
                }
                return a
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return O(e, t);
                var a = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === a && e.constructor && (a = e.constructor.name);
                if ("Map" === a || "Set" === a)
                    return Array.from(e);
                if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
                    return O(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function O(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var a = 0, s = new Array(t); a < t; a++)
                s[a] = e[a];
            return s
        }
        function T(e, t) {
            for (var a = 0; a < t.length; a++) {
                var s = t[a];
                s.enumerable = s.enumerable || !1,
                s.configurable = !0,
                "value"in s && (s.writable = !0),
                Object.defineProperty(e, s.key, s)
            }
        }
        function j(e, t) {
            return (j = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function N(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var a, s = E(e);
                if (t) {
                    var o = E(this).constructor;
                    a = Reflect.construct(s, arguments, o)
                } else
                    a = s.apply(this, arguments);
                return I(this, a)
            }
        }
        function I(e, t) {
            return !t || "object" !== k(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function E(e) {
            return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var A = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && j(e, t)
            }(n, e);
            var t, a, s, r = N(n);
            function n(e) {
                var t;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (t = r.call(this, e)).state = {
                    ready: !1,
                    historyId: "",
                    standings: [],
                    muted: !!e.host && e.host.muted
                },
                t
            }
            return t = n,
            (a = [{
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    if (this.props.host && this.props.host.standings && this.props.host.standings[0]) {
                        var t = JSON.parse(JSON.stringify(this.props.host));
                        this.setState({
                            standings: t.standings
                        }, (function() {
                            e.startTimeout = setTimeout((function() {
                                var a = {};
                                e.props.firebase.getDatabaseVal(t.id, "c", (function(s) {
                                    var o = s || {};
                                    Object.entries(o).forEach((function(e) {
                                        var t = S(e, 2)
                                          , s = t[0]
                                          , o = t[1]
                                          , r = {};
                                        if (o.i)
                                            if (Array.isArray(o.i))
                                                for (var n = 0; n < o.i.length; n++) {
                                                    var i = o.i[n];
                                                    i && (r[n] = i)
                                                }
                                            else
                                                r = o.i;
                                        else
                                            r = {};
                                        var c = {};
                                        if (o.c)
                                            if (Array.isArray(o.c))
                                                for (var l = 0; l < o.c.length; l++) {
                                                    var u = o.c[l];
                                                    u && (c[l] = u)
                                                }
                                            else
                                                c = o.c;
                                        else
                                            c = {};
                                        a[s] = {
                                            corrects: c,
                                            incorrects: r
                                        }
                                    }
                                    )),
                                    e.props.host && e.props.host.id && (e.props.firebase.removeHost(e.props.host.id),
                                    e.props.deleteHost()),
                                    window.removeEventListener("beforeunload", w.u),
                                    e.waitTimeout = setTimeout((function() {
                                        e.state.standings.length > 0 && (f.a.defaults.headers.common.Authorization = "undefined" != typeof window ? localStorage.getItem("token") : null,
                                        f.a.post("/api/history", {
                                            standings: t.standings.map((function(e) {
                                                return {
                                                    blook: e.blook,
                                                    name: e.name,
                                                    place: e.place,
                                                    cash: e.cash,
                                                    corrects: a[e.name] ? a[e.name].corrects : {},
                                                    incorrects: a[e.name] ? a[e.name].incorrects : {}
                                                }
                                            }
                                            )),
                                            settings: t.settings,
                                            set: t.hostName,
                                            setId: t.setId,
                                            name: t.hoster
                                        }).then((function(t) {
                                            e.setState({
                                                historyId: t.data._id,
                                                ready: !0
                                            })
                                        }
                                        )).catch((function(e) {
                                            console.error(e)
                                        }
                                        )))
                                    }
                                    ), 2e3)
                                }
                                ))
                            }
                            ), 3500)
                        }
                        ))
                    }
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    clearTimeout(this.startTimeout),
                    clearTimeout(this.waitTimeout),
                    this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id),
                    this.props.deleteHost())
                }
            }, {
                key: "render",
                value: function() {
                    return this.props.host && this.props.host.standings && this.props.host.standings[0] || this.state.standings && this.state.standings[0] ? o.a.createElement("div", {
                        className: d()(y.a.hostBody, v.a.cafeBackground),
                        style: {
                            overflowY: this.state.ready ? "auto" : "hidden"
                        }
                    }, o.a.createElement(C.a, {
                        title: "Host Blooket",
                        desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                    }), this.state.standings.length > 0 ? o.a.createElement(g.a, {
                        standings: this.state.standings,
                        stats: this.state.standings.map((function(e) {
                            return "$".concat(Object(w.n)(e.cash))
                        }
                        )),
                        gameId: this.props.gameId,
                        historyId: this.state.historyId,
                        muted: this.state.muted,
                        theme: "cafe"
                    }) : null) : o.a.createElement(l.a, {
                        to: "/dashboard"
                    })
                }
            }]) && T(t.prototype, a),
            s && T(t, s),
            n
        }(o.a.Component);
        A.propTypes = {
            gameId: c.a.string,
            host: c.a.object,
            firebase: c.a.object,
            deleteHost: c.a.func.isRequired
        };
        t.a = Object(u.a)(Object(n.b)((function(e) {
            return {
                host: e.hosts.host,
                gameId: e.hosts.id
            }
        }
        ), (function(e) {
            return Object(r.b)({
                deleteHost: h.c
            }, e)
        }
        ))(Object(x.d)(A)))
    }
}]);
