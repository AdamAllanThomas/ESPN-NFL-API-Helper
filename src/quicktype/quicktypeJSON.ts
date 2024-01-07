import {
  InputData,
  TypeScriptTargetLanguage,
  jsonInputForTargetLanguage,
  quicktype,
} from "quicktype-core";

export async function quicktypeJSON(typeName: string, jsonStrings: string[]) {
  const targetLanguage = new TypeScriptTargetLanguage();
  const jsonInput = jsonInputForTargetLanguage(targetLanguage);
  for (const jsonString of jsonStrings) {
    await jsonInput.addSource({
      name: typeName,
      samples: [jsonString],
    });
  }
  const inputData = new InputData();
  inputData.addInput(jsonInput);
  return await quicktype({
    inputData,
    lang: targetLanguage,
    inferEnums: false,
    inferDateTimes: false,
    inferMaps: false,
    leadingComments: [],
    rendererOptions: {
      "just-types": true,
    },
  });
}
