import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { Feed, HorizontalNavBar, VerticalNavBar } from './components';

const App = () => (
    <BrowserRouter>
        <HorizontalNavBar />
        <div className='home-content'>
            <VerticalNavBar />
            <Routes>
                <Route path="/user/:id" exact element={<Feed />} />
            </Routes>
        </div> 
    </BrowserRouter>
)


export default App