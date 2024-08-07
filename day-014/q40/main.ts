function make_album(artist: string, title: string, tracks?: number) {
  let album = { artist, title };
  if (tracks) {
    album[tracks];
  }
  return album;
}

console.log(make_album("diljit", "GOAT"));
console.log(make_album("honey", "desi kalakaar"));
console.log(make_album("young stunners", "whynotmerijan", 22));
