import React,{ Component } from 'react';
// import { Link } from 'react-router-dom';

class LessonListItem extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return  (<li className="list-group-item">
                    {this.props.title}
                <span className="float-right">
                  <i className="fa fa-trash"></i>
                <i className="fa fa-pencil"></i>
              </span>
            </li>
        );
    }
}

export default LessonListItem;