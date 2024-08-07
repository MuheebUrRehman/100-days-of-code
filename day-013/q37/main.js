function make_shirt(size, msg) {
    if (size === void 0) { size = "large"; }
    if (msg === void 0) { msg = "i love typescript"; }
    console.log("make a shirt with ".concat(size, " and write ").concat(msg, " on it"));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "i like python");
