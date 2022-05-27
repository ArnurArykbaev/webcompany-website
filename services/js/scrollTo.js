

/*scrollTo start*/
;(function() {
    var scroll = function(target) {
        var targetTop = target.getBoundingClientRect().top;
        var scrollTop = window.pageYOffset;
        var targetOffsetTop = targetTop + scrollTop;

        window.scrollTo(0, targetOffsetTop);
    }

    myLib.body.addEventListener('click', function(e) {
        var target = e.target;
        var scrollToItemClass = myLib.closestAttr(target, 'data-scroll-to');

        if (scrollToItemClass === null) {
            return;
        }

        e.preventDefault();
        var scrollToItem = document.querySelector('.' + scrollToItemClass);

        if (scrollToItem) {
            scroll(scrollToItem);
        }
    });
})();
/*scrollTo end*/
/*

/*Libs     */

;(function() {
    var canUseWebP = function() {
        var elem = document.createElement('canvas');

        if (!!(elem.getContext && elem.getContext('2d'))) {
            // was able or not to get WebP representation
            return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
        }

        // very old browser like IE 8, canvas not supported
        return false;
    };

    var isWebpSupported = canUseWebP();

    if (isWebpSupported === false) {
        var lazyItems = document.querySelectorAll('[data-src-replace-webp]');

        for (var i = 0; i < lazyItems.length; i += 1) {
            var item = lazyItems[i];

            var dataSrcReplaceWebp = item.getAttribute('data-src-replace-webp');
            if (dataSrcReplaceWebp !== null) {
                item.setAttribute('data-src', dataSrcReplaceWebp);
            }
        }
    }

      
    var lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy"
    });
})();

/* Libs */





/*myLib  start*/
;(function() {
    window.myLib = {};

    window.myLib.body = document.querySelector('body');

    
    window.myLib.closestAttr = function(item, attr) {
        var node = item;

        while(node) {
            var attrValue = node.getAttribute(attr);
            if (attrValue) {
                return attrValue; 
            }

            node = node.parentElement;
        }

        return null;
    };

    window.myLib.closestItemByClass = function(item, className) {
        var node = item;

        while(node) {
            if (node.classList.contains(className)) {
                return node;
            }

            node = node.parentElement;
        }

        return null;
    };

    window.myLib.toggleScroll = function() {
        myLib.body.classList.toggle('no-scroll');
    };

})();
/*myLib  end*/

/*popup start*/
;(function() {
    var showPopup = function(target) {
      target.classList.add('is-active');
    };
  
    var closePopup = function(target) {
      target.classList.remove('is-active');
    };
  
    myLib.body.addEventListener('click', function(e) {
      var target = e.target;
      var popupClass = myLib.closestAttr(target, 'data-popup');
  
      if (popupClass === null) {
        return;
      }
  
      e.preventDefault();
      var popup = document.querySelector('.' + popupClass);
  
      if (popup) {
        showPopup(popup);
        myLib.toggleScroll();
      }
    });
  
    myLib.body.addEventListener('click', function(e) {
      var target = e.target;
  
      if (target.classList.contains('popup-close') ||
          target.classList.contains('popup_inner')) {
            var popup = myLib.closestItemByClass(target, 'popup');
  
            closePopup(popup);
            myLib.toggleScroll();
      }
    });
  
    myLib.body.addEventListener('keydown', function(e) {
      if (e.keyCode !== 27) {
        return;
      }
  
      var popup = document.querySelector('.popup.is-active');
  
      if (popup) {
        closePopup(popup);
        myLib.toggleScroll();
      }
    });
  })();
/*popup end*/


/*      start*/

/*      end*/



;(function() {
    var body = document.querySelector('body');

    var closestAttr = function(item,attr) {
        var node = item;
        while(node) {
            var attrValue = node.getAttribute(attr);
            if (attrValue) {
                return attrValue;
            }

            node = node.parentElement;
        }

        return null;
    };

    var scroll = function(target) {
        var targetTop = target.getBoundingClientRect().top;
        var scrollTop = window.pageYOffset;
        var targetOffsetTop = targetTop + scrollTop

        window.scrollTo(0, targetOffsetTop)
    }

    body.addEventListener('click', function(e) {
        var target = e.target;
        var scrollToItemClass = closestAttr(target, 'data-scroll-to');

        if (scrollToItemClass === null) {
            return;
        }

        e.preventDefault();
        var scrollToItem = document.querySelector('.' + scrollToItemClass);

        if(scrollToItem) {
            scroll(scrollToItem)
        }

        console.log(scrollToItemClass);
    });
})();