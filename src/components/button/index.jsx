import React from "react";
import { BsBookmarkPlusFill as Add, BsBookmarkDashFill as Remove } from "react-icons/bs";
import { useSelector, useDispatch  } from "react-redux";
import { toggleWatchList } from "../../redux/actions";

const Button = ({ movie }) => {
    const dispatch = useDispatch();
  // izleme listesindeki film verilerini al
  const { list } = useSelector((store) => store);

  // prop olarak gelen film izleme listesinde var mı?
  const isAdded = !!list.find((item) => item.id === movie.id);

  // izleme listesine film ekleme veya kaldırma işlemi
  const handleClick = () => {
   dispatch(toggleWatchList(movie, !isAdded))};

  return (
    <button onClick={handleClick} className="bg-blue-600 hover:bg-blue-700 hero-btn cursor-pointer min-w-[140px] px-5">
      {isAdded ? (
        <>
          <Remove />
          Listeden Kaldır
        </>
      ) : (
        <>
          <Add />
          Listeye Ekle
        </>
      )}
    </button>
  );
};

export default Button;
