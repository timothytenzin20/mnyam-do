import React from 'react';
import TextField from '@mui/material/TextField';

const IntField = ({ label, name, value, onChange }) => (
  <TextField
    label={label}
    name={name}
    type="number"
    value={value}
    onChange={onChange}
    variant="outlined"
    fullWidth
  />
);

export default IntField;
