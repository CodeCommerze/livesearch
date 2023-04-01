from django.shortcuts import render
from rest_framework.decorators import api_view
from .serializer import RecipiSerializer
from rest_framework.response import Response
from .models import *


@api_view(['GET'])
def get_all_recipi(request):
    recipi = Recipi.objects.all()
    serializer = RecipiSerializer(recipi, many=True)
    return Response(serializer.data)