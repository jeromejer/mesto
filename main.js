(()=>{"use strict";var e={459:(e,t,n)=>{e.exports=n.p+"images/arkhyz.156d07d84524cc942d68.jpeg"},2:(e,t,n)=>{e.exports=n.p+"images/baikal.99b6e21b94798ec54759.jpeg"},886:(e,t,n)=>{e.exports=n.p+"images/chelyabinsk-oblast.167b0005add1694393db.jpeg"},595:(e,t,n)=>{e.exports=n.p+"images/ivanovo.50bb648b47735ffba9eb.jpeg"},370:(e,t,n)=>{e.exports=n.p+"images/kamchatka.e2daa86be296ebffd99c.jpeg"},920:(e,t,n)=>{e.exports=n.p+"images/kholmogorsky-rayon.d75cf55cc6dcd72e4e9a.jpeg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.p="",(()=>{n(459),n(886),n(595),n(370),n(920),n(2);var e=document.querySelector(".profile__edit"),t=(document.querySelector(".popup-img"),document.querySelector(".popup-img__img"),document.querySelector(".popup-img__title"),document.querySelector(".profile__avatar-img")),r={formSelector:".form",inputSelector:".form__text",submitBtnSelector:".form__submit",errorTextClass:"form__error_active",errorInputClass:"form__text_error",formSubmitClassDisabled:"form__submit_disabled"};function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n,r){var o=t.data,i=t.handleCardClick,a=t.deleteHandler,s=t.handleLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=o.name,this._link=o.link,this._likesArray=o.likes,this._cardSelector=n,this._handleCardClick=i,this._deleteHandler=a,this._handleLike=s,this._ownerId=o.owner._id,this._userId=r,this._cardId=o._id}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_like",value:function(e){e.target.classList.toggle("element__like_active")}},{key:"_updateLikes",value:function(){this._likes.textContent=this._likesArray.length||0}},{key:"setLikes",value:function(e){this._likesArray=e,this._updateLikes(),this._updateLikeStatus()}},{key:"getLikeStatus",value:function(){var e=this;return this._likesArray.find((function(t){return t._id===e._userId}))}},{key:"_updateLikeStatus",value:function(){var e=this.getLikeStatus();this._likesBtn.classList.remove("element__like_active"),e&&this._likesBtn.classList.add("element__like_active")}},{key:"deleteCard",value:function(){this._element.remove()}},{key:"_handleOpenPopup",value:function(){this._handleCardClick({src:this._img.src,title:this._img.title})}},{key:"getCardId",value:function(){return this._cardId}},{key:"_setEventListeners",value:function(){var e=this;this._img.addEventListener("click",(function(){e._handleOpenPopup()})),this._element.querySelector(".element__dlt").addEventListener("click",(function(t){e._deleteHandler(t)})),this._element.querySelector(".element__like").addEventListener("click",(function(t){e._handleLike()}))}},{key:"_displayIconDltCard",value:function(){this._ownerId!==this._userId&&(this._iconDltCard.style.display="none")}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._img=this._element.querySelector(".element__img"),this._likes=this._element.querySelector(".element__number-likes"),this._iconDltCard=this._element.querySelector(".element__dlt"),this._likesBtn=this._element.querySelector(".element__like"),this._displayIconDltCard(),this._img.src=this._link,this._img.alt="Фотография ".concat(this._name),this._img.title=this._name,this.setLikes(this._likesArray),this._element.querySelector(".element__title").textContent=this._name,this._setEventListeners(),this._element}}])&&o(t.prototype,n),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitBtnSelector=t.submitBtnSelector,this._errorTextClass=t.errorTextClass,this._errorInputClass=t.errorInputClass,this._formSubmitClassDisabled=t.formSubmitClassDisabled,this._formElement=n,this._inputs=this._searchInputsForm(),this._submitBtn=this._searchBtnForm()}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e){var t=e.getAttribute("name"),n=this._formElement.querySelector("#".concat(t,"-error"));n.textContent=e.validationMessage,n.classList.add(this._errorTextClass),e.classList.add(this._errorInputClass)}},{key:"_hideInputError",value:function(e){var t=e.name,n=this._formElement.querySelector("#".concat(t,"-error"));n.textContent="",n.classList.remove(this._errorTextClass),e.classList.remove(this._errorInputClass)}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonStatus(),this._inputs.forEach((function(t){e._hideInputError(t)}))}},{key:"_validateInput",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_searchInputsForm",value:function(){return Array.from(this._formElement.querySelectorAll(this._inputSelector))}},{key:"_searchBtnForm",value:function(){return this._formElement.querySelector(this._submitBtnSelector)}},{key:"_validateForm",value:function(){var e=this;this._formElement.addEventListener("submit",(function(e){return e.preventDefault()})),this._inputs.forEach((function(t){t.addEventListener("input",(function(){e._validateInput(t),e._toggleButtonStatus()}))}))}},{key:"_hasInvalidInput",value:function(){return this._inputs.every((function(e){return e.validity.valid}))}},{key:"_submiClassBtnDisabled",value:function(){this._submitBtn.setAttribute("disabled",!0),this._submitBtn.classList.add(this._formSubmitClassDisabled)}},{key:"_enableSubmitButton",value:function(){this._submitBtn.removeAttribute("disabled"),this._submitBtn.classList.remove(this._formSubmitClassDisabled)}},{key:"_toggleButtonStatus",value:function(){this._hasInvalidInput()?this._enableSubmitButton():this._submiClassBtnDisabled()}},{key:"enableValidation",value:function(){this._validateForm()}}])&&a(t.prototype,n),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=t,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"setItems",value:function(e){var t=this;e.forEach((function(e){t.addItem(e)}))}},{key:"addItem",value:function(e){var t=this._renderer(e);this._container.prepend(t)}}])&&u(t.prototype,n),e}();function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._popupOpenClass="popup_open",this._popupCloseBtnClass="popup__close",this._closeHandle=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add(this._popupOpenClass),document.addEventListener("keydown",this._closeHandle)}},{key:"close",value:function(){this._popup.classList.remove(this._popupOpenClass),document.removeEventListener("keydown",this._closeHandle)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){t.target.classList.contains(e._popupOpenClass)&&e.close(),t.target.classList.contains(e._popupCloseBtnClass)&&e.close()}))}}])&&l(t.prototype,n),e}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},d(e,t,n||e)}function _(e,t){return _=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},_(e,t)}function y(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(r);if(o){var n=m(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._imageSelector=".popup-img__img",t._image=t._popup.querySelector(t._imageSelector),t._imageTitlelSelector=".popup-img__title",t._imageTitle=t._popup.querySelector(t._imageTitlelSelector),t}return t=a,(n=[{key:"open",value:function(e){var t=e.src,n=e.title;d(m(a.prototype),"open",this).call(this),this._image.src=t,this._image.alt=n,this._imageTitle.textContent=n}}])&&h(t.prototype,n),a}(f);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t,n){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},k(e,t,n||e)}function S(e,t){return S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},S(e,t)}function C(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._cbFormSubmit=t,n.form=n._popup.querySelector(".form"),n._inputs=Array.from(n.form.querySelectorAll(".form__text")),n._popupBtn=n._popup.querySelector(".form__submit"),n._popupBtnText=n._popupBtn.textContent,n}return t=a,n=[{key:"_getInputValues",value:function(){var e={};return this._inputs.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;k(w(a.prototype),"setEventListeners",this).call(this),this.form.addEventListener("submit",(function(t){t.preventDefault(),e._cbFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){k(w(a.prototype),"close",this).call(this),this.form.reset()}},{key:"loading",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранение...";this._popupBtn.textContent=e?t:this._popupBtnText}}],n&&g(t.prototype,n),a}(f);function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t){var n=t.userName,r=t.userJob,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userJob=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){var e={};return e.text_name=this._userName.textContent,e.text_job=this._userJob.textContent,e}},{key:"setUserInfo",value:function(e){var t=e.textName,n=e.textJob;this._userName.textContent=t,this._userJob.textContent=n}},{key:"setAvatar",value:function(e){this._avatar.src=e}}])&&O(t.prototype,n),e}();function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e,t,n){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},I(e,t,n||e)}function P(e,t){return P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},P(e,t)}function B(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}var q,D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(r);if(o){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return B(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._cbFormSubmit=t,n._submitBtnDelete=n._popup.querySelector(".popup__submit"),n}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;I(T(a.prototype),"setEventListeners",this).call(this),this._submitBtnDelete.addEventListener("click",(function(t){t.preventDefault(),e._cbFormSubmit(t,e._card),e.close()}))}},{key:"open",value:function(e){this._card=e,I(T(a.prototype),"open",this).call(this)}}])&&x(t.prototype,n),a}(f);function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var N=new(function(){function e(t){var n=t.endpoint,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._endpoint=n,this._headers=r}var t,n;return t=e,(n=[{key:"_resStatus",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserData",value:function(){return fetch("".concat(this._endpoint,"/users/me"),{headers:this._headers}).then(this._resStatus)}},{key:"getCardsData",value:function(){return fetch("".concat(this._endpoint,"/cards"),{headers:this._headers}).then(this._resStatus)}},{key:"updateUserData",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this._endpoint,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:n})}).then(this._resStatus)}},{key:"addCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this._endpoint,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:n})}).then(this._resStatus)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._endpoint,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._resStatus)}},{key:"setLike",value:function(e){return fetch("".concat(this._endpoint,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._resStatus)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._endpoint,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._resStatus)}},{key:"updateAvatar",value:function(e){return fetch("".concat(this._endpoint,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._resStatus)}}])&&R(t.prototype,n),e}())({endpoint:"https://mesto.nomoreparties.co/v1/cohort-29",headers:{authorization:"78fb05fc-0800-40e0-9053-b1d17c19d9a5","Content-type":"application/json"}}),U=new L({userName:".profile__name",userJob:".profile__job",avatar:".profile__avatar-img"});Promise.all([N.getUserData(),N.getCardsData()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1],a=o.name,s=o.about,u=o.avatar,c=o._id;U.setUserInfo({textName:a,textJob:s}),U.setAvatar(u),q=c,H.setItems(i)})).catch((function(e){console.log(e)}));var J=new E("#popupEditProfile",(function(e){J.loading(!0),N.updateUserData({name:e.text_name,about:e.text_job}).then((function(e){var t=e.name,n=e.about;U.setUserInfo({textName:t,textJob:n}),J.close()})).catch((function(e){console.log(e)})).finally((function(){J.loading(!1)}))}));J.setEventListeners();var F=new s(r,J.form);F.enableValidation(),e.addEventListener("click",(function(){var e=U.getUserInfo();for(var t in e)J.form.elements[t].value=e[t];F.resetValidation(),J.open()}));var V=new v(".popup-img");V.setEventListeners();var H=new c((function(e){var t=function(e){var t=V.open.bind(V),n=new i({data:e,handleCardClick:t,handleLike:function(){n.getLikeStatus()?N.deleteLike(n.getCardId()).then((function(e){n.setLikes(e.likes)})).catch((function(e){console.log(e)})):N.setLike(n.getCardId()).then((function(e){n.setLikes(e.likes)})).catch((function(e){console.log(e)}))},deleteHandler:function(){$.open(n)}},"#element-template",q);return n.generateCard()}(e);return t}),".elements"),z=new E("#popupAddCard",(function(e){z.loading(!0),N.addCard({name:e.card_title,link:e.card_link}).then((function(e){H.addItem(e),z.close()})).catch((function(e){console.log(e)})).finally((function(){z.loading(!1)}))}));z.setEventListeners();var M=new s(r,z.form);M.enableValidation(),document.querySelector(".profile__add-button").addEventListener("click",(function(){M.resetValidation(),z.open()}));var $=new D("#popupDltCard",(function(e,t){N.deleteCard(t.getCardId()).then((function(){t.deleteCard(),$.close()})).catch((function(e){console.log(e)}))}));$.setEventListeners();var G=new E("#popupUpdateAvatar",(function(e){G.loading(!0),N.updateAvatar(e.url_avatar).then((function(e){t.src=e.avatar,G.close()})).catch((function(e){console.log(e)})).finally((function(){G.loading(!1)}))}));G.setEventListeners();var K=new s(r,G.form);K.enableValidation(),document.querySelector(".profile__avatar").addEventListener("click",(function(){K.resetValidation(),G.open()}))})()})();