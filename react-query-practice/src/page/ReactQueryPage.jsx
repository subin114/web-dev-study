import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ReactQueryPage = () => {
  const fetchPost = () => {
    return axios.get("http://localhost:5000/posts");
  };

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPost,
    retry: 1,
    select: (data) => {
      return data.data;
    },
  });
  console.log("data?", data);
  console.log("loading?", isLoading);
  console.log("error?", isError, error);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div>
      {data.map((item, idx) => (
        <div key={idx}>{item.title}</div>
      ))}
    </div>
  );
};

export default ReactQueryPage;
