from django.urls import path
from rest_framework import routers
from . import pageViews

router = routers.DefaultRouter()
router.register(r"basic-pages", pageViews.BasicPageView, "BasicPages")

urlpatterns = [
    path("", pageViews.index, name="index"),
]
