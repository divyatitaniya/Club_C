webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.goToHome = function () {
        //this.navCtrl.push(HomePage);
        window.history.go(-3);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/guestuser/Desktop/myApp2/src/pages/home/home.html"*/`<ion-toolbar color="primary">\n	<ion-navbar>\n		<!--	<ion-icon ios="ios-arrow-back" (click)="goToHome()" id="arrow"></ion-icon> -->\n		<button ion-button (click)="goToHome()"> < </button>\n		<ion-title id="myApp"> \n    	My App\n		</ion-title>\n	</ion-navbar> \n <button ion-button menuToggle right>\n    <ion-icon name="menu"></ion-icon>\n  </button>\n</ion-toolbar>\n\n<!--\n<ion-menu [content]="mycontent">\n  <ion-content>\n    <ion-list style="padding-left:0px; padding-right:0px;padding-bottom: 5%;">\n			<button ion-button clear style="width:100%; color:#0063FF;" (click)="goToHome()">Home</button>\n			<button ion-button clear style="width:100%; color:#0063FF;" (click)="goToService()">Service</button>	\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav #mycontent [root]="rootPage"></ion-nav>\n-->\n\n\n<ion-content>\n  <ion-grid>\n		\n	  <ion-row >\n		<ion-col width-50>\n		 <ion-card class="text-center" padding style="background: #2E3293;" id="apps">\n			<img src="assets/imgs/icon_service.png" class="img-width"/>\n			 <ion-card-content style="padding: 13px 4px;text-align: center;margin-bottom: -4%;">\n			  <h4 class="card-title text-uppercase text-white pane-min-height" style="color: #fff;font-size : 1.1rem">\n				ROAD SIDE SERVICE\n			  </h4>\n			</ion-card-content>\n\n		 </ion-card>\n	    </ion-col>\n		<ion-col width-50>\n		  <ion-card class="text-center" padding style="background:	#EC1F23;" id="apps">\n			<img src="assets/imgs/icon_map.png" class="img-width"/>\n			 <ion-card-content style="padding: 13px 4px;text-align: center;margin-bottom: -4%;">\n			  <h4 class="card-title text-uppercase text-white pane-min-height" style="color: #fff;font-size : 1.1rem">\n				AAA MAPS\n			  </h4>\n			</ion-card-content>\n\n		 </ion-card>\n	   </ion-col>\n	\n		</ion-row>\n		\n\n	  <ion-row >\n		<ion-col width-50>\n		  <ion-card class="text-center" padding style="background: #3BB44B;" id="apps">\n			<img src="assets/imgs/icon_hotel.png" class="img-width"/>\n			 <ion-card-content style="padding: 13px 4px;text-align: center;margin-bottom: -4%;">\n			  <h4 class="card-title text-uppercase text-white pane-min-height" style="color: #fff;font-size : 1.1rem">\n				HOTEL BOOKING\n			  </h4>\n			</ion-card-content>\n\n		 </ion-card>\n	    </ion-col>\n		<ion-col width-50>\n		  <ion-card class="text-center" padding style="background: #D50065;" id="apps">\n			<img src="assets/imgs/icon_flight.png" class="img-width"/>\n			 <ion-card-content style="padding: 13px 4px;text-align: center;margin-bottom: -4%;">\n			  <h4 class="card-title text-uppercase text-white pane-min-height" style="color: #fff; font-size : 1.1rem">\n				FLIGHT BOOKING\n			  </h4>\n			</ion-card-content>\n		\n		 </ion-card>\n		 </ion-col>\n		</ion-row>\n\n\n		<ion-row >\n		 <ion-col width-50>\n		  <ion-card class="text-center" padding style="background: #A30065;" id="apps">\n			<img src="assets/imgs/icon_fuel.png" class="img-width"/>\n			 <ion-card-content style="padding: 13px 4px;text-align: center;margin-bottom: -4%;">\n			  <h4 class="card-title text-uppercase text-white pane-min-height" style="color: #fff; font-size : 1.1rem">\n				FUEL FILLING\n			  </h4>\n			</ion-card-content>\n\n		 </ion-card>\n		 </ion-col>\n		 <ion-col width-50>\n		  <ion-card class="text-center" padding style="background: #649B64;" id="apps">\n			<img src="assets/imgs/icon_medical.png" class="img-width"/>\n			 <ion-card-content style="padding: 13px 4px;text-align: center;margin-bottom: -4%;">\n			  <h4 class="card-title text-uppercase text-white pane-min-height" style="color: #fff; font-size : 1.1rem">\n				EMERGENCY SUPPORT\n			  </h4>\n			</ion-card-content>\n\n		 </ion-card>\n	   </ion-col>\n	\n		</ion-row> \n	\n  </ion-grid>\n</ion-content>\n`/*ion-inline-end:"/Users/guestuser/Desktop/myApp2/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/guestuser/Desktop/myApp2/src/app/app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"/Users/guestuser/Desktop/myApp2/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map