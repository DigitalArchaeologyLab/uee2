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


class TermByName(viewsets.ReadOnlyModelViewSet):
    serializer_class = GlossarySerializer

    def get_queryset(self):
        """
        Optionally restricts the returned term based on given name,
        by filtering against a `name` query parameter in the URL.
        """
        queryset = GlossaryTerm.objects.all()
        term_eng = self.request.query_params.get("term_eng")
        if term_eng is not None:
            queryset = queryset.filter(term_eng=term_eng)
        return queryset
