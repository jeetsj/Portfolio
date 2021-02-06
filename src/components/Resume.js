import React, { Component } from 'react';
import ResumeSD from './ResumeSD.pdf';

class Resume extends Component {

    render() {

        return (
            <a href={ResumeSD} target="_blank">Click here</a>
        );
    }
}

export default Resume;