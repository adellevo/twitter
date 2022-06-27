import * as React from "react";
import TweetInput from "./TweetInput";
import "./TweetBox.css";

export default function TweetBox(props) {
  console.log('TweetBox: props: ', props);
  const handleOnTweetTextChange = (event) => {
    props.setTweetText(event.target.value);
  };

  const handleOnSubmit = () => {
    const newTweet = {
      id: props.tweets.length,
      name: props.userProfile.name,
      handle: props.userProfile.handle,
      text: props.tweetText,
      comments: 0,
      retweets: 0,
      likes: 0,
    };
    // combine old tweets and new one into array
    props.setTweets([...props.tweets, newTweet]);
    props.setUserProfile((prevState) => ({
      ...prevState.userProfile,
      numTweets: prevState.numTweets + 1,
    }));

    // props.setUserProfile(prevState => {
    //   let profile = userProfile.assign({}, prevState.profile);
    //   profile.numTweets = profile.numTweets + 1;
    //   return { profile };
    // })

    props.setTweetText("");
  };

  return (
    <div className="tweet-box">
      <TweetInput
        handleOnChange={handleOnTweetTextChange}
        value={props.tweetText}
      />

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount text={props.tweets[0].text} />
        <TweetSubmitButton handleOnSubmit={handleOnSubmit} />
      </div>
    </div>
  );
}

export function TweetBoxIcons(props) {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  );
}

export function TweetCharacterCount(props) {
  // ADD CODE HERE
  return <span>{props.text.length}</span>;
}

export function TweetSubmitButton(props) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" onClick={props.handleOnSubmit}>
        Tweet
      </button>
    </div>
  );
}
