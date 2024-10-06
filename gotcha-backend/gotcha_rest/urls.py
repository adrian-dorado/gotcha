from django.urls import path

from .views import (
    api_cards,
    deal_cards,
)

urlpatterns = [
    path("cards/", api_cards, name="api_cards"),
    path("deal-cards/", deal_cards, name="deal-cards"),
]
