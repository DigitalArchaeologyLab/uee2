from django.urls import path
from rest_framework import routers
from . import glossaryViews

router = routers.DefaultRouter()
router.register(r"terms", glossaryViews.GlossaryView, "terms")

urlpatterns = [
    path("", glossaryViews.index, name="index"),
]
