let myObj = {
  msg: "hello world",
  traditionalFunc: function () {
    console.log(this.msg);
  },
  arrowFunc: () => {
    console.log(this.msg);
  },
};

myObj.traditionalFunc();
myObj.arrowFunc();
