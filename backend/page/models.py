from django.db import models
from django.db.models.fields import SlugField
from ckeditor.fields import RichTextField

# Create your models here.
class BasicPage(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField("Title", max_length=255)
    slug = models.CharField(
        "Slug",
        max_length=255,
        null=True,
        blank=True,
        help_text="Enter a word or short phrase separated by dashes to set the url for this page (i.e. new-page). Notify the technical team whenever adding a new page.",
    )
    body = RichTextField(max_length=15000)
    UNPUBLISHED = "U"
    PUBLISHED = "P"
    STATUS_CHOICES = [(UNPUBLISHED, "Unpublished"), (PUBLISHED, "Published")]
    status = models.CharField(
        max_length=255, choices=STATUS_CHOICES, default=UNPUBLISHED
    )

    def __str__(self):
        return self.title
