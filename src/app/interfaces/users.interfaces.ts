export type Roles = 'EMPLEADO' | 'CLIENTE' | 'ADMIN';
export default interface Users {
    uid: string;
    id?:string;
    email: string;
    displayName?: string;
    password: string;
    role?: Roles;
    
}
