import React from 'react'
import { useRouter } from 'next/router';

interface SingleMovieProps {
    id: string;
    bannerUrl: string;
}

const SingleMovie: React.FC<SingleMovieProps> = ({id,bannerUrl}) => {
    const router = useRouter();

  return (
    <div className='single-movie'>
        <img onClick={() => router.push(`/movie/${id}`)} className='h-full rounded-[10px] hover:-[2px] hover:outline-white' src={bannerUrl}></img>
    </div>
  )
}

export default SingleMovie