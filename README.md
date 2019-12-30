# React Tagify
📌 Say Welcome to Hashtags and Mentions To You'r React App
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
```js
$ yarn add react-tagify
```
### Usage
```jsx
import { ReactTagify } from 'react-tagify';

function App() {
  return (
    <div>
      <ReactTagify>
        <p>I Love My Country #USA #united_states </p>
        And Also My President @trump
        <span>And My #lovely #parents </span>
        <div>But I Hate @iran</div>
      </ReactTagify>
    </div>
  );
}
```
And You Will See
<br />
<img 
  src="https://sinafarhadi.ir/assets/images/install.png"
  width="400"
/>


### Props/Options

> tagClicked - Call It and Its Return You The Tag Clicked
```jsx
    <ReactTagify tagClicked={(tag)=> console.log(tag) }>
       <p>Which Country Do You Love #usa #canada </p>
    </ReactTagify>
```
You Will See
<br />
<img 
  src="https://sinafarhadi.ir/assets/images/click.png"
  width="400"
/>

<br />

> colors - Custom Color on Tags
```jsx
    <ReactTagify colors={'red'} >
       <p>Colorfull #tag or @mention</p>
    </ReactTagify>
```
You Will See
<br />
<img 
  src="https://sinafarhadi.ir/assets/images/colorfull.png"
  width="400"
/>
