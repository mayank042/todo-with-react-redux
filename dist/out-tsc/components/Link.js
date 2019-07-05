import React from 'react';
var Link = function (_a) {
    var active = _a.active, children = _a.children, onClick = _a.onClick;
    if (active) {
        return <span>{children}</span>;
    }
    return (<a href="" onClick={function (e) {
        e.preventDefault();
        onClick();
    }}>
      {children}
    </a>);
};
export default Link;
//# sourceMappingURL=Link.js.map