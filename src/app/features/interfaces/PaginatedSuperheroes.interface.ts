export interface PaginatedSuperheroes {
  length:     number;
  size:       number;
  page:       number;
  firstPage:  number;
  lastPage:   number;
  startIndex: number;
  endIndex:   number;
  items:      Hero[];
}

export interface Hero {
  biography:   Biography;
  work:        Work;
  slug:        string;
  images:      Images;
  appearance:  Appearance;
  connections: Connections;
  id:          number;
  name:        string;
  powerstats:  Powerstats;
}

export interface Appearance {
  weight:    string[];
  hairColor: string;
  gender:    string;
  race:      string;
  eyeColor:  string;
  height:    string[];
}

export interface Biography {
  firstAppearance: string;
  placeOfBirth:    string;
  aliases:         string[];
  fullName:        string;
  publisher:       string;
  alterEgos:       string;
  alignment:       string;
}

export interface Connections {
  groupAffiliation: string;
  relatives:        string;
}

export interface Images {
  sm: string;
  xs: string;
  lg: string;
  md: string;
}

export interface Powerstats {
  combat:       number;
  power:        number;
  strength:     number;
  speed:        number;
  intelligence: number;
  durability:   number;
}

export interface Work {
  occupation: string;
  base:       string;
}
