import { RecordsTotalCountByUser, RecordsCountByUser, recordsByUser } from "../actions/ActionTypes";

const initialState = {
  totalCounterRecords: null,
  counterRecords: null,
  recentRecords: [],
  records: []
};

const RecordReducer = (state = initialState, action) => {
  switch (action.type) {
    case RecordsTotalCountByUser:
      return {
        ...state,
        totalCounterRecords: action.payload,
      };
    case RecordsCountByUser:
      return {
        ...state,
        counterRecords: action.payload,
      };
    case recordsByUser:
      return {
        ...state,
        records: action.payload,
      };
    default:
      return state;
  }
};

export default RecordReducer;
