import { Checkbox, FormControlLabel } from '@mui/material';
import CheckboxIcon from '../../assets/CheckboxIcon';

export default function CustomCheckbox() {
  return (
    <FormControlLabel
      control={<Checkbox defaultChecked checkedIcon={<CheckboxIcon />} />}
      label='Сохранить реквизиты'
      labelPlacement='start'
      sx={{
        '& .MuiFormControlLabel-label': {
          color: 'text.secondary',
          marginRight: '8px',
        },
      }}
    />
  );
}
