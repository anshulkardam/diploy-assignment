import { useEffect, useState } from "react";
import { Rating, RatingStar } from "flowbite-react";

export const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviewsPerPage, setReviewsPerPage] = useState(3);
    // Function to update reviewsPerPage based on screen width
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setReviewsPerPage(1); // Mobile size
    } else {
      setReviewsPerPage(3); // Laptop/desktop size
    }
  };

  useEffect(() => {
    // Set the initial value on component mount
    handleResize();

    // Add event listener to track window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + reviewsData.length) % reviewsData.length
    );
  };

  return (
    <div className="py-10 flex justify-center items-center">
      <div className="flex items-center gap-6">
         
        <button type="button"  onClick={handlePrev} className="text-white rotate-180 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </button>
        
        <div className="flex flex-wrap items-center gap-10">
          {reviewsData
            .slice(currentIndex, currentIndex + reviewsPerPage)
            .concat(reviewsData.slice(0, Math.max(0, currentIndex + reviewsPerPage - reviewsData.length))) // To wrap around
            .map((review, index) => (
              <div
                key={index}
                className="flex-1 p-6 max-w-sm bg-white rounded-lg shadow-lg border border-gray-200 mr-4"
              >
                <div className="flex flex-col items-center text-center">
                  <img
                    src={review.logo}
                    alt="Platform Logo"
                    className="w-12 h-12 mb-4"
                  />
                  <p className="text-gray-700 font-poppins pb-4">{review.review}</p>
                  <Rating className="text-3xl text-yellow-500">
                    {[...Array(5)].map((_,i) => (
                      <RatingStar key={i} filled={i <= review.rating} />
                    ))}
                  </Rating>
                  <div className="font-semibold text-lg">{review.name}</div>
                  <p className="text-neutral-500">via {review.platform}</p>
                </div>
              </div>
            ))}
        </div>
        <button type="button"  onClick={handleNext} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </button>
      </div>
    </div>
  );
};


const reviewsData = [
  {
    name: "Lili",
    platform: "twitter.com",
    logo: "/google-logo.png",
    review: "I am a web designer, you guys are very inspiring. I wish to see more work from you, maybe more freebies. Using pixfort products made my life easier!",
    rating: 4,
  },
  {
    name: "Tommy haffman",
    platform: "google.com",
    logo: "/twitter-logo.png",
    review: "I am a web designer, you guys are very inspiring. I wish to see more work from you, maybe more freebies. Using pixfort products made my life easier!",
    rating: 4,
  },
  {
    name: "Marc Antoine",
    platform: "twitter.com",
    logo: "/google-logo.png",
    review: "I am a web designer, you guys are very inspiring. I wish to see more work from you, maybe more freebies. Using pixfort products made my life easier!",
    rating: 4,
  },
  {
    name: "Carla Megan",
    platform: "pixfort.com",
    logo: "/pixfort-logo.png",
    review: "I am a web designer, you guys are very inspiring. I wish to see more work from you, maybe more freebies. Using pixfort products made my life easier!",
    rating: 5,
  },
  {
    name: "Sara Smith",
    platform: "google.com",
    logo: "/google-logo.png",
    review: "I am a web designer, you guys are very inspiring. I wish to see more work from you, maybe more freebies. Using pixfort products made my life easier!",
    rating: 5,
  },
];