import React, { useEffect, useRef, useState } from 'react'
import AllGallery from './AllGallery.js'
import mainImage from './assets/images/main.png'
import Banners from './Banners.js'
import InstagramStories from './InstagramStories.js'
import ModalMenu from './ModalMenu.js'
import ModalWindow from './ModalWindow.js'
import Review from './Review.js'
import Theme from './Theme.js'
import YouTubeDesign from './YouTubeDesign.js'

function App() {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768)
		}
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])
	const [isPortrait, setIsPortrait] = useState(
		window.innerWidth > window.innerHeight
	)

	useEffect(() => {
		const handleResize = () => {
			setIsPortrait(window.innerWidth > window.innerHeight)
		}
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])
	const { theme, setTheme } = Theme()
	const [isDarkTheme, setIsDarkTheme] = useState(() => {
		const savedTheme = localStorage.getItem('theme')
		return savedTheme === 'dark'
	})

	const toggleTheme = () => {
		if (isDarkTheme) {
			lightTheme()
		} else {
			darkTheme()
		}
		setIsDarkTheme(!isDarkTheme)
	}

	const lightTheme = () => {
		setTheme('light')
	}

	const darkTheme = () => {
		setTheme('dark')
	}

	const renderComponent = () => {
		switch (selectedCategory) {
			case 'All':
				return <AllGallery />
			case 'Banners':
				return <Banners />
			case 'YouTubeDesign':
				return <YouTubeDesign />
			case 'InstagramStories':
				return <InstagramStories />
			default:
				return <AllGallery />
		}
	}

	const [showModal, setShowModal] = useState(false)
	const [showModalMenu, setShowModalMenu] = useState(false)
	const [selectedCategory, setSelectedCategory] = useState('All')

	const handleOpenModal = () => {
		setShowModal(true)
	}

	const handleCloseModal = () => {
		setShowModal(false)
	}

	const handleOpenModalMenu = () => {
		setShowModalMenu(true)
	}

	const handleCloseModalMenu = () => {
		setShowModalMenu(false)
	}

	const containerRef = useRef(null)
	const reviewWidthRef = useRef(0)

	const review = [
    {
      name: 'JonnyHook',
      text: 'Професійний підхід і творчі ідеї - це ідеальна комбінація як повністю розкриває потенціал Марка. Наполегливість і креативність дають відмінний результат. Дуже задоволений виконанням роботи! Завжди на зв’язку, оперативно реагує на зміни та чудово виконує поставлені завдання. Переходи на сайт стали зручними і привабливими для користувачів, дякую ',
      link: 'https://www.tiktok.com/@jonnyhookgaming'
    },
    {
      name: 'Zombif',
      text: 'Звернувся за створенням сайту для мого TikTok-блогу. Хотів, щоб усе виглядало стильно та відповідало моєму контенту. Результат перевершив очікування! Сайт зробили дуже швидко, дизайн просто бомба, усе виглядає сучасно й максимально зручно. Я залишився дуже задоволеним, і тепер легко можу направляти аудиторію на свої соцмережі через цей сайт. Однозначно рекомендую, якщо потрібен крутий розробник!',
      link: 'https://www.tiktok.com/@zombi_fortnite'
    },
    {
      name: 'Ірина',
      text: 'Навчаюся в коледжі й не встигла зробити лабораторну – три дні намагалася, а все марно. Вирішила звернутися по допомогу, і це було ідеальне рішення! Завдання зробили всього за дві години, хоча я мучилася з ним цілих три дні. Все вийшло круто, чітко й навіть краще, ніж я очікувала. Дуже задоволена результатом!',
      link: '#'
    }
  ];


	const visibleReview = 3

	const handleLinkClick = (e, targetId) => {
		e.preventDefault()
		const targetElement = document.getElementById(targetId)
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
			handleCloseModalMenu() // Закриваємо меню після кліку
		}
	}

	const handleScroll = () => {
		const box = containerRef.current
		const width = reviewWidthRef.current * visibleReview

		if (box.scrollLeft <= 0) {
			box.style.scrollBehavior = 'auto'
			box.scrollLeft = box.scrollWidth - 2 * width
			box.style.scrollBehavior = 'smooth'
		}

		if (box.scrollLeft >= box.scrollWidth - width) {
			box.style.scrollBehavior = 'auto'
			box.scrollLeft = width
			box.style.scrollBehavior = 'smooth'
		}
	}

	const btnPrevReview = () => {
		const box = containerRef.current
		box.scrollLeft -= reviewWidthRef.current
	}

	const btnNextReview = () => {
		const box = containerRef.current
		box.scrollLeft += reviewWidthRef.current
	}

	useEffect(() => {
		const box = containerRef.current

		// Перевірка на існування containerRef.current
		if (!box) return

		const firstReview = box.querySelector('.review-card')
		if (firstReview) {
			reviewWidthRef.current = firstReview.clientWidth
			const width = reviewWidthRef.current * visibleReview
			box.scrollLeft = (box.scrollWidth - width) / 2
			box.addEventListener('scroll', handleScroll)

			// Очищення під час демонтажу
			return () => {
				box.removeEventListener('scroll', handleScroll)
			}
		}
	}, [])

	const [scroll, setScroll] = useState(0)

	const scrollUp = () => {
		setScroll(window.scrollY)
	}

	const upButton = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	useEffect(() => {
		window.addEventListener('scroll', scrollUp)
	}, [])

	const toBlock = offsetTop => {
		window.scrollTo({ top: offsetTop, behavior: 'smooth' })
	}
	return (
		<div>
			<header>
				{isPortrait ? (
					<div className='navigation'>
						<div className='menu'>
							<a onClick={upButton}>Про мене</a>
							<a
								onClick={() =>
									toBlock(document.getElementById('services').offsetTop)
								}
							>
								Послуги
							</a>
							<a
								onClick={() =>
									toBlock(document.getElementById('portfolio').offsetTop)
								}
							>
								Портфоліо
							</a>
							{!isMobile && (
								<a
									onClick={() =>
										toBlock(document.getElementById('reviews').offsetTop)
									}
								>
									Відгуки
								</a>
							)}
						</div>

						<div className='header-buttons'>
							<button onClick={handleOpenModal} className='btn'>
								Зв'язатися
							</button>

							<a
								href='https://t.me/kozhydlo'
								target='_blank'
								className={
									theme === 'light'
										? 'icon telegram light'
										: 'icon telegram dark'
								}
							/>
							<a
								href='https://www.instagram.com/kozhydlomark/'
								target='_blank'
								className={
									theme === 'light'
										? 'icon instagram light'
										: 'icon instagram dark'
								}
							/>

							<div className='switch' onClick={toggleTheme}>
								<div
									className={theme === 'light' ? 'theme light' : 'theme dark'}
									style={{
										transform: isDarkTheme
											? 'translateX(38px)'
											: 'translate(0)',
									}}
								></div>
							</div>
						</div>
					</div>
				) : (
					<div className='navigation'>
						<div className='switch switch-mobile' onClick={toggleTheme}>
							<div
								className={
									theme === 'light'
										? 'theme theme-mobile light'
										: 'theme theme-mobile dark'
								}
								style={{
									transform: isDarkTheme ? 'translateX(8.6vw)' : 'translate(0)',
								}}
							></div>
						</div>
						<div className='header-buttons-mobile'>
							<a
								href='https://t.me/kozhydlo'
								target='_blank'
								className={
									theme === 'light'
										? 'icon icon-mobile telegram light'
										: 'icon icon-mobile telegram dark'
								}
							/>
							<a
								href='https://www.instagram.com/kozhydlomark/'
								target='_blank'
								className={
									theme === 'light'
										? 'icon  icon-mobile instagram light'
										: 'icon icon-mobile instagram dark'
								}
							/>
							<a
								onClick={handleOpenModalMenu}
								className={
									theme === 'light' ? 'icon-menu light' : 'icon-menu dark'
								}
							></a>
						</div>
					</div>
				)}
			</header>

			<ModalMenu show={showModalMenu} onClose={handleCloseModalMenu}>
				<a onClick={e => handleLinkClick(e, 'up')}>Про мене</a>
				<a onClick={e => handleLinkClick(e, 'services')}>Послуги</a>
				<a onClick={e => handleLinkClick(e, 'portfolio')}>Портфоліо</a>
				<a onClick={e => handleLinkClick(e, 'reviews')}>Відгуки</a>
			</ModalMenu>

			<ModalWindow show={showModal} onClose={handleCloseModal}>
				<h2
					style={{
						color: '#4824ff',
						fontSize: isPortrait ? '40px' : '15vw',
						marginTop: isPortrait ? '' : '0',
					}}
				>
					Контакти
				</h2>
				{isPortrait ? (
					<p style={{ fontSize: '22px' }}>
						Ви можете зв'язатися зі мною в Telegram <br /> або Instagram 👇
					</p>
				) : (
					<p style={{ fontSize: '33px' }}>
						Ви можете зв'язатися зі мною в Telegram <br /> або Instagram 👇
					</p>
				)}
			</ModalWindow>

			{isPortrait ? (
				<div className='welcome-block'>
					<div className='first-block'>
						<h1>
							Full Stack Developer <span className='title'>Kozhydlo Mark</span>
						</h1>
						<h2>
							Роблю <span style={{ color: '#4824ff' }}>унікальні</span> сайти
							під ключ
						</h2>
						<h3>
							Займаюся веб-розробкою з{' '}
							<span style={{ color: '#4824ff' }}>2021 року</span>
						</h3>
					</div>
					<div className='main-img-box'>
						<img className='first-image' src={mainImage} alt='Ваше фото' />
					</div>
				</div>
			) : (
				<div className='welcome-block mobile'>
					<div className='main-img-box mobile'>
						<img
							className='first-image mobile'
							src={mainImage}
							alt='Ваше фото'
						/>
					</div>
					<div className='first-block mobile'>
						<h1>
							Full Stack Developer <span className='title'>Kozhydlo Mark</span>
						</h1>
						<h2>
							Роблю <span style={{ color: '#4824ff' }}>унікальні</span> сайти
							під ключ
						</h2>
						<h3>
							Займаюся веб-розробкою з{' '}
							<span style={{ color: '#4824ff' }}>2021 року</span>
						</h3>
						<button onClick={handleOpenModal} className='btn mobile'>
							Зв'язатися
						</button>
					</div>
				</div>
			)}

			<div
				className={isPortrait ? 'service-block' : 'service-block mobile'}
				draggable='false'
				id='services'
			>
				<h1 style={{ fontSize: isPortrait ? '50px' : '10vw' }}>Послуги</h1>
				<p style={{ fontSize: isPortrait ? '27px' : '6vw' }}>
					Я<span style={{ color: '#4824ff' }}> full-stack розробник </span> який
					спеціалізується на створенні сайтів. Працюю над проєктами середньої
					складності та створюю стильний і якісний статичний дизайн. Мої послуги
					охоплюють:
				</p>

				<div style={{ display: isPortrait ? 'flex' : '' }}>
					<p className={isPortrait ? 'tag' : 'tag mobile'}>
						<span
							className={`tag-icon ${
								theme === 'light' ? 'tag-icon icon-dark' : 'tag-icon icon-light'
							} ${isPortrait ? '' : 'mobile'}`}
						></span>
						Рекламні сайти
					</p>
					<p className={isPortrait ? 'tag' : 'tag mobile'}>
						<span
							className={`tag-icon ${
								theme === 'light' ? 'tag-icon icon-dark' : 'tag-icon icon-light'
							} ${isPortrait ? '' : 'mobile'}`}
						></span>
						Лендінги
					</p>
					<p className={isPortrait ? 'tag' : 'tag mobile'}>
						<span
							className={`tag-icon ${
								theme === 'light' ? 'tag-icon icon-dark' : 'tag-icon icon-light'
							} ${isPortrait ? '' : 'mobile'}`}
						></span>
						Корпоративні сайти
					</p>
					<p className={isPortrait ? 'tag' : 'tag mobile'}>
						<span
							className={`tag-icon ${
								theme === 'light' ? 'tag-icon icon-dark' : 'tag-icon icon-light'
							} ${isPortrait ? '' : 'mobile'}`}
						></span>
						Веб-додатки
					</p>
					<p className={isPortrait ? 'tag' : 'tag mobile'}>
						<span
							className={`tag-icon ${
								theme === 'light' ? 'tag-icon icon-dark' : 'tag-icon icon-light'
							} ${isPortrait ? '' : 'mobile'}`}
						></span>
						Сайти для подій
					</p>
					
					<p className={isPortrait ? 'tag' : 'tag mobile'}>
						<span
							className={`tag-icon ${
								theme === 'light' ? 'tag-icon icon-dark' : 'tag-icon icon-light'
							} ${isPortrait ? '' : 'mobile'}`}
						></span>
						Системи бронювання
					</p>
				</div>

				<p style={{ fontSize: isPortrait ? '27px' : '6vw' }}>
					Готовий обговорити ваші ідеї та створити сайт для інших напрямків за
					домовленістю. <br />
					Деталі замовлення можна обговорити{' '}
					<span
						style={{ color: '#4824ff', cursor: 'pointer' }}
						onClick={handleOpenModal}
					>
						зв'язавшись зі мною.
					</span>
				</p>
			</div>

			<div className='portfolio-block' id='portfolio'>
				<div className={isPortrait ? 'first-block' : 'first-block mobile'}>
					<h1 className={isPortrait ? 'main-title' : 'main-title mobile'}>
						Портфоліо
					</h1>
					<div
						style={{
							position: 'absolute',
							marginLeft: isPortrait ? '-620px' : '-80vw',
						}}
					>
						<p
							className={
								isPortrait ? 'gradient-part-one' : 'gradient-part-one mobile'
							}
						></p>
						{isPortrait ? (
							<p className='title-border'>Портф</p>
						) : (
							<p className='title-border mobile'>Пор</p>
						)}
					</div>
					<div
						style={{
							position: 'absolute',
							marginLeft: isPortrait ? '580px' : '80vw',
						}}
					>
						<p
							className={
								isPortrait ? 'gradient-part-two' : 'gradient-part-two mobile'
							}
						></p>
						{isPortrait ? (
							<p className='title-border'>фоліо</p>
						) : (
							<p className='title-border mobile'>ліо</p>
						)}
					</div>
					{/* <img className='array-icon' src={arrayIcon} draggable='false' /> */}
				</div>

				<div
					className='content'
					style={{ marginLeft: '-5vw', marginRight: '-5vw' }}
				>
					{renderComponent()}
				</div>
			</div>

			{!isMobile && (
				<div className="reviews-block" id='reviews'>
        <h1>ВІДГУКИ</h1>
        <p className="description">Відгуки клієнтів</p>
        <div className="review-container">
          {review.map((review, index) => (
            <Review key={index} name={review.name} text={review.text} link={review.link} />
          ))}
        </div>
      </div>
			)}

			<div className='footer'>© Kozhydlo Mark</div>

			<button
				className={scroll < 890 ? '' : isPortrait ? 'btn-up' : 'btn-up mobile'}
				onClick={upButton}
			></button>
		</div>
	)
}

export default App
