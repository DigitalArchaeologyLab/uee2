from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from article import views

from timemap.urls import router as timemapRouter

router = routers.DefaultRouter()
router.registry.extend(timemapRouter.registry)
router.register(r"articles", views.ArticleView, "article")
router.register(r"keywords", views.KeywordView, "keyword")
router.register(r"subjects", views.SubjectAreaView, "subjects")
router.register(
    r"articlesBySubjects", views.ArticlesBySubjectView, "articlesBySubjects"
)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("article.urls")),
    path("markdownx/", include("markdownx.urls")),
    path("api/", include(router.urls)),
    path("api-auth/", include("rest_framework.urls")),
]
