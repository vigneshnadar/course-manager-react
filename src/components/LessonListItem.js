import React,{ Component } from 'react';
import { Link } from 'react-router-dom';



class LessonListItem extends Component {

    constructor(props) {
        super(props);
        this.delLesson = this.delLesson.bind(this);
        console.log("lesson sent here is"+this.props.lessonId)
    }

    delLesson(event){
        // console.log(event.target.value);
        // console.log(this.props.moduleId);
        this.props.delete(this.props.lessonId);

    }





    render(){

        return  (

                    <li className="active">
                        {/*<a data-toggle="tab"  href={'#'+ this.props.lessonId}>*/}
                        <span ><p className="nav-link">  <Link to= {`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}`}>
                                {this.props.title}

</Link>
                    <button onClick={this.delLesson} type="button" className="btn btn-outline-primary">
                        X
                    </button></p></span>

                </li>

        );
    }
}

export default LessonListItem;