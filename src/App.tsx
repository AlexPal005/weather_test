import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Users } from './pages/users/ui/Users.tsx'
import { SavedUsers } from './pages/saved/ui/SavedUsers.tsx'
import { Header } from './features/header/ui/Header.tsx'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/saved" element={<SavedUsers />} />
        <Route path="*" element={<Navigate to="/users" replace />} />
      </Routes>
    </>
  )
}

export default App
