import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 100,
  duration: '180s',
};

export default function () {
  const num = Math.floor(Math.random() * 10000000);
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
