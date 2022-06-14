from django.db import models

# Create your models here.
class Collection(models.Model):
    id = models.AutoField(primary_key=True)
    title_eng = models.CharField(
        "Collection Title (English)", max_length=255, unique=True
    )
    title_ar = models.CharField(
        "Collection Title (Arabic)", max_length=255, null=True, blank=True
    )
    title_de = models.CharField(
        "Collection Title (German)", max_length=255, null=True, blank=True
    )
    title_fr = models.CharField(
        "Collection Title (French)", max_length=255, null=True, blank=True
    )
    description = models.TextField(
        "Description", max_length=1000, null=True, blank=True
    )
    source = models.CharField("Source", max_length=255, null=True, blank=True)
    collection_creator = models.CharField(
        "Collection Curator", max_length=255, null=True, blank=True
    )

    def __str__(self):
        return self.title_eng
