import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchPost = () => {
  // const id = queryData.queryKey[1];
  return axios.get(`http://localhost:5000/posts`);
};

export const usePostQuery = () => {
  return useQuery({
    queryKey: ["posts"], // 여러 값 작성 가능. 유니크하기만 하면 됨
    queryFn: () => fetchPost(),
    retry: 1,
    select: (data) => {
      return data.data;
    },
    // staleTime: 60000, // 1분간 api 호출 금지
    // gcTime: 10000, // 10초만 캐시가 유지. stale < gctime
    // enabled: false, // 버튼 클릭할 때만 API 호출
  });
};
