
(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)


(function(a, b, c) {
  /* ../../kit-lang/shell-utils/electron-kit/node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);





;
var R = require("ramda");
var { 
  create,
  extend,
  mixin,
  conditional,
  cond,
  partiallyApplyAfter
 } = require("kit/js/util");
var { 
  Interface
 } = require("kit-interface");




(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var dl = require("deeplearn");

console.log(dl)

(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)


(function(a, b, c) {
  /* ../../kit-lang/shell-utils/electron-kit/node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);





;
var R = require("ramda");
var { 
  create,
  extend,
  mixin,
  conditional,
  cond,
  partiallyApplyAfter
 } = require("kit/js/util");
var { 
  Interface
 } = require("kit-interface");


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)



(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)



(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)

(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var renderChildren = R.curry(((_parent, c, i, a) => {
	
  return (function() {
    if (typeof c === "undefined") {
      return null;
    } else if (c.render) {
      return c.render(_parent);
    } else if ((c && "object" === typeof c && "Array" === c.constructor.name)) {
      return c.each(renderChildren(_parent));
    } else if (typeof c === "string") {
      return _parent._node.appendChild(document.createTextNode(c));
    } else if (typeof c === "number") {
      return _parent._node.appendChild(document.createTextNode(("" + c)));
    } else if (typeof c === "function") {
      return renderChildren(_parent, c(_parent), i, a);
    } else if ((c instanceof Element)) {
      return (function(node) {
        /* ../../kit-lang/shell-utils/electron-kit/node_modules/kit/inc/scope.sibilant:12:9 */
      
        a[i] = node;
        return renderChildren(_parent, node, i, a);
      })(DocumentNode.wrap(c, _parent._node));
    } else {
      return _parent._node.appendChild(c);
    }
  }).call(this);

}));
var DocumentNode = EventEmitter.define("DocumentNode", { 
  init( tagName = this.tagName,attributes = this.attributes,_children = [],_parent = this._parent,_node = document.createElement(tagName) ){ 
    
      this.tagName = tagName;this.attributes = attributes;this._children = _children;this._parent = _parent;this._node = _node;
      EventEmitter.init.call(this);
      return this;
    
   },
  get children(  ){ 
    
      return this._children;
    
   },
  get style(  ){ 
    
      return this._node.style;
    
   },
  clear( _node = this._node ){ 
    
      _node.innerHTML = "";
      return this;
    
   },
  render( _parent = this._parent,attributes = this.attributes,tagName = this.tagName,_node = this._node,children = this.children ){ 
    
      _node.innerHTML = "";
      this._parent = _parent;
      _parent._node.appendChild(_node);
      attributes.each(((a, k) => {
      	
        return _node[k] = a;
      
      }));
      children.each(renderChildren(this));
      this.emit("render");
      return this;
    
   },
  wrap( _node,_parent ){ 
    
      "create a Document-node from a native DOM Element";
      return create(DocumentNode)(_node.tagName, {  }, [], _parent, _node);
    
   },
  append( node = this.node,children = this.children ){ 
    
      "add a child to the bottom of this one";
      children.push(node);
      return this;
    
   },
  prepend( node = this.node,children = this.children ){ 
    
      "add a child to the top of this one";
      return this.children = [ node, children ];
    
   },
  remove( _node = this._node,_parent = this._parent ){ 
    
      "remove this element from the tree.";
      _node.remove();
      _parent.children.filter(((c) => {
      	
        return !(_node === c);
      
      }));
      _parent.emit("remove", _node);
      return this;
    
   }
 });
var DocumentRoot = extend(DocumentNode, { 
  symbol:Symbol("DocumentRoot")
 });
describe(DocumentRoot, get _parent(  ){ 
  
    return this;
  
 }, tagName("html"), _node(document.documentElement), _children([]));
var DocumentBody = extend(DocumentNode, { 
  symbol:Symbol("DocumentBody")
 });
describe(DocumentBody, get _parent(  ){ 
  
    return this;
  
 }, tagName("body"), _node(document.body), _children([]));
var DocumentHead = extend(DocumentNode, { 
  symbol:Symbol("DocumentHead")
 });
describe(DocumentHead, get _parent(  ){ 
  
    return this;
  
 }, tagName("head"), _node(document.head), _children([]));
var createDocumentNode = create(DocumentNode);
console.log(document.appendChild);


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)


(function(a, b, c) {
  /* ../../kit-lang/shell-utils/electron-kit/node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);





;
var R = require("ramda");
var { 
  create,
  extend,
  mixin,
  conditional,
  cond,
  partiallyApplyAfter
 } = require("kit/js/util");
var { 
  Interface
 } = require("kit-interface");


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)



(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)



(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
Array.prototype.each = (function Array$prototype$each$(f) {
  /* Array.prototype.each inc/misc.sibilant:1:0 */

  this.forEach(f);
  return this;
});
Object.prototype.each = (function Object$prototype$each$(f) {
  /* Object.prototype.each inc/misc.sibilant:4:0 */

  return Object.keys(this).forEach(((k) => {
  	
    return f(this[k], k);
  
  }));
});


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var renderChildren = R.curry(((_parent, c, i, a) => {
	
  return (function() {
    if (typeof c === "undefined") {
      return null;
    } else if (c.render) {
      return c.render(_parent);
    } else if ((c && "object" === typeof c && "Array" === c.constructor.name)) {
      return c.each(renderChildren(_parent));
    } else if (typeof c === "string") {
      return _parent._node.appendChild(document.createTextNode(c));
    } else if (typeof c === "number") {
      return _parent._node.appendChild(document.createTextNode(("" + c)));
    } else if (typeof c === "function") {
      return renderChildren(_parent, c(_parent), i, a);
    } else if ((c instanceof Element)) {
      return (function(node) {
        /* ../../kit-lang/shell-utils/electron-kit/node_modules/kit/inc/scope.sibilant:12:9 */
      
        a[i] = node;
        return renderChildren(_parent, node, i, a);
      })(DocumentNode.wrap(c, _parent._node));
    } else {
      return _parent._node.appendChild(c);
    }
  }).call(this);

}));
var DocumentNode = EventEmitter.define("DocumentNode", { 
  init( tagName = this.tagName,attributes = this.attributes,_children = [],_parent = this._parent,_node = document.createElement(tagName) ){ 
    
      this.tagName = tagName;this.attributes = attributes;this._children = _children;this._parent = _parent;this._node = _node;
      EventEmitter.init.call(this);
      return this;
    
   },
  get children(  ){ 
    
      return this._children;
    
   },
  get style(  ){ 
    
      return this._node.style;
    
   },
  clear( _node = this._node ){ 
    
      _node.innerHTML = "";
      return this;
    
   },
  render( _parent = this._parent,attributes = this.attributes,tagName = this.tagName,_node = this._node,children = this.children ){ 
    
      _node.innerHTML = "";
      this._parent = _parent;
      _parent._node.appendChild(_node);
      attributes.each(((a, k) => {
      	
        return _node[k] = a;
      
      }));
      children.each(renderChildren(this));
      this.emit("render");
      return this;
    
   },
  wrap( _node,_parent ){ 
    
      "create a Document-node from a native DOM Element";
      return create(DocumentNode)(_node.tagName, {  }, [], _parent, _node);
    
   },
  append( node = this.node,children = this.children ){ 
    
      "add a child to the bottom of this one";
      children.push(node);
      return this;
    
   },
  prepend( node = this.node,children = this.children ){ 
    
      "add a child to the top of this one";
      return this.children = [ node, children ];
    
   },
  remove( _node = this._node,_parent = this._parent ){ 
    
      "remove this element from the tree.";
      _node.remove();
      _parent.children.filter(((c) => {
      	
        return !(_node === c);
      
      }));
      _parent.emit("remove", _node);
      return this;
    
   }
 });
var DocumentRoot = DocumentNode.define("DocumentRoot", { 
  get _parent(  ){ 
    
      return this;
    
   },
  tagName:"html",
  _node:document.documentElement,
  _children:[]
 });
var DocumentBody = DocumentNode.define("DocumentBody", { 
  get _parent(  ){ 
    
      return this;
    
   },
  tagName:"body",
  _node:document.body,
  _children:[]
 });
var DocumentHead = DocumentNode.define("DocumentHead", { 
  get _parent(  ){ 
    
      return this;
    
   },
  tagName:"head",
  _node:document.head,
  _children:[]
 });
var createDocumentNode = create(DocumentNode);
console.log(document.appendChild);


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var dl = require("deeplearn");


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var canvas = document.createElement("canvas");


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
document.body.appendChild()


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
document.body.appendChild(canvas)


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var W = 30,
    H = 30;


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var state0 = dl.zeros([ W, H ]);


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var 2 = R.curry((() => {
	
  w([ x, y ]);
  return ((y * w) + x);

}));


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var coord = 2(dCoord, W);


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var state0 = dl.zeros([ W, H ]);


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var coord2d = R.curry(((w, [ x, y ]) => {
	
  return ((y * w) + x);

}));


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var coord = coord2d(W);


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)



(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var d = await(state0.data());


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)


(function(a, b, c) {
  /* ../../kit-lang/shell-utils/electron-kit/node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);





;
var R = require("ramda");
var { 
  create,
  extend,
  mixin,
  conditional,
  cond,
  partiallyApplyAfter
 } = require("kit/js/util");
var { 
  Interface
 } = require("kit-interface");


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)



(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)



(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
Array.prototype.each = (function Array$prototype$each$(f) {
  /* Array.prototype.each inc/misc.sibilant:1:0 */

  this.forEach(f);
  return this;
});
Object.prototype.each = (function Object$prototype$each$(f) {
  /* Object.prototype.each inc/misc.sibilant:4:0 */

  return Object.keys(this).forEach(((k) => {
  	
    return f(this[k], k);
  
  }));
});


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var Field = Interface.define("Field", { 
  init( shape = [ 0, 0 ],state = dl.ones(shape) ){ 
    
      this.shape = shape;this.state = state;
      return this;
    
   },
  set( [ x, y ],v ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)] = v;
      
      }));
    
   },
  get( [ x, y ] ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)];
      
      }));
    
   },
  render( canvas = this.canvas,shape = this.shape,state = this.state ){ 
    
      if( !(running__QUERY) ){ 
        return false;
       };
      var ctx = canvas.getContext("2d"),
          height = state.shape[0],
          width = state.shape[1];
      return state.data().then(((d) => {
      	
        var imageData = (new ImageData(height, width));
        for (var i = 0;i < (width * height);++(i))
        {
        var j = (i * 4),
            k = i;;
        var a = d[i];;
        this._renderCell(a, j, imageData)
        }
        ;
        return ctx.putImageData(imageData, 0, 0);
      
      }));
    
   }
 });
var Colored = Field.define("Colored", { 
  init( color = this.color,shape = this.shape,state = this.state ){ 
    
      this.color = color;this.shape = shape;this.state = state;
      Field.init.call(this, shape, state);
      return this;
    
   },
  _renderCell( a,j,imageData ){ 
    
      imageData.data[j] = Math.round((this.color.r * a));
      imageData.data[(j + 1)] = Math.round((this.color.g * a));
      imageData.data[(j + 2)] = Math.round((this.color.b * a));
      return imageData.data[(j + 3)] = 255;
    
   }
 });
var colored = create(Colored);


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var dl = require("deeplearn"),
    m = require("mathjs");


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var canvas = document.createElement("canvas");


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
document.body.appendChild(canvas)


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var W = 30,
    H = 30;


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var state0 = m.zeros(W, H);


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
state0[coord([ 2, 5 ])] = 1;
state0[coord([ 3, 5 ])] = 1;
state0[coord([ 4, 5 ])] = 1;


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var state0 = m.zeros(W, H);


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var coord2d = R.curry(((w, [ x, y ]) => {
	
  return ((y * w) + x);

}));


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var coord = coord2d(W),
    kernel = dl.reshape(dl.tensor2d([ [ 1, 1, 1 ], [ 1, 0, 1 ], [ 1, 1, 1 ] ]), [ 3, 3, 1, 1 ]),
    state = dl.variable(dl.cast(dl.reshape(state0, [ 1, H, W, 1 ]), "float32"));


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var coord = coord2d(W),
    kernel = dl.reshape(dl.ones([ 3, 3 ]), [ 3, 3, 1, 1 ]),
    state = dl.variable(dl.cast(dl.reshape(state0, [ 1, H, W, 1 ]), "float32"));


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var coord = coord2d(W),
    kernel = dl.reshape(dl.ones([ 3, 3 ]), [ 3, 3, 1, 1 ]);


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var coord = coord2d(W),
    kernel = dl.reshape(dl.tensor2d([ [ 1, 1, 1 ], [ 1, 0, 1 ], [ 1, 1, 1 ] ]), [ 3, 3, 1, 1 ]);


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var state = dl.variable(dl.cast(dl.reshape(state0, [ 1, H, W, 1 ]), "float32"));


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var state = dl.variable(dl.cast(dl.reshape(dl.tensor(state0), [ 1, H, W, 1 ]), "float32"));


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var state = dl.variable(dl.cast(dl.reshape(dl.tensor2d(state0), [ 1, H, W, 1 ]), "float32"));


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
console.log(state0)


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var state = dl.variable(dl.cast(dl.reshape(dl.tensor2d(state0._data), [ 1, H, W, 1 ]), "float32"));


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
console.log(state0)


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var state = dl.reshape(dl.cast(dl.variable(), "float32"), state0._data, [ 1, H, W, 1 ]);


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var state = dl.reshape(dl.cast(dl.variable(), "float32"), state0._data, [ 1, H, W, 1 ]);


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var state = dl.variable(dl.cast(dl.reshape(state0._data, [ 1, H, W, 1 ]), "float32"));


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var state = dl.variable(dl.cast(dl.reshape(state0._data, [ 1, H, W, 1 ]), "float32"));


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var state0 = m.zeros(W, H);


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
state0.set([ 2, 5 ], 1)


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
state0.set([ 3, 5 ], 1)


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
state0.set([ 4, 5 ], 1)


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var kernel = dl.reshape(dl.tensor([ [ 1, 1, 1 ], [ 1, 0, 1 ], [ 1, 1, 1 ] ]), [ 3, 3, 1, 1 ]);


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var kernel = dl.reshape(dl.tensor2d([ [ 1, 1, 1 ], [ 1, 0, 1 ], [ 1, 1, 1 ] ]), [ 3, 3, 1, 1 ]);


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var state = dl.variable(dl.cast(dl.reshape(state0._data, [ 1, H, W, 1 ]), "float32"));


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var state = dl.variable(dl.cast(dl.reshape(state0Tensor, [ 1, H, W, 1 ]), "float32"));


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var state0Tensor = dl.tensor(state0._data);


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var state = dl.variable(dl.cast(dl.reshape(state0Tensor, [ 1, H, W, 1 ]), "float32"));


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var step = (function step$() {
  /* step eval.sibilant:1:0 */

  var neighbors = dl.conv2d(state, kernel, [ 1, 1, 1, 1 ], "SAME");
  var survive = dl.logicalAnd(dl.equals(state, 1), dl.equals(neighbors, 2)),
      born = dl.equals(neighbors, 3);
  return state.assign(dl.cast(dl.logicalOr(survive, born), "float32"));
});


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var step = (function step$() {
  /* step eval.sibilant:1:0 */

  var neighbors = dl.conv2d(state, kernel, [ 1, 1, 1, 1 ], "SAME");
  var survive = dl.logicalAnd(dl.equals(state, 1), dl.equals(neighbors, 2)),
      born = dl.equals(neighbors, 3);
  return state.assign(dl.cast(dl.logicalOr(survive, born), "float32"));
});


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var gameField = colored(black, [ H, W ], state);


