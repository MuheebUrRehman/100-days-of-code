var myObj = {
    name: "muheeb",
    outerFunc: function () {
        var _this = this;
        console.log(this.name);
        var innerFunc = function () {
            console.log(_this.name);
        };
        innerFunc();
    },
};
myObj.outerFunc();
