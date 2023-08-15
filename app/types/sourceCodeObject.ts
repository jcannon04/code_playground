export type SourceCodeObject =
| {
    css: string;
    html: string;
    js: string;
  }
| {
    source: string;
    output: string;
    language: string;
  };