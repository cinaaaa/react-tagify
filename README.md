# React Tagify
📛 Powerful Pure React Component For Hashtags and Mentions In You'r React App
<br />
<br />
<img src="https://img.shields.io/github/package-json/v/E-RROR/react-tagify/master?color=green&label=Version&style=flat-square"/>
<span>
<img src="https://img.shields.io/npm/v/react-tagify?color=red&style=flat-square" />
</span>
<span>
<img src="https://img.shields.io/npm/dw/react-tagify?style=flat-square" />
</span>
<span>
<img src="https://img.shields.io/github/size/E-RROR/react-tagify/lib/ReactTagify.js?style=flat-square" />
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
      <ReactTagify colors={"red"} tagClicked={(tag)=>alert(`You clicked on ${tag} tag`)}>
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
  }

  return (
    <div>
      <ReactTagify 
        tagStyle={tagStyle}
        mentionStyle={mentionStyle}>
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


![oie_31641480Ic8MPad](https://sinafarhadi.ir/assets/img.png)



### Test
You Can Simply Test React Tagify with

```shell
  yarn test
```
or 
```shell
  npm test
```


### Props/Options

| Name | Type| Default | Description |
| --- | --- | --- | --- |
| tagClicked | PropTypes.func | null | Trigger a function and Its Return You The Tag Clicked |
| colors  | PropTypes.string | '#0073e6' (Navy Blue) | Custom Color on Tags |
| tagStyle  | PropTypes.object | undefined | Custom style for tags |
| mentionStyle  | PropTypes.object | undefined | Custom style for mentions |


## Issues
The recommended medium to report and track issues is by opening one on [Github](https://github.com/E-RROR/react-tagify/issues).

## Contributing
 Any kind of contribution is welcome! Simply follow the next steps:

* Fork the project.
* Create a new branch.
* Make your changes and write tests when practical.
* Commit your changes to the new branch.
* Send a pull request, it will be reviewed shortly.

In case you want to add a feature, please create a new issue and briefly explain what the feature would consist of. For bugs or requests, before creating an issue please check if one has already been created for it.
