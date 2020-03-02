import React, { Component } from 'react';
import './App.css';
import Course from './component/Course';
import NewCourseForm from './component/NewCourseForm';
import { CourseService } from './services/CourseService';
import { CategoryService } from './services/CategoryService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      categories: []
    }
    this.startData = this.startData.bind(this);
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);

    this.startData();
  }

  async startData() {
    const [courses, categories] = await Promise.all([
      CourseService.list(),
      CategoryService.list()
    ]);

    this.setState({
      courses,
      categories
    })
  }
  
  async add(course) {
    const { courses } = this.state;
    const newCourse = await CourseService.create(course);
    courses.push(newCourse);
    this.setState({courses});
  }

  async remove(courseId) {
    const { courses } = this.state;
    const courseIndex = courses.findIndex(course => course.id === courseId);
    await CourseService.remove(courseId);
    courses.splice(courseIndex, 1);
    this.setState({courses});
  }

  render() {
    const { state } = this;
    return (
      <div>
        <NewCourseForm onSubmit={this.add} categories={state.categories}/>
        <ul className="courses-list">
          {state.courses.map(course => <Course course={course} key={course.id} onRemove={this.remove}/>)}
        </ul>
      </div>
    );
  }
}

export default App;
