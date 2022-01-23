## Challenge 4 - RemoteData

For this task, we will be creating this `RemoteData` as a module. make all of your changes at:

`packages/remote-data/src/index.ts`

### Challenge 4.3:

We will now build some helpers to map over the `RemoteData` structures
For that we will create 3 methods:

`fold`: This method will allow give one callback method for each state, where that callback will return a type `B`.

> Note that the callbacks should have as parameters the value for each state. Check the type

`successOrElse`: This is a simpler `fold` where we only have one callback for the `success` case and one for each other scenario.
`failureOrElse`: Similar to `successOrElse`, but now we consider the `failure` case instead of `success`

> Check the type signatures at the exercise file
