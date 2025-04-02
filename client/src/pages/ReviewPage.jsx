import React, { useState } from "react";

function ReviewPage() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [hover, setHover] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const feedbackData = { rating, comment };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/feedback/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedbackData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Feedback submitted successfully!");
        setRating(5);
        setComment("");
        setSubmitted(true);
      } else {
        setMessage(data.message || "Something went wrong.");
      }
    } catch (error) {
      setMessage("Error submitting feedback. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Thank you!</h2>
        <p className="text-gray-700">We appreciate your feedback.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-20">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Feedback Form</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">Rating:</label>
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                className={`text-3xl ${star <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300'} focus:outline-none`}
              >
                ★
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <label htmlFor="comment" className="block text-gray-700 text-sm font-medium mb-2">
            Comments:
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            rows="4"
            placeholder="Your feedback helps us improve..."
          />
        </div>
        
        <button
          type="submit"
          disabled={rating === 0}
          className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${rating === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};
export default ReviewPage;
