import React from 'react';
// Html Element
// Span Element That Regexped Text Moved In It
// Any Text That Tagified Should Wrap in This TempSpan Component
export const TempSpan = (props) => {
    // Default Styles
    const defaultStyle = {
        color: props.color,
        cursor: props.tagClicked ? 'pointer': 'default',
    };

    // Return Of Temp Span
    // It Will Be An Span Tag
    return (
      <span
          data-testid="tag"
          style={props.style || defaultStyle}
          onClick={() => {
              // If tagClicked Props we Return
              // Value Of The Tag If Clicked
              if (props.tagClicked) {
                  props.tagClicked(props.text);
              }
              // Nothing Do
              else {
                  //
              }
          }}
      >
      {props.text}
      </span>
    )
};
