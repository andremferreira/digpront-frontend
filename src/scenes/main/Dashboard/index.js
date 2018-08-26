import React from "react";
import Tabs from "../../../components/tabs";

class DashBoard extends React.Component {
  clickme = () => {
    console.log("clickme deu certo");
  };

  render() {
    return (
        <Tabs>
          <div label="TEste" onClick={this.clickme}>
            See you later
          </div>
          <div label="Croc">
            After  <em>Crocodile</em>!
          </div>
        </Tabs>

    );
  }
}

export default DashBoard;
