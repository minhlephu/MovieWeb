import { SET_STEP } from '../constrants/BookTicket'

const initialState = {
  // payment
  email: '',
  phone: '',
  paymentMethod: '',
  isReadyPayment: false,
  activeStep: 0,
}

const bookTicketReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_STEP: {
      return {
        ...state,
        activeStep: action.payload.activeStep
      }
    }

    default:
      return state;
  }
}

export default bookTicketReducer;