// tslint:disable:no-global-tslint-disable no-any
declare module 'yargs-parser' {
  const parseOptions: any;
  const yargsParser: <T = any>(args: string | string[], options?: typeof parseOptions) => T;
  export = yargsParser;
}
