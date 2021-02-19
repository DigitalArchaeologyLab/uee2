from rest_framework import serializers
from .models import Article

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('id', 'title_eng', 'title_ar', 'title_de', 'title_fr', 'author_id', 'abstract_eng', 'abstract_ar', 'status', 'body')