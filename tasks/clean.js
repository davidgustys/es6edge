var Del = require('del');



module.exports = function(cb){


    Del(['./dist/**'], cb);

};
