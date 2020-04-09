import React from 'react';
import PropTypes from 'prop-types'
import ReactJson from 'react-json-view';
import styles from './forms.module.css';

const SubmittedValues = ({form, values}) => {
  return (
    <React.Fragment>
      <div className={styles['form-header']}>
        <h3>Submitted Values</h3>
      </div>
      <p className="result-description">
        On submit the component returns 2 values to the callback:
        <ul>
          <li>
            <strong>Form:</strong> An object with full info of the form.
          </li>
          <li>
            <strong>Values:</strong> A key:value object.
          </li>
        </ul>
      </p>
      <ReactJson
        src={form}
        name="form"
        enableClipboard={false}
        displayDataTypes={false}
        displayObjectSize={false}
        theme="monokai"
        style={{ padding: '.5rem .25rem' }}
      />
      <ReactJson
        src={values}
        name="values"
        enableClipboard={false}
        displayDataTypes={false}
        displayObjectSize={false}
        theme="monokai"
        style={{ padding: '.5rem .25rem' }}
      />
    </React.Fragment>
  );
};

SubmittedValues.propTypes = {
  form: PropTypes.string,
  values: PropTypes.string,
}

export default SubmittedValues;
