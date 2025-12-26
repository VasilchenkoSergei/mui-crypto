import { Box, Grid, Stack, Typography } from '@mui/material';
import CustomCheckbox from './components/CustomCheckbox';
import CustomRadioGroup from './components/CustomRadioGroup';
import CustomSelect from './components/CustomSelect';
import CustomStepper from './components/CustomStepper';
import CustomTextField from './components/CustomTextField';
import TypeTabs from './components/TypeTabs';
import CountersBlock from './components/CountersBlock';
import { RADIO_GROUP_OPTIONS, SELECT_OPTIONS, STEPS } from './constants';

export default function MainPage() {
  return (
    <Box component='form' noValidate autoComplete='off'>
      <Grid container direction='column'>
        <Typography variant='h1' sx={{ marginBottom: 2 }}>
          Способ вывода
        </Typography>
        <TypeTabs sx={{ marginBottom: 2 }} />
        <CustomSelect options={SELECT_OPTIONS} sx={{ marginBottom: 2 }} />
        <CountersBlock />
        <CustomStepper steps={STEPS} activeStep={1} sx={{ marginBottom: 2 }} />
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          sx={{ marginBottom: 2 }}
        >
          <Typography variant='h1'>Реквизиты</Typography>
          <CustomCheckbox />
        </Stack>
        <Stack direction='column' gap={2}>
          <Stack
            direction='column'
            sx={{
              backgroundColor: (theme) => theme.palette.background.paper,
              borderRadius: '8px',
              border: (theme) => `1px solid ${theme.palette.border.default}`,
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none !important',
              },
              paddingTop: '10px',
            }}
          >
            <CustomRadioGroup options={RADIO_GROUP_OPTIONS} />
            <CustomTextField value='Номер карты' />
          </Stack>
          <CustomTextField value='ФИО владельца' />
          <CustomTextField value='Адрес' />
        </Stack>
      </Grid>
    </Box>
  );
}
