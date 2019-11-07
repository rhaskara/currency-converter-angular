// Currency class with id, name, watching flag and optional numerical value for rates and exchange value
export class Currency {
  id: string;
  name: string;
  rate?: number;
  value?: number;
  watching: boolean;
}