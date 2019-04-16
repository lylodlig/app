import React from 'react'
import DocumentTitle from 'react-document-title'

export default function Test() {
    console.log("test")

    return (
        <DocumentTitle title='Home'>
            <h1>Home, sweet home.</h1>
        </DocumentTitle>
    );
}