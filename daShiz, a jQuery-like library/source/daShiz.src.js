(function (window, document, undefined) {
    'use strict';
	
    (function () {

        var daShiz = function (selector) {
			return new DaShiz(selector);	// Get an instance without using new		
		},
			
    	DaShiz = function (selector) {
            
			// Constructor
			
            this.name = 'daShiz';
            this.el = [];
            this.el.length = 0;
			var nodes = [];
			
			if(typeof selector === 'string'){
				nodes = toArray(document.querySelectorAll(selector));
			} else if (typeof selector === 'object' && selector.name !== 'daShiz'){
				nodes = toArray(selector);
			} else if (selector.name === 'daShiz'){
				nodes = selector.el;
			}
            
            for (var i = 0; i< nodes.length; i++) {
                this.el[i] = nodes[i];
            }
            this.el.length = nodes.length;
            return this;
        };

        daShiz.fn = DaShiz.prototype = {  // Exposing the prototype so it can be extended 
            
            // Library public API

        };
		
		// Private functions

        return (window.daShiz = window.da$ = daShiz); // exposing the Library 

    })();

})(window, document);
