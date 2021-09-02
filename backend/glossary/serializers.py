from rest_framework import serializers
from .models import GlossaryTerm


class GlossarySerializer(serializers.ModelSerializer):
    class Meta:
        model = GlossaryTerm
        fields = ["id", "name_eng", "definition"]
