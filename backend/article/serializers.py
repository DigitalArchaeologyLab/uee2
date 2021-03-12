from rest_framework import serializers
from .models import Article, Keyword

class ArticleSerializer(serializers.ModelSerializer):
    authors = serializers.StringRelatedField(many=True)
    keywords = serializers.StringRelatedField(many=True)
    class Meta:
        model = Article
        fields = ['id', 'title_eng', 'title_ar', 'title_de', 'title_fr', 'authors', 'abstract_eng', 'abstract_ar', 'keywords', 'status', 'body']

class KeywordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Keyword
        fields = ['id', 'name_eng', 'name_ar']