export const iconButtonStyles = {
  width: { xxs: '22px', xs: '24px' },
  height: { xxs: '22px', xs: '24px' },
  borderRadius: '50%',
  backgroundColor: 'background.default',
  color: 'text.primary',
  '&:hover': {
    backgroundColor: 'background.default',
  },
};

export const paperStyles = {
  p: '12px 10px',
  borderRadius: 3,
  backgroundColor: 'background.paper',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '4px',
};

export const inputStyles = {
  '& fieldset': { border: 'none' },
  '& input': {
    fontSize: {
      xxs: '10px !important',
      xs: '13px !important',
      sm: '16px !important',
    },
    padding: '0',
    textAlign: 'center',
    maxWidth: '140px',
  },
};
