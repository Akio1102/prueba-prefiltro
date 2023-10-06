import { useContext, useEffect } from "react";
import { MainContext } from "../../Context/MainContext.jsx";
import TrUsuarios from "../Tr/TrUsuarios.jsx";

export default function BodyUsuarios() {
  const { Usuarios, getUsuarios } = useContext(MainContext);

  useEffect(() => {
    getUsuarios();
  }, []);

  return (
    <tbody>
      {Usuarios.map((user, index) => (
        <TrUsuarios user={user} index={index} key={index + 1} />
      ))}
    </tbody>
  );
}
