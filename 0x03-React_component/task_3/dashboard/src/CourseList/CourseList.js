import React from 'react';
import './CourseList.css';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';

const listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
];

function CourseList() {
    return (
        <table id='CourseList'>
            <thead>
                <CourseListRow textFirstCell="Available courses" textSecondCell={null} isHeader={true} />
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
            </thead>
            <tbody>
                {listCourses.length > 0 ? (
                    listCourses.map(({ id, name, credit }) => <CourseListRow key={id} textFirstCell={name} textSecondCell={credit} />)
                ) : (
                <CourseListRow textFirstCell="No course available yet" />
                )}
            </tbody>
        </table>
    )
}

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
  };
  
  CourseList.defaultProps = {
    listCourses: [],
};
export default CourseList;