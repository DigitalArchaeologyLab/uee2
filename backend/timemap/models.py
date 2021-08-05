from django.db import models
from treebeard.mp_tree import MP_Node

# Create your models here.
class Location(MP_Node):
    id = models.AutoField(primary_key=True)
    name_eng = models.CharField("Name (English)", max_length=200)
    altnames_eng = models.CharField(
        "Alternative names (English)", max_length=500, null=True, blank=True
    )
    name_ar = models.CharField("Name (Arabic)", max_length=200)
    altnames_ar = models.CharField(
        "Alternative names (Arabic)", max_length=500, null=True, blank=True
    )
    isRegion = models.BooleanField(default=False)
    isGovernate = models.BooleanField(default=False)
    isNome = models.BooleanField(default=False)
    isSite = models.BooleanField(default=False)
    isFeature = models.BooleanField(default=False)
    notes = models.TextField(null=True, blank=True)
    geojson = models.TextField(null=True, blank=True)  # change appropriately
    lat = models.CharField(max_length=50, null=True, blank=True)  # change appropriately
    lon = models.CharField(max_length=50, null=True, blank=True)  # change appropriately
    period = models.ManyToManyField("Period", blank=True)

    def __str__(self):
        return "%s" % (self.name_eng)


class Period(MP_Node):
    id = models.AutoField(primary_key=True)
    name_eng = models.CharField("Name (English)", max_length=200)
    altnames_eng = models.CharField(
        "Alternative names (English)", max_length=500, null=True, blank=True
    )
    name_ar = models.CharField("Name (Arabic)", max_length=200, null=True, blank=True)
    altnames_ar = models.CharField(
        "Alternative names (Arabic)", max_length=500, null=True, blank=True
    )
    start = models.IntegerField(null=True)
    end = models.IntegerField(null=True)

    def __str__(self):
        return "%s" % (self.name_eng)


class Activity(models.Model):
    class Meta:
        verbose_name_plural = "activities"

    id = models.AutoField(primary_key=True)
    TYPE_CHOICES = [
        ("Construction", "Construction"),
        ("Destruction", "Destruction"),
        ("Inactive / defunct", "Inactive / defunct"),
        ("Modification", "Modification"),
        ("In use", "In use"),
    ]
    type = models.CharField(max_length=200, choices=TYPE_CHOICES, default="In use")
    startDate = models.IntegerField(null=True)
    endDate = models.IntegerField(null=True)
    associatedLocation = models.ManyToManyField("Location")
    startPeriod = models.ManyToManyField("Period", related_name="startPeriod")
    endPeriod = models.ManyToManyField("Period", related_name="endPeriod")
    notes = models.TextField()

    def __str__(self):
        return "%s (%s) %s - %s" % (
            self.name_eng,
            self.type,
            self.startDate,
            self.endDate,
        )
