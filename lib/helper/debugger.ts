import debug from "debug";
import path from "path";

export function Debug(filename: string) {
  return debug(`db-schema:${path.basename(filename, ".js")} ---> `);
}
