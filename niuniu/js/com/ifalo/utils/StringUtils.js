var com;!function(t){!function(t){!function(t){var n=function(){function t(){}return t.currency=function(t,n,r){if(void 0===n&&(n=3),void 0===r&&(r=-1),Math.abs(t)<Math.pow(10,n))return t.toString();var i="";if(-1==r){var o=t.toString().indexOf(".");i=o>=0?t.toString().substr(o):""}var a=t<0;return a&&(t*=-1),(a?"-":"")+t.toString().replace(new RegExp("\\d(?=(\\d{"+n+"})+"+(r>0?"\\.":"$")+")","g"),"$&,")+i},t.pad=function(t,n,r){if(void 0===r&&(r="0"),Math.abs(t)>=Math.pow(10,n))return t.toString();var i=t.toString().indexOf("."),o=i>=0?t.toString().substr(i):"",a=(t>>=0)<0;return a&&(t*=-1),(a?"-":"")+new Array(n-t.toString().length+1).join(r)+t+o},t.format=function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];for(var i=0;i<n.length;i++)t=t.replace(new RegExp("\\{"+i+"\\}","gm"),n[i]);return t},t}();t.StringUtils=n}(t.utils||(t.utils={}))}(t.ifalo||(t.ifalo={}))}(com||(com={}));