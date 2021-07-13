from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("all/", views.article_list, name="article-list"),
    path("article/<int:article_id>/", views.article, name="article"),
    path("subjects/", views.subjects, name="subjects"),
]
