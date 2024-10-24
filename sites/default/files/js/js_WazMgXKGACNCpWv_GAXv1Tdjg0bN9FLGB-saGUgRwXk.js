+function(i,t,e){"use strict";var s={size:{min:.1,max:10,default:1},shrink:{min:.2,max:1,default:.8},regrow:{min:.2,max:1,default:.8},minRows:{min:1,max:99,default:1},maxRows:{min:1,max:99,default:2},prefixReserve:{min:0,max:.8,default:.3},prefixHide:{min:.1,max:10,default:2},alignRight:{type:"boolean",default:!1}},n=function(){var i=t.fn.jquery.split(".");return 1==i[0]&&i[1]<8}();i.rrssbConfigAll=function(i){t(".rrssb").each(function(){t(this).rrssbConfig(i)})},t.fn.rrssbConfig=function(i){if(!t(this).data("settings")||i){var e={};for(var n in s)e[n]=s[n].default,i&&("boolean"==s[n].type?e[n]=Boolean(i[n]):isNaN(parseFloat(i[n]))||(e[n]=Math.min(s[n].max,Math.max(s[n].min,i[n]))));t(this).data("settings",e),h.call(this)}};var r,a=function(){t(".rrssb").each(h)},h=function(){var i=t(this).data("orig");i||(i=function(){var i=t(".rrssb-prefix",this),e=i.length?i.clone().css({visibility:"hidden","white-space":"nowrap",display:"inline"}).appendTo(this):null;t("ul").contents().filter(function(){return this.nodeType===Node.TEXT_NODE}).remove();var s={width:0,buttons:0,height:t("li",this).innerHeight(),fontSize:parseFloat(t(this).css("font-size")),prefixWidth:e?e.innerWidth():0};return t("li",this).each(function(){s.width=Math.max(s.width,t(this).innerWidth()),s.buttons++}),t(this).data("orig",s),e&&e.remove(),s}.call(this));var e=t(this).data("settings"),s=i.width*e.size,r=i.buttons,a=t(this).innerWidth()-1,h=a<s*e.shrink?"":s;n?t("li",this).width(h):t("li",this).innerWidth(h);var o=a/e.shrink,l=i.prefixWidth*e.size;l>o*e.prefixHide?(l=0,t(".rrssb-prefix",this).css("display","none")):t(".rrssb-prefix",this).css("display","");var c=l<=a*e.prefixReserve?o-l:o,f=Math.floor(c/s);f*e.maxRows<r?(t(this).addClass("no-label"),s=i.height*e.size,f=Math.max(1,Math.floor(c/s))):t(this).removeClass("no-label");var d=e.minRows>1?Math.max(1,Math.ceil(r/(e.minRows-1))-1):r;f=Math.min(f,d),f=Math.ceil(r/Math.ceil(r/f)),d=Math.ceil(r/Math.ceil(r/d));var u=Math.floor(1e4/f)/100;t("li",this).css("max-width",u+"%");var m=s*f+l;m>o&&(m-=l,l=0);var p=f<d?e.regrow:1,g=Math.min(p,a/m),b=i.fontSize*e.size*g*.98;if(t(this).css("font-size",b+"px"),l){var x=Math.floor(1e4*l/m)/100;t(".rrssb-buttons",this).css("padding-left",x+"%"),t(".rrssb-prefix",this).css("position","absolute");var v=Math.ceil(r/f)*i.height/i.fontSize;t(".rrssb-prefix",this).css("line-height",v+"em")}else t(".rrssb-buttons",this).css("padding-left",""),t(".rrssb-prefix",this).css("position",""),t(".rrssb-prefix",this).css("line-height","");var w=e.alignRight?"padding-left":"padding-right";if(g>=.999*p){var M=Math.floor(1e4*(a-m*g*1.02)/a)/100;t(this).css(w,M+"%")}else t(this).css(w,"")},o=function(i){r&&clearTimeout(r),r=setTimeout(a,i||200)};t(document).ready(function(){t(".rrssb-buttons a.popup").click(function(e){!function(t,e,s,n){var r=void 0!==i.screenLeft?i.screenLeft:screen.left,a=void 0!==i.screenTop?i.screenTop:screen.top,h=(i.innerWidth?i.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width)/2-s/2+r,o=(i.innerHeight?i.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height)/3-n/3+a,l=i.open(t,e,"scrollbars=yes, width="+s+", height="+n+", top="+o+", left="+h);l&&l.focus&&l.focus()}(t(this).attr("href"),t(this).find(".rrssb-text").html(),580,470),e.preventDefault()}),t(i).resize(o),t(document).ready(function(){rrssbConfigAll()})})}(window,jQuery);;
/**
 * @file
 * The RRSSB Drupal Behavior to configure settings.
 */

