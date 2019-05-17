declare namespace csv_to_json {
  export type Json = { [key: string]: string };
  export type Callback = (error: Error, result: Json) => void;

  export function from_file(filename: string, cb: Callback): Promise<Json[]>|undefined;

  export function parseCSVFile(filename: string, cb: Callback): Promise<Json[]>|undefined;
  export function parseCSV(csv: string): Json[];
}

declare function csv_to_json(csv: string): csv_to_json.Json[];

export = csv_to_json;

