import './App.css'
import { Image } from './components/Image'
import { Main } from './components/Main'
function App() {


  return (
    <div className='w-screen h-screen bg-cream flex justify-center items-center'>
      <main className=' sm:flex sm:p-4'>
        <Image />
        <Main />
      </main>
    </div>
  )
}

export default App
