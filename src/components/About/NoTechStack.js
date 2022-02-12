import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { CgCPlusPlus } from 'react-icons/cg';
import { DiPython } from 'react-icons/di';
import { SiPytorch, SiTensorflow, SiFirebase } from 'react-icons/si';

function NoTechstack() {
	return (
		<Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
			<Col xs={4} md={2} className='tech-icons'>
				<CgCPlusPlus />
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<DiPython />
			</Col>
			<Col xs={4} md={2} className='tech-icons'>
				<SiPytorch />
			</Col>
			<Col xs={4} md={2} className='tech-icons'>
				<SiTensorflow />
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<SiFirebase />
			</Col>
		</Row>
	);
}

export default NoTechstack;
