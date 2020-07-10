
import React, { Component } from 'react';
class TOC extends Component{
    render(){
      return(
        <nav>
        <ul>
           <li><a href = "1.html">hTML</a></li>
           <li><a href = "2.html">CSS</a></li>
           <li><a href = "3.html">JAVASCRIPT</a></li>
       </ul>
       </nav>
      );
    }
  }
  // 외부에서 사용할 것을 허용한다 라는것은 export
  export default TOC;
  
