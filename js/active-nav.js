/**
 * @license
 * lodash 3.8.0 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash compat exports="global" include="throttle" --production -o lodash.compat.js`
 */
;(function(){function t(){}function e(t,e,o){function i(){var n=e-(h()-g);0>=n||n>e?(f&&clearTimeout(f),n=m,f=y=m=r,n&&(d=h(),p=t.apply(s,c),y||f||(c=s=null))):y=setTimeout(i,n)}function u(){y&&clearTimeout(y),f=y=m=r,(w||b!==e)&&(d=h(),p=t.apply(s,c),y||f||(c=s=null))}function a(){if(c=arguments,g=h(),s=this,m=w&&(y||!T),false===b)var n=T&&!y;else{f||T||(d=g);var o=b-(g-d),r=0>=o||o>b;r?(f&&(f=clearTimeout(f)),d=g,p=t.apply(s,c)):f||(f=setTimeout(u,o))}return r&&y?y=clearTimeout(y):y||e===b||(y=setTimeout(i,e)),
n&&(r=true,p=t.apply(s,c)),!r||y||f||(c=s=null),p}var c,f,p,g,s,y,m,d=0,b=false,w=true;if(typeof t!="function")throw new TypeError(l);if(e=0>e?0:+e||0,true===o)var T=true,w=false;else n(o)&&(T=o.leading,b="maxWait"in o&&x(+o.maxWait||0,e),w="trailing"in o?o.trailing:w);return a.cancel=function(){y&&clearTimeout(y),f&&clearTimeout(f),f=y=m=r},a}function n(t){var e=typeof t;return"function"==e||!!t&&"object"==e}function o(t){return null==t?false:w.call(t)==u?T.test(b.call(t)):!!t&&typeof t=="object"&&(d(t)?T:f).test(t);

}function i(t){return typeof t!="string"&&(t=null==t?"":t+""),t&&c.test(t)?t.replace(a,"\\$&"):t}var r,l="Expected a function",u="[object Function]",a=/[.*+?^${}()|[\]\/\\]/g,c=RegExp(a.source),f=/^\[object .+?Constructor\]$/,p={leading:false,maxWait:0,trailing:false},g={"function":true,object:true},s=g[typeof module]&&module&&!module.nodeType&&module,y=g[typeof self]&&self&&self.Object&&self,m=g[typeof window]&&window&&window.Object&&window,g=g[typeof exports]&&exports&&!exports.nodeType&&exports&&s&&typeof global=="object"&&global&&global.Object&&global||m!==(this&&this.window)&&m||y||this,d=function(){
try{Object({toString:0}+"")}catch(t){return function(){return false}}return function(t){return typeof t.toString!="function"&&typeof(t+"")=="string"}}(),b=Function.prototype.toString,w=Object.prototype.toString,T=RegExp("^"+i(w).replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),x=Math.max,j=o(j=Date.now)&&j,h=j||function(){return(new Date).getTime()};t.debounce=e,t.throttle=function(t,o,i){var r=true,u=true;if(typeof t!="function")throw new TypeError(l);return false===i?r=false:n(i)&&(r="leading"in i?!!i.leading:r,
u="trailing"in i?!!i.trailing:u),p.leading=r,p.maxWait=+o,p.trailing=u,e(t,o,p)},t.escapeRegExp=i,t.isNative=o,t.isObject=n,t.now=h,t.VERSION="3.8.0",g._=t}).call(this);

// ---------------------------------------------------------------------------------------------------------------------

let mainNavLinks = document.querySelectorAll(".js-nav-link");
let scrollEl = document.querySelector('.js-scroll')

const handleScroll = _.throttle((event) => {
	let scrollOffset = scrollEl.scrollTop;

	mainNavLinks.forEach(link => {
		let section = document.querySelector(link.hash)
		let windowRelativeTopPos = section.offsetTop - scrollOffset

		if (
			section.offsetTop <= scrollOffset && 
			section.offsetTop + section.nextElementSibling.offsetHeight > scrollOffset
		) {
			link.classList.add("is-active");
		} else {
			link.classList.remove("is-active");
		}
	});

	// handle scrolling to very bottom of page to highlight final link
	if (scrollEl.scrollHeight - scrollEl.scrollTop === scrollEl.clientHeight) {
		mainNavLinks.forEach(link => {
			link.classList.remove('is-active')
		})
		mainNavLinks[mainNavLinks.length - 1].classList.add('is-active')
	} else {
		mainNavLinks[mainNavLinks.length - 1].classList.remove('is-active')
	}
}, 100);

scrollEl.addEventListener("scroll", handleScroll)