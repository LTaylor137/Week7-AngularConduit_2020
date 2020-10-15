export interface UserEnvelope{
    user: User;
}

export interface User{
    username: string;
    email: string;
    password: string;
    token: string;
}

export interface UserLoginCommand{
    user: LoginUserData;
}

export interface LoginUserData{
    email: string;
    password: string;
}

export interface CreateUserCommand{
    user: CreateUserData; 
}

export interface CreateUserData{
    username: string;
    email: string;
    password: string;
}