import { AttachMoney, CreditCard, LocalShipping } from '@mui/icons-material';
import { RubleIcon } from './assets/RubleIcon';

export const SF_PRO_TEXT_FONT_FACES = [
  {
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontWeight: 400,
    fontDisplay: 'swap',
    src: "url('/fonts/SF%20Pro%20Text/SFProText-Regular.woff2') format('woff2'), url('/fonts/SF%20Pro%20Text/SFProText-Regular.ttf') format('truetype')",
  },
  {
    fontFamily: 'SF Pro Text',
    fontStyle: 'italic',
    fontWeight: 400,
    fontDisplay: 'swap',
    src: "url('/fonts/SF%20Pro%20Text/SFProText-RegularItalic.woff2') format('woff2'), url('/fonts/SF%20Pro%20Text/SFProText-RegularItalic.ttf') format('truetype')",
  },
  {
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontWeight: 500,
    fontDisplay: 'swap',
    src: "url('/fonts/SF%20Pro%20Text/SFProText-Medium.woff2') format('woff2'), url('/fonts/SF%20Pro%20Text/SFProText-Medium.ttf') format('truetype')",
  },
  {
    fontFamily: 'SF Pro Text',
    fontStyle: 'italic',
    fontWeight: 500,
    fontDisplay: 'swap',
    src: "url('/fonts/SF%20Pro%20Text/SFProText-MediumItalic.woff2') format('woff2'), url('/fonts/SF%20Pro%20Text/SFProText-MediumItalic.ttf') format('truetype')",
  },
  {
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontWeight: 600,
    fontDisplay: 'swap',
    src: "url('/fonts/SF%20Pro%20Text/SFProText-Semibold.woff2') format('woff2'), url('/fonts/SF%20Pro%20Text/SFProText-Semibold.ttf') format('truetype')",
  },
  {
    fontFamily: 'SF Pro Text',
    fontStyle: 'italic',
    fontWeight: 600,
    fontDisplay: 'swap',
    src: "url('/fonts/SF%20Pro%20Text/SFProText-SemiboldItalic.woff2') format('woff2'), url('/fonts/SF%20Pro%20Text/SFProText-SemiboldItalic.ttf') format('truetype')",
  },
  {
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontWeight: 700,
    fontDisplay: 'swap',
    src: "url('/fonts/SF%20Pro%20Text/SFProText-Bold.woff2') format('woff2'), url('/fonts/SF%20Pro%20Text/SFProText-Bold.ttf') format('truetype')",
  },
  {
    fontFamily: 'SF Pro Text',
    fontStyle: 'italic',
    fontWeight: 700,
    fontDisplay: 'swap',
    src: "url('/fonts/SF%20Pro%20Text/SFProText-BoldItalic.woff2') format('woff2'), url('/fonts/SF%20Pro%20Text/SFProText-BoldItalic.ttf') format('truetype')",
  },
] as const;

export const SELECT_OPTIONS = [
  {
    id: 'bank',
    title: 'Альфа-банк cash-in',
    description: '1 USDT = 61.55 RUR',
    icon: <RubleIcon />,
  },
  {
    id: 'cash',
    title: 'Наличные',
    description: 'Получение в кассе или курьеру',
    icon: <AttachMoney />,
  },
  {
    id: 'card',
    title: 'Банковская карта',
    description: 'Visa, Mastercard, Мир',
    icon: <CreditCard />,
  },
  {
    id: 'courier',
    title: 'Курьерская доставка',
    description: 'Доставка наличных курьером',
    icon: <LocalShipping />,
  },
];

export const STEPS = ['min', '50%', '75%', 'max'];

export const RADIO_GROUP_OPTIONS = [
  { id: 'cardNumber', title: 'Номер карты' },
  { id: 'contractNumber', title: 'Номер договора' },
];
