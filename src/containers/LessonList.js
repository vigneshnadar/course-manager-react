import React from 'react';
import ModuleListItem from '../components/ModulListItem';
import ModuleService from '../services/ModuleService';
import LessonService from "../services/LessonService";
import LessonListItem from '../components/LessonListItem';

class LessonList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            moduleId: '',
            lesson: {title: ''},
            lessons: [
                {title: 'Module 1 - jQuery', id: 123},
                {title: 'Module 2 - React', id: 234},
                {title: 'Module 3 - Redux', id: 345},
                {title: 'Module 4 - Angular', id: 456},
                {title: 'Module 5 - Node.js', id: 567},
                {title: 'Module 6 - MongoDB', id: 678}
            ]
        }


        this.titleChanged = this.titleChanged.bind(this);
        this.createLesson = this.createLesson.bind(this);
        this.deleteLesson = this.deleteLesson.bind(this);


        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);

        this.lessonService = LessonService.instance;
    }


    componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.setModuleId(this.props.moduleId);
    }


    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.setModuleId(newProps.moduleId);
        this.findAllLessonsForModule(newProps.courseId, newProps.moduleId);
    }

    findAllLessonsForModule(courseId, moduleId) {
        this.lessonService
            .findAllLessonsForModule(courseId, moduleId)
            .then((lessons) => {this.setLessons(lessons)});

        // this.findAllModulesForCourse(courseId);

    }

    // setModules(modules) {
    //     this.setState({modules: modules})
    // }

    setLessons(lessons) {
        this.setState({lessons: lessons})
    }



    setCourseId(courseId){
        this.setState({courseId : courseId});
    }

    setModuleId(moduleId){
        this.setState({moduleId : moduleId});
    }



    deleteLesson(lessonId){
        // console.log("delete lesson");
        // console.log(lessonId);
        // console.log(this.props.course.id);
        //
        // var crId = this.props.course.id;
        //
        this.lessonService
            .deleteLesson(lessonId)
            .then(() => { this.findAllLessonsForModule(this.state.courseId, this.state.moduleId)});
    }

    renderListOfLessons() {
        let lessons = this.state.lessons.map((lesson) =>  {
            return <LessonListItem key={lesson.id} title={lesson.title} lessonId={lesson.id} delete={this.deleteLesson}/>
        })


        return lessons;
    }


    titleChanged(event) {
        this.setState({lesson: {title: event.target.value}});
        // console.log(event.target.value);
    }

    // createModule(event) {
    //     this.setState({module: {title: event.target.value}});
    //     console.log(event.target.value);
    //
    //     this.moduleService.createModule(this.props.courseId,this.state.module);
    // }


    createLesson(event) {
        this.setState({lesson: {title: event.target.value}});
        console.log(event.target.value);

        this.lessonService
            .createLesson(this.props.courseId,this.props.moduleId,this.state.lesson)
            .then(() => { this.findAllLessonsForModule(this.props.courseId,this.props.moduleId)});
    }

    render() {
        return (
            <div>
            <div className="container-fluid"><br/>
                {/*<h3>Lesson list for module: {this.state.moduleId}</h3>*/}
               <table>
                    <tr>
                        <td className="col-10"><input className="form-control" onChange={this.titleChanged} placeholder="Enter Lesson"/></td>
                        <td className="col-2"><button onClick={this.createLesson} className= "btn btn-primary">
                            <i className= "fa fa-plus"> </i>
                        </button>
                        </td>
                    </tr>
                </table><br/>

                <table>
                    <tr>
                        <td>
                    <ul className="nav nav-tabs">
                        {this.renderListOfLessons()}
                    </ul>
                        </td>
                    </tr>
                </table>

                {/*<div className="tab-content">*/}
                    {/*/!*<div id={}*!/*/}
                {/*/!*</div>*!/*/}

                </div>
               </div>


        )
    }
}


export default LessonList;