import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ReactQueryPage = () => {
  const fetchPost = (queryData) => {
    const id = queryData.queryKey[1];
    return axios.get(`http://localhost:5000/posts/${id}`);
  };

  const { isLoading, data, isError, error, refetch } = useQuery({
    queryKey: ["posts", 1], // 여러 값 작성 가능. 유니크하기만 하면 됨
    queryFn: fetchPost,
    retry: 1,
    // staleTime: 60000, // 1분간 api 호출 금지
    // gcTime: 10000, // 10초만 캐시가 유지. stale < gctime
    // enabled: false, // 버튼 클릭할 때만 API 호출
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
      {/* {data?.map((item, idx) => (
        <div key={idx}>{item.title}</div>
      ))} */}
      <button onClick={refetch}>post 리스트 다시 들고오기</button>
    </div>
  );
};

export default ReactQueryPage;
