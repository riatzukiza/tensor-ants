
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

