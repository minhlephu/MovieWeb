import { SET_STEP } from '../constrants/BookTicket'

const initialState = {
  // payment
  email: '',
  phone: '',
  paymentMethod: '',
  isReadyPayment: false,
  activeStep: 0,
}

const BookTicketReducer = (state = initialState, action) => {
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

export default BookTicketReducer;