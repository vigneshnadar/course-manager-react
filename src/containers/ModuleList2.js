import React from 'react';
import ModuleListItem from '../components/ModulListItem';
import ModuleService from '../services/ModuleService';
import CourseEditor from "./CourseEditor";
import CourseList from "./CourseList";
import ModuleEditor from "./ModuleEditor";
import { BrowserRouter as Router,Route} from 'react-router-dom';

class ModuleList2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            courseId: '0',
            module: {title: ''},
            modules: [
                {title: 'Module 1 - jQuery', id: 123},
                {title: 'Module 2 - React', id: 234},
                {title: 'Module 3 - Redux', id: 345},
                {title: 'Module 4 - Angular', id: 456},
                {title: 'Module 5 - Node.js', id: 567},
                {title: 'Module 6 - MongoDB', id: 678}
            ]
        }


        this.titleChanged = this.titleChanged.bind(this);
        this.createModule = this.createModule.bind(this);


        this.setCourseId = this.setCourseId.bind(this);
        this.deleteModule = this.deleteModule.bind(this);

        this.moduleService = ModuleService.instance;
    }


    componentDidMount() {
        this.setCourseId(this.props.courseId);
    }


    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.findAllModulesForCourse(newProps.courseId);
    }

    findAllModulesForCourse(courseId) {
        this.moduleService
            .findAllModulesForCourse(courseId)
            .then((modules) => {this.setModules(modules)});

        // this.findAllModulesForCourse(courseId);

    }

    setModules(modules) {
        this.setState({modules: modules})
    }



    setCourseId(courseId){
        this.setState({courseId : courseId});
    }


    deleteModule(moduleId){
        console.log("delete module");
        console.log(moduleId);
        // console.log(this.props.course.id);
        //
        // var crId = this.props.course.id;
        //
        this.moduleService
            .deleteModule(moduleId)
            .then(() => { this.findAllModulesForCourse(this.state.courseId)});
    }



    renderListOfModules() {



        var cId = this.state.courseId;
        let modules = this.state.modules.map((module) => {
            return <ModuleListItem key={module.id} title={module.title} moduleId={module.id} courseId={cId} delete={this.deleteModule}/>
        })


        return modules;
    }


    titleChanged(event) {
        this.setState({module: {title: event.target.value}});
        console.log(event.target.value);
    }

    createModule(event) {
        this.setState({module: {title: event.target.value}});
        console.log(event.target.value);

        this.moduleService
            .createModule(this.props.courseId,this.state.module)
            .then(() => { this.findAllModulesForCourse(this.props.courseId)});
    }

    render() {
        return (
            <div className="container-fluid"><br/>

                <h3>Module list for course: {this.state.courseId}</h3>
                <input className="form-control"
                       onChange={this.titleChanged}
                       placeholder="title"/>
                <ul className="list-group">
                    <button onClick={this.createModule} className= "btn btn-primary btn-block">
                        <i className= "fa fa-plus"> </i>
                    </button>
                    {this.renderListOfModules()}
                    </ul>
                    </div>
        )
    }
}


export default ModuleList2;