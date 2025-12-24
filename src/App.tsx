
import './App.css'
import { Page } from './components/Page/Page'

function App() {


  return (
    <>
      <Page />
      <div className="bg-contain bg-no-repeat fixed bg-[url('./assets/images/bg-pattern-top-desktop.svg')] h-175 w-175 top-0 left-0 -z-10"></div>
      <div className="bg-contain bg-no-repeat fixed bg-[url('./assets/images/bg-pattern-bottom-desktop.svg')] h-175 w-175 bottom-0 right-0 -z-10"></div>
    </>
  )
}

export default App
