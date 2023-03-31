import { detectType, signRemover } from '../helpers';
import type { ElementDetectedType } from '../@types/tagify';
interface SpanElement {
  text: string;
  color: string;
  style?: any;
  onClick?: (text: string, type: ElementDetectedType) => void;
}

export const SpanElement = (props: SpanElement) => {
  const defaultStyle = {
    color: props.color,
    cursor: props.onClick ? 'pointer' : 'default',
  };

  const spanStyle = props.style || defaultStyle;

  return (
    <span
      style={spanStyle}
      onClick={() =>
        props?.onClick && props.onClick(signRemover(props.text), detectType(props.text))
      }
    >
      {props.text}
    </span>
  );
};
