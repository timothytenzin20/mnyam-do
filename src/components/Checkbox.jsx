import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Checkboxes = ({ selectedOptions, onChange }) => {
  const options = ['Historical Sites', 'Temples', 'Museums', 'Lakes'];

  const handleChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      onChange([...selectedOptions, value]);
    } else {
      onChange(selectedOptions.filter(option => option !== value));
    }
  };

  return (
    <FormGroup>
      {options.map(option => (
        <FormControlLabel
          key={option}
          control={<Checkbox value={option} checked={selectedOptions.includes(option)} onChange={handleChange} />}
          label={option}
        />
      ))}
    </FormGroup>
  );
};

export default Checkboxes;
