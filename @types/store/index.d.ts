declare module Store.Root {
  interface State {}
}

declare module Store.Auth {
  interface State {
    'is-authed': boolean;
  }
}
