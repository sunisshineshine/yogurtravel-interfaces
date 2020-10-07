interface NavItem {
  content: string;
  navigate: () => void;
}

type Week = Date[];

interface Clock {
  hours: number;
  minutes: number;
}
