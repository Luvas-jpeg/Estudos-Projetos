import React, { Component } from "react";
import './Main.css';
import Form from "./Form";
import Tarefa from "./Tarefa";

export default class Main extends Component {

  state = {
    novaTarefa: '',
    tarefa: []
  };

  componentDidMount(){
    const tarefa = JSON.parse(localStorage.getItem('tarefa'))

    if(!tarefa) return;

    this.setState({tarefa})
  }

  componentDidUpdate(prevProps, prevState){
    const { tarefa } = this.state;

    if(tarefa === prevState.tarefa) return;

    localStorage.setItem('tarefa', JSON.stringify(tarefa))
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

  handleChange = e =>{
    this.setState({
      novaTarefa: e.target.value
    })
  }


  render() {
    const { novaTarefa, tarefa } = this.state;

    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>
        <Form
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        novaTarefa={novaTarefa}
        ></Form>

        <Tarefa
        tarefa={tarefa}
        handleDelete={this.handleDelete}
        handleEdit={this.handleEdit}
        ></Tarefa>
      </div>
    )
  }
}
