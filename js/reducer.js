let state = {count: 0}

function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

function dispatch(action) {
  state = changeState(state, action)
  return state
}
//store change as updated state

// dispatch({type: 'INCREASE_COUNT'})
//call dispatch function, pass in action

function render() {
  document.body.textContent = this.state.count
}

render()
//invoke