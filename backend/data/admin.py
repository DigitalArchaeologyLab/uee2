from django.contrib import admin
from import_export.admin import ImportExportModelAdmin

# Register your models here.
from .models import Image


class ImageAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ("image_tag", "title_eng", "title_ar", "caption")
    list_filter = ("dateCreated", "places", "periods")


admin.site.register(Image, ImageAdmin)
