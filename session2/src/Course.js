import React, { Component } from 'react';

export class Course extends Component {
    render() {
        return (
            <div>
                <h1>Danh sách khóa học</h1>
                <ul>
                    <li>HTML</li>
                    <li>Javascript</li>
                    <li>C#</li>
                    <li>Python</li>
                </ul>
            </div>
        )
    }
}