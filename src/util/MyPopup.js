import React from 'react';
import { Popup } from 'semantic-ui-react';

function MyPopup({ content, children }) {
    return <Popup inverted size="small" content={content} trigger={children}/>
};

export default MyPopup;