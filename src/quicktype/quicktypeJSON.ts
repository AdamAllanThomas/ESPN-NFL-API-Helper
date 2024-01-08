import {
  InputData,
  jsonInputForTargetLanguage,
  quicktype,
  TypeScriptTargetLanguage,
} from "quicktype-core";

export async function quicktypeJSON(
  inputData: InputData,
  typeName: string,
  jsonString: string
) {
  const targetLanguage = new TypeScriptTargetLanguage();
  const jsonInput = jsonInputForTargetLanguage(targetLanguage);

  await jsonInput.addSource({
    name: typeName,
    samples: [jsonString],
  });

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
