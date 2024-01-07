import {
  getAthletesReferenceList,
  getEvents,
  getFranchisesReferenceList,
  getLeaders,
  getNews,
  getPositionsReferenceList,
  getSeasonsReferenceList,
  getTeamReferenceList,
  getVenuesReferenceList,
} from "../api/reference-list";
import { SeasonType } from "../types/api-enums";

interface FunctionConfig {
  fn: (...args: any[]) => Promise<any>;
  typeName: string;
  params?: any[];
}

interface FunctionGroup {
  group: string;
  functions: FunctionConfig[];
}

const functions: FunctionGroup[] = [
  {
    group: "reference-list",
    functions: [
      {
        fn: getAthletesReferenceList,
        typeName: "AthletesReferenceList",
      },
      {
        fn: getEvents,
        typeName: "Events",
        params: [2023, SeasonType.Regular, 18],
      },
      {
        fn: getFranchisesReferenceList,
        typeName: "FranchisesReferenceList",
      },
      {
        fn: getLeaders,
        typeName: "Leaders",
      },
      {
        fn: getNews,
        typeName: "News",
      },
      {
        fn: getPositionsReferenceList,
        typeName: "PositionsReferenceList",
      },
      {
        fn: getSeasonsReferenceList,
        typeName: "SeasonsReferenceList",
      },
      {
        fn: getTeamReferenceList,
        typeName: "TeamReferenceList",
      },
      {
        fn: getVenuesReferenceList,
        typeName: "VenuesReferenceList",
      },
    ],
  },
];

export default functions;
