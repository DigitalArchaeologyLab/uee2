from django.db import models
from treebeard.mp_tree import MP_Node

# Create your models here.
class Place(MP_Node):
    id = models.AutoField(primary_key=True)
    name_eng = models.CharField("Name (English)", max_length=200, unique=True)
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

    def __str__(self):
        return "%s" % (self.name_eng)


class Period(MP_Node):
    id = models.AutoField(primary_key=True)
    name_eng = models.CharField("Name (English)", max_length=200, unique=True)
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
        return "%s (%s — %s)" % (self.name_eng, self.start, self.end)


class Activity(models.Model):
    class Meta:
        verbose_name_plural = "activities"

    id = models.AutoField(primary_key=True)
    TYPE_CHOICES = [
        ("Construction", "Construction"),
        ("Destruction", "Destruction"),
        ("Inactive / defunct time", "Inactive / defunct time"),
        ("Modification", "Modification"),
        ("Use", "Use"),
    ]
    type = models.CharField(max_length=200, choices=TYPE_CHOICES, default="In use")
    startDate = models.IntegerField(null=True, blank=True)
    endDate = models.IntegerField(null=True, blank=True)
    associatedPlace = models.ManyToManyField("Place")
    startPeriod = models.ManyToManyField(
        "Period", related_name="startPeriod", blank=True
    )
    endPeriod = models.ManyToManyField("Period", related_name="endPeriod", blank=True)
    notes = models.TextField(null=True, blank=True)

    def __str__(self):
        place = ", ".join(str(p) for p in self.associatedPlace.all())
        start = ", ".join(str(s) for s in self.startPeriod.all())
        end = ", ".join(str(e) for e in self.endPeriod.all())
        return f"{place} ({start} - {end}), {self.type}"
