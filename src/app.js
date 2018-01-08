console.log('App.js is running!');

const appTitles = {
  title: 'Indecision App',
  subTitle: 'What do you want to do?',
  options: ['Take a shower', 'Do nothing', 'Watch a movie']
};

const template = (
  <div>
    <h1>{appTitles.title}</h1>
    {appTitles.subTitle && <p>{appTitles.subTitle}</p>}
    <p>{appTitles.options.length > 0 ? 'Here are your options:' : 'No options.'}
      <ol>
        <li>{appTitles.options[0]}</li>
        <li>{appTitles.options[1]}</li> 
        <li>{appTitles.options[2]}</li>      
      </ol>
    </p>

  </div>
);
const user = {
  name: 'Preet Dha', 
  age: 40,
  location: 'Seattle'  
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

const templateTwo = (
  <div>
    <h1>{user.name? user.name.toUpperCase() : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
)
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot); 