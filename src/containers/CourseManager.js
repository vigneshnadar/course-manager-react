import React,{ Component } from 'react';
import CourseCard  from '../components/CourseCard';
import 'bootstrap/dist/css/bootstrap.css';
import ModuleList from './ModuleList';
import LessonTab from './LessonTab';
import CourseEditor from './CourseEditor';
import CourseList from "./CourseList";



class CourseManager extends Component {

    render(){
        return (<div className="container-fluid">
            <h1 >Course Manager</h1>
            <CourseList/>
            </div>)

    }
}

export default CourseManager;