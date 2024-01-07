export interface Draft {
  $ref: string;
  uid: string;
  year: number;
  numberOfRounds: number;
  displayName: string;
  shortDisplayName: string;
  status: Athletes;
  athletes: Athletes;
  rounds: Athletes;
  positions: Position[];
  needs: Need[];
  links: Link[];
}

export interface Athletes {
  $ref: string;
}

export interface Link {
  language: string;
  rel: string[];
  href: string;
  text: string;
  shortText: string;
  isExternal: boolean;
  isPremium: boolean;
}

export interface Need {
  team: Athletes;
  positions: Position[];
}

export interface Position {
  $ref: string;
  id: string;
  name: string;
  displayName: string;
  abbreviation: string;
  leaf: boolean;
  parent: Athletes;
}
