## Story-1

#### Description
A user wants to be able to create a new D&D character on the Characters home page.

#### Engineering Detail
* We need to create a new form on the Characters home page
* We need to create a new mutation titled `createCharacter` to initiate the creation.
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

- [ ] A user should use a form to submit the required data to create a new character.
- [ ] A user should see an error message if their form data is incorrect upon submission.
- [ ] A user should see their newly created character in the list of Characters on submission.