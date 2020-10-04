## Story-1

#### Description
A user wants to be able to create a new D&D character on the Characters home page.

#### Engineering Detail
* We need to create a new form **modal** that once submitted, creates a new character.
* We need to create a global state that can display the new "create character" modal form on button toggle
* We need to create a button toggle on the characters page
* We need to create a new mutation titled `createCharacter` to initiate the creation on submission.
```js
// Mutation should look like this
const CREATE_CHARACTER = gql`
  mutation createCharacter($name: string, $level: number, $classes: [number]) {
    createCharacter(name: $name, level: $level, classes:$classes) {
      id
      name
      level
      classes {
        id
        name
        hitdice
      }
    }
  }
`;
```

#### Acceptance Criteria

- [ ] A user should be able to toggle a **form-modal** from the characters page.
- [ ] A user should be able to submit the required data to create a new character.
- [ ] A user should see their newly created character in the list of Characters on submission.