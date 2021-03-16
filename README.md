# React Tagify
📛 React Component For Extracting Hashtags, Mentions, Links In Your React App
<br />
<br />
<img src="https://img.shields.io/github/package-json/v/E-RROR/react-tagify/master?color=green&label=Version&style=flat-square"/>
<span>
<img src="https://img.shields.io/npm/v/react-tagify?color=red&style=flat-square" />
</span>
<span>
<img src="https://img.shields.io/circleci/build/github/E-RROR/react-tagify?style=flat-square" />
</span>
<span>
<img src="https://img.shields.io/codefactor/grade/github/E-RROR/react-tagify?style=flat-square" />
</span>

### Install
```
$ yarn add react-tagify
```
or
```
$ npm i react-tagify
```
### Usage
```jsx
import React from "react";
import ReactDOM from "react-dom";
import { ReactTagify } from "react-tagify";

function App() {
  return (
    <div>
      <ReactTagify 
        colors={"red"} 
        tagClicked={(tag)=> alert(tag)}>
        <p>
          “You might not think that #programmers are #artists,
          but programming is an extremely creative #profession.
          Its logic-based creativity”
          @JohnRomero
        </p>
      </ReactTagify>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```
[![Live Example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-tagify-example-1-rr3gf?fontsize=14&hidenavigation=1&theme=dark)

### Demo

![oie_3162851d5gaPaFm](https://user-images.githubusercontent.com/25178257/71611319-e0e2e180-2bbd-11ea-8cc5-e9e2c2b91a7f.gif)

![oie_3163031dwZ6pVBw](https://user-images.githubusercontent.com/25178257/71611320-e0e2e180-2bbd-11ea-9c73-5fd21359a393.gif)

![oie_3162943PEBY6ic9](https://user-images.githubusercontent.com/25178257/71611321-e0e2e180-2bbd-11ea-8822-9e6d63a5779c.gif)

![oie_31641480Ic8MPad](https://user-images.githubusercontent.com/25178257/71611397-70889000-2bbe-11ea-863e-3ac79b8342ec.gif)


### Use custom styling
Provide custom styling to tags and mentions

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { ReactTagify } from "react-tagify";

function App() {
  const tagStyle = {
    color: 'red',
    fontWeight: 500,
    cursor: 'pointer'
  };

  const mentionStyle = {
    color: 'green',
    textDecoration: 'underline',
    cursor: 'pointer'
  }

  return (
    <div>
      <ReactTagify 
        tagStyle={tagStyle}
        mentionStyle={mentionStyle}
        tagClicked={(tag) => alert(tag)}
        >
        <p>
          “You might not think that #programmers are #artists,
          but programming is an extremely creative #profession.
          Its logic-based creativity”
          @JohnRomero
        </p>
      </ReactTagify>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```
[![Edit react-tagify-custom-styling](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/cocky-rosalind-z3izz?fontsize=14&hidenavigation=1&theme=dark)


### Props/Options

| Name | Type| Default | Description |
| --- | --- | --- | --- |
| tagClicked | PropTypes.func | null | Trigger a function and Its Return You The Tag Clicked |
| colors  | PropTypes.string | '#0073e6' (Navy Blue) | Custom Color on Tags |
| tagStyle  | PropTypes.object | undefined | Custom style for tags |
| linkStyle  | PropTypes.object | undefined | Custom style for links |
| mentionStyle  | PropTypes.object | undefined | Custom style for mentions |
| detectHashtags  | PropTypes.bool | true | detecting Hashtags enabled |
| detectMentions  | PropTypes.bool | true | detecting Mentions enabled |
| detectLinks | PropTypes.bool | true | detecting Links enabled |


## Issues
The recommended medium to report and track issues is by opening one on [Github](https://github.com/E-RROR/react-tagify/issues).
