

(function(a, b, c) {
  /* node_modules/kit/inc/core/defs.sibilant:53:9 */

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
document.body.appendChild(canvas);
var W = 800,
    H = 800;
canvas.height = H;
canvas.width = W;
var rgb = (function rgb$(r, g, b) {
  /* rgb src/game-of-life.sibilant:33:0 */

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
  /* step src/game-of-life.sibilant:48:0 */

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
  /* start src/game-of-life.sibilant:65:0 */

  return dl.nextFrame().then((() => {
  	
    if( !(running__QUERY) ){ 
      return false;
     };
    step();
    gameField.render(canvas);
    return start();
  
  }));
});
start();