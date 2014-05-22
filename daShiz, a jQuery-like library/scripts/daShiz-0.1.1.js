(function (window, document, undefined) {
    'use strict';
	
    (function () {

        var daShiz = function (selector) {
			return new DaShiz(selector);
		},
    	DaShiz = function (selector) {
			
            this.name = 'daShiz';
            this.el = [];
            this.el.length = 0;
			var nodes = [];
			
			if(typeof selector === 'string'){
				nodes = toArray(document.querySelectorAll(selector));
			} else if (typeof selector === 'object' && selector.name !== 'daShiz'){
				nodes = toArray(selector);
			} else if (typeof selector === 'object' && selector.name === 'daShiz'){
				nodes = selector.el;
			}
            
            for (var i = 0; i< nodes.length; i++) {
                this.el[i] = nodes[i];
            }
            this.el.length = nodes.length;
            return this;
        };

        daShiz.fn = DaShiz.prototype = {
            
            hide: function () {
                for (var i = 0; i < this.el.length; i++) {
                    this.el[i].style.display = 'none';
                }
                return this;
            },
            
            show: function () {
                for (var i = 0; i < this.el.length; i++) {
                    this.el[i].style.display = 'block';
                }
                return this;                
            },
            
            remove: function () {
                for (var i = 0; i < this.el.length; i++) {
                    this.el[i].parentNode.removeChild(this.el[i]);
                }
                return this;
            },
            
            get: function (index){
                  return (typeof index !== 'undefined') ? this.el[index] : this.el;
            },
            
            extend: extend

        };
        
        function toArray (pseudoArray) {
            if(typeof pseudoArray === 'object' && pseudoArray.hasOwnProperty('length')){
                return Array.prototype.slice.call(pseudoArray);
            } else if(!pseudoArray.hasOwnProperty('length')) {
				var ret = [];
				ret.push(pseudoArray);
				return ret;
			}            
        }
        
        function extend (out) {
			out = out || {};

			for (var i = 1; i < arguments.length; i++) {
				if (!arguments[i])
				    continue;

				for (var key in arguments[i]) {
				    if (arguments[i].hasOwnProperty(key))
				          out[key] = arguments[i][key];
				}
			 }        
			 return out;
		 }

        return (window.daShiz = window.da$ = daShiz);

    })();

})(window, document);

