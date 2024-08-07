const myObj = {
  name: "muheeb",
  outerFunc: function () {
    console.log(this.name);
    let innerFunc = () => {
      console.log(this.name);
    };
    innerFunc();
  },
};

myObj.outerFunc();