var black = rgb(0, 0, 0);

(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)

(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var gameField = colored(black, [ H, W ], state);


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
setInterval((() => {
	
  step();
  return gameField.render();

}), 1000)


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var step = (function step$() {
  /* step eval.sibilant:1:0 */

  var neighbors = dl.conv2d(state, kernel, [ 1, 1, 1, 1 ], "same");
  var survive = dl.logicalAnd(dl.equals(state, 1), dl.equals(neighbors, 2)),
      born = dl.equals(neighbors, 3);
  return state.assign(dl.cast(dl.logicalOr(survive, born), "float32"));
});


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var step = (function step$() {
  /* step eval.sibilant:1:0 */

  var neighbors = dl.conv2d(state, kernel, [ 1, 1, 1, 1 ], "same");
  var survive = dl.logicalAnd(dl.equal(state, 1), dl.equal(neighbors, 2)),
      born = dl.equal(neighbors, 3);
  return state.assign(dl.cast(dl.logicalOr(survive, born), "float32"));
});


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var step = (function step$() {
  /* step eval.sibilant:1:0 */

  var neighbors = dl.conv2d(state, kernel, [ 1, 1, 1, 1 ], "same");
  var survive = dl.logicalAnd(dl.equal(state, dl.scalar(1, "float32")), dl.equal(neighbors, dl.scalar(2, "float32"))),
      born = dl.equal(neighbors, dl.scalar(3, "float32"));
  return state.assign(dl.cast(dl.logicalOr(survive, born), "float32"));
});


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var running__QUERY = true;


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)


(function(a, b, c) {
  /* ../../kit-lang/shell-utils/electron-kit/node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);





;
var R = require("ramda");
var { 
  create,
  extend,
  mixin,
  conditional,
  cond,
  partiallyApplyAfter
 } = require("kit/js/util");
var { 
  Interface
 } = require("kit-interface");


Array.prototype.each = (function Array$prototype$each$(f) {
  /* Array.prototype.each inc/misc.sibilant:1:0 */

  this.forEach(f);
  return this;
});
Object.prototype.each = (function Object$prototype$each$(f) {
  /* Object.prototype.each inc/misc.sibilant:4:0 */

  return Object.keys(this).forEach(((k) => {
  	
    return f(this[k], k);
  
  }));
});
var Field = Interface.define("Field", { 
  init( shape = [ 0, 0 ],state = dl.ones(shape) ){ 
    
      this.shape = shape;this.state = state;
      return this;
    
   },
  set( [ x, y ],v ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)] = v;
      
      }));
    
   },
  get( [ x, y ] ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)];
      
      }));
    
   },
  render( canvas = this.canvas,shape = this.shape,state = this.state ){ 
    
      if( !(running__QUERY) ){ 
        return false;
       };
      var ctx = canvas.getContext("2d"),
          height = state.shape[0],
          width = state.shape[1];
      return state.data().then(((d) => {
      	
        var imageData = (new ImageData(height, width));
        for (var i = 0;i < (width * height);++(i))
        {
        var j = (i * 4),
            k = i;;
        var a = d[i];;
        this._renderCell(a, j, imageData)
        }
        ;
        return ctx.putImageData(imageData, 0, 0);
      
      }));
    
   }
 });
var Colored = Field.define("Colored", { 
  init( color = this.color,shape = this.shape,state = this.state ){ 
    
      this.color = color;this.shape = shape;this.state = state;
      Field.init.call(this, shape, state);
      return this;
    
   },
  _renderCell( a,j,imageData ){ 
    
      imageData.data[j] = Math.round((this.color.r * a));
      imageData.data[(j + 1)] = Math.round((this.color.g * a));
      imageData.data[(j + 2)] = Math.round((this.color.b * a));
      return imageData.data[(j + 3)] = 255;
    
   }
 });
var colored = create(Colored);
var dl = require("deeplearn"),
    m = require("mathjs");
var canvas = document.createElement("canvas");
document.body.appendChild(canvas)
var W = 30,
    H = 30;
var state0 = m.zeros(W, H);
state0.set([ 2, 5 ], 1)
state0.set([ 3, 5 ], 1)
state0.set([ 4, 5 ], 1)
var kernel = dl.reshape(dl.tensor2d([ [ 1, 1, 1 ], [ 1, 0, 1 ], [ 1, 1, 1 ] ]), [ 3, 3, 1, 1 ]);
var state0Tensor = dl.tensor(state0._data);
var state = dl.variable(dl.cast(dl.reshape(state0Tensor, [ 1, H, W, 1 ]), "float32"));
var running__QUERY = true;
var step = (function step$() {
  /* step eval.sibilant:1:0 */

  var neighbors = dl.conv2d(state, kernel, [ 1, 1, 1, 1 ], "same");
  var survive = dl.logicalAnd(dl.equal(state, dl.scalar(1, "float32")), dl.equal(neighbors, dl.scalar(2, "float32"))),
      born = dl.equal(neighbors, dl.scalar(3, "float32"));
  return state.assign(dl.cast(dl.logicalOr(survive, born), "float32"));
});
var black = rgb(0, 0, 0);
var gameField = colored(black, [ H, W ], state);
setInterval((() => {
	
  step();
  return gameField.render(canvas);

}), 1000)


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var rgb = (function rgb$(r, g, b) {
  /* rgb eval.sibilant:1:0 */

  return { 
    r,
    g,
    b
   };
});


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var black = rgb(0, 0, 0);


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var gameField = colored(black, [ H, W ], state);


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)


(function(a, b, c) {
  /* ../../kit-lang/shell-utils/electron-kit/node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);





;
var R = require("ramda");
var { 
  create,
  extend,
  mixin,
  conditional,
  cond,
  partiallyApplyAfter
 } = require("kit/js/util");
var { 
  Interface
 } = require("kit-interface");


Array.prototype.each = (function Array$prototype$each$(f) {
  /* Array.prototype.each inc/misc.sibilant:1:0 */

  this.forEach(f);
  return this;
});
Object.prototype.each = (function Object$prototype$each$(f) {
  /* Object.prototype.each inc/misc.sibilant:4:0 */

  return Object.keys(this).forEach(((k) => {
  	
    return f(this[k], k);
  
  }));
});
var Field = Interface.define("Field", { 
  init( shape = [ 0, 0 ],state = dl.ones(shape) ){ 
    
      this.shape = shape;this.state = state;
      return this;
    
   },
  set( [ x, y ],v ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)] = v;
      
      }));
    
   },
  get( [ x, y ] ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)];
      
      }));
    
   },
  render( canvas = this.canvas,shape = this.shape,state = this.state ){ 
    
      if( !(running__QUERY) ){ 
        return false;
       };
      var ctx = canvas.getContext("2d"),
          height = state.shape[0],
          width = state.shape[1];
      return state.data().then(((d) => {
      	
        var imageData = (new ImageData(height, width));
        for (var i = 0;i < (width * height);++(i))
        {
        var j = (i * 4),
            k = i;;
        var a = d[i];;
        this._renderCell(a, j, imageData)
        }
        ;
        return ctx.putImageData(imageData, 0, 0);
      
      }));
    
   }
 });
var Colored = Field.define("Colored", { 
  init( color = this.color,shape = this.shape,state = this.state ){ 
    
      this.color = color;this.shape = shape;this.state = state;
      Field.init.call(this, shape, state);
      return this;
    
   },
  _renderCell( a,j,imageData ){ 
    
      imageData.data[j] = Math.round((this.color.r * a));
      imageData.data[(j + 1)] = Math.round((this.color.g * a));
      imageData.data[(j + 2)] = Math.round((this.color.b * a));
      return imageData.data[(j + 3)] = 255;
    
   }
 });
var colored = create(Colored);
var dl = require("deeplearn"),
    m = require("mathjs");
var canvas = document.createElement("canvas");
document.body.appendChild(canvas)
var W = 30,
    H = 30;
var state0 = m.zeros(W, H);
state0.set([ 2, 5 ], 1)
state0.set([ 3, 5 ], 1)
state0.set([ 4, 5 ], 1)
var rgb = (function rgb$(r, g, b) {
  /* rgb eval.sibilant:1:0 */

  return { 
    r,
    g,
    b
   };
});
var kernel = dl.reshape(dl.tensor2d([ [ 1, 1, 1 ], [ 1, 0, 1 ], [ 1, 1, 1 ] ]), [ 3, 3, 1, 1 ]);
var state0Tensor = dl.tensor(state0._data);
var state = dl.variable(dl.cast(dl.reshape(state0Tensor, [ 1, H, W, 1 ]), "float32"));
var running__QUERY = true;
var step = (function step$() {
  /* step eval.sibilant:1:0 */

  var neighbors = dl.conv2d(state, kernel, [ 1, 1, 1, 1 ], "same");
  var survive = dl.logicalAnd(dl.equal(state, dl.scalar(1, "float32")), dl.equal(neighbors, dl.scalar(2, "float32"))),
      born = dl.equal(neighbors, dl.scalar(3, "float32"));
  return state.assign(dl.cast(dl.logicalOr(survive, born), "float32"));
});
var black = rgb(0, 0, 0);
var gameField = colored(black, [ H, W ], state);
setInterval((() => {
	
  step();
  return gameField.render(canvas);

}), 1000)


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
state.print()


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
state.data()

state0.set([ 2, 5 ], 1)
state0.set([ 3, 5 ], 1)
state0.set([ 4, 5 ], 1)
state0.set([ 2, 5 ], 1)
state0.set([ 3, 5 ], 1)
state0.set([ 4, 5 ], 1)
state0.set([ 2, 5 ], 1)
state0.set([ 3, 5 ], 1)
state0.set([ 4, 5 ], 1)
state0.set([ 2, 5 ], 1)
state0.set([ 3, 5 ], 1)
state0.set([ 4, 5 ], 1)

(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
(function() {
  /* eval.sibilant:1:0 */

  state0.set([ 2, 5 ], 1);
  state0.set([ 3, 5 ], 1);
  return state0.set([ 4, 5 ], 1);
}).call(this)


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
(function() {
  /* eval.sibilant:1:0 */

  state0.set([ 2, 5 ], 1);
  state0.set([ 3, 5 ], 1);
  return state0.set([ 4, 5 ], 1);
}).call(this)


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)


(function(a, b, c) {
  /* ../../kit-lang/shell-utils/electron-kit/node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);





;
var R = require("ramda");
var { 
  create,
  extend,
  mixin,
  conditional,
  cond,
  partiallyApplyAfter
 } = require("kit/js/util");
var { 
  Interface
 } = require("kit-interface");


Array.prototype.each = (function Array$prototype$each$(f) {
  /* Array.prototype.each inc/misc.sibilant:1:0 */

  this.forEach(f);
  return this;
});
Object.prototype.each = (function Object$prototype$each$(f) {
  /* Object.prototype.each inc/misc.sibilant:4:0 */

  return Object.keys(this).forEach(((k) => {
  	
    return f(this[k], k);
  
  }));
});
var Field = Interface.define("Field", { 
  init( shape = [ 0, 0 ],state = dl.ones(shape) ){ 
    
      this.shape = shape;this.state = state;
      return this;
    
   },
  set( [ x, y ],v ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)] = v;
      
      }));
    
   },
  get( [ x, y ] ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)];
      
      }));
    
   },
  render( canvas = this.canvas,shape = this.shape,state = this.state ){ 
    
      if( !(running__QUERY) ){ 
        return false;
       };
      var ctx = canvas.getContext("2d"),
          height = state.shape[0],
          width = state.shape[1];
      return state.data().then(((d) => {
      	
        var imageData = (new ImageData(height, width));
        for (var i = 0;i < (width * height);++(i))
        {
        var j = (i * 4),
            k = i;;
        var a = d[i];;
        this._renderCell(a, j, imageData)
        }
        ;
        return ctx.putImageData(imageData, 0, 0);
      
      }));
    
   }
 });
var Colored = Field.define("Colored", { 
  init( color = this.color,shape = this.shape,state = this.state ){ 
    
      this.color = color;this.shape = shape;this.state = state;
      Field.init.call(this, shape, state);
      return this;
    
   },
  _renderCell( a,j,imageData ){ 
    
      imageData.data[j] = Math.round((this.color.r * a));
      imageData.data[(j + 1)] = Math.round((this.color.g * a));
      imageData.data[(j + 2)] = Math.round((this.color.b * a));
      return imageData.data[(j + 3)] = 255;
    
   }
 });
var colored = create(Colored);
var dl = require("deeplearn"),
    m = require("mathjs");
var canvas = document.createElement("canvas");
document.body.appendChild(canvas)
var W = 30,
    H = 30;
(function() {
  /* eval.sibilant:1:0 */

  state0.set([ 2, 5 ], 1);
  state0.set([ 3, 5 ], 1);
  return state0.set([ 4, 5 ], 1);
}).call(this)
var rgb = (function rgb$(r, g, b) {
  /* rgb eval.sibilant:1:0 */

  return { 
    r,
    g,
    b
   };
});
var kernel = dl.reshape(dl.tensor2d([ [ 1, 1, 1 ], [ 1, 0, 1 ], [ 1, 1, 1 ] ]), [ 3, 3, 1, 1 ]);
var state0 = m.zeros(W, H);
var state0Tensor = dl.tensor(state0._data);
var state = dl.variable(dl.cast(dl.reshape(state0Tensor, [ 1, H, W, 1 ]), "float32"));
var running__QUERY = true;
var step = (function step$() {
  /* step eval.sibilant:1:0 */

  var neighbors = dl.conv2d(state, kernel, [ 1, 1, 1, 1 ], "same");
  var survive = dl.logicalAnd(dl.equal(state, dl.scalar(1, "float32")), dl.equal(neighbors, dl.scalar(2, "float32"))),
      born = dl.equal(neighbors, dl.scalar(3, "float32"));
  return state.assign(dl.cast(dl.logicalOr(survive, born), "float32"));
});
var black = rgb(0, 0, 0);
var red = rgb(255, 0, 0);
var gameField = colored(red, [ H, W ], state);
setInterval((() => {
	
  step();
  return gameField.render(canvas);

}), 1000)
state.data()

