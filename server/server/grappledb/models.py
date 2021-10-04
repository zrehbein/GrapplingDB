from django.db import models

# Create your models here.

class Move(models.Model):
    name = models.CharField(max_length=150)
    position = models.CharField(max_length=120)
    type = models.CharField(max_length=120)
    video_url = models.TextField()

    def __str__(self):
        return self.name






