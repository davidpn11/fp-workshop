## Challenge 4 - RemoteData

For this task, we will be creating this `RemoteData` as a module. make all of your changes at:
`packages/remote-data/src/index.ts`

### Challenge 4.2:

We now need build some helpers, to allow us to generate different outputs depending on the state of Remote data.
The output can be of any type, such as `boolean`, `string`, `JSX.Element` or even `RemoteData`. We will call this
generic output as `B`.

For that we will create 3 methods:

- The `fold` method will allow give one call back method for each state, where that callback will return a type `B`.
  Note that the callbacks should have as parameters the value for each state
- The `successOrElse` is a simpler `fold` where we only have one callback for the `success` case and one for each other scenario.
- The `failureOrElse` is similar to `successOrElse`, but we consider the `failure` case instead of `success`
