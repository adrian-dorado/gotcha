from django.db import models

# Create your models here.
class Card(models.Model):
    difficulty_choices = [
        ("E", "Easy"),
        ("M", "Medium"),
        ("H", "Hard"),
    ]
    
    name = models.CharField(max_length=255)
    card_task = models.TextField()
    difficulty = models.CharField(max_length=6, choices=difficulty_choices)
    
    def __str__(self):
        return f"{self.name}"