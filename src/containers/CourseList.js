import React from 'react';
import CourseRow from "../components/CourseRow";
import CourseService from "../services/CourseService";



class CourseList extends React.Component {
    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.state = {courses : []};
    }


    componentDidMount(){
        this.courseService.findAllCourses()
            .then((courses) => {
                console.log(courses);
                this.setState({ courses : courses})
            });
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
            <thead><tr><th>Title</th></tr></thead>
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