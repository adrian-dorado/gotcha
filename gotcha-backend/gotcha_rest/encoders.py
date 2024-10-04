from common.json import ModelEncoder
from .models import *

class CardEncoder(ModelEncoder):
    model = Card
    properties = ["name", "card_task", "difficulty", "id"]