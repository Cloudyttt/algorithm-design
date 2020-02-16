// 使用 ECMAScript（JS）代码实现一个事件类Event ，包含下面功能：绑定事件、解绑事件和派发事件。


class Event {
  constructor () {
    // 储存事件的数据结构
    // 为查找迅速， 使用对象（字典）
    this._cache = {}
  }

  // 绑定
  on(type, callback) {
    // 为了按类查找方便和节省空间
    // 将同一类型事件放到一个数组中
    // 这里的数组是队列， 遵循先进先出
    // 即新绑定的事件先触发
    let fns = (this._cache[type] = this._cache[type] || [])
    if(fns.indexOf(callback) === -1) {
      fns.push(callback)
    }
    return this
  }

  // 触发
  // emit
  trigger(type, data) {
    let fns = this._cache[type]
    if(Array.isArray(fns)) {
      fns.forEach((fn) => {
        fn(data)
      })
    }
    return this
  }
  once(type, data)
  
  // 解绑
  off (type, callback) {
    let fns = this._cache[type]
    if(Array.isArray(fns)) {
      if(callback) {
        let index = fns.indexOf(callback)
        if(index !== -1) {
          fns.splice(index, 1)
        }
      } else {
        // 全部清空
        fns.length = 0
      }
    }
    return this
  }
}

let e = new Event()

e.on('click',function(){
  console.log('on')
})
e.on('click',function(){
  console.log('onon')
})
// e.trigger('click', '666')
console.log(e)