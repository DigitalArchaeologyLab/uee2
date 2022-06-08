from rest_framework import serializers
from .models import Collection


class CollectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Collection
        fields = [
            "id",
            "title_eng",
            "title_ar",
            "title_de",
            "title_fr",
            "description",
            "source",
            "collection_creator",
        ]
