import React from 'react';
import TextField from '@mui/material/TextField';

const DateField = ({ label, name, value, onChange }) => (
  <TextField
    label={label}
    name={name}
    type="date"
    value={value}
    onChange={onChange}
    variant="outlined"
    fullWidth
    InputLabelProps={{ shrink: true }}
  />
);

export default DateField;
