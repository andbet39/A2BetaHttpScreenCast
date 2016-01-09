System.register(['angular2/core', 'angular2/http', 'angular2/common', 'rxjs/Rx', './Photo'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, common_1, Photo_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (_1) {},
            function (Photo_1_1) {
                Photo_1 = Photo_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(http) {
                    var _this = this;
                    this.http = http;
                    this.searchCtrl = new common_1.Control();
                    this.API_KEY = "e397e7163ac378374bc4a39ba11f8bbd";
                    this.photos = [];
                    this.searchCtrl.valueChanges
                        .debounceTime(400)
                        .distinctUntilChanged()
                        .subscribe(function (searchCtrl) {
                        console.log(_this.searchStr);
                        _this.searchPhoto(_this.searchStr);
                    });
                }
                AppComponent.prototype.searchPhoto = function (searchStr) {
                    var _this = this;
                    console.log("Photo search :" + this.searchStr);
                    var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&&api_key='
                        + this.API_KEY + '&text=' + this.searchStr + '&format=json&nojsoncallback=1';
                    this.http.get(url)
                        .take(3)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        _this.photos = [];
                        data.photos.photo.forEach(function (photo) {
                            _this.photos.push(new Photo_1.Photo(photo.id, photo.server, photo.farm, photo.secret));
                        });
                        console.log(data);
                    }, function (err) { console.log(err); });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: './templates/photosearch.html'
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map