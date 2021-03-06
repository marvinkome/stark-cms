import { toast } from 'react-toastify';
import history from './history';

export function errorHandler(message, error) {
    if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.error(error);
    }

    toast.error(message);
}

export function redirectWithFlash(path, message, type = 'info', state = {}) {
    return history.push(path, {
        flashMessage: message,
        flashType: type,
        ...state
    });
}
