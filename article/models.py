from django.db import models
from markdownx.models import MarkdownxField
from markdownx.utils import markdownify

# Create your models here.
class Author(models.Model):
  id = models.AutoField(primary_key=True)
  last_name = models.CharField(max_length=50)
  middle_name = models.CharField(max_length=50)
  first_name = models.CharField(max_length=50)

  def __str__(self):
    return '%s %s %s' % (self.first_name, self.middle_name, self.last_name)

class Article(models.Model):
  id = models.AutoField(primary_key=True)
  title_eng = models.CharField('Title (English)', max_length=200)
  title_ar = models.CharField('Title (Arabic)', max_length=200)
  title_de = models.CharField('Title (German)', max_length=200)
  title_fr = models.CharField('Title (French)', max_length=200)
  author_id = models.ForeignKey(Author, on_delete=models.PROTECT)
  abstract_eng = models.TextField(max_length=500)
  abstract_ar = models.TextField(max_length=500)
  keywords = models.ForeignKey('Keyword', on_delete=models.PROTECT)
  body = MarkdownxField()
    
  def __str__(self):
    return '%s' % (self.title_eng)
    
  def formatted_markdown(self):
    return markdownify(self.body)

class Keyword(models.Model):
  id = models.AutoField(primary_key=True)
  name_eng = models.CharField('Name (English)', max_length=200)
  name_ar = models.CharField('Name (Arabic)', max_length=200)

  def __str__(self):
    return '%s, %s' % (self.name_eng, self.name_ar)