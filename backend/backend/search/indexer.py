import datetime
from elasticsearch import Elasticsearch, NotFoundError
from backend.storage.card import Card, CardDAO


class Indexer(object):

    def __init__(self, elasticsearch_client: Elasticsearch, card_dao: CardDAO, cards_index_alias: str):
        self.elasticsearch_client = elasticsearch_client
        self.card_dao = card_dao
        self.cards_index_alias = cards_index_alias

    def build_new_cards_index(self):
        index_name = 'card-' + datetime.datetime.now().strftime('%Y-%m-%d-%H-%M-%S')