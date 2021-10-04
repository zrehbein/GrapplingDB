from rest_framework import serializers
from .models import Move

class MoveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Move
        fields = ('id', 'name', 'position', 
        'type', 'video_url')
