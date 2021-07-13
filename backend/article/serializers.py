from rest_framework import serializers
from .models import Article, Keyword, SubjectArea, TreeTest


class ArticleSerializer(serializers.ModelSerializer):
    authors = serializers.StringRelatedField(many=True)
    subject_test = serializers.StringRelatedField(many=True)
    keywords = serializers.StringRelatedField(many=True)

    class Meta:
        model = Article
        fields = [
            "id",
            "subject_test",
            "title_eng",
            "title_ar",
            "title_de",
            "title_fr",
            "authors",
            "abstract_eng",
            "abstract_ar",
            "keywords",
            "status",
            "body",
        ]


class KeywordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Keyword
        fields = ["id", "name_eng", "name_ar"]

class SubjectAreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubjectArea
        fields = ["id", "name_eng", "name_ar"]

class TreeTestSerializer(serializers.ModelSerializer):
    class Meta:
        model = TreeTest
        fields = ["id", "name", "depth", "path", "numchild"]