(function ($) {
  'use strict';

  Drupal.behaviors.rrssb = {
    attach: function (context, settings) {
      for (var buttonSet in settings.rrssb) {
        $('.rrssb-bs-' + buttonSet).each(function(){
          $(this).rrssbConfig(settings.rrssb[buttonSet]);
        });
      }
    }
  };
})(jQuery);
;
(function ($) {

  "use strict";

  $.fn.mobileMenu = function (options) {
    var settings = $.extend({
      targetWrapper: '.navbar-we-mega-menu',
      accordionMenu: 'true',
      toggledClass: 'toggled',
      pageSelector: 'body'
    }, options);

    if ($(window).width() <= 991) {
      $(settings.targetWrapper).addClass('mobile-main-menu');
    }

    var toggleButton = this;

    $(window).resize(function () {
      if ($(window).width() <= 991) {
        $(settings.targetWrapper).addClass('mobile-main-menu');
      } else {
        $(settings.targetWrapper).removeClass('mobile-main-menu');
        $('body').css('overflow', '');
        $('body').css('height', '');
        $('body').css('position', '');
        $(settings.pageSelector).removeClass(settings.toggledClass);
        $(settings.pageSelector).find('.overlay').remove();
        $(settings.pageSelector).css('position', '');
        item.removeClass('open');
        item.find('ul').css('display', '');
      }
    });

    function _weMegaMenuClear() {
      var wrapper = $(settings.pageSelector);
      var overlay = wrapper.find('.overlay');
      overlay.remove();
      wrapper.css({
        'width': '',
        'position': ''
      });
      wrapper.removeClass(settings.toggledClass);
      wrapper.find('div.region-we-mega-menu nav').removeClass('we-mobile-megamenu-active');

      if (overlay.length > 0) {
        wrapper.find('.btn-close').remove();
        overlay.remove();
        $('body').css('overflow', '');
        $('body').css('height', '');
        $('body').css('position', '');
      }
    }

    this.off('click.mobileMenu');
    this.on('click.mobileMenu', function (e) {
      var targetWrapper = $(this).closest('div.region-we-mega-menu').find('nav.navbar-we-mega-menu');
      var wrapper = $(settings.pageSelector);
      if (!wrapper.hasClass(settings.toggledClass)) {
        wrapper.addClass(settings.toggledClass).css('position', 'relative');
        $(settings.targetWrapper).addClass('mobile-main-menu');
        targetWrapper.addClass('we-mobile-megamenu-active');
        if (wrapper.find('.overlay').length == 0) {
          var overlay = $('<div class="overlay"></div>');
          overlay.prependTo(wrapper);
          overlay.click(function () {
            _weMegaMenuClear();
          });
          $('body').css('overflow', 'hidden');
          $('body').css('btn-close', 'hidden');
          $('body').css('height', '100%');
          $('body').css('position', 'relative');
        }
        if (wrapper.find('.btn-close').length == 0) {
          var btnClose = $('<span class="btn-close"></span>');
          btnClose.prependTo(wrapper);

          $('.btn-close').on('click', function (e) {
            _weMegaMenuClear();
            e.preventDefault();
            return false;
          });
        }

      } else {
        _weMegaMenuClear();
      }
      e.preventDefault();
      e.stopPropagation();
    });

    if (settings.accordionMenu == 'true') {
      var targetWrapper = $(this).closest('div.region-we-mega-menu').find('nav.navbar-we-mega-menu');
      var menu = $(targetWrapper).find('ul.we-mega-menu-ul').first();
      var item = menu.find('> li[data-submenu=1]');
      var item_active = menu.find('> li[data-submenu=1].active');
      if ($(window).width() <= 991) {
        item_active.addClass('open');
        item_active.find('> ul').css('display', 'block');
      }
      item.click(function (e) {
        if ($(window).width() <= 991) {
          var $this = $(this);
          var $sub_menu_inner = $this.find('> .we-mega-menu-submenu');
          if (!$this.hasClass('open')) {
            $(item).not($this).removeClass('open');
            item.find('> .we-mega-menu-submenu').slideUp();
            $this.toggleClass('open');
            if ($this.hasClass('open')) {
              $sub_menu_inner.slideDown();
              setTimeout(function () {
                $(targetWrapper).animate({
                  scrollTop: $this.offset().top
                }, 700);
              }, 500);

            } else {
              $sub_menu_inner.slideUp();
            }
            return false;
          }
        }
      });
    }
  }

}(jQuery));;
Drupal.WeMegaMenuFrontEnd = Drupal.WeMegaMenuFrontEnd || {};
Drupal.WeMegaMenuFrontEnd.mobileThreadHold = 1024;
Drupal.WeMegaMenuFrontEnd.megamenuActivated = false;

