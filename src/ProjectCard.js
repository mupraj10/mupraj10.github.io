import React, {Component} from 'react';
import projects from './projects-data';

export default class PojectCard extends Component{
    constructor(props){
        super(props)
    }


    render(){
        const projectPage = this.props.match.params.name
        function findProject(project){
            return project.link === projectPage;
        }

        const currentProject = projects.find(findProject);

        console.log(currentProject);
        
        return (
            <span> in project card </span>
        )
    }
}
