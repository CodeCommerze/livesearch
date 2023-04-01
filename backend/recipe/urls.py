from django.urls import path
from .views import *
urlpatterns = [
    path('', get_all_recipi, name='all_recipi'),
]
