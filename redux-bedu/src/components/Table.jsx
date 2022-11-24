const Table = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <td>Nombre</td>
          <td>Correo</td>
          <td>Enlace</td>
        </tr>
      </thead>
      <tbody>
        {props.children}
      </tbody>
    </table>
  );
}

export default Table;
