from django.contrib import admin
from import_export.admin import ImportExportModelAdmin

# Register your models here.
from .models import Image


class ImageAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ("title", "image_tag")


admin.site.register(Image, ImageAdmin)
