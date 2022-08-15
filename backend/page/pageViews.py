from rest_framework import viewsets
from .serializers import BasicPageSerializer
from .models import BasicPage

import os

#### Basic Django view setup ####
def index(request):
    return HttpResponse("Welcome to the" + os.getenv("SITE_NAME_SHORT"))


### API setup ###
class BasicPageView(viewsets.ReadOnlyModelViewSet):
    serializer_class = BasicPageSerializer
    queryset = BasicPage.objects.all()


class BasicPageQueryView(viewsets.ReadOnlyModelViewSet):
    serializer_class = BasicPageSerializer

    basicPages = list(BasicPage.objects.all())
    for page in basicPages:
        if page.slug == "editors":
            queryset = page
