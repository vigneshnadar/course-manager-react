import React,{ Component } from 'react';

class LessonTab extends React.Component {
 render() { return(
  <ul className="nav nav-tabs">
   <li className="nav-item"><a className="nav-link active"
  href="#">Active Tab</a></li>
   <li className="nav-item"><a className="nav-link"
  href="#">Another Tab</a></li>
  </ul>
);}}

export default LessonTab;
