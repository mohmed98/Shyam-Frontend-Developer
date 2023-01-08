import React from 'react';

const ModalFooter = ({ children, className }) => {
    return (
        <div className={`modal-footer ${className ? className : ''}`}>
            {children}
        </div>
    );
};

export default ModalFooter;
