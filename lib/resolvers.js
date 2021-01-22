'use strict';

const courses = new Array(3).fill(
  {
    _id: 'ID',
    title: 'String',
    teacher: 'String',
    description: 'String',
    topic: 'String',
  }
);

module.exports =  {
  getCourses: () => {
    return courses;
  }
}