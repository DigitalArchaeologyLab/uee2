from rest_framework import serializers
from .models import Article, SubjectArea, Reference


class SubjectAreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubjectArea
        fields = [
            "id",
            "name_eng",
            "name_ar",
            "name_de",
            "name_fr",
            "description",
            "depth",
            "path",
            "numchild",
        ]


class ArticleSerializer(serializers.ModelSerializer):
    authors = serializers.StringRelatedField(many=True)
    subject_area = serializers.StringRelatedField(many=True)
    # activity = serializers.StringRelatedField(many=True)

    class Meta:
        model = Article
        fields = [
            "id",
            "subject_area",
            "title_eng",
            "title_ar",
            "title_de",
            "title_fr",
            "authors",
            "abstract_eng",
            "abstract_ar",
            "place",
            "period",
            "activity",
            "status",
            "body",
            "transient_subject_ancestors",
        ]


class ReferenceSerializer(serializers.ModelSerializer):
    # article = serializers.StringRelatedField(many=True)

    class Meta:
        model = Reference
        fields = ["id", "author", "year", "publication_info", "url", "article"]
