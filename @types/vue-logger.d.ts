type Messages = unknown[];

export interface VueLogger {
  debug(...messages: Messages): void;
  info(...messages: Messages): void;
  warn(...messages: Messages): void;
  error(...messages: Messages): void;
  fatal(...messages: Messages): void;
}
