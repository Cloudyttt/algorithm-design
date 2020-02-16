let deepCopy = val => {
  if(typeof val === 'object'){
    let clonetarget = Array.isArray(val) ? [] : {}
    for(const key in val){
      clonetarget[key] = deepCopy(val[key])
    }
    return clonetarget
  } else {
    return val
  }
};
