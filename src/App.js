import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './Login';
import LoginClass from './LoginClass';
import Todo from './Todo';
import Counter from './Counter';
// function App() { // functional component
//   return (
//     <h1>Shatakshi Todo</h1>
//   );
// }

class App extends React.Component {

  // offers = ''

  constructor() {
    super();
    console.log("constructor called");
    // initialize state
    this.state = { offers: 'Offers will appear here', 
    showLoginForm:false,message:'' }
    // this.offers='Offers will appear here'
  }

  componentDidMount() {
    console.log("Component mounted successfully")
    // make ajax call and get offers from api
    setTimeout(() => this.setState({ offers: 'Free shirts',showLoginForm:true, message:'Please login to continue' }), 500)

    // this.offers = "free shoes";
  }

  render() {
    return <div> 
      
      <h1>Shatakshi Todo</h1>
      <Todo/>
      <center>
        {/* <Login
    LoginPlaceholder='login'
    PasswordPlaceholder='Password'
    submitButtonColor='Green'
    /> */}

        {
      //   this.state.showLoginForm ?  <LoginClass
      //   LoginPlaceholder='login'
      //   PasswordPlaceholder='Password'
      //   submitButtonColor='Green'
      // /> :
      // <h3>USer already logged in </h3>
      }

      {
       this.state.showLoginForm &&  
       <LoginClass
        LoginPlaceholder='login'
        PasswordPlaceholder='Password'
        submitButtonColor='Green'
        message={this.state.message}
      /> 
      }
       

        <div>{this.state.offers}</div>
      <Counter/>
      </center>
    </div>
  }

}

export default App;
