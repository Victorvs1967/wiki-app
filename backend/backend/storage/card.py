import abc
from typing import Iterable


class Card(object):

    def __init__(self, id: str = None, slug: str = None, name: str = None, markdown: str = None, html: str = None):
        self.id = id
        self.slug = slug
        self.name = name
        self.markdown = markdown
        self.html = html

class CardDAO(object, metaclass=abc.ABCMeta):

    @abc.abstractmethod
    def create(self, card: Card):
        pass

    @abc.abstractmethod
    def update(self, card: Card):
        pass

    @abc.abstractmethod
    def get_all(self):
        pass

    @abc.abstractmethod
    def get_by_id(self, card_id: str):
        pass

    @abc.abstractmethod
    def get_by_slug(self, slug: str):
        pass

class CardNotFound(Exception):
    pass
