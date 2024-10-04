import json
from django.http import JsonResponse
from django.views.decortators.http import require_http_methods

from gotcha_rest.models import Card
from gotcha_rest.encoders import CardEncoder

@require_http_methods(["GET", "POST"])
def api_cards(request):
    if request.method == "GET":
        cards = Card.all()
        
        return JsonResponse(
            {"cards": cards},
            encoder=CardEncoder
        )
    else:
        content = json.loads(request.body)
        card = Card.objects.create(**content)
        return JsonResponse(
            card,
            encoder=CardEncoder,
            safe=False,
        )

# Create your views here.
