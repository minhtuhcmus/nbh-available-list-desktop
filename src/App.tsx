import React, { useState } from 'react';
import DomesticForm from "./components/tabs/domestic";
import ForeignForm from "./components/tabs/foreign";
import './App.css';
function App() {
	const [tabIndex, setTabIndex] = useState(0);
	return (
		<div className="App">
			<div className='buttons'>
				<div
					className={`${tabIndex === 0 ? 'active-tab' : 'inactive-tab'}`}
					onClick={() => {
						if (tabIndex !== 0) {
							setTabIndex(0);
						}
					}}>
					BÁO GIÁ
				</div>
				<div
					className={`${tabIndex === 1 ? 'active-tab' : 'inactive-tab'}`}
					onClick={() => {
						if (tabIndex !== 1) {
							setTabIndex(1);
						}
					}}>
					XUẤT KHẨU
				</div>
			</div>
			<div className={`${tabIndex === 0 ? '' : 'hidden'}`}>
				<DomesticForm />
			</div>
			<div className={`${tabIndex === 1 ? '' : 'hidden'}`}>
				<ForeignForm />
			</div>

		</div>
	);
}

export default App;
