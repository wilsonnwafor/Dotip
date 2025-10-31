import { Outlet } from 'react-router'
import { Header } from './components/shared/header'

function App() {

  return (
    <>
      <div className='w-full bg-gray-100'>
        <Header />
        <div className=''>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
