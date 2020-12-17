const h = (tag, props, ...children) => {
    const t = (text) => document.createTextNode(text);
    const node = document.createElement(tag);
    Object.keys(props || {})
        .filter(key => Object.hasOwnProperty.call(props, key))
        .forEach(key => node.setAttribute(key, props[key]));
    children.forEach(child => node.appendChild(typeof child == "string" ? t(child) : child));
    return node;
}
const H = (tag, ...children) => h(tag, {}, ...children);
const mount = (node) => document.body.appendChild(node);