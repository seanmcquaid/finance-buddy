import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import Entries from '..';
import configureStore from '../../../../store';
import {
  fixedCostsEntriesAsObjectSelector,
  fixedCostsEntriesSelector,
} from '../../../../store/budget/selectors';
import {
  deleteFixedCostEntryAction,
  updateFixedCostEntryAction,
} from '../../../../store/budget/actions';

describe('<Entries/>', () => {
  describe('onChange', () => {
    it('event.target.value contains only numbers', () => {
      const { store } = configureStore({
        budget: {
          fixedCostsPercentage: 0.3,
          fixedCosts: { rent: 1000 },
          fixedCostsTotal: 0,
          flexibleSpendingPercentage: 0.2,
          flexibleSpending: {
            food: 500,
          },
          flexibleSpendingTotal: 0,
          savingsPercentage: 0.5,
          savings: {
            chase: 1500,
          },
          savingsTotal: 0,
          totalBudget: 3000,
          remainingAmount: 0,
          totalPercentage: 100,
        },
      });
      render(
        <Provider store={store}>
          <Entries
            entriesSelector={fixedCostsEntriesSelector}
            entriesAsObjectSelector={fixedCostsEntriesAsObjectSelector}
            updateEntryAction={updateFixedCostEntryAction}
            deleteEntryAction={deleteFixedCostEntryAction}
          />
        </Provider>,
      );
      screen.getByTestId('rentTextInput');
    });

    it('event.target.value contains a non number', () => {});
  });
});
