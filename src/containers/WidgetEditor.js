import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Provider, connect} from 'react-redux'
import {createStore} from 'redux'
import { widgetReducer} from "../reducers/widgetReducer";
import {WidgetApp} from "./widgetList";
import ModuleService from "../services/ModuleService";



let store = createStore(widgetReducer)



class WidgetEditor extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            courseId : '',
            moduleId : '',
            lessonId: ''
        };



    }

    componentDidMount(){

        this.setState({ courseId : this.props.match.params.courseId,
            moduleId: this.props.match.params.moduleId,
            lessonId: this.props.match.params.lessonId})

    }



    getDerivedStateFromProps(){

        this.setState({ courseId : this.props.match.params.courseId,
            moduleId: this.props.match.params.moduleId,
            lessonId: this.props.match.params.lessonId})

    }




render() {

        console.log("lesson cureent is"+this.props.match.params.lessonId)
    const lesId = this.props.match.params.lessonId
    return (
        <Provider store={store}>
            <WidgetApp lessonId={lesId}/>
        </Provider>
    )
}
}


export default WidgetEditor;
