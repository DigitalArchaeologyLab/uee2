from django.urls import path
from rest_framework import routers
from . import collectionViews

router = routers.DefaultRouter()
router.register(r"collections", collectionViews.CollectionView, "collections")

urlpatterns = [
    path("", collectionViews.index, name="index"),
]
