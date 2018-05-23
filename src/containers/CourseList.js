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
                this.setState({ courses : courses})
            });
    }





    render() {
        return (
            <div>
            <h2>Course List</h2>
            <table className="table">
            <thead><tr><th>Title</th></tr></thead>
        <tbody>
        {/*<tr><td>Course Row</td></tr>*/}
        <CourseRow/>
        <CourseRow/>
        <CourseRow/>
        </tbody>
        </table>
            </div>

        )
    }
}
export default CourseList;