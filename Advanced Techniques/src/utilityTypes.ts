interface UserData {
  id?: number;
  name: string;
  email?: string;
}

type UserDataOptional = Partial<UserData>;
type UserDataRequired = Required<UserData>;
type UserDataBaseInfo = Pick<UserData, 'name' | 'email'>;
type UserDataInfo = Omit<UserData, 'name' | 'id'>;
type UserDataBaseInfoRequired = Required<Pick<UserData, 'name' | 'email'>>;

function updateUserData(user: UserData, data: object) {
  return {
    ...user,
    ...data,
  };
}

let user1: UserData = { name: 'Jenish' };
updateUserData(user1, { email: 'JEnish@gmail.com' });
