import { MenuItem } from '../../../dashboard/utils/interfaces/menu-items.interface';

export const PAGE_LINKS: MenuItem[] = [
  {
    label: 'Dashboard',
    icon: 'bi bi-grid-fill fs-icon-normal',
    path: '/dashboard',
    isExact: true,
  },
  {
    label: 'Bills',
    icon: 'bi bi-currency-dollar fs-icon-normal fs-icon-small',
    path: '/dashboard/bills',
    isExact: false,
  },
  {
    label: 'Goals',
    icon: 'bi bi-trophy-fill fs-icon-normal',
    path: '/dashboard/goals',
    isExact: false,
  },
  {
    label: 'Profile',
    icon: 'bi bi-person-fill fs-icon-normal fs-icon-small',
    path: '/dashboard/profile',
    isExact: false,
  },
];

export const SETTINGS_LINKS: MenuItem[] = [
  {
    label: 'Support',
    icon: 'bi bi-headphones fs-icon-normal',
    path: 'https://chatgpt.com/',
    isExact: false,
  },
  {
    label: 'Settings',
    icon: 'bi bi-gear-fill fs-icon-normal',
    path: '/dashboard/settings',
    isExact: false,
  },
  {
    label: 'Log out',
    icon: 'bi bi-box-arrow-left fs-icon-normal',
    path: '/auth',
    isExact: false,
    className: 'text-danger',
  },
];
