import React from 'react';

const ModalHeader = ({ children, className }) => {
    return (
        <div className={`modal-header ${className ? className : ''}`}>
            {children}
        </div>
    );
};

export default ModalHeader;
