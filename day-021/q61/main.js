var vehical;
(function (vehical) {
    vehical[vehical["car"] = 0] = "car";
    vehical[vehical["trucks"] = 1] = "trucks";
    vehical[vehical["motorcycles"] = 2] = "motorcycles";
})(vehical || (vehical = {}));
console.log(vehical.car);
