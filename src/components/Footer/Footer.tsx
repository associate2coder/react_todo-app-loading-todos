import React from 'react';
import { FilterTodos } from '../FilterTodos';

interface Props {
  activeTodoCount: number;
  completedTodoCount: number;
  filterQuery: string;
  setFilterQuery: (newQuery: string) => void;
}

export const Footer: React.FC<Props> = React.memo(
  ({ activeTodoCount, completedTodoCount, filterQuery, setFilterQuery }) => {
    return (
      <footer className="todoapp__footer" data-cy="Footer">
        <span className="todo-count" data-cy="TodosCounter">
          {`${activeTodoCount} items left`}
        </span>

        <FilterTodos
          filterQuery={filterQuery}
          setFilterQuery={setFilterQuery}
        />

        {/* Button is disabled if there are no completed todos */}
        {completedTodoCount && (
          <button
            type="button"
            className="todoapp__clear-completed"
            data-cy="ClearCompletedButton"
            // 'Clear completed' logic will be added
          >
            Clear completed
          </button>
        )}
      </footer>
    );
  },
);

Footer.displayName = 'Footer';
