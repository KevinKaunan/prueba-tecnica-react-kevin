import { useContext, useEffect, useState } from "react";
import getData from "services/getData";
import DataContext from "context/DataContext";
const INITIAL_PAGE = 0;

export function useData({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const { data, setData } = useContext(DataContext);
  // recuperamos la keyword del localStorage
  const keywordToUse =
    keyword || localStorage.getItem("lastKeyword") || "series";

  useEffect(
    function () {
      setLoading(true);

      getData({ keyword: keywordToUse }).then((data) => {
        setData(data);
        setLoading(false);
        // gaurdamos la keyword en el localStorage
        localStorage.setItem("lastKeyword", keyword);
      });
    },
    [keyword, setData, keywordToUse]
  );

  useEffect(
    function () {
      if (page === INITIAL_PAGE) return;
      setLoadingNextPage(true);
      getData({ keyword: keywordToUse, page }).then((nextData) => {
        setData((prevData) => prevData.concat(nextData));
        setLoadingNextPage(false);
      });
    },
    [page, keywordToUse, setData]
  );
  return { loading, loadingNextPage, data, setPage };
}
