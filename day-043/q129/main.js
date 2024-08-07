var _this = this;
var myObj = {
    msg: "hello world",
    traditionalFunc: function () {
        console.log(this.msg);
    },
    arrowFunc: function () {
        console.log(_this.msg);
    },
};
myObj.traditionalFunc();
myObj.arrowFunc();
