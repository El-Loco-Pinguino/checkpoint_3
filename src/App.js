import React, { Component } from 'react';
import ListElement from "./components/ListElement"
import "../src/App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <table>
          <tbody>
            <tr>
              <th id="columnOne">Monstre</th>
              <th id="columnTwo">État de santé</th>
              <th id="columnThree">Photo</th>
              <th id="columnFour">Éliminer</th>
            </tr>
            <ListElement name="Dragon Cristal" status="alive" image="https://vignette.wikia.nocookie.net/finalfantasy/images/7/70/FFLTNS_Ice_Dragon_Artwork.jpg"/>
            <ListElement name="Sorcière" status="alive" image="http://lalydo.com/wp-content/uploads/2016/07/ma-sorciere-bien-aimee-3.jpg"/>
            <ListElement name="Tinky Winky" status="dead" image="https://vignette.wikia.nocookie.net/films-tv-shows-and-wildlife/images/9/97/Tinky-Winky%27sHeavyBag79.png"/>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
