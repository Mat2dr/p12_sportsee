import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { Feed, HorizontalNavBar, VerticalNavBar} from './components';

const App = () => (
    <BrowserRouter>
        <HorizontalNavBar />
        <VerticalNavBar />
        <Routes>
            <Route path="/" exact element={<Feed />} />
        </Routes>
    </BrowserRouter>
)


export default App