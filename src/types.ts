export type Logger = {
  info(msg: string): void;
  warn(msg: string): void;
  error(msg: string): void;
}

export type TextFormatter = {
  info(msg: string):   string;
  warn(msg: string):   string;
  status(msg: string): string;
  error(msg: string):  string;
}

export type MessageRemovalConfig = {
  logger: Logger;
  textFormatter: TextFormatter;
}