console.log(gameField)

(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
state.data()


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
state.data()


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
state.data()


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
state.data()


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
state.data()


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
state.data()


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
state.data()

(30 * 30)
console.log(gameField.shape)
console.log(gameField.state.shape)

(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var Field = Interface.define("Field", { 
  init( shape = [ 0, 0 ],state = dl.ones(shape) ){ 
    
      this.shape = shape;this.state = state;
      return this;
    
   },
  set( [ x, y ],v ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)] = v;
      
      }));
    
   },
  get( [ x, y ] ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)];
      
      }));
    
   },
  render( canvas = this.canvas,shape = this.shape,state = this.state ){ 
    
      if( !(running__QUERY) ){ 
        return false;
       };
      var ctx = canvas.getContext("2d"),
          height = shape[0],
          width = shape[1];
      return state.data().then(((d) => {
      	
        var imageData = (new ImageData(height, width));
        for (var i = 0;i < (width * height);++(i))
        {
        var j = (i * 4),
            k = i;;
        var a = d[i];;
        this._renderCell(a, j, imageData)
        }
        ;
        return ctx.putImageData(imageData, 0, 0);
      
      }));
    
   }
 });


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)


(function(a, b, c) {
  /* ../../kit-lang/shell-utils/electron-kit/node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);





;
var R = require("ramda");
var { 
  create,
  extend,
  mixin,
  conditional,
  cond,
  partiallyApplyAfter
 } = require("kit/js/util");
var { 
  Interface
 } = require("kit-interface");


Array.prototype.each = (function Array$prototype$each$(f) {
  /* Array.prototype.each inc/misc.sibilant:1:0 */

  this.forEach(f);
  return this;
});
Object.prototype.each = (function Object$prototype$each$(f) {
  /* Object.prototype.each inc/misc.sibilant:4:0 */

  return Object.keys(this).forEach(((k) => {
  	
    return f(this[k], k);
  
  }));
});
var Field = Interface.define("Field", { 
  init( shape = [ 0, 0 ],state = dl.ones(shape) ){ 
    
      this.shape = shape;this.state = state;
      return this;
    
   },
  set( [ x, y ],v ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)] = v;
      
      }));
    
   },
  get( [ x, y ] ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)];
      
      }));
    
   },
  render( canvas = this.canvas,shape = this.shape,state = this.state ){ 
    
      if( !(running__QUERY) ){ 
        return false;
       };
      var ctx = canvas.getContext("2d"),
          height = shape[0],
          width = shape[1];
      return state.data().then(((d) => {
      	
        var imageData = (new ImageData(height, width));
        for (var i = 0;i < (width * height);++(i))
        {
        var j = (i * 4),
            k = i;;
        var a = d[i];;
        this._renderCell(a, j, imageData)
        }
        ;
        return ctx.putImageData(imageData, 0, 0);
      
      }));
    
   }
 });
var Colored = Field.define("Colored", { 
  init( color = this.color,shape = this.shape,state = this.state ){ 
    
      this.color = color;this.shape = shape;this.state = state;
      Field.init.call(this, shape, state);
      return this;
    
   },
  _renderCell( a,j,imageData ){ 
    
      imageData.data[j] = Math.round((this.color.r * a));
      imageData.data[(j + 1)] = Math.round((this.color.g * a));
      imageData.data[(j + 2)] = Math.round((this.color.b * a));
      return imageData.data[(j + 3)] = 255;
    
   }
 });
var colored = create(Colored);
var dl = require("deeplearn"),
    m = require("mathjs");
var canvas = document.createElement("canvas");
document.body.appendChild(canvas)
var W = 800,
    H = 800;
var rgb = (function rgb$(r, g, b) {
  /* rgb eval.sibilant:1:0 */

  return { 
    r,
    g,
    b
   };
});
var kernel = dl.reshape(dl.tensor2d([ [ 1, 1, 1 ], [ 1, 0, 1 ], [ 1, 1, 1 ] ]), [ 3, 3, 1, 1 ]);
var state0Tensor = dl.randomUniform(H, W);
var state = dl.variable(dl.cast(dl.reshape(state0Tensor, [ 1, H, W, 1 ]), "float32"));
var running__QUERY = true;
var step = (function step$() {
  /* step eval.sibilant:1:0 */

  var neighbors = dl.conv2d(state, kernel, [ 1, 1, 1, 1 ], "same");
  var survive = dl.logicalAnd(dl.equal(state, dl.scalar(1, "float32")), dl.equal(neighbors, dl.scalar(2, "float32"))),
      born = dl.equal(neighbors, dl.scalar(3, "float32"));
  return state.assign(dl.cast(dl.logicalOr(survive, born), "float32"));
});
var black = rgb(0, 0, 0);
var red = rgb(255, 0, 0);
var gameField = colored(red, [ H, W ], state);
setInterval((() => {
	
  step();
  return gameField.render(canvas);

}), 0)
state.data()


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)


(function(a, b, c) {
  /* ../../kit-lang/shell-utils/electron-kit/node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);





;
var R = require("ramda");
var { 
  create,
  extend,
  mixin,
  conditional,
  cond,
  partiallyApplyAfter
 } = require("kit/js/util");
var { 
  Interface
 } = require("kit-interface");


Array.prototype.each = (function Array$prototype$each$(f) {
  /* Array.prototype.each inc/misc.sibilant:1:0 */

  this.forEach(f);
  return this;
});
Object.prototype.each = (function Object$prototype$each$(f) {
  /* Object.prototype.each inc/misc.sibilant:4:0 */

  return Object.keys(this).forEach(((k) => {
  	
    return f(this[k], k);
  
  }));
});
var Field = Interface.define("Field", { 
  init( shape = [ 0, 0 ],state = dl.ones(shape) ){ 
    
      this.shape = shape;this.state = state;
      return this;
    
   },
  set( [ x, y ],v ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)] = v;
      
      }));
    
   },
  get( [ x, y ] ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)];
      
      }));
    
   },
  render( canvas = this.canvas,shape = this.shape,state = this.state ){ 
    
      if( !(running__QUERY) ){ 
        return false;
       };
      var ctx = canvas.getContext("2d"),
          height = shape[0],
          width = shape[1];
      return state.data().then(((d) => {
      	
        var imageData = (new ImageData(height, width));
        for (var i = 0;i < (width * height);++(i))
        {
        var j = (i * 4),
            k = i;;
        var a = d[i];;
        this._renderCell(a, j, imageData)
        }
        ;
        return ctx.putImageData(imageData, 0, 0);
      
      }));
    
   }
 });
var Colored = Field.define("Colored", { 
  init( color = this.color,shape = this.shape,state = this.state ){ 
    
      this.color = color;this.shape = shape;this.state = state;
      Field.init.call(this, shape, state);
      return this;
    
   },
  _renderCell( a,j,imageData ){ 
    
      imageData.data[j] = Math.round((this.color.r * a));
      imageData.data[(j + 1)] = Math.round((this.color.g * a));
      imageData.data[(j + 2)] = Math.round((this.color.b * a));
      return imageData.data[(j + 3)] = 255;
    
   }
 });
var colored = create(Colored);
var dl = require("deeplearn"),
    m = require("mathjs");
var canvas = document.createElement("canvas");
document.body.appendChild(canvas)
var W = 800,
    H = 800;
var rgb = (function rgb$(r, g, b) {
  /* rgb eval.sibilant:1:0 */

  return { 
    r,
    g,
    b
   };
});
var kernel = dl.reshape(dl.tensor2d([ [ 1, 1, 1 ], [ 1, 0, 1 ], [ 1, 1, 1 ] ]), [ 3, 3, 1, 1 ]);
var state0Tensor = dl.randomUniform([ H, W ]);
var state = dl.variable(dl.cast(dl.reshape(state0Tensor, [ 1, H, W, 1 ]), "float32"));
var running__QUERY = true;
var step = (function step$() {
  /* step eval.sibilant:1:0 */

  var neighbors = dl.conv2d(state, kernel, [ 1, 1, 1, 1 ], "same");
  var survive = dl.logicalAnd(dl.equal(state, dl.scalar(1, "float32")), dl.equal(neighbors, dl.scalar(2, "float32"))),
      born = dl.equal(neighbors, dl.scalar(3, "float32"));
  return state.assign(dl.cast(dl.logicalOr(survive, born), "float32"));
});
var black = rgb(0, 0, 0);
var red = rgb(255, 0, 0);
var gameField = colored(red, [ H, W ], state);
setInterval((() => {
	
  step();
  return gameField.render(canvas);

}), 0)
state.data()


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)


(function(a, b, c) {
  /* ../../kit-lang/shell-utils/electron-kit/node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);





;
var R = require("ramda");
var { 
  create,
  extend,
  mixin,
  conditional,
  cond,
  partiallyApplyAfter
 } = require("kit/js/util");
var { 
  Interface
 } = require("kit-interface");


Array.prototype.each = (function Array$prototype$each$(f) {
  /* Array.prototype.each inc/misc.sibilant:1:0 */

  this.forEach(f);
  return this;
});
Object.prototype.each = (function Object$prototype$each$(f) {
  /* Object.prototype.each inc/misc.sibilant:4:0 */

  return Object.keys(this).forEach(((k) => {
  	
    return f(this[k], k);
  
  }));
});
var Field = Interface.define("Field", { 
  init( shape = [ 0, 0 ],state = dl.ones(shape) ){ 
    
      this.shape = shape;this.state = state;
      return this;
    
   },
  set( [ x, y ],v ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)] = v;
      
      }));
    
   },
  get( [ x, y ] ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)];
      
      }));
    
   },
  render( canvas = this.canvas,shape = this.shape,state = this.state ){ 
    
      if( !(running__QUERY) ){ 
        return false;
       };
      var ctx = canvas.getContext("2d"),
          height = shape[0],
          width = shape[1];
      return state.data().then(((d) => {
      	
        var imageData = (new ImageData(height, width));
        for (var i = 0;i < (width * height);++(i))
        {
        var j = (i * 4),
            k = i;;
        var a = d[i];;
        this._renderCell(a, j, imageData)
        }
        ;
        return ctx.putImageData(imageData, 0, 0);
      
      }));
    
   }
 });
var Colored = Field.define("Colored", { 
  init( color = this.color,shape = this.shape,state = this.state ){ 
    
      this.color = color;this.shape = shape;this.state = state;
      Field.init.call(this, shape, state);
      return this;
    
   },
  _renderCell( a,j,imageData ){ 
    
      imageData.data[j] = Math.round((this.color.r * a));
      imageData.data[(j + 1)] = Math.round((this.color.g * a));
      imageData.data[(j + 2)] = Math.round((this.color.b * a));
      return imageData.data[(j + 3)] = 255;
    
   }
 });
var colored = create(Colored);
var dl = require("deeplearn"),
    m = require("mathjs");
var canvas = document.createElement("canvas");
document.body.appendChild(canvas)
var W = 800,
    H = 800;
var rgb = (function rgb$(r, g, b) {
  /* rgb eval.sibilant:1:0 */

  return { 
    r,
    g,
    b
   };
});
var kernel = dl.reshape(dl.tensor2d([ [ 1, 1, 1 ], [ 1, 0, 1 ], [ 1, 1, 1 ] ]), [ 3, 3, 1, 1 ]);
var state0Tensor = dl.randomUniform([ H, W ]);
var state = dl.variable(dl.cast(dl.reshape(state0Tensor, [ 1, H, W, 1 ]), "float32"));
var running__QUERY = true;
var step = (function step$() {
  /* step eval.sibilant:1:0 */

  var neighbors = dl.conv2d(state, kernel, [ 1, 1, 1, 1 ], "same");
  var survive = dl.logicalAnd(dl.equal(state, dl.scalar(1, "float32")), dl.equal(neighbors, dl.scalar(2, "float32"))),
      born = dl.equal(neighbors, dl.scalar(3, "float32"));
  return state.assign(dl.cast(dl.logicalOr(survive, born), "float32"));
});
var black = rgb(0, 0, 0);
var red = rgb(255, 0, 0);
var gameField = colored(red, [ H, W ], state);
setInterval((() => {
	
  step();
  return gameField.render(canvas);

}), 0)
state.data()


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)


(function(a, b, c) {
  /* ../../kit-lang/shell-utils/electron-kit/node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);





;
var R = require("ramda");
var { 
  create,
  extend,
  mixin,
  conditional,
  cond,
  partiallyApplyAfter
 } = require("kit/js/util");
var { 
  Interface
 } = require("kit-interface");

var Field = Interface.define("Field", { 
  init( shape = [ 0, 0 ],state = dl.ones(shape) ){ 
    
      this.shape = shape;this.state = state;
      return this;
    
   },
  set( [ x, y ],v ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)] = v;
      
      }));
    
   },
  get( [ x, y ] ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)];
      
      }));
    
   },
  render( canvas = this.canvas,shape = this.shape,state = this.state ){ 
    
      if( !(running__QUERY) ){ 
        return false;
       };
      var ctx = canvas.getContext("2d"),
          height = shape[0],
          width = shape[1];
      return state.data().then(((d) => {
      	
        var imageData = (new ImageData(height, width));
        for (var i = 0;i < (width * height);++(i))
        {
        var j = (i * 4),
            k = i;;
        var a = d[i];;
        this._renderCell(a, j, imageData)
        }
        ;
        return ctx.putImageData(imageData, 0, 0);
      
      }));
    
   }
 });
var Colored = Field.define("Colored", { 
  init( color = this.color,shape = this.shape,state = this.state ){ 
    
      this.color = color;this.shape = shape;this.state = state;
      Field.init.call(this, shape, state);
      return this;
    
   },
  _renderCell( a,j,imageData ){ 
    
      imageData.data[j] = Math.round((this.color.r * a));
      imageData.data[(j + 1)] = Math.round((this.color.g * a));
      imageData.data[(j + 2)] = Math.round((this.color.b * a));
      return imageData.data[(j + 3)] = 255;
    
   }
 });
var colored = create(Colored);
var dl = require("deeplearn"),
    m = require("mathjs");
var canvas = document.createElement("canvas");
document.body.appendChild(canvas)
var W = 800,
    H = 800;
var rgb = (function rgb$(r, g, b) {
  /* rgb eval.sibilant:1:0 */

  return { 
    r,
    g,
    b
   };
});
var kernel = dl.reshape(dl.tensor2d([ [ 1, 1, 1 ], [ 1, 0, 1 ], [ 1, 1, 1 ] ]), [ 3, 3, 1, 1 ]);
var state0Tensor = dl.cast(dl.randomUniform([ H, W ]), "int32");
var state = dl.variable(dl.cast(dl.reshape(state0Tensor, [ 1, H, W, 1 ]), "float32"));
var running__QUERY = true;
var step = (function step$() {
  /* step eval.sibilant:1:0 */

  var neighbors = dl.conv2d(state, kernel, [ 1, 1, 1, 1 ], "same");
  var survive = dl.logicalAnd(dl.equal(state, dl.scalar(1, "float32")), dl.equal(neighbors, dl.scalar(2, "float32"))),
      born = dl.equal(neighbors, dl.scalar(3, "float32"));
  return state.assign(dl.cast(dl.logicalOr(survive, born), "float32"));
});
var black = rgb(0, 0, 0);
var red = rgb(255, 0, 0);
var gameField = colored(red, [ H, W ], state);
setInterval((() => {
	
  step();
  return gameField.render(canvas);

}), 0)
state.data()


