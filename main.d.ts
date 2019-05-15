declare namespace csv_to_json {
  export type JSON = { [key: string]: string };
  export type Callback = (Error, Struct) => void;

  export function from_file(filename: string, cb: Callback): Promise<JSON[]>|undefined;
}

declare function csv_to_json(csv: string): JSON[];

export = csv_to_json;

