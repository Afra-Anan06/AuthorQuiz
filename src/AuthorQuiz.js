import logo from './logo.svg';
import './App.css';
import './AuthorQuiz.css';
import './bootstrap.min.css'

function AuthorQuiz() {
  const style1 =
  {
    // border: '1px solid gray',
    margine: '100px',
    paddingTop: '20px',
    textAlign: 'center'
  }
  return (
    <div class="AuthorQuiz">
      <header><link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />

      </header>
      <body>        <div style={style1}>
        <h1 id="fstline" >The Author Quiz</h1>
      </div>
        <div class="ashbg">
          <p id="line1">Author Quiz</p>
        </div>
        <div class="lwrdv">
          <div>
            <img class="img1" src="https://poets.org/sites/default/files/images/biographies/wshakesp.jpg" alt="" />
            <p>William Shakespeare</p>
          </div>
          <div class="btndv">
            <button class="btn1"> This is a button </button>
            <button class="btn1" >bnnnnnnnnnnn</button>
            <button class="btn1">c</button>
            <button class="btn1">d</button>
          </div>
        </div>
      </body>
    </div>
  );
}

export default AuthorQuiz;
