import Aside from "./Components/Aside"
import Main from "./Components/Main"


function App() {


    const people = [
        {
            id : 1,
            name : "Williams",
            age : "28",
            location : "New York",
            image : 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjk0ODh8MHwxfHNlYXJjaHwxfHxtZW4lMjBmYWNlfGVufDB8fHx8MTYzNDk5NTE5NQ&ixlib=rb-1.2.1&q=80&w=400'
            
        },
        {
            id : 2,
            name : "Matt",
            age : "26",
            location : "New York",
            image : 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjk0ODh8MHwxfHNlYXJjaHwyfHxtZW4lMjBmYWNlfGVufDB8fHx8MTYzNDk5NTE5NQ&ixlib=rb-1.2.1&q=80&w=400'
        },
        {
            id : 3,
            name : "Smith",
            age : "24",
            location : "Madrid,Spain",
            image : 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjk0ODh8MHwxfHNlYXJjaHwzfHxtZW4lMjBmYWNlfGVufDB8fHx8MTYzNDk5NTE5NQ&ixlib=rb-1.2.1&q=80&w=400'
        },
        {
            id : 4,
            name : "Jones",
            age : "29",
            location : "New York",
            image : 'https://images.unsplash.com/photo-1624395213043-fa2e123b2656?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjk0ODh8MHwxfHNlYXJjaHw0fHxtZW4lMjBmYWNlfGVufDB8fHx8MTYzNDk5NTE5NQ&ixlib=rb-1.2.1&q=80&w=400'
        },
        {
            id : 5,
            name : "Jake",
            age : "25",
            location : "Rome, Italy",
            image : 'https://images.unsplash.com/photo-1595956553066-fe24a8c33395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjk0ODh8MHwxfHNlYXJjaHw1fHxtZW4lMjBmYWNlfGVufDB8fHx8MTYzNDk5NTE5NQ&ixlib=rb-1.2.1&q=80&w=400'
        },
        {
            id : 6,
            name : "Jack",
            age : "28",
            location : "Milano,Italy",
            image : 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjk0ODh8MHwxfHNlYXJjaHw2fHxtZW4lMjBmYWNlfGVufDB8fHx8MTYzNDk5NTE5NQ&ixlib=rb-1.2.1&q=80&w=400'
        },
        {
            id : 7,
            name : "Michael",
            age : "28",
            location : "New York",
            image : 'https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjk0ODh8MHwxfHNlYXJjaHw3fHxtZW4lMjBmYWNlfGVufDB8fHx8MTYzNDk5NTE5NQ&ixlib=rb-1.2.1&q=80&w=400'
        },
        {
            id : 8,
            name : "John",
            age : "24",
            location : "New York, USA",
            image : 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjk0ODh8MHwxfHNlYXJjaHw4fHxtZW4lMjBmYWNlfGVufDB8fHx8MTYzNDk5NTE5NQ&ixlib=rb-1.2.1&q=80&w=400'
        },
        {
            id : 9,
            name : "Martins",
            age : "26",
            location : "Texas, USA",
            image : 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjk0ODh8MHwxfHNlYXJjaHw5fHxtZW4lMjBmYWNlfGVufDB8fHx8MTYzNDk5NTE5NQ&ixlib=rb-1.2.1&q=80&w=400'
        },
        {
            id : 10,
            name : "Andrew",
            age : "26",
            location : "Paris, France",
            image : 'https://images.unsplash.com/photo-1520409364224-63400afe26e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjk0ODh8MHwxfHNlYXJjaHwxMHx8bWVuJTIwZmFjZXxlbnwwfHx8fDE2MzQ5OTUxOTU&ixlib=rb-1.2.1&q=80&w=400'
        },
    ]

  return (
    <div className="App">
      <Aside />
      <Main people={people}/>
    </div>
  );
}

export default App;
