/*
 * React Tagify
 * 📛 Powerful Pure React Component For Hashtags and Mentions In You'r React App
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree

 @author sinafarhadi

*/

'use strict';

import React from 'react';
import PropTypes from 'prop-types';
/* Local Components */
import {TempSpan} from './TempSpan.component.jsx';

// React Tagify : )
export const ReactTagify = ({
        children,
        colors, 
        tagClicked, 
        tagStyle, 
        mentionStyle, 
        linkStyle,
        detectHashtags,
        detectLinks,
        detectMentions
    }) => {

    // Array Of Childs That in Component We Have To Reach Them With React Children toArray
    const childs = React.Children.toArray((children));

    let input;

    // If Any Element inside Component
    // Mean <ReactTagify> * </ReactTagify>
    if (childs) {

    childs.forEach((i) => {

        // We Need To Pass The Loop Variable
        input = i;

        // Child Is Element
        // Means That The Child Pointed Is An Html Tag
        // Like <p> and We Need To Get This Element Childs
        // To Access Texts Inside
        if (input.props) {

            // Split Them By The Space's between
            let splitted = input.props.children.split(" ");

            // This Is The Final List That All CHilds Append to It
            let tagified_text = [' '];

            // Each String In Splitted List Now Check
            // We Check Them With Regexp
            splitted.forEach((text) => {

                // This is Hashtag
                if (
                    text.match(/#[a-zA-Z0-9_]+/g) 
                    && !text.match(/@[a-zA-Z0-9_]+/g) 
                    && detectHashtags
                    ){

                    // Pass Text In Temp Span Components
                    // And Push it to a List of All Element's
                    tagified_text.push(
                        <TempSpan
                            text={text}
                            color={colors}
                            style={tagStyle}
                            tagClicked={tagClicked}
                            key={Math.floor(Math.random() * 9999999)}
                        />
                    );

                    // Push Space In List
                    // Text Splitted at First
                    // We Need to Make Space between Them Again
                    tagified_text.push(' ');
                }

                // This is Mention
                if (
                    text.match(/@[a-zA-Z0-9_]+/g) 
                    && !text.match(/#[a-zA-Z0-9_]+/g) 
                    && detectMentions
                    ){

                    // Pass Text In Temp Span Components
                    // And Push it to a List of All Element's
                    tagified_text.push(
                        <TempSpan
                            text={text}
                            color={colors}
                            style={mentionStyle}
                            tagClicked={tagClicked}
                            key={Math.floor(Math.random() * 9999999)}
                        />
                    );

                    // Push Space In List
                    // Text Splitted at First
                    // We Need to Make Space between Them Again
                    tagified_text.push(' ');
                }

                // This is Link
                if (
                    text.match(/(https?:\/\/[^\s]+)/g)
                    && detectLinks
                    ){

                    // Pass Text In Temp Span Components
                    // And Push it to a List of All Element's
                    tagified_text.push(
                        <TempSpan
                            text={text}
                            color={colors}
                            style={linkStyle}
                            tagClicked={tagClicked}
                            key={Math.floor(Math.random() * 9999999)}
                        />
                    );

                    // Push Space In List
                    // Text Splitted at First
                    // We Need to Make Space between Them Again
                    tagified_text.push(' ');
                }

                // It's Just Simple Text
                else if (
                    !text.match(/@[a-zA-Z0-9_]+/g) 
                    && !text.match(/#[a-zA-Z0-9_]+/g) 
                    && !text.match(/(https?:\/\/[^\s]+)/g) 
                    ){

                    // Push Not Hashtags texts to Main List
                    tagified_text.push(text)

                    // Push Space In List
                    // Text Splitted at First
                    // We Need to Make Space between Them Again
                    tagified_text.push(' ');
                };

            });

            // Generate React Element From The Given Child Tag
            // If Child Is <p> For Example we  Clone New <p>
            // And Pass New Modified Texts in It
            let edited_component = React.cloneElement(i, {
                children: tagified_text,
            });

            // The Variable Of Given Loop Variable Now Can Change
            // And Return At The End
            input = edited_component;
        };

        // Child Is Not !Element
        // Like <ReactTagify> text </ReactTagify>
        if (!input.props) {

            let splitted = input.split(" ");
            let tagified_text = [];

            // This Is Span Element for Cloning
            // Because Children Is Not Element at All
            // And We Make Span Element for It
            let temp_element = <span>temp</span>

            // We Check Them With Regexp
            splitted.forEach((text) => {

                // This is Hashtag
                if (
                    text.match(/#[a-zA-Z0-9_]+/g)
                    && !text.match(/@[a-zA-Z0-9_]+/g)
                    && detectHashtags
                    ){

                    // Push it to a List of All Element's
                    tagified_text.push(
                        <TempSpan
                            text={text}
                            color={colors}
                            style={tagStyle}
                            tagClicked={tagClicked}
                            key={Math.floor(Math.random() * 9999999)}
                        />
                    );

                    // We Need to Make Space between Them Again
                    tagified_text.push(' ');
                }

                // This is Mention
                if (
                    text.match(/@[a-zA-Z0-9_]+/g) 
                    && !text.match(/#[a-zA-Z0-9_]+/g)
                    && detectMentions
                    ){

                    // And Push it to a List of All Element's
                    tagified_text.push(
                        <TempSpan
                            text={text}
                            color={colors}
                            style={mentionStyle}
                            tagClicked={tagClicked}
                            key={Math.floor(Math.random() * 9999999)}
                        />
                    );

                    // We Need to Make Space between Them Again
                    tagified_text.push(' ');
                }

                if (
                    text.match(/(https?:\/\/[^\s]+)/g)
                    && detectLinks
                    ){

                    // Pass Text In Temp Span Components
                    // And Push it to a List of All Element's
                    tagified_text.push(
                        <TempSpan
                            text={text}
                            color={colors}
                            style={linkStyle}
                            tagClicked={tagClicked}
                            key={Math.floor(Math.random() * 9999999)}
                        />
                    );

                    // Push Space In List
                    // Text Splitted at First
                    // We Need to Make Space between Them Again
                    tagified_text.push(' ');
                }

                // It's Just Simple Text
                else if (
                    !text.match(/@[a-zA-Z0-9_]+/g) 
                    && !text.match(/#[a-zA-Z0-9_]+/g) 
                    && !text.match(/(https?:\/\/[^\s]+)/g)
                    ){

                    // Push Not Tagified texts
                    tagified_text.push(text)

                    // We Need to Make Space between Them Again
                    tagified_text.push(' ');
                }
            });

            // Generate React Element From The Given Child Tag
            // If Child Is <p> For Example we  Clone New <p>
            // And Pass New Modified Texts in It
            let edited_component = React.cloneElement(temp_element, {
                children : tagified_text,
            });

            // The Variable Of Given Loop Variable Now Can Change
            // And Return At The End
            input = edited_component;
        };
    })} /* End Of Condition */

    // All Condition's Applied Now This Child
    // We Clone Them and Joined Them
    // Return It Now
    return (
        <span
            key={Math.floor(Math.random() * 9999999)}
        >
            {input}
        </span>
    )
};
ReactTagify.propTypes = {
    colors: PropTypes.string,
    tagStyle: PropTypes.object,
    mentionStyle: PropTypes.object,
    linkStyle: PropTypes.object,
    tagClicked: PropTypes.func,
    detectHashtags: PropTypes.bool,
    detectMentions: PropTypes.bool,
    detectLinks: PropTypes.bool,
};
ReactTagify.defaultProps = {
    colors: '#0073e6',
    detectHashtags: true,
    detectMentions: true,
    detectLinks: true,
};
