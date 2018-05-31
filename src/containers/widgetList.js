import {ADD_WIDGET} from "../constants";
import {Component} from "react";
import {addWidget, findAllWidgets, save,preview} from "../actions";
import {connect} from "react-redux";
import React from 'react';
import {WidgetContainer} from "../components/widget";

const WIDGET_GET_API_URL='http://localhost:8080/api/lesson/LID/widget'
let newLessonId
class WidgetList extends Component {
    // ({widgets, dispatch})


    constructor(props){
        super(props)

        console.log("lessonn here is"+this.props.lessonId)
        newLessonId = this.props.lessonId
        console.log(this.props)
        this.props.findAllWidgets()
    }

    render() {
        return (
            <div className="container">
                <h1>Widget List: ({this.props.widgets.length})</h1>
                <button className="btn btn-success" hidden={this.props.previewMode} onClick={this.props.save}>Save</button>
                &nbsp;
                <button className="btn btn-dark" onClick={this.props.preview}>Preview</button>
                <ul className="list-group">
                    {this.props.widgets.map(widget => (
                        <WidgetContainer preview={this.props.previewMode} widget={widget} key={widget.id}/>
                    ))}
                </ul>
                <button className="btn btn-danger" onClick={e => (
                    this.props.addWidget()
                )}>+
                </button>
            </div>
        )
    }
}


const stateToPropertiesMapper = (state) => (
    {
        widgets : state.widgets,
        previewMode: state.preview
    }
)


const dispatchToPropsMapper = dispatch => ({
    findAllWidgets: () => findAllWidgets(dispatch,newLessonId),
    addWidget: () => addWidget(dispatch),
    save: () => save(dispatch,newLessonId),
    preview: () => preview(dispatch)
})

export const WidgetApp = connect(stateToPropertiesMapper, dispatchToPropsMapper)(WidgetList)