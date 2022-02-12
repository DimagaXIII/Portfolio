import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
// import Github from './Github';
import Techstack from './Techstack';
import NoTechstack from './NoTechStack';
import Aboutcard from './AboutCard';
import laptopImg from '../../Assets/about.png';
import Toolstack from './Toolstack';

function About() {
	useEffect(() => {
		localStorage.setItem('page', 'about');
	}, []);

	return (
		<Container fluid className='about-section'>
			<Particle />
			<Container>
				<Row style={{ justifyContent: 'center', padding: '10px' }}>
					<Col
						md={7}
						style={{
							justifyContent: 'center',
							paddingTop: '30px',
							paddingBottom: '50px',
						}}
					>
						<h1 style={{ fontSize: '2.1em', paddingBottom: '20px' }}>
							Know Who <strong className='purple'>I'M</strong>
						</h1>
						<Aboutcard />
					</Col>
					<Col
						md={5}
						style={{ paddingTop: '30px', paddingBottom: '35px' }}
						className='about-img'
					>
						<img src={laptopImg} alt='about' className='img-fluid' />
					</Col>
				</Row>
				<h1 className='project-heading'>
					Professional <strong className='purple'>Skillset </strong>
				</h1>
				<Techstack />
				<h1 className='project-heading'>
					No Professional <strong className='purple'>Skillset </strong>
				</h1>
				<NoTechstack />
				<h1 className='project-heading'>
					<strong className='purple'>Tools</strong> I use
				</h1>
				<Toolstack />
				{/* <Github /> вернуть потом! */}
			</Container>
		</Container>
	);
}

export default About;
