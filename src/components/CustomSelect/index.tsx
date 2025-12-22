import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import SelectOption from './SelectOption';
import type { ICustomSelectProps } from './types';

export default function CustomSelect(props: ICustomSelectProps) {
  const { options, sx } = props;
  const [selectedOption, setSelectedOption] = useState('bank');

  const renderValue = (selectedId: string) => {
    const selected = options.find(({ id }) => id === selectedId);
    if (!selected) return null;

    return <SelectOption option={selected} />;
  };

  return (
    <Select
      labelId="payment-method-label"
      value={selectedOption}
      onChange={(e) => setSelectedOption(e.target.value)}
      renderValue={renderValue}
      IconComponent={KeyboardArrowDownIcon}
      sx={sx}
    >
      {options.map((option) => (
        <MenuItem key={option.id} value={option.id}>
          <SelectOption option={option} />
        </MenuItem>
      ))}
    </Select>
  );
}
