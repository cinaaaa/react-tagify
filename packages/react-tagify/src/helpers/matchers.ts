type getMatchedTypeProps = {
  text: string;
  detectHashtags: boolean;
  detectMentions: boolean;
};

export const getMatchedType = (args: getMatchedTypeProps) => {
  const matchers = [
    { type: 'hashtag', pattern: /#[a-zA-Z0-9_]+/g },
    { type: 'mention', pattern: /@[a-zA-Z0-9_]+/g },
  ];

  for (const matcher of matchers) {
    if (matcher.pattern.test(args.text)) {
      if (
        (matcher.type === 'hashtag' && args.detectHashtags) ||
        (matcher.type === 'mention' && args.detectMentions)
      ) {
        return matcher.type;
      }
    }
  }
  return null;
};
