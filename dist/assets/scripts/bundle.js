(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _renderJs = require('./render.js');

/** @jsx h */

var arr = [{
  name: 'Stevie',
  job: 'Designer'
}, {
  name: 'Daniel',
  job: 'Dev'
}, {
  name: 'Dom',
  job: 'Dev'
}, {
  name: 'Zoe',
  job: 'Designer'
}];

var info = arr.map(function (item, i) {
  var fancyClass = i % 2 !== 0 ? 'fancy' : 'not-fancy';
  return (0, _renderJs.h)(
    'li',
    { 'class': fancyClass },
    'My name is ',
    item.name,
    ' and I work as a ',
    item.job,
    ' at IBM'
  );
});

var newUser = (0, _renderJs.h)(
  'form',
  null,
  (0, _renderJs.h)('input', { type: 'text', placeholder: 'name', 'class': 'name' }),
  (0, _renderJs.h)('input', { type: 'text', placeholder: 'job', 'class': 'job' }),
  (0, _renderJs.h)(
    'button',
    { type: 'button', id: 'submit' },
    'Submit'
  )
);

document.getElementById('submit').addEventListener('click', createNewUser);

function createNewUser(name, job) {
  console.log(name);
  name = document.getElementsByClassName('name')[0];
  job = document.getElementsByClassName('job')[0];
  console.log(name);
  // let user = {
  //   name: name,
  //   job: job
  // };
  // arr.push(user);
}

var vdom = (0, _renderJs.h)(
  'div',
  null,
  (0, _renderJs.h)(
    'p',
    null,
    'Look, a simple jsx renderer! With lots of text'
  ),
  (0, _renderJs.h)(
    'span',
    null,
    'And another element'
  ),
  (0, _renderJs.h)(
    'ul',
    null,
    info
  ),
  newUser
);

var dom = (0, _renderJs.render)(vdom);

document.body.appendChild(dom);

},{"./render.js":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
function render(vnode) {
  if (typeof vnode === 'string') return document.createTextNode(vnode);
  var n = document.createElement(vnode.nodeName);
  Object.keys(vnode.attributes || {}).forEach(function (k) {
    return n.setAttribute(k, vnode.attributes[k]);
  });
  (vnode.children || []).forEach(function (c) {
    return n.appendChild(render(c));
  });
  return n;
}

function h(nodeName, attributes) {
  var _ref;

  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var children = args.length ? (_ref = []).concat.apply(_ref, args) : null;
  return { nodeName: nodeName, attributes: attributes, children: children };
}

exports.render = render;
exports.h = h;

},{}]},{},[1])


//# sourceMappingURL=maps/bundle.js.map
