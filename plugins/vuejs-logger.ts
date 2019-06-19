import Vue from 'vue';
import VueLogger from 'vuejs-logger';
import { ILoggerOptions } from 'vuejs-logger/dist/vue-logger/interfaces/logger-options';
import { LogLevels } from 'vuejs-logger/dist/vue-logger/enum/log-levels';

const options: ILoggerOptions = {
  // optional : defaults to true if not specified
  isEnabled: true,
  // required ['debug', 'info', 'warn', 'error', 'fatal']
  logLevel: LogLevels.DEBUG,
  // optional : defaults to false if not specified
  stringifyArguments: false,
  // optional : defaults to false if not specified
  showLogLevel: true,
  // optional : defaults to false if not specified
  showMethodName: true,
  // optional : defaults to '|' if not specified
  separator: '|',
  // optional : defaults to false if not specified
  showConsoleColors: true,
};

// Vue.use(VueLogger, options);
VueLogger.install(Vue, options);
