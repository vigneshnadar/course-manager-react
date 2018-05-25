import React,{ Component } from 'react';
import CourseCard  from '../components/CourseCard';
import 'bootstrap/dist/css/bootstrap.css';
import ModuleList from './ModuleList';
import LessonTab from './LessonTab';
import CourseEditor from './CourseEditor';
import CourseList from "./CourseList";
import LessonList from "./LessonList";
import ModuleEditor from "../containers/ModuleEditor";

import { BrowserRouter as Router,Route} from 'react-router-dom';



class CourseManager extends Component {

    render(){
        return (
            <Router>
            <div className="container-fluid">
                <h1 className="text-white bg-primary"><center>Course Manager</center></h1>
            <Route path="/courses" component={CourseList}>
            </Route>
                <Route path="/course/:courseId" component={CourseEditor}>
                </Route>
                {/*<Route path="/course/:courseId/module/:moduleId" component={ModuleEditor}>*/}
                {/*</Route>*/}
                {/*<CourseList/>*/}
            </div>
            </Router>
                )

    }
}

export default CourseManager;