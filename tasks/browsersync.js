var BrowserSync = require('browser-sync');


module.exports = function(){

    return BrowserSync({
        server: {
            baseDir: ["./"],
            routes: {
                "/": '.tmp',
                "/bower_components": "../bower_components",
                "/assets": "../assets"
            }
        }
    })
}
