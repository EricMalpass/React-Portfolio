import React from "react";
import Formal from "../../images/formalpicture.jpg"
import Travel from "../../images/travelpicture.jpg"

class Effect extends React.Component {
    state = {
      count: Travel
    };
changeImg = () => {
    if (this.state.count == Formal) {
        this.setState({count : Travel})
    }
    if (this.state.count == Travel) {
        this.setState({count : Formal})
    }
};

render() {
  return (<>
  <img src= {this.state.count} alt = "stuff" onClick= {this.changeImg}/> 
    </>
  );
}};

export default Effect;