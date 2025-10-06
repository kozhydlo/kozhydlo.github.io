import { Github, Instagram, Linkedin, Mail } from 'lucide-react'
import { memo } from 'react'

const FloatingSocials = () => {
	const socials = [
		{ icon: Github, link: 'https://github.com/kozhydlo' },
		{
			icon: Linkedin,
			link: 'https://www.linkedin.com/in/mark-kozhydlo-66a809287/',
		},
		{ icon: Instagram, link: 'https://www.instagram.com/kozhydlomark' },
		{ icon: Mail, link: 'mailto:your@email.com' },
	]

	return (
		<div className='fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4'>
			<div className='bg-gradient-to-b from-gray-900/70 to-gray-800/70 backdrop-blur-xl border border-white/10 rounded-2xl p-3 flex flex-col gap-3 shadow-lg shadow-purple-500/10'>
				{socials.map((social, i) => (
					<a
						key={i}
						href={social.link}
						target='_blank'
						rel='noopener noreferrer'
						className='group relative'
					>
						<div className='p-2 rounded-xl bg-black/40 hover:bg-black/70 border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center'>
							<social.icon className='w-5 h-5 text-gray-400 group-hover:text-white transition-colors' />
						</div>
					</a>
				))}
			</div>
		</div>
	)
}

export default memo(FloatingSocials)
