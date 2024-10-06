import json
from django.http import JsonResponse, HttpResponseNotFound
from django.views.decorators.http import require_http_methods
import random

from gotcha_rest.models import Card
from gotcha_rest.encoders import CardEncoder

@require_http_methods(["GET", "POST", "DELETE"])
def api_cards(request):
    if request.method == "GET":
        cards = Card.objects.all()
        
        return JsonResponse(
            {"cards": list(cards)},
            encoder=CardEncoder
        )
    content = json.loads(request.body)
    
    if request.method == "POST":
        card = Card.objects.create(**content)
        return JsonResponse(
            card,
            encoder=CardEncoder,
            safe=False,
        )

    if request.method == "DELETE":
        card_id = content.get('id')

        try:
            card = Card.objects.get(id=card_id)
            card.delete()
            return JsonResponse({"message": "Card deleted successfully"}, status=200)
        except Card.DoesNotExist:
            return HttpResponseNotFound({"error": "Card not found"})

@require_http_methods(["GET"])
def deal_cards(request):
    if request.method == "GET":
        easy_cards = list(Card.objects.filter(difficulty='E'))
        medium_cards = list(Card.objects.filter(difficulty='M'))
        hard_cards = list(Card.objects.filter(difficulty='H'))
        
        if len(easy_cards) < 3 or len(medium_cards) < 2 or len(hard_cards) < 1:
            return JsonResponse({"error": "Not enough cards available to deal."}, status=400)
        
        dealt_cards = random.sample(easy_cards, 3) + random.sample(medium_cards, 2) + random.sample(hard_cards, 1)
        
        cards_data = [{'name': card.name, 'card_task': card.card_task, 'difficulty': card.difficulty, 'id': card.id} for card in dealt_cards]
        
        return JsonResponse({'cards': cards_data})