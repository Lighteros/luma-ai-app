(self.webpackChunkagnus = self.webpackChunkagnus || []).push([
  [179],
  {
    5003: (L, ne, T) => {
      "use strict";
      var z = T(5427),
        e = T(3668),
        le = T(9555),
        R = T(4522),
        l = T(7537),
        X = T(4499),
        oe = document.location.hostname;
      Y =
        "localhost" == oe || "192.168.1.110" == oe
          ? "http://" + document.location.hostname + ":26357/"
          : "https://agnusapi.hivelancetech.com/";
      var Y,
        K = T(416),
        ie = T(9013);
      let h = (() => {
        class n {
          constructor(t, o, a) {
            (this.http = t),
              (this.socket = o),
              (this.jwtHelper = a),
              (this.redirectUrl = Y),
              (this.urlSource = new X.X({})),
              (this.actUrl = this.urlSource.asObservable()),
              (this.tabSource = new X.X({})),
              (this.actTab = this.tabSource.asObservable()),
              (this.proup = new X.X({})),
              (this.data = this.proup.asObservable());
          }
          activeUrl(t) {
            this.urlSource.next(t);
          }
          activeTab(t) {
            this.tabSource.next(t);
          }
          profilechange(t) {
            this.proup.next(t);
          }
          postUrl(t, o) {
            return this.http.post(this.redirectUrl + t, o);
          }
          getUrl(t) {
            return this.http.get(this.redirectUrl + t);
          }
          postRequest(t, o, a) {
            const r = new R.WM()
              .set("cache-control", "no-cache")
              .set("content-type", "application/json")
              .set("Authorization", "Bearer " + a);
            return this.http.post(this.redirectUrl + t, o, { headers: r });
          }
          checkMaintain() {
            const t = new R.WM().set("cache-control", "no-cache");
            return this.http.get(this.redirectUrl + "admin/check_maintain", {
              headers: t,
            });
          }
          filePostRequest(t, o, a) {
            const r = new R.WM()
              .set("cache-control", "no-cache")
              .set("Authorization", "Bearer " + a);
            return this.http.post(this.redirectUrl + t, o, { headers: r });
          }
          getRequest(t, o) {
            const a = new R.WM()
              .set("cache-control", "no-cache")
              .set("content-type", "application/json")
              .set("Authorization", "Bearer " + o);
            return this.http.get(this.redirectUrl + t, { headers: a });
          }
          loggedIn() {
            const t = localStorage.getItem("H1gh-VaLTokEN");
            return !this.jwtHelper.isTokenExpired(t);
          }
          RPCData() {
            return {
              chainId: 1100,
              chainName: "LUMA",
              name: "LUMA",
              symbol: "LUMA",
              decimals: 18,
              rpcUrls: "https://rpc.agnscan.com",
            };
          }
          SiteCoin() {
            return "LUMA";
          }
          idleLogout() {
            var t;
            function o() {
              "" != localStorage.getItem("H1gh-VaLTokEN") &&
                (localStorage.removeItem("H1gh-VaLTokEN"),
                (window.location.href = "/login"));
            }
            function a() {
              clearTimeout(t), (t = setTimeout(o, 18e5));
            }
            (window.onload = a),
              (window.onmousemove = a),
              (window.onmousedown = a),
              (window.ontouchstart = a),
              (window.onclick = a),
              (window.onkeypress = a),
              window.addEventListener("scroll", a, !0);
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(e.LFG(R.eN), e.LFG(K.sk), e.LFG(ie.N0));
          }),
          (n.ɵprov = e.Yz7({ token: n, factory: n.ɵfac, providedIn: "root" })),
          n
        );
      })();
      var ce = T(8676),
        u = T(8427),
        de = T(4753),
        ue = T(524),
        pe = T.n(ue),
        p = T(6019),
        A = T(3392);
      let f = (() => {
        class n {
          constructor() {}
          ngOnInit() {}
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)();
          }),
          (n.ɵcmp = e.Xpm({
            type: n,
            selectors: [["app-loader"]],
            decls: 0,
            vars: 0,
            template: function (t, o) {},
            styles: [""],
          })),
          n
        );
      })();
      function ge(n, i) {
        1 & n && e._UZ(0, "app-loader");
      }
      function Ze(n, i) {
        1 & n &&
          (e.TgZ(0, "ul", 26),
          e.TgZ(1, "a", 27),
          e._uU(2, "Sign In"),
          e.qZA(),
          e.TgZ(3, "a", 28),
          e._uU(4, "Sign Up"),
          e.qZA(),
          e.qZA());
      }
      function _e(n, i) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "ul", 26),
            e.TgZ(1, "a", 29),
            e._UZ(2, "i", 30),
            e._uU(3, " Wallet"),
            e.qZA(),
            e.TgZ(4, "a", 31),
            e.NdJ("click", function () {
              return e.CHM(t), e.oxw().logout();
            }),
            e._uU(5, "Logout"),
            e.qZA(),
            e.qZA();
        }
      }
      let g = (() => {
        class n {
          constructor(t, o, a) {
            (this.conn = t),
              (this.alert = o),
              (this.route = a),
              (this.content = !1),
              (this.loader = !1),
              (this.token = localStorage.getItem("H1gh-VaLTokEN")),
              this.conn.loggedIn() && (this.content = !0);
          }
          ngOnInit() {
            jQuery(window).scroll(function (t) {
              jQuery(window).scrollTop() > 50
                ? jQuery(".clearHeader").addClass("fixed")
                : jQuery(".clearHeader").removeClass("fixed");
            });
          }
          logout() {
            localStorage.removeItem("H1gh-VaLTokEN"),
              localStorage.removeItem("Token"),
              this.alert.success("Logout Successfully", "", { timeOut: 2e3 }),
              this.route.navigate(["login"]);
          }
          getTestCoin() {
            (this.loader = !0),
              this.conn
                .getRequest("account/getTestCoin", this.token)
                .subscribe((t) => {
                  1 == t.success
                    ? this.alert.success(t.message, "", { timeOut: 2e3 })
                    : this.alert.error(t.message, "", { timeOut: 2e3 }),
                    (this.loader = !1);
                });
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(e.Y36(h), e.Y36(A._W), e.Y36(u.F0));
          }),
          (n.ɵcmp = e.Xpm({
            type: n,
            selectors: [["app-header"]],
            decls: 46,
            vars: 3,
            consts: [
              [4, "ngIf"],
              [
                1,
                "navbar",
                "navbar-expand-lg",
                "navbar-light",
                "fixed-top",
                "clearHeader",
              ],
              ["href", "#", 1, "navbar-brand"],
              ["src", "assets/images/logo.png"],
              [
                "type",
                "button",
                "data-toggle",
                "collapse",
                "data-target",
                "#navbarSupportedContent",
                "aria-controls",
                "navbarSupportedContent",
                "aria-expanded",
                "false",
                "aria-label",
                "Toggle navigation",
                1,
                "navbar-toggler",
              ],
              [1, "navbar-toggler-icon"],
              [
                "id",
                "navbarSupportedContent",
                1,
                "collapse",
                "navbar-collapse",
              ],
              [1, "navbar-nav", "mr-auto"],
              [1, "nav-item"],
              [
                "routerLink",
                "/",
                "routerLinkActive",
                "active-link",
                1,
                "nav-link",
              ],
              [1, "nav-item", "dropdown"],
              [
                "href",
                "#",
                "id",
                "navbarDropdown",
                "role",
                "button",
                "data-toggle",
                "dropdown",
                "aria-expanded",
                "false",
                1,
                "nav-link",
                "dropdown-toggle",
              ],
              ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"],
              ["routerLink", "/transactions", 1, "dropdown-item"],
              ["routerLink", "/blocks", 1, "dropdown-item"],
              ["routerLink", "/verifycontract", 1, "dropdown-item"],
              ["routerLink", "/blockchain", 1, "dropdown-item"],
              ["routerLink", "/token", 1, "dropdown-item"],
              ["routerLink", "/token-transaction", 1, "dropdown-item"],
              [
                "href",
                "#",
                "id",
                "moreOps",
                "role",
                "button",
                "data-toggle",
                "dropdown",
                "aria-expanded",
                "false",
                1,
                "nav-link",
                "dropdown-toggle",
              ],
              ["aria-labelledby", "moreOps", 1, "dropdown-menu"],
              ["routerLink", "/unitconverter", 1, "dropdown-item"],
              ["routerLink", "/balancecheck", 1, "dropdown-item"],
              ["routerLink", "/supply-checker", 1, "dropdown-item"],
              ["routerLink", "/test-faucet", 1, "nav-link"],
              ["class", "navbar-nav ml-auto btns", 4, "ngIf"],
              [1, "navbar-nav", "ml-auto", "btns"],
              [
                "routerLink",
                "/login",
                "type",
                "submit",
                1,
                "btn",
                "blue-btn",
                "btn-lg",
              ],
              [
                "routerLink",
                "/register",
                "type",
                "submit",
                1,
                "btn",
                "dark-btn",
                "btn-lg",
              ],
              ["routerLink", "/asset", 1, "btn", "blue-btn", "btn-lg"],
              [1, "fas", "fa-wallet", "mr-1"],
              [1, "btn", "dark-btn", "btn-lg", 3, "click"],
            ],
            template: function (t, o) {
              1 & t &&
                (e.YNc(0, ge, 1, 0, "app-loader", 0),
                e.TgZ(1, "nav", 1),
                e.TgZ(2, "a", 2),
                e._UZ(3, "img", 3),
                e.qZA(),
                e.TgZ(4, "button", 4),
                e._UZ(5, "span", 5),
                e.qZA(),
                e.TgZ(6, "div", 6),
                e.TgZ(7, "ul", 7),
                e.TgZ(8, "li", 8),
                e.TgZ(9, "a", 9),
                e._uU(10, "Home"),
                e.qZA(),
                e.qZA(),
                e.TgZ(11, "li", 10),
                e.TgZ(12, "a", 11),
                e._uU(13, " Blockchain "),
                e.qZA(),
                e.TgZ(14, "div", 12),
                e.TgZ(15, "a", 13),
                e._uU(16, "Transactions"),
                e.qZA(),
                e.TgZ(17, "a", 14),
                e._uU(18, "View Blocks"),
                e.qZA(),
                e.TgZ(19, "a", 15),
                e._uU(20, "Contract Verifi"),
                e.qZA(),
                e.TgZ(21, "a", 16),
                e._uU(22, "Verified Contracts"),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.TgZ(23, "li", 10),
                e.TgZ(24, "a", 11),
                e._uU(25, " Tokens "),
                e.qZA(),
                e.TgZ(26, "div", 12),
                e.TgZ(27, "a", 17),
                e._uU(28, "Top Tokens"),
                e.qZA(),
                e.TgZ(29, "a", 18),
                e._uU(30, "Token Transfers"),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.TgZ(31, "li", 10),
                e.TgZ(32, "a", 19),
                e._uU(33, " More "),
                e.qZA(),
                e.TgZ(34, "div", 20),
                e.TgZ(35, "a", 21),
                e._uU(36, "Unit Converter"),
                e.qZA(),
                e.TgZ(37, "a", 22),
                e._uU(38, "Balance checker"),
                e.qZA(),
                e.TgZ(39, "a", 23),
                e._uU(40, "Token Supply"),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.TgZ(41, "li", 8),
                e.TgZ(42, "a", 24),
                e._uU(43, "Faucet"),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.YNc(44, Ze, 5, 0, "ul", 25),
                e.YNc(45, _e, 6, 0, "ul", 25),
                e.qZA(),
                e.qZA()),
                2 & t &&
                  (e.Q6J("ngIf", o.loader),
                  e.xp6(44),
                  e.Q6J("ngIf", !o.content),
                  e.xp6(1),
                  e.Q6J("ngIf", o.content));
            },
            directives: [p.O5, u.yS, u.Od, f],
            styles: [
              ".fixed[_ngcontent-%COMP%]{background-color:#fff;border-bottom:1px solid #1b36be;box-shadow:0 0 25px #0000004d}",
            ],
          })),
          n
        );
      })();
      function he(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "li"), e.TgZ(1, "a", 20), e._uU(2), e.qZA(), e.qZA()),
          2 & n)
        ) {
          const t = i.$implicit;
          e.xp6(1),
            e.MGl("routerLink", "/token-info/", t.tokenId, ""),
            e.xp6(1),
            e.Oqu(t.token_name);
        }
      }
      function me(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 17),
            e.TgZ(1, "ul", 18),
            e.YNc(2, he, 3, 2, "li", 19),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(2), e.Q6J("ngForOf", t.searchData);
        }
      }
      function Te(n, i) {
        1 & n &&
          (e.TgZ(0, "div", 21),
          e._UZ(1, "i", 22),
          e._uU(2, " Sorry\uff01"),
          e.TgZ(3, "small"),
          e._uU(4, "Search not found"),
          e.qZA(),
          e.qZA());
      }
      function fe(n, i) {
        1 & n &&
          (e.TgZ(0, "div", 21),
          e._UZ(1, "i", 22),
          e._uU(2, " Sorry\uff01"),
          e.TgZ(3, "small"),
          e._uU(4, "Search value is Empty"),
          e.qZA(),
          e.qZA());
      }
      let m = (() => {
        class n {
          constructor(t, o, a, r) {
            (this.route = t),
              (this.actRoute = o),
              (this.conn = a),
              (this.alert = r),
              (this.notfound = !1),
              (this.emptyvalue = !1),
              (this.select = { option: "All" }),
              (this.searchData = []);
          }
          ngOnInit() {
            $(".searchbar input").focus(function () {
              $(".auto_search_box").show();
            }),
              $(".searchbar input").blur(function () {
                $(this).val() || $(".auto_search_box").hide();
              }),
              (this.searchHash =
                this.actRoute.snapshot.paramMap.get("searchhash"));
          }
          searchFunc(t) {
            "" !== t
              ? "Contract" == this.select.option
                ? this.conn
                    .postUrl("blocks/getcontractsId", { contra: t })
                    .subscribe((d) => {
                      (this.constactsId = d),
                        null != this.constactsId
                          ? (this.route.navigate(["contract-info/" + t]),
                            (this.notfound = !1))
                          : ((this.notfound = !0), (this.emptyvalue = !1));
                    })
                : "All" == this.select.option
                ? this.conn
                    .postUrl("blocks/getAllSec", { gettran: t })
                    .subscribe((d) => {
                      1 == d.success
                        ? (this.route.navigate(["transaction-details/" + t]),
                          (this.notfound = !1))
                        : 2 == d.success
                        ? (this.route.navigate(["address-info/" + t]),
                          (this.notfound = !1))
                        : ((this.notfound = !0), (this.emptyvalue = !1));
                    })
                : "Tokens" == this.select.option
                ? this.conn
                    .postUrl("blocks/getTokenId", { searchHash: t })
                    .subscribe((d) => {
                      (this.tokenId = d),
                        null != this.tokenId
                          ? (this.route.navigate([
                              "token-info/" + this.tokenId._id,
                            ]),
                            (this.notfound = !1))
                          : ((this.notfound = !0), (this.emptyvalue = !1));
                    })
                : "Address" == this.select.option
                ? this.conn
                    .postUrl("blocks/getAddress", { address: t })
                    .subscribe((d) => {
                      1 == d.success
                        ? (this.route.navigate(["address-info/" + t]),
                          (this.notfound = !1))
                        : ((this.notfound = !0), (this.emptyvalue = !1));
                    })
                : "TxnID" == this.select.option &&
                  this.conn
                    .postUrl("blocks/getTxnId", { hashId: t })
                    .subscribe((d) => {
                      (this.hashtxnId = d),
                        null != this.hashtxnId
                          ? (this.route.navigate(["transaction-details/" + t]),
                            (this.notfound = !1))
                          : ((this.notfound = !0), (this.emptyvalue = !1));
                    })
              : ((this.notfound = !1), (this.emptyvalue = !0));
          }
          optionselected(t) {
            "" !== t
              ? "TxnID" == this.select.option
                ? this.conn
                    .postUrl("blocks/getTxnId", { hashId: t })
                    .subscribe((d) => {
                      (this.hashtxnId = d),
                        null != this.hashtxnId
                          ? (this.route.navigate(["transaction-details/" + t]),
                            (this.notfound = !1))
                          : ((this.notfound = !0), (this.emptyvalue = !1));
                    })
                : "All" == this.select.option
                ? this.conn
                    .postUrl("blocks/getAllSec", { gettran: t })
                    .subscribe((d) => {
                      1 == d.success
                        ? (this.route.navigate(["transaction-details/" + t]),
                          (this.notfound = !1))
                        : 2 == d.success
                        ? (this.route.navigate(["address-info/" + t]),
                          (this.notfound = !1))
                        : ((this.notfound = !0), (this.emptyvalue = !1));
                    })
                : "Contract" == this.select.option
                ? this.conn
                    .postUrl("blocks/getcontractsId", { contra: t })
                    .subscribe((d) => {
                      (this.constactsId = d),
                        null != this.constactsId
                          ? (this.route.navigate(["contract-info/" + t]),
                            (this.notfound = !1))
                          : ((this.notfound = !0), (this.emptyvalue = !1));
                    })
                : "Tokens" == this.select.option
                ? this.conn
                    .postUrl("blocks/getTokenId", { searchHash: t })
                    .subscribe((d) => {
                      (this.tokenId = d),
                        null != this.tokenId
                          ? (this.route.navigate(
                              "TRX10" == this.tokenId.token_type
                                ? ["token-info/" + this.tokenId.tokenId]
                                : [
                                    "token-info/" +
                                      this.tokenId.contract_address,
                                  ]
                            ),
                            (this.notfound = !1))
                          : ((this.notfound = !0), (this.emptyvalue = !1));
                    })
                : "Address" == this.select.option &&
                  this.conn
                    .postUrl("blocks/getAddress", { address: t })
                    .subscribe((d) => {
                      1 == d.success
                        ? (this.route.navigate(["address-info/" + t]),
                          (this.notfound = !1))
                        : ((this.notfound = !0), (this.emptyvalue = !1));
                    })
              : ((this.notfound = !1), (this.emptyvalue = !0));
          }
          suggestionFunc(t) {
            this.conn
              .postUrl("blocks/getTokenSearchData", { searchHash: t })
              .subscribe((a) => {
                1 == a.success
                  ? (this.searchData = a.result)
                  : (this.notfound = !0);
              });
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(
              e.Y36(u.F0),
              e.Y36(u.gz),
              e.Y36(h),
              e.Y36(A._W)
            );
          }),
          (n.ɵcmp = e.Xpm({
            type: n,
            selectors: [["app-searchbar"]],
            decls: 23,
            vars: 5,
            consts: [
              [1, "inner-banner"],
              [1, "container"],
              [1, "input-group", "site-input-group", "searchbar"],
              [
                "id",
                "basic-addon2",
                1,
                "input-group-text",
                "search-icon",
                3,
                "click",
              ],
              [1, "fas", "fa-search"],
              [
                "type",
                "text",
                "placeholder",
                "Search by address / Transaction Hash",
                "aria-label",
                "Recipient's username",
                "aria-describedby",
                "basic-addon2",
                "ngModel",
                "",
                1,
                "form-control",
                3,
                "value",
                "keyup.enter",
                "keyup",
              ],
              ["serach", "ngModel"],
              [1, "input-group-append"],
              [
                "id",
                "country",
                "name",
                "country",
                "required",
                "",
                3,
                "ngModel",
                "ngModelChange",
              ],
              ["country", "ngModel"],
              ["value", "All", 3, "click"],
              ["value", "Tokens", 3, "click"],
              ["value", "Contract", 3, "click"],
              ["value", "TxnID", 3, "click"],
              ["value", "Address", 3, "click"],
              ["class", "auto_search_box-whl", 4, "ngIf"],
              ["style", "color:red; float: left;", 4, "ngIf"],
              [1, "auto_search_box-whl"],
              [1, "auto_search_box"],
              [4, "ngFor", "ngForOf"],
              [3, "routerLink"],
              [2, "color", "red", "float", "left"],
              ["aria-hidden", "true", 1, "fa", "fa-exclamation-circle", "fa-x"],
            ],
            template: function (t, o) {
              if (1 & t) {
                const a = e.EpF();
                e.TgZ(0, "section", 0),
                  e.TgZ(1, "div", 1),
                  e.TgZ(2, "div", 2),
                  e.TgZ(3, "span", 3),
                  e.NdJ("click", function () {
                    e.CHM(a);
                    const s = e.MAs(6);
                    return o.searchFunc(s.value);
                  }),
                  e._UZ(4, "i", 4),
                  e.qZA(),
                  e.TgZ(5, "input", 5, 6),
                  e.NdJ("keyup.enter", function () {
                    e.CHM(a);
                    const s = e.MAs(6);
                    return o.searchFunc(s.value);
                  })("keyup", function () {
                    e.CHM(a);
                    const s = e.MAs(6);
                    return o.suggestionFunc(s.value);
                  }),
                  e.qZA(),
                  e.TgZ(7, "div", 7),
                  e.TgZ(8, "select", 8, 9),
                  e.NdJ("ngModelChange", function (s) {
                    return (o.select.option = s);
                  }),
                  e.TgZ(10, "option", 10),
                  e.NdJ("click", function () {
                    e.CHM(a);
                    const s = e.MAs(6);
                    return o.optionselected(s.value);
                  }),
                  e._uU(11, "All Filters"),
                  e.qZA(),
                  e.TgZ(12, "option", 11),
                  e.NdJ("click", function () {
                    e.CHM(a);
                    const s = e.MAs(6);
                    return o.optionselected(s.value);
                  }),
                  e._uU(13, "Tokens"),
                  e.qZA(),
                  e.TgZ(14, "option", 12),
                  e.NdJ("click", function () {
                    e.CHM(a);
                    const s = e.MAs(6);
                    return o.optionselected(s.value);
                  }),
                  e._uU(15, "Contract"),
                  e.qZA(),
                  e.TgZ(16, "option", 13),
                  e.NdJ("click", function () {
                    e.CHM(a);
                    const s = e.MAs(6);
                    return o.optionselected(s.value);
                  }),
                  e._uU(17, "Txn ID"),
                  e.qZA(),
                  e.TgZ(18, "option", 14),
                  e.NdJ("click", function () {
                    e.CHM(a);
                    const s = e.MAs(6);
                    return o.optionselected(s.value);
                  }),
                  e._uU(19, "Address"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.YNc(20, me, 3, 1, "div", 15),
                  e.YNc(21, Te, 5, 0, "div", 16),
                  e.YNc(22, fe, 5, 0, "div", 16),
                  e.qZA(),
                  e.qZA();
              }
              2 & t &&
                (e.xp6(5),
                e.s9C("value", o.searchHash),
                e.xp6(3),
                e.Q6J("ngModel", o.select.option),
                e.xp6(12),
                e.Q6J("ngIf", o.searchData.length > 0),
                e.xp6(1),
                e.Q6J("ngIf", o.notfound),
                e.xp6(1),
                e.Q6J("ngIf", o.emptyvalue));
            },
            directives: [
              l.Fj,
              l.JJ,
              l.On,
              l.EJ,
              l.Q7,
              l.YN,
              l.Kr,
              p.O5,
              p.sg,
              u.yS,
            ],
            styles: [""],
          })),
          n
        );
      })();
      function Ae(n, i) {
        1 & n && e._UZ(0, "app-loader");
      }
      function ve(n, i) {
        1 & n && (e.TgZ(0, "span", 44), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter Email"));
      }
      function qe(n, i) {
        1 & n && (e.TgZ(0, "span", 44), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter valid Email"));
      }
      function be(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 42),
            e.YNc(1, ve, 2, 1, "span", 43),
            e.YNc(2, qe, 2, 1, "span", 43),
            e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(13);
          e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.required),
            e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.pattern);
        }
      }
      let _ = (() => {
        class n {
          constructor(t, o) {
            (this.conn = t),
              (this.alert = o),
              (this.usrmail = !1),
              (this.loader = !1);
          }
          ngOnInit() {}
          checkemail(t) {
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t) &&
              this.conn
                .postUrl("basic/subscribe_email", { email: t })
                .subscribe((a) => {
                  0 == a.success
                    ? ((this.usrmail = !1),
                      this.alert.error(a.msg, "", { timeOut: 2e3 }))
                    : (this.usrmail = !0);
                });
          }
          Subscribeemail(t) {
            (this.loader = !0),
              this.conn.postUrl("basic/subscribe", t.value).subscribe((o) => {
                1 == o.success
                  ? (this.alert.success(o.msg, "", { timeOut: 2e3 }),
                    t.resetForm())
                  : (this.alert.error(o.msg, "", { timeOut: 2e3 }),
                    t.resetForm()),
                  (this.loader = !1);
              });
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(e.Y36(h), e.Y36(A._W));
          }),
          (n.ɵcmp = e.Xpm({
            type: n,
            selectors: [["app-footer"]],
            decls: 81,
            vars: 5,
            consts: [
              [4, "ngIf"],
              [1, "footer-bg"],
              [1, "container"],
              [1, "row"],
              [1, "col-md-12", "col-lg-6", "text-center-m"],
              [1, "footer-logo", "mb-2"],
              ["width", "130", "src", "assets/images/logo.png"],
              ["autocomplete", "off"],
              ["f", "ngForm"],
              [1, "blue-t", "mb-2"],
              [1, "input-group", "site-input-group", "mb-3"],
              [
                "type",
                "email",
                "placeholder",
                "Recipient's Email",
                "name",
                "email",
                "aria-label",
                "Recipient's email",
                "aria-describedby",
                "basic-addon2",
                "ngModel",
                "",
                "required",
                "",
                "pattern",
                "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",
                1,
                "form-control",
                3,
                "ngModelChange",
              ],
              ["e", "ngModel"],
              [1, "input-group-append"],
              [
                "id",
                "basic-addon2",
                1,
                "input-group-text",
                3,
                "disabled",
                "click",
              ],
              [1, "fas", "fa-paper-plane"],
              ["class", "errMsg", 4, "ngIf"],
              [1, "col-md-12", "col-lg-6"],
              [1, "col-md-6"],
              [1, "footer-menus"],
              [1, "blue-t", "text-uppercase"],
              ["href", "/about-us", 1, "dark-t"],
              ["href", "/contact-us"],
              ["href", "/brand-assets"],
              ["href", "/terms-&-condition"],
              ["href", "/Privacy-Policy"],
              ["href", "/faq"],
              ["href", "/newsletter"],
              ["href", "/network-status"],
              ["href", "/user-guide"],
              ["href", "/white-paper"],
              ["href", "/api-document"],
              [1, "dark-bg", "py-3"],
              [
                1,
                "d-flex",
                "row",
                "align-items-center",
                "justify-content-between",
              ],
              [1, "light-t", "small"],
              [1, "col-md-6", "social-icon-whl", "text-right"],
              [1, "social-icon"],
              ["href", "#"],
              [1, "fab", "fa-facebook-f"],
              [1, "fab", "fa-twitter"],
              [1, "fab", "fa-telegram-plane"],
              [1, "fas", "fa-phone"],
              [1, "errMsg"],
              ["class", "error", 4, "ngIf"],
              [1, "error"],
            ],
            template: function (t, o) {
              if (1 & t) {
                const a = e.EpF();
                e.YNc(0, Ae, 1, 0, "app-loader", 0),
                  e.TgZ(1, "footer", 1),
                  e.TgZ(2, "div", 2),
                  e.TgZ(3, "div", 3),
                  e.TgZ(4, "div", 4),
                  e.TgZ(5, "div", 5),
                  e._UZ(6, "img", 6),
                  e.qZA(),
                  e.TgZ(7, "form", 7, 8),
                  e.TgZ(9, "div", 9),
                  e._uU(10, "Subscribe to get the latest insights"),
                  e.qZA(),
                  e.TgZ(11, "div", 10),
                  e.TgZ(12, "input", 11, 12),
                  e.NdJ("ngModelChange", function (s) {
                    return o.checkemail(s);
                  }),
                  e.qZA(),
                  e.TgZ(14, "div", 13),
                  e.TgZ(15, "button", 14),
                  e.NdJ("click", function () {
                    e.CHM(a);
                    const s = e.MAs(8);
                    return o.Subscribeemail(s);
                  }),
                  e._UZ(16, "i", 15),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.YNc(17, be, 3, 2, "div", 16),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(18, "div", 17),
                  e.TgZ(19, "div", 3),
                  e.TgZ(20, "div", 18),
                  e.TgZ(21, "ul", 19),
                  e.TgZ(22, "h6", 20),
                  e._uU(23, "Company"),
                  e.qZA(),
                  e.TgZ(24, "li"),
                  e.TgZ(25, "a", 21),
                  e._uU(26, "About Us"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(27, "li"),
                  e.TgZ(28, "a", 22),
                  e._uU(29, "Contact Us"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(30, "li"),
                  e.TgZ(31, "a", 23),
                  e._uU(32, "Brand Assets"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(33, "li"),
                  e.TgZ(34, "a", 24),
                  e._uU(35, "Terms of service"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(36, "li"),
                  e.TgZ(37, "a", 25),
                  e._uU(38, "Privacy Policy"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(39, "li"),
                  e.TgZ(40, "a", 26),
                  e._uU(41, "FAQ"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(42, "div", 18),
                  e.TgZ(43, "ul", 19),
                  e.TgZ(44, "h6", 20),
                  e._uU(45, "Resources"),
                  e.qZA(),
                  e.TgZ(46, "li"),
                  e.TgZ(47, "a", 27),
                  e._uU(48, "Newsletter"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(49, "li"),
                  e.TgZ(50, "a", 28),
                  e._uU(51, "Network Status"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(52, "li"),
                  e.TgZ(53, "a", 29),
                  e._uU(54, "User guide"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(55, "li"),
                  e.TgZ(56, "a", 30),
                  e._uU(57, "White paper"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(58, "li"),
                  e.TgZ(59, "a", 31),
                  e._uU(60, "API Documentation"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(61, "div", 32),
                  e.TgZ(62, "div", 2),
                  e.TgZ(63, "div", 33),
                  e.TgZ(64, "div", 18),
                  e.TgZ(65, "span", 34),
                  e._uU(66, "Copyright \xa9 2024 Luma | All Rights Reserved"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(67, "div", 35),
                  e.TgZ(68, "ul", 36),
                  e.TgZ(69, "li"),
                  e.TgZ(70, "a", 37),
                  e._UZ(71, "i", 38),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(72, "li"),
                  e.TgZ(73, "a", 37),
                  e._UZ(74, "i", 39),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(75, "li"),
                  e.TgZ(76, "a", 37),
                  e._UZ(77, "i", 40),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(78, "li"),
                  e.TgZ(79, "a", 37),
                  e._UZ(80, "i", 41),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA();
              }
              if (2 & t) {
                const a = e.MAs(8),
                  r = e.MAs(13);
                e.Q6J("ngIf", o.loader),
                  e.xp6(12),
                  e.ekj("is-invalid", r.invalid && r.touched),
                  e.xp6(3),
                  e.Q6J("disabled", a.invalid),
                  e.xp6(2),
                  e.Q6J(
                    "ngIf",
                    r.errors && (r.valid || r.touched || a.submitted)
                  );
              }
            },
            directives: [
              p.O5,
              l._Y,
              l.JL,
              l.F,
              l.Fj,
              l.JJ,
              l.On,
              l.Q7,
              l.c5,
              f,
            ],
            styles: [""],
          })),
          n
        );
      })();
      function ye(n, i) {
        1 & n && e._UZ(0, "app-loader");
      }
      function Ue(n, i) {
        if (
          (1 & n &&
            (e.ynx(0),
            e.TgZ(1, "div", 25),
            e.TgZ(2, "div", 8),
            e.TgZ(3, "div"),
            e.TgZ(4, "a", 26),
            e._uU(5),
            e.qZA(),
            e.qZA(),
            e.TgZ(6, "div"),
            e._uU(7),
            e.qZA(),
            e.qZA(),
            e.TgZ(8, "div", 27),
            e.TgZ(9, "div"),
            e._uU(10, "Validated By: "),
            e.TgZ(11, "span", 28),
            e._uU(12),
            e.qZA(),
            e.qZA(),
            e.TgZ(13, "div"),
            e._uU(14),
            e.qZA(),
            e.qZA(),
            e.TgZ(15, "div"),
            e.TgZ(16, "span", 29),
            e._uU(17, "0.0 AGN"),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.BQk()),
          2 & n)
        ) {
          const t = i.$implicit;
          e.xp6(4),
            e.MGl("routerLink", "/blocks-details/", t.blockNumber, ""),
            e.xp6(1),
            e.hij("#", t.blockNumber, ""),
            e.xp6(2),
            e.Oqu(t.timediff),
            e.xp6(4),
            e.s9C("title", t.miner),
            e.xp6(1),
            e.Oqu(t.miner_split),
            e.xp6(2),
            e.hij("", t.transaction_count, " txns");
        }
      }
      function xe(n, i) {
        if (
          (1 & n &&
            (e.ynx(0),
            e.TgZ(1, "div", 25),
            e.TgZ(2, "div", 8),
            e.TgZ(3, "div"),
            e.TgZ(4, "a", 30),
            e._uU(5),
            e.qZA(),
            e.qZA(),
            e.TgZ(6, "div"),
            e._uU(7),
            e.qZA(),
            e.qZA(),
            e.TgZ(8, "div", 27),
            e.TgZ(9, "div"),
            e.TgZ(10, "a", 30),
            e._uU(11),
            e.qZA(),
            e.qZA(),
            e.TgZ(12, "div"),
            e.TgZ(13, "a", 30),
            e._uU(14),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(15, "div"),
            e.TgZ(16, "span", 29),
            e._uU(17),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.BQk()),
          2 & n)
        ) {
          const t = i.$implicit;
          e.xp6(4),
            e.MGl("routerLink", "/transaction-details/", t.txID, ""),
            e.s9C("title", t.txID),
            e.xp6(1),
            e.Oqu(t.txID_split),
            e.xp6(2),
            e.Oqu(t.dateTime),
            e.xp6(3),
            e.MGl("routerLink", "/address-info/", t.from, ""),
            e.s9C("title", t.from),
            e.xp6(1),
            e.Oqu(t.fromaddress_split),
            e.xp6(2),
            e.MGl("routerLink", "/address-info/", t.to, ""),
            e.s9C("title", t.to),
            e.xp6(1),
            e.Oqu(t.toaddress_split),
            e.xp6(3),
            e.Oqu(t.amount ? t.amount : "0.00");
        }
      }
      let ke = (() => {
        class n {
          constructor(t, o, a, r) {
            (this.conn = t),
              (this.websocket = o),
              (this.route = a),
              (this.actRoute = r),
              (this.blockList = []),
              (this.transactionList = []),
              (this.latestBlock = ""),
              (this.totalTransaction = ""),
              (this.totalAccount = ""),
              (this.backUrl = Y),
              (this.totalcontracts = ""),
              (this.totaltoken = ""),
              (this.totalstaked = ""),
              (this.title = "datatables"),
              (this.blkcount = ""),
              (this.account = ""),
              (this.trns = ""),
              (this.trcon = ""),
              (this.trstack = ""),
              (this.trtoken = ""),
              (this.account24list = 0),
              (this.blaock24list = 0),
              (this.trans24list = 0),
              (this.strack24list = 0),
              (this.contract24list = 0),
              (this.token24likst = 0),
              (this.loader = !0),
              (this.transactiontable = []),
              (this.customOptions = {
                loop: !1,
                mouseDrag: !0,
                touchDrag: !0,
                pullDrag: !1,
                autoplay: !1,
                dots: !1,
                autoplayTimeout: 100,
                autoplayHoverPause: !0,
                navSpeed: 1e3,
                navText: [
                  '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                  '<i class="fa fa-angle-right" aria-hidden="true"></i>',
                ],
                responsive: {
                  0: { items: 1 },
                  400: { items: 1 },
                  740: { items: 3 },
                  940: { items: 4 },
                },
                nav: !0,
                margin: 20,
              });
          }
          emitSocket(t, o) {
            this.socket.emit(t, o);
          }
          triggerSocket(t) {
            return this.websocket.fromEvent(t).pipe((0, de.U)((o) => o));
          }
          ngOnInit() {
            (this.searchHash =
              this.actRoute.snapshot.paramMap.get("searchhash")),
              this.homePageData("pageload"),
              this.triggerSocket("blockCount").subscribe((a) => {
                (this.latestBlock = a.blockNumber),
                  (this.blaock24list = a.last24hoursblock);
                let r = a.blockData;
                (r = r.sort((s, c) => c.blockNumber - s.blockNumber)),
                  (this.blockList = r);
              }),
              this.triggerSocket("account_data").subscribe((a) => {
                (this.account24list = a.account24hours),
                  (this.totalAccount = a.totalAccount);
              }),
              this.triggerSocket("Contract_data").subscribe((a) => {
                (this.contract24list = a.contracts24hours),
                  (this.totalcontracts = a.totalcontracts);
              }),
              this.triggerSocket("Token_data").subscribe((a) => {
                (this.token24likst = a.token24hours),
                  (this.totaltoken = a.totaltoken);
              }),
              this.triggerSocket("TransactionData").subscribe((a) => {
                (this.trans24list = a.transactions24hours),
                  this.homePageData("none");
              }),
              new (pe())(document.querySelector("#chart"), {
                chart: { type: "line", width: "430px", height: "180px" },
                series: [
                  {
                    name: "Sales",
                    data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
                  },
                ],
                xaxis: {
                  categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                  ],
                  abiencodedaxisBorder: { show: !1 },
                },
                tooltip: { enabled: !1 },
              }).render();
          }
          homePageData(t) {
            this.conn.getUrl("blocks/getHomePageData").subscribe((o) => {
              if (1 == o.success) {
                let M = o.result.blockData;
                (M = M.sort((q, O) => O.blockNumber - q.blockNumber)),
                  (this.blockList = M);
                var a = this.blockList[0].blockNumber;
                this.transactionList = o.result.listTransactions;
                var r = parseInt(a) - 4e3,
                  s = parseInt(a);
                if (
                  ("pageload" == t
                    ? (this.blkcount = setInterval(() => {
                        (this.latestBlock = r += 50),
                          r == s && clearInterval(this.blkcount);
                      }, 10))
                    : (this.latestBlock = a),
                  o.result.totalAccount > 0)
                ) {
                  var c = 0,
                    d = parseInt(o.result.totalAccount);
                  "pageload" == t
                    ? (this.account = setInterval(() => {
                        (this.totalAccount = c += 1),
                          c == d && clearInterval(this.account);
                      }, 10))
                    : (this.totalAccount = o.result.totalAccount);
                } else this.totalAccount = o.result.totalAccount;
                if (o.result.transactions > 0) {
                  var Z = parseInt(o.result.transactions) - 50,
                    y = parseInt(o.result.transactions);
                  "pageload" == t
                    ? (this.trns = setInterval(() => {
                        (this.totalTransaction = Z += 1),
                          Z == y && clearInterval(this.trns);
                      }, 10))
                    : (this.totalTransaction = o.result.transactions);
                } else this.totalTransaction = o.result.transactions;
                if (o.result.totalcontracts > 0) {
                  var U = 0,
                    k = parseInt(o.result.totalcontracts);
                  "pageload" == t
                    ? (this.trcon = setInterval(() => {
                        (this.totalcontracts = U += 1),
                          U == k && clearInterval(this.trcon);
                      }, 10))
                    : (this.totalcontracts = o.result.totalcontracts);
                } else this.totalcontracts = o.result.totalcontracts;
                if (o.result.totalstaked > 0) {
                  var v = 0,
                    N = parseInt(o.result.totalstaked);
                  "pageload" == t
                    ? (this.trstack = setInterval(() => {
                        (this.totalstaked = v += 1),
                          v == N && clearInterval(this.trstack);
                      }, 10))
                    : (this.totalstaked = o.result.totalstaked);
                } else this.totalstaked = o.result.totalstaked;
                if (o.result.totaltoken > 0) {
                  var C = 0,
                    w = parseInt(o.result.totaltoken);
                  "pageload" == t
                    ? (this.trtoken = setInterval(() => {
                        (this.totaltoken = C += 1),
                          C == w && clearInterval(this.trtoken);
                      }, 10))
                    : (this.totaltoken = o.result.totaltoken);
                } else this.totaltoken = o.result.totaltoken;
                (this.account24list = o.result.account24hours),
                  (this.blaock24list = o.result.blockData24hours),
                  (this.trans24list = o.result.transactions24hours),
                  (this.contract24list = o.result.contracts24hours),
                  (this.token24likst = o.result.token24hours),
                  (this.strack24list =
                    0 == o.result.staked24hours.length
                      ? 0
                      : o.result.staked24hours[0].totals / 1e6),
                  (this.loader = !1);
              }
            });
          }
          ngOnDestroy() {
            this.id && clearInterval(this.id),
              this.id1 && clearInterval(this.id1),
              null != this.socket && this.socket.close();
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(
              e.Y36(h),
              e.Y36(K.sk),
              e.Y36(u.F0),
              e.Y36(u.gz)
            );
          }),
          (n.ɵcmp = e.Xpm({
            type: n,
            selectors: [["app-home"]],
            decls: 92,
            vars: 9,
            consts: [
              [4, "ngIf"],
              [1, "top-banner"],
              [1, "text-center", "h4", "text-white", "text-uppercase", "wf"],
              [1, "searchbarwhl"],
              [1, "pt-5"],
              [1, "container"],
              [1, "white-bg"],
              [1, "row", "d-flex"],
              [1, "col-lg-4"],
              [1, "d-flex", "p-4", "borderright", "my-3"],
              [1, "mr-2"],
              ["width", "20", "src", "assets/images/eth.svg"],
              [1, "d-flex", "justify-content-between", "w-100"],
              [1, "text-right"],
              [1, "d-flex", "p-4", "my-3", "borderright"],
              [1, "p-4"],
              ["id", "chart"],
              [1, "row"],
              [1, "col-lg-6"],
              [1, "border", "p-3"],
              [1, "h5", "wf"],
              [4, "ngFor", "ngForOf"],
              [1, "d-flex", "justify-content-center", "text-uppercase"],
              ["routerLink", "/blocks", 1, "btn", "b-0", "pb-0", "mt-1"],
              ["routerLink", "/transactions", 1, "btn", "b-0", "pb-0", "mt-1"],
              [
                1,
                "d-flex",
                "align-items-center",
                "justify-content-between",
                "border-bottom",
                "py-3",
              ],
              [3, "routerLink"],
              [1, "col-lg-5"],
              [3, "title"],
              [1, "tag"],
              [3, "routerLink", "title"],
            ],
            template: function (t, o) {
              1 & t &&
                (e.YNc(0, ye, 1, 0, "app-loader", 0),
                e._UZ(1, "app-header"),
                e.TgZ(2, "section", 1),
                e.TgZ(3, "div", 2),
                e._uU(4, "The Blockchain Explorer"),
                e.qZA(),
                e.TgZ(5, "div", 3),
                e._UZ(6, "app-searchbar"),
                e.qZA(),
                e.qZA(),
                e.TgZ(7, "section", 4),
                e.TgZ(8, "div", 5),
                e.TgZ(9, "div", 6),
                e.TgZ(10, "div", 7),
                e.TgZ(11, "div", 8),
                e.TgZ(12, "div", 9),
                e.TgZ(13, "div", 10),
                e._UZ(14, "img", 11),
                e.qZA(),
                e.TgZ(15, "div"),
                e.TgZ(16, "div"),
                e._uU(17, "LUMA PRICE"),
                e.qZA(),
                e.TgZ(18, "div"),
                e._uU(19, "100.3"),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e._UZ(20, "hr"),
                e.TgZ(21, "div", 9),
                e.TgZ(22, "div", 10),
                e._UZ(23, "img", 11),
                e.qZA(),
                e.TgZ(24, "div", 12),
                e.TgZ(25, "div"),
                e.TgZ(26, "div"),
                e._uU(27, "VERIFIED CONTRACT"),
                e.qZA(),
                e.TgZ(28, "div"),
                e._uU(29),
                e.qZA(),
                e.qZA(),
                e.TgZ(30, "div", 13),
                e.TgZ(31, "div"),
                e._uU(32, "24h"),
                e.qZA(),
                e.TgZ(33, "div"),
                e._uU(34),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.TgZ(35, "div", 8),
                e.TgZ(36, "div", 14),
                e.TgZ(37, "div", 10),
                e._UZ(38, "img", 11),
                e.qZA(),
                e.TgZ(39, "div", 12),
                e.TgZ(40, "div"),
                e.TgZ(41, "div"),
                e._uU(42, "TRANSACTIONS"),
                e.qZA(),
                e.TgZ(43, "div"),
                e._uU(44),
                e.qZA(),
                e.qZA(),
                e.TgZ(45, "div", 13),
                e.TgZ(46, "div"),
                e._uU(47, "24h"),
                e.qZA(),
                e.TgZ(48, "div"),
                e._uU(49),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e._UZ(50, "hr"),
                e.TgZ(51, "div", 9),
                e.TgZ(52, "div", 10),
                e._UZ(53, "img", 11),
                e.qZA(),
                e.TgZ(54, "div", 12),
                e.TgZ(55, "div"),
                e.TgZ(56, "div"),
                e._uU(57, "LAST FINALIZED BLOCK"),
                e.qZA(),
                e.TgZ(58, "div"),
                e._uU(59),
                e.qZA(),
                e.qZA(),
                e.TgZ(60, "div", 13),
                e.TgZ(61, "div"),
                e._uU(62, "24h"),
                e.qZA(),
                e.TgZ(63, "div"),
                e._uU(64),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.TgZ(65, "div", 8),
                e.TgZ(66, "div", 15),
                e._uU(67, " TRANSACTION HISTORY IN 14 DAYS "),
                e.qZA(),
                e.TgZ(68, "div"),
                e._UZ(69, "div", 16),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.TgZ(70, "section"),
                e.TgZ(71, "div", 5),
                e.TgZ(72, "div", 17),
                e.TgZ(73, "div", 18),
                e.TgZ(74, "div", 19),
                e.TgZ(75, "div", 20),
                e._uU(76, " Latest Blocks"),
                e.qZA(),
                e._UZ(77, "hr"),
                e.YNc(78, Ue, 18, 6, "ng-container", 21),
                e.TgZ(79, "div", 22),
                e.TgZ(80, "button", 23),
                e._uU(81, "View All Blocks "),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.TgZ(82, "div", 18),
                e.TgZ(83, "div", 19),
                e.TgZ(84, "div", 20),
                e._uU(85, " Latest Transactions"),
                e.qZA(),
                e._UZ(86, "hr"),
                e.YNc(87, xe, 18, 11, "ng-container", 21),
                e.TgZ(88, "div", 22),
                e.TgZ(89, "button", 24),
                e._uU(90, "View All Transactions "),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e._UZ(91, "app-footer")),
                2 & t &&
                  (e.Q6J("ngIf", o.loader),
                  e.xp6(29),
                  e.Oqu(o.totalcontracts),
                  e.xp6(5),
                  e.hij("+", o.contract24list, ""),
                  e.xp6(10),
                  e.Oqu(o.totalTransaction),
                  e.xp6(5),
                  e.hij("+", o.trans24list, ""),
                  e.xp6(10),
                  e.Oqu(o.latestBlock),
                  e.xp6(5),
                  e.hij("+", o.blaock24list, ""),
                  e.xp6(14),
                  e.Q6J("ngForOf", o.blockList),
                  e.xp6(9),
                  e.Q6J("ngForOf", o.transactionList));
            },
            directives: [p.O5, g, m, p.sg, u.rH, _, f, u.yS],
            styles: [
              ".carousel-inner[_ngcontent-%COMP%]{background:#242837;background:#efecf9;padding:15px;border-radius:8px}.tag[_ngcontent-%COMP%]{background-color:#3c4155;background-color:#785ad9;padding:3px 10px;border-radius:3px;font-weight:600;font-size:11px;line-height:normal;color:#fff}.pageination[_ngcontent-%COMP%]{float:right;padding-top:0;margin-top:16px;margin-right:10px}",
            ],
          })),
          n
        );
      })();
      var E = T(6239);
      const Ce = ["template1"];
      function we(n, i) {
        1 & n && e._UZ(0, "app-loader");
      }
      function Me(n, i) {
        1 & n && (e.TgZ(0, "span", 24), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter Email"));
      }
      function Ie(n, i) {
        1 & n && (e.TgZ(0, "span", 24), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter valid Email"));
      }
      function Ne(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 22),
            e.YNc(1, Me, 2, 1, "span", 23),
            e.YNc(2, Ie, 2, 1, "span", 23),
            e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(15);
          e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.required),
            e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.pattern);
        }
      }
      function Oe(n, i) {
        1 & n && (e.TgZ(0, "span"), e._UZ(1, "i", 25), e.qZA());
      }
      function Je(n, i) {
        1 & n && (e.TgZ(0, "span"), e._UZ(1, "i", 26), e.qZA());
      }
      function Re(n, i) {
        1 & n && (e.TgZ(0, "span", 24), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter Password"));
      }
      function Ee(n, i) {
        1 & n && (e.TgZ(0, "span", 24), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("password must be 8-20 letters"));
      }
      function Se(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 22),
            e.YNc(1, Re, 2, 1, "span", 23),
            e.YNc(2, Ee, 2, 1, "span", 23),
            e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(19);
          e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.required),
            e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.minlength);
        }
      }
      function Le(n, i) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "button", 27),
            e.NdJ("click", function () {
              e.CHM(t);
              const a = e.oxw(),
                r = e.MAs(12);
              return a.executeAction("login", r);
            }),
            e._uU(1, "Submit"),
            e.qZA();
        }
        if (2 & n) {
          e.oxw();
          const t = e.MAs(12);
          e.Q6J("disabled", t.invalid);
        }
      }
      let ae = (() => {
        class n {
          constructor(t, o, a, r, s) {
            (this.conn = t),
              (this.alert = o),
              (this.route = a),
              (this.actRoute = r),
              (this.recaptchaV3Service = s),
              (this.loginLoader = !1),
              (this.loginToken = ""),
              (this.captchaVal = !1),
              (this.captcha = ""),
              (this.tkn = localStorage.getItem("Tfa")),
              (this.etp = localStorage.getItem("EmailOTP")),
              (this.loader = !1),
              (this.recentToken = ""),
              (this.executionLog = []),
              this.conn.loggedIn() && this.route.navigate(["blockchain"]),
              null != this.tkn && localStorage.clear(),
              null != this.etp && localStorage.clear(),
              "activate_account" == r.snapshot.url[0].path &&
                this.actRoute.params.subscribe((c) => {
                  (this.loginToken =
                    this.actRoute.snapshot.queryParamMap.get("token")),
                    null == this.loginToken ||
                    null == this.loginToken ||
                    "undefined" == this.loginToken
                      ? (this.alert.error("Invalid request", "", {
                          timeOut: 2e3,
                        }),
                        this.route.navigate(["login"]))
                      : this.conn
                          .postUrl("basic/activateEmail", {
                            token: this.loginToken,
                          })
                          .subscribe((d) => {
                            1 == d.success
                              ? this.alert.success(d.msg, "", { timeOut: 2e3 })
                              : this.alert.error(d.msg, "", { timeOut: 2e3 }),
                              this.route.navigate(["login"]);
                          });
                });
          }
          executeAction(t, o) {
            (this.loader = !0),
              this.singleExecutionSubscription &&
                this.singleExecutionSubscription.unsubscribe(),
              (this.singleExecutionSubscription = this.recaptchaV3Service
                .execute(t)
                .subscribe(
                  (a) => {
                    (this.recentToken = a),
                      (this.recentError = void 0),
                      this.submitFunc(o),
                      (this.loader = !1);
                  },
                  (a) => {
                    (this.recentToken = ""),
                      (this.recentError = { error: a }),
                      (this.loader = !1);
                  }
                ));
          }
          ngOnInit() {
            this.allExecutionsSubscription =
              this.recaptchaV3Service.onExecute.subscribe((t) =>
                this.executionLog.push(t)
              );
          }
          ngOnDestroy() {
            this.allExecutionsSubscription &&
              this.allExecutionsSubscription.unsubscribe(),
              this.allExecutionErrorsSubscription &&
                this.allExecutionErrorsSubscription.unsubscribe(),
              this.singleExecutionSubscription &&
                this.singleExecutionSubscription.unsubscribe();
          }
          formatToken(t) {
            return t ? `${t.substr(0, 7)}...${t.substr(-7)}` : "(empty)";
          }
          showHidePassword(t) {
            "password" == t
              ? (this.showPassword = !this.showPassword)
              : (this.confirmPassword = !this.confirmPassword);
          }
          submitFunc(t) {
            (this.loginLoader = !0),
              this.conn.postUrl("basic/login", t.value).subscribe((a) => {
                1 == a.success
                  ? (localStorage.setItem("H1gh-VaLTokEN", a.token),
                    localStorage.setItem("Token", a.ttoken),
                    this.route.navigate(["asset"]),
                    this.alert.success("Login Success!", "", { timeOut: 2e3 }))
                  : 2 == a.success
                  ? (localStorage.setItem("Tfa", a.ttoken),
                    this.alert.success(
                      "Please login with Authentication code",
                      "",
                      { timeOut: 2e3 }
                    ),
                    this.route.navigate(["/tfa_login"], {
                      queryParams: { token: a.ttoken },
                    }))
                  : this.alert.error(a.msg, "", { timeOut: 2e3 }),
                  t.resetForm(),
                  (this.loginLoader = !1);
              });
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(
              e.Y36(h),
              e.Y36(A._W),
              e.Y36(u.F0),
              e.Y36(u.gz),
              e.Y36(E.YC)
            );
          }),
          (n.ɵcmp = e.Xpm({
            type: n,
            selectors: [["app-login"]],
            viewQuery: function (t, o) {
              if ((1 & t && e.Gf(Ce, 5), 2 & t)) {
                let a;
                e.iGM((a = e.CRH())) && (o.template = a.first);
              }
            },
            decls: 36,
            vars: 14,
            consts: [
              [4, "ngIf"],
              [1, "container"],
              [1, "form-box-s", "white-bg", "p-4"],
              [1, "text-center", "mb-5"],
              [1, "blue-t"],
              [1, "grey-t"],
              ["autocomplete", "off", "novalidate", "", 1, "site-form"],
              ["login", "ngForm"],
              [1, "form-group"],
              [
                "type",
                "email",
                "name",
                "email",
                "autocomplete",
                "off",
                "placeholder",
                "Enter email",
                "ngModel",
                "",
                "required",
                "",
                "pattern",
                "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",
                1,
                "form-control",
                3,
                "placeholder",
              ],
              ["e", "ngModel"],
              ["class", "errMsg", 4, "ngIf"],
              [
                "placeholder",
                "Password",
                "name",
                "password",
                "ngModel",
                "",
                "required",
                "",
                "autocomplete",
                "off",
                1,
                "form-control",
                3,
                "type",
                "minlength",
                "maxlength",
              ],
              ["p", "ngModel"],
              [1, "eye-icon", 3, "click"],
              [1, "form-group", "mb-5", "mt-3"],
              [
                "type",
                "submit",
                "class",
                "btn btn-block blue-btn btn-lg w-f text-uppercase",
                3,
                "disabled",
                "click",
                4,
                "ngIf",
              ],
              [1, "form-group", "mb-4"],
              [1, "text-center", "dark-t"],
              ["href", "#", "routerLink", "/forgotpassword"],
              [1, "text-center", "grey-t"],
              ["href", "#", "routerLink", "/register", 1, "dark-t"],
              [1, "errMsg"],
              ["class", "error", 4, "ngIf"],
              [1, "error"],
              [1, "far", "fa-eye"],
              [1, "fas", "fa-eye-slash"],
              [
                "type",
                "submit",
                1,
                "btn",
                "btn-block",
                "blue-btn",
                "btn-lg",
                "w-f",
                "text-uppercase",
                3,
                "disabled",
                "click",
              ],
            ],
            template: function (t, o) {
              if (
                (1 & t &&
                  (e.YNc(0, we, 1, 0, "app-loader", 0),
                  e._UZ(1, "app-header"),
                  e._UZ(2, "app-searchbar"),
                  e.TgZ(3, "section"),
                  e.TgZ(4, "div", 1),
                  e.TgZ(5, "div", 2),
                  e.TgZ(6, "div", 3),
                  e.TgZ(7, "h2", 4),
                  e._uU(8, "Welcome back !"),
                  e.qZA(),
                  e.TgZ(9, "h6", 5),
                  e._uU(10, "Login to your account"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(11, "form", 6, 7),
                  e.TgZ(13, "div", 8),
                  e._UZ(14, "input", 9, 10),
                  e.YNc(16, Ne, 3, 2, "div", 11),
                  e.qZA(),
                  e.TgZ(17, "div", 8),
                  e._UZ(18, "input", 12, 13),
                  e.TgZ(20, "div", 14),
                  e.NdJ("click", function () {
                    return o.showHidePassword("password");
                  }),
                  e.YNc(21, Oe, 2, 0, "span", 0),
                  e.YNc(22, Je, 2, 0, "span", 0),
                  e.qZA(),
                  e.YNc(23, Se, 3, 2, "div", 11),
                  e.qZA(),
                  e.TgZ(24, "div", 15),
                  e.YNc(25, Le, 2, 1, "button", 16),
                  e.qZA(),
                  e.TgZ(26, "div", 17),
                  e.TgZ(27, "div", 18),
                  e.TgZ(28, "a", 19),
                  e._uU(29, "Forgot Password ?"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(30, "div", 8),
                  e.TgZ(31, "div", 20),
                  e._uU(32, "If you don\u2019t have an account "),
                  e.TgZ(33, "a", 21),
                  e._uU(34, "Register"),
                  e.qZA(),
                  e._uU(35, " Now"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA()),
                2 & t)
              ) {
                const a = e.MAs(12),
                  r = e.MAs(15),
                  s = e.MAs(19);
                e.Q6J("ngIf", o.loader),
                  e.xp6(14),
                  e.ekj("is-invalid", r.invalid && r.touched),
                  e.s9C("placeholder", "Enter email"),
                  e.xp6(2),
                  e.Q6J(
                    "ngIf",
                    r.errors && (r.valid || r.touched || a.submitted)
                  ),
                  e.xp6(2),
                  e.ekj("is-invalid", s.invalid && s.touched),
                  e.Q6J("type", o.showPassword ? "text" : "password")(
                    "minlength",
                    8
                  )("maxlength", 20),
                  e.xp6(3),
                  e.Q6J("ngIf", o.showPassword),
                  e.xp6(1),
                  e.Q6J("ngIf", !o.showPassword),
                  e.xp6(1),
                  e.Q6J(
                    "ngIf",
                    s.errors && (s.valid || s.touched || a.submitted)
                  ),
                  e.xp6(2),
                  e.Q6J("ngIf", !o.loginLoader);
              }
            },
            directives: [
              p.O5,
              g,
              m,
              l._Y,
              l.JL,
              l.F,
              l.Fj,
              l.JJ,
              l.On,
              l.Q7,
              l.c5,
              l.wO,
              l.nD,
              u.yS,
              f,
            ],
            styles: [""],
          })),
          n
        );
      })();
      function Ye(n, i) {
        1 & n && e._UZ(0, "app-loader");
      }
      function Qe(n, i) {
        1 & n && (e.TgZ(0, "span", 33), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter username"));
      }
      function Pe(n, i) {
        1 & n && (e.TgZ(0, "span", 33), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter valid username"));
      }
      function Fe(n, i) {
        1 & n && (e.TgZ(0, "span", 33), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Username must be 3 letters"));
      }
      function De(n, i) {
        1 & n && (e.TgZ(0, "span", 33), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Username must be 3-20 letters"));
      }
      function He(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 31),
            e.YNc(1, Qe, 2, 1, "span", 32),
            e.YNc(2, Pe, 2, 1, "span", 32),
            e.YNc(3, Fe, 2, 1, "span", 32),
            e.YNc(4, De, 2, 1, "span", 32),
            e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(16);
          e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.required),
            e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.pattern),
            e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.minlength),
            e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.maxlength);
        }
      }
      function Be(n, i) {
        1 & n && (e.TgZ(0, "span", 33), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter Email"));
      }
      function je(n, i) {
        1 & n && (e.TgZ(0, "span", 33), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter valid Email"));
      }
      function Ve(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 31),
            e.YNc(1, Be, 2, 1, "span", 32),
            e.YNc(2, je, 2, 1, "span", 32),
            e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(20);
          e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.required),
            e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.pattern);
        }
      }
      function Ge(n, i) {
        1 & n && (e.TgZ(0, "span"), e._UZ(1, "i", 34), e.qZA());
      }
      function ze(n, i) {
        1 & n && (e.TgZ(0, "span"), e._UZ(1, "i", 35), e.qZA());
      }
      function We(n, i) {
        1 & n && (e.TgZ(0, "span", 33), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter Password"));
      }
      function $e(n, i) {
        1 & n && (e.TgZ(0, "span", 33), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("password must be 8-20 letters"));
      }
      function Xe(n, i) {
        1 & n && (e.TgZ(0, "span", 33), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("password must be 8-20 letters"));
      }
      function Ke(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 31),
            e.YNc(1, We, 2, 1, "span", 32),
            e.YNc(2, $e, 2, 1, "span", 32),
            e.YNc(3, Xe, 2, 1, "span", 32),
            e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(25);
          e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.required),
            e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.minlength),
            e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.maxlength);
        }
      }
      function et(n, i) {
        1 & n && (e.TgZ(0, "span", 33), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter atleast one lowercase"));
      }
      function tt(n, i) {
        1 & n && (e.TgZ(0, "span", 33), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter atleast one uppercase"));
      }
      function nt(n, i) {
        1 & n && (e.TgZ(0, "span", 33), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("password must be 8-20 characters"));
      }
      function ot(n, i) {
        1 & n && (e.TgZ(0, "span", 33), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter atleast one number"));
      }
      function it(n, i) {
        1 & n && (e.TgZ(0, "span", 33), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter atleast one special character"));
      }
      function at(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 31),
            e.YNc(1, et, 2, 1, "span", 32),
            e.YNc(2, tt, 2, 1, "span", 32),
            e.YNc(3, nt, 2, 1, "span", 32),
            e.YNc(4, ot, 2, 1, "span", 32),
            e.YNc(5, it, 2, 1, "span", 32),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(1),
            e.Q6J("ngIf", !t.lower),
            e.xp6(1),
            e.Q6J("ngIf", !t.upper),
            e.xp6(1),
            e.Q6J("ngIf", !t.len),
            e.xp6(1),
            e.Q6J("ngIf", !t.num),
            e.xp6(1),
            e.Q6J("ngIf", !t.spec);
        }
      }
      function rt(n, i) {
        1 & n && (e.TgZ(0, "span"), e._UZ(1, "i", 34), e.qZA());
      }
      function st(n, i) {
        1 & n && (e.TgZ(0, "span"), e._UZ(1, "i", 35), e.qZA());
      }
      function lt(n, i) {
        1 & n && (e.TgZ(0, "span", 33), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter Confirm Password"));
      }
      function ct(n, i) {
        1 & n && (e.TgZ(0, "span", 33), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Confirm password must be 8-20 letters"));
      }
      function dt(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 31),
            e.YNc(1, lt, 2, 1, "span", 32),
            e.YNc(2, ct, 2, 1, "span", 32),
            e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(33);
          e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.required),
            e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.maxlength);
        }
      }
      function ut(n, i) {
        1 & n && (e.TgZ(0, "span", 33), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Password does not match"));
      }
      function pt(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 31), e.YNc(1, ut, 2, 1, "span", 32), e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(1), e.Q6J("ngIf", !t.checkpwd);
        }
      }
      function gt(n, i) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "button", 36),
            e.NdJ("click", function () {
              e.CHM(t);
              const a = e.oxw(),
                r = e.MAs(12);
              return a.executeAction("signup", r);
            }),
            e._uU(1, "Submit"),
            e.qZA();
        }
        if (2 & n) {
          const t = e.oxw(),
            o = e.MAs(12);
          e.Q6J(
            "disabled",
            o.invalid ||
              !t.lower ||
              !t.upper ||
              !t.len ||
              !t.num ||
              !t.spec ||
              !t.checkpwd
          );
        }
      }
      let Zt = (() => {
        class n {
          constructor(t, o, a, r, s) {
            (this.conn = t),
              (this.alert = o),
              (this.route = a),
              (this.actRoute = r),
              (this.recaptchaV3Service = s),
              (this.lower = !0),
              (this.upper = !0),
              (this.len = !0),
              (this.num = !0),
              (this.spec = !0),
              (this.captchaVal = !1),
              (this.captcha = ""),
              (this.usrname = !0),
              (this.usrmail = !1),
              (this.refId = ""),
              (this.signLoader = !1),
              (this.loader = !1),
              (this.checkpwd = !0),
              (this.recentToken = ""),
              (this.executionLog = []),
              this.conn.loggedIn() && this.route.navigate(["dashboard"]);
          }
          ngOnInit() {
            this.allExecutionsSubscription =
              this.recaptchaV3Service.onExecute.subscribe((t) =>
                this.executionLog.push(t)
              );
          }
          ngOnDestroy() {
            this.allExecutionsSubscription &&
              this.allExecutionsSubscription.unsubscribe(),
              this.allExecutionErrorsSubscription &&
                this.allExecutionErrorsSubscription.unsubscribe(),
              this.singleExecutionSubscription &&
                this.singleExecutionSubscription.unsubscribe();
          }
          formatToken(t) {
            return t ? `${t.substr(0, 7)}...${t.substr(-7)}` : "(empty)";
          }
          checkuser(t) {
            /^[a-zA-Z]+$/.test(t) &&
              ((null == t ? void 0 : t.length) >= 3
                ? this.conn
                    .postUrl("basic/findUsername", { username: t })
                    .subscribe((a) => {
                      0 == a.success
                        ? ((this.usrname = !1),
                          this.alert.error(a.msg, "", { timeOut: 2e3 }))
                        : (this.usrname = !0);
                    })
                : (this.usrname = !1));
          }
          checkemail(t) {
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t) &&
              this.conn
                .postUrl("basic/findEmail", { email: t })
                .subscribe((a) => {
                  0 == a.success
                    ? ((this.usrmail = !1),
                      this.alert.error(a.msg, "", { timeOut: 2e3 }))
                    : (this.usrmail = !0);
                });
          }
          typePwd(t) {
            if (null != t && null != t && "" != t) {
              (this.pwd = t),
                (this.lower = !0),
                (this.upper = !0),
                (this.len = !0),
                (this.num = !0),
                (this.spec = !0);
              let o = /[a-z]/g,
                a = /[A-Z]/g,
                r = /[0-9]/g,
                s = /\W|_/g;
              if (t.length < 8) return void (this.len = !1);
              if (null == t.match(o)) return void (this.lower = !1);
              if (null == t.match(a)) return void (this.upper = !1);
              if (null == t.match(r)) return void (this.num = !1);
              if (null == t.match(s)) return void (this.spec = !1);
            }
          }
          checkpassword(t) {
            null != t &&
              null != t &&
              "" != t &&
              (this.checkpwd = this.pwd == t);
          }
          showHidePassword(t) {
            "password" == t
              ? (this.showPassword = !this.showPassword)
              : (this.confirmPassword = !this.confirmPassword);
          }
          executeAction(t, o) {
            (this.loader = !0),
              this.singleExecutionSubscription &&
                this.singleExecutionSubscription.unsubscribe(),
              (this.singleExecutionSubscription = this.recaptchaV3Service
                .execute(t)
                .subscribe(
                  (a) => {
                    (this.recentToken = a),
                      (this.recentError = void 0),
                      this.submitFunc(o),
                      (this.loader = !1);
                  },
                  (a) => {
                    (this.recentToken = ""),
                      (this.recentError = { error: a }),
                      (this.loader = !1);
                  }
                ));
          }
          submitFunc(t) {
            if (this.usrname)
              if (this.usrmail) {
                this.signLoader = !0;
                var o = t.value;
                (o.refer = this.refId),
                  this.conn.postUrl("basic/signup", o).subscribe((a) => {
                    1 == a.success
                      ? (this.alert.success(a.msg, "", { timeOut: 2e3 }),
                        this.route.navigate(["login"]),
                        t.resetForm())
                      : this.alert.error(a.msg, "", { timeOut: 2e3 }),
                      (this.signLoader = !1);
                  });
              } else
                this.alert.error("Email already exists", "", { timeOut: 2e3 });
            else
              this.alert.error("username already exists", "", { timeOut: 2e3 });
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(
              e.Y36(h),
              e.Y36(A._W),
              e.Y36(u.F0),
              e.Y36(u.gz),
              e.Y36(E.YC)
            );
          }),
          (n.ɵcmp = e.Xpm({
            type: n,
            selectors: [["app-register"]],
            decls: 56,
            vars: 29,
            consts: [
              [4, "ngIf"],
              [1, "container"],
              [1, "form-box-m", "white-bg", "p-4"],
              [1, "text-center", "mb-5"],
              [1, "blue-t"],
              [1, "grey-t"],
              ["autocomplete", "off", 1, "site-form"],
              ["f", "ngForm"],
              [1, "row"],
              [1, "form-group", "col-md-6"],
              [
                "type",
                "email",
                "placeholder",
                "User Name",
                "name",
                "username",
                "ngModel",
                "",
                "required",
                "",
                "pattern",
                "[a-zA-Z]*",
                1,
                "form-control",
                3,
                "minlength",
                "maxlength",
                "ngModelChange",
              ],
              ["u", "ngModel"],
              ["class", "errMsg", 4, "ngIf"],
              [
                "type",
                "email",
                "placeholder",
                "Email",
                "name",
                "email",
                "ngModel",
                "",
                "required",
                "",
                "pattern",
                "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",
                1,
                "form-control",
                3,
                "ngModelChange",
              ],
              ["e", "ngModel"],
              [
                "placeholder",
                "Password",
                "name",
                "password",
                "ngModel",
                "",
                "required",
                "",
                "autocomplete",
                "off",
                1,
                "form-control",
                3,
                "type",
                "maxlength",
                "minlength",
                "ngModelChange",
                "input",
              ],
              ["password", "ngModel"],
              [1, "eye-icon", 3, "click"],
              [
                "placeholder",
                "Confirm Password",
                "name",
                "confirm_password",
                "ngModel",
                "",
                "required",
                "",
                "autocomplete",
                "off",
                1,
                "form-control",
                3,
                "type",
                "maxlength",
                "ngModelChange",
              ],
              ["cp", "ngModel"],
              [1, "form-check", "text-center", "my-4"],
              [
                "type",
                "checkbox",
                "id",
                "exampleCheck1",
                "name",
                "agree",
                "value",
                "on",
                "ngModel",
                "",
                "required",
                "",
                1,
                "form-check-input",
              ],
              ["c", "ngModel"],
              ["for", "exampleCheck1", 1, "form-check-label"],
              ["href", "#", "routerLink", "/Privacy-Policy", 1, "dark-t"],
              ["href", "#", "routerLink", "/terms-&-condition", 1, "dark-t"],
              [1, "form-group", "mb-5", "mt-3", "text-center"],
              [
                "type",
                "submit",
                "class",
                "btn col-md-6 blue-btn btn-lg w-f text-uppercase",
                3,
                "disabled",
                "click",
                4,
                "ngIf",
              ],
              [1, "form-group"],
              [1, "text-center", "grey-t"],
              ["href", "#", "routerLink", "/login", 1, "dark-t"],
              [1, "errMsg"],
              ["class", "error", 4, "ngIf"],
              [1, "error"],
              [1, "far", "fa-eye"],
              [1, "fas", "fa-eye-slash"],
              [
                "type",
                "submit",
                1,
                "btn",
                "col-md-6",
                "blue-btn",
                "btn-lg",
                "w-f",
                "text-uppercase",
                3,
                "disabled",
                "click",
              ],
            ],
            template: function (t, o) {
              if (1 & t) {
                const a = e.EpF();
                e.YNc(0, Ye, 1, 0, "app-loader", 0),
                  e._UZ(1, "app-header"),
                  e._UZ(2, "app-searchbar"),
                  e.TgZ(3, "section"),
                  e.TgZ(4, "div", 1),
                  e.TgZ(5, "div", 2),
                  e.TgZ(6, "div", 3),
                  e.TgZ(7, "h2", 4),
                  e._uU(8, "Register a New Account"),
                  e.qZA(),
                  e.TgZ(9, "h6", 5),
                  e._uU(10, "Fill out the form to get started."),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(11, "form", 6, 7),
                  e.TgZ(13, "div", 8),
                  e.TgZ(14, "div", 9),
                  e.TgZ(15, "input", 10, 11),
                  e.NdJ("ngModelChange", function (s) {
                    return o.checkuser(s);
                  }),
                  e.qZA(),
                  e.YNc(17, He, 5, 4, "div", 12),
                  e.qZA(),
                  e.TgZ(18, "div", 9),
                  e.TgZ(19, "input", 13, 14),
                  e.NdJ("ngModelChange", function (s) {
                    return o.checkemail(s);
                  }),
                  e.qZA(),
                  e.YNc(21, Ve, 3, 2, "div", 12),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(22, "div", 8),
                  e.TgZ(23, "div", 9),
                  e.TgZ(24, "input", 15, 16),
                  e.NdJ("ngModelChange", function (s) {
                    return o.typePwd(s);
                  })("input", function () {
                    return e.CHM(a), e.MAs(33).control.updateValueAndValidity();
                  }),
                  e.qZA(),
                  e.TgZ(26, "div", 17),
                  e.NdJ("click", function () {
                    return o.showHidePassword("password");
                  }),
                  e.YNc(27, Ge, 2, 0, "span", 0),
                  e.YNc(28, ze, 2, 0, "span", 0),
                  e.qZA(),
                  e.YNc(29, Ke, 4, 3, "div", 12),
                  e.YNc(30, at, 6, 5, "div", 12),
                  e.qZA(),
                  e.TgZ(31, "div", 9),
                  e.TgZ(32, "input", 18, 19),
                  e.NdJ("ngModelChange", function (s) {
                    return o.checkpassword(s);
                  }),
                  e.qZA(),
                  e.TgZ(34, "div", 17),
                  e.NdJ("click", function () {
                    return o.showHidePassword("confirmPassword");
                  }),
                  e.YNc(35, rt, 2, 0, "span", 0),
                  e.YNc(36, st, 2, 0, "span", 0),
                  e.qZA(),
                  e.YNc(37, dt, 3, 2, "div", 12),
                  e.YNc(38, pt, 2, 1, "div", 12),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(39, "div", 20),
                  e._UZ(40, "input", 21, 22),
                  e.TgZ(42, "label", 23),
                  e._uU(43, "I Agree "),
                  e.TgZ(44, "a", 24),
                  e._uU(45, "Privacy Policy "),
                  e.qZA(),
                  e.TgZ(46, "a", 25),
                  e._uU(47, " Terms of Service"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(48, "div", 26),
                  e.YNc(49, gt, 2, 1, "button", 27),
                  e.qZA(),
                  e.TgZ(50, "div", 28),
                  e.TgZ(51, "div", 29),
                  e._uU(52, "Already have an account? "),
                  e.TgZ(53, "a", 30),
                  e._uU(54, "Sign In"),
                  e.qZA(),
                  e._uU(55, " Now"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA();
              }
              if (2 & t) {
                const a = e.MAs(12),
                  r = e.MAs(16),
                  s = e.MAs(20),
                  c = e.MAs(25),
                  d = e.MAs(33),
                  Z = e.MAs(41);
                e.Q6J("ngIf", o.loader),
                  e.xp6(15),
                  e.ekj("is-invalid", r.invalid && r.touched),
                  e.Q6J("minlength", 3)("maxlength", 20),
                  e.xp6(2),
                  e.Q6J(
                    "ngIf",
                    r.errors && (r.valid || r.touched || a.submitted)
                  ),
                  e.xp6(2),
                  e.ekj("is-invalid", s.invalid && s.touched),
                  e.xp6(2),
                  e.Q6J(
                    "ngIf",
                    s.errors && (s.valid || s.touched || a.submitted)
                  ),
                  e.xp6(3),
                  e.ekj("is-invalid", c.invalid && c.touched),
                  e.Q6J("type", o.showPassword ? "text" : "password")(
                    "maxlength",
                    20
                  )("minlength", 8),
                  e.xp6(3),
                  e.Q6J("ngIf", o.showPassword),
                  e.xp6(1),
                  e.Q6J("ngIf", !o.showPassword),
                  e.xp6(1),
                  e.Q6J(
                    "ngIf",
                    c.errors && (c.valid || c.touched || a.submitted)
                  ),
                  e.xp6(1),
                  e.Q6J(
                    "ngIf",
                    (!o.lower || !o.upper || !o.len || !o.num || !o.spec) &&
                      c.valid
                  ),
                  e.xp6(2),
                  e.ekj("is-invalid", d.invalid && d.touched),
                  e.Q6J("type", o.confirmPassword ? "text" : "password")(
                    "maxlength",
                    20
                  ),
                  e.xp6(3),
                  e.Q6J("ngIf", o.confirmPassword),
                  e.xp6(1),
                  e.Q6J("ngIf", !o.confirmPassword),
                  e.xp6(1),
                  e.Q6J(
                    "ngIf",
                    d.errors && (d.valid || d.touched || a.submitted)
                  ),
                  e.xp6(1),
                  e.Q6J("ngIf", !o.checkpwd && d.valid),
                  e.xp6(2),
                  e.ekj("is-invalid", Z.invalid),
                  e.xp6(9),
                  e.Q6J("ngIf", !o.signLoader);
              }
            },
            directives: [
              p.O5,
              g,
              m,
              l._Y,
              l.JL,
              l.F,
              l.Fj,
              l.JJ,
              l.On,
              l.Q7,
              l.c5,
              l.wO,
              l.nD,
              l.Wl,
              l.Zs,
              u.yS,
              f,
            ],
            styles: [""],
          })),
          n
        );
      })();
      function _t(n, i) {
        1 & n && e._UZ(0, "app-loader");
      }
      function ht(n, i) {
        1 & n &&
          (e.TgZ(0, "tbody"),
          e.TgZ(1, "tr"),
          e.TgZ(2, "td"),
          e._uU(3, "No data found"),
          e.qZA(),
          e.qZA(),
          e.qZA());
      }
      function mt(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "tr"),
            e.TgZ(1, "td"),
            e.TgZ(2, "span", 11),
            e.TgZ(3, "a", 12),
            e._uU(4),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(5, "td"),
            e._uU(6),
            e.qZA(),
            e.TgZ(7, "td"),
            e._uU(8),
            e.qZA(),
            e.TgZ(9, "td"),
            e._uU(10),
            e.qZA(),
            e.TgZ(11, "td"),
            e._uU(12),
            e.ALo(13, "date"),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = i.$implicit;
          e.xp6(2),
            e.MGl("routerLink", "/contract-info/", t.contract_address, ""),
            e.s9C("title", t.contract_address),
            e.xp6(2),
            e.Oqu(t.contract_address_split),
            e.xp6(2),
            e.Oqu(t.txn_count),
            e.xp6(2),
            e.Oqu(t.version),
            e.xp6(2),
            e.Oqu(t.License),
            e.xp6(2),
            e.Oqu(e.xi3(13, 7, t.created_at, "yyyy-MM-dd HH:mm:ss "));
        }
      }
      function Tt(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "tbody"), e.YNc(1, mt, 14, 10, "tr", 10), e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(1), e.Q6J("ngForOf", t.contractList);
        }
      }
      let ft = (() => {
        class n {
          constructor(t) {
            (this.conn = t), (this.contractList = []), (this.loader = !0);
          }
          ngOnInit() {
            this.conn.getUrl("contract/contractData").subscribe((t) => {
              if (1 == t.success) {
                let o = t.result;
                (o = o.sort(
                  (a, r) =>
                    new Date(r.created_at).getTime() -
                    new Date(a.created_at).getTime()
                )),
                  (this.contractList = o);
              }
              this.loader = !1;
            });
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(e.Y36(h));
          }),
          (n.ɵcmp = e.Xpm({
            type: n,
            selectors: [["app-blockchain"]],
            decls: 28,
            vars: 3,
            consts: [
              [4, "ngIf"],
              [1, "container"],
              ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"],
              [1, "nav-item"],
              [
                "id",
                "validate-tab",
                "data-toggle",
                "tab",
                "href",
                "#validate",
                "role",
                "tab",
                "aria-controls",
                "validate",
                "aria-selected",
                "true",
                1,
                "nav-link",
                "active",
              ],
              ["id", "myTabContent", 1, "tab-content"],
              [
                "id",
                "validate",
                "role",
                "tabpanel",
                "aria-labelledby",
                "Validate-tab",
                1,
                "tab-pane",
                "fade",
                "show",
                "active",
              ],
              [1, "table-responsive"],
              [1, "table", "site-table"],
              ["scope", "col"],
              [4, "ngFor", "ngForOf"],
              [1, "id-t", 3, "routerLink", "title"],
              [1, "link-t"],
            ],
            template: function (t, o) {
              1 & t &&
                (e.YNc(0, _t, 1, 0, "app-loader", 0),
                e._UZ(1, "app-header"),
                e._UZ(2, "app-searchbar"),
                e.TgZ(3, "section"),
                e.TgZ(4, "div", 1),
                e.TgZ(5, "ul", 2),
                e.TgZ(6, "li", 3),
                e.TgZ(7, "a", 4),
                e._uU(8, "Validate Contracts"),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.TgZ(9, "div", 5),
                e.TgZ(10, "div", 6),
                e.TgZ(11, "div", 7),
                e.TgZ(12, "table", 8),
                e.TgZ(13, "thead"),
                e.TgZ(14, "tr"),
                e.TgZ(15, "th", 9),
                e._uU(16, "Address"),
                e.qZA(),
                e.TgZ(17, "th", 9),
                e._uU(18, "Txn Count"),
                e.qZA(),
                e.TgZ(19, "th", 9),
                e._uU(20, "Version"),
                e.qZA(),
                e.TgZ(21, "th", 9),
                e._uU(22, "License"),
                e.qZA(),
                e.TgZ(23, "th", 9),
                e._uU(24, "Validated on"),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.YNc(25, ht, 4, 0, "tbody", 0),
                e.YNc(26, Tt, 2, 1, "tbody", 0),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e._UZ(27, "app-footer")),
                2 & t &&
                  (e.Q6J("ngIf", o.loader),
                  e.xp6(25),
                  e.Q6J("ngIf", 0 == o.contractList.length),
                  e.xp6(1),
                  e.Q6J("ngIf", o.contractList.length > 0));
            },
            directives: [p.O5, g, m, _, f, p.sg, u.rH],
            pipes: [p.uU],
            styles: [""],
          })),
          n
        );
      })();
      var x = T(8265);
      function At(n, i) {
        1 & n &&
          (e.TgZ(0, "tbody"),
          e.TgZ(1, "tr"),
          e.TgZ(2, "td"),
          e._uU(3, "NO data found"),
          e.qZA(),
          e.qZA(),
          e.qZA());
      }
      function vt(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "td"), e.TgZ(1, "a", 12), e._uU(2), e.qZA(), e.qZA()),
          2 & n)
        ) {
          const t = e.oxw().$implicit;
          e.xp6(1),
            e.MGl("routerLink", "/address-info/", t.to, ""),
            e.s9C("title", t.to),
            e.xp6(1),
            e.Oqu(t.toaddress_split);
        }
      }
      function qt(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "tr"),
            e.TgZ(1, "td"),
            e.TgZ(2, "a", 12),
            e._uU(3),
            e.qZA(),
            e.qZA(),
            e.TgZ(4, "td"),
            e._uU(5),
            e.qZA(),
            e.TgZ(6, "td"),
            e._uU(7),
            e.qZA(),
            e.TgZ(8, "td"),
            e._uU(9),
            e.qZA(),
            e.TgZ(10, "td"),
            e.TgZ(11, "a", 12),
            e._uU(12),
            e.qZA(),
            e.qZA(),
            e.YNc(13, vt, 3, 3, "td", 9),
            e.TgZ(14, "td"),
            e._uU(15),
            e.qZA(),
            e.TgZ(16, "td"),
            e._uU(17),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = i.$implicit;
          e.xp6(2),
            e.MGl("routerLink", "/transaction-details/", t.txID, ""),
            e.s9C("title", t.txID),
            e.xp6(1),
            e.Oqu(t.txID_split),
            e.xp6(2),
            e.Oqu("0" == t.method ? "Coin Transfer" : t.method),
            e.xp6(2),
            e.Oqu(t.blockId),
            e.xp6(2),
            e.Oqu(t.dateTime),
            e.xp6(2),
            e.MGl("routerLink", "/address-info/", t.from, ""),
            e.s9C("title", t.from),
            e.xp6(1),
            e.Oqu(t.fromaddress_split),
            e.xp6(1),
            e.Q6J("ngIf", "undefined" !== t.to),
            e.xp6(2),
            e.Oqu(t.amount),
            e.xp6(2),
            e.Oqu(null == t.fee ? "0" : t.fee);
        }
      }
      const bt = function (n, i) {
        return { itemsPerPage: n, currentPage: i };
      };
      function yt(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "tbody"),
            e.YNc(1, qt, 18, 12, "tr", 11),
            e.ALo(2, "paginate"),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(1),
            e.Q6J(
              "ngForOf",
              e.xi3(2, 1, t.transactionList, e.WLB(4, bt, t.pgItem, t.p))
            );
        }
      }
      function Ut(n, i) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "pagination-controls", 13),
            e.NdJ("pageChange", function (a) {
              return e.CHM(t), (e.oxw().p = a);
            }),
            e.qZA();
        }
      }
      let xt = (() => {
        class n {
          constructor(t, o) {
            (this.conn = t),
              (this.route = o),
              (this.transactionList = []),
              (this.token = localStorage.getItem("H1gh-VaLTokEN")),
              (this.pgItem = 10),
              (this.trans24 = 0),
              (this.transPend = 0),
              (this.transFee = 0);
          }
          ngOnInit() {
            this.conn.getUrl("blocks/getTransactionData").subscribe((t) => {
              1 == t.success &&
                ((this.transactionList = t.result),
                (this.trans24 = t.trans24),
                (this.transPend = t.transpend),
                (this.transFee = t.fee));
            });
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(e.Y36(h), e.Y36(u.F0));
          }),
          (n.ɵcmp = e.Xpm({
            type: n,
            selectors: [["app-transactions"]],
            decls: 59,
            vars: 6,
            consts: [
              [1, "container"],
              [1, "h5", "lwf"],
              [1, "row", "mb-3"],
              [1, "col-md-4"],
              [1, "borderbox", "p-3", "small"],
              [1, "grey-t"],
              [1, "mr-2", "h4"],
              [1, "table-responsive"],
              [1, "table"],
              [4, "ngIf"],
              ["class", "pageination", 3, "pageChange", 4, "ngIf"],
              [4, "ngFor", "ngForOf"],
              [3, "routerLink", "title"],
              [1, "pageination", 3, "pageChange"],
            ],
            template: function (t, o) {
              1 & t &&
                (e._UZ(0, "app-header"),
                e._UZ(1, "app-searchbar"),
                e.TgZ(2, "section"),
                e.TgZ(3, "div", 0),
                e.TgZ(4, "div", 1),
                e._uU(5, "Transaction"),
                e.qZA(),
                e._UZ(6, "hr"),
                e.TgZ(7, "div", 2),
                e.TgZ(8, "div", 3),
                e.TgZ(9, "div", 4),
                e.TgZ(10, "div", 5),
                e._uU(11, "TRANSACTIONS ( 24H )"),
                e.qZA(),
                e.TgZ(12, "div"),
                e.TgZ(13, "span", 6),
                e._uU(14),
                e.qZA(),
                e.TgZ(15, "span"),
                e._uU(16, "( 3.25 % )"),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.TgZ(17, "div", 3),
                e.TgZ(18, "div", 4),
                e.TgZ(19, "div", 5),
                e._uU(20, "PENDING TRANSACTIONS ( LAST 1H )"),
                e.qZA(),
                e.TgZ(21, "div"),
                e.TgZ(22, "span", 6),
                e._uU(23),
                e.qZA(),
                e.TgZ(24, "span"),
                e._uU(25, "( Average )"),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.TgZ(26, "div", 3),
                e.TgZ(27, "div", 4),
                e.TgZ(28, "div", 5),
                e._uU(29, "NETWORK TRANSACTIONS FEE ( 24H )"),
                e.qZA(),
                e.TgZ(30, "div"),
                e.TgZ(31, "span", 6),
                e._uU(32),
                e.qZA(),
                e.TgZ(33, "span"),
                e._uU(34, "( 0 % )"),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.TgZ(35, "div", 7),
                e.TgZ(36, "table", 8),
                e.TgZ(37, "thead"),
                e.TgZ(38, "tr"),
                e.TgZ(39, "th"),
                e._uU(40, "Txn Hash"),
                e.qZA(),
                e.TgZ(41, "th"),
                e._uU(42, "Method"),
                e.qZA(),
                e.TgZ(43, "th"),
                e._uU(44, "Block"),
                e.qZA(),
                e.TgZ(45, "th"),
                e._uU(46, "Age"),
                e.qZA(),
                e.TgZ(47, "th"),
                e._uU(48, "From"),
                e.qZA(),
                e.TgZ(49, "th"),
                e._uU(50, "To"),
                e.qZA(),
                e.TgZ(51, "th"),
                e._uU(52, "Value"),
                e.qZA(),
                e.TgZ(53, "th"),
                e._uU(54, "Txn Fee"),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.YNc(55, At, 4, 0, "tbody", 9),
                e.YNc(56, yt, 3, 7, "tbody", 9),
                e.qZA(),
                e.YNc(57, Ut, 1, 0, "pagination-controls", 10),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e._UZ(58, "app-footer")),
                2 & t &&
                  (e.xp6(14),
                  e.Oqu(o.trans24),
                  e.xp6(9),
                  e.Oqu(o.transPend),
                  e.xp6(9),
                  e.Oqu(o.transFee),
                  e.xp6(23),
                  e.Q6J("ngIf", 0 == o.transactionList.length),
                  e.xp6(1),
                  e.Q6J("ngIf", o.transactionList.length > 0),
                  e.xp6(1),
                  e.Q6J("ngIf", o.transactionList.length > o.pgItem));
            },
            directives: [g, m, p.O5, _, p.sg, u.yS, x.LS],
            pipes: [x._s],
            styles: [
              ".carousel-inner[_ngcontent-%COMP%]{background:#242837;background:#efecf9;padding:15px;border-radius:8px}.tag[_ngcontent-%COMP%]{background-color:#3c4155;background-color:#785ad9;padding:3px 10px;border-radius:3px;font-weight:600;font-size:11px;line-height:normal;color:#fff}.pageination[_ngcontent-%COMP%]{float:right;padding-top:0;margin-top:16px;margin-right:10px}",
            ],
          })),
          n
        );
      })();
      function kt(n, i) {
        1 & n && e._UZ(0, "app-loader");
      }
      function Ct(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 8),
            e.TgZ(1, "div", 9),
            e._uU(2, "Contract Address:"),
            e.qZA(),
            e.TgZ(3, "div", 10),
            e._uU(4),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw(2);
          e.xp6(4), e.hij(" ", t.transactionData.contract_address, " ");
        }
      }
      function wt(n, i) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "div", 5),
            e.TgZ(1, "div", 6),
            e.TgZ(2, "div", 7),
            e.TgZ(3, "div", 8),
            e.TgZ(4, "div", 9),
            e._uU(5, "Transaction Hash:"),
            e.qZA(),
            e.TgZ(6, "div", 10),
            e._uU(7),
            e.qZA(),
            e.qZA(),
            e.YNc(8, Ct, 5, 1, "div", 11),
            e.TgZ(9, "div", 8),
            e.TgZ(10, "div", 9),
            e._uU(11, "Status:"),
            e.qZA(),
            e.TgZ(12, "div", 10),
            e._uU(13),
            e.qZA(),
            e.qZA(),
            e.TgZ(14, "div", 8),
            e.TgZ(15, "div", 9),
            e._uU(16, "Block Number:"),
            e.qZA(),
            e.TgZ(17, "div", 10),
            e._uU(18),
            e.qZA(),
            e.qZA(),
            e.TgZ(19, "div", 8),
            e.TgZ(20, "div", 9),
            e._uU(21, "Type:"),
            e.qZA(),
            e.TgZ(22, "div", 10),
            e._uU(23),
            e.qZA(),
            e.qZA(),
            e.TgZ(24, "div", 8),
            e.TgZ(25, "div", 9),
            e._uU(26, "Timestamp:"),
            e.qZA(),
            e.TgZ(27, "div", 10),
            e._uU(28),
            e.ALo(29, "date"),
            e.qZA(),
            e.qZA(),
            e.TgZ(30, "div", 8),
            e.TgZ(31, "div", 9),
            e._uU(32, "From :"),
            e.qZA(),
            e.TgZ(33, "div", 10),
            e._uU(34),
            e.qZA(),
            e.qZA(),
            e.TgZ(35, "div", 8),
            e.TgZ(36, "div", 9),
            e._uU(37, "To:"),
            e.qZA(),
            e.TgZ(38, "div", 10),
            e._uU(39),
            e.qZA(),
            e.qZA(),
            e.TgZ(40, "div", 8),
            e.TgZ(41, "div", 9),
            e._uU(42, "Amount :"),
            e.qZA(),
            e.TgZ(43, "div", 10),
            e._uU(44),
            e.qZA(),
            e.qZA(),
            e.TgZ(45, "div", 8),
            e.TgZ(46, "div", 9),
            e._uU(47, "Fee :"),
            e.qZA(),
            e.TgZ(48, "div", 10),
            e._uU(49),
            e.qZA(),
            e.qZA(),
            e.TgZ(50, "div", 8),
            e.TgZ(51, "div", 9),
            e._uU(52, "Gas Price:"),
            e.qZA(),
            e.TgZ(53, "div", 10),
            e._uU(54),
            e.qZA(),
            e.qZA(),
            e.TgZ(55, "div", 8),
            e.TgZ(56, "div", 9),
            e._uU(57, "Input Data :"),
            e.qZA(),
            e.TgZ(58, "div", 10),
            e.TgZ(59, "span", 12),
            e._uU(60),
            e.qZA(),
            e.TgZ(61, "span", 13),
            e.NdJ("click", function () {
              e.CHM(t);
              const a = e.oxw();
              return (a.showme = !a.showme);
            }),
            e._uU(62),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA();
        }
        if (2 & n) {
          const t = e.oxw();
          e.xp6(7),
            e.hij(" ", t.transactionData.txID, " "),
            e.xp6(1),
            e.Q6J("ngIf", "Create SmartContract" == t.transactionData.type),
            e.xp6(5),
            e.hij(" ", "Success", " "),
            e.xp6(5),
            e.hij(" ", t.transactionData.blockNumber, " "),
            e.xp6(5),
            e.hij(
              " ",
              "0" == t.transactionData.type
                ? "Coin Transfer"
                : t.transactionData.type,
              " "
            ),
            e.xp6(5),
            e.hij(
              " ",
              e.xi3(
                29,
                14,
                t.transactionData.created_at,
                "yyyy-MM-dd HH:mm:ss "
              ),
              " "
            ),
            e.xp6(6),
            e.hij(" ", t.transactionData.owner_address, " "),
            e.xp6(5),
            e.hij(
              " ",
              null == t.transactionData.to_address
                ? "None"
                : t.transactionData.to_address,
              " "
            ),
            e.xp6(5),
            e.hij(" ", t.transactionData.amount, " "),
            e.xp6(5),
            e.hij(
              " ",
              null == t.transactionData.fee ? "0" : t.transactionData.fee,
              " "
            ),
            e.xp6(5),
            e.hij(
              " ",
              null == t.transactionData.gasPrice
                ? "0"
                : t.transactionData.gasPrice,
              " "
            ),
            e.xp6(5),
            e.Q6J("ngClass", 1 == t.showme ? "showme" : ""),
            e.xp6(1),
            e.Oqu(t.transactionData.input),
            e.xp6(2),
            e.Oqu(1 == t.showme ? "read less" : "read more");
        }
      }
      function Mt(n, i) {
        1 & n &&
          (e.TgZ(0, "tbody"),
          e.TgZ(1, "tr"),
          e.TgZ(2, "td"),
          e._uU(3, "NO data found"),
          e.qZA(),
          e.qZA(),
          e.qZA());
      }
      function It(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "tr"),
            e.TgZ(1, "td"),
            e.TgZ(2, "a", 17),
            e.TgZ(3, "span", 18),
            e._uU(4),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(5, "td"),
            e._uU(6),
            e.qZA(),
            e.TgZ(7, "td"),
            e._uU(8),
            e.qZA(),
            e.TgZ(9, "td"),
            e._uU(10),
            e.qZA(),
            e.TgZ(11, "td"),
            e.TgZ(12, "a", 19),
            e._uU(13),
            e.qZA(),
            e.qZA(),
            e.TgZ(14, "td"),
            e.TgZ(15, "a", 19),
            e._uU(16),
            e.qZA(),
            e.qZA(),
            e.TgZ(17, "td"),
            e._uU(18),
            e.qZA(),
            e.TgZ(19, "td"),
            e._uU(20),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = i.$implicit;
          e.xp6(2),
            e.MGl("routerLink", "/transaction-details/", t.txID, ""),
            e.xp6(2),
            e.Oqu(t.txID),
            e.xp6(2),
            e.Oqu("0" == t.type ? "Coin Transfer" : t.type),
            e.xp6(2),
            e.Oqu(t.blockNumber),
            e.xp6(2),
            e.Oqu(t.created_at),
            e.xp6(2),
            e.MGl("routerLink", "/address-info/", t.owner_address, ""),
            e.xp6(1),
            e.Oqu(t.owner_address),
            e.xp6(2),
            e.MGl("routerLink", "/address-info/", t.to_address, ""),
            e.xp6(1),
            e.Oqu(t.to_address),
            e.xp6(2),
            e.Oqu(t.amount / 1e6),
            e.xp6(2),
            e.Oqu(null == t.fee ? "0" : t.fee);
        }
      }
      function Nt(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "tbody"), e.YNc(1, It, 21, 11, "tr", 16), e.qZA()),
          2 & n)
        ) {
          const t = e.oxw(2);
          e.xp6(1), e.Q6J("ngForOf", t.addressData);
        }
      }
      function Ot(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 14),
            e.TgZ(1, "table", 15),
            e.TgZ(2, "thead"),
            e.TgZ(3, "tr"),
            e.TgZ(4, "th"),
            e._uU(5, "Txn Hash"),
            e.qZA(),
            e.TgZ(6, "th"),
            e._uU(7, "Method"),
            e.qZA(),
            e.TgZ(8, "th"),
            e._uU(9, "Block"),
            e.qZA(),
            e.TgZ(10, "th"),
            e._uU(11, "created At"),
            e.qZA(),
            e.TgZ(12, "th"),
            e._uU(13, "From"),
            e.qZA(),
            e.TgZ(14, "th"),
            e._uU(15, "To"),
            e.qZA(),
            e.TgZ(16, "th"),
            e._uU(17, "Value"),
            e.qZA(),
            e.TgZ(18, "th"),
            e._uU(19, "Txn Fee"),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.YNc(20, Mt, 4, 0, "tbody", 0),
            e.YNc(21, Nt, 2, 1, "tbody", 0),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(20),
            e.Q6J("ngIf", 0 == t.addressData.length),
            e.xp6(1),
            e.Q6J("ngIf", t.addressData.length > 0);
        }
      }
      let Jt = (() => {
        class n {
          constructor(t, o, a) {
            (this.conn = t),
              (this.actRoute = o),
              (this.route = a),
              (this.showTransaction = !1),
              (this.showAddress = !1),
              (this.transactionData = []),
              (this.addressData = []),
              (this.token = localStorage.getItem("H1gh-VaLTokEN")),
              (this.loader = !0),
              (this.showme = !1);
          }
          ngOnInit() {
            this.actRoute.params.subscribe((o) => {
              this.hash = this.actRoute.snapshot.paramMap.get("searchhash");
            }),
              this.conn
                .postUrl("blocks/getSearchData", { searchHash: this.hash })
                .subscribe((o) => {
                  if (1 == o.success) {
                    if (
                      ((this.showTransaction = !0),
                      (this.transactionData = o.result),
                      "TriggerSmartContract" == o.result.type)
                    )
                      var a = parseFloat(o.result.amount) / 1e18;
                    else a = parseFloat(o.result.amount) / 1e18;
                    this.transactionData.amount = this.convert(a);
                  } else (this.showAddress = !0), (this.addressData = o.result);
                  this.loader = !1;
                });
          }
          convert(t) {
            var o = +t < 0 ? "-" : "",
              a = t.toString();
            if (!/e/i.test(a)) return t;
            var [r, s, c] = t
              .toString()
              .replace(/^-/, "")
              .replace(/^([0-9]+)(e.*)/, "$1.$2")
              .split(/e|\./);
            return +c < 0
              ? o + "0." + "0".repeat(Math.max(Math.abs(c) - 1 || 0, 0)) + r + s
              : o +
                  r +
                  (+c >= s.length
                    ? s + "0".repeat(Math.max(+c - s.length || 0, 0))
                    : s.slice(0, +c) + "." + s.slice(+c));
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(e.Y36(h), e.Y36(u.gz), e.Y36(u.F0));
          }),
          (n.ɵcmp = e.Xpm({
            type: n,
            selectors: [["app-transaction-details"]],
            decls: 8,
            vars: 3,
            consts: [
              [4, "ngIf"],
              [1, "pagesection"],
              [1, "container"],
              ["class", "tab-content", "id", "myTabContent", 4, "ngIf"],
              ["class", "table-responsive bg-white", 4, "ngIf"],
              ["id", "myTabContent", 1, "tab-content"],
              [
                "id",
                "home",
                "role",
                "tabpanel",
                "aria-labelledby",
                "home-tab",
                1,
                "tab-pane",
                "fade",
                "show",
                "active",
              ],
              [1, "info-wrapper"],
              [1, "info-row"],
              [1, "label-field"],
              [1, "data-field"],
              ["class", "info-row", 4, "ngIf"],
              [1, "overflow_readmore", 3, "ngClass"],
              [3, "click"],
              [1, "table-responsive", "bg-white"],
              [1, "table"],
              [4, "ngFor", "ngForOf"],
              [3, "routerLink"],
              [1, "large-txt"],
              [1, "large-txt", 3, "routerLink"],
            ],
            template: function (t, o) {
              1 & t &&
                (e.YNc(0, kt, 1, 0, "app-loader", 0),
                e._UZ(1, "app-header"),
                e._UZ(2, "app-searchbar"),
                e.TgZ(3, "section", 1),
                e.TgZ(4, "div", 2),
                e.YNc(5, wt, 63, 17, "div", 3),
                e.YNc(6, Ot, 22, 2, "div", 4),
                e.qZA(),
                e.qZA(),
                e._UZ(7, "app-footer")),
                2 & t &&
                  (e.Q6J("ngIf", o.loader),
                  e.xp6(5),
                  e.Q6J("ngIf", o.showTransaction),
                  e.xp6(1),
                  e.Q6J("ngIf", o.showAddress));
            },
            directives: [p.O5, g, m, _, f, p.mk, p.sg, u.yS],
            pipes: [p.uU],
            styles: [
              ".pageination[_ngcontent-%COMP%]{float:right;padding-top:0;margin-top:16px;margin-right:10px}.overflow_readmore[_ngcontent-%COMP%]{display:block;white-space:nowrap;width:auto;max-width:300px;text-overflow:ellipsis;overflow:hidden;height:20px}.showme[_ngcontent-%COMP%]{height:auto!important;text-overflow:visible;overflow:unset;white-space:wrap;width:100%;max-width:unset}",
            ],
          })),
          n
        );
      })();
      function Rt(n, i) {
        1 & n && e._UZ(0, "app-loader");
      }
      function Et(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 20),
            e.TgZ(1, "span", 21),
            e.TgZ(2, "a"),
            e._uU(3),
            e.qZA(),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(3), e.Oqu(t.lasttran.data);
        }
      }
      function St(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 20),
            e.TgZ(1, "span", 21),
            e.TgZ(2, "a", 22),
            e._uU(3),
            e.qZA(),
            e.qZA(),
            e.TgZ(4, "span", 8),
            e._uU(5),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(2),
            e.MGl(
              "routerLink",
              "/transaction-details/",
              t.lasttran.data.txn,
              ""
            ),
            e.s9C("title", t.lasttran.data.txn),
            e.xp6(1),
            e.Oqu(t.lasttran.data.txn_splite),
            e.xp6(2),
            e.Oqu(t.lasttran.data.timestamp);
        }
      }
      function Lt(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 20),
            e.TgZ(1, "span", 21),
            e.TgZ(2, "a"),
            e._uU(3),
            e.qZA(),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(3), e.Oqu(t.firstTran.data);
        }
      }
      function Yt(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 20),
            e.TgZ(1, "span", 23),
            e.TgZ(2, "a", 22),
            e._uU(3),
            e.qZA(),
            e.qZA(),
            e.TgZ(4, "span", 8),
            e._uU(5),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(2),
            e.MGl(
              "routerLink",
              "/transaction-details/",
              t.firstTran.data.txn,
              ""
            ),
            e.s9C("title", t.firstTran.data.txn),
            e.xp6(1),
            e.Oqu(t.firstTran.data.txn_splite),
            e.xp6(2),
            e.Oqu(t.firstTran.data.timestamp);
        }
      }
      function Qt(n, i) {
        1 & n &&
          (e.TgZ(0, "tbody"),
          e.TgZ(1, "tr"),
          e.TgZ(2, "td"),
          e._uU(3, "NO data found"),
          e.qZA(),
          e.qZA(),
          e.qZA());
      }
      function Pt(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "td"), e.TgZ(1, "a", 22), e._uU(2), e.qZA(), e.qZA()),
          2 & n)
        ) {
          const t = e.oxw().$implicit;
          e.xp6(1),
            e.MGl("routerLink", "/address-info/", t.to, ""),
            e.s9C("title", t.to),
            e.xp6(1),
            e.Oqu(t.toaddress_split);
        }
      }
      function Ft(n, i) {
        1 & n && (e.TgZ(0, "td"), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("None"));
      }
      function Dt(n, i) {
        1 & n && (e.TgZ(0, "td"), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("-"));
      }
      function Ht(n, i) {
        if ((1 & n && (e.TgZ(0, "td"), e._uU(1), e.qZA()), 2 & n)) {
          const t = e.oxw().$implicit;
          e.xp6(1), e.Oqu(t.amount);
        }
      }
      function Bt(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "tr"),
            e.TgZ(1, "td"),
            e.TgZ(2, "a", 22),
            e._uU(3),
            e.qZA(),
            e.qZA(),
            e.TgZ(4, "td"),
            e._uU(5),
            e.qZA(),
            e.TgZ(6, "td"),
            e._uU(7),
            e.qZA(),
            e.TgZ(8, "td"),
            e._uU(9),
            e.ALo(10, "date"),
            e.qZA(),
            e.TgZ(11, "td"),
            e.TgZ(12, "a", 22),
            e._uU(13),
            e.qZA(),
            e.qZA(),
            e.YNc(14, Pt, 3, 3, "td", 0),
            e.YNc(15, Ft, 2, 1, "td", 0),
            e.YNc(16, Dt, 2, 1, "td", 0),
            e.YNc(17, Ht, 2, 1, "td", 0),
            e.TgZ(18, "td"),
            e._uU(19),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = i.$implicit;
          e.xp6(2),
            e.MGl("routerLink", "/transaction-details/", t.txID, ""),
            e.s9C("title", t.txID),
            e.xp6(1),
            e.Oqu(t.txID_split),
            e.xp6(2),
            e.Oqu("0" == t.method ? "Coin Transfer" : t.method),
            e.xp6(2),
            e.Oqu(t.blockId),
            e.xp6(2),
            e.Oqu(e.xi3(10, 14, t.created_at, "yyyy-MM-dd HH:mm:ss ")),
            e.xp6(3),
            e.MGl("routerLink", "/address-info/", t.from, ""),
            e.s9C("title", t.from),
            e.xp6(1),
            e.Oqu(t.fromaddress_split),
            e.xp6(1),
            e.Q6J("ngIf", "undefined" !== t.to),
            e.xp6(1),
            e.Q6J("ngIf", "undefined" == t.to),
            e.xp6(1),
            e.Q6J("ngIf", !t.amount),
            e.xp6(1),
            e.Q6J("ngIf", t.amount),
            e.xp6(2),
            e.Oqu(null == t.fee ? "0" : t.fee);
        }
      }
      const jt = function (n) {
        return { itemsPerPage: 10, currentPage: n };
      };
      function Vt(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "tbody"),
            e.YNc(1, Bt, 20, 17, "tr", 24),
            e.ALo(2, "paginate"),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(1),
            e.Q6J("ngForOf", e.xi3(2, 1, t.transactionData, e.VKq(4, jt, t.p)));
        }
      }
      function Gt(n, i) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "pagination-controls", 25),
            e.NdJ("pageChange", function (a) {
              return e.CHM(t), (e.oxw().p = a);
            }),
            e.qZA();
        }
      }
      let zt = (() => {
        class n {
          constructor(t, o, a) {
            (this.conn = t),
              (this.actRoute = o),
              (this.route = a),
              (this.transactionData = []),
              (this.addressData = []),
              (this.loader = !0),
              (this.showme = !1),
              (this.balance = 0),
              (this.firstTran = {}),
              (this.lasttran = {}),
              (this.token = localStorage.getItem("H1gh-VaLTokEN"));
          }
          ngOnInit() {
            this.actRoute.params.subscribe((o) => {
              (this.hash = this.actRoute.snapshot.paramMap.get("address")),
                (this.address = this.hash);
            });
            var t = { address: this.hash };
            this.conn.postUrl("blocks/getAddressData", t).subscribe((o) => {
              if (
                ((this.balance = o.result.balance),
                (this.firstTran = o.result.firsttran),
                (this.lasttran = o.result.lasttran),
                1 == o.success &&
                  ((this.addressData = o.result.latest), this.addressData))
              ) {
                var a = parseFloat(o.result.latest.amount) / 1e18;
                this.addressData.amount = this.convert(a);
              }
              this.loader = !1;
            }),
              this.conn
                .postUrl("blocks/getAddressinfoData", t)
                .subscribe((o) => {
                  1 == o.success && (this.transactionData = o.result),
                    (this.loader = !1);
                });
          }
          convert(t) {
            var o = +t < 0 ? "-" : "",
              a = t.toString();
            if (!/e/i.test(a)) return t;
            var [r, s, c] = t
              .toString()
              .replace(/^-/, "")
              .replace(/^([0-9]+)(e.*)/, "$1.$2")
              .split(/e|\./);
            return +c < 0
              ? o + "0." + "0".repeat(Math.max(Math.abs(c) - 1 || 0, 0)) + r + s
              : o +
                  r +
                  (+c >= s.length
                    ? s + "0".repeat(Math.max(+c - s.length || 0, 0))
                    : s.slice(0, +c) + "." + s.slice(+c));
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(e.Y36(h), e.Y36(u.gz), e.Y36(u.F0));
          }),
          (n.ɵcmp = e.Xpm({
            type: n,
            selectors: [["app-address-info"]],
            decls: 67,
            vars: 11,
            consts: [
              [4, "ngIf"],
              [1, "container"],
              [1, "h4", "adrs"],
              [1, "row"],
              [1, "col-md-6"],
              [1, "info-wrapper", "my-4"],
              [1, "info-title", "px-3"],
              [1, "px-3", "mb-3"],
              [1, "grey-t"],
              [1, "data-field", "h6", "wf"],
              ["class", "data-field", 4, "ngIf"],
              [1, "justify-content-between", "mb-3"],
              [
                "id",
                "myTab",
                "role",
                "tablist",
                1,
                "nav",
                "nav-tabs",
                "site-tabs",
              ],
              [1, "nav-item"],
              [
                "id",
                "home-tab",
                "data-toggle",
                "tab",
                "href",
                "#home",
                "role",
                "tab",
                "aria-controls",
                "home",
                "aria-selected",
                "true",
                1,
                "nav-link",
                "active",
              ],
              ["id", "myTabContent", 1, "tab-content"],
              [
                "id",
                "home",
                "role",
                "tabpanel",
                "aria-labelledby",
                "home-tab",
                1,
                "tab-pane",
                "fade",
                "show",
                "active",
              ],
              [1, "table-responsive", "bg-white"],
              [1, "table"],
              ["class", "pageination", 3, "pageChange", 4, "ngIf"],
              [1, "data-field"],
              [1, "wf", "h6", "mr-2"],
              [3, "routerLink", "title"],
              [1, "h6", "wf", "mr-2"],
              [4, "ngFor", "ngForOf"],
              [1, "pageination", 3, "pageChange"],
            ],
            template: function (t, o) {
              1 & t &&
                (e.YNc(0, Rt, 1, 0, "app-loader", 0),
                e._UZ(1, "app-header"),
                e._UZ(2, "app-searchbar"),
                e.TgZ(3, "section"),
                e.TgZ(4, "div", 1),
                e.TgZ(5, "div", 2),
                e._uU(6),
                e.qZA(),
                e.TgZ(7, "div", 3),
                e.TgZ(8, "div", 4),
                e.TgZ(9, "div", 5),
                e.TgZ(10, "div", 6),
                e._uU(11, " Overview "),
                e.qZA(),
                e.TgZ(12, "div", 7),
                e.TgZ(13, "div", 8),
                e._uU(14, "LUMA Balance:"),
                e.qZA(),
                e.TgZ(15, "div", 9),
                e._uU(16),
                e.qZA(),
                e.qZA(),
                e.TgZ(17, "div", 7),
                e.TgZ(18, "div", 8),
                e._uU(19, "LUMA Value:"),
                e.qZA(),
                e.TgZ(20, "div", 9),
                e._uU(21),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.TgZ(22, "div", 4),
                e.TgZ(23, "div", 5),
                e.TgZ(24, "div", 6),
                e._uU(25, " More Info "),
                e.qZA(),
                e.TgZ(26, "div", 7),
                e.TgZ(27, "div", 8),
                e._uU(28, "Last Txn Sent:"),
                e.qZA(),
                e.YNc(29, Et, 4, 1, "div", 10),
                e.YNc(30, St, 6, 4, "div", 10),
                e.qZA(),
                e.TgZ(31, "div", 7),
                e.TgZ(32, "div", 8),
                e._uU(33, "First Txn Sent:"),
                e.qZA(),
                e.YNc(34, Lt, 4, 1, "div", 10),
                e.YNc(35, Yt, 6, 4, "div", 10),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.TgZ(36, "div", 11),
                e.TgZ(37, "ul", 12),
                e.TgZ(38, "li", 13),
                e.TgZ(39, "a", 14),
                e._uU(40, "Transaction List"),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.TgZ(41, "div", 15),
                e.TgZ(42, "div", 16),
                e.TgZ(43, "div", 17),
                e.TgZ(44, "table", 18),
                e.TgZ(45, "thead"),
                e.TgZ(46, "tr"),
                e.TgZ(47, "th"),
                e._uU(48, "Txn Hash"),
                e.qZA(),
                e.TgZ(49, "th"),
                e._uU(50, "Transaction Type"),
                e.qZA(),
                e.TgZ(51, "th"),
                e._uU(52, "Block"),
                e.qZA(),
                e.TgZ(53, "th"),
                e._uU(54, "Date/Time"),
                e.qZA(),
                e.TgZ(55, "th"),
                e._uU(56, "From"),
                e.qZA(),
                e.TgZ(57, "th"),
                e._uU(58, "To"),
                e.qZA(),
                e.TgZ(59, "th"),
                e._uU(60, "Amount"),
                e.qZA(),
                e.TgZ(61, "th"),
                e._uU(62, "Txn Fee"),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.YNc(63, Qt, 4, 0, "tbody", 0),
                e.YNc(64, Vt, 3, 6, "tbody", 0),
                e.qZA(),
                e.YNc(65, Gt, 1, 0, "pagination-controls", 19),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e._UZ(66, "app-footer")),
                2 & t &&
                  (e.Q6J("ngIf", o.loader),
                  e.xp6(6),
                  e.Oqu(o.address),
                  e.xp6(10),
                  e.hij(" ", o.balance, " "),
                  e.xp6(5),
                  e.hij(" ", 100.3 * o.balance, " "),
                  e.xp6(8),
                  e.Q6J("ngIf", 0 == o.lasttran.success),
                  e.xp6(1),
                  e.Q6J("ngIf", 1 == o.lasttran.success),
                  e.xp6(4),
                  e.Q6J("ngIf", 0 == o.firstTran.success),
                  e.xp6(1),
                  e.Q6J("ngIf", 1 == o.firstTran.success),
                  e.xp6(28),
                  e.Q6J(
                    "ngIf",
                    0 ==
                      (null == o.transactionData
                        ? null
                        : o.transactionData.length)
                  ),
                  e.xp6(1),
                  e.Q6J(
                    "ngIf",
                    (null == o.transactionData
                      ? null
                      : o.transactionData.length) > 0
                  ),
                  e.xp6(1),
                  e.Q6J(
                    "ngIf",
                    (null == o.transactionData
                      ? null
                      : o.transactionData.length) > 10
                  ));
            },
            directives: [p.O5, g, m, _, f, u.yS, p.sg, x.LS],
            pipes: [x._s, p.uU],
            styles: [
              ".pageination[_ngcontent-%COMP%]{float:right;padding-top:0;margin-top:16px;margin-right:10px}.overflow_readmore[_ngcontent-%COMP%]{display:block;white-space:nowrap;width:auto;max-width:300px;text-overflow:ellipsis;overflow:hidden;height:20px}.showme[_ngcontent-%COMP%]{height:auto!important;text-overflow:visible;overflow:unset;white-space:wrap;width:100%;max-width:unset}",
            ],
          })),
          n
        );
      })();
      function Wt(n, i) {
        1 & n && e._UZ(0, "app-loader");
      }
      function $t(n, i) {
        1 & n &&
          (e.TgZ(0, "tbody"),
          e.TgZ(1, "tr"),
          e.TgZ(2, "td"),
          e._uU(3, "NO data found"),
          e.qZA(),
          e.qZA(),
          e.qZA());
      }
      function Xt(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "tr"),
            e.TgZ(1, "td"),
            e._UZ(2, "i", 25),
            e.qZA(),
            e.TgZ(3, "td"),
            e.TgZ(4, "div", 26),
            e.TgZ(5, "div"),
            e._UZ(6, "img", 27),
            e.qZA(),
            e.TgZ(7, "div"),
            e.TgZ(8, "span", 28),
            e._uU(9),
            e.qZA(),
            e._UZ(10, "br"),
            e.TgZ(11, "div", 29),
            e._uU(12),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(13, "td"),
            e.TgZ(14, "span", 30),
            e.TgZ(15, "a", 31),
            e._uU(16),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(17, "td"),
            e._uU(18),
            e.qZA(),
            e.TgZ(19, "td"),
            e._uU(20),
            e.qZA(),
            e.TgZ(21, "td"),
            e.TgZ(22, "a", 32),
            e._uU(23, "Details"),
            e.qZA(),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = i.$implicit;
          e.xp6(6),
            e.s9C("src", t.token_logo, e.LSH),
            e.xp6(3),
            e.Oqu(t.token_name),
            e.xp6(3),
            e.Oqu(t.token_intro),
            e.xp6(3),
            e.MGl("routerLink", "/contract-info/", t.contract_address, ""),
            e.s9C("title", t.contract_address),
            e.xp6(1),
            e.Oqu(t.contract_address_split),
            e.xp6(2),
            e.Oqu(t.transactioncount),
            e.xp6(2),
            e.Oqu(t.tokenbalance),
            e.xp6(2),
            e.MGl("routerLink", "/token-info/", t.contract_address, "");
        }
      }
      function Kt(n, i) {
        if (
          (1 & n && (e.TgZ(0, "tbody"), e.YNc(1, Xt, 24, 9, "tr", 24), e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(1), e.Q6J("ngForOf", t.TRC20List);
        }
      }
      function en(n, i) {
        1 & n &&
          (e.TgZ(0, "tbody"),
          e.TgZ(1, "tr"),
          e.TgZ(2, "td"),
          e._uU(3, "NO data found"),
          e.qZA(),
          e.qZA(),
          e.qZA());
      }
      function tn(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "tr"),
            e.TgZ(1, "td"),
            e._UZ(2, "i", 25),
            e.qZA(),
            e.TgZ(3, "td"),
            e.TgZ(4, "div", 26),
            e.TgZ(5, "div"),
            e._UZ(6, "img", 27),
            e.qZA(),
            e.TgZ(7, "div"),
            e.TgZ(8, "span", 28),
            e._uU(9),
            e.qZA(),
            e._UZ(10, "br"),
            e.TgZ(11, "div", 29),
            e._uU(12),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(13, "td"),
            e.TgZ(14, "span", 30),
            e.TgZ(15, "a", 31),
            e._uU(16),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(17, "td"),
            e._uU(18),
            e.qZA(),
            e.TgZ(19, "td"),
            e._uU(20),
            e.qZA(),
            e.TgZ(21, "td"),
            e.TgZ(22, "a", 32),
            e._uU(23, "Details"),
            e.qZA(),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = i.$implicit;
          e.xp6(6),
            e.s9C("src", t.token_logo, e.LSH),
            e.xp6(3),
            e.Oqu(t.token_name),
            e.xp6(3),
            e.Oqu(t.token_intro),
            e.xp6(3),
            e.MGl("routerLink", "/contract-info/", t.contract_address, ""),
            e.s9C("title", t.contract_address),
            e.xp6(1),
            e.Oqu(t.contract_address_split),
            e.xp6(2),
            e.Oqu(t.transactioncount),
            e.xp6(2),
            e.Oqu(t.tokenbalance),
            e.xp6(2),
            e.MGl("routerLink", "/token-info/", t.contract_address, "");
        }
      }
      function nn(n, i) {
        if (
          (1 & n && (e.TgZ(0, "tbody"), e.YNc(1, tn, 24, 9, "tr", 24), e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(1), e.Q6J("ngForOf", t.TRC721List);
        }
      }
      function on(n, i) {
        1 & n &&
          (e.TgZ(0, "tbody"),
          e.TgZ(1, "tr"),
          e.TgZ(2, "td"),
          e._uU(3, "NO data found"),
          e.qZA(),
          e.qZA(),
          e.qZA());
      }
      function an(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "tr"),
            e.TgZ(1, "td"),
            e._UZ(2, "i", 25),
            e.qZA(),
            e.TgZ(3, "td"),
            e.TgZ(4, "div", 26),
            e.TgZ(5, "div"),
            e._UZ(6, "img", 27),
            e.qZA(),
            e.TgZ(7, "div"),
            e.TgZ(8, "span", 28),
            e._uU(9),
            e.qZA(),
            e._UZ(10, "br"),
            e.TgZ(11, "div", 29),
            e._uU(12),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(13, "td"),
            e.TgZ(14, "span", 30),
            e.TgZ(15, "a", 31),
            e._uU(16),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(17, "td"),
            e._uU(18),
            e.qZA(),
            e.TgZ(19, "td"),
            e._uU(20),
            e.qZA(),
            e.TgZ(21, "td"),
            e.TgZ(22, "a", 32),
            e._uU(23, "Details"),
            e.qZA(),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = i.$implicit;
          e.xp6(6),
            e.s9C("src", t.token_logo, e.LSH),
            e.xp6(3),
            e.Oqu(t.token_name),
            e.xp6(3),
            e.Oqu(t.token_intro),
            e.xp6(3),
            e.MGl("routerLink", "/contract-info/", t.contract_address, ""),
            e.s9C("title", t.contract_address),
            e.xp6(1),
            e.Oqu(t.contract_address_split),
            e.xp6(2),
            e.Oqu(t.transactioncount),
            e.xp6(2),
            e.Oqu(t.tokenbalance),
            e.xp6(2),
            e.MGl("routerLink", "/token-info/", t.contract_address, "");
        }
      }
      function rn(n, i) {
        if (
          (1 & n && (e.TgZ(0, "tbody"), e.YNc(1, an, 24, 9, "tr", 24), e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(1), e.Q6J("ngForOf", t.TRC1155List);
        }
      }
      function sn(n, i) {
        1 & n &&
          (e.TgZ(0, "tbody"),
          e.TgZ(1, "tr"),
          e.TgZ(2, "td"),
          e._uU(3, "NO data found"),
          e.qZA(),
          e.qZA(),
          e.qZA());
      }
      function ln(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "tr"),
            e.TgZ(1, "td"),
            e._UZ(2, "i", 25),
            e.qZA(),
            e.TgZ(3, "td"),
            e.TgZ(4, "div", 26),
            e.TgZ(5, "div"),
            e._UZ(6, "img", 27),
            e.qZA(),
            e.TgZ(7, "div"),
            e.TgZ(8, "span", 28),
            e._uU(9),
            e.qZA(),
            e._UZ(10, "br"),
            e.TgZ(11, "div", 29),
            e._uU(12),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(13, "td"),
            e.TgZ(14, "span", 30),
            e.TgZ(15, "a", 31),
            e._uU(16),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(17, "td"),
            e._uU(18),
            e.qZA(),
            e.TgZ(19, "td"),
            e._uU(20),
            e.qZA(),
            e.TgZ(21, "td"),
            e._uU(22),
            e.qZA(),
            e.TgZ(23, "td"),
            e.TgZ(24, "a", 32),
            e._uU(25, "Details"),
            e.qZA(),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = i.$implicit;
          e.xp6(6),
            e.s9C("src", t.token_logo, e.LSH),
            e.xp6(3),
            e.Oqu(t.token_name),
            e.xp6(3),
            e.Oqu(t.token_intro),
            e.xp6(3),
            e.MGl("routerLink", "/address-info/", t.contract_address, ""),
            e.s9C("title", t.contract_address),
            e.xp6(1),
            e.Oqu(t.contract_address_split),
            e.xp6(2),
            e.Oqu(t.id),
            e.xp6(2),
            e.Oqu(t.decimal_place),
            e.xp6(2),
            e.Oqu(t.token_supply),
            e.xp6(2),
            e.MGl("routerLink", "/token-info/", t.id, "");
        }
      }
      function cn(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "tbody"), e.YNc(1, ln, 26, 10, "tr", 24), e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(1), e.Q6J("ngForOf", t.TRC10List);
        }
      }
      let dn = (() => {
          class n {
            constructor(t, o) {
              (this.conn = t),
                (this.route = o),
                (this.tokenList = ""),
                (this.weekcount = 0),
                (this.totalcount = ""),
                (this.token = localStorage.getItem("H1gh-VaLTokEN")),
                (this.loader = !0),
                (this.TRC20List = ""),
                (this.TRC10List = ""),
                (this.TRC721List = ""),
                (this.TRC1155List = ""),
                (this.TotalTRC20 = 0),
                (this.TotalTRC721 = 0),
                (this.TotalTRC1155 = 0),
                (this.TotalTRC10 = 0);
            }
            ngOnInit() {
              this.conn.getUrl("contract/getTokenData").subscribe((t) => {
                if (1 == t.success) {
                  let o = t.TRC20list;
                  o = o.sort(
                    (c, d) =>
                      new Date(d.created_at).getTime() -
                      new Date(c.created_at).getTime()
                  );
                  let a = t.TRC721list;
                  a = a.sort(
                    (c, d) =>
                      new Date(d.created_at).getTime() -
                      new Date(c.created_at).getTime()
                  );
                  let r = t.TRC1155list;
                  r = r.sort(
                    (c, d) =>
                      new Date(d.created_at).getTime() -
                      new Date(c.created_at).getTime()
                  );
                  let s = t.TRC10list;
                  (s = s.sort(
                    (c, d) =>
                      new Date(d.created_at).getTime() -
                      new Date(c.created_at).getTime()
                  )),
                    (this.TotalTRC20 = t.TRC20list.length),
                    (this.TotalTRC721 = t.TRC721list.length),
                    (this.TotalTRC1155 = t.TRC1155list.length),
                    (this.TotalTRC10 = t.TRC10list.length),
                    (this.weekcount = t.lastweekcount),
                    (this.totalcount = t.totalcount),
                    (this.TRC20List = o),
                    (this.TRC721List = a),
                    (this.TRC1155List = r),
                    (this.TRC10List = s);
                }
                this.loader = !1;
              });
            }
          }
          return (
            (n.ɵfac = function (t) {
              return new (t || n)(e.Y36(h), e.Y36(u.F0));
            }),
            (n.ɵcmp = e.Xpm({
              type: n,
              selectors: [["app-token"]],
              decls: 111,
              vars: 11,
              consts: [
                [4, "ngIf"],
                [1, "inner-banner", "p-0", "pb-0"],
                [1, "container", "px-0"],
                [1, "text-center"],
                [1, "container"],
                [1, "my-4", "h5", "lwf"],
                [1, "container", "my-3"],
                [1, "row"],
                [1, "col-md-12"],
                [1, "card", "p-4", "table-responsive"],
                [1, "small"],
                [1, "text-center", "text-dark"],
                [1, "text-danger", "green-t"],
                [1, "pt-0"],
                ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"],
                [1, "nav-item"],
                [
                  "id",
                  "validate-tab",
                  "data-toggle",
                  "tab",
                  "href",
                  "#trc20",
                  "role",
                  "tab",
                  "aria-controls",
                  "trc20",
                  "aria-selected",
                  "true",
                  1,
                  "nav-link",
                  "active",
                ],
                ["id", "myTabContent", 1, "tab-content"],
                [
                  "id",
                  "trc20",
                  "role",
                  "tabpanel",
                  "aria-labelledby",
                  "trc20-tab",
                  1,
                  "tab-pane",
                  "fade",
                  "show",
                  "active",
                ],
                [1, "table-responsive", "bg-white"],
                [1, "table"],
                [
                  "id",
                  "trc721",
                  "role",
                  "tabpanel",
                  "aria-labelledby",
                  "trc721-tab",
                  1,
                  "tab-pane",
                  "fade",
                ],
                [
                  "id",
                  "trc1155",
                  "role",
                  "tabpanel",
                  "aria-labelledby",
                  "trc1155-tab",
                  1,
                  "tab-pane",
                  "fade",
                ],
                [
                  "id",
                  "trc10",
                  "role",
                  "tabpanel",
                  "aria-labelledby",
                  "trc10-tab",
                  1,
                  "tab-pane",
                  "fade",
                ],
                [4, "ngFor", "ngForOf"],
                ["_ngcontent-njf-c56", "", 1, "fas", "fa-star", "mr-1"],
                [1, "d-flex", "align-items-center"],
                [1, "coin-icon", 3, "src"],
                [1, "site-link", "text-danger"],
                [1, "desc"],
                [1, "id-t"],
                [1, "link-t", 3, "routerLink", "title"],
                [1, "btn", "btn-danger", "btn-sm", 3, "routerLink"],
              ],
              template: function (t, o) {
                1 & t &&
                  (e.YNc(0, Wt, 1, 0, "app-loader", 0),
                  e._UZ(1, "app-header"),
                  e.TgZ(2, "section", 1),
                  e.TgZ(3, "div", 2),
                  e.TgZ(4, "div", 3),
                  e._UZ(5, "app-searchbar"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(6, "div", 4),
                  e.TgZ(7, "div", 5),
                  e._uU(8, " Token Tracker "),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(9, "div", 6),
                  e.TgZ(10, "div", 7),
                  e.TgZ(11, "div", 8),
                  e.TgZ(12, "div", 9),
                  e.TgZ(13, "table"),
                  e.TgZ(14, "tr"),
                  e.TgZ(15, "td", 3),
                  e._uU(16),
                  e.TgZ(17, "div", 10),
                  e._uU(18, "Total LUMA Tokens"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(19, "td", 11),
                  e.TgZ(20, "span", 12),
                  e._uU(21),
                  e.qZA(),
                  e._UZ(22, "br"),
                  e.TgZ(23, "div", 10),
                  e._uU(24, "Last 7 Days"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(25, "section", 13),
                  e.TgZ(26, "div", 4),
                  e.TgZ(27, "ul", 14),
                  e.TgZ(28, "li", 15),
                  e.TgZ(29, "a", 16),
                  e._uU(30, "LUMA20"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(31, "div", 17),
                  e.TgZ(32, "div", 18),
                  e.TgZ(33, "div", 19),
                  e.TgZ(34, "table", 20),
                  e.TgZ(35, "thead"),
                  e.TgZ(36, "tr"),
                  e.TgZ(37, "th"),
                  e._uU(38, "Rank"),
                  e.qZA(),
                  e.TgZ(39, "th"),
                  e._uU(40, "Token name"),
                  e.qZA(),
                  e.TgZ(41, "th"),
                  e._uU(42, "contract address"),
                  e.qZA(),
                  e.TgZ(43, "th"),
                  e._uU(44, "Tx count "),
                  e.qZA(),
                  e.TgZ(45, "th"),
                  e._uU(46, "balance"),
                  e.qZA(),
                  e.TgZ(47, "th"),
                  e._uU(48, "Operation"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.YNc(49, $t, 4, 0, "tbody", 0),
                  e.YNc(50, Kt, 2, 1, "tbody", 0),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(51, "div", 21),
                  e.TgZ(52, "div", 19),
                  e.TgZ(53, "table", 20),
                  e.TgZ(54, "thead"),
                  e.TgZ(55, "tr"),
                  e.TgZ(56, "th"),
                  e._uU(57, "Rank"),
                  e.qZA(),
                  e.TgZ(58, "th"),
                  e._uU(59, "Token name"),
                  e.qZA(),
                  e.TgZ(60, "th"),
                  e._uU(61, "contract address"),
                  e.qZA(),
                  e.TgZ(62, "th"),
                  e._uU(63, "Tx count "),
                  e.qZA(),
                  e.TgZ(64, "th"),
                  e._uU(65, "balance"),
                  e.qZA(),
                  e.TgZ(66, "th"),
                  e._uU(67, "Operation"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.YNc(68, en, 4, 0, "tbody", 0),
                  e.YNc(69, nn, 2, 1, "tbody", 0),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(70, "div", 22),
                  e.TgZ(71, "div", 19),
                  e.TgZ(72, "table", 20),
                  e.TgZ(73, "thead"),
                  e.TgZ(74, "tr"),
                  e.TgZ(75, "th"),
                  e._uU(76, "Rank"),
                  e.qZA(),
                  e.TgZ(77, "th"),
                  e._uU(78, "Token name"),
                  e.qZA(),
                  e.TgZ(79, "th"),
                  e._uU(80, "contract address"),
                  e.qZA(),
                  e.TgZ(81, "th"),
                  e._uU(82, "Tx count "),
                  e.qZA(),
                  e.TgZ(83, "th"),
                  e._uU(84, "balance"),
                  e.qZA(),
                  e.TgZ(85, "th"),
                  e._uU(86, "Operation"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.YNc(87, on, 4, 0, "tbody", 0),
                  e.YNc(88, rn, 2, 1, "tbody", 0),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(89, "div", 23),
                  e.TgZ(90, "div", 19),
                  e.TgZ(91, "table", 20),
                  e.TgZ(92, "thead"),
                  e.TgZ(93, "tr"),
                  e.TgZ(94, "th"),
                  e._uU(95, "Rank"),
                  e.qZA(),
                  e.TgZ(96, "th"),
                  e._uU(97, "Token Name"),
                  e.qZA(),
                  e.TgZ(98, "th"),
                  e._uU(99, "Owner Address"),
                  e.qZA(),
                  e.TgZ(100, "th"),
                  e._uU(101, "ID "),
                  e.qZA(),
                  e.TgZ(102, "th"),
                  e._uU(103, "Precision"),
                  e.qZA(),
                  e.TgZ(104, "th"),
                  e._uU(105, "Total Supply"),
                  e.qZA(),
                  e.TgZ(106, "th"),
                  e._uU(107, "Operation"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.YNc(108, sn, 4, 0, "tbody", 0),
                  e.YNc(109, cn, 2, 1, "tbody", 0),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e._UZ(110, "app-footer")),
                  2 & t &&
                    (e.Q6J("ngIf", o.loader),
                    e.xp6(16),
                    e.hij(" ", o.totalcount, " "),
                    e.xp6(5),
                    e.hij("+", o.weekcount, ""),
                    e.xp6(28),
                    e.Q6J("ngIf", 0 == o.TRC20List.length),
                    e.xp6(1),
                    e.Q6J("ngIf", o.TRC20List.length > 0),
                    e.xp6(18),
                    e.Q6J("ngIf", 0 == o.TRC721List.length),
                    e.xp6(1),
                    e.Q6J("ngIf", o.TRC721List.length > 0),
                    e.xp6(18),
                    e.Q6J("ngIf", 0 == o.TRC1155List.length),
                    e.xp6(1),
                    e.Q6J("ngIf", o.TRC1155List.length > 0),
                    e.xp6(20),
                    e.Q6J("ngIf", 0 == o.TRC10List.length),
                    e.xp6(1),
                    e.Q6J("ngIf", o.TRC10List.length > 0));
              },
              directives: [p.O5, g, m, _, f, p.sg, u.yS],
              styles: [""],
            })),
            n
          );
        })(),
        un = (() => {
          class n {
            constructor() {}
            ngOnInit() {}
          }
          return (
            (n.ɵfac = function (t) {
              return new (t || n)();
            }),
            (n.ɵcmp = e.Xpm({
              type: n,
              selectors: [["app-commitee"]],
              decls: 177,
              vars: 0,
              consts: [
                [1, "container"],
                [1, "white-bg", "p-3", "mb-4"],
                [
                  "id",
                  "myTab",
                  "role",
                  "tablist",
                  1,
                  "nav",
                  "nav-tabs",
                  "site-tabs",
                ],
                [1, "nav-item"],
                [
                  "id",
                  "home-tab",
                  "data-toggle",
                  "tab",
                  "href",
                  "#home",
                  "role",
                  "tab",
                  "aria-controls",
                  "home",
                  "aria-selected",
                  "true",
                  1,
                  "nav-link",
                  "active",
                ],
                [
                  "id",
                  "profile-tab",
                  "data-toggle",
                  "tab",
                  "href",
                  "#profile",
                  "role",
                  "tab",
                  "aria-controls",
                  "profile",
                  "aria-selected",
                  "false",
                  1,
                  "nav-link",
                ],
                ["id", "myTabContent", 1, "tab-content"],
                [
                  "id",
                  "home",
                  "role",
                  "tabpanel",
                  "aria-labelledby",
                  "home-tab",
                  1,
                  "tab-pane",
                  "fade",
                  "show",
                  "active",
                ],
                [1, "table-responsive", "bg-white"],
                [1, "table"],
                ["scope", "row"],
                ["href", "#", 1, "site-link"],
                [
                  "id",
                  "profile",
                  "role",
                  "tabpanel",
                  "aria-labelledby",
                  "profile-tab",
                  1,
                  "tab-pane",
                  "fade",
                ],
                [
                  "id",
                  "contact",
                  "role",
                  "tabpanel",
                  "aria-labelledby",
                  "contact-tab",
                  1,
                  "tab-pane",
                  "fade",
                ],
              ],
              template: function (t, o) {
                1 & t &&
                  (e._UZ(0, "app-header"),
                  e._UZ(1, "app-searchbar"),
                  e.TgZ(2, "section"),
                  e.TgZ(3, "div", 0),
                  e.TgZ(4, "div", 1),
                  e._uU(
                    5,
                    " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
                  ),
                  e.qZA(),
                  e.TgZ(6, "ul", 2),
                  e.TgZ(7, "li", 3),
                  e.TgZ(8, "a", 4),
                  e._uU(9, "Govering Bodies"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(10, "li", 3),
                  e.TgZ(11, "a", 5),
                  e._uU(12, "StateGB Partner"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(13, "div", 6),
                  e.TgZ(14, "div", 7),
                  e.TgZ(15, "div", 8),
                  e.TgZ(16, "table", 9),
                  e.TgZ(17, "thead"),
                  e.TgZ(18, "tr"),
                  e.TgZ(19, "th"),
                  e._uU(20, "Name"),
                  e.qZA(),
                  e.TgZ(21, "th"),
                  e._uU(22, "Rranking"),
                  e.qZA(),
                  e.TgZ(23, "th"),
                  e._uU(24, "Votes"),
                  e.qZA(),
                  e.TgZ(25, "th"),
                  e._uU(26, "Total produced"),
                  e.qZA(),
                  e.TgZ(27, "th"),
                  e._uU(28, "Last block"),
                  e.qZA(),
                  e.TgZ(29, "th"),
                  e._uU(30, "Rewards distribution ratio"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(31, "tbody"),
                  e.TgZ(32, "tr"),
                  e.TgZ(33, "td", 10),
                  e.TgZ(34, "a", 11),
                  e._uU(35, " http://explorer.agnus.org"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(36, "td"),
                  e._uU(37, "1"),
                  e.qZA(),
                  e.TgZ(38, "td"),
                  e._uU(39, "120"),
                  e.qZA(),
                  e.TgZ(40, "td"),
                  e._uU(41, "72116"),
                  e.qZA(),
                  e.TgZ(42, "td"),
                  e._uU(43, "227235"),
                  e.qZA(),
                  e.TgZ(44, "td"),
                  e._uU(45, "Voter: 80 % GB: 20 %"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(46, "tr"),
                  e.TgZ(47, "td", 10),
                  e.TgZ(48, "a", 11),
                  e._uU(49, " http://explorer.agnus.org"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(50, "td"),
                  e._uU(51, "1"),
                  e.qZA(),
                  e.TgZ(52, "td"),
                  e._uU(53, "120"),
                  e.qZA(),
                  e.TgZ(54, "td"),
                  e._uU(55, "72116"),
                  e.qZA(),
                  e.TgZ(56, "td"),
                  e._uU(57, "227235"),
                  e.qZA(),
                  e.TgZ(58, "td"),
                  e._uU(59, "Voter: 80 % GB: 20 %"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(60, "tr"),
                  e.TgZ(61, "td", 10),
                  e.TgZ(62, "a", 11),
                  e._uU(63, " http://explorer.agnus.org"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(64, "td"),
                  e._uU(65, "1"),
                  e.qZA(),
                  e.TgZ(66, "td"),
                  e._uU(67, "120"),
                  e.qZA(),
                  e.TgZ(68, "td"),
                  e._uU(69, "72116"),
                  e.qZA(),
                  e.TgZ(70, "td"),
                  e._uU(71, "227235"),
                  e.qZA(),
                  e.TgZ(72, "td"),
                  e._uU(73, "Voter: 80 % GB: 20 %"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(74, "tr"),
                  e.TgZ(75, "td", 10),
                  e.TgZ(76, "a", 11),
                  e._uU(77, " http://explorer.agnus.org"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(78, "td"),
                  e._uU(79, "1"),
                  e.qZA(),
                  e.TgZ(80, "td"),
                  e._uU(81, "120"),
                  e.qZA(),
                  e.TgZ(82, "td"),
                  e._uU(83, "72116"),
                  e.qZA(),
                  e.TgZ(84, "td"),
                  e._uU(85, "227235"),
                  e.qZA(),
                  e.TgZ(86, "td"),
                  e._uU(87, "Voter: 80 % GB: 20 %"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(88, "tr"),
                  e.TgZ(89, "td", 10),
                  e.TgZ(90, "a", 11),
                  e._uU(91, " http://explorer.agnus.org"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(92, "td"),
                  e._uU(93, "1"),
                  e.qZA(),
                  e.TgZ(94, "td"),
                  e._uU(95, "120"),
                  e.qZA(),
                  e.TgZ(96, "td"),
                  e._uU(97, "72116"),
                  e.qZA(),
                  e.TgZ(98, "td"),
                  e._uU(99, "227235"),
                  e.qZA(),
                  e.TgZ(100, "td"),
                  e._uU(101, "Voter: 80 % GB: 20 %"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(102, "tr"),
                  e.TgZ(103, "td", 10),
                  e.TgZ(104, "a", 11),
                  e._uU(105, " http://explorer.agnus.org"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(106, "td"),
                  e._uU(107, "1"),
                  e.qZA(),
                  e.TgZ(108, "td"),
                  e._uU(109, "120"),
                  e.qZA(),
                  e.TgZ(110, "td"),
                  e._uU(111, "72116"),
                  e.qZA(),
                  e.TgZ(112, "td"),
                  e._uU(113, "227235"),
                  e.qZA(),
                  e.TgZ(114, "td"),
                  e._uU(115, "Voter: 80 % GB: 20 %"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(116, "tr"),
                  e.TgZ(117, "td", 10),
                  e.TgZ(118, "a", 11),
                  e._uU(119, " http://explorer.agnus.org"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(120, "td"),
                  e._uU(121, "1"),
                  e.qZA(),
                  e.TgZ(122, "td"),
                  e._uU(123, "120"),
                  e.qZA(),
                  e.TgZ(124, "td"),
                  e._uU(125, "72116"),
                  e.qZA(),
                  e.TgZ(126, "td"),
                  e._uU(127, "227235"),
                  e.qZA(),
                  e.TgZ(128, "td"),
                  e._uU(129, "Voter: 80 % GB: 20 %"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(130, "tr"),
                  e.TgZ(131, "td", 10),
                  e.TgZ(132, "a", 11),
                  e._uU(133, " http://explorer.agnus.org"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(134, "td"),
                  e._uU(135, "1"),
                  e.qZA(),
                  e.TgZ(136, "td"),
                  e._uU(137, "120"),
                  e.qZA(),
                  e.TgZ(138, "td"),
                  e._uU(139, "72116"),
                  e.qZA(),
                  e.TgZ(140, "td"),
                  e._uU(141, "227235"),
                  e.qZA(),
                  e.TgZ(142, "td"),
                  e._uU(143, "Voter: 80 % GB: 20 %"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(144, "tr"),
                  e.TgZ(145, "td", 10),
                  e.TgZ(146, "a", 11),
                  e._uU(147, " http://explorer.agnus.org"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(148, "td"),
                  e._uU(149, "1"),
                  e.qZA(),
                  e.TgZ(150, "td"),
                  e._uU(151, "120"),
                  e.qZA(),
                  e.TgZ(152, "td"),
                  e._uU(153, "72116"),
                  e.qZA(),
                  e.TgZ(154, "td"),
                  e._uU(155, "227235"),
                  e.qZA(),
                  e.TgZ(156, "td"),
                  e._uU(157, "Voter: 80 % GB: 20 %"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(158, "tr"),
                  e.TgZ(159, "td", 10),
                  e.TgZ(160, "a", 11),
                  e._uU(161, " http://explorer.agnus.org"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(162, "td"),
                  e._uU(163, "1"),
                  e.qZA(),
                  e.TgZ(164, "td"),
                  e._uU(165, "120"),
                  e.qZA(),
                  e.TgZ(166, "td"),
                  e._uU(167, "72116"),
                  e.qZA(),
                  e.TgZ(168, "td"),
                  e._uU(169, "227235"),
                  e.qZA(),
                  e.TgZ(170, "td"),
                  e._uU(171, "Voter: 80 % GB: 20 %"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(172, "div", 12),
                  e._uU(173, "..."),
                  e.qZA(),
                  e.TgZ(174, "div", 13),
                  e._uU(175, "..."),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e._UZ(176, "app-footer"));
              },
              directives: [g, m, _],
              styles: [""],
            })),
            n
          );
        })(),
        pn = (() => {
          class n {
            constructor(t) {
              (this.route = t),
                (this.token = localStorage.getItem("H1gh-VaLTokEN")),
                null == this.token && this.route.navigate(["login"]);
            }
            ngOnInit() {}
          }
          return (
            (n.ɵfac = function (t) {
              return new (t || n)(e.Y36(u.F0));
            }),
            (n.ɵcmp = e.Xpm({
              type: n,
              selectors: [["app-wallet"]],
              decls: 47,
              vars: 0,
              consts: [
                [1, "pt-0"],
                [1, "container"],
                [
                  "id",
                  "myTab",
                  "role",
                  "tablist",
                  1,
                  "nav",
                  "nav-tabs",
                  "site-tabs",
                ],
                [1, "nav-item"],
                [
                  "id",
                  "home-tab",
                  "data-toggle",
                  "tab",
                  "href",
                  "#home",
                  "role",
                  "tab",
                  "aria-controls",
                  "home",
                  "aria-selected",
                  "true",
                  1,
                  "nav-link",
                  "active",
                ],
                [
                  "id",
                  "profile-tab",
                  "data-toggle",
                  "tab",
                  "href",
                  "#profile",
                  "role",
                  "tab",
                  "aria-controls",
                  "profile",
                  "aria-selected",
                  "false",
                  1,
                  "nav-link",
                ],
                ["id", "myTabContent", 1, "tab-content"],
                [
                  "id",
                  "home",
                  "role",
                  "tabpanel",
                  "aria-labelledby",
                  "home-tab",
                  1,
                  "tab-pane",
                  "fade",
                  "show",
                  "active",
                ],
                [1, "col-lg-6", "col-md-12", "p-5"],
                [1, "site-form"],
                [1, "form-group", "text-center"],
                ["src", "assets/images/qr.png"],
                [1, "form-group", "mb-4", "text-center"],
                ["for", "formGroupExampleInput"],
                [1, "h5"],
                [1, "far", "fa-copy", "ml-3", "btn", "blue-btn", "py-2"],
                [1, "form-group", "card", "p-3"],
                [
                  "type",
                  "submit",
                  1,
                  "btn",
                  "col-md-4",
                  "blue-btn",
                  "btn-lg",
                  "w-f",
                  "text-uppercase",
                ],
                [
                  "id",
                  "profile",
                  "role",
                  "tabpanel",
                  "aria-labelledby",
                  "profile-tab",
                  1,
                  "tab-pane",
                  "fade",
                ],
                [1, "form-group", "mb-4"],
                [
                  "type",
                  "text",
                  "id",
                  "formGroupExampleInput",
                  "placeholder",
                  "Enter Address",
                  1,
                  "form-control",
                ],
                ["for", "formGroupExampleInput2"],
                [
                  "type",
                  "text",
                  "id",
                  "formGroupExampleInput2",
                  "placeholder",
                  "Enter Amount",
                  1,
                  "form-control",
                ],
              ],
              template: function (t, o) {
                1 & t &&
                  (e._UZ(0, "app-header"),
                  e._UZ(1, "app-searchbar"),
                  e.TgZ(2, "section", 0),
                  e.TgZ(3, "div", 1),
                  e.TgZ(4, "ul", 2),
                  e.TgZ(5, "li", 3),
                  e.TgZ(6, "a", 4),
                  e._uU(7, "Deposit"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(8, "li", 3),
                  e.TgZ(9, "a", 5),
                  e._uU(10, "Withdraw"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(11, "div", 6),
                  e.TgZ(12, "div", 7),
                  e.TgZ(13, "div", 8),
                  e.TgZ(14, "form", 9),
                  e.TgZ(15, "div", 10),
                  e._UZ(16, "img", 11),
                  e.qZA(),
                  e.TgZ(17, "div", 12),
                  e.TgZ(18, "label", 13),
                  e._uU(19, "Wallet Address"),
                  e.qZA(),
                  e.TgZ(20, "div", 14),
                  e._uU(21, "Ndoerolv959ldvld;df0eolvdljryk "),
                  e._UZ(22, "i", 15),
                  e.qZA(),
                  e.qZA(),
                  e._UZ(23, "div", 12),
                  e.TgZ(24, "div", 16),
                  e.TgZ(25, "strong"),
                  e._uU(26, "Notice :"),
                  e.qZA(),
                  e.TgZ(27, "p"),
                  e._uU(
                    28,
                    "Please deposit the coins to the above address and they will appear in your wallet after the transactions is confirmed."
                  ),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(29, "div", 10),
                  e.TgZ(30, "button", 17),
                  e._uU(31, "Submit"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(32, "div", 18),
                  e.TgZ(33, "div", 8),
                  e.TgZ(34, "form", 9),
                  e.TgZ(35, "div", 19),
                  e.TgZ(36, "label", 13),
                  e._uU(37, "Recipient Address"),
                  e.qZA(),
                  e._UZ(38, "input", 20),
                  e.qZA(),
                  e.TgZ(39, "div", 19),
                  e.TgZ(40, "label", 21),
                  e._uU(41, "Amount"),
                  e.qZA(),
                  e._UZ(42, "input", 22),
                  e.qZA(),
                  e.TgZ(43, "div", 10),
                  e.TgZ(44, "button", 17),
                  e._uU(45, "Submit"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e._UZ(46, "app-footer"));
              },
              directives: [g, m, l._Y, l.JL, l.F, _],
              styles: [".tab-content[_ngcontent-%COMP%]{background:#fff}"],
            })),
            n
          );
        })();
      var ee = T(9797);
      let re = (() => {
        class n {
          constructor() {}
          ngOnInit() {}
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)();
          }),
          (n.ɵcmp = e.Xpm({
            type: n,
            selectors: [["app-leftnav"]],
            decls: 10,
            vars: 0,
            consts: [
              [1, "left-nav"],
              ["routerLink", "/asset"],
              ["routerLink", "/account"],
              ["routerLink", "/record-token"],
            ],
            template: function (t, o) {
              1 & t &&
                (e.TgZ(0, "ul", 0),
                e.TgZ(1, "li"),
                e.TgZ(2, "a", 1),
                e._uU(3, "Asset"),
                e.qZA(),
                e.qZA(),
                e.TgZ(4, "li"),
                e.TgZ(5, "a", 2),
                e._uU(6, "Account"),
                e.qZA(),
                e.qZA(),
                e.TgZ(7, "li"),
                e.TgZ(8, "a", 3),
                e._uU(9, "Record a Token"),
                e.qZA(),
                e.qZA(),
                e.qZA());
            },
            directives: [u.yS],
            styles: [""],
          })),
          n
        );
      })();
      function gn(n, i) {
        1 & n && e._UZ(0, "app-loader");
      }
      function Zn(n, i) {
        if (1 & n) {
          const t = e.EpF();
          e.ynx(0),
            e.TgZ(1, "div", 7),
            e.TgZ(2, "div", 8),
            e.TgZ(3, "div", 9),
            e.TgZ(4, "div", 10),
            e._UZ(5, "img", 103),
            e.qZA(),
            e.TgZ(6, "div", 12),
            e._uU(7),
            e.qZA(),
            e.qZA(),
            e.TgZ(8, "div", 97),
            e._uU(9),
            e.qZA(),
            e.TgZ(10, "div", 14),
            e.TgZ(11, "button", 104),
            e.NdJ("click", function () {
              const r = e.CHM(t).$implicit;
              return e
                .oxw()
                .showpopup(
                  r.token_name,
                  r.user_address,
                  r.contract_address,
                  r.token_bal
                );
            }),
            e._uU(12, "Send"),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.BQk();
        }
        if (2 & n) {
          const t = i.$implicit;
          e.xp6(5),
            e.s9C("src", t.token_logo, e.LSH),
            e.xp6(2),
            e.Oqu(t.token_name),
            e.xp6(2),
            e.hij("Balance : ", t.token_bal, "");
        }
      }
      function _n(n, i) {
        1 & n &&
          (e.TgZ(0, "tbody"),
          e.TgZ(1, "tr"),
          e.TgZ(2, "td"),
          e._uU(3, "NO data found"),
          e.qZA(),
          e.qZA(),
          e.qZA());
      }
      function hn(n, i) {
        1 & n && (e.TgZ(0, "td"), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("-"));
      }
      function mn(n, i) {
        if ((1 & n && (e.TgZ(0, "td"), e._uU(1), e.qZA()), 2 & n)) {
          const t = e.oxw().$implicit;
          e.xp6(1), e.Oqu(t.amount);
        }
      }
      function Tn(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "td"), e.TgZ(1, "a", 107), e._uU(2), e.qZA(), e.qZA()),
          2 & n)
        ) {
          const t = e.oxw().$implicit;
          e.xp6(1),
            e.MGl("routerLink", "/address-info/", t.to, ""),
            e.s9C("title", t.to),
            e.xp6(1),
            e.Oqu(t.toaddress_split);
        }
      }
      function fn(n, i) {
        1 & n && (e.TgZ(0, "td"), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("NaN"));
      }
      function An(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "tr"),
            e.TgZ(1, "td"),
            e.TgZ(2, "a", 105),
            e._uU(3),
            e.qZA(),
            e.qZA(),
            e.TgZ(4, "td"),
            e._uU(5),
            e.qZA(),
            e.TgZ(6, "td"),
            e.TgZ(7, "span", 106),
            e._uU(8),
            e.qZA(),
            e.qZA(),
            e.YNc(9, hn, 2, 1, "td", 0),
            e.YNc(10, mn, 2, 1, "td", 0),
            e.TgZ(11, "td"),
            e.TgZ(12, "a", 107),
            e._uU(13),
            e.qZA(),
            e.qZA(),
            e.YNc(14, Tn, 3, 3, "td", 0),
            e.YNc(15, fn, 2, 1, "td", 0),
            e.TgZ(16, "td"),
            e._uU(17),
            e.qZA(),
            e.TgZ(18, "td"),
            e._uU(19),
            e.ALo(20, "date"),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = i.$implicit;
          e.xp6(2),
            e.MGl("routerLink", "/transaction-details/", t.txID, ""),
            e.xp6(1),
            e.Oqu(t.txID_split),
            e.xp6(2),
            e.Oqu("0" == t.method ? "Coin Transfer" : t.method),
            e.xp6(3),
            e.Oqu(null == t.approveHash ? "-" : t.approveHash),
            e.xp6(1),
            e.Q6J("ngIf", !t.amount),
            e.xp6(1),
            e.Q6J("ngIf", t.amount),
            e.xp6(2),
            e.MGl("routerLink", "/address-info/", t.from, ""),
            e.s9C("title", t.from),
            e.xp6(1),
            e.Oqu(t.fromaddress_split),
            e.xp6(1),
            e.Q6J("ngIf", "undefined" !== t.to),
            e.xp6(1),
            e.Q6J("ngIf", "undefined" == t.to),
            e.xp6(2),
            e.Oqu(t.type),
            e.xp6(2),
            e.Oqu(e.xi3(20, 13, t.dateTime, "yyyy-MM-dd HH:mm:ss "));
        }
      }
      const vn = function (n) {
        return { itemsPerPage: 10, currentPage: n };
      };
      function qn(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "tbody"),
            e.YNc(1, An, 21, 16, "tr", 19),
            e.ALo(2, "paginate"),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(1),
            e.Q6J(
              "ngForOf",
              e.xi3(2, 1, t.transactionData, e.VKq(4, vn, t.page))
            );
        }
      }
      function bn(n, i) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "pagination-controls", 108),
            e.NdJ("pageChange", function (a) {
              return e.CHM(t), (e.oxw().page = a);
            }),
            e.qZA();
        }
      }
      function yn(n, i) {
        1 & n && (e.TgZ(0, "span", 111), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter Contract address"));
      }
      function Un(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 109), e.YNc(1, yn, 2, 1, "span", 110), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(73);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function xn(n, i) {
        1 & n && (e.TgZ(0, "span", 111), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter to address"));
      }
      function kn(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 109), e.YNc(1, xn, 2, 1, "span", 110), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(81);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function Cn(n, i) {
        1 & n && (e.TgZ(0, "span", 111), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter amount"));
      }
      function wn(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 109), e.YNc(1, Cn, 2, 1, "span", 110), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(96);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function Mn(n, i) {
        1 & n && (e.TgZ(0, "span", 111), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter private key"));
      }
      function In(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 109), e.YNc(1, Mn, 2, 1, "span", 110), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(102);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function Nn(n, i) {
        1 & n && (e.TgZ(0, "span", 111), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter note"));
      }
      function On(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 109), e.YNc(1, Nn, 2, 1, "span", 110), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(108);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function Jn(n, i) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "button", 112),
            e.NdJ("click", function () {
              e.CHM(t);
              const a = e.oxw(),
                r = e.MAs(68);
              return a.submitFuncToken(r);
            }),
            e._uU(1, "Transfer"),
            e.qZA();
        }
        if (2 & n) {
          e.oxw();
          const t = e.MAs(68);
          e.Q6J("disabled", t.invalid);
        }
      }
      function Rn(n, i) {
        1 & n && (e.TgZ(0, "span", 111), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter to address"));
      }
      function En(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 109), e.YNc(1, Rn, 2, 1, "span", 110), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(128);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function Sn(n, i) {
        1 & n && (e.TgZ(0, "span", 111), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter amount"));
      }
      function Ln(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 109), e.YNc(1, Sn, 2, 1, "span", 110), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(134);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function Yn(n, i) {
        1 & n && (e.TgZ(0, "span", 111), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter private key"));
      }
      function Qn(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 109), e.YNc(1, Yn, 2, 1, "span", 110), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(102);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function Pn(n, i) {
        1 & n && (e.TgZ(0, "span", 111), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter note"));
      }
      function Fn(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 109), e.YNc(1, Pn, 2, 1, "span", 110), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(108);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function Dn(n, i) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "button", 112),
            e.NdJ("click", function () {
              e.CHM(t);
              const a = e.oxw(),
                r = e.MAs(123);
              return a.submitFunc(r);
            }),
            e._uU(1, "Transfer"),
            e.qZA();
        }
        if (2 & n) {
          e.oxw();
          const t = e.MAs(123);
          e.Q6J("disabled", t.invalid);
        }
      }
      function Hn(n, i) {
        1 & n && (e.TgZ(0, "span", 111), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter to address"));
      }
      function Bn(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 109), e.YNc(1, Hn, 2, 1, "span", 110), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(166);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function jn(n, i) {
        1 & n && (e.TgZ(0, "span", 111), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter to address"));
      }
      function Vn(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 109), e.YNc(1, jn, 2, 1, "span", 110), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(81);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function Gn(n, i) {
        1 & n && (e.TgZ(0, "span", 111), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter amount"));
      }
      function zn(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 109), e.YNc(1, Gn, 2, 1, "span", 110), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(96);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function Wn(n, i) {
        1 & n && (e.TgZ(0, "span", 111), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter private key"));
      }
      function $n(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 109), e.YNc(1, Wn, 2, 1, "span", 110), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(102);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function Xn(n, i) {
        1 & n && (e.TgZ(0, "span", 111), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter note"));
      }
      function Kn(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 109), e.YNc(1, Xn, 2, 1, "span", 110), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(108);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function eo(n, i) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "button", 112),
            e.NdJ("click", function () {
              e.CHM(t);
              const a = e.oxw(),
                r = e.MAs(161);
              return a.submitFuncTRC(r);
            }),
            e._uU(1, "Transfer"),
            e.qZA();
        }
        if (2 & n) {
          e.oxw();
          const t = e.MAs(161);
          e.Q6J("disabled", t.invalid);
        }
      }
      function to(n, i) {
        1 & n && (e.TgZ(0, "span", 111), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter amount"));
      }
      function no(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 109), e.YNc(1, to, 2, 1, "span", 110), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(96);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function oo(n, i) {
        1 & n && (e.TgZ(0, "span", 111), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter to address"));
      }
      function io(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 109), e.YNc(1, oo, 2, 1, "span", 110), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(224);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function ao(n, i) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "button", 112),
            e.NdJ("click", function () {
              e.CHM(t);
              const a = e.oxw(),
                r = e.MAs(205);
              return a.submitFreeze(r);
            }),
            e._uU(1, "Freeze"),
            e.qZA();
        }
        if (2 & n) {
          e.oxw();
          const t = e.MAs(205);
          e.Q6J("disabled", t.invalid);
        }
      }
      function ro(n, i) {
        1 & n && (e.TgZ(0, "span", 111), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter to address"));
      }
      function so(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 109), e.YNc(1, ro, 2, 1, "span", 110), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(2);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function lo(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div"),
            e._UZ(1, "input", 113, 114),
            e.YNc(3, so, 2, 1, "div", 37),
            e.qZA()),
          2 & n)
        ) {
          const t = e.MAs(2);
          e.oxw();
          const o = e.MAs(295);
          e.xp6(3),
            e.Q6J("ngIf", t.errors && (t.valid || t.touched || o.submitted));
        }
      }
      function co(n, i) {
        1 & n && (e.TgZ(0, "span", 111), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter to Token Id"));
      }
      function uo(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 109), e.YNc(1, co, 2, 1, "span", 110), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(2);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function po(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div"),
            e._UZ(1, "input", 115, 64),
            e.YNc(3, uo, 2, 1, "div", 37),
            e.qZA()),
          2 & n)
        ) {
          const t = e.MAs(2);
          e.oxw();
          const o = e.MAs(295);
          e.xp6(3),
            e.Q6J("ngIf", t.errors && (t.valid || t.touched || o.submitted));
        }
      }
      let go = (() => {
        class n {
          constructor(t, o, a, r) {
            (this.modalService = t),
              (this.conn = o),
              (this.alert = a),
              (this.route = r),
              (this.sendPopup = !1),
              (this.receivePopup = !1),
              (this.signLoader = !1),
              (this.token = localStorage.getItem("H1gh-VaLTokEN")),
              (this.address = ""),
              (this.privatekey = ""),
              (this.addresscheck = !0),
              (this.privatekeycheck = !0),
              (this.tokpkcheck = !0),
              (this.transactionData = []),
              (this.balance = "Balance : 0.00 luma"),
              (this.ob_type = "BANDWIDTH"),
              (this.token_avl = !1),
              (this.token_logo = ""),
              (this.token_bal = "Available Token : 0.00"),
              (this.token_name = ""),
              (this.tokenData = []),
              (this.caddr1 = ""),
              (this.token_idd = ""),
              (this.current_token_bal = ""),
              (this.current_token_bal_trc10 = ""),
              (this.errorMsg = ""),
              (this.token_nam = ""),
              (this.user_addr = ""),
              (this.id = ""),
              (this.loader = !0),
              (this.conAddr = !0),
              (this.Total_energy = 0),
              (this.Total_bandwidth = 0),
              this.conn.loggedIn() || this.route.navigate(["login"]);
          }
          ngOnInit() {
            this.conn
              .postRequest("account/fetchAddress", {}, this.token)
              .subscribe((o) => {
                (this.address = o.address),
                  (this.privatekey =
                    0 == o.firsttime
                      ? "already sended"
                      : o.privateKey.toLowerCase()),
                  1 == o.firsttime && jQuery("#myModal").modal("show"),
                  this.getassetdata();
              }),
              (this.id = setInterval(() => {
                this.getassetdata();
              }, 25e3));
          }
          getassetdata() {
            this.conn
              .postUrl("account/resouredata", { address: this.address })
              .subscribe((o) => {
                (this.Total_energy = 0), (this.Total_bandwidth = 0);
              }),
              this.conn
                .getRequest("account/getWalletPageData", this.token)
                .subscribe((o) => {
                  1 == o.success &&
                    ((this.balance =
                      "Balance : " + o.result.balance + " luma"),
                    (this.transactionData = o.result.listTransactions));
                }),
              this.conn
                .getRequest("account/getTokenData", this.token)
                .subscribe((o) => {
                  if (1 == o.success) {
                    let a = o.result.tokenData;
                    (a = a.sort(
                      (r, s) =>
                        new Date(r.created_at).getTime() -
                        new Date(s.created_at).getTime()
                    )),
                      (this.tokenData = a);
                  }
                  this.loader = !1;
                });
          }
          showpopup(t, o, a, r) {
            0 == r
              ? ((this.errorMsg = "Insufficient Balance"),
                jQuery("#send_token-box").modal("hide"),
                jQuery("#errorModal").modal("show"))
              : ((this.caddr1 = a),
                (this.current_token_bal = r),
                (this.token_nam = t),
                (this.user_addr = o),
                jQuery("#errorModal").modal("hide"),
                jQuery("#send_token-box").modal("show"));
          }
          showpopuptrc10(t, o, a, r) {
            0 == r
              ? ((this.errorMsg = "Insufficient Balance"),
                jQuery("#trc10-box-box").modal("hide"),
                jQuery("#errorModal").modal("show"))
              : ((this.token_idd = a),
                (this.current_token_bal_trc10 = r),
                (this.token_nam = t),
                (this.user_addr = o),
                jQuery("#errorModal").modal("hide"),
                jQuery("#trc10-box").modal("show"));
          }
          showSend(t) {
            this.modalRef = this.modalService.show(t);
          }
          showReceive(t) {
            this.modalRef = this.modalService.show(t);
          }
          checkedValidAddress(t) {
            null != t &&
              this.conn
                .postUrl("account/checkValidAddress", { address: t })
                .subscribe((a) => {
                  1 == a.success
                    ? ((this.addresscheck = !0),
                      this.alert.success(a.message, "", { timeOut: 2e3 }))
                    : ((this.addresscheck = !1),
                      this.alert.error(a.message, "", { timeOut: 2e3 }));
                });
          }
          checkedValidprivatekey(t) {
            null != t &&
              this.conn
                .postRequest(
                  "account/checkValidprivatekey",
                  { privatekey: t },
                  this.token
                )
                .subscribe((a) => {
                  1 == a.success
                    ? ((this.privatekeycheck = !0),
                      this.alert.success(a.message, "", { timeOut: 2e3 }))
                    : ((this.privatekeycheck = !1),
                      this.alert.error(a.message, "", { timeOut: 2e3 }));
                });
          }
          ckValidpktoken(t) {
            null != t &&
              this.conn
                .postRequest(
                  "account/checkValidprivatekey",
                  { privatekey: t },
                  this.token
                )
                .subscribe((a) => {
                  1 == a.success
                    ? ((this.tokpkcheck = !0),
                      this.alert.success(a.message, "", { timeOut: 2e3 }))
                    : ((this.tokpkcheck = !1),
                      this.alert.error(a.message, "", { timeOut: 2e3 }));
                });
          }
          submitFunc(t) {
            this.addresscheck
              ? this.privatekeycheck
                ? ((this.loader = !0),
                  (this.signLoader = !0),
                  this.conn
                    .postRequest("account/sendAmount", t.value, this.token)
                    .subscribe((a) => {
                      1 == a.success
                        ? (this.alert.success(a.message, "", { timeOut: 2e3 }),
                          t.resetForm(),
                          jQuery("#send-box").modal("hide"),
                          this.getassetdata())
                        : this.alert.error(a.message, "", { timeOut: 2e3 }),
                        (this.signLoader = !1),
                        (this.loader = !1);
                    }))
                : this.alert.error("Invalid privatekey", "", { timeOut: 2e3 })
              : this.alert.error("Invalid address", "", { timeOut: 2e3 });
          }
          submitFuncTRC(t) {
            this.addresscheck
              ? this.privatekeycheck
                ? ((this.loader = !0),
                  (this.signLoader = !0),
                  this.conn
                    .postRequest("account/sendTRCToken", t.value, this.token)
                    .subscribe((a) => {
                      1 == a.success
                        ? (this.alert.success(a.message, "", { timeOut: 2e3 }),
                          t.resetForm(),
                          jQuery("#trc10-box").modal("hide"))
                        : this.alert.error(a.message, "", { timeOut: 2e3 }),
                        (this.signLoader = !1),
                        (this.loader = !1);
                    }))
                : this.alert.error("Invalid privatekey", "", { timeOut: 2e3 })
              : this.alert.error("Invalid address", "", { timeOut: 2e3 });
          }
          submitFuncToken(t) {
            this.addresscheck
              ? this.tokpkcheck
                ? ((this.loader = !0),
                  (this.signLoader = !0),
                  this.conn
                    .postRequest("contract/sendToken", t.value, this.token)
                    .subscribe((a) => {
                      1 == a.success
                        ? (this.alert.success(a.message, "", { timeOut: 2e3 }),
                          t.resetForm(),
                          jQuery("#send_token-box").modal("hide"))
                        : this.alert.error(a.message, "", { timeOut: 2e3 }),
                        (this.signLoader = !1),
                        (this.loader = !1);
                    }))
                : this.alert.error("Invalid privatekey", "", { timeOut: 2e3 })
              : this.alert.error("Invalid address", "", { timeOut: 2e3 });
          }
          add_token() {
            jQuery("#gettoken").modal("show");
          }
          addToken(t, o) {
            (this.loader = !0),
              this.conn
                .postRequest(
                  "account/addToken",
                  { address: t.value, token_type: o.value },
                  this.token
                )
                .subscribe((r) => {
                  1 == r.success
                    ? (this.alert.success(r.message, "", { timeOut: 2e3 }),
                      this.conn
                        .getRequest("account/getTokenData", this.token)
                        .subscribe((s) => {
                          if (1 == s.success) {
                            let c = s.result.tokenData;
                            (c = c.sort(
                              (d, Z) =>
                                new Date(d.created_at).getTime() -
                                new Date(Z.created_at).getTime()
                            )),
                              (this.tokenData = c),
                              jQuery("#gettoken").modal("hide");
                          }
                        }))
                    : (this.alert.error(r.message, "", { timeOut: 2e3 }),
                      jQuery("#gettoken").modal("hide")),
                    (this.loader = !1);
                });
          }
          copyText(t) {
            var o = document.createElement("textarea");
            (o.innerText = t),
              document.body.appendChild(o),
              o.select(),
              o.focus(),
              document.execCommand("copy"),
              document.body.removeChild(o),
              window.scrollTo(0, 0),
              this.alert.success("Address Copied to the clipboard", "", {
                timeOut: 2e3,
              });
          }
          submitFreeze(t) {
            this.addresscheck
              ? ((this.loader = !0),
                (this.signLoader = !0),
                this.conn
                  .postRequest("governance/freezeBalance", t.value, this.token)
                  .subscribe((a) => {
                    1 == a.success
                      ? (jQuery("#freeze-box").modal("hide"),
                        this.alert.success(a.message, "", { timeOut: 2e3 }),
                        t.resetForm())
                      : this.alert.error(a.message, "", { timeOut: 2e3 }),
                      (this.signLoader = !1),
                      (this.loader = !1);
                  }))
              : this.alert.error("Invalid address", "", { timeOut: 2e3 });
          }
          tokenselectoption(t) {
            this.conAddr = "LUMA20" == t;
          }
          ngOnDestroy() {
            this.id && clearInterval(this.id);
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(
              e.Y36(ee.tT),
              e.Y36(h),
              e.Y36(A._W),
              e.Y36(u.F0)
            );
          }),
          (n.ɵcmp = e.Xpm({
            type: n,
            selectors: [["app-asset"]],
            decls: 311,
            vars: 45,
            consts: [
              [4, "ngIf"],
              [1, "pagesection"],
              [1, "container"],
              [1, "row"],
              [1, "col-md-3"],
              [1, "bg-white", "p-3"],
              [1, "col-md-9"],
              [1, "col-md-6", "col-lg-4", "mb-2"],
              [1, "asset-box", "p-3"],
              [1, "d-flex", "align-items-center", "h5"],
              [1, "crypto-icon", "mr-1"],
              ["src", "assets/images/tokenpic.svg"],
              [1, "ba-tit", "wf"],
              [1, "mb-2", 3, "innerText"],
              [1, "d-flex", "my-3", "btn-whl"],
              [
                "data-toggle",
                "modal",
                "data-target",
                "#send-box",
                1,
                "btn",
                "btn-success",
                "flex-fill",
                "mx-1",
              ],
              [
                "data-toggle",
                "modal",
                "data-target",
                "#receive-box",
                1,
                "btn",
                "btn-danger",
                "flex-fill",
                "mx-1",
              ],
              [1, "text-center"],
              [2, "cursor", "pointer", "text-align", "center", 3, "click"],
              [4, "ngFor", "ngForOf"],
              [1, "bg-white", "table-responsive", "mt-3"],
              [1, "table"],
              ["class", "pageination", 3, "pageChange", 4, "ngIf"],
              [
                "id",
                "send_token-box",
                "ng-show",
                "sendPopup",
                1,
                "modal",
                "fade",
              ],
              ["role", "document", 1, "modal-dialog", "modal-dialog-centered"],
              [1, "modal-content"],
              [1, "modal-header"],
              ["id", "exampleModalLongTitle", 1, "modal-title"],
              [3, "innerText"],
              [
                "type",
                "button",
                "data-dismiss",
                "modal",
                "aria-label",
                "Close",
                1,
                "close",
              ],
              ["aria-hidden", "true"],
              [1, "modal-body"],
              ["autocomplete", "off"],
              ["token_form", "ngForm"],
              [1, "form-group"],
              [
                "placeholder",
                "PLEASE TYPE CONTRACT ADDRESS",
                "type",
                "text",
                "name",
                "caddr",
                "ngModel",
                "",
                "required",
                "",
                1,
                "form-control",
                3,
                "ngModel",
                "ngModelChange",
              ],
              ["caddr", "ngModel"],
              ["class", "errMsg", 4, "ngIf"],
              [
                "type",
                "hidden",
                "name",
                "token_name",
                3,
                "ngModel",
                "ngModelChange",
              ],
              [
                "type",
                "hidden",
                "name",
                "user_address",
                3,
                "ngModel",
                "ngModelChange",
              ],
              [
                "placeholder",
                "PLEASE TYPE ADDRESS",
                "type",
                "text",
                "name",
                "toAddress",
                "ngModel",
                "",
                "required",
                "",
                1,
                "form-control",
                3,
                "ngModelChange",
              ],
              ["toAddress", "ngModel"],
              [
                "name",
                "type",
                "ngModel",
                "",
                "required",
                "",
                1,
                "form-control",
              ],
              ["c", "ngModel"],
              ["value", "", "disabled", ""],
              ["value", "trc_20"],
              [
                "placeholder",
                "PLEASE ENTER AMOUNT",
                "type",
                "number",
                "name",
                "amount",
                "min",
                "0",
                "onkeypress",
                "if ( isNaN(this.value + String.fromCharCode(event.keyCode) )) return false;",
                "ngModel",
                "",
                "required",
                "",
                1,
                "form-control",
              ],
              ["amount", "ngModel"],
              [
                "placeholder",
                "PLEASE Enter Your Private Key",
                "type",
                "text",
                "name",
                "privateKey",
                "ngModel",
                "",
                "required",
                "",
                1,
                "form-control",
                3,
                "ngModelChange",
              ],
              ["p", "ngModel"],
              [
                "type",
                "text",
                "placeholder",
                "Note",
                "name",
                "note",
                "ngModel",
                "",
                "required",
                "",
                1,
                "form-control",
                3,
                "maxlength",
              ],
              ["n", "ngModel"],
              [1, "modal-footer", "text-center"],
              [
                "type",
                "submit",
                "class",
                "btn btn-success mx-auto btn-block btn-lg",
                3,
                "disabled",
                "click",
                4,
                "ngIf",
              ],
              ["id", "send-box", "ng-show", "sendPopup", 1, "modal", "fade"],
              ["f", "ngForm"],
              ["u", "ngModel"],
              [
                "placeholder",
                "PLEASE ENTER AMOUNT",
                "type",
                "number",
                "name",
                "amount",
                "min",
                "0",
                "ngModel",
                "",
                "required",
                "",
                "onkeypress",
                "if ( isNaN(this.value + String.fromCharCode(event.keyCode) )) return false;",
                1,
                "form-control",
              ],
              ["e", "ngModel"],
              [
                "placeholder",
                "PLEASE ENTER PRIVATE KEY",
                "type",
                "text",
                "name",
                "privateKey",
                "ngModel",
                "",
                "required",
                "",
                1,
                "form-control",
                3,
                "ngModelChange",
              ],
              [
                "type",
                "text",
                "name",
                "note",
                "placeholder",
                "NOTE",
                "ngModel",
                "",
                "required",
                "",
                1,
                "form-control",
                3,
                "maxlength",
              ],
              ["id", "trc10-box", "ng-show", "sendPopup1", 1, "modal", "fade"],
              ["trc", "ngForm"],
              [
                "placeholder",
                "Please Enter TokenId",
                "type",
                "text",
                "name",
                "tokenId",
                "ngModel",
                "",
                "required",
                "",
                1,
                "form-control",
                3,
                "ngModel",
                "ngModelChange",
              ],
              ["tokenId", "ngModel"],
              [
                "id",
                "freeze-box",
                "ng-show",
                "freezePopup",
                1,
                "modal",
                "fade",
              ],
              ["freeze", "ngForm"],
              [
                "name",
                "obtain_type",
                "required",
                "",
                1,
                "form-control",
                3,
                "ngModel",
                "ngModelChange",
              ],
              ["value", "BANDWIDTH"],
              ["vallue", "ENERGY"],
              [
                "plaeholder",
                "Enter Your Amount",
                "placeholder",
                "PLEASE ENTER AMOUNT",
                "type",
                "number",
                "min",
                "0",
                "name",
                "amount",
                "ngModel",
                "",
                "required",
                "",
                "onkeypress",
                "if ( isNaN(this.value + String.fromCharCode(event.keyCode) )) return false;",
                1,
                "form-control",
              ],
              [
                "placeholder",
                "PLEASE TYPE ADDRESS",
                "type",
                "text",
                "name",
                "toAddress",
                "ngModel",
                "",
                "required",
                "",
                1,
                "form-control",
                3,
                "ngModel",
                "ngModelChange",
              ],
              ["toAddr", "ngModel"],
              [1, "form-group", 2, "padding-left", "23px"],
              [
                "type",
                "checkbox",
                "id",
                "exampleCheck1",
                "value",
                "on",
                "ngModel",
                "",
                "required",
                "",
                1,
                "form-check-input",
              ],
              ["checkbox", "ngModel"],
              ["for", "exampleCheck1", 1, "form-check-label"],
              [
                "id",
                "receive-box",
                "role",
                "dialog",
                "aria-labelledby",
                "exampleModalCenterTitle",
                "aria-hidden",
                "true",
                1,
                "modal",
                "fade",
              ],
              [1, "input-group", "mb-3"],
              [
                "type",
                "text",
                "placeholder",
                "RECIPIENT's USERNAME",
                "aria-label",
                "Recipient's username",
                "aria-describedby",
                "basic-addon2",
                "readonly",
                "",
                1,
                "form-control",
                3,
                "value",
              ],
              ["walletAddress", ""],
              [1, "input-group-append"],
              [
                "id",
                "basic-addon2",
                1,
                "input-group-text",
                "blue-btn",
                3,
                "click",
              ],
              [1, "far", "fa-copy"],
              [1, "form-group", "text-center"],
              ["_ngcontent-bbk-c28", "", 3, "src"],
              ["id", "myModal", 1, "modal", "fade"],
              [1, "modal-dialog"],
              [1, "modal-title"],
              ["type", "button", "data-dismiss", "modal", 1, "close"],
              [2, "word-break", "break-all"],
              [1, "p2", "btn", "dark-btn", "btn-sm", 3, "click"],
              ["id", "errorModal", 1, "modal", "fade"],
              ["id", "gettoken", 1, "modal", "fade"],
              [1, "modal-header", "pb-0", "border-0"],
              ["addtoken", "ngForm"],
              [1, "mb-3", "btn-whl"],
              [1, "mb-2"],
              [
                "name",
                "token_type",
                "ngModel",
                "",
                "required",
                "",
                1,
                "form-control",
                3,
                "ngModelChange",
              ],
              ["token_type", "ngModel"],
              ["value", "", "disabled", "", "selected", "", "hidden", ""],
              ["value", "LUMA20", "selected", ""],
              [
                1,
                "btn",
                "btn-success",
                "flex-fill",
                "mx-1",
                3,
                "disabled",
                "click",
              ],
              [3, "src"],
              [1, "btn", "btn-success", "flex-fill", "mx-1", 3, "click"],
              [3, "routerLink"],
              [1, "large-txt"],
              [3, "routerLink", "title"],
              [1, "pageination", 3, "pageChange"],
              [1, "errMsg"],
              ["class", "error", 4, "ngIf"],
              [1, "error"],
              [
                "type",
                "submit",
                1,
                "btn",
                "btn-success",
                "mx-auto",
                "btn-block",
                "btn-lg",
                3,
                "disabled",
                "click",
              ],
              [
                "placeholder",
                "PLEASE TYPE CONTRACT ADDRESS",
                "type",
                "text",
                "name",
                "contractAddress",
                "ngModel",
                "",
                "required",
                "",
                "autocomplete",
                "off",
                1,
                "form-control",
              ],
              ["contractAddress", "ngModel"],
              [
                "placeholder",
                "PLEASE TYPE TOKEN ID",
                "type",
                "text",
                "name",
                "tokenId",
                "ngModel",
                "",
                "required",
                "",
                "autocomplete",
                "off",
                1,
                "form-control",
              ],
            ],
            template: function (t, o) {
              if (1 & t) {
                const a = e.EpF();
                e.YNc(0, gn, 1, 0, "app-loader", 0),
                  e._UZ(1, "app-header"),
                  e._UZ(2, "app-searchbar"),
                  e.TgZ(3, "section", 1),
                  e.TgZ(4, "div", 2),
                  e.TgZ(5, "div", 3),
                  e.TgZ(6, "div", 4),
                  e.TgZ(7, "div", 5),
                  e._UZ(8, "app-leftnav"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(9, "div", 6),
                  e.TgZ(10, "div", 5),
                  e.TgZ(11, "div", 3),
                  e.TgZ(12, "div", 7),
                  e.TgZ(13, "div", 8),
                  e.TgZ(14, "div", 9),
                  e.TgZ(15, "div", 10),
                  e._UZ(16, "img", 11),
                  e.qZA(),
                  e.TgZ(17, "div", 12),
                  e._uU(18, "LUMA "),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(19, "div", 13),
                  e._uU(20, "Available Token or crypto"),
                  e.qZA(),
                  e.TgZ(21, "div", 14),
                  e.TgZ(22, "button", 15),
                  e._uU(23, "Send"),
                  e.qZA(),
                  e.TgZ(24, "button", 16),
                  e._uU(25, "Receive"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(26, "div", 17),
                  e.TgZ(27, "span", 18),
                  e.NdJ("click", function () {
                    return o.add_token();
                  }),
                  e._uU(28, "Do you have a token ?"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.YNc(29, Zn, 13, 3, "ng-container", 19),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(30, "div", 2),
                  e.TgZ(31, "div", 20),
                  e.TgZ(32, "table", 21),
                  e.TgZ(33, "thead"),
                  e.TgZ(34, "tr"),
                  e.TgZ(35, "th"),
                  e._uU(36, "Hash"),
                  e.qZA(),
                  e.TgZ(37, "th"),
                  e._uU(38, "Transaction Type"),
                  e.qZA(),
                  e.TgZ(39, "th"),
                  e._uU(40, "Approve Hash"),
                  e.qZA(),
                  e.TgZ(41, "th"),
                  e._uU(42, "Amount"),
                  e.qZA(),
                  e.TgZ(43, "th"),
                  e._uU(44, "From"),
                  e.qZA(),
                  e.TgZ(45, "th"),
                  e._uU(46, "To"),
                  e.qZA(),
                  e.TgZ(47, "th"),
                  e._uU(48, "Type"),
                  e.qZA(),
                  e.TgZ(49, "th"),
                  e._uU(50, "Date/Time"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.YNc(51, _n, 4, 0, "tbody", 0),
                  e.YNc(52, qn, 3, 6, "tbody", 0),
                  e.qZA(),
                  e.YNc(53, bn, 1, 0, "pagination-controls", 22),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e._UZ(54, "app-footer"),
                  e.TgZ(55, "div", 23),
                  e.TgZ(56, "div", 24),
                  e.TgZ(57, "div", 25),
                  e.TgZ(58, "div", 26),
                  e.TgZ(59, "h5", 27),
                  e.TgZ(60, "span", 28),
                  e._uU(61, "asd"),
                  e.qZA(),
                  e._uU(62, " Token Transfer Form"),
                  e.qZA(),
                  e.TgZ(63, "button", 29),
                  e.TgZ(64, "span", 30),
                  e._uU(65, "\xd7"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(66, "div", 31),
                  e.TgZ(67, "form", 32, 33),
                  e.TgZ(69, "div", 34),
                  e.TgZ(70, "label"),
                  e._uU(71, "Contract Address"),
                  e.qZA(),
                  e.TgZ(72, "input", 35, 36),
                  e.NdJ("ngModelChange", function (s) {
                    return o.checkedValidAddress(s);
                  })("ngModelChange", function (s) {
                    return (o.caddr1 = s);
                  }),
                  e.qZA(),
                  e.YNc(74, Un, 2, 1, "div", 37),
                  e.TgZ(75, "input", 38),
                  e.NdJ("ngModelChange", function (s) {
                    return (o.token_nam = s);
                  }),
                  e.qZA(),
                  e.TgZ(76, "input", 39),
                  e.NdJ("ngModelChange", function (s) {
                    return (o.user_addr = s);
                  }),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(77, "div", 34),
                  e.TgZ(78, "label"),
                  e._uU(79, "To Address"),
                  e.qZA(),
                  e.TgZ(80, "input", 40, 41),
                  e.NdJ("ngModelChange", function (s) {
                    return o.checkedValidAddress(s);
                  }),
                  e.qZA(),
                  e.YNc(82, kn, 2, 1, "div", 37),
                  e.qZA(),
                  e.TgZ(83, "div", 34),
                  e.TgZ(84, "label"),
                  e._uU(85, "Token Type"),
                  e.qZA(),
                  e.TgZ(86, "select", 42, 43),
                  e.TgZ(88, "option", 44),
                  e._uU(89, "Select Token"),
                  e.qZA(),
                  e.TgZ(90, "option", 45),
                  e._uU(91, "LUMA 20"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(92, "div", 34),
                  e.TgZ(93, "label"),
                  e._uU(94, "Amount"),
                  e.qZA(),
                  e._UZ(95, "input", 46, 47),
                  e.YNc(97, wn, 2, 1, "div", 37),
                  e.qZA(),
                  e.TgZ(98, "div", 34),
                  e.TgZ(99, "label"),
                  e._uU(100, "Your Private Key"),
                  e.qZA(),
                  e.TgZ(101, "input", 48, 49),
                  e.NdJ("ngModelChange", function (s) {
                    return o.checkedValidprivatekey(s);
                  }),
                  e.qZA(),
                  e.YNc(103, In, 2, 1, "div", 37),
                  e.qZA(),
                  e.TgZ(104, "div", 34),
                  e.TgZ(105, "label"),
                  e._uU(106, "Note"),
                  e.qZA(),
                  e._UZ(107, "input", 50, 51),
                  e.YNc(109, On, 2, 1, "div", 37),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(110, "div", 52),
                  e.YNc(111, Jn, 2, 1, "button", 53),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(112, "div", 54),
                  e.TgZ(113, "div", 24),
                  e.TgZ(114, "div", 25),
                  e.TgZ(115, "div", 26),
                  e.TgZ(116, "h5", 27),
                  e._uU(117, "Amount Transfer Form"),
                  e.qZA(),
                  e.TgZ(118, "button", 29),
                  e.TgZ(119, "span", 30),
                  e._uU(120, "\xd7"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(121, "div", 31),
                  e.TgZ(122, "form", 32, 55),
                  e.TgZ(124, "div", 34),
                  e.TgZ(125, "label"),
                  e._uU(126, "To Address"),
                  e.qZA(),
                  e.TgZ(127, "input", 40, 56),
                  e.NdJ("ngModelChange", function (s) {
                    return o.checkedValidAddress(s);
                  }),
                  e.qZA(),
                  e.YNc(129, En, 2, 1, "div", 37),
                  e.qZA(),
                  e.TgZ(130, "div", 34),
                  e.TgZ(131, "label"),
                  e._uU(132, "Amount"),
                  e.qZA(),
                  e._UZ(133, "input", 57, 58),
                  e.YNc(135, Ln, 2, 1, "div", 37),
                  e.qZA(),
                  e.TgZ(136, "div", 34),
                  e.TgZ(137, "label"),
                  e._uU(138, "Your Private Key"),
                  e.qZA(),
                  e.TgZ(139, "input", 59, 49),
                  e.NdJ("ngModelChange", function (s) {
                    return o.checkedValidprivatekey(s);
                  }),
                  e.qZA(),
                  e.YNc(141, Qn, 2, 1, "div", 37),
                  e.qZA(),
                  e.TgZ(142, "div", 34),
                  e.TgZ(143, "label"),
                  e._uU(144, "Note"),
                  e.qZA(),
                  e._UZ(145, "input", 60, 51),
                  e.YNc(147, Fn, 2, 1, "div", 37),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(148, "div", 52),
                  e.YNc(149, Dn, 2, 1, "button", 53),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(150, "div", 61),
                  e.TgZ(151, "div", 24),
                  e.TgZ(152, "div", 25),
                  e.TgZ(153, "div", 26),
                  e.TgZ(154, "h5", 27),
                  e._uU(155, "Token (LUMA10) Transfer Form"),
                  e.qZA(),
                  e.TgZ(156, "button", 29),
                  e.TgZ(157, "span", 30),
                  e._uU(158, "\xd7"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(159, "div", 31),
                  e.TgZ(160, "form", 32, 62),
                  e.TgZ(162, "div", 34),
                  e.TgZ(163, "label"),
                  e._uU(164, "TokenId"),
                  e.qZA(),
                  e.TgZ(165, "input", 63, 64),
                  e.NdJ("ngModelChange", function (s) {
                    return o.checkedValidAddress(s);
                  })("ngModelChange", function (s) {
                    return (o.token_idd = s);
                  }),
                  e.qZA(),
                  e.YNc(167, Bn, 2, 1, "div", 37),
                  e.qZA(),
                  e.TgZ(168, "div", 34),
                  e.TgZ(169, "label"),
                  e._uU(170, "To Address"),
                  e.qZA(),
                  e.TgZ(171, "input", 40, 41),
                  e.NdJ("ngModelChange", function (s) {
                    return o.checkedValidAddress(s);
                  }),
                  e.qZA(),
                  e.YNc(173, Vn, 2, 1, "div", 37),
                  e.qZA(),
                  e.TgZ(174, "div", 34),
                  e.TgZ(175, "label"),
                  e._uU(176, "Amount"),
                  e.qZA(),
                  e._UZ(177, "input", 57, 47),
                  e.YNc(179, zn, 2, 1, "div", 37),
                  e.qZA(),
                  e.TgZ(180, "div", 34),
                  e.TgZ(181, "label"),
                  e._uU(182, "Your Private Key"),
                  e.qZA(),
                  e.TgZ(183, "input", 59, 49),
                  e.NdJ("ngModelChange", function (s) {
                    return o.checkedValidprivatekey(s);
                  }),
                  e.qZA(),
                  e.YNc(185, $n, 2, 1, "div", 37),
                  e.qZA(),
                  e.TgZ(186, "div", 34),
                  e.TgZ(187, "label"),
                  e._uU(188, "Note"),
                  e.qZA(),
                  e._UZ(189, "input", 60, 51),
                  e.YNc(191, Kn, 2, 1, "div", 37),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(192, "div", 52),
                  e.YNc(193, eo, 2, 1, "button", 53),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(194, "div", 65),
                  e.TgZ(195, "div", 24),
                  e.TgZ(196, "div", 25),
                  e.TgZ(197, "div", 26),
                  e.TgZ(198, "h5", 27),
                  e._uU(199, "Obtain Resources and LUMA Power"),
                  e.qZA(),
                  e.TgZ(200, "button", 29),
                  e.TgZ(201, "span", 30),
                  e._uU(202, "\xd7"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(203, "div", 31),
                  e.TgZ(204, "form", 32, 66),
                  e.TgZ(206, "div", 34),
                  e.TgZ(207, "label"),
                  e._uU(208, "Obtain "),
                  e.qZA(),
                  e.TgZ(209, "select", 67),
                  e.NdJ("ngModelChange", function (s) {
                    return (o.ob_type = s);
                  }),
                  e.TgZ(210, "option", 68),
                  e._uU(211, "LUMA Power and Bandwidth"),
                  e.qZA(),
                  e.TgZ(212, "option", 69),
                  e._uU(213, "LUMA Power and Energy"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(214, "div", 34),
                  e.TgZ(215, "label"),
                  e._uU(216, "Amount(LUMA)"),
                  e.qZA(),
                  e._UZ(217, "input", 70, 47),
                  e.YNc(219, no, 2, 1, "div", 37),
                  e.qZA(),
                  e.TgZ(220, "div", 34),
                  e.TgZ(221, "label"),
                  e._uU(222, "Register Address"),
                  e.qZA(),
                  e.TgZ(223, "input", 71, 72),
                  e.NdJ("ngModelChange", function (s) {
                    return o.checkedValidAddress(s);
                  })("ngModelChange", function (s) {
                    return (o.address = s);
                  }),
                  e.qZA(),
                  e.YNc(225, io, 2, 1, "div", 37),
                  e.qZA(),
                  e.TgZ(226, "div", 73),
                  e._UZ(227, "input", 74, 75),
                  e.TgZ(229, "label", 76),
                  e._uU(230, "I confirm to freeze "),
                  e.TgZ(231, "span"),
                  e._uU(232, "0"),
                  e.qZA(),
                  e._uU(233, " luma at least 72 hours"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(234, "div", 52),
                  e.YNc(235, ao, 2, 1, "button", 53),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(236, "div", 77),
                  e.TgZ(237, "div", 24),
                  e.TgZ(238, "div", 25),
                  e.TgZ(239, "div", 26),
                  e.TgZ(240, "h5", 27),
                  e._uU(241, "Your Account Details"),
                  e.qZA(),
                  e.TgZ(242, "button", 29),
                  e.TgZ(243, "span", 30),
                  e._uU(244, "\xd7"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(245, "div", 31),
                  e.TgZ(246, "form"),
                  e.TgZ(247, "div", 34),
                  e.TgZ(248, "label"),
                  e._uU(249, "Wallet address"),
                  e.qZA(),
                  e.TgZ(250, "div", 78),
                  e._UZ(251, "input", 79, 80),
                  e.TgZ(253, "div", 81),
                  e.TgZ(254, "span", 82),
                  e.NdJ("click", function () {
                    return o.copyText(o.address);
                  }),
                  e._UZ(255, "i", 83),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(256, "div", 84),
                  e._UZ(257, "img", 85),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(258, "div", 86),
                  e.TgZ(259, "div", 87),
                  e.TgZ(260, "div", 25),
                  e.TgZ(261, "div", 26),
                  e.TgZ(262, "h5", 88),
                  e._uU(263, "Private Key Details"),
                  e.qZA(),
                  e.TgZ(264, "button", 89),
                  e._uU(265, "\xd7"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(266, "div", 31),
                  e.TgZ(267, "p"),
                  e._uU(
                    268,
                    "Keep your Private Key safe in order to do a transaction if the Private Key is lost funds can't be retrieved. "
                  ),
                  e.qZA(),
                  e.TgZ(269, "p"),
                  e._uU(270, "Private Key : "),
                  e.qZA(),
                  e.TgZ(271, "p", 90),
                  e._uU(272),
                  e.TgZ(273, "span", 91),
                  e.NdJ("click", function () {
                    return o.copyText(o.privatekey);
                  }),
                  e._uU(274, "Copy"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(275, "div", 92),
                  e.TgZ(276, "div", 87),
                  e.TgZ(277, "div", 25),
                  e.TgZ(278, "div", 26),
                  e.TgZ(279, "h5", 88),
                  e._uU(280, "Error"),
                  e.qZA(),
                  e.TgZ(281, "button", 89),
                  e._uU(282, "\xd7"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(283, "div", 31),
                  e._UZ(284, "p", 28),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(285, "div", 93),
                  e.TgZ(286, "div", 87),
                  e.TgZ(287, "div", 25),
                  e.TgZ(288, "div", 94),
                  e.TgZ(289, "h5", 88),
                  e._uU(290, "Enter Contact Address :"),
                  e.qZA(),
                  e.TgZ(291, "button", 89),
                  e._uU(292, "\xd7"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(293, "div", 31),
                  e.TgZ(294, "form", 32, 95),
                  e.TgZ(296, "div", 96),
                  e.TgZ(297, "label"),
                  e._uU(298, "Token Type"),
                  e.qZA(),
                  e.TgZ(299, "div", 97),
                  e.TgZ(300, "select", 98, 99),
                  e.NdJ("ngModelChange", function (s) {
                    return o.tokenselectoption(s);
                  }),
                  e.TgZ(302, "option", 100),
                  e._uU(303, "Select Token type"),
                  e.qZA(),
                  e.TgZ(304, "option", 101),
                  e._uU(305, "luma20 Token"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(306, "div", 14),
                  e.YNc(307, lo, 4, 1, "div", 0),
                  e.YNc(308, po, 4, 1, "div", 0),
                  e.TgZ(309, "button", 102),
                  e.NdJ("click", function () {
                    e.CHM(a);
                    const s = e.MAs(295),
                      c = e.MAs(301);
                    return o.addToken(s, c);
                  }),
                  e._uU(310, "Add"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA();
              }
              if (2 & t) {
                const a = e.MAs(68),
                  r = e.MAs(73),
                  s = e.MAs(81),
                  c = e.MAs(96),
                  d = e.MAs(102),
                  Z = e.MAs(108),
                  y = e.MAs(123),
                  U = e.MAs(128),
                  k = e.MAs(134),
                  v = e.MAs(161),
                  N = e.MAs(166),
                  C = e.MAs(205),
                  w = e.MAs(224),
                  M = e.MAs(228),
                  q = e.MAs(295);
                e.Q6J("ngIf", o.loader),
                  e.xp6(19),
                  e.Q6J("innerText", o.balance),
                  e.xp6(10),
                  e.Q6J("ngForOf", o.tokenData),
                  e.xp6(22),
                  e.Q6J("ngIf", 0 == o.transactionData.length),
                  e.xp6(1),
                  e.Q6J("ngIf", o.transactionData.length > 0),
                  e.xp6(1),
                  e.Q6J("ngIf", o.transactionData.length > 10),
                  e.xp6(7),
                  e.Q6J("innerText", o.token_nam),
                  e.xp6(12),
                  e.Q6J("ngModel", o.caddr1),
                  e.xp6(2),
                  e.Q6J(
                    "ngIf",
                    r.errors && (r.valid || r.touched || a.submitted)
                  ),
                  e.xp6(1),
                  e.Q6J("ngModel", o.token_nam),
                  e.xp6(1),
                  e.Q6J("ngModel", o.user_addr),
                  e.xp6(6),
                  e.Q6J(
                    "ngIf",
                    s.errors && (s.valid || s.touched || a.submitted)
                  ),
                  e.xp6(15),
                  e.Q6J(
                    "ngIf",
                    c.errors && (c.valid || c.touched || a.submitted)
                  ),
                  e.xp6(6),
                  e.Q6J(
                    "ngIf",
                    d.errors && (d.valid || d.touched || a.submitted)
                  ),
                  e.xp6(4),
                  e.Q6J("maxlength", 200),
                  e.xp6(2),
                  e.Q6J(
                    "ngIf",
                    Z.errors && (Z.valid || Z.touched || a.submitted)
                  ),
                  e.xp6(2),
                  e.Q6J("ngIf", !o.signLoader),
                  e.xp6(18),
                  e.Q6J(
                    "ngIf",
                    U.errors && (U.valid || U.touched || y.submitted)
                  ),
                  e.xp6(6),
                  e.Q6J(
                    "ngIf",
                    k.errors && (k.valid || k.touched || y.submitted)
                  ),
                  e.xp6(6),
                  e.Q6J(
                    "ngIf",
                    d.errors && (d.valid || d.touched || y.submitted)
                  ),
                  e.xp6(4),
                  e.Q6J("maxlength", 200),
                  e.xp6(2),
                  e.Q6J(
                    "ngIf",
                    Z.errors && (Z.valid || Z.touched || y.submitted)
                  ),
                  e.xp6(2),
                  e.Q6J("ngIf", !o.signLoader),
                  e.xp6(16),
                  e.Q6J("ngModel", o.token_idd),
                  e.xp6(2),
                  e.Q6J(
                    "ngIf",
                    N.errors && (N.valid || N.touched || v.submitted)
                  ),
                  e.xp6(6),
                  e.Q6J(
                    "ngIf",
                    s.errors && (s.valid || s.touched || v.submitted)
                  ),
                  e.xp6(6),
                  e.Q6J(
                    "ngIf",
                    c.errors && (c.valid || c.touched || v.submitted)
                  ),
                  e.xp6(6),
                  e.Q6J(
                    "ngIf",
                    d.errors && (d.valid || d.touched || v.submitted)
                  ),
                  e.xp6(4),
                  e.Q6J("maxlength", 200),
                  e.xp6(2),
                  e.Q6J(
                    "ngIf",
                    Z.errors && (Z.valid || Z.touched || v.submitted)
                  ),
                  e.xp6(2),
                  e.Q6J("ngIf", !o.signLoader),
                  e.xp6(16),
                  e.Q6J("ngModel", o.ob_type),
                  e.xp6(10),
                  e.Q6J(
                    "ngIf",
                    c.errors && (c.valid || c.touched || C.submitted)
                  ),
                  e.xp6(4),
                  e.Q6J("ngModel", o.address),
                  e.xp6(2),
                  e.Q6J(
                    "ngIf",
                    w.errors && (w.valid || w.touched || C.submitted)
                  ),
                  e.xp6(2),
                  e.ekj("is-invalid", M.invalid),
                  e.xp6(8),
                  e.Q6J("ngIf", !o.signLoader),
                  e.xp6(16),
                  e.s9C("value", o.address),
                  e.xp6(6),
                  e.MGl(
                    "src",
                    "https://chart.googleapis.com/chart?cht=qr&chs=221x220&chl=",
                    o.address,
                    "&choe=UTF-8&chld=L",
                    e.LSH
                  ),
                  e.xp6(15),
                  e.hij(" ", o.privatekey, " "),
                  e.xp6(12),
                  e.Q6J("innerText", o.errorMsg),
                  e.xp6(23),
                  e.Q6J("ngIf", o.conAddr),
                  e.xp6(1),
                  e.Q6J("ngIf", !o.conAddr),
                  e.xp6(1),
                  e.Q6J("disabled", q.invalid);
              }
            },
            directives: [
              p.O5,
              g,
              m,
              re,
              p.sg,
              _,
              l._Y,
              l.JL,
              l.F,
              l.Fj,
              l.JJ,
              l.On,
              l.Q7,
              l.EJ,
              l.YN,
              l.Kr,
              l.qQ,
              l.wV,
              l.nD,
              l.Wl,
              l.Zs,
              f,
              u.yS,
              x.LS,
            ],
            pipes: [x._s, p.uU],
            styles: [
              ".pageination[_ngcontent-%COMP%]{float:right;padding-top:0;margin-top:16px;margin-right:10px;padding-right:40px}",
            ],
          })),
          n
        );
      })();
      function Zo(n, i) {
        1 & n && e._UZ(0, "app-loader");
      }
      function _o(n, i) {
        1 & n &&
          (e.TgZ(0, "tbody"),
          e.TgZ(1, "tr"),
          e.TgZ(2, "td"),
          e._uU(3, "NO data found"),
          e.qZA(),
          e.qZA(),
          e.qZA());
      }
      function ho(n, i) {
        1 & n && (e.TgZ(0, "td"), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("-"));
      }
      function mo(n, i) {
        if ((1 & n && (e.TgZ(0, "td"), e._uU(1), e.qZA()), 2 & n)) {
          const t = e.oxw().$implicit;
          e.xp6(1), e.Oqu(t.amount);
        }
      }
      function To(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "td"), e.TgZ(1, "a", 20), e._uU(2), e.qZA(), e.qZA()),
          2 & n)
        ) {
          const t = e.oxw().$implicit;
          e.xp6(1),
            e.MGl("routerLink", "/address-info/", t.to, ""),
            e.s9C("title", t.to),
            e.xp6(1),
            e.Oqu(t.toaddress_split);
        }
      }
      function fo(n, i) {
        1 & n && (e.TgZ(0, "td"), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("None"));
      }
      function Ao(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "tr"),
            e.TgZ(1, "td"),
            e.TgZ(2, "a", 18),
            e._uU(3),
            e.qZA(),
            e.qZA(),
            e.TgZ(4, "td"),
            e.TgZ(5, "span", 19),
            e._uU(6),
            e.qZA(),
            e.qZA(),
            e.YNc(7, ho, 2, 1, "td", 0),
            e.YNc(8, mo, 2, 1, "td", 0),
            e.TgZ(9, "td"),
            e.TgZ(10, "a", 20),
            e._uU(11),
            e.qZA(),
            e.qZA(),
            e.YNc(12, To, 3, 3, "td", 0),
            e.YNc(13, fo, 2, 1, "td", 0),
            e.TgZ(14, "td"),
            e._uU(15),
            e.qZA(),
            e.TgZ(16, "td"),
            e._uU(17),
            e.ALo(18, "date"),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = i.$implicit;
          e.xp6(2),
            e.MGl("routerLink", "/transaction-details/", t.txID, ""),
            e.xp6(1),
            e.Oqu(t.txID_split),
            e.xp6(3),
            e.Oqu(null == t.approveHash ? "-" : t.approveHash),
            e.xp6(1),
            e.Q6J("ngIf", !t.amount),
            e.xp6(1),
            e.Q6J("ngIf", t.amount),
            e.xp6(2),
            e.MGl("routerLink", "/address-info/", t.from, ""),
            e.s9C("title", t.from),
            e.xp6(1),
            e.Oqu(t.fromaddress_split),
            e.xp6(1),
            e.Q6J("ngIf", "undefined" !== t.to),
            e.xp6(1),
            e.Q6J("ngIf", "undefined" == t.to),
            e.xp6(2),
            e.Oqu(t.type),
            e.xp6(2),
            e.Oqu(e.xi3(18, 12, t.dateTime, "yyyy-MM-dd HH:mm:ss "));
        }
      }
      const vo = function (n) {
        return { itemsPerPage: 10, currentPage: n };
      };
      function qo(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "tbody"),
            e.YNc(1, Ao, 19, 15, "tr", 17),
            e.ALo(2, "paginate"),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(1),
            e.Q6J("ngForOf", e.xi3(2, 1, t.transactionData, e.VKq(4, vo, t.p)));
        }
      }
      function bo(n, i) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "pagination-controls", 21),
            e.NdJ("pageChange", function (a) {
              return e.CHM(t), (e.oxw().p = a);
            }),
            e.qZA();
        }
      }
      let yo = (() => {
        class n {
          constructor(t, o, a) {
            (this.conn = t),
              (this.route = o),
              (this.alert = a),
              (this.address = ""),
              (this.balance = ""),
              (this.transactionCount = ""),
              (this.transactionData = []),
              (this.loader = !0),
              (this.token = localStorage.getItem("H1gh-VaLTokEN")),
              this.conn.loggedIn() || this.route.navigate(["login"]);
          }
          ngOnInit() {
            this.conn
              .getRequest("account/getWalletPageData", this.token)
              .subscribe((t) => {
                1 == t.success &&
                  ((this.balance = t.result.balance),
                  (this.address = t.result.address),
                  (this.addressHEX = t.result.useraddress.address_hex),
                  (this.publicKeyval = t.result.useraddress.publicKey),
                  (this.transactionCount = t.result.transactions),
                  (this.transactionData = t.result.listTransactions),
                  (this.publicKey =
                    t.result.useraddress.publicKey.substring(0, 8) +
                    "......" +
                    t.result.useraddress.publicKey.slice(-6))),
                  (this.loader = !1);
              });
          }
          logout() {
            localStorage.removeItem("H1gh-VaLTokEN"),
              localStorage.removeItem("Token"),
              this.alert.success("Logout Successfully", "", { timeOut: 2e3 }),
              this.route.navigate(["login"]);
          }
          copyText(t) {
            let o = document.createElement("input");
            (o.value = t),
              document.body.appendChild(o),
              o.focus(),
              o.select(),
              document.execCommand("copy"),
              document.body.removeChild(o),
              window.scrollTo(0, 0),
              this.alert.success("Address Copied to the clipboard", "", {
                timeOut: 2e3,
              });
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(e.Y36(h), e.Y36(u.F0), e.Y36(A._W));
          }),
          (n.ɵcmp = e.Xpm({
            type: n,
            selectors: [["app-account"]],
            decls: 58,
            vars: 7,
            consts: [
              [4, "ngIf"],
              [1, "container"],
              [1, "row"],
              [1, "col-md-3"],
              [1, "bg-white", "p-3"],
              [1, "col-md-9"],
              [1, ""],
              [1, "asset-box", "p-3", "mb-2"],
              [1, "d-flex", "align-items-center", "h5"],
              [1, "ba-tit", "wf"],
              [1, "table-box"],
              [1, "trbox"],
              [1, "far", "fa-copy", "blue-btn", "btn", 3, "click"],
              [1, "btn", "btn-outline-secondary", "mb-3", 3, "click"],
              [1, "bg-white", "table-responsive", "mt-3"],
              [1, "table"],
              ["class", "pageination", 3, "pageChange", 4, "ngIf"],
              [4, "ngFor", "ngForOf"],
              [3, "routerLink"],
              [1, "large-txt"],
              [3, "routerLink", "title"],
              [1, "pageination", 3, "pageChange"],
            ],
            template: function (t, o) {
              1 & t &&
                (e.YNc(0, Zo, 1, 0, "app-loader", 0),
                e._UZ(1, "app-header"),
                e._UZ(2, "app-searchbar"),
                e.TgZ(3, "section"),
                e.TgZ(4, "div", 1),
                e.TgZ(5, "div", 2),
                e.TgZ(6, "div", 3),
                e.TgZ(7, "div", 4),
                e._UZ(8, "app-leftnav"),
                e.qZA(),
                e.qZA(),
                e.TgZ(9, "div", 5),
                e.TgZ(10, "div", 4),
                e.TgZ(11, "div", 6),
                e.TgZ(12, "div", 7),
                e.TgZ(13, "div", 8),
                e.TgZ(14, "div", 9),
                e._uU(15, "Balance"),
                e.qZA(),
                e.qZA(),
                e.TgZ(16, "div", 10),
                e.TgZ(17, "div", 11),
                e.TgZ(18, "div"),
                e._uU(19, "Address:"),
                e.qZA(),
                e.TgZ(20, "div"),
                e._uU(21),
                e.TgZ(22, "i", 12),
                e.NdJ("click", function () {
                  return o.copyText(o.address);
                }),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.TgZ(23, "div", 11),
                e.TgZ(24, "div"),
                e._uU(25, "Balance:"),
                e.qZA(),
                e.TgZ(26, "div"),
                e._uU(27),
                e.qZA(),
                e.qZA(),
                e.TgZ(28, "div", 11),
                e.TgZ(29, "div"),
                e._uU(30, "Transactions:"),
                e.qZA(),
                e.TgZ(31, "div"),
                e._uU(32),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e._UZ(33, "hr"),
                e.TgZ(34, "button", 13),
                e.NdJ("click", function () {
                  return o.logout();
                }),
                e._uU(35, "Exit Wallet"),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.TgZ(36, "div", 14),
                e.TgZ(37, "table", 15),
                e.TgZ(38, "thead"),
                e.TgZ(39, "tr"),
                e.TgZ(40, "th"),
                e._uU(41, "Hash"),
                e.qZA(),
                e.TgZ(42, "th"),
                e._uU(43, "Approve Hash"),
                e.qZA(),
                e.TgZ(44, "th"),
                e._uU(45, "Amount"),
                e.qZA(),
                e.TgZ(46, "th"),
                e._uU(47, "From"),
                e.qZA(),
                e.TgZ(48, "th"),
                e._uU(49, "To"),
                e.qZA(),
                e.TgZ(50, "th"),
                e._uU(51, "Type"),
                e.qZA(),
                e.TgZ(52, "th"),
                e._uU(53, "Date/Time"),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.YNc(54, _o, 4, 0, "tbody", 0),
                e.YNc(55, qo, 3, 6, "tbody", 0),
                e.qZA(),
                e.YNc(56, bo, 1, 0, "pagination-controls", 16),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e._UZ(57, "app-footer")),
                2 & t &&
                  (e.Q6J("ngIf", o.loader),
                  e.xp6(21),
                  e.hij("", o.address, " "),
                  e.xp6(6),
                  e.hij(" ", o.balance, " luma"),
                  e.xp6(5),
                  e.hij("", o.transactionCount, " TXns"),
                  e.xp6(22),
                  e.Q6J("ngIf", 0 == o.transactionData.length),
                  e.xp6(1),
                  e.Q6J("ngIf", o.transactionData.length > 0),
                  e.xp6(1),
                  e.Q6J("ngIf", o.transactionData.length > 10));
            },
            directives: [p.O5, g, m, re, _, f, p.sg, u.yS, x.LS],
            pipes: [x._s, p.uU],
            styles: [
              ".pageination[_ngcontent-%COMP%]{float:right;padding-top:0;margin-top:16px;margin-right:10px;padding-right:40px}",
            ],
          })),
          n
        );
      })();
      const Uo = ["template1"];
      function xo(n, i) {
        1 & n && e._UZ(0, "app-loader");
      }
      function ko(n, i) {
        1 & n && (e.TgZ(0, "span", 20), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter Email"));
      }
      function Co(n, i) {
        1 & n && (e.TgZ(0, "span", 20), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter valid Email"));
      }
      function wo(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 18),
            e.YNc(1, ko, 2, 1, "span", 19),
            e.YNc(2, Co, 2, 1, "span", 19),
            e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(13);
          e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.required),
            e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.pattern);
        }
      }
      function Mo(n, i) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "button", 21),
            e.NdJ("click", function () {
              e.CHM(t);
              const a = e.oxw(),
                r = e.MAs(10);
              return a.executeAction("forgotpassword", r);
            }),
            e._uU(1, "Submit"),
            e.qZA();
        }
        if (2 & n) {
          e.oxw();
          const t = e.MAs(10);
          e.Q6J("disabled", t.invalid);
        }
      }
      let Io = (() => {
        class n {
          constructor(t, o, a, r, s) {
            (this.conn = t),
              (this.alert = o),
              (this.route = a),
              (this.actRoute = r),
              (this.recaptchaV3Service = s),
              (this.forgotLoader = !1),
              (this.loginToken = ""),
              (this.captchaVal = !1),
              (this.captcha = ""),
              (this.tkn = localStorage.getItem("Tfa")),
              (this.etp = localStorage.getItem("EmailOTP")),
              (this.loader = !1),
              (this.recentToken = ""),
              (this.executionLog = []),
              this.conn.loggedIn() && this.route.navigate(["blockchain"]),
              null != this.tkn && localStorage.clear(),
              null != this.etp && localStorage.clear(),
              "activate_account" == r.snapshot.url[0].path &&
                this.actRoute.params.subscribe((c) => {
                  (this.loginToken =
                    this.actRoute.snapshot.queryParamMap.get("token")),
                    null == this.loginToken ||
                    null == this.loginToken ||
                    "undefined" == this.loginToken
                      ? (this.alert.error("Invalid request", "", {
                          timeOut: 2e3,
                        }),
                        this.route.navigate(["login"]))
                      : this.conn
                          .postUrl("basic/activateEmail", {
                            token: this.loginToken,
                          })
                          .subscribe((d) => {
                            1 == d.success
                              ? this.alert.success(d.msg, "", { timeOut: 2e3 })
                              : this.alert.error(d.msg, "", { timeOut: 2e3 }),
                              this.route.navigate(["login"]);
                          });
                });
          }
          executeAction(t, o) {
            (this.loader = !0),
              this.singleExecutionSubscription &&
                this.singleExecutionSubscription.unsubscribe(),
              (this.singleExecutionSubscription = this.recaptchaV3Service
                .execute(t)
                .subscribe(
                  (a) => {
                    (this.recentToken = a),
                      (this.recentError = void 0),
                      this.submitFunc(o),
                      (this.loader = !1);
                  },
                  (a) => {
                    (this.recentToken = ""),
                      (this.recentError = { error: a }),
                      (this.loader = !1);
                  }
                ));
          }
          ngOnInit() {
            this.allExecutionsSubscription =
              this.recaptchaV3Service.onExecute.subscribe((t) =>
                this.executionLog.push(t)
              );
          }
          ngOnDestroy() {
            this.allExecutionsSubscription &&
              this.allExecutionsSubscription.unsubscribe(),
              this.allExecutionErrorsSubscription &&
                this.allExecutionErrorsSubscription.unsubscribe(),
              this.singleExecutionSubscription &&
                this.singleExecutionSubscription.unsubscribe();
          }
          formatToken(t) {
            return t ? `${t.substr(0, 7)}...${t.substr(-7)}` : "(empty)";
          }
          submitFunc(t) {
            (this.forgotLoader = !0),
              this.conn
                .postUrl("basic/forgotPassword", t.value)
                .subscribe((a) => {
                  1 == a.success
                    ? this.alert.success(
                        "Reset Password link sent to your email",
                        "",
                        { timeOut: 2e3 }
                      )
                    : this.alert.error(a.msg, "", { timeOut: 2e3 }),
                    t.resetForm(),
                    (this.forgotLoader = !1);
                });
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(
              e.Y36(h),
              e.Y36(A._W),
              e.Y36(u.F0),
              e.Y36(u.gz),
              e.Y36(E.YC)
            );
          }),
          (n.ɵcmp = e.Xpm({
            type: n,
            selectors: [["app-forgotpassword"]],
            viewQuery: function (t, o) {
              if ((1 & t && e.Gf(Uo, 5), 2 & t)) {
                let a;
                e.iGM((a = e.CRH())) && (o.template = a.first);
              }
            },
            decls: 28,
            vars: 6,
            consts: [
              [4, "ngIf"],
              [1, "container"],
              [1, "form-box-s", "white-bg", "p-4"],
              [1, "text-center", "mb-5"],
              [1, "blue-t"],
              ["autocomplete", "off", "novalidate", "", 1, "site-form"],
              ["f", "ngForm"],
              [1, "form-group"],
              [
                "type",
                "email",
                "name",
                "email",
                "autocomplete",
                "off",
                "placeholder",
                "Enter email",
                "ngModel",
                "",
                "required",
                "",
                "pattern",
                "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",
                1,
                "form-control",
                3,
                "placeholder",
              ],
              ["e", "ngModel"],
              ["class", "errMsg", 4, "ngIf"],
              [1, "form-group", "mb-5", "mt-3"],
              [
                "type",
                "submit",
                "class",
                "btn btn-block blue-btn btn-lg w-f text-uppercase",
                3,
                "disabled",
                "click",
                4,
                "ngIf",
              ],
              [1, "form-group", "mb-4"],
              [1, "text-center", "dark-t"],
              ["routerLink", "/login"],
              [1, "text-center", "grey-t"],
              ["href", "#", "routerLink", "/register", 1, "dark-t"],
              [1, "errMsg"],
              ["class", "error", 4, "ngIf"],
              [1, "error"],
              [
                "type",
                "submit",
                1,
                "btn",
                "btn-block",
                "blue-btn",
                "btn-lg",
                "w-f",
                "text-uppercase",
                3,
                "disabled",
                "click",
              ],
            ],
            template: function (t, o) {
              if (
                (1 & t &&
                  (e.YNc(0, xo, 1, 0, "app-loader", 0),
                  e._UZ(1, "app-header"),
                  e._UZ(2, "app-searchbar"),
                  e.TgZ(3, "section"),
                  e.TgZ(4, "div", 1),
                  e.TgZ(5, "div", 2),
                  e.TgZ(6, "div", 3),
                  e.TgZ(7, "h2", 4),
                  e._uU(8, "Forgot Password !"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(9, "form", 5, 6),
                  e.TgZ(11, "div", 7),
                  e._UZ(12, "input", 8, 9),
                  e.YNc(14, wo, 3, 2, "div", 10),
                  e.qZA(),
                  e.TgZ(15, "div", 11),
                  e.YNc(16, Mo, 2, 1, "button", 12),
                  e.qZA(),
                  e.TgZ(17, "div", 13),
                  e.TgZ(18, "div", 14),
                  e._uU(19, "Password remembered ? "),
                  e.TgZ(20, "a", 15),
                  e._uU(21, " Login !"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(22, "div", 7),
                  e.TgZ(23, "div", 16),
                  e._uU(24, "If you don\u2019t have an account "),
                  e.TgZ(25, "a", 17),
                  e._uU(26, "Register"),
                  e.qZA(),
                  e._uU(27, " Now"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA()),
                2 & t)
              ) {
                const a = e.MAs(10),
                  r = e.MAs(13);
                e.Q6J("ngIf", o.loader),
                  e.xp6(12),
                  e.ekj("is-invalid", r.invalid && r.touched),
                  e.s9C("placeholder", "Enter email"),
                  e.xp6(2),
                  e.Q6J(
                    "ngIf",
                    r.errors && (r.valid || r.touched || a.submitted)
                  ),
                  e.xp6(2),
                  e.Q6J("ngIf", !o.forgotLoader);
              }
            },
            directives: [
              p.O5,
              g,
              m,
              l._Y,
              l.JL,
              l.F,
              l.Fj,
              l.JJ,
              l.On,
              l.Q7,
              l.c5,
              u.yS,
              f,
            ],
            styles: [""],
          })),
          n
        );
      })();
      const No = ["template1"];
      function Oo(n, i) {
        1 & n && e._UZ(0, "app-loader");
      }
      function Jo(n, i) {
        1 & n && (e.TgZ(0, "span"), e._UZ(1, "i", 21), e.qZA());
      }
      function Ro(n, i) {
        1 & n && (e.TgZ(0, "span"), e._UZ(1, "i", 22), e.qZA());
      }
      function Eo(n, i) {
        1 & n && (e.TgZ(0, "span", 25), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter Password"));
      }
      function So(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 23), e.YNc(1, Eo, 2, 1, "span", 24), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(13);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function Lo(n, i) {
        1 & n && (e.TgZ(0, "span", 25), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter atleast one lowercase"));
      }
      function Yo(n, i) {
        1 & n && (e.TgZ(0, "span", 25), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter atleast one uppercase"));
      }
      function Qo(n, i) {
        1 & n && (e.TgZ(0, "span", 25), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter atleast 8 characters"));
      }
      function Po(n, i) {
        1 & n && (e.TgZ(0, "span", 25), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter atleast one number"));
      }
      function Fo(n, i) {
        1 & n && (e.TgZ(0, "span", 25), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter atleast one special character"));
      }
      function Do(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 23),
            e.YNc(1, Lo, 2, 1, "span", 24),
            e.YNc(2, Yo, 2, 1, "span", 24),
            e.YNc(3, Qo, 2, 1, "span", 24),
            e.YNc(4, Po, 2, 1, "span", 24),
            e.YNc(5, Fo, 2, 1, "span", 24),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(1),
            e.Q6J("ngIf", !t.lower),
            e.xp6(1),
            e.Q6J("ngIf", !t.upper),
            e.xp6(1),
            e.Q6J("ngIf", !t.len),
            e.xp6(1),
            e.Q6J("ngIf", !t.num),
            e.xp6(1),
            e.Q6J("ngIf", !t.spec);
        }
      }
      function Ho(n, i) {
        1 & n && (e.TgZ(0, "span"), e._UZ(1, "i", 21), e.qZA());
      }
      function Bo(n, i) {
        1 & n && (e.TgZ(0, "span"), e._UZ(1, "i", 22), e.qZA());
      }
      function jo(n, i) {
        1 & n && (e.TgZ(0, "span", 25), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter Confirm Password"));
      }
      function Vo(n, i) {
        1 & n && (e.TgZ(0, "span", 25), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Confirm password must be 8-20 letters"));
      }
      function Go(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 23),
            e.YNc(1, jo, 2, 1, "span", 24),
            e.YNc(2, Vo, 2, 1, "span", 24),
            e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(21);
          e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.required),
            e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.maxlength);
        }
      }
      function zo(n, i) {
        1 & n && (e.TgZ(0, "span", 25), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Password does not match"));
      }
      function Wo(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 23), e.YNc(1, zo, 2, 1, "span", 24), e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(1), e.Q6J("ngIf", !t.checkpwd);
        }
      }
      function $o(n, i) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "button", 26),
            e.NdJ("click", function () {
              e.CHM(t);
              const a = e.oxw(),
                r = e.MAs(10);
              return a.executeAction("resetpassword", r);
            }),
            e._uU(1, "Submit"),
            e.qZA();
        }
        if (2 & n) {
          const t = e.oxw(),
            o = e.MAs(10);
          e.Q6J(
            "disabled",
            o.invalid ||
              !t.lower ||
              !t.upper ||
              !t.len ||
              !t.num ||
              !t.spec ||
              !t.checkpwd
          );
        }
      }
      let Xo = (() => {
        class n {
          constructor(t, o, a, r, s) {
            (this.conn = t),
              (this.alert = o),
              (this.route = a),
              (this.actRoute = r),
              (this.recaptchaV3Service = s),
              (this.lower = !0),
              (this.upper = !0),
              (this.len = !0),
              (this.num = !0),
              (this.spec = !0),
              (this.resetLoader = !1),
              (this.captchaVal = !1),
              (this.captcha = ""),
              (this.checkpwd = !0),
              (this.loader = !1),
              (this.recentToken = ""),
              (this.executionLog = []),
              this.actRoute.params.subscribe((c) => {
                (this.resetToken =
                  this.actRoute.snapshot.queryParamMap.get("token")),
                  (this.resetVerify =
                    this.actRoute.snapshot.queryParamMap.get("verify")),
                  (null == this.resetToken ||
                    null == this.resetToken ||
                    "undefined" == this.resetToken ||
                    null == this.resetVerify ||
                    null == this.resetVerify ||
                    "undefined" == this.resetVerify) &&
                    (this.alert.error("Invalid request", "", { timeOut: 2e3 }),
                    this.route.navigate(["login"]));
              });
          }
          typePwd(t) {
            if (null != t && null != t && "" != t) {
              (this.pwd = t),
                (this.lower = !0),
                (this.upper = !0),
                (this.len = !0),
                (this.num = !0),
                (this.spec = !0);
              let o = /[a-z]/g,
                a = /[A-Z]/g,
                r = /[0-9]/g,
                s = /\W|_/g;
              if (t.length < 8) return void (this.len = !1);
              if (null == t.match(o)) return void (this.lower = !1);
              if (null == t.match(a)) return void (this.upper = !1);
              if (null == t.match(r)) return void (this.num = !1);
              if (null == t.match(s)) return void (this.spec = !1);
            }
          }
          checkpassword(t) {
            null != t &&
              null != t &&
              "" != t &&
              (this.checkpwd = this.pwd == t);
          }
          executeAction(t, o) {
            (this.loader = !0),
              this.singleExecutionSubscription &&
                this.singleExecutionSubscription.unsubscribe(),
              (this.singleExecutionSubscription = this.recaptchaV3Service
                .execute(t)
                .subscribe(
                  (a) => {
                    (this.recentToken = a),
                      (this.recentError = void 0),
                      this.submitFunc(o),
                      (this.loader = !1);
                  },
                  (a) => {
                    (this.recentToken = ""),
                      (this.recentError = { error: a }),
                      (this.loader = !1);
                  }
                ));
          }
          showHidePassword(t) {
            "password" == t
              ? (this.showPassword = !this.showPassword)
              : (this.confirmPassword = !this.confirmPassword);
          }
          ngOnInit() {
            this.allExecutionsSubscription =
              this.recaptchaV3Service.onExecute.subscribe((t) =>
                this.executionLog.push(t)
              );
          }
          ngOnDestroy() {
            this.allExecutionsSubscription &&
              this.allExecutionsSubscription.unsubscribe(),
              this.allExecutionErrorsSubscription &&
                this.allExecutionErrorsSubscription.unsubscribe(),
              this.singleExecutionSubscription &&
                this.singleExecutionSubscription.unsubscribe();
          }
          formatToken(t) {
            return t ? `${t.substr(0, 7)}...${t.substr(-7)}` : "(empty)";
          }
          resolved(t) {
            "" != t && ((this.captcha = t), (this.captchaVal = !0));
          }
          submitFunc(t) {
            this.resetLoader = !0;
            var o = t.value;
            (o.token = this.resetToken),
              (o.verify = this.resetVerify),
              this.conn.postUrl("basic/resetPassword", o).subscribe((a) => {
                1 == a.success
                  ? (this.alert.success(a.msg, "", { timeOut: 2e3 }),
                    this.route.navigate(["login"]))
                  : this.alert.error(a.msg, "", { timeOut: 2e3 }),
                  t.resetForm(),
                  (this.resetLoader = !1);
              });
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(
              e.Y36(h),
              e.Y36(A._W),
              e.Y36(u.F0),
              e.Y36(u.gz),
              e.Y36(E.YC)
            );
          }),
          (n.ɵcmp = e.Xpm({
            type: n,
            selectors: [["app-resetpassword"]],
            viewQuery: function (t, o) {
              if ((1 & t && e.Gf(No, 5), 2 & t)) {
                let a;
                e.iGM((a = e.CRH())) && (o.template = a.first);
              }
            },
            decls: 40,
            vars: 17,
            consts: [
              [4, "ngIf"],
              [1, "container"],
              [1, "form-box-s", "white-bg", "p-4"],
              [1, "text-center", "mb-5"],
              [1, "blue-t"],
              ["autocomplete", "off", "novalidate", "", 1, "site-form"],
              ["f", "ngForm"],
              [1, "form-group"],
              [
                "name",
                "password",
                "autocomplete",
                "off",
                "placeholder",
                "Enter password",
                "ngModel",
                "",
                "required",
                "",
                1,
                "form-control",
                3,
                "type",
                "ngModelChange",
                "input",
              ],
              ["password", "ngModel"],
              [1, "eye-icon", 3, "click"],
              ["class", "errMsg", 4, "ngIf"],
              [
                "name",
                "confirm_password",
                "autocomplete",
                "off",
                "placeholder",
                "Enter Confirm Password",
                "ngModel",
                "",
                "required",
                "",
                1,
                "form-control",
                3,
                "type",
                "maxlength",
                "ngModelChange",
              ],
              ["cp", "ngModel"],
              [1, "form-group", "mb-5", "mt-3"],
              [
                "type",
                "submit",
                "class",
                "btn btn-block blue-btn btn-lg w-f text-uppercase",
                3,
                "disabled",
                "click",
                4,
                "ngIf",
              ],
              [1, "form-group", "mb-4"],
              [1, "text-center", "dark-t"],
              ["routerLink", "/login"],
              [1, "text-center", "grey-t"],
              ["href", "#", "routerLink", "/register", 1, "dark-t"],
              [1, "far", "fa-eye"],
              [1, "fas", "fa-eye-slash"],
              [1, "errMsg"],
              ["class", "error", 4, "ngIf"],
              [1, "error"],
              [
                "type",
                "submit",
                1,
                "btn",
                "btn-block",
                "blue-btn",
                "btn-lg",
                "w-f",
                "text-uppercase",
                3,
                "disabled",
                "click",
              ],
            ],
            template: function (t, o) {
              if (1 & t) {
                const a = e.EpF();
                e.YNc(0, Oo, 1, 0, "app-loader", 0),
                  e._UZ(1, "app-header"),
                  e._UZ(2, "app-searchbar"),
                  e.TgZ(3, "section"),
                  e.TgZ(4, "div", 1),
                  e.TgZ(5, "div", 2),
                  e.TgZ(6, "div", 3),
                  e.TgZ(7, "h2", 4),
                  e._uU(8, "Reset Password !"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(9, "form", 5, 6),
                  e.TgZ(11, "div", 7),
                  e.TgZ(12, "input", 8, 9),
                  e.NdJ("ngModelChange", function (s) {
                    return o.typePwd(s);
                  })("input", function () {
                    return e.CHM(a), e.MAs(21).control.updateValueAndValidity();
                  }),
                  e.qZA(),
                  e.TgZ(14, "div", 10),
                  e.NdJ("click", function () {
                    return o.showHidePassword("password");
                  }),
                  e.YNc(15, Jo, 2, 0, "span", 0),
                  e.YNc(16, Ro, 2, 0, "span", 0),
                  e.qZA(),
                  e.YNc(17, So, 2, 1, "div", 11),
                  e.YNc(18, Do, 6, 5, "div", 11),
                  e.qZA(),
                  e.TgZ(19, "div", 7),
                  e.TgZ(20, "input", 12, 13),
                  e.NdJ("ngModelChange", function (s) {
                    return o.checkpassword(s);
                  }),
                  e.qZA(),
                  e.TgZ(22, "div", 10),
                  e.NdJ("click", function () {
                    return o.showHidePassword("confirmPassword");
                  }),
                  e.YNc(23, Ho, 2, 0, "span", 0),
                  e.YNc(24, Bo, 2, 0, "span", 0),
                  e.qZA(),
                  e.YNc(25, Go, 3, 2, "div", 11),
                  e.YNc(26, Wo, 2, 1, "div", 11),
                  e.qZA(),
                  e.TgZ(27, "div", 14),
                  e.YNc(28, $o, 2, 1, "button", 15),
                  e.qZA(),
                  e.TgZ(29, "div", 16),
                  e.TgZ(30, "div", 17),
                  e._uU(31, "Password remembered ? "),
                  e.TgZ(32, "a", 18),
                  e._uU(33, " Login !"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(34, "div", 7),
                  e.TgZ(35, "div", 19),
                  e._uU(36, "If you don\u2019t have an account "),
                  e.TgZ(37, "a", 20),
                  e._uU(38, "Register"),
                  e.qZA(),
                  e._uU(39, " Now"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA();
              }
              if (2 & t) {
                const a = e.MAs(10),
                  r = e.MAs(13),
                  s = e.MAs(21);
                e.Q6J("ngIf", o.loader),
                  e.xp6(12),
                  e.ekj("is-invalid", r.invalid && r.touched),
                  e.Q6J("type", o.showPassword ? "text" : "password"),
                  e.xp6(3),
                  e.Q6J("ngIf", o.showPassword),
                  e.xp6(1),
                  e.Q6J("ngIf", !o.showPassword),
                  e.xp6(1),
                  e.Q6J(
                    "ngIf",
                    r.errors && (r.valid || r.touched || a.submitted)
                  ),
                  e.xp6(1),
                  e.Q6J(
                    "ngIf",
                    (!o.lower || !o.upper || !o.len || !o.num || !o.spec) &&
                      r.valid
                  ),
                  e.xp6(2),
                  e.ekj(
                    "is-invalid",
                    (s.invalid || r.value != s.value) && s.touched
                  ),
                  e.Q6J("type", o.confirmPassword ? "text" : "password")(
                    "maxlength",
                    20
                  ),
                  e.xp6(3),
                  e.Q6J("ngIf", o.confirmPassword),
                  e.xp6(1),
                  e.Q6J("ngIf", !o.confirmPassword),
                  e.xp6(1),
                  e.Q6J(
                    "ngIf",
                    s.errors && (s.valid || s.touched || a.submitted)
                  ),
                  e.xp6(1),
                  e.Q6J("ngIf", !o.checkpwd && s.valid),
                  e.xp6(2),
                  e.Q6J("ngIf", !o.resetLoader);
              }
            },
            directives: [
              p.O5,
              g,
              m,
              l._Y,
              l.JL,
              l.F,
              l.Fj,
              l.JJ,
              l.On,
              l.Q7,
              l.nD,
              u.yS,
              f,
            ],
            styles: [""],
          })),
          n
        );
      })();
      var se = T(8239),
        Ko = T(697),
        W = T.n(Ko),
        Q = T(2455);
      function ei(n, i) {
        1 & n && e._UZ(0, "app-loader");
      }
      function ti(n, i) {
        1 & n &&
          (e.TgZ(0, "tbody"),
          e.TgZ(1, "tr"),
          e.TgZ(2, "td"),
          e._uU(3, "NO data found"),
          e.qZA(),
          e.qZA(),
          e.qZA());
      }
      function ni(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "tr"),
            e.TgZ(1, "td"),
            e.TgZ(2, "a", 45),
            e.TgZ(3, "span"),
            e._uU(4),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(5, "td"),
            e._uU(6),
            e.qZA(),
            e.TgZ(7, "td"),
            e._uU(8),
            e.ALo(9, "date"),
            e.qZA(),
            e.TgZ(10, "td"),
            e.TgZ(11, "a", 45),
            e._uU(12),
            e.qZA(),
            e.qZA(),
            e.TgZ(13, "td"),
            e.TgZ(14, "a", 45),
            e._uU(15),
            e.qZA(),
            e.qZA(),
            e.TgZ(16, "td"),
            e._uU(17),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = i.$implicit;
          e.xp6(2),
            e.MGl("routerLink", "/transaction-details/", t.txID, ""),
            e.s9C("title", t.txID),
            e.xp6(2),
            e.Oqu(t.txID_split),
            e.xp6(2),
            e.Oqu(t.blockId),
            e.xp6(2),
            e.Oqu(e.xi3(9, 12, t.dateTime, "yyyy-MM-dd HH:mm:ss ")),
            e.xp6(3),
            e.MGl("routerLink", "/address-info/", t.from, ""),
            e.s9C("title", t.from),
            e.xp6(1),
            e.Oqu(t.formaddress_split),
            e.xp6(2),
            e.MGl("routerLink", "/address-info/", t.to, ""),
            e.s9C("title", t.to),
            e.xp6(1),
            e.Oqu(t.toaddress_split),
            e.xp6(2),
            e.Oqu(t.amount);
        }
      }
      function oi(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "tbody"), e.YNc(1, ni, 18, 15, "tr", 39), e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(1), e.Q6J("ngForOf", t.addressData);
        }
      }
      function ii(n, i) {
        if (1 & n) {
          const t = e.EpF();
          e.ynx(0),
            e.TgZ(1, "div", 33),
            e._uU(2, "Contract codes"),
            e.qZA(),
            e.TgZ(3, "div", 34),
            e.TgZ(4, "ngx-monaco-editor", 46),
            e.NdJ("ngModelChange", function (a) {
              return e.CHM(t), (e.oxw().valuefile = a);
            })("init", function (a) {
              return e.CHM(t), e.oxw().editorInit(a);
            }),
            e.qZA(),
            e.qZA(),
            e.BQk();
        }
        if (2 & n) {
          const t = e.oxw();
          e.xp6(4), e.Q6J("options", t.editorOptions)("ngModel", t.valuefile);
        }
      }
      function ai(n, i) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "div", 60),
            e.TgZ(1, "span"),
            e._uU(2),
            e.qZA(),
            e.TgZ(3, "input", 61, 62),
            e.NdJ("ngModelChange", function (a) {
              return e.CHM(t), e.oxw(3).checkedValidAddress(a);
            }),
            e.qZA(),
            e.qZA();
        }
        if (2 & n) {
          const t = e.oxw().$implicit;
          e.xp6(2),
            e.AsE("_", t.name, "_", t.type, ""),
            e.xp6(1),
            e.hYB("placeholder", "_", t.name, "_", t.type, ""),
            e.s9C("name", t.name);
        }
      }
      function ri(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 60),
            e.TgZ(1, "span"),
            e._uU(2),
            e.qZA(),
            e._UZ(3, "input", 63, 62),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw().$implicit;
          e.xp6(2),
            e.AsE("_", t.name, "_", t.type, ""),
            e.xp6(1),
            e.hYB("placeholder", "_", t.name, "_", t.type, ""),
            e.s9C("name", t.name);
        }
      }
      function si(n, i) {
        if (
          (1 & n &&
            (e.ynx(0),
            e.YNc(1, ai, 5, 5, "div", 59),
            e.YNc(2, ri, 5, 5, "div", 59),
            e.BQk()),
          2 & n)
        ) {
          const t = i.$implicit;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              "address" == t.type ||
                "address[]" == t.type ||
                "string" == t.type ||
                "bool" == t.type ||
                "bytes" == t.type
            ),
            e.xp6(1),
            e.Q6J("ngIf", "uint256" == t.type || "uint256[]" == t.type);
        }
      }
      function li(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div"), e.TgZ(1, "i", 64), e._uU(2), e.qZA(), e.qZA()),
          2 & n)
        ) {
          const t = e.oxw().$implicit;
          e.xp6(2), e.hij(" ", t.output, "");
        }
      }
      function ci(n, i) {
        if (
          (1 & n && (e.ynx(0), e.YNc(1, li, 3, 1, "div", 0), e.BQk()), 2 & n)
        ) {
          const t = i.$implicit,
            o = e.oxw().$implicit;
          e.xp6(1), e.Q6J("ngIf", t.name == o.name);
        }
      }
      function di(n, i) {
        if (1 & n) {
          const t = e.EpF();
          e.ynx(0),
            e.TgZ(1, "div", 47),
            e.TgZ(2, "div", 48),
            e.TgZ(3, "div", 49),
            e.TgZ(4, "div", 50),
            e.TgZ(5, "button", 51),
            e._uU(6),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(7, "form", 52, 53),
            e.TgZ(9, "div", 54),
            e.YNc(10, si, 3, 2, "ng-container", 39),
            e.qZA(),
            e.TgZ(11, "div", 55),
            e.TgZ(12, "div", 56),
            e.TgZ(13, "button", 57),
            e.NdJ("click", function () {
              const r = e.CHM(t).$implicit,
                s = e.MAs(8);
              return e.oxw().submitReadCall(s, r.name, r.inputs);
            }),
            e._uU(14, "Call"),
            e.qZA(),
            e.TgZ(15, "div", 58),
            e.YNc(16, ci, 2, 1, "ng-container", 39),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.BQk();
        }
        if (2 & n) {
          const t = i.$implicit,
            o = i.index,
            a = e.MAs(8),
            r = e.oxw();
          e.xp6(4),
            e.Q2q("data-target", "#", t.name, ""),
            e.uIk("aria-controls", t.name),
            e.xp6(2),
            e.AsE(" ", o + 1, ".", t.name, " "),
            e.xp6(3),
            e.s9C("id", t.name),
            e.xp6(1),
            e.Q6J("ngForOf", t.inputs),
            e.xp6(1),
            e.s9C("id", t.name),
            e.xp6(2),
            e.Q6J("disabled", a.invalid),
            e.xp6(2),
            e.MGl("id", "", t.name, "_tab"),
            e.xp6(1),
            e.Q6J("ngForOf", r.EventresoponseData);
        }
      }
      function ui(n, i) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "div", 60),
            e.TgZ(1, "span"),
            e._uU(2),
            e.qZA(),
            e.TgZ(3, "input", 61, 62),
            e.NdJ("ngModelChange", function (a) {
              return e.CHM(t), e.oxw(3).checkedValidAddress(a);
            }),
            e.qZA(),
            e.qZA();
        }
        if (2 & n) {
          const t = e.oxw().$implicit;
          e.xp6(2),
            e.AsE("_", t.name, "_", t.type, ""),
            e.xp6(1),
            e.hYB("placeholder", "_", t.name, "_", t.type, ""),
            e.s9C("name", t.name);
        }
      }
      function pi(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 60),
            e.TgZ(1, "span"),
            e._uU(2),
            e.qZA(),
            e._UZ(3, "input", 68, 62),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw().$implicit;
          e.xp6(2),
            e.AsE("_", t.name, "_", t.type, ""),
            e.xp6(1),
            e.hYB("placeholder", "_", t.name, "_", t.type, ""),
            e.s9C("name", t.name);
        }
      }
      function gi(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 60),
            e.TgZ(1, "span"),
            e._uU(2),
            e.qZA(),
            e._UZ(3, "input", 69, 62),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw().$implicit;
          e.xp6(2),
            e.AsE("_", t.name, "_", t.type, ""),
            e.xp6(1),
            e.hYB("placeholder", "_", t.name, "_", t.type, ""),
            e.s9C("name", t.name);
        }
      }
      function Zi(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 60),
            e.TgZ(1, "span"),
            e._uU(2),
            e.qZA(),
            e._UZ(3, "input", 68, 62),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw().$implicit;
          e.xp6(2),
            e.AsE("_", t.name, "_", t.type, ""),
            e.xp6(1),
            e.hYB("placeholder", "_", t.name, "_", t.type, ""),
            e.s9C("name", t.name);
        }
      }
      function _i(n, i) {
        if (
          (1 & n &&
            (e.ynx(0),
            e.YNc(1, ui, 5, 5, "div", 59),
            e.YNc(2, pi, 5, 5, "div", 59),
            e.YNc(3, gi, 5, 5, "div", 59),
            e.YNc(4, Zi, 5, 5, "div", 59),
            e.BQk()),
          2 & n)
        ) {
          const t = i.$implicit;
          e.xp6(1),
            e.Q6J("ngIf", "address" == t.type),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              "address[]" == t.type ||
                "string" == t.type ||
                "bool" == t.type ||
                "bytes" == t.type
            ),
            e.xp6(1),
            e.Q6J("ngIf", "uint256" == t.type),
            e.xp6(1),
            e.Q6J("ngIf", "uint256[]" == t.type);
        }
      }
      function hi(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div"), e.TgZ(1, "i", 64), e._uU(2), e.qZA(), e.qZA()),
          2 & n)
        ) {
          const t = e.oxw().$implicit;
          e.xp6(2), e.hij(" ", t.output, "");
        }
      }
      function mi(n, i) {
        if (
          (1 & n && (e.ynx(0), e.YNc(1, hi, 3, 1, "div", 0), e.BQk()), 2 & n)
        ) {
          const t = i.$implicit,
            o = e.oxw().$implicit;
          e.xp6(1), e.Q6J("ngIf", t.name == o.name);
        }
      }
      function Ti(n, i) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "div", 56),
            e._UZ(1, "input", 70, 71),
            e._UZ(3, "br"),
            e._UZ(4, "br"),
            e.TgZ(5, "button", 72),
            e.NdJ("click", function () {
              e.CHM(t);
              const a = e.MAs(2);
              return e.oxw(2).submitTxId(a);
            }),
            e._uU(6, "Get Token ID"),
            e.qZA(),
            e._UZ(7, "br"),
            e._UZ(8, "br"),
            e.TgZ(9, "span", 73),
            e._uU(10, " TokenId : "),
            e.qZA(),
            e.qZA();
        }
        if (2 & n) {
          const t = e.oxw(2);
          e.xp6(9), e.Q6J("innerHtml", t.tokenId, e.oJD);
        }
      }
      function fi(n, i) {
        if (1 & n) {
          const t = e.EpF();
          e.ynx(0),
            e.TgZ(1, "div", 47),
            e.TgZ(2, "div", 48),
            e.TgZ(3, "div", 49),
            e.TgZ(4, "h1", 65),
            e.TgZ(5, "button", 51),
            e._uU(6),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(7, "form", 52, 66),
            e.TgZ(9, "div", 54),
            e.YNc(10, _i, 5, 4, "ng-container", 39),
            e.qZA(),
            e.qZA(),
            e.TgZ(11, "div", 55),
            e.TgZ(12, "div", 56),
            e.TgZ(13, "button", 57),
            e.NdJ("click", function () {
              const r = e.CHM(t).$implicit,
                s = e.MAs(8);
              return e.oxw().submitWriteCall(s, r.name, r.inputs);
            }),
            e._uU(14, "Call"),
            e.qZA(),
            e.TgZ(15, "div", 58),
            e.YNc(16, mi, 2, 1, "ng-container", 39),
            e.qZA(),
            e.qZA(),
            e.YNc(17, Ti, 11, 1, "div", 67),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.BQk();
        }
        if (2 & n) {
          const t = i.$implicit,
            o = i.index,
            a = e.MAs(8),
            r = e.oxw();
          e.xp6(4),
            e.Q2q("data-target", "#", t.name, ""),
            e.uIk("aria-controls", t.name),
            e.xp6(2),
            e.AsE(" ", o + 1, ".", t.name, " "),
            e.xp6(3),
            e.s9C("id", t.name),
            e.xp6(1),
            e.Q6J("ngForOf", t.inputs),
            e.xp6(1),
            e.s9C("id", t.name),
            e.xp6(2),
            e.Q6J("disabled", a.invalid),
            e.xp6(2),
            e.MGl("id", "", t.name, "_tab"),
            e.xp6(1),
            e.Q6J("ngForOf", r.EventresoponseData),
            e.xp6(1),
            e.Q6J("ngIf", "mint" == t.name);
        }
      }
      function Ai(n, i) {
        1 & n &&
          (e.TgZ(0, "tbody"),
          e.TgZ(1, "tr"),
          e.TgZ(2, "td"),
          e._uU(3, "NO data found"),
          e.qZA(),
          e.qZA(),
          e.qZA());
      }
      function vi(n, i) {
        if ((1 & n && (e.TgZ(0, "span"), e._uU(1), e.qZA()), 2 & n)) {
          const t = i.$implicit,
            o = i.last;
          e.xp6(1), e.AsE("", t.type, " ", o ? "" : ", ", "");
        }
      }
      function qi(n, i) {
        if (
          (1 & n && (e.TgZ(0, "span"), e._uU(1), e._UZ(2, "br"), e.qZA()),
          2 & n)
        ) {
          const t = i.$implicit;
          e.xp6(1), e.hij("", t.name, " : ");
        }
      }
      function bi(n, i) {
        if (
          (1 & n && (e.TgZ(0, "span", 78), e._uU(1), e._UZ(2, "br"), e.qZA()),
          2 & n)
        ) {
          const t = i.$implicit;
          e.xp6(1), e.hij("", t, ", ");
        }
      }
      function yi(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "tr"),
            e.TgZ(1, "td"),
            e._uU(2),
            e.ALo(3, "date"),
            e.qZA(),
            e.TgZ(4, "td"),
            e._uU(5),
            e.YNc(6, vi, 2, 2, "span", 39),
            e._uU(7, ")"),
            e.qZA(),
            e.TgZ(8, "td"),
            e.TgZ(9, "div", 74),
            e.TgZ(10, "div", 4),
            e.TgZ(11, "div", 75),
            e.YNc(12, qi, 3, 1, "span", 39),
            e.TgZ(13, "span"),
            e._uU(14, "output :"),
            e.qZA(),
            e.qZA(),
            e.TgZ(15, "div", 76),
            e.YNc(16, bi, 3, 1, "span", 77),
            e.TgZ(17, "span"),
            e._uU(18),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = i.$implicit;
          e.xp6(2),
            e.Oqu(e.xi3(3, 6, t.created_at, "yyyy-MM-dd HH:mm:ss ")),
            e.xp6(3),
            e.hij("", t.name, "("),
            e.xp6(1),
            e.Q6J("ngForOf", t.input_types),
            e.xp6(6),
            e.Q6J("ngForOf", t.input_types),
            e.xp6(4),
            e.Q6J("ngForOf", t.input_params),
            e.xp6(2),
            e.Oqu(t.output);
        }
      }
      function Ui(n, i) {
        if (
          (1 & n && (e.TgZ(0, "tbody"), e.YNc(1, yi, 19, 9, "tr", 39), e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(1), e.Q6J("ngForOf", t.EventBlockData);
        }
      }
      function ki(n, i) {
        1 & n && e._UZ(0, "app-loader");
      }
      const S = function (n) {
        return [n];
      };
      function Ci(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "li", 123),
            e.TgZ(1, "a", 124),
            e._uU(2, "Record Information"),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.Q6J(
            "ngClass",
            e.VKq(1, S, t.record_tab_status ? "" : "disable-tab")
          );
        }
      }
      function wi(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "li", 123),
            e.TgZ(1, "a", 125),
            e._uU(2, "Confirm Information"),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.Q6J(
            "ngClass",
            e.VKq(1, S, t.confirm_tab_status ? "" : "disable-tab")
          );
        }
      }
      function Mi(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "li", 123),
            e.TgZ(1, "a", 126),
            e._uU(2, "Record Information"),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.Q6J(
            "ngClass",
            e.VKq(1, S, t.record_tab1_status ? "" : "disable-tab")
          );
        }
      }
      function Ii(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "li", 123),
            e.TgZ(1, "a", 127),
            e._uU(2, "Confirm Information"),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.Q6J(
            "ngClass",
            e.VKq(1, S, t.confirm_tab1_status ? "" : "disable-tab")
          );
        }
      }
      function Ni(n, i) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "div", 3),
            e.TgZ(1, "button", 129),
            e.NdJ("click", function () {
              return e.CHM(t), e.oxw(2).next_tab("contract-record");
            }),
            e._uU(2, "Confirm"),
            e.qZA(),
            e.qZA();
        }
      }
      function Oi(n, i) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "div", 3),
            e.TgZ(1, "button", 129),
            e.NdJ("click", function () {
              return e.CHM(t), e.oxw(2).next_tab("contract-record2");
            }),
            e._uU(2, "Confirm"),
            e.qZA(),
            e.qZA();
        }
      }
      function Ji(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div"),
            e.YNc(1, Ni, 3, 0, "div", 128),
            e.YNc(2, Oi, 3, 0, "div", 128),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(1),
            e.Q6J("ngIf", t.TRC20 || t.TRC721 || t.TRC1155),
            e.xp6(1),
            e.Q6J("ngIf", t.TRC10);
        }
      }
      function Ri(n, i) {
        1 & n &&
          (e.TgZ(0, "div"),
          e.TgZ(1, "a", 130),
          e.TgZ(2, "div", 3),
          e.TgZ(3, "button", 131),
          e._uU(4, "Confirm"),
          e.qZA(),
          e.qZA(),
          e.qZA(),
          e.qZA());
      }
      function Ei(n, i) {
        1 & n && (e.TgZ(0, "span", 134), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter Contract address"));
      }
      function Si(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 132), e.YNc(1, Ei, 2, 1, "span", 133), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(54);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function Li(n, i) {
        1 & n && (e.TgZ(0, "span", 134), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter Token name"));
      }
      function Yi(n, i) {
        1 & n && (e.TgZ(0, "span", 134), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("2-30 characters for token name"));
      }
      function Qi(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 132),
            e.YNc(1, Li, 2, 1, "span", 133),
            e.YNc(2, Yi, 2, 1, "span", 133),
            e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(67);
          e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.required),
            e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.minlength);
        }
      }
      function Pi(n, i) {
        1 & n && (e.TgZ(0, "span", 134), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter Token Abbreviation"));
      }
      function Fi(n, i) {
        1 & n && (e.TgZ(0, "span", 134), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("2-10 characters for token abbreviation"));
      }
      function Di(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 132),
            e.YNc(1, Pi, 2, 1, "span", 133),
            e.YNc(2, Fi, 2, 1, "span", 133),
            e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(75);
          e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.required),
            e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.minlength);
        }
      }
      function Hi(n, i) {
        1 & n && (e.TgZ(0, "span", 134), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter Token Introduction"));
      }
      function Bi(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 132), e.YNc(1, Hi, 2, 1, "span", 133), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(83);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function ji(n, i) {
        1 & n && (e.TgZ(0, "span", 134), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter Issuer"));
      }
      function Vi(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 132), e.YNc(1, ji, 2, 1, "span", 133), e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == t.issuer.errors ? null : t.issuer.errors.required
            );
        }
      }
      function Gi(n, i) {
        1 & n && (e.TgZ(0, "span", 134), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Please choose token logo"));
      }
      function zi(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 132), e.YNc(1, Gi, 2, 1, "span", 133), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(100);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function Wi(n, i) {
        1 & n && (e.TgZ(0, "span", 134), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Maximum file size is 2mb"));
      }
      function $i(n, i) {
        1 & n && (e.TgZ(0, "span", 134), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Invalid format"));
      }
      function Xi(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 132),
            e.YNc(1, Wi, 2, 1, "span", 133),
            e._UZ(2, "br"),
            e.YNc(3, $i, 2, 1, "span", 133),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(1),
            e.Q6J("ngIf", t.proofMBErr),
            e.xp6(2),
            e.Q6J("ngIf", !t.proofTypeErr);
        }
      }
      function Ki(n, i) {
        1 & n && (e.TgZ(0, "span", 134), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter Official Website"));
      }
      function ea(n, i) {
        1 & n && (e.TgZ(0, "span", 134), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter valid url"));
      }
      function ta(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 132),
            e.YNc(1, Ki, 2, 1, "span", 133),
            e.YNc(2, ea, 2, 1, "span", 133),
            e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(114);
          e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.required),
            e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.pattern);
        }
      }
      function na(n, i) {
        1 & n && (e.TgZ(0, "span", 134), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter Email Address"));
      }
      function oa(n, i) {
        1 & n && (e.TgZ(0, "span", 134), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter valid Email"));
      }
      function ia(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 132),
            e.YNc(1, na, 2, 1, "span", 133),
            e.YNc(2, oa, 2, 1, "span", 133),
            e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(122);
          e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.required),
            e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.pattern);
        }
      }
      function aa(n, i) {
        1 & n && (e.TgZ(0, "span", 134), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter Link for GitHub"));
      }
      function ra(n, i) {
        1 & n && (e.TgZ(0, "span", 134), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter Link valid url"));
      }
      function sa(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 132),
            e.YNc(1, aa, 2, 1, "span", 133),
            e.YNc(2, ra, 2, 1, "span", 133),
            e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(130);
          e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.required),
            e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.pattern);
        }
      }
      function la(n, i) {
        1 & n && (e.TgZ(0, "span", 134), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter Link for white paper"));
      }
      function ca(n, i) {
        1 & n && (e.TgZ(0, "span", 134), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter valid url"));
      }
      function da(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 132),
            e.YNc(1, la, 2, 1, "span", 133),
            e.YNc(2, ca, 2, 1, "span", 133),
            e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(138);
          e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.required),
            e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.pattern);
        }
      }
      function ua(n, i) {
        1 & n && (e.TgZ(0, "span", 134), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter Link for twitter"));
      }
      function pa(n, i) {
        1 & n && (e.TgZ(0, "span", 134), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter valid url"));
      }
      function ga(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 132),
            e.YNc(1, ua, 2, 1, "span", 133),
            e.YNc(2, pa, 2, 1, "span", 133),
            e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(146);
          e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.required),
            e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.pattern);
        }
      }
      function Za(n, i) {
        1 & n && (e.TgZ(0, "span", 134), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter Link for Facebook"));
      }
      function _a(n, i) {
        1 & n && (e.TgZ(0, "span", 134), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter valid url"));
      }
      function ha(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 132),
            e.YNc(1, Za, 2, 1, "span", 133),
            e.YNc(2, _a, 2, 1, "span", 133),
            e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(152);
          e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.required),
            e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.pattern);
        }
      }
      function ma(n, i) {
        1 & n && (e.TgZ(0, "span", 134), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter Link for telegram"));
      }
      function Ta(n, i) {
        1 & n && (e.TgZ(0, "span", 134), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter valid url"));
      }
      function fa(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 132),
            e.YNc(1, ma, 2, 1, "span", 133),
            e.YNc(2, Ta, 2, 1, "span", 133),
            e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(158);
          e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.required),
            e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.pattern);
        }
      }
      function Aa(n, i) {
        1 & n && (e.TgZ(0, "span", 134), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter Link for weibo"));
      }
      function va(n, i) {
        1 & n && (e.TgZ(0, "span", 134), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter valid url"));
      }
      function qa(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 132),
            e.YNc(1, Aa, 2, 1, "span", 133),
            e.YNc(2, va, 2, 1, "span", 133),
            e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(164);
          e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.required),
            e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.pattern);
        }
      }
      function ba(n, i) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "button", 135),
            e.NdJ("click", function () {
              e.CHM(t);
              const a = e.oxw(),
                r = e.MAs(43);
              return a.executeAction("contact-confirm", r);
            }),
            e._uU(1, "Next"),
            e.qZA();
        }
        if (2 & n) {
          e.oxw();
          const t = e.MAs(43);
          e.Q6J("disabled", t.invalid);
        }
      }
      function ya(n, i) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "button", 135),
            e.NdJ("click", function () {
              return e.CHM(t), e.oxw().submit("contact-result");
            }),
            e._uU(1, "Submit"),
            e.qZA();
        }
        if (2 & n) {
          e.oxw();
          const t = e.MAs(43);
          e.Q6J("disabled", t.invalid);
        }
      }
      function Ua(n, i) {
        1 & n && (e.TgZ(0, "span", 134), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter Token name"));
      }
      function xa(n, i) {
        1 & n && (e.TgZ(0, "span", 134), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("2-30 characters for token name"));
      }
      function ka(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 132),
            e.YNc(1, Ua, 2, 1, "span", 133),
            e.YNc(2, xa, 2, 1, "span", 133),
            e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(293);
          e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.required),
            e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.minlength);
        }
      }
      function Ca(n, i) {
        1 & n && (e.TgZ(0, "span", 134), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter Token Abbreviation"));
      }
      function wa(n, i) {
        1 & n && (e.TgZ(0, "span", 134), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("2-10 characters for token abbreviation"));
      }
      function Ma(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 132),
            e.YNc(1, Ca, 2, 1, "span", 133),
            e.YNc(2, wa, 2, 1, "span", 133),
            e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(302);
          e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.required),
            e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.minlength);
        }
      }
      function Ia(n, i) {
        1 & n && (e.TgZ(0, "span", 134), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter Token Introduction"));
      }
      function Na(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 132), e.YNc(1, Ia, 2, 1, "span", 133), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(310);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function Oa(n, i) {
        1 & n && (e.TgZ(0, "span", 134), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter Total supply"));
      }
      function Ja(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 132), e.YNc(1, Oa, 2, 1, "span", 133), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(318);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function Ra(n, i) {
        1 & n && (e.TgZ(0, "span", 134), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter Precision"));
      }
      function Ea(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 132), e.YNc(1, Ra, 2, 1, "span", 133), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(326);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function Sa(n, i) {
        1 & n && (e.TgZ(0, "span", 134), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter Issuer"));
      }
      function La(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 132), e.YNc(1, Sa, 2, 1, "span", 133), e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == t.issuer.errors ? null : t.issuer.errors.required
            );
        }
      }
      function Ya(n, i) {
        1 & n && (e.TgZ(0, "span", 134), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Please choose token logo"));
      }
      function Qa(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 132), e.YNc(1, Ya, 2, 1, "span", 133), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(343);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function Pa(n, i) {
        1 & n && (e.TgZ(0, "span", 134), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter Token price"));
      }
      function Fa(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 132), e.YNc(1, Pa, 2, 1, "span", 133), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(359);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function Da(n, i) {
        1 & n && (e.TgZ(0, "span", 134), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter Token price"));
      }
      function Ha(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 132), e.YNc(1, Da, 2, 1, "span", 133), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(365);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function Ba(n, i) {
        1 & n && (e.TgZ(0, "span", 134), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter sale start timing "));
      }
      function ja(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 132), e.YNc(1, Ba, 2, 1, "span", 133), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(389);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function Va(n, i) {
        1 & n && (e.TgZ(0, "span", 134), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter sale end timing"));
      }
      function Ga(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 132), e.YNc(1, Va, 2, 1, "span", 133), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(393);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function za(n, i) {
        1 & n &&
          (e.TgZ(0, "span", 134),
          e.TgZ(1, "small"),
          e._uU(2),
          e.qZA(),
          e.qZA()),
          2 & n && (e.xp6(2), e.Oqu("Enter Frozen Amount"));
      }
      function Wa(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 132), e.YNc(1, za, 3, 1, "span", 133), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(410);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function $a(n, i) {
        1 & n &&
          (e.TgZ(0, "span", 134),
          e.TgZ(1, "small"),
          e._uU(2),
          e.qZA(),
          e.qZA()),
          2 & n && (e.xp6(2), e.Oqu("Enter Frozen Duration"));
      }
      function Xa(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 132), e.YNc(1, $a, 3, 1, "span", 133), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(414);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function Ka(n, i) {
        1 & n && (e.TgZ(0, "span", 134), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter Official Website"));
      }
      function er(n, i) {
        1 & n && (e.TgZ(0, "span", 134), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter valid url"));
      }
      function tr(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 132),
            e.YNc(1, Ka, 2, 1, "span", 133),
            e.YNc(2, er, 2, 1, "span", 133),
            e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(426);
          e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.required),
            e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.pattern);
        }
      }
      function nr(n, i) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "button", 135),
            e.NdJ("click", function () {
              e.CHM(t);
              const a = e.oxw(),
                r = e.MAs(282);
              return a.executeAction_trc10("contact-confirm2", r);
            }),
            e._uU(1, "Next"),
            e.qZA();
        }
        if (2 & n) {
          e.oxw();
          const t = e.MAs(282);
          e.Q6J("disabled", t.invalid);
        }
      }
      function or(n, i) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "button", 135),
            e.NdJ("click", function () {
              return e.CHM(t), e.oxw().submit_trc10("contact-result");
            }),
            e._uU(1, "Submit"),
            e.qZA();
        }
        if (2 & n) {
          e.oxw();
          const t = e.MAs(514);
          e.Q6J("disabled", t.invalid);
        }
      }
      function ar(n, i) {
        1 & n && e._UZ(0, "app-loader");
      }
      function rr(n, i) {
        1 & n &&
          (e.TgZ(0, "tbody"),
          e.TgZ(1, "tr"),
          e.TgZ(2, "td"),
          e._uU(3, "NO data found"),
          e.qZA(),
          e.qZA(),
          e.qZA());
      }
      function sr(n, i) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "tr"),
            e.TgZ(1, "td"),
            e._uU(2),
            e.qZA(),
            e.TgZ(3, "td"),
            e._uU(4),
            e._UZ(5, "br"),
            e.TgZ(6, "span"),
            e._uU(7),
            e.qZA(),
            e.qZA(),
            e.TgZ(8, "td"),
            e._uU(9),
            e.qZA(),
            e.TgZ(10, "td"),
            e._uU(11),
            e.qZA(),
            e.TgZ(12, "td"),
            e._uU(13),
            e.qZA(),
            e.TgZ(14, "td"),
            e.TgZ(15, "button", 19),
            e.NdJ("click", function () {
              const r = e.CHM(t).index;
              return e.oxw(2).handleMinus(r);
            }),
            e._uU(16, "-"),
            e.qZA(),
            e.TgZ(17, "input", 20),
            e.NdJ("ngModelChange", function (a) {
              const s = e.CHM(t).index;
              return (e.oxw(2).tokenList[s].vote_val = a);
            }),
            e.qZA(),
            e.TgZ(18, "button", 19),
            e.NdJ("click", function () {
              const r = e.CHM(t).index;
              return e.oxw(2).handlePlus(r);
            }),
            e._uU(19, "+"),
            e.qZA(),
            e.qZA(),
            e.TgZ(20, "td"),
            e.TgZ(21, "button", 21),
            e.NdJ("click", function () {
              const r = e.CHM(t).$implicit;
              return e.oxw(2).submit_vote(r);
            }),
            e._uU(22, "Vote"),
            e.qZA(),
            e.qZA(),
            e.qZA();
        }
        if (2 & n) {
          const t = i.$implicit,
            o = i.index,
            a = e.oxw(2);
          e.xp6(2),
            e.Oqu(o + 1),
            e.xp6(2),
            e.Oqu(t.UserName),
            e.xp6(3),
            e.Oqu(t.url),
            e.xp6(2),
            e.Oqu(t.Vote_Count),
            e.xp6(2),
            e.Oqu(t.Latest_BlockNum),
            e.xp6(2),
            e.Oqu(t.myVotes),
            e.xp6(4),
            e.MGl("name", "name_", t.UserId, ""),
            e.Q6J("ngModel", a.tokenList[o].vote_val);
        }
      }
      function lr(n, i) {
        if (
          (1 & n && (e.TgZ(0, "tbody"), e.YNc(1, sr, 23, 8, "tr", 18), e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(1), e.Q6J("ngForOf", t.tokenList);
        }
      }
      function dr(n, i) {
        1 & n && e._UZ(0, "app-loader");
      }
      function ur(n, i) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "div", 51),
            e.TgZ(1, "button", 52),
            e.NdJ("click", function () {
              return e.CHM(t), e.oxw().raise_proposal();
            }),
            e._uU(2, "Raise a proposal"),
            e.qZA(),
            e.TgZ(3, "button", 53),
            e.NdJ("click", function () {
              return e.CHM(t), e.oxw().My_proposal();
            }),
            e._uU(4, "My proposals"),
            e.qZA(),
            e.qZA();
        }
      }
      function pr(n, i) {
        1 & n &&
          (e.TgZ(0, "tbody"),
          e.TgZ(1, "tr"),
          e.TgZ(2, "td"),
          e._uU(3, "NO data found"),
          e.qZA(),
          e.qZA(),
          e.qZA());
      }
      function gr(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "tr"),
            e.TgZ(1, "td"),
            e.TgZ(2, "a", 55),
            e._uU(3),
            e.qZA(),
            e.qZA(),
            e.TgZ(4, "td"),
            e._uU(5),
            e.qZA(),
            e.TgZ(6, "td"),
            e._uU(7),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = i.$implicit,
            o = i.index;
          e.xp6(2),
            e.MGl("routerLink", "/transaction-details/", t.txID, ""),
            e.xp6(1),
            e.hij("#", o + 1, ""),
            e.xp6(2),
            e.Oqu(t.key),
            e.xp6(2),
            e.Oqu(t.value);
        }
      }
      function Zr(n, i) {
        if (
          (1 & n && (e.TgZ(0, "tbody"), e.YNc(1, gr, 8, 4, "tr", 54), e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(1), e.Q6J("ngForOf", t.transactionList);
        }
      }
      function _r(n, i) {
        1 & n &&
          (e.TgZ(0, "tbody"),
          e.TgZ(1, "tr"),
          e.TgZ(2, "td"),
          e._uU(3, "NO data found"),
          e.qZA(),
          e.qZA(),
          e.qZA());
      }
      function hr(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "tr"),
            e.TgZ(1, "td"),
            e.TgZ(2, "a", 55),
            e._uU(3),
            e.qZA(),
            e.qZA(),
            e.TgZ(4, "td"),
            e._uU(5),
            e.qZA(),
            e.TgZ(6, "td"),
            e._uU(7),
            e.qZA(),
            e.TgZ(8, "td"),
            e._uU(9),
            e.qZA(),
            e.TgZ(10, "td"),
            e.TgZ(11, "a", 55),
            e._uU(12),
            e.qZA(),
            e.qZA(),
            e.TgZ(13, "td"),
            e.TgZ(14, "a", 55),
            e._uU(15),
            e.qZA(),
            e.qZA(),
            e.TgZ(16, "td"),
            e.TgZ(17, "button"),
            e._uU(18, "View Datails"),
            e.qZA(),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = i.$implicit;
          e.xp6(2),
            e.MGl("routerLink", "/transaction-details/", t.txID, ""),
            e.xp6(1),
            e.Oqu(t.txID),
            e.xp6(2),
            e.Oqu(t.method),
            e.xp6(2),
            e.Oqu(t.blockId),
            e.xp6(2),
            e.Oqu(t.dateTime),
            e.xp6(2),
            e.MGl("routerLink", "/address-info/", t.from, ""),
            e.xp6(1),
            e.Oqu(t.from),
            e.xp6(2),
            e.MGl("routerLink", "/address-info/", t.to, ""),
            e.xp6(1),
            e.Oqu(t.to);
        }
      }
      function mr(n, i) {
        if (
          (1 & n && (e.TgZ(0, "tbody"), e.YNc(1, hr, 19, 9, "tr", 54), e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(1), e.Q6J("ngForOf", t.proposallist);
        }
      }
      function Tr(n, i) {
        if (
          (1 & n && (e.TgZ(0, "div", 56), e._UZ(1, "span", 57), e.qZA()), 2 & n)
        ) {
          const t = e.oxw();
          e.xp6(1), e.Q6J("innerText", t.success_msg);
        }
      }
      function fr(n, i) {
        1 & n && (e.TgZ(0, "span", 60), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter Web Address"));
      }
      function Ar(n, i) {
        1 & n && (e.TgZ(0, "span", 60), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter valid URL"));
      }
      function vr(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 58),
            e.YNc(1, fr, 2, 1, "span", 59),
            e.YNc(2, Ar, 2, 1, "span", 59),
            e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(94);
          e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.required),
            e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.pattern);
        }
      }
      function qr(n, i) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "button", 61),
            e.NdJ("click", function () {
              e.CHM(t);
              const a = e.oxw(),
                r = e.MAs(88);
              return a.submitFunc(r);
            }),
            e._uU(1, "Submit"),
            e.qZA();
        }
        if (2 & n) {
          e.oxw();
          const t = e.MAs(88);
          e.Q6J("disabled", t.invalid);
        }
      }
      function yr(n, i) {
        1 & n && e._UZ(0, "app-loader");
      }
      function Ur(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 11),
            e.TgZ(1, "div", 12),
            e._uU(2, "TokenId: "),
            e.qZA(),
            e.TgZ(3, "div", 13),
            e._uU(4),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(4), e.Oqu(t.tokeninfo.tokenId);
        }
      }
      function xr(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 11),
            e.TgZ(1, "div", 12),
            e._uU(2, "Contract Address: "),
            e.qZA(),
            e.TgZ(3, "div", 13),
            e._uU(4),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(4), e.Oqu(t.tokeninfo.contract_address);
        }
      }
      function kr(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 11),
            e.TgZ(1, "div", 12),
            e._uU(2, "Owner Address: "),
            e.qZA(),
            e.TgZ(3, "div", 13),
            e._uU(4),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(4), e.Oqu(t.tokeninfo.owner_address);
        }
      }
      function Cr(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 11),
            e.TgZ(1, "div", 12),
            e._uU(2, "Email: "),
            e.qZA(),
            e.TgZ(3, "div", 13),
            e._uU(4),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(4), e.Oqu(t.tokeninfo.email);
        }
      }
      function wr(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 11),
            e.TgZ(1, "div", 12),
            e._uU(2, "Token info :"),
            e.qZA(),
            e.TgZ(3, "div", 13),
            e._uU(4),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(4), e.Oqu(t.tokeninfo.token_info);
        }
      }
      function Mr(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 11),
            e.TgZ(1, "div", 12),
            e._uU(2, "Token info :"),
            e.qZA(),
            e.TgZ(3, "div", 13),
            e._uU(4),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(4), e.Oqu(t.tokeninfo.token_info.txid);
        }
      }
      function Ir(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 11),
            e.TgZ(1, "div", 12),
            e._uU(2, "Token Supply :"),
            e.qZA(),
            e.TgZ(3, "div", 13),
            e._uU(4),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(4), e.Oqu(t.tokeninfo.token_supply);
        }
      }
      function Nr(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 11),
            e.TgZ(1, "div", 12),
            e._uU(2, "Github :"),
            e.qZA(),
            e.TgZ(3, "div", 13),
            e._uU(4),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(4), e.Oqu(t.tokeninfo.github_url);
        }
      }
      function Or(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 11),
            e.TgZ(1, "div", 12),
            e._uU(2, "Precision :"),
            e.qZA(),
            e.TgZ(3, "div", 13),
            e._uU(4),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(4), e.Oqu(t.tokeninfo.decimal_place);
        }
      }
      function Jr(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 11),
            e.TgZ(1, "div", 12),
            e._uU(2, "White paper :"),
            e.qZA(),
            e.TgZ(3, "div", 13),
            e._uU(4),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(4), e.Oqu(t.tokeninfo.white_paper_url);
        }
      }
      function Rr(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 11),
            e.TgZ(1, "div", 12),
            e._uU(2, "Issuer Start :"),
            e.qZA(),
            e.TgZ(3, "div", 13),
            e._uU(4),
            e.ALo(5, "date"),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(4),
            e.Oqu(
              e.xi3(5, 1, t.tokeninfo.issuer_start, "yyyy-MM-dd HH:mm:ss ")
            );
        }
      }
      function Er(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 11),
            e.TgZ(1, "div", 12),
            e._uU(2, "Twitter :"),
            e.qZA(),
            e.TgZ(3, "div", 13),
            e._uU(4),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(4), e.Oqu(t.tokeninfo.twitter_url);
        }
      }
      function Sr(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 11),
            e.TgZ(1, "div", 12),
            e._uU(2, "Issuer End :"),
            e.qZA(),
            e.TgZ(3, "div", 13),
            e._uU(4),
            e.ALo(5, "date"),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(4),
            e.Oqu(e.xi3(5, 1, t.tokeninfo.issuer_end, "yyyy-MM-dd HH:mm:ss "));
        }
      }
      function Lr(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 11),
            e.TgZ(1, "div", 12),
            e._uU(2, "Facebook :"),
            e.qZA(),
            e.TgZ(3, "div", 13),
            e._uU(4),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(4), e.Oqu(t.tokeninfo.facebook_url);
        }
      }
      function Yr(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 11),
            e.TgZ(1, "div", 12),
            e._uU(2, "Telegram :"),
            e.qZA(),
            e.TgZ(3, "div", 13),
            e._uU(4),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(4), e.Oqu(t.tokeninfo.telegram_url);
        }
      }
      function Qr(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 11),
            e.TgZ(1, "div", 12),
            e._uU(2, "Webibo :"),
            e.qZA(),
            e.TgZ(3, "div", 13),
            e._uU(4),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(4), e.Oqu(t.tokeninfo.webibo_url);
        }
      }
      function Br(n, i) {
        1 & n && e._UZ(0, "app-loader");
      }
      function jr(n, i) {
        1 & n && (e.TgZ(0, "span", 22), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter Name"));
      }
      function Vr(n, i) {
        1 & n && (e.TgZ(0, "span", 22), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Name must be 8-20 letters"));
      }
      function Gr(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 20),
            e.YNc(1, jr, 2, 1, "span", 21),
            e.YNc(2, Vr, 2, 1, "span", 21),
            e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(17);
          e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.required),
            e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.minlength);
        }
      }
      function zr(n, i) {
        1 & n && (e.TgZ(0, "span", 22), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Please Enter Email"));
      }
      function Wr(n, i) {
        1 & n && (e.TgZ(0, "span", 22), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter Valid Email"));
      }
      function $r(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 20),
            e.YNc(1, zr, 2, 1, "span", 21),
            e.YNc(2, Wr, 2, 1, "span", 21),
            e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(21);
          e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.required),
            e.xp6(1),
            e.Q6J("ngIf", null == t.errors ? null : t.errors.pattern);
        }
      }
      function Xr(n, i) {
        1 & n && (e.TgZ(0, "span", 22), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Subject Required"));
      }
      function Kr(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 20), e.YNc(1, Xr, 2, 1, "span", 21), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(25);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function es(n, i) {
        1 & n && (e.TgZ(0, "span", 22), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Enter Message"));
      }
      function ts(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 20), e.YNc(1, es, 2, 1, "span", 21), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(29);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function ds(n, i) {
        1 & n && (e.TgZ(0, "span", 52), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Required"));
      }
      function us(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 50), e.YNc(1, ds, 2, 1, "span", 51), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(17);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function ps(n, i) {
        1 & n && (e.TgZ(0, "span", 52), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Required"));
      }
      function gs(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 50), e.YNc(1, ps, 2, 1, "span", 51), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(23);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function Zs(n, i) {
        1 & n && (e.TgZ(0, "span", 52), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Required"));
      }
      function _s(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 50), e.YNc(1, Zs, 2, 1, "span", 51), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(33);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function hs(n, i) {
        1 & n && (e.TgZ(0, "span", 52), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Required"));
      }
      function ms(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 50), e.YNc(1, hs, 2, 1, "span", 51), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(47);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function Ts(n, i) {
        1 & n && (e.TgZ(0, "span", 52), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Required"));
      }
      function fs(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 50), e.YNc(1, Ts, 2, 1, "span", 51), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(55);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function As(n, i) {
        1 & n && (e.TgZ(0, "span", 52), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Required"));
      }
      function vs(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 50), e.YNc(1, As, 2, 1, "span", 51), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(89);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function qs(n, i) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "section"),
            e.TgZ(1, "div", 1),
            e.TgZ(2, "div", 2),
            e._uU(3, "Verify & Publish Contract Source Code"),
            e.qZA(),
            e.TgZ(4, "div", 3),
            e._uU(5, "COMPILER TYPE AND VERSION SELECTION"),
            e.qZA(),
            e.TgZ(6, "div", 4),
            e.TgZ(7, "p"),
            e._uU(
              8,
              ' Source code verification provides transparency for users interacting with smart contracts. By uploading the source code, Etherscan will match the compiled code with that on the blockchain. Just like contracts, a "smart contract" should provide end users with more information on what they are "digitally signing" for and give users an opportunity to audit the code to independently verify that it actually does what it is supposed to do. '
            ),
            e.qZA(),
            e.TgZ(9, "p"),
            e._uU(
              10,
              ' Please be informed that advanced settings (e.g. bytecodeHash: "none" or viaIR: "true") can be accessed via Solidity (Standard-Json-Input) verification method. More information can be found under Solidity\'s "Compiler Input and Output JSON Description" documentation section. '
            ),
            e.qZA(),
            e.qZA(),
            e.TgZ(11, "form", 5, 6),
            e.TgZ(13, "div", 7),
            e.TgZ(14, "label", 8),
            e._uU(
              15,
              "Please enter the Contract Address you would like to verify"
            ),
            e.qZA(),
            e.TgZ(16, "input", 9, 10),
            e.NdJ("ngModelChange", function (a) {
              return e.CHM(t), (e.oxw().verifyData.contractAddr = a);
            })("ngModelChange", function (a) {
              return e.CHM(t), e.oxw().checkAddr(a);
            }),
            e.qZA(),
            e.YNc(18, us, 2, 1, "div", 11),
            e.qZA(),
            e.TgZ(19, "div", 7),
            e.TgZ(20, "label", 8),
            e._uU(21, "Please select Compiler Type"),
            e.qZA(),
            e.TgZ(22, "select", 12, 13),
            e.NdJ("ngModelChange", function (a) {
              return e.CHM(t), (e.oxw().verifyData.soliditytype = a);
            })("ngModelChange", function (a) {
              return e.CHM(t), e.oxw().setComType(a);
            }),
            e.TgZ(24, "option", 14),
            e._uU(25, "Please Select"),
            e.qZA(),
            e.TgZ(26, "option", 15),
            e._uU(27, "Solidity (Single file)"),
            e.qZA(),
            e.qZA(),
            e.YNc(28, gs, 2, 1, "div", 11),
            e.qZA(),
            e.TgZ(29, "div", 7),
            e.TgZ(30, "label", 8),
            e._uU(31, "Please select Compiler Version"),
            e.qZA(),
            e.TgZ(32, "select", 16, 17),
            e.NdJ("ngModelChange", function (a) {
              return e.CHM(t), (e.oxw().verifyData.compiler_ver = a);
            }),
            e.TgZ(34, "option", 18),
            e._uU(35, "Please Select"),
            e.qZA(),
            e.TgZ(36, "option", 19),
            e._uU(37, "v0.8.24+commit.e11b9ed9"),
            e.qZA(),
            e.TgZ(38, "option", 20),
            e._uU(39, "v0.8.23+commit.f704f362"),
            e.qZA(),
            e.TgZ(40, "option", 21),
            e._uU(41, "v0.8.22+commit.4fc1097e"),
            e.qZA(),
            e.TgZ(42, "option", 22),
            e._uU(43, "0.8.6_Bacon_v4.3"),
            e.qZA(),
            e.qZA(),
            e.YNc(44, _s, 2, 1, "div", 11),
            e.qZA(),
            e.TgZ(45, "div", 23),
            e.TgZ(46, "input", 24, 25),
            e.NdJ("ngModelChange", function (a) {
              return e.CHM(t), (e.oxw().verifyData.nightly_commits = a);
            }),
            e.qZA(),
            e.TgZ(48, "label", 26),
            e._uU(49, "Un-Check to show all nightly Commits also"),
            e.qZA(),
            e.YNc(50, ms, 2, 1, "div", 11),
            e.qZA(),
            e.TgZ(51, "div", 7),
            e.TgZ(52, "label", 8),
            e._uU(53, "Please select Open Source License Type "),
            e.qZA(),
            e.TgZ(54, "select", 27, 28),
            e.NdJ("ngModelChange", function (a) {
              return e.CHM(t), (e.oxw().verifyData.license = a);
            }),
            e.TgZ(56, "option", 18),
            e._uU(57, "Please Select"),
            e.qZA(),
            e.TgZ(58, "option", 29),
            e._uU(59, "1) No License (None)"),
            e.qZA(),
            e.TgZ(60, "option", 30),
            e._uU(61, "2) The Unlicense (Unlicense)"),
            e.qZA(),
            e.TgZ(62, "option", 31),
            e._uU(63, "3) MIT License (MIT)"),
            e.qZA(),
            e.TgZ(64, "option", 32),
            e._uU(65, "4) GNU General Public License v2.0 (GNU GPLv2)"),
            e.qZA(),
            e.TgZ(66, "option", 33),
            e._uU(67, "5) GNU General Public License v3.0 (GNU GPLv3)"),
            e.qZA(),
            e.TgZ(68, "option", 34),
            e._uU(
              69,
              "6) GNU Lesser General Public License v2.1 (GNU LGPLv2.1)"
            ),
            e.qZA(),
            e.TgZ(70, "option", 35),
            e._uU(71, "7) GNU Lesser General Public License v3.0 (GNU LGPLv3)"),
            e.qZA(),
            e.TgZ(72, "option", 36),
            e._uU(73, '8) BSD 2-clause "Simplified" license (BSD-2-Clause)'),
            e.qZA(),
            e.TgZ(74, "option", 37),
            e._uU(
              75,
              '9) BSD 3-clause "New" Or "Revised" license (BSD-3-Clause)'
            ),
            e.qZA(),
            e.TgZ(76, "option", 38),
            e._uU(77, "10) Mozilla Public License 2.0 (MPL-2.0)"),
            e.qZA(),
            e.TgZ(78, "option", 39),
            e._uU(79, "11) Open Software License 3.0 (OSL-3.0)"),
            e.qZA(),
            e.TgZ(80, "option", 40),
            e._uU(81, "12) Apache 2.0 (Apache-2.0)"),
            e.qZA(),
            e.TgZ(82, "option", 41),
            e._uU(83, "13) GNU Affero General Public License (GNU AGPLv3)"),
            e.qZA(),
            e.TgZ(84, "option", 42),
            e._uU(85, "14) Business Source License (BSL 1.1)"),
            e.qZA(),
            e.qZA(),
            e.YNc(86, fs, 2, 1, "div", 11),
            e.qZA(),
            e.TgZ(87, "div", 43),
            e.TgZ(88, "input", 44, 45),
            e.NdJ("ngModelChange", function (a) {
              return e.CHM(t), (e.oxw().verifyData.src_lic = a);
            }),
            e.qZA(),
            e.TgZ(90, "label", 46),
            e._uU(91, "Please select Open Source License Type "),
            e.qZA(),
            e.YNc(92, vs, 2, 1, "div", 11),
            e.qZA(),
            e.TgZ(93, "div", 47),
            e.TgZ(94, "button", 48),
            e.NdJ("click", function () {
              e.CHM(t);
              const a = e.MAs(12);
              return e.oxw().setverify(a);
            }),
            e._uU(95, "Submit"),
            e.qZA(),
            e.TgZ(96, "button", 49),
            e.NdJ("click", function () {
              e.CHM(t);
              const a = e.MAs(12);
              return e.oxw().resetData(a);
            }),
            e._uU(97, "Reset"),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA();
        }
        if (2 & n) {
          const t = e.MAs(12),
            o = e.MAs(17),
            a = e.MAs(23),
            r = e.MAs(33),
            s = e.MAs(47),
            c = e.MAs(55),
            d = e.MAs(89),
            Z = e.oxw();
          e.xp6(16),
            e.ekj("is-invalid", o.invalid && o.touched),
            e.Q6J("ngModel", Z.verifyData.contractAddr),
            e.xp6(2),
            e.Q6J("ngIf", o.errors && (o.valid || o.touched)),
            e.xp6(4),
            e.ekj("is-invalid", a.invalid && a.touched),
            e.Q6J("ngModel", Z.verifyData.soliditytype),
            e.xp6(6),
            e.Q6J("ngIf", a.errors && (a.valid || a.touched)),
            e.xp6(4),
            e.ekj("is-invalid", r.invalid && r.touched),
            e.Q6J("ngModel", Z.verifyData.compiler_ver),
            e.xp6(12),
            e.Q6J("ngIf", r.errors && (r.valid || r.touched)),
            e.xp6(2),
            e.ekj("is-invalid", s.invalid && s.touched),
            e.Q6J("ngModel", Z.verifyData.nightly_commits),
            e.xp6(4),
            e.Q6J("ngIf", s.errors && (s.valid || s.touched)),
            e.xp6(4),
            e.ekj("is-invalid", c.invalid && c.touched),
            e.Q6J("ngModel", Z.verifyData.license),
            e.xp6(32),
            e.Q6J("ngIf", c.errors && (c.valid || c.touched)),
            e.xp6(2),
            e.ekj("is-invalid", d.invalid && d.touched),
            e.Q6J("ngModel", Z.verifyData.src_lic),
            e.xp6(4),
            e.Q6J("ngIf", d.errors && (d.valid || d.touched)),
            e.xp6(2),
            e.Q6J("disabled", t.invalid);
        }
      }
      function bs(n, i) {
        1 & n && (e.TgZ(0, "span", 52), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Required"));
      }
      function ys(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 50), e.YNc(1, bs, 2, 1, "span", 51), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(86);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function Us(n, i) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "section"),
            e.TgZ(1, "div", 1),
            e.TgZ(2, "form", 5, 53),
            e.TgZ(4, "div", 2),
            e._uU(5, "Verify & Publish Contract Source Code"),
            e.qZA(),
            e.TgZ(6, "div", 54),
            e.TgZ(7, "div", 55),
            e._uU(
              8,
              "1. If the contract compiles correctly at REMIX, it should also compile correctly here."
            ),
            e._UZ(9, "br"),
            e._uU(
              10,
              " 2. We have limited support for verifying contracts created by another contract and there is a timeout of up to 45 seconds for each contract compiled."
            ),
            e._UZ(11, "br"),
            e._uU(
              12,
              " 3. For programatic contract verification, check out the Contract API Endpoint "
            ),
            e.qZA(),
            e.TgZ(13, "div", 56),
            e.TgZ(14, "div", 57),
            e.TgZ(15, "div", 7),
            e.TgZ(16, "label", 8),
            e._uU(17, "Contract Address"),
            e.qZA(),
            e.TgZ(18, "input", 58),
            e.NdJ("ngModelChange", function (a) {
              return e.CHM(t), (e.oxw().verifyData.contractAddr = a);
            }),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(19, "div", 57),
            e.TgZ(20, "div", 7),
            e.TgZ(21, "label", 8),
            e._uU(22, "Compiler"),
            e.qZA(),
            e.TgZ(23, "select", 59),
            e.NdJ("ngModelChange", function (a) {
              return e.CHM(t), (e.oxw().verifyData.compiler_ver = a);
            }),
            e.TgZ(24, "option", 18),
            e._uU(25, "Please Select"),
            e.qZA(),
            e.TgZ(26, "option", 19),
            e._uU(27, "v0.8.24+commit.e11b9ed9"),
            e.qZA(),
            e.TgZ(28, "option", 20),
            e._uU(29, "v0.8.23+commit.f704f362"),
            e.qZA(),
            e.TgZ(30, "option", 21),
            e._uU(31, "v0.8.22+commit.4fc1097e"),
            e.qZA(),
            e.TgZ(32, "option", 22),
            e._uU(33, "0.8.6_Bacon_v4.3"),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(34, "div", 60),
            e.TgZ(35, "div", 7),
            e.TgZ(36, "label", 8),
            e._uU(37, "Optimization"),
            e.qZA(),
            e.TgZ(38, "select", 61, 62),
            e.NdJ("ngModelChange", function (a) {
              return e.CHM(t), (e.oxw().verifyData.optimization = a);
            }),
            e.TgZ(40, "option", 63),
            e._uU(41, "No"),
            e.qZA(),
            e.TgZ(42, "option", 64),
            e._uU(43, "Yes"),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(44, "div", 65),
            e.TgZ(45, "label", 8),
            e._uU(46, "Enter the Solidity Contract Code below *"),
            e.qZA(),
            e.TgZ(47, "textarea", 66, 67),
            e.NdJ("ngModelChange", function (a) {
              return e.CHM(t), (e.oxw().verifyData.soliditysrc = a);
            }),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(49, "div", 68),
            e.TgZ(50, "div", 69),
            e.TgZ(51, "div", 70),
            e.TgZ(52, "h2", 71),
            e.TgZ(53, "button", 72),
            e._uU(54, " Constructor Arguments "),
            e.TgZ(55, "a", 73),
            e._uU(56, "ABI-encoded"),
            e.qZA(),
            e.TgZ(57, "span", 74),
            e._uU(
              58,
              "(for contracts that were created with constructor parameters)"
            ),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(59, "div", 75),
            e.TgZ(60, "div", 76),
            e.TgZ(61, "textarea", 77, 78),
            e.NdJ("ngModelChange", function (a) {
              return e.CHM(t), (e.oxw().verifyData.abiencoded = a);
            }),
            e.qZA(),
            e.TgZ(63, "div", 79),
            e._uU(
              64,
              "For additional information on Constructor Arguments see Our KB Entry "
            ),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(65, "div", 69),
            e.TgZ(66, "div", 80),
            e.TgZ(67, "h2", 71),
            e.TgZ(68, "button", 81),
            e._uU(69, " Misc Settings "),
            e.TgZ(70, "span", 74),
            e._uU(71, "(Runs, EvmVersion License Type settings)"),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(72, "div", 82),
            e.TgZ(73, "div", 76),
            e.TgZ(74, "div", 56),
            e.TgZ(75, "div", 83),
            e.TgZ(76, "div", 7),
            e.TgZ(77, "label", 8),
            e._uU(78, "Runs (Optimizer)"),
            e.qZA(),
            e.TgZ(79, "input", 84, 25),
            e.NdJ("ngModelChange", function (a) {
              return e.CHM(t), (e.oxw().verifyData.runs = a);
            }),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(81, "div", 83),
            e.TgZ(82, "div", 7),
            e.TgZ(83, "label", 8),
            e._uU(84, "EVM Version to target"),
            e.qZA(),
            e.TgZ(85, "select", 85, 86),
            e.NdJ("ngModelChange", function (a) {
              return e.CHM(t), (e.oxw().verifyData.evm_ver = a);
            }),
            e.TgZ(87, "option", 87),
            e._uU(88, "default (compiler defaults)"),
            e.qZA(),
            e.TgZ(89, "option", 88),
            e._uU(90, "homestead (oldest version)"),
            e.qZA(),
            e.TgZ(91, "option", 89),
            e._uU(92, "tangerineWhistle"),
            e.qZA(),
            e.TgZ(93, "option", 90),
            e._uU(94, "spuriousDragon"),
            e.qZA(),
            e.TgZ(95, "option", 91),
            e._uU(96, "byzantium (default for <= v0.5.4)"),
            e.qZA(),
            e.TgZ(97, "option", 92),
            e._uU(98, "constantinople"),
            e.qZA(),
            e.TgZ(99, "option", 93),
            e._uU(100, "petersburg (default for >= v0.5.5)"),
            e.qZA(),
            e.TgZ(101, "option", 94),
            e._uU(102, "istanbul (default for >= v0.5.14)"),
            e.qZA(),
            e.TgZ(103, "option", 95),
            e._uU(104, "berlin (default for >= v0.8.5)"),
            e.qZA(),
            e.TgZ(105, "option", 96),
            e._uU(106, "london (default for >= v0.8.7)"),
            e.qZA(),
            e.TgZ(107, "option", 97),
            e._uU(108, "paris (default for >=v0.8.18)"),
            e.qZA(),
            e.TgZ(109, "option", 98),
            e._uU(110, "shanghai (default for >=v0.8.20)"),
            e.qZA(),
            e.qZA(),
            e.YNc(111, ys, 2, 1, "div", 11),
            e.qZA(),
            e.qZA(),
            e.TgZ(112, "div", 83),
            e.TgZ(113, "div", 7),
            e.TgZ(114, "label", 8),
            e._uU(115, "LicenseType "),
            e.qZA(),
            e.TgZ(116, "select", 27),
            e.NdJ("ngModelChange", function (a) {
              return e.CHM(t), (e.oxw().verifyData.license = a);
            }),
            e.TgZ(117, "option", 29),
            e._uU(118, "1) No License (None)"),
            e.qZA(),
            e.TgZ(119, "option", 30),
            e._uU(120, "2) The Unlicense (Unlicense)"),
            e.qZA(),
            e.TgZ(121, "option", 31),
            e._uU(122, "3) MIT License (MIT)"),
            e.qZA(),
            e.TgZ(123, "option", 32),
            e._uU(124, "4) GNU General Public License v2.0 (GNU GPLv2)"),
            e.qZA(),
            e.TgZ(125, "option", 33),
            e._uU(126, "5) GNU General Public License v3.0 (GNU GPLv3)"),
            e.qZA(),
            e.TgZ(127, "option", 34),
            e._uU(
              128,
              "6) GNU Lesser General Public License v2.1 (GNU LGPLv2.1)"
            ),
            e.qZA(),
            e.TgZ(129, "option", 35),
            e._uU(
              130,
              "7) GNU Lesser General Public License v3.0 (GNU LGPLv3)"
            ),
            e.qZA(),
            e.TgZ(131, "option", 36),
            e._uU(132, '8) BSD 2-clause "Simplified" license (BSD-2-Clause)'),
            e.qZA(),
            e.TgZ(133, "option", 37),
            e._uU(
              134,
              '9) BSD 3-clause "New" Or "Revised" license (BSD-3-Clause)'
            ),
            e.qZA(),
            e.TgZ(135, "option", 38),
            e._uU(136, "10) Mozilla Public License 2.0 (MPL-2.0)"),
            e.qZA(),
            e.TgZ(137, "option", 39),
            e._uU(138, "11) Open Software License 3.0 (OSL-3.0)"),
            e.qZA(),
            e.TgZ(139, "option", 40),
            e._uU(140, "12) Apache 2.0 (Apache-2.0)"),
            e.qZA(),
            e.TgZ(141, "option", 41),
            e._uU(142, "13) GNU Affero General Public License (GNU AGPLv3)"),
            e.qZA(),
            e.TgZ(143, "option", 42),
            e._uU(144, "14) Business Source License (BSL 1.1)"),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(145, "div", 99),
            e.TgZ(146, "button", 48),
            e.NdJ("click", function () {
              return e.CHM(t), e.oxw().verifynpush();
            }),
            e._uU(147, "Verity and Push"),
            e.qZA(),
            e.TgZ(148, "button", 100),
            e.NdJ("click", function () {
              e.CHM(t);
              const a = e.MAs(3);
              return e.oxw().resetData(a);
            }),
            e._uU(149, "Reset"),
            e.qZA(),
            e.TgZ(150, "button", 100),
            e.NdJ("click", function () {
              return e.CHM(t), (e.oxw().section = !1);
            }),
            e._uU(151, "Return to Main"),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA();
        }
        if (2 & n) {
          const t = e.MAs(3),
            o = e.MAs(39),
            a = e.MAs(48),
            r = e.MAs(62),
            s = e.MAs(80),
            c = e.MAs(86),
            d = e.oxw();
          e.xp6(18),
            e.Q6J("ngModel", d.verifyData.contractAddr),
            e.xp6(5),
            e.Q6J("ngModel", d.verifyData.compiler_ver),
            e.xp6(15),
            e.ekj("is-invalid", o.invalid && o.touched),
            e.Q6J("ngModel", d.verifyData.optimization),
            e.xp6(9),
            e.ekj("is-invalid", a.invalid && a.touched),
            e.Q6J("ngModel", d.verifyData.soliditysrc),
            e.xp6(14),
            e.ekj("is-invalid", r.invalid && r.touched),
            e.Q6J("ngModel", d.verifyData.abiencoded),
            e.xp6(18),
            e.ekj("is-invalid", s.invalid && s.touched),
            e.Q6J("ngModel", d.verifyData.runs),
            e.xp6(6),
            e.ekj("is-invalid", c.invalid && c.touched),
            e.Q6J("ngModel", d.verifyData.evm_ver),
            e.xp6(26),
            e.Q6J("ngIf", c.errors && (c.valid || c.touched)),
            e.xp6(5),
            e.Q6J("ngModel", d.verifyData.license),
            e.xp6(30),
            e.Q6J("disabled", t.invalid);
        }
      }
      function Cs(n, i) {
        1 & n && (e.TgZ(0, "span", 31), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Required"));
      }
      function ws(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 29), e.YNc(1, Cs, 2, 1, "span", 30), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(37);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function Ms(n, i) {
        1 & n && (e.TgZ(0, "span", 31), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Required"));
      }
      function Is(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 29), e.YNc(1, Ms, 2, 1, "span", 30), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(49);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function Ns(n, i) {
        1 & n && (e.TgZ(0, "span", 31), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Required"));
      }
      function Os(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 29), e.YNc(1, Ns, 2, 1, "span", 30), e.qZA()),
          2 & n)
        ) {
          e.oxw(2);
          const t = e.MAs(49);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function Js(n, i) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "div", 15),
            e.TgZ(1, "label"),
            e._uU(2, "Contract Address *"),
            e.qZA(),
            e.TgZ(3, "input", 32, 33),
            e.NdJ("ngModelChange", function (a) {
              return e.CHM(t), (e.oxw().checkBal.contaddr = a);
            })("ngModelChange", function (a) {
              return e.CHM(t), e.oxw().checkAddr(a, "contaddr");
            }),
            e.qZA(),
            e.YNc(5, Os, 2, 1, "div", 21),
            e.qZA();
        }
        if (2 & n) {
          const t = e.MAs(4),
            o = e.oxw(),
            a = e.MAs(49);
          e.xp6(3),
            e.ekj("is-invalid", t.invalid && t.touched),
            e.Q6J("ngModel", o.checkBal.contaddr),
            e.xp6(2),
            e.Q6J("ngIf", a.errors && (a.valid || a.touched));
        }
      }
      function Rs(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 12),
            e.TgZ(1, "div", 13),
            e.TgZ(2, "div", 15),
            e.TgZ(3, "label"),
            e._uU(4, "Balance"),
            e.qZA(),
            e.TgZ(5, "div", 34),
            e._uU(6),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(6), e.hij(" ", t.Balance, " ");
        }
      }
      function Ss(n, i) {
        1 & n &&
          (e.TgZ(0, "tbody"),
          e.TgZ(1, "tr"),
          e.TgZ(2, "td"),
          e._uU(3, "NO data found"),
          e.qZA(),
          e.qZA(),
          e.qZA());
      }
      function Ls(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "tr"),
            e.TgZ(1, "td"),
            e.TgZ(2, "a", 12),
            e._uU(3),
            e.qZA(),
            e.qZA(),
            e.TgZ(4, "td"),
            e._uU(5),
            e.qZA(),
            e.TgZ(6, "td"),
            e._uU(7),
            e.qZA(),
            e.TgZ(8, "td", 13),
            e._uU(9),
            e.qZA(),
            e.TgZ(10, "td"),
            e._uU(11),
            e.qZA(),
            e.TgZ(12, "td"),
            e._uU(13),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = i.$implicit;
          e.xp6(2),
            e.MGl("routerLink", "/blocks-details/", t.blockNumber, ""),
            e.xp6(1),
            e.Oqu(t.blockNumber),
            e.xp6(2),
            e.Oqu(t.timediff),
            e.xp6(2),
            e.Oqu(t.transaction_count),
            e.xp6(1),
            e.s9C("title", t.miner),
            e.xp6(1),
            e.Oqu(t.miner_split),
            e.xp6(2),
            e.Oqu(t.gasUsed),
            e.xp6(2),
            e.Oqu(t.gasLimit);
        }
      }
      const Ys = function (n, i) {
        return { itemsPerPage: n, currentPage: i };
      };
      function Qs(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "tbody"),
            e.YNc(1, Ls, 14, 8, "tr", 11),
            e.ALo(2, "paginate"),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(1),
            e.Q6J(
              "ngForOf",
              e.xi3(2, 1, t.transactionList, e.WLB(4, Ys, t.pgItem, t.p))
            );
        }
      }
      function Ps(n, i) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "pagination-controls", 14),
            e.NdJ("pageChange", function (a) {
              return e.CHM(t), (e.oxw().p = a);
            }),
            e.qZA();
        }
      }
      function Ds(n, i) {
        1 & n && e._UZ(0, "app-loader");
      }
      function Hs(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 4),
            e.TgZ(1, "div", 5),
            e.TgZ(2, "div", 6),
            e.TgZ(3, "div", 7),
            e.TgZ(4, "div", 8),
            e._uU(5, "Block Number:"),
            e.qZA(),
            e.TgZ(6, "div", 9),
            e._uU(7),
            e.qZA(),
            e.qZA(),
            e.TgZ(8, "div", 7),
            e.TgZ(9, "div", 8),
            e._uU(10, "Status:"),
            e.qZA(),
            e.TgZ(11, "div", 9),
            e._uU(12),
            e.qZA(),
            e.qZA(),
            e.TgZ(13, "div", 7),
            e.TgZ(14, "div", 8),
            e._uU(15, "Timestamp:"),
            e.qZA(),
            e.TgZ(16, "div", 9),
            e._uU(17),
            e.ALo(18, "date"),
            e.qZA(),
            e.qZA(),
            e.TgZ(19, "div", 7),
            e.TgZ(20, "div", 8),
            e._uU(21, "Transaction:"),
            e.qZA(),
            e.TgZ(22, "div", 9),
            e._uU(23),
            e.qZA(),
            e.qZA(),
            e.TgZ(24, "div", 7),
            e.TgZ(25, "div", 8),
            e._uU(26, "Fee Recipient:"),
            e.qZA(),
            e.TgZ(27, "div", 9),
            e._uU(28),
            e.qZA(),
            e.qZA(),
            e.TgZ(29, "div", 7),
            e.TgZ(30, "div", 8),
            e._uU(31, "Total Difficulty:"),
            e.qZA(),
            e.TgZ(32, "div", 9),
            e._uU(33),
            e.qZA(),
            e.qZA(),
            e.TgZ(34, "div", 7),
            e.TgZ(35, "div", 8),
            e._uU(36, "Gas Used :"),
            e.qZA(),
            e.TgZ(37, "div", 9),
            e._uU(38),
            e.qZA(),
            e.qZA(),
            e.TgZ(39, "div", 7),
            e.TgZ(40, "div", 8),
            e._uU(41, "Gas Limit :"),
            e.qZA(),
            e.TgZ(42, "div", 9),
            e._uU(43),
            e.qZA(),
            e.qZA(),
            e.TgZ(44, "div", 7),
            e.TgZ(45, "div", 8),
            e._uU(46, "Extra Data:"),
            e.qZA(),
            e.TgZ(47, "div", 9),
            e._uU(48),
            e.qZA(),
            e.qZA(),
            e.TgZ(49, "div", 7),
            e.TgZ(50, "div", 8),
            e._uU(51, "Hash :"),
            e.qZA(),
            e.TgZ(52, "div", 9),
            e._uU(53),
            e.qZA(),
            e.qZA(),
            e.TgZ(54, "div", 7),
            e.TgZ(55, "div", 8),
            e._uU(56, "Parent Hash :"),
            e.qZA(),
            e.TgZ(57, "div", 9),
            e._uU(58),
            e.qZA(),
            e.qZA(),
            e.TgZ(59, "div", 7),
            e.TgZ(60, "div", 8),
            e._uU(61, "Nonce :"),
            e.qZA(),
            e.TgZ(62, "div", 9),
            e._uU(63),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(7),
            e.hij(" ", t.transactionData.blockNumber, " "),
            e.xp6(5),
            e.hij(" ", "Success", " "),
            e.xp6(5),
            e.hij(
              " ",
              e.xi3(
                18,
                12,
                t.transactionData.created_at,
                "yyyy-MM-dd HH:mm:ss "
              ),
              " "
            ),
            e.xp6(6),
            e.hij(" ", t.transactionData.transactions, " "),
            e.xp6(5),
            e.hij(" ", t.transactionData.miner, " "),
            e.xp6(5),
            e.hij(" ", t.transactionData.totalDifficulty, " "),
            e.xp6(5),
            e.hij(" ", t.transactionData.gasUsed, " "),
            e.xp6(5),
            e.hij(" ", t.transactionData.gasLimit, " "),
            e.xp6(5),
            e.hij(" ", t.transactionData.extraData, " "),
            e.xp6(5),
            e.hij(" ", t.transactionData.hash, " "),
            e.xp6(5),
            e.hij(" ", t.transactionData.parentHash, " "),
            e.xp6(5),
            e.hij(" ", t.transactionData.nonce, " ");
        }
      }
      function js(n, i) {
        1 & n &&
          (e.TgZ(0, "tbody"),
          e.TgZ(1, "tr"),
          e.TgZ(2, "td"),
          e._uU(3, "NO data found"),
          e.qZA(),
          e.qZA(),
          e.qZA());
      }
      function Vs(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "td"), e.TgZ(1, "a", 12), e._uU(2), e.qZA(), e.qZA()),
          2 & n)
        ) {
          const t = e.oxw().$implicit;
          e.xp6(1),
            e.MGl("routerLink", "/address-info/", t.to, ""),
            e.s9C("title", t.to),
            e.xp6(1),
            e.Oqu(t.toaddress_split);
        }
      }
      function Gs(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "tr"),
            e.TgZ(1, "td"),
            e.TgZ(2, "a", 12),
            e._uU(3),
            e.qZA(),
            e.qZA(),
            e.TgZ(4, "td"),
            e._uU(5),
            e.qZA(),
            e.TgZ(6, "td"),
            e._uU(7),
            e.qZA(),
            e.TgZ(8, "td"),
            e._uU(9),
            e.qZA(),
            e.TgZ(10, "td"),
            e.TgZ(11, "a", 12),
            e._uU(12),
            e.qZA(),
            e.qZA(),
            e.YNc(13, Vs, 3, 3, "td", 9),
            e.TgZ(14, "td"),
            e._uU(15),
            e.qZA(),
            e.TgZ(16, "td"),
            e._uU(17),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = i.$implicit;
          e.xp6(2),
            e.MGl("routerLink", "/transaction-details/", t.txID, ""),
            e.s9C("title", t.txID),
            e.xp6(1),
            e.Oqu(t.txID_split),
            e.xp6(2),
            e.Oqu("0" == t.method ? "Coin Transfer" : t.method),
            e.xp6(2),
            e.Oqu(t.blockId),
            e.xp6(2),
            e.Oqu(t.dateTime),
            e.xp6(2),
            e.MGl("routerLink", "/address-info/", t.from, ""),
            e.s9C("title", t.from),
            e.xp6(1),
            e.Oqu(t.fromaddress_split),
            e.xp6(1),
            e.Q6J("ngIf", "undefined" !== t.to),
            e.xp6(2),
            e.Oqu(t.amount),
            e.xp6(2),
            e.Oqu(null == t.fee ? "0" : t.fee);
        }
      }
      const zs = function (n, i) {
        return { itemsPerPage: n, currentPage: i };
      };
      function Ws(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "tbody"),
            e.YNc(1, Gs, 18, 12, "tr", 11),
            e.ALo(2, "paginate"),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(1),
            e.Q6J(
              "ngForOf",
              e.xi3(2, 1, t.transactionList, e.WLB(4, zs, t.pgItem, t.p))
            );
        }
      }
      function $s(n, i) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "pagination-controls", 13),
            e.NdJ("pageChange", function (a) {
              return e.CHM(t), (e.oxw().p = a);
            }),
            e.qZA();
        }
      }
      function Ks(n, i) {
        1 & n && (e.TgZ(0, "span", 25), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Required"));
      }
      function el(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 23), e.YNc(1, Ks, 2, 1, "span", 24), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(37);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function tl(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 12),
            e.TgZ(1, "div", 13),
            e.TgZ(2, "div", 15),
            e.TgZ(3, "label"),
            e._uU(4, "Total Supply"),
            e.qZA(),
            e.TgZ(5, "div", 26),
            e._uU(6),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(6), e.hij(" ", t.supplyAmt, " ");
        }
      }
      function ol(n, i) {
        if (
          (1 & n &&
            (e.ynx(0), e.TgZ(1, "option", 30), e._uU(2), e.qZA(), e.BQk()),
          2 & n)
        ) {
          const t = i.$implicit;
          e.xp6(1),
            e.s9C("value", t.currency),
            e.xp6(1),
            e.AsE("", t.currency, " (", t.type, ")");
        }
      }
      function il(n, i) {
        1 & n && (e.TgZ(0, "span", 33), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Required"));
      }
      function al(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 31), e.YNc(1, il, 2, 1, "span", 32), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(17);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function rl(n, i) {
        1 & n && (e.TgZ(0, "span", 33), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Required"));
      }
      function sl(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 31), e.YNc(1, rl, 2, 1, "span", 32), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(32);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function ll(n, i) {
        1 & n && (e.TgZ(0, "span", 33), e._uU(1), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu("Required"));
      }
      function cl(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 31), e.YNc(1, ll, 2, 1, "span", 32), e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const t = e.MAs(38);
          e.xp6(1), e.Q6J("ngIf", null == t.errors ? null : t.errors.required);
        }
      }
      function dl(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 34),
            e.TgZ(1, "div", 7),
            e.TgZ(2, "label"),
            e._uU(3, "Transaction hash"),
            e.qZA(),
            e.TgZ(4, "div", 35),
            e._uU(5),
            e.qZA(),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(5), e.hij(" ", t.trx, " ");
        }
      }
      const ul = [
        { path: "", component: ke },
        { path: "login", component: ae },
        { path: "activate_account", component: ae },
        { path: "register", component: Zt },
        { path: "blockchain", component: ft },
        { path: "transactions", component: xt },
        { path: "transaction-details/:searchhash", component: Jt },
        { path: "address-info/:address", component: zt },
        { path: "token", component: dn },
        { path: "commitee", component: un },
        { path: "wallet", component: pn },
        { path: "asset", component: go },
        { path: "account", component: yo },
        { path: "forgotpassword", component: Io },
        {
          path: "contract-info/:contract_address",
          component: (() => {
            class n {
              constructor(t, o, a, r, s) {
                (this.conn = t),
                  (this.actRoute = o),
                  (this.http = a),
                  (this.route = r),
                  (this.alert = s),
                  (this.contract_address = ""),
                  (this.byte_code = ""),
                  (this.abi_data = ""),
                  (this.license = ""),
                  (this.version = ""),
                  (this.optimization = ""),
                  (this.contract_name = ""),
                  (this.status = ""),
                  (this.valuefile = ""),
                  (this.showEditor = !1),
                  (this.balance = "0.00 luma"),
                  (this.transaction_count = "0 Txns"),
                  (this.created_on = ""),
                  (this.creator = ""),
                  (this.addressData = []),
                  (this.token = localStorage.getItem("H1gh-VaLTokEN")),
                  (this.loader = !0),
                  (this.addresscheck = !1),
                  (this.EventresoponseData = []),
                  (this.TokenName = ""),
                  (this.connect = !1),
                  (this.editorOptions = {
                    theme: "vs-dark",
                    language: "javascript",
                    readOnly: !0,
                  }),
                  this.isConnected();
              }
              editorInit(t) {
                t.setSelection({
                  startLineNumber: 1,
                  startColumn: 1,
                  endColumn: 50,
                  endLineNumber: 3,
                });
              }
              ngOnInit() {
                this.actRoute.params.subscribe((o) => {
                  this.contract_address =
                    this.actRoute.snapshot.paramMap.get("contract_address");
                }),
                  this.conn
                    .postUrl("contract/contract_info", {
                      address: this.contract_address,
                    })
                    .subscribe((o) => {
                      if (1 == o.success) {
                        var a = o.compileData,
                          r = o.contract_data;
                        (this.byte_code = a.bytecode),
                          (this.abi_data = JSON.stringify(a.abi)),
                          (this.license = r.license),
                          (this.version = r.version),
                          (this.optimization = r.optimization),
                          (this.contract_name = r.contract_name),
                          (this.balance = o.balance),
                          (this.transaction_count = o.count + " Txns"),
                          (this.created_on = r.created_at),
                          (this.read_contract = o.read_contract),
                          (this.write_contract = o.write_contract),
                          (this.TokenName = o.Name);
                        var s = o.useraddr;
                        (s = s.substring(0, 10) + "..." + s.substring(28, 34)),
                          (this.creator = s =
                            '<a href="/address-info/' +
                            o.useraddr +
                            '" >' +
                            s +
                            "</a>");
                        var c = "Contract source code is ";
                        "verified" == r.status
                          ? ((this.showEditor = !0),
                            (this.status = c + "Verified (Perfect match)"),
                            (this.valuefile = o.code))
                          : ((this.showEditor = !1),
                            (this.status = c + "UnVerified")),
                          this.conn
                            .postUrl("contract/searchTransactionData", {
                              searchHash: o.useraddr,
                            })
                            .subscribe((Z) => {
                              (this.loader = !1), (this.addressData = Z.result);
                            }),
                          this.getEventsData();
                      } else console.log(o.message);
                    });
              }
              isConnected() {
                var t = this;
                return (0, se.Z)(function* () {
                  t.connect = !!(yield window.ethereum.request({
                    method: "eth_accounts",
                  })).length;
                })();
              }
              contMete() {
                void 0 !== window.ethereum
                  ? (window.ethereum.enable(),
                    (this.web3 = new (W())(window.ethereum)),
                    (this.connect = !0))
                  : this.alert.error(
                      "Install metamask extension on your browser!",
                      "Error"
                    );
              }
              submitReadCall(t, o, a) {
                Object.keys(t.value);
                const s = {
                  name: o,
                  conaddr: this.contract_address,
                  input: t.value,
                  type: a,
                  abi: this.abi_data,
                };
                this.conn
                  .postUrl("contract/readContractData", s)
                  .subscribe((c) => {
                    1 == c.status
                      ? (this.getEventsData(),
                        this.getreturnval(s),
                        jQuery("#" + o + "_tab").collapse())
                      : this.alert.error(c.msg, "", { timeOut: 2e3 });
                  });
              }
              submitWriteCall(t, o, a) {
                var r = this;
                return (0, se.Z)(function* () {
                  r.web3 = new (W())(window.ethereum);
                  var s = yield r.web3.eth.net.getId(),
                    c = yield r.conn.RPCData(),
                    d = c.chainId;
                  if (d != s)
                    try {
                      yield window.ethereum.request({
                        method: "wallet_switchEthereumChain",
                        params: [{ chainId: W().utils.toHex(d) }],
                      });
                    } catch (b) {
                      if (4902 === b.code) {
                        r.alert.error("Please add this network in metamask.!");
                        try {
                          var Z = c.chainName,
                            y = c.name,
                            U = c.symbol,
                            k = c.decimals,
                            v = c.rpcUrls;
                          yield window.ethereum.request({
                            method: "wallet_addEthereumChain",
                            params: [
                              {
                                chainId: W().utils.toHex(c.chainId),
                                chainName: Z,
                                nativeCurrency: {
                                  name: y,
                                  symbol: U,
                                  decimals: k,
                                },
                                rpcUrls: [v],
                              },
                            ],
                          });
                        } catch (J) {
                          if (4001 === J.code)
                            return void r.alert.error(
                              "User rejected the request"
                            );
                        }
                      } else if (4001 === b.code)
                        return void r.alert.error("User rejected the request");
                    }
                  try {
                    Object.keys(t.value);
                    const b = {
                      name: o,
                      conaddr: r.contract_address,
                      input: t.value,
                      type: a,
                    };
                    var C = Object.keys(b.input).map(function (I) {
                        return b.input[I];
                      }),
                      w = JSON.parse(r.abi_data),
                      q = (yield r.web3.eth.getAccounts())[0],
                      O = new r.web3.eth.Contract(w, b.conaddr);
                    const J = yield O.methods[o](...C).send({ from: q });
                    (b.trx = J.transactionHash),
                      r.conn.postUrl("contract/writeCont", b).subscribe((I) => {
                        1 == I.status
                          ? ((r.writevalue = I.Set_write),
                            r.getEventsData(),
                            r.getreturnval(b),
                            jQuery("#" + o + "_tab").collapse())
                          : r.alert.error(I.msg, "", { timeOut: 2e3 });
                      });
                  } catch (b) {
                    return 4001 === b.code
                      ? void r.alert.error("User rejected the request")
                      : void r.alert.error("Somthins wents wrong! ");
                  }
                })();
              }
              checkedValidAddress(t) {
                null != t &&
                  this.conn
                    .postUrl("account/checkValidAddress", { address: t })
                    .subscribe((a) => {
                      1 == a.success
                        ? ((this.addresscheck = !0),
                          this.alert.success(a.message, "", { timeOut: 2e3 }))
                        : ((this.addresscheck = !1),
                          this.alert.error(a.message, "", { timeOut: 2e3 }));
                    });
              }
              getEventsData() {
                this.conn
                  .postUrl("contract/eventsData", {
                    address: this.contract_address,
                  })
                  .subscribe((o) => {
                    1 == o.success
                      ? (this.EventBlockData = o.eventBlockData)
                      : this.alert.error(o.msg, "", { timeOut: 2e3 });
                  });
              }
              getreturnval(t) {
                this.conn
                  .postUrl("contract/eventsresponse", t)
                  .subscribe((o) => {
                    1 == o.success
                      ? (this.EventresoponseData = o.eventsResponse)
                      : this.alert.error(o.msg, "", { timeOut: 2e3 });
                  });
              }
              submitTxId(t) {
                this.conn
                  .postRequest(
                    "contract/getTxInfo",
                    { txnhash: t.value },
                    this.token
                  )
                  .subscribe((a) => {
                    1 == a.success
                      ? (this.tokenId = "Token Id : " + a.tokenId)
                      : this.alert.error(a.msg, "", { timeOut: 2e3 });
                  });
              }
            }
            return (
              (n.ɵfac = function (t) {
                return new (t || n)(
                  e.Y36(h),
                  e.Y36(u.gz),
                  e.Y36(R.eN),
                  e.Y36(u.F0),
                  e.Y36(A._W)
                );
              }),
              (n.ɵcmp = e.Xpm({
                type: n,
                selectors: [["app-contract-info"]],
                viewQuery: function (t, o) {
                  if ((1 & t && e.Gf(Q.T2, 5), 2 & t)) {
                    let a;
                    e.iGM((a = e.CRH())) && (o.monacoComponent = a.first);
                  }
                },
                decls: 176,
                vars: 23,
                consts: [
                  [4, "ngIf"],
                  [1, "container"],
                  [1, "h4", "adrs"],
                  [1, "dark-bg", "p-2", "wf"],
                  [1, "row"],
                  [1, "col-md-6"],
                  [1, "info-wrapper", "my-4"],
                  [1, "info-title"],
                  [1, "info-row"],
                  [1, "label-field"],
                  [1, "data-field"],
                  [1, "data-field", 3, "innerText"],
                  [1, "data-field", 3, "innerHtml"],
                  [1, "info-wrapper"],
                  [
                    "id",
                    "myTab",
                    "role",
                    "tablist",
                    1,
                    "nav",
                    "nav-tabs",
                    "dark-bg",
                    "site-tabs",
                  ],
                  [1, "nav-item"],
                  [
                    "id",
                    "transactions-tab",
                    "data-toggle",
                    "tab",
                    "href",
                    "#transactions",
                    "role",
                    "tab",
                    "aria-controls",
                    "profile",
                    "aria-selected",
                    "false",
                    1,
                    "nav-link",
                  ],
                  [
                    "id",
                    "contract-tab",
                    "data-toggle",
                    "tab",
                    "href",
                    "#contract",
                    "role",
                    "tab",
                    "aria-controls",
                    "contract",
                    "aria-selected",
                    "false",
                    1,
                    "nav-link",
                  ],
                  [
                    "id",
                    "event-tab",
                    "data-toggle",
                    "tab",
                    "href",
                    "#event",
                    "role",
                    "tab",
                    "aria-controls",
                    "event",
                    "aria-selected",
                    "false",
                    1,
                    "nav-link",
                  ],
                  ["id", "myTabContent", 1, "tab-content"],
                  [
                    "id",
                    "balance",
                    "role",
                    "tabpanel",
                    "aria-labelledby",
                    "balance-tab",
                    1,
                    "tab-pane",
                    "fade",
                    "p-3",
                  ],
                  [
                    "id",
                    "transactions",
                    "role",
                    "tabpanel",
                    "aria-labelledby",
                    "transactions-tab",
                    1,
                    "tab-pane",
                    "fade",
                    "p-3",
                    "p-3",
                    "show",
                    "active",
                  ],
                  [1, "table-responsive", "bg-white"],
                  [1, "table"],
                  [
                    "id",
                    "transfer",
                    "role",
                    "tabpanel",
                    "aria-labelledby",
                    "transfter-tab",
                    1,
                    "tab-pane",
                    "fade",
                    "p-3",
                  ],
                  [
                    "id",
                    "internal",
                    "role",
                    "tabpanel",
                    "aria-labelledby",
                    "internal-tab",
                    1,
                    "tab-pane",
                    "fade",
                    "p-3",
                  ],
                  [
                    "id",
                    "contract",
                    "role",
                    "tabpanel",
                    "aria-labelledby",
                    "contract-tab",
                    1,
                    "tab-pane",
                    "fade",
                    "p-3",
                  ],
                  [
                    "id",
                    "myTab",
                    "role",
                    "tablist",
                    1,
                    "nav",
                    "nav-tabs",
                    "small",
                    "red-tabs",
                  ],
                  [
                    "id",
                    "code-tab",
                    "data-toggle",
                    "tab",
                    "href",
                    "#code",
                    "role",
                    "tab",
                    "aria-controls",
                    "code",
                    "aria-selected",
                    "true",
                    1,
                    "nav-link",
                    "active",
                    "dark-bg",
                  ],
                  [
                    "id",
                    "readcontract-tab",
                    "data-toggle",
                    "tab",
                    "href",
                    "#readcontract",
                    "role",
                    "tab",
                    "aria-controls",
                    "readcontract",
                    "aria-selected",
                    "false",
                    1,
                    "nav-link",
                    "dark-bg",
                  ],
                  [
                    "id",
                    "writecontract-tab",
                    "data-toggle",
                    "tab",
                    "href",
                    "#writecontract",
                    "role",
                    "tab",
                    "aria-controls",
                    "writecontract",
                    "aria-selected",
                    "false",
                    1,
                    "nav-link",
                    "dark-bg",
                  ],
                  [1, "wf"],
                  [
                    "id",
                    "code",
                    "role",
                    "tabpanel",
                    "aria-labelledby",
                    "code-tab",
                    1,
                    "tab-pane",
                    "fade",
                    "show",
                    "active",
                  ],
                  [1, "wf", "small"],
                  [1, "dark-bg"],
                  [1, "col", "no-border"],
                  [
                    "id",
                    "readcontract",
                    "role",
                    "tabpanel",
                    "aria-labelledby",
                    "readcontract-tab",
                    1,
                    "tab-pane",
                    "fade",
                  ],
                  [1, "btn-secondary", "mb-3", 3, "click"],
                  [1, "fa", "fa-circle", 3, "ngClass"],
                  [4, "ngFor", "ngForOf"],
                  [
                    "id",
                    "writecontract",
                    "role",
                    "tabpanel",
                    "aria-labelledby",
                    "writecontract-tab",
                    1,
                    "tab-pane",
                    "fade",
                  ],
                  [
                    "id",
                    "event",
                    "role",
                    "tabpanel",
                    "aria-labelledby",
                    "event-tab",
                    1,
                    "tab-pane",
                    "fade",
                    "p-3",
                  ],
                  [1, "p-3"],
                  [
                    "id",
                    "energy",
                    "role",
                    "tabpanel",
                    "aria-labelledby",
                    "energy-tab",
                    1,
                    "tab-pane",
                    "fade",
                    "p-3",
                  ],
                  [
                    "id",
                    "analysis",
                    "role",
                    "tabpanel",
                    "aria-labelledby",
                    "anaysis-tab",
                    1,
                    "tab-pane",
                    "fade",
                    "p-3",
                  ],
                  [3, "routerLink", "title"],
                  [
                    "fxFlex",
                    "",
                    2,
                    "height",
                    "300px",
                    "width",
                    "100%",
                    "display",
                    "inline-block",
                    3,
                    "options",
                    "ngModel",
                    "ngModelChange",
                    "init",
                  ],
                  ["id", "accordion", 1, "pb-3"],
                  [1, "card"],
                  ["id", "heading01", 1, "card-header"],
                  [
                    "data-toggle",
                    "collapse",
                    "aria-expanded",
                    "true",
                    1,
                    "mb-0",
                    "py-2",
                  ],
                  [1, "btn", "btn-link"],
                  ["autocomplete", "off"],
                  ["readsome", "ngForm"],
                  [1, "collapse", "pt-3", 3, "id"],
                  [
                    "aria-labelledby",
                    "heading01",
                    "data-parent",
                    "#accordion",
                    1,
                    "collapse",
                    3,
                    "id",
                  ],
                  [1, "card-body"],
                  [1, "btn", "btn-dark", 3, "disabled", "click"],
                  [1, "collapse", 3, "id"],
                  ["class", "pl-3 pr-3 mb-3", 4, "ngIf"],
                  [1, "pl-3", "pr-3", "mb-3"],
                  [
                    "type",
                    "text",
                    "ngModel",
                    "",
                    "required",
                    "",
                    1,
                    "form-control",
                    "mt-3",
                    2,
                    "border-radius",
                    "11px",
                    3,
                    "placeholder",
                    "name",
                    "ngModelChange",
                  ],
                  ["{{inp.name}}", "ngModel"],
                  [
                    "type",
                    "number",
                    "ngModel",
                    "",
                    "required",
                    "",
                    "onkeypress",
                    "if ( isNaN(this.value + String.fromCharCode(event.keyCode) )) return false;",
                    1,
                    "form-control",
                    "mt-3",
                    2,
                    "border-radius",
                    "11px",
                    3,
                    "placeholder",
                    "name",
                  ],
                  [1, "fas", "fa-angle-double-right"],
                  [
                    "data-toggle",
                    "collapse",
                    "aria-expanded",
                    "true",
                    1,
                    "mb-0",
                  ],
                  ["writesome", "ngForm"],
                  ["class", "card-body", 4, "ngIf"],
                  [
                    "type",
                    "text",
                    "ngModel",
                    "",
                    "required",
                    "",
                    1,
                    "form-control",
                    "mt-3",
                    2,
                    "border-radius",
                    "11px",
                    3,
                    "placeholder",
                    "name",
                  ],
                  [
                    "type",
                    "text",
                    "ngModel",
                    "",
                    "required",
                    "",
                    "onkeypress",
                    "if ( isNaN(this.value + String.fromCharCode(event.keyCode) )) return false;",
                    1,
                    "form-control",
                    "mt-3",
                    2,
                    "border-radius",
                    "11px",
                    3,
                    "placeholder",
                    "name",
                  ],
                  [
                    "type",
                    "text",
                    "placeholder",
                    "Enter mint transaction Hash",
                    "name",
                    "trHash",
                    "ngModel",
                    "",
                    "required",
                    "",
                    1,
                    "form-control",
                    "mt-3",
                    2,
                    "border-radius",
                    "11px",
                  ],
                  ["trhash", "ngModel"],
                  [1, "btn", "btn-dark", 3, "click"],
                  [3, "innerHtml"],
                  [1, "func"],
                  [1, "col-2", 2, "color", "#319ce5"],
                  [1, "col-2"],
                  ["style", "color: #c23631", 4, "ngFor", "ngForOf"],
                  [2, "color", "#c23631"],
                ],
                template: function (t, o) {
                  1 & t &&
                    (e.YNc(0, ei, 1, 0, "app-loader", 0),
                    e._UZ(1, "app-header"),
                    e._UZ(2, "app-searchbar"),
                    e.TgZ(3, "section"),
                    e.TgZ(4, "div", 1),
                    e.TgZ(5, "div", 2),
                    e._uU(6, "Contract"),
                    e.qZA(),
                    e.TgZ(7, "div", 3),
                    e._uU(8),
                    e.qZA(),
                    e.TgZ(9, "div", 4),
                    e.TgZ(10, "div", 5),
                    e.TgZ(11, "div", 6),
                    e.TgZ(12, "div", 7),
                    e._uU(13, " Contract Overview "),
                    e.qZA(),
                    e.TgZ(14, "div", 8),
                    e.TgZ(15, "div", 9),
                    e._uU(16, "Name :"),
                    e.qZA(),
                    e.TgZ(17, "div", 10),
                    e._uU(18),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(19, "div", 8),
                    e.TgZ(20, "div", 9),
                    e._uU(21, "Balance :"),
                    e.qZA(),
                    e.TgZ(22, "div", 11),
                    e._uU(23, "0.00 luma"),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(24, "div", 8),
                    e.TgZ(25, "div", 9),
                    e._uU(26, "Transactions :"),
                    e.qZA(),
                    e.TgZ(27, "div", 11),
                    e._uU(28, "0 Txns"),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(29, "div", 8),
                    e.TgZ(30, "div", 9),
                    e._uU(31, "Token Tracker : "),
                    e.qZA(),
                    e.TgZ(32, "div", 10),
                    e._uU(33, "Luma"),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(34, "div", 5),
                    e.TgZ(35, "div", 6),
                    e.TgZ(36, "div", 7),
                    e._uU(37, " Information "),
                    e.qZA(),
                    e.TgZ(38, "div", 8),
                    e.TgZ(39, "div", 9),
                    e._uU(40, "Creator :"),
                    e.qZA(),
                    e._UZ(41, "div", 12),
                    e.qZA(),
                    e.TgZ(42, "div", 8),
                    e.TgZ(43, "div", 9),
                    e._uU(44, "Created on :"),
                    e.qZA(),
                    e._UZ(45, "div", 11),
                    e.qZA(),
                    e.TgZ(46, "div", 8),
                    e.TgZ(47, "div", 9),
                    e._uU(48, "Energy Consumption Ratio :"),
                    e.qZA(),
                    e.TgZ(49, "div", 10),
                    e._uU(50, "Contracts100% Users30%"),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(51, "div", 8),
                    e.TgZ(52, "div", 9),
                    e._uU(53, "Initial Asset :"),
                    e.qZA(),
                    e.TgZ(54, "div", 10),
                    e._uU(55, "0 luma"),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(56, "div", 1),
                    e.TgZ(57, "div", 13),
                    e.TgZ(58, "ul", 14),
                    e.TgZ(59, "li", 15),
                    e.TgZ(60, "a", 16),
                    e._uU(61, "Transactions"),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(62, "li", 15),
                    e.TgZ(63, "a", 17),
                    e._uU(64, "Contract"),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(65, "li", 15),
                    e.TgZ(66, "a", 18),
                    e._uU(67, "Events"),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(68, "div", 19),
                    e.TgZ(69, "div", 20),
                    e._uU(70, "balance"),
                    e.qZA(),
                    e.TgZ(71, "div", 21),
                    e.TgZ(72, "div", 22),
                    e.TgZ(73, "table", 23),
                    e.TgZ(74, "thead"),
                    e.TgZ(75, "tr"),
                    e.TgZ(76, "th"),
                    e._uU(77, "Txn Hash"),
                    e.qZA(),
                    e.TgZ(78, "th"),
                    e._uU(79, "Block"),
                    e.qZA(),
                    e.TgZ(80, "th"),
                    e._uU(81, "created At"),
                    e.qZA(),
                    e.TgZ(82, "th"),
                    e._uU(83, "From"),
                    e.qZA(),
                    e.TgZ(84, "th"),
                    e._uU(85, "To"),
                    e.qZA(),
                    e.TgZ(86, "th"),
                    e._uU(87, "Value"),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.YNc(88, ti, 4, 0, "tbody", 0),
                    e.YNc(89, oi, 2, 1, "tbody", 0),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(90, "div", 24),
                    e._uU(91, "transfer"),
                    e.qZA(),
                    e.TgZ(92, "div", 25),
                    e._uU(93, "internal"),
                    e.qZA(),
                    e.TgZ(94, "div", 26),
                    e.TgZ(95, "ul", 27),
                    e.TgZ(96, "li", 15),
                    e.TgZ(97, "a", 28),
                    e._uU(98, "Code"),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(99, "li", 15),
                    e.TgZ(100, "a", 29),
                    e._uU(101, "Read Contract"),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(102, "li", 15),
                    e.TgZ(103, "a", 30),
                    e._uU(104, "Write Contract"),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e._UZ(105, "br"),
                    e.TgZ(106, "small", 31),
                    e._uU(107),
                    e.qZA(),
                    e.TgZ(108, "div", 4),
                    e.TgZ(109, "div", 5),
                    e.TgZ(110, "div", 8),
                    e.TgZ(111, "div", 9),
                    e._uU(112, "Contract Name :"),
                    e.qZA(),
                    e.TgZ(113, "div", 10),
                    e._uU(114),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(115, "div", 8),
                    e.TgZ(116, "div", 9),
                    e._uU(117, "Optimization :"),
                    e.qZA(),
                    e._UZ(118, "div", 11),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(119, "div", 5),
                    e.TgZ(120, "div", 8),
                    e.TgZ(121, "div", 9),
                    e._uU(122, "Compiler version :"),
                    e.qZA(),
                    e._UZ(123, "div", 11),
                    e.qZA(),
                    e.TgZ(124, "div", 8),
                    e.TgZ(125, "div", 9),
                    e._uU(126, "License :"),
                    e.qZA(),
                    e._UZ(127, "div", 11),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e._UZ(128, "br"),
                    e.TgZ(129, "div", 19),
                    e.TgZ(130, "div", 32),
                    e.YNc(131, ii, 5, 2, "ng-container", 0),
                    e.TgZ(132, "div", 33),
                    e._uU(133, "Contract ABI"),
                    e.qZA(),
                    e.TgZ(134, "div", 34),
                    e.TgZ(135, "textarea", 35),
                    e._uU(136),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(137, "div", 33),
                    e._uU(138, "Byte code"),
                    e.qZA(),
                    e.TgZ(139, "div", 34),
                    e.TgZ(140, "textarea", 35),
                    e._uU(141),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(142, "div", 36),
                    e.TgZ(143, "button", 37),
                    e.NdJ("click", function () {
                      return o.contMete();
                    }),
                    e.TgZ(144, "span"),
                    e._UZ(145, "i", 38),
                    e.qZA(),
                    e.TgZ(146, "span"),
                    e._uU(147, "Connect to Web3"),
                    e.qZA(),
                    e.qZA(),
                    e.YNc(148, di, 17, 10, "ng-container", 39),
                    e.qZA(),
                    e.TgZ(149, "div", 40),
                    e.TgZ(150, "button", 37),
                    e.NdJ("click", function () {
                      return o.contMete();
                    }),
                    e.TgZ(151, "span"),
                    e._UZ(152, "i", 38),
                    e.qZA(),
                    e.TgZ(153, "span"),
                    e._uU(154, "Connect to Web3"),
                    e.qZA(),
                    e.qZA(),
                    e.YNc(155, fi, 18, 11, "ng-container", 39),
                    e.qZA(),
                    e.TgZ(156, "div", 40),
                    e._uU(157, "..."),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(158, "div", 41),
                    e.TgZ(159, "div", 22),
                    e.TgZ(160, "table", 23),
                    e.TgZ(161, "thead"),
                    e.TgZ(162, "tr"),
                    e.TgZ(163, "th"),
                    e._uU(164, "Event Called At"),
                    e.qZA(),
                    e.TgZ(165, "th"),
                    e._uU(166, "Method"),
                    e.qZA(),
                    e.TgZ(167, "th", 42),
                    e._uU(168, "Event Logs"),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.YNc(169, Ai, 4, 0, "tbody", 0),
                    e.YNc(170, Ui, 2, 1, "tbody", 0),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(171, "div", 43),
                    e._uU(172, "energy"),
                    e.qZA(),
                    e.TgZ(173, "div", 44),
                    e._uU(174, "analysis"),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e._UZ(175, "app-footer")),
                    2 & t &&
                      (e.Q6J("ngIf", o.loader),
                      e.xp6(8),
                      e.Oqu(o.contract_address),
                      e.xp6(10),
                      e.Oqu(o.TokenName),
                      e.xp6(4),
                      e.Q6J("innerText", o.balance),
                      e.xp6(5),
                      e.Q6J("innerText", o.transaction_count),
                      e.xp6(14),
                      e.Q6J("innerHtml", o.creator, e.oJD),
                      e.xp6(4),
                      e.Q6J("innerText", o.created_on),
                      e.xp6(43),
                      e.Q6J(
                        "ngIf",
                        0 ==
                          (null == o.addressData ? null : o.addressData.length)
                      ),
                      e.xp6(1),
                      e.Q6J("ngIf", o.addressData.length > 0),
                      e.xp6(18),
                      e.Oqu(o.status),
                      e.xp6(7),
                      e.Oqu(o.TokenName),
                      e.xp6(4),
                      e.Q6J("innerText", o.optimization),
                      e.xp6(5),
                      e.Q6J("innerText", o.version),
                      e.xp6(4),
                      e.Q6J("innerText", o.license),
                      e.xp6(4),
                      e.Q6J("ngIf", o.showEditor),
                      e.xp6(5),
                      e.Oqu(o.abi_data),
                      e.xp6(5),
                      e.Oqu(o.byte_code),
                      e.xp6(4),
                      e.Q6J("ngClass", o.connect ? "connect" : "disconnect"),
                      e.xp6(3),
                      e.Q6J("ngForOf", o.read_contract),
                      e.xp6(4),
                      e.Q6J("ngClass", o.connect ? "connect" : "disconnect"),
                      e.xp6(3),
                      e.Q6J("ngForOf", o.write_contract),
                      e.xp6(14),
                      e.Q6J(
                        "ngIf",
                        0 ==
                          (null == o.EventBlockData
                            ? null
                            : o.EventBlockData.length)
                      ),
                      e.xp6(1),
                      e.Q6J(
                        "ngIf",
                        (null == o.EventBlockData
                          ? null
                          : o.EventBlockData.length) > 0
                      ));
                },
                directives: [
                  p.O5,
                  g,
                  m,
                  p.mk,
                  p.sg,
                  _,
                  f,
                  u.yS,
                  Q.T2,
                  l.JJ,
                  l.On,
                  l._Y,
                  l.JL,
                  l.F,
                  l.Fj,
                  l.Q7,
                  l.wV,
                ],
                pipes: [p.uU],
                styles: [
                  ".no-border[_ngcontent-%COMP%]{height:165px;background:transparent;border:0;padding:20px 5px}.func[_ngcontent-%COMP%]{background-color:#f3f3f3;font-size:.875rem;font-weight:400;color:#000;display:block-inline;margin:8px;line-height:2;text-align:left;padding:20px}.connect[_ngcontent-%COMP%]{font-size:13px;color:green;margin-right:5px}.disconnect[_ngcontent-%COMP%]{font-size:13px;color:red;margin-right:5px}",
                ],
              })),
              n
            );
          })(),
        },
        {
          path: "record-token",
          component: (() => {
            class n {
              constructor(t, o, a) {
                (this.conn = t),
                  (this.route = o),
                  (this.alert = a),
                  (this.token = localStorage.getItem("H1gh-VaLTokEN")),
                  (this.creator = ""),
                  (this.contract_name = ""),
                  (this.creation_date = ""),
                  (this.signLoader = !1),
                  (this.token_type = "TRC20"),
                  (this.proUrl = ""),
                  (this.file = ""),
                  (this.token_data = ""),
                  (this.token_data_trc10 = ""),
                  (this.contract_address_view = ""),
                  (this.issuer = ""),
                  (this.issuer1 = ""),
                  (this.token_name_view = ""),
                  (this.token_abbr_view = ""),
                  (this.token_intro_view = ""),
                  (this.token_supply_view = ""),
                  (this.decimal_place_view = ""),
                  (this.issuer_view = ""),
                  (this.website_url_view = ""),
                  (this.email_view = ""),
                  (this.github_url_view = ""),
                  (this.white_paper_url_view = ""),
                  (this.twitter_url_view = ""),
                  (this.facebook_url_view = ""),
                  (this.telegram_url_view = ""),
                  (this.webibo_url_view = ""),
                  (this.token_name_view2 = ""),
                  (this.token_abbr_view2 = ""),
                  (this.token_intro_view2 = ""),
                  (this.token_supply_view2 = ""),
                  (this.decimal_place_view2 = ""),
                  (this.tokenprice_view = ""),
                  (this.tokenprice2_view = ""),
                  (this.sale_start_view = ""),
                  (this.sale_end_view = ""),
                  (this.frozen_amount_view = ""),
                  (this.website_url_view2 = ""),
                  (this.response_msg = ""),
                  (this.error_message = ""),
                  (this.error_type = ""),
                  (this.record_info_tab = !0),
                  (this.confirm_info_tab = !0),
                  (this.view_result_tab = !0),
                  (this.loader = !1),
                  (this.TRC20 = !0),
                  (this.TRC10 = !1),
                  (this.TRC721 = !1),
                  (this.TRC1155 = !1),
                  (this.Frozen_supply = !1),
                  (this.Issuing_time = !1),
                  (this.tokename = "Token"),
                  (this.tokenprice1 = 1),
                  (this.tokenprice3 = 1),
                  (this.tokenvalue = 0),
                  (this.Frozsupp = !1),
                  (this.issutime = !1),
                  (this.olddata = !0),
                  (this.record_tab_status = !1),
                  (this.confirm_tab_status = !1),
                  (this.record_tab1_status = !1),
                  (this.confirm_tab1_status = !1),
                  (this.view_tab_status = !1),
                  (this.tokenprice = 1),
                  (this.loginStat = ""),
                  (this.idFrtImg = "assets/images/id-front.svg"),
                  (this.proofMBErr = !1),
                  (this.proofTypeErr = !0),
                  this.conn.loggedIn()
                    ? (this.loginStat = !1)
                    : ((this.loginStat = !0), this.route.navigate(["login"]));
              }
              ngOnInit() {
                (this.startsaledata = new Date(
                  new Date().setDate(new Date().getDate() + 1)
                )
                  .toISOString()
                  .split("T")[0]),
                  this.conn
                    .getRequest("contract/getuseraddress", this.token)
                    .subscribe((t) => {
                      1 == t.success &&
                        ((this.issuer = t.address), (this.issuer1 = t.address));
                    });
              }
              next_tab(t) {
                jQuery("#" + t).click(),
                  "contract-record" == t
                    ? ((this.record_tab_status = !0),
                      (this.confirm_tab_status = !1),
                      (this.view_tab_status = !1))
                    : "contact-confirm" == t
                    ? ((this.record_tab_status = !0),
                      (this.confirm_tab_status = !0),
                      (this.view_tab_status = !1))
                    : "contact-result" == t
                    ? ((this.record_tab_status = !0),
                      (this.confirm_tab_status = !0),
                      (this.view_tab_status = !0))
                    : "contract-record2" == t
                    ? ((this.record_tab1_status = !0),
                      (this.confirm_tab1_status = !1),
                      (this.view_tab_status = !1))
                    : "contact-confirm2" == t &&
                      ((this.record_tab1_status = !0),
                      (this.confirm_tab1_status = !0),
                      (this.view_tab_status = !1));
              }
              previous_tab(t) {
                jQuery("#" + t).click();
              }
              fetchcontract_info(t) {
                t.length >= 42
                  ? this.conn
                      .postRequest(
                        "contract/getContractInfo",
                        { contract_address: t },
                        this.token
                      )
                      .subscribe((a) => {
                        1 == a.success
                          ? ((this.contract_name = a.data.contract_name),
                            (this.creation_date = a.data.created_at),
                            (this.creator = a.data.user_address),
                            (this.issuer = a.data.owner_address),
                            (this.issuer1 = a.data.owner_address))
                          : ((this.error_message = a.message),
                            (this.error_type = "Error : "),
                            jQuery("#errorModal").modal("show"));
                      })
                  : ((this.error_message =
                      "Contract address must be 42 character length"),
                    (this.error_type = "Error : "),
                    jQuery("#errorModal").modal("show"));
              }
              check_token(t) {
                this.conn
                  .postRequest(
                    "contract/checkTokenName",
                    { token_name: t },
                    this.token
                  )
                  .subscribe((a) => {
                    0 == a.success && alert("Token Name already exist");
                  });
              }
              showMyImage(t, o, a) {
                const r = new FileReader();
                o.files.length > 0 &&
                  "token_logo" == a &&
                  (r.readAsDataURL(o.files[0]),
                  (r.onload = (c) => {
                    this.idFrtImg = r.result;
                  }),
                  (this.file = o.files[0]),
                  (this.proofMBErr =
                    parseFloat(o.files[0].size) / 1024 / 1024 >= 2),
                  (this.proofTypeErr = !![
                    "image/png",
                    "image/jpeg",
                    "image/svg+xml",
                    "image/jpg",
                  ].includes(o.files[0].type)));
              }
              executeAction(t, o) {
                var a = o.form.value.contract_address;
                (null == a ? void 0 : a.length) >= 42
                  ? 0 == this.proofMBErr && 1 == this.proofTypeErr
                    ? ((this.token_data = o.value),
                      (this.contract_address_view = o.value.contract_address),
                      (this.token_name_view = o.value.token_name),
                      (this.token_abbr_view = o.value.token_abbr),
                      (this.token_intro_view = o.value.token_intro),
                      (this.token_supply_view = o.value.token_supply),
                      (this.decimal_place_view = o.value.decimal_place),
                      (this.issuer_view = o.value.issuer),
                      (this.website_url_view = o.value.website_url),
                      (this.email_view = o.value.email),
                      (this.github_url_view = o.value.github_url),
                      (this.white_paper_url_view = o.value.white_paper_url),
                      (this.twitter_url_view = o.value.twitter_url),
                      (this.facebook_url_view = o.value.facebook_url),
                      (this.telegram_url_view = o.value.telegram_url),
                      (this.webibo_url_view = o.value.webibo_url),
                      jQuery("#" + t).click())
                    : this.alert.error("Enter Valid Logo within 2MB ", "")
                  : this.alert.error(
                      "Contract address must be 42 character length",
                      "",
                      { timeOut: 2e3 }
                    );
              }
              executeAction_trc10(t, o) {
                (this.token_data_trc10 = o.value),
                  (this.token_name_view2 = o.value.token_name1),
                  (this.token_abbr_view2 = o.value.token_abbr1),
                  (this.token_intro_view2 = o.value.token_intro1),
                  (this.token_supply_view2 = o.value.token_supply),
                  (this.decimal_place_view2 = o.value.decimal_place),
                  (this.tokenprice_view = o.value.decimal_place),
                  (this.tokenprice2_view = o.value.tokenprice2),
                  (this.sale_start_view = o.value.sale_start),
                  (this.sale_end_view = o.value.sale_end),
                  (this.frozen_amount_view = o.value.frozen_amount),
                  (this.website_url_view2 = o.value.website_url1),
                  jQuery("#" + t).click();
              }
              submit(t) {
                this.loader = !0;
                const o = new FormData();
                o.append("token_logo1", this.file),
                  o.append("owner_address", this.issuer);
                var a = this.token_data;
                Object.keys(a).forEach(function (r) {
                  o.append(r, a[r]);
                }),
                  this.conn
                    .filePostRequest("contract/saveTokenInfo", o, this.token)
                    .subscribe((r) => {
                      (this.loader = !1),
                        1 == r.success
                          ? jQuery("#contact-result").click()
                          : this.alert.error(r.message, "");
                    });
              }
              submit_trc10(t) {
                this.loader = !0;
                const o = new FormData();
                o.append("token_logo1", this.file),
                  o.append("Token_ratio", this.tokenvalue),
                  o.append("owner_address", this.issuer);
                var a = this.token_data_trc10;
                Object.keys(a).forEach(function (r) {
                  o.append(r, a[r]);
                }),
                  this.conn
                    .filePostRequest("contract/createToken", o, this.token)
                    .subscribe((r) => {
                      (this.loader = !1),
                        0 == r.success
                          ? ((this.error_message = r.message),
                            (this.error_type = "Error : "),
                            jQuery("#errorModal").modal("show"))
                          : jQuery("#contact-result").click();
                    });
              }
              TRC20token() {
                (this.TRC20 = !0),
                  (this.TRC10 = !1),
                  (this.TRC721 = !1),
                  (this.TRC1155 = !1),
                  (this.token_type = "TRC20");
              }
              TRC10token() {
                (this.TRC20 = !1),
                  (this.TRC10 = !0),
                  (this.TRC721 = !1),
                  (this.TRC1155 = !1),
                  (this.token_type = "TRC10");
              }
              TRC721token() {
                (this.TRC20 = !1),
                  (this.TRC10 = !1),
                  (this.TRC721 = !0),
                  (this.TRC1155 = !1),
                  (this.token_type = "TRC721");
              }
              TRC1155token() {
                (this.TRC20 = !1),
                  (this.TRC10 = !1),
                  (this.TRC721 = !1),
                  (this.TRC1155 = !0),
                  (this.token_type = "TRC1155");
              }
              getendsaletime(t) {
                this.endsaledata = new Date(new Date(t).getTime() + 864e5)
                  .toISOString()
                  .split("T")[0];
              }
              gettokenname(t) {
                this.tokename = t;
              }
              settokenval(t) {
                this.tokenprice1 = t;
                var a = (
                    Number(this.tokenprice3) / Number(this.tokenprice1)
                  ).toPrecision(5),
                  r = parseFloat(a);
                this.tokenvalue = r;
              }
              gettokenval(t) {
                this.tokenprice3 = t;
                var a = (
                    Number(this.tokenprice3) / Number(this.tokenprice1)
                  ).toPrecision(5),
                  r = parseFloat(a);
                this.tokenvalue = r;
              }
            }
            return (
              (n.ɵfac = function (t) {
                return new (t || n)(e.Y36(h), e.Y36(u.F0), e.Y36(A._W));
              }),
              (n.ɵcmp = e.Xpm({
                type: n,
                selectors: [["app-record-token"]],
                decls: 531,
                vars: 131,
                consts: [
                  [4, "ngIf"],
                  [1, "inner-banner", "p-0", "pb-0"],
                  [1, "container", "px-0"],
                  [1, "text-center"],
                  [1, "container"],
                  [1, "my-4", "h5", "lwf"],
                  [1, "pt-0"],
                  [
                    "id",
                    "myTab",
                    "role",
                    "tablist",
                    1,
                    "nav",
                    "nav-tabs",
                    "site-tabs",
                  ],
                  [1, "nav-item"],
                  [
                    "id",
                    "home-tab",
                    "data-toggle",
                    "tab",
                    "href",
                    "#home",
                    "role",
                    "tab",
                    "aria-controls",
                    "home",
                    "aria-selected",
                    "true",
                    1,
                    "nav-link",
                    "active",
                  ],
                  ["class", "nav-item", 3, "ngClass", 4, "ngIf"],
                  [
                    "id",
                    "contact-result",
                    "data-toggle",
                    "tab",
                    "href",
                    "#contract_result",
                    "role",
                    "tab",
                    "aria-controls",
                    "contract_result",
                    "aria-selected",
                    "false",
                    1,
                    "nav-link",
                    3,
                    "ngClass",
                  ],
                  ["id", "myTabContent", 1, "tab-content"],
                  [
                    "id",
                    "home",
                    "role",
                    "tabpanel",
                    "aria-labelledby",
                    "home-tab",
                    1,
                    "tab-pane",
                    "fade",
                    "show",
                    "active",
                  ],
                  [1, "card-body", "border"],
                  [1, "my-3"],
                  [1, "row", "d-flex"],
                  [1, "col-md-4", "pointer", 3, "click"],
                  [1, "align-items-center"],
                  [1, "card", "p-3", "my-3", 3, "ngClass"],
                  ["routerLink", "/verifycontract"],
                  [
                    "id",
                    "record",
                    "role",
                    "tabpanel",
                    "aria-labelledby",
                    "contract-record",
                    1,
                    "tab-pane",
                    "fade",
                  ],
                  [
                    "name",
                    "profile_form",
                    "autocomplete",
                    "off",
                    "novalidate",
                    "",
                  ],
                  ["f", "ngForm"],
                  [1, "row"],
                  [1, "col-md-12", "h6", "blue-t", "wf"],
                  [1, "border-bottom", "col-md-12", "mb-3"],
                  [1, "form-group", "col-md-6"],
                  [1, "text-danger"],
                  [
                    "type",
                    "text",
                    "placeholder",
                    "Address of the contract for creating the token",
                    "name",
                    "contract_address",
                    "ngModel",
                    "",
                    "required",
                    "",
                    1,
                    "form-control",
                    3,
                    "ngModelChange",
                  ],
                  ["contract_address", "ngModel"],
                  [
                    "type",
                    "hidden",
                    "name",
                    "token_type",
                    3,
                    "ngModel",
                    "ngModelChange",
                  ],
                  ["class", "errMsg", 4, "ngIf"],
                  [
                    "type",
                    "text",
                    "placeholder",
                    "2-30 characters for token name",
                    "name",
                    "token_name",
                    "ngModel",
                    "",
                    "required",
                    "",
                    "minlength",
                    "2",
                    "maxlength",
                    "30",
                    1,
                    "form-control",
                    3,
                    "ngModelChange",
                  ],
                  ["token_name", "ngModel"],
                  [
                    "type",
                    "text",
                    "placeholder",
                    "2-10 characters for token abbreviation",
                    "name",
                    "token_abbr",
                    "ngModel",
                    "",
                    "required",
                    "",
                    "minlength",
                    "2",
                    "maxlength",
                    "10",
                    1,
                    "form-control",
                  ],
                  ["token_abbr", "ngModel"],
                  [
                    "type",
                    "text",
                    "placeholder",
                    "Brief description of the purpose of the token, not exceeding 200 characters",
                    "name",
                    "token_intro",
                    "ngModel",
                    "",
                    "required",
                    "",
                    1,
                    "form-control",
                  ],
                  ["token_intro", "ngModel"],
                  [
                    "type",
                    "text",
                    "placeholder",
                    "TS18LdLSdUZRgjaNN3m2PaPzw8GQszXbsX",
                    "disabled",
                    "",
                    "name",
                    "issuer",
                    1,
                    "form-control",
                    3,
                    "ngModel",
                    "ngModelChange",
                  ],
                  ["alt", "", "id", "profilePic", 3, "src"],
                  [
                    "type",
                    "file",
                    "id",
                    "token_logo",
                    "name",
                    "token_logo",
                    "ngModel",
                    "",
                    "required",
                    "",
                    "aria-describedby",
                    "fileHelp",
                    "accept",
                    "image/*",
                    3,
                    "change",
                  ],
                  ["token_logo", "ngModel", "file", ""],
                  [
                    "type",
                    "text",
                    "placeholder",
                    "Project offical website",
                    "name",
                    "website_url",
                    "ngModel",
                    "",
                    "pattern",
                    "(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})",
                    "required",
                    "",
                    1,
                    "form-control",
                  ],
                  ["website_url", "ngModel"],
                  [
                    "type",
                    "text",
                    "placeholder",
                    "Contact email",
                    "name",
                    "email",
                    "ngModel",
                    "",
                    "pattern",
                    "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",
                    "required",
                    "",
                    1,
                    "form-control",
                  ],
                  ["email", "ngModel"],
                  [
                    "type",
                    "text",
                    "placeholder",
                    "Link for GitHub",
                    "name",
                    "github_url",
                    "ngModel",
                    "",
                    "pattern",
                    "(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})",
                    "required",
                    "",
                    1,
                    "form-control",
                  ],
                  ["github_url", "ngModel"],
                  [
                    "type",
                    "text",
                    "placeholder",
                    "Link for white paper",
                    "name",
                    "white_paper_url",
                    "ngModel",
                    "",
                    "pattern",
                    "(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})",
                    "required",
                    "",
                    1,
                    "form-control",
                  ],
                  ["white_paper_url", "ngModel"],
                  [
                    "placeholder",
                    "Link for Twitter",
                    "type",
                    "text",
                    "name",
                    "twitter_url",
                    "ngModel",
                    "",
                    "pattern",
                    "(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})",
                    "required",
                    "",
                    1,
                    "form-control",
                  ],
                  ["twitter_url", "ngModel"],
                  [
                    "placeholder",
                    "Link for Facebook",
                    "type",
                    "text",
                    "name",
                    "facebook_url",
                    "ngModel",
                    "",
                    "pattern",
                    "(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})",
                    "required",
                    "",
                    1,
                    "form-control",
                  ],
                  ["facebook_url", "ngModel"],
                  [
                    "placeholder",
                    "Link for Telegram",
                    "type",
                    "text",
                    "name",
                    "telegram_url",
                    "ngModel",
                    "",
                    "pattern",
                    "(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})",
                    "required",
                    "",
                    1,
                    "form-control",
                  ],
                  ["telegram_url", "ngModel"],
                  [
                    "placeholder",
                    "Link for Weibo",
                    "type",
                    "text",
                    "name",
                    "webibo_url",
                    "ngModel",
                    "",
                    "pattern",
                    "(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})",
                    "required",
                    "",
                    1,
                    "form-control",
                  ],
                  ["webibo_url", "ngModel"],
                  [1, "d-flex", "justify-content-end", "btn-whl"],
                  [
                    "type",
                    "button",
                    1,
                    "btn",
                    "dark-btn",
                    "btn-sm",
                    "mx-1",
                    3,
                    "click",
                  ],
                  [
                    "type",
                    "submit",
                    "class",
                    "btn blue-btn btn-sm mx-1",
                    3,
                    "disabled",
                    "click",
                    4,
                    "ngIf",
                  ],
                  [
                    "id",
                    "contract_info",
                    "role",
                    "tabpanel",
                    "aria-labelledby",
                    "contact-confirm",
                    1,
                    "tab-pane",
                    "fade",
                  ],
                  [
                    "type",
                    "text",
                    "disabled",
                    "",
                    1,
                    "form-control",
                    3,
                    "ngModel",
                    "ngModelChange",
                  ],
                  ["alt", "", 1, "idproof", 3, "src"],
                  [
                    "type",
                    "text",
                    "placeholder",
                    "TS18LdLSdUZRgjaNN3m2PaPzw8GQszXbsX",
                    "disabled",
                    "",
                    1,
                    "form-control",
                    3,
                    "ngModel",
                    "ngModelChange",
                  ],
                  [
                    "id",
                    "contract_result",
                    "role",
                    "tabpanel",
                    "aria-labelledby",
                    "contact-result",
                    1,
                    "tab-pane",
                    "fade",
                  ],
                  [1, "row", "justify-content-center", "align-items-center"],
                  [1, "col-md-5", "mx-auto", "text-center", "card", "p-4"],
                  [1, "h1", "text-success"],
                  [1, "far", "fa-check-circle"],
                  [
                    "id",
                    "record2",
                    "role",
                    "tabpanel",
                    "aria-labelledby",
                    "contract-record2",
                    1,
                    "tab-pane",
                    "fade",
                  ],
                  [
                    "name",
                    "profile_form2",
                    "autocomplete",
                    "off",
                    "novalidate",
                    "",
                  ],
                  ["tok10", "ngForm"],
                  [
                    "type",
                    "text",
                    "placeholder",
                    "2-30 characters for token name",
                    "name",
                    "token_name1",
                    "ngModel",
                    "",
                    "required",
                    "",
                    "minlength",
                    "2",
                    "maxlength",
                    "30",
                    1,
                    "form-control",
                    3,
                    "ngModelChange",
                  ],
                  ["token_name1", "ngModel"],
                  [
                    "type",
                    "text",
                    "placeholder",
                    "2-10 characters for token abbreviation",
                    "name",
                    "token_abbr1",
                    "ngModel",
                    "",
                    "required",
                    "",
                    "minlength",
                    "2",
                    "maxlength",
                    "10",
                    1,
                    "form-control",
                  ],
                  ["token_abbr1", "ngModel"],
                  [
                    "type",
                    "text",
                    "placeholder",
                    "Brief description of the purpose of the token, not exceeding 200 characters",
                    "name",
                    "token_intro1",
                    "ngModel",
                    "",
                    "required",
                    "",
                    1,
                    "form-control",
                  ],
                  ["token_intro1", "ngModel"],
                  [
                    "type",
                    "text",
                    "placeholder",
                    "Total token issuer(without precision)",
                    "name",
                    "token_supply",
                    "onkeypress",
                    "if ( isNaN(this.value + String.fromCharCode(event.keyCode) )) return false;",
                    "ngModel",
                    "",
                    "required",
                    "",
                    1,
                    "form-control",
                  ],
                  ["token_supply", "ngModel"],
                  [
                    "type",
                    "number",
                    "maxlength",
                    "1",
                    "min",
                    "0",
                    "max",
                    "6",
                    "placeholder",
                    "0-6 characters for Precision",
                    "name",
                    "decimal_place",
                    "oninput",
                    "javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);",
                    "oninput",
                    "if(this.value>6)this.value=6;",
                    "onkeypress",
                    "if ( isNaN(this.value + String.fromCharCode(event.keyCode) )) return false;",
                    "ngModel",
                    "",
                    "required",
                    "",
                    1,
                    "form-control",
                  ],
                  ["decimal_place", "ngModel"],
                  [
                    "type",
                    "file",
                    "id",
                    "token_logo1",
                    "name",
                    "token_logo1",
                    "ngModel",
                    "",
                    "required",
                    "",
                    "aria-describedby",
                    "fileHelp",
                    "accept",
                    "image/*",
                    3,
                    "change",
                  ],
                  ["token_logo1", "ngModel", "file", ""],
                  [1, "pt-4"],
                  [1, "form-group", "col-md-12"],
                  [1, "form-group", "col-md-2"],
                  [
                    "type",
                    "number",
                    "min",
                    "0",
                    "name",
                    "tokenprice",
                    "placeholder",
                    "0",
                    "onkeypress",
                    "if ( isNaN(this.value + String.fromCharCode(event.keyCode) )) return false;",
                    "value",
                    "1",
                    "ngModel",
                    "",
                    "required",
                    "",
                    1,
                    "form-control",
                    3,
                    "ngModelChange",
                  ],
                  ["tokenprice", "ngModel"],
                  [1, "p-1"],
                  [
                    "type",
                    "number",
                    "min",
                    "0",
                    "name",
                    "tokenprice2",
                    "placeholder",
                    "0",
                    "onkeypress",
                    "if ( isNaN(this.value + String.fromCharCode(event.keyCode) )) return false;",
                    "ngModel",
                    "",
                    "required",
                    "",
                    1,
                    "form-control",
                    3,
                    "ngModelChange",
                  ],
                  ["tokenprice2", "ngModel"],
                  [1, "col-6", "p-2"],
                  [1, "form-group", "col-md-6", "pt-3"],
                  [1, "row", "pt-3"],
                  [1, "col-4"],
                  [
                    "type",
                    "date",
                    "id",
                    "date_picker",
                    "name",
                    "sale_start",
                    "ngModel",
                    "",
                    "required",
                    "",
                    1,
                    "form-control",
                    3,
                    "value",
                    "min",
                    "ngModelChange",
                  ],
                  ["sale_start", "ngModel"],
                  [
                    "type",
                    "date",
                    "name",
                    "sale_end",
                    "ngModel",
                    "",
                    "required",
                    "",
                    1,
                    "form-control",
                    3,
                    "min",
                  ],
                  ["sale_end", "ngModel"],
                  [1, "col-3"],
                  [
                    "min",
                    "0",
                    "type",
                    "number",
                    "placeholder",
                    "0",
                    "name",
                    "frozen_amount",
                    "onkeypress",
                    "if ( isNaN(this.value + String.fromCharCode(event.keyCode) )) return false;",
                    "ngModel",
                    "",
                    "required",
                    "",
                    1,
                    "form-control",
                    "col",
                  ],
                  ["frozen_amount", "ngModel"],
                  [
                    "type",
                    "text",
                    "name",
                    "frozen_duration",
                    "ngModel",
                    "",
                    "required",
                    "",
                    1,
                    "form-control",
                    "col",
                  ],
                  ["frozen_duration", "ngModel"],
                  [
                    "type",
                    "text",
                    "placeholder",
                    "Project offical website",
                    "name",
                    "website_url1",
                    "ngModel",
                    "",
                    "pattern",
                    "(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})",
                    "required",
                    "",
                    1,
                    "form-control",
                  ],
                  ["website_url1", "ngModel"],
                  [
                    "id",
                    "contract_info2",
                    "role",
                    "tabpanel",
                    "aria-labelledby",
                    "contact-confirm2",
                    1,
                    "tab-pane",
                    "fade",
                  ],
                  [
                    "type",
                    "text",
                    "placeholder",
                    "",
                    "disabled",
                    "",
                    1,
                    "form-control",
                    3,
                    "ngModel",
                    "ngModelChange",
                  ],
                  [1, "col-6", "p-3"],
                  [
                    "type",
                    "checkbox",
                    "id",
                    "exampleCheck1",
                    "name",
                    "agree",
                    "value",
                    "on",
                    "ngModel",
                    "",
                    "required",
                    "",
                    1,
                    "form-check-input",
                  ],
                  ["c", "ngModel"],
                  ["for", "exampleCheck1", 1, "form-check-label"],
                  [
                    "id",
                    "errorModal",
                    "tabindex",
                    "-1",
                    "role",
                    "dialog",
                    "aria-labelledby",
                    "exampleModalLabel",
                    "aria-hidden",
                    "true",
                    1,
                    "modal",
                    "fade",
                  ],
                  ["role", "document", 1, "modal-dialog"],
                  [1, "modal-content"],
                  [1, "modal-header"],
                  ["id", "exampleModalLabel", 1, "modal-title", 3, "innerText"],
                  [
                    "type",
                    "button",
                    "data-dismiss",
                    "modal",
                    "aria-label",
                    "Close",
                    1,
                    "close",
                  ],
                  ["aria-hidden", "true"],
                  [1, "modal-body", 3, "innerText"],
                  [1, "nav-item", 3, "ngClass"],
                  [
                    "id",
                    "contract-record",
                    "data-toggle",
                    "tab",
                    "href",
                    "#record",
                    "role",
                    "tab",
                    "aria-controls",
                    "record",
                    "aria-selected",
                    "false",
                    1,
                    "nav-link",
                  ],
                  [
                    "id",
                    "contact-confirm",
                    "data-toggle",
                    "tab",
                    "href",
                    "#contract_info",
                    "role",
                    "tab",
                    "aria-controls",
                    "contract_info",
                    "aria-selected",
                    "false",
                    1,
                    "nav-link",
                  ],
                  [
                    "id",
                    "contract-record2",
                    "data-toggle",
                    "tab",
                    "href",
                    "#record2",
                    "role",
                    "tab",
                    "aria-controls",
                    "record2",
                    "aria-selected",
                    "false",
                    1,
                    "nav-link",
                  ],
                  [
                    "id",
                    "contact-confirm2",
                    "data-toggle",
                    "tab",
                    "href",
                    "#contract_info2",
                    "role",
                    "tab",
                    "aria-controls",
                    "contract_info2",
                    "aria-selected",
                    "false",
                    1,
                    "nav-link",
                  ],
                  ["class", "text-center", 4, "ngIf"],
                  [
                    "type",
                    "submit",
                    1,
                    "btn",
                    "mx-auto",
                    "col-md-4",
                    "my-2",
                    "site-btn",
                    "blue-btn",
                    "w-f",
                    "text-uppercase",
                    3,
                    "click",
                  ],
                  ["routerLink", "/login"],
                  [
                    "type",
                    "submit",
                    1,
                    "btn",
                    "mx-auto",
                    "col-md-4",
                    "my-2",
                    "site-btn",
                    "blue-btn",
                    "w-f",
                    "text-uppercase",
                  ],
                  [1, "errMsg"],
                  ["class", "error", 4, "ngIf"],
                  [1, "error"],
                  [
                    "type",
                    "submit",
                    1,
                    "btn",
                    "blue-btn",
                    "btn-sm",
                    "mx-1",
                    3,
                    "disabled",
                    "click",
                  ],
                ],
                template: function (t, o) {
                  if (1 & t) {
                    const a = e.EpF();
                    e.YNc(0, ki, 1, 0, "app-loader", 0),
                      e._UZ(1, "app-header"),
                      e.TgZ(2, "section", 1),
                      e.TgZ(3, "div", 2),
                      e.TgZ(4, "div", 3),
                      e._UZ(5, "app-searchbar"),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(6, "div", 4),
                      e.TgZ(7, "div", 5),
                      e._uU(8, " Record a token "),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(9, "section", 6),
                      e.TgZ(10, "div", 4),
                      e.TgZ(11, "ul", 7),
                      e.TgZ(12, "li", 8),
                      e.TgZ(13, "a", 9),
                      e._uU(14, "Select Type"),
                      e.qZA(),
                      e.qZA(),
                      e.YNc(15, Ci, 3, 3, "li", 10),
                      e.YNc(16, wi, 3, 3, "li", 10),
                      e.YNc(17, Mi, 3, 3, "li", 10),
                      e.YNc(18, Ii, 3, 3, "li", 10),
                      e.TgZ(19, "li", 8),
                      e.TgZ(20, "a", 11),
                      e._uU(21, "View Result"),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(22, "div", 12),
                      e.TgZ(23, "div", 13),
                      e.TgZ(24, "div", 14),
                      e.TgZ(25, "h6", 15),
                      e._uU(26, "Please select token type"),
                      e.qZA(),
                      e.TgZ(27, "div", 16),
                      e.TgZ(28, "div", 17),
                      e.NdJ("click", function () {
                        return o.TRC20token();
                      }),
                      e.TgZ(29, "div", 18),
                      e.TgZ(30, "div", 19),
                      e.TgZ(31, "h1"),
                      e._uU(32, "luma20"),
                      e.qZA(),
                      e.TgZ(33, "p"),
                      e._uU(
                        34,
                        "LUMA20 token is issued by smart contract, so make sure you have finished "
                      ),
                      e.TgZ(35, "a", 20),
                      e._uU(36, "Smart Contract Deployment "),
                      e.qZA(),
                      e._uU(
                        37,
                        ". Each account may record mutiple LUMA20 tokens. "
                      ),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.YNc(38, Ji, 3, 2, "div", 0),
                      e.YNc(39, Ri, 5, 0, "div", 0),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(40, "div", 21),
                      e.TgZ(41, "div", 14),
                      e.TgZ(42, "form", 22, 23),
                      e.TgZ(44, "div", 24),
                      e.TgZ(45, "div", 25),
                      e._uU(46, "Contract Information"),
                      e.qZA(),
                      e._UZ(47, "div", 26),
                      e.TgZ(48, "div", 27),
                      e.TgZ(49, "label"),
                      e.TgZ(50, "span", 28),
                      e._uU(51, "*"),
                      e.qZA(),
                      e._uU(52, "Contract address"),
                      e.qZA(),
                      e.TgZ(53, "input", 29, 30),
                      e.NdJ("ngModelChange", function (s) {
                        return o.fetchcontract_info(s);
                      }),
                      e.qZA(),
                      e.TgZ(55, "input", 31),
                      e.NdJ("ngModelChange", function (s) {
                        return (o.token_type = s);
                      }),
                      e.qZA(),
                      e.YNc(56, Si, 2, 1, "div", 32),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(57, "div", 24),
                      e.TgZ(58, "div", 25),
                      e._uU(59, "Basic Information"),
                      e.qZA(),
                      e._UZ(60, "div", 26),
                      e.TgZ(61, "div", 27),
                      e.TgZ(62, "label"),
                      e.TgZ(63, "span", 28),
                      e._uU(64, "*"),
                      e.qZA(),
                      e._uU(65, "Token Name"),
                      e.qZA(),
                      e.TgZ(66, "input", 33, 34),
                      e.NdJ("ngModelChange", function (s) {
                        return o.check_token(s);
                      }),
                      e.qZA(),
                      e.YNc(68, Qi, 3, 2, "div", 32),
                      e.qZA(),
                      e.TgZ(69, "div", 27),
                      e.TgZ(70, "label"),
                      e.TgZ(71, "span", 28),
                      e._uU(72, "*"),
                      e.qZA(),
                      e._uU(73, "Token Abbreviation"),
                      e.qZA(),
                      e._UZ(74, "input", 35, 36),
                      e.YNc(76, Di, 3, 2, "div", 32),
                      e.qZA(),
                      e.TgZ(77, "div", 27),
                      e.TgZ(78, "label"),
                      e.TgZ(79, "span", 28),
                      e._uU(80, "*"),
                      e.qZA(),
                      e._uU(81, "Token Introduction"),
                      e.qZA(),
                      e._UZ(82, "input", 37, 38),
                      e.YNc(84, Bi, 2, 1, "div", 32),
                      e.qZA(),
                      e.TgZ(85, "div", 27),
                      e.TgZ(86, "label"),
                      e.TgZ(87, "span", 28),
                      e._uU(88, "*"),
                      e.qZA(),
                      e._uU(89, "Issuer"),
                      e.qZA(),
                      e.TgZ(90, "input", 39),
                      e.NdJ("ngModelChange", function (s) {
                        return (o.issuer = s);
                      }),
                      e.qZA(),
                      e.YNc(91, Vi, 2, 1, "div", 32),
                      e.qZA(),
                      e.TgZ(92, "div", 27),
                      e.TgZ(93, "label"),
                      e._uU(94, "Token Logo "),
                      e.TgZ(95, "small"),
                      e._uU(96, "(Support format:png,jpg)"),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(97, "div"),
                      e._UZ(98, "img", 40),
                      e.qZA(),
                      e.TgZ(99, "input", 41, 42),
                      e.NdJ("change", function (s) {
                        e.CHM(a);
                        const c = e.MAs(101);
                        return o.showMyImage(c.files, s.target, "token_logo");
                      }),
                      e.qZA(),
                      e.YNc(102, zi, 2, 1, "div", 32),
                      e.YNc(103, Xi, 4, 2, "div", 32),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(104, "div", 24),
                      e.TgZ(105, "div", 25),
                      e._uU(106, "Social Media Information"),
                      e.qZA(),
                      e._UZ(107, "div", 26),
                      e.TgZ(108, "div", 27),
                      e.TgZ(109, "label"),
                      e.TgZ(110, "span", 28),
                      e._uU(111, "*"),
                      e.qZA(),
                      e._uU(112, "Project Official Website"),
                      e.qZA(),
                      e._UZ(113, "input", 43, 44),
                      e.YNc(115, ta, 3, 2, "div", 32),
                      e.qZA(),
                      e.TgZ(116, "div", 27),
                      e.TgZ(117, "label"),
                      e.TgZ(118, "span", 28),
                      e._uU(119, "*"),
                      e.qZA(),
                      e._uU(120, "Email"),
                      e.qZA(),
                      e._UZ(121, "input", 45, 46),
                      e.YNc(123, ia, 3, 2, "div", 32),
                      e.qZA(),
                      e.TgZ(124, "div", 27),
                      e.TgZ(125, "label"),
                      e.TgZ(126, "span", 28),
                      e._uU(127, "*"),
                      e.qZA(),
                      e._uU(128, "Link for GitHub"),
                      e.qZA(),
                      e._UZ(129, "input", 47, 48),
                      e.YNc(131, sa, 3, 2, "div", 32),
                      e.qZA(),
                      e.TgZ(132, "div", 27),
                      e.TgZ(133, "label"),
                      e.TgZ(134, "span", 28),
                      e._uU(135, "*"),
                      e.qZA(),
                      e._uU(136, "link for white paper"),
                      e.qZA(),
                      e._UZ(137, "input", 49, 50),
                      e.YNc(139, da, 3, 2, "div", 32),
                      e.qZA(),
                      e.TgZ(140, "div", 25),
                      e._uU(141, "Social Media Links"),
                      e.qZA(),
                      e.TgZ(142, "div", 27),
                      e.TgZ(143, "label"),
                      e._uU(144, "Twitter"),
                      e.qZA(),
                      e._UZ(145, "input", 51, 52),
                      e.YNc(147, ga, 3, 2, "div", 32),
                      e.qZA(),
                      e.TgZ(148, "div", 27),
                      e.TgZ(149, "label"),
                      e._uU(150, "Facebook"),
                      e.qZA(),
                      e._UZ(151, "input", 53, 54),
                      e.YNc(153, ha, 3, 2, "div", 32),
                      e.qZA(),
                      e.TgZ(154, "div", 27),
                      e.TgZ(155, "label"),
                      e._uU(156, "Telegram"),
                      e.qZA(),
                      e._UZ(157, "input", 55, 56),
                      e.YNc(159, fa, 3, 2, "div", 32),
                      e.qZA(),
                      e.TgZ(160, "div", 27),
                      e.TgZ(161, "label"),
                      e._uU(162, "Weibo"),
                      e.qZA(),
                      e._UZ(163, "input", 57, 58),
                      e.YNc(165, qa, 3, 2, "div", 32),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(166, "div", 59),
                      e.TgZ(167, "button", 60),
                      e.NdJ("click", function () {
                        return o.previous_tab("home-tab");
                      }),
                      e._uU(168, "Previous"),
                      e.qZA(),
                      e.YNc(169, ba, 2, 1, "button", 61),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(170, "div", 62),
                      e.TgZ(171, "div", 14),
                      e.TgZ(172, "div", 24),
                      e.TgZ(173, "div", 25),
                      e._uU(174, "Contract Information"),
                      e.qZA(),
                      e._UZ(175, "div", 26),
                      e.TgZ(176, "div", 27),
                      e.TgZ(177, "label"),
                      e.TgZ(178, "span", 28),
                      e._uU(179, "*"),
                      e.qZA(),
                      e._uU(180, "Contract address"),
                      e.qZA(),
                      e.TgZ(181, "input", 63),
                      e.NdJ("ngModelChange", function (s) {
                        return (o.contract_address_view = s);
                      }),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(182, "div", 27),
                      e.TgZ(183, "label"),
                      e._uU(184, "Contract Creation date"),
                      e.qZA(),
                      e.TgZ(185, "input", 63),
                      e.NdJ("ngModelChange", function (s) {
                        return (o.creation_date = s);
                      }),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(186, "div", 24),
                      e.TgZ(187, "div", 25),
                      e._uU(188, "Basic Information"),
                      e.qZA(),
                      e._UZ(189, "div", 26),
                      e.TgZ(190, "div", 27),
                      e.TgZ(191, "label"),
                      e.TgZ(192, "span", 28),
                      e._uU(193, "*"),
                      e.qZA(),
                      e._uU(194, "Token Name"),
                      e.qZA(),
                      e.TgZ(195, "input", 63),
                      e.NdJ("ngModelChange", function (s) {
                        return (o.token_name_view = s);
                      }),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(196, "div", 27),
                      e.TgZ(197, "label"),
                      e.TgZ(198, "span", 28),
                      e._uU(199, "*"),
                      e.qZA(),
                      e._uU(200, "Token Abbreviation"),
                      e.qZA(),
                      e.TgZ(201, "input", 63),
                      e.NdJ("ngModelChange", function (s) {
                        return (o.token_abbr_view = s);
                      }),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(202, "div", 27),
                      e.TgZ(203, "label"),
                      e.TgZ(204, "span", 28),
                      e._uU(205, "*"),
                      e.qZA(),
                      e._uU(206, "Token Introduction"),
                      e.qZA(),
                      e.TgZ(207, "input", 63),
                      e.NdJ("ngModelChange", function (s) {
                        return (o.token_intro_view = s);
                      }),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(208, "div", 27),
                      e.TgZ(209, "label"),
                      e._uU(210, "Token Logo "),
                      e.TgZ(211, "small"),
                      e._uU(212, "(Support format:png,jpg)"),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(213, "div"),
                      e._UZ(214, "img", 64),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(215, "div", 27),
                      e.TgZ(216, "label"),
                      e.TgZ(217, "span", 28),
                      e._uU(218, "*"),
                      e.qZA(),
                      e._uU(219, "Issuer"),
                      e.qZA(),
                      e.TgZ(220, "input", 65),
                      e.NdJ("ngModelChange", function (s) {
                        return (o.issuer = s);
                      }),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(221, "div", 24),
                      e.TgZ(222, "div", 25),
                      e._uU(223, "Social Media Information"),
                      e.qZA(),
                      e._UZ(224, "div", 26),
                      e.TgZ(225, "div", 27),
                      e.TgZ(226, "label"),
                      e.TgZ(227, "span", 28),
                      e._uU(228, "*"),
                      e.qZA(),
                      e._uU(229, "Project Official Website"),
                      e.qZA(),
                      e.TgZ(230, "input", 63),
                      e.NdJ("ngModelChange", function (s) {
                        return (o.website_url_view = s);
                      }),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(231, "div", 27),
                      e.TgZ(232, "label"),
                      e.TgZ(233, "span", 28),
                      e._uU(234, "*"),
                      e.qZA(),
                      e._uU(235, "Email"),
                      e.qZA(),
                      e.TgZ(236, "input", 63),
                      e.NdJ("ngModelChange", function (s) {
                        return (o.email_view = s);
                      }),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(237, "div", 27),
                      e.TgZ(238, "label"),
                      e.TgZ(239, "span", 28),
                      e._uU(240, "*"),
                      e.qZA(),
                      e._uU(241, "Link for GitHub"),
                      e.qZA(),
                      e.TgZ(242, "input", 63),
                      e.NdJ("ngModelChange", function (s) {
                        return (o.github_url_view = s);
                      }),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(243, "div", 27),
                      e.TgZ(244, "label"),
                      e.TgZ(245, "span", 28),
                      e._uU(246, "*"),
                      e.qZA(),
                      e._uU(247, "link for white paper"),
                      e.qZA(),
                      e.TgZ(248, "input", 63),
                      e.NdJ("ngModelChange", function (s) {
                        return (o.white_paper_url_view = s);
                      }),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(249, "div", 25),
                      e._uU(250, "Social Media Links"),
                      e.qZA(),
                      e.TgZ(251, "div", 27),
                      e.TgZ(252, "label"),
                      e._uU(253, "Twitter"),
                      e.qZA(),
                      e.TgZ(254, "input", 63),
                      e.NdJ("ngModelChange", function (s) {
                        return (o.twitter_url_view = s);
                      }),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(255, "div", 27),
                      e.TgZ(256, "label"),
                      e._uU(257, "Facebook"),
                      e.qZA(),
                      e.TgZ(258, "input", 63),
                      e.NdJ("ngModelChange", function (s) {
                        return (o.facebook_url_view = s);
                      }),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(259, "div", 27),
                      e.TgZ(260, "label"),
                      e._uU(261, "Telegram"),
                      e.qZA(),
                      e.TgZ(262, "input", 63),
                      e.NdJ("ngModelChange", function (s) {
                        return (o.telegram_url_view = s);
                      }),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(263, "div", 27),
                      e.TgZ(264, "label"),
                      e._uU(265, "Weibo"),
                      e.qZA(),
                      e.TgZ(266, "input", 63),
                      e.NdJ("ngModelChange", function (s) {
                        return (o.webibo_url_view = s);
                      }),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(267, "div", 59),
                      e.TgZ(268, "button", 60),
                      e.NdJ("click", function () {
                        return o.previous_tab("contract-record");
                      }),
                      e._uU(269, "Previous"),
                      e.qZA(),
                      e.YNc(270, ya, 2, 1, "button", 61),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(271, "div", 66),
                      e.TgZ(272, "div", 14),
                      e.TgZ(273, "div", 67),
                      e.TgZ(274, "div", 68),
                      e.TgZ(275, "div", 69),
                      e._UZ(276, "i", 70),
                      e.qZA(),
                      e.TgZ(277, "h3"),
                      e._uU(278, "Token Record Successfully"),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(279, "div", 71),
                      e.TgZ(280, "div", 14),
                      e.TgZ(281, "form", 72, 73),
                      e.TgZ(283, "div", 24),
                      e.TgZ(284, "div", 25),
                      e._uU(285, "Basic Information"),
                      e.qZA(),
                      e._UZ(286, "div", 26),
                      e.TgZ(287, "div", 27),
                      e.TgZ(288, "label"),
                      e.TgZ(289, "span", 28),
                      e._uU(290, "*"),
                      e.qZA(),
                      e._uU(291, "Name of the token"),
                      e.qZA(),
                      e.TgZ(292, "input", 74, 75),
                      e.NdJ("ngModelChange", function (s) {
                        return o.gettokenname(s);
                      })("ngModelChange", function (s) {
                        return o.check_token(s);
                      }),
                      e.qZA(),
                      e.TgZ(294, "input", 31),
                      e.NdJ("ngModelChange", function (s) {
                        return (o.token_type = s);
                      }),
                      e.qZA(),
                      e.YNc(295, ka, 3, 2, "div", 32),
                      e.qZA(),
                      e.TgZ(296, "div", 27),
                      e.TgZ(297, "label"),
                      e.TgZ(298, "span", 28),
                      e._uU(299, "*"),
                      e.qZA(),
                      e._uU(300, "Token Abbreviation"),
                      e.qZA(),
                      e._UZ(301, "input", 76, 77),
                      e.YNc(303, Ma, 3, 2, "div", 32),
                      e.qZA(),
                      e.TgZ(304, "div", 27),
                      e.TgZ(305, "label"),
                      e.TgZ(306, "span", 28),
                      e._uU(307, "*"),
                      e.qZA(),
                      e._uU(308, "Brief Introduction"),
                      e.qZA(),
                      e._UZ(309, "input", 78, 79),
                      e.YNc(311, Na, 2, 1, "div", 32),
                      e.qZA(),
                      e.TgZ(312, "div", 27),
                      e.TgZ(313, "label"),
                      e.TgZ(314, "span", 28),
                      e._uU(315, "*"),
                      e.qZA(),
                      e._uU(316, "Total supply"),
                      e.qZA(),
                      e._UZ(317, "input", 80, 81),
                      e.YNc(319, Ja, 2, 1, "div", 32),
                      e.qZA(),
                      e.TgZ(320, "div", 27),
                      e.TgZ(321, "label"),
                      e.TgZ(322, "span", 28),
                      e._uU(323, "*"),
                      e.qZA(),
                      e._uU(324, "Precision"),
                      e.qZA(),
                      e._UZ(325, "input", 82, 83),
                      e.YNc(327, Ea, 2, 1, "div", 32),
                      e.qZA(),
                      e.TgZ(328, "div", 27),
                      e.TgZ(329, "label"),
                      e.TgZ(330, "span", 28),
                      e._uU(331, "*"),
                      e.qZA(),
                      e._uU(332, "Issuer"),
                      e.qZA(),
                      e.TgZ(333, "input", 39),
                      e.NdJ("ngModelChange", function (s) {
                        return (o.issuer1 = s);
                      }),
                      e.qZA(),
                      e.YNc(334, La, 2, 1, "div", 32),
                      e.qZA(),
                      e.TgZ(335, "div", 27),
                      e.TgZ(336, "label"),
                      e._uU(337, "Token Logo "),
                      e.TgZ(338, "small"),
                      e._uU(339, "(Support format:png,jpg)"),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(340, "div"),
                      e._UZ(341, "img", 40),
                      e.qZA(),
                      e.TgZ(342, "input", 84, 85),
                      e.NdJ("change", function (s) {
                        e.CHM(a);
                        const c = e.MAs(101);
                        return o.showMyImage(c.files, s.target, "token_logo1");
                      }),
                      e.qZA(),
                      e.TgZ(345, "p", 86),
                      e._uU(
                        346,
                        " Only supports png, jpg, jpeg three formats the size does not exceed 200k. the pixel is 100*100, LUMA20 token please fill in the contract address before uploading the logo "
                      ),
                      e.qZA(),
                      e.YNc(347, Qa, 2, 1, "div", 32),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(348, "div", 24),
                      e.TgZ(349, "div", 25),
                      e._uU(350, "Price Information"),
                      e.qZA(),
                      e._UZ(351, "div", 26),
                      e.TgZ(352, "div", 87),
                      e.TgZ(353, "label"),
                      e.TgZ(354, "span", 28),
                      e._uU(355, "*"),
                      e.qZA(),
                      e._uU(356, "Token Price:"),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(357, "div", 88),
                      e.TgZ(358, "input", 89, 90),
                      e.NdJ("ngModelChange", function (s) {
                        return o.settokenval(s);
                      }),
                      e.qZA(),
                      e.YNc(360, Fa, 2, 1, "div", 32),
                      e.qZA(),
                      e.TgZ(361, "p", 91),
                      e._uU(362),
                      e.qZA(),
                      e.TgZ(363, "div", 88),
                      e.TgZ(364, "input", 92, 93),
                      e.NdJ("ngModelChange", function (s) {
                        return o.gettokenval(s);
                      }),
                      e.qZA(),
                      e.YNc(366, Ha, 2, 1, "div", 32),
                      e.qZA(),
                      e.TgZ(367, "p", 94),
                      e._uU(368, "luma"),
                      e.TgZ(369, "span"),
                      e._uU(370),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(371, "div", 95),
                      e.TgZ(372, "label"),
                      e.TgZ(373, "span", 28),
                      e._uU(374, "*"),
                      e.qZA(),
                      e._uU(375, "Issuing Time:"),
                      e.qZA(),
                      e.TgZ(376, "div"),
                      e._uU(377),
                      e.TgZ(378, "div"),
                      e.TgZ(379, "div", 96),
                      e.TgZ(380, "span", 97),
                      e.TgZ(381, "label"),
                      e._uU(382, "Start time:"),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(383, "span", 97),
                      e.TgZ(384, "label"),
                      e._uU(385, "End time:"),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(386, "div", 24),
                      e.TgZ(387, "span", 97),
                      e.TgZ(388, "input", 98, 99),
                      e.NdJ("ngModelChange", function (s) {
                        return o.getendsaletime(s);
                      }),
                      e.qZA(),
                      e.YNc(390, ja, 2, 1, "div", 32),
                      e.qZA(),
                      e.TgZ(391, "span", 97),
                      e._UZ(392, "input", 100, 101),
                      e.YNc(394, Ga, 2, 1, "div", 32),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(395, "div", 95),
                      e.TgZ(396, "label"),
                      e.TgZ(397, "span", 28),
                      e._uU(398, "*"),
                      e.qZA(),
                      e._uU(399, "Frozen Supply:"),
                      e.qZA(),
                      e.TgZ(400, "div"),
                      e._uU(
                        401,
                        " A part of the supply can be frozen. The amount of supply can be specified and must be frozen for a minimum of 1 day. The frozen supply can manually be unfrozed after start date and frozen days has been reached. Freezing supply is not required. "
                      ),
                      e.qZA(),
                      e.TgZ(402, "div", 96),
                      e.TgZ(403, "span", 102),
                      e._uU(404, "Amount:"),
                      e.qZA(),
                      e.TgZ(405, "span", 102),
                      e._uU(406, "Days to freeze:"),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(407, "div", 24),
                      e.TgZ(408, "span", 102),
                      e._UZ(409, "input", 103, 104),
                      e.YNc(411, Wa, 2, 1, "div", 32),
                      e.qZA(),
                      e.TgZ(412, "span", 102),
                      e._UZ(413, "input", 105, 106),
                      e.YNc(415, Xa, 2, 1, "div", 32),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(416, "div", 24),
                      e.TgZ(417, "div", 25),
                      e._uU(418, "Social Media Information"),
                      e.qZA(),
                      e._UZ(419, "div", 26),
                      e.TgZ(420, "div", 27),
                      e.TgZ(421, "label"),
                      e.TgZ(422, "span", 28),
                      e._uU(423, "*"),
                      e.qZA(),
                      e._uU(424, "Project Official Website"),
                      e.qZA(),
                      e._UZ(425, "input", 107, 108),
                      e.YNc(427, tr, 3, 2, "div", 32),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(428, "div", 59),
                      e.TgZ(429, "button", 60),
                      e.NdJ("click", function () {
                        return o.previous_tab("home-tab");
                      }),
                      e._uU(430, "Previous"),
                      e.qZA(),
                      e.YNc(431, nr, 2, 1, "button", 61),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(432, "div", 109),
                      e.TgZ(433, "div", 14),
                      e.TgZ(434, "div", 24),
                      e.TgZ(435, "div", 25),
                      e._uU(436, "Basic Information"),
                      e.qZA(),
                      e._UZ(437, "div", 26),
                      e.TgZ(438, "div", 27),
                      e.TgZ(439, "label"),
                      e.TgZ(440, "span", 28),
                      e._uU(441, "*"),
                      e.qZA(),
                      e._uU(442, "Name of the token"),
                      e.qZA(),
                      e.TgZ(443, "input", 63),
                      e.NdJ("ngModelChange", function (s) {
                        return (o.token_name_view2 = s);
                      }),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(444, "div", 27),
                      e.TgZ(445, "label"),
                      e.TgZ(446, "span", 28),
                      e._uU(447, "*"),
                      e.qZA(),
                      e._uU(448, "Token Abbreviation"),
                      e.qZA(),
                      e.TgZ(449, "input", 63),
                      e.NdJ("ngModelChange", function (s) {
                        return (o.token_abbr_view2 = s);
                      }),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(450, "div", 27),
                      e.TgZ(451, "label"),
                      e.TgZ(452, "span", 28),
                      e._uU(453, "*"),
                      e.qZA(),
                      e._uU(454, "Token Introduction"),
                      e.qZA(),
                      e.TgZ(455, "input", 63),
                      e.NdJ("ngModelChange", function (s) {
                        return (o.token_intro_view2 = s);
                      }),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(456, "div", 27),
                      e.TgZ(457, "label"),
                      e.TgZ(458, "span", 28),
                      e._uU(459, "*"),
                      e.qZA(),
                      e._uU(460, "Total Supply"),
                      e.qZA(),
                      e.TgZ(461, "input", 110),
                      e.NdJ("ngModelChange", function (s) {
                        return (o.token_supply_view2 = s);
                      }),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(462, "div", 27),
                      e.TgZ(463, "label"),
                      e.TgZ(464, "span", 28),
                      e._uU(465, "*"),
                      e.qZA(),
                      e._uU(466, "Precision"),
                      e.qZA(),
                      e.TgZ(467, "input", 110),
                      e.NdJ("ngModelChange", function (s) {
                        return (o.decimal_place_view2 = s);
                      }),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(468, "div", 27),
                      e.TgZ(469, "label"),
                      e.TgZ(470, "span", 28),
                      e._uU(471, "*"),
                      e.qZA(),
                      e._uU(472, "Issuer"),
                      e.qZA(),
                      e.TgZ(473, "input", 65),
                      e.NdJ("ngModelChange", function (s) {
                        return (o.issuer1 = s);
                      }),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(474, "div", 24),
                      e.TgZ(475, "div", 25),
                      e._uU(476, "Price Information"),
                      e.qZA(),
                      e._UZ(477, "div", 26),
                      e.TgZ(478, "div", 27),
                      e.TgZ(479, "label"),
                      e.TgZ(480, "span", 28),
                      e._uU(481, "*"),
                      e.qZA(),
                      e._uU(482, "Token Price"),
                      e.qZA(),
                      e.TgZ(483, "input", 63),
                      e.NdJ("ngModelChange", function (s) {
                        return (o.tokenprice2_view = s);
                      }),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(484, "div", 27),
                      e.TgZ(485, "label"),
                      e.TgZ(486, "span", 28),
                      e._uU(487, "*"),
                      e.qZA(),
                      e._uU(488, "Issuing Time Sale Start"),
                      e.qZA(),
                      e.TgZ(489, "input", 63),
                      e.NdJ("ngModelChange", function (s) {
                        return (o.sale_start_view = s);
                      }),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(490, "div", 27),
                      e.TgZ(491, "label"),
                      e.TgZ(492, "span", 28),
                      e._uU(493, "*"),
                      e.qZA(),
                      e._uU(494, "Issuing Time Sale End"),
                      e.qZA(),
                      e.TgZ(495, "input", 63),
                      e.NdJ("ngModelChange", function (s) {
                        return (o.sale_end_view = s);
                      }),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(496, "div", 27),
                      e.TgZ(497, "label"),
                      e.TgZ(498, "span", 28),
                      e._uU(499, "*"),
                      e.qZA(),
                      e._uU(500, "Frozen Supply"),
                      e.qZA(),
                      e.TgZ(501, "input", 63),
                      e.NdJ("ngModelChange", function (s) {
                        return (o.frozen_amount_view = s);
                      }),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(502, "div", 24),
                      e.TgZ(503, "div", 25),
                      e._uU(504, "Social Media Information"),
                      e.qZA(),
                      e._UZ(505, "div", 26),
                      e.TgZ(506, "div", 27),
                      e.TgZ(507, "label"),
                      e.TgZ(508, "span", 28),
                      e._uU(509, "*"),
                      e.qZA(),
                      e._uU(510, "Project Official Website"),
                      e.qZA(),
                      e.TgZ(511, "input", 63),
                      e.NdJ("ngModelChange", function (s) {
                        return (o.website_url_view2 = s);
                      }),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(512, "div", 111),
                      e._UZ(513, "input", 112, 113),
                      e.TgZ(515, "label", 114),
                      e._uU(
                        516,
                        "I have learned that issuing a token requires a one time consumption of 1024LUMA "
                      ),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(517, "div", 59),
                      e.TgZ(518, "button", 60),
                      e.NdJ("click", function () {
                        return o.previous_tab("contract-record2");
                      }),
                      e._uU(519, "Previous"),
                      e.qZA(),
                      e.YNc(520, or, 2, 1, "button", 61),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(521, "div", 115),
                      e.TgZ(522, "div", 116),
                      e.TgZ(523, "div", 117),
                      e.TgZ(524, "div", 118),
                      e._UZ(525, "h5", 119),
                      e.TgZ(526, "button", 120),
                      e.TgZ(527, "span", 121),
                      e._uU(528, "\xd7"),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e._UZ(529, "div", 122),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e._UZ(530, "app-footer");
                  }
                  if (2 & t) {
                    const a = e.MAs(43),
                      r = e.MAs(54),
                      s = e.MAs(67),
                      c = e.MAs(75),
                      d = e.MAs(83),
                      Z = e.MAs(100),
                      y = e.MAs(114),
                      U = e.MAs(122),
                      k = e.MAs(130),
                      v = e.MAs(138),
                      N = e.MAs(146),
                      C = e.MAs(152),
                      w = e.MAs(158),
                      M = e.MAs(164),
                      q = e.MAs(282),
                      O = e.MAs(293),
                      b = e.MAs(302),
                      J = e.MAs(310),
                      I = e.MAs(318),
                      P = e.MAs(326),
                      F = e.MAs(343),
                      D = e.MAs(359),
                      H = e.MAs(365),
                      B = e.MAs(389),
                      te = e.MAs(393),
                      j = e.MAs(410),
                      V = e.MAs(414),
                      G = e.MAs(426),
                      fl = e.MAs(514);
                    e.Q6J("ngIf", o.loader),
                      e.xp6(15),
                      e.Q6J("ngIf", o.TRC20 || o.TRC721 || o.TRC1155),
                      e.xp6(1),
                      e.Q6J("ngIf", o.TRC20 || o.TRC721 || o.TRC1155),
                      e.xp6(1),
                      e.Q6J("ngIf", o.TRC10),
                      e.xp6(1),
                      e.Q6J("ngIf", o.TRC10),
                      e.xp6(2),
                      e.Q6J(
                        "ngClass",
                        e.VKq(127, S, o.view_tab_status ? "" : "disable-tab")
                      ),
                      e.xp6(10),
                      e.Q6J(
                        "ngClass",
                        e.VKq(129, S, o.TRC20 ? "select-card" : "")
                      ),
                      e.xp6(8),
                      e.Q6J("ngIf", !o.loginStat),
                      e.xp6(1),
                      e.Q6J("ngIf", o.loginStat),
                      e.xp6(14),
                      e.ekj("is-invalid", r.invalid && r.touched),
                      e.xp6(2),
                      e.Q6J("ngModel", o.token_type),
                      e.xp6(1),
                      e.Q6J(
                        "ngIf",
                        r.errors && (r.valid || r.touched || a.submitted)
                      ),
                      e.xp6(10),
                      e.ekj("is-invalid", s.invalid && s.touched),
                      e.xp6(2),
                      e.Q6J(
                        "ngIf",
                        s.errors && (s.valid || s.touched || a.submitted)
                      ),
                      e.xp6(6),
                      e.ekj("is-invalid", c.invalid && c.touched),
                      e.xp6(2),
                      e.Q6J(
                        "ngIf",
                        c.errors && (c.valid || c.touched || a.submitted)
                      ),
                      e.xp6(6),
                      e.ekj("is-invalid", d.invalid && d.touched),
                      e.xp6(2),
                      e.Q6J(
                        "ngIf",
                        d.errors && (d.valid || d.touched || a.submitted)
                      ),
                      e.xp6(6),
                      e.Q6J("ngModel", o.issuer),
                      e.xp6(1),
                      e.Q6J(
                        "ngIf",
                        o.issuer.errors &&
                          (o.issuer.valid || o.issuer.touched || a.submitted)
                      ),
                      e.xp6(7),
                      e.Q6J("src", o.proUrl || "", e.LSH),
                      e.xp6(1),
                      e.ekj("is-invalid", Z.invalid && Z.touched),
                      e.xp6(3),
                      e.Q6J(
                        "ngIf",
                        Z.errors && (Z.valid || Z.touched || a.submitted)
                      ),
                      e.xp6(1),
                      e.Q6J(
                        "ngIf",
                        (o.proofMBErr || !o.proofTypeErr) && Z.valid
                      ),
                      e.xp6(10),
                      e.ekj("is-invalid", y.invalid && y.touched),
                      e.xp6(2),
                      e.Q6J(
                        "ngIf",
                        y.errors && (y.valid || y.touched || a.submitted)
                      ),
                      e.xp6(6),
                      e.ekj("is-invalid", U.invalid && U.touched),
                      e.xp6(2),
                      e.Q6J(
                        "ngIf",
                        U.errors && (U.valid || U.touched || a.submitted)
                      ),
                      e.xp6(6),
                      e.ekj("is-invalid", k.invalid && k.touched),
                      e.xp6(2),
                      e.Q6J(
                        "ngIf",
                        k.errors && (k.valid || k.touched || a.submitted)
                      ),
                      e.xp6(6),
                      e.ekj("is-invalid", v.invalid && v.touched),
                      e.xp6(2),
                      e.Q6J(
                        "ngIf",
                        v.errors && (v.valid || v.touched || a.submitted)
                      ),
                      e.xp6(8),
                      e.Q6J(
                        "ngIf",
                        N.errors && (N.valid || N.touched || a.submitted)
                      ),
                      e.xp6(6),
                      e.Q6J(
                        "ngIf",
                        C.errors && (C.valid || C.touched || a.submitted)
                      ),
                      e.xp6(6),
                      e.Q6J(
                        "ngIf",
                        w.errors && (w.valid || w.touched || a.submitted)
                      ),
                      e.xp6(6),
                      e.Q6J(
                        "ngIf",
                        M.errors && (M.valid || M.touched || a.submitted)
                      ),
                      e.xp6(4),
                      e.Q6J("ngIf", !o.signLoader),
                      e.xp6(12),
                      e.Q6J("ngModel", o.contract_address_view),
                      e.xp6(4),
                      e.Q6J("ngModel", o.creation_date),
                      e.xp6(10),
                      e.Q6J("ngModel", o.token_name_view),
                      e.xp6(6),
                      e.Q6J("ngModel", o.token_abbr_view),
                      e.xp6(6),
                      e.Q6J("ngModel", o.token_intro_view),
                      e.xp6(7),
                      e.Q6J("src", o.idFrtImg || "", e.LSH),
                      e.xp6(6),
                      e.Q6J("ngModel", o.issuer),
                      e.xp6(10),
                      e.Q6J("ngModel", o.website_url_view),
                      e.xp6(6),
                      e.Q6J("ngModel", o.email_view),
                      e.xp6(6),
                      e.Q6J("ngModel", o.github_url_view),
                      e.xp6(6),
                      e.Q6J("ngModel", o.white_paper_url_view),
                      e.xp6(6),
                      e.Q6J("ngModel", o.twitter_url_view),
                      e.xp6(4),
                      e.Q6J("ngModel", o.facebook_url_view),
                      e.xp6(4),
                      e.Q6J("ngModel", o.telegram_url_view),
                      e.xp6(4),
                      e.Q6J("ngModel", o.webibo_url_view),
                      e.xp6(4),
                      e.Q6J("ngIf", !o.signLoader),
                      e.xp6(22),
                      e.ekj("is-invalid", O.invalid && O.touched),
                      e.xp6(2),
                      e.Q6J("ngModel", o.token_type),
                      e.xp6(1),
                      e.Q6J(
                        "ngIf",
                        O.errors && (O.valid || O.touched || q.submitted)
                      ),
                      e.xp6(6),
                      e.ekj("is-invalid", b.invalid && b.touched),
                      e.xp6(2),
                      e.Q6J(
                        "ngIf",
                        b.errors && (b.valid || b.touched || q.submitted)
                      ),
                      e.xp6(6),
                      e.ekj("is-invalid", J.invalid && J.touched),
                      e.xp6(2),
                      e.Q6J(
                        "ngIf",
                        J.errors && (J.valid || J.touched || q.submitted)
                      ),
                      e.xp6(6),
                      e.ekj("is-invalid", I.invalid && I.touched),
                      e.xp6(2),
                      e.Q6J(
                        "ngIf",
                        I.errors && (I.valid || I.touched || q.submitted)
                      ),
                      e.xp6(6),
                      e.ekj("is-invalid", P.invalid && P.touched),
                      e.xp6(2),
                      e.Q6J(
                        "ngIf",
                        P.errors && (P.valid || P.touched || q.submitted)
                      ),
                      e.xp6(6),
                      e.Q6J("ngModel", o.issuer1),
                      e.xp6(1),
                      e.Q6J(
                        "ngIf",
                        o.issuer.errors &&
                          (o.issuer.valid || o.issuer.touched || q.submitted)
                      ),
                      e.xp6(7),
                      e.Q6J("src", o.proUrl || "", e.LSH),
                      e.xp6(1),
                      e.ekj("is-invalid", F.invalid && F.touched),
                      e.xp6(5),
                      e.Q6J(
                        "ngIf",
                        F.errors && (F.valid || F.touched || q.submitted)
                      ),
                      e.xp6(11),
                      e.ekj("is-invalid", D.invalid && D.touched),
                      e.xp6(2),
                      e.Q6J(
                        "ngIf",
                        D.errors && (D.valid || D.touched || q.submitted)
                      ),
                      e.xp6(2),
                      e.hij("", o.tokename, " = "),
                      e.xp6(2),
                      e.ekj("is-invalid", H.invalid && H.touched),
                      e.xp6(2),
                      e.Q6J(
                        "ngIf",
                        H.errors && (H.valid || H.touched || q.submitted)
                      ),
                      e.xp6(4),
                      e.AsE(" (1 ", o.tokename, " = ", o.tokenvalue, " LUMA)"),
                      e.xp6(7),
                      e.hij(
                        " Specify the participation period in which tokens will be issued. During the participation period can exchange LUMA for ",
                        o.tokename,
                        " tokens. "
                      ),
                      e.xp6(11),
                      e.ekj("is-invalid", B.invalid && B.touched),
                      e.s9C("value", o.startsaledata),
                      e.s9C("min", o.startsaledata),
                      e.xp6(2),
                      e.Q6J(
                        "ngIf",
                        B.errors && (B.valid || B.touched || q.submitted)
                      ),
                      e.xp6(2),
                      e.s9C("min", o.endsaledata),
                      e.xp6(2),
                      e.Q6J("ngIf", te.errors && (te.valid || te.touched)),
                      e.xp6(15),
                      e.ekj("is-invalid", j.invalid && j.touched),
                      e.xp6(2),
                      e.Q6J("ngIf", j.errors && (j.valid || j.touched)),
                      e.xp6(2),
                      e.ekj("is-invalid", V.invalid && V.touched),
                      e.xp6(2),
                      e.Q6J("ngIf", V.errors && (V.valid || V.touched)),
                      e.xp6(10),
                      e.ekj("is-invalid", G.invalid && G.touched),
                      e.xp6(2),
                      e.Q6J(
                        "ngIf",
                        G.errors && (G.valid || G.touched || q.submitted)
                      ),
                      e.xp6(4),
                      e.Q6J("ngIf", !o.signLoader),
                      e.xp6(12),
                      e.Q6J("ngModel", o.token_name_view2),
                      e.xp6(6),
                      e.Q6J("ngModel", o.token_abbr_view2),
                      e.xp6(6),
                      e.Q6J("ngModel", o.token_intro_view2),
                      e.xp6(6),
                      e.Q6J("ngModel", o.token_supply_view2),
                      e.xp6(6),
                      e.Q6J("ngModel", o.decimal_place_view2),
                      e.xp6(6),
                      e.Q6J("ngModel", o.issuer1),
                      e.xp6(10),
                      e.Q6J("ngModel", o.tokenprice2_view),
                      e.xp6(6),
                      e.Q6J("ngModel", o.sale_start_view),
                      e.xp6(6),
                      e.Q6J("ngModel", o.sale_end_view),
                      e.xp6(6),
                      e.Q6J("ngModel", o.frozen_amount_view),
                      e.xp6(10),
                      e.Q6J("ngModel", o.website_url_view2),
                      e.xp6(2),
                      e.ekj("is-invalid", fl.invalid),
                      e.xp6(7),
                      e.Q6J("ngIf", !o.signLoader),
                      e.xp6(5),
                      e.Q6J("innerText", o.error_type),
                      e.xp6(4),
                      e.Q6J("innerText", o.error_message);
                  }
                },
                directives: [
                  p.O5,
                  g,
                  m,
                  p.mk,
                  u.yS,
                  l._Y,
                  l.JL,
                  l.F,
                  l.Fj,
                  l.JJ,
                  l.On,
                  l.Q7,
                  l.wO,
                  l.nD,
                  l.c5,
                  l.qQ,
                  l.Fd,
                  l.wV,
                  l.Wl,
                  l.Zs,
                  _,
                  f,
                ],
                styles: [""],
              })),
              n
            );
          })(),
        },
        {
          path: "votes",
          component: (() => {
            class n {
              constructor(t, o, a) {
                (this.conn = t),
                  (this.alert = o),
                  (this.route = a),
                  (this.tokenList = ""),
                  (this.realtime_votes = 0),
                  (this.token = localStorage.getItem("H1gh-VaLTokEN")),
                  (this.signLoader = !1),
                  (this.loader = !0);
              }
              ngOnInit() {
                this.conn
                  .getRequest("governance/fetchSRList", this.token)
                  .subscribe((t) => {
                    if (1 == t.success) {
                      let o = t.SR_details.map((a) =>
                        Object.assign(Object.assign({}, a), { vote_val: 0 })
                      );
                      (o = o.sort((a, r) => r.Vote_Count - a.Vote_Count)),
                        (this.tokenList = o),
                        (this.realtime_votes = t.total_votes),
                        (this.address = t.bal.address_base58),
                        (this.balance = t.bal.balance),
                        (this.myVoteCount =
                          t.votecount.length > 0 ? t.votecount[0].totals : 0);
                    }
                    this.loader = !1;
                  });
              }
              handleMinus(t) {
                this.tokenList[t].vote_val-- <= 0 &&
                  (this.tokenList[t].vote_val = 0);
              }
              handlePlus(t) {
                this.tokenList[t].vote_val++;
              }
              submit_vote(t) {
                (this.loader = !0),
                  t.vote_val > 0
                    ? this.conn
                        .postRequest("governance/submitVote", t, this.token)
                        .subscribe((o) => {
                          1 == o.success
                            ? (this.alert.success(o.message, "", {
                                timeOut: 2e3,
                              }),
                              this.conn
                                .getRequest(
                                  "governance/fetchSRList",
                                  this.token
                                )
                                .subscribe((a) => {
                                  if (1 == a.success) {
                                    let r = a.SR_details.map((s) =>
                                      Object.assign(Object.assign({}, s), {
                                        vote_val: 0,
                                      })
                                    );
                                    this.tokenList = r;
                                  }
                                }))
                            : this.alert.error(o.message, "", { timeOut: 2e3 }),
                            (this.signLoader = !1),
                            (this.loader = !1);
                        })
                    : (this.alert.error("Vote must be grater than zero", "", {
                        timeOut: 2e3,
                      }),
                      (this.loader = !1));
              }
            }
            return (
              (n.ɵfac = function (t) {
                return new (t || n)(e.Y36(h), e.Y36(A._W), e.Y36(u.F0));
              }),
              (n.ɵcmp = e.Xpm({
                type: n,
                selectors: [["app-votes"]],
                decls: 70,
                vars: 7,
                consts: [
                  [4, "ngIf"],
                  [1, "inner-banner", "p-0", "pb-0"],
                  [1, "container", "px-0"],
                  [1, "text-center"],
                  [1, "container"],
                  [1, "my-4", "h5", "lwf"],
                  [1, "container", "my-3"],
                  [1, "row"],
                  [1, "col-md-6"],
                  [1, "card", "p-4", 2, "height", "146.9px"],
                  [3, "innerText"],
                  ["cclass", "text-center", "lass", "small"],
                  [1, "text-danger"],
                  [1, "small"],
                  [1, "card", "p-4"],
                  [1, "pt-0"],
                  [1, "table-responsive", "bg-white"],
                  [1, "table"],
                  [4, "ngFor", "ngForOf"],
                  [1, "plusminus", 3, "click"],
                  [
                    "type",
                    "number",
                    "onkeypress",
                    "return /[0-9]/i.test(event.key)",
                    "min",
                    "0",
                    1,
                    "num",
                    3,
                    "ngModel",
                    "name",
                    "ngModelChange",
                  ],
                  [1, "btn", "blue-btn", "btn-sm", 3, "click"],
                ],
                template: function (t, o) {
                  1 & t &&
                    (e.YNc(0, ar, 1, 0, "app-loader", 0),
                    e._UZ(1, "app-header"),
                    e.TgZ(2, "section", 1),
                    e.TgZ(3, "div", 2),
                    e.TgZ(4, "div", 3),
                    e._UZ(5, "app-searchbar"),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(6, "div", 4),
                    e.TgZ(7, "div", 5),
                    e._uU(8, " Votes "),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(9, "div", 6),
                    e.TgZ(10, "div", 7),
                    e.TgZ(11, "div", 8),
                    e.TgZ(12, "div", 9),
                    e.TgZ(13, "table"),
                    e.TgZ(14, "tr"),
                    e.TgZ(15, "td", 3),
                    e.TgZ(16, "span", 10),
                    e._uU(17, "0"),
                    e.qZA(),
                    e._UZ(18, "br"),
                    e.TgZ(19, "div", 11),
                    e._uU(20, "Real-time total votes this round"),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(21, "td", 3),
                    e.TgZ(22, "span", 12),
                    e._uU(23, "79,294"),
                    e.qZA(),
                    e._UZ(24, "br"),
                    e.TgZ(25, "div", 13),
                    e._uU(26, "Most votes gained this round"),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(27, "div", 8),
                    e.TgZ(28, "div", 14),
                    e.TgZ(29, "table"),
                    e.TgZ(30, "tr"),
                    e.TgZ(31, "td", 3),
                    e._uU(32, "MyAddress"),
                    e.qZA(),
                    e.TgZ(33, "td", 3),
                    e._uU(34),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(35, "tr"),
                    e.TgZ(36, "td", 3),
                    e._uU(37, " Balance"),
                    e._UZ(38, "br"),
                    e.TgZ(39, "div", 3),
                    e._uU(40),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(41, "td", 3),
                    e.TgZ(42, "span"),
                    e._uU(43, "MyVotes"),
                    e.qZA(),
                    e._UZ(44, "br"),
                    e.TgZ(45, "div"),
                    e._uU(46),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(47, "section", 15),
                    e.TgZ(48, "div", 4),
                    e.TgZ(49, "div", 16),
                    e.TgZ(50, "table", 17),
                    e.TgZ(51, "thead"),
                    e.TgZ(52, "tr"),
                    e.TgZ(53, "th"),
                    e._uU(54, "Rank"),
                    e.qZA(),
                    e.TgZ(55, "th"),
                    e._uU(56, "Name"),
                    e.qZA(),
                    e.TgZ(57, "th"),
                    e._uU(58, "Vote Count"),
                    e.qZA(),
                    e.TgZ(59, "th"),
                    e._uU(60, "Last Block"),
                    e.qZA(),
                    e.TgZ(61, "th"),
                    e._uU(62, "My votes"),
                    e.qZA(),
                    e.TgZ(63, "th"),
                    e._uU(64, "Action"),
                    e.qZA(),
                    e.TgZ(65, "th"),
                    e._uU(66, "Submit vote"),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.YNc(67, rr, 4, 0, "tbody", 0),
                    e.YNc(68, lr, 2, 1, "tbody", 0),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e._UZ(69, "app-footer")),
                    2 & t &&
                      (e.Q6J("ngIf", o.loader),
                      e.xp6(16),
                      e.Q6J("innerText", o.realtime_votes),
                      e.xp6(18),
                      e.Oqu(o.address),
                      e.xp6(6),
                      e.Oqu(o.balance / 1e6),
                      e.xp6(6),
                      e.Oqu(o.myVoteCount),
                      e.xp6(21),
                      e.Q6J("ngIf", 0 == o.tokenList.length),
                      e.xp6(1),
                      e.Q6J("ngIf", o.tokenList.length > 0));
                },
                directives: [
                  p.O5,
                  g,
                  m,
                  _,
                  f,
                  p.sg,
                  l.qQ,
                  l.wV,
                  l.Fj,
                  l.JJ,
                  l.On,
                ],
                styles: [""],
              })),
              n
            );
          })(),
        },
        {
          path: "proposals",
          component: (() => {
            class n {
              constructor(t, o, a) {
                (this.conn = t),
                  (this.route = o),
                  (this.alert = a),
                  (this.transactionList = []),
                  (this.showbutton = !1),
                  (this.token = localStorage.getItem("H1gh-VaLTokEN")),
                  (this.err = !1),
                  (this.signLoader = !1),
                  (this.loader = !0);
              }
              ngOnInit() {
                this.conn.getUrl("governance/chainparams").subscribe((t) => {
                  1 == t.success &&
                    (this.transactionList = t.getChainParameters),
                    (this.loader = !1);
                });
              }
              proposal() {
                (this.showbutton = !0),
                  this.conn.getUrl("governance/listProposal").subscribe((t) => {
                    1 == t.success && (this.proposallist = t.Proposal_details);
                  });
              }
              Parameters() {
                this.showbutton = !1;
              }
              raise_proposal() {
                this.conn
                  .getRequest("governance/srUsers", this.token)
                  .subscribe((t) => {
                    1 == t.success
                      ? this.route.navigate(["create-proposals"])
                      : ((this.err = !1),
                        jQuery("#success_popup").modal("show"));
                  });
              }
              My_proposal() {
                this.conn
                  .getRequest("governance/srUsers", this.token)
                  .subscribe((t) => {
                    1 == t.success
                      ? this.route.navigate(["my-proposals"])
                      : ((this.err = !1),
                        jQuery("#success_popup").modal("show"));
                  });
              }
              checkpro_balance() {
                this.conn
                  .getRequest("governance/probalance", this.token)
                  .subscribe((t) => {
                    1 == t.success
                      ? ((this.err = !1),
                        jQuery("#success_popup").modal("hide"),
                        jQuery("#createSR-box").modal("show"))
                      : ((this.err = !0),
                        (this.success_msg = t.msg),
                        jQuery("#success_popup").modal("show"));
                  });
              }
              submitFunc(t) {
                (this.loader = !0),
                  this.conn
                    .postRequest("governance/createSR", t.value, this.token)
                    .subscribe((a) => {
                      1 == a.status
                        ? (this.alert.success(a.msg, "", { timeOut: 2e3 }),
                          t.resetForm(),
                          jQuery("#createSR-box").modal("hide"))
                        : this.alert.error(a.msg, "", { timeOut: 2e3 }),
                        (this.signLoader = !1),
                        (this.loader = !1);
                    });
              }
            }
            return (
              (n.ɵfac = function (t) {
                return new (t || n)(e.Y36(h), e.Y36(u.F0), e.Y36(A._W));
              }),
              (n.ɵcmp = e.Xpm({
                type: n,
                selectors: [["app-proposals"]],
                decls: 104,
                vars: 13,
                consts: [
                  [4, "ngIf"],
                  [1, "inner-banner", "p-0", "pb-0"],
                  [1, "container", "px-0"],
                  [1, "text-center"],
                  [1, "container"],
                  [1, "my-4", "h5", "lwf"],
                  [1, "container", "my-3"],
                  [1, "row"],
                  [1, "col-md-12"],
                  [1, "card", "p-4", "text-justify"],
                  [1, "pt-0"],
                  [
                    1,
                    "d-flex",
                    "col",
                    "row",
                    "justify-content-between",
                    "mb-3",
                  ],
                  [1, ""],
                  [
                    "id",
                    "myTab",
                    "role",
                    "tablist",
                    1,
                    "nav",
                    "nav-tabs",
                    "site-tabs",
                  ],
                  [1, "nav-item"],
                  [
                    "id",
                    "sr_rep-tab",
                    "data-toggle",
                    "tab",
                    "href",
                    "#sr_rep",
                    "role",
                    "tab",
                    "aria-controls",
                    "sr_rep",
                    "aria-selected",
                    "true",
                    1,
                    "nav-link",
                    "active",
                    3,
                    "click",
                  ],
                  [
                    "id",
                    "sr_part-tab",
                    "data-toggle",
                    "tab",
                    "href",
                    "#sr_part",
                    "role",
                    "tab",
                    "aria-controls",
                    "sr_part",
                    "aria-selected",
                    "false",
                    1,
                    "nav-link",
                    3,
                    "click",
                  ],
                  ["class", "subtabs", 4, "ngIf"],
                  ["id", "myTabContent", 1, "tab-content"],
                  [
                    "id",
                    "sr_rep",
                    "role",
                    "tabpanel",
                    "aria-labelledby",
                    "sr_rep-tab",
                    1,
                    "tab-pane",
                    "fade",
                    "show",
                    "active",
                  ],
                  [1, "table-responsive", "bg-white"],
                  [1, "table"],
                  [
                    "id",
                    "sr_part",
                    "role",
                    "tabpanel",
                    "aria-labelledby",
                    "sr_part-tab",
                    1,
                    "tab-pane",
                    "fade",
                  ],
                  [
                    "id",
                    "success_popup",
                    "tabindex",
                    "-1",
                    "role",
                    "dialog",
                    "aria-labelledby",
                    "exampleModalLabel",
                    "aria-hidden",
                    "true",
                    1,
                    "modal",
                    "fade",
                  ],
                  ["role", "document", 1, "modal-dialog"],
                  [1, "modal-content"],
                  [1, "modal-header", "border-0"],
                  [
                    "type",
                    "button",
                    "data-dismiss",
                    "modal",
                    "aria-label",
                    "Close",
                    1,
                    "close",
                  ],
                  ["aria-hidden", "true"],
                  [1, "modal-body", "text-center"],
                  ["class", "modal-body text-danger", 4, "ngIf"],
                  [1, "modal-footer", "mx-auto", "border-0"],
                  [
                    "type",
                    "button",
                    "aria-hidden",
                    "true",
                    1,
                    "btn",
                    "btn-success",
                    3,
                    "click",
                  ],
                  [
                    "id",
                    "createSR-box",
                    "role",
                    "dialog",
                    "aria-labelledby",
                    "exampleModalCenterTitle",
                    "aria-hidden",
                    "true",
                    1,
                    "modal",
                    "fade",
                  ],
                  [
                    "role",
                    "document",
                    1,
                    "modal-dialog",
                    "modal-dialog-centered",
                  ],
                  [1, "modal-header"],
                  ["id", "exampleModalLongTitle", 1, "modal-title"],
                  [1, "modal-body", "text-justify"],
                  ["autocomplete", "off"],
                  ["addSR", "ngForm"],
                  [1, "form-group"],
                  [1, "input-group", "mb-3"],
                  [
                    "type",
                    "text",
                    "placeholder",
                    "http://www.agnus-scan.org",
                    "aria-label",
                    "http://www.agnus-scan.org",
                    "aria-describedby",
                    "basic-addon2",
                    "ngModel",
                    "",
                    "pattern",
                    "(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})",
                    "required",
                    "",
                    "name",
                    "webaddress",
                    1,
                    "form-control",
                  ],
                  ["webAddr", "ngModel"],
                  ["class", "errMsg", 4, "ngIf"],
                  [1, "form-check", "text-center", "my-4"],
                  [
                    "type",
                    "checkbox",
                    "id",
                    "exampleCheck1",
                    "value",
                    "on",
                    "ngModel",
                    "",
                    "required",
                    "",
                    1,
                    "form-check-input",
                  ],
                  ["c", "ngModel"],
                  ["for", "exampleCheck1", 1, "form-check-label"],
                  [1, "form-group", "mb-5", "mt-3", "text-center"],
                  [
                    "type",
                    "submit",
                    "class",
                    "btn col-md-6 blue-btn btn-lg w-f text-uppercase",
                    3,
                    "disabled",
                    "click",
                    4,
                    "ngIf",
                  ],
                  [1, "subtabs"],
                  [
                    "type",
                    "button",
                    1,
                    "btn",
                    "btn-sm",
                    "light-btn",
                    3,
                    "click",
                  ],
                  [
                    "type",
                    "button",
                    1,
                    "btn",
                    "btn-sm",
                    "light-btn",
                    2,
                    "margin-left",
                    "16px",
                    3,
                    "click",
                  ],
                  [4, "ngFor", "ngForOf"],
                  [1, "large-txt", 3, "routerLink"],
                  [1, "modal-body", "text-danger"],
                  [3, "innerText"],
                  [1, "errMsg"],
                  ["class", "error", 4, "ngIf"],
                  [1, "error"],
                  [
                    "type",
                    "submit",
                    1,
                    "btn",
                    "col-md-6",
                    "blue-btn",
                    "btn-lg",
                    "w-f",
                    "text-uppercase",
                    3,
                    "disabled",
                    "click",
                  ],
                ],
                template: function (t, o) {
                  if (
                    (1 & t &&
                      (e.YNc(0, dr, 1, 0, "app-loader", 0),
                      e._UZ(1, "app-header"),
                      e.TgZ(2, "section", 1),
                      e.TgZ(3, "div", 2),
                      e.TgZ(4, "div", 3),
                      e._UZ(5, "app-searchbar"),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(6, "div", 4),
                      e.TgZ(7, "div", 5),
                      e._uU(8, " Proposals "),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(9, "div", 6),
                      e.TgZ(10, "div", 7),
                      e.TgZ(11, "div", 8),
                      e.TgZ(12, "div", 9),
                      e._uU(
                        13,
                        " The committee is made up of 27 super representatives who are responsible for modifying dynamic parameters such as block rewards and transaction fees on the LUMA network. Each SR, super partner and SR candidate is entitled to initiate and vote for proposals. A proposal is adopted as long as it is voted for by at least 18 SRs. The adopted proposal will apply its changes to network parameters in the next maintenance period. "
                      ),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(14, "section", 10),
                      e.TgZ(15, "div", 4),
                      e.TgZ(16, "div", 11),
                      e.TgZ(17, "div", 12),
                      e.TgZ(18, "ul", 13),
                      e.TgZ(19, "li", 14),
                      e.TgZ(20, "a", 15),
                      e.NdJ("click", function () {
                        return o.Parameters();
                      }),
                      e._uU(21, "LUMA Network Parameters"),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(22, "li", 14),
                      e.TgZ(23, "a", 16),
                      e.NdJ("click", function () {
                        return o.proposal();
                      }),
                      e._uU(24, "Committee Proposals"),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.YNc(25, ur, 5, 0, "div", 17),
                      e.qZA(),
                      e.TgZ(26, "div", 18),
                      e.TgZ(27, "div", 19),
                      e.TgZ(28, "div", 20),
                      e.TgZ(29, "table", 21),
                      e.TgZ(30, "thead"),
                      e.TgZ(31, "tr"),
                      e.TgZ(32, "th"),
                      e._uU(33, "Number"),
                      e.qZA(),
                      e.TgZ(34, "th"),
                      e._uU(35, "Parameter"),
                      e.qZA(),
                      e.TgZ(36, "th"),
                      e._uU(37, "Current Value"),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.YNc(38, pr, 4, 0, "tbody", 0),
                      e.YNc(39, Zr, 2, 1, "tbody", 0),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(40, "div", 22),
                      e.TgZ(41, "div", 20),
                      e.TgZ(42, "table", 21),
                      e.TgZ(43, "thead"),
                      e.TgZ(44, "tr"),
                      e.TgZ(45, "th"),
                      e._uU(46, "No."),
                      e.qZA(),
                      e.TgZ(47, "th"),
                      e._uU(48, "Proposal Content"),
                      e.qZA(),
                      e.TgZ(49, "th"),
                      e._uU(50, "Proposer"),
                      e.qZA(),
                      e.TgZ(51, "th"),
                      e._uU(
                        52,
                        "Time of creation / Time of expiration( Local )"
                      ),
                      e.qZA(),
                      e.TgZ(53, "th"),
                      e._uU(54, "Proposal status"),
                      e.qZA(),
                      e.TgZ(55, "th"),
                      e._uU(56, "Upvotes / Total votes"),
                      e.qZA(),
                      e.TgZ(57, "th"),
                      e._uU(58, "Operations"),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.YNc(59, _r, 4, 0, "tbody", 0),
                      e.YNc(60, mr, 2, 1, "tbody", 0),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(61, "div", 23),
                      e.TgZ(62, "div", 24),
                      e.TgZ(63, "div", 25),
                      e.TgZ(64, "div", 26),
                      e.TgZ(65, "button", 27),
                      e.TgZ(66, "span", 28),
                      e._uU(67, "\xd7"),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(68, "div", 29),
                      e.TgZ(69, "p"),
                      e._uU(70, "This feature is only available to SRs."),
                      e.qZA(),
                      e.qZA(),
                      e.YNc(71, Tr, 2, 1, "div", 30),
                      e.TgZ(72, "div", 31),
                      e.TgZ(73, "button", 32),
                      e.NdJ("click", function () {
                        return o.checkpro_balance();
                      }),
                      e._uU(74, "Apply to be an SR"),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(75, "div", 33),
                      e.TgZ(76, "div", 34),
                      e.TgZ(77, "div", 25),
                      e.TgZ(78, "div", 35),
                      e.TgZ(79, "h5", 36),
                      e._uU(80, "Super Representatives"),
                      e.qZA(),
                      e.TgZ(81, "button", 27),
                      e.TgZ(82, "span", 28),
                      e._uU(83, "\xd7"),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(84, "div", 37),
                      e.TgZ(85, "span"),
                      e._uU(
                        86,
                        " All token holders can apply to become Super Representative (SR) candidates by clicking into the Account page, they can also vote for the candidates by clicking into the Votes page. Each user can vote for multiple candidates, with the number of votes smaller or equal to the amount of Luma that they hold. The voting results are based on the last round of voting by each user. The number of votes will be updated at 02.00(GMT+8), 08.00(GMT+8), 14.00(GMT+8), 20.00(GMT+8) every day, users can also view real-time vote numbers. The top 27 most-voted candidates will become SRs and be responsible for transaction packaging and block generation, with a reward of 32 luma per block generation. The 27 SRs and the top 100 SR candidates can also receive rewards of nodes based on the votes they receive. A one-time transaction fee of 9.999 luma will be deducted for the application to become a candidate. it will not cost any luma for users to vote for SR candidates."
                      ),
                      e.qZA(),
                      e.TgZ(87, "form", 38, 39),
                      e.TgZ(89, "div", 40),
                      e.TgZ(90, "label"),
                      e._uU(91, "Your personal Website address"),
                      e.qZA(),
                      e.TgZ(92, "div", 41),
                      e._UZ(93, "input", 42, 43),
                      e.qZA(),
                      e.YNc(95, vr, 3, 2, "div", 44),
                      e.TgZ(96, "div", 45),
                      e._UZ(97, "input", 46, 47),
                      e.TgZ(99, "label", 48),
                      e._uU(
                        100,
                        "I understand how to be a luma representative and i confirm to spend a 9,999 TRX free"
                      ),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(101, "div", 49),
                      e.YNc(102, qr, 2, 1, "button", 50),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e._UZ(103, "app-footer")),
                    2 & t)
                  ) {
                    const a = e.MAs(88),
                      r = e.MAs(94),
                      s = e.MAs(98);
                    e.Q6J("ngIf", o.loader),
                      e.xp6(25),
                      e.Q6J("ngIf", o.showbutton),
                      e.xp6(13),
                      e.Q6J("ngIf", 0 == o.transactionList.length),
                      e.xp6(1),
                      e.Q6J("ngIf", o.transactionList.length > 0),
                      e.xp6(20),
                      e.Q6J(
                        "ngIf",
                        0 ==
                          (null == o.proposallist
                            ? null
                            : o.proposallist.length)
                      ),
                      e.xp6(1),
                      e.Q6J(
                        "ngIf",
                        (null == o.proposallist
                          ? null
                          : o.proposallist.length) > 0
                      ),
                      e.xp6(11),
                      e.Q6J("ngIf", o.err),
                      e.xp6(22),
                      e.ekj("is-invalid", r.invalid && r.touched),
                      e.xp6(2),
                      e.Q6J(
                        "ngIf",
                        r.errors && (r.valid || r.touched || a.submitted)
                      ),
                      e.xp6(2),
                      e.ekj("is-invalid", s.invalid),
                      e.xp6(5),
                      e.Q6J("ngIf", !o.signLoader);
                  }
                },
                directives: [
                  p.O5,
                  g,
                  m,
                  l._Y,
                  l.JL,
                  l.F,
                  l.Fj,
                  l.JJ,
                  l.On,
                  l.c5,
                  l.Q7,
                  l.Wl,
                  l.Zs,
                  _,
                  f,
                  p.sg,
                  u.yS,
                ],
                styles: [""],
              })),
              n
            );
          })(),
        },
        {
          path: "token-info/:tokenId",
          component: (() => {
            class n {
              constructor(t, o, a, r) {
                (this.conn = t),
                  (this.actRoute = o),
                  (this.http = a),
                  (this.route = r),
                  (this.contract_address = ""),
                  (this.byte_code = ""),
                  (this.abi_data = ""),
                  (this.license = ""),
                  (this.version = ""),
                  (this.optimization = ""),
                  (this.contract_name = ""),
                  (this.status = ""),
                  (this.valuefile = ""),
                  (this.showEditor = !1),
                  (this.balance = "0.00 luma"),
                  (this.transaction_count = "0 Txns"),
                  (this.created_on = ""),
                  (this.tokeninfo = []),
                  (this.token = localStorage.getItem("H1gh-VaLTokEN")),
                  (this.creator = ""),
                  (this.addressData = []),
                  (this.loader = !0),
                  (this.editorOptions = {
                    theme: "vs-dark",
                    language: "text/plain",
                    readOnly: !0,
                  });
              }
              editorInit(t) {
                t.setSelection({
                  startLineNumber: 1,
                  startColumn: 1,
                  endColumn: 50,
                  endLineNumber: 3,
                });
              }
              ngOnInit() {
                this.actRoute.params.subscribe((o) => {
                  this.contract_address =
                    this.actRoute.snapshot.paramMap.get("contract_address");
                }),
                  this.conn
                    .postUrl("contract/contract_info", {
                      address: this.contract_address,
                    })
                    .subscribe((o) => {
                      if (1 == o.success) {
                        var a = o.compileData,
                          r = o.contract_data;
                        (this.byte_code = a.bytecode),
                          (this.abi_data = JSON.stringify(a.abi)),
                          (this.license = r.license),
                          (this.version = r.version),
                          (this.optimization = r.optimization),
                          (this.contract_name = r.contract_name),
                          (this.balance = o.balance + " luma"),
                          (this.transaction_count = o.count + " Txns"),
                          (this.created_on = r.created_at);
                        var s = o.useraddr,
                          c = r.txID;
                        (s = s.substring(0, 10) + "..." + s.substring(28, 34)),
                          (c = c.substring(0, 6) + "..." + c.substring(59, 64)),
                          (this.creator =
                            (s =
                              '<a href="/address-info/' +
                              o.useraddr +
                              '" >' +
                              s +
                              "</a>") +
                            "  At txn  " +
                            (c =
                              '<a href="/transaction-details/' +
                              r.txID +
                              '" >' +
                              c +
                              "</a>"));
                        var d = "Contract source code is ";
                        "verified" == r.contract_status
                          ? ((this.showEditor = !0),
                            (this.status = d + "Verified (Perfect match)"),
                            (this.valuefile = o.code))
                          : ((this.showEditor = !1),
                            (this.status = d + "UnVerified")),
                          this.conn
                            .postUrl("blocks/getSearchData", {
                              searchHash: this.contract_address,
                            })
                            .subscribe((y) => {
                              this.addressData = y.result;
                            });
                      }
                      this.loader = !1;
                    }),
                  this.actRoute.params.subscribe((o) => {
                    (this.hash = this.actRoute.snapshot.params),
                      this.conn
                        .postUrl("blocks/getTokenInfo", {
                          searchHash: this.actRoute.snapshot.params.tokenId,
                        })
                        .subscribe((r) => {
                          (this.tokeninfo = r),
                            (this.tokeninfo.webibo_url =
                              "" == r.webibo_url ? "None" : r.webibo_url),
                            (this.tokeninfo.twitter_url =
                              "" == r.twitter_url ? "None" : r.twitter_url),
                            (this.tokeninfo.telegram_url =
                              "" == r.telegram_url ? "None" : r.telegram_url),
                            (this.tokeninfo.facebook_url =
                              "" == r.facebook_url ? "None" : r.facebook_url);
                        });
                  });
              }
            }
            return (
              (n.ɵfac = function (t) {
                return new (t || n)(
                  e.Y36(h),
                  e.Y36(u.gz),
                  e.Y36(R.eN),
                  e.Y36(u.F0)
                );
              }),
              (n.ɵcmp = e.Xpm({
                type: n,
                selectors: [["app-token-info"]],
                viewQuery: function (t, o) {
                  if ((1 & t && e.Gf(Q.T2, 5), 2 & t)) {
                    let a;
                    e.iGM((a = e.CRH())) && (o.monacoComponent = a.first);
                  }
                },
                decls: 64,
                vars: 28,
                consts: [
                  [4, "ngIf"],
                  [1, "container"],
                  [1, "h4", "adrs"],
                  [1, "dark-bg", "p-2", "wf", "d-flex", "align-items-center"],
                  [1, "coin-icon", 3, "src"],
                  [1, "site-link", "text-dark"],
                  [1, "desc"],
                  [1, "row"],
                  [1, "col-md-6"],
                  [1, "info-wrapper", "my-4"],
                  [1, "info-title"],
                  [1, "info-row"],
                  [1, "label-field"],
                  [1, "data-field"],
                  ["class", "info-row", 4, "ngIf"],
                ],
                template: function (t, o) {
                  1 & t &&
                    (e.YNc(0, yr, 1, 0, "app-loader", 0),
                    e._UZ(1, "app-header"),
                    e._UZ(2, "app-searchbar"),
                    e.TgZ(3, "section"),
                    e.TgZ(4, "div", 1),
                    e.TgZ(5, "div", 2),
                    e._uU(6),
                    e.qZA(),
                    e.TgZ(7, "div", 3),
                    e.TgZ(8, "div"),
                    e._UZ(9, "img", 4),
                    e.qZA(),
                    e.TgZ(10, "div"),
                    e.TgZ(11, "span", 5),
                    e._uU(12),
                    e.qZA(),
                    e._UZ(13, "br"),
                    e.TgZ(14, "div", 6),
                    e.TgZ(15, "small"),
                    e._uU(16),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(17, "div", 7),
                    e.TgZ(18, "div", 8),
                    e.TgZ(19, "div", 9),
                    e.TgZ(20, "div", 10),
                    e._uU(21, " Contract Overview "),
                    e.qZA(),
                    e.TgZ(22, "div", 11),
                    e.TgZ(23, "div", 12),
                    e._uU(24, "Token name: "),
                    e.qZA(),
                    e.TgZ(25, "div", 13),
                    e._uU(26),
                    e.qZA(),
                    e.qZA(),
                    e.YNc(27, Ur, 5, 1, "div", 14),
                    e.YNc(28, xr, 5, 1, "div", 14),
                    e.YNc(29, kr, 5, 1, "div", 14),
                    e.YNc(30, Cr, 5, 1, "div", 14),
                    e.TgZ(31, "div", 11),
                    e.TgZ(32, "div", 12),
                    e._uU(33, "Token abbreviation :"),
                    e.qZA(),
                    e.TgZ(34, "div", 13),
                    e._uU(35),
                    e.qZA(),
                    e.qZA(),
                    e.YNc(36, wr, 5, 1, "div", 14),
                    e.YNc(37, Mr, 5, 1, "div", 14),
                    e.TgZ(38, "div", 11),
                    e.TgZ(39, "div", 12),
                    e._uU(40, "Created at :"),
                    e.qZA(),
                    e.TgZ(41, "div", 13),
                    e._uU(42),
                    e.ALo(43, "date"),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(44, "div", 8),
                    e.TgZ(45, "div", 9),
                    e.TgZ(46, "div", 10),
                    e._uU(47, " Information "),
                    e.qZA(),
                    e.TgZ(48, "div", 11),
                    e.TgZ(49, "div", 12),
                    e._uU(50, "Official Website :"),
                    e.qZA(),
                    e.TgZ(51, "div", 13),
                    e._uU(52),
                    e.qZA(),
                    e.qZA(),
                    e.YNc(53, Ir, 5, 1, "div", 14),
                    e.YNc(54, Nr, 5, 1, "div", 14),
                    e.YNc(55, Or, 5, 1, "div", 14),
                    e.YNc(56, Jr, 5, 1, "div", 14),
                    e.YNc(57, Rr, 6, 4, "div", 14),
                    e.YNc(58, Er, 5, 1, "div", 14),
                    e.YNc(59, Sr, 6, 4, "div", 14),
                    e.YNc(60, Lr, 5, 1, "div", 14),
                    e.YNc(61, Yr, 5, 1, "div", 14),
                    e.YNc(62, Qr, 5, 1, "div", 14),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e._UZ(63, "app-footer")),
                    2 & t &&
                      (e.Q6J("ngIf", o.loader),
                      e.xp6(6),
                      e.hij("Contract : ", o.tokeninfo.contract_address, ""),
                      e.xp6(3),
                      e.s9C("src", o.tokeninfo.token_logo, e.LSH),
                      e.xp6(3),
                      e.Oqu(o.tokeninfo.token_name),
                      e.xp6(4),
                      e.Oqu(o.tokeninfo.token_intro),
                      e.xp6(10),
                      e.Oqu(o.tokeninfo.token_name),
                      e.xp6(1),
                      e.Q6J("ngIf", "TRC10" == o.tokeninfo.token_type),
                      e.xp6(1),
                      e.Q6J("ngIf", "TRC10" !== o.tokeninfo.token_type),
                      e.xp6(1),
                      e.Q6J("ngIf", "TRC10" == o.tokeninfo.token_type),
                      e.xp6(1),
                      e.Q6J("ngIf", "TRC10" !== o.tokeninfo.token_type),
                      e.xp6(5),
                      e.Oqu(o.tokeninfo.token_abbr),
                      e.xp6(1),
                      e.Q6J("ngIf", "TRC10" !== o.tokeninfo.token_type),
                      e.xp6(1),
                      e.Q6J("ngIf", "TRC10" == o.tokeninfo.token_type),
                      e.xp6(5),
                      e.Oqu(
                        e.xi3(
                          43,
                          25,
                          o.tokeninfo.created_at,
                          "yyyy-MM-dd HH:mm:ss "
                        )
                      ),
                      e.xp6(10),
                      e.Oqu(o.tokeninfo.website_url),
                      e.xp6(1),
                      e.Q6J("ngIf", "TRC10" == o.tokeninfo.token_type),
                      e.xp6(1),
                      e.Q6J("ngIf", "TRC10" !== o.tokeninfo.token_type),
                      e.xp6(1),
                      e.Q6J("ngIf", "TRC10" == o.tokeninfo.token_type),
                      e.xp6(1),
                      e.Q6J("ngIf", "TRC10" !== o.tokeninfo.token_type),
                      e.xp6(1),
                      e.Q6J("ngIf", "TRC10" == o.tokeninfo.token_type),
                      e.xp6(1),
                      e.Q6J("ngIf", "TRC10" !== o.tokeninfo.token_type),
                      e.xp6(1),
                      e.Q6J("ngIf", "TRC10" == o.tokeninfo.token_type),
                      e.xp6(1),
                      e.Q6J("ngIf", "TRC10" !== o.tokeninfo.token_type),
                      e.xp6(1),
                      e.Q6J("ngIf", "TRC10" !== o.tokeninfo.token_type),
                      e.xp6(1),
                      e.Q6J("ngIf", "TRC10" !== o.tokeninfo.token_type));
                },
                directives: [p.O5, g, m, _, f],
                pipes: [p.uU],
                styles: [
                  ".no-border[_ngcontent-%COMP%]{height:165px;background:transparent;border:0;padding:20px 5px}",
                ],
              })),
              n
            );
          })(),
        },
        { path: "loader", component: f },
        { path: "resetpassword", component: Xo },
        {
          path: "about-us",
          component: (() => {
            class n {
              constructor() {}
              ngOnInit() {}
            }
            return (
              (n.ɵfac = function (t) {
                return new (t || n)();
              }),
              (n.ɵcmp = e.Xpm({
                type: n,
                selectors: [["app-aboutus"]],
                decls: 50,
                vars: 0,
                consts: [
                  [1, "container"],
                  [1, "h5", "lwf"],
                  [1, "info-wrapper"],
                  [1, "border-bottom", "p-3"],
                  [1, "lwf"],
                  [1, ""],
                  [1, "row"],
                  [1, "aboutus", "col"],
                  [
                    "src",
                    "https://icons.iconarchive.com/icons/graphicloads/flat-finance/256/person-icon.png",
                    "alt",
                    "Avatar",
                    1,
                    "image",
                  ],
                  [1, "overlay"],
                ],
                template: function (t, o) {
                  1 & t &&
                    (e._UZ(0, "app-header"),
                    e.TgZ(1, "section"),
                    e.TgZ(2, "div", 0),
                    e.TgZ(3, "div", 1),
                    e._uU(4, "About us"),
                    e.qZA(),
                    e.TgZ(5, "div", 2),
                    e.TgZ(6, "div"),
                    e.TgZ(7, "div", 3),
                    e.TgZ(8, "h5", 4),
                    e._uU(9, "What are we doing?"),
                    e.qZA(),
                    e.TgZ(10, "p"),
                    e._uU(
                      11,
                      " Luma-AIis the first block explorer based on luma. It not only includes some basic functions of the block explorer, such as search query transactions, accounts, blocks, nodes, smart contracts; data statistics and queries on the chain, but also directly supports token creation. At the same time, which enriches the Luma-AIapplication matrix. "
                    ),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(12, "div", 3),
                    e.TgZ(13, "h5", 4),
                    e._uU(14, "Community Contributor"),
                    e.qZA(),
                    e._UZ(15, "p", 5),
                    e._uU(
                      16,
                      " Our team is the Blockchain Welfare Foundation in Malta and has been actively involved in the ecological construction of agnus. The team consists of more than 30 person all over the world, mostly developers and operators. In the future, we will be bound to the Luma ecological development in the long run. To perfect the agnus-scan, we will also develop DApps based on luma. "
                    ),
                    e.TgZ(17, "div", 0),
                    e.TgZ(18, "div", 6),
                    e.TgZ(19, "div", 7),
                    e._UZ(20, "img", 8),
                    e.TgZ(21, "div", 9),
                    e._uU(22, "person 1"),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(23, "div", 7),
                    e._UZ(24, "img", 8),
                    e.TgZ(25, "div", 9),
                    e._uU(26, "person 2"),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(27, "div", 7),
                    e._UZ(28, "img", 8),
                    e.TgZ(29, "div", 9),
                    e._uU(30, "person 3"),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(31, "div", 6),
                    e.TgZ(32, "div", 7),
                    e._UZ(33, "img", 8),
                    e.TgZ(34, "div", 9),
                    e._uU(35, "person 4"),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(36, "div", 7),
                    e._UZ(37, "img", 8),
                    e.TgZ(38, "div", 9),
                    e._uU(39, "person 5"),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(40, "div", 7),
                    e._UZ(41, "img", 8),
                    e.TgZ(42, "div", 9),
                    e._uU(43, "person 6"),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(44, "div", 3),
                    e.TgZ(45, "h5", 4),
                    e._uU(46, "Luma-AIusers all over the world"),
                    e.qZA(),
                    e.TgZ(47, "p"),
                    e._uU(
                      48,
                      " Every day, luma supporters from around the world use the Luma-AIblock explorer, where they can query the details of the transaction and experience the latest features of agnus. "
                    ),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e._UZ(49, "app-footer"));
                },
                directives: [g, _],
                styles: [
                  ".aboutus[_ngcontent-%COMP%]{padding:10px}.image[_ngcontent-%COMP%]{width:100%;height:auto;background-color:#d3d3d3}.overlay[_ngcontent-%COMP%]{position:absolute;bottom:0;background:rgb(0,0,0);background:rgba(0,0,0,.5);color:#f1f1f1;width:85%;transition:.5s ease;opacity:0;color:#fff;font-size:14px;padding:5px;text-align:center;width:100%;left:0}.aboutus[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%]{opacity:1}",
                ],
              })),
              n
            );
          })(),
        },
        {
          path: "terms-&-condition",
          component: (() => {
            class n {
              constructor() {}
              ngOnInit() {}
            }
            return (
              (n.ɵfac = function (t) {
                return new (t || n)();
              }),
              (n.ɵcmp = e.Xpm({
                type: n,
                selectors: [["app-terms-and-conditions"]],
                decls: 253,
                vars: 0,
                consts: [
                  [1, "container"],
                  [1, "h5", "lwf"],
                  [1, "info-wrapper"],
                  [1, "border-bottom", "p-3"],
                  [1, "text-secondary", "text-justify"],
                  ["type", "a"],
                  [1, "text-dark"],
                  ["href", "/Privacy-Policy"],
                ],
                template: function (t, o) {
                  1 & t &&
                    (e._UZ(0, "app-header"),
                    e.TgZ(1, "section"),
                    e.TgZ(2, "div", 0),
                    e.TgZ(3, "div", 1),
                    e._uU(4, "Terms of Service"),
                    e.qZA(),
                    e.TgZ(5, "p"),
                    e._uU(6, "Last updated: August 5, 2024"),
                    e.qZA(),
                    e.TgZ(7, "div", 2),
                    e.TgZ(8, "div", 3),
                    e.TgZ(9, "h6"),
                    e._uU(10, "PLEASE READ THESE TERMS OF SERVICE CAREFULLY."),
                    e.qZA(),
                    e.TgZ(11, "div", 4),
                    e.TgZ(12, "p"),
                    e._uU(
                      13,
                      " BY ACCESSING OR USING OUR SERVICES, YOU AGREE TO BE BOUND BY THESE TERMS OF SERVICE AND ALL TERMS INCORPORATED BY REFERENCE. "
                    ),
                    e.qZA(),
                    e.TgZ(14, "p"),
                    e._uU(
                      15,
                      " These Terms of Service and any terms expressly incorporated herein (\u201cTerms\u201d) apply to your access to and use of all services (our \u201cServices\u201d) provided by Luma AI (\u201cCompany,\u201d \u201cwe,\u201d or \u201cus\u201d). "
                    ),
                    e.qZA(),
                    e.qZA(),
                    e._UZ(16, "br"),
                    e.TgZ(17, "h6"),
                    e._uU(18, "1. ELIGIBILITY"),
                    e.qZA(),
                    e.TgZ(19, "div", 4),
                    e.TgZ(20, "p"),
                    e._uU(
                      21,
                      " You represent and warrant that you: (a) are of legal age to form a binding contract; (b) have not previously been suspended or removed from using our Services; and (c) have full power and authority to enter into this agreement and in doing so will not violate any other agreement to which you are a party. "
                    ),
                    e.qZA(),
                    e.TgZ(22, "p"),
                    e._uU(
                      23,
                      " If you are registering to use the Services on behalf of a legal entity, you further represent and warrant that (i) such legal entity is duly organized and validly existing under the applicable laws of the jurisdiction of its organization, and (ii) you are duly authorized by such legal entity to act on its behalf. "
                    ),
                    e.qZA(),
                    e.qZA(),
                    e._UZ(24, "br"),
                    e.TgZ(25, "h6"),
                    e._uU(26, "2. ACCOUNT REGISTRATION"),
                    e.qZA(),
                    e.TgZ(27, "div", 4),
                    e.TgZ(28, "p"),
                    e._uU(
                      29,
                      " You must create an account with Company to access the Services (\u201cAccount\u201d). When you create an Account, you agree to: "
                    ),
                    e.qZA(),
                    e.TgZ(30, "ol", 5),
                    e.TgZ(31, "li"),
                    e._uU(
                      32,
                      " create a strong password that you do not use for any other website or online service;"
                    ),
                    e.qZA(),
                    e.TgZ(33, "li"),
                    e._uU(34, "provide accurate and truthful information;"),
                    e.qZA(),
                    e.TgZ(35, "li"),
                    e._uU(
                      36,
                      "maintain and promptly update your Account information;"
                    ),
                    e.qZA(),
                    e.TgZ(37, "li"),
                    e._uU(
                      38,
                      "maintain the security of your Account by protecting your Account password and restricting access to your computer and your Account;"
                    ),
                    e.qZA(),
                    e.TgZ(39, "li"),
                    e._uU(
                      40,
                      "promptly notify us if you discover or otherwise suspect any security breaches related to your Account; and"
                    ),
                    e.qZA(),
                    e.TgZ(41, "li"),
                    e._uU(
                      42,
                      "take responsibility for all activities that occur under your Account and accept all risks of any authorized or unauthorized access to your Account, to the maximum extent permitted by law."
                    ),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(43, "p"),
                    e._uU(
                      44,
                      " When you create an Account, we assign you an account identifier that you must retain to access your Account. "
                    ),
                    e.qZA(),
                    e.qZA(),
                    e._UZ(45, "br"),
                    e.TgZ(46, "h6"),
                    e._uU(47, "3. DISCONTINUANCE OF SERVICES"),
                    e.qZA(),
                    e.TgZ(48, "div", 4),
                    e.TgZ(49, "p"),
                    e._uU(
                      50,
                      " We may, in our sole discretion and without liability to you, with or without prior notice and at any time, modify or discontinue, temporarily or permanently, any portion of our Services. "
                    ),
                    e.qZA(),
                    e.qZA(),
                    e._UZ(51, "br"),
                    e.TgZ(52, "h6"),
                    e._uU(53, "4. ASSUMPTION OF RISK"),
                    e.qZA(),
                    e.TgZ(54, "div", 4),
                    e.TgZ(55, "p"),
                    e._uU(
                      56,
                      " You acknowledge and agree that there are risks associated with utilizing an Internet-based service including, but not limited to, the risk of failure of hardware, software and Internet connections, the risk of malicious software introduction, and the risk that third parties may obtain unauthorized access to information stored within your Account. "
                    ),
                    e.qZA(),
                    e.TgZ(57, "p"),
                    e._uU(
                      58,
                      " You acknowledge and agree that Company will not be responsible for any communication failures, disruptions, errors, distortions or delays you may experience when using the Services, however caused. Company takes no responsibility for and will not be liable for any losses, damages or claims arising from the use of our Services, including, but not limited to, any losses, damages or claims arising from: "
                    ),
                    e.qZA(),
                    e.TgZ(59, "ol", 5),
                    e.TgZ(60, "li"),
                    e._uU(61, ' passwords being "Bruteforced",'),
                    e.qZA(),
                    e.TgZ(62, "li"),
                    e._uU(63, "server failure or data loss,"),
                    e.qZA(),
                    e.TgZ(64, "li"),
                    e._uU(65, " forgotten passwords,"),
                    e.qZA(),
                    e.TgZ(66, "li"),
                    e._uU(67, "corrupted wallet files,"),
                    e.qZA(),
                    e.TgZ(68, "li"),
                    e._uU(
                      69,
                      "incorrectly constructed transactions or mistyped luma addresses; or"
                    ),
                    e.qZA(),
                    e.TgZ(70, "li"),
                    e._uU(71, "unauthorized access to mobile applications,"),
                    e.qZA(),
                    e.TgZ(72, "li"),
                    e._uU(
                      73,
                      '"phishing," viruses, third-party attacks or any other unauthorized third-party activities.'
                    ),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e._UZ(74, "br"),
                    e.TgZ(75, "h6"),
                    e._uU(76, "5. THIRD-PARTY SERVICES AND CONTENT"),
                    e.qZA(),
                    e.TgZ(77, "div", 4),
                    e.TgZ(78, "p"),
                    e._uU(
                      79,
                      " In using our Services, you may view content or utilize services provided by third parties, including links to web pages and services of such parties (\u201cThird-Party Content\u201d). "
                    ),
                    e.qZA(),
                    e.TgZ(80, "p"),
                    e._uU(
                      81,
                      " We do not control, endorse or adopt any Third-Party Content and will have no responsibility for Third-Party Content, including, without limitation, material that may be misleading, incomplete, erroneous, offensive, indecent or otherwise objectionable in your jurisdiction. "
                    ),
                    e.qZA(),
                    e.TgZ(82, "p"),
                    e._uU(
                      83,
                      " In addition, your business dealings or correspondence with such third parties are solely between you and the third parties. We are not responsible or liable for any loss or damage of any sort incurred as the result of any such dealings, and you understand that your use of Third-Party Content, and your interactions with third parties, is at your own risk. "
                    ),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(84, "h6"),
                    e._uU(85, "6. ACCEPTABLE USE"),
                    e.qZA(),
                    e.TgZ(86, "div", 4),
                    e.TgZ(87, "p"),
                    e._uU(
                      88,
                      " When accessing or using the Services, you agree that you will not violate any law, contract, intellectual property or other third-party right or commit a tort, and that you are solely responsible for your conduct while using our Services. You must not: "
                    ),
                    e.qZA(),
                    e.TgZ(89, "ul"),
                    e.TgZ(90, "li"),
                    e._uU(
                      91,
                      "Use our Services in any manner that could interfere with, disrupt, negatively affect or inhibit other users from fully enjoying our Services, or that could damage, disable, overburden or impair the functioning of our Services in any manner;"
                    ),
                    e.qZA(),
                    e.TgZ(92, "li"),
                    e._uU(
                      93,
                      "Use our Services to pay for, support or otherwise engage in any illegal activities, including, but not limited to illegal gambling, fraud, money-laundering, or terrorist activities;"
                    ),
                    e.qZA(),
                    e.TgZ(94, "li"),
                    e._uU(95, "Use any "),
                    e.TgZ(96, "span", 6),
                    e._uU(97, "robot, spider, crawler, scraper"),
                    e.qZA(),
                    e._uU(
                      98,
                      " or other automated means or interface not provided by us to access our Services or to extract data;"
                    ),
                    e.qZA(),
                    e.TgZ(99, "li"),
                    e._uU(100, "Engage in "),
                    e.TgZ(101, "span", 6),
                    e._uU(102, "Automated Data Collection (scraping)"),
                    e.qZA(),
                    e._uU(
                      103,
                      " unless such Automated Data Collection is confined solely to search indexing for display on the Internet;"
                    ),
                    e.qZA(),
                    e.TgZ(104, "li"),
                    e._uU(
                      105,
                      "Use or attempt to use another user\u2019s account without authorization;"
                    ),
                    e.qZA(),
                    e.TgZ(106, "li"),
                    e._uU(
                      107,
                      "Attempt to circumvent any content filtering techniques we employ, or attempt to access any service or area of our Services that you are not authorized to access;"
                    ),
                    e.qZA(),
                    e.TgZ(108, "li"),
                    e._uU(
                      109,
                      "Introduce to the Services any virus, trojan worms, logic bombs or other harmful material;"
                    ),
                    e.qZA(),
                    e.TgZ(110, "li"),
                    e._uU(
                      111,
                      "Develop any third-party applications that interact with our Services without our prior written consent;"
                    ),
                    e.qZA(),
                    e.TgZ(112, "li"),
                    e._uU(
                      113,
                      "Provide false, inaccurate, or misleading information; and"
                    ),
                    e.qZA(),
                    e.TgZ(114, "li"),
                    e._uU(
                      115,
                      "Encourage or induce any third party to engage in any of the activities prohibited under this Section."
                    ),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e._UZ(116, "br"),
                    e.TgZ(117, "h6"),
                    e._uU(118, "7. USER-GENERATED CONTENT"),
                    e.qZA(),
                    e.TgZ(119, "div", 4),
                    e.TgZ(120, "p"),
                    e._uU(121, " 7.1. "),
                    e.TgZ(122, "span", 6),
                    e._uU(123, "Responsibility for User-Generated Content "),
                    e.qZA(),
                    e._uU(
                      124,
                      "- You are solely responsible for the content of, and for any harm resulting from, any User-Generated Content that you post, upload, link to or otherwise make available via the Service, regardless of the form of that Content. We are not responsible for any public display or misuse of your User-Generated Content. We have the right (though not the obligation) to refuse or remove any User-Generated Content that, in our sole discretion, violates any Luma-AIterms or policies. "
                    ),
                    e.qZA(),
                    e.TgZ(125, "p"),
                    e._uU(126, " 7.2. "),
                    e.TgZ(127, "span", 6),
                    e._uU(128, "Ownership of Content & Right to Post"),
                    e.qZA(),
                    e._uU(
                      129,
                      " - If you're posting anything you did not create yourself or do not own the rights to, you agree that you are responsible for any Content you post; that you will only submit Content that you have the right to post; and that you will fully comply with any third party licenses relating to Content you post. "
                    ),
                    e.qZA(),
                    e.TgZ(130, "p"),
                    e._uU(131, " 7.3. "),
                    e.TgZ(132, "span", 6),
                    e._uU(133, "License Grant to Us"),
                    e.qZA(),
                    e._uU(
                      134,
                      " - We need the legal right to do things like host Your Content, publish it, and share it. You grant us and our legal successors the right to store, parse, and display your content, and make incidental copies as necessary to render the Website and provide the service. "
                    ),
                    e.qZA(),
                    e.TgZ(135, "p"),
                    e._uU(136, " 7.4. "),
                    e.TgZ(137, "span", 6),
                    e._uU(138, "Moral Rights "),
                    e.qZA(),
                    e._uU(
                      139,
                      "- You retain all moral rights to Your Content that you upload, publish, or submit to any part of the Service, including the rights of integrity and attribution. However, you waive these rights and agree not to assert them against us, to enable us to reasonably exercise the rights granted in Section 7.3. "
                    ),
                    e.qZA(),
                    e.TgZ(140, "p"),
                    e._uU(
                      141,
                      " 7.5. To the extent this agreement is not enforceable by applicable law, you grant Luma-AIthe rights we need to use your content without attribution and to make reasonable adaptations of your content as necessary to render the Website and provide the service. "
                    ),
                    e.qZA(),
                    e.qZA(),
                    e._UZ(142, "br"),
                    e.TgZ(143, "h6"),
                    e._uU(
                      144,
                      "8. COPYRIGHTS AND OTHER INTELLECTUAL PROPERTY RIGHTS"
                    ),
                    e.qZA(),
                    e.TgZ(145, "div", 4),
                    e.TgZ(146, "p"),
                    e._uU(
                      147,
                      " Unless otherwise indicated by us, all copyright and other intellectual property rights in all content and other materials contained on our website or provided in connection with the Services, including, without limitation, the Company or Company logo and all designs, text, graphics, pictures, information, data, software, sound files, other files and the selection and arrangement thereof (collectively, \u201cCompany Materials\u201d) are the proprietary property of Company or our licensors or suppliers and are protected by copyright laws and other intellectual property rights laws. "
                    ),
                    e.qZA(),
                    e.TgZ(148, "p"),
                    e._uU(
                      149,
                      " Unauthorized use and/or duplication of this material without express and written permission from this site\u2019s author and/or owner is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to Luma AI with appropriate and specific direction to the original content. "
                    ),
                    e.qZA(),
                    e.qZA(),
                    e._UZ(150, "br"),
                    e.TgZ(151, "h6"),
                    e._uU(152, "9. TRADEMARKS"),
                    e.qZA(),
                    e.TgZ(153, "div", 4),
                    e.TgZ(154, "p"),
                    e._uU(
                      155,
                      " \u201cagnus-scan\u201d the Company logo, and any other Company product or service names, logos or slogans that may appear on our Services are trademarks of Company and may not be copied, imitated or used, in whole or in part, without our prior written permission. "
                    ),
                    e.qZA(),
                    e.TgZ(156, "p"),
                    e._uU(
                      157,
                      " You will not use any trademark, product or service name of Company without our prior written permission, including without limitation any metatags or other \u201chidden text\u201d utilizing any trademark, product or service name of Company. In addition, the look and feel of our Services, including all page headers, custom graphics, button icons and scripts, is the service mark, trademark and/or trade dress of Company and may not be copied, imitated or used, in whole or in part, without our prior written permission. "
                    ),
                    e.qZA(),
                    e.TgZ(158, "p"),
                    e._uU(
                      159,
                      " All other trademarks, registered trademarks, product names and company names or logos mentioned through our Services are the property of their respective owners. Reference to any products, services, processes or other information, by name, trademark, manufacturer, supplier or otherwise does not constitute or imply endorsement, sponsorship or recommendation by us. "
                    ),
                    e.qZA(),
                    e.qZA(),
                    e._UZ(160, "br"),
                    e.TgZ(161, "h6"),
                    e._uU(162, "10. SUSPENSION; TERMINATION"),
                    e.qZA(),
                    e.TgZ(163, "div", 4),
                    e.TgZ(164, "p"),
                    e._uU(
                      165,
                      " In the event of any Force Majeure Event, breach of these Terms, or any other event that would make provision of the Services commercially unreasonable for Company, we may, in our discretion and without liability to you, with or without prior notice, suspend your access to all or a portion of our Services. "
                    ),
                    e.qZA(),
                    e.TgZ(166, "p"),
                    e._uU(
                      167,
                      " We may terminate your access to the Services in our sole discretion, immediately and without prior notice, and delete or deactivate your Account and all related information and files in such account without liability to you, including, for instance, in the event that you breach any term of these Terms. "
                    ),
                    e.qZA(),
                    e.qZA(),
                    e._UZ(168, "br"),
                    e.TgZ(169, "h6"),
                    e._uU(170, "11. COOKIE STATEMENT"),
                    e.qZA(),
                    e.TgZ(171, "div", 4),
                    e.TgZ(172, "p"),
                    e._uU(
                      173,
                      " We may, in our sole discretion and without liability to you, with or without prior notice and at any time, modify or discontinue, temporarily or permanently, any portion of our Services. "
                    ),
                    e.qZA(),
                    e.TgZ(174, "p"),
                    e._uU(
                      175,
                      " Information collected from cookies is used by us to evaluate the effectiveness of our Site, analyze trends, and manage the platform. The information collected from cookies allows us to determine such things as which parts of our Site are most visited and difficulties our visitors may experience in accessing our Site. With this knowledge, we can improve the quality of your experience on the platform by recognizing and delivering more of the most desired features and information, as well as by resolving access difficulties. We also use cookies and/or a technology known as web bugs or clear gifs, which are typically stored in emails to help us confirm your receipt of, and response to, our emails and to provide you with a more personalized experience when using our Site. "
                    ),
                    e.qZA(),
                    e.TgZ(176, "p"),
                    e._uU(
                      177,
                      " We also use third party service provider(s), to assist us in better understanding the use of our Site. Our service provider(s) will place cookies on the hard drive of your computer and will receive information that we select that will educate us on such things as how visitors navigate around our site, what pages are browsed and general transaction information. Our service provider(s) analyses this information and provides us with aggregate reports. The information and analysis provided by our service provider(s) will be used to assist us in better understanding our visitors' interests in our Site and how to better serve those interests. The information collected by our service provider(s) may be linked to and combined with information that we collect about you while you are using the platform. Our service provider(s) is/are contractually restricted from using information they receive from our Site other than to assist us. "
                    ),
                    e.qZA(),
                    e.TgZ(178, "p"),
                    e._uU(
                      179,
                      " Your continued use of this site, as well as any subsequent usage, will be interpreted as your consent to cookies being stored on your device. "
                    ),
                    e.qZA(),
                    e.qZA(),
                    e._UZ(180, "br"),
                    e.TgZ(181, "h6"),
                    e._uU(182, "12. PRIVACY POLICY"),
                    e.qZA(),
                    e.TgZ(183, "div", 4),
                    e.TgZ(184, "p"),
                    e._uU(185, " Please see our detailed "),
                    e.TgZ(186, "a", 7),
                    e._uU(187, "Privacy Policy"),
                    e.qZA(),
                    e._uU(188, ". "),
                    e.qZA(),
                    e.qZA(),
                    e._UZ(189, "br"),
                    e.TgZ(190, "h6"),
                    e._uU(191, "13. DISCLAIMER OF WARRANTIES"),
                    e.qZA(),
                    e.TgZ(192, "div", 4),
                    e.TgZ(193, "p"),
                    e._uU(
                      194,
                      " (a) TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, AND EXCEPT AS EXPRESSLY PROVIDED TO THE CONTRARY IN A WRITING BY US, OUR SERVICES ARE PROVIDED ON AN \u201cAS IS\u201d AND \u201cAS AVAILABLE\u201d BASIS TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW. WE EXPRESSLY DISCLAIM, AND YOU WAIVE, ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT AS TO OUR SERVICES, INCLUDING THE INFORMATION, CONTENT AND MATERIALS CONTAINED THEREIN. "
                    ),
                    e.qZA(),
                    e.TgZ(195, "p"),
                    e._uU(
                      196,
                      " (b) YOU ACKNOWLEDGE THAT INFORMATION YOU STORE OR TRANSFER THROUGH OUR SERVICES MAY BECOME IRRETRIEVABLY LOST OR CORRUPTED OR TEMPORARILY UNAVAILABLE DUE TO A VARIETY OF CAUSES, INCLUDING SOFTWARE FAILURES, PROTOCOL CHANGES BY THIRD PARTY PROVIDERS, INTERNET OUTAGES, FORCE MAJEURE EVENT OR OTHER DISASTERS, SCHEDULED OR UNSCHEDULED MAINTENANCE, OR OTHER CAUSES EITHER WITHIN OR OUTSIDE OUR CONTROL. YOU ARE SOLELY RESPONSIBLE FOR BACKING UP AND MAINTAINING DUPLICATE COPIES OF ANY INFORMATION YOU STORE OR TRANSFER THROUGH OUR SERVICES. "
                    ),
                    e.qZA(),
                    e.qZA(),
                    e._UZ(197, "br"),
                    e.TgZ(198, "h6"),
                    e._uU(199, "14. LIMITATION OF LIABILITY"),
                    e.qZA(),
                    e.TgZ(200, "div", 4),
                    e.TgZ(201, "p"),
                    e._uU(
                      202,
                      " EXCEPT AS OTHERWISE REQUIRED BY LAW, IN NO EVENT SHALL COMPANY, OUR DIRECTORS, MEMBERS, EMPLOYEES OR AGENTS BE LIABLE FOR ANY SPECIAL, INDIRECT OR CONSEQUENTIAL DAMAGES, OR ANY OTHER DAMAGES OF ANY KIND, INCLUDING BUT NOT LIMITED TO LOSS OF USE, LOSS OF PROFITS OR LOSS OF DATA, WHETHER IN AN ACTION IN CONTRACT, TORT (INCLUDING BUT NOT LIMITED TO NEGLIGENCE) OR OTHERWISE, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OF OR INABILITY TO USE OUR SERVICES OR THE COMPANY MATERIALS, INCLUDING WITHOUT LIMITATION ANY DAMAGES CAUSED BY OR RESULTING FROM RELIANCE BY ANY USER ON ANY INFORMATION OBTAINED FROM COMPANY, OR THAT RESULT FROM MISTAKES, OMISSIONS, INTERRUPTIONS, DELETION OF FILES OR EMAIL, ERRORS, DEFECTS, VIRUSES, DELAYS IN OPERATION OR TRANSMISSION OR ANY FAILURE OF PERFORMANCE, WHETHER OR NOT RESULTING FROM A FORCE MAJEURE EVENT, COMMUNICATIONS FAILURE, THEFT, DESTRUCTION OR UNAUTHORIZED ACCESS TO COMPANY\u2019S RECORDS, PROGRAMS OR SERVICES. "
                    ),
                    e.qZA(),
                    e.qZA(),
                    e._UZ(203, "br"),
                    e.TgZ(204, "h6"),
                    e._uU(205, "15. INDEMNITY"),
                    e.qZA(),
                    e.TgZ(206, "div", 4),
                    e.TgZ(207, "p"),
                    e._uU(
                      208,
                      " You agree to defend, indemnify and hold harmless Company (and each of our officers, directors, members, employees, agents and affiliates) from any claim, demand, action, damage, loss, cost or expense, including without limitation reasonable attorneys\u2019 fees, arising out or relating to: "
                    ),
                    e.qZA(),
                    e.TgZ(209, "ol", 5),
                    e.TgZ(210, "li"),
                    e._uU(
                      211,
                      " your use of, or conduct in connection with, our Services; "
                    ),
                    e.qZA(),
                    e.TgZ(212, "li"),
                    e._uU(213, " any Feedback you provide; "),
                    e.qZA(),
                    e.TgZ(214, "li"),
                    e._uU(215, " your violation of these Terms; or "),
                    e.qZA(),
                    e.TgZ(216, "li"),
                    e._uU(
                      217,
                      " your violation of any rights of any other person or entity. "
                    ),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e._UZ(218, "br"),
                    e.TgZ(219, "h6"),
                    e._uU(220, "16. MISCELLANEOUS"),
                    e.qZA(),
                    e.TgZ(221, "div", 4),
                    e.TgZ(222, "p"),
                    e._uU(223, " 16.1. "),
                    e.TgZ(224, "span", 6),
                    e._uU(225, "Entire Agreement; Order of Precedence."),
                    e.qZA(),
                    e._uU(
                      226,
                      " These Terms contain the entire agreement, and supersede all prior and contemporaneous understandings between the parties regarding the Services. These Terms do not alter the terms or conditions of any other electronic or written agreement you may have with Company for the Services or for any other Company product or service or otherwise. In the event of any conflict between these Terms and any other agreement you may have with Company, the terms of that other agreement will control only if these Terms are specifically identified and declared to be overridden by such other agreement. "
                    ),
                    e.qZA(),
                    e.TgZ(227, "p"),
                    e._uU(228, " 16.2. "),
                    e.TgZ(229, "span", 6),
                    e._uU(230, "Amendment."),
                    e.qZA(),
                    e._uU(
                      231,
                      " We reserve the right to make changes or modifications to these Terms from time to time, in our sole discretion. Amended Terms will become effective immediately on the date they are posted to the Services unless we state otherwise via our notice of such amended Terms. Any amended Terms will apply prospectively to use of the Services after such changes become effective. Your continued use of the Services following the effective date of such changes will constitute your acceptance of such changes. If you do not agree to any amended Terms, you must discontinue using the Services. "
                    ),
                    e.qZA(),
                    e.TgZ(232, "p"),
                    e._uU(233, " 16.3."),
                    e.TgZ(234, "span", 6),
                    e._uU(235, " Waiver."),
                    e.qZA(),
                    e._uU(
                      236,
                      " Our failure or delay in exercising any right, power or privilege under these Terms will not operate as a waiver thereof. "
                    ),
                    e.qZA(),
                    e.TgZ(237, "p"),
                    e._uU(238, " 16.4. "),
                    e.TgZ(239, "span", 6),
                    e._uU(240, "Severability."),
                    e.qZA(),
                    e._uU(
                      241,
                      " The invalidity or unenforceability of any of these Terms will not affect the validity or enforceability of any other of these Terms, all of which will remain in full force and effect. "
                    ),
                    e.qZA(),
                    e.TgZ(242, "p"),
                    e._uU(243, " 16.5. "),
                    e.TgZ(244, "span", 6),
                    e._uU(245, "Force Majeure Events."),
                    e.qZA(),
                    e._uU(
                      246,
                      " Company will not be liable for any loss or damage arising from any event beyond Company\u2019s reasonable control, including, but not limited to, flood, extraordinary weather conditions, earthquake, or other act of God, fire, war, insurrection, riot, labor dispute, accident, action of government, communications, power failure, or equipment or software malfunction (each, a \u201cForce Majeure Event\u201d). "
                    ),
                    e.qZA(),
                    e.TgZ(247, "p"),
                    e._uU(248, " 16.6. "),
                    e.TgZ(249, "span", 6),
                    e._uU(250, "Assignment."),
                    e.qZA(),
                    e._uU(
                      251,
                      " You may not assign or transfer any of your rights or obligations under these Terms without prior written consent from Company, including by operation of law or in connection with any change of control. Company may assign or transfer any or all of its rights under these Terms, in whole or in part, without obtaining your consent or approval. "
                    ),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e._UZ(252, "app-footer"));
                },
                directives: [g, _],
                styles: [""],
              })),
              n
            );
          })(),
        },
        {
          path: "Privacy-Policy",
          component: (() => {
            class n {
              constructor() {}
              ngOnInit() {}
            }
            return (
              (n.ɵfac = function (t) {
                return new (t || n)();
              }),
              (n.ɵcmp = e.Xpm({
                type: n,
                selectors: [["app-privacy-policy"]],
                decls: 201,
                vars: 0,
                consts: [
                  [1, "container"],
                  [1, "h5", "lwf"],
                  [1, "info-wrapper"],
                  [1, "border-bottom", "p-3"],
                  [1, "text-secondary", "text-justify"],
                  ["type", "a"],
                  [1, "text-dark"],
                  ["href", "/contact-us"],
                ],
                template: function (t, o) {
                  1 & t &&
                    (e._UZ(0, "app-header"),
                    e.TgZ(1, "section"),
                    e.TgZ(2, "div", 0),
                    e.TgZ(3, "div", 1),
                    e._uU(4, "Privacy Policy"),
                    e.qZA(),
                    e.TgZ(5, "p"),
                    e._uU(6, "Last updated: August 5, 2024"),
                    e.qZA(),
                    e.TgZ(7, "div", 2),
                    e.TgZ(8, "div", 3),
                    e.TgZ(9, "h6"),
                    e._uU(10, "PLEASE READ THE PRIVACY POLICY CAREFULLY."),
                    e.qZA(),
                    e.TgZ(11, "div", 4),
                    e.TgZ(12, "p"),
                    e._uU(
                      13,
                      " Luma AI (referred to as the \u201cCompany\u201d, \u201cagnus-scan\u201d, \u201cwe\u201d, \u201cour\u201d or \u201cus\u201d) is committed to the protection of your Personal Data and takes the matter of protecting your privacy as high priority. "
                    ),
                    e.qZA(),
                    e.qZA(),
                    e._UZ(14, "br"),
                    e.TgZ(15, "h6"),
                    e._uU(16, "1. TYPES OF DATA WE COLLECT"),
                    e.qZA(),
                    e.TgZ(17, "div", 4),
                    e.TgZ(18, "p"),
                    e._uU(
                      19,
                      " The types of Personal Data that we collect directly from you or from third parties depend on the circumstances of collection and on the nature of the service requested or transaction undertaken. It may include (but is not limited to): "
                    ),
                    e.qZA(),
                    e.TgZ(20, "ol", 5),
                    e.TgZ(21, "li"),
                    e._uU(
                      22,
                      " personal information that links back to an individual, e.g., name, gender, date of birth, and other personal identification numbers; "
                    ),
                    e.qZA(),
                    e.TgZ(23, "li"),
                    e._uU(
                      24,
                      " contact information, e.g., address, phone number and email address; "
                    ),
                    e.qZA(),
                    e.TgZ(25, "li"),
                    e._uU(
                      26,
                      " technical information, e.g., IP address for API services and login; "
                    ),
                    e.qZA(),
                    e.TgZ(27, "li"),
                    e._uU(28, " statistical data, e.g., hits to website. "),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(29, "p"),
                    e._uU(
                      30,
                      " This Privacy Policy covers the information we collect about you when you use our products or services, or otherwise interact with agnus-scan, unless a different privacy policy is displayed. This policy also explains your choices about how we use information about you. "
                    ),
                    e.qZA(),
                    e.TgZ(31, "p"),
                    e._uU(
                      32,
                      " Your choices include how you can object to certain uses of information about you and how you can access and update certain information about you. If you do not agree to the terms of this Policy, please do not use the Site, or any of our Services. Each time you use any Site, or any Services, the current version of this Privacy Policy will apply. "
                    ),
                    e.qZA(),
                    e.qZA(),
                    e._UZ(33, "br"),
                    e.TgZ(34, "h6"),
                    e._uU(35, "2. HOW DO WE COLLECT PERSONAL DATA?"),
                    e.qZA(),
                    e.TgZ(36, "div", 4),
                    e.TgZ(37, "p"),
                    e._uU(
                      38,
                      " This Privacy Policy covers any Personal Data provided to us: "
                    ),
                    e.qZA(),
                    e.TgZ(39, "ol", 5),
                    e.TgZ(40, "li"),
                    e._uU(
                      41,
                      " when you engage with our products and services;"
                    ),
                    e.qZA(),
                    e.TgZ(42, "li"),
                    e._uU(43, "when you create an account with us;"),
                    e.qZA(),
                    e.TgZ(44, "li"),
                    e._uU(
                      45,
                      "under any other contractual agreement or arrangement."
                    ),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(46, "p"),
                    e._uU(
                      47,
                      " Some of the other ways we may collect Personal Data shall include (but is not limited to): "
                    ),
                    e.qZA(),
                    e.TgZ(48, "ol", 5),
                    e.TgZ(49, "li"),
                    e._uU(
                      50,
                      " communications with you via telephone, letter, fax and email;"
                    ),
                    e.qZA(),
                    e.TgZ(51, "li"),
                    e._uU(52, "when you visit our website;"),
                    e.qZA(),
                    e.TgZ(53, "li"),
                    e._uU(54, "when you contact us in person;"),
                    e.qZA(),
                    e.TgZ(55, "li"),
                    e._uU(56, "when we contact you in person;"),
                    e.qZA(),
                    e.TgZ(57, "li"),
                    e._uU(
                      58,
                      " when we collect information about you from third parties; and other channels including our support helpdesk."
                    ),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e._UZ(59, "br"),
                    e.TgZ(60, "h6"),
                    e._uU(
                      61,
                      "3. HOW DO WE COLLECT YOUR PERSONAL DATA ON OUR WEBSITE?"
                    ),
                    e.qZA(),
                    e.TgZ(62, "div", 4),
                    e.TgZ(63, "p"),
                    e._uU(
                      64,
                      " From our website, we collect your Personal Data in the following ways: "
                    ),
                    e.qZA(),
                    e.TgZ(65, "ol", 5),
                    e.TgZ(66, "li"),
                    e.TgZ(67, "span", 6),
                    e._uU(68, "IP address"),
                    e.qZA(),
                    e.TgZ(69, "p"),
                    e._uU(
                      70,
                      "We use your IP address to help diagnose problems with our server, and to administer our website. "
                    ),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(71, "li"),
                    e.TgZ(72, "span", 6),
                    e._uU(73, "Cookies"),
                    e.qZA(),
                    e.TgZ(74, "p"),
                    e._uU(
                      75,
                      " A cookie is an element of data that a website can send to your browser, which may then store it on your system. We use cookies in some of our pages to store your preferences and record session information. "
                    ),
                    e.qZA(),
                    e.TgZ(76, "p"),
                    e._uU(
                      77,
                      " The information that we collect is then used to ensure a more personalized service level for our users. You can adjust settings on your browser so that you will be notified when you receive a cookie. Please refer to your browser documentation to check if cookies have been enabled on your computer or to request not to receive cookies. "
                    ),
                    e.qZA(),
                    e.TgZ(78, "p"),
                    e._uU(
                      79,
                      " As cookies allow you to take advantage of some of the Website\u2019s essential features, we recommend that you accept cookies. For instance, if you block or otherwise reject our cookies, you will not be able to use any products or services on the website that may require you to log-in (token holdings store cookies for favorite). "
                    ),
                    e.qZA(),
                    e.TgZ(80, "p"),
                    e._uU(
                      81,
                      " It is important that you prevent unauthorized access to your password and your computer. You should always log out after using a shared computer. Information collected from cookies is used by us to evaluate the effectiveness of our site, analyze trends, and manage the platform. The information collected from cookies allows us to determine such things as which parts of our site are most visited and difficulties our visitors may experience in accessing our site. "
                    ),
                    e.qZA(),
                    e.TgZ(82, "p"),
                    e._uU(
                      83,
                      " With this knowledge, we can improve the quality of your experience on the platform by recognizing and delivering more of the most desired features and information, as well as by resolving access difficulties. We also use cookies and/or a technology known as web bugs or clear gifs, which are typically stored in emails to help us confirm your receipt of, and response to our emails and to provide you with a more personalized experience when using our site. Your continued use of this site, as well as any subsequent usage, will be interpreted as your consent to cookies being stored on your device. "
                    ),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(84, "li"),
                    e.TgZ(85, "span", 6),
                    e._uU(86, "User feedback form"),
                    e.qZA(),
                    e.TgZ(87, "p"),
                    e._uU(
                      88,
                      " Our feedback form requires you to give us contact information (e.g. your name and email address) so that we can respond to your comments. We use your contact information from the registration form to send you information about our company. Your contact information is also used to contact you where necessary. "
                    ),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(89, "li"),
                    e.TgZ(90, "span", 6),
                    e._uU(91, "General Site tracking"),
                    e.qZA(),
                    e.TgZ(92, "p"),
                    e._uU(
                      93,
                      " We also use third party service provider(s), to assist us in better understanding the use of our site. Our service provider(s) will place cookies on the hard drive of your computer and will receive information that we select, for example, how visitors navigate around our site, what pages are browsed and general transaction information. Our service provider(s) analyzes this information and provides us with aggregate reports. "
                    ),
                    e.qZA(),
                    e.TgZ(94, "p"),
                    e._uU(
                      95,
                      " The information and analysis provided by our service provider(s) will be used to assist us in better understanding our visitors' interests in our site and how to better serve those interests. The information collected by our service provider(s) may be linked to and combined with information that we collect about you while you are using the platform. Our service provider(s) is/are contractually restricted from using information they receive from our Site other than to assist us. "
                    ),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(96, "li"),
                    e.TgZ(97, "span", 6),
                    e._uU(98, "Web Server site visits logging"),
                    e.qZA(),
                    e.TgZ(99, "p"),
                    e._uU(
                      100,
                      " The following is how we store the web server site visit logs (applicable to https://agnus-scan.io): "
                    ),
                    e.qZA(),
                    e.TgZ(101, "ol"),
                    e.TgZ(102, "li"),
                    e._uU(
                      103,
                      " To throttle the rate of requests and prevent certain types of attacks against us, we track the incoming IP addresses for very short periods of time and is then released. "
                    ),
                    e.qZA(),
                    e.TgZ(104, "li"),
                    e._uU(
                      105,
                      " By default, we do NOT store identifiable 'x-forwarded-for' originating IPs during your site visit in the Web Server site visits logs. "
                    ),
                    e.qZA(),
                    e.TgZ(106, "li"),
                    e._uU(
                      107,
                      " However in the event of certain types of third-party attacks, general server/application troubleshooting or other related reasons, we might temporarily activate the 'x-forwarded-for' logging. "
                    ),
                    e.qZA(),
                    e.TgZ(108, "li"),
                    e._uU(
                      109,
                      " As part of our routine server maintenance, all raw web server site visit logs are retained for a minimum of 5 days only and then purged on an automated scheduled basis. "
                    ),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e._UZ(110, "br"),
                    e.TgZ(111, "h6"),
                    e._uU(112, "4.WHAT DO WE USE YOUR PERSONAL DATA FOR?"),
                    e.qZA(),
                    e.TgZ(113, "div", 4),
                    e.TgZ(114, "p"),
                    e._uU(
                      115,
                      " We may use your Personal Data for the following purposes: "
                    ),
                    e.qZA(),
                    e.TgZ(116, "ol", 5),
                    e.TgZ(117, "li"),
                    e._uU(
                      118,
                      "to enable us to provide our services and perform our services to you;"
                    ),
                    e.qZA(),
                    e.TgZ(119, "li"),
                    e._uU(
                      120,
                      " to protect the safety and well being of yourself and/or other customers;"
                    ),
                    e.qZA(),
                    e.TgZ(121, "li"),
                    e._uU(
                      122,
                      " to investigate and respond to claims and inquiries from you;"
                    ),
                    e.qZA(),
                    e.TgZ(123, "li"),
                    e._uU(
                      124,
                      "for business development purposes such as statistical and marketing analysis, systems testing, maintenance and development, customer surveys or to help us in any future dealings with you, for example by identifying your requirements and preference;"
                    ),
                    e.qZA(),
                    e.TgZ(125, "li"),
                    e._uU(
                      126,
                      "to comply with any legal or regulatory requirements; and/ or"
                    ),
                    e.qZA(),
                    e.TgZ(127, "li"),
                    e._uU(
                      128,
                      "for all other purposes ancillary to any of the purposes stated above."
                    ),
                    e.TgZ(129, "span", 6),
                    e._uU(130, '("Core Purposes")'),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(131, "li"),
                    e._uU(
                      132,
                      " to communicate offers, product, services and information on products and activities;"
                    ),
                    e.qZA(),
                    e.TgZ(133, "li"),
                    e._uU(
                      134,
                      "marketing/cross-marketing and communicating with you in relation to products and services offered by us and our service partners as well as our appointed agents; and/or"
                    ),
                    e.qZA(),
                    e.TgZ(135, "li"),
                    e._uU(
                      136,
                      "for all other purposes ancillary to any of the purposes stated above."
                    ),
                    e._UZ(137, "br"),
                    e.TgZ(138, "span", 6),
                    e._uU(139, '("Ancillary Purposes")'),
                    e._UZ(140, "br"),
                    e._uU(141, '(collectively, "Purposes")'),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e._UZ(142, "br"),
                    e.TgZ(143, "h6"),
                    e._uU(
                      144,
                      "5. ACCESSING / CORRECTING / UPDATING YOUR PERSONAL DATA"
                    ),
                    e.qZA(),
                    e.TgZ(145, "div", 4),
                    e.TgZ(146, "p"),
                    e._uU(
                      147,
                      " You may request to obtain information of your personal data and also update or make amendments to your personal data as below: (a) for online registered customers, you may login to your online account and update your personal data. "
                    ),
                    e.qZA(),
                    e.TgZ(148, "p"),
                    e._uU(
                      149,
                      " Please note that depending on the information requested, a nominal fee may be charged and/or backed by the luma signed message. We will endeavour to provide the information back to you as soon as practicable. However we also reserve the right to validate all requests for the authenticity of the request. "
                    ),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(150, "h6"),
                    e._uU(151, "6. WITHDRAWING CONSENT"),
                    e.qZA(),
                    e.TgZ(152, "div", 4),
                    e.TgZ(153, "p"),
                    e._uU(
                      154,
                      " Please note that it is obligatory for the Company to process your Personal Data for the Core Purpose as stated above, without which some services or features provided by Luma-AImay be affected. "
                    ),
                    e.qZA(),
                    e.TgZ(155, "p"),
                    e._uU(
                      156,
                      " If we do not have your consent to process your Personal Data for the Ancillary Purposes, we will not be able to keep you updated about our future, new and/or enhanced services and products. Nevertheless, you may stop receiving promotional activities by: "
                    ),
                    e.qZA(),
                    e.TgZ(157, "ol", 5),
                    e.TgZ(158, "li"),
                    e._uU(159, " unsubscribing from the mailing list;"),
                    e.qZA(),
                    e.TgZ(160, "li"),
                    e._uU(
                      161,
                      "editing the relevant account settings to unsubscribe; or"
                    ),
                    e.qZA(),
                    e.TgZ(162, "li"),
                    e._uU(163, " sending a request via "),
                    e.TgZ(164, "a", 7),
                    e._uU(165, "Contact Us."),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e._UZ(166, "br"),
                    e.TgZ(167, "h6"),
                    e._uU(168, "7. TO WHOM DO WE DISCLOSE YOUR PERSONAL DATA?"),
                    e.qZA(),
                    e.TgZ(169, "div", 4),
                    e.TgZ(170, "p"),
                    e._uU(
                      171,
                      " We will not trade or sell your Personal Data to third parties. Your Personal Data shall only be disclosed or transferred to the following third parties appointed or authorised by the Company for the fulfilment of the Purpose of: (a) data warehouses; (b) IT service providers; (c) data analytics and/or marketing agency; (d) legal bodies as permitted or required by law such as in compliance with a warrant or subpoena issued by a court of competent jurisdiction; and/or (e) regulatory authorities applicable to you; and/or (f) safety and security personnel. "
                    ),
                    e.qZA(),
                    e.TgZ(172, "p"),
                    e._uU(
                      173,
                      " In addition to the above, your Personal Data may also be disclosed or transferred to any of the Company\u2019s actual and potential assignee, transferee or acquirer (including our affiliates and subsidiaries) or our business, assets or group companies, or in connection with any corporate restructuring or exercise including the our restructuring to transfer the business, assets and/or liabilities. "
                    ),
                    e.qZA(),
                    e.TgZ(174, "p"),
                    e._uU(
                      175,
                      " We shall take practical steps to ensure that their employees, officers, agents, consultants, contractors and such other third parties mentioned above who are involved in the collection, use and disclosure of your Personal Data will observe and adhere to the terms of this Privacy Statement. "
                    ),
                    e.qZA(),
                    e.qZA(),
                    e._UZ(176, "br"),
                    e.TgZ(177, "h6"),
                    e._uU(
                      178,
                      "8. HOW LONG WILL WE RETAIN YOUR PERSONAL DATA?"
                    ),
                    e.qZA(),
                    e.TgZ(179, "div", 4),
                    e.TgZ(180, "p"),
                    e._uU(
                      181,
                      " The Company stores data in global hosting provider with servers across regions and we shall take all reasonable steps to ensure that all Personal Data is destroyed or permanently deleted when no longer required for the Purpose and prepare a disposal schedule for inactive data after 24 month period. "
                    ),
                    e.qZA(),
                    e.qZA(),
                    e._UZ(182, "br"),
                    e.TgZ(183, "h6"),
                    e._uU(184, "9. LINKS TO THIRD PARTY WEBSITES"),
                    e.qZA(),
                    e.TgZ(185, "div", 4),
                    e.TgZ(186, "p"),
                    e._uU(
                      187,
                      " We may link this website and/or our applications to other companies\u2019 or organizations\u2019 websites (collectively, \u201cThird Party Sites\u201d). This Privacy Notice does not apply to such Third Party Sites as those sites are outside our control. If you access Third Party Sites using the links provided, the operators of these sites may collect your personal information. "
                    ),
                    e.qZA(),
                    e.TgZ(188, "p"),
                    e._uU(
                      189,
                      " Please ensure that you are satisfied with the privacy statements of these Third Party Sites before you submit any personal information. We try, as far as we can, to ensure that all third party linked sites have equivalent measures for protection of your personal information, but we cannot be held responsible legally or otherwise for the activities, privacy policies or levels of privacy compliance of these Third Party Sites. "
                    ),
                    e.qZA(),
                    e.qZA(),
                    e._UZ(190, "br"),
                    e.TgZ(191, "h6"),
                    e._uU(192, "10. ADDITIONAL INFORMATION OR ASSISTANCE"),
                    e.qZA(),
                    e.TgZ(193, "div", 4),
                    e.TgZ(194, "p"),
                    e._uU(
                      195,
                      " Please note that this Privacy Statement may be amended from time to time in accordance to applicable laws and regulations and such variations may be applicable to you. "
                    ),
                    e.qZA(),
                    e.TgZ(196, "p"),
                    e._uU(
                      197,
                      " For further inquiries or complaints in relation to our handling of your Personal Data or our Privacy Policy or wish to access, update or amend your Personal Data as mentioned above please contact us via our feedback form at "
                    ),
                    e.TgZ(198, "a", 7),
                    e._uU(199, "Contact Us."),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e._UZ(200, "app-footer"));
                },
                directives: [g, _],
                styles: [""],
              })),
              n
            );
          })(),
        },
        {
          path: "contact-us",
          component: (() => {
            class n {
              constructor(t, o, a) {
                (this.conn = t),
                  (this.route = o),
                  (this.alert = a),
                  (this.loader = !1);
              }
              ngOnInit() {}
              executeAction(t) {
                (this.loader = !0),
                  this.conn
                    .postUrl("basic/contact_us", t.value)
                    .subscribe((a) => {
                      1 == a.success
                        ? (this.alert.success(a.msg, "", { timeOut: 2e3 }),
                          t.resetForm())
                        : (this.alert.error(a.msg, "", { timeOut: 2e3 }),
                          t.resetForm()),
                        (this.loader = !1);
                    });
              }
            }
            return (
              (n.ɵfac = function (t) {
                return new (t || n)(e.Y36(h), e.Y36(u.F0), e.Y36(A._W));
              }),
              (n.ɵcmp = e.Xpm({
                type: n,
                selectors: [["app-contact-us"]],
                decls: 36,
                vars: 17,
                consts: [
                  [4, "ngIf"],
                  [1, "container"],
                  [1, "info-wrapper"],
                  [1, "border-bottom", "white-bg", "p-4"],
                  [1, "row", "align-items-center"],
                  [1, "col-md-6"],
                  ["autocomplete", "off", "novalidate", "", 1, "site-form"],
                  ["contact_us", "ngForm"],
                  [1, "form-group"],
                  [
                    "type",
                    "text",
                    "placeholder",
                    "Name",
                    "name",
                    "name",
                    "ngModel",
                    "",
                    "required",
                    "",
                    1,
                    "form-control",
                    3,
                    "minlength",
                    "maxlength",
                  ],
                  ["n", "ngModel"],
                  ["class", "errMsg", 4, "ngIf"],
                  [
                    "type",
                    "email",
                    "name",
                    "email",
                    "placeholder",
                    "Enter email",
                    "ngModel",
                    "",
                    "required",
                    "",
                    "pattern",
                    "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",
                    1,
                    "form-control",
                    3,
                    "placeholder",
                  ],
                  ["e", "ngModel"],
                  [
                    "type",
                    "text",
                    "placeholder",
                    "Enter Subject",
                    "name",
                    "subject",
                    "ngModel",
                    "",
                    "required",
                    "",
                    1,
                    "form-control",
                  ],
                  ["s", "ngModel"],
                  [
                    "type",
                    "text",
                    "placeholder",
                    "Write Message",
                    "name",
                    "content",
                    "rows",
                    "5",
                    "ngModel",
                    "",
                    "required",
                    "",
                    1,
                    "form-control",
                    "h-100",
                  ],
                  ["t", "ngModel"],
                  [1, "form-group", "mb-5", "mt-3"],
                  [
                    "type",
                    "submit",
                    1,
                    "btn",
                    "btn-block",
                    "blue-btn",
                    "btn-lg",
                    "w-f",
                    "text-uppercase",
                    3,
                    "disabled",
                    "click",
                  ],
                  [1, "errMsg"],
                  ["class", "error", 4, "ngIf"],
                  [1, "error"],
                ],
                template: function (t, o) {
                  if (1 & t) {
                    const a = e.EpF();
                    e.YNc(0, Br, 1, 0, "app-loader", 0),
                      e._UZ(1, "app-header"),
                      e.TgZ(2, "section"),
                      e.TgZ(3, "div", 1),
                      e.TgZ(4, "div", 2),
                      e.TgZ(5, "div", 3),
                      e.TgZ(6, "div", 4),
                      e.TgZ(7, "div", 5),
                      e.TgZ(8, "h1"),
                      e._uU(9, "Contact Us"),
                      e.qZA(),
                      e.TgZ(10, "p"),
                      e._uU(
                        11,
                        " If you\u2019re considering any of the luma scan solutions or just want more information, simply fill out the form and we\u2019ll be in touch. "
                      ),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(12, "div", 5),
                      e.TgZ(13, "form", 6, 7),
                      e.TgZ(15, "div", 8),
                      e._UZ(16, "input", 9, 10),
                      e.YNc(18, Gr, 3, 2, "div", 11),
                      e.qZA(),
                      e.TgZ(19, "div", 8),
                      e._UZ(20, "input", 12, 13),
                      e.YNc(22, $r, 3, 2, "div", 11),
                      e.qZA(),
                      e.TgZ(23, "div", 8),
                      e._UZ(24, "input", 14, 15),
                      e.YNc(26, Kr, 2, 1, "div", 11),
                      e.qZA(),
                      e.TgZ(27, "div", 8),
                      e.TgZ(28, "textarea", 16, 17),
                      e._uU(30, "                        "),
                      e.qZA(),
                      e.YNc(31, ts, 2, 1, "div", 11),
                      e.qZA(),
                      e.TgZ(32, "div", 18),
                      e.TgZ(33, "button", 19),
                      e.NdJ("click", function () {
                        e.CHM(a);
                        const s = e.MAs(14);
                        return o.executeAction(s);
                      }),
                      e._uU(34, "Submit"),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e._UZ(35, "app-footer");
                  }
                  if (2 & t) {
                    const a = e.MAs(14),
                      r = e.MAs(17),
                      s = e.MAs(21),
                      c = e.MAs(25),
                      d = e.MAs(29);
                    e.Q6J("ngIf", o.loader),
                      e.xp6(16),
                      e.ekj("is-invalid", r.invalid && r.touched),
                      e.Q6J("minlength", 8)("maxlength", 20),
                      e.xp6(2),
                      e.Q6J(
                        "ngIf",
                        r.errors && (r.valid || r.touched || a.submitted)
                      ),
                      e.xp6(2),
                      e.ekj("is-invalid", s.invalid && s.touched),
                      e.s9C("placeholder", "Enter Email"),
                      e.xp6(2),
                      e.Q6J(
                        "ngIf",
                        s.errors && (s.valid || s.touched || a.submitted)
                      ),
                      e.xp6(2),
                      e.ekj("is-invalid", c.invalid && c.touched),
                      e.xp6(2),
                      e.Q6J(
                        "ngIf",
                        c.errors && (c.valid || c.touched || a.submitted)
                      ),
                      e.xp6(2),
                      e.ekj("is-invalid", d.invalid && d.touched),
                      e.xp6(3),
                      e.Q6J(
                        "ngIf",
                        d.errors && (d.valid || d.touched || a.submitted)
                      ),
                      e.xp6(2),
                      e.Q6J("disabled", a.invalid);
                  }
                },
                directives: [
                  p.O5,
                  g,
                  l._Y,
                  l.JL,
                  l.F,
                  l.Fj,
                  l.JJ,
                  l.On,
                  l.Q7,
                  l.wO,
                  l.nD,
                  l.c5,
                  _,
                  f,
                ],
                styles: [""],
              })),
              n
            );
          })(),
        },
        {
          path: "faq",
          component: (() => {
            class n {
              constructor() {}
              ngOnInit() {}
            }
            return (
              (n.ɵfac = function (t) {
                return new (t || n)();
              }),
              (n.ɵcmp = e.Xpm({
                type: n,
                selectors: [["app-faq"]],
                decls: 111,
                vars: 0,
                consts: [
                  [1, "container"],
                  [1, "text-center", "my-4", "h5", "lwf"],
                  ["id", "accordion"],
                  [1, "card"],
                  ["id", "headingOne1", 1, "card-header"],
                  [1, "mb-0"],
                  [
                    "data-toggle",
                    "collapse",
                    "data-target",
                    "#collapseOne1",
                    "aria-expanded",
                    "true",
                    "aria-controls",
                    "collapseOne1",
                    1,
                    "btn",
                    "btn-link",
                  ],
                  [
                    "id",
                    "collapseOne1",
                    "aria-labelledby",
                    "headingOne1",
                    "data-parent",
                    "#accordion",
                    1,
                    "collapse",
                    "hide",
                  ],
                  [1, "card-body"],
                  ["id", "headingOne", 1, "card-header"],
                  [
                    "data-toggle",
                    "collapse",
                    "data-target",
                    "#collapseOne",
                    "aria-expanded",
                    "true",
                    "aria-controls",
                    "collapseOne",
                    1,
                    "btn",
                    "btn-link",
                  ],
                  [
                    "id",
                    "collapseOne",
                    "aria-labelledby",
                    "headingOne",
                    "data-parent",
                    "#accordion",
                    1,
                    "collapse",
                    "hide",
                  ],
                  ["id", "headingTwo", 1, "card-header"],
                  [
                    "data-toggle",
                    "collapse",
                    "data-target",
                    "#collapseTwo",
                    "aria-expanded",
                    "false",
                    "aria-controls",
                    "collapseTwo",
                    1,
                    "btn",
                    "btn-link",
                    "collapsed",
                  ],
                  [
                    "id",
                    "collapseTwo",
                    "aria-labelledby",
                    "headingTwo",
                    "data-parent",
                    "#accordion",
                    1,
                    "collapse",
                  ],
                  ["id", "headingThree", 1, "card-header"],
                  [
                    "data-toggle",
                    "collapse",
                    "data-target",
                    "#collapseThree",
                    "aria-expanded",
                    "false",
                    "aria-controls",
                    "collapseThree",
                    1,
                    "btn",
                    "btn-link",
                    "collapsed",
                  ],
                  [
                    "id",
                    "collapseThree",
                    "aria-labelledby",
                    "headingThree",
                    "data-parent",
                    "#accordion",
                    1,
                    "collapse",
                  ],
                ],
                template: function (t, o) {
                  1 & t &&
                    (e._UZ(0, "app-header"),
                    e.TgZ(1, "section"),
                    e.TgZ(2, "div", 0),
                    e.TgZ(3, "div", 1),
                    e._uU(4, "FAQ"),
                    e.qZA(),
                    e.TgZ(5, "div", 2),
                    e.TgZ(6, "h5"),
                    e._uU(7, "About agnus-scan"),
                    e.qZA(),
                    e.TgZ(8, "div", 3),
                    e.TgZ(9, "div", 4),
                    e.TgZ(10, "h5", 5),
                    e.TgZ(11, "button", 6),
                    e._uU(12, " What if I lose my private key "),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(13, "div", 7),
                    e.TgZ(14, "div", 8),
                    e.TgZ(15, "p"),
                    e._uU(
                      16,
                      "Luma-AIserves as the blockchain explorer of agnus, and only displays information on transactions that take place on the luma public chain. Please note:"
                    ),
                    e.qZA(),
                    e.TgZ(17, "ul"),
                    e.TgZ(18, "li"),
                    e._uU(19, "We do not store your private key"),
                    e.qZA(),
                    e.TgZ(20, "li"),
                    e._uU(21, "We do not process or control your transactions"),
                    e.qZA(),
                    e.qZA(),
                    e._uU(
                      22,
                      " Once your private key is lost, it cannot be retrieved. Please keep your private key carefully. "
                    ),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(23, "h5"),
                    e._uU(24, "Basic Guide"),
                    e.qZA(),
                    e.TgZ(25, "div", 3),
                    e.TgZ(26, "div", 9),
                    e.TgZ(27, "h5", 5),
                    e.TgZ(28, "button", 10),
                    e._uU(
                      29,
                      " What should I do if the receiving address did not get the funds "
                    ),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(30, "div", 11),
                    e.TgZ(31, "div", 8),
                    e.TgZ(32, "p"),
                    e._uU(
                      33,
                      "First, please make sure your transaction is completed."
                    ),
                    e.qZA(),
                    e._uU(
                      34,
                      " In normal cases, when a transaction is completed, the amount transferred should go to the designated receiving address. If the receiving address did not receive the funds, it might be due to a temporary delay caused by network congestion. Please wait patiently for a while before refreshing the session and confirm your transfer. "
                    ),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(35, "div", 3),
                    e.TgZ(36, "div", 12),
                    e.TgZ(37, "h5", 5),
                    e.TgZ(38, "button", 13),
                    e._uU(39, " How to refund a transaction "),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(40, "div", 14),
                    e.TgZ(41, "div", 8),
                    e.TgZ(42, "p"),
                    e._uU(43, "A refund request usually occurs when:"),
                    e.qZA(),
                    e.TgZ(44, "ul"),
                    e.TgZ(45, "li"),
                    e._uU(46, "Tokens have been sent to the wrong address"),
                    e.qZA(),
                    e.TgZ(47, "li"),
                    e._uU(48, "Wrong number of tokens has been sent"),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(49, "p"),
                    e._uU(
                      50,
                      " Due to the irreversibility of the blockchain, completed transactions are non-cancelable and irreversible. As a result, should the above scenarios happen, it is very likely that you'll never retrieve your lost funds. Unless you know the owner of the receiving address, who's the only one that can refund your money, there's no other way to get your funds back. "
                    ),
                    e.qZA(),
                    e.TgZ(51, "p"),
                    e._uU(
                      52,
                      " In addition, Luma-AIserves as the blockchain explorer of agnus, and only displays information on transactions that take place on the luma public chain. Please note: "
                    ),
                    e.qZA(),
                    e.TgZ(53, "ul"),
                    e.TgZ(54, "li"),
                    e._uU(55, "We do not store your private key"),
                    e.qZA(),
                    e.TgZ(56, "li"),
                    e._uU(57, "We do not process or control your transactions"),
                    e.qZA(),
                    e.TgZ(58, "li"),
                    e._uU(59, "We are unable to refund your transactions"),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(60, "p"),
                    e._uU(
                      61,
                      " Before you proceed with the transaction, please double check and make sure all the information you've entered regarding this transaction is correct. This is very important. "
                    ),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(62, "h5"),
                    e._uU(63, "Super Representative"),
                    e.qZA(),
                    e.TgZ(64, "div", 3),
                    e.TgZ(65, "div", 15),
                    e.TgZ(66, "h5", 5),
                    e.TgZ(67, "button", 16),
                    e._uU(68, " What are Super Representatives\uff1f "),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(69, "div", 17),
                    e.TgZ(70, "div", 8),
                    e.TgZ(71, "p"),
                    e.TgZ(72, "b"),
                    e._uU(
                      73,
                      "Token holders in the luma community fall into the following categories"
                    ),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(74, "ol"),
                    e.TgZ(75, "li"),
                    e._uU(
                      76,
                      "Token holder: Individual holding any amount of agnus."
                    ),
                    e.qZA(),
                    e.TgZ(77, "li"),
                    e._uU(
                      78,
                      "Super Representative candidate: 100 individuals elected through voting by the entire token holder community. Votes are updated once every 6 hours."
                    ),
                    e.qZA(),
                    e.TgZ(79, "li"),
                    e._uU(
                      80,
                      "Super Representative: 27 individuals elected through voting by all token holders every 6 hours. Super Representatives play a key role in governing the luma community by ensuring basic functions, e.g. block generation and bookkeeping, and obtain corresponding earnings."
                    ),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(81, "p"),
                    e._uU(
                      82,
                      "Super Representatives and Super Representative candidates are subject to monitoring and selection by all token holders every 6 hours."
                    ),
                    e.qZA(),
                    e._UZ(83, "br"),
                    e.TgZ(84, "p"),
                    e.TgZ(85, "b"),
                    e._uU(86, "Rewards"),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(87, "p"),
                    e._uU(
                      88,
                      "Candidate reward: 127 candidates updated once every 6 hours will share 115200 agnus. The reward will be split in accordance with the votes each candidate receives. Each year, the Total reward of candidates will be 168192,000 luma each year."
                    ),
                    e.qZA(),
                    e.TgZ(89, "p"),
                    e._uU(
                      90,
                      "Super Representative reward: The Luma Protocol network will generate one block every 3 seconds, with each block awarding 32 Luma to super representatives. A total of 336,384,000 luma will be awarded annually to twenty-seven super representatives."
                    ),
                    e.qZA(),
                    e.TgZ(91, "p"),
                    e._uU(
                      92,
                      " There will be no inflation on the agnus network before November 1, 2024, and the Luma Foundation will award all block rewards and candidate rewards prior to that date. "
                    ),
                    e.qZA(),
                    e._UZ(93, "br"),
                    e.TgZ(94, "p"),
                    e.TgZ(95, "b"),
                    e._uU(96, "Super Representatives\u2019 information"),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(97, "p"),
                    e._uU(
                      98,
                      " Users can get SR information from luma blockchain explorer, the detailed information shown as below: "
                    ),
                    e.qZA(),
                    e.TgZ(99, "p"),
                    e._uU(100, " The account address of the delegate."),
                    e._UZ(101, "br"),
                    e._uU(102, " The total votes that the delegate received."),
                    e._UZ(103, "br"),
                    e._uU(104, " The URL of personal website."),
                    e._UZ(105, "br"),
                    e._uU(
                      106,
                      " The total of blocks produced by the delegate."
                    ),
                    e._UZ(107, "br"),
                    e._uU(108, " The total missed blocks of the delegate."),
                    e._UZ(109, "br"),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e._UZ(110, "app-footer"));
                },
                directives: [g, _],
                styles: [""],
              })),
              n
            );
          })(),
        },
        {
          path: "user-guide",
          component: (() => {
            class n {
              constructor() {}
              ngOnInit() {}
            }
            return (
              (n.ɵfac = function (t) {
                return new (t || n)();
              }),
              (n.ɵcmp = e.Xpm({
                type: n,
                selectors: [["app-user-manual"]],
                decls: 23,
                vars: 0,
                consts: [
                  [1, "container"],
                  [1, "h5", "lwf"],
                  [1, "info-wrapper"],
                  [1, "border-bottom", "p-3"],
                  [1, "text-justify"],
                ],
                template: function (t, o) {
                  1 & t &&
                    (e._UZ(0, "app-header"),
                    e.TgZ(1, "section"),
                    e.TgZ(2, "div", 0),
                    e.TgZ(3, "div", 1),
                    e._uU(4, "USER GUIDE"),
                    e.qZA(),
                    e.TgZ(5, "div", 2),
                    e.TgZ(6, "div"),
                    e.TgZ(7, "div", 3),
                    e.TgZ(8, "h5"),
                    e._uU(9, "What is Lorem Ipsum?"),
                    e.qZA(),
                    e.TgZ(10, "p", 4),
                    e._uU(
                      11,
                      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
                    ),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(12, "div", 3),
                    e.TgZ(13, "h5"),
                    e._uU(14, "Why do we use it?"),
                    e.qZA(),
                    e.TgZ(15, "p", 4),
                    e._uU(
                      16,
                      ' Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. '
                    ),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(17, "div", 3),
                    e.TgZ(18, "h5"),
                    e._uU(19, "Where does it come from?"),
                    e.qZA(),
                    e.TgZ(20, "p", 4),
                    e._uU(
                      21,
                      " Every day, luma supporters from around the world use the Luma-AIblock explorer, where they can query the details of the transaction and experience the latest features of agnus. "
                    ),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e._UZ(22, "app-footer"));
                },
                directives: [g, _],
                styles: [""],
              })),
              n
            );
          })(),
        },
        {
          path: "white-paper",
          component: (() => {
            class n {
              constructor() {}
              ngOnInit() {}
            }
            return (
              (n.ɵfac = function (t) {
                return new (t || n)();
              }),
              (n.ɵcmp = e.Xpm({
                type: n,
                selectors: [["app-whitepaper"]],
                decls: 18,
                vars: 0,
                consts: [
                  [1, "container"],
                  [1, "h5", "lwf"],
                  [1, "info-wrapper"],
                  [1, "border-bottom", "p-3"],
                  [1, "text-justify"],
                ],
                template: function (t, o) {
                  1 & t &&
                    (e._UZ(0, "app-header"),
                    e.TgZ(1, "section"),
                    e.TgZ(2, "div", 0),
                    e.TgZ(3, "div", 1),
                    e._uU(4, "White paper"),
                    e.qZA(),
                    e.TgZ(5, "div", 2),
                    e.TgZ(6, "div"),
                    e.TgZ(7, "div", 3),
                    e.TgZ(8, "h5"),
                    e._uU(9, "What is Lorem Ipsum?"),
                    e.qZA(),
                    e.TgZ(10, "p", 4),
                    e._uU(
                      11,
                      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
                    ),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(12, "div", 3),
                    e.TgZ(13, "h5"),
                    e._uU(14, "Why do we use it?"),
                    e.qZA(),
                    e.TgZ(15, "p", 4),
                    e._uU(
                      16,
                      ' Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. '
                    ),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e._UZ(17, "app-footer"));
                },
                directives: [g, _],
                styles: [""],
              })),
              n
            );
          })(),
        },
        {
          path: "brand-assets",
          component: (() => {
            class n {
              constructor() {}
              ngOnInit() {}
            }
            return (
              (n.ɵfac = function (t) {
                return new (t || n)();
              }),
              (n.ɵcmp = e.Xpm({
                type: n,
                selectors: [["app-brand-assets"]],
                decls: 56,
                vars: 0,
                consts: [
                  [1, "container"],
                  [1, "h5", "lwf"],
                  [1, "info-wrapper"],
                  [1, "border-bottom", "p-3"],
                  [1, "text-secondary", "text-justify"],
                  ["href", "/terms-&-condition"],
                  ["href", "/contact-us"],
                ],
                template: function (t, o) {
                  1 & t &&
                    (e._UZ(0, "app-header"),
                    e.TgZ(1, "section"),
                    e.TgZ(2, "div", 0),
                    e.TgZ(3, "div", 1),
                    e._uU(4, "agnus-scanBrand Assets :-"),
                    e.qZA(),
                    e.TgZ(5, "div"),
                    e.TgZ(6, "p"),
                    e._uU(
                      7,
                      " Thank you for your support and loving our work. Below, we have provided a few guidelines for using our brand assets. "
                    ),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(8, "div", 2),
                    e.TgZ(9, "div"),
                    e.TgZ(10, "div", 3),
                    e.TgZ(11, "h5"),
                    e._uU(12, "Our Brand Name"),
                    e.qZA(),
                    e.TgZ(13, "p", 4),
                    e._uU(
                      14,
                      ' "agnus-scan" is one word and spelled with a capital agnus. '
                    ),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(15, "div", 3),
                    e.TgZ(16, "h5"),
                    e._uU(17, "Branding Guidelines"),
                    e.qZA(),
                    e.TgZ(18, "div", 4),
                    e.TgZ(19, "h6"),
                    e._uU(
                      20,
                      "You may use the Luma-AIname and logo in your website or app as long as you adhere to the Luma-AIbranding guidelines."
                    ),
                    e.qZA(),
                    e.TgZ(21, "ul"),
                    e.TgZ(22, "li"),
                    e._uU(
                      23,
                      "Do not alter the Luma-AIlogo and the logo is intended to be used as provided. "
                    ),
                    e.qZA(),
                    e.TgZ(24, "li"),
                    e._uU(
                      25,
                      "Do not combine Luma-AIlogo with other images without consent. "
                    ),
                    e.qZA(),
                    e.TgZ(26, "li"),
                    e._uU(
                      27,
                      'Do not use the Luma-AIbrand in any way that implies a relationship, affiliation, or endorsement. For example, "we partner with Luma AI" '
                    ),
                    e.qZA(),
                    e.TgZ(28, "li"),
                    e._uU(29, "Do reference Luma-AIas follow "),
                    e.TgZ(30, "ul"),
                    e.TgZ(31, "li"),
                    e._uU(32, '"Powered by agnus-scan"'),
                    e.qZA(),
                    e.TgZ(33, "li"),
                    e._uU(34, '"Data provided by agnus-scan"'),
                    e.qZA(),
                    e.TgZ(35, "li"),
                    e._uU(36, '"Source: agnus-scan"'),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(37, "li"),
                    e._uU(
                      38,
                      "Do not use the Luma-AIbrand in conjunction with any illegal and unlawful activity, promotion, and product. "
                    ),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(39, "div", 3),
                    e.TgZ(40, "h5"),
                    e._uU(41, "Downloads"),
                    e.qZA(),
                    e.TgZ(42, "p", 4),
                    e._uU(
                      43,
                      " We like to keep things simple. So we have put together a package for the brand assets that you can download and use in your website or app. "
                    ),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(44, "div", 3),
                    e.TgZ(45, "h5"),
                    e._uU(46, "Agreement"),
                    e.qZA(),
                    e.TgZ(47, "p", 4),
                    e._uU(
                      48,
                      " By using our brand assets, you agree to adhere to our Branding Guidelines as well as our "
                    ),
                    e.TgZ(49, "a", 5),
                    e._uU(50, "Terms and Conditions"),
                    e.qZA(),
                    e._uU(
                      51,
                      ". For further information about use of the Luma-AIname that is not covered by the Branding Guidelines, please "
                    ),
                    e.TgZ(52, "a", 6),
                    e._uU(53, "Contact Us"),
                    e.qZA(),
                    e._uU(54, ". "),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e._UZ(55, "app-footer"));
                },
                directives: [g, _],
                styles: [""],
              })),
              n
            );
          })(),
        },
        {
          path: "newsletter",
          component: (() => {
            class n {
              constructor() {}
              ngOnInit() {}
            }
            return (
              (n.ɵfac = function (t) {
                return new (t || n)();
              }),
              (n.ɵcmp = e.Xpm({
                type: n,
                selectors: [["app-newsletter"]],
                decls: 23,
                vars: 0,
                consts: [
                  [1, "container"],
                  [1, "h5", "lwf"],
                  [1, "info-wrapper"],
                  [1, "border-bottom", "p-3"],
                  [1, "text-justify"],
                ],
                template: function (t, o) {
                  1 & t &&
                    (e._UZ(0, "app-header"),
                    e.TgZ(1, "section"),
                    e.TgZ(2, "div", 0),
                    e.TgZ(3, "div", 1),
                    e._uU(4, "Newsletter :-"),
                    e.qZA(),
                    e.TgZ(5, "div", 2),
                    e.TgZ(6, "div"),
                    e.TgZ(7, "div", 3),
                    e.TgZ(8, "h5"),
                    e._uU(9, "What is Lorem Ipsum?"),
                    e.qZA(),
                    e.TgZ(10, "p", 4),
                    e._uU(
                      11,
                      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
                    ),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(12, "div", 3),
                    e.TgZ(13, "h5"),
                    e._uU(14, "Why do we use it?"),
                    e.qZA(),
                    e.TgZ(15, "p", 4),
                    e._uU(
                      16,
                      ' Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. '
                    ),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(17, "div", 3),
                    e.TgZ(18, "h5"),
                    e._uU(19, "Where does it come from?"),
                    e.qZA(),
                    e.TgZ(20, "p", 4),
                    e._uU(
                      21,
                      " Every day, luma supporters from around the world use the Luma-AIblock explorer, where they can query the details of the transaction and experience the latest features of agnus. "
                    ),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e._UZ(22, "app-footer"));
                },
                directives: [g, _],
                styles: [""],
              })),
              n
            );
          })(),
        },
        {
          path: "network-status",
          component: (() => {
            class n {
              constructor() {}
              ngOnInit() {}
            }
            return (
              (n.ɵfac = function (t) {
                return new (t || n)();
              }),
              (n.ɵcmp = e.Xpm({
                type: n,
                selectors: [["app-network-status"]],
                decls: 23,
                vars: 0,
                consts: [
                  [1, "container"],
                  [1, "h5", "lwf"],
                  [1, "info-wrapper"],
                  [1, "border-bottom", "p-3"],
                  [1, "text-justify"],
                ],
                template: function (t, o) {
                  1 & t &&
                    (e._UZ(0, "app-header"),
                    e.TgZ(1, "section"),
                    e.TgZ(2, "div", 0),
                    e.TgZ(3, "div", 1),
                    e._uU(4, "Network Status :-"),
                    e.qZA(),
                    e.TgZ(5, "div", 2),
                    e.TgZ(6, "div"),
                    e.TgZ(7, "div", 3),
                    e.TgZ(8, "h5"),
                    e._uU(9, "What is Lorem Ipsum?"),
                    e.qZA(),
                    e.TgZ(10, "p", 4),
                    e._uU(
                      11,
                      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
                    ),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(12, "div", 3),
                    e.TgZ(13, "h5"),
                    e._uU(14, "Why do we use it?"),
                    e.qZA(),
                    e.TgZ(15, "p", 4),
                    e._uU(
                      16,
                      ' Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. '
                    ),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(17, "div", 3),
                    e.TgZ(18, "h5"),
                    e._uU(19, "Where does it come from?"),
                    e.qZA(),
                    e.TgZ(20, "p", 4),
                    e._uU(
                      21,
                      " Every day, luma supporters from around the world use the Luma-AIblock explorer, where they can query the details of the transaction and experience the latest features of agnus. "
                    ),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e._UZ(22, "app-footer"));
                },
                directives: [g, _],
                styles: [""],
              })),
              n
            );
          })(),
        },
        {
          path: "api-document",
          component: (() => {
            class n {
              constructor() {}
              ngOnInit() {}
            }
            return (
              (n.ɵfac = function (t) {
                return new (t || n)();
              }),
              (n.ɵcmp = e.Xpm({
                type: n,
                selectors: [["app-api-documentation"]],
                decls: 23,
                vars: 0,
                consts: [
                  [1, "container"],
                  [1, "h5", "lwf"],
                  [1, "info-wrapper"],
                  [1, "border-bottom", "p-3"],
                  [1, "text-justify"],
                ],
                template: function (t, o) {
                  1 & t &&
                    (e._UZ(0, "app-header"),
                    e.TgZ(1, "section"),
                    e.TgZ(2, "div", 0),
                    e.TgZ(3, "div", 1),
                    e._uU(4, " API Documentation :-"),
                    e.qZA(),
                    e.TgZ(5, "div", 2),
                    e.TgZ(6, "div"),
                    e.TgZ(7, "div", 3),
                    e.TgZ(8, "h5"),
                    e._uU(9, "What is Lorem Ipsum?"),
                    e.qZA(),
                    e.TgZ(10, "p", 4),
                    e._uU(
                      11,
                      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
                    ),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(12, "div", 3),
                    e.TgZ(13, "h5"),
                    e._uU(14, "Why do we use it?"),
                    e.qZA(),
                    e.TgZ(15, "p", 4),
                    e._uU(
                      16,
                      ' Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. '
                    ),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(17, "div", 3),
                    e.TgZ(18, "h5"),
                    e._uU(19, "Where does it come from?"),
                    e.qZA(),
                    e.TgZ(20, "p", 4),
                    e._uU(
                      21,
                      " Every day, luma supporters from around the world use the Luma-AIblock explorer, where they can query the details of the transaction and experience the latest features of agnus. "
                    ),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e._UZ(22, "app-footer"));
                },
                directives: [g, _],
                styles: [""],
              })),
              n
            );
          })(),
        },
        {
          path: "verifycontract",
          component: (() => {
            class n {
              constructor(t, o, a) {
                (this.conn = t),
                  (this.alert = o),
                  (this.route = a),
                  (this.token = localStorage.getItem("H1gh-VaLTokEN")),
                  (this.addresscheck = !1),
                  (this.compilData = !1),
                  (this.section = !1),
                  (this.verifyData = {
                    soliditytype: "",
                    compiler_ver: "",
                    license: "",
                    optimization: "no",
                    runs: 200,
                    evm_ver: "default",
                    soliditysrc: "",
                  }),
                  (this.verifyreset = {
                    contractAddr: "",
                    soliditytype: "",
                    nightly_commits: !1,
                    src_lic: !1,
                    compiler_ver: "",
                    license: "",
                    optimization: "no",
                    runs: 200,
                    evm_ver: "default",
                    soliditysrc: "",
                    abiencoded: "",
                  }),
                  null == this.token && this.route.navigate(["login"]);
              }
              ngOnInit() {}
              checkAddr(t) {
                null != t &&
                  this.conn
                    .postUrl("contract/checkExitAddress", { address: t })
                    .subscribe((a) => {
                      1 == a.success
                        ? ((this.addresscheck = !0),
                          this.alert.success(a.message, "", { timeOut: 2e3 }))
                        : ((this.addresscheck = !1),
                          this.alert.error(a.message, "", { timeOut: 2e3 }));
                    });
              }
              setComType(t) {
                this.compilData = "" !== t;
              }
              resetData(t) {
                this.section
                  ? ((this.verifyData.soliditysrc = ""),
                    (this.verifyData.abiencoded = ""),
                    (this.verifyData.optimization = "no"),
                    (this.verifyData.runs = 200),
                    (this.verifyData.evm_ver = "default"))
                  : t.resetForm();
              }
              setverify(t) {
                (this.section = !0), (this.formData = t);
              }
              verifynpush() {
                var t = this.verifyData;
                this.addresscheck
                  ? ((t.soliditysrc = t.soliditysrc.trim()),
                    (t.abiencoded = t.abiencoded.trim()),
                    "" != t.soliditysrc && "" != t.abiencoded
                      ? this.conn
                          .postRequest("contract/sendverify", t, this.token)
                          .subscribe((o) => {
                            1 == o.success
                              ? ((this.section = !1),
                                (this.verifyData.soliditysrc = ""),
                                (this.verifyData.contractAddr = ""),
                                (this.verifyData.soliditytype = ""),
                                (this.verifyData.nightly_commits = !1),
                                (this.verifyData.src_lic = !1),
                                (this.verifyData.compiler_ver = ""),
                                (this.verifyData.license = ""),
                                this.alert.success(o.msg, "", { timeOut: 2e3 }))
                              : this.alert.error(o.msg, "", { timeOut: 2e3 });
                          })
                      : this.alert.error("Soldity details", "", {
                          timeOut: 2e3,
                        }))
                  : this.alert.error("Invalid address", "", { timeOut: 2e3 });
              }
            }
            return (
              (n.ɵfac = function (t) {
                return new (t || n)(e.Y36(h), e.Y36(A._W), e.Y36(u.F0));
              }),
              (n.ɵcmp = e.Xpm({
                type: n,
                selectors: [["app-verifycontract"]],
                decls: 5,
                vars: 2,
                consts: [
                  [4, "ngIf"],
                  [1, "container"],
                  [1, "ba-tit", "wf", "text-center", "h3"],
                  [1, "text-center", "small"],
                  [1, "my-3"],
                  ["autocomplete", "off", 1, "mx-auto", "col-lg-6"],
                  ["f", "ngForm"],
                  [1, "mb-3"],
                  [1, "form-label"],
                  [
                    "type",
                    "text",
                    "placeholder",
                    "0x...",
                    "name",
                    "contractAddr",
                    "required",
                    "",
                    1,
                    "form-control",
                    3,
                    "ngModel",
                    "ngModelChange",
                  ],
                  ["cadr", "ngModel"],
                  ["class", "errMsg", 4, "ngIf"],
                  [
                    "name",
                    "soliditytype",
                    "required",
                    "",
                    1,
                    "form-control",
                    "select-control",
                    3,
                    "ngModel",
                    "ngModelChange",
                  ],
                  ["soliditytp", "ngModel"],
                  ["selected", "selected", "value", ""],
                  [
                    "value",
                    "single",
                    "title",
                    "A simple interface for solidity code that fits or concatenated into a single file",
                  ],
                  [
                    "name",
                    "compiler_ver",
                    "required",
                    "",
                    1,
                    "form-control",
                    "select-control",
                    3,
                    "ngModel",
                    "ngModelChange",
                  ],
                  ["compver", "ngModel"],
                  ["value", ""],
                  ["value", "v0.8.24+commit.e11b9ed9"],
                  ["value", "v0.8.23+commit.f704f362"],
                  ["value", "v0.8.22+commit.4fc1097e"],
                  ["value", "0.8.6_Bacon_v4.3"],
                  [1, "mb-3", "form-check"],
                  [
                    "type",
                    "checkbox",
                    "id",
                    "exampleCheck1",
                    "name",
                    "nightly_commits",
                    "required",
                    "",
                    1,
                    "form-check-input",
                    3,
                    "ngModel",
                    "ngModelChange",
                  ],
                  ["nitcm", "ngModel"],
                  ["for", "exampleCheck1", 1, "form-check-label"],
                  [
                    "name",
                    "license",
                    "required",
                    "",
                    1,
                    "form-control",
                    "select-control",
                    3,
                    "ngModel",
                    "ngModelChange",
                  ],
                  ["lic", "ngModel"],
                  ["value", "1"],
                  ["value", "2"],
                  ["value", "3"],
                  ["value", "4"],
                  ["value", "5"],
                  ["value", "6"],
                  ["value", "7"],
                  ["value", "8"],
                  ["value", "9"],
                  ["value", "10"],
                  ["value", "11"],
                  ["value", "12"],
                  ["value", "13"],
                  ["value", "14"],
                  [1, "mb-3", "form-check", "text-center"],
                  [
                    "type",
                    "checkbox",
                    "id",
                    "exampleCheck2",
                    "name",
                    "src_lic",
                    "required",
                    "",
                    1,
                    "form-check-input",
                    3,
                    "ngModel",
                    "ngModelChange",
                  ],
                  ["srclic", "ngModel"],
                  ["for", "exampleCheck2", 1, "form-check-label"],
                  [1, "justify-content-center", "d-flex"],
                  [
                    "type",
                    "submit",
                    1,
                    "btn",
                    "blue-btn",
                    "mx-1",
                    3,
                    "disabled",
                    "click",
                  ],
                  [1, "btn", "dark-btn", "mx-1", 3, "click"],
                  [1, "errMsg"],
                  ["class", "error", 4, "ngIf"],
                  [1, "error"],
                  ["verify", "ngForm"],
                  [1, "card-body", "border", "my-3"],
                  [1, "note"],
                  [1, "row", "my-3"],
                  [1, "col-lg-5"],
                  [
                    "disabled",
                    "",
                    1,
                    "form-control",
                    3,
                    "ngModel",
                    "ngModelChange",
                  ],
                  [
                    "disabled",
                    "",
                    1,
                    "form-control",
                    "select-control",
                    3,
                    "ngModel",
                    "ngModelChange",
                  ],
                  [1, "col-lg-2"],
                  [
                    "name",
                    "optimization",
                    "required",
                    "",
                    1,
                    "form-control",
                    "select-control",
                    3,
                    "ngModel",
                    "ngModelChange",
                  ],
                  ["opt", "ngModel"],
                  ["value", "no"],
                  ["value", "yes"],
                  [1, "col-lg-12"],
                  [
                    "name",
                    "soliditysrc",
                    "required",
                    "",
                    1,
                    "form-control",
                    3,
                    "ngModel",
                    "ngModelChange",
                  ],
                  ["solcont", "ngModel"],
                  ["id", "accordionExample", 1, "accordion"],
                  [1, "card"],
                  ["id", "headingOne", 1, "card-header"],
                  [1, "mb-0"],
                  [
                    "type",
                    "button",
                    "data-toggle",
                    "collapse",
                    "data-target",
                    "#collapseOne",
                    "aria-expanded",
                    "true",
                    "aria-controls",
                    "collapseOne",
                    1,
                    "btn",
                    "btn-link",
                    "btn-block",
                    "text-left",
                  ],
                  ["href", "#", "target", "_blank"],
                  [1, "text-muted"],
                  [
                    "id",
                    "collapseOne",
                    "aria-labelledby",
                    "headingOne",
                    "data-parent",
                    "#accordionExample",
                    1,
                    "collapse",
                    "show",
                  ],
                  [1, "card-body"],
                  [
                    "name",
                    "abiencoded",
                    "required",
                    "",
                    1,
                    "form-control",
                    3,
                    "ngModel",
                    "ngModelChange",
                  ],
                  ["abicode", "ngModel"],
                  [1, "small"],
                  ["id", "headingThree", 1, "card-header"],
                  [
                    "type",
                    "button",
                    "data-toggle",
                    "collapse",
                    "data-target",
                    "#collapseThree",
                    "aria-expanded",
                    "false",
                    "aria-controls",
                    "collapseThree",
                    1,
                    "btn",
                    "btn-link",
                    "btn-block",
                    "text-left",
                    "collapsed",
                  ],
                  [
                    "id",
                    "collapseThree",
                    "aria-labelledby",
                    "headingThree",
                    "data-parent",
                    "#accordionExample",
                    1,
                    "collapse",
                  ],
                  [1, "col-lg-4"],
                  [
                    "name",
                    "nightly_commits",
                    "title",
                    "DO not change if your are unsure. Previous version of truffle defaulted to a value of 0",
                    "required",
                    "",
                    1,
                    "form-control",
                    3,
                    "ngModel",
                    "ngModelChange",
                  ],
                  [
                    "name",
                    "evm_ver",
                    "required",
                    "",
                    1,
                    "form-control",
                    "select-control",
                    3,
                    "ngModel",
                    "ngModelChange",
                  ],
                  ["evmver", "ngModel"],
                  ["value", "default"],
                  ["value", "homestead"],
                  ["value", "tangerineWhistle"],
                  ["value", "spuriousDragon"],
                  ["value", "byzantium"],
                  ["value", "constantinople"],
                  ["value", "petersburg"],
                  ["value", "istanbul"],
                  ["value", "berlin"],
                  ["value", "london"],
                  ["value", "paris"],
                  ["value", "shanghai"],
                  [1, "justify-content-center", "d-flex", "mt-3"],
                  ["type", "submit", 1, "btn", "dark-btn", "mx-1", 3, "click"],
                ],
                template: function (t, o) {
                  1 & t &&
                    (e._UZ(0, "app-header"),
                    e._UZ(1, "app-searchbar"),
                    e.YNc(2, qs, 98, 25, "section", 0),
                    e.YNc(3, Us, 152, 20, "section", 0),
                    e._UZ(4, "app-footer")),
                    2 & t &&
                      (e.xp6(2),
                      e.Q6J("ngIf", !o.section),
                      e.xp6(1),
                      e.Q6J("ngIf", o.section));
                },
                directives: [
                  g,
                  m,
                  p.O5,
                  _,
                  l._Y,
                  l.JL,
                  l.F,
                  l.Fj,
                  l.Q7,
                  l.JJ,
                  l.On,
                  l.EJ,
                  l.YN,
                  l.Kr,
                  l.Zs,
                  l.Wl,
                ],
                styles: [""],
              })),
              n
            );
          })(),
        },
        {
          path: "unitconverter",
          component: (() => {
            class n {
              constructor(t) {
                (this.alert = t), (this.unitcal = {});
              }
              ngOnInit() {
                this.setUnitVal(1);
              }
              checkunit(t, o) {
                var a;
                (a =
                  "wei" == o
                    ? parseFloat(t) / 1e18
                    : "kwei" == o
                    ? parseFloat(t) / 1e15
                    : "mwei" == o
                    ? parseFloat(t) / 1e12
                    : "gwei" == o
                    ? parseFloat(t) / 1e9
                    : "szabo" == o
                    ? parseFloat(t) / 1e6
                    : "finney" == o
                    ? parseFloat(t) / 1e3
                    : "either" == o
                    ? parseFloat(t)
                    : "keither" == o
                    ? 1e3 * parseFloat(t)
                    : "meither" == o
                    ? 1e6 * parseFloat(t)
                    : "geither" == o
                    ? 1e9 * parseFloat(t)
                    : "teither" == o
                    ? 1e12 * parseFloat(t)
                    : parseFloat(t)),
                  this.setUnitVal(a);
              }
              setUnitVal(t) {
                (t = t || 0),
                  (this.unitcal = {
                    wei: this.convert(1e18 * parseFloat(t)),
                    kwei: this.convert(1e15 * parseFloat(t)),
                    mwei: this.convert(1e12 * parseFloat(t)),
                    gwei: this.convert(1e9 * parseFloat(t)),
                    szabo: this.convert(1e6 * parseFloat(t)),
                    finney: this.convert(1e3 * parseFloat(t)),
                    either: this.convert(parseFloat(t)),
                    keither: this.convert(parseFloat(t) / 1e3),
                    meither: this.convert(parseFloat(t) / 1e6),
                    geither: this.convert(parseFloat(t) / 1e9),
                    teither: this.convert(parseFloat(t) / 1e12),
                  });
              }
              convert(t) {
                var o = +t < 0 ? "-" : "",
                  a = t.toString();
                if (!/e/i.test(a)) return t;
                var [r, s, c] = t
                  .toString()
                  .replace(/^-/, "")
                  .replace(/^([0-9]+)(e.*)/, "$1.$2")
                  .split(/e|\./);
                return +c < 0
                  ? o +
                      "0." +
                      "0".repeat(Math.max(Math.abs(c) - 1 || 0, 0)) +
                      r +
                      s
                  : o +
                      r +
                      (+c >= s.length
                        ? s + "0".repeat(Math.max(+c - s.length || 0, 0))
                        : s.slice(0, +c) + "." + s.slice(+c));
              }
              copyText(t) {
                let o = document.createElement("input");
                (o.value = t),
                  document.body.appendChild(o),
                  o.focus(),
                  o.select(),
                  document.execCommand("copy"),
                  document.body.removeChild(o),
                  window.scrollTo(0, 0),
                  this.alert.success("Copied to the clipboard", "");
              }
            }
            return (
              (n.ɵfac = function (t) {
                return new (t || n)(e.Y36(A._W));
              }),
              (n.ɵcmp = e.Xpm({
                type: n,
                selectors: [["app-unitconverter"]],
                decls: 149,
                vars: 11,
                consts: [
                  [1, "container"],
                  [
                    1,
                    "d-flex",
                    "justify-content-between",
                    "align-items-center",
                  ],
                  [1, "h4"],
                  [1, "row"],
                  [1, "col-md-3", "borderright"],
                  [1, "bg-white", "p-3"],
                  [1, "left-nav"],
                  ["routerLink", "/unitconverter"],
                  ["routerLink", "/balancecheck"],
                  ["routerLink", "/supply-checker"],
                  [1, "col-md-9"],
                  [1, "h6"],
                  [1, "borderbox", "p-3"],
                  [1, "col-lg-7", "p-0"],
                  [1, "input-group", "my-2"],
                  [1, "input-group-prepend"],
                  [1, "input-group-text", 3, "click"],
                  [1, "far", "fa-copy"],
                  [
                    "type",
                    "text",
                    "name",
                    "wei",
                    1,
                    "form-control",
                    3,
                    "ngModel",
                    "ngModelChange",
                  ],
                  [1, "input-group-append"],
                  [1, "input-group-text"],
                  [
                    "type",
                    "text",
                    "name",
                    "kwei",
                    1,
                    "form-control",
                    3,
                    "ngModel",
                    "ngModelChange",
                  ],
                  [
                    "type",
                    "text",
                    "name",
                    "mwei",
                    1,
                    "form-control",
                    3,
                    "ngModel",
                    "ngModelChange",
                  ],
                  [
                    "type",
                    "text",
                    "name",
                    "gwei",
                    1,
                    "form-control",
                    3,
                    "ngModel",
                    "ngModelChange",
                  ],
                  [
                    "type",
                    "text",
                    "name",
                    "szabo",
                    1,
                    "form-control",
                    3,
                    "ngModel",
                    "ngModelChange",
                  ],
                  [
                    "type",
                    "text",
                    "name",
                    "finney",
                    1,
                    "form-control",
                    3,
                    "ngModel",
                    "ngModelChange",
                  ],
                  [
                    "type",
                    "text",
                    "name",
                    "either",
                    1,
                    "form-control",
                    3,
                    "ngModel",
                    "ngModelChange",
                  ],
                  [
                    "type",
                    "text",
                    "name",
                    "keither",
                    1,
                    "form-control",
                    3,
                    "ngModel",
                    "ngModelChange",
                  ],
                  [
                    "type",
                    "text",
                    "name",
                    "meither",
                    1,
                    "form-control",
                    3,
                    "ngModel",
                    "ngModelChange",
                  ],
                  [
                    "type",
                    "text",
                    "name",
                    "geither",
                    1,
                    "form-control",
                    3,
                    "ngModel",
                    "ngModelChange",
                  ],
                  [
                    "type",
                    "text",
                    "name",
                    "teither",
                    1,
                    "form-control",
                    3,
                    "ngModel",
                    "ngModelChange",
                  ],
                ],
                template: function (t, o) {
                  1 & t &&
                    (e._UZ(0, "app-loader"),
                    e._UZ(1, "app-header"),
                    e._UZ(2, "app-searchbar"),
                    e.TgZ(3, "section"),
                    e.TgZ(4, "div", 0),
                    e.TgZ(5, "div", 1),
                    e.TgZ(6, "div", 2),
                    e._uU(7, "Tools"),
                    e.qZA(),
                    e.qZA(),
                    e._UZ(8, "hr"),
                    e.TgZ(9, "div", 3),
                    e.TgZ(10, "div", 4),
                    e.TgZ(11, "div", 5),
                    e.TgZ(12, "ul", 6),
                    e.TgZ(13, "li"),
                    e.TgZ(14, "a", 7),
                    e._uU(15, "Unit Converter"),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(16, "li"),
                    e.TgZ(17, "a", 8),
                    e._uU(18, "Account Balance Checker"),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(19, "li"),
                    e.TgZ(20, "a", 9),
                    e._uU(21, "Token Supply Checker"),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(22, "div", 10),
                    e.TgZ(23, "div", 11),
                    e._uU(24, "Unit Converter"),
                    e.qZA(),
                    e.TgZ(25, "p"),
                    e._uU(
                      26,
                      "Ether or ETH is often used in different denominations of its currency, such as Wei for interacting with smart contracts and Gwei for calculating gas prices. Use our Unit Converter to easily convert between them! For more info on unit conversion, read our knowledge base article."
                    ),
                    e.qZA(),
                    e.TgZ(27, "div", 12),
                    e._uU(28, " Enter any value "),
                    e.TgZ(29, "div", 13),
                    e.TgZ(30, "div", 14),
                    e.TgZ(31, "div", 15),
                    e.TgZ(32, "span", 16),
                    e.NdJ("click", function () {
                      return o.copyText(o.unitcal.wei);
                    }),
                    e._UZ(33, "i", 17),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(34, "input", 18),
                    e.NdJ("ngModelChange", function (r) {
                      return o.checkunit(r, "wei");
                    })("ngModelChange", function (r) {
                      return (o.unitcal.wei = r);
                    }),
                    e.qZA(),
                    e.TgZ(35, "div", 19),
                    e.TgZ(36, "span", 20),
                    e._uU(37, "Wei (10"),
                    e.TgZ(38, "sup"),
                    e._uU(39, "-18"),
                    e.qZA(),
                    e._uU(40, ")"),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(41, "div", 14),
                    e.TgZ(42, "div", 15),
                    e.TgZ(43, "span", 16),
                    e.NdJ("click", function () {
                      return o.copyText(o.unitcal.kwei);
                    }),
                    e._UZ(44, "i", 17),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(45, "input", 21),
                    e.NdJ("ngModelChange", function (r) {
                      return o.checkunit(r, "kwei");
                    })("ngModelChange", function (r) {
                      return (o.unitcal.kwei = r);
                    }),
                    e.qZA(),
                    e.TgZ(46, "div", 19),
                    e.TgZ(47, "span", 20),
                    e._uU(48, "KWei (10"),
                    e.TgZ(49, "sup"),
                    e._uU(50, "-15"),
                    e.qZA(),
                    e._uU(51, ")"),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(52, "div", 14),
                    e.TgZ(53, "div", 15),
                    e.TgZ(54, "span", 16),
                    e.NdJ("click", function () {
                      return o.copyText(o.unitcal.mwei);
                    }),
                    e._UZ(55, "i", 17),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(56, "input", 22),
                    e.NdJ("ngModelChange", function (r) {
                      return o.checkunit(r, "mwei");
                    })("ngModelChange", function (r) {
                      return (o.unitcal.mwei = r);
                    }),
                    e.qZA(),
                    e.TgZ(57, "div", 19),
                    e.TgZ(58, "span", 20),
                    e._uU(59, "MWei (10"),
                    e.TgZ(60, "sup"),
                    e._uU(61, "-12"),
                    e.qZA(),
                    e._uU(62, ")"),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(63, "div", 14),
                    e.TgZ(64, "div", 15),
                    e.TgZ(65, "span", 16),
                    e.NdJ("click", function () {
                      return o.copyText(o.unitcal.gwei);
                    }),
                    e._UZ(66, "i", 17),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(67, "input", 23),
                    e.NdJ("ngModelChange", function (r) {
                      return o.checkunit(r, "gwei");
                    })("ngModelChange", function (r) {
                      return (o.unitcal.gwei = r);
                    }),
                    e.qZA(),
                    e.TgZ(68, "div", 19),
                    e.TgZ(69, "span", 20),
                    e._uU(70, "GWei (10"),
                    e.TgZ(71, "sup"),
                    e._uU(72, "-9"),
                    e.qZA(),
                    e._uU(73, ")"),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(74, "div", 14),
                    e.TgZ(75, "div", 15),
                    e.TgZ(76, "span", 16),
                    e.NdJ("click", function () {
                      return o.copyText(o.unitcal.szabo);
                    }),
                    e._UZ(77, "i", 17),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(78, "input", 24),
                    e.NdJ("ngModelChange", function (r) {
                      return o.checkunit(r, "szabo");
                    })("ngModelChange", function (r) {
                      return (o.unitcal.szabo = r);
                    }),
                    e.qZA(),
                    e.TgZ(79, "div", 19),
                    e.TgZ(80, "span", 20),
                    e._uU(81, "Szabo (10"),
                    e.TgZ(82, "sup"),
                    e._uU(83, "-6"),
                    e.qZA(),
                    e._uU(84, ")"),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(85, "div", 14),
                    e.TgZ(86, "div", 15),
                    e.TgZ(87, "span", 16),
                    e.NdJ("click", function () {
                      return o.copyText(o.unitcal.finney);
                    }),
                    e._UZ(88, "i", 17),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(89, "input", 25),
                    e.NdJ("ngModelChange", function (r) {
                      return o.checkunit(r, "finney");
                    })("ngModelChange", function (r) {
                      return (o.unitcal.finney = r);
                    }),
                    e.qZA(),
                    e.TgZ(90, "div", 19),
                    e.TgZ(91, "span", 20),
                    e._uU(92, "Finney (10"),
                    e.TgZ(93, "sup"),
                    e._uU(94, "-3"),
                    e.qZA(),
                    e._uU(95, ")"),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(96, "div", 14),
                    e.TgZ(97, "div", 15),
                    e.TgZ(98, "span", 16),
                    e.NdJ("click", function () {
                      return o.copyText(o.unitcal.either);
                    }),
                    e._UZ(99, "i", 17),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(100, "input", 26),
                    e.NdJ("ngModelChange", function (r) {
                      return o.checkunit(r, "either");
                    })("ngModelChange", function (r) {
                      return (o.unitcal.either = r);
                    }),
                    e.qZA(),
                    e.TgZ(101, "div", 19),
                    e.TgZ(102, "span", 20),
                    e._uU(103, "Either (1)"),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(104, "div", 14),
                    e.TgZ(105, "div", 15),
                    e.TgZ(106, "span", 16),
                    e.NdJ("click", function () {
                      return o.copyText(o.unitcal.keither);
                    }),
                    e._UZ(107, "i", 17),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(108, "input", 27),
                    e.NdJ("ngModelChange", function (r) {
                      return o.checkunit(r, "keither");
                    })("ngModelChange", function (r) {
                      return (o.unitcal.keither = r);
                    }),
                    e.qZA(),
                    e.TgZ(109, "div", 19),
                    e.TgZ(110, "span", 20),
                    e._uU(111, "KEither (10"),
                    e.TgZ(112, "sup"),
                    e._uU(113, "3"),
                    e.qZA(),
                    e._uU(114, ")"),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(115, "div", 14),
                    e.TgZ(116, "div", 15),
                    e.TgZ(117, "span", 16),
                    e.NdJ("click", function () {
                      return o.copyText(o.unitcal.meither);
                    }),
                    e._UZ(118, "i", 17),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(119, "input", 28),
                    e.NdJ("ngModelChange", function (r) {
                      return o.checkunit(r, "meither");
                    })("ngModelChange", function (r) {
                      return (o.unitcal.meither = r);
                    }),
                    e.qZA(),
                    e.TgZ(120, "div", 19),
                    e.TgZ(121, "span", 20),
                    e._uU(122, "MEither (10"),
                    e.TgZ(123, "sup"),
                    e._uU(124, "6"),
                    e.qZA(),
                    e._uU(125, ")"),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(126, "div", 14),
                    e.TgZ(127, "div", 15),
                    e.TgZ(128, "span", 16),
                    e.NdJ("click", function () {
                      return o.copyText(o.unitcal.geither);
                    }),
                    e._UZ(129, "i", 17),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(130, "input", 29),
                    e.NdJ("ngModelChange", function (r) {
                      return o.checkunit(r, "geither");
                    })("ngModelChange", function (r) {
                      return (o.unitcal.geither = r);
                    }),
                    e.qZA(),
                    e.TgZ(131, "div", 19),
                    e.TgZ(132, "span", 20),
                    e._uU(133, "GEither (10"),
                    e.TgZ(134, "sup"),
                    e._uU(135, "9"),
                    e.qZA(),
                    e._uU(136, ")"),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(137, "div", 14),
                    e.TgZ(138, "div", 15),
                    e.TgZ(139, "span", 16),
                    e.NdJ("click", function () {
                      return o.copyText(o.unitcal.teither);
                    }),
                    e._UZ(140, "i", 17),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(141, "input", 30),
                    e.NdJ("ngModelChange", function (r) {
                      return o.checkunit(r, "teither");
                    })("ngModelChange", function (r) {
                      return (o.unitcal.teither = r);
                    }),
                    e.qZA(),
                    e.TgZ(142, "div", 19),
                    e.TgZ(143, "span", 20),
                    e._uU(144, "TEither (10"),
                    e.TgZ(145, "sup"),
                    e._uU(146, "12"),
                    e.qZA(),
                    e._uU(147, ")"),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e._UZ(148, "app-footer")),
                    2 & t &&
                      (e.xp6(34),
                      e.Q6J("ngModel", o.unitcal.wei),
                      e.xp6(11),
                      e.Q6J("ngModel", o.unitcal.kwei),
                      e.xp6(11),
                      e.Q6J("ngModel", o.unitcal.mwei),
                      e.xp6(11),
                      e.Q6J("ngModel", o.unitcal.gwei),
                      e.xp6(11),
                      e.Q6J("ngModel", o.unitcal.szabo),
                      e.xp6(11),
                      e.Q6J("ngModel", o.unitcal.finney),
                      e.xp6(11),
                      e.Q6J("ngModel", o.unitcal.either),
                      e.xp6(8),
                      e.Q6J("ngModel", o.unitcal.keither),
                      e.xp6(11),
                      e.Q6J("ngModel", o.unitcal.meither),
                      e.xp6(11),
                      e.Q6J("ngModel", o.unitcal.geither),
                      e.xp6(11),
                      e.Q6J("ngModel", o.unitcal.teither));
                },
                directives: [f, g, m, u.yS, l.Fj, l.JJ, l.On, _],
                styles: [""],
              })),
              n
            );
          })(),
        },
        {
          path: "balancecheck",
          component: (() => {
            class n {
              constructor(t, o, a) {
                (this.conn = t),
                  (this.alert = o),
                  (this.route = a),
                  (this.addresscheck = !1),
                  (this.contaddr = !1),
                  (this.typeData = ""),
                  (this.typeStat = !1),
                  (this.checkBal = {}),
                  (this.Balance = 0),
                  (this.BalVal = !1);
              }
              ngOnInit() {}
              checkType(t) {
                (this.typeData = t), (this.typeStat = "coin" != t);
              }
              checkAddr(t, o) {
                null != t &&
                  this.conn
                    .postUrl("account/checkValidAddress", { address: t })
                    .subscribe((r) => {
                      1 == r.success
                        ? (this.alert.success(r.message, "", { timeOut: 2e3 }),
                          "addr" == o
                            ? (this.addresscheck = !0)
                            : (this.contaddr = !0))
                        : ("addr" == o
                            ? (this.addresscheck = !1)
                            : (this.contaddr = !1),
                          this.alert.error(r.message, "", { timeOut: 2e3 }));
                    });
              }
              SubmitLookup(t) {
                "token" != this.typeData || this.contaddr
                  ? this.addresscheck
                    ? this.conn
                        .postUrl("contract/balancecheck", t.value)
                        .subscribe((a) => {
                          1 == a.success
                            ? ((this.Balance = a.Balance), (this.BalVal = !0))
                            : ((this.BalVal = !1),
                              this.alert.error(a.msg, "", { timeOut: 2e3 }));
                        })
                    : this.alert.error("Invalid address", "", { timeOut: 2e3 })
                  : this.alert.error("Invalid contract address", "", {
                      timeOut: 2e3,
                    });
              }
              resetForm(t) {
                t.resetForm(), (this.BalVal = !1), (this.typeStat = !1);
              }
            }
            return (
              (n.ɵfac = function (t) {
                return new (t || n)(e.Y36(h), e.Y36(A._W), e.Y36(u.F0));
              }),
              (n.ɵcmp = e.Xpm({
                type: n,
                selectors: [["app-balancecheck"]],
                decls: 59,
                vars: 11,
                consts: [
                  [1, "container"],
                  [
                    1,
                    "d-flex",
                    "justify-content-between",
                    "align-items-center",
                  ],
                  [1, "h4"],
                  [1, "row"],
                  [1, "col-md-3", "borderright"],
                  [1, "bg-white", "p-3"],
                  [1, "left-nav"],
                  ["routerLink", "/unitconverter"],
                  ["routerLink", "/balancecheck"],
                  ["routerLink", "/supply-checker"],
                  [1, "col-md-9"],
                  [1, "h6"],
                  [1, "borderbox", "p-3"],
                  [1, "col-lg-8"],
                  ["f", "ngForm"],
                  [1, "mb-3"],
                  [
                    "name",
                    "type",
                    "required",
                    "",
                    1,
                    "form-control",
                    3,
                    "ngModel",
                    "ngModelChange",
                  ],
                  ["typ", "ngModel"],
                  ["value", ""],
                  ["value", "coin"],
                  ["value", "token"],
                  ["class", "errMsg", 4, "ngIf"],
                  [
                    "type",
                    "text",
                    "name",
                    "Address",
                    "placeholder",
                    "0x....",
                    "required",
                    "",
                    1,
                    "form-control",
                    3,
                    "ngModel",
                    "ngModelChange",
                  ],
                  ["accAdr", "ngModel"],
                  ["class", "mb-3", 4, "ngIf"],
                  [1, "btns"],
                  [1, "btn", "blue-btn", 3, "disabled", "click"],
                  [1, "btn", "btn-dark", 3, "click"],
                  ["class", "borderbox p-3", 4, "ngIf"],
                  [1, "errMsg"],
                  ["class", "error", 4, "ngIf"],
                  [1, "error"],
                  [
                    "type",
                    "text",
                    "name",
                    "Contract",
                    "placeholder",
                    "0x....",
                    "required",
                    "",
                    1,
                    "form-control",
                    3,
                    "ngModel",
                    "ngModelChange",
                  ],
                  ["contAdr", "ngModel"],
                  [1, "form-control"],
                ],
                template: function (t, o) {
                  if (1 & t) {
                    const a = e.EpF();
                    e._UZ(0, "app-loader"),
                      e._UZ(1, "app-header"),
                      e._UZ(2, "app-searchbar"),
                      e.TgZ(3, "section"),
                      e.TgZ(4, "div", 0),
                      e.TgZ(5, "div", 1),
                      e.TgZ(6, "div", 2),
                      e._uU(7, "Tools"),
                      e.qZA(),
                      e.qZA(),
                      e._UZ(8, "hr"),
                      e.TgZ(9, "div", 3),
                      e.TgZ(10, "div", 4),
                      e.TgZ(11, "div", 5),
                      e.TgZ(12, "ul", 6),
                      e.TgZ(13, "div", 5),
                      e.TgZ(14, "ul", 6),
                      e.TgZ(15, "li"),
                      e.TgZ(16, "a", 7),
                      e._uU(17, "Unit Converter"),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(18, "li"),
                      e.TgZ(19, "a", 8),
                      e._uU(20, "Account Balance Checker"),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(21, "li"),
                      e.TgZ(22, "a", 9),
                      e._uU(23, "Token Supply Checker"),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(24, "div", 10),
                      e.TgZ(25, "div", 11),
                      e._uU(26, "Account Balance Checker"),
                      e.qZA(),
                      e.TgZ(27, "p"),
                      e._uU(
                        28,
                        "You can look up the historical balance of an account's Luma or Tokens at a specific block number or date."
                      ),
                      e.qZA(),
                      e.TgZ(29, "div", 12),
                      e.TgZ(30, "div", 13),
                      e.TgZ(31, "form", null, 14),
                      e.TgZ(33, "div", 15),
                      e.TgZ(34, "label"),
                      e._uU(35, "Choose an option"),
                      e.qZA(),
                      e.TgZ(36, "select", 16, 17),
                      e.NdJ("ngModelChange", function (s) {
                        return (o.typeData = s);
                      })("ngModelChange", function (s) {
                        return o.checkType(s);
                      }),
                      e.TgZ(38, "option", 18),
                      e._uU(39, "Select Type"),
                      e.qZA(),
                      e.TgZ(40, "option", 19),
                      e._uU(41, "Luma"),
                      e.qZA(),
                      e.TgZ(42, "option", 20),
                      e._uU(43, "Token (agnus-20)"),
                      e.qZA(),
                      e.qZA(),
                      e.YNc(44, ws, 2, 1, "div", 21),
                      e.qZA(),
                      e.TgZ(45, "div", 15),
                      e.TgZ(46, "label"),
                      e._uU(47, "Account Address*"),
                      e.qZA(),
                      e.TgZ(48, "input", 22, 23),
                      e.NdJ("ngModelChange", function (s) {
                        return (o.checkBal.addr = s);
                      })("ngModelChange", function (s) {
                        return o.checkAddr(s, "addr");
                      }),
                      e.qZA(),
                      e.YNc(50, Is, 2, 1, "div", 21),
                      e.qZA(),
                      e.YNc(51, Js, 6, 4, "div", 24),
                      e.TgZ(52, "div", 25),
                      e.TgZ(53, "button", 26),
                      e.NdJ("click", function () {
                        e.CHM(a);
                        const s = e.MAs(32);
                        return o.SubmitLookup(s);
                      }),
                      e._uU(54, "Lookup"),
                      e.qZA(),
                      e.TgZ(55, "button", 27),
                      e.NdJ("click", function () {
                        e.CHM(a);
                        const s = e.MAs(32);
                        return o.resetForm(s);
                      }),
                      e._uU(56, "Reset"),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.YNc(57, Rs, 7, 1, "div", 28),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e._UZ(58, "app-footer");
                  }
                  if (2 & t) {
                    const a = e.MAs(32),
                      r = e.MAs(37),
                      s = e.MAs(49);
                    e.xp6(36),
                      e.ekj("is-invalid", r.invalid && r.touched),
                      e.Q6J("ngModel", o.typeData),
                      e.xp6(8),
                      e.Q6J("ngIf", r.errors && (r.valid || r.touched)),
                      e.xp6(4),
                      e.ekj("is-invalid", s.invalid && s.touched),
                      e.Q6J("ngModel", o.checkBal.addr),
                      e.xp6(2),
                      e.Q6J("ngIf", s.errors && (s.valid || s.touched)),
                      e.xp6(1),
                      e.Q6J("ngIf", o.typeStat),
                      e.xp6(2),
                      e.Q6J("disabled", a.invalid),
                      e.xp6(4),
                      e.Q6J("ngIf", o.BalVal);
                  }
                },
                directives: [
                  f,
                  g,
                  m,
                  u.yS,
                  l._Y,
                  l.JL,
                  l.F,
                  l.EJ,
                  l.Q7,
                  l.JJ,
                  l.On,
                  l.YN,
                  l.Kr,
                  p.O5,
                  l.Fj,
                  _,
                ],
                styles: [""],
              })),
              n
            );
          })(),
        },
        {
          path: "blocks",
          component: (() => {
            class n {
              constructor(t, o) {
                (this.conn = t),
                  (this.route = o),
                  (this.transactionList = []),
                  (this.token = localStorage.getItem("H1gh-VaLTokEN")),
                  (this.pgItem = 10),
                  (this.block24 = 0),
                  (this.transPend = 0),
                  (this.transFee = 0);
              }
              ngOnInit() {
                this.conn.getUrl("blocks/getBlockData").subscribe((t) => {
                  1 == t.success &&
                    ((this.transactionList = t.result),
                    (this.block24 = t.block24));
                });
              }
            }
            return (
              (n.ɵfac = function (t) {
                return new (t || n)(e.Y36(h), e.Y36(u.F0));
              }),
              (n.ɵcmp = e.Xpm({
                type: n,
                selectors: [["app-blocks"]],
                decls: 49,
                vars: 6,
                consts: [
                  [1, "container"],
                  [1, "h5", "lwf"],
                  [1, "row", "mb-3"],
                  [1, "col-md-4"],
                  [1, "borderbox", "p-3", "small"],
                  [1, "grey-t"],
                  [1, "mr-2", "h4"],
                  [1, "table-responsive"],
                  [1, "table"],
                  [4, "ngIf"],
                  ["class", "pageination", 3, "pageChange", 4, "ngIf"],
                  [4, "ngFor", "ngForOf"],
                  [3, "routerLink"],
                  [3, "title"],
                  [1, "pageination", 3, "pageChange"],
                ],
                template: function (t, o) {
                  1 & t &&
                    (e._UZ(0, "app-header"),
                    e._UZ(1, "app-searchbar"),
                    e.TgZ(2, "section"),
                    e.TgZ(3, "div", 0),
                    e.TgZ(4, "div", 1),
                    e._uU(5, "BLOCKS"),
                    e.qZA(),
                    e._UZ(6, "hr"),
                    e.TgZ(7, "div", 2),
                    e.TgZ(8, "div", 3),
                    e.TgZ(9, "div", 4),
                    e.TgZ(10, "div", 5),
                    e._uU(11, "BLOCKS ( 24H )"),
                    e.qZA(),
                    e.TgZ(12, "div"),
                    e.TgZ(13, "span", 6),
                    e._uU(14),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(15, "div", 3),
                    e.TgZ(16, "div", 4),
                    e.TgZ(17, "div", 5),
                    e._uU(18, "LAST SAFE BLOCK"),
                    e.qZA(),
                    e.TgZ(19, "div"),
                    e.TgZ(20, "span", 6),
                    e._uU(21),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(22, "div", 3),
                    e.TgZ(23, "div", 4),
                    e.TgZ(24, "div", 5),
                    e._uU(25, "PRODUCED BY MEV BUILDERS ( 24H )"),
                    e.qZA(),
                    e.TgZ(26, "div"),
                    e.TgZ(27, "span", 6),
                    e._uU(28),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(29, "div", 7),
                    e.TgZ(30, "table", 8),
                    e.TgZ(31, "thead"),
                    e.TgZ(32, "tr"),
                    e.TgZ(33, "th"),
                    e._uU(34, "Block"),
                    e.qZA(),
                    e.TgZ(35, "th"),
                    e._uU(36, "Age"),
                    e.qZA(),
                    e.TgZ(37, "th"),
                    e._uU(38, "Txn"),
                    e.qZA(),
                    e.TgZ(39, "th"),
                    e._uU(40, "Fee Recipient"),
                    e.qZA(),
                    e.TgZ(41, "th"),
                    e._uU(42, "Gas Used"),
                    e.qZA(),
                    e.TgZ(43, "th"),
                    e._uU(44, "Gas Limit"),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.YNc(45, Ss, 4, 0, "tbody", 9),
                    e.YNc(46, Qs, 3, 7, "tbody", 9),
                    e.qZA(),
                    e.YNc(47, Ps, 1, 0, "pagination-controls", 10),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e._UZ(48, "app-footer")),
                    2 & t &&
                      (e.xp6(14),
                      e.Oqu(o.block24),
                      e.xp6(7),
                      e.Oqu("462281"),
                      e.xp6(7),
                      e.Oqu("82 %"),
                      e.xp6(17),
                      e.Q6J("ngIf", 0 == o.transactionList.length),
                      e.xp6(1),
                      e.Q6J("ngIf", o.transactionList.length > 0),
                      e.xp6(1),
                      e.Q6J("ngIf", o.transactionList.length > o.pgItem));
                },
                directives: [g, m, p.O5, _, p.sg, u.yS, x.LS],
                pipes: [x._s],
                styles: [
                  ".carousel-inner[_ngcontent-%COMP%]{background:#242837;background:#efecf9;padding:15px;border-radius:8px}.tag[_ngcontent-%COMP%]{background-color:#3c4155;background-color:#785ad9;padding:3px 10px;border-radius:3px;font-weight:600;font-size:11px;line-height:normal;color:#fff}.pageination[_ngcontent-%COMP%]{float:right;padding-top:0;margin-top:16px;margin-right:10px}",
                ],
              })),
              n
            );
          })(),
        },
        {
          path: "blocks-details/:searchhash",
          component: (() => {
            class n {
              constructor(t, o, a) {
                (this.conn = t),
                  (this.actRoute = o),
                  (this.route = a),
                  (this.showTransaction = !1),
                  (this.transactionData = []),
                  (this.token = localStorage.getItem("H1gh-VaLTokEN")),
                  (this.loader = !0);
              }
              ngOnInit() {
                this.actRoute.params.subscribe((o) => {
                  this.hash = this.actRoute.snapshot.paramMap.get("searchhash");
                }),
                  this.conn
                    .postUrl("blocks/getBlockDetils", { searchHash: this.hash })
                    .subscribe((o) => {
                      if (1 == o.success)
                        if (
                          ((this.showTransaction = !0),
                          (this.transactionData = o.result),
                          console.log(o.result),
                          "TriggerSmartContract" == o.result.type)
                        ) {
                          var a = parseFloat(o.result.amount) / 1e18;
                          this.transactionData.amount = a;
                        } else
                          (a = parseFloat(o.result.amount) / 1e18),
                            (this.transactionData.amount = a);
                      this.loader = !1;
                    });
              }
            }
            return (
              (n.ɵfac = function (t) {
                return new (t || n)(e.Y36(h), e.Y36(u.gz), e.Y36(u.F0));
              }),
              (n.ɵcmp = e.Xpm({
                type: n,
                selectors: [["app-blocks-details"]],
                decls: 7,
                vars: 2,
                consts: [
                  [4, "ngIf"],
                  [1, "pagesection"],
                  [1, "container"],
                  ["class", "tab-content", "id", "myTabContent", 4, "ngIf"],
                  ["id", "myTabContent", 1, "tab-content"],
                  [
                    "id",
                    "home",
                    "role",
                    "tabpanel",
                    "aria-labelledby",
                    "home-tab",
                    1,
                    "tab-pane",
                    "fade",
                    "show",
                    "active",
                  ],
                  [1, "info-wrapper"],
                  [1, "info-row"],
                  [1, "label-field"],
                  [1, "data-field"],
                ],
                template: function (t, o) {
                  1 & t &&
                    (e.YNc(0, Ds, 1, 0, "app-loader", 0),
                    e._UZ(1, "app-header"),
                    e._UZ(2, "app-searchbar"),
                    e.TgZ(3, "section", 1),
                    e.TgZ(4, "div", 2),
                    e.YNc(5, Hs, 64, 15, "div", 3),
                    e.qZA(),
                    e.qZA(),
                    e._UZ(6, "app-footer")),
                    2 & t &&
                      (e.Q6J("ngIf", o.loader),
                      e.xp6(5),
                      e.Q6J("ngIf", o.showTransaction));
                },
                directives: [p.O5, g, m, _, f],
                pipes: [p.uU],
                styles: [""],
              })),
              n
            );
          })(),
        },
        {
          path: "token-transaction",
          component: (() => {
            class n {
              constructor(t, o) {
                (this.conn = t),
                  (this.route = o),
                  (this.transactionList = []),
                  (this.token = localStorage.getItem("H1gh-VaLTokEN")),
                  (this.pgItem = 10),
                  (this.trans24 = 0),
                  (this.transPend = 0),
                  (this.transFee = 0);
              }
              ngOnInit() {
                this.conn.getUrl("blocks/getTokenTrans").subscribe((t) => {
                  1 == t.success &&
                    ((this.transactionList = t.result),
                    (this.trans24 = t.trans24),
                    (this.transPend = t.transpend),
                    (this.transFee = t.fee));
                });
              }
            }
            return (
              (n.ɵfac = function (t) {
                return new (t || n)(e.Y36(h), e.Y36(u.F0));
              }),
              (n.ɵcmp = e.Xpm({
                type: n,
                selectors: [["app-token-transaction"]],
                decls: 59,
                vars: 6,
                consts: [
                  [1, "container"],
                  [1, "h5", "lwf"],
                  [1, "row", "mb-3"],
                  [1, "col-md-4"],
                  [1, "borderbox", "p-3", "small"],
                  [1, "grey-t"],
                  [1, "mr-2", "h4"],
                  [1, "table-responsive"],
                  [1, "table"],
                  [4, "ngIf"],
                  ["class", "pageination", 3, "pageChange", 4, "ngIf"],
                  [4, "ngFor", "ngForOf"],
                  [3, "routerLink", "title"],
                  [1, "pageination", 3, "pageChange"],
                ],
                template: function (t, o) {
                  1 & t &&
                    (e._UZ(0, "app-header"),
                    e._UZ(1, "app-searchbar"),
                    e.TgZ(2, "section"),
                    e.TgZ(3, "div", 0),
                    e.TgZ(4, "div", 1),
                    e._uU(5, "Transaction"),
                    e.qZA(),
                    e._UZ(6, "hr"),
                    e.TgZ(7, "div", 2),
                    e.TgZ(8, "div", 3),
                    e.TgZ(9, "div", 4),
                    e.TgZ(10, "div", 5),
                    e._uU(11, "TRANSACTIONS ( 24H )"),
                    e.qZA(),
                    e.TgZ(12, "div"),
                    e.TgZ(13, "span", 6),
                    e._uU(14),
                    e.qZA(),
                    e.TgZ(15, "span"),
                    e._uU(16, "( 3.25 % )"),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(17, "div", 3),
                    e.TgZ(18, "div", 4),
                    e.TgZ(19, "div", 5),
                    e._uU(20, "PENDING TRANSACTIONS ( LAST 1H )"),
                    e.qZA(),
                    e.TgZ(21, "div"),
                    e.TgZ(22, "span", 6),
                    e._uU(23),
                    e.qZA(),
                    e.TgZ(24, "span"),
                    e._uU(25, "( Average )"),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(26, "div", 3),
                    e.TgZ(27, "div", 4),
                    e.TgZ(28, "div", 5),
                    e._uU(29, "NETWORK TRANSACTIONS FEE ( 24H )"),
                    e.qZA(),
                    e.TgZ(30, "div"),
                    e.TgZ(31, "span", 6),
                    e._uU(32),
                    e.qZA(),
                    e.TgZ(33, "span"),
                    e._uU(34, "( 0 % )"),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(35, "div", 7),
                    e.TgZ(36, "table", 8),
                    e.TgZ(37, "thead"),
                    e.TgZ(38, "tr"),
                    e.TgZ(39, "th"),
                    e._uU(40, "Txn Hash"),
                    e.qZA(),
                    e.TgZ(41, "th"),
                    e._uU(42, "Method"),
                    e.qZA(),
                    e.TgZ(43, "th"),
                    e._uU(44, "Block"),
                    e.qZA(),
                    e.TgZ(45, "th"),
                    e._uU(46, "Age"),
                    e.qZA(),
                    e.TgZ(47, "th"),
                    e._uU(48, "From"),
                    e.qZA(),
                    e.TgZ(49, "th"),
                    e._uU(50, "To"),
                    e.qZA(),
                    e.TgZ(51, "th"),
                    e._uU(52, "Value"),
                    e.qZA(),
                    e.TgZ(53, "th"),
                    e._uU(54, "Txn Fee"),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.YNc(55, js, 4, 0, "tbody", 9),
                    e.YNc(56, Ws, 3, 7, "tbody", 9),
                    e.qZA(),
                    e.YNc(57, $s, 1, 0, "pagination-controls", 10),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e._UZ(58, "app-footer")),
                    2 & t &&
                      (e.xp6(14),
                      e.Oqu(o.trans24),
                      e.xp6(9),
                      e.Oqu(o.transPend),
                      e.xp6(9),
                      e.Oqu(o.transFee),
                      e.xp6(23),
                      e.Q6J("ngIf", 0 == o.transactionList.length),
                      e.xp6(1),
                      e.Q6J("ngIf", o.transactionList.length > 0),
                      e.xp6(1),
                      e.Q6J("ngIf", o.transactionList.length > o.pgItem));
                },
                directives: [g, m, p.O5, _, p.sg, u.yS, x.LS],
                pipes: [x._s],
                styles: [
                  ".carousel-inner[_ngcontent-%COMP%]{background:#242837;background:#efecf9;padding:15px;border-radius:8px}.tag[_ngcontent-%COMP%]{background-color:#3c4155;background-color:#785ad9;padding:3px 10px;border-radius:3px;font-weight:600;font-size:11px;line-height:normal;color:#fff}.pageination[_ngcontent-%COMP%]{float:right;padding-top:0;margin-top:16px;margin-right:10px}",
                ],
              })),
              n
            );
          })(),
        },
        {
          path: "supply-checker",
          component: (() => {
            class n {
              constructor(t, o, a) {
                (this.conn = t),
                  (this.alert = o),
                  (this.route = a),
                  (this.addresscheck = !1),
                  (this.contaddr = !1),
                  (this.typeStat = !1),
                  (this.checkBal = {}),
                  (this.supplyAmt = 0),
                  (this.BalVal = !1);
              }
              ngOnInit() {}
              checkAddr(t, o) {
                null != t &&
                  this.conn
                    .postUrl("account/checkAddress", { address: t })
                    .subscribe((r) => {
                      1 == r.success
                        ? (this.alert.success(r.message, "", { timeOut: 2e3 }),
                          (this.addresscheck = !0))
                        : ((this.addresscheck = !0),
                          this.alert.error(r.message, "", { timeOut: 2e3 }));
                    });
              }
              SubmitLookup(t) {
                this.addresscheck
                  ? this.conn
                      .postUrl("contract/supplycheck", t.value)
                      .subscribe((a) => {
                        1 == a.success
                          ? ((this.supplyAmt = a.supply), (this.BalVal = !0))
                          : ((this.BalVal = !1),
                            this.alert.error(a.msg, "", { timeOut: 2e3 }));
                      })
                  : this.alert.error("Invalid address", "", { timeOut: 2e3 });
              }
              resetForm(t) {
                t.resetForm(), (this.BalVal = !1);
              }
            }
            return (
              (n.ɵfac = function (t) {
                return new (t || n)(e.Y36(h), e.Y36(A._W), e.Y36(u.F0));
              }),
              (n.ɵcmp = e.Xpm({
                type: n,
                selectors: [["app-supply-checker"]],
                decls: 46,
                vars: 6,
                consts: [
                  [1, "container"],
                  [
                    1,
                    "d-flex",
                    "justify-content-between",
                    "align-items-center",
                  ],
                  [1, "h4"],
                  [1, "row"],
                  [1, "col-md-3", "borderright"],
                  [1, "bg-white", "p-3"],
                  [1, "left-nav"],
                  ["routerLink", "/unitconverter"],
                  ["routerLink", "/balancecheck"],
                  ["routerLink", "/supply-checker"],
                  [1, "col-md-9"],
                  [1, "h6"],
                  [1, "borderbox", "p-3"],
                  [1, "col-lg-8"],
                  ["f", "ngForm"],
                  [1, "mb-3"],
                  [
                    "type",
                    "text",
                    "name",
                    "Address",
                    "placeholder",
                    "0x....",
                    "required",
                    "",
                    1,
                    "form-control",
                    3,
                    "ngModel",
                    "ngModelChange",
                  ],
                  ["accAdr", "ngModel"],
                  ["class", "errMsg", 4, "ngIf"],
                  [1, "btns"],
                  [1, "btn", "blue-btn", 3, "disabled", "click"],
                  [1, "btn", "btn-dark", 3, "click"],
                  ["class", "borderbox p-3", 4, "ngIf"],
                  [1, "errMsg"],
                  ["class", "error", 4, "ngIf"],
                  [1, "error"],
                  [1, "form-control"],
                ],
                template: function (t, o) {
                  if (1 & t) {
                    const a = e.EpF();
                    e._UZ(0, "app-loader"),
                      e._UZ(1, "app-header"),
                      e._UZ(2, "app-searchbar"),
                      e.TgZ(3, "section"),
                      e.TgZ(4, "div", 0),
                      e.TgZ(5, "div", 1),
                      e.TgZ(6, "div", 2),
                      e._uU(7, "Tools"),
                      e.qZA(),
                      e.qZA(),
                      e._UZ(8, "hr"),
                      e.TgZ(9, "div", 3),
                      e.TgZ(10, "div", 4),
                      e.TgZ(11, "div", 5),
                      e.TgZ(12, "ul", 6),
                      e.TgZ(13, "div", 5),
                      e.TgZ(14, "ul", 6),
                      e.TgZ(15, "li"),
                      e.TgZ(16, "a", 7),
                      e._uU(17, "Unit Converter"),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(18, "li"),
                      e.TgZ(19, "a", 8),
                      e._uU(20, "Account Balance Checker"),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(21, "li"),
                      e.TgZ(22, "a", 9),
                      e._uU(23, "Token Supply Checker"),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(24, "div", 10),
                      e.TgZ(25, "div", 11),
                      e._uU(26, "Account Balance Checker (luma)"),
                      e.qZA(),
                      e.TgZ(27, "p"),
                      e._uU(
                        28,
                        "You can look up the historical balance of an account's Luma or Tokens at a specific block number or date."
                      ),
                      e.qZA(),
                      e.TgZ(29, "div", 12),
                      e.TgZ(30, "div", 13),
                      e.TgZ(31, "form", null, 14),
                      e.TgZ(33, "div", 15),
                      e.TgZ(34, "label"),
                      e._uU(35, "Account Address*"),
                      e.qZA(),
                      e.TgZ(36, "input", 16, 17),
                      e.NdJ("ngModelChange", function (s) {
                        return (o.checkBal.addr = s);
                      })("ngModelChange", function (s) {
                        return o.checkAddr(s, "addr");
                      }),
                      e.qZA(),
                      e.YNc(38, el, 2, 1, "div", 18),
                      e.qZA(),
                      e.TgZ(39, "div", 19),
                      e.TgZ(40, "button", 20),
                      e.NdJ("click", function () {
                        e.CHM(a);
                        const s = e.MAs(32);
                        return o.SubmitLookup(s);
                      }),
                      e._uU(41, "Lookup"),
                      e.qZA(),
                      e.TgZ(42, "button", 21),
                      e.NdJ("click", function () {
                        e.CHM(a);
                        const s = e.MAs(32);
                        return o.resetForm(s);
                      }),
                      e._uU(43, "Reset"),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.YNc(44, tl, 7, 1, "div", 22),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e._UZ(45, "app-footer");
                  }
                  if (2 & t) {
                    const a = e.MAs(32),
                      r = e.MAs(37);
                    e.xp6(36),
                      e.ekj("is-invalid", r.invalid && r.touched),
                      e.Q6J("ngModel", o.checkBal.addr),
                      e.xp6(2),
                      e.Q6J("ngIf", r.errors && (r.valid || r.touched)),
                      e.xp6(2),
                      e.Q6J("disabled", a.invalid),
                      e.xp6(4),
                      e.Q6J("ngIf", o.BalVal);
                  }
                },
                directives: [
                  f,
                  g,
                  m,
                  u.yS,
                  l._Y,
                  l.JL,
                  l.F,
                  l.Fj,
                  l.Q7,
                  l.JJ,
                  l.On,
                  p.O5,
                  _,
                ],
                styles: [""],
              })),
              n
            );
          })(),
        },
        {
          path: "test-faucet",
          component: (() => {
            class n {
              constructor(t, o, a) {
                (this.conn = t),
                  (this.alert = o),
                  (this.route = a),
                  (this.facetData = { token: "" }),
                  (this.addresscheck = !1),
                  (this.trx = ""),
                  (this.timeAlt = ""),
                  (this.trxSta = !1),
                  (this.loadBtn = !1),
                  (this.currency = []),
                  (this.typedata = {}),
                  (this.min = 0),
                  (this.max = 0);
              }
              ngOnInit() {
                this.getcurrenyData();
              }
              checkAddr(t) {
                null != t &&
                  this.conn
                    .postUrl("contract/checkExitAddress", { address: t })
                    .subscribe((a) => {
                      1 == a.success
                        ? ((this.addresscheck = !0),
                          this.alert.success(a.message, "", { timeOut: 2e3 }))
                        : ((this.addresscheck = !1),
                          this.alert.error(a.message, "", { timeOut: 2e3 }));
                    });
              }
              getcurrenyData() {
                this.conn.getUrl("contract/getCurr").subscribe((t) => {
                  1 == t.success
                    ? (this.currency = t.currData)
                    : this.alert.error(t.msg, "", { timeOut: 2e3 });
                });
              }
              SendAmt(t) {
                var o = t.value;
                if (this.addresscheck) {
                  if ("" == o.amount || null == o.amount || null == o.amount)
                    return void this.alert.error("Enter Valid Data", "", {
                      timeOut: 2e3,
                    });
                  if (parseFloat(o.amount) > this.typedata.max)
                    return void this.alert.error(
                      "Please Enter less then " + this.typedata.max,
                      "",
                      { timeOut: 2e3 }
                    );
                  if (parseFloat(o.amount) < this.typedata.min)
                    return void this.alert.error(
                      "Please Enter more then " + this.typedata.min,
                      "",
                      { timeOut: 2e3 }
                    );
                  (o.type = this.typedata.type),
                    this.conn
                      .postUrl("contract/FaucetAmt", o)
                      .subscribe((a) => {
                        1 == a.success
                          ? ((this.trxSta = !0),
                            (this.trx = a.data),
                            (this.loadBtn = !1),
                            this.alert.success(
                              "Successfully transferred !",
                              "",
                              { timeOut: 2e3 }
                            ))
                          : (2 == a.success
                              ? ((this.timeAlt = a.message),
                                jQuery("#errorModal").modal("show"))
                              : this.alert.error(a.message, "", {
                                  timeOut: 2e3,
                                }),
                            (this.trxSta = !1),
                            (this.loadBtn = !1));
                      });
                } else this.alert.success("Invaild data", "");
              }
              checkCurr(t) {
                if (t) {
                  var o = this.currency.filter((a) => a.currency == t);
                  (this.typedata = o[0]),
                    (this.min = o[0].min),
                    (this.max = o[0].max);
                } else (this.min = 0), (this.max = 0);
              }
            }
            return (
              (n.ɵfac = function (t) {
                return new (t || n)(e.Y36(h), e.Y36(A._W), e.Y36(u.F0));
              }),
              (n.ɵcmp = e.Xpm({
                type: n,
                selectors: [["app-faucet-page"]],
                decls: 56,
                vars: 18,
                consts: [
                  [1, "container"],
                  [1, "ba-tit", "wf", "text-center", "h3"],
                  [1, "text-center", "small"],
                  [1, "borderbox", "p-3"],
                  [1, "mx-auto", "col-lg-6"],
                  ["autocomplete", "off"],
                  ["f", "ngForm"],
                  [1, "mb-3"],
                  [1, "form-label"],
                  [
                    "name",
                    "token",
                    "required",
                    "",
                    1,
                    "form-control",
                    "select-control",
                    3,
                    "ngModel",
                    "ngModelChange",
                  ],
                  ["seltoken", "ngModel"],
                  ["value", ""],
                  [4, "ngFor", "ngForOf"],
                  ["class", "errMsg", 4, "ngIf"],
                  [1, "d-flex", "justify-content-between"],
                  [1, "ml-2"],
                  [
                    "type",
                    "text",
                    "placeholder",
                    "Enter Amount",
                    "name",
                    "amount",
                    "onkeypress",
                    "return (event.charCode == 8 || event.charCode == 46) ? (this.value.indexOf('.') === -1) : event.charCode >= 48 && event.charCode <= 57",
                    "required",
                    "",
                    1,
                    "form-control",
                    3,
                    "ngModel",
                    "ngModelChange",
                  ],
                  ["amt", "ngModel"],
                  [
                    "type",
                    "text",
                    "placeholder",
                    "0x...",
                    "name",
                    "address",
                    "required",
                    "",
                    1,
                    "form-control",
                    3,
                    "ngModel",
                    "ngModelChange",
                  ],
                  ["walAddr", "ngModel"],
                  [1, "btns"],
                  [1, "btn", "blue-btn", 3, "disabled", "click"],
                  ["class", "p-3 borderbox mt-3", 4, "ngIf"],
                  ["id", "errorModal", 1, "modal", "fade"],
                  [1, "modal-dialog"],
                  [1, "modal-content"],
                  [1, "modal-header"],
                  [1, "modal-title"],
                  ["type", "button", "data-dismiss", "modal", 1, "close"],
                  [1, "modal-body"],
                  [3, "value"],
                  [1, "errMsg"],
                  ["class", "error", 4, "ngIf"],
                  [1, "error"],
                  [1, "p-3", "borderbox", "mt-3"],
                  [1, "form-control"],
                ],
                template: function (t, o) {
                  if (1 & t) {
                    const a = e.EpF();
                    e._UZ(0, "app-header"),
                      e._UZ(1, "app-searchbar"),
                      e.TgZ(2, "section"),
                      e.TgZ(3, "div", 0),
                      e.TgZ(4, "div", 1),
                      e._uU(5, "Luma Faucet"),
                      e.qZA(),
                      e.TgZ(6, "div", 2),
                      e._uU(
                        7,
                        "Obtain Luma testnet tokens every 24 hours for seamless and confident development."
                      ),
                      e.qZA(),
                      e._UZ(8, "hr"),
                      e.TgZ(9, "div", 3),
                      e.TgZ(10, "div", 4),
                      e.TgZ(11, "form", 5, 6),
                      e.TgZ(13, "div", 7),
                      e.TgZ(14, "label", 8),
                      e._uU(15, "select token"),
                      e.qZA(),
                      e.TgZ(16, "select", 9, 10),
                      e.NdJ("ngModelChange", function (s) {
                        return (o.facetData.token = s);
                      })("ngModelChange", function (s) {
                        return o.checkCurr(s);
                      }),
                      e.TgZ(18, "option", 11),
                      e._uU(19, "Please Select"),
                      e.qZA(),
                      e.YNc(20, ol, 3, 3, "ng-container", 12),
                      e.qZA(),
                      e.YNc(21, al, 2, 1, "div", 13),
                      e.qZA(),
                      e.TgZ(22, "div", 7),
                      e.TgZ(23, "div", 14),
                      e.TgZ(24, "label", 8),
                      e._uU(25, "Amount"),
                      e.qZA(),
                      e.TgZ(26, "div"),
                      e.TgZ(27, "span"),
                      e._uU(28),
                      e.qZA(),
                      e.TgZ(29, "span", 15),
                      e._uU(30),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(31, "input", 16, 17),
                      e.NdJ("ngModelChange", function (s) {
                        return (o.facetData.amt = s);
                      }),
                      e.qZA(),
                      e.YNc(33, sl, 2, 1, "div", 13),
                      e.qZA(),
                      e.TgZ(34, "div", 7),
                      e.TgZ(35, "label", 8),
                      e._uU(36, "Wallet Address"),
                      e.qZA(),
                      e.TgZ(37, "input", 18, 19),
                      e.NdJ("ngModelChange", function (s) {
                        return (o.facetData.address = s);
                      })("ngModelChange", function (s) {
                        return o.checkAddr(s);
                      }),
                      e.qZA(),
                      e.YNc(39, cl, 2, 1, "div", 13),
                      e.qZA(),
                      e.TgZ(40, "div", 20),
                      e.TgZ(41, "button", 21),
                      e.NdJ("click", function () {
                        e.CHM(a);
                        const s = e.MAs(12);
                        return o.SendAmt(s);
                      }),
                      e._uU(42, "Send amount"),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.YNc(43, dl, 6, 1, "div", 22),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e._UZ(44, "app-footer"),
                      e.TgZ(45, "div", 23),
                      e.TgZ(46, "div", 24),
                      e.TgZ(47, "div", 25),
                      e.TgZ(48, "div", 26),
                      e.TgZ(49, "h5", 27),
                      e._uU(50, "Wait a Little"),
                      e.qZA(),
                      e.TgZ(51, "button", 28),
                      e._uU(52, "\xd7"),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(53, "div", 29),
                      e.TgZ(54, "p"),
                      e._uU(55),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA();
                  }
                  if (2 & t) {
                    const a = e.MAs(12),
                      r = e.MAs(17),
                      s = e.MAs(32),
                      c = e.MAs(38);
                    e.xp6(16),
                      e.ekj("is-invalid", r.invalid && r.touched),
                      e.Q6J("ngModel", o.facetData.token),
                      e.xp6(4),
                      e.Q6J("ngForOf", o.currency),
                      e.xp6(1),
                      e.Q6J("ngIf", r.errors && (r.valid || r.touched)),
                      e.xp6(7),
                      e.hij("min\t: ", o.min, ""),
                      e.xp6(2),
                      e.hij("max : ", o.max, ""),
                      e.xp6(1),
                      e.ekj("is-invalid", s.invalid && s.touched),
                      e.Q6J("ngModel", o.facetData.amt),
                      e.xp6(2),
                      e.Q6J("ngIf", s.errors && (s.valid || s.touched)),
                      e.xp6(4),
                      e.ekj("is-invalid", c.invalid && c.touched),
                      e.Q6J("ngModel", o.facetData.address),
                      e.xp6(2),
                      e.Q6J("ngIf", c.errors && (c.valid || c.touched)),
                      e.xp6(2),
                      e.Q6J("disabled", a.invalid || o.loadBtn),
                      e.xp6(2),
                      e.Q6J("ngIf", o.trxSta),
                      e.xp6(12),
                      e.hij(
                        " You have requested tokens in the last 24 hours. Please wait ",
                        o.timeAlt,
                        " before trying again "
                      );
                  }
                },
                directives: [
                  g,
                  m,
                  l._Y,
                  l.JL,
                  l.F,
                  l.EJ,
                  l.Q7,
                  l.JJ,
                  l.On,
                  l.YN,
                  l.Kr,
                  p.sg,
                  p.O5,
                  l.Fj,
                  _,
                ],
                styles: [""],
              })),
              n
            );
          })(),
        },
      ];
      let pl = (() => {
          class n {}
          return (
            (n.ɵfac = function (t) {
              return new (t || n)();
            }),
            (n.ɵmod = e.oAB({ type: n })),
            (n.ɵinj = e.cJS({ imports: [[u.Bz.forRoot(ul)], u.Bz] })),
            n
          );
        })(),
        gl = (() => {
          class n {
            constructor(t, o, a) {
              (this.conn = t),
                (this.route = o),
                (this.alert = a),
                (this.title = "HrExplorer"),
                this.conn.loggedIn() && this.conn.idleLogout();
            }
          }
          return (
            (n.ɵfac = function (t) {
              return new (t || n)(e.Y36(h), e.Y36(u.F0), e.Y36(A._W));
            }),
            (n.ɵcmp = e.Xpm({
              type: n,
              selectors: [["app-root"]],
              decls: 2,
              vars: 0,
              consts: [
                [
                  "rel",
                  "stylesheet",
                  "href",
                  "https://pro.fontawesome.com/releases/v5.10.0/css/all.css",
                  "integrity",
                  "sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p",
                  "crossorigin",
                  "anonymous",
                ],
              ],
              template: function (t, o) {
                1 & t && (e._UZ(0, "link", 0), e._UZ(1, "router-outlet"));
              },
              directives: [u.lC],
              styles: [""],
            })),
            n
          );
        })();
      var Zl = T(7817),
        _l = T(6339),
        hl = T(2501);
      const ml = { url: Y, options: { transports: ["websocket", "polling"] } };
      let Tl = (() => {
        class n {}
        return (
          (n.ɵfac = function (t) {
            return new (t || n)();
          }),
          (n.ɵmod = e.oAB({ type: n, bootstrap: [gl] })),
          (n.ɵinj = e.cJS({
            providers: [
              h,
              {
                provide: E.We,
                useValue: "6LdiKWwpAAAAANByYo411XluH_UHb8FB4a0ZwT5W",
              },
              ee.tT,
              {
                provide: Q.F_,
                useValue: "https://unpkg.com/monaco-editor@0.31.1/min/vs",
              },
            ],
            imports: [
              [
                z.b2,
                le.PW,
                R.JF,
                pl,
                l.u5,
                l.UX,
                ce.bB,
                A.Rh.forRoot({
                  positionClass: "toast-top-right",
                  preventDuplicates: !0,
                  timeOut: 4e3,
                }),
                ie.Ar.forRoot({ config: {} }),
                E.dw,
                ee.zk,
                Q.nm,
                Zl.s,
                _l.Iq,
                hl.T,
                x.JX,
                K.HB.forRoot(ml),
              ],
            ],
          })),
          n
        );
      })();
      (0, e.G48)(),
        z
          .q6()
          .bootstrapModule(Tl)
          .catch((n) => console.error(n));
    },
    7020: () => {},
  },
  (L) => {
    L.O(0, [736], () => L((L.s = 5003))), L.O();
  },
]);
