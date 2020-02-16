function myExtend(C, P){
  let F = function (){}
  F.prototype = P.prototype
  let C = new F()
  C.prototype.constructor = C
  C.super = P.prototype
}