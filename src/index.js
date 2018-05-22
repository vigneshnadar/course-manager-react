import React from 'react';
import ReactDOM from 'react-dom';
import Helloworld from './hello';
import CourseManager from './containers/CourseManager';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import ModuleListItem from "./components/ModulListItem";

ReactDOM.render(
    //<CourseManager/>
    <div>
        <ModuleListItem title="react module"/>
    </div>
    ,
    document.getElementById('root'));