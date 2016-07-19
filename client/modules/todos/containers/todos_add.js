import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import TodosAdd from '../components/todos_add';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  todosAdd: actions.todos.todosAdd,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(TodosAdd);
