from django.db import models
from markdownx.models import MarkdownxField
from markdownx.utils import markdownify
from treebeard.mp_tree import MP_Node
from timemap.models import Place
from timemap.models import Activity
from timemap.models import Period
from collection.models import Collection
from ckeditor.fields import RichTextField

# Create your models here.
class Author(models.Model):
    id = models.AutoField(primary_key=True)
    last_name = models.CharField(max_length=255)
    middle_name = models.CharField(max_length=255, null=True, blank=True)
    first_name = models.CharField(max_length=255)

    def __str__(self):
        middle_name = self.middle_name if self.middle_name else ""
        return "%s %s %s" % (self.first_name, middle_name, self.last_name)


class Article(models.Model):
    id = models.AutoField(primary_key=True)
    subject_area = models.ManyToManyField("SubjectArea")
    title_eng = models.CharField("Title (English)", max_length=255)
    title_ar = models.CharField("Title (Arabic)", max_length=255)
    title_de = models.CharField("Title (German)", max_length=255)
    title_fr = models.CharField("Title (French)", max_length=255)
    authors = models.ManyToManyField("Author")
    abstract_eng = models.TextField(max_length=1500)
    abstract_ar = models.TextField(max_length=1500)
    UNPUBLISHED = "U"
    PUBLISHED = "P"
    STATUS_CHOICES = [(UNPUBLISHED, "Unpublished"), (PUBLISHED, "Published")]
    status = models.CharField(
        max_length=255, choices=STATUS_CHOICES, default=UNPUBLISHED
    )
    place = models.ManyToManyField(Place, blank=True)
    period = models.ManyToManyField(Period, blank=True)
    activity = models.ManyToManyField(
        Activity,
        verbose_name="Timemap Reference",
        help_text="An activity linking a place to a specific time range.",
    )
    body = MarkdownxField()
    collection = models.ManyToManyField(Collection, blank=True)
    transient_subject_ancestors = []

    def __str__(self):
        return "%s" % (self.title_eng)

    def formatted_markdown(self):
        return markdownify(self.body)


class SubjectArea(MP_Node):
    id = models.AutoField(primary_key=True)
    name_eng = models.CharField("Subject (English)", max_length=255)
    name_ar = models.CharField("Subject (Arabic)", max_length=255)
    name_de = models.CharField("Subject (German)", max_length=255)
    name_fr = models.CharField("Subject (French)", max_length=255)
    description = models.TextField(max_length=1500, null=True, blank=True)
    node_order_by = ["name_eng"]

    def __str__(self):
        return self.name_eng


class Reference(models.Model):
    id = models.AutoField(primary_key=True)
    author = models.CharField("Author(s)", max_length=255)
    year = models.CharField("Year", max_length=20)
    publication_info = RichTextField("Publication information", help_text="Enter the rest of the reference citation, following the bibliographic style used by the author (i.e. Form, fabric and function: Some observations on the cooking pot in antiquity, In Technology and style 2, Ceramics and Civilization. ed. W. David Kingery , pp. 157 - 172. Columbus: American Ceramic Society.")
    url = models.URLField("Persistent URL", null=True, blank=True, help_text="If a DOI or other type of persistent identifier is available, add the DOI label here (i.e. doi:0000000/000000000000")
    article = models.ManyToManyField("Article", blank=True, help_text="Select the article(s) this resource is referenced in - if an article is already selected, be sure to hold Control or Command when selecting an additional article.")

    def __str__(self):
        return "%s (%s)" % (self.author, self.year)
