from rest_framework import viewsets
from .serializers import GlossarySerializer
from .models import GlossaryTerm

#### Basic Django view setup ####
def index(request):
    return HttpResponse("Welcome to the UEE timemap")


### API setup ###
class GlossaryView(viewsets.ReadOnlyModelViewSet):
    serializer_class = GlossarySerializer
    queryset = GlossaryTerm.objects.all()
