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

module.exports = {
  Query: {
    getCourses: () => {
      return courses;
    },

    getCourse: (root, args) => {
      const course = courses.filter(course => course._id === args.id);
      return course.pop();
    }
  }
}