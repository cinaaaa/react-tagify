interface SpanElement {
    text: string;
    color: string;
    style?: any;
    onClick?: (text: string) => void;
}

export const SpanElement = (props: SpanElement) => {
    const defaultStyle = {
        color: props.color,
        cursor: props.onClick ? 'pointer': 'default',
    };

    const spanStyle = props.style || defaultStyle;

    return (
      <span
          style={spanStyle}
          onClick={() => props?.onClick && props.onClick(props.text)}
      >
        {props.text}
      </span>
    )
};