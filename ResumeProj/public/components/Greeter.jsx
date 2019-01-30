var React = require('react');
var GreeterMessage = require ('GreeterMessage');


var Greeter = React.createClass({
  getDefaultProps: function(){
    return {
      name: 'React',
      message: 'This is the default message',
      obj: 'something',
      add: 'Something'
    };
  },

  getInitialState: function(){
    return {
      name: this.props.name,
      message: this.props.message,
      add: this.props.add,
      obj: this.props.obj,
      tit1: this.props.tit1
    };
  },

  render: function (){
    var name = this.state.name;
    var message = this.state.message;
    var add = this.props.add;
    var obj = this.props.obj;
    var tit1 = this.props.tit1;

    return(
      <div>
        <GreeterMessage name={name} message={message} obj={obj} add={add} tit1={tit1}/>

      </div>
    );
  }
});

module.exports = Greeter;
