from django.urls import path
from rest_framework import routers
from . import dataViews

router = routers.DefaultRouter()
router.register(r"images", dataViews.ImageView, "images")

urlpatterns = [
    path("", dataViews.index, name="index"),
]
