import React, { ReactNode } from 'react';
import { TempSpan } from './span';

interface ReactTagifyProps {
  children?: ReactNode;
  colors?: string;
  tagClicked?: (tag: string) => void;
  tagStyle?: React.CSSProperties;
  mentionStyle?: React.CSSProperties;
  linkStyle?: React.CSSProperties;
  detectHashtags?: boolean;
  detectMentions?: boolean;
  detectLinks?: boolean;
}

const matchers = [
  { type: 'hashtag', pattern: /#[a-zA-Z0-9_]+/g },
  { type: 'mention', pattern: /@[a-zA-Z0-9_]+/g },
  { type: 'link', pattern: /(https?:\/\/[^\s]+)/g },
];

const getMatchedType = (text: string, detectHashtags: boolean, detectMentions: boolean, detectLinks: boolean) => {
  for (const matcher of matchers) {
    if (matcher.pattern.test(text)) {
      if ((matcher.type === 'hashtag' && detectHashtags) || (matcher.type === 'mention' && detectMentions) || (matcher.type === 'link' && detectLinks)) {
        return matcher.type;
      }
    }
  }
  return null;
};

const ReactTagify: React.FC<ReactTagifyProps> = ({
  children,
  colors = '#0073e6',
  tagClicked,
  tagStyle,
  mentionStyle,
  linkStyle,
  detectHashtags = true,
  detectMentions = true,
  detectLinks = true,
}) => {
  const processText = (input: string) => {
    const splitted = input.split(' ');
    const tagifiedText: Array<ReactNode> = [];

    splitted.forEach((text, index) => {
      const matchedType = getMatchedType(text, detectHashtags, detectMentions, detectLinks);

      const styleMap = {
        hashtag: tagStyle,
        mention: mentionStyle,
        link: linkStyle,
      };

      if (matchedType) {
        tagifiedText.push(
          <TempSpan
            key={`${text}-${index}`}
            text={text}
            color={colors}
            style={styleMap[matchedType]}
            tagClicked={tagClicked}
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
        // @ts-ignore
        return React.cloneElement(child, { children: processText(childContent) });
      }
    } else if (typeof child === 'string') {
      return <span>{processText(child)}</span>;
    }

    return child;
  };

  const processedChildren = React.Children.map(children, processChildren);

  return <>{processedChildren}</>;
};

export default ReactTagify;