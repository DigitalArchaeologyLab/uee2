from django.shortcuts import render
from django.http import HttpResponse, Http404
from rest_framework import viewsets
from .serializers import ArticleSerializer, KeywordSerializer
from .models import Article, Keyword

#### Basic Django view setup to be used for testing ####
def index(request):
    return HttpResponse("Welcome to the UEE")


def article_list(request):
    article_titles = Article.objects.all()
    context = {
        "article_titles": article_titles,
    }
    return render(request, "article/article_list.html", context)


def article(request, article_id):
    try:
        article = Article.objects.get(pk=article_id)
    except Article.DoesNotExist:
        raise Http404("Article does not exist.")
    context = {"article": article}
    return render(request, "article/article.html", context)


#### REST API setup ####
class ArticleView(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()


class KeywordView(viewsets.ModelViewSet):
    serializer_class = KeywordSerializer
    queryset = Keyword.objects.all()
