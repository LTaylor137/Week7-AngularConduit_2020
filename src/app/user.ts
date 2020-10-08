export interface UserLoginCommand{
    user: UserLoginData;
}

export interface UserLoginData{
    email: string;
    password: string;
}

export interface User{
    user: User; 
}

export interface CreateUserCommand{
    user: CreateUserData; 
}

export interface CreateUserData{
    email?: string;
    password?: string;
}