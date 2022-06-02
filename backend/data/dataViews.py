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


class ImageByTitle(viewsets.ReadOnlyModelViewSet):
    serializer_class = ImageSerializer

    def get_queryset(self):
        """
        Optionally restricts the returned images based on given title,
        by filtering against a `title` query parameter in the URL.
        """
        queryset = Image.objects.all()
        title_eng = self.request.query_params.get("title_eng")
        if title_eng is not None:
            queryset = queryset.filter(title_eng=title_eng)
        return queryset
