## Challenge 4 - RemoteData

On this module we will be looking into the `RemoteData` type class.

This is a type used to express different states of an IO operation. It has the following states:

- `initial` represents the initial state, where the operation hasn’t started yet
- `loading`, represents when the IO operation is in progress
- `success`, represents that the operation has terminated successfully, and its `data` is available
- `failure`, represents that the operation has failed to complete, and it contains an `error`

For this task, we will be creating this `RemoteData` as a module. make all of your changes at:

`packages/remote-data/src/index.ts`

For each challenge you will be requested to build a different part of the `RemoteData` type class.

### Challenge 4.1:

Build the constructors methods for each state of RemoteData, that is: `initial`, `loading`, `success`, `failure`.
The type for each have been defined
