import React from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../utils/utils";
import { MenuItem, Menu, Button } from "@mui/material";

const Topics = () => {
    const [topics, setTopics] = React.useState([]);
  
    React.useEffect(() => {

    getTopics().then((topics) => {
      const topicArray = topics.map((topic) => topic.slug);
        setTopics(topicArray)
    });
  }, []);

  return (
        <Menu>
          Topics
        <MenuItem>
         {topics.map((topic)=>(
           <Button className="link-style" key={topic} to={`/articles?topic=${topic}`}>{topic}</Button>
          ))}   
    </MenuItem>
          </Menu>
  );
};

export default Topics;
