import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class TodoContainer extends React.Component {
  state = {
    valueInput: "",
    dataSource: [],
    idMarcado: 0
  };

  changeInput = e => {
    const valueInput = e.target.value;
    this.setState({
      valueInput
    }); //armazena o valor do input na state.
  };

  addList = () => {
    const { valueInput, dataSource, idMarcado } = this.state;
    if (idMarcado > 0) {
      this.atualizaList(valueInput, dataSource, idMarcado);
    } else {
      if (valueInput !== "") {
        const key = (Math.random() * 100).toFixed(0); // cria um número randomico para key

        this.setState({
          dataSource: [...dataSource, { key: Number(key), text: valueInput }], // o spread "...datasource" serve para manter as informações que a state tem no momento para poder adicionar mais
          valueInput: ""
        });
      }
    }
  };

  atualizaList = (valueInput, dataSource, idMarcado) => {
    const elemento = dataSource.filter(x => x.key === idMarcado)[0];
    console.log("elemento", elemento); // verifique o elemento
    const index = dataSource.indexOf(elemento);
    console.log("index", index); // verifique o index
    const obj = {
      key: idMarcado,
      text: valueInput
    };
    dataSource.splice(index, 1, obj); // alterando o index marcado
    this.setState({
      dataSource: [...dataSource], // atualizando datasource
      valueInput: "",
      idMarcado: 0
    });
  };

  excluiItem = key => {
    let { dataSource } = this.state;
    const newData = dataSource.filter(x => x.key !== key);
    this.setState({
      dataSource: newData
    });
  };

  editarItem = obj => {
    // salvo o valor da linha no input e o id marcado para sinalizar que possuo uma ediçao no momento
    this.setState({
      valueInput: obj.text,
      idMarcado: obj.key
    });
  };

  render() {
    const { valueInput, dataSource, idMarcado } = this.state;
    console.log("valueInput", valueInput); // observe o valor do input
    console.log("dataSource", dataSource); // observe o datasource sendo preenchido
    return (
      <React.Fragment>
        <TodoForm
          valueInput={valueInput}
          changeInput={this.changeInput}
          addList={this.addList}
          validaButton={idMarcado > 0}
        />
        <br />
        {dataSource.length > 0 && (
          <TodoList
            dataSource={dataSource}
            excluiItem={this.excluiItem}
            editarItem={this.editarItem}
          />
        )}
      </React.Fragment>
    );
  }
}

export default TodoContainer;
