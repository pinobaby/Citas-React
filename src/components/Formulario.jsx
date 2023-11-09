import { useState, useEffect} from "react";
import Error from "./Error";


const Formulario = ({ pacientes, setPacientes, paciente, setPaciente}) => {
  //state para paciente
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

    


    useEffect( () => {
     if( Object.keys(paciente).length > 0 ){
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha );
      setSintomas(paciente.sintomas);
     }
    }, [paciente]); 

  


  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return fecha + random;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //validar el formulario
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      console.log("hay al menos un campo vacio");
      setError(true);
      return;
    }

    setError(false);

    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    if (paciente.id) {
      //editando el paciente
      objetoPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState);
      setPacientes(pacientesActualizados);
      setPaciente({});
      
    }else{
     //Nuevo registro de paciente
      objetoPaciente.id = generarId();
      setPacientes(...pacientes, objetoPaciente)
    }

  
    setPacientes([...pacientes, objetoPaciente]);

    //reiniciar el formulario
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
    
  };
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-orange-300 font-bold text-lg">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        { error && <Error> <p> Todos los campos son obligatorios </p> </Error>}

        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-500 uppercase font-bold"
          >
            Nombre Mascota{" "}
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de las Mascota"
            className="border-2 w-full py-2 px-3 text-gray-500 mt-5  focus:outline-none focus:shadow-outline placeholder-gray-300 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-500 uppercase font-bold"
          >
            Nombre del propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full py-2 px-3 text-gray-500 mt-5  focus:outline-none focus:shadow-outline placeholder-gray-300 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-500 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="text"
            placeholder="Email del propietario"
            className="border-2 w-full py-2 px-3 text-gray-500 mt-5  focus:outline-none focus:shadow-outline placeholder-gray-300 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-500 uppercase font-bold"
          >
            Alta
          </label>
          <input
            id="alta"
            type="date"
            placeholder="Email del propietario"
            className="border-2 w-full py-2 px-3 text-gray-500 mt-5  focus:outline-none focus:shadow-outline placeholder-gray-300 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
          <textarea
            id="sintomas"
            cols="30"
            rows="10"
            type="date"
            placeholder="Describe los sintomas"
            className="border-2 w-full p-2 mt-2 text-gray-500 placeholder-gray-300 rounded-md"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          ></textarea>

          <input
            type="submit"
            className="bg-orange-300 font-bold w-full p-2 uppercase text-white rounded-md hover:bg-orange-500 cursor-pointer"
            value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
          />
        </div>
      </form>
    </div>
  );
}

export default Formulario;
