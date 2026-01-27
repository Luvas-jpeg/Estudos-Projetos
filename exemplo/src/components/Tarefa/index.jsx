import React from "react";
import PropTypes from "prop-types";
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';
import './Tarefa.css'

export default function Tarefa({ tarefa, handleEdit, handleDelete }) {
  return (
    <ul className="tarefas">
      {tarefa.map((tarefa, index) => (
        <li key={tarefa}>{tarefa}
          <span>
            <FaEdit onClick={(e) => handleEdit(e, index)} className="edit" />
            <FaWindowClose onClick={(e) => handleDelete(e, index)} className="delete" />
          </span>
        </li>
      )
      )}
    </ul>
  )
}

Tarefa.proTypes = {
  tarefa: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
}
