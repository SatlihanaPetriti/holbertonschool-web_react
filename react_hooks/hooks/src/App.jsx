import { useState, useEffect } from 'react'

// function App() {
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     setCount(1);
//     console.log("count--", count);
//   }, [count]);

//   return (
//     <>
//       <h4>Count value {count}</h4>
//     </>
//   )
// }


// function App() {
//   const [count, setCount] = useState(0)

//   const handleClick = () => {
//     // setCount(1);
//     // setCount(2);
//     // setCount(3);

//     setCount(1);
//     console.log("log 1:", count);
//     setCount(1);
//     console.log("log 2:", count);
//     setCount(1);
//     console.log("log 3:", count);

//   };


//   return (
//     <>
//       <h4>Count value {count}</h4>
//       <button onClick={handleClick}>click</button>
//     </>
//   )
// }

// export default App





function App() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    let newValue = count;
    setCount(newValue + 1);
  }

  return (
    <>
      <h4>Count value {count}</h4>
      <button onClick={handleIncrement}>Increment</button>
    </>
  )
}

export default App