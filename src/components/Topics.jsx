import React from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../utils/utils";
import { MenuItem, Menu, Button, ButtonGroup } from "@mui/material";

const Topics = () => {
  const [topics, setTopics] = React.useState([]);

  React.useEffect(() => {
    getTopics().then((topics) => {
      const topicArray = topics.map((topic) => topic.slug);
      setTopics(topicArray);
    });
  }, []);

  return (
    <ButtonGroup sx={{ marginTop: "1rem" }}>
      Topics
      {topics.map((topic) => (
        <Button
          className="link-style"
          key={topic}
          to={`/articles?topic=${topic}`}
        >
          {topic}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default Topics;
