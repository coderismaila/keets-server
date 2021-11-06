
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateUserInput {
    username: string;
    email: string;
    staffId: string;
    password: string;
}

export class UpdateUserInput {
    id: string;
    username?: Nullable<string>;
    email?: Nullable<string>;
    staffId?: Nullable<string>;
    password?: Nullable<string>;
}

export class OrderByParams {
    field?: Nullable<string>;
    direction?: Nullable<string>;
}

export class User {
    id: string;
    username: string;
    email: string;
    staffId: string;
    password?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
}

export abstract class IQuery {
    abstract users(orderBy?: Nullable<OrderByParams>): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract userByID(id: string): Nullable<User> | Promise<Nullable<User>>;

    abstract userByEmail(email: string): Nullable<User> | Promise<Nullable<User>>;

    abstract userByUsername(username: string): Nullable<User> | Promise<Nullable<User>>;

    abstract userByStaffId(staffId: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract deleteUser(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export type DateTime = any;
type Nullable<T> = T | null;
