import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)
	const [activeSection, setActiveSection] = useState('Home')

	const navItems = [
		{ href: '#Home', label: 'Home' },
		{ href: '#About', label: 'About' },
		{ href: '#Portofolio', label: 'Portofolio' },
		{ href: '#Contact', label: 'Contact' },
	]

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20)
			const sections = navItems
				.map(item => {
					const section = document.querySelector(item.href)
					if (section) {
						return {
							id: item.href.replace('#', ''),
							offset: section.offsetTop - 550,
							height: section.offsetHeight,
						}
					}
					return null
				})
				.filter(Boolean)

			const currentPosition = window.scrollY
			const active = sections.find(
				section =>
					currentPosition >= section.offset &&
					currentPosition < section.offset + section.height
			)

			if (active) {
				setActiveSection(active.id)
			}
		}

		window.addEventListener('scroll', handleScroll)
		handleScroll()
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	useEffect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : 'unset'
	}, [isOpen])

	const scrollToSection = (e, href) => {
		e.preventDefault()
		const section = document.querySelector(href)
		if (section) {
			const top = section.offsetTop - 100
			window.scrollTo({
				top: top,
				behavior: 'smooth',
			})
		}
		setIsOpen(false)
	}

	return (
		<nav
			className={`left-1/2 transform -translate-x-1/2 z-50 w-[90vw] transition-all duration-500 ${
				scrolled ? 'fixed top-0' : 'absolute top-6'
			}`}
		>
			<div
				className={`rounded-2xl px-8 py-4 border border-white/20 shadow-lg transition-all duration-500 ${
					isOpen || scrolled
						? 'bg-white/10 backdrop-blur-xl'
						: 'bg-white/5 backdrop-blur-md'
				}`}
			>
				<div className='flex items-center justify-between'>
					{/* Logo + Text */}
					<div className='flex items-center space-x-3'>
						<div className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center overflow-hidden'>
							<img
								src='/logo.png'
								alt='Logo'
								className='w-8 h-8 object-contain'
							/>
						</div>
						<span className='text-xl font-bold text-white'>Kozhydlo Mark</span>
					</div>

					{/* Desktop Navigation */}
					<div className='hidden md:flex items-center space-x-8'>
						{navItems.map(item => (
							<a
								key={item.label}
								href={item.href}
								onClick={e => scrollToSection(e, item.href)}
								className={`relative text-sm font-medium transition-colors duration-300 ${
									activeSection === item.href.substring(1)
										? 'text-white font-semibold'
										: 'text-gray-300 hover:text-purple-400'
								}`}
							>
								{item.label}
							</a>
						))}
					</div>

					{/* Mobile Menu Button */}
					<div className='md:hidden'>
						<button
							onClick={() => setIsOpen(!isOpen)}
							className='p-2 rounded-lg bg-white/10 text-white hover:text-purple-400 transition'
						>
							{isOpen ? (
								<X className='w-6 h-6' />
							) : (
								<Menu className='w-6 h-6' />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Menu Overlay */}
				{isOpen && (
					<div className='md:hidden mt-4'>
						<div className='rounded-2xl bg-white/10 backdrop-blur-xl p-6 space-y-4'>
							{navItems.map(item => (
								<a
									key={item.label}
									href={item.href}
									onClick={e => scrollToSection(e, item.href)}
									className={`block text-lg font-medium py-2 transition-colors duration-300 ${
										activeSection === item.href.substring(1)
											? 'text-white font-semibold'
											: 'text-gray-300 hover:text-purple-400'
									}`}
								>
									{item.label}
								</a>
							))}
						</div>
					</div>
				)}
			</div>
		</nav>
	)
}

export default Navbar
