from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from article import views

from django.conf import settings
from django.conf.urls.static import static

from timemap.urls import router as timemapRouter
from glossary.urls import router as glossaryRouter
from data.urls import router as dataRouter

router = routers.DefaultRouter()
router.registry.extend(timemapRouter.registry)
router.registry.extend(glossaryRouter.registry)
router.registry.extend(dataRouter.registry)
router.register(r"articles", views.ArticleView, "article")
router.register(r"references", views.ReferenceView, "references")
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

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
