var t=window.requestIdleCallback||function(t){var i=Date.now();return setTimeout(function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-i))}});},1)},i=function(){this.name="@barba/prefetch",this.version="2.0.1-next.97+33c213b",this.toPrefetch=new Set;};i.prototype.install=function(t,i){void 0===i&&(i={});var n=i.root;void 0===n&&(n=document.body);var e=i.timeout;void 0===e&&(e=2e3),this.barba=t,this.logger=new t.Logger(this.name),this.root=n,this.timeout=e;},i.prototype.init=function(){var t=this;this.barba.prefetchIgnore?this.logger.warn("barba.prefetchIgnore is enabled"):this.barba.cacheIgnore?this.logger.warn("barba.cacheIgnore is enabled"):(this.observer=new IntersectionObserver(function(i){i.forEach(function(i){if(i.isIntersecting){var n=i.target,e=t.barba.dom.getUrl(n);t.toPrefetch.has(e)&&(t.observer.unobserve(n),t.barba.cache.has(e)||t.barba.cache.set(e,t.barba.request(e,t.barba.timeout,t.barba.t.bind(t,"prefetch"))));}});}),this.observe(),this.barba.hooks.after(this.observe,this));},i.prototype.observe=function(){var i=this;t(function(){i.root.querySelectorAll("a").forEach(function(t){var n=t,e=i.barba.dom.getUrl(n);i.barba.cache.has(e)||i.barba.prevent.checkUrl(e)||i.barba.prevent.checkLink(n,{},n.href)||(i.observer.observe(t),i.toPrefetch.add(e));});},{timeout:this.timeout});};var barbaPrefetch = new i;

export default barbaPrefetch;
//# sourceMappingURL=@barba--prefetch.js.map
