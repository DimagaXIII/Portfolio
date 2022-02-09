import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import { CgGitFork } from 'react-icons/cg';
import {
	AiFillStar,
	AiOutlineHome,
	AiOutlineFundProjectionScreen,
	AiOutlineUser,
} from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';
import { MdLanguage } from 'react-icons/md';

import { useTranslation } from 'react-i18next';

const NavBar = () => {
	const [expand, updateExpanded] = useState(false);
	const [navColour, updateNavbar] = useState(window.innerWidth <= 765);
	const [toggleLanguage, setToggleLanguage] = useState(localStorage.i18nextLng);

	const { t, i18n } = useTranslation();

	const handleToggleLang = (lang) => {
		i18n.changeLanguage(lang);
		localStorage.setItem('lang', lang);
	};

	const scrollHandler = () => {
		if (window.scrollY >= 15 && window.innerWidth > 765) {
			updateNavbar(true);
		} else if (window.innerWidth <= 765) {
			updateNavbar(true);
		} else {
			updateNavbar(false);
		}
	};

	window.addEventListener('scroll', scrollHandler);

	return (
		<Navbar
			expanded={expand}
			fixed='top'
			expand='md'
			className={navColour ? 'sticky' : 'navbar'}
		>
			<Container>
				<Navbar.Brand as={Link} to='/'>
					<p className='logo'>LD</p>
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls='responsive-navbar-nav'
					onClick={() => {
						updateExpanded(expand ? false : 'expanded');
					}}
				>
					<span></span>
					<span></span>
					<span></span>
				</Navbar.Toggle>
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='ml-auto' defaultActiveKey='#home'>
						<Nav.Item>
							<Nav.Link as={Link} to='/' onClick={() => updateExpanded(false)}>
								<AiOutlineHome style={{ marginBottom: '2px' }} />{' '}
								{t('menu.home')}
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link
								as={Link}
								to='/about'
								onClick={() => updateExpanded(false)}
							>
								<AiOutlineUser style={{ marginBottom: '2px' }} />{' '}
								{t('menu.about')}
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link
								as={Link}
								to='/project'
								onClick={() => updateExpanded(false)}
							>
								<AiOutlineFundProjectionScreen
									style={{ marginBottom: '2px' }}
								/>{' '}
								{t('menu.project')}
							</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link
								as={Link}
								to='/resume'
								onClick={() => updateExpanded(false)}
							>
								<CgFileDocument style={{ marginBottom: '2px' }} />{' '}
								{t('menu.resume')}
							</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link
								as={Link}
								// to='/resume'
								// onClick={() => updateExpanded(false)}
								onClick={() => {
									setToggleLanguage(!toggleLanguage);
									handleToggleLang(toggleLanguage === 'en' ? 'ru' : 'en');
									updateExpanded(expand ? false : 'expanded');
								}}
							>
								<MdLanguage style={{ marginBottom: '2px' }} />
								{toggleLanguage === 'en' ? 'RU' : 'EN'}
							</Nav.Link>
						</Nav.Item>

						<Nav.Item className='fork-btn'>
							<Button
								href='https://github.com/DimagaDev'
								target='_blank'
								className='fork-btn-inner'
							>
								<CgGitFork style={{ fontSize: '1.2em' }} />{' '}
								<AiFillStar style={{ fontSize: '1.1em' }} />
							</Button>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
