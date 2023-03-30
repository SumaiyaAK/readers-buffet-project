import React from 'react';
import Blogs from './components/Blogs/Blogs';
import BlogsInfo from './components/BlogsInfo/BlogsInfo';
import Header from './components/Header/Header';

const App = () => {
  const readTime =(time) => {
    console.log(time)

  }
  const markedRead = (marked) => {
    console.log(marked)
  }
  return (
    <div className="Container mx-40">
      <div>
        <Header/>
      </div>
      <div className="main grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-20 justify-items-center mt-24">
        <div className="blogs-container col-span-2 gap-y-6">
           <Blogs readTime={readTime} markedRead={markedRead}/>
        </div>
        <div className="blogs-info">
          <BlogsInfo/>
        </div>

      </div>
      
      
    </div>
  );
};

export default App;
