2:18 PM






# Dynamic Name List

A small React project that uses JavaScript’s `.map()` method to render a list of names dynamically.

## Screenshot

![Dynamic Name List](screenshots/screenshot-1.png)

## Concepts Practised

- Rendering lists with `.map()`
- Creating JSX from array values
- Assigning stable React keys
- Using semantic list elements
- Creating horizontal layouts with Flexbox
- Wrapping items with `flex-wrap`
- Styling dynamically rendered elements

## How It Works

The component maps over an array of names and creates one list item for every name.

```text
Names array → .map() → React list items
```

Adding or removing a name from the array automatically updates the displayed list.

## Run the Project

```bash
npm install
npm run dev
```