(function ($, Drupal, drupalSettings) {
  "use strict";

  Drupal.behaviors.kMegaMenuFrontEndAction = {
    attach: function (context) {
      $(window).on('load', function() {
        Drupal.WeMegaMenuFrontEnd.init();
        Drupal.WeMegaMenuFrontEnd.mobileMenu();
      })
    }
  };

  Drupal.WeMegaMenuFrontEnd.init = function() {
    if(Drupal.WeMegaMenuFrontEnd.megamenuActivated) {
      return;
    }
    Drupal.WeMegaMenuFrontEnd.megamenuActivated = true;
  	var megamenu = $('nav.navbar-we-mega-menu');
  	if(megamenu.hasClass('click-action')) {
  	  megamenu.find('ul li.dropdown-menu > a').click(function() {
  	  	var li = $(this).closest("li");

  	  	if(li.hasClass("clicked")) {
          li.closest('ul').find('li').removeClass('clicked');
          li.closest('.we-mega-menu-row').find('li').removeClass('clicked');
  	  	  li.removeClass("clicked");
          megamenu.removeClass("has-clicked");
  	  	} else {
          li.closest('ul').find('li').removeClass('clicked');
          li.closest('.we-mega-menu-row').find('li').removeClass('clicked');
	  	    li.closest("ul").children("li.dropdown-menu").removeClass("clicked");
  		    li.addClass("clicked");
          megamenu.addClass("has-clicked");
  	  	}
        if($(window).outerWidth() > Drupal.WeMegaMenuFrontEnd.mobileThreadHold) {
          return false;
        }
  	  });
  	  megamenu.find('ul li.dropdown-menu > a').dblclick(function() {
        if($(window).outerWidth() > Drupal.WeMegaMenuFrontEnd.mobileThreadHold) {
    	  	window.location.href = $(this).attr("href");
        }
  	  });
      megamenu.click(function(event) {
        event.stopPropagation();
      })
      $("body").click(function() {
        megamenu.find("ul li.dropdown-menu.clicked").removeClass('clicked');
        megamenu.removeClass("has-clicked");
      });
  	}
  };

  Drupal.WeMegaMenuFrontEnd.mobileMenu = function() {
    $('div.region-we-mega-menu a.navbar-toggle').mobileMenu();
    
    // $('div.region-we-mega-menu a.navbar-toggle').mobileMenu({
      // pageSelector: 'body',
      // targetWrapper: '.navbar-we-mega-menu'
    // });

    // $('#menu-toggle-wemegamenu').mobileMenu();
  };
})(jQuery, Drupal, drupalSettings);;
