import React from 'react';

const ModalBody = ({ className, children }) => {
    return (
        <div className={`modal-body ${className ? className : ''}`}>
            {children}
        </div>
    );
};

export default ModalBody;
