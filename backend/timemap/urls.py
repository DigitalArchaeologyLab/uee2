from django.urls import path
from rest_framework import routers
from . import timemapViews

router = routers.DefaultRouter()
router.register(r"places", timemapViews.PlaceView, "places")
router.register(r"periods", timemapViews.PeriodView, "periods")
router.register(r"activities", timemapViews.ActivityView, "activities")

urlpatterns = [
    path("", timemapViews.index, name="index"),
]
