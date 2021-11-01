from django.db import models
from django.utils.safestring import mark_safe
from article.models import Article
from timemap.models import Place
from timemap.models import Period


# Create your models here.
class Image(models.Model):
    id = models.AutoField(primary_key=True)
    image_file = models.ImageField(upload_to="images/")
    title_eng = models.CharField("Title (English)", max_length=255)
    title_ar = models.CharField("Title (Arabic)", max_length=255, null=True, blank=True)
    title_de = models.CharField("Title (German)", max_length=255, null=True, blank=True)
    title_fr = models.CharField("Title (French)", max_length=255, null=True, blank=True)
    articles = models.ManyToManyField(Article)
    places = models.ManyToManyField(Place, blank=True)
    periods = models.ManyToManyField(Period, blank=True)
    source = models.CharField("Source", max_length=255, null=True, blank=True)
    rights_holder = models.CharField(
        "Rights Holder", max_length=255, null=True, blank=True
    )
    copyright_status = models.CharField(
        "Copyright Status", max_length=255, null=True, blank=True
    )
    permission_notes = models.TextField(
        "Permissions notes", max_length=1000, null=True, blank=True
    )
    arkID = models.CharField("ArkID", max_length=255, null=True, blank=True)

    def image_tag(self):
        if self.image_file:
            return mark_safe(
                '<img src="%s" style="height:45px;" />' % self.image_file.url
            )
        else:
            return "No Image Found"

    image_tag.short_description = "Image"

    def __str__(self):
        return self.title_eng
