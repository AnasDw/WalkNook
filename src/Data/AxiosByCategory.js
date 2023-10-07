import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = (category) => {
  let Api = `https://65204129906e276284c44274.mockapi.io/Example`;
  const [res, setRes] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchDataUsingAxios(Api);
  }, [category]);

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

export const UpdateData = (category, newData) => {
  let Api = `https://65204129906e276284c44274.mockapi.io/Example`;
  axios.put(
    `https://65204129906e276284c44274.mockapi.io/Example/${newData.id}`,
    newData
  ).then((res)=>{console.log(res)}).catch( (e) => {console.error(e);});
};

function getApiVersion(category) {
  if (category === "d" || category === "men") {
    Api = `https://651e67ea44a3a8aa4768483d.mockapi.io/WalkNook`;
  } else if (category === "women") {
    Api = `https://651e6a7e44a3a8aa47684cd7.mockapi.io/WalkNookWomen`;
  } else if (category === "kids") {
    Api = `https://651e74b244a3a8aa476866b3.mockapi.io/WalkNookkids`;
  }
}
