import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import AddProject from './AddProject';

class Projects extends Component {
    constructor() {
        super();
        this.state = {
            projects: []
        };
    }

    componentWillMount() {
        this.setState({
            projects: [
                {
                    title: "Hello",
                    category: "World"
                },
                {
                    title: "App",
                    category: "Test"
                },
                {
                    title: "Squawk",
                    category: "Bird"
                }
            ]
        });
    }

    handleAddProject(project) {
        var projects = this.state.projects;
        projects.push(project);
        this.setState({projects: projects});
    }

    render() {
        let projectItems = this.state.projects.map(project => {
            return (
                <ProjectItem project={project} />
            );
        });
        return (
            <div>
                <AddProject addProject={this.handleAddProject.bind(this)} />
                <ul>{projectItems}</ul>                
            </div>
        );
    }
}

export default Projects;