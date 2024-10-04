from django.urls import path

from .views import (
    api_cards,
)

urlpatterns = [
    path("cards/", api_cards, name="api_cards"),
]
