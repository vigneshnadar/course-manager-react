import React,{ Component } from 'react';
import ModuleList from './ModuleList';
import LessonTab from './LessonTab';

class CourseEditor extends React.Component {
    render() { return (<div className="row">
        <div className="col-4">
            <ModuleList/>
        </div>
        <div className="col-8">
            <LessonTab/>
        </div>
    </div>
    );}}

export default CourseEditor;
