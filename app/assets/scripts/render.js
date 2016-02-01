function render(vnode){
  if (typeof vnode==='string') return document.createTextNode(vnode);
  let n = document.createElement(vnode.nodeName);
  Object.keys(vnode.attributes || {}).forEach(k => n.setAttribute(k, vnode.attributes[k]));
  (vnode.children || []).forEach(c => n.appendChild(render(c)));
  return n;
}

function h(nodeName, attributes, ...args){
  let children = args.length ? [].concat(...args) : null;
  return {nodeName, attributes, children};
}

export {render, h};