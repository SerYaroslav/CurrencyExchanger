import React from "react";
import { connect } from 'react-redux';

import {onDateSwitched} from "../../actions";

import "./date-switcher.scss";

const DateSwitcher = ({ dates, onDateSwitched, loading }) => {
   const itemDate = ["Today", "7 days ago", "30 days ago", "1 year ago"];

  return (
    <div className="check-wrapper">
      {itemDate.map(date => {
        return (
          <div key={date} className="check-container">
            <input
              disabled={loading}
              type="checkbox"
              id={date}
              name={date}
              value={date}
              checked={dates.includes(date)}
              onChange={changeEvent => {
                onDateSwitched(changeEvent.target.value);
              }}
              className="form-check"
            />
            <label htmlFor={date} className="form-check-label">
              {date}
            </label>
          </div>
        );
      })}
    </div>
   );
 };

const mapStateToProps = ({ dates,loading }) => {
  return { dates, loading };
};

const mapDispatchToProps = dispatch => {
  return {
    onDateSwitched: switchedDate => dispatch(onDateSwitched(switchedDate))
  };
}; 

export default connect(mapStateToProps, mapDispatchToProps)(DateSwitcher); 
