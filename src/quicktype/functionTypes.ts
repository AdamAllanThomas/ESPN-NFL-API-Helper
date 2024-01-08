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

const functions: FunctionConfig[] = [
  {
    fn: getAthletesReferenceList,
    typeName: "ReferenceList",
  },
  {
    fn: getEvents,
    typeName: "Events",
    params: [2023, SeasonType.Regular, 18],
  },
  {
    fn: getFranchisesReferenceList,
    typeName: "ReferenceList",
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
    typeName: "ReferenceList",
  },
  {
    fn: getSeasonsReferenceList,
    typeName: "ReferenceList",
  },
  {
    fn: getTeamReferenceList,
    typeName: "ReferenceList",
  },
  {
    fn: getVenuesReferenceList,
    typeName: "ReferenceList",
  },
];

export default functions;
