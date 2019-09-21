export const State: Store.Root.State = {
  version: '1.0.0',
};

export default (): Store.Root.State => ({ ...State });
