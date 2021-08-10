from django.urls import path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r"locations", views.LocationView, "locations")
router.register(r"periods", views.PeriodView, "periods")
router.register(r"activities", views.ActivityView, "activities")

urlpatterns = [
    path("", views.index, name="index"),
]
