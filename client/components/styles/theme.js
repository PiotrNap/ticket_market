import { hex2rgba } from '../utils';

const BG = '#fcfaff';
const ACCENT = '#664495';

const theme = {
  colors: {
    purple: ACCENT,
    lightPurple: '#8c5ccc',
    darkText: '#1a191c',
    lightText: '#2e2e30',
    white: BG,
    transPurple: hex2rgba(ACCENT, 0.1),
    shadowWhite: hex2rgba(BG, 0.1),
  },

  Inter:
    'Inter, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',

  fontSizes: {
    small: '0.75rem',
    normal: '1rem',
    large: '1.2rem',
    big: '1.5rem',
    Xbig: '2.5rem',
  },
  mbSm: '1.2rem',
  mbMd: '1.6rem',
  mbMd: '2rem',
  mbLg: '3.5rem',
};

export default theme;
