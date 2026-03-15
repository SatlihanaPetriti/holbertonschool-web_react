import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Login from '../Login/Login'
import Notifications from '../Notifications/Notifications'
import './App.css'

function App() {
  return (
    <>
      <div className='root-notifications'>
        <Notifications />
      </div>
      <Header />
      <Login />
      <Footer />
    </>
  )
}

export default App;