import React from 'react';
import CourseRow from "../components/CourseRow";
import CourseService from "../services/CourseService";



class CourseList extends React.Component {
    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.state = {
            course : {title : '',
                      created: null,
                      modified: null},
            courses : []};

        this.titleChanged = this.titleChanged.bind(this);
        // this.createModule = this.createModule.bind(this);
        this.createCourse = this.createCourse.bind(this);
    }


    componentDidMount(){
        this.findAllCourses()
    }

    findAllCourses(){
        this.courseService.findAllCourses()
            .then((courses) => {
                console.log(courses);
                this.setState({ courses : courses})
            });
    }


    titleChanged(event) {

        var createdDate = this.state.course.created;

        if(this.state.course.created == null){
            this.setState({course: {
                title: event.target.value,
                created: new Date().getTime(),
                    modified: new Date().getTime()}});
        }
        else {
            this.setState({course: {
                    title: event.target.value,
                    created: createdDate,
                    modified: new Date().getTime()}});

        }

        console.log(this.state);
        console.log(event.target.value);
    }

    createModule(event) {
        this.setState({course: {title: event.target.value}});
        console.log(event.target.value);
        console.log(this.state);
    }


    createCourse(event){
        this.courseService
            .createCourse(this.state.course)
            .then(() => { this.findAllCourses()});
    }


    renderCourseRows() {

        let  courses = this.state.courses.map(
            function (course) {
                return (
                    <CourseRow key={course.id} course={course}/>
                )
            }
        );

        return courses;



        // return (
        //     <CourseRow/>
        // )
    }



    render() {
        return (
            <div>
            <h2>Course List</h2>
            <table className="table">
            <thead>
            <tr><th>Title</th></tr>
            <tr>
                <th><input onChange={this.titleChanged} className="form-control" id="titleFld"
                           placeholder="cs101"/></th>
                <th><button onClick={this.createCourse} className="btn btn-primary">Add</button></th>
            </tr>
            </thead>
        <tbody>
        {/*<tr><td>Course Row</td></tr>*/}
        {/*<CourseRow/>*/}
        {/*<CourseRow/>*/}
        {/*<CourseRow/>*/}
        {this.renderCourseRows()}
        </tbody>
        </table>
            </div>

        )
    }
}
export default CourseList;