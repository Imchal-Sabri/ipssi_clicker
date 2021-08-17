# coding=utf-8

from sqlalchemy import Column, String

from .entity import Entity, Base


class User(Entity, Base):
    __tablename__ = 'users'

    username = Column('username', String(56))
    password = Column('password', String(56))  # todo handle hash mecanism

    def __init__(self, username, password):
        Entity.__init__(self)
        self.username = username
        self.password = password
