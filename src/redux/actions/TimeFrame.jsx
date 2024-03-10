import { timeFrameService } from "../../services/TimeFrameService";
import {
  ADD_TIMEFRAME_REQUEST,
  ADD_TIMEFRAME_SUCCESS,
  DELETE_TIMEFRAME_FAIL,
  DELETE_TIMEFRAME_REQUEST,
  DELETE_TIMEFRAME_SUCCESS,
  GET_TIMEFRAME_LIST_FAIL,
  GET_TIMEFRAME_LIST_REQUEST,
  GET_TIMEFRAME_LIST_SUCCESS,
  UPDATE_TIMEFRAME_FAIL,
  UPDATE_TIMEFRAME_REQUEST,
  UPDATE_TIMEFRAME_SUCCESS,
} from "../constrants/TimeFrame";

export const getTimeFrameList = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_TIMEFRAME_LIST_REQUEST,
    });
    try {
      const result = await timeFrameService.getListTimeFrame();
      dispatch({
        type: GET_TIMEFRAME_LIST_SUCCESS,
        payload: { data: result.data.data },
      });
    } catch (error) {
      dispatch({
        type: GET_TIMEFRAME_LIST_FAIL,
        payload: {
          error: error.response?.data
            ? error.response.data.status
            : error.message,
        },
      });
    }
  };
};

export const updateTimeFrame = (timeFrame) => {
  return async (dispatch) => {
    dispatch({
      type: UPDATE_TIMEFRAME_REQUEST,
    });
    timeFrameService
      .updateTimeFrame(timeFrame)
      .then((result) => {
        dispatch({
          type: UPDATE_TIMEFRAME_SUCCESS,
          payload: { data: result.data.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_TIMEFRAME_FAIL,
          payload: {
            error: error.response?.data
              ? error.response.data.status
              : error.message,
          },
        });
      });
  };
};

export const addTimeFrame = (timeFrame) => {
  return async (dispatch) => {
    dispatch({
      type: ADD_TIMEFRAME_REQUEST,
    });
    timeFrameService
      .createTimeFrame(timeFrame)
      .then((result) => {
        dispatch({
          type: ADD_TIMEFRAME_SUCCESS,
          payload: { data: result.data.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_TIMEFRAME_FAIL,
          payload: {
            error: error.response?.data
              ? error.response.data.status
              : error.message,
          },
        });
      });
  };
};

export const deleteTimeFrame = (id) => {
  return async (dispatch) => {
    dispatch({
      type: DELETE_TIMEFRAME_REQUEST,
    });
    timeFrameService
      .deleteTimeFrame(id)
      .then((result) => {
        dispatch({
          type: DELETE_TIMEFRAME_SUCCESS,
          payload: { data: result.data.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: DELETE_TIMEFRAME_FAIL,
          payload: {
            error: error.response?.data
              ? error.response.data.status
              : error.message,
          },
        });
      });
  };
};
