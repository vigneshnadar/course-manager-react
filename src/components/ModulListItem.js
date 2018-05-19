import React,{ Component } from 'react';

class ModuleListItem extends Component {

    render(){
        return  (<li className="list-group-item">
                    Module 1
              <span className="float-right">
                  <i className="fa fa-trash"></i>
                <i className="fa fa-pencil"></i>
              </span>
                    </li>
            );
    }
}

export default ModuleListItem;