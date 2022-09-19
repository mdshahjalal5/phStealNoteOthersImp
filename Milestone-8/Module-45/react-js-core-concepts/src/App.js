import './App.css';

const crickters = [
  {
    name:'Sakib Vai',
    profession: 'crick'
  },
  {
    name:'Tamim Vai',
    profession: 'crick'
  },
  {
    name:'Tamim Vai',
    profession: 'crick'
  },
  {
    name:'Mushfik Vai',
    profession: 'crick'
  },
  {
    name:'Mushfik Vai',
    profession: 'crick'
  }
]




function App() {
  const nayoks = ['Bappa','Salman','Sakib','Raj']
  return (
    <div className="App">
        {
          nayoks.map(nayok => <Actor name= {nayok} ></Actor>)
        }
        {
          nayoks.map(nayok => <li>{nayok}</li> )
        }
        {
          crickters.map(cricketer => <Cricketer myProps = {cricketer}></Cricketer> )
        }
        {
          crickters.map(cricketer => <Cricketer1 name={cricketer.name} profession={cricketer.profession} ></Cricketer1> )
        }
        {/* <h1>Actor + Crickter</h1> */}
        {/* <Cricketer crick = {cricketer1} ></Cricketer>
        <Cricketer crick = {cricketer2} ></Cricketer>
        <Cricketer crick = {cricketer3} ></Cricketer> */}
        {/* <Cricketer></Cricketer> */}
        {/* <Cricketer></Cricketer> */}
        {/* <Actor nayok="Ajoy" nayika="Kajol" ></Actor>
        <Actor nayok="Tony" nayika="Jony" ></Actor>
        <Actor nayok="Salman" nayika="Tabu" ></Actor> */}
      
    
    </div>
  );
}


// ** Let's make a component here

function Cricketer ({myProps:{name,profession}}){

  return (
    <div className='cricket'>
      <h1>Name:{name}</h1>
      <p>Profession: {profession}</p>
    </div>
  )
}
function Cricketer1 ({name,profession}){

  return (
    <div className='cricket'>
      <h1>Name:{name}</h1>
      <p>Profession: {profession}</p>
    </div>
  )
}


function Actor ({name}){
  
  return (
    <div className='container'>
      <h1>Nayok:{name}</h1>
     
    </div>
  )
}

export default App;
