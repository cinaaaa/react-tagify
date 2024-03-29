export interface TagifyProps {
  children: React.ReactNode;

  color?: string;
  tagStyle?: React.CSSProperties;
  mentionStyle?: React.CSSProperties;

  detectHashtags?: boolean;
  detectMentions?: boolean;

  onClick?: (tag: string, type: ElementDetectedType) => void;
}

export type ElementDetectedType = 'tag' | 'mention' | null;
