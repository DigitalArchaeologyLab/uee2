from rest_framework import serializers
from .models import BasicPage


class BasicPageSerializer(serializers.ModelSerializer):
    class Meta:
        model = BasicPage
        fields = [
            "id",
            "title",
            "slug",
            "body",
            "status",
        ]
