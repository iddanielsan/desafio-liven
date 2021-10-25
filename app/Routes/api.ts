import { UserController } from '../Controller/UserController';

export default [
    {
        isResource: true,
        route: "/user",
        controller: UserController
    },
    {
        isResource: false,
        route: "/user/auth",
        controller: UserController,
        httpMethod: 'POST',
        method: 'auth' 
    }
]