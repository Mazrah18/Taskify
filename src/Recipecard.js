import React from 'react';

function RecipeCard({ title, imageSrc, author, time }) {
  return (
    <div className="card hover:shadow-lg">
      <img src={imageSrc} alt={title} className="h-32 sm:h-48 w-full object-cover" />
      <div className="m-4">
        <span className="font-bold">{title}</span>
        <span className="block text-gray-500 text-sm">Recipe by {author}</span>
      </div>
      <div className="badge">
        <svg className="inline-block w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>{time}</span>
      </div>
    </div>
  );
}

export default RecipeCard;
