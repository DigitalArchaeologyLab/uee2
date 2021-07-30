from rest_framework import viewsets
from .serializers import PlaceSerializer
from .models import Place

# Create your views here.
class PlaceView(viewsets.ModelViewSet):
    serializer_class = PlaceSerializer
    queryset = Place.objects.all()
