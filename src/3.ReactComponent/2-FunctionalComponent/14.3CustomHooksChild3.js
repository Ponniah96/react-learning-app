import { useEffect, useState } from "react";

export default function useResponse(data) {
  const [response, setResponse] = useState(null);
  useEffect(() => {
    fetch(data)
      .then((res) => res.json())
      .then((data) => setResponse(data))
      .catch(err=>{console.log(err)});
  }, [data]);
  return [response];
}
