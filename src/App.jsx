import React, { useState } from 'react';
import Blogs from './components/Blogs/Blogs';
import BlogsInfo from './components/BlogsInfo/BlogsInfo';
import Header from './components/Header/Header';
import Info from './components/Info/Info';

const App = () => {
  const [showTime, setShowTime] = useState('');

  const readTime = (time) => {
    const previousReadTime = JSON.parse(localStorage.getItem("readTime"));

    if (previousReadTime) {
      const sum = previousReadTime + time
      localStorage.setItem("readTime", sum)
      setShowTime(sum)
    }
    else {
      localStorage.setItem("readTime", time);
      setShowTime(time)
    }

  }
  // marked reading
  const [showMarked, setShowMarked] = useState(getShowMarkedFromLocalStorage())

  function getShowMarkedFromLocalStorage() {
    let previousMarkedReadList = localStorage.getItem("markedRead");

    if (previousMarkedReadList.length > 0) {
      return JSON.parse(previousMarkedReadList);
      
    }
    return [];
  }

  const markedRead = (markedBook) => {
    let previousMarkedReadList = localStorage.getItem("markedRead");


    let isBookRead = false;
    if (previousMarkedReadList.length > 0) {
      previousMarkedReadList = JSON.parse(previousMarkedReadList);
    } else {
      previousMarkedReadList = [];
    }

    //find if the book is read or not

    for (const book of previousMarkedReadList) {
      if(book == markedBook){
        isBookRead = true;
      }
    }


    if (isBookRead) {
      //show alert
      alert('Book is read already!');
    } else {
      
      // insert this book to array
      previousMarkedReadList.push(markedBook);
      // show it in page

      // store it in localstorage
      localStorage.setItem("markedRead", JSON.stringify(previousMarkedReadList));
    }


    // let previousMarkedRead = JSON.parse(localStorage.getItem("markedRead"));



    // setShowMarked(marked)

    /*    if(previousMarkedRead){
          // const sum = parseInt(previousReadTime) + 1
          // localStorage.setItem("readTime", sum)
          // setShowTime(sum)
        }
        else{
          localStorage.setItem("markedRead", marked);
          setShowMarked(marked)
        }
    */


  }

  return (
    <div className="Container mx-40">
      <div>
        <Header />
      </div>
      <div className="main grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-20 justify-items-center mt-24">
        <div className="blogs-container col-span-2 gap-y-6">
          <Blogs readTime={readTime} markedRead={markedRead} />
          <Info />
        </div>
        <div className="blogs-info">
          <BlogsInfo showMarked={showMarked} showTime={showTime}></BlogsInfo>
        </div>

      </div>

    </div>
  );
};

export default App;