Array.prototype.each = (function Array$prototype$each$(f) {
  /* Array.prototype.each inc/misc.sibilant:1:0 */

  this.forEach(f);
  return this;
});
Object.prototype.each = (function Object$prototype$each$(f) {
  /* Object.prototype.each inc/misc.sibilant:4:0 */

  return Object.keys(this).forEach(((k) => {
  	
    return f(this[k], k);
  
  }));
});

(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)


(function(a, b, c) {
  /* ../../kit-lang/shell-utils/electron-kit/node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);





;
var R = require("ramda");
var { 
  create,
  extend,
  mixin,
  conditional,
  cond,
  partiallyApplyAfter
 } = require("kit/js/util");
var { 
  Interface
 } = require("kit-interface");


Array.prototype.each = (function Array$prototype$each$(f) {
  /* Array.prototype.each inc/misc.sibilant:1:0 */

  this.forEach(f);
  return this;
});
Object.prototype.each = (function Object$prototype$each$(f) {
  /* Object.prototype.each inc/misc.sibilant:4:0 */

  return Object.keys(this).forEach(((k) => {
  	
    return f(this[k], k);
  
  }));
});
var Field = Interface.define("Field", { 
  init( shape = [ 0, 0 ],state = dl.ones(shape) ){ 
    
      this.shape = shape;this.state = state;
      return this;
    
   },
  set( [ x, y ],v ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)] = v;
      
      }));
    
   },
  get( [ x, y ] ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)];
      
      }));
    
   },
  render( canvas = this.canvas,shape = this.shape,state = this.state ){ 
    
      if( !(running__QUERY) ){ 
        return false;
       };
      var ctx = canvas.getContext("2d"),
          height = shape[0],
          width = shape[1];
      return state.data().then(((d) => {
      	
        var imageData = (new ImageData(height, width));
        for (var i = 0;i < (width * height);++(i))
        {
        var j = (i * 4),
            k = i;;
        var a = d[i];;
        this._renderCell(a, j, imageData)
        }
        ;
        return ctx.putImageData(imageData, 0, 0);
      
      }));
    
   }
 });
var Colored = Field.define("Colored", { 
  init( color = this.color,shape = this.shape,state = this.state ){ 
    
      this.color = color;this.shape = shape;this.state = state;
      Field.init.call(this, shape, state);
      return this;
    
   },
  _renderCell( a,j,imageData ){ 
    
      imageData.data[j] = Math.round((this.color.r * a));
      imageData.data[(j + 1)] = Math.round((this.color.g * a));
      imageData.data[(j + 2)] = Math.round((this.color.b * a));
      return imageData.data[(j + 3)] = 255;
    
   }
 });
var colored = create(Colored);
var dl = require("deeplearn"),
    m = require("mathjs");
var canvas = document.createElement("canvas");
document.body.appendChild(canvas)
var W = 800,
    H = 800;
var rgb = (function rgb$(r, g, b) {
  /* rgb eval.sibilant:1:0 */

  return { 
    r,
    g,
    b
   };
});
var kernel = dl.reshape(dl.tensor2d([ [ 1, 1, 1 ], [ 1, 0, 1 ], [ 1, 1, 1 ] ]), [ 3, 3, 1, 1 ]);
var state0Tensor = dl.randomUniform([ H, W ]).greater(dl.scalar(0.5, "float32"));
var state = dl.variable(dl.cast(dl.reshape(state0Tensor, [ 1, H, W, 1 ]), "float32"));
var running__QUERY = true;
var step = (function step$() {
  /* step eval.sibilant:1:0 */

  var neighbors = dl.conv2d(state, kernel, [ 1, 1, 1, 1 ], "same");
  var survive = dl.logicalAnd(dl.equal(state, dl.scalar(1, "float32")), dl.equal(neighbors, dl.scalar(2, "float32"))),
      born = dl.equal(neighbors, dl.scalar(3, "float32"));
  return state.assign(dl.cast(dl.logicalOr(survive, born), "float32"));
});
var black = rgb(0, 0, 0);
var red = rgb(255, 0, 0);
var gameField = colored(red, [ H, W ], state);
setInterval((() => {
	
  step();
  return gameField.render(canvas);

}), 0)
state.data()


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
canvas.style.height = 800;
canvas.style.width = 800;


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)


(function(a, b, c) {
  /* ../../kit-lang/shell-utils/electron-kit/node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);





;
var R = require("ramda");
var { 
  create,
  extend,
  mixin,
  conditional,
  cond,
  partiallyApplyAfter
 } = require("kit/js/util");
var { 
  Interface
 } = require("kit-interface");


Array.prototype.each = (function Array$prototype$each$(f) {
  /* Array.prototype.each inc/misc.sibilant:1:0 */

  this.forEach(f);
  return this;
});
Object.prototype.each = (function Object$prototype$each$(f) {
  /* Object.prototype.each inc/misc.sibilant:4:0 */

  return Object.keys(this).forEach(((k) => {
  	
    return f(this[k], k);
  
  }));
});
var Field = Interface.define("Field", { 
  init( shape = [ 0, 0 ],state = dl.ones(shape) ){ 
    
      this.shape = shape;this.state = state;
      return this;
    
   },
  set( [ x, y ],v ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)] = v;
      
      }));
    
   },
  get( [ x, y ] ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)];
      
      }));
    
   },
  render( canvas = this.canvas,shape = this.shape,state = this.state ){ 
    
      if( !(running__QUERY) ){ 
        return false;
       };
      var ctx = canvas.getContext("2d"),
          height = shape[0],
          width = shape[1];
      return state.data().then(((d) => {
      	
        var imageData = (new ImageData(height, width));
        for (var i = 0;i < (width * height);++(i))
        {
        var j = (i * 4),
            k = i;;
        var a = d[i];;
        this._renderCell(a, j, imageData)
        }
        ;
        return ctx.putImageData(imageData, 0, 0);
      
      }));
    
   }
 });
var Colored = Field.define("Colored", { 
  init( color = this.color,shape = this.shape,state = this.state ){ 
    
      this.color = color;this.shape = shape;this.state = state;
      Field.init.call(this, shape, state);
      return this;
    
   },
  _renderCell( a,j,imageData ){ 
    
      imageData.data[j] = Math.round((this.color.r * a));
      imageData.data[(j + 1)] = Math.round((this.color.g * a));
      imageData.data[(j + 2)] = Math.round((this.color.b * a));
      return imageData.data[(j + 3)] = 255;
    
   }
 });
var colored = create(Colored);
var dl = require("deeplearn"),
    m = require("mathjs");
var canvas = document.createElement("canvas");
document.body.appendChild(canvas)
canvas.style.height = 800;
canvas.style.width = 800;
var W = 800,
    H = 800;
var rgb = (function rgb$(r, g, b) {
  /* rgb eval.sibilant:1:0 */

  return { 
    r,
    g,
    b
   };
});
var kernel = dl.reshape(dl.tensor2d([ [ 1, 1, 1 ], [ 1, 0, 1 ], [ 1, 1, 1 ] ]), [ 3, 3, 1, 1 ]);
var state0Tensor = dl.randomUniform([ H, W ]).greater(dl.scalar(0.5, "float32"));
var state = dl.variable(dl.cast(dl.reshape(state0Tensor, [ 1, H, W, 1 ]), "float32"));
var running__QUERY = true;
var step = (function step$() {
  /* step eval.sibilant:1:0 */

  return dl.tidy((() => {
  	
    var neighbors = dl.conv2d(state, kernel, [ 1, 1, 1, 1 ], "same");
    var survive = dl.logicalAnd(dl.equal(state, dl.scalar(1, "float32")), dl.equal(neighbors, dl.scalar(2, "float32"))),
        born = dl.equal(neighbors, dl.scalar(3, "float32"));
    return state.assign(dl.cast(dl.logicalOr(survive, born), "float32"));
  
  }));
});
var black = rgb(0, 0, 0);
var red = rgb(255, 0, 0);
var gameField = colored(red, [ H, W ], state);
setInterval((() => {
	
  step();
  return gameField.render(canvas);

}), 0)
state.data()


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)


(function(a, b, c) {
  /* ../../kit-lang/shell-utils/electron-kit/node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);





;
var R = require("ramda");
var { 
  create,
  extend,
  mixin,
  conditional,
  cond,
  partiallyApplyAfter
 } = require("kit/js/util");
var { 
  Interface
 } = require("kit-interface");


Array.prototype.each = (function Array$prototype$each$(f) {
  /* Array.prototype.each inc/misc.sibilant:1:0 */

  this.forEach(f);
  return this;
});
Object.prototype.each = (function Object$prototype$each$(f) {
  /* Object.prototype.each inc/misc.sibilant:4:0 */

  return Object.keys(this).forEach(((k) => {
  	
    return f(this[k], k);
  
  }));
});
var Field = Interface.define("Field", { 
  init( shape = [ 0, 0 ],state = dl.ones(shape) ){ 
    
      this.shape = shape;this.state = state;
      return this;
    
   },
  set( [ x, y ],v ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)] = v;
      
      }));
    
   },
  get( [ x, y ] ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)];
      
      }));
    
   },
  render( canvas = this.canvas,shape = this.shape,state = this.state ){ 
    
      if( !(running__QUERY) ){ 
        return false;
       };
      var ctx = canvas.getContext("2d"),
          height = shape[0],
          width = shape[1];
      return state.data().then(((d) => {
      	
        var imageData = (new ImageData(height, width));
        for (var i = 0;i < (width * height);++(i))
        {
        var j = (i * 4),
            k = i;;
        var a = d[i];;
        this._renderCell(a, j, imageData)
        }
        ;
        return ctx.putImageData(imageData, 0, 0);
      
      }));
    
   }
 });
var Colored = Field.define("Colored", { 
  init( color = this.color,shape = this.shape,state = this.state ){ 
    
      this.color = color;this.shape = shape;this.state = state;
      Field.init.call(this, shape, state);
      return this;
    
   },
  _renderCell( a,j,imageData ){ 
    
      imageData.data[j] = Math.round((this.color.r * a));
      imageData.data[(j + 1)] = Math.round((this.color.g * a));
      imageData.data[(j + 2)] = Math.round((this.color.b * a));
      return imageData.data[(j + 3)] = 255;
    
   }
 });
var colored = create(Colored);
var dl = require("deeplearn"),
    m = require("mathjs");
var canvas = document.createElement("canvas");
document.body.appendChild(canvas)
canvas.style.height = 800;
canvas.style.width = 800;
var W = 800,
    H = 800;
var rgb = (function rgb$(r, g, b) {
  /* rgb eval.sibilant:1:0 */

  return { 
    r,
    g,
    b
   };
});
var kernel = dl.reshape(dl.tensor2d([ [ 1, 1, 1 ], [ 1, 0, 1 ], [ 1, 1, 1 ] ]), [ 3, 3, 1, 1 ]);
var state0Tensor = dl.randomUniform([ H, W ]).greater(dl.scalar(0.5, "float32"));
var state = dl.variable(dl.cast(dl.reshape(state0Tensor, [ 1, H, W, 1 ]), "float32"));
var running__QUERY = true;
var step = (function step$() {
  /* step eval.sibilant:1:0 */

  return state.assign(dl.tidy((() => {
  	
    var neighbors = dl.conv2d(state, kernel, [ 1, 1, 1, 1 ], "same");
    var survive = dl.logicalAnd(dl.equal(state, dl.scalar(1, "float32")), dl.equal(neighbors, dl.scalar(2, "float32"))),
        born = dl.equal(neighbors, dl.scalar(3, "float32"));
    return dl.cast(dl.logicalOr(survive, born), "float32");
  
  })));
});
var black = rgb(0, 0, 0);
var red = rgb(255, 0, 0);
var gameField = colored(red, [ H, W ], state);
setInterval((() => {
	
  step();
  return gameField.render(canvas);

}), 0)
state.data()


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
canvas.height = 800;
canvas.width = 800;


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)


(function(a, b, c) {
  /* ../../kit-lang/shell-utils/electron-kit/node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);





;
var R = require("ramda");
var { 
  create,
  extend,
  mixin,
  conditional,
  cond,
  partiallyApplyAfter
 } = require("kit/js/util");
var { 
  Interface
 } = require("kit-interface");


Array.prototype.each = (function Array$prototype$each$(f) {
  /* Array.prototype.each inc/misc.sibilant:1:0 */

  this.forEach(f);
  return this;
});
Object.prototype.each = (function Object$prototype$each$(f) {
  /* Object.prototype.each inc/misc.sibilant:4:0 */

  return Object.keys(this).forEach(((k) => {
  	
    return f(this[k], k);
  
  }));
});
var Field = Interface.define("Field", { 
  init( shape = [ 0, 0 ],state = dl.ones(shape) ){ 
    
      this.shape = shape;this.state = state;
      return this;
    
   },
  set( [ x, y ],v ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)] = v;
      
      }));
    
   },
  get( [ x, y ] ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)];
      
      }));
    
   },
  render( canvas = this.canvas,shape = this.shape,state = this.state ){ 
    
      if( !(running__QUERY) ){ 
        return false;
       };
      var ctx = canvas.getContext("2d"),
          height = shape[0],
          width = shape[1];
      return state.data().then(((d) => {
      	
        var imageData = (new ImageData(height, width));
        for (var i = 0;i < (width * height);++(i))
        {
        var j = (i * 4),
            k = i;;
        var a = d[i];;
        this._renderCell(a, j, imageData)
        }
        ;
        return ctx.putImageData(imageData, 0, 0);
      
      }));
    
   }
 });
var Colored = Field.define("Colored", { 
  init( color = this.color,shape = this.shape,state = this.state ){ 
    
      this.color = color;this.shape = shape;this.state = state;
      Field.init.call(this, shape, state);
      return this;
    
   },
  _renderCell( a,j,imageData ){ 
    
      imageData.data[j] = Math.round((this.color.r * a));
      imageData.data[(j + 1)] = Math.round((this.color.g * a));
      imageData.data[(j + 2)] = Math.round((this.color.b * a));
      return imageData.data[(j + 3)] = 255;
    
   }
 });
