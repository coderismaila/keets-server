
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum StationType {
    Transmission = "Transmission",
    Distribution = "Distribution"
}

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

export class CreateAreaOfficeInput {
    name: string;
    nercCode: string;
    kaedcoCode: string;
}

export class UpdateAreaOfficeInput {
    id: string;
    name?: Nullable<string>;
    nercCode?: Nullable<string>;
    kaedcoCode?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
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

export class CreateStationInput {
    name: string;
    latitude?: Nullable<number>;
    longitude?: Nullable<number>;
    stationType?: Nullable<StationType>;
    nercCode?: Nullable<string>;
    kaedcoCode?: Nullable<string>;
    areaOfficeId?: Nullable<string>;
}

export class UpdateStationInput {
    id?: Nullable<string>;
    name?: Nullable<string>;
    latitude?: Nullable<number>;
    longitude?: Nullable<number>;
    stationType?: Nullable<StationType>;
    nercCode?: Nullable<string>;
    kaedcoCode?: Nullable<string>;
    areaOfficeId?: Nullable<string>;
}

export class CreatePowerTransformerInput {
    name: string;
    capacityKVA: number;
    stationId: string;
}

export class UpdatePowerTransformerInput {
    id: string;
    name?: Nullable<string>;
    capacityKVA?: Nullable<number>;
    stationId?: Nullable<string>;
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

export class AreaOffice {
    id?: Nullable<string>;
    name: string;
    nercCode: string;
    kaedcoCode: string;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export abstract class IQuery {
    abstract areaOffices(): Nullable<AreaOffice>[] | Promise<Nullable<AreaOffice>[]>;

    abstract areaOfficeById(id: string): Nullable<AreaOffice> | Promise<Nullable<AreaOffice>>;

    abstract areaOfficeByName(name?: Nullable<string>): Nullable<AreaOffice> | Promise<Nullable<AreaOffice>>;

    abstract stations(): Nullable<Station>[] | Promise<Nullable<Station>[]>;

    abstract stationById(id: string): Nullable<Station> | Promise<Nullable<Station>>;

    abstract powerTransformers(): Nullable<PowerTransformer>[] | Promise<Nullable<PowerTransformer>[]>;

    abstract powerTransformerById(id: string): Nullable<PowerTransformer> | Promise<Nullable<PowerTransformer>>;

    abstract users(orderBy?: Nullable<OrderByParams>): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract userByID(id: string): Nullable<User> | Promise<Nullable<User>>;

    abstract userByEmail(email: string): Nullable<User> | Promise<Nullable<User>>;

    abstract userByUsername(username: string): Nullable<User> | Promise<Nullable<User>>;

    abstract userByStaffId(staffId: string): Nullable<User> | Promise<Nullable<User>>;

    abstract currentUser(user?: Nullable<UpdateUserInput>): Nullable<User> | Promise<Nullable<User>>;

    abstract designations(orderBy?: Nullable<OrderByParams>): Nullable<Nullable<Designation>[]> | Promise<Nullable<Nullable<Designation>[]>>;
}

export abstract class IMutation {
    abstract createAreaOffice(createAreaOfficeInput: CreateAreaOfficeInput): AreaOffice | Promise<AreaOffice>;

    abstract updateAreaOffice(updateAreaOfficeInput: UpdateAreaOfficeInput): AreaOffice | Promise<AreaOffice>;

    abstract removeAreaOffice(id: string): Nullable<AreaOffice> | Promise<Nullable<AreaOffice>>;

    abstract login(loginInput: LoginInput): AuthPayload | Promise<AuthPayload>;

    abstract signUp(signUpInput: SignUpInput): AuthPayload | Promise<AuthPayload>;

    abstract createStation(createStationInput: CreateStationInput): Station | Promise<Station>;

    abstract updateStation(id: string, updateStationInput: UpdateStationInput): Station | Promise<Station>;

    abstract deleteStation(id: string): Nullable<Station> | Promise<Nullable<Station>>;

    abstract createPowerTransformer(createStationPowerTransformerInput: CreatePowerTransformerInput): PowerTransformer | Promise<PowerTransformer>;

    abstract deletePowerTransformer(id: string): PowerTransformer | Promise<PowerTransformer>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract deleteUser(id: string): Nullable<User> | Promise<Nullable<User>>;

    abstract createDesignation(createDesignationInput?: Nullable<CreateDesignationInput>): Nullable<Designation> | Promise<Nullable<Designation>>;

    abstract updateDesignation(updateDesignationInput?: Nullable<UpdateDesignationInput>): Nullable<Designation> | Promise<Nullable<Designation>>;
}

export class Auth {
    token?: Nullable<number>;
}

export class AuthPayload {
    token: string;
    sub: string;
}

export class Station {
    id: string;
    name: string;
    latitude?: Nullable<number>;
    longitude?: Nullable<number>;
    stationType: StationType;
    nercCode: string;
    kaedcoCode: string;
    areaOfficeId?: Nullable<string>;
    areaOffice?: Nullable<AreaOffice>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export class PowerTransformer {
    id: string;
    name: string;
    capacityKVA: number;
    stationId: string;
    station?: Nullable<Station>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
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

export class Designation {
    id: string;
    name: string;
    description?: Nullable<string>;
}

export type DateTime = any;
type Nullable<T> = T | null;
