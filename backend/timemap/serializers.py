from rest_framework import serializers
from .models import Period, Activity, Place


class PlaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Place
        fields = [
            "id",
            "name_eng",
            "isRegion",
            "isGovernate",
            "isNome",
            "isSite",
            "isFeature",
            "notes",
            "geojson",
            "lat",
            "lon",
            "depth",
            "path",
            "numchild",
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


class ActivitySerializer(serializers.ModelSerializer):
    startPeriod = serializers.StringRelatedField(many=True)
    endPeriod = serializers.StringRelatedField(many=True)
    associatedPlace = PlaceSerializer(many=True, read_only=True)

    class Meta:
        model = Activity
        fields = [
            "id",
            "type",
            "startDate",
            "endDate",
            "associatedPlace",
            "startPeriod",
            "endPeriod",
            "notes",
        ]
