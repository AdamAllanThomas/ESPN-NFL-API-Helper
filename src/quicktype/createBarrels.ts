import * as fs from "fs";
import * as path from "path";
import { Dirent, PathLike } from "fs";

export function createBarrels(): void {
  const generatedTypesDir: PathLike = "./src/generatedTypes";

  // Create the main index file
  createMainIndex(generatedTypesDir);

  // Create individual index files for each group
  const groups: string[] = fs
    .readdirSync(generatedTypesDir, { withFileTypes: true })
    .filter((dirent: Dirent) => dirent.isDirectory())
    .map((dirent: Dirent) => dirent.name);

  groups.forEach((group: string) => {
    createGroupIndex(generatedTypesDir, group);
  });
}

function createMainIndex(directory: PathLike): void {
  const mainIndexFile: string = path.join(directory.toString(), "index.ts");
  const groups: string[] = fs
    .readdirSync(directory, { withFileTypes: true })
    .filter((dirent: Dirent) => dirent.isDirectory())
    .map((dirent: Dirent) => dirent.name);

  const exportStatements: string = groups
    .map((group: string) => `export * from './${group}';`)
    .join("\n");

  fs.writeFileSync(mainIndexFile, exportStatements);
}

function createGroupIndex(directory: PathLike, group: string): void {
  const groupDir: string = path.join(directory.toString(), group);
  const groupIndexFile: string = path.join(groupDir, "index.ts");

  const files: string[] = fs
    .readdirSync(groupDir)
    .filter((file: string) => file.endsWith(".ts") && file !== "index.ts");

  const exportStatements: string = files
    .map((file: string) => `export * from './${path.basename(file, ".ts")}';`)
    .join("\n");

  fs.writeFileSync(groupIndexFile, exportStatements);
}
