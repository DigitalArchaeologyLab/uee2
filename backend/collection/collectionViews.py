from rest_framework import viewsets
from .serializers import CollectionSerializer
from .models import Collection

#### Basic Django view setup ####
def index(request):
    return HttpResponse("Welcome to the UEE supplementary data")


### API setup ###
class CollectionView(viewsets.ReadOnlyModelViewSet):
    serializer_class = CollectionSerializer
    queryset = Collection.objects.all()
