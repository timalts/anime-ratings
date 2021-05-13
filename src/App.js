import logo from './logo.svg';
import './App.css';
const jikanjs  = require('jikanjs'); // Uses per default the API version 3

function App() {
  var array = {}
  function display(){
    var input = document.getElementById('input').value
    jikanjs.search("manga", input).then((valeur) => {
      console.log(valeur.results)
      array = valeur.results
    }, (raison) => {
      console.log(raison)
    })
  }
  return (
    <div>
<div id="cover">
  <form method="get" action="">
    <div class="tb">
      <div class="td"><input id="input" type="text" placeholder="Search" required/></div>
      <div class="td" id="s-cover">
        <button onClick={display} type="button">
          <div id="s-circle"></div>
          <span></span>
        </button>
      </div>
    </div>
  </form>
</div>



<a href="https://www.youtube.com/channel/UC7hSS_eujjZOEQrjsda76gA/videos" target="_blank" id="ytd-url">My YouTube Channel</a>
</div>
  );
}

export default App;
