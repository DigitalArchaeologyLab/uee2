from django.http import HttpResponse
from rest_framework import viewsets
from .serializers import PlaceSerializer, PeriodSerializer
from .models import Place, Period

# import the logging library, get or create an instance of a logger
import logging

logger = logging.getLogger(__name__)

# Create your views here.

#### Basic Django view setup ####
def index(request):
    return HttpResponse("Welcome to the UEE timemap")


### API setup ###
class PlaceView(viewsets.ModelViewSet):
    serializer_class = PlaceSerializer
    queryset = Place.objects.all()

class PeriodView(viewsets.ModelViewSet):
    serializer_class = PeriodSerializer
    queryset = Period.objects.all()