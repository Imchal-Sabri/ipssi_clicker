# coding=utf-8

from .entities.entity import Session, engine, Base
from .entities.user import User

# generate database schema
Base.metadata.create_all(engine)

# start session
session = Session()

python_user = User("Pedro Rodriguez", "password.")
session.add(python_user)
session.commit()
session.close()

# reload users
users = session.query(User).all()

# show existing users
print('### Users:')
for user in users:
    print(f'({user.id}) {user.username} - {user.password}')