var colored = create(Colored);
var dl = require("deeplearn"),
    m = require("mathjs");
var canvas = document.createElement("canvas");
document.body.appendChild(canvas)
var W = 800,
    H = 800;
canvas.height = H;
canvas.width = W;
var rgb = (function rgb$(r, g, b) {
  /* rgb eval.sibilant:1:0 */

  return { 
    r,
    g,
    b
   };
});
var kernel = dl.reshape(dl.tensor2d([ [ 1, 1, 1 ], [ 1, 0, 1 ], [ 1, 1, 1 ] ]), [ 3, 3, 1, 1 ]);
var state0Tensor = dl.randomUniform([ H, W ]).greater(dl.scalar(0.5, "float32"));
var state = dl.variable(dl.cast(dl.reshape(state0Tensor, [ 1, H, W, 1 ]), "float32"));
var running__QUERY = true;
var step = (function step$() {
  /* step eval.sibilant:1:0 */

  return state.assign(dl.tidy((() => {
  	
    var neighbors = dl.conv2d(state, kernel, [ 1, 1, 1, 1 ], "same");
    var survive = dl.logicalAnd(dl.equal(state, dl.scalar(1, "float32")), dl.equal(neighbors, dl.scalar(2, "float32"))),
        born = dl.equal(neighbors, dl.scalar(3, "float32"));
    return dl.cast(dl.logicalOr(survive, born), "float32");
  
  })));
});
var black = rgb(0, 0, 0);
var red = rgb(255, 0, 0);
var gameField = colored(red, [ H, W ], state);
setInterval((() => {
	
  step();
  return gameField.render(canvas);

}), 0)
state.data()


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)


(function(a, b, c) {
  /* ../../kit-lang/shell-utils/electron-kit/node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);





;
var R = require("ramda");
var { 
  create,
  extend,
  mixin,
  conditional,
  cond,
  partiallyApplyAfter
 } = require("kit/js/util");
var { 
  Interface
 } = require("kit-interface");


Array.prototype.each = (function Array$prototype$each$(f) {
  /* Array.prototype.each inc/misc.sibilant:1:0 */

  this.forEach(f);
  return this;
});
Object.prototype.each = (function Object$prototype$each$(f) {
  /* Object.prototype.each inc/misc.sibilant:4:0 */

  return Object.keys(this).forEach(((k) => {
  	
    return f(this[k], k);
  
  }));
});
var Field = Interface.define("Field", { 
  init( shape = [ 0, 0 ],state = dl.ones(shape) ){ 
    
      this.shape = shape;this.state = state;
      return this;
    
   },
  set( [ x, y ],v ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)] = v;
      
      }));
    
   },
  get( [ x, y ] ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)];
      
      }));
    
   },
  render( canvas = this.canvas,shape = this.shape,state = this.state ){ 
    
      if( !(running__QUERY) ){ 
        return false;
       };
      var ctx = canvas.getContext("2d"),
          height = shape[0],
          width = shape[1];
      return state.data().then(((d) => {
      	
        var imageData = (new ImageData(height, width));
        for (var i = 0;i < (width * height);++(i))
        {
        var j = (i * 4),
            k = i;;
        var a = d[i];;
        this._renderCell(a, j, imageData)
        }
        ;
        return ctx.putImageData(imageData, 0, 0);
      
      }));
    
   }
 });
var Colored = Field.define("Colored", { 
  init( color = this.color,shape = this.shape,state = this.state ){ 
    
      this.color = color;this.shape = shape;this.state = state;
      Field.init.call(this, shape, state);
      return this;
    
   },
  _renderCell( a,j,imageData ){ 
    
      imageData.data[j] = Math.round((this.color.r * a));
      imageData.data[(j + 1)] = Math.round((this.color.g * a));
      imageData.data[(j + 2)] = Math.round((this.color.b * a));
      return imageData.data[(j + 3)] = 255;
    
   }
 });
var colored = create(Colored);
var dl = require("deeplearn"),
    m = require("mathjs");
var canvas = document.createElement("canvas");
document.body.appendChild(canvas)
var W = 800,
    H = 800;
canvas.height = H;
canvas.width = W;
var rgb = (function rgb$(r, g, b) {
  /* rgb eval.sibilant:1:0 */

  return { 
    r,
    g,
    b
   };
});
var kernel = dl.reshape(dl.tensor2d([ [ 1, 1, 1 ], [ 1, 0, 1 ], [ 1, 1, 1 ] ]), [ 3, 3, 1, 1 ]);
var state0Tensor = dl.randomUniform([ H, W ]).greater(dl.scalar(0.5, "float32"));
var state = dl.variable(dl.reshape(state0Tensor, [ 1, H, W, 1 ]));
var running__QUERY = true;
var step = (function step$() {
  /* step eval.sibilant:1:0 */

  return state.assign(dl.tidy((() => {
  	
    var neighbors = dl.conv2d(state, kernel, [ 1, 1, 1, 1 ], "same");
    var survive = dl.logicalAnd(dl.equal(state, dl.scalar(1, "int32")), dl.equal(neighbors, dl.scalar(2, "int32"))),
        born = dl.equal(neighbors, dl.scalar(3, "int32"));
    return dl.logicalOr(survive, born);
  
  })));
});
var black = rgb(0, 0, 0);
var red = rgb(255, 0, 0);
var gameField = colored(red, [ H, W ], state);
setInterval((() => {
	
  step();
  return gameField.render(canvas);

}), 0)
state.data()


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)


(function(a, b, c) {
  /* ../../kit-lang/shell-utils/electron-kit/node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);





;
var R = require("ramda");
var { 
  create,
  extend,
  mixin,
  conditional,
  cond,
  partiallyApplyAfter
 } = require("kit/js/util");
var { 
  Interface
 } = require("kit-interface");


Array.prototype.each = (function Array$prototype$each$(f) {
  /* Array.prototype.each inc/misc.sibilant:1:0 */

  this.forEach(f);
  return this;
});
Object.prototype.each = (function Object$prototype$each$(f) {
  /* Object.prototype.each inc/misc.sibilant:4:0 */

  return Object.keys(this).forEach(((k) => {
  	
    return f(this[k], k);
  
  }));
});
var Field = Interface.define("Field", { 
  init( shape = [ 0, 0 ],state = dl.ones(shape) ){ 
    
      this.shape = shape;this.state = state;
      return this;
    
   },
  set( [ x, y ],v ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)] = v;
      
      }));
    
   },
  get( [ x, y ] ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)];
      
      }));
    
   },
  render( canvas = this.canvas,shape = this.shape,state = this.state ){ 
    
      if( !(running__QUERY) ){ 
        return false;
       };
      var ctx = canvas.getContext("2d"),
          height = shape[0],
          width = shape[1];
      return state.data().then(((d) => {
      	
        var imageData = (new ImageData(height, width));
        for (var i = 0;i < (width * height);++(i))
        {
        var j = (i * 4),
            k = i;;
        var a = d[i];;
        this._renderCell(a, j, imageData)
        }
        ;
        return ctx.putImageData(imageData, 0, 0);
      
      }));
    
   }
 });
var Colored = Field.define("Colored", { 
  init( color = this.color,shape = this.shape,state = this.state ){ 
    
      this.color = color;this.shape = shape;this.state = state;
      Field.init.call(this, shape, state);
      return this;
    
   },
  _renderCell( a,j,imageData ){ 
    
      imageData.data[j] = Math.round((this.color.r * a));
      imageData.data[(j + 1)] = Math.round((this.color.g * a));
      imageData.data[(j + 2)] = Math.round((this.color.b * a));
      return imageData.data[(j + 3)] = 255;
    
   }
 });
var colored = create(Colored);
var dl = require("deeplearn"),
    m = require("mathjs");
var canvas = document.createElement("canvas");
document.body.appendChild(canvas)
var W = 800,
    H = 800;
canvas.height = H;
canvas.width = W;
var rgb = (function rgb$(r, g, b) {
  /* rgb eval.sibilant:1:0 */

  return { 
    r,
    g,
    b
   };
});
var kernel = dl.reshape(dl.tensor2d([ [ 1, 1, 1 ], [ 1, 0, 1 ], [ 1, 1, 1 ] ]), [ 3, 3, 1, 1 ]);
var state0Tensor = dl.randomUniform([ H, W ]).greater(dl.scalar(0.5, "float32"));
var state = dl.variable(dl.reshape(state0Tensor, [ 1, H, W, 1 ]));
var running__QUERY = true;
var step = (function step$() {
  /* step eval.sibilant:1:0 */

  return state.assign(dl.tidy((() => {
  	
    var neighbors = dl.conv2d(state, kernel, [ 1, 1, 1, 1 ], "same");
    var survive = dl.logicalAnd(dl.equal(state, dl.scalar(1, "int32")), dl.equal(neighbors, dl.scalar(2, "int32"))),
        born = dl.equal(neighbors, dl.scalar(3, "int32"));
    return dl.logicalOr(survive, born);
  
  })));
});
var black = rgb(0, 0, 0);
var red = rgb(255, 0, 0);
var gameField = colored(red, [ H, W ], state);
var start = (function start$() {
  /* start eval.sibilant:1:0 */

  return dl.nextFrame().then((() => {
  	
    step();
    gameField.render(canvas);
    return if( running__QUERY ){ 
      start()
     };
  
  }));
});
state.data()


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var start = (function start$() {
  /* start eval.sibilant:1:0 */

  return dl.nextFrame().then((() => {
  	
    if( running__QUERY ){ 
      return false;
     };
    step();
    gameField.render(canvas);
    return start();
  
  }));
});


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
start()


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)


(function(a, b, c) {
  /* ../../kit-lang/shell-utils/electron-kit/node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);





;
var R = require("ramda");
var { 
  create,
  extend,
  mixin,
  conditional,
  cond,
  partiallyApplyAfter
 } = require("kit/js/util");
var { 
  Interface
 } = require("kit-interface");


Array.prototype.each = (function Array$prototype$each$(f) {
  /* Array.prototype.each inc/misc.sibilant:1:0 */

  this.forEach(f);
  return this;
});
Object.prototype.each = (function Object$prototype$each$(f) {
  /* Object.prototype.each inc/misc.sibilant:4:0 */

  return Object.keys(this).forEach(((k) => {
  	
    return f(this[k], k);
  
  }));
});
var Field = Interface.define("Field", { 
  init( shape = [ 0, 0 ],state = dl.ones(shape) ){ 
    
      this.shape = shape;this.state = state;
      return this;
    
   },
  set( [ x, y ],v ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)] = v;
      
      }));
    
   },
  get( [ x, y ] ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)];
      
      }));
    
   },
  render( canvas = this.canvas,shape = this.shape,state = this.state ){ 
    
      if( !(running__QUERY) ){ 
        return false;
       };
      var ctx = canvas.getContext("2d"),
          height = shape[0],
          width = shape[1];
      return state.data().then(((d) => {
      	
        var imageData = (new ImageData(height, width));
        for (var i = 0;i < (width * height);++(i))
        {
        var j = (i * 4),
            k = i;;
        var a = d[i];;
        this._renderCell(a, j, imageData)
        }
        ;
        return ctx.putImageData(imageData, 0, 0);
      
      }));
    
   }
 });
var Colored = Field.define("Colored", { 
  init( color = this.color,shape = this.shape,state = this.state ){ 
    
      this.color = color;this.shape = shape;this.state = state;
      Field.init.call(this, shape, state);
      return this;
    
   },
  _renderCell( a,j,imageData ){ 
    
      imageData.data[j] = Math.round((this.color.r * a));
      imageData.data[(j + 1)] = Math.round((this.color.g * a));
      imageData.data[(j + 2)] = Math.round((this.color.b * a));
      return imageData.data[(j + 3)] = 255;
    
   }
 });
var colored = create(Colored);
var dl = require("deeplearn"),
    m = require("mathjs");
var canvas = document.createElement("canvas");
document.body.appendChild(canvas)
var W = 800,
    H = 800;
canvas.height = H;
canvas.width = W;
var rgb = (function rgb$(r, g, b) {
  /* rgb eval.sibilant:1:0 */

  return { 
    r,
    g,
    b
   };
});
var kernel = dl.reshape(dl.tensor2d([ [ 1, 1, 1 ], [ 1, 0, 1 ], [ 1, 1, 1 ] ]), [ 3, 3, 1, 1 ]);
var state0Tensor = dl.randomUniform([ H, W ]).greater(dl.scalar(0.5, "float32"));
var state = dl.variable(dl.reshape(state0Tensor, [ 1, H, W, 1 ]));
var running__QUERY = true;
var step = (function step$() {
  /* step eval.sibilant:1:0 */

  return state.assign(dl.tidy((() => {
  	
    var neighbors = dl.conv2d(state, kernel, [ 1, 1, 1, 1 ], "same");
    var survive = dl.logicalAnd(dl.equal(state, dl.scalar(1, "int32")), dl.equal(neighbors, dl.scalar(2, "int32"))),
        born = dl.equal(neighbors, dl.scalar(3, "int32"));
    return dl.logicalOr(survive, born);
  
  })));
});
var black = rgb(0, 0, 0);
var red = rgb(255, 0, 0);
var gameField = colored(red, [ H, W ], state);
var start = (function start$() {
  /* start eval.sibilant:1:0 */

  return dl.nextFrame().then((() => {
  	
    if( running__QUERY ){ 
      return false;
     };
    step();
    gameField.render(canvas);
    return start();
  
  }));
});
start()
state.data()


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)


(function(a, b, c) {
  /* ../../kit-lang/shell-utils/electron-kit/node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);





;
var R = require("ramda");
var { 
  create,
  extend,
  mixin,
  conditional,
  cond,
  partiallyApplyAfter
 } = require("kit/js/util");
var { 
  Interface
 } = require("kit-interface");


Array.prototype.each = (function Array$prototype$each$(f) {
  /* Array.prototype.each inc/misc.sibilant:1:0 */

  this.forEach(f);
  return this;
});
Object.prototype.each = (function Object$prototype$each$(f) {
  /* Object.prototype.each inc/misc.sibilant:4:0 */

  return Object.keys(this).forEach(((k) => {
  	
    return f(this[k], k);
  
  }));
});
var Field = Interface.define("Field", { 
  init( shape = [ 0, 0 ],state = dl.ones(shape) ){ 
    
      this.shape = shape;this.state = state;
      return this;
    
   },
  set( [ x, y ],v ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)] = v;
      
      }));
    
   },
  get( [ x, y ] ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)];
      
      }));
    
   },
  render( canvas = this.canvas,shape = this.shape,state = this.state ){ 
    
      if( !(running__QUERY) ){ 
        return false;
       };
      var ctx = canvas.getContext("2d"),
          height = shape[0],
          width = shape[1];
      return state.data().then(((d) => {
      	
        var imageData = (new ImageData(height, width));
        for (var i = 0;i < (width * height);++(i))
        {
        var j = (i * 4),
            k = i;;
        var a = d[i];;
        this._renderCell(a, j, imageData)
        }
        ;
        return ctx.putImageData(imageData, 0, 0);
      
      }));
    
   }
 });
