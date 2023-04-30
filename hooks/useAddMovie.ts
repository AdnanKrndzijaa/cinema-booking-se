import useSWR from 'swr';

import fetcher from '@/lib/fetcher';

const useAddMovie = () => {
	const { data, error, isLoading, mutate } = useSWR('/api/insertmovie', fetcher);

	return {
		data,
		error,
		isLoading,
		mutate
	}
}

export default useAddMovie