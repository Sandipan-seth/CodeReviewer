import React, { useContext } from "react";
import Markdown from "react-markdown";

import ReviewContext from "../contexts/ReviewContext";

const CodeReview = () => {
  const { review } = useContext(ReviewContext);

  return (
    <div className="md:w-1/2 w-full p-6 flex flex-col">
      <div className="bg-white p-6 rounded-lg shadow flex-1 overflow-y-auto border border-orange-400">
        <h2 className="text-xl font-semibold mb-4 text-orange-600">
          Review Output
        </h2>
        <div className="text-gray-700 whitespace-pre-wrap">
          <Markdown>
            {review || "Your code review results will appear here."}
          </Markdown>
        </div>
      </div>
    </div>
  );
};

export default CodeReview;
