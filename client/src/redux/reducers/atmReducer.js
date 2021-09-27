const initialState = {
  numbers: '',
  bills: [
    { number: 5000, amount: 100 },
    { number: 2000, amount: 400 },
    { number: 1000, amount: 1000 },
    { number: 500, amount: 3000 },
    { number: 200, amount: 5000 },
    { number: 100, amount: 8000 },
    { number: 50, amount: 10000 },
  ],
  leftover: 0,
  withdrawedMoney: 0,
};

export default function atmRecuder(state = initialState, action) {
  switch (action.type) {
    case 'SET_MODE':
      return {
        numbers: '',
        bills: action.payload,
        leftover: 0,
        withdrawedMoney: 0,
      };

    case 'ADD_NUMBER':
      return {
        ...state,
        numbers: state.numbers + action.payload,
      };

    case 'REMOVE_NUMBER':
      return {
        ...state,
        numbers: state.numbers.slice(0, -1),
      };

    case 'CLEAR_NUMBERS':
      return {
        ...state,
        numbers: '',
      };

    case 'WITHDRAW': {
      const newState = {
        numbers: state.numbers,
        bills: state.bills,
      };

      if (newState.numbers > 0) {
        for (let i = 0; i < newState.bills.length; i++) {
          while (newState.numbers - newState.bills[i].number >= 0) {
            if (newState.bills[i].amount === 0) {
              break;
            } else {
              newState.numbers -= newState.bills[i].number;
              newState.bills[i].amount -= 1;
            }
          }
        }
      }

      return {
        ...state,
        leftover: newState.numbers,
        bills: newState.bills,
        withdrawedMoney: state.numbers - newState.numbers,
      };
    }

    default:
      return state;
  }
}
