import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextFieldGroup = ({ field, value, type, label, error, onChange }) => {
  return (
    <div className="form-group">
      <label className="control-label">{label}</label>
      <input className={classnames("form-control", { 'is-invalid': error })} 
        onChange={onChange} 
        name={field} 
        value={value} 
        type={type} 
        placeholder={label}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
}

TextFieldGroup.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

TextFieldGroup.defaultProps = {
  type: 'text'
}

export default TextFieldGroup;
