import React, { useState } from 'react';
import Blogs from './components/Blogs/Blogs';
import BlogsInfo from './components/BlogsInfo/BlogsInfo';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [showTime, setShowTime] = useState(0);

  const readTime = (time) => {
    const previousReadTime = localStorage.getItem("readTime");

    if (previousReadTime == null) {
      previousReadTime = 0;
    }

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

    if (previousMarkedReadList != null && previousMarkedReadList.length > 0) {
      return JSON.parse(previousMarkedReadList);

    }
    return [];
  }

  const markedRead = (markedBook) => {
    let previousMarkedReadList = localStorage.getItem("markedRead");


    let isBookRead = false;
    if (previousMarkedReadList != null && previousMarkedReadList.length > 0) {
      previousMarkedReadList = JSON.parse(previousMarkedReadList);
    } else {
      previousMarkedReadList = [];
    }

    //find if the book is read or not

    for (const book of previousMarkedReadList) {
      if (book == markedBook) {
        isBookRead = true;
      }
    }


    if (isBookRead) {
      //show alert
      // alert('Book is read already!');
      toast("Book is already read !")
    } else {

      // insert this book to array
      previousMarkedReadList.push(markedBook);
      // show it in page
      setShowMarked(previousMarkedReadList);
      // store it in localstorage
      localStorage.setItem("markedRead", JSON.stringify(previousMarkedReadList));
    }

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

      <ToastContainer></ToastContainer>

    </div>
  );
};

export default App;
