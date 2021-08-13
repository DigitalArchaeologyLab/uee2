from django.db import models
from markdownx.models import MarkdownxField
from markdownx.utils import markdownify
from treebeard.mp_tree import MP_Node
from timemap.models import Location
from treewidget.fields import TreeManyToManyField

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
    keywords = models.ManyToManyField("Keyword")
    UNPUBLISHED = "U"
    PUBLISHED = "P"
    STATUS_CHOICES = [(UNPUBLISHED, "Unpublished"), (PUBLISHED, "Published")]
    status = models.CharField(
        max_length=255, choices=STATUS_CHOICES, default=UNPUBLISHED
    )
    location = models.ManyToManyField(Location)
    body = MarkdownxField()
    transient_subject_ancestors = []
    treeWidgetTest = TreeManyToManyField("SubjectArea", blank=True, related_name='widgetTest')

    def __str__(self):
        return "%s" % (self.title_eng)

    def formatted_markdown(self):
        return markdownify(self.body)


class Keyword(models.Model):
    id = models.AutoField(primary_key=True)
    name_eng = models.CharField("Name (English)", max_length=255)
    name_ar = models.CharField("Name (Arabic)", max_length=255)
    KEYWORD_TYPE_CHOICES = [
        ("Places", "Places"),
        ("Periods", "Periods"),
        ("Glossary terms", "Glossary terms"),
    ]
    keyword_type = models.CharField(
        max_length=255, choices=KEYWORD_TYPE_CHOICES, default="Glossary terms"
    )

    def __str__(self):
        return "%s, %s (%s)" % (self.name_eng, self.name_ar, self.keyword_type)


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
