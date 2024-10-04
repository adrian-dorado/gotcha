import json
from django.http import JsonResponse, HttpResponseNotFound
from django.views.decorators.http import require_http_methods

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
