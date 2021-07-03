import React from "react";
import Formal from "../../images/formalpicture.jpg"
import Travel from "../../images/travelpicture.jpg"

class Effect extends React.Component {
    state = {
      showImage: Travel
    };
changeImg = () => {
    if (this.state.showImage == Formal) {
        this.setState({showImage : Travel})
    }
    if (this.state.showImage == Travel) {
        this.setState({showImage : Formal})
    }
};

render() {
  return (
  <>
  <img src= {this.state.showImage} alt = "the developer" onClick= {this.changeImg}/> 
    </>
  );
}};

export default Effect;