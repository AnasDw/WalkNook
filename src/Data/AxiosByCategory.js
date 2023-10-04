import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = (category) => {
  const Api = `https://9d80ab57-3042-480f-b540-ac18fc9663d3.mock.pstmn.io/WalkNookApi?Category=${category}`;
  const [res, setRes] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchDataUsingAxios(Api);
  }, []);

  const fetchDataUsingAxios = async (Api) => {
    await axios
      .get(Api)
      .then((res) => setRes(res))
      .catch((err) => setErr(err))
      .finally(() => setLoading(false));
  };
  return [res, err, loading];
};
export default useAxios;
