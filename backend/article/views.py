from django.shortcuts import render
from django.http import HttpResponse, Http404
from rest_framework import viewsets
from .serializers import (
    ArticleSerializer,
    SubjectAreaSerializer,
    ReferenceSerializer,
)
from .models import Article, SubjectArea, Reference

import os

# import the logging library, get or create an instance of a logger
import logging

logger = logging.getLogger(__name__)

#### Basic Django view setup ####
def index(request):
    return HttpResponse("Welcome to the" + os.getenv("SITE_NAME_SHORT"))


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


### Goal: return list of articles with their related subjects appended with all ancestors
class ArticlesBySubjectView(viewsets.ReadOnlyModelViewSet):
    serializer_class = ArticleSerializer
    # force database evaluation (aka hit the database up actually) by calling list()
    ## problem: this is being cached so database changes aren't reflected

    articles = list(Article.objects.all())
    for article in articles:
        ancestors = []

        for subject in article.subject_area.all():
            if subject not in ancestors:
                ancestors.append(str(subject))
            if subject.is_root() == True:
                continue
            parent = subject.get_parent()
            if parent not in ancestors:
                ancestors.append(str(parent))
            while parent.is_root() == False:
                if parent not in ancestors:
                    ancestors.append(str(parent))
                parent = parent.get_parent()

        article.transient_subject_ancestors = ancestors

    queryset = articles


#### REST API setup ####
class ArticleView(viewsets.ReadOnlyModelViewSet):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()


class SubjectAreaView(viewsets.ReadOnlyModelViewSet):
    serializer_class = SubjectAreaSerializer
    queryset = SubjectArea.objects.all()


class ReferenceView(viewsets.ReadOnlyModelViewSet):
    serializer_class = ReferenceSerializer
    queryset = Reference.objects.all()
