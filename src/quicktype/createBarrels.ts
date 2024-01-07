import * as fs from "fs";

export function createBarrels() {
  const generatedTypesDir = "./src/generatedTypes";
  const mainIndexFile = `${generatedTypesDir}/index.ts`;

  const groups = fs
    .readdirSync(generatedTypesDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  const exportStatements = groups
    .map((group) => {
      `export * from './${group}';`;
    })
    .join("\n");

  fs.writeFileSync(mainIndexFile, exportStatements);
}
