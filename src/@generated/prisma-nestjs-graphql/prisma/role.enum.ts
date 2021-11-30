import { registerEnumType } from '@nestjs/graphql';

export enum Role {
    Super = "Super",
    Admin = "Admin",
    Mod = "Mod",
    User = "User"
}


registerEnumType(Role, { name: 'Role', description: undefined })
