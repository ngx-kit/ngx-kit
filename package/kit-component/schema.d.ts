export interface Schema {
  appRoot?: string;
  export?: boolean;
  htmlTemplate?: string;
  module?: string;
  name: string;
  path?: string;
  skipImport?: boolean;
  sourceDir?: string;
  valueAccessor?: boolean;
}
