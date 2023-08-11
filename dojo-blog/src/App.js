import Navbar from './Navbar';
import Home from './Home';
console.log(process.env.REACT_APP_GITHUB_TOKEN);

const git_domain = process.env.REACT_APP_GITHUB_DOMAIN;
const dataUrl = document.URL.split('.')[0].replace(/-\d+$/,'') + '-3001.' + git_domain + '/blogs';  

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home fetchUrl={dataUrl}/>
      </div>
    </div>
  );
}

export default App;
