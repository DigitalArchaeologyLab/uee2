from django.http import HttpResponse
from rest_framework import viewsets
from .serializers import PeriodSerializer, ActivitySerializer, LocationSerializer
from .models import Period, Activity, Location

# import the logging library, get or create an instance of a logger
import logging

logger = logging.getLogger(__name__)


#### Basic Django view setup ####
def index(request):
    return HttpResponse("Welcome to the UEE timemap")


### API setup ###
class PeriodView(viewsets.ReadOnlyModelViewSet):
    serializer_class = PeriodSerializer
    queryset = Period.objects.all()


class ActivityView(viewsets.ReadOnlyModelViewSet):
    serializer_class = ActivitySerializer
    queryset = Activity.objects.all()


class LocationView(viewsets.ReadOnlyModelViewSet):
    serializer_class = LocationSerializer
    queryset = Location.objects.all()
