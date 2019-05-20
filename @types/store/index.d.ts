declare namespace Store {
  namespace Root {
    interface State {
      version?: string | number;
    }
  }
  namespace Auth {
    interface State {
      'is-authed': boolean;
    }
  }
}
