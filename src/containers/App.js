import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import '../assets/css/App.css';

import Main from "./WebtoonService/Main";
import Viewer from "./WebtoonService/Viewer";
import WebtoonHome from "./WebtoonService/WebtoonHome";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Main} />
        <Route path="/webtoon/:webtoonId" component={WebtoonHome} />
        <Route path="/viewer/:episodeId" component={Viewer} />
      </div>
    </Router>
  );
}

// class App extends Component {
//   render() {

  
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save sdfsdf to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//     <Router>
//       <div>
//         <Route exact path="/" component={Main} />
//         <Route path="/webtoon/:webtoonId" component={WebtoonHome} />
//         <Route path="/viewer/:episodeId" component={Viewer} />
//       </div>
//     </Router>
//   );
//   }
// }

export default App;
