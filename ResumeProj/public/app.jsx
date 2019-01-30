var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

var firstname = 'RESUME OF EIRON VALDEZ';
var mymessage= 'Objective';
var address = '8 Cortes St. Vista Verde Executive Village Cainta, Rizal E-mail: eirzvaldez@gmail.com Mobile: 0917-859-9802/240-4481';
var objective= 'To grow and acquire more knowledge together with the company who will accept me. Enhance my skills and to contribute a lot in the company that I’m committed too. Will share my skills and personality to my co-workers and to build a new character that can develop me as an employee. Most importantly, to continue my passion and to make my work as my favorite thing to do.';
var title1='Address';


ReactDOM.render(
<Greeter name={firstname} message= {mymessage} add={address} obj={objective} tit1= {title1}/>,
document.getElementById('app')
);
