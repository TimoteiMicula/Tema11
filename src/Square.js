import React from "react";
// import React, { useState, useEffect } from 'react';


// class Square extends React.Component {
//   render() {
//     return (
//       <div className="square" onClick={this.props.onClick}>
//         {this.props.value}
//       </div>
//     );
//   }
// }

  function Square() {
  
    return (
      <div className="square" onClick={this.props.onClick}>
        {this.props.value}
      </div>
    );
  }




export default Square;
