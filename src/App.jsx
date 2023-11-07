import Form from "./components/Form"
import Header from "./components/Header"
import ListPatient from "./components/PatientList"

function App() {


  return (
  <div className="container mx-auto mt-20">
  <Header/>
  <div className="mt-12 md:flex">
  <Form/>
  <ListPatient/>
  </div>
  </div>
    
  )
}

export default App
