// const Tab = [1,2,3,4,5];
// var dblTab = Tab.map(e => e*2);
// console.log(dblTab);
const departMinutes = 1/4;
const time = document.querySelector('#time');
let temps = departMinutes * 60;

let dec = setInterval(() => {
  const minutes = Math.floor(temps / 60);
  let secondes = temps % 60;

  secondes = secondes < 10 ? "0" + secondes : secondes;
  
  console.log(`${minutes}:${secondes}`);
  time.innerHTML = `${minutes}:${secondes}`;
  temps = temps <= 0 ? 0 : temps - 1;
  if(temps == 0 && secondes==0){
     clearInterval(dec)
  }
}, 1000);