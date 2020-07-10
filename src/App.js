import React, { Component } from 'react';
import TOC from "./components/TOC"
import Content from "./components/Content"
import Final from "./components/Final"
import Subject from "./components/Subject"
import END from "./components/END"
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      Subject : {
        title :'WEB',
        sub : 'World wide web! '
      }

    }
  }  
  render (){
    return(
    <div className="App">
     <Subject title = {this.state.Subject.title} sub = {this.state.Subject.sub}></Subject>
     <Subject title = "react" sub = "for ui"></Subject>
     <TOC></TOC>
     <Content title = "Html" desc = " html is hypertext markup language"></Content>
     <Content title = "속성" desc = "훨씬 더 똑똑한 컴포넌트를 만들 수 있다. "></Content>
     <Final></Final>
     <END></END>
    </div>
  );
 }
}
  // state값을 초기화 시키려고 한다. 
  // 컴포넌트가 실행될떄 render보다 먼저 실행되면서 초기화 시킬때 작성하는 코드는 
  // construtor 안에 작성한다. 
// 앱이 내부적으로 사용할 상태는 state라는 형태를 사용한다. 
// 그렇게 만든 state는 props값으로 줬다. 
// 상위 컴포넌트인 app의 상태를 하위 컴포넌트로 전달 하기 위해서는
// 상위 컴포넌트의 state를 하위 컴포넌트의 props값으로 전달하는 것은 가능하다. 

export default App;
