import React from 'react';
import TextField from '@mui/material/TextField';

const CustomTextField = ({ label, name, value, onChange, multiline = false }) => (
  <TextField
    label={label}
    name={name}
    value={value}
    onChange={onChange}
    multiline={multiline}
    rows={multiline ? 4 : 1}
    variant="outlined"
    fullWidth
  />
);

export default CustomTextField;
