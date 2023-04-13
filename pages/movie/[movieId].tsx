import React from 'react'
import useMovie from '@/hooks/useMovie'
import { useRouter } from 'next/router';

import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import Genre from '@/components/Genre';
import Actor from '@/components/Actor';

const Movie = () => {
	const router = useRouter();
	const { movieId } = router.query;

	const { data } = useMovie(movieId as string);
	

  return (
    <div>
		<div className='relative px-[9.5vw]'>
			<div className='h-[100vh] flex flex-col relative z-10'>
				<Navbar/>
				<div className='flex flex-1 items-center'>
					<div className='w-4/6 flex flex-col'>
						<h1 className='text-white mb-[24px]'>{data?.title}</h1>
						<p className='text-text mb-[40px]'>{data?.description}</p>
						<div className='flex gap-[12px]'>
							<Button 
							type="primary"
							label="Buy Tickets"
							/>
							<Button 
							type="secondary"
							label="Watch Trailer"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='w-full h-full object-cover absolute left-0 top-0 z-[2] movie-overlay-gradient'></div>
			<img className='w-full h-full object-cover absolute left-0 top-0 z-[1]' src={data?.thumbnailUrl}/>
		</div>
		<div className='flex px-[9.5vw]'>
			<div className='w-2/6 pr-[110px]'>
				<img className='rounded-[10px]' src={data?.bannerUrl}></img>
			</div>
			<div className='w-4/6'>
				<div className='mb-[60px]'>
					<h4 className='mb-[28px] text-white'>Storyline</h4>
					<p className='text-text'>{data?.storyline}</p>
				</div>

				{/*Genres*/}
				<div className='mb-[60px]'>
					<h4 className='mb-[28px] text-white'>Details</h4>
					<div className='grid grid-cols-4 py-[20px] border-b-[1px] border-primaryvariant1'>
						<h6 className='text-white'>Genres</h6>
						<div className='flex gap-[8px] col-span-3'>
							{data?.genre.map((item) => (
								<Genre title={item}/>
							))}
						</div>
					</div>
					<div className='grid grid-cols-4 py-[20px] border-b-[1px] border-primaryvariant1'>
						<h6 className='text-white'>Duration</h6>
						<p className='text-white'>{data?.duration}</p>
					</div>
					<div className='grid grid-cols-4 py-[20px] border-b-[1px] border-primaryvariant1 '>
						<h6 className='text-white'>Release Year</h6>
						<p className='text-white'>{data?.releaseYear}</p>
					</div>
					<div className='grid grid-cols-4 py-[20px] border-b-[1px] border-primaryvariant1'>
						<h6 className='text-white'>Writers</h6>
						<div className='flex gap-[8px] col-span-3'>
							{data?.writers.map((writer, index) => (
								<p className='text-white flex'>{writer}<span className={`${ index === data?.writers.lenght - 1 ? 'hidden' : 'flex'}`}>,</span></p>
							))}
						</div>
					</div>
				</div>

				{/*Cast & Crew*/}
				<div className='mb-[60px]'>
					<h4 className='mb-[28px] text-white'>Cast & Crew</h4>
					<div className='grid grid-cols-2 gap-[28px]'>
						{data?.actors.map((actor, index) =>(
							<Actor avatar={data?.actorImagesUrl[index]} realName={actor} movieName={data?.casts[index]}/>
						))}
					</div>
				</div>

			</div>
		</div>
	</div>
  )
}

export default Movie