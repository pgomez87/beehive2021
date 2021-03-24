const div = function (attributes, parent, children) {
    return tag('div', attributes, parent, children);
}

const h1 = function (attributes, parent, children) {
    return tag('h1', attributes, parent, children);
}

const h2 = function (attributes, parent, children) {
    return tag('h2', attributes, parent, children);
}

const h3 = function (attributes, parent, children) {
    return tag('h3', attributes, parent, children);
}

const p = function (attributes, parent, children) {
    return tag('p', attributes, parent, children);
}

const form = function (attributes, parent, children) {
    return tag('form', attributes, parent, children);
}

const label = function (attributes, parent, children) {
    return tag('label', attributes, parent, children);
}

const input = function (attributes, parent, children) {
    return tag('input', attributes, parent, children);
}

const option = function (attributes, parent, children) {
    return tag('option', attributes, parent, children);
}

const img = function (attributes, parent, children) {
    return tag('img', attributes, parent, children);
}

const tag = function (tag, attributes, parent, children) {
    let e = document.createElement(tag);

    if (parent !== null) {
        parent.appendChild(e);
    }

    if (children !== null) {
        children.forEach(child => {
            e.appendChild(child);
        });
    }

    for (const key in attributes) {
        e[key] = attributes[key];
    }

    return e;
}