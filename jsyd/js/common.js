function screenFit(baseWidth){
  var root = document.documentElement; //<html>
  var w = root.clientWidth;  //get client width
  w = w > 640 ? 640 : w < 320 ? 320 : w; //max(640px)& min(320px)
  var fz = w / baseWidth * 100; //  1rem = 100px
  root.style.fontSize = fz + "px"; //html font-size
  }
screenFit(750);

/* querySelectorAll封装 */
function $$(selector, parent) {
    parent = parent || document;
    return parent.querySelectorAll(selector);
}

/* getParent */
function getParent(elem, selector){
    var tmp = $$(selector),
        p = elem.parentNode;
    if(tmp.length == 0 || p == null) return null;
    while ([].indexOf.call(tmp,p)<0 && p != document) {
        p = p.parentNode;
    }
    return p == document ? null : p;

}

/*获取变量类型*/
function typeOfVar(v){
  return(Object.prototype.toString.call(v).replace(/\[object (\S*)\]/,"$1").toLowerCase() );
}

/*each*/
function each(arr,fn){
  var type = typeOfVar(arr);
  if(type!="nodelist" && type != "array" && type != "htmlcollection") arr = [arr];
  for(var i=0,len=arr.length;i<len;i++) fn.apply(arr[i],[arr[i],i,arr]);
}

// popShow & hide
var pop = {
    show : function(popboxId) {
        var mask = $$(".mask")[0],
            popbox = $$("#"+popboxId)[0];
        mask.style.display = popbox.style.display = "block";
    },
    hide : function() {
        var mask = $$(".mask")[0],
            popbox = $$(".popbox");
        mask.style.display = "none";
        each(popbox, function(){
            this.style.display = "none";
        })
    }
}





	






	