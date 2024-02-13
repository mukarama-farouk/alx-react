import React from 'react';
import PropTypes from 'prop-types';

const rowStyle = {
  backgroundColor: '#f5f5f5ab'
}

const headerRowStyle = {
  backgroundColor: '#deb5b545'
}


function CourseListRow({isHeader, textFirstCell, textSecondCell}) {
    if (isHeader) {
      return (
        <tr style={rowStyle}>
        {textSecondCell === null ? (
          <th style={headerRowStyle} colSpan="2">{textFirstCell}</th>
        ) : (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        )}
      </tr>
      )
    } else {
      return (
        <tr>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </tr>
      );
    }

}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;