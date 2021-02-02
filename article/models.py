from django.db import models

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
  abstract_eng = models.CharField(max_length=500)
  abstract_ar = models.CharField(max_length=500)
  author_id = models.ForeignKey(Author, on_delete=models.PROTECT)




  