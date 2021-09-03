from django.urls import path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r"terms", views.GlossaryView, "terms")

urlpatterns = [
    path("", views.index, name="index"),
]
