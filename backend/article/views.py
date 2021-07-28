from django.shortcuts import render
from django.http import HttpResponse, Http404
from rest_framework import viewsets
from .serializers import (
    ArticleSerializer,
    KeywordSerializer,
    SubjectAreaSerializer,
)
from .models import Article, Keyword, SubjectArea

# import the logging library, get or create an instance of a logger
import logging
logger = logging.getLogger(__name__)

#### Basic Django view setup ####
def index(request):
    return HttpResponse("Welcome to the UEE")


def article_list(request):
    article_titles = Article.objects.all()
    context = {
        "article_titles": article_titles,
    }
    return render(request, context)


def subjects(request):
    subjectareas = SubjectArea.objects.all()
    context = {
        "subjectareas": subjectareas,
    }
    return render(request, context)


def article(request, article_id):
    try:
        article = Article.objects.get(pk=article_id)
    except Article.DoesNotExist:
        raise Http404("Article does not exist.")
    context = {"article": article}
    return render(request, context)


#### REST API setup ####
class ArticleView(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()


class KeywordView(viewsets.ModelViewSet):
    serializer_class = KeywordSerializer
    queryset = Keyword.objects.all()


class SubjectAreaView(viewsets.ModelViewSet):
    serializer_class = SubjectAreaSerializer
    queryset = SubjectArea.objects.all()
    