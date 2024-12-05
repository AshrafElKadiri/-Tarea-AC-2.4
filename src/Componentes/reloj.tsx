import { useState, useEffect } from "react";

// Tipo para los instantes guardados
interface InstanteActual {
  hora: Date;
}

function Reloj() :JSX.Element {
    
    const [instantesGuardados, setInstantesGuardados] = useState<InstanteActual[]>([]);
    const [horaActual, setHoraActual] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
            setHoraActual(new Date());
        }, 1000);

    return () => clearInterval(interval);
  }, []);

  const guardarInstante = () => {
    setInstantesGuardados((prev) => [...prev, { hora: horaActual }]);
  };

  const formatearHora = (fecha: Date): string => {
    const horas = fecha.getHours().toString().padStart(2, "0");
    const minutos = fecha.getMinutes().toString().padStart(2, "0");
    const segundos = fecha.getSeconds().toString().padStart(2, "0");
    return `${horas}:${minutos}:${segundos}`;
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
    <div>
        <h2 style={{ marginBottom: '20px', fontSize: '150px', fontWeight: 'bold' }}>{formatearHora(horaActual)}</h2>
    </div>
      
    <button onClick={guardarInstante} style={{ padding: "10px", marginTop: "20px" }}>
        Guardar instante actual
    </button>
    <div>
        <h3>Instantes guardados:</h3>
        <ul>
          {instantesGuardados.map((instante, index) => (
            <li key={index}>{formatearHora(instante.hora)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Reloj;
