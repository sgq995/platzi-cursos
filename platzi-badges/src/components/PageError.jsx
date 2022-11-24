import React from 'react';

import './style/PageError.css';

function PageError(props) {
    return (
        <div className="PageError">
            {props.error.message}
        </div>
    );
}

export default PageError;
