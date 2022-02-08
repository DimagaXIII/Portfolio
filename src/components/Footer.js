import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
	let date = new Date();
	return (
		<Container fluid className='footer'>
			<Row>
				<Col md='4' className='footer-copywright'>
					<h3>Developed by Dmitriy Lobodin</h3>
				</Col>
				<Col md='4' className='footer-copywright'>
					<h3>Copyright © {date.getFullYear()}</h3>
				</Col>
			</Row>
		</Container>
	);
}

export default Footer;
