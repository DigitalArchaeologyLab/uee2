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
            "articles",
            "places",
            "periods",
            "source",
            "rights_holder",
            "copyright_status",
            "permission_notes",
            "image_file",
        ]
