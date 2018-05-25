import React,{ Component } from 'react';
// import { Link } from 'react-router-dom';

class LessonListItem extends Component {

    constructor(props) {
        super(props);
        this.delLesson = this.delLesson.bind(this);
    }

    delLesson(event){
        // console.log(event.target.value);
        // console.log(this.props.moduleId);
        this.props.delete(this.props.lessonId);
    }





    render(){
        return  (

                <li className="nav-item"><a className="nav-link active" href="#">  {this.props.title}
                    {/*<span className="float-right">*/}
                    {/*<button onClick={this.delLesson} type="button" className="btn btn-danger">*/}
                        {/*<i className="fa fa-trash"></i>*/}
                    {/*</button></span>*/}
                </a></li>

        );
    }
}

export default LessonListItem;