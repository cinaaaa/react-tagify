import React, { ReactNode } from 'react';
import { SpanElement } from './span';
import { getMatchedType } from '../helpers';
import type { TagifyProps } from '../@types/tagify';

const Tagify: React.FC<TagifyProps> = ({
  children,
  color = '#0073e6',
  onClick,
  tagStyle,
  mentionStyle,
  detectHashtags = true,
  detectMentions = true,
}) => {
  const processText = (input: string) => {
    const splitted = input.split(' ');
    const tagifiedText: Array<ReactNode> = [];

    splitted.forEach((text, index) => {
      const matchedType = getMatchedType({
        text,
        detectHashtags,
        detectMentions,
      });

      const styleMap = {
        hashtag: tagStyle,
        mention: mentionStyle,
      };

      if (matchedType) {
        tagifiedText.push(
          <SpanElement
            key={`${text}-${index}`}
            text={text}
            color={color}
            style={styleMap[matchedType]}
            onClick={onClick}
          />,
        );
      } else {
        tagifiedText.push(text);
      }

      if (index < splitted.length - 1) {
        tagifiedText.push(' ');
      }
    });

    return tagifiedText;
  };

  const processChildren = (child: ReactNode): ReactNode => {
    if (React.isValidElement(child)) {
      const { children: childContent } = child.props;

      if (typeof childContent === 'string') {
        return React.cloneElement(child, { children: processText(childContent) } as {
          children: React.ReactNode;
        });
      }
    } else if (typeof child === 'string') {
      return <>{processText(child)}</>;
    }

    return child;
  };

  const processedChildren = React.Children.map(children, processChildren);

  return <>{processedChildren}</>;
};

export default Tagify;
