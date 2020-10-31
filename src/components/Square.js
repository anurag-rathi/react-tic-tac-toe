import React from "react";

const squareStyle = {
  width: "60px",
  height: "60px",
  margin: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
  color: "black",
};

//creating square component 

class Square extends React.Component {
  render() {
    return (
      <button
        className="square"
        style={squareStyle}
        onClick={this.props.onClick} // using onclick function which is coming as props  
      >
        {this.props.value} {/* rendring value of square coming as props */}
      </button>
    );
  }
}

export default Square;
