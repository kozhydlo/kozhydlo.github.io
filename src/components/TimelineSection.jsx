import { memo } from 'react'

const TimelineSection = () => {
	const timelineData = [
		{
			title: 'Senior Full-Stack Developer',
			period: '2024 - Present',
			description:
				'Leading complex web applications with modern tech stacks. Specializing in React, Node.js, and cloud architecture. Mentoring junior developers and driving technical innovation.',
			gradient: 'from-cyan-400 to-purple-500',
			side: 'left',
		},
		{
			title: 'Frontend Specialist',
			period: '2022 - 2024',
			description:
				'Focused on creating exceptional user experiences with React, Vue.js, and modern CSS. Developed responsive designs and implemented complex UI/UX requirements.',
			gradient: 'from-indigo-500 to-purple-600',
			side: 'right',
		},
		{
			title: 'Junior Developer',
			period: '2020 - 2022',
			description:
				'Started my professional journey building web applications with JavaScript, PHP, and MySQL. Learned the fundamentals of software development and agile methodologies.',
			gradient: 'from-pink-500 to-purple-500',
			side: 'left',
		},
	]

	return (
		<section className='mb-20 mt-16'>
			{/* Заголовок */}
			<div className='text-center mb-12 md:mb-16'>
				<h2 className='text-3xl md:text-5xl font-bold mb-4 text-white'>
					Professional Journey
				</h2>
				<p className='text-base md:text-lg text-gray-400 max-w-2xl mx-auto'>
					From curious beginner to digital craftsman—a timeline of growth,
					learning, and innovation.
				</p>
			</div>

			{/* Timeline */}
			<div className='relative max-w-6xl mx-auto'>
				{/* Вертикальна лінія */}
				<div className='absolute left-[35px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-cyan-400 via-indigo-500 to-purple-600'></div>

				<div className='space-y-12 md:space-y-16'>
					{timelineData.map((item, index) => (
						<div
							key={index}
							className='relative grid grid-cols-[60px_1fr] md:grid-cols-[1fr_60px_1fr] items-center'
						>
							{/* LEFT content (desktop only if side=left) */}
							{item.side === 'left' && (
								<div className='hidden md:flex justify-end pr-8'>
									<div className='bg-gray-900/50 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 max-w-2xl w-full text-right'>
										<h3 className='text-2xl font-bold text-white mb-2'>
											{item.title}
										</h3>
										<p className='text-[#a855f7] font-semibold mb-3'>
											{item.period}
										</p>
										<p className='text-gray-400 text-base leading-relaxed'>
											{item.description}
										</p>
									</div>
								</div>
							)}

							{/* Circle column */}
							<div className='flex justify-center relative'>
								<div
									className={`w-5 h-5 rounded-full bg-gradient-to-r ${item.gradient} shadow-lg relative z-10`}
								></div>
							</div>

							{/* RIGHT content (desktop only if side=right) */}
							{item.side === 'right' && (
								<div className='hidden md:flex justify-start pl-8'>
									<div className='bg-gray-900/50 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 max-w-2xl w-full text-left'>
										<h3 className='text-2xl font-bold text-white mb-2'>
											{item.title}
										</h3>
										<p className='text-[#a855f7] font-semibold mb-3'>
											{item.period}
										</p>
										<p className='text-gray-400 text-base leading-relaxed'>
											{item.description}
										</p>
									</div>
								</div>
							)}

							{/* MOBILE content (завжди справа) */}
							<div className='md:hidden pl-4'>
								<div className='bg-gray-900/50 backdrop-blur-lg rounded-xl p-5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10'>
									<h3 className='text-lg font-bold text-white mb-2'>
										{item.title}
									</h3>
									<p className='text-[#a855f7] font-semibold mb-3 text-sm'>
										{item.period}
									</p>
									<p className='text-gray-400 text-sm leading-relaxed'>
										{item.description}
									</p>
								</div>
							</div>

							{/* Якщо side=left — порожній блок справа */}
							{item.side === 'left' && <div className='hidden md:block' />}
							{/* Якщо side=right — порожній блок зліва */}
							{item.side === 'right' && <div className='hidden md:block' />}
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default memo(TimelineSection)
