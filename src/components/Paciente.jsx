export const Paciente = ({paciente}) => {
  console.log(paciente);
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className=" font-normal normal-case">Hook</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className=" font-normal normal-case">Pinoles</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className=" font-normal normal-case">pinoles@gmail.com</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {""}
        <span className=" font-normal normal-case">10/11/23</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className=" font-normal normal-case">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          voluptates repudiandae unde inventore sapiente perferendis alias
          ducimus facere cumque in enim magnam, optio ad, eius illo corporis,
          eligendi quas? A.{" "}
        </span>
      </p>
    </div>
  );
};


