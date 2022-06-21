from django.db import models
from django.utils.safestring import mark_safe
from article.models import Article
from timemap.models import Place
from timemap.models import Period
from collection.models import Collection
from ckeditor.fields import RichTextField


# Create your models here.
class Image(models.Model):
    id = models.AutoField(primary_key=True)
    image_file = models.ImageField(upload_to="images/")
    title_eng = models.CharField("Title (English)", max_length=255, unique=True)
    title_ar = models.CharField("Title (Arabic)", max_length=255, null=True, blank=True)
    title_de = models.CharField("Title (German)", max_length=255, null=True, blank=True)
    title_fr = models.CharField("Title (French)", max_length=255, null=True, blank=True)
    description = models.TextField(
        "Full Description", max_length=1000, null=True, blank=True
    )
    caption = RichTextField("Caption", null=True, blank=True)
    credit = RichTextField("Credit line", null=True, blank=True)
    creator = models.TextField(
        "Creator (photographer, illustrator, etc)",
        max_length=255,
        null=True,
        blank=True,
    )
    dateCreated = models.CharField(
        "Date created",
        max_length=255,
        null=True,
        blank=True,
        help_text="Date the original resource was created formatted as YYYY MM/DD. If month or day are not known, just enter the year (i.e. '2022 06' or '2022')",
    )
    places = models.ManyToManyField(Place, blank=True)
    periods = models.ManyToManyField(Period, blank=True)
    startDate = models.CharField(
        "Start date",
        max_length=255,
        null=True,
        blank=True,
        help_text="Include a start date if a specific year is known; otherwise, just select the approproate period. Format the value as YYYY MM/DD. If month or day are not known, just enter the year (i.e. '2022 06' or '2022')",
    )
    endDate = models.CharField(
        "End date",
        max_length=255,
        null=True,
        blank=True,
        help_text="Include an end date if a specific year is known; otherwise, just select the appropriate period. Format the value as YYYY MM/DD. If month or day are not known, just enter the year (i.e. '2022 06' or '2022')",
    )
    persons = models.TextField(
        "Person(s) within content", max_length=1000, null=True, blank=True
    )
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
    collection = models.ManyToManyField(Collection, blank=True)
    arkID = models.CharField(
        "ArkID",
        max_length=255,
        null=True,
        blank=True,
        help_text="Add the Ark ID for this resource from the UCLA Library digital asset mananagement system (i.e. ark:/21198/zz000rwn8d). NOTE: This field is not fully implemented yet and entries will not be processed at this time.",
    )

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
