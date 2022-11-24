const bcrypt = require('bcrypt');

const password = '1234abcd';

(async function () {
  const res = await bcrypt.hash(password, 5);
  console.log(res);

  const test = await bcrypt.compare(password, res);
  console.log(test);

  const testOld = await bcrypt.compare(password, '$2b$05$QOLIvXnbSEL.z6ery7jzdOh5WQXIufhh4eGvM67KJkG2Jy95Ps3TG');
  console.log(testOld);
})();
