import functions from "./functionTypes";
import processEndpoint from "./processEndpoint";

export default async function generateTypes() {
  for (const group of functions) {
    for (const fnConfig of group.functions) {
      const params = Array.isArray(fnConfig.params) ? fnConfig.params : [];
      await processEndpoint(
        fnConfig.fn,
        fnConfig.typeName,
        group.group,
        params
      );
    }
  }
}
