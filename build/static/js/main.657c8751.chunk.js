/*! For license information please see main.657c8751.chunk.js.LICENSE.txt */
(this.webpackJsonpvideo=this.webpackJsonpvideo||[]).push([[0],{115:function(e,t,n){e.exports=n(1205)},1196:function(e,t,n){},1202:function(e,t,n){},1205:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(15),i=n.n(o),c=n(39),l=n(40),s=n(43),u=n(42),d=n(107),h=n(88),f=n(89),m=n.n(f),g=n(90),v=n.n(g),p=n(1227),y=n(1223),w=n(1224),b=n(1225),E=n(96),S=n.n(E),x=n(97),k=n.n(x),C=n(99),O=n.n(C),j=n(100),M=n.n(j),L=n(101),A=n.n(L),T=n(102),D=n.n(T),N=n(98),V=n.n(N),U=n(103),F=n.n(U),P=n(1226),_=(n(1194),n(1228)),W=n(46);n(1195),n(1196);function G(){G=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(M){l=function(e,t,n){return e[t]=n}}function s(e,t,n,a){var o=t&&t.prototype instanceof h?t:h,i=Object.create(o.prototype),c=new C(a||[]);return r(i,"_invoke",{value:E(e,n,c)}),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(M){return{type:"throw",arg:M}}}e.wrap=s;var d={};function h(){}function f(){}function m(){}var g={};l(g,o,(function(){return this}));var v=Object.getPrototypeOf,p=v&&v(v(O([])));p&&p!==t&&n.call(p,o)&&(g=p);var y=m.prototype=h.prototype=Object.create(g);function w(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var a;r(this,"_invoke",{value:function(r,o){function i(){return new t((function(a,i){!function r(a,o,i,c){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,d=s.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(d).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,c)}))}c(l.arg)}(r,o,a,i)}))}return a=a?a.then(i,i):i()}})}function E(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return j()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=S(i,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function S(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,S(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var a=u(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,d;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function O(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:j}}function j(){return{value:void 0,done:!0}}return f.prototype=m,r(y,"constructor",{value:m,configurable:!0}),r(m,"constructor",{value:f,configurable:!0}),f.displayName=l(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},w(b.prototype),l(b.prototype,i,(function(){return this})),e.AsyncIterator=b,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new b(s(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},w(y),l(y,c,"Generator"),l(y,o,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=O,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),k(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;k(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:O(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}var R={},I={iceServers:[{urls:"stun:stun.l.google.com:19302"}]},J=null,B=null,H=0,z=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).getPermissions=Object(h.a)(G().mark((function e(){return G().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getUserMedia({video:!0}).then((function(){return r.videoAvailable=!0})).catch((function(){return r.videoAvailable=!1}));case 3:return e.next=5,navigator.mediaDevices.getUserMedia({audio:!0}).then((function(){return r.audioAvailable=!0})).catch((function(){return r.audioAvailable=!1}));case 5:navigator.mediaDevices.getDisplayMedia?r.setState({screenAvailable:!0}):r.setState({screenAvailable:!1}),(r.videoAvailable||r.audioAvailable)&&navigator.mediaDevices.getUserMedia({video:r.videoAvailable,audio:r.audioAvailable}).then((function(e){window.localStream=e,r.localVideoref.current.srcObject=e})).then((function(e){})).catch((function(e){return console.log(e)})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),r.getMedia=function(){r.setState({video:r.videoAvailable,audio:r.audioAvailable},(function(){r.getUserMedia(),r.connectToSocketServer()}))},r.getUserMedia=function(){if(r.state.video&&r.videoAvailable||r.state.audio&&r.audioAvailable)navigator.mediaDevices.getUserMedia({video:r.state.video,audio:r.state.audio}).then(r.getUserMediaSuccess).then((function(e){})).catch((function(e){return console.log(e)}));else try{r.localVideoref.current.srcObject.getTracks().forEach((function(e){return e.stop()}))}catch(e){}},r.getUserMediaSuccess=function(e){try{window.localStream.getTracks().forEach((function(e){return e.stop()}))}catch(a){console.log(a)}window.localStream=e,r.localVideoref.current.srcObject=e;var t=function(e){if(e===B)return"continue";R[e].addStream(window.localStream),R[e].createOffer().then((function(t){R[e].setLocalDescription(t).then((function(){J.emit("signal",e,JSON.stringify({sdp:R[e].localDescription}))})).catch((function(e){return console.log(e)}))}))};for(var n in R)t(n);e.getTracks().forEach((function(e){return e.onended=function(){r.setState({video:!1,audio:!1},(function(){try{r.localVideoref.current.srcObject.getTracks().forEach((function(e){return e.stop()}))}catch(a){console.log(a)}window.localStream=function(){var e;return new MediaStream([(e=r).black.apply(e,arguments),r.silence()])}(),r.localVideoref.current.srcObject=window.localStream;var e=function(e){R[e].addStream(window.localStream),R[e].createOffer().then((function(t){R[e].setLocalDescription(t).then((function(){J.emit("signal",e,JSON.stringify({sdp:R[e].localDescription}))})).catch((function(e){return console.log(e)}))}))};for(var t in R)e(t)}))}}))},r.getDislayMedia=function(){r.state.screen&&navigator.mediaDevices.getDisplayMedia&&navigator.mediaDevices.getDisplayMedia({video:!0,audio:!0}).then(r.getDislayMediaSuccess).then((function(e){})).catch((function(e){return console.log(e)}))},r.getDislayMediaSuccess=function(e){try{window.localStream.getTracks().forEach((function(e){return e.stop()}))}catch(a){console.log(a)}window.localStream=e,r.localVideoref.current.srcObject=e;var t=function(e){if(e===B)return"continue";R[e].addStream(window.localStream),R[e].createOffer().then((function(t){R[e].setLocalDescription(t).then((function(){J.emit("signal",e,JSON.stringify({sdp:R[e].localDescription}))})).catch((function(e){return console.log(e)}))}))};for(var n in R)t(n);e.getTracks().forEach((function(e){return e.onended=function(){r.setState({screen:!1},(function(){try{r.localVideoref.current.srcObject.getTracks().forEach((function(e){return e.stop()}))}catch(a){console.log(a)}window.localStream=function(){var e;return new MediaStream([(e=r).black.apply(e,arguments),r.silence()])}(),r.localVideoref.current.srcObject=window.localStream,r.getUserMedia()}))}}))},r.gotMessageFromServer=function(e,t){var n=JSON.parse(t);e!==B&&(n.sdp&&R[e].setRemoteDescription(new RTCSessionDescription(n.sdp)).then((function(){"offer"===n.sdp.type&&R[e].createAnswer().then((function(t){R[e].setLocalDescription(t).then((function(){J.emit("signal",e,JSON.stringify({sdp:R[e].localDescription}))})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)})),n.ice&&R[e].addIceCandidate(new RTCIceCandidate(n.ice)).catch((function(e){return console.log(e)})))},r.changeCssVideos=function(e){var t="30%";30*e.offsetWidth/100<300&&(t="300px");var n=String(100/H)+"%",r="";0===H||1===H?(r="100%",n="100%"):2===H?(r="45%",n="100%"):3===H||4===H?(r="35%",n="50%"):r=String(100/H)+"%";for(var a=e.querySelectorAll("video"),o=0;o<a.length;++o)a[o].style.minWidth=t,a[o].style.minHeight="40%",a[o].style.setProperty("width",r),a[o].style.setProperty("height",n);return{minWidth:t,minHeight:"40%",width:r,height:n}},r.connectToSocketServer=function(){(J=m.a.connect("https://video.sebastienbiollo.com",{secure:!0})).on("signal",r.gotMessageFromServer),J.on("connect",(function(){J.emit("join-call",window.location.href),B=J.id,J.on("chat-message",r.addMessage),J.on("user-left",(function(e){var t=document.querySelector('[data-socket="'.concat(e,'"]'));if(null!==t){H--,t.parentNode.removeChild(t);var n=document.getElementById("main");r.changeCssVideos(n)}})),J.on("user-joined",(function(e,t){if(t.forEach((function(e){if(R[e]=new RTCPeerConnection(I),R[e].onicecandidate=function(t){null!=t.candidate&&J.emit("signal",e,JSON.stringify({ice:t.candidate}))},R[e].onaddstream=function(n){var a=document.querySelector('[data-socket="'.concat(e,'"]'));if(null!==a)a.srcObject=n.stream;else{H=t.length;var o=document.getElementById("main"),i=r.changeCssVideos(o),c=document.createElement("video"),l={minWidth:i.minWidth,minHeight:i.minHeight,maxHeight:"100%",margin:"10px",borderStyle:"solid",borderColor:"#bdbdbd",objectFit:"fill"};for(var s in l)c.style[s]=l[s];c.style.setProperty("width",i.width),c.style.setProperty("height",i.height),c.setAttribute("data-socket",e),c.srcObject=n.stream,c.autoplay=!0,c.playsinline=!0,o.appendChild(c)}},void 0!==window.localStream&&null!==window.localStream)R[e].addStream(window.localStream);else{window.localStream=function(){var e;return new MediaStream([(e=r).black.apply(e,arguments),r.silence()])}(),R[e].addStream(window.localStream)}})),e===B){var n=function(e){if(e===B)return"continue";try{R[e].addStream(window.localStream)}catch(t){}R[e].createOffer().then((function(t){R[e].setLocalDescription(t).then((function(){J.emit("signal",e,JSON.stringify({sdp:R[e].localDescription}))})).catch((function(e){return console.log(e)}))}))};for(var a in R)n(a)}}))}))},r.silence=function(){var e=new AudioContext,t=e.createOscillator(),n=t.connect(e.createMediaStreamDestination());return t.start(),e.resume(),Object.assign(n.stream.getAudioTracks()[0],{enabled:!1})},r.black=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width,n=void 0===t?640:t,r=e.height,a=void 0===r?480:r,o=Object.assign(document.createElement("canvas"),{width:n,height:a});o.getContext("2d").fillRect(0,0,n,a);var i=o.captureStream();return Object.assign(i.getVideoTracks()[0],{enabled:!1})},r.handleVideo=function(){return r.setState({video:!r.state.video},(function(){return r.getUserMedia()}))},r.handleAudio=function(){return r.setState({audio:!r.state.audio},(function(){return r.getUserMedia()}))},r.handleScreen=function(){return r.setState({screen:!r.state.screen},(function(){return r.getDislayMedia()}))},r.handleEndCall=function(){try{r.localVideoref.current.srcObject.getTracks().forEach((function(e){return e.stop()}))}catch(e){}window.location.href="/"},r.openChat=function(){return r.setState({showModal:!0,newmessages:0})},r.closeChat=function(){return r.setState({showModal:!1})},r.handleMessage=function(e){return r.setState({message:e.target.value})},r.addMessage=function(e,t,n){r.setState((function(n){return{messages:[].concat(Object(d.a)(n.messages),[{sender:t,data:e}])}})),n!==B&&r.setState({newmessages:r.state.newmessages+1})},r.handleUsername=function(e){return r.setState({username:e.target.value})},r.sendMessage=function(){J.emit("chat-message",r.state.message,r.state.username),r.setState({message:"",sender:r.state.username})},r.copyUrl=function(){var e=window.location.href;if(navigator.clipboard)navigator.clipboard.writeText(e).then((function(){P.b.success("Link copied to clipboard!")}),(function(){P.b.error("Failed to copy")}));else{var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy"),P.b.success("Link copied to clipboard!")}catch(n){P.b.error("Failed to copy")}document.body.removeChild(t)}},r.connect=function(){return r.setState({askForUsername:!1},(function(){return r.getMedia()}))},r.isChrome=function(){var e=(navigator&&(navigator.userAgent||"")).toLowerCase(),t=(navigator&&(navigator.vendor||"")).toLowerCase();return null!==(/google inc/.test(t)?e.match(/(?:chrome|crios)\/(\d+)/):null)},r.localVideoref=a.a.createRef(),r.videoAvailable=!1,r.audioAvailable=!1,r.state={video:!1,audio:!1,screen:!1,showModal:!1,screenAvailable:!1,messages:[],message:"",newmessages:0,askForUsername:!0,username:v.a.internet.userName()},R={},r.getPermissions(),r}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return!1===this.isChrome()?a.a.createElement("div",{style:{background:"white",width:"30%",height:"auto",padding:"20px",minWidth:"400px",textAlign:"center",margin:"auto",marginTop:"50px",justifyContent:"center"}},a.a.createElement("h1",null,"Sorry, this works only with Google Chrome")):a.a.createElement("div",null,!0===this.state.askForUsername?a.a.createElement("div",null,a.a.createElement("div",{style:{background:"white",width:"30%",height:"auto",padding:"20px",minWidth:"400px",textAlign:"center",margin:"auto",marginTop:"50px",justifyContent:"center"}},a.a.createElement("p",{style:{margin:0,fontWeight:"bold",paddingRight:"50px"}},"Set your username"),a.a.createElement(p.a,{placeholder:"Username",value:this.state.username,onChange:function(t){return e.handleUsername(t)}}),a.a.createElement(y.a,{variant:"contained",color:"primary",onClick:this.connect,style:{margin:"20px"}},"Connect")),a.a.createElement("div",{style:{justifyContent:"center",textAlign:"center",paddingTop:"40px"}},a.a.createElement("video",{id:"my-video",ref:this.localVideoref,autoPlay:!0,muted:!0,style:{borderStyle:"solid",borderColor:"#bdbdbd",objectFit:"fill",width:"60%",height:"30%"}}))):a.a.createElement("div",null,a.a.createElement("div",{className:"btn-down",style:{backgroundColor:"whitesmoke",color:"whitesmoke",textAlign:"center"}},a.a.createElement(w.a,{style:{color:"#424242"},onClick:this.handleVideo},!0===this.state.video?a.a.createElement(S.a,null):a.a.createElement(k.a,null)),a.a.createElement(w.a,{style:{color:"#f44336"},onClick:this.handleEndCall},a.a.createElement(V.a,null)),a.a.createElement(w.a,{style:{color:"#424242"},onClick:this.handleAudio},!0===this.state.audio?a.a.createElement(O.a,null):a.a.createElement(M.a,null)),!0===this.state.screenAvailable?a.a.createElement(w.a,{style:{color:"#424242"},onClick:this.handleScreen},!0===this.state.screen?a.a.createElement(A.a,null):a.a.createElement(D.a,null)):null,a.a.createElement(b.a,{badgeContent:this.state.newmessages,max:999,color:"secondary",onClick:this.openChat},a.a.createElement(w.a,{style:{color:"#424242"},onClick:this.openChat},a.a.createElement(F.a,null)))),a.a.createElement(W.a,{show:this.state.showModal,onHide:this.closeChat,style:{zIndex:"999999"}},a.a.createElement(W.a.Header,{closeButton:!0},a.a.createElement(W.a.Title,null,"Chat Room")),a.a.createElement(W.a.Body,{style:{overflow:"auto",overflowY:"auto",height:"400px",textAlign:"left"}},this.state.messages.length>0?this.state.messages.map((function(e,t){return a.a.createElement("div",{key:t,style:{textAlign:"left"}},a.a.createElement("p",{style:{wordBreak:"break-all"}},a.a.createElement("b",null,e.sender),": ",e.data))})):a.a.createElement("p",null,"No message yet")),a.a.createElement(W.a.Footer,{className:"div-send-msg"},a.a.createElement(p.a,{placeholder:"Message",value:this.state.message,onChange:function(t){return e.handleMessage(t)}}),a.a.createElement(y.a,{variant:"contained",color:"primary",onClick:this.sendMessage},"Send"))),a.a.createElement("div",{className:"container"},a.a.createElement("div",{style:{paddingTop:"20px"}},a.a.createElement(p.a,{value:window.location.href,disable:"true"}),a.a.createElement(y.a,{style:{backgroundColor:"#3f51b5",color:"whitesmoke",marginLeft:"20px",marginTop:"10px",width:"120px",fontSize:"10px"},onClick:this.copyUrl},"Copy invite link")),a.a.createElement(_.a,{id:"main",className:"flex-container",style:{margin:0,padding:0}},a.a.createElement("video",{id:"my-video",ref:this.localVideoref,autoPlay:!0,muted:!0,style:{borderStyle:"solid",borderColor:"#bdbdbd",margin:"10px",objectFit:"fill",width:"100%",height:"100%"}})))))}}]),n}(r.Component),q=n(104),Y=n.n(q),$=(n(1202),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).handleChange=function(e){return r.setState({url:e.target.value})},r.join=function(){if(""!==r.state.url){var e=r.state.url.split("/");window.location.href="/".concat(e[e.length-1])}else{e=Math.random().toString(36).substring(2,7);window.location.href="/".concat(e)}},r.state={url:""},r}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"container2"},a.a.createElement("div",{style:{fontSize:"14px",background:"white",width:"10%",textAlign:"center",margin:"auto",marginBottom:"10px"}},"Source code:",a.a.createElement(w.a,{style:{color:"black"},onClick:function(){return window.location.href="https://github.com/0x5eba/Video-Meeting"}},a.a.createElement(Y.a,null))),a.a.createElement("div",null,a.a.createElement("h1",{style:{fontSize:"45px"}},"Video Meeting"),a.a.createElement("p",{style:{fontWeight:"200"}},"Video conference website that lets you stay in touch with all your friends.")),a.a.createElement("div",{style:{background:"white",width:"30%",height:"auto",padding:"20px",minWidth:"400px",textAlign:"center",margin:"auto",marginTop:"100px"}},a.a.createElement("p",{style:{margin:0,fontWeight:"bold",paddingRight:"50px"}},"Start or join a meeting"),a.a.createElement(p.a,{placeholder:"URL",onChange:function(t){return e.handleChange(t)}}),a.a.createElement(y.a,{variant:"contained",color:"primary",onClick:this.join,style:{margin:"20px"}},"Go")))}}]),n}(r.Component)),K=n(105),Q=n(13),X=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(K.a,null,a.a.createElement(Q.c,null,a.a.createElement(Q.a,{path:"/",exact:!0,component:$}),a.a.createElement(Q.a,{path:"/:url",component:z}))))}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},145:function(e,t){}},[[115,1,2]]]);
//# sourceMappingURL=main.657c8751.chunk.js.map