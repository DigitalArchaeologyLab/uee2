from rest_framework import serializers
from .models import Place, Feature, Phase, Dynasty, Reign, Event

class PlaceSerializer(serializers.ModelSerializer):
  parents = serializers.StringRelatedField(many=True)
  children = serializers.StringRelatedField(many=True)

  class Meta:
    model = Place
    fields = [
      "id",
      "name_eng",
      "isRegion",
      "isGovernate",
      "isNome",
      "isSite",
      "notes",
      "geojson",
      "lat",
      "lon",
      "parents",
      "children",
    ]