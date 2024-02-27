import logo from './logo.svg';
import './App.css';
import './AuthorQuiz.css';
import './bootstrap.min.css';
import authors from './data.json';//import data
import { computeHeadingLevel } from '@testing-library/react';
import { useState, useEffect } from 'react';

function AuthorQuiz() {

  const [correctAuthorIndex, setCorrectAuthorIndex] = useState(getRandomNumber(authors.length));
  const [correctAuthorImage, setCorrectAuthorImage] = useState('');
  const [correctAuthorName, setCorrectAuthorName] = useState('');
  const [click, setClick] = useState(false);
  const [correctAns, setCorrectAns] = useState(false);
  const [correctBook, setCorrectBook] = useState(0);
  const [options, setOptions] = useState(['']);
  function getRandomNumber(n) {
    return Math.floor(Math.random() * n);
  }
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  function init() {
    let tmpArray = [];
    setCorrectAuthorIndex(getRandomNumber(authors.length));
    setCorrectAuthorImage(authors[correctAuthorIndex].image);
    setCorrectAuthorName(authors[correctAuthorIndex].author);
    setCorrectBook(getRandomNumber(authors[correctAuthorIndex].books.length));
    tmpArray = [...tmpArray, (authors[correctAuthorIndex].books[correctBook])];
    // console.log(correctAuthorIndex,options);


    const mySet = new Set();
    while (mySet.size < 3) {
      const wrongAuthorIndex = getRandomNumber(authors.length);
      if (wrongAuthorIndex !== correctAuthorIndex) {

        mySet.add(wrongAuthorIndex);

      }

    }
    //set travers for options append in temp array
    mySet.forEach(
      (wrongAuthorIndex) => {
        const wrongBook = getRandomNumber(authors[wrongAuthorIndex].books.length);
        tmpArray = [...tmpArray, (authors[wrongAuthorIndex].books[wrongBook])];
      }
    )
    shuffleArray(tmpArray);
    setOptions(tmpArray);
  }
  useEffect(() => {
    init();
  }, [correctAuthorIndex,correctBook])
  // correctAuthorImage,correctBook
  const style1 =
  {
    // border: '1px solid gray',
    margine: '100px',
    paddingTop: '20px',
    textAlign: 'center'
  }
  function handleButtonClick(elements) {
    setClick(true);
    console.log('rtdtrcd: '+elements.title);
    console.log('era :'+ authors[correctAuthorIndex].books[correctBook].title);
    if (elements.title === authors[correctAuthorIndex].books[correctBook].title) {
      setCorrectAns(true);

    }
    else {
      setCorrectAns(false);
    }
  }
  // console.log(authors);
  return (
    <div class="AuthorQuiz">
      {/* {console.log(options)} */}
      <header><link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />

      </header>
      <body>
        <div style={style1}>
          <h1 id="fstline" >The Author Quiz</h1>
        </div>
        <div class="ashbg">
          <p id="line1">Author Quiz</p>
          <p>Select the book written by the Author</p>
        </div>
        <div class="lwrdv" style={{backgroundColor:click?correctAns?'green':'red':''}}>
          <div>
            <img class="img1" src={correctAuthorImage} alt="" />
            <div>
              {correctAuthorName}
            </div>

          </div>
          <div class="btndv">
            {/* <button class="btn1"> This is a button </button>
            <button class="btn1" >bnnnnnnnnnnn</button>
            <button class="btn1">c</button>
            <button class="btn1">d</button> */}
            {
              options.map((elements, index) =>
                (<button className="btn1" key={index} onClick={() =>handleButtonClick(elements)}>{elements?.title}</button>)
              )
            }
          </div>
        </div>
      </body>
    </div>
  );
}

export default AuthorQuiz;
