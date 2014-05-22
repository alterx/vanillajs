
(function (window, document, da$, undefined) {
    'use strict';

    (function () {
        var plugin = {
            parent: function () {
                var result = [];
                for (var i = 0; i < this.el.length; i++) {
                    result.push(this.el[i].parentNode);
                }                
                this.el = result;                
                return this;
            }, 
            
            next: function () {
                var result = [];
                for (var i = 0; i < this.el.length; i++) {
                    result.push(this.el[i].nextElementSibling);
                }
                this.el = result;
                return this;
            },
            
            prev: function () {
                var result = [];
                for (var i = 0; i < this.el.length; i++) {
                    result.push(this.el[i].previousElementSibling);
                }
                this.el = result;
                return this;
            }
        };
        
        da$.fn.extend(da$.fn, plugin);
        
    })();   

})(window, document, daShiz);
