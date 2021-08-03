from django.db import models
from treebeard.mp_tree import MP_Node

# Create your models here.
class Place(models.Model):
    id = models.AutoField(primary_key=True)
    name_eng = models.CharField("Name (English)", max_length=200)
    altnames_eng = models.CharField(
        "Alternative names (English)", max_length=500, null=True, blank=True
    )
    name_ar = models.CharField("Name (Arabic)", max_length=200)
    altnames_ar = models.CharField(
        "Alternative names (Arabic)", max_length=500, null=True, blank=True
    )
    isRegion = models.BooleanField()
    isGovernate = models.BooleanField()
    isNome = models.BooleanField()
    isSite = models.BooleanField()
    notes = models.TextField(null=True, blank=True)
    geojson = models.TextField(null=True, blank=True)  # change appropriately
    lat = models.CharField(max_length=50, null=True, blank=True)  # change appropriately
    lon = models.CharField(max_length=50, null=True, blank=True)  # change appropriately
    parents = models.ManyToManyField("Place", related_name="place_parents", blank=True)
    children = models.ManyToManyField(
        "Place", related_name="place_children", blank=True
    )
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


class Event(models.Model):
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
    associatedFeature = models.ManyToManyField("Feature")
    associatedPlace = models.ManyToManyField("Place")
    startReign = models.ManyToManyField("Reign", related_name="startReign")
    endReign = models.ManyToManyField("Reign", related_name="endReign")
    startDynasty = models.ManyToManyField("Dynasty", related_name="startDynasty")
    endDynasty = models.ManyToManyField("Dynasty", related_name="endDynasty")
    startPhase = models.ManyToManyField("Phase", related_name="startPhase")
    endPhase = models.ManyToManyField("Phase", related_name="endPhase")
    notes = models.TextField()

    def __str__(self):
        return "%s (%s) %s - %s" % (
            self.name_eng,
            self.type,
            self.startDate,
            self.endDate,
        )


class Feature(models.Model):
    id = models.AutoField(primary_key=True)
    name_eng = models.CharField("Name (English)", max_length=200)
    altnames_eng = models.CharField("Alternative names (English)", max_length=500)
    name_ar = models.CharField("Name (Arabic)", max_length=200)
    altnames_ar = models.CharField("Alternative names (Arabic)", max_length=500)
    geojson = models.TextField()  # change appropriately
    lat = models.CharField(max_length=50)  # change appropriately
    lon = models.CharField(max_length=50)  # change appropriately
    notes = models.TextField()
    site = models.ManyToManyField("Place")

    def __str__(self):
        return "%s" % (self.name_eng)


class Phase(models.Model):
    id = models.AutoField(primary_key=True)
    name_eng = models.CharField("Name (English)", max_length=200)
    altnames_eng = models.CharField("Alternative names (English)", max_length=500)
    name_ar = models.CharField("Name (Arabic)", max_length=200)
    altnames_ar = models.CharField("Alternative names (Arabic)", max_length=500)
    start = models.IntegerField(null=True)
    end = models.IntegerField(null=True)

    def __str__(self):
        return "%s, %s - %s" % (self.name_eng, self.start, self.end)


class Dynasty(models.Model):
    class Meta:
        verbose_name_plural = "Dynasties"

    id = models.AutoField(primary_key=True)
    name_eng = models.CharField("Name (English)", max_length=200)
    altnames_eng = models.CharField("Alternative names (English)", max_length=500)
    name_ar = models.CharField("Name (Arabic)", max_length=200)
    altnames_ar = models.CharField("Alternative names (Arabic)", max_length=500)
    start = models.IntegerField(null=True)
    end = models.IntegerField(null=True)
    phase = models.ManyToManyField("Phase")

    def __str__(self):
        return "%s, %s - %s" % (self.name_eng, self.start, self.end)


class Reign(models.Model):
    id = models.AutoField(primary_key=True)
    name_eng = models.CharField("Name (English)", max_length=200)
    altnames_eng = models.CharField("Alternative names (English)", max_length=500)
    name_ar = models.CharField("Name (Arabic)", max_length=200)
    altnames_ar = models.CharField("Alternative names (Arabic)", max_length=500)
    start = models.IntegerField(null=True)
    end = models.IntegerField(null=True)
    dynasty = models.ManyToManyField("Dynasty")

    def __str__(self):
        return "%s, %s - %s" % (self.name_eng, self.start, self.end)
