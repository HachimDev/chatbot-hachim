import { createChatBotMessage } from "react-chatbot-kit";
import GetToKnowOptions from "../components/GetToKnowOptions/GetToKnowOptions";

const config = {
  botName: "HachimBot",
  initialMessages: [
    createChatBotMessage(`Hi, my name is HachimBot, How can I help you ?`, {
      widget: "GetToKnowOptions",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  widgets: [
    {
      widgetName: "GetToKnowOptions",
      widgetFunc: (props) => <GetToKnowOptions {...props} />,
    },
  ],
};

export default config;
