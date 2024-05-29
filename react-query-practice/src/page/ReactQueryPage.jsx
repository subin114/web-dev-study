import { useQueries, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { usePostQuery } from "../hooks/usePosts";

const ReactQueryPage = () => {
  const ids = [1, 2, 3, 4];

  const fetchPostDetail = (id) => {
    return axios.get(`http://localhost:5000/posts/${id}`);
  };

  const results = useQueries({
    queries: ids.map((id) => {
      return {
        queryKey: ["posts", id],
        queryFn: () => fetchPostDetail(id),
      };
    }),
    combine: (results) => {
      return {
        data: results.map((result) => result.data.data),
      };
    },
  });

  console.log("rr", results);

  return <div></div>;
};

// const ReactQueryPage = () => {
//   const { data, isLoading, isError, error, refetch } = usePostQuery();
//   console.log("data?", data);
//   console.log("loading?", isLoading);
//   console.log("error?", isError, error);

//   if (isLoading) {
//     return <h1>Loading...</h1>;
//   }
//   if (isError) {
//     return <h1>{error.message}</h1>;
//   }
//   return (
//     <div>
//       {data?.map((item, idx) => (
//         <div key={idx}>{item.title}</div>
//       ))}
//       <button onClick={refetch}>post 리스트 다시 들고오기</button>
//     </div>
//   );
// };

export default ReactQueryPage;
