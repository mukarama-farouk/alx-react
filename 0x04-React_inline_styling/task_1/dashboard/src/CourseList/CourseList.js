import React from 'react';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
];

const styles = StyleSheet.create({
    table: {
        marginTop: "2em",
        width: "100%",
        border: "1px solid #ddd",
        fontSize: "1.2rem",
        marginBottom: "15em",
        marginLeft: "auto",
        marginRight: "auto",
    }, 
})

function CourseList() {
    return (
        <table id='CourseList'className={css(styles.table)} >
            <thead>
                <CourseListRow textFirstCell="Available courses" textSecondCell={null} isHeader={true}  className={css(styles.th)} />
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} className={css(styles.th)} />
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