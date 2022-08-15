from django.http import HttpResponse
from rest_framework import viewsets
from .serializers import PeriodSerializer, ActivitySerializer, PlaceSerializer
from .models import Period, Activity, Place

# import the logging library, get or create an instance of a logger
import logging

logger = logging.getLogger(__name__)

import os

#### Basic Django view setup ####
def index(request):
    return HttpResponse("Welcome to the" + os.getenv("SITE_NAME_SHORT"))


### API setup ###
class PeriodView(viewsets.ReadOnlyModelViewSet):
    serializer_class = PeriodSerializer
    queryset = Period.objects.all()


class ActivityView(viewsets.ReadOnlyModelViewSet):
    serializer_class = ActivitySerializer
    queryset = Activity.objects.all()


class PlaceView(viewsets.ReadOnlyModelViewSet):
    serializer_class = PlaceSerializer
    queryset = Place.objects.all()