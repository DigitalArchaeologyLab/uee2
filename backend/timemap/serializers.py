from rest_framework import serializers
from .models import Period, Activity, Location

class LocationSerializer(serializers.ModelSerializer):
    period = serializers.StringRelatedField(many=True)

    class Meta:
        model = Location
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
            "period",
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
    associatedPlace = serializers.StringRelatedField(many=True)
    startPeriod = serializers.StringRelatedField(many=True)
    endPeriod = serializers.StringRelatedField(many=True)

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
