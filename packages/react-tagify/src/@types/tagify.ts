export interface TagifyProps {
    // Tagify options
    children: React.ReactNode;

    // Styling props
    color?: string;
    tagStyle?: React.CSSProperties;
    mentionStyle?: React.CSSProperties;

    // Option props
    detectHashtags?: boolean;
    detectMentions?: boolean;

    // Event handlers
    onClick?: (tag: string) => void;
}