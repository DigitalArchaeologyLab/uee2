from rest_framework import viewsets
from .serializers import ImageSerializer
from .models import Image

#### Basic Django view setup ####
def index(request):
    return HttpResponse("Welcome to the UEE supplementary data")


### API setup ###
class ImageView(viewsets.ReadOnlyModelViewSet):
    serializer_class = ImageSerializer
    queryset = Image.objects.all()