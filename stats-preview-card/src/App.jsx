import "./App.css";
import img from '../images/image-header-mobile.jpg'
function App() {
  return (
    <>
      <div className="main">
        <div className="main-img">
          <img src={img} alt="header-img"/>
        </div>
        <div className="main-text">
        <h1>Get <span>insights</span> that help your business grow.</h1>
        <p>
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <ul>
          <li>10k+ <span>COMPANIES</span></li>
          <li>314 <span>TEMPLATES</span></li>
          <li>12M+ <span>QUERIES</span></li>
        </ul>
        </div>
      </div>
    </>
  );
}

export default App;
