from rest_framework import viewsets
from .serializers import ImageSerializer
from .models import Image

import os

#### Basic Django view setup ####
def index(request):
    return HttpResponse("Welcome to the" + os.getenv("SITE_NAME_SHORT"))


### API setup ###
class ImageView(viewsets.ReadOnlyModelViewSet):
    serializer_class = ImageSerializer
    queryset = Image.objects.all()