var Colored = Field.define("Colored", { 
  init( color = this.color,shape = this.shape,state = this.state ){ 
    
      this.color = color;this.shape = shape;this.state = state;
      Field.init.call(this, shape, state);
      return this;
    
   },
  _renderCell( a,j,imageData ){ 
    
      imageData.data[j] = Math.round((this.color.r * a));
      imageData.data[(j + 1)] = Math.round((this.color.g * a));
      imageData.data[(j + 2)] = Math.round((this.color.b * a));
      return imageData.data[(j + 3)] = 255;
    
   }
 });
var colored = create(Colored);
var dl = require("deeplearn"),
    m = require("mathjs");
var canvas = document.createElement("canvas");
document.body.appendChild(canvas)
var W = 800,
    H = 800;
canvas.height = H;
canvas.width = W;
var rgb = (function rgb$(r, g, b) {
  /* rgb eval.sibilant:1:0 */

  return { 
    r,
    g,
    b
   };
});
var kernel = dl.reshape(dl.tensor2d([ [ 1, 1, 1 ], [ 1, 0, 1 ], [ 1, 1, 1 ] ]), [ 3, 3, 1, 1 ]);
var state0Tensor = dl.randomUniform([ H, W ]).greater(dl.scalar(0.5, "float32")).cast("int32");
var state = dl.variable(dl.reshape(state0Tensor, [ 1, H, W, 1 ]));
var running__QUERY = true;
var step = (function step$() {
  /* step eval.sibilant:1:0 */

  return state.assign(dl.tidy((() => {
  	
    var neighbors = dl.conv2d(state, kernel, [ 1, 1, 1, 1 ], "same");
    var survive = dl.logicalAnd(dl.equal(state, dl.scalar(1, "int32")), dl.equal(neighbors, dl.scalar(2, "int32"))),
        born = dl.equal(neighbors, dl.scalar(3, "int32"));
    return dl.logicalOr(survive, born);
  
  })));
});
var black = rgb(0, 0, 0);
var red = rgb(255, 0, 0);
var gameField = colored(red, [ H, W ], state);
var start = (function start$() {
  /* start eval.sibilant:1:0 */

  return dl.nextFrame().then((() => {
  	
    if( running__QUERY ){ 
      return false;
     };
    step();
    gameField.render(canvas);
    return start();
  
  }));
});
start()
state.data()


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)


(function(a, b, c) {
  /* ../../kit-lang/shell-utils/electron-kit/node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);





;
var R = require("ramda");
var { 
  create,
  extend,
  mixin,
  conditional,
  cond,
  partiallyApplyAfter
 } = require("kit/js/util");
var { 
  Interface
 } = require("kit-interface");


Array.prototype.each = (function Array$prototype$each$(f) {
  /* Array.prototype.each inc/misc.sibilant:1:0 */

  this.forEach(f);
  return this;
});
Object.prototype.each = (function Object$prototype$each$(f) {
  /* Object.prototype.each inc/misc.sibilant:4:0 */

  return Object.keys(this).forEach(((k) => {
  	
    return f(this[k], k);
  
  }));
});
var Field = Interface.define("Field", { 
  init( shape = [ 0, 0 ],state = dl.ones(shape) ){ 
    
      this.shape = shape;this.state = state;
      return this;
    
   },
  set( [ x, y ],v ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)] = v;
      
      }));
    
   },
  get( [ x, y ] ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)];
      
      }));
    
   },
  render( canvas = this.canvas,shape = this.shape,state = this.state ){ 
    
      if( !(running__QUERY) ){ 
        return false;
       };
      var ctx = canvas.getContext("2d"),
          height = shape[0],
          width = shape[1];
      return state.data().then(((d) => {
      	
        var imageData = (new ImageData(height, width));
        for (var i = 0;i < (width * height);++(i))
        {
        var j = (i * 4),
            k = i;;
        var a = d[i];;
        this._renderCell(a, j, imageData)
        }
        ;
        return ctx.putImageData(imageData, 0, 0);
      
      }));
    
   }
 });
var Colored = Field.define("Colored", { 
  init( color = this.color,shape = this.shape,state = this.state ){ 
    
      this.color = color;this.shape = shape;this.state = state;
      Field.init.call(this, shape, state);
      return this;
    
   },
  _renderCell( a,j,imageData ){ 
    
      imageData.data[j] = Math.round((this.color.r * a));
      imageData.data[(j + 1)] = Math.round((this.color.g * a));
      imageData.data[(j + 2)] = Math.round((this.color.b * a));
      return imageData.data[(j + 3)] = 255;
    
   }
 });
var colored = create(Colored);
var dl = require("deeplearn"),
    m = require("mathjs");
var canvas = document.createElement("canvas");
document.body.appendChild(canvas)
var W = 800,
    H = 800;
canvas.height = H;
canvas.width = W;
var rgb = (function rgb$(r, g, b) {
  /* rgb eval.sibilant:1:0 */

  return { 
    r,
    g,
    b
   };
});
var kernel = dl.reshape(dl.tensor2d([ [ 1, 1, 1 ], [ 1, 0, 1 ], [ 1, 1, 1 ] ]), [ 3, 3, 1, 1 ]);
var state0Tensor = dl.randomUniform([ H, W ]).greater(dl.scalar(0.5, "float32"));
var state = dl.variable(dl.reshape(state0Tensor, [ 1, H, W, 1 ]));
var running__QUERY = true;
var step = (function step$() {
  /* step eval.sibilant:1:0 */

  return state.assign(dl.tidy((() => {
  	
    var neighbors = dl.conv2d(state, kernel, [ 1, 1, 1, 1 ], "same");
    var survive = dl.logicalAnd(dl.equal(state, dl.scalar(1, "int32")), dl.equal(neighbors, dl.scalar(2, "int32"))),
        born = dl.equal(neighbors, dl.scalar(3, "int32"));
    return dl.logicalOr(survive, born);
  
  })));
});
var black = rgb(0, 0, 0);
var red = rgb(255, 0, 0);
var gameField = colored(red, [ H, W ], state);
var start = (function start$() {
  /* start eval.sibilant:1:0 */

  return dl.nextFrame().then((() => {
  	
    if( running__QUERY ){ 
      return false;
     };
    step();
    gameField.render(canvas);
    return start();
  
  }));
});
start()
state.data()


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)


(function(a, b, c) {
  /* ../../kit-lang/shell-utils/electron-kit/node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);





;
var R = require("ramda");
var { 
  create,
  extend,
  mixin,
  conditional,
  cond,
  partiallyApplyAfter
 } = require("kit/js/util");
var { 
  Interface
 } = require("kit-interface");


Array.prototype.each = (function Array$prototype$each$(f) {
  /* Array.prototype.each inc/misc.sibilant:1:0 */

  this.forEach(f);
  return this;
});
Object.prototype.each = (function Object$prototype$each$(f) {
  /* Object.prototype.each inc/misc.sibilant:4:0 */

  return Object.keys(this).forEach(((k) => {
  	
    return f(this[k], k);
  
  }));
});
var Field = Interface.define("Field", { 
  init( shape = [ 0, 0 ],state = dl.ones(shape) ){ 
    
      this.shape = shape;this.state = state;
      return this;
    
   },
  set( [ x, y ],v ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)] = v;
      
      }));
    
   },
  get( [ x, y ] ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)];
      
      }));
    
   },
  render( canvas = this.canvas,shape = this.shape,state = this.state ){ 
    
      if( !(running__QUERY) ){ 
        return false;
       };
      var ctx = canvas.getContext("2d"),
          height = shape[0],
          width = shape[1];
      return state.data().then(((d) => {
      	
        var imageData = (new ImageData(height, width));
        for (var i = 0;i < (width * height);++(i))
        {
        var j = (i * 4),
            k = i;;
        var a = d[i];;
        this._renderCell(a, j, imageData)
        }
        ;
        return ctx.putImageData(imageData, 0, 0);
      
      }));
    
   }
 });
var Colored = Field.define("Colored", { 
  init( color = this.color,shape = this.shape,state = this.state ){ 
    
      this.color = color;this.shape = shape;this.state = state;
      Field.init.call(this, shape, state);
      return this;
    
   },
  _renderCell( a,j,imageData ){ 
    
      imageData.data[j] = Math.round((this.color.r * a));
      imageData.data[(j + 1)] = Math.round((this.color.g * a));
      imageData.data[(j + 2)] = Math.round((this.color.b * a));
      return imageData.data[(j + 3)] = 255;
    
   }
 });
var colored = create(Colored);
var dl = require("deeplearn"),
    m = require("mathjs");
var canvas = document.createElement("canvas");
document.body.appendChild(canvas)
var W = 800,
    H = 800;
canvas.height = H;
canvas.width = W;
var rgb = (function rgb$(r, g, b) {
  /* rgb eval.sibilant:1:0 */

  return { 
    r,
    g,
    b
   };
});
var kernel = dl.reshape(dl.tensor2d([ [ 1, 1, 1 ], [ 1, 0, 1 ], [ 1, 1, 1 ] ]), [ 3, 3, 1, 1 ]);
var state0Tensor = dl.randomUniform([ H, W ]).greater(dl.scalar(0.5, "float32"));
var state = dl.variable(dl.cast(dl.reshape(state0Tensor, [ 1, H, W, 1 ]), "float32"));
var running__QUERY = true;
var step = (function step$() {
  /* step eval.sibilant:1:0 */

  return state.assign(dl.tidy((() => {
  	
    var neighbors = dl.conv2d(state, kernel, [ 1, 1, 1, 1 ], "same");
    var survive = dl.logicalAnd(dl.equal(state, dl.scalar(1, "float32")), dl.equal(neighbors, dl.scalar(2, "float32"))),
        born = dl.equal(neighbors, dl.scalar(3, "float32"));
    return dl.cast(dl.logicalOr(survive, born), "float32");
  
  })));
});
var black = rgb(0, 0, 0);
var red = rgb(255, 0, 0);
var gameField = colored(red, [ H, W ], state);
setInterval((() => {
	
  step();
  return gameField.render(canvas);

}), 0)
state.data()


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)


(function(a, b, c) {
  /* ../../kit-lang/shell-utils/electron-kit/node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);





;
var R = require("ramda");
var { 
  create,
  extend,
  mixin,
  conditional,
  cond,
  partiallyApplyAfter
 } = require("kit/js/util");
var { 
  Interface
 } = require("kit-interface");


Array.prototype.each = (function Array$prototype$each$(f) {
  /* Array.prototype.each inc/misc.sibilant:1:0 */

  this.forEach(f);
  return this;
});
Object.prototype.each = (function Object$prototype$each$(f) {
  /* Object.prototype.each inc/misc.sibilant:4:0 */

  return Object.keys(this).forEach(((k) => {
  	
    return f(this[k], k);
  
  }));
});
var Field = Interface.define("Field", { 
  init( shape = [ 0, 0 ],state = dl.ones(shape) ){ 
    
      this.shape = shape;this.state = state;
      return this;
    
   },
  set( [ x, y ],v ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)] = v;
      
      }));
    
   },
  get( [ x, y ] ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)];
      
      }));
    
   },
  render( canvas = this.canvas,shape = this.shape,state = this.state ){ 
    
      if( !(running__QUERY) ){ 
        return false;
       };
      var ctx = canvas.getContext("2d"),
          height = shape[0],
          width = shape[1];
      return state.data().then(((d) => {
      	
        var imageData = (new ImageData(height, width));
        for (var i = 0;i < (width * height);++(i))
        {
        var j = (i * 4),
            k = i;;
        var a = d[i];;
        this._renderCell(a, j, imageData)
        }
        ;
        return ctx.putImageData(imageData, 0, 0);
      
      }));
    
   }
 });
var Colored = Field.define("Colored", { 
  init( color = this.color,shape = this.shape,state = this.state ){ 
    
      this.color = color;this.shape = shape;this.state = state;
      Field.init.call(this, shape, state);
      return this;
    
   },
  _renderCell( a,j,imageData ){ 
    
      imageData.data[j] = Math.round((this.color.r * a));
      imageData.data[(j + 1)] = Math.round((this.color.g * a));
      imageData.data[(j + 2)] = Math.round((this.color.b * a));
      return imageData.data[(j + 3)] = 255;
    
   }
 });
var colored = create(Colored);
var dl = require("deeplearn"),
    m = require("mathjs");
var canvas = document.createElement("canvas");
document.body.appendChild(canvas)
var W = 800,
    H = 800;
canvas.height = H;
canvas.width = W;
var rgb = (function rgb$(r, g, b) {
  /* rgb eval.sibilant:1:0 */

  return { 
    r,
    g,
    b
   };
});
var kernel = dl.reshape(dl.tensor2d([ [ 1, 1, 1 ], [ 1, 0, 1 ], [ 1, 1, 1 ] ]), [ 3, 3, 1, 1 ]);
var state0Tensor = dl.randomUniform([ H, W ]).greater(dl.scalar(0.5, "float32"));
var state = dl.variable(dl.cast(dl.reshape(state0Tensor, [ 1, H, W, 1 ]), "float32"));
var running__QUERY = true;
var step = (function step$() {
  /* step eval.sibilant:1:0 */

  return state.assign(dl.tidy((() => {
  	
    var neighbors = dl.conv2d(state, kernel, [ 1, 1, 1, 1 ], "same");
    var survive = dl.logicalAnd(dl.equal(state, dl.scalar(1, "float32")), dl.equal(neighbors, dl.scalar(2, "float32"))),
        born = dl.equal(neighbors, dl.scalar(3, "float32"));
    return dl.cast(dl.logicalOr(survive, born), "float32");
  
  })));
});
var black = rgb(0, 0, 0);
var red = rgb(255, 0, 0);
var gameField = colored(red, [ H, W ], state);
var start = (function start$() {
  /* start eval.sibilant:1:0 */

  return dl.nextFrame().then((() => {
  	
    if( running__QUERY ){ 
      return false;
     };
    step();
    gameField.render(canvas);
    return start();
  
  }));
});
start()
state.data()


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)


