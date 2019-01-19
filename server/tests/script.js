import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 100,
  duration: '180s',
};

const pickNumber = () => {
  const num = Math.floor(Math.random() * 10000000);
  if (num > 9000000) {
    return num;
  } else if (num > 7000000) {
    return (num % 10) * 100;
  } else if (num > 6000000) {
    return num % 100;
  } else if (num > 5000000) {
    return num % 1000;
  } else if (num > 4000000) {
    return num % 10000;
  } else if (num > 3000000) {
    return num % 100000;
  }
  return num % 1000000;
};

var obj = {};
for (var i = 0; i < 1000; i++) {
  var item = pickNumber();
  obj[item] = obj[item] + 1 || 1;
}
var sortable = [];
for (var key in obj) {
    sortable.push([key, obj[key]]);
}

sortable.sort(function(a, b) {
    return a[1] - b[1];
});

console.log(sortable);

export default function () {
  const num = pickNumber();
  const responses = http.batch([
    `http://localhost:4000/${num}/`,
    `http://localhost:4000/${num}/styles.css`,
    `http://localhost:4000/products/${num}/`,
  ]);
  check(responses[0], {
    success: r => r.status === 200,
  });
  sleep(0.05);
}
