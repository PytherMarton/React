import './App.css'
const App = () => {
  return (
  <div>
    <h1>I'm a functional component</h1>
    <Person 
      name = "Bilbo" 
      age = "111" 
      job = "Junior Developer" 
      petName = "Pepsi" 
      type = "dog"
    />
    <Person 
      name = "Judge Dreed" 
      age = "45" 
      job = "Chef"
      petName = "Bruno" 
      type = "Hamster"
    />
    <Person 
      name = "Obi WAn Kenobi" 
      age = "33" 
      job = "Police Officer"
      petName = "Shelia" 
      type = "Snail"
    />
  </div>
  )
}

const Person = (props) => {
  return (
    <div className = "person">
      <h1>Hello there {props.name} and I'm {props.age}.</h1>
      <Job job = {props.job}/>
      <Pet petName = {props.petName} type = {props.type}/>
    </div>
  )
}

// const Person = ({ name, age}) => {
//   return <h2>Hello there {name} and I'm {age}.</h2>
// }

const Job = (props) => {
  return <h3>Job role: {props.job}.</h3>
}

const Pet = () => {
  return <p>My pet is called something, it's a something.</p>
}

export default App;