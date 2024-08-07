let userprofile = (function () {
  let name = "muheeb";
  let age = 22;
  return {
    displayinfo: function () {
      console.log(`name:${name}, age:${age}`);
    },
  };
})();

userprofile.displayinfo();
