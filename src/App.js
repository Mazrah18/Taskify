import React from 'react';
import RecipeCard from './Recipecard';
import LoadMoreButton from './LoadMoreButton';

function App() {
  return (
    <div className="App">
      <div className="grid md:grid-cols-3">
        <div className="md:col-span-1 md:flex md:justify-end">

        </div>
        <main className="px-16 py-6 md:col-span-2 bg-gray-100">
     

          {/* Latest Recipes */}
          <div>
            {/* Render your latest recipes using RecipeCard component */}
   
            <RecipeCard title="5 Bean Chili Stew" imageSrc="./stew.jpg" author="Mario" time="25 mins" />
            
          </div>

          {/* Most Popular */}
          <div>
            {/* Render your most popular recipes using RecipeCard component */}
          </div>

          {/* Load more button */}
          <div className="mt-12 flex justify-center">
            <LoadMoreButton />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
