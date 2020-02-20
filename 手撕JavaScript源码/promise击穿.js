function fn(val) {
  console.log(val);
  return val;
}

let p = new Promise(resolve => {
  resolve(fn('666'))
});
p.then(val=>{
  console.log('val in then 1', val)
  val += 666
  return val
}).then(val=>{
  console.log('val in then 2', val)
  val += 666
  return val
}).then(fn('888')).then(val=>{
  console.log('val in then 3', val)
}).then(val=>{
  console.log('val in then 4', val)
})