from rest_framework import serializers
from .models import GlossaryTerm


class GlossarySerializer(serializers.ModelSerializer):
    class Meta:
        model = GlossaryTerm
        fields = [
            "id",
            "term_eng",
            "term_ar",
            "alternative_eng",
            "alternative_ar",
            "definition_eng",
            "definition_ar",
        ]
