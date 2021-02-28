import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    const boxes = document.querySelectorAll('.box');

    window.addEventListener('scroll', checkBoxes);

    checkBoxes();
    function checkBoxes() {
      const triggerBottom = (window.innerHeight / 5) * 4;
      boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
          console.log('foo');
          box.classList.add('show');
        } else {
          box.classList.remove('show');
        }
      });
    }
  }, []);

  return (
    <div>
      <h1>スクロールしてね</h1>
      <div className="box">
        <h2>Good Morning 😊</h2>
      </div>
      <div className="box">
        <h2>こたろうです</h2>
      </div>
      <div className="box">
        <h2>今日も元気〜🐈</h2>
      </div>
      <div className="box">
        <h2>Good Morning 😊</h2>
      </div>
      <div className="box">
        <h2>こたろうです</h2>
      </div>
      <div className="box">
        <h2>今日も元気〜</h2>
      </div>
      <div className="box">
        <h2>Good Morning 😊</h2>
      </div>
      <div className="box">
        <h2>こたろうです</h2>
      </div>
      <div className="box">
        <h2>今日も元気〜</h2>
      </div>
      <div className="box">
        <h2>Good Morning 😊</h2>
      </div>
      <div className="box">
        <h2>こたろうです</h2>
      </div>
      <div className="box">
        <h2>今日も元気〜🐈</h2>
      </div>
      <div className="box">
        <h2>Good Morning 😊</h2>
      </div>
      <div className="box">
        <h2>こたろうです</h2>
      </div>
      <div className="box">
        <h2>今日も元気〜🐈</h2>
      </div>
      <div className="box">
        <h2>Good Morning 😊</h2>
      </div>
      <div className="box">
        <h2>こたろうです</h2>
      </div>
      <div className="box">
        <h2>今日も元気〜🐈</h2>
      </div>
    </div>
  );
}

export default App;
