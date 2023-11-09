import { Paciente } from "./Paciente";



const ListaPacientes = ({ pacientes, setPaciente }) => {


  return (
    
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-x-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center ">
            Listado de pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus{""}
            <span className="text-orange-300 font-bold ">
              {" "}
              pacientes y citas
            </span>
          </p>

          {pacientes.map((paciente) => (
            // eslint-disable-next-line react/jsx-key
            <Paciente 
            key={paciente.id} 
            paciente={paciente}
            setPaciente={setPaciente}
            />
          ))}
          
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center ">
            No hay pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes {""}
            <span className="text-orange-300 font-bold ">
              {" "}
              y apareceran aqui
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListaPacientes;
