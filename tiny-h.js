const h = (E, P, ...C) => {
    const t = (T) => document.createTextNode(T)
    const N = document.createElement(E)
    Object.keys(P || {}).filter(k => Object.hasOwnProperty.call(P, k)).forEach(k => N.setAttribute(k, P[k]))
    C.forEach(c => N.appendChild(typeof c == "string" ? t(c) : c))    
    return N
}
const H = (E, ...C) => h(E, void 0, ...C)
const mount = (N) => document.body.appendChild(N)