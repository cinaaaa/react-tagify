# React Tagify #️@🔥
Empower your React applications with effortless #tag and @mention support ❤️

React Tagify is a powerful and pure React component for handling hashtags and mentions in your React app with ease. Give your users the ability to mention others and add tags to their content seamlessly.

## Features

- 🚀 Easy to integrate
- 🎨 Customizable colors and styles
- 🔗 Supports #HashTags and @Mentions
- 📦 Lightweight

## Installation

Install the package using npm or yarn:

```bash
npm i react-tagify
```

or 

```bash
yarn add react-tagify
```
## Usage

1. Import the Tagify component:

```js
import { Tagify } from 'react-tagify';
```

2. Wrap your content with the Tagify component:

```jsx
<Tagify
  onClick={(type, value) => console.log(type, value)}
  tagStyle={{ fontWeight: 'bold' }}
  mentionStyle={{ fontStyle: 'italic' }}
  detectHashtags
  detectMentions
>
  <p>
    This is an example of a #hashtag and a @mention inside a Tagify component.
  </p>
</ReactTagify>
```

## Props

| Prop           | Type     | Default | Description                                                       |
|----------------|----------|---------|-------------------------------------------------------------------|
| children       | ReactNode |   -     | The content to be processed for tags and mentions.                |
| colors         | string   | '#0073e6' | The color of the tags and mentions.                               |
| onClick        | function |   -     | A callback function that is called when a tag or mention is clicked. Receives the clicked element as an argument. |
| tagStyle       | object   |   -     | The CSS style object for hashtag styling.                         |
| mentionStyle   | object   |   -     | The CSS style object for mention styling.                         |
| detectHashtags | boolean  |  true   | Enable or disable the detection of hashtags.                      |
| detectMentions | boolean  |  true   | Enable or disable the detection of mentions.                      |


## Contributing
Please feel free to contribute by submitting a pull request or reporting any issues you encounter while using this component.

## License
React Tagify is licensed under the MIT License.