from backend.storage.card import Card, CardNotFound
from backend.tasks.parse import parse_card_markup
from backend.wiring import Wiring


wiring = Wiring()

def create_or_update(card):
    try:
        card.id = wiring.card_dao.get_by_slug(card.slug).id
        card = wiring.card_dao.update(card)
    except CardNotFound:
        card = wiring.card_dao.create(card)
            
    wiring.task_queue.enqueue_call(
        parse_card_markup, kwargs={'card_id': card.id})
            
create_or_update(Card(
        slug='helloworld',
        name='Hello, World!',
        markdown="""
    This is hello-world page. Ir can't really compete with the [demo page](demo).
    """))

create_or_update(Card(
        slug='demo',
        name='Demo Card!',
        markdown="""
    Hi there, gay. You've probably got here from awkard ["Hello, World" card](helloworld).
    Well, **good news**! Finally you are looking at a **realy cool card**!
    """))
