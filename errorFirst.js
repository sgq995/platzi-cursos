function test(cb) {
  setTimeout(() => {
    try {
      let a = 3 + z;
      cb(null, a);
    } catch (err) {
      cb(err, null);
    }
  }, 1000);
}

test((err, data) => {
  if (err) {
    console.error(err);
    return false;
  }
});
