# @ngrx/store

A state management library for Angular applications. ngrx/store provies a predictable state container ans a single, immutable data store.

## Core Concepts

@ngrx/store consist of three main parts:
- Single Application Store
- Reducers
- Actions

```
        |---> Reducer ---|
Actions |                | State
        |--- Component <-|
```

### Store

A 'single source of truth', or 'database' for Angular applications. A store will maintain an accurate representation of any relevant application state if the *store contract design pattern* is adhered to.

### Reducer

A pure function that accepts two arguments: the previous state and an action. Reducers are the 'tables' within the store 'database'. Reducers represent sections of state within an application and should therefore be structured and composed accordingly.

```Typescript
export interface Reducer<type> {
    (state: type, action: Action): type;
}
```

Reducer functions need to know how to initialise state because application state will be undefined upon startup. Reducers must also always return a *new* state, not simply mutate an *existing* state. If state isn't changed as a result of a reducer function, then it should return the existing state without any change.

### Actions

Actions communicate to reducers when state needs to be updated. User interaction that causes a change in state must be expressed as an action. By using the action pipeline, any changes in state leave a complete, serialisable representation.

Action Pipelines:
```
Action Dispatch ---> Reducer --->n New State ---> Store
```

```Typescript
export interface Action {
    type: string,
    payload?: any
}
```

Actions require a `type` property which is a string - each action must have a unique string. Actions can also have an optional payload, which can be of type `any` e.g. search queries, product lists, search results.

### Projecting Data
The store is an Observable, so typical JavaScript collections can be used (`map`, `filter`, `reduce` etc.). More powerful RxJS observable operators can be used as well.