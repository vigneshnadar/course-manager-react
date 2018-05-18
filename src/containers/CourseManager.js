import React,{ Component } from 'react';
import CourseCard  from './CourseCard';
import 'bootstrap/dist/css/bootstrap.css';

class CourseManager extends Component {

    render(){
        return <div className="container-fluid">
            <h1 >Course Manager</h1>
            <div className="card-deck">
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            </div>
        </div>
    }
}

export default CourseManager;