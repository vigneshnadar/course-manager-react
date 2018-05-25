
import React,{ Component } from 'react';
import ModuleList from './ModuleList';
import LessonTab from './LessonTab';
import ModuleList2 from './ModuleList2';
import LessonList from './LessonList';

class ModuleEditor extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            courseId : '',
            moduleId : ''
        };

        this.selectCourse = this.selectCourse.bind(this);
        this.selectModule = this.selectModule.bind(this);
    }

    componentDidMount(){

        this.selectCourse(this.props.match.params.courseId);
        this.selectModule(this.props.match.params.moduleId);
    }


    selectCourse(courseId){
        this.setState({courseId : courseId });
    }

    selectModule(moduleId){
        this.setState({moduleId : moduleId });
    }

    render() { return (
        <div>
            <h2> Editing Module: {this.state.moduleId} </h2>
            <div className="row">
                <div className="col-4">
                    {/*<ModuleList/>*/}
                    <LessonList courseId={this.state.courseId} moduleId={this.state.moduleId}/>
                </div>
                {/*<div className="col-8">*/}
                    {/*<LessonTab/>*/}
                {/*</div>*/}
            </div>
        </div>
    );}
}

export default ModuleEditor;
