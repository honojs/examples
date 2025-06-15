import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import {StytchUIClient} from '@stytch/vanilla-js';
import {StytchProvider} from '@stytch/react';

import {Authenticate, Login, Logout} from "./Auth";
import TodoEditor from "./Todos";

const stytch = new StytchUIClient(import.meta.env.VITE_STYTCH_PUBLIC_TOKEN ?? '');

function App() {
    return (
        <StytchProvider stytch={stytch}>
            <main>
                <h1>TODO App Demo</h1>
                <Router>
                    <Routes>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/authenticate" element={<Authenticate/>}/>
                        <Route path="/todoapp" element={<TodoEditor/>}/>
                        <Route path="*" element={<Navigate to="/todoapp"/>}/>
                    </Routes>
                </Router>
            </main>
            <footer>
                <Logout/>
            </footer>
        </StytchProvider>
    )
}

export default App

