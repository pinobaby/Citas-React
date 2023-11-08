import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import ListPatient from "./components/PatientList";

function App() {
  const [pacientes, setPacientes] = useState([]);


  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form 
         pacientes = {pacientes}
         setPacientes = {setPacientes}
        />
        <ListPatient
        pacientes = {pacientes}
        setPacientes = {setPacientes}
        />
      </div>
    </div>
  );
}

export default App;
