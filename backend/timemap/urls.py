from django.urls import path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r"places", views.PlaceView, "places")
router.register(r"periods", views.PeriodView, "periods")

urlpatterns = [
    path("", views.index, name="index"),
]
