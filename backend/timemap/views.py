from django.http import HttpResponse
from rest_framework import viewsets
from .serializers import PlaceSerializer
from .models import Place

# Create your views here.

#### Basic Django view setup ####
def index(request):
    return HttpResponse("Welcome to the UEE timemap")


### API setup ###
class PlaceView(viewsets.ModelViewSet):
    serializer_class = PlaceSerializer
    queryset = Place.objects.all()
