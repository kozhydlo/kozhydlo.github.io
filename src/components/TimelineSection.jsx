import { motion } from 'framer-motion'
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
			<motion.div
				initial={{ opacity: 0, y: -40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
				className='text-center mb-12 md:mb-16'
			>
				<h2 className='text-3xl md:text-5xl font-bold mb-4 text-white'>
					TimeLine
				</h2>
			</motion.div>

			{/* Timeline */}
			<div className='relative max-w-6xl mx-auto'>
				{/* Вертикальна лінія */}
				<div className='absolute left-[35px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-cyan-400 via-indigo-500 to-purple-600 rounded-full'></div>

				<div className='space-y-16 relative'>
					{timelineData.map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 60 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							viewport={{ once: true, amount: 0.3 }}
							className='relative flex md:block'
						>
							{/* MOBILE */}
							<div className='md:hidden flex items-center relative'>
								{/* Circle */}
								<div className='absolute left-[35px] -translate-x-1/2 top-1/2 -translate-y-1/2'>
									<motion.div
										initial={{ scale: 0 }}
										whileInView={{ scale: 1 }}
										transition={{ duration: 0.5, delay: index * 0.2 }}
										viewport={{ once: true }}
										className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.gradient} shadow-lg shadow-purple-500/50`}
									></motion.div>
								</div>

								{/* Card */}
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
										{/* Card Left */}
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

										{/* Circle */}
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
										{/* Card Right */}
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

										{/* Circle */}
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
