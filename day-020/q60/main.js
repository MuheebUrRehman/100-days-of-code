var userprofile = (function () {
    var name = "muheeb";
    var age = 22;
    return {
        displayinfo: function () {
            console.log("name:".concat(name, ", age:").concat(age));
        },
    };
})();
userprofile.displayinfo();
