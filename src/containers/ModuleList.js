import React,{ Component } from 'react';
import ModulListItem  from '../components/ModulListItem';


class ModuleList extends Component {

    render(){
        return (
            <ul className="list-group">
                <ModulListItem/>
                <ModulListItem/>
            </ul>
        )
    }
}

export default ModuleList;