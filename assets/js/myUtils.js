(function () {
  /**
   * 判断当前的环境
   * self 表示 window 环境
   * global 表示 node 环境
   * globalThis 全局环境在 window和node 通用
   */
  var root =
    (typeof self == "object" && self.self === self && self) ||
    (typeof global == "object" && global.global === global && global) ||
    Function("return this")() ||
    {};

  /**
   *
   * @param {obj} obj
   * @returns
   * 核心代码，拓展其他方法
   */
  var _ = function (obj) {
    /**
     * NOTE:
     * 判断obj是否是 _ 的实例
     * 判断this是否是 _ 的实例
     * 把对象挂载到 wrapped 上
     */
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  _.each = function (arr, fn) {
    for (var i = 0; i < arr.length; i++) {
      fn(arr[i], i);
    }
    return arr;
  };

  _.isFunction = function(obj) {
    return typeof obj == 'function' || false;
  };

  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  var push = Array.prototype.push;

  _.mixin = function (obj) {
    _.each(_.functions(obj), function (name) {
        /** 
         * NOTE:
         * 用来拓展自定义方法 */
      var func = (_[name] = obj[name]);
        /**
         * NOTE:
         *  _([1,2,3]).each(item => {
            console.log("item", item);
        })
        执行的关键，挂载到原型链上
         */
      _.prototype[name] = function () {
          /**
           * TODO:
           * 参数的合并
           */
        var args = [this._wrapped];
        push.apply(args, arguments);
        // return chainResult(this, func.apply(_, args));
        return func.apply(_, args);
      };
    });
    return _;
  };

  _.mixin(_);

  root._ = _;
})();
