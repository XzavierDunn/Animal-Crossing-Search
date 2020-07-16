export interface Villagers {
  sourceSheet: SourceSheet;
  name: string;
  iconImage: string;
  photoImage: string;
  houseImage: string;
  species: string;
  gender: Gender;
  personality: Personality;
  subtype: Subtype;
  hobby: Hobby;
  birthday: string;
  catchphrase: string;
  favoriteSong: string;
  favoriteSaying: string;
  defaultClothing: number;
  wallpaper: string;
  flooring: string;
  furnitureList: string;
  furnitureNameList: string;
  filename: string;
  uniqueEntryId: string;
  colors: Color[];
  styles: Style[];
}

export enum Color {
  Beige = 'Beige',
  Black = 'Black',
  Blue = 'Blue',
  Brown = 'Brown',
  Colorful = 'Colorful',
  Gray = 'Gray',
  Green = 'Green',
  LightBlue = 'Light blue',
  Orange = 'Orange',
  Pink = 'Pink',
  Purple = 'Purple',
  Red = 'Red',
  White = 'White',
  Yellow = 'Yellow',
}

export enum Gender {
  Female = 'Female',
  Male = 'Male',
}

export enum Hobby {
  Education = 'Education',
  Fashion = 'Fashion',
  Fitness = 'Fitness',
  Music = 'Music',
  Nature = 'Nature',
  Play = 'Play',
}

export enum Personality {
  BigSister = 'Big Sister',
  Cranky = 'Cranky',
  Jock = 'Jock',
  Lazy = 'Lazy',
  Normal = 'Normal',
  Peppy = 'Peppy',
  Smug = 'Smug',
  Snooty = 'Snooty',
}

export enum SourceSheet {
  Villagers = 'Villagers',
}

export enum Style {
  Active = 'Active',
  Cool = 'Cool',
  Cute = 'Cute',
  Elegant = 'Elegant',
  Gorgeous = 'Gorgeous',
  Simple = 'Simple',
}

export enum Subtype {
  A = 'A',
  B = 'B',
}
