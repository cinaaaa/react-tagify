declare module 'react-tagify' {
  interface IProps {
    colors?: string;
    tagClicked?: (tag: string) => void;
  }

  class ReactTagify extends React.Component<IProps, any> {}
  export { ReactTagify }; 
}
