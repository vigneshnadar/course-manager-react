import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

class ModuleListItem extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return  (<li className="list-group-item">
            <Link to= {`/course/${this.props.courseId}/module/${this.props.moduleId}`}>
                {this.props.title}
            </Link>
              <span className="float-right">
                  <i className="fa fa-trash"></i>
                <i className="fa fa-pencil"></i>
              </span>
                    </li>
            );
    }
}

export default ModuleListItem;