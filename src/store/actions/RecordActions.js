import { Dispatch } from "@reduxjs/toolkit";
import { fetchStrapi } from "../../api/apods";
import { RecordsTotalCountByUser,RecordsCountByUser, UserActionTypes, recordsByUser } from "./ActionTypes";

export const countTotalRequestSuccess = (data) => ({
  type: RecordsTotalCountByUser,
  payload: data,
});
export const countRequestSuccess = (data) => ({
  type: RecordsCountByUser,
  payload: data,
});
export const setRecordsByUser = (data) => ({
  type: recordsByUser,
  payload: data,
});

export const getRecordsTotalCountByUser = (user) => async (dispatch) => {
  try {
    const data = await fetchStrapi(`records?filters[billy_user][id][$eq]=${user}&pagination[withCount]=true`);
    if (data) {
      await dispatch(countTotalRequestSuccess());
      return data.meta.pagination.total;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error fetching user login:", error.message);
    throw error; // Rethrow the error so it can be caught in the component
  }
};
export const getRecordsByUserCount = (user) => async (dispatch) => {
  try {
    const channels = {
      1: 'SMS',
      2: 'EMAIL',
      3: 'WHATSAPP',
    };

    const counts = {};

    // Recorremos cada canal
    for (const [id, name] of Object.entries(channels)) {
      const response = await fetchStrapi(
        `records?filters[billy_user][id][$eq]=${user}&filters[channel][$eq]=${id}&pagination[pageSize]=1`
      );

      // Extraer total de la paginación (igual que en PHP)
      const total = response?.meta?.pagination?.total || 0;

      counts[name] = total;
    }

    // Despachar el resultado
    await dispatch(countRequestSuccess(counts));

    return counts;
  } catch (error) {
    console.error("Error fetching record counts:", error.message);
    throw error;
  }
};
export const getRecordsByUser = (user) => async (dispatch) => {
  try {
   
      const response = await fetchStrapi(
        `records?filters[billy_user][id][$eq]=${user}&pagination[pageSize]=10&sort=date:desc`
      );
      console.log(response);
      
    // Despachar el resultado
    await dispatch(setRecordsByUser(response));
    return response;
  } catch (error) {
    console.error("Error fetching record counts:", error.message);
    throw error;
  }
};


export default { getRecordsTotalCountByUser,getRecordsByUserCount,getRecordsByUser };
