export type RemoteData<A, E = Error> =
  | {tag: 'initial'}
  | {tag: 'loading'}
  | {tag: 'success'; result: A}
  | {tag: 'failure'; error: E};
