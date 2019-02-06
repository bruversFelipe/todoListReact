import React from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

const styleItem = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const TodoList = ({ dataSource, excluiItem, editarItem }) => (
  <ListGroup>
    {dataSource.map(x => (
      <ListGroupItem key={x.key} style={styleItem}>
        {x.text}{" "}
        <div>
          <Button color="danger" onClick={() => excluiItem(x.key)}>
            {" "}
            {/* Esse modelo de function é para que ela seja acionada apenas no clique do botão, e passando a kkey como param de entrada*/}
            Excluir
          </Button>{" "}
          |{" "}
          <Button color="warning" onClick={() => editarItem(x)}>
            Editar
          </Button>{" "}
          {/* Observe que passei objeto inteiro*/}
        </div>
      </ListGroupItem>
    ))}
  </ListGroup>
);

export default TodoList;
