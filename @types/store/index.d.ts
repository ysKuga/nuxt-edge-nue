declare namespace Store {
  interface Root {
    State: {};
  }
  interface Auth {
    State: {
      'is-authed': boolean;
    };
  }
}
