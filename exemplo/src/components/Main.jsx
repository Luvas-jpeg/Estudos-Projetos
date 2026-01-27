import React, { Component } from "react";
import './Main.css';
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';

export default class Main extends Component {

  state = {
    novaTarefa: '',
    tarefa: []
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefa, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim()

    if (tarefa.indexOf(novaTarefa) ==! -1) return;

    const novasTarefas = [...tarefa];

    if (index === -1) {
      this.setState({
        tarefa: [...novasTarefas, novaTarefa],
        novaTarefa: "",
        index: -1,
      });
    } else {
      novasTarefas[index] = novaTarefa;

      this.setState({
        tarefa: [...novasTarefas],
        index: -1
      })
    }


  }

  handleEdit = (e, index) => {
    const { tarefa } = this.state;


    this.setState({
      index: index,
      novaTarefa: tarefa[index]
    })
  }

  handleDelete = (e, index) => {
    const { tarefa } = this.state;
    const novasTarefas = [...tarefa];
    novasTarefas.splice(index, 1);

    this.setState({
      tarefa: [...novasTarefas]
    });

  }


  textoEnviado = (e) => {
    this.setState({
      novaTarefa: e.target.value
    })
  }

  render() {
    const { novaTarefa, tarefa } = this.state;

    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>

        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input
            onChange={this.textoEnviado}
            type="text"
            value={novaTarefa}
          />
          <button type="submit"><FaPlus /></button>
        </form>
        <ul className="tarefas">
          {tarefa.map((tarefa, index) => (
            <li key={tarefa}>{tarefa}
              <span>
                <FaEdit onClick={(e) => this.handleEdit(e, index)} className="edit" />
                <FaWindowClose onClick={(e) => this.handleDelete(e, index)} className="delete" />
              </span>
            </li>
          )
          )}
        </ul>
      </div>
    )
  }
}
