(function() {
  var BatmanExample;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  BatmanExample = (function() {
    __extends(BatmanExample, Batman.App);
    function BatmanExample() {
      BatmanExample.__super__.constructor.apply(this, arguments);
    }
    BatmanExample.set('mission', 'fight crime');
    BatmanExample.global(true);
    BatmanExample.controller('app');
    BatmanExample.root('app#index');
    return BatmanExample;
  })();
}).call(this);
