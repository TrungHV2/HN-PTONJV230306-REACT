import { Navigate } from 'react-router-dom';

export default function Auth({element}) {
    let isLoggedIn = true;
    if (!isLoggedIn) {
        return <Navigate to={'/login'} />
    }
    return element;
}