import useSWR from 'swr';
import fetcher from '@/lib/fetcher';


const useShowtime = (id?: String) => {
  const { data, error, isLoading } = useSWR(id ? `/api/movies/${id}` : null, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    data,
    error,
    isLoading
  }
};

export default useShowtime;