import functions from "./functionTypes";
import processEndpoint from "./processEndpoint";

export default async function generateTypes() {
  for (const group of functions) {
    for (const fnConfig of group.functions) {
      // Ensure params is always an array
      const params = Array.isArray(fnConfig.params) ? fnConfig.params : [];

      // Now you can safely use the spread syntax
      await processEndpoint(
        fnConfig.fn,
        fnConfig.typeName,
        group.group,
        params
      );
    }
  }
}
