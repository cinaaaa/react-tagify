/*
  - React Tagify @2020
  - MIT Licence
  Author = sina.farhadi@protonmail.com
  Version 0.0.9
  Github = https://github.com/E-RROR/react-tagify
  For Pull Requests & Help Please See Our Github ^
*/
import React from 'react';
import PropTypes from 'prop-types';
// Import Local Compnent
import {TempSpan} from './TempSpan.component';

// React Tagify : )
export const ReactTagify = ({children, colors, tagClicked, tagStyle, mentionStyle}) => {
    // Array Of Childs That in Component
    // We Have To Reach Them With React Children toArray
    const childs = React.Children.toArray((children));

    // We Need To Pass The Loop Variable
    // That Given To Us in Simple Variable
    // Then We Can Customize It
    // This is That Variable
    let input;

    // If Any Element inside Component
    // Mean <ReactTagify> * </ReactTagify>
    if (childs) {
    // Now We Have Child's In Component
    // We Need To Split Childs to Reach Each Element
    // Then Dive into Each Element
    childs.forEach((i) => {

        // We Need To Pass The Loop Variable
        // That Given To Us in Simple Variable
        // Then We Can Customize It
        input = i;

        // Child Is Element
        // Means That The Child Pointed Is An Html Tag
        // Like <p> and We Need To Get This Element Childs
        // To Access Texts Inside
        if (input.props) {
            // Split Texts in Child Of This Props
            // Split Them By The Space's between
            let splitted = input.props.children.split(" ");
            // This Is The Final List That All CHilds Append to It
            // To Make Space Before The First Text When Join Them
            // We Join This At End and Return It
            let tagified_text = [' ']

            // Each String In Splitted List Now Check
            // We Check Them With Regexp
            splitted.forEach((text) => {
                // Text Match Hashtags and Not a Mention
                // This is Hashtag
                if (text.match(/#[a-zA-Z0-9_]+/g) && !text.match(/@[a-zA-Z0-9_]+/g)){
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
                // Text Match Mention and Not a Hashtags
                // This is Mention
                if (text.match(/@[a-zA-Z0-9_]+/g) && !text.match(/#[a-zA-Z0-9_]+/g)){
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
                // This Is Not Hashtag or Mention
                // It's Just Simple Text
                // We Push it to Array to Join it
                // With All Element's
                else if (!text.match(/@[a-zA-Z0-9_]+/g) && !text.match(/#[a-zA-Z0-9_]+/g)) {
                    // Push Not Hashtags texts to Main List
                    tagified_text.push(text)

                    // Push Space In List
                    // Text Splitted at First
                    // We Need to Make Space between Them Again
                    tagified_text.push(' ');
                }
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
        // Means That The Child is A Text Just
        // Like <ReactTagify> text </ReactTagify>
        // We Just Need Read The Main Childs
        if (!input.props) {
            // Split Texts in Child Of This Props
            // Split Them By The Space's between
            let splitted = input.split(" ");
            // This Is The Final List That All Texts Append to It
            // We Join This At End and Return It
            let tagified_text = []
            // This Is Span Element for Cloning
            // Because Children Is Not Element at All
            // And We Make Span Element for It
            let temp_element = <span>temp</span>

            // Each String In Splitted List Now Check
            // We Check Them With Regexp
            splitted.forEach((text) => {
                // Text Match Hashtags and Not a Mention
                // This is Hashtag
                if (text.match(/#[a-zA-Z0-9_]+/g) && !text.match(/@[a-zA-Z0-9_]+/g)){
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
                // Text Match Mentions and Not a Hashtags
                // This is Mentions
                if (text.match(/@[a-zA-Z0-9_]+/g) && !text.match(/#[a-zA-Z0-9_]+/g)){
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
                // This Is Not Hashtag or Mention
                // It's Just Simple Text
                // We Push it to Array to Join it
                // With All Element's
                else if (!text.match(/@[a-zA-Z0-9_]+/g) && !text.match(/#[a-zA-Z0-9_]+/g)) {
                    // Push Not Tagified texts
                    tagified_text.push(text)

                    // Push Space In List
                    // Text Splitted at First
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
// Props Types
ReactTagify.propTypes = {
    // Colors Of Tagified Characters
    colors: PropTypes.string,
    // Custom Style For Each Of Tags
    tagStyle: PropTypes.object,
    // Custom Mentions Styles
    mentionStyle: PropTypes.object,
    // This Called When tagClicked Props Passed
    // Return The Tag Cliked : )
    tagClicked: PropTypes.func
};
// Default [Props]
ReactTagify.defaultProps = {
    // If User Not Mention Colors
    // Default Will Be This
    colors: '#0073e6',
};