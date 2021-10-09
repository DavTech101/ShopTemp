import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin',
    email: 'admin@davshop.com',
    password: bcrypt.hashSync('qwerty'),
    isAdmin: true,
  },
  {
    name: 'Larry',
    email: 'larry@davshop.com',
    password: bcrypt.hashSync('qwerty'),
  },
  {
    name: 'Barry',
    email: 'barry@davshop.com',
    password: bcrypt.hashSync('qwerty'),
  },
];

export default users;
