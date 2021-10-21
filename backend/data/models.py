from django.db import models
from django.utils.safestring import mark_safe


# Create your models here.
class Image(models.Model):
    id = models.AutoField(primary_key=True)
    image_file = models.ImageField(upload_to="images/")
    title = models.CharField(max_length=255)

    def image_tag(self):
        if self.image_file:
            return mark_safe(
                '<img src="%s" style="height:45px;" />' % self.image_file.url
            )
        else:
            return "No Image Found"

    image_tag.short_description = "Image"

    def __str__(self):
        return self.title
