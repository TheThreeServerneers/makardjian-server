const faker = require('faker');


const discountGenerator = (stringPrice) => {
  let discount;
  let price = Number(stringPrice.slice(1));
  const randomNum = Math.floor(Math.random() * 10) + 1;
  const potentialDiscounts = [0.1, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.7];
  const randomIndex = Math.floor(Math.random() * 8);
  if (randomNum <= 7) {
    discount = potentialDiscounts[randomIndex];
    const dollarsOff = price * discount;
    price -= dollarsOff;
    discount = ((discount * 100).toString() + '%');
    return ('$' + price.toFixed(2).toString());
  }
  return stringPrice;
};

const descriptionGenerator = () => {

  return faker.lorem.paragraph();
};

const reviewAverageGenerator = () => {
  const possibleScores = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
  const randomScore = Math.floor(Math.random() * 9);
  const result = possibleScores[randomScore];
  return result;
};

const products = [];
products.push([
  ['https://images-na.ssl-images-amazon.com/images/I/61bMV3oE-8L._SX879_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/61bMV3oE-8L._SL1010_.jpg'],
  ['https://images-na.ssl-images-amazon.com/images/I/81s-7zDprgL._SY879_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81s-7zDprgL._SL1500_.jpg'],
  ['https://images-na.ssl-images-amazon.com/images/I/61IVFlGBFKL._SY879_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/61IVFlGBFKL._SL1500_.jpg'],
  ['https://images-na.ssl-images-amazon.com/images/I/710iVeIJ8VL._SY879_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/710iVeIJ8VL._SL1500_.jpg'],
  ['https://images-na.ssl-images-amazon.com/images/I/6108wq2-%2ByL._SY879_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/6108wq2-%2ByL._SL1500_.jpg']
]);
products.push([
  ['https://images-na.ssl-images-amazon.com/images/I/911bSgYftRL._SX679_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/911bSgYftRL._SL1500_.jpg'],
  ['https://images-na.ssl-images-amazon.com/images/I/71OBoU4KN0L._SX679_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/71OBoU4KN0L._SL1500_.jpg'],
  ['https://images-na.ssl-images-amazon.com/images/I/81ry941DTDL._SX679_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81ry941DTDL._SL1500_.jpg'],
  ['https://images-na.ssl-images-amazon.com/images/I/91hhCXj9dbL._SX679_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/91hhCXj9dbL._SL1500_.jpg'],
  ['https://images-na.ssl-images-amazon.com/images/I/81xm%2BPZlZQL._SX679_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81xm%2BPZlZQL._SL1500_.jpg'],
]);
products.push([
  ['https://images-na.ssl-images-amazon.com/images/I/81OAEATjUAL._SX679_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81OAEATjUAL._SL1500_.jpg'],
  ['https://images-na.ssl-images-amazon.com/images/I/81%2BDlE33ZXL._SX679_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81%2BDlE33ZXL._SL1500_.jpg'],
  ['https://images-na.ssl-images-amazon.com/images/I/81PTwrJ5L9L._SX679_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81PTwrJ5L9L._SL1500_.jpg'],
  ['https://images-na.ssl-images-amazon.com/images/I/61QvN3AaetL._SX679_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/61QvN3AaetL._SL1500_.jpg'],
  ['https://images-na.ssl-images-amazon.com/images/I/81PTwrJ5L9L._SX679_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81PTwrJ5L9L._SL1500_.jpg'],
]);
products.push([
  ['https://images-na.ssl-images-amazon.com/images/I/81OO%2BFAOmpL._SX679_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81OO%2BFAOmpL._SL1500_.jpg'],
  ['https://images-na.ssl-images-amazon.com/images/I/91j39xqQmYL._SX679_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/91j39xqQmYL._SL1500_.jpg'],
  ['https://images-na.ssl-images-amazon.com/images/I/81Uh627QM1L._SX679_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81Uh627QM1L._SL1500_.jpg'],
]);
products.push([
  ['https://images-na.ssl-images-amazon.com/images/I/91Sv3ReNw1L._UX679_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/91Sv3ReNw1L._UL1500_.jpg'],
  ['https://images-na.ssl-images-amazon.com/images/I/714Xf4mfEHL._UY879_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/714Xf4mfEHL._UL1500_.jpg'],
  ['https://images-na.ssl-images-amazon.com/images/I/816GemF356L._UY879_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/816GemF356L._UL1500_.jpg'],
  ['https://images-na.ssl-images-amazon.com/images/I/81sR5lnPSEL._UY879_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81sR5lnPSEL._UL1500_.jpg'],
  ['https://images-na.ssl-images-amazon.com/images/I/91unmglFkZL._UY879_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/91unmglFkZL._UL1500_.jpg'],
]);
products.push([
  ['https://images-na.ssl-images-amazon.com/images/I/61xO8iHvHGL._UX679_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/61xO8iHvHGL.UL1000.jpg'],
  ['https://images-na.ssl-images-amazon.com/images/I/61VqgbO1jeL._UX679_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/61VqgbO1jeL._UL1000_.jpg'],
  ['https://images-na.ssl-images-amazon.com/images/I/61Q2VAxjXDL._UX679_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/61Q2VAxjXDL._UL1000_.jpg'],
  ['https://images-na.ssl-images-amazon.com/images/I/71f0rd1qtWL._UX679_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/71f0rd1qtWL._UL1000_.jpg'],
]);
products.push([
  ['https://images-na.ssl-images-amazon.com/images/I/71rNQhd1KUL._SL879_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/71rNQhd1KUL._SL1500_.jpg'],
  ['https://images-na.ssl-images-amazon.com/images/I/71ZFbBraPwL._SL879_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/71ZFbBraPwL._SL1500_.jpg'],
  ['https://images-na.ssl-images-amazon.com/images/I/81MqnPUDzML._SL879_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81MqnPUDzML._SL1500_.jpg'],
  ['https://images-na.ssl-images-amazon.com/images/I/814DOyH9h%2BL._SL879_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/814DOyH9h%2BL._SL1500_.jpg'],
  ['https://images-na.ssl-images-amazon.com/images/I/71sowYLPYPL._SL879_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/71sowYLPYPL._SL1500_.jpg'],
]);
products.push([
  ['https://images-na.ssl-images-amazon.com/images/I/61U8ScEenhL._SL679_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/61U8ScEenhL._SL1000_.jpg'],
  ['https://images-na.ssl-images-amazon.com/images/I/61ikAJnULvL._SL679_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/61ikAJnULvL._SL1000_.jpg'],
  ['https://images-na.ssl-images-amazon.com/images/I/61RrCPRq7mL._SL679_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/61RrCPRq7mL._SL1000_.jpg'],
  ['https://images-na.ssl-images-amazon.com/images/I/71WJE9YHjaL._SL679_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/71WJE9YHjaL._SL1000_.jpg'],
  ['https://images-na.ssl-images-amazon.com/images/I/71-oquug6dL._SL679_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/71-oquug6dL._SL1000_.jpg'],
]);
products.push([
  ['https://images-na.ssl-images-amazon.com/images/I/71IIHq-oZrL._SL879_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/71IIHq-oZrL._SL1500_.jpg'],
  ['https://images-na.ssl-images-amazon.com/images/I/719HGiPBaiL._SL679_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/719HGiPBaiL._SL1000_.jpg'],
  ['https://images-na.ssl-images-amazon.com/images/I/817yQ06fCZL._SL879_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/817yQ06fCZL._SL1500_.jpg'],
  ['https://images-na.ssl-images-amazon.com/images/I/61yCGA-izwL._SL679_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/61yCGA-izwL._SL1100_.jpg'],
]);

module.exports = {
  reviewAverageGenerator,
  discountGenerator,
  descriptionGenerator,
  products,
};
