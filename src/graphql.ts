
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum Role {
    Super = "Super",
    Admin = "Admin",
    Mod = "Mod",
    User = "User"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export class LoginInput {
    email?: Nullable<string>;
    username?: Nullable<string>;
    staffId?: Nullable<string>;
    password: string;
}

export class SignUpInput {
    email: string;
    username: string;
    staffId: string;
    password: string;
}

export class CreateUserInput {
    username: string;
    email: string;
    staffId: string;
    password: string;
    role?: Nullable<Role>;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    middleName?: Nullable<string>;
    designationId?: Nullable<string>;
    areaOfficeId?: Nullable<string>;
    phoneNumber?: Nullable<string>;
}

export class UpdateUserInput {
    id: string;
    username?: Nullable<string>;
    email?: Nullable<string>;
    staffId?: Nullable<string>;
    password?: Nullable<string>;
    role?: Nullable<Role>;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    middleName?: Nullable<string>;
    areaOfficeId?: Nullable<string>;
    designationId?: Nullable<string>;
    phoneNumber?: Nullable<string>;
}

export class CreateAreaOfficeInput {
    name: string;
    nercCode: string;
    kaedcoCode: string;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export class UpdateAreaOfficeInput {
    id: string;
    name?: Nullable<string>;
    nercCode?: Nullable<string>;
    kaedcoCode?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export class CreateDesignationInput {
    name: string;
    description?: Nullable<string>;
}

export class UpdateDesignationInput {
    id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
}

export class OrderByParams {
    field?: Nullable<string>;
    direction?: Nullable<string>;
}

export class Auth {
    token?: Nullable<number>;
}

export class AuthPayload {
    token: string;
    sub: string;
}

export abstract class IMutation {
    abstract login(loginInput: LoginInput): AuthPayload | Promise<AuthPayload>;

    abstract signUp(signUpInput: SignUpInput): AuthPayload | Promise<AuthPayload>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract deleteUser(id: string): Nullable<User> | Promise<Nullable<User>>;

    abstract createAreaOffice(createAreaOfficeInput?: Nullable<CreateAreaOfficeInput>): Nullable<AreaOffice> | Promise<Nullable<AreaOffice>>;

    abstract updateAreaOffice(updateAreaOfficeInput?: Nullable<UpdateAreaOfficeInput>): Nullable<AreaOffice> | Promise<Nullable<AreaOffice>>;

    abstract createDesignation(createDesignationInput?: Nullable<CreateDesignationInput>): Nullable<Designation> | Promise<Nullable<Designation>>;

    abstract updateDesignation(updateDesignationInput?: Nullable<UpdateDesignationInput>): Nullable<Designation> | Promise<Nullable<Designation>>;
}

export class User {
    id: string;
    username: string;
    email: string;
    staffId: string;
    password?: Nullable<string>;
    role?: Nullable<Role>;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    middleName?: Nullable<string>;
    designationId?: Nullable<string>;
    designation?: Nullable<Designation>;
    areaOfficeId?: Nullable<string>;
    areaOffice?: Nullable<AreaOffice>;
    phoneNumber?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export class AreaOffice {
    id: string;
    name: string;
    nercCode: string;
    kaedcoCode: string;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export class Designation {
    id: string;
    name: string;
    description?: Nullable<string>;
}

export abstract class IQuery {
    abstract users(orderBy?: Nullable<OrderByParams>): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract userByID(id: string): Nullable<User> | Promise<Nullable<User>>;

    abstract userByEmail(email: string): Nullable<User> | Promise<Nullable<User>>;

    abstract userByUsername(username: string): Nullable<User> | Promise<Nullable<User>>;

    abstract userByStaffId(staffId: string): Nullable<User> | Promise<Nullable<User>>;

    abstract currentUser(user?: Nullable<UpdateUserInput>): Nullable<User> | Promise<Nullable<User>>;

    abstract areaOffices(orderBy?: Nullable<OrderByParams>): Nullable<Nullable<AreaOffice>[]> | Promise<Nullable<Nullable<AreaOffice>[]>>;

    abstract designations(orderBy?: Nullable<OrderByParams>): Nullable<Nullable<Designation>[]> | Promise<Nullable<Nullable<Designation>[]>>;
}

export type DateTime = any;
type Nullable<T> = T | null;
