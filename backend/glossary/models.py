from django.db import models

# Create your models here.
class GlossaryTerm(models.Model):
    class Meta:
        verbose_name_plural = "Glossary terms"

    id = models.AutoField(primary_key=True)
    term_eng = models.CharField("Term (English)", max_length=255)
    term_ar = models.CharField("Term (Arabic)", max_length=255, null=True, blank=True)
    definition_eng = models.TextField("Definition (English)", null=True, blank=True)
    definition_ar = models.TextField("Definition (Arabic)", null=True, blank=True)

    def __str__(self):
        return "%s" % (self.term_eng)
