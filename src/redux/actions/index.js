import ActionTypes from "./../reducers/actionType";
import api from "./../../utils/api";

// kullanıcı idsi
const account_id = "22031314";

// listedeki filmleri alıp reducera aktaran thunk aksiyonu
export const getWatchList = () => async (dispatch) => {
  dispatch({ type: ActionTypes.LIST_LOADING });

  api
    .get(`/account/${account_id}/watchlist/movies`)
    .then((res) =>
      dispatch({ type: ActionTypes.LIST_SUCCESS, payload: res.data.results })
    )
    .catch((err) =>
      dispatch({ type: ActionTypes.LIST_ERROR, payload: err.message })
    );
};

// izleme listesine film ekleyen thunk aksiyonu
export const toggleWatchList = (movie, isAdd) => async (dispatch) => {
  //body içeriğini hazırla
  const body = {
    media_type: "movie",
    media_id: movie.id,
    watchlist: isAdd,
  };
  //api isteğini yap
  api
    .post(`/account/${account_id}/watchlist`, body)
    .then(() => {
      // ekleme çıkarma durumuna göre aksiyonu dispatch et
            isAdd
              ? dispatch({ type: ActionTypes.ADD_TO_LIST, payload: movie })
              : dispatch({ type: ActionTypes.REMOVE_FROM_LIST, payload: movie.id });
          })
          .catch((err) =>
            dispatch({ type: ActionTypes.LIST_ERROR, payload: err.message })
          );
      };