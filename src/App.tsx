import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

// function App() {
//   const [info, setInfo] = useState({
//     name: 'Nguyen Van A',
//     age: 18,
//     address: 'Ha Noi, VN'
//   })

//   const handleUpdate = () => {
//     setInfo({
//       ...info,
//       bio: 'Yêu màu hồng'
//     })
//   }  
//   return (

//       <div className="App" style={{padding: 20}}>
//           <h1>{JSON.stringify(info)}</h1>
//           <button onClick={handleUpdate}>Update</button>
//       </div>
//   );  
// }

// const gifts = [
//   'CPU i9',
//   'RAM 32GB RGB',
//   'RGB KeyBoard',
// ]

// function App () {
//     const  [gift, setGift] = useState()
//     const randomGift = () => {
//       const index = Math.floor(Math.random() * gifts.length)
//       setGift(gifts[index]);
//     }
//   return (
//     <div style={{padding: 20}}>
//       <h1>{gift || 'Chưa có phần thưởng'}</h1>
//       <button onClick={randomGift}>Nhận thưởng</button>
//     </div>
//   )
// }

// const course = [
//   {
//     id:1,
//     name: 'HTML, CSS'
//   },
//   {
//     id:2,
//     name: 'java'
//   },
//   {
//     id:3,
//     name: 'ReactJS'
//   }
// ]

// function App() {
//   const [checked,setChecked] = useState([])
//   const handleCheck = (id) => {
//     setChecked(prev => {
//       const isChecked = checked.includes(id)
//       if(isChecked) {
//         return checked.filter(item => item !== id)
//       }else {
//         return [...prev, id]
//       }
//     })
//   }
//   const handleSubmbit = () => {
//     console.log({ids: checked});
//   }
//   return (
//     <div style={{padding:20}}>
//       {course.map(course=>(
//         <div key={course.id}>
//           <input 
//             type="checkbox" 
//             checked={checked.includes(course.id)} 
//             onChange={() => handleCheck(course.id)}/>
//             {course.name}
//         </div>
//       ))}
//       <button onClick={handleSubmbit}>Register</button>
//     </div>
//   )
// }

// function App () {
//   const [job, setJob] = useState('')
//   const [jobs,setJobs] = useState(() => {
//     const storageJobs = JSON.parse(localStorage.getItem('jobs'))
//     console.log(storageJobs);
//     return storageJobs
//   })

//   const handleSubmbit = () => {
//     setJobs(prev => {
//       const newJobs = [...prev, job]
//       const jsonJobs = JSON.stringify(newJobs)
//       localStorage.setItem('jobs', jsonJobs)
//       return newJobs
//     })
//     setJob('')
//   }
//   return (
//     <div style={{padding:32}}>
//       <input 
//         value={job}
//         onChange={e => setJob(e.target.value)}
//       />
//       <button onClick={handleSubmbit}>Add</button>

//       <ul>
//         {jobs.map((job, index) => (
//           <li key={index}>{job}</li>
//         ))}
        
//       </ul>
//     </div>
//   )
// }

export default App
