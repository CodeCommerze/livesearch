from rest_framework import serializers
from .models import Recipi

class RecipiSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipi
        fields = ('id', 'name', 'image','created')
        