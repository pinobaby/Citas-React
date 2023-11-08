import { useState } from "react";
import Form from "./components/Formulario";
import Header from "./components/Header";
import ListaPacientes from "./components/ListaPacientes";

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
        <ListaPacientes
        pacientes = {pacientes}
        setPacientes = {setPacientes}
        />
      </div>
    </div>
  );
}

export default App;
