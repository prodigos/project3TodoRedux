import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const TodoForm = ( {dispatch} ) => {

    // here the todos are going to be submitted
    let input

    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            dispatch(addTodo(input.value))
            input.value = ''
          }}
        >
          <input ref={node => (input = node)} />
          <button type="submit">Add To do</button>
        </form>
      </div>
    )

}

export default connect()(TodoForm);