(function(a, b, c) {
  /* ../../kit-lang/shell-utils/electron-kit/node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);





;
var R = require("ramda");
var { 
  create,
  extend,
  mixin,
  conditional,
  cond,
  partiallyApplyAfter
 } = require("kit/js/util");
var { 
  Interface
 } = require("kit-interface");


Array.prototype.each = (function Array$prototype$each$(f) {
  /* Array.prototype.each inc/misc.sibilant:1:0 */

  this.forEach(f);
  return this;
});
Object.prototype.each = (function Object$prototype$each$(f) {
  /* Object.prototype.each inc/misc.sibilant:4:0 */

  return Object.keys(this).forEach(((k) => {
  	
    return f(this[k], k);
  
  }));
});
var Field = Interface.define("Field", { 
  init( shape = [ 0, 0 ],state = dl.ones(shape) ){ 
    
      this.shape = shape;this.state = state;
      return this;
    
   },
  set( [ x, y ],v ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)] = v;
      
      }));
    
   },
  get( [ x, y ] ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)];
      
      }));
    
   },
  render( canvas = this.canvas,shape = this.shape,state = this.state ){ 
    
      if( !(running__QUERY) ){ 
        return false;
       };
      var ctx = canvas.getContext("2d"),
          height = shape[0],
          width = shape[1];
      return state.data().then(((d) => {
      	
        var imageData = (new ImageData(height, width));
        for (var i = 0;i < (width * height);++(i))
        {
        var j = (i * 4),
            k = i;;
        var a = d[i];;
        this._renderCell(a, j, imageData)
        }
        ;
        return ctx.putImageData(imageData, 0, 0);
      
      }));
    
   }
 });
var Colored = Field.define("Colored", { 
  init( color = this.color,shape = this.shape,state = this.state ){ 
    
      this.color = color;this.shape = shape;this.state = state;
      Field.init.call(this, shape, state);
      return this;
    
   },
  _renderCell( a,j,imageData ){ 
    
      imageData.data[j] = Math.round((this.color.r * a));
      imageData.data[(j + 1)] = Math.round((this.color.g * a));
      imageData.data[(j + 2)] = Math.round((this.color.b * a));
      return imageData.data[(j + 3)] = 255;
    
   }
 });
var colored = create(Colored);
var dl = require("deeplearn"),
    m = require("mathjs");
var canvas = document.createElement("canvas");
document.body.appendChild(canvas)
canvas.height = 800;
canvas.width = 800;
var W = 800,
    H = 800;
var rgb = (function rgb$(r, g, b) {
  /* rgb eval.sibilant:1:0 */

  return { 
    r,
    g,
    b
   };
});
var kernel = dl.reshape(dl.tensor2d([ [ 1, 1, 1 ], [ 1, 0, 1 ], [ 1, 1, 1 ] ]), [ 3, 3, 1, 1 ]);
var state0Tensor = dl.randomUniform([ H, W ]).greater(dl.scalar(0.5, "float32"));
var state = dl.variable(dl.cast(dl.reshape(state0Tensor, [ 1, H, W, 1 ]), "float32"));
var running__QUERY = true;
var step = (function step$() {
  /* step eval.sibilant:1:0 */

  return state.assign(dl.tidy((() => {
  	
    var neighbors = dl.conv2d(state, kernel, [ 1, 1, 1, 1 ], "same");
    var survive = dl.logicalAnd(dl.equal(state, dl.scalar(1, "float32")), dl.equal(neighbors, dl.scalar(2, "float32"))),
        born = dl.equal(neighbors, dl.scalar(3, "float32"));
    return dl.cast(dl.logicalOr(survive, born), "float32");
  
  })));
});
var black = rgb(0, 0, 0);
var red = rgb(255, 0, 0);
var gameField = colored(red, [ H, W ], state);
setInterval((() => {
	
  step();
  return gameField.render(canvas);

}), 0)
state.data()


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)


(function(a, b, c) {
  /* ../../kit-lang/shell-utils/electron-kit/node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);





;
var R = require("ramda");
var { 
  create,
  extend,
  mixin,
  conditional,
  cond,
  partiallyApplyAfter
 } = require("kit/js/util");
var { 
  Interface
 } = require("kit-interface");


Array.prototype.each = (function Array$prototype$each$(f) {
  /* Array.prototype.each inc/misc.sibilant:1:0 */

  this.forEach(f);
  return this;
});
Object.prototype.each = (function Object$prototype$each$(f) {
  /* Object.prototype.each inc/misc.sibilant:4:0 */

  return Object.keys(this).forEach(((k) => {
  	
    return f(this[k], k);
  
  }));
});
var Field = Interface.define("Field", { 
  init( shape = [ 0, 0 ],state = dl.ones(shape) ){ 
    
      this.shape = shape;this.state = state;
      return this;
    
   },
  set( [ x, y ],v ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)] = v;
      
      }));
    
   },
  get( [ x, y ] ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)];
      
      }));
    
   },
  render( canvas = this.canvas,shape = this.shape,state = this.state ){ 
    
      if( !(running__QUERY) ){ 
        return false;
       };
      var ctx = canvas.getContext("2d"),
          height = shape[0],
          width = shape[1];
      return state.data().then(((d) => {
      	
        var imageData = (new ImageData(height, width));
        for (var i = 0;i < (width * height);++(i))
        {
        var j = (i * 4),
            k = i;;
        var a = d[i];;
        this._renderCell(a, j, imageData)
        }
        ;
        return ctx.putImageData(imageData, 0, 0);
      
      }));
    
   }
 });
var Colored = Field.define("Colored", { 
  init( color = this.color,shape = this.shape,state = this.state ){ 
    
      this.color = color;this.shape = shape;this.state = state;
      Field.init.call(this, shape, state);
      return this;
    
   },
  _renderCell( a,j,imageData ){ 
    
      imageData.data[j] = Math.round((this.color.r * a));
      imageData.data[(j + 1)] = Math.round((this.color.g * a));
      imageData.data[(j + 2)] = Math.round((this.color.b * a));
      return imageData.data[(j + 3)] = 255;
    
   }
 });
var colored = create(Colored);
var dl = require("deeplearn"),
    m = require("mathjs");
var canvas = document.createElement("canvas");
document.body.appendChild(canvas)
var W = 800,
    H = 800;
canvas.height = H;
canvas.width = W;
var rgb = (function rgb$(r, g, b) {
  /* rgb eval.sibilant:1:0 */

  return { 
    r,
    g,
    b
   };
});
var kernel = dl.reshape(dl.tensor2d([ [ 1, 1, 1 ], [ 1, 0, 1 ], [ 1, 1, 1 ] ]), [ 3, 3, 1, 1 ]);
var state0Tensor = dl.randomUniform([ H, W ]).greater(dl.scalar(0.5, "float32"));
var state = dl.variable(dl.cast(dl.reshape(state0Tensor, [ 1, H, W, 1 ]), "float32"));
var running__QUERY = true;
var step = (function step$() {
  /* step eval.sibilant:1:0 */

  return state.assign(dl.tidy((() => {
  	
    var neighbors = dl.conv2d(state, kernel, [ 1, 1, 1, 1 ], "same");
    var survive = dl.logicalAnd(dl.equal(state, dl.scalar(1, "float32")), dl.equal(neighbors, dl.scalar(2, "float32"))),
        born = dl.equal(neighbors, dl.scalar(3, "float32"));
    return dl.cast(dl.logicalOr(survive, born), "float32");
  
  })));
});
var black = rgb(0, 0, 0);
var red = rgb(255, 0, 0);
var gameField = colored(red, [ H, W ], state);
var start = (function start$() {
  /* start eval.sibilant:1:0 */

  return dl.nextFrame().then((() => {
  	
    if( !(running__QUERY) ){ 
      return false;
     };
    step();
    gameField.render(canvas);
    return start();
  
  }));
});
start()


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var step = (function step$() {
  /* step eval.sibilant:1:0 */

  return state.assign(dl.tidy((() => {
  	
    var neighbors = dl.conv2d(state, kernel, [ 1, 1, 1, 1 ], "same");
    var survive = dl.logicalAnd(dl.equal(state, dl.scalar(1, "float32")), dl.equal(neighbors, dl.scalar(2, "float32"))),
        born = dl.equal(neighbors, dl.scalar(3, "float32"));
    return dl.logicalOr(survive, born);
  
  })));
});


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var step = (function step$() {
  /* step eval.sibilant:1:0 */

  return state.assign(dl.tidy((() => {
  	
    var neighbors = dl.conv2d(state, kernel, [ 1, 1, 1, 1 ], "same");
    var survive = dl.logicalAnd(dl.equal(state, dl.scalar(1, "float32")), dl.equal(neighbors, dl.scalar(2, "float32"))),
        born = dl.equal(neighbors, dl.scalar(3, "float32"));
    return dl.logicalOr(survive, born);
  
  })));
});


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
console.log("yo")

(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
console.log("yo")



(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)


(function(a, b, c) {
  /* ../../kit-lang/shell-utils/electron-kit/node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);





;
var R = require("ramda");
var { 
  create,
  extend,
  mixin,
  conditional,
  cond,
  partiallyApplyAfter
 } = require("kit/js/util");
var { 
  Interface
 } = require("kit-interface");


Array.prototype.each = (function Array$prototype$each$(f) {
  /* Array.prototype.each inc/misc.sibilant:1:0 */

  this.forEach(f);
  return this;
});
Object.prototype.each = (function Object$prototype$each$(f) {
  /* Object.prototype.each inc/misc.sibilant:4:0 */

  return Object.keys(this).forEach(((k) => {
  	
    return f(this[k], k);
  
  }));
});
var Field = Interface.define("Field", { 
  init( shape = [ 0, 0 ],state = dl.ones(shape) ){ 
    
      this.shape = shape;this.state = state;
      return this;
    
   },
  set( [ x, y ],v ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)] = v;
      
      }));
    
   },
  get( [ x, y ] ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)];
      
      }));
    
   },
  render( canvas = this.canvas,shape = this.shape,state = this.state ){ 
    
      if( !(running__QUERY) ){ 
        return false;
       };
      var ctx = canvas.getContext("2d"),
          height = shape[0],
          width = shape[1];
      return state.data().then(((d) => {
      	
        var imageData = (new ImageData(height, width));
        for (var i = 0;i < (width * height);++(i))
        {
        var j = (i * 4),
            k = i;;
        var a = d[i];;
        this._renderCell(a, j, imageData)
        }
        ;
        return ctx.putImageData(imageData, 0, 0);
      
      }));
    
   }
 });
var Colored = Field.define("Colored", { 
  init( color = this.color,shape = this.shape,state = this.state ){ 
    
      this.color = color;this.shape = shape;this.state = state;
      Field.init.call(this, shape, state);
      return this;
    
   },
  _renderCell( a,j,imageData ){ 
    
      imageData.data[j] = Math.round((this.color.r * a));
      imageData.data[(j + 1)] = Math.round((this.color.g * a));
      imageData.data[(j + 2)] = Math.round((this.color.b * a));
      return imageData.data[(j + 3)] = 255;
    
   }
 });
var colored = create(Colored);
var dl = require("deeplearn"),
    m = require("mathjs");
var canvas = document.createElement("canvas");
document.body.appendChild(canvas)
var W = 800,
    H = 800;
canvas.height = H;
canvas.width = W;
var rgb = (function rgb$(r, g, b) {
  /* rgb eval.sibilant:1:0 */

  return { 
    r,
    g,
    b
   };
});
var kernel = dl.reshape(dl.tensor2d([ [ 1, 1, 1 ], [ 1, 0, 1 ], [ 1, 1, 1 ] ]), [ 3, 3, 1, 1 ]);
var state0Tensor = dl.randomUniform([ H, W ]).greater(dl.scalar(0.5, "float32"));
var state = dl.variable(dl.cast(dl.reshape(state0Tensor, [ 1, H, W, 1 ]), "float32"));
var running__QUERY = true;
var step = (function step$() {
  /* step eval.sibilant:1:0 */

  return state.assign(dl.tidy((() => {
  	
    var neighbors = dl.conv2d(state, kernel, [ 1, 1, 1, 1 ], "same");
    var survive = dl.logicalAnd(dl.equal(state, dl.scalar(1, "float32")), dl.equal(neighbors, dl.scalar(2, "float32"))),
        born = dl.equal(neighbors, dl.scalar(3, "float32"));
    return dl.logicalOr(survive, born);
  
  })));
});
var black = rgb(0, 0, 0);
var red = rgb(255, 0, 0);
console.log("yo")
var gameField = colored(red, [ H, W ], state);
var start = (function start$() {
  /* start eval.sibilant:1:0 */

  return dl.nextFrame().then((() => {
  	
    if( !(running__QUERY) ){ 
      return false;
     };
    step();
    gameField.render(canvas);
    return start();
  
  }));
});
start()


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)


(function(a, b, c) {
  /* ../../kit-lang/shell-utils/electron-kit/node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);





;
var R = require("ramda");
var { 
  create,
  extend,
  mixin,
  conditional,
  cond,
  partiallyApplyAfter
 } = require("kit/js/util");
var { 
  Interface
 } = require("kit-interface");


Array.prototype.each = (function Array$prototype$each$(f) {
  /* Array.prototype.each inc/misc.sibilant:1:0 */

  this.forEach(f);
  return this;
});
Object.prototype.each = (function Object$prototype$each$(f) {
  /* Object.prototype.each inc/misc.sibilant:4:0 */

  return Object.keys(this).forEach(((k) => {
  	
    return f(this[k], k);
  
  }));
});
var Field = Interface.define("Field", { 
  init( shape = [ 0, 0 ],state = dl.ones(shape) ){ 
    
      this.shape = shape;this.state = state;
      return this;
    
   },
  set( [ x, y ],v ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)] = v;
      
      }));
    
   },
  get( [ x, y ] ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)];
      
      }));
    
   },
  render( canvas = this.canvas,shape = this.shape,state = this.state ){ 
    
      if( !(running__QUERY) ){ 
        return false;
       };
      var ctx = canvas.getContext("2d"),
          height = shape[0],
          width = shape[1];
      return state.data().then(((d) => {
      	
        var imageData = (new ImageData(height, width));
        for (var i = 0;i < (width * height);++(i))
        {
        var j = (i * 4),
            k = i;;
        var a = d[i];;
        this._renderCell(a, j, imageData)
        }
        ;
        return ctx.putImageData(imageData, 0, 0);
      
      }));
    
   }
 });
var Colored = Field.define("Colored", { 
  init( color = this.color,shape = this.shape,state = this.state ){ 
    
      this.color = color;this.shape = shape;this.state = state;
      Field.init.call(this, shape, state);
      return this;
    
   },
  _renderCell( a,j,imageData ){ 
    
      imageData.data[j] = Math.round((this.color.r * a));
      imageData.data[(j + 1)] = Math.round((this.color.g * a));
      imageData.data[(j + 2)] = Math.round((this.color.b * a));
      return imageData.data[(j + 3)] = 255;
    
   }
 });
