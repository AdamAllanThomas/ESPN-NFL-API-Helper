import * as fs from "fs/promises";
import { quicktypeJSON } from "./quicktypeJSON";

export default async function processEndpoint(
  endpointFunction: (...args: any[]) => Promise<any>,
  endpointTypeName: string,
  functionGroup: string,
  params: any[] = []
) {
  const iterableParams = Array.isArray(params) ? params : [];
  const jsonSample = JSON.stringify(await endpointFunction(...iterableParams));
  const jsonSamples = [jsonSample];
  const { lines } = await quicktypeJSON(endpointTypeName, jsonSamples);
  const code = lines.join("\n");
  const directory = `src/generatedTypes/${functionGroup}`;
  const file = `${directory}/${endpointTypeName}.ts`;
  try {
    await fs.mkdir(directory, { recursive: true });
    await fs.writeFile(file, code, "utf8");
  } catch (error) {
    console.error(`Error writing to file ${file}:`, error);
  }
}
