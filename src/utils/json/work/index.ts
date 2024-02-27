import workJSON from "./work.json";

/*
'description' can be jsx
'endDate' can be null if the work is ongoing
*/

export interface Work {
  company: string;
  position: string;
  website: string;
  description: string;
  startDate: {
    month: string;
    year: number;
  };
  endDate: null | {
    month: string;
    year: number;
  };
}

export const works: Work[] = workJSON;
