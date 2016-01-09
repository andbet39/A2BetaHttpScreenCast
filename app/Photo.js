System.register([], function(exports_1) {
    var Photo;
    return {
        setters:[],
        execute: function() {
            Photo = (function () {
                function Photo(id, server, farm, secret) {
                    this.id = id;
                    this.server = server;
                    this.farm = farm;
                    this.secret = secret;
                }
                Object.defineProperty(Photo.prototype, "getUrl", {
                    get: function () {
                        return 'https://farm' + this.farm + '.staticflickr.com/' + this.server + '/' + this.id + '_' + this.secret + '_q.jpg';
                    },
                    enumerable: true,
                    configurable: true
                });
                return Photo;
            })();
            exports_1("Photo", Photo);
        }
    }
});
//# sourceMappingURL=Photo.js.map