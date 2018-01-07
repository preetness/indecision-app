console.log('App.js is running!');

var appTitles = {
  title: 'Indecision App',
  subTitle: 'What do you want to do?',
  optionOne: 'Take a shower',
  optionTwo: 'Go back to sleep'
};

var template = (
  <div>
    <h1>{appTitles.title}</h1>
    <p>{appTitles.subTitle}</p>
    <ol>
      <li>{appTitles.optionOne}</li>
      <li>{appTitles.optionTwo}</li>      
    </ol>
  </div>
);
var user = {
  name: 'Preet Dha',
  age: 40,
  location: 'Seattle'
};

function getLocation(location) {
  if (location) {
    return location;
  } else {
    return 'Unknown';
  }
}

var templateTwo = (
  <div>
    <h1>{user.name.toUpperCase()}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {getLocation(user.location)}</p>
  </div>
)
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot); 