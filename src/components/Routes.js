import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Row, Col} from 'react-bootstrap';

import NaviView from './NaviView'
import HomeView from "./HomeView";
import ProgrammingView from "./ProgrammingView";
import MachineLearningView from "./MachineLearningView";
import DataScienceView from "./DataScienceView";

export default function Routes() {
	return (
		<Router>
			<Col>
				<Row className="justify-content-md-center">
					<NaviView></NaviView>
				</Row>
				<Row className="justify-content-md-center">
					<Route path="/" exact component={HomeView} />
					<Route path="/programming" exact component={ProgrammingView} />
					<Route path="/machinelearning" exact component={MachineLearningView} />
					<Route path="/datascience" exact component={DataScienceView} />
				</Row>
			</Col>

		</Router>
	)
} 