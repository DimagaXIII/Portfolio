import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import homeLogo from '../../Assets/home.png';
import Particle from '../Particle';
import Home2 from './Home2';
import Type from './Type';
import { useTranslation } from 'react-i18next';

function Home() {
	const { t } = useTranslation();

	useEffect(() => {
		localStorage.setItem('page', 'home');
	}, []);

	return (
		<section>
			<Container fluid className='home-section' id='home'>
				<Particle />
				<Container className='home-content'>
					<Row>
						<Col md={7} className='home-header'>
							<h1 style={{ paddingBottom: 15 }} className='heading'>
								{t('hello.hi')} <span className='wave'>👋🏻</span>
							</h1>

							<h1 className='heading-name'>
								{t('hello.i')}
								<strong className='main-name'> {t('hello.name')} </strong>
							</h1>

							<div style={{ padding: 50, textAlign: 'left' }}>
								<Type />
							</div>
						</Col>

						<Col md={5} style={{ paddingBottom: 20 }}>
							<img src={homeLogo} alt='home pic' className='img-fluid' />
						</Col>
					</Row>
				</Container>
			</Container>
			<Home2 />
		</section>
	);
}

export default Home;
