import React from "react";
import { Input, Button } from "reactstrap";

const row = {
  display: "flex",
  justifyContent: "space-between"
};

const TodoForm = ({ valueInput, changeInput, addList, validaButton }) => (
  <div style={row}>
    <Input
      placeholder="Coisas a fazer"
      onChange={changeInput}
      value={valueInput}
    />
    <Button color="primary" onClick={addList}>
      {validaButton ? "Atualizar" : "Adicionar"}
    </Button>
  </div>
);

export default TodoForm;
