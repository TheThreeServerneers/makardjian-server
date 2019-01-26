import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 100,
  duration: '240s',
};

const typePicker = () => {
  const num = Math.floor(Math.random() * 100);
  if (num > 90) {
    return ['GET', 11234];
  }
  if (num > 85) {
    return ['GET', 813924];
  }
  if (num > 80) {
    return ['GET', 873894];
  }
  if (num > 75) {
    return ['GET', 23422];
  }
  if (num > 70) {
    return ['GET', 23424];
  }
  if (num > 30) {
    return ['GET', Math.floor(Math.random() * 9900000)];
  }
  if (num > 10) {
    return ['UPDATE', Math.floor(Math.random() * 9900000)];
  }
  return ['POST', Math.floor(Math.random() * 9900000)];
};

export default function () {
  const num = Math.floor(Math.random() * 10000000);
  const arr = typePicker();
  let req1 = {};
  let req2 = {};
  let req3 = {};
  if (arr[0] === 'GET') {
    req1 = {
      method: 'GET',
      url: `http://load-balancer-1-119359177.us-east-2.elb.amazonaws.com/${arr[1]}/`,
    };
    req2 = {
      method: 'GET',
      url: `http://load-balancer-1-119359177.us-east-2.elb.amazonaws.com/${arr[1]}/style.css`,
    };
    req3 = {
      method: 'GET',
      url: `http://load-balancer-1-119359177.us-east-2.elb.amazonaws.com/products/${arr[1]}/`,
    };
  } else if (arr[0] === 'POST') {
    req1 = {
      method: 'GET',
      url: `http://load-balancer-1-119359177.us-east-2.elb.amazonaws.com/${arr[1]}/`,
    };
    req2 = {
      method: 'GET',
      url: `http://load-balancer-1-119359177.us-east-2.elb.amazonaws.com/${arr[1]}/style.css`,
    };
    req3 = {
      method: 'POST',
      url: 'http://load-balancer-1-119359177.us-east-2.elb.amazonaws.com/products/',
      body: {
        product_title: 'Egg McMuffin Machine',
        vendor_name: 'Eggselent Selection',
        review_average: 1,
        review_count: 2312344,
        answered_questions: 122,
        list_price: '11234.12',
        price: '10233.23',
        prime: true,
        description: 'Get you some of these amazing eggs!!! And run wild.',
        photo1: 'https://images-na.ssl-images-amazon.com/images/I/81408zrlEZL._UX625_.jpg',
        photo1_zoom: 'https://images-na.ssl-images-amazon.com/images/I/81408zrlEZL._UX1000_.jpg',
        photo2: 'https://images-na.ssl-images-amazon.com/images/I/81e77hshBkL._UY500_.jpg',
        photo2_zoom: 'https://images-na.ssl-images-amazon.com/images/I/81e77hshBkL._UY825_.jpg',
        photo3: 'https://images-na.ssl-images-amazon.com/images/I/71Zb7tk4PgL._UY535_.jpg',
        photo3_zoom: 'https://images-na.ssl-images-amazon.com/images/I/71Zb7tk4PgL._UY825_.jpg',
        photo4: 'https://images-na.ssl-images-amazon.com/images/I/71LC-ThHZ4L._UX395_.jpg',
        photo4_zoom: 'https://images-na.ssl-images-amazon.com/images/I/71LC-ThHZ4L._UX625_.jpg',
        photo5: 'https://images-na.ssl-images-amazon.com/images/I/816y2bcAJWL._UX395_.jpg',
        photo5_zoom: 'https://images-na.ssl-images-amazon.com/images/I/816y2bcAJWL._UX625_.jpg',
      },
      params: { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
    };
  } else if (arr[0] === 'UPDATE') {
    req1 = {
      method: 'GET',
      url: `http://load-balancer-1-119359177.us-east-2.elb.amazonaws.com/${arr[1]}/`,
    };
    req2 = {
      method: 'GET',
      url: `http://load-balancer-1-119359177.us-east-2.elb.amazonaws.com/${arr[1]}/style.css`,  
    };
    req3 = {
      method: 'PATCH',
      url: `http://load-balancer-1-119359177.us-east-2.elb.amazonaws.com/products/${arr[1]}`,
      body: {
        product_title: 'Shoes with a patch!',
        vendor_name: 'The Patchy Company',
        review_average: 5,
        review_count: 23423,
        answered_questions: 12,
        list_price: '1234.32',
        price: '1023.12',
        prime: true,
        description: 'Trying your luck with the new patches? Try our shoes with a patch!! So amazing and wonderful and I love them.',
        photo1: 'https://images-na.ssl-images-amazon.com/images/I/81408zrlEZL._UX625_.jpg',
        photo1_zoom: 'https://images-na.ssl-images-amazon.com/images/I/81408zrlEZL._UX1000_.jpg',
        photo2: 'https://images-na.ssl-images-amazon.com/images/I/81e77hshBkL._UY500_.jpg',
        photo2_zoom: 'https://images-na.ssl-images-amazon.com/images/I/81e77hshBkL._UY825_.jpg',
        photo3: 'https://images-na.ssl-images-amazon.com/images/I/71Zb7tk4PgL._UY535_.jpg',
        photo3_zoom: 'https://images-na.ssl-images-amazon.com/images/I/71Zb7tk4PgL._UY825_.jpg',
        photo4: 'https://images-na.ssl-images-amazon.com/images/I/71LC-ThHZ4L._UX395_.jpg',
        photo4_zoom: 'https://images-na.ssl-images-amazon.com/images/I/71LC-ThHZ4L._UX625_.jpg',
        photo5: 'https://images-na.ssl-images-amazon.com/images/I/816y2bcAJWL._UX395_.jpg',
        photo5_zoom: 'https://images-na.ssl-images-amazon.com/images/I/816y2bcAJWL._UX625_.jpg',
      },
      params: { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
    };
  } else if (arr[0] === 'DELETE') {
    req1 = {
      method: 'GET',
      url: `http://load-balancer-1-119359177.us-east-2.elb.amazonaws.com/${arr[1]}/`,
    };
    req2 = {
      method: 'GET',
      url: `http://load-balancer-1-119359177.us-east-2.elb.amazonaws.com/${arr[1]}/style.css`,
    };
    req3 = {
      method: 'DELETE',
      url: `http://load-balancer-1-119359177.us-east-2.elb.amazonaws.com/products/${arr[1]}/`,
    };
  }
  const responses = http.batch([req1, req2, req3]);
  check(responses[0], {
    success: r => r.status === 200,
  });
  sleep(0.1);
}
