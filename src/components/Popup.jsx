import React from 'react';
import { Typography, Dialog, DialogContent, DialogTitle } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

const Popup = ({ open, onClose, title, imageSrc, content }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        style: {
          position: 'fixed',
          left: 10,
          width: '40%', // Adjust width as needed
          maxWidth: 'none',
          margin: 5,
          height: '100%',
        },
      }}
    >
      <DialogTitle>
        {title}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        {imageSrc && <img src={imageSrc} alt="Popup" style={{ width: '100%', marginBottom: '1rem' }} />}
        <Typography variant="body1">{content}</Typography>
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
