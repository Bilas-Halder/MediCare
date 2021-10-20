import React from 'react';

const errStyle = {
    color: "#e10000",
    fontSize: "1rem"
}

// exporting some icons together from here

export const useErrorIcon = () => {
    return <i style={errStyle} className="fas fa-exclamation-circle"></i>;
};
export const useTriangleErrorIcon = () => {
    return <i style={errStyle} className="fas fa-exclamation-triangle"></i>;
}
export const useFacebookIcon = () => {
    return <i className="social fab fa-facebook-square"></i>;
}
export const useInstagramIcon = () => {
    return <i className="social fab fa-instagram-square"></i>;
}
export const useLinkedInIcon = () => {
    return <i className="social fab fa-linkedin"></i>;
}
export const useTwiterIcon = () => {
    return <i className="social fab fa-twitter-square"></i>;
}

