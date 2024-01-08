import * as fs from "fs/promises";
import functions from "./functionTypes";
import {
  InputData,
  TypeScriptTargetLanguage,
  jsonInputForTargetLanguage,
  quicktype,
} from "quicktype-core";

export default async function generateTypes() {
  const targetLanguage = new TypeScriptTargetLanguage();
  const inputData = new InputData();
  const groupInputData = jsonInputForTargetLanguage(targetLanguage);
  for (const fnConfig of functions) {
    // if the type isnt ScoreboardCDN, skip it
    if (fnConfig.typeName !== "ScoreboardCDN") {
      continue;
    }
    const params = Array.isArray(fnConfig.params) ? fnConfig.params : [];
    const jsonSample = JSON.stringify(await fnConfig.fn(...params))
      .replace(/\\"/g, "")
      .replace(/\\/g, "");
    groupInputData.addSource({
      name: fnConfig.typeName,
      samples: [jsonSample],
    });
  }
  inputData.addInput(groupInputData);

  try {
    const { lines } = await quicktype({
      inputData,
      lang: targetLanguage,
      inferEnums: false,
      inferDateTimes: false,
      inferMaps: false,
      leadingComments: [],
      combineClasses: false,
    });
    console.log(lines.join("\n"));

    // write types to /src/types.ts
    const typesFile = "./src/types.ts";
    const types = lines.join("\n");
    await fs.writeFile(typesFile, types);
  } catch (e) {
    console.log(e);
  }
}
