export interface SarcArchiveItem {
  years: string;
  label: string;
  theme: 'light-blue' | 'yellow' | 'navy';
  link: string;
}

export const SARC_ARCHIVE: SarcArchiveItem[] = [
  {
    years: '2021-2022',
    label: 'SARC',
    theme: 'light-blue',
    link: '/reports/sarc-21-22.pdf',
  },
  {
    years: '2022-2023',
    label: 'SARC',
    theme: 'yellow',
    link: '/reports/sarc-22-23.pdf',
  },
  {
    years: '2023-2024',
    label: 'SARC',
    theme: 'navy',
    link: '/reports/sarc-23-24.pdf',
  },
];
