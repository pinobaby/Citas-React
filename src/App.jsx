import { useState } from "react";
import Header from "./components/Header";
import ListaPacientes from "./components/ListaPacientes";
import Formulario from "./components/Formulario";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});
  
  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario 
         pacientes = {pacientes}
         setPacientes = {setPacientes}
         paciente = {paciente}
         setPaciente = {setPaciente}
        />

        <ListaPacientes
        pacientes = {pacientes}
        setPaciente = {setPaciente}
        />
      </div>
    </div>
  );
}

export default App;
