import React,{ Component } from 'react';
import CourseCard  from '../components/CourseCard';
import 'bootstrap/dist/css/bootstrap.css';
import ModuleList from './ModuleList';
import LessonTab from './LessonTab';


class CourseManager extends Component {

    render(){
        return <div className="container-fluid">
            <h1 >Course Manager</h1>
            <LessonTab/>
            <ModuleList/>
            <div className="card-deck">
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            </div>
        </div>
    }
}

export default CourseManager;