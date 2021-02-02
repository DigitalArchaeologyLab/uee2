from django.shortcuts import render
from django.http import HttpResponse
# from django.template import loader

from .models import Article

# Create your views here.
def index(request):
  return HttpResponse("Hello, this will be used to render an article")

def article_list(request):
  article_titles = Article.objects.all()
  context = {
    'article_titles': article_titles,
  }
  return render(request, 'article/article_list.html', context)

def article(request, article_id):
  return HttpResponse('%s' % article_id)
