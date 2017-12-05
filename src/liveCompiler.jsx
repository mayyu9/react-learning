/*
creating live jsx compiler
*/

import React from 'react';

class Compiler extends React.Component{
  constructor(){
    super();
    this.state={
      input:'/* add your jsx here',
      output:'',
      err:''
    }
    this.update= this.update.bind(this);
  }
  update(e){
    let code = e.target.value;
    try{
      this.setState({
        output: window.Babel.transform(code,
        {presets: ['es2015', 'react']})
        .code,
        err:
      })
    }
    cath(err){
      this.setState({err: err.message})
    }
  }
  render(){
    return(
      <div>
        <p>live compiler-babel cdn</p>
        <header>{this.state.err}</header>
        <div className="container">
          <textarea onChange={this.update}
            defaultValue={this.state.input} />
          <pre>
            {this.state.output}
          </pre>
        </div>
      </div>
    );

  }
}

export default Compiler;
