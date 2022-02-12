import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Row } from 'react-bootstrap';

function Github() {
	const colourTheme = {
		background: 'transparent',
		text: '#ffffff',
		grade4: '#73F66C',
		grade3: '#6FB96B',
		grade2: '#29A023',
		grade1: '#6FB96B',
		grade0: '#b1fbad73',
	};
	return (
		<Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
			<h1 className='project-heading' style={{ paddingBottom: '20px' }}>
				Days I <strong className='purple'>Code</strong>
			</h1>
			<GitHubCalendar
				username='DimagaDev'
				blockSize={15}
				blockMargin={5}
				theme={colourTheme}
				fontSize={16}
			/>
		</Row>
	);
}

export default Github;
