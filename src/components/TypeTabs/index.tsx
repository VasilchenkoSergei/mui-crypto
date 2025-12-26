import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import type { ITabsProps } from './types';

export default function TypeTabs(props: ITabsProps) {
  const { sx } = props;
  const [activeTab, setActiveTab] = useState('banks');

  return (
    <Tabs
      value={activeTab}
      onChange={(_, value) => setActiveTab(value)}
      sx={sx}
    >
      <Tab label='Банки' value='banks' />
      <Tab label='Наличные' value='cash' />
      <Tab label='Курьер' value='courier' />
    </Tabs>
  );
}
