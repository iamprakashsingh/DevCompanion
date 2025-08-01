import React from 'react'
// import AppRoutes from './routes/AppRoutes'
import { UserProvider } from './context/user.context'
import AppRoutes from './Routes/AppRoutes'

const App = () => {
  return (
    <UserProvider>
      <AppRoutes />
    </UserProvider>
  )
}

export default App