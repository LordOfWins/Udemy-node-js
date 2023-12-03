const fetchData = ()=> {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => { resolve('Done!') }, 1500)
  });
  return promise;
}

setTimeout(() => {
  console.log('play.js loaded');
  fetchData().then(text => {
    console.log(text);
  
  }
)}, 2000);
// 가장 나중에 실행됨

console.log('play.js executed');
console.log('hi from play.js')
