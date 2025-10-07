import { motion } from 'framer-motion'
import { memo } from 'react'

const TimelineSection = () => {
	const timelineData = [
		{
			title: 'Robocode Student – Arduino & C++',
			period: '2019 - 2020',
			description:
				'My journey began at Robocode school, where I discovered programming through Arduino projects. I learned the fundamentals of electronics and C++ development, building small robots and automation systems.',
			gradient: 'from-emerald-400 to-cyan-500',
			side: 'left',
		},
		{
			title: 'Self-Taught Frontend Developer',
			period: '2020',
			description:
				'Transitioned from hardware to web technologies. Started learning HTML, CSS, and JavaScript on my own. Fell in love with building interactive websites and crafting clean, modern user interfaces.',
			gradient: 'from-sky-500 to-indigo-500',
			side: 'right',
		},
		{
			title: 'Student at IT Osvita School',
			period: '2020 - 2021',
			description:
				'Joined IT Osvita to deepen my web development skills. Learned frontend frameworks, backend basics, teamwork, and real project workflow — setting a strong base for full-stack development.',
			gradient: 'from-indigo-500 to-purple-600',
			side: 'left',
		},
		{
			title: 'Full Stack JS Developer – SoftServe Academy',
			period: '2022 - 2024',
			description:
				'Completed an intensive Full Stack JavaScript program at SoftServe Academy. Gained experience with React, Node.js, and databases. Collaborated on real projects and developed production-level apps.',
			gradient: 'from-purple-500 to-pink-500',
			side: 'right',
		},
		{
			title: 'Freelance Developer for Small Businesses',
			period: '2022 - 2024',
			description:
				'Worked with small and medium-sized businesses, creating modern, responsive, and high-performance websites. Delivered full-cycle solutions — from UI/UX design to backend integration.',
			gradient: 'from-pink-500 to-rose-500',
			side: 'left',
		},
		{
			title: 'Backend C# / .NET Developer – SoftServe Academy',
			period: '2024 - Present',
			description:
				'Currently mastering backend development with C# and .NET. Building scalable APIs and robust server-side logic. Passionate about clean architecture, performance, and real-world problem solving.',
			gradient: 'from-cyan-400 to-purple-500',
			side: 'right',
		},
		{
			title: 'Full Stack Developer & Creator',
			period: 'Present',
			description:
				'Now combining all my skills — from frontend design to backend systems. Developing complete web solutions for clients and continuously improving as a developer, problem solver, and creator.',
			gradient: 'from-blue-500 to-violet-500',
			side: 'left',
		},
	]

	return (
		<section className='mb-20 mt-16'>
			{/* Заголовок */}
			<motion.div
				initial={{ opacity: 0, y: -40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
				className='text-center mb-12 md:mb-16'
			>
				<h2 className='text-3xl md:text-5xl font-bold mb-4 text-white'>
					My Developer Journey 🚀
				</h2>
				<p className='text-gray-400 max-w-2xl mx-auto'>
					From Arduino and C++ to full-stack web development and .NET — a story
					of growth, curiosity, and passion for building digital experiences.
				</p>
			</motion.div>

			{/* Timeline */}
			<div className='relative max-w-6xl mx-auto'>
				<div className='absolute left-[35px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-cyan-400 via-indigo-500 to-purple-600 rounded-full'></div>

				<div className='space-y-16 relative'>
					{timelineData.map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 60 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.15 }}
							viewport={{ once: true, amount: 0.3 }}
							className='relative flex md:block'
						>
							{/* MOBILE */}
							<div className='md:hidden flex items-center relative'>
								<div className='absolute left-[35px] -translate-x-1/2 top-1/2 -translate-y-1/2'>
									<motion.div
										initial={{ scale: 0 }}
										whileInView={{ scale: 1 }}
										transition={{ duration: 0.5, delay: index * 0.2 }}
										viewport={{ once: true }}
										className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.gradient} shadow-lg shadow-purple-500/50`}
									></motion.div>
								</div>
								<div className='flex-1 ml-16'>
									<div className='bg-gray-900/50 backdrop-blur-lg rounded-lg p-5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20'>
										<h3 className='text-base font-bold text-white mb-2'>
											{item.title}
										</h3>
										<p className='text-[#a855f7] font-semibold mb-2 text-xs'>
											{item.period}
										</p>
										<p className='text-gray-400 text-sm leading-relaxed'>
											{item.description}
										</p>
									</div>
								</div>
							</div>

							{/* DESKTOP */}
							<div className='hidden md:grid md:grid-cols-2 md:gap-12 items-center relative'>
								{item.side === 'left' ? (
									<>
										<div className='relative text-right pr-24'>
											<div className='bg-gray-900/50 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 max-w-xl ml-auto'>
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
										<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
											<motion.div
												initial={{ scale: 0 }}
												whileInView={{ scale: 1 }}
												transition={{ duration: 0.5, delay: index * 0.2 }}
												viewport={{ once: true }}
												className={`w-6 h-6 rounded-full bg-gradient-to-r ${item.gradient} shadow-lg shadow-purple-500/50`}
											></motion.div>
										</div>
										<div />
									</>
								) : (
									<>
										<div />
										<div className='relative text-left pl-24'>
											<div className='bg-gray-900/50 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 max-w-xl mr-auto'>
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
										<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
											<motion.div
												initial={{ scale: 0 }}
												whileInView={{ scale: 1 }}
												transition={{ duration: 0.5, delay: index * 0.2 }}
												viewport={{ once: true }}
												className={`w-6 h-6 rounded-full bg-gradient-to-r ${item.gradient} shadow-lg shadow-purple-500/50`}
											></motion.div>
										</div>
									</>
								)}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

export default memo(TimelineSection)
