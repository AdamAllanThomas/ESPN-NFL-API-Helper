import { getNews } from "./api/reference-list";
import generateTypes from "./quicktype/generateTypes";
import processEndpoint from "./quicktype/processEndpoint";

export * from "./api/reference-list";

generateTypes();
