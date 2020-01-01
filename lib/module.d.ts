import { CSSProperties } from "react";
declare module 'react-tagify' {
  interface IProps {
    colors?: string;
    tagStyle?: CSSProperties;
    mentionStyle?: CSSProperties;
    tagClicked?: (tag: string) => void;
  }

  class ReactTagify extends React.Component<IProps, any> {}
  export { ReactTagify }; 
}
