import React,{ Component } from 'react';
import ModuleList from './ModuleList';
import LessonTab from './LessonTab';
import ModuleEditor from './ModuleEditor';
import ModuleList2 from './ModuleList2';
import { BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import CourseService from "../services/CourseService";

class CourseEditor extends React.Component {

    constructor(props){
        super(props);
        this.state = {courseId : '',
        courseTitle:''};
        this.courseService = CourseService.instance;
        this.selectCourse = this.selectCourse.bind(this);

    }

    componentDidMount(){
        this.selectCourse(this.props.match.params.courseId);
        this.courseService.findCourseById(this.props.match.params.courseId)
            .then((course) => {
                // console.log(courses);
                this.setState({ courseId : this.state.courseId,
                courseTitle: course.title})
            });
    }




    selectCourse(courseId){
        this.setState({courseId : courseId });
    }

    render() { return (
        <Router>

            <div>
            <h2> Editing Course: {this.state.courseTitle} </h2>
        <div className="row">
        <div className="col-4">
            {/*<ModuleList/>*/}
            <ModuleList2 courseId={this.state.courseId}/>
        </div>
        <div className="col-8">
            {/*<LessonTab/>*/}

            <Route exact path="/course/:courseId/module/:moduleId" component={ModuleEditor}>
            </Route>

            {/*<ModuleEditor/>*/}
        </div>
    </div>
        </div>
            </Router>
    );}}

export default CourseEditor;
