import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import type { ICustomRadioGroupProps } from './types';

export default function CustomRadioGroup(props: ICustomRadioGroupProps) {
  const { options, sx } = props;

  return (
    <RadioGroup defaultValue={options[0].id} name='radio-buttons-group' row sx={sx}>
      {options.map(({ id, title }) => (
        <FormControlLabel key={id} value={id} control={<Radio />} label={title} />
      ))}
    </RadioGroup>
  );
}
