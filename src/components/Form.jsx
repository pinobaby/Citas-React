import {useState,useEffect} from "react";
function Form() {
  const[nombre,setNombre] = useState('');

  console.log(nombre);
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-orange-300 font-bold text-lg">Administralos</span>
      </p>
      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-500 uppercase font-bold">Nombre Mascota</label>
          <input 
          id="mascota"
          type="text" 
          placeholder="Nombre de las Mascota"
          className="border-2 w-full py-2 px-3 text-gray-500 mt-5  focus:outline-none focus:shadow-outline placeholder-gray-300 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-500 uppercase font-bold">Nombre del propietario</label>
          <input 
          id="propietario"
          type="text" 
          placeholder="Nombre del propietario"
          className="border-2 w-full py-2 px-3 text-gray-500 mt-5  focus:outline-none focus:shadow-outline placeholder-gray-300 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-500 uppercase font-bold">Email</label>
          <input 
          id="email"
          type="text" 
          placeholder="Email del propietario"
          className="border-2 w-full py-2 px-3 text-gray-500 mt-5  focus:outline-none focus:shadow-outline placeholder-gray-300 rounded-md"
          />
        </div>
          
        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-500 uppercase font-bold">Alta</label>
          <input 
          id="alta"
          type="date" 
          placeholder="Email del propietario"
          className="border-2 w-full py-2 px-3 text-gray-500 mt-5  focus:outline-none focus:shadow-outline placeholder-gray-300 rounded-md"
          />
          <textarea  
          id="sintomas" 
          cols="30" 
          rows="10"
          type="date" 
          placeholder="Describe los sintomas"
          className="border-2 w-full p-2 mt-2 text-gray-500 placeholder-gray-300 rounded-md"
          ></textarea>

          <input 
          type="submit"
          className="bg-orange-300 font-bold w-full uppercase text-white rounded-md hover:bg-orange-500 cursor-pointer"
          value="Agregar paciente" />
        </div>
        
      </form>
    </div>
  );
}

export default Form;
