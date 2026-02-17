export interface OtherWaysItem {
  title: string;
  text: string;
  textHtml?: string;
  icon: string;
  link?: string | null;
}

export const SECTION_TITLE = 'Other Ways to Give';

export const OTHER_WAYS_ITEMS: OtherWaysItem[] = [
  {
    title: 'Donor-Advised Funds (DAF)',
    text: 'Recommend a grant to Creekside School (EIN [insert]).',
    icon: 'BarChart',
  },
  {
    title: 'Stock & Securities',
    text: 'Potential tax advantages; email giving@creeksideschool.org for instructions.',
    textHtml: 'Potential tax advantages; email <strong>giving@creeksideschool.org</strong> for instructions.',
    icon: 'TrendingUp',
    link: 'mailto:giving@creeksideschool.org',
  },
  {
    title: 'Wire/ACH Transfers',
    text: 'Request routing details at giving@creeksideschool.org.',
    textHtml: 'Request routing details at <strong>giving@creeksideschool.org</strong>.',
    icon: 'TrendingUp',
    link: 'mailto:giving@creeksideschool.org',
  },
  {
    title: 'Checks',
    text: 'Payable to Creekside School, mailed to 5629 Lean Avenue, San Jose, CA 95123.',
    textHtml: 'Payable to Creekside School, mailed to <strong>5629 Lean Avenue, San Jose, CA 95123</strong>.',
    icon: 'Presentation',
  },
  {
    title: 'Legacy/Planned Gifts',
    text: "Name Creekside in your will, trust, or beneficiary designations; we'll provide sample bequest language.",
    icon: 'Heart',
  },
];
