import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import myImg from '../../Assets/avatar.svg';
import myImg from '../../Assets/MonAmour.png';
import { AiFillGithub, AiFillPhone } from 'react-icons/ai';
import { RiMailSendLine } from 'react-icons/ri';
import { FaLinkedinIn } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function Home2() {
	const { t } = useTranslation();
	return (
		<Container fluid className='home-about-section' id='about'>
			<Container>
				<Row>
					<Col md={8} className='home-about-description'>
						<h1 style={{ fontSize: '2.6em' }}>
							{t('introduce.one')}{' '}
							<span className='purple'> {t('introduce.two')} </span>{' '}
							{t('introduce.three')}
						</h1>
						<p className='home-about-body'>
							I fell in love with programming and I have at least learnt
							something, I think… 🤷‍♂️
							<br />
							<br />I am fluent in classics like
							<i>
								<b className='purple'> C++, Javascript and Python. </b>
							</i>
							<br />
							<br />
							My field of Interest's are building new &nbsp;
							<i>
								<b className='purple'>Web Technologies and Products </b> and
								also in areas related to{' '}
								<b className='purple'>
									Deep Learning and Natural Launguage Processing.
								</b>
							</i>
							<br />
							<br />
							Whenever possible, I also apply my passion for developing products
							with
							<i>
								<b className='purple'> Modern Javascript Frameworks</b>
							</i>
							&nbsp; like
							<i>
								<b className='purple'> Node.js and React.js</b>
							</i>
						</p>
					</Col>
					<Col md={4} className='myAvtar'>
						<img src={myImg} className='img-fluid' alt='avatar' />
					</Col>
				</Row>
				<Row>
					<Col md={12} className='home-about-social'>
						<h1>FIND ME ON</h1>
						<p>
							Feel free to <span className='purple'>connect </span>with me
						</p>
						<ul className='home-about-social-links'>
							<li className='social-icons'>
								<a
									href='https://github.com/DimagaDev'
									target='_blank'
									rel='noreferrer'
									className='icon-colour  home-social-icons'
								>
									<AiFillGithub />
								</a>
							</li>
							<li className='social-icons'>
								<a
									href='https://www.linkedin.com/in/%D0%B4%D0%B8%D0%BC%D0%B0-%D0%BB%D0%BE%D0%B1%D0%BE%D0%B4%D0%B8%D0%BD-2b341b231/'
									target='_blank'
									rel='noreferrer'
									className='icon-colour  home-social-icons'
								>
									<FaLinkedinIn />
								</a>
							</li>
							<li className='social-icons'>
								<a
									href='mailto:lobodindimaga@gmai.com'
									rel='noreferrer'
									className='icon-colour home-social-icons'
								>
									<RiMailSendLine />
								</a>
							</li>
							<li className='social-icons'>
								<a
									href='tel:380974343441'
									rel='noreferrer'
									className='icon-colour home-social-icons'
								>
									<AiFillPhone />
								</a>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}
export default Home2;
