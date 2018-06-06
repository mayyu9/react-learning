import React from 'react';
import Search from './Search';
import './xebia-app.css';
import Background from './star-wars.jpg';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={username:'',password:'', isLoginSuccessful:false, users: []}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.session=this.session.bind(this);
    this.logoutSession=this.logoutSession.bind(this);
  }

  handleChange(event){
    event.preventDefault();
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    let userObj = (this.state.users.results).map(user => {
      //console.log('include:'+(user.birth_year.includes(this.state.password)));//(user.name.includes(this.state.username) &&
      if(user.name.includes(this.state.username))
        if(user.birth_year.includes(this.state.password))
          this.setState({isLoginSuccessful:true});
          this.session();
    });

  }

  session(){
    let value = this.state.username;
    sessionStorage.setItem('uname', value);
  }

  logoutSession(event) {
    event.preventDefault();
    sessionStorage.removeItem('uname');
    this.setState({
      username:'',
      password:'',
      isLoginSuccessful:false});
  }

  componentDidMount(){
    /* fetch the people infromation from the below url and set users state with json reterived */
    fetch('https://swapi.co/api/people')
    .then(results => {
      return results.json();
    })
    .then(data => {
      this.setState({users:data});
    })
  }

  render(){
    let sectionStyle = {
      width: '100%',
      height: '1000px',
      backgroundImage: `url(${Background}) `,
      backgroundSize:'100% 100%',
      backgroundRepeat: 'no-repeat',
      margin:'0',
      padding:'0'
    };
    let fontColor = {
      color: 'indigo'
    };
    let textBox = {
      width:'100px'
    }
    if(!this.state.isLoginSuccessful) {
    return(
      <div className='login-form' style={sectionStyle}>
      <form className='login-page-form' onSubmit={this.handleSubmit}>
      <div>
      <label style={fontColor}>
          UserName:
          <input style={textBox} type="text" name='username'  placeholder="UserName Case sensitive" value={this.state.username} onChange={this.handleChange} required />
        </label>
      </div>
      <div>
      <label style={fontColor}>
          Password:
          <input style={textBox} type="password" name='password' placeholder="Password Case sensitive" value={this.state.password} onChange={this.handleChange} required/>
        </label>
      </div>
      <input style={fontColor} type="submit" value="login" />
      </form>
      </div>
    )}
    return(
      <div className='search-page'>
        <Search logout={this.logoutSession}/>
      </div>
    )
  }
}

export default Login;
