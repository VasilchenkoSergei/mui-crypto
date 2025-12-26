import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';
import type { ICustomTextFieldProps } from './types';

export default function CustomTextField(props: ICustomTextFieldProps) {
  const { value, sx } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setCurrentValue('');
  };

  return (
    <TextField
      value={currentValue}
      onChange={(e) => setCurrentValue(e.target.value)}
      placeholder='Введите текст'
      disabled={!isEditing}
      fullWidth
      sx={sx}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position='end'>
              {isEditing ? (
                <>
                  <IconButton onClick={handleSaveClick} size='small'>
                    <CheckIcon />
                  </IconButton>
                  <IconButton onClick={handleCancelClick} size='small'>
                    <CloseIcon />
                  </IconButton>
                </>
              ) : (
                <IconButton onClick={handleEditClick} size='small'>
                  <DriveFileRenameOutlineIcon />
                </IconButton>
              )}
            </InputAdornment>
          ),
        },
      }}
    />
  );
}
