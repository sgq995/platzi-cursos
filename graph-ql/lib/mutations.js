'use strict'

const connectDb = require('../db');
const { ObjectID } = require('mongodb');

const errorHandler = require('./error-handler');

module.exports = {
  createCourse: async (root, { input }) => {
    const defaults = {
      teacher: '',
      topic: ''
    };

    const newCourse = Object.assign(defaults, input);
    let db;
    let course;

    try {
      db = await connectDb();
      course = await db.collection('courses').insertOne({ ...newCourse });
      newCourse._id = course.insertedId;
    } catch (error) {
      errorHandler(error);
    }

    return newCourse;
  },

  editCourse: async (root, { id, input }) => {
    const newCourse = input;
    let db;
    let course;

    try {
      db = await connectDb();
      await db.collection('courses').updateOne(
        { _id: ObjectID(id) },
        { $set: newCourse }
      );
      course = await db.collection('courses').findOne({ _id: ObjectID(id) });
    } catch (error) {
      errorHandler(error);
    }

    return course;
  },

  deleteCourse: async (root, { id }) => {
    let db;
    let result;

    try {
      db = await connectDb();
      result = await db.collection('courses').deleteOne({ _id: ObjectID(id) });
    } catch (error) {
      errorHandler(error);
    }

    return result.deleteCount > 0;
  },

  addPeople: async (root, { courseId, personId }) => {
    let db;
    let person;
    let course;

    try {
      db = await connectDb();

      course = await db.collection('courses').findOne({ _id: ObjectID(courseId) });
      if (!course) throw new Error(`El curso ${courseId} no existe!`);

      person = await db.collection('students').findOne({ _id: ObjectID(personId) });
      if (!person) throw new Error(`El estudiante ${personId} no existe!`);

      await db.collection('courses').updateOne(
        { _id: ObjectID(courseId) },
        { $addToSet: { people: ObjectID(personId) } }
      );
    } catch (error) {
      errorHandler(error);
    }

    return course;
  },

  createPerson: async (root, { input }) => {
    const newStudent = input;
    let db;
    let course;

    try {
      db = await connectDb();
      course = await db.collection('students').insertOne({ ...newStudent });
      newStudent._id = course.insertedId;
    } catch (error) {
      errorHandler(error);
    }

    return newStudent;
  },

  editPerson: async (root, { id, input }) => {
    const newStudent = input;
    let db;
    let student;

    try {
      db = await connectDb();
      await db.collection('students').updateOne(
        { _id: ObjectID(id) },
        { $set: newStudent }
      );
      student = await db.collection('students').findOne({ _id: ObjectID(id) });
    } catch (error) {
      errorHandler(error);
    }

    return student;
  },

  deletePerson: async (root, { id }) => {
    let db;
    let result;

    try {
      db = await connectDb();
      result = await db.collection('students').deleteOne({ _id: ObjectID(id) });
    } catch (error) {
      errorHandler(error);
    }

    return result.deleteCount > 0;
  },
}
