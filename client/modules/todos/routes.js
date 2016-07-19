import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout';

import TodosAdd from './containers/todos_add';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/todos/add', {
    name: 'todos.add',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<TodosAdd />)
      });
    }
  });
}
