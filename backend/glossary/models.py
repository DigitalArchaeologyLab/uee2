from django.db import models

# Create your models here.
class GlossaryTerm(models.Model):
    class Meta:
        verbose_name_plural = "Glossary terms"

    id = models.AutoField(primary_key=True)
    name_eng = models.CharField(max_length=200)
    definition = models.TextField(null=True, blank=True)

    def __str__(self):
        return "%s" % (self.name_eng)
