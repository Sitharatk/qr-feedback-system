import React, { useEffect, useState } from "react";

function Admin() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/feedback/all`);
        const data = await response.json();
        if (response.ok) {
          setReviews(data);
        } else {
          setError(data.message || "Failed to fetch reviews");
        }
      } catch (error) {
        setError("Error fetching reviews");
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);



  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Admin Feedback Panel</h2>
      {reviews.length === 0 ? (
        <p>No feedback available.</p>
      ) : (
        <ul className="space-y-4">
          {reviews.map((review) => (
            <li key={review._id} className="border p-4 rounded-md shadow">
              <p className="text-yellow-500">⭐ {review.rating} / 5</p>
              <p className="text-gray-700">{review.comment}</p>
             
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Admin;
