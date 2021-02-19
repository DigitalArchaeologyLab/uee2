from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from article import views

router = routers.DefaultRouter()
router.register(r'articles', views.ArticleView, 'article')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('article.urls')),
    path('markdownx/', include('markdownx.urls')),
    path('api/', include(router.urls)),
]