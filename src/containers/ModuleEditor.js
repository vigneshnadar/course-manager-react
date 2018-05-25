
import React,{ Component } from 'react';
import ModuleList from './ModuleList';
import LessonTab from './LessonTab';
import ModuleList2 from './ModuleList2';
import LessonList from './LessonList';
import ModuleService from "../services/ModuleService";

class ModuleEditor extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            courseId : '',
            moduleId : '',
            moduleTitle: ''
        };

        this.moduleService = ModuleService.instance;
        this.selectCourse = this.selectCourse.bind(this);
        this.selectModule = this.selectModule.bind(this);
    }

    componentDidMount(){

        this.selectCourse(this.props.match.params.courseId);
        this.selectModule(this.props.match.params.moduleId);

        this.moduleService.findModuleById(this.props.match.params.moduleId)
            .then((module) => {
                // console.log(courses);
                this.setState({ courseId : this.props.match.params.courseId,
                    moduleId: this.props.match.params.moduleId,
                    moduleTitle: module.title})
            });
    }


    selectCourse(courseId){
        this.setState({courseId : courseId });
    }

    selectModule(moduleId){
        this.setState({moduleId : moduleId });
    }

    render() { return (
        <div>
            <h2> Editing Module: ** {this.state.moduleTitle} ** </h2>
            {/*<b>Please Refresh page on click</b>*/}
            <div className="row">

                    {/*<ModuleList/>*/}
                    <LessonList courseId={this.state.courseId} moduleId={this.state.moduleId}/>

                {/*<div className="col-8">*/}
                    {/*<LessonTab/>*/}
                {/*</div>*/}
            </div>
        </div>
    );}
}

export default ModuleEditor;
