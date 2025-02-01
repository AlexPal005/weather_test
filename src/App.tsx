import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Users } from './pages/users/ui/Users.tsx'
import { SavedUsers } from './pages/saved/ui/SavedUsers.tsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>main</div>} />
        <Route path="/users" element={<Users />} />
        <Route path="/saved" element={<SavedUsers />} />
      </Routes>
    </>
  )
}

export default App
