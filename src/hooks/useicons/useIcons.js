import React from 'react';

const errStyle = {
    color: "#e10000",
    fontSize: "1rem"
}

export const useErrorIcon = () => {
    return <i style={errStyle} class="fas fa-exclamation-circle"></i>;
};
export const useTriangleErrorIcon = () => {
    return <i style={errStyle} className="fas fa-exclamation-triangle"></i>;
}
