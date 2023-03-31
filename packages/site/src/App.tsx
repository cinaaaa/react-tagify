import { useEffect, useState } from "react";
import { Tagify } from "react-tagify";
import "./App.css";


const mentionOrTag = (type: "tag" | "mention" | null) => type === 'tag' ? '#' : '@'; 

// Simple snack bar component
const SnackBar = ({ text }: { text: string }) => {
  return (
    <div className="container">
      <Tagify color="red">{text}</Tagify>
    </div>
  );
};

const Code = ({ children }: any) => {
  const styles = {
    code: {
      background: "#000",
      border: "1px solid #000",
      borderRadius: "5px",
      padding: "15px",
      fontFamily: "monospace",
      fontSize: "20px",
      marginBottom: "40px",
      marginTop: "10px",
      display: "block",
    },
  };

  return <code style={styles.code}>{children}</code>;
};

const TweetGrid = ({ tweets, setText }: any) => {
  const styles = {
    tweet: {
      flex: "1 0 300px",
      boxSizing: "border-box",
      padding: "10px",
    },
  };

  return (
    <div className="grid">
      {tweets.map((tweet: any, index: number) => (
        <Tweet key={index} {...tweet} style={styles.tweet} setText={setText} />
      ))}
    </div>
  );
};

const Tweet = ({ username, displayName, avatarUrl, content, style, setText }: any) => {
  const styles = {
    tweetContainer: {
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "15px",
      margin: "10px",
      maxWidth: "500px",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      display: "flex",
      alignItems: "center",
      marginBottom: "10px",
    },
    avatar: {
      borderRadius: "50%",
      height: "48px",
      width: "48px",
      marginRight: "10px",
    },
    nameContainer: {
      display: "flex",
      flexDirection: "column",
    },
    displayName: {
      fontWeight: "bold",
    },
    username: {
      color: "#657786",
    },
    content: {
      marginBottom: "10px",
    },
  };

  return (
    <div style={{ ...styles.tweetContainer, ...style }}>
      <div style={styles.header}>
        <img
          src={avatarUrl}
          alt={`${displayName} avatar`}
          style={styles.avatar}
        />
        <div className="name-container">
          <span style={styles.displayName}>{displayName}</span>
          <span style={styles.username}>@{username}</span>
        </div>
      </div>
      <Tagify
        onClick={(text, type) =>
          setText(
            `Oh, you've just clicked on "${mentionOrTag(type)}${text}" and the type of it is "${mentionOrTag(type)}-${type}"`
          )
        }
      >
        <p style={styles.content}>{content}</p>
      </Tagify>
    </div>
  );
};

const SNACK_BAR_TIMEOUT = 9000;
function App() {
  const [text, setText] = useState<string>("");

  useEffect(() => {
    if (text) {
      // clear it after 3000 ms
      setTimeout(() => {
        setText("");
      }, SNACK_BAR_TIMEOUT);
    }
  }, [text]);

  const sampleTweets = [
    {
      username: "Sina",
      displayName: "Sina",
      avatarUrl: "https://api.dicebear.com/6.x/pixel-art/svg?seed=Sina",
      content: "This is a #React component with help of #ReactTagify!",
      timestamp: "10 minutes ago",
    },
    {
      username: "Jane",
      displayName: "Jane",
      avatarUrl: "https://api.dicebear.com/6.x/pixel-art/svg?seed=Jane",
      content:
        "Now it's easy peasy to add #tag and @mention support to your #React applications!",
      timestamp: "10 minutes ago",
    },
  ];

  const sampleTweets2 = [
    {
      username: "Micheal",
      displayName: "Michael",
      avatarUrl: "https://api.dicebear.com/6.x/pixel-art/svg?seed=Michael",
      content:
        "As @steve_jobs says, this is a #React component with help of #ReactTagify!",
      timestamp: "10 minutes ago",
    },
    {
      username: "Sofia",
      displayName: "Sofia",
      avatarUrl: "https://api.dicebear.com/6.x/pixel-art/svg?seed=Sofia",
      content:
        "React tagify was the best #product I've ever used. I'm so happy with it! @wladimir_putin",
      timestamp: "10 minutes ago",
    },
  ];

  return (
    <div className="App" style={{ textAlign: "left" }}>
      <h1>✨ React Tagify #️@</h1>
      <Tagify
        onClick={(text, type) =>
          setText(
            `Oh, you've just clicked on "${mentionOrTag(type)}${text}" and the type of it is "${mentionOrTag(type)}-${type}"`
          )
        }
      >
        <h3>
          Empower your React applications with effortless #tag and @mention
          support ❤️
        </h3>
      </Tagify>
      <TweetGrid tweets={sampleTweets} setText={setText} />
      <TweetGrid tweets={sampleTweets2} setText={setText} />
      <br />
      <section>
        <h2>Install React Tagify 🔥 on your project</h2>
        <div style={{ marginTop: 30, marginBottom: 30 }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg"
            width="80"
            height="auto"
          />
          <Code>$ npm i react-tagify</Code>
        </div>
        <div style={{ marginTop: 30, marginBottom: 30 }}>
          {/** Yarn */}
          <img
            src="https://raw.githubusercontent.com/yarnpkg/assets/master/yarn-kitten-full.png"
            width="100"
            height="auto"
          />
          <Code>$ yarn add react-tagify</Code>
        </div>
        <div style={{ marginTop: 30, marginBottom: 30 }}>
          {/** PNPM */}
          <img
            src="https://d33wubrfki0l68.cloudfront.net/2f3acb83b7d2349f2194bc38c0f22f295908dc33/43f95/img/pnpm-no-name-with-frame.svg"
            width="45"
            height="auto"
          />
          <Code>$ pnpm i react-tagify</Code>
        </div>
      </section>
      {text && <SnackBar text={text} />}
    </div>
  );
}

export default App;
