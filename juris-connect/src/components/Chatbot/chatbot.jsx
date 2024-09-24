import React, { useState } from "react";
import Chatbot from "react-simple-chatbot";
import { Segment, Icon } from "semantic-ui-react";
import "./chatbot.css";

function chatBot() {
  const [isChatVisible, setIsChatVisible] = useState(false);

  const steps = [
    { id: "Greet", message: "hellow,welcome", trigger: "ask name" },
    {
      id: "ask name",
      message: "Please enter your name",
      trigger: "waiting1",
    },
    {
      id: "waiting1",
      user: true,
      trigger: "name",
    },
    {
      id: "name",
      message: "Hi {previousValue}, please send your issue",
      trigger: "issue",
    },
    {
      id: "issue",
      message: "To get the law information",
      trigger: "waiting2",
    },
    {
      id: "waiting2",
      user: true,
      trigger: "step1",
    },
    {
      id: "step1",
      message: "To write a deed correctly, please follow the steps below:",
      trigger: "step2",
    },
    {
      id: "step2",
      message: `1. Take the photo from Kachcheri.               2. If there is a plan for the land.         3. Old deed.`,
      end: true,
    },
  ];

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        className="chatbot-button"
        onClick={() => setIsChatVisible(!isChatVisible)}
      >
        Chat
      </button>

      {/* Chatbot Popup */}
      {isChatVisible && (
        <Segment className="chatbot-segment">
          {/* Close Icon */}
          <Icon
            name="close"
            onClick={() => setIsChatVisible(false)} // Close chatbot
            className="close-icon"
          />

          {/* Chatbot Component */}
          <div style={{ paddingTop: "0px", paddingBottom: "10px" }}>
            <Chatbot steps={steps} />
          </div>
        </Segment>
      )}
    </>
  );
}
export default chatBot;
