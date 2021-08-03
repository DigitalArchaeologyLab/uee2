from rest_framework import serializers
from .models import Period, Place, Feature, Phase, Dynasty, Reign, Event


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


class PeriodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Period
        fields = [
            "id",
            "name_eng",
            "altnames_eng",
            "name_ar",
            "altnames_ar",
            "start",
            "end",
            "depth",
            "path",
            "numchild",
        ]
