import React, { useContext } from "react";
import Markdown from "react-markdown";

import ReviewContext from "../contexts/ReviewContext";

const CodeReview = () => {
  const { review } = useContext(ReviewContext);

  return (
    <div className="md:w-1/2 w-full p-6 flex flex-col bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-lg shadow flex-1 overflow-x-scroll border border-orange-500">
        <h2 className="text-xl font-semibold mb-4 text-orange-400">
          Review Output
        </h2>
        <div className="text-gray-300 whitespace-pre-wrap prose prose-invert max-w-none">
          <Markdown>
            {review || "Your code review results will appear here."}
          </Markdown>
        </div>
      </div>
    </div>
  );
};

export default CodeReview;
