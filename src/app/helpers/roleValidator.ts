import  Users  from '../interfaces/users.interfaces';

export class RoleValidator {
 /* isSuscriptor(user: Users): boolean {
    return user.role === 'SUSCRIPTOR';
  }

  isEditor(user: Users): boolean {
    return user.role === 'EDITOR';
  }*/

  isAdmin(user: Users): boolean {
    console.log('USER'+user);
    return user.role === 'ADMIN';
  }
}
