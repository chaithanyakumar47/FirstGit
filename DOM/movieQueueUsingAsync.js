console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {

  const promiseWifeBringingTicks = new Promise( (resolve, reject) => {
    setTimeout(() => resolve('ticket'),3000);
  });

  const getPopcorn = new Promise((resolve,reject) => resolve('popcorn'));

  const addButter = new Promise((resolve, reject) => resolve('butter'));

  const getColdDrinks = new Promise((resolve, reject) => resolve('cold Drinks'));

  let ticket = await promiseWifeBringingTicks;

  console.log(`wife: I have the ${ticket}`);
  console.log('husband: we should go in');
  console.log('wife: no Iam hungry');


  let popcorn = await getPopcorn;

  console.log(`husband: I got some ${popcorn}`)
  console.log('husband: we should go in');
  console.log('wife: I need butter on my popcorn');

  let butter = await addButter;

  console.log(`husband: I got some ${butter} on popcorn`);
  console.log('husband: anything else darling?');
  console.log('wife: We are getting late, But I need cold drinks');
  console.log('husband: thank you for the remainder *grins*');

  let drinks = await getColdDrinks;

  console.log(`husband: I got the ${drinks}`);
  console.log('wife: We have everything we need, lets go');
  console.log('husband: Thank God!!!');



  return ticket;




}

preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');