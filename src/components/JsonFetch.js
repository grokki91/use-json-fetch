import React from 'react';

const JsonFetch = ({url}) => {
    if (url) {
        return(
            <div>
                {url.status}
            </div>
        );
    }
}

export default JsonFetch;
