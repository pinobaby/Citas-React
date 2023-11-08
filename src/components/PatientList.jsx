import { Paciente } from "./Paciente";

const ListPatient = ({ pacientes }) =>{
  console.log(pacientes);
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-x-scroll">
      <h2 className="font-black text-3xl text-center ">Listado de pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus{""}
        <span className="text-orange-300 font-bold "> pacientes y citas</span>
      </p>

      {pacientes.map ( paciente => {
        
        <Paciente
          paciente={paciente}
         />
        
      })}

     
    </div>
  );
}

export default ListPatient;
