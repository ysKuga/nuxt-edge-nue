import Vue from 'vue';
import VueLogger from 'vuejs-logger';

const options = {
  // optional : defaults to true if not specified
  isEnabled: true,
  // required ['debug', 'info', 'warn', 'error', 'fatal']
  logLevel: 'debug',
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

Vue.use(VueLogger, options);
