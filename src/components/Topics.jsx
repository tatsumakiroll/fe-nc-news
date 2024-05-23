import React from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../utils/utils";

const Topics = () => {
    const [topics, setTopics] = React.useState([]);
  
    React.useEffect(() => {

    getTopics().then((topics) => {
      const topicArray = topics.map((topic) => topic.slug);
        setTopics(topicArray)
    });
  }, []);

  return (
    <>
      <div className="dropdown">
        <button className="drop-button">
          Topics
        </button>
        <div className="dropdown-content">
         {topics.map((topic)=>(
       <Link className="link-style" key={topic} to={`/articles?topic=${topic}`}>{topic}</Link>
    ))}   
    </div>
      </div>
    </>
  );
};

export default Topics;
