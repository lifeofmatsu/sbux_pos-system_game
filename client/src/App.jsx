import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import Summary from './pages/Summary';
import { OrderProvider } from './context/OrderContext';
import './App.css';

function App() {
	return (
		<Router>
			<OrderProvider>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/game' element={<Game />} />
					<Route path='/summary' element={<Summary />} />
				</Routes>
			</OrderProvider>
		</Router>
	);
}

export default App;
