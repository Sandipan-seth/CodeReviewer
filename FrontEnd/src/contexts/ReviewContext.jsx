import { createContext, useState } from "react";

const ReviewContext = createContext();
export default ReviewContext;

export const ReviewProvider = ({ children }) => {
    const [review, setReview] = useState("");
    
    return (
        <ReviewContext.Provider value={{ review, setReview }}>
        {children}
        </ReviewContext.Provider>
    );
}