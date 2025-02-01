import './App.css'
import { Route, Routes } from 'react-router'
import { Users } from './pages/users/ui/Users.tsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>main</div>} />
        <Route path="/users" element={<Users />} />
        <Route path="/weather/userId" element={<Users />} />
      </Routes>
    </>
  )
}

export default App
