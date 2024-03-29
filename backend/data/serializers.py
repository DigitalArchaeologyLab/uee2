from rest_framework import serializers
from .models import Image


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = [
            "id",
            "title_eng",
            "title_ar",
            "title_de",
            "title_fr",
            "description",
            "caption",
            "credit",
            "creator",
            "dateCreated",
            "places",
            "periods",
            "startDate",
            "endDate",
            "persons",
            "creator",
            "source",
            "rights_holder",
            "copyright_status",
            "permission_notes",
            "image_file",
            "collection",
            "arkID",
        ]
