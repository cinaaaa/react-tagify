import React from 'react';
import PropTypes from 'prop-types';

export const ReactTagify = ({children, colors, tagClicked}) => {

    // Childs Maked Array
    const childs = React.Children.toArray((children));

    // Html Element
    const TempSpan = (props) => {
        return (
            <span
                style={{
                    color: props.color,
                    cursor: props.tagClicked ? 'pointer':'default',
                }}
                onClick={() => {
                    if (props.tagClicked) {
                        props.tagClicked(props.text);
                    }
                    else {
                        //
                    }
                }}
            >
                <span>{props.text}</span>
            </span>
        )
    };


    return (
        <span>
            { children &&
                <span>
                    {childs.map((i) => {

                        // Handle Inputs and Return at End
                        let input = i;

                        // Child Is Element
                        if (input.props) {
                            let splitted = input.props.children.split(" ");
                            let tagified_text = [' ']

                            splitted.forEach((text) => {
                                if (text.match(/#[a-zA-Z0-9_]+/g) && !text.match(/@[a-zA-Z0-9_]+/g)){
                                    // Temp Child to Replace with last one
                                    tagified_text.push(
                                        <TempSpan
                                            text={text}
                                            color={colors}
                                            tagClicked={tagClicked}
                                            key={Math.floor(Math.random() * 9999999)}
                                        />
                                    );

                                    // Push Space
                                    tagified_text.push(' ');
                                }
                                else if (!text.match(/@[a-zA-Z0-9_]+/g)) {
                                    // Push Non Hashtags texts
                                    tagified_text.push(text)

                                    // Push Space
                                    tagified_text.push(' ');
                                }
                            });

                            splitted.forEach((text) => {
                                if (text.match(/@[a-zA-Z0-9_]+/g)){

                                    // Temp Child to Replace with last one
                                    tagified_text.push(
                                        <TempSpan
                                            text={text}
                                            color={colors}
                                            tagClicked={tagClicked}
                                            key={Math.floor(Math.random() * 9999999)}
                                        />
                                    );

                                    // Push Space
                                    tagified_text.push(' ');
                                }
                            });

                            // Change Target Element in Input
                            let edited_component = React.cloneElement(i, {
                                children: tagified_text,
                            });

                            input = edited_component;
                        };

                        // Child Is String Just
                        if (!input.props) {
                            let splitted = input.split(" ");
                            let tagified_text = []
                            let temp_element = <span>temp</span>

                            splitted.forEach((text) => {
                                if (text.match(/#[a-zA-Z0-9_]+/g) && !text.match(/@[a-zA-Z0-9_]+/g)){
                                    // Temp Child to Replace with last one
                                    tagified_text.push(
                                        <TempSpan
                                            text={text}
                                            color={colors}
                                            tagClicked={tagClicked}
                                            key={Math.floor(Math.random() * 9999999)}
                                        />
                                    );

                                    // Push Space
                                    tagified_text.push(' ');
                                }
                                else if (!text.match(/@[a-zA-Z0-9_]+/g)) {
                                    // Push Non Tags texts
                                    tagified_text.push(text)

                                    // Push Space
                                    tagified_text.push(' ');
                                }
                                if (text.match(/@[a-zA-Z0-9_]+/g)){

                                    // Temp Child to Replace with last one
                                    tagified_text.push(
                                        <TempSpan
                                            text={text}
                                            color={colors}
                                            tagClicked={tagClicked}
                                            key={Math.floor(Math.random() * 9999999)}
                                        />
                                    );

                                    // Push Space
                                    tagified_text.push(' ');
                                }
                            });

                            // Change Target Element in Input
                            let edited_component = React.cloneElement(temp_element, {
                                children : tagified_text,
                            });

                            input = edited_component;
                        };

                        // Return Final Result
                        return (
                            <span
                                key={Math.floor(Math.random() * 9999999)}
                            >
                                {input}
                            </span>
                        )
                    })}
                </span>
            }
        </span>
  );
};

ReactTagify.propTypes = {
    colors: PropTypes.string,
    tagClicked: PropTypes.func
};
ReactTagify.defaultProps = {
    colors: '#0073e6',
};
