import { BaseColaboradores } from './BaseColaboradores';
import { useState } from 'react';

function App() {
  // se declaran los hook
  const [baseColaboradores, setBaseColaboradores] = useState(BaseColaboradores)
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [buscarNombre, setBuscarNombre] = useState('')

  const capturarName = (inName) => {
    //se ingrega el nombre y email por medio de los hook correspondientes
    setNombre(inName.target.value)
  }
  const capturarEmail = (inEmail) => {
    setEmail(inEmail.target.value)
  }

  const agregarColaborador = (e) => {
    //preventDefault se uutiliza para prevenir el comportamiento predeterminado
    e.preventDefault()
    //se agregan los datos mediante spread y se da  id al azar
    setBaseColaboradores([...baseColaboradores, { id: ('000' + (Date.now() % 100000)).slice(-4), nombre: nombre, correo: email }])
  }

  const buscarColaborador = (e) => {
    setBuscarNombre(e.target.value)
  }

  //se agrega el elemento filtrado a n nuevo arreglo, se compara por medio del metodo includes
  //y se especifica que ambos parametros de comparacion sean en minuscula por medio de tolowercase
  const filtroColaborador = baseColaboradores.filter((iName) =>
    iName.nombre.toLowerCase().includes(buscarNombre.toLowerCase()))

  return (
    <div className="App">
      {/* filtro agregar input a izierda y un texto a la derecha "Bscador de Colaboradores" */}
      <div className="input-group mb-3 buscar">
        <input type="text" className="form-control"  aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={buscarColaborador} placeholder='Ingrese nombre de colaborador'></input>
        <span className="input-group-text" id="basic-addon2">Bucador de Colaboradores</span>
      </div>

      {/* se ingrega nombre y correo para que la fncion los agregre*/}
      <form onSubmit={agregarColaborador}>
        <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon2">Nombre del colaborador</span>
        <input type="text" className="form-control"  aria-label="Recipient's username" aria-describedby="basic-addon2"  onChange={capturarName} placeholder='Ingresa el nombre del colaborador'></input>
        </div>
        <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon2">Email del colaborador</span>
        <input type="text" className="form-control"  aria-label="Recipient's username" aria-describedby="basic-addon2"  onChange={capturarEmail} placeholder='Ingresa el Email del colaborador'></input>
        </div>
        <button class="btn btn-outline-primary">Agregar Colaborador</button>
      </form>

      {/* agregar linea de separacion mediante esilo */}
      <div>
        <h1>Lista de colaboradores</h1>
        <table class="table table-dark table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          {/* se imprimen los colaboradores por pantalla */}
          <tbody>
            {filtroColaborador.map(index => <tr key={index.id}>
              <td>{index.id}</td>
              <td>{index.nombre}</td>
              <td>{index.correo}</td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