var colored = create(Colored);
var dl = require("deeplearn"),
    m = require("mathjs");
var canvas = document.createElement("canvas");
document.body.appendChild(canvas)
var W = 800,
    H = 800;
canvas.height = H;
canvas.width = W;
var rgb = (function rgb$(r, g, b) {
  /* rgb eval.sibilant:1:0 */

  return { 
    r,
    g,
    b
   };
});
var kernel = dl.reshape(dl.tensor2d([ [ 1, 1, 1 ], [ 1, 0, 1 ], [ 1, 1, 1 ] ]), [ 3, 3, 1, 1 ]);
var state0Tensor = dl.cast(dl.randomUniform([ H, W ]).greater(dl.scalar(0.5, "float32")), "bool");
var state = dl.variable(dl.reshape(state0Tensor, [ 1, H, W, 1 ]));
var running__QUERY = true;
var step = (function step$() {
  /* step eval.sibilant:1:0 */

  return state.assign(dl.tidy((() => {
  	
    var neighbors = dl.conv2d(state, kernel, [ 1, 1, 1, 1 ], "same");
    var survive = dl.logicalAnd(dl.equal(state, dl.scalar(1, "float32")), dl.equal(neighbors, dl.scalar(2, "float32"))),
        born = dl.equal(neighbors, dl.scalar(3, "float32"));
    return dl.logicalOr(survive, born);
  
  })));
});
var black = rgb(0, 0, 0);
var red = rgb(255, 0, 0);
console.log("yo")
var gameField = colored(red, [ H, W ], state);
var start = (function start$() {
  /* start eval.sibilant:1:0 */

  return dl.nextFrame().then((() => {
  	
    if( !(running__QUERY) ){ 
      return false;
     };
    step();
    gameField.render(canvas);
    return start();
  
  }));
});
start()


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)


(function(a, b, c) {
  /* ../../kit-lang/shell-utils/electron-kit/node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);





;
var R = require("ramda");
var { 
  create,
  extend,
  mixin,
  conditional,
  cond,
  partiallyApplyAfter
 } = require("kit/js/util");
var { 
  Interface
 } = require("kit-interface");


Array.prototype.each = (function Array$prototype$each$(f) {
  /* Array.prototype.each inc/misc.sibilant:1:0 */

  this.forEach(f);
  return this;
});
Object.prototype.each = (function Object$prototype$each$(f) {
  /* Object.prototype.each inc/misc.sibilant:4:0 */

  return Object.keys(this).forEach(((k) => {
  	
    return f(this[k], k);
  
  }));
});
var Field = Interface.define("Field", { 
  init( shape = [ 0, 0 ],state = dl.ones(shape) ){ 
    
      this.shape = shape;this.state = state;
      return this;
    
   },
  set( [ x, y ],v ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)] = v;
      
      }));
    
   },
  get( [ x, y ] ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)];
      
      }));
    
   },
  render( canvas = this.canvas,shape = this.shape,state = this.state ){ 
    
      if( !(running__QUERY) ){ 
        return false;
       };
      var ctx = canvas.getContext("2d"),
          height = shape[0],
          width = shape[1];
      return state.data().then(((d) => {
      	
        var imageData = (new ImageData(height, width));
        for (var i = 0;i < (width * height);++(i))
        {
        var j = (i * 4),
            k = i;;
        var a = d[i];;
        this._renderCell(a, j, imageData)
        }
        ;
        return ctx.putImageData(imageData, 0, 0);
      
      }));
    
   }
 });
var Colored = Field.define("Colored", { 
  init( color = this.color,shape = this.shape,state = this.state ){ 
    
      this.color = color;this.shape = shape;this.state = state;
      Field.init.call(this, shape, state);
      return this;
    
   },
  _renderCell( a,j,imageData ){ 
    
      imageData.data[j] = Math.round((this.color.r * a));
      imageData.data[(j + 1)] = Math.round((this.color.g * a));
      imageData.data[(j + 2)] = Math.round((this.color.b * a));
      return imageData.data[(j + 3)] = 255;
    
   }
 });
var colored = create(Colored);
var dl = require("deeplearn"),
    m = require("mathjs");
var canvas = document.createElement("canvas");
document.body.appendChild(canvas)
var W = 800,
    H = 800;
canvas.height = H;
canvas.width = W;
var rgb = (function rgb$(r, g, b) {
  /* rgb eval.sibilant:1:0 */

  return { 
    r,
    g,
    b
   };
});
var kernel = dl.reshape(dl.tensor2d([ [ 1, 1, 1 ], [ 1, 0, 1 ], [ 1, 1, 1 ] ]), [ 3, 3, 1, 1 ]);
var state0Tensor = dl.randomUniform([ H, W ]).greater(dl.scalar(0.5, "float32"));
var state = dl.variable(dl.cast(dl.reshape(state0Tensor, [ 1, H, W, 1 ]), "float32"));
var running__QUERY = true;
var step = (function step$() {
  /* step eval.sibilant:1:0 */

  return state.assign(dl.tidy((() => {
  	
    var neighbors = dl.conv2d(state, kernel, [ 1, 1, 1, 1 ], "same");
    var survive = dl.logicalAnd(dl.equal(state, dl.scalar(1, "float32")), dl.equal(neighbors, dl.scalar(2, "float32"))),
        born = dl.equal(neighbors, dl.scalar(3, "float32"));
    return dl.logicalOr(survive, born);
  
  })));
});
var black = rgb(0, 0, 0);
var red = rgb(255, 0, 0);
console.log("yo")
var gameField = colored(red, [ H, W ], state);
var start = (function start$() {
  /* start eval.sibilant:1:0 */

  return dl.nextFrame().then((() => {
  	
    if( !(running__QUERY) ){ 
      return false;
     };
    step();
    gameField.render(canvas);
    return start();
  
  }));
});
start()


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
var step = (function step$() {
  /* step eval.sibilant:1:0 */

  return state.assign(dl.tidy((() => {
  	
    var neighbors = dl.conv2d(state, kernel, [ 1, 1, 1, 1 ], "same");
    var survive = dl.logicalAnd(dl.equal(state, dl.scalar(1, "float32")), dl.equal(neighbors, dl.scalar(2, "float32"))),
        born = dl.equal(neighbors, dl.scalar(3, "float32"));
    return dl.cast(dl.logicalOr(survive, born), "float32");
  
  })));
});


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)
start()


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)


(function(a, b, c) {
  /* ../../kit-lang/shell-utils/electron-kit/node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);





;
var R = require("ramda");
var { 
  create,
  extend,
  mixin,
  conditional,
  cond,
  partiallyApplyAfter
 } = require("kit/js/util");
var { 
  Interface
 } = require("kit-interface");


Array.prototype.each = (function Array$prototype$each$(f) {
  /* Array.prototype.each inc/misc.sibilant:1:0 */

  this.forEach(f);
  return this;
});
Object.prototype.each = (function Object$prototype$each$(f) {
  /* Object.prototype.each inc/misc.sibilant:4:0 */

  return Object.keys(this).forEach(((k) => {
  	
    return f(this[k], k);
  
  }));
});
var Field = Interface.define("Field", { 
  init( shape = [ 0, 0 ],state = dl.ones(shape) ){ 
    
      this.shape = shape;this.state = state;
      return this;
    
   },
  set( [ x, y ],v ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)] = v;
      
      }));
    
   },
  get( [ x, y ] ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)];
      
      }));
    
   },
  render( canvas = this.canvas,shape = this.shape,state = this.state ){ 
    
      if( !(running__QUERY) ){ 
        return false;
       };
      var ctx = canvas.getContext("2d"),
          height = shape[0],
          width = shape[1];
      return state.data().then(((d) => {
      	
        var imageData = (new ImageData(height, width));
        for (var i = 0;i < (width * height);++(i))
        {
        var j = (i * 4),
            k = i;;
        var a = d[i];;
        this._renderCell(a, j, imageData)
        }
        ;
        return ctx.putImageData(imageData, 0, 0);
      
      }));
    
   }
 });
var Colored = Field.define("Colored", { 
  init( color = this.color,shape = this.shape,state = this.state ){ 
    
      this.color = color;this.shape = shape;this.state = state;
      Field.init.call(this, shape, state);
      return this;
    
   },
  _renderCell( a,j,imageData ){ 
    
      imageData.data[j] = Math.round((this.color.r * a));
      imageData.data[(j + 1)] = Math.round((this.color.g * a));
      imageData.data[(j + 2)] = Math.round((this.color.b * a));
      return imageData.data[(j + 3)] = 255;
    
   }
 });
var colored = create(Colored);
var dl = require("deeplearn"),
    m = require("mathjs");
var canvas = document.createElement("canvas");
document.body.appendChild(canvas)
var W = 800,
    H = 800;
canvas.height = H;
canvas.width = W;
var rgb = (function rgb$(r, g, b) {
  /* rgb eval.sibilant:1:0 */

  return { 
    r,
    g,
    b
   };
});
var kernel = dl.reshape(dl.tensor2d([ [ 1, 1, 1 ], [ 1, 0, 1 ], [ 1, 1, 1 ] ]), [ 3, 3, 1, 1 ]);
var state0Tensor = dl.randomUniform([ H, W ]).greater(dl.scalar(0.5, "float32"));
var state = dl.variable(dl.cast(dl.reshape(state0Tensor, [ 1, H, W, 1 ]), "float32"));
var running__QUERY = true;
var step = (function step$() {
  /* step eval.sibilant:1:0 */

  return state.assign(dl.tidy((() => {
  	
    var neighbors = dl.conv2d(state, kernel, [ 1, 1, 1, 1 ], "same");
    var survive = dl.logicalAnd(dl.equal(state, dl.scalar(1, "float32")), dl.equal(neighbors, dl.scalar(2, "float32"))),
        born = dl.equal(neighbors, dl.scalar(3, "float32"));
    return dl.cast(dl.logicalOr(survive, born), "float32");
  
  })));
});
var black = rgb(0, 0, 0);
var red = rgb(255, 0, 0);
var gameField = colored(red, [ H, W ], state);
var start = (function start$() {
  /* start eval.sibilant:1:0 */

  return dl.nextFrame().then((() => {
  	
    if( !(running__QUERY) ){ 
      return false;
     };
    step();
    gameField.render(canvas);
    return start();
  
  }));
});
start()


(function() {
  /* src/macros.sibilant:19:8 */

  var path = require("path");
  var p = "/",
      inc = "/home/aaron/devel/apps/ants/src/";
  return module.paths = module.paths.concat(inc.split(path.sep).map((function(el) {
    /* src/macros.sibilant:25:33 */
  
    var r = path.join(p, "node_modules");
    p = path.join(p, el);
    return r;
  })), [ path.join(inc, "node_modules") ]);
}).call(this)


(function(a, b, c) {
  /* ../../kit-lang/shell-utils/electron-kit/node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);





;
var R = require("ramda");
var { 
  create,
  extend,
  mixin,
  conditional,
  cond,
  partiallyApplyAfter
 } = require("kit/js/util");
var { 
  Interface
 } = require("kit-interface");


Array.prototype.each = (function Array$prototype$each$(f) {
  /* Array.prototype.each inc/misc.sibilant:1:0 */

  this.forEach(f);
  return this;
});
Object.prototype.each = (function Object$prototype$each$(f) {
  /* Object.prototype.each inc/misc.sibilant:4:0 */

  return Object.keys(this).forEach(((k) => {
  	
    return f(this[k], k);
  
  }));
});
var Field = Interface.define("Field", { 
  init( shape = [ 0, 0 ],state = dl.ones(shape) ){ 
    
      this.shape = shape;this.state = state;
      return this;
    
   },
  set( [ x, y ],v ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)] = v;
      
      }));
    
   },
  get( [ x, y ] ){ 
    
      return this.state.data().then(((d) => {
      	
        return d[((y * this.shape[0]) + x)];
      
      }));
    
   },
  render( canvas = this.canvas,shape = this.shape,state = this.state ){ 
    
      if( !(running__QUERY) ){ 
        return false;
       };
      var ctx = canvas.getContext("2d"),
          height = shape[0],
          width = shape[1];
      return state.data().then(((d) => {
      	
        var imageData = (new ImageData(height, width));
        for (var i = 0;i < (width * height);++(i))
        {
        var j = (i * 4),
            k = i;;
        var a = d[i];;
        this._renderCell(a, j, imageData)
        }
        ;
        return ctx.putImageData(imageData, 0, 0);
      
      }));
    
   }
 });
var Colored = Field.define("Colored", { 
  init( color = this.color,shape = this.shape,state = this.state ){ 
    
      this.color = color;this.shape = shape;this.state = state;
      Field.init.call(this, shape, state);
      return this;
    
   },
  _renderCell( a,j,imageData ){ 
    
      imageData.data[j] = Math.round((this.color.r * a));
      imageData.data[(j + 1)] = Math.round((this.color.g * a));
      imageData.data[(j + 2)] = Math.round((this.color.b * a));
      return imageData.data[(j + 3)] = 255;
    
   }
 });
var colored = create(Colored);
var dl = require("deeplearn"),
    m = require("mathjs");
var canvas = document.createElement("canvas");
document.body.appendChild(canvas)
var W = 800,
    H = 800;
canvas.height = H;
canvas.width = W;
var rgb = (function rgb$(r, g, b) {
  /* rgb eval.sibilant:1:0 */

  return { 
    r,
    g,
    b
   };
});
var kernel = dl.reshape(dl.tensor2d([ [ 1, 1, 1 ], [ 1, 0, 1 ], [ 1, 1, 1 ] ]), [ 3, 3, 1, 1 ]);
var state0Tensor = dl.randomUniform([ H, W ]).greater(dl.scalar(0.5, "float32"));
var state = dl.variable(dl.cast(dl.reshape(state0Tensor, [ 1, H, W, 1 ]), "float32"));
var running__QUERY = true;
var step = (function step$() {
  /* step eval.sibilant:1:0 */

  return state.assign(dl.tidy((() => {
  	
    var neighbors = dl.conv2d(state, kernel, [ 1, 1, 1, 1 ], "same");
    var survive = dl.logicalAnd(dl.equal(state, dl.scalar(1, "float32")), dl.equal(neighbors, dl.scalar(2, "float32"))),
        born = dl.equal(neighbors, dl.scalar(3, "float32"));
    return dl.cast(dl.logicalOr(survive, born), "float32");
  
  })));
});
var black = rgb(0, 0, 0);
var red = rgb(255, 0, 0);
var gameField = colored(red, [ H, W ], state);
var start = (function start$() {
  /* start eval.sibilant:1:0 */

  return dl.nextFrame().then((() => {
  	
    if( !(running__QUERY) ){ 
      return false;
     };
    step();
    gameField.render(canvas);
    return start();
  
  }));
});
start()

